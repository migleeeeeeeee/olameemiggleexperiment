/**
 * Olamee Design System — Textarea (Multi-Line Text Field)
 *
 * Mirrors Figma "Multi-Line Text Fields" component set (node 666:38904).
 *
 * Variants:
 *   Size: extraSmall, small (default)
 *   Type: regular, bottomRichText, topRichText
 *   States: default, selected (focused), filled, invalid, disabled
 *
 * Specs from Figma:
 *   min-h=132px, min-w=280px, rounded-12, p=12
 *   bg=#FDFDFE, border default=#B2B4BA, border selected=#6A6D76, border invalid=#D62839
 *   Placeholder: "Write here" in #8D8F97 Karla Regular 14px
 *   Text: #30343F Karla Regular 14px
 *   Label xs: 14px/-0.175px, label sm: 16px/20px
 *
 * Figma node: 666:38904
 */

import {
  forwardRef,
  type TextareaHTMLAttributes,
  type ReactNode,
  useState,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  CVA — Textarea container (the border box)                    */
/* ────────────────────────────────────────────────────────────── */
const textareaFieldVariants = cva(
  [
    'flex w-full items-start',
    'bg-[#FDFDFE] border border-solid',
    'overflow-clip',
    'transition-colors duration-150',
    'p-[12px]',
    'min-w-[280px]',
    'rounded-[12px]',
  ],
  {
    variants: {
      textareaSize: {
        extraSmall: ['min-h-[132px]'],
        small: ['min-h-[132px]'],
      },
    },
    defaultVariants: {
      textareaSize: 'extraSmall',
    },
  },
);

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaFieldVariants> {
  /** Top label text */
  label?: string;
  /** Show an icon next to the label */
  labelIcon?: ReactNode;
  /** Supporting / helper text below the textarea */
  supportingText?: string;
  /** Error message — sets invalid border + red supporting text */
  errorMessage?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      textareaSize = 'extraSmall',
      label,
      labelIcon,
      supportingText,
      errorMessage,
      disabled,
      id,
      onFocus,
      onBlur,
      placeholder = 'Write here',
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    const isInvalid = !!errorMessage;
    const isDisabled = !!disabled;
    const isExtraSmall = textareaSize === 'extraSmall';

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

    // ── Supporting text size per size ──
    const supportingTextClasses = isExtraSmall
      ? 'text-[10px] leading-[12px]'
      : 'text-[12px] leading-[14px]';

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

        {/* ── Textarea container ── */}
        <div className="relative flex flex-col gap-[4px] items-start w-full">
          <div
            className={cn(
              textareaFieldVariants({ textareaSize }),
              borderColor,
              isDisabled && 'opacity-50 cursor-not-allowed',
            )}
          >
            {/* Actual textarea */}
            <textarea
              ref={ref}
              id={inputId}
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
                'flex-1 w-full min-w-0 bg-transparent outline-none resize-y',
                'font-body font-normal text-[#30343F]',
                'text-[14px] leading-[18px]',
                'placeholder:text-[#8D8F97] placeholder:font-normal',
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

Textarea.displayName = 'Textarea';

export { textareaFieldVariants };
