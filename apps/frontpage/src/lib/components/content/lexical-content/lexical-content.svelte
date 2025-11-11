<script lang="ts">
  import { css, cx } from '@agapi/ui/panda/css';
  import { contentStyles } from './lexical-content.styles';
  import { AnimatedText } from '$lib/components/animation';
  import type { LexicalContentProps, LexicalNode } from './lexical-content.types';

  const {
    content,
    css: cssProp,
    animate = false,
    animationStagger = 0.15,
    animationDuration = 0.7,
    animationDelay = 0,
    ...restProps
  }: LexicalContentProps = $props();

  /**
   * Serialize a Lexical node to HTML
   * Based on Payload CMS recommended serialization approach
   */
  function serializeNode(node: LexicalNode | undefined): string {
    if (!node) return '';

    switch (node.type) {
      case 'root':
        return node.children?.map(serializeNode).join('') || '';

      case 'heading': {
        const tag = node.tag || 'h2';
        const children = node.children?.map(serializeNode).join('') || '';
        return `<${tag}>${children}</${tag}>`;
      }

      case 'paragraph': {
        const children = node.children?.map(serializeNode).join('') || '';
        return `<p>${children}</p>`;
      }

      case 'text': {
        let text = node.text || '';

        // Handle text formatting (Lexical format flags)
        // 1 = bold, 2 = italic, 3 = bold+italic, etc.
        const format = typeof node.format === 'number' ? node.format : parseInt(String(node.format || '0'));

        if (format & 1) { // Bold
          text = `<strong>${text}</strong>`;
        }
        if (format & 2) { // Italic
          text = `<em>${text}</em>`;
        }
        if (format & 8) { // Code
          text = `<code>${text}</code>`;
        }
        if (format & 16) { // Strikethrough
          text = `<s>${text}</s>`;
        }
        if (format & 32) { // Underline
          text = `<u>${text}</u>`;
        }

        return text;
      }

      case 'list': {
        const tag = node.listType === 'number' ? 'ol' : 'ul';
        const children = node.children?.map(serializeNode).join('') || '';
        return `<${tag}>${children}</${tag}>`;
      }

      case 'listitem': {
        const children = node.children?.map(serializeNode).join('') || '';
        return `<li>${children}</li>`;
      }

      case 'link': {
        const children = node.children?.map(serializeNode).join('') || '';
        const target = node.newTab ? ' target="_blank"' : '';
        const rel = node.rel || (node.newTab ? 'noopener noreferrer' : '');
        const relAttr = rel ? ` rel="${rel}"` : '';
        return `<a href="${node.url}"${target}${relAttr}>${children}</a>`;
      }

      case 'quote': {
        const children = node.children?.map(serializeNode).join('') || '';
        return `<blockquote>${children}</blockquote>`;
      }

      default: {
        // For unknown types, try to render children if they exist
        const unknownNode = node as any;
        if (unknownNode.children && Array.isArray(unknownNode.children)) {
          return unknownNode.children.map(serializeNode).join('');
        }
        return '';
      }
    }
  }

  /**
   * Serialize the content to HTML
   */
  const htmlContent = $derived(() => {
    if (!content) return '';

    // Handle both formats: { root: {...} } and direct root node
    if ('root' in content && content.root) {
      return serializeNode(content.root);
    }

    return serializeNode(content as LexicalNode);
  });
</script>

{#if content}
  {#if animate}
    <AnimatedText
      type="reveal"
      variant="lineByLine"
      as="div"
      direction="up"
      stagger={animationStagger}
      duration={animationDuration}
      delay={animationDelay}
      css={cssProp ? { ...contentStyles, ...cssProp } : contentStyles}
    >
      {@html htmlContent()}
    </AnimatedText>
  {:else}
    <div class={cx(css(contentStyles), css(cssProp))} {...restProps}>
      {@html htmlContent()}
    </div>
  {/if}
{/if}

