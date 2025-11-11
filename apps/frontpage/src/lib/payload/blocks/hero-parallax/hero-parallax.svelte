<script lang="ts">
  import AsecsLogoLight from '$lib/assets/asecs logo light.svg?raw';
  import AsecsLogoNoCircle from '$lib/assets/asecs-logo-light-no-circle.svg?raw';
  import { ScrollMarquee } from '$lib/components/scroll-marquee';
  import { AnimatedText, Parallax, AnimateOnEntry } from '$lib/components/animation';
  import { Columns } from '$lib/components/layouts';
  import { Section } from '@agapi/ui/section';
  import { OpeningHours } from '$lib/components/opening-hours';
  import { Image } from '@agapi/ui/image';
  import type { HeroParallaxProps } from './hero-parallax.types';
  import {
    backgroundLogoStyles,
    headingLowerStyles,
    containerStyles,
    quickLinksContainer,
    quickLinkStyles,
    marqueeContainerStyles,
    marqueeTextStyles,
    marqueeTextAltStyles,
    marqueeLogoStyles,
    imageContainerStyles,
    contentContainerStyles,
    rootStyles
  } from './hero-parallax.styles';
    import Column from '$lib/components/layouts/column.svelte';
    import { token, type Token } from '@agapi/ui/panda/tokens';

  const {
    showOpeningHours = true,
    locationId,
    headingUpper = 'HELA VÄRLDEN',
    headingLower = 'Under ett tak',
    description = 'På Asecs hittar du i Jönköping hittar du XX butiker, XX restauranger, upplevelser. Hela världen under ett tak.',
    imageUrl,
    quickLinks,
    marqueeText = 'Allt under samma tak',
    colorVariant = 'primary.vibrant',
    css: cssProp
  }: HeroParallaxProps = $props();

  // Default quick links
  const defaultQuickLinks = [
    { label: 'Hitta hit', icon: 'compass' as const, href: '#map' },
    { label: 'Hitta butiker', icon: 'shopping' as const, href: '/stores' },
    { label: 'Äta & Fika', icon: 'food' as const, href: '/restaurants' },
    { label: 'Upplev event', icon: 'confetti' as const, href: '/events' }
  ];

  // Use provided quick links or fall back to defaults
  const effectiveQuickLinks = $derived(quickLinks ?? defaultQuickLinks);

  // Extract image URL from media object or use string URL directly
  const resolvedImageUrl: string | undefined = $derived(
    typeof imageUrl === 'string'
      ? imageUrl
      : imageUrl?.url || undefined
  );

  // Default hero image if none provided
  const defaultImageUrl = 'https://picsum.photos/id/1015/454/677';
  const finalImageUrl = $derived(resolvedImageUrl || defaultImageUrl);
</script>

<Section
  colorVariant={colorVariant}
  containerWidth="wide"
  containerStyles={containerStyles}
  rootStyles={rootStyles}
>
  <!-- Large background logo with subtle parallax -->
  <Parallax parallax={{ enterIntensity: 0.15, exitIntensity: 0.15, direction: 'down' }}>
    <div class={backgroundLogoStyles}>
      {@html AsecsLogoNoCircle}
    </div>
  </Parallax>

  <Columns columns={{ base: 1, lg: 2 }} gap="loose">
    <!-- Left column: Content -->
    <Column css={contentContainerStyles}>
      <!-- Opening Hours - NO WRAPPER! -->
      {#if showOpeningHours}
        <OpeningHours
          locationId={locationId}
          viewAllHref="/opening-hours"
          css={{ marginBottom: '8' }}
        />
      {/if}

        <!-- Heading with AnimatedText -->

          <AnimatedText
            type="reveal"
            variant="wordByWord"
            direction="up"
            stagger={0.1}
            duration={0.6}
            delay={0.2}
          >
            <h1 style:color="{token(`colors.surface.${colorVariant}.highlight` as Token)}">
              {headingUpper}
              <span class={headingLowerStyles}>{headingLower}</span>
            </h1>
          </AnimatedText>

      <!-- Description with AnimatedText -->
      <AnimatedText
        type="reveal"
        variant="wordByWord"
        text={description}
        as="p"
        direction="up"
        stagger={0.02}
        duration={0.5}
        delay={0.8}
      />

      <!-- Quick links with AnimateOnEntry -->
      {#if effectiveQuickLinks.length > 0}
        <AnimateOnEntry
          direction="up"
          duration={0.6}
          delay={1}
          distance={20}
          blur={true}
          scale={true}
        >
          <div class={quickLinksContainer}>
            {#each effectiveQuickLinks as link (link.href)}
              <a href={link.href} class={quickLinkStyles}>
                <span>{link.label}</span>
              </a>
            {/each}
          </div>
        </AnimateOnEntry>
      {/if}
    </Column>

    <!-- Right column: Hero image with Parallax -->
    <Column class={imageContainerStyles}>
      <Parallax
        parallax={{ enterIntensity: 0.2, exitIntensity: 0.7, direction: 'up' }}
        innerParallax={{ intensity: 0.6, direction: 'down', scale: 1.1 }}
        trigger="start end"
        css={{
          aspectRatio: 4/5,
          borderTopRadius: 'full',
          overflow: 'hidden',
          maxHeight: '70vh',
          height: '100%'
        }}
      >
        <Image
          src={finalImageUrl}
          alt="Hero"
          width={295}
          aspectRatio={4/5}
          fit="cover"
          loading="eager"
        />
      </Parallax>
    </Column>
  </Columns>

  <!-- Diagonal marquee with ScrollMarquee -->
  <div class={marqueeContainerStyles}>
    <ScrollMarquee
      direction="right"
      baseSpeed={200}
      spacing="none"
      colorVariant="primary.tonal"
      css={{ '& > div': { gap: '0 !important' } }}

    >
      {#each Array(10), index (index)}
        <span class={marqueeTextStyles}>{marqueeText}</span>
        <div class={marqueeLogoStyles}>
          {@html AsecsLogoLight}
        </div>
        <span class={marqueeTextAltStyles}>{marqueeText}</span>
        <div class={marqueeLogoStyles}>
          {@html AsecsLogoLight}
        </div>
      {/each}
    </ScrollMarquee>
  </div>
</Section>
