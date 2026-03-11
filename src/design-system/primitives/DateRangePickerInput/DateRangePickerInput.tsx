/**
 * Olamee Design System — Date Range Picker Input
 *
 * Mirrors Figma "Top Label - Date Range Picker" (666:39287)
 * and "Side Label - Date Range Picker" (666:39549).
 *
 * Two date fields side-by-side with joined rounded corners.
 *
 * Variants:
 *   Size: extraSmall (36px), small (48px), medium (56px)
 *   Label position: top (default), side (horizontal)
 *   States: default, leftSelected, rightSelected, invalid, disabled
 *
 * Specs from Figma:
 *   Left field: rounded only on left (tl/bl), border on left/top/bottom
 *   Right field: rounded only on right (tr/br), full border
 *   extraSmall: h=36, rounded-8, gap=0 (joined), min-w=600
 *   small: h=48, rounded-10
 *   medium: h=56, rounded-12
 *   Calendar icon: 16px (xs), 20px (sm/md)
 *   Border default: #B2B4BA, selected: #6A6D76, invalid: #D62839
 *   Placeholder: "mm/dd/yyyy" in #8D8F97
 *
 * Figma nodes: 666:39287, 666:39549
 */

import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useState,
  useRef,
  useImperativeHandle,
} from 'react';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  Calendar SVG icon                                            */
/* ────────────────────────────────────────────────────────────── */
const CalendarIcon = ({ size = 16 }: { size?: number }) => (
  <i className="fa-regular fa-calendar text-[#8D8F97]" style={{ fontSize: size }} />
);

/* ────────────────────────────────────────────────────────────── */
/*  Size config                                                  */
/* ────────────────────────────────────────────────────────────── */
const sizeConfig = {
  extraSmall: {
    height: 'h-[36px] min-h-[36px]',
    radiusLeft: 'rounded-tl-[8px] rounded-bl-[8px]',
    radiusRight: 'rounded-tr-[8px] rounded-br-[8px]',
    paddingLeft: 'pl-[12px] pr-[8px] py-[4px]',
    paddingRight: 'pl-[12px] pr-[8px] py-[4px]',
    iconSize: 16,
    iconWrapper: 'size-[16px]',
    textClasses: 'text-[14px] leading-[18px]',
    labelClasses: 'text-[14px] leading-[18px] tracking-[-0.175px]',
    labelIconSize: 'size-[16px]',
    supportingClasses: 'text-[10px] leading-[12px]',
    labelGap: 'gap-[4px]',
  },
  small: {
    height: 'h-[48px] min-h-[48px]',
    radiusLeft: 'rounded-tl-[10px] rounded-bl-[10px]',
    radiusRight: 'rounded-tr-[10px] rounded-br-[10px]',
    paddingLeft: 'px-[12px] py-[4px]',
    paddingRight: 'px-[12px] py-[4px]',
    iconSize: 20,
    iconWrapper: 'size-[20px]',
    textClasses: 'text-[16px] leading-[20px]',
    labelClasses: 'text-[16px] leading-[20px]',
    labelIconSize: 'size-[20px]',
    supportingClasses: 'text-[12px] leading-[14px]',
    labelGap: 'gap-[8px]',
  },
  medium: {
    height: 'h-[56px] min-h-[56px]',
    radiusLeft: 'rounded-tl-[12px] rounded-bl-[12px]',
    radiusRight: 'rounded-tr-[12px] rounded-br-[12px]',
    paddingLeft: 'px-[12px] py-[4px]',
    paddingRight: 'px-[12px] py-[4px]',
    iconSize: 20,
    iconWrapper: 'size-[20px]',
    textClasses: 'text-[16px] leading-[20px]',
    labelClasses: 'text-[16px] leading-[20px]',
    labelIconSize: 'size-[20px]',
    supportingClasses: 'text-[12px] leading-[14px]',
    labelGap: 'gap-[8px]',
  },
} as const;

