<script lang="ts">
  /**
   * CollectionCard - Generic card for displaying collection items (stores, restaurants, events)
   */
  import { ImageCard } from '$lib/components/image-card';
  import type { ImageCardProps } from '$lib/components/image-card';
  import type { CollectionCardProps } from './collection-card.types';

  const {
    item,
    collectionType,
    badges = [],
    logoOverlay = false,
    onClick,
    css: cssProp
  }: CollectionCardProps = $props();

  // Map collection item data to ImageCard props
  const imageCardProps: ImageCardProps = $derived({
    image: item.heroImage?.url || '',
    title: item.name,
    meta: undefined,
    badges: badges as any, // CollectionBadge matches CardBadge but TypeScript needs help
    href: `/${collectionType}/${item.slug}`,
    onclick: onClick,
    alt: item.name,
    css: cssProp
  });
</script>

<ImageCard {...imageCardProps} />

