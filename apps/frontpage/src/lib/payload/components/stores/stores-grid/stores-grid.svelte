<script lang="ts">
  import { css, cx } from '@agapi/ui/panda/css';
  import { StoreCard } from '../store-card';
  import { AnimateOnEntry } from '$lib/components/animation';
  import * as m from '$lib/parachute/messages';
  import {
    sectionContainer,
    headerContainer,
    storeCount,
    viewToggleButton,
    toggleIcon,
    storesGrid,
    emptyState,
    emptyStateTitle,
    emptyStateMessage
  } from './stores-grid.styles';
  import type { StoresGridProps } from './stores-grid.types';
  import type { StoreBadge } from '../store-card';
  import { Button } from '$lib/components/button';

  const {
    stores = [],
    showListView = false,
    onToggleView,
    css: cssProp
  }: StoresGridProps = $props();

  // TODO: Replace with actual badge logic based on store data
  const mockBadges: StoreBadge[] = [
    { label: m.stores_opennow(), colorVariant: 'primary.vibrant', icon: 'dot' },
    { label: 'Teknik', colorVariant: 'tertiary.subdued' }
  ];

  const storeCountText = $derived(m.stores_count_other({ count: stores.length }));
</script>

<div class={cx(sectionContainer, css(cssProp))}>
c
  <div class={headerContainer}>

    <AnimateOnEntry direction="up" animation="smooth" trigger="load" duration={0.4} delay={0} blur={true}>
      <h2 class={storeCount}>{storeCountText}</h2>
    </AnimateOnEntry>
      {#if onToggleView}
     <Button variant="text" onclick={onToggleView}>
      <span>{showListView ? m.stores_viewgrid() : m.stores_viewlist()}</span>
      </Button>
  {/if}
  </div>

  {#if stores.length > 0}
    <div class={storesGrid}>
      {#each stores as store (store.id)}
        <AnimateOnEntry
          animation="smooth"
          duration={0.5}
          ease="easeOut"
          trigger="scroll"
          direction="up"
          intensity={0.4}
          blur={true}
          scale={true}
        >
          <a
            href={`/stores/${store.slug}`}
            aria-label={m.stores_visitstore({ name: store.name })}
            style="text-decoration: none; color: inherit;"
          >
            <StoreCard {store} badges={mockBadges} logoOverlay={!!store.logo?.url} />
          </a>
        </AnimateOnEntry>
      {/each}
    </div>
  {:else}

    <div class={emptyState}>
      <AnimateOnEntry direction="up" animation="smooth" duration={0.4} delay={0} blur={true} stagger={{ enabled: true, delay: 0.11 }}>
      <h3 class={emptyStateTitle}>{m.stores_nostores()}</h3>
      <p class={emptyStateMessage}>
        {m.stores_nostoresdescription()}
      </p>
      </AnimateOnEntry>
    </div>
  {/if}
</div>

