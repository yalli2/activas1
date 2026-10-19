(window.UNITDATA = window.UNITDATA || {})[3] = {
  sections: [
    {
      id: 'u3-familia', title: 'La familia', ko: 'p.16–17 가족 어휘 · 가족에 대해 묻기',
      notes: '<table class="t"><tr><th></th><th>LLAMARSE</th><th>TENER</th></tr><tr><td>yo</td><td>me llamo</td><td>tengo</td></tr><tr><td>tú</td><td>te llamas</td><td>tienes</td></tr><tr><td>él/ella/usted</td><td>se llama</td><td>tiene</td></tr><tr><td>nosotros/as</td><td>nos llamamos</td><td>tenemos</td></tr><tr><td>vosotros/as</td><td>os llamáis</td><td>tenéis</td></tr><tr><td>ellos/as/ustedes</td><td>se llaman</td><td>tienen</td></tr></table>' +
        '<p class="note">hermano–hermana · hijo–hija · marido–mujer · padre–madre · abuelo–abuela · nieto–nieta. 복수형 남녀 혼합 → 남성 복수: mis padres = mi madre y mi padre; tengo 4 hermanas y 1 hermano = tengo 5 hermanos.</p>',
      items: [
        { id: 'p16e1', no: 'p.16 ①', t: 'Mira el dibujo. Completa el texto con números.', ko: '그림(Marcos, Marta, Alicia, Mario = 자녀 4명)을 보고 숫자를 쓰세요. Marcos: “Tengo dos hermanas y un hermano.”',
          type: 'fill', items: [{ q: 'Los señores Alcántara tienen {_} hijos en total. {_} chicos y {_} chicas.', a: [['4', 'cuatro'], ['2', 'dos'], ['2', 'dos']] }] },
        { id: 'p16e2', no: 'p.16 ②', t: 'Mira el dibujo. Completa con las palabras del cuadro.', ko: '가족 낱말(padre, madre, hermano, hermana, abuelo, abuela)을 쓰세요.',
          bank: ['padre', 'madre', 'hermano', 'hermana', 'abuelo', 'abuela'],
          type: 'fill', items: [
            { q: 'Esta es Marta, mi {_} mayor, tiene 17 años.', a: ['hermana'] },
            { q: 'Esta es Alicia, mi {_} pequeña, tiene 6 años.', a: ['hermana'] },
            { q: 'Este es Mario, mi {_} pequeño, tiene 4 años.', a: ['hermano'] },
            { q: 'Este es mi {_} Arturo.', a: ['padre'] },
            { q: 'Esta es mi {_} Sonia.', a: ['madre'] },
            { q: 'Esta es mi {_} Julia.', a: ['abuela'] },
            { q: 'Este es mi {_} Pedro.', a: ['abuelo'] }
          ] },
        { id: 'p16e3a', no: 'p.16 ③', t: 'Escucha estas conversaciones y responde — Conversación 1.', ko: '대화 1을 듣고 답하세요.',
          type: 'choice', audio: { key: '3.1', script: [
            { w: 'Conv. 1', t: '¿Tienes hermanos?' }, 'Sí, tengo una hermana mayor y un hermano pequeño.', '¿Cómo se llaman?', 'Se llaman Raquel y Antonio.', '¿Cuántos años tienen?', 'La mayor tiene treinta y uno y el pequeño veintitrés.', '¿Y tú? ¿Tienes hermanos?', 'No, soy hija única.',
            { w: 'Conv. 2', t: 'Mónica, ¿tú estás casada?' }, 'Sí, ¿no lo sabías?', '¡Anda! ¿Cómo se llama tu marido?', 'Pues, se llama Teodoro.', '¿Y tenéis hijos?', 'Sí, sí, tenemos un niño y una niña.', '¡Ah! ¿Cuántos años tienen?', 'El niño tiene seis años y la niña ocho.'] },
          items: [
            { q: '¿Cuántos hermanos tiene Arturo?', o: ['Uno', 'Dos', 'Tres'], a: 1 },
            { q: '¿Cómo se llaman?', o: ['Raquel y Antonio', 'Natalia y Vicente', 'Ana y Paco'], a: 0 },
            { q: '¿Cuántos años tienen?', o: ['31 y 23', '21 y 13', '30 y 22'], a: 0 }
          ] },
        { id: 'p16e3b', no: 'p.16 ③', t: 'Escucha estas conversaciones y responde — Conversación 2.', ko: '대화 2를 듣고 답하세요.',
          type: 'choice', audio: { key: '3.1', script: ['Mónica, ¿tú estás casada?', 'Sí, ¿no lo sabías?', '¡Anda! ¿Cómo se llama tu marido?', 'Pues, se llama Teodoro.', '¿Y tenéis hijos?', 'Sí, sí, tenemos un niño y una niña.', '¡Ah! ¿Cuántos años tienen?', 'El niño tiene seis años y la niña ocho.'] },
          items: [
            { q: '¿Está casada Mónica?', o: ['Sí', 'No'], a: 0 },
            { q: '¿Cómo se llama su marido?', o: ['Teodoro', 'Vicente', 'Arturo'], a: 0 },
            { q: '¿Tiene hijos?', o: ['No tiene hijos', 'Sí, un niño y una niña', 'Sí, dos niñas'], a: 1 },
            { q: '¿Cuántos años tienen?', o: ['6 y 8', '16 y 18', '5 y 7'], a: 0 }
          ] },
        { id: 'p16g', no: 'p.16 GRAMÁTICA', t: 'Completa las formas de llamarse y tener.', ko: '동사 변화를 완성하세요.',
          type: 'fill', items: [
            { q: 'LLAMARSE: (yo) {_} · (tú) {_} · (él/ella/usted) {_}', a: ['me llamo', 'te llamas', 'se llama'] },
            { q: 'TENER: (yo) {_} · (tú) {_} · (él/ella/usted) {_} · (nosotros/as) {_}', a: ['tengo', 'tienes', 'tiene', 'tenemos'] }
          ] },
        { id: 'p17e4', no: 'p.17 ④', t: 'Empareja las preguntas con las respuestas.', ko: '질문에 알맞은 대답 묶음(1~5)을 고르세요.',
          type: 'match', hideOptions: true,
          options: ['1 · Sí, llevo dos años casado. / No, estoy soltero.', '2 · Mi hermana se llama Ana y mi hermano Paco. / Mi hermano pequeño se llama Arturo y mi hermano mayor Jose.', '3 · Sí, tenemos una niña. / No, estamos casados pero no tenemos hijos.', '4 · Se llama Natalia. / Se llama Vicente.', '5 · Sí, tengo dos hermanos. / No, soy hija única.'],
          items: [{ t: 'A ¿Tienes hermanos?', a: 4 }, { t: 'B ¿Cómo se llama?', a: 3 }, { t: 'C ¿Cómo se llaman?', a: 1 }, { t: 'D ¿Estás casado?', a: 0 }, { t: 'E ¿Tenéis hijos?', a: 2 }] },
        { id: 'p17e8', no: 'p.17 ⑧', t: 'Árbol genealógico de la familia Prados. Relaciona a cada persona con Roberto.', ko: '가계도에서 Roberto와의 관계를 고르세요. (Guillermo–Marta: 조부모 / Tomás–Carolina: Roberto의 부모 / Alex–Sandra: Tomás의 형제 부부)',
          type: 'match', options: ['abuelo', 'abuela', 'padre', 'madre', 'tío', 'tía', 'hermano', 'hermana', 'primo', 'prima'],
          items: [{ t: 'Guillermo', a: 0 }, { t: 'Marta', a: 1 }, { t: 'Tomás', a: 2 }, { t: 'Carolina', a: 3 }, { t: 'Alex', a: 4 }, { t: 'Sandra', a: 5 }, { t: 'Juanito', a: 6 }, { t: 'Elena', a: 7 }, { t: 'David', a: 8 }, { t: 'Vanesa', a: 9 }] },
        { id: 'p17act', no: 'p.17', t: 'HABLA · Actividades', ko: '말하기 활동(채점 없음)',
          type: 'free', prompts: ['⑤ 세 명의 친구에게 가족에 대해 묻고 답을 적기', '⑥ 유명인과 가족 짝짓기 (García Márquez, Antonio Banderas, Penélope Cruz, Shakira, Piqué, Rodrigo, Melanie, Mónica)', '⑦ ¿Cuál es su relación familiar? (nombre) es el/la … de (nombre)'],
          models: ['¿Tienes hermanos? — Sí, tengo… / No, soy…', '¿Cómo se llama / se llaman? ¿Cuántos años tiene / tienen?', 'Yo creo que Mónica es la hija de Gabriel García Márquez.'] }
      ]
    },
    {
      id: 'u3-relaciones', title: 'Relaciones familiares · Posesivos', ko: 'p.18–19 가계도 · 가족 소개글 · 소유형용사',
      notes: '<table class="t"><tr><th>소유형용사</th><th>단수</th><th>복수</th></tr><tr><td>yo</td><td>mi hermano/a</td><td>mis hermanos/as</td></tr><tr><td>tú</td><td>tu primo/a</td><td>tus primos/as</td></tr><tr><td>él/ella/usted</td><td>su tío/a</td><td>sus tíos/as</td></tr><tr><td>nosotros/as</td><td>nuestro/a</td><td>nuestros/as</td></tr><tr><td>vosotros/as</td><td>vuestro/a</td><td>vuestros/as</td></tr><tr><td>ellos/as</td><td>su</td><td>sus</td></tr></table><p class="note">소유형용사는 <b>소유되는 것</b>의 수에 일치합니다. 3인칭은 de + 이름도 가능: el novio de Ana = su novio.</p>',
      items: [
        { id: 'p18e9', no: 'p.18 ⑨', t: 'Mira el árbol del ejercicio anterior y completa las frases con estas palabras.', ko: '가계도(Prados)를 보고 알맞은 낱말을 쓰세요.',
          bank: ['nietas', 'padres', 'cuñada', 'sobrinos'],
          type: 'fill', items: [
            { q: 'Tomás y Carolina son los {_} de Roberto.', a: ['padres'] },
            { q: 'Vanesa y Elena son las {_} de Guillermo.', a: ['nietas'] },
            { q: 'Elena y Roberto son los {_} de Alex y Sandra.', a: ['sobrinos'] },
            { q: 'Sandra es la {_} de Carolina.', a: ['cuñada'] }
          ] },
        { id: 'p18pos', no: 'p.18', t: 'Completa las frases con: mis, tus, su, sus.', ko: '소유형용사를 쓰세요.',
          type: 'fill', items: [
            { q: 'Este es mi padre, esta es mi madre = Estos son {_} padres.', a: ['mis'] },
            { q: 'Este es tu hermano, esta es tu hermana = Estos son {_} hermanos.', a: ['tus'] },
            { q: 'Es el hermano de Juan = Es {_} hermano.', a: ['su'] },
            { q: 'Son las hermanas de Juan = Son {_} hermanas.', a: ['sus'] }
          ] },
        { id: 'p18e10', no: 'p.18 ⑩', t: 'Completa las frases con: el/la + miembro de la familia + de.', ko: '“el/la + 가족 관계 + de” 형태로 쓰세요.',
          type: 'fill', items: [
            { q: 'Antonio es mi tío, es {_} mi madre.', a: ['el hermano de'] },
            { q: 'Clara es mi cuñada, es {_} mi hermano.', a: ['la mujer de'] },
            { q: 'Lucio es mi primo, es {_} mi tío Mateo.', a: ['el hijo de'] },
            { q: 'Rocío es mi abuela, es {_} mi madre.', a: ['la madre de'] },
            { q: 'Miguel es {_} mi hermana. Llevan dos años casados.', a: [['el marido de', 'el esposo de']] }
          ] },
        { id: 'p18e12', no: 'p.18 ⑫', t: 'Mira estas fotos de la familia de Sonia. Lee los textos y emparéjalos con las fotos.', ko: '글(1~4)과 사진(A~D)을 연결하세요. A: 에펠탑 앞의 노부부 · B: 인형을 안은 두 소년 · C: 아기를 안은 두 여성 · D: 아빠와 아이',
          type: 'match', options: ['Foto A', 'Foto B', 'Foto C', 'Foto D'],
          items: [
            { t: 'Texto 1 · Este es mi primo Sancho y su hijo Oliver…', a: 3 },
            { t: 'Texto 2 · Esta soy yo con mi hermana Cristina y su hija Amelia…', a: 2 },
            { t: 'Texto 3 · Estos somos yo y mi hermano mayor Imanol cuando éramos pequeños…', a: 1 },
            { t: 'Texto 4 · Esta es mi madre con su novio en París…', a: 0 }
          ] },
        { id: 'p18e13', no: 'p.18 ⑬', t: 'Lee de nuevo y contesta estas preguntas.', ko: '위 글(1~4)을 다시 읽고 답하세요.',
          hint: '<b>1</b> Sancho es el hijo de mi tío Nacho… vive en Florida con su mujer americana. <b>2</b> Mi sobrina Amelia tiene un año; mi hermana vive en una playa de Turquía con su marido Onur, de Estambul. <b>3</b> Imanol vive en Madrid y yo en Barcelona; hablamos por teléfono. <b>4</b> Mi madre está divorciada; Julio es su novio; tiene 65 años.',
          type: 'choice', items: [
            { q: '¿Quién es Oliver?', o: ['El hijo de Sancho', 'El hermano de Sonia', 'El novio de la madre'], a: 0 },
            { q: '¿Dónde vive Sancho?', o: ['En Florida', 'En Madrid', 'En Turquía'], a: 0 },
            { q: '¿Con quién vive Sancho?', o: ['Con su mujer americana', 'Con su madre', 'Con su hermana'], a: 0 },
            { q: '¿Cómo se llama la sobrina de Sonia?', o: ['Amelia', 'Cristina', 'Oliver'], a: 0 },
            { q: '¿Dónde vive la hermana de Sonia?', o: ['En Turquía', 'En Barcelona', 'En Florida'], a: 0 },
            { q: '¿Quién es Onur?', o: ['El marido de la hermana de Sonia', 'El hermano de Sonia', 'El primo de Sonia'], a: 0 },
            { q: '¿Por qué Sonia no ve mucho a Imanol?', o: ['Porque él vive en Madrid y ella en Barcelona', 'Porque están enfadados', 'Porque él vive en Turquía'], a: 0 },
            { q: '¿Quién es Julio?', o: ['El novio de la madre de Sonia', 'El padre de Sonia', 'El tío de Sonia'], a: 0 },
            { q: '¿Cuántos años tiene la madre de Sonia?', o: ['65', '56', '75'], a: 0 }
          ] },
        { id: 'p19e1', no: 'p.19 ①', t: 'Escucha a Sonia hablar de los miembros de su familia.', ko: 'Sonia의 가족 소개를 듣고 답하세요.',
          type: 'fill', audio: { key: '3.2', script: [
            'Hola, soy Sonia. Os presento a mi familia materna. Mi madre se llama Lorena y mi padre se llama Alfonso. Tengo dos hermanos, un hermano mayor y una hermana pequeña. Yo soy la mediana.',
            'Mi hermano se llama Imanol y mi hermana se llama Cristina. Mi abuela, la madre de mi madre, se llama Clara y ¡tiene ya noventa años! Mi abuelo, el padre de mi madre, se llama José y también es muy mayor. Creo que tiene unos noventa y dos años.',
            'Mi tío favorito, el hermano pequeño de mi madre, se llama Nacho y su mujer se llama Silvia. Mis primos, los hijos de Nacho y Silvia, se llaman Sancho y Teresa.'] },
          items: [
            { q: 'El padre de Sonia se llama {_}.', a: ['Alfonso'] },
            { q: 'El hermano mayor se llama {_} y la hermana pequeña se llama {_}.', a: ['Imanol', 'Cristina'] },
            { q: 'La abuela se llama {_} y tiene {_} años.', a: ['Clara', ['90', 'noventa']] },
            { q: 'El abuelo se llama {_}.', a: [['José', 'Jose']] },
            { q: 'El tío favorito se llama {_} y su mujer se llama {_}.', a: ['Nacho', 'Silvia'] },
            { q: 'Los primos se llaman {_} y {_}.', a: [['Sancho', 'Teresa'], ['Teresa', 'Sancho']], unordered: false }
          ] },
        { id: 'p19e3', no: 'p.19 ③', t: 'Escucha una conversación entre Maribel y una amiga. Escribe la relación con Maribel.', ko: 'Maribel의 가족사진을 설명하는 대화를 듣고 관계를 쓰세요.',
          type: 'fill', audio: { key: '3.3', script: [
            'A ver esas fotos. ¿Quién es esta?', 'Es mi madre, está en el jardín de la casa de mi abuelo.', '¿Cómo se llama?', 'Se llama Pilar.', '¿Y esta eres tú?', 'Sí, con mi sobrina Alicia.', '¡Qué rica! ¿Cuántos años tiene?', 'Tiene uno y medio ya.', 'Oh, qué pequeña. ¿Y estos?',
            'Esta es mi tía Carmen y este su marido Francisco. Este es mi abuelo Pedro, el padre de mi madre, él es muy mayor, tiene ochenta y cinco años.', '¿Y este chico tan guapo?', 'Es mi primo Alex. Es muy joven, tiene quince años.'] },
          items: [
            { q: 'Foto 1: Es la {_} de Maribel.', a: ['madre'] },
            { q: 'Foto 2: Es la {_} de Maribel.', a: ['sobrina'] },
            { q: 'Foto 3: Es la {_} y el {_} de Maribel.', a: ['tía', 'tío'] },
            { q: 'Foto 4: Es el {_} de Maribel.', a: ['primo'] }
          ] },
        { id: 'p19e4', no: 'p.19 ④', t: 'Escucha de nuevo y contesta a estas preguntas.', ko: '다시 듣고 답하세요.',
          type: 'fill', audio: { key: '3.3', script: ['Es mi madre. Se llama Pilar.', 'Mi sobrina Alicia tiene uno y medio ya.', 'Este es mi abuelo Pedro, tiene ochenta y cinco años.', 'Es mi primo Alex. Es muy joven, tiene quince años.'] },
          items: [
            { q: '¿Cómo se llama la madre de Maribel? — {_}', a: ['Pilar'] },
            { q: '¿Cuántos años tiene la sobrina de Maribel? — {_}', a: [['uno y medio', 'un año y medio', '1,5', '1 y medio', '1 año y medio']] },
            { q: '¿Cuántos años tiene el abuelo de Maribel? — {_}', a: [['85', 'ochenta y cinco']] },
            { q: '¿Cuántos años tiene Alex? — {_}', a: [['15', 'quince']] }
          ] },
        { id: 'p19act', no: 'p.19', t: 'ESCUCHA Y HABLA · INTERACTÚA', ko: '활동(채점 없음)',
          type: 'free', prompts: ['② 나의 가계도를 그려 짝에게 설명하기', '⑤ 짝의 가족사진을 보며 질문하기', '⑥ 가족사진을 설명하는 글을 써서 학급 블로그에 올리기'],
          models: ['¿Quién es este/esta? — Es mi … / Es el/la … de mi …', '¿Cómo se llama? — Se llama …', '¿Y estos? — Estos son mis … ¿Cómo se llaman? — Se llaman … y …'] }
      ]
    },
    {
      id: 'u3-banco', title: 'Banco de gramática y léxico', ko: 'p.51–52 · p.72 · p.40–42',
      items: [
        { id: 'g6e1', no: 'G6 ①', t: 'Completa con las formas del verbo llamarse.', ko: 'llamarse 변화형을 쓰세요.',
          type: 'fill', items: [
            { q: 'Mi hermano {_} Juan.', a: ['se llama'] },
            { q: '— ¿Cómo {_} (vosotros)? — {_} (nosotros) Pedro y Carlos.', a: ['os llamáis', 'nos llamamos'] },
            { q: 'Ellas {_} Lucía y Pepa.', a: ['se llaman'] },
            { q: 'Yo {_} Roberto.', a: ['me llamo'] },
            { q: 'Mis padres {_} Luis y Pilar.', a: ['se llaman'] },
            { q: '— ¿Cómo {_} (ellos) tus padres? — Mi padre {_} (él) Juan y mi madre {_} (ella) Marisa.', a: ['se llaman', 'se llama', 'se llama'] }
          ] },
        { id: 'g6e2', no: 'G6 ②', t: 'Completa con las formas del verbo tener.', ko: 'tener 변화형을 쓰세요.',
          type: 'fill', items: [
            { q: '— ¿Cuántos años {_} (tú)? — (Yo) {_} 25 años.', a: ['tienes', 'tengo'] },
            { q: '— ¿{_} (vosotros) hijos? — Sí, {_} (nosotros) dos hijas.', a: ['Tenéis', 'tenemos'] },
            { q: 'Mis hermanas {_} (ellas) 21 y 23 años.', a: ['tienen'] },
            { q: '— ¿Cuántos años {_} (vosotros)? — Yo {_} 35 y ella {_} 49.', a: ['tenéis', 'tengo', 'tiene'] },
            { q: 'No somos jóvenes, {_} (nosotros) más de 40 años.', a: ['tenemos'] },
            { q: '— ¿{_} (tú) hermanos? — Sí, {_} (yo) una hermana mayor y un hermano pequeño.', a: ['Tienes', 'tengo'] }
          ] },
        { id: 'g7e1', no: 'G7 ①', t: 'Mira el árbol de la familia Gómez y completa las frases con los artículos y los nombres.', ko: 'Gómez 가족: José–Marta 부부 → 딸 Pilar, 딸 Rosa(Pedro와 결혼) → 손주 Toni, Ana.',
          type: 'fill', items: [
            { q: '{_} padres de Pilar son {_} y {_}.', a: ['Los', ['Jose', 'José'], 'Marta'], unordered: false },
            { q: '{_} sobrino de Pilar es {_}.', a: ['El', 'Toni'] },
            { q: '{_} abuela de Ana es {_}.', a: ['La', 'Marta'] },
            { q: '{_} nieto de Jose es {_}.', a: ['El', 'Toni'] },
            { q: '{_} sobrinos de Pilar son {_} y {_}.', a: ['Los', ['Toni', 'Ana'], ['Ana', 'Toni']] }
          ] },
        { id: 'g8e1', no: 'G8 ①', t: 'Completa las frases con: mi, tu, su / mis, tus, sus.', ko: '소유형용사를 쓰세요. (Prados 가족)',
          type: 'fill', items: [
            { q: 'Alex, ¿cómo se llaman {_} hermanos? — {_} hermanos se llaman Guillermo y Marta.', a: ['tus', 'Mis'] },
            { q: 'Pepe y Alicia tienen dos hijos, {_} hijo se llama Gonzalo y {_} hija Teresa.', a: ['su', 'su'] },
            { q: 'David, ¿cómo se llama {_} abuela, la madre de tu madre? — {_} abuela se llama Marta.', a: ['tu', 'Mi'] },
            { q: 'Tomás, ¿cómo se llaman los hijos de Alex? — {_} hijos se llaman Vanesa y David.', a: ['Sus'] }
          ] },
        { id: 'l3e1', no: 'Léxico ①', t: 'Hablar de tu familia — Completa las frases.', ko: '가족 말하기 어휘 연습',
          bank: ['hermanos?', 'una hermana', 'hijos?', 'llama Arturo', 'soy hijo único', 'se llaman?', 'casado?', 'pequeña', 'estoy soltero', 'no tengo hijos', 'niña', 'llama Natalia', 'mayor', 'años casado'],
          type: 'fill', items: [
            { q: '¿Tienes {_}', a: ['hermanos?'] }, { q: '¿Cómo {_}', a: ['se llaman?'] }, { q: '¿Estás {_}', a: ['casado?'] }, { q: '¿Tienes {_}', a: ['hijos?'] },
            { q: 'Sí, tengo un hermano y {_}', a: ['una hermana'] }, { q: 'No tengo hermanos, {_}', a: ['soy hijo único'] }, { q: 'Mi hermano se {_}', a: ['llama Arturo'] },
            { q: 'Mi hermana se {_}', a: ['llama Natalia'] }, { q: 'Mi hermano {_}', a: ['mayor'] }, { q: 'Mi hermana {_}', a: ['pequeña'] }, { q: 'Llevo dos {_}', a: ['años casado'] },
            { q: 'No estoy casado, {_}', a: ['estoy soltero'] }, { q: 'Tengo una {_}', a: ['niña'] }, { q: 'Estoy casada pero {_}', a: ['no tengo hijos'] }
          ] },
        { id: 'l3e2', no: 'Léxico ②', t: 'La familia de Sonia — Completa las frases con las palabras del cuadro.', ko: '“La familia de Sonia” 표현 완성하기',
          bank: ['solo tiene un año', 'teléfono bastante', 'éramos pequeños', 'su mujer en Madrid', 'veo mucho', 'más que yo', 'divorciada', 'de vitalidad', 'años casados'],
          type: 'fill', items: [
            { q: 'Estos somos yo y mi hermano cuando {_}', a: ['éramos pequeños'] },
            { q: 'Mi hermano tiene dos años {_}', a: ['más que yo'] },
            { q: 'No lo {_}', a: ['veo mucho'] },
            { q: 'Hablamos por {_}', a: ['teléfono bastante'] },
            { q: 'Es muy pequeña, {_}', a: ['solo tiene un año'] },
            { q: 'Mi madre está {_}', a: ['divorciada'] },
            { q: 'Llevan dos {_}', a: ['años casados'] },
            { q: 'Vive con {_}', a: [['su mujer', 'su mujer en Madrid']] },
            { q: 'Mi madre está llena {_}', a: ['de vitalidad'] }
          ] },
        { id: 'c40', no: 'p.40–42', t: 'COMUNICACIÓN — Mi familia · Información personal · Hablar de tu familia', ko: '짝 활동(채점 없음)',
          type: 'free', prompts: ['p.40 ⑨ Mi familia (Estudiante A/B): 종이에 가족 이름을 쓰고 짝이 누가 누구인지 추측하기', 'p.40–41 ⑩ Información personal: 카드(Alice Parker / Juan Rodriguez)를 보고 3인칭으로 답하기', 'p.42 ⑪⑫ 반 친구 3명에게 가족에 대해 묻고 표 채우기'],
          models: ['¿Es Onur tu hermano? — No. ¿Son Ezgi y Ahmet tus abuelos? — Sí.', 'Sí, es mi primo, es el hijo de la hermana de mi madre.', 'Se llama… · Se apellida… · Es… · Vive en… · Su número de teléfono es…'] }
      ]
    }
  ]
};
