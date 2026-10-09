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
// Tour 15: 11-days-morocco-classic-tour
// -------------------------------------------------------------
const tour15_es = {
  slug: "11-days-morocco-classic-tour",
  title: "Tour Clásico de 11 Días por las Ciudades Imperiales de Marruecos | Sahara Star Tours",
  shortTitle: "Tour Clásico de 11 Días por las Ciudades Imperiales",
  description: "Paquete vacacional clásico de 11 días en Marruecos. Descubra Rabat, Chefchaouen, la antigua medina de Fez, acampada de lujo en el Sahara y la mágica Marrakech.",
  aboutHtml: "Un completo viaje privado clásico de 11 días por Marruecos diseñado para viajeros que desean vivir la historia marroquí en su totalidad. Desde la costa de Casablanca y los majestuosos monumentos de Rabat, ascenderá por las montañas del Rif para disfrutar de las serenas callejuelas azules de Chefchaouen. Continuará por Volubilis hacia la capital espiritual de Fez, seguido de una espectacular travesía hacia el desierto del Sahara con paseo en camello al atardecer y glamping de lujo. Cruzará la cordillera del Atlas pasando por Ait Ben Haddou para culminar entre los vibrantes zocos y jardines de Marrakech.",
  duration: "11 Días / 10 Noches",
  startingFrom: "Casablanca",
  price: "Desde 1.350 $/persona",
  highlights: [
    "Explore las antiguas medinas declaradas Patrimonio de la Humanidad por la UNESCO y sus bulliciosos zocos",
    "Cruce las majestuosas montañas del Alto Atlas a través del panorámico puerto de Tizi n'Tichka",
    "Visite la legendaria Kasbah de Ait Ben Haddou, célebre escenario de superproducciones de Hollywood",
    "Disfrute de un auténtico paseo en camello al atardecer por las dunas doradas del Sahara",
    "Pase una noche mágica de glamping bajo el cielo estrellado en un campamento de lujo en el desierto",
    "Descubra oasis sobrecogedores, espectaculares gargantas (Todra y Dades) y valles exuberantes",
    "Saboree la auténtica gastronomía marroquí y la legendaria hospitalidad tradicional bereber"
  ],
  inclusions: [
    "Recogida y traslado de regreso a su aeropuerto, hotel o riad",
    "Transporte privado en un moderno vehículo 4x4 o monovolumen con aire acondicionado",
    "Chófer profesional de habla inglesa/española y guías locales titulados",
    "Alojamiento de noche en riads y hoteles auténticos cuidadosamente seleccionados",
    "1 noche en campamento de lujo en el Sahara (jaima privada con baño completo ensuite)",
    "Paseos en camello al atardecer y al amanecer en el desierto (un camello por persona)",
    "Desayunos diarios y cenas especificadas según el itinerario detallado",
    "Impuestos locales y gastos de carburante incluidos"
  ],
  exclusions: [
    "Billetes de avión internacionales",
    "Seguro médico y de viaje personal",
    "Almuerzos y refrigerios de mediodía",
    "Bebidas durante las comidas",
    "Entradas a monumentos históricos y museos",
    "Propinas para guías locales y chófer",
    "Gastos personales y compras de recuerdos"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Llegada y Recogida en Casablanca",
      content: "Su guía y chófer privado le darán una cálida bienvenida en el aeropuerto de Casablanca a la llegada de su vuelo para dar comienzo a la expedición. Traslado en un cómodo vehículo climatizado hacia el centro de la ciudad para visitar la majestuosa Mezquita Hassan II, levantada sobre la costa atlántica con el trabajo magistral de más de 6.000 artesanos tradicionales y una de las pocas accesibles a visitantes no musulmanes. Alojamiento en hotel de Casablanca."
    },
    {
      day: "Día 2",
      title: "Casablanca – Rabat – Chefchaouen",
      content: "Tras el desayuno, nos desplazamos hacia Rabat, capital administrativa de Marruecos. Visita a la Kasbah de los Oudayas, la Medina histórica y la explanada de la Torre Hassan. Después del almuerzo, continuamos la ruta adentrándonos en la cordillera del Rif hacia Chefchaouen, la cautivadora ciudad azul. Al llegar, dispondrá de tiempo libre para pasear por sus callejuelas empedradas de azul cobalto y empaparse de su apacible encanto andalusí. Noche en un riad tradicional."
    },
    {
      day: "Día 3",
      title: "Chefchaouen – Volubilis – Fez",
      content: "Mañana para disfrutar de la mágica atmósfera de Chefchaouen y sus plazas antes de partir hacia las impresionantes ruinas romanas de Volubilis, célebre por sus mosaicos excepcionalmente conservados, calzadas y vestigios del Imperio. Por la tarde, llegada a Fez, la capital espiritual y cultural de Marruecos, con registro y alojamiento en un riad tradicional de la medina."
    },
    {
      day: "Día 4",
      title: "Visita Guiada de Día Completo por la Antigua Medina de Fez",
      content: "Jornada completa dedicada a la fascinante medina de Fez el-Bali, la zona peatonal urbana más grande del mundo. Acompañado por un guía oficial local, visitará la Mezquita y Universidad Al Quaraouiyine (la más antigua en funcionamiento continuo), la Madraza Bou Inania, las legendarias tenerías de Chouara con sus métodos ancestrales de curtido, fuentes ornamentales de Nejjarine y la imponente puerta Bab Boujloud. Tarde libre en los zocos artesanos y noche en el riad."
    },
    {
      day: "Día 5",
      title: "Fez – Ifrane – Bosque de Cedros – Desierto del Sahara de Merzouga",
      content: "Dejamos Fez rumbo al sur ascendiendo por el Medio Atlas hasta Ifrane, conocida por su arquitectura alpina, y los milenarios bosques de cedros de Azrou, donde habitan los macacos de Berbería en libertad. Cruzamos el Valle del Ziz hasta llegar al atardecer a Merzouga. Iniciamos la caravana de camellos sobre las doradas dunas de Erg Chebbi para admirar la puesta de sol antes de acomodarnos en nuestro campamento de lujo. Cena tradicional bereber, música de tambores junto a la hoguera y noche estrellada."
    },
    {
      day: "Día 6",
      title: "Exploración del Desierto de Merzouga y Cultura Nómada",
      content: "Amanecer sobre las crestas del desierto seguido de un completo desayuno campestre. Día consagrado a descubrir los secretos del Sahara: visita a los antiguos sistemas de irrigación por canales fósiles (khettaras), convivencia musical con la comunidad Gnawa del pueblo de Khamlia y encuentro con familias nómadas del desierto para conocer su modo de vida ancestral. Noche en hotel o riad a los pies de las dunas con cena incluida."
    },
    {
      day: "Día 7",
      title: "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",
      content: "Salida del desierto visitando el histórico zoco tradicional de Rissani antes de dirigirnos hacia Tinghir y las monumentales Gargantas del Todra, imponentes cañones rocosos con paredes verticales de más de 300 metros de altura. Tras un paseo a pie junto al río y el almuerzo, continuamos la ruta hacia las formaciones geológicas de los dedos de mono en el Valle del Dades. Cena y alojamiento en hotel del valle."
    },
    {
      day: "Día 8",
      title: "Valle del Dades – Ouarzazate – Kasbah Ait Ben Haddou – Marrakech",
      content: "Desayuno con vistas al valle y viaje por la Ruta de las Mil Kasbahs pasando por Kelaat M'Gouna (el Valle de las Rosas) y Ouarzazate. Visita a la impresionante Kasbah de Ait Ben Haddou, joya de arquitectura de adobe protegida por la UNESCO y escenario de Gladiator y Juego de Tronos. Ascenso y travesía panorámica del Alto Atlas por el puerto de montaña Tizi n'Tichka (2.260 m) antes de llegar a la animada Marrakech. Noche en riad."
    },
    {
      day: "Día 9",
      title: "Visita Guiada por la Medina y Monumentos de Marrakech",
      content: "Recorrido guiado por la Ciudad Roja: los Jardines Majorelle, el Palacio de la Bahía, la Mezquita Koutoubia y la laberíntica medina con sus zocos de especias, cuero y alfombras. Por la tarde, disfrute del ambientado espectáculo al aire libre en la mítica Plaza Jemaa el-Fna entre músicos, cuentacuentos y puestos gastronómicos. Alojamiento en riad."
    },
    {
      day: "Día 10",
      title: "Marrakech – Excursión Costera a Essaouira",
      content: "Viaje hacia la costa atlántica en dirección a Essaouira (la histórica Mogador). En el trayecto observará los campos de árboles de argán y las singulares cabras trepadoras. En Essaouira recorrerá las murallas de la Skala, el activo puerto pesquero con sus barcas azules y la encantadora medina blanca protegida por la UNESCO, famosa por sus talleres de madera de tuya y su brisa oceánica. Noche en riad costero."
    },
    {
      day: "Día 11",
      title: "Essaouira – Traslado al Aeropuerto de Casablanca y Fin del Tour",
      content: "Desayuno con brisa marina y traslado cómodo por autopista hacia el Aeropuerto Internacional Mohamed V de Casablanca para conectar con su vuelo de regreso, concluyendo así este inolvidable circuito clásico de 11 días por Marruecos."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Casablanca", day: "Día 1", subtitle: "Mezquita Hassan II", desc: "Llegada y visita monumental." },
    { number: 2, name: "Rabat", day: "Día 2", subtitle: "Capital Histórica", desc: "Patrimonio real y vistas atlánticas." },
    { number: 3, name: "Chefchaouen", day: "Día 3", subtitle: "Ciudad Azul del Rif", desc: "Mágicas callejuelas azuladas." },
    { number: 4, name: "Medina de Fez", day: "Días 4 y 5", subtitle: "Capital Espiritual", desc: "Paseo guiado por laberintos medievales." },
    { number: 5, name: "Sahara de Merzouga", day: "Días 6 y 7", subtitle: "Dunas de Erg Chebbi", desc: "Paseo en camello y campamento de lujo." },
    { number: 6, name: "Gargantas del Dades", day: "Día 8", subtitle: "Cañones del Atlas", desc: "Gargantas y Valle de las Rosas." },
    { number: 7, name: "Marrakech", day: "Días 9 y 10", subtitle: "Ciudad Roja Imperial", desc: "Zocos, palacios y jardines." },
    { number: 8, name: "Casablanca", day: "Día 11", subtitle: "Salida", desc: "Regreso costero y despedida en el aeropuerto." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/thumbnail.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Paisaje representativo del circuito clásico de 11 días por Marruecos" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-01.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Monumento histórico y arquitectura tradicional en Marruecos" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-02.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Calles azules y detalles arquitectónicos en Chefchaouen" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-03.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Panorámica de la medina histórica de Fez" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-04.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Caravana de dromedarios al atardecer en las dunas de Merzouga" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-05.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Campamento bereber de lujo en el desierto del Sahara" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-06.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Imponentes paredes de roca en las Gargantas del Todra" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-07.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Kasbah histórica de Ait Ben Haddou en el Alto Atlas" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-08.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Zocos vibrantes y puestos de artesanía en Marrakech" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-09.jpg", cap: "Tour Clásico de 11 Días por Marruecos – Paquete Privado", alt: "Murallas atlánticas y puerto pesquero de Essaouira" }
  ],
  faqs: []
};

