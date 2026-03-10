/**
 * Olamee Design System — Button
 *
 * 100 % Figma-faithful implementation of "Buttons V.2" (node 400:1683).
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Variant Axes                                                        │
 * │  hierarchy   Primary · Secondary · Tertiary · Tonal                 │
 * │  size        xsmall (24px) · small (36px) · medium (48px)           │
 * │              · large (56px)                                         │
 * │  colorScheme violet · mint · dark · destructive · ai                │
 * │  state       handled via hover:/active:/disabled: pseudo-classes    │
 * │              + `loading` prop                                       │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Valid Hierarchy × ColorScheme combos (Figma)                        │
 * │  violet:       Primary, Secondary, Tertiary, Tonal                  │
 * │  mint:         Primary, Tonal                                       │
 * │  dark:         Primary, Tonal                                       │
 * │  destructive:  Secondary, Tertiary                                  │
 * │  ai:           Primary, Secondary, Tertiary                         │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Size Specs (from Figma design context)                              │
 * │  xsmall: h24  px-8   gap-4  r-8   min-w-43  icon-16  12/16        │
 * │  small:  h36  px-12  gap-6  r-10  min-w-60  icon-20  14/18        │
 * │  medium: h48  px-16  gap-6  r-12  min-w-68  icon-24  16/20        │
 * │  large:  h56  px-24  gap-6  r-16  min-w-93  icon-32  18/24        │
 * │                                                                     │
 * │ Font: Karla SemiBold (600), letter-spacing 0 (normal)               │
 * │ Text color token: lavender-50 #FDFDFE (white-on-filled variants)    │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Disabled (all combos): bg #EFF0F3, text #8D8F97, opacity 0.75      │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/cn';

/* ─── CVA Variant Map ──────────────────────────────────────────────── */

const buttonVariants = cva(
  /* Base – shared across every variant */
  [
    'inline-flex items-center justify-center',
    'font-body font-semibold',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    'whitespace-nowrap select-none',
    'cursor-pointer',
  ],
  {
    variants: {
      hierarchy: {
        primary: '',
        secondary: 'border border-solid',
        tertiary: 'bg-transparent',
        tonal: '',
      },

      size: {
        /*
         * Figma pixel-perfect values:
         *   height / px / gap / border-radius / min-width / font-size / line-height
         */
        xsmall: [
          'h-[24px] min-w-[43px] px-[8px] gap-[4px] rounded-[8px]',
          'text-[length:var(--font-size-btn-xs)] leading-[var(--line-height-btn-xs)]',
        ],
        small: [
          'h-[36px] min-w-[60px] px-[12px] gap-[6px] rounded-[10px]',
          'text-[length:var(--font-size-btn-sm)] leading-[var(--line-height-btn-sm)]',
        ],
        medium: [
          'h-[48px] min-w-[68px] px-[16px] gap-[6px] rounded-[12px]',
          'text-[length:var(--font-size-btn-base)] leading-[var(--line-height-btn-base)]',
        ],
        large: [
          'h-[56px] min-w-[93px] px-[24px] gap-[6px] rounded-[16px]',
          'text-[length:var(--font-size-btn-lg)] leading-[var(--line-height-btn-lg)]',
        ],
      },

      colorScheme: {
        violet: '',
        mint: '',
        dark: '',
        destructive: '',
        ai: '',
      },
    },

    compoundVariants: [
      /* ═══════════════════════════════════════════════════════════════
       * PRIMARY
       * ═══════════════════════════════════════════════════════════════ */

      // Primary + Violet  —  bg #6F54EB → hover #6249D4 → active #513CCB, text #FDFDFE
      {
        hierarchy: 'primary',
        colorScheme: 'violet',
        className: 'bg-[#6F54EB] text-[#FDFDFE] hover:bg-[#6249D4] active:bg-[#513CCB]',
      },
      // Primary + Mint  —  bg #5ED4B2 → hover #4AC3A1 → active #3BA98B, text #30343F
      {
        hierarchy: 'primary',
        colorScheme: 'mint',
        className: 'bg-[#5ED4B2] text-[#30343F] hover:bg-[#4AC3A1] active:bg-[#3BA98B]',
      },
      // Primary + Dark  —  bg #283044 → hover #232B3D → active #1F2635, text #FDFDFE
      {
        hierarchy: 'primary',
        colorScheme: 'dark',
        className: 'bg-[#283044] text-[#FDFDFE] hover:bg-[#232B3D] active:bg-[#1F2635]',
      },
      // Primary + AI  —  gradient bg, text #FDFDFE
      {
        hierarchy: 'primary',
        colorScheme: 'ai',
        className: [
          'text-[#FDFDFE]',
          'bg-[linear-gradient(65deg,#7A5FFF_14%,#6FE3C1_94%)]',
          'hover:brightness-95 active:brightness-90',
        ],
      },

      /* ═══════════════════════════════════════════════════════════════
       * SECONDARY
       * ═══════════════════════════════════════════════════════════════ */

      // Secondary + Violet  —  border #B2B4BA, text #30343F, hover bg #EFF0F3, active bg #B2B4BA
      {
        hierarchy: 'secondary',
        colorScheme: 'violet',
        className:
          'border-[#B2B4BA] text-[#30343F] bg-transparent hover:bg-[#EFF0F3] active:bg-[#B2B4BA]',
      },
      // Secondary + Destructive  —  border #D62839, text #D62839, hover bg #FCF0F1, active bg #D62839 text white
      {
        hierarchy: 'secondary',
        colorScheme: 'destructive',
        className:
          'border-[#D62839] text-[#D62839] bg-transparent hover:bg-[#FCF0F1] active:bg-[#D62839] active:text-white',
      },
      // Secondary + AI  —  border #B2B4BA, text #30343F, hover bg #EFF0F3, active bg #B2B4BA
      {
        hierarchy: 'secondary',
        colorScheme: 'ai',
        className:
          'border-[#B2B4BA] text-[#30343F] bg-transparent hover:bg-[#EFF0F3] active:bg-[#B2B4BA]',
      },

      /* ═══════════════════════════════════════════════════════════════
       * TERTIARY
       * ═══════════════════════════════════════════════════════════════ */

      // Tertiary + Violet  —  text #30343F, hover bg #EFF0F3 (gunmetal-100), active bg #B2B4BA (gunmetal-300)
      {
        hierarchy: 'tertiary',
        colorScheme: 'violet',
        className: 'text-[#30343F] hover:bg-[#EFF0F3] active:bg-[#B2B4BA]',
      },
      // Tertiary + Destructive  —  text #D62839, hover bg #FCF0F1, active bg #F6D0D4
      {
        hierarchy: 'tertiary',
        colorScheme: 'destructive',
        className: 'text-[#D62839] hover:bg-[#FCF0F1] active:bg-[#F6D0D4]',
      },
      // Tertiary + AI  —  gradient bg, text #FDFDFE
      {
        hierarchy: 'tertiary',
        colorScheme: 'ai',
        className: [
          'text-[#FDFDFE]',
          'bg-[linear-gradient(65deg,#7A5FFF_14%,#6FE3C1_94%)]',
          'hover:brightness-95 active:brightness-90',
        ],
      },

      /* ═══════════════════════════════════════════════════════════════
       * TONAL
       * ═══════════════════════════════════════════════════════════════ */

      // Tonal + Violet  —  bg #F6F4FF, text #3E2DA3, hover #E1DBFF, active #C2B7FF
      {
        hierarchy: 'tonal',
        colorScheme: 'violet',
        className: 'bg-[#F6F4FF] text-[#3E2DA3] hover:bg-[#E1DBFF] active:bg-[#C2B7FF]',
      },
      // Tonal + Mint  —  bg #F5FDFA, text #30343F, hover #C7F2E4, active #A1E7D3
      {
        hierarchy: 'tonal',
        colorScheme: 'mint',
        className: 'bg-[#F5FDFA] text-[#30343F] hover:bg-[#C7F2E4] active:bg-[#A1E7D3]',
      },
      // Tonal + Dark  —  bg #EDEFF4, text #30343F, hover #D5D8E1, active #BCC0CD
      {
        hierarchy: 'tonal',
        colorScheme: 'dark',
        className: 'bg-[#EDEFF4] text-[#30343F] hover:bg-[#D5D8E1] active:bg-[#BCC0CD]',
      },
    ],

    defaultVariants: {
      hierarchy: 'primary',
      size: 'medium',
      colorScheme: 'violet',
    },
  },
);

