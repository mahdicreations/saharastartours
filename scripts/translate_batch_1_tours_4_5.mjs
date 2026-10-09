import fs from 'node:fs';
import path from 'node:path';

const toursBatch = [
  // Tour 4: 9-day-authentic-morocco-tour
  {
    slug: '9-day-authentic-morocco-tour',
    es: {
      slug: '9-day-authentic-morocco-tour',
      title: 'Circuito de 9 Días Marruecos Auténtico y Odisea en el Desierto | Sahara Star Tours',
      shortTitle: 'Circuito de 9 Días Marruecos Auténtico',
      description: 'Viaje privado de 9 días por Marruecos: Marrakech, Ouarzazate, dunas de Merzouga en jaima de lujo, medina de Fez, Chefchaouen y Casablanca.',
      aboutHtml: 'Vive una auténtica odisea marroquí de 9 días descubriendo la cautivadora mezcla de ciudades imperiales, cordilleras imponentes y dunas doradas del Sáhara. Partiendo de Marrakech, cruzarás el Alto Atlas hacia Ouarzazate y el ksar de Ait Ben Haddou, antes de adentrarte en el desierto de Merzouga para una noche mágica bajo las estrellas. El viaje prosigue hacia el corazón cultural de Fez, las relajantes callejuelas azules de Chefchaouen en las montañas del Rif y concluye junto a las olas del Atlántico en Casablanca.',
      duration: '9 Días / 8 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $1,090/persona',
      highlights: [
        'Marrakech: Palacio de la Bahía, Mezquita Koutoubia y la animada plaza Jemaa el-Fna',
        'Ouarzazate: La puerta del desierto y la histórica Kasbah de Ait Ben Haddou (UNESCO)',
        'Merzouga: Paseo en dromedario al atardecer y noche en campamento de lujo en Erg Chebbi',
        'Valle del Ziz: Exuberantes palmerales y cañones entre el Atlas y el desierto',
        'Fez: Medina medieval de Fes El Bali, Mezquita Al Quaraouiyine y tradicionales curtidurías',
        'Chefchaouen: La icónica Perla Azul con sus callejuelas y arquitectura de montaña',
        'Rabat: Monumentos de la capital, Torre Hassan y la histórica Kasbah de los Oudayas',
        'Casablanca: La moderna metrópoli y la grandiosa Mezquita Hassan II junto al mar'
      ],
      inclusions: [
        'Visitas guiadas en ciudades con guías locales oficiales y entradas a monumentos',
        'Transporte privado confortable y climatizado con chófer profesional',
        'Paseo en dromedario y noche en campamento de lujo en el desierto de Merzouga',
        'Servicio de bienvenida y asistencia en traslados de llegada y salida',
        'Cena tradicional en Marrakech con espectáculo de música y danza local',
        'Régimen de media pensión durante el recorrido según el itinerario',
        'Combustible y peajes de carretera incluidos',
        '8 desayunos y 3 cenas en el desierto'
      ],
      exclusions: [
        'Tasas aéreas y billetes de avión internacionales',
        'Almuerzos diarios no especificados',
        'Bebidas durante las comidas',
        'Vuelos internacionales de conexión',
        'Gratificaciones y propinas voluntarias',
        'Seguro médico y de viaje personal',
        'Propinas para guías y chóferes (opcionales)',
        'Cualquier concepto no indicado expresamente en el apartado de incluidos'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Llegada a Marrakech',
          content: '¡Bienvenido a Marruecos! A tu llegada al aeropuerto de Marrakech Menara, nuestro equipo te recibirá cálidamente y te trasladará a tu riad u hotel. Tiempo libre para un primer contacto con el ambiente de la plaza Jemaa el-Fna o descansar. Alojamiento en Marrakech.'
        },
        {
          day: 'Día 2',
          title: 'Visita Cultural de Marrakech',
          content: 'Dedicaremos el día a explorar los mayores monumentos de Marrakech: la Mezquita Koutoubia, los artesonados del Palacio de la Bahía y los zocos llenos de color. Por la tarde pasearemos por los tranquilos Jardines Majorelle antes de disfrutar del atardecer. Alojamiento en Marrakech.'
        },
        {
          day: 'Día 3',
          title: 'Marrakech a Ouarzazate',
          content: 'Salida hacia Ouarzazate cruzando las impresionantes cumbres del Alto Atlas por el puerto de Tizi n\'Tichka. Parada en el ksar fortificado de Ait Ben Haddou, declarado Patrimonio de la Humanidad por la UNESCO. Continuación a Ouarzazate para visitar los estudios de cine y descansar en el hotel.'
        },
        {
          day: 'Día 4',
          title: 'Ouarzazate a Merzouga',
          content: 'Ruta panorámica hacia Merzouga cruzando el palmeral del Valle del Draa y aldeas bereberes tradicionales. Al llegar a las dunas de Erg Chebbi, montarás en dromedario para contemplar la puesta de sol dorada antes de llegar al campamento de lujo para cenar junto a la hoguera.'
        },
        {
          day: 'Día 5',
          title: 'Merzouga a Fez',
          content: 'Amanecer sobre las dunas y regreso en dromedario. Tras desayunar, partiremos rumbo a Fez cruzando los cañones del Valle del Ziz y el Medio Atlas con sus bosques de cedros en Azrou. Llegada a Fez y alojamiento en un riad tradicional de la medina.'
        },
        {
          day: 'Día 6',
          title: 'Visita Guiada de Fez',
          content: 'Recorrido histórico por la medina de Fes El Bali: Universidad Al Quaraouiyine, Madraza Bou Inania, las ancestrales curtidurías Chouara y los talleres artesanales. Tarde libre para disfrutar de la atmósfera medieval de la ciudad. Alojamiento en Fez.'
        },
        {
          day: 'Día 7',
          title: 'Fez a Chefchaouen',
          content: 'Viaje hacia el norte rumbo a Chefchaouen, en las montañas del Rif. Día completo para perderse entre sus pintorescas calles empedradas teñidas de azul añil, descubrir tiendas de artesanía local y contemplar las vistas desde la colina. Noche en Chefchaouen.'
        },
        {
          day: 'Día 8',
          title: 'Chefchaouen a Casablanca',
          content: 'Traslado a la metrópoli costera de Casablanca. Visita exterior e interior de la majestuosa Mezquita Hassan II sobre el océano, paseo por la Corniche y cena de despedida en un restaurante local. Alojamiento en Casablanca.'
        },
        {
          day: 'Día 9',
          title: 'Salida de Casablanca',
          content: 'Desayuno en el hotel y traslado al aeropuerto internacional Mohammed V de Casablanca para tu vuelo de regreso, concluyendo una experiencia inolvidable por Marruecos.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada",
          desc: "Mezquita Hassan II y traslados de llegada."
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
          name: "Chefchaouen",
          day: "Día 3",
          subtitle: "Medina Azul",
          desc: "Callejuelas panorámicas en las montañas del Rif."
        },
        {
          number: 4,
          name: "Fez",
          day: "Días 4 y 5",
          subtitle: "Ciudad Patrimonio UNESCO",
          desc: "Visita cultural guiada completa."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Día 6",
          subtitle: "Dunas Doradas",
          desc: "Paseo en dromedario y campamento en el desierto."
        },
        {
          number: 6,
          name: "Todra y Dades",
          day: "Día 7",
          subtitle: "Cañones",
          desc: "Desfiladeros de roca de 300 metros."
        },
        {
          number: 7,
          name: "Ouarzazate",
          day: "Día 8",
          subtitle: "Ait Ben Haddou",
          desc: "Antigua fortaleza de arcilla de la UNESCO."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Día 9",
          subtitle: "Final en la Ciudad Roja",
          desc: "Jardines Majorelle y plaza Jemaa el-Fna."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/thumbnail.jpg",
          cap: "Circuito de 9 Días Marruecos Auténtico",
          alt: "Circuito de 9 Días Marruecos Auténtico – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-01.jpg",
          cap: "Medina de Marrakech y zocos tradicionales",
          alt: "Puestos de especias y linternas artesanales en los zocos de Marrakech"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-02.jpg",
          cap: "Kasbah fortificada de Ait Ben Haddou",
          alt: "Arquitectura tradicional de adobe en Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-03.jpg",
          cap: "Paseo en dromedario por las dunas de Merzouga",
          alt: "Caravana de dromedarios cruzando el desierto de Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-04.jpg",
          cap: "Campamento bereber de lujo en el Sáhara",
          alt: "Jaimas de lujo iluminadas bajo el cielo estrellado del desierto"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-05.jpg",
          cap: "Curtidurías tradicionales de Chouara en Fez",
          alt: "Pozos de tinte medievales de las curtidurías de Fez"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-06.jpg",
          cap: "Callejones pintados de azul en Chefchaouen",
          alt: "Escaleras y fachadas azules en la medina de Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-07.jpg",
          cap: "Mezquita Hassan II en la costa de Casablanca",
          alt: "Minarete y arquitectura exterior de la Mezquita Hassan II"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-08.jpg",
          cap: "Valle del Ziz y palmerales del sur",
          alt: "Oasis verde y palmeral en el cañón del Valle del Ziz"
        }
      ],
      faqs: []
    },
    it: {
      slug: '9-day-authentic-morocco-tour',
      title: 'Tour di 9 Giorni Marocco Autentico e Odissea nel Deserto | Sahara Star Tours',
      shortTitle: 'Tour di 9 Giorni Marocco Autentico',
      description: 'Viaggio privato di 9 giorni in Marocco: Marrakech, Ouarzazate, dune di Merzouga in campo di lusso, medina di Fes, Chefchaouen e Casablanca.',
      aboutHtml: 'Vivi un\'autentica odissea di 9 giorni alla scoperta delle meraviglie del Marocco tra città imperiali, rilievi montuosi e le dune dorate del Sahara. Partendo da Marrakech, supererai l\'Alto Atlante verso Ouarzazate e la Kasbah di Ait Ben Haddou, prima di inoltrarti nel deserto di Merzouga per una notte sotto le stelle. Il percorso prosegue verso il cuore culturale di Fes, i vicoli azzurri di Chefchaouen tra i monti del Rif e si conclude sulle rive dell\'Atlantico a Casablanca.',
      duration: '9 Giorni / 8 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $1,090/persona',
      highlights: [
        'Marrakech: Palazzo Bahia, Moschea Koutoubia e la celebre piazza Jemaa el-Fna',
        'Ouarzazate: La porta del deserto e la storica Kasbah di Ait Ben Haddou (UNESCO)',
        'Merzouga: Cammellata al tramonto e pernottamento in campo tendato a Erg Chebbi',
        'Valle dello Ziz: Oasi rigogliose di palme e gole suggestive tra Atlante e deserto',
        'Fes: Medina medievale di Fes El Bali, Università Al Quaraouiyine e concerie Chouara',
        'Chefchaouen: L\'inconfondibile Perla Blu con la sua architettura montana rilassante',
        'Rabat: Monumenti della capitale, Torre Hassan e la Kasbah degli Oudaïa',
        'Casablanca: La metropoli moderna e la maestosa Moschea Hassan II sull\'oceano'
      ],
      inclusions: [
        'Visite guidate delle città con guide locali autorizzate e ingressi inclusi',
        'Trasporto privato confortevole e climatizzato con autista professionale',
        'Trekking a dorso di dromedario e pernottamento in campo tendato di lusso a Merzouga',
        'Servizio di accoglienza e assistenza per i trasferimenti aeroportuali',
        'Cena tipica a Marrakech con spettacolo di musica tradizionale e danze locali',
        'Trattamento di mezza pensione durante il circuito come indicato da programma',
        'Carburante e pedaggi autostradali inclusi',
        '8 prime colazioni e 3 cene nel deserto'
      ],
      exclusions: [
        'Tasse aeroportuali e voli internazionali',
        'Pranzi non menzionati nel programma',
        'Bevande durante i pasti',
        'Voli di collegamento',
        'Mance e gratifiche a discrezione personale',
        'Assicurazione sanitaria e di viaggio personale',
        'Mance per guide e autisti (facoltative)',
        'Tutto quanto non espressamente indicato nella sezione dei servizi inclusi'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Marrakech',
          content: 'Benvenuto in Marocco! Al tuo arrivo all\'aeroporto di Marrakech Menara sarai accolto dal nostro team e accompagnato in hotel o riad. Tempo a disposizione per immergerti nell\'atmosfera serale di piazza Jemaa el-Fna o riposare. Pernottamento a Marrakech.'
        },
        {
          day: 'Giorno 2',
          title: 'Visita Culturale di Marrakech',
          content: 'Giornata dedicata alla scoperta dei capolavori di Marrakech: la Koutoubia, le sale decorate del Palazzo Bahia e i vivaci souk della medina. Nel pomeriggio visita rilassante ai Giardini Majorelle prima del tramonto. Pernottamento a Marrakech.'
        },
        {
          day: 'Giorno 3',
          title: 'Da Marrakech a Ouarzazate',
          content: 'Partenza verso Ouarzazate superando le vette dell\'Alto Atlante attraverso il valico di Tizi n\'Tichka. Sosta all\'iconico ksar fortificato di Ait Ben Haddou (Patrimonio UNESCO). Arrivo a Ouarzazate e sistemazione in hotel.'
        },
        {
          day: 'Giorno 4',
          title: 'Da Ouarzazate a Merzouga',
          content: 'Percorso panoramico verso Merzouga passando per i palmeti della Valle del Draa e i tipici villaggi berberi. Alle pendici di Erg Chebbi monterai a dorso di dromedario per assistere al tramonto sulle dune prima della cena al campo tendato sotto le stelle.'
        },
        {
          day: 'Giorno 5',
          title: 'Da Merzouga a Fes',
          content: 'Alba spettacolare tra le sabbie dorate e colazione al campo. Rientro in dromedario e partenza per Fes attraversando le gole dello Ziz e i boschi di cedri del Medio Atlante ad Azrou. Arrivo serale a Fes e sistemazione in riad.'
        },
        {
          day: 'Giorno 6',
          title: 'Tour Guidato di Fes',
          content: 'Intera giornata nella medina di Fes El Bali: Università Al Quaraouiyine, Medersa Bou Inania, le storiche concerie Chouara e i quartieri degli artigiani. Pomeriggio tra i vicoli medievali e cena in ristorante tradizionale. Pernottamento a Fes.'
        },
        {
          day: 'Giorno 7',
          title: 'Da Fes a Chefchaouen',
          content: 'Viaggio verso nord alla volta di Chefchaouen, sui monti del Rif. Giornata dedicata alla scoperta dei vicoli dipinti d\'azzurro, delle piazzette caratteristiche e delle botteghe d\'artigianato locale. Notte a Chefchaouen.'
        },
        {
          day: 'Giorno 8',
          title: 'Da Chefchaouen a Casablanca',
          content: 'Trasferimento alla vivace Casablanca. Visita alla splendida Moschea Hassan II affacciata sulle onde dell\'Atlantico, passeggiata sulla Corniche e cena conclusiva in ristorante locale. Pernottamento a Casablanca.'
        },
        {
          day: 'Giorno 9',
          title: 'Partenza da Casablanca',
          content: 'Prima colazione e trasferimento all\'aeroporto Mohammed V di Casablanca in tempo utile per il volo di rientro, portando con te splendidi ricordi dell\'avventura marocchina.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo",
          desc: "Moschea Hassan II e trasferimenti d'arrivo."
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
          name: "Chefchaouen",
          day: "Giorno 3",
          subtitle: "Medina Blu",
          desc: "Vicoli suggestivi tra le montagne del Rif."
        },
        {
          number: 4,
          name: "Fes",
          day: "Giorni 4 e 5",
          subtitle: "Città Patrimonio UNESCO",
          desc: "Tour culturale guidato completo."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorno 6",
          subtitle: "Dune Dorate",
          desc: "Passeggiata in dromedario e campo tendato nel deserto."
        },
        {
          number: 6,
          name: "Todra e Dades",
          day: "Giorno 7",
          subtitle: "Canyon",
          desc: "Falesie rocciose spettacolari alte 300 metri."
        },
        {
          number: 7,
          name: "Ouarzazate",
          day: "Giorno 8",
          subtitle: "Ait Ben Haddou",
          desc: "Antica fortezza berbera in terra cruda dell'UNESCO."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Giorno 9",
          subtitle: "Finale nella Città Rossa",
          desc: "Giardini Majorelle e piazza Jemaa el-Fna."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/thumbnail.jpg",
          cap: "Tour di 9 Giorni Marocco Autentico",
          alt: "Tour di 9 Giorni Marocco Autentico – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-01.jpg",
          cap: "Medina di Marrakech e souk tradizionali",
          alt: "Banchi di spezie e lanterne artigianali nei souk di Marrakech"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-02.jpg",
          cap: "Kasbah fortificata di Ait Ben Haddou",
          alt: "Architettura tradizionale in terra cruda ad Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-03.jpg",
          cap: "Cammellata tra le dune di Merzouga",
          alt: "Carovana di dromedari che attraversa le sabbie di Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-04.jpg",
          cap: "Campo tendato berbero di lusso nel Sahara",
          alt: "Tende illuminate sotto il cielo stellato del deserto"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-05.jpg",
          cap: "Storiche concerie di Chouara a Fes",
          alt: "Antiche vasche di tintura delle pelli a Fes El Bali"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-06.jpg",
          cap: "Vicoli dipinti di azzurro a Chefchaouen",
          alt: "Scorci e gradinate blu nella medina di Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-07.jpg",
          cap: "Moschea Hassan II sulla costa di Casablanca",
          alt: "Minareto e dettagli architettonici della Moschea Hassan II"
        },
        {
          src: "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-08.jpg",
          cap: "Valle dello Ziz e palmeti del sud",
          alt: "Oasi verdeggiante e palmeto nel canyon dello Ziz"
        }
      ],
      faqs: []
    }
  },

  // Tour 5: 9-days-desert-imperial-cities
  {
    slug: '9-days-desert-imperial-cities',
    es: {
      slug: '9-days-desert-imperial-cities',
      title: 'Circuito de 9 Días Dunas del Desierto y Ciudades Imperiales | Sahara Star Tours',
      shortTitle: 'Circuito de 9 Días Dunas y Ciudades Imperiales',
      description: 'Viaje privado de 9 días desde Casablanca: Rabat, Chefchaouen, Volubilis, Fez, dunas de Erg Chebbi con noche en campamento de lujo, cañones del Dades y Marrakech.',
      aboutHtml: 'Un fascinante viaje privado de 9 días diseñado para descubrir las legendarias Ciudades Imperiales y los contrastes naturales de Marruecos. Desde la moderna Casablanca y la capital Rabat, viajarás a las montañas del Rif para contemplar el azul sereno de Chefchaouen. Explora las ruinas romanas de Volubilis y los secretos artesanales de Fez antes de cruzar el Atlas hacia el mar de dunas doradas de Erg Chebbi. Duerme en un campamento de lujo bajo el cielo estrellado del Sáhara y sigue la ruta de las Mil Kasbahs pasando por los cañones del Todra y Ait Ben Haddou hasta Marrakech.',
      duration: '9 Días / 8 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $1,150/persona',
      highlights: [
        'Casablanca y Rabat: Mezquita Hassan II, Torre Hassan y Kasbah de los Oudayas',
        'Chefchaouen: La pintoresca Perla Azul en las montañas del Rif',
        'Volubilis y Meknes: Yacimiento romano de la UNESCO y puerta Bab El Mansour',
        'Fez: Visita guiada completa por la medina medieval de Fes El Bali',
        'Erg Chebbi: Paseo en dromedario y estancia en campamento de lujo en Merzouga',
        'Gargantas del Todra y formaciones rocosas del Valle del Dades',
        'Ait Ben Haddou y Marrakech: Fortaleza cinematográfica y bulliciosa plaza Jemaa el-Fna'
      ],
      inclusions: [
        'Vehículo privado moderno y climatizado (4x4 o minivan) con combustible incluido',
        'Chófer/guía profesional de habla española durante todo el viaje',
        'Recogida en Casablanca y traslados de salida al final del circuito',
        'Guía local oficial para la visita guiada histórica en Fez',
        'Guía local oficial para el recorrido monumental en Marrakech',
        'Paseo en dromedario al atardecer sobre las dunas de Merzouga',
        '1 noche en campamento de lujo en el desierto con tienda privada y baño ensuite',
        '8 noches en hoteles confortables y riads tradicionales con encanto'
      ],
      exclusions: [
        'Vuelos internacionales de entrada y salida',
        'Almuerzos diarios y bebidas',
        'Entradas a monumentos históricos y museos',
        'Actividades complementarias no detalladas en el itinerario',
        'Propinas para guías y conductor',
        'Seguro personal de viaje',
        'Gastos personales y compras',
        'Cualquier servicio no especificado en el apartado de incluidos'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Casablanca – Rabat',
          content: 'Llegada a Casablanca y visita a la majestuosa Mezquita Hassan II sobre el océano. Continuación hacia la capital, Rabat, para descubrir la Torre Hassan y la Kasbah de los Oudayas. Alojamiento en riad.'
        },
        {
          day: 'Día 2',
          title: 'Rabat – Chefchaouen',
          content: 'Viaje rumbo al norte adentrándonos en el Rif hasta Chefchaouen. Tarde libre para pasear por las cautivadoras callejuelas teñidas de azul añil y relajarse en la plaza central. Alojamiento en Chefchaouen.'
        },
        {
          day: 'Día 3',
          title: 'Chefchaouen – Volubilis – Meknes – Fez',
          content: 'Salida hacia Volubilis para contemplar los impresionantes mosaicos romanos. Parada en Meknes ante la majestuosa puerta Bab El Mansour y traslado por la tarde a la ciudad espiritual de Fez.'
        },
        {
          day: 'Día 4',
          title: 'Visita Guiada de Fez',
          content: 'Jornada completa con guía oficial recorriendo Fez El Bali: Universidad Al Quaraouiyine, Madraza Bou Inania, curtidurías Chouara, barrio judío Mellah y vista panorámica de la medina. Noche en Fez.'
        },
        {
          day: 'Día 5',
          title: 'Fez – Azrou – Midelt – Valle del Ziz – Merzouga',
          content: 'Travesía hacia el sur cruzando el Medio Atlas y el bosque de cedros de Azrou. Descenso por las gargantas del Ziz hasta Merzouga, donde montarás en dromedario hacia el campamento de lujo en las dunas de Erg Chebbi para cenar bajo las estrellas.'
        },
        {
          day: 'Día 6',
          title: 'Merzouga – Gargantas del Todra – Gargantas del Dades',
          content: 'Amanecer en el desierto y desayuno. Viaje hacia Tinghir para caminar bajo los imponentes acantilados del Todra y continuación por la carretera de las Mil Kasbahs hasta el Valle del Dades para pasar la noche.'
        },
        {
          day: 'Día 7',
          title: 'Valle del Dades – Ait Ben Haddou – Marrakech',
          content: 'Recorrido por el Valle de las Rosas y visita a la célebre Kasbah de Ait Ben Haddou (UNESCO). Cruce de las altas cumbres del Atlas por el puerto de Tizi n\'Tichka (2.260 m) hasta llegar a Marrakech.'
        },
        {
          day: 'Día 8',
          title: 'Visita Guiada de Marrakech',
          content: 'Recorrido matinal guiado por la mezquita Koutoubia, el Palacio de la Bahía, las Tumbas Saadíes y los zocos. Por la tarde visita a los Jardines Majorelle y paseo nocturno por la animada plaza Jemaa el-Fna.'
        },
        {
          day: 'Día 9',
          title: 'Fin del Circuito de 9 Días por Marruecos',
          content: 'Desayuno en el riad y traslado organizado al aeropuerto para tu vuelo de regreso, culminando una experiencia inolvidable.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada",
          desc: "Mezquita Hassan II y traslado costero."
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
          name: "Chefchaouen",
          day: "Día 3",
          subtitle: "Medina Azul",
          desc: "Callejuelas del Rif en la Perla Azul."
        },
        {
          number: 4,
          name: "Fez",
          day: "Días 4 y 5",
          subtitle: "Ciudad UNESCO",
          desc: "Visita guiada histórica completa."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Día 6",
          subtitle: "Dunas Doradas",
          desc: "Dromedarios y campamento en Erg Chebbi."
        },
        {
          number: 6,
          name: "Todra y Dades",
          day: "Día 7",
          subtitle: "Cañones",
          desc: "Gargantas del Todra y Valle del Dades."
        },
        {
          number: 7,
          name: "Ouarzazate",
          day: "Día 8",
          subtitle: "Ait Ben Haddou",
          desc: "Fortaleza histórica de cine de la UNESCO."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Día 9",
          subtitle: "Gran Final",
          desc: "Zocos, palacios y traslado final."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/thumbnail.jpg",
          cap: "Circuito de 9 Días Dunas del Desierto y Ciudades Imperiales",
          alt: "Circuito de 9 Días Dunas del Desierto y Ciudades Imperiales – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-01.jpg",
          cap: "Medina azul de Chefchaouen",
          alt: "Calle empedrada azul con macetas florales en Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-02.jpg",
          cap: "Mosaicos romanos en las ruinas de Volubilis",
          alt: "Suelo de mosaico romano clásico en el enclave arqueológico de Volubilis"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-03.jpg",
          cap: "Patio histórico en una madraza de Fez",
          alt: "Talla de estuco y azulejos zellige en la madraza de Fez"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-04.webp",
          cap: "Caravana al atardecer sobre las dunas de Erg Chebbi",
          alt: "Siluetas de dromedarios sobre crestas de dunas doradas en Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-05.webp",
          cap: "Campamento de lujo en el desierto del Sáhara",
          alt: "Jaimas confortables iluminadas en el desierto de Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-06.jpg",
          cap: "Desfiladero de roca en las Gargantas del Todra",
          alt: "Paredes verticales de caliza en las Gargantas del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-07.jpg",
          cap: "Ksar histórico de Ait Ben Haddou",
          alt: "Arquitectura bereber de barro y torres defensivas en Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-08.jpg",
          cap: "Ambiente vibrante en la plaza Jemaa el-Fna de Marrakech",
          alt: "Puestos de comida y animadores en la plaza Jemaa el-Fna"
        }
      ],
      faqs: []
    },
    it: {
      slug: '9-days-desert-imperial-cities',
      title: 'Tour di 9 Giorni Dune del Deserto e Città Imperiali | Sahara Star Tours',
      shortTitle: 'Tour di 9 Giorni Dune e Città Imperiali',
      description: 'Viaggio privato di 9 giorni da Casablanca: Rabat, Chefchaouen, Volubilis, Fes, dune di Erg Chebbi con campo di lusso, canyon del Dades e Marrakech.',
      aboutHtml: 'Un affascinante viaggio privato di 9 giorni ideato per unire la scoperta delle grandi Città Imperiali e i maestosi panorami naturali del Marocco. Dalla moderna Casablanca e la capitale Rabat salirai tra le montagne del Rif verso i vicoli azzurri di Chefchaouen. Ammira i mosaici romani di Volubilis e i tesori millenari di Fes prima di valicare l\'Atlante verso le dune dorate di Erg Chebbi. Trascorri una notte in campo tendato di lusso sotto le stelle del Sahara e prosegui lungo la Via delle Mille Kasbah tra le Gole del Todra e Ait Ben Haddou fino a Marrakech.',
      duration: '9 Giorni / 8 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $1,150/persona',
      highlights: [
        'Casablanca e Rabat: Moschea Hassan II, Torre Hassan e Kasbah degli Oudaïa',
        'Chefchaouen: La celebre Perla Blu incastonata nei monti del Rif',
        'Volubilis e Meknes: Sito archeologico romano UNESCO e porta monumentale Bab El Mansour',
        'Fes: Tour guidato completo nella labirintica medina di Fes El Bali',
        'Erg Chebbi: Cammellata al tramonto e soggiorno in campo tendato di lusso a Merzouga',
        'Gole del Todra e spettacolari formazioni rocciose della Valle del Dades',
        'Ait Ben Haddou e Marrakech: Fortezza cinematografica e la vibrante piazza Jemaa el-Fna'
      ],
      inclusions: [
        'Veicolo privato moderno e climatizzato (4x4 o minivan) con carburante incluso',
        'Autista/guida professionale parlante italiano per l\'intero itinerario',
        'Accoglienza all\'arrivo a Casablanca e trasferimenti di rientro a fine tour',
        'Guida locale autorizzata per la visita guidata storica a Fes',
        'Guida locale autorizzata per il tour dei monumenti a Marrakech',
        'Passeggiata a dorso di dromedario al tramonto sulle dune di Merzouga',
        '1 notte in campo tendato di lusso nel deserto con tenda privata e bagno ensuite',
        '8 notti in confortevoli hotel e riad tradizionali con colazione inclusa'
      ],
      exclusions: [
        'Voli aerei internazionali di andata e ritorno',
        'Pranzi e bevande durante i pasti',
        'Biglietti d\'ingresso a monumenti storici e musei',
        'Attività opzionali non incluse nel programma',
        'Mance per guide locali e autista',
        'Assicurazione personale di viaggio',
        'Spese personali ed extra',
        'Tutto quanto non espressamente specificato tra i servizi inclusi'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Casablanca – Rabat',
          content: 'Arrivo a Casablanca e visita alla spettacolare Moschea Hassan II sull\'oceano. Trasferimento a Rabat per ammirare la Torre Hassan e la Kasbah degli Oudaïa prima della sistemazione in riad.'
        },
        {
          day: 'Giorno 2',
          title: 'Rabat – Chefchaouen',
          content: 'Partenza verso nord tra i paesaggi del Rif in direzione di Chefchaouen. Pomeriggio libero per esplorare le caratteristiche stradine azzurre e rilassarsi nei caffè della piazza centrale. Notte a Chefchaouen.'
        },
        {
          day: 'Giorno 3',
          title: 'Chefchaouen – Volubilis – Meknes – Fes',
          content: 'Visita all\'antico sito romano di Volubilis con i suoi splendidi mosaici. Sosta a Meknes davanti alla porta Bab El Mansour e arrivo nel tardo pomeriggio a Fes con pernottamento in riad.'
        },
        {
          day: 'Giorno 4',
          title: 'Visita Guidata di Fes',
          content: 'Intera giornata con guida locale alla scoperta di Fes El Bali: Università Al Quaraouiyine, Medersa Bou Inania, concerie Chouara, quartiere ebraico Mellah e vista panoramica della città.'
        },
        {
          day: 'Giorno 5',
          title: 'Fes – Azrou – Midelt – Valle dello Ziz – Merzouga',
          content: 'Viaggio verso sud superando il Medio Atlante e i boschi di cedri di Azrou. Discesa lungo le gole dello Ziz fino a Merzouga, con partenza in dromedario verso il campo tendato di lusso per la cena sotto le stelle.'
        },
        {
          day: 'Giorno 6',
          title: 'Merzouga – Gole del Todra – Gole del Dades',
          content: 'Alba suggestiva tra le dune e colazione. Proseguimento verso Tinghir per ammirare le imponenti falesie del Todra e viaggio lungo la Valle del Dades per la cena e il pernottamento.'
        },
        {
          day: 'Giorno 7',
          title: 'Valle del Dades – Ait Ben Haddou – Marrakech',
          content: 'Ruta panoramica attraverso la Valle delle Rose e visita alla celebre Kasbah di Ait Ben Haddou (Patrimonio UNESCO). Attraversamento del passo di Tizi n\'Tichka (2.260 m) e arrivo a Marrakech.'
        },
        {
          day: 'Giorno 8',
          title: 'Visita Guidata di Marrakech',
          content: 'Tour storico mattutino tra la Moschea Koutoubia, il Palazzo Bahia, le Tombe Saadiane e i souk. Pomeriggio ai Giardini Majorelle e serata nell\'animata piazza Jemaa el-Fna.'
        },
        {
          day: 'Giorno 9',
          title: 'Fine del Tour di 9 Giorni in Marocco',
          content: 'Colazione in riad e trasferimento in aeroporto in tempo per il volo di rientro, a conclusione di un\'esperienza ricca di emozioni.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo",
          desc: "Moschea Hassan II e trasferimento costiero."
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
          name: "Chefchaouen",
          day: "Giorno 3",
          subtitle: "Medina Blu",
          desc: "I vicoli color indaco della Perla Blu."
        },
        {
          number: 4,
          name: "Fes",
          day: "Giorni 4 e 5",
          subtitle: "Città UNESCO",
          desc: "Tour culturale guidato approfondito."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorno 6",
          subtitle: "Dune Dorate",
          desc: "Dromedari e campo tendato a Erg Chebbi."
        },
        {
          number: 6,
          name: "Todra e Dades",
          day: "Giorno 7",
          subtitle: "Canyon",
          desc: "Gole del Todra e Valle del Dades."
        },
        {
          number: 7,
          name: "Ouarzazate",
          day: "Giorno 8",
          subtitle: "Ait Ben Haddou",
          desc: "Antica fortezza in terra cruda dell'UNESCO."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Giorno 9",
          subtitle: "Gran Finale",
          desc: "Souk storici, palazzi e transfer finale."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/thumbnail.jpg",
          cap: "Tour di 9 Giorni Dune del Deserto e Città Imperiali",
          alt: "Tour di 9 Giorni Dune del Deserto e Città Imperiali – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-01.jpg",
          cap: "Medina azzurra di Chefchaouen",
          alt: "Vicolo acciottolato blu con vasi di fiori a Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-02.jpg",
          cap: "Mosaici romani nelle rovine di Volubilis",
          alt: "Mosaico romano pavimentale nel sito archeologico di Volubilis"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-03.jpg",
          cap: "Cortile storico in una madrasa di Fes",
          alt: "Stucchi intagliati e zellige moreschi nella madrasa di Fes"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-04.webp",
          cap: "Carovana al tramonto sulle dune di Erg Chebbi",
          alt: "Dromedari in fila lungo le creste sabbiose di Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-05.webp",
          cap: "Campo tendato di lusso nel deserto del Sahara",
          alt: "Tende berbere di lusso illuminate nel deserto di Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-06.jpg",
          cap: "Falesie rocciose nelle Gole del Todra",
          alt: "Pareti verticali di roccia calcarea nelle Gole del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-07.jpg",
          cap: "Storico ksar di Ait Ben Haddou",
          alt: "Architettura in terra battuta e torri merlate ad Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-08.jpg",
          cap: "Atmosfera serale in piazza Jemaa el-Fna a Marrakech",
          alt: "Banchi gastronomici e cantastorie nella piazza Jemaa el-Fna"
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
