/**
 * tours.ts — Central data store for all Sahara Star Tours
 * Single source of truth: 57 total products
 * - 45 Multi-Day Tours (Durations >= 2 Days)
 * - 6 Day Trips (Single-day excursions from Marrakech)
 * - 6 Activities (Half-day & adventure experiences in Marrakech)
 * - Imperial Cities: Curated thematic subset of multi-day tours (not double counted)
 * 
 * Includes verified WebP imagery, interactive Leaflet routes, day-by-day itineraries,
 * explicit taxonomy (productType, departureCity, arrivalCity, destinations, themes, relatedTours), and tour FAQs.
 */

export type ProductType = 'multi-day' | 'day-trip' | 'activity';
export type TourCategory = 'desert-tours' | 'imperial-cities' | 'day-trips' | 'activities';
export type City = 'Marrakech' | 'Casablanca' | 'Fes' | 'Tangier' | 'Ouarzazate';

export interface TourStop {
  number: number;
  name: string;
  day: string;
  subtitle: string;
  desc: string;
  coords: [number, number];
}

export interface TourFAQ {
  question: string;
  answer: string;
}

export interface Tour {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  aboutHtml: string;
  productType: ProductType;
  category: TourCategory;
  themes: string[];
  duration: string;
  durationDays: number;
  startingFrom: string;
  departureCity: City;
  arrivalCity: City;
  destinations: string[];
  relatedTours?: string[];
  price: string;
  heroImage: string;
  thumbnailImage?: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: Array<{ day: string; title: string; content: string }>;
  mapDestinations: TourStop[];
  mapRouteCoordinates: [number, number][];
  galleryImages: Array<{ src: string; cap: string }>;
  featured?: boolean;
  badge?: string;
  faqs?: TourFAQ[];
}

export const categoryLabels: Record<string, string> = {
  'desert-tours': 'Desert Tours',
  'imperial-cities': 'Imperial Cities',
  'day-trips': 'Day Trips',
  'activities': 'Activities',
};

export const tours: Tour[] = [
  {
    "slug": "6-days-desert-tour-from-casablanca",
    "title": "6-Day Morocco Tour from Casablanca to Marrakech | Sahara Star Tours",
    "shortTitle": "6-Day Morocco Tour from Casablanca to Marrakech",
    "description": "Private 6-day Morocco tour from Casablanca to Marrakech. Explore Fes. Local support and flexible planning.",
    "aboutHtml": "This private 6-day Morocco journey begins in Casablanca and finishes in Marrakech. Along the route, you will experience Casablanca, Volubilis, Meknes, Fes, Ifrane, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "6 Days / 5 Nights",
    "durationDays": 6,
    "startingFrom": "Casablanca",
    "departureCity": "Casablanca",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Casablanca",
      "Marrakech",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley"
    ],
    "relatedTours": [
      "7-day-morocco-tour-from-casablanca",
      "14-days-grand-morocco-tour-itinerary-from-casablanca",
      "11-days-morocco-classic-tour"
    ],
    "price": "From $790/person",
    "heroImage": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival to Casablanca – Visit The Largest City Of Morocco",
        "content": "On the first day of your 6 Day in Morocco, you’ll welcome you upon arrival at the airport or directly from your accommodation in Casablanca — Morocco’s largest city and economic heartbeat. Your journey begins with a visit to the spectacular Hassan II Mosque, perched on a promontory overlooking the Atlantic Ocean. As the largest mosque in Morocco, its intricate architecture and seaside setting make it a must-see landmark. After some free time for lunch, you continue exploring the highlights of Casablanca. Depending on your arrival time, the tour may include: Mohammed V Square – the bustling civic center known for its colonial architecture A photo stop at the iconic Rick’s Café, inspired by the classic film Casablanca"
      },
      {
        "day": "Day 2",
        "title": "Casablanca – The Roman Ruins of Volubilis – Meknes – Fes",
        "content": "After breakfast, departure from Casablanca to visit the ancient Roman ruins of Volubilis. It is well preserved, as it is recognized as a UNESCO World Heritage Site by the UNESCO. It has many beautiful mosaics scattered here and there, along with ancient pillars and archways. After strolling in the ruins, you drive 30 km to visit Meknes. The Ismaili capital and one of the imperial city. In which you visit Bab Al-Mansour, Sahrij Souani basin, the Royal stables, the granary. And Finally, the Moulay Ismail Mausoleum. Next, you head to Fes. Overnight stay in a Riad."
      },
      {
        "day": "Day 3",
        "title": "Sightseeing Fes with a Local Guide",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 4",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "After breakfast, you drive south through Imouzzer to visit Ifrane. The city is famous for its low temperature, snow and the alpine-style architecture houses. It is often called the Switzerland of Morocco. After that, you continue to Cedar Forest, where the Barbary macaques live. You can feed them, while walking through the forest. Later, you continue to Midelt, where you will have a free time for lunch. Next, you drive to Merzouga through the Tizi-n-Tilghmt pass and along the Ziz Valley. With stops for panoramic views. In the afternoon, you reach the Sahara desert of Merzouga. Next you switch to camels, and cross the sandy desert. After that you will make a stop on top of a high dune to enjoy the sunset. Finally, you continue to the camp. There, you can enjoy the Berber drumming, while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp."
      },
      {
        "day": "Day 5",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels or via the camp’s 4×4 to Merzouga, where the driver awaits. Thereafter, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large lively souk. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a high red cliff-sided canyon through the mountains. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. Inevitable stops at the “monkey fingers” rock formation, and for the view of the Dades valley. Finally, dinner and overnight in a hotel."
      },
      {
        "day": "Day 6",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "Finally, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products. Next, you drive through the palm groves of Skoura. You reach Ouarzazate, where you visit the studios, in which famous movies were shot. After that you depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And TV series including Game Of Thrones. Next, you continue to Marrakech, by driving through the Tizi n'Tichka pass, and the High Atlas Mountains. Stops will be made for lunch, and to take pictures at interesting spots. You reach Marrakech around 5pm, next you drive to the airport or your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival to Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival to Casablanca – Visit The Largest City Of Morocco",
        "desc": "On the first day of your 6 Day in Morocco, you’ll welcome you upon arrival at the airport or directly from your accommodation in Casablanca — Morocco’...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 2,
        "name": "Casablanca",
        "day": "Day 2",
        "subtitle": "Casablanca – The Roman Ruins of Volubilis – Meknes – Fes",
        "desc": "After breakfast, departure from Casablanca to visit the ancient Roman ruins of Volubilis. It is well preserved, as it is recognized as a UNESCO World ...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 3,
        "name": "Sightseeing Fes with a Local Guide",
        "day": "Day 3",
        "subtitle": "Sightseeing Fes with a Local Guide",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 4,
        "name": "Fes",
        "day": "Day 4",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "After breakfast, you drive south through Imouzzer to visit Ifrane. The city is famous for its low temperature, snow and the alpine-style architecture ...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Sahara",
        "day": "Day 5",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 6,
        "name": "Dades Valley",
        "day": "Day 6",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "Finally, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.5731,
        -7.5898
      ],
      [
        33.5731,
        -7.5898
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/6-days-desert-tour-from-casablanca/images/gallery_9.webp",
        "cap": "Gallery 9"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Casablanca, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 30 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "7-day-morocco-tour-from-casablanca",
    "title": "7-Day Morocco Tour from Casablanca to Marrakech | Sahara Star Tours",
    "shortTitle": "7-Day Morocco Tour from Casablanca to Marrakech",
    "description": "Private 7-day Morocco tour from Casablanca to Marrakech. Explore Fes, Chefchaouen, Rabat. Local support and flexible planning.",
    "aboutHtml": "This private 7-day Morocco journey begins in Casablanca and finishes in Marrakech. Along the route, you will experience Casablanca, Rabat, Chefchaouen, Volubilis, Meknes, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "7 Days / 6 Nights",
    "durationDays": 7,
    "startingFrom": "Casablanca",
    "departureCity": "Casablanca",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Casablanca",
      "Marrakech",
      "Rabat",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Cedar Forest"
    ],
    "relatedTours": [
      "6-days-desert-tour-from-casablanca",
      "14-days-grand-morocco-tour-itinerary-from-casablanca",
      "11-days-morocco-classic-tour"
    ],
    "price": "From $890/person",
    "heroImage": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival to Casablanca – Visit The Largest City Of Morocco",
        "content": "On the first day of your 7 Days in Morocco, you’ll welcome you upon arrival at the airport or directly from your accommodation in Casablanca — Morocco’s largest city and economic heartbeat. Your journey begins with a visit to the spectacular Hassan II Mosque, perched on a promontory overlooking the Atlantic Ocean. As the largest mosque in Morocco, its intricate architecture and seaside setting make it a must-see landmark. After some free time for lunch, you continue exploring the highlights of Casablanca. Depending on your arrival time, the tour may include: Mohammed V Square – the bustling civic center known for its colonial architecture A photo stop at the iconic Rick’s Café, inspired by the classic film Casablanca"
      },
      {
        "day": "Day 2",
        "title": "Casablanca – Rabat the capital – Chefchaouen",
        "content": "After breakfast, you drive along the coastline to Rabat. The city is one of the imperial cities in Morocco, and the current capital. It is located on the northwest of Morocco. You will visit the Highlights of the city including: the Hassan tower, the Mausoleum of Mohammed V. And also The Kasbah of Oudaya. Enjoy free time for lunch. In the afternoon, you head north through Ouazzane to reach the Blue city of Chefchaouen. The city is located in the Rif Mountains, famous for its buildings and alleyways painted in blue. Finally, Overnight in a hotel."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen – The Roman Ruins of Volubilis – Meknes – Fes",
        "content": "After breakfast, you can wander in the beautiful alleyways, of the blue city Chefchaouen. Next, you drive to visit the ancient Roman ruins of Volubilis. It is well preserved, as it is recognized as a UNESCO World Heritage Site by the UNESCO. It has many beautiful mosaics scattered here and there, along with ancient pillars and archways. After strolling in the ruins, you drive 30 km to visit Meknes. The city is considered the Ismaili capital and one of the imperial cities. In which you visit Bab Al-Mansour, Sahrij Souani basin, the Royal stables, the granary. And also the Moulay Ismail Mausoleum. Next, you head to Fes. Overnight stay in a Riad."
      },
      {
        "day": "Day 4",
        "title": "Sightseeing Fes with a Local Guide",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 5",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "After breakfast, you drive south through Imouzzer to visit Ifrane. The city is famous for its low temperature, snow and the alpine-style architecture houses. It is often called the Switzerland of Morocco. After that, you continue to Cedar Forest, where the Barbary macaques live. You can feed them, while walking through the forest. Later, you continue to Midelt, where you will have a free time for lunch. Next, you drive to Merzouga through the Tizi-n-Tilghmt pass and along the Ziz Valley. With stops for panoramic views. In the afternoon, you reach the Sahara desert of Merzouga, where you switch to camels, and cross the sandy desert. You will make a stop on top of a high dune to enjoy the sunset. Finally, you continue to the camp. Which is a combination between the traditional tents of nomads, and the luxury a hotel has. There, you can enjoy the Berber drumming, while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp."
      },
      {
        "day": "Day 6",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels or the camp’s 4×4 to Merzouga, where the driver awaits. Next, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively 3 days a week. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand canyon through the mountains. Making a high red cliff-sided canyon. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. After that inevitable stops at the “monkey fingers” rock formation, and on spot overlooking the Dades valley. Finally, Dinner and overnight in a Riad."
      },
      {
        "day": "Day 7",
        "title": "Dades Valley – Roses Town – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "On the last day, you continue our trip to Kalaa Magouna, to visit the Rose Valley & a Cooperative. A Rose Festival is held annually in May. Where the locals offer their rose products. From perfumes, rose water, oil, to cosmetic products. Next, you drive through the palm groves of Skoura to reach Ouarzazate. Next you visit Atlas Studios, in which famous movies were shot. Thereafter you depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. Next, you continue to Marrakech, by driving through the Tizi n'Tichka pass, and the High Atlas Mountains. Stops will be made for lunch, and to take pictures at interesting spots. Finally you reach Marrakech, next you drive you to the airport or your accommodation.."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival to Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival to Casablanca – Visit The Largest City Of Morocco",
        "desc": "On the first day of your 7 Days in Morocco, you’ll welcome you upon arrival at the airport or directly from your accommodation in Casablanca — Morocco...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 2,
        "name": "Casablanca",
        "day": "Day 2",
        "subtitle": "Casablanca – Rabat the capital – Chefchaouen",
        "desc": "After breakfast, you drive along the coastline to Rabat. The city is one of the imperial cities in Morocco, and the current capital. It is located on ...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Day 3",
        "subtitle": "Chefchaouen – The Roman Ruins of Volubilis – Meknes – Fes",
        "desc": "After breakfast, you can wander in the beautiful alleyways, of the blue city Chefchaouen. Next, you drive to visit the ancient Roman ruins of Volubili...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Sightseeing Fes with a Local Guide",
        "day": "Day 4",
        "subtitle": "Sightseeing Fes with a Local Guide",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Day 5",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "After breakfast, you drive south through Imouzzer to visit Ifrane. The city is famous for its low temperature, snow and the alpine-style architecture ...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 6,
        "name": "Merzouga Sahara",
        "day": "Day 6",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 7,
        "name": "Dades Valley",
        "day": "Day 7",
        "subtitle": "Dades Valley – Roses Town – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "On the last day, you continue our trip to Kalaa Magouna, to visit the Rose Valley & a Cooperative. A Rose Festival is held annually in May. Where the ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.5731,
        -7.5898
      ],
      [
        33.5731,
        -7.5898
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-from-casablanca/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Casablanca, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 30 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "8-days-itinerary-tour-from-casablanca",
    "title": "8-Day Sahara Desert & Imperial Highlights Tour | Sahara Star Tours",
    "shortTitle": "8-Day Sahara Desert & Imperial Highlights",
    "description": "Explore Morocco in 8 days from Casablanca. Visit Rabat, Chefchaouen, Fes, sleep in a luxury Sahara desert camp in Merzouga, and finish in Marrakech.",
    "aboutHtml": "This handcrafted 8-day itinerary offers a balanced journey connecting Morocco’s imperial capitals with the dramatic landscapes of the Sahara Desert. Starting in Casablanca, explore Rabat’s historic monuments, stroll Chefchaouen's indigo alleyways, and delve into the spiritual heritage of Fes. Venture deep into Erg Chebbi for sunset camel trekking and glamping under the desert sky. Journey through the rugged Dades Valley, explore the legendary clay fortress of Ait Ben Haddou, and conclude your private journey in exotic Marrakech.",
    "category": "desert-tours",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "startingFrom": "Casablanca",
    "price": "From $990/person",
    "heroImage": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/thumbnail.jpg",
    "highlights": [
      "Immersing yourself in the architectural beauty of the Hassan I| Mosque in Casablanca, a stunning symbol of Morocco’s cultural richness.",
      "Traversing the enchanting blue streets of Chefchaouen, revealing hidden gems, and soaking in the magical ambiance of this captivating city.",
      "Marveling at the ancient ruins of Volubilis, where history comes alive, telling tales of Morocco’s rich past.",
      "Wandering through the labyrinthine streets of the Fes Medina, exploring its historical nooks and crannies, each corner is steeped in cultural significance.",
      "Discovering the serene beauty of the desert on a camel trek, a journey that promises a unique perspective on the vast landscapes.",
      "Experiencing the ultimate tranquility by sleeping under the stars in the heart of the desert, creating memories that will last a lifetime.",
      "Walking a scenic walk through the picturesque Todra Canyon, surrounded by towering cliffs that showcase nature’s grandeur.",
      "Delighting in the stunning panoramic views of the High Atlas Mountains, a majestic backdrop that adds to the allure of your Moroccan adventure.",
      "Exploring the vibrant city of Marrakech, where the bustling souks, historic palaces, and lively streets offer a perfect blend of tradition and modernity."
    ],
    "inclusions": [
      "Guided city tours and monument fees",
      "Comfortable private transportation with guide English speaking",
      "Camel trek and the overnight in Luxury Camp",
      "Airport meet and great service",
      "Dinner at a local restaurant in Marrakech with Music and Moroccan dancing",
      "Half board during the tour",
      "Fuel",
      "7 Breakfasts and 4 dinners in the desert"
    ],
    "exclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency",
      "Tips to guide and driver (optional)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Casablanca - Rabat",
        "content": "Welcome to Morocco! Your 8 days tour from Casablanca begins with a friendly meet and greet at Casablanca’s Mohammed V International Airport. Our local guide will accompany you as we kick off our journey to the impressive Hassan I| Mosque, a true architectural marvel. You will be captivated by the intricate tile work, carved marble, and breathtaking ocean views. Standing as the world’s second-tallest minaret, this mosque is a sight to remember! Following the mosque visit, we will head to Rabat, Morocco’s capital, exploring historical sites steeped in culture and history, like the Hassan Tower and the Oudayas Kasbah. The day concludes as we transport you to your Rabat accommodation, allowing you to relax and recharge for the exciting adventures ahead. Please note that if your flight arrives at night, we will take you directly to your Casablanca hotel for a peaceful night’s rest before the tour begin."
      },
      {
        "day": "Day 2",
        "title": "Rabat - Chefchaouen",
        "content": "After enjoying a tasty breakfast at your hotel/riad, our journey to Chefchaouen begins. This charming town nestled in the Rif Mountains of northern Morocco awaits! The scenic drive from Rabat to Chefchaouen spans about four hours, treating you to picturesque landscapes of rolling hills and small villages. Upon reaching Chefchaouen, you will check in at your hotel/riad, and then it is your time to explore. The city is famous for its unique blue-washed buildings, creating a captivating and picturesque ambiance. Take a leisurely stroll through the narrow streets and alleys of the Medina, visit lively souks (markets), or relax at one of the many cafes or restaurants offering delightful Moroccan cuisine. Your day in Chefchaouen promises to be unforgettable, filled with stunning scenery, cultural experiences, and delicious food. Remember to bring your camera to capture the beauty of this remarkable town!"
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen - Volubilis - Meknes - Fes",
        "content": "Begin your day from your Riad with a delightful breakfast, marking the start of an enchanting journey through the scenic Rif villages. Traverse the Moroccan countryside, soaking in its natural beauty before reaching Volubilis, a once-thriving Roman city. At Volubilis, explore the well-preserved ruins and delve into its fascinating history. Marvel at the intricate mosaics and the grand structures dating back to the 3rd century, offering a glimpse into the lives of ancient Romans. Following this historical immersion, we will proceed to Meknes, a 17th-century city that once served as Morocco’s capital. After a satisfying lunch, we will explore the Medina, a charming walled old town housing the famous Bab el Mansour gate. Admire the gate’s intricate designs and carvings, and visit the Mausoleum of Moulay Ismail, a sacred site dedicated to the renowned Sultan Moulay Ismail. Concluding our day of exploration, we will head to Fes, where a delightful night at a beautiful Riad awaits."
      },
      {
        "day": "Day 4",
        "title": "Guided Tour Of Fes",
        "content": "Embark on a captivating exploration of Fes with a full-day tour accompanied by a local guide. Fes, a Moroccan imperial city and the heart of culture and religion, unfolds its rich history and cultural treasures for your discovery. Start your exploration at the Royal Palace gate, a beginning to navigating the enchanting labyrinth of the medieval Medina, recognized as a UNESCO World Heritage Site. Delve into the treasures of Al-Qarawiyyin University, the Al-Attarine Madrasa, the Nejjarine fountain, and the Chouara Tanneries, each revealing captivating architecture and detailed designs. Venture into the Jewish quarter, known as “the Mellah,” where you will unravel the fascinating history of Fes’s Jewish community. Cap off your day at an ancient fortress, enjoying a panoramic view of the Medina and Fes before returning to your Riad. Guided by a knowledgeable local guide, this full-day tour promises an unforgettable immersion in Fes’s history and culture."
      },
      {
        "day": "Day 5",
        "title": "Fes - Frane - Middle Atlas Mountains - Ziz Valley - Merzouga Desert",
        "content": "After breakfast at your riad in Fes, we will head to the desert. You will embark on a journey south towards Merzouga, making a quick stop in the city of Ifrane to enjoy the scenery. Next, we will continue to a cedar forest in the Middle Atlas Mountains, where you will see some Barbary apes. After a lunch break at a restaurant along the way, we will proceed to the Ziz Valley, famous for its oasis full of palm trees. In the afternoon, you will reach the desert and start an authentic camel caravan across the sand dunes of Erg Chebbi. As you trek through the desert, pause to watch a golden sunset from a high dune. Afterward, continue to your luxury camp in the desert. Upon arrival, you will be shown to your private tent to relax and freshen up. Following a delicious dinner, gather around a bonfire under the starry sky while camp staff plays drums and sings Berber music. There is also an opportunity to learn how to play drums."
      },
      {
        "day": "Day 6",
        "title": "Merzouga Desert - Rissani - Todra Gorge - Dades Gorge",
        "content": "Today, Waking up early is highly recommended to catch a breathtaking sunrise over the dunes of Erg Chebbi. Following a delightful breakfast, you can ride a camel or opt for a 4×4 vehicle to travel to the town of Merzouga. Your driver will be ready to take you to the next part of your journey towards Dades Gorge. Along the way, explore spectacular places, including the traditional market in Rissani (if your visit coincides with market days – Sunday, Tuesday, or Thursday). Take a leisurely stroll through the picturesque Todra Gorge, absorbing the stunning views of the Todra River and the Dades River. On the route to Dades Gorge, marvel at impressive rock formations resembling monkey fingers. Drive through the Dades Valley, enjoying a panoramic view of the Gorges before reaching your hotel for a comfortable overnight stay."
      },
      {
        "day": "Day 7",
        "title": "Dades Gorge - Ouarzazate - Ait Ben Haddou - High Atlas Mountains - Marrakech",
        "content": "Today’s adventure begins with a drive to Ouarzazate, known as the “Hollywood of Africa” and the “Gateway to the Desert.” Explore Atlas Studios, Morocco’s largest film studio, to see famous movie sets and gain insights into the filming process. Continuing our journey, we head to Ait Ben Haddou, home to the famous Kasbah, a UNESCO World Heritage Site featured in movies like “The Gladiator”, and “Lawrence of Arabia”, and TV series like “Game of Thrones.” Immerse yourself in the historic site, appreciating its detailed architecture and intricate decorations. After a delightful lunch at a restaurant, we proceed over the High Atlas Mountains, savoring magnificent landscape views. By late afternoon, we reach Marrakech. Check into your riad, and then take a leisurely stroll in Jemaa El Fenna to soak in the lively atmosphere."
      },
      {
        "day": "Day 8",
        "title": "Guided Tour Of Marrakech",
        "content": "Begin your last day of this fantastic 8 days in Morocco itinerary with a delightful breakfast at your Riad. Our friendly local guide will meet you to showcase the best of Marrakech. Get ready for exciting stories about iconic places you will visit, like Jemaa El-Fna Square, Bahia Palace, Saadian Tombs, Ben Youssef Madrassa, and the Koutoubia Mosque. After a satisfying lunch, you can explore the modern side of Marrakech and visit the exquisite Majorelle Garden. If your flight out of Morocco is today, we will transfer you to either Marrakesh Menara Airport (RAK) or to Casablanca Mohammed V International Airport (CMN), depending on your departure flight. This marks the end of a wonderful Ideal Morocco 8 Days Itinerary Tour from Casablanca to Marrakech with Sahara Star Tours."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Atlantic Arrival",
        "desc": "Hassan II Mosque and scenic road to Rabat.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Imperial Capital",
        "desc": "Hassan Tower, Royal Palace, and Kasbah of the Udayas.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Day 3",
        "subtitle": "The Blue Pearl",
        "desc": "Enchanting blue-washed medina in the Rif Mountains.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Volubilis & Fes",
        "day": "Day 4 & 5",
        "subtitle": "Roman & Medieval Legacy",
        "desc": "Roman mosaics, Meknes, and spiritual Medina of Fes.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Sahara",
        "day": "Day 5 & 6",
        "subtitle": "Erg Chebbi Glamping",
        "desc": "Ziz Valley, Middle Atlas, and luxury desert camp.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 6,
        "name": "Todra & Dades",
        "day": "Day 6 & 7",
        "subtitle": "Atlas Gorges & Canyons",
        "desc": "Dramatic limestone canyons and Valley of Roses.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 7,
        "name": "Ait Benhaddou",
        "day": "Day 7",
        "subtitle": "UNESCO Kasbah",
        "desc": "Iconic Hollywood film fortress and Ouarzazate studios.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 8,
        "name": "Marrakech",
        "day": "Day 8",
        "subtitle": "Red City Grand Finale",
        "desc": "Majorelle, vibrant souks, and departure transfer.",
        "coords": [
          31.629472,
          -7.981084
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.072222,
        -5.554167
      ],
      [
        33.893791,
        -5.551624
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        32.6828,
        -4.7337
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        31.59,
        -5.99
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.047,
        -7.1317
      ],
      [
        31.2847,
        -7.3811
      ],
      [
        31.629472,
        -7.981084
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/thumbnail.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-01.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-02.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-03.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-04.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-05.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-06.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-07.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/8-days-itinerary-tour-from-casablanca/images/image-08.jpg",
        "cap": "Ideal Morocco 8 Days Itinerary Tour From Casablanca"
      }
    ],
    "featured": true,
    "badge": "POPULAR",
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Volubilis & Fes",
      "Merzouga Sahara",
      "Todra & Dades",
      "Ait Benhaddou",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara",
      "imperial-cities",
      "cultural",
      "heritage"
    ]
  },
  {
    "slug": "9-day-authentic-morocco-tour",
    "title": "9-Day Authentic Morocco & Desert Odyssey | Sahara Star Tours",
    "shortTitle": "9-Day Authentic Morocco & Desert Odyssey",
    "description": "Immerse yourself in authentic Moroccan culture on a 9-day tour from Casablanca. Discover imperial medinas, Atlas gorges, and magical Sahara desert dunes.",
    "aboutHtml": "Our 9 Day Authentic Morocco Tour journey provides a unique and authentic experience. Every moment is full of excitement and discovery, from the quiet of the Sahara Desert to the busy streets of Marrakech. Come along as we visit historic medinas, savor delectable regional food, and get a firsthand look at the diverse cultural fabric of Morocco. Don’t pass up this once-in-a-lifetime chance to be enchanted by Morocco. Set out on your 9 Day Authentic Morocco tour trip now, and let the voyage commence!",
    "category": "desert-tours",
    "duration": "9 Days / 8 Nights",
    "durationDays": 9,
    "startingFrom": "Casablanca",
    "price": "From $1,090/person",
    "heroImage": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/thumbnail.jpg",
    "highlights": [
      "Marrakech: Begin your journey in Marrakech, immersing yourself in the vibrant atmosphere of the Medina, visiting historic sites, and experiencing traditional Moroccan hospitality in a Riad.",
      "High Atlas Mountains: Traverse through the majestic High Atlas Mountains, enjoying scenic views and stopping at the Tizi n’Tichka pass for panoramic vistas.",
      "Ouarzazate: Explore the “Gateway to the Sahara,” visiting the UNESCO World Heritage site of Kasbah Ait Ben Haddou and witnessing a mesmerizing sunset over the desert.",
      "Merzouga: Embark on a Sahara Desert adventure, including a camel ride through the dunes, an overnight stay in a Berber camp, and experiencing the magic of the desert night sky.",
      "Fes: Discover the cultural and spiritual heart of Morocco in Fes, exploring its ancient Medina, visiting historical landmarks, and indulging in Moroccan cuisine with a cooking class.",
      "Chefchaouen: Experience the charm of the “Blue Pearl” of Morocco, wandering through its blue-washed streets, hiking to the Cascades d’Akchour, and immersing yourself in the relaxed atmosphere of the Rif Mountains.",
      "Rabat: Explore the capital city of Rabat, visiting its historic sites such as the Hassan Tower and the Kasbah of the Udayas, and enjoying traditional Moroccan mint tea.",
      "Casablanca: Discover the modern metropolis of Casablanca, visiting the iconic Hassan II Mosque, strolling along the Corniche Boulevard, and experiencing the nostalgia of Casablanca."
    ],
    "inclusions": [
      "Guided city tours and monument fees",
      "Comfortable private transportation with guide English speaking",
      "Camel trek and the overnight in Luxury Camp",
      "Airport meet and great service",
      "Dinner at a local restaurant in Marrakech with Music and Moroccan dancing",
      "Half board during the tour",
      "Fuel",
      "8 Breakfasts and 3 dinners in the desert"
    ],
    "exclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency",
      "Tips to guide and driver (optional)",
      "Anything not stated in included part"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival in Marrakech",
        "content": "Welcome to Morocco! Upon arrival at Marrakech Menara Airport, you’ll be greeted by the Morocco Friendly Travel team, and transferred to your hotel. Depending on your arrival time, you can explore the vibrant streets of Marrakech, visit the famous Jemaa el-Fnaa square, or relax at your accommodation. Overnight stay in Marrakech."
      },
      {
        "day": "Day 2",
        "title": "Marrakech Sightseeing",
        "content": "Today, immerse yourself in the rich history and culture of Marrakech. Visit the iconic Koutoubia Mosque, explore the intricate architecture of the Bahia Palace, and wander through the bustling souks of the Medina. In the afternoon, discover the tranquil beauty of the Majorelle Garden and learn about its fascinating history. Overnight stay in Marrakech."
      },
      {
        "day": "Day 3",
        "title": "Marrakech to Ouarzazate",
        "content": "After breakfast, depart for Ouarzazate, known as the “Gateway to the Sahara Desert.” En route, pass through the breathtaking High Atlas Mountains and the stunning Tizi n’Tichka Pass. Stop at the UNESCO World Heritage Site of Ait Ben Haddou, a fortified village with ancient kasbahs. Continue to Ouarzazate and check into your hotel. Overnight stay in Ouarzazate."
      },
      {
        "day": "Day 4",
        "title": "Ouarzazate to Merzouga",
        "content": "Today, embark on a scenic drive to Merzouga, a small village on the edge of the Sahara Desert. Along the way, pass through the picturesque Draa Valley and explore the traditional Berber villages scattered across the landscape. Upon arrival in Merzouga, transfer to your desert camp by camelback and experience a magical sunset over the dunes. Enjoy a traditional dinner under the starry desert sky and spend the night in a Berber tent."
      },
      {
        "day": "Day 5",
        "title": "Merzouga to Fes",
        "content": "Wake up early to witness the spectacular sunrise over the dunes before returning to Merzouga by camel. After breakfast, depart for Fes, the cultural and spiritual heart of Morocco. En route, pass through the Ziz Valley and the Middle Atlas Mountains, stopping at charming towns and scenic viewpoints along the way. Arrive in Fes and check into your hotel. Overnight stay in Fes."
      },
      {
        "day": "Day 6",
        "title": "Fes Sightseeing",
        "content": "Today, explore the ancient medina of Fes, a UNESCO World Heritage Site and one of the largest car-free urban areas in the world. Visit the historic University of Al Quaraouiyine, stroll through the bustling souks, and admire the intricate architecture of the Bou Inania Madrasa and the Al Attarine Madrasa. Discover the vibrant tanneries of Fes and learn about the traditional methods of leather production. In the evening, savor a delicious dinner at a local restaurant. Overnight stay in Fes."
      },
      {
        "day": "Day 7",
        "title": "Fes to Chefchaouen",
        "content": "After breakfast, depart for Chefchaouen, a picturesque town nestled in the Rif Mountains. Known for its distinctive blue-washed buildings and charming streets, Chefchaouen offers a unique and tranquil atmosphere. Spend the day exploring the narrow alleyways, browsing local handicrafts, and soaking up the relaxed vibe of this enchanting town. Overnight stay in Chefchaouen."
      },
      {
        "day": "Day 8",
        "title": "Chefchaouen to Casablanca",
        "content": "Today, journey to Casablanca, Morocco’s largest city and economic hub. Upon arrival, visit the magnificent Hassan II Mosque, one of the largest mosques in the world, and marvel at its stunning architecture and seaside location. Explore the bustling streets of Casablanca, take in the vibrant atmosphere of the central market, and enjoy a farewell dinner at a local restaurant. Overnight stay in Casablanca."
      },
      {
        "day": "Day 9",
        "title": "Departure",
        "content": "After breakfast, transfer to Casablanca Mohammed V International Airport for your departure flight. Bid farewell to Morocco with fond memories of your authentic Moroccan adventure. Safe travels!"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival",
        "desc": "Hassan II Mosque and transfer.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Capital",
        "desc": "Hassan Tower and Kasbah.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Day 3",
        "subtitle": "Blue Medina",
        "desc": "Scenic alleys in the Rif.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Fes",
        "day": "Days 4 & 5",
        "subtitle": "UNESCO City",
        "desc": "Full guided tour.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Sahara",
        "day": "Day 6",
        "subtitle": "Golden Dunes",
        "desc": "Camel trek and desert camp.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 6,
        "name": "Todra & Dades",
        "day": "Day 7",
        "subtitle": "Canyons",
        "desc": "300m rock walls.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 7,
        "name": "Ouarzazate",
        "day": "Day 8",
        "subtitle": "Ait Benhaddou",
        "desc": "Ancient earthen fortress.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 8,
        "name": "Marrakech",
        "day": "Day 9",
        "subtitle": "Red City Finale",
        "desc": "Majorelle and Jemaa El-Fna.",
        "coords": [
          31.629472,
          -7.981084
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.047,
        -7.1317
      ],
      [
        31.629472,
        -7.981084
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/thumbnail.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      },
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-01.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      },
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-02.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      },
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-03.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      },
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-04.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      },
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-05.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      },
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-06.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      },
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-07.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      },
      {
        "src": "/sahara-star-tours/desert-tours/9-day-authentic-morocco-tour/images/image-08.jpg",
        "cap": "9 Day Authentic Morocco Tour"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Fes",
      "Merzouga Sahara",
      "Todra & Dades",
      "Ouarzazate",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "9-days-desert-imperial-cities",
    "title": "9-Day Desert Dunes & Imperial Heritage Tour | Sahara Star Tours",
    "shortTitle": "9-Day Desert Dunes & Imperial Heritage",
    "description": "Experience the ultimate 9-day blend of imperial cities and Sahara desert. Explore Fes, Marrakech, Chefchaouen, and enjoy luxury glamping in Erg Chebbi.",
    "aboutHtml": "Morocco itinerary 9 days takes you on an adventure to discover the real treasures of Morocco. the tour includes the main top attractions of Morocco.<br/><br/>During this tour, you will discover the diverse geography of Morocco, the medieval kasbahs, and old cities that have stepped back in time and watch the world change. In addition, you will experience one thousand and one night in the desert.<br/><br/>The tour mixes culture with adventure and allows you to see the maximum of places in a short time.",
    "category": "desert-tours",
    "duration": "9 Days / 8 Nights",
    "durationDays": 9,
    "startingFrom": "Casablanca",
    "price": "From $1,150/person",
    "heroImage": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/thumbnail.jpg",
    "highlights": [
      "Ride camels and camp in the Desert",
      "Wander in the blue-washed city of Chefchaouen",
      "Discover the ancient Roman ruins in Volubilis",
      "Feed and take pictures with wild monkeys",
      "Discover the oldest surviving city in the world, Fez",
      "Explore exotic markets and souks of Morocco",
      "Wander in Marrakech and visit Jamaa El Fna"
    ],
    "inclusions": [
      "Guided city tours and monument fees",
      "Comfortable private transportation with guide English speaking",
      "Camel trek and the overnight in Luxury Camp",
      "Airport meet and great service",
      "Dinner at a local restaurant in Marrakech with Music and Moroccan dancing",
      "Half board during the tour",
      "Fuel",
      "8 Breakfasts and 4 dinners in the desert"
    ],
    "exclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency",
      "Tips to guide and driver (optional)",
      "Anything not stated in included part"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Casablanca - Rabat",
        "content": "Morocco itinerary 9 days starts at Casablanca. Arrival at Casablanca International Airport, where we will meet you and drive to Casablanca and Rabat, the capital of Morocco. In Casablanca, you will see the Hassan II Mosque, the largest outside Mecca, and experience the coastal seaside, Cornwall. Then we will leave to Rabat. Here, you will see the Hassan Tower and the Oudayas Kasbah, before entering your Riad in the medina. Night at Riad or Hotel"
      },
      {
        "day": "Day 2",
        "title": "Rabat - Chefchaouen",
        "content": "The second day of your Morocco itinerary takes you to Chefchaouen. After breakfast, you’ll visit Roman and Islamic ruins, the 20th-century Andalusian Gardens, and Hassan Tower, a 12th-century minaret. After around 4 hours, you reach Chefchaouen and you will be impressed by the majestic view along the way. You arrive to Chefchaouen in the evening. Overnight at your Riad in Chefchaouen."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen - Volubilis - Meknes - Fez",
        "content": "On the third day of our Morocco itinerary 9 days, we will head to Fez. The drive involves multiple stops along the way especially in Meknes and Volubilis. Volubilis is a great landmark in Morocco. It was founded by the Berber people in the 3rd century BC. After the fall of Carthage, the city became part of Mauretania. However, in 25 BC, King Juba II was placed on the throne and began building his royal capital at Volubilis. After Volubilis we will head to Meknes, which is another imperial city of Morocco. We will enjoy a guided tour in the old medina. We will explore the best tourist sites, including the door of Bad Mansour and the mausoleum of Moulay Ismail. After lunch, we will head to Fez for a night in a riad in the medina."
      },
      {
        "day": "Day 4",
        "title": "Fez guided tour",
        "content": "Breakfast in your riad, then start a tour of the Medina where you will visit many hidden treasures that only the locals know. Fez has been the capital of Morocco for over 350 years and is home to the University of Al Karaouine, the oldest university in the world. Your guided tour will take you to Moulay Idriss mausoleum, the Nejjarine Fountains, and the Tanneries. After lunch, you can see the outside of the Royal Palace and walk through the famous Jewish quarter “Mellah”, where you will have the opportunity to visit one of the few synagogues of life in Morocco. Your visit to Fez includes a short visit to the famous ceramic factory, then you can enjoy a panoramic view of the entire medina. In the afternoon we will go to the new city for a drink. Overnight at your RIAD."
      },
      {
        "day": "Day 5",
        "title": "Fez - Azrou - Midlet - Ziz Valley - Merzouga",
        "content": "After breakfast in your Riad, you will go south-east following the caravan route to Merzouga. During this trip, you will experience a glimpse of the Middle Atlas and the upper Atlas Mountains. Stop at the cedar forest, the largest in Morocco, on the mountains of the Middle Atlas, where you can see the barbarian monkeys. after lunch, in Midelt, you will continue through the large open desert, and notice how the landscape changes to reveal hints of the desert as you approach the city Errachidia. Your journey continues along the lush Ziz Valley and the Tafilalet palm grove, famous for the culture of the date. This area is the foundation of the Alaouite dynasty – the current royal family in Morocco. You will arrive in Merzouga at the end of the afternoon. Another journey will start as you ride your camels that will take you to spend your night in the desert. At night, you will eat Berber food and dance under Berber music."
      },
      {
        "day": "Day 6",
        "title": "Merzouga - Todra Gorges - Dades Gorges",
        "content": "Early in the morning, your camel guide will wake you up to watch the sun rising. Maybe it’s the best sunrise in your life. Then, After breakfast at the camp, you will trek camels to the village of Merzouga. En route, you might not fail to appreciate the unique and spectacular beauty of the sand dunes of “Chebbi” – in the changing light of day. Later, we drive to Tinghir, and Todra gorges – the tallest and narrowest gorges in Morocco. After lunch at the heart of the gorges, we will drive through the Dades Valley, where you will see the majestic sand castles and the amazing rock formations known as “monkey toes”. Overnight will be in at your hotel overlooking the Dades valley. Dinner & breakfast included"
      },
      {
        "day": "Day 7",
        "title": "Dades Valley - Ait Ben Haddou - Marrakech",
        "content": "After breakfast at the hotel, we drive through the Dades Valley to Kalaat Mgouna and Ouarzazate. The road through the Dades Valley is the path of a thousand Casbahs – providing plenty of opportunities to take some of the best pictures. We will stop at Kalaat Mgouna, “the pink city”, then in Ait Ait Ben Haddou before we continue our Morocco itinerary 9 days to Marrakech. Kasbah Ait Ben Haddou was built by Et Hami El Glaoui, one of the last Berber leaders during the 18th century. After visiting the Kasbah, your journey will continue through the twisty itinerary of Tizi n’Tichka (2260m) on the High Atlas. By the evening, you arrive to Marrakech. Overnight at your hotel in close to Jamaa El Fna."
      },
      {
        "day": "Day 8",
        "title": "Marrakech guided tour",
        "content": "After breakfast in your RIAD, you can enjoy a guided morning tour of Marrakech, “the red city of Morocco”. Your guide will ensure that you see all the sites with historical values and cultural interests, including the Minaret Koutoubia, the Saadian tombs, the beautiful Bahia Palace and Ben Youssef Koranic school. through the alleys – get a chance to admire all the different artisans of the medina exercising their trades before arriving at the famous Jamaa El Fna square. Lunch in a restaurant near the square. Then in the afternoon visits the Majorelle Gardens, and a quick tour of Gueliz – the new city of Marrakech. Later, after dinner, you will have the opportunity to walk through the Jama El Fna square entertained by magicians, storytellers, tooth pullers, and food vendors. Overnight will be at your riad."
      },
      {
        "day": "Day 9",
        "title": "End of 9 days Morocco itinerary",
        "content": "Today, your Morocco itinerary 9 days from Casablanca comes to end. Our driver will check for your flight details and comes to transfer you to the airport. We hope that you enjoyed Morocco and you had great memories with us."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival",
        "desc": "Hassan II Mosque and transfer.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Capital",
        "desc": "Hassan Tower and Kasbah.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Day 3",
        "subtitle": "Blue Medina",
        "desc": "Scenic alleys in the Rif.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Fes",
        "day": "Days 4 & 5",
        "subtitle": "UNESCO City",
        "desc": "Full guided tour.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Sahara",
        "day": "Day 6",
        "subtitle": "Golden Dunes",
        "desc": "Camel trek and desert camp.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 6,
        "name": "Todra & Dades",
        "day": "Day 7",
        "subtitle": "Canyons",
        "desc": "300m rock walls.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 7,
        "name": "Ouarzazate",
        "day": "Day 8",
        "subtitle": "Ait Benhaddou",
        "desc": "Ancient earthen fortress.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 8,
        "name": "Marrakech",
        "day": "Day 9",
        "subtitle": "Red City Finale",
        "desc": "Majorelle and Jemaa El-Fna.",
        "coords": [
          31.629472,
          -7.981084
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.047,
        -7.1317
      ],
      [
        31.629472,
        -7.981084
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/thumbnail.jpg",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-01.jpg",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-02.jpg",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-03.jpg",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-04.webp",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-05.webp",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-06.jpg",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-07.jpg",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-itinerary-9-days-desert-imperial-cities/images/image-08.jpg",
        "cap": "Morocco Itinerary 9 Days, Desert & Imperial Cities"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Fes",
      "Merzouga Sahara",
      "Todra & Dades",
      "Ouarzazate",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara",
      "imperial-cities",
      "cultural",
      "heritage"
    ]
  },
  {
    "slug": "10-days-morocco-couple-tour",
    "title": "10-Day Romantic Morocco Couple Tour Package | Sahara Star Tours",
    "shortTitle": "10-Day Romantic Morocco Couple Tour",
    "description": "A handcrafted 10-day romantic Morocco tour for couples. Private luxury riads, candlelit desert dinners in Merzouga, scenic Atlas views, and Marrakech.",
    "aboutHtml": "10 Days Morocco Honeymoon Tour takes you to explore the romantic luxury riad, beautiful and soothing sights in Morocco. An English-speaking driver guide with a private car will be available for your service",
    "category": "desert-tours",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "startingFrom": "Casablanca",
    "price": "From $1,250/person",
    "heroImage": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/thumbnail.jpg",
    "highlights": [
      "Meeting Point: At your hotel or Airport.",
      "Starting Location: Casablanca",
      "Ending Location: Marrakech"
    ],
    "inclusions": [
      "Guided city tours and monument fees",
      "Comfortable private transportation with guide English speaking",
      "Camel trek and the overnight in Luxury Camp",
      "Airport meet and greet service",
      "Dinner at a local restaurant in Marrakech with Music and Moroccan dancing",
      "Half board during the tour",
      "Fuel"
    ],
    "exclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Casablanca Arrival – Rabat",
        "content": "Our Morocco Couple Tours start by meeting your driver/guide at the airport arrival. If you arrive earlier at Casablanca, a good idea can be to visit the Hassan 2 mosque in Casablanca (the 3rd largest in the world). Then we’ll continue the journey to the capital city of Rabat, which we’ll reach in one hour, the capital city of Morocco. Much quieter than the hectic metropolis of Casablanca, Rabat also has a much richer history, due to being an important city during the various dynasties that succeeded on the throne. In Rabat we will visit the 12th-century Oudaya Kasbah to explore its Andalusian Gardens and the Hassan Tower. Further, we can dwell further into the past and visit the Roman city of Sala and the Merenid necropolis of Chellah (10th century and the royal tombs of Merinid royal family). Dinner and overnight stay at Luxury Riad in Rabat"
      },
      {
        "day": "Day 2",
        "title": "Rabat to Chefchaouen – Blue City of Morocco",
        "content": "Breakfast at your Riad, then, meet your driver guide, who will take you to explore more historical monuments in Rabat, visit the metropolis Kasbah Challah and enjoy a cup of tea in a terrace overlooking the Bouregrag river, afterwards we will head to the blue city of Chefchaouen, the Pearl of the North one of the best destinations in the world, discovering it in the company of a local guide to make a complete visit to this charming mountain town. Besides, we will walk through its narrow blue streets, among its old houses painted deep blue. In addition, we will contemplate its beautiful panoramic views. Overnight dinner and breakfast in a charming yet luxurious riad."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen – Meknes – Volubilis – Fez",
        "content": "After leaving the blue city of Chefchaouen, we’ll explore other cities full of history and heritage, crossing the small villages of the Rif Mountains to reach one of the beautiful Imperial citiy of Meknes, founded by the ruler Moulay Ismail, we’ll explore the beautiful gate Bab Al Mansour, Mausoleum of Moulay Ismail, the royal stables, etc. Thereupon, we will have lunch in a local restaurant, then we will head towards Volubilis, the old Roman Capital and wonder of Morocco, declared a world heritage site. Within two hours of travel, we’ll arrive at the majestic city of Fez, one of the four so-called Imperial cities. The city of Fez is considered the religious and cultural center of the country and is an essential stop for all tourists throughout Morocco. Check in to our charming riad in the heart of the old Medina with overnight dinner and breakfast in a Luxury riad."
      },
      {
        "day": "Day 4",
        "title": "Guided City Tour of Fez",
        "content": "The fourth day is dedicated to the discovery of Fes. Your local guide/driver will meet you at your accommodation and start a guided tour through the narrow streets to discover all the charms of the most culturally rich cities of Morocco. However, one day is hardly enough to visit all the wonders of the most ancient and world-famous city for its leather, metalwork, and the historical monuments, including Medersa Bouinania(Koranic school), Bab Boujloud (blue gate), the leather tanneries, Najjarine Museum of Wooden Arts. You might want to just roam around some of its 9500 narrow alleys and just take in all the sounds, sights, and smells. Whatever your choice, nothing can prepare you for this assault on the senses. Explore the world’s largest intact medieval city, which was declared the first Arab designated World Heritage Site by UNESCO. Overnight dinner and breakfast in a charming Luxury riad."
      },
      {
        "day": "Day 5",
        "title": "Fes – Ifran – Middle Atlas – Midelt – Errachidia – Erfoud – Merzouga",
        "content": "After breakfast, meet your driver/guide again for a new journey to the desert. The first stop is Ifrane, a resort built by the French in 1929. With its Alpine houses, palaces, trimmed gardens, and leafy park surrounding a lake, you could almost be in Switzerland. The surrounding countryside is pigmented by apricots, walnuts, and plum trees. Discover pictures of rural Berber life as we approach Midelt, a city in the Middle Atlas Mountains, where we’ll have lunch here. A couple of hours later, we’ll arrive in Erfoud, the capital of the main date-producing area in Morocco. The change in landscape is quite noticeable since we are now getting closer to the Sahara. Given the time, we will visit the ancient Jewish district and the fossil factory if time allows. Then we’ll continue to reach Merzouga, where we will spend a night in a hotel at the foot of the dunes. Dinner and accommodation in the Luxury Hotel Kasbah."
      },
      {
        "day": "Day 6",
        "title": "Merzouga – Khamlia – Desert Tour – Merzouga",
        "content": "A full day is dedicated to exploring the wonders of the Desert and the regions of Merzouga with the Erg tour: the area where there are ancient fossils of the desert, in the village of Tissrdmin, a popular film shooting place. Meet the locals and learn about their culture, and visit a nomad family, where we will learn about them and enjoy Berber hospitality with a cup of tea prepared by them. We’ll continue towards the village of Khamlia, famous for its Gnawa music. Returning to Merzouga, you can enjoy the peace of the desert in the hotel on the edge of the dunes. You will start a camel tour to stroll the Erg Chebbi dunes to enjoy a lifetime sunset over the golden sand dunes and spend a memorable, romantic night under a nomadic tent in a desert camp. Overnight stay in Luxury Sanmao desert camp HB."
      },
      {
        "day": "Day 7",
        "title": "Merzourga – Rissani – Todra Gorges – Dades Valley",
        "content": "Observe sunrise by waking up early, have breakfast and ride camels or Jeep back to the village of Merzouga for an exceptional day in southern Morocco; we will leave towards Rissani, origin of the Alaoui dynasty and first imperial city of Morocco. After visiting markets of Rissani, we will reach Erfoud rich in black stone and marine fossils (if you want, we can stop at a fossil factory), we’ll continue to reach the Gorges of Todra, 15 km from Tinghir. You will experience an arresting spectacle with its crystal-clear river, huge walls changing color to magical effect as the day unfolds. As we pass Tinerir (1400 meters altitude), there is an important center for the Berber nomad tribes with its palm grove, traditional carpets and the Ksours. After one hour, we will reach Dades valley, a green valley famous by its fortified thousand kasbahs, dinner in a Luxury Hotel."
      },
      {
        "day": "Day 8",
        "title": "Dades Valley – Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Tizi N’Tichka Pass – Marrakech",
        "content": "Traditional Breakfast in Riad, a new day of adventure in Morocco in the company of your driver/guide, we’ll drive through the road of thousand Kasbahs and valleys to reach Rose valley, famous for its annual festival, cultivating a unique species of rose with extraordinary fragrances. Afterwards we’ll head to Ouarzazate, a beautiful landscape i.e changing as you go through from the green to red ocher zones and palm groves. The journey continues through the Berber art monuments that are unique and located at a junction between the desert and the mountain. Then we continue to reach the kasbah Amridil (lies in the Skoura oasis). After this, we will discover Ouarzazate, beautiful and fortified villages, and the Kasbah Ait Benhaddou. The beauty of this place has attracted numerous film productions over the years. Lunch, overlooking the Kasbah, and then we continue towards the High Atlas Mountains. Overnight dinner and breakfast in a charming Luxury riad."
      },
      {
        "day": "Day 9",
        "title": "Exploring Marrakech – Marrakech City Tour",
        "content": "Meet your guide/driver after breakfast in the riad, to start an explorative journey of the amazing and attractive imperial city of Morocco, Marrakesh, travel back in time with a historian guide who will ensure that you see all the sites with historical and cultural interest, including the Koutoubia Minaret; the Saadian tombs; the beautiful Palace of Bahia and the Ben Youssef Coranic School. Finally, end the morning by walking through the medina alleys -getting a chance to admire all of the different artisans performing their crafts before arriving at the famous Jamaa El Fna Square. Lunch at a restaurant near the square, and then in the afternoon visit the Majorelle gardens, have a short tour at Gueliz -the new city in Marrakech. After dinner you’ll have the option to walk through the square entertained by magicians, storytellers, tooth-pullers and food seller’s Overnight dinner and breakfast in a charming Luxury riad."
      },
      {
        "day": "Day 10",
        "title": "Transfer to Marrakech Airport or Casablanca Airport",
        "content": "With an early breakfast in your riad, we will drive you to Casablanca/Marrakech airport for your flight back home. Your tour ends at the airport. End of our Morocco Couple Tour Packages. Note: our Morocco Couple Tour Packages are designed to meet any couple’s needs. However, if you want to customize a new tour package, don’t hesitate to contact us."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival & Hassan II Mosque",
        "desc": "Coastal introduction to Morocco.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Imperial Capital",
        "desc": "Hassan Tower and Kasbah des Oudayas.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Days 2 & 3",
        "subtitle": "Romantic Blue City",
        "desc": "Charming mountain medina and panoramic viewpoints.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Fes Medina",
        "day": "Days 4 & 5",
        "subtitle": "UNESCO World Heritage",
        "desc": "Full exploration of the sacred imperial capital.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Sahara",
        "day": "Days 6 & 7",
        "subtitle": "Erg Chebbi Romantic Glamping",
        "desc": "Sunset camel ride, private luxury tent, and stargazing.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 6,
        "name": "Dades & Todra Gorges",
        "day": "Day 8",
        "subtitle": "Grand Moroccan Canyons",
        "desc": "Towering red rock walls and Valley of the Roses.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 7,
        "name": "Ait Benhaddou",
        "day": "Day 9",
        "subtitle": "Historic Fortress Kasbah",
        "desc": "Famous cinematic fortress and Hollywood film sets.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 8,
        "name": "Marrakech",
        "day": "Days 9 & 10",
        "subtitle": "The Red City Grand Finale",
        "desc": "Jemaa El-Fna, Bahia Palace, and luxury spa hammam.",
        "coords": [
          31.629472,
          -7.981084
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        32.6828,
        -4.7337
      ],
      [
        31.9315,
        -4.4266
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        31.3715,
        -5.9867
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.047,
        -7.1317
      ],
      [
        31.629472,
        -7.981084
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/thumbnail.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      },
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-01.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      },
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-02.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      },
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-03.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      },
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-04.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      },
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-05.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      },
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-06.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      },
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-07.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      },
      {
        "src": "/sahara-star-tours/desert-tours/10-days-morocco-couple-tour-packages/images/image-08.jpg",
        "cap": "10 Days Casablanca Tour: Morocco Couple Tour Packages"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Fes Medina",
      "Merzouga Sahara",
      "Dades & Todra Gorges",
      "Ait Benhaddou",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "10-days-imperial-cities-tour",
    "title": "10-Day Imperial Cities & Sahara Expedition | Sahara Star Tours",
    "shortTitle": "10-Day Imperial Cities & Sahara Expedition",
    "description": "Journey through Morocco's royal heritage on a 10-day tour from Casablanca. Explore Rabat, Meknes, Volubilis, medieval Fes, the Sahara, and Marrakech.",
    "aboutHtml": "Unveil centuries of dynastic grandeur on this 10-day Imperial Cities tour from Casablanca. Visit the impressive coastal landmark of Hassan II Mosque, explore Rabat’s royal mausoleum, discover the Roman ruins of Volubilis, and wander Meknes' imperial gates. In Fes, lose yourself in ancient artisan quarters before heading south to the Sahara Desert for camel trekking and luxury dune camping. Cross the High Atlas via the Kasbah of Ait Ben Haddou and complete your cultural voyage in vibrant Marrakech.",
    "category": "desert-tours",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "startingFrom": "Casablanca",
    "price": "From $1,290/person",
    "heroImage": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/thumbnail.webp",
    "highlights": [
      "Explore the UNESCO World Heritage ancient Medinas and vibrant souks",
      "Traverse the majestic High Atlas Mountains via the scenic Tizi n'Tichka pass",
      "Visit the legendary Kasbah Ait Ben Haddou, famous for Hollywood blockbusters",
      "Experience an authentic sunset camel trek across the golden Sahara dunes",
      "Spend a magical night glamping under the stars in a luxury desert camp",
      "Discover breathtaking oases, dramatic gorges (Todra & Dades), and lush valleys",
      "Indulge in authentic Moroccan cuisine and traditional Berber hospitality"
    ],
    "inclusions": [
      "Pick-up and drop-off at your airport, hotel, or riad",
      "Private transportation in a modern, air-conditioned 4x4 or minivan",
      "English/Spanish speaking professional driver and local guides",
      "Overnight accommodations in highly-rated authentic Riads and Hotels",
      "1 Night in a Luxury Desert Camp in the Sahara (private tent with ensuite bathroom)",
      "Sunset and sunrise camel trekking in the desert (one camel per person)",
      "Daily breakfasts and specified dinners (refer to itinerary)",
      "Local taxes and fuel surcharges"
    ],
    "exclusions": [
      "International flight tickets",
      "Travel and medical insurance",
      "Lunches and mid-day snacks",
      "Beverages and drinks during meals",
      "Entrance fees to historical monuments and museums",
      "Gratuities and tips for guides/drivers",
      "Personal expenses and souvenirs"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival – Casablance / Rabat",
        "content": "Arriving in Casablanca, you will be assisted by an English-speaking driver. Then you will be transferred to start the visit to the beautiful city of Rabat, the capital of Morocco. In this city, you will see outside of the Royal Palace, the Mausoleum of Mohammed V, the Hassan Tower and the Kasbah of the Oudaya. Later, after lunch we will continue our journey to Tangier including a stop in the Old Portuguese capital. Overnight and Dinner in Riad."
      },
      {
        "day": "Day 2",
        "title": "Rabat – Chefchaouen (Blue City of Morocco)",
        "content": "Breakfast at your Riad, then, meet your driver guide, who will take you to explore more historical monuments in Rabat, visit the metropolis Kasbah Challah and enjoy a cup of tea in a terrace overlooking the Bouregrag river, afterwards we will head to the blue city of chefchaouen, the Pearl of the North one of the best destinations in the world, discovering it in the company of a local guide to make a complete visit to this charming mountain town. Besides, we will walk through its narrow blue streets, among its old houses painted deep blue. In addition, we will contemplate its beautiful panoramic views. Overnight dinner and breakfast in a charming yet Luxury riad."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen - Meknes - Volubilis - Fes",
        "content": "After leaving the blue city of Chefchaouen, we’ll explore other cities full of history and heritage, crossing the small villages of the Rif Mountains to reach one of the beautiful Imperial citiy of Meknes, founded by the ruler Moulay Ismail, we’ll explore the beautiful gate Bab Al Mansour, Mausoleum of Moulay Ismail, the royal stables, etc. Thereupon, we will have lunch in a local restaurant, then we will head towards Volubilis, the old Roman Capital and wonder of Morocco, declared a world heritage site. Within two hours of travel, we’ll arrive at the majestic city of Fez, one of the four so-called Imperial cities. The city of Fez is considered as the religious and cultural center of the country and is an essential stop of all tourists throughout Morocco. Check in to our charming riad in the heart of old Medina with overnight dinner and breakfast in a Luxury riad."
      },
      {
        "day": "Day 4",
        "title": "Fes - Ifran - Azrou - Midelt - Ziz Gorges - Erracidia - Erfoud - Rissani - Merzouga Desert",
        "content": "Today is time to relax after the hustle and bustle of Fes, and we enjoy a stunning drive rewarded by top Moroccan views, cross the Mid-Atlas mountains region. Stop in Ifran, a beautiful alpine area, surrounded by huge pine trees and a tranquil mountain setting. Stop in Azrou to meet the Barbary apes and nomadic shepherds on the scenic, continue the journey between the Middle and High Atlas mountain ranges. Independent lunch in Midelt, then, head to the desert over Ziz River through a series of fortified villages made by clay, then to Erfoud and Rissani, head out to the Erg Chebbi dunes located in town of Merzouga sand dunes, the dunes are renowned for their incredible height and size. In parts, the vast sand pile reaches skyward to heights of 150 meters! You will have camel ride and Atv Tours in the high dunes.watching the sunset than continue to the Berber camp. Tonight enjoy a local meal, music and a fantastic night out under the Saharan stars. Overnight – Erg Chebbi dunes at nomadic desert camp."
      },
      {
        "day": "Day 5",
        "title": "Merzouga – desert tour By 4x4",
        "content": "Earlier, after your breakfast, you will tour the area of Erg Chebbi. Visiting Khamlia is a little village in the desert by the biggest dunes in Erg Chebbi; also you will visit a Berber residence and listen to the indigenous Gnawa music, which had originated in West Africa. Moreover, you will visit some deserted mines and the Oasis of the Palm Trees. Equally important, you will visit the small oasis town of Rissani which is near the northwest edge of the Sahara. This picturesque city has gained popularity, not only as of the Tafilalet capital but also as a destination where visitors can still experience the true mystique of Morocco. In addition, visiting the famous market where you can find jewelry, souvenirs, gifts, spices, art, and crafts. Also, lunch will be a traditional Moroccan pizza called “Medfouna”. After you will come back to the hotel in Merzouga and prepare for your journey to Erg Chebbi to take a camel ride back to the desert camp where you will enjoy a second night under the stars."
      },
      {
        "day": "Day 6",
        "title": "Merzouga – Erfoud – Todgha Gorges – Boumalne Dades",
        "content": "After having a sunrise breakfast we will break camp and ride our camels out of the desert and back to our original point of departure. Next, travel back to the hotel so that you can shower, breakfast. Collect your luggage before starting on your way back towards Ouarzazate. More that, visit the canal of irrigation in Jorf. After that, we continue our road to todgha gorges where we will have a stop to visit the higher gorges in all Morocco. Then we will cross the valley of roses, we will visit the cooperative of women where you can find all kinds of rose products and bio. Dades Valley: Your accommodations and dinner will in a hotel at Dades Valley."
      },
      {
        "day": "Day 7",
        "title": "Boumalne Dades – Ouarzazate – Aït Benhaddou – Marrakech",
        "content": "Earlier, after having breakfast, we visit Kasbah Taourirte and the cinema studios of Atlas & CLA Studios, where many movies were produced, thus being called The Hollywood of Africa, like Lawrence of Arabia, Sahara… further, we depart to Kasbah Ait Ben Hadou through Tizi Ntichka pass an elevation of 2260m. In addition, visit the UNESCO World Heritage Kasbah Ait Ben Haddou is a spectacular fortified village. After we continue our road, you will stop in Taddart to have lunch at a Berber village in a panoramic restaurant. Once you complete your lunch, we will continue your travel to Marrakech. Once you arrive in Marrakech, you will be dropped off at your hotel / Riad. Accommodation and dinner at the Hotel."
      },
      {
        "day": "Day 8",
        "title": "Marrakech – Visit the red city",
        "content": "After your morning breakfast at your hotel, our guide and driver will pick you up to explore the city of Marrakech; you will have the opportunity to discover the amazing old Medina. You will see the Majorelle Garden, which hosts more than 15 bird species that are prevalent in North Africa, has many fountains and a remarkable collection of cacti. The garden was once owned by Yves Saint-Laurent and Pierre Bergé, between 1980 and 2008. After Yves Saint Laurent’s death in 2008, his ashes were scattered about in the Majorelle Garden. Also, you will visit Marrakech’s most visited monuments, the Saadian Tombs, the Koutoubia Mosque, and the New City of Marrakech – Gueliz. After we finish our tour of the city of Marrakesh, you will return to your hotel for the evening. Your dinner will be in your hotel."
      },
      {
        "day": "Day 9",
        "title": "Marrakech - Essaouira",
        "content": "Our Driver Guide will pick you up from your Hotel/Riad in Marrakech. Departure from your hotel towards the Atlantic Coast, Through Ounagha, well known to the city of Essaouira locates 170KM from the Red City of Marrakech. Lunch on the harbor, then free time to explore the medina and the ancient monuments Mellah (Jewish Quarter), the Skala and Sidi Mohamed Ben Abdellah Museum and finally we recommend you to watch the beautiful sunset aand glass of Mojito on the terrace Taraus Coffee. Essaouira is famous by Thuya wood Crafts. Dinner and overnight in the hotel."
      },
      {
        "day": "Day 10",
        "title": "Essaouira – Casablanca Airport",
        "content": "After breakfast and depends on your flight time, we will drive to Casablanca airport to catch your flight. End of our 10 Days Morocco Imperial Cities Tour from Casablanca. Note: we can customize this tour or any tour you want to meet what you’re looking for. So, don’t hesitate to contact us directly."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Atlantic Metropole",
        "desc": "Hassan II Mosque and Corniche boulevard.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Days 1 & 2",
        "subtitle": "Administrative Capital",
        "desc": "Hassan Tower, Royal Palace, and Kasbah of the Udayas.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Days 2 & 3",
        "subtitle": "The Blue Pearl",
        "desc": "Stunning blue alleys in the Rif Mountains.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Volubilis & Meknes",
        "day": "Day 4",
        "subtitle": "Roman & Imperial Legacy",
        "desc": "UNESCO Roman mosaics and Bab El Mansour gate.",
        "coords": [
          34.072222,
          -5.554167
        ]
      },
      {
        "number": 5,
        "name": "Fes Medina",
        "day": "Days 5 & 6",
        "subtitle": "Spiritual Heartland",
        "desc": "Ancient medieval medina, tanneries, and artisans.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 6,
        "name": "Ifrane & Cedar Forest",
        "day": "Day 7",
        "subtitle": "Middle Atlas Mountains",
        "desc": "Alpine architecture and Barbary ape sanctuaries.",
        "coords": [
          33.5273,
          -5.1054
        ]
      },
      {
        "number": 7,
        "name": "Beni Mellal",
        "day": "Day 7",
        "subtitle": "Olive & Citrus Plains",
        "desc": "Scenic passage through the foothills of the Atlas.",
        "coords": [
          32.3373,
          -6.3498
        ]
      },
      {
        "number": 8,
        "name": "Marrakech",
        "day": "Days 8, 9 & 10",
        "subtitle": "Imperial Red City",
        "desc": "Majorelle Garden, Bahia Palace, and vibrant souks.",
        "coords": [
          31.629472,
          -7.981084
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.072222,
        -5.554167
      ],
      [
        33.893791,
        -5.551624
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        32.8,
        -5.8
      ],
      [
        32.3373,
        -6.3498
      ],
      [
        31.629472,
        -7.981084
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/thumbnail.webp",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-01.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-02.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-03.png",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-04.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-05.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-06.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-07.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-08.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-09.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-10.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-11.png",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-12.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/morocco-imperial-cities-tour-from-casablanca/images/image-13.jpg",
        "cap": "10 Days Morocco Imperial Cities Tour From Casablanca"
      }
    ],
    "featured": true,
    "badge": "POPULAR",
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Volubilis & Meknes",
      "Fes Medina",
      "Ifrane & Cedar Forest",
      "Beni Mellal",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara",
      "imperial-cities",
      "cultural",
      "heritage"
    ]
  },
  {
    "slug": "12-days-tour-from-casablanca",
    "title": "12-Day Grand Morocco & Sahara Discovery | Sahara Star Tours",
    "shortTitle": "12-Day Grand Morocco & Sahara Discovery",
    "description": "Grand 12-day private Morocco expedition from Casablanca. Experience northern Chefchaouen, imperial Fes, golden Merzouga dunes, Todra Gorges, and Marrakech.",
    "aboutHtml": "Experience the ultimate 12-day grand Morocco expedition, seamlessly linking northern Mediterranean charm with desert majesty and southern oasis valleys. Starting from Casablanca, journey through Rabat to the picturesque blue village of Chefchaouen in the Rif Mountains. Discover Fes’s UNESCO medina, ride camels into the golden dunes of Erg Chebbi, and spend a night in luxury Sahara glamping. Travel through the dramatic Todra Gorges, Kasbah Ait Ben Haddou, and over the High Atlas to the bustling souks and palaces of Marrakech.",
    "category": "desert-tours",
    "duration": "12 Days / 11 Nights",
    "durationDays": 12,
    "startingFrom": "Casablanca",
    "price": "From $1,450/person",
    "heroImage": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/thumbnail.jpg",
    "highlights": [
      "Meeting Point: At your hotel or Airport.",
      "Starting Location: Casablanca",
      "Ending Location: Casablanca or Marrakech"
    ],
    "inclusions": [
      "Transportation by Air-conditioned 4WD or Minivan",
      "Local guide fees in the imperial cities",
      "Professional driver/guide during the tour",
      "11 nights Accommodation in Riads & Kasbah (Breakfast and dinner)",
      "One night in a Traditional Berber Tents (HB).",
      "Camel Ride (Camel per each individual)"
    ],
    "exclusions": [
      "Lunch",
      "Tips",
      "Drinks and personal items",
      "Airline tickets"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Casablanca Arrival – Rabat",
        "content": "Meet your driver/guide at the airport arrival. If you arrive into Casablanca early in day, it can be a good idea to visit the Hassan 2 mosque in Casablanca, (the 3rd largest in the world). Then, continue to the capital city of Rabat One hour later we reach Rabat, the capital city of Morocco. Much more quieter than the hectic metropolis of Casablanca, Rabat has also a much richer history, having been an important city during the various dynasties that succeeded on the throne. In Rabat we will visit the 12th century Oudaya Kasbah to explore its Andalusian Gardens and the Hassan Tower. We can dwell further into the past and visit the Roman city of Sala and the Merenid necropolis of Chellah ( chellah a fortified Kasbah dated back to the 10th century and the royal tombs of Merinid royal family). Dinner and overnight in Rabat."
      },
      {
        "day": "Day 2",
        "title": "Rabat to Chefchaouen",
        "content": "Breakfast at your Riad, then, meet your driver guide, who is take you to explore more historical monuments in Rabat, visit the metropolis Kasbah Challah and enjoy a cup of tea in a terrace overlooking the Bouregrag river, then, we will head to the blue city of chefchaouen, the pearl of the north, one of the best destinations in the world, which we will discover in the company of a local guide to make a complete visit to this charming mountain town. We will walk through its narrow blue streets, among its old houses painted deep blue. In addition we will contemplate its beautiful panoramic views. Overnight dinner and breakfast in a charming riad."
      },
      {
        "day": "Day 3",
        "title": "Free Day In Chefchaouen To Explore The The City",
        "content": "Today is your opportunity to fully immerse yourself in the magical blue-washed charm of Chefchaouen at your own pace. Wander through the narrow, winding alleys of the medina, where every corner reveals a new shade of blue and picture-perfect spots ideal for photography. Visit the vibrant Plaza Uta el-Hammam, the heart of the town, lined with cafés and traditional Moroccan restaurants where you can relax and soak in the local atmosphere. Don’t miss a walk to Ras El Ma, a natural spring where locals gather to wash clothes and socialize, It’s a peaceful spot perfect for a short hike or a refreshing break. Explore the artisan shops filled with handmade wool garments, woven blankets, and beautiful ceramics unique to the Rif Mountains region. For panoramic views, hike up to the Spanish Mosque at sunset, where you’ll be rewarded with breathtaking vistas over the town and surrounding mountains. Whether you’re interested in culture, photography, nature, or simply slowing down, Chefchaouen offers a serene yet enriching experience unlike anywhere else in Morocco. .Overnight and dinner in a charming riad."
      },
      {
        "day": "Day 4",
        "title": "Chefchaouen – Meknes – Volubilis – Fez",
        "content": "We will leave the beautiful blue of Chefchaouen to explore another cities full of history and heritage, crossing the small villages of the Rif Mountains to reach one of the beautiful imperial cities, the city of Meknes, founded in the 17th century by the rulers Moulay Ismail, in Meknes we will explore the beautiful gate Bab Al Mansour, the Maulsoleum Moulay ismail, and, then, the royal stables, continue to Fes, we will stop for lunch in a local restaurant. After lunch, we will head towards Volubilis, the old Roman capital, one of the wonders of Morocco, and a world heritage site. Continue to reach Fes about two hours of travel, arrival at the majestic city of Fez, one of the four so-called imperial cities next to Marrakech, Meknes, and Rabat. The city of Fez is considered as the religious and cultural center of the country, and is an essential stop on all tours through Morocco. Check in to our charming riad in the heart of the old Medina."
      },
      {
        "day": "Day 5",
        "title": "Guided City Tour Of Fez",
        "content": "The third day is dedicated to the discovery of Fes. Your local guide and your driver will meet you at your accommodation and start a guided tour through the narrow streets to discover all the charms of the most cultural of the first imperial cities of Morocco. One day is hardly enough to visit all the wonders of the most ancient of the imperial cities and world famous for its leather and metalwork as well as the historical monuments including; Medersa Bouinania(Koranic school ), Bab Boujloud (blue gate), the leather tanneries, Najjarine Museum of Wooden Arts and Crafts. You might also want to just roam around some of its 9500 narrow alleys and just take in all the sounds, smells, sights and spells. Whatever your choice, nothing can prepare you for this assault on the senses. Fes conjures the image of the quintessential fabled Arab city as Baghdad at the time of the 1001 nights… Within the walls of its Medina lies the world’s largest intact medieval city which was to become the first Arab designated World Heritage Site by the UNESCO."
      },
      {
        "day": "Day 6",
        "title": "Fes – Ifran – Middle Atlas – Midelt – Errachidia – Erfoud – Merzouga",
        "content": "Today we will leave Fes behind, after breakfast, meet your driver/guide again for a new journey to the desert, our first stop is Ifrane, a colonial alpine resort built by the French in 1929. With its alpine houses and palaces, trimmed gardens, leafy park surrounding a mountain fed lake, you could almost be in … Switzerland. The surrounding countryside is pigmented by apricots, walnuts and plum trees and pictures of rural Berber life as we approach Midelt, a city in the middle atlas mountains, here we will stop to have lunch. After lunch and a few hours later we arrive in Erfoud, the capital of the main dates producing area in Morocco. The change in landscape is quite noticeable since we are now getting closer to the Sahara. Given the time we will visit the ancient Jewish district and fossils manufactory if time allowed. Continue to reach Merzouga where we will spend a night in Hotel at the foot of the dunes. Dinner and accommodation in Hotel."
      },
      {
        "day": "Day 7",
        "title": "Merzouga – Khamlia – Desert Tour – Merzouga",
        "content": "A full day dedicated to explore the desert and discover its wonders, meet the locals and learn about the local culture, the day will be dedicated to the discovery of the region of Merzouga with the Erg tour: the area where there are the natural fossils of the desert, in the village of Tissrdmin where many films were shot, the black desert with its volcanic stones and the visit to a nomad family, where we will learn about the life in the desert and enjoy a Berber hospitality with a cup of tea with prepared by the nomad family, Our journey continues then, towards the village of Khamlia, famous for its inhabitants from Black Africa and for their music Gnawa. Returning to Merzouga you can enjoy the peace of the desert in the hotel on the edge of the dunes, waiting for a new adventure tour through the sand dunes of Erg Chebbi. You will start a camel tour to stroll the Erg Chebbi dunes to enjoy a lifetime sunset over the golden sand dunes and spend a memorable romantic night under nomadic tent in a desert camp. Overnight in the desert camp in HB"
      },
      {
        "day": "Day 8",
        "title": "Merzourga – Rissani – Todra Gorges – Dades Valley",
        "content": "Wake up early to attend the sun rise over the dunes, take breakfast and ride camels or Jeep back to the village of Merzouga to meet your driver/guide for a new exceptional day in southern Morocco; we will leave towards of Rissani, origin of the Alaoui dynasty and first imperial city of Morocco. After visiting a huge markets of Rissani, shortly we reach the city of Erfoud, rich in black stone and marine fossils (if you want, we can stop at a fossil factory), our journey will continue then to reach the Gorges of Todra, lie only 15 km from Tinghir city, presenting an arresting spectacle with its crystal clear river emerging from it, its huge walls changing color to magical effect as the day unfolds. We are now in the mountains again as we pass Tinerir (1400 meters altitude), an important center for the Berber nomad tribes with its extensive palm grove, amazing traditional carpets and the Ksours built into the rocky hills, one hour later we will reach Dades valley, a green valley famous by its fortified thousand kasbahs, dinner and overnight at Hotel"
      },
      {
        "day": "Day 9",
        "title": "Dades Valley – Skoura – Ouarzazate – Kasbah Ait Ben Haddou – Tizi N’Tichka Pass – Marrakech :",
        "content": "Enjoy a traditional Breakfast in Riad, then, get ready for a new day in Morocco in company of your driver/guide, a new adventures mixed with history and culture, we will drive through the road of thousand Kasbahs and green valleys, to reach the Rose valley, famous by its annual festival, and for cultivating a unique species of rose with extraordinary fragrance, this green valley’s giving life to the arid desert. After visiting a cooperative in the valley (optional), we will head to Ouarzazate, enjoying the beautiful landscape, as you go through; it is changing little by little, from green to red ocher zones and palm groves. Continue through the route of the Kasbahs, in the south of the High Atlas, citadels built with crude earth (Mud) together with their walled towers and ornaments with geometric motifs. You should know that these Berber art monuments are unique in the world. They are located in a junction between the desert and the mountain, where the landscape is full of contrast between red and ochre colors, great luminosity, and silence. Then we continue to reach the Kasbah Amridil. (The beautiful Kasbah Amridil lies in the Skoura oasis, inside a beautiful palm tree near the riverbed. The perfectly preserved and restored is perhaps the first Kasbah you should visit. There are numerous artifacts used in it when it was still inhabited. After this visit we will drive through Ouarzazate to discover one of the beautiful fortified villages in Morocco, the Kasbah Ait Benhaddou, one of the most amazing and well-preserved fortified cities in all of North Africa. The beauty of this place has attracted numerous film productions over the years. Lunch in local restaurant overlooking the Kasbah, and then we continued our trip crossing the high Atlas Mountains, enjoying beautiful Berber villages settled in the foothills of the huge mountains, until we reached Marrakech."
      },
      {
        "day": "Day 10",
        "title": "Exploring Marrakech – Marrakech City Tour",
        "content": "Meet your guide and driver after breakfast in the riad, to start an explorative journey of the amazing and attractive imperial city of Morocco, Marrakesh, travel back in time with a historian guide who will ensure that you see all the sites with historical and cultural interest, including the Koutoubia Minaret; the Saadian tombs; the beautiful Palace of Bahia and the Ben Youssef Coranic School. Finally, end the morning by walking through the medina alleys -getting a chance to admire all of the different artisans performing their crafts before arriving at the famous Jamaa El Fna Square. Lunch at a restaurant near the square, and then in the afternoon visit the Majorelle gardens, and have a short tour at Gueliz -the new city of Marrakech. After dinner you will have the option to walk through the square entertained by magicians, story-tellers, tooth-pullers and food sellers. Overnight accommodation will be in your riad (Half-Board)"
      },
      {
        "day": "Day 11",
        "title": "Day Trip To Essaouira From Marrakech",
        "content": "Meet your driver/guide at your accommodation in Marrakech for a full day trip to the city of Essaouira Mogador. You will get in there after about a 2 and a half hour drive to start exploring the city. In Essaouira you will visit the Skala Fortress; see Thuya wood carved by artisans; walk through the blue washed alleys of the old medina and view hundreds of handicrafts. This “City of the Wind” attracts surfers from all over the world. Essaouira knew many civilizations and dynasties; including the Portuguese occupation, which affects much of its architecture – however, it remains a small village with much history. Because of its size and its characteristic blue doors and washed walls, it is also regarded as Morocco’s “Jewel of the Atlantic”. You will also visit the women’s co-operative of Argan oil; where they extract the magic oil, famous for its culinary, cosmetic and medicinal properties. Enjoy a fresh fish lunch “cooked in order” at the fish market. In the afternoon we will drive back to Marrakech. Overnight at your riad . (Half-Board)."
      },
      {
        "day": "Day 12",
        "title": "Transfer To Marrakech Airport Or Casablanca Airport",
        "content": "After an early breakfast in your riad, we will drive you to Casablanca/Marrakech airport for your flight back home. Your 12 days Morocco tour from Casablanca ends at the airport."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival",
        "desc": "Hassan II Mosque visit.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Capital",
        "desc": "Hassan Tower and Kasbah.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Tangier",
        "day": "Day 3",
        "subtitle": "Strait of Gibraltar",
        "desc": "Cape Spartel and Hercules Caves.",
        "coords": [
          35.7595,
          -5.834
        ]
      },
      {
        "number": 4,
        "name": "Chefchaouen",
        "day": "Day 4",
        "subtitle": "Blue Mountain Town",
        "desc": "Rif Mountain charm.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Days 5 & 6",
        "subtitle": "Medieval Medina",
        "desc": "Universities and tanneries.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 6,
        "name": "Merzouga Desert",
        "day": "Days 7 & 8",
        "subtitle": "Erg Chebbi Camp",
        "desc": "Camel rides and starry night.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 7,
        "name": "Dades & Todra",
        "day": "Day 9",
        "subtitle": "Canyons",
        "desc": "Scenic gorges and kasbahs.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 8,
        "name": "Ouarzazate",
        "day": "Day 10",
        "subtitle": "Cinema City",
        "desc": "Ait Benhaddou fortress.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 9,
        "name": "Marrakech",
        "day": "Days 11 & 12",
        "subtitle": "The Red City",
        "desc": "Grand imperial exploration.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 10,
        "name": "Casablanca",
        "day": "Day 13",
        "subtitle": "Departure",
        "desc": "Return transfer and farewell.",
        "coords": [
          33.589882,
          -7.603869
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.465,
        -6.034
      ],
      [
        35.7595,
        -5.834
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.629472,
        -7.981084
      ],
      [
        33.589882,
        -7.603869
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/thumbnail.jpg",
        "cap": "Grand Itinerary 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-01.jpg",
        "cap": "Grand Itinerary 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-02.jpg",
        "cap": "Grand Itinerary 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-03.jpg",
        "cap": "Grand Itinerary 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-04.jpg",
        "cap": "Grand Itinerary 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-05.jpg",
        "cap": "Grand Itinerary 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-06.jpg",
        "cap": "Grand Itinerary 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour-from-casablanca/images/image-07.jpg",
        "cap": "Grand Itinerary 12 Days Morocco Tour From Casablanca"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Merzouga Desert",
      "Dades & Todra",
      "Ouarzazate",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "12-days-morocco-tour",
    "title": "12-Day Classic Highlights of Morocco Tour | Sahara Star Tours",
    "shortTitle": "12-Day Classic Highlights of Morocco",
    "description": "An unforgettable 12-day comprehensive Morocco tour. Traverse imperial capitals, ancient Roman ruins, Sahara desert dunes, and coastal Atlantic charm.",
    "aboutHtml": "Embark on the ultimate BEST 12 DAYS MOROCCO TOUR FROM CASABLANCA, a meticulously crafted journey designed to showcase the very best of Morocco. As a leading Moroccan travel agency, Sahara Star Tours invites you to experience an unforgettable expedition blending rich cultural heritage, breathtaking landscapes, and premium comfort. From the bustling ancient medinas and vibrant souks of our imperial cities to the serene majesty of the Sahara Desert, this itinerary captures the soul of Morocco. <br/><br/> <br/><br/>Whether you're traversing the dramatic peaks of the High Atlas Mountains, riding camels into the golden dunes of Merzouga at sunset, or resting in luxury desert camps and authentic riads, every moment is optimized for authentic immersion. Perfect for couples, families, and adventurous travelers, this tour offers a seamless, stress-free vacation with professional local guides, private air-conditioned transportation, and exclusive access to hidden gems. Book your BEST 12 DAYS MOROCCO TOUR FROM CASABLANCA today and discover the magic of Morocco.",
    "category": "desert-tours",
    "duration": "12 Days / 11 Nights",
    "durationDays": 12,
    "startingFrom": "Casablanca",
    "price": "From $1,490/person",
    "heroImage": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/thumbnail.webp",
    "highlights": [
      "Cultural Immersion",
      "Historic Cities",
      "Sahara Desert Adventure",
      "Atlas Mountains Excursion",
      "Blue Pearl of Chefchaouen",
      "Coastal Charms of Essaouira",
      "Traditional Cuisine",
      "Local Interactions",
      "UNESCO World Heritage Sites",
      "Shopping in Souks",
      "Leisure and Relaxation"
    ],
    "inclusions": [
      "Guided city tours and monument fees",
      "Comfortable private transportation with guide English speaking",
      "Camel trek and the overnight in Luxury Camp",
      "Airport meet and great service",
      "Dinner at a local restaurant in Marrakech with Music and Moroccan dancing",
      "Half board during the tour",
      "Fuel",
      "11 Breakfasts and 5 dinners in the desert"
    ],
    "exclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency",
      "Tips to guide and driver (optional)",
      "Anything not stated in included part"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival in Casablanca",
        "content": "Welcome to Morocco! Upon your arrival at Casablanca’s Mohammed V International Airport, you’ll be warmly greeted by your guide and transferred to your hotel. After settling in and resting from your journey, the evening will offer you a delightful introduction to Moroccan flavors with a welcome dinner. Enjoy a traditional Moroccan meal and start soaking in the ambiance of this fascinating country."
      },
      {
        "day": "Day 2",
        "title": "Casablanca Sightseeing",
        "content": "Today is dedicated to discovering the vibrant spirit of Casablanca, Morocco’s economic capital and largest city. Begin with a visit to the majestic Hassan II Mosque, one of the largest in the world, perched dramatically over the Atlantic Ocean. Afterwards, stroll through the charming Habous Quarter, where traditional architecture meets French colonial influences. Continue to the Central Market, alive with local products and bustling energy. The day ends with a scenic drive along the Corniche, Casablanca’s coastal promenade, where you can unwind at Ain Diab beach and take in the ocean breeze."
      },
      {
        "day": "Day 3",
        "title": "Casablanca to Chefchaouen",
        "content": "After breakfast, set off on a scenic drive north through Morocco’s captivating countryside, passing fertile valleys and traditional rural villages. Your destination is Chefchaouen, often called the Blue Pearl of Morocco. Nestled in the Rif Mountains, this town is famous for its blue-washed walls and relaxed atmosphere. Upon arrival, you’ll have time to explore its enchanting medina, browse artisanal shops, and soak in the serene beauty of this mountain retreat."
      },
      {
        "day": "Day 4",
        "title": "Chefchaouen Free Day",
        "content": "Today is yours to enjoy Chefchaouen at your own pace. Whether you choose to sip mint tea in a rooftop café overlooking the town, explore quiet alleyways with your camera in hand, or hike in the surrounding Rif Mountains, the day offers pure tranquility. For a deeper cultural experience, you might consider visiting a local hammam or taking a short walk to Ras El Ma, a peaceful spring just outside the medina."
      },
      {
        "day": "Day 5",
        "title": "Chefchaouen to Fez",
        "content": "Leave the cool blue tones of Chefchaouen behind as you travel to Fez, one of Morocco’s most ancient imperial cities. Along the way, witness the change in scenery from mountain landscapes to rolling plains. Once in Fez, you’ll dive into its rich heritage with a visit to the famous tanneries, where leather is still processed using age-old techniques. Later, take your first steps into the labyrinthine Medina, a UNESCO World Heritage Site filled with history and life at every turn."
      },
      {
        "day": "Day 6",
        "title": "Fez City Tour",
        "content": "Embark on a full-day guided exploration of Fez, a city renowned for its spiritual and intellectual legacy. Highlights include the Bou Inania Madrasa, a splendid example of Marinid architecture, and the Al-Qarawiyyin Mosque and University, recognized as the oldest university in the world. You’ll pass through the iconic Bab Boujloud (Blue Gate) and delve deeper into the Medina’s souks and artisan quarters. A stop at a traditional pottery workshop gives insight into Fez’s enduring craftsmanship."
      },
      {
        "day": "Day 7",
        "title": "Fez to Merzouga (Sahara Desert)",
        "content": "Today is an unforgettable journey south toward the golden dunes of the Sahara Desert. You’ll travel through the Middle Atlas Mountains, stopping in the cedar forests near Azrou where wild monkeys roam freely. Continuing through Midelt and the Ziz Valley, arrive in Merzouga by afternoon. As the sun begins to set, ride camels into the desert and experience the surreal tranquility of the dunes. Your night will be spent in a luxury desert camp, complete with Berber music, hearty food, and stargazing beneath the vast desert sky."
      },
      {
        "day": "Day 8",
        "title": "Merzouga to Todra Gorges",
        "content": "Wake early to watch the sun rise over the Sahara, a magical and peaceful moment. After breakfast, begin your drive towards the majestic Todra Gorges. En route, enjoy the ever-changing desert landscapes and oasis towns. Upon arrival at Todra, marvel at the towering canyon walls that rise up to 300 meters high, creating a dramatic natural corridor. Spend the evening relaxing in this serene setting nestled between rugged cliffs."
      },
      {
        "day": "Day 9",
        "title": "Todra Gorges to Ait Ben Haddou",
        "content": "After breakfast, travel further west to Ait Ben Haddou, a striking ksar (fortified village) recognized by UNESCO for its historical and cultural importance. This iconic site has been used as a backdrop in numerous films, including Gladiator and Game of Thrones. As you explore the winding alleys and ancient clay structures, you’ll get a glimpse into traditional Berber architecture and the region’s sto ried past. Tonight, enjoy the peaceful ambiance of this desert village."
      },
      {
        "day": "Day 10",
        "title": "Ait Ben Haddou to Marrakech",
        "content": "Depart from Ait Ben Haddou and make your way through the High Atlas Mountains via the Tizi n’Tichka pass, where breathtaking landscapes await at every bend. By afternoon, arrive in the bustling city of Marrakech. Begin your introduction to the city with visits to the iconic Koutoubia Mosque and the serene Majorelle Garden, once owned by Yves Saint Laurent. Later, experience the electric energy of Jemaa el-Fnaa square, where snake charmers, food stalls, and storytellers fill the night with life."
      },
      {
        "day": "Day 11",
        "title": "Marrakech Sightseeing",
        "content": "Delve deeper into Marrakech’s rich heritage with a guided tour of its historic landmarks. Explore the exquisite Bahia Palace with its intricate tilework and gardens, and visit the Saadian Tombs, hidden for centuries and only rediscovered in 1917. Roam the ancient Medina, a maze of alleys filled with colorful souks and artisan workshops. As your Moroccan adventure nears its end, enjoy a festive farewell dinner in a traditional restaurant complete with music and lively Moroccan dancing."
      },
      {
        "day": "Day 12",
        "title": "Departure from Marrakech",
        "content": "Depending on your flight time, you may enjoy a final stroll or some last-minute shopping before your airport transfer. With unforgettable memories, cultural encounters, and breathtaking landscapes behind you, your journey through Morocco concludes today."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival",
        "desc": "Hassan II Mosque visit.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Capital",
        "desc": "Hassan Tower and Kasbah.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Tangier",
        "day": "Day 3",
        "subtitle": "Strait of Gibraltar",
        "desc": "Cape Spartel and Hercules Caves.",
        "coords": [
          35.7595,
          -5.834
        ]
      },
      {
        "number": 4,
        "name": "Chefchaouen",
        "day": "Day 4",
        "subtitle": "Blue Mountain Town",
        "desc": "Rif Mountain charm.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Days 5 & 6",
        "subtitle": "Medieval Medina",
        "desc": "Universities and tanneries.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 6,
        "name": "Merzouga Desert",
        "day": "Days 7 & 8",
        "subtitle": "Erg Chebbi Camp",
        "desc": "Camel rides and starry night.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 7,
        "name": "Dades & Todra",
        "day": "Day 9",
        "subtitle": "Canyons",
        "desc": "Scenic gorges and kasbahs.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 8,
        "name": "Ouarzazate",
        "day": "Day 10",
        "subtitle": "Cinema City",
        "desc": "Ait Benhaddou fortress.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 9,
        "name": "Marrakech",
        "day": "Days 11 & 12",
        "subtitle": "The Red City",
        "desc": "Grand imperial exploration.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 10,
        "name": "Casablanca",
        "day": "Day 13",
        "subtitle": "Departure",
        "desc": "Return transfer and farewell.",
        "coords": [
          33.589882,
          -7.603869
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.465,
        -6.034
      ],
      [
        35.7595,
        -5.834
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.629472,
        -7.981084
      ],
      [
        33.589882,
        -7.603869
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/thumbnail.webp",
        "cap": "Best 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-01.jpg",
        "cap": "Best 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-02.jpg",
        "cap": "Best 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-03.jpg",
        "cap": "Best 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-04.jpg",
        "cap": "Best 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-05.jpg",
        "cap": "Best 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-06.jpg",
        "cap": "Best 12 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/12-days-morocco-tour/images/image-07.jpg",
        "cap": "Best 12 Days Morocco Tour From Casablanca"
      }
    ],
    "featured": true,
    "badge": "POPULAR",
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Merzouga Desert",
      "Dades & Todra",
      "Ouarzazate",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "private-12-days-desert-marrakech",
    "title": "12-Day Casablanca, Sahara & Marrakech Private Tour | Sahara Star Tours",
    "shortTitle": "12-Day Casablanca, Sahara & Marrakech",
    "description": "Private 12-day Moroccan journey combining deep Sahara desert exploration, Berber village traditions, Atlas mountain valleys, and vibrant Marrakech medina.",
    "aboutHtml": "Embark on a captivating 12-day adventure from Casablanca, exploring the stunning landscapes of northern Morocco and venturing into the magical Sahara Desert. 11 Nights from Casablanca Over Morocco",
    "category": "desert-tours",
    "duration": "12 Days / 11 Nights",
    "durationDays": 12,
    "startingFrom": "Casablanca",
    "price": "From $1,550/person",
    "heroImage": "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/thumbnail.jpg",
    "highlights": [
      "Immerse yourself in the unique culture & ambiance of Chefchaouen From Casablana",
      "Experience the rich heritage of Fes, one of the world’s oldest cities",
      "Travel from Midelt to Merzouga, passing through the picturesque Ziz Valley",
      "Enjoy the luxury accommodations of Merzouga Dunes Luxury Camps With Camel ride",
      "Explore the vibrant city of Marrakech, known for its rich history and culture"
    ],
    "inclusions": [
      "Guided city tours and monument fees",
      "Comfortable private transportation with guide English speaking",
      "Camel trek and the overnight in Luxury Camp",
      "Airport meet and great service",
      "Dinner at a local restaurant in Marrakech with Music and Moroccan dancing",
      "Half board during the tour",
      "Fuel",
      "11 Breakfasts and 5 dinners in the desert"
    ],
    "exclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency",
      "Tips to guide and driver (optional)",
      "Anything not stated in included part"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Casablanca – Chefchaouen",
        "content": "The driver will pick you up in the morning from your hotel in Casablanca. Head to Chefchaouen. Upon arriving in the Blue City, you’ll have free time to explore this hidden gem. Overnight at your hotel in Chefchaouen."
      },
      {
        "day": "Day 2",
        "title": "Chefchaouen – Fes",
        "content": "In the morning, depart for Fes, passing by Volubilis. Visit Volubilis, a partly excavated Berber and Roman city in Morocco. Head to Meknes and visit the mosque, Mausoleum of Moulay Ismail, Bab al-Mansour, Moulay Idriss, and have lunch in Meknes. Then drive to Fes. Overnight at your accommodation in Fes"
      },
      {
        "day": "Day 3",
        "title": "Fes – Fes",
        "content": "A full-day tour of Fes Medina, a UNesCO World Heritage Site Visit the beautiful 14th-century Medersa Bou Anania and the renowned tanneries on the bank of the Oued Fes. Despite the strong smell, it is one of the most picturesque souks in Fez. The medina is encircled by an unbroken line of ramparts and gates. The full-day tour of Fes includes La Madrassa Attarine, Nejjarine Fountain, and the mosques of El Karaouyine, Medersa Bou Inania, and Bab Bojloud."
      },
      {
        "day": "Day 4",
        "title": "Fes – Midelt",
        "content": "After breakfast, head to Merzouga, passing through Ifrane, known as the Switzerland of Morocco, to enjoy its beauty and take pictures. Continue to Azro to see the monkeys, then arrive in Midelt for dinner and overnight at your accommodation."
      },
      {
        "day": "Day 5",
        "title": "Midelt – Merzouga",
        "content": "In the morning, after breakfast, drive to Merzouga, passing through Ziz valley, Rachidia, and Rissani, with lunch on the road. Upon arriving in Merzouga, ride camels, cross the golden sands, and witness the magical sunset. Enjoy an overnight stay and dinner in a Berber tent under the starry sky."
      },
      {
        "day": "Day 6",
        "title": "Merzouga – Dades Valley",
        "content": "Wake up to climb the sand dunes and see the sunrise by riding camels back to the hotel for a shower and breakfast. Start the road to Dades Valley, crossing Erfoud, Jorf, and Tinjdad, and reaching Tinghir to visit Todra Gorges. Have lunch on the road or in Tinghir city. Continue the road to Dades Valley for an overnight stay and dinner at your hotel."
      },
      {
        "day": "Day 7",
        "title": "Dades Valley - Ait Ben Haddou",
        "content": "In the morning, enjoy the fresh air of this valley, then visit Dades Gorges. Head to Ait Ben Haddou, crossing Roses Valley and Ouarzazate. Take a picture of Kasbah Taourirt in Ouarzazate, then have a great walk in the most beautiful Kasbah. Enjoy dinner and an overnight stay at your hotel in Ait Ben Haddou."
      },
      {
        "day": "Day 8",
        "title": "Ait Ben Haddou - Imlil Atlas Mountains",
        "content": "Today, leave Ait Ben Haddou and head through the Atlas Mountains. This day will be filled with the most incredible landscapes. Spend a great night in the heart of the Atlas Mountains in a typical Auberge, with a delicious dinner made by a Berber woman."
      },
      {
        "day": "Day 9",
        "title": "Imlil - Essaouira",
        "content": "In the morning, you will have a chance to ride mules and do some hiking in the mountains as you like. Then take off to Essaouira, passing through a great expanse of landscapes filled with Argan trees. Upon arriving in Essaouira, you will have free time to enjoy this lovely city. Overnight at your accommodation."
      },
      {
        "day": "Day 10",
        "title": "Essaouira - Marrakech",
        "content": "This day, you will have a half-day free to enjoy Essaouira Beach and its beauty. After lunch, drive to Marrakech. Upon arriving in Marrakech, you’ll be dropped off at your accommodation."
      },
      {
        "day": "Day 11",
        "title": "Marrakech – Marrakech",
        "content": "In the morning, after your breakfast, you will have a full day of sightseeing in the Red City, Marrakech. You will visit Koutoubia Mosque, El Bahia Palace, the Saadian Tombs, Menara Gardens, and Djemaa el Fna. After exploring the Red City, you will be dropped off at your accommodation in Marrakech."
      },
      {
        "day": "Day 12",
        "title": "End of 12days Morocco itinerary",
        "content": "Today, your Morocco itinerary 12 days from Casablanca comes to end. Our driver will check for your flight details and come to transfer you to the airport. We hope that you enjoyed Morocco and you had great memories with us."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival",
        "desc": "Hassan II Mosque visit.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Capital",
        "desc": "Hassan Tower and Kasbah.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Tangier",
        "day": "Day 3",
        "subtitle": "Strait of Gibraltar",
        "desc": "Cape Spartel and Hercules Caves.",
        "coords": [
          35.7595,
          -5.834
        ]
      },
      {
        "number": 4,
        "name": "Chefchaouen",
        "day": "Day 4",
        "subtitle": "Blue Mountain Town",
        "desc": "Rif Mountain charm.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Days 5 & 6",
        "subtitle": "Medieval Medina",
        "desc": "Universities and tanneries.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 6,
        "name": "Merzouga Desert",
        "day": "Days 7 & 8",
        "subtitle": "Erg Chebbi Camp",
        "desc": "Camel rides and starry night.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 7,
        "name": "Dades & Todra",
        "day": "Day 9",
        "subtitle": "Canyons",
        "desc": "Scenic gorges and kasbahs.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 8,
        "name": "Ouarzazate",
        "day": "Day 10",
        "subtitle": "Cinema City",
        "desc": "Ait Benhaddou fortress.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 9,
        "name": "Marrakech",
        "day": "Days 11 & 12",
        "subtitle": "The Red City",
        "desc": "Grand imperial exploration.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 10,
        "name": "Casablanca",
        "day": "Day 13",
        "subtitle": "Departure",
        "desc": "Return transfer and farewell.",
        "coords": [
          33.589882,
          -7.603869
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.465,
        -6.034
      ],
      [
        35.7595,
        -5.834
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.629472,
        -7.981084
      ],
      [
        33.589882,
        -7.603869
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/thumbnail.jpg",
        "cap": "Private 12 Days Trip To Desert & Marrakech"
      },
      {
        "src": "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-01.jpg",
        "cap": "Private 12 Days Trip To Desert & Marrakech"
      },
      {
        "src": "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-02.jpg",
        "cap": "Private 12 Days Trip To Desert & Marrakech"
      },
      {
        "src": "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-03.jpg",
        "cap": "Private 12 Days Trip To Desert & Marrakech"
      },
      {
        "src": "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-04.jpg",
        "cap": "Private 12 Days Trip To Desert & Marrakech"
      },
      {
        "src": "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-05.jpg",
        "cap": "Private 12 Days Trip To Desert & Marrakech"
      },
      {
        "src": "/sahara-star-tours/desert-tours/private-12-days-trip-to-desert-marrakech/images/image-06.jpg",
        "cap": "Private 12 Days Trip To Desert & Marrakech"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Merzouga Desert",
      "Dades & Todra",
      "Ouarzazate",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "16-days-morocco-tour-from-casablanca",
    "title": "16-Day Grand Tour of Morocco & Desert | Sahara Star Tours",
    "shortTitle": "16-Day Grand Tour of Morocco & Desert",
    "description": "The definitive 16-day Morocco grand expedition. From Tangier and Chefchaouen to Fes, Merzouga luxury glamping, Essaouira coast, and imperial Marrakech.",
    "aboutHtml": "Book with us this complete 16 day Tour from Casablanca and travel with confidence. The itinerary will bring together many places and cultural aspects of Morocco.<br/><br/>You will experience the warmth of Moroccan people and different attractions with changing colors from North to Southern Morocco. This Moroccan itinerary mixes different areas of Morocco from the urban Northern Morocco to the mysterious Sahara Desert and the vibrant Markets of Fes &amp; Marrakech.<br/><br/>Walk in the impressive Todgha gorges at the high Atlas Mountains, take a camel trek in Merzouga desert, visit less frequented places and learn about the fortified villages.",
    "category": "desert-tours",
    "duration": "16 Days / 15 Nights",
    "durationDays": 16,
    "startingFrom": "Casablanca",
    "price": "From $1,890/person",
    "heroImage": "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/thumbnail.jpg",
    "highlights": [
      "Visit main big cities of Morocco: Economical and political capitals, respectively Casablanca and Rabat.",
      "Feel the magic of camel trekking through the breathtaking Sahara Dunes in Merzouga, immersing yourself in the awe-inspiring beauty of the desert.",
      "Tour the North of Morocco and experience Tangier and Chefchaouen.",
      "Stay in the desert and enjoy camping and the beautiful sand dunes of Sahara.",
      "walk in Todgha gorges and visit Kasbah and villages and meet hospitable villagers.",
      "Get lost in the medina of Marrakech, and enjoy its charms, colors, scents, alleys, souks and finest arts.",
      "Refine your Morocco itinerary with a visit to Essaouira and learn its history and see its Unesco medina."
    ],
    "inclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency",
      "Tips to guide and driver (optional)",
      "Anything not stated in included part"
    ],
    "exclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency",
      "Tips to guide and driver (optional)",
      "Anything not stated in included part"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Casablanca airport – hotel in Casablanca",
        "content": "Meet our guide at Casablanca airport and transfer to the hotel. Welcome to the economical capital of Morocco. Hotel check in. Free and easy rest of the day at your own."
      },
      {
        "day": "Day 2",
        "title": "Casablanca – Rabat",
        "content": "Breakfast at the hotel. City tour of Casablanca: Vist Hassan 2 Mosque, Corniche Ain Diab, Habous Qaurter, and Mohamed V squares, and have a coffee at the legendary Ricks café. Transfer to Rabat. After lunch, start the visit of Rabat. The latter is the administrative capital of Morocco: it’s modern, spacious with nice gardens. The visit of Rabat includes the Hassan Tower, The façades of the royal palace, the Oudaya Kasbah, the Hassan administrative quarter. After Rabat guided visit, check into the hotel. Free and easy time to wander in the medina of Rabat and the New quarter."
      },
      {
        "day": "Day 3",
        "title": "Rabat – Tangier",
        "content": "Breakfast at the hotel. Transfer to Tangier: the cradle of many civilization and American diplomat. Along the Atlantic ocean, visit the legendary hercule cave and take a look to both the mediterranean sea and the Atlantic coast from Cap Spartel. Transfer to the medina of Tangier. Wander in its medina and visit its places ranging from synapogues, museums, mosques, churches, grand Socco, plazas, cafés, Kasbah. Hotel check in. Free and easy."
      },
      {
        "day": "Day 4",
        "title": "Tangier – Chefchaouen",
        "content": "After breakfast at the hotel, you will be transfered to Chefchaouen. Enjoy the drive accross the Rif Mountains with lush and deep valleys, resulting in of the best countryside views in Morocco. Take a free evening to see the beautiful blue walled houses and take a wander in the medina. Enjoy seeing locals in the Souk selling things brought from the countryside. See Chefchaouen attractions from main Utta Hamam Sqaure, walk to Ras el Ma springs, visit the Kasbah, and wander in its medina. Free dinner and overnight stay at a Riad in the medina"
      },
      {
        "day": "Day 5",
        "title": "Chefchaouen – Volubilis – Meknes - Fes",
        "content": "Breakfast at the hotel, you’ll depart to Meknes. On the way, visit of the archeological site of Volubilis. Transfer to Meknes. The latter is another Moroccan imperial city like Rabat. It consists of two towns; the old section called the medina and the new section or the French town. The city was the capital of the Sultan Moulay Ismail during the 17 century. The high walls are obviously seen and are taken as defensive walls against the invader’s attack. Guided visit of Meknes includes Moulay Ismail mausoleum, the basin Swani, the Jewish cemetery and the old stores for cultivated cereals in the nearby lands. Transfer to Fes, and check into the hotel."
      },
      {
        "day": "Day 6",
        "title": "Fes Guided City Tour",
        "content": "Fez or Fes is the first Moroccan imperial city. It holds a wealth of attractions and described as the spiritual center of Morocco. The Karaouiyin University of Fez is considered among the oldest in the world. Hiring a local guide in Fez is essential to have a complete visit. You start the journey with a visit of royal palace main gate, and then ceramics and poetry looking at hand made artefacts. You move with your guide to explore the Tanneries and the vibrant alleys of the old quarter. You will admire the bustling streets of the Medina where merchants open their shops. According to timing see some of old Koranic schools called Madrasa…After an active journey we take you back to your hotel."
      },
      {
        "day": "Day 7",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga",
        "content": "After breakfast, You will be departing to Merzouga. This is the longest stage of the itinerary, but with the most contrasts. This reflect the biodiversity of Morocco fauna and flora. On the way, stop at Ifrane for some pictures. Later on, take a break to see the monkeys at the cedar forest. we carry on through the High Atlas Mountains and the valley of Ziz. We pass Errachidia, the city and capital of the province. You enjoy the picturesque valley of Ziz valley and Tafilalet oasis, known for its date palms. Transfer to Merzouga and arrive to the hotel around 18h. Bed, dinner and breakfast."
      },
      {
        "day": "Day 8",
        "title": "Erg Chebbi Desert & Camping",
        "content": "Today’s itinerary reconciles with Fez Merzouga long distance. Time will be devoted to explore around ERG Chebbi. We tour the Sandy dunes of Erg Chebbi that stretches in the Sahara desert across 30 km long and 10 km width. It is a gift from nature, and it inspires locals and guests alike. Sunrise and sunset are among the highlights. In the same day, we meet nomad families who take care of their animals. They live in nomad tents and they depend on grazing to win a living. We head to Rissani to visit the local market and to explore examples of ancient villages. Nearby Merzouga we listen to Gnawa music. At the afternoon you ride your camel to the Bivouac where night will be spent and dinner is served on the place. You enjoy the view of the sand dunes and the serenity of the desert. Sleep well!"
      },
      {
        "day": "Day 9",
        "title": "Erg Chebbi – Todgha goges – Dades valley",
        "content": "We set off for Boumalne Dades driving on the road of Thousand Kasbah. We continue via Alnif to Tinghir. This town is famous for the amazing Todgha Gorges. They are cliffs that rise up to 300 meters among which the clean river flows. The palm groves stretch along the river giving a unique view. To the way to the gorges stand the old Ksar which is partially inhabited. After lunch, we drive on the road of thousand Kasbah along the Dades valley. We reach Boumalne Dades and check into the hotel."
      },
      {
        "day": "Day 10",
        "title": "Boumalne Dades to Ouarzazate",
        "content": "We depart to Ouarzazate taking the road of Thousand Kasbah and passing Kelaa Mgouna, know for roses farms, & Skoura village with its palm groves. Ouarzazate is a peaceful town with spacious streets. Famous for the Cinema industry, Ouarzazate separates the Mountains with the Sahara Desert. In Ouarzazate visit of Atlas Studio, Kasbah Taourirt. Check into the hotel."
      },
      {
        "day": "Day 11",
        "title": "Ouarzazate – Ait Benhaddou – Marrakech",
        "content": "After breakfast, we visit the Taourirt Kasbah, and we drive to Ait Ben Haddou village that holds the most impressive Kasbah in Morocco. In the UNESCO protected site, many movies have been shot. After lunch, we drive the rest of the Itinerary to Marrakech through the highest Atlas Mountains. Check into the hotel."
      },
      {
        "day": "Day 12",
        "title": "Marrakech city Tour",
        "content": "Today time devoted to explore the red city of Marrakech. We begin the local visit with a wander in the Majorelle gardens. Moreover, we visit the Koutoubia Mosque, the Saadyin tombs, the Bahia Palace, and the busiest street of the Medina. Afternoon is at leisure. You might go for a walk and enjoy the open spectacle of the Djemaa el Fna main square where you attend a nonstop performance. Musicians, acrobats, story tellers, water sellers, scent of Barbecue, orange jus…Free dinner."
      },
      {
        "day": "Day 13",
        "title": "Marrakech to Essaouira",
        "content": "This itinerary combines the mysterious allure of Marrakech and the relaxed coastal vible of Essaouira. Afternoon depart to Essaouira which is less than 3 hours from Marrakech. Essaouira is a windy town that gives out to the Atlantic ocean with a harbour. it has a rich history and was a portugaise establishment during the 16 century. Today, you will change the busiest atmosphere of Marrakech with the vibles of Essaouira. You enjoy your time walking in the Medina and taste a savourous fish dish in the port."
      },
      {
        "day": "Day 14",
        "title": "Essaouira",
        "content": "After an eventful two weeks Morocco Tour, We take it for granted that you need to refresh up with a Free day in Essaouira. Thus, You have this day to enjoy the tranquil vibes of this coastal city. At your own, enjoy this Unesco city has the old quarter, the Saqala, the small harbor and the tasty fish food. Free visit of the medina including a lunch time."
      },
      {
        "day": "Day 15",
        "title": "Essaouira to El Jadida or Casablanca",
        "content": "Breakfast at the hotel, and departure toward El Jadida which in 4 hours drive from Essaouira. You take the coastal road passing via Safi. And then you join the high way to El Jadida. And driver further to Casablanca. Check into the hotel."
      },
      {
        "day": "Day 16",
        "title": "El Jadida to Casablanca airport",
        "content": "After an eventful 16 days Tour from Casablanca full of memories, It is time to see goodby to Morocco with the hope to come back for more adventures. farwell!"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Atlantic Start",
        "desc": "Hassan II Mosque.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Capital",
        "desc": "Royal landmarks and oceanfront.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Tangier",
        "day": "Day 3",
        "subtitle": "Northern Gateway",
        "desc": "Mediterranean and Atlantic junction.",
        "coords": [
          35.7595,
          -5.834
        ]
      },
      {
        "number": 4,
        "name": "Chefchaouen",
        "day": "Day 4",
        "subtitle": "Blue Pearl",
        "desc": "Rif Mountain magic.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Days 5 & 6",
        "subtitle": "Spiritual Capital",
        "desc": "UNESCO heritage walking tour.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 6,
        "name": "Merzouga Sahara",
        "day": "Days 7 & 8",
        "subtitle": "Erg Chebbi Dunes",
        "desc": "Glamping and camel caravan.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 7,
        "name": "Dades Gorges",
        "day": "Day 9",
        "subtitle": "Dramatic Canyons",
        "desc": "High rock formations.",
        "coords": [
          31.59,
          -5.99
        ]
      },
      {
        "number": 8,
        "name": "Ouarzazate",
        "day": "Day 10",
        "subtitle": "Kasbah Road",
        "desc": "Ait Benhaddou and studios.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 9,
        "name": "Taroudant",
        "day": "Day 11",
        "subtitle": "Little Marrakech",
        "desc": "Souss Valley ramparts.",
        "coords": [
          30.47,
          -8.877
        ]
      },
      {
        "number": 10,
        "name": "Essaouira",
        "day": "Days 12 & 13",
        "subtitle": "Windy Coast Mogador",
        "desc": "Argan forests and ocean ramparts.",
        "coords": [
          31.5125,
          -9.77
        ]
      },
      {
        "number": 11,
        "name": "Marrakech",
        "day": "Days 14 & 15",
        "subtitle": "Red City Grand Finale",
        "desc": "Palaces, gardens, and Jemaa El-Fna.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 12,
        "name": "Casablanca",
        "day": "Day 16",
        "subtitle": "Departure",
        "desc": "Return to Casablanca airport.",
        "coords": [
          33.589882,
          -7.603869
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.7595,
        -5.834
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        30.47,
        -8.877
      ],
      [
        31.5125,
        -9.77
      ],
      [
        31.629472,
        -7.981084
      ],
      [
        33.589882,
        -7.603869
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/thumbnail.jpg",
        "cap": "16 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-01.jpg",
        "cap": "16 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-02.jpg",
        "cap": "16 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-03.jpg",
        "cap": "16 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-04.jpg",
        "cap": "16 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-05.jpg",
        "cap": "16 Days Morocco Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/desert-tours/16-days-morocco-tour-from-casablanca/images/image-06.jpg",
        "cap": "16 Days Morocco Tour From Casablanca"
      }
    ],
    "featured": true,
    "badge": "POPULAR",
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Merzouga Sahara",
      "Dades Gorges",
      "Ouarzazate",
      "Taroudant",
      "Essaouira",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "3-days-desert-tour-marrakech-to-fes",
    "title": "3-Day Marrakech to Merzouga & Fes Desert Tour | Sahara Star Tours",
    "shortTitle": "3-Day Marrakech to Merzouga & Fes Tour",
    "description": "Cross Morocco in 3 days from Marrakech to Fes. Travel through Ait Ben Haddou, Dades Valley, and ride camels to a luxury desert camp in Erg Chebbi.",
    "aboutHtml": "This quintessential 3-day desert expedition is the most popular route connecting Marrakech to Fes via the Sahara Desert. Journey across the dramatic Tizi n'Tichka mountain pass, explore the world-famous UNESCO fortress of Ait Ben Haddou, and take in the panoramic beauty of the Dades Valley and Todra Gorge. In Merzouga, mount your camel for a sunset trek across the golden Erg Chebbi dunes and spend a memorable evening in a luxury Berber tent. On Day 3, travel past the Ziz Valley and Middle Atlas cedar forests to conclude in medieval Fes.",
    "category": "desert-tours",
    "duration": "3 Days / 2 Nights",
    "durationDays": 3,
    "startingFrom": "Marrakech",
    "price": "From $420/person",
    "heroImage": "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/thumbnail.jpg",
    "highlights": [
      "Meeting Point: At your hotel or Airport.",
      "Starting Location: Marrakech",
      "Ending Location: Fes"
    ],
    "inclusions": [
      "Private Transport with A/C 4×4 or Van",
      "Driver/Guide (Multilingual)",
      "Car Fuel",
      "2 Nights in Riad & Kasbah (Dinner & Breakfast)",
      "Camel Ride in Desert",
      "Sandboarding in Dunes (Free & Optional)",
      "1 Night in Desert (Dinner & Breakfast)"
    ],
    "exclusions": [
      "Drinks",
      "Lunches",
      "Flight Tickets",
      "Tips"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – Berber Villages – High Atlas Mountains – Kasbah Ait Ben Haddou – Roses Valley – Dades Gorge :",
        "content": "Meeting you in your hotel or airport, then we take the road that gradually climbs towards the High Atlas: we leave behind the Haouz cultivated fields to enter the heart of Morocco. A series of impressive hairpin bends dug into the rock lead to the Tizi’n’Tichka pass, located at 2260 meters above sea level, where we will have the opportunity to observe one of the most evocative landscapes of the country. Visit the Kasbah Ait Benhaddou, one of the most amazing and well-preserved fortified cities in all of North Africa. The beauty of this place has attracted numerous film productions over the years. After lunch, we will the route where we will see how the landscape as you go through it is changing little by little, going from green valleys to red ocher zones. We will stop in Roses Valley, a town known for cultivating a unique species of rose with an extraordinary fragrance. Here we make a stop to take pictures, have a drink, or whatever you want. The route of the Kasbahs, in the south of the High Atlas, is a tour of some citadels built with crude earth (Mud) together with their walled towers and ornaments with geometric motifs. You should know that these Berber art monuments are unique in the world. They are located in a junction between the desert and the mountain, where the landscape is full of contrast between red and ochre colors, great luminosity, and silence. Then we continued towards the Dades Gorges that we will climb for a few kilometers to discover unique scenery, where the green of the vegetation and the ocher-colored rock are the protagonists. Dinner and a night in a nice riad"
      },
      {
        "day": "Day 2",
        "title": "Dades Gorge – Dades Valley – Todra Gorge – Merzouga Desert Dunes",
        "content": "Breakfast in the riad. We leave Todra Gorge along the Kasbah Road, a path full of these superb Berber art monuments, unique in the world. Once you reach the other village of Tinghir, visit the spectacular Gorges of Todrà, whose high vertical walls give life to a unique landscape. We will leave at the agreed time to this wonderful natural area where they will be able to enjoy the fruit of the erosion of the Todra River for centuries, a canyon with vertical walls of more than 300 meters in height in some points. If you like to climb, welcome to your paradise. After entering the interior of the gorge, you will have lunch and leave for the road of the Kasbahs. The march will resume, and you will board the vehicle until you reach your destination, the Sahara Desert. Once in the place, you will have the opportunity to experience adventures in the desert, like going through the roads of Paris Dakar, seeing different wildlife, or washing your feet in nomadic wells until you end up in the dunes of Erg-Chebbi. In the afternoon, you will have a tour of the immense desert mounted on top of camels. When the day falls, they will settle in a Berber camp where they will live 100% of their customs, from a typical dinner, music, and dances in the light of the moon. That night, we will sleep in a desert camp"
      },
      {
        "day": "Day 3",
        "title": "Merzouga Desert Dunes – Ziz Valley – Monkey Area – Ifrane – Fes :",
        "content": "After admiring a beautiful sunrise on the dunes, you will return to Merzouga with dromedaries (or a jeep), and you can have breakfast and a shower. Then we continued our trip towards the vegetation is scarce and changes as we approach the desert. A luxuriant palm grove hides the patches of cultivated land near the Ziz River, while at the horizon, there are impressive sand dunes that are tinged with orange when the sun goes down. Then we continue towards the southeast, along the way we will appreciate enchanting landscapes and various landscapes. Along a mountain road, we reach Ifrane, a delightful place characterized by an Afro-alpine climate, the forests of fir and cedar scent the air. Here we stop to see the monkey area, then we continue to Fes. End of the 3 Days Desert Tour From Marrakech To Fes."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Departure over High Atlas",
        "desc": "Depart Marrakech crossing Tizi n'Tichka pass.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Ait Benhaddou",
        "day": "Day 1",
        "subtitle": "UNESCO World Heritage",
        "desc": "Explore the famous historic fortified kasbah.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 3,
        "name": "Dades Valley",
        "day": "Day 1",
        "subtitle": "Valley of Thousand Kasbahs",
        "desc": "Scenic gorges and rose fields overnight.",
        "coords": [
          31.59,
          -5.99
        ]
      },
      {
        "number": 4,
        "name": "Todra Gorges",
        "day": "Day 2",
        "subtitle": "Limestone Rock Canyon",
        "desc": "Walk along the 300m vertical rock cliffs.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Sahara",
        "day": "Day 2",
        "subtitle": "Erg Chebbi Luxury Camp",
        "desc": "Sunset camel caravan trek and Berber drumming under the stars.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 6,
        "name": "Midelt & Cedar Forest",
        "day": "Day 3",
        "subtitle": "Middle Atlas Mountains",
        "desc": "Ziz Valley oasis, cedar forest with Barbary apes, and Ifrane.",
        "coords": [
          32.6828,
          -4.7337
        ]
      },
      {
        "number": 7,
        "name": "Fes",
        "day": "Day 3",
        "subtitle": "Spiritual Capital Finale",
        "desc": "Arrival in ancient medieval Fes medina.",
        "coords": [
          34.033134,
          -5.00028
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.2847,
        -7.3811
      ],
      [
        31.047,
        -7.1317
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.3715,
        -5.9867
      ],
      [
        31.59,
        -5.99
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        31.4328,
        -4.2324
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.9315,
        -4.4266
      ],
      [
        32.6828,
        -4.7337
      ],
      [
        33.4344,
        -5.2213
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        34.033134,
        -5.00028
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/thumbnail.jpg",
        "cap": "3 Days Desert Tour From Marrakech To Fes"
      },
      {
        "src": "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-01.jpg",
        "cap": "3 Days Desert Tour From Marrakech To Fes"
      },
      {
        "src": "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-02.jpg",
        "cap": "3 Days Desert Tour From Marrakech To Fes"
      },
      {
        "src": "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-03.jpg",
        "cap": "3 Days Desert Tour From Marrakech To Fes"
      },
      {
        "src": "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-04.jpg",
        "cap": "3 Days Desert Tour From Marrakech To Fes"
      },
      {
        "src": "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-05.jpg",
        "cap": "3 Days Desert Tour From Marrakech To Fes"
      },
      {
        "src": "/sahara-star-tours/desert-tours/3-days-desert-tour-from-marrakech-to-fes/images/image-06.jpg",
        "cap": "3 Days Desert Tour From Marrakech To Fes"
      }
    ],
    "featured": true,
    "badge": "POPULAR",
    "departureCity": "Marrakech",
    "arrivalCity": "Fes",
    "destinations": [
      "Marrakech",
      "Fes",
      "Ait Benhaddou",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga Sahara",
      "Midelt & Cedar Forest"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "4-days-marrakech-desert-tour",
    "title": "4-Day Marrakech to Merzouga Desert Tour | Sahara Star Tours",
    "shortTitle": "4-Day Marrakech to Merzouga Desert Tour",
    "description": "Private 4-day Morocco desert tour from Marrakech (round-trip). Explore Marrakech, Ait Ben Haddou, Ouarzazate. Local support and flexible planning.",
    "aboutHtml": "This private 4-day Morocco journey begins in Marrakech and finishes in Marrakech. Along the route, you will experience Marrakech, High Atlas Mountains, Ounila Valley, Ait Ben Haddou, Ouarzazate, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "4 Days / 3 Nights",
    "durationDays": 4,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "High Atlas Mountains",
      "Ounila Valley",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Draa Valley",
      "Nkob",
      "Rissani"
    ],
    "relatedTours": [
      "3-day-morocco-desert-tour-from-marrakech",
      "2-day-zagora-desert-tour-from-marrakech",
      "day-trip-ait-ben-haddou"
    ],
    "price": "From $520/person",
    "heroImage": "/sahara-star-tours/4-days-marrakech-desert-tour/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – High Atlas Mountains – Ounila Valley – Ait Ben Haddou Kasbah – Ouarzazate",
        "content": "Your 4-day desert journey begins with an early pickup from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atlas mountains, and also the Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes. After that you continue to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by the UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. After that you head to “The gate of the desert” Ouarzazate. Dinner and overnight stay in a hotel"
      },
      {
        "day": "Day 2",
        "title": "Ouarzazate – Agdz – Draa Valley – Nkob – Rissani – Merzouga Desert – Camel trekking – overnight in a luxury camp",
        "content": "After breakfast, you explore the city of Ouarzazate. Firstly, you visit the Atlas studios, where various famous movies were shot. Next visit the Taourirt Kasbah: an ancient fortified mud castle. After that you depart towards Agdz, and join the Draa Valley the longest river in Morocco. You will drive along it, and stop for panoramic views of the palm trees groves, spectacular Kasbahs and Berber villages. Enjoy free time for lunch in Nkob or Alnif. After lunch, you continue to the Sahara desert of Merzouga through Rissani. When you reach the Erg Chebbi sand dunes you switch to camels, to cross the Sahara desert. A stop will be made for you on top of a big dune to observe the desert sunset. Next continue to the camp which is a combination between the traditional tents of nomads and the luxury a hotel has. In the campsite you can enjoy the Berber drumming while dancing around the campfire, under open sky of shiny stars. Dinner and Overnight stay in the camp."
      },
      {
        "day": "Day 3",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Boumalne Dades",
        "content": "Wake up early in the morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels to Merzouga where the driver awaits. You leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani Souk, you continue to Erfoud, where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. Next inevitable stops at the “monkey fingers” rock formation. And on a spot atop a mountain overlooking the Dades valley. Finally, dinner and overnight in a hotel."
      },
      {
        "day": "Day 4",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Amridil Kasbah – High Atlas Mountains – Marrakech",
        "content": "On last day of your 4-day desert tour from Marrakech, you continue to Kalaa Magouna to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products, from perfumes, rose water, oil, to cosmetic products. Next, you drive along various Kasbahs, including Amridil Kasbah surrounded by the palm trees grove of Skoura. You reach Ouarzazate, free time for lunch in town. Next, you continue to Marrakech by driving through the Tizi n'Tichka pass and the High Atlas Mountains. Finally, you are dropped off at your accommodation or the airport in Marrakech. End of the tour This Tour Ends in Marrakech, if you wish to Travel to Fes, you can Consider: 4 Days Tour From Marrakech to Fes"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Marrakech – High Atlas Mountains – Ounila Valley – Ait Ben Haddou Kasbah – Ouarzazate",
        "desc": "Your 4-day desert journey begins with an early pickup from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atl...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Ouarzazate",
        "day": "Day 2",
        "subtitle": "Ouarzazate – Agdz – Draa Valley – Nkob – Rissani – Merzouga Desert – Camel trekking – overnight in a luxury camp",
        "desc": "After breakfast, you explore the city of Ouarzazate. Firstly, you visit the Atlas studios, where various famous movies were shot. Next visit the Taour...",
        "coords": [
          31.2847,
          -4.2694
        ]
      },
      {
        "number": 3,
        "name": "Merzouga Sahara",
        "day": "Day 3",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Boumalne Dades",
        "desc": "Wake up early in the morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels to Merz...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 4,
        "name": "Dades Valley",
        "day": "Day 4",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Amridil Kasbah – High Atlas Mountains – Marrakech",
        "desc": "On last day of your 4-day desert tour from Marrakech, you continue to Kalaa Magouna to visit the Rose Valley. A Rose Festival is held annually in May....",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.2847,
        -4.2694
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-desert-tour/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 6 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "5-days-tour-marrakech-to-merzouga",
    "title": "5-Day Private Marrakech to Merzouga Desert Tour | Sahara Star Tours",
    "shortTitle": "5-Day Private Marrakech to Merzouga Desert Tour",
    "description": "Private 5-day Morocco desert tour from Marrakech (round-trip). Explore Merzouga, Marrakech, Ait Ben Haddou. Local support and flexible planning.",
    "aboutHtml": "This private 5-day Morocco journey begins in Marrakech and finishes in Marrakech. Along the route, you will experience Marrakech, High Atlas Mountains, Telouat Kasbah, Ait Ben Haddou, Ouarzazate, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "High Atlas Mountains",
      "Telouat Kasbah",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Draa Valley",
      "Nkob",
      "Merzouga"
    ],
    "relatedTours": [
      "3-day-morocco-desert-tour-from-marrakech",
      "4-days-marrakech-desert-tour",
      "2-day-zagora-desert-tour-from-marrakech"
    ],
    "price": "From $650/person",
    "heroImage": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – High Atlas mountains – Telouat Kasbah – Ait Ben Haddou Kasbah – Ouarzazate",
        "content": "Your 5-day desert journey begins with an early pickup from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes. After that you continue to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. Next, you head to “The gate of the desert” Ouarzazate. Dinner and overnight stay in a hotel."
      },
      {
        "day": "Day 2",
        "title": "Ouarzazate – Agdz – Draa Valley – Nkob – Merzouga Desert – Camel trekking – overnight in a luxury camp",
        "content": "After breakfast, you explore the city of Ouarzazate. Firstly, you visit the Atlas studios, where various famous movies were shot, and visit the Taourirt Kasbah: an ancient fortified mud castle. Next, you depart towards Agdz, and join the Draa Valley the longest river in Morocco. You will drive along it, and stop for panoramic views of the palm trees groves, spectacular Kasbahs and Berber villages. Enjoy free time for lunch in Nkob or Alnif. After lunch, you continue to Merzouga Sahara through Rissani. When you reach the Erg Chebbi sand dunes you switch to camels, to cross the Sahara desert. A stop will be made for you on top of a big dune to observe the desert sunset. Next continue to the camp which is a combination between the traditional tents of nomads and the luxury a hotel has. In the campsite you can enjoy the Berber drumming while dancing around the campfire, under open sky of shiny stars. Dinner and Overnight stay in the camp."
      },
      {
        "day": "Day 3",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 4",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani Souk, you continue to Erfoud, where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. Inevitable stops at the “monkey fingers” rock formation. And on a spot atop a mountain overlooking the Dades valley. Finally, dinner and overnight in a hotel."
      },
      {
        "day": "Day 5",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Amridil Kasbah – High Atlas Mountains – Marrakech",
        "content": "On last day of your Morocco desert tour you continue to Kalaa Magouna to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products, from perfumes, rose water, oil, to cosmetic products. Next, you drive along various Kasbahs, including Amridil Kasbah surrounded by the palm trees grove of Skoura. You reach Ouarzazate, free time for lunch in town. Next, you continue to Marrakech by driving through the Tizi n'Tichka pass and the High Atlas Mountains. Finally, you are dropped off at your accommodation or the airport in Marrakech."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Marrakech – High Atlas mountains – Telouat Kasbah – Ait Ben Haddou Kasbah – Ouarzazate",
        "desc": "Your 5-day desert journey begins with an early pickup from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atl...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Ouarzazate",
        "day": "Day 2",
        "subtitle": "Ouarzazate – Agdz – Draa Valley – Nkob – Merzouga Desert – Camel trekking – overnight in a luxury camp",
        "desc": "After breakfast, you explore the city of Ouarzazate. Firstly, you visit the Atlas studios, where various famous movies were shot, and visit the Taouri...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 3,
        "name": "Explore Merzouga region",
        "day": "Day 3",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 4,
        "name": "Merzouga Sahara",
        "day": "Day 4",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 5,
        "name": "Dades Valley",
        "day": "Day 5",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Amridil Kasbah – High Atlas Mountains – Marrakech",
        "desc": "On last day of your Morocco desert tour you continue to Kalaa Magouna to visit the Rose Valley. A Rose Festival is held annually in May. Where the loc...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/5-days-tour-marrakech-to-merzouga/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 6 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "11-days-morocco-classic-tour",
    "title": "11-Day Imperial Cities Classic Tour | Sahara Star Tours",
    "shortTitle": "11-Day Imperial Cities Classic Tour",
    "description": "11-day classic Morocco vacation package. Discover Rabat, Chefchaouen, the ancient medina of Fes, Sahara desert luxury camping, and enchanted Marrakech.",
    "aboutHtml": "An all-encompassing 11-day classic Morocco private journey designed for travelers seeking the complete Moroccan story. From Casablanca’s shoreline and Rabat’s grand monuments, ascend into the Rif Mountains to experience Chefchaouen’s calming blue lanes. Continue through Volubilis to the spiritual city of Fes, followed by a dramatic transition into the Sahara Desert for sunset camel trekking and luxury glamping. Traverse the Atlas Mountains via Ait Ben Haddou to end in the vibrant souks and gardens of Marrakech.",
    "category": "imperial-cities",
    "duration": "11 Days / 10 Nights",
    "durationDays": 11,
    "startingFrom": "Casablanca",
    "price": "From $1,350/person",
    "heroImage": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/thumbnail.jpg",
    "highlights": [
      "Explore the UNESCO World Heritage ancient Medinas and vibrant souks",
      "Traverse the majestic High Atlas Mountains via the scenic Tizi n'Tichka pass",
      "Visit the legendary Kasbah Ait Ben Haddou, famous for Hollywood blockbusters",
      "Experience an authentic sunset camel trek across the golden Sahara dunes",
      "Spend a magical night glamping under the stars in a luxury desert camp",
      "Discover breathtaking oases, dramatic gorges (Todra & Dades), and lush valleys",
      "Indulge in authentic Moroccan cuisine and traditional Berber hospitality"
    ],
    "inclusions": [
      "Pick-up and drop-off at your airport, hotel, or riad",
      "Private transportation in a modern, air-conditioned 4x4 or minivan",
      "English/Spanish speaking professional driver and local guides",
      "Overnight accommodations in highly-rated authentic Riads and Hotels",
      "1 Night in a Luxury Desert Camp in the Sahara (private tent with ensuite bathroom)",
      "Sunset and sunrise camel trekking in the desert (one camel per person)",
      "Daily breakfasts and specified dinners (refer to itinerary)",
      "Local taxes and fuel surcharges"
    ],
    "exclusions": [
      "International flight tickets",
      "Travel and medical insurance",
      "Lunches and mid-day snacks",
      "Beverages and drinks during meals",
      "Entrance fees to historical monuments and museums",
      "Gratuities and tips for guides/drivers",
      "Personal expenses and souvenirs"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Casablanca Pick Up",
        "content": "Your exclusive guide will greet you at Casablanca Airport (the time is set according to the guest’s flight) and start the journey. Take a comfortable SUV to the city and visit Hassan II. Hassan ll Mosque, which is owned by more than 6,000 craftsmen. Built in 1993. Located on the coast of the city, it is a magnificent building and one of the few mosques accessible to foreigners in Morocco *For guests who choose this itinerary, it is recommended to take a flight arriving in the morning, which needs to be adjusted according to the actual arrival time of the guests. The first day’s itinerary is affected by the flight time. Not provided on the source page."
      },
      {
        "day": "Day 2",
        "title": "Casablanca Rabat Chefchaouen",
        "content": "After breakfast, we will go to Rabat, the administrative and political capital of Morocco (Rabat), and visit Oudaya Kasbah, Rabat Medina, and the old square begin the city tour. After lunch, we will continue to go southeast. Drive through the rugged Rif mountains to Schaffshavan (Chefchaouen) a blue town. SchaeufShawan’s wheat with its blue city color, known as Dina, Schaeuf is a small town in the northeast with a population of more than 30,000. The whole town has a vast blue color, like a paint that has overturned the sky. It is often called “Blue Mountain City” or “Blue Street”. After arrival, you can walk around the cobbled Medina of Chefchaouen and feel the Moorish and Spanish atmosphere. This town itself is easy to explore. Although the old wheat field is very small.(Open-air markets will be found, and different kinds of goods will be sold. Same-time check-in traditional Special Moroccan Riad. Not provided on the source page."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen- Fes",
        "content": "After breakfast, explore the Medina area of the famous blue town, passing through the Roman city of Volubilis, which has well-preserved primitive mosaics, Roman roads and urban layouts. In the evening, I arrived in Fez and stayed in Futong’s characteristic Moroccan Riad. Fes is the spiritual and cultural capital of Morocco and the largest surviving medieval city in the world Not provided on the source page."
      },
      {
        "day": "Day 4",
        "title": "One-day trip to the ancient city of Fes",
        "content": "Fes Ancient City is the world’s largest pedestrian zone (Car-free urban zone). The city has the world’s oldest university (founded in 859 and is still teaching), as well as the world’s oldest leather factory in the 11th century. On this day, you will visit the ancient city of Fez, visit the “open-air market” of Fez Medina, the walls of the palace, and listen to the historical stories of the ancient city. After that, you will have lunch in a traditional restaurant in the old city and visit the famous Bab Boujloud. And the dyeing factory, understand the traditional process of leather manufacturing Not provided on the source page."
      },
      {
        "day": "Day 5",
        "title": "Fez -Sahara Desert (experience riding a camel)",
        "content": "Leaving the ancient city of Fez and passing through the Atlas Mountains and the beautiful town of Ifrane, known as the “French Village”, you will see the beautiful scenery of apes, cedar forests, etc., and enjoy the unique scenery of the mountains and small Berber villages on the way. After lunch, you are ready to experience riding a camel into the Sahara Desert! Accompanied by experienced camel guides, explore Erg Chebbi’s sand sea and watch the sunset. In the evening, check in Berber nomadic. Tent and dinner. You are free to participate in the campfire welcome party arranged by the tent and sing songs with other peers. Dance and watch the starry sky at night. Not provided on the source page."
      },
      {
        "day": "Day 6",
        "title": "Explore the Sahara Desert (11 Days Morocco Classic Tour)",
        "content": "In the early morning, watch the sunrise in the desert (which may be affected by the weather) and enjoy breakfast at the camp. After that, today we will reserve time for you to explore the desert freely. You can choose to participate in sand skiing at your own expense, experience off-road four-wheel drive and other activities in the desert, or spend more time in the desert to take photos freely. At about noon, our driver will pick you up from the desert camp and explore the oasis areas in the desert and desert, including the ancient irrigation system used by local people in agricultural activities. We also go to Khamlia village, a small village famous for Cnawa spiritual music Cultural Heritage Town, which was originally a slave place of Sudan, where you can experience unique music and lifestyles, as well as Berber handicrafts. In the evening, you will stay in a hotel or a Riad in the desert entrance area. Not provided on the source page."
      },
      {
        "day": "Day 7",
        "title": "Desert-Dades Canyon",
        "content": "After breakfast at the hotel, we left the Sahara Merzouga region. Rissani and Tinjdad drove to Tinghir. Tinghir is a beautiful oasis, stretching 40 kilometers, with one of the largest palm trees in the country. Enjoy walking above the famous Todra Gorge, a 300-meter wall deeply carved in the High Atlas Mountains Watch the monkey. Feet Rocky Land will arrive at Dades Canyon on the same day, and enjoy dinner and spend the night in the area. Not provided on the source page."
      },
      {
        "day": "Day 8",
        "title": "Valley – Ouarzazate – Marrakech",
        "content": "After breakfast at the hotel, take a comfortable SUV to Marrakech. Passing through Val Ouarzazate Ancient City, visit [World Cultural Heritage] Benhadu Ancient City, Ait Benhaddou Kasbah is a famous shooting venue for classic movies such as “Imperial Pride”, “Tomb Robbery” and “Heavenly Kingdom”. It is expected to arrive in Marrakech overnight through the Atlas Mountains Not provided on the source page."
      },
      {
        "day": "Day 9",
        "title": "Ouarzazate-Ait Ben Haddou Marrakech (11 Days Morocco Classic Tour)",
        "content": "Guided by a city guide, visit Marrakech, visit YSL Mayor Garden, open-air market, Koutoubia halal, Djema Square and other attractions, including snake charmers, acrobats, and lively movie-style attractions. You can also go to the cafe in the open-air market in the square to watch the sunset. You can also taste freshly squeezed orange juice at the special market and get involved in Berber carpets, silver jewelry, craftsman workshops, and handmade shoes. If you want to relax, it is recommended to consider booking a traditional Moroccan steam bath Hammam at your own expense, or book a cooking class to add deliciousness to your leisurely journey Not provided on the source page."
      },
      {
        "day": "Day 10",
        "title": "Marrakesh (11 Days Morocco Classic Tour)",
        "content": "After breakfast, we leave Marrakech and head to the town of Sovilla, a city with Portuguese style. We will see the famous spectacle of “sheep on trees” and goats. The tree climbed is actually the tree of life in Morocco, the Forrest Gump, and the fruit of the Forrest Gump. It is extremely delicious for goats, and the sheep have practiced climbing trees in order to eat these fruits. After arriving at the town, you can visit the ports and beaches of the coastal town and swim on the beach. Along the way, enjoy the colorful fish boats, the fortresses by the majestic ancient coast and the winding alleys of the ancient city, and check in the hotel in the evening. Not provided on the source page."
      },
      {
        "day": "Day 11",
        "title": "Essaouira – Casablanca Airport",
        "content": "After breakfast, take the highway to Casablanca Airport (the time is set according to the guest’s flight), and The 11 Days Morocco Classic Tour ends. (If guests take a flight in the evening or in the morning and have enough time, the morning Itinerary can add urban attractions according to the guests’ requirements.) Note: This 11-Day Morocco Classic Tour from Casablanca is just a suggested itinerary designed to inspire your adventure. If it’s not what you are looking for, don’t worry — we’re happy to customize it just for you! Not provided on the source page."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Hassan II Mosque",
        "desc": "Arrival and architectural tour.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Historic Capital",
        "desc": "Royal heritage and sea views.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Day 3",
        "subtitle": "Blue City of the Rif",
        "desc": "Magical blue alleys.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Fes Medina",
        "day": "Days 4 & 5",
        "subtitle": "Spiritual Capital",
        "desc": "Guided walk in ancient alleys.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Sahara",
        "day": "Days 6 & 7",
        "subtitle": "Erg Chebbi Dunes",
        "desc": "Camel trek and desert camp.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 6,
        "name": "Dades Gorge",
        "day": "Day 8",
        "subtitle": "Atlas Canyons",
        "desc": "Canyons and Valley of Roses.",
        "coords": [
          31.59,
          -5.99
        ]
      },
      {
        "number": 7,
        "name": "Marrakech",
        "day": "Days 9 & 10",
        "subtitle": "Imperial Red City",
        "desc": "Souks, palaces, and gardens.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 8,
        "name": "Casablanca",
        "day": "Day 11",
        "subtitle": "Departure",
        "desc": "Return journey along the coast.",
        "coords": [
          33.589882,
          -7.603869
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.629472,
        -7.981084
      ],
      [
        33.589882,
        -7.603869
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/thumbnail.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-01.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-02.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-03.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-04.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-05.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-06.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-07.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-08.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/11-days-morocco-classic-tour/images/image-09.jpg",
        "cap": "11 Days Morocco Classic Tour – Private Tour Package"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Chefchaouen",
      "Fes Medina",
      "Merzouga Sahara",
      "Dades Gorge",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "imperial-cities",
      "cultural",
      "heritage"
    ]
  },
  {
    "slug": "13-days-casablanca-tour",
    "title": "13-Day Grand Imperial Cities Journey | Sahara Star Tours",
    "shortTitle": "13-Day Grand Imperial Cities Journey",
    "description": "Explore Morocco's wonders on a 13-day private itinerary from Casablanca. Imperial palaces, Rif Mountains, Sahara dunes, and authentic coastal retreats.",
    "aboutHtml": "The 13-day grand Casablanca tour is an expertly curated voyage capturing Morocco’s full diversity. Experience the imperial grandeur of Rabat, Meknes, and Fes, stroll the cobalt alleyways of Chefchaouen, and immerse yourself in the silence of the Erg Chebbi desert. Enjoy scenic drives through the High Atlas, historic tours of Ait Ben Haddou and Taourirt Kasbahs, and vibrant days in Marrakech. Unwind with coastal Atlantic views before your return to Casablanca.",
    "category": "imperial-cities",
    "duration": "13 Days / 12 Nights",
    "durationDays": 13,
    "startingFrom": "Casablanca",
    "price": "From $1,590/person",
    "heroImage": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/thumbnail.jpg",
    "highlights": [
      "Explore the UNESCO World Heritage ancient Medinas and vibrant souks",
      "Traverse the majestic High Atlas Mountains via the scenic Tizi n'Tichka pass",
      "Visit the legendary Kasbah Ait Ben Haddou, famous for Hollywood blockbusters",
      "Experience an authentic sunset camel trek across the golden Sahara dunes",
      "Spend a magical night glamping under the stars in a luxury desert camp",
      "Discover breathtaking oases, dramatic gorges (Todra & Dades), and lush valleys",
      "Indulge in authentic Moroccan cuisine and traditional Berber hospitality"
    ],
    "inclusions": [
      "Pick-up and drop-off at your airport, hotel, or riad",
      "Private transportation in a modern, air-conditioned 4x4 or minivan",
      "English/Spanish speaking professional driver and local guides",
      "Overnight accommodations in highly-rated authentic Riads and Hotels",
      "1 Night in a Luxury Desert Camp in the Sahara (private tent with ensuite bathroom)",
      "Sunset and sunrise camel trekking in the desert (one camel per person)",
      "Daily breakfasts and specified dinners (refer to itinerary)",
      "Local taxes and fuel surcharges"
    ],
    "exclusions": [
      "International flight tickets",
      "Travel and medical insurance",
      "Lunches and mid-day snacks",
      "Beverages and drinks during meals",
      "Entrance fees to historical monuments and museums",
      "Gratuities and tips for guides/drivers",
      "Personal expenses and souvenirs"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Airport Casablanca Rabat",
        "content": "You arrive at Casablanca airport, where your private driver/guide will meet you and drive to Casablanca, and then to Rabat. In Casablanca, you will see the Hassan II Mosque, the largest mosque outside Mecca. Continuing to Rabat – the capital of Morocco – you will see the Hassan Tower and walk the Oudaya Kasbah before you check into your overnight accommodation in a riad at the heart of the Medina. Not provided on the source page."
      },
      {
        "day": "Day 2",
        "title": "Rabat – Assilah – Tangier",
        "content": "After breakfast in your riad, we will drive to Tangier via the city of Asilah. Most of the drive will be by the coast. Our first stop will be in Asilah, where you will have the opportunity to explore the city. Asilah is known for its annual festival for the arts, and most of the walls of the Medina are painted by various famous artists from all over the world. Your visit includes the Skalla fortress, where you will experience a wonderful view of the Medina and the ocean. After, we will have lunch in Asilah, and we will drive to Tanger to get a feel of the city Not provided on the source page."
      },
      {
        "day": "Day 3",
        "title": "Tangier – Tetoun – Chefchaouen",
        "content": "After breakfast, We drive through the Rif Mountains and Tetouan city to enjoy the views of the beautiful mountains till we get to Chefchaouan one of the stunning villages in the feet of rif mountains Chefchaouen medina had a Spanish-style square surrounded by many funky arts and crafts stores, roof-top restaurants and cafes where you will spend you night in a nice place to enjoy the breeze and the beauty of the nature. Not provided on the source page."
      },
      {
        "day": "Day 4",
        "title": "Chefchaouen – Volubilis – Meknes – Fes",
        "content": "After breakfast in your riad, you will start travelling to Fes via Ouazzan and the Roman site of Volubilis. After a couple of hours’ drive, you will get to Volubilis, the well-preserved Roman empire dating to 225 BC, where you will see the most beautiful Mosaics in Morocco dating back to the 3rd century BC. Here you will have a guided tour of the site and learn a lot about the Roman Empire. After that, we travel to Meknes, the Ismaili capital of Morocco. In Meknes, we see the fascinating gate Bab Mansour, built by the sultan My Ismail; the granary and the Sahrij Souani, used for irrigation and plantation. Your visit also includes the Mulay Ismail Mausoleum. We then continue via the highway to Fes. Not provided on the source page."
      },
      {
        "day": "Day 5",
        "title": "Fes Exploration",
        "content": "After breakfast in your riad, you will start exploring Fes, the “Spiritual City of Morocco”. You will spend the whole morning exploring the Medina and its alleys; visiting most of the sites with cultural and historical interest, including the famous Al Karaouine Mosque and University (the oldest in the world), the Medrasa Bouanania, the Tanneries, and the Najjarine fountain. After lunch, we will drive you outside the Medina to see the Royal Palace gate, walk through the Jewish quarter “the Mellah”, and then visit the pottery cooperative. In the afternoon, we will drive you to one of the fortresses to experience an amazing panoramic view of the whole Medina of Fes. Not provided on the source page."
      },
      {
        "day": "Day 6",
        "title": "Fes – Ifrane – Errachidia – Merzouga",
        "content": "After breakfast in your riad, you’ll start travelling southeast to Merzouga via Midelt and Errachidia. Your first stop will be at Ifran, referred to as “the Switzerland of Morocco”, and then to Merzouga via Midlet and the Ziz Valley. During this journey, you’ll experience glimpses of the Middle Atlas and the High Atlas mountains. Stopping at the famous cedar forest, the largest in Morocco, where you may well sight Barbarian Apes…. You’ll notice how the scenery changes to reveal hints of the desert as you approach the city Er Rachidia.. After lunch in Midelt, your journey continues along the luxuriant Ziz Valley, stopping for panoramic views along the way. We will drive through welcoming Berber villages to Erfoud, and then Rissani, the foundation of the Alaouite dynasty, the current ruling royal family in Morocco. Arriving in Merzouga at the end of the day, you’ll be welcomed with a glass of mint tea before you check in to your riad. Not provided on the source page."
      },
      {
        "day": "Day 7",
        "title": "Merzouga area – Camel trek & overnight in desert camp",
        "content": "After breakfast in the riad, you will start an explorative journey of the area. You’ll visit the Gnawa people, originally slaves brought from Sudan, to experience their music and lifestyle. Not far away, there’s the lake of Merzouga, with its bird populations. You may also visit the souk in Rissani, a traditional town which was the origin of the ruling family in Morocco and the meeting place of the Caravans trading as far as Timbuctou in Mali. Here you will see a lot of men hooded and women veiled. In the afternoon, you will start your guided camel ride, led by an experienced camel man, to explore the sand sea of Merzouga. Overnight at our luxury desert camp, where you will have dinner. For your convenience, the camp is equipped with flush toilets. Not provided on the source page."
      },
      {
        "day": "Day 8",
        "title": "Merzouga – Todra Gorges – Dades Valley Skoura",
        "content": "Early in the morning, your camel guide will wake you up to watch what well may be the best sunrise of your life. Afterwards, you will trek back to the village of Merzouga, en route, you couldn’t fail to appreciate the unique beauty of the spectacular Erg Chebbi dunes – changing with the light as the day progresses. After breakfast in your riad, you’ll leave for the Dades Valley, visiting Todra Gorges – the highest, narrowest gorges in Morocco. After lunch within the valley, you will have an optional hour’s hike through the fields where you will enjoy visiting an old mud village, meet locals, and learn about the culture. On through Dades Valley, where you will have the opportunity to see majestic sand castles and the amazing rock formations known as “monkey toes”. Overnight accommodation in Skoura Not provided on the source page."
      },
      {
        "day": "Day 9",
        "title": "Skoura- Dades Valley –Ouarzazate –Marrakech",
        "content": "After breakfast in the hotel, we’ll drive through the Dades Valley towards Kalaat Mgouna and Ouarzazate. The route through Dades Valley is the way of the thousand Kasbahs, providing numerous opportunities to take some of your best photographic shots of the trip. We’ll stop at Kalaat Mgouna, “the rose city”, to purchase rosewater, which will make your linen smell good a long time after your trip is over. Continue to Marrakech via the Ait Ben Haddou Kasbah. Built by Et Hami El Glaoui, one of the last Berber chieftains during the 18th century, now the Kasbah is a house of many Glaoui people.. Your journey will continue through the majestic Tizi n’Tichka Pass (2260m) over the High Atlas Mountains, before arriving at your accommodation in Marrakech. Not provided on the source page."
      },
      {
        "day": "Day 10",
        "title": "Marrakesh Exploration",
        "content": "After breakfast in the riad, you will enjoy a morning guided tour of Marrakech, “the Red City of Morocco”. Your guide will ensure that you see all the sites of historical and cultural interest, including the Koutoubia Minaret, the Saadian tombs, the beautiful Palace of Bahia, and the Ben Youssef Koranic School. Finally, end the morning by walking through the medina alleys -getting a chance to admire all of the different artisans performing their crafts before arriving at the famous Jamaa El Fna Square. Lunch at a restaurant near the square, and then in the afternoon visit the gardens at Majorelle and have a short tour at Gueliz -the new city of Marrakech. After the visit, you will have the option to walk through the square, entertained by magicians, story-tellers, tooth-pullers and food sellers Not provided on the source page."
      },
      {
        "day": "Day 11",
        "title": "Marrakesh –Essaouira",
        "content": "After breakfast in the Riad in Marrakech. We will drive to Essaouira (called Mogador by European sailors and traders). It is also known for its annual Gnaoua Music Festival that attracts 300,000+ people in June. It also has an expansive beach for surfing called Plage de Safi, the fishing harbor, offers breathtaking views of the Portuguese ramparts, explore the ramparts and the spice and jewelry souks of the Medina. Not provided on the source page."
      },
      {
        "day": "Day 12",
        "title": "Essaouira – El Jadid – Casablanca",
        "content": "Today we will take the coastal way to Casablanca, travelling back to Casablanca via the coast, stopping at El Oualidia for lunch. En route, you will visit the historical sites at El Jadida, then arrive in Casablanca in time for dinner at the hotel, where you will spend your last night. Not provided on the source page."
      },
      {
        "day": "Day 13",
        "title": "Casablanca Transfer/Tour ends",
        "content": "You take breakfast and then get a transfer to Casablanca. End of our Morocco Itinerary 13 Days Tour from Casablanca. Not provided on the source page."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival",
        "desc": "Hassan II Mosque visit.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Capital",
        "desc": "Hassan Tower and Kasbah.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Tangier",
        "day": "Day 3",
        "subtitle": "Strait of Gibraltar",
        "desc": "Cape Spartel and Hercules Caves.",
        "coords": [
          35.7595,
          -5.834
        ]
      },
      {
        "number": 4,
        "name": "Chefchaouen",
        "day": "Day 4",
        "subtitle": "Blue Mountain Town",
        "desc": "Rif Mountain charm.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Days 5 & 6",
        "subtitle": "Medieval Medina",
        "desc": "Universities and tanneries.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 6,
        "name": "Merzouga Desert",
        "day": "Days 7 & 8",
        "subtitle": "Erg Chebbi Camp",
        "desc": "Camel rides and starry night.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 7,
        "name": "Dades & Todra",
        "day": "Day 9",
        "subtitle": "Canyons",
        "desc": "Scenic gorges and kasbahs.",
        "coords": [
          31.5517,
          -5.5986
        ]
      },
      {
        "number": 8,
        "name": "Ouarzazate",
        "day": "Day 10",
        "subtitle": "Cinema City",
        "desc": "Ait Benhaddou fortress.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 9,
        "name": "Marrakech",
        "day": "Days 11 & 12",
        "subtitle": "The Red City",
        "desc": "Grand imperial exploration.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 10,
        "name": "Casablanca",
        "day": "Day 13",
        "subtitle": "Departure",
        "desc": "Return transfer and farewell.",
        "coords": [
          33.589882,
          -7.603869
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.465,
        -6.034
      ],
      [
        35.7595,
        -5.834
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        31.629472,
        -7.981084
      ],
      [
        33.589882,
        -7.603869
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/thumbnail.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-01.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-02.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-03.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-04.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-05.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-06.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-07.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-08.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-09.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-10.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/itinerary-13-days-casablanca-tour/images/image-11.jpg",
        "cap": "The Best Morocco Itinerary 13 Days Casablanca Tour"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Merzouga Desert",
      "Dades & Todra",
      "Ouarzazate",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "imperial-cities",
      "cultural",
      "heritage"
    ]
  },
  {
    "slug": "15-days-tour-from-casablanca",
    "title": "15-Day Complete Imperial Morocco Tour | Sahara Star Tours",
    "shortTitle": "15-Day Complete Imperial Morocco Tour",
    "description": "Complete 15-day Moroccan grand circuit from Casablanca. Experience all four imperial capitals, the blue city, Sahara dunes, and breezy Atlantic coast.",
    "aboutHtml": "All of Morocco’s greatest sites are included in this 15-day tour from Casablanca. This tour combines authenticity and modernity as well as culture and exploration. You won’t miss anything during your fifteen days in Morocco.<br/><br/>Depending on your flight information, the journey starts and concludes in Casablanca or Marrakech. We will travel to a lot of different destinations like Merzouga; which is the most important and memorable stop on your journey to Morocco. We will take you on an exciting camel ride to the heart of the desert and spend a night with nomads.<br/><br/>Just after that, you will travel with us to the mythical city of salves, Yunkai (Ait Benhaddou), as reported in the Game of Thrones; to Pentos (Essaouira), the Free City located across the Sea of Westeros; and to Astapor (Ouarzazate), one of the three great city-states of Slaver’s Bay. The journey with us takes you back in time to the land of Dragons, and exotic Morocco.<br/><br/>If you are a fan of culture and history, Fes, Marrakech, Rabat, Volubilis, and Meknes have a lot to offer. You will lose the sense of time while strolling through the maze of old medinas formed by the narrow streets and aromatic shops. At some point, you may start to wonder how intact the city’s buildings still are. Amazingly, apart from electricity, only few indications show that life has changed in some places since ancient times.",
    "category": "imperial-cities",
    "duration": "15 Days / 14 Nights",
    "durationDays": 15,
    "startingFrom": "Casablanca",
    "price": "From $1,750/person",
    "heroImage": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/thumbnail.jpg",
    "highlights": [
      "Experience a night the heart of the Desert",
      "Trek camels and visit the nomad families",
      "Take pictures with the Barbary monkeys in Azrou",
      "Visit the Hassan 2 Mosque in Casablanca",
      "Visit the historical sites in Rabat",
      "Discover the blue city of Chefchaouen",
      "Guided visit of the Roman ruins in Volubilis",
      "Guided visit of Meknes, Fes, & Marrakech.",
      "Watch Sunset over the sand dunes",
      "Hearty dinner and party around the campfire (Berber Drums)",
      "Visit one of the popular cinema studios in the world",
      "Visit the UNESCO world heritage sites",
      "Visit Essaouira, Taroudant, & Agadir"
    ],
    "inclusions": [
      "Guided city tours and monument fees",
      "Comfortable private transportation with guide English speaking",
      "Camel trek and the overnight in Luxury Camp",
      "Airport meet and great service",
      "Dinner at a local restaurant in Marrakech with Music and Moroccan dancing",
      "Half board during the tour",
      "Fuel",
      "14 Breakfasts and 4 dinners in the desert"
    ],
    "exclusions": [
      "Airline taxes",
      "Lunch",
      "Drinks",
      "Flights",
      "Gratuities",
      "Travel Insurance, medical emergency",
      "Tips to guide and driver (optional)",
      "Anything not stated in included part"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "arriving to Casablanca",
        "content": "The 15-day tour will begin at the hotel or airport in Casablanca. Following that, you’ll visit the Hassan II mosque, which is constructed over the Atlantic Ocean and ranks as the seventh-largest mosque in the world. The good news is that it is accessible to tourists who are not Muslims. It’s a fantastic opportunity to find an Islamic mosque. You will have a great chance to observe Moroccan craftsmen’s deft work, which exposes the richness and beauty of their handicrafts. You will also visit the Museum of Moroccan Judaism and the Secret Medina. It gives a detailed account of the history, culture, and customs of Jews in Morocco. In addition, you will see other sights in accordance with your time of arrival. The first night will be spent in a nice hotel."
      },
      {
        "day": "Day 2",
        "title": "A tour from Casablanca to Chefchaouen",
        "content": "Following breakfast, your journey to Chefchaouen will start. On this route, you will visit Rabat, one of Morocco’s imperial towns, on the second day of this 15 days tour from Casablanca. You will see the beautiful Kasbah of Oudayas, the Mausoleum of Mohamed V, the Hassan Tower with its unfinished minaret, the Hassan 2 as well as the Chellah Necropolis. You’ll travel to Chefchaouen after lunch. Before you arrive in the foothills of the Rif Mountains, you will travel through a number of breathtaking sceneries. Once there, you will notice a majestic gate leading to a broad valley filled with blue buildings, which is Chefchaouen. In the middle of the Medina, a classic Riad designed in an Andalusian manner will greet you. It will be a good chance for you to walk there instead of using a car and discover it."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen Guided tour",
        "content": "After breakfast, you will set out explore Chefchaouen on foot. Numerous painters, including Eugéne Delacroix, Maria Fortuny, and Henri Matisse, found inspiration in this city. You’ll learn a lot about Moroccan culture and the background of the blue city from the tour. You will begin your investigation at the Chefchaouen Kasbah, which was constructed at the start of the 18th century by the fabled king Moulay Ismail. The ethnographic museum’s stunning view of the gardens that round the Kasbah and its collection of old town photos and musical instruments will astound you. You will visit Plaza Uta el-Hammam after that. The square is surrounded by cafes and restaurants that all serve the same foods. After a long day of exploring, it’s a tranquil location to unwind and observe the world passing by. You will adore this wonderful city if you enjoy taking photos. The city is known as the “jewel of Morocco,” and numerous Instagram users praised it as one of the most beautiful places they had ever visited. Including Chefchaouen in your 15 days tour from Casablanca won’t be a mistake."
      },
      {
        "day": "Day 4",
        "title": "A trip from Chefchaouen to Fez",
        "content": "After having breakfast, we will travel to the 3rd-century BC Roman ruins of Volubilis in the east. Some of the original mosaics have been kept in remarkably good condition here. This city was served as one of the most remote capitals in the roman era. Now it is a landmark that tourist visit from all around the world. Next, we drive to Meknes, a wonderful imperial metropolis that was constructed by Sultan Moulay Ismail during the 17th century. You’ll visit several beautiful sites like Lahdim Square, Bab Mansour Gate, Sahrij Swani (a sizable pool), and the Sultan Moulay Ismail Tomb. By the end of the day, you’ll head to Fes. Green landscapes and grain farms will be visible as we travel through the long route before you reach the magic city. You’ll spend the night at a local Riad in the heart of the old Medina."
      },
      {
        "day": "Day 5",
        "title": "Fes guided visit",
        "content": "After the breakfast, you will start your guided tour of the Medina; one of the biggest walled cities in the world. You will stroll through the winding lanes lined with ripe fruit, piles of spices, elaborately woven Berber rugs, and other Moroccan artwork. You will go to mosques including the Quaraouiyine Mosque, which Fatima el Fihri founded in 859, and the Andalusian Mosque, which was built in 860. Unfortunately, non-Muslims are not permitted inside, but you can visit the library and see the magnificent, hand-made tilework going back to the 9th century. Then you will see the fountains, notably the Nejjarine fountain, the Medersas (Koranic schools) that date back to the 13th century, Batha Palace, which is now a museum of arts and traditions, the Chouwara Tanneries, the Souks, including one of the busiest in the city, Souk Attarine, Bab Boujloud with its green and blue pottery, Mellah and the 17th-century Ibn Danan synagogue and the King’s palace. You will then go to the tanneries, which are Fez’s most famous landmarks. You’ll be shocked to learn that leather is still prepared by artisans utilizing methods from the Middle Ages. It’s unusual, but it allows you to see several Moroccan locations that have gone back in time. As you return to your Riad, you get ready for the next adventure."
      },
      {
        "day": "Day 6",
        "title": "A tour from Fez to the Desert",
        "content": "You will reach the Sahara Desert on day six of your 15 days tour from Casablanca. Since you will see a different region of Morocco—the country of camels, nomads, and traditional life—it actually will be the highlight of the 15-day. You travel to the desert via the middle atlas mountains after breakfast in Fes. Ifrane, a small, chilly city known as “the Switzerland of Morocco” for its resemblance to a Swiss ski resort, will be your first stop. Additionally, this city is one of the cleanest in the world, and nobody ever throws cigarettes on the ground there. After taking some shots, you will move on to Azrou and pause at the area’s biggest cedar forest to observe and photograph the barbary monkeys. You cross the border to a different area of Morocco after lunch in Midelt. Before arriving in Ziz Valley, you will stop to take in the breathtaking panoramic view of oases dotted with tall palm trees as you cross Talghomt, which is full of lovely vistas and sceneries. It is a distinct scene from anything you have previously seen throughout this 15 days tour. You will arrive in the desert and your camels will be waiting for you. You then ride your camels out into the desert and you’ll witness one of the most breathtaking sunsets in the world while trekking. You will be in the middle of the desert after an hour, where mint tea will greet you. You will spend the night in a luxurious camp where nomads put on dance and singing performances in which you can take part."
      },
      {
        "day": "Day 7",
        "title": "Our of The Dunes & visiting Nomad Families",
        "content": "The Sahara Desert is an incredible, mythic land that will make your jaw hit the floor! Whether you are looking for immense savage landscapes, beautiful sand dunes, Bedouin primitive camps, or distant camel caravans, the desert has something for everyone. It’s not a surprise that its pictures evoke dream-like Arabian Nights and Lawrence of Arabia vibes. After breakfast, it’s time to explore its neighborhood; your dromedary will be ready to take you over the Erg Chebbi desert’s sea of golden sand to nearby location accessible by car where you will meet your driver. You start your journey by visiting the lake of Merzouga (Dayet Sriji) which is known for its high biodiversity. It is home to several exotic bird species including, flamingos which settle there between June and September. Later, you’ll be traveling to the Sudanese-born Gnawa people to experience their music and way of life. You will also stop by a nomad home, where various Berber goods are sold at prices that are lower than those in the major cities. Of course, a knowledgeable guide will be present. You will return and be driven by 4 x 4 to your hotel for taking shower and rest. It is time to relax and enjoy the Sahara atmosphere before starting your next adventure."
      },
      {
        "day": "Day 8",
        "title": "Merzouga to Dades Valley",
        "content": "You will cross the rough Road of a Thousand Kasbahs, which stand up along this old caravan trading route like turreted sand castles, as you head towards Gorge Dades after enjoying a traditional Berber breakfast. The middle part of Morocco is one of the most thrilling and romantic places to visit. It is surrounded by lush river valleys, palmeries, and burnished mud-brick buildings that are alive with the bright color beneath a clear desert sky. Via Tinghir, we’ll pass by spectacular escarpments and deep gorges as we make our way through the Ziz Valley. After a walk through the Todra Gorge, we’ll stop for lunch at a nearby restaurant. In the afternoon, you will hover over Dades Valley, you will stop to look at the “monkey toes” rock formations. By the end of the day, you will have arrived to Boumaln Dades, where you will spend the night in a traditional Riad."
      },
      {
        "day": "Day 9",
        "title": "Dades Gorges to Rose Valley, and Ouarzazate",
        "content": "After breakfast in the morning, you’ll go on a stroll to explore the Dades Gorge before traveling through the Draa Valley, which is home to several palm trees and Berber communities. It only takes a short journey to Dades Valley to observe additional breathtaking High Atlas mountain formations that are encircled by verdant fields of fig, almond, apricot, peach, walnut, and pomegranate trees. Rose Valley, known for its rose water and cosmetics, will come next. It is made from Damascena Rose, which is also used in several cosmetics, medications, and fragrances. We will reach Ouarzazate, where we will spend the night."
      },
      {
        "day": "Day 10",
        "title": "Ouarzazate, Kasbah Ait Benhaddou, & Taroudant",
        "content": "After breakfast, you’ll go to Ouarzazate’s largest Oscar Film Studio (Hollywood of Africa). Then, you make your way to the well-known Kasbah of Ait Ben Haddou, which UNESCO has designated as a World Heritage Site. Many international films, such as Gladiator, Lawrence of Arabia, and Game of Thrones, have used this Kasbah as their setting. You will go to this special Kasbah. After that, you will continue traveling west while taking in the breathtaking grandeur of the Atlas Mountains, passing through Taznakht, a little Berber town where you’ll stop for lunch. Then travel to Taliouine, the capital of Sufran, where, if the time of your visit corresponds with harvest, you’ll get the chance to meet residents in their fields. You’ll arrive in Taroudant, also referred to as “the grandmother of Marrakesh,” in the late afternoon. In contrast to other Moroccan cities, this one’s Medina boasts a Berber and Arab souk, which you will explore while strolling through its narrow lanes. You will spend the night at a Riad."
      },
      {
        "day": "Day 11",
        "title": "Taroudant, Agadir, & Essaouira",
        "content": "You will depart Taroudant after breakfast and travel via Agadir to Essaouira. For a long time, travelers have flocked to Agadir because of its lovely, big beach. Before continuing to Essaouira, you will have a stroll along the promenade after lunch. The seaside road offers stunning views as you go. You can see herds of goats climbing the trees in search of argan nuts and leaves because the region is well known for its argan oil. You will arrive in Essaouira, also known as the “Jewel of the Atlantic,” after making several stops along the coast. Spend the night inside a Riad in the Medina."
      },
      {
        "day": "Day 12",
        "title": "Essaouira guided visit",
        "content": "After breakfast, you’ll visit the Skalla fortress ramparts to begin our day of exploration. Then explore the Medina, a UNESCO World Heritage Site, where you can find wonderful arts and crafts made of native Thuya wood as well as other items. Lunch is prepared in the Moroccan style, using freshly purchased fish. You learn about the souks, the port, and the stronghold of Skala. Additionally, you will learn about Essaouira’s specialty, which is the artisanal processing and cutting of Thuya wood. You will move around the hundreds of shops as you stroll through the Medina’s passageways. You ramble around the Mellah, the Jewish administrative center. You will explore Essaouira, popularly referred to as the “City of the Wind,” which draws surfers from all over the world. The Portuguese, Romans, and Phoenicians all inhabited Essaouira. As a result, a significant influence can be seen in the architecture. Essaouira is a little town with a rich past. Many performers from Africa and around the world travel to a “Gnaoua music” festival every year to perform. In the second week of June, it happens. You’ll have some free time in the afternoon to explore the main square and enjoy a mint tea at one of its cafés. Spend the night inside a Riad in the Medina."
      },
      {
        "day": "Day 13",
        "title": "Essaouira excursion to Marrakesh",
        "content": "You’ll leave for Marrakesh after breakfast. You might observe a lot of goats climbing trees to eat Argan nuts and leaves on the route. This area is known for Argan trees and its oil is exported worldwide. You will stop by a women’s cooperative for argan oil, where you can discover the uses and advantages of the oil for everything from cooking to cosmetics to medicine. You will check into your Riad in the Medina after making numerous stops along the way. You’ll have some free time in the afternoon to unwind and wander through Jamaa Lafna’s bustling square and its snake charmers, musicians, fortune tellers, and acrobats."
      },
      {
        "day": "Day 14",
        "title": "Marrakech guided tourMarrakech guided tour",
        "content": "We saved the best for last. Before ending your 15 days tour from Casablanca, you will get aboard a Moroccan Vespa to explore Marrakech’s streets and sites like a local instead of tiringly lengthy walks, traffic congestion, or bus excursions! Step onto the back of a Vespa and you will get ready to travel around the streets of Marrakech. You’ll pass by elaborate Islamic architecture, humming bazaars, magnificent blue buildings, courtyards, and historic souks. After lunch, you will explore some secret gardens as you zip through street shops and Marrakech’s towering minarets! You’ll learn all the insider tips and have someone to show you exactly how Moroccans live with a native leading the trip, plus it will be a pleasant, non-cliche approach to seeing the best sights in Marrakech! The city of Marrakesh transforms into a magnificent place with a vivid energy that is difficult to match as the golden tones of the sun begin to fade and the night descends with its chilly, refreshing wind, its sparkling night sky, and its promise of exciting times ahead. We will take you to some of Marrakesh’s most well-known sights as floodlights illuminate them, bringing to life reflections and the play of light as the markets are transformed into outdoor food courts. As local entertainers perform all around you and your local guide entertains you with their tales, Jemaa el-Fna Square transforms into a spot where you can eat the best cuisine from the area. Overnight in your Riad."
      },
      {
        "day": "Day 15",
        "title": "End of 15 days tour from Casablanca",
        "content": "Your 15-day tour from Casablanca has come to a close here. Even while it makes us happy when a tour goes as planned, this is one of the aspects of our profession that we dislike the most. After traveling together for fifteen days, we develop relationships, share our experiences, and open up about ourselves. True, saying bye has never been an easy task. The last day’s planning is based on the details of your flight. The driver picks you up after checking in and takes you to the airport, where you leave from Morocco with a variety of tales to tell."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Casablanca",
        "day": "Day 1",
        "subtitle": "Atlantic Start",
        "desc": "Hassan II Mosque.",
        "coords": [
          33.589882,
          -7.603869
        ]
      },
      {
        "number": 2,
        "name": "Rabat",
        "day": "Day 2",
        "subtitle": "Capital",
        "desc": "Royal landmarks and oceanfront.",
        "coords": [
          34.020882,
          -6.84165
        ]
      },
      {
        "number": 3,
        "name": "Tangier",
        "day": "Day 3",
        "subtitle": "Northern Gateway",
        "desc": "Mediterranean and Atlantic junction.",
        "coords": [
          35.7595,
          -5.834
        ]
      },
      {
        "number": 4,
        "name": "Chefchaouen",
        "day": "Day 4",
        "subtitle": "Blue Pearl",
        "desc": "Rif Mountain magic.",
        "coords": [
          35.1714,
          -5.2697
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Days 5 & 6",
        "subtitle": "Spiritual Capital",
        "desc": "UNESCO heritage walking tour.",
        "coords": [
          34.033134,
          -5.00028
        ]
      },
      {
        "number": 6,
        "name": "Merzouga Sahara",
        "day": "Days 7 & 8",
        "subtitle": "Erg Chebbi Dunes",
        "desc": "Glamping and camel caravan.",
        "coords": [
          31.1444,
          -4.0197
        ]
      },
      {
        "number": 7,
        "name": "Dades Gorges",
        "day": "Day 9",
        "subtitle": "Dramatic Canyons",
        "desc": "High rock formations.",
        "coords": [
          31.59,
          -5.99
        ]
      },
      {
        "number": 8,
        "name": "Ouarzazate",
        "day": "Day 10",
        "subtitle": "Kasbah Road",
        "desc": "Ait Benhaddou and studios.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 9,
        "name": "Taroudant",
        "day": "Day 11",
        "subtitle": "Little Marrakech",
        "desc": "Souss Valley ramparts.",
        "coords": [
          30.47,
          -8.877
        ]
      },
      {
        "number": 10,
        "name": "Essaouira",
        "day": "Days 12 & 13",
        "subtitle": "Windy Coast Mogador",
        "desc": "Argan forests and ocean ramparts.",
        "coords": [
          31.5125,
          -9.77
        ]
      },
      {
        "number": 11,
        "name": "Marrakech",
        "day": "Days 14 & 15",
        "subtitle": "Red City Grand Finale",
        "desc": "Palaces, gardens, and Jemaa El-Fna.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 12,
        "name": "Casablanca",
        "day": "Day 16",
        "subtitle": "Departure",
        "desc": "Return to Casablanca airport.",
        "coords": [
          33.589882,
          -7.603869
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.589882,
        -7.603869
      ],
      [
        34.020882,
        -6.84165
      ],
      [
        35.7595,
        -5.834
      ],
      [
        35.1714,
        -5.2697
      ],
      [
        34.033134,
        -5.00028
      ],
      [
        33.5273,
        -5.1054
      ],
      [
        31.1444,
        -4.0197
      ],
      [
        31.5517,
        -5.5986
      ],
      [
        30.9335,
        -6.937
      ],
      [
        30.47,
        -8.877
      ],
      [
        31.5125,
        -9.77
      ],
      [
        31.629472,
        -7.981084
      ],
      [
        33.589882,
        -7.603869
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/thumbnail.jpg",
        "cap": "15 Days Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-01.jpg",
        "cap": "15 Days Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-02.jpg",
        "cap": "15 Days Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-03.jpg",
        "cap": "15 Days Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-04.jpg",
        "cap": "15 Days Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-05.jpg",
        "cap": "15 Days Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-06.jpg",
        "cap": "15 Days Tour From Casablanca"
      },
      {
        "src": "/sahara-star-tours/imperial-cities/15-days-tour-from-casablanca/images/image-07.jpg",
        "cap": "15 Days Tour From Casablanca"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Casablanca",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Casablanca",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Fes",
      "Merzouga Sahara",
      "Dades Gorges",
      "Ouarzazate",
      "Taroudant",
      "Essaouira",
      "Marrakech"
    ],
    "relatedTours": [],
    "productType": "multi-day",
    "themes": [
      "imperial-cities",
      "cultural",
      "heritage"
    ]
  },
  {
    "slug": "agafay-desert-sunset-camel-ride",
    "title": "Agafay Desert Sunset Camel Ride & Dinner | Sahara Star",
    "shortTitle": "Agafay Desert Sunset Camel Ride & Dinner",
    "description": "Escape Marrakech for a magical sunset camel ride in the stone desert of Agafay. Enjoy a traditional Berber dinner under the stars with live music.",
    "aboutHtml": "Enjoy an unforgettable evening in the Agafay Desert with a sunset camel ride, traditional Moroccan dinner in a desert camp, and live Berber music around the campfire.",
    "category": "day-trips",
    "duration": "1 Day / Full Day Trip",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $85/person",
    "heroImage": "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/thumbnail.jpg",
    "highlights": [
      "Magical sunset camel ride in the Agafay Desert with panoramic views of the Atlas Mountains.",
      "Traditional Moroccan dinner (tajines, couscous, salads, dessert) served in a cozy desert camp under Berber tents.",
      "Authentic cultural atmosphere with Berber music, drumming and live show around the campfire under the stars.",
      "Small-group experience with hotel pick-up and drop-off from Marrakech in comfortable, air-conditioned transport.",
      "Perfect evening for couples, families and friends who want a short desert escape without long driving hours."
    ],
    "inclusions": [
      "Private or small-group transfers from Marrakech",
      "Sunset camel ride across the Agafay Desert dunes",
      "Three-course traditional Moroccan dinner served in a luxury tent",
      "Live campfire music and fire show"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Detailed itinerary",
        "content": "16:30–17:00 – Pick-up from your hotel or riad in Marrakech and drive to the Agafay Desert (about 40–50 minutes). 17:30 – Arrival at the camp, welcome with Moroccan tea and pastries, meeting with your camel guide. 18:00 – Sunset camel ride (about 45–60 minutes) across the rocky desert with photo stops in traditional desert outfits (cheich/scarf on request). 19:00 – Return to camp and free time to relax and enjoy the sunset views over Agafay and the Atlas Mountains. 19:30 – Moroccan dinner under a Berber tent or under the stars: mixed salads, tajine or couscous, dessert (seasonal fruits or pastries), mint tea; vegetarian options available on request. 20:30–21:00 – Traditional entertainment with Berber music, drumming and sometimes fire show around the campfire. 21:30–22:00 – Drive back to Marrakech and drop-off at your hotel or riad."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Afternoon",
        "subtitle": "Departure",
        "desc": "Pick up from hotel or meeting point.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Agafay Stone Desert",
        "day": "Sunset",
        "subtitle": "Camel Ride & White Dunes",
        "desc": "Camel trek in traditional nomadic attire as sun sets over Atlas peaks.",
        "coords": [
          31.45,
          -8.2
        ]
      },
      {
        "number": 3,
        "name": "Luxury Desert Camp",
        "day": "Evening",
        "subtitle": "Dinner Under the Stars",
        "desc": "Candlelit Moroccan banquet, fire show, and Gnawa music around campfire.",
        "coords": [
          31.43,
          -8.18
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.55,
        -8.1
      ],
      [
        31.45,
        -8.2
      ],
      [
        31.43,
        -8.18
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/thumbnail.jpg",
        "cap": "Agafay Desert Sunset Camel Ride & Dinner Under The Stars"
      },
      {
        "src": "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/image-01.jpg",
        "cap": "Agafay Desert Sunset Camel Ride & Dinner Under The Stars"
      },
      {
        "src": "/sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/images/image-02.png",
        "cap": "Agafay Desert Sunset Camel Ride & Dinner Under The Stars"
      }
    ],
    "featured": true,
    "badge": "POPULAR",
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Agafay Stone Desert",
      "Luxury Desert Camp"
    ],
    "relatedTours": [],
    "productType": "day-trip",
    "themes": [
      "excursions",
      "day-trips"
    ]
  },
  {
    "slug": "day-trip-essaouira-mogador",
    "title": "Essaouira Mogador Day Trip from Marrakech | Sahara Star",
    "shortTitle": "Essaouira Mogador Day Trip from Marrakech",
    "description": "Private day excursion from Marrakech to coastal Essaouira Mogador. Stroll historical Portuguese ramparts, artisan medina souks, and fresh seafood stalls.",
    "aboutHtml": "One Day Trip from Marrakech to Essaouira Mogador<br/><br/>The day trip from Marrakech to Essaouira is a very interesting one, considering Essaouira itself is a very interesting coastal town.<br/><br/>We will begin this one day excursion at around 8 am by leaving Marrakech and going on a 3 hours long road trip to get to Essaouira city, which falls on the Atlantic coast.<br/><br/>We will enjoy a walk through the narrow streets of Essaouira’s Old Medina, which is a UNESCO world heritage site. Similarly, we will also enjoy a walk through the city ramparts along its golden beach. For lunch, we will try out of the many seafood dishes that the city specializes in.<br/><br/>Next, we will drive deep into Essaouira old Medina, exploring its small shops and artisanal crafts. We might visit one of the local women cooperatives that specialize in the production of Argan oil.<br/><br/>Finally, we will head back to the red city after a wonderful day of exploring the vibrant and charming city of Essaouira.",
    "category": "day-trips",
    "duration": "1 Day / Full Day Trip",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $65/person",
    "heroImage": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/thumbnail.jpeg",
    "highlights": [
      "Coastal Road Trip: A beautiful drive along the Atlantic coast to Essaouira.",
      "Essaouira Medina: Walk through the narrow streets of the Old Medina, a UNESCO World Heritage Site.",
      "City Ramparts: Explore the fortified walls of the city overlooking its golden beach.",
      "Seafood Lunch: Enjoy a fresh seafood meal in one of the local restaurants.",
      "Artisanal Crafts: Browse the small shops for unique, handcrafted items, and visit a women’s cooperative producing Argan oil."
    ],
    "inclusions": [
      "Comfortable, air-conditioned transportation",
      "Visit to an Argan oil women's cooperative",
      "Free time to explore the Essaouira Medina and Ramparts",
      "Stops for panoramic photos of the Atlantic coast"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Essaouira – Atlantic Coast – Old Medina – City Ramparts – Seafood Lunch – Argan Oil Cooperative",
        "content": "Title: One Day Trip from Marrakech to Essaouira Mogador Embark on a captivating journey from Marrakech to Essaouira Mogador. Immerse yourself in the charm of this coastal city as you explore its rich history, vibrant markets, and picturesque beaches. Indulge in local cuisine, visit historical landmarks, and soak in the serene atmosphere of Essaouira Mogador. Experience a day filled with unforgettable moments on this remarkable excursion. Title: One Day Trip from Marrakech to Essaouira Mogador Embark on an unforgettable journey from Marrakech to the enchanting coastal town of Essaouira Mogador. This day trip offers a perfect blend of history, culture, and natural beauty. Explore the charming medina, stroll along the pristine sandy beaches, and immerse yourself in the rich maritime heritage of this UNESCO World Heritage Site. Experience the magic of Essaouira Mogador in a single day, creating memories that will last a lifetime. Drive to Essaouira Your tour begins with a three-hour scenic drive from Marrakech to the coastal city of Essaouira. Along the way, you’ll pass by Argan trees and might even spot goats climbing them, a famous sight in the region. Explore the Old Medina Upon arrival in Essaouira, you’ll start with a guided tour of the Old Medina, a UNESCO World Heritage Site. You’ll walk through its narrow streets, discovering the city’s rich history, art galleries, and unique architecture. City Ramparts and the Beach Next, you’ll visit the city’s ancient ramparts that offer breathtaking views of the Atlantic Ocean. Afterward, take a stroll along Essaouira’s golden beach, where you can relax and enjoy the fresh sea breeze. Seafood Lunch For lunch, you’ll head to a local restaurant to enjoy some of the freshest seafood in Morocco. Essaouira is famous for its seafood dishes, and you’ll have the chance to try specialties like grilled fish, calamari, and prawns. Visit to an Argan Oil Cooperative In the afternoon, you’ll visit a women’s cooperative specializing in the production of Argan oil. You’ll learn about the traditional methods used to produce this valuable oil and have the opportunity to purchase products directly from the cooperative. Return to Marrakech After a full day of exploring Essaouira’s unique charm, you’ll return to Marrakech in the late afternoon."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Morning",
        "subtitle": "Departure",
        "desc": "Pick-up from your riad or hotel.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Argan Forest",
        "day": "Mid-way",
        "subtitle": "Argan Oil Cooperative",
        "desc": "Witness goats climbing argan trees and women producing pure argan oil.",
        "coords": [
          31.52,
          -9.2
        ]
      },
      {
        "number": 3,
        "name": "Essaouira Port",
        "day": "Afternoon",
        "subtitle": "Historic Skala & Fishing Port",
        "desc": "Blue wooden boats, fresh seafood stalls, and sea bastions.",
        "coords": [
          31.51,
          -9.775
        ]
      },
      {
        "number": 4,
        "name": "Essaouira Medina",
        "day": "Afternoon",
        "subtitle": "UNESCO Walled Medina",
        "desc": "Artisan woodcarvers, white-washed lanes, and Atlantic breeze.",
        "coords": [
          31.5125,
          -9.77
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.536,
        -8.761
      ],
      [
        31.52,
        -9.2
      ],
      [
        31.5125,
        -9.77
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/thumbnail.jpeg",
        "cap": "One Day Trip From Marrakech To Essaouira Mogador"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-01.jpg",
        "cap": "One Day Trip From Marrakech To Essaouira Mogador"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-02.jpeg",
        "cap": "One Day Trip From Marrakech To Essaouira Mogador"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-03.jpeg",
        "cap": "One Day Trip From Marrakech To Essaouira Mogador"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-04.jpeg",
        "cap": "One Day Trip From Marrakech To Essaouira Mogador"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/image-05.jpg",
        "cap": "One Day Trip From Marrakech To Essaouira Mogador"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Argan Forest",
      "Essaouira Port",
      "Essaouira Medina"
    ],
    "relatedTours": [],
    "productType": "day-trip",
    "themes": [
      "excursions",
      "day-trips"
    ]
  },
  {
    "slug": "day-trip-ait-ben-haddou",
    "title": "Ait Ben Haddou & Ouarzazate Day Trip | Sahara Star Tours",
    "shortTitle": "Ait Ben Haddou & Ouarzazate Day Trip",
    "description": "Full-day excursion from Marrakech across the Tizi n'Tichka pass to UNESCO Ait Ben Haddou Kasbah and Ouarzazate, Morocco's legendary film-making capital.",
    "aboutHtml": "One Day Trip from Marrakech to Ouarzazate and the Ait Ben Haddou Kasbah<br/><br/>This day trip from Marrakech to Ouarzazate is one of the most popular ones among tourists in Morocco, since it includes a visit the famous Ait Ben Haddou Kasbah.<br/><br/>Our one day tour begins by leaving Marrakech and going on a road trip through the High Atlas Mountains, before getting to our first destination: the city of Ouarzazate. Ouarzazate, also called “The Hollywood of Morocco”, is home to Morocco’s largest film studios, which helped produce some important international movies.<br/><br/>Not far from the city of Ouarzazate is located one of Morocco’s most important historical monuments: the Kasbah of Ait Ben Haddou. This Kasbah holds great value in filmmaking history, since it is backdrop where many historical movies were made, such as Gladiator, Lawrence of Arabia and Kingdom of Heaven. The Ait Ben Haddou Kasbah is also a UNESCO world heritage site.<br/><br/>Finally, we will pay a short visit to the nearby Taourirt Kasbah, before heading back to Marrakech in the evening.",
    "category": "day-trips",
    "duration": "1 Day / Full Day Trip",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $75/person",
    "heroImage": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/thumbnail.jpg",
    "highlights": [
      "High Atlas Mountains: A scenic drive through the mountains with stunning views.",
      "Ouarzazate: Visit Morocco’s “Hollywood,” home to the largest film studios in the country.",
      "Ait Ben Haddou Kasbah: Explore the UNESCO World Heritage Site, a historical marvel and iconic film location.",
      "Taourirt Kasbah: A short visit to this nearby kasbah, rich in history and architecture."
    ],
    "inclusions": [
      "Scenic drive across the High Atlas Mountains via Tizi n'Tichka pass",
      "Guided visit to the UNESCO World Heritage Kasbah Ait Ben Haddou",
      "Stop at Ouarzazate (Hollywood of Africa) and Taourirt Kasbah",
      "English-speaking driver and guide"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – High Atlas Mountains – Ouarzazate – Ait Ben Haddou Kasbah – Taourirt Kasbah – Film Studios",
        "content": "Drive through the High Atlas Mountains Your journey begins with a scenic drive through the High Atlas Mountains, where you’ll pass through winding roads and traditional Berber villages, enjoying stunning views of the rugged terrain. Arrival in Ouarzazate Your first destination is Ouarzazate, known as the “Hollywood of Morocco” due to its film studios where many famous movies were shot. You’ll visit these studios and learn about their role in the film industry. Ait Ben Haddou Kasbah Next, you’ll explore the UNESCO World Heritage site of Ait Ben Haddou, a stunning example of traditional Moroccan architecture. This kasbah has served as the backdrop for many blockbuster films, including Gladiator and Lawrence of Arabia. Lunch at a Local Restaurant Enjoy a traditional Moroccan lunch in a restaurant near Ait Ben Haddou, where you’ll savor local specialties while taking in the historical surroundings. Visit to Taourirt Kasbah After lunch, you’ll visit the nearby Taourirt Kasbah, another impressive structure with historical significance. The kasbah was once the residence of a powerful local leader, and its intricate design is a must-see. Return to Marrakech As the day winds down, you’ll head back to Marrakech, arriving in the evening after a day filled with history and cinematic wonder."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Morning",
        "subtitle": "Departure",
        "desc": "Pick up and journey towards High Atlas.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Tizi n'Tichka",
        "day": "Mid-way",
        "subtitle": "High Atlas Pass (2,260m)",
        "desc": "Panoramic viewpoints overlooking winding mountain roads.",
        "coords": [
          31.2847,
          -7.3811
        ]
      },
      {
        "number": 3,
        "name": "Kasbah Ait Benhaddou",
        "day": "Lunch",
        "subtitle": "UNESCO World Heritage Fortress",
        "desc": "Climb through the ancient earthen ksar filmed in Gladiator.",
        "coords": [
          31.047,
          -7.1317
        ]
      },
      {
        "number": 4,
        "name": "Ouarzazate Film Studios",
        "day": "Afternoon",
        "subtitle": "Hollywood of Africa",
        "desc": "Atlas Film Studios and Kasbah Taourirt.",
        "coords": [
          30.9335,
          -6.937
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.47,
        -7.52
      ],
      [
        31.2847,
        -7.3811
      ],
      [
        31.047,
        -7.1317
      ],
      [
        30.9335,
        -6.937
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/thumbnail.jpg",
        "cap": "One Day Trip From Marrakech To Ouarzazate And The Ait Ben Haddou Kasbah"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-01.jpg",
        "cap": "One Day Trip From Marrakech To Ouarzazate And The Ait Ben Haddou Kasbah"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-02.jpg",
        "cap": "One Day Trip From Marrakech To Ouarzazate And The Ait Ben Haddou Kasbah"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-/images/image-03.jpg",
        "cap": "One Day Trip From Marrakech To Ouarzazate And The Ait Ben Haddou Kasbah"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Tizi n'Tichka",
      "Kasbah Ait Benhaddou",
      "Ouarzazate Film Studios"
    ],
    "relatedTours": [],
    "productType": "day-trip",
    "themes": [
      "excursions",
      "day-trips"
    ]
  },
  {
    "slug": "day-trip-ouzoud-waterfalls",
    "title": "Ouzoud Waterfalls Day Trip from Marrakech | Sahara Star",
    "shortTitle": "Ouzoud Waterfalls Day Trip from Marrakech",
    "description": "Day trip from Marrakech to the spectacular 110-meter Ouzoud Waterfalls in the Middle Atlas. Enjoy scenic river walks, wild Barbary macaque monkeys, and boat rides.",
    "aboutHtml": "One Day Trip from Marrakech to the Ouzoud Waterfalls and Berber Villages<br/><br/>This day trip from Marrakech to the Ouzoud waterfalls and Atlas Mountains is a fantastic way to discover the area and learn more about Morocco’s natural resources, without having to get too far away from Marrakech.<br/><br/>The tour will begin at around 8 in the morning, when we leave Marrakech in the direction of the Haouz region. Of course, you will be guided through this tour by an English speaking driver to facilitate communication with the locals. This exciting road trip is going to take us through many small Berber villages, where you can feel the simple and relaxed lifestyle of the locals. Through the Middle Atlas Mountains, we will finally get to our destination: the Ouzoud waterfalls.<br/><br/>Hiking through the surrounding area to the waterfall is a magical experience, since it allows you to witness up close the greatness of the 110 meters tall waterfalls. We might also see some wild Macaque monkeys since they inhabit the area. If you feel like it, you can totally go for a swim at the river, which is clean but cold (perfect for a hot summer day)!<br/><br/>We will have a traditional lunch at one of the restaurants in place run by Berber locals, then continue relaxing and enjoying our time at the waterfall before finally returning to Marrakech",
    "category": "day-trips",
    "duration": "1 Day / Full Day Trip",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $60/person",
    "heroImage": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/thumbnail.jpg",
    "highlights": [
      "Scenic Road Trip: Enjoy picturesque views of Berber villages and the Middle Atlas Mountains.",
      "Ouzoud Waterfalls: Experience the majesty of Morocco’s tallest waterfalls (110 meters).",
      "Wildlife: Spot wild Macaque monkeys in their natural habitat.",
      "Hiking: Take a scenic hike around the falls, offering breathtaking views.",
      "Swimming: Refresh yourself in the river at the base of the waterfalls.",
      "Traditional Berber Lunch: Savor a delicious meal prepared by locals at a nearby restaurant."
    ],
    "inclusions": [
      "Transportation in an air-conditioned vehicle",
      "Scenic drive through Berber villages and olive groves",
      "Guided hike down to the spectacular Ouzoud Waterfalls",
      "Opportunity to see wild Barbary macaque monkeys"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – Berber Villages – Middle Atlas Mountains – Ouzoud Waterfalls – Hiking and Wildlife – Traditional Berber Lunch",
        "content": "Drive through the Atlas Mountains Your day begins with a scenic drive from Marrakech through the Middle Atlas Mountains. Along the way, you’ll pass through small Berber villages and witness the rugged beauty of the region. Arrival at Ouzoud Waterfalls Upon arrival at the Ouzoud Waterfalls, you’ll embark on a guided hike that takes you through beautiful landscapes and offers several vantage points to admire the towering 110-meter waterfalls. You may even spot wild macaque monkeys along the trail. Hiking and Wildlife Observation The hike allows you to get up close to the waterfalls and take in the surrounding nature. You’ll enjoy the sound of rushing water, the sight of rainbows forming in the mist, and the chance to observe local wildlife, including birds and monkeys. Lunch at a Berber Restaurant After your hike, you’ll have lunch at a local restaurant run by Berber villagers. The menu typically includes traditional Moroccan dishes such as tajine, fresh bread, and mint tea, enjoyed while overlooking the waterfalls. Free Time for Swimming or Relaxing Following lunch, you’ll have free time to relax, swim in the river below the falls, or continue exploring the area at your leisure. The refreshing water is perfect for a dip, especially during the summer. Return to Marrakech In the late afternoon, you’ll depart from Ouzoud and begin the scenic drive back to Marrakech, reflecting on the natural beauty you experienced throughout the day."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Morning",
        "subtitle": "Departure",
        "desc": "Scenic morning drive through Tadla plains.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Middle Atlas Foothills",
        "day": "Mid-way",
        "subtitle": "Berber Villages",
        "desc": "Rolling olive groves and traditional mudbrick villages.",
        "coords": [
          31.85,
          -7.2
        ]
      },
      {
        "number": 3,
        "name": "Ouzoud Waterfalls",
        "day": "Afternoon",
        "subtitle": "110m Cascades & Barbary Apes",
        "desc": "Hiking down to the natural pools, boat ride under the falls, and wild monkeys.",
        "coords": [
          32.015,
          -6.719
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.85,
        -7.2
      ],
      [
        32,
        -6.8
      ],
      [
        32.015,
        -6.719
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/thumbnail.jpg",
        "cap": "One Day Trip From Marrakech To The Ouzoud Waterfalls And Berber Villages"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-01.jpg",
        "cap": "One Day Trip From Marrakech To The Ouzoud Waterfalls And Berber Villages"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-02.webp",
        "cap": "One Day Trip From Marrakech To The Ouzoud Waterfalls And Berber Villages"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-/images/image-03.jpeg",
        "cap": "One Day Trip From Marrakech To The Ouzoud Waterfalls And Berber Villages"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Middle Atlas Foothills",
      "Ouzoud Waterfalls"
    ],
    "relatedTours": [],
    "productType": "day-trip",
    "themes": [
      "excursions",
      "day-trips"
    ]
  },
  {
    "slug": "one-day-marrakech-city-tour",
    "title": "Marrakech City Guided Day Tour | Sahara Star Tours",
    "shortTitle": "Marrakech City Guided Day Tour",
    "description": "Discover the heart of the Red City with a licensed local guide. Visit Bahia Palace, Koutoubia Mosque, Saadian Tombs, and the bustling Jemaa el-Fnaa medina.",
    "aboutHtml": "This exciting day tour is going to take us through Marrakech’s most important attractions and monuments. With the help of an experienced local guide, we will uncover all of this red city’s secret gems.<br/><br/>After we pick you up in the morning, we will start by discovering the Majorelle botanical garden and its founder Jacques Majorelle. After his death, the famous designer Yves Saint Laurent purchased the garden and opened it to the public. The Majorelle garden is the result of Jacques Majorelle’s life-long work, containing both exotic and native species of plants and flowers all over it. While we’re here, we can also visit the Berber museum located inside the property. Then, we will head to the Old Medina to have lunch at one of the traditional restaurants.<br/><br/>After lunch, we will continue our tour by visiting the famous Bahia palace, with its intricate designs and traditional architecture. Next on our schedule is the Jewish quarter, which has a special vibe on its own; and the Saadian Tombs, which are a remnant of the 15th century during the reign of the Sultan Ahmed El Mansour.<br/><br/>Finally, we will end our tour by a visit to the famous Jamaa El Fna square, where the heritage and different arts of Morocco are showcased.",
    "category": "day-trips",
    "duration": "1 Day / Full Day Trip",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $55/person",
    "heroImage": "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/thumbnail.jpg",
    "highlights": [
      "Majorelle Garden: Visit the stunning botanical garden created by Jacques Majorelle, later restored by Yves Saint Laurent.",
      "Berber Museum: Discover the rich history and culture of Morocco’s Berber people.",
      "Old Medina: Enjoy a traditional Moroccan lunch in the bustling heart of Marrakech.",
      "Bahia Palace: Admire the beautiful architecture and intricate designs of this historic palace.",
      "Jewish Quarter (Mellah): Experience the unique atmosphere of the Mellah district.",
      "Saadian Tombs: Explore the royal tombs from the 15th century.",
      "Jamaa El Fna Square: End your tour in the lively square, full of local artists, vendors, and street performers."
    ],
    "inclusions": [
      "Certified local Marrakech city guide",
      "Visit to Bahia Palace, Saadian Tombs, and Koutoubia Mosque",
      "Guided walking tour through the Medina and vibrant souks",
      "Time for shopping and photography in Jemaa el-Fnaa square"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – Majorelle Garden – Old Medina – Bahia Palace – Jewish Quarter – Saadian Tombs – Jamaa El Fna Square",
        "content": "Majorelle Garden Your tour begins with a visit to the renowned Majorelle Garden, designed by French artist Jacques Majorelle. You’ll explore the lush greenery, exotic plants, and vibrant blue buildings that make this garden a true oasis. The garden is also home to the Berber Museum, where you can discover the rich heritage of Morocco’s Berber culture. Berber Museum After strolling through the garden, you’ll visit the Berber Museum located within the property. Here, you’ll delve deeper into the fascinating traditions and artifacts of the Berber people, Morocco’s indigenous inhabitants. Old Medina and Traditional Lunch Next, your guide will lead you into the heart of Marrakech’s Old Medina, a vibrant hub of traditional markets and narrow alleyways. After exploring the medina, you will stop for lunch at a local restaurant where you can indulge in authentic Moroccan cuisine, including tajines, couscous, and fresh salads. Bahia Palace After lunch, you will head to the majestic Bahia Palace, known for its beautiful courtyards, colorful tiles, and intricate wood carvings. This 19th-century palace offers a glimpse into the grandeur of Moroccan royalty. Jewish Quarter (Mellah) Following your visit to Bahia Palace, you will explore the Jewish Quarter, or Mellah, known for its unique charm and historical significance. You’ll learn about the Jewish community’s role in Marrakech’s history and visit local synagogues and markets. Saadian Tombs Your next stop will be the Saadian Tombs, which date back to the 15th century and showcase the architectural mastery of the Saadian dynasty. These tombs are an essential piece of Marrakech’s cultural history, housing the remains of royalty. Jamaa El Fna Square The tour concludes at the famous Jamaa El Fna Square, a lively cultural hub where you’ll witness street performances, musicians, storytellers, and food vendors showcasing Moroccan arts and heritage. This bustling square is the heart of Marrakech’s vibrant atmosphere. Return to Hotel After a full day of exploring Marrakech’s most iconic sites, you will be driven back to your hotel, concluding your unforgettable day in the Red City."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Koutoubia Mosque",
        "day": "Morning",
        "subtitle": "12th Century Minaret",
        "desc": "Iconic landmark and Andalusian gardens.",
        "coords": [
          31.6247,
          -7.9936
        ]
      },
      {
        "number": 2,
        "name": "Bahia Palace",
        "day": "Morning",
        "subtitle": "Grand Vizier Residence",
        "desc": "Intricate zellij tilework, painted cedarwood ceilings.",
        "coords": [
          31.6217,
          -7.983
        ]
      },
      {
        "number": 3,
        "name": "Saadian Tombs",
        "day": "Noon",
        "subtitle": "Mausoleum of the Dynasty",
        "desc": "Chamber of the Twelve Pillars in Carrara marble.",
        "coords": [
          31.6173,
          -7.9889
        ]
      },
      {
        "number": 4,
        "name": "Ben Youssef Medersa",
        "day": "Afternoon",
        "subtitle": "Islamic College",
        "desc": "Courtyard with stucco and cedar calligraphy.",
        "coords": [
          31.6322,
          -7.9866
        ]
      },
      {
        "number": 5,
        "name": "Jemaa El-Fna",
        "day": "Evening",
        "subtitle": "UNESCO Square",
        "desc": "Storytellers, musicians, and vibrant night food stalls.",
        "coords": [
          31.6258,
          -7.9891
        ]
      },
      {
        "number": 6,
        "name": "Majorelle Garden",
        "day": "Late Afternoon",
        "subtitle": "Yves Saint Laurent Botanical Oasis",
        "desc": "Cobalt blue villa and exotic desert cacti.",
        "coords": [
          31.6416,
          -8.0033
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6247,
        -7.9936
      ],
      [
        31.6217,
        -7.983
      ],
      [
        31.6173,
        -7.9889
      ],
      [
        31.6258,
        -7.9891
      ],
      [
        31.6322,
        -7.9866
      ],
      [
        31.6416,
        -8.0033
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/thumbnail.jpg",
        "cap": "One Day Guided Tour Of Marrakech City"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-01.jpg",
        "cap": "One Day Guided Tour Of Marrakech City"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-02.jpg",
        "cap": "One Day Guided Tour Of Marrakech City"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-03.jpg",
        "cap": "One Day Guided Tour Of Marrakech City"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-04.jpeg",
        "cap": "One Day Guided Tour Of Marrakech City"
      },
      {
        "src": "/sahara-star-tours/day-trips/one-day-guided-tour-of-marrakech-city/images/image-05.jpeg",
        "cap": "One Day Guided Tour Of Marrakech City"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Koutoubia Mosque",
      "Bahia Palace",
      "Saadian Tombs",
      "Ben Youssef Medersa",
      "Jemaa El-Fna",
      "Majorelle Garden"
    ],
    "relatedTours": [],
    "productType": "day-trip",
    "themes": [
      "excursions",
      "day-trips"
    ]
  },
  {
    "slug": "ourika-valley-nature-tour",
    "title": "Ourika Valley Nature & Atlas Tour | Sahara Star Tours",
    "shortTitle": "Ourika Valley Nature & Wildlife Tour",
    "description": "Escape the heat of Marrakech on a scenic day tour to Ourika Valley. Hike to Setti Fatma waterfalls, visit Berber villages, and admire High Atlas vistas.",
    "aboutHtml": "Discover the natural beauty and diverse wildlife of the Ourika Valley on this day trip from Marrakech. Explore the Setti Fatma waterfalls, visit a traditional Berber house, and enjoy a riverside lunch. This program is ideal for nature lovers and those wishing to discover local Berber culture.",
    "category": "day-trips",
    "duration": "1 Day / Full Day Trip",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $50/person",
    "heroImage": "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/thumbnail.jpg",
    "highlights": [
      "Setti Fatma: Visit the traditional Berber village and discover its way of life.",
      "Setti Fatma waterfalls: Hike to the picturesque waterfalls with swimming opportunities.",
      "Berber House: Explore a traditional Berber house with mint tea tasting.",
      "Traditional lunch: Enjoy a Moroccan meal on the banks of the Ourika River.",
      "Argan cooperative: Visit a local cooperative to learn about the argan oil production process.",
      "Jardin Bio-Aromatique de l’Ourika: Guided walk through the botanical gardens with explanations of medicinal plants.",
      "Wildlife watching: Explore a nature reserve to observe Atlas monkeys and other native animals."
    ],
    "inclusions": [
      "Pick-up and drop-off at your Marrakech accommodation",
      "Drive through the lush Ourika Valley along the river",
      "Guided hike to the seven waterfalls of Setti Fatma",
      "Visit to a traditional Berber home and Argan cooperative"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – Berber Villages – High Atlas Mountains – Kasbah Ait Ben Haddou – Roses Valley – Dades Gorge :",
        "content": "Setti Fatma village: The first stop on your tour is the picturesque village of Setti Fatma, located in the Ourika valley. This authentic Berber village is famous for its seven waterfalls and hiking trails. You’ll have the opportunity to visit a traditional Berber house, where you’ll learn about the local way of life and taste mint tea. Hike to the Cascades : Next, you’ll embark on a moderate hike to the Setti Fatma waterfalls. This trail takes you through breathtaking scenery, with natural pools where you can cool off. The hike also offers the chance to observe local wildlife and enjoy the tranquility of nature. Lunch by the river: After the hike, you’ll enjoy a traditional Moroccan lunch at a local restaurant on the banks of the Ourika River. The typical menu includes dishes such as tajine, couscous, Moroccan salads and fresh fruit, all accompanied by mint tea. Visit to an Argan cooperative: In the afternoon, you’ll visit an argan cooperative where you’ll learn about the process of making argan oil, often dubbed Morocco’s liquid gold. You’ll also have the opportunity to taste and buy handcrafted argan products. Jardin Bio-Aromatique de l’Ourika: Your next stop is the Jardin Bio-Aromatique de l’Ourika, an area dedicated to the cultivation of medicinal and aromatic plants. A guided walk will enable you to learn more about the various plants and their use in traditional medicine. Wildlife observation: To round off the day, you’ll explore a nature reserve in the valley, where you can observe local wildlife, including Atlas monkeys and a variety of birds. A specialist guide will provide detailed information on the species and ecosystems of the region. Return to Marrakech: In the late afternoon, you’ll head back to Marrakech with unforgettable memories of a day rich in natural and cultural discoveries."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Morning",
        "subtitle": "Departure",
        "desc": "Drive along the lush Ourika river valley.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Berber Village",
        "day": "Mid-way",
        "subtitle": "Traditional Family Home",
        "desc": "Tea ceremony and local mountain lifestyle.",
        "coords": [
          31.35,
          -7.75
        ]
      },
      {
        "number": 3,
        "name": "Setti Fatma Waterfalls",
        "day": "Afternoon",
        "subtitle": "7 Cascades Hike",
        "desc": "Guided hike along mountain boulders and riverfront lunch.",
        "coords": [
          31.218,
          -7.674
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.45,
        -7.85
      ],
      [
        31.35,
        -7.75
      ],
      [
        31.218,
        -7.674
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/thumbnail.jpg",
        "cap": "Ourika Valley Nature & Wildlife Tour"
      },
      {
        "src": "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-01.jpg",
        "cap": "Ourika Valley Nature & Wildlife Tour"
      },
      {
        "src": "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-02.jpg",
        "cap": "Ourika Valley Nature & Wildlife Tour"
      },
      {
        "src": "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-03.jpg",
        "cap": "Ourika Valley Nature & Wildlife Tour"
      },
      {
        "src": "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-04.jpg",
        "cap": "Ourika Valley Nature & Wildlife Tour"
      },
      {
        "src": "/sahara-star-tours/day-trips/ourika-valley-nature-wildlife-tour/images/image-05.jpg",
        "cap": "Ourika Valley Nature & Wildlife Tour"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Berber Village",
      "Setti Fatma Waterfalls"
    ],
    "relatedTours": [],
    "productType": "day-trip",
    "themes": [
      "excursions",
      "day-trips"
    ]
  },
  {
    "slug": "hot-air-balloon-marrakech",
    "title": "Marrakech Hot Air Balloon Flight | Sahara Star Tours",
    "shortTitle": "Marrakech Hot Air Balloon Flight",
    "description": "Soar over the Marrakech palmeraie and High Atlas Mountains at sunrise in a hot air balloon. Includes private hotel transfers and traditional Berber breakfast.",
    "aboutHtml": "<strong>Desert Equestrian Escapades</strong><br/><br/>Dive into the serene beauty of the desert with an array of horseback riding experiences designed to captivate your senses and immerse you in the magic of Morocco’s landscapes.<br/><br/><strong>Enchanting Desert Rides</strong><br/><br/>Whether you’re seeking a brief escape for an hour or two, our Little Desert Ride offers a unique and easy way to explore the tranquil beauty of the desert. For those looking to experience the desert’s magic in a more dramatic light, our Sun Ride welcomes you to witness the awe-inspiring moments of sunrise or sunset. These magical times provide unparalleled views of the natural scenery, casting a spellbinding glow over the heart of the sand dunes.<br/><br/><strong>Cultural Journey to Gnawa Village</strong><br/><br/>Embark on a half-day tour that combines the thrill of horse riding with a cultural immersion into the heritage of a Gnawa village. This journey not only lets you enjoy the rhythmic melodies and historical significance of Gnaoua music but also includes a cultural picnic, enriching your experience with every beat and bite.<br/><br/><strong>Adventurous Day Tour to Desert Camp</strong><br/><br/>Set off on a beautiful day trip that traverses the dunes on horseback, leading to a serene layover and lunch at a traditional desert camp. This oasis amidst the vast desert landscape offers a picturesque setting that feels like a mirage come to life, providing a peaceful retreat from the world.<br/><br/><strong>Traditional Dress Riding Experience</strong><br/><br/>Enhance your desert adventure by donning traditional Moroccan attire for your horseback ride. This unique opportunity allows lovers of diverse Moroccan culture to fully embrace and celebrate its rich traditions. Capture this memorable experience through videos and pictures, taking a piece of Moroccan beauty with you.<br/><br/>Each of these experiences is designed to offer a different perspective of Morocco’s stunning desert landscapes, from the quiet beauty of a morning ride to the cultural richness of a Gnawa music session. Whether you’re a lover of nature, culture, or adventure, these equestrian escapades through the desert promise moments of beauty, tranquility, and unforgettable memories.",
    "category": "activities",
    "duration": "Half Day / 3-4 Hours",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $190/person",
    "heroImage": "/sahara-star-tours/activities/hot-air-balloon-in-marrakech/images/thumbnail.jpg",
    "highlights": [
      "Early Morning Pickup: Convenient pick-up from your accommodation in Marrakech at 5:00 AM.",
      "Scenic Flight: Approximately 45 minutes of flying time with panoramic views of the Atlas Mountains and the picturesque Moroccan countryside.",
      "Post-Flight Breakfast: Enjoy a delicious breakfast after your landing, making the experience even more delightful.",
      "Unforgettable Memories: Capture stunning photographs and create lasting memories as you float above the breathtaking scenery."
    ],
    "inclusions": [
      "Early morning 4x4 transfers from your hotel",
      "45 to 60-minute hot air balloon flight over the Atlas foothills",
      "Authentic Berber breakfast in a traditional tent",
      "Official flight certificate signed by the pilot"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Hot Air Balloon in Marrakech",
        "content": "5:00 AM: Depart from your accommodation in a comfortable 4×4 vehicle. 5:45 AM: Arrive at the launch site where the balloons are prepared for takeoff. Flight Experience: Soar for approximately 45 minutes, taking in the stunning views. Return Journey: After landing, relax with a post-flight breakfast and then transport back to your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Start",
        "subtitle": "Hotel Pick-up",
        "desc": "Private transfer from your Marrakech accommodation.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Marrakech Palmeraie Oasis",
        "day": "Activity",
        "subtitle": "Palm Grove & Trails",
        "desc": "Scenic palm oasis trails with Atlas Mountain backdrop.",
        "coords": [
          31.666,
          -7.975
        ]
      },
      {
        "number": 3,
        "name": "Berber Oasis Camp",
        "day": "Tea Break",
        "subtitle": "Hospitality & Mint Tea",
        "desc": "Relax with fresh Moroccan mint tea and traditional pastries.",
        "coords": [
          31.68,
          -7.96
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.645,
        -7.98
      ],
      [
        31.666,
        -7.975
      ],
      [
        31.68,
        -7.96
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/activities/hot-air-balloon-in-marrakech/images/thumbnail.jpg",
        "cap": "Hot Air Balloon In Marrakech"
      }
    ],
    "featured": true,
    "badge": "POPULAR",
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Marrakech Palmeraie Oasis",
      "Berber Oasis Camp"
    ],
    "relatedTours": [],
    "productType": "activity",
    "themes": [
      "activities",
      "outdoor-adventures"
    ]
  },
  {
    "slug": "horse-riding-morocco",
    "title": "Marrakech Horseback Riding Experience | Sahara Star Tours",
    "shortTitle": "Marrakech Horseback Riding Experience",
    "description": "Ride spirited Arabian horses through the Marrakech palm groves and desert trails. Suitable for all riding levels with experienced equestrian guides.",
    "aboutHtml": "<strong>Desert Equestrian Escapades</strong><br/><br/>Dive into the serene beauty of the desert with an array of horseback riding experiences designed to captivate your senses and immerse you in the magic of Morocco’s landscapes.<br/><br/><strong>Enchanting Desert Rides</strong><br/><br/>Whether you’re seeking a brief escape for an hour or two, our Little Desert Ride offers a unique and easy way to explore the tranquil beauty of the desert. For those looking to experience the desert’s magic in a more dramatic light, our Sun Ride welcomes you to witness the awe-inspiring moments of sunrise or sunset. These magical times provide unparalleled views of the natural scenery, casting a spellbinding glow over the heart of the sand dunes.<br/><br/><strong>Cultural Journey to Gnawa Village</strong><br/><br/>Embark on a half-day tour that combines the thrill of horse riding with a cultural immersion into the heritage of a Gnawa village. This journey not only lets you enjoy the rhythmic melodies and historical significance of Gnaoua music but also includes a cultural picnic, enriching your experience with every beat and bite.<br/><br/><strong>Adventurous Day Tour to Desert Camp</strong><br/><br/>Set off on a beautiful day trip that traverses the dunes on horseback, leading to a serene layover and lunch at a traditional desert camp. This oasis amidst the vast desert landscape offers a picturesque setting that feels like a mirage come to life, providing a peaceful retreat from the world.<br/><br/><strong>Traditional Dress Riding Experience</strong><br/><br/>Enhance your desert adventure by donning traditional Moroccan attire for your horseback ride. This unique opportunity allows lovers of diverse Moroccan culture to fully embrace and celebrate its rich traditions. Capture this memorable experience through videos and pictures, taking a piece of Moroccan beauty with you.<br/><br/>Each of these experiences is designed to offer a different perspective of Morocco’s stunning desert landscapes, from the quiet beauty of a morning ride to the cultural richness of a Gnawa music session. Whether you’re a lover of nature, culture, or adventure, these equestrian escapades through the desert promise moments of beauty, tranquility, and unforgettable memories.",
    "category": "activities",
    "duration": "Half Day / 3-4 Hours",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $65/person",
    "heroImage": "/sahara-star-tours/activities/horse-riding-in-morocco/images/thumbnail.jpg",
    "highlights": [
      "Enchanting Desert Rides: Choose between a brief escape or a dramatic sunrise/sunset ride to enjoy stunning views of the sand dunes.",
      "Cultural Journey to Gnawa Village: Combine horseback riding with a cultural experience, enjoying Gnaoua music and a delightful picnic.",
      "Adventurous Day Tour to Desert Camp: Ride through the dunes to a traditional desert camp for a scenic lunch in a tranquil oasis.",
      "Traditional Dress Riding Experience: Wear traditional Moroccan attire during your ride, creating unforgettable memories and photo opportunities."
    ],
    "inclusions": [
      "Hotel pickup and drop-off in an AC vehicle",
      "High-quality saddlery and safety helmets",
      "2 hours guided horseback riding experience",
      "Professional equestrian guide"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Horse Riding in Morocco",
        "content": "Departure: Pickup from your accommodation in Marrakech. Arrival: Travel to the riding location in the desert. Horse Riding Experience: Enjoy your chosen ride (Little Desert Ride, Sun Ride, or cultural journey). Cultural Picnic: Savor local flavors and music during your ride to the Gnawa village. Return: Transport back to your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Start",
        "subtitle": "Hotel Pick-up",
        "desc": "Private transfer from your Marrakech accommodation.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Marrakech Palmeraie Oasis",
        "day": "Activity",
        "subtitle": "Palm Grove & Trails",
        "desc": "Scenic palm oasis trails with Atlas Mountain backdrop.",
        "coords": [
          31.666,
          -7.975
        ]
      },
      {
        "number": 3,
        "name": "Berber Oasis Camp",
        "day": "Tea Break",
        "subtitle": "Hospitality & Mint Tea",
        "desc": "Relax with fresh Moroccan mint tea and traditional pastries.",
        "coords": [
          31.68,
          -7.96
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.645,
        -7.98
      ],
      [
        31.666,
        -7.975
      ],
      [
        31.68,
        -7.96
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/activities/horse-riding-in-morocco/images/thumbnail.jpg",
        "cap": "Horse Riding In Morocco"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Marrakech Palmeraie Oasis",
      "Berber Oasis Camp"
    ],
    "relatedTours": [],
    "productType": "activity",
    "themes": [
      "activities",
      "outdoor-adventures"
    ]
  },
  {
    "slug": "fantasia-chez-ali-marrakech",
    "title": "Fantasia Chez Ali Dinner & Show | Sahara Star Tours",
    "shortTitle": "Fantasia Chez Ali Dinner & Show Marrakech",
    "description": "Experience an enchanting Arabian Nights evening in Marrakech. Enjoy a multi-course Moroccan feast, folklore dancers, acrobats, and a thrilling cavalry show.",
    "aboutHtml": "Half-Day Moroccan Cultural Experience<br/><br/>Discover the enchanting world of Fantasia Chez Ali, a celebrated Marrakech event that offers a deep dive into Moroccan culture, showcasing traditions unlike anything you might find back home. Prepare to be captivated by the vibrant performances of folk groups, indulge in a sumptuous dinner, and immerse yourself in the unique sights and sounds of this spectacular venue.<br/><br/>Set in a vast arena reminiscent of a football stadium, the event features a dazzling array of performances. You’ll witness professional acrobatic horse riders, partake in the excitement of the fantasia—a traditional Moroccan equestrian performance—, and enjoy beautiful traditional songs and dances, all set to mesmerizing music that transports you to another world.<br/><br/>The Chez Ali show is an amalgamation of magic, beauty, and grandeur, offering a delightful and fairy-tale-like experience. Over the years, its fame has reached international shores, marking it as a highlight of any trip to Marrakech. Dancers, musicians, acrobats, horsemen, and magicians pour their passion into their performances, ensuring your evening at Chez Ali is unforgettable.<br/><br/>As the night concludes, your driver will ensure a smooth return to your accommodation in Marrakech, be it a hotel or a riad, capping off a truly magical Moroccan cultural experience.",
    "category": "activities",
    "duration": "Half Day / 3-4 Hours",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $70/person",
    "heroImage": "/sahara-star-tours/activities/fantasia-chez-ali-marrakech/images/thumbnail.jpg",
    "highlights": [
      "Traditional Moroccan dinner",
      "Fantasia equestrian performance with acrobats and horsemen",
      "Enjoy Moroccan music, songs, and folk dances"
    ],
    "inclusions": [
      "Round-trip transportation from your Marrakech hotel",
      "Lavish traditional Moroccan dinner (Mechoui, Couscous, Pastilla)",
      "Spectacular Fantasia show with horseback acrobatics",
      "Live traditional music and belly dancing performances"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fantasia Chez Ali Marrakech",
        "content": "Pick-up: A driver will collect you from your accommodation and take you to Chez Ali. Fantasia Show: A half-day cultural experience where you will enjoy a traditional Moroccan dinner while watching the Fantasia show, featuring acrobatic horse riders, musicians, and dancers. Return: After the show, you’ll be transported back to your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Start",
        "subtitle": "Hotel Pick-up",
        "desc": "Private transfer from your Marrakech accommodation.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Marrakech Palmeraie Oasis",
        "day": "Activity",
        "subtitle": "Palm Grove & Trails",
        "desc": "Scenic palm oasis trails with Atlas Mountain backdrop.",
        "coords": [
          31.666,
          -7.975
        ]
      },
      {
        "number": 3,
        "name": "Berber Oasis Camp",
        "day": "Tea Break",
        "subtitle": "Hospitality & Mint Tea",
        "desc": "Relax with fresh Moroccan mint tea and traditional pastries.",
        "coords": [
          31.68,
          -7.96
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.645,
        -7.98
      ],
      [
        31.666,
        -7.975
      ],
      [
        31.68,
        -7.96
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/activities/fantasia-chez-ali-marrakech/images/thumbnail.jpg",
        "cap": "Fantasia Chez Ali Marrakech"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Marrakech Palmeraie Oasis",
      "Berber Oasis Camp"
    ],
    "relatedTours": [],
    "productType": "activity",
    "themes": [
      "activities",
      "outdoor-adventures"
    ]
  },
  {
    "slug": "quad-biking-marrakech",
    "title": "Marrakech Quad Biking Desert Adventure | Sahara Star",
    "shortTitle": "Marrakech Quad Biking Desert Adventure",
    "description": "Exhilarating half-day quad biking safari across Marrakech rocky desert plains and palm groves. Professional safety equipment and mint tea stop included.",
    "aboutHtml": "Quad Biking Adventure in Marrakech<br/><br/>Pricing for this exhilarating half-day quad biking adventure is per person and adjusts based on the size of your group. This adventure offers an incredible opportunity to discover the hidden oasis of the Marrakech palm grove and the stunning scenery of the Palmeraie.<br/><br/>About the Activity<br/><br/>Suitable for beginners and seasoned quad bikers alike, this experience is tailored to match your skill level. Experienced riders will have the chance to venture off the beaten path and dive into more challenging terrains for an adrenaline-packed journey. Meanwhile, novices or those with families and young children will enjoy a gentler route designed to highlight the beauty of the landscape and ensure a pleasant ride for all.<br/><br/>Your adventure begins with a pickup from your Marrakech accommodation, transporting you to the Palmeraie. Upon arrival at our activity base in Marrakech, you’ll be equipped with a quad and helmets. Our guide will provide a brief tutorial on operating your vehicle before leading you on an unforgettable journey through Berber villages, mountainous terrain, and sand dunes, unveiling Marrakech’s lesser-seen vistas.<br/><br/>During this adventure, you’ll pause at a traditional Moroccan guest house to savor some mint tea, allowing you to soak in the natural beauty and tranquility that surrounds you. The journey concludes back at our Marrakech base, where your driver will be waiting to return you to your accommodation, marking the end of a memorable half-day activity.",
    "category": "activities",
    "duration": "Half Day / 3-4 Hours",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $60/person",
    "heroImage": "/sahara-star-tours/activities/quad-biking-in-marrakech/images/thumbnail.jpeg",
    "highlights": [
      "Explore the hidden oasis of the Marrakech Palm Grove",
      "Suitable for beginners and experienced riders",
      "Ride through Berber villages and sand dunes",
      "Stop for mint tea in a traditional Moroccan guest house"
    ],
    "inclusions": [
      "Hotel pickup and drop-off",
      "High-quality quad bike (ATV) and safety gear (helmet, goggles, gloves)",
      "2-hour guided quad biking adventure through palm groves and desert trails",
      "Mint tea break in a traditional Berber village"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Raid Buggy in Marrakech",
        "content": "Pick-up: You’ll be picked up from your accommodation and transported to the Palmeraie. Quad Biking: A half-day adventure that starts with a safety briefing and tutorial, followed by a thrilling ride through desert landscapes and Berber villages. Mint Tea Break: Pause to enjoy Moroccan mint tea at a guest house, taking in the scenic surroundings. Return: After your quad biking experience, you’ll be driven back to your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Start",
        "subtitle": "Hotel Pick-up",
        "desc": "Private transfer from your Marrakech accommodation.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Marrakech Palmeraie Oasis",
        "day": "Activity",
        "subtitle": "Palm Grove & Trails",
        "desc": "Scenic palm oasis trails with Atlas Mountain backdrop.",
        "coords": [
          31.666,
          -7.975
        ]
      },
      {
        "number": 3,
        "name": "Berber Oasis Camp",
        "day": "Tea Break",
        "subtitle": "Hospitality & Mint Tea",
        "desc": "Relax with fresh Moroccan mint tea and traditional pastries.",
        "coords": [
          31.68,
          -7.96
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.645,
        -7.98
      ],
      [
        31.666,
        -7.975
      ],
      [
        31.68,
        -7.96
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/activities/quad-biking-in-marrakech/images/thumbnail.jpeg",
        "cap": "Quad Biking In Marrakech"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Marrakech Palmeraie Oasis",
      "Berber Oasis Camp"
    ],
    "relatedTours": [],
    "productType": "activity",
    "themes": [
      "activities",
      "outdoor-adventures"
    ]
  },
  {
    "slug": "raid-buggy-marrakech",
    "title": "Marrakech Dune Buggy Desert Safari | Sahara Star Tours",
    "shortTitle": "Marrakech Dune Buggy Desert Safari",
    "description": "Drive high-powered off-road buggies through Marrakech desert trails, Berber villages, and palm oases. Guided adventure with top-tier safety gear.",
    "aboutHtml": "Half-Day Adventures in Marrakech<br/><br/>The cost of these adventures varies with the group size. If you’re venturing to Morocco for the first time, or revisiting the enchanting city of Marrakech, we have curated several itinerary options to ensure you fully experience what this trip has to offer! Elevate your Moroccan journey with a thrilling buggy ride in some truly spectacular locations. We’ll transport you to either the lush Marrakech palm groves or the captivating Agafay desert, close to Marrakech. Embrace the exhilaration of navigating a buggy across the desert terrain, and afterwards, relax with a warm cup of mint tea in an idyllic setting amidst palm trees, under a brilliant blue sky, with views of the Atlas Mountains. This day promises to be an unforgettable adventure filled with lasting memories.<br/><br/>Embarking on a buggy ride in Marrakech promises an extraordinary and thrilling adventure! We will arrange pickup directly from your accommodation in Marrakech. You have the option to explore either Agafay or the Marrakech palm groves. The journey to Agafay takes approximately 25 minutes, while reaching the Marrakech palm groves is about a 45-minute ride. This Marrakech tour includes safety equipment, tea, and transportation. It stands out as our most sought-after activity, where you embark on a two-hour exploration of the desert and palm groves. This experience also offers a glimpse into Moroccan culture, inviting you to a local family’s home to enjoy mint tea and experience renowned Moroccan hospitality. At the conclusion of this memorable buggy adventure, we will ensure your safe return to your accommodation in Marrakech.",
    "category": "activities",
    "duration": "Half Day / 3-4 Hours",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $110/person",
    "heroImage": "/sahara-star-tours/activities/raid-buggy-in-marrakech/images/thumbnail.jpg",
    "highlights": [
      "Exciting buggy ride through the Palmeraie or Agafay desert",
      "Enjoy mint tea in a traditional Moroccan house",
      "Visit local Berber villages",
      "Panoramic views of the Atlas Mountains"
    ],
    "inclusions": [
      "Round-trip hotel transfers",
      "Premium 4WD Buggy and full safety equipment",
      "Professional off-road guide and briefing",
      "Refreshments and mint tea with local villagers"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Raid Buggy in Marrakech",
        "content": "Pick-up: Your adventure begins with a pick-up from your accommodation in Marrakech. Buggy Ride: A thrilling two-hour exploration through desert landscapes or the lush Palm Grove, depending on your choice. Cultural Experience: Visit a local family’s home, where you will be served mint tea and learn more about Moroccan customs. Return to Marrakech: After a day of excitement, you’ll be safely returned to your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Start",
        "subtitle": "Hotel Pick-up",
        "desc": "Private transfer from your Marrakech accommodation.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Marrakech Palmeraie Oasis",
        "day": "Activity",
        "subtitle": "Palm Grove & Trails",
        "desc": "Scenic palm oasis trails with Atlas Mountain backdrop.",
        "coords": [
          31.666,
          -7.975
        ]
      },
      {
        "number": 3,
        "name": "Berber Oasis Camp",
        "day": "Tea Break",
        "subtitle": "Hospitality & Mint Tea",
        "desc": "Relax with fresh Moroccan mint tea and traditional pastries.",
        "coords": [
          31.68,
          -7.96
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.645,
        -7.98
      ],
      [
        31.666,
        -7.975
      ],
      [
        31.68,
        -7.96
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/activities/raid-buggy-in-marrakech/images/thumbnail.jpg",
        "cap": "Raid Buggy In Marrakech"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Marrakech Palmeraie Oasis",
      "Berber Oasis Camp"
    ],
    "relatedTours": [],
    "productType": "activity",
    "themes": [
      "activities",
      "outdoor-adventures"
    ]
  },
  {
    "slug": "camel-riding",
    "title": "Marrakech Palmeraie Camel Ride | Sahara Star Tours",
    "shortTitle": "Marrakech Palmeraie Camel Ride Experience",
    "description": "Classic 1-hour camel trek through the scenic Marrakech Palmeraie in traditional nomad dress. Conclude with fresh Moroccan mint tea in a Berber tent.",
    "aboutHtml": "<strong>Pricing and Details</strong><br/><br/>Starting at $35 per person, the cost adjusts with the group size. This adventure is available in the stunning Palmeraie of Marrakech at any time, offering half-day excursions with a pick-up at 9:00 am. This is a private tour, and we recommend wearing comfortable attire, shoes, a hat, a jacket, and sunscreen for your comfort. Payment is processed upon departure.<br/><br/><strong>Half-Day Camel Riding Experience in Marrakech</strong><br/><br/>Embarking on a camel ride through the Marrakech Palm Grove is an iconic and unforgettable experience during your visit to Morocco. Located to the north of Marrakech, the Palm Grove is an oasis featuring over 100,000 palm trees, providing a serene backdrop for a 1.5-hour camel trek. This journey offers an unparalleled opportunity to immerse yourself in the breathtaking landscapes and panoramic views of this exquisite region. The camel ride through this verdant oasis and its surrounding scenery is highly recommended for those looking to capture the essence of Marrakech in a truly unique way.",
    "category": "activities",
    "duration": "Half Day / 3-4 Hours",
    "durationDays": 1,
    "startingFrom": "Marrakech",
    "price": "From $35/person",
    "heroImage": "/sahara-star-tours/activities/camel-riding/images/thumbnail.jpg",
    "highlights": [
      "Ride through the iconic Palm Grove of Marrakech",
      "Experience Moroccan hospitality with mint tea",
      "Serene landscapes with panoramic views of over 100,000 palm trees",
      "Suitable for all ages, offering a cultural and natural immersion"
    ],
    "inclusions": [
      "Air-conditioned round-trip hotel transfers",
      "1 to 2 hours camel ride through the Palm Grove",
      "Traditional Touareg scarf and clothing for photos",
      "Moroccan mint tea break at a local Berber house"
    ],
    "exclusions": [
      "Personal expenses and souvenirs",
      "Gratuities for your guide and driver (optional)",
      "Extra meals and beverages not explicitly mentioned",
      "Entrance fees to monuments (if any)"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Camel Riding in Marrakech",
        "content": "Pick-up: You will be collected from your accommodation at 9:00 AM and transported to the stunning Palmeraie. Camel Ride Experience: A 1.5-hour camel trek through the lush Palm Grove. You will enjoy the serene beauty of this unique oasis, home to over 100,000 palm trees. The ride offers a chance to connect with nature, capture incredible photos, and soak in the tranquility. Mint Tea Stop: Pause to enjoy a refreshing cup of Moroccan mint tea at a local house, experiencing the warmth of Moroccan hospitality. Return to Marrakech: After your camel ride, your driver will take you back to your accommodation by early afternoon."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Start",
        "subtitle": "Hotel Pick-up",
        "desc": "Private transfer from your Marrakech accommodation.",
        "coords": [
          31.629472,
          -7.981084
        ]
      },
      {
        "number": 2,
        "name": "Marrakech Palmeraie Oasis",
        "day": "Activity",
        "subtitle": "Palm Grove & Trails",
        "desc": "Scenic palm oasis trails with Atlas Mountain backdrop.",
        "coords": [
          31.666,
          -7.975
        ]
      },
      {
        "number": 3,
        "name": "Berber Oasis Camp",
        "day": "Tea Break",
        "subtitle": "Hospitality & Mint Tea",
        "desc": "Relax with fresh Moroccan mint tea and traditional pastries.",
        "coords": [
          31.68,
          -7.96
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.629472,
        -7.981084
      ],
      [
        31.645,
        -7.98
      ],
      [
        31.666,
        -7.975
      ],
      [
        31.68,
        -7.96
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/activities/camel-riding/images/thumbnail.jpg",
        "cap": "Camel Riding"
      }
    ],
    "featured": false,
    "badge": null,
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Marrakech Palmeraie Oasis",
      "Berber Oasis Camp"
    ],
    "relatedTours": [],
    "productType": "activity",
    "themes": [
      "activities",
      "outdoor-adventures"
    ]
  },
  {
    "slug": "10-days-in-morocco-from-fes",
    "title": "10-Day Morocco Tour from Fes to Tangier | Sahara Star Tours",
    "shortTitle": "10-Day Morocco Tour from Fes to Tangier",
    "description": "Private 10-day Morocco tour from Fes to Tangier (or Fes, depending on your flight plans). Explore Merzouga, Fes. Local support and flexible planning.",
    "aboutHtml": "This private 10-day Morocco journey begins in Fes and finishes in Tangier (or Fes, depending on your flight plans). Along the route, you will experience Fes, Ifrane, Cedar Forest, Midelt, Ziz Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Fes",
    "destinations": [
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Rissani",
      "Erfoud"
    ],
    "relatedTours": [
      "3-day-sahara-desert-tour-from-fes",
      "4-day-morocco-itinerary-desert-tour-from-fes",
      "7-day-morocco-tour-itinerary-from-fes"
    ],
    "price": "From $1,250/person",
    "heroImage": "/sahara-star-tours/10-days-in-morocco-from-fes/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival to Fes",
        "content": "Your 10 Day Tour begins with a pickup from Fes Airport and a private transfer to your Riad. The rest of the day is free to relax"
      },
      {
        "day": "Day 2",
        "title": "Guided Tour sightseeing Fes",
        "content": "After breakfast, you will be exploring the Highlights of the city with a local guide. Fes is considered one of the imperial cities, as well as the cultural and religious center of Morocco. Meet up with the local guide, start the day by visiting the Royal Palace gate, next drive through the Jewish quarter also known as “the Mellah”. And continue to an ancient fortress for panoramic view of the medina and the city of Fes. Next enter the well preserved medieval medina, that is listed as a UNESCO World Heritage Site by the UNESCO. You will visit the Blue gate or Bab Boujloud, the entrance of the old medina. You will enter the medina with a local guide (walking tour),visiting The Medrasa Bouanania, the Najjarine fountain, the Tanneries. And finally the Quaraouin mosque and university, the oldest university in the world. In the afternoon, meet your driver in the afternoon and return to your Riad. Free Afternoon"
      },
      {
        "day": "Day 3",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "After a warm breakfast, you drive south through Imouzzer to visit Ifrane. The city is famous for its low temperature, snow and the alpine-style architecture houses -It is often called the Switzerland of Morocco. Next, you continue to Cedar Forest, where the Barbary macaques live. You can feed them, while walking through the forest. Later, you continue to Midelt, where you will have a free time for lunch. Next, you drive to Merzouga through the Tizi-n-Tilghmt pass and along the Ziz Valley. Stops will be made along the way for panoramic views. In the afternoon, you reach the Sahara desert of Merzouga. Next you switch to camels, and cross the sandy desert. You will make a stop on top of a high dune to enjoy the sunset. Finally, you continue to the desert camp. The camp is a combination between the traditional tents of nomads, and the luxury a hotel has. There, you can enjoy the Berber drumming, while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp."
      },
      {
        "day": "Day 4",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani Souk, you continue to Erfoud, where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand canyon through the mountains -making a high red cliff-sided canyon. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. Inevitable stops at the “monkey fingers” rock formation. And on a spot atop a mountain overlooking the Dades valley. Finally, Dinner and overnight in a Riad"
      },
      {
        "day": "Day 5",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech.",
        "content": "After breakfast, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products, from perfumes, rose water, oil, to cosmetic products. Next, you drive through the palm groves of Skoura. Later, you reach Ouarzazate, also known as the gate of the desert. You will visit the studios, in which famous movies were shot. You depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And TV series including Game Of Thrones. Next, you continue to Marrakech. Driving through the Tizi n'Tichka pass, and the High Atlas Mountains. Stops will be made for lunch, and to take pictures at interesting spots. Overnight stay in a Riad in Marrakech."
      },
      {
        "day": "Day 6",
        "title": "Guided Tour sightseeing Marrakech",
        "content": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech is rich in culture and architectural beauty. The tour includes a visit to the stunning 19th-century Bahia Palace, followed by the beautifully preserved Ben Youssef Madrasa, a former Islamic school showcasing traditional Moroccan design. You’ll also explore the lively medina and its souks, filled with colorful stalls and skilled artisans, experience the vibrant atmosphere of Jamaa El Fna Square, and admire the Koutoubia Mosque from outside, the largest in the city. Enjoy free time for lunch. In the afternoon, meet your driver to visit the iconic Majorelle Garden (requires online pre-booking), followed by a drive through Gueliz, the modern district of Marrakech, before returning to your Riad."
      },
      {
        "day": "Day 7",
        "title": "Marrakech – Essaouira",
        "content": "After breakfast, you drive west to Essaouira. On the way you will make stops to see the Argan trees plantations and cooperatives, and if you are lucky enough the goats on the trees. You reach Essaouira, formerly Mogador, one of the important coastal towns in Morocco. The city is famous for the diversity of seafood, beautiful beach and surfing sport. Enjoy free time to visit the fishing port, the ancient ramparts with cannons, and also the old medina. Finally, transfer to your Riad. Overnight stay in Essaouira."
      },
      {
        "day": "Day 8",
        "title": "Essaouira – Casablanca",
        "content": "After breakfast, the 10 days tour continues to Casablanca. You depart from Essaouira and drive on the Highway, to reach Casablanca city the economical center of Morocco. Where you will visit the Hassan II mosque the largest mosque in Morocco, Casablanca Cornish, Mohammed V square and a stop at Ricks cafe. Enjoy free time for lunch. Overnight in Casablanca"
      },
      {
        "day": "Day 9",
        "title": "Casablanca – Visit Rabat the capital – Chefchaouen",
        "content": "After breakfast, You explore Rabat one of the imperial cities in Morocco, and the current capital. It is located northwest of Morocco, on the Atlantic coast. You will visit the Highlights of the city including: the Hassan tower, The Mausoleum of Mohammed V and also The Kasbah of Oudaya. Enjoy free time for lunch. In the afternoon, you head north through Ouazzane, to reach the Blue city of Chefchaouen in the Rif Mountains. The city is famous for its buildings and alleyways painted in blue. Overnight stay in a hotel"
      },
      {
        "day": "Day 10",
        "title": "Chefchaouen – Tangier Airport",
        "content": "On the last day -depending on you flight time- you can have a more time to stroll in the beautiful alleyways of the blue medina or Spend some time in Tangier. Finally, you are dropped off at any Location Tangier. You Can as well End The tour in Fes.."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival to Fes",
        "day": "Day 1",
        "subtitle": "Arrival to Fes",
        "desc": "Your 10 Day Tour begins with a pickup from Fes Airport and a private transfer to your Riad. The rest of the day is free to relax...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 2,
        "name": "Guided Tour sightseeing Fes",
        "day": "Day 2",
        "subtitle": "Guided Tour sightseeing Fes",
        "desc": "After breakfast, you will be exploring the Highlights of the city with a local guide. Fes is considered one of the imperial cities, as well as the cul...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 3,
        "name": "Fes",
        "day": "Day 3",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "After a warm breakfast, you drive south through Imouzzer to visit Ifrane. The city is famous for its low temperature, snow and the alpine-style archit...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 4,
        "name": "Merzouga Sahara",
        "day": "Day 4",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 5,
        "name": "Dades Valley",
        "day": "Day 5",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech.",
        "desc": "After breakfast, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer the...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 6,
        "name": "Guided Tour sightseeing Marrakech",
        "day": "Day 6",
        "subtitle": "Guided Tour sightseeing Marrakech",
        "desc": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 7,
        "name": "Marrakech",
        "day": "Day 7",
        "subtitle": "Marrakech – Essaouira",
        "desc": "After breakfast, you drive west to Essaouira. On the way you will make stops to see the Argan trees plantations and cooperatives, and if you are lucky...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 8,
        "name": "Essaouira",
        "day": "Day 8",
        "subtitle": "Essaouira – Casablanca",
        "desc": "After breakfast, the 10 days tour continues to Casablanca. You depart from Essaouira and drive on the Highway, to reach Casablanca city the economical...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 9,
        "name": "Casablanca",
        "day": "Day 9",
        "subtitle": "Casablanca – Visit Rabat the capital – Chefchaouen",
        "desc": "After breakfast, You explore Rabat one of the imperial cities in Morocco, and the current capital. It is located northwest of Morocco, on the Atlantic...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 10,
        "name": "Chefchaouen",
        "day": "Day 10",
        "subtitle": "Chefchaouen – Tangier Airport",
        "desc": "On the last day -depending on you flight time- you can have a more time to stroll in the beautiful alleyways of the blue medina or Spend some time in ...",
        "coords": [
          35.1716,
          -5.2697
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        33.5731,
        -7.5898
      ],
      [
        33.5731,
        -7.5898
      ],
      [
        35.1716,
        -5.2697
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/10-days-in-morocco-from-fes/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Tangier (or Fes, depending on your flight plans); the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 45 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "10-days-morocco-grand-tour-from-marrakech",
    "title": "10-Day Grand Morocco Tour from Marrakech to Tangier | Sahara Star Tours",
    "shortTitle": "10-Day Grand Morocco Tour from Marrakech to Tangier",
    "description": "Private 10-day Morocco tour from Marrakech to Tangier. Explore Merzouga, Marrakech, Ait Ben Haddou. Local support and flexible planning.",
    "aboutHtml": "This private 10-day Morocco journey begins in Marrakech and finishes in Tangier. Along the route, you will experience Marrakech, Essaouira, High Atlas Mountains, Ait Ben Haddou, Roses Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Tangier",
    "destinations": [
      "Marrakech",
      "Tangier",
      "Essaouira",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Roses Valley",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga"
    ],
    "relatedTours": [
      "3-day-morocco-desert-tour-from-marrakech",
      "4-days-marrakech-desert-tour",
      "2-day-zagora-desert-tour-from-marrakech"
    ],
    "price": "From $1,250/person",
    "heroImage": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival to Marrakech",
        "content": "The 10 day Morocco trip begins with a pickup from Marrakech airport, followed by a brief drive through the city of Marrakech. Afterward, you’ll be transferred to your accommodation for an overnight stay in a traditional riad."
      },
      {
        "day": "Day 2",
        "title": "Marrakech – Essaouira",
        "content": "After breakfast, you head west toward the coastal city of Essaouira. Along the way, you’ll stop to visit an Argan tree plantation and a local cooperative. If you’re lucky, you might even spot goats climbing the trees! You’ll also pause for panoramic views before arriving in Essaouira—formerly known as Mogador—one of Morocco’s most charming coastal towns. Enjoy free time to explore the fishing port, stroll along the ancient ramparts lined with cannons, and wander through the atmospheric old medina. Overnight stay in Essaouira."
      },
      {
        "day": "Day 3",
        "title": "Essaouira – Guided Tour sightseeing Marrakech",
        "content": "You return to Marrakech to discover the city’s most iconic landmarks with a local guide. As one of Morocco’s historic imperial cities, Marrakech is rich in culture and architectural beauty. The tour includes a visit to the stunning 19th-century Bahia Palace, followed by the beautifully preserved Ben Youssef Madrasa, a former Islamic school showcasing traditional Moroccan design. You’ll also explore the lively medina and its souks, filled with colorful stalls and skilled artisans, experience the vibrant atmosphere of Jamaa El Fna Square, and admire the grandeur of the Koutoubia Mosque, the largest in the city."
      },
      {
        "day": "Day 4",
        "title": "Marrakech – High Atlas Mountains – Ait ben Haddou Kasbah – Roses Valley – Dades Valley",
        "content": "Drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes and Berber Villages. Our next stop is the renowned Kasbah of Ait Ben Haddou, a fortified village and UNESCO World Heritage Site. This iconic site has served as the backdrop for numerous films, including Gladiator, Alexander, The Mummy, and popular TV series like Game of Thrones. 40-minute hike to explore the kasbah on foot and enjoy panoramic views from the top. Next, you head to “The gate of the desert” Ouarzazate. Enjoy free time for lunch, next you continue to visit the Rose Valley passing through the large palm grove of Skoura. Finally you drive to Boumalne Dades where you spend the night. (Dinner Included)"
      },
      {
        "day": "Day 5",
        "title": "Dades Valley – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "content": "After breakfast, you drive through the scenic Dades Valley, making a stop at a panoramic viewpoint. Next, you continue to the spectacular Todra Gorges, where the Todra River has carved a dramatic canyon with towering red cliffs. You’ll have free time to walk through the gorge and enjoy the natural beauty of this unique setting. The journey next takes us through the lush palm groves of Touroug and Tinjdad, with free time for lunch along the way. In the afternoon, you arrive in the golden dunes of the Merzouga Sahara Desert, where your camels await. Embark on a peaceful camel trek across the dunes, with a stop atop a high dune to witness the magical desert sunset. You’ll next continue to a luxury desert camp, where you’ll be welcomed with traditional Berber hospitality. Enjoy dinner, accompanied by Berber drumming and dancing around the campfire. Overnight stay in the camp."
      },
      {
        "day": "Day 6",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Palm Grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels or a 4×4 ride to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly, you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in a palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight in a Riad next to the dunes."
      },
      {
        "day": "Day 6",
        "title": "Guided tour sightseeing Fes",
        "content": "Your driver will pick you up from your accommodation in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 7",
        "title": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Enjoy free time for lunch in Midelt or on the way. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that you visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Finally, Night in Fes, Free evening in the medina"
      },
      {
        "day": "Day 9",
        "title": "Fes – Meknes – Volubilis ruins – Chefchaouen",
        "content": "After breakfast, you depart to visit Meknes, the Ismaili capital and one of the imperial cities. In which you visit: Bab Al-Mansour, Sahrij Souani basin, the Royal stables, the granary and the Moulay Ismail Mausoleum. Enjoy free time for lunch. Next, you drive 30 km away from Meknes to visit the ancient Roman ruins of Volubilis. It is well preserved, as it is recognized as a UNESCO World Heritage Site by the UNESCO. It has many beautiful mosaics scattered here and there, along with ancient pillars and archways. After exploring the ancient ruins, you continue our journey north through Ouazzane, making our way to Chefchaouen, nestled in the Rif Mountains. Often referred to as the Blue City, Chefchaouen is renowned for its charming streets and buildings painted in various shades of blue. You’ll have the evening to relax and soak in the town’s unique atmosphere. Overnight stay in a local Riad."
      },
      {
        "day": "Day 10",
        "title": "Transfer to Tangier airport",
        "content": "After breakfast, you drive through the scenic Rif Mountains en route to Tangier Airport, marking the end of your unforgettable 10 day trip from Marrakech. Depending on your flight time—you may enjoy some free time to wander through the charming blue-painted alleyways of Chefchaouen or even take a short city tour in Tangier"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival to Marrakech",
        "day": "Day 1",
        "subtitle": "Arrival to Marrakech",
        "desc": "The 10 day Morocco trip begins with a pickup from Marrakech airport, followed by a brief drive through the city of Marrakech. Afterward, you’ll be tra...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Marrakech",
        "day": "Day 2",
        "subtitle": "Marrakech – Essaouira",
        "desc": "After breakfast, you head west toward the coastal city of Essaouira. Along the way, you’ll stop to visit an Argan tree plantation and a local cooperat...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 3,
        "name": "Essaouira",
        "day": "Day 3",
        "subtitle": "Essaouira – Guided Tour sightseeing Marrakech",
        "desc": "You return to Marrakech to discover the city’s most iconic landmarks with a local guide. As one of Morocco’s historic imperial cities, Marrakech is ri...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 4,
        "name": "Marrakech",
        "day": "Day 4",
        "subtitle": "Marrakech – High Atlas Mountains – Ait ben Haddou Kasbah – Roses Valley – Dades Valley",
        "desc": "Drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes and ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 5,
        "name": "Dades Valley",
        "day": "Day 5",
        "subtitle": "Dades Valley – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "desc": "After breakfast, you drive through the scenic Dades Valley, making a stop at a panoramic viewpoint. Next, you continue to the spectacular Todra Gorges...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 6,
        "name": "Explore Merzouga region",
        "day": "Day 6",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Palm Grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 7,
        "name": "Guided tour sightseeing Fes",
        "day": "Day 6",
        "subtitle": "Guided tour sightseeing Fes",
        "desc": "Your driver will pick you up from your accommodation in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperi...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 8,
        "name": "Merzouga Dunes",
        "day": "Day 7",
        "subtitle": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 9,
        "name": "Fes",
        "day": "Day 9",
        "subtitle": "Fes – Meknes – Volubilis ruins – Chefchaouen",
        "desc": "After breakfast, you depart to visit Meknes, the Ismaili capital and one of the imperial cities. In which you visit: Bab Al-Mansour, Sahrij Souani bas...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 10,
        "name": "Transfer to Tangier airport",
        "day": "Day 10",
        "subtitle": "Transfer to Tangier airport",
        "desc": "After breakfast, you drive through the scenic Rif Mountains en route to Tangier Airport, marking the end of your unforgettable 10 day trip from Marrak...",
        "coords": [
          35.7595,
          -5.834
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        35.7595,
        -5.834
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-grand-tour-from-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Tangier; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 30 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "10-days-morocco-holiday-itinerary-from-tangier",
    "title": "10-Day Morocco Tour from Tangier to Marrakech | Sahara Star Tours",
    "shortTitle": "10-Day Morocco Tour from Tangier to Marrakech",
    "description": "Private 10-day Morocco tour from Tangier to Marrakech or Casablanca. Explore Fes, Chefchaouen. Local support and flexible planning.",
    "aboutHtml": "This private 10-day Morocco journey begins in Tangier and finishes in Marrakech or Casablanca. Along the route, you will experience Tangier, Chefchaouen, Volubilis, Meknes, Fes, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "10 Days / 9 Nights",
    "durationDays": 10,
    "startingFrom": "Tangier",
    "departureCity": "Tangier",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Tangier",
      "Marrakech",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt"
    ],
    "relatedTours": [
      "5-days-in-northern-morocco-from-tangier",
      "6-days-morocco-tour-itinerary-from-tangier-to-marrakech",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $1,250/person",
    "heroImage": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival in Tangier – Chefchaouen",
        "content": "Your Morocco journey begins in Tangier, your driver will pick you up from your accommodation, the airport with a private pickup from your accommodation, airport, or port. or the port in Tangier. Known as “the Bride of the North,” the city sits where the Mediterranean meets the Atlantic near Cape Spartel. You begin by exploring the city and visiting the Hercules Caves and Cape Spartel. Enjoy free time for lunch. Next, you drive inland to Chefchaouen via Tetouan and the Rif Mountains, with stops for panoramic views. Overnight in a Riad in Chefchaouen."
      },
      {
        "day": "Day 2",
        "title": "Chefchaouen – Chefchaouen / Blue City Sightseeing",
        "content": "After breakfast, you will explore Chefchaouen, the blue city with a local guide. The town is also known as Achaoun, which means horns in Berber. The city is located in the Rif mountains northwest Morocco. It is famous for its buildings and alleyways painted in white and blue. Firstly you will stroll in its charming old medina. Which has so many beautiful authentic blue doors and whitewashed walls. Enjoy free time for lunch. In the afternoon, you can hike to the Spanish mosque. Located on a high ground, where you can see the spectacular view of the whole blue city. Finally, return to your hotel. Overnight stay in the same hotel."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen – Roman ruins of Volubilis – Meknes – Fes",
        "content": "After breakfast, enjoy a final wander through Chefchaouen’s alleys, next drive to the ancient Roman ruins of Volubilis, a well-preserved UNESCO World Heritage Site with beautiful mosaics, pillars, and arches. Continue about 30 km to Meknes, the Ismaili capital, to visit Bab al-Mansour, the Sahrij Souani basin, the Royal Stables and granaries, and the Mausoleum of Moulay Ismail. Next head to Fes. Overnight in a Riad."
      },
      {
        "day": "Day 4",
        "title": "Guided Tour sightseeing in Fes",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 5",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "content": "After breakfast, the 10-day Morocco holiday continues south through Imouzzer to visit Ifrane, known for its cool climate, winter snow, and alpine-style houses—“the Switzerland of Morocco.” Continue to the Cedar Forest, home to wild Barbary macaques. Later, drive to Midelt for free time at lunch, next cross the Tizi n’Talghamt Pass and follow the Ziz Valley, with scenic stops. In the afternoon, reach the Sahara desert of Merzouga. Switch to camels to cross the dunes, pausing atop a high dune for sunset. Continue to your desert camp—a blend of traditional nomad tents and modern comforts—where you can enjoy Berber drumming around the campfire under a star-filled sky. Dinner & Overnight at the camp."
      },
      {
        "day": "Day 6",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga Lake – Erg Chebbi – Palm Grove",
        "content": "After breakfast, spend the day exploring the Merzouga region—sand dunes, a seasonal lake, mines, fossil areas, and palm oases—ideal for outdoor activities. Drive off-road to an old kohl (eyeliner) mine, next visit nomad families in their woven tents and learn about their way of life over a glass of Berber tea. Continue to the village of Khamlia to enjoy Gnawa music and dance. After free time for lunch, stroll through a palm grove, next drive a few kilometers to Merzouga’s seasonal lake (often home to flamingos). Return to Merzouga. Dinner and overnight in a Riad or the camp."
      },
      {
        "day": "Day 7",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Waking early to watch the sunrise is a must. After breakfast, leave the desert for Rissani, the former capital of Tafilalet and a major trading center with a lively souk on Tuesdays, Thursdays, and Sundays. Continue to Erfoud to visit a fossilized-marble workshop. Drive through the palm groves of Touroug and Tinjdad to reach the Todra Gorges, where the river has carved a spectacular canyon with towering red cliffs popular with climbers. Enjoy free time to wander the gorge and have lunch. In the afternoon, continue to the Dades Valley via Boumalne Dades, stopping at the “Monkey Fingers” rock formations and a scenic viewpoint over the valley. Dinner and overnight in a Riad."
      },
      {
        "day": "Day 8",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
        "content": "After breakfast, continue to Kalaa Mgouna to visit the Valley of Roses. Each May, the Rose Festival showcases local products—rose water, essential oils, and cosmetics. Drive through the palm groves of Skoura to visit the Kasbah of Amredhyle, next reach Ouarzazate to tour the film studios Continue to the famous Kasbah of Ait Ben Haddou, a UNESCO-listed fortified village featured in films such as Gladiator, Alexander, and The Mummy, as well as the series Game of Thrones. Cross the High Atlas Mountains via the Tizi n’Tichka Pass, with stops for lunch and photos. Overnight in a riad in Marrakech."
      },
      {
        "day": "Day 9",
        "title": "Guided Tour sightseeing Marrakech",
        "content": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech is rich in culture and architectural beauty. The tour includes a visit to the stunning 19th-century Bahia Palace, followed by the beautifully preserved Ben Youssef Madrasa, a former Islamic school showcasing traditional Moroccan design. You’ll also explore the lively medina and its souks, filled with colorful stalls and skilled artisans, experience the vibrant atmosphere of Jamaa El Fna Square, and admire the Koutoubia Mosque from outside, the largest in the city. Enjoy free time for lunch. In the afternoon, meet your driver to visit the iconic Majorelle Garden (requires online pre-booking), followed by a drive through Gueliz, the modern district of Marrakech, before returning to your Riad."
      },
      {
        "day": "Day 10",
        "title": "Marrakech or Casablanca Airports",
        "content": "After breakfast, Your driver will pick you up from your accommodation in Marrakech and drive to Casablanca. Depending on your flight time, you may visit the Hassan II Mosque if time permits, next drop you at the airport. End of your 10 day Morocco holiday from Tangier. (The tour can end in Marrakech as well)"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival in Tangier",
        "day": "Day 1",
        "subtitle": "Arrival in Tangier – Chefchaouen",
        "desc": "Your Morocco journey begins in Tangier, your driver will pick you up from your accommodation, the airport with a private pickup from your accommodatio...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 2,
        "name": "Chefchaouen",
        "day": "Day 2",
        "subtitle": "Chefchaouen – Chefchaouen / Blue City Sightseeing",
        "desc": "After breakfast, you will explore Chefchaouen, the blue city with a local guide. The town is also known as Achaoun, which means horns in Berber. The c...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Day 3",
        "subtitle": "Chefchaouen – Roman ruins of Volubilis – Meknes – Fes",
        "desc": "After breakfast, enjoy a final wander through Chefchaouen’s alleys, next drive to the ancient Roman ruins of Volubilis, a well-preserved UNESCO World ...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Guided Tour sightseeing in Fes",
        "day": "Day 4",
        "subtitle": "Guided Tour sightseeing in Fes",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Day 5",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "desc": "After breakfast, the 10-day Morocco holiday continues south through Imouzzer to visit Ifrane, known for its cool climate, winter snow, and alpine-styl...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 6,
        "name": "Explore Merzouga region",
        "day": "Day 6",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga Lake – Erg Chebbi – Palm Grove",
        "desc": "After breakfast, spend the day exploring the Merzouga region—sand dunes, a seasonal lake, mines, fossil areas, and palm oases—ideal for outdoor activi...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 7,
        "name": "Merzouga Sahara",
        "day": "Day 7",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Waking early to watch the sunrise is a must. After breakfast, leave the desert for Rissani, the former capital of Tafilalet and a major trading center...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 8,
        "name": "Dades Valley",
        "day": "Day 8",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
        "desc": "After breakfast, continue to Kalaa Mgouna to visit the Valley of Roses. Each May, the Rose Festival showcases local products—rose water, essential oil...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 9,
        "name": "Guided Tour sightseeing Marrakech",
        "day": "Day 9",
        "subtitle": "Guided Tour sightseeing Marrakech",
        "desc": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 10,
        "name": "Marrakech or Casablanca Airports",
        "day": "Day 10",
        "subtitle": "Marrakech or Casablanca Airports",
        "desc": "After breakfast, Your driver will pick you up from your accommodation in Marrakech and drive to Casablanca. Depending on your flight time, you may vis...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/10-days-morocco-holiday-itinerary-from-tangier/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Tangier, depending on the itinerary. The tour finishes in Marrakech or Casablanca; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 45 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "13-day-absolute-morocco-tour-from-tangier",
    "title": "13-Day Morocco Grand Tour from Tangier | Sahara Star Tours",
    "shortTitle": "13-Day Morocco Grand Tour from Tangier",
    "description": "Private 13-day Morocco tour from Tangier (round-trip). Explore Fes, Chefchaouen. Local support and flexible planning.",
    "aboutHtml": "This private 13-day Morocco journey begins in Tangier and finishes in Tangier. Along the route, you will experience Tangier, Chefchaouen, Volubilis, Meknes, Fes, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "13 Days / 12 Nights",
    "durationDays": 13,
    "startingFrom": "Tangier",
    "departureCity": "Tangier",
    "arrivalCity": "Tangier",
    "destinations": [
      "Tangier",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt"
    ],
    "relatedTours": [
      "5-days-in-northern-morocco-from-tangier",
      "6-days-morocco-tour-itinerary-from-tangier-to-marrakech",
      "10-days-morocco-holiday-itinerary-from-tangier"
    ],
    "price": "From $1,590/person",
    "heroImage": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival to Tangier – Chefchaouen",
        "content": "On the first day of your 13-day Absolute Morocco tour, Your driver will pick you up from your accommodation, the airport, or the port in Tangier—“the bride of the north.” The city sits where the Mediterranean meets the Atlantic at Cape Spartel. You begin with a short tour of Tangier, visiting the Cave of Hercules and Cape Spartel. Enjoy free time for lunch. Afterward, you drive inland to Chefchaouen via Tetouan and the Rif Mountains, with stops for panoramic views along the way. Finally, you reach Chefchaouen. Overnight in a Riad"
      },
      {
        "day": "Day 2",
        "title": "Sightseeing Chefchaouen, the Blue City",
        "content": "After breakfast, explore Chefchaouen with a local guide, the Blue City—also known as “Achaoun,” meaning “horns” in Berber. Nestled in the Rif Mountains of northwestern Morocco, it is famous for alleys and facades painted in shades of blue and white. Stroll the charming old medina with its distinctive doors. Enjoy free time for lunch. In the afternoon, you can hike to the Spanish Mosque on the hill for a spectacular citywide view. Overnight in the same Riad."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen – Volubilis – Meknes – Fes",
        "content": "After breakfast, enjoy a final wander through Chefchaouen’s alleys on your own, next drive to the ancient Roman ruins of Volubilis—well preserved and recognized by UNESCO as a UNESCO World Heritage Site. Admire its mosaics, columns, and archways. Continue 30 km to Meknes, the Ismaili capital, to visit Bab al-Mansour, the Sahrij Souani basin, the Royal Stables, the granary, and the Moulay Ismail Mausoleum. Proceed to Fes. Overnight in a riad."
      },
      {
        "day": "Day 4",
        "title": "Guided sightseeing in Fes",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 5",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "content": "After breakfast, the 13-day Absolute Morocco tour heads south via Imouzzer to visit Ifrane, known for cool weather, winter snow, and alpine-style chalets—the “Switzerland of Morocco.” Continue to the Cedar Forest to see Barbary macaques in their natural habitat. Enjoy free time for lunch in Midelt. Drive over the Tizi-n-Tilghmt Pass and along the Ziz Valley with scenic stops. In the afternoon, you reach Merzouga, where you switch to camels to cross the golden dunes, pausing on a high ridge for sunset. Continue to a luxury desert camp combining nomadic tradition with modern comfort. Enjoy Berber drumming around the campfire under a vast, star-filled sky."
      },
      {
        "day": "Day 6",
        "title": "Explore Merzouga – Nomads – Khamlia – Merzouga Lake – Erg Chebbi – Palm Grove",
        "content": "After breakfast, dedicate the day to exploring the Merzouga region—dunes, a seasonal lake, fossil areas, small mines, and lush oases—ideal for light off-road adventures. Visit an old kohl (eyeliner) mine, next share tea with nomads in their woven tents. Continue to Khamlia village for Gnaoua music and dance; many residents trace roots to Mali, Sudan, and Niger. Enjoy free time for lunch. Stroll through a palm-tree grove and drive to the wild lake of Merzouga (often home to flamingos) before returning to Merzouga. Dinner and overnight in a hotel."
      },
      {
        "day": "Day 7",
        "title": "Merzouga – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Waking up early for sunrise is a must. After breakfast, leave the desert for Rissani, the former capital of Tafilalet and still a major regional market, especially lively on Tuesdays, Thursdays, and Sundays. Continue to Erfoud to visit a fossil workshop. Drive via Touroug and Tinjdad palm groves to reach the Todra Gorge, where the river has carved a dramatic canyon—an iconic site for climbers. Enjoy free time for lunch. Proceed through Boumalne Dades to the Dades Valley, stopping at the “Monkey Fingers” rock formations and a lookout over the valley. Dinner and overnight in a hotel."
      },
      {
        "day": "Day 8",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "After breakfast, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products, from perfumes, rose water, oil, to cosmetic products. Next, you drive through the palm groves of Skoura, before you reach Ouarzazate, where you visit the studios, in which famous movies were shot. You depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And TV series including Game Of Thrones. After that you continue to Marrakech, by driving through the Tizi n'Tichka pass, and the High Atlas Mountains. Stops will be made for lunch, and to take pictures at interesting spots. Overnight stay in a Riad in Marrakech."
      },
      {
        "day": "Day 9",
        "title": "Guided Tour sightseeing Marrakech",
        "content": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech is rich in culture and architectural beauty. The tour includes a visit to the stunning 19th-century Bahia Palace, followed by the beautifully preserved Ben Youssef Madrasa, a former Islamic school showcasing traditional Moroccan design. You’ll also explore the lively medina and its souks, filled with colorful stalls and skilled artisans, experience the vibrant atmosphere of Jamaa El Fna Square, and admire the Koutoubia Mosque from outside, the largest in the city. Enjoy free time for lunch. In the afternoon, meet your driver to visit the iconic Majorelle Garden (requires online pre-booking), followed by a drive through Gueliz, the modern district of Marrakech, before returning to your Riad."
      },
      {
        "day": "Day 10",
        "title": "Marrakech – Essaouira",
        "content": "After breakfast, you drive west to Essaouira. On the way you will make stops to see the Argan trees plantations and cooperatives, and if you are lucky enough the goats on the trees. You reach Essaouira, formerly Mogador, one of the important coastal towns in Morocco. The city is famous for the diversity of seafood, beautiful beach and surfing sport. Enjoy free time to visit the fishing port, the ancient ramparts with cannons, and also the old medina. Finally, transfer to your hotel. Overnight stay in Essaouira."
      },
      {
        "day": "Day 11",
        "title": "Essaouira – Visit Casablanca",
        "content": "Depart Essaouira and follow the highway north to Casablanca — Morocco’s largest city and economic heartbeat. Your journey begins with a visit to the spectacular Hassan II Mosque, perched on a promontory overlooking the Atlantic Ocean. As the largest mosque in Morocco, its intricate architecture and seaside setting make it a must-see landmark. After some free time for lunch, you continue exploring the highlights of Casablanca. Mohammed V Square – the bustling civic center known for its colonial architecture A photo stop at the iconic Rick’s Café, inspired by the classic film Casablanca"
      },
      {
        "day": "Day 12",
        "title": "Rabat sightseeing – Assilah",
        "content": "You drive along the coastline to Rabat. Rabat is one of the imperial cities in Morocco, and the current capital. You will visit the Highlights of the Moroccan capital. Including: the Hassan tower, the Mausoleum of Mohammed V and also the Kasbah of Oudaya. Enjoy free time for lunch. In the afternoon, you head north to Assilah the beautiful seaside city. Overnight stay in a Riad"
      },
      {
        "day": "Day 13",
        "title": "Assilah – Transfer to Tangier",
        "content": "On the last day, you depart from Assilah and head to Tangier. Drop off at your departure terminal in Casablanca airport.."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival to Tangier",
        "day": "Day 1",
        "subtitle": "Arrival to Tangier – Chefchaouen",
        "desc": "On the first day of your 13-day Absolute Morocco tour, Your driver will pick you up from your accommodation, the airport, or the port in Tangier—“the ...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 2,
        "name": "Sightseeing Chefchaouen, the Blue City",
        "day": "Day 2",
        "subtitle": "Sightseeing Chefchaouen, the Blue City",
        "desc": "After breakfast, explore Chefchaouen with a local guide, the Blue City—also known as “Achaoun,” meaning “horns” in Berber. Nestled in the Rif Mountain...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Day 3",
        "subtitle": "Chefchaouen – Volubilis – Meknes – Fes",
        "desc": "After breakfast, enjoy a final wander through Chefchaouen’s alleys on your own, next drive to the ancient Roman ruins of Volubilis—well preserved and ...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Guided sightseeing in Fes",
        "day": "Day 4",
        "subtitle": "Guided sightseeing in Fes",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Day 5",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "desc": "After breakfast, the 13-day Absolute Morocco tour heads south via Imouzzer to visit Ifrane, known for cool weather, winter snow, and alpine-style chal...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 6,
        "name": "Explore Merzouga",
        "day": "Day 6",
        "subtitle": "Explore Merzouga – Nomads – Khamlia – Merzouga Lake – Erg Chebbi – Palm Grove",
        "desc": "After breakfast, dedicate the day to exploring the Merzouga region—dunes, a seasonal lake, fossil areas, small mines, and lush oases—ideal for light o...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 7,
        "name": "Merzouga",
        "day": "Day 7",
        "subtitle": "Merzouga – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Waking up early for sunrise is a must. After breakfast, leave the desert for Rissani, the former capital of Tafilalet and still a major regional marke...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 8,
        "name": "Dades Valley",
        "day": "Day 8",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "After breakfast, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer the...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 9,
        "name": "Guided Tour sightseeing Marrakech",
        "day": "Day 9",
        "subtitle": "Guided Tour sightseeing Marrakech",
        "desc": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 10,
        "name": "Marrakech",
        "day": "Day 10",
        "subtitle": "Marrakech – Essaouira",
        "desc": "After breakfast, you drive west to Essaouira. On the way you will make stops to see the Argan trees plantations and cooperatives, and if you are lucky...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 11,
        "name": "Essaouira",
        "day": "Day 11",
        "subtitle": "Essaouira – Visit Casablanca",
        "desc": "Depart Essaouira and follow the highway north to Casablanca — Morocco’s largest city and economic heartbeat. Your journey begins with a visit to the s...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 12,
        "name": "Rabat sightseeing",
        "day": "Day 12",
        "subtitle": "Rabat sightseeing – Assilah",
        "desc": "You drive along the coastline to Rabat. Rabat is one of the imperial cities in Morocco, and the current capital. You will visit the Highlights of the ...",
        "coords": [
          34.0209,
          -6.8416
        ]
      },
      {
        "number": 13,
        "name": "Assilah",
        "day": "Day 13",
        "subtitle": "Assilah – Transfer to Tangier",
        "desc": "On the last day, you depart from Assilah and head to Tangier. Drop off at your departure terminal in Casablanca airport.....",
        "coords": [
          35.7595,
          -5.834
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        33.5731,
        -7.5898
      ],
      [
        34.0209,
        -6.8416
      ],
      [
        35.7595,
        -5.834
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/13-day-absolute-morocco-tour-from-tangier/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Tangier, depending on the itinerary. The tour finishes in Tangier; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 45 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "14-days-grand-morocco-tour-itinerary-from-casablanca",
    "title": "14-Day Grand Morocco Tour from Casablanca | Sahara Star Tours",
    "shortTitle": "14-Day Grand Morocco Tour from Casablanca",
    "description": "Private 14-day Morocco tour from Casablanca to Marrakech or Casablanca. Explore Fes, Chefchaouen, Rabat. Local support and flexible planning.",
    "aboutHtml": "This private 14-day Morocco journey begins in Casablanca and finishes in Marrakech or Casablanca. Along the route, you will experience Casablanca, Rabat, Tangier, Chefchaouen, Volubilis, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "14 Days / 13 Nights",
    "durationDays": 14,
    "startingFrom": "Casablanca",
    "departureCity": "Casablanca",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Casablanca",
      "Marrakech",
      "Rabat",
      "Tangier",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane"
    ],
    "relatedTours": [
      "6-days-desert-tour-from-casablanca",
      "7-day-morocco-tour-from-casablanca",
      "11-days-morocco-classic-tour"
    ],
    "price": "From $1,690/person",
    "heroImage": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival to Casablanca – Visit The Largest City Of Morocco",
        "content": "On the first day of your 14 Days Tour in Morocco, you’ll welcome you upon arrival at the airport or directly from your accommodation in Casablanca — Morocco’s largest city and economic heartbeat. Your journey begins with a visit to the spectacular Hassan II Mosque, perched on a promontory overlooking the Atlantic Ocean. As the largest mosque in Morocco, its intricate architecture and seaside setting make it a must-see landmark. After some free time for lunch, you continue exploring the highlights of Casablanca. Depending on your arrival time, the tour may include: Mohammed V Square – the bustling civic center known for its colonial architecture A photo stop at the iconic Rick’s Café, inspired by the classic film Casablanca"
      },
      {
        "day": "Day 2",
        "title": "Casablanca – Rabat the capital – Assilah",
        "content": "After breakfast, you drive along the coastline to Rabat. Rabat is one of the imperial cities in Morocco, and the current capital. You will visit the Highlights of the city, including: the Hassan tower, the Mausoleum of Mohammed V and also the Kasbah of Oudaya. Enjoy free time for lunch. In the afternoon, you head north to Assilah the beautiful seaside city. Overnight stay in a Riad"
      },
      {
        "day": "Day 3",
        "title": "Assilah – Tangier – The Rif mountains – Chefchaouen",
        "content": "After breakfast, you depart from Assilah, and drive along the coastline to Tangier. Also known as “the bride of the north”. It is located northwest, where the Mediterranean Sea meets the Atlantic Ocean off Cape Spartel, in the Strait of Gibraltar. Start by exploring the beautiful city, and visit the cave of Hercules and the Cape Spartel. Enjoy free time for lunch, before you drive inland to Chefchaouen. Passing through the city of Tetouan, and the Rif mountains. Stops will be made along the way for panoramic views. Overnight stay in a Riad in Chefchaouen."
      },
      {
        "day": "Day 4",
        "title": "Sightseeing Chefchaouen the blue city",
        "content": "After breakfast, you will explore Chefchaouen, the blue city, also known as Achaoun, which means horns in Berber. The city is located in the Rif mountains northwest Morocco. It is famous for its buildings and alleyways painted in white and blue. Firstly you will stroll in its charming old medina, which has so many beautiful authentic blue doors and whitewashed wall. Enjoy free time for lunch. In the afternoon, you can hike to the Spanish mosque. Located on a high ground, where you can see the spectacular view of the whole blue city. Finally, return to your hotel. Overnight stay in the same Riad"
      },
      {
        "day": "Day 5",
        "title": "Chefchaouen – the Roman ruins of Volubilis – Meknes – Fes",
        "content": "After breakfast, you can wander in the beautiful alleyways, of the blue city Chefchaouen. Next, you drive to visit the ancient Roman ruins of Volubilis. It is well preserved, as it is recognized as a UNESCO World Heritage Site by the UNESCO. It has many beautiful mosaics scattered here and there, along with ancient pillars and archways. After strolling in the ruins, you drive 30 km to visit Meknes, the Ismaili capital and one of the imperial cities. In which you visit Bab Al-Mansour, Sahrij Souani basin, the Royal stables, the granary and the Moulay Ismail Mausoleum. Next, you head to Fes. Overnight stay in a Riad."
      },
      {
        "day": "Day 6",
        "title": "Sightseeing Fes with a Local Guide",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 7",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "After breakfast, you drive south through Imouzzer to visit Ifrane. The city is famous for its low temperature, snow and the alpine-style architecture houses -no wonder it is called the Switzerland of Morocco. After that, you continue to Cedar Forest, where the Barbary macaques live. You can feed them, while walking through the forest. Later, you continue to Midelt, where you will have a free time for lunch. Next, you drive to Merzouga through the Tizi-n-Tilghmt pass and along the Ziz Valley. With stops for panoramic views. In the afternoon, you reach the Sahara desert of Merzouga, where you switch to camels, and cross the sandy desert. You will make a stop on top of a high dune to enjoy the sunset. Finally, you continue to the camp, which is a combination between the traditional tents of nomads, and the luxury a hotel has. There, you can enjoy the Berber drumming, while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp."
      },
      {
        "day": "Day 8",
        "title": "Explore Merzouga region – Nomads – Khamlia (Gnaoua village) – Merzouga lake – Erg Chebbi – Palm Grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels or a 4×4 ride to Merzouga, where the driver awaits. You dedicate the 8th day of your 14 days grand Morocco tour, to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Finally, you return to Merzouga, dinner and overnight In a Riad"
      },
      {
        "day": "Day 9",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand high red cliff-sided canyon through the mountains. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. Inevitable stops at the “monkey fingers” rock formatio. And also on a spot atop a mountain overlooking the Dades valley. Finally, dinner and overnight in a hotel."
      },
      {
        "day": "Day 10",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "After breakfast, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products, from perfumes, rose water, oil, to cosmetic products. Next, you drive through the palm groves of Skoura, before you reach Ouarzazate, where you visit the studios, in which famous movies were shot. You depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. Next, you continue to Marrakech, by driving through the Tizi n'Tichka pass, and the High Atlas Mountains. Stops will be made for lunch, and to take pictures at interesting spots. Overnight stay in a Riad in Marrakech."
      },
      {
        "day": "Day 11",
        "title": "Guided Tour sightseeing Marrakech",
        "content": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech is rich in culture and architectural beauty. The tour includes a visit to the stunning 19th-century Bahia Palace, followed by the beautifully preserved Ben Youssef Madrasa, a former Islamic school showcasing traditional Moroccan design. You’ll also explore the lively medina and its souks, filled with colorful stalls and skilled artisans, experience the vibrant atmosphere of Jamaa El Fna Square, and admire the Koutoubia Mosque from outside, the largest in the city. Enjoy free time for lunch. In the afternoon, meet your driver to visit the iconic Majorelle Garden (requires online pre-booking), followed by a drive through Gueliz, the modern district of Marrakech, before returning to your Riad."
      },
      {
        "day": "Day 12",
        "title": "Marrakech – Essaouira",
        "content": "After breakfast, you drive west to Essaouira. On the way you will make stops to see the Argan trees plantations and cooperatives, and if you are lucky enough the goats on the trees. You reach Essaouira, formerly Mogador, one of the important coastal towns in Morocco. The city is famous for the diversity of seafood, beautiful beach and surfing sport. Enjoy free time to visit the fishing port, the ancient ramparts with cannons, and also the old medina. Finally, transfer to your hotel. Overnight stay in Essaouira."
      },
      {
        "day": "Day 13",
        "title": "Essaouira – Marrakech",
        "content": "Today, you can choose to spend more time exploring Essaouira at your own pace, or begin the drive back to Marrakech, enjoying the scenic coastal and countryside landscapes along the way. Upon arrival, check in to your accommodation and enjoy the rest of the day at your leisure — relax, explore the souks, or unwind at a rooftop café."
      },
      {
        "day": "Day 14",
        "title": "Marrakech or Casablanca Airports",
        "content": "On the final day, transfer to Marrakech Airport at any time that suits your departure schedule. You may choose to end the tour in Casablanca as Well"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival to Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival to Casablanca – Visit The Largest City Of Morocco",
        "desc": "On the first day of your 14 Days Tour in Morocco, you’ll welcome you upon arrival at the airport or directly from your accommodation in Casablanca — M...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 2,
        "name": "Casablanca",
        "day": "Day 2",
        "subtitle": "Casablanca – Rabat the capital – Assilah",
        "desc": "After breakfast, you drive along the coastline to Rabat. Rabat is one of the imperial cities in Morocco, and the current capital. You will visit the H...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 3,
        "name": "Assilah",
        "day": "Day 3",
        "subtitle": "Assilah – Tangier – The Rif mountains – Chefchaouen",
        "desc": "After breakfast, you depart from Assilah, and drive along the coastline to Tangier. Also known as “the bride of the north”. It is located northwest, w...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Sightseeing Chefchaouen the blue city",
        "day": "Day 4",
        "subtitle": "Sightseeing Chefchaouen the blue city",
        "desc": "After breakfast, you will explore Chefchaouen, the blue city, also known as Achaoun, which means horns in Berber. The city is located in the Rif mount...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 5,
        "name": "Chefchaouen",
        "day": "Day 5",
        "subtitle": "Chefchaouen – the Roman ruins of Volubilis – Meknes – Fes",
        "desc": "After breakfast, you can wander in the beautiful alleyways, of the blue city Chefchaouen. Next, you drive to visit the ancient Roman ruins of Volubili...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 6,
        "name": "Sightseeing Fes with a Local Guide",
        "day": "Day 6",
        "subtitle": "Sightseeing Fes with a Local Guide",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 7,
        "name": "Fes",
        "day": "Day 7",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "After breakfast, you drive south through Imouzzer to visit Ifrane. The city is famous for its low temperature, snow and the alpine-style architecture ...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 8,
        "name": "Explore Merzouga region",
        "day": "Day 8",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia (Gnaoua village) – Merzouga lake – Erg Chebbi – Palm Grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 9,
        "name": "Merzouga Sahara",
        "day": "Day 9",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 10,
        "name": "Dades Valley",
        "day": "Day 10",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "After breakfast, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer the...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 11,
        "name": "Guided Tour sightseeing Marrakech",
        "day": "Day 11",
        "subtitle": "Guided Tour sightseeing Marrakech",
        "desc": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 12,
        "name": "Marrakech",
        "day": "Day 12",
        "subtitle": "Marrakech – Essaouira",
        "desc": "After breakfast, you drive west to Essaouira. On the way you will make stops to see the Argan trees plantations and cooperatives, and if you are lucky...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 13,
        "name": "Essaouira",
        "day": "Day 13",
        "subtitle": "Essaouira – Marrakech",
        "desc": "Today, you can choose to spend more time exploring Essaouira at your own pace, or begin the drive back to Marrakech, enjoying the scenic coastal and c...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 14,
        "name": "Marrakech or Casablanca Airports",
        "day": "Day 14",
        "subtitle": "Marrakech or Casablanca Airports",
        "desc": "On the final day, transfer to Marrakech Airport at any time that suits your departure schedule. You may choose to end the tour in Casablanca as Well...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.5731,
        -7.5898
      ],
      [
        33.5731,
        -7.5898
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/14-days-grand-morocco-tour-itinerary-from-casablanca/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 45 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      },
      {
        "question": "How do I book the tour?",
        "answer": "Send an inquiry with your travel dates, group size, preferred accommodation level, and pickup location. The Sahara Star Tours team can then confirm availability and finalize the itinerary before you travel."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "2-day-desert-marrakech-tour-from-fes",
    "title": "2-Day Fes to Marrakech Desert Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "2-Day Fes to Marrakech Desert Tour via Merzouga",
    "description": "Private 2-day Morocco desert tour from Fes to Marrakech. Explore Merzouga, Fes, Todra Gorges. Local support and flexible planning.",
    "aboutHtml": "This private 2-day Morocco journey begins in Fes and finishes in Marrakech. Along the route, you will experience Fes, Ifrane, Cedar Forest, Midelt, Ziz Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "2 Days / 1 Night",
    "durationDays": 2,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Fes",
      "Marrakech",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Sahara Desert",
      "Todra Gorges"
    ],
    "relatedTours": [
      "fes-marrakech-3-days-desert-tour",
      "4-day-morocco-desert-tour-from-fes-to-marrakech",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $250/person",
    "heroImage": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "Your 2-day desert journey begins with an early pickup from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. Later, you continue to Midelt, where lunch will be served. Next, you head to the Sahara desert, driving through the Tizi-n-Tilghmt pass, and along. Then, in the afternoon you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert camp. There, you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Merzouga Sahara Desert – Todra Gorges – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "An early wake up is a must do to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, before you return on 4×4 ride to Merzouga, where the driver awaits. Next, you leave the desert and drive west through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. Next, you drive along various Kasbahs, and palm tree groves to reach Ouarzazate, free time for lunch. Next, you continue to Marrakech by driving through the famous Kasbah of Ait Ben Haddou, Making a Quick stop at the fortified village, it is recognized as a UNESCO World Heritage Site by the UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And TV series including Game Of Thrones. Finally, you drive through the Tizi n'Tichka pass and the High Atlas Mountains to reach Marrakech. Next, you drive you to the airport or your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Fes",
        "day": "Day 1",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "Your 2-day desert journey begins with an early pickup from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to visit I...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 2,
        "name": "Merzouga Sahara Desert",
        "day": "Day 2",
        "subtitle": "Merzouga Sahara Desert – Todra Gorges – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "An early wake up is a must do to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, before you return on 4×4 ride to...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        34.0331,
        -5.0003
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/2-day-desert-marrakech-tour-from-fes/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 9 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "2-day-sahara-desert-tour-from-fes",
    "title": "2-Day Fes to Merzouga Sahara Desert Tour | Sahara Star Tours",
    "shortTitle": "2-Day Fes to Merzouga Sahara Desert Tour",
    "description": "Private 2-day Morocco desert tour from Fes (round-trip). Explore Merzouga, Fes. Local support and flexible planning.",
    "aboutHtml": "This private 2-day Morocco journey begins in Fes and finishes in Fes. Along the route, you will experience Fes, Ifrane, Cedar Forest, Midelt, Ziz Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "2 Days / 1 Night",
    "durationDays": 2,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Fes",
    "destinations": [
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Rissani",
      "Erfoud"
    ],
    "relatedTours": [
      "3-day-sahara-desert-tour-from-fes",
      "4-day-morocco-itinerary-desert-tour-from-fes",
      "7-day-morocco-tour-itinerary-from-fes"
    ],
    "price": "From $250/person",
    "heroImage": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Fes medina and historic cultural sites",
      "Ifrane",
      "Cedar Forest"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "Your 2-day desert journey begins with an early pickup from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane, famous for its low temperature, snow and also the alpine-style houses -It is often called the Switzerland of Morocco. After that, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. Later, you continue to Midelt, where lunch will be served. Next, you head to the Sahara desert, driving through the Tizi-n-Tilghmt pass, and along. Then, in the afternoon you reach the Sahara desert of Merzouga. Next, switch to camels and cross the sandy desert. After that a stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert camp. There, you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Merzouga – Rissani – Erfoud – Ziz valley – Ifrane – Fes",
        "content": "Wake up early morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels or a 4×4 ride to Merzouga where the driver awaits. Next, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Next, you drive through the Cedar Forest and Ifrane to reach Fes. Finally, you are dropped off at the airport or your accommodation. End of the tour. Estimated arrival time is around 6pm."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Fes",
        "day": "Day 1",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "Your 2-day desert journey begins with an early pickup from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to visit I...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 2,
        "name": "Merzouga",
        "day": "Day 2",
        "subtitle": "Merzouga – Rissani – Erfoud – Ziz valley – Ifrane – Fes",
        "desc": "Wake up early morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels or a 4×4 ride ...",
        "coords": [
          34.0331,
          -5.0003
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/2-day-sahara-desert-tour-from-fes/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "2-day-zagora-desert-tour-from-marrakech",
    "title": "2-Day Zagora Desert Tour from Marrakech | Sahara Star Tours",
    "shortTitle": "2-Day Zagora Desert Tour from Marrakech",
    "description": "Private 2-day Morocco desert tour from Marrakech (round-trip). Explore Marrakech, Ait Ben Haddou, Zagora. Local support and flexible planning.",
    "aboutHtml": "This private 2-day Morocco journey begins in Marrakech and finishes in Marrakech. Along the route, you will experience Marrakech, Ait Ben Haddou, Ouarzazate, Zagora. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "2 Days / 1 Night",
    "durationDays": 2,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Zagora"
    ],
    "relatedTours": [
      "3-day-morocco-desert-tour-from-marrakech",
      "4-days-marrakech-desert-tour",
      "day-trip-ait-ben-haddou"
    ],
    "price": "From $250/person",
    "heroImage": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/main.webp",
    "highlights": [
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Marrakech's historic medina and major landmarks",
      "Ouarzazate",
      "Zagora"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – Ait Ben Haddou Kasbah – Ouarzazate – Agdez – Zagora Desert",
        "content": "You start the 2 day Zagora desert tour from your accommodation or the airport in Marrakech early morning. Next, drive through Tizi N-tichka pass (2260 m. Alt), and through various Berber villages. Different stops will be made along the way, to enjoy the panoramic views. You arrive to Ait Ben Haddou Kasbah, enjoy a short hike of the beautiful UNESCO World Heritage Site. The Kasbah used as set for various Hollywood epics, like Gladiator and Lawrence of Arabia. In addition to TV series such as Game of Thrones. After lunch in either Kasbah Ait Ben Haddou or further in Ouarzazate. You drive through the Anti-Atlas Mountains, the Berber Villages, and along the Draa Valley. Draa Valley is considered the largest palm plantation and also the longest river in Morocco. Finally, you arrive Zagora in the afternoon, you go for a camel trek, on Zagora desert. Watch the spectacular sunset, before you continue to your Sahara desert camp. Where you will enjoy a Moroccan dinner, along with drums entertainment under open sky of shiny stars."
      },
      {
        "day": "Day 2",
        "title": "Zagora Desert to Marrakech",
        "content": "After an early wake up for a camel ride over the dunes to contemplate the magical sunrise, and a warm Moroccan breakfast. You depart to Ouarzazate, the gateway to the desert. Where you visit the Taourirt Kasbah, and also the studios where famous movies were shot. Next continue our way back to Marrakech, through Tizi Ntichka pass and the High Atlas mountains.\nFinally, your 2 days Zagora desert tour will end by a drop off at your accommodation or the airport in Marrakech."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Marrakech – Ait Ben Haddou Kasbah – Ouarzazate – Agdez – Zagora Desert",
        "desc": "You start the 2 day Zagora desert tour from your accommodation or the airport in Marrakech early morning. Next, drive through Tizi N-tichka pass (2260...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Zagora Desert to Marrakech",
        "day": "Day 2",
        "subtitle": "Zagora Desert to Marrakech",
        "desc": "After an early wake up for a camel ride over the dunes to contemplate the magical sunrise, and a warm Moroccan breakfast. You depart to Ouarzazate, th...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/2-day-zagora-desert-tour-from-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 6 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "3-day-morocco-desert-tour-from-marrakech",
    "title": "3-Day Marrakech to Merzouga Sahara Desert Tour | Sahara Star Tours",
    "shortTitle": "3-Day Marrakech to Merzouga Sahara Desert Tour",
    "description": "Private 3-day Morocco desert tour from Marrakech (round-trip). Explore Merzouga, Marrakech, Ait Ben Haddou. Local support and flexible planning.",
    "aboutHtml": "This private 3-day Morocco journey begins in Marrakech and finishes in Marrakech. Along the route, you will experience Marrakech, High Atlas Mountains, Ait Ben Haddou, Roses Valley, Dades Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "3 Days / 2 Nights",
    "durationDays": 3,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Marrakech",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Roses Valley",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga",
      "Sahara Desert"
    ],
    "relatedTours": [
      "4-days-marrakech-desert-tour",
      "2-day-zagora-desert-tour-from-marrakech",
      "day-trip-ait-ben-haddou"
    ],
    "price": "From $390/person",
    "heroImage": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – High Atlas mountains – Ait Ben Haddou Kasbah – Roses Valley – Boumalne Dades",
        "content": "The 3 days Tour to Merzouga desert starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atlas mountains, and also Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes. After that, you continue to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. Next, you head to “The gate of the desert” Ouarzazate. Enjoy free time for lunch, next you continue to visit the Rose Valley passing through the large palm grove of Skoura. Finally you drive to Boumalne Dades where you spend the night."
      },
      {
        "day": "Day 2",
        "title": "Dades Valley – Todra Gorges – Merzouga Sahara Desert – Camel trekking – overnight in a luxury camp",
        "content": "On the second day of your Morocco desert tour, you drive through the Dades valley, you stop on a spot overlooking valley, to enjoy the spectacular landscape of Dades Gorges. Next, you continue to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. You can wander in the gorges and appreciate the beauty of the landscape. After that you drive through the palm groves of Touroug and Tinjdad. Enjoy free time for lunch on the way. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 3",
        "title": "Merzouga Sahara Desert – Draa Valley – Anti Atlas Mountains – Ouarzazate – Marrakech",
        "content": "Wake up early morning to contemplate the desert sunrise in the middle of the desert. Next you will have a free time for a warm Moroccan breakfast. After that you return on camels or the camp’s 4×4 to Merzouga where your driver awaits. Next, you continue to Rissani town, well know for its ethnic large souk. After that you continue to Alnif next along the Draa Valley all the way to Ouarzazate. Next you cross the Tizi n'Tichka pass to reach Marrakech. Finally, the 3 days desert tour ends by a drop off at your accommodation in Marrakech. Note: If the 9 hour of driving back to Marrakech feels too much for you, the tour can end in Errachidia airport, 2 hours from Merzouga, and it is one hour flight to Marrakech. (flight is not Included), Airline: Ryanair, schedule: 3 Times a week If you wish to Finish the tour in Fes instead of Marrakech, you can consider: 3 Days From Marrakech to Fes"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Marrakech – High Atlas mountains – Ait Ben Haddou Kasbah – Roses Valley – Boumalne Dades",
        "desc": "The 3 days Tour to Merzouga desert starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fascinatin...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Dades Valley",
        "day": "Day 2",
        "subtitle": "Dades Valley – Todra Gorges – Merzouga Sahara Desert – Camel trekking – overnight in a luxury camp",
        "desc": "On the second day of your Morocco desert tour, you drive through the Dades valley, you stop on a spot overlooking valley, to enjoy the spectacular lan...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 3,
        "name": "Merzouga Sahara Desert",
        "day": "Day 3",
        "subtitle": "Merzouga Sahara Desert – Draa Valley – Anti Atlas Mountains – Ouarzazate – Marrakech",
        "desc": "Wake up early morning to contemplate the desert sunrise in the middle of the desert. Next you will have a free time for a warm Moroccan breakfast. Aft...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/3-day-morocco-desert-tour-from-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 9 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "3-day-sahara-desert-tour-from-fes",
    "title": "3-Day Fes to Merzouga Sahara Desert Tour | Sahara Star Tours",
    "shortTitle": "3-Day Fes to Merzouga Sahara Desert Tour",
    "description": "Private 3-day Morocco desert tour from Fes (round-trip). Explore Merzouga, Erg Chebbi, Fes. Local support and flexible planning.",
    "aboutHtml": "This private 3-day Morocco journey begins in Fes and finishes in Fes. Along the route, you will experience Fes, Ifrane, Cedar Forest, Midelt, Ziz Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "3 Days / 2 Nights",
    "durationDays": 3,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Fes",
    "destinations": [
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Rissani"
    ],
    "relatedTours": [
      "4-day-morocco-itinerary-desert-tour-from-fes",
      "7-day-morocco-tour-itinerary-from-fes",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $390/person",
    "heroImage": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "Fes medina and historic cultural sites",
      "Ifrane"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "The 3 day Sahara desert tour starts with an early pick up from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. Later, you continue to Midelt, where lunch will be served. Next, you head to the Sahara desert, driving through the Tizi-n-Tilghmt pass, and along. Then, in the afternoon you reach the Sahara desert of Merzouga. You will switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Palm Grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 3",
        "title": "Merzouga – Rissani – Erfoud – Ziz valley – Ifrane – Fes",
        "content": "Free time for breakfast, You leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Next, you drive through the Cedar Forest and Ifrane to reach Fes. Finally, you are dropped off at the airport or your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Fes",
        "day": "Day 1",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "The 3 day Sahara desert tour starts with an early pick up from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to vis...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 2,
        "name": "Explore Merzouga region",
        "day": "Day 2",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Palm Grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 3,
        "name": "Merzouga",
        "day": "Day 3",
        "subtitle": "Merzouga – Rissani – Erfoud – Ziz valley – Ifrane – Fes",
        "desc": "Free time for breakfast, You leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the reg...",
        "coords": [
          34.0331,
          -5.0003
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        34.0331,
        -5.0003
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/3-day-sahara-desert-tour-from-fes/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "4-day-morocco-desert-tour-from-fes-to-marrakech",
    "title": "4-Day Fes to Marrakech Desert Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "4-Day Fes to Marrakech Desert Tour via Merzouga",
    "description": "Private 4-day Morocco desert tour from Fes to Marrakech. Explore Merzouga, Erg Chebbi, Fes. Local support and flexible planning.",
    "aboutHtml": "This private 4-day Morocco journey begins in Fes and finishes in Marrakech. Along the route, you will experience Fes, Ifrane, Cedar Forest, Midelt, Ziz Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "4 Days / 3 Nights",
    "durationDays": 4,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Fes",
      "Marrakech",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Rissani"
    ],
    "relatedTours": [
      "fes-marrakech-3-days-desert-tour",
      "3-days-desert-tour-marrakech-to-fes",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $520/person",
    "heroImage": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "The 4 days Fes to Marrakech desert tour starts with an early pick up from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. Later, you continue to Midelt, where lunch will be served. Next, you head to the Sahara desert, driving through the Tizi-n-Tilghmt pass, and along. Then, in the afternoon you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels or a 4×4 ride to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly, you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in a palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 3",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani Souk, you continue to Erfoud, where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. Inevitable stops at the “monkey fingers” rock formation. And on a spot atop a mountain overlooking the Dades valley. Finally, dinner and overnight in a hotel."
      },
      {
        "day": "Day 4",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "On the last day of your 4 day desert tour from Fes, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products, from perfumes, rose water, oil, to cosmetic products. Next, you drive through the palm groves of Skoura. Later, you reach Ouarzazate, also known as the gate of the desert. You will visit the studios, in which famous movies were shot. You depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And TV series including Game Of Thrones. Next, you continue to Marrakech. Driving through the Tizi n'Tichka pass, and also the spectacular the High Atlas Mountains. Stops will be made for lunch, and to take pictures at interesting spots. Finally, you reach Marrakech, you drop you off at the airport or your accommodation. End of the tour This Tour Ends in Marrakech, if you wish to Travel Back to Fes, you can Consider: 4 Days From Fes to Merzouga You Can As Well do the tour in Reverse: 4 Days From Marrakech to Fes"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Fes",
        "day": "Day 1",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "The 4 days Fes to Marrakech desert tour starts with an early pick up from the airport or your accommodation in Fes. Next, you drive south through Imou...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 2,
        "name": "Explore Merzouga region",
        "day": "Day 2",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 3,
        "name": "Merzouga Sahara",
        "day": "Day 3",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 4,
        "name": "Dades Valley",
        "day": "Day 4",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "On the last day of your 4 day desert tour from Fes, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        34.0331,
        -5.0003
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-desert-tour-from-fes-to-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "4-day-morocco-itinerary-desert-tour-from-fes",
    "title": "4-Day Fes to Merzouga & Dades Desert Tour | Sahara Star Tours",
    "shortTitle": "4-Day Fes to Merzouga & Dades Desert Tour",
    "description": "Private 4-day Morocco desert tour from Fes (round-trip). Explore Fes, Todra Gorges. Local support and flexible planning.",
    "aboutHtml": "This private 4-day Morocco journey begins in Fes and finishes in Fes. Along the route, you will experience Fes, Ifrane, Cedar Forest, Midelt, Ziz Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "4 Days / 3 Nights",
    "durationDays": 4,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Fes",
    "destinations": [
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Errachidia",
      "Dades Gorges",
      "Todra Gorges"
    ],
    "relatedTours": [
      "3-day-sahara-desert-tour-from-fes",
      "7-day-morocco-tour-itinerary-from-fes",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $520/person",
    "heroImage": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "Fes medina and historic cultural sites",
      "Ifrane",
      "Cedar Forest"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Errachidia – Dades Gorges",
        "content": "The 4 Days From Fes to Merzouga starts with an early pick up from your accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. Later, you continue to Midelt, where lunch will be served. Next, you head to Errachidia, driving through the Tizi-n-Tilghmt pass, and along the Ziz river Once you reach Errachidia. You head to Dades Gorges through Boumalne Dades, inevitable stops at the “monkey fingers” rock formation. And on a spot atop of a mountain overlooking the Dades valley. Dinner and overnight in a hotel."
      },
      {
        "day": "Day 2",
        "title": "Dades gorges – Todra Gorges – Erfoud – Merzouga Sahara – Overnight in a Luxury Camp",
        "content": "After breakfast, you continue to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. You can wander in the gorges and appreciate the beauty of the landscape. Next, you continue our way through the palm groves of Touroug and Tinjdad. Enjoy free time for lunch on the way. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 3",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Palm Grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly, you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in a palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 4",
        "title": "Merzouga – Rissani – Erfoud – Ziz valley – Errachidia – Ifrane – Fes",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Next, you drive through the Cedar Forest and Ifrane to reach Fes. Finally, you are dropped off at the airport or your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Fes",
        "day": "Day 1",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Errachidia – Dades Gorges",
        "desc": "The 4 Days From Fes to Merzouga starts with an early pick up from your accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane, f...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 2,
        "name": "Dades gorges",
        "day": "Day 2",
        "subtitle": "Dades gorges – Todra Gorges – Erfoud – Merzouga Sahara – Overnight in a Luxury Camp",
        "desc": "After breakfast, you continue to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 3,
        "name": "Explore Merzouga region",
        "day": "Day 3",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Palm Grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 4,
        "name": "Merzouga",
        "day": "Day 4",
        "subtitle": "Merzouga – Rissani – Erfoud – Ziz valley – Errachidia – Ifrane – Fes",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          34.0331,
          -5.0003
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-itinerary-desert-tour-from-fes/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 8 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "4-day-morocco-tour-from-casablanca",
    "title": "4-Day Morocco Tour from Casablanca to Marrakech | Sahara Star Tours",
    "shortTitle": "4-Day Morocco Tour from Casablanca to Marrakech",
    "description": "Private 4-day Morocco tour from Casablanca to Marrakech. Explore Merzouga, Fes. Local support and flexible planning.",
    "aboutHtml": "This private 4-day Morocco journey begins in Casablanca and finishes in Marrakech. Along the route, you will experience Casablanca, Fes, Ifrane, Cedar Forest, Midelt, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "4 Days / 3 Nights",
    "durationDays": 4,
    "startingFrom": "Casablanca",
    "departureCity": "Casablanca",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Casablanca",
      "Marrakech",
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Rissani"
    ],
    "relatedTours": [
      "6-days-desert-tour-from-casablanca",
      "7-day-morocco-tour-from-casablanca",
      "14-days-grand-morocco-tour-itinerary-from-casablanca"
    ],
    "price": "From $520/person",
    "heroImage": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival in Casablanca – Drive to Fes",
        "content": "Your 4 Day journey begins with a pick-up from the airport or your accommodation in Casablanca, Morocco’s economic capital. You’ll start with a visit to the iconic Hassan II Mosque, one of the largest and most impressive mosques in the world. After the visit, travel inland to the imperial city of Fes. Upon arrival, enjoy a short stop at the Royal Palace Gate, next spend the evening at leisure exploring the medina or relaxing in your Riad. Overnight stay in a traditional Riad in Fes."
      },
      {
        "day": "Day 2",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Desert",
        "content": "After breakfast, depart Fes and drive south through Imouzzer toward the alpine town of Ifrane, often referred to as “the Switzerland of Morocco” due to its European-style architecture and cool climate. Continue through the Cedar Forest of Azrou, where you may encounter wild Barbary macaques. Later, stop in Midelt for lunch, before crossing the scenic Tizi-n-Tilghmt Pass and the Ziz Valley, with photo stops along the way. By late afternoon, arrive in the Merzouga Sahara Desert, where you’ll ride camels across the golden dunes. Stop atop a high dune to enjoy the sunset, next continue to your luxury desert camp, blending traditional nomadic style with modern comfort. Enjoy dinner, live Berber music, and stargazing under the vast desert sky. Overnight in a luxury camp in Merzouga."
      },
      {
        "day": "Day 3",
        "title": "Merzouga – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "After breakfast, leave the desert and visit Rissani, the former capital of the Tafilalet region and a vibrant trading center. Explore its traditional souk, especially lively on market days (Tuesdays, Thursdays, and Sundays). Continue to Erfoud, known for its fossil workshops, next drive through the palm groves of Touroug and Tinjdad. Arrive at the dramatic Todra Gorges, where the Todra River has carved towering canyons into the mountains. Take time to walk through the gorge and enjoy lunch at a local restaurant. In the afternoon, continue to the Dades Valley via Boumalne Dades, stopping at the famous “Monkey Fingers” rock formations and a scenic viewpoint over the valley. Dinner and overnight in a Riad in the Dades Valley."
      },
      {
        "day": "Day 4",
        "title": "Dades Valley – Rose Valley – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
        "content": "After breakfast, depart for Kalaat M’Gouna, located in the heart of the Rose Valley, known for its annual Rose Festival in May and locally made rose products. Travel through the Skoura Palm Grove, next arrive in Ouarzazate, often called the “Hollywood of Africa.” Visit the famous film studios where movies like Gladiator and The Mummy were filmed. Next, explore the UNESCO-listed Kasbah of Ait Ben Haddou, a beautifully preserved fortified village featured in Game of Thrones, Gladiator, and more. In the afternoon, drive across the High Atlas Mountains via the Tizi n'Tichka Pass, with stops for photos and lunch. Arrive in Marrakech by Late afternoon.."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival in Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival in Casablanca – Drive to Fes",
        "desc": "Your 4 Day journey begins with a pick-up from the airport or your accommodation in Casablanca, Morocco’s economic capital. You’ll start with a visit t...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 2,
        "name": "Fes",
        "day": "Day 2",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Desert",
        "desc": "After breakfast, depart Fes and drive south through Imouzzer toward the alpine town of Ifrane, often referred to as “the Switzerland of Morocco” due t...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 3,
        "name": "Merzouga",
        "day": "Day 3",
        "subtitle": "Merzouga – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "After breakfast, leave the desert and visit Rissani, the former capital of the Tafilalet region and a vibrant trading center. Explore its traditional ...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 4,
        "name": "Dades Valley",
        "day": "Day 4",
        "subtitle": "Dades Valley – Rose Valley – Skoura – Ouarzazate – Ait Ben Haddou – Marrakech",
        "desc": "After breakfast, depart for Kalaat M’Gouna, located in the heart of the Rose Valley, known for its annual Rose Festival in May and locally made rose p...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.5731,
        -7.5898
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/4-day-morocco-tour-from-casablanca/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Casablanca, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "4-days-marrakech-to-fes-desert-tour",
    "title": "4-Day Marrakech to Fes Desert Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "4-Day Marrakech to Fes Desert Tour via Merzouga",
    "description": "Private 4-day Morocco desert tour from Marrakech to Fes. Explore Merzouga, Erg Chebbi, Marrakech. Local support and flexible planning.",
    "aboutHtml": "This private 4-day Morocco journey begins in Marrakech and finishes in Fes. Along the route, you will experience Marrakech, High Atlas Mountains, Ait Ben Haddou, Ouarzazate, Todra Gorges, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "4 Days / 3 Nights",
    "durationDays": 4,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Fes",
    "destinations": [
      "Marrakech",
      "Fes",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Todra Gorges",
      "Erfoud",
      "Merzouga",
      "Erg Chebbi"
    ],
    "relatedTours": [
      "3-days-desert-tour-marrakech-to-fes",
      "5-days-marrakech-to-fes-morocco-sahara-desert-tour",
      "day-trip-ait-ben-haddou"
    ],
    "price": "From $520/person",
    "heroImage": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – High Atlas mountains – Ait Ben Haddou Kasbah – Ouarzazate – Rose Valley – Boumalne Dades",
        "content": "The 4 days Marrakech to Fes desert tour starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes. After that you continue to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. Next, you head to “The gate of the desert” Ouarzazate. Visit the Atlas Studio where famous movies were shot. Next continue to Rose Valley. A Rose Festival is held annually in May, where the locals offer their rose products, from perfumes, rose water, oil, to cosmetic products. Next, you drive to Boumalne dades, Dinner and overnight In a hotel or a Riad"
      },
      {
        "day": "Day 2",
        "title": "Boumalne Dades – Todra Gorges – Erfoud – Merzouga Sahara – overnight in a luxury camp",
        "content": "After breakfast, enjoy the spectacular landscape of Dades Gorges. Next, you continue to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. Enjoy free time for lunch. You can wander in the gorges and appreciate the beauty of the landscape. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp."
      },
      {
        "day": "Day 3",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly, you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in a palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 4",
        "title": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "content": "On the last day of your 4 days Marrakech to Fes desert tour. You leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Enjoy free time for lunch in Midelt. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that you visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Finally, you are dropped off at the airport or your accommodation in Fes."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Marrakech – High Atlas mountains – Ait Ben Haddou Kasbah – Ouarzazate – Rose Valley – Boumalne Dades",
        "desc": "The 4 days Marrakech to Fes desert tour starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fasci...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Boumalne Dades",
        "day": "Day 2",
        "subtitle": "Boumalne Dades – Todra Gorges – Erfoud – Merzouga Sahara – overnight in a luxury camp",
        "desc": "After breakfast, enjoy the spectacular landscape of Dades Gorges. Next, you continue to Todra Gorges, the course of Todra River has carved out a grand...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 3,
        "name": "Explore Merzouga region",
        "day": "Day 3",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 4,
        "name": "Merzouga Dunes",
        "day": "Day 4",
        "subtitle": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "desc": "On the last day of your 4 days Marrakech to Fes desert tour. You leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani sti...",
        "coords": [
          34.0331,
          -5.0003
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/4-days-marrakech-to-fes-desert-tour/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "5-day-morocco-sahara-tour-from-casablanca",
    "title": "5-Day Morocco Sahara Desert Tour from Casablanca | Sahara Star Tours",
    "shortTitle": "5-Day Morocco Sahara Desert Tour from Casablanca",
    "description": "Private 5-day Morocco desert tour from Casablanca to Marrakech. Explore Fes. Local support and flexible planning.",
    "aboutHtml": "This private 5-day Morocco journey begins in Casablanca and finishes in Marrakech. Along the route, you will experience Casablanca, Volubilis, Meknes, Fes, Ifrane, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "startingFrom": "Casablanca",
    "departureCity": "Casablanca",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Casablanca",
      "Marrakech",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley"
    ],
    "relatedTours": [
      "6-days-desert-tour-from-casablanca",
      "7-day-morocco-tour-from-casablanca",
      "14-days-grand-morocco-tour-itinerary-from-casablanca"
    ],
    "price": "From $650/person",
    "heroImage": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival in Casablanca",
        "content": "On the first day of your 5 Day Morocco Tour, you’ll welcome you upon arrival at the airport or pick you up from your accommodation in Casablanca—Morocco’s largest city and economic center. Your journey begins with a visit to the spectacular Hassan II Mosque, perched on a promontory overlooking the Atlantic Ocean. Its intricate architecture and seaside setting make it one of Casablanca’s most memorable landmarks. After some free time for lunch, you continue exploring the highlights of Casablanca. Depending on your arrival time, the tour may include: The order and number of visits may vary according to your arrival time. Overnight stay at a hotel in Casablanca."
      },
      {
        "day": "Day 2",
        "title": "Casablanca – Volubilis – Meknes – Fes",
        "content": "After breakfast, you depart Casablanca to visit the ancient Roman ruins of Volubilis, a UNESCO World Heritage Site with well-preserved mosaics, columns, and arches. Next, you drive to Meknes, one of Morocco’s imperial cities, where you visit Bab Mansour, the Sahrij Souani basin, the royal granaries, and the Mausoleum of Moulay Ismail. Afterward, you continue to Fes. If time allows, you can stop for photographs at the Royal Palace gates before dropping you off at your riad for the night."
      },
      {
        "day": "Day 3",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "content": "After breakfast, you drive south through Imouzzer to visit Ifrane, known for its cool climate and alpine-style houses. Next, you continue to the Cedar Forest, where Barbary macaques may be seen. Later, you stop near Midelt for lunch before travelling through the Tizi n’Talghamt pass and along the Ziz Valley, with stops for panoramic views. You reach Merzouga in the afternoon. A 4×4 takes you toward the camp or to the camel departure area if you choose the sunset camel ride. A 4×4 transfer is also available instead of the camel ride. After enjoying the sunset over the dunes, you’ll settle into the camp for dinner, traditional music, and an overnight stay."
      },
      {
        "day": "Day 4",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Wake up early if you’d like to watch the sunrise over the desert. After breakfast, return to Merzouga, where your driver awaits. Next, you leave for Rissani, the historic trading town of the Tafilalet region. After a stroll through the souk, you continue to Erfoud, where you can visit a fossil workshop. Next, you drive through the palm groves of Touroug and Tinjdad to reach the Todra Gorges. You’ll have time to walk through the gorge and enjoy the scenery, followed by free time for lunch. Next, you continue through Boumalne Dades to the Dades Valley, stopping to see the “Monkey Fingers” rock formations and a panoramic view of the valley. Dinner and overnight stay at a hotel."
      },
      {
        "day": "Day 5",
        "title": "Dades Valley – Rose Valley – Skoura – Ouarzazate – Ait Ben Haddou – High Atlas Mountains – Marrakech",
        "content": "After breakfast, you continue to Kalaa Magouna and the Rose Valley (Optional Stop at one of the rose cooperatives), next drive through the palm groves of Skoura to Ouarzazate. There, you can visit the film studios before continuing to the famous Kasbah of Ait Ben Haddou, a fortified village recognized as a UNESCO World Heritage Site. Next, you cross the High Atlas Mountains via the Tizi n’Tichka pass, stopping for lunch and photographs along the way. Finally, you arrive in Marrakech and drop you off at your accommodation or the airport, according to your booking. If you have a flight on the final day, please share its departure time in advance. This concludes your 5 days in Morocco."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival in Casablanca",
        "day": "Day 1",
        "subtitle": "Arrival in Casablanca",
        "desc": "On the first day of your 5 Day Morocco Tour, you’ll welcome you upon arrival at the airport or pick you up from your accommodation in Casablanca—Moroc...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 2,
        "name": "Casablanca",
        "day": "Day 2",
        "subtitle": "Casablanca – Volubilis – Meknes – Fes",
        "desc": "After breakfast, you depart Casablanca to visit the ancient Roman ruins of Volubilis, a UNESCO World Heritage Site with well-preserved mosaics, column...",
        "coords": [
          33.5731,
          -7.5898
        ]
      },
      {
        "number": 3,
        "name": "Fes",
        "day": "Day 3",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "desc": "After breakfast, you drive south through Imouzzer to visit Ifrane, known for its cool climate and alpine-style houses. Next, you continue to the Cedar...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 4,
        "name": "Merzouga Sahara",
        "day": "Day 4",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Wake up early if you’d like to watch the sunrise over the desert. After breakfast, return to Merzouga, where your driver awaits. Next, you leave for R...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 5,
        "name": "Dades Valley",
        "day": "Day 5",
        "subtitle": "Dades Valley – Rose Valley – Skoura – Ouarzazate – Ait Ben Haddou – High Atlas Mountains – Marrakech",
        "desc": "After breakfast, you continue to Kalaa Magouna and the Rose Valley (Optional Stop at one of the rose cooperatives), next drive through the palm groves...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        33.5731,
        -7.5898
      ],
      [
        33.5731,
        -7.5898
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/5-day-morocco-sahara-tour-from-casablanca/images/gallery_8.webp",
        "cap": "Gallery 8"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      },
      {
        "question": "How do I book the tour?",
        "answer": "Send an inquiry with your travel dates, group size, preferred accommodation level, and pickup location. The Sahara Star Tours team can then confirm availability and finalize the itinerary before you travel."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "5-days-in-northern-morocco-from-tangier",
    "title": "5-Day Northern Morocco Tour from Tangier | Sahara Star Tours",
    "shortTitle": "5-Day Northern Morocco Tour from Tangier",
    "description": "Private 5-day Morocco tour from Tangier to Casablanca. Explore Fes, Chefchaouen, Rabat. Local support and flexible planning.",
    "aboutHtml": "This private 5-day Morocco journey begins in Tangier and finishes in Casablanca. Along the route, you will experience Tangier, Chefchaouen, Volubilis, Meknes, Fes, and more. The itinerary combines cultural visits, scenic landscapes, and comfortable overland travel with time to experience each destination. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "imperial-cities",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "startingFrom": "Tangier",
    "departureCity": "Tangier",
    "arrivalCity": "Casablanca",
    "destinations": [
      "Tangier",
      "Casablanca",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Rabat"
    ],
    "relatedTours": [
      "6-days-morocco-tour-itinerary-from-tangier-to-marrakech",
      "10-days-morocco-holiday-itinerary-from-tangier",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $650/person",
    "heroImage": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/main.webp",
    "highlights": [
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites",
      "Tangier",
      "Volubilis",
      "Meknes",
      "Rabat"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival to Tangier – Chefchaouen",
        "content": "On the first day of your 5 days in North Morocco tour. Your driver will pick you up from your accommodation, the airport or the port in Tangier. Known as “the Bride of the North,” The city lies in northwestern Morocco, where the Mediterranean Sea meets the Atlantic Ocean off Cape Spartel. Start by exploring the beautiful city, the cave of Hercules and also the Cape Spartel. Enjoy free time for lunch. Next, you drive inland to Chefchaouen by passing through the city of Tetouan and the Rif mountains. Stops will be made for panoramic views. Overnight stay in a Riad in Chefchaouen."
      },
      {
        "day": "Day 2",
        "title": "Sightseeing Chefchaouen the blue city",
        "content": "After breakfast, you will explore Chefchaouen, the blue city. Also known as Achaoun, which means horns in Berber. The city is located in the Rif mountains northwest Morocco. It is famous for its buildings and alleyways painted in white and blue. Firstly you will stroll in its charming old medina. Which has so many beautiful authentic blue doors and whitewashed walls. Enjoy free time for lunch. In the afternoon, you can hike to the Spanish mosque. Located on a high ground, where you can see the spectacular view of the whole blue city. Finally, return to your hotel. Overnight stay in the same Riad."
      },
      {
        "day": "Day 3",
        "title": "Chefchaouen – the Roman ruins of Volubilis – Meknes – Fes",
        "content": "After breakfast, you can wander in the beautiful alleyways of the blue city Chefchaouen. Next, you drive to visit the ancient Roman ruins Volubilis. It is well preserved, as it is recognized as a UNESCO World Heritage Site by the UNESCO. It has many beautiful mosaics scattered here and there, along with beautiful ancient pillars and archways. After strolling in the ruins, you drive 30 km to visit one of the imperial cities, Meknes the Ismaili capital. In which you visit Bab Al-Mansour, Sahrij Souani basin, the Royal stables, the granary and also the Moulay Ismail Mausoleum. Next, you head to Fes. Overnight stay in a Riad"
      },
      {
        "day": "Day 4",
        "title": "Sightseeing Fes with a Local Guide",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 5",
        "title": "Fes – Rabat – Casablanca",
        "content": "On the last day of your 5 days in Northern Morocco, you leave Fes after breakfast. Next drive to Rabat one of the imperial cities in Morocco, and the current capital. It is located on the northwest of Morocco. You will visit the Highlights of the city, including: the Hassan tower, the Mausoleum of Mohammed V and also The Kasbah of Oudaya. Enjoy free time for lunch, next you head to Casablanca the economical center of Morocco, visit Hassan II mosque the largest mosque in Morocco. Finally, Drop you off at airport or any Location in Casablanca. End of the tour."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival to Tangier",
        "day": "Day 1",
        "subtitle": "Arrival to Tangier – Chefchaouen",
        "desc": "On the first day of your 5 days in North Morocco tour. Your driver will pick you up from your accommodation, the airport or the port in Tangier. Known...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 2,
        "name": "Sightseeing Chefchaouen the blue city",
        "day": "Day 2",
        "subtitle": "Sightseeing Chefchaouen the blue city",
        "desc": "After breakfast, you will explore Chefchaouen, the blue city. Also known as Achaoun, which means horns in Berber. The city is located in the Rif mount...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 3,
        "name": "Chefchaouen",
        "day": "Day 3",
        "subtitle": "Chefchaouen – the Roman ruins of Volubilis – Meknes – Fes",
        "desc": "After breakfast, you can wander in the beautiful alleyways of the blue city Chefchaouen. Next, you drive to visit the ancient Roman ruins Volubilis. I...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 4,
        "name": "Sightseeing Fes with a Local Guide",
        "day": "Day 4",
        "subtitle": "Sightseeing Fes with a Local Guide",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 5,
        "name": "Fes",
        "day": "Day 5",
        "subtitle": "Fes – Rabat – Casablanca",
        "desc": "On the last day of your 5 days in Northern Morocco, you leave Fes after breakfast. Next drive to Rabat one of the imperial cities in Morocco, and the ...",
        "coords": [
          33.5731,
          -7.5898
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        33.5731,
        -7.5898
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/5-days-in-northern-morocco-from-tangier/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Tangier, depending on the itinerary. The tour finishes in Casablanca; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 30 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      },
      {
        "question": "How do I book the tour?",
        "answer": "Send an inquiry with your travel dates, group size, preferred accommodation level, and pickup location. The Sahara Star Tours team can then confirm availability and finalize the itinerary before you travel."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "imperial-cities",
      "cultural",
      "heritage"
    ]
  },
  {
    "slug": "5-days-marrakech-to-fes-morocco-sahara-desert-tour",
    "title": "5-Day Marrakech to Fes Sahara Desert Tour | Sahara Star Tours",
    "shortTitle": "5-Day Marrakech to Fes Sahara Desert Tour",
    "description": "Private 5-day Morocco desert tour from Marrakech to Fes. Explore Marrakech, Ait Ben Haddou, Todra Gorges. Local support and flexible planning.",
    "aboutHtml": "This private 5-day Morocco journey begins in Marrakech and finishes in Fes. Along the route, you will experience Marrakech, High Atlas Mountains, Ait Ben Haddou, Ouarzazate, Skoura, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Fes",
    "destinations": [
      "Marrakech",
      "Fes",
      "High Atlas Mountains",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Skoura",
      "Dades Valley",
      "Todra Gorges",
      "Erfoud"
    ],
    "relatedTours": [
      "3-days-desert-tour-marrakech-to-fes",
      "4-days-marrakech-to-fes-desert-tour",
      "day-trip-ait-ben-haddou"
    ],
    "price": "From $650/person",
    "heroImage": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – High Atlas mountains – Tizi n'Tichka pass – Ait Ben Haddou Kasbah – Ouarzazate",
        "content": "The 5 days Marrakech to Fes desert tour starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes. Next you visit the Kasbah of Telouat. After that you continue to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. Next, you head to “The gate of the desert” Ouarzazate. Dinner and overnight stay in a hotel"
      },
      {
        "day": "Day 2",
        "title": "Ouarzazate – Palm groves of Skoura – Amridil Kasbah – Rose valley – Dades Valley",
        "content": "After breakfast, you explore the city of Ouarzazate. Firstly, you visit the Atlas studios, where various famous movies were shot, and also visit the Taourirt Kasbah -A fortified mud castle, and one of the most ancient and spectacular Ksars in Morocco. After that you drive east to visit Amridil Kasbah surrounded by palm groves in Skoura. Next continue to Kalaa Magouna famous for the Rose Valley. A Rose Festival is held annually in May, where the locals offer their rose products, from: perfumes, rose water, oil, to cosmetic products. Next, you drive to Dades valley through Boumalne Dades. Inevitable stops at the “monkey fingers” rock formation, and on a spot atop a mountain overlooking the Dades valley. Dinner and overnight in a hotel in Boumalne Dades."
      },
      {
        "day": "Day 3",
        "title": "Boumalne Dades – Todra Gorges – Erfoud – Merzouga Sahara – Overnight in a Luxury Camp",
        "content": "After breakfast, you continue the 5 days desert tour to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. You can wander in the gorges and appreciate the beauty of the landscape. Next drive through the palm groves of Touroug and Tinjdad. Enjoy free time for lunch on the way. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp. There, you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp."
      },
      {
        "day": "Day 4",
        "title": "Explore Merzouga Region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Desert Oasis",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly, you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in a palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 5",
        "title": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "content": "On the last day of your 5 days Marrakech to Fes desert tour. You wake up early morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels or via the Camp’s 4×4 to Merzouga where the driver awaits. Next, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Enjoy free time for lunch in Midelt. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that you visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Finally, you are dropped off at the airport or your accommodation in Fes. End of the tour"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Marrakech – High Atlas mountains – Tizi n'Tichka pass – Ait Ben Haddou Kasbah – Ouarzazate",
        "desc": "The 5 days Marrakech to Fes desert tour starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fasci...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Ouarzazate",
        "day": "Day 2",
        "subtitle": "Ouarzazate – Palm groves of Skoura – Amridil Kasbah – Rose valley – Dades Valley",
        "desc": "After breakfast, you explore the city of Ouarzazate. Firstly, you visit the Atlas studios, where various famous movies were shot, and also visit the T...",
        "coords": [
          31.4239,
          -5.9869
        ]
      },
      {
        "number": 3,
        "name": "Boumalne Dades",
        "day": "Day 3",
        "subtitle": "Boumalne Dades – Todra Gorges – Erfoud – Merzouga Sahara – Overnight in a Luxury Camp",
        "desc": "After breakfast, you continue the 5 days desert tour to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -M...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 4,
        "name": "Explore Merzouga Region",
        "day": "Day 4",
        "subtitle": "Explore Merzouga Region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Desert Oasis",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Dunes",
        "day": "Day 5",
        "subtitle": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "desc": "On the last day of your 5 days Marrakech to Fes desert tour. You wake up early morning to contemplate the desert sunrise in the middle of the desert. ...",
        "coords": [
          34.0331,
          -5.0003
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.4239,
        -5.9869
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/5-days-marrakech-to-fes-morocco-sahara-desert-tour/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "5-days-morocco-desert-tour-itinerary-from-tangier",
    "title": "5-Day Tangier to Marrakech Desert Tour | Sahara Star Tours",
    "shortTitle": "5-Day Tangier to Marrakech Desert Tour",
    "description": "Private 5-day Morocco desert tour from Tangier to Marrakech. Explore Fes, Chefchaouen. Local support and flexible planning.",
    "aboutHtml": "This private 5-day Morocco journey begins in Tangier and finishes in Marrakech. Along the route, you will experience Tangier, Chefchaouen, Volubilis, Meknes, Fes, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "startingFrom": "Tangier",
    "departureCity": "Tangier",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Tangier",
      "Marrakech",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt"
    ],
    "relatedTours": [
      "5-days-in-northern-morocco-from-tangier",
      "6-days-morocco-tour-itinerary-from-tangier-to-marrakech",
      "10-days-morocco-holiday-itinerary-from-tangier"
    ],
    "price": "From $650/person",
    "heroImage": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival to Tangier – Chefchaouen",
        "content": "Your journey begins in Tangier with a private pickup from your accommodation, airport, or port. Known as “the Bride of the North,” The city lies in northwestern Morocco, where the Mediterranean Sea meets the Atlantic Ocean off Cape Spartel. Start by exploring the beautiful city, the cave of Hercules and also the Cape Spartel. Enjoy free time for lunch. Next, you drive inland to Chefchaouen by passing through the city of Tetouan and the Rif mountains. Stops will be made for panoramic views. Overnight stay in a Riad in Chefchaouen."
      },
      {
        "day": "Day 2",
        "title": "Chefchaouen – the Roman ruins of Volubilis – Meknes – Fes",
        "content": "After breakfast, enjoy free time to wander the blue-washed alleys of Chefchaouen. Next, you continue to the ancient Roman city of Volubilis (UNESCO World Heritage Site), known for its well-preserved mosaics, columns, and arches. After exploring the ruins, you drive about 30 km to Meknes, the Ismaili capital and one of Morocco’s imperial cities, to visit Bab al-Mansour, Sahrij Souani basin, the Royal Stables and granaries, and the Mausoleum of Moulay Ismail. Next, you head to Fes. Overnight in a riad."
      },
      {
        "day": "Day 3",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Desert",
        "content": "After breakfast, you drive south via Imouzzer to Ifrane, famed for its cool climate, winter snow, and alpine-style chalets—hence the nickname “Switzerland of Morocco.” Next, you continue to the Cedar Forest near Azrou, home to wild Barbary macaques; enjoy a short walk among the ancient trees and, if you wish, feed the macaques as you stroll. Next, you continue to Midelt for free time at lunch. In the afternoon, you cross the Tizi n’Talghamt Pass and follow the Ziz Valley, stopping for panoramic viewpoints. By late afternoon, you reach the Sahara dunes of Merzouga. Switch to camels and ride across the sands, pausing atop a high dune to watch the sunset. Continue to your desert camp—a blend of traditional nomad tents and modern comforts—where you can enjoy Berber drumming around the campfire beneath a sky full of stars. Overnight at a desert camp in Merzouga."
      },
      {
        "day": "Day 4",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Wake early to watch the sunrise over the dunes—it’s a must. After breakfast at camp, depart the Sahara for Rissani, the former capital of Tafilalet and a key trading hub with a lively souk on Tuesdays, Thursdays, and Sundays. Continue to Erfoud to visit a fossilized marble workshop. Drive through the palm groves of Touroug and Tinjdad to reach the Todra Gorges, where the Todra River has carved towering red cliffs popular with rock climbers. Enjoy free time to wander the canyon and have lunch at a local restaurant. In the afternoon, continue to the Dades Valley via Boumalne Dades, stopping at the “Monkey Fingers” rock formations and a scenic viewpoint over the valley. Dinner and overnight in a Riad in Dades."
      },
      {
        "day": "Day 5",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "After breakfast, you continue to Kelaat M’Gouna to explore the Valley of Roses. Each May the town hosts the Rose Festival, and local cooperatives offer rose-based products—rose water, essential oils, and cosmetics. Next, you drive through the palm groves of Skoura to visit the historic Kasbah Amridil. Next, you reach Ouarzazate for a tour of the film studios. You continue to the famous Kasbah of Ait Ben Haddou, a UNESCO-listed fortified village that has featured in films such as Gladiator, Alexander, and The Mummy, as well as the series Game of Thrones. Finally, you cross the High Atlas Mountains via the Tizi n’Tichka Pass, with stops for lunch and panoramic photos along the way. Arrival in Marrakech and drop-off at your riad. End of 5 Day Tour from Tangier To Marrakech"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival to Tangier",
        "day": "Day 1",
        "subtitle": "Arrival to Tangier – Chefchaouen",
        "desc": "Your journey begins in Tangier with a private pickup from your accommodation, airport, or port. Known as “the Bride of the North,” The city lies in no...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 2,
        "name": "Chefchaouen",
        "day": "Day 2",
        "subtitle": "Chefchaouen – the Roman ruins of Volubilis – Meknes – Fes",
        "desc": "After breakfast, enjoy free time to wander the blue-washed alleys of Chefchaouen. Next, you continue to the ancient Roman city of Volubilis (UNESCO Wo...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 3,
        "name": "Fes",
        "day": "Day 3",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Desert",
        "desc": "After breakfast, you drive south via Imouzzer to Ifrane, famed for its cool climate, winter snow, and alpine-style chalets—hence the nickname “Switzer...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 4,
        "name": "Merzouga Sahara",
        "day": "Day 4",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Wake early to watch the sunrise over the dunes—it’s a must. After breakfast at camp, depart the Sahara for Rissani, the former capital of Tafilalet an...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 5,
        "name": "Dades Valley",
        "day": "Day 5",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "After breakfast, you continue to Kelaat M’Gouna to explore the Valley of Roses. Each May the town hosts the Rose Festival, and local cooperatives offe...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-desert-tour-itinerary-from-tangier/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Tangier, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "5-days-morocco-tour-itinerary-from-fes-marrakech",
    "title": "5-Day Fes to Marrakech Morocco Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "5-Day Fes to Marrakech Morocco Tour via Merzouga",
    "description": "Private 5-day Morocco tour from Fes to Marrakech. Explore Merzouga, Erg Chebbi, Fes. Local support and flexible planning.",
    "aboutHtml": "This private 5-day Morocco journey begins in Fes and finishes in Marrakech. Along the route, you will experience Fes, Ifrane, Cedar Forest, Midelt, Ziz Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "5 Days / 4 Nights",
    "durationDays": 5,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Fes",
      "Marrakech",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Erg Chebbi",
      "Rissani"
    ],
    "relatedTours": [
      "fes-marrakech-3-days-desert-tour",
      "4-day-morocco-desert-tour-from-fes-to-marrakech",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $650/person",
    "heroImage": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "Your 5-day desert journey begins with an early pickup from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. Later, you continue to Midelt, where lunch will be served. Next, you head to the Sahara desert, driving through the Tizi-n-Tilghmt pass, and along. Then, in the afternoon you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 3",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani Souk, you continue to Erfoud, where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. Inevitable stops at the “monkey fingers” rock formation. And on a spot atop a mountain overlooking the Dades valley. Finally, dinner and overnight in a hotel."
      },
      {
        "day": "Day 4",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate",
        "content": "After breakfast, you continue our trip to Kalaa Magouna to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products from perfumes, rose water, oil, to cosmetic products. Enjoy free time for lunch. Next, you drive through the palm groves of Skoura and visit the Kasbah of Amridil. Finally, you reach Ouarzazate, you visit the studios in which famous movies were shot, and also visit the Taourirt Kasbah. Dinner and overnight in a hotel."
      },
      {
        "day": "Day 5",
        "title": "Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "On the last day, you depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And TV series including Game Of Thrones. Next, you continue to Marrakech, by driving through the Tizi n'Tichka pass, and the High Atlas Mountains. Stops will be made for lunch, and to take pictures at interesting spots. Finally, you are dropped off at the airport or your accommodation in Marrakech. End of 5 days Fes to Marrakech desert tour"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Fes",
        "day": "Day 1",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "Your 5-day desert journey begins with an early pickup from the airport or your accommodation in Fes. Next, you drive south through Imouzzer to visit I...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 2,
        "name": "Explore Merzouga region",
        "day": "Day 2",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 3,
        "name": "Merzouga Sahara",
        "day": "Day 3",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 4,
        "name": "Dades Valley",
        "day": "Day 4",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate",
        "desc": "After breakfast, you continue our trip to Kalaa Magouna to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer thei...",
        "coords": [
          31.4239,
          -5.9869
        ]
      },
      {
        "number": 5,
        "name": "Ait Ben Haddou Kasbah",
        "day": "Day 5",
        "subtitle": "Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "On the last day, you depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Fu...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        34.0331,
        -5.0003
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.4239,
        -5.9869
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/5-days-morocco-tour-itinerary-from-fes-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "6-days-morocco-desert-tour-from-marrakech",
    "title": "6-Day Marrakech to Fes Morocco Desert Tour | Sahara Star Tours",
    "shortTitle": "6-Day Marrakech to Fes Morocco Desert Tour",
    "description": "Private 6-day Morocco desert tour from Marrakech to Fes. Explore Merzouga, Erg Chebbi, Marrakech. Local support and flexible planning.",
    "aboutHtml": "This private 6-day Morocco journey begins in Marrakech and finishes in Fes. Along the route, you will experience Marrakech, Ait Ben Haddou, Roses Valley, Dades Valley, Todra Gorges, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "6 Days / 5 Nights",
    "durationDays": 6,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Fes",
    "destinations": [
      "Marrakech",
      "Fes",
      "Ait Ben Haddou",
      "Roses Valley",
      "Dades Valley",
      "Todra Gorges",
      "Merzouga",
      "Erg Chebbi",
      "Erfoud"
    ],
    "relatedTours": [
      "3-days-desert-tour-marrakech-to-fes",
      "4-days-marrakech-to-fes-desert-tour",
      "5-days-marrakech-to-fes-morocco-sahara-desert-tour"
    ],
    "price": "From $790/person",
    "heroImage": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – High Atlas – Ait ben Haddou Kasbah – Roses Valley – Dades Valley",
        "content": "The 6 days Marrakech to Fes desert tour, starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes. After that you continue to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in more many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. Next, you head to “The gate of the desert” Ouarzazate. Enjoy free time for lunch, next you continue to visit the Rose Valley passing through the large palm grove of Skoura. Finally you drive to Boumalne Dades where you spend the night."
      },
      {
        "day": "Day 2",
        "title": "Dades Valley – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "content": "After breakfast, you drive through the Dades valley, you stop on a spot overlooking the valley, to enjoy the spectacular landscape of Dades Gorges. Next, you continue to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. You can wander in the gorges and appreciate the beauty of the landscape. After that you drive through the palm groves of Touroug and Tinjdad. Enjoy free time for lunch on the way. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 3",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Palm Grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels or a 4×4 ride to Merzouga, where the driver awaits. You dedicate the day to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly, you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in a palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 4",
        "title": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Enjoy free time for lunch in Midelt. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that you visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Finally, Night in Fes, Free evening in the medina"
      },
      {
        "day": "Day 5",
        "title": "Guided tour sightseeing Fes",
        "content": "Your driver will pick you up from your accommodation in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 6",
        "title": "Transfer to the airport",
        "content": "Depending on your flight time, your driver will pick you up from the Riad and Drive to Fes Airport. End of the Morocco desert tour from Marrakech."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Marrakech – High Atlas – Ait ben Haddou Kasbah – Roses Valley – Dades Valley",
        "desc": "The 6 days Marrakech to Fes desert tour, starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fasc...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Dades Valley",
        "day": "Day 2",
        "subtitle": "Dades Valley – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "desc": "After breakfast, you drive through the Dades valley, you stop on a spot overlooking the valley, to enjoy the spectacular landscape of Dades Gorges. Ne...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 3,
        "name": "Explore Merzouga region",
        "day": "Day 3",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – Palm Grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 4,
        "name": "Merzouga Dunes",
        "day": "Day 4",
        "subtitle": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 5,
        "name": "Guided tour sightseeing Fes",
        "day": "Day 5",
        "subtitle": "Guided tour sightseeing Fes",
        "desc": "Your driver will pick you up from your accommodation in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperi...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 6,
        "name": "Transfer to the airport",
        "day": "Day 6",
        "subtitle": "Transfer to the airport",
        "desc": "Depending on your flight time, your driver will pick you up from the Riad and Drive to Fes Airport. End of the Morocco desert tour from Marrakech....",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-desert-tour-from-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 30 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "6-days-morocco-tour-itinerary-from-tangier-to-marrakech",
    "title": "6-Day Tangier to Marrakech Desert Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "6-Day Tangier to Marrakech Desert Tour via Merzouga",
    "description": "Private 6-day Morocco desert tour from Tangier to Marrakech. Explore Fes, Chefchaouen. Local support and flexible planning.",
    "aboutHtml": "This private 6-day Morocco journey begins in Tangier and finishes in Marrakech. Along the route, you will experience Tangier, Chefchaouen, Volubilis, Meknes, Fes, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "6 Days / 5 Nights",
    "durationDays": 6,
    "startingFrom": "Tangier",
    "departureCity": "Tangier",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Tangier",
      "Marrakech",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt"
    ],
    "relatedTours": [
      "5-days-in-northern-morocco-from-tangier",
      "10-days-morocco-holiday-itinerary-from-tangier",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $790/person",
    "heroImage": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival in Tangier – Chefchaouen",
        "content": "On the first day of your 6-day tour from Tangier, your driver will pick you up from your accommodation, the airport, or the port in Tangier. Known as “the Bride of the North,” the city lies in the northwest, where the Mediterranean Sea meets the Atlantic Ocean near Cape Spartel. You will begin by exploring the city, including the Hercules Caves and Cape Spartel. You’ll have free time for lunch. Next, you drive inland to Chefchaouen via the city of Tetouan and the Rif Mountains, with stops for panoramic views. Overnight in a hotel in Chefchaouen."
      },
      {
        "day": "Day 2",
        "title": "Chefchaouen – Roman ruins of Volubilis – Meknes – Fes",
        "content": "After breakfast, you can wander the beautiful alleyways of blue Chefchaouen. Next, you drive to the ancient Roman ruins of Volubilis, a UNESCO World Heritage Site renowned for its well-preserved mosaics, columns, and arches. After exploring the ruins, you drive about 30 km to Meknes, the Ismaili capital and one of Morocco’s imperial cities, to visit Bab al-Mansour, the Sahrij Souani basin, the Royal Stables and granaries, and the Mausoleum of Moulay Ismail. Next, you continue to Fes. Overnight in a riad."
      },
      {
        "day": "Day 3",
        "title": "Guided sightseeing in Fes",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 4",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "content": "After breakfast, the 6-day Morocco tour from Tangier continues south through Imouzzer to visit Ifrane, famous for its cool climate, winter snow, and alpine-style houses—hence the nickname “the Switzerland of Morocco.” Next, you continue to the Cedar Forest, home to wild Barbary macaques; enjoy a short walk among the ancient trees. Later, you continue to Midelt for free time at lunch, next drive over the Tizi-n-Talghamt Pass and along the Ziz Valley, with stops for panoramic views. In the afternoon, you reach the Sahara dunes of Merzouga, where you switch to camels and cross the sands, pausing atop a high dune to enjoy the sunset. Continue to your desert camp—a blend of traditional nomad tents and modern comforts—where you can enjoy Berber drumming around the campfire beneath a vast, star-filled sky. Overnight at a Luxury desert camp in Merzouga."
      },
      {
        "day": "Day 5",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Waking early to watch the sunrise is a must. After breakfast, you leave the desert for Rissani, the former capital of Tafilalet and a major trading center with a lively souk on Tuesdays, Thursdays, and Sundays. Continue to Erfoud to visit a fossilized marble workshop. Next, you drive through the palm groves of Touroug and Tinjdad to reach the Todra Gorges, where the Todra River has carved a spectacular canyon with towering red cliffs popular with rock climbers. Enjoy free time to wander the gorge and have lunch. In the afternoon, continue to the Dades Valley via Boumalne Dades, stopping at the “Monkey Fingers” rock formations and a scenic viewpoint over the valley. Dinner and overnight in a hotel."
      },
      {
        "day": "Day 6",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
        "content": "After breakfast, the tour continues to Kelaat M’Gouna to visit the Valley of Roses. Each May, the Rose Festival showcases local products—rose water, essential oils, and cosmetics. Next, you drive through the palm groves of Skoura, you reach Ouarzazate to tour the film studios. You continue to the famous Kasbah of Ait Ben Haddou, a UNESCO-listed fortified village featured in films such as Gladiator, Alexander, and The Mummy, as well as the series Game of Thrones. Afterwards, you cross the High Atlas Mountains via the Tizi n’Tichka Pass, with stops for lunch and photos. Finally, you drop you at your accommodation (riad) in Marrakech.."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival in Tangier",
        "day": "Day 1",
        "subtitle": "Arrival in Tangier – Chefchaouen",
        "desc": "On the first day of your 6-day tour from Tangier, your driver will pick you up from your accommodation, the airport, or the port in Tangier. Known as ...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 2,
        "name": "Chefchaouen",
        "day": "Day 2",
        "subtitle": "Chefchaouen – Roman ruins of Volubilis – Meknes – Fes",
        "desc": "After breakfast, you can wander the beautiful alleyways of blue Chefchaouen. Next, you drive to the ancient Roman ruins of Volubilis, a UNESCO World H...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 3,
        "name": "Guided sightseeing in Fes",
        "day": "Day 3",
        "subtitle": "Guided sightseeing in Fes",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 4,
        "name": "Fes",
        "day": "Day 4",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "desc": "After breakfast, the 6-day Morocco tour from Tangier continues south through Imouzzer to visit Ifrane, famous for its cool climate, winter snow, and a...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Sahara",
        "day": "Day 5",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Waking early to watch the sunrise is a must. After breakfast, you leave the desert for Rissani, the former capital of Tafilalet and a major trading ce...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 6,
        "name": "Dades Valley",
        "day": "Day 6",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
        "desc": "After breakfast, the tour continues to Kelaat M’Gouna to visit the Valley of Roses. Each May, the Rose Festival showcases local products—rose water, e...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/6-days-morocco-tour-itinerary-from-tangier-to-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Tangier, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 30 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "7-day-morocco-tour-itinerary-from-fes",
    "title": "7-Day Morocco Desert & Imperial Cities Tour from Fes | Sahara Star Tours",
    "shortTitle": "7-Day Morocco Desert & Imperial Cities Tour from Fes",
    "description": "Private 7-day Morocco desert tour from Fes (round-trip). Explore Fes, Chefchaouen, Marrakech. Local support and flexible planning.",
    "aboutHtml": "This private 7-day Morocco journey begins in Fes and finishes in Fes. Along the route, you will experience Fes, Meknes, Volubilis, Chefchaouen, Rabat, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "7 Days / 6 Nights",
    "durationDays": 7,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Fes",
    "destinations": [
      "Fes",
      "Meknes",
      "Volubilis",
      "Chefchaouen",
      "Rabat",
      "Casablanca",
      "Marrakech",
      "High Atlas Mountains"
    ],
    "relatedTours": [
      "3-day-sahara-desert-tour-from-fes",
      "4-day-morocco-itinerary-desert-tour-from-fes",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $890/person",
    "heroImage": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fes – Meknes – Volubilis ruins – Chefchaouen",
        "content": "Your 7-day desert journey begins with an early pickup from the airport or your accommodation in Fes. Next you depart to visit Meknes the Ismaili capital and one of the imperial cities. In which you visit: Bab Al-Mansour, Sahrij Souani basin, the Royal stables, the granary and also the Moulay Ismail Mausoleum. Enjoy free time for lunch. Next, you drive 30 km away from Meknes to visit the ancient Roman ruins of Volubilis. It is well preserved, as it is recognized as a UNESCO World Heritage Site by the UNESCO. It has many beautiful mosaics scattered here and there, along with ancient pillars and archways. After strolling in the ruins, you head north through Ouazzane, to reach Chefchaouen in the Rif Mountains. Also known as the Blue city. The city is famous for its buildings and alleyways painted in blue. Overnight stay in a hotel."
      },
      {
        "day": "Day 2",
        "title": "Chefchaouen – Rabat the capital",
        "content": "After breakfast, you can wander in the blue city. Next, you drive to Rabat through the Rif mountains. The city of Rabat is one of the imperial cities in Morocco, and the current capital. It is located in northwest Morocco on the Atlantic coast. You will visit the Highlights of the city. Including: the Hassan tower, the Mausoleum of Mohammed V and The Kasbah of Oudaya. Overnight stay in a Riad."
      },
      {
        "day": "Day 3",
        "title": "Rabat – Casablanca – Marrakech",
        "content": "After breakfast, you depart from Rabat and drive along the coastline to Casablanca. The city is the economical center and the largest city in Morocco. Firstly, you will visit Hassan II mosque the second largest mosque in the continent. Next you visit Casablanca Cornish, Mohammed V square and a stop at Rick’s Café. Finally, you drive inland to Marrakech the red city and one of the imperial cities. You can wander in the famous Jemaa El-Fna square. Overnight stay in a Riad."
      },
      {
        "day": "Day 4",
        "title": "Guided Tour sightseeing Marrakech",
        "content": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech is rich in culture and architectural beauty. The tour includes a visit to the stunning 19th-century Bahia Palace, followed by the beautifully preserved Ben Youssef Madrasa, a former Islamic school showcasing traditional Moroccan design. You’ll also explore the lively medina and its souks, filled with colorful stalls and skilled artisans, experience the vibrant atmosphere of Jamaa El Fna Square, and admire the Koutoubia Mosque from outside, the largest in the city. Enjoy free time for lunch. In the afternoon, meet your driver to visit the iconic Majorelle Garden (requires online pre-booking), followed by a drive through Gueliz, the modern district of Marrakech, before returning to your Riad."
      },
      {
        "day": "Day 5",
        "title": "Marrakech – High Atlas Mountains – Ait ben Haddou Kasbah – Roses Valley – Dades Valley",
        "content": "Drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes and Berber Villages. Our next stop is the renowned Kasbah of Ait Ben Haddou, a fortified village and UNESCO World Heritage Site. This iconic site has served as the backdrop for numerous films, including Gladiator, Alexander, The Mummy, and popular TV series like Game of Thrones. 40-minute hike to explore the kasbah on foot and enjoy panoramic views from the top. Next, you head to “The gate of the desert” Ouarzazate. Enjoy free time for lunch, next you continue to visit the Rose Valley passing through the large palm grove of Skoura. Finally you drive to Boumalne Dades where you spend the night. (Dinner Included)"
      },
      {
        "day": "Day 6",
        "title": "Dades Valley – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "content": "After breakfast, you drive through the scenic Dades Valley, making a stop at a panoramic viewpoint. Next, you continue to the spectacular Todra Gorges, where the Todra River has carved a dramatic canyon with towering red cliffs. You’ll have free time to walk through the gorge and enjoy the natural beauty of this unique setting. The journey next takes us through the lush palm groves of Touroug and Tinjdad, with free time for lunch along the way. In the afternoon, you arrive in the golden dunes of the Merzouga Sahara Desert, where your camels await. Embark on a peaceful camel trek across the dunes, with a stop atop a high dune to witness the magical desert sunset. You’ll next continue to a luxury desert camp, where you’ll be welcomed with traditional Berber hospitality. Enjoy dinner, accompanied by Berber drumming and dancing around the campfire. Overnight stay in the camp."
      },
      {
        "day": "Day 7",
        "title": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble. After that, you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Enjoy free time for lunch in Midelt or on the way. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that you visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Finally, Drop off At any Location in Fes. End of the tour"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Fes",
        "day": "Day 1",
        "subtitle": "Fes – Meknes – Volubilis ruins – Chefchaouen",
        "desc": "Your 7-day desert journey begins with an early pickup from the airport or your accommodation in Fes. Next you depart to visit Meknes the Ismaili capit...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 2,
        "name": "Chefchaouen",
        "day": "Day 2",
        "subtitle": "Chefchaouen – Rabat the capital",
        "desc": "After breakfast, you can wander in the blue city. Next, you drive to Rabat through the Rif mountains. The city of Rabat is one of the imperial cities ...",
        "coords": [
          34.0209,
          -6.8416
        ]
      },
      {
        "number": 3,
        "name": "Rabat",
        "day": "Day 3",
        "subtitle": "Rabat – Casablanca – Marrakech",
        "desc": "After breakfast, you depart from Rabat and drive along the coastline to Casablanca. The city is the economical center and the largest city in Morocco....",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 4,
        "name": "Guided Tour sightseeing Marrakech",
        "day": "Day 4",
        "subtitle": "Guided Tour sightseeing Marrakech",
        "desc": "After a warm breakfast, you will be exploring the Highlights of Marrakech with a local guide. As one of Morocco’s historic imperial cities, Marrakech ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 5,
        "name": "Marrakech",
        "day": "Day 5",
        "subtitle": "Marrakech – High Atlas Mountains – Ait ben Haddou Kasbah – Roses Valley – Dades Valley",
        "desc": "Drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes and ...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 6,
        "name": "Dades Valley",
        "day": "Day 6",
        "subtitle": "Dades Valley – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "desc": "After breakfast, you drive through the scenic Dades Valley, making a stop at a panoramic viewpoint. Next, you continue to the spectacular Todra Gorges...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 7,
        "name": "Merzouga Dunes",
        "day": "Day 7",
        "subtitle": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          34.0331,
          -5.0003
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        35.1716,
        -5.2697
      ],
      [
        34.0209,
        -6.8416
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.6295,
        -7.9811
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/7-day-morocco-tour-itinerary-from-fes/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 45 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara",
      "imperial-cities",
      "cultural",
      "heritage"
    ]
  },
  {
    "slug": "7-days-morocco-tour-itinerary-from-tangier-one-week",
    "title": "7-Day Tangier to Marrakech Morocco Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "7-Day Tangier to Marrakech Morocco Tour via Merzouga",
    "description": "Private 7-day Morocco tour from Tangier to Marrakech. Explore Fes, Chefchaouen. Local support and flexible planning.",
    "aboutHtml": "This private 7-day Morocco journey begins in Tangier and finishes in Marrakech. Along the route, you will experience Tangier, Chefchaouen, Volubilis, Meknes, Fes, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "7 Days / 6 Nights",
    "durationDays": 7,
    "startingFrom": "Tangier",
    "departureCity": "Tangier",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Tangier",
      "Marrakech",
      "Chefchaouen",
      "Volubilis",
      "Meknes",
      "Fes",
      "Ifrane",
      "Cedar Forest",
      "Midelt"
    ],
    "relatedTours": [
      "5-days-in-northern-morocco-from-tangier",
      "6-days-morocco-tour-itinerary-from-tangier-to-marrakech",
      "10-days-morocco-holiday-itinerary-from-tangier"
    ],
    "price": "From $890/person",
    "heroImage": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city",
      "Fes medina and historic cultural sites",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Arrival in Tangier – Chefchaouen",
        "content": "Your journey begins in Tangier, your driver will pick you up from your accommodation, the airport, or the port in Tangier with a private pickup from your accommodation, airport, or port. Known as “the Bride of the North,” the city lies in the northwest where the Mediterranean meets the Atlantic near Cape Spartel. You will begin by exploring the city, including the Hercules Caves and Cape Spartel. You’ll have free time for lunch. In the afternoon, you drive inland to Chefchaouen via Tetouan and the Rif Mountains, with stops for panoramic views. Overnight in a hotel in Chefchaouen."
      },
      {
        "day": "Day 2",
        "title": "Chefchaouen – Roman ruins of Volubilis – Meknes – Fes",
        "content": "After breakfast, enjoy free time to wander the blue-washed alleys of Chefchaouen. Next, you drive to Volubilis, a UNESCO World Heritage Site renowned for its well-preserved mosaics, columns, and arches. After exploring the ruins, you drive about 30 km to Meknes, the Ismaili capital and one of Morocco’s imperial cities, to visit Bab al-Mansour, the Sahrij Souani basin, the Royal Stables and granaries, and the Mausoleum of Moulay Ismail. Next, you continue to Fes. Overnight in a riad."
      },
      {
        "day": "Day 3",
        "title": "Guided sightseeing in Fes",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 4",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "content": "After breakfast, the 7-day Sahara Morocco tour continues south through Imouzzer to visit Ifrane, famous for its cool climate, winter snow, and alpine-style houses—hence the nickname “the Switzerland of Morocco.” Next, you continue to the Cedar Forest, home to wild Barbary macaques; enjoy a short walk among the ancient trees. Later, you continue to Midelt for free time at lunch, next drive over the Tizi n’Talghamt Pass and along the Ziz Valley, with stops for panoramic views. In the afternoon, you reach the Sahara desert of Merzouga, where you switch to camels and cross the dunes, pausing atop a high dune to enjoy the sunset. Continue to your desert camp—a blend of traditional nomad tents and modern comforts—where you can enjoy Berber drumming around the campfire beneath a vast, star-filled sky. Overnight at a desert camp."
      },
      {
        "day": "Day 5",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga Lake – Erg Chebbi – Palm Grove",
        "content": "After breakfast, you dedicate the day to exploring the Merzouga region—sand dunes, a seasonal lake, mines, fossil areas, and palm oases—ideal for a range of outdoor activities. You start with an off-road drive to an old kohl (eyeliner) mine, next visit nomad families in their woven tents and learn about their way of life over a glass of Berber tea. Next, you continue to Khamlia to enjoy Gnawa music and dance performances; many villagers trace their heritage to Mali, Sudan, and Niger. After free time for lunch, stroll through a palm grove, next drive a few kilometers to see Merzouga’s seasonal lake (often home to flamingos). Return to Merzouga. Dinner and overnight in a hotel."
      },
      {
        "day": "Day 6",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Rise early to watch the sunrise over the dunes—it’s a must. After breakfast, you leave the desert for Rissani, the former capital of Tafilalet and a major trading center with a lively souk on Tuesdays, Thursdays, and Sundays. Continue to Erfoud to visit a fossilized marble workshop. Next, you drive through the palm groves of Touroug and Tinjdad to reach the Todra Gorges, where the river has carved a spectacular canyon with towering red cliffs popular with rock climbers. Enjoy free time to wander the gorge and have lunch. In the afternoon, continue to the Dades Valley via Boumalne Dades, stopping at the “Monkey Fingers” rock formations and a scenic viewpoint over the valley. Dinner and overnight in a hotel."
      },
      {
        "day": "Day 7",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
        "content": "After breakfast, you continue our 7-day Sahara Morocco tour from Tangier to Kelaat M’Gouna to visit the Valley of Roses. Each May, the Rose Festival showcases local products—rose water, essential oils, and cosmetics. Next, you drive through the palm groves of Skoura. Next, you reach Ouarzazate to tour the film studios. You continue to the famous Kasbah of Ait Ben Haddou, a UNESCO-listed fortified village featured in films such as Gladiator, Alexander, and The Mummy, as well as the series Game of Thrones. Cross the High Atlas Mountains via the Tizi n’Tichka Pass, with stops for lunch and photos. Finally, you drop you at your accommodation (riad) in Marrakech. End of the One-Week in Morocco."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Arrival in Tangier",
        "day": "Day 1",
        "subtitle": "Arrival in Tangier – Chefchaouen",
        "desc": "Your journey begins in Tangier, your driver will pick you up from your accommodation, the airport, or the port in Tangier with a private pickup from y...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 2,
        "name": "Chefchaouen",
        "day": "Day 2",
        "subtitle": "Chefchaouen – Roman ruins of Volubilis – Meknes – Fes",
        "desc": "After breakfast, enjoy free time to wander the blue-washed alleys of Chefchaouen. Next, you drive to Volubilis, a UNESCO World Heritage Site renowned ...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 3,
        "name": "Guided sightseeing in Fes",
        "day": "Day 3",
        "subtitle": "Guided sightseeing in Fes",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 4,
        "name": "Fes",
        "day": "Day 4",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz Valley – Merzouga Sahara",
        "desc": "After breakfast, the 7-day Sahara Morocco tour continues south through Imouzzer to visit Ifrane, famous for its cool climate, winter snow, and alpine-...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 5,
        "name": "Explore Merzouga region",
        "day": "Day 5",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga Lake – Erg Chebbi – Palm Grove",
        "desc": "After breakfast, you dedicate the day to exploring the Merzouga region—sand dunes, a seasonal lake, mines, fossil areas, and palm oases—ideal for a ra...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 6,
        "name": "Merzouga Sahara",
        "day": "Day 6",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Rise early to watch the sunrise over the dunes—it’s a must. After breakfast, you leave the desert for Rissani, the former capital of Tafilalet and a m...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 7,
        "name": "Dades Valley",
        "day": "Day 7",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou – High Atlas – Marrakech",
        "desc": "After breakfast, you continue our 7-day Sahara Morocco tour from Tangier to Kelaat M’Gouna to visit the Valley of Roses. Each May, the Rose Festival s...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        35.1716,
        -5.2697
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/7-days-morocco-tour-itinerary-from-tangier-one-week/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Tangier, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 30 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "8-day-essential-morocco-tour-from-marrakech",
    "title": "8-Day Morocco Tour from Marrakech to Tangier | Sahara Star Tours",
    "shortTitle": "8-Day Morocco Tour from Marrakech to Tangier",
    "description": "Private 8-day Morocco tour from Marrakech to Tangier. Explore Marrakech, Ait Ben Haddou, Todra Gorges. Local support and flexible planning.",
    "aboutHtml": "This private 8-day Morocco journey begins in Marrakech and finishes in Tangier. Along the route, you will experience Marrakech, High Atlas Mountains, Telouat Kasbah, Ait Ben Haddou, Ouarzazate, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. The pace is designed for travelers who want a structured private itinerary without sacrificing time for local discovery.",
    "category": "desert-tours",
    "duration": "8 Days / 7 Nights",
    "durationDays": 8,
    "startingFrom": "Marrakech",
    "departureCity": "Marrakech",
    "arrivalCity": "Tangier",
    "destinations": [
      "Marrakech",
      "Tangier",
      "High Atlas Mountains",
      "Telouat Kasbah",
      "Ait Ben Haddou",
      "Ouarzazate",
      "Skoura",
      "Dades Valley",
      "Todra Gorges"
    ],
    "relatedTours": [
      "3-day-morocco-desert-tour-from-marrakech",
      "4-days-marrakech-desert-tour",
      "2-day-zagora-desert-tour-from-marrakech"
    ],
    "price": "From $990/person",
    "heroImage": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Chefchaouen, Morocco's blue mountain city"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Marrakech – High Atlas mountains – Telouat Kasbah – Ait Ben Haddou Kasbah – Ouarzazate",
        "content": "The 8 day Morocco desert tour starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fascinating High Atlas mountains, and Tizi n'Tichka pass. Stops will be made for panoramic views of the breathtaking landscapes. Next you visit the Kasbah of Telouat. After that you continue to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And also TV series including Game Of Thrones. Next, you head to “The gate of the desert” Ouarzazate. Dinner and overnight stay in a hotel"
      },
      {
        "day": "Day 2",
        "title": "Ouarzazate – Palm groves of Skoura – Amridil Kasbah – Rose valley – Dades Valley",
        "content": "After breakfast, you explore the city of Ouarzazate. Firstly, you visit the Atlas studios, where various famous movies were shot, and also visit the Taourirt Kasbah -A fortified mud castle, and one of the most ancient and spectacular Ksars in Morocco. After that you drive east to visit Amridil Kasbah surrounded by palm groves in Skoura. Next continue to Kalaa Magouna famous for the Rose Valley. A Rose Festival is held annually in May, where the locals offer their rose products, from: perfumes, rose water, oil, to cosmetic products. Next, you drive to Dades valley through Boumalne Dades. Inevitable stops at the “monkey fingers” rock formation, and on a spot atop a mountain overlooking the Dades valley. Dinner and overnight in a Riad in Boumalne Dades."
      },
      {
        "day": "Day 3",
        "title": "Boumalne Dades – Todra Gorges – Erfoud – Merzouga Sahara – overnight in a luxury camp",
        "content": "After breakfast, you continue to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. You can wander in the gorges and appreciate the beauty of the landscape. Next drive through the palm groves of Touroug and Tinjdad. Enjoy free time for lunch on the way. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp. There, you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp."
      },
      {
        "day": "Day 4",
        "title": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "content": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you return on camels or a 4×4 transfer to Merzouga, where the driver awaits. You dedicate the day of your Morocco desert tour to explore the region of Merzouga. The area has so many incredible sites, from sand dunes, wild lake, mines, fossils areas to fabulous oases. Which are ideal places for so many outdoor activities. Firstly, you start our journey in Merzouga, by driving off-road to visit an ancient eyeliner mine. Next you pay the nomads a visit, in their handmade woven tent. Learn how they live while drinking a Berber tea. Our next destination is the Khamlia village, where you will enjoy the Gnaoua music, and dancing performances. Its inhabitants are originating from sub-Saharan countries like Mali, Sudan and Niger. Enjoy free time for lunch in a restaurant. After that you take a stroll in a palm trees grove. Next drive a few kilometres to see the wild lake of Merzouga, also called flamingos lake. Dinner and overnight In a hotel."
      },
      {
        "day": "Day 5",
        "title": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "content": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Enjoy free time for lunch in Midelt. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that you visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Finally, you are dropped off at your accommodation in Fes."
      },
      {
        "day": "Day 6",
        "title": "Guided tour sightseeing Fes",
        "content": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities — Fes, the country’s cultural and spiritual heart. Your journey starts with a driving tour. First, you’ll stop at the magnificent Royal Palace Gate, followed by a visit to “The Mellah”, the historic Jewish Quarter. Next, enjoy breathtaking views from the Borj Sud fortress, offering a stunning overlook of the ancient medina. The final stop of this portion is the Ceramic Village & School, where you’ll witness traditional craftsmanship in action. Next, a walking tour, step back in time as you enter the medieval medina, a UNESCO World Heritage Site and one of the best-preserved historic towns in the Arab world. Accompanied by a knowledgeable local guide, you’ll explore highlights such as the Al Attarine Madrasa, the University and Mosque of Al Quaraouiyine — considered the oldest existing university in the world — and the colorful Chouara Tanneries, where leather is dyed using centuries-old methods. After this unforgettable journey through history, you’ll be returned to your riad to Relax"
      },
      {
        "day": "Day 7",
        "title": "Fes – Meknes – Volubilis ruins – Chefchaouen",
        "content": "After breakfast, you depart to visit Meknes, the Ismaili capital and one of the imperial cities. In which you visit: Bab Al-Mansour, Sahrij Souani basin, the Royal stables, the granary and the Moulay Ismail Mausoleum. Enjoy free time for lunch. Next, you drive 30 km away from Meknes to visit the ancient Roman ruins of Volubilis. It is well preserved, as it is recognized as a UNESCO World Heritage Site by the UNESCO. It has many beautiful mosaics scattered here and there, along with ancient pillars and archways. After strolling in the ruins, you head north through Ouazzane, to reach Chefchaouen in the Rif Mountains. Also known as the Blue city. The city is famous for its buildings and alleyways painted in blue. Overnight stay in a hotel."
      },
      {
        "day": "Day 8",
        "title": "Transfer to the Tangier airport",
        "content": "After breakfast, depending on your flight time, you can have a free time to stroll in the beautiful alleyways of the blue city, before you drive through the Rif mountains to reach Tangier, next you transfer you to the airport.."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Marrakech",
        "day": "Day 1",
        "subtitle": "Marrakech – High Atlas mountains – Telouat Kasbah – Ait Ben Haddou Kasbah – Ouarzazate",
        "desc": "The 8 day Morocco desert tour starts with an early pick up from the airport or your accommodation in Marrakech. Next drive through the fascinating Hig...",
        "coords": [
          31.6295,
          -7.9811
        ]
      },
      {
        "number": 2,
        "name": "Ouarzazate",
        "day": "Day 2",
        "subtitle": "Ouarzazate – Palm groves of Skoura – Amridil Kasbah – Rose valley – Dades Valley",
        "desc": "After breakfast, you explore the city of Ouarzazate. Firstly, you visit the Atlas studios, where various famous movies were shot, and also visit the T...",
        "coords": [
          31.4239,
          -5.9869
        ]
      },
      {
        "number": 3,
        "name": "Boumalne Dades",
        "day": "Day 3",
        "subtitle": "Boumalne Dades – Todra Gorges – Erfoud – Merzouga Sahara – overnight in a luxury camp",
        "desc": "After breakfast, you continue to Todra Gorges, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 4,
        "name": "Explore Merzouga region",
        "day": "Day 4",
        "subtitle": "Explore Merzouga region – Nomads – Khamlia – Merzouga lake – Erg Chebbi – palm grove",
        "desc": "Wake up early in the morning is a must do, in order to contemplate the desert sunrise, in the middle of the desert. Free time for breakfast. Next you ...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 5,
        "name": "Merzouga Dunes",
        "day": "Day 5",
        "subtitle": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "desc": "After breakfast, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, wit...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 6,
        "name": "Guided tour sightseeing Fes",
        "day": "Day 6",
        "subtitle": "Guided tour sightseeing Fes",
        "desc": "Your driver will pick you up from your Riad in Fes after breakfast to begin your immersive exploration of one of Morocco’s most iconic imperial cities...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 7,
        "name": "Fes",
        "day": "Day 7",
        "subtitle": "Fes – Meknes – Volubilis ruins – Chefchaouen",
        "desc": "After breakfast, you depart to visit Meknes, the Ismaili capital and one of the imperial cities. In which you visit: Bab Al-Mansour, Sahrij Souani bas...",
        "coords": [
          35.1716,
          -5.2697
        ]
      },
      {
        "number": 8,
        "name": "Transfer to the Tangier airport",
        "day": "Day 8",
        "subtitle": "Transfer to the Tangier airport",
        "desc": "After breakfast, depending on your flight time, you can have a free time to stroll in the beautiful alleyways of the blue city, before you drive throu...",
        "coords": [
          35.7595,
          -5.834
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.6295,
        -7.9811
      ],
      [
        31.4239,
        -5.9869
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        34.0331,
        -5.0003
      ],
      [
        35.1716,
        -5.2697
      ],
      [
        35.7595,
        -5.834
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/8-day-essential-morocco-tour-from-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Marrakech, depending on the itinerary. The tour finishes in Tangier; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 30 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "fes-marrakech-3-days-desert-tour",
    "title": "3-Day Fes to Marrakech Desert Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "3-Day Fes to Marrakech Desert Tour via Merzouga",
    "description": "Private 3-day Morocco desert tour from Fes to Marrakech. Explore Merzouga, Fes. Local support and flexible planning.",
    "aboutHtml": "This private 3-day Morocco journey begins in Fes and finishes in Marrakech. Along the route, you will experience Fes, Ifrane, Cedar Forest, Midelt, Ziz Valley, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "3 Days / 2 Nights",
    "durationDays": 3,
    "startingFrom": "Fes",
    "departureCity": "Fes",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Fes",
      "Marrakech",
      "Ifrane",
      "Cedar Forest",
      "Midelt",
      "Ziz Valley",
      "Merzouga",
      "Rissani",
      "Erfoud"
    ],
    "relatedTours": [
      "4-day-morocco-desert-tour-from-fes-to-marrakech",
      "3-days-desert-tour-marrakech-to-fes",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $390/person",
    "heroImage": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "UNESCO-listed Ait Ben Haddou Kasbah",
      "Scenic drive through the High Atlas Mountains",
      "Fes medina and historic cultural sites",
      "Marrakech's historic medina and major landmarks"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "content": "The Fes to Marrakech 3 Days Desert Tour starts with an early pick up from accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that, you continue to Midelt, where lunch will be served. Next, you head to the Sahara desert, driving through the Tizi-n-Tilghmt pass, and along the Ziz river After that, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Finally, you continue to the desert camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "content": "Wake up early in the morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels to Merzouga where the driver awaits. You leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani Souk, you continue to Erfoud, where you visit one of the workshops of fossilized marble. Next, you drive through Touroug and Tinjdad palm groves, to reach the Todra Gorges. The course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. These gorges are an ideal place for rock climbers. You can wander in the gorges and appreciate the beauty of the landscape. Enjoy free time for lunch in a restaurant. Next, you continue to the Dades valley, through Boumalne Dades. Next inevitable stops at the “monkey fingers” rock formation. And on a spot atop a mountain overlooking the Dades valley. Finally, dinner and overnight in a hotel."
      },
      {
        "day": "Day 3",
        "title": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "content": "After breakfast, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer their rose products, from perfumes, rose water, oil, to cosmetic products. Next, you drive through the palm groves of Skoura. Later, you reach Ouarzazate, also known as the gate of the desert. You will visit the studios, in which famous movies were shot. Thereafter, you depart to visit the famous Kasbah of Ait Ben Haddou. A fortified village recognized as a UNESCO World Heritage Site by UNESCO. Furthermore, the Kasbah has appeared in many movies including: Gladiator, Alexander, The Mummy…etc. And TV series including Game Of Thrones. Next, you continue to Marrakech. Driving through the Tizi n'Tichka pass, and also the spectacular the High Atlas Mountains. Stops will be made for lunch, and to take pictures at interesting spots. Finally, you reach Marrakech, you drop you off at the airport or your accommodation."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Fes",
        "day": "Day 1",
        "subtitle": "Fes – Ifrane – Cedar Forest – Midelt – Ziz valley – Merzouga Sahara",
        "desc": "The Fes to Marrakech 3 Days Desert Tour starts with an early pick up from accommodation in Fes. Next, you drive south through Imouzzer to visit Ifrane...",
        "coords": [
          34.0331,
          -5.0003
        ]
      },
      {
        "number": 2,
        "name": "Merzouga Sahara",
        "day": "Day 2",
        "subtitle": "Merzouga Sahara – Rissani – Erfoud – Todra Gorges – Dades Valley",
        "desc": "Wake up early in the morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels to Merz...",
        "coords": [
          31.4361,
          -4.2333
        ]
      },
      {
        "number": 3,
        "name": "Dades Valley",
        "day": "Day 3",
        "subtitle": "Dades Valley – Roses Valley – Palm Groves of Skoura – Ouarzazate – Ait Ben Haddou Kasbah – High Atlas Mountains – Marrakech",
        "desc": "After breakfast, you continue our trip to Kalaa Magouna, to visit the Rose Valley. A Rose Festival is held annually in May. Where the locals offer the...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        34.0331,
        -5.0003
      ],
      [
        31.4361,
        -4.2333
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/fes-marrakech-3-days-desert-tour/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Fes, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "morocco-2-day-desert-fes-tour-from-ouarzazate",
    "title": "2-Day Ouarzazate to Fes Desert Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "2-Day Ouarzazate to Fes Desert Tour via Merzouga",
    "description": "Private 2-day Morocco desert tour from Ouarzazate to Fes. Explore Merzouga, Fes, Todra Gorges. Local support and flexible planning.",
    "aboutHtml": "This private 2-day Morocco journey begins in Ouarzazate and finishes in Fes. Along the route, you will experience Ouarzazate, Todra Gorges, Merzouga, Erfoud, Midelt, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "2 Days / 1 Night",
    "durationDays": 2,
    "startingFrom": "Ouarzazate",
    "departureCity": "Ouarzazate",
    "arrivalCity": "Fes",
    "destinations": [
      "Ouarzazate",
      "Fes",
      "Todra Gorges",
      "Merzouga",
      "Erfoud",
      "Midelt",
      "Cedar Forest",
      "Ifrane"
    ],
    "relatedTours": [
      "morocco-3-day-desert-fes-tour-from-ouarzazate",
      "morocco-3-day-desert-tour-ouarzazate-marrakech",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $250/person",
    "heroImage": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "Fes medina and historic cultural sites",
      "Ouarzazate",
      "Todra Gorges"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Ouarzazate – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "content": "Your driver will pick you up from your accommodation or the airport in Ouarzazate early in the morning, next drive through the Todra Valley, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. You can wander in the gorges and appreciate the beauty of the landscape. After that you drive through the palm groves of Touroug and Tinjdad. Enjoy free time for lunch on the way. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "content": "On the last day of your desert tour. Wake up early morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels to Merzouga where the driver awaits. Next, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Enjoy free time for lunch in Midelt. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that you visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Finally, you are dropped off at the airport or your accommodation in Fes."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Ouarzazate",
        "day": "Day 1",
        "subtitle": "Ouarzazate – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "desc": "Your driver will pick you up from your accommodation or the airport in Ouarzazate early in the morning, next drive through the Todra Valley, the cours...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 2,
        "name": "Merzouga Dunes",
        "day": "Day 2",
        "subtitle": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "desc": "On the last day of your desert tour. Wake up early morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, nex...",
        "coords": [
          34.0331,
          -5.0003
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/morocco-2-day-desert-fes-tour-from-ouarzazate/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Ouarzazate, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "morocco-3-day-desert-fes-tour-from-ouarzazate",
    "title": "3-Day Ouarzazate to Fes Desert Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "3-Day Ouarzazate to Fes Desert Tour via Merzouga",
    "description": "Private 3-day Morocco desert tour from Ouarzazate to Fes. Explore Merzouga, Erg Chebbi, Todra Gorges. Local support and flexible planning.",
    "aboutHtml": "This private 3-day Morocco journey begins in Ouarzazate and finishes in Fes. Along the route, you will experience Ouarzazate, Todra Gorges, Merzouga, Erg Chebbi, Erfoud, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "3 Days / 2 Nights",
    "durationDays": 3,
    "startingFrom": "Ouarzazate",
    "departureCity": "Ouarzazate",
    "arrivalCity": "Fes",
    "destinations": [
      "Ouarzazate",
      "Fes",
      "Todra Gorges",
      "Merzouga",
      "Erg Chebbi",
      "Erfoud",
      "Midelt",
      "Cedar Forest",
      "Ifrane"
    ],
    "relatedTours": [
      "morocco-3-day-desert-tour-ouarzazate-marrakech",
      "morocco-2-day-desert-fes-tour-from-ouarzazate",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $390/person",
    "heroImage": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "Fes medina and historic cultural sites",
      "Ouarzazate",
      "Todra Gorges"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Ouarzazate – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "content": "Your driver will pick you up from your accommodation or the airport in Ouarzazate early in the morning, next drive through the Todra Valley, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. You can wander in the gorges and appreciate the beauty of the landscape. After that you drive through the palm groves of Touroug and Tinjdad. Enjoy free time for lunch on the way. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Explore Merzouga – Nomads – Khamlia (Gnaoua village) – Merzouga Lake – Erg Chebbi – Palm Grove",
        "content": "After breakfast, you dedicate the day to exploring the Merzouga Desert (Erg Chebbi). The area offers sand dunes, a seasonal wild lake, fossil sites, small mines, and beautiful oases—ideal for light outdoor activities. You start with an off-road drive to an old kohl (eyeliner) mine, next visit nomads in their woven tents and learn about their way of life over a cup of Berber tea. Next, continue to Khamlia to enjoy Gnaoua music and dance; many residents have roots in Mali, Sudan, and Niger. Enjoy free time for lunch in a local restaurant. In the afternoon, stroll through a palm grove and drive a few kilometers to the wild lake of Merzouga (often called the flamingos’ lake). Later, switch to camels to cross the dunes, stopping on a high dune for sunset, next continue to the luxury camp. Enjoy Berber drumming around the campfire under a sky full of stars. Dinner and overnight in the camp."
      },
      {
        "day": "Day 3",
        "title": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "content": "On the last day of your desert tour. Wake up early morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, next you return on camels to Merzouga where the driver awaits. Next, you leave the desert to visit Rissani town, the ancient capital of Tafilalet. Rissani still a major trading center in the region, with a large souk lively on Tuesdays, Thursdays and Sundays. After a stroll in Rissani souk, you continue to Erfoud where you visit one of the workshops of fossilized marble After that you drive along the Ziz river, you stop for a panoramic view of the Ziz Valley. Enjoy free time for lunch in Midelt. Next, you continue to Cedar Forest, where the Barbary Macaques live. You can feed them while walking through the forest. After that you visit Ifrane, famous for its low temperature, snow and the alpine-style houses -It is often called the Switzerland of Morocco. Finally, you are dropped off at the airport or your accommodation in Fes."
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Ouarzazate",
        "day": "Day 1",
        "subtitle": "Ouarzazate – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "desc": "Your driver will pick you up from your accommodation or the airport in Ouarzazate early in the morning, next drive through the Todra Valley, the cours...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 2,
        "name": "Explore Merzouga",
        "day": "Day 2",
        "subtitle": "Explore Merzouga – Nomads – Khamlia (Gnaoua village) – Merzouga Lake – Erg Chebbi – Palm Grove",
        "desc": "After breakfast, you dedicate the day to exploring the Merzouga Desert (Erg Chebbi). The area offers sand dunes, a seasonal wild lake, fossil sites, s...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 3,
        "name": "Merzouga Dunes",
        "day": "Day 3",
        "subtitle": "Merzouga Dunes – Erfoud – Midelt – Cedar Forest – Ifrane – Fes",
        "desc": "On the last day of your desert tour. Wake up early morning to contemplate the desert sunrise in the middle of the desert. Free time for breakfast, nex...",
        "coords": [
          34.0331,
          -5.0003
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.0994,
        -4.0117
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        34.0331,
        -5.0003
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-fes-tour-from-ouarzazate/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Ouarzazate, depending on the itinerary. The tour finishes in Fes; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 7 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  },
  {
    "slug": "morocco-3-day-desert-tour-ouarzazate-marrakech",
    "title": "3-Day Ouarzazate to Marrakech Desert Tour via Merzouga | Sahara Star Tours",
    "shortTitle": "3-Day Ouarzazate to Marrakech Desert Tour via Merzouga",
    "description": "Private 3-day Morocco desert tour from Ouarzazate to Marrakech. Explore Merzouga, Erg Chebbi, Marrakech. Local support and flexible planning.",
    "aboutHtml": "This private 3-day Morocco journey begins in Ouarzazate and finishes in Marrakech. Along the route, you will experience Ouarzazate, Todra Gorges, Merzouga, Erg Chebbi, Ait Ben Haddou, and more. The itinerary is designed to balance long scenic drives with meaningful stops, authentic local experiences, and time to enjoy the destination rather than simply pass through it. With Sahara Star Tours, the experience is arranged as a private trip with air-conditioned transport, local support, and an itinerary that can be tailored to your travel style. This route is ideal for travelers who want to combine Morocco's landscapes and cultural heritage with a genuine Sahara experience.",
    "category": "desert-tours",
    "duration": "3 Days / 2 Nights",
    "durationDays": 3,
    "startingFrom": "Ouarzazate",
    "departureCity": "Ouarzazate",
    "arrivalCity": "Marrakech",
    "destinations": [
      "Ouarzazate",
      "Marrakech",
      "Todra Gorges",
      "Merzouga",
      "Erg Chebbi",
      "Ait Ben Haddou"
    ],
    "relatedTours": [
      "morocco-3-day-desert-fes-tour-from-ouarzazate",
      "morocco-2-day-desert-fes-tour-from-ouarzazate",
      "3-days-desert-tour-marrakech-to-fes"
    ],
    "price": "From $390/person",
    "heroImage": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/main.webp",
    "highlights": [
      "Merzouga Sahara and Erg Chebbi dunes",
      "Desert camel trekking at sunset",
      "Overnight in a desert camp with dinner and breakfast",
      "Scenic drive through the High Atlas Mountains",
      "Marrakech's historic medina and major landmarks",
      "Ouarzazate"
    ],
    "inclusions": [
      "Private air-conditioned 4×4 or minivan",
      "Experienced local driver/guide and private transfers",
      "Fuel, road tolls and standard vehicle operating costs",
      "Accommodation in selected riads/hotels as specified in the itinerary",
      "Breakfasts and included dinners according to the itinerary",
      "Desert camel trek and access to the desert camp"
    ],
    "exclusions": [
      "Lunches and drinks",
      "Flights and airport services not explicitly listed",
      "Personal expenses and optional activities",
      "Tips and gratuities"
    ],
    "itinerary": [
      {
        "day": "Day 1",
        "title": "Ouarzazate – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "content": "Your driver will pick you up from your accommodation or the airport in Ouarzazate early in the morning, next drive through the Todra Valley, the course of Todra River has carved out a grand canyon through the mountains -Making a high red cliff-sided canyon. You can wander in the gorges and appreciate the beauty of the landscape. After that you drive through the palm groves of Touroug and Tinjdad. Enjoy free time for lunch on the way. In the afternoon, you reach the Sahara desert of Merzouga. Where you switch to camels and cross the sandy desert. A stop will be made for you to enjoy the desert sunset on top of a high dune. Next continue to the desert luxury camp, where you can enjoy the Berber drumming while dancing around the campfire, under a vast star-filled sky. Dinner and overnight in the camp"
      },
      {
        "day": "Day 2",
        "title": "Explore Merzouga – Nomads – Khamlia (Gnaoua village) – Merzouga Lake – Erg Chebbi – Palm Grove",
        "content": "After breakfast, you dedicate the day to exploring the Merzouga Desert (Erg Chebbi). The area offers sand dunes, a seasonal wild lake, fossil sites, small mines, and beautiful oases—ideal for light outdoor activities. You start with an off-road drive to an old kohl (eyeliner) mine, next visit nomads in their woven tents and learn about their way of life over a cup of Berber tea. Next, continue to Khamlia to enjoy Gnaoua music and dance; many residents have roots in Mali, Sudan, and Niger. Enjoy free time for lunch in a local restaurant. In the afternoon, stroll through a palm grove and drive a few kilometers to the wild lake of Merzouga (often called the flamingos’ lake). Later, switch to camels to cross the dunes, stopping on a high dune for sunset, next continue to the luxury camp. Enjoy Berber drumming around the campfire under a sky full of stars. Dinner and overnight in the camp."
      },
      {
        "day": "Day 3",
        "title": "Merzouga Sahara – Ait Ben Haddou Kasbah – Marrakech",
        "content": "Wake up early to witness the desert sunrise in the heart of the desert. Enjoy breakfast, next return to Merzouga, meet your driver, and head west. You will stop for viewpoints and café breaks before reaching Ouarzazate, where you’ll have free time for lunch. After lunch, continue toward Marrakech via the famous ksar of Aït Benhaddou, a UNESCO World Heritage Site featured in films such as Gladiator, Alexander, and The Mummy, as well as the series Game of Thrones. Cross the Tizi n'Tichka Pass through the High Atlas Mountains to arrive in Marrakech, next transfer to the airport or your accommodation. End of the desert tour. Note: If the 9 hour of driving back to Marrakech feels too much for you:"
      }
    ],
    "mapDestinations": [
      {
        "number": 1,
        "name": "Ouarzazate",
        "day": "Day 1",
        "subtitle": "Ouarzazate – Todra Gorges – Merzouga Dunes – Camel trekking – overnight in a luxury camp",
        "desc": "Your driver will pick you up from your accommodation or the airport in Ouarzazate early in the morning, next drive through the Todra Valley, the cours...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 2,
        "name": "Explore Merzouga",
        "day": "Day 2",
        "subtitle": "Explore Merzouga – Nomads – Khamlia (Gnaoua village) – Merzouga Lake – Erg Chebbi – Palm Grove",
        "desc": "After breakfast, you dedicate the day to exploring the Merzouga Desert (Erg Chebbi). The area offers sand dunes, a seasonal wild lake, fossil sites, s...",
        "coords": [
          31.0994,
          -4.0117
        ]
      },
      {
        "number": 3,
        "name": "Merzouga Sahara",
        "day": "Day 3",
        "subtitle": "Merzouga Sahara – Ait Ben Haddou Kasbah – Marrakech",
        "desc": "Wake up early to witness the desert sunrise in the heart of the desert. Enjoy breakfast, next return to Merzouga, meet your driver, and head west. You...",
        "coords": [
          31.6295,
          -7.9811
        ]
      }
    ],
    "mapRouteCoordinates": [
      [
        31.0994,
        -4.0117
      ],
      [
        31.0994,
        -4.0117
      ],
      [
        31.6295,
        -7.9811
      ]
    ],
    "galleryImages": [
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_1.webp",
        "cap": "Gallery 1"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_10.webp",
        "cap": "Gallery 10"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_2.webp",
        "cap": "Gallery 2"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_3.webp",
        "cap": "Gallery 3"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_4.webp",
        "cap": "Gallery 4"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_5.webp",
        "cap": "Gallery 5"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_6.webp",
        "cap": "Gallery 6"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_7.webp",
        "cap": "Gallery 7"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_8.webp",
        "cap": "Gallery 8"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/gallery_9.webp",
        "cap": "Gallery 9"
      },
      {
        "src": "/sahara-star-tours/morocco-3-day-desert-tour-ouarzazate-marrakech/images/hero_2.webp",
        "cap": "Hero 2"
      }
    ],
    "faqs": [
      {
        "question": "Is this a private or shared tour?",
        "answer": "This is a private experience: the vehicle, driver, and itinerary are reserved for your group. The route and pace can be adjusted around your travel preferences."
      },
      {
        "question": "How long is the camel ride, and is there an alternative?",
        "answer": "The camel trek usually lasts around 40 minutes to 1.5 hours, depending on the camp and the day’s route. A 4×4 transfer can be arranged instead, and ATVs may be available at an additional cost."
      },
      {
        "question": "Is the desert camp tent private?",
        "answer": "The luxury desert camp accommodation described for this itinerary uses private tents with private bathrooms and hot running water, subject to the camp booked."
      },
      {
        "question": "Where are pickup and drop-off provided?",
        "answer": "Pickup is arranged from your accommodation, airport, or agreed meeting point in Ouarzazate, depending on the itinerary. The tour finishes in Marrakech; the exact drop-off is confirmed when you book."
      },
      {
        "question": "What type of vehicle is used?",
        "answer": "Transportation is provided in a private air-conditioned 4×4 or minivan. For larger groups, a minibus can be arranged. Vehicle type and group capacity are confirmed before travel."
      },
      {
        "question": "Can you accommodate dietary requirements?",
        "answer": "Yes. Share your dietary preferences when booking so the riads, hotels, and desert camp can prepare suitable meals. Vegetarian, vegan, halal, and other common requirements can be discussed in advance."
      },
      {
        "question": "Is this itinerary suitable for all ages?",
        "answer": "Yes, although some days include long drives of up to about 9 hours. Regular stops are planned, and travelers who prefer shorter driving days can request a longer or customized itinerary."
      },
      {
        "question": "When is the best time to take this tour?",
        "answer": "Spring and autumn generally offer comfortable conditions across Morocco. Winter can also be excellent for the southern desert, while mountain areas may be colder; your route can be adapted to the season."
      }
    ],
    "productType": "multi-day",
    "themes": [
      "desert",
      "sahara"
    ]
  }
];

// ============================================================
// QUERY HELPERS
// ============================================================

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find(t => t.slug === slug);
}

export function getAllTours(): Tour[] {
  return tours;
}

export function getMultiDayTours(): Tour[] {
  return tours.filter(t => t.productType === 'multi-day');
}

export function getMultiDayToursByCity(city: City | string): Tour[] {
  return tours.filter(t => t.productType === 'multi-day' && t.departureCity.toLowerCase() === city.toLowerCase());
}

export function getImperialCitiesTours(): Tour[] {
  // Curated thematic subset of multi-day cultural / imperial cities tours
  return tours.filter(t => t.productType === 'multi-day' && (t.category === 'imperial-cities' || (t.themes && t.themes.includes('imperial-cities'))));
}

export function getDayTrips(): Tour[] {
  return tours.filter(t => t.productType === 'day-trip');
}

export function getActivities(): Tour[] {
  return tours.filter(t => t.productType === 'activity');
}

export function getToursByCategory(category: string): Tour[] {
  return tours.filter(t => t.category === category);
}

export function getToursByDeparture(city: string): Tour[] {
  return tours.filter(t => t.departureCity.toLowerCase() === city.toLowerCase());
}

export function getFeaturedTours(limit?: number): Tour[] {
  const f = tours.filter(t => t.featured);
  return limit ? f.slice(0, limit) : f;
}
