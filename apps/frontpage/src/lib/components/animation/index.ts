// Animation Components MVP
// Built according to specifications with Motion.js integration

// Parallax - Scroll-linked parallax animations
export { Parallax } from './parallax/index.js';
export type { ParallaxProps } from './parallax/index.js';

// AnimatedText - Reveal type, wordByWord variant only in MVP
export { AnimatedText } from './animated-text/index.js';
export type { AnimatedTextProps } from './animated-text/index.js';

// AnimateOnEntry - Entrance animations for any content
export { AnimateOnEntry } from './animate-on-entry/index.js';
export type { AnimateOnEntryProps } from './animate-on-entry/index.js';

// Shared utilities (for advanced usage)
export * from './shared/animation-utils.js';
export * from './shared/intersection-observer.js';