<script lang="ts">
  import { onMount } from 'svelte';
  import { animate, stagger, type AnimationOptions } from 'motion';
  import { css, cx } from '@agapi/ui/panda/css';
  import type { AnimateOnEntryProps } from './animate-on-entry.types.js';
  import { observeElement } from '../shared/intersection-observer.js';
  import { prefersReducedMotion, easings } from '../shared/animation-utils.js';

  const {
    direction = 'up',
    duration = 0.6,
    delay = 0,
    animation = 'spring',
    ease = 'easeOut',
    intensity = 0.5,
    distance,
    blur = true,
    blurAmount,
    scale = false,
    scaleAmount,
    stagger: staggerConfig,
    trigger = 'start end',
    css: cssProp,
    class: className,
    children,
    onStart,
    onComplete
  }: AnimateOnEntryProps = $props();

  // Calculate defaults based on intensity
  // Intensity range: 0.3 (subtle) -> 0.5 (medium) -> 0.8+ (dramatic)
  const calculatedDistance = distance ?? Math.round(intensity * 40); // 0.5 = 20px
  const calculatedBlurAmount = blurAmount ?? Math.round(intensity * 12); // 0.5 = 6px
  const calculatedScaleAmount = scaleAmount ?? (1 - intensity * 0.08); // 0.5 = 0.96

  let containerElement: HTMLElement;
  let hasAnimated = false;
  let cleanupObserver: (() => void) | null = null;
  let isReady = $state(false);

  const getTransform = () => {
    const transforms = [];

    // Add translate based on direction
    switch (direction) {
      case 'up':
        transforms.push(`translateY(${calculatedDistance}px)`);
        break;
      case 'down':
        transforms.push(`translateY(-${calculatedDistance}px)`);
        break;
      case 'left':
        transforms.push(`translateX(${calculatedDistance}px)`);
        break;
      case 'right':
        transforms.push(`translateX(-${calculatedDistance}px)`);
        break;
    }

    // Add scale if enabled
    if (scale) {
      transforms.push(`scale(${calculatedScaleAmount})`);
    }

    return transforms.join(' ');
  };

  const initialTransform = getTransform();
  const initialFilter = blur ? `blur(${calculatedBlurAmount}px)` : 'none';

  onMount(() => {
    isReady = true;

    // Set initial styles on children if stagger is enabled
    if (staggerConfig?.enabled) {
      const childElements = containerElement.querySelectorAll(staggerConfig.selector || ':scope > *');
      childElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '0';
          el.style.transform = initialTransform;
          el.style.filter = initialFilter;
          el.style.willChange = 'transform, opacity, filter';
        }
      });
    }

    if (prefersReducedMotion()) {
      // Show all content immediately without animation
      if (staggerConfig?.enabled) {
        const childElements = containerElement.querySelectorAll(staggerConfig.selector || ':scope > *');
        childElements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.filter = 'none';
          }
        });
      } else {
        containerElement.style.opacity = '1';
        containerElement.style.transform = 'none';
        containerElement.style.filter = 'none';
      }
      return;
    }

    cleanupObserver = observeElement(
      containerElement,
      (entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          setTimeout(() => animateElement(), delay * 1000);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    return () => {
      cleanupObserver?.();
    };
  });

  function animateElement() {
    onStart?.();

    // Determine animation options based on animation type
    const animationOptions: AnimationOptions = animation === 'spring'
      ? {
          duration: duration * 1.2,
          ease: [0.34, 1.56, 0.64, 1] // Bouncy spring easing: cubic-bezier(0.34, 1.56, 0.64, 1)
        }
      : {
          duration,
          ease: easings[ease] || easings.easeOut
        };

    // Build final transform based on what's enabled
    const finalTransform = scale ? 'translate(0px, 0px) scale(1)' : 'translate(0px, 0px)';
    const finalFilter = blur ? 'blur(0px)' : 'none';

    // Determine elements to animate
    const elements = staggerConfig?.enabled
      ? Array.from(containerElement.querySelectorAll(staggerConfig.selector || ':scope > *'))
      : [containerElement];

    if (staggerConfig?.enabled && elements.length > 1) {
      // Stagger animation for multiple children
      animate(
        elements,
        {
          opacity: 1,
          transform: finalTransform,
          filter: finalFilter
        },
        {
          ...animationOptions,
          delay: stagger(staggerConfig.delay || 0.1)
        }
      ).finished.then(() => {
        onComplete?.();
      });
    } else {
      // Single element animation
      animate(
        containerElement,
        {
          opacity: 1,
          transform: finalTransform,
          filter: finalFilter
        },
        animationOptions
      ).finished.then(() => {
        onComplete?.();
      });
    }
  }

  // Base container styles with SSR-safe opacity
  const containerStyles = css({
    willChange: 'transform, opacity, filter',
    // SSR-safe: hide content until JavaScript is ready
    '&:not(.animate-ready)': {
      opacity: 0
    }
  });

  const containerClass = $derived(
    isReady ? `${cx(containerStyles, css(cssProp), className)} animate-ready` : cx(containerStyles, css(cssProp), className)
  );

  // Generate inline style for initial state
  const initialStyle = $derived(() => {
    if (staggerConfig?.enabled) return undefined;
    return `opacity: 0; transform: ${initialTransform}; filter: ${initialFilter};`;
  });
</script>

<div
  bind:this={containerElement}
  class={containerClass}
  style={initialStyle()}
>
  {#if children}
    {@render children()}
  {/if}
</div>
