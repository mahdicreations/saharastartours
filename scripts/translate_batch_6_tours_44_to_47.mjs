import fs from 'fs';
import path from 'path';

const ES_DIR = path.resolve('src/data/locales/es/tours');
const IT_DIR = path.resolve('src/data/locales/it/tours');

function saveTour(slug, esData, itData) {
  fs.writeFileSync(path.join(ES_DIR, `${slug}.json`), JSON.stringify(esData, null, 2), 'utf-8');
  fs.writeFileSync(path.join(IT_DIR, `${slug}.json`), JSON.stringify(itData, null, 2), 'utf-8');
  console.log(`Saved tour ${slug} in ES and IT!`);
}

// =============================================================
// Tour 44: 5-day-morocco-sahara-tour-from-casablanca
// =============================================================
const tour44_es = {
  slug: "5-day-morocco-sahara-tour-from-casablanca",
  title: "Tour de 5 Días por el Desierto del Sahara desde Casablanca | Sahara Star Tours",
  shortTitle: "Tour de 5 Días al Desierto desde Casablanca",
  description: "Circuito privado de 5 días desde Casablanca a Marrakech vía Fez, las dunas de Merzouga y las Gargantas del Todra. Descubra la mezquita Hassan II, campamento de lujo y Ait Ben Haddou.",
  aboutHtml: "<p>Este tour privado de 5 días desde Casablanca hasta Marrakech es una experiencia completa que enlaza el Marruecos imperial con la inmensidad del Sahara. Partiendo de la costa atlántica con la imponente Mezquita Hassan II, visitará las ruinas romanas de Volubilis, la histórica medina de Fez y cruzará el Medio Atlas hasta las doradas dunas de Erg Chebbi en Merzouga. Tras una noche mágica en campamento bereber de lujo, continuará por las Gargantas del Todra, el Valle del Dades y la legendaria Kasbah de Ait Ben Haddou antes de culminar en Marrakech.</p>",
  duration: "5 Días / 4 Noches",
  startingFrom: "Casablanca",
  price: "Desde $650/persona",
  highlights: [
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO",
    "Ruta panorámica a través de las montañas del Alto Atlas",
    "Medina de Fez y lugares culturales históricos",
    "Medina histórica y lugares emblemáticos de Marrakech"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local profesional de habla hispana",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riads/hoteles seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos aeroportuarios",
    "Entradas a monumentos o museos no especificados",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Llegada a Casablanca",
      "content": "En el primer día de su viaje, le daremos la bienvenida en el aeropuerto o le recogeremos en su alojamiento en Casablanca. Visitará la majestuosa Mezquita Hassan II, una obra maestra arquitectónica erigida sobre el Atlántico, con su alminar de 210 metros. A continuación explorará el animado paseo de la Corniche de Casablanca antes de trasladarse a su confortable hotel para cenar y descansar."
    },
    {
      "day": "Día 2",
      "title": "Casablanca – Volubilis – Mequinez – Fez",
      "content": "Tras el desayuno, partirá de Casablanca rumbo a las ruinas romanas de Volubilis (Patrimonio de la Humanidad por la UNESCO), donde podrá admirar mosaicos excepcionalmente conservados, columnas y arcos triunfales. Proseguirá hacia Mequinez, una de las cuatro ciudades imperiales, para contemplar la monumental puerta de Bab Mansour, la cuenca de Sahrij Souani y el Mausoleo de Moulay Ismail. Por la tarde llegará a Fez para cenar y pasar la noche en un riad tradicional en el corazón de la medina."
    },
    {
      "day": "Día 3",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Saldrá hacia el sur atravesando Imouzzer e Ifrane, conocida como 'la Suiza de Marruecos' por su arquitectura alpina y su clima fresco. Continuará hacia el Bosque de Cedros de Azrou para observar a los macacos de Berbería en libertad. Tras el almuerzo en Midelt, descenderá por las impresionantes gargantas y palmerales del Valle del Ziz y Errachidia. Por la tarde llegará a Merzouga, donde montará en camello para adentrarse en las altas dunas de Erg Chebbi, disfrutar del atardecer y llegar a su campamento de lujo con cena tradicional y tambores bereberes bajo las estrellas."
    },
    {
      "day": "Día 4",
      "title": "Desierto de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "content": "Recomendamos madrugar para presenciar el amanecer sobre las dunas doradas. Tras el desayuno en el campamento, regresará en camello o en 4×4 a Merzouga para reencontrarse con su chófer. Visitará Rissani, histórico centro mercantil del Tafilalet con su animado zoco tradicional. Continuará hacia Erfoud para conocer talleres de mármol fosilizado y seguirá por los palmerales de Touroug y Tinjdad hasta las colosales Gargantas del Todra, donde podrá pasear entre acantilados verticales de piedra caliza roja. Almuerzo local. Por la tarde llegará al Valle del Dades, deteniéndose ante las formaciones de los 'dedos de mono'. Cena y alojamiento en un riad en Dades."
    },
    {
      "day": "Día 5",
      "title": "Valle del Dades – Valle de las Rosas – Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      "content": "Tras el desayuno, continuará hacia Kalaat M'Gouna y el aromático Valle de las Rosas (con parada opcional en una cooperativa de cosméticos y agua de rosas artesanal). Atravesará el palmeral de Skoura hasta llegar a Ouarzazate, donde podrá visitar los célebres estudios de cine. Proseguirá hacia la extraordinaria Kasbah de Ait Ben Haddou, pueblo fortificado de adobe declarado Patrimonio de la Humanidad por la UNESCO. Por la tarde cruzará las cumbres del Alto Atlas a través del puerto de Tizi N'Tichka (2.260 m) con paradas panorámicas, llegando a Marrakech donde finalizará el circuito con traslado a su riad o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Llegada a Casablanca",
      "day": "Día 1",
      "subtitle": "Llegada a Casablanca – Visita a Mezquita Hassan II",
      "desc": "Bienvenida en Casablanca, visita panorámica de la Mezquita Hassan II y descanso en hotel."
    },
    {
      "number": 2,
      "name": "Casablanca a Fez",
      "day": "Día 2",
      "subtitle": "Casablanca – Volubilis – Mequinez – Fez",
      "desc": "Visita a las ruinas romanas de Volubilis, Bab Mansour en Mequinez y llegada a Fez."
    },
    {
      "number": 3,
      "name": "Fez a Merzouga",
      "day": "Día 3",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga",
      "desc": "Viaje a través del Medio Atlas y Valle del Ziz hacia el campamento de lujo de Erg Chebbi."
    },
    {
      "number": 4,
      "name": "Merzouga al Dades",
      "day": "Día 4",
      "subtitle": "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "desc": "Amanecer en las dunas, zoco de Rissani, paseo por las Gargantas del Todra y noche en Dades."
    },
    {
      "number": 5,
      "name": "Valle del Dades a Marrakech",
      "day": "Día 5",
      "subtitle": "Dades – Valle de las Rosas – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
      "desc": "Visita a la Kasbah de Ait Ben Haddou y cruce panorámico del Alto Atlas hasta Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_1.webp",
      "cap": "Mezquita Hassan II",
      "alt": "Alminar de la mezquita Hassan II elevándose sobre la costa atlántica en Casablanca"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_10.webp",
      "cap": "Atardecer en Merzouga",
      "alt": "Silueta al atardecer de jinetes de camellos sobre las dunas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_2.webp",
      "cap": "Ruinas de Volubilis",
      "alt": "Arco triunfal romano y calle empedrada en el yacimiento arqueológico de Volubilis"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_3.webp",
      "cap": "Bab el-Mansour",
      "alt": "Puerta histórica de Bab el-Mansour con arcos labrados moriscos en Mequinez"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_4.webp",
      "cap": "Curtiduría Chouara",
      "alt": "Curtidores de cuero en la curtiduría de Chouara en el casco antiguo de Fez"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_5.webp",
      "cap": "Valle del Ziz",
      "alt": "Exuberante oasis de palmeras datileras que contrasta con los acantilados rojos del Valle del Ziz"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_6.webp",
      "cap": "Campamento de lujo",
      "alt": "Tiendas de glamping en un campamento de lujo en las dunas de Merzouga"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_7.webp",
      "cap": "Gargantas del Todra",
      "alt": "Ecarpados acantilados del cañón de las Gargantas del Todra en el Alto Atlas"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_8.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar fortificado de tierra de Ait Ben Haddou visto desde el otro lado del río"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, conductor y programa están reservados en exclusiva para su grupo, con horarios y paradas flexibles."
    },
    {
      "question": "¿Cuánto dura el paseo en camello y qué alternativas existen?",
      "answer": "El paseo en camello suele durar entre 40 minutos y 1,5 horas. Como alternativa, se puede organizar el traslado directo en vehículo 4×4 sin coste adicional."
    },
    {
      "question": "¿La tienda del campamento en el desierto es privada?",
      "answer": "Sí, el campamento en el desierto cuenta con tiendas de campaña privadas de lujo con baño incorporado, agua caliente, camas de verdad y electricidad."
    },
    {
      "question": "¿Qué tipo de vehículo se utiliza?",
      "answer": "El viaje se realiza en un cómodo vehículo privado 4×4 o monovolumen con aire acondicionado. Para grupos más numerosos disponemos de minibuses adaptados."
    },
    {
      "question": "¿Se pueden atender requerimientos dietéticos particulares?",
      "answer": "Sí. Infórmenos sobre sus preferencias o restricciones dietéticas al reservar para que los riads, hoteles y el campamento preparen comidas adecuadas (vegetariano, vegano, sin gluten, etc.)."
    },
    {
      "question": "¿Es este itinerario adecuado para todas las edades?",
      "answer": "Sí, es perfectamente adecuado para todas las edades gracias al ritmo equilibrado de las etapas y a las paradas frecuentes para descansar."
    },
    {
      "question": "¿Cuál es la mejor época del año para realizar este tour?",
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados muy recomendables para combinar costa, ciudades imperiales, montaña y desierto."
    },
    {
      "question": "¿Cómo puedo reservar este circuito?",
      "answer": "Envíenos su consulta indicando fechas deseadas, número de viajeros, categoría de alojamiento preferida y punto de recogida. El equipo de Sahara Star Tours confirmará disponibilidad y los detalles finales."
    }
  ]
};

