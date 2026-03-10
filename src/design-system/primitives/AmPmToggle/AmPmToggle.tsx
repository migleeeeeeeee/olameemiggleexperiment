/**
 * Olamee Design System — AM/PM Toggle
 *
 * Mirrors Figma "AM/PM Toggle" component (1939:46543).
 *
 * Specs from Figma:
 *   Container: bg=#FDFDFE, border=#B2B4BA, rounded-8, h=41, w=31, p=4, gap=4
 *   Selected pill: bg=#7A5FFF, text=#FDFDFE, h=15, px=4, rounded-4
 *   Unselected: text=#30343F, 10px medium, tracking=-0.24px
 *   Two variants: Selected=AM, Selected=PM
 *
 * Figma node: 1939:46543
 */

import { type FC } from 'react';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export type AmPmValue = 'AM' | 'PM';

export interface AmPmToggleProps {
  /** Current value */
  value: AmPmValue;
  /** Callback when toggled */
  onChange?: (value: AmPmValue) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Compact mode for range picker (gap=2 instead of gap=4) */
  compact?: boolean;
  /** Outer className */
  className?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const AmPmToggle: FC<AmPmToggleProps> = ({
  value,
  onChange,
  disabled = false,
  compact = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center',
        'bg-[#FDFDFE] border border-[#B2B4BA] rounded-[8px]',
        'w-[31px] p-[4px]',
        compact ? 'gap-[2px]' : 'gap-[4px]',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
      role="radiogroup"
      aria-label="AM/PM"
    >
      {(['AM', 'PM'] as const).map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled}
            onClick={() => !disabled && onChange?.(option)}
            className={cn(
              'flex items-center justify-center',
              'h-[15px] px-[4px] rounded-[4px]',
              'font-body font-medium text-[10px] leading-[12px] tracking-[-0.24px]',
              'transition-colors duration-150',
              isSelected
                ? 'bg-[#7A5FFF] text-[#FDFDFE]'
                : 'bg-transparent text-[#30343F] hover:bg-[#EFF0F3]',
              disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

AmPmToggle.displayName = 'AmPmToggle';
