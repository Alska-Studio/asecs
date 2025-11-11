<script lang="ts">
  import type { Token } from '@agapi/ui/panda/tokens';
  import type { IngressProps } from './ingress.types';

  import { Section } from '@agapi/ui/section';
  import { css } from '@agapi/ui/panda/css';
  import { token } from '@agapi/ui/panda/utils';

  import Columns from '$lib/components/layouts/columns.svelte';
  import Column from '$lib/components/layouts/column.svelte';
  import { AnimatedText } from '$lib/components/animation';
  import { headingStyles, contentStyles } from './ingress.styles';

  const { heading, content, colorVariant = 'default', css: cssProp }: IngressProps = $props();

  const headingColor = $derived(token(`colors.surface.${colorVariant}.highlight` as Token));
</script>

{#if content}
  <Section
    {colorVariant}
    containerWidth="normal"
    containerStyles={css.raw({ pt: 'normal' })}
  >
    <Columns template={{ base: '1fr', lg: '1fr 1fr 1fr' }} gap="normal">
      <Column span={1}>
        <AnimatedText
          type="reveal"
          variant="lineByLine"
          text={heading}
          as="h2"
          css={headingStyles}
          direction="up"
          stagger={0.12}
          duration={0.6}
          delay={0.2}
          style="color: {headingColor};"
        />
      </Column>
      <Column span={2}>
        <AnimatedText
          type="reveal"
          variant="lineByLine"
          text={content}
          as="div"
          css={cssProp ? { ...contentStyles, ...cssProp } : contentStyles}
          direction="up"
          stagger={0.15}
          duration={0.7}
          delay={0.2}
        />
      </Column>
    </Columns>
  </Section>
{/if}

