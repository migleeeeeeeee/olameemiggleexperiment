/**
 * Olamee Design System — Spacing Tokens
 * 8pt grid system, derived from Figma auto-layout spacing patterns.
 *
 * Usage: tokens.spacing[16] → "16px" (or 1rem)
 */

export const spacing = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  6: '6px',
  8: '8px',
  10: '10px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  80: '80px',
  96: '96px',
  128: '128px',
} as const;

/** Raw numeric values for calculations */
export const spacingRaw = {
  0: 0,
  1: 1,
  2: 2,
  4: 4,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  56: 56,
  64: 64,
  80: 80,
  96: 96,
  128: 128,
} as const;

export type SpacingKey = keyof typeof spacing;