const tour44_it = {
  slug: "5-day-morocco-sahara-tour-from-casablanca",
  title: "Tour di 5 Giorni nel Deserto del Sahara da Casablanca | Sahara Star Tours",
  shortTitle: "Tour di 5 Giorni nel Deserto da Casablanca",
  description: "Circuito privato di 5 giorni da Casablanca a Marrakech via Fes, le dune di Merzouga e le Gole del Todra. Ammira la Moschea Hassan II, l'Erg Chebbi e Ait Ben Haddou.",
  aboutHtml: "<p>Questo tour privato di 5 giorni da Casablanca a Marrakech unisce magistralmente le capitali imperiali e le meraviglie naturali del Sahara marocchino. Dalla scenografica Moschea Hassan II sulla costa oceanica, visiterai i mosaici romani di Volubilis, la medina millenaria di Fes e attraverserai il Medio Atlante fino alle dorate dune dell'Erg Chebbi a Merzouga. Dopo una notte incantata in campo tendato di lusso, esplorerai le Gole del Todra, la Valle del Dades e il leggendario ksar di Ait Ben Haddou prima di giungere a Marrakech.</p>",
  duration: "5 Giorni / 4 Notti",
  startingFrom: "Casablanca",
  price: "Da $650/persona",
  highlights: [
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Kasbah di Ait Ben Haddou, sito UNESCO leggendario",
    "Itinerario panoramico attraverso le montagne dell'Alto Atlante",
    "Medina di Fes e tesori culturali storici",
    "Medina storica e punti di riferimento iconici di Marrakech"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale professionista per l'intero viaggio",
    "Carburante, pedaggi e spese operative del veicolo",
    "Sistemazione in riad/hotel selezionati e campo tendato di lusso",
    "Colazioni e cene incluse come da itinerario",
    "Trekking in dromedario tra le dune con assistenza completa"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei e servizi aeroportuali non specificati",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e spese personali"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Arrivo a Casablanca",
      "content": "Nel primo giorno di viaggio ti accoglieremo al tuo arrivo in aeroporto o presso il tuo alloggio a Casablanca, capitale economica del Marocco. Visiterai la maestosa Moschea Hassan II, capolavoro dell'architettura islamica con il suo minareto alto 210 metri affacciato sull'Oceano Atlantico. Farai poi una passeggiata lungo la celebre Corniche prima di raggiungere il tuo hotel per la cena e il pernottamento."
    },
    {
      "day": "Giorno 2",
      "title": "Casablanca – Volubilis – Meknes – Fes",
      "content": "Dopo la prima colazione partirai da Casablanca per raggiungere il sito archeologico romano di Volubilis (Patrimonio UNESCO), ammirando mosaici pavimentali straordinariamente conservati, colonne e archi trionfali. Proseguirai per la città imperiale di Meknes per contemplare la celebre porta di Bab Mansour, il bacino di Sahrij Souani e il Mausoleo di Moulay Ismail. Nel tardo pomeriggio arriverai a Fes per cena e pernottamento in un incantevole riad tradizionale nella medina."
    },
    {
      "day": "Giorno 3",
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      "content": "Partenza verso sud attraversando Imouzzer e Ifrane, la 'Svizzera del Marocco', con le sue graziose architetture montane. Sosterai nella Foresta di Cedri di Azrou per osservare le scimmie barbaresche. Dopo il pranzo a Midelt, scenderai lungo le suggestive gole e gli infiniti palmeti della Valle dello Ziz. Nel pomeriggio raggiungerai le spettacolari dune dorate dell'Erg Chebbi a Merzouga: salirai a dorso di dromedario per assistere al tramonto sul deserto e raggiungere l'accampamento di lusso con cena tipica berbera e canti attorno al falò sotto le stelle."
    },
    {
      "day": "Giorno 4",
      "title": "Deserto di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "content": "Sveglia all'alba per contemplare lo straordinario spettacolo del sorgere del sole sulle dune. Dopo la colazione, rientro in dromedario o in 4×4 a Merzouga per ritrovare l'autista. Visiterai Rissani, storico centro carovaniero del Tafilalet, con il suo vivace mercato tradizionale. Proseguirai per Erfoud alla scoperta dei laboratori di marmo fossile e attraverserai i palmeti di Touroug e Tinjdad fino alle impressionanti Gole del Todra, passeggiando tra gigantesche falesie rocciose verticali. Pranzo locale e proseguimento verso la Valle del Dades, ammirando le singolari rocce delle 'dita di scimmia'. Cena e pernottamento in riad nel Dades."
    },
    {
      "day": "Giorno 5",
      "title": "Valle del Dades – Valle delle Rose – Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlante – Marrakech",
      "content": "Dopo la prima colazione viaggerai verso Kalaat M'Gouna nella splendida Valle delle Rose (con sosta facoltativa in una cooperativa di cosmetici e acqua di rose). Proseguirai attraverso il palmeto di Skoura fino a Ouarzazate per una visita agli studi cinematografici. Visiterai quindi la celebre Kasbah di Ait Ben Haddou, villaggio fortificato patrimonio UNESCO celebre per capolavori come Il Gladiatore e Il Trono di Spade. Nel pomeriggio risalirai il passo del Tizi N'Tichka (2.260 m) con spettacolari viste panoramiche sull'Alto Atlante, giungendo a Marrakech per il rientro al tuo alloggio o all'aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Arrivo a Casablanca",
      "day": "Giorno 1",
      "subtitle": "Arrivo a Casablanca – Visita Moschea Hassan II",
      "desc": "Accoglienza a Casablanca, visita alla Moschea Hassan II e relax in hotel."
    },
    {
      "number": 2,
      "name": "Casablanca a Fes",
      "day": "Giorno 2",
      "subtitle": "Casablanca – Volubilis – Meknes – Fes",
      "desc": "Visita di Volubilis, Bab Mansour a Meknes e arrivo a Fes."
    },
    {
      "number": 3,
      "name": "Fes a Merzouga",
      "day": "Giorno 3",
      "subtitle": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Merzouga",
      "desc": "Passaggio attraverso il Medio Atlante verso il campo tendato di lusso a Merzouga."
    },
    {
      "number": 4,
      "name": "Merzouga al Dades",
      "day": "Giorno 4",
      "subtitle": "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "desc": "Alba sulle dune, souk di Rissani, passeggiata nelle Gole del Todra e notte nel Dades."
    },
    {
      "number": 5,
      "name": "Valle del Dades a Marrakech",
      "day": "Giorno 5",
      "subtitle": "Dades – Valle delle Rose – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
      "desc": "Visita di Ait Ben Haddou e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_1.webp",
      "cap": "Moschea Hassan II",
      "alt": "Minareto della Moschea Hassan II che si innalza sulla costa atlantica a Casablanca"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_10.webp",
      "cap": "Tramonto a Merzouga",
      "alt": "Sagoma al tramonto di viaggiatori in dromedario sulle dune dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_2.webp",
      "cap": "Rovine di Volubilis",
      "alt": "Arco trionfale romano e strada lastricata in pietra presso il sito di Volubilis"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_3.webp",
      "cap": "Bab el-Mansour",
      "alt": "Storica porta di Bab el-Mansour con archi moreschi intagliati a Meknes"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_4.webp",
      "cap": "Conceria Chouara",
      "alt": "Conciatori di pellami al lavoro presso la conceria Chouara nel quartiere antico di Fes"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_5.webp",
      "cap": "Valle dello Ziz",
      "alt": "Verdeggiante oasi di palme da dattero a contrasto con le falesie rosse nella Valle dello Ziz"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_6.webp",
      "cap": "Campo tendato di lusso",
      "alt": "Tende glamping in un accampamento di lusso nel deserto tra le dune di Merzouga"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_7.webp",
      "cap": "Gole del Todra",
      "alt": "Spettacolari falesie a picco nelle Gole del Todra tra le montagne dell'Alto Atlante"
    },
    {
      "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_8.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar fortificato in terra cruda di Ait Ben Haddou visto dal fiume"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, autista ed escursioni sono a vostra disposizione esclusiva, con la possibilità di concordare pause e soste lungo il tragitto."
    },
    {
      "question": "Quanto dura il trekking in dromedario e ci sono alternative?",
      "answer": "Il percorso dura circa 40-90 minuti. Se preferisci non cavalcare, è possibile organizzare il trasferimento diretto al campo tendato in fuoristrada 4×4 senza alcun costo extra."
    },
    {
      "question": "La tenda nell'accampamento nel deserto è privata?",
      "answer": "Sì, l'accampamento di lusso dispone di ampie tende private con veri letti, bagno interno privato con wc e doccia calda."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Utilizziamo veicoli fuoristrada 4×4 o moderni minivan privati con aria condizionata e capiente bagagliaio per viaggiare in assoluto comfort."
    },
    {
      "question": "È possibile soddisfare esigenze alimentari particolari?",
      "answer": "Certamente: piatti vegetariani, vegani o senza glutine possono essere preparati senza problemi segnalandolo al momento della prenotazione."
    },
    {
      "question": "Questo tour è indicato per ogni fascia d'età?",
      "answer": "Sì, è un tour perfetto per famiglie con bambini, coppie e viaggiatori maturi grazie a un ritmo di viaggio ben dosato e soste regolari."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno offrono un clima meraviglioso per visitare l'Atlantico, le città storiche, i rilievi montani e il deserto del Sahara."
    },
    {
      "question": "Come si effettua la prenotazione?",
      "answer": "Inviaci una richiesta con date, numero di partecipanti e preferenze. Il team di Sahara Star Tours ti fornirà tutti i dettagli per finalizzare l'itinerario."
    }
  ]
};

