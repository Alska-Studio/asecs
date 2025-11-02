export interface Locale<T extends string = string> {
  /** If there are multiple countries defined in the environment variable PUBLIC_AVAILABLE_MARKETS */
  isMultiMarket: boolean;
  /** Gives the country based on the selected country */
  country: string;
  /** Gives the language based on the selected country and language (e.g. 'sv' for 'SE' and 'sv') */
  language: T;
  /** Gives the currency based on the selected country, based on hardcoded values in CURRENCIES */
  currency: string;
  /** Gives the locale based on the selected country and language (e.g. 'sv-SE' for 'SE' and 'sv') */
  locale: string;
  /** Gives default country for storefront, based on environment variable PUBLIC_DEFAULT_MARKET */
  defaultCountry: string;
  /** Gives default language for storefront, based on the default language in paraglide settings */
  defaultLanguage: string;
  /** Gives default locale for the selected country (e.g. 'sv-SE' for 'SE') even if selected language differs */
  countryDefaultLocale: string;
}

type RequiredCountries =
  // Scandinavia
  | 'SE' | 'NO' | 'DK' | 'FI'
  // Western Europe
  | 'AT' | 'BE' | 'DE' | 'FR' | 'IE' | 'NL' | 'GB'
  // Southern Europe
  | 'ES' | 'GR' | 'IT' | 'MT' | 'PT'
  // Eastern Europe
  | 'BG' | 'CZ' | 'HU' | 'PL' | 'RO' | 'SK'
  // Baltic States
  | 'EE' | 'LV' | 'LT'
  // Balkans
  | 'HR' | 'SI';

type OptionalCountryCode =
  // Nordic Region (excluding required Scandinavia)
  | 'IS'
  // Western Europe (remaining)
  | 'CH' | 'LI' | 'LU'
  // Southern Europe (remaining)
  | 'AD' | 'SM' | 'VA'
  // Eastern Europe (remaining)
  | 'BY' | 'MD' | 'UA'
  // Balkans (remaining)
  | 'AL' | 'BA' | 'ME' | 'MK' | 'RS'
  // North America
  | 'CA' | 'US' | 'MX'
  // Central America
  | 'BZ' | 'CR' | 'GT' | 'HN' | 'NI' | 'PA' | 'SV'
  // South America
  | 'AR' | 'BO' | 'BR' | 'CL' | 'CO' | 'EC' | 'GY' | 'PE' | 'PY' | 'SR' | 'UY' | 'VE'
  // East Asia
  | 'CN' | 'JP' | 'KR' | 'MN' | 'TW'
  // Southeast Asia
  | 'BN' | 'ID' | 'KH' | 'LA' | 'MM' | 'MY' | 'PH' | 'SG' | 'TH' | 'TL' | 'VN'
  // South Asia
  | 'AF' | 'BD' | 'BT' | 'IN' | 'LK' | 'MV' | 'NP' | 'PK'
  // Central Asia
  | 'KZ' | 'KG' | 'TJ' | 'TM' | 'UZ'
  // Middle East
  | 'AE' | 'BH' | 'IL' | 'IQ' | 'IR' | 'JO' | 'KW' | 'LB' | 'OM' | 'PS' | 'QA' | 'SA' | 'SY' | 'YE'
  // Oceania
  | 'AU' | 'FJ' | 'NZ' | 'PG' | 'SB' | 'VU'
  // Africa (Northern)
  | 'DZ' | 'EG' | 'LY' | 'MA' | 'SD' | 'TN'
  // Africa (Sub-Saharan)
  | 'AO' | 'BF' | 'BI' | 'BJ' | 'BW' | 'CD' | 'CF' | 'CG' | 'CI' | 'CM' | 'ET'
  | 'GA' | 'GH' | 'GM' | 'GN' | 'GQ' | 'KE' | 'LR' | 'LS' | 'MG' | 'ML' | 'MR'
  | 'MW' | 'MZ' | 'NA' | 'NE' | 'NG' | 'RW' | 'SC' | 'SL' | 'SN' | 'SO' | 'SS'
  | 'SZ' | 'TD' | 'TG' | 'TZ' | 'UG' | 'ZA' | 'ZM' | 'ZW'
  // Caribbean
  | 'AG' | 'BB' | 'BS' | 'CU' | 'DM' | 'DO' | 'GD' | 'HT' | 'JM' | 'KN' | 'LC' | 'TT' | 'VC'
  // Other Territories
  | 'AW' | 'BM' | 'CW' | 'FK' | 'FO' | 'GF' | 'GI' | 'GL' | 'GP' | 'GU' | 'HK'
  | 'KY' | 'MO' | 'MP' | 'MQ' | 'MS' | 'NC' | 'PF' | 'PM' | 'PR' | 'RE' | 'SJ'
  | 'TC' | 'VI' | 'WF' | 'YT';

export type AvailableCountryCode = RequiredCountries;
export type AvailableCountryCodes = Array<RequiredCountries>;

export type CountryCode = RequiredCountries | Partial<Record<OptionalCountryCode, unknown>>;
export type CountryCodes = Array<RequiredCountries | OptionalCountryCode>;
