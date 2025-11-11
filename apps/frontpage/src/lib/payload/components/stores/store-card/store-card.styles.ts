/**
 * StoreCard styles
 *
 * This file is kept for potential store-specific style overrides.
 * Most presentation styles are now handled by the ImageCard component.
 *
 * Store-specific customizations can be added here and applied via
 * the css prop when using ImageCard.
 */

// Re-export ImageCard styles for backward compatibility if needed
export {
  imageContainer,
  badgeContainer,
  badgeIconDot,
  cardTitle as storeName,
  cardOverrides
} from '$lib/components/image-card/image-card.styles';