// =============================================================
// Tour 45: 5-days-in-northern-morocco-from-tangier
// =============================================================
const tour45_es = {
  slug: "5-days-in-northern-morocco-from-tangier",
  title: "Tour de 5 Días por el Norte de Marruecos desde Tánger | Sahara Star Tours",
  shortTitle: "Tour de 5 Días por el Norte de Marruecos",
  description: "Circuito privado de 5 días desde Tánger hasta Casablanca visitando Chefchaouen, Volubilis, Mequinez, Fez y Rabat. Explore la ciudad azul y las capitales imperiales.",
  aboutHtml: "<p>Este tour privado de 5 días por el norte de Marruecos es un itinerario cultural inolvidable que comienza en la cosmopolita Tánger, cruza los paisajes del Rif hacia la pintoresca 'ciudad azul' de Chefchaouen, explora las ruinas romanas de Volubilis y la histórica Mequinez, se sumerge en el corazón espiritual de Fez con guía local y visita los monumentos de Rabat antes de concluir frente al océano en Casablanca.</p>",
  duration: "5 Días / 4 Noches",
  startingFrom: "Tánger",
  price: "Desde $650/persona",
  highlights: [
    "Chefchaouen, la ciudad azul en las montañas del Rif",
    "Medina de Fez y lugares culturales históricos",
    "Tánger, la puerta cosmopolita de África",
    "Volubilis y sus mosaicos romanos de la UNESCO",
    "Mequinez y la monumental Bab Mansour",
    "Rabat, la capital del reino y la Kasbah de los Udayas"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local experimentado y traslados privados",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riads/hoteles seleccionados según el itinerario",
    "Desayunos y cenas incluidas según el itinerario"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos portuarios/aeroportuarios no especificados",
    "Entradas a monumentos o visitas opcionales",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Llegada a Tánger – Chefchaouen",
      "content": "Comenzará su viaje en Tánger con la recogida en su alojamiento, en el aeropuerto o en el puerto. Conocida como 'la novia del norte', explorará los puntos emblemáticos de Tánger: las Cuevas de Hércules y Cabo Espartel, donde se unen las aguas del Atlántico y el Mediterráneo. A continuación viajará hacia el este cruzando los paisajes de las montañas del Rif hasta llegar a la encantadora Chefchaouen. Alojamiento y cena en un riad tradicional."
    },
    {
      "day": "Día 2",
      "title": "Visita de Chefchaouen, la perla azul",
      "content": "Tras el desayuno, disfrutará de un día completo descubriendo Chefchaouen, la famosa ciudad azul marroquí. Paseará a su propio ritmo por sus laberínticas callejuelas encaladas en infinitas tonalidades de añil y cobalto, fotografiando puertas rústicas de madera y macetas coloridas. Visitará la plaza Outa el-Hammam, la histórica Kasbah de adobe y el manantial de Ras el-Maa, pudiendo ascender a la Mezquita Española para admirar una panorámica inolvidable al atardecer."
    },
    {
      "day": "Día 3",
      "title": "Chefchaouen – Ruinas Romanas de Volubilis – Mequinez – Fez",
      "content": "Tras el desayuno viajará hacia las ruinas romanas de Volubilis, declaradas Patrimonio de la Humanidad por la UNESCO, donde admirará asombrosos mosaicos, basílicas y columnas. Continuará hacia la vecina Mequinez para admirar la monumental puerta de Bab Mansour, los antiguos graneros reales y el mausoleo de Moulay Ismail. Por la tarde llegará a Fez, la capital cultural de Marruecos, para cenar y descansar en su riad."
    },
    {
      "day": "Día 4",
      "title": "Visita guiada de Fez con guía local",
      "content": "Día dedicado a descubrir la milenaria medina de Fez el-Bali con un guía oficial local. Comenzará con una visita panorámica al Palacio Real y sus puertas doradas, el barrio judío (Mellah) y el mirador del Borj Sud con vistas impresionantes. A continuación se adentrará a pie en el laberinto peatonal de la medina de la UNESCO: visitará la Madrasa Al Attarine, la Universidad Al Quaraouiyine (la más antigua en funcionamiento del mundo), fuentes ornamentadas y las famosas curtidurías de Chouara. Tarde libre para relajarse en el riad."
    },
    {
      "day": "Día 5",
      "title": "Fez – Rabat – Casablanca",
      "content": "En la última jornada viajará hacia Rabat, capital política de Marruecos, donde visitará la Torre Hassan, el Mausoleo de Mohammed V y la pintoresca Kasbah de los Udayas con vistas al océano. Tras tiempo libre para almorzar, continuará hacia Casablanca para admirar el exterior de la monumental Mezquita Hassan II. El circuito finalizará con el traslado al aeropuerto o a su alojamiento en Casablanca."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Llegada a Tánger",
      "day": "Día 1",
      "subtitle": "Tánger – Cuevas de Hércules – Chefchaouen",
      "desc": "Recogida en Tánger, visita a Cabo Espartel y traslado panorámico a Chefchaouen."
    },
    {
      "number": 2,
      "name": "Chefchaouen la ciudad azul",
      "day": "Día 2",
      "subtitle": "Exploración de la medina azul de Chefchaouen",
      "desc": "Día completo descubriendo las callejuelas azules, la Kasbah y miradores de Chefchaouen."
    },
    {
      "number": 3,
      "name": "Chefchaouen a Fez",
      "day": "Día 3",
      "subtitle": "Chefchaouen – Volubilis – Mequinez – Fez",
      "desc": "Visita a las ruinas romanas de Volubilis y la imperial Mequinez con llegada a Fez."
    },
    {
      "number": 4,
      "name": "Visita de Fez",
      "day": "Día 4",
      "subtitle": "Visita guiada de la medina histórica de Fez",
      "desc": "Recorrido cultural por el Palacio Real, Mellah, madrasas y curtidurías de Fez."
    },
    {
      "number": 5,
      "name": "Fez a Casablanca",
      "day": "Día 5",
      "subtitle": "Fez – Rabat – Casablanca",
      "desc": "Monumentos de Rabat, Mezquita Hassan II en Casablanca y despedida del tour."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_1.webp",
      "cap": "Cuevas de Hércules",
      "alt": "Ventana marítima de las Cuevas de Hércules tallada en el acantilado calizo en Tánger"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_10.webp",
      "cap": "Torre Hassan",
      "alt": "Explanada de la Torre Hassan y el Mausoleo de Mohammed V en Rabat"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_2.webp",
      "cap": "Cabo Espartel",
      "alt": "Promontorio de Cabo Espartel donde el Océano Atlántico se encuentra con el Mediterráneo"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_3.webp",
      "cap": "Callejones de Chefchaouen",
      "alt": "Sinuosa escalera azul bordeada de macetas con flores en Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_4.webp",
      "cap": "Puertas de Chefchaouen",
      "alt": "Calles de la medina pintadas de azul y rústicas puertas de madera en Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_5.webp",
      "cap": "Mosaicos de Volubilis",
      "alt": "Suelos de mosaico romanos antiguos conservados entre las ruinas de Volubilis"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_6.webp",
      "cap": "Bab Mansour",
      "alt": "Histórica puerta imperial de Bab Mansour en el casco antiguo de Mequinez"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_7.webp",
      "cap": "Mirador de Fez",
      "alt": "Vista panorámica de los tejados de la antigua medina amurallada de Fez el-Bali"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_8.webp",
      "cap": "Mezquita Al Quaraouiyine",
      "alt": "Arquitectura de la mezquita y biblioteca de Al Quaraouiyine en la Fez medieval"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_9.webp",
      "cap": "Kasbah de los Udayas",
      "alt": "Muros de piedra de la Kasbah de los Udayas y jardines andalusíes en Rabat"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/hero_2.webp",
      "cap": "Panorámica de Chefchaouen",
      "alt": "Vista panorámica de la pintoresca ciudad azul de Chefchaouen"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, conductor e itinerario están reservados exclusivamente para usted y sus acompañantes."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "La recogida se realiza en su alojamiento, puerto o aeropuerto de Tánger y el circuito concluye en Casablanca con traslado a su hotel o al aeropuerto Mohammed V."
    },
    {
      "question": "¿Qué tipo de vehículo se utiliza?",
      "answer": "Viajará a bordo de un moderno vehículo 4×4 o monovolumen con aire acondicionado, asientos cómodos y amplio maletero para equipajes."
    },
    {
      "question": "¿Se pueden preparar opciones para dietas especiales?",
      "answer": "Sí, podemos organizar opciones vegetarianas, veganas o menús sin gluten notificándolo al confirmar su reserva."
    },
    {
      "question": "¿Es un circuito adecuado para todas las edades?",
      "answer": "Sí, es idóneo para familias con niños y personas mayores. Las etapas están bien equilibradas con frecuentes descansos."
    },
    {
      "question": "¿Cuál es la mejor temporada para realizar este viaje?",
      "answer": "La primavera y el otoño brindan temperaturas suaves ideales para recorrer el norte, las montañas del Rif y las ciudades imperiales."
    },
    {
      "question": "¿Cómo puedo realizar la reserva del tour?",
      "answer": "Envíenos un mensaje con sus fechas deseadas, número de viajeros y preferencias. Nuestro equipo le enviará la confirmación y propuesta detallada."
    }
  ]
};

