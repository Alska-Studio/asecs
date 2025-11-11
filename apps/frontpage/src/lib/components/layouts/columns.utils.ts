import type { ResponsiveValue } from './columns.types';

/**
 * Check if a value is a responsive object
 */
export function isResponsiveValue<T>(value: ResponsiveValue<T>): value is { base?: T; md?: T; lg?: T; xl?: T } {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Convert responsive value to Panda CSS responsive object
 */
export function toResponsiveObject<T extends Record<string, T>>(value: ResponsiveValue<T> | undefined): Record<string, T> | undefined {
  if (value === undefined) return undefined;

  if (isResponsiveValue(value)) {
    const result: Record<string, T> = {};
    if (value.base !== undefined) result.base = value.base;
    if (value.md !== undefined) result.md = value.md;
    if (value.lg !== undefined) result.lg = value.lg;
    if (value.xl !== undefined) result.xl = value.xl;
    return Object.keys(result).length > 0 ? result : undefined;
  }

  return value as T extends object ? T : undefined;
}

/**
 * Convert columns number to grid-template-columns value
 */
export function columnsToTemplate(columns: ResponsiveValue<number>): ResponsiveValue<string> {
  if (isResponsiveValue(columns)) {
    const result: { base?: string; md?: string; lg?: string; xl?: string } = {};
    if (columns.base !== undefined) result.base = `repeat(${columns.base}, 1fr)`;
    if (columns.md !== undefined) result.md = `repeat(${columns.md}, 1fr)`;
    if (columns.lg !== undefined) result.lg = `repeat(${columns.lg}, 1fr)`;
    if (columns.xl !== undefined) result.xl = `repeat(${columns.xl}, 1fr)`;
    return result;
  }

  return `repeat(${columns}, 1fr)`;
}

/**
 * Convert span number to grid-column value
 */
export function spanToGridColumn(span: ResponsiveValue<number>): ResponsiveValue<string> {
  if (isResponsiveValue(span)) {
    const result: { base?: string; md?: string; lg?: string; xl?: string } = {};
    if (span.base !== undefined) result.base = `span ${span.base}`;
    if (span.md !== undefined) result.md = `span ${span.md}`;
    if (span.lg !== undefined) result.lg = `span ${span.lg}`;
    if (span.xl !== undefined) result.xl = `span ${span.xl}`;
    return result;
  }

  return `span ${span}`;
}

/**
 * Convert start/end to grid-column value
 */
export function startEndToGridColumn(
  start: ResponsiveValue<number> | undefined,
  end: ResponsiveValue<number> | undefined
): ResponsiveValue<string> | undefined {
  if (!start && !end) return undefined;

  const startIsResponsive = start && isResponsiveValue(start);
  const endIsResponsive = end && isResponsiveValue(end);

  if (startIsResponsive || endIsResponsive) {
    const result: { base?: string; md?: string; lg?: string; xl?: string } = {};
    const breakpoints = ['base', 'md', 'lg', 'xl'] as const;

    for (const bp of breakpoints) {
      const startVal = startIsResponsive ? (start)[bp] : start;
      const endVal = endIsResponsive ? (end)[bp] : end;

      if (startVal !== undefined || endVal !== undefined) {
        result[bp] = `${startVal ?? 'auto'} / ${endVal ?? 'auto'}`;
      }
    }

    return Object.keys(result).length > 0 ? result : undefined;
  }

  return `${start ?? 'auto'} / ${end ?? 'auto'}`;
}















