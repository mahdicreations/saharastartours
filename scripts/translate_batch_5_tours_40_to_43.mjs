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
// Tour 40: 4-day-morocco-desert-tour-from-fes-to-marrakech
// =============================================================
const tour40_es = {
  slug: "4-day-morocco-desert-tour-from-fes-to-marrakech",
  title: "Tour de 4 Días de Fez a Marrakech por el Desierto de Merzouga | Sahara Star Tours",
  shortTitle: "Tour de 4 Días de Fez a Marrakech por el Desierto",
  description: "Viaje de Fez a Marrakech en 4 días cruzando el Medio Atlas, las dunas de Merzouga, las Gargantas del Todra y del Dades, y la mítica Kasbah de Ait Ben Haddou.",
  aboutHtml: "<p>Este tour privado de 4 días desde Fez hasta Marrakech es una de las travesías más completas para unir las dos ciudades imperiales más famosas de Marruecos a través del gran sur. Desde los bosques de cedros del Medio Atlas y el cañón del Valle del Ziz, se adentrará en el Sahara en Merzouga con paseo en camello y noche en campamento de lujo. Continuará a través de las imponentes Gargantas del Todra, el Valle del Dades y la legendaria Kasbah de Ait Ben Haddou antes de cruzar el Alto Atlas para culminar en la vibrante Marrakech.</p>",
  duration: "4 Días / 3 Noches",
  startingFrom: "Fez",
  price: "Desde $520/persona",
  highlights: [
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Noche en campamento en el desierto con cena y desayuno",
    "Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO",
    "Ruta panorámica a través de las montañas del Alto Atlas",
    "Medina de Fez y lugares históricos y culturales"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local experimentado y traslados privados",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riads/hoteles seleccionados y campamento de lujo",
    "Desayunos y cenas incluidas según el itinerario",
    "Paseo en camello y estancia en campamento en el desierto"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y servicios de aeropuerto no especificados",
    "Gastos personales y actividades opcionales",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Su tour de 4 días por el desierto de Fez a Marrakech comienza temprano con la recogida en su alojamiento o en el aeropuerto de Fez. Viajará hacia el sur a través de Imouzzer para visitar Ifrane, conocida como 'la Suiza de Marruecos' por su arquitectura alpina y su clima fresco. Continuará hacia el Bosque de Cedros de Azrou para observar a los macacos de Berbería en libertad. Tras el almuerzo en Midelt, cruzará el puerto de Tizi N'Tilghmt y descenderá a lo largo de las gargantas y palmerales del Valle del Ziz. Por la tarde llegará a Merzouga, donde montará en camello para adentrarse en las majestuosas dunas de Erg Chebbi, admirar la puesta de sol y llegar a su campamento de lujo con cena tradicional y música de tambores bereberes bajo las estrellas."
    },
    {
      "day": "Día 2",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Amanecer temprano sobre las dunas para contemplar los primeros rayos de sol en el desierto. Tras el desayuno, regresará en camello para reunirse con su conductor y dedicar el día a explorar los secretos de Merzouga en 4×4. Visitará antiguas minas de kohl, compartirá un té con familias nómadas bereberes en sus tiendas tradicionales y asistirá a una actuación de música y danza gnawa en el pueblo de Khamlia. Tiempo libre para almorzar (recomendamos probar la pizza bereber 'madfouna'). Por la tarde paseará por un relajante palmeral y visitará el lago estacional de Merzouga. Cena y alojamiento en un confortable hotel frente a las dunas."
    },
    {
      "day": "Día 3",
      "title": "Desierto de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "content": "Tras el desayuno, partirá rumbo a Rissani, la histórica capital del Tafilalet con su vibrante zoco tradicional. Continuará hacia Erfoud para visitar talleres de mármol fosilizado y seguirá por los palmerales de Touroug y Tinjdad hasta alcanzar las imponentes Gargantas del Todra, un espectacular cañón de paredes rojizas verticales de más de 300 metros de altura, ideal para caminar. Tiempo para almorzar. Luego continuará hacia el Valle del Dades, deteniéndose ante las singulares formaciones rocosas de los 'dedos de mono' y en miradores panorámicos sobre el valle. Cena y noche en hotel en Dades."
    },
    {
      "day": "Día 4",
      "title": "Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlas – Marrakech",
      "content": "En la última jornada viajará a Kalaat M'Gouna en el corazón del Valle de las Rosas, famoso por sus cosméticos y agua de rosas artesanal. Proseguirá por el palmeral de Skoura hacia Ouarzazate, donde visitará los afamados estudios de cine. A continuación explorará la extraordinaria Kasbah de Ait Ben Haddou, fortaleza de adobe declarada Patrimonio de la Humanidad por la UNESCO y escenario de películas como Gladiator, Lawrence de Arabia y Juego de Tronos. Por la tarde cruzará las montañas del Alto Atlas a través del puerto de Tizi N'Tichka (2.260 m) con paradas panorámicas antes de llegar a Marrakech, donde concluirá el tour con traslado a su riad o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fez",
      "day": "Día 1",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga",
      "desc": "Salida de Fez por el Medio Atlas y Valle del Ziz hacia el campamento de Erg Chebbi en Merzouga."
    },
    {
      "number": 2,
      "name": "Región de Merzouga",
      "day": "Día 2",
      "subtitle": "Exploración de Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Recorrido en 4×4 conociendo nómadas, música gnawa en Khamlia y paisajes desérticos de Merzouga."
    },
    {
      "number": 3,
      "name": "Merzouga al Dades",
      "day": "Día 3",
      "subtitle": "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "desc": "Visita del zoco de Rissani, talleres de fósiles y paseo por las Gargantas del Todra hacia el Valle del Dades."
    },
    {
      "number": 4,
      "name": "Valle del Dades a Marrakech",
      "day": "Día 4",
      "subtitle": "Dades – Valle de las Rosas – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
      "desc": "Ruta por el Valle de las Rosas, Kasbah Ait Ben Haddou y cruce del Alto Atlas hasta Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_1.webp",
      "cap": "Zoco de Fez",
      "alt": "Farolillos de cobre artesanales y objetos de latón en el zoco de la medina de Fez"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_10.webp",
      "cap": "Gargantas del Todra",
      "alt": "Imponentes acantilados verticales de roca caliza roja en las Gargantas del Todra"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_3.webp",
      "cap": "Caravana en Erg Chebbi",
      "alt": "Caravana de camellos avanzando por la cresta de las dunas de Erg Chebbi al atardecer"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_4.webp",
      "cap": "Valle del Dades",
      "alt": "Histórica kasbah de tierra junto a palmeras datileras en el Valle del Dades"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_5.webp",
      "cap": "Curvas del Dades",
      "alt": "Curvas serpenteantes de la carretera de montaña en las Gargantas del Dades"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_6.webp",
      "cap": "Alfombras bereberes",
      "alt": "Tejedora tradicional de alfombras bereberes mostrando tapices de lana de colores vivos"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_8.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Pueblo fortificado de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO, al amanecer"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_9.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Torres de arcilla y almenas de la Kasbah Taourirt en Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/hero_2.webp",
      "cap": "Valle del Draa",
      "alt": "Vista panorámica del oasis de palmeras datileras del Valle del Draa y montañas áridas"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, chófer e itinerario están reservados en exclusiva para su grupo, con total flexibilidad para ajustar el ritmo a sus preferencias."
    },
    {
      "question": "¿Cuánto dura el paseo en camello y hay alternativas disponibles?",
      "answer": "El paseo en camello suele durar entre 40 minutos y 1,5 horas. Quienes prefieran no montar en camello pueden realizar el traslado directo al campamento en vehículo 4×4 sin suplemento."
    },
    {
      "question": "¿La tienda del campamento en el desierto es privada?",
      "answer": "Sí, el campamento en el desierto cuenta con tiendas de campaña privadas de lujo dotadas de camas confortables, baño privado con inodoro y ducha con agua caliente."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "La recogida se realiza en su alojamiento o aeropuerto en Fez y el tour concluye en Marrakech con traslado directo a su hotel, riad o al aeropuerto de Menara."
    },
    {
      "question": "¿Qué tipo de vehículo se utiliza?",
      "answer": "El transporte se efectúa en un moderno todoterreno 4×4 o en un monovolumen de gama alta con aire acondicionado, asientos cómodos y amplio maletero."
    },
    {
      "question": "¿Se pueden atender requerimientos dietéticos particulares?",
      "answer": "Sí. Infórmenos sobre sus preferencias o restricciones dietéticas al reservar para que los alojamientos y el campamento adapten sus menús (vegetariano, vegano, sin gluten, etc.)."
    },
    {
      "question": "¿Es este itinerario adecuado para todas las edades?",
      "answer": "Sí, es perfectamente adecuado para familias, personas mayores y parejas. Se realizan paradas regulares para relajarse, tomar fotografías y disfrutar del entorno."
    },
    {
      "question": "¿Cuál es la mejor temporada para realizar este viaje?",
      "answer": "La primavera (marzo a mayo) y el otoño (septiembre a noviembre) ofrecen un clima excelente con temperaturas suaves tanto en la montaña como en el desierto."
    }
  ]
};

