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
// Tour 30: 10-days-in-morocco-from-fes
// -------------------------------------------------------------
const tour30_es = {
  slug: "10-days-in-morocco-from-fes",
  title: "Tour de 10 Días por Marruecos desde Fez hasta Tánger | Sahara Star Tours",
  shortTitle: "Tour de 10 Días por Marruecos desde Fez",
  description: "Emprenda un viaje privado de 10 días por Marruecos desde Fez. Descubra las dunas de Merzouga, la vibrante Marrakech, Casablanca y la perla azul de Chefchaouen.",
  aboutHtml: "Este gran viaje privado de 10 días por Marruecos comienza en Fez y concluye en Tánger (o Fez, según su plan de vuelos). A lo largo de la ruta vivirá la magia de Fez, Ifrane, los bosques de cedros, el Valle del Ziz, las dunas de Merzouga, las gargantas del Atlas, Marrakech, la costa de Essaouira, Casablanca, Rabat y Chefchaouen. El itinerario está diseñado para equilibrar etapas panorámicas con paradas enriquecedoras, experiencias locales auténticas y tiempo libre para saborear cada destino con calma y confort.",
  duration: "10 Días / 9 Noches",
  startingFrom: "Fez",
  price: "Desde 1.250 $/persona",
  highlights: [
    "Desierto del Sahara en Merzouga y las dunas de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer y campamento de lujo",
    "Kasbah de Ait Ben Haddou declarada Patrimonio de la Humanidad por la UNESCO",
    "Paso panorámico a través de las altas cumbres del Alto Atlas",
    "Chefchaouen, la mágica ciudad azul en las montañas del Rif",
    "Medina histórica de Fez y sus tesoros culturales milenarios"
  ],
  inclusions: [
    "Vehículo privado 4x4 o monovolumen moderno con aire acondicionado",
    "Chófer y guía local profesional con traslados privados",
    "Combustible, peajes y todos los gastos operativos del vehículo",
    "Alojamiento en riads y hoteles con encanto especificados en el itinerario",
    "Desayunos diarios y cenas incluidas según el programa detallado",
    "Paseo en camello por el desierto y estancia en campamento de jaimas de lujo"
  ],
  exclusions: [
    "Almuerzos y bebidas durante el viaje",
    "Billetes de avión internacionales y servicios no especificados",
    "Gastos personales y actividades opcionales",
    "Propinas para guías y chófer"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Llegada a Fez",
      content: "Su circuito de 10 días comienza con la bienvenida en el aeropuerto de Fez y el traslado privado a su riad tradicional. Tiempo libre para descansar y aclimatarse al encanto de la medina."
    },
    {
      day: "Día 2",
      title: "Visita Guiada Monumental de Fez",
      content: "Tras el desayuno, visita guiada oficial por los monumentos de Fez, capital cultural y espiritual de Marruecos. Comenzamos por las puertas doradas del Palacio Real y el barrio judío (Mellah), seguido de una panorámica desde la fortaleza de Borj Sud. A continuación, recorrido a pie por la medina medieval UNESCO: la puerta Bab Boujloud, la Madraza Bou Inania, la fuente Nejjarine, las milenarias tenerías de Chouara y la Universidad Al Quaraouiyine. Tarde libre en el riad."
    },
    {
      day: "Día 3",
      title: "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      content: "Viaje al sur cruzando Imouzzer e Ifrane, conocida como 'la Suiza de Marruecos'. Parada en los bosques de cedros de Azrou para ver a los macacos de Berbería en libertad. Almuerzo en Midelt y descenso a través del puerto de Tizi n'Tilghmt siguiendo el palmeral del Valle del Ziz. Por la tarde, llegada a las doradas dunas de Erg Chebbi en Merzouga. Travesía en camello para contemplar la puesta de sol y llegada al campamento de lujo. Cena bereber, música de tambores junto a la hoguera y noche estrellada."
    },
    {
      day: "Día 4",
      title: "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      content: "Despedida del desierto y visita al animado zoco tradicional de Rissani. En Erfoud conoceremos un taller de artesanía en mármol fosilizado. Continuación a través de Touroug y Tinjdad hacia las impresionantes Gargantas del Todra, cañón de paredes rocosas de más de 300 metros ideal para caminatas. Almuerzo en el desfiladero y viaje hacia el Valle del Dades, parando en las formaciones de los dedos de mono. Cena y noche en riad."
    },
    {
      day: "Día 5",
      title: "Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      content: "Ruta hacia Kelaat M'Gouna en el Valle de las Rosas y los frondosos palmerales de Skoura. Llegada a Ouarzazate, la puerta del desierto y sus estudios de cine. Visita a la emblemática Kasbah de Ait Ben Haddou, fortaleza de barro declarada Patrimonio Mundial por la UNESCO y escenario de Gladiator y Juego de Tronos. Ascenso panorámico del Alto Atlas por el paso de Tizi n'Tichka (2.260 m) con paradas fotográficas antes de llegar a Marrakech. Alojamiento en riad."
    },
    {
      day: "Día 6",
      title: "Visita Guiada por los Monumentos de Marrakech",
      content: "Jornada de descubrimiento guiado por la Ciudad Roja: el Palacio de la Bahía, la Madraza Ben Youssef, la mezquita Koutoubia y los zocos artesanales de la medina llenos de aromas y colores. Tiempo libre en la vibrante Plaza Jemaa el-Fna. Por la tarde, visita a los Jardines Majorelle y recorrido por el moderno barrio de Gueliz antes de regresar al riad."
    },
    {
      day: "Día 7",
      title: "Marrakech – Essaouira",
      content: "Salida hacia la atlántica Essaouira con paradas panorámicas en los campos de argán para observar las cabras trepadoras y visitar una cooperativa tradicional de mujeres. Llegada a la histórica Mogador para disfrutar del puerto pesquero con sus barcas azules, las murallas artilladas de la Skala frente al mar y la encantadora medina encalada. Noche en riad de Essaouira."
    },
    {
      day: "Día 8",
      title: "Essaouira – Casablanca",
      content: "Salida hacia Casablanca, la capital económica del reino. Visita exterior e interior de la monumental Mezquita Hassan II sobre el océano, la cornisa de Ain Diab y la Plaza de Mohamed V, con parada en el emblemático Rick's Café. Noche en hotel de Casablanca."
    },
    {
      day: "Día 9",
      title: "Casablanca – Visita de Rabat – Chefchaouen",
      content: "Traslado a Rabat para visitar la capital del reino: la Torre Hassan, el Mausoleo de Mohamed V y la Kasbah de los Oudayas frente a la desembocadura del río. Por la tarde, nos dirigimos al norte por Ouazzane adentrándonos en el Rif hasta llegar a la cautivadora ciudad azul de Chefchaouen. Alojamiento en hotel con encanto."
    },
    {
      day: "Día 10",
      title: "Chefchaouen – Traslado a Tánger y Fin del Tour",
      content: "Mañana para disfrutar de un último paseo por las callejuelas azules de Chefchaouen antes del traslado panorámico al aeropuerto o puerto de Tánger (o Fez según sus vuelos), dando por finalizado este inolvidable circuito de 10 días."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Llegada a Fez", day: "Día 1", subtitle: "Bienvenida", desc: "Recepción en el aeropuerto de Fez y traslado al riad." },
    { number: 2, name: "Visita de Fez", day: "Día 2", subtitle: "Medina Medieval", desc: "Recorrido oficial por la medina UNESCO, madrazas y tenerías." },
    { number: 3, name: "Fez a Merzouga", day: "Día 3", subtitle: "Medio Atlas y Dunas", desc: "Ifrane, bosque de cedros, Valle del Ziz y noche en jaima en el Sahara." },
    { number: 4, name: "Merzouga a Dades", day: "Día 4", subtitle: "Gargantas del Todra", desc: "Zoco de Rissani, fósiles de Erfoud y cañón del Todra." },
    { number: 5, name: "Dades a Marrakech", day: "Día 5", subtitle: "Kasbahs y Alto Atlas", desc: "Valle de las Rosas, Ait Ben Haddou y paso de Tizi n'Tichka." },
    { number: 6, name: "Marrakech", day: "Día 6", subtitle: "La Ciudad Roja", desc: "Palacio de la Bahía, medina, zocos y Plaza Jemaa el-Fna." },
    { number: 7, name: "Essaouira", day: "Día 7", subtitle: "Costa Atlántica", desc: "Murallas de la Skala, puerto de pescadores y brisa marina." },
    { number: 8, name: "Casablanca", day: "Día 8", subtitle: "Metrópolis Moderna", desc: "Mezquita Hassan II frente al mar y cornisa atlántica." },
    { number: 9, name: "Rabat y Chefchaouen", day: "Día 9", subtitle: "Capital y Ciudad Azul", desc: "Torre Hassan en Rabat y callejones azules en el Rif." },
    { number: 10, name: "Tánger", day: "Día 10", subtitle: "Salida", desc: "Traslado al aeropuerto o puerto de Tánger y despedida." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_1.webp", cap: "Galería 1", alt: "Largas sombras de jinetes en camello proyectadas sobre las dunas de Erg Chebbi" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_10.webp", cap: "Galería 10", alt: "Vista de la ladera con casas pintadas de azul en la medina de Chefchaouen" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_2.webp", cap: "Galería 2", alt: "Silueta del minarete de la Mezquita Koutoubia al atardecer en Marrakech" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_3.webp", cap: "Galería 3", alt: "Vista elevada de las cubas de tinte de piedra en las tenerías Chouara de Fez" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_4.webp", cap: "Galería 4", alt: "Casas encaladas de azul en la medina de Chefchaouen en las laderas del Rif" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_5.webp", cap: "Galería 5", alt: "Arco de Caracalla y columnas de piedra en el sitio arqueológico de Volubilis" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_6.webp", cap: "Galería 6", alt: "Estrecho callejón escalonado con puertas tradicionales tachonadas en Chefchaouen" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_7.webp", cap: "Galería 7", alt: "Murallas de adobe y torres almenadas de la Kasbah Taourirt en Ouarzazate" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_8.webp", cap: "Galería 8", alt: "Vasta llanura pedregosa de hamada extendiéndose hacia el horizonte desértico" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_9.webp", cap: "Galería 9", alt: "Puestos de comida iluminados y multitudes en la Plaza Jemaa el-Fna al anochecer" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/hero_2.webp", cap: "Hero 2", alt: "Columnas corintias y escalinatas del Capitolio romano en Volubilis" }
  ],
  faqs: [
    { question: "¿Es este un tour privado o compartido?", answer: "Se trata de una experiencia totalmente privada: el vehículo, el chófer y el itinerario están reservados en exclusiva para su grupo, permitiendo ajustar los ritmos a sus preferencias." },
    { question: "¿Cuánto dura el paseo en camello y existe alternativa?", answer: "El paseo en camello suele durar entre 45 minutos y una hora y media. Si lo prefiere, se puede organizar el traslado al campamento en vehículo 4x4 sin coste adicional." },
    { question: "¿La jaima del campamento en el desierto es privada?", answer: "Sí, el campamento de lujo ofrece jaimas privadas de alta gama dotadas de baño completo privado, ducha y agua caliente." },
    { question: "¿Dónde se realizan la recogida y el traslado final?", answer: "La recogida se realiza en su alojamiento o aeropuerto de Fez. El circuito finaliza en Tánger (o Fez según sus vuelos), confirmándose el punto exacto al reservar." },
    { question: "¿Qué tipo de vehículo se utiliza durante el circuito?", answer: "El transporte se efectúa en un moderno todoterreno 4x4 o monovolumen con aire acondicionado. Para grupos más grandes se emplean minibuses ejecutivos." },
    { question: "¿Se pueden adaptar las comidas a dietas especiales?", answer: "Por supuesto. Indíquenos sus preferencias dietéticas al hacer la reserva para que riads, restaurantes y el campamento preparen menús vegetarianos, veganos o sin gluten." },
    { question: "¿Es este itinerario apto para viajeros de todas las edades?", answer: "Sí, aunque algunas jornadas contemplan trayectos por carretera, se programan paradas frecuentes para pasear y descansar. El ritmo es flexible y cómodo." },
    { question: "¿Cuál es la mejor época del año para realizar este tour?", answer: "La primavera y el otoño brindan temperaturas suaves y agradables en todo Marruecos. El invierno también es excelente para disfrutar del desierto con cielos limpios." }
  ]
};

const tour30_it = {
  slug: "10-days-in-morocco-from-fes",
  title: "Tour di 10 Giorni in Marocco da Fes a Tangeri | Sahara Star Tours",
  shortTitle: "Tour di 10 Giorni in Marocco da Fes",
  description: "Partite per un tour privato di 10 giorni in Marocco da Fes. Scoprite le dune di Merzouga, la vivace Marrakech, Casablanca e la perla blu Chefchaouen.",
  aboutHtml: "Questo magnifico viaggio privato di 10 giorni in Marocco inizia a Fes e si conclude a Tangeri (oppure a Fes in base ai vostri voli). Lungo il percorso ammirerete Fes, Ifrane, le foreste di cedri, la Valle dello Ziz, le imponenti dune di Merzouga, le gole montane, Marrakech, la costa di Essaouira, Casablanca, Rabat e Chefchaouen. L'itinerario è studiato per bilanciare panoramici percorsi in auto con soste culturali, esperienze autentiche e il giusto tempo per vivere ogni luogo con serenità.",
  duration: "10 Giorni / 9 Notti",
  startingFrom: "Fes",
  price: "Da 1.250 €/persona",
  highlights: [
    "Deserto del Sahara a Merzouga e le maestose dune dell'Erg Chebbi",
    "Trekking a dorso di cammello al tramonto e notte in campo tendato di lusso",
    "Kasbah di Ait Ben Haddou Patrimonio Mondiale dell'Umanità UNESCO",
    "Valico panoramico attraverso le vette dell'Alto Atlante",
    "Chefchaouen, la magica città dipinta di blu sui monti del Rif",
    "Antica medina di Fes e i suoi tesori culturali millenari"
  ],
  inclusions: [
    "Trasporto privato in 4x4 o minivan moderno con aria condizionata",
    "Autista e guida locale esperta con transfer privati inclusi",
    "Carburante, pedaggi e tutti i costi operativi del veicolo",
    "Pernottamenti in riad e hotel di charme selezionati secondo programma",
    "Prime colazioni giornaliere e cene specificate nell'itinerario",
    "Escursione in cammello nel deserto e soggiorno in campo tendato di lusso"
  ],
  exclusions: [
    "Pranzi e bevande durante il viaggio",
    "Voli aerei e servizi aeroportuali non menzionati",
    "Spese personali e attività facoltative",
    "Mance per autista e guide locali"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Arrivo a Fes",
      content: "Il tour di 10 giorni inizia con l'accoglienza all'aeroporto di Fes e il trasferimento privato nel vostro riad tradizionale. Tempo a disposizione per rilassarsi e respirare l'atmosfera della medina."
    },
    {
      day: "Giorno 2",
      title: "Visita Guidata dei Monumenti di Fes",
      content: "Dopo colazione, tour guidato con guida ufficiale locale a Fes, capitale culturale e religiosa del Marocco. Sosta alle porte dorate del Palazzo Reale, nel quartiere ebraico del Mellah e al forte Borj Sud per una vista dall'alto della città. Passeggiata guidata nella medina UNESCO attraverso la porta Bab Boujloud: la Madrasa Bou Inania, la fontana Nejjarine, le concerie di Chouara e la storica Università Al Quaraouiyine. Pomeriggio libero e rientro in riad."
    },
    {
      day: "Giorno 3",
      title: "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      content: "Partenza verso sud passando per Imouzzer e Ifrane, la 'Svizzera del Marocco'. Sosta nella secolare foresta di cedri di Azrou per osservare i macachi di Barberia. Pranzo a Midelt e discesa attraverso il passo Tizi n'Tilghmt lungo la Valle dello Ziz. Arrivo nel pomeriggio alle dune dorate dell'Erg Chebbi a Merzouga. Carovana a dorso di dromedario per ammirare il tramonto sulle dune prima di raggiungere il lussuoso campo tendato. Cena berbera, musica attorno al falò e cielo stellato."
    },
    {
      day: "Giorno 4",
      title: "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      content: "Uscita dal deserto e visita al vivace mercato tradizionale di Rissani. A Erfoud sosta in una bottega di lavorazione dei marmi fossili. Proseguimento attraverso i palmeti di Touroug e Tinjdad verso le monumentali Gole del Todra, canyon roccioso con pareti a strapiombo di oltre 300 metri. Tempo per il pranzo e proseguimento verso la Valle del Dades con sosta alle formazioni 'dita di scimmia'. Cena e pernottamento in riad."
    },
    {
      day: "Giorno 5",
      title: "Valle del Dades – Valle delle Rose – Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlante – Marrakech",
      content: "Viaggio attraverso Kelaat M'Gouna nella Valle delle Rose e i palmeti di Skoura. Arrivo a Ouarzazate e visita agli studi cinematografici. Esplorazione della splendida Kasbah fortificata di Ait Ben Haddou, sito UNESCO set di film memorabili come Il Gladiatore. Valico dell'Alto Atlante attraverso il panoramico passo Tizi n'Tichka (2.260 m) fino a raggiungere Marrakech in serata. Pernottamento in riad."
    },
    {
      day: "Giorno 6",
      title: "Visita Guidata dei Monumenti di Marrakech",
      content: "Giornata dedicata alla scoperta di Marrakech con guida ufficiale: il maestoso Palazzo della Bahia, la Madrasa Ben Youssef, la Moschea Koutoubia e i colorati souk artigianali della medina. Sosta nella celebre Piazza Jemaa el-Fna. Nel pomeriggio visita dei Giardini Majorelle e passaggio nel quartiere moderno di Gueliz prima del rientro in riad."
    },
    {
      day: "Giorno 7",
      title: "Marrakech – Essaouira",
      content: "Partenza verso la costa atlantica per Essaouira con soste tra le foreste di argan per osservare le capre sugli alberi e visitare una cooperativa femminile. Arrivo a Essaouira (l'antica Mogador) per visitare i bastioni della Skala con i cannoni storici, il pittoresco porto dei pescatori e la medina bianca affacciata sull'oceano. Pernottamento in riad a Essaouira."
    },
    {
      day: "Giorno 8",
      title: "Essaouira – Casablanca",
      content: "Viaggio lungo la costa verso Casablanca, polo economico del regno. Visita della grandiosa Moschea Hassan II costruita sul mare, della corniche di Ain Diab e di Piazza Mohammed V, con sosta al celebre Rick's Café. Pernottamento a Casablanca."
    },
    {
      day: "Giorno 9",
      title: "Casablanca – Visita di Rabat – Chefchaouen",
      content: "Trasferimento a Rabat per scoprire i principali monumenti della capitale: la Torre di Hassan, il Mausoleo di Mohammed V e la suggestiva Kasbah degli Oudaïa. Nel pomeriggio viaggio verso nord attraverso le montagne del Rif fino alla magica città blu di Chefchaouen. Pernottamento in hotel."
    },
    {
      day: "Giorno 10",
      title: "Chefchaouen – Trasferimento a Tangeri e Fine del Tour",
      content: "Tempo libero per un'ultima passeggiata tra i vicoli blu di Chefchaouen prima del comodo trasferimento all'aeroporto o al porto di Tangeri (o Fes in base ai vostri voli), a conclusione del tour di 10 giorni."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Arrivo a Fes", day: "Giorno 1", subtitle: "Accoglienza", desc: "Transfer privato dall'aeroporto di Fes al vostro riad." },
    { number: 2, name: "Visita di Fes", day: "Giorno 2", subtitle: "Medina Medievale", desc: "Tour guidato della medina UNESCO, madrase e concerie." },
    { number: 3, name: "Da Fes a Merzouga", day: "Giorno 3", subtitle: "Medio Atlante e Dune", desc: "Ifrane, foresta di cedri, Valle dello Ziz e notte in tenda nel Sahara." },
    { number: 4, name: "Da Merzouga a Dades", day: "Giorno 4", subtitle: "Gole del Todra", desc: "Mercato di Rissani, fossili di Erfoud e canyon del Todra." },
    { number: 5, name: "Da Dades a Marrakech", day: "Giorno 5", subtitle: "Kasbah e Alto Atlante", desc: "Valle delle Rose, Ait Ben Haddou e passo del Tizi n'Tichka." },
    { number: 6, name: "Marrakech", day: "Giorno 6", subtitle: "La Città Rossa", desc: "Palazzo della Bahia, souk artigianali e Piazza Jemaa el-Fna." },
    { number: 7, name: "Essaouira", day: "Giorno 7", subtitle: "Costa Atlantica", desc: "Bastioni della Skala, porto peschereccio e brezza oceanica." },
    { number: 8, name: "Casablanca", day: "Giorno 8", subtitle: "Metropoli Moderna", desc: "Moschea Hassan II sul mare e corniche atlantica." },
    { number: 9, name: "Rabat e Chefchaouen", day: "Giorno 9", subtitle: "Capitale e Città Blu", desc: "Torre di Hassan a Rabat e vicoli dipinti di blu nel Rif." },
    { number: 10, name: "Tangeri", day: "Giorno 10", subtitle: "Partenza", desc: "Transfer all'aeroporto o al porto di Tangeri e arrivederci." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_1.webp", cap: "Galleria 1", alt: "Lunghe ombre di viaggiatori a dorso di cammello sulle dune di sabbia dell'Erg Chebbi" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_10.webp", cap: "Galleria 10", alt: "Scorcio panoramico delle case dipinte di blu nella medina di Chefchaouen" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_2.webp", cap: "Galleria 2", alt: "Profilo del minareto della Moschea Koutoubia al tramonto a Marrakech" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_3.webp", cap: "Galleria 3", alt: "Veduta dall'alto delle vasche di tintura in pietra nelle concerie di Chouara a Fes" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_4.webp", cap: "Galleria 4", alt: "Edifici dipinti di blu nella medina di Chefchaouen adagiata sui pendii montuosi" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_5.webp", cap: "Galleria 5", alt: "Arco di Caracalla e colonne della basilica romana nel sito archeologico di Volubilis" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_6.webp", cap: "Galleria 6", alt: "Stretta scalinata blu con tradizionali portoncini borchiati a Chefchaouen" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_7.webp", cap: "Galleria 7", alt: "Mura in terra cruda e torri merlate della Kasbah di Taourirt a Ouarzazate" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_8.webp", cap: "Galleria 8", alt: "Vasto altopiano roccioso dell'hamada desertica verso l'orizzonte" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_9.webp", cap: "Galleria 9", alt: "Bancarelle gastronomiche illuminate e folla serale in Piazza Jemaa el-Fna" },
    { src: "/sahara-star-tours/10-days-in-morocco-from-fes/images/hero_2.webp", cap: "Hero 2", alt: "Colonne corinzie e gradinate del Campidoglio romano a Volubilis" }
  ],
  faqs: [
    { question: "Questo tour è privato o condiviso?", answer: "Si tratta di un tour completamente privato: il mezzo, l'autista e l'itinerario sono a vostro uso esclusivo, permettendo di personalizzare tappe e orari." },
    { question: "Quanto dura la cammellata ed esistono alternative?", answer: "Il trekking a dorso di dromedario dura circa 45 minuti - 1 ora e mezza. In alternativa è possibile raggiungere il campo in fuoristrada 4x4 senza costi aggiuntivi." },
    { question: "La tenda dell'accampamento nel deserto è privata?", answer: "Sì, il campo tendato di lusso offre ampie tende private con bagno interno, doccia e acqua calda corrente." },
    { question: "Dove avvengono il prelievo e il rilascio finale?", answer: "Il pick-up è previsto al vostro alloggio o all'aeroporto di Fes. Il tour si conclude a Tangeri (o Fes a seconda del volo), con punto esatto confermato alla prenotazione." },
    { question: "Quale tipo di veicolo viene utilizzato?", answer: "Il viaggio si svolge in un moderno veicolo fuoristrada 4x4 o minivan con aria condizionata. Per gruppi più numerosi sono disponibili comodi minibus." },
    { question: "È possibile richiedere menu per diete speciali?", answer: "Certamente. Segnalateci eventuali esigenze alimentari in fase di prenotazione e organizzeremo pasti adatti, inclusi menu vegetariani, vegani o senza glutine." },
    { question: "L'itinerario è adatto a viaggiatori di tutte le età?", answer: "Sì, benché alcune giornate prevedano trasferimenti panoramici, sono previste soste frequenti per riposare e ammirare i panorami." },
    { question: "Qual è il periodo migliore per questo viaggio?", answer: "La primavera e l'autunno offrono un clima ideale in tutto il paese. L'inverno è particolarmente piacevole per il deserto del Sahara meridionale." }
  ]
};

saveTour('10-days-in-morocco-from-fes', tour30_es, tour30_it);

// -------------------------------------------------------------
// Tour 31: 10-days-morocco-grand-tour-from-marrakech
// -------------------------------------------------------------
const tour31_es = {
  slug: "10-days-morocco-grand-tour-from-marrakech",
  title: "Gran Tour de 10 Días por Marruecos de Marrakech a Tánger | Sahara Star Tours",
  shortTitle: "Gran Tour de 10 Días de Marrakech a Tánger",
  description: "Gran viaje privado de 10 días por Marruecos desde Marrakech hasta Tánger. Cruce el Alto Atlas, duerma bajo las estrellas en Erg Chebbi y explore la imperial Fez.",
  aboutHtml: "Este gran circuito privado de 10 días por Marruecos comienza en Marrakech y culmina en Tánger. A lo largo del camino disfrutará de la magia de Marrakech, la brisa de Essaouira, el cruce del Alto Atlas, la Kasbah de Ait Ben Haddou, el Valle de las Rosas, las dunas de Erg Chebbi, los palmerales del Ziz, la medina imperial de Fez, las ruinas romanas de Volubilis y la icónica perla azul de Chefchaouen.",
  duration: "10 Días / 9 Noches",
  startingFrom: "Marrakech",
  price: "Desde 1.250 $/persona",
  highlights: [
    "Desierto del Sahara en Merzouga y las dunas de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer y campamento de lujo",
    "Kasbah de Ait Ben Haddou declarada Patrimonio de la Humanidad por la UNESCO",
    "Paso panorámico a través de las altas cumbres del Alto Atlas",
    "Chefchaouen, la mágica ciudad azul en las montañas del Rif",
    "Medina histórica de Fez y sus tesoros culturales milenarios"
  ],
  inclusions: [
    "Vehículo privado 4x4 o monovolumen moderno con aire acondicionado",
    "Chófer y guía local profesional con traslados privados",
    "Combustible, peajes y todos los gastos operativos del vehículo",
    "Alojamiento en riads y hoteles con encanto especificados en el itinerario",
    "Desayunos diarios y cenas incluidas según el programa detallado",
    "Paseo en camello por el desierto y estancia en campamento de jaimas de lujo"
  ],
  exclusions: [
    "Almuerzos y bebidas durante el viaje",
    "Billetes de avión internacionales y servicios no especificados",
    "Gastos personales y actividades opcionales",
    "Propinas para guías y chófer"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Llegada a Marrakech",
      content: "Su viaje comienza con la bienvenida en el aeropuerto de Marrakech y el traslado privado a su alojamiento en un riad tradicional con encanto."
    },
    {
      day: "Día 2",
      title: "Marrakech – Excursión Costera a Essaouira",
      content: "Tras el desayuno, viaje hacia la costa atlántica a Essaouira. Paradas en cooperativas de aceite de argán para observar las cabras trepadoras. En Essaouira dispondrá de tiempo libre para recorrer las murallas de la Skala, el animado puerto pesquero y la medina blanca protegida por la UNESCO. Noche en riad de Essaouira."
    },
    {
      day: "Día 3",
      title: "Essaouira – Visita Guiada por Marrakech",
      content: "Regreso a Marrakech para descubrir los monumentos icónicos de la Ciudad Roja con un guía local oficial: el Palacio de la Bahía, la Madraza Ben Youssef, la mezquita Koutoubia y los zocos artesanales de la medina. Tarde en la Plaza Jemaa el-Fna y noche en riad."
    },
    {
      day: "Día 4",
      title: "Marrakech – Alto Atlas – Kasbah Ait Ben Haddou – Valle de las Rosas – Valle del Dades",
      content: "Travesía del Alto Atlas por el espectacular paso de Tizi n'Tichka con vistas a pueblos bereberes. Visita a pie de la Kasbah de Ait Ben Haddou (Patrimonio de la Humanidad por la UNESCO), célebre escenario de Gladiator. Continuación hacia Ouarzazate, el palmeral de Skoura y el Valle de las Rosas hasta llegar a Boumalne Dades. Cena y noche en riad."
    },
    {
      day: "Día 5",
      title: "Valle del Dades – Gargantas del Todra – Dunas de Merzouga – Noche en Campamento de Lujo",
      content: "Visita al majestuoso cañón de las Gargantas del Todra con paredes de 300 metros de altura. Almuerzo y trayecto a través de los palmerales hacia el desierto de Merzouga. Caravana en camello sobre las dunas doradas de Erg Chebbi al atardecer y llegada al campamento de lujo. Cena bereber, tambores junto al fuego y noche bajo las estrellas."
    },
    {
      day: "Día 6",
      title: "Exploración del Desierto – Familias Nómadas – Música Gnawa de Khamlia",
      content: "Amanecer inolvidable en las dunas y desayuno. Jornada en 4x4 por el desierto: antiguas minas de kohl, encuentro con familias nómadas bereberes en sus jaimas y concierto de música espiritual Gnawa en Khamlia. Paseo por el palmeral y el lago de los flamencos. Cena y noche en riad junto a las dunas."
    },
    {
      day: "Día 7",
      title: "Merzouga – Erfoud – Midelt – Bosque de Cedros – Ifrane – Fez",
      content: "Salida del desierto visitando el mercado de Rissani y talleres de fósiles en Erfoud. Travesía del Valle del Ziz y el Medio Atlas, deteniéndonos en el bosque de cedros de Azrou para ver a los macacos salvajes y en la alpina Ifrane antes de llegar a Fez. Noche en riad."
    },
    {
      day: "Día 8",
      title: "Visita Monumental Guiada de Fez",
      content: "Día dedicado a Fez el-Bali: las puertas doradas del Palacio Real, el barrio judío del Mellah, la vista panorámica desde Borj Sud, la Madraza Al Attarine, las milenarias tenerías de Chouara y la Universidad Al Quaraouiyine. Tarde libre para descansar o explorar los zocos."
    },
    {
      day: "Día 9",
      title: "Fez – Meknes – Ruinas Romanas de Volubilis – Chefchaouen",
      content: "Visita de Meknes (Bab Mansour y Mausoleo de Moulay Ismail) y las impresionantes ruinas romanas de Volubilis con sus mosaicos conservados. Continuación hacia las montañas del Rif hasta la perla azul de Chefchaouen. Tarde libre en sus callejones azules y noche en riad."
    },
    {
      day: "Día 10",
      title: "Chefchaouen – Traslado al Aeropuerto de Tánger",
      content: "Tiempo libre por la mañana para fotografiar los rincones azules de Chefchaouen antes del traslado panorámico hacia el aeropuerto de Tánger, concluyendo así este gran viaje de 10 días."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Llegada a Marrakech", day: "Día 1", subtitle: "Bienvenida", desc: "Recogida en el aeropuerto y traslado al riad." },
    { number: 2, name: "Marrakech a Essaouira", day: "Día 2", subtitle: "Costa Atlántica", desc: "Arganes, murallas de la Skala y puerto marinero." },
    { number: 3, name: "Visita de Marrakech", day: "Día 3", subtitle: "Ciudad Roja", desc: "Palacio de la Bahía, Madraza Ben Youssef y zocos." },
    { number: 4, name: "Marrakech a Dades", day: "Día 4", subtitle: "Alto Atlas y Kasbahs", desc: "Paso Tizi n'Tichka, Ait Ben Haddou y Valle de las Rosas." },
    { number: 5, name: "Dades a Merzouga", day: "Día 5", subtitle: "Gargantas y Desierto", desc: "Gargantas del Todra, dunas de Erg Chebbi y campamento de lujo." },
    { number: 6, name: "Región de Merzouga", day: "Día 6", subtitle: "Cultura Nómada", desc: "Música Gnawa en Khamlia y encuentro con nómadas del desierto." },
    { number: 7, name: "Merzouga a Fez", day: "Día 7", subtitle: "Medio Atlas", desc: "Valle del Ziz, bosque de cedros de Azrou e Ifrane." },
    { number: 8, name: "Visita de Fez", day: "Día 8", subtitle: "Medina Imperial", desc: "Recorrido oficial por la medina medieval y tenerías de Chouara." },
    { number: 9, name: "Fez a Chefchaouen", day: "Día 9", subtitle: "Volubilis y el Rif", desc: "Mosaicos romanos de Volubilis y calles azules de Chefchaouen." },
    { number: 10, name: "Tánger", day: "Día 10", subtitle: "Salida", desc: "Traslado al aeropuerto de Tánger y fin del itinerario." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_1.webp", cap: "Galería 1", alt: "Patio ornamentado con cedro tallado y yeserías en la Madraza Ben Youssef" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_10.webp", cap: "Galería 10", alt: "Faroles marroquíes de latón brillante colgados en una terraza al anochecer" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_2.webp", cap: "Galería 2", alt: "Luz dorada de la tarde sobre los edificios azules de Chefchaouen" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_3.webp", cap: "Galería 3", alt: "Carro tirado por un burro en una callejuela tradicional de la medina de Marrakech" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_4.webp", cap: "Galería 4", alt: "Gatito descansando en un rincón de un patio embaldosado de terracota en la medina" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_5.webp", cap: "Galería 5", alt: "Caravana de viajeros a lomos de dromedarios cruzando las dunas del Sahara" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_6.webp", cap: "Galería 6", alt: "Residente local descansando con su carretilla en un callejón de Marrakech" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_7.webp", cap: "Galería 7", alt: "Dromedarios descansando frente a la histórica Kasbah de Ait Ben Haddou" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_8.webp", cap: "Galería 8", alt: "Crestas onduladas esculpidas por el viento en las dunas de arena de Erg Chebbi" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_9.webp", cap: "Galería 9", alt: "Anciano marroquí con fez tradicional junto a una puerta azul en Chefchaouen" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/hero_2.webp", cap: "Hero 2", alt: "Camellos galopando sobre las dunas doradas del Sahara a la luz del atardecer" }
  ],
  faqs: [
    { question: "¿Es este un tour privado o compartido?", answer: "Es una experiencia privada y exclusiva para su grupo, garantizando flexibilidad total en paradas, horarios y ritmo." },
    { question: "¿Cuánto dura el paseo en camello y qué alternativa hay?", answer: "El paseo en camello dura entre 45 minutos y una hora y media. Si prefiere no montar en camello, organizamos el traslado al campamento en 4x4 sin recargo." },
    { question: "¿Las tiendas del campamento en el desierto son privadas?", answer: "Sí, se alojará en tiendas privadas de lujo equipadas con camas confortables, baño privado, lavabo y ducha con agua caliente." },
    { question: "¿Dónde comienzan y terminan los traslados?", answer: "La recogida es en Marrakech (aeropuerto o riad) y el circuito finaliza en Tánger (o Casablanca/Marrakech según sus vuelos)." },
    { question: "¿Qué vehículo se utiliza para el transporte?", answer: "Se utiliza un vehículo privado 4x4 o monovolumen con aire acondicionado. Para familias grandes o grupos disponemos de minibuses de alta gama." },
    { question: "¿Se contemplan restricciones o dietas alimentarias?", answer: "Sí, avísenos de antemano para coordinar opciones vegetarianas, veganas, sin gluten o adaptadas a sus necesidades." },
    { question: "¿Es apto para familias con niños o personas mayores?", answer: "Sí, el itinerario está concebido para todas las edades con descansos regulares y actividades adaptables a cada ritmo." },
    { question: "¿Cuándo es la época idónea para este itinerario?", answer: "La primavera y el otoño son ideales por su clima templado. El invierno ofrece noches estrelladas y temperaturas diurnas muy agradables en el desierto." }
  ]
};

const tour31_it = {
  slug: "10-days-morocco-grand-tour-from-marrakech",
  title: "Gran Tour di 10 Giorni in Marocco da Marrakech a Tangeri | Sahara Star Tours",
  shortTitle: "Gran Tour di 10 Giorni da Marrakech a Tangeri",
  description: "Grande viaggio privato di 10 giorni in Marocco da Marrakech a Tangeri. Attraversate l'Alto Atlante, dormite sotto le stelle a Erg Chebbi ed esplorate Fes.",
  aboutHtml: "Questo grande tour privato di 10 giorni in Marocco inizia a Marrakech e si conclude a Tangeri. Lungo il viaggio vivrete il fascino di Marrakech, la brezza di Essaouira, il valico dell'Alto Atlante, la fortezza di Ait Ben Haddou, la Valle delle Rose, le maestose dune dell'Erg Chebbi, le oasi della Valle dello Ziz, la medina medievale di Fes, i mosaici romani di Volubilis e la perla blu di Chefchaouen.",
  duration: "10 Giorni / 9 Notti",
  startingFrom: "Marrakech",
  price: "Da 1.250 €/persona",
  highlights: [
    "Deserto del Sahara a Merzouga e le maestose dune dell'Erg Chebbi",
    "Trekking a dorso di cammello al tramonto e notte in campo tendato di lusso",
    "Kasbah di Ait Ben Haddou Patrimonio Mondiale dell'Umanità UNESCO",
    "Valico panoramico attraverso le vette dell'Alto Atlante",
    "Chefchaouen, la magica città dipinta di blu sui monti del Rif",
    "Antica medina di Fes e i suoi tesori culturali millenari"
  ],
  inclusions: [
    "Trasporto privato in 4x4 o minivan moderno con aria condizionata",
    "Autista e guida locale esperta con transfer privati inclusi",
    "Carburante, pedaggi e tutti i costi operativi del veicolo",
    "Pernottamenti in riad e hotel di charme selezionati secondo programma",
    "Prime colazioni giornaliere e cene specificate nell'itinerario",
    "Escursione in cammello nel deserto e soggiorno in campo tendato di lusso"
  ],
  exclusions: [
    "Pranzi e bevande durante il viaggio",
    "Voli aerei e servizi aeroportuali non menzionati",
    "Spese personali e attività facoltative",
    "Mance per autista e guide locali"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Arrivo a Marrakech",
      content: "Arrivo all'aeroporto di Marrakech, accoglienza da parte del vostro autista privato e trasferimento nel vostro caratteristico riad tradizionale."
    },
    {
      day: "Giorno 2",
      title: "Marrakech – Escursione sulla Costa di Essaouira",
      content: "Partenza verso la costa atlantica per Essaouira. Sosta tra le piante di argan per vedere le capre arrampicate e visitare una cooperativa femminile. Tempo libero a Essaouira per esplorare i bastioni della Skala, il porto con le caratteristiche barche blu e la medina bianca UNESCO. Pernottamento in riad a Essaouira."
    },
    {
      day: "Giorno 3",
      title: "Essaouira – Visita Guidata di Marrakech",
      content: "Rientro a Marrakech per ammirare i capolavori della Città Rossa con una guida locale: il Palazzo della Bahia, la Madrasa Ben Youssef, la Moschea Koutoubia e i souk degli artigiani. Serata nella vivace Piazza Jemaa el-Fna e pernottamento in riad."
    },
    {
      day: "Giorno 4",
      title: "Marrakech – Alto Atlante – Kasbah Ait Ben Haddou – Valle delle Rose – Valle del Dades",
      content: "Valico dell'Alto Atlante attraverso il passo Tizi n'Tichka con magnifiche vedute panoramiche. Visita a piedi della favolosa Kasbah di Ait Ben Haddou (Patrimonio UNESCO), celebre set del Gladiatore. Proseguimento verso Ouarzazate, il palmeto di Skoura e la Valle delle Rose fino a Boumalne Dades. Cena e pernottamento in riad."
    },
    {
      day: "Giorno 5",
      title: "Valle del Dades – Gole del Todra – Dune di Merzouga – Notte in Campo di Lusso",
      content: "Passeggiata nelle imponenti Gole del Todra, canyon con pareti verticali alte 300 metri. Pranzo e viaggio tra le oasi verso le sabbie dorate di Merzouga. Trekking a dorso di cammello sulle dune dell'Erg Chebbi al tramonto e arrivo al campo tendato di lusso. Cena berbera, musica attorno al falò e cielo stellato."
    },
    {
      day: "Giorno 6",
      title: "Esplorazione del Sahara – Nomadi – Musica Gnawa a Khamlia",
      content: "Alba memorabile tra le dune e colazione. Escursione in fuoristrada nel deserto: antiche miniere di kohl, incontro con famiglie nomadi berbere nelle loro tende e musica tradizionale Gnawa nel villaggio di Khamlia. Sosta all'oasi delle palme e al lago stagionale. Cena e pernottamento in riad ai piedi delle dune."
    },
    {
      day: "Giorno 7",
      title: "Merzouga – Erfoud – Midelt – Foresta di Cedri – Ifrane – Fes",
      content: "Partenza dal deserto con sosta al mercato di Rissani e alle botteghe di fossili a Erfoud. Risalita della Valle dello Ziz e del Medio Atlante con soste nella foresta di cedri di Azrou popolata da macachi e a Ifrane prima dell'arrivo serale a Fes. Pernottamento in riad."
    },
    {
      day: "Giorno 8",
      title: "Visita Monumentale Guidata di Fes",
      content: "Intera giornata a Fes el-Bali con guida ufficiale: le porte dorate del Palazzo Reale, il quartiere ebraico del Mellah, la vista panoramica da Borj Sud, la Madrasa Al Attarine, le storiche concerie di Chouara e l'Università Al Quaraouiyine. Pomeriggio libero nei souk."
    },
    {
      day: "Giorno 9",
      title: "Fes – Meknes – Rovine Romane di Volubilis – Chefchaouen",
      content: "Visita di Meknes (Bab Mansour e Mausoleo di Moulay Ismail) e del sito archeologico romano di Volubilis con i suoi splendidi mosaici. Proseguimento verso le montagne del Rif fino alla città blu di Chefchaouen. Tempo libero tra i vicoli blu e pernottamento in riad."
    },
    {
      day: "Giorno 10",
      title: "Chefchaouen – Trasferimento all'Aeroporto di Tangeri",
      content: "Mattinata libera tra le vie color cobalto di Chefchaouen prima del comodo trasferimento panoramico all'aeroporto di Tangeri, a conclusione del gran tour di 10 giorni."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Arrivo a Marrakech", day: "Giorno 1", subtitle: "Accoglienza", desc: "Pick-up in aeroporto e sistemazione in riad." },
    { number: 2, name: "Marrakech a Essaouira", day: "Giorno 2", subtitle: "Costa Atlantica", desc: "Alberi di argan, bastioni della Skala e porto peschereccio." },
    { number: 3, name: "Visita di Marrakech", day: "Giorno 3", subtitle: "Città Rossa", desc: "Palazzo della Bahia, Madrasa Ben Youssef e souk." },
    { number: 4, name: "Marrakech a Dades", day: "Giorno 4", subtitle: "Alto Atlante e Kasbah", desc: "Passo Tizi n'Tichka, Ait Ben Haddou e Valle delle Rose." },
    { number: 5, name: "Dades a Merzouga", day: "Giorno 5", subtitle: "Gole e Deserto", desc: "Gole del Todra, dune dell'Erg Chebbi e campo di lusso." },
    { number: 6, name: "Regione di Merzouga", day: "Giorno 6", subtitle: "Cultura Nomade", desc: "Musica Gnawa a Khamlia e incontro con i nomadi del Sahara." },
    { number: 7, name: "Merzouga a Fes", day: "Giorno 7", subtitle: "Medio Atlante", desc: "Valle dello Ziz, foresta di cedri di Azrou e Ifrane." },
    { number: 8, name: "Visita di Fes", day: "Giorno 8", subtitle: "Medina Imperiale", desc: "Tour guidato della medina medievale e concerie di Chouara." },
    { number: 9, name: "Fes a Chefchaouen", day: "Giorno 9", subtitle: "Volubilis e il Rif", desc: "Mosaici romani di Volubilis e vicoli blu di Chefchaouen." },
    { number: 10, name: "Tangeri", day: "Giorno 10", subtitle: "Partenza", desc: "Trasferimento all'aeroporto di Tangeri e rientro." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_1.webp", cap: "Galleria 1", alt: "Cortile decorato con intagli in cedro e stucchi della Madrasa Ben Youssef" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_10.webp", cap: "Galleria 10", alt: "Lanterne marocchine in ottone traforato illuminate su una terrazza serale" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_2.webp", cap: "Galleria 2", alt: "Luce calda del tardo pomeriggio sulle case dipinte di blu a Chefchaouen" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_3.webp", cap: "Galleria 3", alt: "Carretto tradizionale trainato da un asinello nella medina di Marrakech" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_4.webp", cap: "Galleria 4", alt: "Gattino accucciato all'angolo di un cortile in terracotta nella medina" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_5.webp", cap: "Galleria 5", alt: "Carovana di viaggiatori a dorso di cammello attraverso le dune del Sahara" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_6.webp", cap: "Galleria 6", alt: "Abitante locale con carretto tradizionale in una via della medina di Marrakech" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_7.webp", cap: "Galleria 7", alt: "Dromedari a riposo davanti alla storica Kasbah di Ait Ben Haddou" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_8.webp", cap: "Galleria 8", alt: "Cime sabbiose scolpite dal vento sulle dune dell'Erg Chebbi" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_9.webp", cap: "Galleria 9", alt: "Anziano marocchino con tarboosh tradizionale accanto a una porta blu a Chefchaouen" },
    { src: "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/hero_2.webp", cap: "Hero 2", alt: "Dromedari al galoppo sulle dune dorate del deserto del Sahara al tramonto" }
  ],
  faqs: [
    { question: "Questo tour è privato o condiviso?", answer: "È un'esperienza completamente privata ed esclusiva per il vostro gruppo, con massima flessibilità di orari e soste." },
    { question: "Quanto dura la cammellata ed esistono alternative?", answer: "La cammellata dura da 45 a 90 minuti. Se preferite non cavalcare, organizziamo il transfer in 4x4 fino al campo tendato." },
    { question: "Le tende dell'accampamento sono private?", answer: "Sì, soggiornerete in spaziose tende private di lusso dotate di bagno privato interno, doccia e acqua calda." },
    { question: "Dove iniziano e finiscono i trasferimenti?", answer: "Il tour parte da Marrakech (aeroporto o riad) e termina a Tangeri (o Casablanca/Marrakech su richiesta in base ai voli)." },
    { question: "Che tipo di veicolo viene impiegato?", answer: "Un comodo fuoristrada 4x4 o minivan climatizzato riservato a voi. Per gruppi più numerosi sono disponibili minibus dedicati." },
    { question: "Sono previsti menu per intolleranze alimentari?", answer: "Certamente. Comunicateci le vostre esigenze alla prenotazione per organizzare piatti vegetariani, vegani o senza glutine." },
    { question: "Il viaggio è adatto a famiglie e anziani?", answer: "Sì, l'itinerario è studiato per tutte le età con soste regolari e ritmi di viaggio rilassati e personalizzabili." },
    { question: "Qual è il periodo migliore per questo viaggio?", answer: "Primavera e autunno garantiscono condizioni climatiche ottimali in tutto il paese. L'inverno è splendido per il deserto." }
  ]
};

saveTour('10-days-morocco-grand-tour-from-marrakech', tour31_es, tour31_it);

// -------------------------------------------------------------
// Tour 32: 10-days-morocco-holiday-itinerary-from-tangier
// -------------------------------------------------------------
const tour32_es = {
  slug: "10-days-morocco-holiday-itinerary-from-tangier",
  title: "Vacaciones de 10 Días en Marruecos de Tánger a Marrakech | Sahara Star Tours",
  shortTitle: "Vacaciones de 10 Días de Tánger a Marrakech",
  description: "Explore Marruecos de norte a sur en un viaje de 10 días de Tánger a Marrakech. Descubra Chefchaouen, Fez medieval, las dunas de Merzouga y Ait Ben Haddou.",
  aboutHtml: "Este circuito privado de 10 días por Marruecos comienza en la ciudad portuaria de Tánger y culmina en Marrakech (o Casablanca). Durante el trayecto descubrirá el Cabo Espartel, Chefchaouen, las ruinas romanas de Volubilis, Meknes, la medina imperial de Fez, los bosques de cedros del Medio Atlas, las doradas dunas de Erg Chebbi con acampada de lujo en el Sahara, las espectaculares gargantas de Todra y Dades, y la mítica Kasbah de Ait Ben Haddou.",
  duration: "10 Días / 9 Noches",
  startingFrom: "Tánger",
  price: "Desde 1.250 $/persona",
  highlights: [
    "Desierto del Sahara en Merzouga y las dunas de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer y campamento de lujo",
    "Kasbah de Ait Ben Haddou declarada Patrimonio de la Humanidad por la UNESCO",
    "Paso panorámico a través de las altas cumbres del Alto Atlas",
    "Chefchaouen, la mágica ciudad azul en las montañas del Rif",
    "Medina histórica de Fez y sus tesoros culturales milenarios"
  ],
  inclusions: [
    "Vehículo privado 4x4 o monovolumen moderno con aire acondicionado",
    "Chófer y guía local profesional con traslados privados",
    "Combustible, peajes y todos los gastos operativos del vehículo",
    "Alojamiento en riads y hoteles con encanto especificados en el itinerario",
    "Desayunos diarios y cenas incluidas según el programa detallado",
    "Paseo en camello por el desierto y estancia en campamento de jaimas de lujo"
  ],
  exclusions: [
    "Almuerzos y bebidas durante el viaje",
    "Billetes de avión internacionales y servicios no especificados",
    "Gastos personales y actividades opcionales",
    "Propinas para guías y chófer"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Llegada a Tánger – Chefchaouen",
      content: "Bienvenida en el puerto o aeropuerto de Tánger. Visita a las Grutas de Hércules y al Cabo Espartel, donde convergen el océano Atlántico y el mar Mediterráneo. Almuerzo y viaje hacia las montañas del Rif a través de Tetuán hasta llegar a Chefchaouen. Alojamiento en riad tradicional en la medina azul."
    },
    {
      day: "Día 2",
      title: "Chefchaouen – Visita de la Ciudad Azul",
      content: "Día completo para explorar Chefchaouen con guía local: sus fotogénicas puertas azules, la Plaza Uta el-Hammam y la histórica Kasbah. Por la tarde, paseo hasta la Mezquita Española para disfrutar de la vista panorámica de la ciudad azul al atardecer. Noche en el mismo hotel o riad."
    },
    {
      day: "Día 3",
      title: "Chefchaouen – Ruinas Romanas de Volubilis – Meknes – Fez",
      content: "Salida hacia Volubilis para visitar sus ruinas romanas declaradas Patrimonio de la Humanidad por la UNESCO, repletas de mosaicos antiguos. Continuación hacia la imperial Meknes para ver la monumental puerta Bab Mansour y el Mausoleo de Moulay Ismail. Llegada por la tarde a Fez y alojamiento en riad."
    },
    {
      day: "Día 4",
      title: "Visita Guiada Monumental de Fez",
      content: "Recorrido oficial por la medina de Fez: el Palacio Real, el barrio judío del Mellah, Borj Sud, la Madraza Al Attarine, la mezquita y universidad Al Quaraouiyine y las célebres tenerías de Chouara. Tarde libre para relajarse en el riad o explorar los zocos."
    },
    {
      day: "Día 5",
      title: "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      content: "Travesía del Medio Atlas visitando Ifrane y el bosque de cedros de Azrou para ver a los macacos salvajes. Almuerzo en Midelt y descenso panorámico por las gargantas del Ziz. Llegada a Merzouga por la tarde para iniciar el paseo en camello por las dunas de Erg Chebbi. Puesta de sol, cena y noche en campamento de lujo bajo las estrellas."
    },
    {
      day: "Día 6",
      title: "Exploración de Merzouga – Familias Nómadas – Khamlia – Erg Chebbi",
      content: "Día para explorar los paisajes del desierto: antiguas minas de kohl, visita a familias nómadas en sus tiendas tejidas a mano y música tradicional Gnawa en el pueblo de Khamlia. Parada en el lago estacional de Merzouga y palmerales. Cena y noche en riad o campamento."
    },
    {
      day: "Día 7",
      title: "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      content: "Amanecer en las dunas y salida hacia el histórico zoco de Rissani y talleres de mármol fosilizado en Erfoud. Paseo por las monumentales Gargantas del Todra y viaje al Valle del Dades, admirando las curiosas formaciones de los dedos de mono. Cena y noche en riad."
    },
    {
      day: "Día 8",
      title: "Valle del Dades – Valle de las Rosas – Palmeral de Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      content: "Ruta por la senda de las kasbahs: Kelaat M'Gouna (Valle de las Rosas), el palmeral de Skoura y los estudios de cine de Ouarzazate. Visita a la Kasbah de Ait Ben Haddou (Patrimonio UNESCO). Cruce del Alto Atlas por el puerto de Tizi n'Tichka y llegada a Marrakech. Noche en riad."
    },
    {
      day: "Día 9",
      title: "Visita Monumental Guiada de Marrakech",
      content: "Descubra los monumentos más representativos de Marrakech con un guía local oficial: el Palacio de la Bahía, la Madraza Ben Youssef, la mezquita Koutoubia, los zocos de artesanos y el ambiente de la Plaza Jemaa el-Fna. Por la tarde, visita opcional a los Jardines Majorelle. Noche en riad."
    },
    {
      day: "Día 10",
      title: "Marrakech o Traslado al Aeropuerto de Casablanca",
      content: "Desayuno en el riad y traslado privado al aeropuerto de Marrakech o Casablanca según su plan de vuelos, dando por concluido este gran circuito de 10 días desde Tánger."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Llegada a Tánger", day: "Día 1", subtitle: "Bienvenida", desc: "Cabo Espartel, Grutas de Hércules y ruta a Chefchaouen." },
    { number: 2, name: "Chefchaouen", day: "Día 2", subtitle: "Ciudad Azul", desc: "Visita guiada por callejones azules y Mezquita Española." },
    { number: 3, name: "Chefchaouen a Fez", day: "Día 3", subtitle: "Volubilis y Meknes", desc: "Mosaicos romanos de Volubilis y puerta Bab Mansour." },
    { number: 4, name: "Visita de Fez", day: "Día 4", subtitle: "Medina Medieval", desc: "Palacio Real, madrazas históricas y tenerías de Chouara." },
    { number: 5, name: "Fez a Merzouga", day: "Día 5", subtitle: "Sahara", desc: "Ifrane, bosque de cedros, dunas de Erg Chebbi y campamento." },
    { number: 6, name: "Región de Merzouga", day: "Día 6", subtitle: "Vida Nómada", desc: "Música Gnawa en Khamlia y té con familias del desierto." },
    { number: 7, name: "Merzouga a Dades", day: "Día 7", subtitle: "Gargantas del Todra", desc: "Mercado de Rissani y cañón rocoso del Todra." },
    { number: 8, name: "Dades a Marrakech", day: "Día 8", subtitle: "Kasbahs y Atlas", desc: "Kasbah de Ait Ben Haddou y paso de Tizi n'Tichka." },
    { number: 9, name: "Marrakech", day: "Día 9", subtitle: "Ciudad Roja", desc: "Palacio de la Bahía, zocos y Plaza Jemaa el-Fna." },
    { number: 10, name: "Marrakech / Casablanca", day: "Día 10", subtitle: "Salida", desc: "Traslado al aeropuerto y fin de los servicios." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_1.webp", cap: "Galería 1", alt: "Rebaño de dromedarios pastando en llanuras arenosas del desierto" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_10.webp", cap: "Galería 10", alt: "Sombras de una caravana de camellos marchando sobre las dunas doradas del desierto" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_2.webp", cap: "Galería 2", alt: "Mercado nocturno iluminado en Jemaa el-Fna con el minarete de la Koutoubia al fondo" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_3.webp", cap: "Galería 3", alt: "Placa callejera sobre peldaños de piedra en la histórica Kasbah de Tánger" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_4.webp", cap: "Galería 4", alt: "Gato durmiendo junto a una puerta azul brillante y escaleras en Chefchaouen" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_5.webp", cap: "Galería 5", alt: "Visitantes en el patio de mármol tallado de la Madraza Ben Youssef" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_6.webp", cap: "Galería 6", alt: "Barco de carga cruzando el Estrecho de Gibraltar al atardecer frente a Tánger" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_7.webp", cap: "Galería 7", alt: "Farolillos de tela de colores colgando en un callejón de piedra en Chefchaouen" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_8.webp", cap: "Galería 8", alt: "Cazuelas de barro de tajine expuestas sobre el ksar de Ait Ben Haddou" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_9.webp", cap: "Galería 9", alt: "Torre vigía de adobe con diseños geométricos bereberes en Ait Ben Haddou" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/hero_2.webp", cap: "Hero 2", alt: "Mirador panorámico sobre el ksar de Ait Ben Haddou y el lecho del río Ounila" }
  ],
  faqs: [
    { question: "¿Es este un tour privado o compartido?", answer: "Es un tour totalmente privado: el vehículo, conductor y guía atienden en exclusiva a su grupo con horarios adaptados." },
    { question: "¿Cuánto dura el paseo en camello y qué alternativa existe?", answer: "El paseo en camello dura entre 45 minutos y una hora y media. Puede optar por el traslado al campamento en 4x4 si lo prefiere." },
    { question: "¿La jaima en el desierto es privada con comodidades?", answer: "Sí, dispondrá de una espaciosa jaima de lujo privada con camas de primera calidad, baño y ducha de agua caliente dentro de la jaima." },
    { question: "¿Dónde se realiza la recogida y el traslado de vuelta?", answer: "La recogida se realiza en Tánger (puerto, aeropuerto u hotel) y el tour finaliza en Marrakech o Casablanca según sus vuelos." },
    { question: "¿Qué tipo de vehículo se utiliza?", answer: "Un moderno todoterreno 4x4 o monovolumen con aire acondicionado. Para grupos numerosos se habilitan minibuses." },
    { question: "¿Se pueden solicitar menús vegetarianos o dietas especiales?", answer: "Sí, avísenos con antelación y organizaremos opciones vegetarianas, veganas o aptas para alérgicos sin inconveniente." },
    { question: "¿Es un viaje apto para todas las edades?", answer: "Sí, está pensado para familias y viajeros de todas las edades, con paradas panorámicas frecuentes para estirar las piernas." },
    { question: "¿Cuál es la mejor época del año para realizar este tour?", answer: "La primavera y el otoño ofrecen temperaturas óptimas. El invierno también es muy agradable en las regiones desérticas del sur." }
  ]
};

const tour32_it = {
  slug: "10-days-morocco-holiday-itinerary-from-tangier",
  title: "Vacanza di 10 Giorni in Marocco da Tangeri a Marrakech | Sahara Star Tours",
  shortTitle: "Vacanza di 10 Giorni da Tangeri a Marrakech",
  description: "Esplorate il Marocco da nord a sud in un tour di 10 giorni da Tangeri a Marrakech. Scoprite Chefchaouen, Fes medievale, le dune di Merzouga e Ait Ben Haddou.",
  aboutHtml: "Questo tour privato di 10 giorni in Marocco inizia a Tangeri e termina a Marrakech (o Casablanca). Lungo l'itinerario scoprirete Capo Spartel, Chefchaouen, le rovine romane di Volubilis, Meknes, la medina medievale di Fes, i boschi di cedri del Medio Atlante, le splendide dune dell'Erg Chebbi con pernottamento in campo tendato di lusso nel Sahara, le spettacolari gole del Todra e del Dades, e la celebre Kasbah di Ait Ben Haddou.",
  duration: "10 Giorni / 9 Notti",
  startingFrom: "Tangeri",
  price: "Da 1.250 €/persona",
  highlights: [
    "Deserto del Sahara a Merzouga e le maestose dune dell'Erg Chebbi",
    "Trekking a dorso di cammello al tramonto e notte in campo tendato di lusso",
    "Kasbah di Ait Ben Haddou Patrimonio Mondiale dell'Umanità UNESCO",
    "Valico panoramico attraverso le vette dell'Alto Atlante",
    "Chefchaouen, la magica città dipinta di blu sui monti del Rif",
    "Antica medina di Fes e i suoi tesori culturali millenari"
  ],
  inclusions: [
    "Trasporto privato in 4x4 o minivan moderno con aria condizionata",
    "Autista e guida locale esperta con transfer privati inclusi",
    "Carburante, pedaggi e tutti i costi operativi del veicolo",
    "Pernottamenti in riad e hotel di charme selezionati secondo programma",
    "Prime colazioni giornaliere e cene specificate nell'itinerario",
    "Escursione in cammello nel deserto e soggiorno in campo tendato di lusso"
  ],
  exclusions: [
    "Pranzi e bevande durante il viaggio",
    "Voli aerei e servizi aeroportuali non menzionati",
    "Spese personali e attività facoltative",
    "Mance per autista e guide locali"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Arrivo a Tangeri – Chefchaouen",
      content: "Accoglienza al porto o aeroporto di Tangeri dal vostro autista privato. Visita a Capo Spartel e alle Grotte di Ercole, dove l'Oceano Atlantico incontra il Mediterraneo. Pranzo e viaggio attraverso Tetouan e le montagne del Rif fino alla splendida Chefchaouen. Sistemazione in riad tradizionale nella medina blu."
    },
    {
      day: "Giorno 2",
      title: "Chefchaouen – Visita della Città Blu",
      content: "Giornata dedicata all'esplorazione di Chefchaouen con guida locale: i vicoli dipinti di blu, la piazza Uta el-Hammam e la Kasbah storica. Nel pomeriggio camminata panoramica fino alla Moschea Spagnola per ammirare il tramonto sulla città blu. Pernottamento in hotel o riad."
    },
    {
      day: "Giorno 3",
      title: "Chefchaouen – Rovine Romane di Volubilis – Meknes – Fes",
      content: "Partenza verso Volubilis per ammirare le rovine romane UNESCO e i mosaici antichi. Proseguimento per Meknes per visitare la porta monumentale Bab Mansour e il Mausoleo di Moulay Ismail. Arrivo a Fes in serata e pernottamento in riad."
    },
    {
      day: "Giorno 4",
      title: "Visita Guidata dei Monumenti di Fes",
      content: "Tour guidato della medina di Fes el-Bali: il Palazzo Reale, il quartiere ebraico del Mellah, Borj Sud, la Madrasa Al Attarine, la Moschea e Università Al Quaraouiyine e le storiche concerie di Chouara. Pomeriggio libero e pernottamento in riad."
    },
    {
      day: "Giorno 5",
      title: "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      content: "Attraversamento del Medio Atlante con sosta a Ifrane e nella foresta di cedri di Azrou con i macachi di Barberia. Pranzo a Midelt e discesa panoramica lungo la Valle dello Ziz. Arrivo a Merzouga nel pomeriggio e cammellata al tramonto sulle dune dell'Erg Chebbi. Cena tradizionale e notte in campo tendato di lusso."
    },
    {
      day: "Giorno 6",
      title: "Esplorazione del Sahara – Nomadi – Musica Gnawa a Khamlia",
      content: "Giornata dedicata al deserto: antiche miniere di kohl, incontro con famiglie nomadi berbere nelle loro tende e spettacolo di musica Gnawa nel villaggio di Khamlia. Sosta al lago di Merzouga e tra le oasi. Cena e pernottamento in riad o campo."
    },
    {
      day: "Giorno 7",
      title: "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      content: "Alba sulle dune e partenza per il mercato tradizionale di Rissani e le botteghe di fossili a Erfoud. Passeggiata nelle spettacolari Gole del Todra e proseguimento verso la Valle del Dades con le bizzarre conformazioni 'dita di scimmia'. Cena e pernottamento in riad."
    },
    {
      day: "Giorno 8",
      title: "Valle del Dades – Valle delle Rose – Skoura – Ouarzazate – Ait Ben Haddou – Alto Atlante – Marrakech",
      content: "Percorso lungo la Strada delle Mille Kasbah attraverso Kelaat M'Gouna, Skoura e gli studi cinematografici di Ouarzazate. Visita della famosa Kasbah fortificata di Ait Ben Haddou (Patrimonio UNESCO). Valico dell'Alto Atlante attraverso il Tizi n'Tichka e arrivo a Marrakech. Pernottamento in riad."
    },
    {
      day: "Giorno 9",
      title: "Visita Monumentale Guidata di Marrakech",
      content: "Visita guidata alla scoperta della Città Rossa: il Palazzo della Bahia, la Madrasa Ben Youssef, la Koutoubia e i souk degli artigiani fino alla celebre Piazza Jemaa el-Fna. Pomeriggio libero per visitare i Giardini Majorelle. Pernottamento in riad."
    },
    {
      day: "Giorno 10",
      title: "Marrakech o Trasferimento all'Aeroporto di Casablanca",
      content: "Colazione in riad e trasferimento privato all'aeroporto di Marrakech o Casablanca in base all'orario del vostro volo, a conclusione del tour di 10 giorni da Tangeri."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Arrivo a Tangeri", day: "Giorno 1", subtitle: "Accoglienza", desc: "Capo Spartel, Grotte di Ercole e percorso verso Chefchaouen." },
    { number: 2, name: "Chefchaouen", day: "Giorno 2", subtitle: "Città Blu", desc: "Tour guidato nei vicoli blu e tramonto alla Moschea Spagnola." },
    { number: 3, name: "Da Chefchaouen a Fes", day: "Giorno 3", subtitle: "Volubilis e Meknes", desc: "Mosaici romani di Volubilis e porta Bab Mansour a Meknes." },
    { number: 4, name: "Visita di Fes", day: "Giorno 4", subtitle: "Medina Medievale", desc: "Palazzo Reale, madrase e storiche concerie di Chouara." },
    { number: 5, name: "Da Fes a Merzouga", day: "Giorno 5", subtitle: "Sahara", desc: "Ifrane, foresta di cedri, dune dell'Erg Chebbi e campo di lusso." },
    { number: 6, name: "Regione di Merzouga", day: "Giorno 6", subtitle: "Vita Nomade", desc: "Musica Gnawa a Khamlia e incontro con le famiglie del deserto." },
    { number: 7, name: "Da Merzouga a Dades", day: "Giorno 7", subtitle: "Gole del Todra", desc: "Mercato di Rissani e imponente canyon roccioso del Todra." },
    { number: 8, name: "Da Dades a Marrakech", day: "Giorno 8", subtitle: "Kasbah e Atlante", desc: "Kasbah fortificata di Ait Ben Haddou e valico del Tizi n'Tichka." },
    { number: 9, name: "Marrakech", day: "Giorno 9", subtitle: "Città Rossa", desc: "Palazzo della Bahia, souk artigianali e Piazza Jemaa el-Fna." },
    { number: 10, name: "Marrakech / Casablanca", day: "Giorno 10", subtitle: "Partenza", desc: "Transfer all'aeroporto prescelto e fine del viaggio." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_1.webp", cap: "Galleria 1", alt: "Dromedari al pascolo nelle pianure sabbiose del deserto" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_10.webp", cap: "Galleria 10", alt: "Ombre di una carovana di cammelli sulle dune dorate del deserto" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_2.webp", cap: "Galleria 2", alt: "Mercato notturno illuminato in Piazza Jemaa el-Fna con il minareto della Koutoubia" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_3.webp", cap: "Galleria 3", alt: "Targa di via su scalini in pietra nella Kasbah storica di Tangeri" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_4.webp", cap: "Galleria 4", alt: "Gatto addormentato vicino a una caratteristica porta blu a Chefchaouen" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_5.webp", cap: "Galleria 5", alt: "Visitatori nel cortile in marmo scolpito della Madrasa Ben Youssef" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_6.webp", cap: "Galleria 6", alt: "Nave da carico che attraversa lo Stretto di Gibilterra al tramonto vicino a Tangeri" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_7.webp", cap: "Galleria 7", alt: "Lanterne colorate in tessuto appese in un vicolo acciottolato a Chefchaouen" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_8.webp", cap: "Galleria 8", alt: "Tajine in terracotta esposti sopra il ksar di Ait Ben Haddou" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_9.webp", cap: "Galleria 9", alt: "Torre di guardia in argilla con motivi geometrici berberi ad Ait Ben Haddou" },
    { src: "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/hero_2.webp", cap: "Hero 2", alt: "Punto panoramico affacciato sul ksar di Ait Ben Haddou e il letto del fiume Ounila" }
  ],
  faqs: [
    { question: "Questo tour è privato o condiviso?", answer: "È un tour interamente privato: il veicolo e l'autista sono dedicati esclusivamente al vostro gruppo." },
    { question: "Quanto dura la cammellata ed esistono alternative?", answer: "La cammellata dura circa 45-90 minuti. Se preferite non cavalcare, è previsto il transfer al campo in fuoristrada 4x4." },
    { question: "La tenda nel deserto dispone di bagno privato?", answer: "Sì, l'accampamento di lusso offre tende private complete di bagno privato, lavandino e doccia con acqua calda." },
    { question: "Dove avvengono il prelievo e il rilascio finale?", answer: "Il prelievo avviene a Tangeri (porto, aeroporto o hotel) e il tour termina a Marrakech o Casablanca in base ai voli." },
    { question: "Quale tipologia di mezzo viene impiegata?", answer: "Un moderno mezzo 4x4 o minivan con aria condizionata. Per gruppi più numerosi sono disponibili minibus." },
    { question: "È possibile richiedere menu vegetariani o specifici?", answer: "Certamente, segnalatecelo prima della partenza e predisporremo pasti adatti per tutta la durata del viaggio." },
    { question: "L'itinerario è adatto a tutte le fasce d'età?", answer: "Sì, il percorso è studiato per essere piacevole e accessibile a famiglie con bambini e a viaggiatori senior." },
    { question: "Qual è il periodo migliore per questa vacanza?", answer: "La primavera e l'autunno sono stagioni eccezionali in tutto il Marocco, ma anche l'inverno regala un clima fantastico nel sud." }
  ]
};

saveTour('10-days-morocco-holiday-itinerary-from-tangier', tour32_es, tour32_it);
