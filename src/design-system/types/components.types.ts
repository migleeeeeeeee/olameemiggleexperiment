/**
 * Olamee Design System — Shared Component Types
 * Maps directly to Figma variant properties.
 */

/** Button hierarchy — Figma "hierarchy" variant property */
export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'tonal';

/** Button size — Figma "size" variant property */
export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large';

/** Button color scheme — Figma "Color" variant property */
export type ButtonColorScheme = 'violet' | 'mint' | 'dark' | 'destructive' | 'ai';

/** Interactive state — Figma "state" variant property */
export type InteractiveState = 'default' | 'hover' | 'active' | 'disabled' | 'loading';

/** Common size scale for non-button components */
export type ComponentSize = 'sm' | 'md' | 'lg';

/** Orientation for layouts */
export type Orientation = 'horizontal' | 'vertical';
