/**
 * Shared animation utilities for the animation component system
 */

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation between two values
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Map a value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Easing functions for animations
 * Using motion library format: arrays of 4 numbers for cubic-bezier, or string for predefined easings
 */
export const easings = {
  linear: 'linear' as const,
  easeOut: [0.25, 1, 0.5, 1] as const, // cubic-bezier(0.25, 1, 0.5, 1)
  easeIn: [0.5, 0, 0.75, 0] as const, // cubic-bezier(0.5, 0, 0.75, 0)
  easeInOut: [0.5, 0, 0.5, 1] as const, // cubic-bezier(0.5, 0, 0.5, 1)
  bounce: [0.68, -0.55, 0.265, 1.55] as const // cubic-bezier(0.68, -0.55, 0.265, 1.55)
} as const;

/**
 * Default animation durations
 */
export const durations = {
  fast: 0.3,
  medium: 0.6,
  slow: 1.0
} as const;

/**
 * Parse trigger string for scroll animations
 * Examples: "start end", "center center", "top bottom"
 */
export function parseTrigger(trigger: string): [string, string] {
  const parts = trigger.split(' ');
  return [parts[0] || 'start', parts[1] || 'end'];
}
