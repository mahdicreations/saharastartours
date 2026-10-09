import fs from 'node:fs';
import path from 'node:path';

const toursBatch = [
  // Tour 12: 3-days-desert-tour-marrakech-to-fes
  {
    slug: '3-days-desert-tour-marrakech-to-fes',
    es: {
      slug: '3-days-desert-tour-marrakech-to-fes',
      title: 'Circuito de 3 Días por el Desierto de Marrakech a Fez | Sahara Star Tours',
      shortTitle: 'Circuito de 3 Días Marrakech a Fez',
      description: 'El circuito más popular de 3 días conectando Marrakech con Fez: Alto Atlas, Kasbah Ait Ben Haddou, Valle del Dades, dunas de Merzouga en jaima de lujo y Valle del Ziz.',
      aboutHtml: 'Conecta dos de las ciudades imperiales más emblemáticas de Marruecos con este legendario circuito por el desierto de 3 días de Marrakech a Fez. Cruza el sobrecogedor puerto de Tizi n\'Tichka en el Alto Atlas, explora la famosa Kasbah de Ait Ben Haddou (Patrimonio de la Humanidad por la UNESCO) y admira las imponentes formaciones geológicas de los cañones del Todra y Dades. Vive la experiencia cumbre de montar en dromedario sobre las dunas doradas de Erg Chebbi al atardecer y pasar la noche en un campamento bereber de lujo antes de continuar hacia el norte a través del Valle del Ziz y el bosque de cedros de Ifrane hasta llegar a Fez.',
      duration: '3 Días / 2 Noches',
      startingFrom: 'Marrakech',
      price: 'Desde $420/persona',
      highlights: [
        'Punto de encuentro: En tu hotel o aeropuerto en Marrakech.',
        'Lugar de inicio: Marrakech',
        'Lugar de finalización: Fez'
      ],
      inclusions: [
        'Transporte privado con aire acondicionado en 4x4 o monovolumen',
        'Chófer/guía profesional multilingüe durante todo el recorrido',
        'Combustible y peajes de carretera incluidos',
        'Alojamiento de 1 noche en riad/kasbah en Dades (cena y desayuno)',
        'Paseo en dromedario al atardecer en las dunas de Merzouga',
        'Práctica de sandboard en las dunas (gratuita y opcional)',
        '1 noche en campamento de lujo en el desierto (cena y desayuno)'
      ],
      exclusions: [
        'Bebidas durante las comidas',
        'Almuerzos diarios',
        'Billetes de avión',
        'Propinas y gratificaciones'
      ],
      itinerary: [
        {
          day: 'Día 1',
          title: 'Marrakech – Aldeas Bereberes – Alto Atlas – Kasbah Ait Ben Haddou – Valle de las Rosas – Gargantas del Dades',
          content: 'Salida temprano desde tu riad en Marrakech cruzando el puerto de montaña de Tizi n\'Tichka (2.260 m) con vistas panorámicas de las aldeas bereberes del Alto Atlas. Visita guiada a la célebre Kasbah de Ait Ben Haddou (UNESCO). Almuerzo en Ouarzazate y continuación por el palmeral de Skoura y el Valle de las Rosas hasta las espectaculares formaciones rocosas del Dades para cenar y pasar la noche.'
        },
        {
          day: 'Día 2',
          title: 'Gargantas del Dades – Valle del Dades – Gargantas del Todra – Dunas del Desierto de Merzouga',
          content: 'Tras el desayuno nos dirigiremos hacia Tinghir para caminar entre las colosales paredes de 300 metros de las Gargantas del Todra. Parada en Erfoud y llegada por la tarde a Merzouga. Cambio al dromedario para cruzar las dunas doradas de Erg Chebbi, contemplar un atardecer mágico y llegar al campamento de lujo para cenar junto al fuego con tambores bereberes.'
        },
        {
          day: 'Día 3',
          title: 'Dunas de Merzouga – Valle del Ziz – Bosque de Cedros – Ifrane – Fez',
          content: 'Amanecer sobre las dunas y desayuno en el campamento. Salida hacia el norte a través del cañón y palmeral del Valle del Ziz. Almuerzo en Midelt y parada en el bosque de cedros de Azrou para ver a los macacos salvajes del Atlas. Breve parada en la ciudad alpina de Ifrane y llegada a Fez al atardecer para el traslado a tu riad.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Marrakech",
          day: "Día 1",
          subtitle: "Salida",
          desc: "Recogida y cruce del Alto Atlas."
        },
        {
          number: 2,
          name: "Ait Ben Haddou",
          day: "Día 1",
          subtitle: "Kasbah UNESCO",
          desc: "Fortaleza histórica de barro y cine."
        },
        {
          number: 3,
          name: "Gargantas del Dades",
          day: "Día 1",
          subtitle: "Cañón del Dades",
          desc: "Noche en hotel con encanto."
        },
        {
          number: 4,
          name: "Gargantas del Todra",
          day: "Día 2",
          subtitle: "Acantilados",
          desc: "Paredes verticales de caliza."
        },
        {
          number: 5,
          name: "Merzouga Sáhara",
          day: "Día 2",
          subtitle: "Erg Chebbi",
          desc: "Dromedarios y campamento de lujo."
        },
        {
          number: 6,
          name: "Valle del Ziz e Ifrane",
          day: "Día 3",
          subtitle: "Palmeral y Bosque",
          desc: "Macacos del Atlas y paisajes alpinos."
        },
        {
          number: 7,
          name: "Fez",
          day: "Día 3",
          subtitle: "Llegada",
          desc: "Traslado a tu riad en Fez."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/thumbnail.jpg",
          cap: "Circuito de 3 Días por el Desierto de Marrakech a Fez",
          alt: "Circuito de 3 Días por el Desierto de Marrakech a Fez – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-01.jpg",
          cap: "Cumbres del Alto Atlas y puerto de Tizi n'Tichka",
          alt: "Ruta panorámica a través del Alto Atlas"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-02.jpg",
          cap: "Kasbah de Ait Ben Haddou declarada por la UNESCO",
          alt: "Arquitectura bereber de adobe en Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-03.jpg",
          cap: "Desfiladero rocoso de las Gargantas del Todra",
          alt: "Acantilados verticales de caliza en las Gargantas del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-04.jpg",
          cap: "Caravana de dromedarios sobre las dunas de Merzouga",
          alt: "Paseo en dromedario al atardecer en Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-05.jpg",
          cap: "Campamento bereber de lujo en las dunas de Erg Chebbi",
          alt: "Jaimas de lujo iluminadas bajo el cielo estrellado del Sáhara"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-06.jpg",
          cap: "Palmerales del Valle del Ziz de camino a Fez",
          alt: "Oasis verde y cañón del Valle del Ziz"
        }
      ],
      faqs: []
    },
    it: {
      slug: '3-days-desert-tour-marrakech-to-fes',
      title: 'Tour di 3 Giorni nel Deserto da Marrakech a Fes | Sahara Star Tours',
      shortTitle: 'Tour di 3 Giorni Marrakech a Fes',
      description: 'Il tour nel deserto più amato di 3 giorni da Marrakech a Fes: Alto Atlante, Kasbah Ait Ben Haddou, Valle del Dades, dune di Merzouga in campo di lusso e Valle dello Ziz.',
      aboutHtml: 'Unisci due delle più affascinanti città imperiali del Marocco con questo celebre tour nel deserto di 3 giorni da Marrakech a Fes. Supera il maestoso passo di Tizi n\'Tichka sull\'Alto Atlante, visita lo storico ksar di Ait Ben Haddou (Patrimonio UNESCO) e ammira le imponenti falesie delle Gole del Todra e del Dades. L\'esperienza culmina con una romantica cammellata al tramonto sulle dune dorate di Erg Chebbi e una notte magica in campo tendato di lusso prima di risalire verso nord attraverso la Valle dello Ziz e i boschi di cedri fino a Fes.',
      duration: '3 Giorni / 2 Notti',
      startingFrom: 'Marrakech',
      price: 'Da $420/persona',
      highlights: [
        'Punto di incontro: Presso il tuo hotel o aeroporto a Marrakech.',
        'Luogo di partenza: Marrakech',
        'Luogo di arrivo: Fes'
      ],
      inclusions: [
        'Trasporto privato climatizzato in fuoristrada 4x4 o minivan',
        'Autista/guida professionale multilingue dedicato per l\'intero percorso',
        'Carburante e pedaggi autostradali inclusi',
        '1 notte in riad/kasbah nella Valle del Dades (cena e colazione)',
        'Passeggiata a dorso di dromedario al tramonto sulle dune di Merzouga',
        'Sandboarding sulle dune del Sahara (gratuito e facoltativo)',
        '1 notte in campo tendato di lusso nel deserto (cena e colazione)'
      ],
      exclusions: [
        'Bevande durante i pasti',
        'Pranzi quotidiani',
        'Biglietti aerei',
        'Mance e gratifiche'
      ],
      itinerary: [
        {
          day: 'Giorno 1',
          title: 'Marrakech – Villaggi Berberi – Alto Atlante – Kasbah Ait Ben Haddou – Valle delle Rose – Gole del Dades',
          content: 'Partenza di buon mattino dal tuo riad a Marrakech valicando l\'Alto Atlante a Tizi n\'Tichka (2.260 m) tra panorami mozzafiato. Visita guidata alla Kasbah di Ait Ben Haddou (UNESCO). Pranzo a Ouarzazate e proseguimento attraverso il palmeto di Skoura e la Valle delle Rose fino alla Valle del Dades per la cena e il pernottamento.'
        },
        {
          day: 'Giorno 2',
          title: 'Gole del Dades – Valle del Dades – Gole del Todra – Dune di Merzouga',
          content: 'Dopo la colazione visiteremo le magnifiche Gole del Todra con le loro falesie a picco alte 300 metri. Sosta a Erfoud e arrivo pomeridiano a Merzouga. Partenza in dromedario verso il campo tendato di lusso tra le sabbie di Erg Chebbi, tramonto indimenticabile e cena berbera attorno al fuoco.'
        },
        {
          day: 'Giorno 3',
          title: 'Dune di Merzouga – Valle dello Ziz – Foresta dei Cedri – Ifrane – Fes',
          content: 'Alba spettacolare sulle dune e colazione al campo. Viaggio verso nord lungo le profonde gole dello Ziz. Pausa pranzo a Midelt e sosta nella foresta di cedri di Azrou per incontrare le scimmie bertucce. Breve tappa a Ifrane e arrivo a Fes nel tardo pomeriggio con accompagnamento al tuo alloggio.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Marrakech",
          day: "Giorno 1",
          subtitle: "Partenza",
          desc: "Prelievo e valico dell'Alto Atlante."
        },
        {
          number: 2,
          name: "Ait Ben Haddou",
          day: "Giorno 1",
          subtitle: "Kasbah UNESCO",
          desc: "Fortezza storica e set cinematografico."
        },
        {
          number: 3,
          name: "Gole del Dades",
          day: "Giorno 1",
          subtitle: "Canyon del Dades",
          desc: "Pernottamento in hotel tipico."
        },
        {
          number: 4,
          name: "Gole del Todra",
          day: "Giorno 2",
          subtitle: "Falesie",
          desc: "Pareti rocciose spettacolari."
        },
        {
          number: 5,
          name: "Merzouga Sahara",
          day: "Giorno 2",
          subtitle: "Erg Chebbi",
          desc: "Dromedari e campo tendato di lusso."
        },
        {
          number: 6,
          name: "Valle dello Ziz e Ifrane",
          day: "Giorno 3",
          subtitle: "Palmeti e Foreste",
          desc: "Scimmie dell'Atlante e architettura alpina."
        },
        {
          number: 7,
          name: "Fes",
          day: "Giorno 3",
          subtitle: "Arrivo",
          desc: "Accompagnamento al tuo riad a Fes."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/thumbnail.jpg",
          cap: "Tour di 3 Giorni nel Deserto da Marrakech a Fes",
          alt: "Tour di 3 Giorni nel Deserto da Marrakech a Fes – Sahara Star Tours"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-01.jpg",
          cap: "Cime dell'Alto Atlante e passo di Tizi n'Tichka",
          alt: "Strada panoramica che attraversa l'Alto Atlante"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-02.jpg",
          cap: "Kasbah di Ait Ben Haddou Patrimonio UNESCO",
          alt: "Architettura berbera in terra cruda ad Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-03.jpg",
          cap: "Canyon roccioso delle Gole del Todra",
          alt: "Falesie verticali calcaree nelle Gole del Todra"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-04.jpg",
          cap: "Carovana di dromedari sulle dune di Merzouga",
          alt: "Passeggiata sui dromedari al calar del sole a Erg Chebbi"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-05.jpg",
          cap: "Campo tendato berbero di lusso tra le dune",
          alt: "Tende illuminate sotto il cielo stellato del Sahara"
        },
        {
          src: "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-06.jpg",
          cap: "Palmeti della Valle dello Ziz verso Fes",
          alt: "Oasi verdeggiante nel canyon dello Ziz"
        }
      ],
      faqs: []
    }
  },

  // Tour 13: 4-days-marrakech-desert-tour
  {
    slug: '4-days-marrakech-desert-tour',
    es: {
      slug: '4-days-marrakech-desert-tour',
      title: 'Circuito de 4 Días al Desierto de Merzouga desde Marrakech | Sahara Star Tours',
      shortTitle: 'Circuito de 4 Días Desierto de Merzouga',
      description: 'Viaje privado de 4 días desde Marrakech: Alto Atlas, Kasbah Ait Ben Haddou, Valle del Draa, dunas de Merzouga con jaima de lujo, Todra y Valle del Dades.',
      aboutHtml: 'Este circuito privado de 4 días al desierto de Merzouga desde Marrakech ofrece el equilibrio perfecto entre grandes paisajes saharianos y un ritmo de viaje relajado. Cruzarás el Alto Atlas por el sinuoso paso de Tizi n\'Tichka, visitarás la legendaria Kasbah de Ait Ben Haddou y recorrerás los palmerales infinitos del Valle del Draa. En Merzouga disfrutarás de un mágico paseo en dromedario hacia un campamento de lujo en las dunas de Erg Chebbi con cena bereber bajo las estrellas. De regreso, descubrirás los majestuosos cañones del Todra, el Valle del Dades y la histórica Kasbah de Amridil en Skoura.',
      duration: '4 Días / 3 Noches',
      startingFrom: 'Marrakech',
      price: 'Desde $520/persona',
      highlights: [
        'Desierto del Sáhara en Merzouga y las dunas de Erg Chebbi',
        'Paseo en dromedario por el desierto al atardecer',
        'Kasbah de Ait Ben Haddou, declarada Patrimonio de la Humanidad por la UNESCO',
        'Ruta panorámica a través de las montañas del Alto Atlas',
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
          title: 'Marrakech – Alto Atlas – Valle de Ounila – Kasbah Ait Ben Haddou – Ouarzazate',
          content: 'Salida desde tu riad en Marrakech cruzando el puerto de Tizi n\'Tichka (2.260 m). Desvío por el pintoresco Valle de Ounila para contemplar pueblos bereberes tradicionales y visita al famoso ksar de Ait Ben Haddou (UNESCO). Continuación a Ouarzazate para cenar y pasar la noche.'
        },
        {
          day: 'Día 2',
          title: 'Ouarzazate – Agdz – Valle del Draa – Nkob – Rissani – Desierto de Merzouga',
          content: 'Ruta hacia el sur a través del puerto de Tinififft y los densos palmerales del Valle del Draa. Paso por Nkob y la histórica Rissani antes de alcanzar las dunas doradas de Erg Chebbi en Merzouga. Paseo en dromedario al atardecer hacia el campamento de lujo con cena bajo las estrellas.'
        },
        {
          day: 'Día 3',
          title: 'Sáhara de Merzouga – Rissani – Erfoud – Gargantas del Todra – Boumalne Dades',
          content: 'Amanecer inolvidable sobre las dunas y desayuno. Parada en Erfoud para visitar talleres de fósiles y paseo a pie por el cañón de 300 metros de las Gargantas del Todra. Por la tarde llegada al Valle del Dades para cenar y alojarse en un hotel panorámico.'
        },
        {
          day: 'Día 4',
          title: 'Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Kasbah Amridil – Alto Atlas – Marrakech',
          content: 'Recorrido por el Valle de las Rosas en Kelaat M\'gouna y visita a la hermosa Kasbah Amridil del siglo XVII en el palmeral de Skoura. Cruce de regreso del Alto Atlas por Tizi n\'Tichka, llegando a Marrakech al atardecer para el traslado a tu alojamiento.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Marrakech",
          day: "Día 1",
          subtitle: "Salida",
          desc: "Cruce del Alto Atlas hacia Ouarzazate."
        },
        {
          number: 2,
          name: "Valle del Draa",
          day: "Día 2",
          subtitle: "Oasis y Palmerales",
          desc: "Ruta del Draa hacia las dunas de Merzouga."
        },
        {
          number: 3,
          name: "Merzouga y Todra",
          day: "Día 3",
          subtitle: "Desierto y Cañón",
          desc: "Campamento prémium y Gargantas del Todra."
        },
        {
          number: 4,
          name: "Marrakech",
          day: "Día 4",
          subtitle: "Regreso",
          desc: "Valle de las Rosas, Skoura y Marrakech."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_1.webp",
          cap: "Guía bereber conduciendo dromedarios sobre las dunas del Sáhara",
          alt: "Guía bereber con túnica tradicional conduciendo dromedarios sobre las dunas del Sáhara"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_10.webp",
          cap: "Estanque de reflejo en el patio de la Madraza Ben Youssef",
          alt: "Estanque reflectante en el patio con estuco tallado de la Madraza Ben Youssef"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_2.webp",
          cap: "Gato descansando sobre alfombras bereberes tejidas a mano en el zoco",
          alt: "Gato descansando sobre alfombras y cojines de lana marroquíes en un zoco"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_3.webp",
          cap: "Músicos y bailarines folclóricos de Ahwash frente a la Kasbah Taourirt",
          alt: "Bailarines y tamborileros de Ahwash actuando frente a la Kasbah Taourirt"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_4.webp",
          cap: "Caravana de dromedarios cruzando las dunas de Erg Chebbi bajo el sol",
          alt: "Caravana de dromedarios recorriendo las dunas de Erg Chebbi bajo la luz de la tarde"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_5.webp",
          cap: "Carruaje tradicional de caballos frente a la Mezquita Koutoubia",
          alt: "Carruaje tradicional de caballos frente a la Mezquita Koutoubia en Marrakech"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_7.webp",
          cap: "Muros de adobe y naranjos del Palacio El Badi en Marrakech",
          alt: "Muros de tierra apisonada y jardines de naranjos del Palacio El Badi en Marrakech"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_8.webp",
          cap: "Pilares con azulejos zellige y madera de cedro en Ben Youssef",
          alt: "Pilares con madera de cedro tallada y azulejos zellij en la Madraza Ben Youssef"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_9.webp",
          cap: "Ksar fortificado de adobe de Ait Ben Haddou con torres defensivas",
          alt: "Ksar fortificado de adobe de Ait Ben Haddou con puertas y torres defensivas"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/hero_2.webp",
          cap: "Carretera atravesando los inmensos palmerales del Valle del Draa",
          alt: "Carretera cruzando los extensos palmerales datileros del Valle del Draa"
        }
      ],
      faqs: [
        {
          question: "¿Es este un circuito privado o compartido?",
          answer: "Se trata de una experiencia 100% privada con vehículo y conductor dedicados en exclusiva a tu grupo."
        },
        {
          question: "¿Cuánto dura el paseo en dromedario y hay alternativa disponible?",
          answer: "El paseo dura aproximadamente 1 hora. Si prefieres evitar el dromedario, organizamos el traslado directo en 4x4 sin coste añadido."
        },
        {
          question: "¿La tienda del campamento en el desierto es privada?",
          answer: "Sí, todos nuestros campamentos en Erg Chebbi cuentan con jaimas privadas de lujo con baño ensuite y ducha de agua caliente."
        },
        {
          question: "¿Dónde se realiza la recogida y el regreso?",
          answer: "Te recogemos directamente en tu riad u hotel en Marrakech y te dejamos de vuelta en el mismo punto al finalizar el viaje."
        },
        {
          question: "¿Qué tipo de vehículo se utiliza en la ruta?",
          answer: "Vehículo privado 4x4 o monovolumen con aire acondicionado, asientos cómodos y amplio maletero."
        },
        {
          question: "¿Se pueden atender necesidades dietéticas especiales?",
          answer: "Sí, podemos preparar comidas vegetarianas, veganas, sin gluten o halal avisándonos al formalizar la reserva."
        },
        {
          question: "¿Es este itinerario adecuado para todas las edades?",
          answer: "Sí, el ritmo de 4 días es muy relajado y adecuado para familias con niños, parejas y personas mayores."
        },
        {
          question: "¿Cuál es la mejor época del año para realizar este viaje?",
          answer: "Primavera y otoño ofrecen temperaturas magníficas. En invierno los días son soleados y despejados, ideales para viajar por el sur."
        }
      ]
    },
    it: {
      slug: '4-days-marrakech-desert-tour',
      title: 'Tour di 4 Giorni nel Deserto di Merzouga da Marrakech | Sahara Star Tours',
      shortTitle: 'Tour di 4 Giorni Deserto di Merzouga',
      description: 'Viaggio privato di 4 giorni da Marrakech: Alto Atlante, Kasbah Ait Ben Haddou, Valle del Draa, dune di Merzouga in campo di lusso, Todra e Valle del Dades.',
      aboutHtml: 'Questo tour privato di 4 giorni nel deserto di Merzouga da Marrakech rappresenta la perfetta sintesi tra l\'emozione dei paesaggi sahariani e un ritmo di viaggio rilassato e confortevole. Valicherai l\'Alto Atlante attraverso il passo panoramico di Tizi n\'Tichka, scoprirai lo storico ksar di Ait Ben Haddou e viaggerai lungo le sterminate oasi di palme della Valle del Draa. A Merzouga salirai sul dromedario verso il campo tendato di lusso a Erg Chebbi per una notte magica sotto la volta stellata. Nel viaggio di rientro ammirerai le imponenti Gole del Todra, la Valle del Dades e l\'antica Kasbah di Amridil a Skoura.',
      duration: '4 Giorni / 3 Notti',
      startingFrom: 'Marrakech',
      price: 'Da $520/persona',
      highlights: [
        'Deserto del Sahara a Merzouga e le dune di Erg Chebbi',
        'Passeggiata a dorso di dromedario nel deserto al tramonto',
        'Kasbah di Ait Ben Haddou, Patrimonio Mondiale dell\'UNESCO',
        'Percorso panoramico attraverso le vette dell\'Alto Atlante',
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
          title: 'Marrakech – Alto Atlante – Valle di Ounila – Kasbah Ait Ben Haddou – Ouarzazate',
          content: 'Partenza da Marrakech superando il valico di Tizi n\'Tichka (2.260 m). Deviazione panoramica nella Valle di Ounila tra villaggi tradizionali e visita allo ksar di Ait Ben Haddou (UNESCO). Arrivo a Ouarzazate per la cena e il pernottamento.'
        },
        {
          day: 'Giorno 2',
          title: 'Ouarzazate – Agdz – Valle del Draa – Nkob – Rissani – Deserto di Merzouga',
          content: 'Direzione sud attraverso le gole di Tinififft e gli infiniti palmeti della Valle del Draa. Superamento di Nkob e Rissani fino alle sabbie di Erg Chebbi a Merzouga. Cammellata al tramonto e notte nel campo tendato di lusso con cena attorno al falò.'
        },
        {
          day: 'Giorno 3',
          title: 'Sahara di Merzouga – Rissani – Erfoud – Gole del Todra – Boumalne Dades',
          content: 'Alba spettacolare tra le dune dorate e colazione. Sosta a Erfoud nei laboratori di fossili e passeggiata a piedi sotto le falesie di 300 metri delle Gole del Todra. Nel tardo pomeriggio arrivo nella Valle del Dades per la cena e il pernottamento.'
        },
        {
          day: 'Giorno 4',
          title: 'Valle del Dades – Valle delle Rose – Skoura – Kasbah Amridil – Alto Atlante – Marrakech',
          content: 'Attraversamento della Valle delle Rose a Kelaat M\'gouna e visita alla storica Kasbah Amridil del XVII secolo nell\'oasi di Skoura. Ritorno attraverso l\'Alto Atlante e arrivo serale a Marrakech con accompagnamento al tuo riad.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Marrakech",
          day: "Giorno 1",
          subtitle: "Partenza",
          desc: "Valico dell'Alto Atlante verso Ouarzazate."
        },
        {
          number: 2,
          name: "Valle del Draa",
          day: "Giorno 2",
          subtitle: "Oasi e Palmeti",
          desc: "Strada del Draa verso le dune di Merzouga."
        },
        {
          number: 3,
          name: "Merzouga e Todra",
          day: "Giorno 3",
          subtitle: "Deserto e Canyon",
          desc: "Campo di lusso e Gole del Todra."
        },
        {
          number: 4,
          name: "Marrakech",
          day: "Giorno 4",
          subtitle: "Rientro",
          desc: "Valle delle Rose, Skoura e arrivo a Marrakech."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_1.webp",
          cap: "Guida berbera che conduce i dromedari sulle dune del Sahara",
          alt: "Guida berbera in tunica tradizionale che guida i dromedari sulle dune del Sahara"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_10.webp",
          cap: "Vasca d'acqua riflettente nella corte della Medersa Ben Youssef",
          alt: "Vasca riflettente nella corte decorata a stucco della Medersa Ben Youssef a Marrakech"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_2.webp",
          cap: "Gatto adagiato su tappeti e cuscini berberi nel souk",
          alt: "Gatto che riposa su tappeti in lana intrecciati a mano in un souk marocchino"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_3.webp",
          cap: "Danzatori e suonatori di Ahwash davanti alla Kasbah Taourirt",
          alt: "Ballerini e percussionisti tradizionali Ahwash davanti alla Kasbah Taourirt"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_4.webp",
          cap: "Carovana di dromedari tra le dune di Erg Chebbi nel pomeriggio",
          alt: "Carovana di dromedari che solca le dune di Erg Chebbi nella luce pomeridiana"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_5.webp",
          cap: "Carrozza tradizionale a cavalli davanti alla Moschea Koutoubia",
          alt: "Carrozza a cavalli di fronte al minareto della Koutoubia a Marrakech"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_7.webp",
          cap: "Mura in pisé e aranceto nel Palazzo El Badi a Marrakech",
          alt: "Antiche mura in terra battuta e giardini di aranci nel Palazzo El Badi"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_8.webp",
          cap: "Pilastri in cedro scolpito e zellige alla Medersa Ben Youssef",
          alt: "Dettaglio di pilastri con legno di cedro intagliato e mosaici zellij"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_9.webp",
          cap: "Ksar fortificato in terra cruda di Ait Ben Haddou con torri",
          alt: "Ksar fortificato di Ait Ben Haddou con porte e torri difensive merlate"
        },
        {
          src: "/sahara-star-tours/4-days-marrakech-desert-tour/images/hero_2.webp",
          cap: "Strada che attraversa gli immensi palmeti della Valle del Draa",
          alt: "Strada panoramica tra gli sterminati palmeti da dattero della Valle del Draa"
        }
      ],
      faqs: [
        {
          question: "Questo tour è privato o condiviso?",
          answer: "L'esperienza è interamente privata, con autista e mezzo dedicati unicamente a te e ai tuoi compagni di viaggio."
        },
        {
          question: "Quanto dura la passeggiata sui dromedari e c'è un'alternativa?",
          answer: "La cammellata dura circa un'ora. Chi non desidera montare sul dromedario può richiedere il trasporto diretto in 4x4 senza costi extra."
        },
        {
          question: "La tenda nel campo del deserto dispone di bagno privato?",
          answer: "Sì, il campo tendato di lusso a Merzouga garantisce tende private fornite di bagno completo e doccia calda."
        },
        {
          question: "Dove avvengono il prelievo e il rientro?",
          answer: "Ti verremo a prendere al tuo riad o hotel a Marrakech e ti riaccompagneremo allo stesso alloggio al ritorno."
        },
        {
          question: "Che tipo di veicolo viene impiegato per il tour?",
          answer: "Utilizziamo veicoli fuoristrada 4x4 o moderni minivan con aria condizionata, sedute spaziose e comfort ottimale."
        },
        {
          question: "È possibile richiedere menu per esigenze dietetiche particolari?",
          answer: "Sì, possiamo soddisfare esigenze vegetariane, vegane, senza glutine o halal avvisandoci in fase di prenotazione."
        },
        {
          question: "Il viaggio è indicato per persone di ogni età?",
          answer: "Certamente, la durata di 4 giorni distribuisce le percorrenze in modo ottimale ed è ideale per famiglie e coppie."
        },
        {
          question: "Qual è il periodo migliore dell'anno per effettuare questo tour?",
          answer: "La primavera e l'autunno regalano un clima ideale. Anche l'inverno è splendido per le giornate serene e limpide nel sud."
        }
      ]
    }
  },

  // Tour 14: 5-days-tour-marrakech-to-merzouga
  {
    slug: '5-days-tour-marrakech-to-merzouga',
    es: {
      slug: '5-days-tour-marrakech-to-merzouga',
      title: 'Circuito Privado de 5 Días de Marrakech a Merzouga | Sahara Star Tours',
      shortTitle: 'Circuito Privado de 5 Días a Merzouga',
      description: 'Viaje privado de 5 días desde Marrakech: Alto Atlas, Kasbah Telouet, Ait Ben Haddou, Valle del Draa, jornada completa en Merzouga con nómadas y Valle del Dades.',
      aboutHtml: 'El Circuito Privado de 5 Días de Marrakech al desierto de Merzouga es la ruta por excelencia para sumergirse sin prisas en el gran sur marroquí. Incluye la histórica Kasbah de Telouet y el ksar de Ait Ben Haddou (UNESCO), la travesía del frondoso Valle del Draa y una jornada completa dedicada a explorar el desierto de Merzouga en 4x4, visitando familias nómadas y escuchando a los músicos Gnawa en Khamlia. Disfruta de un atardecer a lomos de dromedario sobre las dunas de Erg Chebbi y de dos noches inolvidables en el desierto antes de regresar por los imponentes cañones del Todra y Dades.',
      duration: '5 Días / 4 Noches',
      startingFrom: 'Marrakech',
      price: 'Desde $650/persona',
      highlights: [
        'Desierto del Sáhara en Merzouga y las dunas de Erg Chebbi',
        'Paseo en dromedario por el desierto al atardecer',
        'Kasbah de Ait Ben Haddou, declarada Patrimonio de la Humanidad por la UNESCO',
        'Ruta panorámica a través de las montañas del Alto Atlas',
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
          title: 'Marrakech – Alto Atlas – Kasbah Telouet – Kasbah Ait Ben Haddou – Ouarzazate',
          content: 'Salida desde Marrakech ascendiendo por el puerto de Tizi n\'Tichka (2.260 m). Visita a la histórica Kasbah del Glaoui en Telouet y descenso por el valle de Ounila hacia la legendaria Kasbah de Ait Ben Haddou (UNESCO). Llegada a Ouarzazate para cenar y descansar en el hotel.'
        },
        {
          day: 'Día 2',
          title: 'Ouarzazate – Agdz – Valle del Draa – Nkob – Desierto de Merzouga',
          content: 'Travesía a través del paso de Tinififft hacia el extenso palmeral del Valle del Draa. Continuación por Nkob y Rissani hasta las dunas de Erg Chebbi en Merzouga. Paseo en dromedario al atardecer hacia el campamento de lujo para cenar junto al fuego bajo el cielo estrellado.'
        },
        {
          day: 'Día 3',
          title: 'Exploración de Merzouga – Nómadas – Khamlia – Lago de Merzouga – Palmeral',
          content: 'Día completo dedicado al desierto: excursión 4x4 para conocer familias nómadas bereberes, concierto de música espiritual Gnawa en el pueblo de Khamlia y visita al lago estacional de Dayet Srji. Tarde libre en las dunas y segunda noche en Merzouga.'
        },
        {
          day: 'Día 4',
          title: 'Sáhara de Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades',
          content: 'Amanecer en las dunas y salida hacia el mercado tradicional de Rissani. Visita a talleres de mármol y fósiles en Erfoud y caminata por el imponente cañón de 300 metros de las Gargantas del Todra. Noche en el Valle del Dades.'
        },
        {
          day: 'Día 5',
          title: 'Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Kasbah Amridil – Alto Atlas – Marrakech',
          content: 'Ruta por la Carretera de las Mil Kasbahs pasando por Kelaat M\'gouna y la Kasbah Amridil en Skoura. Cruce del Alto Atlas por el paso de Tizi n\'Tichka, llegando a Marrakech al atardecer para el traslado a tu alojamiento.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Marrakech",
          day: "Día 1",
          subtitle: "Salida",
          desc: "Kasbah Telouet, Ait Ben Haddou y Ouarzazate."
        },
        {
          number: 2,
          name: "Valle del Draa",
          day: "Día 2",
          subtitle: "Palmerales",
          desc: "Ruta del Draa hacia las dunas de Merzouga."
        },
        {
          number: 3,
          name: "Merzouga Sáhara",
          day: "Día 3",
          subtitle: "Inmersión Nómada",
          desc: "Música Gnawa, familias nómadas y 4x4."
        },
        {
          number: 4,
          name: "Gargantas del Todra",
          day: "Día 4",
          subtitle: "Cañones del Atlas",
          desc: "Acantilados del Todra y Valle del Dades."
        },
        {
          number: 5,
          name: "Marrakech",
          day: "Día 5",
          subtitle: "Regreso",
          desc: "Kasbah Amridil, Alto Atlas y Marrakech."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_1.webp",
          cap: "Torres y almenas de la Kasbah fortificada de Ait Ben Haddou",
          alt: "Torres fortificadas de tierra y almenas en la Kasbah de Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_10.webp",
          cap: "Globos aerostáticos sobrevolando el palmeral de Marrakech al alba",
          alt: "Globos aerostáticos flotando sobre la llanura del palmeral de Marrakech al amanecer"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_2.webp",
          cap: "Guía de dromedarios cruzando dunas bajo un cielo con nubes dramáticas",
          alt: "Guía conduciendo dromedarios a través de dunas del desierto bajo nubes dramáticas"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_3.webp",
          cap: "Mujeres tradicionales caminando por una callejuela ocre de la medina",
          alt: "Mujeres tradicionales en abayas caminando por un callejón ocre de la medina"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_4.webp",
          cap: "Muros de arcilla roja y ventanas de la Kasbah Taourirt en Ouarzazate",
          alt: "Muros de arcilla roja y ventanas talladas de la Kasbah Taourirt en Ouarzazate"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_5.webp",
          cap: "Gata amamantando a su cachorro sobre un cojín bereber tejido en un riad",
          alt: "Gata madre cuidando de su cría sobre un cojín bereber artesanal en un riad"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_6.webp",
          cap: "Frascos de perfume marroquí y espejos taraceados en tienda artesanal",
          alt: "Frascos de perfume artesanales y espejos decorados en una tienda tradicional"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_8.webp",
          cap: "Hombre local con turbante naranja frente a edificio de adobe",
          alt: "Hombre local con turbante naranja frente a una edificación de adobe en aldea del desierto"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/hero_2.webp",
          cap: "Vista panorámica de la antigua fortaleza en la colina de Ait Ben Haddou",
          alt: "Vista panorámica de la antigua fortaleza en la cima de la colina de Ait Ben Haddou"
        }
      ],
      faqs: [
        {
          question: "¿Es este un circuito privado o compartido?",
          answer: "Es un circuito privado exclusivo: el vehículo, el conductor y las actividades son sólo para tu grupo."
        },
        {
          question: "¿Cuánto dura el paseo en dromedario y hay alternativa disponible?",
          answer: "Dura entre 45 minutos y 1,5 horas. Puedes optar por traslado en vehículo 4x4 sin recargo si lo prefieres."
        },
        {
          question: "¿La tienda del campamento en el desierto es privada?",
          answer: "Sí, todos nuestros campamentos disponen de jaimas privadas de lujo con camas amplias y baño completo interior con ducha."
        },
        {
          question: "¿Dónde se realiza la recogida y el regreso?",
          answer: "Te recogemos en tu alojamiento en Marrakech al inicio y te dejamos de vuelta en el mismo punto al finalizar."
        },
        {
          question: "¿Qué tipo de vehículo se utiliza en la ruta?",
          answer: "Vehículo 4x4 o minivan moderno y climatizado, con asientos cómodos y espacio generoso para el equipaje."
        },
        {
          question: "¿Se pueden atender necesidades dietéticas especiales?",
          answer: "Sí, adaptamos los menús para dietas vegetarianas, veganas, sin gluten o halal con aviso previo al reservar."
        },
        {
          question: "¿Es este itinerario adecuado para todas las edades?",
          answer: "Sí, es el itinerario más completo y relajado para el desierto, ideal para familias y viajeros de cualquier edad."
        },
        {
          question: "¿Cuál es la mejor época del año para realizar este viaje?",
          answer: "Primavera y otoño ofrecen temperaturas perfectas. El invierno brinda cielos claros y días templados muy agradables."
        }
      ]
    },
    it: {
      slug: '5-days-tour-marrakech-to-merzouga',
      title: 'Tour Privato di 5 Giorni da Marrakech a Merzouga | Sahara Star Tours',
      shortTitle: 'Tour Privato di 5 Giorni a Merzouga',
      description: 'Viaggio privato di 5 giorni da Marrakech: Alto Atlante, Kasbah Telouet, Ait Ben Haddou, Valle del Draa, giornata completa a Merzouga con i nomadi e Valle del Dades.',
      aboutHtml: 'Il Tour Privato di 5 Giorni da Marrakech al desierto di Merzouga è la scelta ideale per immergersi appieno nei ritmi e nei paesaggi del sud marocchino senza alcuna fretta. Include la visita alla storica Kasbah di Telouet e allo ksar di Ait Ben Haddou (UNESCO), l\'attraversamento della suggestiva Valle del Draa e un\'intera giornata a Merzouga dedicata a scoprire i villaggi nomadi in 4x4 e ad ascoltare la musica Gnawa a Khamlia. Vivi una cammellata al tramonto sulle dune di Erg Chebbi e due notti memorabili nel Sahara prima di fare ritorno tra i canyon del Todra e del Dades.',
      duration: '5 Giorni / 4 Notti',
      startingFrom: 'Marrakech',
      price: 'Da $650/persona',
      highlights: [
        'Deserto del Sahara a Merzouga e le dune di Erg Chebbi',
        'Passeggiata a dorso di dromedario nel deserto al tramonto',
        'Kasbah di Ait Ben Haddou, Patrimonio Mondiale dell\'UNESCO',
        'Percorso panoramico attraverso le vette dell\'Alto Atlante',
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
          title: 'Marrakech – Alto Atlante – Kasbah Telouet – Kasbah Ait Ben Haddou – Ouarzazate',
          content: 'Partenza da Marrakech attraverso il valico di Tizi n\'Tichka (2.260 m). Visita alla splendida Kasbah di Telouet e discesa nella Valle di Ounila fino al celeberrimo ksar di Ait Ben Haddou (Patrimonio UNESCO). Arrivo a Ouarzazate per la cena e il pernottamento.'
        },
        {
          day: 'Giorno 2',
          title: 'Ouarzazate – Agdz – Valle del Draa – Nkob – Deserto di Merzouga',
          content: 'Viaggio verso sud oltre il passo di Tinififft e gli sterminati palmeti della Valle del Draa. Proseguimento via Nkob e Rissani fino a Merzouga. Passeggiata sui dromedari al tramonto verso il campo tendato di lusso a Erg Chebbi per una cena tipica sotto le stelle.'
        },
        {
          day: 'Giorno 3',
          title: 'Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Oasi di Erg Chebbi',
          content: 'Intera giornata nel deserto in 4x4: visita alle famiglie nomadi berbere nelle tende tradizionali, spettacolo musicale dei maestri Gnawa a Khamlia e sosta all\'oasi. Pomeriggio tra le dune e seconda notte a Merzouga.'
        },
        {
          day: 'Giorno 4',
          title: 'Sahara di Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades',
          content: 'Alba indimenticabile sulle dune e partenza verso il mercato carovaniero di Rissani. Sosta a Erfoud per i fossili e passeggiata nelle suggestive Gole del Todra tra falesie a strapiombo. Cena e pernottamento nella Valle del Dades.'
        },
        {
          day: 'Giorno 5',
          title: 'Valle del Dades – Valle delle Rose – Palmeraie di Skoura – Kasbah Amridil – Marrakech',
          content: 'Ritorno attraverso la Valle delle Rose e visita alla storica Kasbah Amridil a Skoura. Attraversamento dell\'Alto Atlante e arrivo a Marrakech nel tardo pomeriggio con accompagnamento al tuo alloggio.'
        }
      ],
      mapDestinations: [
        {
          number: 1,
          name: "Marrakech",
          day: "Giorno 1",
          subtitle: "Partenza",
          desc: "Kasbah Telouet, Ait Ben Haddou e Ouarzazate."
        },
        {
          number: 2,
          name: "Valle del Draa",
          day: "Giorno 2",
          subtitle: "Oasi e Palmeti",
          desc: "Viaggio lungo il Draa verso le dune di Merzouga."
        },
        {
          number: 3,
          name: "Merzouga Sahara",
          day: "Giorno 3",
          subtitle: "Esperienza Nomade",
          desc: "Musica Gnawa, nomadi berberi e 4x4."
        },
        {
          number: 4,
          name: "Gole del Todra",
          day: "Giorno 4",
          subtitle: "Canyon dell'Atlante",
          desc: "Falesie del Todra e Valle del Dades."
        },
        {
          number: 5,
          name: "Marrakech",
          day: "Giorno 5",
          subtitle: "Rientro",
          desc: "Kasbah Amridil, Alto Atlante e arrivo a Marrakech."
        }
      ],
      galleryImages: [
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_1.webp",
          cap: "Torri e merli della Kasbah fortificata di Ait Ben Haddou",
          alt: "Torri in terra battuta e merlature alla Kasbah di Ait Ben Haddou"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_10.webp",
          cap: "Mongolfiere che sorvolano la palmeraie di Marrakech all'alba",
          alt: "Mongolfiere in volo sopra la piana del palmeto di Marrakech all'aurora"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_2.webp",
          cap: "Guida con dromedari tra le dune sotto un cielo tempestoso",
          alt: "Guida che conduce la carovana di dromedari sulle dune sabbiose"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_3.webp",
          cap: "Donne in abaya tradizionale lungo un vicolo color ocra",
          alt: "Donne tradizionali che camminano in un vicolo ocra della medina"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_4.webp",
          cap: "Mura in argilla rossa e finestre della Kasbah Taourirt a Ouarzazate",
          alt: "Pareti in terra rossa e finestre intagliate alla Kasbah Taourirt"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_5.webp",
          cap: "Gatta che allatta il cucciolo su un cuscino berbero in riad",
          alt: "Mamma gatta che nutre il micetto su un cuscino artigianale berbero"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_6.webp",
          cap: "Boccette di profumo e specchi decorati in bottega artigianale",
          alt: "Flaconi di profumo artigianale e specchi intarsiati in negozio locale"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_8.webp",
          cap: "Uomo locale con turbante arancione davanti a edificio in adobe",
          alt: "Uomo del deserto con turbante color arancio davanti a una casa in terra cruda"
        },
        {
          src: "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/hero_2.webp",
          cap: "Veduta panoramica della fortezza arroccata di Ait Ben Haddou",
          alt: "Panorama dell'antica fortezza sulla collina di Ait Ben Haddou"
        }
      ],
      faqs: [
        {
          question: "Questo tour è privato o condiviso?",
          answer: "È un viaggio interamente privato: il veicolo, l'autista e le escursioni sono a tuo uso esclusivo."
        },
        {
          question: "Quanto dura la passeggiata sui dromedari e c'è un'alternativa?",
          answer: "Dura da 45 minuti a un'ora e mezza. Su richiesta è disponibile il trasferimento in fuoristrada 4x4 senza supplementi."
        },
        {
          question: "La tenda nel campo del deserto dispone di bagno privato?",
          answer: "Sì, ogni tenda del nostro campo di lusso è dotata di letti confortevoli e bagno privato con doccia e acqua calda."
        },
        {
          question: "Dove avvengono il prelievo e il rientro?",
          answer: "Ti preleveremo direttamente al tuo alloggio a Marrakech e ti riaccompagneremo al termine dell'itinerario."
        },
        {
          question: "Che tipo di veicolo viene impiegato per il tour?",
          answer: "Impieghiamo comodi fuoristrada 4x4 o moderni minivan con aria condizionata e capienza ottimale per i bagagli."
        },
        {
          question: "È possibile richiedere menu per esigenze dietetiche particolari?",
          answer: "Certamente, segnalaci regimi vegetariani, vegani, celiaci o halal in fase di prenotazione per predisporre menu su misura."
        },
        {
          question: "Il viaggio è indicato per persone di ogni età?",
          answer: "Assolutamente sì: con 5 giorni a disposizione le tappe sono calibrate e rilassanti per famiglie, coppie e anziani."
        },
        {
          question: "Qual è il periodo migliore dell'anno per effettuare questo tour?",
          answer: "La primavera e l'autunno sono le stagioni più piacevoli. Anche l'inverno offre giornate limpide e temperature miti di giorno."
        }
      ]
    }
  }
];

for (const item of toursBatch) {
  fs.writeFileSync(path.resolve(`src/data/locales/es/tours/${item.slug}.json`), JSON.stringify(item.es, null, 2), 'utf-8');
  fs.writeFileSync(path.resolve(`src/data/locales/it/tours/${item.slug}.json`), JSON.stringify(item.it, null, 2), 'utf-8');
  console.log(`Saved tour ${item.slug} in ES and IT!`);
}
