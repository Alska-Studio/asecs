/**
 * Block components and types
 *
 * These blocks match those available in Payload collections:
 * - Pages: HeroParallax, Ingress, RichText, RichTextWithHeading, Blockquote, ImageGallery
 * - Stores: Ingress, RichText, RichTextWithHeading, Blockquote, ImageGallery, DealsCarousel
 * - Restaurants: Ingress, RichText, RichTextWithHeading, Blockquote, ImageGallery, DealsCarousel
 */

// Block Renderer
export { default as BlockRenderer } from './BlockRenderer.svelte';

// Hero blocks
export { HeroParallax } from './hero-parallax';

// Content blocks (reusable across all collections)
export { Ingress } from './ingress';
export { RichText } from './rich-text';
export { RichTextWithHeading } from './rich-text-with-heading';
export { Blockquote } from './blockquote';

// Media blocks
export { ImageGallery } from './image-gallery';
export { DealsCarousel } from './deals-carousel';

// Export types
export type { HeroParallaxProps, OpeningHoursBadge, QuickLink } from './hero-parallax';
export type { IngressProps } from './ingress';
export type { RichTextProps } from './rich-text';
export type { RichTextWithHeadingProps } from './rich-text-with-heading';
export type { BlockquoteProps } from './blockquote';
export type { ImageGalleryProps } from './image-gallery';
export type { DealsCarouselProps } from './deals-carousel';
export type { LexicalContent } from './types';