const tour40_it = {
  slug: "4-day-morocco-desert-tour-from-fes-to-marrakech",
  title: "Tour di 4 Giorni da Fes a Marrakech nel Deserto di Merzouga | Sahara Star Tours",
  shortTitle: "Tour di 4 Giorni da Fes a Marrakech nel Deserto",
  description: "Un viaggio spettacolare di 4 giorni da Fes a Marrakech attraverso il Medio Atlante, le dune di Merzouga, le Gole del Todra e del Dades e la leggendaria Kasbah di Ait Ben Haddou.",
  aboutHtml: "<p>Questo tour privato di 4 giorni da Fes a Marrakech è l'itinerario perfetto per collegare le due capitali imperiali più celebri del Marocco attraversando la magia del grande sud. Dalla foresta di cedri del Medio Atlante e dai palmeti della Valle dello Ziz, ti addentrerai nell'Erg Chebbi a Merzouga con passeggiata in dromedario e notte in accampamento di lusso. Esplorerai le imponenti pareti delle Gole del Todra, i paesaggi della Valle del Dades e lo storico ksar di Ait Ben Haddou prima di valicare l'Alto Atlante verso Marrakech.</p>",
  duration: "4 Giorni / 3 Notti",
  startingFrom: "Fes",
  price: "Da $520/persona",
  highlights: [
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Notte in accampamento di lusso con cena e colazione berbera",
    "Kasbah di Ait Ben Haddou, sito UNESCO leggendario",
    "Itinerario panoramico attraverso le montagne dell'Alto Atlante",
    "Medina di Fes e tesori culturali storici"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale esperto e trasferimenti privati",
    "Carburante, pedaggi stradali e spese operative del veicolo",
    "Sistemazione in riad/hotel selezionati e accampamento di lusso",
    "Colazioni e cene incluse come da itinerario",
    "Trekking in dromedario e soggiorno nel campo tendato"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei e servizi aeroportuali non specificati",
    "Spese personali e attività facoltative",
    "Mance e gratifiche"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      "content": "Il tuo viaggio di 4 giorni inizia al mattino con il prelievo dal tuo riad o dall'aeroporto di Fes. Attraverserai la cittadina montana di Ifrane, la 'Svizzera del Marocco', prima di raggiungere la millenaria Foresta di Cedri di Azrou per ammirare da vicino le scimmie barbaresche. Dopo il pranzo a Midelt, oltrepasserai il valico del Tizi N'Tilghmt per scendere lungo le suggestive gole e gli infiniti palmeti della Valle dello Ziz. Nel tardo pomeriggio arriverai a Merzouga per salire in sella ai dromedari e attraversare le magnifiche dune dell'Erg Chebbi al tramonto, raggiungendo il campo tendato di lusso per una tipica cena berbera allietata dai tamburi tradizionali sotto le stelle."
    },
    {
      "day": "Giorno 2",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Sveglia all'alba per assistere allo straordinario sorgere del sole sul deserto dorato. Dopo la colazione, rientrerai in dromedario per incontrare il tuo autista e partire per un'emozionante giornata in fuoristrada alla scoperta dell'area di Merzouga. Visiterai antiche miniere di kohl, sosterai in una tenda tessuta a mano per condividere un tè con i nomadi berberi e assisterai a una performance di musica gnawa nel villaggio di Khamlia. Pranzo libero (imperdibile la tipica madfouna berbera). Nel pomeriggio passeggerai nell'oasi verdeggiante e visiterai il lago di Merzouga. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 3",
      "title": "Deserto di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "content": "Dopo la prima colazione lascerai il deserto per visitare il vivace mercato storico di Rissani. Raggiungerai poi Erfoud, celebre per i laboratori di fossili marini, e attraverserai i palmeti di Touroug e Tinjdad fino alle spettacolari Gole del Todra, con le sue colossali falesie calcaree alte oltre 300 metri. Tempo a disposizione per passeggiare e pranzare. Nel pomeriggio proseguirai verso la Valle del Dades, ammirando le singolari rocce chiamate 'dita di scimmia' e i tornanti panoramici della vallata. Cena e pernottamento in riad/hotel nel Dades."
    },
    {
      "day": "Giorno 4",
      "title": "Valle del Dades – Valle delle Rose – Palmeraie di Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlante – Marrakech",
      "content": "L'ultima giornata ti condurrà attraverso Kalaat M'Gouna nella profumata Valle delle Rose, nota per la produzione di acque e cosmetici di rose, e lungo la pista verdeggiante di Skoura fino a Ouarzazate per visitare gli studi cinematografici. Visiterai quindi la celeberrima Kasbah di Ait Ben Haddou, patrimonio UNESCO celebre set di capolavori come Il Gladiatore e Il Trono di Spade. Nel pomeriggio risalirai il maestoso passo di Tizi N'Tichka (2.260 m) con soste panoramiche sull'Alto Atlante, prima di arrivare in serata a Marrakech dove il tour si concluderà con il rientro al tuo alloggio o all'aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fes",
      "day": "Giorno 1",
      "subtitle": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Merzouga",
      "desc": "Partenza da Fes attraverso il Medio Atlante e la Valle dello Ziz verso l'Erg Chebbi a Merzouga."
    },
    {
      "number": 2,
      "name": "Regione di Merzouga",
      "day": "Giorno 2",
      "subtitle": "Esplorazione di Merzouga – Nomadi – Khamlia – Lago – Palmeraie",
      "desc": "Escursione in 4×4 alla scoperta di nomadi, tradizioni Gnawa e oasi di Merzouga."
    },
    {
      "number": 3,
      "name": "Merzouga al Dades",
      "day": "Giorno 3",
      "subtitle": "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "desc": "Visita di Rissani, laboratori di fossili e passeggiata nelle Gole del Todra verso il Dades."
    },
    {
      "number": 4,
      "name": "Valle del Dades a Marrakech",
      "day": "Giorno 4",
      "subtitle": "Dades – Valle delle Rose – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
      "desc": "Visita di Ait Ben Haddou e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_1.webp",
      "cap": "Souk di Fes",
      "alt": "Lanterne in rame artigianali e metalli lavorati nel souk della medina di Fes"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_10.webp",
      "cap": "Gole del Todra",
      "alt": "Imponenti pareti rocciose verticali in pietra calcarea rossa nelle Gole del Todra"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_3.webp",
      "cap": "Carovana a Erg Chebbi",
      "alt": "Carovana di dromedari lungo il crinale delle dune di Erg Chebbi al tramonto"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_4.webp",
      "cap": "Valle del Dades",
      "alt": "Kasbah storica in terra cruda accanto a palme da dattero nella Valle del Dades"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_5.webp",
      "cap": "Tornanti del Dades",
      "alt": "Tornanti panoramici della strada di montagna nelle Gole del Dades"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_6.webp",
      "cap": "Tessitrice berbera",
      "alt": "Tessitrice tradizionale berbera che mostra tappeti di lana dai colori vivaci"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_8.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Villaggio fortificato di Ait Ben Haddou, patrimonio UNESCO, all'alba"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_9.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Torri in argilla e bastioni della Kasbah Taourirt a Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/hero_2.webp",
      "cap": "Valle del Draa",
      "alt": "Veduta panoramica dell'oasi di palme da dattero della Valle del Draa e montagne aride"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: veicolo, conducente e programma sono a uso esclusivo del tuo gruppo, con orari e soste flessibili."
    },
    {
      "question": "Quanto dura il tragitto in dromedario e ci sono alternative?",
      "answer": "Il trekking in dromedario dura circa 40-90 minuti. Se preferisci non cavalcare, è possibile organizzare il trasferimento diretto al campo in fuoristrada 4×4 senza sovrapprezzo."
    },
    {
      "question": "La tenda nell'accampamento nel deserto è privata?",
      "answer": "Sì, l'accampamento di lusso dispone di ampie tende private con veri letti, bagno interno con wc e doccia calda."
    },
    {
      "question": "Dove avvengono la partenza e il termine del tour?",
      "answer": "La partenza è prevista dal tuo hotel o riad a Fes e il tour si conclude a Marrakech con rientro al tuo alloggio o all'aeroporto Menara."
    },
    {
      "question": "Quale tipologia di mezzo viene utilizzata?",
      "answer": "Il viaggio viene effettuato con veicoli fuoristrada 4×4 o comodi minivan privati di recente immatricolazione con aria condizionata."
    },
    {
      "question": "È possibile gestire diete ed esigenze alimentari specifiche?",
      "answer": "Certamente: piatti vegetariani, senza glutine o adatti ad altre intolleranze possono essere richiesti in fase di prenotazione."
    },
    {
      "question": "Questo itinerario è consigliato a tutte le età?",
      "answer": "Sì, è un tour perfetto per famiglie con bambini, coppie e piccoli gruppi di amici. Sono previste soste frequenti lungo il tragitto."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "I periodi migliori sono la primavera (da marzo a maggio) e l'autunno (da settembre a novembre), quando il clima è particolarmente gradevole."
    }
  ]
};

