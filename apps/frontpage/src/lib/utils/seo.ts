import type { Page } from '@sveltejs/kit';
import { locales } from '$lib/parachute/runtime';
import { rewriteUrl } from './url';

export interface SEOConfig {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  alternates?: Record<string, string>;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    url?: string;
    image?: string;
  };
}

/**
 * Generate alternate links for different languages
 * Based on Glimja's approach for proper hreflang implementation
 */
export const getAlternateLinks = (page: Page, path?: string): Array<{ rel: string; hreflang: string; href: string }> => {
  const currentPath = path || page.url.pathname;
  const baseUrl = page.url.origin;

  return locales.map(locale => {
    // Create URL for this locale
    const localeUrl = rewriteUrl(page, currentPath);

    return {
      rel: 'alternate',
      hreflang: locale,
      href: `${baseUrl}${localeUrl}`
    };
  });
};

/**
 * Get canonical URL for the current page
 */
export const getCanonicalUrl = (page: Page): string => {
  return `${page.url.origin}${page.url.pathname}`;
};

/**
 * Generate structured data for the page
 */
export const getStructuredData = (config: {
  type: 'WebPage' | 'Article' | 'Product';
  title?: string;
  description?: string;
  url?: string;
}) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': config.type,
    name: config.title,
    description: config.description,
    url: config.url
  };

  return JSON.stringify(baseData);
};

export const getStructuredDataScript = (data?: string | null) => {
  return `<script type="application/ld+json">${data}</script>`;
};

/**
 * Generate meta tags for the page
 */
export const generateMetaTags = (config: SEOConfig, page: Page) => {
  const canonical = config.canonical || getCanonicalUrl(page);
  const alternates = config.alternates || getAlternateLinks(page);

  return {
    title: config.title,
    description: config.description,
    canonical,
    alternates,
    robots: config.robots || 'index, follow',
    openGraph: config.openGraph
  };
};