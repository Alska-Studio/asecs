import { getPatternStyles, patternFns } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const iconConfig = {
transform(props) {
  const { size, ...rest } = props;
  return {
    height: `items.${size}`,
    width: `items.${size}`,
    display: "flex",
    placeItems: "center",
    ...rest
  };
}}

export const getIconStyle = (styles = {}) => {
  const _styles = getPatternStyles(iconConfig, styles)
  return iconConfig.transform(_styles, patternFns)
}

export const icon = (styles) => css(getIconStyle(styles))
icon.raw = getIconStyle