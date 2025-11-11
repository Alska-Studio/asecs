<script lang="ts">
  import { css, cx } from '@agapi/ui/panda/css';
  import { getContext } from 'svelte';
  import type { ColumnProps, GridAlign, GridJustify } from './columns.types';

  const {
    span,
    start,
    end,
    alignSelf,
    justifySelf,
    order,
    id,
    class: className,
    style,
    css: cssProp,
    children,
    ...props
  }: ColumnProps = $props();

  // Generate unique ID for this component instance
  const uniqueId = id || `column-${Math.random().toString(36).substr(2, 9)}`;

  // Get context from parent Columns component (if available)
  const columnsContext = getContext<{
    gap?: string | number;
    align?: GridAlign;
    justify?: GridJustify;
  } | undefined>('columns');

  // Build CSS variables for responsive values
  const cssVars = $derived(() => {
    const vars: Record<string, string> = {};

    // Handle responsive span
    if (span && typeof span === 'object') {
      const baseValue = span.base || Object.values(span)[0];
      if (baseValue) vars['--grid-column-base'] = `span ${baseValue}`;
      if (span.sm) vars['--grid-column-sm'] = `span ${span.sm}`;
      if (span.md) vars['--grid-column-md'] = `span ${span.md}`;
      if (span.lg) vars['--grid-column-lg'] = `span ${span.lg}`;
      if (span.xl) vars['--grid-column-xl'] = `span ${span.xl}`;
      if (span['2xl']) vars['--grid-column-2xl'] = `span ${span['2xl']}`;
    }
    // Handle static span
    else if (span && typeof span === 'number') {
      vars['--grid-column-base'] = `span ${span}`;
    }
    // Handle start/end
    else if (start || end) {
      if (typeof start === 'object' || typeof end === 'object') {
        const startObj = typeof start === 'object' ? start : {};
        const endObj = typeof end === 'object' ? end : {};

        const baseStart = typeof start === 'object' ? (start.base || Object.values(start)[0]) : start;
        const baseEnd = typeof end === 'object' ? (end.base || Object.values(end)[0]) : end;
        vars['--grid-column-base'] = `${baseStart || 'auto'} / ${baseEnd || 'auto'}`;

        if (startObj.sm || endObj.sm) {
          vars['--grid-column-sm'] = `${startObj.sm || baseStart || 'auto'} / ${endObj.sm || baseEnd || 'auto'}`;
        }
        if (startObj.md || endObj.md) {
          vars['--grid-column-md'] = `${startObj.md || baseStart || 'auto'} / ${endObj.md || baseEnd || 'auto'}`;
        }
        if (startObj.lg || endObj.lg) {
          vars['--grid-column-lg'] = `${startObj.lg || baseStart || 'auto'} / ${endObj.lg || baseEnd || 'auto'}`;
        }
        if (startObj.xl || endObj.xl) {
          vars['--grid-column-xl'] = `${startObj.xl || baseStart || 'auto'} / ${endObj.xl || baseEnd || 'auto'}`;
        }
        if (startObj['2xl'] || endObj['2xl']) {
          vars['--grid-column-2xl'] = `${startObj['2xl'] || baseStart || 'auto'} / ${endObj['2xl'] || baseEnd || 'auto'}`;
        }
      } else {
        vars['--grid-column-base'] = `${start || 'auto'} / ${end || 'auto'}`;
      }
    }

    // Handle responsive order
    if (order && typeof order === 'object') {
      const baseValue = order.base || Object.values(order)[0];
      if (baseValue !== undefined) vars['--order-base'] = String(baseValue);
      if (order.sm !== undefined) vars['--order-sm'] = String(order.sm);
      if (order.md !== undefined) vars['--order-md'] = String(order.md);
      if (order.lg !== undefined) vars['--order-lg'] = String(order.lg);
      if (order.xl !== undefined) vars['--order-xl'] = String(order.xl);
      if (order['2xl'] !== undefined) vars['--order-2xl'] = String(order['2xl']);
    }
    // Handle static order
    else if (order !== undefined && typeof order === 'number') {
      vars['--order-base'] = String(order);
    }

    // Handle responsive alignSelf
    if (alignSelf && typeof alignSelf === 'object') {
      const baseValue = alignSelf.base || Object.values(alignSelf)[0];
      if (baseValue) vars['--align-self-base'] = baseValue;
      if (alignSelf.sm) vars['--align-self-sm'] = alignSelf.sm;
      if (alignSelf.md) vars['--align-self-md'] = alignSelf.md;
      if (alignSelf.lg) vars['--align-self-lg'] = alignSelf.lg;
      if (alignSelf.xl) vars['--align-self-xl'] = alignSelf.xl;
      if (alignSelf['2xl']) vars['--align-self-2xl'] = alignSelf['2xl'];
    }
    // Handle static alignSelf
    else if (alignSelf && typeof alignSelf === 'string') {
      vars['--align-self-base'] = alignSelf;
    }

    // Handle responsive justifySelf
    if (justifySelf && typeof justifySelf === 'object') {
      const baseValue = justifySelf.base || Object.values(justifySelf)[0];
      if (baseValue) vars['--justify-self-base'] = baseValue;
      if (justifySelf.sm) vars['--justify-self-sm'] = justifySelf.sm;
      if (justifySelf.md) vars['--justify-self-md'] = justifySelf.md;
      if (justifySelf.lg) vars['--justify-self-lg'] = justifySelf.lg;
      if (justifySelf.xl) vars['--justify-self-xl'] = justifySelf.xl;
      if (justifySelf['2xl']) vars['--justify-self-2xl'] = justifySelf['2xl'];
    }
    // Handle static justifySelf
    else if (justifySelf && typeof justifySelf === 'string') {
      vars['--justify-self-base'] = justifySelf;
    }

    return vars;
  });

  // Check if we have responsive values
  const hasResponsiveValues = $derived(() => {
    return (span && typeof span === 'object') ||
           (start && typeof start === 'object') ||
           (end && typeof end === 'object') ||
           (order && typeof order === 'object') ||
           (alignSelf && typeof alignSelf === 'object') ||
           (justifySelf && typeof justifySelf === 'object');
  });

  // Build inline style string
  const inlineStyle = $derived(() => {
    const vars = cssVars();
    const entries = Object.entries(vars);
    return entries.map(([key, value]) => `${key}: ${value}`).join('; ');
  });
