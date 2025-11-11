import { css } from '@agapi/ui/panda/css';

export const container = css({
  display: 'flex',
  gap: '2',
  flexWrap: 'wrap',
  alignItems: 'center'
});

export const indicator = css({
  width: '4',   // 12px
  height: '4',  // 12px
  mr: '2',
  borderRadius: '999px',
  flexShrink: 0
});

