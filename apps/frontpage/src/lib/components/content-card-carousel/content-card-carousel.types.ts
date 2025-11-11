import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { EmblaOptionsType } from 'embla-carousel';
import type { ImageCardProps } from '../image-card';

export interface ContentCardCarouselProps {
  /**
   * Array of cards to display
   */
  cards: ImageCardProps[];
  /**
   * Optional carousel title
   */
  title?: string | null;
  /**
   * Embla carousel options
   */
  options?: EmblaOptionsType;
  /**
   * Whether to fade the edges
   */
  fadeEdges?: boolean;
  /**
   * Whether to hide navigation arrows
   */
  hideNavigation?: boolean;
  /**
   * Whether to hide indicators
   */
  hideIndicators?: boolean;
  /**
   * Custom CSS styles
   */
  css?: SystemStyleObject;
}