// =============================================================
// Tour 41: 4-day-morocco-itinerary-desert-tour-from-fes
// =============================================================
const tour41_es = {
  slug: "4-day-morocco-itinerary-desert-tour-from-fes",
  title: "Tour de 4 Días de Fez a Merzouga y Gargantas del Dades | Sahara Star Tours",
  shortTitle: "Tour de 4 Días de Fez a Merzouga y Dades",
  description: "Circuito circular de 4 días desde Fez al desierto de Merzouga y las Gargantas del Dades y Todra. Disfrute de paseos en camello, campamento de lujo y cultura nómada.",
  aboutHtml: "<p>Este circuito privado de 4 días con salida y regreso a Fez le permite explorar a fondo el gran sur de Marruecos sin las prisas de un viaje express. Disfrutará de los paisajes alpinos de Ifrane, los macacos del bosque de cedros, los impresionantes cañones de las Gargantas del Dades y del Todra, y dos noches memorables en la región de Merzouga: una en campamento de lujo bajo las estrellas del Erg Chebbi y otra en un confortable hotel frente a las dunas tras explorar la cultura nómada y gnawa.</p>",
  duration: "4 Días / 3 Noches",
  startingFrom: "Fez",
  price: "Desde $520/persona",
  highlights: [
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Noche en campamento en el desierto con cena y desayuno",
    "Medina de Fez y lugares culturales históricos",
    "Ifrane, la 'Suiza de Marruecos'",
    "Bosque de Cedros y macacos de Berbería"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local experimentado de habla hispana",
    "Combustible, peajes y gastos del vehículo",
    "Alojamiento en riads seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos aeroportuarios",
    "Gastos personales y compras de recuerdos",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Errachidia – Gargantas del Dades",
      "content": "Comenzará su viaje con la recogida temprana en su alojamiento en Fez. Conducirá hacia el sur pasando por Imouzzer e Ifrane, famosa por su arquitectura suiza y clima de montaña. Continuará al bosque de cedros para interactuar con los macacos de Berbería y seguirá hacia Midelt para almorzar. Luego descenderá por las espectaculares gargantas del Valle del Ziz y Errachidia, admirando los extensos oasis de palmeras datileras, antes de alcanzar el Valle del Dades para cenar y pasar la noche en un riad tradicional."
    },
    {
      "day": "Día 2",
      "title": "Gargantas del Dades – Gargantas del Todra – Erfoud – Desierto de Merzouga – Noche en campamento de lujo",
      "content": "Tras el desayuno en el Dades, se dirigirá a las colosales Gargantas del Todra, un cañón de imponentes muros rojizos tallados por el río Todra ideal para pasear a pie. Tiempo libre para almorzar en un restaurante local. Continuará a través de Erfoud, conociendo talleres de mármol fosilizado, hasta alcanzar las majestuosas dunas de Merzouga. Montará en camello para contemplar una puesta de sol de ensueño y llegará a su campamento de lujo en Erg Chebbi, donde disfrutará de una deliciosa cena marroquí y música bereber alrededor de la fogata."
    },
    {
      "day": "Día 3",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Madrugará para presenciar el inolvidable amanecer sobre el mar de dunas. Tras el desayuno regresará en camello a Merzouga para un día completo de exploración en 4×4: visitará antiguas minas de kohl, compartirá un té con familias nómadas bereberes en sus jaimas tradicionales y escuchará la emotiva música espiritual de los músicos gnawa en el pueblo de Khamlia. Tras un almuerzo tradicional, paseará por el oasis de palmeras y visitará el lago de Merzouga. Cena y alojamiento en un agradable hotel frente a las dunas."
    },
    {
      "day": "Día 4",
      "title": "Merzouga – Rissani – Erfoud – Valle del Ziz – Errachidia – Ifrane – Fez",
      "content": "Tras el desayuno en el hotel, visitará la legendaria Rissani y su bullicioso zoco tradicional, corazón histórico del comercio del Tafilalet. Continuará por Erfoud y ascenderá por el cañón del Valle del Ziz, disfrutando de vistas panorámicas. Tras el almuerzo en Midelt, atravesará de nuevo los bosques de cedros del Medio Atlas e Ifrane antes de llegar a Fez por la tarde, donde le trasladaremos a su alojamiento o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fez",
      "day": "Día 1",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Gargantas del Dades",
      "desc": "Salida de Fez cruzando el Medio Atlas y Valle del Ziz hacia las Gargantas del Dades."
    },
    {
      "number": 2,
      "name": "Gargantas del Dades",
      "day": "Día 2",
      "subtitle": "Dades – Gargantas del Todra – Erfoud – Merzouga – Campamento de lujo",
      "desc": "Visita a las Gargantas del Todra, llegada a Merzouga y noche en campamento de lujo."
    },
    {
      "number": 3,
      "name": "Región de Merzouga",
      "day": "Día 3",
      "subtitle": "Exploración de Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Recorrido en 4×4 conociendo familias nómadas, folclore gnawa y oasis en Erg Chebbi."
    },
    {
      "number": 4,
      "name": "Merzouga a Fez",
      "day": "Día 4",
      "subtitle": "Merzouga – Rissani – Erfoud – Valle del Ziz – Errachidia – Ifrane – Fez",
      "desc": "Visita al zoco de Rissani y regreso a Fez a través del Medio Atlas."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_1.webp",
      "cap": "Medina de Fez",
      "alt": "Estrecho callejón empedrado en la medina medieval de Fez el-Bali"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_10.webp",
      "cap": "Gargantas del Todra",
      "alt": "Puesta de sol sobre la impresionante garganta de piedra caliza del Valle del Todra"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_2.webp",
      "cap": "Ciudad de Ifrane",
      "alt": "Arquitectura de estilo alpino y jardines en la ciudad montañosa de Ifrane"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_3.webp",
      "cap": "Oasis del Ziz",
      "alt": "Exuberante oasis de palmeras datileras a lo largo del árido cañón del Valle del Ziz"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_4.webp",
      "cap": "Campamento nómada",
      "alt": "Campamento de jaimas nómadas y camellos en las arenas del desierto cerca de Merzouga"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_5.webp",
      "cap": "Atardecer en Erg Chebbi",
      "alt": "Puesta de sol dorada sobre las majestuosas dunas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_7.webp",
      "cap": "Música bereber",
      "alt": "Músicos bereberes tocando tambores tradicionales del desierto alrededor de una fogata"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_8.webp",
      "cap": "Dedos de mono en Dades",
      "alt": "Dramáticas formaciones rocosas conocidas como los dedos de mono en el Valle del Dades"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_9.webp",
      "cap": "Acantilados del Dades",
      "alt": "Casas de aldea de adobe escalonadas a lo largo de los acantilados rojos de las Gargantas del Dades"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/hero_2.webp",
      "cap": "Dunas de Merzouga",
      "alt": "Vasta extensión de las dunas del desierto del Sahara bajo un cielo matutino despejado"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Es un viaje 100% privado en exclusiva para usted y sus acompañantes, con completa flexibilidad en horarios y paradas a lo largo del camino."
    },
    {
      "question": "¿Cuánto tiempo dura el paseo en camello y qué opciones existen?",
      "answer": "La travesía en camello dura entre 45 y 80 minutos. Para quienes lo deseen, disponemos de traslados al campamento en vehículo 4×4 sin ningún coste extra."
    },
    {
      "question": "¿Cómo son las instalaciones en el campamento del desierto?",
      "answer": "El campamento de lujo ofrece tiendas privadas con baño interior completo, agua caliente, camas confortables y luz eléctrica."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "La recogida y el regreso se organizan directamente en su riad, hotel o en el aeropuerto de Fez Sais, según sus billetes de viaje."
    },
    {
      "question": "¿Qué modelo de vehículo se utiliza?",
      "answer": "Viajará en un vehículo todoterreno 4×4 o en un monovolumen privado con aire acondicionado, asientos ergonómicos y amplio maletero."
    },
    {
      "question": "¿Se pueden preparar menús vegetarianos o dietas especiales?",
      "answer": "Sí, podemos coordinar opciones vegetarianas, veganas o para celíacos en todos los alojamientos indicándolo al realizar la reserva."
    },
    {
      "question": "¿Es un itinerario cómodo para viajar con niños o personas mayores?",
      "answer": "Sí, al disponer de 4 días el ritmo es equilibrado, con paradas constantes para estirar las piernas y contemplar los paisajes."
    },
    {
      "question": "¿Cuál es la mejor época del año para realizar este tour?",
      "answer": "De octubre a mayo el clima es templado e ideal para recorrer el sur y el desierto. Durante los meses de verano recomendamos actividades matinales."
    }
  ]
};

