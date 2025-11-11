<script lang="ts">
  import type { BlockquoteProps } from './blockquote.types';

  import { Section } from '@agapi/ui/section';
  import { css } from '@agapi/ui/panda/css';
  import Columns from '$lib/components/layouts/columns.svelte';
  import Column from '$lib/components/layouts/column.svelte';
  import { AnimateOnEntry, AnimatedText } from '$lib/components/animation';
  import { blockquoteContainer, blockquoteText, authorText } from './blockquote.styles';

  const { quote, author, colorVariant = 'default', css: cssProp }: BlockquoteProps = $props();
</script>

{#if quote}
  <Section {colorVariant} containerWidth="full">
    <Columns template={{ base: '1fr', lg: '1fr 1fr 1fr' }} gap="normal">
      <Column span={2}>
        <AnimateOnEntry
          direction="up"
          duration={0.8}
          intensity={0.5}
          blur={true}
          scale={true}
        >
          <blockquote class={cssProp ? css({ ...blockquoteContainer, ...cssProp }) : css(blockquoteContainer)}>
            <AnimatedText
              type="reveal"
              variant="lineByLine"
              as="p"
              direction="up"
              stagger={0.15}
              duration={0.7}
              delay={0.2}
              css={blockquoteText}
            >
              "{quote}"
            </AnimatedText>
            {#if author}
              <AnimateOnEntry
                direction="left"
                duration={0.5}
                delay={0.5}
                intensity={0.3}
              >
                <footer class={authorText}>— {author}</footer>
              </AnimateOnEntry>
            {/if}
          </blockquote>
        </AnimateOnEntry>
      </Column>
      <Column span={1}>
        <!-- Empty column for spacing -->
      </Column>
    </Columns>
  </Section>
{/if}

