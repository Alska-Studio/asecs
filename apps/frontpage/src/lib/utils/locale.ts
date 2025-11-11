/**
 * Central Locale Configuration
 *
 * Single source of truth for all locale settings across the application.
 * Update DEFAULT_LOCALE here to change the primary language everywhere.
 */

export const DEFAULT_LOCALE = 'sv' as const;

export const LOCALES = ['sv', 'en', 'de'] as const;

export type Locale = typeof LOCALES[number];

/**
 * Locale metadata for display purposes
 */
export const LOCALE_METADATA: Record<Locale, { label: string; flag: string; nativeName: string }> = {
  sv: { label: 'Svenska', flag: '🇸🇪', nativeName: 'Svenska' },
  en: { label: 'English', flag: '🇬🇧', nativeName: 'English' },
  de: { label: 'Deutsch', flag: '🇩🇪', nativeName: 'Deutsch' }
};

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

/**
 * Get a safe locale, falling back to default if invalid
 */
export function getSafeLocale(locale: string | null | undefined): Locale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
}


