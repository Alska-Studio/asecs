<script lang="ts">
  import { Carousel, CarouselSlide } from '@agapi/ui/carousel';
  import { ImageCard } from '../image-card';
  import { css } from '@agapi/ui/panda/css';
  import {
    carouselSection,
    carouselTitle,
    slideWrapper,

    carouselWrapperStyles
  } from './content-card-carousel.styles';
  import type { ContentCardCarouselProps } from './content-card-carousel.types';

  const {
    cards,
    title,
    options = { align: 'start', slidesToScroll: 1 },
    fadeEdges = true,
    hideNavigation = false,
    hideIndicators = true,
    css: cssProp
  }: ContentCardCarouselProps = $props();
</script>

<div class={css(carouselSection, cssProp)}>
  {#if title}
    <h2 class={css(carouselTitle)}>{title}</h2>
  {/if}

  <Carousel {options} {fadeEdges} {hideNavigation} {hideIndicators} rootStyles={carouselWrapperStyles} wrapperStyles={carouselWrapperStyles} css={carouselWrapperStyles}>
    {#each cards as card (card.href)}
      <CarouselSlide css={slideWrapper}>
        <ImageCard {...card} />
      </CarouselSlide>
    {/each}
  </Carousel>
</div>
