/**
 * toursI18n.ts — Internationalized tour data helper
 * Loads and merges localized JSON data (Spanish and Italian) with technical metadata from tours.ts.
 */
import { tours, getTourBySlug, type Tour, type TourStop, type TourFAQ } from './tours';

export interface LocalizedTourData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  aboutHtml: string;
  duration: string;
  startingFrom: string;
  price: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: Array<{ day: string; title: string; content: string }>;
  mapDestinations?: Array<{
    number: number;
    name: string;
    day: string;
    subtitle: string;
    desc: string;
    coords?: [number, number];
  }>;
  galleryImages: Array<{ src: string; cap: string; alt?: string }>;
  faqs?: TourFAQ[];
}

// Eagerly load all localized tour JSON files via Vite import.meta.glob
const esTourModules = import.meta.glob<LocalizedTourData | { default: LocalizedTourData }>(
  './locales/es/tours/*.json',
  { eager: true }
);

const itTourModules = import.meta.glob<LocalizedTourData | { default: LocalizedTourData }>(
  './locales/it/tours/*.json',
  { eager: true }
);

const esToursMap = new Map<string, LocalizedTourData>();
for (const mod of Object.values(esTourModules)) {
  const data = (mod as any).default ?? mod;
  if (data?.slug) {
    esToursMap.set(data.slug, data);
  }
}

const itToursMap = new Map<string, LocalizedTourData>();
for (const mod of Object.values(itTourModules)) {
  const data = (mod as any).default ?? mod;
  if (data?.slug) {
    itToursMap.set(data.slug, data);
  }
}

const localizedCities: Record<'es' | 'it', Record<string, string>> = {
  es: {
    'Fes': 'Fez',
    'Tangier': 'Tánger',
    'Casablanca': 'Casablanca',
    'Marrakech': 'Marrakech',
    'Ouarzazate': 'Ouarzazate',
  },
  it: {
    'Fes': 'Fes',
    'Tangier': 'Tangeri',
    'Casablanca': 'Casablanca',
    'Marrakech': 'Marrakech',
    'Ouarzazate': 'Ouarzazate',
  },
};

const localizedBadges: Record<'es' | 'it', Record<string, string>> = {
  es: {
    'POPULAR': 'Popular',
    'Best Seller': 'Más Vendido',
    'Luxury': 'Lujo',
    'Top Rated': 'Mejor Valorado',
  },
  it: {
    'POPULAR': 'Popolare',
    'Best Seller': 'Più Venduto',
    'Luxury': 'Lusso',
    'Top Rated': 'Più Votato',
  },
};

/**
 * Returns tour record merged with localized strings for the specified language.
 * Falls back to base English tour if locale data is absent or for 'en'.
 */
export function getLocalizedTour(slug: string, lang: 'en' | 'es' | 'it' = 'en'): Tour | undefined {
  const baseTour = getTourBySlug(slug);
  if (!baseTour) return undefined;
  if (lang === 'en') return baseTour;

  const loc = lang === 'es' ? esToursMap.get(slug) : itToursMap.get(slug);
  if (!loc) return baseTour;

  // Merge map destinations preserving technical coordinates
  const mergedMapDestinations: TourStop[] = Array.isArray(loc.mapDestinations) && loc.mapDestinations.length === baseTour.mapDestinations.length
    ? loc.mapDestinations.map((stop, idx) => ({
        ...baseTour.mapDestinations[idx],
        ...stop,
        coords: baseTour.mapDestinations[idx]?.coords ?? (stop.coords as [number, number]),
      }))
    : baseTour.mapDestinations;

  const depCityKey = baseTour.departureCity.toLowerCase();
  const arrCityKey = baseTour.arrivalCity.toLowerCase();

  const localizedBadge = baseTour.badge
    ? (localizedBadges[lang]?.[baseTour.badge] ?? (lang === 'it' && baseTour.badge === 'POPULAR' ? 'Popolare' : (lang === 'es' && baseTour.badge === 'POPULAR' ? 'Popular' : baseTour.badge)))
    : undefined;

  const localizedDepCity = (localizedCities[lang]?.[baseTour.departureCity] ?? baseTour.departureCity) as any;
  const localizedArrCity = (localizedCities[lang]?.[baseTour.arrivalCity] ?? baseTour.arrivalCity) as any;
  const localizedStartingFrom = loc.startingFrom ?? (localizedCities[lang]?.[baseTour.startingFrom] ?? baseTour.startingFrom);

  return {
    ...baseTour,
    title: loc.title ?? baseTour.title,
    shortTitle: loc.shortTitle ?? baseTour.shortTitle,
    description: loc.description ?? baseTour.description,
    aboutHtml: loc.aboutHtml ?? baseTour.aboutHtml,
    duration: loc.duration ?? baseTour.duration,
    startingFrom: localizedStartingFrom,
    departureCity: localizedDepCity,
    arrivalCity: localizedArrCity,
    departureCityKey: depCityKey,
    arrivalCityKey: arrCityKey,
    price: loc.price ?? baseTour.price,
    badge: localizedBadge,
    highlights: Array.isArray(loc.highlights) && loc.highlights.length > 0 ? loc.highlights : baseTour.highlights,
    inclusions: Array.isArray(loc.inclusions) && loc.inclusions.length > 0 ? loc.inclusions : baseTour.inclusions,
    exclusions: Array.isArray(loc.exclusions) && loc.exclusions.length > 0 ? loc.exclusions : baseTour.exclusions,
    itinerary: Array.isArray(loc.itinerary) && loc.itinerary.length > 0 ? loc.itinerary : baseTour.itinerary,
    mapDestinations: mergedMapDestinations,
    galleryImages: Array.isArray(loc.galleryImages) && loc.galleryImages.length > 0 ? loc.galleryImages : baseTour.galleryImages,
    faqs: Array.isArray(loc.faqs) && loc.faqs.length > 0 ? loc.faqs : baseTour.faqs,
  };
}

