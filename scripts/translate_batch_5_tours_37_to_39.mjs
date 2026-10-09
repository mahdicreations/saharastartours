import fs from 'fs';
import path from 'path';

const ES_DIR = path.resolve('src/data/locales/es/tours');
const IT_DIR = path.resolve('src/data/locales/it/tours');

function saveTour(slug, esData, itData) {
  fs.writeFileSync(path.join(ES_DIR, `${slug}.json`), JSON.stringify(esData, null, 2), 'utf-8');
  fs.writeFileSync(path.join(IT_DIR, `${slug}.json`), JSON.stringify(itData, null, 2), 'utf-8');
  console.log(`Saved tour ${slug} in ES and IT!`);
}

// =============================================================
// Tour 37: 2-day-zagora-desert-tour-from-marrakech
// =============================================================
const tour37_es = {
  slug: "2-day-zagora-desert-tour-from-marrakech",
  title: "Tour de 2 Días al Desierto de Zagora desde Marrakech | Sahara Star Tours",
  shortTitle: "Tour de 2 Días al Desierto de Zagora desde Marrakech",
  description: "Disfrute de una escapada express de 2 días al desierto de Zagora desde Marrakech. Cruce el Alto Atlas, explore la Kasbah Ait Ben Haddou y pase una noche bajo las estrellas en un campamento bereber.",
  aboutHtml: "<p>Esta excursión privada de 2 días al desierto de Zagora desde Marrakech es perfecta para viajeros con tiempo limitado que desean vivir la magia del desierto marroquí. Atravesará las majestuosas montañas del Alto Atlas por el paso de Tizi N'Tichka, visitará la famosa Kasbah de Ait Ben Haddou (Patrimonio de la Humanidad por la UNESCO) y recorrerá el exuberante valle del Draa antes de disfrutar de un paseo en camello al atardecer y una inolvidable noche en campamento tradicional en Zagora.</p>",
  duration: "2 Días / 1 Noche",
  startingFrom: "Marrakech",
  price: "Desde $250/persona",
  highlights: [
    "Paseo en camello por el desierto al atardecer",
    "Kasbah de Ait Ben Haddou, declarada Patrimonio de la Humanidad por la UNESCO",
    "Ruta panorámica a través de las montañas del Alto Atlas",
    "Medina histórica y lugares emblemáticos de Marrakech",
    "Ouarzazate, la puerta del desierto",
    "Zagora y el palmeral del Valle del Draa"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía local experimentado y traslados privados",
    "Combustible, peajes y gastos operativos del vehículo",
    "Alojamiento en riads/hoteles seleccionados según el itinerario",
    "Desayunos y cenas incluidas según el itinerario",
    "Paseo en camello por el desierto y acceso al campamento del desierto"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y servicios de aeropuerto no especificados",
    "Gastos personales y actividades opcionales",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Marrakech – Kasbah Ait Ben Haddou – Ouarzazate – Agdez – Desierto de Zagora",
      "content": "Comenzará su tour de 2 días al desierto de Zagora temprano por la mañana con la recogida en su alojamiento o en el aeropuerto de Marrakech. Cruzará el paso montañoso de Tizi N'Tichka (2.260 m de altitud), serpenteando entre aldeas bereberes con paradas panorámicas. Llegará a la Kasbah de Ait Ben Haddou, donde disfrutará de una caminata por este extraordinario sitio de la UNESCO, famoso por películas como Gladiator y Lawrence de Arabia, y series como Juego de Tronos. Tras el almuerzo en Ait Ben Haddou o en Ouarzazate, continuará por las montañas del Anti-Atlas y a lo largo del Valle del Draa, el mayor palmeral y río más largo de Marruecos. Por la tarde llegará a Zagora, montará en camello al atardecer y llegará a su campamento en el desierto para disfrutar de una cena marroquí con música de tambores bereberes bajo un cielo estrellado."
    },
    {
      "day": "Día 2",
      "title": "Desierto de Zagora a Marrakech",
      "content": "Despierte temprano para admirar el amanecer en camello sobre las dunas y disfrutar de un reconfortante desayuno marroquí. Saldrá rumbo a Ouarzazate, la puerta de entrada al desierto, donde podrá visitar la Kasbah Taourirt y los renombrados estudios cinematográficos. Luego emprenderá el regreso hacia Marrakech cruzando el paso de Tizi N'Tichka y las cumbres del Alto Atlas. Finalmente, su tour de 2 días al desierto de Zagora concluirá con el traslado a su alojamiento o al aeropuerto en Marrakech."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Día 1",
      "subtitle": "Marrakech – Kasbah Ait Ben Haddou – Ouarzazate – Agdez – Desierto de Zagora",
      "desc": "Salida matinal desde Marrakech cruzando el paso de Tizi N'Tichka hacia Ait Ben Haddou, Ouarzazate y el Valle del Draa hasta el campamento de Zagora."
    },
    {
      "number": 2,
      "name": "Desierto de Zagora a Marrakech",
      "day": "Día 2",
      "subtitle": "Desierto de Zagora a Marrakech",
      "desc": "Amanecer sobre las dunas, visita a Ouarzazate y regreso a Marrakech a través del Alto Atlas."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_1.webp",
      "cap": "Dunas de Zagora",
      "alt": "Ondulaciones de arena esculpidas por el viento en una duna del desierto contra un cielo azul brillante"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_10.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Puerta de arcilla fortificada de Ait Ben Haddou con camellos descansando en el lecho del río"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_2.webp",
      "cap": "Valle del Draa",
      "alt": "Carretera de montaña serpenteando a través de palmerales en el Valle del Draa"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_3.webp",
      "cap": "Oasis del Draa",
      "alt": "Altas palmeras datileras contra el cielo azul en un exuberante oasis marroquí"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_4.webp",
      "cap": "Pueblo del Alto Atlas",
      "alt": "Viviendas de adobe de una kasbah en una ladera rocosa del Alto Atlas"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_5.webp",
      "cap": "Torre fortificada",
      "alt": "Torre de kasbah fortificada de adobe con patrones geométricos contra el cielo"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_6.webp",
      "cap": "Aeropuerto de Marrakech",
      "alt": "Moderna arquitectura curva de la terminal del aeropuerto Menara de Marrakech"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_7.webp",
      "cap": "Cumbres del Atlas",
      "alt": "Valle verde y arroyo de montaña con picos nevados del Alto Atlas al fondo"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_8.webp",
      "cap": "Ksar al anochecer",
      "alt": "Ksar fortificado de Ait Ben Haddou al atardecer con su granero en la cima"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_9.webp",
      "cap": "Kasbah y palmeral",
      "alt": "Torres de kasbah de tierra enmarcadas por palmeras y olivos"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/hero_2.webp",
      "cap": "Paisaje de Ait Ben Haddou",
      "alt": "Paisaje panorámico del ksar de adobe de Ait Ben Haddou"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia completamente privada: el vehículo, chófer e itinerario están reservados en exclusiva para su grupo. La ruta y el ritmo pueden adaptarse a sus preferencias personales."
    },
    {
      "question": "¿Cuánto dura el paseo en camello y hay alternativas disponibles?",
      "answer": "El paseo en camello suele durar entre 40 minutos y 1,5 horas, según el campamento y el día. Se puede coordinar un traslado en vehículo 4×4 como alternativa, y suele haber quads disponibles con coste adicional."
    },
    {
      "question": "¿La tienda del campamento en el desierto es privada?",
      "answer": "Sí, el alojamiento en campamento en el desierto descrito cuenta con tiendas privadas equipadas con baño privado y ducha con agua caliente, sujeto a la categoría reservada."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "La recogida se organiza en su alojamiento, aeropuerto o punto de encuentro acordado en Marrakech. El tour finaliza en Marrakech; el lugar exacto de regreso se confirma al momento de la reserva."
    },
    {
      "question": "¿Qué tipo de vehículo se utiliza?",
      "answer": "El transporte se realiza en un cómodo vehículo privado 4×4 o monovolumen con aire acondicionado. Para grupos más grandes se organiza un minibús. La capacidad y tipo de vehículo se confirman antes del viaje."
    },
    {
      "question": "¿Se pueden adaptar menús para requerimientos dietéticos especiales?",
      "answer": "Sí. Infórmenos sobre sus preferencias o restricciones dietéticas al reservar para que los riads, hoteles y el campamento preparen comidas adecuadas (opciones vegetarianas, veganas, halal, sin gluten, etc.)."
    },
    {
      "question": "¿Es este itinerario adecuado para todas las edades?",
      "answer": "Sí, aunque incluye trayectos por carretera de hasta 6 horas. Se programan paradas periódicas para descansar y estirar las piernas, y es posible diseñar una ruta personalizada si prefiere jornadas más cortas."
    },
    {
      "question": "¿Cuál es la mejor época del año para realizar este tour?",
      "answer": "La primavera y el otoño ofrecen temperaturas muy agradables en todo Marruecos. El invierno también es ideal para disfrutar del desierto del sur, aunque las noches en la montaña pueden ser frías."
    }
  ]
};