const tour41_it = {
  slug: "4-day-morocco-itinerary-desert-tour-from-fes",
  title: "Tour di 4 Giorni da Fes a Merzouga e Gole del Dades | Sahara Star Tours",
  shortTitle: "Tour di 4 Giorni da Fes a Merzouga e Dades",
  description: "Circuito circolare privato di 4 giorni da Fes al deserto di Merzouga e alle Gole del Todra e del Dades. Vivi l'emozione del deserto in totale relax.",
  aboutHtml: "<p>Questo circuito privato di 4 giorni con partenza e arrivo a Fes è studiato per chi desidera vivere appieno l'esperienza del Sahara e delle valli del sud senza fretta. Dalla verdeggiante Ifrane e dalla foresta dei cedri, attraverserai le spettacolari gole del Todra e del Dades fino alle maestose dune dell'Erg Chebbi, con due notti speciali a Merzouga: una in campo tendato di lusso sotto le stelle e una in confortevole hotel ai piedi delle dune per scoprire le tradizioni berbere e gnawa.</p>",
  duration: "4 Giorni / 3 Notti",
  startingFrom: "Fes",
  price: "Da $520/persona",
  highlights: [
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Notte in campo tendato di lusso con cena e colazione berbera",
    "Medina di Fes e tesori culturali storici",
    "Ifrane, la 'Svizzera del Marocco'",
    "Foresta di Cedri e scimmie barbaresche"
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
    "Spese personali e souvenir",
    "Mance e gratifiche"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Errachidia – Gole del Dades",
      "content": "Partenza mattutina dal tuo alloggio a Fes in direzione sud attraverso Imouzzer e Ifrane, celebre per le sue graziose casette alpine. Sosta nella foresta di cedri per incontrare le scimmie barbaresche e proseguimento verso Midelt per il pranzo. Nel pomeriggio ammirerai le spettacolari gole della Valle dello Ziz e i vasti palmeti di Errachidia, giungendo infine nella suggestiva Valle del Dades per la cena e il pernottamento in riad."
    },
    {
      "day": "Giorno 2",
      "title": "Gole del Dades – Gole del Todra – Erfoud – Deserto di Merzouga – Campo di lusso",
      "content": "Dopo la prima colazione visiterai le imponenti Gole del Todra, passeggiando sul fondo del canyon tra gigantesche pareti di roccia calcarea rossa alte più di 300 metri. Pranzo in ristorante locale. Proseguirai poi attraverso Erfoud e i palmeti del Tafilalet per giungere alle leggendarie dune di Merzouga. Salirai in sella ai dromedari per un tramonto indimenticabile prima di raggiungere l'accampamento di lusso a Erg Chebbi, dove ti attende una cena tipica berbera con musica attorno al fuoco."
    },
    {
      "day": "Giorno 3",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Sveglia all'alba per contemplare lo spettacolo del sole che sorge sulle dune dorate. Rientro in dromedario a Merzouga per dedicare l'intera giornata all'esplorazione della regione in 4×4: sosterai presso antiche miniere di kohl, berrai il tradizionale tè alla menta con i nomadi berberi e ti lascerai trasportare dalla musica gnawa nel villaggio di Khamlia. Nel pomeriggio passeggerai nell'oasi e ammirerai il lago di Merzouga. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 4",
      "title": "Merzouga – Rissani – Erfoud – Valle dello Ziz – Errachidia – Ifrane – Fes",
      "content": "Dopo la colazione in hotel visiterai la storica Rissani e il suo vivace mercato tradizionale, fulcro commerciale secolare del Tafilalet. Risalirai la Valle dello Ziz con suggestive soste fotografiche, pranzerai a Midelt e attraverserai nuovamente il Medio Atlante fino a raggiungere Fes nel tardo pomeriggio con trasferimento al tuo riad o in aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fes",
      "day": "Giorno 1",
      "subtitle": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Gole del Dades",
      "desc": "Partenza da Fes attraverso il Medio Atlante e la Valle dello Ziz verso le Gole del Dades."
    },
    {
      "number": 2,
      "name": "Gole del Dades",
      "day": "Giorno 2",
      "subtitle": "Dades – Gole del Todra – Erfoud – Merzouga – Campo di lusso",
      "desc": "Passeggiata nelle Gole del Todra, arrivo a Merzouga e notte in campo tendato di lusso."
    },
    {
      "number": 3,
      "name": "Regione di Merzouga",
      "day": "Giorno 3",
      "subtitle": "Esplorazione di Merzouga – Nomadi – Khamlia – Lago – Palmeraie",
      "desc": "Tour in 4×4 con incontro con famiglie nomadi berbere, villaggio Gnawa e oasi."
    },
    {
      "number": 4,
      "name": "Merzouga a Fes",
      "day": "Giorno 4",
      "subtitle": "Merzouga – Rissani – Erfoud – Valle dello Ziz – Errachidia – Ifrane – Fes",
      "desc": "Visita di Rissani e rientro a Fes attraverso le montagne del Medio Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_1.webp",
      "cap": "Medina di Fes",
      "alt": "Stretta via acciottolata nella medina medievale di Fes el-Bali"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_10.webp",
      "cap": "Gole del Todra",
      "alt": "Tramonto sulle spettacolari gole in pietra calcarea della Valle del Todra"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_2.webp",
      "cap": "Cittadina di Ifrane",
      "alt": "Architettura in stile alpino e giardini curati nella cittadina montana di Ifrane"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_3.webp",
      "cap": "Oasi dello Ziz",
      "alt": "Lussureggiante oasi di palme da dattero lungo il canyon arido della Valle dello Ziz"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_4.webp",
      "cap": "Accampamento nomade",
      "alt": "Tende nomadi e dromedari sulla sabbia del deserto nei pressi di Merzouga"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_5.webp",
      "cap": "Tramonto a Erg Chebbi",
      "alt": "Tramonto dorato sulle maestose dune dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_7.webp",
      "cap": "Musica berbera",
      "alt": "Musicisti berberi che suonano tamburi tradizionali attorno a un falò nel deserto"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_8.webp",
      "cap": "Dita di scimmia a Dades",
      "alt": "Suggestiva formazione rocciosa nota come le dita di scimmia nella Valle del Dades"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_9.webp",
      "cap": "Falesie del Dades",
      "alt": "Abitazioni in terra cruda arroccate lungo le falesie rosse delle Gole del Dades"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/hero_2.webp",
      "cap": "Dune di Merzouga",
      "alt": "Vasta distesa di dune del deserto del Sahara sotto un cielo limpido mattutino"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour interamente privato: l'auto, l'autista e le tappe sono a uso esclusivo del tuo gruppo per offrirti la massima serenità."
    },
    {
      "question": "Quanto dura il percorso in dromedario e quali alternative ci sono?",
      "answer": "La passeggiata in dromedario dura dai 45 agli 80 minuti. Su richiesta, è possibile raggiungere l'accampamento direttamente in 4×4 senza alcun costo extra."
    },
    {
      "question": "Quali comodità offre l'accampamento nel deserto?",
      "answer": "L'accampamento di lusso dispone di tende private con veri letti, bagno interno con wc e doccia calda ed elettricità."
    },
    {
      "question": "Da dove si parte e dove termina il viaggio?",
      "answer": "Il tour comincia e si conclude comodamente presso il tuo riad, hotel o all'aeroporto di Fes Sais."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Si viaggia in un moderno veicolo fuoristrada 4×4 o comodo minivan con aria condizionata e capiente bagagliaio."
    },
    {
      "question": "È possibile richiedere menu vegetariani o senza glutine?",
      "answer": "Certamente: piatti vegetariani, vegani o senza glutine possono essere preparati senza problemi segnalandolo alla prenotazione."
    },
    {
      "question": "L'itinerario è consigliato anche a bambini o viaggiatori anziani?",
      "answer": "Sì, la durata di 4 giorni rende il ritmo di viaggio rilassato e ideale per tutte le età, con frequenti soste panoramiche."
    },
    {
      "question": "Qual è il periodo migliore per questa vacanza?",
      "answer": "Da ottobre a maggio le temperature sono ideali per viaggiare nel deserto. Durante i mesi estivi si preferiscono le prime ore del mattino per le attività all'aperto."
    }
  ]
};

