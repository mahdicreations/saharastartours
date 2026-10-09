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
// Tour 55: morocco-2-day-desert-fes-tour-from-ouarzazate
// =============================================================
const tour55_es = {
  slug: "morocco-2-day-desert-fes-tour-from-ouarzazate",
  title: "Tour de 2 Días por el Desierto de Ouarzazate a Fez | Sahara Star Tours",
  shortTitle: "Tour de 2 Días de Ouarzazate a Fez",
  description: "Ruta exprés de 2 días desde Ouarzazate a Fez pasando por las Gargantas del Todra, paseo en camello al atardecer en Merzouga y noche en campamento de lujo.",
  aboutHtml: "<p>Este tour privado de 2 días de Ouarzazate a Fez es la forma más rápida y auténtica de cruzar el gran sur marroquí hasta la capital cultural del norte. Partiendo de Ouarzazate, recorrerá el Valle del Todra y sus colosales gargantas antes de alcanzar las doradas dunas de Erg Chebbi en Merzouga. Tras un inolvidable paseo en camello al atardecer y una noche bajo las estrellas en un campamento de lujo, viajará rumbo a Fez a través del cañón del Ziz, Midelt y los bosques de cedros del Medio Atlas.</p>",
  duration: "2 Días / 1 Noche",
  price: "Desde $320/persona",
  startingFrom: "Ouarzazate",
  highlights: [
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Noche en campamento en el desierto con cena y desayuno",
    "Medina de Fez y lugares culturales históricos",
    "Ouarzazate, la puerta del desierto",
    "Gargantas del Todra y sus colosales acantilados"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local profesional de habla hispana",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en campamento de lujo en Erg Chebbi",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y traslados no especificados",
    "Gastos personales y compras de recuerdos",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Ouarzazate – Gargantas del Todra – Dunas de Merzouga – Campamento de lujo",
      "content": "Su chófer le recogerá temprano en su alojamiento o en el aeropuerto de Ouarzazate. Conducirá hacia el este a través del Valle del Todra, donde el río ha excavado un cañón monumental entre montañas de roca caliza roja. Podrá pasear por las gargantas y apreciar la grandeza del paisaje. Continuará atravesando los palmerales de Touroug y Tinjdad con tiempo libre para almorzar. Por la tarde llegará a las doradas arenas de Merzouga para montar en camello, disfrutar de la puesta de sol sobre una alta duna de Erg Chebbi y llegar a su campamento de lujo con cena tradicional y tambores bereberes bajo el cielo estrellado."
    },
    {
      "day": "Día 2",
      "title": "Dunas de Merzouga – Erfoud – Midelt – Bosque de Cedros – Ifrane – Fez",
      "content": "Madrugará para contemplar el amanecer sobre las dunas y desayunará en el campamento. Regresará en camello a Merzouga para reencontrarse con su chófer. Visitará Rissani con su animado zoco tradicional y continuará por Erfoud hacia los talleres de fósiles. Luego ascenderá por el cañón del Valle del Ziz hacia Midelt, donde disfrutará de tiempo para almorzar. Atravesará el Bosque de Cedros de Azrou para observar a los macacos de Berbería y visitará Ifrane, conocida como 'la Suiza de Marruecos'. Finalmente llegará a Fez por la tarde con traslado directo a su riad o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Ouarzazate",
      "day": "Día 1",
      "subtitle": "Ouarzazate – Todra – Merzouga – Campamento de lujo",
      "desc": "Salida de Ouarzazate pasando por las Gargantas del Todra hacia Erg Chebbi y campamento."
    },
    {
      "number": 2,
      "name": "Merzouga Dunes a Fez",
      "day": "Día 2",
      "subtitle": "Merzouga – Erfoud – Midelt – Ifrane – Fez",
      "desc": "Amanecer en las dunas, zoco de Rissani, bosque de cedros y llegada a Fez."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_1.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Muros de tierra fortificados de la Kasbah Taourirt bajo el cielo azul en Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_10.webp",
      "cap": "Medina de Fez",
      "alt": "Arquitectura histórica de la medina y alminares sobre los tejados de Fez"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_2.webp",
      "cap": "Gargantas del Todra",
      "alt": "Fondo del cañón de las Gargantas del Todra flanqueado por altos acantilados de caliza"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_3.webp",
      "cap": "Atardecer en Erg Chebbi",
      "alt": "Excursión en camello por las altas dunas naranjas de Erg Chebbi al atardecer"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_4.webp",
      "cap": "Campamento de lujo",
      "alt": "Jaimas blancas de lujo en un campamento del desierto en Merzouga bajo la noche estrellada"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_5.webp",
      "cap": "Talleres de fósiles",
      "alt": "Talleres de fósiles y exposiciones artesanales de mármol en la ciudad de Erfoud"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_6.webp",
      "cap": "Valle del Ziz",
      "alt": "Ruta panorámica a través del verde oasis de palmeras y acantilados del Valle del Ziz"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_7.webp",
      "cap": "Montañas de Midelt",
      "alt": "Paisaje de alta montaña y manzanos alrededor de Midelt en el Atlas"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_8.webp",
      "cap": "Macaco de Berbería",
      "alt": "Mono macaco de Berbería en el bosque de cedros de Azrou cerca de Ifrane"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_9.webp",
      "cap": "Panorámica de Fez",
      "alt": "Vista panorámica de la extensa ciudad medieval de Fez el-Bali"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/hero_2.webp",
      "cap": "Amanecer en Merzouga",
      "alt": "Amanecer sobre las crestas de dunas de arena dorada de Erg Chebbi en Merzouga"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia completamente privada: el vehículo, conductor e itinerario están reservados en exclusiva para su grupo."
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
      "answer": "Le recogeremos en su alojamiento o en el aeropuerto de Ouarzazate y el tour concluirá en Fez con traslado a su riad o al aeropuerto de Fez Sais."
    },
    {
      "question": "¿Qué tipo de vehículo se utiliza?",
      "answer": "El viaje se realiza en un cómodo vehículo privado 4×4 o monovolumen con aire acondicionado. Para grupos más numerosos disponemos de minibuses adaptados."
    },
    {
      "question": "¿Se pueden atender requerimientos dietéticos particulares?",
      "answer": "Sí. Infórmenos sobre sus preferencias o restricciones dietéticas al reservar para que los alojamientos y el campamento preparen comidas adecuadas (vegetariano, vegano, sin gluten, etc.)."
    },
    {
      "question": "¿Es este itinerario adecuado para todas las edades?",
      "answer": "Sí, es perfectamente adecuado para todas las edades, con paradas regulares para descansar a lo largo de las rutas escénicas."
    },
    {
      "question": "¿Cuál es la mejor época del año para realizar este tour?",
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados muy recomendables para disfrutar del desierto del Sahara y cruzar el Atlas."
    }
  ]
};

