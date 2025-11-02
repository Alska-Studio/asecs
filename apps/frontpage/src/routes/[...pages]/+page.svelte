<script lang="ts">
  import type { PageProps } from './$types';

  const { data }: PageProps = $props();
</script>

<main>
  <h1>{data.page.title}</h1>
</main>