// =============================================================
// Tour 42: 4-day-morocco-tour-from-casablanca
// =============================================================
const tour42_es = {
  slug: "4-day-morocco-tour-from-casablanca",
  title: "Tour de 4 Días por Marruecos de Casablanca a Marrakech | Sahara Star Tours",
  shortTitle: "Tour de 4 Días de Casablanca a Marrakech",
  description: "Circuito privado de 4 días desde Casablanca hasta Marrakech vía Fez y el desierto de Merzouga. Visite la mezquita Hassan II, Erg Chebbi y la Kasbah Ait Ben Haddou.",
  aboutHtml: "<p>Este fascinante circuito privado de 4 días conecta las principales maravillas de Marruecos desde Casablanca hasta Marrakech a través del desierto del Sahara. Comenzando con la majestuosa mezquita Hassan II en Casablanca, viajará a la ciudad imperial de Fez, atravesará las montañas del Atlas hacia las doradas dunas de Erg Chebbi en Merzouga con paseo en camello y noche en campamento de lujo, y continuará por las Gargantas del Todra y la icónica Kasbah de Ait Ben Haddou antes de llegar a Marrakech.</p>",
  duration: "4 Días / 3 Noches",
  startingFrom: "Casablanca",
  price: "Desde $520/persona",
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
    "Combustible, peajes y gastos del vehículo",
    "Alojamiento en riads seleccionados y campamento de lujo",
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
      "title": "Llegada a Casablanca – Viaje a Fez",
      "content": "Su viaje de 4 días comienza con la recogida en el aeropuerto o en su alojamiento en Casablanca, capital económica de Marruecos. Comenzará con una visita a la monumental Mezquita Hassan II, una de las más grandes del mundo, situada sobre el océano Atlántico. A continuación emprenderá el viaje hacia la histórica ciudad imperial de Fez, pasando por fértiles valles agrícolas. Llegada a Fez por la tarde con tiempo para relajarse. Cena y alojamiento en un auténtico riad tradicional en la medina."
    },
    {
      "day": "Día 2",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Tras el desayuno en su riad, partirá hacia el sur a través de Imouzzer e Ifrane, conocida como 'la Suiza de Marruecos'. Se detendrá en el bosque de cedros de Azrou para observar a los macacos de Berbería en su hábitat natural. Continuará hacia Midelt para almorzar antes de descender por las impresionantes gargantas y palmerales del Valle del Ziz y Errachidia. Por la tarde alcanzará las doradas dunas de Erg Chebbi en Merzouga, donde montará en camello para presenciar el atardecer sobre las dunas y llegar a su campamento de lujo con cena tradicional y tambores bereberes bajo las estrellas."
    },
    {
      "day": "Día 3",
      "title": "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "content": "Tras contemplar el amanecer y desayunar, dejará el desierto para visitar Rissani, la antigua capital de la región de Tafilalet, con su animado zoco tradicional. Continuará hacia Erfoud para visitar talleres de fósiles y seguirá a través de los palmerales de Touroug y Tinjdad hasta las espectaculares Gargantas del Todra, un colosal desfiladero de paredes rocosas verticales. Disfrutará de un agradable paseo y almuerzo local. Por la tarde llegará al Valle del Dades, admirando las formaciones rocosas de los 'dedos de mono' y vistas panorámicas. Cena y alojamiento en riad en Dades."
    },
    {
      "day": "Día 4",
      "title": "Valle del Dades – Valle de las Rosas – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
      "content": "Tras el desayuno viajará hacia Kalaat M'Gouna en el corazón del Valle de las Rosas y continuará por el palmeral de Skoura hasta Ouarzazate, la meca del cine marroquí. A continuación explorará la famosa Kasbah de Ait Ben Haddou, pueblo fortificado de adobe declarado Patrimonio de la Humanidad por la UNESCO y escenario de Gladiator, La Momia y Juego de Tronos. Por la tarde cruzará las majestuosas cumbres del Alto Atlas por el paso de Tizi N'Tichka (2.260 m) con paradas panorámicas, llegando a Marrakech al final del día donde concluirá el circuito."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Llegada a Casablanca",
      "day": "Día 1",
      "subtitle": "Casablanca – Visita a Mezquita Hassan II – Viaje a Fez",
      "desc": "Recogida en Casablanca, visita a la Mezquita Hassan II y viaje panorámico hacia Fez."
    },
    {
      "number": 2,
      "name": "Fez a Merzouga",
      "day": "Día 2",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga",
      "desc": "Cruce del Medio Atlas pasando por Ifrane y Valle del Ziz hacia el campamento de Erg Chebbi."
    },
    {
      "number": 3,
      "name": "Merzouga al Dades",
      "day": "Día 3",
      "subtitle": "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "desc": "Visita a Rissani, talleres de fósiles de Erfoud y paseo por las Gargantas del Todra hacia Dades."
    },
    {
      "number": 4,
      "name": "Valle del Dades a Marrakech",
      "day": "Día 4",
      "subtitle": "Dades – Valle de las Rosas – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
      "desc": "Ruta por Valle de las Rosas, visita de Ait Ben Haddou y cruce del Alto Atlas hasta Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_1.webp",
      "cap": "Mezquita Hassan II",
      "alt": "Vista del paseo marítimo y la mezquita Hassan II sobre el océano en Casablanca"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_10.webp",
      "cap": "Plaza Jemaa el-Fna",
      "alt": "Animada atmósfera vespertina con puestos de comida en la plaza Jemaa el-Fna de Marrakech"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_2.webp",
      "cap": "Fuente de zellij",
      "alt": "Fuente con intrincados mosaicos de azulejos zellij en Casablanca"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_3.webp",
      "cap": "Volubilis",
      "alt": "Antiguas ruinas romanas y olivares en el yacimiento arqueológico de Volubilis de la UNESCO"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_4.webp",
      "cap": "Bab Mansour",
      "alt": "Gran puerta monumental de la ciudad de Bab Mansour en la imperial Mequinez"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_5.webp",
      "cap": "Curtiduría Chouara",
      "alt": "Curtidores de cuero en la curtiduría de Chouara en la histórica medina de Fez"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_6.webp",
      "cap": "Cumbres del Medio Atlas",
      "alt": "Picos nevados de las montañas del Medio Atlas en la ruta hacia el desierto"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_7.webp",
      "cap": "Excursión en camello",
      "alt": "Excursión en camello a través de las altas dunas de Erg Chebbi en Merzouga"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_8.webp",
      "cap": "Patio de riad",
      "alt": "Patio de riad marroquí tradicional con fuente y azulejos cerámicos"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Kasbah fortificada de arcilla de Ait Ben Haddou iluminada al atardecer"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/hero_2.webp",
      "cap": "Mezquita Koutoubia",
      "alt": "Vista clásica del alminar de la mezquita Koutoubia en Marrakech al anochecer"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia completamente privada: el vehículo, conductor e itinerario están reservados en exclusiva para usted y su grupo, con horarios flexibles."
    },
    {
      "question": "¿Cuánto dura el paseo en camello y qué alternativas existen?",
      "answer": "El paseo en camello dura aproximadamente entre 40 y 90 minutos. Quienes lo prefieran pueden trasladarse al campamento directamente en 4×4 sin coste extra."
    },
    {
      "question": "¿Cómo son las tiendas del campamento en el desierto?",
      "answer": "Las tiendas de lujo disponen de camas confortables, baño privado completo con ducha de agua caliente y electricidad para recargar dispositivos."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "La recogida se realiza en el aeropuerto Mohammed V o en su alojamiento en Casablanca, y el tour finaliza en Marrakech con traslado a su riad o al aeropuerto."
    },
    {
      "question": "¿Qué tipo de vehículo se utiliza?",
      "answer": "Utilizamos vehículos privados 4×4 modernos o monovolúmenes espaciosos equipados con aire acondicionado para garantizar el máximo confort en carretera."
    },
    {
      "question": "¿Se pueden adaptar menús para dietas especiales?",
      "answer": "Sí, podemos coordinar opciones vegetarianas, veganas, sin gluten u otras preferencias dietéticas notificándolo al momento de la reserva."
    },
    {
      "question": "¿Es un circuito adecuado para todas las edades?",
      "answer": "Sí, es idóneo para familias y viajeros de todas las edades. El itinerario cuenta con pausas regulares para descansar y realizar fotografías."
    },
    {
      "question": "¿Cuál es la mejor época del año para realizar este tour?",
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados ideales para viajar desde la costa hasta el desierto y las montañas."
    }
  ]
};

