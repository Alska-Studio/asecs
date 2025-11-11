/**
 * Live Preview Store - Svelte 5 Reactive Store
 * Manages live preview state and updates from Payload CMS
 */

import type { Page } from '@asecs/shared/payload-types';

import { subscribe, unsubscribe, ready } from '@payloadcms/live-preview';
import { transformPayloadToPage, needsTransformation } from './transformer';
import { LIVE_PREVIEW_CONFIG } from './constants';
import { noOpRequestHandler } from './request-handler';
import { SvelteDate } from 'svelte/reactivity';

export interface LivePreviewOptions<T> {
  initialData: T;
  serverURL?: string;
  depth?: number;
  debug?: boolean;
  locale?: string;
}

/**
 * Create a reactive live preview store using Svelte 5 runes
 */
export class LivePreviewStore<T = Partial<Page>> {
  // Reactive state using Svelte 5 $state rune
  data = $state<T | null>(null);
  isLoading = $state(false);
  isConnected = $state(false);
  updateCount = $state(0);
  lastUpdate = $state<Date | null>(null);

  // Private properties
  private subscription: ((event: MessageEvent) => void) | null = null;
  private debug: boolean;

  constructor(options: LivePreviewOptions<T>) {
    const {
      initialData,
      serverURL = LIVE_PREVIEW_CONFIG.serverURL,
      depth = LIVE_PREVIEW_CONFIG.defaultDepth,
      debug = LIVE_PREVIEW_CONFIG.debug,
      locale
    } = options;

    this.debug = debug;
    this.data = initialData;

    if (this.debug) {
      console.log('[LivePreviewStore] Initializing', {
        serverURL,
        depth,
        locale,
        hasInitialData: !!initialData
      });
    }

    // Use no-op request handler to prevent ALL API calls
    // Since we have SSR data, we don't need to fetch relationships
    // The live preview will only update via postMessage events

    // Subscribe to Payload live preview updates
    // The subscribe function expects Record<string, any> but we handle typing internally
    this.subscription = subscribe({
      callback: (mergedData: Record<string, unknown>) => {
        this.handleUpdate(mergedData as T);
      },
      serverURL,
      initialData: initialData as Record<string, unknown>,
      depth,
      // Use no-op handler to prevent any API calls
      requestHandler: noOpRequestHandler
    });

    // Send ready message to establish connection
    ready({ serverURL });
    this.isConnected = true;

    if (this.debug) {
      console.log('[LivePreviewStore] Ready message sent, connected');
    }
  }

  /**
   * Handle incoming updates from Payload
   */
  private handleUpdate(mergedData: T) {
    if (this.debug) {
      console.log('[LivePreviewStore] Received update', {
        hasData: !!mergedData,
        needsTransform: needsTransformation(mergedData)
      });
    }

    // Transform data if needed
    let processedData: T;
    if (needsTransformation(mergedData)) {
      processedData = transformPayloadToPage(mergedData as any) as T;
    } else {
      processedData = mergedData;
    }

    // Update reactive state
    this.data = processedData;
    this.lastUpdate = new SvelteDate();
    this.updateCount++;
    this.isLoading = false;

    if (this.debug) {
      console.log('[LivePreviewStore] State updated', {
        updateCount: this.updateCount,
        timestamp: this.lastUpdate
      });
    }
  }

  /**
   * Get formatted last update time
   */
  get formattedLastUpdate(): string {
    if (!this.lastUpdate) return 'Never';
    return this.lastUpdate.toLocaleTimeString();
  }

  /**
   * Clean up subscriptions
   */
  cleanup() {
    if (this.subscription) {
      if (this.debug) {
        console.log('[LivePreviewStore] Cleaning up');
      }
      unsubscribe(this.subscription);
      this.subscription = null;
      this.isConnected = false;
    }
  }
}

/**
 * Factory function to create a live preview store
 */
export function createLivePreviewStore<T = Page>(options: LivePreviewOptions<T>): LivePreviewStore<T> {
  return new LivePreviewStore(options);
}