const tour45_it = {
  slug: "5-days-in-northern-morocco-from-tangier",
  title: "Tour di 5 Giorni nel Nord del Marocco da Tangeri | Sahara Star Tours",
  shortTitle: "Tour di 5 Giorni nel Nord del Marocco",
  description: "Circuito privato di 5 giorni da Tangeri a Casablanca alla scoperta di Chefchaouen, Volubilis, Meknes, Fes e Rabat. Esplora la città blu e le capitali storiche.",
  aboutHtml: "<p>Questo tour privato di 5 giorni nel nord del Marocco è un magnifico itinerario culturale che parte dalla leggendaria Tangeri, si inerpica tra i rilievi del Rif verso i vicoli celesti di Chefchaouen, visita il sito archeologico di Volubilis e la città imperiale di Meknes, svela i segreti millenari di Fes con una guida locale e attraversa la capitale Rabat prima di giungere a Casablanca.</p>",
  duration: "5 Giorni / 4 Notti",
  startingFrom: "Tangeri",
  price: "Da $650/persona",
  highlights: [
    "Chefchaouen, la città blu tra le montagne del Rif",
    "Medina di Fes e tesori culturali storici",
    "Tangeri, la porta cosmopolita dell'Africa",
    "Volubilis e i suoi mosaici romani patrimonio UNESCO",
    "Meknes e la monumentale porta Bab Mansour",
    "Rabat, la capitale del regno e la Kasbah degli Oudaia"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale esperto e trasferimenti privati",
    "Carburante, pedaggi e spese operative del veicolo",
    "Sistemazione in riad/hotel selezionati secondo l'itinerario",
    "Colazioni e cene incluse come da programma"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei e trasferimenti portuali/aeroportuali non specificati",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e gratifiche"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Arrivo a Tangeri – Chefchaouen",
      "content": "Il tuo tour nel nord del Marocco inizia con il prelievo al porto, all'aeroporto o al tuo alloggio a Tangeri. Conosciuta come 'la sposa del nord', visiterai i luoghi più suggestivi: le mitiche Grotte d'Ercole e Capo Spartel, dove le acque dell'Oceano Atlantico incontrano quelle del Mar Mediterraneo. Proseguirai quindi verso est attraverso le montagne del Rif fino alla meravigliosa Chefchaouen. Sistemazione e cena in un tipico riad."
    },
    {
      "day": "Giorno 2",
      "title": "Visita di Chefchaouen, la città blu",
      "content": "Dopo la prima colazione avrai a disposizione l'intera giornata per esplorare Chefchaouen. Passeggerai tra le stradine dipinte in mille sfumature di blu e azzurro, scoprendo porte intagliate e scorci fotografici incantevoli. Visiterai piazza Outa el-Hammam, la kasbah in mattoni di terra cruda e la sorgente di Ras el-Maa, con la possibilità di salire alla Moschea Spagnola per ammirare un tramonto mozzafiato sulla vallata."
    },
    {
      "day": "Giorno 3",
      "title": "Chefchaouen – Rovine Romane di Volubilis – Meknes – Fes",
      "content": "Dopo la prima colazione partirai verso il celebre sito romano di Volubilis (Patrimonio UNESCO), ammirando mosaici raffinati, basiliche e archi di trionfo. Proseguirai per la vicina città imperiale di Meknes per ammirare la maestosa porta Bab Mansour, i granai reali e il mausoleo di Moulay Ismail. Nel tardo pomeriggio giungerai a Fes per cena e pernottamento in riad."
    },
    {
      "day": "Giorno 4",
      "title": "Visita guidata di Fes con guida locale",
      "content": "Intera giornata dedicata alla scoperta dell'antica medina di Fes el-Bali con una guida ufficiale locale. Inizierai con il Palazzo Reale e le sue porte in bronzo dorato, il quartiere ebraico del Mellah e la vista panoramica dal Borj Sud. Ti addentrerai poi a piedi nel cuore medievale della città patrimonio UNESCO: ammirerai la Madrasa Al Attarine, l'Università Al Quaraouiyine (la più antica università attiva al mondo), antiche fontane e le celebri concerie di Chouara. Pomeriggio di relax in riad."
    },
    {
      "day": "Giorno 5",
      "title": "Fes – Rabat – Casablanca",
      "content": "Nell'ultima giornata viaggerai verso Rabat, capitale amministrativa del Marocco. Ammirerai la Torre Hassan, il Mausoleo di Mohammed V e la Kasbah degli Oudaia affacciata sull'oceano. Dopo il pranzo proseguirai per Casablanca per ammirare l'esterno della monumentale Moschea Hassan II. Il viaggio si concluderà con il trasferimento in aeroporto o al tuo alloggio a Casablanca."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Arrivo a Tangeri",
      "day": "Giorno 1",
      "subtitle": "Tangeri – Grotte d'Ercole – Chefchaouen",
      "desc": "Pick-up a Tangeri, visita a Capo Spartel e trasferimento panoramico a Chefchaouen."
    },
    {
      "number": 2,
      "name": "Chefchaouen la città blu",
      "day": "Giorno 2",
      "subtitle": "Esplorazione della medina blu di Chefchaouen",
      "desc": "Intera giornata tra vicoli dipinti d'azzurro, Kasbah e scorci suggestivi di Chefchaouen."
    },
    {
      "number": 3,
      "name": "Chefchaouen a Fes",
      "day": "Giorno 3",
      "subtitle": "Chefchaouen – Volubilis – Meknes – Fes",
      "desc": "Visita delle rovine romane di Volubilis e dell'imperiale Meknes verso Fes."
    },
    {
      "number": 4,
      "name": "Visita di Fes",
      "day": "Giorno 4",
      "subtitle": "Tour guidato della medina storica di Fes",
      "desc": "Percorso culturale tra Palazzo Reale, Mellah, madrasse storiche e concerie a Fes."
    },
    {
      "number": 5,
      "name": "Fes a Casablanca",
      "day": "Giorno 5",
      "subtitle": "Fes – Rabat – Casablanca",
      "desc": "Monumenti di Rabat, Moschea Hassan II a Casablanca e conclusione del tour."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_1.webp",
      "cap": "Grotte d'Ercole",
      "alt": "Apertura naturale sul mare delle Grotte d'Ercole scolpita nella roccia a Tangeri"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_10.webp",
      "cap": "Torre Hassan",
      "alt": "Spianata della Torre Hassan e del Mausoleo di Mohammed V a Rabat"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_2.webp",
      "cap": "Capo Spartel",
      "alt": "Promontorio di Capo Spartel dove l'Oceano Atlantico incontra il Mediterraneo"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_3.webp",
      "cap": "Vicoli di Chefchaouen",
      "alt": "Scalinata sinuosa dipinta di blu bordata da vasi di fiori a Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_4.webp",
      "cap": "Porte di Chefchaouen",
      "alt": "Vie della medina dipinte d'azzurro e rustiche porte in legno a Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_5.webp",
      "cap": "Mosaici di Volubilis",
      "alt": "Antichi mosaici pavimentali romani conservati tra le rovine di Volubilis"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_6.webp",
      "cap": "Bab Mansour",
      "alt": "Storica porta imperiale di Bab Mansour nella città antica di Meknes"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_7.webp",
      "cap": "Belvedere di Fes",
      "alt": "Veduta panoramica dei tetti della città medievale fortificata di Fes el-Bali"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_8.webp",
      "cap": "Moschea Al Quaraouiyine",
      "alt": "Architettura della moschea e biblioteca di Al Quaraouiyine nella Fes medievale"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_9.webp",
      "cap": "Kasbah degli Oudaia",
      "alt": "Mura in pietra della Kasbah degli Oudaia e giardini andalusi a Rabat"
    },
    {
      "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/hero_2.webp",
      "cap": "Panorama di Chefchaouen",
      "alt": "Veduta panoramica della caratteristica cittadina blu di Chefchaouen"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, conducente e programma sono a uso esclusivo del tuo gruppo per garantire massima flessibilità."
    },
    {
      "question": "Dove avvengono la partenza e il termine del tour?",
      "answer": "Il viaggio inizia al tuo arrivo al porto, aeroporto o alloggio a Tangeri e termina a Casablanca con rientro al tuo hotel o all'aeroporto Mohammed V."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Si viaggia in moderni fuoristrada 4×4 o comodi minivan con aria condizionata e capiente vano bagagli."
    },
    {
      "question": "È possibile richiedere menu per particolari esigenze dietetiche?",
      "answer": "Certamente: piatti vegetariani, vegani o senza glutine possono essere predisposti comunicandolo al momento della prenotazione."
    },
    {
      "question": "Questo itinerario è consigliato per ogni fascia d'età?",
      "answer": "Sì, è un circuito perfetto per famiglie con bambini, coppie e viaggiatori anziani con tappe calibrate e soste regolari."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno offrono temperature ideali per scoprire il nord, i monti del Rif e le storiche città imperiali."
    },
    {
      "question": "Come si effettua la prenotazione?",
      "answer": "Inviaci una richiesta indicando date e numero di persone: il team di Sahara Star Tours ti assisterà per confermare tutti i dettagli."
    }
  ]
};

