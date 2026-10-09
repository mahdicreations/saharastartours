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
// Tour 51: 7-day-morocco-tour-itinerary-from-fes
// =============================================================
const tour51_es = {
  slug: "7-day-morocco-tour-itinerary-from-fes",
  title: "Tour de 7 Días por Marruecos desde Fez | Sahara Star Tours",
  shortTitle: "Tour de 7 Días por Marruecos desde Fez",
  description: "Gran circuito circular de 7 días desde Fez explorando Chefchaouen, Rabat, Casablanca, Marrakech con guía local, Ait Ben Haddou y el desierto de Merzouga.",
  aboutHtml: "<p>Este tour privado de una semana con salida y llegada en Fez es el itinerario definitivo para conocer todas las facetas de Marruecos. Descubrirá la histórica Mequinez y las ruinas romanas de Volubilis, la perla azul de Chefchaouen, la costa atlántica con Rabat y Casablanca, la mágica Marrakech con visita guiada, y la inmensidad del sur marroquí a través de las Gargantas del Todra y las doradas dunas de Erg Chebbi con noche en campamento de lujo.</p>",
  duration: "7 Días / 6 Noches",
  price: "Desde $920/persona",
  startingFrom: "Fez",
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
    "Chófer/guía local profesional de habla hispana",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riads seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos aeroportuarios",
    "Entradas opcionales a estudios o monumentos",
    "Propinas y gastos personales"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Fez – Mequinez – Ruinas de Volubilis – Chefchaouen",
      "content": "Su gran viaje de 7 días comienza temprano con la recogida en su alojamiento o en el aeropuerto de Fez. Viajará hacia Mequinez, la capital ismaelita, donde admirará la monumental puerta de Bab Mansour, el estanque de Sahrij Souani y el Mausoleo de Moulay Ismail. A continuación visitará las ruinas romanas de Volubilis (Patrimonio de la Humanidad por la UNESCO) con sus mosaicos y columnas. Por la tarde ascenderá por las montañas del Rif hacia la hermosa Chefchaouen. Cena y alojamiento en un riad tradicional."
    },
    {
      "day": "Día 2",
      "title": "Chefchaouen – Rabat la capital",
      "content": "Tras el desayuno disfrutará de tiempo libre para pasear por las fascinantes calles azules de Chefchaouen. Después viajará hacia Rabat, capital política de Marruecos, donde visitará la Torre Hassan, el Mausoleo de Mohammed V y la pintoresca Kasbah de los Udayas con vistas al estuario y al océano Atlántico. Cena y alojamiento en hotel en Rabat."
    },
    {
      "day": "Día 3",
      "title": "Rabat – Casablanca – Marrakech",
      "content": "Saldrá de Rabat a lo largo de la costa atlántica hacia Casablanca, capital económica del reino. Visitará la espectacular Mezquita Hassan II sobre el océano y paseará por la Corniche. Por la tarde tomará la autopista hacia el sur hasta llegar a la vibrante 'ciudad roja' de Marrakech. Alojamiento y cena en riad."
    },
    {
      "day": "Día 4",
      "title": "Visita guiada de Marrakech con guía local",
      "content": "Día completo dedicado a explorar Marrakech con un guía oficial local. Visitará el Palacio de la Bahía, las Tumbas Saadíes, la mezquita Koutoubia y los bulliciosos zocos de artesanos en la medina, culminando en la legendaria plaza Jemaa el-Fna. Tarde libre para relajarse o visitar el Jardín Majorelle."
    },
    {
      "day": "Día 5",
      "title": "Marrakech – Alto Atlas – Kasbah Ait Ben Haddou – Valle de las Rosas – Valle del Dades",
      "content": "Dejará Marrakech para cruzar el Alto Atlas por el paso de Tizi N'Tichka (2.260 m) con vistas panorámicas. Visitará la famosa Kasbah de Ait Ben Haddou (UNESCO), célebre por películas como Gladiator y Juego de Tronos. Proseguirá por Ouarzazate, el palmeral de Skoura y el Valle de las Rosas hasta llegar al Valle del Dades para cenar y pernoctar en un acogedor riad."
    },
    {
      "day": "Día 6",
      "title": "Valle del Dades – Gargantas del Todra – Dunas de Merzouga – Campamento de lujo",
      "content": "Tras el desayuno admirará los cañones del Dades y continuará hacia las imponentes Gargantas del Todra, un espectacular cañón de acantilados rojos verticales. Tiempo para pasear y almorzar. Continuará hacia Erfoud y las dunas de Merzouga, donde montará en camello al atardecer sobre las dunas de Erg Chebbi para llegar a su campamento de lujo con cena tradicional y música bereber bajo las estrellas."
    },
    {
      "day": "Día 7",
      "title": "Dunas de Merzouga – Erfoud – Midelt – Bosque de Cedros – Ifrane – Fez",
      "content": "Amanecer en las dunas y desayuno en el campamento. Visitará el zoco de Rissani y talleres de fósiles en Erfoud antes de ascender por el cañón del Valle del Ziz hacia Midelt para almorzar. Atravesará el Bosque de Cedros de Azrou para observar los macacos de Berbería e Ifrane antes de llegar a Fez por la tarde con traslado directo a su alojamiento o aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fez a Chefchaouen",
      "day": "Día 1",
      "subtitle": "Fez – Mequinez – Volubilis – Chefchaouen",
      "desc": "Salida de Fez hacia Mequinez, ruinas de Volubilis y llegada a la ciudad azul de Chefchaouen."
    },
    {
      "number": 2,
      "name": "Chefchaouen a Rabat",
      "day": "Día 2",
      "subtitle": "Chefchaouen – Rabat",
      "desc": "Mañana en Chefchaouen y viaje hacia Rabat para visitar la Torre Hassan y Kasbah Udayas."
    },
    {
      "number": 3,
      "name": "Rabat a Marrakech",
      "day": "Día 3",
      "subtitle": "Rabat – Casablanca – Marrakech",
      "desc": "Visita a la Mezquita Hassan II en Casablanca y viaje hacia Marrakech."
    },
    {
      "number": 4,
      "name": "Visita de Marrakech",
      "day": "Día 4",
      "subtitle": "Visita guiada por la medina de Marrakech",
      "desc": "Palacios históricos, zocos tradicionales y plaza Jemaa el-Fna con guía local."
    },
    {
      "number": 5,
      "name": "Marrakech al Dades",
      "day": "Día 5",
      "subtitle": "Marrakech – Alto Atlas – Ait Ben Haddou – Valle del Dades",
      "desc": "Cruce del Alto Atlas, visita a Ait Ben Haddou y noche en el Valle del Dades."
    },
    {
      "number": 6,
      "name": "Dades a Merzouga",
      "day": "Día 6",
      "subtitle": "Valle del Dades – Todra – Merzouga – Campamento de lujo",
      "desc": "Gargantas del Todra, llegada a Erg Chebbi, paseo en camello y campamento de lujo."
    },
    {
      "number": 7,
      "name": "Merzouga a Fez",
      "day": "Día 7",
      "subtitle": "Merzouga – Erfoud – Valle del Ziz – Ifrane – Fez",
      "desc": "Valle del Ziz, bosque de cedros con macacos y regreso a Fez."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_1.webp",
      "cap": "Bab Bou Jeloud",
      "alt": "Puerta histórica de la medina de Fez conocida como Bab Bou Jeloud o la Puerta Azul"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_10.webp",
      "cap": "Jemaa el-Fna de noche",
      "alt": "Plaza Jemaa el-Fna de Marrakech iluminada con puestos de comida y artistas por la noche"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_2.webp",
      "cap": "Bab Mansour",
      "alt": "Murallas de la ciudad imperial y arcos ornamentales de Bab Mansour en Mequinez"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_3.webp",
      "cap": "Ruinas de Volubilis",
      "alt": "Columnas de basílica romana y ruinas del Capitolio en Volubilis"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_4.webp",
      "cap": "Callejones azules",
      "alt": "Estrechos callejones azul celeste y casas encaladas en Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_5.webp",
      "cap": "Torre Hassan",
      "alt": "Alminar de la Torre Hassan y columnas de mármol en el complejo Mohammed V en Rabat"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_6.webp",
      "cap": "Mezquita Hassan II",
      "alt": "Arquitectura costera moderna de la mezquita Hassan II en Casablanca"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_7.webp",
      "cap": "Paseo en camello",
      "alt": "Paseo en camello por las dunas de Erg Chebbi hacia un campamento de lujo bereber"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_8.webp",
      "cap": "Gargantas del Todra",
      "alt": "Altas paredes verticales de cañón en las Gargantas del Todra en el Alto Atlas"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Torres de adobe y murallas fortificadas de Ait Ben Haddou"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/hero_2.webp",
      "cap": "Carretera del Atlas",
      "alt": "Paso de montaña del Alto Atlas con carretera panorámica serpenteando entre picos rocosos"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia completamente privada: el vehículo, conductor y programa están reservados exclusivamente para su grupo."
    },
    {
      "question": "¿Cuánto tiempo dura el paseo en camello y qué alternativas existen?",
      "answer": "El paseo en camello suele durar de 40 a 90 minutos. Como alternativa, se puede coordinar el traslado directo en 4×4 sin coste adicional."
    },
    {
      "question": "¿La tienda del campamento en el desierto es privada?",
      "answer": "Sí, el campamento en el desierto cuenta con tiendas de campaña privadas de lujo con baño completo, agua caliente, camas de verdad y electricidad."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "La recogida y el regreso se organizan directamente en su alojamiento o en el aeropuerto de Fez Sais según sus horarios de vuelo."
    },
    {
      "question": "¿Qué modelo de vehículo se utiliza?",
      "answer": "Utilizamos vehículos privados 4×4 modernos o monovolúmenes con aire acondicionado, asientos ergonómicos y amplio maletero."
    },
    {
      "question": "¿Se pueden adaptar dietas vegetarianas o especiales?",
      "answer": "Sí, podemos coordinar opciones vegetarianas, veganas, sin gluten u otras preferencias dietéticas notificándolo al reservar."
    },
    {
      "question": "¿Es este circuito adecuado para todas las edades?",
      "answer": "Sí, es idóneo para familias y viajeros de todas las edades. El itinerario cuenta con pausas regulares para descansar y realizar fotografías."
    },
    {
      "question": "¿Cuál es la mejor época del año para realizar este tour?",
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados ideales para viajar desde la costa hasta el desierto y las montañas."
    }
  ]
};