const tour37_it = {
  slug: "2-day-zagora-desert-tour-from-marrakech",
  title: "Tour di 2 Giorni nel Deserto di Zagora da Marrakech | Sahara Star Tours",
  shortTitle: "Tour di 2 Giorni nel Deserto di Zagora da Marrakech",
  description: "Vivi una splendida fuga express di 2 giorni nel deserto di Zagora da Marrakech. Attraversa l'Alto Atlante, visita la Kasbah di Ait Ben Haddou e dormi in un accampamento berbero.",
  aboutHtml: "<p>Questo tour privato di 2 giorni nel deserto di Zagora da Marrakech è l'itinerario perfetto per chi ha tempi ristretti ma non vuole rinunciare all'emozione del deserto marocchino. Viaggerai attraverso le maestose vette dell'Alto Atlante attraverso il valico di Tizi N'Tichka, scoprirai la celebre Kasbah di Ait Ben Haddou (Patrimonio UNESCO) e attraverserai la rigogliosa Valle del Draa prima di goderti una passeggiata a dorso di dromedario al tramonto e una notte sotto il cielo stellato di Zagora.</p>",
  duration: "2 Giorni / 1 Notte",
  startingFrom: "Marrakech",
  price: "Da $250/persona",
  highlights: [
    "Trekking a dorso di dromedario nel deserto al tramonto",
    "Kasbah di Ait Ben Haddou, patrimonio mondiale UNESCO",
    "Itinerario panoramico attraverso le montagne dell'Alto Atlante",
    "Medina storica e punti di riferimento iconici di Marrakech",
    "Ouarzazate, la porta d'accesso al deserto",
    "Zagora e i maestosi palmeti della Valle del Draa"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale esperto e trasferimenti privati",
    "Carburante, pedaggi stradali e costi operativi del veicolo",
    "Sistemazione in riad/hotel selezionati secondo l'itinerario",
    "Colazioni e cene incluse come da programma",
    "Trekking in dromedario nel deserto e accesso all'accampamento"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli e servizi aeroportuali non specificati",
    "Spese personali e attività facoltative",
    "Mance e gratifiche"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Marrakech – Kasbah di Ait Ben Haddou – Ouarzazate – Agdez – Deserto di Zagora",
      "content": "Il tuo tour di 2 giorni nel deserto di Zagora inizia al mattino presto con il prelievo dal tuo alloggio o dall'aeroporto di Marrakech. Attraverserai il passo di Tizi N'Tichka (2.260 m), ammirando villaggi berberi arroccati e splendidi scorci panoramici. Raggiungerai la Kasbah di Ait Ben Haddou per una piacevole passeggiata in questo sito UNESCO leggendario, celebre set cinematografico di film come Il Gladiatore e Lawrence d'Arabia, nonché della serie Il Trono di Spade. Dopo il pranzo ad Ait Ben Haddou o a Ouarzazate, proseguirai attraverso l'Anti Atlante e lungo la suggestiva Valle del Draa, il palmeto più esteso del Marocco. Nel pomeriggio arriverai a Zagora per iniziare il trekking a dorso di dromedario al tramonto verso l'accampamento nel deserto, dove ti attende una cena tipica berbera con musica di tamburi sotto una magnifica volta stellata."
    },
    {
      "day": "Giorno 2",
      "title": "Deserto di Zagora a Marrakech",
      "content": "Sveglia presto per ammirare il magico sorgere del sole a dorso di dromedario tra le dune, seguita da una ricca colazione marocchina. Partirai poi verso Ouarzazate, la porta del deserto, dove potrai visitare la Kasbah Taourirt e i rinomati studi cinematografici. Proseguirai quindi il viaggio di rientro verso Marrakech attraverso il valico di Tizi N'Tichka e i paesaggi dell'Alto Atlante. Il tour si concluderà con il rientro al tuo alloggio o all'aeroporto di Marrakech."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Giorno 1",
      "subtitle": "Marrakech – Kasbah di Ait Ben Haddou – Ouarzazate – Agdez – Deserto di Zagora",
      "desc": "Partenza mattutina da Marrakech attraverso il Tizi N'Tichka verso Ait Ben Haddou, Ouarzazate e la Valle del Draa fino all'accampamento di Zagora."
    },
    {
      "number": 2,
      "name": "Deserto di Zagora a Marrakech",
      "day": "Giorno 2",
      "subtitle": "Deserto di Zagora a Marrakech",
      "desc": "Alba sulle dune, visita di Ouarzazate e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_1.webp",
      "cap": "Dune di Zagora",
      "alt": "Increspature di sabbia scolpite dal vento su una duna del deserto sotto il cielo azzurro brillante"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_10.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Porta in argilla fortificata di Ait Ben Haddou con dromedari a riposo nel letto del fiume"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_2.webp",
      "cap": "Valle del Draa",
      "alt": "Strada panoramica di montagna che si snoda tra i palmeti nella Valle del Draa"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_3.webp",
      "cap": "Oasi del Draa",
      "alt": "Alte palme da dattero contro il cielo blu in una lussureggiante oasi marocchina"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_4.webp",
      "cap": "Villaggio dell'Alto Atlante",
      "alt": "Abitazioni in terra cruda di una kasbah su un pendio roccioso dell'Alto Atlante"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_5.webp",
      "cap": "Torre fortificata",
      "alt": "Torre fortificata in mattoni di fango con motivi geometrici contro il cielo"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_6.webp",
      "cap": "Aeroporto di Marrakech",
      "alt": "Moderna architettura curva del terminal dell'aeroporto Menara di Marrakech"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_7.webp",
      "cap": "Cime dell'Alto Atlante",
      "alt": "Valle verdeggiante e torrente di montagna con le vette innevate dell'Alto Atlante"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_8.webp",
      "cap": "Ksar al crepuscolo",
      "alt": "Ksar fortificato di Ait Ben Haddou all'imbrunire con il granaio sulla collina"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_9.webp",
      "cap": "Kasbah e palmeto",
      "alt": "Torri della kasbah in terra battuta incorniciate da palme e ulivi"
    },
    {
      "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/hero_2.webp",
      "cap": "Panoramica di Ait Ben Haddou",
      "alt": "Veduta panoramica dello ksar in mattoni di fango di Ait Ben Haddou"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "Si tratta di un'esperienza completamente privata: veicolo, autista e itinerario sono riservati in esclusiva al tuo gruppo. Il percorso e i ritmi possono essere personalizzati in base ai tuoi desideri."
    },
    {
      "question": "Quanto dura il trekking in dromedario e ci sono alternative?",
      "answer": "La passeggiata a dorso di dromedario dura solitamente tra 40 minuti e 1,5 ore. Su richiesta è possibile organizzare il trasferimento in 4×4, oppure noleggiare quad a un costo aggiuntivo."
    },
    {
      "question": "La tenda nell'accampamento nel deserto è privata?",
      "answer": "Sì, l'accampamento nel deserto include tende private dotate di bagno interno e doccia con acqua calda, a seconda della categoria confermata."
    },
    {
      "question": "Dove vengono effettuati il prelievo e il rientro?",
      "answer": "Il prelievo viene concordato presso il tuo alloggio, in aeroporto o in un punto d'incontro a Marrakech. Il tour si conclude a Marrakech con rientro al punto stabilito."
    },
    {
      "question": "Quale tipologia di veicolo viene utilizzata?",
      "answer": "Il viaggio si svolge in un moderno veicolo privato 4×4 o minivan dotato di aria condizionata. Per gruppi più numerosi viene impiegato un minibus adeguato."
    },
    {
      "question": "È possibile soddisfare esigenze alimentari particolari?",
      "answer": "Certamente. Comunicaci eventuali preferenze o allergie al momento della prenotazione in modo che riad, hotel e accampamento possano predisporre pasti adatti (vegetariani, vegani, halal, senza glutine, ecc.)."
    },
    {
      "question": "Questo itinerario è adatto a viaggiatori di ogni età?",
      "answer": "Sì, sebbene preveda alcune ore di viaggio su strada (fino a circa 6 ore). Sono previste frequenti soste panoramiche ed è sempre possibile concordare un percorso più rilassato."
    },
    {
      "question": "Qual è il periodo migliore per questo viaggio?",
      "answer": "La primavera e l'autunno offrono un clima particolarmente piacevole in tutto il Marocco. Anche l'inverno è ottimo per il deserto del sud, pur con temperature più fresche sui passi montani."
    }
  ]
};