const tour15_it = {
  slug: "11-days-morocco-classic-tour",
  title: "Tour Classico di 11 Giorni delle Città Imperiali del Marocco | Sahara Star Tours",
  shortTitle: "Tour Classico di 11 Giorni delle Città Imperiali",
  description: "Pacchetto vacanza classico di 11 giorni in Marocco. Scoprite Rabat, Chefchaouen, l'antica medina di Fes, glamping di lusso nel Sahara e l'incantevole Marrakech.",
  aboutHtml: "Un viaggio privato classico di 11 giorni in Marocco, curato nei minimi dettagli per i viaggiatori che desiderano vivere l'intera epopea marocchina. Dalla costa di Casablanca e dai grandiosi monumenti di Rabat, salirete sui monti del Rif per ammirare i suggestivi vicoli blu di Chefchaouen. Proseguirete attraverso Volubilis verso la città spirituale di Fes, per poi vivere l'indimenticabile emozione del deserto del Sahara con escursione a dorso di cammello al tramonto e notte in accampamento di lusso. Attraverserete le vette dell'Atlante passando per Ait Ben Haddou fino ai vivaci souk e giardini di Marrakech.",
  duration: "11 Giorni / 10 Notti",
  startingFrom: "Casablanca",
  price: "Da 1.350 €/persona",
  highlights: [
    "Esplorate le antiche medine Patrimonio dell'Umanità UNESCO e i loro vivaci souk",
    "Attraversate le maestose montagne dell'Alto Atlante attraverso il panoramico passo Tizi n'Tichka",
    "Visitate la leggendaria Kasbah di Ait Ben Haddou, celebre set cinematografico internazionale",
    "Vivete un autentico trekking a dorso di cammello al tramonto tra le dune dorate del Sahara",
    "Trascorrete una notte magica in glamping sotto il cielo stellato in un campo tendato di lusso",
    "Ammirate oasi spettacolari, gole suggestive (Todra e Dades) e valli verdeggianti",
    "Gustate l'autentica cucina tradizionale marocchina e la calorosa ospitalità berbera"
  ],
  inclusions: [
    "Servizio di accoglienza e transfer da/per aeroporto, hotel o riad",
    "Trasporto privato in moderno fuoristrada 4x4 o minivan con aria condizionata",
    "Autista professionista parlante inglese/spagnolo e guide locali autorizzate",
    "Pernottamenti in riad e hotel autentici di alto livello selezionati",
    "1 notte in accampamento di lusso nel Sahara (tenda privata con bagno interno ensuite)",
    "Escursione in cammello al tramonto e all'alba nel deserto (un dromedario per persona)",
    "Colazioni giornaliere e cene specificate secondo l'itinerario dettagliato",
    "Tasse locali e carburante per l'intero itinerario inclusi"
  ],
  exclusions: [
    "Biglietti aerei per voli internazionali",
    "Assicurazione medica e di viaggio personale",
    "Pranzi e snack a metà giornata",
    "Bevande durante i pasti",
    "Biglietti d'ingresso a monumenti storici e musei",
    "Mance per autista e guide locali",
    "Spese personali e souvenir"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Arrivo e Accoglienza a Casablanca",
      content: "Incontro con la vostra guida e autista privato all'aeroporto di Casablanca all'arrivo del vostro volo per iniziare il tour. Trasferimento in comodo veicolo climatizzato verso la città per ammirare la monumentale Moschea di Hassan II, capolavoro architettonico costruito sull'Oceano Atlantico grazie al lavoro di oltre 6.000 abili artigiani. Sistemazione e pernottamento in hotel a Casablanca."
    },
    {
      day: "Giorno 2",
      title: "Casablanca – Rabat – Chefchaouen",
      content: "Dopo colazione, partenza per Rabat, capitale amministrativa del Marocco. Visita della suggestiva Kasbah degli Oudaïa, della medina e della Torre di Hassan. Dopo pranzo, si prosegue verso nord-est attraversando le montagne del Rif fino a raggiungere Chefchaouen, la celebre città blu. Tempo a disposizione per passeggiare nei suoi vicoli acciottolati dal fascino andaluso. Pernottamento in riad tradizionale."
    },
    {
      day: "Giorno 3",
      title: "Chefchaouen – Volubilis – Fes",
      content: "Mattinata dedicata alla magica atmosfera di Chefchaouen prima di raggiungere le rovine romane di Volubilis, rinomate per i loro mosaici perfettamente conservati e le antiche vie imperiali. Nel tardo pomeriggio arrivo a Fes, cuore spirituale e culturale del Marocco, con sistemazione in riad tipico nella medina."
    },
    {
      day: "Giorno 4",
      title: "Visita Guidata dell'Antica Medina di Fes",
      content: "Intera giornata dedicata all'esplorazione guidata di Fes el-Bali con guida ufficiale locale. Visita dell'Università Al Quaraouiyine (la più antica al mondo tuttora attiva), della Madrasa Bou Inania, delle famose concerie di Chouara con le loro vasche multicolori medievali, della fontana Nejjarine e della maestosa porta Bab Boujloud. Pomeriggio dedicato ai souk artigianali e pernottamento in riad."
    },
    {
      day: "Giorno 5",
      title: "Fes – Ifrane – Foreste di Cedri – Deserto del Sahara di Merzouga",
      content: "Partenza da Fes verso sud attraverso il Medio Atlante: sosta a Ifrane, la 'Svizzera del Marocco', e nelle millenarie foreste di cedri di Azrou popolate dai macachi di Barberia. Attraversata la lussureggiante Valle dello Ziz, si giunge a Merzouga nel pomeriggio. Inizio della carovana a dorso di cammello sulle dune dorate dell'Erg Chebbi per ammirare il tramonto, prima di raggiungere il lussuoso campo tendato. Cena tradizionale berbera attorno al fuoco sotto le stelle."
    },
    {
      day: "Giorno 6",
      title: "Esplorazione del Deserto di Merzouga e Tradizioni Nomadi",
      content: "Alba spettacolare sulle dune seguita da una ricca colazione all'accampamento. Giornata dedicata alla scoperta del Sahara: visita agli antichi canali d'irrigazione fossili (khettaras), spettacolo musicale nel villaggio Gnawa di Khamlia e incontro con le famiglie nomadi del deserto per conoscere il loro stile di vita millenario. Pernottamento in hotel o riad ai piedi delle dune con cena inclusa."
    },
    {
      day: "Giorno 7",
      title: "Merzouga – Rissani – Gole del Todra – Valle del Dades",
      content: "Lasciato il deserto, visita al souk storico di Rissani e proseguimento verso Tinghir per ammirare le monumentali Gole del Todra, uno spettacolare canyon roccioso con pareti verticali alte oltre 300 metri. Nel pomeriggio proseguimento verso la Valle del Dades e le celebri conformazioni rocciose dette 'dita di scimmia'. Cena e pernottamento in hotel nella valle."
    },
    {
      day: "Giorno 8",
      title: "Valle del Dades – Ouarzazate – Kasbah Ait Ben Haddou – Marrakech",
      content: "Colazione e viaggio lungo la Strada delle Mille Kasbah attraverso Kelaat M'Gouna (la Valle delle Rose) e Ouarzazate. Visita alla splendida Kasbah fortificata di Ait Ben Haddou, Patrimonio Mondiale dell'Umanità UNESCO e set di kolossal come Il Gladiatore. Valico panoramico dell'Alto Atlante attraverso il passo Tizi n'Tichka (2.260 m) e arrivo a Marrakech in serata. Pernottamento in riad."
    },
    {
      day: "Giorno 9",
      title: "Visita Guidata dei Monumenti e dei Souk di Marrakech",
      content: "Tour guidato alla scoperta della Città Rossa: i Giardini Majorelle, il sontuoso Palazzo della Bahia, la Moschea Koutoubia e l'intricato labirinto dei souk cittadini. Nel tardo pomeriggio, immergetevi nell'energia travolgente della celebre Piazza Jemaa el-Fna tra cantastorie, acrobati e profumi speziati. Pernottamento in riad."
    },
    {
      day: "Giorno 10",
      title: "Marrakech – Escursione sulla Costa di Essaouira",
      content: "Viaggio verso la costa atlantica in direzione della pittoresca Essaouira (l'antica Mogador). Lungo il tragitto osserverete le caratteristiche capre che si arrampicano sugli alberi di argan. A Essaouira visiterete i bastioni della Skala, il porto peschereccio e la candida medina fortificata UNESCO celebre per le botteghe d'artigianato in legno di radica di tuia. Pernottamento in riad sul mare."
    },
    {
      day: "Giorno 11",
      title: "Essaouira – Trasferimento all'Aeroporto di Casablanca e Fine del Tour",
      content: "Dopo colazione, comodo rientro via autostrada verso l'Aeroporto Internazionale Mohammed V di Casablanca in tempo utile per il vostro volo di rientro, a conclusione di questo straordinario tour classico di 11 giorni in Marocco."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Casablanca", day: "Giorno 1", subtitle: "Moschea Hassan II", desc: "Arrivo e tour monumentale." },
    { number: 2, name: "Rabat", day: "Giorno 2", subtitle: "Capitale Storica", desc: "Patrimonio reale e panorami atlantici." },
    { number: 3, name: "Chefchaouen", day: "Giorno 3", subtitle: "Città Blu del Rif", desc: "Magici vicoli dipinti di blu." },
    { number: 4, name: "Medina di Fes", day: "Giorni 4 e 5", subtitle: "Capitale Spirituale", desc: "Passeggiata guidata tra vicoli medievali." },
    { number: 5, name: "Sahara di Merzouga", day: "Giorni 6 e 7", subtitle: "Dune dell'Erg Chebbi", desc: "Trekking in cammello e accampamento di lusso." },
    { number: 6, name: "Gole del Dades", day: "Giorno 8", subtitle: "Canyon dell'Atlante", desc: "Gole spettacolari e Valle delle Rose." },
    { number: 7, name: "Marrakech", day: "Giorni 9 e 10", subtitle: "Città Rossa Imperiale", desc: "Souk, palazzi e giardini storici." },
    { number: 8, name: "Casablanca", day: "Giorno 11", subtitle: "Partenza", desc: "Viaggio di ritorno e transfer all'aeroporto." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/thumbnail.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Scorcio panoramico del tour classico di 11 giorni in Marocco" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-01.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Architettura tradizionale e monumenti storici in Marocco" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-02.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Scorcio dei vicoli blu tradizionali di Chefchaouen" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-03.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Veduta panoramica della medina antica di Fes" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-04.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Carovana di dromedari al tramonto sulle dune di Merzouga" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-05.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Accampamento tendato di lusso nel deserto del Sahara" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-06.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Alte pareti rocciose delle Gole del Todra" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-07.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Famosa Kasbah di Ait Ben Haddou nell'Alto Atlante" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-08.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Vivaci bancarelle artigianali nei souk di Marrakech" },
    { src: "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-09.jpg", cap: "Tour Classico di 11 Giorni in Marocco – Pacchetto Privato", alt: "Bastioni affacciati sull'Atlantico nella medina di Essaouira" }
  ],
  faqs: []
};

saveTour('11-days-morocco-classic-tour', tour15_es, tour15_it);

// -------------------------------------------------------------
// Tour 16: 13-days-casablanca-tour
// -------------------------------------------------------------
const tour16_es = {
  slug: "13-days-casablanca-tour",
  title: "Gran Viaje de 13 Días por las Ciudades Imperiales desde Casablanca | Sahara Star Tours",
  shortTitle: "Gran Viaje de 13 Días por las Ciudades Imperiales",
  description: "Explore los tesoros de Marruecos en un itinerario privado de 13 días desde Casablanca. Palacios imperiales, montes del Rif, dunas del Sahara y retiros costeros.",
  aboutHtml: "El gran circuito de 13 días desde Casablanca es una travesía cuidadosamente elaborada para capturar la extraordinaria diversidad de Marruecos. Descubra el esplendor imperial de Rabat, Meknes y Fez, pasee por los callejones azul cobalto de Chefchaouen y sumérjase en el sobrecogedor silencio del desierto de Erg Chebbi. Disfrute de panorámicas travesías por el Alto Atlas, visitas históricas a las Kasbahs de Ait Ben Haddou y Taourirt, y jornadas vibrantes en Marrakech, antes de relajarse con las vistas del Atlántico de regreso a Casablanca.",
  duration: "13 Días / 12 Noches",
  startingFrom: "Casablanca",
  price: "Desde 1.590 $/persona",
  highlights: [
    "Explore las antiguas medinas declaradas Patrimonio de la Humanidad por la UNESCO y sus bulliciosos zocos",
    "Cruce las majestuosas montañas del Alto Atlas a través del panorámico puerto de Tizi n'Tichka",
    "Visite la legendaria Kasbah de Ait Ben Haddou, célebre escenario de superproducciones de Hollywood",
    "Disfrute de un auténtico paseo en camello al atardecer por las dunas doradas del Sahara",
    "Pase una noche mágica de glamping bajo el cielo estrellado en un campamento de lujo en el desierto",
    "Descubra oasis sobrecogedores, espectaculares gargantas (Todra y Dades) y valles exuberantes",
    "Saboree la auténtica gastronomía marroquí y la legendaria hospitalidad tradicional bereber"
  ],
  inclusions: [
    "Recogida y traslado de regreso a su aeropuerto, hotel o riad",
    "Transporte privado en un moderno vehículo 4x4 o monovolumen con aire acondicionado",
    "Chófer profesional de habla inglesa/española y guías locales titulados",
    "Alojamiento de noche en riads y hoteles auténticos cuidadosamente seleccionados",
    "1 noche en campamento de lujo en el Sahara (jaima privada con baño completo ensuite)",
    "Paseos en camello al atardecer y al amanecer en el desierto (un camello por persona)",
    "Desayunos diarios y cenas especificadas según el itinerario detallado",
    "Impuestos locales y gastos de carburante incluidos"
  ],
  exclusions: [
    "Billetes de avión internacionales",
    "Seguro médico y de viaje personal",
    "Almuerzos y refrigerios de mediodía",
    "Bebidas durante las comidas",
    "Entradas a monumentos históricos y museos",
    "Propinas para guías locales y chófer",
    "Gastos personales y compras de recuerdos"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Aeropuerto de Casablanca – Rabat",
      content: "Llegada al aeropuerto de Casablanca, donde su chófer/guía privado le recibirá para iniciar el recorrido. Visita a la monumental Mezquita Hassan II, la más grande de Marruecos, levantada frente al océano. Continuación hacia Rabat, la capital del reino, para contemplar la Torre Hassan y pasear por la Kasbah de los Oudayas antes de instalarse en un riad en el corazón de la medina."
    },
    {
      day: "Día 2",
      title: "Rabat – Arcila – Tánger",
      content: "Tras el desayuno en el riad, nos dirigimos hacia el norte rumbo a Tánger siguiendo la panorámica carretera costera. Primera parada en Arcila (Asilah), encantadora villa marinera famosa por su festival de arte callejero y sus murales pintados por artistas internacionales. Visita a la fortaleza de la Skala frente al mar, almuerzo marinero y trayecto final a Tánger para disfrutar del atardecer en el Estrecho."
    },
    {
      day: "Día 3",
      title: "Tánger – Tetuán – Chefchaouen",
      content: "Salida hacia las montañas del Rif atravesando la histórica Tetuán, admirando los paisajes montañosos hasta alcanzar Chefchaouen. Tarde libre en este cautivador enclave andalusí para pasear por la Plaza Uta el-Hammam y maravillarse con sus fachadas azul cielo. Alojamiento en un acogedor riad tradicional."
    },
    {
      day: "Día 4",
      title: "Chefchaouen – Volubilis – Meknes – Fez",
      content: "Tras el desayuno, viaje hacia Fez pasando por Ouazzane y la antigua ciudad romana de Volubilis, con sus admirables mosaicos que datan del siglo III a.C. Continuamos a Meknes, capital ismaelita, donde admiraremos la monumental puerta Bab Mansour, los antiguos graneros reales de Sahrij Souani y el Mausoleo de Moulay Ismail, antes de tomar la autopista hacia Fez."
    },
    {
      day: "Día 5",
      title: "Visita Monumental y Cultural de Fez",
      content: "Jornada completa de exploración guiada de la medina de Fez: la Universidad y Mezquita Al Quaraouiyine (fundada en 859), la Madraza Bou Inania, las históricas tenerías de Chouara y la fuente Nejjarine. Por la tarde, visita a las doradas puertas del Palacio Real, el barrio judío (Mellah) y una cooperativa de cerámica tradicional, coronando el día con una vista panorámica desde las fortalezas meriníes."
    },
    {
      day: "Día 6",
      title: "Fez – Ifrane – Errachidia – Merzouga",
      content: "Salida hacia el desierto atravesando el Medio Atlas y deteniéndonos en Ifrane y el bosque de cedros de Azrou para observar a los macacos salvajes. Almuerzo en Midelt y travesía panorámica del desfiladero y oasis del Valle del Ziz. Paso por Erfoud y Rissani antes de llegar a Merzouga al caer la tarde, recibidos con el tradicional té a la menta en el riad."
    },
    {
      day: "Día 7",
      title: "Desierto de Merzouga – Nómadas y Noche en Campamento de Lujo",
      content: "Día para conocer a fondo el desierto: visita al poblado de Khamlia para presenciar la música espiritual Gnawa, paseo por el lago estacional de Dayet Sriji y recorrido por el tradicional zoco de Rissani. Por la tarde, travesía en camello a través de las altas dunas de Erg Chebbi hacia el campamento de lujo. Cena bajo las estrellas y noche en jaima privada."
    },
    {
      day: "Día 8",
      title: "Merzouga – Gargantas del Todra – Valle del Dades – Skoura",
      content: "Amanecer inolvidable sobre las crestas doradas del desierto antes de regresar al riad para desayunar. Viaje hacia las Gargantas del Todra, el cañón más angosto y espectacular del país, con tiempo para caminar junto al río. Continuación por los castillos de arena y formaciones geológicas del Dades hasta llegar al palmeral de Skoura. Noche en riad tradicional."
    },
    {
      day: "Día 9",
      title: "Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Marrakech",
      content: "Paso por la Ruta de las Mil Kasbahs y Kelaat M'Gouna (el Valle de las Rosas). Visita a la Kasbah de Taourirt en Ouarzazate y a la célebre Kasbah de Ait Ben Haddou, joya de adobe declarada Patrimonio de la Humanidad. Travesía del Alto Atlas por el sinuoso paso de Tizi n'Tichka (2.260 m) con vistas memorables, llegando a Marrakech al anochecer."
    },
    {
      day: "Día 10",
      title: "Exploración Guiada de Marrakech",
      content: "Visita matinal con guía oficial por los hitos históricos de la Ciudad Roja: el Minarete de la Koutoubia, las Tumbas Saadíes, el Palacio de la Bahía y la Madraza Ben Youssef. Almuerzo cerca de la plaza y tarde en los Jardines Majorelle y el animado barrio de Gueliz, concluyendo en la bulliciosa Plaza Jemaa el-Fna."
    },
    {
      day: "Día 11",
      title: "Marrakech – Essaouira",
      content: "Viaje relajado hacia la atlántica Essaouira. Paradas panorámicas en los bosques de argán para observar las cabras trepadoras y visitar una cooperativa femenina. En Essaouira, explore las murallas portuguesas de la Skala, el colorido puerto pesquero y los aromáticos zocos de especias y marquetería de tuya."
    },
    {
      day: "Día 12",
      title: "Essaouira – El Jadida – Casablanca",
      content: "Ruta costera en dirección norte hacia Casablanca. Almuerzo marinero en la tranquila laguna de Oualidia y parada en El Jadida para visitar la histórica cisterna portuguesa fortificada. Llegada a Casablanca por la tarde para una cena de despedida y última noche de alojamiento."
    },
    {
      day: "Día 13",
      title: "Casablanca – Traslado al Aeropuerto y Fin del Viaje",
      content: "Desayuno en el hotel y traslado privado al Aeropuerto Internacional Mohamed V de Casablanca según el horario de su vuelo internacional, dando por finalizado este inolvidable gran circuito de 13 días."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Casablanca", day: "Día 1", subtitle: "Llegada", desc: "Visita a la Mezquita Hassan II." },
    { number: 2, name: "Rabat", day: "Día 2", subtitle: "Capital", desc: "Torre Hassan y Kasbah de los Oudayas." },
    { number: 3, name: "Tánger", day: "Día 3", subtitle: "Estrecho de Gibraltar", desc: "Cabo Espartel y Grutas de Hércules." },
    { number: 4, name: "Chefchaouen", day: "Día 4", subtitle: "Pueblo Azul del Rif", desc: "Encanto andalusí de montaña." },
    { number: 5, name: "Fez", day: "Días 5 y 6", subtitle: "Medina Medieval", desc: "Universidades históricas y tenerías." },
    { number: 6, name: "Desierto de Merzouga", day: "Días 7 y 8", subtitle: "Campamento Erg Chebbi", desc: "Paseo en camello y noche estrellada." },
    { number: 7, name: "Dades y Todra", day: "Día 9", subtitle: "Cañones del Atlas", desc: "Desfiladeros espectaculares y kasbahs." },
    { number: 8, name: "Ouarzazate", day: "Día 10", subtitle: "Ciudad del Cine", desc: "Fortaleza de Ait Ben Haddou." },
    { number: 9, name: "Marrakech", day: "Días 11 y 12", subtitle: "La Ciudad Roja", desc: "Gran exploración imperial y zocos." },
    { number: 10, name: "Casablanca", day: "Día 13", subtitle: "Salida", desc: "Traslado de regreso y despedida." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/thumbnail.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Panorámica del gran tour de 13 días por Marruecos" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-01.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Mezquita Hassan II frente al océano en Casablanca" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-02.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Muros encalados y callejones artísticos de Arcila" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-03.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Calle empedrada azul en Chefchaouen" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-04.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Ruinas romanas de Volubilis en el norte de Marruecos" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-05.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Artesanos curtidores en las tenerías de Fez" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-06.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Caravana de dromedarios sobre las dunas de Merzouga" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-07.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Campamento de lujo en el desierto del Sahara" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-08.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Paredes verticales de las Gargantas del Todra" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-09.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Kasbah fortificada de Ait Ben Haddou" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-10.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Plaza Jemaa el-Fna iluminada al atardecer en Marrakech" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-11.jpg", cap: "El Mejor Itinerario de 13 Días por Marruecos desde Casablanca", alt: "Murallas oceánicas y gaviotas en Essaouira" }
  ],
  faqs: []
};

const tour16_it = {
  slug: "13-days-casablanca-tour",
  title: "Grande Itinerario di 13 Giorni delle Città Imperiali da Casablanca | Sahara Star Tours",
  shortTitle: "Grande Itinerario di 13 Giorni delle Città Imperiali",
  description: "Esplorate le meraviglie del Marocco con un itinerario privato di 13 giorni da Casablanca. Palazzi imperiali, monti del Rif, dune del Sahara e fascino oceanico.",
  aboutHtml: "Il grande tour di 13 giorni da Casablanca è un viaggio sapientemente concepito per svelare l'infinita varietà del Marocco. Scoprite la maestosità imperiale di Rabat, Meknes e Fes, passeggiate tra i vicoli blu cobalto di Chefchaouen e immergetevi nel silenzio magico delle dune dell'Erg Chebbi. Godetevi itinerari panoramici attraverso l'Alto Atlante, visite storiche alle Kasbah di Ait Ben Haddou e Taourirt, e giornate indimenticabili a Marrakech, per poi rilassarvi lungo la costa atlantica prima del rientro a Casablanca.",
  duration: "13 Giorni / 12 Notti",
  startingFrom: "Casablanca",
  price: "Da 1.590 €/persona",
  highlights: [
    "Esplorate le antiche medine Patrimonio dell'Umanità UNESCO e i loro vivaci souk",
    "Attraversate le maestose montagne dell'Alto Atlante attraverso il panoramico passo Tizi n'Tichka",
    "Visitate la leggendaria Kasbah di Ait Ben Haddou, celebre set cinematografico internazionale",
    "Vivete un autentico trekking a dorso di cammello al tramonto tra le dune dorate del Sahara",
    "Trascorrete una notte magica in glamping sotto il cielo stellato in un campo tendato di lusso",
    "Ammirate oasi spettacolari, gole suggestive (Todra e Dades) e valli verdeggianti",
    "Gustate l'autentica cucina tradizionale marocchina e la calorosa ospitalità berbera"
  ],
  inclusions: [
    "Servizio di accoglienza e transfer da/per aeroporto, hotel o riad",
    "Trasporto privato in moderno fuoristrada 4x4 o minivan con aria condizionata",
    "Autista professionista parlante inglese/spagnolo e guide locali autorizzate",
    "Pernottamenti in riad e hotel autentici di alto livello selezionati",
    "1 notte in accampamento di lusso nel Sahara (tenda privata con bagno interno ensuite)",
    "Escursione in cammello al tramonto e all'alba nel deserto (un dromedario per persona)",
    "Colazioni giornaliere e cene specificate secondo l'itinerario dettagliato",
    "Tasse locali e carburante per l'intero itinerario inclusi"
  ],
  exclusions: [
    "Biglietti aerei per voli internazionali",
    "Assicurazione medica e di viaggio personale",
    "Pranzi e snack a metà giornata",
    "Bevande durante i pasti",
    "Biglietti d'ingresso a monumenti storici e musei",
    "Mance per autista e guide locali",
    "Spese personali e souvenir"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Aeroporto di Casablanca – Rabat",
      content: "Arrivo all'aeroporto di Casablanca e incontro con il vostro autista/guida privato per iniziare il viaggio. A Casablanca visiterete la grandiosa Moschea di Hassan II, la più grande del Marocco, affacciata sull'oceano. Proseguimento per Rabat, la capitale, per ammirare la Torre di Hassan e passeggiare nella Kasbah degli Oudaïa prima del check-in in riad nella medina."
    },
    {
      day: "Giorno 2",
      title: "Rabat – Asilah – Tangeri",
      content: "Dopo colazione, partenza verso nord lungo la spettacolare costa atlantica. Prima sosta nella caratteristica Asilah, rinomata per i suoi festival d'arte e i murales dipinti da artisti internazionali sulle mura della medina. Visita ai bastioni della Skala sull'oceano, pranzo a base di pesce fresco e arrivo a Tangeri con scorcio panoramico sullo Stretto di Gibilterra."
    },
    {
      day: "Giorno 3",
      title: "Tangeri – Tetouan – Chefchaouen",
      content: "Partenza verso i monti del Rif attraversando Tetouan fino a raggiungere la splendida Chefchaouen, adagiata ai piedi delle montagne. Pomeriggio libero tra i suoi vicoli dipinti di blu cobalto, le piazzette animate e le botteghe artigiane. Pernottamento in riad tradizionale."
    },
    {
      day: "Giorno 4",
      title: "Chefchaouen – Volubilis – Meknes – Fes",
      content: "Partenza per Fes con sosta al sito archeologico romano di Volubilis (risalente al III secolo a.C.), celebre per i magnifici mosaici ben conservati. Proseguimento per Meknes, capitale ismaelita, dove ammireremo la maestosa porta Bab Mansour, i granai di Sahrij Souani e il Mausoleo di Moulay Ismail, prima di raggiungere Fes in serata."
    },
    {
      day: "Giorno 5",
      title: "Visita Guidata dell'Antica Medina di Fes",
      content: "Mattinata dedicata alla visita della medina di Fes con guida locale: l'Università Al Quaraouiyine (la più antica al mondo), la Madrasa Bou Inania, le concerie di Chouara e la fontana Nejjarine. Nel pomeriggio sosta alle porte dorate del Palazzo Reale, al quartiere ebraico (Mellah) e alle cooperative di ceramica con vista panoramica dall'alto della città."
    },
    {
      day: "Giorno 6",
      title: "Fes – Ifrane – Errachidia – Merzouga",
      content: "Viaggio verso sud attraversando il Medio Atlante con sosta a Ifrane e nella millenaria foresta di cedri di Azrou. Attraversata la scenografica Valle dello Ziz e superata la cittadina di Erfoud, si giunge a Merzouga al tramonto per essere accolti con tè alla menta in riad."
    },
    {
      day: "Giorno 7",
      title: "Deserto di Merzouga – Tradizioni Nomadi e Notte in Glamping",
      content: "Esplorazione della regione desertica: musica tradizionale Gnawa nel villaggio di Khamlia, visita al lago di Merzouga e al mercato tradizionale di Rissani. Nel pomeriggio carovana a dorso di dromedario verso il campo tendato di lusso tra le dune dell'Erg Chebbi con cena e notte sotto le stelle."
    },
    {
      day: "Giorno 8",
      title: "Merzouga – Gole del Todra – Valle del Dades – Skoura",
      content: "Alba indimenticabile sulle dune e rientro a dorso di cammello. Partenza per le spettacolari Gole del Todra, canyon con pareti a strapiombo alte oltre 300 metri. Proseguimento lungo la Valle del Dades e le curiose formazioni rocciose fino al palmeto di Skoura. Pernottamento in riad."
    },
    {
      day: "Giorno 9",
      title: "Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Marrakech",
      content: "Itinerario attraverso la Strada delle Mille Kasbah e la Valle delle Rose fino a Ouarzazate. Visita della Kasbah di Ait Ben Haddou, capolavoro in terra cruda dichiarato Patrimonio UNESCO. Attraversamento dell'Alto Atlante attraverso il passo Tizi n'Tichka (2.260 m) e arrivo serale a Marrakech."
    },
    {
      day: "Giorno 10",
      title: "Esplorazione della Città Rossa di Marrakech",
      content: "Visita guidata ai principali monumenti: il minareto della Koutoubia, le Tombe Saadiane, il Palazzo della Bahia e la Madrasa Ben Youssef. Nel pomeriggio relax ai Giardini Majorelle ed esplorazione dei souk artigianali fino alla celebre Piazza Jemaa el-Fna."
    },
    {
      day: "Giorno 11",
      title: "Marrakech – Essaouira",
      content: "Partenza verso la costa atlantica per Essaouira (l'antica Mogador). Sosta lungo la strada per osservare le capre sugli alberi di argan e visitare una cooperativa femminile. Ad Essaouira ammirerete i bastioni della Skala, il porto dei pescatori e la suggestiva medina bianca affacciata sull'oceano."
    },
    {
      day: "Giorno 12",
      title: "Essaouira – El Jadida – Casablanca",
      content: "Percorso costiero panoramico verso nord. Sosta per pranzo di pesce a Oualidia e visita della cisterna portoghese fortificata a El Jadida. Arrivo a Casablanca per la cena d'arrivederci e l'ultimo pernottamento."
    },
    {
      day: "Giorno 13",
      title: "Casablanca – Trasferimento in Aeroporto e Conclusione del Tour",
      content: "Prima colazione in hotel e trasferimento privato all'Aeroporto Internazionale Mohammed V di Casablanca in base all'orario del vostro volo, a conclusione del tour di 13 giorni."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Casablanca", day: "Giorno 1", subtitle: "Arrivo", desc: "Visita della Moschea Hassan II." },
    { number: 2, name: "Rabat", day: "Giorno 2", subtitle: "Capitale", desc: "Torre di Hassan e Kasbah degli Oudaïa." },
    { number: 3, name: "Tangeri", day: "Giorno 3", subtitle: "Stretto di Gibilterra", desc: "Capo Spartel e Grotte di Ercole." },
    { number: 4, name: "Chefchaouen", day: "Giorno 4", subtitle: "Città Blu del Rif", desc: "Atmosfera andalusa di montagna." },
    { number: 5, name: "Fes", day: "Giorni 5 e 6", subtitle: "Medina Medievale", desc: "Antiche università e concerie." },
    { number: 6, name: "Deserto di Merzouga", day: "Giorni 7 e 8", subtitle: "Campo Erg Chebbi", desc: "Carovana in cammello e notte stellata." },
    { number: 7, name: "Dades e Todra", day: "Giorno 9", subtitle: "Canyon dell'Atlante", desc: "Gole spettacolari e antiche kasbah." },
    { number: 8, name: "Ouarzazate", day: "Giorno 10", subtitle: "Città del Cinema", desc: "Fortezza di Ait Ben Haddou." },
    { number: 9, name: "Marrakech", day: "Giorni 11 e 12", subtitle: "La Città Rossa", desc: "Grandi palazzi imperiali e souk." },
    { number: 10, name: "Casablanca", day: "Giorno 13", subtitle: "Partenza", desc: "Transfer di ritorno e arrivederci." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/thumbnail.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Scorcio panoramico del grande tour di 13 giorni in Marocco" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-01.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Moschea Hassan II affacciata sull'oceano a Casablanca" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-02.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Mura dipinte e vicoli artistici di Asilah" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-03.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Caratteristica scalinata dipinta di blu a Chefchaouen" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-04.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Antiche rovine romane e mosaici a Volubilis" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-05.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Tradizionali vasche di concia a cielo aperto a Fes" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-06.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Carovana a dorso di dromedario sulle dune di Merzouga" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-07.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Campo tendato di lusso nel deserto del Sahara" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-08.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Alte pareti verticali nelle Gole del Todra" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-09.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Kasbah fortificata di Ait Ben Haddou Patrimonio UNESCO" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-10.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Piazza Jemaa el-Fna brulicante di vita al tramonto a Marrakech" },
    { src: "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-11.jpg", cap: "Il Miglior Itinerario di 13 Giorni da Casablanca in Marocco", alt: "Bastioni oceanici e barche blu di pescatori a Essaouira" }
  ],
  faqs: []
};

saveTour('13-days-casablanca-tour', tour16_es, tour16_it);

// -------------------------------------------------------------
// Tour 17: 15-days-tour-from-casablanca
// -------------------------------------------------------------
const tour17_es = {
  slug: "15-days-tour-from-casablanca",
  title: "Gran Circuito Imperial de 15 Días por Marruecos desde Casablanca | Sahara Star Tours",
  shortTitle: "Gran Circuito Imperial de 15 Días por Marruecos",
  description: "El circuito más completo de 15 días desde Casablanca. Viva las cuatro capitales imperiales, Chefchaouen, las dunas del Sahara y la refrescante costa atlántica.",
  aboutHtml: "Todos los grandes tesoros de Marruecos se dan cita en este completo gran circuito de 15 días desde Casablanca. Un viaje que conjuga a la perfección autenticidad, cultura milenaria y fascinante exploración por los contrastes del reino.<br/><br/>Desde los monumentos de Casablanca y Rabat hasta la mágica perla azul de Chefchaouen en las montañas del Rif; desde las cuatro capitales imperiales (Rabat, Meknes, Fez y Marrakech) hasta las majestuosas ruinas romanas de Volubilis. Descubra la inolvidable inmensidad de las dunas de Erg Chebbi en Merzouga con caravana de camellos al atardecer y campamento de lujo bajo las estrellas.<br/><br/>Cruzarán fortalezas míticas de adobe como la Kasbah de Ait Ben Haddou, los estudios de cine de Ouarzazate, las murallas históricas de Taroudant y los aromas atlánticos de Agadir y Essaouira, culminando con la vibrante energía de Marrakech antes del regreso a Casablanca.",
  duration: "15 Días / 14 Noches",
  startingFrom: "Casablanca",
  price: "Desde 1.750 $/persona",
  highlights: [
    "Viva una noche inolvidable en el corazón del desierto del Sahara",
    "Paseo en camello por las dunas y convivencia con familias nómadas",
    "Fotografíe los macacos de Berbería en los bosques de cedros de Azrou",
    "Visite la monumental Mezquita Hassan II sobre el océano en Casablanca",
    "Descubra los principales monumentos históricos y palacios de Rabat",
    "Explore a pie los mágicos callejones azul cobalto de Chefchaouen",
    "Visita guiada a las ruinas romanas y mosaicos de Volubilis",
    "Visitas culturales guiadas de Meknes, Fez y Marrakech",
    "Admire una puesta de sol irrepetible sobre las dunas de Erg Chebbi",
    "Cena bereber tradicional y fiesta de tambores alrededor de la hoguera",
    "Visite los célebres estudios de cine internacionales en Ouarzazate",
    "Conozca las kasbahs y medinas declaradas Patrimonio de la Humanidad por la UNESCO",
    "Descubra el encanto costero y patrimonial de Essaouira, Taroudant y Agadir"
  ],
  inclusions: [
    "Visitas guiadas oficiales en las ciudades y entradas a monumentos seleccionadas",
    "Transporte privado cómodo con aire acondicionado y chófer/guía profesional de habla hispana/inglesa",
    "Paseo en camello por las dunas y alojamiento en campamento de lujo en el Sahara",
    "Servicio de bienvenida y asistencia personalizada en el aeropuerto",
    "Cena en restaurante tradicional de Marrakech con música y folclore marroquí",
    "Régimen de media pensión durante la ruta (según detalle del itinerario)",
    "Gastos de combustible y peajes incluidos",
    "14 desayunos diarios y 4 cenas en el desierto y valles"
  ],
  exclusions: [
    "Tasas aéreas y vuelos internacionales",
    "Almuerzos no especificados",
    "Bebidas durante las comidas",
    "Vuelos de conexión",
    "Propinas voluntarias para guías y chófer",
    "Seguro médico y de viaje personal",
    "Gastos personales y compras particulares",
    "Cualquier concepto no indicado en la sección de inclusiones"
  ],
  itinerary: [
    {
      day: "Día 1",
      title: "Llegada y Bienvenida en Casablanca",
      content: "Recepción en el aeropuerto o en su hotel en Casablanca para dar inicio a este gran circuito de 15 días. Visita guiada a la monumental Mezquita Hassan II construida junto al Atlántico, admirando el magistral trabajo de marquetería, azulejos zellige y yeserías de artesanos marroquíes. Recorrido por el Museo del Judaísmo Marroquí y la cornisa de Ain Diab según el horario de llegada de su vuelo. Alojamiento en hotel."
    },
    {
      day: "Día 2",
      title: "Casablanca – Rabat – Chefchaouen",
      content: "Desayuno y salida hacia Rabat, capital del reino. Visita a la Kasbah de los Oudayas frente a la desembocadura del río Bouregreg, el Mausoleo de Mohamed V, la Torre Hassan y la necrópolis de Chellah. Tras el almuerzo, viaje hacia el norte ascendiendo por los paisajes montañosos del Rif hasta alcanzar Chefchaouen. Alojamiento en un encantador riad andalusí en la medina azul."
    },
    {
      day: "Día 3",
      title: "Visita Guiada de Chefchaouen",
      content: "Paseo matinal a pie por la medina azul que ha inspirado a célebres artistas como Henri Matisse y Eugène Delacroix. Visita a la Kasbah de Chefchaouen del siglo XVIII con sus frondosos jardines y su museo etnográfico. Tiempo libre en la Plaza Uta el-Hammam rodeada de cafeterías y terrazas para relajarse y tomar fotografías inolvidables. Noche en riad."
    },
    {
      day: "Día 4",
      title: "Chefchaouen – Volubilis – Meknes – Fez",
      content: "Salida hacia las impresionantes ruinas romanas de Volubilis (siglo III a.C.), descubriendo sus mosaicos mitológicos y calzadas. Continuación hacia la imperial Meknes para admirar la monumental puerta Bab Mansour, la Plaza El-Hedim y el Mausoleo de Moulay Ismail. Al caer la tarde, llegada a Fez y alojamiento en un riad tradicional."
    },
    {
      day: "Día 5",
      title: "Visita Guiada Monumental de Fez",
      content: "Día completo dedicado a Fez el-Bali con guía oficial. Recorrido por la Mezquita y Universidad Al Quaraouiyine, la Madraza Bou Inania, las históricas tenerías de Chouara con sus métodos artesanales de teñido, las fuentes de Nejjarine, la puerta Bab Boujloud, el barrio judío del Mellah y los miradores panorámicos de la ciudad. Noche en riad."
    },
    {
      day: "Día 6",
      title: "Fez – Ifrane – Bosque de Cedros – Valle del Ziz – Desierto de Merzouga",
      content: "Travesía por el Medio Atlas visitando Ifrane y los bosques de Azrou para observar a los macacos salvajes. Almuerzo en Midelt y descenso por las gargantas del río Ziz adornadas de palmerales. Llegada a Merzouga al atardecer para iniciar la caravana en camello hacia las altas dunas de Erg Chebbi. Puesta de sol mágica, cena bereber y noche en jaima de lujo."
    },
    {
      day: "Día 7",
      title: "Dunas de Erg Chebbi – Nómadas del Sahara y Pueblo Gnawa",
      content: "Espectacular amanecer en el desierto y desayuno campestre. Excursión en vehículo 4x4 por los alrededores: visita al lago estacional Dayet Sriji (refugio de flamencos), concierto de música tradicional Gnawa en el poblado de Khamlia y visita a una familia nómada bereber para conocer sus costumbres y tejidos tradicionales. Alojamiento y cena en riad/hotel junto a las dunas."
    },
    {
      day: "Día 8",
      title: "Merzouga – Rissani – Gargantas del Todra – Valle del Dades",
      content: "Despedida del desierto con visita al animado zoco de Rissani antes de continuar hacia Tinghir y las colosales Gargantas del Todra, donde sus paredones de roca de más de 300 metros encañonan el río. Almuerzo y paseo a pie por el valle. Por la tarde, llegada a Boumalne Dades y las formaciones de dedos de mono. Cena y noche en riad."
    },
    {
      day: "Día 9",
      title: "Valle del Dades – Valle de las Rosas – Ouarzazate",
      content: "Paseo matinal por el Valle del Dades admirando huertos frutales y terrazas agrícolas. Ruta hacia Kelaat M'Gouna, corazón del Valle de las Rosas, célebre por sus destilerías de agua de rosas Damascena. Llegada a Ouarzazate, conocida como la Puerta del Desierto. Cena y alojamiento en hotel."
    },
    {
      day: "Día 10",
      title: "Ouarzazate – Kasbah Ait Ben Haddou – Taliouine – Taroudant",
      content: "Visita a los estudios cinematográficos de Ouarzazate y a la famosa Kasbah de Ait Ben Haddou, fortaleza de adobe protegida por la UNESCO y plató de películas legendarias. Continuación hacia el oeste por Taznakht y Taliouine, la capital del azafrán marroquí, hasta alcanzar Taroudant, apodada 'la abuela de Marrakech'. Paseo por su medina amurallada y noche en riad."
    },
    {
      day: "Día 11",
      title: "Taroudant – Agadir – Essaouira",
      content: "Salida hacia la costa pasando por Agadir y su amplio paseo marítimo. Continuación por la carretera costera observando las famosas cabras sobre los árboles de argán autóctonos. Llegada por la tarde a la pintoresca Essaouira, joya del Atlántico. Alojamiento en riad dentro de la medina."
    },
    {
      day: "Día 12",
      title: "Visita Monumental de Essaouira",
      content: "Día para recorrer la histórica Mogador: los bastiones de la Skala con sus cañones de bronce, el puerto pesquero artesanal con degustación de pescado fresco, las cooperativas de carpintería en madera de tuya y el antiguo Mellah judío. Tiempo libre para disfrutar de las terrazas y la brisa marina. Noche en riad."
    },
    {
      day: "Día 13",
      title: "Essaouira – Cooperativas de Argán – Marrakech",
      content: "Traslado hacia el interior en dirección a Marrakech. Visita a una cooperativa femenina tradicional de aceite de argán para conocer su proceso artesanal y cosmético. Llegada a Marrakech, registro en el riad y primera toma de contacto con la efervescente Plaza Jemaa el-Fna al caer la noche."
    },
    {
      day: "Día 14",
      title: "Visita Guiada Completa de Marrakech",
      content: "Descubra los secretos de la Ciudad Roja: recorrido por los callejones históricos, la arquitectura islámica de la Koutoubia y el Palacio de la Bahía, los fragantes jardines y los zocos gremiales. Al atardecer, disfrute del ambientado espectáculo de Jemaa el-Fna con narradores de historias y cena festiva tradicional. Noche en riad."
    },
    {
      day: "Día 15",
      title: "Casablanca – Traslado al Aeropuerto y Despedida",
      content: "Desayuno en el riad y traslado privado al aeropuerto de Casablanca (o Marrakech según el plan de vuelos) para su salida internacional, despidiéndonos tras 15 días memorables de grandes experiencias marroquíes."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Casablanca", day: "Día 1", subtitle: "Inicio Atlántico", desc: "Mezquita Hassan II y costa." },
    { number: 2, name: "Rabat", day: "Día 2", subtitle: "Capital", desc: "Monumentos reales y frente marino." },
    { number: 3, name: "Tánger", day: "Día 3", subtitle: "Puerta Norte", desc: "Enlace entre el Mediterráneo y el Atlántico." },
    { number: 4, name: "Chefchaouen", day: "Día 4", subtitle: "Perla Azul", desc: "Magia del Rif." },
    { number: 5, name: "Fez", day: "Días 5 y 6", subtitle: "Capital Espiritual", desc: "Recorrido a pie por patrimonio UNESCO." },
    { number: 6, name: "Sahara de Merzouga", day: "Días 7 y 8", subtitle: "Dunas de Erg Chebbi", desc: "Glamping y caravana en camello." },
    { number: 7, name: "Gargantas del Dades", day: "Día 9", subtitle: "Cañones Imponentes", desc: "Grandes formaciones rocosas." },
    { number: 8, name: "Ouarzazate", day: "Día 10", subtitle: "Ruta de las Kasbahs", desc: "Ait Ben Haddou y estudios de cine." },
    { number: 9, name: "Taroudant", day: "Día 11", subtitle: "Pequeña Marrakech", desc: "Murallas del Valle de Souss." },
    { number: 10, name: "Essaouira", day: "Días 12 y 13", subtitle: "Costa de Mogador", desc: "Bosques de argán y murallas oceánicas." },
    { number: 11, name: "Marrakech", day: "Días 14 y 15", subtitle: "Gran Final en la Ciudad Roja", desc: "Palacios, jardines y Jemaa El-Fna." },
    { number: 12, name: "Casablanca", day: "Día 16", subtitle: "Salida", desc: "Regreso al aeropuerto de Casablanca." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/thumbnail.jpg", cap: "Gran Tour de 15 Días desde Casablanca por Marruecos", alt: "Panorámica del gran circuito imperial de 15 días por Marruecos" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-01.jpg", cap: "Gran Tour de 15 Días desde Casablanca por Marruecos", alt: "Mezquita Hassan II en Casablanca" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-02.jpg", cap: "Gran Tour de 15 Días desde Casablanca por Marruecos", alt: "Calle empedrada azul en Chefchaouen" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-03.jpg", cap: "Gran Tour de 15 Días desde Casablanca por Marruecos", alt: "Ruinas romanas de Volubilis" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-04.jpg", cap: "Gran Tour de 15 Días desde Casablanca por Marruecos", alt: "Caravana de dromedarios sobre las dunas de Merzouga" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-05.jpg", cap: "Gran Tour de 15 Días desde Casablanca por Marruecos", alt: "Campamento de lujo en el desierto del Sahara" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-06.jpg", cap: "Gran Tour de 15 Días desde Casablanca por Marruecos", alt: "Kasbah histórica de Ait Ben Haddou" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-07.jpg", cap: "Gran Tour de 15 Días desde Casablanca por Marruecos", alt: "Murallas fortificadas de Essaouira frente al océano" }
  ],
  faqs: []
};

const tour17_it = {
  slug: "15-days-tour-from-casablanca",
  title: "Grande Circuito Imperiale di 15 Giorni in Marocco da Casablanca | Sahara Star Tours",
  shortTitle: "Grande Circuito Imperiale di 15 Giorni in Marocco",
  description: "Il circuito più completo di 15 giorni da Casablanca. Vivete le quattro capitali imperiali, la città blu, le dune del Sahara e la costa atlantica.",
  aboutHtml: "Tutte le meraviglie più straordinarie del Marocco sono racchiuse in questo grandioso tour privato di 15 giorni da Casablanca. Un viaggio che unisce magistralmente autenticità, storia millenaria e avventura tra gli scenari più suggestivi del regno.<br/><br/>Dalle coste atlantiche di Casablanca e Rabat fino all'incanto montano di Chefchaouen nel Rif; dalle quattro capitali imperiali (Rabat, Meknes, Fes e Marrakech) ai capolavori romani di Volubilis. Lasciatevi conquistare dalla vastità delle dune dell'Erg Chebbi a Merzouga, con trekking in cammello al tramonto e notte magica in accampamento di lusso.<br/><br/>Attraverserete le kasbah fortificate come Ait Ben Haddou, gli studi cinematografici di Ouarzazate, le mura antiche di Taroudant e la brezza oceanica di Agadir ed Essaouira, per poi concludere in bellezza tra i colori e i souk di Marrakech prima del rientro a Casablanca.",
  duration: "15 Giorni / 14 Notti",
  startingFrom: "Casablanca",
  price: "Da 1.750 €/persona",
  highlights: [
    "Vivete una notte magica e indimenticabile nel cuore del deserto del Sahara",
    "Trekking a dorso di dromedario tra le dune e incontro con le famiglie nomadi",
    "Fotografate i macachi di Barberia nelle secolari foreste di cedri di Azrou",
    "Ammirate la maestosa Moschea Hassan II costruita sull'oceano a Casablanca",
    "Visitate i più celebri monumenti e siti storici della capitale Rabat",
    "Esplorate a piedi i suggestivi vicoli dipinti di blu di Chefchaouen",
    "Tour guidato alle antiche rovine romane e ai mosaici di Volubilis",
    "Visite culturali guidate di Meknes, Fes e Marrakech con guide ufficiali",
    "Ammirate un tramonto spettacolare sulle maestose dune dell'Erg Chebbi",
    "Cena tradizionale berbera e festa con musica di tamburi attorno al fuoco",
    "Visitate i famosi studi cinematografici internazionali di Ouarzazate",
    "Esplorate i siti e le kasbah dichiarati Patrimonio Mondiale dell'Umanità UNESCO",
    "Scoprite il fascino costiero e le tradizioni di Essaouira, Taroudant e Agadir"
  ],
  inclusions: [
    "Visite guidate ufficiali delle città e ingressi ai monumenti selezionati",
    "Trasporto privato confortevole con aria condizionata e autista/guida professionista parlante inglese/spagnolo",
    "Trekking in cammello tra le dune e pernottamento in campo tendato di lusso nel Sahara",
    "Servizio di accoglienza e assistenza personalizzata all'aeroporto",
    "Cena in ristorante tipico a Marrakech con musica e danze tradizionali marocchine",
    "Trattamento di mezza pensione durante il tour (secondo programma dettagliato)",
    "Carburante e pedaggi autostradali inclusi",
    "14 prime colazioni e 4 cene nel deserto e nelle valli"
  ],
  exclusions: [
    "Tasse aeroportuali e voli internazionali",
    "Pranzi non specificati",
    "Bevande durante i pasti",
    "Voli interni di collegamento",
    "Mance facoltative per guide e autista",
    "Assicurazione medica e di viaggio personale",
    "Spese personali ed acquisti privati",
    "Tutto quanto non espressamente indicato nella voce 'Inclusioni'"
  ],
  itinerary: [
    {
      day: "Giorno 1",
      title: "Arrivo e Accoglienza a Casablanca",
      content: "Accoglienza all'aeroporto o in hotel a Casablanca per inaugurare questo grandioso tour di 15 giorni. Visita guidata alla Moschea Hassan II, capolavoro architettonico affacciato sull'Atlantico con splendidi intagli in legno, zellij e stucchi tradizionali. Visita del Museo dell'Ebraismo Marocchino e della corniche in base all'orario del volo. Pernottamento in hotel."
    },
    {
      day: "Giorno 2",
      title: "Casablanca – Rabat – Chefchaouen",
      content: "Dopo colazione, partenza per Rabat. Visita alla Kasbah degli Oudaïa sull'estuario del fiume, al Mausoleo di Mohammed V, alla Torre di Hassan e alla necropoli di Chellah. Dopo pranzo, viaggio verso nord attraverso le montagne del Rif fino alla magica Chefchaouen. Pernottamento in riad tradizionale nella medina blu."
    },
    {
      day: "Giorno 3",
      title: "Visita Guidata di Chefchaouen",
      content: "Passeggiata a piedi tra le suggestive vie dipinte di blu che hanno ispirato pittori come Delacroix e Matisse. Visita alla Kasbah di Chefchaouen del XVIII secolo con i suoi giardini e il museo etnografico. Tempo libero in Plaza Uta el-Hammam tra caffè all'aperto e botteghe artigiane. Pernottamento in riad."
    },
    {
      day: "Giorno 4",
      title: "Chefchaouen – Volubilis – Meknes – Fes",
      content: "Partenza per Volubilis per esplorare le imponenti rovine romane del III secolo a.C. con i loro mosaici mitologici. Si prosegue per Meknes con sosta alla porta Bab Mansour, a Piazza El-Hedim e al Mausoleo di Moulay Ismail. Nel tardo pomeriggio arrivo a Fes e sistemazione in riad."
    },
    {
      day: "Giorno 5",
      title: "Visita Monumentale Guidata di Fes",
      content: "Intera giornata a Fes el-Bali con guida ufficiale locale: l'Università Al Quaraouiyine, la Madrasa Bou Inania, le storiche concerie di Chouara, le fontane decorate, la porta Bab Boujloud e l'antico quartiere ebraico del Mellah con vista panoramica sulle colline. Pernottamento in riad."
    },
    {
      day: "Giorno 6",
      title: "Fes – Ifrane – Foreste di Cedri – Valle dello Ziz – Deserto di Merzouga",
      content: "Attraversamento del Medio Atlante con sosta a Ifrane e nelle foreste di Azrou per osservare le scimmie selvatiche. Pranzo a Midelt e discesa lungo le suggestive gole della Valle dello Ziz. Arrivo a Merzouga al tramonto per salire sui dromedari verso le dune dell'Erg Chebbi. Cena tradizionale e notte in tenda di lusso."
    },
    {
      day: "Giorno 7",
      title: "Dune dell'Erg Chebbi – Nomadi del Sahara e Villaggio Gnawa",
      content: "Alba spettacolare nel deserto e colazione. Escursione in 4x4 nei dintorni: il lago stagionale Dayet Sriji popolato da fenicotteri, musica Gnawa nel villaggio di Khamlia e visita a una famiglia nomade berbera per scoprire il loro stile di vita nel Sahara. Cena e pernottamento in hotel/riad ai piedi delle dune."
    },
    {
      day: "Giorno 8",
      title: "Merzouga – Rissani – Gole del Todra – Valle del Dades",
      content: "Visita del vivace mercato tradizionale di Rissani prima di proseguire per Tinghir e le Gole del Todra, canyon roccioso con spettacolari pareti alte oltre 300 metri. Passeggiata lungo il torrente e proseguimento verso la Valle del Dades con le caratteristiche 'dita di scimmia'. Cena e pernottamento in riad."
    },
    {
      day: "Giorno 9",
      title: "Valle del Dades – Valle delle Rose – Ouarzazate",
      content: "Mattinata nella Valle del Dades tra terrazze coltivate e villaggi berberi. Proseguimento verso Kelaat M'Gouna nella Valle delle Rose, nota per i prodotti all'essenza di rosa damascena. Arrivo a Ouarzazate, la Porta del Deserto, con cena e pernottamento in hotel."
    },
    {
      day: "Giorno 10",
      title: "Ouarzazate – Kasbah Ait Ben Haddou – Taliouine – Taroudant",
      content: "Visita agli studi cinematografici e alla famosa Kasbah di Ait Ben Haddou, spettacolare villaggio fortificato UNESCO set di kolossal storici. Viaggio verso ovest attraverso Taznakht e Taliouine, la capitale dello zafferano, fino a raggiungere Taroudant. Passeggiata nella medina murata e notte in riad."
    },
    {
      day: "Giorno 11",
      title: "Taroudant – Agadir – Essaouira",
      content: "Partenza verso la costa atlantica passando per Agadir e il suo lungomare. Percorso costiero con avvistamento delle caratteristiche capre sugli alberi di argan. Arrivo pomeridiano nella suggestiva Essaouira, gioiello sull'oceano. Pernottamento in riad nella medina."
    },
    {
      day: "Giorno 12",
      title: "Visita Monumentale di Essaouira",
      content: "Giornata dedicata a Mogador: i bastioni della Skala con i cannoni storici, il porto dei pescatori con degustazione di pesce fresco, le botteghe del legno di tuia e il quartiere ebraico del Mellah. Tempo libero per godersi la brezza oceanica. Pernottamento in riad."
    },
    {
      day: "Giorno 13",
      title: "Essaouira – Cooperative di Argan – Marrakech",
      content: "Partenza verso Marrakech con sosta presso una cooperativa femminile per scoprire l'estrazione artigianale dell'olio di argan. Arrivo a Marrakech, sistemazione in riad e primo assaggio dell'incredibile atmosfera serale di Piazza Jemaa el-Fna."
    },
    {
      day: "Giorno 14",
      title: "Visita Guidata Completa di Marrakech",
      content: "Esplorazione approfondita della Città Rossa: il minareto della Koutoubia, il sontuoso Palazzo della Bahia, i giardini e i variopinti souk degli artigiani. Al calar della sera, spettacolo popolare in Piazza Jemaa el-Fna e cena tipica di festa. Pernottamento in riad."
    },
    {
      day: "Giorno 15",
      title: "Casablanca – Trasferimento in Aeroporto e Conclusione del Viaggio",
      content: "Colazione in riad e trasferimento privato all'Aeroporto Internazionale Mohammed V di Casablanca (o Marrakech) per il vostro volo di ritorno, dopo 15 giorni indimenticabili tra i tesori del Marocco."
    }
  ],
  mapDestinations: [
    { number: 1, name: "Casablanca", day: "Giorno 1", subtitle: "Inizio Atlantico", desc: "Moschea Hassan II e costa." },
    { number: 2, name: "Rabat", day: "Giorno 2", subtitle: "Capitale", desc: "Monumenti reali e fronte mare." },
    { number: 3, name: "Tangeri", day: "Giorno 3", subtitle: "Porta Nord", desc: "Incontro tra Mediterraneo e Atlantico." },
    { number: 4, name: "Chefchaouen", day: "Giorno 4", subtitle: "Perla Blu", desc: "Magia delle montagne del Rif." },
    { number: 5, name: "Fes", day: "Giorni 5 e 6", subtitle: "Capitale Spirituale", desc: "Passeggiata guidata nel patrimonio UNESCO." },
    { number: 6, name: "Sahara di Merzouga", day: "Giorni 7 e 8", subtitle: "Dune dell'Erg Chebbi", desc: "Glamping e carovana in cammello." },
    { number: 7, name: "Gole del Dades", day: "Giorno 9", subtitle: "Canyon Suggestivi", desc: "Spettacolari conformazioni rocciose." },
    { number: 8, name: "Ouarzazate", day: "Giorno 10", subtitle: "Strada delle Kasbah", desc: "Ait Ben Haddou e studi cinematografici." },
    { number: 9, name: "Taroudant", day: "Giorno 11", subtitle: "Piccola Marrakech", desc: "Mura storiche della Valle del Souss." },
    { number: 10, name: "Essaouira", day: "Giorni 12 e 13", subtitle: "Costa di Mogador", desc: "Foreste di argan e bastioni oceanici." },
    { number: 11, name: "Marrakech", day: "Giorni 14 e 15", subtitle: "Gran Finale nella Città Rossa", desc: "Palazzi, giardini e Jemaa El-Fna." },
    { number: 12, name: "Casablanca", day: "Giorno 16", subtitle: "Partenza", desc: "Rientro all'aeroporto di Casablanca." }
  ],
  galleryImages: [
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/thumbnail.jpg", cap: "Gran Tour di 15 Giorni da Casablanca in Marocco", alt: "Scorcio panoramico del grande circuito imperiale di 15 giorni in Marocco" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-01.jpg", cap: "Gran Tour di 15 Giorni da Casablanca in Marocco", alt: "Moschea Hassan II a Casablanca" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-02.jpg", cap: "Gran Tour di 15 Giorni da Casablanca in Marocco", alt: "Vicolo acciottolato blu a Chefchaouen" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-03.jpg", cap: "Gran Tour di 15 Giorni da Casablanca in Marocco", alt: "Rovine romane e mosaici a Volubilis" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-04.jpg", cap: "Gran Tour di 15 Giorni da Casablanca in Marocco", alt: "Carovana a dorso di dromedario sulle dune di Merzouga" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-05.jpg", cap: "Gran Tour di 15 Giorni da Casablanca in Marocco", alt: "Accampamento tendato di lusso nel deserto del Sahara" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-06.jpg", cap: "Gran Tour di 15 Giorni da Casablanca in Marocco", alt: "Kasbah storica fortificata di Ait Ben Haddou" },
    { src: "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-07.jpg", cap: "Gran Tour di 15 Giorni da Casablanca in Marocco", alt: "Bastioni di Essaouira affacciati sull'Oceano Atlantico" }
  ],
  faqs: []
};

saveTour('15-days-tour-from-casablanca', tour17_es, tour17_it);
