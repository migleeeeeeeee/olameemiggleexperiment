/**
 * Olamee Design System — Token Barrel Export
 * Single import point: import { tokens } from '@/design-system/tokens'
 */

export { colors, gradients } from './colors';
export type { ColorFamily } from './colors';

export { typography, fontFamilies, fontWeights, headingScale, mobileHeadingScale, bodyScale, buttonScale, letterSpacing } from './typography';

export { spacing, spacingRaw } from './spacing';
export type { SpacingKey } from './spacing';

export { elevation } from './elevation';
export type { ElevationLevel } from './elevation';

export { radii } from './radii';
export type { RadiiKey } from './radii';

import { colors, gradients } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { elevation } from './elevation';
import { radii } from './radii';

/** Unified tokens object — the complete design system in one import */
export const tokens = {
  colors,
  gradients,
  typography,
  spacing,
  elevation,
  radii,
} as const;
