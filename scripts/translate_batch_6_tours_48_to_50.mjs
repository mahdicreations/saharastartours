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
// Tour 48: 5-days-morocco-tour-itinerary-from-fes-marrakech
// =============================================================
const tour48_es = {
  slug: "5-days-morocco-tour-itinerary-from-fes-marrakech",
  title: "Tour de 5 Días de Fez a Marrakech por el Desierto de Merzouga | Sahara Star Tours",
  shortTitle: "Tour de 5 Días de Fez a Marrakech por el Desierto",
  description: "Circuito privado de 5 días desde Fez hasta Marrakech vía Merzouga, Gargantas del Todra, Valle del Dades y Ouarzazate. Disfrute de dos días en el desierto y campamento de lujo.",
  aboutHtml: "<p>Este tour privado de 5 días de Fez a Marrakech ofrece una inmersión completa y relajada en los paisajes más espectaculares de Marruecos. Comenzando en la capital espiritual de Fez, descenderá a través del Medio Atlas y el cañón del Valle del Ziz hacia el majestuoso mar de dunas de Erg Chebbi. Dispondrá de tiempo suficiente para explorar la vida nómada, la música gnawa de Khamlia y disfrutar de una noche mágica en campamento de lujo, antes de continuar por las impresionantes Gargantas del Todra, el Valle del Dades, los estudios de Ouarzazate y la icónica Kasbah de Ait Ben Haddou hacia Marrakech.</p>",
  duration: "5 Días / 4 Noches",
  startingFrom: "Fez",
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
    "Chófer/guía local experimentado de habla hispana",
    "Combustible, peajes y gastos de funcionamiento del vehículo",
    "Alojamiento en riads/hoteles seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
    "Paseo en camello por las dunas con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y gastos aeroportuarios",
    "Entradas a monumentos o estudios opcionales",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Su viaje de 5 días comienza temprano con la recogida en su alojamiento o en el aeropuerto de Fez. Conducirá hacia el sur pasando por Imouzzer hasta Ifrane, conocida como 'la Suiza de Marruecos' por su arquitectura alpina y su clima fresco. Continuará hacia el Bosque de Cedros de Azrou para observar a los macacos de Berbería en libertad. Tras el almuerzo en Midelt, descenderá por el cañón y los palmerales del Valle del Ziz. Por la tarde llegará a Merzouga, donde montará en camello para contemplar la puesta de sol sobre las dunas de Erg Chebbi y llegar a su campamento de lujo con cena tradicional y música de tambores bereberes bajo las estrellas."
    },
    {
      "day": "Día 2",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Despertará al amanecer para contemplar la salida del sol sobre el mar de arena. Tras el desayuno regresará en camello a Merzouga para una jornada en todoterreno 4×4 por el desierto: visitará antiguas minas de kohl, compartirá un té con familias nómadas bereberes en sus tiendas artesanales y asistirá a una actuación de música y danza gnawa en el pueblo de Khamlia. Tras un almuerzo tradicional, paseará por el palmeral y contemplará el lago estacional de Merzouga. Cena y alojamiento en un confortable hotel frente a las dunas."
    },
    {
      "day": "Día 3",
      "title": "Desierto de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "content": "Tras el desayuno en el hotel, visitará la legendaria Rissani con su animado zoco tradicional, corazón comercial de la región de Tafilalet. Continuará hacia Erfoud para conocer talleres de mármol fosilizado y seguirá por los palmerales de Touroug y Tinjdad hasta alcanzar las colosales Gargantas del Todra, un cañón de acantilados rojos verticales donde disfrutará de tiempo para pasear y almorzar. Luego continuará hacia el Valle del Dades, deteniéndose ante las formaciones rocosas de los 'dedos de mono'. Cena y noche en un riad en Dades."
    },
    {
      "day": "Día 4",
      "title": "Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Ouarzazate",
      "content": "Tras el desayuno continuará hacia Kalaat M'Gouna para visitar el Valle de las Rosas, famoso por sus cosméticos y agua de rosas elaborados artesanalmente por cooperativas locales. Almuerzo libre. Proseguirá a través del extenso palmeral de Skoura y visitará la histórica Kasbah de Amridil. Finalmente llegará a Ouarzazate, donde visitará los afamados estudios cinematográficos y la Kasbah Taourirt. Cena y alojamiento en un agradable hotel en Ouarzazate."
    },
    {
      "day": "Día 5",
      "title": "Kasbah Ait Ben Haddou – Alto Atlas – Marrakech",
      "content": "En la última jornada visitará la famosa Kasbah de Ait Ben Haddou, pueblo fortificado de adobe declarado Patrimonio de la Humanidad por la UNESCO y escenario de grandes producciones cinematográficas como Gladiator, Lawrence de Arabia y Juego de Tronos. Por la tarde cruzará las cumbres del Alto Atlas a través del puerto de Tizi N'Tichka (2.260 m) con paradas para fotografías antes de llegar a Marrakech, donde concluirá el circuito con traslado a su riad o al aeropuerto."
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
      "name": "Región de Merzouga",
      "day": "Día 2",
      "subtitle": "Exploración de Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Excursión en 4×4 conociendo nómadas, música gnawa y paisajes de Erg Chebbi."
    },
    {
      "number": 3,
      "name": "Merzouga al Dades",
      "day": "Día 3",
      "subtitle": "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "desc": "Zoco de Rissani, fósiles de Erfoud y paseo por las Gargantas del Todra hacia Dades."
    },
    {
      "number": 4,
      "name": "Valle del Dades",
      "day": "Día 4",
      "subtitle": "Dades – Valle de las Rosas – Skoura – Ouarzazate",
      "desc": "Valle de las Rosas, Kasbah Amridil en Skoura y estudios de cine en Ouarzazate."
    },
    {
      "number": 5,
      "name": "Ait Ben Haddou a Marrakech",
      "day": "Día 5",
      "subtitle": "Ait Ben Haddou – Alto Atlas – Marrakech",
      "desc": "Visita de la Kasbah Ait Ben Haddou y cruce panorámico del Alto Atlas hasta Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_1.webp",
      "cap": "Curtiduría Chouara",
      "alt": "Cubas de tinte de piedra en la curtiduría de Chouara y cueros coloridos en Fez"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_10.webp",
      "cap": "Plaza Jemaa el-Fna",
      "alt": "Artistas y puestos de mercado en la vibrante plaza Jemaa el-Fna de Marrakech"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_2.webp",
      "cap": "Ciudad de Ifrane",
      "alt": "Casas de piedra de estilo europeo y jardines cuidados en la ciudad de montaña de Ifrane"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_3.webp",
      "cap": "Macaco de Berbería",
      "alt": "Mono macaco de Berbería encaramado en una rama en el bosque de cedros de Azrou"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_4.webp",
      "cap": "Oasis del Ziz",
      "alt": "Vista panorámica del exuberante oasis de palmeras datileras en el Valle del Ziz"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_5.webp",
      "cap": "Caravana en Erg Chebbi",
      "alt": "Caravana de camellos caminando por la cresta de las dunas de Erg Chebbi al atardecer"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_6.webp",
      "cap": "Fogata bereber",
      "alt": "Fogata bereber con músicos interpretando melodías tradicionales del desierto"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_7.webp",
      "cap": "Gargantas del Todra",
      "alt": "Altos acantilados verticales de roca en las Gargantas del Todra junto al arroyo"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_8.webp",
      "cap": "Valle del Dades",
      "alt": "Kasbahs de arcilla roja y huertos escalonados a lo largo del Valle del Dades"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar fortificado de adobe de Ait Ben Haddou contra un cielo azul intenso"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/hero_2.webp",
      "cap": "Amanecer en Merzouga",
      "alt": "Brillo del amanecer sobre el mar ondulante de dunas de Erg Chebbi en Merzouga"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, conductor e itinerario están reservados en exclusiva para su grupo, con flexibilidad horaria."
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
      "answer": "Le recogeremos en su alojamiento o en el aeropuerto de Fez y el tour concluirá en Marrakech con traslado a su riad o al aeropuerto."
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
      "answer": "La primavera y el otoño brindan temperaturas suaves y cielos despejados muy recomendables para combinar las montañas, el desierto y las ciudades históricas."
    }
  ]
};

