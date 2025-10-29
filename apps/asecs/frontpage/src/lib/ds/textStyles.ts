import { defineTextStyles } from "@pandacss/dev";
import { mobileFontSizeScale } from "@agapi/ui/panda/utils"
import { desktopFontSizeScale } from "@agapi/ui/panda/utils"

export const textStyles = defineTextStyles({
    body: {
        description: 'The body text style - used in paragraphs',
        value: {
            fontFamily: 'var(--font-body)',
            fontWeight: 'regular',
            lineHeight: '1.5',
            fontSize: {
                base: mobileFontSizeScale(0),
                lg: desktopFontSizeScale(0),
            },
        }
    },
    h1: {
        value: {
            fontSize: {
                base: mobileFontSizeScale(6),
                lg: desktopFontSizeScale(6),
            },
            fontFamily: 'var(--font-display)',
            lineHeight: '0.9',
            fontWeight: '800'
        }
    },
    h2: {
        value: {
            fontSize: {
                base: mobileFontSizeScale(5),
                lg: desktopFontSizeScale(5),
            },
            fontFamily: 'var(--font-display)',
            lineHeight: '0.9',
            fontWeight: '800'
        }
    },
    h3: {
        value: {
            fontSize: {
                base: mobileFontSizeScale(4),
                lg: desktopFontSizeScale(4),
            },
            fontFamily: 'var(--font-display)',
            lineHeight: '0.9',
            fontWeight: '800'
        }
    },
    h4: {
        value: {
            fontSize: {
                base: mobileFontSizeScale(3),
                lg: desktopFontSizeScale(3),
            },
            fontFamily: 'var(--font-display)',
            lineHeight: '0.9',
            fontWeight: '800'
        }
    },
    h5: {
        value: {
            fontSize: {
                base: mobileFontSizeScale(2),
                lg: desktopFontSizeScale(2),
            },
            fontFamily: 'var(--font-display)',
            lineHeight: '0.9',
            fontWeight: '800'
        }
    },
    h6: {
        value: {
            fontSize: {
                base: mobileFontSizeScale(1),
                lg: desktopFontSizeScale(1),
            },
            fontFamily: 'var(--font-display)',
            lineHeight: '0.9',
            fontWeight: '800'
        }
    }
});