import { Field, Option } from 'payload';

/**
 * Shared color variant options for Payload CMS blocks
 * Based on ColorVariant type from @agapi/ui/types
 */
export const colorVariantOptions: Option[] = [
  { label: 'Default', value: 'default' },
  { label: 'Subdued', value: 'subdued' },
  { label: 'Contrast', value: 'contrast' },
  { label: 'Primary - Subdued', value: 'primary.subdued' },
  { label: 'Primary - Tonal', value: 'primary.tonal' },
  { label: 'Primary - Vibrant', value: 'primary.vibrant' },
  { label: 'Primary - Contrast', value: 'primary.contrast' },
  { label: 'Secondary - Subdued', value: 'secondary.subdued' },
  { label: 'Secondary - Tonal', value: 'secondary.tonal' },
  { label: 'Secondary - Vibrant', value: 'secondary.vibrant' },
  { label: 'Secondary - Contrast', value: 'secondary.contrast' },
  { label: 'Tertiary - Subdued', value: 'tertiary.subdued' },
  { label: 'Tertiary - Tonal', value: 'tertiary.tonal' },
  { label: 'Tertiary - Vibrant', value: 'tertiary.vibrant' },
  { label: 'Tertiary - Contrast', value: 'tertiary.contrast' },
  { label: 'Navbar - Top', value: 'navbar.top' },
  { label: 'Navbar - Base', value: 'navbar.base' },
  { label: 'Campaign', value: 'campaign' }
];

/**
 * Reusable color variant field configuration for Payload blocks
 */
export const colorVariantField: Field = {
  name: 'colorVariant',
  type: 'select',
  defaultValue: 'default',
  options: colorVariantOptions,
  admin: {
    description: 'Color variant for the section background'
  }
};

