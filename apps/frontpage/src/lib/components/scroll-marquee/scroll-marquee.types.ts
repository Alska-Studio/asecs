import type { ColorVariant } from '@agapi/ui/types';
import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { Snippet } from 'svelte';

export interface ScrollMarqueeProps {
  /**
   * The color variant of the marquee
   */
  colorVariant?: ColorVariant;
  /**
   * The intensity of the scroll-linked animation
   */
  intensity?: number;
  /**
   * The tilt angle in degrees (optional)
   */
  tilt?: number;
  /**
   * Whether to show the background
   */
  background?: boolean;
  /**
   * Custom style string
   */
  style?: string;
  /**
   * The content of the marquee
   */
  children?: Snippet;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
  /**
   * The direction of the marquee
   */
  direction?: 'left' | 'right';
  /**
   * The speed of the base rotation
   */
  baseSpeed?: number;
  /**
   * The spacing between duplicated content using semantic tokens
   */
  spacing?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | 'app';
}