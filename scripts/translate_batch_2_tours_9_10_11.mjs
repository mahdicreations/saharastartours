import fs from 'node:fs';
import path from 'node:path';

const toursBatch = [
  // Tour 9: 12-days-morocco-tour
  {
    slug: '12-days-morocco-tour',
    es: {
      slug: '12-days-morocco-tour',
      title: 'Circuito de 12 Días Clásicos Destacados de Marruecos | Sahara Star Tours',
      shortTitle: 'Circuito de 12 Días Clásicos de Marruecos',
      description: 'Viaje privado de 12 días por Marruecos: Casablanca, Rabat, Tánger, Chefchaouen con día libre, Fez, dunas de Merzouga con jaima de lujo, Todra y Marrakech.',
      aboutHtml: 'El Circuito de 12 Días Clásicos Destacados de Marruecos es una inmersión completa en la rica historia, arquitectura imperial y paisajes naturales del país. Comenzando en Casablanca y Rabat, el viaje recorre el norte atlántico hasta Tánger y la cautivadora ciudad azul de Chefchaouen, donde disfrutarás de un día libre para explorar a tu ritmo. Continúa hacia la milenaria Fez con guía local, cruza el Medio Atlas hacia las dunas de Merzouga para una noche de glamping bajo las estrellas del Sáhara, y finaliza descubriendo las espectaculares Gargantas del Todra, Ait Ben Haddou y los palacios de Marrakech.',
      duration: '12 Días / 11 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $1,490/persona',
      highlights: [
        'Casablanca: Gran Mezquita Hassan II sobre el océano Atlántico y bulevar de la Corniche',
        'Rabat: Capital política, Mausoleo real de Mohammed V, Torre Hassan y Kasbah de los Oudayas',
        'Tánger: Cabo Espartel, confluencia del Mediterráneo y el Atlántico, y legendarias Cuevas de Hércules',
        'Chefchaouen: Día completo libre en la emblemática Perla Azul en las montañas del Rif',
        'Fez: Medina medieval Patrimonio de la Humanidad por la UNESCO, Universidad Al Quaraouiyine y curtidurías',
        'Medio Atlas: Bosques de cedros protegidos de Azrou y observación de macacos en libertad',
        'Merzouga: Dunas doradas de Erg Chebbi con paseo en dromedario y noche en campamento de lujo',
        'Gargantas del Todra: Desfiladeros imponentes de roca caliza de 300 metros de altura',
        'Valle del Dades y Ouarzazate: Ruta de las Mil Kasbahs y estudios de cine Atlas',
        'Kasbah de Ait Ben Haddou: Pueblo fortificado de barro declarado por la UNESCO y escenario de cine',
        'Marrakech: Palacio de la Bahía, Tumbas Saadíes, Jardines Majorelle y cena tradicional con espectáculo'
      ],
      inclusions: [
        'Visitas guiadas privadas en ciudades y entradas a monumentos especificados',
        'Transporte privado confortable y climatizado con chófer profesional',
        'Paseo en dromedario y noche en campamento de lujo en el desierto de Merzouga',
        'Servicio de bienvenida y asistencia en traslados de llegada y salida',
        'Cena tradicional en Marrakech con música marroquí y espectáculo folclórico',
        'Régimen de media pensión durante el recorrido según el itinerario',
        'Combustible y peajes de carretera incluidos',
        '11 desayunos y cenas incluidas según programa'
      ],
      exclusions: [
        'Tasas aéreas y billetes de avión internacionales',
        'Almuerzos diarios no especificados',
        'Bebidas durante las comidas',
        'Vuelos internacionales de conexión',
        'Propinas y gratificaciones voluntarias',
        'Seguro médico y de viaje personal',
        'Propinas para guías y conductor (opcionales)',
        'Cualquier concepto no indicado expresamente en el apartado de incluidos'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Llegada a Casablanca',
          content: 'Bienvenida en el aeropuerto Mohammed V de Casablanca y traslado a tu hotel. Visita a la imponente Mezquita Hassan II construida junto al Atlántico y paseo por la Corniche. Alojamiento en Casablanca.'
        },
        {
          day: 'Día 2',
          title: 'Casablanca a Rabat',
          content: 'Traslado a la capital del reino, Rabat. Visita al Mausoleo de Mohammed V, la Torre Hassan y los jardines andalusíes de la Kasbah de los Oudayas frente a la desembocadura del río Bu Regreg. Noche en Rabat.'
        },
        {
          day: 'Día 3',
          title: 'Rabat a Tánger y Chefchaouen',
          content: 'Ruta hacia el norte hasta Tánger para visitar el Cabo Espartel y las históricas Cuevas de Hércules. Por la tarde ascenderemos por las montañas del Rif hasta llegar a la mágica ciudad azul de Chefchaouen.'
        },
        {
          day: 'Día 4',
          title: 'Día Libre en Chefchaouen',
          content: 'Día completo a tu propio ritmo para explorar los callejones azules, descubrir talleres de artesanía, subir al manantial de Ras El Ma o contemplar el atardecer desde la colina con vistas a la cordillera del Rif.'
        },
        {
          day: 'Día 5',
          title: 'Chefchaouen a Fez',
          content: 'Salida de Chefchaouen hacia la capital cultural de Fez. Por la tarde primer contacto con la medina medieval de Fes El Bali, declarada Patrimonio de la Humanidad por la UNESCO, y descanso en un riad tradicional.'
        },
        {
          day: 'Día 6',
          title: 'Visita Cultural Guiada de Fez',
          content: 'Recorrido completo con guía local: la Mezquita y Universidad Al Quaraouiyine, la Madraza Bou Inania, la monumental puerta Bab Boujloud, las históricas curtidurías Chouara y talleres de cerámica tradicional.'
        },
        {
          day: 'Día 7',
          title: 'Fez a Merzouga (Desierto del Sáhara)',
          content: 'Viaje hacia el sur por las montañas del Medio Atlas con parada en el bosque de cedros de Azrou y Midelt. Llegada a Merzouga por la tarde, paseo en dromedario sobre las dunas de Erg Chebbi y noche en campamento prémium.'
        },
        {
          day: 'Día 8',
          title: 'Merzouga a las Gargantas del Todra',
          content: 'Amanecer dorado sobre el desierto y desayuno. Viaje hacia Tinghir para pasear entre los imponentes acantilados verticales de las Gargantas del Todra y relajarse en un hotel con encanto junto al río.'
        },
        {
          day: 'Día 9',
          title: 'Gargantas del Todra a Ait Ben Haddou',
          content: 'Ruta por el Valle del Dades y Ouarzazate hasta el legendario ksar fortificado de Ait Ben Haddou (UNESCO), famoso por películas como Gladiator y Lawrence de Arabia. Alojamiento en una kasbah tradicional.'
        },
        {
          day: 'Día 10',
          title: 'Ait Ben Haddou a Marrakech',
          content: 'Cruce del Alto Atlas a través del puerto de montaña de Tizi n\'Tichka (2.260 m). Llegada por la tarde a Marrakech y visita a los tranquilos Jardines Majorelle antes de vivir la energía nocturna de Jemaa el-Fna.'
        },
        {
          day: 'Día 11',
          title: 'Visita Monumental de Marrakech',
          content: 'Tour guiado por los palacios históricos de Marrakech: Palacio de la Bahía, Tumbas Saadíes y zocos artesanos. Por la noche, cena de despedida en un restaurante tradicional con música y folclore marroquí.'
        },
        {
          day: 'Día 12',
          title: 'Salida desde Marrakech',
          content: 'Tiempo libre para últimas compras o paseo según tu horario de vuelo, y traslado organizado al aeropuerto de Marrakech Menara o Casablanca para tu viaje de regreso.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada",
          desc: "Visita a la Mezquita Hassan II."
        },
        {
          number: 2,
          name: "Rabat",
          day: "Día 2",
          subtitle: "Capital",
          desc: "Torre Hassan y Kasbah de los Oudayas."
        },
        {
          number: 3,
          name: "Tánger",
          day: "Día 3",
          subtitle: "Estrecho de Gibraltar",
          desc: "Cabo Espartel y Cuevas de Hércules."
        },
        {
          number: 4,
          name: "Chefchaouen",
          day: "Día 4",
          subtitle: "Pueblo Azul del Rif",
          desc: "Día libre en la ciudad azul."
        },
        {
          number: 5,
          name: "Fez",
          day: "Días 5 y 6",
          subtitle: "Medina Medieval",
          desc: "Universidad Al Quaraouiyine y curtidurías."
        },
        {
          number: 6,
          name: "Desierto de Merzouga",
          day: "Días 7 y 8",
          subtitle: "Campamento Erg Chebbi",
          desc: "Paseo en dromedario y noche estrellada."
        },
        {
          number: 7,
          name: "Dades y Todra",
          day: "Día 9",
          subtitle: "Cañones",
          desc: "Gargantas profundas y kasbahs."
        },
        {
          number: 8,
          name: "Ouarzazate",
          day: "Día 10",
          subtitle: "Ciudad del Cine",
          desc: "Fortaleza de Ait Ben Haddou (UNESCO)."
        },
        {
          number: 9,
          name: "Marrakech",
          day: "Días 11 y 12",
          subtitle: "La Ciudad Roja",
          desc: "Palacios, zocos y cena especial."
        },
        {
          number: 10,
          name: "Casablanca",
          day: "Día 13",
          subtitle: "Salida",
          desc: "Traslado al aeropuerto y despedida."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/thumbnail.webp",
          cap: "Circuito de 12 Días Clásicos Destacados de Marruecos",
          alt: "Circuito de 12 Días Clásicos Destacados de Marruecos – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-01.jpg",
          cap: "Mezquita Hassan II en la costa de Casablanca",
          alt: "Minarete y explanada monumental de la Mezquita Hassan II"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-02.jpg",
          cap: "Chefchaouen y fachadas de color azul índigo",
          alt: "Callejón escalonado y puertas decoradas en Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-03.jpg",
          cap: "Medina histórica de Fez y madrazas islámicas",
          alt: "Detalle arquitectónico en un patio tradicional de Fez"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-04.jpg",
          cap: "Dunas doradas de Erg Chebbi en Merzouga",
          alt: "Paseo en dromedario durante el ocaso en el Sáhara"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-05.jpg",
          cap: "Paredes verticales en las Gargantas del Todra",
          alt: "Cañón rocoso imponente y río en las Gargantas del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-06.jpg",
          cap: "Kasbah histórica de Ait Ben Haddou",
          alt: "Construcción de adobe y torres defensivas en Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-07.jpg",
          cap: "Plaza Jemaa el-Fna y bullicio de Marrakech",
          alt: "Puestos iluminados y ambiente nocturno en Marrakech"
        }
      ],
      faqs: []
    },
    it: {
      slug: '12-days-morocco-tour',
      title: 'Tour di 12 Giorni Classico del Marocco e del Sahara | Sahara Star Tours',
      shortTitle: 'Tour di 12 Giorni Classico del Marocco',
      description: 'Viaggio privato di 12 giorni in Marocco: Casablanca, Rabat, Tangeri, Chefchaouen con giornata libera, Fes, dune di Merzouga in campo di lusso, Todra e Marrakech.',
      aboutHtml: 'Il Tour di 12 Giorni Classico del Marocco offre una scoperta approfondita delle meraviglie storiche, delle città imperiali e dei grandi scenari naturali del Paese. Iniziando da Casablanca e Rabat, il viaggio raggiunge Tangeri e l\'incantevole Chefchaouen nel Rif, con un\'intera giornata libera per esplorare i vicoli blu. Prosegue verso la millenaria Fes con guida locale, supera il Medio Atlante fino alle dune di Merzouga per una notte magica in campo tendato di lusso, e si conclude tra le Gole del Todra, la fortezza di Ait Ben Haddou e i tesori monumentali di Marrakech.',
      duration: '12 Giorni / 11 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $1,490/persona',
      highlights: [
        'Casablanca: Grande Moschea Hassan II sull\'Atlantico e lungomare della Corniche',
        'Rabat: Capitale istituzionale, Mausoleo di Mohammed V, Torre Hassan e Kasbah degli Oudaïa',
        'Tangeri: Capo Spartel, incontro tra Mediterraneo e Atlantico, e Grotte di Ercole',
        'Chefchaouen: Giornata intera libera nella celebre Perla Blu tra le montagne del Rif',
        'Fes: Medina medievale Patrimonio dell\'UNESCO, Università Al Quaraouiyine e concerie Chouara',
        'Medio Atlante: Foreste di cedri ad Azrou e scimmie bertucce in libertà',
        'Merzouga: Dune dorate di Erg Chebbi con cammellata e notte in campo tendato di lusso',
        'Gole del Todra: Canyon spettacolari con falesie verticali alte 300 metri',
        'Valle del Dades e Ouarzazate: Strada delle Mille Kasbah e rinomati studi cinematografici Atlas',
        'Kasbah di Ait Ben Haddou: Antico ksar in terra cruda dell\'UNESCO e celebre set cinematografico',
        'Marrakech: Palazzo Bahia, Tombe Saadiane, Giardini Majorelle e cena di gala con spettacolo'
      ],
      inclusions: [
        'Visite guidate private nelle città e biglietti d\'ingresso ai monumenti inclusi',
        'Trasporto privato climatizzato e confortevole con autista professionale',
        'Trekking a dorso di dromedario e pernottamento in campo tendato di lusso a Merzouga',
        'Servizio di assistenza e accoglienza per i trasferimenti aeroportuali',
        'Cena tradizionale a Marrakech con musica e danze tipiche marocchine',
        'Trattamento di mezza pensione durante il circuito secondo il programma',
        'Carburante e pedaggi autostradali inclusi',
        '11 prime colazioni e cene previste da itinerario'
      ],
      exclusions: [
        'Tasse aeroportuali e voli aerei internazionali',
        'Pranzi non menzionati nel programma',
        'Bevande durante i pasti',
        'Voli di collegamento',
        'Mance e gratifiche a discrezione personale',
        'Assicurazione sanitaria e di viaggio personale',
        'Mance per guide locali e autista (facoltative)',
        'Tutto quanto non espressamente specificato tra i servizi inclusi'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Casablanca',
          content: 'Accoglienza all\'aeroporto Mohammed V di Casablanca e trasferimento in hotel. Visita alla grandiosa Moschea Hassan II sull\'oceano e passeggiata sulla Corniche. Notte a Casablanca.'
        },
        {
          day: 'Giorno 2',
          title: 'Da Casablanca a Rabat',
          content: 'Trasferimento nella capitale Rabat per visitare il Mausoleo di Mohammed V, la Torre Hassan e i giardini della Kasbah degli Oudaïa affacciati sulla foce del fiume Bu Regreg. Notte a Rabat.'
        },
        {
          day: 'Giorno 3',
          title: 'Da Rabat a Tangeri e Chefchaouen',
          content: 'Direzione nord fino a Tangeri per ammirare Capo Spartel e le leggendarie Grotte di Ercole. Nel pomeriggio salita tra i monti del Rif fino alla suggestiva Città Blu di Chefchaouen.'
        },
        {
          day: 'Giorno 4',
          title: 'Giornata Libera a Chefchaouen',
          content: 'Intera giornata libera per passeggiare tra i vicoli azzurri, scoprire le botteghe artigiane, salire alla sorgente di Ras El Ma o godersi il tramonto dal belvedere panoramico.'
        },
        {
          day: 'Giorno 5',
          title: 'Da Chefchaouen a Fes',
          content: 'Partenza da Chefchaouen verso la capitale culturale Fes. Nel pomeriggio primo contatto con i vicoli medievali di Fes El Bali (Patrimonio UNESCO) e sistemazione in riad.'
        },
        {
          day: 'Giorno 6',
          title: 'Tour Culturale Guidato di Fes',
          content: 'Visita guidata approfondita: Università Al Quaraouiyine, Medersa Bou Inania, la porta monumentale Bab Boujloud, le storiche concerie Chouara e i laboratori di ceramica.'
        },
        {
          day: 'Giorno 7',
          title: 'Da Fes a Merzouga (Deserto del Sahara)',
          content: 'Viaggio verso sud oltre il Medio Atlante con sosta nella foresta di cedri di Azrou e Midelt. Arrivo a Merzouga, cammellata sulle dune di Erg Chebbi e notte in campo tendato di lusso.'
        },
        {
          day: 'Giorno 8',
          title: 'Da Merzouga alle Gole del Todra',
          content: 'Alba dorata sulle dune e colazione. Proseguimento verso Tinghir per passeggiare tra le monumentali pareti rocciose delle Gole del Todra e relax in hotel di charme.'
        },
        {
          day: 'Giorno 9',
          title: 'Dalle Gole del Todra ad Ait Ben Haddou',
          content: 'Strada delle Mille Kasbah attraverso il Dades e Ouarzazate fino alla celeberrima fortezza di Ait Ben Haddou (UNESCO), set di film leggendari. Pernottamento in kasbah.'
        },
        {
          day: 'Giorno 10',
          title: 'Da Ait Ben Haddou a Marrakech',
          content: 'Valico dell\'Alto Atlante attraverso il passo di Tizi n\'Tichka (2.260 m). Arrivo nel pomeriggio a Marrakech con visita ai Giardini Majorelle e serata nell\'animata piazza Jemaa el-Fna.'
        },
        {
          day: 'Giorno 11',
          title: 'Tour Monumentale di Marrakech',
          content: 'Visita guidata ai palazzi storici di Marrakech: Palazzo Bahia, Tombe Saadiane e souk. In serata cena speciale in ristorante tipico con musica e spettacolo folcloristico marocchino.'
        },
        {
          day: 'Giorno 12',
          title: 'Partenza da Marrakech',
          content: 'Tempo libero a disposizione in base all\'orario del volo e trasferimento programmato all\'aeroporto di Marrakech Menara o Casablanca per il rientro.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo",
          desc: "Visita alla Moschea Hassan II."
        },
        {
          number: 2,
          name: "Rabat",
          day: "Giorno 2",
          subtitle: "Capitale",
          desc: "Torre Hassan e Kasbah degli Oudaïa."
        },
        {
          number: 3,
          name: "Tangeri",
          day: "Giorno 3",
          subtitle: "Stretto di Gibilterra",
          desc: "Capo Spartel e Grotte di Ercole."
        },
        {
          number: 4,
          name: "Chefchaouen",
          day: "Giorno 4",
          subtitle: "Borgo Blu del Rif",
          desc: "Giornata libera nella medina azzurra."
        },
        {
          number: 5,
          name: "Fes",
          day: "Giorni 5 e 6",
          subtitle: "Medina Medievale",
          desc: "Università Al Quaraouiyine e concerie."
        },
        {
          number: 6,
          name: "Deserto di Merzouga",
          day: "Giorni 7 e 8",
          subtitle: "Campo Erg Chebbi",
          desc: "Cammellata e notte sotto le stelle."
        },
        {
          number: 7,
          name: "Dades e Todra",
          day: "Giorno 9",
          subtitle: "Canyon",
          desc: "Gole profonde e paesaggi di kasbah."
        },
        {
          number: 8,
          name: "Ouarzazate",
          day: "Giorno 10",
          subtitle: "Città del Cinema",
          desc: "Fortezza di Ait Ben Haddou (UNESCO)."
        },
        {
          number: 9,
          name: "Marrakech",
          day: "Giorni 11 e 12",
          subtitle: "La Città Rossa",
          desc: "Palazzi, souk e cena speciale."
        },
        {
          number: 10,
          name: "Casablanca",
          day: "Giorno 13",
          subtitle: "Partenza",
          desc: "Transfer aeroportuale e rientro."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/thumbnail.webp",
          cap: "Tour di 12 Giorni Classico del Marocco",
          alt: "Tour di 12 Giorni Classico del Marocco – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-01.jpg",
          cap: "Moschea Hassan II sulla costa di Casablanca",
          alt: "Minareto e spianata della Moschea Hassan II a Casablanca"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-02.jpg",
          cap: "Chefchaouen e vicoli azzurri tra i monti del Rif",
          alt: "Scorcio caratteristico dipinto di blu a Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-03.jpg",
          cap: "Medina storica di Fes e architettura islamica",
          alt: "Dettaglio ornamentale in un cortile tradizionale a Fes"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-04.jpg",
          cap: "Dune dorate di Erg Chebbi a Merzouga",
          alt: "Cammellata al tramonto nel deserto del Sahara"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-05.jpg",
          cap: "Falesie a strapiombo nelle Gole del Todra",
          alt: "Canyon roccioso imponente nelle Gole del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-06.jpg",
          cap: "Kasbah storica di Ait Ben Haddou",
          alt: "Costruzioni in argilla e torri merlate ad Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-07.jpg",
          cap: "Piazza Jemaa el-Fna e atmosfera di Marrakech",
          alt: "Banchi illuminati e vita notturna a Marrakech"
        }
      ],
      faqs: []
    }
  },

  // Tour 10: private-12-days-desert-marrakech
  {
    slug: 'private-12-days-desert-marrakech',
    es: {
      slug: 'private-12-days-desert-marrakech',
      title: 'Circuito Privado de 12 Días Casablanca, Sáhara y Marrakech | Sahara Star Tours',
      shortTitle: 'Circuito Privado de 12 Días Casablanca, Sáhara y Marrakech',
      description: 'Viaje exclusivo de 12 días por Marruecos: Casablanca, Chefchaouen, Fez, Midelt, dunas de Merzouga en jaima de lujo, Todra, Imlil en el Atlas, Essaouira y Marrakech.',
      aboutHtml: 'Un extraordinario itinerario privado de 12 días que combina las Ciudades Imperiales, el desierto del Sáhara, el Parque Nacional del Toubkal y la costa atlántica. Desde Casablanca y la mágica Chefchaouen hasta la milenaria medina de Fez, cruzarás el Medio Atlas hacia las dunas doradas de Erg Chebbi para disfrutar de una estancia de lujo bajo las estrellas. La ruta te llevará después por los cañones del Todra, el Valle del Dades y la Kasbah de Ait Ben Haddou hasta el pintoresco pueblo de montaña de Imlil en el Alto Atlas, las brisas marinas de Essaouira y los zocos de Marrakech.',
      duration: '12 Días / 11 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $1,550/persona',
      highlights: [
        'Sumérgete en la cultura y ambiente único de Chefchaouen saliendo desde Casablanca',
        'Descubre el rico patrimonio de Fez, una de las ciudades medievales más antiguas del mundo',
        'Viaja desde Midelt hasta Merzouga atravesando el pintoresco Valle del Ziz y sus palmerales',
        'Disfruta del confort exclusivo de un campamento de lujo en las dunas de Merzouga con paseo en dromedario',
        'Explora la vibrante ciudad de Marrakech, famosa por sus palacios históricos y zocos tradicionales'
      ],
      inclusions: [
        'Visitas guiadas privadas en ciudades y entradas a monumentos',
        'Transporte privado confortable y climatizado con chófer profesional',
        'Paseo en dromedario y noche en campamento de lujo en el desierto',
        'Servicio de bienvenida y asistencia personalizada en aeropuerto',
        'Cena en restaurante tradicional de Marrakech con música y danza marroquí',
        'Régimen de media pensión durante el viaje según itinerario',
        'Combustible y peajes de carretera incluidos',
        '11 desayunos y 5 cenas en el desierto'
      ],
      exclusions: [
        'Tasas aéreas y billetes de avión internacionales',
        'Almuerzos diarios no especificados',
        'Bebidas durante las comidas',
        'Vuelos internacionales de conexión',
        'Propinas y gratificaciones voluntarias',
        'Seguro médico y de viaje de emergencia',
        'Propinas para guías y chóferes (opcionales)',
        'Cualquier concepto no indicado expresamente en el apartado de incluidos'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Casablanca – Chefchaouen',
          content: 'Recogida en Casablanca y visita a la Mezquita Hassan II frente al mar. Viaje hacia el norte a través de las montañas del Rif hasta llegar a Chefchaouen. Tarde libre en la Ciudad Azul.'
        },
        {
          day: 'Día 2',
          title: 'Chefchaouen – Fez',
          content: 'Mañana en Chefchaouen y salida hacia Volubilis para contemplar sus mosaicos romanos de la UNESCO. Parada en Meknes y llegada a Fez para alojarnos en un riad tradicional.'
        },
        {
          day: 'Día 3',
          title: 'Fez – Fez',
          content: 'Visita guiada histórica de Fez El Bali: mezquita Al Quaraouiyine, madrazas, curtidurías Chouara, palacio real y zocos artesanales.'
        },
        {
          day: 'Día 4',
          title: 'Fez – Midelt',
          content: 'Ruta hacia el sur a través de Ifrane y el bosque de cedros de Azrou para ver los macacos del Atlas. Llegada a Midelt entre el Medio y Alto Atlas para cenar y descansar.'
        },
        {
          day: 'Día 5',
          title: 'Midelt – Merzouga',
          content: 'Descenso por las gargantas del Ziz y el palmeral de Erfoud hasta Merzouga. Paseo en dromedario al atardecer sobre las dunas de Erg Chebbi y noche en campamento de lujo con cena bereber.'
        },
        {
          day: 'Día 6',
          title: 'Merzouga – Valle del Dades',
          content: 'Amanecer en las dunas y salida hacia el zoco de Rissani. Paseo por las impresionantes Gargantas del Todra y continuación hacia el Valle del Dades para pasar la noche.'
        },
        {
          day: 'Día 7',
          title: 'Valle del Dades – Ait Ben Haddou',
          content: 'Ruta de las Mil Kasbahs pasando por Kelaat M\'gouna y Ouarzazate. Visita a la histórica Kasbah de Ait Ben Haddou (Patrimonio UNESCO). Alojamiento en kasbah.'
        },
        {
          day: 'Día 8',
          title: 'Ait Ben Haddou – Imlil (Montañas del Atlas)',
          content: 'Cruce del puerto de Tizi n\'Tichka hacia el valle montañoso de Imlil, a los pies del monte Toubkal. Caminata panorámica por aldeas bereberes y descanso en un acogedor albergue de montaña.'
        },
        {
          day: 'Día 9',
          title: 'Imlil – Essaouira',
          content: 'Descenso desde el Atlas hacia la costa atlántica hasta la ciudad fortificada de Essaouira. Paseo por su medina marinera y murallas históricas con vistas al océano.'
        },
        {
          day: 'Día 10',
          title: 'Essaouira – Marrakech',
          content: 'Mañana libre en Essaouira para disfrutar del puerto de pescadores y cooperativas de argán. Por la tarde viaje a Marrakech y primer paseo por la plaza Jemaa el-Fna.'
        },
        {
          day: 'Día 11',
          title: 'Marrakech – Marrakech',
          content: 'Visita monumental guiada por Marrakech: Palacio de la Bahía, Tumbas Saadíes, Jardines Majorelle y zocos, concluyendo con cena especial de despedida.'
        },
        {
          day: 'Día 12',
          title: 'Fin del Itinerario de 12 Días por Marruecos',
          content: 'Desayuno en el riad y traslado organizado al aeropuerto de Marrakech o Casablanca para tu vuelo de regreso, culminando una expedición extraordinaria.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada",
          desc: "Mezquita Hassan II y ruta al Rif."
        },
        {
          number: 2,
          name: "Chefchaouen",
          day: "Día 2",
          subtitle: "La Perla Azul",
          desc: "Callejuelas pintadas de azul en el Rif."
        },
        {
          number: 3,
          name: "Fez",
          day: "Días 3 y 4",
          subtitle: "Medina Histórica",
          desc: "Volubilis y tour cultural completo."
        },
        {
          number: 4,
          name: "Midelt",
          day: "Día 5",
          subtitle: "Medio Atlas",
          desc: "Bosque de cedros y paso montañoso."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Día 6",
          subtitle: "Dunas Doradas",
          desc: "Dromedarios y campamento de lujo."
        },
        {
          number: 6,
          name: "Valle del Dades",
          day: "Día 7",
          subtitle: "Gargantas y Cañones",
          desc: "Gargantas del Todra y formaciones rocosas."
        },
        {
          number: 7,
          name: "Ait Ben Haddou",
          day: "Día 8",
          subtitle: "Kasbah UNESCO",
          desc: "Fortaleza histórica de barro y cine."
        },
        {
          number: 8,
          name: "Imlil",
          day: "Día 9",
          subtitle: "Parque Toubkal",
          desc: "Aldeas del Atlas y senderismo suave."
        },
        {
          number: 9,
          name: "Essaouira",
          day: "Día 10",
          subtitle: "Costa Atlántica",
          desc: "Murallas marítimas y puerto de pesca."
        },
        {
          number: 10,
          name: "Marrakech",
          day: "Días 11 y 12",
          subtitle: "Gran Final",
          desc: "Zocos, palacios y traslado de salida."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/thumbnail.jpg",
          cap: "Circuito Privado de 12 Días Casablanca, Sáhara y Marrakech",
          alt: "Circuito Privado de 12 Días Casablanca, Sáhara y Marrakech – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-01.jpg",
          cap: "Chefchaouen, callejones azules en el Rif",
          alt: "Calles azul índigo de Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-02.jpg",
          cap: "Medina medieval y madraza en Fez",
          alt: "Patio histórico decorado en Fez"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-03.jpg",
          cap: "Paseo en dromedario en Erg Chebbi",
          alt: "Dunas doradas y caravana al atardecer en Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-04.jpg",
          cap: "Gargantas del Todra y desfiladeros del Atlas",
          alt: "Acantilados verticales en las Gargantas del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-05.jpg",
          cap: "Kasbah fortificada de Ait Ben Haddou",
          alt: "Ksar de adobe de Ait Ben Haddou (UNESCO)"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-06.jpg",
          cap: "Murallas costeras de Essaouira y océano",
          alt: "Skala de Essaouira frente al Atlántico"
        }
      ],
      faqs: []
    },
    it: {
      slug: 'private-12-days-desert-marrakech',
      title: 'Tour Privato di 12 Giorni Casablanca, Sahara e Marrakech | Sahara Star Tours',
      shortTitle: 'Tour Privato di 12 Giorni Casablanca, Sahara e Marrakech',
      description: 'Viaggio esclusivo di 12 giorni in Marocco: Casablanca, Chefchaouen, Fes, Midelt, dune di Merzouga in campo di lusso, Todra, Imlil sull\'Atlante, Essaouira e Marrakech.',
      aboutHtml: 'Uno straordinario itinerario privato di 12 giorni che armonizza le Città Imperiali, il deserto del Sahara, le vette del Toubkal e la brezza dell\'Atlantico. Da Casablanca alla suggestiva Chefchaouen fino alla medina millenaria di Fes, attraverserai il Medio Atlante verso le sabbie dorate di Erg Chebbi per un soggiorno esclusivo in campo tendato di lusso. L\'itinerario prosegue attraverso le imponenti Gole del Todra, la Valle del Dades e la Kasbah di Ait Ben Haddou fino al villaggio montano di Imlil sull\'Alto Atlante, la medina marina di Essaouira e i souk di Marrakech.',
      duration: '12 Giorni / 11 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $1,550/persona',
      highlights: [
        'Immergiti nell\'atmosfera e nella cultura unica di Chefchaouen partendo da Casablanca',
        'Scopri il patrimonio millenario di Fes, una delle città medievali più antiche al mondo',
        'Viaggia da Midelt a Merzouga attraversando i palmeti suggestivi della Valle dello Ziz',
        'Vivi il comfort esclusivo di un campo tendato di lusso a Merzouga con cammellata al tramonto',
        'Esplora la vibrante città di Marrakech, celebre per la sua storia, i palazzi e i souk'
      ],
      inclusions: [
        'Visite guidate private nelle città e ingressi ai monumenti previsti',
        'Trasporto privato confortevole e climatizzato con autista professionale',
        'Trekking a dorso di dromedario e pernottamento in campo tendato di lusso a Merzouga',
        'Servizio di assistenza e accoglienza personalizzata in aeroporto',
        'Cena tipica a Marrakech con musica tradizionale e spettacolo folcloristico',
        'Trattamento di mezza pensione durante il viaggio secondo il programma',
        'Carburante e pedaggi autostradali inclusi',
        '11 prime colazioni e 5 cene nel deserto'
      ],
      exclusions: [
        'Tasse aeroportuali e voli aerei internazionali',
        'Pranzi non menzionati nel programma',
        'Bevande durante i pasti',
        'Voli di collegamento',
        'Mance e gratifiche a discrezione personale',
        'Assicurazione medica e di viaggio di emergenza',
        'Mance per guide e autista (facoltative)',
        'Tutto quanto non espressamente specificato nei servizi inclusi'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Casablanca – Chefchaouen',
          content: 'Accoglienza a Casablanca e visita alla Moschea Hassan II sull\'oceano. Partenza verso nord tra i monti del Rif fino a Chefchaouen. Pomeriggio libero nella Città Blu.'
        },
        {
          day: 'Giorno 2',
          title: 'Chefchaouen – Fes',
          content: 'Mattinata a Chefchaouen e partenza verso le rovine romane di Volubilis (UNESCO). Sosta a Meknes e arrivo pomeridiano a Fes per il pernottamento in riad.'
        },
        {
          day: 'Giorno 3',
          title: 'Fes – Fes',
          content: 'Tour guidato completo di Fes El Bali: Università Al Quaraouiyine, madrase, concerie Chouara, palazzo reale e botteghe d\'artigianato.'
        },
        {
          day: 'Giorno 4',
          title: 'Fes – Midelt',
          content: 'Ruta verso sud attraverso Ifrane e la foresta di cedri di Azrou con i macachi dell\'Atlante. Arrivo a Midelt tra il Medio e Alto Atlante per cena e pernottamento.'
        },
        {
          day: 'Giorno 5',
          title: 'Midelt – Merzouga',
          content: 'Discesa lungo le gole dello Ziz e i palmeti di Erfoud fino a Merzouga. Passeggiata sui dromedari al tramonto sulle dune di Erg Chebbi e notte in campo tendato di lusso.'
        },
        {
          day: 'Giorno 6',
          title: 'Merzouga – Valle del Dades',
          content: 'Alba nel deserto e visita al mercato storico di Rissani. Camminata tra le falesie imponenti del Todra e notte nella Valle del Dades.'
        },
        {
          day: 'Giorno 7',
          title: 'Valle del Dades – Ait Ben Haddou',
          content: 'Strada delle Mille Kasbah attraverso Kelaat M\'gouna e Ouarzazate. Visita al ksar di Ait Ben Haddou (UNESCO). Pernottamento in kasbah.'
        },
        {
          day: 'Giorno 8',
          title: 'Ait Ben Haddou – Imlil (Montagne dell\'Atlante)',
          content: 'Attraversamento del passo di Tizi n\'Tichka verso la vallata alpina di Imlil, ai piedi del Monte Toubkal. Passeggiata tra villaggi berberi e notte in rifugio di charme.'
        },
        {
          day: 'Giorno 9',
          title: 'Imlil – Essaouira',
          content: 'Discesa dall\'Atlante verso la costa atlantica a Essaouira. Passeggiata nella medina marinara e sui bastioni affacciati sulle onde dell\'oceano.'
        },
        {
          day: 'Giorno 10',
          title: 'Essaouira – Marrakech',
          content: 'Mattinata a Essaouira tra il porto dei pescatori e le botteghe del legno di tuia. Nel pomeriggio trasferimento a Marrakech e serata in piazza Jemaa el-Fna.'
        },
        {
          day: 'Giorno 11',
          title: 'Marrakech – Marrakech',
          content: 'Tour storico guidato a Marrakech: Palazzo Bahia, Tombe Saadiane, Giardini Majorelle e souk, con cena speciale conclusiva.'
        },
        {
          day: 'Giorno 12',
          title: 'Fine dell\'Itinerario di 12 Giorni in Marocco',
          content: 'Colazione in riad e trasferimento all\'aeroporto di Marrakech o Casablanca per il volo di rientro, a conclusione di una spedizione indimenticabile.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo",
          desc: "Moschea Hassan II e rotta per il Rif."
        },
        {
          number: 2,
          name: "Chefchaouen",
          day: "Giorno 2",
          subtitle: "La Perla Blu",
          desc: "I vicoli dipinti d'azzurro nel Rif."
        },
        {
          number: 3,
          name: "Fes",
          day: "Giorni 3 e 4",
          subtitle: "Medina Storica",
          desc: "Volubilis e tour culturale completo."
        },
        {
          number: 4,
          name: "Midelt",
          day: "Giorno 5",
          subtitle: "Medio Atlante",
          desc: "Foresta di cedri e passo montano."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorno 6",
          subtitle: "Dune Dorate",
          desc: "Dromedari e campo tendato di lusso."
        },
        {
          number: 6,
          name: "Valle del Dades",
          day: "Giorno 7",
          subtitle: "Gole e Canyon",
          desc: "Gole del Todra e formazioni rocciose."
        },
        {
          number: 7,
          name: "Ait Ben Haddou",
          day: "Giorno 8",
          subtitle: "Kasbah UNESCO",
          desc: "Fortezza storica in adobe e set di film."
        },
        {
          number: 8,
          name: "Imlil",
          day: "Giorno 9",
          subtitle: "Parco del Toubkal",
          desc: "Villaggi dell'Atlante e passeggiate."
        },
        {
          number: 9,
          name: "Essaouira",
          day: "Giorno 10",
          subtitle: "Costa Atlantica",
          desc: "Bastioni sul mare e porto peschereccio."
        },
        {
          number: 10,
          name: "Marrakech",
          day: "Giorni 11 e 12",
          subtitle: "Gran Finale",
          desc: "Souk, palazzi e trasferimento finale."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/thumbnail.jpg",
          cap: "Tour Privato di 12 Giorni Casablanca, Sahara e Marrakech",
          alt: "Tour Privato di 12 Giorni Casablanca, Sahara e Marrakech – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-01.jpg",
          cap: "Chefchaouen, vicoli blu nel Rif",
          alt: "Scorcio caratteristico dipinto di blu a Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-02.jpg",
          cap: "Medina medievale e madrasa a Fes",
          alt: "Cortile storico decorato nella medina di Fes"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-03.jpg",
          cap: "Passeggiata sui dromedari a Erg Chebbi",
          alt: "Dune dorate e carovana al tramonto a Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-04.jpg",
          cap: "Gole del Todra e falesie dell'Atlante",
          alt: "Pareti rocciose maestose nelle Gole del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-05.jpg",
          cap: "Kasbah fortificata di Ait Ben Haddou",
          alt: "Ksar in terra battuta di Ait Ben Haddou (UNESCO)"
        },
        {
          src: "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-06.jpg",
          cap: "Bastioni costieri di Essaouira e oceano",
          alt: "La Skala di Essaouira di fronte all'Atlantico"
        }
      ],
      faqs: []
    }
  },

  // Tour 11: 16-days-morocco-tour-from-casablanca
  {
    slug: '16-days-morocco-tour-from-casablanca',
    es: {
      slug: '16-days-morocco-tour-from-casablanca',
      title: 'Gran Gran Tour de 16 Días por Marruecos y el Desierto | Sahara Star Tours',
      shortTitle: 'Gran Tour de 16 Días por Marruecos',
      description: 'El circuito más completo de 16 días por Marruecos: Casablanca, Rabat, Tánger, Chefchaouen, Fez, dunas de Erg Chebbi, Todra, Dades, Ouarzazate, Marrakech, Essaouira y El Jadida.',
      aboutHtml: 'El Gran Tour de 16 Días por Marruecos y el Desierto es la experiencia más completa y enriquecedora que ofrecemos. Abarca las capitales económica y política (Casablanca y Rabat), las costas norteñas de Tánger, la magia azul de Chefchaouen en el Rif, la historia viva de Volubilis y Fez, y una inmersión inolvidable en las dunas doradas de Erg Chebbi con noche en campamento de lujo. Continúa por los desfiladeros del Todra, el Valle del Dades y la Kasbah de Ait Ben Haddou hasta Marrakech, concluyendo con el encanto marinero de Essaouira y la herencia portuguesa de El Jadida.',
      duration: '16 Días / 15 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $1,890/persona',
      highlights: [
        'Visita las grandes capitales de Marruecos: la capital económica Casablanca y la capital política Rabat',
        'Siente la magia de cruzar en dromedario las majestuosas dunas de Erg Chebbi en Merzouga',
        'Recorre el norte de Marruecos descubriendo el cosmopolitismo de Tánger y la Perla Azul de Chefchaouen',
        'Pasa la noche en el desierto disfrutando del campamento de lujo y el cielo estrellado del Sáhara',
        'Pasea por las Gargantas del Todra, visita kasbahs históricas y comparte con aldeas bereberes hospitalarias',
        'Déjate cautivar por la medina de Marrakech, sus aromas, colores, palacios y zocos de artesanos',
        'Completa tu viaje por la costa atlántica en Essaouira con su medina de la UNESCO y fortalezas de El Jadida'
      ],
      inclusions: [
        'Transporte privado con aire acondicionado durante los 16 días de viaje',
        'Chófer/guía profesional de habla española durante todo el itinerario',
        'Recogida y traslados de aeropuerto al inicio y fin del viaje',
        'Visitas con guías locales oficiales en las ciudades imperiales',
        'Paseo en dromedario al atardecer sobre las dunas de Merzouga',
        'Noche en campamento de lujo en el desierto con baño privado en suite',
        '15 noches de alojamiento en riads tradicionales y hoteles seleccionados',
        'Desayunos diarios y cenas especificadas en el itinerario'
      ],
      exclusions: [
        'Billetes de avión internacionales hacia y desde Marruecos',
        'Almuerzos diarios no especificados',
        'Bebidas durante las comidas',
        'Entradas a monumentos históricos y museos no incluidos',
        'Gratificaciones y propinas para guías y conductor',
        'Seguro médico y de viaje personal',
        'Propinas y gastos personales (opcionales)',
        'Cualquier concepto no detallado en la sección de incluidos'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Aeropuerto de Casablanca – Hotel en Casablanca',
          content: 'Llegada al aeropuerto internacional Mohammed V de Casablanca. Bienvenida y traslado al hotel con primera panorámica de la ciudad costera.'
        },
        {
          day: 'Día 2',
          title: 'Casablanca – Rabat',
          content: 'Visita matinal a la imponente Mezquita Hassan II sobre el océano Atlántico. Continuación hacia Rabat para admirar la Torre Hassan, el Mausoleo Real y la Kasbah de los Oudayas. Noche en riad.'
        },
        {
          day: 'Día 3',
          title: 'Rabat – Tánger',
          content: 'Viaje por la costa norte hacia Tánger. Visita al Cabo Espartel, punto de unión entre el Mediterráneo y el Atlántico, y a las legendarias Cuevas de Hércules. Noche en Tánger.'
        },
        {
          day: 'Día 4',
          title: 'Tánger – Chefchaouen',
          content: 'Ruta a través de los paisajes montañosos del Rif hacia Chefchaouen. Tarde libre para pasear por las fascinantes calles empedradas teñidas de azul añil. Alojamiento en riad.'
        },
        {
          day: 'Día 5',
          title: 'Chefchaouen – Volubilis – Meknes – Fez',
          content: 'Visita al yacimiento arqueológico romano de Volubilis (UNESCO) y sus mosaicos. Parada en la ciudad imperial de Meknes ante la puerta Bab El Mansour y llegada a Fez.'
        },
        {
          day: 'Día 6',
          title: 'Visita Guiada de la Ciudad de Fez',
          content: 'Jornada completa con guía oficial recorriendo Fez El Bali: Universidad Al Quaraouiyine, Madraza Bou Inania, curtidurías Chouara, barrio judío Mellah y vistas panorámicas.'
        },
        {
          day: 'Día 7',
          title: 'Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga',
          content: 'Travesía del Atlas pasando por Ifrane, los bosques de cedros de Azrou y los cañones del Ziz. Llegada a Merzouga al pie de las dunas de Erg Chebbi. Alojamiento con vistas.'
        },
        {
          day: 'Día 8',
          title: 'Desierto de Erg Chebbi y Acampada en el Sáhara',
          content: 'Recorrido en 4x4 por el desierto: música tradicional Gnawa en Khamlia, fósiles y oasis. Paseo en dromedario al atardecer y noche en campamento de lujo con cena bereber.'
        },
        {
          day: 'Día 9',
          title: 'Erg Chebbi – Gargantas del Todra – Valle del Dades',
          content: 'Amanecer en las dunas y salida hacia Tinghir. Caminata bajo las imponentes paredes verticales de las Gargantas del Todra y noche en el Valle del Dades.'
        },
        {
          day: 'Día 10',
          title: 'Boumalne Dades a Ouarzazate',
          content: 'Ruta por el Valle de las Rosas y los palmerales de Skoura hasta Ouarzazate, "el Hollywood de Marruecos", con visita a los estudios de cine y kasbahs históricas.'
        },
        {
          day: 'Día 11',
          title: 'Ouarzazate – Ait Ben Haddou – Marrakech',
          content: 'Visita al célebre ksar fortificado de Ait Ben Haddou (Patrimonio UNESCO). Cruce del Alto Atlas por el espectacular puerto de Tizi n\'Tichka (2.260 m) y llegada a Marrakech.'
        },
        {
          day: 'Día 12',
          title: 'Visita Guiada de Marrakech',
          content: 'Tour monumental por Marrakech: Palacio de la Bahía, Tumbas Saadíes, Koutoubia, zocos tradicionales y la efervescente plaza Jemaa el-Fna.'
        },
        {
          day: 'Día 13',
          title: 'Marrakech a Essaouira',
          content: 'Viaje a la costa atlántica hasta Essaouira. Tarde libre para pasear por su medina marinera declarada por la UNESCO y sus murallas frente al mar.'
        },
        {
          day: 'Día 14',
          title: 'Essaouira',
          content: 'Día relajado en Essaouira para disfrutar de su puerto pesquero, galerías de arte, playa y pescado fresco en los puestos típicos del puerto.'
        },
        {
          day: 'Día 15',
          title: 'Essaouira a El Jadida o Casablanca',
          content: 'Ruta costera hacia el norte pasando por Safi, famosa por su cerámica, y El Jadida para visitar su histórica cisterna portuguesa fortificada (UNESCO). Noche en Casablanca.'
        },
        {
          day: 'Día 16',
          title: 'El Jadida al Aeropuerto de Casablanca',
          content: 'Desayuno y traslado privado al aeropuerto internacional Mohammed V de Casablanca para tu vuelo de regreso, culminando el gran viaje por Marruecos.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada",
          desc: "Bienvenida y Mezquita Hassan II."
        },
        {
          number: 2,
          name: "Rabat",
          day: "Día 2",
          subtitle: "Capital",
          desc: "Torre Hassan y Kasbah de los Oudayas."
        },
        {
          number: 3,
          name: "Tánger",
          day: "Día 3",
          subtitle: "Estrecho de Gibraltar",
          desc: "Cabo Espartel y Cuevas de Hércules."
        },
        {
          number: 4,
          name: "Chefchaouen",
          day: "Día 4",
          subtitle: "La Ciudad Azul",
          desc: "Medina azul en las montañas del Rif."
        },
        {
          number: 5,
          name: "Fez",
          day: "Días 5 y 6",
          subtitle: "Medina Medieval",
          desc: "Volubilis y tour cultural completo."
        },
        {
          number: 6,
          name: "Merzouga Sáhara",
          day: "Días 7 y 8",
          subtitle: "Dunas Doradas",
          desc: "Erg Chebbi, dromedarios y campamento de lujo."
        },
        {
          number: 7,
          name: "Todra y Dades",
          day: "Día 9",
          subtitle: "Gargantas y Cañones",
          desc: "Desfiladeros de roca y Valle de las Rosas."
        },
        {
          number: 8,
          name: "Ouarzazate",
          day: "Día 10",
          subtitle: "Ciudad del Cine",
          desc: "Estudios Atlas y palmeral de Skoura."
        },
        {
          number: 9,
          name: "Ait Ben Haddou",
          day: "Día 11",
          subtitle: "UNESCO Kasbah",
          desc: "Fortaleza histórica y paso del Atlas."
        },
        {
          number: 10,
          name: "Marrakech",
          day: "Día 12",
          subtitle: "Ciudad Roja",
          desc: "Palacios, zocos y plaza Jemaa el-Fna."
        },
        {
          number: 11,
          name: "Essaouira",
          day: "Días 13 y 14",
          subtitle: "Costa Atlántica",
          desc: "Medina marina, puerto y murallas."
        },
        {
          number: 12,
          name: "El Jadida y Casablanca",
          day: "Días 15 y 16",
          subtitle: "Despedida",
          desc: "Cisterna portuguesa y traslado final."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/thumbnail.jpg",
          cap: "Gran Tour de 16 Días por Marruecos y el Desierto",
          alt: "Gran Tour de 16 Días por Marruecos y el Desierto – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-01.jpg",
          cap: "Tánger y vistas al estrecho de Gibraltar",
          alt: "Costa de Tánger y faro de Cabo Espartel"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-02.jpg",
          cap: "Chefchaouen, callejuelas azules del Rif",
          alt: "Fachadas y escalinatas teñidas de azul en Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-03.jpg",
          cap: "Curtidurías tradicionales de Fez",
          alt: "Pozos de tinte en la medina medieval de Fez"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-04.jpg",
          cap: "Caravana de dromedarios en las dunas de Merzouga",
          alt: "Dunas doradas de Erg Chebbi con dromedarios al atardecer"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-05.jpg",
          cap: "Desfiladero de las Gargantas del Todra",
          alt: "Paredes verticales de caliza en las Gargantas del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-06.jpg",
          cap: "Murallas de Essaouira frente al Atlántico",
          alt: "Fortaleza marina y cañones con vistas al océano en Essaouira"
        }
      ],
      faqs: []
    },
    it: {
      slug: '16-days-morocco-tour-from-casablanca',
      title: 'Gran Tour di 16 Giorni del Marocco e del Deserto | Sahara Star Tours',
      shortTitle: 'Gran Tour di 16 Giorni del Marocco',
      description: 'Il circuito più completo di 16 giorni in Marocco: Casablanca, Rabat, Tangeri, Chefchaouen, Fes, dune di Erg Chebbi, Todra, Dades, Ouarzazate, Marrakech, Essaouira ed El Jadida.',
      aboutHtml: 'Il Gran Tour di 16 Giorni del Marocco e del Deserto è il viaggio più completo e approfondito per vivere la vera essenza di questo Paese straordinario. Tocca le capitali economica e istituzionale (Casablanca e Rabat), la costa mediterranea di Tangeri, il borgo azzurro di Chefchaouen nel Rif, i capolavori di Volubilis e Fes, e un soggiorno esclusivo tra le dune dorate di Erg Chebbi in campo tendato di lusso. Prosegue attraverso le Gole del Todra, la Valle del Dades e la Kasbah di Ait Ben Haddou fino a Marrakech, per poi rilassarsi sulle coste atlantiche di Essaouira e tra le memorie portoghesi di El Jadida.',
      duration: '16 Giorni / 15 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $1,890/persona',
      highlights: [
        'Visita le grandi capitali del Marocco: la capitale economica Casablanca e la capitale istituzionale Rabat',
        'Vivi la magia del trekking in dromedario sulle maestose dune di Erg Chebbi a Merzouga',
        'Esplora il nord del Marocco tra il fascino cosmopolita di Tangeri e l\'incanto azzurro di Chefchaouen',
        'Pernotta nel cuore del deserto godendoti un campo tendato di lusso e la volta celeste del Sahara',
        'Passeggia nelle imponenti Gole del Todra, visita antiche kasbah e incontra villaggi berberi ospitali',
        'Perditi nel labirinto di Marrakech tra colori, profumi, palazzi storici e vivaci souk tradizionali',
        'Arricchisci il tuo viaggio lungo la costa atlantica a Essaouira (UNESCO) e nella storica El Jadida'
      ],
      inclusions: [
        'Trasporto privato climatizzato e confortevole per l\'intera durata dei 16 giorni',
        'Autista/guida professionale parlante italiano per tutto l\'itinerario',
        'Accoglienza e trasferimenti aeroportuali all\'inizio e alla fine del tour',
        'Visite con guide locali ufficiali autorizzate nelle città imperiali',
        'Passeggiata a dorso di dromedario al tramonto sulle dune di Merzouga',
        'Pernottamento in campo tendato di lusso nel deserto con bagno privato ensuite',
        '15 pernottamenti in riad tradizionali e hotel confortevoli selezionati',
        'Colazioni quotidiane e cene menzionate nel programma di viaggio'
      ],
      exclusions: [
        'Biglietti aerei internazionali da e per il Marocco',
        'Pranzi non menzionati nel programma',
        'Bevande durante i pasti',
        'Biglietti d\'ingresso a monumenti storici e musei non inclusi',
        'Mance e gratifiche a discrezione personale',
        'Assicurazione sanitaria e di viaggio personale',
        'Mance per guide e autista (facoltative)',
        'Tutto quanto non espressamente specificato nella sezione dei servizi inclusi'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Aeroporto di Casablanca – Hotel a Casablanca',
          content: 'Arrivo all\'aeroporto Mohammed V di Casablanca. Accoglienza e trasferimento in hotel con prima panoramica della città.'
        },
        {
          day: 'Giorno 2',
          title: 'Casablanca – Rabat',
          content: 'Visita alla grandiosa Moschea Hassan II sull\'Atlantico. Partenza verso la capitale Rabat per ammirare la Torre Hassan, il Mausoleo Reale e la Kasbah degli Oudaïa. Notte in riad.'
        },
        {
          day: 'Giorno 3',
          title: 'Rabat – Tangeri',
          content: 'Viaggio lungo la costa verso Tangeri. Visita a Capo Spartel, punto d\'incontro tra Mediterraneo e Atlantico, e alle Grotte di Ercole. Notte a Tangeri.'
        },
        {
          day: 'Giorno 4',
          title: 'Tangeri – Chefchaouen',
          content: 'Percorso tra i monti del Rif in direzione di Chefchaouen. Pomeriggio libero per perdersi tra le affascinanti viuzze color indaco. Pernottamento in riad.'
        },
        {
          day: 'Giorno 5',
          title: 'Chefchaouen – Volubilis – Meknes – Fes',
          content: 'Visita al sito archeologico romano di Volubilis (UNESCO) e ai suoi mosaici. Sosta a Meknes davanti a Bab El Mansour e arrivo serale a Fes.'
        },
        {
          day: 'Giorno 6',
          title: 'Tour Guidato Storico di Fes',
          content: 'Intera giornata con guida locale a Fes El Bali: Università Al Quaraouiyine, Medersa Bou Inania, concerie Chouara, quartiere ebraico Mellah e belvedere.'
        },
        {
          day: 'Giorno 7',
          title: 'Fes – Ifrane – Foresta dei Cedri – Midelt – Valle dello Ziz – Merzouga',
          content: 'Traversata dell\'Atlante con soste a Ifrane, nei boschi di cedri di Azrou e tra le gole dello Ziz. Arrivo a Merzouga ai piedi di Erg Chebbi.'
        },
        {
          day: 'Giorno 8',
          title: 'Deserto di Erg Chebbi e Notte in Campo Tendato',
          content: 'Tour in 4x4 nel deserto, musica spirituale Gnawa a Khamlia e famiglie nomadi. Cammellata al tramonto e notte magica in campo tendato di lusso con cena tipica.'
        },
        {
          day: 'Giorno 9',
          title: 'Erg Chebbi – Gole del Todra – Valle del Dades',
          content: 'Alba dorata sulle dune e partenza per Tinghir. Passeggiata sotto le pareti a strapiombo delle Gole del Todra e pernottamento nella Valle del Dades.'
        },
        {
          day: 'Giorno 10',
          title: 'Da Boumalne Dades a Ouarzazate',
          content: 'Strada delle Mille Kasbah attraverso la Valle delle Rose e i palmeti di Skoura fino a Ouarzazate, con visita agli studi cinematografici e alle kasbah.'
        },
        {
          day: 'Giorno 11',
          title: 'Ouarzazate – Ait Ben Haddou – Marrakech',
          content: 'Visita allo spettacolare ksar fortificato di Ait Ben Haddou (Patrimonio UNESCO). Valico dell\'Alto Atlante a Tizi n\'Tichka (2.260 m) e arrivo a Marrakech.'
        },
        {
          day: 'Giorno 12',
          title: 'Tour Guidato di Marrakech',
          content: 'Visita guidata ai palazzi di Marrakech: Palazzo Bahia, Tombe Saadiane, Koutoubia, souk degli artigiani e piazza Jemaa el-Fna.'
        },
        {
          day: 'Giorno 13',
          title: 'Da Marrakech a Essaouira',
          content: 'Viaggio verso la costa atlantica a Essaouira. Pomeriggio a disposizione per scoprire la medina marinara dell\'UNESCO e le mura sull\'oceano.'
        },
        {
          day: 'Giorno 14',
          title: 'Essaouira',
          content: 'Giornata di relax a Essaouira tra il porto peschereccio, le gallerie d\'arte, la spiaggia e le caratteristiche botteghe del legno.'
        },
        {
          day: 'Giorno 15',
          title: 'Da Essaouira a El Jadida o Casablanca',
          content: 'Itinerario costiero verso nord con soste a Safi e nella cittadella fortificata di El Jadida con la sua cisterna portoghese (UNESCO). Notte a Casablanca.'
        },
        {
          day: 'Giorno 16',
          title: 'Da El Jadida all\'Aeroporto di Casablanca',
          content: 'Colazione e trasferimento privato all\'aeroporto Mohammed V di Casablanca in tempo utile per il volo di rientro, a conclusione di un grande viaggio.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo",
          desc: "Accoglienza e Moschea Hassan II."
        },
        {
          number: 2,
          name: "Rabat",
          day: "Giorno 2",
          subtitle: "Capitale",
          desc: "Torre Hassan e Kasbah degli Oudaïa."
        },
        {
          number: 3,
          name: "Tangeri",
          day: "Giorno 3",
          subtitle: "Stretto di Gibilterra",
          desc: "Capo Spartel e Grotte di Ercole."
        },
        {
          number: 4,
          name: "Chefchaouen",
          day: "Giorno 4",
          subtitle: "La Città Blu",
          desc: "Medina azzurra tra le cime del Rif."
        },
        {
          number: 5,
          name: "Fes",
          day: "Giorni 5 e 6",
          subtitle: "Medina Medievale",
          desc: "Volubilis e tour culturale completo."
        },
        {
          number: 6,
          name: "Merzouga Sahara",
          day: "Giorni 7 e 8",
          subtitle: "Dune Dorate",
          desc: "Erg Chebbi, dromedari e campo di lusso."
        },
        {
          number: 7,
          name: "Todra e Dades",
          day: "Giorno 9",
          subtitle: "Gole e Canyon",
          desc: "Falesie rocciose e Valle delle Rose."
        },
        {
          number: 8,
          name: "Ouarzazate",
          day: "Giorno 10",
          subtitle: "Città del Cinema",
          desc: "Studi cinematografici e palmeti di Skoura."
        },
        {
          number: 9,
          name: "Ait Ben Haddou",
          day: "Giorno 11",
          subtitle: "Kasbah UNESCO",
          desc: "Fortezza storica e valico dell'Atlante."
        },
        {
          number: 10,
          name: "Marrakech",
          day: "Giorno 12",
          subtitle: "Città Rossa",
          desc: "Palazzi, souk e piazza Jemaa el-Fna."
        },
        {
          number: 11,
          name: "Essaouira",
          day: "Giorni 13 e 14",
          subtitle: "Costa Atlantica",
          desc: "Medina marina, porto e bastioni storici."
        },
        {
          number: 12,
          name: "El Jadida e Casablanca",
          day: "Giorni 15 e 16",
          subtitle: "Partenza",
          desc: "Cisterna portoghese e transfer finale."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/thumbnail.jpg",
          cap: "Gran Tour di 16 Giorni del Marocco e del Deserto",
          alt: "Gran Tour di 16 Giorni del Marocco e del Deserto – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-01.jpg",
          cap: "Tangeri e veduta sullo stretto di Gibilterra",
          alt: "Costa di Tangeri e faro di Capo Spartel"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-02.jpg",
          cap: "Chefchaouen, vicoli azzurri del Rif",
          alt: "Scorci e gradinate dipinte di blu a Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-03.jpg",
          cap: "Concerie tradizionali di Fes",
          alt: "Vasche di tintura nella medina medievale di Fes"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-04.jpg",
          cap: "Carovana di dromedari tra le dune di Merzouga",
          alt: "Dune dorate di Erg Chebbi con dromedari al tramonto"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-05.jpg",
          cap: "Canyon roccioso delle Gole del Todra",
          alt: "Pareti verticali di roccia calcarea nelle Gole del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-06.jpg",
          cap: "Bastioni di Essaouira affacciati sull'Atlantico",
          alt: "Fortezza marinara e cannoni storici a Essaouira"
        }
      ],
      faqs: []
    }
  }
];

for (const item of toursBatch) {
  fs.writeFileSync(path.resolve(`src/data/locales/es/tours/${item.slug}.json`), JSON.stringify(item.es, null, 2), 'utf-8');
  fs.writeFileSync(path.resolve(`src/data/locales/it/tours/${item.slug}.json`), JSON.stringify(item.it, null, 2), 'utf-8');
  console.log(`Saved tour ${item.slug} in ES and IT!`);
}
