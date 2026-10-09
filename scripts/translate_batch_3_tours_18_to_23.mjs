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
// Tour 18: agafay-desert-sunset-camel-ride
// -------------------------------------------------------------
const tour18_es = {
  slug: "agafay-desert-sunset-camel-ride",
  title: "Paseo en Camello al Atardecer y Cena en el Desierto de Agafay | Sahara Star",
  shortTitle: "Paseo en Camello al Atardecer y Cena en Agafay",
  description: "Escápese de Marrakech para disfrutar de un mágico paseo en camello al atardecer en el desierto de piedra de Agafay. Cena tradicional bereber bajo las estrellas con música.",
  aboutHtml: "Disfrute de una velada inolvidable en el desierto de Agafay con un paseo en camello al atardecer, cena tradicional marroquí en un campamento del desierto y música bereber en vivo alrededor de la hoguera.",
  duration: "1 Día / Excursión de Día Completo",
  startingFrom: "Marrakech",
  price: "Desde 85 $/persona",
  highlights: [
    "Mágico paseo en camello al atardecer en el desierto de Agafay con vistas panorámicas a las montañas del Atlas.",
    "Cena tradicional marroquí (tajines, cuscús, ensaladas, postre) servida en un acogedor campamento bajo jaimas bereberes.",
    "Ambiente cultural auténtico con música bereber, tambores y espectáculo en vivo alrededor de la hoguera bajo las estrellas.",
    "Experiencia en grupos reducidos con recogida y regreso al hotel desde Marrakech en transporte cómodo y climatizado.",
    "Velada perfecta para parejas, familias y amigos que buscan una escapada corta al desierto sin largas horas de conducción."
  ],
  inclusions: [
    "Traslados privados o en grupo reducido desde Marrakech",
    "Paseo en camello al atardecer por las colinas del desierto de Agafay",
    "Cena tradicional marroquí de tres platos servida en jaima de lujo",
    "Música en vivo junto a la hoguera y espectáculo tradicional"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para su guía y chófer (opcionales)",
    "Comidas y bebidas adicionales no mencionadas explícitamente",
    "Entradas a monumentos o atracciones opcionales"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Itinerario Detallado",
      content: "16:30–17:00 – Recogida en su hotel o riad en Marrakech y trayecto al desierto de Agafay (unos 40–50 minutos). 17:30 – Llegada al campamento, bienvenida con té marroquí y pastas tradicionales, y encuentro con su guía de camellos. 18:00 – Paseo en camello al atardecer (unos 45–60 minutos) a través del desierto de piedra con paradas fotográficas vestidos con atuendo tradicional sahariano (pañuelo cheich disponible). 19:00 – Regreso al campamento y tiempo libre para relajarse y admirar el crepúsculo sobre Agafay y el Alto Atlas. 19:30 – Cena marroquí servida bajo jaima bereber o bajo las estrellas: surtido de ensaladas, tajine o cuscús, postre de temporada y té a la menta (opciones vegetarianas disponibles previa solicitud). 20:30–21:00 – Espectáculo tradicional con música bereber, tambores y animación alrededor del fuego. 21:30–22:00 – Regreso a Marrakech y traslado a su riad u hotel."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Tarde", subtitle: "Salida", desc: "Recogida en el hotel o punto de encuentro céntrico." },
    { number: 2, name: "Desierto de Piedra de Agafay", day: "Atardecer", subtitle: "Paseo en Camello y Colinas Minerales", desc: "Paseo en camello vestidos de nómadas mientras el sol cae sobre las cumbres del Atlas." },
    { number: 3, name: "Campamento de Lujo en el Desierto", day: "Noche", subtitle: "Cena Bajo las Estrellas", desc: "Banquete tradicional marroquí a la luz de las velas, espectáculo de fuego y música junto a la hoguera." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/thumbnail.jpg", cap: "Paseo en Camello al Atardecer y Cena Bajo las Estrellas en el Desierto de Agafay", alt: "Paseo en camello al atardecer por las colinas minerales de Agafay" },
    { src: "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/image-01.jpg", cap: "Paseo en Camello al Atardecer y Cena Bajo las Estrellas en el Desierto de Agafay", alt: "Campamento iluminado por velas y farolillos en el desierto de Agafay" },
    { src: "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/image-02.png", cap: "Paseo en Camello al Atardecer y Cena Bajo las Estrellas en el Desierto de Agafay", alt: "Hoguera nocturna con música tradicional bereber bajo el cielo estrellado de Agafay" }
  ],
  faqs: []
};

const tour18_it = {
  slug: "agafay-desert-sunset-camel-ride",
  title: "Passeggiata in Cammello al Tramonto e Cena nel Deserto di Agafay | Sahara Star",
  shortTitle: "Passeggiata in Cammello al Tramonto e Cena ad Agafay",
  description: "Fuggite da Marrakech per una magica passeggiata in cammello al tramonto nel deserto pietroso di Agafay. Cena tradizionale berbera sotto le stelle con musica dal vivo.",
  aboutHtml: "Godetevi una serata indimenticabile nel deserto di Agafay con una passeggiata in cammello al tramonto, cena tradizionale marocchina in un campo tendato e musica berbera dal vivo attorno al fuoco.",
  duration: "1 Giorno / Escursione di una Giornata",
  startingFrom: "Marrakech",
  price: "Da 85 €/persona",
  highlights: [
    "Magica passeggiata in cammello al tramonto nel deserto di Agafay con vista panoramica sulle montagne dell'Atlante.",
    "Cena tradizionale marocchina (tajine, couscous, insalate, dessert) servita in un accogliente campo tendato berbero.",
    "Atmosfera culturale autentica con musica berbera, percussioni e spettacolo dal vivo attorno al fuoco sotto le stelle.",
    "Esperienza per piccoli gruppi con transfer andata e ritorno da Marrakech in comodo veicolo climatizzato.",
    "Serata ideale per coppie, famiglie e amici che desiderano assaporare il deserto senza affrontare lunghi viaggi in auto."
  ],
  inclusions: [
    "Transfer privati o per piccoli gruppi con partenza da Marrakech",
    "Passeggiata a dorso di cammello al tramonto tra le colline del deserto di Agafay",
    "Cena tradizionale marocchina di tre portate servita in tenda di lusso",
    "Musica tradizionale dal vivo attorno al fuoco e spettacolo serale"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per guida e autista (facoltative)",
    "Pasti e bevande extra non specificati",
    "Ingressi a monumenti o attrazioni opzionali"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Itinerario Dettagliato",
      content: "16:30–17:00 – Pick-up dal vostro hotel o riad a Marrakech e transfer verso il deserto di Agafay (circa 40–50 minuti). 17:30 – Arrivo all'accampamento, benvenuto con tè alla menta e dolci tradizionali, e incontro con i cammellieri. 18:00 – Passeggiata a dorso di dromedario al tramonto (circa 45–60 minuti) attraverso il deserto pietroso con soste fotografiche con abiti tradizionali del deserto. 19:00 – Rientro all'accampamento e tempo libero per ammirare il crepuscolo sulle vette dell'Alto Atlante. 19:30 – Cena marocchina servita sotto la tenda berbera o a cielo aperto: insalate miste, tajine o couscous, frutta fresca o dolci e tè alla menta (opzioni vegetariane disponibili). 20:30–21:00 – Spettacolo con musica berbera dal vivo e danze attorno al falò. 21:30–22:00 – Rientro a Marrakech e accompagnamento al vostro riad."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Pomeriggio", subtitle: "Partenza", desc: "Pick-up in hotel o riad nel centro di Marrakech." },
    { number: 2, name: "Deserto di Pietra di Agafay", day: "Tramonto", subtitle: "Cammellata e Colline Ondulate", desc: "Trekking in cammello in abiti tradizionali mentre il sole tramonta sull'Atlante." },
    { number: 3, name: "Accampamento nel Deserto", day: "Sera", subtitle: "Cena Sotto le Stelle", desc: "Banchetto tradizionale marocchino a lume di candela e musica attorno al fuoco." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/thumbnail.jpg", cap: "Passeggiata in Cammello al Tramonto e Cena Sotto le Stelle ad Agafay", alt: "Passeggiata in dromedario al tramonto tra le colline del deserto di Agafay" },
    { src: "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/image-01.jpg", cap: "Passeggiata in Cammello al Tramonto e Cena Sotto le Stelle ad Agafay", alt: "Campo tendato illuminato da lanterne nel deserto roccioso di Agafay" },
    { src: "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/image-02.png", cap: "Passeggiata in Cammello al Tramonto e Cena Sotto le Stelle ad Agafay", alt: "Spettacolo musicale berbero attorno al falò sotto le stelle ad Agafay" }
  ],
  faqs: []
};

saveTour('agafay-desert-sunset-camel-ride', tour18_es, tour18_it);

// -------------------------------------------------------------
// Tour 19: day-trip-essaouira-mogador
// -------------------------------------------------------------
const tour19_es = {
  slug: "day-trip-essaouira-mogador",
  title: "Excursión de un Día a Essaouira Mogador desde Marrakech | Sahara Star",
  shortTitle: "Excursión de un Día a Essaouira Mogador",
  description: "Excursión privada de un día desde Marrakech a la costera Essaouira Mogador. Pasee por las murallas portuguesas, los zocos de la medina y puestos de marisco fresco.",
  aboutHtml: "Excursión de un día desde Marrakech a Essaouira Mogador.<br/><br/>La excursión de un día de Marrakech a Essaouira es una de las más fascinantes y populares de Marruecos, gracias al inigualable encanto de esta histórica villa marinera atlántica.<br/><br/>Comenzaremos la jornada hacia las 8:00 saliendo de Marrakech en un cómodo trayecto por carretera de unas 3 horas hacia la costa oceánica.<br/><br/>Disfrutaremos de un paseo guiado por las pintorescas callejuelas de la antigua medina de Essaouira, declarada Patrimonio de la Humanidad por la UNESCO, y recorreremos las históricas murallas de la Skala frente a la playa dorada. Para el almuerzo, degustaremos el pescado y marisco fresco recién capturado que hace famosa a la ciudad.<br/><br/>A continuación, exploraremos los zocos de marquetería de madera de tuya y visitaremos una cooperativa femenina local dedicada a la producción tradicional de aceite de argán.<br/><br/>Al atardecer, regresaremos a la Ciudad Roja tras una jornada inolvidable junto al Atlántico.",
  duration: "1 Día / Excursión de Día Completo",
  startingFrom: "Marrakech",
  price: "Desde 65 $/persona",
  highlights: [
    "Ruta panorámica por la llanura atlántica hacia la hermosa ciudad costera de Essaouira.",
    "Medina de Essaouira: Paseo por los blancos callejones de la medina protegida por la UNESCO.",
    "Murallas de la Skala: Explore las fortalezas de piedra del siglo XVIII frente a las olas del océano.",
    "Almuerzo marinero: Deguste pescado y marisco fresco a la parrilla en un restaurante local frente al puerto.",
    "Artesanía en madera de tuya y visita a una cooperativa femenina tradicional de aceite de argán puro."
  ],
  inclusions: [
    "Transporte cómodo y climatizado de ida y vuelta desde Marrakech",
    "Visita a una cooperativa tradicional femenina de aceite de argán",
    "Tiempo libre para recorrer la medina amurallada de Essaouira y los bastiones de la Skala",
    "Paradas panorámicas para fotografías de la costa y paisajes del trayecto"
  ],
  exclusions: [
    "Gastos personales y compras de artesanía",
    "Propinas para guía y chófer (opcionales)",
    "Almuerzo y bebidas no especificadas",
    "Entradas a museos o monumentos particulares"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Marrakech – Bosques de Argán – Medina de Essaouira – Murallas de la Skala – Puerto Pesquero",
      content: "Su excursión comienza a las 8:00 h con la recogida en su riad u hotel en Marrakech para emprender el viaje hacia el Atlántico. Durante el trayecto a través de las llanuras semiáridas, contemplará los bosques de árboles de argán característicos de la región, con posibilidad de avistar las famosas cabras trepadas a sus ramas. Parada en una cooperativa local de mujeres para conocer la extracción manual del preciado aceite de argán. Al llegar a Essaouira (la histórica Mogador portuguesa), disfrutará de un recorrido a pie por su medina amurallada protegida por la UNESCO, admirando sus puertas azules, galerías de arte y talleres de talla en madera de tuya. Visita a la fortaleza de la Skala del Puerto con sus cañones de bronce orientados al océano y paseo por el animado puerto con sus barcas de pesca azules. Almuerzo libre a base de marisco y pescado fresco a la brasa. Por la tarde, tiempo libre para relajarse en la amplia playa de arena o disfrutar de un té a la menta en las terrazas de la Plaza Moulay Hassan antes de regresar a Marrakech."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Mañana", subtitle: "Salida", desc: "Recogida matinal en su riad u hotel." },
    { number: 2, name: "Bosques de Argán", day: "En Ruta", subtitle: "Cooperativa de Aceite de Argán", desc: "Observación de cabras en los árboles y elaboración artesanal de argán." },
    { number: 3, name: "Puerto de Essaouira", day: "Mediodía", subtitle: "Skala y Puerto de Pescadores", desc: "Barcas azules de madera, bastiones del siglo XVIII y pescado fresco." },
    { number: 4, name: "Medina de Essaouira", day: "Tarde", subtitle: "Medina Amurallada UNESCO", desc: "Artesanos de madera de tuya, callejuelas encaladas y brisa atlántica." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/thumbnail.jpeg", cap: "Excursión de un Día desde Marrakech a Essaouira Mogador", alt: "Barcas de pesca azules en el pintoresco puerto de Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-01.jpg", cap: "Excursión de un Día desde Marrakech a Essaouira Mogador", alt: "Murallas defensivas y cañones históricos frente al océano Atlántico en Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-02.jpeg", cap: "Excursión de un Día desde Marrakech a Essaouira Mogador", alt: "Calle empedrada con fachadas blancas y puertas azules en la medina de Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-03.jpeg", cap: "Excursión de un Día desde Marrakech a Essaouira Mogador", alt: "Artesanías talladas en madera de tuya y zocos de Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-04.jpeg", cap: "Excursión de un Día desde Marrakech a Essaouira Mogador", alt: "Vistas panorámicas de la playa de Essaouira y las murallas de la Skala" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-05.jpg", cap: "Excursión de un Día desde Marrakech a Essaouira Mogador", alt: "Plaza animada y terrazas en el centro histórico de Essaouira" }
  ],
  faqs: []
};

const tour19_it = {
  slug: "day-trip-essaouira-mogador",
  title: "Escursione di un Giorno a Essaouira Mogador da Marrakech | Sahara Star",
  shortTitle: "Escursione di un Giorno a Essaouira Mogador",
  description: "Escursione privata di un giorno da Marrakech alla splendida Essaouira Mogador. Passeggiate sui bastioni portoghesi, tra i souk della medina e al porto dei pescatori.",
  aboutHtml: "Escursione di una giornata da Marrakech a Essaouira Mogador.<br/><br/>L'escursione di un giorno da Marrakech a Essaouira è una delle esperienze più amate in Marocco, grazie al fascino unico di questa città fortificata affacciata sull'Atlantico.<br/><br/>La giornata inizia intorno alle 8:00 con partenza da Marrakech per un comodo viaggio di circa 3 ore verso la costa oceanica.<br/><br/>Passeggeremo tra i suggestivi vicoli bianchi e blu dell'antica medina di Essaouira, sito Patrimonio Mondiale dell'Umanità UNESCO, e percorreremo le storiche mura della Skala affacciate sull'oceano. A pranzo degusteremo il pescato fresco che rende celebre la gastronomia locale.<br/><br/>Scopriremo le rinomate botteghe d'artigianato in legno di radica di tuia e visiteremo una cooperativa femminile locale per scoprire i segreti dell'olio di argan.<br/><br/>Nel tardo pomeriggio rientreremo a Marrakech dopo una giornata ricca di brezza marina e bellezza.",
  duration: "1 Giorno / Escursione di una Giornata",
  startingFrom: "Marrakech",
  price: "Da 65 €/persona",
  highlights: [
    "Viaggio panoramico attraverso le pianure atlantiche verso la splendida città costiera di Essaouira.",
    "Medina di Essaouira: Passeggiata tra i caratteristici vicoli candidi della medina Patrimonio UNESCO.",
    "Bastioni della Skala: Esplorate le possenti mura fortificate del XVIII secolo affacciate sull'oceano.",
    "Pranzo di mare: Gustate pesce e frutti di mare freschi alla griglia in un ristorante tipico.",
    "Artigianato in legno di tuia e visita a una cooperativa femminile tradizionale di olio di argan puro."
  ],
  inclusions: [
    "Trasporto confortevole e climatizzato andata e ritorno da Marrakech",
    "Visita a una cooperativa femminile tradizionale di produzione dell'olio di argan",
    "Tempo libero per esplorare la medina murata di Essaouira e i bastioni della Skala",
    "Soste fotografiche panoramiche lungo il percorso costiero"
  ],
  exclusions: [
    "Spese personali e acquisto di manufatti artigianali",
    "Mance per autista e accompagnatore (facoltative)",
    "Pranzo e bevande extra non specificati",
    "Biglietti d'ingresso a monumenti o musei specifici"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Marrakech – Foreste di Argan – Medina di Essaouira – Bastioni della Skala – Porto Peschereccio",
      content: "Partenza alle 8:00 con prelievo dal vostro riad o hotel a Marrakech per raggiungere la costa atlantica. Durante il percorso attraverso le distese dell'Haouz ammirerete le foreste di alberi di argan e le caratteristiche capre che si arrampicano sui rami per brucare le foglie. Sosta presso una cooperativa artigianale gestita da donne locali per scoprire il metodo di spremitura a freddo del prezioso olio di argan. Arrivati a Essaouira (l'antica Mogador portoghese), visiterete la medina murata UNESCO con i suoi caratteristici vicoli bianchi e blu, gallerie d'arte e botteghe di intaglio del legno di tuia. Salita sui bastioni della Skala della Kasbah con i cannoni storici in bronzo rivolti verso i faraglioni oceanici e passeggiata al porto dei pescatori tra centinaia di barche azzurre. Pranzo libero a base di pesce fresco grigliato al porto. Pomeriggio di relax sulla spiaggia sabbiosa o nei caffè all'aperto di Place Moulay Hassan prima del rientro a Marrakech in serata."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Mattina", subtitle: "Partenza", desc: "Pick-up dal vostro hotel o riad a Marrakech." },
    { number: 2, name: "Foreste di Argan", day: "Lungo la Via", subtitle: "Cooperativa di Olio di Argan", desc: "Avvistamento delle capre sugli alberi e produzione artigianale di argan." },
    { number: 3, name: "Porto di Essaouira", day: "Mezzogiorno", subtitle: "Skala e Porto dei Pescatori", desc: "Tipiche barche blu, bastioni affacciati sull'Atlantico e pesce fresco." },
    { number: 4, name: "Medina di Essaouira", day: "Pomeriggio", subtitle: "Medina Fortificata UNESCO", desc: "Botteghe del legno di tuia, vicoli imbiancati a calce e brezza oceanica." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/thumbnail.jpeg", cap: "Escursione di una Giornata da Marrakech a Essaouira Mogador", alt: "Barche blu tradizionali ormeggiate nel porto dei pescatori di Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-01.jpg", cap: "Escursione di una Giornata da Marrakech a Essaouira Mogador", alt: "Bastioni in pietra della Skala con antichi cannoni di bronzo a Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-02.jpeg", cap: "Escursione di una Giornata da Marrakech a Essaouira Mogador", alt: "Vicolo acciottolato con pareti imbiancate a calce nella medina di Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-03.jpeg", cap: "Escursione di una Giornata da Marrakech a Essaouira Mogador", alt: "Manufatti in legno di tuia esposti nelle botteghe di Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-04.jpeg", cap: "Escursione di una Giornata da Marrakech a Essaouira Mogador", alt: "Veduta della spiaggia atlantica e delle fortificazioni di Essaouira" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-05.jpg", cap: "Escursione di una Giornata da Marrakech a Essaouira Mogador", alt: "Piazza centrale animata e caffè storici nel cuore di Essaouira" }
  ],
  faqs: []
};

saveTour('day-trip-essaouira-mogador', tour19_es, tour19_it);

// -------------------------------------------------------------
// Tour 20: day-trip-ait-ben-haddou
// -------------------------------------------------------------
const tour20_es = {
  slug: "day-trip-ait-ben-haddou",
  title: "Excursión de un Día a Ait Ben Haddou y Ouarzazate | Sahara Star Tours",
  shortTitle: "Excursión a Ait Ben Haddou y Ouarzazate",
  description: "Excursión de día completo desde Marrakech cruzando el puerto de Tizi n'Tichka hacia la Kasbah UNESCO de Ait Ben Haddou y la capital cinematográfica de Ouarzazate.",
  aboutHtml: "Excursión de un día desde Marrakech a Ouarzazate y la Kasbah de Ait Ben Haddou.<br/><br/>Esta excursión desde Marrakech es una de las rutas culturales más apasionantes de Marruecos, ya que incluye la visita a la célebre Kasbah de Ait Ben Haddou cruzando el corazón del Alto Atlas.<br/><br/>Iniciamos la travesía a través de las altas cumbres del Atlas por el legendario puerto de Tizi n'Tichka (2.260 m), contemplando pueblos bereberes aferrados a las laderas y profundos valles.<br/><br/>Llegamos a la Kasbah de Ait Ben Haddou, joya de adobe declarada Patrimonio de la Humanidad por la UNESCO y mítico escenario de películas históricas como Gladiator, Lawrence de Arabia, La Momia y Juego de Tronos.<br/><br/>Continuaremos hacia Ouarzazate, conocida como el 'Hollywood de África', para conocer sus estudios de cine y la Kasbah de Taourirt antes de regresar a Marrakech al caer la tarde.",
  duration: "1 Día / Excursión de Día Completo",
  startingFrom: "Marrakech",
  price: "Desde 75 $/persona",
  highlights: [
    "Montañas del Alto Atlas: Espectacular travesía panorámica a través de sinuosas curvas y vistas sobrecogedoras.",
    "Ouarzazate: Visita a la capital del cine de Marruecos, sede de los mayores estudios de rodaje del continente.",
    "Kasbah de Ait Ben Haddou: Explore el monumento Patrimonio de la Humanidad por la UNESCO y plató de cine icónico.",
    "Kasbah de Taourirt: Visita a esta emblemática fortaleza residencial bereber rica en historia y arquitectura de adobe."
  ],
  inclusions: [
    "Travesía panorámica a través del Alto Atlas por el paso de montaña Tizi n'Tichka",
    "Visita guiada a la Kasbah de Ait Ben Haddou, Patrimonio Mundial de la UNESCO",
    "Parada en Ouarzazate (el Hollywood de África) y vistas de la Kasbah de Taourirt",
    "Chófer y guía profesional de habla española o inglesa"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para guía y chófer (opcionales)",
    "Almuerzo y bebidas no especificadas",
    "Entradas a los estudios cinematográficos o monumentos interiores"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Marrakech – Alto Atlas (Tizi n'Tichka) – Kasbah Ait Ben Haddou – Ouarzazate – Kasbah Taourirt",
      content: "Salida temprana desde Marrakech en vehículo climatizado hacia la cordillera del Alto Atlas. Ascendemos por curvas panorámicas atravesando el paso de Tizi n'Tichka a 2.260 metros de altitud, con paradas para fotografiar los espectaculares valles y pequeños pueblos de barro de montaña. Descendemos hacia la histórica Kasbah de Ait Ben Haddou, donde realizaremos una visita a pie por sus callejuelas fortificadas, torres almenadas y miradores sobre el río Ounila, rememorando escenas de Gladiator y Juego de Tronos. Almuerzo tradicional en un restaurante con terraza con vistas al ksar. A continuación, nos dirigimos a Ouarzazate para contemplar los famosos estudios de cine Atlas Studios y la Kasbah de Taourirt, antigua residencia señorial del Glaoui. A media tarde emprendemos el regreso hacia Marrakech a través de las cumbres del Atlas, llegando a su hotel al atardecer."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Mañana", subtitle: "Salida", desc: "Recogida y trayecto hacia el Alto Atlas." },
    { number: 2, name: "Tizi n'Tichka", day: "En Ruta", subtitle: "Puerto del Alto Atlas (2.260 m)", desc: "Miradores panorámicos sobre las sinuosas carreteras de montaña." },
    { number: 3, name: "Kasbah Ait Ben Haddou", day: "Almuerzo", subtitle: "Fortaleza Patrimonio UNESCO", desc: "Ascenso por el antiguo ksar de adobe filmado en Gladiator." },
    { number: 4, name: "Estudios de Cine de Ouarzazate", day: "Tarde", subtitle: "Hollywood de África", desc: "Atlas Film Studios y exterior de la Kasbah Taourirt." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/thumbnail.jpg", cap: "Excursión de un Día a Ouarzazate y la Kasbah de Ait Ben Haddou", alt: "Vista panorámica del ksar fortificado de Ait Ben Haddou en el Alto Atlas" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-01.jpg", cap: "Excursión de un Día a Ouarzazate y la Kasbah de Ait Ben Haddou", alt: "Torres de adobe y callejuelas de la Kasbah de Ait Ben Haddou" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-02.jpg", cap: "Excursión de un Día a Ouarzazate y la Kasbah de Ait Ben Haddou", alt: "Panorámica de las carreteras sinuosas del puerto de Tizi n'Tichka" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-03.jpg", cap: "Excursión de un Día a Ouarzazate y la Kasbah de Ait Ben Haddou", alt: "Fachada histórica de la Kasbah de Taourirt en Ouarzazate" }
  ],
  faqs: []
};

const tour20_it = {
  slug: "day-trip-ait-ben-haddou",
  title: "Escursione di un Giorno ad Ait Ben Haddou e Ouarzazate | Sahara Star Tours",
  shortTitle: "Escursione ad Ait Ben Haddou e Ouarzazate",
  description: "Escursione di una giornata intera da Marrakech attraverso il passo Tizi n'Tichka verso la Kasbah UNESCO di Ait Ben Haddou e la capitale del cinema Ouarzazate.",
  aboutHtml: "Escursione di una giornata da Marrakech a Ouarzazate e alla Kasbah di Ait Ben Haddou.<br/><br/>Questa gita giornaliera da Marrakech è una delle esperienze culturali più celebri in Marocco, comprendendo la visita al favoloso ksar fortificato di Ait Ben Haddou attraverso le vette dell'Alto Atlante.<br/><br/>Il viaggio inizia attraversando la catena montuosa dell'Atlante attraverso il leggendario valico del Tizi n'Tichka (2.260 m), ammirando villaggi berberi arroccati sulle scogliere e vallate sconfinate.<br/><br/>Arriveremo alla Kasbah di Ait Ben Haddou, capolavoro di architettura in terra cruda dichiarato Patrimonio Mondiale dell'Umanità UNESCO e set iconico di kolossal come Il Gladiatore, Lawrence d'Arabia e Il Trono di Spade.<br/><br/>Proseguiremo per Ouarzazate, la 'Hollywood del Marocco', per ammirare i suoi celebri studi cinematografici e la Kasbah di Taourirt prima del rientro serale a Marrakech.",
  duration: "1 Giorno / Escursione di una Giornata",
  startingFrom: "Marrakech",
  price: "Da 75 €/persona",
  highlights: [
    "Montagne dell'Alto Atlante: Spettacolare percorso panoramico tra tornanti mozzafiato e scorci montani.",
    "Ouarzazate: Visita alla capitale del cinema marocchino, sede dei più grandi studi cinematografici d'Africa.",
    "Kasbah di Ait Ben Haddou: Esplorate il sito Patrimonio Mondiale dell'Umanità UNESCO e iconico set cinematografico.",
    "Kasbah di Taourirt: Visita a questa splendida fortezza residenziale berbera ricca di fascino storico."
  ],
  inclusions: [
    "Viaggio panoramico attraverso l'Alto Atlante attraverso il valico del Tizi n'Tichka",
    "Visita guidata alla Kasbah di Ait Ben Haddou, Patrimonio Mondiale dell'Umanità UNESCO",
    "Sosta a Ouarzazate (la Hollywood d'Africa) e vista sulla Kasbah di Taourirt",
    "Autista e guida professionale parlante inglese o spagnolo"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per guida e autista (facoltative)",
    "Pranzo e bevande extra non specificati",
    "Biglietti d'ingresso agli studi cinematografici o sale interne"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Marrakech – Alto Atlante (Tizi n'Tichka) – Kasbah Ait Ben Haddou – Ouarzazate – Kasbah Taourirt",
      content: "Partenza di primo mattino da Marrakech in veicolo confortevole verso l'Alto Atlante. Salita panoramica attraverso il valico di Tizi n'Tichka a 2.260 metri, con soste fotografiche sui villaggi berberi abbarbicati e sui rilievi montuosi. Discesa verso la splendida Kasbah fortificata di Ait Ben Haddou, dove farete una visita a piedi tra torri merlate e vicoli d'argilla, rivivendo le atmosfere di capolavori come Il Gladiatore. Pranzo tipico in ristorante locale con terrazza panoramica. Proseguimento per Ouarzazate con sosta agli Atlas Film Studios e alla Kasbah di Taourirt, antica dimora dei signori dell'Atlante. Nel pomeriggio rientro verso Marrakech attraverso i passi montani, con arrivo in riad in serata."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Mattina", subtitle: "Partenza", desc: "Pick-up in riad e viaggio verso l'Alto Atlante." },
    { number: 2, name: "Tizi n'Tichka", day: "Lungo la Via", subtitle: "Passo dell'Alto Atlante (2.260 m)", desc: "Punti panoramici spettacolari sui tornanti di montagna." },
    { number: 3, name: "Kasbah Ait Ben Haddou", day: "Pranzo", subtitle: "Fortezza Patrimonio UNESCO", desc: "Salita attraverso l'antico ksar in terra cruda del Gladiatore." },
    { number: 4, name: "Studi Cinematografici di Ouarzazate", day: "Pomeriggio", subtitle: "Hollywood d'Africa", desc: "Atlas Film Studios e facciata della Kasbah Taourirt." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/thumbnail.jpg", cap: "Escursione di un Giorno a Ouarzazate e alla Kasbah di Ait Ben Haddou", alt: "Scorcio panoramico del maestoso ksar di Ait Ben Haddou nell'Alto Atlante" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-01.jpg", cap: "Escursione di un Giorno a Ouarzazate e alla Kasbah di Ait Ben Haddou", alt: "Torri in argilla e mura fortificate della Kasbah di Ait Ben Haddou" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-02.jpg", cap: "Escursione di un Giorno a Ouarzazate e alla Kasbah di Ait Ben Haddou", alt: "Veduta dei tornanti spettacolari sul passo montano del Tizi n'Tichka" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-03.jpg", cap: "Escursione di un Giorno a Ouarzazate e alla Kasbah di Ait Ben Haddou", alt: "Antica facciata decorata della Kasbah di Taourirt a Ouarzazate" }
  ],
  faqs: []
};

saveTour('day-trip-ait-ben-haddou', tour20_es, tour20_it);

// -------------------------------------------------------------
// Tour 21: day-trip-ouzoud-waterfalls
// -------------------------------------------------------------
const tour21_es = {
  slug: "day-trip-ouzoud-waterfalls",
  title: "Excursión de un Día a las Cascadas de Ouzoud desde Marrakech | Sahara Star",
  shortTitle: "Excursión de un Día a las Cascadas de Ouzoud",
  description: "Excursión desde Marrakech a las espectaculares Cascadas de Ouzoud de 110 metros en el Medio Atlas. Senderos junto al río, macacos de Berbería y paseo en barca.",
  aboutHtml: "Excursión de un día desde Marrakech a las Cascadas de Ouzoud y aldeas bereberes.<br/><br/>Esta excursión de un día hacia las cataratas de Ouzoud y las estribaciones del Atlas es una oportunidad fantástica para descubrir la impresionante naturaleza de Marruecos sin alejarse en exceso de Marrakech.<br/><br/>Saldremos a las 8:00 de la mañana en dirección a los valles del Medio Atlas en un viaje salpicado de olivares y pequeñas aldeas bereberes tradicionales de vida sosegada.<br/><br/>Caminar por los senderos de Ouzoud es una experiencia inolvidable que permite contemplar de cerca la grandeza de los saltos de agua de más de 110 metros de altura, refrescarse en las pozas naturales y avistar a los simpáticos macacos de Berbería que habitan libres en los peñones.<br/><br/>Disfrutaremos de un almuerzo tradicional con tajine en una terraza con vistas directas a las cataratas antes de regresar a Marrakech.",
  duration: "1 Día / Excursión de Día Completo",
  startingFrom: "Marrakech",
  price: "Desde 60 $/persona",
  highlights: [
    "Ruta panorámica: Disfrute de hermosas vistas de aldeas bereberes y estribaciones del Medio Atlas.",
    "Cascadas de Ouzoud: Admire la imponente majestuosidad de las cascadas más altas de Marruecos (110 metros).",
    "Fauna autóctona: Observe macacos de Berbería salvajes en su hábitat natural en las rocas y árboles.",
    "Ruta de senderismo: Caminata guiada por senderos naturales con miradores espectaculares.",
    "Baño refrescante: Oportunidad de refrescarse en las aguas del río al pie de las cascadas.",
    "Almuerzo tradicional bereber: Saboree un exquisito tajine elaborado por lugareños con vistas al río."
  ],
  inclusions: [
    "Transporte de ida y vuelta en vehículo moderno con aire acondicionado",
    "Trayecto panorámico a través de aldeas bereberes y campos de olivos",
    "Caminata guiada descendiendo hacia las espectaculares Cascadas de Ouzoud",
    "Oportunidad de avistar macacos de Berbería salvajes"
  ],
  exclusions: [
    "Gastos personales y compras particulares",
    "Propinas para guía local y chófer (opcionales)",
    "Paseo opcional en barca de remos bajo la cascada",
    "Almuerzo y bebidas no especificadas"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Marrakech – Pueblos Bereberes – Medio Atlas – Cascadas de Ouzoud – Senderismo – Almuerzo Bereber",
      content: "Su jornada comienza con la recogida en Marrakech a las 8:00 h en dirección al noreste hacia el Medio Atlas. El trayecto discurre por fértiles llanuras agrícolas y colinas salpicadas de olivos milenarios y asentamientos bereberes. Al llegar a las Cascadas de Ouzoud, emprenderemos una caminata guiada por los senderos sombreados que descienden hacia la base del cañón, disfrutando del estruendo del agua cayendo desde 110 metros y de los arcoíris formados por el rocío. A lo largo del camino observará macacos salvajes que se aproximan curiosos a los visitantes. En la cuenca del río podrá cruzar en barcas tradicionales de madera hasta rozar la caída del agua. Disfrutaremos de un delicioso almuerzo bereber en un restaurante situado en la orilla con vistas panorámicas. Tiempo libre para descansar junto al agua antes de emprender el viaje de regreso a Marrakech a última hora de la tarde."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Mañana", subtitle: "Salida", desc: "Trayecto matinal a través de las llanuras de Tadla." },
    { number: 2, name: "Estribaciones del Medio Atlas", day: "En Ruta", subtitle: "Aldeas Bereberes", desc: "Campos de olivos y arquitectura tradicional de adobe." },
    { number: 3, name: "Cascadas de Ouzoud", day: "Tarde", subtitle: "Saltos de 110 m y Macacos", desc: "Descenso a pie a las pozas, paseo en barca y monos en libertad." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/thumbnail.jpg", cap: "Excursión de un Día a las Cascadas de Ouzoud y Aldeas Bereberes", alt: "Impresionante caída de agua de las Cascadas de Ouzoud en el Medio Atlas" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-01.jpg", cap: "Excursión de un Día a las Cascadas de Ouzoud y Aldeas Bereberes", alt: "Macaco salvaje de Berbería en las rocas de las cascadas de Ouzoud" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-02.webp", cap: "Excursión de un Día a las Cascadas de Ouzoud y Aldeas Bereberes", alt: "Barcas de madera tradicionales navegando bajo las cascadas de Ouzoud" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-03.jpeg", cap: "Excursión de un Día a las Cascadas de Ouzoud y Aldeas Bereberes", alt: "Restaurantes y terrazas tradicionales junto al río en Ouzoud" }
  ],
  faqs: []
};

const tour21_it = {
  slug: "day-trip-ouzoud-waterfalls",
  title: "Escursione di un Giorno alle Cascate di Ouzoud da Marrakech | Sahara Star",
  shortTitle: "Escursione alle Cascate di Ouzoud da Marrakech",
  description: "Escursione da Marrakech alle spettacolari Cascate di Ouzoud di 110 metri nel Medio Atlante. Sentieri panoramici, macachi di Barberia e gite in barca.",
  aboutHtml: "Escursione di una giornata da Marrakech alle Cascate di Ouzoud e ai villaggi berberi.<br/><br/>Questa gita giornaliera da Marrakech verso le maestose Cascate di Ouzoud e le colline dell'Atlante è un'opportunità eccezionale per immergersi nella natura rigogliosa del Marocco.<br/><br/>Partiremo intorno alle 8:00 del mattino attraversando le pianure dell'Haouz verso il Medio Atlante, passando accanto a secolari oliveti e caratteristici villaggi berberi.<br/><br/>Scendere lungo i sentieri di Ouzoud è un'esperienza entusiasmante che permette di ammirare da vicino le cascate alte oltre 110 metri, rinfrescarsi vicino alle pozze naturali e scorgere i simpatici macachi di Barberia che popolano le rocce circostanti.<br/><br/>Pranzeremo con tajine tradizionale berbera su una terrazza affacciata sulle cascate prima di fare ritorno a Marrakech in serata.",
  duration: "1 Giorno / Escursione di una Giornata",
  startingFrom: "Marrakech",
  price: "Da 60 €/persona",
  highlights: [
    "Percorso panoramico: Ammirate suggestivi scorci di villaggi berberi e delle colline del Medio Atlante.",
    "Cascate di Ouzoud: Ammirate la potenza delle cascate più alte del Marocco con il loro salto di 110 metri.",
    "Fauna selvatica: Incontrate i macachi di Barberia nel loro habitat naturale tra le rocce e gli ulivi.",
    "Trekking panoramico: Passeggiata guidata lungo sentieri ombreggiati fino al fondo della gola.",
    "Bagno rinfrescante: Possibilità di rinfrescarsi nelle acque del fiume ai piedi delle cascate.",
    "Pranzo tradizionale berbero: Gustate un delizioso tajine preparato dalla gente del posto con vista sulle acque."
  ],
  inclusions: [
    "Trasporto andata e ritorno in comodo veicolo climatizzato",
    "Itinerario panoramico attraverso villaggi berberi e coltivazioni di ulivi",
    "Trekking guidato fino alla base delle spettacolari Cascate di Ouzoud",
    "Opportunità di avvistare i macachi di Barberia in libertà"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per autista e guida locale (facoltative)",
    "Giro facoltativo in barca a remi sotto il getto della cascata",
    "Pranzo e bevande extra non specificati"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Marrakech – Villaggi Berberi – Medio Atlante – Cascate di Ouzoud – Trekking – Pranzo Berbero",
      content: "Partenza alle 8:00 da Marrakech in direzione nord-est verso il Medio Atlante. Il tragitto attraversa fertili pianure coltivate a ulivi e piccoli borghi rurali berberi. Arrivati alle Cascate di Ouzoud, inizierete un'escursione guidata a piedi lungo sentieri gradinati che scendono nel canyon, ammirando il potente getto d'acqua che compie un salto di 110 metri tra mille sfumature d'arcobaleno. Durante la discesa si incontrano i macachi selvatici dell'Atlante abituati alla presenza dell'uomo. In fondo alla gola potrete fare un breve giro sulle tradizionali imbarcazioni di legno per avvicinarvi alla cascata. Pranzo tipico berbero in un ristorante terrazzato con vista panoramica sulle acque. Tempo per rilassarsi prima del comodo rientro a Marrakech nel tardo pomeriggio."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Mattina", subtitle: "Partenza", desc: "Viaggio mattutino attraverso le pianure del Tadla." },
    { number: 2, name: "Colline del Medio Atlante", day: "Lungo la Via", subtitle: "Villaggi Berberi", desc: "Distese di uliveti e case tradizionali in terra battuta." },
    { number: 3, name: "Cascate di Ouzoud", day: "Pomeriggio", subtitle: "Salti di 110m e Macachi", desc: "Discesa a piedi alla gola, giro in barca e scimmie selvatiche." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/thumbnail.jpg", cap: "Escursione di un Giorno alle Cascate di Ouzoud e Villaggi Berberi", alt: "Imponente salto d'acqua delle Cascate di Ouzoud nel Medio Atlante" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-01.jpg", cap: "Escursione di un Giorno alle Cascate di Ouzoud e Villaggi Berberi", alt: "Macaco di Barberia sulle scogliere vicino alle cascate di Ouzoud" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-02.webp", cap: "Escursione di un Giorno alle Cascate di Ouzoud e Villaggi Berberi", alt: "Barchette colorate in legno sul bacino delle Cascate di Ouzoud" },
    { src: "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-03.jpeg", cap: "Escursione di un Giorno alle Cascate di Ouzoud e Villaggi Berberi", alt: "Ristorantini tradizionali berberi affacciati sul corso d'acqua a Ouzoud" }
  ],
  faqs: []
};

saveTour('day-trip-ouzoud-waterfalls', tour21_es, tour21_it);

// -------------------------------------------------------------
// Tour 22: one-day-marrakech-city-tour
// -------------------------------------------------------------
const tour22_es = {
  slug: "one-day-marrakech-city-tour",
  title: "Visita Guiada de un Día por la Ciudad de Marrakech | Sahara Star Tours",
  shortTitle: "Visita Guiada de un Día por Marrakech",
  description: "Descubra el corazón de la Ciudad Roja con un guía local oficial. Visite el Palacio de la Bahía, la Koutoubia, las Tumbas Saadíes y la medina de Jemaa el-Fna.",
  aboutHtml: "Esta apasionante visita guiada de un día le llevará por los monumentos y rincones más emblemáticos de Marrakech. Acompañado por un guía local titulado, descubrirá todos los secretos y joyas ocultas de la Ciudad Roja.<br/><br/>Por la mañana visitaremos el célebre Jardín Majorelle fundado por Jacques Majorelle y restaurado por Yves Saint Laurent, con su exuberante colección botánica y el Museo Bereber. Después nos adentraremos en la antigua medina para disfrutar de un almuerzo tradicional en un riad marroquí.<br/><br/>Por la tarde continuaremos descubriendo el fastuoso Palacio de la Bahía con sus patios alicatados de azulejos zellige y techos de cedro pintado, el histórico barrio judío del Mellah y las majestuosas Tumbas Saadíes del siglo XVI.<br/><br/>Culminaremos el recorrido en la legendaria Plaza Jemaa el-Fna, corazón latente del arte y las tradiciones vivas de Marruecos.",
  duration: "1 Día / Excursión de Día Completo",
  startingFrom: "Marrakech",
  price: "Desde 55 $/persona",
  highlights: [
    "Jardín Majorelle: Visite el extraordinario jardín botánico creado por Jacques Majorelle y restaurado por Yves Saint Laurent.",
    "Museo Bereber: Conozca la rica historia, joyas y tradiciones del pueblo bereber originario de Marruecos.",
    "Antigua Medina: Disfrute de un almuerzo marroquí tradicional en el corazón palpitante de Marrakech.",
    "Palacio de la Bahía: Admire la deslumbrante arquitectura andalusí y los patios palaciegos del siglo XIX.",
    "Barrio Judío (Mellah): Descubra la atmósfera única, mercados y sinagogas del histórico barrio judío.",
    "Tumbas Saadíes: Explore el sobrecogedor mausoleo real del siglo XVI con columnas de mármol de Carrara.",
    "Plaza Jemaa el-Fna: Concluya en la vibrante plaza declarada Patrimonio de la Humanidad por la UNESCO."
  ],
  inclusions: [
    "Guía oficial local titulado de Marrakech",
    "Visita guiada exterior e interior del Palacio de la Bahía, Tumbas Saadíes y Mezquita Koutoubia",
    "Recorrido a pie por los zocos gremiales y callejuelas históricas de la medina",
    "Tiempo para compras de artesanía y fotografías en la mítica Plaza Jemaa el-Fna"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para su guía oficial y chófer (opcionales)",
    "Almuerzo y bebidas no especificadas",
    "Entradas a los monumentos y jardines históricos"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Marrakech – Jardín Majorelle – Medina Antigua – Palacio de la Bahía – Mellah – Tumbas Saadíes – Jemaa el-Fna",
      content: "Su recorrido comienza con el encuentro con su guía oficial. La primera parada es el Jardín Majorelle, célebre por sus plantas exóticas, cactus gigantes y edificios pintados de azul cobalto intenso, donde también se ubica el Museo Bereber con colecciones de trajes y joyas tribales. A continuación, nos adentramos en la medina histórica de Marrakech para recorrer sus callejones y zocos gremiales especializados en especias, babuchas, alfombras y forja. Almuerzo tradicional marroquí en un riad o restaurante de la medina. Por la tarde, visitamos el Palacio de la Bahía, una obra cumbre de la arquitectura palaciega del siglo XIX con patios de mármol, fuentes y techos artesonados de cedro. Pasaremos por el Mellah (antiguo barrio judío) antes de llegar a las Tumbas Saadíes, donde reposan los monarcas de la dinastía con sus doce columnas de mármol de Carrara y delicadas yeserías. Para culminar, llegamos a la icónica Plaza Jemaa el-Fna, donde conviven encantadores de serpientes, músicos y cuentacuentos bajo la mirada del minarete de la Koutoubia. Regreso a su hotel al término de la visita."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Mezquita Koutoubia", day: "Mañana", subtitle: "Minarete del Siglo XII", desc: "Monumento icónico y jardines andalusíes de entrada." },
    { number: 2, name: "Palacio de la Bahía", day: "Mañana", subtitle: "Residencia del Gran Visir", desc: "Mosaicos zellige y techos artesonados de madera de cedro." },
    { number: 3, name: "Tumbas Saadíes", day: "Mediodía", subtitle: "Mausoleo Real", desc: "Sala de las Doce Columnas en mármol de Carrara." },
    { number: 4, name: "Madraza Ben Youssef", day: "Tarde", subtitle: "Antigua Escuela Coránica", desc: "Patios con yeserías y caligrafía árabe monumental." },
    { number: 5, name: "Plaza Jemaa el-Fna", day: "Tarde-Noche", subtitle: "Plaza UNESCO", desc: "Músicos, cuentacuentos y vibrantes puestos de comida." },
    { number: 6, name: "Jardín Majorelle", day: "Tarde", subtitle: "Oasis de Yves Saint Laurent", desc: "Villa azul cobalto y colección botánica exótica." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/thumbnail.jpg", cap: "Visita Guiada de un Día por la Ciudad de Marrakech", alt: "Patios y arquitectura tradicional del Palacio de la Bahía en Marrakech" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-01.jpg", cap: "Visita Guiada de un Día por la Ciudad de Marrakech", alt: "Minarete de la mezquita Koutoubia elevándose sobre los jardines de Marrakech" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-02.jpg", cap: "Visita Guiada de un Día por la Ciudad de Marrakech", alt: "Detalles de azulejos zellige y yeserías en las Tumbas Saadíes" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-03.jpg", cap: "Visita Guiada de un Día por la Ciudad de Marrakech", alt: "Edificio azul cobalto y fuentes en el Jardín Majorelle" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-04.jpeg", cap: "Visita Guiada de un Día por la Ciudad de Marrakech", alt: "Callejones y puestos de especias en los zocos de la medina de Marrakech" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-05.jpeg", cap: "Visita Guiada de un Día por la Ciudad de Marrakech", alt: "Animación de cuentacuentos y puestos al atardecer en la Plaza Jemaa el-Fna" }
  ],
  faqs: []
};

const tour22_it = {
  slug: "one-day-marrakech-city-tour",
  title: "Tour Guidato di un Giorno della Città di Marrakech | Sahara Star Tours",
  shortTitle: "Tour Guidato di un Giorno a Marrakech",
  description: "Scoprite il cuore della Città Rossa con una guida locale autorizzata. Visitate il Palazzo della Bahia, la Moschea Koutoubia, le Tombe Saadiane e Jemaa el-Fna.",
  aboutHtml: "Questo emozionante tour guidato di un'intera giornata vi porterà alla scoperta dei monumenti più prestigiosi di Marrakech. Insieme a una guida locale esperta, svelerete le meraviglie e i tesori nascosti della Città Rossa.<br/><br/>Al mattino visiteremo i rinomati Giardini Majorelle creati da Jacques Majorelle e riportati a splendore da Yves Saint Laurent, con la loro collezione di piante esotiche e il Museo Berbero. A seguire entreremo nella medina per un pranzo tradizionale in un tipico riad marocchino.<br/><br/>Nel pomeriggio scopriremo i capolavori architettonici del Palazzo della Bahia con le sue splendide corti in zellij e soffitti in cedro intagliato, il quartiere ebraico del Mellah e le suggestive Tombe Saadiane del XVI secolo.<br/><br/>Concluderemo il tour nella celebre Piazza Jemaa el-Fna, palcoscenico a cielo aperto dichiarato Patrimonio dell'Umanità UNESCO.",
  duration: "1 Giorno / Escursione di una Giornata",
  startingFrom: "Marrakech",
  price: "Da 55 €/persona",
  highlights: [
    "Giardini Majorelle: Visitate lo straordinario giardino botanico creato da Jacques Majorelle e salvato da Yves Saint Laurent.",
    "Museo Berbero: Scoprite la ricca storia, i costumi e i gioielli delle popolazioni berbere del Marocco.",
    "Antica Medina: Gustate un pranzo tipico marocchino nel cuore pulsante di Marrakech.",
    "Palazzo della Bahia: Ammirate i cortili e gli stucchi di questo sfarzoso palazzo ottocentesco.",
    "Quartiere Ebraico (Mellah): Esplorate le viuzze storiche e l'atmosfera suggestiva del Mellah.",
    "Tombe Saadiane: Esplorate il grandioso mausoleo dinastico del XVI secolo con colonne in marmo di Carrara.",
    "Piazza Jemaa el-Fna: Concludete nella vivace piazza tra artisti di strada, musicisti e cantastorie."
  ],
  inclusions: [
    "Guida ufficiale locale autorizzata di Marrakech",
    "Visita guidata del Palazzo della Bahia, Tombe Saadiane ed esterno della Moschea Koutoubia",
    "Passeggiata guidata tra i souk degli artigiani e i vicoli della medina",
    "Tempo a disposizione per foto e acquisti nella celebre Piazza Jemaa el-Fna"
  ],
  exclusions: [
    "Spese personali e acquisti privati",
    "Mance per guida turistica e autista (facoltative)",
    "Pranzo e bevande extra non specificati",
    "Biglietti d'ingresso a palazzi, musei e giardini"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Marrakech – Giardini Majorelle – Antica Medina – Palazzo della Bahia – Mellah – Tombe Saadiane – Jemaa el-Fna",
      content: "Incontro con la vostra guida ufficiale per dare inizio alla scoperta di Marrakech. Prima sosta ai celebri Giardini Majorelle, celebri per le palme esotiche, i cactus monumentali e la villa dipinta nel caratteristico blu oltremare, sede del Museo Berbero. A seguire entreremo a piedi nella medina storica di Marrakech per esplorare i souk specializzati in spezie, tessuti, babucce in cuoio e lanterne in ferro battuto. Sosta per un autentico pranzo marocchino in un riad della medina. Nel pomeriggio visita guidata al Palazzo della Bahia, straordinario esempio di arte moresca con cortili in marmo, fontane e soffitti dipinti in legno di cedro. Passeggiata nel Mellah (l'antico quartiere ebraico) e ingresso alle magnifiche Tombe Saadiane, con la celebre Sala delle Dodici Colonne in marmo di Carrara. Per finire, approderemo nella vibrante Piazza Jemaa el-Fna sotto l'imponente minareto della Koutoubia, tra incantatori di serpenti, acrobati e musicisti gnaoua. Rientro in hotel in serata."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Moschea Koutoubia", day: "Mattina", subtitle: "Minareto del XII Secolo", desc: "Simbolo storico della città e giardini andalusi." },
    { number: 2, name: "Palazzo della Bahia", day: "Mattina", subtitle: "Residenza del Gran Visir", desc: "Mosaici zellij e soffitti intagliati in legno di cedro." },
    { number: 3, name: "Tombe Saadiane", day: "Mezzogiorno", subtitle: "Mausoleo Reale", desc: "Sala delle Dodici Colonne in pregiato marmo di Carrara." },
    { number: 4, name: "Madrasa Ben Youssef", day: "Pomeriggio", subtitle: "Antico Collegio Coranico", desc: "Corte monumentale con raffinati stucchi e iscrizioni arabe." },
    { number: 5, name: "Piazza Jemaa el-Fna", day: "Tardo Pomeriggio", subtitle: "Piazza Patrimonio UNESCO", desc: "Cantastorie, musici tradizionali e bancarelle gastronomiche." },
    { number: 6, name: "Giardini Majorelle", day: "Pomeriggio", subtitle: "Oasi Botanica Yves Saint Laurent", desc: "Villa color blu cobalto e rigogliosa vegetazione esotica." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/thumbnail.jpg", cap: "Tour Guidato di un Giorno della Città di Marrakech", alt: "Cortili e architettura moresca del Palazzo della Bahia a Marrakech" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-01.jpg", cap: "Tour Guidato di un Giorno della Città di Marrakech", alt: "Minareto della Moschea Koutoubia svettante sui giardini di Marrakech" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-02.jpg", cap: "Tour Guidato di un Giorno della Città di Marrakech", alt: "Dettaglio di colonne in marmo e stucchi arabeschi alle Tombe Saadiane" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-03.jpg", cap: "Tour Guidato di un Giorno della Città di Marrakech", alt: "Villa dipinta in blu cobalto e piante grasse ai Giardini Majorelle" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-04.jpeg", cap: "Tour Guidato di un Giorno della Città di Marrakech", alt: "Bancarelle colorate e botteghe artigiane nei souk di Marrakech" },
    { src: "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-05.jpeg", cap: "Tour Guidato di un Giorno della Città di Marrakech", alt: "Artisti di strada e animazione serale in Piazza Jemaa el-Fna" }
  ],
  faqs: []
};

saveTour('one-day-marrakech-city-tour', tour22_es, tour22_it);

// -------------------------------------------------------------
// Tour 23: ourika-valley-nature-tour
// -------------------------------------------------------------
const tour23_es = {
  slug: "ourika-valley-nature-tour",
  title: "Excursión de Naturaleza al Valle de Ourika y el Atlas | Sahara Star Tours",
  shortTitle: "Excursión de Naturaleza al Valle de Ourika",
  description: "Escápese del calor de Marrakech con una excursión al Valle de Ourika. Camine hacia las cascadas de Setti Fatma, visite aldeas bereberes y admire las cumbres del Atlas.",
  aboutHtml: "Descubra la belleza natural y la biodiversidad del Valle de Ourika en esta excursión de un día desde Marrakech. Explore las cascadas de Setti Fatma, visite una casa tradicional bereber y disfrute de un almuerzo a la orilla del río. Un itinerario ideal para amantes de la naturaleza y quienes deseen sumergirse en la cultura rural del Atlas.",
  duration: "1 Día / Excursión de Día Completo",
  startingFrom: "Marrakech",
  price: "Desde 50 $/persona",
  highlights: [
    "Setti Fatma: Visite la pintoresca aldea bereber y conozca su modo de vida ancestral.",
    "Cascadas de Setti Fatma: Caminata guiada hacia los saltos de agua con pozas naturales de montaña.",
    "Casa tradicional bereber: Descubra una auténtica vivienda familiar con degustación de té a la menta.",
    "Almuerzo a la orilla del río: Saboree la gastronomía marroquí con mesas instaladas junto al agua de Ourika.",
    "Cooperativa de argán: Visite una cooperativa local de mujeres para aprender la producción de aceite de argán.",
    "Jardín Bio-Aromático de Ourika: Paseo guiado entre plantas aromáticas y medicinales tradicionales.",
    "Observación de naturaleza: Descubra los paisajes protegidos del valle y aviste aves y macacos del Atlas."
  ],
  inclusions: [
    "Recogida y regreso en su alojamiento de Marrakech",
    "Trayecto panorámico siguiendo el curso del río Ourika",
    "Caminata guiada hacia las cascadas de montaña de Setti Fatma",
    "Visita a un hogar tradicional bereber y a una cooperativa de argán"
  ],
  exclusions: [
    "Gastos personales y compras de recuerdos",
    "Propinas para guía local de montaña y chófer (opcionales)",
    "Almuerzo y bebidas no especificadas",
    "Entradas a jardines privados o actividades opcionales"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Marrakech – Pueblos Bereberes – Valle de Ourika – Cascadas de Setti Fatma – Almuerzo junto al Río",
      content: "Salida por la mañana desde Marrakech hacia las laderas del Alto Atlas. Nos adentramos en el fértil y verde Valle de Ourika, bordeando las aguas cristalinas del río y contemplando pueblos de adobe colgados de las montañas. Nuestra primera parada será en una cooperativa de argán para observar el proceso de triturado y prensado manual del fruto. A continuación, visitamos una vivienda tradicional bereber para compartir un té con menta y descubrir las costumbres domésticas de las familias del Atlas. Continuamos hasta el final de la carretera en la pintoresca aldea de Setti Fatma. Acompañados de un guía local de montaña, realizaremos una caminata por senderos rocosos ascendiendo hacia las cascadas de agua fresca. Al mediodía, disfrutaremos de un almuerzo tradicional con tajine servido en restaurantes rústicos con mesas colocadas directamente sobre el lecho del río. Tiempo libre para pasear por los puentes colgantes de madera y respirar el aire puro de montaña antes de regresar a Marrakech a media tarde."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Mañana", subtitle: "Salida", desc: "Trayecto panorámico hacia el valle fluvial de Ourika." },
    { number: 2, name: "Pueblo Bereber", day: "En Ruta", subtitle: "Hogar Tradicional Familiar", desc: "Ceremonia del té y costumbres tradicionales del Atlas." },
    { number: 3, name: "Cascadas de Setti Fatma", day: "Tarde", subtitle: "Caminata de las Cascadas", desc: "Ruta guiada por rocas de montaña y almuerzo junto al río." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/thumbnail.jpg", cap: "Excursión de Naturaleza y Paisajes en el Valle de Ourika", alt: "Paisaje verde del Valle de Ourika y aldeas bereberes del Alto Atlas" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-01.jpg", cap: "Excursión de Naturaleza y Paisajes en el Valle de Ourika", alt: "Mesas tradicionales sobre el río Ourika con sombrillas de colores" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-02.jpg", cap: "Excursión de Naturaleza y Paisajes en el Valle de Ourika", alt: "Saltos de agua y pozas naturales en las cascadas de Setti Fatma" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-03.jpg", cap: "Excursión de Naturaleza y Paisajes en el Valle de Ourika", alt: "Puente colgante de madera cruzando el río en el Valle de Ourika" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-04.jpg", cap: "Excursión de Naturaleza y Paisajes en el Valle de Ourika", alt: "Viviendas tradicionales de adobe escalonadas en la ladera de Ourika" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-05.jpg", cap: "Excursión de Naturaleza y Paisajes en el Valle de Ourika", alt: "Preparación de té tradicional a la menta en una casa bereber" }
  ],
  faqs: []
};

const tour23_it = {
  slug: "ourika-valley-nature-tour",
  title: "Escursione Natura nella Valle dell'Ourika e l'Atlante | Sahara Star Tours",
  shortTitle: "Escursione Natura nella Valle dell'Ourika",
  description: "Fuggite dal caldo di Marrakech con una splendida escursione nella Valle dell'Ourika. Camminate verso le cascate di Setti Fatma, visitate villaggi berberi e vette dell'Atlante.",
  aboutHtml: "Scoprite le meraviglie naturali e la biodiversità della Valle dell'Ourika in questa escursione giornaliera da Marrakech. Esplorate le cascate di Setti Fatma, visitate una casa tradizionale berbera e gustate un autentico pranzo sulle sponde del fiume. Un itinerario ideale per chi ama la natura e desidera conoscere da vicino la vita delle montagne dell'Atlante.",
  duration: "1 Giorno / Escursione di una Giornata",
  startingFrom: "Marrakech",
  price: "Da 50 €/persona",
  highlights: [
    "Setti Fatma: Visitate il suggestivo villaggio berbero e scoprite le sue tradizioni montane.",
    "Cascate di Setti Fatma: Trekking guidato verso le suggestive cascate con pozze naturali d'acqua fresca.",
    "Casa tradizionale berbera: Esplorate un'autentica dimora con degustazione di tè alla menta.",
    "Pranzo in riva al fiume: Gustate specialità marocchine nei tavoli allestiti direttamente vicino all'acqua.",
    "Cooperativa di argan: Visita a una cooperativa femminile per scoprire la lavorazione dell'olio di argan.",
    "Giardino Bio-Aromatico dell'Ourika: Passeggiata tra erbe aromatiche e piante officinali autoctone.",
    "Osservazione naturalistica: Esplorate la natura della valle e ammirate la fauna e i paesaggi dell'Atlante."
  ],
  inclusions: [
    "Pick-up e drop-off presso il vostro alloggio a Marrakech",
    "Viaggio panoramico lungo il corso del fiume Ourika",
    "Trekking guidato alle cascate montane di Setti Fatma",
    "Visita a una casa tradizionale berbera e a una cooperativa di argan"
  ],
  exclusions: [
    "Spese personali e souvenir",
    "Mance per guida alpina e autista (facoltative)",
    "Pranzo e bevande extra non specificati",
    "Ingressi a giardini botanici o attività facoltative"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Marrakech – Villaggi Berberi – Valle dell'Ourika – Cascate di Setti Fatma – Pranzo sul Fiume",
      content: "Partenza al mattino da Marrakech verso i contrafforti dell'Alto Atlante. Entriamo nella rigogliosa Valle dell'Ourika costeggiando le acque spumeggianti del torrente montano, con vedute di villaggi in pietra e argilla abbarbicati sulle pendici. Sosta presso una cooperativa femminile di olio di argan per osservare la lavorazione artigianale dei frutti. Successivamente visiteremo una casa berbera tradizionale dove sarete accolti con il rito del tè alla menta per scoprire la vita quotidiana dei montanari. Proseguimento fino al villaggio di Setti Fatma da cui, accompagnati da una guida locale, risalirete il sentiero che conduce alle cascate naturali tra massi e ruscelli. All'ora di pranzo ci accomoderemo in uno dei caratteristici ristoranti con i tavolini posizionati a pochi centimetri dal pelo dell'acqua per assaporare un ottimo tajine. Pomeriggio di relax tra i ponti sospesi prima del rientro a Marrakech."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Marrakech", day: "Mattina", subtitle: "Partenza", desc: "Percorso panoramico verso la valle del fiume Ourika." },
    { number: 2, name: "Villaggio Berbero", day: "Lungo la Via", subtitle: "Dimora Tradizionale", desc: "Cerimonia del tè e cultura tipica dell'Alto Atlante." },
    { number: 3, name: "Cascate di Setti Fatma", day: "Pomeriggio", subtitle: "Trekking alle Cascate", desc: "Sentiero guidato tra le rocce e pranzo in riva al torrente." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/thumbnail.jpg", cap: "Escursione Natura e Paesaggi nella Valle dell'Ourika", alt: "Valle verdeggiante dell'Ourika con villaggi berberi dell'Alto Atlante" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-01.jpg", cap: "Escursione Natura e Paesaggi nella Valle dell'Ourika", alt: "Tavolini tradizionali posizionati sulle rive del torrente Ourika" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-02.jpg", cap: "Escursione Natura e Paesaggi nella Valle dell'Ourika", alt: "Salti d'acqua e pozze cristalline alle cascate di Setti Fatma" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-03.jpg", cap: "Escursione Natura e Paesaggi nella Valle dell'Ourika", alt: "Ponte pedonale sospeso in legno sul torrente nella valle dell'Ourika" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-04.jpg", cap: "Escursione Natura e Paesaggi nella Valle dell'Ourika", alt: "Abitazioni tradizionali in fango e pietra sui rilievi dell'Ourika" },
    { src: "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-05.jpg", cap: "Escursione Natura e Paesaggi nella Valle dell'Ourika", alt: "Tradizionale preparazione del tè alla menta in un'abitazione berbera" }
  ],
  faqs: []
};

saveTour('ourika-valley-nature-tour', tour23_es, tour23_it);