// =============================================================
// Tour 38: 3-day-morocco-desert-tour-from-marrakech
// =============================================================
const tour38_es = {
  slug: "3-day-morocco-desert-tour-from-marrakech",
  title: "Tour de 3 Días de Marrakech al Desierto de Merzouga | Sahara Star Tours",
  shortTitle: "Tour de 3 Días al Desierto desde Marrakech",
  description: "Descubra las dunas de Erg Chebbi en un tour privado de 3 días desde Marrakech. Visite Ait Ben Haddou, las Gargantas del Dades y del Todra, y pase la noche en un campamento de lujo.",
  aboutHtml: "<p>Este tour privado de 3 días desde Marrakech al desierto de Merzouga es una de las rutas más emblemáticas de Marruecos. Cruzando el Alto Atlas por el paso de Tizi N'Tichka, explorará el legendario ksar de Ait Ben Haddou, los impresionantes cañones de las Gargantas del Dades y del Todra, y se adentrará en el mar de dunas doradas de Erg Chebbi en Merzouga con paseo en camello al atardecer y velada musical bereber en un campamento de lujo.</p>",
  duration: "3 Días / 2 Noches",
  startingFrom: "Marrakech",
  price: "Desde $390/persona",
  highlights: [
    "Paseo en camello al atardecer en las dunas de Erg Chebbi",
    "Noche en campamento de lujo en el desierto con tambores bereberes",
    "Gargantas del Dades y espectaculares cañones del Todra",
    "Kasbah de Ait Ben Haddou, Patrimonio de la Humanidad por la UNESCO",
    "Vistas panorámicas cruzando el paso de montaña Tizi N'Tichka"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía profesional de habla hispana durante todo el viaje",
    "Combustible, peajes y tasas de transporte",
    "1 noche en hotel/riad en el Valle del Dades y 1 noche en campamento de lujo",
    "Desayunos diarios y cenas en el Valle del Dades y en el campamento",
    "Paseo en camello por las dunas de Merzouga (ida y vuelta al campamento)"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos internacionales o internos",
    "Entradas a monumentos o estudios opcionales",
    "Propinas y gastos personales"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Marrakech – Alto Atlas – Kasbah Ait Ben Haddou – Valle de las Rosas – Boumalne Dades",
      "content": "Su aventura de 3 días hacia el desierto de Merzouga comienza temprano con la recogida en su alojamiento o en el aeropuerto de Marrakech. Atravesará las impresionantes montañas del Alto Atlas a través del paso Tizi N'Tichka (2.260 m), disfrutando de paradas para fotos en aldeas bereberes tradicionales. Visitará la famosa Kasbah de Ait Ben Haddou, declarada Patrimonio de la Humanidad por la UNESCO y escenario de grandes producciones cinematográficas. Tras el almuerzo, continuará por Ouarzazate, el palmeral de Skoura y el fragante Valle de las Rosas en Kalaat M'Gouna, hasta llegar a Boumalne Dades para cenar y pasar la noche en un riad con encanto."
    },
    {
      "day": "Día 2",
      "title": "Valle del Dades – Gargantas del Todra – Desierto de Merzouga – Paseo en camello y campamento de lujo",
      "content": "Tras el desayuno, admirará las vistas del Valle del Dades y sus singulares formaciones rocosas antes de continuar hacia las majestuosas Gargantas del Todra, un espectacular cañón de paredes verticales de roca caliza roja. Podrá caminar por el desfiladero y sentir la inmensidad del paisaje. Proseguirá viaje pasando por los palmerales de Touroug y Tinjdad con tiempo para almorzar. Por la tarde llegará a las doradas arenas de Merzouga, donde montará en camello para atravesar las dunas de Erg Chebbi, admirar una puesta de sol inolvidable y llegar al campamento de lujo para disfrutar de música bereber junto a la hoguera y una cena gourmet bajo un manto de estrellas."
    },
    {
      "day": "Día 3",
      "title": "Desierto de Merzouga – Valle del Draa – Anti-Atlas – Ouarzazate – Marrakech",
      "content": "Madrugue para contemplar el sobrecogedor amanecer sobre las dunas y deguste un desayuno marroquí tradicional. Regresará en camello o en 4×4 a Merzouga para reencontrarse con su chófer. Viajará hacia Rissani, célebre por su mercado tradicional, y seguirá rumbo a Alnif y a lo largo del extenso Valle del Draa hasta Ouarzazate. Finalmente, volverá a cruzar el Alto Atlas para llegar a Marrakech al atardecer, donde le trasladaremos a su alojamiento. (Nota: Si desea acortar el viaje de regreso, es posible finalizar el tour en el aeropuerto de Errachidia o terminar en Fez en lugar de Marrakech)."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Día 1",
      "subtitle": "Marrakech – Alto Atlas – Ait Ben Haddou – Valle de las Rosas – Boumalne Dades",
      "desc": "Salida desde Marrakech a través del paso Tizi N'Tichka hacia Ait Ben Haddou y noche en el Valle del Dades."
    },
    {
      "number": 2,
      "name": "Valle del Dades",
      "day": "Día 2",
      "subtitle": "Valle del Dades – Gargantas del Todra – Desierto de Merzouga – Campamento de lujo",
      "desc": "Exploración de las Gargantas del Todra, llegada a Erg Chebbi y paseo en camello hacia el campamento de lujo."
    },
    {
      "number": 3,
      "name": "Desierto de Merzouga",
      "day": "Día 3",
      "subtitle": "Merzouga – Valle del Draa – Anti-Atlas – Ouarzazate – Marrakech",
      "desc": "Amanecer en las dunas, viaje a través del Valle del Draa y regreso a Marrakech por el Alto Atlas."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_1.webp",
      "cap": "Gargantas del Todra",
      "alt": "Chilabas tradicionales y tejidos a la venta a lo largo de las paredes rocosas de las Gargantas del Todra"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_10.webp",
      "cap": "Zoco marroquí",
      "alt": "Pirámides de especias coloridas y frascos de vidrio en un zoco tradicional marroquí"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_2.webp",
      "cap": "Paisaje de Merzouga",
      "alt": "Colinas volcánicas rocosas y picos de montañas desérticas cerca de Merzouga"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_3.webp",
      "cap": "Camello en Erg Chebbi",
      "alt": "Camello descansando frente a las altas dunas de arena y campamento en Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_4.webp",
      "cap": "Artesanía de Marrakech",
      "alt": "Farolillos de cobre artesanales y babuchas de cuero en un zoco de Marrakech"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_5.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar de Ait Ben Haddou visto al otro lado del valle del río a la luz del atardecer"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_6.webp",
      "cap": "Lámparas de latón",
      "alt": "Lámparas de latón perforado y artesanías de metal exhibidas en la medina de Marrakech"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_7.webp",
      "cap": "Ait Ben Haddou iluminado",
      "alt": "Cielo crepuscular púrpura sobre el pueblo de arcilla iluminado de Ait Ben Haddou"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_8.webp",
      "cap": "Dunas del Sahara",
      "alt": "Texturas de arena dorada que se unen con el cielo azul en el desierto del Sahara"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_9.webp",
      "cap": "Kasbah de Skoura",
      "alt": "Kasbah fortificada de tierra que se alza entre palmeras en el oasis de Skoura"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/hero_2.webp",
      "cap": "Vista de Ait Ben Haddou",
      "alt": "Vista panorámica del pueblo fortificado de Ait Ben Haddou y sus palmerales"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Esta es una experiencia totalmente privada: el vehículo, conductor e itinerario están reservados exclusivamente para usted y su grupo, permitiéndole adaptar el ritmo del viaje."
    },
    {
      "question": "¿Cuánto dura el paseo en camello y hay alternativa en 4×4?",
      "answer": "El paseo en camello tiene una duración habitual de 40 a 90 minutos. Si lo prefiere, podemos coordinar el traslado directo al campamento en vehículo 4×4 sin coste adicional."
    },
    {
      "question": "¿Cómo son las tiendas en el campamento de lujo?",
      "answer": "Las tiendas del campamento de lujo cuentan con camas confortables, baño privado completo con inodoro y ducha con agua caliente caliente, además de electricidad para recargar dispositivos."
    },
    {
      "question": "¿Dónde se realiza la recogida y el regreso?",
      "answer": "Le recogeremos directamente en su hotel, riad o en el aeropuerto de Marrakech, y al finalizar le dejaremos en el punto acordado en Marrakech."
    },
    {
      "question": "¿Qué tipo de vehículo se utiliza durante el viaje?",
      "answer": "Viajará en un vehículo todoterreno 4×4 moderno o en un monovolumen de gama alta, ambos con aire acondicionado, asientos confortables y amplio espacio para equipaje."
    },
    {
      "question": "¿Se pueden preparar comidas vegetarianas o dietas especiales?",
      "answer": "Sí, podemos adaptarnos a dietas vegetarianas, veganas, sin gluten u otras necesidades alimentarias; simplemente avísenos con antelación al confirmar su reserva."
    },
    {
      "question": "¿Es un itinerario adecuado para niños o personas mayores?",
      "answer": "Sí, es apto para todas las edades. Tenga en cuenta que el último día de regreso a Marrakech incluye un trayecto largo por carretera con paradas regulares para descansar."
    },
    {
      "question": "¿Cuál es la época recomendada para hacer esta excursión?",
      "answer": "De octubre a mayo las temperaturas son muy agradables para viajar por el sur y el desierto. En los meses de verano las jornadas son más calurosas, pero los vehículos y alojamientos están climatizados."
    }
  ]
};

