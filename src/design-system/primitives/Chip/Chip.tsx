/**
 * Olamee Design System — Chip
 *
 * Figma-faithful implementation of "Chips" (node 687:6476).
 *
 * Two sub-components:
 *  1. Chip — General-purpose chip for selections, inputs, filters
 *  2. FilterChip — Exclusively for filter UI (smaller, with dropdown + badge)
 *
 * Chip Variant Axes (Figma):
 *  state:     Enabled / Hovered / Focus  (CSS pseudo-classes)
 *  selected:  Yes / No
 *  boolean slots: w/ Checkbox, w/ Radio Button, Profile Picture, w/ Lead Icon, w/ X Button
 *
 * Chip Specs:
 *  Default: px-12 py-8 gap-10 r-8 clip (~34px height)
 *  Small:   px-12 py-6 gap-10 r-8 clip (~30px height)
 *  Font: Karla Medium 14/18, tracking -0.175px, text gunmetal (#30343F)
 *
 *  Enabled+Unselected: bg #FDFDFE (lavender-50), border 1px #B2B4BA (gunmetal-300)
 *  Hovered+Unselected: bg #EFF0F3 (gunmetal-100), border 1px gunmetal-300
 *  Focus+Unselected:   ring 1.5px gunmetal-500, offset 2px; bg gunmetal-100
 *  Enabled+Selected:   bg #E1DBFF (primary-100), NO border
 *  Hovered+Selected:   bg #C2B7FF (primary-200), NO border
 *  Focus+Selected:     ring 1.5px gunmetal-500, offset 2px; bg primary-200
 *
 * FilterChip Specs:
 *  px-8  py-5  gap-10  r-8
 *  Font: Karla Medium 14/18, tracking -0.175px
 *  Enabled+Unselected: bg lavender-50, border 1px gunmetal-300
 *  Selected:           bg primary-100, NO border
 *  Error:              bg lavender-50, border 1px red
 *  Focus:              ring 1.5px gunmetal-500, offset 2px
 *  Number badge:       bg primary-600, rounded-full, text 10px
 *  Slots: leadIcon (chevron), numberBadge, trailIcon (x)
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

/* ─── General Chip ─────────────────────────────────────────────── */

const chipVariants = cva(
  [
    'inline-flex items-center justify-center gap-[10px]',
    'rounded-[8px] overflow-hidden',
    'font-body font-medium',
    'text-[length:14px] leading-[18px] tracking-[-0.175px]',
    'text-gunmetal',
    'transition-colors duration-150 select-none',
    'cursor-pointer whitespace-nowrap',
    'focus-visible:outline-none',
    'focus-visible:ring-[1.5px] focus-visible:ring-gunmetal-500 focus-visible:ring-offset-[2px]',
  ],
  {
    variants: {
      selected: {
        false: [
          'bg-lavender-50 border border-solid border-gunmetal-300',
          'hover:bg-gunmetal-100',
          'focus-visible:bg-gunmetal-100',
        ],
        true: [
          'bg-primary-100 border-0',
          'hover:bg-primary-200',
          'focus-visible:bg-primary-200',
        ],
      },
      size: {
        default: 'px-[12px] py-[8px]',
        small: 'px-[12px] py-[6px]',
      },
    },
    defaultVariants: {
      selected: false,
      size: 'default',
    },
  },
);

export interface ChipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof chipVariants> {
  /** Show a checkbox indicator */
  showCheckbox?: boolean;
  /** Show a radio-button indicator */
  showRadio?: boolean;
  /** Avatar / profile picture element */
  avatar?: ReactNode;
  /** Icon before the label */
  leadIcon?: ReactNode;
  /** Show dismiss (x) button — fires when x is clicked */
  onDismiss?: () => void;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      selected,
      size,
      showCheckbox = false,
      showRadio = false,
      avatar,
      leadIcon,
      onDismiss,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="option"
      aria-selected={!!selected}
      tabIndex={0}
      className={cn(chipVariants({ selected, size }), className)}
      {...props}
    >
      {/* Checkbox indicator (18x18, r-4) */}
      {showCheckbox && (
        <span
          className={cn(
            'flex shrink-0 items-center justify-center size-[18px] rounded-[4px]',
            selected
              ? 'bg-primary'
              : 'border border-solid border-gunmetal-300 bg-lavender-50',
          )}
          aria-hidden="true"
        >
          {selected && (
            <i className="fa-regular fa-check text-[12px] text-[#FDFDFE]" />
          )}
        </span>
      )}