// =============================================================
// Tour 46: 5-days-marrakech-to-fes-morocco-sahara-desert-tour
// =============================================================
const tour46_es = {
  slug: "5-days-marrakech-to-fes-morocco-sahara-desert-tour",
  title: "Tour de 5 Días de Marrakech a Fez por el Desierto del Sahara | Sahara Star Tours",
  shortTitle: "Tour de 5 Días de Marrakech a Fez por el Desierto",
  description: "Circuito privado de 5 días desde Marrakech hasta Fez a través de Ait Ben Haddou, Gargantas del Dades y Todra, y dos noches explorando las dunas de Merzouga.",
  aboutHtml: "<p>Este tour privado de 5 días de Marrakech a Fez es el viaje definitivo por el desierto del Sahara para quienes desean descubrir el sur de Marruecos a un ritmo pausado e inmersivo. Atravesará las majestuosas cumbres del Alto Atlas, visitará la legendaria Kasbah de Ait Ben Haddou y los espectaculares cañones del Dades y del Todra. Dispondrá de dos días completos en Merzouga para cabalgar en camello sobre las dunas de Erg Chebbi, dormir en un campamento bereber de lujo y conocer la cultura de familias nómadas y músicos gnawa antes de concluir en la imperial Fez.</p>",
  duration: "5 Días / 4 Noches",
  startingFrom: "Marrakech",
  price: "Desde $650/persona",
  highlights: [
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Noche en campamento en el desierto con cena y desayuno",
    "Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO",
    "Ruta panorámica a través de las montañas del Alto Atlas",
    "Medina de Fez y lugares culturales históricos"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local experimentado de habla hispana",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riads seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos aeroportuarios",
    "Entradas a monumentos o visitas opcionales",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Marrakech – Alto Atlas – Kasbah Ait Ben Haddou – Ouarzazate – Boumalne Dades",
      "content": "Su viaje comenzará con la recogida matinal en su alojamiento o en el aeropuerto de Marrakech. Cruzará las impresionantes montañas del Alto Atlas a través del puerto de Tizi N'Tichka (2.260 m), disfrutando de vistas panorámicas y pueblos bereberes tradicionales. Llegará a la famosa Kasbah de Ait Ben Haddou, sitio de la UNESCO y escenario de Gladiator y Juego de Tronos. Tras el almuerzo, continuará por Ouarzazate, el palmeral de Skoura y el Valle de las Rosas hasta llegar a Boumalne Dades para cenar y pasar la noche en un riad tradicional."
    },
    {
      "day": "Día 2",
      "title": "Boumalne Dades – Gargantas del Todra – Erfoud – Desierto de Merzouga – Campamento de lujo",
      "content": "Tras el desayuno admirará los cañones del Valle del Dades antes de dirigirse hacia las majestuosas Gargantas del Todra, un gigantesco desfiladero de paredes rocosas verticales de 300 metros de altura. Podrá caminar por el cañón y disfrutar de tiempo para almorzar. Continuará hacia Erfoud para visitar talleres de mármol con fósiles y llegará a Merzouga. Por la tarde montará en camello para contemplar una puesta de sol mágica sobre las dunas de Erg Chebbi y llegar a su campamento de lujo con cena tradicional y música bereber junto a la fogata."
    },
    {
      "day": "Día 3",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Despertará al amanecer para contemplar la salida del sol sobre el mar de arena. Tras el desayuno regresará en camello para una emocionante jornada en vehículo todoterreno 4×4 por el desierto: visitará antiguas minas de kohl, compartirá un té con familias nómadas bereberes en sus tiendas de lana y asistirá a una actuación de música gnawa con raíces subsaharianas en el pueblo de Khamlia. Tras un almuerzo tradicional, paseará por el palmeral y contemplará el lago de Merzouga. Cena y alojamiento en un agradable hotel frente a las dunas."
    },
    {
      "day": "Día 4",
      "title": "Dunas de Merzouga – Rissani – Erfoud – Valle del Ziz – Midelt",
      "content": "Tras desayunar en el hotel, visitará la histórica ciudad de Rissani y recorrerá su animado zoco tradicional, corazón comercial de la región de Tafilalet. Continuará por Erfoud y ascenderá por el impresionante cañón del Valle del Ziz, disfrutando de vistas panorámicas de extensos palmerales. Proseguirá viaje a través de los paisajes de la cordillera del Medio Atlas hasta llegar a la agradable localidad de Midelt para cenar y descansar en un acogedor hotel de montaña."
    },
    {
      "day": "Día 5",
      "title": "Midelt – Bosque de Cedros – Ifrane – Fez",
      "content": "En la última jornada partirá hacia el Bosque de Cedros de Azrou, donde podrá interactuar con los macacos de Berbería en libertad. A continuación visitará Ifrane, la 'Suiza de Marruecos', admirando sus jardines floridos y tejados a dos aguas. Por la tarde llegará a Fez, donde culminará su viaje con el traslado a su riad o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Día 1",
      "subtitle": "Marrakech – Alto Atlas – Ait Ben Haddou – Boumalne Dades",
      "desc": "Salida de Marrakech por el Alto Atlas y Ait Ben Haddou hacia el Valle del Dades."
    },
    {
      "number": 2,
      "name": "Boumalne Dades",
      "day": "Día 2",
      "subtitle": "Boumalne Dades – Gargantas del Todra – Erfoud – Merzouga",
      "desc": "Paseo por las Gargantas del Todra, llegada a Erg Chebbi y noche en campamento de lujo."
    },
    {
      "number": 3,
      "name": "Región de Merzouga",
      "day": "Día 3",
      "subtitle": "Exploración de Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Día completo en 4×4 conociendo nómadas, música gnawa y dunas de Erg Chebbi."
    },
    {
      "number": 4,
      "name": "Merzouga a Midelt",
      "day": "Día 4",
      "subtitle": "Merzouga – Rissani – Erfoud – Valle del Ziz – Midelt",
      "desc": "Visita al zoco de Rissani, ascenso por el Valle del Ziz y descanso en Midelt."
    },
    {
      "number": 5,
      "name": "Midelt a Fez",
      "day": "Día 5",
      "subtitle": "Midelt – Bosque de Cedros – Ifrane – Fez",
      "desc": "Bosque de cedros de Azrou con macacos, visita de Ifrane y llegada a Fez."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_1.webp",
      "cap": "Paso Tizi N'Tichka",
      "alt": "Carretera serpenteante del Alto Atlas a través del paso Tizi N'Tichka"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_10.webp",
      "cap": "Atardecer en Erg Chebbi",
      "alt": "Dunas de arena dorada brillando bajo la luz dorada del atardecer en Merzouga"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_2.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Kasbah de adobe de Ait Ben Haddou con sus torres fortificadas tradicionales"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_3.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Muros de arcilla y palmeras de la Kasbah Taourirt en Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_4.webp",
      "cap": "Gargantas del Todra",
      "alt": "Paredes verticales de roca caliza en las espectaculares Gargantas del Todra"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_5.webp",
      "cap": "Caravana en Merzouga",
      "alt": "Paseo en camello por las dunas doradas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_6.webp",
      "cap": "Noche en el campamento",
      "alt": "Música de tambores bereberes junto a la fogata bajo un cielo estrellado"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_7.webp",
      "cap": "Valle del Ziz",
      "alt": "Palmerales y pueblos tradicionales en el cañón del río Ziz"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_8.webp",
      "cap": "Bosque de Cedros",
      "alt": "Macaco de Berbería en las ramas de un cedro en el bosque de Azrou"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_9.webp",
      "cap": "Medina de Fez",
      "alt": "Vista panorámica de la medina amurallada de Fez desde una colina"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/hero_2.webp",
      "cap": "Amanecer en el Sahara",
      "alt": "Amanecer sobre las dunas de Erg Chebbi iluminando el desierto"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, conductor e itinerario están reservados en exclusiva para su grupo."
    },
    {
      "question": "¿Cuánto tiempo dura el paseo en camello y qué alternativas hay?",
      "answer": "El paseo en camello dura entre 40 y 90 minutos. Quienes lo prefieran pueden realizar el traslado directo en 4×4 sin coste adicional."
    },
    {
      "question": "¿Cómo son las tiendas en el campamento del desierto?",
      "answer": "Las tiendas de lujo cuentan con camas cómodas, baño privado completo con inodoro y ducha de agua caliente y electricidad."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "Le recogeremos en su alojamiento o en el aeropuerto de Marrakech y le dejaremos en su riad o en el aeropuerto de Fez."
    },
    {
      "question": "¿Qué modelo de vehículo se utiliza?",
      "answer": "Utilizamos vehículos privados 4×4 modernos o monovolúmenes con aire acondicionado y gran capacidad de equipaje."
    },
    {
      "question": "¿Se pueden adaptar menús para requerimientos dietéticos particulares?",
      "answer": "Sí, podemos preparar comidas vegetarianas, veganas, sin gluten o con otras restricciones avisándonos al reservar."
    },
    {
      "question": "¿Es un itinerario cómodo para todas las edades?",
      "answer": "Sí, al contar con 5 días las jornadas de viaje son más cortas y relajadas, con paradas regulares para descansar."
    },
    {
      "question": "¿Cuál es la mejor temporada para realizar este viaje?",
      "answer": "La primavera y el otoño son las estaciones más recomendables por sus temperaturas agradables tanto en el Atlas como en el desierto."
    }
  ]
};