const tour38_it = {
  slug: "3-day-morocco-desert-tour-from-marrakech",
  title: "Tour di 3 Giorni da Marrakech al Deserto di Merzouga | Sahara Star Tours",
  shortTitle: "Tour di 3 Giorni nel Deserto da Marrakech",
  description: "Scopri le maestose dune dell'Erg Chebbi con un tour privato di 3 giorni da Marrakech. Ammira Ait Ben Haddou, le Gole del Dades e del Todra e pernotta in un campo tendato di lusso.",
  aboutHtml: "<p>Questo tour privato di 3 giorni da Marrakech al deserto di Merzouga rappresenta uno degli itinerari più spettacolari e richiesti del Marocco. Attraversando l'Alto Atlante tramite il passo Tizi N'Tichka, visiterai lo storico ksar di Ait Ben Haddou, le imponenti pareti rocciose delle Gole del Dades e del Todra, fino a raggiungere le dune dorate dell'Erg Chebbi per un'esperienza indimenticabile a dorso di dromedario al tramonto e una notte in accampamento di lusso.</p>",
  duration: "3 Giorni / 2 Notti",
  startingFrom: "Marrakech",
  price: "Da $390/persona",
  highlights: [
    "Trekking a dorso di dromedario al tramonto tra le dune dell'Erg Chebbi",
    "Notte in accampamento di lusso nel deserto con musica e tamburi berberi",
    "Spettacolari canyon delle Gole del Dades e Gole del Todra",
    "Kasbah di Ait Ben Haddou, sito Patrimonio Mondiale dell'UNESCO",
    "Scorci panoramici attraverso il passo montano del Tizi N'Tichka"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida locale professionista per l'intera durata del tour",
    "Carburante, pedaggi e spese operative del veicolo",
    "1 notte in riad/hotel nella Valle del Dades e 1 notte in accampamento di lusso",
    "Colazioni e cene incluse nella Valle del Dades e all'accampamento",
    "Trekking in dromedario tra le dune di Merzouga (andata e ritorno)"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei nazionali e internazionali",
    "Biglietti d'ingresso per monumenti facoltativi",
    "Mance e spese personali"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Marrakech – Alto Atlante – Kasbah Ait Ben Haddou – Valle delle Rose – Boumalne Dades",
      "content": "La tua avventura di 3 giorni verso il deserto di Merzouga comincia di buon mattino con il prelievo dal tuo riad o dall'aeroporto di Marrakech. Attraverserai l'Alto Atlante attraverso il celebre passo Tizi N'Tichka (2.260 m), ammirando villaggi berberi arroccati e spettacolari panorami montani. Visiterai poi la leggendaria Kasbah di Ait Ben Haddou, patrimonio UNESCO celebre per aver ospitato pellicole storiche indimenticabili. Dopo il pranzo proseguirai oltre Ouarzazate, attraverso l'oasi di Skoura e la Valle delle Rose a Kalaat M'Gouna, per giungere a Boumalne Dades dove ti attendono cena e pernottamento in un caratteristico riad."
    },
    {
      "day": "Giorno 2",
      "title": "Valle del Dades – Gole del Todra – Deserto di Merzouga – Trekking in dromedario e campo di lusso",
      "content": "Dopo la prima colazione ammirerai le suggestive gole della Valle del Dades prima di dirigerti verso le imponenti Gole del Todra, uno spettacolare canyon con pareti verticali alte fino a 300 metri. Potrai passeggiare lungo il torrente e respirare l'atmosfera selvaggia del luogo. Il viaggio proseguirà attraverso i palmeti di Touroug e Tinjdad con sosta per il pranzo. Nel pomeriggio arriverai a Merzouga: qui salirai a dorso di dromedario per attraversare le spettacolari dune dorate dell'Erg Chebbi al tramonto e raggiungere il tuo esclusivo accampamento di lusso, con cena gourmet e canti berberi attorno al falò sotto le stelle."
    },
    {
      "day": "Giorno 3",
      "title": "Deserto di Merzouga – Valle del Draa – Anti Atlante – Ouarzazate – Marrakech",
      "content": "Sveglia all'alba per assistere al magico sorgere del sole sul mare di dune, seguita da una colazione tradizionale. Rientrerai a Merzouga in dromedario o in 4×4 dove ritroverai il tuo autista. Visiterai il mercato storico di Rissani e proseguirai verso Alnif e lungo la magnifica Valle del Draa fino a Ouarzazate. Nel pomeriggio risalirai il passo del Tizi N'Tichka per fare rientro a Marrakech in serata con trasferimento al tuo alloggio. (Nota: per chi desidera evitare il lungo tragitto di rientro, è possibile concludere il tour all'aeroporto di Errachidia o proseguire verso Fès anziché Marrakech)."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Marrakech",
      "day": "Giorno 1",
      "subtitle": "Marrakech – Alto Atlante – Ait Ben Haddou – Valle delle Rose – Boumalne Dades",
      "desc": "Partenza da Marrakech attraverso il Tizi N'Tichka verso Ait Ben Haddou e la Valle del Dades."
    },
    {
      "number": 2,
      "name": "Valle del Dades",
      "day": "Giorno 2",
      "subtitle": "Valle del Dades – Gole del Todra – Deserto di Merzouga – Campo di lusso",
      "desc": "Visita delle Gole del Todra, arrivo all'Erg Chebbi e trekking in dromedario verso il campo tendato."
    },
    {
      "number": 3,
      "name": "Deserto di Merzouga",
      "day": "Giorno 3",
      "subtitle": "Merzouga – Valle del Draa – Anti Atlante – Ouarzazate – Marrakech",
      "desc": "Alba sulle dune, passaggio per la Valle del Draa e rientro a Marrakech attraverso l'Alto Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_1.webp",
      "cap": "Gole del Todra",
      "alt": "Djellaba tradizionali e tessuti in vendita lungo le pareti rocciose delle Gole del Todra"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_10.webp",
      "cap": "Souk marocchino",
      "alt": "Piramidi di spezie variopinte e barattoli di vetro in un tradizionale souk marocchino"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_2.webp",
      "cap": "Paesaggio di Merzouga",
      "alt": "Colline vulcaniche rocciose e vette montuose desertiche nei pressi di Merzouga"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_3.webp",
      "cap": "Dromedario a Erg Chebbi",
      "alt": "Dromedario a riposo davanti alle alte dune di sabbia e accampamento nell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_4.webp",
      "cap": "Artigianato di Marrakech",
      "alt": "Lanterne in rame artigianali e babucce in pelle nel souk di Marrakech"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_5.webp",
      "cap": "Ait Ben Haddou",
      "alt": "Ksar di Ait Ben Haddou visto dal fiume nella suggestiva luce della sera"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_6.webp",
      "cap": "Lampade in ottone",
      "alt": "Lampade in ottone traforato e oggetti in metallo esposti nella medina di Marrakech"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_7.webp",
      "cap": "Ait Ben Haddou illuminato",
      "alt": "Cielo crepuscolare violaceo sul villaggio in argilla illuminato di Ait Ben Haddou"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_8.webp",
      "cap": "Dune del Sahara",
      "alt": "Sabbia dorata e cieli tersi nel cuore del deserto del Sahara"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_9.webp",
      "cap": "Kasbah di Skoura",
      "alt": "Kasbah fortificata in terra che svetta tra le palme nell'oasi di Skoura"
    },
    {
      "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/hero_2.webp",
      "cap": "Veduta di Ait Ben Haddou",
      "alt": "Veduta panoramica del villaggio fortificato di Ait Ben Haddou e dei palmeti"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o di gruppo?",
      "answer": "È un tour interamente privato: veicolo, conducente e programma sono riservati solo a te e ai tuoi compagni di viaggio per garantirti la massima libertà e flessibilità."
    },
    {
      "question": "Quanto dura il giro in dromedario e c'è un'opzione in 4×4?",
      "answer": "La passeggiata in dromedario dura tra i 40 e i 90 minuti. Se preferisci, possiamo provvedere al trasporto diretto all'accampamento in 4×4 senza alcun costo aggiuntivo."
    },
    {
      "question": "Come sono organizzate le tende nel campo tendato di lusso?",
      "answer": "Le tende dispongono di comodi letti veri, bagno privato con wc e doccia con acqua calda corrente ed elettricità per ricaricare fotocamere e smartphone."
    },
    {
      "question": "Da dove si parte e dove termina il tour?",
      "answer": "Il pick-up avverrà comodamente presso il tuo riad, hotel o all'aeroporto di Marrakech, e il rientro al termine del viaggio sarà concordato a Marrakech."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Viaggerai a bordo di un confortevole fuoristrada 4×4 o minivan privato di ultima generazione, con aria condizionata e ampio vano bagagli."
    },
    {
      "question": "Possono essere soddisfatte richieste per diete particolari?",
      "answer": "Certamente, possiamo accogliere richieste per menu vegetariani, vegani o per celiaci comunicandocelo in anticipo al momento della prenotazione."
    },
    {
      "question": "Il viaggio è consigliato a famiglie con bambini o persone anziane?",
      "answer": "Sì, l'itinerario è adatto a tutte le età; tieni presente che la terza giornata prevede diverse ore di guida verso Marrakech, con soste regolari lungo il percorso."
    },
    {
      "question": "Qual è il periodo migliore per questa escursione?",
      "answer": "Il periodo compreso tra ottobre e maggio offre il clima più mite nel deserto. Durante i mesi estivi le temperature sono elevate, ma tutti i veicoli e gli alloggi sono dotati di aria condizionata."
    }
  ]
};