/**
 * Returns all 57 tours localized for the specified language.
 */
export function getAllLocalizedTours(lang: 'en' | 'es' | 'it' = 'en'): Tour[] {
  return tours.map(t => getLocalizedTour(t.slug, lang)!).filter(Boolean);
}

export function getLocalizedMultiDayTours(lang: 'en' | 'es' | 'it' = 'en'): Tour[] {
  return getAllLocalizedTours(lang).filter(t => t.productType === 'multi-day');
}

export function getLocalizedMultiDayToursByCity(city: string, lang: 'en' | 'es' | 'it' = 'en'): Tour[] {
  const normCity = city.toLowerCase();
  return getLocalizedMultiDayTours(lang).filter(t => {
    const key = (t.departureCityKey || t.departureCity).toLowerCase();
    if (key === normCity) return true;
    if ((normCity === 'fes' || normCity === 'fez') && (key === 'fes' || key === 'fez')) return true;
    if ((normCity === 'tangier' || normCity === 'tanger' || normCity === 'tangeri') && (key === 'tangier' || key === 'tanger' || key === 'tangeri')) return true;
    return false;
  });
}

export function getLocalizedImperialCitiesTours(lang: 'en' | 'es' | 'it' = 'en'): Tour[] {
  return getLocalizedMultiDayTours(lang).filter(t => t.category === 'imperial-cities' || (t.themes && t.themes.includes('imperial-cities')));
}

export function getLocalizedDayTrips(lang: 'en' | 'es' | 'it' = 'en'): Tour[] {
  return getAllLocalizedTours(lang).filter(t => t.productType === 'day-trip');
}

export function getLocalizedActivities(lang: 'en' | 'es' | 'it' = 'en'): Tour[] {
  return getAllLocalizedTours(lang).filter(t => t.productType === 'activity');
}

export function getLocalizedToursByCategory(category: string, lang: 'en' | 'es' | 'it' = 'en'): Tour[] {
  return getAllLocalizedTours(lang).filter(t => t.category === category);
}

export interface LocalizedRelatedTour {
  slug: string;
  shortTitle: string;
  duration: string;
  price: string;
  heroImage: string;
}

/**
 * Resolves 3 related tour cards for a tour, localized in the target language.
 */
export function getLocalizedRelatedTours(tour: Tour, lang: 'en' | 'es' | 'it' = 'en'): LocalizedRelatedTour[] {
  let relatedSlugs: string[] = tour.relatedTours && tour.relatedTours.length > 0 ? [...tour.relatedTours] : [];

  if (relatedSlugs.length < 3) {
    const fallbackCandidates = tours
      .filter(t => t.slug !== tour.slug && t.productType === tour.productType && !relatedSlugs.includes(t.slug))
      .sort((a, b) => {
        if (a.departureCity === tour.departureCity && b.departureCity !== tour.departureCity) return -1;
        if (b.departureCity === tour.departureCity && a.departureCity !== tour.departureCity) return 1;
        if (a.category === tour.category && b.category !== tour.category) return -1;
        if (b.category === tour.category && a.category !== tour.category) return 1;
        return 0;
      })
      .map(t => t.slug);
    relatedSlugs.push(...fallbackCandidates);
  }

  return relatedSlugs
    .slice(0, 3)
    .map(slug => getLocalizedTour(slug, lang))
    .filter((t): t is Tour => Boolean(t))
    .map(t => ({
      slug: t.slug,
      shortTitle: t.shortTitle,
      duration: t.duration,
      price: t.price,
      heroImage: t.heroImage,
    }));
}
