import { css } from '@agapi/ui/panda/css';

export const sectionContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'tight',
  flexGrow: 1,
  width: '100%'
});

export const headerContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '24px',
  width: '100%',
  mb: 'tight'
});

export const storeCount = css({
  textStyle: 'h5',
  color: 'text.heading',
  textTransform: 'uppercase',
  fontWeight: '600',
  lineHeight: '1.1'
});

export const viewToggleButton = css({
  display: 'flex',
  alignItems: 'center',
  gap: 'tight',
  color: 'action.primary.background.default',
  fontSize: 'md',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.03em',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  transition: 'color 0.2s ease',

  _hover: {
    color: 'action.primary.background.hover'
  }
});

export const toggleIcon = css({
  width: '32px',
  height: '32px'
});

export const storesGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(264px, 1fr))',
  gap: 'snug',
  width: '100%'
});

export const emptyState = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'normal',
  py: 'xx-loose',
  textAlign: 'center'
});

export const emptyStateTitle = css({
  textStyle: 'h4',
  color: 'text.heading'
});

export const emptyStateMessage = css({
  textStyle: 'body-lg',
  color: 'text.subdued',
  maxWidth: '480px'
});


