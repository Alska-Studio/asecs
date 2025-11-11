import type { LivePreviewMessageEvent } from '@payloadcms/live-preview';
import type { subscribe } from '@payloadcms/live-preview';

type CollectionPopulationRequestHandler = Parameters<typeof subscribe>[0]['requestHandler'];

/**
 * Custom Request Handler for Live Preview
 * Prevents unnecessary API calls during live preview
 */
export interface RequestHandlerArgs {
  apiPath: string;
  endpoint: string;
  serverURL: string;
}

/**
 * No-op request handler for SSR-populated data
 * Returns empty docs to prevent relationship fetching
 */
export const noOpRequestHandler: CollectionPopulationRequestHandler = async (args) => {
  console.log('[LivePreview] Skipping API call (data already populated from SSR):', args.endpoint);
  return Response.json({ docs: [] });
};

/**
 * Cached request handler that only fetches when necessary
 * Useful for development to reduce API calls
 * TODO: use CacheAPI instead of Map?
 */
const requestCache = new Map<string, unknown>();

export const cachedRequestHandler: CollectionPopulationRequestHandler = async (args) => {
  const { apiPath, endpoint, serverURL } = args;
  const cacheKey = `${serverURL}${apiPath}/${endpoint}`;

  // Check cache first
  if (requestCache.has(cacheKey)) {
    console.log('[LivePreview] Using cached response for:', endpoint);
    return Response.json(requestCache.get(cacheKey));
  }

  // Make the actual request
  console.log('[LivePreview] Fetching:', endpoint);
  const response = await fetch(`${serverURL}${apiPath}/${endpoint}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();

  // Cache the response
  requestCache.set(cacheKey, data);

  return Response.json(data);
};
