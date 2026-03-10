/**
 * Olamee Design System — Token Type Definitions
 */

import type { colors } from '../tokens/colors';
import type { elevation } from '../tokens/elevation';
import type { radii } from '../tokens/radii';
import type { spacing } from '../tokens/spacing';
import type { typography } from '../tokens/typography';

/** Full token tree type */
export type Tokens = {
  colors: typeof colors;
  typography: typeof typography;
  spacing: typeof spacing;
  elevation: typeof elevation;
  radii: typeof radii;
};

/** Color shade keys (varies by family — some have 'base', 'lightest', etc.) */
export type ColorShade = '50' | '100' | '200' | '300' | 'base' | '500' | '600' | '700' | '800';

/** Heading levels matching Figma D-Heading 1–6 */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/** Body size scale */
export type BodySize = 'lg' | 'base' | 'sm' | 'xs';

/** Font weight names matching Figma style suffixes */
export type FontWeight = 'regular' | 'semibold' | 'bold';
