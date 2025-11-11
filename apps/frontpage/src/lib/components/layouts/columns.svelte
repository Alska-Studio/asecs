<script lang="ts">
  import { css, cx } from '@agapi/ui/panda/css';
  import { setContext } from 'svelte';
  import { columnsStyles } from './columns.styles';

  import type { ColumnsProps, GridAlign, GridJustify } from './columns.types';

  const {
    columns,
    template,
    gap = 'normal',
    align = 'stretch',
    justify = 'stretch',
    class: className,
    style,
    css: cssProp,
    children,
    ...props
  }: ColumnsProps = $props();

  // Generate unique ID for this component instance
  const uniqueId = $props.id();
  // Provide context for Column children
  setContext('columns', {
    gap,
    align,
    justify
  });

  // Panda breakpoints mapping
  const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  };

  // Build CSS variables for responsive values
  const cssVars = $derived(() => {
    const vars: Record<string, string> = {};

    // Handle responsive template
    if (template && typeof template === 'object') {
      const baseValue = template.base || Object.values(template)[0];
      if (baseValue) vars['--grid-template-columns-base'] = baseValue;
      if (template.sm) vars['--grid-template-columns-sm'] = template.sm;
      if (template.md) vars['--grid-template-columns-md'] = template.md;
      if (template.lg) vars['--grid-template-columns-lg'] = template.lg;
      if (template.xl) vars['--grid-template-columns-xl'] = template.xl;
      if (template['2xl']) vars['--grid-template-columns-2xl'] = template['2xl'];
    }
    // Handle responsive columns
    else if (columns && typeof columns === 'object') {
      const baseValue = columns.base || Object.values(columns)[0];
      if (baseValue) vars['--grid-template-columns-base'] = `repeat(${baseValue}, 1fr)`;
      if (columns.sm) vars['--grid-template-columns-sm'] = `repeat(${columns.sm}, 1fr)`;
      if (columns.md) vars['--grid-template-columns-md'] = `repeat(${columns.md}, 1fr)`;
      if (columns.lg) vars['--grid-template-columns-lg'] = `repeat(${columns.lg}, 1fr)`;
      if (columns.xl) vars['--grid-template-columns-xl'] = `repeat(${columns.xl}, 1fr)`;
      if (columns['2xl']) vars['--grid-template-columns-2xl'] = `repeat(${columns['2xl']}, 1fr)`;
    }
    // Handle static values
    else if (template && typeof template === 'string') {
      vars['--grid-template-columns-base'] = template;
    } else if (columns && typeof columns === 'number') {
      vars['--grid-template-columns-base'] = `repeat(${columns}, 1fr)`;
    }

    // Handle gap - convert to proper token
    if (gap) {
      if (typeof gap === 'string') {
        // Check if it's a spacing token name (e.g., 'normal', 'loose', 'tight')
        // or a numeric token (e.g., '1', '2', '3')
        if (!gap.includes('px') && !gap.includes('rem') && !gap.includes('var(')) {
          vars['--grid-gap'] = `var(--spacing-${gap})`;
        } else {
          vars['--grid-gap'] = gap;
        }
      } else if (typeof gap === 'number') {
        // Handle numeric tokens (e.g., 1, 2, 3)
        vars['--grid-gap'] = `var(--spacing-${gap})`;
      } else {
        vars['--grid-gap'] = String(gap);
      }
    }

    return vars;
  });

  // Check if we have responsive values
  const hasResponsiveValues = $derived(() => {
    return (template && typeof template === 'object') || (columns && typeof columns === 'object');
  });

  // Get align/justify values for variants
  const alignValue = $derived(() => {
    if (typeof align === 'object' && align !== null) {
      return (align.base ?? 'stretch') as GridAlign;
    }
    return (align ?? 'stretch') as GridAlign;
  });

  const justifyValue = $derived(() => {
    if (typeof justify === 'object' && justify !== null) {
      return (justify.base ?? 'stretch') as GridJustify;
    }
    return (justify ?? 'stretch') as GridJustify;
  });

  const classes = $derived(columnsStyles({
    align: alignValue(),
    justify: justifyValue()
  }));

  // Build inline style string
  const inlineStyle = $derived(() => {
    const vars = cssVars();
    const entries = Object.entries(vars);
    return entries.map(([key, value]) => `${key}: ${value}`).join('; ');
  });
</script>

<div
  class={cx(
    classes.container,
    uniqueId,
    hasResponsiveValues() ? 'responsive-columns' : undefined,
    css(cssProp),
    className
  )}
  style={inlineStyle()}
  {...props}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="postcss">
  /* Base styles - apply to all columns containers */
  div {
    grid-template-columns: var(--grid-template-columns-base);
    gap: var(--grid-gap);
  }

  /* Responsive columns using CSS variables and nested media queries */
  div.responsive-columns {
    @media (min-width: 640px) {
      grid-template-columns: var(--grid-template-columns-sm, var(--grid-template-columns-base));
    }

    @media (min-width: 768px) {
      grid-template-columns: var(--grid-template-columns-md, var(--grid-template-columns-sm, var(--grid-template-columns-base)));
    }

    @media (min-width: 1024px) {
      grid-template-columns: var(--grid-template-columns-lg, var(--grid-template-columns-md, var(--grid-template-columns-sm, var(--grid-template-columns-base))));
    }

    @media (min-width: 1280px) {
      grid-template-columns: var(--grid-template-columns-xl, var(--grid-template-columns-lg, var(--grid-template-columns-md, var(--grid-template-columns-sm, var(--grid-template-columns-base)))));
    }

    @media (min-width: 1536px) {
      grid-template-columns: var(--grid-template-columns-2xl, var(--grid-template-columns-xl, var(--grid-template-columns-lg, var(--grid-template-columns-md, var(--grid-template-columns-sm, var(--grid-template-columns-base))))));
    }
  }
</style>
