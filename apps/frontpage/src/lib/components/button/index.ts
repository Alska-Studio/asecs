/**
 * Button Component
 *
 * App-level button with consistent Asecs brand styling.
 * This wraps @agapi/ui Button with app-specific defaults.
 *
 * @example
 * ```svelte
 * <Button variant="primary">Click Me</Button>
 * ```
 *
 * @example With custom overrides
 * ```svelte
 * <Button variant="secondary" css={{ justifyContent: 'center' }}>
 *   Centered Button
 * </Button>
 * ```
 */
export { default as Button } from './button.svelte';
export type { ButtonProps } from './button.types';

