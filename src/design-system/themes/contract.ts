/**
 * Olamee Design System — CSS Variable Contract
 *
 * This file defines ALL CSS custom property names used across the system.
 * The ThemeProvider injects values for these properties from the token layer.
 * Tailwind references them via @theme in the CSS file.
 *
 * If you change a token value in tokens/*.ts → the CSS var updates → the UI updates.
 */

import { colors, gradients } from '../tokens/colors';
import { elevation } from '../tokens/elevation';
import { fontWeights, headingScale, bodyScale, buttonScale, letterSpacing } from '../tokens/typography';
import { spacing } from '../tokens/spacing';
import { radii } from '../tokens/radii';

type CSSVarMap = Record<string, string>;

/** Flatten color families into --color-{family}-{shade} vars */
function buildColorVars(): CSSVarMap {
  const vars: CSSVarMap = {};

  for (const [family, shades] of Object.entries(colors)) {
    if (typeof shades === 'string') {
      // Simple values like white, black
      vars[`--color-${family}`] = shades;
      continue;
    }
    for (const [shade, hex] of Object.entries(shades)) {
      const key = shade === 'base' ? `--color-${family}` : `--color-${family}-${shade}`;
      vars[key] = hex;
    }
  }

  vars['--gradient-brand'] = gradients.brand;
  return vars;
}

function buildTypographyVars(): CSSVarMap {
  const vars: CSSVarMap = {};

  // Font families are hardcoded in @theme (index.css) since they don't change per theme.
  // Tailwind's --font-* namespace generates font-heading / font-body utility classes directly.

  // Font weights
  vars['--font-weight-regular'] = String(fontWeights.regular);
  vars['--font-weight-medium'] = String(fontWeights.medium);
  vars['--font-weight-semibold'] = String(fontWeights.semibold);
  vars['--font-weight-bold'] = String(fontWeights.bold);

  // Heading scale (Montserrat)
  for (const [level, values] of Object.entries(headingScale)) {
    vars[`--font-size-${level}`] = `${values.fontSize}px`;
    vars[`--line-height-${level}`] = `${values.lineHeight}px`;
  }

  // Body scale (Karla)
  for (const [size, values] of Object.entries(bodyScale)) {
    vars[`--font-size-body-${size}`] = `${values.fontSize}px`;
    vars[`--line-height-body-${size}`] = `${values.lineHeight}px`;
  }

  // Button scale (Karla Bold)
  for (const [size, values] of Object.entries(buttonScale)) {
    vars[`--font-size-btn-${size}`] = `${values.fontSize}px`;
    vars[`--line-height-btn-${size}`] = `${values.lineHeight}px`;
  }

  // Letter spacing
  vars['--letter-spacing-tight'] = letterSpacing.tight;
  vars['--letter-spacing-normal'] = letterSpacing.normal;

  return vars;
}

function buildSpacingVars(): CSSVarMap {
  const vars: CSSVarMap = {};
  for (const [key, value] of Object.entries(spacing)) {
    vars[`--spacing-${key}`] = value;
  }
  return vars;
}

function buildElevationVars(): CSSVarMap {
  const vars: CSSVarMap = {};
  for (const [level, value] of Object.entries(elevation)) {
    vars[`--shadow-elevation-${level}`] = value;
  }
  return vars;
}

function buildRadiiVars(): CSSVarMap {
  const vars: CSSVarMap = {};
  for (const [key, value] of Object.entries(radii)) {
    vars[`--radius-${key}`] = value;
  }
  return vars;
}

/** Build the complete light theme variable map */
export function buildLightTheme(): CSSVarMap {
  return {
    ...buildColorVars(),
    ...buildTypographyVars(),
    ...buildSpacingVars(),
    ...buildElevationVars(),
    ...buildRadiiVars(),
  };
}

/** Pre-built light theme (default) */
export const lightThemeVars = buildLightTheme();