// =============================================================
// Tour 39: 3-day-sahara-desert-tour-from-fes
// =============================================================
const tour39_es = {
  slug: "3-day-sahara-desert-tour-from-fes",
  title: "Tour de 3 Días de Fez al Desierto de Merzouga | Sahara Star Tours",
  shortTitle: "Tour de 3 Días al Desierto desde Fez",
  description: "Explore el desierto del Sahara desde Fez en un circuito privado de 3 días. Visite Ifrane, el bosque de cedros, nómadas en Merzouga y duerma en un campamento de lujo en Erg Chebbi.",
  aboutHtml: "<p>Este tour privado de 3 días desde Fez al desierto del Sahara es la forma ideal de sumergirse en los contrastes de Marruecos. Viajará a través de la cordillera del Medio Atlas, conociendo la pintoresca Ifrane y los macacos del bosque de cedros de Azrou, descenderá por el impresionante cañón del Valle del Ziz y llegará al grandioso desierto de Merzouga, donde vivirá la hospitalidad nómada, el ritmo de la música gnawa en Khamlia y una noche mágica en campamento bereber de lujo.</p>",
  duration: "3 Días / 2 Noches",
  startingFrom: "Fez",
  price: "Desde $350/persona",
  highlights: [
    "Paseo en camello por las dunas doradas de Erg Chebbi al atardecer",
    "Noche en campamento de lujo con música y tambores bereberes bajo las estrellas",
    "Encuentro cultural con familias nómadas y música gnawa en Khamlia",
    "Visita a Ifrane y el bosque de cedros de Azrou con macacos de Berbería",
    "Vistas panorámicas del oasis y cañones del Valle del Ziz"
  ],
  inclusions: [
    "Vehículo privado 4×4 o monovolumen con aire acondicionado",
    "Chófer/guía profesional de habla hispana durante todo el trayecto",
    "Combustible, peajes y tasas de circulación",
    "1 noche en hotel en Merzouga y 1 noche en campamento bereber de lujo",
    "Desayunos diarios y cenas incluidas en Merzouga y en el campamento",
    "Paseo en camello por las dunas de Merzouga con asistencia completa"
  ],
  exclusions: [
    "Almuerzos y bebidas",
    "Vuelos y billetes de transporte aéreo",
    "Gastos personales y compras de recuerdos",
    "Propinas y gratificaciones"
  ],
  itinerary: [
    {
      "day": "Día 1",
      "title": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Desierto de Merzouga",
      "content": "Su tour de 3 días por el Sahara comienza temprano con la recogida en su riad o en el aeropuerto de Fez. Viajará hacia el sur a través de Imouzzer hasta llegar a Ifrane, conocida como 'la Suiza de Marruecos' por su arquitectura alpina y clima fresco. Continuará hacia el Bosque de Cedros de Azrou, donde podrá observar y fotografiar a los macacos de Berbería en libertad. Tras cruzar el Medio Atlas y almorzar en Midelt, el paisaje cambiará drásticamente mientras desciende por el paso de Tizi N'Tilghmt y a lo largo de los sobrecogedores palmerales del Valle del Ziz. Por la tarde llegará a Merzouga, donde montará en camello para cruzar las dunas de Erg Chebbi, admirar una puesta de sol inolvidable y llegar a su campamento de lujo para disfrutar de una cena tradicional con tambores bereberes bajo el cielo estrellado."
    },
    {
      "day": "Día 2",
      "title": "Exploración de Merzouga – Familias Nómadas – Khamlia – Lago de Merzouga – Erg Chebbi – Palmeral",
      "content": "Madrugar es imprescindible para presenciar el amanecer sobre las dunas del desierto. Tras el desayuno, regresará en camello o 4×4 para iniciar un día completo de exploración en todoterreno por la región de Merzouga. Visitará antiguas minas de kohl (delineador tradicional), compartirá un té con familias nómadas bereberes en sus tiendas tejidas a mano y conocerá el pueblo de Khamlia, donde asistirá a una emotiva actuación de música gnawa con raíces subsaharianas. Tiempo libre para almorzar (recomendamos degustar la tradicional pizza bereber 'madfouna'). Por la tarde paseará por el palmeral de Hassi Labied y contemplará el lago estacional de Dayet Srji, frecuentado por flamencos. Cena y noche en un agradable hotel a pie de dunas."
    },
    {
      "day": "Día 3",
      "title": "Merzouga – Rissani – Erfoud – Valle del Ziz – Ifrane – Fez",
      "content": "Tras el desayuno en el hotel, partirá hacia la histórica ciudad de Rissani, antigua capital del Tafilalet y origen de la dinastía alauita, donde visitará su auténtico zoco tradicional (especialmente animado los martes, jueves y domingos). Continuará hacia Erfoud para conocer un taller artesanal de mármol fosilizado. Luego iniciará el viaje de regreso a través de los cañones del Valle del Ziz, Midelt y los bosques de cedros del Medio Atlas, llegando a Fez al final de la tarde con traslado directo a su alojamiento o al aeropuerto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fez",
      "day": "Día 1",
      "subtitle": "Fez – Ifrane – Bosque de Cedros – Midelt – Valle del Ziz – Merzouga",
      "desc": "Salida desde Fez pasando por Ifrane, bosque de cedros y Valle del Ziz hacia el campamento de Erg Chebbi."
    },
    {
      "number": 2,
      "name": "Exploración de Merzouga",
      "day": "Día 2",
      "subtitle": "Región de Merzouga – Nómadas – Khamlia – Lago – Palmeral",
      "desc": "Día completo explorando Merzouga en 4×4: minas antiguas, nómadas del desierto, música gnawa y oasis."
    },
    {
      "number": 3,
      "name": "Merzouga a Fez",
      "day": "Día 3",
      "subtitle": "Merzouga – Rissani – Erfoud – Valle del Ziz – Ifrane – Fez",
      "desc": "Visita al zoco de Rissani, talleres de fósiles de Erfoud y retorno a Fez por el Medio Atlas."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_1.webp",
      "cap": "Curtidurías de Chouara",
      "alt": "Cubas de tinte de cuero y pilas de lavado de piedra en la curtiduría de Chouara en Fez"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_10.webp",
      "cap": "Dunas de Erg Chebbi",
      "alt": "Vista panorámica de dunas de color naranja que se extienden hasta el horizonte en Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_2.webp",
      "cap": "Macaco de Berbería",
      "alt": "Mono macaco de Berbería descansando sobre una rama de cedro en el bosque del Medio Atlas"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_4.webp",
      "cap": "Madrasa histórica de Fez",
      "alt": "Detalles de madera de cedro tallada y estuco en una madrasa medieval de Fez"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_5.webp",
      "cap": "Dunas doradas de Merzouga",
      "alt": "Dunas doradas onduladas y cielo azul en el desierto de Merzouga"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_6.webp",
      "cap": "Atardecer en Erg Chebbi",
      "alt": "Puesta de sol proyectando sombras cálidas sobre las dunas de Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_8.webp",
      "cap": "Paisaje del Valle del Ziz",
      "alt": "Paisaje desértico con acacias y montañas distantes a lo largo del Valle del Ziz"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_9.webp",
      "cap": "Campamento bereber",
      "alt": "Campamento nómada bereber tradicional en el desierto del Sahara bajo el cielo crepuscular"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/hero_2.webp",
      "cap": "Amanecer en Merzouga",
      "alt": "Vastas dunas desérticas de Merzouga iluminadas por el sol de la mañana"
    }
  ],
  faqs: [
    {
      "question": "¿Es este un tour privado o compartido?",
      "answer": "Es un viaje 100% privado: el vehículo, conductor y guía están reservados exclusivamente para su grupo, con horarios y paradas flexibles según sus intereses."
    },
    {
      "question": "¿Cuánto tiempo dura el paseo en camello y qué alternativas hay?",
      "answer": "La travesía en camello dura habitualmente entre 45 y 75 minutos. Si lo desea, puede acceder al campamento directamente en 4×4 o alquilar quads/buggies con suplemento."
    },
    {
      "question": "¿Cómo son las instalaciones del campamento en el desierto?",
      "answer": "El campamento de lujo ofrece jaimas privadas con baño completo incorporado, agua caliente, camas de verdad y electricidad para recargar sus dispositivos."
    },
    {
      "question": "¿Dónde se realiza la recogida y regreso en Fez?",
      "answer": "Le recogeremos en la puerta de su riad, hotel o directamente en el aeropuerto de Fez Sais, y le dejaremos en el mismo punto al finalizar la ruta."
    },
    {
      "question": "¿Qué modelo de vehículo se utiliza?",
      "answer": "Utilizamos vehículos privados 4×4 todoterreno modernos o monovolúmenes espaciosos, todos equipados con aire acondicionado para máxima comodidad."
    },
    {
      "question": "¿Pueden adaptarse a alergias o necesidades dietéticas?",
      "answer": "Sí, solo tiene que indicarnos sus requisitos alimentarios (vegetariano, sin gluten, sin lactosa, etc.) al confirmar la reserva y adaptaremos todos los menús."
    },
    {
      "question": "¿Es un circuito adecuado para todas las edades?",
      "answer": "Sí, es idóneo para familias con niños y personas mayores. El viaje de Fez a Merzouga dura unas 7 horas en total, con múltiples paradas escénicas para descansar."
    },
    {
      "question": "¿Cuál es la mejor temporada para realizar este viaje?",
      "answer": "La primavera y el otoño brindan temperaturas ideales tanto en el Medio Atlas como en las dunas. En invierno los días son soleados y frescos, mientras que en verano recomendamos madrugar para evitar las horas centrales."
    }
  ]
};

