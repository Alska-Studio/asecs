<script lang="ts">
  import { css } from '@agapi/ui/panda/css';
  import { Section } from '@agapi/ui/section';
  import { Card, CardContent } from '@agapi/ui/card';
  import { Columns } from '$lib/components/layouts';
  import Column from '$lib/components/layouts/Column.svelte';
  import {
    Phone,
    Globe,
    ForkKnife,
    FacebookLogo,
    InstagramLogo,
    TwitterLogo,
    LinkedinLogo,
    YoutubeLogo,
    TiktokLogo
  } from 'phosphor-svelte';
  import { OpeningHours } from '$lib/components/opening-hours';
  import { Button } from '$lib/components/button';
  import {
    cardSection,
    sectionTitle,
    contactButtons,
    socialMediaButtons,
    cardStyles,
    cardContentStyles
  } from './store-info-card.styles';
  import type { StoreInfoCardProps, SocialMediaPlatform } from './store-info-card.types';
  import type { Component } from 'svelte';

  const {
    openingHours,
    phone,
    website,
    menuUrl,
    socialMediaLinks = [],
    viewAllHoursHref,
    css: cssProp
  }: StoreInfoCardProps = $props();

  // Social media icon mapping
  const socialMediaIcons: Record<SocialMediaPlatform, Component> = {
    'facebook': FacebookLogo,
    'instagram': InstagramLogo,
    'twitter': TwitterLogo,
    'linkedin': LinkedinLogo,
    'youtube': YoutubeLogo,
    'tiktok': TiktokLogo
  };

  // Social media platform labels
  const socialMediaLabels: Record<SocialMediaPlatform, string> = {
    'facebook': 'Facebook',
    'instagram': 'Instagram',
    'twitter': 'Twitter',
    'linkedin': 'LinkedIn',
    'youtube': 'YouTube',
    'tiktok': 'TikTok'
  };
</script>

<Section containerWidth="normal" colorVariant="default">
  <Card spacing="relaxed" colorVariant="primary.subdued" css={{...css.raw(cardStyles), ...cssProp}}>
    <CardContent>
      <Columns template={{ base: '1fr', md: '1fr 1fr 1fr' }} css={css.raw(cardContentStyles)}>
        <!-- Opening Hours Section -->
        {#if openingHours}
          <Column>
            <div class={css(cardSection)}>
              <p class={css(sectionTitle)}>Öppettider</p>
              <OpeningHours schedule={openingHours} viewAllHref={viewAllHoursHref} />
            </div>
          </Column>
        {/if}

        <!-- Contact Section -->
        <Column>
          <div class={css(cardSection)}>
            <p class={css(sectionTitle)}>Kontakt</p>
            <div class={css(contactButtons)}>
              {#if menuUrl}
                <Button as="a" href={menuUrl} target="_blank" rel="noopener noreferrer" variant="cta" fullWidth>
                  <ForkKnife size={22} weight="regular" />
                  Meny
                </Button>
              {/if}
              {#if phone}
                <Button as="a" href={`tel:${phone}`} variant="primary" fullWidth>
                  <Phone size={22} weight="regular" />
                  {phone}
                </Button>
              {/if}
              {#if website}
                <Button as="a" href={website} target="_blank" rel="noopener noreferrer" variant="primary" fullWidth>
                  <Globe size={22} weight="regular" />
                  Besök {website.includes('://') ? new URL(website).hostname.replace('www.', '') : website}
                </Button>
              {/if}
            </div>
          </div>
        </Column>

        <!-- Social Media Section -->
        {#if socialMediaLinks.length > 0}
          <Column>
            <div class={css(cardSection)}>
              <p class={css(sectionTitle)}>Följ oss på sociala medier</p>
              <div class={css(socialMediaButtons)}>
                {#each socialMediaLinks as link}
                  {@const IconComponent = socialMediaIcons[link.platform]}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      backgroundColor: 'surface.default.background',
                      color: 'text.heading',
                      transition: 'all 0.2s ease',
                      _hover: {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)'
                      }
                    })}
                    aria-label={socialMediaLabels[link.platform]}
                  >
                    {#if IconComponent}
                      <IconComponent size={40} weight="fill" />
                    {/if}
                  </a>
                {/each}
              </div>
            </div>
          </Column>
        {/if}
      </Columns>
    </CardContent>
  </Card>
</Section>

