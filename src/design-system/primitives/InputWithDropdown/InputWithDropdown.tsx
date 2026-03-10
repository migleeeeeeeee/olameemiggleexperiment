/**
 * Olamee Design System — Input with Dropdown Selector
 *
 * Mirrors Figma "Input with Dropdown Selector" component set (node 666:40336).
 * A composite of 3 side-by-side input fields: First (fixed), Second (flex), Third (fixed).
 *
 * Variants:
 *   Size: extraSmall (h=36), small (h=48), medium (h=56)
 *   States: default, selected, filled, invalid, disabled
 *
 * Figma node: 666:40336
 */

import {
  forwardRef,
  type ReactNode,
  useState,
  type HTMLAttributes,
} from 'react';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  Size config                                                  */
/* ────────────────────────────────────────────────────────────── */
const sizeConfig = {
  extraSmall: {
    field: 'h-[36px] min-h-[36px] rounded-[8px]',
    firstMinW: 'min-w-[77px]',
    secondMinW: 'min-w-[180px]',
    thirdMinW: 'min-w-[77px]',
    text: 'text-[14px] leading-[18px]',
    label: 'text-[14px] leading-[18px] tracking-[-0.175px]',
    labelGap: 'gap-[4px]',
    supportText: 'text-[10px] leading-[12px]',
  },
  small: {
    field: 'h-[48px] min-h-[48px] rounded-[10px]',
    firstMinW: 'min-w-[96px]',
    secondMinW: 'min-w-[280px]',
    thirdMinW: 'min-w-[96px]',
    text: 'text-[16px] leading-[20px]',
    label: 'text-[16px] leading-[20px]',
    labelGap: 'gap-[8px]',
    supportText: 'text-[12px] leading-[14px]',
  },
  medium: {
    field: 'h-[56px] min-h-[56px] rounded-[12px]',
    firstMinW: 'min-w-[96px]',
    secondMinW: 'min-w-[280px]',
    thirdMinW: 'min-w-[96px]',
    text: 'text-[16px] leading-[20px]',
    label: 'text-[16px] leading-[20px]',
    labelGap: 'gap-[8px]',
    supportText: 'text-[12px] leading-[14px]',
  },
} as const;

type InputWithDropdownSize = keyof typeof sizeConfig;

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
interface FieldConfig {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  trailIcon?: ReactNode;
  disabled?: boolean;
}

export interface InputWithDropdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Component size */
  inputSize?: InputWithDropdownSize;
  /** Top label text */
  label?: string;
  /** First field (left, fixed width) */
  firstField?: FieldConfig;
  /** Second field (center, flex grow) */
  secondField?: FieldConfig;
  /** Third field (right, fixed width) */
  thirdField?: FieldConfig;
  /** Supporting text below */
  supportingText?: string;
  /** Error message */
  errorMessage?: string;
  /** Disabled state */
  disabled?: boolean;
}

/* ────────────────────────────────────────────────────────────── */
/*  Subcomponent: single field                                   */
/* ────────────────────────────────────────────────────────────── */
const SingleField = forwardRef<
  HTMLInputElement,
  FieldConfig & {
    isInvalid: boolean;
    isFocused: boolean;
    sizeClasses: string;
    fieldSizeClasses: string;
    isFlexible?: boolean;
    onFieldFocus: () => void;
    onFieldBlur: () => void;
  }
>(
  (
    {
      placeholder = 'Placeholder',
      value,
      onChange,
      trailIcon,
      disabled,
      isInvalid,
      isFocused,
      sizeClasses,
      fieldSizeClasses,
      isFlexible,
      onFieldFocus,
      onFieldBlur,
    },
    ref,
  ) => {
    const borderColor = isInvalid
      ? 'border-[#D62839]'
      : isFocused
        ? 'border-[#6A6D76]'
        : 'border-[#B2B4BA]';

    return (
      <div
        className={cn(
          'flex items-center bg-[#FDFDFE] border border-solid overflow-clip px-[12px] py-[4px] gap-[10px]',
          fieldSizeClasses,
          borderColor,
          isFlexible ? 'flex-1' : 'shrink-0',
          disabled && 'opacity-50 cursor-not-allowed',
        )}
      >
        <input
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={onFieldFocus}
          onBlur={onFieldBlur}
          className={cn(
            'flex-1 min-w-0 bg-transparent outline-none',
            'font-body font-normal text-[#30343F]',
            'placeholder:text-[#8D8F97] placeholder:font-normal',
            sizeClasses,
            'text-ellipsis overflow-hidden whitespace-nowrap',
            disabled && 'cursor-not-allowed',
          )}
        />
        {trailIcon && (
          <span className="inline-flex items-center justify-center p-[2px] shrink-0 size-[20px]">
            {trailIcon}
          </span>
        )}
      </div>
    );
  },
);
SingleField.displayName = 'SingleField';

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const InputWithDropdown = forwardRef<HTMLDivElement, InputWithDropdownProps>(
  (
    {
      className,
      inputSize = 'extraSmall',
      label,
      firstField = {},
      secondField = {},
      thirdField = {},
      supportingText,
      errorMessage,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [focusedField, setFocusedField] = useState<number | null>(null);
    const config = sizeConfig[inputSize];
    const isInvalid = !!errorMessage;

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-[8px] items-start w-full', className)}
        {...props}
      >
        {/* ── Label ── */}
        {label && (
          <div className={cn('flex items-center w-full', config.labelGap)}>
            <span
              className={cn(
                'font-body font-medium text-[#30343F] whitespace-nowrap',
                config.label,
              )}
            >
              {label}
            </span>
          </div>
        )}

        {/* ── Three fields row ── */}
        <div className="flex gap-[8px] items-start w-full">
          {/* First field — fixed width */}
          <SingleField
            {...firstField}
            disabled={disabled || firstField.disabled}
            isInvalid={isInvalid}
            isFocused={focusedField === 0}
            sizeClasses={config.text}
            fieldSizeClasses={cn(config.field, config.firstMinW)}
            onFieldFocus={() => setFocusedField(0)}
            onFieldBlur={() => setFocusedField(null)}
          />

          {/* Second field — flexible */}
          <SingleField
            {...secondField}
            disabled={disabled || secondField.disabled}
            isInvalid={isInvalid}
            isFocused={focusedField === 1}
            sizeClasses={config.text}
            fieldSizeClasses={cn(config.field, config.secondMinW)}
            isFlexible
            onFieldFocus={() => setFocusedField(1)}
            onFieldBlur={() => setFocusedField(null)}
          />

          {/* Third field — fixed width */}
          <SingleField
            {...thirdField}
            disabled={disabled || thirdField.disabled}
            isInvalid={isInvalid}
            isFocused={focusedField === 2}
            sizeClasses={config.text}
            fieldSizeClasses={cn(config.field, config.thirdMinW)}
            onFieldFocus={() => setFocusedField(2)}
            onFieldBlur={() => setFocusedField(null)}
          />
        </div>

        {/* ── Supporting / Error text ── */}
        {errorMessage && (
          <p
            className={cn(
              'pl-[12px] font-body font-normal text-[#D62839]',
              config.supportText,
            )}
            role="alert"
          >
            {errorMessage}
          </p>
        )}
        {!errorMessage && supportingText && (
          <p
            className={cn(
              'pl-[12px] font-body font-normal text-[#6A6D76]',
              config.supportText,
            )}
          >
            {supportingText}
          </p>
        )}
      </div>
    );
  },
);

InputWithDropdown.displayName = 'InputWithDropdown';
