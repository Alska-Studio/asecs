<script lang="ts">
  import { Button } from '$lib/components/button';
  import { Card, CardHeader, CardContent } from '@agapi/ui/card';
  import { Badge } from '@agapi/ui/badge';
  import { css } from '@agapi/ui/panda/css';
  import { grid, stack } from '@agapi/ui/panda/patterns';
  import * as m from '$lib/parachute/messages';
  import { getLocale } from '$lib/parachute/runtime';
  import { page } from '$app/state';
  import { rewriteUrl } from '$lib/utils/url';
  import SEO from '$lib/components/seo/seo.svelte';
  import { CollectionHero } from '$lib/payload/collections/collection-hero';

  import ScrollTextPath from '~/src/lib/components/scroll-text-path/scroll-text-path.svelte';
  import { ScrollMarquee } from '~/src/lib/components/scroll-marquee';
  import { Parallax, AnimatedText } from '$lib/components/animation';

  let clickCount = $state(0);
</script>

<SEO
  title={`${m.welcome()} - My App`}
  description={m.welcomeMessage()}
  structuredData={{ type: 'WebPage' }}
  openGraph={{
    title: m.welcome(),
    description: m.welcomeMessage(),
    type: 'website'
  }}
/>

<CollectionHero
  title="The Future"
  titleAlternate="of Digital"
  richText="This is a rich text section"
  backgroundImage="https://picsum.photos/id/168/1920/800"
  actions={[
    {
      label: 'Get Started',
      href: '/get-started',
      variant: 'primary',
      icon: 'storefront'
    },
    {
      label: 'Learn More',
      href: '/learn-more',
      variant: 'secondary',
      icon: 'map-pin'
    }
  ]}
/>

