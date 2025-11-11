<script lang="ts">
  import { onMount } from 'svelte';
  import { scroll } from 'motion';
  import { css } from '@agapi/ui/panda/css';

  // Props
  interface Props {
    line1?: string;
    line2?: string;
    className?: string;
    intensity?: number;
    firstLineOffset?: number;
    secondLineOffset?: number;
  }

  let {
    line1 = 'THE FUTURE',
    line2 = 'OF DIGITAL',
    className = '',
    intensity = 0.5,
    firstLineOffset = 0,
    secondLineOffset = 0.6
  }: Props = $props();

  // Element refs
  let containerRef: HTMLElement;
  let textPath1Ref: SVGTextPathElement;
  let textPath2Ref: SVGTextPathElement;
  let pathRef: SVGPathElement;

  onMount(() => {
    if (!containerRef || !textPath1Ref || !textPath2Ref || !pathRef) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Set static positions for reduced motion
      textPath1Ref.setAttribute('startOffset', '50px');
      textPath2Ref.setAttribute('startOffset', '100px');
      return;
    }

    // Get the path length for proper animation calculation
    const pathLength = pathRef.getTotalLength();

      // Simplified animation without spring physics

    try {
      // Simple scroll-linked animation
      scroll(
        (progress: number) => {
          if (!textPath1Ref || !textPath2Ref || !pathRef) return;

          // Simple linear animation - text moves along path as you scroll down
          // Add base offset to position text properly without cropping
          const baseOffset1 = pathLength * firstLineOffset; // Start position for line 1
          const baseOffset2 = pathLength * secondLineOffset; // Start position for line 2
          const offset1 = baseOffset1 + (progress * pathLength * intensity);
          const offset2 = baseOffset2 + (progress * pathLength * intensity);

          // Apply the offsets
          textPath1Ref.setAttribute('startOffset', `${offset1}px`);
          textPath2Ref.setAttribute('startOffset', `${offset2}px`);

          // Simple opacity changes
          const opacity = progress > 0.1 && progress < 0.9 ?
            Math.max(0.6, 1 - Math.abs(progress - 0.5) * 0.4) : 0.4;

          textPath1Ref.style.opacity = opacity.toString();
          textPath2Ref.style.opacity = opacity.toString();
        },
        {
          target: containerRef,
          offset: ['start end', 'end start']
        }
      );
    } catch (error) {
      console.warn('ScrollTextPath: Motion library error, falling back to static display:', error);
    }
  });
</script>

<div
  bind:this={containerRef}
  class={css({
    position: 'relative',
    width: { base: '100%', lg: '50%' },
    height: '120vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }) + ` ${className}`}
>
  <!-- SVG with the user's perfect arch positioned on right -->
  <svg
    viewBox="-50 0 641 630"
    class={css({
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    })}
  >
          <!-- Define the arch paths with proper spacing -->
      <defs>
        <path id="archPath1" d="M0.146484 1.08691C200.883 1.08691 350.306 150.509 350.306 350.246V800.18"
        bind:this={pathRef}/>

        <path id="archPath2" d="M-60.146484 60.08691C140.883 60.08691 270.306 189.509 270.306 389.246V839.18"/>

      </defs>

    <!-- First line of text (upper right) -->
    <text
      class={css({
        fontSize: { base: '40px', md: '60px', xl: '80px' },
        fontWeight: '400',
        fontFamily: 'var(--font-display)',
        letterSpacing: '-0.05em',
        textTransform: 'uppercase'

      })}
    >
      <textPath
        bind:this={textPath1Ref}
        href="#archPath1"
        startOffset="0"
        text-anchor="start"
        class={css({
          opacity: '0.6',
          transition: 'opacity 0.3s ease'
        })}
      >
        {line1}
      </textPath>
    </text>

    <!-- Second line of text (lower right with much more spacing) -->
    <text
      class={css({
        fontSize: { base: '40px', md: '60px', xl: '80px' },
        fontWeight: '400',
        fontFamily: 'var(--font-display-alt)',
        letterSpacing: '0em',
        textTransform: 'uppercase'
      })}
    >
      <textPath
        bind:this={textPath2Ref}
        href="#archPath2"
        startOffset="0"
        text-anchor="start"
        class={css({
          opacity: '0.6',
          transition: 'opacity 0.3s ease'
        })}
      >
        {line2}
      </textPath>
    </text>
  </svg>


</div>

