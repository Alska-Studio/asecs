<script lang="ts">
  /**
   * StoreCard - Domain-specific card for displaying store information
   *
   * This component wraps the generic ImageCard component and maps store data
   * to the appropriate ImageCard props. It provides a convenient API for
   * store-specific contexts while reusing the presentation logic.
   *
   * @example
   * ```svelte
   * <StoreCard
   *   store={storeData}
   *   badges={[{ label: 'Open now', icon: 'clock' }]}
   * />
   * ```
   */
  import { ImageCard } from '$lib/components/image-card';
  import type { StoreCardProps } from './store-card.types';

  const {
    store,
    badges = [],
    logoOverlay = false, // TODO: Implement overlay snippet support in ImageCard
    onClick,
    css: cssProp
  }: StoreCardProps = $props();

  // Map store data to ImageCard props
  // Use heroImage only - logo is for overlay, never main image
  const imageCardProps = $derived({
    image: store.heroImage?.url || '',
    title: store.name,
    meta: undefined, // Stores don't have meta text currently
    badges: badges,
    href: `/stores/${store.slug}`,
    onclick: onClick,
    alt: store.name,
    css: cssProp
  });
</script>

<ImageCard {...imageCardProps} />
