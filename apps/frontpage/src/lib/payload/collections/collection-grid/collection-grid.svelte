<script lang="ts">
  import { css, cx } from '@agapi/ui/panda/css';
  import { CollectionCard } from '../collection-card';
  import { AnimateOnEntry } from '$lib/components/animation';
  import {
    sectionContainer,
    headerContainer,
    itemCount,
    itemsGrid,
    emptyState,
    emptyStateTitle,
    emptyStateMessage
  } from './collection-grid.styles';
  import type { CollectionGridProps } from './collection-grid.types';
  import type { CollectionBadge } from '../collection-card';
  import { Button } from '$lib/components/button';

  const {
    items = [],
    collectionType,
    collectionLabel,
    emptyStateTitle: emptyTitle = 'Inga resultat hittades',
    emptyStateMessage: emptyMessage = 'Prova att ändra dina filterval för att se fler resultat',
    showListView = false,
    onToggleView,
    css: cssProp
  }: CollectionGridProps = $props();

  // TODO: Replace with actual badge logic based on item data
  const mockBadges: CollectionBadge[] = [
    { label: 'Öppet nu', colorVariant: 'primary.vibrant', icon: 'dot' }
  ];

  const countText = $derived(`${items.length} ${collectionLabel}`);
</script>

<div class={cx(sectionContainer, css(cssProp))}>
  <div class={headerContainer}>
    <AnimateOnEntry direction="up" animation="smooth" trigger="load" duration={0.4} delay={0} blur={true}>
      <h2 class={itemCount}>{countText}</h2>
    </AnimateOnEntry>
    {#if onToggleView}
      <Button variant="text" onclick={onToggleView}>
        <span>{showListView ? 'Visa rutnät' : 'Visa lista'}</span>
      </Button>
    {/if}
  </div>

  {#if items.length > 0}
    <div class={itemsGrid}>
      {#each items as item (item.id)}
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
          <!-- <a> inside a <a> is not allowed, ImageCard has <a> and CollectionCard uses ImageCard -->
          <!--a
            href={`/${collectionType}/${item.slug}`}
            aria-label={`Besök ${item.name}`}
            style="text-decoration: none; color: inherit;"
          >
            <CollectionCard
              {item}
              {collectionType}
              badges={mockBadges}
              logoOverlay={!!item.logo?.url}
            />
          </a-->
          <CollectionCard
            {item}
            {collectionType}
            badges={mockBadges}
            logoOverlay={!!item.logo?.url}
          />
        </AnimateOnEntry>
      {/each}
    </div>
  {:else}
    <div class={emptyState}>
      <AnimateOnEntry direction="up" animation="smooth" duration={0.4} delay={0} blur={true} stagger={{ enabled: true, delay: 0.11 }}>
        <h3 class={emptyStateTitle}>{emptyTitle}</h3>
        <p class={emptyStateMessage}>{emptyMessage}</p>
      </AnimateOnEntry>
    </div>
  {/if}
</div>

