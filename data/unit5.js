(window.UNITDATA = window.UNITDATA || {})[5] = {
  sections: [
    {
      id: 'u5-habitos', title: 'Hábitos y costumbres', ko: 'p.26–27 스페인 사람들의 습관 · 생활 습관',
      notes: '<table class="t"><tr><th>Frecuencia</th><th></th></tr><tr><td>siempre · a menudo · a veces · casi nunca · nunca</td><td>빈도 부사</td></tr><tr><td>por la mañana · a mediodía · por la tarde · por la noche</td><td>하루의 때</td></tr></table><p class="note">불규칙 동사: dormir (duermo, duermes, duerme, dormimos, dormís, duermen) · leer (leo, lees, lee, leemos, leéis, leen) · fumar, beber는 규칙 변화.</p>',
      items: [
        { id: 'p26e3', no: 'p.26 ③', t: 'Relaciona las frases con los dibujos de hábitos.', ko: '표현(A~E)을 알맞은 그림 번호(1~5)에 연결하세요.',
          type: 'match', options: ['1 · Leer el periódico', '2 · Dormir la siesta', '3 · Ver la tele por la noche', '4 · Tomar vino', '5 · Tener perro'],
          items: [{ t: 'A', a: 2 }, { t: 'B', a: 3 }, { t: 'C', a: 0 }, { t: 'D', a: 4 }, { t: 'E', a: 1 }] },
        { id: 'p26e4', no: 'p.26 ④', t: '¿Qué porcentaje de españoles…? Escucha y escribe el número.', ko: '듣고 퍼센트를 쓰세요. (숫자만)',
          type: 'fill', audio: { key: '5.1', script: [
            'Según una encuesta, el treinta y cinco por ciento de los españoles lee el periódico todos los días.', 'El noventa por ciento ve la tele por la noche.', 'El cuarenta por ciento duerme la siesta.', 'El sesenta por ciento bebe vino.', 'El veinte por ciento tiene perro.', 'Y el cincuenta por ciento fuma.'] },
          items: [
            { q: 'Leen el periódico: {_} %', a: [['35', 'treinta y cinco']] },
            { q: 'Ven la tele por la noche: {_} %', a: [['90', 'noventa']] },
            { q: 'Duermen la siesta: {_} %', a: [['40', 'cuarenta']] },
            { q: 'Beben vino: {_} %', a: [['60', 'sesenta']] },
            { q: 'Tienen perro: {_} %', a: [['20', 'veinte']] },
            { q: 'Fuman: {_} %', a: [['50', 'cincuenta']] }
          ] },
        { id: 'p27e5', no: 'p.27 ⑤', t: 'Lee el texto sobre los españoles y contesta.', ko: '스페인 사람들의 습관에 대한 글을 읽고 답하세요.',
          hint: '“Los españoles… salen de tapas con amigos, toman té de menta (en el sur), se saludan dando la mano o con dos besos, salen de noche, van al cine y ven la tele. Leen libros. Los hombres cocinan y hacen tareas en casa. Después de comer, muchos duermen la siesta en casa.”',
          type: 'choice', items: [
            { q: '¿Qué hacen los fines de semana con los amigos?', o: ['Ir de tapas', 'Ir a la montaña', 'Jugar a las cartas'], a: 0 },
            { q: '¿Qué toman en el sur?', o: ['Té de menta', 'Chocolate', 'Cerveza'], a: 0 },
            { q: '¿Dónde duermen la siesta?', o: ['Dentro de casa', 'En el parque', 'En la oficina'], a: 0 },
            { q: '¿Cómo se saludan?', o: ['Se dan la mano', 'Se abrazan siempre', 'No se saludan'], a: 0 },
            { q: '¿Qué hacen por la noche?', o: ['Salir, ir al cine, ver la tele', 'Dormir temprano', 'Estudiar'], a: 0 },
            { q: '¿Qué leen?', o: ['Libros', 'Mapas', 'Cartas'], a: 0 },
            { q: '¿Los hombres cocinan y hacen tareas en casa?', o: ['Sí', 'No'], a: 0 },
            { q: '¿Cuándo duermen la siesta?', o: ['Después de comer', 'Antes de desayunar', 'Por la noche'], a: 0 }
          ] },
        { id: 'p27g12', no: 'p.27 GRAMÁTICA', t: 'Completa con el verbo en presente.', ko: 'beber / fumar / leer / dormir 변화형',
          type: 'fill', items: [
            { q: 'Los españoles {_} (beber) vino con la comida.', a: ['beben'] },
            { q: 'Muchos {_} (fumar) menos que antes.', a: ['fuman'] },
            { q: 'Ellos {_} (leer) el periódico por la mañana.', a: ['leen'] },
            { q: 'Mis abuelos {_} (dormir) la siesta.', a: ['duermen'] }
          ] }
      ]
    },
    {
      id: 'u5-comidas', title: 'Las comidas', ko: 'p.28–29 식사 · 빈도 · 장소',
      items: [
        { id: 'p28e1', no: 'p.28 ①', t: 'Relaciona cada definición con una comida del día.', ko: '정의와 식사를 연결하세요.',
          type: 'match', options: ['desayuno', 'almuerzo / comida', 'merienda', 'cena'],
          items: [{ t: 'Es la primera comida del día, por la mañana.', a: 0 }, { t: 'Es la comida principal, a mediodía o por la tarde.', a: 1 }, { t: 'Es una comida ligera, por la tarde.', a: 2 }, { t: 'Es la última comida del día, por la noche.', a: 3 }] },
        { id: 'p28e2', no: 'p.28 ②', t: 'Escucha a cuatro personas y contesta: ¿de qué comida habla cada una y qué toma?', ko: '4명이 각각 어떤 식사를 말하는지 고르세요.',
          type: 'match', audio: { key: '5.2', script: [
            { w: 'Irene', t: 'Normalmente no como mucho por la noche: una ensalada y una sopa, nada más.' },
            { w: 'Lucía', t: 'Yo almuerzo a las dos. Casi siempre carne: ternera, chuletas…' },
            { w: 'Laura', t: 'Yo meriendo un bocadillo de queso y jamón y por la noche cenamos un pinchito de tortilla.' },
            { w: 'Carmen', t: 'Para desayunar tomo una tostada con mermelada y un té. En verano, fruta.' }] },
          options: ['desayuno', 'almuerzo', 'merienda y cena', 'cena'],
          items: [{ t: 'Irene (ensalada y sopa)', a: 3 }, { t: 'Lucía (carne)', a: 1 }, { t: 'Laura (bocadillo / pinchito de tortilla)', a: 2 }, { t: 'Carmen (tostada con mermelada y té)', a: 0 }] },
        { id: 'p28e6', no: 'p.28 ⑥', t: 'Escucha de nuevo y contesta.', ko: '다시 듣고 답하세요.',
          type: 'choice', audio: { key: '5.2', script: ['Irene: no como mucho por la noche.', 'Lucía: casi siempre carne, ternera.', 'Laura: sale tarde y cena sobre las nueve.', 'Carmen: en verano, fruta.'] },
          items: [
            { q: '¿Qué no le gusta a Irene?', o: ['Comer mucho por la noche', 'La ensalada', 'La sopa'], a: 0 },
            { q: '¿Qué carne prefiere Lucía?', o: ['La ternera', 'El pollo', 'El cerdo'], a: 0 },
            { q: '¿Cuándo cena Laura?', o: ['Sobre las nueve, porque sale tarde', 'A las seis', 'A las doce'], a: 0 },
            { q: '¿Cuándo toma fruta Carmen?', o: ['En verano', 'En invierno', 'Siempre'], a: 0 }
          ] },
        { id: 'p29e7', no: 'p.29 ⑦', t: 'Completa con las expresiones.', ko: '빈도·때·식사 표현을 쓰세요.',
          bank: ['a menudo', 'a veces', 'a mediodía', 'por la noche', 'para desayunar', 'para cenar', 'el almuerzo'],
          type: 'fill', items: [
            { q: 'Tomo café {_}, pero {_} tomo té.', a: ['a menudo', 'a veces'] },
            { q: 'Como {_}, y ceno {_}.', a: ['a mediodía', 'por la noche'] },
            { q: 'Tomo tostadas {_}, y sopa {_}.', a: ['para desayunar', 'para cenar'] },
            { q: 'En España {_} es la comida principal.', a: ['el almuerzo'] }
          ] },
        { id: 'p29e8', no: 'p.29 ⑧', t: 'Relaciona las preguntas con las respuestas.', ko: '질문(1~5)에 맞는 대답(A~E)을 고르세요.',
          type: 'match', options: ['A · A las nueve.', 'B · Una tostada con aceite.', 'C · No, en casa.', 'D · Sí, siempre.', 'E · Tomo café con leche.'],
          items: [{ t: '1 ¿Qué desayunas?', a: 1 }, { t: '2 ¿A qué hora desayunas?', a: 0 }, { t: '3 ¿Desayunas en un bar?', a: 2 }, { t: '4 ¿Qué tomas para beber?', a: 4 }, { t: '5 ¿Desayunas todos los días?', a: 3 }] },
        { id: 'p29e9', no: 'p.29 ⑨', t: '¿Dónde se compra? Relaciona.', ko: '가게와 파는 것을 연결하세요.',
          type: 'match', options: ['pan', 'carne', 'frutas y verduras', 'vino', 'tarta', 'café'],
          items: [{ t: 'panadería', a: 0 }, { t: 'carnicería', a: 1 }, { t: 'mercado', a: 2 }, { t: 'bodega', a: 3 }, { t: 'pastelería', a: 4 }, { t: 'cafetería', a: 5 }] }
      ]
    },
    {
      id: 'u5-compras', title: 'Compras y bares', ko: 'p.30–31 가격 · 블로그 · 바에서 주문',
      items: [
        { id: 'p30e1', no: 'p.30 ①', t: 'Lee el blog sobre comida y escribe Verdadero (V) o Falso (F).', ko: '블로그 글을 읽고 V/F를 고르세요.',
          type: 'tf', items: [
            { q: 'El autor del blog come en restaurantes todos los días.', a: true },
            { q: 'Los españoles cenan muy temprano.', a: false },
            { q: 'La comida más importante es el desayuno.', a: false },
            { q: 'En España hay muchos tipos de tapas.', a: true },
            { q: 'El autor no bebe vino nunca.', a: false }
          ] },
        { id: 'p30e2', no: 'p.30 ②', t: 'Escucha los precios y relaciónalos con los números.', ko: '가격(A~H)을 듣고 번호(1~8)를 연결하세요. 12,75 · 15,99 · 50,90 · 12 · 13,25 · 3,20 · 0,60 · 0,80',
          type: 'match', audio: { key: 'u5-precios', script: ['Doce euros con setenta y cinco.', 'Quince con noventa y nueve.', 'Cincuenta con noventa.', 'Doce euros.', 'Trece con veinticinco.', 'Tres con veinte.', 'Sesenta céntimos.', 'Ochenta céntimos.'] },
          options: ['1', '2', '3', '4', '5', '6', '7', '8'],
          items: [{ t: 'A · 12,75 €', a: 7 }, { t: 'B · 15,99 €', a: 2 }, { t: 'C · 50,90 €', a: 3 }, { t: 'D · 12 €', a: 0 }, { t: 'E · 13,25 €', a: 5 }, { t: 'F · 3,20 €', a: 6 }, { t: 'G · 0,60 €', a: 4 }, { t: 'H · 0,80 €', a: 1 }] },
        { id: 'p31e3', no: 'p.31 ③', t: 'Escucha una conversación en un bar y contesta.', ko: '바에서의 대화를 듣고 답하세요.',
          type: 'fill', audio: { key: '5.3', script: [
            'Buenos días. ¿Qué va a tomar?', 'Una tostada con tomate y un café con leche, por favor.', 'Muy bien. ¿Algo más?', 'No, nada más. ¿Cuánto es?', 'Son dos euros.'] },
          items: [
            { q: '¿Qué pide el cliente? — Una {_} y un {_}.', a: [['tostada con tomate', 'tostada'], ['café con leche', 'café']] },
            { q: '¿Cuánto es? — {_}', a: [['dos euros', '2 euros', '2 €', '2', 'dos']] }
          ] },
        { id: 'p31e4', no: 'p.31 ④', t: 'Ordena el diálogo en el bar.', ko: '대화(A~G)를 순서(1~7)에 맞게 연결하세요.',
          type: 'match', options: ['1', '2', '3', '4', '5', '6', '7'],
          items: [{ t: 'A · Hola, buenos días.', a: 1 }, { t: 'B · ¿Qué le pongo?', a: 5 }, { t: 'C · Un café solo, por favor.', a: 2 }, { t: 'D · ¿Algo más?', a: 6 }, { t: 'E · (Entra en el bar) Buenos días.', a: 0 }, { t: 'F · No, gracias. ¿Cuánto es?', a: 3 }, { t: 'G · Un euro con veinte.', a: 4 }] },
        { id: 'p31act', no: 'p.28–31', t: 'HABLA · Actividades', ko: '말하기 활동(채점 없음)',
          type: 'free', prompts: ['p.28 ④⑤ 하루 식사에 대해 짝과 인터뷰하기', 'p.30 ⑥ 가게에서 물건 사는 롤플레이', 'p.31 ⑤ 바에서 주문하기 롤플레이 (camarero / cliente)'],
          models: ['¿Qué desayunas? — Normalmente tomo…', '¿Cuánto cuesta / cuestan…? — Cuesta… euros.', 'Buenos días, ¿qué le pongo? — Un café con leche, por favor. — ¿Cuánto es?'] }
      ]
    },
    {
      id: 'u5-banco', title: 'Banco de comunicación y léxico', ko: 'p.47 · p.74–76',
      items: [
        { id: 'c47', no: 'p.47', t: 'COMUNICACIÓN — Pedir en un bar · Hablar de hábitos', ko: '짝 활동(채점 없음)',
          type: 'free', prompts: ['Estudiante A/B: 바 직원과 손님 역할로 메뉴를 보고 주문하기', '나의 하루 식사와 습관을 3~5문장으로 소개하기'],
          models: ['¿Qué desea? — Quiero… / Me pone…, por favor.', 'Normalmente desayuno a las… y como a las…', 'Casi nunca ceno tarde. A veces tomo café por la tarde.'] },
        { id: 'l5v', no: 'Léxico', t: 'Vocabulario de la unidad 5', ko: '어휘 확인: 알맞은 낱말을 쓰세요.',
          bank: ['desayuno', 'almuerzo', 'merienda', 'cena', 'siesta', 'tapas'],
          type: 'fill', items: [
            { q: 'La primera comida del día es el {_}.', a: ['desayuno'] },
            { q: 'La comida principal de España es el {_} (o la comida).', a: [['almuerzo', 'comida']] },
            { q: 'Por la tarde, los niños toman la {_}.', a: ['merienda'] },
            { q: 'Por la noche tomamos la {_}.', a: ['cena'] },
            { q: 'Después de comer, muchos españoles duermen la {_}.', a: ['siesta'] },
            { q: 'Con los amigos, los españoles salen de {_}.', a: ['tapas'] }
          ] }
      ]
    }
  ]
};