</script>

<div
  class={cx(
    uniqueId,
    hasResponsiveValues() ? 'responsive-column' : undefined,
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
  /* Base styles - apply to all columns */
  div {
    grid-column: var(--grid-column-base);
    order: var(--order-base);
    align-self: var(--align-self-base);
    justify-self: var(--justify-self-base);
  }

  /* Responsive column using CSS variables and nested media queries */
  div.responsive-column {
    @media (min-width: 640px) {
      grid-column: var(--grid-column-sm, var(--grid-column-base));
      order: var(--order-sm, var(--order-base));
      align-self: var(--align-self-sm, var(--align-self-base));
      justify-self: var(--justify-self-sm, var(--justify-self-base));
    }

    @media (min-width: 768px) {
      grid-column: var(--grid-column-md, var(--grid-column-sm, var(--grid-column-base)));
      order: var(--order-md, var(--order-sm, var(--order-base)));
      align-self: var(--align-self-md, var(--align-self-sm, var(--align-self-base)));
      justify-self: var(--justify-self-md, var(--justify-self-sm, var(--justify-self-base)));
    }

    @media (min-width: 1024px) {
      grid-column: var(--grid-column-lg, var(--grid-column-md, var(--grid-column-sm, var(--grid-column-base))));
      order: var(--order-lg, var(--order-md, var(--order-sm, var(--order-base))));
      align-self: var(--align-self-lg, var(--align-self-md, var(--align-self-sm, var(--align-self-base))));
      justify-self: var(--justify-self-lg, var(--justify-self-md, var(--justify-self-sm, var(--justify-self-base))));
    }

    @media (min-width: 1280px) {
      grid-column: var(--grid-column-xl, var(--grid-column-lg, var(--grid-column-md, var(--grid-column-sm, var(--grid-column-base)))));
      order: var(--order-xl, var(--order-lg, var(--order-md, var(--order-sm, var(--order-base)))));
      align-self: var(--align-self-xl, var(--align-self-lg, var(--align-self-md, var(--align-self-sm, var(--align-self-base)))));
      justify-self: var(--justify-self-xl, var(--justify-self-lg, var(--justify-self-md, var(--justify-self-sm, var(--justify-self-base)))));
    }

    @media (min-width: 1536px) {
      grid-column: var(--grid-column-2xl, var(--grid-column-xl, var(--grid-column-lg, var(--grid-column-md, var(--grid-column-sm, var(--grid-column-base))))));
      order: var(--order-2xl, var(--order-xl, var(--order-lg, var(--order-md, var(--order-sm, var(--order-base))))));
      align-self: var(--align-self-2xl, var(--align-self-xl, var(--align-self-lg, var(--align-self-md, var(--align-self-sm, var(--align-self-base))))));
      justify-self: var(--justify-self-2xl, var(--justify-self-xl, var(--justify-self-lg, var(--justify-self-md, var(--justify-self-sm, var(--justify-self-base))))));
    }
  }
</style>