const tour48_it = {
  slug: "5-days-morocco-tour-itinerary-from-fes-marrakech",
  title: "Tour di 5 Giorni da Fes a Marrakech nel Deserto di Merzouga | Sahara Star Tours",
  shortTitle: "Tour di 5 Giorni da Fes a Marrakech nel Deserto",
  description: "Circuito privato di 5 giorni da Fes a Marrakech via Merzouga, Gole del Todra, Valle del Dades e Ouarzazate. Vivi due notti tra le dune dell'Erg Chebbi e campo di lusso.",
  aboutHtml: "<p>Questo tour privato di 5 giorni da Fes a Marrakech permette di vivere il grande sud del Marocco in totale relax e autenticità. Partendo da Fes, attraverserai le montagne del Medio Atlante e i palmeti della Valle dello Ziz verso le dorate dune dell'Erg Chebbi a Merzouga. Trascorrerai due giornate ricche di emozioni tra dromedari, famiglie nomadi e musica gnawa a Khamlia, prima di proseguire per le magnifiche Gole del Todra, il Valle del Dades, Ouarzazate e la Kasbah di Ait Ben Haddou fino a Marrakech.</p>",
  duration: "5 Giorni / 4 Notti",
  startingFrom: "Fes",
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
    "Autista/guida locale esperto per l'intero viaggio",
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
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      "content": "Il tuo tour di 5 giorni inizia con il prelievo al mattino presto presso il tuo alloggio o l'aeroporto di Fes. Attraverserai Imouzzer e la graziosa cittadina di Ifrane, la 'Svizzera del Marocco'. Sosterai nella Foresta di Cedri di Azrou per osservare le scimmie barbaresche. Dopo il pranzo a Midelt, scenderai lungo le suggestive gole e gli infiniti palmeti della Valle dello Ziz ed Errachidia. Nel pomeriggio raggiungerai le magnifiche dune dorate dell'Erg Chebbi a Merzouga: salirai a dorso di dromedario per assistere al tramonto sul deserto e raggiungere l'accampamento di lusso con cena tipica berbera e canti attorno al falò sotto le stelle."
    },
    {
      "day": "Giorno 2",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Sveglia all'alba per assistere allo straordinario sorgere del sole sul deserto dorato. Dopo la colazione rientrerai a Merzouga per un'emozionante giornata in fuoristrada 4×4: visiterai antiche miniere di kohl, sosterai in una tenda tessuta a mano per condividere un tè con i nomadi berberi e assisterai a una performance di musica gnawa nel villaggio di Khamlia. Nel pomeriggio passeggerai nell'oasi e visiterai il lago di Merzouga. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 3",
      "title": "Deserto di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "content": "Dopo la prima colazione in hotel visiterai la storica Rissani con il suo tradizionale mercato locale, fulcro commerciale secolare del Tafilalet. Proseguirai per Erfoud per scoprire i laboratori di marmo fossile e attraverserai i palmeti di Touroug e Tinjdad fino alle impressionanti Gole del Todra, camminando lungo il canyon tra pareti verticali di roccia calcarea alte oltre 300 metri. Pranzo e proseguimento verso la Valle del Dades, con sosta fotografica alle singolari 'dita di scimmia'. Cena e pernottamento in riad nel Dades."
    },
    {
      "day": "Giorno 4",
      "title": "Valle del Dades – Valle delle Rose – Palmeraie di Skoura – Ouarzazate",
      "content": "Dopo la prima colazione viaggerai verso Kalaat M'Gouna nella profumata Valle delle Rose per scoprire la produzione artigianale di acqua di rose e cosmetici. Proseguirai attraverso la verdeggiante oasi di Skoura visitando la storica Kasbah di Amridil. Giungerai infine a Ouarzazate, dove visiterai i rinomati studi cinematografici e la suggestiva Kasbah Taourirt. Cena e pernottamento in hotel a Ouarzazate."
    },
    {
      "day": "Giorno 5",
      "title": "Kasbah Ait Ben Haddou – Alto Atlante – Marrakech",
      "content": "Nell'ultima giornata visiterai la celebre Kasbah di Ait Ben Haddou, patrimonio mondiale UNESCO set di capolavori come Il Gladiatore e Il Trono di Spade. Nel pomeriggio risalirai il maestoso passo di Tizi N'Tichka (2.260 m) con soste panoramiche sull'Alto Atlante, prima di arrivare a Marrakech dove il tour si concluderà con il rientro al tuo alloggio o all'aeroporto."
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
      "name": "Regione di Merzouga",
      "day": "Giorno 2",
      "subtitle": "Esplorazione di Merzouga – Nomadi – Khamlia – Lago – Palmeraie",
      "desc": "Tour in fuoristrada 4×4 alla scoperta di nomadi, tradizioni Gnawa e dune di Merzouga."
    },
    {
      "number": 3,
      "name": "Merzouga al Dades",
      "day": "Giorno 3",
      "subtitle": "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "desc": "Mercato di Rissani, laboratori di fossili e passeggiata nelle Gole del Todra."
    },
    {
      "number": 4,
      "name": "Valle del Dades",
      "day": "Giorno 4",
      "subtitle": "Dades – Valle delle Rose – Skoura – Ouarzazate",
      "desc": "Valle delle Rose, Kasbah Amridil a Skoura e studi di cinema a Ouarzazate."
    },
    {
      "number": 5,
      "name": "Ait Ben Haddou a Marrakech",
      "day": "Giorno 5",
      "subtitle": "Ait Ben Haddou – Alto Atlante – Marrakech",
      "desc": "Visita di Ait Ben Haddou e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_1.webp",
      "cap": "Conceria Chouara",
      "alt": "Vasche di tintura in pietra della conceria Chouara e pelli colorate a Fes"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_10.webp",
      "cap": "Piazza Jemaa el-Fna",
      "alt": "Artisti e bancarelle nella vivace piazza Jemaa el-Fna di Marrakech"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_2.webp",
      "cap": "Cittadina di Ifrane",
      "alt": "Abitazioni in stile europeo e giardini curati nella cittadina montana di Ifrane"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_3.webp",
      "cap": "Scimmia barbaresca",
      "alt": "Scimmia barbaresca appollaiata su un ramo nella foresta di cedri di Azrou"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_4.webp",
      "cap": "Oasi dello Ziz",
      "alt": "Veduta panoramica della lussureggiante oasi di palme nella Valle dello Ziz"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_5.webp",
      "cap": "Carovana all'Erg Chebbi",
      "alt": "Carovana di dromedari sul crinale delle dune dell'Erg Chebbi al tramonto"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_6.webp",
      "cap": "Falò berbero",
      "alt": "Falò berbero con musicisti che intonano melodie tradizionali del deserto"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_7.webp",
      "cap": "Gole del Todra",
      "alt": "Alte falesie verticali di roccia nelle Gole del Todra lungo il torrente"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_8.webp",
      "cap": "Valle del Dades",
      "alt": "Kasbah in terra rossa e terrazze coltivate lungo la Valle del Dades"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar fortificato in mattoni crudi di Ait Ben Haddou sotto il cielo azzurro"
    },
    {
      "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/hero_2.webp",
      "cap": "Alba a Merzouga",
      "alt": "Luce dell'alba che risplende sulle dune ondulate dell'Erg Chebbi a Merzouga"
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
      "answer": "Verremo a prenderti al tuo riad o aeroporto a Fes e ti riaccompagneremo al tuo alloggio o all'aeroporto Menara a Marrakech."
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
      "answer": "Sì, le tappe sono ben distribuite su 5 giorni e prevedono frequenti soste panoramiche per riposare."
    },
    {
      "question": "Qual è il periodo migliore dell'anno per partire?",
      "answer": "La primavera e l'autunno offrono un clima meraviglioso sia sulle montagne che nel deserto del Sahara."
    }
  ]
};

