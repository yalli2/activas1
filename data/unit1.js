(window.UNITDATA = window.UNITDATA || {})[1] = {
  sections: [
    {
      id: 'u1-presentaciones', title: 'Presentaciones', ko: 'p.6–7 소개하기 · 인사',
      notes: '<table class="t"><tr><th></th><th>SER</th><th>LLAMARSE</th></tr><tr><td>yo</td><td>soy</td><td>me llamo</td></tr><tr><td>tú</td><td>eres</td><td>te llamas</td></tr><tr><td>él / ella / usted</td><td>es</td><td>se llama</td></tr></table><p class="note">인사: Buenos días · Buenas noches · Hasta luego · Nos vemos · ¿Qué tal? / ¿Cómo estás? (비격식) · ¿Cómo está? (격식)</p>',
      items: [
        { id: 'p6e1', no: 'p.6 ①', t: 'Escucha y escribe los nombres de las personas.', ko: '대화를 듣고 빈칸에 이름을 쓰세요.',
          type: 'fill', audio: { key: '1.1', script: [
            { w: 'Conversación 1', t: 'Oye, y él ¿quién es?' }, 'Es mi vecino.', '¿Cómo se llama?', 'Javi. Es muy guapo ¿verdad?', '¡Sí!',
            { w: 'Conversación 2', t: 'Hola. ¿Cómo te llamas?' }, 'Celia.', '¿Cómo?', '¡Celia!', 'Hola, yo me llamo Juan.',
            { w: 'Conversación 3', t: 'Hola, tú eres David el amigo de Enrique, ¿no?' }, 'Sí.', 'Hola, yo soy Rosa.', 'Encantado.', 'Encantada.'] },
          items: [
            { q: 'Conv. 1 — B: «{_}. Es muy guapo ¿verdad?»', a: ['Javi'] },
            { q: 'Conv. 2 — B: «{_}.» … B: «¡{_}!»', a: ['Celia', 'Celia'] },
            { q: 'Conv. 2 — A: «Hola, yo me llamo {_}.»', a: ['Juan'] },
            { q: 'Conv. 3 — «Hola, tú eres {_} el amigo de {_}, ¿no?»', a: ['David', 'Enrique'] },
            { q: 'Conv. 3 — A: «Hola, yo soy {_}.»', a: ['Rosa'] }
          ] },
        { id: 'p6e2', no: 'p.6 ②', t: 'Completa las formas del presente de los verbos ser y llamarse.', ko: 'ser와 llamarse의 현재형을 완성하세요.',
          type: 'fill', items: [
            { q: 'SER — (yo) {_} · (tú) {_} · (él) {_} · (ella) {_} · (usted) es', a: ['soy', 'eres', 'es', 'es'] },
            { q: 'LLAMARSE — (yo) {_} · (tú) {_} · (él) {_} · (ella) se llama · (usted) se llama', a: ['me llamo', 'te llamas', 'se llama'] }
          ] },
        { id: 'p7e4', no: 'p.7 ④', t: 'Completa las frases con la forma verbal correcta.', ko: '알맞은 동사 형태를 고르세요.',
          type: 'choice', items: [
            { q: '¿Cómo ………… tú?', o: ['te llamas', 'me llamo', 'se llama'], a: 0 },
            { q: 'Hola, yo ……… Juan.', o: ['se llama', 'te llamas', 'me llamo'], a: 2 },
            { q: 'Hola, tú ……… David, ¿no?', o: ['es', 'soy', 'eres'], a: 2 },
            { q: 'Sí, ……… yo.', o: ['soy', 'eres', 'es'], a: 0 },
            { q: 'Oye, ¿él quién ………?', o: ['es', 'soy', 'eres'], a: 0 },
            { q: '¿Cómo ……… él?', o: ['te llamas', 'me llamo', 'se llama'], a: 2 }
          ] },
        { id: 'p7e6', no: 'p.7 ⑥', t: 'Escucha y completa las frases.', ko: '듣고 인사 대화의 빈칸을 채우세요.',
          type: 'fill', audio: { key: '1.3', script: [
            '¡Hola Marcos!', 'Hola, ¿qué tal?', 'Bien, gracias. ¿Y tú?', 'Muy bien, gracias.',
            'Buenos días, señor Juan.', 'Hola, ¿cómo está?', 'Bien, bien. ¿Y usted?', 'Así, así.',
            'Adiós, amor.', 'Hasta luego.', 'Nos vemos.', 'Buenas noches.'] },
          items: [
            { q: '(1) Hola, ¿{_} {_}?', a: ['qué', 'tal'] },
            { q: '(2) {_} gracias, ¿y tú?', a: ['Bien'] },
            { q: '(3) {_} {_}, señor Juan.', a: ['Buenos', 'días'] },
            { q: '(4) Hola ¿cómo {_}?', a: ['está'] },
            { q: '(6) ¿Y {_}?', a: ['usted'] },
            { q: '(7) Hasta {_}', a: ['luego'] },
            { q: '(8) Buenas {_}', a: ['noches'] }
          ] },
        { id: 'p7e5', no: 'p.7 ⑤', t: 'INTERACTÚA — Levántate y adivina a quién corresponde cada nombre.', ko: '활동(채점 없음): 짝·반 친구와 이름을 맞혀 보세요.',
          type: 'free', prompts: ['선생님이 칠판에 반 친구들의 이름을 쓰면, 일어나서 질문하며 누구의 이름인지 맞혀 보세요.', '두 명의 친구를 반 전체에 소개해 보세요.'],
          models: ['¿Eres Elif? — No.', '¿Cómo te llamas? — Me llamo Esra.', 'Él se llama Can. Ella se llama Elif.'] },
        { id: 'p7c', no: 'p.7', t: 'CONTRASTA CON TU LENGUA', ko: '모국어와 비교하기(활동)',
          type: 'free', text: '다음 표현을 한국어로 써 보세요.', prompts: ['Buenos días', 'Buenas noches', 'Hasta luego', 'Nos vemos', '¿Cómo estás? / ¿Cómo está?'] }
      ]
    },
    {
      id: 'u1-procedencia', title: 'De dónde eres · Nacionalidades', ko: 'p.8–10 출신과 국적',
      notes: '<table class="t"><tr><th></th><th>SER</th><th></th><th>SER</th></tr><tr><td>yo</td><td>soy</td><td>nosotros/as</td><td>somos</td></tr><tr><td>tú</td><td>eres</td><td>vosotros/as</td><td>sois</td></tr><tr><td>él/ella/usted</td><td>es</td><td>ellos/as/ustedes</td><td>son</td></tr></table>' +
        '<p><b>형용사의 성</b>: -o → -a (cubano → cubana) · 자음으로 끝나면 -a를 붙임 (alemán → alemana) · -e로 끝나면 그대로 (estadounidense). <b>복수</b>: 모음 뒤 -s (italianos), 자음 뒤 -es (ingleses).</p>',
      items: [
        { id: 'p8e1', no: 'p.8 ①', t: 'Empareja los países con las ciudades.', ko: '나라와 도시를 연결하세요.',
          type: 'match', options: ['París', 'San Paulo', 'Milán', 'Granada', 'Bristol', 'Hiroshima', 'Múnich', 'Lima'],
          items: [{ t: 'Inglaterra', a: 4 }, { t: 'Francia', a: 0 }, { t: 'Alemania', a: 6 }, { t: 'Brasil', a: 1 }, { t: 'Perú', a: 7 }, { t: 'Italia', a: 2 }, { t: 'España', a: 3 }, { t: 'Japón', a: 5 }] },
        { id: 'p8e2a', no: 'p.8 ②', t: 'Escucha las conversaciones y responde: Conversación 1.', ko: '대화 1을 듣고 답하세요.',
          type: 'choice', audio: { key: '1.4', script: [
            '¡Ciao Carmela!', '¡Hola Fabio! ¿Qué tal? ¿Cómo va todo?', 'Muy bien, ¿y tú? ¿Cómo estás?', 'Muy bien también. Mira ¿conoces a mi amiga María?', 'No.',
            'Mira María, este es Fabio. Es de Italia.', 'Hola, encantada.', '¿De dónde eres, María?', 'Soy de Brasil.', 'Anda, me encanta Brasil. Oye, ¿tenéis tiempo para un café?', 'Sí, claro.',
            '¡Hola chicas! ¿De dónde sois? ¿Sois de aquí, de Granada?', 'No, somos de Madrid.', '¡Olé! De la capital. Yo soy Carlos.', 'Hola, yo soy Andrea y esta es Ana.', '¡Qué guapas sois de verdad!', '¡Gracias!'] },
          items: [
            { q: '¿Quién es María?', o: ['La amiga de Carmela', 'La hermana de Fabio', 'La vecina de Carlos'], a: 0 },
            { q: '¿De dónde es Fabio?', o: ['De Brasil', 'De Italia', 'De España'], a: 1 },
            { q: '¿De dónde es María?', o: ['De Brasil', 'De Italia', 'De Madrid'], a: 0 }
          ] },
        { id: 'p8e2b', no: 'p.8 ②', t: 'Escucha las conversaciones y responde: Conversación 2 (V/F).', ko: '대화 2를 듣고 참/거짓을 고르세요.',
          type: 'tf', audio: { key: '1.4', script: ['¡Hola chicas! ¿De dónde sois? ¿Sois de aquí, de Granada?', 'No, somos de Madrid.', '¡Olé! De la capital. Yo soy Carlos.', 'Hola, yo soy Andrea y esta es Ana.', '¡Qué guapas sois de verdad!', '¡Gracias!'] },
          items: [
            { q: 'Andrea y Ana son de Madrid.', a: true },
            { q: 'Carlos piensa que Andrea y Ana no son guapas.', a: false }
          ] },
        { id: 'p8e3', no: 'p.8 ③', t: 'Completa la tabla con las formas correctas del presente del verbo ser.', ko: 'ser 현재형 표를 완성하세요.',
          type: 'fill', items: [
            { q: 'yo {_} · tú eres · él/ella/usted es', a: ['soy'] },
            { q: 'nosotros/as {_} · vosotros/as {_} · ellos/as/ustedes son', a: ['somos', 'sois'] }
          ] },
        { id: 'p8e4', no: 'p.8 ④', t: 'Mira el mapa de España y completa con una ciudad.', ko: '스페인 지도를 보고 방위에 맞는 도시를 쓰세요. (가능한 답이 여러 개)',
          hint: '지도에 나온 도시: La Coruña, Gijón, Bilbao, San Sebastián, Vigo, León, Pamplona, Valladolid, Zaragoza, Barcelona, Salamanca, Segovia, Madrid, Toledo, Valencia, Olivenza, Albacete, Alicante, Córdoba, Huelva, Sevilla, Granada, Cádiz, Málaga, Almería…',
          type: 'fill', items: [
            { q: 'Yo soy de {_} — la capital', a: [['Madrid']] },
            { q: 'Yo soy de {_} — en el norte', a: [['Bilbao', 'San Sebastián', 'Pamplona', 'Gijón', 'La Coruña', 'Vigo', 'León', 'Santander']] },
            { q: 'Ellos son de {_} — en el sur', a: [['Sevilla', 'Córdoba', 'Granada', 'Málaga', 'Cádiz', 'Huelva', 'Almería']] },
            { q: 'Mi amigo Juan es de {_} — en el oeste', a: [['Vigo', 'Olivenza', 'Salamanca', 'Huelva', 'La Coruña']] },
            { q: 'Mi amiga Alicia es de {_} — en el centro', a: [['Toledo', 'Segovia', 'Valladolid', 'Albacete', 'Madrid']] },
            { q: 'Nosotras somos de {_} — en el este', a: [['Valencia', 'Barcelona', 'Alicante', 'Zaragoza']] }
          ] },
        { id: 'p9e6', no: 'p.9 ⑥', t: 'Escucha el diálogo y completa.', ko: '대화를 듣고 빈칸을 채우세요.',
          type: 'fill', audio: { key: '1.5', script: [
            'Mira, mira a Carmen, ¡qué elegante!', '¿Y con quién va? ¡Qué chico más guapo!',
            'Es su nuevo novio, es italiano, bueno mitad italiano y mitad español porque creo que su madre es española.',
            'Ah, entonces habla español, ¿no?', 'Sí, sí habla, pero con un poco de acento italiano.', 'Pues hacen muy buena pareja la verdad.'] },
          items: [
            { q: 'Es su nuevo novio, es {_}, bueno mitad {_} y mitad {_} porque creo que su madre es {_}.', a: ['italiano', 'italiano', 'español', ['española']] },
            { q: 'Ah, entonces habla {_}, ¿no?', a: ['español'] }
          ] },
        { id: 'p9e7', no: 'p.9 ⑦', t: 'Pregunta a tu compañero. ¿De dónde es…?', ko: '사진 속 인물의 국적을 완성하세요.',
          type: 'fill', items: [
            { q: 'Kate Moss es {_}.', a: ['inglesa'] },
            { q: 'María Sharapova es {_}.', a: ['rusa'] },
            { q: 'Leo Messi es {_}.', a: ['argentino'] }
          ] },
        { id: 'p9e8', no: 'p.9 ⑧', t: 'Completa la tabla con los adjetivos en femenino.', ko: '국적 형용사의 여성형을 쓰세요.',
          type: 'fill', items: [
            { q: 'brasileño → brasileña · <b>italiano</b> → {_}', a: ['italiana'] },
            { q: '<b>japonés</b> → {_}', a: ['japonesa'] },
            { q: '<b>mexicano</b> → {_}', a: ['mexicana'] },
            { q: '<b>griego</b> → {_}', a: ['griega'] },
            { q: '<b>alemán</b> → {_}', a: ['alemana'] },
            { q: '<b>estadounidense</b> → {_}', a: ['estadounidense'] }
          ] },
        { id: 'p10e11', no: 'p.10 ⑪', t: 'Completa las frases con estos adjetivos de nacionalidad en forma plural.', ko: '국적 형용사를 복수형으로 쓰세요.',
          bank: ['inglés', 'francés', 'español', 'brasileño'],
          type: 'fill', items: [
            { q: 'Margaret Thatcher y Tony Blair son {_}.', a: ['ingleses'] },
            { q: 'Jean Reno y Gérard de Pierde son {_}.', a: ['franceses'] },
            { q: 'Antonio Banderas y Penélope Cruz son {_}.', a: ['españoles'] },
            { q: 'Ronaldinho y Roberto Carlos son {_}.', a: ['brasileños'] }
          ] },
        { id: 'p10e13', no: 'p.10 ⑬', t: '¿En qué idioma están escritas estas palabras?', ko: '다음 낱말은 어느 언어일까요?',
          type: 'match', options: ['árabe', 'chino', 'ruso', 'francés', 'español'],
          items: [{ t: '1 · adiós', a: 4 }, { t: '2 · ‏وداع', a: 0 }, { t: '3 · до свидания', a: 2 }, { t: '4 · 再見', a: 1 }, { t: '5 · Au Revoir', a: 3 }] },
        { id: 'p8e5', no: 'p.8–10', t: 'HABLA · INTERACTÚA — Actividades orales', ko: '말하기 활동(채점 없음)',
          type: 'free', prompts: ['p.8 ⑤ 다른 나라 사람인 척하며 반 친구들에게 출신을 묻기', 'p.10 ⑨ 외국인 친구·선생님 소개하기', 'p.10 ⑫ 이 물건들은 어느 나라 것일까? (택시, 마트료시카, 맥주, 나초, 청바지, 게이샤)', 'p.10 ⑬ ¿Qué idiomas se habla en tu país? ¿Qué idiomas hablas tú?'],
          models: ['¿De dónde eres? — De Francia. — ¿De qué parte? — De París.', 'Mira Elif, este es Andrew, es inglés de Londres.', 'Los taxis negros son ingleses, ¿no? — Sí, creo que sí.', 'Yo hablo un poco de italiano. / Yo hablo francés muy bien.'] }
      ]
    },
    {
      id: 'u1-banco', title: 'Banco de gramática y léxico', ko: 'p.49–50 · p.70 문법 은행 · 어휘 연습',
      items: [
        { id: 'g1e1', no: 'G1 ①', t: 'Completa las frases con el verbo llamarse.', ko: 'llamarse 동사를 알맞게 쓰세요. (-)는 부정문',
          type: 'fill', items: [
            { q: 'Él {_} Juan (-)', a: ['no se llama'] },
            { q: 'Yo {_} Alicia (+)', a: ['me llamo'] },
            { q: 'Tú {_} Arturo (-)', a: ['no te llamas'] },
            { q: 'Usted {_} Santiago (-)', a: ['no se llama'] },
            { q: 'Ella {_} Carmen (+)', a: ['se llama'] },
            { q: 'Usted {_} Luis (+)', a: ['se llama'] }
          ] },
        { id: 'g1e2', no: 'G1 ②', t: 'Completa las frases con el presente del verbo ser.', ko: 'ser 현재형을 쓰세요.',
          type: 'fill', items: [
            { q: 'Yo {_} Ana, la amiga de Jose.', a: ['soy'] },
            { q: 'Tú {_} Pedro ¿no?', a: ['eres'] },
            { q: 'Ella {_} Teresa, mi vecina.', a: ['es'] }
          ] },
        { id: 'g3e1', no: 'G3 ①', t: 'Completa las frases con el presente del verbo ser.', ko: 'ser 현재형을 쓰세요.',
          type: 'fill', items: [
            { q: 'Yo no {_} de Madrid, soy de Toledo.', a: ['soy'] },
            { q: 'María {_} de Brasil.', a: ['es'] },
            { q: 'Ana y yo (nosotras) {_} del sur de España, de Granada.', a: ['somos'] },
            { q: '¿{_} vosotros de Italia?', a: ['Sois'] },
            { q: 'Luz y Noel (ellas) {_} de Francia, de París.', a: ['son'] },
            { q: 'Ellas no {_} de Sevilla, {_} de Málaga.', a: ['son', 'son'] },
            { q: 'Yo y mi novio {_} de Italia, de Roma.', a: ['somos'] }
          ] },
        { id: 'g3e2', no: 'G3 ②', t: 'Completa las frases con un adjetivo de nacionalidad.', ko: '국적 형용사를 알맞은 형태로 쓰세요.',
          type: 'fill', items: [
            { q: '¿Es ella {_}? (mujer de Francia)', a: ['francesa'] },
            { q: 'Nosotros somos {_} (de Inglaterra)', a: ['ingleses'] },
            { q: 'Yo soy {_}, de Berlín. (mujer)', a: ['alemana'] },
            { q: 'Ellas son {_}, de París.', a: ['francesas'] },
            { q: '«¿Sois vosotros de Milán?» «Sí, somos {_}»', a: [['italianos', 'italianas']] },
            { q: '«¿Tú eres {_}?» (hombre de China) — «No, soy {_}» (hombre de Japón)', a: ['chino', 'japonés'] }
          ] },
        { id: 'g4e1', no: 'G4 ①', t: 'Di si estos sustantivos son masculinos o femeninos (M/F).', ko: '명사의 성을 고르세요.',
          type: 'choice', items: [
            { q: 'ordenador', o: ['M', 'F'], a: 0 }, { q: 'televisión', o: ['M', 'F'], a: 1 }, { q: 'canción', o: ['M', 'F'], a: 1 },
            { q: 'doctor', o: ['M', 'F'], a: 0 }, { q: 'madre', o: ['M', 'F'], a: 1 }, { q: 'calle', o: ['M', 'F'], a: 1 },
            { q: 'mesa', o: ['M', 'F'], a: 1 }, { q: 'señor', o: ['M', 'F'], a: 0 }, { q: 'silla', o: ['M', 'F'], a: 1 },
            { q: 'problema', o: ['M', 'F'], a: 0, why: '예외: el problema, el día, el agua(관사 el), la mano' }, { q: 'audición', o: ['M', 'F'], a: 1 }, { q: 'lámpara', o: ['M', 'F'], a: 1 }
          ] },
        { id: 'g4e2', no: 'G4 ②', t: 'Completa con: él es / ella es + adjetivo de nacionalidad.', ko: '국적 형용사를 쓰세요.',
          type: 'fill', items: [
            { q: '¿Es Alicia de México? — No, {_} {_}, de Río de Janeiro.', a: ['ella es', 'brasileña'] },
            { q: 'John es de Inglaterra, ¿no? — Sí, {_} {_}, de Londres.', a: ['él es', 'inglés'] },
            { q: '¿Es Marta de Rusia? — No, {_} {_}, de Berlín.', a: ['ella es', 'alemana'] },
            { q: '¿Es Yin de China? — No, {_} {_}, de Tokio.', a: ['él es', 'japonés'] },
            { q: '¿Es Ali de Turquía? — Sí, {_} {_}, de Estambul.', a: ['él es', 'turco'] },
            { q: '¿Es Agatha de Rusia? — No, {_} {_}, de Varsovia.', a: ['ella es', 'polaca'] }
          ] },
        { id: 'l1e1', no: 'Léxico ①', t: 'Presentaciones — Completa las frases con las palabras del cuadro.', ko: '어휘 연습: 소개하기',
          bank: ['llamas?', 'llama?', 'Pedro', 'es?', 'vecino', 'guapo', 'de Enrique ¿no?', 'soy yo', 'soy Rosa', 'tal?'],
          type: 'fill', items: [
            { q: '¿Cómo te {_}', a: ['llamas?'] },
            { q: '¿Cómo se {_}', a: ['llama?'] },
            { q: 'Me llamo {_}', a: ['Pedro'] },
            { q: '¿Quién {_}', a: ['es?'] },
            { q: 'Es mi {_}', a: ['vecino'] },
            { q: 'Es muy {_}', a: ['guapo'] },
            { q: 'Tú eres David, el amigo {_}', a: ['de Enrique ¿no?', 'de Enrique'] },
            { q: 'Sí, {_}', a: ['soy yo'] },
            { q: 'Hola, yo {_}', a: ['soy Rosa'] },
            { q: '¿Qué {_}', a: ['tal?'] }
          ] },
        { id: 'l1e2', no: 'Léxico ②', t: 'Saludos — Completa las frases con las palabras del cuadro.', ko: '어휘 연습: 인사',
          bank: ['gracias ¿y tú?', 'usted?', 'amor', 'vemos', 'luego', 'noches', 'estás?', 'días señor Juan', 'así'],
          type: 'fill', items: [
            { q: '¿Cómo {_}', a: ['estás?'] },
            { q: 'Estoy bien, {_}', a: ['gracias ¿y tú?', 'gracias, ¿y tú?'] },
            { q: 'Buenos {_}', a: ['días señor Juan', 'días, señor Juan'] },
            { q: '¿Y {_}', a: ['usted?'] },
            { q: 'Así, {_}', a: ['así'] },
            { q: 'Adiós {_}', a: ['amor'] },
            { q: 'Hasta {_}', a: ['luego'] },
            { q: 'Nos {_}', a: ['vemos'] },
            { q: 'Buenas {_}', a: ['noches'] }
          ] },
        { id: 'l1e3', no: 'Léxico ③', t: 'Decir de dónde eres — Completa las frases con las palabras del cuadro.', ko: '어휘 연습: 출신 말하기',
          bank: ['todo', 'Brasil', 'Andrea y Ana', 'Japón', 'parte', 'mi amiga', 'eres (tú)', 'Madrid', 'española'],
          type: 'fill', items: [
            { q: '¿De dónde {_}?', a: ['eres'] },
            { q: 'Soy {_}.', a: ['española'] },
            { q: 'Soy de {_}.', a: [['Brasil', 'Japón', 'Madrid']] },
            { q: 'Soy de {_}.', a: [['Brasil', 'Japón', 'Madrid']] },
            { q: 'Somos de {_}.', a: [['Madrid', 'Brasil', 'Japón']] },
            { q: 'Somos {_}.', a: ['Andrea y Ana'] },
            { q: '¿De qué {_}?', a: ['parte'] },
            { q: '¿Cómo va {_}?', a: ['todo'] },
            { q: '¿Conoces a {_}?', a: ['mi amiga'] }
          ] },
        { id: 'l1e4', no: 'Léxico ④', t: 'Completa las frases con las palabras del cuadro.', ko: '어휘 연습: 대화 표현',
          bank: ['Fabio', 'sois', 'de Granada', 'sois', 'español', 'para un café', 'es Ana', 'italiano'],
          type: 'fill', items: [
            { q: 'Este es {_}', a: ['Fabio'] },
            { q: '¿Tenéis tiempo {_}?', a: ['para un café'] },
            { q: '¿De dónde {_}? (vosotros)', a: ['sois'] },
            { q: '¿Sois de aquí {_}?', a: ['de Granada'] },
            { q: 'Yo soy Andrea y esta {_}', a: ['es Ana'] },
            { q: '¡Qué guapas {_}!', a: ['sois'] },
            { q: 'No hablo {_}', a: [['español', 'italiano']] },
            { q: 'Acento {_}', a: ['italiano'] }
          ] }
      ]
    }
  ]
};
