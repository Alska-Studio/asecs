/**
 * ImageCard Component
 *
 * Generic card component for image-based content with title, meta text, and badges.
 * Can be used for stores, products, events, articles, etc.
 *
 * @example
 * ```svelte
 * import { ImageCard } from '$lib/components/image-card';
 *
 * <ImageCard
 *   image="/path/to/image.jpg"
 *   title="Card Title"
 *   href="/details"
 *   badges={[{ label: 'Badge', icon: 'dot' }]}
 * />
 * ```
 */
export { default as ImageCard } from './image-card.svelte';
export type { ImageCardProps, CardBadge, BadgeIconType } from './image-card.types';