const tour51_it = {
  slug: "7-day-morocco-tour-itinerary-from-fes",
  title: "Tour di 7 Giorni in Marocco da Fes | Sahara Star Tours",
  shortTitle: "Tour di 7 Giorni in Marocco da Fes",
  description: "Gran circuito circolare privato di 7 giorni da Fes alla scoperta di Chefchaouen, Rabat, Casablanca, Marrakech con guida locale, Ait Ben Haddou e Merzouga.",
  aboutHtml: "<p>Questo tour privato di una settimana con partenza e rientro a Fes è l'itinerario per eccellenza per scoprire la ricchezza culturale e paesaggistica del Marocco. Dalla storica Meknes e dai mosaici di Volubilis alla magia azzurra di Chefchaouen, dalla costa atlantica di Rabat e Casablanca all'incanto di Marrakech con guida ufficiale locale, fino al deserto dell'Erg Chebbi a Merzouga con escursione in dromedario e notte in accampamento di lusso.</p>",
  duration: "7 Giorni / 6 Notti",
  price: "Da $920/persona",
  startingFrom: "Fes",
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
    "Sistemazione in riad selezionati e campo tendato di lusso",
    "Colazioni e cene incluse come da itinerario",
    "Trekking in dromedario tra le dune con assistenza completa"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei e trasferimenti aeroportuali non specificati",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e spese personali"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Fes – Meknes – Rovine di Volubilis – Chefchaouen",
      "content": "Partenza al mattino presto dal tuo alloggio o dall'aeroporto di Fes verso Meknes, capitale ismaelita, dove ammirerai la monumentale porta Bab Mansour e il bacino di Sahrij Souani. Visiterai poi il sito archeologico romano di Volubilis (UNESCO) con i suoi splendidi mosaici. Nel pomeriggio risalirai le montagne del Rif verso la fiabesca Chefchaouen. Cena e pernottamento in riad."
    },
    {
      "day": "Giorno 2",
      "title": "Chefchaouen – Rabat la capitale",
      "content": "Mattinata libera per passeggiare tra i vicoli celesti di Chefchaouen. Proseguirai poi verso Rabat, capitale del Marocco, dove visiterai la Torre Hassan, il Mausoleo di Mohammed V e la suggestiva Kasbah degli Oudaia affacciata sull'oceano. Cena e pernottamento in hotel a Rabat."
    },
    {
      "day": "Giorno 3",
      "title": "Rabat – Casablanca – Marrakech",
      "content": "Partenza da Rabat lungo la costa atlantica fino a Casablanca per visitare la monumentale Moschea Hassan II e fare una passeggiata sulla Corniche. Nel pomeriggio proseguirai verso sud lungo l'autostrada fino a raggiungere Marrakech, la 'città rossa'. Sistemazione e cena in riad."
    },
    {
      "day": "Giorno 4",
      "title": "Visita guidata di Marrakech con guida locale",
      "content": "Intera giornata dedicata a esplorare Marrakech con una guida ufficiale locale: ammirerai il Palazzo Bahia, le Tombe Saadiane, il minareto della Koutoubia e i labirintici souk della medina, fino alla spettacolare piazza Jemaa el-Fna. Pomeriggio libero."
    },
    {
      "day": "Giorno 5",
      "title": "Marrakech – Alto Atlante – Kasbah Ait Ben Haddou – Valle delle Rose – Valle del Dades",
      "content": "Partenza attraverso il passo montano del Tizi N'Tichka (2.260 m) con viste panoramiche sull'Alto Atlante. Visita della leggendaria Kasbah di Ait Ben Haddou (UNESCO). Proseguimento oltre Ouarzazate, attraverso l'oasi di Skoura e la Valle delle Rose fino alla Valle del Dades per cena e pernottamento in riad."
    },
    {
      "day": "Giorno 6",
      "title": "Valle del Dades – Gole del Todra – Dune di Merzouga – Campo di lusso",
      "content": "Dopo la prima colazione ammirerai le suggestive gole del Dades e passeggerai nelle spettacolari Gole del Todra tra falesie calcaree alte oltre 300 metri. Proseguirai per Erfoud fino a Merzouga: nel tardo pomeriggio salirai sui dromedari per raggiungere l'accampamento di lusso a Erg Chebbi con cena tipica berbera e canti sotto le stelle."
    },
    {
      "day": "Giorno 7",
      "title": "Dune di Merzouga – Erfoud – Midelt – Foresta di Cedri – Ifrane – Fes",
      "content": "Alba sulle dune e colazione all'accampamento. Visita di Rissani e dei laboratori di fossili a Erfoud, risalendo la scenografica Valle dello Ziz verso Midelt per il pranzo. Attraverserai la Foresta di Cedri di Azrou con le scimmie barbaresche e sosterai a Ifrane prima di rientrare a Fes con trasferimento al riad o in aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fes a Chefchaouen",
      "day": "Giorno 1",
      "subtitle": "Fes – Meknes – Volubilis – Chefchaouen",
      "desc": "Partenza da Fes verso Meknes, rovine di Volubilis e arrivo a Chefchaouen."
    },
    {
      "number": 2,
      "name": "Chefchaouen a Rabat",
      "day": "Giorno 2",
      "subtitle": "Chefchaouen – Rabat",
      "desc": "Mattina a Chefchaouen e viaggio verso Rabat per visitare Torre Hassan e Oudaia."
    },
    {
      "number": 3,
      "name": "Rabat a Marrakech",
      "day": "Giorno 3",
      "subtitle": "Rabat – Casablanca – Marrakech",
      "desc": "Visita alla Moschea Hassan II a Casablanca e trasferimento a Marrakech."
    },
    {
      "number": 4,
      "name": "Visita di Marrakech",
      "day": "Giorno 4",
      "subtitle": "Tour guidato della medina di Marrakech",
      "desc": "Palazzi storici, souk tradizionali e piazza Jemaa el-Fna con guida locale."
    },
    {
      "number": 5,
      "name": "Marrakech al Dades",
      "day": "Giorno 5",
      "subtitle": "Marrakech – Alto Atlante – Ait Ben Haddou – Valle del Dades",
      "desc": "Valico del Tizi N'Tichka, Kasbah di Ait Ben Haddou e notte nel Dades."
    },
    {
      "number": 6,
      "name": "Dades a Merzouga",
      "day": "Giorno 6",
      "subtitle": "Valle del Dades – Todra – Merzouga – Campo di lusso",
      "desc": "Gole del Todra, arrivo all'Erg Chebbi, dromedari e campo tendato di lusso."
    },
    {
      "number": 7,
      "name": "Merzouga a Fes",
      "day": "Giorno 7",
      "subtitle": "Merzouga – Erfoud – Valle dello Ziz – Ifrane – Fes",
      "desc": "Valle dello Ziz, foresta di cedri con scimmie barbaresche e arrivo a Fes."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_1.webp",
      "cap": "Bab Bou Jeloud",
      "alt": "Porta storica della medina di Fes nota come Bab Bou Jeloud o Porta Blu"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_10.webp",
      "cap": "Jemaa el-Fna di notte",
      "alt": "Piazza Jemaa el-Fna di Marrakech illuminata con bancarelle di cibo e artisti"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_2.webp",
      "cap": "Bab Mansour",
      "alt": "Mura della città imperiale e archi ornamentali di Bab Mansour a Meknes"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_3.webp",
      "cap": "Rovine di Volubilis",
      "alt": "Colonne della basilica romana e rovine del Campidoglio a Volubilis"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_4.webp",
      "cap": "Vicoli blu",
      "alt": "Stretti vicoli dipinti d'azzurro e case intonacate di bianco a Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_5.webp",
      "cap": "Torre Hassan",
      "alt": "Minareto della Torre Hassan e colonne di marmo nel complesso Mohammed V a Rabat"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_6.webp",
      "cap": "Moschea Hassan II",
      "alt": "Moderna architettura affacciata sull'oceano della Moschea Hassan II a Casablanca"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_7.webp",
      "cap": "Passeggiata in dromedario",
      "alt": "Trekking in dromedario sulle dune dell'Erg Chebbi verso il campo tendato di lusso"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_8.webp",
      "cap": "Gole del Todra",
      "alt": "Alte pareti verticali del canyon nelle Gole del Todra nell'Alto Atlante"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Torri in argilla e mura fortificate di Ait Ben Haddou"
    },
    {
      "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/hero_2.webp",
      "cap": "Strada dell'Atlante",
      "alt": "Passo montano dell'Alto Atlante con strada panoramica che si snoda tra le vette"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, conducente e programma sono a uso esclusivo del tuo gruppo con la massima flessibilità."
    },
    {
      "question": "Quanto dura il percorso in dromedario e ci sono alternative?",
      "answer": "Il percorso dura circa 40-90 minuti. Se preferisci non cavalcare, è possibile organizzare il trasferimento diretto al campo in 4×4 senza alcun costo extra."
    },
    {
      "question": "La tenda nell'accampamento nel deserto è privata?",
      "answer": "Sì, l'accampamento di lusso dispone di ampie tende private con veri letti, bagno privato con wc e doccia calda."
    },
    {
      "question": "Dove avvengono la partenza e il termine del tour?",
      "answer": "La partenza e il termine del tour sono previsti al tuo riad o aeroporto a Fes Sais in base ai tuoi piani di volo."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Il viaggio viene effettuato con veicoli fuoristrada 4×4 o moderni minivan con aria condizionata e capiente vano bagagli."
    },
    {
      "question": "È possibile soddisfare particolari esigenze dietetiche?",
      "answer": "Certamente: piatti vegetariani, vegani o senza glutine possono essere preparati senza problemi segnalandolo alla prenotazione."
    },
    {
      "question": "Il viaggio è comodo per viaggiatori di ogni età?",
      "answer": "Sì, le tappe sono ben distribuite su 7 giorni e prevedono frequenti soste panoramiche per riposare."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno offrono un clima meraviglioso sia sulle montagne che nel deserto del Sahara."
    }
  ]
};

