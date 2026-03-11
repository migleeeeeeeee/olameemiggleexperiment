/**
 * Olamee Design System — Input (Single Line Text Field)
 *
 * Mirrors Figma "Single Line Text Fields" component set (node 666:38806).
 *
 * Variants:
 *   Size: extraSmall (36px), small (48px), medium (56px)
 *   States: default, selected (focused), filled, invalid, disabled
 *
 * Features: top label (with optional icon), supporting text, error message,
 *           leading icon, trailing icon.
 *
 * Figma node: 666:38806
 * Inner input: "Input Field Main" (666:40463)
 */

import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useState,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  CVA — Input field container (the border box)                 */
/* ────────────────────────────────────────────────────────────── */
const inputFieldVariants = cva(
  [
    'flex w-full items-center',
    'bg-[#FDFDFE] border border-solid',
    'overflow-clip',
    'transition-colors duration-150',
    'gap-[10px]',
    'px-[12px] py-[4px]',
  ],
  {
    variants: {
      inputSize: {
        extraSmall: [
          'h-[36px] min-h-[36px] min-w-[180px] rounded-[8px]',
        ],
        small: [
          'h-[48px] min-h-[48px] min-w-[280px] rounded-[10px]',
        ],
        medium: [
          'h-[56px] min-h-[56px] min-w-[280px] rounded-[12px]',
        ],
      },
    },
    defaultVariants: {
      inputSize: 'extraSmall',
    },
  },
);

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputFieldVariants> {
  /** Top label text */
  label?: string;
  /** Show an icon next to the label */
  labelIcon?: ReactNode;
  /** Supporting / helper text below the input */
  supportingText?: string;
  /** Error message — sets invalid border + red supporting text */
  errorMessage?: string;
  /** Icon/element at the start of the input */
  leadIcon?: ReactNode;
  /** Icon/element at the end of the input */
  trailIcon?: ReactNode;
  /** Leading text (e.g. currency symbol) */
  leadText?: string;
  /** Trailing text (e.g. unit) */
  trailText?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputSize = 'extraSmall',
      label,
      labelIcon,
      supportingText,
      errorMessage,
      leadIcon,
      trailIcon,
      leadText,
      trailText,
      disabled,
      id,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    const isInvalid = !!errorMessage;
    const isDisabled = !!disabled;
    const isExtraSmall = inputSize === 'extraSmall';

    // ── Border color by state ──
    const borderColor = isInvalid
      ? 'border-[#D62839]'         // Red/red-base
      : focused
        ? 'border-[#6A6D76]'       // Gunmetal/gunmetal-500 (Selected)
        : 'border-[#B2B4BA]';      // Gunmetal/gunmetal-300 (Default)

    // ── Label typography per size ──
    const labelClasses = isExtraSmall
      ? 'text-[14px] leading-[18px] tracking-[-0.175px]'
      : 'text-[16px] leading-[20px]';

    // ── Label icon size per size ──
    const labelIconSize = isExtraSmall ? 'size-[16px]' : 'size-[20px]';

    // ── Input text size per size ──
    const inputTextClasses = isExtraSmall
      ? 'text-[14px] leading-[18px]'
      : 'text-[16px] leading-[20px]';

    // ── Supporting text size per size ──
    const supportingTextClasses = isExtraSmall
      ? 'text-[10px] leading-[12px]'
      : 'text-[12px] leading-[14px]';

    // ── Trailing icon size per size ──
    const trailIconSize = isExtraSmall ? 'size-[20px]' : 'size-[20px]';

    return (
      <div className={cn('flex flex-col gap-[8px] items-start w-full', className)}>
        {/* ── Label row ── */}
        {label && (
          <div
            className={cn(
              'flex items-center w-full',
              isExtraSmall ? 'gap-[4px]' : 'gap-[8px]',
            )}
          >
            {labelIcon && (
              <span
                className={cn(
                  'inline-flex items-center justify-center p-[2px] shrink-0',
                  labelIconSize,
                )}
              >
                {labelIcon}
              </span>
            )}
            <label
              htmlFor={inputId}
              className={cn(
                'font-body font-medium text-[#30343F] whitespace-nowrap',
                labelClasses,
              )}
            >
              {label}
            </label>
          </div>
        )}

        {/* ── Input container ── */}
        <div className="relative flex flex-col gap-[4px] items-start w-full">
          <div
            className={cn(
              inputFieldVariants({ inputSize }),
              borderColor,
              isDisabled && 'opacity-50 cursor-not-allowed',
            )}
          >
            {/* Leading text */}
            {leadText && (
              <span className="shrink-0 font-body font-normal text-[#8D8F97] text-[12px] leading-[14px]">
                {leadText}
              </span>
            )}

            {/* Leading icon */}
            {leadIcon && (
              <span className="inline-flex items-center justify-center p-[2px] shrink-0 size-[20px]">
                {leadIcon}
              </span>
            )}

            {/* Actual input */}
            <input
              ref={ref}
              id={inputId}
              disabled={disabled}
              onFocus={(e) => {
                setFocused(true);
                onFocus?.(e);
              }}
              onBlur={(e) => {
                setFocused(false);
                onBlur?.(e);
              }}
              className={cn(
                'flex-1 min-w-0 bg-transparent outline-none',
                'font-body font-normal text-[#30343F]',
                'placeholder:text-[#8D8F97] placeholder:font-normal',
                inputTextClasses,
                'text-ellipsis overflow-hidden whitespace-nowrap',
                isDisabled && 'cursor-not-allowed',
              )}
              aria-invalid={isInvalid || undefined}
              aria-describedby={
                errorMessage
                  ? `${inputId}-error`
                  : supportingText
                    ? `${inputId}-helper`
                    : undefined
              }
              {...props}
            />

            {/* Trailing icon */}
            {trailIcon && (
              <span
                className={cn(
                  'inline-flex items-center justify-center p-[2px] shrink-0',
                  trailIconSize,
                )}
              >
                {trailIcon}
              </span>
            )}

            {/* Trailing text */}
            {trailText && (
              <span className="shrink-0 font-body font-normal text-[#8D8F97] text-[12px] leading-[14px]">
                {trailText}
              </span>
            )}
          </div>

          {/* ── Supporting / Error text ── */}
          {errorMessage && (
            <p
              id={`${inputId}-error`}
              role="alert"
              className={cn(
                'pl-[12px] font-body font-normal text-[#D62839]',
                supportingTextClasses,
              )}
            >
              {errorMessage}
            </p>
          )}
          {!errorMessage && supportingText && (
            <p
              id={`${inputId}-helper`}
              className={cn(
                'pl-[12px] font-body font-normal text-[#6A6D76]',
                supportingTextClasses,
              )}
            >
              {supportingText}
            </p>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';

export { inputFieldVariants };
