<script lang="ts">
  import { Section } from '@agapi/ui/section';
  import { css } from '@agapi/ui/panda/css';
  import { LexicalContent } from '$lib/components/content/lexical-content';
  import Columns from '$lib/components/layouts/Columns.svelte';
  import Column from '$lib/components/layouts/Column.svelte';
  import { token } from '@agapi/ui/panda/utils';
  import type { Token } from '@agapi/ui/panda/tokens';
  import { AnimatedText, AnimateOnEntry } from '$lib/components/animation';
  import { headingStyles, contentStyles } from './rich-text-with-heading.styles';
  import type { RichTextWithHeadingProps } from './rich-text-with-heading.types';

  const { heading, content, columns = '1', colorVariant = 'default', css: cssProp }: RichTextWithHeadingProps = $props();

  const headingColor = $derived(token(`colors.surface.${colorVariant}.highlight` as Token));
</script>

{#if content}
  <Section {colorVariant} containerWidth="normal">
    <Columns template={{ base: '1fr', lg: '1fr 1fr 1fr' }} gap="normal">
      <Column span={1}>
        <AnimatedText
          type="reveal"
          variant="lineByLine"
          text={heading}
          as="h2"
          direction="up"
          stagger={0.12}
          duration={0.6}
          css={headingStyles}
          style="color: {headingColor};"
        />
      </Column>
      <Column span={2}>
        <AnimateOnEntry
          direction="up"
          duration={0.7}
          delay={0.2}
          intensity={0.4}
          blur={true}
        >
          <div class={cssProp ? css({ ...contentStyles.raw({ columns }), ...cssProp }) : css(contentStyles.raw({ columns }))}>
            <LexicalContent {content} />
          </div>
        </AnimateOnEntry>
      </Column>
    </Columns>
  </Section>
{/if}