// =============================================================
// Tour 49: 6-days-morocco-desert-tour-from-marrakech
// =============================================================
const tour49_es = {
  slug: "6-days-morocco-desert-tour-from-marrakech",
  title: "Tour de 6 Días de Marrakech a Fez por el Desierto del Sahara | Sahara Star Tours",
  shortTitle: "Tour de 6 Días de Marrakech a Fez por el Desierto",
  description: "Circuito privado de 6 días desde Marrakech a Fez vía Ait Ben Haddou, Valle del Dades, dunas de Erg Chebbi y visita guiada a la medina de Fez.",
  aboutHtml: "<p>Este tour privado de 6 días de Marrakech a Fez es el itinerario desértico y cultural más completo de Marruecos. Cruzará el Alto Atlas y explorará el ksar de Ait Ben Haddou, los cañones del Dades y del Todra, y disfrutará de dos noches inolvidables en Merzouga: una en campamento de lujo entre las dunas de Erg Chebbi y otra en un confortable hotel tras conocer a familias nómadas y la música gnawa de Khamlia. Culminará con un día entero de visita guiada con guía oficial en la milenaria medina de Fez.</p>",
  duration: "6 Días / 5 Noches",
  startingFrom: "Marrakech",
  price: "Desde $790/persona",
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
    "Alojamiento en riads seleccionados y campamento de lujo",
    "Desayunos diarios y cenas según el itinerario",
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
      "title": "Marrakech – Alto Atlas – Kasbah Ait Ben Haddou – Valle de las Rosas – Valle del Dades",
      "content": "Su viaje de 6 días comienza temprano con la recogida en su alojamiento o en el aeropuerto de Marrakech. Conducirá a través del paso de Tizi N'Tichka (2.260 m) en el Alto Atlas, contemplando aldeas bereberes tradicionales y paisajes montañosos. Visitará la famosa Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO y escenario de famosas películas. Tras el almuerzo continuará pasando por Ouarzazate, el palmeral de Skoura y el Valle de las Rosas hasta llegar al Valle del Dades para cenar y descansar en un acogedor riad."
    },
    {
      "day": "Día 2",
      "title": "Valle del Dades – Gargantas del Todra – Dunas de Merzouga – Campamento de lujo",
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
      "content": "En la cuarta jornada partirá hacia Rissani para visitar su zoco tradicional. Continuará hacia Erfoud y ascenderá por el cañón del Valle del Ziz hacia Midelt, donde disfrutará de tiempo libre para almorzar. Luego atravesará el Bosque de Cedros de Azrou para observar a los macacos de Berbería y visitará Ifrane, conocida como 'la Suiza de Marruecos'. Finalmente llegará a Fez por la tarde con traslado directo a su riad tradicional."
    },
    {
      "day": "Día 5",
      "title": "Visita guiada de Fez con guía local",
      "content": "Día completo dedicado a explorar la fascinante medina de Fez el-Bali, una de las joyas medievales mejor conservadas del mundo islámico. Acompañado por un guía oficial local, visitará el Palacio Real, el barrio judío (Mellah), la histórica Madrasa Al Attarine, la Universidad Al Quaraouiyine y las famosas curtidurías de Chouara. Tarde libre para descansar o pasear por los zocos."
    },
    {
      "day": "Día 6",
      "title": "Traslado al aeropuerto de Fez",
      "content": "A la hora convenida según el horario de su vuelo, su chófer le recogerá en su riad para trasladarle al aeropuerto de Fez Sais. Fin del tour por el desierto de Marrakech a Fez."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Día 1",
      "subtitle": "Marrakech – Alto Atlas – Ait Ben Haddou – Dades",
      "desc": "Salida de Marrakech por el Alto Atlas y Ait Ben Haddou hacia el Valle del Dades."
    },
    {
      "number": 2,
      "name": "Valle del Dades",
      "day": "Día 2",
      "subtitle": "Dades – Gargantas del Todra – Merzouga – Campamento de lujo",
      "desc": "Paseo por las Gargantas del Todra, llegada a Erg Chebbi y noche en campamento de lujo."
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
      "name": "Merzouga a Fez",
      "day": "Día 4",
      "subtitle": "Merzouga – Erfoud – Valle del Ziz – Ifrane – Fez",
      "desc": "Viaje a través del Valle del Ziz, bosque de cedros e Ifrane con llegada a Fez."
    },
    {
      "number": 5,
      "name": "Visita guiada de Fez",
      "day": "Día 5",
      "subtitle": "Visita cultural guiada en la medina de Fez",
      "desc": "Recorrido con guía local por palacios, mezquitas, madrasas y curtidurías de Fez."
    },
    {
      "number": 6,
      "name": "Traslado al aeropuerto",
      "day": "Día 6",
      "subtitle": "Traslado al aeropuerto de Fez",
      "desc": "Despedida y traslado al aeropuerto de Fez según horario de vuelo."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_1.webp",
      "cap": "Paso Tizi N'Tichka",
      "alt": "Paisaje de montaña a lo largo del paso Tizi n'Tichka en la cordillera del Alto Atlas"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_10.webp",
      "cap": "Medina de Fez",
      "alt": "Arquitectura histórica de la medina y puertas arqueadas en la Fez medieval"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_2.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Antiguo pueblo fortificado de Ait Ben Haddou con torres de vigilancia de arcilla"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_3.webp",
      "cap": "Valle de las Rosas",
      "alt": "Paisaje del Valle de las Rosas en Kalaat M'Gouna con rosales en flor"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_4.webp",
      "cap": "Valle del Dades",
      "alt": "Paredes del cañón de roca roja y exuberantes huertos del Valle del Dades"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_5.webp",
      "cap": "Gargantas del Todra",
      "alt": "Paredes de escalada de roca en las Gargantas del Todra sobre el fondo del cañón"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_6.webp",
      "cap": "Dunas de Merzouga",
      "alt": "Viajeros montando camellos a través de las dunas de arena naranja de Merzouga"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_7.webp",
      "cap": "Música gnawa",
      "alt": "Noche de fogata con música gnawa en directo en un campamento de lujo"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_8.webp",
      "cap": "Oasis del Ziz",
      "alt": "Mirador panorámico sobre el oasis de palmeras verdes a lo largo del cañón del Ziz"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_9.webp",
      "cap": "Bosque de Cedros",
      "alt": "Cedros en el Medio Atlas donde habitan macacos salvajes de Berbería"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/hero_2.webp",
      "cap": "Cumbres del Alto Atlas",
      "alt": "Luz del sol iluminando un pico montañoso escarpado en el Alto Atlas"
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
      "answer": "Sí, el circuito de 6 días reparte muy bien las distancias y permite realizar descansos frecuentes en los lugares más bonitos del recorrido."
    },
    {
      "question": "¿Cuál es la época recomendada para este viaje?",
      "answer": "De octubre a mayo el clima es templado y muy agradable tanto en las montañas como en el desierto."
    }
  ]
};