// =============================================================
// Tour 52: 7-days-morocco-tour-itinerary-from-tangier-one-week
// =============================================================
const tour52_es = {
  slug: "7-days-morocco-tour-itinerary-from-tangier-one-week",
  title: "Tour de 7 Días por Marruecos de Tánger a Marrakech | Sahara Star Tours",
  shortTitle: "Tour de 7 Días de Tánger a Marrakech",
  description: "Circuito privado de 7 días de una semana desde Tánger a Marrakech visitando Chefchaouen, Volubilis, Fez con guía local, dos días en Merzouga y Ait Ben Haddou.",
  aboutHtml: "<p>Este circuito privado de una semana desde Tánger hasta Marrakech es una experiencia magistral que conecta el norte mediterráneo con las dunas saharianas y la mágica Marrakech. Explorará Chefchaouen en las montañas del Rif, las ruinas romanas de Volubilis, y disfrutará de una visita guiada privada por la medina de Fez. Cruzará el Atlas hacia el desierto de Merzouga donde pasará dos días inolvidables (con paseo en camello, noche en campamento de lujo y encuentro con nómadas) antes de recorrer las Gargantas del Todra y la Kasbah de Ait Ben Haddou hacia Marrakech.</p>",
  duration: "7 Días / 6 Noches",
  price: "Desde $920/persona",
  startingFrom: "Tánger",
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
    "Chófer/guía local profesional de habla hispana",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riads seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos portuarios/aeroportuarios no especificados",
    "Entradas a monumentos o estudios opcionales",
    "Propinas y gastos personales"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Llegada a Tánger – Chefchaouen",
      "content": "Su viaje de una semana comienza con la recogida en su alojamiento, en el aeropuerto o en el puerto de Tánger. Viajará hacia el sureste a través de los verdes valles de las montañas del Rif hasta llegar a la mágica Chefchaouen. Dispondrá de tiempo libre para pasear por sus callejuelas azuladas, admirar la plaza Outa el-Hammam y contemplar el atardecer. Cena y alojamiento en un riad tradicional."
    },
    {
      "day": "Día 2",
      "title": "Chefchaouen – Ruinas Romanas de Volubilis – Mequinez – Fez",
      "content": "Tras el desayuno en Chefchaouen, continuará hacia las ruinas romanas de Volubilis (Patrimonio de la Humanidad por la UNESCO), reconocidas por sus mosaicos bien conservados. Proseguirá hacia Mequinez para admirar la puerta de Bab Mansour y el mausoleo de Moulay Ismail. Por la tarde llegará a Fez, la capital espiritual de Marruecos. Cena y noche en un riad en la medina."
    },
    {
      "day": "Día 3",
      "title": "Visita guiada de Fez con guía local",
      "content": "Día completo dedicado a explorar la fascinante medina de Fez el-Bali con un guía oficial local. Visitará el Palacio Real, el barrio judío (Mellah), la histórica Madrasa Al Attarine, la Universidad Al Quaraouiyine y las famosas curtidurías de Chouara. Tarde libre para relajarse en su riad."
    },
    {
      "day": "Día 4",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Partirá hacia el sur cruzando Ifrane, la 'Suiza de Marruecos', y el Bosque de Cedros de Azrou para observar a los macacos de Berbería en libertad. Tras el almuerzo en Midelt, descenderá por las impresionantes gargantas y palmerales del Valle del Ziz y Errachidia. Por la tarde alcanzará las doradas dunas de Erg Chebbi en Merzouga, donde montará en camello para presenciar el atardecer sobre las dunas y llegar a su campamento de lujo con cena tradicional y música de tambores bereberes bajo las estrellas."
    },
    {
      "day": "Día 5",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Despertará al amanecer para contemplar la salida del sol sobre el mar de arena. Tras el desayuno regresará en camello a Merzouga para una jornada en todoterreno 4×4 por el desierto: visitará antiguas minas de kohl, compartirá un té con familias nómadas bereberes en sus tiendas artesanales y asistirá a una actuación de música y danza gnawa en el pueblo de Khamlia. Tras un almuerzo tradicional, paseará por el palmeral y contemplará el lago estacional de Merzouga. Cena y alojamiento en un confortable hotel frente a las dunas."
    },
    {
      "day": "Día 6",
      "title": "Desierto de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "content": "Tras el desayuno en el hotel, visitará la histórica Rissani con su animado zoco tradicional. Continuará hacia Erfoud para conocer talleres de mármol fosilizado y seguirá por los palmerales de Touroug y Tinjdad hasta las colosales Gargantas del Todra, donde disfrutará de tiempo para pasear y almorzar. Luego continuará hacia el Valle del Dades, deteniéndose ante las formaciones de los 'dedos de mono'. Cena y noche en un riad en Dades."
    },
    {
      "day": "Día 7",
      "title": "Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      "content": "En la última jornada viajará a través del Valle de las Rosas en Kalaat M'Gouna y el palmeral de Skoura hasta Ouarzazate, donde podrá visitar los estudios cinematográficos. Proseguirá hacia la famosa Kasbah de Ait Ben Haddou, pueblo fortificado de adobe declarado Patrimonio de la Humanidad por la UNESCO y escenario de grandes películas como Gladiator y La Momia. Por la tarde cruzará el Alto Atlas a través del puerto de Tizi N'Tichka (2.260 m) con paradas panorámicas, llegando a Marrakech donde concluirá su semana en Marruecos."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Llegada a Tánger",
      "day": "Día 1",
      "subtitle": "Tánger – Chefchaouen",
      "desc": "Recogida en Tánger y traslado a través de las montañas del Rif a Chefchaouen."
    },
    {
      "number": 2,
      "name": "Chefchaouen a Fez",
      "day": "Día 2",
      "subtitle": "Chefchaouen – Volubilis – Mequinez – Fez",
      "desc": "Ruinas romanas de Volubilis, puerta Bab Mansour en Mequinez y llegada a Fez."
    },
    {
      "number": 3,
      "name": "Visita de Fez",
      "day": "Día 3",
      "subtitle": "Visita guiada por la medina de Fez",
      "desc": "Recorrido guiado privado por palacios, madrasas y curtidurías de Fez."
    },
    {
      "number": 4,
      "name": "Fez a Merzouga",
      "day": "Día 4",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Valle del Ziz – Merzouga",
      "desc": "Medio Atlas, bosque de cedros, palmerales del Ziz y campamento en Erg Chebbi."
    },
    {
      "number": 5,
      "name": "Región de Merzouga",
      "day": "Día 5",
      "subtitle": "Exploración de Merzouga – Nómadas – Khamlia – Oasis",
      "desc": "Día en 4×4 conociendo nómadas, música gnawa y dunas del Sahara."
    },
    {
      "number": 6,
      "name": "Merzouga al Dades",
      "day": "Día 6",
      "subtitle": "Merzouga – Rissani – Erfoud – Todra – Valle del Dades",
      "desc": "Zoco de Rissani, paseo por las Gargantas del Todra y noche en Dades."
    },
    {
      "number": 7,
      "name": "Valle del Dades a Marrakech",
      "day": "Día 7",
      "subtitle": "Dades – Valle de las Rosas – Ait Ben Haddou – Marrakech",
      "desc": "Kasbah Ait Ben Haddou, cruce del Alto Atlas y despedida en Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_1.webp",
      "cap": "Medina de Tánger",
      "alt": "Casas blancas mediterráneas de la medina de Tánger con vistas a la bahía"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_10.webp",
      "cap": "Zoco de Marrakech",
      "alt": "Bulliciosos callejones del zoco de Marrakech llenos de especias, alfombras y farolillos"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_2.webp",
      "cap": "Chefchaouen azul",
      "alt": "Sendero de la medina azul con vibrantes macetas de flores en Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_3.webp",
      "cap": "Arco de Volubilis",
      "alt": "Antiguo arco de triunfo y columnas de piedra en el sitio de Volubilis de la UNESCO"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_4.webp",
      "cap": "Bab Mansour",
      "alt": "Gran puerta de Bab Mansour que conduce a la medina imperial de Mequinez"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_5.webp",
      "cap": "Curtidores de Fez",
      "alt": "Curtidores trabajando con tintes naturales en cubas de piedra en la curtiduría de Chouara, Fez"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_6.webp",
      "cap": "Bosque de Azrou",
      "alt": "Bosque de cedros de Azrou en el Medio Atlas con macacos de Berbería"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_7.webp",
      "cap": "Dunas de Erg Chebbi",
      "alt": "Caravana de camellos guiada sobre las onduladas dunas de arena de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_8.webp",
      "cap": "Gargantas del Todra",
      "alt": "Paredes de cañón de piedra caliza roja de las Gargantas del Todra con arroyo abajo"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar fortificado de arcilla de Ait Ben Haddou brillando a la luz del atardecer"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/hero_2.webp",
      "cap": "Valle de Chefchaouen",
      "alt": "Chefchaouen enclavada en el valle entre los picos rocosos de las montañas del Rif"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, conductor y programa están reservados en exclusiva para su grupo."
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

const tour52_it = {
  slug: "7-days-morocco-tour-itinerary-from-tangier-one-week",
  title: "Tour di 7 Giorni da Tangeri a Marrakech di Una Settimana | Sahara Star Tours",
  shortTitle: "Tour di 7 Giorni da Tangeri a Marrakech",
  description: "Circuito privato di 7 giorni da Tangeri a Marrakech alla scoperta di Chefchaouen, Volubilis, Fes con guida locale, due giornate a Merzouga e Ait Ben Haddou.",
  aboutHtml: "<p>Questo tour privato di una settimana da Tangeri a Marrakech è l'itinerario perfetto per vivere il Marocco da nord a sud in tutta la sua varietà. Visiterai i suggestivi vicoli blu di Chefchaouen nel Rif, il sito archeologico di Volubilis e scoprirai i monumenti di Fes con una guida ufficiale locale. Attraverserai l'Atlante verso il deserto di Merzouga con due notti speciali (tra dromedari, campo di lusso e famiglie nomadi) per poi esplorare le Gole del Todra e Ait Ben Haddou fino a Marrakech.</p>",
  duration: "7 Giorni / 6 Notti",
  price: "Da $920/persona",
  startingFrom: "Tangeri",
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
    "Sistemazione in riad selezionati e campo tendato di lusso",
    "Colazioni e cene incluse come da itinerario",
    "Trekking in dromedario tra le dune con assistenza completa"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei e trasferimenti marittimi/aeroportuali non specificati",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e spese personali"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Arrivo a Tangeri – Chefchaouen",
      "content": "Il tuo viaggio inizia con il prelievo al porto, all'aeroporto o al tuo alloggio a Tangeri. Viaggerai attraverso le vallate del Rif fino a raggiungere la splendida Chefchaouen. Pomeriggio libero per perdersi tra le caratteristiche viuzze celesti, ammirando piazza Outa el-Hammam e godendoti il tramonto. Cena e pernottamento in un incantevole riad."
    },
    {
      "day": "Giorno 2",
      "title": "Chefchaouen – Rovine Romane di Volubilis – Meknes – Fes",
      "content": "Dopo la prima colazione a Chefchaouen partirai alla volta del parco archeologico romano di Volubilis (patrimonio UNESCO), celebre per i mosaici e i templi ben conservati. Proseguirai per Meknes per ammirare la monumentale porta Bab Mansour e il mausoleo di Moulay Ismail. Nel tardo pomeriggio arriverai a Fes per cena e pernottamento in riad."
    },
    {
      "day": "Giorno 3",
      "title": "Visita guidata di Fes con guida locale",
      "content": "Intera giornata dedicata alla visita guidata dell'antica medina di Fes el-Bali con una guida ufficiale locale. Visiterai il Palazzo Reale con le porte in bronzo dorato, il quartiere ebraico del Mellah, la Madrasa Al Attarine, l'Università Al Quaraouiyine e le celebri concerie di Chouara. Pomeriggio libero per rilassarsi in riad."
    },
    {
      "day": "Giorno 4",
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      "content": "Partenza verso sud attraverso Ifrane, la 'Svizzera del Marocco', e la Foresta di Cedri di Azrou per incontrare le scimmie barbaresche. Dopo il pranzo a Midelt, scenderai lungo le suggestive gole e gli infiniti palmeti della Valle dello Ziz ed Errachidia. Nel pomeriggio raggiungerai le magnifiche dune dorate dell'Erg Chebbi a Merzouga: salirai sui dromedari per ammirare il tramonto e raggiungere l'accampamento di lusso con cena berbera e tamburi sotto le stelle."
    },
    {
      "day": "Giorno 5",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Sveglia all'alba per assistere allo straordinario sorgere del sole sul mare di sabbia dorata. Dopo la colazione rientrerai a Merzouga per un'emozionante giornata in 4×4: visiterai antiche miniere di kohl, berrai il tradizionale tè con una famiglia nomade berbera e ascolterai la musica spirituale gnawa a Khamlia. Nel pomeriggio passeggerai nell'oasi e visiterai il lago di Merzouga. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 6",
      "title": "Deserto di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "content": "Dopo la prima colazione in hotel visiterai la storica Rissani con il suo tradizionale mercato locale e proseguirai per Erfoud verso le spettacolari Gole del Todra, camminando lungo il canyon tra colossali falesie di roccia rossa. Pranzo locale e proseguimento verso la Valle del Dades con sosta fotografica alle singolari 'dita di scimmia'. Cena e notte in riad nel Dades."
    },
    {
      "day": "Giorno 7",
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
      "name": "Visita di Fes",
      "day": "Giorno 3",
      "subtitle": "Tour guidato della medina storica di Fes",
      "desc": "Visita con guida ufficiale a monumenti storici, madrasse e concerie di Fes."
    },
    {
      "number": 4,
      "name": "Fes a Merzouga",
      "day": "Giorno 4",
      "subtitle": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Merzouga",
      "desc": "Attraversamento del Medio Atlante e Valle dello Ziz verso il campo tendato a Merzouga."
    },
    {
      "number": 5,
      "name": "Regione di Merzouga",
      "day": "Giorno 5",
      "subtitle": "Esplorazione di Merzouga – Nomadi – Khamlia – Oasi",
      "desc": "Tour in 4×4 alla scoperta di famiglie nomadi, villaggio Gnawa e dune di Merzouga."
    },
    {
      "number": 6,
      "name": "Merzouga al Dades",
      "day": "Giorno 6",
      "subtitle": "Merzouga – Rissani – Erfoud – Todra – Valle del Dades",
      "desc": "Alba sulle dune, souk di Rissani, passeggiata nelle Gole del Todra e notte nel Dades."
    },
    {
      "number": 7,
      "name": "Valle del Dades a Marrakech",
      "day": "Giorno 7",
      "subtitle": "Dades – Valle delle Rose – Skoura – Ait Ben Haddou – Marrakech",
      "desc": "Visita di Ait Ben Haddou e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_1.webp",
      "cap": "Medina di Tangeri",
      "alt": "Case bianche mediterranee della medina di Tangeri affacciate sulla baia"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_10.webp",
      "cap": "Souk di Marrakech",
      "alt": "Vivaci vicoli del souk di Marrakech pieni di spezie, tappeti e lanterne"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_2.webp",
      "cap": "Chefchaouen blu",
      "alt": "Sentiero della medina dipinto d'azzurro con vasi di fiori a Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_3.webp",
      "cap": "Arco di Volubilis",
      "alt": "Antico arco di trionfo e colonne romane presso il sito UNESCO di Volubilis"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_4.webp",
      "cap": "Bab Mansour",
      "alt": "Maestosa porta di Bab Mansour nella medina imperiale di Meknes"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_5.webp",
      "cap": "Conciatori di Fes",
      "alt": "Conciatori che lavorano con tinture naturali nelle vasche di pietra a Fes"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_6.webp",
      "cap": "Foresta di Azrou",
      "alt": "Foresta di cedri di Azrou nel Medio Atlante con le scimmie barbaresche"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_7.webp",
      "cap": "Dune dell'Erg Chebbi",
      "alt": "Carovana di dromedari guidata tra le dune ondulate dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_8.webp",
      "cap": "Gole del Todra",
      "alt": "Pareti del canyon di calcare rosso delle Gole del Todra con ruscello"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar fortificato in argilla di Ait Ben Haddou illuminato dalla luce pomeridiana"
    },
    {
      "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/hero_2.webp",
      "cap": "Valle di Chefchaouen",
      "alt": "Chefchaouen incastonata nella vallata tra i picchi rocciosi dei monti del Rif"
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

// =============================================================
// Tour 53: 8-day-essential-morocco-tour-from-marrakech
// =============================================================
const tour53_es = {
  slug: "8-day-essential-morocco-tour-from-marrakech",
  title: "Tour de 8 Días por Marruecos de Marrakech a Tánger | Sahara Star Tours",
  shortTitle: "Tour de 8 Días de Marrakech a Tánger",
  description: "Circuito privado de 8 días desde Marrakech a Tánger explorando Ait Ben Haddou, Valle del Dades, dos días en Merzouga, Fez con guía local y Chefchaouen.",
  aboutHtml: "<p>Este tour privado de 8 días desde Marrakech hasta Tánger es una de las grandes rutas de Marruecos, diseñada para recorrer el país en profundidad. Comenzando en Marrakech, cruzará el Alto Atlas y visitará las históricas Kasbahs de Telouet y Ait Ben Haddou. Explorará los desfiladeros del Dades y del Todra antes de disfrutar de dos días completos en Merzouga (con noche en campamento de lujo y encuentro con nómadas). Culminará visitando la ciudad imperial de Fez con guía local, las ruinas de Volubilis y la perla azul de Chefchaouen antes de llegar a Tánger.</p>",
  duration: "8 Días / 7 Noches",
  price: "Desde $990/persona",
  startingFrom: "Marrakech",
  highlights: [
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO",
    "Ruta panorámica a través de las montañas del Alto Atlas",
    "Medina de Fez y lugares culturales históricos",
    "Chefchaouen, la ciudad azul en las montañas del Rif"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local profesional de habla hispana",
    "Combustible, peajes y tasas de transporte",
    "Alojamiento en riads seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y traslados marítimos/aéreos no especificados",
    "Entradas opcionales a estudios o monumentos",
    "Propinas y gastos personales"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Marrakech – Alto Atlas – Kasbah de Telouet – Kasbah Ait Ben Haddou – Ouarzazate",
      "content": "Su viaje de 8 días comienza temprano con la recogida en su alojamiento o en el aeropuerto de Marrakech. Conducirá a través del paso de Tizi N'Tichka (2.260 m) en el Alto Atlas, contemplando aldeas bereberes tradicionales y vistas panorámicas. Visitará la histórica Kasbah de Telouet y continuará hacia la famosa Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO y escenario de famosas películas como Gladiator y La Momia. Por la tarde llegará a Ouarzazate, conocida como 'la puerta del desierto'. Cena y alojamiento en hotel."
    },
    {
      "day": "Día 2",
      "title": "Ouarzazate – Palmeral de Skoura – Kasbah Amridil – Valle de las Rosas – Valle del Dades",
      "content": "Tras el desayuno explorará Ouarzazate, visitando los estudios de cine Atlas y la Kasbah Taourirt. Luego viajará hacia el este para visitar la Kasbah Amridil rodeada por el palmeral de Skoura. Continuará hacia Kalaat M'Gouna en el Valle de las Rosas (famoso por sus cosméticos y agua de rosas artesanal) y llegará al Valle del Dades, deteniéndose ante las singulares formaciones de los 'dedos de mono'. Cena y noche en un riad en Boumalne Dades."
    },
    {
      "day": "Día 3",
      "title": "Boumalne Dades – Gargantas del Todra – Erfoud – Desierto de Merzouga – Campamento de lujo",
      "content": "Tras el desayuno continuará hacia las majestuosas Gargantas del Todra, un espectacular cañón de acantilados rojos verticales. Podrá pasear por el desfiladero y disfrutar de tiempo para almorzar. Seguirá viaje pasando por los palmerales de Touroug y Tinjdad hasta llegar a Merzouga. Por la tarde montará en camello para cruzar las dunas de Erg Chebbi al atardecer y llegar a su campamento de lujo con cena tradicional y tambores bereberes bajo el cielo estrellado."
    },
    {
      "day": "Día 4",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Madrugará para presenciar el amanecer sobre las dunas doradas seguido del desayuno. Regresará en camello o 4×4 a Merzouga para una jornada en todoterreno: visitará antiguas minas de kohl, compartirá un té con familias nómadas bereberes en sus jaimas tradicionales y asistirá a una actuación de música gnawa en el pueblo de Khamlia. Tiempo para almorzar (recomendamos la tradicional pizza bereber). Por la tarde paseará por el palmeral y visitará el lago estacional de Merzouga. Cena y alojamiento en hotel frente a las dunas."
    },
    {
      "day": "Día 5",
      "title": "Dunas de Merzouga – Erfoud – Midelt – Bosque de Cedros – Ifrane – Fez",
      "content": "Tras el desayuno visitará la histórica Rissani y recorrerá su animado zoco tradicional. Continuará hacia Erfoud para conocer talleres de fósiles y ascenderá por el cañón del Valle del Ziz hacia Midelt para almorzar. Luego atravesará el Bosque de Cedros de Azrou para observar a los macacos de Berbería y visitará Ifrane, la 'Suiza de Marruecos'. Finalmente llegará a Fez por la tarde con traslado directo a su riad tradicional."
    },
    {
      "day": "Día 6",
      "title": "Visita guiada de Fez con guía local",
      "content": "Día completo dedicado a explorar la fascinante medina de Fez el-Bali con un guía oficial local. Visitará el Palacio Real con sus puertas doradas, el barrio judío (Mellah), la histórica Madrasa Al Attarine, la Universidad Al Quaraouiyine y las famosas curtidurías de Chouara. Tarde libre para descansar en el riad."
    },
    {
      "day": "Día 7",
      "title": "Fez – Mequinez – Ruinas de Volubilis – Chefchaouen",
      "content": "Tras el desayuno partirá hacia Mequinez para visitar Bab Mansour, los graneros y el mausoleo de Moulay Ismail. Continuará hacia las ruinas romanas de Volubilis (Patrimonio de la Humanidad por la UNESCO) para admirar sus mosaicos y basílicas. Luego ascenderá a través de Ouazzane hacia las montañas del Rif hasta alcanzar la encantadora Chefchaouen, la ciudad azul. Cena y alojamiento en un riad tradicional."
    },
    {
      "day": "Día 8",
      "title": "Chefchaouen – Traslado al aeropuerto de Tánger",
      "content": "Tras el desayuno dispondrá de tiempo libre para pasear por las fotogénicas callejuelas azules de Chefchaouen antes de emprender el viaje a través de las montañas del Rif hacia Tánger, donde su chófer le trasladará al aeropuerto o puerto. Fin del tour de 8 días de Marrakech a Tánger."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Día 1",
      "subtitle": "Marrakech – Alto Atlas – Telouet – Ait Ben Haddou – Ouarzazate",
      "desc": "Salida de Marrakech por el Tizi N'Tichka, Kasbah de Telouet y Ait Ben Haddou hacia Ouarzazate."
    },
    {
      "number": 2,
      "name": "Ouarzazate",
      "day": "Día 2",
      "subtitle": "Ouarzazate – Skoura – Kasbah Amridil – Valle del Dades",
      "desc": "Estudios de cine, palmeral de Skoura, Kasbah Amridil y noche en el Valle del Dades."
    },
    {
      "number": 3,
      "name": "Boumalne Dades",
      "day": "Día 3",
      "subtitle": "Dades – Gargantas del Todra – Merzouga – Campamento de lujo",
      "desc": "Paseo por las Gargantas del Todra, llegada a Erg Chebbi y noche en campamento de lujo."
    },
    {
      "number": 4,
      "name": "Región de Merzouga",
      "day": "Día 4",
      "subtitle": "Exploración de Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Día en 4×4 conociendo familias nómadas, música gnawa y dunas de Erg Chebbi."
    },
    {
      "number": 5,
      "name": "Merzouga a Fez",
      "day": "Día 5",
      "subtitle": "Merzouga – Erfoud – Valle del Ziz – Ifrane – Fez",
      "desc": "Viaje a través del Valle del Ziz, bosque de cedros e Ifrane con llegada a Fez."
    },
    {
      "number": 6,
      "name": "Visita de Fez",
      "day": "Día 6",
      "subtitle": "Visita guiada por la medina de Fez",
      "desc": "Recorrido guiado oficial por palacios, madrasas y curtidurías de Fez."
    },
    {
      "number": 7,
      "name": "Fez a Chefchaouen",
      "day": "Día 7",
      "subtitle": "Fez – Mequinez – Volubilis – Chefchaouen",
      "desc": "Mequinez imperial, ruinas romanas de Volubilis y llegada a la ciudad azul de Chefchaouen."
    },
    {
      "number": 8,
      "name": "Chefchaouen a Tánger",
      "day": "Día 8",
      "subtitle": "Chefchaouen – Traslado al aeropuerto de Tánger",
      "desc": "Paseo matinal por Chefchaouen y traslado al aeropuerto o puerto de Tánger."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_3.webp",
      "cap": "Paso Tizi N'Tichka",
      "alt": "Carretera de montaña del Alto Atlas serpenteando hacia el paso Tizi n'Tichka"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_4.webp",
      "cap": "Kasbah de Telouet",
      "alt": "Histórica Kasbah de Telouet con intrincados mosaicos moriscos de zellij y estuco tallado"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_5.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Pueblo fortificado de arcilla de Ait Ben Haddou junto al cauce del río bordeado de palmeras"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_6.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Muros fortificados de adobe y ventanas decorativas de la Kasbah Taourirt en Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_7.webp",
      "cap": "Caravana en Erg Chebbi",
      "alt": "Viaje en caravana de camellos a través de las vastas arenas doradas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_8.webp",
      "cap": "Curtiduría Chouara",
      "alt": "Cubas de piedra y curtidores de la curtiduría de Chouara en la histórica medina de Fez"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_9.webp",
      "cap": "Chefchaouen azul",
      "alt": "Estrecho callejón azul con escaleras de piedra en la ciudad montañosa de Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/hero_2.webp",
      "cap": "Amanecer en Merzouga",
      "alt": "Amanecer panorámico a través de las altas dunas de arena de Merzouga en el Sahara"
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
      "answer": "La recogida se realiza en Marrakech (alojamiento o aeropuerto) y el circuito concluye en Tánger con traslado a su riad, puerto o aeropuerto."
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
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados muy recomendables para combinar el sur desértico, las ciudades históricas y el norte montañoso."
    }
  ]
};

const tour53_it = {
  slug: "8-day-essential-morocco-tour-from-marrakech",
  title: "Tour di 8 Giorni da Marrakech a Tangeri | Sahara Star Tours",
  shortTitle: "Tour di 8 Giorni da Marrakech a Tangeri",
  description: "Circuito privato di 8 giorni da Marrakech a Tangeri attraverso Ait Ben Haddou, Valle del Dades, due giornate a Merzouga, Fes con guida locale e Chefchaouen.",
  aboutHtml: "<p>Questo tour privato di 8 giorni da Marrakech a Tangeri è una delle traversate più affascinanti del Marocco, creata per esplorare il paese senza tralasciare nulla. Partendo da Marrakech, valicherai l'Alto Atlante visitando le storiche Kasbah di Telouet e Ait Ben Haddou. Attraverserai le gole del Dades e del Todra fino al deserto di Merzouga con due notti magiche (in campo tendato di lusso e con le famiglie nomadi), per poi scoprire la medina millenaria di Fes con guida locale, le rovine romane di Volubilis e i vicoli azzurri di Chefchaouen prima di raggiungere Tangeri.</p>",
  duration: "8 Giorni / 7 Notti",
  price: "Da $990/persona",
  startingFrom: "Marrakech",
  highlights: [
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Kasbah di Ait Ben Haddou, sito UNESCO leggendario",
    "Itinerario panoramico attraverso le montagne dell'Alto Atlante",
    "Medina di Fes e tesori culturali storici",
    "Chefchaouen, la città blu tra le montagne del Rif"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale professionista per l'intero viaggio",
    "Carburante, pedaggi e spese operative del veicolo",
    "Sistemazione in riad selezionati e campo tendato di lusso",
    "Colazioni e cene incluse come da itinerario",
    "Trekking in dromedario tra le dune con assistenza completa"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei e trasferimenti marittimi/aeroportuali non specificati",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e spese personali"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Marrakech – Alto Atlante – Kasbah di Telouet – Kasbah Ait Ben Haddou – Ouarzazate",
      "content": "Partenza al mattino presto dal tuo alloggio o dall'aeroporto di Marrakech. Attraverserai l'Alto Atlante lungo il panoramico valico del Tizi N'Tichka (2.260 m). Visiterai la storica Kasbah di Telouet e la celebre Kasbah di Ait Ben Haddou, patrimonio UNESCO set di film come Il Gladiatore e La Mummia. Nel tardo pomeriggio arriverai a Ouarzazate, la 'porta del deserto'. Cena e pernottamento in hotel."
    },
    {
      "day": "Giorno 2",
      "title": "Ouarzazate – Palmeto di Skoura – Kasbah Amridil – Valle delle Rose – Valle del Dades",
      "content": "Dopo la prima colazione visiterai gli studi cinematografici e la Kasbah Taourirt a Ouarzazate. Proseguirai verso est visitando la Kasbah Amridil nel palmeto di Skoura e attraverserai Kalaat M'Gouna nella profumata Valle delle Rose. Raggiungerai infine la Valle del Dades, ammirando le singolari rocce delle 'dita di scimmia'. Cena e pernottamento in riad a Boumalne Dades."
    },
    {
      "day": "Giorno 3",
      "title": "Boumalne Dades – Gole del Todra – Erfoud – Deserto di Merzouga – Campo di lusso",
      "content": "Dopo la prima colazione ammirerai le imponenti Gole del Todra, passeggiando tra gigantesche falesie rocciose verticali. Tempo per il pranzo. Proseguirai attraverso i palmeti di Touroug e Tinjdad fino a Merzouga. Nel tardo pomeriggio salirai a dorso di dromedario per ammirare il tramonto tra le dune dell'Erg Chebbi e raggiungere il campo tendato di lusso con cena tipica berbera e canti attorno al falò."
    },
    {
      "day": "Giorno 4",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Sveglia all'alba per contemplare lo spettacolo del sole che sorge sulle dune, seguita dalla prima colazione. Rientro in dromedario o in 4×4 per una giornata in fuoristrada: visiterai antiche miniere di kohl, sosterai presso una famiglia nomade berbera per un tè alla menta e assisterai a una performance di musica gnawa a Khamlia. Nel pomeriggio passeggerai nell'oasi e ammirerai il lago di Merzouga. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 5",
      "title": "Dune di Merzouga – Erfoud – Midelt – Foresta di Cedri – Ifrane – Fes",
      "content": "Dopo la prima colazione visiterai la storica Rissani e il suo vivace mercato tradizionale. Risalirai la Valle dello Ziz verso Midelt per il pranzo libero e attraverserai la Foresta di Cedri di Azrou con le scimmie barbaresche. Dopo una sosta nella cittadina alpina di Ifrane, giungerai a Fes nel tardo pomeriggio con trasferimento al tuo riad."
    },
    {
      "day": "Giorno 6",
      "title": "Visita guidata di Fes con guida locale",
      "content": "Intera giornata dedicata alla visita guidata dell'antica medina di Fes el-Bali con una guida ufficiale locale. Visiterai il Palazzo Reale, il quartiere ebraico del Mellah, la Madrasa Al Attarine, l'Università Al Quaraouiyine e le celebri concerie di Chouara. Pomeriggio libero per rilassarsi in riad."
    },
    {
      "day": "Giorno 7",
      "title": "Fes – Meknes – Rovine di Volubilis – Chefchaouen",
      "content": "Dopo la prima colazione partirai per Meknes per ammirare Bab Mansour e i granai reali. Proseguirai per il sito archeologico di Volubilis (patrimonio UNESCO) per ammirare i suoi raffinati mosaici romani. Attraverserai poi i rilievi del Rif fino a raggiungere la splendida Chefchaouen, la città blu. Cena e pernottamento in un caratteristico riad."
    },
    {
      "day": "Giorno 8",
      "title": "Chefchaouen – Trasferimento all'aeroporto di Tangeri",
      "content": "Dopo la prima colazione avrai tempo a disposizione per passeggiare tra i vicoli azzurri di Chefchaouen prima di viaggiare verso Tangeri, dove l'autista ti accompagnerà all'aeroporto o al porto. Conclusione del tour di 8 giorni da Marrakech a Tangeri."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Giorno 1",
      "subtitle": "Marrakech – Alto Atlante – Telouet – Ait Ben Haddou – Ouarzazate",
      "desc": "Partenza da Marrakech attraverso il Tizi N'Tichka, Telouet e Ait Ben Haddou verso Ouarzazate."
    },
    {
      "number": 2,
      "name": "Ouarzazate",
      "day": "Giorno 2",
      "subtitle": "Ouarzazate – Skoura – Kasbah Amridil – Valle del Dades",
      "desc": "Studi cinematografici, palmeto di Skoura, Kasbah Amridil e notte nel Dades."
    },
    {
      "number": 3,
      "name": "Boumalne Dades",
      "day": "Giorno 3",
      "subtitle": "Dades – Gole del Todra – Merzouga – Campo di lusso",
      "desc": "Passeggiata nelle Gole del Todra, arrivo all'Erg Chebbi e notte in campo tendato di lusso."
    },
    {
      "number": 4,
      "name": "Regione di Merzouga",
      "day": "Giorno 4",
      "subtitle": "Esplorazione di Merzouga – Nomadi – Khamlia – Oasi",
      "desc": "Tour in 4×4 alla scoperta di famiglie nomadi, cultura Gnawa e dune di Merzouga."
    },
    {
      "number": 5,
      "name": "Merzouga a Fes",
      "day": "Giorno 5",
      "subtitle": "Merzouga – Erfoud – Valle dello Ziz – Ifrane – Fes",
      "desc": "Viaggio attraverso la Valle dello Ziz, foresta di cedri e Ifrane con arrivo a Fes."
    },
    {
      "number": 6,
      "name": "Visita di Fes",
      "day": "Giorno 6",
      "subtitle": "Tour guidato della medina storica di Fes",
      "desc": "Visita con guida ufficiale a monumenti storici, madrasse e concerie di Fes."
    },
    {
      "number": 7,
      "name": "Fes a Chefchaouen",
      "day": "Giorno 7",
      "subtitle": "Fes – Meknes – Volubilis – Chefchaouen",
      "desc": "Meknes imperiale, rovine romane di Volubilis e arrivo a Chefchaouen."
    },
    {
      "number": 8,
      "name": "Chefchaouen a Tangeri",
      "day": "Giorno 8",
      "subtitle": "Chefchaouen – Trasferimento a Tangeri",
      "desc": "Passeggiata a Chefchaouen e trasferimento al porto o aeroporto di Tangeri."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_3.webp",
      "cap": "Passo Tizi N'Tichka",
      "alt": "Strada panoramica dell'Alto Atlante che sale verso il passo Tizi n'Tichka"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_4.webp",
      "cap": "Kasbah di Telouet",
      "alt": "Storica Kasbah di Telouet con intricati mosaici moreschi in zellij e stucchi"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_5.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Villaggio fortificato in argilla di Ait Ben Haddou accanto al fiume bordato di palme"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_6.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Mura fortificate in argilla e finestre decorative della Kasbah Taourirt a Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_7.webp",
      "cap": "Carovana all'Erg Chebbi",
      "alt": "Viaggio in carovana di dromedari attraverso le vaste sabbie dorate dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_8.webp",
      "cap": "Conceria Chouara",
      "alt": "Vasche in pietra e conciatori della conceria Chouara nella storica medina di Fes"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_9.webp",
      "cap": "Chefchaouen blu",
      "alt": "Stretto vicolo blu con gradini in pietra nella cittadina montana di Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/hero_2.webp",
      "cap": "Alba a Merzouga",
      "alt": "Alba panoramica sulle alte dune di sabbia di Merzouga nel Sahara"
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
      "answer": "Il viaggio inizia al tuo riad o aeroporto a Marrakech e termina a Tangeri con trasferimento al porto o all'aeroporto."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Utilizziamo veicoli fuoristrada 4×4 o moderni minivan privati con aria condizionata e capiente bagagliaio per viaggiare in assoluto comfort."
    },
    {
      "question": "È possibile soddisfare particolari esigenze dietetiche?",
      "answer": "Certamente: piatti vegetariani, senza glutine o altre preferenze possono essere concordati segnalandolo al momento della prenotazione."
    },
    {
      "question": "Questo tour è indicato per ogni fascia d'età?",
      "answer": "Sì, è un tour perfetto per famiglie con bambini, coppie e viaggiatori maturi grazie a un ritmo di viaggio ben dosato e soste regolari."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno offrono un clima meraviglioso per visitare le regioni del sud, le città storiche e il nord montuoso."
    }
  ]
};

