/**
 * Intersection Observer utilities for scroll-triggered animations
 */

export interface IntersectionConfig {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

export interface IntersectionCallback {
  (entry: IntersectionObserverEntry, observer: IntersectionObserver): void;
}

/**
 * Create an optimized intersection observer for animation triggers
 */
export function createIntersectionObserver(
  callback: IntersectionCallback,
  config: IntersectionConfig = {}
): IntersectionObserver {
  const {
    threshold = 0,
    rootMargin = '0px',
    root = null
  } = config;

  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        callback(entry, observer);
      });
    },
    {
      threshold,
      rootMargin,
      root
    }
  );
}

/**
 * Observe an element with the intersection observer
 */
export function observeElement(
  element: Element,
  callback: IntersectionCallback,
  config?: IntersectionConfig
): () => void {
  const observer = createIntersectionObserver(callback, config);
  observer.observe(element);

  // Return cleanup function
  return () => {
    observer.unobserve(element);
    observer.disconnect();
  };
}

/**
 * Get intersection ratio from entry
 */
export function getIntersectionRatio(entry: IntersectionObserverEntry): number {
  return entry.intersectionRatio;
}

/**
 * Check if element is intersecting
 */
export function isIntersecting(entry: IntersectionObserverEntry): boolean {
  return entry.isIntersecting;
}

/**
 * Get element's position relative to viewport
 */
export function getElementProgress(entry: IntersectionObserverEntry): number {
  const { boundingClientRect, rootBounds } = entry;

  if (!rootBounds) return 0;

  const elementTop = boundingClientRect.top;
  const elementHeight = boundingClientRect.height;
  const viewportHeight = rootBounds.height;

  // Calculate progress from 0 to 1 as element moves through viewport
  const progress = (viewportHeight - elementTop) / (viewportHeight + elementHeight);

  return Math.max(0, Math.min(1, progress));
}
