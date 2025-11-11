import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Parallax component props for scroll-linked parallax animations
 */
export interface ParallaxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {

  // Parallax-specific props
  /** Main parallax settings for the container */
  parallax?: {
    /** Intensity of the parallax effect when element enters viewport (0-1) */
    enterIntensity?: number;
    /** Intensity of the parallax effect when element exits viewport (0-1) */
    exitIntensity?: number;
    /** Direction of the parallax movement */
    direction?: 'up' | 'down';
    /** Point where transition from enter to exit intensity begins (0-1, default: 0.5) */
    transitionPoint?: number;
  };
  /** Inner content parallax settings for layered effects */
  innerParallax?: {
    /** Intensity of inner content movement (0-1) */
    intensity?: number;
    /** Direction of inner content movement */
    direction?: 'up' | 'down' | 'left' | 'right';
    /** Scale change during scroll (e.g., 1.2 = grows 20%) */
    scale?: number;
  };

  // Common props
  /** Scroll trigger configuration (default: 'start end') */
  trigger?: string;
  /** Custom CSS styles */
  css?: SystemStyleObject;
  /** Content to apply parallax effect to */
  children?: Snippet;

  // Callbacks
  /** Called when animation starts */
  onStart?: () => void;
  /** Called when animation completes */
  onComplete?: () => void;
  /** Called during scroll with progress value (0-1) */
  onProgress?: (progress: number) => void;
};
