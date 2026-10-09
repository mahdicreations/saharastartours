import fs from 'fs';
import path from 'path';

const ES_DIR = path.resolve('src/data/locales/es/tours');
const IT_DIR = path.resolve('src/data/locales/it/tours');

function saveTour(slug, esData, itData) {
  fs.writeFileSync(path.join(ES_DIR, `${slug}.json`), JSON.stringify(esData, null, 2), 'utf-8');
  fs.writeFileSync(path.join(IT_DIR, `${slug}.json`), JSON.stringify(itData, null, 2), 'utf-8');
  console.log(`Saved tour ${slug} in ES and IT!`);
}

// -------------------------------------------------------------
// Tour 24: hot-air-balloon-marrakech
// -------------------------------------------------------------
const tour24_es = {
  slug: "hot-air-balloon-marrakech",
  title: "Vuelo en Globo Aerostático al Amanecer en Marrakech | Sahara Star Tours",
  shortTitle: "Vuelo en Globo Aerostático en Marrakech",
  description: "Sobrevuele el palmeral de Marrakech y las montañas del Alto Atlas al amanecer en globo aerostático. Incluye traslados privados y desayuno tradicional bereber.",
  aboutHtml: "Viva una experiencia inolvidable en globo aerostático sobrevolando los mágicos paisajes de Marrakech al amanecer. Admire las crestas del Alto Atlas teñidas por los primeros rayos del sol, los extensos palmerales y las aldeas tradicionales bereberes desde el cielo en una perspectiva sobrecogedora y pacífica.<br/><br/>Tras aterrizar suavemente, disfrutará de un exquisito desayuno bereber servido en una jaima tradicional y recibirá su certificado de vuelo personalizado.",
  duration: "Media Jornada / 3-4 Horas",
  startingFrom: "Marrakech",
  price: "Desde 190 $/persona",
  highlights: [
    "Recogida temprana: Cómodo traslado privado desde su alojamiento en Marrakech hacia las 5:00 h de la madrugada.",
    "Vuelo panorámico: Aproximadamente 45 a 60 minutos de vuelo con vistas inolvidables del Alto Atlas y el campo marroquí.",
    "Desayuno tradicional bereber: Degustación de productos frescos locales en jaima tras el aterrizaje.",
    "Recuerdos imborrables: Fotografías espectaculares a vista de pájaro y certificado de vuelo expedido por el piloto."
  ],
  inclusions: [
    "Traslados de ida y vuelta en vehículo 4x4 con chófer desde su hotel en Marrakech",
    "Vuelo en globo aerostático de 45 a 60 minutos sobre los valles del Atlas",
    "Auténtico desayuno bereber tradicional servido bajo jaima típica",
    "Certificado de vuelo oficial conmemorativo firmado por el piloto"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para el equipo de vuelo y chófer (opcionales)",
    "Comidas y bebidas adicionales no mencionadas en el programa",
    "Fotografías o vídeos profesionales opcionales"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Vuelo en Globo Aerostático en Marrakech",
      content: "05:00 – Recogida en su hotel o riad en un cómodo vehículo 4x4 y trayecto hacia la zona de despegue. 05:45 – Llegada al campo de vuelo donde asistirá al inflado de los globos mientras disfruta de un té o café de bienvenida. 06:15 – Despegue suave al alba: sobrevolará llanuras, palmerales y pueblos tradicionales con el telón de fondo de las cumbres nevadas del Alto Atlas durante 45 a 60 minutos. Aterrizaje y traslado al campamento bereber para saborear un copioso desayuno tradicional recién horneado. Entrega de certificados y regreso a su hotel en Marrakech hacia media mañana."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Salida", subtitle: "Recogida en Hotel", desc: "Traslado privado desde su alojamiento en Marrakech de madrugada." },
    { number: 2, name: "Oasis del Palmeral de Marrakech", day: "Actividad", subtitle: "Vuelo sobre el Palmeral", desc: "Vistas aéreas del palmeral con la cordillera del Atlas de fondo." },
    { number: 3, name: "Campamento Oasis Bereber", day: "Desayuno", subtitle: "Hospitalidad y Té a la Menta", desc: "Desayuno tradicional en jaima bereber y té a la menta." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/hot-air-balloon-in-marrakech/images/thumbnail.jpg", cap: "Vuelo en Globo Aerostático en Marrakech al Amanecer", alt: "Globos aerostáticos flotando sobre los paisajes rurales y montañas de Marrakech al amanecer" }
  ],
  faqs: []
};

const tour24_it = {
  slug: "hot-air-balloon-marrakech",
  title: "Volo in Mongolfiera all'Alba a Marrakech | Sahara Star Tours",
  shortTitle: "Volo in Mongolfiera a Marrakech",
  description: "Sorvolate il palmeto di Marrakech e l'Alto Atlante all'alba in mongolfiera. Include trasferimenti privati dall'hotel e colazione tradizionale berbera.",
  aboutHtml: "Vivete un'esperienza emozionante e poetica in mongolfiera sorvolando i suggestivi scenari di Marrakech all'alba. Ammirate le vette dell'Alto Atlante illuminate dai primi raggi di sole, le distese di palme e i villaggi berberi dall'alto in un silenzio magico e rigenerante.<br/><br/>Dopo un atterraggio morbido, vi attende una ricca colazione tradizionale berbera servita sotto una tenda tipica, accompagnata dalla consegna del certificato di volo personalizzato.",
  duration: "Mezza Giornata / 3-4 Ore",
  startingFrom: "Marrakech",
  price: "Da 190 €/persona",
  highlights: [
    "Pick-up all'alba: Comodo transfer privato dal vostro alloggio a Marrakech intorno alle 5:00 del mattino.",
    "Volo panoramico: Circa 45-60 minuti di volo con vista mozzafiato sull'Alto Atlante e sulle campagne circostanti.",
    "Colazione berbera: Ricca colazione a base di prodotti tipici locali servita dopo l'atterraggio.",
    "Ricordi indimenticabili: Foto aeree spettacolari e rilascio del certificato di volo ufficiale firmato dal pilota."
  ],
  inclusions: [
    "Transfer privati andata e ritorno in 4x4 dal vostro hotel a Marrakech",
    "Volo in mongolfiera di 45-60 minuti sui rilievi dell'Atlante",
    "Autentica prima colazione tradizionale berbera sotto la tenda",
    "Certificato di volo ufficiale rilasciato e firmato dal pilota"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per il team di volo e l'autista (facoltative)",
    "Pasti o bevande supplementari non inclusi",
    "Servizi fotografici o video professionali facoltativi"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Volo in Mongolfiera a Marrakech",
      content: "05:00 – Pick-up dal vostro alloggio a Marrakech in comodo fuoristrada 4x4. 05:45 – Arrivo al campo di decollo dove assisterete ai preparativi dei palloni gustando un tè o caffè caldo. 06:15 – Decollo dolce all'alba: volo panoramico di 45-60 minuti sorvolando valli, palmeti e villaggi tradizionali con le cime dell'Alto Atlante all'orizzonte. Atterraggio e trasferimento al campo berbero per una deliziosa colazione casalinga. Consegna degli attestati di volo e rientro in hotel a Marrakech a metà mattinata."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Partenza", subtitle: "Pick-up in Hotel", desc: "Transfer privato di primo mattino dal vostro hotel a Marrakech." },
    { number: 2, name: "Oasi del Palmeto di Marrakech", day: "Attività", subtitle: "Volo sul Palmeto", desc: "Panorami aerei del palmeto con lo sfondo dell'Alto Atlante." },
    { number: 3, name: "Accampamento Berbero", day: "Colazione", subtitle: "Ospitalità e Tè alla Menta", desc: "Colazione berbera tradizionale sotto la tenda con tè caldo." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/hot-air-balloon-in-marrakech/images/thumbnail.jpg", cap: "Volo in Mongolfiera all'Alba a Marrakech", alt: "Mongolfiere che sorvolano la campagna di Marrakech e le montagne dell'Atlante all'alba" }
  ],
  faqs: []
};

saveTour('hot-air-balloon-marrakech', tour24_es, tour24_it);

// -------------------------------------------------------------
// Tour 25: horse-riding-morocco
// -------------------------------------------------------------
const tour25_es = {
  slug: "horse-riding-morocco",
  title: "Paseo a Caballo en Marrakech y el Palmeral | Sahara Star Tours",
  shortTitle: "Paseo a Caballo en Marrakech",
  description: "Monte nobles caballos árabes por los senderos del palmeral de Marrakech y el desierto. Apto para todos los niveles con guías ecuestres profesionales.",
  aboutHtml: "<strong>Escapadas Ecuestres en Marrakech</strong><br/><br/>Sumérjase en la belleza y la serenidad de los paisajes marroquíes a lomos de magníficos caballos árabes y bereberes. Una experiencia diseñada para conectar con la naturaleza y la nobleza de la equitación tradicional.<br/><br/>Tanto si es un jinete principiante como experimentado, nuestros guías profesionales adaptarán el ritmo por los senderos sombreados del palmeral, los llanos minerales y las aldeas tradicionales.<br/><br/>Disfrute de una pausa relajante con té marroquí a la menta y pastas tradicionales en un entorno auténtico antes de regresar a la ciudad.",
  duration: "Media Jornada / 3-4 Horas",
  startingFrom: "Marrakech",
  price: "Desde 65 $/persona",
  highlights: [
    "Paseos a caballo: Elija entre paseos tranquilos por el palmeral o recorridos al amanecer y atardecer entre las palmeras.",
    "Ruta cultural: Combine la equitación con el descubrimiento de aldeas locales y hospitalidad tradicional bereber.",
    "Aventura en la naturaleza: Recorra senderos arenosos y pistas de tierra con vistas panorámicas a la cordillera del Atlas.",
    "Atuendo tradicional y fotografías: Posibilidad de utilizar prendas tradicionales para inmortalizar su experiencia a caballo."
  ],
  inclusions: [
    "Recogida y regreso al hotel en vehículo con aire acondicionado",
    "Monturas de calidad, cascos y equipo de seguridad homologado",
    "Ruta guiada a caballo de 2 horas con instructor profesional",
    "Guía ecuestre profesional durante todo el recorrido"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para el instructor y chófer (opcionales)",
    "Comidas y bebidas adicionales no especificadas",
    "Seguro ecuestre deportivo especializado"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Paseo a Caballo en Marruecos",
      content: "Recogida en su hotel en Marrakech y traslado al centro ecuestre situado a las afueras de la ciudad. Presentación de los caballos y asignación según la experiencia de cada jinete, junto con una breve sesión informativa de seguridad. Inicio del paseo de 2 horas a través de senderos de palmeras, llanuras y caminos rurales con el Atlas en el horizonte. Parada para degustar té a la menta tradicional marroquí y descanso. Regreso a las caballerizas y traslado de vuelta a su hotel."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Salida", subtitle: "Recogida en Hotel", desc: "Traslado privado desde su alojamiento en Marrakech." },
    { number: 2, name: "Oasis del Palmeral de Marrakech", day: "Actividad", subtitle: "Pistas y Palmeras", desc: "Ruta a caballo por pistas entre palmeras con vistas al Atlas." },
    { number: 3, name: "Campamento Oasis Bereber", day: "Pausa Té", subtitle: "Hospitalidad y Té a la Menta", desc: "Pausa para reponer fuerzas con té tradicional marroquí." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/horse-riding-in-morocco/images/thumbnail.jpg", cap: "Paseo a Caballo en Marrakech y el Palmeral", alt: "Jinetes a caballo recorriendo los senderos del palmeral con palmeras de Marrakech" }
  ],
  faqs: []
};

const tour25_it = {
  slug: "horse-riding-morocco",
  title: "Passeggiata a Cavallo a Marrakech e nel Palmeto | Sahara Star Tours",
  shortTitle: "Passeggiata a Cavallo a Marrakech",
  description: "Cavalcatura su nobili cavalli arabi lungo i sentieri del palmeto di Marrakech e del deserto. Adatto a tutti i livelli con guide equestri professioniste.",
  aboutHtml: "<strong>Avventure Equestri a Marrakech</strong><br/><br/>Immergetevi nella tranquillità dei paesaggi marocchini in sella a splendidi cavalli arabi e berberi. Un'esperienza a contatto con la natura concepita per farvi scoprire l'arte dell'equitazione in Marocco.<br/><br/>Che siate cavalieri esperti o alle prime armi, le nostre guide certificate adatteranno il ritmo del percorso tra i viali del palmeto, le piste sterrate e i villaggi tradizionali.<br/><br/>Concluderete la cavalcata con una piacevole sosta a base di tè alla menta e dolci tradizionali prima del rientro a Marrakech.",
  duration: "Mezza Giornata / 3-4 Ore",
  startingFrom: "Marrakech",
  price: "Da 65 €/persona",
  highlights: [
    "Passeggiate a cavallo: Percorsi tranquilli nel palmeto o suggestive cavalcate al tramonto con vista sull'Atlante.",
    "Esperienza culturale: Combinate l'equitazione con la scoperta dell'ospitalità e della vita rurale locale.",
    "A contatto con la natura: Sentieri tra palme secolari e piste sabbiose lontane dal traffico cittadino.",
    "Abiti tradizionali e foto: Opportunità di indossare abiti tradizionali per scattare splendide fotografie a cavallo."
  ],
  inclusions: [
    "Pick-up e drop-off in hotel con veicolo climatizzato",
    "Selle di qualità, cap e attrezzatura di sicurezza omologata",
    "Passeggiata a cavallo guidata di 2 ore con istruttore esperto",
    "Guida equestre professionista per tutta la durata dell'attività"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per guida e autista (facoltative)",
    "Pasti o bevande supplementari",
    "Assicurazioni sportive specifiche facoltative"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Passeggiata a Cavallo in Marocco",
      content: "Pick-up dal vostro hotel a Marrakech e trasferimento alle scuderie alle porte della città. Assegnazione del cavallo in base al livello di esperienza e briefing di sicurezza con l'istruttore. Inizio dell'escursione a cavallo di 2 ore attraverso le piste sterrate del palmeto e della campagna circostante con vista sulle montagne dell'Atlante. Sosta per assaporare un rinfrescante tè alla menta berbero in una dimora tradizionale. Rientro alla scuderia e transfer di ritorno al vostro alloggio."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Partenza", subtitle: "Pick-up in Hotel", desc: "Transfer privato dal vostro alloggio a Marrakech." },
    { number: 2, name: "Oasi del Palmeto di Marrakech", day: "Attività", subtitle: "Piste nel Palmeto", desc: "Percorso a cavallo tra le palme e le montagne dell'Atlante." },
    { number: 3, name: "Accampamento Berbero", day: "Pausa Tè", subtitle: "Ospitalità e Tè alla Menta", desc: "Pausa rilassante con tè alla menta e dolci tradizionali." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/horse-riding-in-morocco/images/thumbnail.jpg", cap: "Passeggiata a Cavallo a Marrakech nel Palmeto", alt: "Cavalieri a cavallo che attraversano le piste del palmeto a Marrakech" }
  ],
  faqs: []
};

saveTour('horse-riding-morocco', tour25_es, tour25_it);

// -------------------------------------------------------------
// Tour 26: fantasia-chez-ali-marrakech
// -------------------------------------------------------------
const tour26_es = {
  slug: "fantasia-chez-ali-marrakech",
  title: "Cena Espectáculo Fantasia Chez Ali en Marrakech | Sahara Star Tours",
  shortTitle: "Cena Espectáculo Fantasia Chez Ali",
  description: "Viva una noche mágica de las Mil y Una Noches en Marrakech. Banquete tradicional marroquí, bailarines folclóricos, acróbatas y espectacular carrera de caballería.",
  aboutHtml: "Experiencia cultural marroquí nocturna.<br/><br/>Descubra el fascinante mundo de Fantasia Chez Ali, el evento festivo nocturno más célebre de Marrakech que ofrece una inmersión completa en el folclore, las leyendas y la gastronomía del reino.<br/><br/>En una inmensa arena tradicional al estilo de una fortaleza de las Mil y Una Noches, disfrutará de una suculenta cena bajo jaimas caidales mientras grupos folclóricos de todas las regiones de Marruecos interpretan cantos y danzas tradicionales.<br/><br/>El momento culminante de la noche es la mítica 'Fantasia' ecuestre: una vibrante demostración de destreza a caballo con jinetes bereberes a todo galope, acrobacias y salvas de pólvora al unísono, seguida de alfombra voladora y espectáculos de fuegos artificiales.<br/><br/>Al finalizar la velada, su chófer privado le llevará de regreso a su hotel o riad en Marrakech.",
  duration: "Media Jornada / 3-4 Horas",
  startingFrom: "Marrakech",
  price: "Desde 70 $/persona",
  highlights: [
    "Cena tradicional marroquí completa (harira, cordero mechoui, cuscús y pastilla de leche).",
    "Espectacular exhibición ecuestre de Fantasia con jinetes bereberes y acróbatas a caballo.",
    "Actuaciones en directo de música, cantos y danzas folclóricas de las diversas tribus de Marruecos."
  ],
  inclusions: [
    "Transporte de ida y vuelta en vehículo climatizado desde su hotel en Marrakech",
    "Generoso banquete tradicional marroquí servido en jaima caidal típica",
    "Espectáculo ecuestre completo de Fantasia con carreras y acrobacias",
    "Actuaciones de folclore tradicional en vivo y danza oriental"
  ],
  exclusions: [
    "Gastos personales y propinas voluntarias",
    "Bebidas alcohólicas o refrescos fuera del menú cerrado",
    "Fotografías con artistas o recuerdos personales",
    "Cualquier servicio no mencionado explícitamente"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Fantasia Chez Ali Marrakech",
      content: "Hacia las 19:30 o 20:00 h, su chófer le recogerá en su hotel de Marrakech para trasladarle al complejo Chez Ali en las afueras de la ciudad. A su llegada, será recibido por jinetes a caballo y músicos tradicionales. Se acomodará en una tienda caidal tradicional decorada con alfombras orientales para degustar una cena marroquí de varios platos (harira, mechoui asado tradicional, cuscús con verduras y postre). Durante la cena, grupos musicales de diferentes regiones desfilarán amenizando la velada. A continuación, pasará a la gran arena exterior para presenciar la carrera ecuestre de la Fantasia con saltos, piruetas y salvas ceremoniales de fusiles de pólvora. Regreso a su alojamiento hacia la medianoche."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Salida", subtitle: "Recogida en Hotel", desc: "Traslado privado desde su alojamiento en Marrakech." },
    { number: 2, name: "Arena Chez Ali", day: "Noche", subtitle: "Cena en Jaima Caidal", desc: "Festín tradicional y música folclórica en directo de diferentes regiones." },
    { number: 3, name: "Estadio de la Fantasia", day: "Espectáculo", subtitle: "Caballería y Acrobacias", desc: "Demostración ecuestre tradicional, carrera de pólvora y fuegos artificiales." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/fantasia-chez-ali-marrakech/images/thumbnail.jpg", cap: "Cena Espectáculo Fantasia Chez Ali en Marrakech", alt: "Jinetes tradicionales bereberes disparando al unísono en el espectáculo de la Fantasia Chez Ali" }
  ],
  faqs: []
};

const tour26_it = {
  slug: "fantasia-chez-ali-marrakech",
  title: "Cena Spettacolo Fantasia Chez Ali a Marrakech | Sahara Star Tours",
  shortTitle: "Cena Spettacolo Fantasia Chez Ali",
  description: "Vivete una magica serata da Mille e una Notte a Marrakech. Banchetto tradizionale marocchino, danze folkloristiche, acrobati ed emozionante carica a cavallo.",
  aboutHtml: "Esperienza culturale serale marocchina.<br/><br/>Entrate nel magico mondo di Fantasia Chez Ali, la più famosa serata di gala e folklore a Marrakech, che celebra la storia, le usanze e la cucina del Marocco in un'atmosfera fiabesca.<br/><br/>All'interno di una grande arena fortificata, gusterete una sontuosa cena sotto ampie tende kaidali tradizionali, allietati da musicisti e ballerini folkloristici provenienti da tutte le regioni del paese.<br/><br/>Il momento clou della serata è la leggendaria carica equestre della 'Fantasia': una dimostrazione spettacolare in cui abili cavalieri berberi galoppano a tutta velocità sparando salviette a salve all'unisono con i loro antichi fucili, tra acrobazie e giochi di luce.<br/><br/>Al termine della serata il vostro autista privato vi riaccompagnerà comodamente al vostro alloggio a Marrakech.",
  duration: "Mezza Giornata / 3-4 Ore",
  startingFrom: "Marrakech",
  price: "Da 70 €/persona",
  highlights: [
    "Cena tradizionale marocchina completa (harira, agnello mechoui, couscous e dessert pastilla).",
    "Spettacolo equestre della Fantasia con abili cavalieri berberi e acrobati in sella.",
    "Musica dal vivo, canti tribali e danze folkloristiche tradizionali di diverse tribù del Marocco."
  ],
  inclusions: [
    "Transfer andata e ritorno con veicolo climatizzato dal vostro alloggio a Marrakech",
    "Sontuosa cena tradizionale marocchina servita sotto tenda caidale",
    "Grande spettacolo equestre della Fantasia con cariche e acrobazie",
    "Esibizioni folkloristiche musicali dal vivo e danza del ventre"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Bevande alcoliche o extra non incluse nel menu",
    "Mance facoltative per il personale",
    "Servizi fotografici personalizzati"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Fantasia Chez Ali Marrakech",
      content: "Intorno alle 19:30 o 20:00, pick-up dal vostro alloggio a Marrakech e trasferimento al celebre complesso Chez Ali. Sarete accolti da una corte di cavalieri e gruppi musicali in abiti d'epoca. All'interno della suggestiva tenda kaidale vi verrà servito un banchetto con piatti tradizionali tra cui la tipica zuppa harira, agnello mechoui arrosto, couscous imperiale e frutta fresca, accompagnati da sfilate musicali tra i tavoli. A seguire, vi sposterete nell'arena all'aperto per assistere all'emozionante spettacolo equestre della Fantasia, con cariche di cavalieri, acrobati e fuochi d'artificio. Rientro in hotel a Marrakech intorno a mezzanotte."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Partenza", subtitle: "Pick-up in Hotel", desc: "Transfer privato serale dal vostro alloggio a Marrakech." },
    { number: 2, name: "Arena Chez Ali", day: "Serata", subtitle: "Cena in Tenda Kaidale", desc: "Banchetto tipico marocchino e gruppi folcloristici in costume." },
    { number: 3, name: "Stadio della Fantasia", day: "Spettacolo", subtitle: "Carica a Cavallo e Fuochi", desc: "Carica equestre dei cavalieri berberi, acrobazie e fuochi d'artificio." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/fantasia-chez-ali-marrakech/images/thumbnail.jpg", cap: "Cena Spettacolo Fantasia Chez Ali a Marrakech", alt: "Cavalieri berberi in sella ai loro destrieri durante la carica della Fantasia Chez Ali" }
  ],
  faqs: []
};

saveTour('fantasia-chez-ali-marrakech', tour26_es, tour26_it);

// -------------------------------------------------------------
// Tour 27: quad-biking-marrakech
// -------------------------------------------------------------
const tour27_es = {
  slug: "quad-biking-marrakech",
  title: "Aventura en Quads por el Desierto y Palmeral de Marrakech | Sahara Star",
  shortTitle: "Aventura en Quads en Marrakech",
  description: "Emocionante safari en quad de media jornada por las llanuras desérticas y senderos del palmeral de Marrakech. Equipamiento de seguridad y parada de té a la menta incluidos.",
  aboutHtml: "Aventura en quad en Marrakech.<br/><br/>Disfrute de una emocionante excursión de media jornada en quad explorando los senderos vírgenes del palmeral de Marrakech y las colinas desérticas circundantes.<br/><br/>Apta tanto para principiantes como para conductores experimentados, la ruta se adapta al nivel del grupo para garantizar la máxima seguridad y diversión. Los pilotos más aventureros disfrutarán de tramos técnicos y aceleraciones, mientras que quienes viajan en familia apreciarán un paseo relajado admirando los paisajes.<br/><br/>Equipados con quads modernos, cascos y gafas protectoras, seguirán a nuestro guía profesional a través de aldeas tradicionales bereberes, senderos de tierra y palmerales milenarios. Haremos una agradable parada en una casa rural bereber para saborear té a la menta antes de emprender el regreso.",
  duration: "Media Jornada / 3-4 Horas",
  startingFrom: "Marrakech",
  price: "Desde 60 $/persona",
  highlights: [
    "Explore los senderos ocultos del palmeral de Marrakech y sus colinas minerales.",
    "Apto tanto para debutantes como para pilotos experimentados con guía profesional.",
    "Ruta a través de pueblos tradicionales bereberes y pistas todoterreno.",
    "Parada para saborear té a la menta en una casa tradicional bereber."
  ],
  inclusions: [
    "Recogida y regreso al hotel en vehículo con aire acondicionado",
    "Quad moderno de alta gama y equipo de protección completo (casco, gafas y guantes)",
    "Ruta guiada en quad de 2 horas por el palmeral y pistas del desierto",
    "Pausa para degustar té a la menta en una aldea bereber tradicional"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para el guía y chófer (opcionales)",
    "Comidas y bebidas adicionales",
    "Fotografías o vídeos profesionales opcionales"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Ruta en Quad en Marrakech",
      content: "Recogida en su alojamiento en Marrakech y traslado a la base de quads en el Palmeral. Sesión informativa de seguridad y breve clase práctica para familiarizarse con el manejo del quad. Comienzo de la aventura de 2 horas a través de pistas de tierra, palmerales y llanuras áridas con vistas a las montañas. Parada de descanso en una casa tradicional bereber para compartir un té con menta y descubrir la hospitalidad local. Conclusión de la ruta y traslado de regreso a su hotel."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Salida", subtitle: "Recogida en Hotel", desc: "Traslado privado desde su alojamiento en Marrakech." },
    { number: 2, name: "Oasis del Palmeral de Marrakech", day: "Actividad", subtitle: "Pistas y Palmeras", desc: "Circuito en quad por senderos de tierra y oasis." },
    { number: 3, name: "Campamento Oasis Bereber", day: "Pausa Té", subtitle: "Hospitalidad y Té a la Menta", desc: "Té a la menta y descanso en una casa tradicional bereber." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/quad-biking-in-marrakech/images/thumbnail.jpeg", cap: "Aventura en Quads por el Desierto y Palmeral de Marrakech", alt: "Pilotos en quads recorriendo pistas de tierra en el desierto y palmeral de Marrakech" }
  ],
  faqs: []
};

const tour27_it = {
  slug: "quad-biking-marrakech",
  title: "Avventura in Quad nel Deserto e Palmeto di Marrakech | Sahara Star",
  shortTitle: "Avventura in Quad a Marrakech",
  description: "Entusiasmante safari in quad di mezza giornata tra le distese desertiche e i sentieri del palmeto di Marrakech. Attrezzatura di sicurezza e pausa tè alla menta incluse.",
  aboutHtml: "Avventura in Quad a Marrakech.<br/><br/>Godetevi un'emozionante escursione di mezza giornata in quad alla scoperta dei suggestivi sentieri del palmeto di Marrakech e dei paesaggi desertici che circondano la città.<br/><br/>Adatto sia ai principianti che ai guidatori più esperti, l'itinerario viene adattato per garantire il massimo divertimento nella totale sicurezza. I più esperti potranno godersi tratti panoramici e accelerazioni, mentre le famiglie potranno apprezzare una guida rilassata immersi nella natura.<br/><br/>Dotati di quad moderni, caschi e occhiali di protezione, seguirete la nostra guida esperta attraverso villaggi rurali berberi, colline sabbiose e distese di palme. Farete una piacevole sosta in una casa tipica per gustare un tè alla menta prima del rientro.",
  duration: "Mezza Giornata / 3-4 Ore",
  startingFrom: "Marrakech",
  price: "Da 60 €/persona",
  highlights: [
    "Esplorate i suggestivi sentieri del Palmeto di Marrakech e le colline rocciose.",
    "Adatto a tutti i livelli, dai principianti ai piloti esperti, con guida professionale.",
    "Percorso fuoristrada attraverso villaggi berberi e piste desertiche.",
    "Sosta per gustare il tradizionale tè alla menta in una casa berbera."
  ],
  inclusions: [
    "Pick-up e drop-off dal vostro hotel a Marrakech",
    "Quad moderno di alta qualità e attrezzatura completa (casco, occhiali, guanti)",
    "Tour guidato di 2 ore in quad tra palmeti e sentieri del deserto",
    "Pausa per il tè alla menta in un autentico villaggio berbero"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per guida e autista (facoltative)",
    "Pasti o bevande supplementari",
    "Servizi fotografici o video professionali facoltativi"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Safari in Quad a Marrakech",
      content: "Pick-up dal vostro alloggio a Marrakech e trasferimento alla base di partenza nel Palmeto. Briefing sulle regole di sicurezza e prova pratica per familiarizzare con il veicolo. Partenza per l'escursione di 2 ore lungo piste sterrate, palmeti e rilievi desertici con le vette dell'Atlante all'orizzonte. Sosta in un'abitazione rurale per gustare un ottimo tè alla menta marocchino e rilassarsi. Rientro alla base e transfer di ritorno al vostro alloggio."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Partenza", subtitle: "Pick-up in Hotel", desc: "Transfer privato dal vostro alloggio a Marrakech." },
    { number: 2, name: "Oasi del Palmeto di Marrakech", day: "Attività", subtitle: "Piste nel Palmeto", desc: "Percorso fuoristrada in quad tra palme e sterrati." },
    { number: 3, name: "Accampamento Berbero", day: "Pausa Tè", subtitle: "Ospitalità e Tè alla Menta", desc: "Pausa rigenerante con tè caldo e ospitalità berbera." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/quad-biking-in-marrakech/images/thumbnail.jpeg", cap: "Avventura in Quad nel Deserto e Palmeto di Marrakech", alt: "Gruppo di guidatori in quad su sentieri sterrati vicino al palmeto di Marrakech" }
  ],
  faqs: []
};

saveTour('quad-biking-marrakech', tour27_es, tour27_it);

// -------------------------------------------------------------
// Tour 28: raid-buggy-marrakech
// -------------------------------------------------------------
const tour28_es = {
  slug: "raid-buggy-marrakech",
  title: "Safari en Buggy por el Desierto y Palmeral de Marrakech | Sahara Star Tours",
  shortTitle: "Safari en Buggy en Marrakech",
  description: "Pilote potentes buggies todoterreno por los senderos del desierto de Marrakech, aldeas bereberes y oasis de palmeras. Aventura guiada con equipo de seguridad prémium.",
  aboutHtml: "Aventura en buggy de media jornada en Marrakech.<br/><br/>Disfrute de la emoción de pilotar un buggy de alta cilindrada por los espectaculares parajes naturales de Marrakech. Podrá elegir entre las ondulantes colinas del desierto de piedra de Agafay o los frondosos senderos del palmeral.<br/><br/>Sienta la adrenalina mientras sortea pistas de arena, cañadas secas y senderos rurales bajo el azul intenso del cielo marroquí y con la imponente cordillera del Atlas como telón de fondo.<br/><br/>El tour incluye equipamiento de seguridad completo, monitores profesionales y una agradable pausa para compartir un té tradicional con una familia bereber local en su hogar antes de regresar a la ciudad.",
  duration: "Media Jornada / 3-4 Horas",
  startingFrom: "Marrakech",
  price: "Desde 110 $/persona",
  highlights: [
    "Emocionante ruta en buggy todoterreno por el palmeral o el desierto de Agafay.",
    "Deguste té marroquí a la menta en una casa tradicional bereber.",
    "Pase por aldeas rurales y caminos de tierra fuera de las rutas habituales.",
    "Vistas panorámicas espectaculares de la cordillera del Alto Atlas."
  ],
  inclusions: [
    "Traslados de ida y vuelta al hotel en vehículo privado",
    "Buggy todoterreno prémium y equipamiento completo de seguridad homologado",
    "Guía profesional de rutas off-road y clase de iniciación técnica",
    "Refrescos y té tradicional a la menta en una casa bereber"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para su monitor y chófer (opcionales)",
    "Comidas y bebidas adicionales",
    "Seguro facultativo especial para daños propios"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Raid Buggy en Marrakech",
      content: "Recogida en su hotel en Marrakech y traslado al punto de inicio. Presentación de los buggies todoterreno, entrega de cascos y gafas, y detallada sesión informativa sobre la conducción segura del vehículo. Comienza una emocionante ruta guiada de dos horas explorando pistas de tierra y colinas pedregosas con magníficas vistas panorámicas. A mitad de recorrido, visita a un hogar bereber tradicional para disfrutar de un reconfortante té a la menta y conversar con los habitantes locales. Retorno a la base y traslado de vuelta a su hotel."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Salida", subtitle: "Recogida en Hotel", desc: "Traslado privado desde su alojamiento en Marrakech." },
    { number: 2, name: "Oasis del Palmeral de Marrakech", day: "Actividad", subtitle: "Pistas y Palmeras", desc: "Pistas todoterreno en buggy con las cumbres del Atlas al fondo." },
    { number: 3, name: "Campamento Oasis Bereber", day: "Pausa Té", subtitle: "Hospitalidad y Té a la Menta", desc: "Descanso en un hogar tradicional bereber con té a la menta." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/raid-buggy-in-marrakech/images/thumbnail.jpg", cap: "Safari en Buggy por el Desierto y Palmeral de Marrakech", alt: "Vehículo buggy todoterreno en pistas del desierto con palmeras y montañas al fondo" }
  ],
  faqs: []
};

const tour28_it = {
  slug: "raid-buggy-marrakech",
  title: "Safari in Buggy nel Deserto e Palmeto di Marrakech | Sahara Star Tours",
  shortTitle: "Safari in Buggy a Marrakech",
  description: "Guidate potenti buggy fuoristrada tra i sentieri del deserto di Marrakech, villaggi berberi e oasi di palme. Avventura guidata con attrezzatura di sicurezza di alto livello.",
  aboutHtml: "Avventura in buggy di mezza giornata a Marrakech.<br/><br/>Provate l'emozione di guidare un potente buggy fuoristrada attraverso i paesaggi più spettacolari nei dintorni di Marrakech. Potrete scegliere tra le colline del deserto di Agafay o le piste alberate del palmeto.<br/><br/>Sentite l'adrenalina scorrere mentre affrontate sterrati polverosi, avvallamenti e sentieri panoramici sotto il cielo limpido del Marocco con le montagne dell'Atlante sullo sfondo.<br/><br/>Il tour comprende attrezzatura di sicurezza completa, guide fuoristrada professioniste e una sosta rilassante per condividere un tradizionale tè alla menta con una famiglia locale prima del rientro a Marrakech.",
  duration: "Mezza Giornata / 3-4 Ore",
  startingFrom: "Marrakech",
  price: "Da 110 €/persona",
  highlights: [
    "Emozionante itinerario in buggy fuoristrada nel palmeto o nel deserto di Agafay.",
    "Degustazione di tè alla menta in una casa tradizionale berbera.",
    "Visita a villaggi rurali locali e piste panoramiche lontane dalla folla.",
    "Viste spettacolari sulle maestose cime dell'Alto Atlante."
  ],
  inclusions: [
    "Transfer privati andata e ritorno dal vostro alloggio",
    "Buggy 4x4 di alta qualità e attrezzatura di protezione omologata completa",
    "Guida off-road esperta e spiegazione tecnica iniziale",
    "Pausa rinfrescante con tè alla menta tradizionale insieme ai residenti"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per istruttore e autista (facoltative)",
    "Pasti o bevande supplementari",
    "Assicurazioni accessorie facoltative"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Raid Buggy a Marrakech",
      content: "Pick-up dal vostro hotel a Marrakech e trasferimento alla base dei buggy. Briefing iniziale sul funzionamento dei comandi e norme di sicurezza prima di allacciare le cinture. Partenza per un'emozionante escursione di 2 ore tra dossi sabbiosi, piste in terra battuta e paesaggi montani. Sosta a metà percorso presso un'abitazione berbera per assaporare il tè alla menta e scoprire la genuina accoglienza locale. Rientro alla base e transfer di ritorno al vostro riad."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Partenza", subtitle: "Pick-up in Hotel", desc: "Transfer privato dal vostro alloggio a Marrakech." },
    { number: 2, name: "Oasi del Palmeto di Marrakech", day: "Attività", subtitle: "Piste nel Palmeto", desc: "Percorsi sterrati in buggy con scorci sulle montagne dell'Atlante." },
    { number: 3, name: "Accampamento Berbero", day: "Pausa Tè", subtitle: "Ospitalità e Tè alla Menta", desc: "Sosta accogliente in una casa berbera tradizionale con tè caldo." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/raid-buggy-in-marrakech/images/thumbnail.jpg", cap: "Safari in Buggy nel Deserto e Palmeto di Marrakech", alt: "Buggy fuoristrada su sentieri desertici con sfondo montuoso a Marrakech" }
  ],
  faqs: []
};

saveTour('raid-buggy-marrakech', tour28_es, tour28_it);

// -------------------------------------------------------------
// Tour 29: camel-riding
// -------------------------------------------------------------
const tour29_es = {
  slug: "camel-riding",
  title: "Paseo en Camello por el Palmeral de Marrakech | Sahara Star Tours",
  shortTitle: "Paseo en Camello en el Palmeral de Marrakech",
  description: "Clásico paseo de 1 hora en camello por el pintoresco palmeral de Marrakech vestido con ropa tradicional de nómada. Concluye con té a la menta fresca en una jaima.",
  aboutHtml: "<strong>Paseo en Camello por el Palmeral de Marrakech</strong><br/><br/>Disfrutar de un apacible paseo en camello por el histórico Palmeral de Marrakech es una de las vivencias más icónicas de cualquier viaje a Marruecos.<br/><br/>Situado al norte de la ciudad, este inmenso oasis alberga más de 100.000 palmeras y ofrece un entorno tranquilo e idílico para una travesía en caravana de camellos de 1 a 1,5 horas.<br/><br/>Acompañado por camelleros locales y ataviado con la clásica chilaba y turbante nómada para protegerse del sol, contemplará la calma del oasis y el perfil del Alto Atlas. Concluirá la experiencia compartiendo un té tradicional a la menta en un hogar bereber.",
  duration: "Media Jornada / 3-4 Horas",
  startingFrom: "Marrakech",
  price: "Desde 35 $/persona",
  highlights: [
    "Paseo en camello por el icónico oasis del Palmeral de Marrakech.",
    "Experimente la auténtica hospitalidad marroquí compartiendo un té a la menta.",
    "Paisajes serenos con vistas panorámicas entre más de 100.000 palmeras.",
    "Actividad apta para todas las edades, perfecta para familias y parejas."
  ],
  inclusions: [
    "Traslados de ida y vuelta en vehículo con aire acondicionado desde su hotel",
    "Paseo guiado en camello de 1 a 2 horas por el Palmeral",
    "Indumentaria y pañuelo tradicional tuareg para protegerse y tomar fotos",
    "Pausa para degustar té a la menta marroquí en una vivienda bereber local"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para el camellero y chófer (opcionales)",
    "Comidas y bebidas adicionales no mencionadas en el programa",
    "Entradas a museos o monumentos"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Paseo en Camello en Marrakech",
      content: "Recogida matinal a las 9:00 h en su hotel o riad en Marrakech y traslado al frondoso Palmeral. Bienvenida y entrega de la indumentaria tradicional del desierto (chilaba y pañuelo cheich). Subida a lomos de los dromedarios para iniciar un agradable paseo guiado de hora y media a paso tranquilo entre palmeras datileras centenarias y senderos de arena. Parada en una casa rural bereber para saborear una reconfortante taza de té a la menta y pastas locales. Regreso a la base y traslado de vuelta a su hotel a primera hora de la tarde."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Salida", subtitle: "Recogida en Hotel", desc: "Traslado privado desde su alojamiento en Marrakech." },
    { number: 2, name: "Oasis del Palmeral de Marrakech", day: "Actividad", subtitle: "Pistas y Palmeras", desc: "Tranquila caravana de dromedarios a través del palmeral." },
    { number: 3, name: "Campamento Oasis Bereber", day: "Pausa Té", subtitle: "Hospitalidad y Té a la Menta", desc: "Pausa para descansar con té a la menta en una tienda o casa bereber." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/camel-riding/images/thumbnail.jpg", cap: "Paseo en Camello en el Palmeral de Marrakech", alt: "Caravana de dromedarios paseando entre altas palmeras en el palmeral de Marrakech" }
  ],
  faqs: []
};

const tour29_it = {
  slug: "camel-riding",
  title: "Passeggiata in Cammello nel Palmeto di Marrakech | Sahara Star Tours",
  shortTitle: "Passeggiata in Cammello nel Palmeto",
  description: "Classico giro di 1 ora in cammello nel suggestivo palmeto di Marrakech con abiti tradizionali nomadi. Conclusione con tè alla menta fresca sotto una tenda berbera.",
  aboutHtml: "<strong>Passeggiata in Cammello nel Palmeto di Marrakech</strong><br/><br/>Una passeggiata in cammello nell'iconico Palmeto di Marrakech è una delle esperienze più caratteristiche e indimenticabili durante un soggiorno in Marocco.<br/><br/>Situato a nord della medina, il palmeto è un'oasi che conta oltre 100.000 palme e offre una splendida cornice tranquilla per una carovana di dromedari di circa 1-1,5 ore.<br/><br/>Accompagnati da cammellieri locali e indossando la tradizionale djellaba con turbante berbero, vivrete la pace dell'oasi con vista sull'Alto Atlante prima di gustare un rinfrescante tè alla menta in una casa tradizionale.",
  duration: "Mezza Giornata / 3-4 Ore",
  startingFrom: "Marrakech",
  price: "Da 35 €/persona",
  highlights: [
    "Passeggiata a dorso di cammello nell'iconico Palmeto di Marrakech.",
    "Vivete l'autentica ospitalità marocchina gustando un fresco tè alla menta.",
    "Paesaggi rilassanti e scorci suggestivi tra oltre 100.000 palme.",
    "Adatto a tutte le età, perfetto per famiglie con bambini e coppie."
  ],
  inclusions: [
    "Transfer andata e ritorno climatizzato dal vostro hotel a Marrakech",
    "Passeggiata guidata in cammello da 1 a 2 ore nel Palmeto",
    "Tunica e turbante tuareg tradizionali per le foto e per proteggersi dal sole",
    "Pausa con tè alla menta marocchino presso una dimora berbera locale"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per i cammellieri e l'autista (facoltative)",
    "Pasti o bevande supplementari",
    "Biglietti d'ingresso a monumenti o attrazioni"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Passeggiata in Cammello a Marrakech",
      content: "Pick-up alle 9:00 dal vostro hotel o riad a Marrakech e transfer verso il verdeggiante Palmeto. Incontro con i cammellieri e vestizione con l'abito tradizionale (scialle e cheich). Inizio della tranquilla passeggiata guidata a dorso di dromedario di circa un'ora e mezza tra sentieri sabbiosi e palme centenarie. Sosta presso una casa berbera per assaporare un ottimo tè alla menta e conversare con la gente del posto. Rientro alla base e transfer di ritorno al vostro alloggio nel primo pomeriggio."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Partenza", subtitle: "Pick-up in Hotel", desc: "Transfer privato dal vostro alloggio a Marrakech." },
    { number: 2, name: "Oasi del Palmeto di Marrakech", day: "Attività", subtitle: "Piste nel Palmeto", desc: "Tranquilla carovana in dromedario tra le palme secolari." },
    { number: 3, name: "Accampamento Berbero", day: "Pausa Tè", subtitle: "Ospitalità e Tè alla Menta", desc: "Pausa accogliente con tè alla menta in dimora berbera." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/activities/camel-riding/images/thumbnail.jpg", cap: "Passeggiata in Cammello nel Palmeto di Marrakech", alt: "Carovana di dromedari che avanza tra le palme dell'oasi di Marrakech" }
  ],
  faqs: []
};

saveTour('camel-riding', tour29_es, tour29_it);
