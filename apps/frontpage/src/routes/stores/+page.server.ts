import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { payload } from '$server/payload';

export const load: PageServerLoad = async ({ url, locals, setHeaders }) => {
  console.log('[routes/stores/+page.server.ts]');

  setHeaders({ 'Cache-Control': `max-age=${2*60*60}, s-maxage=${24*60*60}` }); // cdn-cache: 2 hours, browser-cache: 1 day

  const isPreview = url?.searchParams?.get('preview') === 'true';

  try {
    const stores = await payload?.find({
      collection: 'stores',
      locale: locals.parachute.typedLocale,
      limit: 100
    });

    return { stores: stores!.docs, isPreview };
  } catch (err) {
    console.error('Error fetching stores from Payload:', err);
    throw error(500, 'Failed to load stores');
  }
};
