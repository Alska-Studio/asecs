<script lang="ts">
  import { onMount } from 'svelte';
  import { scroll, animate } from 'motion';
  import { css, cx } from '@agapi/ui/panda/css';
  import { dynamicColorStyles } from '@agapi/ui/panda/utils';
  import { scrollMarquee, marqueeContent } from './scroll-marquee.styles';
  import { getSpacingValue } from './scroll-marquee.utils';
  import type { ScrollMarqueeProps } from './scroll-marquee.types';

  const {
    colorVariant = 'default',
    intensity = 0.5,
    tilt = 0,
    background = true,
    direction = 'left',
    baseSpeed = 20,
    spacing = 'normal',
    style,
    css: cssProp,
    children,
    ...props
  }: ScrollMarqueeProps = $props();

            // Element refs
  let containerRef: HTMLElement;
  let contentRef: HTMLElement;
  let duplicateRef: HTMLElement;

        onMount(() => {
    if (!containerRef || !contentRef || !duplicateRef) return;

    // Calculate the width of the content for smooth looping
    const contentWidth = contentRef.offsetWidth;
    const distance = direction === 'left' ? -contentWidth : contentWidth;

    // Create base animation using Motion.js
    const baseAnimation = animate(
      [contentRef, duplicateRef],
      {
        x: [0, distance]
      },
      {
        duration: baseSpeed,
        repeat: Infinity,
        ease: 'linear'
      }
    );

    // Create scroll-linked speed control
    const scrollCleanup = scroll(
      (progress: number) => {
        // Calculate speed multiplier based on scroll progress and intensity
        const speedMultiplier = 1 + (progress * intensity);

        // Use playbackRate to control speed smoothly
        if (baseAnimation && 'playbackRate' in baseAnimation) {
          baseAnimation.playbackRate = speedMultiplier;
        }
      },
      {
        target: containerRef,
        offset: ['start end', 'end start']
      }
    );

    // Cleanup
    return () => {
      baseAnimation.cancel();
      scrollCleanup();
    };
  });
</script>

<div
  bind:this={containerRef}
  class={cx(
    scrollMarquee({
      background,
      tilt: tilt !== 0
    }),
    css(cssProp)
  )}
  style="
    {background ? `--bgColor: ${dynamicColorStyles(colorVariant).backgroundColor}; --fgColor: ${dynamicColorStyles(colorVariant).color};` : ''}
    {tilt !== 0 ? `transform: rotate(${tilt}deg);` : ''}
    {style || ''}
  "
  {...props}
>
    <div
    class={css({ display: 'flex' })}
    style="gap: {getSpacingValue(spacing)};"
  >
    <div
      bind:this={contentRef}
      class={marqueeContent({})}
    >
      {#if children}
        {@render children()}
      {/if}
    </div>

    <!-- Duplicate content for seamless loop -->
    <div
      bind:this={duplicateRef}
      class={marqueeContent({})}
      aria-hidden="true"
    >
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
</div>

