/**
 * Olamee Design System — Border Radius Tokens
 * Derived from component measurements in the Figma file.
 */

export const radii = {
  none: '0px',
  sm: '4px',
  md: '8px',
  'md-lg': '10px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
} as const;

export type RadiiKey = keyof typeof radii;