const tour55_it = {
  slug: "morocco-2-day-desert-fes-tour-from-ouarzazate",
  title: "Tour di 2 Giorni da Ouarzazate a Fes nel Deserto | Sahara Star Tours",
  shortTitle: "Tour di 2 Giorni da Ouarzazate a Fes",
  description: "Circuito espresso privato di 2 giorni da Ouarzazate a Fes via Gole del Todra, escursione in dromedario a Merzouga e notte in accampamento di lusso.",
  aboutHtml: "<p>Questo tour privato di 2 giorni da Ouarzazate a Fes è l'opzione perfetta per collegare rapidamente il grande sud alle città imperiali del nord attraversando le magnifiche dune del Sahara. Da Ouarzazate attraverserai le imponenti Gole del Todra fino alle dorate dune dell'Erg Chebbi a Merzouga per un tramonto in dromedario e una notte indimenticabile sotto le stelle in un campo tendato di lusso, per poi raggiungere Fes attraverso la Valle dello Ziz e il Medio Atlante.</p>",
  duration: "2 Giorni / 1 Notte",
  price: "Da $320/persona",
  startingFrom: "Ouarzazate",
  highlights: [
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Notte in campo tendato di lusso con cena e colazione berbera",
    "Medina di Fes e tesori culturali storici",
    "Ouarzazate, la porta d'accesso al deserto",
    "Gole del Todra e colossali falesie rocciose"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale professionista per l'intero viaggio",
    "Carburante, pedaggi e spese operative del veicolo",
    "Sistemazione in campo tendato di lusso a Merzouga",
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
      "title": "Ouarzazate – Gole del Todra – Dune di Merzouga – Campo di lusso",
      "content": "Il tuo autista ti accoglierà al mattino presto presso il tuo alloggio o all'aeroporto di Ouarzazate. Viaggerai verso est attraverso la Valle del Todra, dove il fiume ha scavato un grandioso canyon con falesie verticali di roccia calcarea rossa alte più di 300 metri. Passeggiata e pranzo in ristorante locale. Nel pomeriggio proseguirai verso Merzouga: salirai a dorso di dromedario per assistere al tramonto tra le dune dell'Erg Chebbi e raggiungere l'accampamento di lusso con cena berbera e canti attorno al falò sotto le stelle."
    },
    {
      "day": "Giorno 2",
      "title": "Dune di Merzouga – Erfoud – Midelt – Foresta di Cedri – Ifrane – Fes",
      "content": "Sveglia all'alba per assistere allo straordinario sorgere del sole sulle dune, seguita dalla prima colazione. Rientro in dromedario a Merzouga per ritrovare l'autista. Visiterai Rissani con il suo tradizionale mercato e proseguirai per Erfoud alla scoperta dei laboratori di marmo fossile. Risalirai la scenografica Valle dello Ziz verso Midelt per il pranzo libero e attraverserai la Foresta di Cedri di Azrou con le scimmie barbaresche. Dopo una sosta nella cittadina alpina di Ifrane, giungerai a Fes nel tardo pomeriggio con trasferimento al tuo riad o all'aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Ouarzazate",
      "day": "Giorno 1",
      "subtitle": "Ouarzazate – Todra – Merzouga – Campo di lusso",
      "desc": "Partenza da Ouarzazate passando per le Gole del Todra verso l'Erg Chebbi e campo tendato."
    },
    {
      "number": 2,
      "name": "Dune di Merzouga a Fes",
      "day": "Giorno 2",
      "subtitle": "Merzouga – Erfoud – Midelt – Ifrane – Fes",
      "desc": "Alba sulle dune, souk di Rissani, foresta dei cedri e arrivo a Fes."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_1.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Mura fortificate in terra cruda della Kasbah Taourirt sotto il cielo blu a Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_10.webp",
      "cap": "Medina di Fes",
      "alt": "Architettura storica della medina e minareti sui tetti di Fes"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_2.webp",
      "cap": "Gole del Todra",
      "alt": "Fondo del canyon delle Gole del Todra affiancato da alte falesie calcaree"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_3.webp",
      "cap": "Tramonto a Erg Chebbi",
      "alt": "Escursione in dromedario sulle alte dune arancioni dell'Erg Chebbi al tramonto"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_4.webp",
      "cap": "Campo tendato di lusso",
      "alt": "Tende bianche di lusso in un campo nel deserto a Merzouga sotto la notte stellata"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_5.webp",
      "cap": "Laboratori di fossili",
      "alt": "Laboratori di fossili ed esposizioni artigianali di marmo nella città di Erfoud"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_6.webp",
      "cap": "Valle dello Ziz",
      "alt": "Strada panoramica attraverso la verde oasi di palme e falesie della Valle dello Ziz"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_7.webp",
      "cap": "Montagne di Midelt",
      "alt": "Paesaggio di alta montagna e meleti intorno a Midelt nell'Atlante"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_8.webp",
      "cap": "Scimmia barbaresca",
      "alt": "Scimmia barbaresca nella foresta di cedri di Azrou vicino a Ifrane"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_9.webp",
      "cap": "Panorama di Fes",
      "alt": "Veduta panoramica della vasta città medievale di Fes el-Bali"
    },
    {
      "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/hero_2.webp",
      "cap": "Alba a Merzouga",
      "alt": "Alba sulle creste delle dune di sabbia dorata dell'Erg Chebbi a Merzouga"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, conducente e programma sono a uso esclusivo del tuo gruppo con la massima flessibilità."
    },
    {
      "question": "Quanto dura il percorso in dromedario e ci sono alternative?",
      "answer": "La passeggiata in dromedario dura circa 40-90 minuti. Se preferisci non cavalcare, è possibile organizzare il trasferimento diretto al campo in 4×4 senza alcun costo extra."
    },
    {
      "question": "La tenda nell'accampamento nel deserto è privata?",
      "answer": "Sì, l'accampamento di lusso dispone di ampie tende private con veri letti, bagno privato interno con wc e doccia calda."
    },
    {
      "question": "Dove avvengono la partenza e il termine del tour?",
      "answer": "Verremo a prenderti al tuo alloggio o aeroporto a Ouarzazate e ti riaccompagneremo al tuo alloggio o all'aeroporto a Fes."
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

// =============================================================
// Tour 56: morocco-3-day-desert-fes-tour-from-ouarzazate
// =============================================================
const tour56_es = {
  slug: "morocco-3-day-desert-fes-tour-from-ouarzazate",
  title: "Tour de 3 Días por el Desierto de Ouarzazate a Fez | Sahara Star Tours",
  shortTitle: "Tour de 3 Días de Ouarzazate a Fez",
  description: "Circuito privado de 3 días desde Ouarzazate a Fez visitando las Gargantas del Todra, dos días explorando Merzouga, cultura nómada y música gnawa.",
  aboutHtml: "<p>Este tour privado de 3 días desde Ouarzazate a Fez le permite sumergirse en la esencia del Sahara marroquí a un ritmo ideal. Desde Ouarzazate y los impresionantes desfiladeros del Todra viajará hacia las majestuosas dunas de Erg Chebbi en Merzouga. Dispondrá de tiempo completo para cabalgar en camello, dormir en campamento de lujo bajo las estrellas, compartir té con familias nómadas y escuchar la música espiritual gnawa en Khamlia antes de continuar por el Valle del Ziz y el Medio Atlas hasta Fez.</p>",
  duration: "3 Días / 2 Noches",
  price: "Desde $420/persona",
  startingFrom: "Ouarzazate",
  highlights: [
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Noche en campamento en el desierto con cena y desayuno",
    "Medina de Fez y lugares culturales históricos",
    "Ouarzazate, la puerta del desierto",
    "Gargantas del Todra y sus colosales acantilados"
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
    "Vuelos y traslados no especificados",
    "Entradas opcionales a monumentos",
    "Propinas y gastos personales"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Ouarzazate – Gargantas del Todra – Dunas de Merzouga – Campamento de lujo",
      "content": "Su chófer le recogerá temprano en su alojamiento o en el aeropuerto de Ouarzazate. Conducirá hacia el este a través del Valle del Todra, donde el río ha excavado un cañón monumental entre montañas de roca caliza roja. Podrá pasear por las gargantas y apreciar la grandeza del paisaje. Continuará atravesando los palmerales de Touroug y Tinjdad con tiempo libre para almorzar. Por la tarde llegará a las doradas arenas de Merzouga para montar en camello, disfrutar de la puesta de sol sobre una alta duna de Erg Chebbi y llegar a su campamento de lujo con cena tradicional y tambores bereberes bajo el cielo estrellado."
    },
    {
      "day": "Día 2",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Día completo dedicado a explorar la región desértica de Merzouga en 4×4. Comenzará visitando antiguas minas de kohl, luego visitará a nómadas en sus tiendas de lana para conocer su estilo de vida tradicional mientras degusta un té bereber. Continuará al pueblo de Khamlia para presenciar música y danzas tradicionales gnawa. Tiempo libre para almorzar en un restaurante local. Por la tarde paseará por un oasis de palmeras y visitará el lago estacional de Merzouga. Más tarde montará en camello sobre las dunas y descansará en campamento de lujo con cena y tambores alrededor de la fogata."
    },
    {
      "day": "Día 3",
      "title": "Dunas de Merzouga – Erfoud – Midelt – Bosque de Cedros – Ifrane – Fez",
      "content": "Amanecer en las dunas y desayuno tradicional. Regresará en camello a Merzouga para reunirse con su chófer. Visitará Rissani con su animado zoco tradicional y continuará hacia Erfoud para conocer talleres de mármol fosilizado. Proseguirá viaje a lo largo del cañón del Valle del Ziz hacia Midelt para almorzar. Luego atravesará el Bosque de Cedros de Azrou para observar a los macacos de Berbería y visitará Ifrane, la 'Suiza de Marruecos'. Finalmente llegará a Fez por la tarde con traslado directo a su riad o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Ouarzazate",
      "day": "Día 1",
      "subtitle": "Ouarzazate – Todra – Merzouga – Campamento de lujo",
      "desc": "Salida de Ouarzazate pasando por las Gargantas del Todra hacia Erg Chebbi."
    },
    {
      "number": 2,
      "name": "Exploración de Merzouga",
      "day": "Día 2",
      "subtitle": "Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Día en 4×4 conociendo familias nómadas, música gnawa y oasis en Erg Chebbi."
    },
    {
      "number": 3,
      "name": "Merzouga a Fez",
      "day": "Día 3",
      "subtitle": "Merzouga – Erfoud – Valle del Ziz – Ifrane – Fez",
      "desc": "Viaje a través del Valle del Ziz, bosque de cedros e Ifrane con llegada a Fez."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_1.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Bastión de tierra de la Kasbah Taourirt y palmeras en el centro de Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_10.webp",
      "cap": "Bab Bou Jeloud",
      "alt": "Antigua puerta de Bab Bou Jeloud con azulejos cerámicos azules en Fez"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_2.webp",
      "cap": "Gargantas del Todra",
      "alt": "Altas paredes de caliza de las Gargantas del Todra elevándose sobre los visitantes"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_3.webp",
      "cap": "Caravana en Merzouga",
      "alt": "Caravana de camellos moviéndose a lo largo de las curvas crestas de dunas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_4.webp",
      "cap": "Familia nómada",
      "alt": "Vivienda tradicional de una familia nómada bereber en las llanuras desérticas cerca de Merzouga"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_5.webp",
      "cap": "Música gnawa",
      "alt": "Músicos gnawa interpretando música espiritual del desierto en el pueblo de Khamlia"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_6.webp",
      "cap": "Oasis del Ziz",
      "alt": "Exuberante oasis de palmeras datileras que se extiende a través del rocoso Valle del Ziz"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_7.webp",
      "cap": "Valle de Midelt",
      "alt": "Valle montañoso de Midelt con vistas al monte Ayachi en el Atlas oriental"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_8.webp",
      "cap": "Bosque de Cedros",
      "alt": "Cedros en las montañas del Medio Atlas donde habitan macacos salvajes"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_9.webp",
      "cap": "Curtiduría Chouara",
      "alt": "Pozas de tinte de piedra y procesamiento de cuero en la curtiduría de Chouara en Fez"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/hero_2.webp",
      "cap": "Dunas de Erg Chebbi",
      "alt": "Luz matinal panorámica a través de las amplias dunas de Erg Chebbi en Merzouga"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia completamente privada: el vehículo, conductor e itinerario están reservados en exclusiva para su grupo."
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
      "answer": "Le recogeremos en su alojamiento o en el aeropuerto de Ouarzazate y el tour concluirá en Fez con traslado a su riad o al aeropuerto de Fez Sais."
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
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados muy recomendables para combinar el desierto del Sahara y las montañas del Atlas."
    }
  ]
};

const tour56_it = {
  slug: "morocco-3-day-desert-fes-tour-from-ouarzazate",
  title: "Tour di 3 Giorni da Ouarzazate a Fes nel Deserto | Sahara Star Tours",
  shortTitle: "Tour di 3 Giorni da Ouarzazate a Fes",
  description: "Circuito privato di 3 giorni da Ouarzazate a Fes con Gole del Todra, due giornate a Merzouga, cultura nomade e musica gnawa.",
  aboutHtml: "<p>Questo tour privato di 3 giorni da Ouarzazate a Fes ti offre l'opportunità di vivere il grande Sahara marocchino a un ritmo rilassato e autentico. Da Ouarzazate attraverso le maestose Gole del Todra raggiungerai l'Erg Chebbi a Merzouga per due giornate indimenticabili: trekking in dromedario, notte in campo tendato di lusso, incontro con famiglie nomadi e musica gnawa a Khamlia, per poi risalire la Valle dello Ziz e il Medio Atlante fino a Fes.</p>",
  duration: "3 Giorni / 2 Notti",
  price: "Da $420/persona",
  startingFrom: "Ouarzazate",
  highlights: [
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Notte in campo tendato di lusso con cena e colazione berbera",
    "Medina di Fes e tesori culturali storici",
    "Ouarzazate, la porta d'accesso al deserto",
    "Gole del Todra e colossali falesie rocciose"
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
      "title": "Ouarzazate – Gole del Todra – Dune di Merzouga – Campo di lusso",
      "content": "Partenza mattutina dal tuo alloggio o dall'aeroporto di Ouarzazate. Attraverserai la Valle del Todra, dove il fiume ha scavato un maestoso canyon tra falesie calcaree rosse alte più di 300 metri. Passeggiata e pranzo in ristorante locale. Nel pomeriggio proseguirai verso Merzouga: salirai a dorso di dromedario per assistere al tramonto tra le dune dell'Erg Chebbi e raggiungere l'accampamento di lusso con cena berbera e canti attorno al falò sotto le stelle."
    },
    {
      "day": "Giorno 2",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Intera giornata dedicata a scoprire la regione di Merzouga in 4×4. Visiterai antiche miniere di kohl, sosterai in una tenda tessuta a mano per condividere un tè con i nomadi berberi e assisterai a una performance di musica spirituale gnawa a Khamlia. Pranzo libero in ristorante locale. Nel pomeriggio passeggerai nell'oasi e visiterai il lago di Merzouga prima di salire sui dromedari per raggiungere il campo tendato di lusso per la cena attorno al fuoco."
    },
    {
      "day": "Giorno 3",
      "title": "Dune di Merzouga – Erfoud – Midelt – Foresta di Cedri – Ifrane – Fes",
      "content": "Alba sulle dune e colazione all'accampamento. Rientro in dromedario a Merzouga per ritrovare l'autista. Visiterai Rissani con il suo tradizionale mercato locale e proseguirai per Erfoud verso i laboratori di fossili. Risalirai la scenografica Valle dello Ziz verso Midelt per il pranzo libero e attraverserai la Foresta di Cedri di Azrou con le scimmie barbaresche. Dopo una sosta nella cittadina alpina di Ifrane, giungerai a Fes nel tardo pomeriggio con trasferimento al tuo riad o in aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Ouarzazate",
      "day": "Giorno 1",
      "subtitle": "Ouarzazate – Todra – Merzouga – Campo di lusso",
      "desc": "Partenza da Ouarzazate attraverso le Gole del Todra verso l'Erg Chebbi."
    },
    {
      "number": 2,
      "name": "Esplorazione di Merzouga",
      "day": "Giorno 2",
      "subtitle": "Merzouga – Nomadi – Khamlia – Lago – Palmeraie",
      "desc": "Giornata in 4×4 alla scoperta di famiglie nomadi, villaggio Gnawa e oasi."
    },
    {
      "number": 3,
      "name": "Merzouga a Fes",
      "day": "Giorno 3",
      "subtitle": "Merzouga – Erfoud – Valle dello Ziz – Ifrane – Fes",
      "desc": "Viaggio attraverso la Valle dello Ziz, foresta di cedri e Ifrane con arrivo a Fes."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_1.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Bastione in terra cruda della Kasbah Taourirt e palme nel centro di Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_10.webp",
      "cap": "Bab Bou Jeloud",
      "alt": "Antica porta di Bab Bou Jeloud con ceramiche smaltate blu a Fes"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_2.webp",
      "cap": "Gole del Todra",
      "alt": "Alte falesie calcaree delle Gole del Todra che sovrastano i visitatori"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_3.webp",
      "cap": "Carovana a Merzouga",
      "alt": "Carovana di dromedari lungo le creste ondulate delle dune dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_4.webp",
      "cap": "Famiglia nomade",
      "alt": "Abitazione tradizionale di una famiglia nomade berbera nelle pianure vicino a Merzouga"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_5.webp",
      "cap": "Musica gnawa",
      "alt": "Musicisti gnawa che eseguono musica spirituale del deserto nel villaggio di Khamlia"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_6.webp",
      "cap": "Oasi dello Ziz",
      "alt": "Lussureggiante oasi di palme da dattero lungo la rocciosa Valle dello Ziz"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_7.webp",
      "cap": "Valle di Midelt",
      "alt": "Valle montana di Midelt con vista sul monte Ayachi nell'Atlante orientale"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_8.webp",
      "cap": "Foresta di Cedri",
      "alt": "Cedri nelle montagne del Medio Atlante dove vivono le scimmie barbaresche selvatiche"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_9.webp",
      "cap": "Conceria Chouara",
      "alt": "Vasche di tintura in pietra e lavorazione del cuoio presso la conceria Chouara a Fes"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/hero_2.webp",
      "cap": "Dune dell'Erg Chebbi",
      "alt": "Luce del mattino panoramica sulle ampie dune dell'Erg Chebbi a Merzouga"
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
      "answer": "Sì, l'accampamento di lusso dispone di ampie tende private con veri letti, bagno privato interno con wc e doccia calda."
    },
    {
      "question": "Dove avvengono la partenza e il termine del tour?",
      "answer": "Verremo a prenderti al tuo alloggio o aeroporto a Ouarzazate e ti riaccompagneremo al tuo alloggio o all'aeroporto a Fes."
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
      "answer": "Sì, le 3 giornate di viaggio consentono di suddividere bene le distanze e prevedono frequenti soste panoramiche."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno offrono un clima meraviglioso sia sulle montagne che nel deserto del Sahara."
    }
  ]
};