const tour42_it = {
  slug: "4-day-morocco-tour-from-casablanca",
  title: "Tour di 4 Giorni in Marocco da Casablanca a Marrakech | Sahara Star Tours",
  shortTitle: "Tour di 4 Giorni da Casablanca a Marrakech",
  description: "Circuito privato di 4 giorni da Casablanca a Marrakech via Fes e il deserto di Merzouga. Ammira la Moschea Hassan II, l'Erg Chebbi e Ait Ben Haddou.",
  aboutHtml: "<p>Questo straordinario viaggio privato di 4 giorni collega i tesori più famosi del Marocco partendo da Casablanca fino a Marrakech attraverso il deserto del Sahara. Dalla monumentale Moschea Hassan II sulla costa atlantica, raggiungerai la città imperiale di Fes, attraverserai le montagne dell'Atlante fino alle maestose dune dorate dell'Erg Chebbi a Merzouga con passeggiata in dromedario e notte in accampamento di lusso, per poi proseguire attraverso le Gole del Todra e la leggendaria Kasbah di Ait Ben Haddou fino a Marrakech.</p>",
  duration: "4 Giorni / 3 Notti",
  startingFrom: "Casablanca",
  price: "Da $520/persona",
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
      "title": "Arrivo a Casablanca – Viaggio verso Fes",
      "content": "Il tuo tour di 4 giorni inizia con il prelievo all'aeroporto o al tuo alloggio a Casablanca, capitale economica del Marocco. Visiterai l'imponente Moschea Hassan II, una delle più maestose al mondo, affacciata sulle acque dell'Atlantico. Proseguirai quindi il viaggio verso la storica città imperiale di Fes attraverso fertili pianure agricole. Arrivo a Fes nel tardo pomeriggio con tempo a disposizione per rilassarsi. Cena e pernottamento in un caratteristico riad nella medina."
    },
    {
      "day": "Giorno 2",
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      "content": "Dopo la prima colazione in riad partirai verso sud attraversando Imouzzer e Ifrane, la 'Svizzera del Marocco'. Sosterai nella secolare foresta di cedri di Azrou per ammirare le simpatiche scimmie barbaresche. Dopo il pranzo a Midelt, scenderai lungo le gole e i palmeti infiniti della Valle dello Ziz ed Errachidia. Nel pomeriggio raggiungerai le spettacolari dune dell'Erg Chebbi a Merzouga: salirai a dorso di dromedario per assistere al tramonto sul deserto e raggiungere l'accampamento di lusso per una cena tipica berbera con musica attorno al falò."
    },
    {
      "day": "Giorno 3",
      "title": "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "content": "Sveglia all'alba per ammirare il sorgere del sole sulle dune, seguita dalla colazione. Lascerai il deserto per visitare Rissani, antica capitale del Tafilalet, con il suo vivace mercato locale. Proseguirai per Erfoud alla scoperta dei laboratori di marmo fossile e attraverserai i palmeti di Touroug e Tinjdad fino alle impressionanti Gole del Todra, un gigantesco canyon con pareti verticali alte oltre 300 metri. Passeggiata e pranzo in ristorante locale. Nel pomeriggio proseguirai verso la Valle del Dades, ammirando le particolari formazioni rocciose delle 'dita di scimmia'. Cena e pernottamento in riad nel Dades."
    },
    {
      "day": "Giorno 4",
      "title": "Valle del Dades – Valle delle Rose – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
      "content": "Dopo la prima colazione viaggerai verso Kalaat M'Gouna nella rinomata Valle delle Rose e attraverso l'oasi di Skoura fino a Ouarzazate, la capitale del cinema marocchino. Visiterai la famosa Kasbah di Ait Ben Haddou, villaggio fortificato patrimonio UNESCO celebre per aver ospitato film leggendari come Il Gladiatore e La Mummia. Nel pomeriggio valicherai l'Alto Atlante attraverso il suggestivo passo Tizi N'Tichka (2.260 m) con soste fotografiche panoramiche, arrivando a Marrakech nel tardo pomeriggio con trasferimento al tuo riad o in aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Arrivo a Casablanca",
      "day": "Giorno 1",
      "subtitle": "Casablanca – Visita Moschea Hassan II – Viaggio a Fes",
      "desc": "Pick-up a Casablanca, visita alla Moschea Hassan II e trasferimento panoramico a Fes."
    },
    {
      "number": 2,
      "name": "Fes a Merzouga",
      "day": "Giorno 2",
      "subtitle": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Merzouga",
      "desc": "Passaggio per Ifrane e Valle dello Ziz verso il campo tendato di lusso a Merzouga."
    },
    {
      "number": 3,
      "name": "Merzouga al Dades",
      "day": "Giorno 3",
      "subtitle": "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "desc": "Visita di Rissani, laboratori di fossili e passeggiata nelle maestose Gole del Todra."
    },
    {
      "number": 4,
      "name": "Valle del Dades a Marrakech",
      "day": "Giorno 4",
      "subtitle": "Dades – Valle delle Rose – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
      "desc": "Visita di Ait Ben Haddou e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_1.webp",
      "cap": "Moschea Hassan II",
      "alt": "Veduta del lungomare e della Moschea Hassan II affacciata sull'oceano a Casablanca"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_10.webp",
      "cap": "Piazza Jemaa el-Fna",
      "alt": "Vivace atmosfera serale con bancarelle di cibo nella piazza Jemaa el-Fna di Marrakech"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_2.webp",
      "cap": "Fontana zellij",
      "alt": "Fontana decorata con intricati mosaici tradizionali in zellij a Casablanca"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_3.webp",
      "cap": "Rovine di Volubilis",
      "alt": "Antiche rovine romane e uliveti nel sito archeologico UNESCO di Volubilis"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_4.webp",
      "cap": "Bab Mansour",
      "alt": "Maestosa porta monumentale di Bab Mansour nella città imperiale di Meknes"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_5.webp",
      "cap": "Conceria Chouara",
      "alt": "Conciatori di pellami al lavoro presso la conceria Chouara nella medina di Fes"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_6.webp",
      "cap": "Cime del Medio Atlante",
      "alt": "Vette innevate delle montagne del Medio Atlante sulla strada verso il deserto"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_7.webp",
      "cap": "Escursione in dromedario",
      "alt": "Escursione a dorso di dromedario tra le alte dune di Erg Chebbi a Merzouga"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_8.webp",
      "cap": "Corte di riad",
      "alt": "Tradizionale corte interna di un riad marocchino con fontana e ceramiche smaltate"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Kasbah fortificata in argilla di Ait Ben Haddou illuminata al tramonto"
    },
    {
      "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/hero_2.webp",
      "cap": "Moschea Koutoubia",
      "alt": "Classica veduta del minareto della Moschea Koutoubia a Marrakech all'imbrunire"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour interamente privato: il veicolo, l'autista e il programma sono riservati esclusivamente al vostro gruppo con la massima flessibilità."
    },
    {
      "question": "Quanto dura il giro in dromedario e ci sono alternative?",
      "answer": "La passeggiata in dromedario dura circa 40-90 minuti. Se preferite, è possibile organizzare il trasferimento diretto al campo in 4×4 senza alcun costo aggiuntivo."
    },
    {
      "question": "Come sono attrezzate le tende dell'accampamento nel deserto?",
      "answer": "Le tende dell'accampamento di lusso dispongono di comodi letti veri, bagno privato con wc e doccia calda ed elettricità."
    },
    {
      "question": "Dove avvengono il prelievo e il rientro?",
      "answer": "Il tour inizia all'aeroporto Mohammed V o presso il vostro alloggio a Casablanca e termina a Marrakech con rientro al vostro riad o in aeroporto."
    },
    {
      "question": "Quale veicolo viene impiegato per il tour?",
      "answer": "Utilizziamo veicoli fuoristrada 4×4 o minivan privati spaziosi, moderni e climatizzati, ideali per garantire comfort durante i trasferimenti."
    },
    {
      "question": "È possibile soddisfare esigenze alimentari particolari?",
      "answer": "Certamente: piatti vegetariani, senza glutine o altre preferenze possono essere concordati segnalandolo al momento della prenotazione."
    },
    {
      "question": "L'itinerario è adatto a famiglie con bambini o anziani?",
      "answer": "Sì, è un tour ideale per viaggiatori di ogni età grazie a soste regolari e ritmi ben bilanciati."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per questa escursione?",
      "answer": "La primavera e l'autunno offrono condizioni meteo ideali con temperature miti sia sulla costa che nelle montagne e nel deserto."
    }
  ]
};

