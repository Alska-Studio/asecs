<script lang="ts">
  import type { AnimatedTextProps } from './animated-text.types.js';
  import { getContainerStyles, animatedWordStyles, animatedLineStyles, lineContainerStyles } from './animated-text.styles.js';
  import { splitTextIntoLines } from './utils/text-splitter.js';
  import { observeElement } from '../shared/intersection-observer.js';
  import { prefersReducedMotion } from '../shared/animation-utils.js';
  import { animate, stagger } from 'motion';
  import { onMount } from 'svelte';
  import { css } from '@agapi/ui/panda/css';

  const {
    type,
    variant,
    text,
    children,
    direction = 'up',
    stagger: staggerDelay = 0.1,
    trigger = 'scroll',
    triggerOffset = 'start end',
    duration = 0.6,
    delay = 0,
    ease = 'easeOut',
    css: cssProp,
    as = 'div',
    onStart,
    onComplete,
    ...props
  }: AnimatedTextProps = $props();

  let containerElement: HTMLElement;
  let hasAnimated = false;
  let cleanupObserver: (() => void) | null = null;
  let isReady = $state(false);

  // Extract text content - either from prop or from rendered children
  let textContent = $state('');
  let lines = $derived(splitTextIntoLines(textContent));
  let useChildren = $state(false);

  // Create class string with ready state
  const containerClass = $derived(
    isReady ? `${getContainerStyles(cssProp)} animated-text-ready` : getContainerStyles(cssProp)
  );

  onMount(() => {
    // If children are provided, we'll preserve the structure
    if (children && !text) {
      useChildren = true;
      if (containerElement) {
        // For lineByLine with children, detect visual lines after render
        if (variant === 'lineByLine') {
          // Wait for render then detect lines
          requestAnimationFrame(() => {
            detectAndWrapVisualLines(containerElement);
            isReady = true;
          });
        } else {
          // For wordByWord, wrap words immediately
          wrapTextNodesInContainer(containerElement);
          isReady = true;
        }
      }
    }
    // Otherwise use text prop
    else if (text) {
      textContent = text;
      // Mark as ready immediately for text prop (SSR-safe)
      isReady = true;

      // For lineByLine variant with text prop, detect visual lines after render
      if (variant === 'lineByLine') {
        requestAnimationFrame(() => {
          detectAndWrapVisualLines(containerElement);
        });
      }
    }
  });

  // Function to wrap text nodes while preserving structure
  function wrapTextNodesInContainer(container: HTMLElement) {
    // This is only used for wordByWord variant now
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null
    );

    const textNodes: Text[] = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent?.trim()) {
        textNodes.push(node as Text);
      }
    }

    textNodes.forEach((textNode) => {
      const words = textNode.textContent?.split(/(\s+)/) || [];
      const fragment = document.createDocumentFragment();

      words.forEach((word) => {
        if (word.match(/\s+/)) {
          // Preserve whitespace
          fragment.appendChild(document.createTextNode(word));
        } else if (word) {
          // Wrap word in animated span
          const span = document.createElement('span');
          span.className = `animated-word ${css(animatedWordStyles)}`;
          span.textContent = word;
          fragment.appendChild(span);
        }
      });

      textNode.parentNode?.replaceChild(fragment, textNode);
    });
  }

  // Detect and wrap visual lines for lineByLine variant
  function detectAndWrapVisualLines(container: HTMLElement) {
    // Get all text content as a single string
    const fullText = container.textContent || '';
    if (!fullText.trim()) return;

    // Split into words
    const words = fullText.split(/(\s+)/);
    const fragment = document.createDocumentFragment();
    const wordElements: HTMLElement[] = [];

    // Clear container and create word spans for measurement
    container.textContent = '';

    words.forEach((word) => {
      if (word.match(/\s+/)) {
        // Preserve whitespace
        fragment.appendChild(document.createTextNode(word));
      } else if (word.trim()) {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline';
        wordSpan.textContent = word;
        fragment.appendChild(wordSpan);
        wordElements.push(wordSpan);
      }
    });

    container.appendChild(fragment);

    // Wait for layout to measure positions
    requestAnimationFrame(() => {
      // Group words by their Y position
      const lineGroups: HTMLElement[][] = [];
      let currentLine: HTMLElement[] = [];
      let currentY: number | null = null;

      wordElements.forEach((wordEl) => {
        const rect = wordEl.getBoundingClientRect();
        const wordY = Math.round(rect.top);

        if (currentY === null || Math.abs(wordY - currentY) > 5) {
          // New line detected (with 5px tolerance)
          if (currentLine.length > 0) {
            lineGroups.push([...currentLine]);
          }
          currentLine = [wordEl];
          currentY = wordY;
        } else {
          currentLine.push(wordEl);
        }
      });

      // Add last line
      if (currentLine.length > 0) {
        lineGroups.push(currentLine);
      }

      // Clear container and rebuild with wrapped lines
      container.textContent = '';

      lineGroups.forEach((lineWords) => {
        const lineWrapper = document.createElement('span');
        lineWrapper.className = `animated-line ${css(animatedLineStyles)}`;
        lineWrapper.style.display = 'block';

        // Reconstruct line text with spacing
        const lineText = lineWords.map(el => el.textContent).join(' ');
        lineWrapper.textContent = lineText;

        container.appendChild(lineWrapper);
      });
    });
  }

  onMount(() => {
    // Respect user's motion preferences
    if (prefersReducedMotion()) {
      // Show all elements immediately without animation
      isReady = true;
      const selector = variant === 'lineByLine' ? '.animated-line' : '.animated-word';
      const elements = containerElement.querySelectorAll(selector);
      elements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.transform = variant === 'lineByLine' ? 'translateY(0)' : 'translate(0px, 0px) rotate(0deg) scale(1)';
          el.style.opacity = '1';
          el.style.filter = 'blur(0px)';
        }
      });
      return;
    }

    if (trigger === 'load') {
      // Animate immediately on load
      setTimeout(() => animateElements(), delay * 1000);
    } else if (trigger === 'scroll') {
      // Set up intersection observer for scroll trigger
      cleanupObserver = observeElement(
        containerElement,
        (entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            setTimeout(() => animateElements(), delay * 1000);
          }
        },
        {
          threshold: 0.1,
          rootMargin: triggerOffset === 'start end' ? '0px' : triggerOffset
        }
      );
    }

    return () => {
      cleanupObserver?.();
    };
  });

  function animateElements() {
    const selector = variant === 'lineByLine' ? '.animated-line' : '.animated-word';
    const elements = containerElement.querySelectorAll(selector);

    if (elements.length === 0) return;

    onStart?.();

    if (variant === 'lineByLine') {
      // Line-by-line animation: simple upward movement with opacity and blur
      animate(
        elements,
        {
          transform: 'translateY(0)',
          opacity: 1,
          filter: 'blur(0px)'
        },
        {
          duration: duration,
          ease: [0.34, 1.56, 0.64, 1], // Bouncy easing for natural feel
          delay: stagger(staggerDelay)
        }
      ).finished.then(() => {
        onComplete?.();
      });
    } else {
      // Word-by-word animation: with rotation and scale
      animate(
        elements,
        {
          transform: 'translate(0px, 0px) rotate(0deg) scale(1)',
          opacity: 1,
          filter: 'blur(0px)'
        },
        {
          duration: duration * 1.2, // Slightly longer for bounce effect
          ease: [0.34, 1.56, 0.64, 1], // Bouncy cubic-bezier with overshoot
          delay: stagger(staggerDelay)
        }
      ).finished.then(() => {
        onComplete?.();
      });
    }
  }
</script>

<svelte:element
  this={as}
  bind:this={containerElement}
  class={containerClass}
  {...props}
>
  {#if children && !text}
    <!-- Render children directly, text nodes will be wrapped in onMount -->
    {@render children()}
  {:else if variant === 'lineByLine'}
    <!-- Line-by-line: wrap each line in animated container -->
    {#each lines as line, lineIndex (line.lineIndex)}
      <span
        class="animated-line {css(animatedLineStyles)}"
        data-line-index={lineIndex}
      >
        {#each line.words as word (word.index)}
          {word.text}
        {/each}
      </span>
    {/each}
  {:else}
    <!-- Word-by-word: use line/word splitting -->
    {#each lines as line, lineIndex (line.lineIndex)}
      <span class={lineContainerStyles}>
        {#each line.words as word, wordIndex (word.index)}
          {#if word.isWhitespace}
            <!-- Preserve whitespace as-is -->
            {word.text}
          {:else}
            <!-- Wrap words in animated spans -->
            <span
              class="animated-word {css(animatedWordStyles)}"
              data-line-index={lineIndex}
              data-word-index={wordIndex}
            >
              {word.text}
            </span>
          {/if}
        {/each}
      </span>
    {/each}
  {/if}
</svelte:element>