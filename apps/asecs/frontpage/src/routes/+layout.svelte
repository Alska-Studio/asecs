<script lang="ts" module>
  import type { LayoutProps } from './$types';
</script>

<script lang="ts">
  import '../app.css';

  import { page } from '$app/state';
  import { rewriteUrl } from '../utilities/locale.shared';

  import {
    Navbar,
    NavbarRow,
    NavbarGroup,
    NavbarBrand,
    NavbarMenuBar,
    NavbarItem,
  } from '@agapi/ui/navbar';
  import { LanguagePicker } from '../components/language-picker';

  import * as m from '$lib/parachute/messages';

  const { data, children }: LayoutProps = $props();

  console.log(data);
</script>

<nav>
  <Navbar colorVariant="contrast">
    <NavbarRow>
      <NavbarGroup>
        <NavbarBrand href="/">
          <img src="https://placehold.co/100x100" alt="ASECS" />
        </NavbarBrand>
      </NavbarGroup>

      <NavbarMenuBar label="Main Navigation">
        {#each data.nav.items as { label, href } (href)}
          <NavbarItem label={label} href={rewriteUrl(page, href)} />
        {/each}
      </NavbarMenuBar>

      <NavbarGroup>
        <LanguagePicker />
      </NavbarGroup>
    </NavbarRow>
  </Navbar>
</nav>

<main
  style={`padding-top: calc(var(--navbarBottom)`}
>
  {@render children?.()}
</main>
