/**
 * Olamee Design System — IconButton
 *
 * Mirrors Figma "Icon Buttons V.2" component set (node 402:947).
 * Square button with only an icon — no text label.
 *
 * Figma specs:
 *   Size Extra Small:  24×24, rounded-[8px],  icon wrapper 16×16 (inner icon 12×12)
 *   Size Small:        36×36, rounded-[10px], icon wrapper 20×20 (inner icon 16×16)
 *   Size Medium:       48×48, rounded-[12px], icon wrapper 24×24 (inner icon 20×20)
 *   Size Large:        56×56, rounded-[12px], icon wrapper 32×32 (inner icon 28×28)
 *
 *   Hierarchy × ColorScheme:
 *     Primary:   violet, mint, dark, destructive
 *     Secondary: violet, mint, dark, destructive
 *     Tertiary:  violet, mint, dark, destructive
 *     Tonal:     violet, mint, dark, destructive
 */

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const iconButtonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    'whitespace-nowrap select-none',
  ],
  {
    variants: {
      hierarchy: {
        primary: '',
        secondary: 'border',
        tertiary: 'bg-transparent',
        tonal: '',
      },
      size: {
        xs: 'size-6 rounded-[var(--radius-md)]',       // 24×24, 8px radius
        sm: 'size-9 rounded-[var(--radius-md-lg)]',     // 36×36, 10px radius
        md: 'size-12 rounded-[var(--radius-lg)]',       // 48×48, 12px radius
        lg: 'size-14 rounded-[var(--radius-lg)]',       // 56×56, 12px radius
      },
      colorScheme: {
        violet: '',
        mint: '',
        dark: '',
        destructive: '',
      },
    },
    compoundVariants: [
      /* ═══ PRIMARY ══════════════════════════════════════ */
      {
        hierarchy: 'primary',
        colorScheme: 'violet',
        className: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
      },
      {
        hierarchy: 'primary',
        colorScheme: 'mint',
        className: 'bg-secondary text-gunmetal hover:bg-secondary-500 active:bg-secondary-600',
      },
      {
        hierarchy: 'primary',
        colorScheme: 'dark',
        className: 'bg-space-cadet text-[#F1F5FF] hover:bg-space-cadet-500 active:bg-space-cadet-600',
      },
      {
        hierarchy: 'primary',
        colorScheme: 'destructive',
        className: 'bg-red text-white hover:bg-red-600 active:bg-red-700',
      },

      /* ═══ SECONDARY ════════════════════════════════════ */
      {
        hierarchy: 'secondary',
        colorScheme: 'violet',
        className: 'border-gunmetal-300 text-gunmetal bg-transparent hover:bg-gunmetal-100 active:bg-gunmetal-300',
      },
      {
        hierarchy: 'secondary',
        colorScheme: 'mint',
        className: 'border-gunmetal-300 text-gunmetal bg-transparent hover:bg-gunmetal-100 active:bg-gunmetal-300',
      },
      {
        hierarchy: 'secondary',
        colorScheme: 'dark',
        className: 'border-gunmetal-300 text-gunmetal bg-transparent hover:bg-gunmetal-100 active:bg-gunmetal-300',
      },
      {
        hierarchy: 'secondary',
        colorScheme: 'destructive',
        className: 'border-red text-red bg-transparent hover:bg-red-50 active:bg-red active:text-white',
      },

      /* ═══ TERTIARY ═════════════════════════════════════ */
      {
        hierarchy: 'tertiary',
        colorScheme: 'violet',
        className: 'text-primary-500 hover:bg-primary-50 active:bg-primary-100',
      },
      {
        hierarchy: 'tertiary',
        colorScheme: 'mint',
        className: 'text-secondary hover:bg-secondary-50 active:bg-secondary-100',
      },
      {
        hierarchy: 'tertiary',
        colorScheme: 'dark',
        className: 'text-gunmetal hover:bg-gunmetal-50 active:bg-gunmetal-100',
      },
      {
        hierarchy: 'tertiary',
        colorScheme: 'destructive',
        className: 'text-red hover:bg-red-50 active:bg-red-100',
      },

      /* ═══ TONAL ════════════════════════════════════════ */
      {
        hierarchy: 'tonal',
        colorScheme: 'violet',
        className: 'bg-primary-50 text-primary-800 hover:bg-primary-100 active:bg-primary-200',
      },
      {
        hierarchy: 'tonal',
        colorScheme: 'mint',
        className: 'bg-secondary-50 text-gunmetal hover:bg-secondary-100 active:bg-secondary-200',
      },
      {
        hierarchy: 'tonal',
        colorScheme: 'dark',
        className: 'bg-space-cadet-50 text-gunmetal hover:bg-space-cadet-100 active:bg-space-cadet-200',
      },
      {
        hierarchy: 'tonal',
        colorScheme: 'destructive',
        className: 'bg-red-50 text-red hover:bg-red-100 active:bg-red-200',
      },
    ],
    defaultVariants: {
      hierarchy: 'primary',
      size: 'md',
      colorScheme: 'violet',
    },
  },
);

/* Disabled styles matching Figma disabled state */
const disabledStyles =
  'disabled:bg-gunmetal-100 disabled:text-gunmetal-400 disabled:opacity-75 disabled:border-transparent disabled:pointer-events-none disabled:shadow-none';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof iconButtonVariants> {
  /** The icon to render inside the button */
  icon: ReactNode;
  /** Required accessible label */
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, hierarchy, size, colorScheme, icon, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(iconButtonVariants({ hierarchy, size, colorScheme }), disabledStyles, className)}
      {...props}
    >
      {icon}
    </button>
  ),
);

IconButton.displayName = 'IconButton';

export { iconButtonVariants };
