/**
 * Shared types for block components
 * Re-exports common types used across multiple blocks
 */

// Re-export Lexical types from lexical-content
export type {
  LexicalContent,
  LexicalNode,
  LexicalRootNode,
  LexicalTextNode,
  LexicalParagraphNode,
  LexicalHeadingNode,
  LexicalListNode,
  LexicalListItemNode,
  LexicalLinkNode,
  LexicalQuoteNode
} from '$lib/components/content/lexical-content/lexical-content.types';