type DateRangeSize = keyof typeof sizeConfig;

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export interface DateRangePickerInputProps {
  /** Size variant */
  inputSize?: DateRangeSize;
  /** Top or side label text */
  label?: string;
  /** Icon next to the label */
  labelIcon?: ReactNode;
  /** Label position: 'top' (default) or 'side' (horizontal) */
  labelPosition?: 'top' | 'side';
  /** Supporting / helper text below the input */
  supportingText?: string;
  /** Error message — sets invalid border + red supporting text */
  errorMessage?: string;
  /** Start date placeholder */
  startPlaceholder?: string;
  /** End date placeholder */
  endPlaceholder?: string;
  /** Start date value */
  startValue?: string;
  /** End date value */
  endValue?: string;
  /** Callback when start date changes */
  onStartChange?: (value: string) => void;
  /** Callback when end date changes */
  onEndChange?: (value: string) => void;
  /** Props for start input */
  startInputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>;
  /** Props for end input */
  endInputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>;
  /** Disabled state */
  disabled?: boolean;
  /** Outer className */
  className?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const DateRangePickerInput = forwardRef<HTMLInputElement, DateRangePickerInputProps>(
  (
    {
      className,
      inputSize = 'extraSmall',
      label,
      labelIcon,
      labelPosition = 'top',
      supportingText,
      errorMessage,
      startPlaceholder = 'mm/dd/yyyy',
      endPlaceholder = 'mm/dd/yyyy',
      startValue,
      endValue,
      onStartChange,
      onEndChange,
      startInputProps,
      endInputProps,
      disabled,
    },
    ref,
  ) => {
    const startRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => startRef.current!);

    const [focusedField, setFocusedField] = useState<'start' | 'end' | null>(null);
    const config = sizeConfig[inputSize];

    const isInvalid = !!errorMessage;
    const isDisabled = !!disabled;
    const isSideLabel = labelPosition === 'side';

    // ── Border color helpers ──
    const leftBorderColor = isInvalid
      ? 'border-[#D62839]'
      : focusedField === 'start'
        ? 'border-[#6A6D76]'
        : 'border-[#B2B4BA]';

    const rightBorderColor = isInvalid
      ? 'border-[#D62839]'
      : focusedField === 'end'
        ? 'border-[#6A6D76]'
        : 'border-[#B2B4BA]';

    const effectiveSupportingText = supportingText ?? 'MM/DD/YYYY';

    // ── Label element ──
    const labelElement = label ? (
      <div
        className={cn(
          'flex items-center',
          config.labelGap,
          isSideLabel ? 'shrink-0' : 'w-full',
        )}
      >
        {labelIcon && (
          <span
            className={cn(
              'inline-flex items-center justify-center p-[2px] shrink-0',
              config.labelIconSize,
            )}
          >
            {labelIcon}
          </span>
        )}
        <label
          className={cn(
            'font-body font-medium text-[#30343F] whitespace-nowrap',
            config.labelClasses,
          )}
        >
          {label}
        </label>
      </div>
    ) : null;

    // ── Input fields ──
    const inputFields = (
      <div className="relative flex flex-col gap-[4px] items-start w-full">
        <div className={cn('flex w-full', isDisabled && 'opacity-50 cursor-not-allowed')}>
          {/* Left field (start date) */}
          <div
            className={cn(
              'flex items-center flex-1',
              'bg-[#FDFDFE] border border-solid',
              'overflow-clip transition-colors duration-150',
              'gap-[8px]',
              config.height,
              config.radiusLeft,
              config.paddingLeft,
              'rounded-tr-none rounded-br-none',
              'border-r-0',
              leftBorderColor,
            )}
          >
            <span className={cn('inline-flex items-center justify-center shrink-0', config.iconWrapper)}>
              <CalendarIcon size={config.iconSize} />
            </span>
            <input
              ref={startRef}
              type="text"
              disabled={disabled}
              placeholder={startPlaceholder}
              value={startValue}
              onChange={(e) => onStartChange?.(e.target.value)}
              onFocus={() => setFocusedField('start')}
              onBlur={() => setFocusedField(null)}
              className={cn(
                'flex-1 min-w-0 bg-transparent outline-none',
                'font-body font-normal text-[#30343F]',
                'placeholder:text-[#8D8F97] placeholder:font-normal',
                config.textClasses,
                'text-ellipsis overflow-hidden whitespace-nowrap',
                isDisabled && 'cursor-not-allowed',
              )}
              aria-invalid={isInvalid || undefined}
              {...startInputProps}
            />
          </div>

          {/* Right field (end date) */}
          <div
            className={cn(
              'flex items-center flex-1',
              'bg-[#FDFDFE] border border-solid',
              'overflow-clip transition-colors duration-150',
              'gap-[8px]',
              config.height,
              config.radiusRight,
              config.paddingRight,
              'rounded-tl-none rounded-bl-none',
              rightBorderColor,
            )}
          >
            <span className={cn('inline-flex items-center justify-center shrink-0', config.iconWrapper)}>
              <CalendarIcon size={config.iconSize} />
            </span>
            <input
              type="text"
              disabled={disabled}
              placeholder={endPlaceholder}
              value={endValue}
              onChange={(e) => onEndChange?.(e.target.value)}
              onFocus={() => setFocusedField('end')}
              onBlur={() => setFocusedField(null)}
              className={cn(
                'flex-1 min-w-0 bg-transparent outline-none',
                'font-body font-normal text-[#30343F]',
                'placeholder:text-[#8D8F97] placeholder:font-normal',
                config.textClasses,
                'text-ellipsis overflow-hidden whitespace-nowrap',
                isDisabled && 'cursor-not-allowed',
              )}
              aria-invalid={isInvalid || undefined}
              {...endInputProps}
            />
          </div>
        </div>

        {/* ── Supporting / Error text ── */}
        {errorMessage && (
          <p
            role="alert"
            className={cn(
              'pl-[12px] font-body font-normal text-[#D62839]',
              config.supportingClasses,
            )}
          >
            {errorMessage}
          </p>
        )}
        {!errorMessage && (
          <p
            className={cn(
              'pl-[12px] font-body font-normal text-[#6A6D76]',
              config.supportingClasses,
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
          {inputFields}
        </div>
      );
    }

    return (
      <div className={cn('flex flex-col gap-[8px] items-start w-full', className)}>
        {labelElement}
        {inputFields}
      </div>
    );
  },
);

DateRangePickerInput.displayName = 'DateRangePickerInput';
