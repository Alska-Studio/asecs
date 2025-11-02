import { mobileFontSizeScale } from "@agapi/ui/panda/utils"
import { desktopFontSizeScale } from "@agapi/ui/panda/utils"
import { defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
  colors: {
    "primary": {
      "50": {
        "value": "#eaf6f1ff",
      },
      "100": {
        "value": "#c0e5d6ff",
      },
      "200": {
        "value": "#97d3bbff",
      },
      "300": {
        "value": "#70c0a2ff",
      },
      "400": {
        "value": "#4aac8bff",
      },
      "500": {
        "value": "#239775ff",
      },
      "600": {
        "value": "#008261ff",
      },
      "700": {
        "value": "#006d4eff",
      },
      "800": {
        "value": "#00583eff",
      },
      "900": {
        "value": "#00432fff",
      },
      "950": {
        "value": "#002f21ff",
      },
      "source": {
        "value": "#004128ff",
      }
    },
    "secondary": {
      "50": {
        "value": "#ebf5faff",
      },
      "100": {
        "value": "#c3e2efff",
      },
      "200": {
        "value": "#9acee4ff",
      },
      "300": {
        "value": "#72bad6ff",
      },
      "400": {
        "value": "#48a6c6ff",
      },
      "500": {
        "value": "#1192b4ff",
      },
      "600": {
        "value": "#007d9fff",
      },
      "700": {
        "value": "#006988ff",
      },
      "800": {
        "value": "#00546fff",
      },
      "900": {
        "value": "#004055ff",
      },
      "950": {
        "value": "#002c3aff",
      },
      "source": {
        "value": "#7fcfe1ff",
      }
    },
    "tertiary": {
      "50": {
        "value": "#fbf2eaff",
      },
      "100": {
        "value": "#f1d9c1ff",
      },
      "200": {
        "value": "#e4c09bff",
      },
      "300": {
        "value": "#d4a978ff",
      },
      "400": {
        "value": "#c1925aff",
      },
      "500": {
        "value": "#ad7d41ff",
      },
      "600": {
        "value": "#96692cff",
      },
      "700": {
        "value": "#7f561dff",
      },
      "800": {
        "value": "#674413ff",
      },
      "900": {
        "value": "#4f340eff",
      },
      "950": {
        "value": "#37240aff",
      },
      "source": {
        "value": "#ffe8b8ff",
      }
    },
    "quarternary": {
      "50": {
        "value": "#f9f0ffff",
      },
      "100": {
        "value": "#ecd2ffff",
      },
      "200": {
        "value": "#dbb6ffff",
      },
      "300": {
        "value": "#c99affff",
      },
      "400": {
        "value": "#b47effff",
      },
      "500": {
        "value": "#9d68f7ff",
      },
      "600": {
        "value": "#8653e1ff",
      },
      "700": {
        "value": "#6f41c5ff",
      },
      "800": {
        "value": "#5932a3ff",
      },
      "900": {
        "value": "#44267dff",
      },
      "950": {
        "value": "#301c55ff",
      },
      "source": {
        "value": "#a964ceff",
      }
    },
    neutral: {
      "50": {
        value: "#f4f3f3ff",
      },
      "100": {
        value: "#dddddcff",
      },
      "200": {
        value: "#c7c6c5ff",
      },
      "300": {
        value: "#b1b0afff",
      },
      "400": {
        value: "#9c9b99ff",
      },
      "500": {
        value: "#878684ff",
      },
      "600": {
        value: "#737270ff",
      },
      "700": {
        value: "#5f5e5dff",
      },
      "800": {
        value: "#4c4b4aff",
      },
      "900": {
        value: "#3a3938ff",
      },
      "950": {
        value: "#282827ff",
      },
      source: {
        value: "#f1f0eeff",
      },
    },
    mono: {
      black: {
        value: "#000000ff",
      },
      white: {
        value: "#ffffffff",
      },
      "off-white": {
        value: "#fdfdfcff",
      }
    },
    error: {
      "50": {
        value: "#ffede4ff",
      },
      "100": {
        value: "#ffceb6ff",
      },
      "200": {
        value: "#ffac89ff",
      },
      "300": {
        value: "#ff7246ff",
      },
      "400": {
        value: "#ff3e13ff",
      },
      "500": {
        value: "#e50b00ff",
      },
      "600": {
        value: "#b90000ff",
      },
      "700": {
        value: "#870000ff",
      },
      "800": {
        value: "#580300ff",
      },
      "900": {
        value: "#270900ff",
      },
      source: {
        value: "#ff3306ff",
      },
    },
    alert: {
      "50": {
        value: "#fbf3e2ff",
      },
      "100": {
        value: "#f1deb3ff",
      },
      "200": {
        value: "#e2c982ff",
      },
      "300": {
        value: "#c4a636ff",
      },
      "400": {
        value: "#a48800ff",
      },
      "500": {
        value: "#897000ff",
      },
      "600": {
        value: "#695500ff",
      },
      "700": {
        value: "#4c3c00ff",
      },
      "800": {
        value: "#342700ff",
      },
      "900": {
        value: "#1a1200ff",
      },
      source: {
        value: "#ffd94cff",
      },
    },
    info: {
      "50": {
        value: "#e6f7f5ff",
      },
      "100": {
        value: "#bae9e3ff",
      },
      "200": {
        value: "#8ad9d1ff",
      },
      "300": {
        value: "#21bbb1ff",
      },
      "400": {
        value: "#009f94ff",
      },
      "500": {
        value: "#00867cff",
      },
      "600": {
        value: "#00675fff",
      },
      "700": {
        value: "#004a44ff",
      },
      "800": {
        value: "#00302cff",
      },
      "900": {
        value: "#001614ff",
      },
      source: {
        value: "#01e4d7ff",
      },
    },
    success: {
      "50": {
        value: "#e6f8ebff",
      },
      "100": {
        value: "#baebcaff",
      },
      "200": {
        value: "#8bdca8ff",
      },
      "300": {
        value: "#2dbf74ff",
      },
      "400": {
        value: "#00a24eff",
      },
      "500": {
        value: "#008936ff",
      },
      "600": {
        value: "#006a21ff",
      },
      "700": {
        value: "#004c15ff",
      },
      "800": {
        value: "#00310fff",
      },
      "900": {
        value: "#001706ff",
      },
      source: {
        value: "#00de81ff",
      },
    },
  },
  fontSizes: {
    mobile2xs: {
      value: mobileFontSizeScale(-3),
    },
    mobileXs: {
      value: mobileFontSizeScale(-2),
    },
    mobileSm: {
      value: mobileFontSizeScale(-1),
    },
    mobileMd: {
      value: mobileFontSizeScale(0),
    },
    mobileLg: {
      value: mobileFontSizeScale(1),
    },
    mobileXl: {
      value: mobileFontSizeScale(2),
    },
    mobile2xl: {
      value: mobileFontSizeScale(3),
    },
    mobile3xl: {
      value: mobileFontSizeScale(4),
    },
    mobile4xl: {
      value: mobileFontSizeScale(5),
    },
    mobile5xl: {
      value: mobileFontSizeScale(6),
    },
    mobile6xl: {
      value: mobileFontSizeScale(6),
    },
    desktop2xs: {
      value: desktopFontSizeScale(-3),
    },
    desktopXs: {
      value: desktopFontSizeScale(-2),
    },
    desktopSm: {
      value: desktopFontSizeScale(-1),
    },
    desktopMd: {
      value: desktopFontSizeScale(0),
    },
    desktopLg: {
      value: desktopFontSizeScale(1),
    },
    desktopXl: {
      value: desktopFontSizeScale(2),
    },
    desktop2xl: {
      value: desktopFontSizeScale(3),
    },
    desktop3xl: {
      value: desktopFontSizeScale(4),
    },
    desktop4xl: {
      value: desktopFontSizeScale(5),
    },
    desktop5xl: {
      value: desktopFontSizeScale(6),
    },
    desktop6xl: {
      value: desktopFontSizeScale(6),
    },
  },
});