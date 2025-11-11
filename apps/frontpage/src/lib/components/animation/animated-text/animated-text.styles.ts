import { css } from '@agapi/ui/panda/css';
import type { SystemStyleObject } from '@agapi/ui/panda/types';

/**
 * Base styles for AnimatedText component
 * Includes SSR-safe opacity: 0 that gets removed when ready
 */
export const animatedTextStyles = css({
  position: 'relative',
  // SSR-safe: hide content until JavaScript is ready
  '&:not(.animated-text-ready)': {
    opacity: 0
  }
});

/**
 * Styles for individual line containers with overflow hidden
 */
export const lineContainerStyles = css({
  overflow: 'hidden', // Create the "sliding from behind" effect for each line
  display: 'block',
  position: 'relative'
});

/**
 * Styles for individual animated words
 * Initial state: hidden and transformed for reveal animation
 */
export const animatedWordStyles = css.raw({
  display: 'inline-block',
  willChange: 'transform',
  transformOrigin: 'bottom left', // Rotate from bottom left corner
  // Initial state for reveal animation
  opacity: '0',
  transform: 'translate(0px, 30px) rotate(8deg) scale(0.8)',
  filter: 'blur(8px)'
});

/**
 * Styles for animated lines (lineByLine variant)
 * Initial state: hidden with upward offset and blur (no rotation)
 */
export const animatedLineStyles = css.raw({
  display: 'block',
  willChange: 'transform, opacity, filter',
  // Initial state for line-by-line reveal
  opacity: '0',
  transform: 'translateY(20px)', // Simple upward movement, no rotation
  filter: 'blur(4px)'
});

/**
 * Get container styles with custom CSS
 */
export function getContainerStyles(customCss?: SystemStyleObject): string {
  const baseStyles = {
    position: 'relative' as const,
    // SSR-safe: hide content until JavaScript is ready
    '&:not(.animated-text-ready)': {
      opacity: 0
    }
  };

  return customCss ?
    css({ ...baseStyles, ...customCss }) :
    animatedTextStyles;
}