// =============================================================
// Tour 54: fes-marrakech-3-days-desert-tour
// =============================================================
const tour54_es = {
  slug: "fes-marrakech-3-days-desert-tour",
  title: "Tour de 3 Días por el Desierto de Fez a Marrakech | Sahara Star Tours",
  shortTitle: "Tour de 3 Días de Fez a Marrakech",
  description: "Ruta exprés de 3 días desde Fez a Marrakech a través de las dunas de Merzouga, las Gargantas del Todra y la famosa Kasbah de Ait Ben Haddou.",
  aboutHtml: "<p>Este tour privado de 3 días desde Fez a Marrakech es la forma más emocionante y rápida de conectar dos de las ciudades imperiales más emblemáticas de Marruecos atravesando el corazón del desierto. Desde los bosques de cedros del Medio Atlas y el cañón del Ziz, se adentrará en el mar de dunas doradas de Erg Chebbi con paseo en camello al atardecer y velada bereber en campamento de lujo, continuando al día siguiente por las impresionantes Gargantas del Todra, el Valle del Dades y la legendaria Kasbah de Ait Ben Haddou antes de cruzar el Alto Atlas hasta Marrakech.</p>",
  duration: "3 Días / 2 Noches",
  price: "Desde $390/persona",
  startingFrom: "Fez",
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
    "Chófer/guía local profesional de habla hispana",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riad en Dades y campamento de lujo en Erg Chebbi",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos aeroportuarios",
    "Entradas a monumentos o estudios de cine",
    "Propinas y gastos personales"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Su tour de 3 días por el desierto de Fez a Marrakech comienza temprano con la recogida en su alojamiento en Fez. Viajará hacia el sur pasando por Imouzzer hasta Ifrane, conocida como 'la Suiza de Marruecos' por su arquitectura alpina. Continuará hacia el Bosque de Cedros de Azrou para observar a los macacos de Berbería en libertad. Tras el almuerzo en Midelt, descenderá por el cañón y los palmerales del Valle del Ziz. Por la tarde llegará a Merzouga, donde montará en camello para contemplar la puesta de sol sobre las dunas de Erg Chebbi y llegar a su campamento de lujo con cena tradicional y música de tambores bereberes bajo las estrellas."
    },
    {
      "day": "Día 2",
      "title": "Desierto de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "content": "Amanecer temprano sobre las dunas seguido del desayuno. Regresará en camello a Merzouga para reencontrarse con su conductor. Visitará Rissani con su animado zoco tradicional y continuará por Erfoud hacia las imponentes Gargantas del Todra, un cañón de colosales muros rojizos ideal para pasear a pie. Tiempo para almorzar. Por la tarde llegará al Valle del Dades, admirando las curiosas formaciones de los 'dedos de mono'. Cena y noche en riad en Dades."
    },
    {
      "day": "Día 3",
      "title": "Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      "content": "En la última jornada viajará a través del Valle de las Rosas en Kalaat M'Gouna y el palmeral de Skoura hasta Ouarzazate, donde podrá visitar los estudios cinematográficos. Proseguirá hacia la famosa Kasbah de Ait Ben Haddou, pueblo fortificado de adobe declarado Patrimonio de la Humanidad por la UNESCO y escenario de grandes películas como Gladiator y La Momia. Por la tarde cruzará el Alto Atlas a través del puerto de Tizi N'Tichka (2.260 m) con paradas panorámicas, llegando a Marrakech donde concluirá el circuito con traslado a su riad o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fez",
      "day": "Día 1",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga",
      "desc": "Salida de Fez por el Medio Atlas y Valle del Ziz hacia el campamento de Erg Chebbi."
    },
    {
      "number": 2,
      "name": "Merzouga al Dades",
      "day": "Día 2",
      "subtitle": "Merzouga – Rissani – Erfoud – Todra – Valle del Dades",
      "desc": "Amanecer en las dunas, zoco de Rissani, paseo por las Gargantas del Todra y noche en Dades."
    },
    {
      "number": 3,
      "name": "Valle del Dades a Marrakech",
      "day": "Día 3",
      "subtitle": "Dades – Valle de las Rosas – Skoura – Ait Ben Haddou – Marrakech",
      "desc": "Visita a Ait Ben Haddou y cruce panorámico del Alto Atlas hasta Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_1.webp",
      "cap": "Curtiduría Chouara",
      "alt": "Curtidores de cuero en las históricas cubas de tinte de la curtiduría de Chouara en Fez el-Bali"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_10.webp",
      "cap": "Plaza Jemaa el-Fna",
      "alt": "Plaza Jemaa el-Fna en Marrakech al atardecer con puestos de comida iluminados"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_2.webp",
      "cap": "Chalets de Ifrane",
      "alt": "Chalets de estilo alpino y arquitectura de piedra en la ciudad de montaña de Ifrane"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_3.webp",
      "cap": "Macaco de Azrou",
      "alt": "Amigable macaco de Berbería sentado en una rama de cedro en el bosque de Azrou"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_4.webp",
      "cap": "Oasis del Ziz",
      "alt": "Exuberante oasis de palmeras datileras que bordea el río a través de la garganta del Ziz"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_5.webp",
      "cap": "Caravana en Erg Chebbi",
      "alt": "Caravana de camellos atravesando la cresta dorada de las dunas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_6.webp",
      "cap": "Música bereber",
      "alt": "Actuación tradicional de tambores bereberes alrededor de una fogata en el desierto bajo las estrellas"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_7.webp",
      "cap": "Gargantas del Todra",
      "alt": "Paredes de roca de cañón rojo de las Gargantas del Todra sobre el camino del valle"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_8.webp",
      "cap": "Carretera del Dades",
      "alt": "Sinuosa carretera de montaña de las Gargantas del Dades con curvas escénicas"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar fortificado de adobe de Ait Ben Haddou contra un cielo azul brillante"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/hero_2.webp",
      "cap": "Dunas de Merzouga",
      "alt": "Vastas dunas de arena dorada de Erg Chebbi brillando bajo la cálida luz matutina"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia completamente privada: el vehículo, conductor y programa están reservados en exclusiva para su grupo."
    },
    {
      "question": "¿Cuánto tiempo dura el paseo en camello y qué alternativas existen?",
      "answer": "El paseo en camello suele durar entre 40 minutos y 1,5 horas. Como alternativa, se puede organizar el traslado directo en vehículo 4×4 sin coste adicional."
    },
    {
      "question": "¿La tienda del campamento en el desierto es privada?",
      "answer": "Sí, el campamento en el desierto cuenta con tiendas de campaña privadas de lujo con baño incorporado, agua caliente, camas de verdad y electricidad."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "Le recogeremos en su alojamiento o aeropuerto en Fez y el tour concluirá en Marrakech con traslado a su riad o al aeropuerto."
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
      "answer": "Sí, es perfectamente adecuado para todas las edades, con paradas regulares para descansar a lo largo de las rutas escénicas."
    },
    {
      "question": "¿Cuál es la mejor época del año para realizar este tour?",
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados muy recomendables para cruzar el Atlas y disfrutar del Sahara."
    }
  ]
};

