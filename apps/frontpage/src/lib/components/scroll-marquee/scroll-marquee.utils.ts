/**
 * Converts a token string to a CSS variable format.
 */
const token = (tokenString: string) => {
    const parsedToken = tokenString.replace(/\./g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return `var(--${parsedToken})`;
};

/**
 * Maps semantic spacing token names to their CSS variable values.
 */
export const getSpacingValue = (spacing: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | 'app') => {
    return token(`spacing.${spacing}`);
};