const tour49_it = {
  slug: "6-days-morocco-desert-tour-from-marrakech",
  title: "Tour di 6 Giorni da Marrakech a Fes nel Deserto del Sahara | Sahara Star Tours",
  shortTitle: "Tour di 6 Giorni da Marrakech a Fes nel Deserto",
  description: "Circuito privato di 6 giorni da Marrakech a Fes via Ait Ben Haddou, Valle del Dades, dune di Erg Chebbi e visita guidata della medina di Fes.",
  aboutHtml: "<p>Questo tour privato di 6 giorni da Marrakech a Fes è l'itinerario più completo per unire le due leggendarie città imperiali esplorando il cuore del Sahara. Valicherai l'Alto Atlante visitando la celebre Kasbah di Ait Ben Haddou e le gole del Dades e del Todra. Godrai di due indimenticabili notti a Merzouga (in accampamento di lusso tra le dune dell'Erg Chebbi e in hotel dopo aver incontrato famiglie nomadi e musica gnawa) per poi concludere con un'intera giornata di visita guidata a Fes.</p>",
  duration: "6 Giorni / 5 Notti",
  startingFrom: "Marrakech",
  price: "Da $790/persona",
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
      "title": "Marrakech – Alto Atlante – Kasbah Ait Ben Haddou – Valle delle Rose – Valle del Dades",
      "content": "Partenza al mattino presto dal tuo alloggio o dall'aeroporto di Marrakech. Attraverserai l'Alto Atlante lungo il panoramico valico del Tizi N'Tichka (2.260 m), ammirando villaggi berberi arroccati. Raggiungerai la storica Kasbah di Ait Ben Haddou, patrimonio UNESCO set di film indimenticabili. Dopo il pranzo proseguirai oltre Ouarzazate, attraverso l'oasi di Skoura e la Valle delle Rose fino al Valle del Dades per cena e pernottamento in riad."
    },
    {
      "day": "Giorno 2",
      "title": "Valle del Dades – Gole del Todra – Dune di Merzouga – Campo di lusso",
      "content": "Dopo la prima colazione ammirerai le suggestive gole della Valle del Dades prima di dirigerti verso le imponenti Gole del Todra, camminando lungo il canyon tra falesie calcaree alte oltre 300 metri. Tempo per il pranzo. Proseguirai per Erfoud alla scoperta dei laboratori di marmo fossile e giungerai a Merzouga. Nel tardo pomeriggio salirai sui dromedari per ammirare il tramonto tra le dune dell'Erg Chebbi e raggiungere il campo tendato di lusso con cena berbera e musica attorno al falò."
    },
    {
      "day": "Giorno 3",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Palmeraie",
      "content": "Sveglia all'alba per assistere al sorgere del sole sul mare di sabbia dorata. Dopo la prima colazione rientrerai a Merzouga per un'emozionante giornata in 4×4: visiterai antiche miniere di kohl, berrai il tradizionale tè con una famiglia nomade berbera e ascolterai la musica spirituale gnawa a Khamlia. Nel pomeriggio passeggerai nell'oasi e visiterai il lago di Merzouga. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 4",
      "title": "Dune di Merzouga – Erfoud – Midelt – Foresta di Cedri – Ifrane – Fes",
      "content": "Nella quarta giornata visiterai la storica Rissani e proseguirai per Erfoud, risalendo la scenografica Valle dello Ziz verso Midelt per il pranzo libero. Attraverserai la Foresta di Cedri di Azrou per osservare le scimmie barbaresche e sosterai nella cittadina alpina di Ifrane, giungendo a Fes nel tardo pomeriggio con trasferimento al tuo riad."
    },
    {
      "day": "Giorno 5",
      "title": "Visita guidata di Fes con guida locale",
      "content": "Intera giornata dedicata alla visita guidata della millenaria medina di Fes el-Bali con una guida ufficiale. Ammirerai il Palazzo Reale con le porte in bronzo dorato, il quartiere ebraico del Mellah, la Madrasa Al Attarine, l'Università Al Quaraouiyine e le celebri concerie di Chouara. Pomeriggio libero per immergersi nell'atmosfera dei souk."
    },
    {
      "day": "Giorno 6",
      "title": "Trasferimento all'aeroporto di Fes",
      "content": "In base all'orario del tuo volo, l'autista ti accompagnerà all'aeroporto di Fes Sais. Conclusione del tour nel deserto da Marrakech a Fes."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Giorno 1",
      "subtitle": "Marrakech – Alto Atlante – Ait Ben Haddou – Dades",
      "desc": "Partenza da Marrakech attraverso il Tizi N'Tichka e Ait Ben Haddou verso il Dades."
    },
    {
      "number": 2,
      "name": "Valle del Dades",
      "day": "Giorno 2",
      "subtitle": "Dades – Gole del Todra – Merzouga – Campo di lusso",
      "desc": "Passeggiata nelle Gole del Todra, arrivo all'Erg Chebbi e notte in campo tendato di lusso."
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
      "name": "Merzouga a Fes",
      "day": "Giorno 4",
      "subtitle": "Merzouga – Erfoud – Valle dello Ziz – Ifrane – Fes",
      "desc": "Viaggio attraverso la Valle dello Ziz, foresta di cedri e Ifrane con arrivo a Fes."
    },
    {
      "number": 5,
      "name": "Visita guidata di Fes",
      "day": "Giorno 5",
      "subtitle": "Tour guidato culturale della medina di Fes",
      "desc": "Visita con guida ufficiale a monumenti storici, madrasse e concerie di Fes."
    },
    {
      "number": 6,
      "name": "Trasferimento all'aeroporto",
      "day": "Giorno 6",
      "subtitle": "Trasferimento all'aeroporto di Fes",
      "desc": "Transfer in aeroporto a Fes in base all'orario del volo."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_1.webp",
      "cap": "Passo Tizi N'Tichka",
      "alt": "Paesaggio montano lungo il passo Tizi n'Tichka nella catena dell'Alto Atlante"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_10.webp",
      "cap": "Medina di Fes",
      "alt": "Architettura storica della medina e porte ad arco nella Fes medievale"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_2.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Antico villaggio fortificato di Ait Ben Haddou con torri di guardia in argilla"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_3.webp",
      "cap": "Valle delle Rose",
      "alt": "Paesaggio della Valle delle Rose a Kelaat M'Gouna con cespugli di rose in fiore"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_4.webp",
      "cap": "Valle del Dades",
      "alt": "Pareti del canyon di roccia rossa e frutteti rigogliosi della Valle del Dades"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_5.webp",
      "cap": "Gole del Todra",
      "alt": "Pareti d'arrampicata su roccia nelle Gole del Todra sul fondo del canyon"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_6.webp",
      "cap": "Dune di Merzouga",
      "alt": "Viaggiatori in dromedario attraverso le dune di sabbia arancione di Merzouga"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_7.webp",
      "cap": "Musica gnawa",
      "alt": "Serata attorno al falò con musica gnawa dal vivo in un campo tendato di lusso"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_8.webp",
      "cap": "Oasi dello Ziz",
      "alt": "Belvedere panoramico sull'oasi di palme verdi che si snoda nella gola dello Ziz"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_9.webp",
      "cap": "Foresta di Cedri",
      "alt": "Cedri nel Medio Atlante dove vivono le scimmie barbaresche selvatiche"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/hero_2.webp",
      "cap": "Vette dell'Alto Atlante",
      "alt": "Luce del sole che illumina un picco montuoso aspro nell'Alto Atlante"
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
      "answer": "Sì, le 6 giornate di viaggio consentono di suddividere bene le distanze e prevedono frequenti soste panoramiche."
    },
    {
      "question": "Qual è il periodo migliore per questo viaggio?",
      "answer": "Da ottobre a maggio le temperature sono ideali per viaggiare tra le montagne e il deserto."
    }
  ]
};

