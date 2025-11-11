<script lang="ts">
  import type { SystemStyleObject } from '@agapi/ui/panda/types';
  import type { Snippet } from 'svelte';
  import { css, cx } from '@agapi/ui/panda/css';

  interface Props {
    /**
     * Padding variant for the section
     */
    spacing?: 'none' | 'snug' | 'normal' | 'relaxed' | 'loose';
    /**
     * Custom padding top/bottom
     */
    paddingY?: string | { base?: string; md?: string; lg?: string };
    /**
     * Whether to include horizontal app padding
     */
    withAppPadding?: boolean;
    /**
     * Background color
     */
    backgroundColor?: string;
    /**
     * Additional CSS styles
     */
    css?: SystemStyleObject;
    /**
     * Additional class names
     */
    class?: string;
    /**
     * Children content
     */
    children?: Snippet;
  }

  const {
    spacing = 'normal',
    paddingY,
    withAppPadding = true,
    backgroundColor,
    css: cssProp,
    class: className,
    children
  }: Props = $props();

  const sectionStyles = css({
    paddingX: withAppPadding ? 'app' : '0',
    paddingY: paddingY || spacing,
    backgroundColor: backgroundColor || 'transparent'
  });
</script>

<section class={cx(sectionStyles, css(cssProp), className)}>
  {#if children}
    {@render children()}
  {/if}
</section>
