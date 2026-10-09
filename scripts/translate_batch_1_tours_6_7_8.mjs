import fs from 'node:fs';
import path from 'node:path';

const toursBatch = [
  // Tour 6: 10-days-morocco-couple-tour
  {
    slug: '10-days-morocco-couple-tour',
    es: {
      slug: '10-days-morocco-couple-tour',
      title: 'Paquete Romántico de 10 Días por Marruecos para Parejas | Sahara Star Tours',
      shortTitle: 'Circuito Romántico de 10 Días para Parejas',
      description: 'Viaje privado y romántico de 10 días para parejas en Marruecos: Casablanca, Chefchaouen, Fez, noche mágica en campamento de lujo en Merzouga y Marrakech.',
      aboutHtml: 'Diseñado especialmente para parejas que buscan una escapada íntima e inolvidable, este itinerario privado de 10 días recorre los rincones más románticos de Marruecos. Desde las serenas y fotogénicas calles azules de Chefchaouen hasta los palacios de Fez y Marrakech, cada detalle está pensado para el confort y la exclusividad. Disfruta de un atardecer dorado a lomos de dromedario sobre las dunas de Erg Chebbi, una cena privada a la luz de las velas en un campamento de lujo bajo el cielo estrellado del Sáhara y el encanto de riads tradicionales con encanto.',
      duration: '10 Días / 9 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $1,250/persona',
      highlights: [
        'Punto de encuentro: En tu hotel o aeropuerto de Casablanca.',
        'Lugar de inicio: Casablanca',
        'Lugar de finalización: Marrakech'
      ],
      inclusions: [
        'Visitas guiadas privadas en ciudades y entradas a monumentos',
        'Transporte privado confortable con chófer profesional',
        'Paseo en dromedario y noche en campamento de lujo en el desierto',
        'Servicio personalizado de bienvenida y asistencia en aeropuerto',
        'Cena romántica en un restaurante local de Marrakech con música tradicional',
        'Régimen de media pensión durante el circuito según itinerario',
        'Combustible y peajes de carretera incluidos'
      ],
      exclusions: [
        'Tasas aéreas y billetes de avión internacionales',
        'Almuerzos diarios no especificados',
        'Bebidas durante las comidas',
        'Vuelos internacionales de conexión',
        'Propinas y gratificaciones voluntarias',
        'Seguro médico y de viaje personal'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Llegada a Casablanca – Rabat',
          content: 'Bienvenida personalizada en el aeropuerto de Casablanca. Visita a la magnífica Mezquita Hassan II junto al mar y traslado a la capital real, Rabat, para contemplar la Torre Hassan y la Kasbah de los Oudayas. Alojamiento en un riad tradicional romántico.'
        },
        {
          day: 'Día 2',
          title: 'Rabat a Chefchaouen – La Ciudad Azul de Marruecos',
          content: 'Viaje a través de los verdes valles hacia las montañas del Rif hasta llegar a Chefchaouen. Tarde libre para pasear de la mano por sus callejones empedrados de intenso color azul y disfrutar de un té a la menta al atardecer en la plaza Uta el-Hammam.'
        },
        {
          day: 'Día 3',
          title: 'Chefchaouen – Meknes – Volubilis – Fez',
          content: 'Descenso hacia los vestigios romanos de Volubilis (UNESCO) con sus mosaicos mitológicos. Parada en Meknes ante la majestuosa puerta Bab El Mansour y llegada por la tarde a la histórica Fez para cenar en un elegante riad.'
        },
        {
          day: 'Día 4',
          title: 'Visita Guiada Histórica de la Ciudad de Fez',
          content: 'Día dedicado a descubrir la medina medieval de Fez con guía privado: mezquita y universidad Al Quaraouiyine, madrazas ornamentadas, las históricas curtidurías Chouara y talleres de artesanía tradicional.'
        },
        {
          day: 'Día 5',
          title: 'Fez – Ifrane – Medio Atlas – Midelt – Errachidia – Erfoud – Merzouga',
          content: 'Travesía hacia el sur por las montañas del Atlas, con paradas en Ifrane y el bosque de cedros de Azrou. Descenso por el palmeral del Ziz hasta las doradas dunas de Erg Chebbi en Merzouga. Recepción en el hotel con vistas a las dunas.'
        },
        {
          day: 'Día 6',
          title: 'Merzouga – Khamlia – Ruta del Desierto – Merzouga',
          content: 'Jornada de inmersión en el desierto: visita al pueblo de Khamlia para escuchar la conmovedora música Gnawa y recorrido 4x4 por oasis nómadas. Por la tarde, paseo en dromedario al atardecer hacia el campamento de lujo para una cena romántica a la luz de las velas.'
        },
        {
          day: 'Día 7',
          title: 'Merzouga – Rissani – Gargantas del Todra – Valle del Dades',
          content: 'Amanecer inolvidable sobre las dunas y desayuno. Salida hacia el zoco de Rissani y caminata por los espectaculares acantilados del Todra. Noche en un hotel con encanto en el Valle del Dades.'
        },
        {
          day: 'Día 8',
          title: 'Valle del Dades – Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlas – Marrakech',
          content: 'Ruta por la Carretera de las Mil Kasbahs y visita a la legendaria Kasbah de Ait Ben Haddou. Paso de alta montaña de Tizi n\'Tichka a través del Alto Atlas y llegada al atardecer a la mágica Marrakech.'
        },
        {
          day: 'Día 9',
          title: 'Explorando Marrakech – Visita Guiada de la Ciudad',
          content: 'Recorrido privado por los palacios y jardines de Marrakech: Palacio de la Bahía, Tumbas Saadíes, Jardines Majorelle y la bulliciosa plaza Jemaa el-Fna, culminando con una cena romántica especial.'
        },
        {
          day: 'Día 10',
          title: 'Traslado al Aeropuerto de Marrakech o Casablanca',
          content: 'Desayuno en el riad y traslado privado al aeropuerto de Marrakech Menara o al aeropuerto Mohammed V de Casablanca según tu plan de vuelo, poniendo fin a una luna de miel o escapada perfecta.'
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
          name: "Chefchaouen",
          day: "Día 3",
          subtitle: "Ciudad Azul",
          desc: "Atmósfera romántica en las montañas del Rif."
        },
        {
          number: 4,
          name: "Fez",
          day: "Días 4 y 5",
          subtitle: "Medina Histórica",
          desc: "Visita cultural guiada en Fez El Bali."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Día 6",
          subtitle: "Dunas Doradas",
          desc: "Campamento de lujo y música bajo las estrellas."
        },
        {
          number: 6,
          name: "Todra y Dades",
          day: "Día 7",
          subtitle: "Gargantas y Cañones",
          desc: "Acantilados del Todra y Valle del Dades."
        },
        {
          number: 7,
          name: "Ouarzazate",
          day: "Día 8",
          subtitle: "Ait Ben Haddou",
          desc: "Fortaleza histórica de barro (UNESCO)."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Días 9 y 10",
          subtitle: "Final Romántico",
          desc: "Palacios, zocos y cena especial de despedida."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/thumbnail.jpg",
          cap: "Paquete Romántico de 10 Días por Marruecos para Parejas",
          alt: "Paquete Romántico de 10 Días por Marruecos para Parejas – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-01.jpg",
          cap: "Arquitectura romántica de riad tradicional marroquí",
          alt: "Patio interior de riad con piscina y linternas marroquíes"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-02.jpg",
          cap: "Chefchaouen, callejones azules para pasear en pareja",
          alt: "Rincón romántico decorado en azul añil en Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-03.jpg",
          cap: "Atardecer en pareja sobre las dunas de Merzouga",
          alt: "Cielo dorado y sombras sobre las dunas de Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-04.jpg",
          cap: "Campamento bereber de lujo bajo las estrellas",
          alt: "Jaima prémium con terraza y ambiente a la luz de las velas"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-05.jpg",
          cap: "Paredes verticales en las Gargantas del Todra",
          alt: "Desfiladero rocoso y palmeral en las Gargantas del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-06.jpg",
          cap: "Ksar fortificado de Ait Ben Haddou",
          alt: "Paisaje panorámico de la Kasbah de Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-07.jpg",
          cap: "Jardines Majorelle y arquitectura art déco en Marrakech",
          alt: "Edificio azul cobalto y flora exótica en los Jardines Majorelle"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-08.jpg",
          cap: "Noche mágica en la plaza Jemaa el-Fna de Marrakech",
          alt: "Luces nocturnas y ambiente en la plaza Jemaa el-Fna"
        }
      ],
      faqs: []
    },
    it: {
      slug: '10-days-morocco-couple-tour',
      title: 'Pacchetto Romantico di 10 Giorni in Marocco per Coppie | Sahara Star Tours',
      shortTitle: 'Tour Romantico di 10 Giorni per Coppie',
      description: 'Viaggio privato e romantico di 10 giorni per coppie in Marocco: Casablanca, Chefchaouen, Fes, notte magica in campo di lusso a Merzouga e Marrakech.',
      aboutHtml: 'Ideato su misura per coppie in cerca di un viaggio intimo e ricco di fascino, questo itinerario privato di 10 giorni tocca i luoghi più romantici e suggestivi del Marocco. Dalle quiete viuzze dipinte d\'azzurro di Chefchaouen alle atmosfere senza tempo delle medine di Fes e Marrakech, ogni giornata è pensata per garantire privacy, comfort ed eccellenza. Vivi l\'emozione di un tramonto a dorso di dromedario sulle dune di Erg Chebbi, una cena a lume di candela sotto la volta stellata del Sahara e il calore di riad tradizionali di grande charme.',
      duration: '10 Giorni / 9 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $1,250/persona',
      highlights: [
        'Punto di incontro: Presso il tuo hotel o aeroporto a Casablanca.',
        'Luogo di partenza: Casablanca',
        'Luogo di arrivo: Marrakech'
      ],
      inclusions: [
        'Visite guidate private nelle città e ingressi ai monumenti principali',
        'Trasporto privato confortevole e climatizzato con autista professionale',
        'Trekking a dorso di dromedario e notte in campo tendato di lusso nel deserto',
        'Servizio personalizzato di accoglienza e assistenza aeroportuale',
        'Cena romantica in ristorante tipico a Marrakech con musica tradizionale',
        'Trattamento di mezza pensione durante il circuito come da programma',
        'Carburante e pedaggi autostradali inclusi'
      ],
      exclusions: [
        'Tasse aeroportuali e voli internazionali',
        'Pranzi non menzionati nel programma',
        'Bevande durante i pasti',
        'Voli di collegamento',
        'Mance e gratifiche a discrezione personale',
        'Assicurazione sanitaria e di viaggio personale'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Casablanca – Rabat',
          content: 'Accoglienza personalizzata all\'aeroporto di Casablanca. Visita alla spettacolare Moschea Hassan II sull\'oceano e trasferimento nella capitale Rabat per ammirare la Torre Hassan e la Kasbah degli Oudaïa. Pernottamento in un romantico riad tradizionale.'
        },
        {
          day: 'Giorno 2',
          title: 'Da Rabat a Chefchaouen – La Città Blu del Marocco',
          content: 'Viaggio tra le verdi vallate verso le montagne del Rif fino a Chefchaouen. Pomeriggio libero per passeggiare mano nella mano tra i vicoli blu indaco e sorseggiare un tè alla menta al tramonto in piazza Uta el-Hammam.'
        },
        {
          day: 'Giorno 3',
          title: 'Chefchaouen – Meknes – Volubilis – Fes',
          content: 'Visita ai resti archeologici romani di Volubilis (UNESCO) con i loro raffinati mosaici. Sosta a Meknes davanti alla porta Bab El Mansour e arrivo pomeridiano a Fes per una cena romantica in riad.'
        },
        {
          day: 'Giorno 4',
          title: 'Visita Guidata della Medina Storica di Fes',
          content: 'Intera giornata dedicata a Fes El Bali con guida privata: Università Al Quaraouiyine, madrase intarsiate, le storiche concerie Chouara e le botteghe tradizionali degli artigiani.'
        },
        {
          day: 'Giorno 5',
          title: 'Fes – Ifrane – Medio Atlante – Midelt – Errachidia – Erfoud – Merzouga',
          content: 'Viaggio verso sud oltre l\'Atlante, con soste a Ifrane e nella foresta di cedri di Azrou. Discesa lungo il palmeto dello Ziz fino alle dune dorate di Erg Chebbi a Merzouga. Sistemazione con vista sulle dune.'
        },
        {
          day: 'Giorno 6',
          title: 'Merzouga – Khamlia – Tour del Deserto – Merzouga',
          content: 'Esplorazione del deserto in 4x4, incontro con i musicisti Gnawa di Khamlia e villaggi nomadi. Nel pomeriggio, passeggiata sui dromedari al tramonto verso il campo tendato di lusso per una magica cena a lume di candela.'
        },
        {
          day: 'Giorno 7',
          title: 'Merzouga – Rissani – Gole del Todra – Valle del Dades',
          content: 'Alba indimenticabile tra le dune dorate e colazione. Visita al mercato di Rissani e passeggiata tra le pareti rocciose del Todra. Notte in hotel di charme nella Valle del Dades.'
        },
        {
          day: 'Giorno 8',
          title: 'Valle del Dades – Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlante – Marrakech',
          content: 'Strada delle Mille Kasbah e visita alla maestosa fortezza di Ait Ben Haddou (Patrimonio UNESCO). Valico montano di Tizi n\'Tichka e arrivo nel tardo pomeriggio a Marrakech.'
        },
        {
          day: 'Giorno 9',
          title: 'Alla Scoperta di Marrakech – Tour Guidato della Città',
          content: 'Visita privata ai palazzi e ai giardini di Marrakech: Palazzo Bahia, Tombe Saadiane, Giardini Majorelle e la celebre piazza Jemaa el-Fna, con cena speciale conclusiva.'
        },
        {
          day: 'Giorno 10',
          title: 'Trasferimento all\'Aeroporto di Marrakech o Casablanca',
          content: 'Colazione in riad e trasferimento privato all\'aeroporto di Marrakech Menara o Casablanca Mohammed V in base al volo di partenza, a conclusione di una fuga romantica indimenticabile.'
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
          name: "Chefchaouen",
          day: "Giorno 3",
          subtitle: "Città Blu",
          desc: "Atmosfera romantica tra i monti del Rif."
        },
        {
          number: 4,
          name: "Fes",
          day: "Giorni 4 e 5",
          subtitle: "Medina Storica",
          desc: "Tour culturale guidato a Fes El Bali."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorno 6",
          subtitle: "Dune Dorate",
          desc: "Campo di lusso e musica sotto le stelle."
        },
        {
          number: 6,
          name: "Todra e Dades",
          day: "Giorno 7",
          subtitle: "Gole e Canyon",
          desc: "Falesie del Todra e Valle del Dades."
        },
        {
          number: 7,
          name: "Ouarzazate",
          day: "Giorno 8",
          subtitle: "Ait Ben Haddou",
          desc: "Antica fortezza in terra cruda (UNESCO)."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Giorni 9 e 10",
          subtitle: "Finale Romantico",
          desc: "Palazzi, souk e cena speciale di commiato."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/thumbnail.jpg",
          cap: "Pacchetto Romantico di 10 Giorni in Marocco per Coppie",
          alt: "Pacchetto Romantico di 10 Giorni in Marocco per Coppie – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-01.jpg",
          cap: "Architettura romantica di un riad tradizionale marocchino",
          alt: "Corte interna di riad con piscina e lanterne marocchine"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-02.jpg",
          cap: "Chefchaouen, vicoli azzurri per passeggiate di coppia",
          alt: "Angolo romantico dipinto di blu indaco a Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-03.jpg",
          cap: "Tramonto di coppia sulle dune di Merzouga",
          alt: "Cielo dorato e ombre lunghe sulle dune di Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-04.jpg",
          cap: "Campo tendato berbero di lusso sotto le stelle",
          alt: "Tenda di lusso con salottino e atmosfera a lume di candela"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-05.jpg",
          cap: "Pareti verticali nelle Gole del Todra",
          alt: "Canyon roccioso e palmeto nelle Gole del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-06.jpg",
          cap: "Ksar fortificato di Ait Ben Haddou",
          alt: "Veduta panoramica della Kasbah di Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-07.jpg",
          cap: "Giardini Majorelle e architettura art déco a Marrakech",
          alt: "Padiglione blu cobalto e piante esotiche ai Giardini Majorelle"
        },
        {
          src: "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-08.jpg",
          cap: "Atmosfera serale in piazza Jemaa el-Fna a Marrakech",
          alt: "Luci serali e folla vivace nella piazza Jemaa el-Fna"
        }
      ],
      faqs: []
    }
  },

  // Tour 7: 10-days-imperial-cities-tour
  {
    slug: '10-days-imperial-cities-tour',
    es: {
      slug: '10-days-imperial-cities-tour',
      title: 'Expedición de 10 Días por las Ciudades Imperiales y el Sáhara | Sahara Star Tours',
      shortTitle: 'Expedición de 10 Días Ciudades Imperiales y Sáhara',
      description: 'Gran circuito de 10 días desde Casablanca: Rabat, Chefchaouen, Volubilis, Fez, dunas de Erg Chebbi con noche en jaima de lujo, Todra, Marrakech y Essaouira.',
      aboutHtml: 'Nuestra expedición de 10 días por las Ciudades Imperiales y el Desierto del Sáhara es el itinerario definitivo para quienes desean explorar Marruecos en profundidad. Descubre los monumentos de Casablanca y Rabat, piérdete en el encanto azul de Chefchaouen y viaja en el tiempo en Volubilis y la medina de Fez. Cruza el Atlas hacia el mar de dunas doradas de Erg Chebbi para dormir en un campamento de lujo bajo el cielo estrellado. La ruta prosigue por los cañones del Todra y Dades, la fortaleza de Ait Ben Haddou, los palacios de Marrakech y concluye junto a la brisa marina y las murallas de Essaouira.',
      duration: '10 Días / 9 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $1,290/persona',
      highlights: [
        'Explora las antiguas medinas declaradas Patrimonio de la Humanidad por la UNESCO y sus zocos',
        'Cruza las majestuosas montañas del Alto Atlas a través del puerto panorámico de Tizi n\'Tichka',
        'Visita la legendaria Kasbah de Ait Ben Haddou, escenario de grandes superproducciones de cine',
        'Disfruta de un auténtico paseo en dromedario al atardecer sobre las dunas doradas del Sáhara',
        'Pasa una noche mágica en campamento de lujo bajo las estrellas en el desierto de Erg Chebbi',
        'Descubre oasis sobrecogedores, espectaculares gargantas (Todra y Dades) y valles fértiles',
        'Saborea la auténtica gastronomía marroquí y la hospitalidad tradicional bereber'
      ],
      inclusions: [
        'Recogida y regreso en tu aeropuerto, hotel o riad',
        'Transporte privado en moderno 4x4 o monovolumen con aire acondicionado',
        'Chófer profesional y guías locales oficiales acreditados',
        'Alojamiento en riads y hoteles tradicionales de alta valoración',
        '1 noche en campamento de lujo en el desierto del Sáhara (jaima privada con baño ensuite)',
        'Paseos en dromedario al atardecer y amanecer en el desierto (un dromedario por persona)',
        'Desayunos diarios y cenas especificadas en el itinerario',
        'Impuestos locales y suplementos de combustible incluidos'
      ],
      exclusions: [
        'Billetes de avión internacionales',
        'Seguro médico y de viaje personal',
        'Almuerzos y refrigerios de mediodía',
        'Bebidas y consumiciones durante las comidas',
        'Entradas a monumentos históricos y museos',
        'Propinas y gratificaciones para guías y chóferes',
        'Gastos personales y compras de recuerdos'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Llegada – Casablanca / Rabat',
          content: 'Llegada a Casablanca y visita a la majestuosa Mezquita Hassan II frente al Atlántico. Continuación hacia la capital, Rabat, para admirar la Torre Hassan y la Kasbah de los Oudayas. Alojamiento en riad.'
        },
        {
          day: 'Día 2',
          title: 'Rabat – Chefchaouen (La Ciudad Azul de Marruecos)',
          content: 'Viaje a través de los paisajes del Rif hacia Chefchaouen. Tarde libre para recorrer sus encantadoras calles azules, plazas pintorescas y disfrutar de la tranquilidad de la montaña. Noche en Chefchaouen.'
        },
        {
          day: 'Día 3',
          title: 'Chefchaouen – Meknes – Volubilis – Fez',
          content: 'Exploración de las ruinas romanas de Volubilis (UNESCO) y sus mosaicos. Parada en Meknes para contemplar la puerta monumental Bab El Mansour y traslado vespertino a Fez. Alojamiento en riad.'
        },
        {
          day: 'Día 4',
          title: 'Fez – Ifrane – Azrou – Midelt – Gargantas del Ziz – Erfoud – Desierto de Merzouga',
          content: 'Ruta hacia el sur atravesando Ifrane, los bosques de cedros de Azrou y el Valle del Ziz. Por la tarde llegaremos a Erg Chebbi para montar en dromedario y cenar en nuestro campamento de lujo bajo las estrellas.'
        },
        {
          day: 'Día 5',
          title: 'Merzouga – Excursión por el Desierto en 4x4',
          content: 'Día completo de exploración del desierto en vehículo 4x4: visita al pueblo de Khamlia para escuchar música tradicional Gnawa, minas de M\'Fis, oasis y familias nómadas. Segunda noche mágica en el desierto.'
        },
        {
          day: 'Día 6',
          title: 'Merzouga – Erfoud – Gargantas del Todra – Boumalne Dades',
          content: 'Amanecer sobre las dunas y salida hacia los talleres de fósiles de Erfoud. Paseo entre los colosales cañones de las Gargantas del Todra y continuación hasta el Valle del Dades para cenar y descansar.'
        },
        {
          day: 'Día 7',
          title: 'Boumalne Dades – Ouarzazate – Ait Ben Haddou – Marrakech',
          content: 'Ruta de las Mil Kasbahs pasando por el Valle de las Rosas y Ouarzazate. Visita al emblemático ksar de Ait Ben Haddou (UNESCO). Travesía del Alto Atlas por el puerto de Tizi n\'Tichka y llegada a Marrakech.'
        },
        {
          day: 'Día 8',
          title: 'Marrakech – Visita de la Ciudad Roja',
          content: 'Jornada dedicada a explorar los monumentos de Marrakech con guía local: la Mezquita Koutoubia, el Palacio de la Bahía, las Tumbas Saadíes y los zocos, culminando en la vibrante plaza Jemaa el-Fna.'
        },
        {
          day: 'Día 9',
          title: 'Marrakech – Essaouira',
          content: 'Excursión hacia la costa atlántica hasta la ciudad fortificada de Essaouira (antigua Mogador). Tiempo para pasear por su medina marinera, puerto pesquero y murallas históricas con cañones de bronce.'
        },
        {
          day: 'Día 10',
          title: 'Essaouira – Aeropuerto de Casablanca',
          content: 'Desayuno junto al mar y traslado panorámico por la costa hacia el aeropuerto internacional Mohammed V de Casablanca para tu vuelo de regreso, culminando un viaje excepcional.'
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
          subtitle: "Ciudad Azul",
          desc: "Callejuelas del Rif y ambiente relajado."
        },
        {
          number: 4,
          name: "Fez",
          day: "Día 4",
          subtitle: "Medina UNESCO",
          desc: "Visita cultural histórica en Fes El Bali."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Días 5 y 6",
          subtitle: "Dunas y Campamento de Lujo",
          desc: "Erg Chebbi, música Gnawa y noche estrellada."
        },
        {
          number: 6,
          name: "Todra y Dades",
          day: "Día 7",
          subtitle: "Cañones",
          desc: "Gargantas del Todra y formaciones del Dades."
        },
        {
          number: 7,
          name: "Ait Ben Haddou",
          day: "Día 8",
          subtitle: "Fortaleza de Cine",
          desc: "Kasbah fortificada y travesía del Atlas."
        },
        {
          number: 8,
          name: "Essaouira y Marrakech",
          day: "Días 9 y 10",
          subtitle: "Atlántico y Despedida",
          desc: "Marrakech, murallas de Essaouira y aeropuerto."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/thumbnail.webp",
          cap: "Circuito de 10 Días Ciudades Imperiales y Desierto de Marruecos",
          alt: "Circuito de 10 Días Ciudades Imperiales y Desierto de Marruecos – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-01.jpg",
          cap: "Mezquita Hassan II en la costa atlántica de Casablanca",
          alt: "Explanada y minarete de la Mezquita Hassan II de Casablanca"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-02.jpg",
          cap: "Torre Hassan y columnas históricas en Rabat",
          alt: "Alminar de la Torre Hassan y restos de columnas en Rabat"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-03.png",
          cap: "Medina azul de Chefchaouen en las montañas del Rif",
          alt: "Fachadas y puertas azules en una callejuela de Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-04.jpg",
          cap: "Ruinas romanas y arco monumental de Volubilis",
          alt: "Columnas romanas y arco triunfal en el yacimiento de Volubilis"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-05.jpg",
          cap: "Arquitectura y mosaicos en una madraza histórica de Fez",
          alt: "Patio con fuentes y azulejos zellige en la medina de Fez"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-06.jpg",
          cap: "Caravana de dromedarios cruzando las dunas de Erg Chebbi",
          alt: "Paseo en dromedario al atardecer sobre las dunas de Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-07.jpg",
          cap: "Campamento bereber prémium bajo el cielo nocturno del desierto",
          alt: "Jaimas de lujo iluminadas entre las dunas de Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-08.jpg",
          cap: "Paredes verticales de roca caliza en las Gargantas del Todra",
          alt: "Cañón rocoso con río fluyendo en las Gargantas del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-09.jpg",
          cap: "Kasbah fortificada de Ait Ben Haddou declarada por la UNESCO",
          alt: "Fortaleza tradicional de adobe y torres almenadas en Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-10.jpg",
          cap: "Puerto montañoso de Tizi n'Tichka en el Alto Atlas",
          alt: "Carretera sinuosa y cordilleras del Alto Atlas marroquí"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-11.png",
          cap: "Palacio de la Bahía con patios ajardinados en Marrakech",
          alt: "Salón con artesonado de madera y azulejos en el Palacio de la Bahía"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-12.jpg",
          cap: "Murallas marítimas y cañones de bronce en Essaouira",
          alt: "Skala de la medina de Essaouira con vista a las olas del océano"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-13.jpg",
          cap: "Puerto pesquero tradicional con barcas azules en Essaouira",
          alt: "Barcas de madera azul en el histórico puerto de Essaouira"
        }
      ],
      faqs: []
    },
    it: {
      slug: '10-days-imperial-cities-tour',
      title: 'Spedizione di 10 Giorni Città Imperiali e Sahara | Sahara Star Tours',
      shortTitle: 'Spedizione di 10 Giorni Città Imperiali e Sahara',
      description: 'Grande tour di 10 giorni da Casablanca: Rabat, Chefchaouen, Volubilis, Fes, dune di Erg Chebbi con campo di lusso, Todra, Marrakech ed Essaouira.',
      aboutHtml: 'La nostra spedizione di 10 giorni tra le Città Imperiali e il Deserto del Sahara è l\'itinerario ideale per chi desidera conoscere il Marocco in ogni sua sfumatura. Ammira i monumenti iconici di Casablanca e Rabat, lasciati incantare dai vicoli indaco di Chefchaouen e viaggia indietro nel tempo a Volubilis e nell\'antica medina di Fes. Valica l\'Atlante per raggiungere le dune dorate di Erg Chebbi e pernottare in un campo tendato di lusso. Il viaggio continua attraverso i canyon del Todra e del Dades, la storica Kasbah di Ait Ben Haddou, i palazzi di Marrakech e si conclude tra la brezza dell\'Atlantico ed Essaouira.',
      duration: '10 Giorni / 9 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $1,290/persona',
      highlights: [
        'Esplora le antiche medine Patrimonio Mondiale dell\'UNESCO e i loro souk',
        'Attraversa le maestose vette dell\'Alto Atlante lungo il valico panoramico di Tizi n\'Tichka',
        'Visita la leggendaria Kasbah di Ait Ben Haddou, set di grandi produzioni cinematografiche',
        'Vivi un\'autentica cammellata al tramonto sulle dune dorate del Sahara',
        'Trascorri una notte magica in campo tendato di lusso sotto le stelle a Erg Chebbi',
        'Scopri oasi spettacolari, gole suggestive (Todra e Dades) e vallate verdeggianti',
        'Gusta la cucina tradizionale marocchina e la calorosa ospitalità berbera'
      ],
      inclusions: [
        'Prelievo e rientro in aeroporto, hotel o riad',
        'Trasporto privato in veicolo moderno 4x4 o minivan con aria condizionata',
        'Autista professionale e guide locali autorizzate per le visite storiche',
        'Pernottamenti in riad e hotel tradizionali di categoria superiore',
        '1 notte in campo tendato di lusso nel deserto del Sahara (tenda privata ensuite)',
        'Passeggiate in dromedario al tramonto e all\'alba sulle dune (un dromedario per persona)',
        'Colazioni quotidiane e cene menzionate nel programma',
        'Tasse locali e supplementi carburante inclusi'
      ],
      exclusions: [
        'Biglietti aerei internazionali',
        'Assicurazione sanitaria e di viaggio personale',
        'Pranzi e spuntini di mezzogiorno',
        'Bevande durante i pasti',
        'Ingressi ai monumenti storici e musei',
        'Mance per guide locali e autisti',
        'Spese personali e souvenir'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo – Casablanca / Rabat',
          content: 'Arrivo a Casablanca e visita alla splendida Moschea Hassan II a ridosso dell\'Atlantico. Proseguimento per Rabat per ammirare la Torre Hassan e la Kasbah degli Oudaïa. Pernottamento in riad.'
        },
        {
          day: 'Giorno 2',
          title: 'Rabat – Chefchaouen (La Città Blu del Marocco)',
          content: 'Viaggio verso nord tra i monti del Rif fino a Chefchaouen. Pomeriggio a disposizione per perdersi nei suggestivi vicoli azzurri, nelle piazzette e nel belvedere panoramico. Notte a Chefchaouen.'
        },
        {
          day: 'Giorno 3',
          title: 'Chefchaouen – Meknes – Volubilis – Fes',
          content: 'Visita ai superbi mosaici romani di Volubilis (UNESCO). Sosta a Meknes davanti alla porta monumentale Bab El Mansour e arrivo pomeridiano a Fes per il pernottamento in riad.'
        },
        {
          day: 'Giorno 4',
          title: 'Fes – Ifrane – Azrou – Midelt – Gole dello Ziz – Erfoud – Deserto di Merzouga',
          content: 'Direzione sud attraverso Ifrane, i boschi di cedri di Azrou e la Valle dello Ziz. Arrivo serale a Erg Chebbi, cavalcata in dromedario verso il campo tendato di lusso e cena sotto la volta celeste.'
        },
        {
          day: 'Giorno 5',
          title: 'Merzouga – Escursione nel Deserto in 4x4',
          content: 'Giornata interamente dedicata all\'esplorazione del deserto in 4x4: villaggio di Khamlia con concerto di musica spirituale Gnawa, miniere storiche di M\'Fis e famiglie nomadi. Seconda notte nel deserto.'
        },
        {
          day: 'Giorno 6',
          title: 'Merzouga – Erfoud – Gole del Todra – Boumalne Dades',
          content: 'Alba spettacolare tra le dune e partenza verso Erfoud. Passeggiata nelle maestose Gole del Todra tra falesie a strapiombo e prosecuzione per la Valle del Dades per la cena e il riposo.'
        },
        {
          day: 'Giorno 7',
          title: 'Boumalne Dades – Ouarzazate – Ait Ben Haddou – Marrakech',
          content: 'Attraversamento della Valle delle Rose e della città di Ouarzazate. Visita al celebre ksar di Ait Ben Haddou (Patrimonio UNESCO). Valico dell\'Alto Atlante a Tizi n\'Tichka e arrivo a Marrakech.'
        },
        {
          day: 'Giorno 8',
          title: 'Marrakech – Visita della Città Rossa',
          content: 'Tour guidato dei tesori di Marrakech con guida autorizzata: Koutoubia, Palazzo Bahia, Tombe Saadiane e i souk degli artigiani, culminando nella vivacissima piazza Jemaa el-Fna.'
        },
        {
          day: 'Giorno 9',
          title: 'Marrakech – Essaouira',
          content: 'Escursione verso la costa oceanica fino a Essaouira (l\'antica Mogador). Tempo per esplorare la medina marinara, il porto dei pescatori e i bastioni affacciati sulle onde dell\'Atlantico.'
        },
        {
          day: 'Giorno 10',
          title: 'Essaouira – Aeroporto di Casablanca',
          content: 'Colazione vista mare e trasferimento panoramico verso l\'aeroporto Mohammed V di Casablanca in tempo per il volo di rientro, a coronamento di un viaggio indimenticabile.'
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
          subtitle: "Città Blu",
          desc: "Scorci incantevoli tra le vette del Rif."
        },
        {
          number: 4,
          name: "Fes",
          day: "Giorno 4",
          subtitle: "Medina UNESCO",
          desc: "Tour culturale storico a Fes El Bali."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorni 5 e 6",
          subtitle: "Dune e Campo di Lusso",
          desc: "Erg Chebbi, musica Gnawa e notte stellata."
        },
        {
          number: 6,
          name: "Todra e Dades",
          day: "Giorno 7",
          subtitle: "Canyon",
          desc: "Gole del Todra e formazioni del Dades."
        },
        {
          number: 7,
          name: "Ait Ben Haddou",
          day: "Giorno 8",
          subtitle: "Fortezza del Cinema",
          desc: "Kasbah fortificata e valico dell'Atlante."
        },
        {
          number: 8,
          name: "Essaouira e Marrakech",
          day: "Giorni 9 e 10",
          subtitle: "Atlantico e Rientro",
          desc: "Marrakech, bastioni di Essaouira e aeroporto."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/thumbnail.webp",
          cap: "Tour di 10 Giorni Città Imperiali e Deserto del Marocco",
          alt: "Tour di 10 Giorni Città Imperiali e Deserto del Marocco – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-01.jpg",
          cap: "Moschea Hassan II affacciata sull'Atlantico a Casablanca",
          alt: "Spianata monumentale e minareto della Moschea Hassan II a Casablanca"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-02.jpg",
          cap: "Torre Hassan e colonne storiche a Rabat",
          alt: "Il minareto della Torre Hassan e le colonne a cielo aperto a Rabat"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-03.png",
          cap: "Medina azzurra di Chefchaouen tra i monti del Rif",
          alt: "Portoni in legno e facciate dipinte di blu a Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-04.jpg",
          cap: "Rovine romane e arco di trionfo a Volubilis",
          alt: "Antiche colonne e arco trionfale nel parco archeologico di Volubilis"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-05.jpg",
          cap: "Architettura e mosaici in un'antica madrasa di Fes",
          alt: "Cortile moresco con fontana e zellige intarsiati a Fes"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-06.jpg",
          cap: "Carovana di dromedari che solca le dune di Erg Chebbi",
          alt: "Passeggiata sui dromedari al calar del sole a Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-07.jpg",
          cap: "Campo tendato berbero di lusso sotto il cielo del deserto",
          alt: "Tende illuminate tra le creste sabbiose di Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-08.jpg",
          cap: "Falesie verticali calcaree nelle Gole del Todra",
          alt: "Fiume e canyon roccioso imponente nelle Gole del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-09.jpg",
          cap: "Kasbah fortificata di Ait Ben Haddou Patrimonio UNESCO",
          alt: "Torri merlate e architettura in adobe ad Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-10.jpg",
          cap: "Passo montano di Tizi n'Tichka sull'Alto Atlante",
          alt: "Strada panoramica a tornanti tra le cime dell'Alto Atlante"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-11.png",
          cap: "Palazzo Bahia con giardini e sale decorate a Marrakech",
          alt: "Stucchi e soffitti in legno intagliato al Palazzo Bahia"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-12.jpg",
          cap: "Bastioni sul mare e cannoni storici a Essaouira",
          alt: "La Skala della Kasbah di Essaouira a guardia dell'Oceano Atlantico"
        },
        {
          src: "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-13.jpg",
          cap: "Caratteristico porto di pesca con barche blu a Essaouira",
          alt: "Tradizionali barche azzurre dei pescatori nel porto di Essaouira"
        }
      ],
      faqs: []
    }
  },

  // Tour 8: 12-days-tour-from-casablanca
  {
    slug: '12-days-tour-from-casablanca',
    es: {
      slug: '12-days-tour-from-casablanca',
      title: 'Gran Circuito de 12 Días por Marruecos y Descubrimiento del Sáhara | Sahara Star Tours',
      shortTitle: 'Gran Circuito de 12 Días desde Casablanca',
      description: 'Viaje privado de 12 días por Marruecos: Casablanca, Rabat, Chefchaouen con día libre, Fez, dunas de Merzouga en jaima de lujo, Todra, Marrakech y Essaouira.',
      aboutHtml: 'El Gran Circuito de 12 Días por Marruecos es un viaje privado extraordinario y completo, diseñado para viajar a un ritmo relajado y enriquecedor. Incluye una jornada libre completa en la idílica Chefchaouen para perderse por sus calles azules, visitas con guías locales oficiales en las ciudades imperiales de Fez y Marrakech, y dos noches memorables en el desierto del Sáhara con campamento prémium en las dunas de Erg Chebbi. Atraviesa las Gargantas del Todra, el Valle del Dades y la Kasbah de Ait Ben Haddou antes de relajarte junto al Atlántico en Essaouira.',
      duration: '12 Días / 11 Noches',
      startingFrom: 'Casablanca',
      price: 'Desde $1,450/persona',
      highlights: [
        'Punto de encuentro: En tu hotel o aeropuerto de Casablanca.',
        'Lugar de inicio: Casablanca',
        'Lugar de finalización: Casablanca o Marrakech'
      ],
      inclusions: [
        'Transporte en vehículo privado 4x4 o monovolumen con aire acondicionado',
        'Tarifas y honorarios de guías locales en las ciudades imperiales',
        'Chófer/guía profesional de habla española durante todo el circuito',
        '11 noches de alojamiento en riads tradicionales y kasbahs con encanto (desayuno y cena)',
        'Una noche en jaimas bereberes tradicionales de lujo en el desierto (media pensión)',
        'Paseo en dromedario (un dromedario por cada viajero)'
      ],
      exclusions: [
        'Almuerzos diarios',
        'Propinas y gratificaciones',
        'Bebidas y consumiciones personales',
        'Billetes de avión internacionales'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Llegada a Casablanca – Rabat',
          content: 'Llegada a Casablanca y visita guiada a la emblemática Mezquita Hassan II sobre el océano. Continuación hacia Rabat para visitar la Torre Hassan, el Mausoleo de Mohammed V y la Kasbah de los Oudayas. Noche en riad.'
        },
        {
          day: 'Día 2',
          title: 'Rabat a Chefchaouen',
          content: 'Viaje a través del Rif hacia Chefchaouen. Tarde para disfrutar de las primeras vistas panorámicas de la Ciudad Azul y cenar en la plaza central.'
        },
        {
          day: 'Día 3',
          title: 'Día Libre en Chefchaouen para Explorar la Ciudad',
          content: 'Día entero a tu propio ritmo para callejear por la medina azul, descubrir talleres de tejedores y carpinteros, subir a la mezquita española para el atardecer o relajarse en una terraza.'
        },
        {
          day: 'Día 4',
          title: 'Chefchaouen – Meknes – Volubilis – Fez',
          content: 'Salida hacia las ruinas romanas de Volubilis con sus mosaicos conservados. Parada en Meknes ante Bab El Mansour y llegada por la tarde a Fez para alojarnos en un riad tradicional.'
        },
        {
          day: 'Día 5',
          title: 'Visita Guiada Histórica de Fez',
          content: 'Jornada completa con guía oficial recorriendo Fez El Bali: Universidad Al Quaraouiyine, Madraza Bou Inania, curtidurías Chouara y el barrio de los artesanos.'
        },
        {
          day: 'Día 6',
          title: 'Fez – Ifrane – Medio Atlas – Midelt – Errachidia – Erfoud – Merzouga',
          content: 'Travesía del Atlas por Ifrane y el bosque de cedros de Azrou. Descenso por el Valle del Ziz hasta llegar al pie de las dunas de Erg Chebbi en Merzouga.'
        },
        {
          day: 'Día 7',
          title: 'Merzouga – Khamlia – Ruta del Desierto – Merzouga',
          content: 'Excursión 4x4 por las dunas, visita al pueblo de Khamlia para escuchar música Gnawa y paseo en dromedario al atardecer hacia el campamento de lujo para cenar bajo las estrellas.'
        },
        {
          day: 'Día 8',
          title: 'Merzouga – Rissani – Gargantas del Todra – Valle del Dades',
          content: 'Amanecer en las dunas y salida hacia el mercado tradicional de Rissani. Caminata bajo los impresionantes cañones del Todra y noche en el Valle del Dades.'
        },
        {
          day: 'Día 9',
          title: 'Valle del Dades – Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlas – Marrakech',
          content: 'Ruta por la Carretera de las Mil Kasbahs y visita al ksar fortificado de Ait Ben Haddou (UNESCO). Paso del Alto Atlas por Tizi n\'Tichka y llegada a Marrakech.'
        },
        {
          day: 'Día 10',
          title: 'Explorando Marrakech – Visita Guiada de la Ciudad',
          content: 'Visita guiada de los monumentos principales de Marrakech: Palacio de la Bahía, Tumbas Saadíes, Koutoubia, zocos y la animada plaza Jemaa el-Fna.'
        },
        {
          day: 'Día 11',
          title: 'Excursión de un Día a Essaouira desde Marrakech',
          content: 'Excursión a la ciudad costera de Essaouira. Paseo por su medina marinera declarada por la UNESCO, murallas de cañones frente al mar y puerto pesquero tradicional.'
        },
        {
          day: 'Día 12',
          title: 'Traslado al Aeropuerto de Marrakech o Casablanca',
          content: 'Desayuno y traslado privado al aeropuerto de Marrakech Menara o Casablanca Mohammed V para tu vuelo de regreso, concluyendo este gran viaje.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Día 1",
          subtitle: "Llegada",
          desc: "Mezquita Hassan II y ruta hacia Rabat."
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
          day: "Días 3 y 4",
          subtitle: "Ciudad Azul",
          desc: "Día libre completo para disfrutar de la medina."
        },
        {
          number: 4,
          name: "Fez",
          day: "Días 5 y 6",
          subtitle: "Medina Histórica",
          desc: "Volubilis y tour cultural completo en Fez."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Días 7 y 8",
          subtitle: "Erg Chebbi",
          desc: "Dromedarios, campamento y música Gnawa."
        },
        {
          number: 6,
          name: "Todra y Dades",
          day: "Día 9",
          subtitle: "Cañones",
          desc: "Gargantas del Todra y Valle del Dades."
        },
        {
          number: 7,
          name: "Ait Ben Haddou",
          day: "Día 10",
          subtitle: "UNESCO Kasbah",
          desc: "Fortaleza histórica y puerto de Tizi n'Tichka."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Día 11",
          subtitle: "Ciudad Roja",
          desc: "Palacios, zocos y plaza Jemaa el-Fna."
        },
        {
          number: 9,
          name: "Essaouira",
          day: "Día 12",
          subtitle: "Costa Atlántica",
          desc: "Excursión a la medina y puerto pesquero."
        },
        {
          number: 10,
          name: "Salida",
          day: "Día 12",
          subtitle: "Despedida",
          desc: "Traslado a Marrakech o Casablanca."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/thumbnail.jpg",
          cap: "Gran Circuito de 12 Días por Marruecos desde Casablanca",
          alt: "Gran Circuito de 12 Días por Marruecos desde Casablanca – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-01.jpg",
          cap: "Chefchaouen, calle empedrada teñida de azul",
          alt: "Rincón tranquilo en la medina azul de Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-02.jpg",
          cap: "Mosaicos y ruinas romanas en Volubilis",
          alt: "Yacimiento arqueológico romano de Volubilis"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-03.jpg",
          cap: "Curtidurías medievales de Chouara en Fez",
          alt: "Pozos de tinte tradicionales en la medina de Fez"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-04.jpg",
          cap: "Caravana de dromedarios al atardecer en Merzouga",
          alt: "Paseo en dromedario sobre las dunas doradas de Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-05.jpg",
          cap: "Campamento bereber de lujo en el Sáhara",
          alt: "Jaimas de lujo iluminadas en el desierto de Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-06.jpg",
          cap: "Kasbah fortificada de Ait Ben Haddou (UNESCO)",
          alt: "Paisaje histórico de la Kasbah de Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-07.jpg",
          cap: "Murallas marítimas y océano en Essaouira",
          alt: "Fortificación y costa atlántica en Essaouira"
        }
      ],
      faqs: []
    },
    it: {
      slug: '12-days-tour-from-casablanca',
      title: 'Gran Tour di 12 Giorni in Marocco e Scoperta del Sahara | Sahara Star Tours',
      shortTitle: 'Gran Tour di 12 Giorni da Casablanca',
      description: 'Viaggio privato di 12 giorni in Marocco: Casablanca, Rabat, Chefchaouen con giornata libera, Fes, dune di Merzouga in campo di lusso, Todra, Marrakech ed Essaouira.',
      aboutHtml: 'Il Gran Tour di 12 Giorni in Marocco è un viaggio privato esclusivo e completo, ideale per chi desidera viaggiare con un ritmo rilassato e approfondito. Include un\'intera giornata libera nell\'incantevole Chefchaouen per esplorare con calma i vicoli azzurri, visite con guide locali certificate nelle città imperiali di Fes e Marrakech, e due memorabili notti nel Sahara con pernottamento in campo tendato di lusso a Erg Chebbi. Attraversa le Gole del Todra, la Valle del Dades e la Kasbah di Ait Ben Haddou prima di concludere sulle rive dell\'Atlantico a Essaouira.',
      duration: '12 Giorni / 11 Notti',
      startingFrom: 'Casablanca',
      price: 'Da $1,450/persona',
      highlights: [
        'Punto di incontro: Presso il tuo hotel o aeroporto a Casablanca.',
        'Luogo di partenza: Casablanca',
        'Luogo di arrivo: Casablanca o Marrakech'
      ],
      inclusions: [
        'Trasporto in veicolo privato 4x4 o minivan con aria condizionata',
        'Costi e onorari delle guide locali ufficiali nelle città imperiali',
        'Autista/guida professionale parlante italiano per l\'intero circuito',
        '11 pernottamenti in riad tradizionali e kasbah di charme (colazione e cena)',
        'Una notte in campo tendato berbero di lusso nel deserto (mezza pensione)',
        'Passeggiata a dorso di dromedario (un dromedario per ciascun partecipante)'
      ],
      exclusions: [
        'Pranzi quotidiani',
        'Mance e gratifiche',
        'Bevande e consumazioni personali',
        'Biglietti aerei internazionali'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Arrivo a Casablanca – Rabat',
          content: 'Arrivo a Casablanca e visita alla monumentale Moschea Hassan II sull\'oceano. Proseguimento per Rabat per ammirare la Torre Hassan, il Mausoleo di Mohammed V e la Kasbah degli Oudaïa. Notte in riad.'
        },
        {
          day: 'Giorno 2',
          title: 'Da Rabat a Chefchaouen',
          content: 'Viaggio attraverso il Rif verso Chefchaouen. Arrivo nel pomeriggio per iniziare a scoprire gli angoli della Città Blu e cenare nella piazza centrale.'
        },
        {
          day: 'Giorno 3',
          title: 'Giornata Libera a Chefchaouen',
          content: 'Intera giornata a disposizione per esplorare la medina indaco, ammirare le botteghe artigiane, salire alla moschea spagnola al tramonto o rilassarsi nei caffè all\'aperto.'
        },
        {
          day: 'Giorno 4',
          title: 'Chefchaouen – Meknes – Volubilis – Fes',
          content: 'Partenza per le rovine romane di Volubilis con i loro splendidi mosaici. Breve sosta a Meknes davanti a Bab El Mansour e arrivo a Fes per la sistemazione in riad.'
        },
        {
          day: 'Giorno 5',
          title: 'Visita Guidata Storica di Fes',
          content: 'Intera giornata con guida locale alla scoperta di Fes El Bali: Università Al Quaraouiyine, Medersa Bou Inania, storiche concerie Chouara e souk tradizionali.'
        },
        {
          day: 'Giorno 6',
          title: 'Fes – Ifrane – Medio Atlante – Midelt – Errachidia – Erfoud – Merzouga',
          content: 'Valico dell\'Atlante attraverso Ifrane e i boschi di cedri di Azrou. Discesa lungo la Valle dello Ziz fino alle dune di Erg Chebbi a Merzouga.'
        },
        {
          day: 'Giorno 7',
          title: 'Merzouga – Khamlia – Tour del Deserto – Merzouga',
          content: 'Escursione in 4x4 nel deserto, visita al villaggio di Khamlia per la musica Gnawa e cammellata al tramonto verso il campo tendato di lusso per la cena sotto le stelle.'
        },
        {
          day: 'Giorno 8',
          title: 'Merzouga – Rissani – Gole del Todra – Valle del Dades',
          content: 'Alba magica sulle dune e partenza per il mercato carovaniero di Rissani. Camminata tra le imponenti gole del Todra e pernottamento nella Valle del Dades.'
        },
        {
          day: 'Giorno 9',
          title: 'Valle del Dades – Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Alto Atlante – Marrakech',
          content: 'Strada delle Mille Kasbah e visita allo ksar di Ait Ben Haddou (Patrimonio UNESCO). Attraversamento dell\'Alto Atlante a Tizi n\'Tichka e arrivo a Marrakech.'
        },
        {
          day: 'Giorno 10',
          title: 'Alla Scoperta di Marrakech – Tour Guidato della Città',
          content: 'Tour guidato dei tesori di Marrakech: Palazzo Bahia, Tombe Saadiane, Moschea Koutoubia, souk e la celeberrima piazza Jemaa el-Fna.'
        },
        {
          day: 'Giorno 11',
          title: 'Escursione a Essaouira da Marrakech',
          content: 'Gita in giornata verso la costa atlantica a Essaouira. Passeggiata nella medina marinara dell\'UNESCO, sui bastioni con i cannoni storici e nel porto dei pescatori.'
        },
        {
          day: 'Giorno 12',
          title: 'Trasferimento all\'Aeroporto di Marrakech o Casablanca',
          content: 'Colazione e trasferimento privato all\'aeroporto di Marrakech Menara o Casablanca Mohammed V in tempo per il volo di rientro.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Casablanca",
          day: "Giorno 1",
          subtitle: "Arrivo",
          desc: "Moschea Hassan II e rotta verso Rabat."
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
          day: "Giorni 3 e 4",
          subtitle: "Città Blu",
          desc: "Intera giornata libera per vivere la medina."
        },
        {
          number: 4,
          name: "Fes",
          day: "Giorni 5 e 6",
          subtitle: "Medina Storica",
          desc: "Volubilis e tour culturale completo a Fes."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorni 7 e 8",
          subtitle: "Erg Chebbi",
          desc: "Dromedari, campo di lusso e musica Gnawa."
        },
        {
          number: 6,
          name: "Todra e Dades",
          day: "Giorno 9",
          subtitle: "Canyon",
          desc: "Gole del Todra e Valle del Dades."
        },
        {
          number: 7,
          name: "Ait Ben Haddou",
          day: "Giorno 10",
          subtitle: "UNESCO Kasbah",
          desc: "Fortezza storica e valico di Tizi n'Tichka."
        },
        {
          number: 8,
          name: "Marrakech",
          day: "Giorno 11",
          subtitle: "Città Rossa",
          desc: "Palazzi, souk e piazza Jemaa el-Fna."
        },
        {
          number: 9,
          name: "Essaouira",
          day: "Giorno 12",
          subtitle: "Costa Atlantica",
          desc: "Escursione nella medina e nel porto storico."
        },
        {
          number: 10,
          name: "Partenza",
          day: "Giorno 12",
          subtitle: "Arrivederci",
          desc: "Trasferimento all'aeroporto per il rientro."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/thumbnail.jpg",
          cap: "Gran Tour di 12 Giorni in Marocco da Casablanca",
          alt: "Gran Tour di 12 Giorni in Marocco da Casablanca – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-01.jpg",
          cap: "Chefchaouen, vicolo acciottolato dipinto di azzurro",
          alt: "Angolo suggestivo nella medina blu di Chefchaouen"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-02.jpg",
          cap: "Mosaici e rovine romane a Volubilis",
          alt: "Parco archeologico romano di Volubilis"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-03.jpg",
          cap: "Concerie medievali di Chouara a Fes",
          alt: "Vasche tradizionali di tintura nella medina di Fes"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-04.jpg",
          cap: "Carovana di dromedari al tramonto a Merzouga",
          alt: "Trekking a dorso di dromedario sulle dune di Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-05.jpg",
          cap: "Campo tendato berbero di lusso nel Sahara",
          alt: "Tende di lusso illuminate nel deserto di Merzouga"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-06.jpg",
          cap: "Kasbah fortificata di Ait Ben Haddou (UNESCO)",
          alt: "Panorama storico della Kasbah di Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-07.jpg",
          cap: "Bastioni sul mare e oceano a Essaouira",
          alt: "Fortificazione e costa atlantica a Essaouira"
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