// =============================================================
// Tour 43: 4-days-marrakech-to-fes-desert-tour
// =============================================================
const tour43_es = {
  slug: "4-days-marrakech-to-fes-desert-tour",
  title: "Tour de 4 Días de Marrakech a Fez por el Desierto de Merzouga | Sahara Star Tours",
  shortTitle: "Tour de 4 Días de Marrakech a Fez por el Desierto",
  description: "Circuito privado de 4 días desde Marrakech hasta Fez a través de Ait Ben Haddou, el Valle del Dades, las dunas de Erg Chebbi y los bosques de cedros del Medio Atlas.",
  aboutHtml: "<p>Este tour privado de 4 días desde Marrakech a Fez es el itinerario por excelencia para viajar de una ciudad imperial a otra disfrutando a fondo de la magia del sur marroquí. Atravesará el Alto Atlas y visitará la legendaria Kasbah de Ait Ben Haddou antes de adentrarse en los cañones del Dades y del Todra. Pasará dos noches inolvidables en Merzouga: una en campamento de lujo bajo las estrellas del Erg Chebbi y otra en un agradable hotel tras explorar la vida nómada y la música gnawa, culminando en Fez a través del Medio Atlas.</p>",
  duration: "4 Días / 3 Noches",
  startingFrom: "Marrakech",
  price: "Desde $520/persona",
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
    "Combustible, peajes y tasas de transporte",
    "Alojamiento en riad en Dades, hotel en Merzouga y campamento de lujo",
    "Desayunos y cenas incluidas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y traslados no especificados",
    "Entradas opcionales a estudios o monumentos",
    "Propinas y gastos personales"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Marrakech – Alto Atlas – Kasbah Ait Ben Haddou – Ouarzazate – Valle de las Rosas – Boumalne Dades",
      "content": "Comenzará su viaje temprano con la recogida en su alojamiento o en el aeropuerto de Marrakech. Conducirá a través del paso de Tizi N'Tichka (2.260 m) en el Alto Atlas, contemplando aldeas bereberes tradicionales y paisajes montañosos. Visitará la famosa Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO y escenario de famosas películas. Tras el almuerzo continuará pasando por Ouarzazate, el palmeral de Skoura y el Valle de las Rosas hasta llegar a Boumalne Dades para cenar y descansar en un acogedor riad."
    },
    {
      "day": "Día 2",
      "title": "Boumalne Dades – Gargantas del Todra – Erfoud – Desierto de Merzouga – Noche en campamento de lujo",
      "content": "Tras el desayuno admirará las impresionantes formaciones de las Gargantas del Dades antes de dirigirse a las colosales Gargantas del Todra, un espectacular cañón de acantilados rojos verticales. Tiempo para pasear y almorzar. Continuará hacia Erfoud para conocer sus famosos talleres de mármol fosilizado y seguirá hasta Merzouga. Por la tarde montará en camello para cruzar las dunas de Erg Chebbi al atardecer y llegar a su campamento de lujo con cena tradicional y música de tambores bereberes bajo el cielo estrellado."
    },
    {
      "day": "Día 3",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Amanecer sobre las dunas doradas del desierto seguido de un completo desayuno marroquí. Regresará en camello a Merzouga para una jornada en todoterreno 4×4: visitará antiguas minas de kohl, compartirá un té con familias nómadas bereberes en sus jaimas tradicionales y asistirá a una actuación de música gnawa en el pueblo de Khamlia. Tiempo para almorzar (recomendamos degustar la tradicional pizza bereber). Por la tarde paseará por el palmeral y contemplará el lago de Merzouga. Cena y alojamiento en hotel frente a las dunas."
    },
    {
      "day": "Día 4",
      "title": "Dunas de Merzouga – Erfoud – Midelt – Bosque de Cedros – Ifrane – Fez",
      "content": "En la última jornada partirá hacia Rissani para visitar su zoco tradicional. Continuará hacia Erfoud y ascenderá por el cañón del Valle del Ziz hacia Midelt, donde disfrutará de tiempo libre para almorzar. Luego atravesará el Bosque de Cedros de Azrou para observar a los macacos de Berbería y visitará Ifrane, conocida como 'la Suiza de Marruecos'. Finalmente llegará a Fez por la tarde con traslado directo a su riad o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Día 1",
      "subtitle": "Marrakech – Alto Atlas – Ait Ben Haddou – Ouarzazate – Boumalne Dades",
      "desc": "Salida de Marrakech por el Alto Atlas y Ait Ben Haddou hacia el Valle del Dades."
    },
    {
      "number": 2,
      "name": "Boumalne Dades",
      "day": "Día 2",
      "subtitle": "Boumalne Dades – Gargantas del Todra – Erfoud – Merzouga – Campamento de lujo",
      "desc": "Visita a las Gargantas del Todra, llegada a Merzouga y noche en campamento de lujo."
    },
    {
      "number": 3,
      "name": "Región de Merzouga",
      "day": "Día 3",
      "subtitle": "Exploración de Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Día completo en 4×4 conociendo familias nómadas, folclore gnawa y dunas de Erg Chebbi."
    },
    {
      "number": 4,
      "name": "Dunas de Merzouga a Fez",
      "day": "Día 4",
      "subtitle": "Merzouga – Erfoud – Midelt – Bosque de Cedros – Ifrane – Fez",
      "desc": "Viaje a través del Valle del Ziz, bosque de cedros e Ifrane con llegada a Fez."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_1.webp",
      "cap": "Paso Tizi N'Tichka",
      "alt": "Espectacular carretera de montaña del Alto Atlas sobre el paso de Tizi N'Tichka"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_10.webp",
      "cap": "Madrasa Al Attarine",
      "alt": "Patio histórico de la madrasa Al Attarine con intrincados arabescos en Fez"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_2.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Torres de adobe fortificadas de Ait Ben Haddou contra el cielo del desierto"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_3.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Muros de arcilla y palmeras de la Kasbah Taourirt en Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_4.webp",
      "cap": "Gargantas del Todra",
      "alt": "Imponentes paredes de roca vertical del cañón de las Gargantas del Todra"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_5.webp",
      "cap": "Dunas de Erg Chebbi",
      "alt": "Caravana de camellos guiada a través de las arenas doradas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_6.webp",
      "cap": "Noche en el campamento",
      "alt": "Reunión junto a la fogata con tambores tradicionales bajo las estrellas del desierto"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_7.webp",
      "cap": "Valle del Ziz",
      "alt": "Palmerales y pueblos de adobe a lo largo del sinuoso cañón del río Ziz"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_8.webp",
      "cap": "Bosque de Cedros",
      "alt": "Bosque de cedros de Azrou con monos macacos de Berbería autóctonos"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_9.webp",
      "cap": "Panorámica de Fez",
      "alt": "Panorámica de la ciudad medieval amurallada de Fez desde las Tumbas Meriníes"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/hero_2.webp",
      "cap": "Atardecer en Merzouga",
      "alt": "Puesta de sol proyectando largas sombras doradas sobre las dunas de Merzouga"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia 100% privada: el vehículo, conductor e itinerario son exclusivos para usted y sus acompañantes."
    },
    {
      "question": "¿Cuánto tiempo dura el paseo en camello y qué opciones hay?",
      "answer": "El paseo en camello suele durar de 40 a 90 minutos. Quienes lo prefieran pueden realizar el traslado directo al campamento en 4×4 sin cargo adicional."
    },
    {
      "question": "¿Cómo son las tiendas en el campamento de lujo?",
      "answer": "Las jaimas del campamento de lujo están equipadas con camas confortables, baño privado completo con ducha de agua caliente y electricidad."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "Le recogeremos en su riad, hotel o aeropuerto en Marrakech y le dejaremos en su alojamiento o en el aeropuerto de Fez."
    },
    {
      "question": "¿Qué modelo de vehículo se utiliza?",
      "answer": "El traslado se realiza en un moderno todoterreno 4×4 o en un monovolumen de gama alta con aire acondicionado y gran capacidad de equipaje."
    },
    {
      "question": "¿Se pueden preparar dietas vegetarianas o especiales?",
      "answer": "Sí, podemos adaptar todas las comidas para dietas vegetarianas, veganas o celíacas comunicándolo con antelación al confirmar la reserva."
    },
    {
      "question": "¿Es un itinerario cómodo para niños y personas mayores?",
      "answer": "Sí, el circuito de 4 días reparte muy bien las distancias y permite realizar descansos frecuentes en los lugares más bonitos del recorrido."
    },
    {
      "question": "¿Cuál es la época recomendada para este viaje?",
      "answer": "De octubre a mayo el clima es templado y muy agradable tanto en las montañas como en el desierto."
    }
  ]
};

