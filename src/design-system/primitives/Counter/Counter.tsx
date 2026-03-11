/**
 * Olamee Design System — Counter
 *
 * Mirrors Figma "Counter" component (666:40961).
 *
 * Three joined sections: Minus button | Number display | Plus button
 *
 * Variants:
 *   Size: extraSmall (36px), small (48px), medium (56px)
 *   States: default, disabled, disabledMinus (min reached), disabledPlus (max reached)
 *
 * Specs from Figma:
 *   extraSmall: h=36, rounded-8, icon 12px, text Montserrat Bold 16px
 *   small: h=48, rounded-10, icon 16px, text Montserrat Bold 20px
 *   medium: h=56, rounded-12, icon 20px, text Montserrat Bold 24px
 *   Left button: bg=#FDFDFE, border=#B2B4BA, rounded-left only
 *   Center: bg=#FDFDFE, border top+bottom #B2B4BA (no left/right border)
 *   Right button: bg=#FDFDFE, border=#B2B4BA, rounded-right only
 *   Disabled button: bg=#FBFBFC, icon color=#8D8F97
 *   Active: text=#30343F
 *   Disabled all: text=#8D8F97
 *
 * Figma node: 666:40961
 */

import { type FC, useCallback } from 'react';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  Inline SVG icons                                             */
/* ────────────────────────────────────────────────────────────── */
const MinusIcon = ({ size = 16 }: { size?: number }) => (
  <i className="fa-regular fa-minus" style={{ fontSize: size }} />
);

const PlusIcon = ({ size = 16 }: { size?: number }) => (
  <i className="fa-regular fa-plus" style={{ fontSize: size }} />
);

/* ────────────────────────────────────────────────────────────── */
/*  Size config                                                  */
/* ────────────────────────────────────────────────────────────── */
const sizeConfig = {
  extraSmall: {
    height: 'h-[36px]',
    radiusLeft: 'rounded-tl-[8px] rounded-bl-[8px]',
    radiusRight: 'rounded-tr-[8px] rounded-br-[8px]',
    buttonWidth: 'w-[36px]',
    centerMinWidth: 'min-w-[48px]',
    iconSize: 12,
    textClasses: 'font-heading font-bold text-[16px] leading-[20px]',
  },
  small: {
    height: 'h-[48px]',
    radiusLeft: 'rounded-tl-[10px] rounded-bl-[10px]',
    radiusRight: 'rounded-tr-[10px] rounded-br-[10px]',
    buttonWidth: 'w-[48px]',
    centerMinWidth: 'min-w-[56px]',
    iconSize: 16,
    textClasses: 'font-heading font-bold text-[20px] leading-[24px]',
  },
  medium: {
    height: 'h-[56px]',
    radiusLeft: 'rounded-tl-[12px] rounded-bl-[12px]',
    radiusRight: 'rounded-tr-[12px] rounded-br-[12px]',
    buttonWidth: 'w-[56px]',
    centerMinWidth: 'min-w-[64px]',
    iconSize: 20,
    textClasses: 'font-heading font-bold text-[24px] leading-[28px]',
  },
} as const;

type CounterSize = keyof typeof sizeConfig;

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export interface CounterProps {
  /** Size variant */
  size?: CounterSize;
  /** Current value */
  value: number;
  /** Callback when value changes */
  onChange?: (value: number) => void;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Fully disabled */
  disabled?: boolean;
  /** Outer className */
  className?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const Counter: FC<CounterProps> = ({
  size = 'extraSmall',
  value,
  onChange,
  min = 0,
  max = 99,
  step = 1,
  disabled = false,
  className,
}) => {
  const config = sizeConfig[size];
  const isMinDisabled = disabled || value <= min;
  const isMaxDisabled = disabled || value >= max;

  const handleDecrement = useCallback(() => {
    if (!isMinDisabled) {
      onChange?.(Math.max(min, value - step));
    }
  }, [value, step, min, isMinDisabled, onChange]);

  const handleIncrement = useCallback(() => {
    if (!isMaxDisabled) {
      onChange?.(Math.min(max, value + step));
    }
  }, [value, step, max, isMaxDisabled, onChange]);

  return (
    <div
      className={cn('inline-flex items-center', className)}
      role="group"
      aria-label="Counter"
    >
      {/* Minus button */}
      <button
        type="button"
        onClick={handleDecrement}
        disabled={isMinDisabled}
        aria-label="Decrease"
        className={cn(
          'inline-flex items-center justify-center shrink-0',
          'border border-solid border-[#B2B4BA]',
          'transition-colors duration-150',
          config.height,
          config.buttonWidth,
          config.radiusLeft,
          'rounded-tr-none rounded-br-none',
          'border-r-0',
          isMinDisabled
            ? 'bg-[#FBFBFC] text-[#8D8F97] cursor-not-allowed'
            : 'bg-[#FDFDFE] text-[#30343F] cursor-pointer hover:bg-[#EFF0F3] active:bg-[#D8DAE0]',
        )}
      >
        <MinusIcon size={config.iconSize} />
      </button>

      {/* Center value display */}
      <div
        className={cn(
          'inline-flex items-center justify-center',
          'bg-[#FDFDFE]',
          'border-y border-solid border-[#B2B4BA]',
          config.height,
          config.centerMinWidth,
          'px-[8px]',
          disabled ? 'text-[#8D8F97]' : 'text-[#30343F]',
          config.textClasses,
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        {value}
      </div>

      {/* Plus button */}
      <button
        type="button"
        onClick={handleIncrement}
        disabled={isMaxDisabled}
        aria-label="Increase"
        className={cn(
          'inline-flex items-center justify-center shrink-0',
          'border border-solid border-[#B2B4BA]',
          'transition-colors duration-150',
          config.height,
          config.buttonWidth,
          config.radiusRight,
          'rounded-tl-none rounded-bl-none',
          'border-l-0',
          isMaxDisabled
            ? 'bg-[#FBFBFC] text-[#8D8F97] cursor-not-allowed'
            : 'bg-[#FDFDFE] text-[#30343F] cursor-pointer hover:bg-[#EFF0F3] active:bg-[#D8DAE0]',
        )}
      >
        <PlusIcon size={config.iconSize} />
      </button>
    </div>
  );
};

Counter.displayName = 'Counter';
