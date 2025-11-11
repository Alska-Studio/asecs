<script lang="ts">
  /**
   * Deals Carousel Block
   *
   * Displays deals in a carousel format.
   * This block automatically reads deals from the parent context (store/restaurant).
   *
   * Note: This component expects to receive deals via props from the parent
   * page component. The deals are passed down from the page data.
   */
  import type { ImageCardProps } from '$lib/components/image-card';
  import type { DealsCarouselProps } from './deals-carousel.types';

  import { ContentCardCarousel } from '$lib/components/content-card-carousel';
  import { AnimateOnEntry } from '$lib/components/animation';

  const {
    title = 'Våra deals',
    showOnlyActive = true,
    deals = []
  }: DealsCarouselProps = $props();

  // Filter active deals if needed
  const filteredDeals = $derived(
    showOnlyActive
      ? deals.filter((d) => d.isActive !== false)
      : deals
  );

  // Transform deals to ImageCard format
  const cards: ImageCardProps[] = $derived(
    filteredDeals.map((deal) => ({
      image: deal.image || `https://picsum.photos/seed/deal-${deal.id}/400/480`,
      title: deal.title || '',
      meta: 'Deal',
      badges: deal.badges?.map((b) => ({
        label: b.label,
        colorVariant: b.colorVariant || 'primary.vibrant',
        icon: 'dot' as const
      })) || []
    }))
  );
</script>

{#if filteredDeals.length > 0}
  <AnimateOnEntry
    direction="up"
    duration={0.8}
    intensity={0.5}
    blur={true}
    css={{
      px: 'app'
    }}
  >
    <ContentCardCarousel {title} {cards} />
  </AnimateOnEntry>
{/if}