const tour43_it = {
  slug: "4-days-marrakech-to-fes-desert-tour",
  title: "Tour di 4 Giorni da Marrakech a Fes nel Deserto di Merzouga | Sahara Star Tours",
  shortTitle: "Tour di 4 Giorni da Marrakech a Fes nel Deserto",
  description: "Circuito privato di 4 giorni da Marrakech a Fes attraverso Ait Ben Haddou, le Gole del Todra, le dune di Erg Chebbi e la foresta di cedri del Medio Atlante.",
  aboutHtml: "<p>Questo tour privato di 4 giorni da Marrakech a Fes è l'itinerario perfetto per viaggiare tra le due celebri città imperiali scoprendo le meraviglie del sud del Marocco. Attraverserai l'Alto Atlante visitando la leggendaria Kasbah di Ait Ben Haddou, esplorerai le maestose gole del Dades e del Todra e trascorrerai due notti indimenticabili a Merzouga: una in campo tendato di lusso tra le dune dell'Erg Chebbi e una in hotel dopo aver incontrato le famiglie nomadi e la musica gnawa, per poi raggiungere Fes attraverso il Medio Atlante.</p>",
  duration: "4 Giorni / 3 Notti",
  startingFrom: "Marrakech",
  price: "Da $520/persona",
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
    "Sistemazione in riad nel Dades, hotel a Merzouga e campo tendato di lusso",
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
      "title": "Marrakech – Alto Atlante – Kasbah Ait Ben Haddou – Ouarzazate – Valle delle Rose – Boumalne Dades",
      "content": "Partenza al mattino presto dal tuo alloggio o dall'aeroporto di Marrakech. Attraverserai l'Alto Atlante attraverso il suggestivo valico del Tizi N'Tichka (2.260 m), ammirando villaggi berberi e spettacolari panorami montani. Visiterai la celebre Kasbah di Ait Ben Haddou, sito UNESCO set di film indimenticabili. Dopo il pranzo proseguirai oltre Ouarzazate, attraverso l'oasi di Skoura e la Valle delle Rose fino a raggiungere Boumalne Dades per cena e pernottamento in un caratteristico riad."
    },
    {
      "day": "Giorno 2",
      "title": "Boumalne Dades – Gole del Todra – Erfoud – Deserto di Merzouga – Campo di lusso",
      "content": "Dopo la prima colazione ammirerai le suggestive gole della Valle del Dades prima di dirigerti verso le spettacolari Gole del Todra, passeggiando tra gigantesche falesie verticali di roccia rossa. Tempo per il pranzo. Proseguirai poi verso Erfoud per scoprire i laboratori di fossili e giungerai a Merzouga. Nel pomeriggio salirai a dorso di dromedario per ammirare il tramonto tra le dune dell'Erg Chebbi e raggiungere l'accampamento di lusso con cena tipica berbera e musica di tamburi attorno al fuoco."
    },
    {
      "day": "Giorno 3",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Sveglia all'alba per contemplare lo spettacolo del sole che sorge sulle dune, seguita dalla prima colazione. Rientro in dromedario a Merzouga per un'emozionante giornata in 4×4: visiterai antiche miniere di kohl, sosterai presso una famiglia nomade berbera per un tè alla menta e assisterai a una performance di musica spirituale gnawa a Khamlia. Nel pomeriggio passeggerai nell'oasi e visiterai il lago di Merzouga. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 4",
      "title": "Dune di Merzouga – Erfoud – Midelt – Foresta di Cedri – Ifrane – Fes",
      "content": "L'ultima giornata ti condurrà a Rissani per una passeggiata nel caratteristico mercato tradizionale. Risalirai la Valle dello Ziz verso Midelt per il pranzo libero e attraverserai la Foresta di Cedri di Azrou per osservare le scimmie barbaresche. Dopo una sosta nella cittadina alpina di Ifrane, giungerai a Fes nel tardo pomeriggio con trasferimento al tuo riad o in aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Giorno 1",
      "subtitle": "Marrakech – Alto Atlante – Ait Ben Haddou – Ouarzazate – Boumalne Dades",
      "desc": "Partenza da Marrakech attraverso il Tizi N'Tichka e Ait Ben Haddou verso la Valle del Dades."
    },
    {
      "number": 2,
      "name": "Boumalne Dades",
      "day": "Giorno 2",
      "subtitle": "Boumalne Dades – Gole del Todra – Erfoud – Merzouga – Campo di lusso",
      "desc": "Visita delle Gole del Todra, arrivo a Merzouga e notte in campo tendato di lusso."
    },
    {
      "number": 3,
      "name": "Regione di Merzouga",
      "day": "Giorno 3",
      "subtitle": "Esplorazione di Merzouga – Nomadi – Khamlia – Lago – Palmeraie",
      "desc": "Escursione in 4×4 alla scoperta di famiglie nomadi, cultura Gnawa e oasi a Merzouga."
    },
    {
      "number": 4,
      "name": "Dune di Merzouga a Fes",
      "day": "Giorno 4",
      "subtitle": "Merzouga – Erfoud – Midelt – Foresta di Cedri – Ifrane – Fes",
      "desc": "Viaggio attraverso la Valle dello Ziz, foresta di cedri e Ifrane con arrivo a Fes."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_1.webp",
      "cap": "Passo Tizi N'Tichka",
      "alt": "Spettacolare strada di montagna dell'Alto Atlante attraverso il passo Tizi N'Tichka"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_10.webp",
      "cap": "Madrasa Al Attarine",
      "alt": "Corte storica della madrasa Al Attarine con intricati arabeschi a Fes"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_2.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Torri fortificate in mattoni di fango di Ait Ben Haddou contro il cielo del deserto"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_3.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Mura in argilla e palme della Kasbah Taourirt a Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_4.webp",
      "cap": "Gole del Todra",
      "alt": "Imponenti pareti verticali di roccia del canyon delle Gole del Todra"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_5.webp",
      "cap": "Dune di Erg Chebbi",
      "alt": "Carovana di dromedari guidata tra le sabbie dorate dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_6.webp",
      "cap": "Serata nel campo tendato",
      "alt": "Incontro attorno al falò con tamburi tradizionali sotto le stelle del deserto"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_7.webp",
      "cap": "Valle dello Ziz",
      "alt": "Palmeti e villaggi in terra cruda lungo il sinuoso canyon del fiume Ziz"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_8.webp",
      "cap": "Foresta di Cedri",
      "alt": "Foresta di cedri di Azrou con le tipiche scimmie barbaresche autoctone"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_9.webp",
      "cap": "Panorama di Fes",
      "alt": "Panorama della città medievale murata di Fes dalle Tombe Merinidi"
    },
    {
      "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/hero_2.webp",
      "cap": "Tramonto a Merzouga",
      "alt": "Tramonto che proietta lunghe ombre dorate sulle dune di sabbia di Merzouga"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un'esperienza completamente privata: auto, autista e itinerario sono riservati in esclusiva a te e al tuo gruppo."
    },
    {
      "question": "Quanto dura il tragitto in dromedario e ci sono alternative?",
      "answer": "La passeggiata dura circa 40-90 minuti. È possibile richiedere il trasferimento diretto al campo tendato in 4×4 senza alcun costo aggiuntivo."
    },
    {
      "question": "Come sono organizzate le tende nel campo di lusso?",
      "answer": "Le tende dispongono di comodi letti veri, bagno privato interno con wc e doccia calda ed elettricità."
    },
    {
      "question": "Da dove si parte e dove termina il viaggio?",
      "answer": "Verremo a prenderti presso il tuo riad, hotel o all'aeroporto di Marrakech e ti riaccompagneremo al tuo alloggio o all'aeroporto di Fes."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Il viaggio si svolge a bordo di un moderno fuoristrada 4×4 o comodo minivan con aria condizionata e capiente vano bagagli."
    },
    {
      "question": "È possibile richiedere menu per particolari esigenze dietetiche?",
      "answer": "Certamente: piatti vegetariani, vegani o senza glutine possono essere preparati senza problemi segnalandolo alla prenotazione."
    },
    {
      "question": "Il viaggio è adatto anche a famiglie con bambini o anziani?",
      "answer": "Sì, le 4 giornate di viaggio consentono di suddividere bene le distanze e prevedono frequenti soste panoramiche."
    },
    {
      "question": "Qual è il periodo migliore per questo viaggio?",
      "answer": "Da ottobre a maggio le temperature sono ideali per viaggiare tra le montagne e il deserto."
    }
  ]
};

// Execute saves
saveTour("4-day-morocco-desert-tour-from-fes-to-marrakech", tour40_es, tour40_it);
saveTour("4-day-morocco-itinerary-desert-tour-from-fes", tour41_es, tour41_it);
saveTour("4-day-morocco-tour-from-casablanca", tour42_es, tour42_it);
saveTour("4-days-marrakech-to-fes-desert-tour", tour43_es, tour43_it);