// =============================================================
// Tour 57: morocco-3-day-desert-tour-ouarzazate-marrakech
// =============================================================
const tour57_es = {
  slug: "morocco-3-day-desert-tour-ouarzazate-marrakech",
  title: "Tour de 3 Días por el Desierto de Ouarzazate a Marrakech | Sahara Star Tours",
  shortTitle: "Tour de 3 Días de Ouarzazate a Marrakech",
  description: "Circuito privado de 3 días desde Ouarzazate a Marrakech explorando las dunas de Merzouga, cultura nómada, Ait Ben Haddou y el Alto Atlas.",
  aboutHtml: "<p>Este tour privado de 3 días desde Ouarzazate hasta Marrakech es la escapada perfecta al desierto comenzando en las puertas del Sahara. Cruzará las majestuosas Gargantas del Todra hacia las dunas de Erg Chebbi en Merzouga, donde disfrutará de dos días de inmersión en el desierto con noche en campamento de lujo, música gnawa en Khamlia y paseos en camello. Culminará cruzando el Valle del Draa, visitando la legendaria Kasbah de Ait Ben Haddou y superando el Alto Atlas hacia Marrakech.</p>",
  duration: "3 Días / 2 Noches",
  price: "Desde $420/persona",
  startingFrom: "Ouarzazate",
  highlights: [
    "Dunas de Merzouga y desierto de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Noche en campamento en el desierto con cena y desayuno",
    "Ruta panorámica a través de las montañas del Alto Atlas",
    "Medina histórica y lugares emblemáticos de Marrakech",
    "Ouarzazate, la puerta del desierto"
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
    "Vuelos y traslados no especificados",
    "Entradas opcionales a monumentos",
    "Propinas y gastos personales"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Ouarzazate – Gargantas del Todra – Dunas de Merzouga – Campamento de lujo",
      "content": "Su chófer le recogerá temprano en su alojamiento o en el aeropuerto de Ouarzazate. Conducirá hacia el este a través del Valle del Todra, donde el río ha excavado un cañón monumental entre montañas de roca caliza roja. Podrá pasear por las gargantas y apreciar la grandeza del paisaje. Continuará atravesando los palmerales de Touroug y Tinjdad con tiempo libre para almorzar. Por la tarde llegará a las doradas arenas de Merzouga para montar en camello, disfrutar de la puesta de sol sobre una alta duna de Erg Chebbi y llegar a su campamento de lujo con cena tradicional y tambores bereberes bajo el cielo estrellado."
    },
    {
      "day": "Día 2",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Día completo dedicado a explorar la región desértica de Merzouga en 4×4. Comenzará visitando antiguas minas de kohl, luego visitará a nómadas en sus tiendas de lana para conocer su estilo de vida tradicional mientras degusta un té bereber. Continuará al pueblo de Khamlia para presenciar música y danzas tradicionales gnawa. Tiempo libre para almorzar en un restaurante local. Por la tarde paseará por un oasis de palmeras y visitará el lago estacional de Merzouga. Más tarde montará en camello sobre las dunas y descansará en campamento de lujo con cena y tambores alrededor de la fogata."
    },
    {
      "day": "Día 3",
      "title": "Desierto de Merzouga – Kasbah Ait Ben Haddou – Alto Atlas – Marrakech",
      "content": "Madrugará para presenciar el amanecer sobre las dunas doradas seguido del desayuno. Regresará en camello o 4×4 a Merzouga para reencontrarse con su conductor e iniciar el viaje hacia el oeste. Parará en miradores escénicos antes de alcanzar Ouarzazate con tiempo libre para almorzar. Tras el almuerzo continuará hacia la famosa Kasbah de Ait Ben Haddou, pueblo fortificado de adobe declarado Patrimonio de la Humanidad por la UNESCO y plató de películas como Gladiator, La Momia y Juego de Tronos. Por la tarde cruzará el Alto Atlas a través del puerto de Tizi N'Tichka (2.260 m) con paradas panorámicas, llegando a Marrakech donde concluirá el circuito."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Ouarzazate",
      "day": "Día 1",
      "subtitle": "Ouarzazate – Todra – Merzouga – Campamento de lujo",
      "desc": "Salida de Ouarzazate pasando por las Gargantas del Todra hacia Erg Chebbi."
    },
    {
      "number": 2,
      "name": "Exploración de Merzouga",
      "day": "Día 2",
      "subtitle": "Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Día en 4×4 conociendo familias nómadas, música gnawa y oasis en Erg Chebbi."
    },
    {
      "number": 3,
      "name": "Merzouga a Marrakech",
      "day": "Día 3",
      "subtitle": "Merzouga – Ait Ben Haddou – Alto Atlas – Marrakech",
      "desc": "Amanecer en las dunas, visita de Ait Ben Haddou y cruce del Alto Atlas hasta Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_1.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Torres fortificadas de tierra de la Kasbah Taourirt contra el cielo azul en Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_10.webp",
      "cap": "Mezquita Koutoubia",
      "alt": "Alminar de la mezquita Koutoubia y jardines de palmeras en el centro de Marrakech"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_2.webp",
      "cap": "Gargantas del Todra",
      "alt": "Masivos acantilados verticales de roca en las Gargantas del Todra con arroyo de montaña"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_3.webp",
      "cap": "Paseo en camello",
      "alt": "Excursión en camello a través de las dunas doradas de Erg Chebbi durante la puesta de sol"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_4.webp",
      "cap": "Campamento de lujo",
      "alt": "Campamento de glamping en el desierto con tiendas de lujo rodeadas de dunas en Merzouga"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_5.webp",
      "cap": "Música gnawa",
      "alt": "Músicos del pueblo de Khamlia tocando castañuelas tradicionales de metal y tambores"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_6.webp",
      "cap": "Valle del Draa",
      "alt": "Ruta panorámica a través del exuberante oasis de palmeras datileras del Valle del Draa"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_7.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Pueblo fortificado de arcilla de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_8.webp",
      "cap": "Paso Tizi N'Tichka",
      "alt": "Carretera de montaña del Alto Atlas serpenteando a través del paso Tizi n'Tichka"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_9.webp",
      "cap": "Plaza Jemaa el-Fna",
      "alt": "Bulliciosa plaza Jemaa el-Fna en Marrakech con encantadores de serpientes y puestos"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/hero_2.webp",
      "cap": "Atardecer en Erg Chebbi",
      "alt": "Puesta de sol proyectando un cálido brillo naranja sobre las dunas de arena de Erg Chebbi"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia completamente privada: el vehículo, conductor e itinerario están reservados en exclusiva para su grupo."
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
      "answer": "Le recogeremos en su alojamiento o en el aeropuerto de Ouarzazate y el circuito concluirá en Marrakech con traslado a su riad o al aeropuerto."
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
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados muy recomendables para combinar el desierto del Sahara y el Alto Atlas."
    }
  ]
};

