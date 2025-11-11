// See https://kit.svelte.dev/docs/types#app

import type { TypedLocale } from 'payload';

// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      parachute: {
        locale: string;
        typedLocale: TypedLocale;
      };
    }

    // interface Error {}
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
