/**
 * Olamee Design System — Checkbox
 *
 * 100% Figma-faithful implementation of "Checkbox" (node 591:3834).
 *
 * Built on Radix UI Checkbox primitive.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Checkbox Component                                                    │
 * │                                                                      │
 * │ Variants (from Figma):                                               │
 * │   Property 1: Selected | Half-Selected | Unselected                  │
 * │   State:      Default  | Hovered       | Disabled                    │
 * │                                                                      │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Specs (from Figma)                                                    │
 * │   box:         18×18px, rounded-[4px]                                │
 * │   hitbox:      30×30px (6px padding around box)                      │
 * │   checked:     bg primary (#7A5FFF), white check icon               │
 * │   indeterminate: bg primary, white minus icon                        │
 * │   unchecked:   border 1.5px gunmetal-500 (#6A6D76)                  │
 * │   hovered:     circular gunmetal-100 bg behind checkbox (30px)      │
 * │   disabled:    bg gunmetal-300 (checked) / border gunmetal-300      │
 * │   label:       Karla Medium 14/18, text gunmetal                    │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '../../lib/cn';

/* ─── Icons ──────────────────────────────────────────────────────────── */

const CheckIcon = () => (
  <i className="fa-regular fa-check text-[12px]" />
);

const MinusIcon = () => (
  <i className="fa-regular fa-minus text-[12px]" />
);

/* ─── Checkbox ───────────────────────────────────────────────────────── */

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /** Label text rendered next to the checkbox */
  label?: string;
}

export const Checkbox = forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, id, disabled, checked, ...props }, ref) => {
  const checkboxId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const isIndeterminate = checked === 'indeterminate';

  return (
    <div className="flex items-center gap-[8px]">
      {/* Hover target wrapper — creates the circular hover bg (30×30px) */}
      <div
        className={cn(
          'relative flex items-center justify-center',
          'size-[30px] rounded-full',
          'transition-colors duration-150',
          !disabled && 'hover:bg-gunmetal-100',
        )}
      >
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          disabled={disabled}
          checked={checked}
          className={cn(
            'relative flex items-center justify-center',
            'size-[18px] rounded-[4px]',
            'transition-colors duration-150 overflow-clip',
            /* Unchecked state */
            'border-[1.5px] border-solid',
            disabled ? 'border-gunmetal-300' : 'border-gunmetal-500',
            /* Checked state */
            'data-[state=checked]:border-transparent',
            disabled
              ? 'data-[state=checked]:bg-gunmetal-300'
              : 'data-[state=checked]:bg-primary',
            /* Indeterminate state */
            'data-[state=indeterminate]:border-transparent',
            disabled
              ? 'data-[state=indeterminate]:bg-gunmetal-300'
              : 'data-[state=indeterminate]:bg-primary',
            /* Disabled cursor */
            'disabled:cursor-not-allowed',
            /* Focus ring */
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
            className,
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
            {isIndeterminate ? <MinusIcon /> : <CheckIcon />}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </div>
      {label && (
        <label
          htmlFor={checkboxId}
          className={cn(
            'font-body font-medium',
            'text-[length:var(--font-size-body-base)] leading-[var(--line-height-body-base)]',
            'tracking-[-0.175px]',
            'text-gunmetal cursor-pointer',
            disabled && 'cursor-not-allowed opacity-50',
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
