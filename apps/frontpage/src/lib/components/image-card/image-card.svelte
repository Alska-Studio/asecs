<script lang="ts">
  /**
   * ImageCard - Generic card component for image-based content
   *
   * A reusable card component that displays an image, title, optional meta text,
   * and badges. Can be used as a link or with custom click handlers.
   *
   * @example Basic usage
   * ```svelte
   * <ImageCard
   *   image="/path/to/image.jpg"
   *   title="Card Title"
   *   meta="Additional information"
   * />
   * ```
   *
   * @example With link
   * ```svelte
   * <ImageCard
   *   image="/path/to/image.jpg"
   *   title="Card Title"
   *   href="/details"
   * />
   * ```
   *
   * @example With badges and icons
   * ```svelte
   * <ImageCard
   *   image="/path/to/image.jpg"
   *   title="Card Title"
   *   badges={[
   *     { label: 'Open now', icon: 'clock', colorVariant: 'primary.vibrant' },
   *     { label: 'Downtown', icon: 'map-pin', colorVariant: 'secondary.vibrant' }
   *   ]}
   * />
   * ```
   */
  import { css } from '@agapi/ui/panda/css';
  import { Card, CardContent } from '@agapi/ui/card';
  import { Badge } from '@agapi/ui/badge';
  import { Image } from '@agapi/ui/image';
  import { Parallax } from '$lib/components/animation';
  import { Clock, MapPin, Tag } from 'phosphor-svelte';
  import {
    imageContainer,
    badgeContainer,
    badgeIconDot,
    cardTitle,
    cardMeta,
    cardOverrides,
    linkWrapper,
    textContainer
  } from './image-card.styles';
  import type { ImageCardProps } from './image-card.types';

  const {
    image,
    title,
    alt,
    meta,
    badges = [],
    href,
    onclick,
    css: cssProp
  }: ImageCardProps = $props();

  // Click handler (preventDefault if both href and onclick)
  const handleClick = (e: MouseEvent) => {
    if (onclick) {
      e.preventDefault();
      onclick(e);
    }
  };

  // Use title as alt text if alt not provided
  const imageAlt = $derived(alt || title);
</script>

{#if href}
  <a {href} onclick={handleClick} class={linkWrapper}>
    <Card spacing="none" css={{ ...cardOverrides, ...cssProp }}>
      <!-- Image Container -->
      <div class={imageContainer}>
        <Parallax
          innerParallax={{ intensity: 0.6, direction: 'down', scale: 1.1 }}
          trigger="start end"
          css={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        >
          {#if image}
            {@const src = typeof image === 'string' ? image! : image.url!}
            <Image
              src={src}
              alt={imageAlt}
              width={500}
              aspectRatio={4/5}
              fit="cover"
              loading="lazy"
            />
          {/if}
        </Parallax>

        <!-- Badges positioned absolutely at bottom -->
        {#if badges.length > 0}
          <div class={badgeContainer}>
            {#each badges as badge (badge.label)}
              <Badge
                colorVariant={badge.colorVariant || 'primary.vibrant'}
                size="md"
                rounded="full"
              >
                {#if badge.icon}
                  {#snippet icon()}
                    {#if badge.icon === 'dot'}
                      <span class={css(badgeIconDot)} aria-hidden="true"></span>
                    {:else if badge.icon === 'clock'}
                      <Clock size={12} weight="fill" />
                    {:else if badge.icon === 'map-pin'}
                      <MapPin size={12} weight="fill" />
                    {:else if badge.icon === 'tag'}
                      <Tag size={12} weight="fill" />
                    {/if}
                  {/snippet}
                {/if}
                {badge.label}
              </Badge>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Text Content -->
      <CardContent>
        <div class={textContainer}>
          <h3 class={cardTitle}>{title}</h3>
          {#if meta}
            <p class={cardMeta}>{meta}</p>
          {/if}
        </div>
      </CardContent>
    </Card>
  </a>
{:else}
  <Card spacing="none" css={{ ...cardOverrides, ...cssProp }}>
      <!-- Image Container -->
      <div class={imageContainer}>
        <Parallax
          innerParallax={{ intensity: 0.6, direction: 'down', scale: 1.1 }}
          trigger="start end"
          css={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        >
          {#if image}
            {@const src = typeof image === 'string' ? image! : image.url!}
            <Image
              src={src}
              alt={imageAlt}
              width={500}
              aspectRatio={4/5}
              fit="cover"
              loading="lazy"
            />
          {/if}
        </Parallax>

      <!-- Badges positioned absolutely at bottom -->
      {#if badges.length > 0}
        <div class={badgeContainer}>
          {#each badges as badge (badge.label)}
            <Badge
              colorVariant={badge.colorVariant || 'primary.vibrant'}
              size="md"
              rounded="full"
            >
              {#snippet icon()}
                {#if badge.icon === 'dot'}
                  <span class={css(badgeIconDot)} aria-hidden="true"></span>
                {:else if badge.icon === 'clock'}
                  <Clock size={12} weight="fill" />
                {:else if badge.icon === 'map-pin'}
                  <MapPin size={12} weight="fill" />
                {:else if badge.icon === 'tag'}
                  <Tag size={12} weight="fill" />
                {/if}
              {/snippet}
              {badge.label}
            </Badge>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Text Content -->
    <CardContent>
      <div class={textContainer}>
        <h3 class={cardTitle}>{title}</h3>
        {#if meta}
          <p class={cardMeta}>{meta}</p>
        {/if}
      </div>
    </CardContent>
  </Card>
{/if}

