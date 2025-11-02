import type { LayoutServerLoad } from './$types';
import type { TypedLocale } from 'payload';

import { payload } from '$payload';
import { getLocaleFromUrl } from '../utilities/locale.shared';

export const load: LayoutServerLoad = async ({ url }) => {
  const locale = getLocaleFromUrl<TypedLocale>(url);

  const navItems = await payload.find({
    collection: 'navigation_items',
    locale: locale.language
  });

  return {
    nav: {
      items: navItems?.docs?.map((item) => ({
        label: item.label,
        href: item.href
      }))
    }
  };
};
