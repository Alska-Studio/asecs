import { css } from '@agapi/ui/panda/css';

/**
 * App-level button style defaults
 *
 * These overrides are applied to all buttons in the my-app application
 * to ensure consistent styling according to the Asecs brand guidelines.
 *
 * Overrides include:
 * - Text styling (textStyle: 'button')
 * - Left-aligned content and text
 * - Consistent spacing using semantic tokens
 * - Uppercase text transformation
 *
 * Individual buttons can still override these styles using the css prop.
 */
export const appButtonDefaults = css.raw({
  // Text styling from design system
  textStyle: 'button',
  fontWeight: 'medium!',
  gap: 'tight!',
  px: 'snug!',
  py: 'snug!',

  // Layout & alignment
  justifyContent: 'flex-start',
  textAlign: 'left',

  // Text transformation
  textTransform: 'uppercase'
});