const tour54_it = {
  slug: "fes-marrakech-3-days-desert-tour",
  title: "Tour di 3 Giorni da Fes a Marrakech nel Deserto | Sahara Star Tours",
  shortTitle: "Tour di 3 Giorni da Fes a Marrakech nel Deserto",
  description: "Circuito espresso privato di 3 giorni da Fes a Marrakech attraverso le maestose dune di Merzouga, le Gole del Todra e la Kasbah di Ait Ben Haddou.",
  aboutHtml: "<p>Questo tour privato di 3 giorni da Fes a Marrakech è l'itinerario perfetto per viaggiare tra le due celebri città imperiali scoprendo la magia del Sahara in tempi contenuti. Dalla foresta di cedri del Medio Atlante e dalla Valle dello Ziz, ti immergerai tra le dune dell'Erg Chebbi con passeggiata in dromedario e notte in accampamento di lusso, proseguendo per le spettacolari Gole del Todra e la leggendaria Kasbah di Ait Ben Haddou fino a Marrakech.</p>",
  duration: "3 Giorni / 2 Notti",
  price: "Da $390/persona",
  startingFrom: "Fes",
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
    "Autista/guida locale professionista per l'intero viaggio",
    "Carburante, pedaggi e spese operative del veicolo",
    "Sistemazione in riad nel Dades e campo tendato di lusso a Merzouga",
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
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      "content": "Il tuo tour di 3 giorni inizia al mattino presto con il prelievo dal tuo alloggio a Fes. Attraverserai Imouzzer e Ifrane, la 'Svizzera del Marocco', prima di raggiungere la Foresta di Cedri di Azrou per osservare le scimmie barbaresche. Dopo il pranzo a Midelt, scenderai lungo le suggestive gole e gli infiniti palmeti della Valle dello Ziz. Nel pomeriggio raggiungerai le magnifiche dune dell'Erg Chebbi a Merzouga: salirai a dorso di dromedario per assistere al tramonto sul deserto e raggiungere l'accampamento di lusso con cena tipica berbera e canti attorno al falò sotto le stelle."
    },
    {
      "day": "Giorno 2",
      "title": "Deserto di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "content": "Sveglia all'alba per ammirare il sorgere del sole sulle dune, seguita dalla prima colazione. Rientro in dromedario a Merzouga per ritrovare l'autista. Visiterai Rissani con il suo tradizionale mercato locale e proseguirai per Erfoud verso le spettacolari Gole del Todra, camminando lungo il canyon tra pareti verticali di roccia calcarea alte oltre 300 metri. Pranzo e proseguimento verso la Valle del Dades, con sosta fotografica alle singolari 'dita di scimmia'. Cena e pernottamento in riad nel Dades."
    },
    {
      "day": "Giorno 3",
      "title": "Valle del Dades – Valle delle Rose – Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlante – Marrakech",
      "content": "Nell'ultima giornata viaggerai attraverso la Valle delle Rose e l'oasi di Skoura fino a Ouarzazate per visitare gli studi cinematografici. Visiterai quindi la celebre Kasbah di Ait Ben Haddou, villaggio fortificato patrimonio UNESCO celebre per Il Gladiatore e La Mummia. Nel pomeriggio risalirai il valico del Tizi N'Tichka (2.260 m) con spettacolari viste panoramiche sull'Alto Atlante, giungendo a Marrakech dove il tour si concluderà con il rientro al tuo alloggio o all'aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fes",
      "day": "Giorno 1",
      "subtitle": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Merzouga",
      "desc": "Partenza da Fes attraverso il Medio Atlante verso il campo tendato a Merzouga."
    },
    {
      "number": 2,
      "name": "Merzouga al Dades",
      "day": "Giorno 2",
      "subtitle": "Merzouga – Rissani – Erfoud – Todra – Valle del Dades",
      "desc": "Alba sulle dune, souk di Rissani, passeggiata nelle Gole del Todra e notte nel Dades."
    },
    {
      "number": 3,
      "name": "Valle del Dades a Marrakech",
      "day": "Giorno 3",
      "subtitle": "Dades – Valle delle Rose – Skoura – Ait Ben Haddou – Marrakech",
      "desc": "Visita di Ait Ben Haddou e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_1.webp",
      "cap": "Conceria Chouara",
      "alt": "Conciatori al lavoro nelle storiche vasche di tintura della conceria Chouara a Fes el-Bali"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_10.webp",
      "cap": "Piazza Jemaa el-Fna",
      "alt": "Piazza Jemaa el-Fna a Marrakech al tramonto con bancarelle illuminate"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_2.webp",
      "cap": "Chalet di Ifrane",
      "alt": "Chalet in stile alpino e architettura in pietra nella cittadina montana di Ifrane"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_3.webp",
      "cap": "Scimmia di Azrou",
      "alt": "Simpatica scimmia barbaresca seduta su un ramo di cedro nella foresta di Azrou"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_4.webp",
      "cap": "Oasi dello Ziz",
      "alt": "Lussureggiante oasi di palme da dattero lungo il fiume nella gola dello Ziz"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_5.webp",
      "cap": "Carovana all'Erg Chebbi",
      "alt": "Carovana di dromedari che attraversa il crinale dorato delle dune dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_6.webp",
      "cap": "Musica berbera",
      "alt": "Esibizione tradizionale di tamburi berberi attorno al falò nel deserto sotto le stelle"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_7.webp",
      "cap": "Gole del Todra",
      "alt": "Pareti del canyon di roccia rossa delle Gole del Todra che sovrastano la strada"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_8.webp",
      "cap": "Strada del Dades",
      "alt": "Strada panoramica di montagna delle Gole del Dades con tornanti scenografici"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar fortificato in mattoni crudi di Ait Ben Haddou sotto un cielo blu brillante"
    },
    {
      "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/hero_2.webp",
      "cap": "Dune di Merzouga",
      "alt": "Vaste dune di sabbia dorata dell'Erg Chebbi che risplendono nella luce calda del mattino"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, conducente e programma sono a uso esclusivo del tuo gruppo con la massima flessibilità."
    },
    {
      "question": "Quanto dura il percorso in dromedario e ci sono alternative?",
      "answer": "Il percorso dura circa 40-90 minuti. Se preferisci non cavalcare, è possibile organizzare il trasferimento diretto al campo in 4×4 senza alcun costo extra."
    },
    {
      "question": "La tenda nell'accampamento nel deserto è privata?",
      "answer": "Sì, l'accampamento di lusso dispone di ampie tende private con veri letti, bagno privato con wc e doccia calda."
    },
    {
      "question": "Dove avvengono la partenza e il termine del tour?",
      "answer": "Verremo a prenderti al tuo alloggio o aeroporto a Fes e ti riaccompagneremo al tuo alloggio o all'aeroporto Menara a Marrakech."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Il viaggio viene effettuato con veicoli fuoristrada 4×4 o moderni minivan con aria condizionata e capiente vano bagagli."
    },
    {
      "question": "È possibile soddisfare particolari esigenze dietetiche?",
      "answer": "Certamente: piatti vegetariani, vegani o senza glutine possono essere preparati senza problemi segnalandolo alla prenotazione."
    },
    {
      "question": "Il viaggio è comodo per viaggiatori di ogni età?",
      "answer": "Sì, l'itinerario è adatto a tutti i viaggiatori, con frequenti soste panoramiche per riposare lungo il percorso."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno offrono un clima meraviglioso sia sulle montagne che nel deserto del Sahara."
    }
  ]
};

// Execute saves
saveTour("7-day-morocco-tour-itinerary-from-fes", tour51_es, tour51_it);
saveTour("7-days-morocco-tour-itinerary-from-tangier-one-week", tour52_es, tour52_it);
saveTour("8-day-essential-morocco-tour-from-marrakech", tour53_es, tour53_it);
saveTour("fes-marrakech-3-days-desert-tour", tour54_es, tour54_it);