<div class={css({ maxWidth: '1200px', margin: '0 auto', padding: '2rem' })}>
  <!-- Hero Section -->
  <div class={css({ textAlign: 'center', marginBottom: '3rem' })}>
    <h1 class={css({ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' })}>
      {m.welcome()}
    </h1>
    <p
      class={css({
        fontSize: '1.25rem',
        color: 'gray.600',
        marginBottom: '1rem',
        maxWidth: '600px',
        marginX: 'auto'
      })}
    >
      {m.welcomeMessage()}
    </p>
    <p
      class={css({
        fontSize: '1rem',
        color: 'blue.600',
        fontWeight: 'medium',
        marginBottom: '2rem'
      })}
    >
      {m.currentLanguage()} ({getLocale().toUpperCase()})
    </p>

    <div class={stack({ direction: 'row', gap: '4', justify: 'center' })}>
      <Button variant="primary" size="lg">Get Started</Button>
      <Button variant="secondary" size="lg">Learn More</Button>
    </div>
  </div>

  <!-- Scroll Animation Section -->
  <ScrollTextPath
    line1="THE FUTURE"
    line2="OF DIGITAL"
    intensity={0.2}
    className={css({ marginY: '6rem' })}
  />

  <!-- Demo Section -->
  <div class={grid({ columns: { base: 1, md: 2 }, gap: '6', marginBottom: '3rem' })}>
    <Card>
      <CardHeader>
        <h2 class={css({ fontSize: '1.5rem', fontWeight: '600' })}>
          {m.buttonExample()}
        </h2>
      </CardHeader>
      <CardContent>
        <p class={css({ color: 'gray.600', marginBottom: '1rem' })}>
          Click the button to see component interactions in action.
        </p>

        <div class={stack({ direction: 'row', gap: '4', align: 'center' })}>
          <Button variant="primary" onclick={() => clickCount++}>
            Click me! ({clickCount})
          </Button>

          {#if clickCount > 0}
            <Badge colorVariant="primary.contrast">
              Clicked {clickCount} time{clickCount === 1 ? '' : 's'}!
            </Badge>
          {/if}
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <h2 class={css({ fontSize: '1.5rem', fontWeight: '600' })}>AGAPI UI Features</h2>
      </CardHeader>
      <CardContent>
        <ul class={css({ listStyle: 'none', padding: 0, color: 'gray.600' })}>
          <li class={css({ marginBottom: '0.5rem' })}>✓ 37+ Ready-to-use components</li>
          <li class={css({ marginBottom: '0.5rem' })}>✓ Panda CSS styling system</li>
          <li class={css({ marginBottom: '0.5rem' })}>✓ TypeScript support</li>
          <li class={css({ marginBottom: '0.5rem' })}>✓ Accessibility built-in</li>
          <li class={css({ marginBottom: '0.5rem' })}>✓ Responsive design</li>
          <li class={css({ marginBottom: '0.5rem' })}>✓ Dark mode support</li>
          <li class={css({ marginBottom: '0.5rem' })}>✨ Motion animations</li>
        </ul>
      </CardContent>
    </Card>
  </div>

  <!-- Another Scroll Animation -->
  <ScrollTextPath line1="MODE FÖR" line2="HELA DIG" intensity={0.3} />

  <!-- Hero with Parallax Section - Now replaced by our new Parallax components below -->

  <!-- Marquee Demonstrations -->
  <div class={css({ marginY: '4rem' })}>
    <h2
      class={css({
        fontSize: '2rem',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '3rem'
      })}
    >
      Scroll Marquees
    </h2>

    <!-- Regular Marquee with Background -->
    <ScrollMarquee
      colorVariant="primary.tonal"
      intensity={0.5}
      baseSpeed={20}
      spacing="normal"
      css={{ marginBottom: '2rem' }}
    >
      <span class={css({ fontSize: '1.25rem', fontWeight: '600' })}>🚀 AGAPI UI</span>
      <span class={css({ fontSize: '1.25rem', fontWeight: '600' })}>✨ MOTION POWERED</span>
      <span class={css({ fontSize: '1.25rem', fontWeight: '600' })}>🎨 DESIGN SYSTEM</span>
      <span class={css({ fontSize: '1.25rem', fontWeight: '600' })}>⚡ SVELTEKIT</span>
    </ScrollMarquee>

    <!-- Tilted Marquee -->
    <ScrollMarquee
      colorVariant="secondary.vibrant"
      intensity={0.3}
      tilt={-5}
      baseSpeed={25}
      spacing="loose"
      css={{ marginBottom: '2rem' }}
    >
      <span class={css({ fontSize: '1.5rem', fontWeight: '800' })}>THE FUTURE</span>
      <span class={css({ fontSize: '1.5rem', fontWeight: '800' })}>OF DIGITAL</span>
      <span class={css({ fontSize: '1.5rem', fontWeight: '800' })}>EXPERIENCES</span>
    </ScrollMarquee>

    <!-- Transparent Marquee -->
    <ScrollMarquee
      background={false}
      intensity={0.4}
      direction="right"
      baseSpeed={18}
      spacing="tight"
    >
      <span class={css({ fontSize: '1rem', opacity: '0.7' })}>Scroll to see the magic</span>
      <span class={css({ fontSize: '1rem', opacity: '0.7' })}>•</span>
      <span class={css({ fontSize: '1rem', opacity: '0.7' })}>Powered by Motion.js</span>
      <span class={css({ fontSize: '1rem', opacity: '0.7' })}>•</span>
      <span class={css({ fontSize: '1rem', opacity: '0.7' })}>Built with Svelte</span>
      <span class={css({ fontSize: '1rem', opacity: '0.7' })}>•</span>
    </ScrollMarquee>
  </div>

  <!-- New Animation Components MVP Section -->
  <div
    class={css({
      marginY: '6rem',
      padding: '2rem',
      backgroundColor: 'gray.50',
      borderRadius: 'lg'
    })}
  >
    <h2
      class={css({
        fontSize: '2rem',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: '3rem'
      })}
    >
      New Animation Components MVP
    </h2>

    <!-- AnimatedText Examples -->
    <div class={css({ marginBottom: '4rem' })}>
      <h3 class={css({ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' })}>
        AnimatedText - Word by Word Reveal
      </h3>

      <div class={stack({ gap: '4' })}>
        <!-- Example 1: Up direction -->
        <div class={css({ padding: '2rem', backgroundColor: 'white', borderRadius: 'md' })}>
          <AnimatedText
            type="reveal"
            variant="wordByWord"
            text="This text animates word by word from the bottom up"
            direction="up"
            stagger={0.1}
            trigger="scroll"
            as="h4"
            css={{ fontSize: '1.25rem', fontWeight: '600', textAlign: 'center' }}
          />
        </div>

        <!-- Example 2: Right direction -->
        <div class={css({ padding: '2rem', backgroundColor: 'white', borderRadius: 'md' })}>
          <AnimatedText
            type="reveal"
            variant="wordByWord"
            text="Watch each word slide in from the left with custom stagger timing"
            direction="right"
            stagger={0.15}
            trigger="scroll"
            as="p"
            css={{ fontSize: '1.125rem', textAlign: 'center', color: 'blue.600' }}
          />
        </div>

        <!-- Example 3: Fast reveal -->
        <div class={css({ padding: '2rem', backgroundColor: 'white', borderRadius: 'md' })}>
          <AnimatedText
            type="reveal"
            variant="wordByWord"
            text="Quick animated headlines for maximum impact and engagement"
            direction="down"
            stagger={0.05}
            duration={0.4}
            trigger="scroll"
            as="h5"
            css={{
              fontSize: '1.5rem',
              fontWeight: '700',
              textAlign: 'center',
              color: 'purple.600'
            }}
          />
        </div>
      </div>
    </div>

    <!-- Parallax Examples -->
    <div>
      <h3 class={css({ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' })}>
        Parallax - Parallax Effects
      </h3>

      <div class={grid({ columns: { base: 1, md: 2 }, gap: '4' })}>
        <!-- Example 1: Fast enter, slow exit with inner parallax -->
        <Parallax
          parallax={{
            enterIntensity: 0.8,
            exitIntensity: 0.1,
            transitionPoint: 0.15,
            direction: 'up'
          }}
          innerParallax={{
            intensity: 0.6,
            direction: 'down',
            scale: 1.1
          }}
          trigger="start end"
        >
          <div
            class={css({
              height: '300px',
              borderRadius: 'lg',
              overflow: 'hidden',
              position: 'relative'
            })}
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
              alt="Mountain landscape with vertical parallax effect"
              class={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              })}
            />
            <div
              class={css({
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: 'md',
                fontSize: '0.875rem',
                fontWeight: '600'
              })}
            >
              Container Up + Image Down & Scale
              <br />
              <span class={css({ fontSize: '0.75rem', opacity: '0.8' })}>
                Container: up, Image: down + scale 1.15x
              </span>
            </div>
          </div>
        </Parallax>

        <!-- Example 2: Slow enter, fast exit (upward) -->
        <Parallax
          parallax={{
            enterIntensity: 0.3,
            exitIntensity: 0.9,
            direction: 'up',
            transitionPoint: 0.3
          }}
          trigger="start end"
        >
          <div
            class={css({
              height: '300px',
              borderRadius: 'lg',
              overflow: 'hidden',
              position: 'relative'
            })}
          >
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center"
              alt="Forest landscape with horizontal parallax effect"
              class={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              })}
            />
            <div
              class={css({
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: 'md',
                fontSize: '0.875rem',
                fontWeight: '600'
              })}
            >
              Slow Enter, Fast Exit (Up)
              <br />
              <span class={css({ fontSize: '0.75rem', opacity: '0.8' })}>
                enterIntensity: 0.3, exitIntensity: 0.9, transitionPoint: 0.3
              </span>
            </div>
          </div>
        </Parallax>

        <!-- Example 3: Downward movement -->
        <Parallax
          parallax={{
            enterIntensity: 0.6,
            exitIntensity: 0.4,
            direction: 'down'
          }}
          trigger="start end"
        >
          <div
            class={css({
              height: '300px',
              borderRadius: 'lg',
              overflow: 'hidden',
              position: 'relative'
            })}
          >
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center"
              alt="Ocean sunset with both direction parallax effect"
              class={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              })}
            />
            <div
              class={css({
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: 'md',
                fontSize: '0.875rem',
                fontWeight: '600'
              })}
            >
              Downward Movement
              <br />
              <span class={css({ fontSize: '0.75rem', opacity: '0.8' })}>
                enterIntensity: 0.6, exitIntensity: 0.4
              </span>
            </div>
          </div>
        </Parallax>

        <!-- Example 4: Subtle upward movement -->
        <Parallax
          parallax={{
            enterIntensity: 0.2,
            exitIntensity: 0.2,
            direction: 'up'
          }}
          trigger="start end"
        >
          <div
            class={css({
              height: '300px',
              borderRadius: 'lg',
              overflow: 'hidden',
              position: 'relative'
            })}
          >
            <img
              src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop&crop=center"
              alt="Desert landscape with subtle parallax effect"
              class={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              })}
            />
            <div
              class={css({
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: 'md',
                fontSize: '0.875rem',
                fontWeight: '600'
              })}
            >
              Subtle Upward Movement
              <br />
              <span class={css({ fontSize: '0.75rem', opacity: '0.8' })}>
                enterIntensity: 0.3, exitIntensity: 0.3
              </span>
            </div>
          </div>
        </Parallax>
      </div>
    </div>

    <div
      class={css({
        textAlign: 'center',
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: 'md'
      })}
    >
      <h4 class={css({ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' })}>
        🚀 Animation Components MVP Features
      </h4>
      <ul
        class={css({
          listStyle: 'none',
          padding: 0,
          color: 'gray.600',
          textAlign: 'left',
          maxWidth: '600px',
          marginX: 'auto'
        })}
      >
        <li class={css({ marginBottom: '0.5rem' })}>
          ✅ Motion.js integration for smooth performance
        </li>
        <li class={css({ marginBottom: '0.5rem' })}>
          ✅ Parallax with enterIntensity & exitIntensity controls
        </li>
        <li class={css({ marginBottom: '0.5rem' })}>
          ✅ Word-by-word text reveals with stagger timing
        </li>
        <li class={css({ marginBottom: '0.5rem' })}>
          ✅ Multiple directions (up, down, left, right, both)
        </li>
        <li class={css({ marginBottom: '0.5rem' })}>✅ Scroll and load triggers</li>
        <li class={css({ marginBottom: '0.5rem' })}>
          ✅ Accessibility support (respects prefers-reduced-motion)
        </li>
        <li class={css({ marginBottom: '0.5rem' })}>
          ✅ TypeScript interfaces and PandaCSS integration
        </li>
      </ul>
    </div>
  </div>

  <!-- Getting Started -->
  <div class={css({ textAlign: 'center' })}>
    <h2 class={css({ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' })}>
      Ready to build?
    </h2>
    <p class={css({ color: 'gray.600', marginBottom: '1.5rem' })}>
      Check out the components page to explore all available UI elements.
    </p>
    <Button variant="cta" size="lg" as="a" href={rewriteUrl(page, '/components')}>
      {m.components()}
    </Button>
  </div>
</div>
