import type { Page } from '@sveltejs/kit';
import { localizeUrl } from '$lib/parachute/routes';

/**
 * Rewrites a URL path to be localized based on the current page context
 * @param page - The SvelteKit page object
 * @param path - The path to localize (e.g., '/about', '/components')
 * @returns Localized URL string
 */
export const rewriteUrl = <T extends (string | undefined)>(page: Page, path: T): T => {
  if (!path) {
    return path;
  }

  if (typeof path !== 'string') {
    throw new Error('"path" is not a string');
  }

  const newUrl = new URL(path, page.url.origin);
  newUrl.href = localizeUrl(newUrl.href);

  return newUrl.toString() as T;
};