import type { PageServerLoad } from './$types';

import { error, isHttpError } from '@sveltejs/kit';
import { payload } from '$server/payload';

export const load: PageServerLoad = async ({ params, url, locals, setHeaders }) => {
  console.log('[routes/stores/[slug]/+page.server.ts]');
  setHeaders({ 'Cache-Control': `max-age=${2*60*60}, s-maxage=${24*60*60}` }); // cdn-cache: 2 hours, browser-cache: 1 day

  const { slug } = params;
  const isPreview = url.searchParams.get('preview') === 'true';

  try {
    const store = await payload?.find({
      collection: 'stores',
      locale: locals.parachute.typedLocale,
      where: { slug: { equals: slug } }
    });

    if (!store.totalPages) {
      throw error(404, `Store not found: ${slug}`);
    }

    return { store: store.docs[0], isPreview };
  } catch (e) {
    console.error('Error fetching store from Payload:', e);
    if (isHttpError(e, 404)) {
      throw e;
    }
    throw error(500, 'Failed to load store');
  }
};
