<script lang="ts">
  import { css } from '@agapi/ui/panda/css';
  import { Section } from '@agapi/ui/section';
  import { Carousel, CarouselSlide } from '@agapi/ui/carousel';
  import { AnimateOnEntry, AnimatedText } from '$lib/components/animation';
  import { imageStyles, captionStyles } from './image-gallery.styles';
  import type { ImageGalleryProps } from './image-gallery.types';

  const {
    title,
    images = [],
    layout = 'carousel',
    showNavigation = true,
    showDots = true,
    colorVariant = 'secondary.tonal'
  }: ImageGalleryProps = $props();
</script>

<Section {colorVariant} containerWidth="full">
  {#if title}
    <AnimatedText
      type="reveal"
      variant="lineByLine"
      text={title}
      as="h2"
      direction="up"
      stagger={0.12}
      duration={0.6}
    />
  {/if}
  <AnimateOnEntry
    direction="up"
    duration={0.8}
    delay={0.2}
    intensity={0.5}
    blur={true}
  >
    <Carousel
      options={{ align: 'start', slidesToScroll: 1 }}
      fadeEdges={true}
      hideNavigation={!showNavigation}
      hideIndicators={!showDots}
    >
      {#each images as image, index (image.image?.url)}
        {#if image.image?.url}
          <CarouselSlide>
            <img
              src={image.image.url}
              alt={image.alt || image.caption || `Gallery image ${index + 1}`}
              class={imageStyles}
              loading="lazy"
            />
            {#if image.caption}
              <p class={captionStyles}>{image.caption}</p>
            {/if}
          </CarouselSlide>
        {/if}
      {/each}
    </Carousel>
  </AnimateOnEntry>
</Section>

