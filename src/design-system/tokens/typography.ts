/**
 * Olamee Design System — Typography Tokens
 * Source of truth: Figma "OLAMEE Design System" → Typography page
 *
 * Figma defines three categories:
 *   1. Headlines (Montserrat Bold) — H1 36px → H6 16px
 *   2. Body Text (Karla Regular)  — Large 16/20 → X-Small 10/12
 *   3. Button Text (Karla Bold)   — Large 16/20 → X-Small 10/14
 *
 * Desktop headings: H1–H6
 * Mobile headings: H3–H6 (no H1/H2 on mobile)
 */

export const fontFamilies = {
  /** Headings — Montserrat */
  heading: "'Montserrat', sans-serif",
  /** Body text & buttons — Karla */
  body: "'Karla', sans-serif",
  /** Code blocks */
  mono: "'JetBrains Mono', monospace",
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Desktop heading scale — mirrors Figma "D-Heading {n}" text styles exactly.
 * Font: Montserrat. Figma styles exist for Regular, SemiBold, Bold at each level.
 */
export const headingScale = {
  h1: { fontSize: 36, lineHeight: 40 },
  h2: { fontSize: 32, lineHeight: 36 },
  h3: { fontSize: 28, lineHeight: 32 },
  h4: { fontSize: 24, lineHeight: 28 },
  h5: { fontSize: 20, lineHeight: 24 },
  h6: { fontSize: 16, lineHeight: 20 },
} as const;

/**
 * Mobile heading scale — Figma Typography page "Mobile" section.
 * Starts at H3 (no mobile H1/H2 — use desktop H3/H4 as largest on mobile).
 */
export const mobileHeadingScale = {
  h3: { fontSize: 28, lineHeight: 32 },
  h4: { fontSize: 24, lineHeight: 28 },
  h5: { fontSize: 20, lineHeight: 24 },
  h6: { fontSize: 16, lineHeight: 20 },
} as const;

/**
 * Body text scale — Figma Typography page "Text Styles" section.
 * Font: Karla Regular.
 *
 *   Large:   16px / 20px line-height
 *   Base:    14px / 18px line-height
 *   Small:   12px / 14px line-height
 *   X-Small: 10px / 12px line-height
 */
export const bodyScale = {
  lg:  { fontSize: 16, lineHeight: 20 },
  base: { fontSize: 14, lineHeight: 18 },
  sm:  { fontSize: 12, lineHeight: 14 },
  xs:  { fontSize: 10, lineHeight: 12 },
} as const;

/**
 * Button text scale — Figma "Buttons V.2" component set measurements.
 * Font: Karla SemiBold (600). Letter-spacing: 0 (normal).
 *
 * Keyed by button SIZE variant (not generic t-shirt sizes) so the Button
 * component can reference --font-size-btn-{size} directly.
 *
 *   large:  18px / 24px
 *   medium: 16px / 20px
 *   small:  14px / 18px
 *   xsmall: 12px / 16px
 */
export const buttonScale = {
  lg:  { fontSize: 18, lineHeight: 24 },
  base: { fontSize: 16, lineHeight: 20 },
  sm:  { fontSize: 14, lineHeight: 18 },
  xs:  { fontSize: 12, lineHeight: 16 },
} as const;

export const letterSpacing = {
  tight: '-0.024em',   // -2.4% — NOT used on buttons (buttons use normal/0)
  normal: '0em',       // 0% — headings and body text
} as const;

export const typography = {
  fontFamilies,
  fontWeights,
  headingScale,
  mobileHeadingScale,
  bodyScale,
  buttonScale,
  letterSpacing,
} as const;
