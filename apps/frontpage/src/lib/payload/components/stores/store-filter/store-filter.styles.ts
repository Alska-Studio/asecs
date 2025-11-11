import { css } from '@agapi/ui/panda/css';

export const sectionContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'tight',
  width: '100%',
  mb: '6',
});

export const sectionTitle = css({
  textStyle: 'h5',
  color: 'text.heading',
  textTransform: 'uppercase',
  fontWeight: '600',
  lineHeight: '1.1',
});

export const filterGrid = css.raw({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
gap: '4',
});

/**
 * Pill-shaped filter button matching Figma design
 * Acts as accessible checkbox with role="checkbox"
 */
export const filterButton = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2',
  px: '5',
  py: '2',
  borderRadius: 'full',
  border: '1px solid',
  borderColor: 'primary.300',  // #67be7b - light green border
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  fontFamily: 'body',
  color: 'primary.800',  // #203d26 - dark green text

  _hover: {
    backgroundColor: 'primary.100'  // #c6fed5 - very light green tint
  },

  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'forms.action',
    outlineOffset: '2px'
  }
});

/**
 * Checked state for filter button - medium green background with cream text
 */
export const filterButtonChecked = css({
  backgroundColor: 'surface.primary.tonal.background',  // #00994b - medium green
  borderColor: 'surface.primary.tonal.background',
  color: 'surface.primary.tonal.foreground',  // #f9f6e0 - cream/light text

  _hover: {
    backgroundColor: 'surface.primary.contrast.border'  // #006331 - darker green on hover
  }
});

/**
 * Small checkbox indicator (18x18px square)
 */
export const checkboxIndicator = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '18px',
  height: '18px',
  minWidth: '18px',
  minHeight: '18px',
  border: '1px solid',
  borderColor: 'primary.400',  // #00994b - medium green border
  borderRadius: '2.613px',
  backgroundColor: 'white',
  flexShrink: 0,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.18s ease-out'
});

/**
 * Checked state for checkbox indicator - filled with darker green
 */
export const checkboxIndicatorChecked = css({
  backgroundColor: 'primary.500',  // #006331 - darker green fill
  borderColor: 'primary.500'
});

/**
 * Checkmark icon inside indicator
 */
export const checkIcon = css({
  width: '13px',
  height: '13px',
  color: 'secondary.100',  // #f9f6e0 - cream color
  position: 'relative',
  zIndex: 1
});

/**
 * Label text - inherits color from parent button
 */
export const labelText = css({
  fontSize: 'md',
  fontWeight: '400',
  lineHeight: '1.4',
  whiteSpace: 'nowrap'
});

/**
 * Checked state for label - color inherited from filterButtonChecked
 */
export const labelTextChecked = css({
  // Color inherited from parent filterButtonChecked
});
