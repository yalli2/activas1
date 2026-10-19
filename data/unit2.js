(window.UNITDATA = window.UNITDATA || {})[2] = {
  sections: [
    {
      id: 'u2-alfabeto', title: 'El alfabeto y la pronunciación', ko: 'p.11–12 알파벳 · 철자 · 발음',
      notes: '<p class="note">A a · B be · C ce · CH che · D de · E e · F efe · G ge · H hache · I i · J jota · K ka · L ele · LL elle · M eme · N ene · Ñ eñe · O o · P pe · Q cu · R erre · S ese · T te · U u · V uve · W uve doble · X equis · Y i griega · Z zeta</p>' +
        '<table class="t"><tr><th>소리</th><th>철자 규칙</th></tr><tr><td>/θ/ (또는 /s/)</td><td>c + e, i (ce, ci) · z + a, o, u</td></tr><tr><td>/k/</td><td>c + a, o, u · qu + e, i (que, qui)</td></tr><tr><td>/g/</td><td>g + a, o, u · gu + e, i (gue, gui)</td></tr><tr><td>/x/</td><td>g + e, i (ge, gi) · j + a, e, i, o, u</td></tr></table>',
      items: [
        { id: 'p11e1', no: 'p.11 ①', t: 'Escucha el aviso por megafonía en el aeropuerto de Barajas. Numera los avisos en el orden que los oigas.', ko: '공항 안내방송을 듣고 들은 순서대로 1~3 번호를 쓰세요.',
          type: 'fill', audio: { key: 'u2-aviso', script: [
            'Pasajeros del vuelo con destino a Barcelona XLM 4568, por favor embarquen por la puerta S 7.',
            'Último aviso a los pasajeros del vuelo con destino a Barcelona XLM 4568, por favor embarquen por la puerta S 7.',
            'Señorita Adriana López del vuelo con destino a Barcelona XLM 4568, por favor embarque urgentemente por la puerta S 7.'] },
          items: [
            { q: '«Señorita Adriana López del vuelo con destino a Barcelona…» → {_}', a: ['3'] },
            { q: '«Último aviso a los pasajeros del vuelo con destino a Barcelona…» → {_}', a: ['2'] },
            { q: '«Pasajeros del vuelo con destino a Barcelona…» → {_}', a: ['1'] }
          ] },
        { id: 'p11e3', no: 'p.11 ③', t: 'Escribe las letras del cuadro en el lugar correcto.', ko: '글자 이름을 보고 알파벳을 쓰세요. (CH, LL은 두 글자)',
          type: 'fill', items: [
            { q: '<b>be</b> = {_} · <b>ce</b> = {_} · <b>che</b> = {_} · <b>e</b> = {_} · <b>efe</b> = {_}', a: ['B', 'C', 'CH', 'E', 'F'] },
            { q: '<b>ge</b> = {_} · <b>hache</b> = {_} · <b>i</b> = {_} · <b>jota</b> = {_} · <b>ele</b> = {_}', a: ['G', 'H', 'I', 'J', 'L'] },
            { q: '<b>elle</b> = {_} · <b>ene</b> = {_} · <b>eñe</b> = {_} · <b>pe</b> = {_} · <b>cu</b> = {_}', a: ['LL', 'N', 'Ñ', 'P', 'Q'] },
            { q: '<b>erre</b> = {_} · <b>ese</b> = {_} · <b>te</b> = {_} · <b>u</b> = {_} · <b>uve</b> = {_}', a: ['R', 'S', 'T', 'U', 'V'] },
            { q: '<b>uve doble</b> = {_} · <b>equis</b> = {_} · <b>zeta</b> = {_}', a: ['W', 'X', 'Z'] }
          ] },
        { id: 'p11e2', no: 'p.11 ②', t: 'Escucha de nuevo y escribe cómo se deletrean estas letras.', ko: '다시 듣고 글자 이름을 쓰세요.',
          type: 'fill', audio: { key: 'u2-letras', script: ['ese', 'ele', 'equis', 'eme'] },
          items: [{ q: 'S: {_} · L: {_} · X: {_} · M: {_}', a: ['ese', 'ele', 'equis', 'eme'] }] },
        { id: 'p12e6', no: 'p.12 ⑥', t: 'Escucha el diálogo y ordena las frases.', ko: '대화를 듣고 문장의 순서를 1~6으로 쓰세요.',
          type: 'fill', audio: { key: 'u2-reserva', script: [
            'Hola, soy Pablo Torres. Tengo una reserva.', '¿Cómo se escribe su apellido?', 'T-O-R-R-E-S.', '¿Perdón?', 'T-O-R-R-E-S.', 'Gracias.'] },
          items: [
            { q: 'T-O-R-R-E-S. (첫 번째) → {_}', a: ['3'] },
            { q: 'Hola, soy Pablo Torres. Tengo una reserva. → {_}', a: ['1'] },
            { q: '¿Perdón? → {_}', a: ['4'] },
            { q: '¿Cómo se escribe su apellido? → {_}', a: ['2'] },
            { q: 'Gracias. → {_}', a: ['6'] },
            { q: 'T-O-R-R-E-S. (두 번째) → {_}', a: ['5'] }
          ] },
        { id: 'p12e8', no: 'p.12 ⑦–⑧', t: 'Sonidos y deletreo. Completa las reglas.', ko: '소리와 철자 규칙을 완성하세요. (순서 상관없음)',
          type: 'fill', items: [
            { q: 'El sonido /θ/ se puede escribir con las letras «{_}» y «{_}».', a: ['c', 'z'], unordered: true },
            { q: 'El sonido /k/ se puede escribir con las letras «{_}» y «{_}».', a: ['c', 'q'], unordered: true },
            { q: 'El sonido /x/ se puede escribir con las letras «{_}» y «{_}».', a: ['g', 'j'], unordered: true },
            { q: 'La letra c suena /θ/ antes de las vocales: c + {_}, {_}', a: ['e', 'i'], unordered: true },
            { q: 'La letra c suena /k/ antes de las vocales: c + {_}, {_}, {_}', a: ['a', 'o', 'u'], unordered: true },
            { q: 'La letra g suena /g/ antes de: g + {_}, {_}, {_} y también gu + {_}, {_}', a: ['a', 'o', 'u', 'e', 'i'], unordered: true },
            { q: 'La letra g suena /x/ antes de: g + {_}, {_}', a: ['e', 'i'], unordered: true },
            { q: 'La letra «{_}» siempre se pronuncia /x/.', a: ['j'] },
            { q: 'La letra «{_}» siempre se pronuncia /θ/ o /s/.', a: ['z'] },
            { q: 'Con las sílabas gue / gui y que / qui, la letra que no se pronuncia es la «{_}».', a: ['u'] }
          ] },
        { id: 'p12e9', no: 'p.12 ⑨', t: 'Escribe las palabras debajo de los sonidos correctos.', ko: '각 단어의 소리를 고르세요. (cincuenta는 두 소리 모두 가능)',
          type: 'choice', items: [
            { q: 'Argentina', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 2 },
            { q: 'Suecia', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 0 },
            { q: 'Egipto', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 2 },
            { q: 'ojos', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 2 },
            { q: 'Lucía', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 0 },
            { q: 'azúl', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 0 },
            { q: 'Francia', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 0 },
            { q: 'Japón', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 2 },
            { q: 'camarero', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 1 },
            { q: 'largo', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 3 },
            { q: 'trabaja', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 2 },
            { q: 'guerra', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: 3 },
            { q: 'cincuenta', o: ['/θ/ – /s/', '/k/', '/x/', '/g/'], a: [0, 1] }
          ] },
        { id: 'c33', no: 'p.33', t: 'COMUNICACIÓN ② Sonidos y letras — completa las reglas.', ko: '의사소통 활동: 소리와 글자',
          type: 'fill', items: [
            { q: 'Para que la letra c suene /k/ la deben seguir las vocales: c + {_}, {_}, {_}', a: ['a', 'o', 'u'], unordered: true },
            { q: 'Para que la letra c suene /θ/ la deben seguir las vocales: c + {_}, {_}', a: ['e', 'i'], unordered: true },
            { q: 'Para que la letra g suene /g/: g + {_}, {_}, {_}', a: ['a', 'o', 'u'], unordered: true },
            { q: 'Para que la letra g suene /x/: g + {_}, {_}', a: ['e', 'i'], unordered: true },
            { q: '¿Qué letra siempre se pronuncia con el sonido /x/? Letra {_}', a: ['j'] },
            { q: '¿Qué letra siempre se pronuncia /θ/ o /s/? Letra {_}', a: ['z'] },
            { q: 'Con las sílabas gue / gui, ¿qué letra no se pronuncia? Letra {_}', a: ['u'] },
            { q: 'Con las sílabas que / qui, ¿qué letra no se pronuncia? Letra {_}', a: ['u'] }
          ] }
      ]
    },
    {
      id: 'u2-clase', title: 'En la clase', ko: 'p.13–14 수업 용어 · 숫자 · 교실 물건',
      notes: '<table class="t"><tr><th>0–10</th><td>cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez</td></tr><tr><th>11–20</th><td>once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte</td></tr></table>' +
        '<p><b>관사</b>: un/una(불특정, 아무거나) · el/la(특정, 하나뿐인 것). 예) ¿Tienes un boli? / Pásame el borrador.</p>',
      items: [
        { id: 'p13e4', no: 'p.13 ④', t: 'Escucha las instrucciones y numera los dibujos A–J.', ko: '활동: 수업 지시문(Lee, Mira, Escucha, Piensa, Juega, Escribe, Pregunta, Habla, Empareja, Trabajad en parejas)을 듣고 그림에 번호를 붙이세요.',
          type: 'free', audio: { key: 'u2-instr', script: ['Escucha la audición.', 'Empareja las palabras.', 'Lee el texto.', 'Habla con tu compañero.', 'Mira la fotografía.', 'Escribe las respuestas.', 'Pregunta a tu compañero.', '¿Qué piensas?', 'Trabajad en parejas.'] },
          text: '그림이 있는 활동이라 교재 p.13을 보면서 진행하세요.' },
        { id: 'p13e5', no: 'p.13 ⑤', t: 'Dictado: Escucha y completa las instrucciones.', ko: '듣고 수업 지시문을 완성하세요.',
          type: 'fill', audio: { key: '2.3', script: ['Escucha la audición', 'Empareja las palabras', 'Lee el texto', 'Habla con tu compañero', 'Mira la fotografía', 'Escribe las respuestas', 'Pregunta a tu compañero', '¿Qué piensas?'] },
          items: [
            { q: 'Escucha la {_}', a: ['audición'] },
            { q: 'Empareja las {_}', a: ['palabras'] },
            { q: 'Lee el {_}', a: ['texto'] },
            { q: 'Habla con tu {_}', a: ['compañero'] },
            { q: 'Mira la {_}', a: ['fotografía'] }
          ] },
        { id: 'p13e6', no: 'p.13 ⑥', t: '¿Quién dice las frases: el estudiante (E) o el profesor (P)?', ko: '학생(E)과 선생님(P) 중 누가 하는 말일까요?',
          type: 'choice', items: [
            { q: '¿Qué significa «amor»?', o: ['Estudiante (E)', 'Profesor (P)'], a: 0 },
            { q: '¿Por qué llegas tarde?', o: ['Estudiante (E)', 'Profesor (P)'], a: 1 },
            { q: '¿Puedes repetir por favor?', o: ['Estudiante (E)', 'Profesor (P)'], a: 0 },
            { q: '¿Cómo se dice «friend» en español?', o: ['Estudiante (E)', 'Profesor (P)'], a: 0 },
            { q: 'No entiendo.', o: ['Estudiante (E)', 'Profesor (P)'], a: 0 },
            { q: 'Tarea para mañana, ejercicios 1 y 2.', o: ['Estudiante (E)', 'Profesor (P)'], a: 1 },
            { q: '¿Qué página?', o: ['Estudiante (E)', 'Profesor (P)'], a: 0 },
            { q: '¿Alguna pregunta?', o: ['Estudiante (E)', 'Profesor (P)'], a: 1 },
            { q: '¿Puedo ir al baño?', o: ['Estudiante (E)', 'Profesor (P)'], a: 0 },
            { q: '¿Has hecho la tarea?', o: ['Estudiante (E)', 'Profesor (P)'], a: 1 }
          ] },
        { id: 'p13e9', no: 'p.13 ⑧–⑨', t: 'Escribe los números 0–10 con letras.', ko: '숫자를 듣고 스페인어 철자로 쓰세요.',
          type: 'fill', audio: { key: 'u2-num10', script: ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'] },
          items: [
            { q: '0 → {_} · 1 → {_} · 2 → {_} · 3 → {_}', a: ['cero', 'uno', 'dos', 'tres'] },
            { q: '4 → {_} · 5 → {_} · 6 → {_} · 7 → {_}', a: ['cuatro', 'cinco', 'seis', 'siete'] },
            { q: '8 → {_} · 9 → {_} · 10 → {_}', a: ['ocho', 'nueve', 'diez'] }
          ] },
        { id: 'p13e10', no: 'p.13 ⑩', t: 'Empareja los números 10–20 con su forma escrita.', ko: '숫자를 스페인어 철자로 쓰세요.',
          type: 'fill', items: [
            { q: '10 → {_} · 11 → {_} · 12 → {_} · 13 → {_} · 14 → {_}', a: ['diez', 'once', 'doce', 'trece', 'catorce'] },
            { q: '15 → {_} · 16 → {_} · 17 → {_} · 18 → {_} · 19 → {_} · 20 → {_}', a: ['quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte'] }
          ] },
        { id: 'p14e4', no: 'p.14 ④', t: 'Escucha de nuevo y completa las frases con las palabras que oigas.', ko: '듣고 빈칸을 채우세요.',
          type: 'fill', audio: { key: '2.5', script: ['Oye Ana, Ana, ¿tienes un boli de sobra?', 'Sí, toma.', 'Ana, ¿tienes una regla?', 'Qué va, no tengo.', 'Ana, pásame el borrador porfi.', '¡Toma!'] },
          items: [
            { q: '— Oye Ana, ¡Ana! ¿{_} un boli de sobra? — Sí, {_}.', a: ['tienes', 'toma'] },
            { q: '— Ana, ¿{_} una regla? — Qué va, no {_}.', a: ['tienes', 'tengo'] },
            { q: '— Ana, {_} el borrador porfi. — Toma.', a: ['pásame'] }
          ] },
        { id: 'p14e5', no: 'p.14 ⑤', t: 'Los sustantivos masculinos y femeninos generalmente terminan en…', ko: '명사의 성: 어미를 보고 M/F를 고르세요.',
          type: 'choice', items: [
            { q: '-o (libro, cuaderno, bolígrafo)', o: ['Masculino', 'Femenino', 'Puede ser M o F'], a: 0 },
            { q: '-a (silla, regla, hoja)', o: ['Masculino', 'Femenino', 'Puede ser M o F'], a: 1 },
            { q: '-ción / -sión (canción, televisión)', o: ['Masculino', 'Femenino', 'Puede ser M o F'], a: 1 },
            { q: '-d (ciudad)', o: ['Masculino', 'Femenino', 'Puede ser M o F'], a: 1 },
            { q: '-r (ordenador, borrador)', o: ['Masculino', 'Femenino', 'Puede ser M o F'], a: 0 },
            { q: '-e (la madre / el café)', o: ['Masculino', 'Femenino', 'Puede ser M o F'], a: 2 }
          ] },
        { id: 'p14e6', no: 'p.14 ⑥', t: 'Completa las frases con un/una, el/la.', ko: '부정관사와 정관사의 쓰임을 완성하세요.',
          type: 'fill', items: [
            { q: 'Usamos {_} / {_} para hacer referencia a un objeto cualquiera sin señalar a uno en particular.', a: ['un', 'una'], unordered: true },
            { q: 'Usamos {_} / {_} para hacer referencia a un objeto único y concreto.', a: ['el', 'la'], unordered: true }
          ] }
      ]
    },
    {
      id: 'u2-datos', title: 'Información personal', ko: 'p.15 개인정보 · 숫자 10~100',
      notes: '<p class="note">21 veintiuno · 22 veintidós · 23 veintitrés … 31 treinta y uno · 32 treinta y dos … 41 cuarenta y uno · 51 cincuenta y uno</p>',
      items: [
        { id: 'p15e1', no: 'p.15 ①', t: 'Escribe los números del 10 al 100.', ko: '숫자를 철자로 쓰세요.',
          type: 'fill', audio: { key: 'u2-num100', script: ['diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa', 'cien'] },
          items: [
            { q: '10 → {_} · 20 → {_} · 30 → {_} · 40 → {_} · 50 → {_}', a: ['diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta'] },
            { q: '60 → {_} · 70 → {_} · 80 → {_} · 90 → {_} · 100 → {_}', a: ['sesenta', 'setenta', 'ochenta', 'noventa', ['cien', 'ciento']] }
          ] },
        { id: 'p15e3', no: 'p.15 ③', t: 'Escribe los siguientes números.', ko: '숫자를 철자로 쓰세요.',
          type: 'fill', items: [
            { q: 'A) 23 → {_}', a: [['veintitrés', 'veintitres', 'veinte y tres']] },
            { q: 'B) 69 → {_}', a: ['sesenta y nueve'] },
            { q: 'C) 45 → {_}', a: ['cuarenta y cinco'] },
            { q: 'D) 78 → {_}', a: ['setenta y ocho'] }
          ] },
        { id: 'p15e5', no: 'p.15 ⑤', t: 'Empareja las palabras del formulario 1–7 con las preguntas A–G.', ko: '양식의 항목과 알맞은 질문을 연결하세요.',
          type: 'match', options: ['¿De dónde eres?', '¿Cuál es tu correo electrónico?', '¿Estás casado o soltero?', '¿Cómo te llamas? / ¿Cómo te apellidas?', '¿Cuál es tu dirección?', '¿Cuál es tu número de teléfono?', '¿Cuántos años tienes?'],
          items: [{ t: 'Nombre / Apellido', a: 3 }, { t: 'Nacionalidad', a: 0 }, { t: 'Dirección', a: 4 }, { t: 'Edad', a: 6 }, { t: 'Estado civil', a: 2 }, { t: 'Número de teléfono', a: 5 }, { t: 'Correo electrónico', a: 1 }] },
        { id: 'p15act', no: 'p.15', t: 'TAREA ORAL · INTERACTÚA', ko: '말하기 활동(채점 없음)',
          type: 'free', prompts: ['⑥ 나의 정보를 완성해 말해 보세요.', '⑦ 반 친구들에게 ⑤의 질문을 해 보세요.', '⑧ Banco de comunicación: 짝에게 질문하고 표를 채우세요.'],
          models: ['Me llamo … · Me apellido … · Soy … de … · Vivo en … · Tengo … años. · Estoy … · Mi teléfono es el … · Mi correo es el …'] }
      ]
    },
    {
      id: 'u2-banco', title: 'Banco de comunicación · gramática · léxico', ko: 'p.36 · p.51 · p.71',
      items: [
        { id: 'c36a', no: 'p.36 A', t: 'Completa las frases con un/una.', ko: '부정관사 un/una를 쓰세요.',
          type: 'fill', items: [
            { q: '¿Tienes {_} boli de sobra?', a: ['un'] },
            { q: '¿Tienes {_} lápiz de sobra?', a: ['un'] },
            { q: '¿Tienes {_} servilleta?', a: ['una'] },
            { q: '¿Tienes {_} regla?', a: ['una'] },
            { q: '¿Tienes {_} mechero?', a: ['un'] },
            { q: '¿Tienes {_} cigarro?', a: ['un'] }
          ] },
        { id: 'c37', no: 'p.37 ⑥', t: 'Adjetivos de nacionalidad: masculino → femenino.', ko: '남성형을 여성형으로 바꾸는 규칙을 고르세요.',
          type: 'choice', items: [
            { q: '남성형이 <b>-o</b>로 끝나면?', o: ['-o를 -a로 바꾼다 (mexicano → mexicana)', '-a를 덧붙인다', '그대로 쓴다'], a: 0 },
            { q: '남성형이 <b>자음(-s, -l, -n)</b>으로 끝나면?', o: ['-o를 -a로 바꾼다', '-a를 덧붙인다 (alemán → alemana, inglés → inglesa)', '그대로 쓴다'], a: 1 },
            { q: '남성형이 <b>-e, -a, -í</b>로 끝나면?', o: ['-a를 덧붙인다', '-o를 -a로 바꾼다', '그대로 쓴다 (estadounidense, belga, israelí)'], a: 2 }
          ] },
        { id: 'g5e1', no: 'G5 ①', t: 'Completa con el / la.', ko: '정관사 el/la를 쓰세요.',
          type: 'fill', items: [
            { q: 'Abre {_} ventana.', a: ['la'] }, { q: 'Enciende {_} ordenador.', a: ['el'] }, { q: 'Lee {_} libro.', a: ['el'] }, { q: 'Mira {_} pizarra.', a: ['la'] },
            { q: 'Completa {_} frase.', a: ['la'] }, { q: 'Escribe en {_} hoja.', a: ['la'] }, { q: 'Escucha {_} audición.', a: ['la'] }, { q: 'Marca {_} respuesta.', a: ['la'] }
          ] },
        { id: 'g5e2', no: 'G5 ②', t: 'Completa las frases con un, una.', ko: '부정관사를 쓰세요.',
          type: 'fill', items: [
            { q: '¿Tienes {_} boli de sobra?', a: ['un'] }, { q: '¿Tienes {_} servilleta?', a: ['una'] }, { q: '¿Tienes {_} hoja?', a: ['una'] },
            { q: '¿Tienes {_} cigarro?', a: ['un'] }, { q: '¿Tienes {_} aspirina?', a: ['una'] }
          ] },
        { id: 'g5e3', no: 'G5 ③', t: 'Completa las frases con las palabras del cuadro.', ko: '단어 상자의 낱말로 완성하세요.',
          bank: ['de sobra', 'tengo', 'silla', 'boli verde', 'aspirina', 'toma', 'regla'],
          type: 'fill', items: [
            { q: '— Me duele la cabeza, ¿tienes una {_}? — Sí, {_}.', a: ['aspirina', 'toma'] },
            { q: '— ¿Tienes una {_}? — ¡Qué va! no {_}.', a: ['regla', 'tengo'] },
            { q: 'Necesito sentarme. Jorge, pásame la {_} por favor.', a: ['silla'] },
            { q: '¿Tienes un lápiz {_}?', a: ['de sobra'] },
            { q: 'Pásame el {_} por favor.', a: ['boli verde'] }
          ] },
        { id: 'l2e1', no: 'Léxico ①', t: 'Lenguaje para comunicarse en la clase.', ko: '교실 언어 어휘 연습',
          bank: ['en grupos', 'fotografía', 'palabras', 'parejas', 'piensas', 'audición', 'compañero (x2)', 'respuestas', 'texto'],
          type: 'fill', items: [
            { q: 'Escucha la {_}', a: ['audición'] }, { q: 'Empareja las {_}', a: ['palabras'] }, { q: 'Lee el {_}', a: ['texto'] },
            { q: 'Habla con tu {_}', a: ['compañero'] }, { q: 'Mira la {_}', a: ['fotografía'] }, { q: 'Escribe las {_}', a: ['respuestas'] },
            { q: 'Trabajad en {_}', a: ['parejas'] }, { q: '¿Qué {_}?', a: ['piensas'] }, { q: 'Jugad {_}', a: ['en grupos'] }, { q: 'Pregunta a tu {_}', a: ['compañero'] }
          ] },
        { id: 'l2e2', no: 'Léxico ②', t: 'Completa las frases con las palabras del cuadro.', ko: '교실 표현 완성하기',
          bank: ['entiendo', 'página', 'tarea', 'baño', 'puedes', 'escribe', 'significa', 'pregunta', 'tarde', 'dice'],
          type: 'fill', items: [
            { q: '¿Cómo se {_} tu apellido?', a: ['escribe'] }, { q: '¿Cómo se {_} «friend» en español?', a: ['dice'] }, { q: '¿Qué {_} «casa»?', a: ['significa'] },
            { q: '¿{_} repetir por favor?', a: ['Puedes'] }, { q: 'No {_}.', a: ['entiendo'] }, { q: '¿Has hecho la {_}?', a: ['tarea'] },
            { q: '¿Por qué llegas {_}?', a: ['tarde'] }, { q: '¿Alguna {_}?', a: ['pregunta'] }, { q: '¿Qué {_}?', a: ['página'] }, { q: '¿Puedo ir al {_}?', a: ['baño'] }
          ] },
        { id: 'l2e3', no: 'Léxico ③', t: 'Objetos de clase — Completa las frases.', ko: '교실 물건 표현 완성하기',
          bank: ['regla', 'el cuaderno', 'de sobra', 'toma', 'tengo'],
          type: 'fill', items: [
            { q: '¿Tienes un boli {_}?', a: ['de sobra'] }, { q: 'Sí, {_}.', a: ['toma'] }, { q: '¿Tienes una {_}?', a: ['regla'] },
            { q: 'Qué va, no {_}.', a: ['tengo'] }, { q: 'Pásame {_} porfi.', a: ['el cuaderno'] }
          ] },
        { id: 'c34', no: 'p.34–46', t: 'COMUNICACIÓN — Actividades en parejas', ko: '짝 활동(채점 없음)',
          type: 'free', prompts: ['p.32 Pasando lista: 출석 부르기, 반 친구들의 성(apellidos)을 알파벳 순으로 정리하기', 'p.34–35 ③④ 성과 전화번호 묻기, 이름 철자 말하기 (Estudiante A/B)', 'p.36–37 ⑤ ¿Cómo se dice? / ¿Qué significa? (Estudiante A/B)'],
          models: ['¿Cómo se apellida Fernando? — Se apellida Salazar Caldeira.', '¿Cómo se escribe su apellido? — Se escribe ese-a-ele-a-zeta-a-erre.', '¿Cuál es su número de teléfono? — Es el nueve, dos, cinco…'] }
      ]
    }
  ]
};
