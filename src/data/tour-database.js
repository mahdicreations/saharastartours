/* --- SAHARA STAR TOURS - 29 PROGRAM DATABASE WITH DETAILED DAY-BY-DAY RICH COPY --- */

export const tourDatabase = {
  // =========================================================================
  // === 1. DESERT TOURS (14 PROGRAMS) ===
  // =========================================================================

  "9-day-authentic": {
    title: "9 Day Authentic Morocco Tour",
    category: "Desert Tours",
    duration: "9 Days / 8 Nights",
    rating: "4.9 (78 reviews)",
    price: "$1,120",
    image: "/assets/tour_9day_authentic.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Chefchaouen" },
        { name: "Volubilis" },
        { name: "Fes" },
        { name: "Midelt" },
        { name: "Merzouga" },
        { name: "Ouarzazate" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      {
        day: "Day 1",
        title: "Casablanca Arrival & Coastal Rest",
        desc: "Marhaban! Welcome to Morocco. Upon landing at Casablanca Mohammed V International Airport, you will be warmly greeted by your private expert driver-guide who will transfer you in a luxury air-conditioned vehicle to your premium oceanfront hotel. Depending on your arrival flight timing, enjoy a peaceful walk along the scenic oceanfront Corniche, taking in the crisp Atlantic breeze, before settling in for a quiet boutique dinner and resting up for your grand Moroccan expedition."
      },
      {
        day: "Day 2",
        title: "Hassan II Mosque & Capital City Rabat",
        desc: "Embark on a guided tour of the iconic Hassan II Mosque, a masterwork of Moroccan zellige and woodcraft boasting the second tallest minaret in the world, sitting majestically over the ocean waves. In the afternoon, we drive to the administrative capital of Rabat. Explore the ancient royal Kasbah of the Udayas, stroll through the vibrant Andalusian gardens, and marvel at the historic Mausoleum of Mohammed V and the towering unfinished Hassan Tower."
      },
      {
        day: "Day 3",
        title: "Rabat to Blue-Washed Chefchaouen",
        desc: "Depart Rabat and head north into the majestic Rif Mountains. Watch the landscape transform as you approach the mystical blue city of Chefchaouen. Tucked away beneath towering peaks, this serene blue fortress city feels like another world. Check into a beautiful boutique zellige Riad, and spend the evening wandering the dreamy, glowing, cobalt-cobbled pathways, discovering secret arches, local craft shops, and relaxing in the lively Outa el-Hammam square."
      },
      {
        day: "Day 4",
        title: "Chefchaouen to Fes via Roman Ruins & Meknes",
        desc: "Say goodbye to Chefchaouen and drive south to the UNESCO-listed Roman ruins of Volubilis. Settle in for a guided tour of complex mosaics and arches dating back to the 3rd century BC. Next, visit the nearby imperial city of Meknes, stopping to marvel at the giant Bab Mansour gate and the royal granaries, before completing the drive to the ancient intellectual capital of Fes, checking into a gorgeous historic medina palace Riad."
      },
      {
        day: "Day 5",
        title: "Fes Medina Secrets & Tanneries Exploration",
        desc: "Step back in time as you embark on a full-day guided walking tour of Fes El Bali, the largest active medieval city in the world. Wind through narrow spice souks, explore the historic 9th-century Al-Qarawiyyin University, and stand in awe of the intricate stucco carving inside Bou Inania Madrasa. Visit the iconic Chouara Leather Tannery, watching artisans work raw hides inside clay vats using centuries-old natural dyeing methods."
      },
      {
        day: "Day 6",
        title: "Fes to Midelt via Cedar Forests & wild Apes",
        desc: "Begin your journey south toward the high desert. Climb through the Middle Atlas foothills, stopping in Ifrane, often called the 'Switzerland of Morocco' due to its alpine chalets and clean streets. Traverse the expansive cedar forests of Azrou, where you can meet and feed native Barbary macaques playing among the trees. Arrive in the quiet mountain town of Midelt, famous for its apple orchards and mineral formations, for a restful night."
      },
      {
        day: "Day 7",
        title: "Midelt to Sahara Desert Dunes & Sunset Camel Safari",
        desc: "Travel past the spectacular Ziz Gorges, watching green date palm oases expand against the red clay earth. Settle in as we reach Merzouga, the gateway to the Sahara. Mount your camel and trek across the glowing, wind-swept golden dunes of Erg Chebbi as the sun dips beneath the horizon. Arrive at a luxury glamping camp, enjoy a rich candle-lit three-course Berber feast, and gather around the bonfire for traditional drums under a sky brilliant with stars."
      },
      {
        day: "Day 8",
        title: "Merzouga to Ouarzazate via Todra Gorges",
        desc: "Witness a spectacular Saharan sunrise over the dunes before enjoying a hot traditional breakfast. Depart the desert, driving past ancient underground irrigation canals to the breathtaking Todra Gorges. Walk beneath vertical rock walls climbing 300 meters above a crystal-clear mountain stream. In the afternoon, drive along the legendary Road of a Thousand Kasbahs, past Dades Valley rose fields, arriving in the Hollywood of Morocco, Ouarzazate."
      },
      {
        day: "Day 9",
        title: "Ait Benhaddou Kasbah to Marrakech",
        desc: "Tour the famous Ait Benhaddou Kasbah, a spectacular mud-brick UNESCO fortress that served as the backdrop for iconic films like Gladiator and Lawrence of Arabia. Cross the High Atlas Mountains via the panoramic Tizi n'Tichka pass (2,260m elevation), taking in jaw-dropping views of red clay Berber villages clinging to steep cliffs, concluding your epic Moroccan adventure in the red city of Marrakech by late afternoon."
      }
    ],
    included: ["AC premium minivan transport", "Licensed driver/guide", "8 Nights in 4/5-star boutique Riads/Camp", "Daily breakfast", "Gourmet desert dinners", "Sunset camel trek safari", "Medina local guides in Fes & Rabat"],
    excluded: ["Lunches and city dinners", "Personal monument entry tickets", "Driver and guide tips", "Baggage porterage fees"]
  },

  "16-day-casablanca": {
    title: "16 Days Morocco Tour from Casablanca",
    category: "Desert Tours",
    duration: "16 Days / 15 Nights",
    rating: "4.9 (112 reviews)",
    price: "$1,890",
    image: "/assets/tour_16day_casablanca.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Tangier" },
        { name: "Chefchaouen" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Dades Gorges" },
        { name: "Marrakech" },
        { name: "Essaouira" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Atlantic View", desc: "Private airport pickup and transfer to your luxury beachfront hotel. Relax and unwind as you acclimate to the beautiful Mediterranean climate, enjoying a fresh seafood dinner at the port harbor." },
      { day: "Day 2", title: "Casablanca Hassan II Mosque to Rabat Capital", desc: "Tour the breathtaking Hassan II Mosque sitting directly over the Atlantic Ocean waves. In the afternoon, take a scenic drive to the capital city of Rabat to explore the historic Hassan Tower and Mausoleum." },
      { day: "Day 3", title: "Rabat to Coastal Tangier via Asilah", desc: "Drive north along the scenic Atlantic coastline, stopping in the charming whitewashed art-filled town of Asilah. Continue past coastal cliffs to the legendary international gateway of Tangier, where the Mediterranean meets the Atlantic." },
      { day: "Day 4", title: "Tangier City Tour & Cap Spartel", desc: "Explore the legendary Caves of Hercules and Cap Spartel lighthouse. Wander the labyrinth pathways of Tangier's old Kasbah, overlooking the Gibraltar Strait, and visit the historic American Legation museum." },
      { day: "Day 5", title: "Tangier to Blue-Washed Chefchaouen", desc: "Drive past the dramatic limestone peaks of the Rif Mountains to the dreamy blue-painted town of Chefchaouen. Check into your zellige-trimmed luxury Riad and enjoy a relaxing sunset walk." },
      { day: "Day 6", title: "Chefchaouen Medina Walking Tour", desc: "Wander the dreamy blue alleys of the medina, discovering local weaving cooperatives, hidden Andalusian gardens, and climbing up to the Spanish Mosque for a panoramic sunset view over the valley." },
      { day: "Day 7", title: "Chefchaouen to Fes via Roman Ruins", desc: "Depart the Rif mountains, stopping to tour the ancient Roman ruins of Volubilis and the historic gates of imperial Meknes. Check into a majestic medieval palace Riad inside the Fes medina." },
      { day: "Day 8", title: "Fes Guided Medina History Tour", desc: "Explore Fes El Bali medina, a UNESCO site with over 9,000 alleys. Visit the 9th-century Al-Qarawiyyin University, Bou Inania Madrasa zellige work, and the royal palace gates." },
      { day: "Day 9", title: "Fes Historical Palaces & Cooking Class", desc: "Discover historic Jewish heritage at the Mellah. Settle into a traditional hands-on Moroccan cooking class inside a boutique Riad, learning to roll couscous and prepare slow-cooked lamb tagines." },
      { day: "Day 10", title: "Fes to Midelt Cedar Forests", desc: "Cross the Middle Atlas ranges, touring the alpine town of Ifrane and meeting native Barbary apes in the cedar forests of Azrou. Settle in for a peaceful evening in the quiet mountain town of Midelt." },
      { day: "Day 11", title: "Midelt to Sahara Desert Dunes", desc: "Drive through the spectacular palm oases of the Ziz Valley, reaching the golden sands of Merzouga. Mount your camel for a scenic sunset trek into the heart of the Erg Chebbi luxury camp." },
      { day: "Day 12", title: "Sahara Off-Road Nomad Safari", desc: "Spend a full day exploring the desert. Visit nomadic families in woolen tents, listen to spiritual Gnawa musicians in Khamlia, eat delicious Berber pizza, and sleep under bright desert stars." },
      { day: "Day 13", title: "Merzouga to Dades Gorges via Todra", desc: "Witness sunrise over the dunes. Walk beneath vertical cliffs at Todra Gorge and wind past strange geological rock formations to your panoramic luxury stone Riad in the Dades Gorges." },
      { day: "Day 14", title: "Dades Valley to Red Marrakech", desc: "Explore Ait Benhaddou mud-brick Kasbah, then cross the High Atlas peaks via Tizi n'Tichka pass. Arrive in Marrakech and enjoy the energetic street performers at Jemaa el-Fnaa square." },
      { day: "Day 15", title: "Marrakech Medina Secrets Guided Tour", desc: "Tour the beautiful Bahia Palace, Saadian Tombs, and towering Koutoubia Mosque. Stroll Majorelle's cobalt blue pathways and shop for leather, brass, and spices inside colorful craft souks." },
      { day: "Day 16", title: "Essaouira Atlantic Port to Casablanca Departure", desc: "Depart to Essaouira coastal town to tour old Portuguese sea fortress walls. Settle in for fresh harbor seafood before transferring back to Casablanca airport for your return flight home." }
    ],
    included: ["Mercedes luxury transport", "15 Nights in Premium Riads/Luxury Camp", "Daily breakfast & gourmet dinners", "Certified local guides in every city", "Traditional cooking class", "Sunset camel safari", "Airport transfers"],
    excluded: ["Lunches and personal snacks", "Monument entry tickets", "Shopping and tips"]
  },

  "12-day-desert": {
    title: "Private 12 Days Trip To Desert & Marrakech",
    category: "Desert Tours",
    duration: "12 Days / 11 Nights",
    rating: "4.8 (85 reviews)",
    price: "$1,450",
    image: "/assets/tour_12day_desert.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Fes" },
        { name: "Midelt" },
        { name: "Merzouga" },
        { name: "Dades Gorges" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Oceanfront Rest", desc: "Upon arrival, your private driver will transfer you to your beachfront hotel. Rest up and enjoy the beautiful views of the Hassan II Mosque standing over the Atlantic ocean." },
      { day: "Day 2", title: "Casablanca Mosque to Capital Rabat", desc: "Tour Hassan II Mosque, a masterwork of Moroccan zellige and cedarwood, then drive to the imperial capital of Rabat. Explore the Udayas Kasbah Andalusian gardens and Hassan Tower." },
      { day: "Day 3", title: "Rabat to Imperial Fes", desc: "Drive east past olive groves, visiting Meknes Bab Mansour gate and the ancient Roman ruins of Volubilis. Arrive in medieval Fes and check into a premium zellige-walled medina Riad." },
      { day: "Day 4", title: "Fes Ancient Medina Guided Tour", desc: "Explore medieval Fes El Bali medina, visiting the Bou Inania Madrasa, Al-Qarawiyyin mosque, and the historic Chouara Leather Tannery to watch traditional natural tanning vats." },
      { day: "Day 5", title: "Fes to Midelt Cedar Forests", desc: "Travel south past Ifrane town and meet wild apes in the cedar forests of Azrou. Climb past the Middle Atlas ranges to reach the apple orchards of Midelt mountain town." },
      { day: "Day 6", title: "Midelt to Sahara Desert Dunes", desc: "Winding scenic drive past Ziz Valley gorges, reaching the edge of Merzouga. Mount your camel caravan to trek across golden dunes under a warm Sahara sunset to a luxury camp." },
      { day: "Day 7", title: "Sahara Desert Off-Road Safari", desc: "Discover nomadic life, meet families living in traditional wool tents, listen to Gnawa drum music in Khamlia village, eat Moroccan Madfouna, and enjoy bonfire stories under the stars." },
      { day: "Day 8", title: "Merzouga Dunes to Todra Gorges", desc: "Watch dawn rise over the dunes, then drive past ancient irrigation canals to walk inside the vertical rock walls of Todra Gorges canyon, climbing 300 meters above a fresh stream." },
      { day: "Day 9", title: "Todra to Dades Valley Gorges", desc: "Drive along the Road of a Thousand Kasbahs past Dades rose fields, winding past strange rock formations and overnighting inside a panoramic stone Riad in the Dades Gorges." },
      { day: "Day 10", title: "Dades Gorges to Red Marrakech", desc: "Tour the mud-brick Ait Benhaddou Kasbah, Gladiator film set, and cross high Atlas mountains panoramic Tizi n'Tichka pass, checking into a boutique Riad in Marrakech." },
      { day: "Day 11", title: "Marrakech Palace Medina Guided Tour", desc: "Tour Bahia Palace mosaic courtyards, Saadian Tombs marble carvings, and climb past spice souks to Jemaa el-Fnaa square to see snake charmers, acrobats, and food stalls." },
      { day: "Day 12", title: "Marrakech Gardens & Departure", desc: "Stroll Majorelle's cobalt blue paths, then private transfer back to Casablanca airport for your return flight home." }
    ],
    included: ["AC 4x4 Off-road transporter", "11 Nights in boutique Riads & Camp", "Daily breakfast & dinners", "Sunset camel safari", "Licensed local medina guides", "Airport transfers"],
    excluded: ["City dinners & lunches", "Monument tickets", "Tips and personal shopping"]
  },

  "12-day-casablanca": {
    title: "Best 12 Days Morocco Tour From Casablanca",
    category: "Desert Tours",
    duration: "12 Days / 11 Nights",
    rating: "4.9 (64 reviews)",
    price: "$1,490",
    image: "/assets/tour_12day_casablanca.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Chefchaouen" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Seaside Rest", desc: "Private airport pickup and check-in to your luxury hotel. Enjoy a fresh seafood dinner along the Atlantic coast and prepare for your spectacular Moroccan tour." },
      { day: "Day 2", title: "Casablanca Hassan II Mosque to Rabat", desc: "Tour the giant Hassan II Mosque sitting on the sea. Drive to Rabat capital to explore Udayas Kasbah, Andalusian gardens, and the royal Hassan Tower." },
      { day: "Day 3", title: "Rabat to Blue-Washed Chefchaouen", desc: "Winding drive through the green Rif mountain valleys to blue Chefchaouen. Check into your zellige Riad and stroll the cobalt paths." },
      { day: "Day 4", title: "Chefchaouen Medina Walking Tour", desc: "Discover historic fortress walls, colorful craft shops, Andalusian gardens, and climb up to the Spanish Mosque for a panoramic sunset view over the valley." },
      { day: "Day 5", title: "Chefchaouen to Fes via Volubilis Ruins", desc: "Tour the UNESCO-listed Roman ruins of Volubilis and Meknes imperial gates. Check into a beautiful zellige-trimmed palace Riad in Fes." },
      { day: "Day 6", title: "Fes Medina Secrets Guided Tour", desc: "Explore the ancient medina alleys, Bou Inania Madrasa zellige work, Chouara Leather Tannery vats, and historic Qarawiyyin mosque." },
      { day: "Day 7", title: "Fes to Midelt Cedar Forests", desc: "Cross the Middle Atlas ranges, visiting Ifrane alpine chalets and meeting Barbary apes in Azrou forests. Relax in the apple valleys of Midelt." },
      { day: "Day 8", title: "Midelt to Sahara Desert Dunes", desc: "Drive past palm oases inside the Ziz Valley to reach Merzouga. Mount your camel to trek across golden dunes under a warm Sahara sunset." },
      { day: "Day 9", title: "Sahara Off-Road Desert Safari", desc: "Visit nomadic families in wool tents, hear Gnawa music in Khamlia village, enjoy a desert 4x4 ride, and sleep under bright Sahara stars." },
      { day: "Day 10", title: "Merzouga to Dades Valley Gorges", desc: "Walk beneath vertical cliffs at Todra Gorge, cross Dades rose fields, and overnight in a premium stone Riad in Dades Gorges." },
      { day: "Day 11", title: "Dades to Red Marrakech medina", desc: "Explore Ait Benhaddou mud Kasbah and cross the High Atlas peaks via Tizi n'Tichka pass. Enjoy the street performers at Jemaa el-Fnaa square." },
      { day: "Day 12", title: "Marrakech Palace Tour & Departure", desc: "Tour Bahia Palace zellige courtyards and Majorelle blue paths before private transfer to Casablanca airport for departures." }
    ],
    included: ["AC premium minivan transport", "11 Nights inside boutique luxury Riads & Camp", "Daily breakfast & gourmet dinners", "Certified local medina guides", "Sunset camel trek safari", "Airport transfers"],
    excluded: ["City lunches & monument tickets", "Tips and personal shopping"]
  },

  "8-day-casablanca": {
    title: "Ideal Morocco 8 Days Itinerary Tour from Casablanca",
    category: "Desert Tours",
    duration: "8 Days / 7 Nights",
    rating: "4.8 (91 reviews)",
    price: "$980",
    image: "/assets/tour_8day_casablanca.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca to Rabat Capital", desc: "Welcome to Morocco! Private airport pickup and tour of the seaside Hassan II Mosque, followed by a scenic drive to capital Rabat." },
      { day: "Day 2", title: "Rabat to Fes Imperial City", desc: "Wander the beautiful Andalusian gardens of Udayas Kasbah, see the Hassan Tower, and drive past Meknes gates to Fes medina." },
      { day: "Day 3", title: "Fes Ancient Medina Guided Tour", desc: "Step back in time inside Fes El Bali. Visit Chouara Leather Tannery vats, historic universities, woodworks, and spice souks." },
      { day: "Day 4", title: "Fes to Merzouga Desert Dunes", desc: "Cross the Middle Atlas cedar forests, meet Barbary apes in Azrou, travel past green Ziz oases to reach the Sahara Dunes." },
      { day: "Day 5", title: "Sahara Desert Sunset Camel Trek", desc: "Mount your camel and trek Erg Chebbi dunes under a warm golden sunset. Stay inside a high-end luxury glamping camp." },
      { day: "Day 6", title: "Merzouga Dunes to Todra Gorges", desc: "Wake up for sunset over dunes, walk beneath the vertical rock cliffs at Todra Gorge, and overnight in the rose valley of Dades." },
      { day: "Day 7", title: "Dades Rose Valley to Red Marrakech", desc: "Explore Ait Benhaddou UNESCO mud Kasbah, cross high Atlas mountains via Tizi n'Tichka pass, and check into your Marrakech Riad." },
      { day: "Day 8", title: "Marrakech Palaces to Casablanca Departure", desc: "Tour Bahia Palace courtyards and Koutoubia mosque before your private transfer to Casablanca airport for your return flight home." }
    ],
    included: ["AC premium transporter", "7 Nights inside luxury Riads & Camp", "Daily breakfast & dinners", "Sunset camel trek safari", "Certified medina guides", "Airport private transfers"],
    excluded: ["Monument tickets", "Lunches", "Tips"]
  },

  "9-day-desert-imperial": {
    title: "Morocco itinerary 9 days, desert & imperial cities",
    category: "Desert Tours",
    duration: "9 Days / 8 Nights",
    rating: "4.9 (53 reviews)",
    price: "$1,150",
    image: "/assets/tour_9day_imperial.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Dades Valley" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Airport Pickup & Rest", desc: "Welcome! Airport pick-up and check-in to a luxury hotel. Spend your afternoon wandering the coastal Corniche and enjoying fresh seafood." },
      { day: "Day 2", title: "Casablanca Mosque to Capital Rabat", desc: "Tour the majestic seaside Hassan II Mosque, then drive to Rabat. Explore Andalusian gardens at Kasbah Udayas and Hassan Tower ruins." },
      { day: "Day 3", title: "Rabat to Fes Imperial Medina", desc: "Drive past Meknes imperial gates and Roman Volubilis ruins. Arrive in medieval Fes and check into a beautiful medina palace Riad." },
      { day: "Day 4", title: "Fes Medina Secrets Guided Tour", desc: "Explore Chouara Leather Tannery, ancient Bou Inania Madrasa zellige work, historic spice souks, and Al-Qarawiyyin mosque." },
      { day: "Day 5", title: "Fes to Midelt Cedar Forests", desc: "Travel south across Atlas forests, meeting Barbary apes in Azrou. Settle inside a restful mountain hotel in the apple town of Midelt." },
      { day: "Day 6", title: "Midelt past Ziz Valley to Sahara Dunes", desc: "Drive along winding Ziz palm canyons, reaching Merzouga. Mount your camel caravan to trek across golden dunes to a luxury glamping camp." },
      { day: "Day 7", title: "Sahara Dunes to Todra Gorges", desc: "Catch sunrise over dunes, drive past ancient irrigation canals, walk inside vertical Todra Gorges, and relax in Dades rose valleys." },
      { day: "Day 8", title: "Dades Valley Kasbah to Marrakech", desc: "Tour Ait Benhaddou mud Kasbah and cross High Atlas peaks via Tizi n'Tichka pass. Settle inside a boutique Riad in Marrakech medina." },
      { day: "Day 9", title: "Marrakech Palaces & Departure Transfer", desc: "Tour Bahia Palace courtyards, shop spice souks, and private transfer to Casablanca airport for your return flight home." }
    ],
    included: ["AC minivan transport", "8 Nights inside premium luxury Riads", "Daily breakfast & dinners", "Certified medina guides", "Sunset camel trek safari", "Airport transfers"],
    excluded: ["City lunches & dinners", "Monument tickets", "Tips"]
  },

  "4-day-marrakech-desert": {
    title: "Ideal 4 Days Marrakech Desert Tour to Merzouga: Morocco Trip",
    category: "Desert Tours",
    duration: "4 Days / 3 Nights",
    rating: "4.9 (182 reviews)",
    price: "$540",
    image: "/assets/tour_4day_marrakech.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Ait Benhaddou" },
        { name: "Dades Gorges" },
        { name: "Merzouga" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Marrakech to Dades Valley Gorges", desc: "Depart Marrakech past High Atlas peaks via Tizi n'Tichka pass (2,260m elevation). Settle in for lunch at Ait Benhaddou Kasbah, a mud-brick UNESCO fortress that served as a backdrop for Gladiator, Game of Thrones, and Lawrence of Arabia. Wind past Ouarzazate film studios into Dades Gorges and dine inside a luxury stone Riad." },
      { day: "Day 2", title: "Dades Gorges to Merzouga Dunes Safari", desc: "Walk beneath vertical rock walls at Todra Gorges—a narrow canyon climbing 300 meters above a stream. In the afternoon, cross the dry valleys of Erfoud into the majestic Merzouga. Mount your camel and trek across golden dunes under a glowing sunset to a high-end luxury glamping camp for a rich Berber dinner and fireside drums." },
      { day: "Day 3", title: "Nomadic Culture & Sahara 4x4 Safari", desc: "Sunrise over dunes, followed by a full 4x4 safari expedition. Travel along ancient rally tracks to meet local nomadic families living in woolen tents, learn their custom ways, and share mint tea. Later, enjoy spiritual live Gnawa music in the village of Khamlia, eat delicious local Berber pizza, and spend a second night under Sahara lanterns." },
      { day: "Day 4", title: "Merzouga back to Red Marrakech", desc: "Wake up to fresh desert air and take in a final sunrise. Journey back through Draa Valley palm groves—the longest valley in Morocco—and past anti-Atlas ranges. Settle in for lunch in Ouarzazate, complete the drive over high Atlas mountains, and return to Marrakech by evening where your epic desert voyage concludes." }
    ],
    included: ["Premium AC minivan transport", "Licensed local driver/guide", "1 Night Dades luxury Riad (Half-board)", "2 Nights High-end Sahara glamping camp", "Sunset camel trek safari", "All breakfasts and gourmet dinners", "4x4 Desert Nomad Safari"],
    excluded: ["Daily lunches", "Monument entry tickets", "Driver & guide tips"]
  },

  "6-day-desert": {
    title: "Morocco Itinerary 6 Days Desert Tour from Casablanca to Marrakech",
    category: "Desert Tours",
    duration: "6 Days / 5 Nights",
    rating: "4.8 (71 reviews)",
    price: "$820",
    image: "/assets/tour_6day_desert.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival to Capital Rabat", desc: "Welcome to Morocco! Private airport pickup, tour of the majestic seaside Hassan II Mosque, and scenic drive to capital Rabat." },
      { day: "Day 2", title: "Rabat to Fes Imperial Medina", desc: "Wander the beautiful Andalusian gardens of Udayas Kasbah, see the Hassan Tower, and drive past Meknes gates to Fes medina." },
      { day: "Day 3", title: "Fes Ancient Medina Guided Tour", desc: "Step back in time inside Fes El Bali. Visit Chouara Leather Tannery vats, historic universities, woodworks, and spice souks." },
      { day: "Day 4", title: "Fes past Cedar Forests to Sahara Dunes", desc: "Cross the Middle Atlas cedar forests, meet Barbary apes in Azrou, travel past green Ziz oases to reach the Sahara Dunes." },
      { day: "Day 5", title: "Sahara Desert Sunset Camel Trek", desc: "Mount your camel and trek Erg Chebbi dunes under a warm golden sunset. Stay inside a high-end luxury glamping camp." },
      { day: "Day 6", title: "Merzouga to Red Marrakech medina", desc: "Wake up for sunset over dunes, walk beneath the vertical rock cliffs at Todra Gorge, and cross High Atlas mountains to Marrakech." }
    ],
    included: ["AC premium transporter", "5 Nights inside luxury Riads & Camp", "Daily breakfast & dinners", "Sunset camel trek safari", "Certified medina guides", "Airport private transfers"],
    excluded: ["Monument tickets", "Lunches", "Tips"]
  },

  "3-day-marrakech-fes": {
    title: "3 Days Desert Tour From Marrakech To Fes",
    category: "Desert Tours",
    duration: "3 Days / 2 Nights",
    rating: "4.9 (132 reviews)",
    price: "$450",
    image: "/assets/tour_3day_marrakech.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Dades Gorges" },
        { name: "Merzouga" },
        { name: "Fes" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Marrakech to Dades Valley Gorges", desc: "Cross High Atlas peaks Tizi n'Tichka pass (2,260m elevation). Settle in for lunch at Ait Benhaddou mud Kasbah film set, then drive past Ouarzazate into Dades Gorges and dine inside a luxury Riad." },
      { day: "Day 2", title: "Dades Gorges to Merzouga Desert Camp", desc: "Walk beneath vertical cliffs at Todra Gorges canyon stream, then cross Erfoud past palm oases to Merzouga. Mount your camel and trek golden dunes under a glowing sunset to a luxury camp." },
      { day: "Day 3", title: "Merzouga Dunes to Fes Imperial Medina", desc: "Witness sunrise over dunes, cross Ziz green oases valleys, meet wild monkeys in Atlas cedar forests, and arrive in the ancient medina of Fes by late evening." }
    ],
    included: ["AC minivan transport", "Expert driver/guide", "1 Night Dades luxury Riad (Half-board)", "1 Night High-end Sahara camp", "Sunset camel trek safari", "All breakfasts and gourmet dinners"],
    excluded: ["Daily lunches", "Monument entry tickets", "Tips"]
  },

  "12-day-grand": {
    title: "Grand Itinerary 12 Days Morocco Tour From Casablanca",
    category: "Desert Tours",
    duration: "12 Days / 11 Nights",
    rating: "4.9 (88 reviews)",
    price: "$1,590",
    image: "/assets/tour_12day_grand.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Chefchaouen" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Seaside Rest", desc: "Private airport pickup and check-in to your luxury hotel. Enjoy a fresh seafood dinner along the Atlantic coast and prepare for your spectacular Moroccan tour." },
      { day: "Day 2", title: "Casablanca Hassan II Mosque to Rabat", desc: "Tour the giant Hassan II Mosque sitting on the sea. Drive to Rabat capital to explore Udayas Kasbah, Andalusian gardens, and the royal Hassan Tower." },
      { day: "Day 3", title: "Rabat to Blue-Washed Chefchaouen", desc: "Winding drive through the green Rif mountain valleys to blue Chefchaouen. Check into your zellige Riad and stroll the cobalt paths." },
      { day: "Day 4", title: "Chefchaouen Medina Walking Tour", desc: "Discover historic fortress walls, colorful craft shops, Andalusian gardens, and climb up to the Spanish Mosque for a panoramic sunset view over the valley." },
      { day: "Day 5", title: "Chefchaouen to Fes via Volubilis Ruins", desc: "Tour the UNESCO-listed Roman ruins of Volubilis and Meknes imperial gates. Check into a beautiful zellige-trimmed palace Riad in Fes." },
      { day: "Day 6", title: "Fes Medina Secrets Guided Tour", desc: "Explore the ancient medina alleys, Bou Inania Madrasa zellige work, Chouara Leather Tannery vats, and historic Qarawiyyin mosque." },
      { day: "Day 7", title: "Fes to Midelt Cedar Forests", desc: "Cross the Middle Atlas ranges, visiting Ifrane alpine chalets and meeting Barbary apes in Azrou forests. Relax in the apple valleys of Midelt." },
      { day: "Day 8", title: "Midelt to Sahara Desert Dunes", desc: "Drive past palm oases inside the Ziz Valley to reach Merzouga. Mount your camel to trek across golden dunes under a warm Sahara sunset." },
      { day: "Day 9", title: "Sahara Off-Road Desert Safari", desc: "Visit nomadic families in wool tents, hear Gnawa music in Khamlia village, enjoy a desert 4x4 ride, and sleep under bright Sahara stars." },
      { day: "Day 10", title: "Merzouga to Dades Valley Gorges", desc: "Walk beneath vertical cliffs at Todra Gorge, cross Dades rose fields, and overnight in a premium stone Riad in Dades Gorges." },
      { day: "Day 11", title: "Dades to Red Marrakech medina", desc: "Explore Ait Benhaddou mud Kasbah and cross the High Atlas peaks via Tizi n'Tichka pass. Enjoy the street performers at Jemaa el-Fnaa square." },
      { day: "Day 12", title: "Marrakech Palace Tour & Departure", desc: "Tour Bahia Palace zellige courtyards and Majorelle blue paths before private transfer to Casablanca airport for departures." }
    ],
    included: ["AC premium minivan transport", "11 Nights inside boutique luxury Riads & Camp", "Daily breakfast & gourmet dinners", "Certified local medina guides", "Sunset camel trek safari", "Airport transfers"],
    excluded: ["City lunches & monument tickets", "Tips and personal shopping"]
  },

  "10-day-casablanca": {
    title: "10 Days Casablanca Tour: Morocco Couple Tour Packages",
    category: "Desert Tours",
    duration: "10 Days / 9 Nights",
    rating: "4.9 (61 reviews)",
    price: "$1,290",
    image: "/assets/tour_10day_casablanca.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Seaside Rest", desc: "Private airport pickup and check-in to your luxury hotel. Enjoy a fresh seafood dinner along the Atlantic coast and prepare for your spectacular Moroccan tour." },
      { day: "Day 2", title: "Casablanca Hassan II Mosque to Rabat", desc: "Tour the giant Hassan II Mosque sitting on the sea. Drive to Rabat capital to explore Udayas Kasbah, Andalusian gardens, and the royal Hassan Tower." },
      { day: "Day 3", title: "Rabat to Imperial Fes", desc: "Winding drive through the green mountain valleys to Fes. Check into your zellige-trimmed palace Riad in Fes." },
      { day: "Day 4", title: "Fes Medina Secrets Guided Tour", desc: "Explore the ancient medina alleys, Bou Inania Madrasa zellige work, Chouara Leather Tannery vats, and historic Qarawiyyin mosque." },
      { day: "Day 5", title: "Fes to Midelt Cedar Forests", desc: "Cross the Middle Atlas ranges, visiting Ifrane alpine chalets and meeting Barbary apes in Azrou forests. Relax in the apple valleys of Midelt." },
      { day: "Day 6", title: "Midelt to Sahara Desert Dunes", desc: "Drive past palm oases inside the Ziz Valley to reach Merzouga. Mount your camel to trek across golden dunes under a warm Sahara sunset." },
      { day: "Day 7", title: "Sahara Off-Road Desert Safari", desc: "Visit nomadic families in wool tents, hear Gnawa music in Khamlia village, enjoy a desert 4x4 ride, and sleep under bright Sahara stars." },
      { day: "Day 8", title: "Merzouga to Dades Valley Gorges", desc: "Walk beneath vertical cliffs at Todra Gorge, cross Dades rose fields, and overnight in a premium stone Riad in Dades Gorges." },
      { day: "Day 9", title: "Dades to Red Marrakech medina", desc: "Explore Ait Benhaddou mud Kasbah and cross the High Atlas peaks via Tizi n'Tichka pass. Enjoy the street performers at Jemaa el-Fnaa square." },
      { day: "Day 10", title: "Marrakech Palace Tour & Departure", desc: "Tour Bahia Palace zellige courtyards and Majorelle blue paths before private transfer to Casablanca airport for departures." }
    ],
    included: ["AC premium minivan transport", "9 Nights inside boutique luxury Riads & Camp", "Daily breakfast & gourmet dinners", "Certified local medina guides", "Sunset camel trek safari", "Airport transfers"],
    excluded: ["City lunches & monument tickets", "Tips and personal shopping"]
  },

  "7-day-casablanca-marrakech": {
    title: "Best 7-Day Morocco Tour From Casablanca to Marrakech",
    category: "Desert Tours",
    duration: "7 Days / 6 Nights",
    rating: "4.8 (89 reviews)",
    price: "$890",
    image: "/assets/tour_7day_casablanca.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Fes" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival", desc: "Welcome to Morocco! Private airport pickup and transfer to your luxury beachfront hotel. Rest up and enjoy a fresh seafood dinner along the Atlantic coast." },
      { day: "Day 2", title: "Casablanca Mosque & Capital Rabat", desc: "Tour the breathtaking oceanfront Hassan II Mosque, followed by a scenic drive to capital Rabat. Explore Udayas Kasbah, Andalusian gardens, and Hassan Tower." },
      { day: "Day 3", title: "Rabat to Fes Imperial City", desc: "Drive past imperial Meknes gates and Roman Volubilis ruins. Arrive in medieval Fes and check into a beautiful zellige-trimmed palace Riad." },
      { day: "Day 4", title: "Fes Guided Medina Exploration", desc: "Explore Fes El Bali medina, a UNESCO site with over 9,000 alleys. Visit the 9th-century Al-Qarawiyyin University, Bou Inania Madrasa zellige, and royal tanneries." },
      { day: "Day 5", title: "Fes to Marrakech", desc: "Drive past green olive valleys and High Atlas foothills, reaching Marrakech. Settle inside your luxury Riad and enjoy sunset views." },
      { day: "Day 6", title: "Marrakech Guided Palace Tour", desc: "Tour Bahia Palace mosaic courtyards, Saadian Tombs marble carvings, and stroll spice souks before a sunset mint tea in Jemaa el-Fnaa square." },
      { day: "Day 7", title: "Marrakech Departure Transfer", desc: "Enjoy your morning at leisure for shopping, followed by private airport transfer for your return flight home." }
    ],
    included: ["AC premium transporter", "6 Nights inside boutique luxury Riads", "Daily breakfast & dinners", "Certified local guides", "Airport private transfers"],
    excluded: ["Monument tickets", "Lunches", "Tips"]
  },

  "10-day-imperial": {
    title: "10 Days Morocco Imperial Cities Tour from Casablanca",
    category: "Desert Tours",
    duration: "10 Days / 9 Nights",
    rating: "4.9 (44 reviews)",
    price: "$1,250",
    image: "/assets/tour_10day_imperial.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Chefchaouen" },
        { name: "Fes" },
        { name: "Meknes" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Seaside Rest", desc: "Private airport pickup and check-in to your luxury hotel. Enjoy a fresh seafood dinner along the Atlantic coast and prepare for your spectacular Moroccan tour." },
      { day: "Day 2", title: "Casablanca Hassan II Mosque to Rabat", desc: "Tour the giant Hassan II Mosque sitting on the sea. Drive to Rabat capital to explore Udayas Kasbah, Andalusian gardens, and the royal Hassan Tower." },
      { day: "Day 3", title: "Rabat to Blue-Washed Chefchaouen", desc: "Winding drive through the green Rif mountain valleys to blue Chefchaouen. Check into your zellige Riad and stroll the cobalt paths." },
      { day: "Day 4", title: "Chefchaouen Medina Walking Tour", desc: "Discover historic fortress walls, colorful craft shops, Andalusian gardens, and climb up to the Spanish Mosque for a panoramic sunset view over the valley." },
      { day: "Day 5", title: "Chefchaouen to Fes via Volubilis Ruins", desc: "Tour the UNESCO-listed Roman ruins of Volubilis and Meknes imperial gates. Check into a beautiful zellige-trimmed palace Riad in Fes." },
      { day: "Day 6", title: "Fes Medina Secrets Guided Tour", desc: "Explore the ancient medina alleys, Bou Inania Madrasa zellige work, Chouara Leather Tannery vats, and historic Qarawiyyin mosque." },
      { day: "Day 7", title: "Fes to Midelt Cedar Forests", desc: "Cross the Middle Atlas ranges, visiting Ifrane alpine chalets and meeting Barbary apes in Azrou forests. Relax in the apple valleys of Midelt." },
      { day: "Day 8", title: "Midelt to Sahara Desert Dunes", desc: "Drive past palm oases inside the Ziz Valley to reach Merzouga. Mount your camel to trek across golden dunes under a warm Sahara sunset." },
      { day: "Day 9", title: "Sahara Off-Road Desert Safari", desc: "Visit nomadic families in wool tents, hear Gnawa music in Khamlia village, enjoy a desert 4x4 ride, and sleep under bright Sahara stars." },
      { day: "Day 10", title: "Marrakech Palace Tour & Departure", desc: "Tour Bahia Palace zellige courtyards and Majorelle blue paths before private transfer to Casablanca airport for departures." }
    ],
    included: ["AC premium minivan transport", "9 Nights inside boutique luxury Riads & Camp", "Daily breakfast & gourmet dinners", "Certified local medina guides", "Sunset camel trek safari", "Airport transfers"],
    excluded: ["City lunches & monument tickets", "Tips and personal shopping"]
  },

  "5-day-marrakech-merzouga": {
    title: "5 Days Tour from Marrakech to Merzouga Desert",
    category: "Desert Tours",
    duration: "5 Days / 4 Nights",
    rating: "4.9 (94 reviews)",
    price: "$690",
    image: "/assets/tour_5day_merzouga.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Dades Gorges" },
        { name: "Merzouga" },
        { name: "Ouarzazate" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Marrakech to Dades Valley Gorges", desc: "Depart Marrakech past High Atlas peaks Tizi n'Tichka pass (2,260m elevation). Settle in for lunch at Ait Benhaddou mud Kasbah film set, then drive past Ouarzazate into Dades Gorges and dine inside a luxury Riad." },
      { day: "Day 2", title: "Dades Gorges to Merzouga Desert Camp", desc: "Walk beneath vertical cliffs at Todra Gorges canyon stream, then cross Erfoud past palm oases to Merzouga. Mount your camel and trek golden dunes under a glowing sunset to a luxury camp." },
      { day: "Day 3", title: "Sahara Off-Road Nomad Safari", desc: "Visit nomadic families in wool tents, hear Gnawa music in Khamlia village, enjoy a desert 4x4 ride, and sleep under bright Sahara stars." },
      { day: "Day 4", title: "Merzouga Dunes to Ouarzazate", desc: "Wake up for sunrise over dunes, walk beneath the vertical rock cliffs at Todra Gorge, and cross High Atlas mountains to Ouarzazate." },
      { day: "Day 5", title: "Ouarzazate to Marrakech", desc: "Enjoy your morning at leisure for shopping, followed by private airport transfer for your return flight home." }
    ],
    included: ["AC premium transporter", "4 Nights inside luxury Riads & Camp", "Daily breakfast & dinners", "Sunset camel trek safari", "Certified medina guides", "Airport private transfers"],
    excluded: ["Monument tickets", "Lunches", "Tips"]
  },

  // =========================================================================
  // === 2. IMPERIAL CITIES (3 PROGRAMS) ===
  // =========================================================================

  "15-day-casablanca": {
    title: "15 Days Tour from Casablanca",
    category: "Imperial Cities",
    duration: "15 Days / 14 Nights",
    rating: "4.9 (104 reviews)",
    price: "$1,790",
    image: "/assets/marrakech_riad_pool.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Chefchaouen" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Dades Valley" },
        { name: "Marrakech" },
        { name: "Essaouira" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Coastal Rest", desc: "Private airport pickup and check-in to your luxury hotel. Enjoy a fresh seafood dinner along the Atlantic coast and prepare for your spectacular Moroccan tour." },
      { day: "Day 2", title: "Casablanca Hassan II Mosque to Rabat", desc: "Tour the giant Hassan II Mosque sitting on the sea. Drive to Rabat capital to explore Udayas Kasbah, Andalusian gardens, and the royal Hassan Tower." },
      { day: "Day 3", title: "Rabat to Blue-Washed Chefchaouen", desc: "Winding drive through the green Rif mountain valleys to blue Chefchaouen. Check into your zellige Riad and stroll the cobalt paths." },
      { day: "Day 4", title: "Chefchaouen Medina Walking Tour", desc: "Discover historic fortress walls, colorful craft shops, Andalusian gardens, and climb up to the Spanish Mosque for a panoramic sunset view over the valley." },
      { day: "Day 5", title: "Chefchaouen to Fes via Volubilis Ruins", desc: "Tour the UNESCO-listed Roman ruins of Volubilis and Meknes imperial gates. Check into a beautiful zellige-trimmed palace Riad in Fes." },
      { day: "Day 6", title: "Fes Medina Secrets Guided Tour", desc: "Explore the ancient medina alleys, Bou Inania Madrasa zellige work, Chouara Leather Tannery vats, and historic Qarawiyyin mosque." },
      { day: "Day 7", title: "Fes to Midelt Cedar Forests", desc: "Cross the Middle Atlas ranges, visiting Ifrane alpine chalets and meeting Barbary apes in Azrou forests. Relax in the apple valleys of Midelt." },
      { day: "Day 8", title: "Midelt to Sahara Desert Dunes", desc: "Drive past palm oases inside the Ziz Valley to reach Merzouga. Mount your camel to trek across golden dunes under a warm Sahara sunset." },
      { day: "Day 9", title: "Sahara Off-Road Desert Safari", desc: "Visit nomadic families in wool tents, hear Gnawa music in Khamlia village, enjoy a desert 4x4 ride, and sleep under bright Sahara stars." },
      { day: "Day 10", title: "Merzouga to Dades Gorges", desc: "Wake up for sunrise over dunes, walk beneath the vertical rock cliffs at Todra Gorge, and overnight in the rose valley of Dades." },
      { day: "Day 11", title: "Dades Rose Valley to Red Marrakech", desc: "Explore Ait Benhaddou UNESCO mud Kasbah, cross high Atlas mountains via Tizi n'Tichka pass, and check into your Marrakech Riad." },
      { day: "Day 12", title: "Marrakech Palace Medina Guided Tour", desc: "Tour Bahia Palace zellige courtyards and Majorelle blue paths before private transfer to Casablanca airport for departures." },
      { day: "Day 13", title: "Marrakech to Essaouira Coastal Escape", desc: "Depart Marrakech past argan valleys, checking into Essaouira whitewashed beach Riad." },
      { day: "Day 14", title: "Essaouira Port Medina Exploration", desc: "Tour old Portuguese sea fortress walls, watch port catches, and shop woodcrafts." },
      { day: "Day 15", title: "Essaouira past Coast back to Casablanca", desc: "Enjoy your morning at leisure for shopping, followed by private airport transfer for your return flight home." }
    ],
    included: ["AC premium minivan transport", "14 Nights inside boutique luxury Riads & Camp", "Daily breakfast & gourmet dinners", "Certified local medina guides", "Sunset camel trek safari", "Airport transfers"],
    excluded: ["City lunches & monument tickets", "Tips and personal shopping"]
  },

  "13-day-casablanca": {
    title: "The Best Morocco Itinerary 13 Days Casablanca Tour",
    category: "Imperial Cities",
    duration: "13 Days / 12 Nights",
    rating: "4.9 (81 reviews)",
    price: "$1,540",
    image: "/assets/fes_medina_gate.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Fes" },
        { name: "Merzouga" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Seaside Rest", desc: "Private airport pickup and check-in to your luxury hotel. Enjoy a fresh seafood dinner along the Atlantic coast and prepare for your spectacular Moroccan tour." },
      { day: "Day 2", title: "Casablanca Hassan II Mosque to Rabat", desc: "Tour the giant Hassan II Mosque sitting on the sea. Drive to Rabat capital to explore Udayas Kasbah, Andalusian gardens, and the royal Hassan Tower." },
      { day: "Day 3", title: "Rabat to Imperial Fes", desc: "Winding drive through the green mountain valleys to Fes. Check into your zellige-trimmed palace Riad in Fes." },
      { day: "Day 4", title: "Fes Medina Secrets Guided Tour", desc: "Explore the ancient medina alleys, Bou Inania Madrasa zellige work, Chouara Leather Tannery vats, and historic Qarawiyyin mosque." },
      { day: "Day 5", title: "Fes to Midelt Cedar Forests", desc: "Cross the Middle Atlas ranges, visiting Ifrane alpine chalets and meeting Barbary apes in Azrou forests. Relax in the apple valleys of Midelt." },
      { day: "Day 6", title: "Midelt to Sahara Desert Dunes", desc: "Drive past palm oases inside the Ziz Valley to reach Merzouga. Mount your camel to trek across golden dunes under a warm Sahara sunset." },
      { day: "Day 7", title: "Sahara Off-Road Desert Safari", desc: "Visit nomadic families in wool tents, hear Gnawa music in Khamlia village, enjoy a desert 4x4 ride, and sleep under bright Sahara stars." },
      { day: "Day 8", title: "Merzouga to Dades Valley Gorges", desc: "Walk beneath vertical cliffs at Todra Gorge, cross Dades rose fields, and overnight in a premium stone Riad in Dades Gorges." },
      { day: "Day 9", title: "Dades to Red Marrakech medina", desc: "Explore Ait Benhaddou mud Kasbah and cross the High Atlas peaks via Tizi n'Tichka pass. Enjoy the street performers at Jemaa el-Fnaa square." },
      { day: "Day 10", title: "Marrakech Palace Tour & Departure", desc: "Tour Bahia Palace zellige courtyards and Majorelle blue paths before private transfer to Casablanca airport for departures." },
      { day: "Day 11", title: "Essaouira Port Medina Exploration", desc: "Tour old Portuguese sea fortress walls, watch port catches, and shop woodcrafts." },
      { day: "Day 12", title: "Essaouira past Coast back to Casablanca", desc: "Enjoy your morning at leisure for shopping, followed by private airport transfer for your return flight home." },
      { day: "Day 13", title: "Casablanca Departure Transfer", desc: "Private airport transfer for your return flight home." }
    ],
    included: ["AC premium minivan transport", "12 Nights inside boutique luxury Riads & Camp", "Daily breakfast & gourmet dinners", "Certified local medina guides", "Sunset camel trek safari", "Airport transfers"],
    excluded: ["City lunches & monument tickets", "Tips and personal shopping"]
  },

  "11-day-classic": {
    title: "11 Days Morocco Classic Tour – Private Tour Package",
    category: "Imperial Cities",
    duration: "11 Days / 10 Nights",
    rating: "4.8 (94 reviews)",
    price: "$1,350",
    image: "/assets/casablanca_gateway.png",
    map: {
      points: [
        { name: "Casablanca", start: true },
        { name: "Rabat" },
        { name: "Fes" },
        { name: "Marrakech" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Casablanca Arrival & Seaside Rest", desc: "Private airport pickup and check-in to your luxury hotel. Enjoy a fresh seafood dinner along the Atlantic coast and prepare for your spectacular Moroccan tour." },
      { day: "Day 2", title: "Casablanca Hassan II Mosque to Rabat", desc: "Tour the giant Hassan II Mosque sitting on the sea. Drive to Rabat capital to explore Udayas Kasbah, Andalusian gardens, and the royal Hassan Tower." },
      { day: "Day 3", title: "Rabat to Imperial Fes", desc: "Winding drive through the green mountain valleys to Fes. Check into your zellige-trimmed palace Riad in Fes." },
      { day: "Day 4", title: "Fes Medina Secrets Guided Tour", desc: "Explore the ancient medina alleys, Bou Inania Madrasa zellige work, Chouara Leather Tannery vats, and historic Qarawiyyin mosque." },
      { day: "Day 5", title: "Fes to Midelt Cedar Forests", desc: "Cross the Middle Atlas ranges, visiting Ifrane alpine chalets and meeting Barbary apes in Azrou forests. Relax in the apple valleys of Midelt." },
      { day: "Day 6", title: "Midelt to Sahara Desert Dunes", desc: "Drive past palm oases inside the Ziz Valley to reach Merzouga. Mount your camel to trek across golden dunes under a warm Sahara sunset." },
      { day: "Day 7", title: "Sahara Off-Road Desert Safari", desc: "Visit nomadic families in wool tents, hear Gnawa music in Khamlia village, enjoy a desert 4x4 ride, and sleep under bright Sahara stars." },
      { day: "Day 8", title: "Merzouga to Dades Valley Gorges", desc: "Walk beneath vertical cliffs at Todra Gorge, cross Dades rose fields, and overnight in a premium stone Riad in Dades Gorges." },
      { day: "Day 9", title: "Dades to Red Marrakech medina", desc: "Explore Ait Benhaddou mud Kasbah and cross the High Atlas peaks via Tizi n'Tichka pass. Enjoy the street performers at Jemaa el-Fnaa square." },
      { day: "Day 10", title: "Marrakech Palace Tour & Departure", desc: "Tour Bahia Palace zellige courtyards and Majorelle blue paths before private transfer to Casablanca airport for departures." },
      { day: "Day 11", title: "Casablanca Departure Transfer", desc: "Private airport transfer for your return flight home." }
    ],
    included: ["AC premium minivan transport", "10 Nights inside boutique luxury Riads & Camp", "Daily breakfast & gourmet dinners", "Certified local medina guides", "Sunset camel trek safari", "Airport transfers"],
    excluded: ["City lunches & monument tickets", "Tips and personal shopping"]
  },

  // =========================================================================
  // === 3. DAY TRIPS (6 PROGRAMS) ===
  // =========================================================================

  "agafay-camel-dinner": {
    title: "Agafay Desert Sunset Camel Ride & Dinner Under the Stars",
    category: "Day Trips",
    duration: "1 Day (6 Hours)",
    rating: "4.9 (244 reviews)",
    price: "$65",
    image: "/assets/camel_trek_dunes.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Agafay Desert" }
      ]
    },
    itinerary: [
      { day: "3:30 PM", title: "Marrakech Riad Pick-up", desc: "Meet your driver at your hotel or Riad in Marrakech. Climb inside your private air-conditioned vehicle and depart for the close-by Agafay stone desert (45 minutes drive), watching the city traffic fade into peaceful dry dunes." },
      { day: "5:00 PM", title: "Sunset Camel Ride in Nomad Robes", desc: "Fit traditional blue Tuareg robes (Cheche) and head scarves. Mount your camel and ride in caravan across the spectacular barren stone desert ridges under a glowing golden Sahara sunset, snapping once-in-a-lifetime sunset pictures." },
      { day: "7:00 PM", title: "Moroccan Palace Dinner in Luxury Tent", desc: "Sit down inside a beautifully lantern-lit luxury desert tent for a traditional Moroccan feast, including slow-cooked lamb tagines, fresh couscous, Moroccan salads, seasonal fruits, and warm mint tea, accompanied by live fire shows." },
      { day: "9:30 PM", title: "Fireside Gnawa Music & Marrakech Return", desc: "Gather around the crackling bonfire to hear spiritual Gnawa drum music under a starry sky before your private transfer back to your Marrakech hotel where this beautiful day trip concludes." }
    ],
    included: ["AC private vehicle pick-up & drop-off", "Professional English-speaking driver", "1-Hour sunset camel ride", "Traditional Tuareg robes", "3-Course gourmet palace dinner in desert camp", "Live fire & Gnawa music shows", "Moroccan mint tea"],
    excluded: ["Quad/Buggy hires", "Personal tips"]
  },

  "day-trip-essaouira": {
    title: "ONE DAY TRIP FROM MARRAKECH TO ESSAOUIRA MOGADOR",
    category: "Day Trips",
    duration: "1 Day (10 Hours)",
    rating: "4.8 (194 reviews)",
    price: "$45",
    image: "/assets/chefchaouen_street.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Essaouira" }
      ]
    },
    itinerary: [
      { day: "8:00 AM", title: "Depart Marrakech past Argan Valleys", desc: "Depart Marrakech and drive west past green argan trees valleys. Stop at a local women's cooperative producing pure organic cosmetic argan oils to see centuries-old hand-pressing techniques." },
      { day: "11:30 AM", title: "Essaouira Port & Sqala Fortress walls", desc: "Reach the beautiful coastal city of Essaouira (old Mogador). Settle in for a guided walk along the Portuguese sea walls (Sqala), watching giant blue Atlantic waves crash below." },
      { day: "1:00 PM", title: "Fresh Harbor Grilled Seafood Lunch", desc: "Walk down to the bustling harbor docks to select fresh-caught fish, lobster, or shrimp cooked fresh on open charcoal grills right at the port banks." },
      { day: "3:00 PM", title: "Essaouira Whitewashed Medina stroll", desc: "Wander the quiet whitewashed medina streets with blue shutters. Browse local cedarwood crafts, hand-woven blankets, and spices in peaceful, sunlit souks." },
      { day: "6:00 PM", title: "Sunset return drive to Marrakech", desc: "Drive back to Marrakech as the sun sets over the Atlantic, arriving at your hotel by late evening." }
    ],
    included: ["AC private transport", "Professional English driver", "Guided medina walking tour", "Harbor fresh seafood lunch"],
    excluded: ["Gratuities and monument tickets"]
  },

  "day-trip-ouarzazate": {
    title: "ONE DAY TRIP FROM MARRAKECH TO OUARZAZATE AND THE AIT BEN HADDOU KASBAH",
    category: "Day Trips",
    duration: "1 Day (11 Hours)",
    rating: "4.9 (156 reviews)",
    price: "$50",
    image: "/assets/tour_12day_casablanca.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Ait Benhaddou" },
        { name: "Ouarzazate" }
      ]
    },
    itinerary: [
      { day: "7:00 AM", title: "Depart past High Atlas peaks", desc: "Depart Marrakech early and drive past the snow-capped High Atlas peaks via Tizi n'Tichka pass (2,260m elevation) with beautiful panoramic mountain views." },
      { day: "11:00 AM", title: "Ait Benhaddou UNESCO Mud Kasbah", desc: "Tour the famous Ait Benhaddou Kasbah, a spectacular mud-brick UNESCO fortress that served as the backdrop for iconic films like Gladiator and Lawrence of Arabia." },
      { day: "1:30 PM", title: "Lunch & Ouarzazate Kasbah", desc: "Tour Ouarzazate, visiting the historic Taourirt Kasbah and the Atlas Film Studio sets to see ancient Egyptian and Roman movie backdrops." },
      { day: "4:30 PM", title: "Drive back to Marrakech", desc: "Complete return scenic Atlas drive to Marrakech, arriving at your hotel by late evening." }
    ],
    included: ["AC private transport", "Professional English driver", "UNESCO Kasbah local guide fees", "Atlas Film Studio entry ticket"],
    excluded: ["Gratuities and lunches"]
  },

  "day-trip-ouzoud": {
    title: "ONE DAY TRIP FROM MARRAKECH TO THE OUZOUD WATERFALLS AND BERBER VILLAGES",
    category: "Day Trips",
    duration: "1 Day (9 Hours)",
    rating: "4.7 (128 reviews)",
    price: "$40",
    image: "/assets/atlas_mountains_valley.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Ouzoud Waterfalls" }
      ]
    },
    itinerary: [
      { day: "8:00 AM", title: "Marrakech departure to Atlas foothills", desc: "Depart Marrakech and drive past green olive groves and valleys to the Atlas foothills." },
      { day: "11:00 AM", title: "Ouzoud Cascades & wild Apes", desc: "Reach the magnificent 110m tall waterfalls. Meet wild Barbary macaques and play with them." },
      { day: "1:00 PM", title: "Gorge river boat ride & lunch", desc: "Take a wooden boat to the waterfall mist. Settle in for lunch at the banks." },
      { day: "3:30 PM", title: "Berber Village hike", desc: "Walk through traditional olive mills, return past trails to Marrakech, arriving by evening." }
    ],
    included: ["AC transportation", "Professional driver/guide", "Gorge river boat ride", "Local trekking guide"],
    excluded: ["Lunches and gratuities"]
  },

  "day-trip-marrakech": {
    title: "One Day Guided Tour Of Marrakech City",
    category: "Day Trips",
    duration: "1 Day (7 Hours)",
    rating: "4.8 (212 reviews)",
    price: "$35",
    image: "/assets/tour_8day_casablanca.png",
    map: {
      points: [
        { name: "Marrakech Medina", start: true }
      ]
    },
    itinerary: [
      { day: "9:00 AM", title: "Majorelle Garden & Koutoubia", desc: "Stroll Majorelle's cobalt blue paths, see towering Koutoubia mosque, and take in the fresh morning air." },
      { day: "11:00 AM", title: "Saadian Tombs & Bahia Palace", desc: "Explore complex zellige mosaics, Saadian marble carvings, and stroll the grand courtyards." },
      { day: "1:00 PM", title: "Medina lunch & spice souks", desc: "Traditional tagine lunch, guided walk inside colorful craft souks, and mint tea in Jemaa el-Fnaa." }
    ],
    included: ["Majorelle Garden skip-the-line ticket", "Bahia Palace entrance tickets", "Certified local medina guide"],
    excluded: ["Transfer transport", "Lunch and tips"]
  },

  "day-trip-ourika": {
    title: "Ourika Valley Nature & Wildlife Tour",
    category: "Day Trips",
    duration: "1 Day (8 Hours)",
    rating: "4.8 (115 reviews)",
    price: "$30",
    image: "/assets/tour_10day_casablanca.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Ourika Valley" }
      ]
    },
    itinerary: [
      { day: "9:00 AM", title: "Drive to Atlas foothills", desc: "Depart Marrakech and drive south to the cool Ourika Valley past green Berber villages." },
      { day: "10:30 AM", title: "Setti Fatma seven waterfalls", desc: "Trek rocky riverbed cascades, hike the gorgeous trails, and meet local villagers." },
      { day: "1:00 PM", title: "Riverside tables tagine lunch", desc: "Eat tagines at tables placed directly inside the flowing water. Stroll the olive mills." }
    ],
    included: ["AC private transport", "Professional English driver", "Local mountain trekking guide"],
    excluded: ["Lunches and gratuities"]
  },

  // =========================================================================
  // === 4. ACTIVITIES (6 PROGRAMS) ===
  // =========================================================================

  "activity-hot-air-balloon": {
    title: "Hot Air Balloon in Marrakech",
    category: "Activities",
    duration: "1 Day (5 Hours)",
    rating: "4.9 (310 reviews)",
    price: "$210",
    image: "/assets/tour_10day_imperial.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Jbilet Desert" }
      ]
    },
    itinerary: [
      { day: "5:00 AM", title: "Pre-dawn Riad Pickup", desc: "Private 4x4 pickup from your hotel or Riad, drive past palm valleys to takeoff pad." },
      { day: "6:00 AM", title: "Balloon Inflation & take off", desc: "Enjoy hot tea/coffee, observe balloon inflating, mount basket, and fly." },
      { day: "6:30 AM", title: "Sunrise Flight over Atlas peaks", desc: "Float 1000m high. Watch sunrise illuminate snow-capped Atlas heights, valleys, and clay villages below." },
      { day: "8:00 AM", title: "Berber Tent Breakfast", desc: "Touch down, sit inside a Berber tent for fresh honey, pancakes, and mint tea." }
    ],
    included: ["Private 4x4 transfers", "1-Hour luxury flight", "Fresh breakfast in Berber tent", "Flight certificate"],
    excluded: ["Tips"]
  },

  "activity-horse-riding": {
    title: "Horse Riding in Morocco",
    category: "Activities",
    duration: "3 Hours",
    rating: "4.8 (88 reviews)",
    price: "$50",
    image: "/assets/tour_6day_desert.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Palm Groves" }
      ]
    },
    itinerary: [
      { day: "Step 1", title: "Riad pick-up & Ranch welcome", desc: "Drive to Palm Groves ranch, meet beautiful Arabian stallions." },
      { day: "Step 2", title: "Safety briefing & matching", desc: "Receive riding helmet and meet horse suited for your level." },
      { day: "Step 3", title: "Palm groves scenic sunset trail", desc: "Ride past towering palms, historic clay villages, and cross sands." }
    ],
    included: ["AC transfers", "Arabian horse match", "Helmet and protective gear", "Professional horse guide", "Mint tea at ranch"],
    excluded: ["Tipping guides"]
  },

  "activity-chez-ali": {
    title: "Fantasia Chez Ali Marrakech Show",
    category: "Activities",
    duration: "4 Hours",
    rating: "4.6 (142 reviews)",
    price: "$75",
    image: "/assets/tour_9day_authentic.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Chez Ali arena" }
      ]
    },
    itinerary: [
      { day: "8:00 PM", title: "Pick-up to Chez Ali arena", desc: "Drive to the giant castle-like Chez Ali arena in Palm Groves." },
      { day: "8:45 PM", title: "Moroccan Palace dinner", desc: "Feast on slow-roasted lamb (Mechoui), royal couscous, fruits." },
      { day: "10:00 PM", title: "Fantasia Equestrian show", desc: "Equestrian riders charge, firing gunpowder rifles (Tbourida), belly dancers, acrobatics, and flying carpet shows." }
    ],
    included: ["AC private vehicle transport", "Chez Ali entrance tickets", "Full 5-course palace dinner", "Fantasia live show access"],
    excluded: ["Personal beverages", "Tips"]
  },

  "activity-quad-biking": {
    title: "Quad Biking In Marrakech Palm Groves",
    category: "Activities",
    duration: "3 Hours",
    rating: "4.9 (342 reviews)",
    price: "$45",
    image: "/assets/tour_3day_marrakech.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Desert Quad Ranch" }
      ]
    },
    itinerary: [
      { day: "Step 1", title: "Transfer to Palm Groves", desc: "Pickup from Marrakech Riad to the Jbilet stone desert ranch." },
      { day: "Step 2", title: "Quad briefing & gear", desc: "Strap on helmet and goggles, brief safety test run." },
      { day: "Step 3", title: "Desert & palm mud trail ride", desc: "2-Hours quad biking past palm grooves, mud rivers, stone deserts, mint tea break." }
    ],
    included: ["AC hotel transfers", "Yamaha Quad bike hire", "Helmets, goggles, gloves", "Professional quad guide", "Berber tent mint tea"],
    excluded: ["Action camera hire", "Tips"]
  },

  "activity-raid-buggy": {
    title: "Raid Buggy In Marrakech Desert",
    category: "Activities",
    duration: "3 Hours",
    rating: "4.8 (118 reviews)",
    price: "$85",
    image: "/assets/tour_12day_desert.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Buggy Desert Ranch" }
      ]
    },
    itinerary: [
      { day: "Step 1", title: "Pickup to Ranch", desc: "Private transport to Jbilet desert buggy launch point." },
      { day: "Step 2", title: "Raid Buggy safety briefing", desc: "Mount the Polaris 800cc buggy, strap on safety belt, testing." },
      { day: "Step 3", title: "Tense desert speed raid", desc: "2-Hours driving past rough stone gullies, sand plains, palm trails." }
    ],
    included: ["AC private transfers", "Polaris Buggy hire", "Safety gear & helmets", "Professional buggy pilot guide", "Mint tea at tent"],
    excluded: ["Tips"]
  },

  "activity-camel-riding": {
    title: "Camel Riding in Marrakech Palm Groves",
    category: "Activities",
    duration: "2 Hours",
    rating: "4.9 (415 reviews)",
    price: "$25",
    image: "/assets/tour_4day_marrakech.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Camel Ranch" }
      ]
    },
    itinerary: [
      { day: "Step 1", title: "Groves transport", desc: "Pickup from Marrakech hotel to Palm Groves camel camp." },
      { day: "Step 2", title: "Nomad Robes fitting", desc: "Fit beautiful woolen blue Tuareg robes and wrap head scarf." },
      { day: "Step 3", title: "Camel caravan walk", desc: "1-Hour riding camels in caravan past palm groves and sand flats." }
    ],
    included: ["AC hotel transfers", "Tuareg nomad robes & scarf", "1-Hour camel caravan ride", "Berber guide services", "Mint tea at tent"],
    excluded: ["Tips"]
  },

  "atlas": {
    title: "High Atlas & Berber Villages Trek",
    category: "Mountain Adventure",
    duration: "5 Days / 4 Nights",
    rating: "4.9 (98 reviews)",
    price: "$620",
    image: "/assets/atlas_mountains_valley.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Imlil Valley" },
        { name: "Mt Toubkal (4,167m)" },
        { name: "Azzaden Valley" },
        { name: "Ouirgane" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Escape Marrakech to Imlil Mountain Trailhead", desc: "Leave Marrakech behind and drive south towards the high snow-capped Atlas heights. Arrive at the scenic alpine trailhead village of Imlil (1,740m). Settle your heavy luggage on our mule team and embark on a light, beautiful uphill hike through lush walnut and cherry orchards. Reach the ancient cliffside village of Aroumd. Settle in for a warm welcoming dinner inside a rustic-luxe stone mountain lodge with panoramic views of Mount Toubkal." },
      { day: "Day 2", title: "Trek Mizane Valley to Toubkal Summit Refuge", desc: "After an early breakfast, begin your ascent along the steep, rugged Mizane Valley. Hike alongside rushing mountain streams, stopping at the sacred rock-shrine of Sidi Chamharouch (2,350m) for a fresh orange juice break. Continue trekking steadily uphill as the landscape shifts into spectacular alpine scree. Reach the Toubkal Base Refuge (3,207m) by late afternoon. Settle into the cozy stone quarters and enjoy a rich, warm dinner prepared by our mountain cooks." },
      { day: "Day 3", title: "Toubkal Summit Summit Challenge (4,167m)", desc: "A pre-dawn wake-up call at 4:30 AM. Strap on your boot grips (crampons if winter) and climb the steep western comb under a sky full of stars. Reach the summit of Mount Toubkal (4,167m)—the highest peak in North Africa—by sunrise. Stand in awe as breathtaking 360-degree panoramic views unfold over the jagged Atlas chains, the green valleys below, and the faint orange sands of the Sahara. Descend safely back to the base refuge for a hot lunch, then complete a light descent back to a cozy Imlil lodge." },
      { day: "Day 4", title: "Imlil Trek to the Azzaden Berber Valley", desc: "Embark on a beautiful transverse hike across the high mountain passes to the pristine, remote Azzaden Valley. Hike through pine-scented forests, passing red clay mud-brick Berber villages clinging vertically to green terraced mountainsides. Experience absolute local authenticity by sharing hot mint tea and a home-cooked tagine inside a traditional mud-brick Berber home (Gite) with a welcoming local host family." },
      { day: "Day 5", title: "Scenic Azzaden Trails to Ouirgane & Marrakech", desc: "Enjoy a final farm-fresh Berber mountain breakfast. Hike downhill along the scenic Azzaden riverbed, passing native shepherds and green olive groves to reach the peaceful Ouirgane Valley. Meet your private driver at Ouirgane lake, take a beautiful scenic drive back to the lowlands, and return to your Marrakech hotel by mid-afternoon." }
    ],
    included: [
      "Certified professional mountain trekking guide (English speaking)",
      "Dedicated mule team & luggage carriers for gear",
      "All meals prepared fresh during the trek by expedition cooks",
      "2 Nights in cozy, rustic mountain stone lodges (Imlil)",
      "1 Night in mountain refuge dormitory bunk-beds (Toubkal base)",
      "1 Night in traditional local Berber home Gite (Azzaden)",
      "Private AC Mercedes transporter from/to Marrakech",
      "Technical summit safety gear (crampons for snow climbing)"
    ],
    excluded: [
      "Hiking sleeping bag (available for local rental)",
      "Personal trekking boots and windproof clothing",
      "Bottled mineral water and carbonated sodas",
      "Mountain guide tips (optional custom gratuity)"
    ]
  },

  "coast": {
    title: "Blue City & Atlantic Coast Escape",
    category: "Coastal Escape",
    duration: "5 Days / 4 Nights",
    rating: "4.7 (74 reviews)",
    price: "$690",
    image: "/assets/chefchaouen_street.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Essaouira" },
        { name: "Casablanca" },
        { name: "Chefchaouen" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Marrakech to Essaouira Coastal Retreat", desc: "Depart Marrakech in the morning and travel west towards the Atlantic Ocean. Drive past rolling argan tree fields (where you might spot tree-climbing goats grazing on argan nuts!). In the afternoon, reach the historic sea-fortress town of Essaouira, formerly Mogador. Check into a beautiful, tranquil blue-and-white Riad. Walk along the wide sandy beach or watch kitesurfers catch waves under a beautiful ocean breeze." },
      { day: "Day 2", title: "Essaouira Port & Medina Ramparts", desc: "Enjoy a guided walking tour of Essaouira's UNESCO-listed medina. Climb the stone Sqala ramparts, where ancient brass cannons face out over the crashing Atlantic waves. Walk inside the blue-painted harbor port to watch local fishermen land fresh sea bass, sardines, and crab. Sit down at the port-side docks for an incredible, freshly grilled seafood lunch cooked right in front of you. Spend your evening exploring woodcarving galleries." },
      { day: "Day 3", title: "Essaouira to Casablanca Coastline", desc: "Embark on a beautiful coastal road trip heading north along the Atlantic shoreline. Settle in for lunch at Safi, famed for its brilliant hand-painted terracotta pottery, and continue past El Jadida's historic Portuguese cistern. Reach Casablanca by late afternoon. Take a relaxing evening walk along the bustling Ain Diab Corniche beachfront as the sun sets over the ocean." },
      { day: "Day 4", title: "Casablanca to Chefchaouen (The Blue Pearl)", desc: "Drive north out of Casablanca, traversing green fertile valleys to climb into the dramatic Rif Mountains. Reach the peaceful, blue-washed mountain medina of Chefchaouen. Walk the cobblestone lanes painted in stunning shades of turquoise and sky blue, taking photos of vibrant flower pots hanging from walls. Spend a magical evening under glowing lanterns in Outa el-Hammam square." },
      { day: "Day 5", title: "Chefchaouen Sunrise & Mountain Trails to Marrakech", desc: "Wake up early for a refreshing hike up to the Spanish Mosque sitting on the hill. Settle in for a magnificent sunrise overlooking the blue-washed town tucked in the mountains. Settle in for a fresh organic mountain brunch at the medina before embarking on a private transfer back to Marrakech (or Casablanca) for your departure flight." }
    ],
    included: [
      "4 Nights inside highly-rated luxury blue-and-white boutique Riads",
      "Daily fresh organic, traditional Moroccan breakfast spreads",
      "Private driver services in premium Mercedes AC vehicle",
      "Certified expert local walking guide in Essaouira Medina",
      "Special welcome seafood harbor dinner at Essaouira docks",
      "Fresh water and local snacks provided in vehicle",
      "Private airport pickup and drop-off transfers"
    ],
    excluded: [
      "Water-sports gear hire (surfboard, kite-surf lessons)",
      "Direct monument and lighthouse entrance tickets",
      "Personal lunches, dinners, and guide tips",
      "Hassan II Mosque interior tickets"
    ]
  },

  "imperial": {
    title: "Imperial Medinas & Riad Retreat",
    category: "Cultural Heritage",
    duration: "7 Days / 6 Nights",
    rating: "4.8 (124 reviews)",
    price: "$890",
    image: "/assets/marrakech_riad_pool.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Casablanca" },
        { name: "Rabat" },
        { name: "Volubilis" },
        { name: "Fes" },
        { name: "Chefchaouen" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Arrival in Marrakech", desc: "Welcome to Morocco! Your private professional driver greets you at Marrakech Menara Airport (RAK) with a personalized name card. Transfer in comfort directly to a gorgeous, quiet Riad hidden within the ancient Marrakech medina walls. Enjoy a welcoming glass of traditional Moroccan hot mint tea, rest by the emerald pool, and spend your first evening at absolute leisure." },
      { day: "Day 2", title: "Marrakech Medina Secrets & Souks", desc: "Meet your local expert guide after breakfast. Explore the breathtaking architectural carvings of the Bahia Palace, the historic Saadian Tombs, and the imposing Koutoubia Mosque. In the afternoon, dive into the labyrinthine alleys of the colorful spice and leather souks, observing metal smiths and textile weavers at work. Cap off the day experiencing the vibrant twilight energy of Jemaa el-Fna square." },
      { day: "Day 3", title: "Casablanca Coastline & Imperial Rabat", desc: "Depart Marrakech and drive north to the seaside metropolis Casablanca. Marvel at the stunning Hassan II Mosque—the largest mosque in Africa, boasting a 210m minaret built directly over the open waters of the Atlantic Ocean. After a seafood lunch, drive to the administrative capital Rabat. Walk inside the blue-and-white clifftop Kasbah of the Udayas and view the massive incomplete 12th-century Hassan Tower." },
      { day: "Day 4", title: "Roman Volubilis ruins & Meknes Gateway", desc: "Journey east to Volubilis, the ancient Roman Empire's most remote southwestern outpost. Take a guided walking tour among beautiful mosaic floors preserved in situ. Next, stop in the imperial city Meknes to view the colossal Bab Mansour gateway and the Royal Granaries. Arrive in Fes by late afternoon and check into a spectacular boutique palace Riad." },
      { day: "Day 5", title: "Fes El Bali - The Cultural Soul of Morocco", desc: "Step back in time as you explore the world's oldest and largest medieval car-free urban area with your Fes guide. Walk through the iconic Blue Gate (Bab Boujloud), visit the ancient 9th-century Al-Qarawiyyin University, and view the Al-Attarine Madrasa. Observe the centuries-old manual dyeing processes at the famous Chouara Tannery, inhaling the scent of wild mint, and enjoy a traditional lunch in a medina courtyard." },
      { day: "Day 6", title: "Fes to the Blue Pearl Chefchaouen", desc: "Drive north through lush valleys into the dramatic Rif Mountains to reach Chefchaouen, the iconic \"Blue Pearl\" of Morocco. Enjoy a relaxed walking tour through the peaceful, clean alleys washed in every shade of dreamy blue. Settle into a scenic rooftop mountain Riad and watch a peaceful sunset over the blue horizon." },
      { day: "Day 7", title: "Chefchaouen back to Marrakech / Departure", desc: "Take a peaceful morning hike up to the Spanish Mosque for a panoramic sunset view overlooking the Rif valley. Enjoy an organic mountain breakfast before taking a private transfer back to Marrakech Menara Airport (or Casablanca Airport) for your departure flight home, taking with you lifelong memories of imperial grandeur." }
    ],
    included: [
      "6 Nights in highly-rated 4/5-star boutique luxury Riads",
      "Daily authentic, fresh artisanal breakfasts at the Riads",
      "Private driver services in premium Mercedes AC minivan",
      "Local certified expert guides in Marrakech and Fes medinas",
      "Skip-the-line entrance tickets to Volubilis and Bahia Palace",
      "Water and refreshments in the vehicle during travel days",
      "Private airport transfers (Arrival and Departure)"
    ],
    excluded: [
      "International flight ticket fares",
      "Personal lunches, dinners, and alcoholic beverages",
      "Guide & driver tips (customary but optional)",
      "Hassan II Mosque interior guided tour ticket"
    ]
  },

  "sahara": {
    title: "Sahara Dunes & Desert Glamping",
    category: "Desert Expedition",
    duration: "4 Days / 3 Nights",
    rating: "4.9 (182 reviews)",
    price: "$540",
    image: "/assets/camel_trek_dunes.png",
    map: {
      points: [
        { name: "Marrakech", start: true },
        { name: "Ait Benhaddou" },
        { name: "Dades Valley" },
        { name: "Merzouga Desert" }
      ]
    },
    itinerary: [
      { day: "Day 1", title: "Marrakech to Dades Valley", desc: "Your desert expedition starts in the morning from Marrakech. We drive across the stunning High Atlas peaks via Tizi n'Tichka pass (2,260m elevation). Settle in for lunch at Ait Benhaddou Kasbah, a spectacular UNESCO world heritage brick fortress that served as a backdrop for Gladiator, Game of Thrones, and Lawrence of Arabia. In the afternoon, wind past Ouarzazate film studios into Dades Valley gorges. Dine and rest inside a traditional luxury stone Riad." },
      { day: "Day 2", title: "Dades Gorges to Merzouga Desert Dunes", desc: "After breakfast, walk under the giant vertical rock walls of the Todra Gorges—a narrow canyon climbing 300m above a winding stream. In the afternoon, cross the dry valleys of Erfoud into the majestic Merzouga region. Meet your camel guides, mount your camel, and trek across wind-swept golden dunes under a glowing sunset. Settle into a high-end luxury nomad tent camp, eat a rich Berber feast, gather around bonfire drums, and trace starry skies." },
      { day: "Day 3", title: "Nomadic Culture & Sahara Desert 4x4 Safari", desc: "Catch a spectacular pre-dawn sunrise from the peak of Erg Chebbi dunes. After a hot breakfast in the camp, embark on a full 4x4 safari expedition. Travel along ancient rally tracks to meet local nomadic families living in woolen tents, learn their custom ways, and share mint tea. Later, enjoy spiritual live Gnawa music in the village of Khamlia, eat delicious local Berber pizza (Madfouna), and spend a peaceful second night under Sahara lanterns." },
      { day: "Day 4", title: "Merzouga Dunes return to Marrakech", desc: "Wake up to the fresh desert air and take in a final sunrise. Journey back from the desert through the expansive green Draa Valley palm groves—the longest valley in Morocco—and past the anti-Atlas ranges. After lunch in Ouarzazate, complete the drive over the high Atlas passes, returning to Marrakech by evening where your epic desert voyage concludes." }
    ],
    included: [
      "Premium AC 4x4 or Mercedes minivan transport",
      "Expert licensed local guide/driver (English speaking)",
      "1 Night in Dades Valley Luxury Stone Riad (Half-board)",
      "2 Nights in High-end Luxury Sahara Desert Glamping Camp",
      "Sunset and sunrise Sahara camel treks",
      "4x4 Off-road Sahara sand dunes tour",
      "All traditional breakfasts and gourmet dinners"
    ],
    excluded: [
      "Personal international travel insurance",
      "Midday lunches and soft/alcoholic beverages",
      "Local guide gratuities (optional tips)",
      "Entrance tickets to Ouarzazate film studio sets"
    ]
  }
};
