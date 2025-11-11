const tokens = {
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--font-weights-black)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--font-weights-extrabold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.regular": {
    "value": "400",
    "variable": "var(--font-weights-regular)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--font-weights-extralight)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--font-weights-thin)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    "value": "1.05",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.snug": {
    "value": "1.10",
    "variable": "var(--line-heights-snug)"
  },
  "lineHeights.normal": {
    "value": "1.25",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    "value": "1.40",
    "variable": "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    "value": "1.50",
    "variable": "var(--line-heights-loose)"
  },
  "shadows.1": {
    "value": "1px 1px 4px -1px rgba(0,0,0,0.18)",
    "variable": "var(--shadows-1)"
  },
  "shadows.2": {
    "value": "2px 2px 8px -2px rgba(0,0,0,0.18)",
    "variable": "var(--shadows-2)"
  },
  "shadows.3": {
    "value": "4px 4px 12px -3px rgba(0,0,0,0.18)",
    "variable": "var(--shadows-3)"
  },
  "shadows.4": {
    "value": "6px 6px 16px -4px rgba(0,0,0,0.18)",
    "variable": "var(--shadows-4)"
  },
  "shadows.5": {
    "value": "8px 8px 20px -5px rgba(0,0,0,0.18)",
    "variable": "var(--shadows-5)"
  },
  "assets.shape1": {
    "value": "url(\"/static/shape1.svg\")",
    "variable": "var(--assets-shape1)"
  },
  "assets.shape2": {
    "value": "url(\"/static/shape2.svg\")",
    "variable": "var(--assets-shape2)"
  },
  "assets.shape3": {
    "value": "url(\"/static/shape3.svg\")",
    "variable": "var(--assets-shape3)"
  },
  "assets.shape4": {
    "value": "url(\"/static/shape4.svg\")",
    "variable": "var(--assets-shape4)"
  },
  "colors.grey.50": {
    "value": "#f5f4f3ff",
    "variable": "var(--colors-grey-50)"
  },
  "colors.grey.100": {
    "value": "#e2dedcff",
    "variable": "var(--colors-grey-100)"
  },
  "colors.grey.200": {
    "value": "#cac3bfff",
    "variable": "var(--colors-grey-200)"
  },
  "colors.grey.300": {
    "value": "#afa6a1ff",
    "variable": "var(--colors-grey-300)"
  },
  "colors.grey.400": {
    "value": "#938983ff",
    "variable": "var(--colors-grey-400)"
  },
  "colors.grey.500": {
    "value": "#6f6560ff",
    "variable": "var(--colors-grey-500)"
  },
  "colors.grey.600": {
    "value": "#584f4bff",
    "variable": "var(--colors-grey-600)"
  },
  "colors.grey.700": {
    "value": "#3f3935ff",
    "variable": "var(--colors-grey-700)"
  },
  "colors.grey.800": {
    "value": "#2b2724ff",
    "variable": "var(--colors-grey-800)"
  },
  "colors.grey.900": {
    "value": "#1c1a19ff",
    "variable": "var(--colors-grey-900)"
  },
  "colors.grey.source": {
    "value": "#b2a7a1ff",
    "variable": "var(--colors-grey-source)"
  },
  "colors.white.100": {
    "value": "#ffffff",
    "variable": "var(--colors-white-100)"
  },
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "colors.primary.50": {
    "value": "#e6f7f1ff",
    "variable": "var(--colors-primary-50)"
  },
  "colors.primary.100": {
    "value": "#c6fed5ff",
    "variable": "var(--colors-primary-100)"
  },
  "colors.primary.200": {
    "value": "#aaeebbff",
    "variable": "var(--colors-primary-200)"
  },
  "colors.primary.300": {
    "value": "#67be7bff",
    "variable": "var(--colors-primary-300)"
  },
  "colors.primary.400": {
    "value": "#00994bff",
    "variable": "var(--colors-primary-400)"
  },
  "colors.primary.500": {
    "value": "#006331ff",
    "variable": "var(--colors-primary-500)"
  },
  "colors.primary.600": {
    "value": "#005e3eff",
    "variable": "var(--colors-primary-600)"
  },
  "colors.primary.700": {
    "value": "#00442cff",
    "variable": "var(--colors-primary-700)"
  },
  "colors.primary.800": {
    "value": "#203d26ff",
    "variable": "var(--colors-primary-800)"
  },
  "colors.primary.900": {
    "value": "#162b1bff",
    "variable": "var(--colors-primary-900)"
  },
  "colors.primary.950": {
    "value": "#151d17ff",
    "variable": "var(--colors-primary-950)"
  },
  "colors.primary.source": {
    "value": "#5cc89cff",
    "variable": "var(--colors-primary-source)"
  },
  "colors.secondary.50": {
    "value": "#e8f6f5ff",
    "variable": "var(--colors-secondary-50)"
  },
  "colors.secondary.100": {
    "value": "#f9f6e0ff",
    "variable": "var(--colors-secondary-100)"
  },
  "colors.secondary.200": {
    "value": "#e1dcbaff",
    "variable": "var(--colors-secondary-200)"
  },
  "colors.secondary.300": {
    "value": "#bbb799ff",
    "variable": "var(--colors-secondary-300)"
  },
  "colors.secondary.400": {
    "value": "#89856eff",
    "variable": "var(--colors-secondary-400)"
  },
  "colors.secondary.500": {
    "value": "#646250ff",
    "variable": "var(--colors-secondary-500)"
  },
  "colors.secondary.600": {
    "value": "#545147ff",
    "variable": "var(--colors-secondary-600)"
  },
  "colors.secondary.700": {
    "value": "#403e38ff",
    "variable": "var(--colors-secondary-700)"
  },
  "colors.secondary.800": {
    "value": "#2d2b26ff",
    "variable": "var(--colors-secondary-800)"
  },
  "colors.secondary.900": {
    "value": "#353329ff",
    "variable": "var(--colors-secondary-900)"
  },
  "colors.secondary.source": {
    "value": "#5cc8c3ff",
    "variable": "var(--colors-secondary-source)"
  },
  "colors.tertiary.50": {
    "value": "#fbf3e2ff",
    "variable": "var(--colors-tertiary-50)"
  },
  "colors.tertiary.100": {
    "value": "#f1deb3ff",
    "variable": "var(--colors-tertiary-100)"
  },
  "colors.tertiary.200": {
    "value": "#e2c982ff",
    "variable": "var(--colors-tertiary-200)"
  },
  "colors.tertiary.300": {
    "value": "#c4a636ff",
    "variable": "var(--colors-tertiary-300)"
  },
  "colors.tertiary.400": {
    "value": "#a48800ff",
    "variable": "var(--colors-tertiary-400)"
  },
  "colors.tertiary.500": {
    "value": "#897000ff",
    "variable": "var(--colors-tertiary-500)"
  },
  "colors.tertiary.600": {
    "value": "#695500ff",
    "variable": "var(--colors-tertiary-600)"
  },
  "colors.tertiary.700": {
    "value": "#4c3c00ff",
    "variable": "var(--colors-tertiary-700)"
  },
  "colors.tertiary.800": {
    "value": "#342700ff",
    "variable": "var(--colors-tertiary-800)"
  },
  "colors.tertiary.900": {
    "value": "#1a1200ff",
    "variable": "var(--colors-tertiary-900)"
  },
  "colors.tertiary.source": {
    "value": "#f2b23eff",
    "variable": "var(--colors-tertiary-source)"
  },
  "colors.neutral.50": {
    "value": "#edeae1ff",
    "variable": "var(--colors-neutral-50)"
  },
  "colors.neutral.100": {
    "value": "#e5e2d9ff",
    "variable": "var(--colors-neutral-100)"
  },
  "colors.neutral.300": {
    "value": "#c3bdaeff",
    "variable": "var(--colors-neutral-300)"
  },
  "colors.neutral.400": {
    "value": "#8e8a7cff",
    "variable": "var(--colors-neutral-400)"
  },
  "colors.neutral.500": {
    "value": "#68655cff",
    "variable": "var(--colors-neutral-500)"
  },
  "colors.neutral.600": {
    "value": "#545147ff",
    "variable": "var(--colors-neutral-600)"
  },
  "colors.neutral.700": {
    "value": "#403e38ff",
    "variable": "var(--colors-neutral-700)"
  },
  "colors.neutral.800": {
    "value": "#2d2b26ff",
    "variable": "var(--colors-neutral-800)"
  },
  "colors.neutral.900": {
    "value": "#353329ff",
    "variable": "var(--colors-neutral-900)"
  },
  "colors.neutral.950": {
    "value": "#1b1a17ff",
    "variable": "var(--colors-neutral-950)"
  },
  "colors.error.50": {
    "value": "#ffede4ff",
    "variable": "var(--colors-error-50)"
  },
  "colors.error.100": {
    "value": "#ffceb6ff",
    "variable": "var(--colors-error-100)"
  },
  "colors.error.200": {
    "value": "#ffac89ff",
    "variable": "var(--colors-error-200)"
  },
  "colors.error.300": {
    "value": "#ff7246ff",
    "variable": "var(--colors-error-300)"
  },
  "colors.error.400": {
    "value": "#ff3e13ff",
    "variable": "var(--colors-error-400)"
  },
  "colors.error.500": {
    "value": "#e50b00ff",
    "variable": "var(--colors-error-500)"
  },
  "colors.error.600": {
    "value": "#b90000ff",
    "variable": "var(--colors-error-600)"
  },
  "colors.error.700": {
    "value": "#870000ff",
    "variable": "var(--colors-error-700)"
  },
  "colors.error.800": {
    "value": "#580300ff",
    "variable": "var(--colors-error-800)"
  },
  "colors.error.900": {
    "value": "#270900ff",
    "variable": "var(--colors-error-900)"
  },
  "colors.error.source": {
    "value": "#ff0606ff",
    "variable": "var(--colors-error-source)"
  },
  "colors.alert.50": {
    "value": "#fbf3e2ff",
    "variable": "var(--colors-alert-50)"
  },
  "colors.alert.100": {
    "value": "#f1deb3ff",
    "variable": "var(--colors-alert-100)"
  },
  "colors.alert.200": {
    "value": "#e2c982ff",
    "variable": "var(--colors-alert-200)"
  },
  "colors.alert.300": {
    "value": "#c4a636ff",
    "variable": "var(--colors-alert-300)"
  },
  "colors.alert.400": {
    "value": "#a48800ff",
    "variable": "var(--colors-alert-400)"
  },
  "colors.alert.500": {
    "value": "#897000ff",
    "variable": "var(--colors-alert-500)"
  },
  "colors.alert.600": {
    "value": "#695500ff",
    "variable": "var(--colors-alert-600)"
  },
  "colors.alert.700": {
    "value": "#4c3c00ff",
    "variable": "var(--colors-alert-700)"
  },
  "colors.alert.800": {
    "value": "#342700ff",
    "variable": "var(--colors-alert-800)"
  },
  "colors.alert.900": {
    "value": "#1a1200ff",
    "variable": "var(--colors-alert-900)"
  },
  "colors.alert.source": {
    "value": "#ffd338ff",
    "variable": "var(--colors-alert-source)"
  },
  "colors.info.50": {
    "value": "#e6f7f5ff",
    "variable": "var(--colors-info-50)"
  },
  "colors.info.100": {
    "value": "#bae9e3ff",
    "variable": "var(--colors-info-100)"
  },
  "colors.info.200": {
    "value": "#8ad9d1ff",
    "variable": "var(--colors-info-200)"
  },
  "colors.info.300": {
    "value": "#21bbb1ff",
    "variable": "var(--colors-info-300)"
  },
  "colors.info.400": {
    "value": "#009f94ff",
    "variable": "var(--colors-info-400)"
  },
  "colors.info.500": {
    "value": "#00867cff",
    "variable": "var(--colors-info-500)"
  },
  "colors.info.600": {
    "value": "#00675fff",
    "variable": "var(--colors-info-600)"
  },
  "colors.info.700": {
    "value": "#004a44ff",
    "variable": "var(--colors-info-700)"
  },
  "colors.info.800": {
    "value": "#00302cff",
    "variable": "var(--colors-info-800)"
  },
  "colors.info.900": {
    "value": "#001614ff",
    "variable": "var(--colors-info-900)"
  },
  "colors.info.source": {
    "value": "#06dfd2ff",
    "variable": "var(--colors-info-source)"
  },
  "colors.success.50": {
    "value": "#e6f8ebff",
    "variable": "var(--colors-success-50)"
  },
  "colors.success.100": {
    "value": "#baebcaff",
    "variable": "var(--colors-success-100)"
  },
  "colors.success.200": {
    "value": "#8bdca8ff",
    "variable": "var(--colors-success-200)"
  },
  "colors.success.300": {
    "value": "#2dbf74ff",
    "variable": "var(--colors-success-300)"
  },
  "colors.success.400": {
    "value": "#00a24eff",
    "variable": "var(--colors-success-400)"
  },
  "colors.success.500": {
    "value": "#008936ff",
    "variable": "var(--colors-success-500)"
  },
  "colors.success.600": {
    "value": "#006a21ff",
    "variable": "var(--colors-success-600)"
  },
  "colors.success.700": {
    "value": "#004c15ff",
    "variable": "var(--colors-success-700)"
  },
  "colors.success.800": {
    "value": "#00310fff",
    "variable": "var(--colors-success-800)"
  },
  "colors.success.900": {
    "value": "#001706ff",
    "variable": "var(--colors-success-900)"
  },
  "colors.success.source": {
    "value": "#53da00ff",
    "variable": "var(--colors-success-source)"
  },
  "colors.mono.black": {
    "value": "#000000ff",
    "variable": "var(--colors-mono-black)"
  },
  "colors.mono.white": {
    "value": "#ffffffff",
    "variable": "var(--colors-mono-white)"
  },
  "colors.mono.off-white": {
    "value": "#fdfdfcff",
    "variable": "var(--colors-mono-off-white)"
  },
  "spacing.0": {
    "value": "0px",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "2px",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "4px",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "6px",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "8px",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "12px",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "16px",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "24px",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "32px",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "48px",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "64px",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "96px",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "128px",
    "variable": "var(--spacing-12)"
  },
  "spacing.13": {
    "value": "192px",
    "variable": "var(--spacing-13)"
  },
  "radii.0": {
    "value": "0px",
    "variable": "var(--radii-0)"
  },
  "radii.1": {
    "value": "2px",
    "variable": "var(--radii-1)"
  },
  "radii.2": {
    "value": "4px",
    "variable": "var(--radii-2)"
  },
  "radii.3": {
    "value": "8px",
    "variable": "var(--radii-3)"
  },
  "radii.4": {
    "value": "12px",
    "variable": "var(--radii-4)"
  },
  "radii.5": {
    "value": "16px",
    "variable": "var(--radii-5)"
  },
  "radii.6": {
    "value": "24px",
    "variable": "var(--radii-6)"
  },
  "radii.7": {
    "value": "32px",
    "variable": "var(--radii-7)"
  },
  "radii.8": {
    "value": "48px",
    "variable": "var(--radii-8)"
  },
  "radii.right": {
    "value": "0 32px 32px 0",
    "variable": "var(--radii-right)"
  },
  "radii.full": {
    "value": "999px",
    "variable": "var(--radii-full)"
  },
  "sizes.containers.sm": {
    "value": "512px",
    "variable": "var(--sizes-containers-sm)"
  },
  "sizes.containers.xs": {
    "value": "256px",
    "variable": "var(--sizes-containers-xs)"
  },
  "sizes.containers.md": {
    "value": "768px",
    "variable": "var(--sizes-containers-md)"
  },
  "sizes.containers.lg": {
    "value": "1024px",
    "variable": "var(--sizes-containers-lg)"
  },
  "sizes.containers.2xl": {
    "value": "1792px",
    "variable": "var(--sizes-containers-2xl)"
  },
  "sizes.containers.2xs": {
    "value": "160px",
    "variable": "var(--sizes-containers-2xs)"
  },
  "sizes.containers.3xs": {
    "value": "96px",
    "variable": "var(--sizes-containers-3xs)"
  },
  "sizes.containers.xl": {
    "value": "1280px",
    "variable": "var(--sizes-containers-xl)"
  },
  "sizes.items.2xs": {
    "value": "5px",
    "variable": "var(--sizes-items-2xs)"
  },
  "sizes.items.3xl": {
    "value": "110px",
    "variable": "var(--sizes-items-3xl)"
  },
  "sizes.items.xs": {
    "value": "8px",
    "variable": "var(--sizes-items-xs)"
  },
  "sizes.items.sm": {
    "value": "16px",
    "variable": "var(--sizes-items-sm)"
  },
  "sizes.items.md": {
    "value": "24px",
    "variable": "var(--sizes-items-md)"
  },
  "sizes.items.lg": {
    "value": "32px",
    "variable": "var(--sizes-items-lg)"
  },
  "sizes.items.xl": {
    "value": "64px",
    "variable": "var(--sizes-items-xl)"
  },
  "sizes.items.2xl": {
    "value": "96px",
    "variable": "var(--sizes-items-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "fonts.body": {
    "value": "var(--font-body), system-ui, sans-serif",
    "variable": "var(--fonts-body)"
  },
  "fonts.display": {
    "value": "var(--font-display), system-ui, sans-serif",
    "variable": "var(--fonts-display)"
  },
  "fonts.displayAlt": {
    "value": "var(--font-display-alt), Georgia, serif",
    "variable": "var(--fonts-display-alt)"
  },
  "fontSizes.mobile2xs": {
    "value": "9.494653026806374px",
    "variable": "var(--font-sizes-mobile2xs)"
  },
  "fontSizes.mobile6xl": {
    "value": "54.06904668455022px",
    "variable": "var(--font-sizes-mobile6xl)"
  },
  "fontSizes.mobile7xl": {
    "value": "64.34216555461477px",
    "variable": "var(--font-sizes-mobile7xl)"
  },
  "fontSizes.desktop2xs": {
    "value": "10.68148465515717px",
    "variable": "var(--font-sizes-desktop2xs)"
  },
  "fontSizes.desktop6xl": {
    "value": "60.827677520119px",
    "variable": "var(--font-sizes-desktop6xl)"
  },
  "fontSizes.desktop7xl": {
    "value": "72.38493624894161px",
    "variable": "var(--font-sizes-desktop7xl)"
  },
  "fontSizes.mobileXs": {
    "value": "11px",
    "variable": "var(--font-sizes-mobile-xs)"
  },
  "fontSizes.mobileSm": {
    "value": "14px",
    "variable": "var(--font-sizes-mobile-sm)"
  },
  "fontSizes.mobileMd": {
    "value": "16px",
    "variable": "var(--font-sizes-mobile-md)"
  },
  "fontSizes.mobileLg": {
    "value": "19px",
    "variable": "var(--font-sizes-mobile-lg)"
  },
  "fontSizes.mobileXl": {
    "value": "23px",
    "variable": "var(--font-sizes-mobile-xl)"
  },
  "fontSizes.mobile2xl": {
    "value": "27px",
    "variable": "var(--font-sizes-mobile2xl)"
  },
  "fontSizes.mobile3xl": {
    "value": "32px",
    "variable": "var(--font-sizes-mobile3xl)"
  },
  "fontSizes.mobile4xl": {
    "value": "38px",
    "variable": "var(--font-sizes-mobile4xl)"
  },
  "fontSizes.mobile5xl": {
    "value": "45px",
    "variable": "var(--font-sizes-mobile5xl)"
  },
  "fontSizes.desktopXs": {
    "value": "12px",
    "variable": "var(--font-sizes-desktop-xs)"
  },
  "fontSizes.desktopSm": {
    "value": "15px",
    "variable": "var(--font-sizes-desktop-sm)"
  },
  "fontSizes.desktopMd": {
    "value": "18px",
    "variable": "var(--font-sizes-desktop-md)"
  },
  "fontSizes.desktopLg": {
    "value": "23px",
    "variable": "var(--font-sizes-desktop-lg)"
  },
  "fontSizes.desktopXl": {
    "value": "30px",
    "variable": "var(--font-sizes-desktop-xl)"
  },
  "fontSizes.desktop2xl": {
    "value": "39px",
    "variable": "var(--font-sizes-desktop2xl)"
  },
  "fontSizes.desktop3xl": {
    "value": "51px",
    "variable": "var(--font-sizes-desktop3xl)"
  },
  "fontSizes.desktop4xl": {
    "value": "67px",
    "variable": "var(--font-sizes-desktop4xl)"
  },
  "fontSizes.desktop5xl": {
    "value": "78px",
    "variable": "var(--font-sizes-desktop5xl)"
  },
  "borders.0": {
    "value": "0px",
    "variable": "var(--borders-0)"
  },
  "borders.1": {
    "value": "1px",
    "variable": "var(--borders-1)"
  },
  "borders.2": {
    "value": "2px",
    "variable": "var(--borders-2)"
  },
  "borders.3": {
    "value": "3px",
    "variable": "var(--borders-3)"
  },
  "borders.4": {
    "value": "4px",
    "variable": "var(--borders-4)"
  },
  "borders.5": {
    "value": "6px",
    "variable": "var(--borders-5)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.text.placeholder": {
    "value": "var(--colors-neutral-500)",
    "variable": "var(--colors-text-placeholder)"
  },
  "colors.text.heading": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-text-heading)"
  },
  "colors.text.body": {
    "value": "var(--colors-primary-950)",
    "variable": "var(--colors-text-body)"
  },
  "colors.text.subdued": {
    "value": "var(--colors-neutral-600)",
    "variable": "var(--colors-text-subdued)"
  },
  "colors.text.vibrant": {
    "value": "var(--colors-primary-500)",
    "variable": "var(--colors-text-vibrant)"
  },
  "colors.text.helper": {
    "value": "var(--colors-neutral-500)",
    "variable": "var(--colors-text-helper)"
  },
  "colors.text.contrast": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-text-contrast)"
  },
  "colors.borders.base": {
    "value": "var(--colors-neutral-300)",
    "variable": "var(--colors-borders-base)"
  },
  "colors.borders.subdued": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-borders-subdued)"
  },
  "colors.feedback.success.border": {
    "value": "var(--colors-success-400)",
    "variable": "var(--colors-feedback-success-border)"
  },
  "colors.feedback.success.foreground": {
    "value": "var(--colors-success-400)",
    "variable": "var(--colors-feedback-success-foreground)"
  },
  "colors.feedback.success.background": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-feedback-success-background)"
  },
  "colors.feedback.error.border": {
    "value": "var(--colors-error-400)",
    "variable": "var(--colors-feedback-error-border)"
  },
  "colors.feedback.error.background": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-feedback-error-background)"
  },
  "colors.feedback.error.foreground": {
    "value": "var(--colors-error-400)",
    "variable": "var(--colors-feedback-error-foreground)"
  },
  "colors.forms.action": {
    "value": "var(--colors-secondary-100)",
    "variable": "var(--colors-forms-action)"
  },
  "colors.surface.campaign.background": {
    "value": "var(--colors-tertiary-400)",
    "variable": "var(--colors-surface-campaign-background)"
  },
  "colors.surface.campaign.foreground": {
    "value": "var(--colors-tertiary-100)",
    "variable": "var(--colors-surface-campaign-foreground)"
  },
  "colors.surface.campaign.text": {
    "value": "var(--colors-tertiary-400)",
    "variable": "var(--colors-surface-campaign-text)"
  },
  "colors.surface.primary.subdued.background": {
    "value": "var(--colors-primary-200)",
    "variable": "var(--colors-surface-primary-subdued-background)"
  },
  "colors.surface.primary.subdued.foreground": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-surface-primary-subdued-foreground)"
  },
  "colors.surface.primary.subdued.border": {
    "value": "var(--colors-primary-300)",
    "variable": "var(--colors-surface-primary-subdued-border)"
  },
  "colors.surface.primary.subdued.highlight": {
    "value": "var(--colors-primary-600)",
    "variable": "var(--colors-surface-primary-subdued-highlight)"
  },
  "colors.surface.primary.subdued.accent": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-surface-primary-subdued-accent)"
  },
  "colors.surface.primary.vibrant.background": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-surface-primary-vibrant-background)"
  },
  "colors.surface.primary.vibrant.foreground": {
    "value": "var(--colors-secondary-100)",
    "variable": "var(--colors-surface-primary-vibrant-foreground)"
  },
  "colors.surface.primary.vibrant.border": {
    "value": "var(--colors-primary-400)",
    "variable": "var(--colors-surface-primary-vibrant-border)"
  },
  "colors.surface.primary.vibrant.highlight": {
    "value": "var(--colors-primary-200)",
    "variable": "var(--colors-surface-primary-vibrant-highlight)"
  },
  "colors.surface.primary.vibrant.accent": {
    "value": "var(--colors-primary-500)",
    "variable": "var(--colors-surface-primary-vibrant-accent)"
  },
  "colors.surface.primary.contrast.background": {
    "value": "var(--colors-primary-900)",
    "variable": "var(--colors-surface-primary-contrast-background)"
  },
  "colors.surface.primary.contrast.foreground": {
    "value": "var(--colors-secondary-50)",
    "variable": "var(--colors-surface-primary-contrast-foreground)"
  },
  "colors.surface.primary.contrast.border": {
    "value": "var(--colors-primary-500)",
    "variable": "var(--colors-surface-primary-contrast-border)"
  },
  "colors.surface.primary.contrast.highlight": {
    "value": "var(--colors-primary-200)",
    "variable": "var(--colors-surface-primary-contrast-highlight)"
  },
  "colors.surface.primary.contrast.accent": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-surface-primary-contrast-accent)"
  },
  "colors.surface.primary.tonal.background": {
    "value": "var(--colors-primary-400)",
    "variable": "var(--colors-surface-primary-tonal-background)"
  },
  "colors.surface.primary.tonal.foreground": {
    "value": "var(--colors-secondary-100)",
    "variable": "var(--colors-surface-primary-tonal-foreground)"
  },
  "colors.surface.primary.tonal.border": {
    "value": "var(--colors-primary-500)",
    "variable": "var(--colors-surface-primary-tonal-border)"
  },
  "colors.surface.primary.tonal.highlight": {
    "value": "var(--colors-primary-100)",
    "variable": "var(--colors-surface-primary-tonal-highlight)"
  },
  "colors.surface.primary.tonal.accent": {
    "value": "var(--colors-primary-200)",
    "variable": "var(--colors-surface-primary-tonal-accent)"
  },
  "colors.surface.subdued.background": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-surface-subdued-background)"
  },
  "colors.surface.subdued.foreground": {
    "value": "var(--colors-text-body)",
    "variable": "var(--colors-surface-subdued-foreground)"
  },
  "colors.surface.subdued.highlight": {
    "value": "var(--colors-primary-400)",
    "variable": "var(--colors-surface-subdued-highlight)"
  },
  "colors.surface.subdued.accent": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-surface-subdued-accent)"
  },
  "colors.surface.secondary.subdued.background": {
    "value": "var(--colors-secondary-50)",
    "variable": "var(--colors-surface-secondary-subdued-background)"
  },
  "colors.surface.secondary.subdued.foreground": {
    "value": "var(--colors-secondary-800)",
    "variable": "var(--colors-surface-secondary-subdued-foreground)"
  },
  "colors.surface.secondary.subdued.border": {
    "value": "var(--colors-secondary-600)",
    "variable": "var(--colors-surface-secondary-subdued-border)"
  },
  "colors.surface.secondary.subdued.highlight": {
    "value": "var(--colors-secondary-600)",
    "variable": "var(--colors-surface-secondary-subdued-highlight)"
  },
  "colors.surface.secondary.subdued.accent": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-surface-secondary-subdued-accent)"
  },
  "colors.surface.secondary.contrast.background": {
    "value": "var(--colors-secondary-900)",
    "variable": "var(--colors-surface-secondary-contrast-background)"
  },
  "colors.surface.secondary.contrast.foreground": {
    "value": "var(--colors-secondary-100)",
    "variable": "var(--colors-surface-secondary-contrast-foreground)"
  },
  "colors.surface.secondary.contrast.border": {
    "value": "var(--colors-secondary-200)",
    "variable": "var(--colors-surface-secondary-contrast-border)"
  },
  "colors.surface.secondary.contrast.highlight": {
    "value": "var(--colors-secondary-300)",
    "variable": "var(--colors-surface-secondary-contrast-highlight)"
  },
  "colors.surface.secondary.contrast.accent": {
    "value": "var(--colors-secondary-800)",
    "variable": "var(--colors-surface-secondary-contrast-accent)"
  },
  "colors.surface.secondary.vibrant.background": {
    "value": "var(--colors-secondary-700)",
    "variable": "var(--colors-surface-secondary-vibrant-background)"
  },
  "colors.surface.secondary.vibrant.foreground": {
    "value": "var(--colors-secondary-50)",
    "variable": "var(--colors-surface-secondary-vibrant-foreground)"
  },
  "colors.surface.secondary.vibrant.border": {
    "value": "var(--colors-secondary-600)",
    "variable": "var(--colors-surface-secondary-vibrant-border)"
  },
  "colors.surface.secondary.vibrant.highlight": {
    "value": "var(--colors-secondary-200)",
    "variable": "var(--colors-surface-secondary-vibrant-highlight)"
  },
  "colors.surface.secondary.vibrant.accent": {
    "value": "var(--colors-secondary-500)",
    "variable": "var(--colors-surface-secondary-vibrant-accent)"
  },
  "colors.surface.secondary.tonal.background": {
    "value": "var(--colors-secondary-100)",
    "variable": "var(--colors-surface-secondary-tonal-background)"
  },
  "colors.surface.secondary.tonal.foreground": {
    "value": "var(--colors-secondary-800)",
    "variable": "var(--colors-surface-secondary-tonal-foreground)"
  },
  "colors.surface.secondary.tonal.border": {
    "value": "var(--colors-secondary-700)",
    "variable": "var(--colors-surface-secondary-tonal-border)"
  },
  "colors.surface.secondary.tonal.highlight": {
    "value": "var(--colors-secondary-600)",
    "variable": "var(--colors-surface-secondary-tonal-highlight)"
  },
  "colors.surface.secondary.tonal.accent": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-surface-secondary-tonal-accent)"
  },
  "colors.surface.default.background": {
    "value": "var(--colors-secondary-100)",
    "variable": "var(--colors-surface-default-background)"
  },
  "colors.surface.default.foreground": {
    "value": "var(--colors-text-body)",
    "variable": "var(--colors-surface-default-foreground)"
  },
  "colors.surface.default.highlight": {
    "value": "var(--colors-primary-400)",
    "variable": "var(--colors-surface-default-highlight)"
  },
  "colors.surface.default.accent": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-surface-default-accent)"
  },
  "colors.surface.contrast.background": {
    "value": "var(--colors-neutral-800)",
    "variable": "var(--colors-surface-contrast-background)"
  },
  "colors.surface.contrast.foreground": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-surface-contrast-foreground)"
  },
  "colors.surface.contrast.highlight": {
    "value": "var(--colors-primary-400)",
    "variable": "var(--colors-surface-contrast-highlight)"
  },
  "colors.surface.contrast.accent": {
    "value": "var(--colors-neutral-700)",
    "variable": "var(--colors-surface-contrast-accent)"
  },
  "colors.surface.tertiary.subdued.background": {
    "value": "var(--colors-tertiary-50)",
    "variable": "var(--colors-surface-tertiary-subdued-background)"
  },
  "colors.surface.tertiary.subdued.foreground": {
    "value": "var(--colors-tertiary-800)",
    "variable": "var(--colors-surface-tertiary-subdued-foreground)"
  },
  "colors.surface.tertiary.subdued.border": {
    "value": "var(--colors-tertiary-700)",
    "variable": "var(--colors-surface-tertiary-subdued-border)"
  },
  "colors.surface.tertiary.subdued.highlight": {
    "value": "var(--colors-tertiary-600)",
    "variable": "var(--colors-surface-tertiary-subdued-highlight)"
  },
  "colors.surface.tertiary.subdued.accent": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-surface-tertiary-subdued-accent)"
  },
  "colors.surface.tertiary.contrast.background": {
    "value": "var(--colors-tertiary-800)",
    "variable": "var(--colors-surface-tertiary-contrast-background)"
  },
  "colors.surface.tertiary.contrast.foreground": {
    "value": "var(--colors-tertiary-100)",
    "variable": "var(--colors-surface-tertiary-contrast-foreground)"
  },
  "colors.surface.tertiary.contrast.border": {
    "value": "var(--colors-tertiary-100)",
    "variable": "var(--colors-surface-tertiary-contrast-border)"
  },
  "colors.surface.tertiary.contrast.highlight": {
    "value": "var(--colors-tertiary-300)",
    "variable": "var(--colors-surface-tertiary-contrast-highlight)"
  },
  "colors.surface.tertiary.contrast.accent": {
    "value": "var(--colors-tertiary-700)",
    "variable": "var(--colors-surface-tertiary-contrast-accent)"
  },
  "colors.surface.tertiary.vibrant.background": {
    "value": "var(--colors-tertiary-700)",
    "variable": "var(--colors-surface-tertiary-vibrant-background)"
  },
  "colors.surface.tertiary.vibrant.foreground": {
    "value": "var(--colors-tertiary-50)",
    "variable": "var(--colors-surface-tertiary-vibrant-foreground)"
  },
  "colors.surface.tertiary.vibrant.border": {
    "value": "var(--colors-tertiary-500)",
    "variable": "var(--colors-surface-tertiary-vibrant-border)"
  },
  "colors.surface.tertiary.vibrant.highlight": {
    "value": "var(--colors-tertiary-200)",
    "variable": "var(--colors-surface-tertiary-vibrant-highlight)"
  },
  "colors.surface.tertiary.vibrant.accent": {
    "value": "var(--colors-tertiary-500)",
    "variable": "var(--colors-surface-tertiary-vibrant-accent)"
  },
  "colors.surface.tertiary.tonal.background": {
    "value": "var(--colors-tertiary-100)",
    "variable": "var(--colors-surface-tertiary-tonal-background)"
  },
  "colors.surface.tertiary.tonal.foreground": {
    "value": "var(--colors-tertiary-800)",
    "variable": "var(--colors-surface-tertiary-tonal-foreground)"
  },
  "colors.surface.tertiary.tonal.border": {
    "value": "var(--colors-tertiary-700)",
    "variable": "var(--colors-surface-tertiary-tonal-border)"
  },
  "colors.surface.tertiary.tonal.highlight": {
    "value": "var(--colors-tertiary-600)",
    "variable": "var(--colors-surface-tertiary-tonal-highlight)"
  },
  "colors.surface.tertiary.tonal.accent": {
    "value": "var(--colors-mono-off-white)",
    "variable": "var(--colors-surface-tertiary-tonal-accent)"
  },
  "colors.action.primary.border.default": {
    "value": "var(--colors-primary-500)",
    "variable": "var(--colors-action-primary-border-default)"
  },
  "colors.action.primary.background.default": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-action-primary-background-default)"
  },
  "colors.action.primary.background.hover": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-action-primary-background-hover)"
  },
  "colors.action.primary.background.active": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-action-primary-background-active)"
  },
  "colors.action.primary.foreground.default": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-action-primary-foreground-default)"
  },
  "colors.action.text.foreground.default": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-action-text-foreground-default)"
  },
  "colors.action.text.foreground.hover": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-action-text-foreground-hover)"
  },
  "colors.action.text.foreground.active": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-action-text-foreground-active)"
  },
  "colors.action.disabled.background": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-action-disabled-background)"
  },
  "colors.action.disabled.foreground": {
    "value": "var(--colors-neutral-600)",
    "variable": "var(--colors-action-disabled-foreground)"
  },
  "colors.action.disabled.contrast": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-action-disabled-contrast)"
  },
  "colors.action.secondary.border.default": {
    "value": "var(--colors-secondary-500)",
    "variable": "var(--colors-action-secondary-border-default)"
  },
  "colors.action.secondary.background.default": {
    "value": "var(--colors-primary-200)",
    "variable": "var(--colors-action-secondary-background-default)"
  },
  "colors.action.secondary.background.hover": {
    "value": "var(--colors-primary-200)",
    "variable": "var(--colors-action-secondary-background-hover)"
  },
  "colors.action.secondary.background.active": {
    "value": "var(--colors-primary-200)",
    "variable": "var(--colors-action-secondary-background-active)"
  },
  "colors.action.secondary.foreground.default": {
    "value": "var(--colors-primary-800)",
    "variable": "var(--colors-action-secondary-foreground-default)"
  },
  "colors.action.cta.background.default": {
    "value": "var(--colors-primary-400)",
    "variable": "var(--colors-action-cta-background-default)"
  },
  "colors.action.cta.background.hover": {
    "value": "var(--colors-primary-400)",
    "variable": "var(--colors-action-cta-background-hover)"
  },
  "colors.action.cta.background.active": {
    "value": "var(--colors-primary-400)",
    "variable": "var(--colors-action-cta-background-active)"
  },
  "colors.action.cta.foreground.default": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-action-cta-foreground-default)"
  },
  "colors.action.destructive.border.default": {
    "value": "var(--colors-error-500)",
    "variable": "var(--colors-action-destructive-border-default)"
  },
  "colors.action.destructive.background.default": {
    "value": "var(--colors-error-400)",
    "variable": "var(--colors-action-destructive-background-default)"
  },
  "colors.action.destructive.background.active": {
    "value": "var(--colors-error-400)",
    "variable": "var(--colors-action-destructive-background-active)"
  },
  "colors.action.destructive.background.hover": {
    "value": "var(--colors-error-400)",
    "variable": "var(--colors-action-destructive-background-hover)"
  },
  "colors.action.destructive.foreground.default": {
    "value": "var(--colors-error-50)",
    "variable": "var(--colors-action-destructive-foreground-default)"
  },
  "colors.commerce.rating": {
    "value": "var(--colors-alert-200)",
    "variable": "var(--colors-commerce-rating)"
  },
  "colors.commerce.campaign.background": {
    "value": "var(--colors-tertiary-50)",
    "variable": "var(--colors-commerce-campaign-background)"
  },
  "colors.commerce.campaign.foreground": {
    "value": "var(--colors-tertiary-800)",
    "variable": "var(--colors-commerce-campaign-foreground)"
  },
  "colors.commerce.campaign.text": {
    "value": "var(--colors-tertiary-600)",
    "variable": "var(--colors-commerce-campaign-text)"
  },
  "colors.commerce.campaign.accent": {
    "value": "var(--colors-tertiary-100)",
    "variable": "var(--colors-commerce-campaign-accent)"
  },
  "spacing.none": {
    "value": "var(--spacing-0)",
    "variable": "var(--spacing-none)"
  },
  "spacing.tight": {
    "value": "var(--spacing-tight)",
    "variable": "var(--spacing-tight)"
  },
  "spacing.snug": {
    "value": "var(--spacing-snug)",
    "variable": "var(--spacing-snug)"
  },
  "spacing.normal": {
    "value": "var(--spacing-normal)",
    "variable": "var(--spacing-normal)"
  },
  "spacing.relaxed": {
    "value": "var(--spacing-relaxed)",
    "variable": "var(--spacing-relaxed)"
  },
  "spacing.loose": {
    "value": "var(--spacing-loose)",
    "variable": "var(--spacing-loose)"
  },
  "spacing.x-loose": {
    "value": "var(--spacing-x-loose)",
    "variable": "var(--spacing-x-loose)"
  },
  "spacing.xx-loose": {
    "value": "var(--spacing-xx-loose)",
    "variable": "var(--spacing-xx-loose)"
  },
  "spacing.app": {
    "value": "var(--spacing-app)",
    "variable": "var(--spacing-app)"
  },
  "radii.interactive": {
    "value": "var(--radii-4)",
    "variable": "var(--radii-interactive)"
  },
  "radii.surface.sm": {
    "value": "var(--radii-6)",
    "variable": "var(--radii-surface-sm)"
  },
  "radii.surface.md": {
    "value": "var(--radii-7)",
    "variable": "var(--radii-surface-md)"
  },
  "radii.forms": {
    "value": "var(--radii-0)",
    "variable": "var(--radii-forms)"
  },
  "sizes.logo.navbar": {
    "value": "var(--sizes-logo-navbar)",
    "variable": "var(--sizes-logo-navbar)"
  },
  "sizes.logo.footer": {
    "value": "var(--sizes-logo-footer)",
    "variable": "var(--sizes-logo-footer)"
  },
  "sizes.screens.smallMobile": {
    "value": "320px",
    "variable": "var(--sizes-screens-small-mobile)"
  },
  "sizes.container.wide": {
    "value": "var(--sizes-containers-2xl)",
    "variable": "var(--sizes-container-wide)"
  },
  "sizes.container.normal": {
    "value": "var(--sizes-containers-xl)",
    "variable": "var(--sizes-container-normal)"
  },
  "sizes.container.slim": {
    "value": "var(--sizes-containers-lg)",
    "variable": "var(--sizes-container-slim)"
  },
  "sizes.container.tight": {
    "value": "var(--sizes-containers-md)",
    "variable": "var(--sizes-container-tight)"
  },
  "fontSizes.2xs": {
    "value": "var(--font-sizes-2xs)",
    "variable": "var(--font-sizes-2xs)"
  },
  "fontSizes.6xl": {
    "value": "var(--font-sizes-6xl)",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "var(--font-sizes-7xl)",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.xs": {
    "value": "var(--font-sizes-xs)",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "var(--font-sizes-sm)",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "var(--font-sizes-md)",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "var(--font-sizes-lg)",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "var(--font-sizes-xl)",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "var(--font-sizes-2xl)",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "var(--font-sizes-3xl)",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "var(--font-sizes-4xl)",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "var(--font-sizes-5xl)",
    "variable": "var(--font-sizes-5xl)"
  },
  "spacing.-0": {
    "value": "calc(var(--spacing-0) * -1)",
    "variable": "var(--spacing-0)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-13": {
    "value": "calc(var(--spacing-13) * -1)",
    "variable": "var(--spacing-13)"
  },
  "spacing.-none": {
    "value": "calc(var(--spacing-none) * -1)",
    "variable": "var(--spacing-none)"
  },
  "spacing.-tight": {
    "value": "var(--spacing-tight)",
    "variable": "var(--spacing-tight)"
  },
  "spacing.-snug": {
    "value": "var(--spacing-snug)",
    "variable": "var(--spacing-snug)"
  },
  "spacing.-normal": {
    "value": "var(--spacing-normal)",
    "variable": "var(--spacing-normal)"
  },
  "spacing.-relaxed": {
    "value": "var(--spacing-relaxed)",
    "variable": "var(--spacing-relaxed)"
  },
  "spacing.-loose": {
    "value": "var(--spacing-loose)",
    "variable": "var(--spacing-loose)"
  },
  "spacing.-x-loose": {
    "value": "var(--spacing-x-loose)",
    "variable": "var(--spacing-x-loose)"
  },
  "spacing.-xx-loose": {
    "value": "var(--spacing-xx-loose)",
    "variable": "var(--spacing-xx-loose)"
  },
  "spacing.-app": {
    "value": "var(--spacing-app)",
    "variable": "var(--spacing-app)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  },
  "colors.colorPalette.source": {
    "value": "var(--colors-color-palette-source)",
    "variable": "var(--colors-color-palette-source)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.950": {
    "value": "var(--colors-color-palette-950)",
    "variable": "var(--colors-color-palette-950)"
  },
  "colors.colorPalette.black": {
    "value": "var(--colors-color-palette-black)",
    "variable": "var(--colors-color-palette-black)"
  },
  "colors.colorPalette.white": {
    "value": "var(--colors-color-palette-white)",
    "variable": "var(--colors-color-palette-white)"
  },
  "colors.colorPalette.off-white": {
    "value": "var(--colors-color-palette-off-white)",
    "variable": "var(--colors-color-palette-off-white)"
  },
  "colors.colorPalette.placeholder": {
    "value": "var(--colors-color-palette-placeholder)",
    "variable": "var(--colors-color-palette-placeholder)"
  },
  "colors.colorPalette.heading": {
    "value": "var(--colors-color-palette-heading)",
    "variable": "var(--colors-color-palette-heading)"
  },
  "colors.colorPalette.body": {
    "value": "var(--colors-color-palette-body)",
    "variable": "var(--colors-color-palette-body)"
  },
  "colors.colorPalette.subdued": {
    "value": "var(--colors-color-palette-subdued)",
    "variable": "var(--colors-color-palette-subdued)"
  },
  "colors.colorPalette.vibrant": {
    "value": "var(--colors-color-palette-vibrant)",
    "variable": "var(--colors-color-palette-vibrant)"
  },
  "colors.colorPalette.helper": {
    "value": "var(--colors-color-palette-helper)",
    "variable": "var(--colors-color-palette-helper)"
  },
  "colors.colorPalette.contrast": {
    "value": "var(--colors-color-palette-contrast)",
    "variable": "var(--colors-color-palette-contrast)"
  },
  "colors.colorPalette.base": {
    "value": "var(--colors-color-palette-base)",
    "variable": "var(--colors-color-palette-base)"
  },
  "colors.colorPalette.success.border": {
    "value": "var(--colors-color-palette-success-border)",
    "variable": "var(--colors-color-palette-success-border)"
  },
  "colors.colorPalette.border": {
    "value": "var(--colors-color-palette-border)",
    "variable": "var(--colors-color-palette-border)"
  },
  "colors.colorPalette.success.foreground": {
    "value": "var(--colors-color-palette-success-foreground)",
    "variable": "var(--colors-color-palette-success-foreground)"
  },
  "colors.colorPalette.foreground": {
    "value": "var(--colors-color-palette-foreground)",
    "variable": "var(--colors-color-palette-foreground)"
  },
  "colors.colorPalette.success.background": {
    "value": "var(--colors-color-palette-success-background)",
    "variable": "var(--colors-color-palette-success-background)"
  },
  "colors.colorPalette.background": {
    "value": "var(--colors-color-palette-background)",
    "variable": "var(--colors-color-palette-background)"
  },
  "colors.colorPalette.error.border": {
    "value": "var(--colors-color-palette-error-border)",
    "variable": "var(--colors-color-palette-error-border)"
  },
  "colors.colorPalette.error.background": {
    "value": "var(--colors-color-palette-error-background)",
    "variable": "var(--colors-color-palette-error-background)"
  },
  "colors.colorPalette.error.foreground": {
    "value": "var(--colors-color-palette-error-foreground)",
    "variable": "var(--colors-color-palette-error-foreground)"
  },
  "colors.colorPalette.action": {
    "value": "var(--colors-color-palette-action)",
    "variable": "var(--colors-color-palette-action)"
  },
  "colors.colorPalette.campaign.background": {
    "value": "var(--colors-color-palette-campaign-background)",
    "variable": "var(--colors-color-palette-campaign-background)"
  },
  "colors.colorPalette.campaign.foreground": {
    "value": "var(--colors-color-palette-campaign-foreground)",
    "variable": "var(--colors-color-palette-campaign-foreground)"
  },
  "colors.colorPalette.campaign.text": {
    "value": "var(--colors-color-palette-campaign-text)",
    "variable": "var(--colors-color-palette-campaign-text)"
  },
  "colors.colorPalette.text": {
    "value": "var(--colors-color-palette-text)",
    "variable": "var(--colors-color-palette-text)"
  },
  "colors.colorPalette.primary.subdued.background": {
    "value": "var(--colors-color-palette-primary-subdued-background)",
    "variable": "var(--colors-color-palette-primary-subdued-background)"
  },
  "colors.colorPalette.subdued.background": {
    "value": "var(--colors-color-palette-subdued-background)",
    "variable": "var(--colors-color-palette-subdued-background)"
  },
  "colors.colorPalette.primary.subdued.foreground": {
    "value": "var(--colors-color-palette-primary-subdued-foreground)",
    "variable": "var(--colors-color-palette-primary-subdued-foreground)"
  },
  "colors.colorPalette.subdued.foreground": {
    "value": "var(--colors-color-palette-subdued-foreground)",
    "variable": "var(--colors-color-palette-subdued-foreground)"
  },
  "colors.colorPalette.primary.subdued.border": {
    "value": "var(--colors-color-palette-primary-subdued-border)",
    "variable": "var(--colors-color-palette-primary-subdued-border)"
  },
  "colors.colorPalette.subdued.border": {
    "value": "var(--colors-color-palette-subdued-border)",
    "variable": "var(--colors-color-palette-subdued-border)"
  },
  "colors.colorPalette.primary.subdued.highlight": {
    "value": "var(--colors-color-palette-primary-subdued-highlight)",
    "variable": "var(--colors-color-palette-primary-subdued-highlight)"
  },
  "colors.colorPalette.subdued.highlight": {
    "value": "var(--colors-color-palette-subdued-highlight)",
    "variable": "var(--colors-color-palette-subdued-highlight)"
  },
  "colors.colorPalette.highlight": {
    "value": "var(--colors-color-palette-highlight)",
    "variable": "var(--colors-color-palette-highlight)"
  },
  "colors.colorPalette.primary.subdued.accent": {
    "value": "var(--colors-color-palette-primary-subdued-accent)",
    "variable": "var(--colors-color-palette-primary-subdued-accent)"
  },
  "colors.colorPalette.subdued.accent": {
    "value": "var(--colors-color-palette-subdued-accent)",
    "variable": "var(--colors-color-palette-subdued-accent)"
  },
  "colors.colorPalette.accent": {
    "value": "var(--colors-color-palette-accent)",
    "variable": "var(--colors-color-palette-accent)"
  },
  "colors.colorPalette.primary.vibrant.background": {
    "value": "var(--colors-color-palette-primary-vibrant-background)",
    "variable": "var(--colors-color-palette-primary-vibrant-background)"
  },
  "colors.colorPalette.vibrant.background": {
    "value": "var(--colors-color-palette-vibrant-background)",
    "variable": "var(--colors-color-palette-vibrant-background)"
  },
  "colors.colorPalette.primary.vibrant.foreground": {
    "value": "var(--colors-color-palette-primary-vibrant-foreground)",
    "variable": "var(--colors-color-palette-primary-vibrant-foreground)"
  },
  "colors.colorPalette.vibrant.foreground": {
    "value": "var(--colors-color-palette-vibrant-foreground)",
    "variable": "var(--colors-color-palette-vibrant-foreground)"
  },
  "colors.colorPalette.primary.vibrant.border": {
    "value": "var(--colors-color-palette-primary-vibrant-border)",
    "variable": "var(--colors-color-palette-primary-vibrant-border)"
  },
  "colors.colorPalette.vibrant.border": {
    "value": "var(--colors-color-palette-vibrant-border)",
    "variable": "var(--colors-color-palette-vibrant-border)"
  },
  "colors.colorPalette.primary.vibrant.highlight": {
    "value": "var(--colors-color-palette-primary-vibrant-highlight)",
    "variable": "var(--colors-color-palette-primary-vibrant-highlight)"
  },
  "colors.colorPalette.vibrant.highlight": {
    "value": "var(--colors-color-palette-vibrant-highlight)",
    "variable": "var(--colors-color-palette-vibrant-highlight)"
  },
  "colors.colorPalette.primary.vibrant.accent": {
    "value": "var(--colors-color-palette-primary-vibrant-accent)",
    "variable": "var(--colors-color-palette-primary-vibrant-accent)"
  },
  "colors.colorPalette.vibrant.accent": {
    "value": "var(--colors-color-palette-vibrant-accent)",
    "variable": "var(--colors-color-palette-vibrant-accent)"
  },
  "colors.colorPalette.primary.contrast.background": {
    "value": "var(--colors-color-palette-primary-contrast-background)",
    "variable": "var(--colors-color-palette-primary-contrast-background)"
  },
  "colors.colorPalette.contrast.background": {
    "value": "var(--colors-color-palette-contrast-background)",
    "variable": "var(--colors-color-palette-contrast-background)"
  },
  "colors.colorPalette.primary.contrast.foreground": {
    "value": "var(--colors-color-palette-primary-contrast-foreground)",
    "variable": "var(--colors-color-palette-primary-contrast-foreground)"
  },
  "colors.colorPalette.contrast.foreground": {
    "value": "var(--colors-color-palette-contrast-foreground)",
    "variable": "var(--colors-color-palette-contrast-foreground)"
  },
  "colors.colorPalette.primary.contrast.border": {
    "value": "var(--colors-color-palette-primary-contrast-border)",
    "variable": "var(--colors-color-palette-primary-contrast-border)"
  },
  "colors.colorPalette.contrast.border": {
    "value": "var(--colors-color-palette-contrast-border)",
    "variable": "var(--colors-color-palette-contrast-border)"
  },
  "colors.colorPalette.primary.contrast.highlight": {
    "value": "var(--colors-color-palette-primary-contrast-highlight)",
    "variable": "var(--colors-color-palette-primary-contrast-highlight)"
  },
  "colors.colorPalette.contrast.highlight": {
    "value": "var(--colors-color-palette-contrast-highlight)",
    "variable": "var(--colors-color-palette-contrast-highlight)"
  },
  "colors.colorPalette.primary.contrast.accent": {
    "value": "var(--colors-color-palette-primary-contrast-accent)",
    "variable": "var(--colors-color-palette-primary-contrast-accent)"
  },
  "colors.colorPalette.contrast.accent": {
    "value": "var(--colors-color-palette-contrast-accent)",
    "variable": "var(--colors-color-palette-contrast-accent)"
  },
  "colors.colorPalette.primary.tonal.background": {
    "value": "var(--colors-color-palette-primary-tonal-background)",
    "variable": "var(--colors-color-palette-primary-tonal-background)"
  },
  "colors.colorPalette.tonal.background": {
    "value": "var(--colors-color-palette-tonal-background)",
    "variable": "var(--colors-color-palette-tonal-background)"
  },
  "colors.colorPalette.primary.tonal.foreground": {
    "value": "var(--colors-color-palette-primary-tonal-foreground)",
    "variable": "var(--colors-color-palette-primary-tonal-foreground)"
  },
  "colors.colorPalette.tonal.foreground": {
    "value": "var(--colors-color-palette-tonal-foreground)",
    "variable": "var(--colors-color-palette-tonal-foreground)"
  },
  "colors.colorPalette.primary.tonal.border": {
    "value": "var(--colors-color-palette-primary-tonal-border)",
    "variable": "var(--colors-color-palette-primary-tonal-border)"
  },
  "colors.colorPalette.tonal.border": {
    "value": "var(--colors-color-palette-tonal-border)",
    "variable": "var(--colors-color-palette-tonal-border)"
  },
  "colors.colorPalette.primary.tonal.highlight": {
    "value": "var(--colors-color-palette-primary-tonal-highlight)",
    "variable": "var(--colors-color-palette-primary-tonal-highlight)"
  },
  "colors.colorPalette.tonal.highlight": {
    "value": "var(--colors-color-palette-tonal-highlight)",
    "variable": "var(--colors-color-palette-tonal-highlight)"
  },
  "colors.colorPalette.primary.tonal.accent": {
    "value": "var(--colors-color-palette-primary-tonal-accent)",
    "variable": "var(--colors-color-palette-primary-tonal-accent)"
  },
  "colors.colorPalette.tonal.accent": {
    "value": "var(--colors-color-palette-tonal-accent)",
    "variable": "var(--colors-color-palette-tonal-accent)"
  },
  "colors.colorPalette.secondary.subdued.background": {
    "value": "var(--colors-color-palette-secondary-subdued-background)",
    "variable": "var(--colors-color-palette-secondary-subdued-background)"
  },
  "colors.colorPalette.secondary.subdued.foreground": {
    "value": "var(--colors-color-palette-secondary-subdued-foreground)",
    "variable": "var(--colors-color-palette-secondary-subdued-foreground)"
  },
  "colors.colorPalette.secondary.subdued.border": {
    "value": "var(--colors-color-palette-secondary-subdued-border)",
    "variable": "var(--colors-color-palette-secondary-subdued-border)"
  },
  "colors.colorPalette.secondary.subdued.highlight": {
    "value": "var(--colors-color-palette-secondary-subdued-highlight)",
    "variable": "var(--colors-color-palette-secondary-subdued-highlight)"
  },
  "colors.colorPalette.secondary.subdued.accent": {
    "value": "var(--colors-color-palette-secondary-subdued-accent)",
    "variable": "var(--colors-color-palette-secondary-subdued-accent)"
  },
  "colors.colorPalette.secondary.contrast.background": {
    "value": "var(--colors-color-palette-secondary-contrast-background)",
    "variable": "var(--colors-color-palette-secondary-contrast-background)"
  },
  "colors.colorPalette.secondary.contrast.foreground": {
    "value": "var(--colors-color-palette-secondary-contrast-foreground)",
    "variable": "var(--colors-color-palette-secondary-contrast-foreground)"
  },
  "colors.colorPalette.secondary.contrast.border": {
    "value": "var(--colors-color-palette-secondary-contrast-border)",
    "variable": "var(--colors-color-palette-secondary-contrast-border)"
  },
  "colors.colorPalette.secondary.contrast.highlight": {
    "value": "var(--colors-color-palette-secondary-contrast-highlight)",
    "variable": "var(--colors-color-palette-secondary-contrast-highlight)"
  },
  "colors.colorPalette.secondary.contrast.accent": {
    "value": "var(--colors-color-palette-secondary-contrast-accent)",
    "variable": "var(--colors-color-palette-secondary-contrast-accent)"
  },
  "colors.colorPalette.secondary.vibrant.background": {
    "value": "var(--colors-color-palette-secondary-vibrant-background)",
    "variable": "var(--colors-color-palette-secondary-vibrant-background)"
  },
  "colors.colorPalette.secondary.vibrant.foreground": {
    "value": "var(--colors-color-palette-secondary-vibrant-foreground)",
    "variable": "var(--colors-color-palette-secondary-vibrant-foreground)"
  },
  "colors.colorPalette.secondary.vibrant.border": {
    "value": "var(--colors-color-palette-secondary-vibrant-border)",
    "variable": "var(--colors-color-palette-secondary-vibrant-border)"
  },
  "colors.colorPalette.secondary.vibrant.highlight": {
    "value": "var(--colors-color-palette-secondary-vibrant-highlight)",
    "variable": "var(--colors-color-palette-secondary-vibrant-highlight)"
  },
  "colors.colorPalette.secondary.vibrant.accent": {
    "value": "var(--colors-color-palette-secondary-vibrant-accent)",
    "variable": "var(--colors-color-palette-secondary-vibrant-accent)"
  },
  "colors.colorPalette.secondary.tonal.background": {
    "value": "var(--colors-color-palette-secondary-tonal-background)",
    "variable": "var(--colors-color-palette-secondary-tonal-background)"
  },
  "colors.colorPalette.secondary.tonal.foreground": {
    "value": "var(--colors-color-palette-secondary-tonal-foreground)",
    "variable": "var(--colors-color-palette-secondary-tonal-foreground)"
  },
  "colors.colorPalette.secondary.tonal.border": {
    "value": "var(--colors-color-palette-secondary-tonal-border)",
    "variable": "var(--colors-color-palette-secondary-tonal-border)"
  },
  "colors.colorPalette.secondary.tonal.highlight": {
    "value": "var(--colors-color-palette-secondary-tonal-highlight)",
    "variable": "var(--colors-color-palette-secondary-tonal-highlight)"
  },
  "colors.colorPalette.secondary.tonal.accent": {
    "value": "var(--colors-color-palette-secondary-tonal-accent)",
    "variable": "var(--colors-color-palette-secondary-tonal-accent)"
  },
  "colors.colorPalette.default.background": {
    "value": "var(--colors-color-palette-default-background)",
    "variable": "var(--colors-color-palette-default-background)"
  },
  "colors.colorPalette.default.foreground": {
    "value": "var(--colors-color-palette-default-foreground)",
    "variable": "var(--colors-color-palette-default-foreground)"
  },
  "colors.colorPalette.default.highlight": {
    "value": "var(--colors-color-palette-default-highlight)",
    "variable": "var(--colors-color-palette-default-highlight)"
  },
  "colors.colorPalette.default.accent": {
    "value": "var(--colors-color-palette-default-accent)",
    "variable": "var(--colors-color-palette-default-accent)"
  },
  "colors.colorPalette.tertiary.subdued.background": {
    "value": "var(--colors-color-palette-tertiary-subdued-background)",
    "variable": "var(--colors-color-palette-tertiary-subdued-background)"
  },
  "colors.colorPalette.tertiary.subdued.foreground": {
    "value": "var(--colors-color-palette-tertiary-subdued-foreground)",
    "variable": "var(--colors-color-palette-tertiary-subdued-foreground)"
  },
  "colors.colorPalette.tertiary.subdued.border": {
    "value": "var(--colors-color-palette-tertiary-subdued-border)",
    "variable": "var(--colors-color-palette-tertiary-subdued-border)"
  },
  "colors.colorPalette.tertiary.subdued.highlight": {
    "value": "var(--colors-color-palette-tertiary-subdued-highlight)",
    "variable": "var(--colors-color-palette-tertiary-subdued-highlight)"
  },
  "colors.colorPalette.tertiary.subdued.accent": {
    "value": "var(--colors-color-palette-tertiary-subdued-accent)",
    "variable": "var(--colors-color-palette-tertiary-subdued-accent)"
  },
  "colors.colorPalette.tertiary.contrast.background": {
    "value": "var(--colors-color-palette-tertiary-contrast-background)",
    "variable": "var(--colors-color-palette-tertiary-contrast-background)"
  },
  "colors.colorPalette.tertiary.contrast.foreground": {
    "value": "var(--colors-color-palette-tertiary-contrast-foreground)",
    "variable": "var(--colors-color-palette-tertiary-contrast-foreground)"
  },
  "colors.colorPalette.tertiary.contrast.border": {
    "value": "var(--colors-color-palette-tertiary-contrast-border)",
    "variable": "var(--colors-color-palette-tertiary-contrast-border)"
  },
  "colors.colorPalette.tertiary.contrast.highlight": {
    "value": "var(--colors-color-palette-tertiary-contrast-highlight)",
    "variable": "var(--colors-color-palette-tertiary-contrast-highlight)"
  },
  "colors.colorPalette.tertiary.contrast.accent": {
    "value": "var(--colors-color-palette-tertiary-contrast-accent)",
    "variable": "var(--colors-color-palette-tertiary-contrast-accent)"
  },
  "colors.colorPalette.tertiary.vibrant.background": {
    "value": "var(--colors-color-palette-tertiary-vibrant-background)",
    "variable": "var(--colors-color-palette-tertiary-vibrant-background)"
  },
  "colors.colorPalette.tertiary.vibrant.foreground": {
    "value": "var(--colors-color-palette-tertiary-vibrant-foreground)",
    "variable": "var(--colors-color-palette-tertiary-vibrant-foreground)"
  },
  "colors.colorPalette.tertiary.vibrant.border": {
    "value": "var(--colors-color-palette-tertiary-vibrant-border)",
    "variable": "var(--colors-color-palette-tertiary-vibrant-border)"
  },
  "colors.colorPalette.tertiary.vibrant.highlight": {
    "value": "var(--colors-color-palette-tertiary-vibrant-highlight)",
    "variable": "var(--colors-color-palette-tertiary-vibrant-highlight)"
  },
  "colors.colorPalette.tertiary.vibrant.accent": {
    "value": "var(--colors-color-palette-tertiary-vibrant-accent)",
    "variable": "var(--colors-color-palette-tertiary-vibrant-accent)"
  },
  "colors.colorPalette.tertiary.tonal.background": {
    "value": "var(--colors-color-palette-tertiary-tonal-background)",
    "variable": "var(--colors-color-palette-tertiary-tonal-background)"
  },
  "colors.colorPalette.tertiary.tonal.foreground": {
    "value": "var(--colors-color-palette-tertiary-tonal-foreground)",
    "variable": "var(--colors-color-palette-tertiary-tonal-foreground)"
  },
  "colors.colorPalette.tertiary.tonal.border": {
    "value": "var(--colors-color-palette-tertiary-tonal-border)",
    "variable": "var(--colors-color-palette-tertiary-tonal-border)"
  },
  "colors.colorPalette.tertiary.tonal.highlight": {
    "value": "var(--colors-color-palette-tertiary-tonal-highlight)",
    "variable": "var(--colors-color-palette-tertiary-tonal-highlight)"
  },
  "colors.colorPalette.tertiary.tonal.accent": {
    "value": "var(--colors-color-palette-tertiary-tonal-accent)",
    "variable": "var(--colors-color-palette-tertiary-tonal-accent)"
  },
  "colors.colorPalette.primary.border.default": {
    "value": "var(--colors-color-palette-primary-border-default)",
    "variable": "var(--colors-color-palette-primary-border-default)"
  },
  "colors.colorPalette.border.default": {
    "value": "var(--colors-color-palette-border-default)",
    "variable": "var(--colors-color-palette-border-default)"
  },
  "colors.colorPalette.default": {
    "value": "var(--colors-color-palette-default)",
    "variable": "var(--colors-color-palette-default)"
  },
  "colors.colorPalette.primary.background.default": {
    "value": "var(--colors-color-palette-primary-background-default)",
    "variable": "var(--colors-color-palette-primary-background-default)"
  },
  "colors.colorPalette.background.default": {
    "value": "var(--colors-color-palette-background-default)",
    "variable": "var(--colors-color-palette-background-default)"
  },
  "colors.colorPalette.primary.background.hover": {
    "value": "var(--colors-color-palette-primary-background-hover)",
    "variable": "var(--colors-color-palette-primary-background-hover)"
  },
  "colors.colorPalette.background.hover": {
    "value": "var(--colors-color-palette-background-hover)",
    "variable": "var(--colors-color-palette-background-hover)"
  },
  "colors.colorPalette.hover": {
    "value": "var(--colors-color-palette-hover)",
    "variable": "var(--colors-color-palette-hover)"
  },
  "colors.colorPalette.primary.background.active": {
    "value": "var(--colors-color-palette-primary-background-active)",
    "variable": "var(--colors-color-palette-primary-background-active)"
  },
  "colors.colorPalette.background.active": {
    "value": "var(--colors-color-palette-background-active)",
    "variable": "var(--colors-color-palette-background-active)"
  },
  "colors.colorPalette.active": {
    "value": "var(--colors-color-palette-active)",
    "variable": "var(--colors-color-palette-active)"
  },
  "colors.colorPalette.primary.foreground.default": {
    "value": "var(--colors-color-palette-primary-foreground-default)",
    "variable": "var(--colors-color-palette-primary-foreground-default)"
  },
  "colors.colorPalette.foreground.default": {
    "value": "var(--colors-color-palette-foreground-default)",
    "variable": "var(--colors-color-palette-foreground-default)"
  },
  "colors.colorPalette.text.foreground.default": {
    "value": "var(--colors-color-palette-text-foreground-default)",
    "variable": "var(--colors-color-palette-text-foreground-default)"
  },
  "colors.colorPalette.text.foreground.hover": {
    "value": "var(--colors-color-palette-text-foreground-hover)",
    "variable": "var(--colors-color-palette-text-foreground-hover)"
  },
  "colors.colorPalette.foreground.hover": {
    "value": "var(--colors-color-palette-foreground-hover)",
    "variable": "var(--colors-color-palette-foreground-hover)"
  },
  "colors.colorPalette.text.foreground.active": {
    "value": "var(--colors-color-palette-text-foreground-active)",
    "variable": "var(--colors-color-palette-text-foreground-active)"
  },
  "colors.colorPalette.foreground.active": {
    "value": "var(--colors-color-palette-foreground-active)",
    "variable": "var(--colors-color-palette-foreground-active)"
  },
  "colors.colorPalette.disabled.background": {
    "value": "var(--colors-color-palette-disabled-background)",
    "variable": "var(--colors-color-palette-disabled-background)"
  },
  "colors.colorPalette.disabled.foreground": {
    "value": "var(--colors-color-palette-disabled-foreground)",
    "variable": "var(--colors-color-palette-disabled-foreground)"
  },
  "colors.colorPalette.disabled.contrast": {
    "value": "var(--colors-color-palette-disabled-contrast)",
    "variable": "var(--colors-color-palette-disabled-contrast)"
  },
  "colors.colorPalette.secondary.border.default": {
    "value": "var(--colors-color-palette-secondary-border-default)",
    "variable": "var(--colors-color-palette-secondary-border-default)"
  },
  "colors.colorPalette.secondary.background.default": {
    "value": "var(--colors-color-palette-secondary-background-default)",
    "variable": "var(--colors-color-palette-secondary-background-default)"
  },
  "colors.colorPalette.secondary.background.hover": {
    "value": "var(--colors-color-palette-secondary-background-hover)",
    "variable": "var(--colors-color-palette-secondary-background-hover)"
  },
  "colors.colorPalette.secondary.background.active": {
    "value": "var(--colors-color-palette-secondary-background-active)",
    "variable": "var(--colors-color-palette-secondary-background-active)"
  },
  "colors.colorPalette.secondary.foreground.default": {
    "value": "var(--colors-color-palette-secondary-foreground-default)",
    "variable": "var(--colors-color-palette-secondary-foreground-default)"
  },
  "colors.colorPalette.cta.background.default": {
    "value": "var(--colors-color-palette-cta-background-default)",
    "variable": "var(--colors-color-palette-cta-background-default)"
  },
  "colors.colorPalette.cta.background.hover": {
    "value": "var(--colors-color-palette-cta-background-hover)",
    "variable": "var(--colors-color-palette-cta-background-hover)"
  },
  "colors.colorPalette.cta.background.active": {
    "value": "var(--colors-color-palette-cta-background-active)",
    "variable": "var(--colors-color-palette-cta-background-active)"
  },
  "colors.colorPalette.cta.foreground.default": {
    "value": "var(--colors-color-palette-cta-foreground-default)",
    "variable": "var(--colors-color-palette-cta-foreground-default)"
  },
  "colors.colorPalette.destructive.border.default": {
    "value": "var(--colors-color-palette-destructive-border-default)",
    "variable": "var(--colors-color-palette-destructive-border-default)"
  },
  "colors.colorPalette.destructive.background.default": {
    "value": "var(--colors-color-palette-destructive-background-default)",
    "variable": "var(--colors-color-palette-destructive-background-default)"
  },
  "colors.colorPalette.destructive.background.active": {
    "value": "var(--colors-color-palette-destructive-background-active)",
    "variable": "var(--colors-color-palette-destructive-background-active)"
  },
  "colors.colorPalette.destructive.background.hover": {
    "value": "var(--colors-color-palette-destructive-background-hover)",
    "variable": "var(--colors-color-palette-destructive-background-hover)"
  },
  "colors.colorPalette.destructive.foreground.default": {
    "value": "var(--colors-color-palette-destructive-foreground-default)",
    "variable": "var(--colors-color-palette-destructive-foreground-default)"
  },
  "colors.colorPalette.rating": {
    "value": "var(--colors-color-palette-rating)",
    "variable": "var(--colors-color-palette-rating)"
  },
  "colors.colorPalette.campaign.accent": {
    "value": "var(--colors-color-palette-campaign-accent)",
    "variable": "var(--colors-color-palette-campaign-accent)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar