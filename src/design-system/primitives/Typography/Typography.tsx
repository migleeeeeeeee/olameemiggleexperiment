/**
 * Olamee Design System — Typography
 *
 * Mirrors the Figma Typography page exactly:
 *
 *   Headlines (Montserrat): H1 36/40 → H6 16/20
 *     Figma styles: "D-Heading {1-6}/{Regular|Semibold|Bold}"
 *
 *   Body Text (Karla Regular): Large 16/20, Base 14/18, Small 12/14, X-Small 10/12
 *     Figma: "Text Styles" section
 *
 *   Button Text (Karla Bold): Large 16/20, Base 14/18, Small 12/16, X-Small 10/14
 *     Figma: "Button Styles" section (letter-spacing: -2.4%)
 *
 * Usage:
 *   <Text variant="h1" weight="bold">Heading</Text>
 *   <Text variant="body-base">Paragraph in Karla</Text>
 *   <Text variant="btn-sm">Small button label</Text>
 */

import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const typographyVariants = cva('', {
  variants: {
    variant: {
      /* ── Headlines — Montserrat ────────────────────────── */
      h1: 'font-heading text-[length:var(--font-size-h1)] leading-[var(--line-height-h1)]',
      h2: 'font-heading text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)]',
      h3: 'font-heading text-[length:var(--font-size-h3)] leading-[var(--line-height-h3)]',
      h4: 'font-heading text-[length:var(--font-size-h4)] leading-[var(--line-height-h4)]',
      h5: 'font-heading text-[length:var(--font-size-h5)] leading-[var(--line-height-h5)]',
      h6: 'font-heading text-[length:var(--font-size-h6)] leading-[var(--line-height-h6)]',

      /* ── Body Text — Karla Regular ─────────────────────── */
      'body-lg':   'font-body text-[length:var(--font-size-body-lg)] leading-[var(--line-height-body-lg)]',
      'body-base': 'font-body text-[length:var(--font-size-body-base)] leading-[var(--line-height-body-base)]',
      'body-sm':   'font-body text-[length:var(--font-size-body-sm)] leading-[var(--line-height-body-sm)]',
      'body-xs':   'font-body text-[length:var(--font-size-body-xs)] leading-[var(--line-height-body-xs)]',

      /* ── Button Text — Karla Bold, tight letter-spacing ── */
      'btn-lg':   'font-body font-bold text-[length:var(--font-size-btn-lg)] leading-[var(--line-height-btn-lg)] tracking-[var(--letter-spacing-tight)]',
      'btn-base': 'font-body font-bold text-[length:var(--font-size-btn-base)] leading-[var(--line-height-btn-base)] tracking-[var(--letter-spacing-tight)]',
      'btn-sm':   'font-body font-bold text-[length:var(--font-size-btn-sm)] leading-[var(--line-height-btn-sm)] tracking-[var(--letter-spacing-tight)]',
      'btn-xs':   'font-body font-bold text-[length:var(--font-size-btn-xs)] leading-[var(--line-height-btn-xs)] tracking-[var(--letter-spacing-tight)]',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-gunmetal',
      muted: 'text-gunmetal-500',
      'muted-light': 'text-gunmetal-400',
      primary: 'text-primary',
      secondary: 'text-secondary',
      destructive: 'text-red',
      success: 'text-mantis',
      warning: 'text-orange',
      info: 'text-electric',
      white: 'text-white',
      inherit: 'text-inherit',
    },
  },
  defaultVariants: {
    variant: 'body-base',
    weight: 'regular',
    color: 'default',
  },
});

/** Map variant to sensible default HTML element */
const defaultElementMap: Record<string, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'body-lg': 'p',
  'body-base': 'p',
  'body-sm': 'p',
  'body-xs': 'span',
  'btn-lg': 'span',
  'btn-base': 'span',
  'btn-sm': 'span',
  'btn-xs': 'span',
};

export interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  /** Override the rendered HTML element */
  as?: ElementType;
  children?: ReactNode;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, variant, weight, color, as, children, ...props }, ref) => {
    const Component = as ?? defaultElementMap[variant ?? 'body-base'] ?? 'p';

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, weight, color }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';

export { typographyVariants };
