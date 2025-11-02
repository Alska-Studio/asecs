<script lang="ts">
  import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
  const { content } = $props();

  const contentHTML = convertLexicalToHTML({ data: content });
</script>

<div>
  {@html contentHTML}
</div>
