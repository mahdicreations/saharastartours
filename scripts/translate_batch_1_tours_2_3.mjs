import fs from 'node:fs';
import path from 'node:path';

const toursBatch = [
  // Tour 2: 7-day-morocco-tour-from-casablanca
  {
    slug: '7-day-morocco-tour-from-casablanca',
    es: {
      slug: '7-day-morocco-tour-from-casablanca',
      title: 'Circuito de 7 Días por Marruecos de Casablanca a Marrakech | Sahara Star Tours',
      shortTitle: 'Circuito de 7 Días desde Casablanca a Marrakech',
      description: 'Viaje privado de 7 días por Marruecos: Casablanca, Rabat, Chefchaouen la Perla Azul, ruinas de Volubilis, Medina de Fez, dunas de Merzouga y Marrakech.',
      aboutHtml: 'Disfruta de una inolvidable expedición privada de 7 días comenzando en Casablanca y culminando en Marrakech. Descubre la majestuosa Mezquita Hassan II, la capital real de Rabat y el encanto azul de Chefchaouen en las montañas del Rif. Explora el legado romano de Volubilis y los tesoros medievales de Fez antes de cruzar el Medio Atlas hacia las dunas doradas de Erg Chebbi. Vive una noche mágica en un campamento de lujo bajo el cielo estrellado del Sáhara y continúa por las Gargantas del Todra, el Valle del Dades y la Kasbah de Ait Ben Haddou hasta llegar a Marrakech.',
      duration: '7 Días / 6 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $890/persona',
      highlights: [
        'Mezquita Hassan II en Casablanca y capital de Rabat',
        'Chefchaouen, la Perla Azul en las montañas del Rif',
        'Ruinas romanas de Volubilis y ciudad imperial de Meknes',
        'Visita cultural guiada en la medina medieval de Fez',
        'Dunas doradas de Erg Chebbi con paseo en dromedario y campamento de lujo',
        'Gargantas del Todra, Valle del Dades y Kasbah de Ait Ben Haddou'
      ],
      inclusions: [
        'Vehículo privado 4x4 o monovolumen con aire acondicionado',
        'Conductor/guía local experimentado durante todo el viaje',
        'Combustible, peajes y costes operativos del vehículo',
        'Alojamiento en riads y hoteles confortables seleccionados',
        'Desayunos diarios y cenas especificadas en el itinerario',
        'Paseo en dromedario y noche en campamento de lujo en el desierto'
      ],
      exclusions: [
        'Almuerzos y bebidas',
        'Vuelos internacionales y traslados no especificados',
        'Gastos personales y actividades opcionales',
        'Propinas y gratificaciones'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Llegada a Casablanca – Visita de la Mayor Ciudad de Marruecos',
          content: 'Bienvenida a tu llegada al aeropuerto o en tu hotel en Casablanca. Comenzaremos el viaje visitando la impresionante Mezquita Hassan II, una de las mayores obras arquitectónicas islámicas del mundo, situada al borde del Océano Atlántico. Recorrido por el paseo marítimo de la Corniche y traslado a tu hotel para descansar.'
        },
        {
          day: 'Día 2',
          title: 'Casablanca – Rabat, la Capital – Chefchaouen',
          content: 'Salida hacia Rabat, la capital política de Marruecos. Visitaremos la Torre Hassan, el Mausoleo de Mohammed V y la pintoresca Kasbah de los Oudayas. A continuación nos adentraremos en las montañas del Rif hacia Chefchaouen, la famosa "Ciudad Azul". Tiempo libre para pasear por sus callejuelas empedradas teñidas de añil y contemplar la puesta de sol desde el mirador.'
        },
        {
          day: 'Día 3',
          title: 'Chefchaouen – Ruinas Romanas de Volubilis – Meknes – Fez',
          content: 'Mañana libre para disfrutar de los rincones tranquilos de Chefchaouen. Después viajaremos hacia Volubilis para contemplar los asombrosos mosaicos romanos en este enclave de la UNESCO. Parada en Meknes para admirar la monumental puerta Bab El Mansour y continuación hacia Fez para instalarnos en un riad tradicional.'
        },
        {
          day: 'Día 4',
          title: 'Visita Guiada Histórica de Fez con Guía Local',
          content: 'Jornada dedicada a explorar Fez El Bali con un guía local oficial. Descubriremos la Mezquita y Universidad Al Quaraouiyine, la Madraza Bou Inania, las históricas curtidurías Chouara y el barrio judío del Mellah. Podrás contemplar a los artesanos tradicionales del cobre, cerámica y cuero en los antiguos gremios de la medina.'
        },
        {
          day: 'Día 5',
          title: 'Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga',
          content: 'Viaje hacia el sur atravesando Ifrane y los frondosos bosques de cedros de Azrou, donde habitan los macacos de Berbería. Parada para almorzar en Midelt y descenso por las impresionantes gargantas y palmerales del Valle del Ziz. Por la tarde llegaremos a Merzouga; cambio al dromedario para cruzar las dunas de Erg Chebbi y disfrutar del atardecer antes de cenar en nuestro campamento de lujo bajo las estrellas.'
        },
        {
          day: 'Día 6',
          title: 'Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades',
          content: 'Amanecer sobre las dunas y desayuno en el campamento. Visita al histórico mercado de Rissani y a los talleres de fósiles de Erfoud. Paseo entre los imponentes acantilados verticales de las Gargantas del Todra y continuación por la ruta de las Kasbahs hasta el Valle del Dades para pasar la noche.'
        },
        {
          day: 'Día 7',
          title: 'Valle del Dades – Valle de las Rosas – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlas – Marrakech',
          content: 'Recorrido por el Valle de las Rosas y los palmerales de Skoura hasta Ouarzazate. Visita al emblemático ksar de Ait Ben Haddou, escenario de innumerables películas históricas. Cruzaremos el Alto Atlas por el sinuoso puerto de Tizi n\'Tichka (2.260 m), culminando el viaje en Marrakech con traslado a tu hotel o al aeropuerto.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada y Mezquita Hassan II",
          desc: "Bienvenida en Casablanca y visita a la majestuosa Mezquita Hassan II frente al océano."
        },
        {
          number: 2,
          name: "Rabat y Chefchaouen",
          day: "Día 2",
          subtitle: "Casablanca – Rabat – Chefchaouen",
          desc: "Monumentos de la capital Rabat y llegada a la mágica ciudad azul de Chefchaouen."
        },
        {
          number: 3,
          name: "Volubilis y Meknes",
          day: "Día 3",
          subtitle: "Chefchaouen – Volubilis – Meknes – Fez",
          desc: "Mosaicos romanos de Volubilis, Bab El Mansour en Meknes y llegada a Fez."
        },
        {
          number: 4,
          name: "Fez",
          day: "Día 4",
          subtitle: "Visita Guiada de Fez",
          desc: "Inmersión cultural por la medina medieval de Fez con guía local oficial."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Día 5",
          subtitle: "Fez – Atlas – Valle del Ziz – Erg Chebbi",
          desc: "Travesía del Atlas, paseo en dromedario y noche en campamento bereber prémium."
        },
        {
          number: 6,
          name: "Valle del Dades",
          day: "Día 6",
          subtitle: "Merzouga – Todra – Valle del Dades",
          desc: "Amanecer en las dunas, acantilados del Todra y noche en el Valle del Dades."
        },
        {
          number: 7,
          name: "Marrakech",
          day: "Día 7",
          subtitle: "Dades – Ait Ben Haddou – Alto Atlas – Marrakech",
          desc: "Kasbah de Ait Ben Haddou, puerto de Tizi n'Tichka y llegada a Marrakech."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_1.webp",
          cap: "Ruinas de fortaleza de piedra en la cresta de la montaña con cumbres nevadas",
          alt: "Ruinas de antigua fortaleza de piedra en una cresta montañosa con cumbres nevadas"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_10.webp",
          cap: "Fuente en forma de estrella y arcos moriscos en la Mezquita Hassan II",
          alt: "Fuente en forma de estrella y grandes arcos moriscos en la Mezquita Hassan II"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_3.webp",
          cap: "Curtidores de cuero trabajando en los tintes de la Curtiduría Chouara en Fez",
          alt: "Curtidores de cuero trabajando en los históricos pozos de tinte de Chouara en Fez"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_4.webp",
          cap: "Minarete de la Mezquita Hassan II y explanada de mármol en Casablanca",
          alt: "Minarete de la Mezquita Hassan II y amplia explanada de mármol en Casablanca"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_5.webp",
          cap: "Torre Hassan alzándose tras las palmeras en Rabat",
          alt: "Alminar de la Torre Hassan elevándose tras las palmeras en Rabat"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_6.webp",
          cap: "Minarete de la Mezquita Hassan II enmarcado por un arco morisco tallado",
          alt: "Minarete de la Mezquita Hassan II enmarcado por un arco morisco tallado"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_7.webp",
          cap: "Puerta ornamental de hierro de acceso a los jardines de la Torre Hassan",
          alt: "Puerta decorativa de hierro hacia los jardines de la Torre Hassan en Rabat"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_8.webp",
          cap: "Ruinas romanas y Arco de Caracalla en el sitio arqueológico de Volubilis",
          alt: "Ruinas romanas y Arco de Caracalla en el enclave arqueológico de Volubilis"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_9.webp",
          cap: "Paseo peatonal con minaretes de azulejos",
          alt: "Paseo peatonal con minaretes de azulejos"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/hero_2.webp",
          cap: "Atardecer panorámico sobre las casas azules de Chefchaouen",
          alt: "Vista panorámica al atardecer de los edificios teñidos de azul de Chefchaouen"
        }
      ],
      faqs: [
        {
          question: "¿Es este un circuito privado o compartido?",
          answer: "Es un recorrido totalmente privado. El vehículo, conductor y guía atienden en exclusiva a tu grupo durante todo el viaje."
        },
        {
          question: "¿Cuánto dura el paseo en dromedario y hay alternativa disponible?",
          answer: "El paseo dura entre 40 minutos y 1,5 horas. Quien lo prefiera puede realizar el traslado en vehículo 4x4 directo al campamento."
        },
        {
          question: "¿La tienda del campamento en el desierto es privada?",
          answer: "Sí, dispones de una jaima privada de lujo con cama de confort, baño privado interior y ducha con agua caliente."
        },
        {
          question: "¿Dónde se realiza la recogida y el regreso?",
          answer: "Te recogemos en tu alojamiento o aeropuerto en Casablanca y finalizamos en Marrakech con traslado al hotel o aeropuerto."
        },
        {
          question: "¿Qué tipo de vehículo se utiliza en la ruta?",
          answer: "Vehículo privado 4x4 o monovolumen con aire acondicionado, asientos cómodos y espacio generoso para el equipaje."
        },
        {
          question: "¿Se pueden atender necesidades dietéticas especiales?",
          answer: "Sí, podemos adaptar los menús para dietas vegetarianas, veganas, sin gluten o requerimientos halal si nos avisas con antelación."
        },
        {
          question: "¿Es este itinerario adecuado para todas las edades?",
          answer: "Sí, está adaptado a todas las edades, con paradas regulares para descansar y disfrutar del paisaje."
        },
        {
          question: "¿Cuál es la mejor época del año para realizar este viaje?",
          answer: "Primavera y otoño son épocas extraordinarias por su clima templado. El invierno es ideal para disfrutar del sol en el desierto."
        }
      ]
    },
    it: {
      slug: '7-day-morocco-tour-from-casablanca',
      title: 'Tour di 7 Giorni in Marocco da Casablanca a Marrakech | Sahara Star Tours',
      shortTitle: 'Tour di 7 Giorni da Casablanca a Marrakech',
      description: 'Viaggio privato di 7 giorni in Marocco: Casablanca, Rabat, Chefchaouen la Città Blu, Volubilis, Medina di Fes, dune di Merzouga e Marrakech.',
      aboutHtml: 'Vivi un suggestivo viaggio privato di 7 giorni da Casablanca a Marrakech. Ammira la grandiosa Moschea Hassan II, la capitale reale di Rabat e i vicoli azzurri di Chefchaouen sui monti del Rif. Esplora le rovine romane di Volubilis e i tesori millenari di Fes prima di valicare il Medio Atlante verso le dune dorate di Erg Chebbi. Trascorri una notte magica in un campo tendato di lusso sotto il cielo stellato del Sahara e prosegui attraverso le Gole del Todra, la Valle del Dades e la Kasbah di Ait Ben Haddou fino a raggiungere Marrakech.',
      duration: '7 Giorni / 6 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $890/persona',
      highlights: [
        'Moschea Hassan II a Casablanca e capitale di Rabat',
        'Chefchaouen, la Perla Blu incastonata nei monti del Rif',
        'Rovine romane di Volubilis e città imperiale di Meknes',
        'Visita culturale guidata nella medina medievale di Fes',
        'Dune dorate di Erg Chebbi con dromedariata e campo tendato di lusso',
        'Gole del Todra, Valle del Dades e Kasbah di Ait Ben Haddou'
      ],
      inclusions: [
        'Veicolo privato 4x4 o minivan con aria condizionata e carburante incluso',
        'Autista/guida locale esperto e professionale per l\'intero percorso',
        'Costi di carburante, pedaggi stradali e gestione operativa del veicolo',
        'Pernottamento in riad e hotel confortevoli e accuratamente selezionati',
        'Colazioni quotidiane e cene specificate nell\'itinerario',
        'Trekking a dorso di dromedario e notte in campo tendato di lusso nel deserto'
      ],
      exclusions: [
        'Pranzi e bevande',
        'Voli aerei internazionali e trasferimenti non menzionati',
        'Spese personali e attività facoltative',
        'Mance e gratifiche'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Casablanca – Visita della Grande Metropoli',
          content: 'Accoglienza all\'arrivo in aeroporto o presso il tuo alloggio a Casablanca. Inizieremo visitando la maestosa Moschea Hassan II, una delle opere architettoniche più impressionanti del mondo islamico, affacciata sulle acque dell\'Atlantico. Passeggiata sul lungomare della Corniche e trasferimento in hotel per il riposo.'
        },
        {
          day: 'Giorno 2',
          title: 'Casablanca – Rabat, la Capitale – Chefchaouen',
          content: 'Partenza per Rabat, capitale istituzionale del Marocco. Ammireremo la Torre Hassan, il Mausoleo di Mohammed V e la Kasbah degli Oudaïa. Successivamente saliremo tra i rilievi del Rif verso Chefchaouen, celebre "Città Blu". Tempo a disposizione per passeggiare nei vicoli dipinti d\'indaco e godersi il tramonto dal belvedere.'
        },
        {
          day: 'Giorno 3',
          title: 'Chefchaouen – Rovine Romane di Volubilis – Meknes – Fes',
          content: 'Mattinata per scoprire i vicoli tranquilli di Chefchaouen. In seguito visiteremo Volubilis per contemplare gli splendidi mosaici romani tutelati dall\'UNESCO. Breve sosta a Meknes per ammirare la monumentale porta Bab El Mansour e proseguimento per Fes con pernottamento in riad storico.'
        },
        {
          day: 'Giorno 4',
          title: 'Visita Guidata Storica di Fes con Guida Locale',
          content: 'Intera giornata alla scoperta di Fes El Bali con guida turistica locale certificata. Visiteremo la Moschea e Università Al Quaraouiyine, la Medersa Bou Inania, le iconiche concerie Chouara e il quartiere ebraico del Mellah. Sarà affascinante osservare gli artigiani al lavoro nei tradizionali souk.'
        },
        {
          day: 'Giorno 5',
          title: 'Fes – Ifrane – Foresta dei Cedri – Midelt – Valle dello Ziz – Merzouga',
          content: 'Direzione sud attraverso Ifrane e i boschi di cedri di Azrou, dove vivono le scimmie bertucce. Pranzo a Midelt e discesa lungo i profondi canyon e le oasi della Valle dello Ziz. Arrivo a Merzouga nel pomeriggio; salita sul dromedario per cavalcare tra le dune di Erg Chebbi verso il campo tendato di lusso per la cena sotto le stelle.'
        },
        {
          day: 'Giorno 6',
          title: 'Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades',
          content: 'Risveglio all\'alba per ammirare il sorgere del sole sulle dune. Visita al mercato tradizionale di Rissani e ai laboratori di fossili di Erfoud. Camminata suggestiva tra le imponenti pareti verticali delle Gole del Todra e proseguimento attraverso la Valle del Dades per la cena e il pernottamento.'
        },
        {
          day: 'Giorno 7',
          title: 'Valle del Dades – Valle delle Rose – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlante – Marrakech',
          content: 'Attraversamento della Valle delle Rose e dei palmeti di Skoura fino a Ouarzazate. Visita al celebre ksar fortificato di Ait Ben Haddou, set di innumerevoli capolavori cinematografici. Valico dell\'Alto Atlante attraverso il passo di Tizi n\'Tichka (2.260 m) e arrivo finale a Marrakech con trasferimento in hotel o aeroporto.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo e Moschea Hassan II",
          desc: "Accoglienza a Casablanca e visita alla spettacolare Moschea Hassan II sull'oceano."
        },
        {
          number: 2,
          name: "Rabat e Chefchaouen",
          day: "Giorno 2",
          subtitle: "Casablanca – Rabat – Chefchaouen",
          desc: "Monumenti della capitale Rabat e arrivo nell'incantevole Città Blu di Chefchaouen."
        },
        {
          number: 3,
          name: "Volubilis e Meknes",
          day: "Giorno 3",
          subtitle: "Chefchaouen – Volubilis – Meknes – Fes",
          desc: "Mosaici romani a Volubilis, Bab El Mansour a Meknes e arrivo serale a Fes."
        },
        {
          number: 4,
          name: "Fes",
          day: "Giorno 4",
          subtitle: "Visita Guidata di Fes",
          desc: "Tour storico culturale nella medina medievale di Fes con guida locale ufficiale."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorno 5",
          subtitle: "Fes – Atlante – Valle dello Ziz – Erg Chebbi",
          desc: "Viaggio attraverso l'Atlante, passeggiata in dromedario e notte in campo tendato nel deserto."
        },
        {
          number: 6,
          name: "Valle del Dades",
          day: "Giorno 6",
          subtitle: "Merzouga – Todra – Valle del Dades",
          desc: "Alba sulle dune, pareti rocciose del Todra e pernottamento nella scenografica Valle del Dades."
        },
        {
          number: 7,
          name: "Marrakech",
          day: "Giorno 7",
          subtitle: "Dades – Ait Ben Haddou – Alto Atlante – Marrakech",
          desc: "Kasbah di Ait Ben Haddou, passo montano di Tizi n'Tichka e arrivo a Marrakech."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_1.webp",
          cap: "Rovine di antica fortezza in pietra su un crinale montuoso con cime innevate",
          alt: "Rovine di fortezza in pietra su un crinale montuoso con cime innevate sullo sfondo"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_10.webp",
          cap: "Fontana a forma di stella e archi moreschi nella Moschea Hassan II",
          alt: "Fontana a stella e grandi archi moreschi nel cortile della Moschea Hassan II"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_3.webp",
          cap: "Conciatori al lavoro nelle vasche storiche di Chouara a Fes",
          alt: "Conciatori di pelli al lavoro nelle storiche vasche di tintura di Chouara a Fes"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_4.webp",
          cap: "Minareto della Moschea Hassan II e vasta spianata di marmo a Casablanca",
          alt: "Minareto della Moschea Hassan II e ampia spianata in marmo a Casablanca"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_5.webp",
          cap: "Torre Hassan che svetta dietro le palme a Rabat",
          alt: "Il minareto della Torre Hassan che si erge dietro le palme a Rabat"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_6.webp",
          cap: "Minareto della Moschea Hassan II incorniciato da un arco moresco scolpito",
          alt: "Minareto della Moschea Hassan II incorniciato da un arco moresco intagliato"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_7.webp",
          cap: "Cancello ornamentale in ferro verso i giardini della Torre Hassan",
          alt: "Cancello decorativo in ferro battuto nei giardini della Torre Hassan a Rabat"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_8.webp",
          cap: "Rovine romane e Arco di Caracalla nel sito archeologico di Volubilis",
          alt: "Rovine romane e Arco di Caracalla nel sito archeologico UNESCO di Volubilis"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_9.webp",
          cap: "Passeggiata pedonale con minareti piastrellati",
          alt: "Passeggiata pedonale con minareti piastrellati"
        },
        {
          src: "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/hero_2.webp",
          cap: "Panoramica al tramonto delle case dipinte di blu a Chefchaouen",
          alt: "Veduta panoramica al tramonto dei caratteristici edifici blu di Chefchaouen"
        }
      ],
      faqs: [
        {
          question: "Questo tour è privato o condiviso?",
          answer: "Il tour è completamente privato ed esclusivo per te e il tuo gruppo, con autista e veicolo dedicati."
        },
        {
          question: "Quanto dura la passeggiata sui dromedari e c'è un'alternativa?",
          answer: "La cammellata dura dai 40 ai 90 minuti. In alternativa è possibile richiedere il transfer diretto in fuoristrada 4x4."
        },
        {
          question: "La tenda nel campo del deserto dispone di bagno privato?",
          answer: "Sì, ogni tenda nel campo tendato di lusso è dotata di letti comodi e bagno privato ensuite con doccia calda."
        },
        {
          question: "Dove avvengono il prelievo e il rientro?",
          answer: "Il prelievo avviene a Casablanca (in hotel o aeroporto) e il tour si conclude a Marrakech con accompagnamento al tuo alloggio o aeroporto."
        },
        {
          question: "Che tipo di veicolo viene impiegato per il tour?",
          answer: "Utilizziamo veicoli 4x4 o moderni minivan con aria condizionata, sedili ergonomici e ampio spazio bagagli."
        },
        {
          question: "È possibile richiedere menu per esigenze dietetiche particolari?",
          answer: "Certamente, segnalaci eventuali richieste dietetiche (vegetariane, senza glutine, vegane, halal) al momento della conferma."
        },
        {
          question: "Il viaggio è indicato per persone di ogni età?",
          answer: "Sì, è un itinerario versatile e accessibile a tutte le età, con pause panoramiche distribuite nell'arco della giornata."
        },
        {
          question: "Qual è il periodo migliore dell'anno per effettuare questo tour?",
          answer: "La primavera e l'autunno offrono temperature gradevolissime. L'inverno è splendido nel sud e nel deserto, con clima sereno."
        }
      ]
    }
  },

  // Tour 3: 8-days-itinerary-tour-from-casablanca
  {
    slug: '8-days-itinerary-tour-from-casablanca',
    es: {
      slug: '8-days-itinerary-tour-from-casablanca',
      title: 'Circuito de 8 Días por el Desierto del Sáhara y Ciudades Imperiales | Sahara Star Tours',
      shortTitle: 'Circuito de 8 Días Sáhara y Ciudades Imperiales',
      description: 'Itinerario de 8 días desde Casablanca: Rabat, Chefchaouen, Volubilis, Fez, dunas de Erg Chebbi con noche en jaima de lujo, cañones del Todra y visita de Marrakech.',
      aboutHtml: 'Este completo circuito privado de 8 días desde Casablanca reúne los mayores tesoros culturales y naturales de Marruecos. Recorrerás la costa atlántica hasta Rabat, ascenderás a la pintoresca medina azul de Chefchaouen y te adentrarás en la historia antigua con Volubilis, Meknes y la laberíntica Fez. A continuación, cruzarás el Medio Atlas para contemplar el majestuoso atardecer en las dunas de Merzouga y dormir en un campamento bereber prémium. La ruta continúa por los espectaculares cañones del Todra y Dades, la fortaleza cinematográfica de Ait Ben Haddou y concluye con una visita guiada en profundidad por la fascinante Marrakech.',
      duration: '8 Días / 7 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $990/persona',
      highlights: [
        'Mezquita Hassan II en Casablanca y monumentos reales de Rabat',
        'Chefchaouen, la emblemática Perla Azul del Rif',
        'Ruinas romanas de Volubilis (UNESCO) y ciudad imperial de Meknes',
        'Visita guiada histórica por la milenaria medina de Fez',
        'Bosque de cedros de Azrou y gargantas del Valle del Ziz',
        'Aventura en dromedario y noche en campamento de lujo en Erg Chebbi',
        'Gargantas del Todra y formaciones rocosas del Valle del Dades',
        'Kasbah de Ait Ben Haddou y paso de montaña de Tizi n\'Tichka',
        'Visita guiada por los palacios, madrazas y zocos de Marrakech'
      ],
      inclusions: [
        'Vehículo privado moderno y climatizado (4x4 o minivan) con combustible',
        'Conductor/guía profesional durante todo el recorrido de 8 días',
        'Recogida en Casablanca y traslados de salida en Marrakech o Casablanca',
        'Guía local oficial para la visita guiada a pie en Fez',
        'Guía local oficial para la visita monumental en Marrakech',
        'Paseo en dromedario al atardecer en las dunas de Merzouga',
        '1 noche en campamento de lujo en el desierto con tienda privada y baño en suite',
        '6 noches en riads tradicionales y hoteles con encanto seleccionados'
      ],
      exclusions: [
        'Vuelos internacionales',
        'Almuerzos diarios y bebidas',
        'Entradas a monumentos históricos y museos',
        'Actividades opcionales no mencionadas',
        'Propinas para conductores y guías',
        'Seguro personal de viaje',
        'Gastos personales y compras'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Casablanca – Rabat',
          content: 'Bienvenida en el aeropuerto o en tu alojamiento en Casablanca. Comenzaremos admirando la grandiosa Mezquita Hassan II frente al océano Atlántico. Por la tarde nos trasladaremos a Rabat para contemplar la Torre Hassan, el Mausoleo de Mohammed V y la Kasbah de los Oudayas antes de alojarnos en un riad tradicional.'
        },
        {
          day: 'Día 2',
          title: 'Rabat – Chefchaouen',
          content: 'Tras el desayuno saldremos hacia las montañas del Rif en dirección a Chefchaouen. Llegada a la Ciudad Azul, donde tendrás tiempo libre para pasear por la plaza Uta el-Hammam, fotografiar sus fachadas pintadas de azul cielo y disfrutar de la serenidad de su medina.'
        },
        {
          day: 'Día 3',
          title: 'Chefchaouen – Volubilis – Meknes – Fez',
          content: 'Dejamos atrás las montañas para explorar el yacimiento arqueológico de Volubilis, apreciando sus mosaicos romanos intactos. Continuaremos hacia la vecina Meknes para contemplar la monumental puerta Bab El Mansour antes de llegar a Fez para cenar y descansar en el riad.'
        },
        {
          day: 'Día 4',
          title: 'Visita Guiada Histórica de Fez',
          content: 'Día completo con guía oficial recorriendo Fez El Bali. Visitaremos la Mezquita Al Quaraouiyine, la Madraza Bou Inania, las históricas curtidurías Chouara, el barrio de alfareros y el exterior del Palacio Real con sus famosas puertas de bronce labrado.'
        },
        {
          day: 'Día 5',
          title: 'Fez – Ifrane – Bosque de Cedros – Valle del Ziz – Desierto de Merzouga',
          content: 'Travesía hacia el sur atravesando la arquitectura alpina de Ifrane y el bosque de cedros de Azrou para ver a los macacos del Atlas. Parada para almorzar en Midelt y descenso por el exuberante palmeral del Ziz. Por la tarde llegaremos a Erg Chebbi para montar en dromedario hacia el campamento de lujo, disfrutando de la puesta de sol y de una cena tradicional con música bereber.'
        },
        {
          day: 'Día 6',
          title: 'Desierto de Merzouga – Rissani – Gargantas del Todra – Valle del Dades',
          content: 'Amanecer entre las dunas y desayuno en el campamento. Salida hacia el mercado histórico de Rissani y parada en Erfoud. Pasearemos por las espectaculares Gargantas del Todra bajo desfiladeros de 300 metros de altura y continuaremos por las formaciones de "dedos de mono" del Dades para pasar la noche.'
        },
        {
          day: 'Día 7',
          title: 'Gargantas del Dades – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech',
          content: 'Ruta por la Carretera de las Mil Kasbahs pasando por Kelaat M\'gouna y Ouarzazate. Visita a la histórica Kasbah de Ait Ben Haddou (UNESCO), célebre por producciones como Gladiator y Juego de Tronos. Cruce panorámico del Alto Atlas por el paso de Tizi n\'Tichka hasta llegar a la vibrante Marrakech.'
        },
        {
          day: 'Día 8',
          title: 'Visita Guiada de Marrakech y Traslado',
          content: 'Mañana dedicada a descubrir Marrakech con guía local: la mezquita Koutoubia, el Palacio de la Bahía, las Tumbas Saadíes y la plaza Jemaa el-Fna. Por la tarde, según tu horario de vuelo, traslado al aeropuerto de Marrakech Menara (RAK) o al aeropuerto Mohammed V de Casablanca (CMN).'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada Atlántica",
          desc: "Mezquita Hassan II y ruta costera hacia Rabat."
        },
        {
          number: 2,
          name: "Rabat",
          day: "Día 2",
          subtitle: "Capital Imperial",
          desc: "Torre Hassan, Palacio Real y Kasbah de los Oudayas."
        },
        {
          number: 3,
          name: "Chefchaouen",
          day: "Día 3",
          subtitle: "La Perla Azul",
          desc: "Encantadora medina azul en las montañas del Rif."
        },
        {
          number: 4,
          name: "Volubilis y Fez",
          day: "Día 4 y 5",
          subtitle: "Legado Romano y Medieval",
          desc: "Mosaicos romanos, Meknes y la medina espiritual de Fez."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Día 5 y 6",
          subtitle: "Campamento Prémium en Erg Chebbi",
          desc: "Valle del Ziz, Medio Atlas y campamento de lujo en el desierto."
        },
        {
          number: 6,
          name: "Todra y Dades",
          day: "Día 6 y 7",
          subtitle: "Gargantas y Cañones del Atlas",
          desc: "Impresionantes cañones de roca caliza y Valle de las Rosas."
        },
        {
          number: 7,
          name: "Ait Ben Haddou",
          day: "Día 7",
          subtitle: "Kasbah Patrimonio de la UNESCO",
          desc: "Fortaleza histórica de cine y estudios de Ouarzazate."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Día 8",
          subtitle: "Gran Final en la Ciudad Roja",
          desc: "Zocos históricos, palacios y traslado de salida."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/thumbnail.jpg",
          cap: "Circuito de 8 Días por Marruecos desde Casablanca",
          alt: "Circuito de 8 Días por Marruecos desde Casablanca – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-01.jpg",
          cap: "Medina azul de Chefchaouen y paisajes del Rif",
          alt: "Callejuelas pintadas de azul en la medina de Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-02.jpg",
          cap: "Yacimiento arqueológico romano de Volubilis",
          alt: "Ruinas romanas y columnas históricas de Volubilis"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-03.jpg",
          cap: "Medina medieval y arquitectura islámica en Fez",
          alt: "Patio decorado con mosaicos en una madraza histórica de Fez"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-04.jpg",
          cap: "Caravana de dromedarios en las dunas de Erg Chebbi",
          alt: "Paseo en dromedario al atardecer sobre las dunas de Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-05.jpg",
          cap: "Campamento bereber de lujo en el desierto del Sáhara",
          alt: "Tiendas de lujo y alfombras bereberes bajo el cielo del desierto"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-06.jpg",
          cap: "Gargantas del Todra y acantilados del Atlas",
          alt: "Desfiladero rocoso y río en las Gargantas del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-07.jpg",
          cap: "Kasbah fortificada de Ait Ben Haddou",
          alt: "Ksar de adobe de Ait Ben Haddou declarado por la UNESCO"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-08.jpg",
          cap: "Plaza Jemaa el-Fna y zocos de Marrakech",
          alt: "Ambiente vibrante y minarete de la Koutoubia en Marrakech"
        }
      ],
      faqs: []
    },
    it: {
      slug: '8-days-itinerary-tour-from-casablanca',
      title: 'Tour di 8 Giorni tra Deserto del Sahara e Città Imperiali | Sahara Star Tours',
      shortTitle: 'Tour di 8 Giorni Sahara e Città Imperiali',
      description: 'Itinerario privato di 8 giorni da Casablanca: Rabat, Chefchaouen, Volubilis, Fes, dune di Erg Chebbi con campo tendato di lusso, Gole del Todra e Marrakech.',
      aboutHtml: 'Questo itinerario privato di 8 giorni da Casablanca unisce armoniosamente le meraviglie culturali e i grandi paesaggi naturali del Marocco. Viaggia lungo la costa atlantica fino a Rabat, sali verso la suggestiva Città Blu di Chefchaouen tra i monti del Rif e immergiti nella storia a Volubilis, Meknes e nell\'antica medina di Fes. Attraversa l\'Atlante per ammirare il tramonto dorato tra le dune di Merzouga e dormire in un raffinato campo tendato nel deserto. L\'avventura prosegue attraverso le spettacolari Gole del Todra e del Dades, la storica Kasbah di Ait Ben Haddou e culmina con una ricca visita guidata a Marrakech.',
      duration: '8 Giorni / 7 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $990/persona',
      highlights: [
        'Moschea Hassan II a Casablanca e monumenti storici di Rabat',
        'Chefchaouen, l\'iconica Perla Blu incastonata nel Rif',
        'Sito archeologico romano di Volubilis (UNESCO) e Meknes',
        'Visita guidata approfondita della medina millenaria di Fes',
        'Foresta di cedri di Azrou e gole panoramiche della Valle dello Ziz',
        'Trekking sui dromedari e notte in campo tendato di lusso a Erg Chebbi',
        'Gole del Todra e formazioni rocciose della Valle del Dades',
        'Kasbah di Ait Ben Haddou e valico montano di Tizi n\'Tichka',
        'Tour guidato tra palazzi, madrase e souk animati di Marrakech'
      ],
      inclusions: [
        'Veicolo privato climatizzato e moderno (4x4 o minivan) con carburante incluso',
        'Autista/guida professionale dedicato per tutti gli 8 giorni di tour',
        'Accoglienza a Casablanca e trasferimento finale a Marrakech o Casablanca',
        'Guida locale autorizzata per il tour a piedi della medina di Fes',
        'Guida locale autorizzata per la visita culturale dei monumenti di Marrakech',
        'Passeggiata a dorso di dromedario al tramonto sulle dune di Merzouga',
        '1 notte in campo tendato di lusso nel deserto con bagno privato ensuite',
        '6 notti in confortevoli riad tradizionali e hotel selezionati'
      ],
      exclusions: [
        'Voli aerei internazionali',
        'Pranzi e bevande durante i pasti',
        'Biglietti d\'ingresso a monumenti storici e musei',
        'Attività facoltative non comprese nell\'itinerario',
        'Mance per autista e guide locali',
        'Assicurazione di viaggio personale',
        'Spese personali e acquisti'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Casablanca – Rabat',
          content: 'Accoglienza all\'aeroporto o presso il tuo alloggio a Casablanca. Visiteremo la grandiosa Moschea Hassan II eretta a ridosso dell\'Atlantico. Nel pomeriggio proseguiremo verso Rabat per ammirare la Torre Hassan, il Mausoleo di Mohammed V e la Kasbah degli Oudaïa prima di sistemarci in riad.'
        },
        {
          day: 'Giorno 2',
          title: 'Rabat – Chefchaouen',
          content: 'Dopo colazione viaggeremo verso le montagne del Rif in direzione di Chefchaouen. Arrivo nella Città Blu, dove potrai passeggiare liberamente tra vicoli color indaco, ammirare piazza Uta el-Hammam e goderti la caratteristica quiete della medina.'
        },
        {
          day: 'Giorno 3',
          title: 'Chefchaouen – Volubilis – Meknes – Fes',
          content: 'Partenza dai monti del Rif per esplorare le magnifiche rovine romane di Volubilis e i suoi mosaici perfettamente conservati. Sosta nella vicina Meknes per fotografare la maestosa porta Bab El Mansour prima di arrivare a Fes per la cena e il pernottamento in riad.'
        },
        {
          day: 'Giorno 4',
          title: 'Visita Guidata Storica di Fes',
          content: 'Intera giornata con guida locale ufficiale alla scoperta di Fes El Bali. Ammireremo la Moschea Al Quaraouiyine, la Medersa Bou Inania, le concerie di cuoio Chouara, i quartieri artigianali e l\'esterno del Palazzo Reale con le imponenti porte in ottone dorato.'
        },
        {
          day: 'Giorno 5',
          title: 'Fes – Ifrane – Foresta dei Cedri – Valle dello Ziz – Deserto di Merzouga',
          content: 'Viaggio verso sud con soste a Ifrane e nella foresta di cedri di Azrou per incontrare i macachi berberi. Pranzo a Midelt e discesa attraverso il palmeto della Valle dello Ziz. Nel pomeriggio arrivo a Merzouga, partenza a dorso di dromedario sulle dune di Erg Chebbi e serata magica nel campo tendato di lusso con cena tipica berbera attorno al fuoco.'
        },
        {
          day: 'Giorno 6',
          title: 'Deserto di Merzouga – Rissani – Gole del Todra – Valle del Dades',
          content: 'Alba indimenticabile sulle dune e colazione al campo. Visita al mercato carovaniero di Rissani e ai laboratori fossili di Erfoud. Passeggiata nelle spettacolari Gole del Todra tra pareti alte centinaia di metri e proseguimento nella suggestiva Valle del Dades per il pernottamento.'
        },
        {
          day: 'Giorno 7',
          title: 'Gole del Dades – Ouarzazate – Ait Ben Haddou – Alto Atlante – Marrakech',
          content: 'Attraversamento della Valle delle Rose e della città di Ouarzazate. Visita al ksar di Ait Ben Haddou (Patrimonio UNESCO), celebre fortezza di film leggendari come Il Gladiatore. Valico montano del passo di Tizi n\'Tichka tra vette maestose e arrivo nella vivace Marrakech.'
        },
        {
          day: 'Giorno 8',
          title: 'Tour Guidato di Marrakech e Trasferimento',
          content: 'Mattinata dedicata alla visita guidata di Marrakech: la Koutoubia, il Palazzo Bahia, le Tombe Saadiane e la celebre piazza Jemaa el-Fna. Nel pomeriggio, in base all\'orario del tuo volo, trasferimento all\'aeroporto di Marrakech Menara (RAK) o all\'aeroporto Mohammed V di Casablanca (CMN).'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo sull'Atlantico",
          desc: "Moschea Hassan II e trasferimento panoramico verso Rabat."
        },
        {
          number: 2,
          name: "Rabat",
          day: "Giorno 2",
          subtitle: "Capitale Imperiale",
          desc: "Torre Hassan, Palazzo Reale e Kasbah degli Oudaïa."
        },
        {
          number: 3,
          name: "Chefchaouen",
          day: "Giorno 3",
          subtitle: "La Perla Blu",
          desc: "Suggestiva medina dipinta di blu tra i monti del Rif."
        },
        {
          number: 4,
          name: "Volubilis e Fes",
          day: "Giorno 4 e 5",
          subtitle: "Eredità Romana e Medievale",
          desc: "Mosaici romani, Meknes e la medina storica di Fes."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorno 5 e 6",
          subtitle: "Campo Tendato a Erg Chebbi",
          desc: "Valle dello Ziz, Medio Atlante e notte di lusso nel deserto."
        },
        {
          number: 6,
          name: "Todra e Dades",
          day: "Giorno 6 e 7",
          subtitle: "Gole e Canyon dell'Atlante",
          desc: "Gole rocciose mozzafiato e profumata Valle delle Rose."
        },
        {
          number: 7,
          name: "Ait Ben Haddou",
          day: "Giorno 7",
          subtitle: "Kasbah Patrimonio UNESCO",
          desc: "Fortezza iconica del cinema e studi di Ouarzazate."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Giorno 8",
          subtitle: "Gran Finale nella Città Rossa",
          desc: "Souk vivaci, monumenti storici e transfer aeroportuale."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/thumbnail.jpg",
          cap: "Tour di 8 Giorni in Marocco da Casablanca",
          alt: "Tour di 8 Giorni in Marocco da Casablanca – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-01.jpg",
          cap: "Medina blu di Chefchaouen e paesaggi del Rif",
          alt: "Vicoli color indaco nella medina di Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-02.jpg",
          cap: "Sito archeologico romano di Volubilis",
          alt: "Rovine romane e colonne storiche a Volubilis"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-03.jpg",
          cap: "Medina medievale e architettura islamica a Fes",
          alt: "Cortile decorato a mosaico in un'antica madrasa di Fes"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-04.jpg",
          cap: "Carovana di dromedari tra le dune di Erg Chebbi",
          alt: "Passeggiata sui dromedari al tramonto tra le dune di Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-05.jpg",
          cap: "Campo tendato berbero di lusso nel Sahara",
          alt: "Tende di lusso e tappeti berberi sotto il cielo del deserto"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-06.jpg",
          cap: "Gole del Todra e falesie rocciose dell'Atlante",
          alt: "Canyon roccioso e corso d'acqua nelle Gole del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-07.jpg",
          cap: "Kasbah fortificata di Ait Ben Haddou",
          alt: "Ksar in terra cruda di Ait Ben Haddou tutelato dall'UNESCO"
        },
        {
          src: "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-08.jpg",
          cap: "Piazza Jemaa el-Fna e souk di Marrakech",
          alt: "Atmosfera vivace e minareto della Koutoubia a Marrakech"
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