// =============================================================
// Tour 50: 6-days-morocco-tour-itinerary-from-tangier-to-marrakech
// =============================================================
const tour50_es = {
  slug: "6-days-morocco-tour-itinerary-from-tangier-to-marrakech",
  title: "Tour de 6 Días de Tánger a Marrakech por el Desierto de Merzouga | Sahara Star Tours",
  shortTitle: "Tour de 6 Días de Tánger a Marrakech",
  description: "Circuito privado de 6 días desde Tánger a Marrakech visitando Chefchaouen, Volubilis, Fez con guía local, las dunas de Merzouga y Ait Ben Haddou.",
  aboutHtml: "<p>Este tour privado de 6 días desde Tánger hasta Marrakech es la gran travesía por el reino de Marruecos, uniendo de norte a sur sus joyas más codiciadas. Comenzará en el estrecho de Tánger, descansará en la pintoresca 'ciudad azul' de Chefchaouen, visitará las ruinas romanas de Volubilis y explorará la medina de Fez con guía local oficial. Luego cruzará el Atlas hacia el desierto de Merzouga para disfrutar de un paseo en camello y noche en campamento de lujo en Erg Chebbi, concluyendo a través de las Gargantas del Todra y Ait Ben Haddou en Marrakech.</p>",
  duration: "6 Días / 5 Noches",
  startingFrom: "Tánger",
  price: "Desde $790/persona",
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
      "title": "Llegada a Tánger – Chefchaouen",
      "content": "Su viaje de 6 días comienza con la recogida en su alojamiento, en el aeropuerto o en el puerto de Tánger. Conocida como 'la novia del norte', visitará Cabo Espartel y las Cuevas de Hércules antes de emprender viaje hacia el sureste a través de los paisajes de las montañas del Rif hasta llegar a la mágica Chefchaouen. Tarde libre para pasear por sus callejuelas azules. Cena y alojamiento en un riad tradicional."
    },
    {
      "day": "Día 2",
      "title": "Chefchaouen – Ruinas Romanas de Volubilis – Mequinez – Fez",
      "content": "Tras el desayuno en Chefchaouen, continuará viaje hacia las ruinas romanas de Volubilis (Patrimonio de la Humanidad por la UNESCO), famosas por sus mosaicos y su basílica. Luego visitará Mequinez para admirar la monumental puerta de Bab Mansour y el mausoleo de Moulay Ismail. Por la tarde llegará a Fez, la capital espiritual de Marruecos. Cena y noche en un riad en la medina."
    },
    {
      "day": "Día 3",
      "title": "Visita guiada de Fez con guía local",
      "content": "Día completo dedicado a explorar la fascinante medina de Fez el-Bali con un guía oficial local. Visitará el Palacio Real con sus puertas doradas, el barrio judío (Mellah), la histórica Madrasa Al Attarine, la Universidad Al Quaraouiyine y las famosas curtidurías de Chouara. Tarde libre para relajarse en su riad."
    },
    {
      "day": "Día 4",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Partirá hacia el sur cruzando Ifrane, la 'Suiza de Marruecos', y el Bosque de Cedros de Azrou para observar a los macacos de Berbería en libertad. Tras el almuerzo en Midelt, descenderá por las impresionantes gargantas y palmerales del Valle del Ziz y Errachidia. Por la tarde alcanzará las doradas dunas de Erg Chebbi en Merzouga, donde montará en camello para presenciar el atardecer sobre las dunas y llegar a su campamento de lujo con cena tradicional y música de tambores bereberes bajo las estrellas."
    },
    {
      "day": "Día 5",
      "title": "Desierto de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      "content": "Madrugará para presenciar el inolvidable amanecer sobre el mar de dunas. Tras el desayuno en el campamento, regresará en camello o 4×4 a Merzouga. Visitará Rissani con su animado zoco tradicional y continuará por Erfoud hacia las imponentes Gargantas del Todra, un cañón de colosales muros rojizos ideal para pasear a pie. Tiempo para almorzar. Por la tarde llegará al Valle del Dades, admirando las curiosas formaciones de los 'dedos de mono'. Cena y noche en riad en Dades."
    },
    {
      "day": "Día 6",
      "title": "Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
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
      "name": "Visita guiada de Fez",
      "day": "Día 3",
      "subtitle": "Visita guiada en la medina histórica de Fez",
      "desc": "Recorrido con guía local oficial por palacios, madrasas y curtidurías de Fez."
    },
    {
      "number": 4,
      "name": "Fez a Merzouga",
      "day": "Día 4",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga",
      "desc": "Cruce del Medio Atlas y Valle del Ziz hacia las dunas de Erg Chebbi y campamento de lujo."
    },
    {
      "number": 5,
      "name": "Merzouga al Dades",
      "day": "Día 5",
      "subtitle": "Merzouga – Rissani – Erfoud – Todra – Valle del Dades",
      "desc": "Amanecer en las dunas, zoco de Rissani, paseo por las Gargantas del Todra y noche en Dades."
    },
    {
      "number": 6,
      "name": "Valle del Dades a Marrakech",
      "day": "Día 6",
      "subtitle": "Dades – Valle de las Rosas – Skoura – Ait Ben Haddou – Marrakech",
      "desc": "Visita a Ait Ben Haddou y cruce panorámico del Alto Atlas hasta Marrakech."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_1.webp",
      "cap": "Cabo Espartel",
      "alt": "Acantilados costeros de Cabo Espartel y faro con vistas al océano en Tánger"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_10.webp",
      "cap": "Mezquita Koutoubia",
      "alt": "Histórico alminar de la mezquita Koutoubia rodeado de jardines de rosas en Marrakech"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_2.webp",
      "cap": "Chefchaouen azul",
      "alt": "Escaleras azules sinuosas y portales con azulejos decorativos en Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_3.webp",
      "cap": "Ruinas de Volubilis",
      "alt": "Antiguas ruinas romanas de Volubilis con columnas sobre verdes valles"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_4.webp",
      "cap": "Bab Mansour",
      "alt": "Murallas de la ciudad de Mequinez y monumental puerta imperial de Bab Mansour"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_5.webp",
      "cap": "Curtidores de Fez",
      "alt": "Artesanos tradicionales del cuero trabajando en la curtiduría de Chouara en Fez"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_6.webp",
      "cap": "Ifrane nevado",
      "alt": "Chalets alpinos y pinos nevados en la localidad invernal de Ifrane"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_7.webp",
      "cap": "Atardecer en Erg Chebbi",
      "alt": "Excursión en camello al atardecer por las ondulantes dunas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_8.webp",
      "cap": "Gargantas del Todra",
      "alt": "Estrecho paso de cañón de roca roja a través de las espectaculares Gargantas del Todra"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Edificios de adobe escalonados del ksar fortificado de Ait Ben Haddou"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/hero_2.webp",
      "cap": "Medina de Chefchaouen",
      "alt": "Vista general de la medina azul de Chefchaouen con la Mezquita Española en la colina"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, conductor e itinerario están reservados en exclusiva para su grupo."
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

const tour50_it = {
  slug: "6-days-morocco-tour-itinerary-from-tangier-to-marrakech",
  title: "Tour di 6 Giorni da Tangeri a Marrakech nel Deserto di Merzouga | Sahara Star Tours",
  shortTitle: "Tour di 6 Giorni da Tangeri a Marrakech",
  description: "Circuito privato di 6 giorni da Tangeri a Marrakech alla scoperta di Chefchaouen, Volubilis, Fes con guida locale, le dune di Merzouga e Ait Ben Haddou.",
  aboutHtml: "<p>Questo tour privato di 6 giorni da Tangeri a Marrakech rappresenta il gran tour del Marocco per antonomasia, collegando le sponde mediterranee del nord con le dune del Sahara e il fascino di Marrakech. Partendo da Tangeri visiterai la suggestiva 'città blu' di Chefchaouen, il sito archeologico di Volubilis e la medina millenaria di Fes con guida locale ufficiale. Valicherai poi l'Atlante verso l'Erg Chebbi a Merzouga con passeggiata in dromedario e notte in accampamento di lusso, proseguendo attraverso le Gole del Todra e Ait Ben Haddou fino a Marrakech.</p>",
  duration: "6 Giorni / 5 Notti",
  startingFrom: "Tangeri",
  price: "Da $790/persona",
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
    "Voli aerei e trasferimenti marittimi/aeroportuali non specificati",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e spese personali"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Arrivo a Tangeri – Chefchaouen",
      "content": "Il tuo viaggio inizia con il prelievo al porto, all'aeroporto o al tuo alloggio a Tangeri. Conosciuta come 'la sposa del nord', visiterai Capo Spartel e le leggendarie Grotte d'Ercole prima di viaggiare verso sud-est attraverso i suggestivi monti del Rif fino a raggiungere Chefchaouen. Pomeriggio libero per perdersi tra le caratteristiche viuzze celesti. Cena e pernottamento in un incantevole riad."
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
      "title": "Deserto di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      "content": "Sveglia all'alba per assistere allo straordinario sorgere del sole sulle dune. Dopo la colazione, rientro in dromedario o in 4×4 a Merzouga. Visiterai Rissani con il suo tradizionale mercato locale e proseguirai per Erfoud verso le spettacolari Gole del Todra, camminando lungo il canyon tra colossali falesie di roccia rossa. Pranzo locale e proseguimento verso la Valle del Dades con sosta fotografica alle singolari 'dita di scimmia'. Cena e notte in riad nel Dades."
    },
    {
      "day": "Giorno 6",
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
      "name": "Merzouga al Dades",
      "day": "Giorno 5",
      "subtitle": "Merzouga – Rissani – Erfoud – Todra – Valle del Dades",
      "desc": "Alba sulle dune, souk di Rissani, passeggiata nelle Gole del Todra e notte nel Dades."
    },
    {
      "number": 6,
      "name": "Valle del Dades a Marrakech",
      "day": "Giorno 6",
      "subtitle": "Dades – Valle delle Rose – Skoura – Ait Ben Haddou – Marrakech",
      "desc": "Visita di Ait Ben Haddou e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_1.webp",
      "cap": "Capo Spartel",
      "alt": "Falesie costiere di Capo Spartel e faro affacciato sull'oceano a Tangeri"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_10.webp",
      "cap": "Moschea Koutoubia",
      "alt": "Storico minareto della Moschea Koutoubia circondato da giardini fioriti a Marrakech"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_2.webp",
      "cap": "Chefchaouen blu",
      "alt": "Scalinate blu sinuose e ingressi decorati a Chefchaouen"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_3.webp",
      "cap": "Rovine di Volubilis",
      "alt": "Antiche rovine romane di Volubilis con colonne affacciate sulle valli verdi"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_4.webp",
      "cap": "Bab Mansour",
      "alt": "Mura della città di Meknes e monumentale porta imperiale di Bab Mansour"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_5.webp",
      "cap": "Conciatori di Fes",
      "alt": "Artigiani del cuoio al lavoro presso la conceria Chouara a Fes"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_6.webp",
      "cap": "Ifrane innevata",
      "alt": "Chalet alpini e pini innevati nella rinomata località invernale di Ifrane"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_7.webp",
      "cap": "Tramonto all'Erg Chebbi",
      "alt": "Escursione in dromedario al tramonto tra le dune ondulate dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_8.webp",
      "cap": "Gole del Todra",
      "alt": "Stretto canyon di roccia rossa attraverso le spettacolari Gole del Todra"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_9.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Edifici in terra cruda a terrazza dello ksar fortificato di Ait Ben Haddou"
    },
    {
      "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/hero_2.webp",
      "cap": "Medina di Chefchaouen",
      "alt": "Veduta della medina blu di Chefchaouen con la Moschea Spagnola sulla collina"
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
saveTour("5-days-morocco-tour-itinerary-from-fes-marrakech", tour48_es, tour48_it);
saveTour("6-days-morocco-desert-tour-from-marrakech", tour49_es, tour49_it);
saveTour("6-days-morocco-tour-itinerary-from-tangier-to-marrakech", tour50_es, tour50_it);