const tour39_it = {
  slug: "3-day-sahara-desert-tour-from-fes",
  title: "Tour di 3 Giorni da Fes al Deserto di Merzouga | Sahara Star Tours",
  shortTitle: "Tour di 3 Giorni nel Deserto da Fes",
  description: "Vivi la magia del deserto del Sahara con un tour privato di 3 giorni da Fes. Visita Ifrane, la foresta dei cedri, i nomadi a Merzouga e pernotta in un campo tendato di lusso a Erg Chebbi.",
  aboutHtml: "<p>Questo tour privato di 3 giorni da Fes al deserto del Sahara ti permetterà di scoprire i contrasti più spettacolari del Marocco. Attraversando le montagne del Medio Atlante incontrerai Ifrane e le scimmie barbaresche nella foresta di cedri di Azrou, scenderai attraverso la rigogliosa gola della Valle dello Ziz e ti immergerai tra le magnifiche dune dell'Erg Chebbi con un'indimenticabile notte in un accampamento berbero di lusso.</p>",
  duration: "3 Giorni / 2 Notti",
  startingFrom: "Fes",
  price: "Da $350/persona",
  highlights: [
    "Trekking a dorso di dromedario sulle dune dorate dell'Erg Chebbi al tramonto",
    "Notte in accampamento di lusso con musica e tamburi berberi sotto le stelle",
    "Incontro culturale con le famiglie nomadi e musica gnawa a Khamlia",
    "Visita di Ifrane e della foresta di cedri di Azrou con le scimmie barbaresche",
    "Splendidi panorami sull'oasi e sui canyon della Valle dello Ziz"
  ],
  inclusions: [
    "Veicolo privato 4×4 o minivan con aria condizionata",
    "Autista/guida professionale locale per l'intero viaggio",
    "Carburante, pedaggi e spese operative del veicolo",
    "1 notte in hotel a Merzouga e 1 notte in campo tendato berbero di lusso",
    "Colazioni e cene incluse a Merzouga e all'accampamento",
    "Trekking in dromedario tra le dune di Merzouga con assistenza completa"
  ],
  exclusions: [
    "Pranzi e bevande",
    "Voli aerei nazionali e internazionali",
    "Spese personali e souvenir",
    "Mance e gratifiche"
  ],
  itinerary: [
    {
      "day": "Giorno 1",
      "title": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Deserto di Merzouga",
      "content": "Il tuo tour di 3 giorni nel Sahara inizia con il prelievo al mattino presto presso il tuo alloggio o l'aeroporto di Fes. Viaggerai verso sud attraverso Imouzzer fino a Ifrane, rinomata per l'architettura alpina e il clima fresco montano, tanto da essere definita la 'Svizzera del Marocco'. Raggiungerai poi la maestosa Foresta di Cedri di Azrou, dove potrai osservare da vicino le simpatiche scimmie barbaresche. Proseguirai attraverso il Medio Atlante con sosta per il pranzo a Midelt, per poi ammirare lo spettacolare mutare del paesaggio lungo le gole e i palmeti infiniti della Valle dello Ziz. Nel pomeriggio giungerai a Merzouga per salire a dorso di dromedario verso il cuore delle dune dell'Erg Chebbi: ti godrai un tramonto memorabile prima di raggiungere l'accampamento di lusso per una tipica cena berbera con musica attorno al falò."
    },
    {
      "day": "Giorno 2",
      "title": "Esplorazione di Merzouga – Famiglie Nomadi – Khamlia – Lago di Merzouga – Erg Chebbi – Oasi",
      "content": "Sveglia all'alba per contemplare lo spettacolo del sole che sorge sulle dune di sabbia dorata. Dopo la prima colazione, rientrerai a Merzouga per iniziare un'intera giornata in fuoristrada alla scoperta della regione desertica. Visiterai un'antica miniera di kohl, incontrerai famiglie di nomadi berberi nelle loro tradizionali tende tessute a mano per gustare un tè alla menta e raggiungerai il villaggio di Khamlia per assistere a un'emozionante esibizione di musica gnawa. Pranzo libero (consigliata la deliziosa pizza berbera 'madfouna'). Nel pomeriggio passeggerai nell'oasi di Hassi Labied e visiterai il lago stagionale di Merzouga, spesso popolato da fenicotteri rosa. Cena e pernottamento in hotel ai piedi delle dune."
    },
    {
      "day": "Giorno 3",
      "title": "Merzouga – Rissani – Erfoud – Valle dello Ziz – Ifrane – Fes",
      "content": "Dopo la colazione in hotel lascerai il deserto per visitare la storica cittadina di Rissani, antica culla della dinastia Alawita, dove passeggerai nel vivace mercato tradizionale. Proseguirai verso Erfoud per scoprire i laboratori artigianali specializzati nella lavorazione del marmo fossile. Risalirai quindi il corso del fiume Ziz e la suggestiva Valle dello Ziz con soste panoramiche, attraversando nuovamente la foresta di cedri e Ifrane prima di giungere a Fes nel tardo pomeriggio con trasferimento al tuo riad o in aeroporto."
    }
  ],
  mapDestinations: [
    {
      "number": 1,
      "name": "Fes",
      "day": "Giorno 1",
      "subtitle": "Fes – Ifrane – Foresta di Cedri – Midelt – Valle dello Ziz – Merzouga",
      "desc": "Partenza da Fes attraverso Ifrane, la foresta dei cedri e la Valle dello Ziz verso il campo di Erg Chebbi."
    },
    {
      "number": 2,
      "name": "Esplorazione di Merzouga",
      "day": "Giorno 2",
      "subtitle": "Regione di Merzouga – Nomadi – Khamlia – Lago – Oasi",
      "desc": "Giornata intera in 4×4 alla scoperta di Merzouga: miniere storiche, nomadi, villaggio Gnawa e oasi."
    },
    {
      "number": 3,
      "name": "Merzouga a Fes",
      "day": "Giorno 3",
      "subtitle": "Merzouga – Rissani – Erfoud – Valle dello Ziz – Ifrane – Fes",
      "desc": "Visita del souk di Rissani, laboratori di fossili a Erfoud e rientro a Fes attraverso il Medio Atlante."
    }
  ],
  galleryImages: [
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_1.webp",
      "cap": "Concerie Chouara",
      "alt": "Vasche di tintura del cuoio e lavatoi in pietra presso la conceria Chouara a Fes"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_10.webp",
      "cap": "Dune dell'Erg Chebbi",
      "alt": "Vista panoramica delle dune arancioni che si estendono verso l'orizzonte nell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_2.webp",
      "cap": "Scimmia barbaresca",
      "alt": "Scimmia barbaresca che riposa su un ramo di cedro nella foresta del Medio Atlante"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_4.webp",
      "cap": "Madrasa storica di Fes",
      "alt": "Dettagli scolpiti in legno di cedro e stucchi in una madrasa medievale di Fes"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_5.webp",
      "cap": "Dune di Merzouga",
      "alt": "Dune dorate ondulate e cielo azzurro nel deserto di Merzouga"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_6.webp",
      "cap": "Tramonto a Erg Chebbi",
      "alt": "Tramonto che proietta calde ombre dorate sulle dune dell'Erg Chebbi"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_8.webp",
      "cap": "Paesaggio della Valle dello Ziz",
      "alt": "Paesaggio desertico con acacie e montagne sullo sfondo lungo la Valle dello Ziz"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_9.webp",
      "cap": "Campo tendato berbero",
      "alt": "Tradizionale accampamento nomade berbero nel deserto del Sahara nella luce del crepuscolo"
    },
    {
      "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/hero_2.webp",
      "cap": "Alba a Merzouga",
      "alt": "Vaste dune desertiche di Merzouga illuminate dalla luce dorata del mattino"
    }
  ],
  faqs: [
    {
      "question": "Questo tour è privato o condiviso?",
      "answer": "È un tour completamente privato: auto, autista ed escursioni sono a vostra disposizione esclusiva, con la libertà di concordare pause e soste fotografiche."
    },
    {
      "question": "Quanto dura il trekking in dromedario e quali alternative ci sono?",
      "answer": "La cavalcata dura circa 45-75 minuti. Chi preferisce può raggiungere comodamente il campo tendato a bordo di un 4×4 o noleggiare quad con piccolo supplemento."
    },
    {
      "question": "Quali sono i servizi inclusi nell'accampamento nel deserto?",
      "answer": "L'accampamento di lusso dispone di tende private provviste di bagno con wc, doccia con acqua calda, veri letti ed elettricità."
    },
    {
      "question": "Dove avvengono il prelievo e il rientro a Fes?",
      "answer": "Verremo a prenderti direttamente al tuo hotel o riad a Fes o all'aeroporto, riaccompagnandoti nello stesso luogo alla fine del viaggio."
    },
    {
      "question": "Quale mezzo di trasporto viene impiegato?",
      "answer": "Utilizziamo veicoli 4×4 moderni e climatizzati oppure minivan spaziosi e confortevoli, ideali per i lunghi tragitti in totale relax."
    },
    {
      "question": "È possibile soddisfare esigenze alimentari particolari?",
      "answer": "Certamente: piatti vegetariani, senza glutine o adatti ad altre allergie possono essere predisposti segnalandocelo in anticipo al momento della prenotazione."
    },
    {
      "question": "Il tour è indicato per bambini e anziani?",
      "answer": "Sì, è un itinerario adatto a tutte le fasce d'età. Il tragitto tra Fes e Merzouga dura circa 7 ore complessive ed è scandito da diverse soste panoramiche."
    },
    {
      "question": "Qual è il periodo dell'anno migliore per partire?",
      "answer": "I mesi primaverili e autunnali offrono le condizioni climatiche più piacevoli sia sulle montagne che nel deserto. Anche l'inverno è splendido per visitare le dune."
    }
  ]
};

// Execute saves
saveTour("2-day-zagora-desert-tour-from-marrakech", tour37_es, tour37_it);
saveTour("3-day-morocco-desert-tour-from-marrakech", tour38_es, tour38_it);
saveTour("3-day-sahara-desert-tour-from-fes", tour39_es, tour39_it);
