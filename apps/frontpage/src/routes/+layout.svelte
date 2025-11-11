<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { LayoutData } from './$types';
</script>

<script lang="ts">
  import '../app.css';

  import { page } from '$app/state';
  import { css } from '@agapi/ui/panda/css';
  import { stack } from '@agapi/ui/panda/patterns';

  import { rewriteUrl } from '$lib/utils/url';
  import { getLocale, setLocale, locales, baseLocale } from '$lib/parachute/runtime';
  import * as m from '$lib/parachute/messages';
    import LanguageSwitcher from '../lib/components/animation/language-switcher/language-switcher.svelte';

  const { children, data }: { children: Snippet; data: LayoutData } = $props();

  // Set locale from server-detected locale (like Glimja does)
  if (data.locale) {
    setLocale(data.locale);
  }

  // Mobile menu state
  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<div class={css({ minHeight: '100vh', backgroundColor: 'surface.default.background' })}>
  <!-- Navigation -->
  <nav class={css({ color: 'white', px: 'app', py: '2', boxShadow: 'lg', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 })}>
    <div class={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto' })}>
      <h1 class={css({ color: 'white', margin: 0, fontSize: '1.5rem', fontWeight: 'bold' })}>My App</h1>

      <!-- Desktop Navigation -->
      <div class={css({ display: { base: 'none', md: 'flex' }, alignItems: 'center', gap: '1rem' })}>
        <div class={stack({ direction: 'row', gap: '2' })}>
          <a href={rewriteUrl(page, '/')} class={css({ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { color: 'white', backgroundColor: '#374151' } })}>
            {m.home()}
          </a>
          <a href={rewriteUrl(page, '/stores')} class={css({ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { color: 'white', backgroundColor: '#374151' } })}>
            Stores
          </a>
          <a href={rewriteUrl(page, '/restaurants')} class={css({ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { color: 'white', backgroundColor: '#374151' } })}>
            Restaurants
          </a>
        </div>

        <LanguageSwitcher />
      </div>

      <!-- Mobile Menu Button -->
      <button
        class={css({
          display: { base: 'block', md: 'none' },
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '0.5rem'
        })}
        onclick={toggleMobileMenu}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          {#if mobileMenuOpen}
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          {:else}
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class={css({
        display: { base: 'block', md: 'none' },
        backgroundColor: '#374151',
        padding: '1rem',
        borderTop: '1px solid #4b5563'
      })}>
        <div class={stack({ direction: 'column', gap: '2' })}>
          <a href={rewriteUrl(page, '/')} class={css({ color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { backgroundColor: '#4b5563' } })}>
            {m.home()}
          </a>
          <a href={rewriteUrl(page, '/stores')} class={css({ color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { backgroundColor: '#4b5563' } })}>
            Stores
          </a>
          <a href={rewriteUrl(page, '/restaurants')} class={css({ color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { backgroundColor: '#4b5563' } })}>
            Restaurants
          </a>
          <a href={rewriteUrl(page, '/blog')} class={css({ color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { backgroundColor: '#4b5563' } })}>
            Blog
          </a>
          <a href={rewriteUrl(page, '/events')} class={css({ color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { backgroundColor: '#4b5563' } })}>
            Events
          </a>
          <a href={rewriteUrl(page, '/shopping')} class={css({ color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: 'md', transition: 'colors', _hover: { backgroundColor: '#4b5563' } })}>
            Shopping Assistant
          </a>

          <LanguageSwitcher />
        </div>
      </div>
    {/if}
  </nav>

  <!-- Main content -->
  <main>
    {@render children()}
  </main>

  <!-- Footer -->
  <footer class={css({ marginTop: '4rem', padding: '2rem 0', backgroundColor: 'gray.800', color: 'white', textAlign: 'center' })}>
    <div class={css({ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' })}>
      <p class={css({ margin: 0, color: 'gray.300' })}>{m.footerText()}</p>
    </div>
  </footer>
</div>
