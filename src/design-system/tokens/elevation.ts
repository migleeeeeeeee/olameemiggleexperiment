/**
 * Olamee Design System — Elevation Tokens
 * Source of truth: Figma "OLAMEE Design System" → Shadows page
 *
 * Each elevation level uses a dual-shadow approach from the Figma file:
 *   Shadow 1: ambient (larger blur, subtle)
 *   Shadow 2: key (tight, darker)
 */

export const elevation = {
  /** Cards, banners, bottom sheets, elevated buttons/chips, nav drawers */
  1: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',

  /** App bars (scrolled), menus, nav bars, tooltips */
  2: '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',

  /** Dialogs, date/time pickers, FABs, search overlays */
  3: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',

  /** No shadow */
  none: 'none',
} as const;

export type ElevationLevel = keyof typeof elevation;
