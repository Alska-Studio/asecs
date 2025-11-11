<script lang="ts">
  import type { RichTextProps } from './rich-text.types';

  import { Section } from '@agapi/ui/section';
  import { LexicalContent } from '$lib/components/content/lexical-content';
  import { AnimateOnEntry } from '$lib/components/animation';
  import { contentStyles } from './rich-text.styles';

  const { content, columns = 1, colorVariant = 'default', css: cssProp }: RichTextProps = $props();
</script>

{#if content}
  <Section {colorVariant} containerWidth="normal">
    <AnimateOnEntry
      direction="up"
      duration={0.7}
      intensity={0.4}
      blur={true}
    >
      <LexicalContent
        {content}
        css={cssProp ? { ...contentStyles.raw({ columns }), ...cssProp } : contentStyles.raw({ columns })}
      />
    </AnimateOnEntry>
  </Section>
{/if}
