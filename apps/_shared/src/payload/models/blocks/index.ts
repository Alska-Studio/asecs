/**
 * Block exports for Payload CMS
 *
 * These blocks are used in collections:
 * - Pages: HeroParallax, Ingress, RichText, RichTextWithHeading, Blockquote, ImageGallery
 * - Stores: Ingress, RichText, RichTextWithHeading, Blockquote, ImageGallery, DealsCarousel
 * - Restaurants: Ingress, RichText, RichTextWithHeading, Blockquote, ImageGallery, DealsCarousel
 */

// Hero blocks
export { HeroParallax } from './hero-parallax';

// Content blocks (reusable across all collections)
export { Ingress } from './ingress';
export { RichText } from './rich-text';
export { RichTextWithHeading } from './rich-text-with-heading';
export { Blockquote } from './block-quote';

// Media blocks (reusable across stores, restaurants, and other content types)
export { ImageGallery } from './image-gallery';
export { DealsCarousel } from './deals-carousel';