const tour57_it = {
  slug: "morocco-3-day-desert-tour-ouarzazate-marrakech",
  title: "Tour di 3 Giorni da Ouarzazate a Marrakech nel Deserto | Sahara Star Tours",
  shortTitle: "Tour di 3 Giorni da Ouarzazate a Marrakech",
  description: "Circuito privato di 3 giorni da Ouarzazate a Marrakech con le dune di Merzouga, cultura nomade, la Kasbah di Ait Ben Haddou e l'Alto Atlante.",
  aboutHtml: "<p>Questo tour privato di 3 giorni da Ouarzazate a Marrakech è l'itinerario perfetto per vivere la magia del Sahara partendo dalle porte del deserto fino alla celebre città imperiale di Marrakech. Dalle spettacolari Gole del Todra raggiungerai l'Erg Chebbi a Merzouga con due notti magiche tra dune dorate, notte in campo tendato di lusso e musica gnawa a Khamlia, per poi viaggiare verso Marrakech visitando la leggendaria Kasbah di Ait Ben Haddou e valicando l'Alto Atlante.</p>",
  duration: "3 Giorni / 2 Notti",
  price: "Da $420/persona",
  startingFrom: "Ouarzazate",
  highlights: [
    "Dune dorate di Merzouga ed Erg Chebbi",
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Notte in campo tendato di lusso con cena e colazione berbera",
    "Itinerario panoramico attraverso le montagne dell'Alto Atlante",
    "Medina storica e punti di riferimento iconici di Marrakech",
    "Ouarzazate, la porta d'accesso al deserto"
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
      "title": "Ouarzazate – Gole del Todra – Dune di Merzouga – Campo di lusso",
      "content": "Partenza mattutina dal tuo alloggio o dall'aeroporto di Ouarzazate. Attraverserai la Valle del Todra, dove il fiume ha scavato un maestoso canyon tra falesie calcaree rosse alte più di 300 metri. Passeggiata e pranzo in ristorante locale. Nel pomeriggio proseguirai verso Merzouga: salirai a dorso di dromedario per assistere al tramonto tra le dune dell'Erg Chebbi e raggiungere l'accampamento di lusso con cena berbera e canti attorno al falò sotto le stelle."
    },
    {
      "day": "Giorno 2",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Intera giornata dedicata a scoprire la regione di Merzouga in 4×4. Visiterai antiche miniere di kohl, sosterai in una tenda tessuta a mano per condividere un tè con i nomadi berberi e assisterai a una performance di musica spirituale gnawa a Khamlia. Pranzo libero in ristorante locale. Nel pomeriggio passeggerai nell'oasi e visiterai il lago di Merzouga prima di salire sui dromedari per raggiungere il campo tendato di lusso per la cena attorno al fuoco."
    },
    {
      "day": "Giorno 3",
      "title": "Deserto di Merzouga – Kasbah Ait Ben Haddou – Alto Atlante – Marrakech",
      "content": "Alba sulle dune e colazione all'accampamento. Rientro in dromedario o in 4×4 a Merzouga per ritrovare l'autista e partire verso ovest con soste panoramiche fino a Ouarzazate per il pranzo. Proseguirai per la celebre Kasbah di Ait Ben Haddou, villaggio fortificato patrimonio UNESCO celebre per Il Gladiatore e La Mummia. Nel pomeriggio risalirai il valico del Tizi N'Tichka (2.260 m) con spettacolari viste panoramiche sull'Alto Atlante, giungendo a Marrakech con rientro al tuo alloggio o all'aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Ouarzazate",
      "day": "Giorno 1",
      "subtitle": "Ouarzazate – Todra – Merzouga – Campo di lusso",
      "desc": "Partenza da Ouarzazate attraverso le Gole del Todra verso l'Erg Chebbi."
    },
    {
      "number": 2,
      "name": "Esplorazione di Merzouga",
      "day": "Giorno 2",
      "subtitle": "Merzouga – Nomadi – Khamlia – Lago – Palmeraie",
      "desc": "Giornata in 4×4 alla scoperta di famiglie nomadi, villaggio Gnawa e oasi."
    },
    {
      "number": 3,
      "name": "Merzouga a Marrakech",
      "day": "Giorno 3",
      "subtitle": "Merzouga – Ait Ben Haddou – Alto Atlante – Marrakech",
      "desc": "Alba sulle dune, visita di Ait Ben Haddou e arrivo a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_1.webp",
      "cap": "Kasbah Taourirt",
      "alt": "Torri fortificate in terra cruda della Kasbah Taourirt sotto il cielo blu a Ouarzazate"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_10.webp",
      "cap": "Moschea Koutoubia",
      "alt": "Minareto della Moschea Koutoubia e giardini di palme nel centro di Marrakech"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_2.webp",
      "cap": "Gole del Todra",
      "alt": "Grandiose falesie verticali di roccia nelle Gole del Todra con ruscello di montagna"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_3.webp",
      "cap": "Passeggiata in dromedario",
      "alt": "Escursione a dorso di dromedario tra le dune dorate dell'Erg Chebbi al tramonto"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_4.webp",
      "cap": "Campo tendato di lusso",
      "alt": "Accampamento glamping nel deserto con tende di lusso circondate da dune a Merzouga"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_5.webp",
      "cap": "Musica gnawa",
      "alt": "Musicisti del villaggio di Khamlia che suonano nacchere di metallo e tamburi"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_6.webp",
      "cap": "Valle del Draa",
      "alt": "Strada panoramica attraverso la lussureggiante oasi di palme da dattero del fiume Draa"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_7.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Villaggio fortificato in argilla di Ait Ben Haddou, patrimonio UNESCO"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_8.webp",
      "cap": "Passo Tizi N'Tichka",
      "alt": "Strada di montagna dell'Alto Atlante che si snoda attraverso il passo Tizi n'Tichka"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_9.webp",
      "cap": "Piazza Jemaa el-Fna",
      "alt": "Vivace piazza Jemaa el-Fna a Marrakech con incantatori di serpenti e bancarelle"
    },
    {
      "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/hero_2.webp",
      "cap": "Tramonto a Erg Chebbi",
      "alt": "Tramonto che diffonde una calda luce arancione sulle dune di sabbia dell'Erg Chebbi"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, conducente e programma sono a uso esclusivo del tuo gruppo con la massima flessibilità."
    },
    {
      "question": "Quanto dura il percorso in dromedario e ci sono alternative?",
      "answer": "La passeggiata in dromedario dura circa 40-90 minuti. Se preferisci non cavalcare, è possibile organizzare il trasferimento diretto al campo in 4×4 senza alcun costo extra."
    },
    {
      "question": "La tenda nell'accampamento nel deserto è privata?",
      "answer": "Sì, l'accampamento di lusso dispone di ampie tende private con veri letti, bagno privato interno con wc e doccia calda."
    },
    {
      "question": "Dove avvengono la partenza e il termine del tour?",
      "answer": "Verremo a prenderti al tuo alloggio o aeroporto a Ouarzazate e ti riaccompagneremo al tuo alloggio o all'aeroporto Menara a Marrakech."
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
      "answer": "La primavera e l'autunno offrono un clima meraviglioso per visitare il deserto del Sahara e l'Alto Atlante."
    }
  ]
};

// Execute saves
saveTour("morocco-2-day-desert-fes-tour-from-ouarzazate", tour55_es, tour55_it);
saveTour("morocco-3-day-desert-fes-tour-from-ouarzazate", tour56_es, tour56_it);
saveTour("morocco-3-day-desert-tour-ouarzazate-marrakech", tour57_es, tour57_it);
