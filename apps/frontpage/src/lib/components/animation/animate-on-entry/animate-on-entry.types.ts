import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { Snippet } from 'svelte';

export interface AnimateOnEntryProps {
  /**
   * Animation direction
   */
  direction?: 'up' | 'down' | 'left' | 'right';
  /**
   * Animation duration in seconds
   */
  duration?: number;
  /**
   * Delay before animation starts (in seconds)
   */
  delay?: number;
  /**
   * Animation style
   */
  animation?: 'smooth' | 'spring';
  /**
   * Animation easing function (only used with 'smooth' animation)
   */
  ease?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  /**
   * Overall animation intensity (0-1)
   * Controls distance, blur, and scale if not explicitly set
   * - Low (0.3): subtle, distance ~10px, blur ~3px, scale 0.98
   * - Medium (0.5): default, distance ~20px, blur ~6px, scale 0.96
   * - High (0.8): dramatic, distance ~35px, blur ~10px, scale 0.92
   */
  intensity?: number;
  /**
   * Distance to move (in pixels)
   * Overrides intensity-based default
   */
  distance?: number;
  /**
   * Whether to add blur effect
   */
  blur?: boolean;
  /**
   * Initial blur amount (in px)
   * Overrides intensity-based default
   */
  blurAmount?: number;
  /**
   * Whether to add scale effect
   */
  scale?: boolean;
  /**
   * Initial scale amount (e.g., 0.95)
   * Overrides intensity-based default
   */
  scaleAmount?: number;
  /**
   * Stagger configuration for child elements
   */
  stagger?: {
    /** Enable stagger animation for children */
    enabled: boolean;
    /** Delay between each child animation (in seconds) */
    delay?: number;
    /** CSS selector for children to stagger (default: ':scope > *') */
    selector?: string;
  };
  /**
   * Trigger configuration
   */
  trigger?: string;
  /**
   * Custom CSS styles
   */
  css?: SystemStyleObject;
  /**
   * Additional class names
   */
  class?: string;
  /**
   * Content to animate
   */
  children?: Snippet;
  /**
   * Callback when animation starts
   */
  onStart?: () => void;
  /**
   * Callback when animation completes
   */
  onComplete?: () => void;
}