const tour46_it = {
  slug: "5-days-marrakech-to-fes-morocco-sahara-desert-tour",
  title: "Tour di 5 Giorni da Marrakech a Fes nel Deserto del Sahara | Sahara Star Tours",
  shortTitle: "Tour di 5 Giorni da Marrakech a Fes nel Deserto",
  description: "Circuito privato di 5 giorni da Marrakech a Fes attraverso Ait Ben Haddou, Gole del Dades e Todra, e due giornate tra le magnifiche dune di Merzouga.",
  aboutHtml: "<p>Questo tour privato di 5 giorni da Marrakech a Fes è l'esperienza ideale per chi desidera scoprire il Sahara marocchino con ritmi rilassati e autentici. Valicherai l'Alto Atlante visitando la celebre Kasbah di Ait Ben Haddou e le spettacolari gole del Dades e del Todra. Godrai di due indimenticabili giornate nell'area di Merzouga per cavalcare tra le dune dell'Erg Chebbi, dormire in un campo tendato di lusso e scoprire la cultura delle famiglie nomadi e la musica gnawa prima di raggiungere Fes.</p>",
  duration: "5 Giorni / 4 Notti",
  startingFrom: "Marrakech",
  price: "Da $650/persona",
  highlights: [
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Notte in campo tendato di lusso con cena e colazione berbera",
    "Kasbah di Ait Ben Haddou, sito UNESCO leggendario",
    "Itinerario panoramico attraverso le montagne dell'Alto Atlante",
    "Medina di Fes e tesori culturali storici"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale esperto per l'intero viaggio",
    "Carburante, pedaggi e spese operative del veicolo",
    "Sistemazione in riad selezionati e campo tendato di lusso",
    "Colazioni e cene incluse come da itinerario",
    "Trekking in dromedario tra le dune con assistenza completa"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei nazionali e internazionali",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e spese personali"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Marrakech – Alto Atlante – Kasbah Ait Ben Haddou – Ouarzazate – Boumalne Dades",
      "content": "Partenza al mattino presto dal tuo alloggio o dall'aeroporto di Marrakech. Attraverserai l'Alto Atlante lungo il panoramico valico del Tizi N'Tichka (2.260 m), ammirando villaggi berberi arroccati. Raggiungerai la storica Kasbah di Ait Ben Haddou, patrimonio UNESCO set di film indimenticabili. Dopo il pranzo proseguirai oltre Ouarzazate, attraverso l'oasi di Skoura e la Valle delle Rose fino a Boumalne Dades per cena e pernottamento in riad."
    },
    {
      "day": "Giorno 2",
      "title": "Boumalne Dades – Gole del Todra – Erfoud – Deserto di Merzouga – Campo di lusso",
      "content": "Dopo la prima colazione ammirerai le suggestive gole della Valle del Dades prima di dirigerti verso le imponenti Gole del Todra, camminando lungo il canyon tra falesie calcaree alte oltre 300 metri. Tempo per il pranzo. Proseguirai per Erfoud alla scoperta dei laboratori di marmo fossile e giungerai a Merzouga. Nel tardo pomeriggio salirai sui dromedari per ammirare il tramonto tra le dune dell'Erg Chebbi e raggiungere il campo tendato di lusso con cena berbera e musica attorno al falò."
    },
    {
      "day": "Giorno 3",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Sveglia all'alba per assistere al sorgere del sole sul mare di sabbia dorata. Dopo la prima colazione rientrerai a Merzouga per un'emozionante giornata in 4×4: visiterai antiche miniere di kohl, berrai il tradizionale tè con una famiglia nomade berbera e ascolterai la musica spirituale gnawa a Khamlia. Nel pomeriggio passeggerai nell'oasi e visiterai il lago di Merzouga. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 4",
      "title": "Dune di Merzouga – Rissani – Erfoud – Valle dello Ziz – Midelt",
      "content": "Dopo la colazione in hotel visiterai la storica Rissani e il suo vivace mercato tradizionale, fulcro carovaniero del Tafilalet. Risalirai la spettacolare Valle dello Ziz con magnifici scorci panoramici sui palmeti e proseguirai attraverso il Medio Atlante fino alla cittadina montana di Midelt per cena e pernottamento in hotel."
    },
    {
      "day": "Giorno 5",
      "title": "Midelt – Foresta di Cedri – Ifrane – Fes",
      "content": "Nell'ultima giornata partirai verso la Foresta di Cedri di Azrou per osservare le scimmie barbaresche nel loro habitat. Visiterai poi Ifrane, la 'Svizzera del Marocco', con le sue tipiche casette e giardini curati. Nel pomeriggio arriverai a Fes con trasferimento al tuo riad o in aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Giorno 1",
      "subtitle": "Marrakech – Alto Atlante – Ait Ben Haddou – Boumalne Dades",
      "desc": "Partenza da Marrakech attraverso il Tizi N'Tichka e Ait Ben Haddou verso il Dades."
    },
    {
      "number": 2,
      "name": "Boumalne Dades",
      "day": "Giorno 2",
      "subtitle": "Boumalne Dades – Gole del Todra – Erfoud – Merzouga",
      "desc": "Visita delle Gole del Todra, arrivo all'Erg Chebbi e notte in campo tendato di lusso."
    },
    {
      "number": 3,
      "name": "Regione di Merzouga",
      "day": "Giorno 3",
      "subtitle": "Esplorazione di Merzouga – Nomadi – Khamlia – Lago – Palmeraie",
      "desc": "Escursione in 4×4 alla scoperta di famiglie nomadi, villaggio Gnawa e oasi."
    },
    {
      "number": 4,
      "name": "Merzouga a Midelt",
      "day": "Giorno 4",
      "subtitle": "Merzouga – Rissani – Erfoud – Valle dello Ziz – Midelt",
      "desc": "Visita del mercato di Rissani, canyon dello Ziz e pernottamento a Midelt."
    },
    {
      "number": 5,
      "name": "Midelt a Fes",
      "day": "Giorno 5",
      "subtitle": "Midelt – Foresta di Cedri – Ifrane – Fes",
      "desc": "Foresta dei cedri con scimmie barbaresche, Ifrane e arrivo a Fes."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_1.webp",
      "cap": "Passo Tizi N'Tichka",
      "alt": "Strada panoramica dell'Alto Atlante attraverso il passo Tizi N'Tichka"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_10.webp",
      "cap": "Tramonto a Erg Chebbi",
      "alt": "Dune di sabbia dorata illuminate dalla luce calda del tramonto a Merzouga"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_2.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Kasbah in terra cruda di Ait Ben Haddou con le tradizionali torri fortificate"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_3.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Mura in argilla e palme della Kasbah Taourirt a Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_4.webp",
      "cap": "Gole del Todra",
      "alt": "Pareti verticali di roccia calcarea nelle spettacolari Gole del Todra"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_5.webp",
      "cap": "Carovana a Merzouga",
      "alt": "Passeggiata in dromedario tra le dune dorate dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_6.webp",
      "cap": "Serata nel campo",
      "alt": "Musica di tamburi berberi attorno al falò sotto il cielo stellato"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_7.webp",
      "cap": "Valle dello Ziz",
      "alt": "Palmeti e villaggi tradizionali lungo il canyon del fiume Ziz"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_8.webp",
      "cap": "Foresta di Cedri",
      "alt": "Scimmia barbaresca sui rami di un cedro nella foresta di Azrou"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_9.webp",
      "cap": "Medina di Fes",
      "alt": "Veduta panoramica della medina murata di Fes dalla collina"
    },
    {
      "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/hero_2.webp",
      "cap": "Alba nel Sahara",
      "alt": "Alba sulle dune dell'Erg Chebbi che illumina il deserto"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, conducente e programma sono a uso esclusivo del tuo gruppo."
    },
    {
      "question": "Quanto dura il percorso in dromedario e ci sono alternative?",
      "answer": "La passeggiata in dromedario dura dai 40 ai 90 minuti. È possibile richiedere il trasferimento diretto al campo in 4×4 senza alcun costo aggiuntivo."
    },
    {
      "question": "Come sono organizzate le tende nel campo di lusso?",
      "answer": "Le tende dispongono di comodi letti veri, bagno privato interno con wc e doccia calda ed elettricità."
    },
    {
      "question": "Dove avvengono la partenza e il termine del tour?",
      "answer": "Verremo a prenderti presso il tuo riad, hotel o all'aeroporto di Marrakech e ti riaccompagneremo al tuo alloggio o all'aeroporto di Fes."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Il viaggio viene effettuato con veicoli fuoristrada 4×4 o moderni minivan con aria condizionata e capiente vano bagagli."
    },
    {
      "question": "È possibile soddisfare esigenze alimentari particolari?",
      "answer": "Certamente: piatti vegetariani, senza glutine o adatti ad altre allergie possono essere predisposti comunicandolo alla prenotazione."
    },
    {
      "question": "Il viaggio è comodo per viaggiatori di ogni età?",
      "answer": "Sì, la durata di 5 giorni rende le tappe più brevi e rilassate, con frequenti soste panoramiche."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno sono i periodi ideali grazie al clima gradevole sulle montagne e nel deserto."
    }
  ]
};

