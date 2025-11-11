<script lang="ts" module>
  import type { PageData } from './$types';
  import type { Store } from '@asecs/shared/payload-types';
  import type { SocialMediaLink } from '$lib/payload/components/stores/store-info-card';

  const DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  type OpeningHoursData = Record<string, { open: string; close: string; }>;
</script>

<script lang="ts">
  import { page } from '$app/state';

  import { onMount, onDestroy } from 'svelte';
  import { css } from '@agapi/ui/panda/css';

  import { CollectionHero } from '$lib/payload/collections/collection-hero';
  import { BlockRenderer } from '$lib/payload/blocks';

  import { StoreInfoCard, StoreWayfinder } from '$lib/payload/components/stores';

  import { RelatedContent } from '$lib/components/related-content';
  import { createLivePreviewStore, PREVIEW_PARAMS, LIVE_PREVIEW_CONFIG } from '$utils/live-preview';

  const { data }: { data: PageData } = $props();

  // Check if we're in preview mode
  const isPreview = page.url.searchParams.get(PREVIEW_PARAMS.preview) === 'true';

  // Only initialize live preview store on client-side when in preview mode
  let livePreview = $state<ReturnType<typeof createLivePreviewStore<Store>> | null>(null);

  // Use onMount to ensure we're only running on client
  onMount(() => {
    // Only initialize if in preview mode
    if (isPreview && data.store) {
      livePreview = createLivePreviewStore({
        initialData: data.store,
        serverURL: LIVE_PREVIEW_CONFIG.serverURL,
        // Use depth 0 since data is already populated from SSR
        depth: 0,
        debug: LIVE_PREVIEW_CONFIG.debug
      });
    }
  });

  // Reactive store data - use live preview data when available
  const store = $derived<Store>(livePreview?.data || data.store);

  // Cleanup on unmount
  onDestroy(() => {
    livePreview?.cleanup();
  });

  // Content wrapper styles for smooth overlap effect
  const contentWrapperStyles = css.raw({
    position: 'relative',
    borderTopLeftRadius: 'surface.md',
    borderTopRightRadius: 'surface.md',
    overflow: 'hidden',
    backgroundColor: 'surface.default.background',
    mt: '-7'
  });

  const mockOpeningHours: OpeningHoursData = {
    monday: { open: '10:00', close: '20:00' },
    tuesday: { open: '10:00', close: '20:00' },
    wednesday: { open: '10:00', close: '20:00' },
    thursday: { open: '10:00', close: '20:00' },
    friday: { open: '10:00', close: '21:00' },
    saturday: { open: '10:00', close: '18:00' },
    sunday: { open: '11:00', close: '17:00' }
  };


  // Convert store data to opening hours format
  const openingHours = $derived(Object.entries(mockOpeningHours).map(([day, hours]) => ({ day: DAYS_OF_WEEK.indexOf(day), ...hours })));

  // Get related content from store data
  const relatedContent = $derived(store?.relatedContent ?? []);

  // Build social media links array
  const socialMediaLinks = $derived(() => {
    const links: SocialMediaLink[] = [];
    const contact = store.contact;

    if (contact?.links?.instagram) {
      links.push({ platform: 'instagram', url: contact.links.instagram });
    }
    if (contact?.links?.facebook) {
      links.push({ platform: 'facebook', url: contact.links.facebook });
    }
    if (contact?.links?.tiktok) {
      links.push({ platform: 'tiktok', url: contact.links.tiktok });
    }

    return links;
  });

  // Log all blocks for debugging (development only)
  $effect(() => {
    if (import.meta.env.DEV && store && store.contentBlocks) {
      console.log('📦 Store Content Blocks:', store.name);

      console.table(store.contentBlocks.map((block: any, index: number) => ({
        '#': index + 1,
        Type: block.blockType,
        HasHeading: !!block.heading,
        HasStoreName: !!block.storeName,
        HasLabel: !!block.label,
        HasQuote: !!block.quote,
        HasImages: !!block.images?.length
      })));
      console.log('Full block data:', store.contentBlocks);
    }
  });

  // Log related content for debugging
  $effect(() => {
    if (import.meta.env.DEV && store) {
      console.log('🔗 Related Content:', {
        count: relatedContent.length,
        data: relatedContent
      });
    }
  });
</script>

<svelte:head>
  <title>{store.name || 'Store'} - Asecs</title>
  <meta name="description" content={store.metaDescription || store.name} />
</svelte:head>

<div class={css({ backgroundColor: 'surface.default.background', minHeight: '100vh', display: 'flex', flexDirection: 'column' })}>
  <!-- Hero Section -->
  {#key store.name}
    <CollectionHero
      title={store.name}
      titleAlternate={store.contact?.address || 'Jönköping'}
      backgroundImage={store.heroImage}
      openingHours={openingHours}
      actions={[
        {
          label: 'Hitta hit',
          href: '#map',
          icon: 'map-pin',
          variant: 'cta'
        },
        {
          label: 'Läs mer',
          onClick: () => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          },
          icon: 'info',
          variant: 'primary'
        }
      ]}
    />
  {/key}

  <!-- Content Wrapper with smooth overlap effect -->
  <div class={css(contentWrapperStyles)}>
    <div class={css({ display: 'flex', flexDirection: 'column', gap: '0' })}>
      <!-- Render content blocks from CMS -->
      {#if store.contentBlocks?.length}
        {#each store.contentBlocks as block (block.id)}
          <BlockRenderer
            block={{
              ...block,
              // Inject deals for deals carousel block (supports both old and new names)
              ...((block.blockType === 'dealsCarousel') && { deals: store.deals })
            }}
          />
        {/each}
      {/if}

      <!-- Info Card -->
      {#if store}
        <div class={css({ py: 'loose' })}>
          <StoreInfoCard
            openingHours={openingHours}
            phone={store.contact?.phoneNumber}
            website={store.contact?.links?.website}
            socialMediaLinks={socialMediaLinks()}
            viewAllHoursHref="/opening-hours"
          />
        </div>

        <!-- Wayfinder/Map Section -->
        <div id="map" class={css({ mt: 'loose' })}>
          <StoreWayfinder
            storeName={store.name}
            description={`Du hittar ${store.name} vid Entre B, nära ingången. Bredvid finns det ett och annat skoj som också inspirerar. Ha roligt!`}
            mapImage="https://picsum.photos/id/1015/1001/500"
          />
        </div>
      {/if}

      <!-- Related Content -->
      <RelatedContent items={relatedContent} title="Upplev mer" limit={8} />
    </div>
  </div>

  <!-- TODO: Add Footer component -->
</div>
