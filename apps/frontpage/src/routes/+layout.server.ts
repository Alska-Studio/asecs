import type { LayoutServerLoad } from './$types';
import { baseLocale } from '$lib/parachute/runtime';

export const load: LayoutServerLoad = async ({ locals }) => {
  const locale = locals.parachute.locale || baseLocale;
  return { locale };
};