// =============================================================
// Tour 47: 5-days-morocco-desert-tour-itinerary-from-tangier
// =============================================================
const tour47_es = {
  slug: "5-days-morocco-desert-tour-itinerary-from-tangier",
  title: "Tour de 5 Días por el Desierto de Tánger a Marrakech | Sahara Star Tours",
  shortTitle: "Tour de 5 Días de Tánger a Marrakech",
  description: "Circuito privado de 5 días desde Tánger hasta Marrakech visitando Chefchaouen, Volubilis, Fez, las dunas de Merzouga y la Kasbah Ait Ben Haddou.",
  aboutHtml: "<p>Este extraordinario tour privado de 5 días conecta el norte mediterráneo de Marruecos con la magia del sur y la vibrante Marrakech. Partiendo de Tánger, explorará la fotogénica Chefchaouen en las montañas del Rif, las ruinas romanas de Volubilis y la histórica medina de Fez. Cruzará el Atlas hacia el majestuoso desierto de Erg Chebbi en Merzouga con paseo en camello y noche en campamento de lujo, para luego recorrer las Gargantas del Todra, el Valle del Dades y la emblemática Kasbah de Ait Ben Haddou antes de llegar a Marrakech.</p>",
  duration: "5 Días / 4 Noches",
  startingFrom: "Tánger",
  price: "Desde $650/persona",
  highlights: [
    "Chefchaouen, la ciudad azul en las montañas del Rif",
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO",
    "Ruta panorámica a través de las montañas del Alto Atlas",
    "Medina de Fez y lugares culturales históricos"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local experimentado de habla hispana",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riads/hoteles seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos portuarios/aeroportuarios no especificados",
    "Entradas a monumentos o visitas opcionales",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Llegada a Tánger – Chefchaouen",
      "content": "Su viaje comenzará con la recogida en su alojamiento, puerto o aeropuerto en Tánger. Conducirá hacia el sureste atravesando las verdes estribaciones de las montañas del Rif hasta llegar a la mágica Chefchaouen. Dispondrá de la tarde libre para perderse entre sus pintorescas callejuelas azuladas, visitar la plaza Outa el-Hammam y contemplar la puesta de sol. Cena y noche en un riad tradicional con encanto."
    },
    {
      "day": "Día 2",
      "title": "Chefchaouen – Ruinas Romanas de Volubilis – Mequinez – Fez",
      "content": "Tras el desayuno en Chefchaouen, continuará viaje hacia las ruinas romanas de Volubilis (Patrimonio de la Humanidad por la UNESCO), famosas por sus mosaicos y su basílica. Luego visitará Mequinez para admirar la monumental puerta de Bab Mansour y el mausoleo de Moulay Ismail. Por la tarde llegará a Fez, la capital espiritual de Marruecos. Cena y noche en un riad en la medina."
    },
    {
      "day": "Día 3",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Partirá hacia el sur cruzando Ifrane, conocida como 'la Suiza de Marruecos', y el Bosque de Cedros de Azrou para observar a los macacos de Berbería en libertad. Tras el almuerzo en Midelt, descenderá por las impresionantes gargantas y palmerales del Valle del Ziz y Errachidia. Por la tarde alcanzará las doradas dunas de Erg Chebbi en Merzouga, donde montará en camello para presenciar el atardecer sobre las dunas y llegar a su campamento de lujo con cena tradicional y música de tambores bereberes bajo las estrellas."
    },
    {
      "day": "Día 4",
      "title": "Desierto de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "content": "Madrugará para presenciar el inolvidable amanecer sobre el mar de dunas. Tras el desayuno en el campamento, regresará en camello o 4×4 a Merzouga. Visitará Rissani con su animado zoco tradicional y continuará por Erfoud hacia las imponentes Gargantas del Todra, un cañón de colosales muros rojizos ideal para pasear a pie. Tiempo para almorzar. Por la tarde llegará al Valle del Dades, admirando las curiosas formaciones de los 'dedos de mono'. Cena y noche en riad en Dades."
    },
    {
      "day": "Día 5",
      "title": "Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlas – Marrakech",
      "content": "En la última etapa viajará a través del Valle de las Rosas en Kalaat M'Gouna y el palmeral de Skoura hasta Ouarzazate, donde podrá visitar los estudios cinematográficos. Proseguirá hacia la famosa Kasbah de Ait Ben Haddou, pueblo fortificado de adobe declarado Patrimonio de la Humanidad por la UNESCO y escenario de grandes películas como Gladiator y La Momia. Por la tarde cruzará el Alto Atlas a través del puerto de Tizi N'Tichka (2.260 m) con paradas panorámicas, llegando a Marrakech al final del día donde concluirá el circuito."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Llegada a Tánger",
      "day": "Día 1",
      "subtitle": "Tánger – Chefchaouen",
      "desc": "Recogida en Tánger y viaje panorámico cruzando el Rif hacia la ciudad azul de Chefchaouen."
    },
    {
      "number": 2,
      "name": "Chefchaouen a Fez",
      "day": "Día 2",
      "subtitle": "Chefchaouen – Volubilis – Mequinez – Fez",
      "desc": "Visita a las ruinas romanas de Volubilis, Bab Mansour en Mequinez y llegada a Fez."
    },
    {
      "number": 3,
      "name": "Fez a Merzouga",
      "day": "Día 3",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga",
      "desc": "Cruce del Medio Atlas y Valle del Ziz hacia las dunas de Erg Chebbi y campamento de lujo."
    },
    {
      "number": 4,
      "name": "Merzouga al Dades",
      "day": "Día 4",
      "subtitle": "Merzouga – Rissani – Erfoud – Todra – Valle del Dades",
      "desc": "Amanecer en las dunas, zoco de Rissani, paseo por las Gargantas del Todra y noche en Dades."
    },
    {
      "number": 5,
      "name": "Valle del Dades a Marrakech",
      "day": "Día 5",
      "subtitle": "Dades – Valle de las Rosas – Skoura – Ait Ben Haddou – Marrakech",
      "desc": "Visita a Ait Ben Haddou y cruce panorámico del Alto Atlas hasta Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_1.webp",
      "cap": "Kasbah de Tánger",
      "alt": "Kasbah de Tánger con vistas al estrecho de Gibraltar y al mar Mediterráneo"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_10.webp",
      "cap": "Mezquita Koutoubia",
      "alt": "Alminar de la mezquita Koutoubia y jardines de palmeras en Marrakech"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_2.webp",
      "cap": "Callejones de Chefchaouen",
      "alt": "Encantador callejón empedrado en Chefchaouen con paredes azules y macetas"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_3.webp",
      "cap": "Ruinas de Volubilis",
      "alt": "Columnas romanas y arco de triunfo en pie en las ruinas de Volubilis"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_4.webp",
      "cap": "Bab Mansour",
      "alt": "Histórica puerta de entrada de Bab Mansour en la ciudad imperial de Mequinez"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_5.webp",
      "cap": "Tejados de Fez",
      "alt": "Vista panorámica de los tejados de la medina de Fez desde las Tumbas Meriníes"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_6.webp",
      "cap": "Bosque de Azrou",
      "alt": "Paseo por el bosque de cedros cerca de Azrou en las montañas del Medio Atlas"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_7.webp",
      "cap": "Caravana en Erg Chebbi",
      "alt": "Caravana de camellos moviéndose a través de las doradas dunas de Erg Chebbi al atardecer"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_8.webp",
      "cap": "Gargantas del Todra",
      "alt": "Altas paredes de roca caliza roja de las Gargantas del Todra en el Alto Atlas oriental"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Pueblo fortificado de Ait Ben Haddou, declarado Patrimonio de la Humanidad por la UNESCO"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/hero_2.webp",
      "cap": "Chefchaouen y el Rif",
      "alt": "Vista panorámica de casas encaladas de azul al pie de las montañas del Rif en Chefchaouen"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, conductor y programa están reservados exclusivamente para su grupo."
    },
    {
      "question": "¿Cuánto tiempo dura el paseo en camello y qué opciones existen?",
      "answer": "El paseo en camello suele durar entre 40 minutos y 1,5 horas. Como alternativa, se puede organizar el traslado directo en vehículo 4×4 sin coste adicional."
    },
    {
      "question": "¿La tienda del campamento en el desierto es privada?",
      "answer": "Sí, el campamento en el desierto cuenta con tiendas de campaña privadas de lujo con baño incorporado, agua caliente, camas de verdad y electricidad."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "La recogida se realiza en su alojamiento, puerto o aeropuerto de Tánger y el circuito concluye en Marrakech con traslado a su riad o al aeropuerto."
    },
    {
      "question": "¿Qué tipo de vehículo se utiliza?",
      "answer": "El viaje se realiza en un cómodo vehículo privado 4×4 o monovolumen con aire acondicionado. Para grupos más numerosos disponemos de minibuses adaptados."
    },
    {
      "question": "¿Se pueden atender requerimientos dietéticos particulares?",
      "answer": "Sí. Infórmenos sobre sus preferencias o restricciones dietéticas al reservar para que los riads, hoteles y el campamento preparen comidas adecuadas (vegetariano, vegano, sin gluten, etc.)."
    },
    {
      "question": "¿Es este itinerario adecuado para todas las edades?",
      "answer": "Sí, es perfectamente adecuado para todas las edades gracias al ritmo equilibrado de las etapas y a las paradas frecuentes para descansar."
    },
    {
      "question": "¿Cuál es la mejor época del año para realizar este tour?",
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados muy recomendables para combinar el norte montañoso, las ciudades históricas y el desierto."
    }
  ]
};

