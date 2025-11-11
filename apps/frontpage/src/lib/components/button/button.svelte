<script lang="ts">
  /**
   * Button Component Wrapper
   *
   * This is an app-level wrapper around @agapi/ui Button that applies
   * consistent styling defaults for the Asecs brand while maintaining
   * full compatibility with the base component.
   *
   * Usage: Import from $lib/components/button instead of @agapi/ui/button
   *
   * All props, variants, and features from the base Button component are supported.
   * Individual instances can still override styles using the css prop.
   */
  import { Button as AgapiButton } from '@agapi/ui/button';
  import type { SystemStyleObject } from '@agapi/ui/panda/types';
  import { appButtonDefaults } from './button.styles';
  import type { ButtonProps } from './button.types';

  const { css: cssProp, ...restProps }: ButtonProps = $props();

  // Merge app defaults with custom css prop
  const mergedStyles: SystemStyleObject = $derived({
    ...appButtonDefaults,
    ...cssProp
  });
</script>

<AgapiButton
  {...restProps}
  css={mergedStyles}
>
  {#if restProps.children}
    {@render restProps.children()}
  {/if}
</AgapiButton>

