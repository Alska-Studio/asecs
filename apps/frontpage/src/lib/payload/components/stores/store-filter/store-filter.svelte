<script lang="ts">
  import { css, cx } from '@agapi/ui/panda/css';
  import {
    sectionContainer,
    sectionTitle,
    filterGrid,
    filterButton,
    filterButtonChecked,
    checkboxIndicator,
    checkboxIndicatorChecked,
    checkIcon,
    labelText,
    labelTextChecked
  } from './store-filter.styles';
  import type { StoreFilterProps } from './store-filter.types';
  import { AnimateOnEntry } from '$lib/components/animation';

  const {
    title,
    options = [],
    onFilterChange,
    css: cssProp
  }: StoreFilterProps = $props();

  function handleClick(optionId: string, currentChecked: boolean) {
    onFilterChange?.(optionId, !currentChecked);
  }
</script>

<div class={cx(sectionContainer, css(cssProp))}>
  <h3 class={sectionTitle}>{title}</h3>
  <AnimateOnEntry
    direction="up"
    animation="smooth"
    trigger="load"
    duration={0.4}
    delay={0}
    intensity={0.3}
    blur={true}
    stagger={{ enabled: true, delay: 0.1 }}
    css={filterGrid}
  >
    {#each options as option (option.id)}
      <button
        type="button"
        role="checkbox"
        aria-checked={option.checked}
        aria-label={option.label}
        class={cx(filterButton, option.checked && filterButtonChecked)}
        onclick={() => handleClick(option.id, option.checked)}
      >
        <span
          class={cx(checkboxIndicator, option.checked && checkboxIndicatorChecked)}
          aria-hidden="true"
        >
          {#if option.checked}
            <svg class={checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          {/if}
        </span>
        <span class={cx(labelText, option.checked && labelTextChecked)}>
          {option.label}
        </span>
      </button>
    {/each}
  </AnimateOnEntry>
</div>