const tour47_it = {
  slug: "5-days-morocco-desert-tour-itinerary-from-tangier",
  title: "Tour di 5 Giorni da Tangeri a Marrakech nel Deserto | Sahara Star Tours",
  shortTitle: "Tour di 5 Giorni da Tangeri a Marrakech",
  description: "Circuito privato di 5 giorni da Tangeri a Marrakech alla scoperta di Chefchaouen, Volubilis, Fes, le dune di Merzouga e la Kasbah di Ait Ben Haddou.",
  aboutHtml: "<p>Questo spettacolare tour privato di 5 giorni collega il nord mediterraneo del Marocco con il grande sud sahariano e l'incanto di Marrakech. Partendo da Tangeri, visiterai i celebri vicoli celesti di Chefchaouen nel Rif, il sito archeologico di Volubilis e la città imperiale di Fes. Attraverserai l'Atlante verso le maestose dune dell'Erg Chebbi a Merzouga con escursione in dromedario e notte in accampamento di lusso, proseguendo per le Gole del Todra e la leggendaria Kasbah di Ait Ben Haddou fino a Marrakech.</p>",
  duration: "5 Giorni / 4 Notti",
  startingFrom: "Tangeri",
  price: "Da $650/persona",
  highlights: [
    "Chefchaouen, la città blu tra le montagne del Rif",
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Kasbah di Ait Ben Haddou, sito UNESCO leggendario",
    "Itinerario panoramico attraverso le montagne dell'Alto Atlante",
    "Medina di Fes e tesori culturali storici"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale professionista per l'intero viaggio",
    "Carburante, pedaggi e spese operative del veicolo",
    "Sistemazione in riad/hotel selezionati e campo tendato di lusso",
    "Colazioni e cene incluse come da itinerario",
    "Trekking in dromedario tra le dune con assistenza completa"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei e trasferimenti portuali/aeroportuali non specificati",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e spese personali"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Arrivo a Tangeri – Chefchaouen",
      "content": "Il tuo viaggio inizia con il prelievo al porto, all'aeroporto o al tuo alloggio a Tangeri. Viaggerai verso sud-est attraverso i paesaggi verdeggianti dei monti del Rif fino a raggiungere la splendida Chefchaouen. Nel pomeriggio passeggerai liberamente tra le sue incantevoli viuzze azzurre, ammirando piazza Outa el-Hammam e godendoti il tramonto sulla valle. Cena e pernottamento in un caratteristico riad."
    },
    {
      "day": "Giorno 2",
      "title": "Chefchaouen – Rovine Romane di Volubilis – Meknes – Fes",
      "content": "Dopo la prima colazione a Chefchaouen partirai alla volta del parco archeologico romano di Volubilis (patrimonio UNESCO), celebre per i mosaici e i templi ben conservati. Proseguirai per Meknes per ammirare la monumentale porta Bab Mansour e il mausoleo di Moulay Ismail. Nel tardo pomeriggio arriverai a Fes per cena e pernottamento in riad."
    },
    {
      "day": "Giorno 3",
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      "content": "Partenza verso sud attraverso Ifrane, la 'Svizzera del Marocco', e la Foresta di Cedri di Azrou per incontrare le scimmie barbaresche. Dopo il pranzo a Midelt, scenderai lungo le suggestive gole e gli infiniti palmeti della Valle dello Ziz ed Errachidia. Nel pomeriggio raggiungerai le magnifiche dune dorate dell'Erg Chebbi a Merzouga: salirai sui dromedari per ammirare il tramonto e raggiungere l'accampamento di lusso con cena berbera e tamburi sotto le stelle."
    },
    {
      "day": "Giorno 4",
      "title": "Deserto di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "content": "Sveglia all'alba per assistere allo straordinario sorgere del sole sulle dune. Dopo la colazione, rientro in dromedario o in 4×4 a Merzouga. Visiterai Rissani con il suo tradizionale mercato locale e proseguirai per Erfoud verso le spettacolari Gole del Todra, camminando lungo il canyon tra colossali falesie di roccia rossa. Pranzo locale e proseguimento verso la Valle del Dades con sosta fotografica alle singolari 'dita di scimmia'. Cena e notte in riad nel Dades."
    },
    {
      "day": "Giorno 5",
      "title": "Valle del Dades – Valle delle Rose – Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlante – Marrakech",
      "content": "Nell'ultima giornata viaggerai attraverso la Valle delle Rose e l'oasi di Skoura fino a Ouarzazate per visitare gli studi cinematografici. Visiterai quindi la celebre Kasbah di Ait Ben Haddou, villaggio fortificato patrimonio UNESCO celebre per Il Gladiatore e La Mummia. Nel pomeriggio risalirai il valico del Tizi N'Tichka (2.260 m) con spettacolari viste panoramiche sull'Alto Atlante, giungendo a Marrakech dove il tour si concluderà con il rientro al tuo alloggio o all'aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Arrivo a Tangeri",
      "day": "Giorno 1",
      "subtitle": "Tangeri – Chefchaouen",
      "desc": "Pick-up a Tangeri e trasferimento panoramico attraverso il Rif verso Chefchaouen."
    },
    {
      "number": 2,
      "name": "Chefchaouen a Fes",
      "day": "Giorno 2",
      "subtitle": "Chefchaouen – Volubilis – Meknes – Fes",
      "desc": "Visita di Volubilis, Bab Mansour a Meknes e arrivo a Fes."
    },
    {
      "number": 3,
      "name": "Fes a Merzouga",
      "day": "Giorno 3",
      "subtitle": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Merzouga",
      "desc": "Attraversamento del Medio Atlante e Valle dello Ziz verso il campo tendato a Merzouga."
    },
    {
      "number": 4,
      "name": "Merzouga al Dades",
      "day": "Giorno 4",
      "subtitle": "Merzouga – Rissani – Erfoud – Todra – Valle del Dades",
      "desc": "Alba sulle dune, souk di Rissani, passeggiata nelle Gole del Todra e notte nel Dades."
    },
    {
      "number": 5,
      "name": "Valle del Dades a Marrakech",
      "day": "Giorno 5",
      "subtitle": "Dades – Valle delle Rose – Skoura – Ait Ben Haddou – Marrakech",
      "desc": "Visita di Ait Ben Haddou e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_1.webp",
      "cap": "Kasbah di Tangeri",
      "alt": "Kasbah di Tangeri con vista sullo Stretto di Gibilterra e sul Mar Mediterraneo"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_10.webp",
      "cap": "Moschea Koutoubia",
      "alt": "Minareto della Moschea Koutoubia e giardini di palme a Marrakech"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_2.webp",
      "cap": "Vicoli di Chefchaouen",
      "alt": "Suggestivo vicolo acciottolato a Chefchaouen con pareti blu e vasi di fiori"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_3.webp",
      "cap": "Rovine di Volubilis",
      "alt": "Colonne romane e arco di trionfo presso le rovine storiche di Volubilis"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_4.webp",
      "cap": "Bab Mansour",
      "alt": "Storica porta d'accesso di Bab Mansour nella città imperiale di Meknes"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_5.webp",
      "cap": "Tetti di Fes",
      "alt": "Veduta panoramica dei tetti della medina di Fes dalle Tombe Merinidi"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_6.webp",
      "cap": "Foresta di Azrou",
      "alt": "Passeggiata nella foresta di cedri vicino ad Azrou sulle montagne del Medio Atlante"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_7.webp",
      "cap": "Carovana all'Erg Chebbi",
      "alt": "Carovana di dromedari tra le dune dorate dell'Erg Chebbi al tramonto"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_8.webp",
      "cap": "Gole del Todra",
      "alt": "Alte pareti di pietra calcarea rossa nelle Gole del Todra nell'Alto Atlante orientale"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Sito patrimonio mondiale UNESCO del villaggio fortificato di Ait Ben Haddou"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/hero_2.webp",
      "cap": "Chefchaouen e il Rif",
      "alt": "Veduta panoramica delle case dipinte di blu ai piedi delle montagne del Rif a Chefchaouen"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, conducente e programma sono a uso esclusivo del tuo gruppo per offrirti la massima serenità."
    },
    {
      "question": "Quanto dura il percorso in dromedario e ci sono alternative?",
      "answer": "La passeggiata in dromedario dura circa 40-90 minuti. È possibile richiedere il trasferimento diretto al campo in 4×4 senza alcun costo aggiuntivo."
    },
    {
      "question": "La tenda nell'accampamento nel deserto è privata?",
      "answer": "Sì, l'accampamento di lusso dispone di ampie tende private con veri letti, bagno privato interno con wc e doccia calda."
    },
    {
      "question": "Dove avvengono il prelievo e il rientro?",
      "answer": "Il viaggio inizia al tuo alloggio, porto o aeroporto di Tangeri e termina a Marrakech con rientro al tuo riad o in aeroporto."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Utilizziamo veicoli fuoristrada 4×4 o moderni minivan privati con aria condizionata e capiente bagagliaio per viaggiare in assoluto comfort."
    },
    {
      "question": "È possibile soddisfare esigenze alimentari particolari?",
      "answer": "Certamente: piatti vegetariani, senza glutine o altre preferenze possono essere concordati segnalandolo al momento della prenotazione."
    },
    {
      "question": "Questo tour è indicato per ogni fascia d'età?",
      "answer": "Sì, è un tour perfetto per famiglie con bambini, coppie e viaggiatori maturi grazie a un ritmo di viaggio ben dosato e soste regolari."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno offrono un clima meraviglioso per visitare le montagne del nord, le città storiche e il deserto del Sahara."
    }
  ]
};

// Execute saves
saveTour("5-day-morocco-sahara-tour-from-casablanca", tour44_es, tour44_it);
saveTour("5-days-in-northern-morocco-from-tangier", tour45_es, tour45_it);
saveTour("5-days-marrakech-to-fes-morocco-sahara-desert-tour", tour46_es, tour46_it);
saveTour("5-days-morocco-desert-tour-itinerary-from-tangier", tour47_es, tour47_it);
