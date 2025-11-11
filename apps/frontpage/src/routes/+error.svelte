<script lang="ts">
  import { page } from '$app/state';
  import { css } from '@agapi/ui/panda/css';
  import { Button } from '~/src/lib/components/button';
  import { onMount } from 'svelte';
  import { animate, stagger } from 'motion';
  import { rewriteUrl } from '$lib/utils/url';
  import SEO from '$lib/components/seo/seo.svelte';
  import * as m from '$lib/parachute/messages';

  // Element refs
  let statusBgRef = $state<HTMLElement | undefined>();
  let titleRef = $state<HTMLElement | undefined>();
  let descriptionRef = $state<HTMLElement | undefined>();
  let primaryButtonRef = $state<HTMLElement | undefined>();
  let secondaryButtonRef = $state<HTMLElement | undefined>();
  let tertiaryButtonRef = $state<HTMLElement | undefined>();

  // SEO configuration
  const seoTitle = $derived(
    `${page.status === 404 ? m.notFoundTitle() : m.errorTitle()} (${page.status}) - My App`
  );
  const seoDescription = $derived(
    page.status === 404 ? m.notFoundSubtitle() : m.errorSubtitle()
  );

  // Animate elements when component mounts
  onMount(() => {
    // Animate the large background status code with a gentle spring scale and blur effect
    if (statusBgRef) {
      animate(
        statusBgRef,
        {
          scale: [0.8, 1],
          opacity: [0, 0.1],
          filter: ['blur(12px)', 'blur(0px)']
        },
        {
          duration: 1.2,
          delay: 0.1,
          type: 'spring',
          stiffness: 150,
          damping: 25
        }
      );
    }

    // Animate the main title with a subtle spring fly-in from above and blur
    if (titleRef) {
      animate(
        titleRef,
        { y: [-20, 0], opacity: [0, 1], filter: ['blur(10px)', 'blur(0px)'] },
        {
          duration: 1.0,
          delay: 0.3,
          type: 'spring',
          stiffness: 200,
          damping: 30
        }
      );
    }

    // Animate the description with a spring fly-in from below and blur
    if (descriptionRef) {
      animate(
        descriptionRef,
        { y: [20, 0], opacity: [0, 1], filter: ['blur(8px)', 'blur(0px)'] },
        {
          duration: 1.0,
          delay: 0.5,
          type: 'spring',
          stiffness: 200,
          damping: 30
        }
      );
    }

    // Collect button refs and animate with staggered springs and blur
    const buttonRefs = [
      primaryButtonRef,
      secondaryButtonRef,
      tertiaryButtonRef
    ].filter(Boolean);

    if (buttonRefs.length > 0) {
      // Add base delay to start animations after other elements
      setTimeout(() => {
        animate(
          buttonRefs,
          { y: [30, 0], opacity: [0, 1], filter: ['blur(6px)', 'blur(0px)'] },
          {
            duration: 1.2,
            delay: stagger(0.15),
            type: 'spring',
            stiffness: 180,
            damping: 28
          }
        );
      }, 700);
    }
  });
</script>

<SEO
  title={seoTitle}
  description={seoDescription}
  robots="noindex, nofollow"
  structuredData={{ type: 'WebPage' }}
/>

<div
  class={css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'system-ui, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative'
  })}
>
  <!-- Large background status code -->
  <div
    class={css({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    })}
  >
    <span
      bind:this={statusBgRef}
      class={css({
        fontSize: { base: '8rem', md: '16rem' },
        fontWeight: '200',
        lineHeight: '1',
        color: page.status === 404 ? 'blue.300' : 'red.300',
        fontFamily: 'system-ui',
        opacity: '0',
        filter: 'blur(12px)',
        position: 'absolute',
        zIndex: '-1',
        letterSpacing: '-0.05em'
      })}
    >
      {page.status}
    </span>

    <!-- Main content -->
    <h1
      bind:this={titleRef}
      class={css({
        fontSize: { base: '2.5rem', md: '4rem' },
        fontWeight: '200',
        lineHeight: '1.1',
        margin: '0',
        color: 'gray.900',
        letterSpacing: '-0.02em',
        marginBottom: '1rem',
        opacity: '0',
        filter: 'blur(10px)'
      })}
    >
      {page.status === 404 ? m.notFoundTitle() : m.errorTitle()}
    </h1>

    <p
      bind:this={descriptionRef}
      class={css({
        fontSize: { base: '1.25rem', md: '1.5rem' },
        fontWeight: '300',
        color: 'gray.600',
        maxWidth: '600px',
        marginBottom: '3rem',
        opacity: '0',
        filter: 'blur(8px)'
      })}
    >
      {page.status === 404 ? m.notFoundSubtitle() : m.errorSubtitle()}
    </p>
  </div>

  <!-- Action buttons -->
  <div
    class={css({
      display: 'flex',
      flexDirection: { base: 'column', md: 'row' },
      gap: '1rem',
      width: { base: '100%', md: 'auto' },
      maxWidth: '400px'
    })}
  >
    <div
      bind:this={primaryButtonRef}
      class={css({ flex: '1', opacity: '0', filter: 'blur(6px)' })}
    >
      <Button
        as="a"
        variant="primary"
        size="md"
        href={rewriteUrl(page, '/')}
        class={css({ width: '100%' })}
      >
        {m.returnToHomepage()}
      </Button>
    </div>

    <div
      bind:this={secondaryButtonRef}
      class={css({ flex: '1', opacity: '0', filter: 'blur(6px)' })}
    >
      <Button
        variant="secondary"
        size="md"
        onclick={() => history.back()}
        class={css({ width: '100%' })}
      >
        {m.goBack()}
      </Button>
    </div>

    {#if page.status >= 500}
      <div
        bind:this={tertiaryButtonRef}
        class={css({ flex: '1', opacity: '0', filter: 'blur(6px)' })}
      >
        <Button
          variant="text"
          size="md"
          onclick={() => location.reload()}
          class={css({ width: '100%' })}
        >
          {m.tryAgain()}
        </Button>
      </div>
    {/if}
  </div>
</div>
