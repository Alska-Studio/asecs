<script lang="ts">
  import type { ParallaxProps } from './parallax.types.js';
  import { parallaxStyles } from './parallax.styles.js';
  import { createParallaxAnimation } from './variants/parallax.js';
  import type { ParallaxControls } from './variants/parallax.js';
  import { prefersReducedMotion } from '../shared/animation-utils.js';
  import { css, cx } from '@agapi/ui/panda/css';
  import { onMount } from 'svelte';

  const {
    parallax,
    innerParallax,
    trigger = 'start end',
    css: cssProp,
    children,
    onStart,
    onComplete,
    onProgress,
    ...props
  }: ParallaxProps = $props();

  // Extract parallax settings with defaults only if parallax is provided
  const {
    enterIntensity = parallax ? 0.5 : 0,
    exitIntensity = parallax ? 0.5 : 0,
    direction = 'up',
    transitionPoint = 0.5
  } = parallax || {};

  let element: HTMLDivElement;
  let animationControls: ParallaxControls | null = null;

  onMount(() => {
    // Respect user's motion preferences
    if (prefersReducedMotion()) {
      return;
    }

    // Only create parallax animation if parallax or innerParallax is set
    if (parallax || innerParallax) {
      animationControls = createParallaxAnimation(element, {
        enterIntensity,
        exitIntensity,
        direction,
        transitionPoint,
        innerParallax,
        trigger,
        onStart,
        onComplete,
        onProgress
      });
    }

    // Cleanup on unmount
    return () => {
      animationControls?.destroy();
    };
  });
</script>

<div
  bind:this={element}
  class={cx(parallaxStyles, css(cssProp))}
  {...props}
>
  {#if children}
    <div>
      {@render children()}
    </div>
  {/if}
</div>
