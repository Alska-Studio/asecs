/**
 * Live Preview Constants
 * Centralized configuration for Payload CMS live preview
 */

import { dev } from '$app/environment';

export const LIVE_PREVIEW_CONFIG = {
  // Default Payload server URL (can be overridden in component)
  get serverURL() {
    // Check if running in browser and env var exists
    if (typeof window !== 'undefined' && import.meta.env?.PUBLIC_PAYLOAD_SERVER_URL) {
      return import.meta.env.PUBLIC_PAYLOAD_SERVER_URL;
    }
    return 'http://localhost:4000';
  },

  // Default depth for relationship fetching
  defaultDepth: 2,

  // Debug mode in development
  debug: dev,

  // Preview banner styles
  banner: {
    bgGradient: 'linear-gradient(90deg, #ff6b6b, #ff8787)',
    textColor: 'white',
    height: '48px'
  }
} as const;

export const PREVIEW_PARAMS = {
  preview: 'preview',
  token: 'token',
  locale: 'locale'
} as const;