/* ─── Disabled overlay ─────────────────────────────────────────────── */
// Figma disabled state: bg #EFF0F3, text #8D8F97, opacity 75 %
const disabledStyles = [
  'disabled:bg-[#EFF0F3] disabled:text-[#8D8F97] disabled:opacity-75',
  'disabled:border-transparent disabled:pointer-events-none disabled:shadow-none',
  'disabled:cursor-not-allowed',
].join(' ');

/* ─── Spinner (Figma "Loading" state) ──────────────────────────────── */
const spinnerSizeMap = {
  xsmall: 'h-3 w-3',   // 12px — matches xsmall icon wrapper inner
  small: 'h-4 w-4',    // 16px — matches small icon wrapper inner
  medium: 'h-5 w-5',   // 20px — matches medium icon wrapper inner
  large: 'h-7 w-7',    // 28px — matches large icon wrapper inner
} as const;

/* ─── Public Interface ─────────────────────────────────────────────── */

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element (Radix Slot pattern) */
  asChild?: boolean;
  /** Loading state — shows spinner, disables interaction */
  loading?: boolean;
  /** Icon before the label (Figma "Lead Icon") */
  leadIcon?: ReactNode;
  /** Icon after the label (Figma "Trailing Icon") */
  trailIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      hierarchy,
      size,
      colorScheme,
      asChild = false,
      loading = false,
      disabled,
      leadIcon,
      trailIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const resolvedSize = size ?? 'medium';

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ hierarchy, size, colorScheme }),
          disabledStyles,
          className,
        )}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {/* Lead icon slot — replaced by spinner when loading */}
        {loading ? (
          <svg
            className={cn('animate-spin shrink-0', spinnerSizeMap[resolvedSize])}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leadIcon
        )}

        {/* Text label */}
        {children}

        {/* Trailing icon slot — hidden while loading */}
        {!loading && trailIcon}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { buttonVariants };
