/**
 * Olamee Design System — Date Picker Input
 *
 * Mirrors Figma "Top Label - Date Picker" (666:39026)
 * and "Side Label - Date Picker" (666:41465).
 *
 * Variants:
 *   Size: extraSmall (36px), small (48px), medium (56px)
 *   Label position: top (default), side (horizontal)
 *   States: default, selected (focused), filled, invalid, disabled
 *
 * Specs from Figma:
 *   extraSmall: h=36, rounded-8, pl=12 pr=8, gap=8
 *   small: h=48, rounded-10, p=12, gap=8
 *   medium: h=56, rounded-12, p=12, gap=8
 *   Calendar icon: 16px (xs), 20px (sm/md)
 *   Border default: #B2B4BA, selected: #6A6D76, invalid: #D62839
 *   Placeholder: "mm/dd/yyyy" in #8D8F97
 *   Filled text: "08/18/2025" in #30343F font-medium
 *   Supporting text: "MM/DD/YYYY" format hint
 *
 * Figma nodes: 666:39026, 666:41465
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
/*  Calendar SVG icon (matching Figma)                           */
/* ────────────────────────────────────────────────────────────── */
const CalendarIcon = ({ size = 16 }: { size?: number }) => (
  <i className={`fa-regular fa-calendar text-[${size}px] text-[#8D8F97]`} style={{ fontSize: size }} />
);

/* ────────────────────────────────────────────────────────────── */
/*  CVA — Date picker input container                            */
/* ────────────────────────────────────────────────────────────── */
const datePickerInputVariants = cva(
  [
    'flex w-full items-center',
    'bg-[#FDFDFE] border border-solid',
    'overflow-clip',
    'transition-colors duration-150',
    'gap-[8px]',
  ],
  {
    variants: {
      inputSize: {
        extraSmall: [
          'h-[36px] min-h-[36px] min-w-[180px] rounded-[8px]',
          'pl-[12px] pr-[8px] py-[4px]',
        ],
        small: [
          'h-[48px] min-h-[48px] min-w-[280px] rounded-[10px]',
          'px-[12px] py-[4px]',
        ],
        medium: [
          'h-[56px] min-h-[56px] min-w-[280px] rounded-[12px]',
          'px-[12px] py-[4px]',
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
export interface DatePickerInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof datePickerInputVariants> {
  /** Top or side label text */
  label?: string;
  /** Show an icon next to the label */
  labelIcon?: ReactNode;
  /** Label position: 'top' (default) or 'side' (horizontal) */
  labelPosition?: 'top' | 'side';
  /** Supporting / helper text below the input */
  supportingText?: string;
  /** Error message — sets invalid border + red supporting text */
  errorMessage?: string;
  /** Format hint shown in supporting text (default: "MM/DD/YYYY") */
  formatHint?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>(
  (
    {
      className,
      inputSize = 'extraSmall',
      label,
      labelIcon,
      labelPosition = 'top',
      supportingText,
      errorMessage,
      formatHint,
      disabled,
      id,
      placeholder = 'mm/dd/yyyy',
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
    const isSideLabel = labelPosition === 'side';

    // ── Border color by state ──
    const borderColor = isInvalid
      ? 'border-[#D62839]'
      : focused
        ? 'border-[#6A6D76]'
        : 'border-[#B2B4BA]';

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

    // ── Calendar icon size ──
    const calendarIconSize = isExtraSmall ? 16 : 20;

    // ── Effective supporting text ──
    const effectiveSupportingText = supportingText ?? (formatHint || 'MM/DD/YYYY');

    // ── Label element ──
    const labelElement = label ? (
      <div
        className={cn(
          'flex items-center',
          isExtraSmall ? 'gap-[4px]' : 'gap-[8px]',
          isSideLabel ? 'shrink-0' : 'w-full',
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
    ) : null;

    // ── Input field ──
    const inputField = (
      <div className="relative flex flex-col gap-[4px] items-start w-full">
        <div
          className={cn(
            datePickerInputVariants({ inputSize }),
            borderColor,
            isDisabled && 'opacity-50 cursor-not-allowed',
          )}
        >
          {/* Calendar icon */}
          <span
            className={cn(
              'inline-flex items-center justify-center shrink-0',
              isExtraSmall ? 'size-[16px]' : 'size-[20px]',
            )}
          >
            <CalendarIcon size={calendarIconSize} />
          </span>

          {/* Date input */}
          <input
            ref={ref}
            id={inputId}
            type="text"
            disabled={disabled}
            placeholder={placeholder}
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
                : `${inputId}-helper`
            }
            {...props}
          />

          {/* Format hint shown inside input when focused (side label variant) */}
          {isSideLabel && focused && !isInvalid && (
            <span className="shrink-0 font-body font-normal text-[#8D8F97] text-[10px] leading-[12px]">
              {formatHint || 'MM/DD/YYYY'}
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
        {!errorMessage && (
          <p
            id={`${inputId}-helper`}
            className={cn(
              'pl-[12px] font-body font-normal text-[#6A6D76]',
              supportingTextClasses,
            )}
          >
            {effectiveSupportingText}
          </p>
        )}
      </div>
    );

    // ── Render based on label position ──
    if (isSideLabel) {
      return (
        <div className={cn('flex items-start gap-[8px] w-full', className)}>
          {labelElement}
          {inputField}
        </div>
      );
    }

    return (
      <div className={cn('flex flex-col gap-[8px] items-start w-full', className)}>
        {labelElement}
        {inputField}
      </div>
    );
  },
);

DatePickerInput.displayName = 'DatePickerInput';

export { datePickerInputVariants };
