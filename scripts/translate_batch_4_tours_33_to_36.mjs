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
// Tour 33: 13-day-absolute-morocco-tour-from-tangier
// -------------------------------------------------------------
const tour33_es = {
  slug: "13-day-absolute-morocco-tour-from-tangier",
  title: "Gran Tour de 13 Días por Marruecos desde Tánger | Sahara Star Tours",
  shortTitle: "Gran Tour de 13 Días por Marruecos desde Tánger",
  description: "Circuito completo de 13 días por Marruecos en bucle desde Tánger. Chefchaouen, Fez imperial, glamping en el Sahara, Marrakech, Essaouira costera y Rabat.",
  aboutHtml: "Este gran circuito privado de 13 días comienza y termina en Tánger. A lo largo del recorrido disfrutará de Tánger, Chefchaouen, Volubilis, Meknes, Fez, los bosques de cedros del Medio Atlas, las dunas de Merzouga en el Sahara con campamento de lujo, las Gargantas del Todra y Dades, Ouarzazate, Marrakech, la marinera Essaouira, Casablanca, Rabat y Arcila.",
  duration: "13 Días / 12 Noches",
  startingFrom: "Tánger",
  price: "Desde 1.590 $/persona",
  highlights: [
    "Desierto del Sahara en Merzouga y las dunas de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
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
      content: "Recepción en el aeropuerto o puerto de Tánger. Recorrido por el Cabo Espartel y las Grutas de Hércules frente al Estrecho de Gibraltar. Almuerzo y trayecto montañoso a través del Rif hacia Chefchaouen. Alojamiento en riad tradicional en la medina azul."
    },
    {
      day: "Día 2",
      title: "Visita de Chefchaouen, la Ciudad Azul",
      content: "Visita guiada matinal por las callejuelas empedradas de azul cobalto de Chefchaouen y sus puertas andalusíes. Almuerzo libre y caminata por la tarde hasta la Mezquita Española sobre la colina para contemplar la panorámica al atardecer. Noche en el mismo riad."
    },
    {
      day: "Día 3",
      title: "Chefchaouen – Volubilis – Meknes – Fez",
      content: "Visita a las ruinas romanas de Volubilis (Patrimonio de la Humanidad UNESCO) y sus bellos mosaicos. Continuación hacia la imperial Meknes para ver la monumental puerta Bab Mansour y el Mausoleo de Moulay Ismail. Llegada a Fez y alojamiento en riad."
    },
    {
      day: "Día 4",
      title: "Visita Guiada Monumental de Fez",
      content: "Jornada completa en Fez el-Bali con guía oficial: el Palacio Real, el barrio judío del Mellah, el mirador de Borj Sud, la Madraza Al Attarine, la mezquita Al Quaraouiyine y las históricas tenerías de Chouara. Tarde libre en los zocos y noche en riad."
    },
    {
      day: "Día 5",
      title: "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      content: "Travesía del Medio Atlas pasando por Ifrane y el bosque de cedros de Azrou para ver a los macacos salvajes. Almuerzo en Midelt y descenso por el Valle del Ziz. Por la tarde, llegada a Merzouga e inicio del paseo en camello por las dunas de Erg Chebbi. Puesta de sol, cena bereber y noche en campamento de jaimas de lujo."
    },
    {
      day: "Día 6",
      title: "Exploración de Merzouga – Familias Nómadas – Khamlia – Erg Chebbi",
      content: "Amanecer en las dunas y desayuno. Excursión en 4x4 por las minas de kohl, encuentro con nómadas en sus jaimas y música espiritual Gnawa en Khamlia. Paseo por los palmerales y el lago de los flamencos. Cena y noche en hotel junto a las dunas."
    },
    {
      day: "Día 7",
      title: "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      content: "Visita al mercado de Rissani y talleres de mármol fosilizado en Erfoud. Paseo por las monumentales Gargantas del Todra con paredes de 300 metros. Continuación hacia el Valle del Dades con paradas en las formaciones de los dedos de mono. Cena y noche en riad."
    },
    {
      day: "Día 8",
      title: "Valle del Dades – Valle de las Rosas – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      content: "Paso por el Valle de las Rosas y los estudios de cine de Ouarzazate. Visita guiada a pie por la famosa Kasbah de Ait Ben Haddou (Patrimonio UNESCO). Cruce del Alto Atlas por el sinuoso paso de Tizi n'Tichka (2.260 m) hasta llegar a Marrakech. Noche en riad."
    },
    {
      day: "Día 9",
      title: "Visita Monumental Guiada de Marrakech",
      content: "Recorrido por los monumentos históricos de Marrakech: el Palacio de la Bahía, la Madraza Ben Youssef, la Koutoubia y los zocos gremiales. Tiempo libre en la animada Plaza Jemaa el-Fna. Por la tarde, visita opcional a los Jardines Majorelle. Noche en riad."
    },
    {
      day: "Día 10",
      title: "Marrakech – Essaouira",
      content: "Viaje a la costa atlántica con paradas en los bosques de argán para observar las cabras trepadoras. En Essaouira recorrerá las murallas de la Skala, el puerto pesquero artesanal y la medina blanca. Alojamiento en hotel de Essaouira."
    },
    {
      day: "Día 11",
      title: "Essaouira – Visita de Casablanca",
      content: "Ruta por autopista hacia Casablanca, capital económica del país. Visita a la monumental Mezquita Hassan II sobre el océano, la cornisa de Ain Diab, la Plaza Mohamed V y parada fotográfica en el emblemático Rick's Café. Alojamiento en Casablanca."
    },
    {
      day: "Día 12",
      title: "Casablanca – Visita de Rabat – Arcila",
      content: "Traslado a Rabat para visitar la Torre Hassan, el Mausoleo de Mohamed V y la Kasbah de los Oudayas. Por la tarde, nos dirigimos a la costera y artística villa de Arcila (Asilah) con sus murallas marinas. Noche en riad de Arcila."
    },
    {
      day: "Día 13",
      title: "Arcila – Traslado a Tánger y Fin del Viaje",
      content: "Desayuno en el riad y traslado privado al puerto o aeropuerto de Tánger para su salida internacional, dando por concluido este gran circuito de 13 días."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Llegada a Tánger", day: "Día 1", subtitle: "Bienvenida", desc: "Cabo Espartel, Grutas de Hércules y ruta a Chefchaouen." },
    { number: 2, name: "Chefchaouen", day: "Día 2", subtitle: "Ciudad Azul", desc: "Visita guiada por callejones azules y Mezquita Española." },
    { number: 3, name: "Chefchaouen a Fez", day: "Día 3", subtitle: "Volubilis y Meknes", desc: "Mosaicos romanos de Volubilis y puerta Bab Mansour." },
    { number: 4, name: "Visita de Fez", day: "Día 4", subtitle: "Medina Medieval", desc: "Palacio Real, madrazas históricas y tenerías de Chouara." },
    { number: 5, name: "Fez a Merzouga", day: "Día 5", subtitle: "Sahara", desc: "Ifrane, bosque de cedros, dunas de Erg Chebbi y campamento de lujo." },
    { number: 6, name: "Región de Merzouga", day: "Día 6", subtitle: "Vida Nómada", desc: "Música Gnawa en Khamlia y té con familias del desierto." },
    { number: 7, name: "Merzouga a Dades", day: "Día 7", subtitle: "Gargantas del Todra", desc: "Mercado de Rissani y cañón rocoso del Todra." },
    { number: 8, name: "Dades a Marrakech", day: "Día 8", subtitle: "Kasbahs y Atlas", desc: "Kasbah de Ait Ben Haddou y paso de Tizi n'Tichka." },
    { number: 9, name: "Marrakech", day: "Día 9", subtitle: "Ciudad Roja", desc: "Palacio de la Bahía, zocos y Plaza Jemaa el-Fna." },
    { number: 10, name: "Marrakech a Essaouira", day: "Día 10", subtitle: "Costa de Mogador", desc: "Arganes, murallas oceánicas y puerto pesquero." },
    { number: 11, name: "Essaouira a Casablanca", day: "Día 11", subtitle: "Mezquita Hassan II", desc: "Gran mezquita sobre el mar y cornisa de Casablanca." },
    { number: 12, name: "Rabat y Arcila", day: "Día 12", subtitle: "Capital y Costa", desc: "Torre Hassan en Rabat y murallas marítimas de Arcila." },
    { number: 13, name: "Tánger", day: "Día 13", subtitle: "Salida", desc: "Traslado final al aeropuerto o puerto de Tánger." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_1.webp", cap: "Galería 1", alt: "Portal de entrada decorativo con celosía geométrica islámica tradicional" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_10.webp", cap: "Galería 10", alt: "Dunas onduladas de Erg Chebbi brillando bajo la suave luz de la mañana" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_2.webp", cap: "Galería 2", alt: "Torre de ladrillo en ruinas sobre una colina verde en el norte de Marruecos" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_3.webp", cap: "Galería 3", alt: "Viajeros montando en camellos a través de las dunas hacia el campamento" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_4.webp", cap: "Galería 4", alt: "Arcos arquitectónicos minimalistas de tono rosado en un patio tradicional" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_5.webp", cap: "Galería 5", alt: "Plato tradicional de cuscús marroquí con carne tierna y cebolla caramelizada tfaya" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_6.webp", cap: "Galería 6", alt: "Ficus centenario y cañones en las murallas de los Jardines de Mendoubia en Tánger" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_7.webp", cap: "Galería 7", alt: "Faro de Cabo Espartel asomado sobre el océano Atlántico cerca de Tánger" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_8.webp", cap: "Galería 8", alt: "Casas encaladas de azul en la ladera de Chefchaouen rodeadas de montañas verdes" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_9.webp", cap: "Galería 9", alt: "Antiguas columnas romanas y ruinas de piedra en Volubilis vistas a través de un arco" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/hero_2.webp", cap: "Hero 2", alt: "Vista panorámica de la ciudad azul de montaña de Chefchaouen" }
  ],
  faqs: [
    { question: "¿Es este un tour privado o compartido?", answer: "Es un viaje 100% privado en exclusiva para usted y su grupo, con chófer y guía a su entera disposición." },
    { question: "¿Cuánto dura el paseo en camello y qué alternativa hay?", answer: "La excursión en camello dura entre 45 minutos y una hora y media. Puede solicitar el traslado al campamento en vehículo 4x4 si no desea montar en camello." },
    { question: "¿La jaima del campamento en el desierto es privada?", answer: "Sí, dispondrá de una jaima privada de lujo con baño ensuite completo, ducha y agua corriente caliente." },
    { question: "¿Dónde se efectúa la recogida y el traslado de vuelta?", answer: "El tour comienza y finaliza en Tánger (aeropuerto, puerto u hotel), coordinándose exactamente al confirmar la reserva." },
    { question: "¿Qué tipo de vehículo se emplea para el recorrido?", answer: "El trayecto se realiza en un moderno vehículo 4x4 o monovolumen con aire acondicionado. Para grupos más amplios se utilizan minibuses." },
    { question: "¿Se pueden satisfacer dietas alimentarias especiales?", answer: "Sí, solo tiene que indicarnos si necesita menús vegetarianos, veganos, sin gluten o halal al reservar." },
    { question: "¿Es este itinerario apropiado para todas las edades?", answer: "Sí, está adaptado para parejas, familias y seniors con etapas bien dosificadas y paradas regulares." },
    { question: "¿Cuál es la época más aconsejable para hacer este tour?", answer: "Tanto la primavera como el otoño ofrecen condiciones climáticas muy agradables en todo el territorio marroquí." }
  ]
};

const tour33_it = {
  slug: "13-day-absolute-morocco-tour-from-tangier",
  title: "Gran Tour di 13 Giorni in Marocco da Tangeri | Sahara Star Tours",
  shortTitle: "Gran Tour di 13 Giorni in Marocco da Tangeri",
  description: "Itinerario completo ad anello di 13 giorni in Marocco da Tangeri. Chefchaouen, Fes imperiale, glamping nel Sahara, Marrakech, Essaouira e Rabat.",
  aboutHtml: "Questo grandioso tour privato di 13 giorni inizia e si conclude a Tangeri. Lungo il viaggio scoprirete Tangeri, Chefchaouen, Volubilis, Meknes, Fes, le foreste di cedri del Medio Atlante, le dune di Merzouga nel Sahara con notte in tenda di lusso, le Gole del Todra e del Dades, Ouarzazate, Marrakech, la costiera Essaouira, Casablanca, Rabat e Asilah.",
  duration: "13 Giorni / 12 Notti",
  startingFrom: "Tangeri",
  price: "Da 1.590 €/persona",
  highlights: [
    "Deserto del Sahara a Merzouga e le maestose dune dell'Erg Chebbi",
    "Trekking a dorso di cammello al tramonto",
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
      content: "Accoglienza all'aeroporto o al porto di Tangeri. Visita panoramica a Capo Spartel e alle Grotte di Ercole sullo Stretto di Gibilterra. Pranzo e percorso montuoso attraverso il Rif verso Chefchaouen. Sistemazione in riad tipico nella medina blu."
    },
    {
      day: "Giorno 2",
      title: "Visita di Chefchaouen, la Città Blu",
      content: "Visita guidata mattutina dei suggestivi vicoli blu cobalto di Chefchaouen con guida locale. Pranzo libero e passeggiata pomeridiana alla Moschea Spagnola per ammirare il tramonto panoramico. Pernottamento nello stesso riad."
    },
    {
      day: "Giorno 3",
      title: "Chefchaouen – Volubilis – Meknes – Fes",
      content: "Partenza per il sito archeologico di Volubilis (Patrimonio UNESCO) e i suoi splendidi mosaici. Proseguimento per Meknes per ammirare la porta Bab Mansour e il Mausoleo di Moulay Ismail. Arrivo serale a Fes e pernottamento in riad."
    },
    {
      day: "Giorno 4",
      title: "Visita Guidata dei Monumenti di Fes",
      content: "Intera giornata a Fes el-Bali con guida ufficiale: il Palazzo Reale, il quartiere ebraico del Mellah, Borj Sud, la Madrasa Al Attarine, l'Università Al Quaraouiyine e le celebri concerie di Chouara. Pomeriggio libero e pernottamento in riad."
    },
    {
      day: "Giorno 5",
      title: "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      content: "Attraversamento del Medio Atlante passando per Ifrane e la foresta di cedri di Azrou con i macachi. Pranzo a Midelt e percorso panoramico lungo la Valle dello Ziz. Arrivo a Merzouga e cammellata al tramonto sulle dune dell'Erg Chebbi fino al campo tendato di lusso. Cena berbera e cielo stellato."
    },
    {
      day: "Giorno 6",
      title: "Esplorazione del Sahara – Nomadi – Khamlia – Erg Chebbi",
      content: "Alba sulle dune e colazione. Escursione in fuoristrada nel deserto: visita alle miniere di kohl, incontro con famiglie nomadi nelle loro tende e musica tradizionale Gnawa a Khamlia. Sosta al lago stagionale e cena in hotel ai piedi delle dune."
    },
    {
      day: "Giorno 7",
      title: "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      content: "Visita al mercato di Rissani e botteghe di fossili a Erfoud. Passeggiata nelle spettacolari Gole del Todra con pareti a picco alte 300 metri. Proseguimento verso la Valle del Dades con sosta alle conformazioni 'dita di scimmia'. Cena e pernottamento in riad."
    },
    {
      day: "Giorno 8",
      title: "Valle del Dades – Valle delle Rose – Ouarzazate – Ait Ben Haddou – Alto Atlante – Marrakech",
      content: "Viaggio attraverso la Valle delle Rose e gli studi cinematografici di Ouarzazate. Visita guidata alla magnifica Kasbah fortificata di Ait Ben Haddou (Patrimonio UNESCO). Valico dell'Alto Atlante attraverso il Tizi n'Tichka (2.260 m) e arrivo a Marrakech. Pernottamento in riad."
    },
    {
      day: "Giorno 9",
      title: "Visita Monumentale Guidata di Marrakech",
      content: "Tour guidato alla scoperta di Marrakech: il Palazzo della Bahia, la Madrasa Ben Youssef, la Koutoubia e i souk degli artigiani. Tempo a disposizione nella vivace Piazza Jemaa el-Fna. Pomeriggio libero per visitare i Giardini Majorelle. Pernottamento in riad."
    },
    {
      day: "Giorno 10",
      title: "Marrakech – Essaouira",
      content: "Partenza verso la costa atlantica con soste tra le piante di argan per vedere le caratteristiche capre sui rami. Ad Essaouira ammirerete i bastioni della Skala, il porto dei pescatori e la medina bianca. Pernottamento a Essaouira."
    },
    {
      day: "Giorno 11",
      title: "Essaouira – Visita di Casablanca",
      content: "Viaggio verso Casablanca, capitale economica del paese. Visita della monumentale Moschea Hassan II sull'oceano, della corniche di Ain Diab, di Piazza Mohammed V e sosta fotografica al Rick's Café. Pernottamento a Casablanca."
    },
    {
      day: "Giorno 12",
      title: "Casablanca – Visita di Rabat – Asilah",
      content: "Trasferimento a Rabat per ammirare la Torre di Hassan, il Mausoleo di Mohammed V e la Kasbah degli Oudaïa. Nel pomeriggio si prosegue verso nord fino alla graziosa cittadina costiera di Asilah con le sue mura affacciate sul mare. Pernottamento in riad."
    },
    {
      day: "Giorno 13",
      title: "Asilah – Trasferimento a Tangeri e Conclusione del Viaggio",
      content: "Colazione in riad e trasferimento privato al porto o all'aeroporto di Tangeri per la partenza, a conclusione di questo indimenticabile gran tour di 13 giorni."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Arrivo a Tangeri", day: "Giorno 1", subtitle: "Accoglienza", desc: "Capo Spartel, Grotte di Ercole e percorso verso Chefchaouen." },
    { number: 2, name: "Chefchaouen", day: "Giorno 2", subtitle: "Città Blu", desc: "Visita guidata nei vicoli blu e tramonto alla Moschea Spagnola." },
    { number: 3, name: "Chefchaouen a Fes", day: "Giorno 3", subtitle: "Volubilis e Meknes", desc: "Mosaici romani di Volubilis e porta Bab Mansour." },
    { number: 4, name: "Visita di Fes", day: "Giorno 4", subtitle: "Medina Medievale", desc: "Palazzo Reale, madrase storiche e concerie di Chouara." },
    { number: 5, name: "Fes a Merzouga", day: "Giorno 5", subtitle: "Sahara", desc: "Ifrane, foresta di cedri, dune dell'Erg Chebbi e campo tendato." },
    { number: 6, name: "Regione di Merzouga", day: "Giorno 6", subtitle: "Vita Nomade", desc: "Musica Gnawa a Khamlia e tè con le famiglie del deserto." },
    { number: 7, name: "Merzouga a Dades", day: "Giorno 7", subtitle: "Gole del Todra", desc: "Mercato di Rissani e imponente canyon roccioso del Todra." },
    { number: 8, name: "Dades a Marrakech", day: "Giorno 8", subtitle: "Kasbah e Atlante", desc: "Kasbah fortificata di Ait Ben Haddou e valico del Tizi n'Tichka." },
    { number: 9, name: "Marrakech", day: "Giorno 9", subtitle: "Città Rossa", desc: "Palazzo della Bahia, souk artigianali e Piazza Jemaa el-Fna." },
    { number: 10, name: "Marrakech a Essaouira", day: "Giorno 10", subtitle: "Costa di Mogador", desc: "Alberi di argan, bastioni oceanici e porto peschereccio." },
    { number: 11, name: "Essaouira a Casablanca", day: "Giorno 11", subtitle: "Moschea Hassan II", desc: "Grande moschea sul mare e corniche di Casablanca." },
    { number: 12, name: "Rabat e Asilah", day: "Giorno 12", subtitle: "Capitale e Costa", desc: "Torre di Hassan a Rabat e mura marine di Asilah." },
    { number: 13, name: "Tangeri", day: "Giorno 13", subtitle: "Partenza", desc: "Transfer finale all'aeroporto o porto di Tangeri." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_1.webp", cap: "Galleria 1", alt: "Portale d'ingresso decorato con raffinata grata geometrica islamica tradizionale" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_10.webp", cap: "Galleria 10", alt: "Dune ondulate dell'Erg Chebbi illuminate dalla morbida luce mattutina" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_2.webp", cap: "Galleria 2", alt: "Torre in mattoni su una collina verdeggiante nel nord del Marocco" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_3.webp", cap: "Galleria 3", alt: "Viaggiatori a dorso di dromedario verso il campo tendato nel deserto" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_4.webp", cap: "Galleria 4", alt: "Archi architettonici minimalisti dalle tonalità rosate in un patio" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_5.webp", cap: "Galleria 5", alt: "Piatto tradizionale di couscous marocchino con carne e cipolle caramellate tfaya" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_6.webp", cap: "Galleria 6", alt: "Ficus monumentale e bastioni con cannoni ai Giardini Mendoubia di Tangeri" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_7.webp", cap: "Galleria 7", alt: "Faro di Capo Spartel affacciato sulle acque dell'Atlantico vicino a Tangeri" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_8.webp", cap: "Galleria 8", alt: "Case dipinte di blu a Chefchaouen incastonate tra le montagne del Rif" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_9.webp", cap: "Galleria 9", alt: "Antiche colonne romane e rovine in pietra a Volubilis incorniciate da un arco" },
    { src: "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/hero_2.webp", cap: "Hero 2", alt: "Veduta panoramica della città montana dipinta di blu di Chefchaouen" }
  ],
  faqs: [
    { question: "Questo tour è privato o condiviso?", answer: "Si tratta di un viaggio interamente privato riservato esclusivamente al vostro gruppo, con autista e guida dedicati." },
    { question: "Quanto dura la cammellata ed esistono alternative?", answer: "La cammellata dura circa 45-90 minuti. È possibile effettuare il trasferimento all'accampamento in fuoristrada 4x4 su richiesta." },
    { question: "La tenda nel deserto dispone di bagno privato?", answer: "Sì, soggiornerete in una tenda di lusso privata completa di bagno interno con doccia e acqua calda corrente." },
    { question: "Dove avvengono il prelievo e il rilascio finale?", answer: "Il tour inizia e si conclude a Tangeri (porto, aeroporto o hotel) in base alle vostre preferenze di volo o traghetto." },
    { question: "Quale tipo di mezzo viene impiegato?", answer: "Il trasporto è garantito con moderno 4x4 o minivan climatizzato. Per gruppi superiori sono previsti minibus executive." },
    { question: "È possibile richiedere menu vegetariani o specifici?", answer: "Certamente, segnalatecelo prima della partenza e organizzeremo opzioni vegetariane, vegane o senza glutine." },
    { question: "L'itinerario è adatto a tutte le fasce d'età?", answer: "Sì, il percorso è stato strutturato per essere piacevole sia per famiglie con bambini che per viaggiatori senior." },
    { question: "Qual è il periodo migliore per questa vacanza?", answer: "La primavera e l'autunno offrono un clima fantastico in tutto il paese. L'inverno è molto piacevole nel deserto del Sahara." }
  ]
};

saveTour('13-day-absolute-morocco-tour-from-tangier', tour33_es, tour33_it);

// -------------------------------------------------------------
// Tour 34: 14-days-grand-morocco-tour-itinerary-from-casablanca
// -------------------------------------------------------------
const tour34_es = {
  slug: "14-days-grand-morocco-tour-itinerary-from-casablanca",
  title: "Gran Circuito de 14 Días por Marruecos desde Casablanca | Sahara Star Tours",
  shortTitle: "Gran Circuito de 14 Días por Marruecos desde Casablanca",
  description: "Épico gran circuito de 14 días por Marruecos desde Casablanca. Costa norte, Chefchaouen, Fez medieval, dunas de Erg Chebbi, Marrakech y Essaouira.",
  aboutHtml: "Este gran circuito privado de 14 días comienza en Casablanca y concluye en Marrakech o Casablanca. A lo largo del recorrido vivirá la majestuosidad de Casablanca, la capital Rabat, el puerto atlántico de Tánger, la perla azul de Chefchaouen, las ruinas de Volubilis, Meknes, la medina imperial de Fez, las dunas doradas de Erg Chebbi con acampada de lujo en el Sahara, las espectaculares gargantas de Todra y Dades, Ouarzazate, Marrakech y la costera Essaouira.",
  duration: "14 Días / 13 Noches",
  startingFrom: "Casablanca",
  price: "Desde 1.690 $/persona",
  highlights: [
    "Desierto del Sahara en Merzouga y las dunas de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
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
      title: "Llegada a Casablanca – Visita de la Mayor Ciudad de Marruecos",
      content: "Bienvenida en el aeropuerto o alojamiento en Casablanca. Visita guiada a la monumental Mezquita Hassan II levantada sobre el Atlántico, la Plaza Mohamed V con su arquitectura art déco y parada fotográfica en Rick's Café. Noche en hotel."
    },
    {
      day: "Día 2",
      title: "Casablanca – Rabat – Arcila",
      content: "Salida por la costa hacia Rabat para visitar la Torre Hassan, el Mausoleo de Mohamed V y la Kasbah de los Oudayas. Almuerzo y continuación rumbo norte hacia la pintoresca y artística villa costera de Arcila (Asilah). Noche en riad tradicional."
    },
    {
      day: "Día 3",
      title: "Arcila – Tánger – Montañas del Rif – Chefchaouen",
      content: "Viaje a Tánger para descubrir el Cabo Espartel y las Grutas de Hércules. Almuerzo y travesía a través de Tetuán y las montañas del Rif hasta llegar a la cautivadora Chefchaouen. Noche en riad de la medina azul."
    },
    {
      day: "Día 4",
      title: "Visita Guiada de Chefchaouen, la Ciudad Azul",
      content: "Jornada para recorrer Chefchaouen con guía local: callejuelas de azul cobalto, la Plaza Uta el-Hammam y la Kasbah. Por la tarde, paseo panorámico hasta la Mezquita Española sobre la colina. Noche en el mismo riad."
    },
    {
      day: "Día 5",
      title: "Chefchaouen – Ruinas Romanas de Volubilis – Meknes – Fez",
      content: "Visita a las ruinas romanas de Volubilis (Patrimonio UNESCO) y continuación hacia la imperial Meknes (puerta Bab Mansour y Mausoleo de Moulay Ismail). Por la tarde, llegada a Fez y alojamiento en riad tradicional."
    },
    {
      day: "Día 6",
      title: "Visita Guiada Monumental de Fez",
      content: "Día completo de visita guiada oficial en Fez el-Bali: el Palacio Real, el barrio judío del Mellah, la vista desde Borj Sud, la Madraza Al Attarine, la mezquita Al Quaraouiyine y las tenerías de Chouara. Tarde libre en el riad."
    },
    {
      day: "Día 7",
      title: "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      content: "Travesía del Medio Atlas visitando Ifrane y el bosque de cedros de Azrou para observar macacos salvajes. Almuerzo en Midelt y descenso por las gargantas del Valle del Ziz. Por la tarde, paseo en camello por las dunas de Erg Chebbi en Merzouga. Puesta de sol y noche en jaima de lujo con cena tradicional y tambores."
    },
    {
      day: "Día 8",
      title: "Exploración de Merzouga – Familias Nómadas – Música Gnawa de Khamlia",
      content: "Amanecer en las dunas y desayuno. Excursión en 4x4 por el desierto: antiguas minas de kohl, encuentro con nómadas en sus tiendas y música tradicional Gnawa en Khamlia. Palmerales y lago estacional de los flamencos. Cena y noche en riad junto a las dunas."
    },
    {
      day: "Día 9",
      title: "Merzouga – Rissani – Erfoud – Gargantas del Todra – Valle del Dades",
      content: "Visita al mercado tradicional de Rissani y talleres de mármol fosilizado en Erfoud. Paseo por las colosales Gargantas del Todra y viaje al Valle del Dades con paradas en las formaciones de los dedos de mono. Cena y noche en riad."
    },
    {
      day: "Día 10",
      title: "Valle del Dades – Valle de las Rosas – Ouarzazate – Ait Ben Haddou – Alto Atlas – Marrakech",
      content: "Paso por el Valle de las Rosas y los estudios de cine de Ouarzazate. Visita a la Kasbah de Ait Ben Haddou (Patrimonio UNESCO). Travesía panorámica del Alto Atlas por el puerto de Tizi n'Tichka y llegada a Marrakech. Noche en riad."
    },
    {
      day: "Día 11",
      title: "Visita Monumental Guiada de Marrakech",
      content: "Visita con guía oficial: el Palacio de la Bahía, la Madraza Ben Youssef, la mezquita Koutoubia y los animados zocos gremiales. Tiempo libre en la Plaza Jemaa el-Fna y visita opcional a los Jardines Majorelle. Noche en riad."
    },
    {
      day: "Día 12",
      title: "Marrakech – Excursión Costera a Essaouira",
      content: "Viaje a la costa de Essaouira con paradas en cooperativas de aceite de argán. Tiempo libre para explorar las murallas de la Skala, el puerto pesquero artesanal y la medina blanca. Noche en hotel de Essaouira."
    },
    {
      day: "Día 13",
      title: "Essaouira – Marrakech",
      content: "Mañana tranquila en Essaouira y regreso por carretera hacia Marrakech disfrutando del paisaje campestre. Tarde libre para compras o descansar en una terraza de Jemaa el-Fna. Noche en riad."
    },
    {
      day: "Día 14",
      title: "Aeropuerto de Marrakech o Casablanca y Fin del Tour",
      content: "Desayuno y traslado privado al aeropuerto de Marrakech o Casablanca según su plan de vuelos, concluyendo este gran circuito de 14 días."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Llegada a Casablanca", day: "Día 1", subtitle: "Bienvenida", desc: "Mezquita Hassan II y cornisa atlántica." },
    { number: 2, name: "Casablanca a Arcila", day: "Día 2", subtitle: "Rabat y Costa", desc: "Torre Hassan en Rabat y murallas marítimas de Arcila." },
    { number: 3, name: "Arcila a Chefchaouen", day: "Día 3", subtitle: "Tánger y el Rif", desc: "Cabo Espartel, Grutas de Hércules y llegada a Chefchaouen." },
    { number: 4, name: "Chefchaouen", day: "Día 4", subtitle: "Ciudad Azul", desc: "Callejones azules y vistas desde la Mezquita Española." },
    { number: 5, name: "Chefchaouen a Fez", day: "Día 5", subtitle: "Volubilis y Meknes", desc: "Ruinas romanas de Volubilis y puerta Bab Mansour." },
    { number: 6, name: "Visita de Fez", day: "Día 6", subtitle: "Medina Imperial", desc: "Medina medieval, madrazas históricas y tenerías." },
    { number: 7, name: "Fez a Merzouga", day: "Día 7", subtitle: "Medio Atlas y Sahara", desc: "Ifrane, bosque de cedros, dunas y campamento de lujo." },
    { number: 8, name: "Región de Merzouga", day: "Día 8", subtitle: "Cultura Nómada", desc: "Música Gnawa en Khamlia y té con nómadas." },
    { number: 9, name: "Merzouga a Dades", day: "Día 9", subtitle: "Gargantas del Todra", desc: "Mercado de Rissani y cañón rocoso del Todra." },
    { number: 10, name: "Dades a Marrakech", day: "Día 10", subtitle: "Kasbahs y Atlas", desc: "Kasbah de Ait Ben Haddou y paso Tizi n'Tichka." },
    { number: 11, name: "Marrakech", day: "Día 11", subtitle: "Ciudad Roja", desc: "Palacio de la Bahía, zocos y Plaza Jemaa el-Fna." },
    { number: 12, name: "Marrakech a Essaouira", day: "Día 12", subtitle: "Costa de Mogador", desc: "Arganes, puerto pesquero y murallas de la Skala." },
    { number: 13, name: "Essaouira a Marrakech", day: "Día 13", subtitle: "Retorno a Marrakech", desc: "Regreso a Marrakech y tarde libre." },
    { number: 14, name: "Salida", day: "Día 14", subtitle: "Fin del Viaje", desc: "Traslado al aeropuerto de Marrakech o Casablanca." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_1.webp", cap: "Galería 1", alt: "Ciclista pasando por un animado zoco de artesanos en la medina de Marrakech" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_10.webp", cap: "Galería 10", alt: "Arbusto del desierto brotando en la arena ondulada por el viento en el Sahara" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_2.webp", cap: "Galería 2", alt: "Caravana de dromedarios siguiendo la cresta ondulada de las dunas de Erg Chebbi" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_3.webp", cap: "Galería 3", alt: "Mujer marroquí sentada con un gato frente a una tienda tradicional de la medina" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_4.webp", cap: "Galería 4", alt: "Bastión marítimo de piedra de la Skala del Puerto y gaviotas en Essaouira" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_5.webp", cap: "Galería 5", alt: "Minarete de la Mezquita Hassan II en Casablanca recortado contra el cielo azul" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_6.webp", cap: "Galería 6", alt: "Resplandor del atardecer tras los arcos moriscos de la Mezquita Hassan II" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_7.webp", cap: "Galería 7", alt: "Arco de piedra tallada y puertas de bronce del Mausoleo de Mohamed V en Rabat" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_8.webp", cap: "Galería 8", alt: "Gato pelirrojo sentado en un escalón encalado junto a una puerta azul en Chefchaouen" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_9.webp", cap: "Galería 9", alt: "Bolsos de paja tejidos y artesanías colgadas en una pared de terracota en Marrakech" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/hero_2.webp", cap: "Hero 2", alt: "Amanecer sobre las casas escalonadas y las montañas del Rif en Chefchaouen" }
  ],
  faqs: [
    { question: "¿Es este un tour privado o compartido?", answer: "Es una experiencia totalmente privada: el vehículo, chófer y guía están a su exclusiva disposición con horarios flexibles." },
    { question: "¿Cuánto dura el paseo en camello y qué alternativa existe?", answer: "El paseo en camello dura entre 45 minutos y una hora y media. Si lo desea, el traslado al campamento se realiza en 4x4 sin coste añadido." },
    { question: "¿Las tiendas en el campamento cuentan con comodidades privadas?", answer: "Sí, se alojará en tiendas privadas de lujo con baño ensuite privado, ducha y agua caliente." },
    { question: "¿Qué tipo de vehículo se emplea durante el viaje?", answer: "Un moderno todoterreno 4x4 o monovolumen con aire acondicionado. Para grupos se reservan minibuses prémium." },
    { question: "¿Se pueden preparar comidas para dietas específicas?", answer: "Sí, infórmenos al reservar para garantizar menús adaptados (vegetarianos, veganos, sin gluten, etc.)." },
    { question: "¿Es un circuito apto para todas las edades?", answer: "Sí, el itinerario está pensado para viajeros de cualquier edad, con descansos regulares y ritmo relajado." },
    { question: "¿Cuál es la época más favorable para este tour?", answer: "La primavera y el otoño ofrecen temperaturas ideales. El invierno es excelente para la región desértica del sur." },
    { question: "¿Cómo se confirma la reserva del circuito?", answer: "Envíenos una consulta con sus fechas, número de viajeros y preferencias para recibir la confirmación y propuesta final." }
  ]
};

const tour34_it = {
  slug: "14-days-grand-morocco-tour-itinerary-from-casablanca",
  title: "Gran Tour di 14 Giorni in Marocco da Casablanca | Sahara Star Tours",
  shortTitle: "Gran Tour di 14 Giorni in Marocco da Casablanca",
  description: "Epico gran tour di 14 giorni in Marocco da Casablanca. Costa settentrionale, Chefchaouen, Fes medievale, dune di Erg Chebbi, Marrakech ed Essaouira.",
  aboutHtml: "Questo magnifico viaggio privato di 14 giorni inizia a Casablanca e si conclude a Marrakech o Casablanca. Lungo l'itinerario vivrete il fascino di Casablanca, la capitale Rabat, Tangeri, Chefchaouen, Volubilis, Meknes, la medina medievale di Fes, le dune dell'Erg Chebbi con notte in campo tendato di lusso nel Sahara, le gole del Todra e del Dades, Ouarzazate, Marrakech e la marinara Essaouira.",
  duration: "14 Giorni / 13 Notti",
  startingFrom: "Casablanca",
  price: "Da 1.690 €/persona",
  highlights: [
    "Deserto del Sahara a Merzouga e le maestose dune dell'Erg Chebbi",
    "Trekking a dorso di cammello al tramonto",
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
      title: "Arrivo a Casablanca – Visita della Metropoli del Marocco",
      content: "Accoglienza all'aeroporto o in hotel a Casablanca. Visita guidata alla Moschea Hassan II costruita sul mare, a Piazza Mohammed V e sosta fotografica al celebre Rick's Café. Pernottamento in hotel a Casablanca."
    },
    {
      day: "Giorno 2",
      title: "Casablanca – Rabat – Asilah",
      content: "Partenza verso Rabat per visitare la Torre di Hassan, il Mausoleo di Mohammed V e la Kasbah degli Oudaïa. Pranzo e proseguimento lungo la costa atlantica fino alla splendida cittadina fortificata di Asilah. Pernottamento in riad."
    },
    {
      day: "Giorno 3",
      title: "Asilah – Tangeri – Monti del Rif – Chefchaouen",
      content: "Visita di Tangeri (Capo Spartel e Grotte di Ercole) e viaggio attraverso Tetouan e le montagne del Rif fino alla magica Chefchaouen. Sistemazione e pernottamento in riad nella medina blu."
    },
    {
      day: "Giorno 4",
      title: "Visita Guidata di Chefchaouen, la Città Blu",
      content: "Tour guidato nei vicoli blu di Chefchaouen con guida locale: piazzette caratteristiche, la Kasbah e salita pomeridiana alla Moschea Spagnola per ammirare il tramonto. Pernottamento nello stesso riad."
    },
    {
      day: "Giorno 5",
      title: "Chefchaouen – Rovine Romane di Volubilis – Meknes – Fes",
      content: "Visita delle splendide rovine romane di Volubilis (sito UNESCO) e della città imperiale di Meknes (Bab Mansour e Mausoleo di Moulay Ismail). Nel tardo pomeriggio arrivo a Fes e sistemazione in riad."
    },
    {
      day: "Giorno 6",
      title: "Visita Guidata Monumentale di Fes",
      content: "Intera giornata a Fes el-Bali con guida ufficiale: Palazzo Reale, quartiere ebraico del Mellah, Borj Sud, Madrasa Al Attarine, Università Al Quaraouiyine e storiche concerie di Chouara. Pernottamento in riad."
    },
    {
      day: "Giorno 7",
      title: "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      content: "Viaggio attraverso Ifrane e la foresta di cedri di Azrou con i macachi. Pranzo a Midelt e discesa lungo la Valle dello Ziz fino a Merzouga. Trekking a dorso di cammello sulle dune dell'Erg Chebbi al tramonto e notte in campo tendato di lusso."
    },
    {
      day: "Giorno 8",
      title: "Esplorazione del Sahara – Nomadi – Musica Gnawa a Khamlia",
      content: "Alba sulle dune e colazione. Escursione in fuoristrada: miniere di kohl, incontro con famiglie nomadi berbere e musica Gnawa nel villaggio di Khamlia. Sosta al lago e cena in hotel ai piedi delle dune."
    },
    {
      day: "Giorno 9",
      title: "Merzouga – Rissani – Erfoud – Gole del Todra – Valle del Dades",
      content: "Mercato di Rissani, botteghe di fossili a Erfoud e passeggiata nelle monumentali Gole del Todra. Proseguimento verso la Valle del Dades con sosta alle conformazioni 'dita di scimmia'. Cena e pernottamento in riad."
    },
    {
      day: "Giorno 10",
      title: "Valle del Dades – Valle delle Rose – Ouarzazate – Ait Ben Haddou – Alto Atlante – Marrakech",
      content: "Passaggio per la Valle delle Rose e gli studi cinematografici di Ouarzazate. Visita alla celebre Kasbah di Ait Ben Haddou (Patrimonio UNESCO). Valico dell'Alto Atlante attraverso il Tizi n'Tichka e arrivo serale a Marrakech. Pernottamento in riad."
    },
    {
      day: "Giorno 11",
      title: "Visita Monumentale Guidata di Marrakech",
      content: "Visita guidata della Città Rossa: Palazzo della Bahia, Madrasa Ben Youssef, Moschea Koutoubia e souk degli artigiani. Tempo a disposizione in Piazza Jemaa el-Fna e visita facoltativa ai Giardini Majorelle. Pernottamento in riad."
    },
    {
      day: "Giorno 12",
      title: "Marrakech – Escursione sulla Costa di Essaouira",
      content: "Partenza per Essaouira con soste per osservare le capre sugli alberi di argan. Tempo libero tra i bastioni della Skala, il porto peschereccio e la medina bianca UNESCO. Pernottamento a Essaouira."
    },
    {
      day: "Giorno 13",
      title: "Essaouira – Marrakech",
      content: "Mattinata rilassante a Essaouira e rientro a Marrakech ammirando la campagna circostante. Pomeriggio libero tra i souk o sulla terrazza di un caffè di Jemaa el-Fna. Pernottamento in riad."
    },
    {
      day: "Giorno 14",
      title: "Aeroporto di Marrakech o Casablanca e Conclusione del Viaggio",
      content: "Prima colazione e trasferimento privato all'aeroporto di Marrakech o Casablanca in tempo utile per il vostro volo, a conclusione del tour di 14 giorni."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Arrivo a Casablanca", day: "Giorno 1", subtitle: "Accoglienza", desc: "Moschea Hassan II e corniche atlantica." },
    { number: 2, name: "Da Casablanca ad Asilah", day: "Giorno 2", subtitle: "Rabat e Costa", desc: "Torre di Hassan a Rabat e mura marine di Asilah." },
    { number: 3, name: "Da Asilah a Chefchaouen", day: "Giorno 3", subtitle: "Tangeri e Rif", desc: "Capo Spartel, Grotte di Ercole e arrivo a Chefchaouen." },
    { number: 4, name: "Chefchaouen", day: "Giorno 4", subtitle: "Città Blu", desc: "Vicoli blu e tramonto alla Moschea Spagnola." },
    { number: 5, name: "Da Chefchaouen a Fes", day: "Giorno 5", subtitle: "Volubilis e Meknes", desc: "Rovine romane di Volubilis e porta Bab Mansour." },
    { number: 6, name: "Visita di Fes", day: "Giorno 6", subtitle: "Medina Imperiale", desc: "Medina medievale, madrase storiche e concerie." },
    { number: 7, name: "Da Fes a Merzouga", day: "Giorno 7", subtitle: "Medio Atlante e Sahara", desc: "Ifrane, foresta di cedri, dune e campo di lusso." },
    { number: 8, name: "Regione di Merzouga", day: "Giorno 8", subtitle: "Cultura Nomade", desc: "Musica Gnawa a Khamlia e incontro con i nomadi." },
    { number: 9, name: "Da Merzouga a Dades", day: "Giorno 9", subtitle: "Gole del Todra", desc: "Mercato di Rissani e canyon roccioso del Todra." },
    { number: 10, name: "Da Dades a Marrakech", day: "Giorno 10", subtitle: "Kasbah e Atlante", desc: "Kasbah di Ait Ben Haddou e valico Tizi n'Tichka." },
    { number: 11, name: "Marrakech", day: "Giorno 11", subtitle: "Città Rossa", desc: "Palazzo della Bahia, souk e Piazza Jemaa el-Fna." },
    { number: 12, name: "Da Marrakech a Essaouira", day: "Giorno 12", subtitle: "Costa di Mogador", desc: "Alberi di argan, porto peschereccio e Skala." },
    { number: 13, name: "Da Essaouira a Marrakech", day: "Giorno 13", subtitle: "Ritorno a Marrakech", desc: "Rientro a Marrakech e pomeriggio libero." },
    { number: 14, name: "Partenza", day: "Giorno 14", subtitle: "Fine del Viaggio", desc: "Transfer all'aeroporto di Marrakech o Casablanca." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_1.webp", cap: "Galleria 1", alt: "Ciclista che attraversa un vivace souk artigianale nella medina di Marrakech" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_10.webp", cap: "Galleria 10", alt: "Arbusto del deserto che cresce sulla sabbia modellata dal vento nel Sahara" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_2.webp", cap: "Galleria 2", alt: "Carovana a dorso di cammello lungo la cresta ondulata delle dune di Merzouga" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_3.webp", cap: "Galleria 3", alt: "Donna marocchina seduta con un gatto all'esterno di una bottega nella medina" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_4.webp", cap: "Galleria 4", alt: "Bastione marino in pietra della Skala del Porto con gabbiani a Essaouira" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_5.webp", cap: "Galleria 5", alt: "Minareto della Moschea Hassan II a Casablanca stagliato contro il cielo blu" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_6.webp", cap: "Galleria 6", alt: "Riflessi caldi del tramonto dietro gli archi moreschi della Moschea Hassan II" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_7.webp", cap: "Galleria 7", alt: "Arco in pietra scolpita e portali in bronzo del Mausoleo di Mohammed V a Rabat" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_8.webp", cap: "Galleria 8", alt: "Gatto fulvo seduto su un gradino imbiancato a calce vicino a una porta blu a Chefchaouen" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_9.webp", cap: "Galleria 9", alt: "Borse in paglia intrecciata e manufatti artigianali appesi a una parete a Marrakech" },
    { src: "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/hero_2.webp", cap: "Hero 2", alt: "Alba luminosa sulle case abbarbicate e sui monti del Rif a Chefchaouen" }
  ],
  faqs: [
    { question: "Questo tour è privato o condiviso?", answer: "È un tour completamente privato ad uso esclusivo del vostro gruppo, che vi garantisce massima privacy e flessibilità." },
    { question: "Quanto dura la cammellata ed esistono alternative?", answer: "La cammellata dura circa 45-90 minuti. Se preferite non montare in sella, possiamo predisporre il transfer in 4x4 senza costi aggiuntivi." },
    { question: "Le tende del campo nel deserto hanno servizi privati?", answer: "Sì, il campo tendato di lusso offre tende spaziose con bagno privato interno, doccia e acqua calda corrente." },
    { question: "Quale tipo di veicolo viene utilizzato?", answer: "Un moderno mezzo fuoristrada 4x4 o minivan con aria condizionata. Per gruppi più numerosi sono disponibili minibus." },
    { question: "È possibile richiedere menu per diete particolari?", answer: "Sì, fatecelo sapere al momento della prenotazione e predisporremo con cura opzioni vegetariane, vegane o senza glutine." },
    { question: "Questo itinerario è adatto a viaggiatori di tutte le età?", answer: "Sì, il programma è studiato per famiglie, coppie e piccoli gruppi, con soste regolari e ritmi ben bilanciati." },
    { question: "Qual è il periodo migliore per questo viaggio?", answer: "La primavera e l'autunno offrono condizioni meteo ottimali. Anche l'inverno è molto gradevole nelle regioni meridionali." },
    { question: "Come posso prenotare il tour?", answer: "Inviateci una richiesta specificando date di viaggio, numero di partecipanti e preferenze per ricevere conferma e programma definitivo." }
  ]
};

saveTour('14-days-grand-morocco-tour-itinerary-from-casablanca', tour34_es, tour34_it);

// -------------------------------------------------------------
// Tour 35: 2-day-desert-marrakech-tour-from-fes
// -------------------------------------------------------------
const tour35_es = {
  slug: "2-day-desert-marrakech-tour-from-fes",
  title: "Tour de 2 Días al Desierto de Fez a Marrakech vía Merzouga | Sahara Star Tours",
  shortTitle: "Tour de 2 Días de Fez a Marrakech vía Merzouga",
  description: "Cruce exprés del desierto en 2 días de Fez a Marrakech. Paseo en camello al atardecer en Merzouga, campamento de lujo, Gargantas del Todra y Alto Atlas.",
  aboutHtml: "Esta intensa travesía privada de 2 días por Marruecos comienza en Fez y concluye en Marrakech. Un itinerario dinámico diseñado para quienes disponen de poco tiempo pero no quieren renunciar a la magia del Sahara: cruce del Medio Atlas, bosque de cedros, palmeral del Ziz, noche bajo las estrellas en campamento de jaimas de lujo en Merzouga, Gargantas del Todra y paso del Alto Atlas por Ait Ben Haddou hasta Marrakech.",
  duration: "2 Días / 1 Noche",
  startingFrom: "Fez",
  price: "Desde 250 $/persona",
  highlights: [
    "Desierto del Sahara en Merzouga y las dunas de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Kasbah de Ait Ben Haddou declarada Patrimonio de la Humanidad por la UNESCO",
    "Paso panorámico a través de las altas cumbres del Alto Atlas",
    "Medina histórica de Fez y sus tesoros culturales milenarios",
    "Medina histórica de Marrakech y sus monumentos principales"
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
      title: "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      content: "Salida temprano desde Fez hacia el sur pasando por Ifrane ('la Suiza de Marruecos') y el bosque de cedros de Azrou para observar a los macacos salvajes. Almuerzo en Midelt y descenso por el puerto de Tizi n'Tilghmt siguiendo los palmerales del Valle del Ziz. Por la tarde, llegada a Merzouga para montar en camello y cruzar las dunas doradas de Erg Chebbi al atardecer. Llegada al campamento de lujo con jaimas privadas, cena tradicional bereber, música de tambores junto a la hoguera y cielo estrellado."
    },
    {
      day: "Día 2",
      title: "Merzouga – Gargantas del Todra – Kasbah Ait Ben Haddou – Alto Atlas – Marrakech",
      content: "Amanecer sobre las dunas y desayuno en el campamento. Salida del desierto en dirección oeste pasando por los palmerales de Tinjdad hasta las majestuosas Gargantas del Todra con paredes verticales de 300 metros. Continuación hacia Ouarzazate para el almuerzo y visita a la célebre Kasbah de Ait Ben Haddou, joya de adobe protegida por la UNESCO y escenario de Gladiator. Cruce de las cumbres del Alto Atlas por el puerto de Tizi n'Tichka (2.260 m) con paradas fotográficas, llegando a Marrakech al anochecer. Traslado a su riad o aeropuerto."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Fez a Merzouga", day: "Día 1", subtitle: "Hacia el Desierto", desc: "Ifrane, bosque de cedros, Valle del Ziz y noche en campamento de lujo." },
    { number: 2, name: "Merzouga a Marrakech", day: "Día 2", subtitle: "Atlas y Marrakech", desc: "Gargantas del Todra, Kasbah Ait Ben Haddou y llegada a Marrakech." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_1.webp", cap: "Galería 1", alt: "Minarete de la Torre Hassan y columnas antiguas al anochecer en Rabat" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_10.webp", cap: "Galería 10", alt: "Pañuelos azul brillante y artesanías bereberes expuestas en Ait Ben Haddou" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_2.webp", cap: "Galería 2", alt: "Caravana de camellos atravesando las amplias dunas de Erg Chebbi cerca de Merzouga" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_3.webp", cap: "Galería 3", alt: "Mujer en ciclomotor vintage recorriendo un callejón de la medina de Marrakech" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_4.webp", cap: "Galería 4", alt: "Viajeros explorando tiendas de alfombras y artesanía en Ait Ben Haddou" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_5.webp", cap: "Galería 5", alt: "Sombras y luz dorada del atardecer perfilando las dunas de Erg Chebbi" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_6.webp", cap: "Galería 6", alt: "Minarete de la Koutoubia y ruinas de la antigua sala de oración en Marrakech" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_9.webp", cap: "Galería 9", alt: "Grabados moriscos de piedra en la Torre Hassan enmarcados por palmeras" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/hero_2.webp", cap: "Hero 2", alt: "Mujeres con chilabas tradicionales comprando en un puesto de verduras en Marrakech" }
  ],
  faqs: [
    { question: "¿Es este un tour privado o compartido?", answer: "Es una experiencia totalmente privada para su grupo, con vehículo climatizado y chófer en exclusiva." },
    { question: "¿Cuánto dura el paseo en camello y qué alternativa hay?", answer: "El paseo en camello dura entre 45 minutos y una hora y media. Si lo prefiere, se organiza el traslado al campamento en 4x4." },
    { question: "¿La jaima en el campamento dispone de baño privado?", answer: "Sí, el campamento de lujo ofrece jaimas privadas con baño completo y ducha con agua caliente en su interior." },
    { question: "¿Dónde se realizan la recogida y la llegada?", answer: "La recogida es en Fez (hotel o aeropuerto) de madrugada y el tour finaliza al anochecer en Marrakech (hotel o aeropuerto)." },
    { question: "¿Qué tipo de vehículo se utiliza?", answer: "Un moderno todoterreno 4x4 o monovolumen con aire acondicionado preparado para largas distancias." },
    { question: "¿Se pueden adaptar las comidas a dietas especiales?", answer: "Sí, indíquenos sus preferencias dietéticas al reservar para coordinar opciones vegetarianas o especiales." },
    { question: "¿Es adecuado este itinerario para todas las edades?", answer: "Sí, aunque se trata de dos jornadas de carretera intensa, se realizan paradas regulares para descansar y tomar fotos." },
    { question: "¿Cuándo es la mejor época del año para realizar este tour?", answer: "La primavera y el otoño son ideales. En invierno las jornadas son soleadas y frescas, perfectas para viajar." }
  ]
};

const tour35_it = {
  slug: "2-day-desert-marrakech-tour-from-fes",
  title: "Tour di 2 Giorni nel Deserto da Fes a Marrakech via Merzouga | Sahara Star Tours",
  shortTitle: "Tour di 2 Giorni da Fes a Marrakech via Merzouga",
  description: "Attraversata express del deserto in 2 giorni da Fes a Marrakech. Trekking in cammello a Merzouga, campo tendato di lusso, Gole del Todra e Alto Atlante.",
  aboutHtml: "Questo entusiasmante tour privato di 2 giorni in Marocco inizia a Fes e si conclude a Marrakech. Un itinerario dinamico ideale per chi ha poco tempo ma non vuole perdersi l'emozione del Sahara: valico del Medio Atlante, foresta di cedri, Valle dello Ziz, notte magica sotto le stelle a Merzouga in campo tendato di lusso, Gole del Todra e superamento dell'Alto Atlante passando per Ait Ben Haddou fino a Marrakech.",
  duration: "2 Giorni / 1 Notte",
  startingFrom: "Fes",
  price: "Da 250 €/persona",
  highlights: [
    "Deserto del Sahara a Merzouga e le maestose dune dell'Erg Chebbi",
    "Trekking a dorso di cammello al tramonto",
    "Kasbah di Ait Ben Haddou Patrimonio Mondiale dell'Umanità UNESCO",
    "Valico panoramico attraverso le vette dell'Alto Atlante",
    "Antica medina di Fes e i suoi tesori culturali millenari",
    "Medina storica di Marrakech e i suoi monumenti principali"
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
      title: "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      content: "Partenza di primo mattino da Fes verso sud attraversando Ifrane (la 'Svizzera del Marocco') e la foresta di cedri di Azrou con i macachi di Barberia. Pranzo a Midelt e discesa attraverso il passo Tizi n'Tilghmt lungo le oasi della Valle dello Ziz. Arrivo nel pomeriggio a Merzouga e salita sui dromedari per attraversare le spettacolari dune dell'Erg Chebbi al tramonto. Arrivo al campo tendato di lusso, cena tradizionale berbera, musica attorno al fuoco e notte stellata."
    },
    {
      day: "Giorno 2",
      title: "Merzouga – Gole del Todra – Kasbah Ait Ben Haddou – Alto Atlante – Marrakech",
      content: "Alba sulle dune e colazione all'accampamento. Partenza verso ovest attraverso i palmeti di Tinjdad fino alle impressionanti Gole del Todra, canyon con pareti rocciose alte 300 metri. Proseguimento verso Ouarzazate per il pranzo e visita della celebre Kasbah di Ait Ben Haddou (Patrimonio UNESCO). Attraversamento delle cime dell'Alto Atlante attraverso il passo Tizi n'Tichka (2.260 m) con soste fotografiche, con arrivo a Marrakech in serata. Trasferimento in hotel o in aeroporto."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Da Fes a Merzouga", day: "Giorno 1", subtitle: "Verso il Deserto", desc: "Ifrane, foresta di cedri, Valle dello Ziz e notte in campo di lusso." },
    { number: 2, name: "Da Merzouga a Marrakech", day: "Giorno 2", subtitle: "Atlante e Marrakech", desc: "Gole del Todra, Kasbah Ait Ben Haddou e arrivo a Marrakech." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_1.webp", cap: "Galleria 1", alt: "Minareto della Torre di Hassan e colonne antiche al crepuscolo a Rabat" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_10.webp", cap: "Galleria 10", alt: "Sciarpe blu cobalto e artigianato berbero in mostra ad Ait Ben Haddou" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_2.webp", cap: "Galleria 2", alt: "Carovana di dromedari che attraversa le ampie dune dell'Erg Chebbi a Merzouga" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_3.webp", cap: "Galleria 3", alt: "Donna in motorino d'epoca in una via della medina di Marrakech" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_4.webp", cap: "Galleria 4", alt: "Turisti che esplorano botteghe di tappeti e artigianato ad Ait Ben Haddou" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_5.webp", cap: "Galleria 5", alt: "Ombre e luce dorata del tramonto sulle dune ondulate dell'Erg Chebbi" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_6.webp", cap: "Galleria 6", alt: "Minareto della Moschea Koutoubia e rovine storiche a Marrakech" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_9.webp", cap: "Galleria 9", alt: "Intagli moreschi sulla Torre di Hassan incorniciati da foglie di palma" },
    { src: "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/hero_2.webp", cap: "Hero 2", alt: "Donne in djellaba tradizionale al mercato ortofrutticolo di Marrakech" }
  ],
  faqs: [
    { question: "Questo tour è privato o condiviso?", answer: "È un tour interamente privato ed esclusivo per il vostro gruppo, con mezzo climatizzato e autista dedicato." },
    { question: "Quanto dura la cammellata ed esistono alternative?", answer: "La cammellata dura da 45 a 90 minuti. Se preferite non montare in sella, il transfer al campo avviene in fuoristrada 4x4." },
    { question: "La tenda nel campo ha il bagno privato?", answer: "Sì, l'accampamento di lusso offre ampie tende private con bagno ensuite interno e doccia con acqua calda." },
    { question: "Dove avvengono la partenza e l'arrivo?", answer: "La partenza avviene a Fes al mattino presto e il tour termina in serata a Marrakech (in hotel o aeroporto)." },
    { question: "Che tipo di veicolo viene utilizzato?", answer: "Un comodo fuoristrada 4x4 o minivan climatizzato ideale per le tratte panoramiche a lunga percorrenza." },
    { question: "È possibile richiedere menu per diete speciali?", answer: "Sì, segnalatecelo prima della partenza per predisporre menu vegetariani o specifici per le vostre esigenze." },
    { question: "L'itinerario è adatto a tutte le età?", answer: "Sì, benché siano due giornate intense di viaggio, sono previste soste frequenti per riposare e scattare foto." },
    { question: "Qual è il periodo migliore per questo viaggio?", answer: "Primavera e autunno sono ideali. L'inverno offre giornate limpide e soleggiate nel sud del paese." }
  ]
};

saveTour('2-day-desert-marrakech-tour-from-fes', tour35_es, tour35_it);

// -------------------------------------------------------------
// Tour 36: 2-day-sahara-desert-tour-from-fes
// -------------------------------------------------------------
const tour36_es = {
  slug: "2-day-sahara-desert-tour-from-fes",
  title: "Tour de 2 Días al Desierto del Sahara desde Fez a Merzouga | Sahara Star Tours",
  shortTitle: "Tour de 2 Días al Desierto desde Fez a Merzouga",
  description: "Escapada rápida de 2 días al desierto del Sahara desde Fez ida y vuelta. Paisajes del Medio Atlas, paseo en camello al atardecer y glamping en Merzouga.",
  aboutHtml: "Esta escapada privada de 2 días comienza y concluye en Fez. Es el circuito ideal para viajeros con base en Fez que desean experimentar la autenticidad del desierto del Sahara en poco tiempo: atravesando las cumbres del Medio Atlas, los bosques de cedros de Azrou, el Valle del Ziz y disfrutando de un atardecer en camello con noche mágica en campamento de lujo entre las dunas de Erg Chebbi.",
  duration: "2 Días / 1 Noche",
  startingFrom: "Fez",
  price: "Desde 250 $/persona",
  highlights: [
    "Desierto del Sahara en Merzouga y las dunas de Erg Chebbi",
    "Paseo en camello por el desierto al atardecer",
    "Medina histórica de Fez y sus monumentos culturales",
    "Ifrane, la Suiza de Marruecos",
    "Bosque milenario de cedros de Azrou y sus macacos"
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
      title: "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      content: "Salida temprano desde su alojamiento en Fez. Viaje hacia el sur atravesando Ifrane ('la Suiza de Marruecos') y el bosque de cedros de Azrou para contemplar a los macacos salvajes en su hábitat natural. Almuerzo en Midelt y travesía por el puerto de Tizi n'Tilghmt siguiendo el palmeral del Valle del Ziz. Llegada por la tarde a Merzouga para montar en camello y cruzar las dunas doradas de Erg Chebbi al atardecer. Acomodación en campamento de jaimas de lujo con cena tradicional, tambores bereberes y noche estrellada."
    },
    {
      day: "Día 2",
      title: "Merzouga – Rissani – Erfoud – Valle del Ziz – Ifrane – Fez",
      content: "Amanecer en las dunas y desayuno en el campamento antes de regresar en camello o 4x4 a Merzouga. Visita al mercado tradicional de Rissani y talleres de mármol fosilizado en Erfoud. Travesía de regreso a lo largo del río Ziz con parada panorámica del valle. Viaje a través del Medio Atlas pasando por el bosque de cedros e Ifrane hasta llegar a Fez hacia las 18:00 h. Traslado a su riad o aeropuerto."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Fez a Merzouga", day: "Día 1", subtitle: "Hacia el Desierto", desc: "Ifrane, bosque de cedros, Valle del Ziz y noche en campamento de lujo." },
    { number: 2, name: "Merzouga a Fez", day: "Día 2", subtitle: "Regreso a Fez", desc: "Amanecer en dunas, mercado de Rissani, Erfoud y llegada a Fez." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_1.webp", cap: "Galería 1", alt: "Curtidores trabajando en las cubas de piedra de las tenerías Chouara en Fez" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_10.webp", cap: "Galería 10", alt: "Cresta sinuosa de dunas de arena en Erg Chebbi bajo un cielo azul despejado" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_3.webp", cap: "Galería 3", alt: "Crestas de dunas de arena de Erg Chebbi en Merzouga al caer la tarde" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_4.webp", cap: "Galería 4", alt: "Estrecho callejón de zocos artesanos con joyerías en la medina de Fez" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_5.webp", cap: "Galería 5", alt: "Patrones ondulados creados por el viento sobre la arena dorada del desierto" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_6.webp", cap: "Galería 6", alt: "Amplia panorámica de dunas saharianas ondulantes al atardecer en Merzouga" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_7.webp", cap: "Galería 7", alt: "Viajeros con turbantes azules en excursión en camello sobre las dunas de Erg Chebbi" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_8.webp", cap: "Galería 8", alt: "Dunas anaranjadas de Erg Chebbi alzándose más allá de la llanura rocosa" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_9.webp", cap: "Galería 9", alt: "Jaimas blancas de un campamento de lujo enclavado entre las dunas al anochecer" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/hero_2.webp", cap: "Hero 2", alt: "Amanecer panorámico sobre el inmenso mar de dunas de Erg Chebbi en Merzouga" }
  ],
  faqs: [
    { question: "¿Es este un tour privado o compartido?", answer: "Es una experiencia privada y exclusiva para su grupo, con vehículo climatizado y conductor a su disposición." },
    { question: "¿Cuánto dura el paseo en camello y qué alternativa hay?", answer: "El paseo en camello dura entre 45 minutos y una hora y media. Si lo desea, el traslado al campamento se realiza en 4x4." },
    { question: "¿La jaima en el desierto cuenta con baño privado?", answer: "Sí, el campamento de lujo ofrece jaimas privadas con baño ensuite completo, lavabo y ducha con agua caliente." },
    { question: "¿Dónde se realiza la recogida y el regreso?", answer: "La recogida y regreso se efectúan en su hotel o aeropuerto de Fez según sus preferencias de viaje." },
    { question: "¿Qué tipo de vehículo se utiliza?", answer: "Un moderno todoterreno 4x4 o monovolumen con aire acondicionado adaptado para trayectos confortables." },
    { question: "¿Se pueden solicitar menús vegetarianos o dietas especiales?", answer: "Sí, solo tiene que indicárnoslo al reservar para preparar comidas adecuadas a sus necesidades." },
    { question: "¿Es adecuado este itinerario para todas las edades?", answer: "Sí, es apto para familias con niños y adultos mayores, programando descansos periódicos en ruta." },
    { question: "¿Cuál es la época más idónea para este tour?", answer: "La primavera y el otoño son magníficos. El invierno también es ideal por la claridad de sus cielos en el desierto." }
  ]
};

const tour36_it = {
  slug: "2-day-sahara-desert-tour-from-fes",
  title: "Tour di 2 Giorni nel Deserto del Sahara da Fes a Merzouga | Sahara Star Tours",
  shortTitle: "Tour di 2 Giorni nel Deserto da Fes a Merzouga",
  description: "Fuga rapida di 2 giorni nel Sahara da Fes a Merzouga andata e ritorno. Panorami del Medio Atlante, cammellata al tramonto e glamping a Merzouga.",
  aboutHtml: "Questa fuga privata di 2 giorni nel deserto inizia e si conclude a Fes. È l'itinerario perfetto per chi si trova a Fes e desidera vivere l'autentica magia del Sahara in poco tempo: attraverso le cime del Medio Atlante, le foreste di cedri di Azrou e la Valle dello Ziz, per poi ammirare il tramonto a dorso di cammello e pernottare in un lussuoso campo tendato tra le dune dell'Erg Chebbi.",
  duration: "2 Giorni / 1 Notte",
  startingFrom: "Fes",
  price: "Da 250 €/persona",
  highlights: [
    "Deserto del Sahara a Merzouga e le maestose dune dell'Erg Chebbi",
    "Trekking a dorso di cammello al tramonto",
    "Medina storica di Fes e i suoi monumenti culturali",
    "Ifrane, la Svizzera del Marocco",
    "Foresta secolare di cedri di Azrou e macachi"
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
      title: "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      content: "Partenza di primo mattino dal vostro alloggio a Fes. Percorso verso sud attraverso Ifrane (la 'Svizzera del Marocco') e le secolari foreste di cedri di Azrou per osservare i macachi in libertà. Pranzo a Midelt e discesa lungo la Valle dello Ziz. Nel pomeriggio arrivo a Merzouga e salita sui dromedari per attraversare le spettacolari dune dorate dell'Erg Chebbi al tramonto. Arrivo al campo tendato di lusso con cena tipica berbera, musica attorno al fuoco e notte stellata."
    },
    {
      day: "Giorno 2",
      title: "Merzouga – Rissani – Erfoud – Valle dello Ziz – Ifrane – Fes",
      content: "Alba memorabile tra le dune e colazione all'accampamento prima del rientro in cammello o 4x4 a Merzouga. Visita al mercato tradizionale di Rissani e alle botteghe di marmi fossili a Erfoud. Viaggio di ritorno lungo il fiume Ziz con sosta panoramica. Risalita del Medio Atlante attraverso la foresta di cedri e Ifrane con arrivo a Fes verso le 18:00. Rientro al vostro alloggio o all'aeroporto."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Da Fes a Merzouga", day: "Giorno 1", subtitle: "Verso il Deserto", desc: "Ifrane, foresta di cedri, Valle dello Ziz e notte in campo di lusso." },
    { number: 2, name: "Da Merzouga a Fes", day: "Giorno 2", subtitle: "Rientro a Fes", desc: "Alba sulle dune, mercato di Rissani, Erfoud e arrivo a Fes." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_1.webp", cap: "Galleria 1", alt: "Conciatori al lavoro nelle vasche in pietra delle concerie di Chouara a Fes" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_10.webp", cap: "Galleria 10", alt: "Cresta sinuosa delle dune di sabbia dell'Erg Chebbi sotto un cielo azzurro terso" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_3.webp", cap: "Galleria 3", alt: "Cime sabbiose delle dune dell'Erg Chebbi a Merzouga al calar del sole" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_4.webp", cap: "Galleria 4", alt: "Stretto vicolo con botteghe di gioielli nella medina antica di Fes" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_5.webp", cap: "Galleria 5", alt: "Disegni ondulati formati dal vento sulla sabbia dorata del deserto" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_6.webp", cap: "Galleria 6", alt: "Ampia panoramica sulle dune ondulate del Sahara al tramonto a Merzouga" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_7.webp", cap: "Galleria 7", alt: "Viaggiatori con turbanti blu in escursione a dorso di dromedario sulle dune dell'Erg Chebbi" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_8.webp", cap: "Galleria 8", alt: "Dune arancioni dell'Erg Chebbi che si innalzano oltre la pianura rocciosa" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_9.webp", cap: "Galleria 9", alt: "Tende bianche di un campo tendato di lusso incastonato tra le dune al tramonto" },
    { src: "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/hero_2.webp", cap: "Hero 2", alt: "Alba panoramica sullo sconfinato mare di sabbia dell'Erg Chebbi a Merzouga" }
  ],
  faqs: [
    { question: "Questo tour è privato o condiviso?", answer: "È un tour completamente privato per il vostro gruppo, con mezzo climatizzato e autista dedicato." },
    { question: "Quanto dura la cammellata ed esistono alternative?", answer: "La cammellata dura da 45 a 90 minuti. Se preferite non cavalcare, è possibile organizzare il transfer al campo in 4x4." },
    { question: "La tenda nel deserto dispone di bagno privato?", answer: "Sì, il campo tendato di lusso dispone di tende con bagno interno completo di doccia con acqua calda." },
    { question: "Dove avvengono la partenza e il rientro?", answer: "La partenza e il rientro avvengono direttamente presso il vostro hotel o all'aeroporto di Fes." },
    { question: "Che tipo di mezzo viene impiegato?", answer: "Un moderno mezzo fuoristrada 4x4 o minivan climatizzato comodo e sicuro per l'intero viaggio." },
    { question: "È possibile richiedere menu vegetariani o particolari?", answer: "Certamente, basta segnalarlo al momento della prenotazione per organizzare menu adatti." },
    { question: "L'itinerario è adatto a tutte le fasce d'età?", answer: "Sì, è perfetto sia per famiglie con bambini che per coppie, con soste regolari lungo il tragitto." },
    { question: "Qual è il periodo migliore per questo viaggio?", answer: "Primavera e autunno offrono condizioni splendide. L'inverno regala un clima soleggiato e fresco nel deserto." }
  ]
};

saveTour('13-day-absolute-morocco-tour-from-tangier', tour33_es, tour33_it);
saveTour('14-days-grand-morocco-tour-itinerary-from-casablanca', tour34_es, tour34_it);
saveTour('2-day-desert-marrakech-tour-from-fes', tour35_es, tour35_it);
saveTour('2-day-sahara-desert-tour-from-fes', tour36_es, tour36_it);
