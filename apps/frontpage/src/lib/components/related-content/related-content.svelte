<script lang="ts">
  import { ContentCardCarousel } from '$lib/components/content-card-carousel';
  import type { RelatedContentProps } from './related-content.types';
  import type { ImageCardProps } from '$lib/components/image-card';

  const { items, title = 'Upplev mer', limit = 8 }: RelatedContentProps = $props();

  const getCards = () => {
    const cards: ImageCardProps[] = [];

    for (const item of items?.slice(0, limit) ?? []) {
      if (typeof item.value === 'string') {
        continue;
      }

      switch (item.relationTo) {
          case 'stores': {
            const value = item.value; // Type assertion for simpler access
            cards.push({
              image: value?.heroImage || '',
              title: value?.name || '',
              meta: value?.tags?.map((t) => typeof t === 'string' ? t : t.name).join(', ') || 'Butik',
              href: `/stores/${value?.slug}`,
              badges: Array.isArray(value?.tags) ?
                value.tags
                  .filter((tag) => tag && typeof tag === 'object' && tag.name)
                  .map((tag) => ({
                    label: typeof tag === 'string' ? tag : tag.name,
                    icon: 'dot' as const
                  }))
                : []
            });
            break;
          }
          case 'events': {
            const value = item.value; // Type assertion for simpler access
            cards.push({
              image: value?.heroImage || '',
              title: value?.name || '',
              meta: 'Event',
              href: `/events/${value?.slug}`,
              badges: [{ label: 'Event', icon: 'clock' as const }]
            });
            break;
          }
          case 'restaurants': {
            const value = item.value; // Type assertion for simpler access
            cards.push({
              image: value?.heroImage || '',
              title: value?.name || '',
              meta: 'Restaurant',
              href: `/restaurants/${value?.slug}`,
              badges: Array.isArray(value?.tags)
                ? value.tags
                    .filter((tag) => tag && typeof tag === 'object' && tag.name)
                    .map((tag) => ({
                      label: typeof tag === 'string' ? tag : tag.name,
                      icon: 'dot' as const
                    }))
                : []
            });
            break;
          }
        }
    }
    return cards;
  };

  // Map polymorphic content to ImageCardProps format
  const cards = $derived(getCards());
</script>

{#if cards.length > 0}
  <ContentCardCarousel
    cards={cards}
    {title}
    fadeEdges={true}
    hideNavigation={false}
    hideIndicators={true}
  />
{/if}

