<script lang="ts">
  // Hero blocks
  import { HeroParallax } from './hero-parallax';

  // Content blocks (reusable across all collections)
  import { Ingress } from './ingress';
  import { RichText } from './rich-text';
  import { RichTextWithHeading } from './rich-text-with-heading';
  import { Blockquote } from './blockquote';

  // Media blocks (reusable across content types)
  import { ImageGallery } from './image-gallery';
  import { DealsCarousel } from './deals-carousel';

  import { css } from '@agapi/ui/panda/css';
  import type { Component as SvelteComponent } from 'svelte';

  interface Props {
    block: {
      component?: string;
      blockType?: string;
      [key: string]: any;
    };
  }

  let { block }: Props = $props();

  // Log block data in development
  if (import.meta.env.DEV) {
    console.log('🎨 Block Renderer:', {
      blockType: block?.blockType || block?.component,
      data: block
    });
  }

  // Map component names to actual components
  // This matches blocks available in Payload collections (Pages, Stores, Restaurants)
  const componentMap: Record<string, SvelteComponent<any, Record<string, unknown>, ''>> = {
    // Hero blocks
    heroParallax: HeroParallax,

    // Content blocks
    ingress: Ingress,
    richText: RichText,
    richTextWithHeading: RichTextWithHeading,
    blockquote: Blockquote,

    // Media blocks
    imageGallery: ImageGallery,
    dealsCarousel: DealsCarousel
  };

  // Get the component based on block type
  const Component = $derived(
    componentMap[block?.component || ''] || componentMap[block?.blockType || ''] || null
  );
</script>

{#if Component}
  <Component {...block} />
{:else if block}
  <!-- Fallback for unknown block types -->
  <div class={css({
    padding: '2rem',
    background: 'gray.100',
    borderRadius: 'md',
    marginY: '1rem'
  })}>
    <p class={css({
      color: 'gray.600',
      fontFamily: 'mono',
      fontSize: 'sm'
    })}>
      Unknown block type: {block.component || block.blockType || 'undefined'}
    </p>
    {#if import.meta.env.DEV}
      <details class={css({ marginTop: '1rem' })}>
        <summary class={css({ cursor: 'pointer', color: 'gray.700' })}>
          Block Data (Dev Only)
        </summary>
        <pre class={css({
          marginTop: '0.5rem',
          padding: '1rem',
          background: 'white',
          borderRadius: 'sm',
          fontSize: 'xs',
          overflow: 'auto'
        })}>{JSON.stringify(block, null, 2)}</pre>
      </details>
    {/if}
  </div>
{/if}


