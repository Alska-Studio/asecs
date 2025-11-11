import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { Snippet } from 'svelte';

/**
 * Responsive value that supports different values for different breakpoints
 */
export type ResponsiveValue<T> = T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

/**
 * Grid alignment options
 */
export type GridAlign = 'start' | 'center' | 'end' | 'stretch';

/**
 * Grid justify options
 */
export type GridJustify = 'start' | 'center' | 'end' | 'stretch';

/**
 * Props for the Columns component
 */
export interface ColumnsProps {
  /**
   * Number of columns (supports responsive values)
   */
  columns?: ResponsiveValue<number>;

  /**
   * CSS Grid template string for more control (supports responsive values)
   * Examples: "400px 1fr", "repeat(3, 1fr)", "repeat(auto-fit, minmax(300px, 1fr))"
   */
  template?: ResponsiveValue<string>;

  /**
   * Gap between columns using Panda spacing tokens
   */
  gap?: string | number;

  /**
   * Default alignment for all columns
   */
  align?: ResponsiveValue<GridAlign>;

  /**
   * Default justify for all columns
   */
  justify?: ResponsiveValue<GridJustify>;

  /**
   * The content of the columns
   */
  children?: Snippet;

  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;

  /**
   * Custom inline styles
   */
  style?: string;

  /**
   * Custom class name
   */
  class?: string;

  /**
   * Optional unique ID for the component (auto-generated if not provided)
   */
  id?: string;
}

/**
 * Props for the Column component
 */
export interface ColumnProps {
  /**
   * Number of columns to span (supports responsive values)
   */
  span?: ResponsiveValue<number>;

  /**
   * Starting grid column line (supports responsive values)
   */
  start?: ResponsiveValue<number>;

  /**
   * Ending grid column line (supports responsive values)
   */
  end?: ResponsiveValue<number>;

  /**
   * Alignment for this specific column (supports responsive values)
   */
  alignSelf?: ResponsiveValue<GridAlign>;

  /**
   * Justify for this specific column (supports responsive values)
   */
  justifySelf?: ResponsiveValue<GridJustify>;

  /**
   * Order of this column in the grid (supports responsive values)
   */
  order?: ResponsiveValue<number>;

  /**
   * The content of the column
   */
  children?: Snippet;

  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;

  /**
   * Custom inline styles
   */
  style?: string;

  /**
   * Custom class name
   */
  class?: string;

  /**
   * Optional unique ID for the component (auto-generated if not provided)
   */
  id?: string;
}