      {/* Radio indicator (20x20 outer, 1.5px border, r-full) */}
      {showRadio && (
        <span
          className={cn(
            'flex shrink-0 items-center justify-center size-[20px] rounded-full',
            selected
              ? 'border-[1.5px] border-solid border-primary'
              : 'border-[1.5px] border-solid border-gunmetal-300',
          )}
          aria-hidden="true"
        >
          {selected && (
            <span className="size-[8px] rounded-full bg-primary" />
          )}
        </span>
      )}

      {/* Avatar (18x18, r-full) */}
      {avatar && (
        <span className="flex shrink-0 items-center size-[18px] overflow-hidden rounded-full">
          {avatar}
        </span>
      )}

      {/* Lead icon (16x16) */}
      {leadIcon && (
        <span className="flex shrink-0 items-center justify-center size-[16px]">
          {leadIcon}
        </span>
      )}

      {/* Label */}
      <span>{children}</span>

      {/* Dismiss (x) button (16x16) */}
      {onDismiss && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          className="flex shrink-0 items-center justify-center size-[16px] rounded-full hover:bg-black/10"
          aria-label="Remove"
        >
          <i className="fa-regular fa-xmark text-[10px]" />
        </button>
      )}
    </div>
  ),
);

Chip.displayName = 'Chip';

/* ─── Filter Chip ──────────────────────────────────────────────── */

const filterChipVariants = cva(
  [
    'inline-flex items-center gap-[10px]',
    'px-[8px] py-[5px]',
    'rounded-[8px] overflow-hidden',
    'font-body font-medium',
    'text-[length:14px] leading-[18px] tracking-[-0.175px]',
    'text-gunmetal',
    'transition-colors duration-150 select-none',
    'cursor-pointer whitespace-nowrap',
    'focus-visible:outline-none',
    'focus-visible:ring-[1.5px] focus-visible:ring-gunmetal-500 focus-visible:ring-offset-[2px]',
  ],
  {
    variants: {
      selected: {
        false: [
          'bg-lavender-50 border border-solid border-gunmetal-300',
          'hover:bg-gunmetal-100',
          'focus-visible:bg-gunmetal-100',
        ],
        true: [
          'bg-primary-100 border-0',
          'hover:bg-primary-200',
          'focus-visible:bg-primary-200',
        ],
      },
      error: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        selected: false,
        error: true,
        className: 'border-red bg-lavender-50 hover:bg-red-50',
      },
    ],
    defaultVariants: {
      selected: false,
      error: false,
    },
  },
);

export interface FilterChipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof filterChipVariants> {
  /** Icon before the label (typically a chevron-down) */
  leadIcon?: ReactNode;
  /** Numeric badge count */
  count?: number;
  /** Icon after the label (typically an x/close) */
  trailIcon?: ReactNode;
  /** Dismiss handler for the trail icon */
  onDismiss?: () => void;
}

export const FilterChip = forwardRef<HTMLDivElement, FilterChipProps>(
  (
    {
      className,
      selected,
      error,
      leadIcon,
      count,
      trailIcon,
      onDismiss,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="option"
      aria-selected={!!selected}
      tabIndex={0}
      className={cn(filterChipVariants({ selected, error }), className)}
      {...props}
    >
      {/* Lead icon (chevron) */}
      {leadIcon && (
        <span className="flex shrink-0 items-center justify-center size-[16px]">
          {leadIcon}
        </span>
      )}

      {/* Label + optional count badge */}
      <span className="inline-flex items-center gap-[4px]">
        <span>{children}</span>
        {count != null && count > 0 && (
          <span className="inline-flex items-center justify-center min-w-[13px] h-[13px] px-[4.5px] py-px rounded-full bg-primary-600 text-lavender-50 text-[length:10px] leading-[16px] font-body tracking-[-0.125px]">
            {count}
          </span>
        )}
      </span>

      {/* Trail icon (x / dismiss) */}
      {(trailIcon || onDismiss) && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss?.();
          }}
          className="flex shrink-0 items-center justify-center size-[16px] rounded-full hover:bg-black/10"
          aria-label="Remove"
        >
          {trailIcon ?? (
            <i className="fa-regular fa-xmark text-[10px]" />
          )}
        </button>
      )}
    </div>
  ),
);

FilterChip.displayName = 'FilterChip';

export { chipVariants, filterChipVariants };
