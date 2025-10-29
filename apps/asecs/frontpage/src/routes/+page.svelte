<script lang="ts">
  import type { PageProps } from './$types';
  import RichText from '../components/rich-text/rich-text.svelte';

  const { data }: PageProps = $props();
</script>

<main>
  <h1>{data.page.title}</h1>
</main>

<pre>
  <RichText content={data.page.content} />
</pre>