<script lang="ts">
  import { css } from '@agapi/ui/panda/css';
  import {
    wayfinderRoot,
    headingSection,
    headingText,
    storeNameText,
    descriptionText,
    mapContainer,
    mapImage
  } from './store-wayfinder.styles';
  import type { StoreWayfinderProps } from './store-wayfinder.types';

  const {
    storeName,
    description,
    mapImage: map,
    mapAlt = 'Store location map',
    css: cssProp
  }: StoreWayfinderProps = $props();
</script>

<div class={css(wayfinderRoot)}>
  <!-- Heading Section -->
  <div class={css(headingSection)}>
    <p class={css(headingText)}>
      Hitta till<br />
      <span class={css(storeNameText)}>{storeName || 'Butiken'}</span>
    </p>
    {#if description}
      <p class={css(descriptionText)}>{description}</p>
    {/if}
  </div>

  <!-- Map -->
  {#if map}
    <div class={css(mapContainer)}>
      <img src={map} alt={mapAlt} class={css(mapImage)} />
    </div>
  {/if}
</div>

