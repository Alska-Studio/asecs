import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { payload } from '$lib/server/payload';
import { getLocaleFromUrl } from '../../utilities/locale.shared';

export const load: PageServerLoad = async ({ url }) => {
  console.log('[...paths]/+page.server.ts', url.pathname);
  const locale = getLocaleFromUrl(url);

  const page = await payload?.find({
    collection: 'pages',
    locale: locale.language,
    where: {
      slug: {
        equals: url.pathname
      }
    }
  });

  console.log('[...paths]/+page.server.ts', page);

  if (!page?.docs?.length) {
    return error(404, 'Page not found');
  }

  console.log('[...paths]/+page.server.ts', page.docs[0]);

  return {
    page: {
      id: page.docs[0].id,
      title: page.docs[0].title,
      slug: page.docs[0].slug
    }
  };
};
