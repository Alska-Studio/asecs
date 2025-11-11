import type { Handle } from '@sveltejs/kit';
import type { TypedLocale } from 'payload';

import { sequence } from '@sveltejs/kit/hooks';
import crypto from 'node:crypto';

import { dev } from '$app/environment';
import { getLocaleAndFlattenedUrl, localizeUrl } from '$lib/parachute/routes';

export const parachuteHandle: Handle = async ({ event, resolve }) => {
  const { locale, flattenedUrl } = getLocaleAndFlattenedUrl(event.url);
  event.locals.parachute = { locale, typedLocale: locale as TypedLocale };

  // Handle the case where the URL is not properly localized and is
  // using english routes for a differerent locale
  const localizedHref = localizeUrl(flattenedUrl.href, locale);
  if (localizedHref !== event.url.href) {
    return Response.redirect(localizedHref, 302);
  }

  return resolve(event, {
    transformPageChunk({ html, done }) {
      if (!done) {
        return html;
      }
      return html.replace('%lang%', locale);
    }
  });
};

const blacklist = [
  '/.well-known/appspecific/com.chrome.devtools'
];

const middleLayer: Handle = async ({ event, resolve }) => {
  if (dev) { // In dev mode only, a mkcert workaround to avoid the SSL error when calling the API locally from the server
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  }

  if (!event.cookies.get('__asecs_identifier')) {
    event.cookies.set('__asecs_identifier', crypto.randomUUID(), { path: '/', maxAge: 2147483647, httpOnly: false });
  }

  if (blacklist.some(path => event.url.pathname.startsWith(path))) {
    return new Response('Not found', { status: 404 });
  }

  return resolve(event);
};

export const handle = sequence(parachuteHandle, middleLayer);
