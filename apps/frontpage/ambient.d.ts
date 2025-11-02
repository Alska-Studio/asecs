declare module '$env/static/private';
declare module '$env/static/public';
declare module '$env/dynamic/private';
declare module '$env/dynamic/public';

type KlarnaCheckoutApi = {
  suspend: (options?: {
    autoResume: {
      enabled: boolean;
    };
  }) => void;
  resume: () => void;
  on: (events: {
    [key in KlarnaCheckoutEvent]?: (data: any, callback?: (response: { should_proceed: boolean, message?: string }) => void) => void
  }) => void;
}

type KlarnaCheckoutEvent =
  | 'load'
  | 'user_interacted'
  | 'customer'
  | 'change'
  | 'billing_address_change'
  | 'shipping_address_change'
  | 'shipping_option_change'
  | 'shipping_address_update_error'
  | 'order_total_change'
  | 'checkbox_change'
  | 'can_not_complete_order'
  | 'network_error'
  | 'redirect_initiated'
  | 'load_confirmation'
  | 'validation_callback';

  interface Window {
  _klarnaCheckout: (callback: (api: KlarnaCheckoutApi) => void) => void;
  lipscore?: { initWidgets?: () => void; };
  gtag: (key: string, value: string, params: Record<string, unknown>) => void;
}

declare const gtag: (key: string, value: string, params: Record<string, unknown>) => void;
declare const lipscore: { initWidgets?: () => void; };

// Magic imports (these will resolve to the storefronts local modules)
declare module '$lib/storyblok';

declare module '$lib/parachute/messages';
declare module '$lib/parachute/runtime' {
  export const locales: string[];
  export const baseLocale: string;
  export const getLocale: () => string;
  export const setLocale: (locale: string) => void;
  export const onSetLocale: (callback: (locale: string) => void) => void;
  export const isLocaleAvailable: (locale: string) => boolean;
}

declare module '$lib/parachute/routes' {
  export const delocalizeUrl: (url: string) => string;
  export const localizeUrl: (url: string, locale?: string) => string;
  export const getLocaleFromUrl: (url: string) => { locale: string; url: string };
}

declare module '@rollup/plugin-terser' {
  import type { Plugin } from 'rollup';
  export default function terser(): Plugin;
}

import type { Config } from '@asecs/shared/payload-types';

declare module 'payload' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
  export interface GeneratedTypes extends Config {}
}