/* Activas A1.1 – interactive study site (no dependencies) */
(function () {
  'use strict';

  var UNITS = window.UNITS || [];
  var UD = window.UNITDATA || {};
  var AMAP = window.AUDIO_MAP || {};
  var KEY = 'activas1.v1';

  /* ---------- storage ---------- */
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* ignore */ } }
  var state = load();

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function toast(msg) {
    var t = $('.toast');
    if (!t) { t = el('div', 'toast'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  /* normalisation: lower-case, trim, remove punctuation, squeeze spaces */
  function base(s) {
    return String(s).toLowerCase().replace(/[¿?¡!.,;:"“”'’()]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function noAccent(s) {
    return base(s).replace(/ñ/g, '\u0001').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\u0001/g, 'ñ');
  }
  /* 2 = exact, 1 = correct but accent missing, 0 = wrong */
  function judge(user, alts) {
    if (!Array.isArray(alts)) alts = [alts];
    var u = base(user), ua = noAccent(user), best = 0;
    if (!u) return 0;
    for (var i = 0; i < alts.length; i++) {
      if (u === base(alts[i])) return 2;
      if (ua === noAccent(alts[i])) best = 1;
    }
    return best;
  }
  function firstAlt(a) { return Array.isArray(a) ? a[0] : a; }
  function letter(i) { return String.fromCharCode(65 + i); }

  /* ---------- points ---------- */
  function pointsOf(ex) {
    switch (ex.type) {
      case 'fill': return ex.items.reduce(function (n, q) { return n + q.a.length; }, 0);
      case 'choice': case 'tf': return ex.items.length;
      case 'match': return ex.items.length;
      default: return 0;
    }
  }
  function exId(u, ex) { return u + '-' + ex.id; }

  /* ---------- audio ---------- */
  var speaking = false;
  function speakLines(lines, onend) {
    if (!('speechSynthesis' in window)) { toast('이 브라우저는 음성 합성을 지원하지 않습니다.'); return; }
    window.speechSynthesis.cancel();
    var voices = window.speechSynthesis.getVoices();
    var v = voices.filter(function (x) { return /^es(-|_)ES/i.test(x.lang); })[0] ||
            voices.filter(function (x) { return /^es/i.test(x.lang); })[0];
    var i = 0; speaking = true;
    (function next() {
      if (!speaking || i >= lines.length) { speaking = false; if (onend) onend(); return; }
      var u = new SpeechSynthesisUtterance(String(lines[i++]).replace(/_+/g, ' '));
      u.lang = 'es-ES'; if (v) u.voice = v; u.rate = 0.9;
      u.onend = function () { setTimeout(next, 450); };
      u.onerror = function () { speaking = false; if (onend) onend(); };
      window.speechSynthesis.speak(u);
    })();
  }
  function stopSpeak() { speaking = false; if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }

  function buildAudio(ex) {
    var a = ex.audio; if (!a) return null;
    var info = AMAP[a.key] || { file: 'audio/' + a.key + '.mp3', label: a.key };
    var box = el('div', 'audiobox');
    var row = el('div', 'row');
    var au = document.createElement('audio');
    au.controls = true; au.preload = 'none'; au.src = info.file;
    var st = el('span', 'st', '🎧 ' + esc(info.label) + ' · <code>' + esc(info.file) + '</code>');
    au.addEventListener('error', function () {
      st.innerHTML = '⚠️ 음원 파일 <code>' + esc(info.file) + '</code> 이(가) 아직 없습니다. 아래 “음성 합성” 버튼으로 대신 들을 수 있어요.';
    });
    row.appendChild(au);
    box.appendChild(row);
    var row2 = el('div', 'row'); row2.style.marginTop = '6px';
    if (a.script && a.script.length) {
      var tts = el('button', 'btn sm', '🔊 음성 합성으로 듣기');
      tts.type = 'button';
      tts.onclick = function () {
        if (speaking) { stopSpeak(); tts.textContent = '🔊 음성 합성으로 듣기'; return; }
        tts.textContent = '⏹ 정지';
        speakLines(a.script.map(function (l) { return typeof l === 'string' ? l : l.t; }), function () { tts.textContent = '🔊 음성 합성으로 듣기'; });
      };
      var sc = el('button', 'btn sm', '📄 스크립트 보기/숨기기'); sc.type = 'button';
      var sbox = el('div', 'script');
      sbox.innerHTML = a.script.map(function (l) {
        if (typeof l === 'string') return '<p>' + esc(l) + '</p>';
        return '<p>' + (l.w ? '<b>' + esc(l.w) + '</b> ' : '') + esc(l.t) + '</p>';
      }).join('');
      sc.onclick = function () { sbox.classList.toggle('show'); };
      row2.appendChild(tts); row2.appendChild(sc);
      box.appendChild(row2); box.appendChild(sbox);
    }
    box.appendChild(el('div', 'st', ''));
    box._st = st; row.appendChild(st);
    return box;
  }

  /* ---------- exercise renderers ---------- */
  function renderFill(ex, body) {
    if (ex.bank) body.appendChild(el('div', 'hint', '<b>단어 상자</b> · ' + ex.bank.map(esc).join(' &nbsp;/&nbsp; ')));
    ex.items.forEach(function (q, qi) {
      var d = el('div', 'q'); d.dataset.qi = qi;
      var parts = q.q.split('{_}');
      var h = '<span class="n">' + (q.n != null ? q.n : qi + 1) + '</span>';
      var wrap = el('span', 'qtext'); wrap.innerHTML = h;
      parts.forEach(function (p, i) {
        var s = el('span'); s.innerHTML = p; wrap.appendChild(s);
        if (i < parts.length - 1) {
          var inp = document.createElement('input');
          inp.type = 'text'; inp.className = 'blank'; inp.dataset.bi = i;
          inp.autocomplete = 'off'; inp.autocapitalize = 'off'; inp.spellcheck = false;
          var len = String(firstAlt(q.a[i])).length;
          inp.style.width = Math.max(5, Math.min(26, len + 3)) + 'ch';
          wrap.appendChild(inp);
        }
      });
      d.appendChild(wrap);
      body.appendChild(d);
    });
  }
  function checkFill(ex, body) {
    var s = 0, t = 0;
    ex.items.forEach(function (q, qi) {
      var d = body.querySelector('.q[data-qi="' + qi + '"]');
      var inps = d.querySelectorAll('input.blank');
      var res = [];
      if (q.unordered) {
        var used = {};
        for (var i = 0; i < inps.length; i++) {
          var r = 0, hit = -1;
          for (var j = 0; j < q.a.length; j++) {
            if (used[j]) continue;
            var jr = judge(inps[i].value, q.a[j]);
            if (jr > r) { r = jr; hit = j; if (r === 2) break; }
          }
          if (hit >= 0) used[hit] = true;
          res.push(r);
        }
      } else {
        for (var k = 0; k < inps.length; k++) res.push(judge(inps[k].value, q.a[k]));
      }
      var okAll = true, accentNote = false;
      res.forEach(function (r, i) {
        t++; if (r > 0) s++; else okAll = false;
        if (r === 1) accentNote = true;
        inps[i].classList.remove('ok', 'bad'); inps[i].classList.add(r > 0 ? 'ok' : 'bad');
      });
      mark(d, okAll);
      var old = d.querySelector('.ans'); if (old) old.remove();
      var oldw = d.querySelector('.why'); if (oldw) oldw.remove();
      if (accentNote) d.appendChild(el('span', 'why', '✔ 정답이에요! 다만 <b>악센트(á é í ó ú ñ)</b>를 확인해 보세요.'));
    });
    return { s: s, t: t };
  }
  function showFill(ex, body) {
    ex.items.forEach(function (q, qi) {
      var d = body.querySelector('.q[data-qi="' + qi + '"]');
      var old = d.querySelector('.ans'); if (old) old.remove();
      var txt = q.a.map(function (a) { return Array.isArray(a) ? a.join(' / ') : a; }).join(' · ');
      d.appendChild(el('span', 'ans', '정답: ' + esc(txt)));
      if (q.why) { var w = d.querySelector('.why'); if (!w) d.appendChild(el('span', 'why', q.why)); }
    });
  }

  function renderChoice(ex, body, uid) {
    ex.items.forEach(function (q, qi) {
      var d = el('div', 'q'); d.dataset.qi = qi;
      d.innerHTML = '<div class="qtext"><span class="n">' + (q.n != null ? q.n : qi + 1) + '</span>' + q.q + '</div>';
      var opts = ex.type === 'tf' ? ['V (Verdadero · 참)', 'F (Falso · 거짓)'] : q.o;
      opts.forEach(function (o, oi) {
        var lb = el('label', 'opt');
        var r = document.createElement('input'); r.type = 'radio'; r.name = uid + '-' + ex.id + '-' + qi; r.value = oi;
        lb.appendChild(r); lb.appendChild(el('span', '', ex.type === 'tf' ? esc(o) : o));
        d.appendChild(lb);
      });
      body.appendChild(d);
    });
  }
  function choiceAnswers(ex, q) {
    if (ex.type === 'tf') return [q.a ? 0 : 1];
    return Array.isArray(q.a) ? q.a : [q.a];
  }
  function checkChoice(ex, body) {
    var s = 0;
    ex.items.forEach(function (q, qi) {
      var d = body.querySelector('.q[data-qi="' + qi + '"]');
      var chosen = d.querySelector('input:checked');
      var ans = choiceAnswers(ex, q);
      d.querySelectorAll('label.opt').forEach(function (l) { l.classList.remove('ok', 'bad'); });
      var ok = false;
      if (chosen) {
        var ci = +chosen.value; ok = ans.indexOf(ci) >= 0;
        chosen.parentNode.classList.add(ok ? 'ok' : 'bad');
      }
      if (ok) s++;
      mark(d, ok);
      var old = d.querySelector('.ans'); if (old) old.remove();
      var oldw = d.querySelector('.why'); if (oldw) oldw.remove();
      if (q.why && chosen) d.appendChild(el('span', 'why', q.why));
    });
    return { s: s, t: ex.items.length };
  }
  function showChoice(ex, body) {
    ex.items.forEach(function (q, qi) {
      var d = body.querySelector('.q[data-qi="' + qi + '"]');
      var ans = choiceAnswers(ex, q);
      var labs = d.querySelectorAll('label.opt');
      ans.forEach(function (i) { labs[i].classList.add('ok'); });
      var old = d.querySelector('.ans'); if (old) old.remove();
      var opts = ex.type === 'tf' ? ['V', 'F'] : q.o;
      d.appendChild(el('span', 'ans', '정답: ' + ans.map(function (i) { return opts[i]; }).join(' / ')));
      if (q.why && !d.querySelector('.why')) d.appendChild(el('span', 'why', q.why));
    });
  }

  function renderMatch(ex, body) {
    var hint = el('div', 'hint');
    hint.innerHTML = '<b>보기</b><br>' + ex.options.map(function (o, i) { return '<b>' + letter(i) + '</b>. ' + o; }).join(' &nbsp; ');
    if (!ex.hideOptions) body.appendChild(hint);
    ex.items.forEach(function (q, qi) {
      var d = el('div', 'q'); d.dataset.qi = qi;
      var sel = document.createElement('select'); sel.className = 'sel';
      sel.innerHTML = '<option value="">선택…</option>' + ex.options.map(function (o, i) {
        return '<option value="' + i + '">' + letter(i) + '. ' + String(o).replace(/<[^>]+>/g, '') + '</option>';
      }).join('');
      d.innerHTML = '<span class="n">' + (q.n != null ? q.n : qi + 1) + '</span><span class="qtext">' + q.t + '</span> &nbsp;→&nbsp; ';
      d.appendChild(sel);
      body.appendChild(d);
    });
  }
  function matchAnswers(q) { return Array.isArray(q.a) ? q.a : [q.a]; }
  function checkMatch(ex, body) {
    var s = 0;
    ex.items.forEach(function (q, qi) {
      var d = body.querySelector('.q[data-qi="' + qi + '"]');
      var sel = d.querySelector('select');
      var ok = sel.value !== '' && matchAnswers(q).indexOf(+sel.value) >= 0;
      sel.classList.remove('ok', 'bad'); sel.classList.add(ok ? 'ok' : 'bad');
      if (ok) s++;
      mark(d, ok);
      var old = d.querySelector('.ans'); if (old) old.remove();
    });
    return { s: s, t: ex.items.length };
  }
  function showMatch(ex, body) {
    ex.items.forEach(function (q, qi) {
      var d = body.querySelector('.q[data-qi="' + qi + '"]');
      var old = d.querySelector('.ans'); if (old) old.remove();
      d.appendChild(el('span', 'ans', '정답: ' + matchAnswers(q).map(function (i) {
        return letter(i) + '. ' + String(ex.options[i]).replace(/<[^>]+>/g, '');
      }).join(' / ')));
    });
  }

  function renderFree(ex, body) {
    var d = el('div', 'free');
    if (ex.text) d.appendChild(el('div', '', ex.text));
    if (ex.prompts) d.appendChild(el('ul', '', ex.prompts.map(function (p) { return '<li>' + p + '</li>'; }).join('')));
    if (ex.models) d.appendChild(el('ul', 'model', ex.models.map(function (p) { return '<li>' + p + '</li>'; }).join('')));
    body.appendChild(d);
  }

  function mark(d, ok) {
    d.classList.remove('ok', 'bad'); d.classList.add(ok ? 'ok' : 'bad');
    var m = d.querySelector('.mark'); if (m) m.remove();
    var first = d.querySelector('.qtext') || d;
    var sp = el('span', 'mark', ok ? '✔' : '✘'); first.appendChild(sp);
  }
  function clearMarks(body) {
    body.querySelectorAll('.q').forEach(function (d) { d.classList.remove('ok', 'bad'); });
    body.querySelectorAll('.mark,.ans,.why').forEach(function (n) { n.remove(); });
    body.querySelectorAll('.ok,.bad').forEach(function (n) { n.classList.remove('ok', 'bad'); });
  }

  /* ---------- unit page ---------- */
  function topbar(cur) {
    var h = '<div class="topbar"><div class="wrap"><a class="brand" href="index.html">ACTIVAS <span>A1.1</span></a><nav class="topnav">';
    h += '<a href="index.html"' + (cur === 0 ? ' class="on"' : '') + '>메인</a>';
    UNITS.forEach(function (u) {
      h += '<a href="unidad' + u.id + '.html"' + (cur === u.id ? ' class="on"' : '') + '>U' + u.id + '</a>';
    });
    return h + '</nav></div></div>';
  }
  function unitTotals(uid) {
    var D = UD[uid]; if (!D) return { s: 0, t: 0 };
    var s = 0, t = 0;
    D.sections.forEach(function (sec) {
      sec.items.forEach(function (ex) {
        var p = pointsOf(ex); t += p;
        var st = state[exId(uid, ex)]; if (st) s += st.s;
      });
    });
    return { s: s, t: t };
  }
  function refreshScorebar(uid) {
    var tot = unitTotals(uid);
    var sb = $('.scorebar'); if (!sb) return;
    var pct = tot.t ? Math.round(100 * tot.s / tot.t) : 0;
    $('.bar i', sb).style.width = pct + '%';
    $('.sc', sb).innerHTML = '점수 <b>' + tot.s + ' / ' + tot.t + '</b> (' + pct + '%)';
  }

  function buildUnit(uid) {
    var U = UNITS.filter(function (u) { return u.id === uid; })[0];
    var D = UD[uid];
    var app = $('#app');
    document.documentElement.style.setProperty('--uc', U.color);
    var html = topbar(uid);
    html += '<div class="scorebar"><div class="wrap"><span class="sc"></span><div class="bar"><i></i></div>' +
      '<button class="btn sm" id="gradeAll" type="button">이 단원 전체 채점</button>' +
      '<button class="btn sm" id="resetUnit" type="button">점수 초기화</button></div></div>';
    html += '<div class="uhead"><div class="wrap"><small>UNIDAD ' + uid + '</small><h1>' + esc(U.title) + '</h1><div>' + esc(U.ko) + '</div>' +
      '<ul class="goals">' + U.goals.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul></div></div>';
    app.innerHTML = html;
    var main = el('div', 'wrap');
    var toc = el('div', 'toc');
    D.sections.forEach(function (sec) { toc.innerHTML += '<a href="#' + sec.id + '">' + esc(sec.title) + '</a>'; });
    main.appendChild(toc);

    D.sections.forEach(function (sec) {
      var S = el('section', 'section'); S.id = sec.id;
      S.innerHTML = '<h2>' + esc(sec.title) + (sec.ko ? ' <small class="note">· ' + esc(sec.ko) + '</small>' : '') + '</h2>';
      if (sec.notes) { var n = el('div', 'panel', sec.notes); S.appendChild(n); }
      sec.items.forEach(function (ex) { S.appendChild(buildEx(uid, ex)); });
      main.appendChild(S);
    });

    var np = el('div', 'nextprev');
    var prev = UNITS.filter(function (u) { return u.id === uid - 1; })[0];
    var next = UNITS.filter(function (u) { return u.id === uid + 1; })[0];
    np.innerHTML = (prev ? '<a class="btn" href="unidad' + prev.id + '.html">← Unidad ' + prev.id + '</a>' : '<a class="btn" href="index.html">← 메인</a>') +
      (next ? '<a class="btn pri" href="unidad' + next.id + '.html">Unidad ' + next.id + ' →</a>' : '<a class="btn pri" href="index.html">메인으로 →</a>');
    main.appendChild(np);
    main.appendChild(el('footer', 'site', 'Activas Curso de español A1.1 · Nuria Gelado Rodríguez (© 2019) 교재 기반 수업용 학습 사이트'));
    app.appendChild(main);
    refreshScorebar(uid);

    $('#gradeAll').onclick = function () {
      document.querySelectorAll('.ex[data-graded="1"] .btn-check').forEach(function (b) { b.click(); });
      toast('전체 채점을 완료했어요.');
    };
    $('#resetUnit').onclick = function () {
      if (!confirm('이 단원의 점수를 모두 지울까요?')) return;
      D.sections.forEach(function (sec) { sec.items.forEach(function (ex) { delete state[exId(uid, ex)]; }); });
      save(state);
      document.querySelectorAll('.ex[data-graded="1"] .btn-reset').forEach(function (b) { b.click(); });
      refreshScorebar(uid);
    };
  }

  function buildEx(uid, ex) {
    var card = el('article', 'ex'); card.id = 'ex-' + ex.id;
    var graded = pointsOf(ex) > 0;
    if (graded) card.dataset.graded = '1';
    var head = el('header');
    head.innerHTML = '<div class="no">' + esc(ex.no || '') + '</div><div class="ti"><b>' + (ex.t || '') + '</b><span>' + (ex.ko || '') + '</span></div>' +
      (graded ? '<span class="pill">' + pointsOf(ex) + '문항</span>' : '<span class="pill">활동</span>');
    card.appendChild(head);
    var body = el('div', 'body');
    var ab = buildAudio(ex); if (ab) body.appendChild(ab);
    if (ex.hint) body.appendChild(el('div', 'hint', ex.hint));
    var inner = el('div', 'inner');
    if (ex.type === 'fill') renderFill(ex, inner);
    else if (ex.type === 'choice' || ex.type === 'tf') renderChoice(ex, inner, uid);
    else if (ex.type === 'match') renderMatch(ex, inner);
    else renderFree(ex, inner);
    body.appendChild(inner);
    card.appendChild(body);

    if (graded) {
      var foot = el('div', 'foot');
      var bc = el('button', 'btn pri btn-check', '정답 확인'); bc.type = 'button';
      var bs = el('button', 'btn btn-show', '정답 보기'); bs.type = 'button';
      var br = el('button', 'btn btn-reset', '다시 풀기'); br.type = 'button';
      foot.appendChild(bc); foot.appendChild(bs); foot.appendChild(br);
      card.appendChild(foot);
      var pill = $('.pill', head);
      function setPill(r) {
        var pct = r.t ? r.s / r.t : 0;
        pill.className = 'pill ' + (pct === 1 ? 'ok' : pct >= 0.6 ? 'mid' : 'no');
        pill.textContent = r.s + ' / ' + r.t;
      }
      var prev = state[exId(uid, ex)];
      if (prev) setPill(prev);
      bc.onclick = function () {
        var r;
        if (ex.type === 'fill') r = checkFill(ex, inner);
        else if (ex.type === 'match') r = checkMatch(ex, inner);
        else r = checkChoice(ex, inner);
        state[exId(uid, ex)] = r; save(state); setPill(r); refreshScorebar(uid);
      };
      bs.onclick = function () {
        if (ex.type === 'fill') showFill(ex, inner);
        else if (ex.type === 'match') showMatch(ex, inner);
        else showChoice(ex, inner);
      };
      br.onclick = function () {
        clearMarks(inner);
        inner.querySelectorAll('input[type=text]').forEach(function (i) { i.value = ''; });
        inner.querySelectorAll('input[type=radio]').forEach(function (i) { i.checked = false; });
        inner.querySelectorAll('select').forEach(function (s) { s.value = ''; });
        delete state[exId(uid, ex)]; save(state);
        pill.className = 'pill'; pill.textContent = pointsOf(ex) + '문항';
        refreshScorebar(uid);
      };
    }
    return card;
  }

  /* ---------- home ---------- */
  function buildHome() {
    var app = $('#app');
    var h = topbar(0);
    h += '<div class="wrap"><div class="hero"><div class="tag">Curso de español A1.1</div><h1>ACTIVAS <span>A1.1</span></h1>' +
      '<p>국제학교 스페인어 수업용 인터랙티브 학습 사이트입니다. 단원을 선택해 교재의 모든 연습문제를 풀고, 점수와 정답을 바로 확인하세요. 듣기 문제는 각 문제의 재생 버튼으로 들을 수 있어요.</p></div>';
    h += '<div class="grid">';
    UNITS.forEach(function (u) {
      var tot = unitTotals(u.id), pct = tot.t ? Math.round(100 * tot.s / tot.t) : 0;
      h += '<a class="ucard" href="unidad' + u.id + '.html" style="--c:' + u.color + '"><div class="head"><small>UNIDAD ' + u.id + ' · p.' + u.page + '</small><h3>' + esc(u.title) + '</h3><div class="ko">' + esc(u.ko) + '</div></div>' +
        '<div class="body"><ul>' + u.goals.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul>' +
        '<div class="prog">내 점수 ' + tot.s + ' / ' + tot.t + ' (' + pct + '%)<div class="bar"><i style="width:' + pct + '%"></i></div></div></div></a>';
    });
    h += '</div>';

    h += '<h2 class="sec">교재 한눈에 보기</h2><div class="panel tbl"><table class="t"><thead><tr><th>단원</th><th>문법</th><th>어휘</th><th>읽기·듣기</th><th>대화(Iniciando conversación)</th></tr></thead><tbody>';
    UNITS.forEach(function (u) {
      h += '<tr><td><b><a href="unidad' + u.id + '.html">' + u.id + '. ' + esc(u.title) + '</a></b></td><td>' + u.summary.grammar + '</td><td>' + u.summary.vocab + '</td><td>' + u.summary.skills + '</td><td>' + u.summary.conv + '</td></tr>';
    });
    h += '</tbody></table></div>';
    h += '<h2 class="sec">이 사이트 사용법</h2><div class="panel"><ul style="margin:0;padding-left:20px">' +
      '<li><b>정답 확인</b>: 각 문제의 ✔/✘ 와 점수가 표시됩니다. <b>정답 보기</b>로 답을 볼 수 있고 <b>다시 풀기</b>로 초기화합니다.</li>' +
      '<li>빈칸은 스페인어로 입력하세요. 대소문자·문장부호는 무시하고, 악센트가 빠져도 정답으로 인정하되 알려 줍니다.</li>' +
      '<li>점수는 이 브라우저에 자동 저장됩니다(기기가 바뀌면 처음부터).</li>' +
      '<li>짝 활동·말하기 활동(Habla, Interactúa 등)은 채점 없이 수업용 안내 카드로 들어 있습니다.</li>' +
      '<li>사진·그림을 보고 푸는 문제는 그림 없이 풀 수 없어 교재를 보며 활동하도록 제외했습니다.</li></ul></div>';
    h += '<footer class="site">Activas Curso de español A1.1 · Nuria Gelado Rodríguez (© 2019) 교재 기반 수업용 학습 사이트</footer></div>';
    app.innerHTML = h;
  }

  /* ---------- boot ---------- */
  function boot() {
    var uid = parseInt(document.body.getAttribute('data-unit'), 10);
    if (uid) buildUnit(uid); else buildHome();
    if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
