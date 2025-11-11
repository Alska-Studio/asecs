import type { AvailableCountryCode, AvailableCountryCodes, Locale } from '../types/locale';

import { PUBLIC_DEFAULT_COUNTRY, PUBLIC_AVAILABLE_COUNTRIES } from '$env/static/public';

import { locales, baseLocale } from '$lib/parachute/runtime';
import { delocalizeUrl, localizeUrl } from '$lib/parachute/routes';
import type { Page } from '@sveltejs/kit';

// Create instances once and reuse (for performance)
const REGION_NAMES = new Intl.DisplayNames(['en'], { type: 'region' });

const DEFAULT_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

interface Currencies {
  [key: string]: string;
}

const AVAILABLE_COUNTRIES: AvailableCountryCodes = PUBLIC_AVAILABLE_COUNTRIES.split(',') as AvailableCountryCodes;

const EU_WITH_SCANDINAVIA_OMITTED_COUNTRIES = ['AT', 'BE', 'BG', 'CZ', 'DE', 'EE', 'ES', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SI', 'SK'];

const CURRENCIES: Currencies = {
  SE: 'SEK',
  DK: 'DKK',
  NO: 'NOK',
  GB: 'GBP',
  DEFAULT: 'EUR'
};

export const getDefaultLanguage = () => {
  return baseLocale;
};

export const getDefaultMarket = () => {
  return PUBLIC_DEFAULT_COUNTRY;
};

export const getAvailableMarkets = (): AvailableCountryCodes => {
  return AVAILABLE_COUNTRIES;
};

export const getIsMultiMarket = () => {
  return getAvailableMarkets().length > 1;
};

/**
 * Gets the default locale for a country by combining its primary language code with the country code
 * @param countryCode - The ISO 3166-1 country code (e.g., 'SE' for Sweden)
 * @returns The locale string in the format 'language_COUNTRY' (e.g., 'sv_SE' for Swedish/Sweden)
 */
const getCountryDefaultLocale = (countryCode: AvailableCountryCode) => {
  REGION_NAMES.of(countryCode); // Validate country code
  const locale = new Intl.Locale('und', { region: countryCode });
  const language = locale.maximize().language;
  return `${language}-${countryCode}`;
};

export const getLocaleFormattedAmount = (price: number, locale: Locale) => {
  return transformToCurrency(price / 100, locale);
};

export const transformToCurrency = (value: number, locale: Locale) => {
  const { countryDefaultLocale, currency } = locale;
  const maximumFractionDigits = Math.floor((value - Math.floor(value)) * 100) > 0 ? 2 : 0;
  return new Intl.NumberFormat(countryDefaultLocale, { style: 'currency', currency, maximumFractionDigits }).format(value);
};

export const formatDate = (dateString: string, locale: Locale): string => {
  return new Date(dateString).toLocaleDateString(locale.language, DEFAULT_DATE_FORMAT_OPTIONS);
};

const getDefaultCurrency = (market: string) => {
  const currency = CURRENCIES[market.toUpperCase()] || CURRENCIES['DEFAULT'];
  return currency;
};

export const isEUWithScandinaviaOmitted = (market: string) => {
  return EU_WITH_SCANDINAVIA_OMITTED_COUNTRIES.includes(market);
};

export const getLocaleFromParams = <T extends string>(params?: Partial<{ country: string | null, language: T | null }>): Locale<T> => {
  const country = params?.country || PUBLIC_DEFAULT_COUNTRY;
  const language = (params?.language || baseLocale) as unknown as T;

  const currency = getDefaultCurrency(country);
  const locale = `${language}-${country}`;
  const countryDefaultLocale = getCountryDefaultLocale(country as AvailableCountryCode);

  return {
    country,
    language,
    currency,
    locale,
    countryDefaultLocale,
    isMultiMarket: getAvailableMarkets().length > 1,
    defaultCountry: PUBLIC_DEFAULT_COUNTRY,
    defaultLanguage: baseLocale
  };
};

export const getLocaleFromUrl = <T extends string>(url: URL): Locale<T> => {
  const country = getCountry(url);
  const language = getLanguage<T>(url);
  return getLocaleFromParams<T>({ country, language });
};

export const getLanguage = <T extends string>(url: URL): T => {
  const segment = url.pathname.split('/')?.filter((s) => s).shift()?.toLowerCase();
  return (segment && locales.includes(segment) ? segment : baseLocale) as T;
};

export const getCountry = (url: URL): string => {
  const country = url.searchParams.get('country')?.toUpperCase()?.replace(/[^a-zA-Z]/g, '');
  if (country && AVAILABLE_COUNTRIES.includes(country as AvailableCountryCode)) {
    return country as AvailableCountryCode;
  }
  return PUBLIC_DEFAULT_COUNTRY;
};

export const getSearchParams = (searchParams: string | undefined) => {
  if (searchParams?.trim()) {
    return searchParams.split('&').reduce<Record<string, string>>((acc, curr) => {
      const [key, value] = curr.split('=');
      if (key && value) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }
};

export const removeLocaleFromPath = (path: string) => {
  return path.replace(/^\/(en|es|fi|da|nb|se)/, '');
};

export const getAlternateLinks = (url: URL) => {
  const delocalizedHref = delocalizeUrl(url.href);
  return locales.reduce<Record<string, string>>((acc, locale) => {
    acc[locale] = new URL(localizeUrl(delocalizedHref, locale)).pathname;
    return acc;
  }, {});
};

export const getHomeUrl = (locale: Locale): string => {
  return locale.language !== locale.defaultLanguage ? `/${locale.language}` : '/';
};

const clearBlacklistedSearchParams = (newUrl: URL, pageUrl: URL) => {
  const searchParams = new URLSearchParams();
  if (newUrl.pathname.endsWith('/search') && newUrl.searchParams.has('q')) {
    searchParams.set('q', newUrl.searchParams.get('q') as string);
  }

  if (pageUrl.searchParams.has('country')) {
    searchParams.set('country', pageUrl.searchParams.get('country') as string);
  }

  return searchParams;
};

export const rewriteUrl = <T extends (string | undefined)>(page: Page, path: T): T => {
  if (!path) {
    return path;
  }

  if (typeof path !== 'string') {
    throw new Error('"url" is not a string');
  }

  const newUrl = new URL(path, page.url.origin);
  newUrl.search = clearBlacklistedSearchParams(newUrl, page.url).toString();
  newUrl.href = localizeUrl(newUrl.href);

  return newUrl.toString() as T;
};
