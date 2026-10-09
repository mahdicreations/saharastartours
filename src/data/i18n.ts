/**
 * i18n.ts — Central internationalization utilities and strict validation
 * Supports: English ('en' - primary/root), Spanish ('es'), Italian ('it')
 */
import enUi from './locales/en/ui.json';
import esUi from './locales/es/ui.json';
import itUi from './locales/it/ui.json';

export type SupportedLocale = 'en' | 'es' | 'it';
export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'es', 'it'];
export const DEFAULT_LOCALE: SupportedLocale = 'en';

const uiDictionaries: Record<SupportedLocale, Record<string, string>> = {
  en: enUi,
  es: esUi,
  it: itUi,
};

/**
 * Access localized UI translation string
 * Throws in development if a key is missing from a localized dictionary
 */
export function useTranslations(lang: SupportedLocale = 'en') {
  const dict = uiDictionaries[lang] || uiDictionaries.en;
  return (key: string, fallback?: string): string => {
    if (dict[key]) return dict[key];
    if (fallback !== undefined) return fallback;
    return enUi[key as keyof typeof enUi] || key;
  };
}

/**
 * Helper to build localized URL paths while keeping English at the root
 */
export function getLocalizedPath(pathname: string, lang: SupportedLocale = 'en'): string {
  // Normalize leading slash
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (lang === 'en') {
    // English is always at root: remove any /es/ or /it/ prefixes if present
    return cleanPath.replace(/^\/(es|it)(\/|$)/, '$2') || '/';
  }
  // Remove existing locale prefix if any
  const stripped = cleanPath.replace(/^\/(es|it)(\/|$)/, '$2') || '/';
  return stripped === '/' ? `/${lang}` : `/${lang}${stripped}`;
}

/**
 * Helper to get reciprocal alternate URLs and x-default for a given page path
 */
export function getAlternateUrls(pathname: string) {
  const siteUrl = 'https://www.saharastartours.com';
  const cleanPath = pathname === '/' ? '' : (pathname.startsWith('/') ? pathname : `/${pathname}`);
  const barePath = cleanPath.replace(/^\/(es|it)(\/|$)/, '$2');
  const enUrl = barePath === '' ? `${siteUrl}/` : `${siteUrl}${barePath}`;
  const esUrl = barePath === '' ? `${siteUrl}/es` : `${siteUrl}/es${barePath}`;
  const itUrl = barePath === '' ? `${siteUrl}/it` : `${siteUrl}/it${barePath}`;
  return {
    en: enUrl,
    es: esUrl,
    it: itUrl,
    xDefault: enUrl,
  };
}
