import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
// import { payload } from '$lib/server/payload';
import { getLocaleFromUrl } from '../utilities/locale.shared';
import configPromise from '@payload-config';
import { getPayload } from 'payload';


export const load: PageServerLoad = async ({ url }) => {
  console.log('+page.server.ts', url.pathname);
  const locale = getLocaleFromUrl(url);

  const page = (await getPayload({ config: configPromise })).find({
    collection: 'pages',
    locale: locale.language,
    where: { slug: { equals: '/' } }
  });

  if (!page?.docs?.length) {
    return error(404, 'Page not found');
  }

  console.log('+page.server.ts', page);

  return {
    page: {
      id: page.docs[0].id,
      title: page.docs[0].title,
      slug: page.docs[0].slug,
      content_blocks: page.docs[0].content_blocks,
      content: page.docs[0].content
    }
  };
};
