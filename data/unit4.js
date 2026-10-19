(window.UNITDATA = window.UNITDATA || {})[4] = {
  sections: [
    {
      id: 'u4-profesiones', title: 'Profesiones y lugares de trabajo', ko: 'p.20–21 직업 · 일하는 곳 · 동사 현재형',
      notes: '<table class="t"><tr><th></th><th>TRABAJAR (-AR)</th><th>VIVIR (-IR)</th><th>SER</th></tr><tr><td>yo</td><td>trabajo</td><td>vivo</td><td>soy</td></tr><tr><td>tú</td><td>trabajas</td><td>vives</td><td>eres</td></tr><tr><td>él/ella/usted</td><td>trabaja</td><td>vive</td><td>es</td></tr><tr><td>nosotros/as</td><td>trabajamos</td><td>vivimos</td><td>somos</td></tr><tr><td>vosotros/as</td><td>trabajáis</td><td>vivís</td><td>sois</td></tr><tr><td>ellos/as/ustedes</td><td>trabajan</td><td>viven</td><td>son</td></tr></table><p class="note">직업 앞에는 관사를 쓰지 않습니다: Soy profesora. 형용사가 붙으면 관사 사용: Es una profesora muy buena.</p>',
      items: [
        { id: 'p20e1', no: 'p.20 ①', t: 'Relaciona las profesiones con los lugares de trabajo.', ko: '직업과 일하는 곳을 연결하세요.',
          type: 'match', options: ['dependienta', 'médico', 'arquitecta', 'empresaria', 'camarero', 'profesora', 'ingeniero', 'escritor'],
          items: [{ t: 'una tienda', a: 0 }, { t: 'un hospital', a: 1 }, { t: 'un estudio', a: 2 }, { t: 'una empresa', a: 3 }, { t: 'un restaurante', a: 4 }, { t: 'una escuela', a: 5 }, { t: 'una constructora', a: 6 }, { t: 'un periódico', a: 7 }] },
        { id: 'p20e2', no: 'p.20 ②', t: 'Escucha a Maribel y a Teresa y completa el texto.', ko: '듣고 빈칸을 채우세요.',
          type: 'fill', audio: { key: '4.1', script: [
            '¿Y tú, Maribel? ¿A qué te dedicas?', 'Yo soy profesora en la universidad. Mi marido es médico y trabaja en un hospital.', '¿Y de dónde eres?', 'Soy inglesa pero hablo español porque vivo en España.', 'Mi marido es español.'] },
          items: [
            { q: 'Maribel es {_} pero habla {_}.', a: ['inglesa', 'español'] },
            { q: 'Su {_} es español.', a: ['marido'] },
            { q: 'Maribel es {_} en la {_}.', a: ['profesora', 'universidad'] },
            { q: 'Su marido trabaja en un {_} y es {_}.', a: ['hospital', 'médico'] }
          ] },
        { id: 'p20e4', no: 'p.20 ④', t: 'Relaciona los verbos con las palabras.', ko: '동사와 어울리는 낱말을 연결하세요.',
          type: 'match', options: ['profesor / médico / camarero', 'inglés / español', 'España / Madrid', 'un hospital / la universidad'],
          items: [{ t: 'ser', a: 0 }, { t: 'hablar', a: 1 }, { t: 'vivir en', a: 2 }, { t: 'trabajar en', a: 3 }] },
        { id: 'p20e5', no: 'p.20 ⑤', t: 'Completa la conversación con los verbos.', ko: '알맞은 동사 변화형을 쓰세요. (trabajar / ser / vivir)',
          type: 'fill', items: [
            { q: '— ¿Dónde {_} vosotros? — Yo y mi mujer {_} en un hospital.', a: ['trabajáis', 'trabajamos'] },
            { q: 'Mis padres son {_}. {_} en un hospital de Sevilla.', a: ['médicos', 'Trabajan'] },
            { q: 'Mis hermanas son {_} y {_} en Madrid.', a: ['profesoras', 'viven'] },
            { q: '— ¿Dónde {_} (vosotros)? — {_} en Barcelona.', a: ['vivís', 'Vivimos'] }
          ] },
        { id: 'p21e6', no: 'p.21 ⑥', t: 'Lee estos textos y completa con la profesión.', ko: '세 사람의 글을 읽고 직업을 쓰세요.',
          hint: '<b>Gustavo</b>: “Soy de Argentina y vivo en Granada. Trabajo en una agencia y diseño páginas web…” · <b>Amparo</b>: “Soy periodista y trabajo en un periódico. Escribo artículos…” · <b>Sergio</b>: “Soy ingeniero. Trabajo en una constructora de Valencia…”',
          type: 'fill', items: [
            { q: 'Gustavo es {_}.', a: [['diseñador', 'un diseñador']] },
            { q: 'Amparo es {_}.', a: [['periodista', 'una periodista']] },
            { q: 'Sergio es {_}.', a: [['ingeniero', 'un ingeniero']] }
          ] },
        { id: 'p21e7', no: 'p.21 ⑦', t: 'Verdadero (V) o falso (F).', ko: '맞으면 V, 틀리면 F.',
          type: 'tf', items: [
            { q: 'Gustavo es de España.', a: false },
            { q: 'Amparo escribe artículos en un periódico.', a: true },
            { q: 'Sergio trabaja en un hospital.', a: false },
            { q: 'Sergio vive en Valencia.', a: true }
          ] },
        { id: 'p21e9', no: 'p.21 ⑨', t: 'Completa con los conectores: y, pero, porque.', ko: '연결어를 쓰세요.',
          type: 'fill', items: [
            { q: 'Soy profesora {_} trabajo en una escuela.', a: ['y'] },
            { q: 'Me gusta mi trabajo, {_} es muy estresante.', a: ['pero'] },
            { q: 'Vivo en Madrid {_} trabajo allí.', a: ['porque'] }
          ] },
        { id: 'p21e11', no: 'p.21 ⑪', t: 'Completa el texto sobre el trabajo de Jorge.', ko: '빈칸에 알맞은 낱말을 쓰세요.',
          bank: ['Empiezo', 'porque', 'muchas horas', 'de noche', 'tengo', 'paso tiempo', 'horario normal'],
          type: 'fill', items: [
            { q: '{_} a trabajar a las ocho.', a: ['Empiezo'] },
            { q: 'Me gusta mi trabajo {_} es interesante.', a: ['porque'] },
            { q: 'Trabajo {_} y a veces trabajo {_}.', a: [['muchas horas', 'de noche'], ['de noche', 'muchas horas']] },
            { q: 'No {_} un {_} normal.', a: ['tengo', 'horario'] },
            { q: 'Por eso no {_} con mi familia.', a: ['paso tiempo'] }
          ] }
      ]
    },
    {
      id: 'u4-gustos', title: 'Gustos y carácter', ko: 'p.22–25 취향 · 성격 · 외모',
      notes: '<table class="t"><tr><th>gustar</th><th></th></tr><tr><td>(a mí) me</td><td rowspan="3">gusta + 단수 명사 / 동사원형<br>gustan + 복수 명사</td></tr><tr><td>(a ti) te · (a él/ella/usted) le</td></tr><tr><td>(a nosotros) nos · (a vosotros) os · (a ellos) les</td></tr></table><p class="note">SER + 성격/외모 · TENER + ojos / pelo / nariz · LLEVAR + gafas / barba / bigote</p>',
      items: [
        { id: 'p22e1', no: 'p.22 ①', t: 'Escucha y contesta las preguntas.', ko: '듣고 답하세요.',
          type: 'choice', audio: { key: '4.2', script: [
            '¿Qué haces en tu tiempo libre?', 'Me gusta hacer yoga e ir al gimnasio.', '¿Y qué deportes no te gustan?', 'No me gustan los deportes de equipo, son un poco violentos.', '¿Te gusta el cine?', 'Sí, me gustan los partidos de fútbol y las películas de acción.', 'Y a mi novia le gustan las películas románticas.', '¿Y tu trabajo?', 'Me encanta, pero es súper estresante.'] },
          items: [
            { q: '¿Qué le gusta hacer en su tiempo libre?', o: ['Yoga e ir al gimnasio', 'Leer y cocinar', 'Bailar y cantar'], a: 0 },
            { q: '¿Por qué no le gustan los deportes de equipo?', o: ['Son un poco violentos', 'Son aburridos', 'Son caros'], a: 0 },
            { q: '¿Qué le gusta del cine?', o: ['Partidos de fútbol y películas de acción', 'Comedias', 'Terror'], a: 0 },
            { q: '¿Qué películas le gustan a su novia?', o: ['Las románticas', 'Las de acción', 'Las de miedo'], a: 0 },
            { q: '¿Cómo es su trabajo?', o: ['Súper estresante', 'Muy aburrido', 'Muy tranquilo'], a: 0 }
          ] },
        { id: 'p22e3', no: 'p.22 ③', t: 'Relaciona a cada persona con su carácter.', ko: '인물과 성격을 연결하세요.',
          type: 'match', options: ['activa', 'sociable / abierta', 'divertida', 'tranquilo', 'perezoso', 'aburrido'],
          items: [{ t: 'Teresa hace deporte todos los días.', a: 0 }, { t: 'Luz tiene muchos amigos y habla con todo el mundo.', a: 1 }, { t: 'Juana cuenta chistes y hace reír.', a: 2 }, { t: 'Arturo lee en casa y no tiene estrés.', a: 3 }, { t: 'Carlos no quiere hacer nada.', a: 4 }, { t: 'Marcos no tiene intereses ni hobbies.', a: 5 }] },
        { id: 'p23e4', no: 'p.23 ④', t: 'Relaciona los adjetivos con sus contrarios.', ko: '형용사와 반대말을 연결하세요. A activo · B aburrido · C cerrado · D trabajador · E alegre',
          type: 'match', hideOptions: false, options: ['1 divertido', '2 triste', '3 perezoso', '4 vago', '5 abierto'],
          items: [{ t: 'A activo', a: 2 }, { t: 'B aburrido', a: 0 }, { t: 'C cerrado', a: 4 }, { t: 'D trabajador', a: 3 }, { t: 'E alegre', a: 1 }] },
        { id: 'p23e5', no: 'p.23 ⑤', t: 'Lee el texto y completa con las palabras.', ko: '“Mi mejor amigo” 글의 빈칸을 채우세요.',
          bank: ['interesante', 'independiente', 'hablador', 'deportista', 'creativa', 'artística', 'quedarse en casa', 'positiva', 'ayudar'],
          type: 'fill', items: [
            { q: 'Mi amigo es una persona muy {_} y {_}.', a: ['interesante', 'independiente'] },
            { q: 'Es muy {_} y {_}: le gusta el fútbol y el baloncesto.', a: ['hablador', 'deportista'] },
            { q: 'Su hermana es {_} y {_}: pinta y toca la guitarra.', a: ['creativa', 'artística'] },
            { q: 'No le gusta {_} los fines de semana.', a: ['quedarse en casa'] },
            { q: 'Es una persona muy {_} y le gusta {_} a los demás.', a: ['positiva', 'ayudar'] }
          ] },
        { id: 'p23e6', no: 'p.23 ⑥', t: '¿Quién es? Elige.', ko: '누구인지 고르세요.',
          type: 'match', options: ['Pedro', 'Gonzalo', 'Elena', 'Patricia'],
          items: [{ t: 'Es tranquilo.', a: 0 }, { t: 'Es activo y sociable.', a: 1 }, { t: 'Tiene mucho talento.', a: 2 }, { t: 'Ayuda a los demás.', a: 3 }] },
        { id: 'p24e8', no: 'p.24 ⑧', t: 'Clasifica: ¿SER, TENER o LLEVAR?', ko: '알맞은 동사를 고르세요.',
          type: 'match', options: ['ser', 'tener', 'llevar'],
          items: [{ t: 'ojos azules', a: 1 }, { t: 'pelo rizado', a: 1 }, { t: 'nariz grande', a: 1 }, { t: 'ojos verdes', a: 1 }, { t: 'pelo corto', a: 1 }, { t: 'guapa', a: 0 }, { t: 'fea', a: 0 }, { t: 'bajo', a: 0 }, { t: 'viejo', a: 0 }, { t: 'delgada', a: 0 }, { t: 'gorda', a: 0 }, { t: 'calvo', a: 0 }, { t: 'bigote', a: 2 }, { t: 'barba', a: 2 }, { t: 'gafas', a: 2 }] },
        { id: 'p25act', no: 'p.22–25', t: 'HABLA · Actividades', ko: '말하기 활동(채점 없음)',
          type: 'free', prompts: ['p.22 ② 짝에게 취미와 좋아하는 것 묻기', 'p.24 ⑨ 반 친구의 외모를 설명하고 누구인지 맞히기', 'p.25 ⑩ 내가 아는 사람의 성격과 직업을 소개하는 글쓰기'],
          models: ['¿Qué te gusta hacer? — Me gusta… / No me gusta…', 'Es alto/a, delgado/a. Tiene el pelo corto y los ojos marrones. Lleva gafas.', 'Mi madre es muy activa y trabajadora. Es médica.'] }
      ]
    },
    {
      id: 'u4-banco', title: 'Banco de gramática y léxico', ko: 'p.52–54 · p.73 · p.43–46',
      items: [
        { id: 'g9e1', no: 'G9', t: 'Escribe el femenino.', ko: '여성형을 쓰세요.',
          type: 'fill', items: [
            { q: 'profesor → {_}', a: ['profesora'] }, { q: 'artista (el) → la {_}', a: ['artista'] }, { q: 'actor → {_}', a: ['actriz'] }, { q: 'abogado → {_}', a: ['abogada'] },
            { q: 'enfermero → {_}', a: ['enfermera'] }, { q: 'estudiante (el) → la {_}', a: ['estudiante'] }, { q: 'cantante (el) → la {_}', a: ['cantante'] }, { q: 'director → {_}', a: ['directora'] },
            { q: 'futbolista (el) → la {_}', a: ['futbolista'] }, { q: 'pintor → {_}', a: ['pintora'] }
          ] },
        { id: 'g10e1', no: 'G10', t: 'Completa el texto de la familia García con me, te, le, nos, os, les + gusta/gustan.', ko: 'García 가족 글의 빈칸을 쓰세요.',
          type: 'fill', items: [
            { q: 'A Pablo {_} el fútbol.', a: ['le gusta'] },
            { q: 'A su mujer también {_} el deporte.', a: ['le gusta'] },
            { q: 'A su hijo mayor {_} el fútbol.', a: ['no le gusta'] },
            { q: 'A la hija {_} la música.', a: ['le gusta'] },
            { q: 'A todos {_} viajar.', a: ['nos gusta'] },
            { q: 'Y a mí {_} cocinar.', a: ['me gusta'] },
            { q: 'A mis padres {_} el campo.', a: ['les gusta'] },
            { q: 'A mis abuelos {_} el mar.', a: ['les gusta'] },
            { q: 'A nosotros {_} la playa.', a: ['nos gusta'] },
            { q: 'A mí {_} el cine.', a: ['me gusta'] }
          ] },
        { id: 'g11e1', no: 'G11 ①', t: 'Completa con gusta / gustan (+ no si hace falta).', ko: 'gustar 변화형을 쓰세요.',
          type: 'fill', items: [
            { q: 'A mis padres {_} los deportes. (negativo)', a: ['no les gustan'] },
            { q: 'A nosotros {_} el cine.', a: ['nos gusta'] },
            { q: 'A ti {_} la música clásica. (negativo)', a: ['no te gusta'] },
            { q: 'A Pedro {_} la pizza.', a: ['le gusta'] },
            { q: 'A ellos {_} los coches. (negativo)', a: ['no les gustan'] },
            { q: 'A vosotros {_} las películas.', a: ['os gustan'] },
            { q: 'A mí {_} las verduras. (negativo)', a: ['no me gustan'] },
            { q: 'A ustedes {_} el café.', a: ['les gusta'] }
          ] },
        { id: 'g11e2', no: 'G11 ②', t: 'Relaciona las preguntas con las respuestas.', ko: '질문과 대답을 연결하세요.',
          type: 'match', options: ['1 Sí, mucho.', '2 No, nada.', '3 A mí también.', '4 A mí no.'],
          items: [{ t: 'A ¿Te gusta el chocolate?', a: 1 }, { t: 'B ¿Os gusta bailar?', a: 0 }, { t: 'C Me gusta el cine. —', a: 3 }, { t: 'D No me gusta el fútbol. —', a: 2 }] },
        { id: 'g12e1', no: 'G12', t: 'Completa con el presente del verbo entre paréntesis.', ko: '현재형 동사를 쓰세요.',
          type: 'fill', items: [
            { q: 'Mi padre {_} (hacer) deporte todos los días.', a: ['hace'] },
            { q: '{_} (venir, tú) conmigo, por favor.', a: ['Ven'] },
            { q: 'Mis amigos {_} (hablar) tres idiomas.', a: ['hablan'] },
            { q: 'Ella {_} (beber) mucha agua.', a: ['bebe'] },
            { q: 'Nosotros {_} (vivir) en Sevilla.', a: ['vivimos'] },
            { q: 'Hoy {_} (ir, nosotros) al cine.', a: ['vamos'] },
            { q: '¿{_} (tener, tú) hambre? — Sí, {_} (tener, yo) mucha.', a: ['Tienes', 'tengo'] },
            { q: 'Yo {_} (hacer) la cena.', a: ['hago'] },
            { q: 'Ella {_} (bailar) muy bien y él {_} (tocar) la guitarra.', a: ['baila', 'toca'] },
            { q: 'Nosotros {_} (salir) los sábados.', a: ['salimos'] },
            { q: 'Ellos {_} (leer) el periódico.', a: ['leen'] },
            { q: 'Mis amigos {_} (ir) a la playa.', a: ['van'] },
            { q: '¿{_} (hacer, vosotros) deporte? — Sí, {_} (jugar, nosotros) al tenis.', a: ['Hacéis', 'jugamos'] }
          ] },
        { id: 'l4e1', no: 'Léxico ①', t: 'Completa el diálogo (p.73).', ko: '대화문 빈칸을 채우세요.',
          bank: ['en Madrid?', 'este barrio', 'bien!', 'aquí?', 'trabajas?', 'dedicas?', 'de inglés', 'español', 'universidad?', 'una academia', 'tu marido?'],
          type: 'fill', items: [
            { q: '¿Vives {_}', a: ['en Madrid?'] }, { q: 'Sí, vivo en {_}', a: ['este barrio'] }, { q: 'Yo también. ¡Qué {_}', a: ['bien!'] }, { q: '¿Trabajas {_}', a: ['aquí?'] },
            { q: '¿Dónde {_}', a: ['trabajas?'] }, { q: '¿A qué te {_}', a: ['dedicas?'] }, { q: 'Soy profesora {_}', a: ['de inglés'] }, { q: 'Hablo inglés y {_}', a: ['español'] },
            { q: '¿Trabajas en la {_}', a: ['universidad?'] }, { q: 'No, trabajo en {_}', a: ['una academia'] }, { q: '¿Y {_}', a: ['tu marido?'] }
          ] },
        { id: 'l4e2', no: 'Léxico ②', t: 'Completa las frases sobre el trabajo (p.73).', ko: '직업·일상 표현을 완성하세요.',
          bank: ['noche', 'me gusta', 'trabajo muchas horas', 'de semana', 'mi familia', 'es muy estresante', 'casa', 'mucho dinero', 'experiencia', 'mi trabajo', 'muy creativo', 'una compañía', 'horario normal', 'trabajar temprano'],
          type: 'fill', items: [
            { q: 'A veces trabajo de {_}', a: ['noche'] }, { q: 'Sí, {_} mi trabajo.', a: ['me gusta'] }, { q: 'Porque {_}', a: ['trabajo muchas horas'] }, { q: 'Los fines {_} no trabajo.', a: ['de semana'] },
            { q: 'Paso tiempo con {_}', a: ['mi familia'] }, { q: 'Pero {_}', a: ['es muy estresante'] }, { q: 'Trabajo en {_}', a: ['casa'] }, { q: 'No gano {_}', a: ['mucho dinero'] },
            { q: 'Tengo mucha {_}', a: ['experiencia'] }, { q: 'Me encanta {_}', a: ['mi trabajo'] }, { q: 'Es {_}', a: ['muy creativo'] }, { q: 'Trabajo en {_}', a: ['una compañía'] },
            { q: 'Tengo un {_}', a: ['horario normal'] }, { q: 'No me gusta {_}', a: ['trabajar temprano'] }
          ] },
        { id: 'c43', no: 'p.43–46', t: 'COMUNICACIÓN — Profesiones · Gustos · Describir personas', ko: '짝 활동(채점 없음)',
          type: 'free', prompts: ['p.43 ⑬ 직업 카드로 서로 묻고 답하기 (A/B)', 'p.44–45 ⑭⑮ 취향 설문: 친구에게 묻고 공통점 찾기', 'p.46 ⑯ 사람 그림을 보고 외모·성격 설명하기'],
          models: ['¿A qué te dedicas? — Soy… / Trabajo de… en…', '¿Te gusta…? — Sí, mucho. / No, no me gusta nada.', '¿Cómo es? — Es… Tiene… Lleva…'] }
      ]
    }
  ]
};
