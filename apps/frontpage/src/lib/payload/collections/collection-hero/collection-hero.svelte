<script lang="ts" module>
  import type { Component } from 'svelte';
  import type { CollectionHeroProps } from './collection-hero.types';

  import {
    Storefront,
    MapPin,
    Clock,
    ArrowRight,
    House,
    ShoppingCart,
    Info
  } from 'phosphor-svelte';

  // Static icon mapping
  const ICON_MAP: Record<string, Component> = {
    storefront: Storefront,
    'map-pin': MapPin,
    clock: Clock,
    'arrow-right': ArrowRight,
    house: House,
    'shopping-cart': ShoppingCart,
    info: Info
  };
</script>

<script lang="ts">
  import { css } from '@agapi/ui/panda/css';
  import { Section } from '@agapi/ui/section';

  import { Button } from '$components/button';
  import { OpeningHours } from '$components/opening-hours';
  import { AnimatedText } from '$components/animation/animated-text';
  import { AnimateOnEntry } from '$components/animation';

  import {
    heroContainer,
    heroContent,
    titleText,
    titleAlternateText,
    bgOverlay,
    bgImage,
    heroRootStyles,
    actionsContainer,
    heroButton,
    openingHoursContainer
  } from './collection-hero.styles';

  import { Columns } from '$components/layouts';

  import Column from '$components/layouts/column.svelte';

  const {
    title,
    titleAlternate,
    backgroundImage,
    richText,
    openingHours,
    actions = [],
    css: cssProp
  }: CollectionHeroProps = $props();
</script>

<Section containerWidth="full" colorVariant="primary.vibrant" rootStyles={css.raw(heroRootStyles)} containerStyles={css.raw(heroContainer)}>
  {#if backgroundImage}
    <img src={backgroundImage as string} alt="Hero background" class={bgImage} />
  {/if}
  <div class={bgOverlay}></div>

  <!-- Hero Content -->
    <Columns template={{ base: '1fr', lg: '1fr 1fr' }} gap="normal" class={css(heroContent)}>
      <Column>
        <h1 class={titleText}>
          <AnimatedText
            type="reveal"
            variant="wordByWord"
            direction="up"
            stagger={0.08}
            duration={0.6}
            delay={0.2}
            trigger="load"
            as="span"
          >
            {title || ''} <span class={css(titleAlternateText)}>{titleAlternate || ''}</span>
          </AnimatedText>
        </h1>
      </Column>

      <Column>
        <AnimateOnEntry
          animation="spring"
          duration={0.6}
          delay={0.2}
          trigger="scroll"
          stagger={{ enabled: true, delay: 0.15 }}
        >
          {#if openingHours}
            <div class={openingHoursContainer}>
              <OpeningHours schedule={openingHours} viewAllHref="/opening-hours" />
            </div>
          {/if}

          {#if richText}
            <div>
              {@html richText}
            </div>
          {/if}

          {#if actions.length > 0}
            <div class={actionsContainer}>
              {#each actions as action, index (action.href)}
                {@const variant = action.variant || (index === 0 ? 'cta' : 'secondary')}
                {@const IconComponent = action.icon ? ICON_MAP[action.icon] : null}
                <Button
                  as={action.href ? 'a' : 'button'}
                  variant={variant}
                  href={action.href}
                  onclick={action.onClick}
                  data-variant={variant}
                  css={heroButton}
                >
                  {#if IconComponent}
                    <IconComponent weight="regular" />
                  {/if}
                  {action.label}
                </Button>
              {/each}
            </div>
          {/if}
        </AnimateOnEntry>
      </Column>
    </Columns>
</Section>
