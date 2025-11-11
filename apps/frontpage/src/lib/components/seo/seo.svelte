<script lang="ts">
  import { page } from '$app/state';
  import type { SEOConfig } from '$lib/utils/seo';
  import { generateMetaTags, getStructuredData, getStructuredDataScript } from '$lib/utils/seo';
  import { AlternateLinks } from '@agapi/ui/alternate-links';

  interface Props {
    title: string;
    description?: string;
    image?: string;
    canonical?: string;
    robots?: string;
    openGraph?: SEOConfig['openGraph'];
    structuredData?: {
      type: 'WebPage' | 'Article' | 'Product';
      [key: string]: unknown;
    };
    alternates?: Record<string, string>;
  }

  const {
    title,
    description,
    canonical,
    robots = 'index, follow',
    openGraph,
    structuredData,
    image,
    alternates
  }: Props = $props();

  const metaTags = $derived(generateMetaTags({
    title,
    description,
    canonical,
    robots,
    openGraph
  }, page));

  const jsonLD = $derived(structuredData ? getStructuredData({
    type: structuredData.type,
    title,
    description,
    url: metaTags.canonical
  }) : null);

  const jsonldScript = $derived(getStructuredDataScript(jsonLD));
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  <title>{metaTags.title}</title>
  <meta name="description" content={metaTags.description} />
  <meta name="robots" content={metaTags.robots} />

  <!-- Canonical URL -->
  <link rel="canonical" href={metaTags.canonical} />

  <!-- Open Graph Tags -->
  {#if metaTags.openGraph}
    <meta property="og:title" content={metaTags.openGraph.title || metaTags.title} />
    <meta property="og:description" content={metaTags.openGraph.description || metaTags.description} />
    <meta property="og:type" content={metaTags.openGraph.type || 'website'} />
    <meta property="og:url" content={metaTags.openGraph.url || metaTags.canonical} />
    {#if metaTags.openGraph.image}
      <meta property="og:image" content={metaTags.openGraph.image} />
    {/if}
  {/if}

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metaTags.openGraph?.title || metaTags.title} />
  <meta name="twitter:description" content={metaTags.openGraph?.description || metaTags.description} />
  {#if metaTags.openGraph?.image}
    <meta name="twitter:image" content={metaTags.openGraph.image} />
  {/if}

  <!-- Structured Data -->
  {#if jsonLD}
    {@html jsonldScript}
  {/if}
</svelte:head>
