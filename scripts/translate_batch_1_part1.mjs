import fs from 'node:fs';
import path from 'node:path';

const toursPart1 = [
  // Tour 1: 6-days-desert-tour-from-casablanca
  {
    slug: '6-days-desert-tour-from-casablanca',
    es: {
      slug: '6-days-desert-tour-from-casablanca',
      title: 'Circuito de 6 Días por Marruecos de Casablanca a Marrakech | Sahara Star Tours',
      shortTitle: 'Circuito de 6 Días desde Casablanca a Marrakech',
      description: 'Viaje privado de 6 días de Casablanca a Marrakech: Mezquita Hassan II, Medina de Fez, dunas de Erg Chebbi con noche en jaima de lujo, Gargantas del Todra y Kasbah Ait Ben Haddou.',
      aboutHtml: 'Embárcate en un fascinante viaje privado de 6 días desde Casablanca hasta Marrakech, combinando ciudades imperiales, ruinas romanas milenarias y la inmensidad del desierto del Sáhara. Descubre la majestuosa Mezquita Hassan II, los vestigios arqueológicos de Volubilis, la laberíntica medina de Fez y duerme bajo las estrellas en un campamento prémium en las dunas doradas de Erg Chebbi. Atraviesa las Gargantas del Todra y el Valle del Dades antes de culminar cruzando el Alto Atlas y la icónica Kasbah de Ait Ben Haddou.',
      duration: '6 Días / 5 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $790/persona',
      highlights: [
        'Desierto del Sáhara en Merzouga y las dunas de Erg Chebbi',
        'Paseo en dromedario por el desierto al atardecer',
        'Kasbah de Ait Ben Haddou, declarada Patrimonio de la Humanidad por la UNESCO',
        'Ruta panorámica a través de las montañas del Alto Atlas',
        'Medina histórica de Fez y sus lugares culturales emblemáticos',
        'Medina histórica y principales monumentos de Marrakech'
      ],
      inclusions: [
        'Vehículo privado 4x4 o monovolumen con aire acondicionado',
        'Conductor/guía local experimentado y traslados privados',
        'Combustible, peajes y costes operativos del vehículo',
        'Alojamiento en riads/hoteles seleccionados según el itinerario',
        'Desayunos y cenas incluidas según se especifica en el itinerario',
        'Paseo en dromedario por el desierto y estancia en el campamento en las dunas'
      ],
      exclusions: [
        'Almuerzos y bebidas',
        'Vuelos y servicios de aeropuerto no especificados',
        'Gastos personales y actividades opcionales',
        'Propinas y gratificaciones'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Llegada a Casablanca – Visita de la Mayor Ciudad de Marruecos',
          content: 'Tu conductor privado te dará una cálida bienvenida a tu llegada al aeropuerto o en tu alojamiento en Casablanca. Comenzaremos visitando la emblemática Mezquita Hassan II, una joya arquitectónica construida sobre el Océano Atlántico y el minarete más alto de Marruecos. Posteriormente recorreremos el animado bulevar de la Corniche y el centro colonial antes de trasladarte a tu hotel para descansar.'
        },
        {
          day: 'Día 2',
          title: 'Casablanca – Ruinas Romanas de Volubilis – Meknes – Fez',
          content: 'Tras un delicioso desayuno, saldremos rumbo al norte hacia Volubilis, la ciudad romana mejor conservada de Marruecos declarada Patrimonio de la Humanidad por la UNESCO, famosa por sus espectaculares mosaicos y el Arco de Caracalla. Continuaremos hacia la vecina ciudad imperial de Meknes para contemplar la imponente puerta Bab El Mansour y la cuenca de Sahrij Souani. Por la tarde llegaremos a Fez para alojarnos en un auténtico riad tradicional en el corazón de la medina.'
        },
        {
          day: 'Día 3',
          title: 'Visita Guiada Histórica de Fez con Guía Local',
          content: 'Dedicaremos la jornada a explorar la medina de Fez (Fes El Bali), la mayor zona peatonal del mundo y centro espiritual del país. Acompañado por un guía historiador oficial, visitarás la Mezquita y Universidad Al Quaraouiyine (fundada en el 859 d.C.), las famosas curtidurías Chouara, la Madraza Bou Inania y el Palacio Real con sus siete puertas doradas de bronce. Tarde libre para pasear por los coloridos zocos de especias y artesanías.'
        },
        {
          day: 'Día 4',
          title: 'Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Sáhara de Merzouga',
          content: 'Partiremos hacia el sur cruzando las montañas del Medio Atlas. Primera parada en Ifrane, conocida como "la Suiza de Marruecos" por su arquitectura alpina, seguida por el bosque de cedros de Azrou para observar a los macacos de Berbería en libertad. Tras almorzar en Midelt, atravesaremos el espectacular cañón y palmeral del Valle del Ziz. Por la tarde alcanzaremos las majestuosas dunas de Erg Chebbi en Merzouga, donde montarás en dromedario para presenciar una puesta de sol inolvidable antes de llegar al campamento de lujo para cenar junto al fuego con música tradicional bereber.'
        },
        {
          day: 'Día 5',
          title: 'Sáhara de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades',
          content: 'Te recomendamos madrugar para contemplar el amanecer tiñendo de oro las dunas. Tras desayunar en el campamento, saldremos hacia Rissani, cuna de la dinastía alauí y famoso por su zoco tradicional de especias y ganado. Pasaremos por Erfoud, la capital de los fósiles de mármol, antes de adentrarnos en las imponentes Gargantas del Todra con sus paredes de roca caliza de más de 300 metros. Continuaremos la ruta por la carretera de las Mil Kasbahs hasta el Valle del Dades para cenar y pasar la noche en un hotel panorámico.'
        },
        {
          day: 'Día 6',
          title: 'Valle del Dades – Valle de las Rosas – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlas – Marrakech',
          content: 'En nuestra última etapa recorreremos el Valle de las Rosas en Kelaat M\'gouna y el palmeral de Skoura. Llegaremos a Ouarzazate, "la puerta del desierto" y sede de los estudios cinematográficos Atlas. Poco después visitaremos el célebre ksar fortificado de Ait Ben Haddou, escenario de filmes como Gladiator, Lawrence de Arabia y Juego de Tronos. Finalmente cruzaremos el espectacular puerto de Tizi n\'Tichka (2.260 m) a través de las altas cumbres del Atlas, llegando a Marrakech al atardecer para el traslado a tu alojamiento o aeropuerto.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada a Casablanca – Mezquita Hassan II",
          desc: "Bienvenida en el aeropuerto y recorrido por la gran metrópoli atlántica con visita a la imponente Mezquita Hassan II."
        },
        {
          number: 2,
          name: "Volubilis y Meknes",
          day: "Día 2",
          subtitle: "Casablanca – Volubilis – Meknes – Fez",
          desc: "Descubrimiento de los mosaicos romanos de Volubilis y la monumental puerta Bab El Mansour en Meknes de camino a Fez."
        },
        {
          number: 3,
          name: "Fez",
          day: "Día 3",
          subtitle: "Visita Guiada de Fez con Guía Local",
          desc: "Inmersión cultural por la medina medieval de Fez, sus madrazas históricas y las célebres curtidurías de cuero."
        },
        {
          number: 4,
          name: "Merzouga Sáhara",
          day: "Día 4",
          subtitle: "Fez – Bosque de Cedros – Midelt – Dunas de Erg Chebbi",
          desc: "Travesía del Atlas y el palmeral del Ziz hasta las dunas de Merzouga, con paseo en dromedario y noche en campamento prémium."
        },
        {
          number: 5,
          name: "Valle del Dades",
          day: "Día 5",
          subtitle: "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",
          desc: "Amanecer en el desierto, mercado tradicional de Rissani, paseo entre los cañones del Todra y noche en el Valle del Dades."
        },
        {
          number: 6,
          name: "Marrakech",
          day: "Día 6",
          subtitle: "Dades – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
          desc: "Visita a la legendaria Kasbah de Ait Ben Haddou, cruce del puerto de Tizi n'Tichka y llegada a la ciudad roja de Marrakech."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_1.webp",
          cap: "Plaza Jemaa el-Fna en Marrakech con las montañas del Alto Atlas",
          alt: "Vista panorámica de la plaza Jemaa el-Fna en Marrakech con las montañas del Alto Atlas"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_10.webp",
          cap: "Arcos de herradura y fuente de mosaico en la Mezquita Hassan II",
          alt: "Arcos ornamentados de herradura y fuente de mosaico en el patio de la Mezquita Hassan II"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_2.webp",
          cap: "Montañas de arcilla roja y exuberante valle en el Alto Atlas",
          alt: "Montañas de arcilla roja y exuberante oasis verde en la región del Alto Atlas"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_3.webp",
          cap: "Caravana de dromedarios cruzando las dunas doradas de Erg Chebbi",
          alt: "Caravana de dromedarios recorriendo las dunas doradas de Erg Chebbi en Merzouga"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_4.webp",
          cap: "Mezquita Hassan II frente a la costa atlántica de Casablanca",
          alt: "Mezquita Hassan II erigiéndose sobre la costa atlántica en Casablanca"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_5.webp",
          cap: "Antiguos arcos romanos de piedra en ruinas arqueológicas",
          alt: "Antiguos arcos romanos de piedra con vistas a la naturaleza en ruinas arqueológicas"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_6.webp",
          cap: "Paseo marítimo y Mezquita Hassan II al atardecer en Casablanca",
          alt: "Mezquita Hassan II y paseo marítimo de Casablanca durante la puesta de sol"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_7.webp",
          cap: "Arco de Caracalla en las ruinas romanas de Volubilis",
          alt: "Arco de Caracalla en el sitio arqueológico de Volubilis declarado por la UNESCO"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_8.webp",
          cap: "Alminar histórico con nido de cigüeñas en Chellah, Rabat",
          alt: "Alminar histórico con nido de cigüeñas en la necrópolis de Chellah en Rabat"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_9.webp",
          cap: "Aldea tradicional bereber junto a laderas áridas y palmeras",
          alt: "Aldea tradicional bereber asentada junto a laderas áridas y palmerales"
        }
      ],
      faqs: [
        {
          question: "¿Es este un circuito privado o compartido?",
          answer: "Se trata de una experiencia 100% privada: el vehículo, el chófer y el itinerario están reservados en exclusiva para tu grupo. El ritmo y las paradas se adaptan a tus preferencias."
        },
        {
          question: "¿Cuánto dura el paseo en dromedario y hay alternativa disponible?",
          answer: "El paseo en dromedario dura entre 40 minutos y 1,5 horas, según la ubicación del campamento. Si lo prefieres, podemos organizar un traslado directo en vehículo 4x4 sin coste adicional."
        },
        {
          question: "¿La tienda del campamento en el desierto es privada?",
          answer: "Sí, todos nuestros campamentos en el desierto cuentan con jaimas privadas de lujo equipadas con camas confortables, baño privado completo y ducha con agua caliente."
        },
        {
          question: "¿Dónde se realiza la recogida y el regreso?",
          answer: "Te recogemos en tu hotel, riad o directamente en el aeropuerto de Casablanca. El circuito finaliza en Marrakech, donde te trasladaremos a tu hotel o al aeropuerto según tu plan de vuelo."
        },
        {
          question: "¿Qué tipo de vehículo se utiliza en la ruta?",
          answer: "Utilizamos vehículos modernos 4x4 o monovolúmenes con aire acondicionado, asientos confortables y amplio espacio para equipaje, perfectamente equipados para las rutas marroquíes."
        },
        {
          question: "¿Se pueden atender necesidades dietéticas especiales?",
          answer: "Sí, indícanos tus preferencias al hacer la reserva para que los riads y los chefs del campamento puedan preparar opciones vegetarianas, veganas, sin gluten o halal."
        },
        {
          question: "¿Es este itinerario adecuado para todas las edades?",
          answer: "Sí, es idóneo para parejas, familias y personas de todas las edades. Realizamos paradas frecuentes panorámicas y de descanso para que los trayectos resulten muy relajados."
        },
        {
          question: "¿Cuál es la mejor época del año para realizar este viaje?",
          answer: "La primavera (marzo a mayo) y el otoño (septiembre a noviembre) ofrecen temperaturas ideales en todo Marruecos. Los meses de invierno también son fantásticos en el desierto, con días soleados y noches frescas."
        }
      ]
    },
    it: {
      slug: '6-days-desert-tour-from-casablanca',
      title: 'Tour di 6 Giorni in Marocco da Casablanca a Marrakech | Sahara Star Tours',
      shortTitle: 'Tour di 6 Giorni da Casablanca a Marrakech',
      description: 'Viaggio privato di 6 giorni da Casablanca a Marrakech: Moschea Hassan II, Medina di Fes, dune di Erg Chebbi in campo di lusso, Gole del Todra e Kasbah Ait Ben Haddou.',
      aboutHtml: 'Parti per un suggestivo viaggio privato di 6 giorni da Casablanca a Marrakech, unendo città imperiali, antiche rovine romane e la maestosità del deserto del Sahara. Scopri la grandiosa Moschea Hassan II, i resti archeologici di Volubilis, la labirintica medina di Fes e dormi sotto la volta celeste in un campo tendato di lusso tra le dune dorate di Erg Chebbi. Attraversa le imponenti Gole del Todra e la Valle del Dades prima di concludere il viaggio tra le vette dell\'Alto Atlante e la celebre Kasbah di Ait Ben Haddou.',
      duration: '6 Giorni / 5 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $790/persona',
      highlights: [
        'Deserto del Sahara a Merzouga e le dune di Erg Chebbi',
        'Passeggiata a dorso di dromedario nel deserto al tramonto',
        'Kasbah di Ait Ben Haddou, Patrimonio Mondiale dell\'UNESCO',
        'Percorso panoramico attraverso le vette dell\'Alto Atlante',
        'Medina storica di Fes e i suoi principali siti culturali',
        'Medina storica e monumenti iconici di Marrakech'
      ],
      inclusions: [
        'Veicolo privato 4x4 o minivan dotato di aria condizionata',
        'Autista/guida locale esperto e trasferimenti privati dedicati',
        'Carburante, pedaggi stradali e costi operativi standard del veicolo',
        'Pernottamento in riad/hotel selezionati come indicato nell\'itinerario',
        'Colazioni quotidiane e cene incluse secondo l\'itinerario',
        'Trekking in dromedario nel deserto e accesso al campo tendato tra le dune'
      ],
      exclusions: [
        'Pranzi e bevande',
        'Voli aerei e servizi aeroportuali non esplicitamente indicati',
        'Spese personali e attività facoltative',
        'Mance e gratifiche'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Casablanca – Visita della Grande Metropoli del Marocco',
          content: 'Il tuo autista privato ti accoglierà calorosamente al tuo arrivo in aeroporto o presso il tuo hotel a Casablanca. Inizieremo con la visita alla splendida Moschea Hassan II, capolavoro architettonico costruito a ridosso dell\'Oceano Atlantico con il minareto più alto del Paese. Proseguiremo con una panoramica della Corniche e del quartiere storico prima del trasferimento in hotel per il meritato relax.'
        },
        {
          day: 'Giorno 2',
          title: 'Casablanca – Rovine Romane di Volubilis – Meknes – Fes',
          content: 'Dopo la prima colazione, partiremo verso nord alla volta di Volubilis, il sito archeologico romano meglio conservato del Marocco e Patrimonio dell\'Umanità UNESCO, noto per i suoi mosaici eccezionali e l\'Arco di Caracalla. Proseguiremo verso la vicina città imperiale di Meknes per ammirare la monumentale porta Bab El Mansour. Nel tardo pomeriggio raggiungeremo Fes, sistemandoci in un accogliente riad tradizionale all\'interno della medina.'
        },
        {
          day: 'Giorno 3',
          title: 'Visita Guidata Storica di Fes con Guida Locale',
          content: 'Intera giornata dedicata alla scoperta guidata di Fes El Bali, la più grande medina pedonale del mondo e cuore spirituale del Marocco. Accompagnato da una guida storica certificata, visiterai la Moschea e Università Al Quaraouiyine (fondata nell\'859 d.C.), le storiche concerie Chouara, la Medersa Bou Inania e le maestose porte bronzee del Palazzo Reale. Pomeriggio libero per immergersi nell\'atmosfera vivace dei souk artigianali.'
        },
        {
          day: 'Giorno 4',
          title: 'Fes – Ifrane – Foresta dei Cedri – Midelt – Valle dello Ziz – Sahara di Merzouga',
          content: 'Viaggeremo verso sud superando la catena del Medio Atlante. Prima sosta a Ifrane, la "Svizzera del Marocco" con le sue tipiche case in stile alpino, seguita da una passeggiata nella foresta di cedri di Azrou per incontrare le scimmie bertucce nel loro habitat naturale. Dopo la pausa pranzo a Midelt, seguiremo le gole scenografiche e il palmeto della Valle dello Ziz fino a raggiungere le dune dorate di Erg Chebbi a Merzouga. Qui monterai in sella a un dromedario per assistere a un tramonto indimenticabile prima di raggiungere il campo di lusso per una cena berbera attorno al falò.'
        },
        {
          day: 'Giorno 5',
          title: 'Sahara di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades',
          content: 'Sveglia di primo mattino per contemplare il sole che sorge illuminando le dune di sabbia dorata. Dopo la colazione al campo, partiremo verso Rissani, antica capitale del Tafilalet e vivace centro carovaniero. Passeremo per Erfoud, celebre per la lavorazione dei fossili, per poi esplorare le maestose Gole del Todra con le loro pareti rocciose verticali alte oltre 300 metri. Percorrendo la Strada delle Mille Kasbah giungeremo nella panoramica Valle del Dades per la cena e il pernottamento.'
        },
        {
          day: 'Giorno 6',
          title: 'Valle del Dades – Valle delle Rose – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlante – Marrakech',
          content: 'Nell\'ultima tappa attraverseremo la profumata Valle delle Rose a Kelaat M\'gouna e le oasi di palme di Skoura. Arriveremo a Ouarzazate, la "porta del deserto", per ammirare i rinomati studi cinematografici Atlas. Poco dopo visiteremo lo spettacolare ksar di Ait Ben Haddou, set di film iconici come Il Gladiatore e Lawrence d\'Arabia. Concluderemo il viaggio superando il passo di Tizi n\'Tichka (2.260 m) tra le cime dell\'Alto Atlante, arrivando a Marrakech nel tardo pomeriggio per il trasferimento in hotel o in aeroporto.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo a Casablanca – Moschea Hassan II",
          desc: "Accoglienza in aeroporto e tour panoramico della capitale economica con visita alla maestosa Moschea Hassan II."
        },
        {
          number: 2,
          name: "Volubilis e Meknes",
          day: "Giorno 2",
          subtitle: "Casablanca – Volubilis – Meknes – Fes",
          desc: "Visita ai mosaici romani di Volubilis e alla monumentale porta Bab El Mansour di Meknes prima di giungere a Fes."
        },
        {
          number: 3,
          name: "Fes",
          day: "Giorno 3",
          subtitle: "Tour Guidato di Fes con Guida Locale",
          desc: "Esplorazione approfondita della medina millenaria di Fes, delle sue antiche madrasse e delle celebri concerie di pelli."
        },
        {
          number: 4,
          name: "Merzouga Sahara",
          day: "Giorno 4",
          subtitle: "Fes – Foresta dei Cedri – Midelt – Dune di Erg Chebbi",
          desc: "Viaggio attraverso l'Atlante e la Valle dello Ziz fino alle sabbie di Merzouga, con dromedariata e notte in campo tendato."
        },
        {
          number: 5,
          name: "Valle del Dades",
          day: "Giorno 5",
          subtitle: "Merzouga – Rissani – Gole del Todra – Valle del Dades",
          desc: "Alba nel deserto, mercato storico di Rissani, passeggiata tra i canyon del Todra e pernottamento nella Valle del Dades."
        },
        {
          number: 6,
          name: "Marrakech",
          day: "Giorno 6",
          subtitle: "Dades – Ouarzazate – Ait Ben Haddou – Alto Atlante – Marrakech",
          desc: "Visita alla leggendaria Kasbah di Ait Ben Haddou, traversata del valico di Tizi n'Tichka e arrivo serale a Marrakech."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_1.webp",
          cap: "Piazza Jemaa el-Fna a Marrakech con le montagne dell'Alto Atlante sullo sfondo",
          alt: "Vista panoramica della piazza Jemaa el-Fna a Marrakech con le cime innevate dell'Alto Atlante"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_10.webp",
          cap: "Archi a ferro di cavallo e cortile con fontana a mosaico nella Moschea Hassan II",
          alt: "Dettaglio di archi decorati e fontana a mosaico nel cortile della Moschea Hassan II a Casablanca"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_2.webp",
          cap: "Montagne d'argilla rossa e lussureggiante oasi verde nell'Alto Atlante",
          alt: "Montagne d'argilla rossa e vallata verdeggiante nella regione dell'Alto Atlante"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_3.webp",
          cap: "Carovana di dromedari sulle dune dorate di Erg Chebbi a Merzouga",
          alt: "Carovana di dromedari che attraversa le spettacolari dune sabbiose di Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_4.webp",
          cap: "La grandiosa Moschea Hassan II affacciata sulle onde dell'Atlantico",
          alt: "La Moschea Hassan II eretta maestosa sulla costa atlantica di Casablanca"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_5.webp",
          cap: "Antichi archi romani in pietra presso il sito archeologico",
          alt: "Archi romani in pietra che si affacciano sul paesaggio circostante a Volubilis"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_6.webp",
          cap: "Passeggiata costiera e Moschea Hassan II al tramonto a Casablanca",
          alt: "La Moschea Hassan II e il lungomare di Casablanca illuminati dalla luce del tramonto"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_7.webp",
          cap: "Arco di Caracalla nelle rovine romane UNESCO di Volubilis",
          alt: "L'Arco di Caracalla nel parco archeologico romano di Volubilis"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_8.webp",
          cap: "Antico minareto con nido di cicogne nella necropoli di Chellah a Rabat",
          alt: "Storico minareto con nido di cicogne nel sito archeologico di Chellah a Rabat"
        },
        {
          src: "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_9.webp",
          cap: "Villaggio tradizionale berbero tra colline aride e palmeti",
          alt: "Villaggio tradizionale berbero adagiato sulle colline aride con palmeti"
        }
      ],
      faqs: [
        {
          question: "Questo tour è privato o condiviso?",
          answer: "Si tratta di un'esperienza interamente privata: il veicolo, l'autista e il programma di viaggio sono riservati in esclusiva per il tuo gruppo, garantendo totale flessibilità."
        },
        {
          question: "Quanto dura la passeggiata sui dromedari e c'è un'alternativa?",
          answer: "La cammellata dura solitamente tra 40 e 90 minuti per raggiungere il campo. Chi preferisce può usufruire del trasferimento diretto in 4x4 senza costi aggiuntivi."
        },
        {
          question: "La tenda nel campo del deserto dispone di bagno privato?",
          answer: "Sì, i nostri campi tendati di lusso offrono ampie tende private dotate di letti comodi, elettricità, bagno privato con wc e doccia con acqua calda."
        },
        {
          question: "Dove avvengono il prelievo e il rientro?",
          answer: "Ti verremo a prendere direttamente all'aeroporto, in hotel o nel riad a Casablanca. Il tour termina a Marrakech con accompagnamento al tuo alloggio o all'aeroporto."
        },
        {
          question: "Che tipo di veicolo viene impiegato per il tour?",
          answer: "Il trasporto si effettua a bordo di confortevoli fuoristrada 4x4 o moderni minivan dotati di aria condizionata, sedili spaziosi e ampio bagagliaio."
        },
        {
          question: "È possibile richiedere menu per esigenze dietetiche particolari?",
          answer: "Certamente. Ti invitiamo a segnalarci eventuali esigenze (vegetariane, vegane, senza glutine o halal) al momento della prenotazione per predisporre pasti ad hoc."
        },
        {
          question: "Il viaggio è indicato per persone di ogni età?",
          answer: "Sì, il percorso è ideale sia per coppie che per famiglie con bambini. Sono previste soste frequenti lungo il tragitto per rendere il viaggio sempre piacevole e riposante."
        },
        {
          question: "Qual è il periodo migliore dell'anno per effettuare questo tour?",
          answer: "La primavera (marzo-maggio) e l'autunno (settembre-novembre) offrono un clima mite e ideale. Anche i mesi invernali sono ottimi per visitare il deserto, con giornate limpide."
        }
      ]
    }
  }
];

for (const item of toursPart1) {
  fs.writeFileSync(path.resolve(`src/data/locales/es/tours/${item.slug}.json`), JSON.stringify(item.es, null, 2), 'utf-8');
  fs.writeFileSync(path.resolve(`src/data/locales/it/tours/${item.slug}.json`), JSON.stringify(item.it, null, 2), 'utf-8');
  console.log(`Saved tour ${item.slug} in ES and IT!`);
}
