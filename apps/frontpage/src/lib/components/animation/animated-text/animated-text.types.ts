import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

/**
 * AnimatedText component props - reveal type with wordByWord and lineByLine variants
 */
export interface AnimatedTextProps extends Omit<HTMLAttributes<HTMLElement>, 'class' | 'style'> {
  // Reveal type with multiple variants
  type: 'reveal';
  variant: 'wordByWord' | 'lineByLine';

  /** The text content to animate (optional if using children) */
  text?: string;

  /** Children content to animate (alternative to text prop) */
  children?: Snippet;

  // Reveal-specific props
  /** Direction of the reveal animation */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** Stagger delay between words/lines in seconds */
  stagger?: number;

  // Common props
  /** When to trigger the animation */
  trigger?: 'scroll' | 'load';
  /** Scroll trigger offset configuration */
  triggerOffset?: string;
  /** Duration of each word animation in seconds */
  duration?: number;
  /** Initial delay before starting animation in seconds */
  delay?: number;
  /** Easing function for the animation */
  ease?: string;
  /** Custom CSS styles for the container */
  css?: SystemStyleObject;
  /** HTML element type to render as */
  as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  /** Inline style attribute */
  style?: string;

  // Callbacks
  /** Called when animation starts */
  onStart?: () => void;
  /** Called when animation completes */
  onComplete?: () => void;
};
