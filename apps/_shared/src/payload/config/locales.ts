/**
 * Central Locale Configuration for Payload CMS
 *
 * Single source of truth for all locale settings.
 * Update DEFAULT_LOCALE here to change the primary language everywhere.
 */

export const DEFAULT_LOCALE = 'sv' as const;

export const LOCALES = [
  {
    label: 'Svenska',
    code: 'sv'
  },
  {
    label: 'English',
    code: 'en'
  },
  {
    label: 'Deutsch',
    code: 'de'
  }
] as const;

export type LocaleCode = 'sv' | 'en' | 'de';

/**
 * Language name map for AI generation
 */
export const LOCALE_LANGUAGE_MAP: Record<LocaleCode, string> = {
  sv: 'Swedish',
  en: 'English',
  de: 'German'
};

/**
 * Locale metadata for display purposes
 */
export const LOCALE_METADATA: Record<LocaleCode, { label: string; flag: string; nativeName: string }> = {
  sv: { label: 'Svenska', flag: '🇸🇪', nativeName: 'Svenska' },
  en: { label: 'English', flag: '🇬🇧', nativeName: 'English' },
  de: { label: 'Deutsch', flag: '🇩🇪', nativeName: 'Deutsch' }
};

/**
 * Check if a string is a valid locale code
 */
export function isValidLocale(locale: string): locale is LocaleCode {
  return ['sv', 'en', 'de'].includes(locale);
}

/**
 * Get a safe locale, falling back to default if invalid
 */
export function getSafeLocale(locale: string | null | undefined): LocaleCode {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Get the language name for a locale code
 */
export function getLanguageName(locale: LocaleCode): string {
  return LOCALE_LANGUAGE_MAP[locale];
}

/**
 * Get all other locales except the given one
 */
export function getOtherLocales(locale: LocaleCode): LocaleCode[] {
  return (['sv', 'en', 'de'] as LocaleCode[]).filter(l => l !== locale);
}

