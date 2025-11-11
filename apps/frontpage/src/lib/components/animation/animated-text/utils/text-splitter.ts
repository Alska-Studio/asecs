/**
 * Text splitting utilities for word-by-word animations
 */

export interface SplitTextOptions {
  preserveWhitespace?: boolean;
  wrapWords?: boolean;
  wordClass?: string;
}

export interface SplitWord {
  text: string;
  isWhitespace: boolean;
  index: number;
}

export interface SplitLine {
  words: SplitWord[];
  lineIndex: number;
}

/**
 * Split text into words while preserving whitespace
 */
export function splitTextIntoWords(
  text: string,
  options: SplitTextOptions = {}
): SplitWord[] {
  const { preserveWhitespace = true } = options;

  if (!text) return [];

  // Split on whitespace but preserve it
  const parts = text.split(/(\s+)/);

  return parts.map((part, index) => ({
    text: part,
    isWhitespace: /^\s+$/.test(part),
    index
  })).filter(word => {
    // Always keep non-whitespace words
    if (!word.isWhitespace) return true;
    // Keep whitespace only if preserveWhitespace is true
    return preserveWhitespace;
  });
}

/**
 * Create HTML structure for animated words
 */
export function createWordElements(
  words: SplitWord[],
  options: SplitTextOptions = {}
): string {
  const { wordClass = 'animated-word' } = options;

  return words.map((word, index) => {
    if (word.isWhitespace) {
      // Preserve whitespace as-is
      return word.text;
    }

    // Wrap words in spans for animation
    return `<span class="${wordClass}" data-word-index="${index}">${word.text}</span>`;
  }).join('');
}

/**
 * Get word elements from a container
 */
export function getWordElements(container: Element): HTMLElement[] {
  return Array.from(container.querySelectorAll('.animated-word')) as HTMLElement[];
}

/**
 * Calculate staggered delays for word animation
 */
export function calculateStaggerDelays(
  wordCount: number,
  stagger: number,
  baseDelay: number = 0
): number[] {
  return Array.from({ length: wordCount }, (_, index) =>
    baseDelay + (index * stagger)
  );
}

/**
 * Split text into lines and then into words
 */
export function splitTextIntoLines(text: string): SplitLine[] {
  if (!text) return [];

  // Split text by line breaks
  const lines = text.split('\n');

  return lines.map((lineText, lineIndex) => ({
    words: splitTextIntoWords(lineText.trim()),
    lineIndex
  })).filter(line => line.words.length > 0);
}

/**
 * Get animation direction transform values
 */
export function getDirectionTransform(direction: 'up' | 'down' | 'left' | 'right') {
  const transforms = {
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 }
  };

  return transforms[direction] || transforms.up;
}
