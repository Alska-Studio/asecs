import type { Reroute } from '@sveltejs/kit';
import { delocalizeUrl } from '$lib/parachute/routes';

export const reroute: Reroute = ({ url }) => {
  return new URL(delocalizeUrl(url.href)).pathname;
}

export const transport = undefined; // Just to ignore the unimplemented warning
