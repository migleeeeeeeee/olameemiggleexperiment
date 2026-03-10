/**
 * Olamee Design System — Time Picker UI (Popup)
 *
 * Mirrors Figma "Time Picker UI" (1879:78499).
 *
 * Specs from Figma:
 *   Container: bg=#FDFDFE, border=#EFF0F3, rounded-28, p=24, gap=16
 *   Shadow: 0px 2px 4px rgba(18,20,22,0.06), 0px 4px 8px rgba(18,20,22,0.1)
 *   min-w=240, w=263
 *   Hour box: bg=#EFF0F3, h=52, w=61, rounded-8, Karla Bold 36px
 *   Minute box: bg=#FBFBFC, border-2 #6A6D76, h=52, w=59, rounded-8
 *   Colon separator: Karla Bold 36px #30343F
 *   Labels: "Hour" / "Minute" — 10px medium #30343F
 *   12-hour mode: includes AM/PM toggle
 *   Scrollable dropdown: bg=#FBFBFC, border-2 #EFF0F3, rounded-12, w=145
 *   Selected value: bg=#7A5FFF, text=#FDFDFE, rounded-4, h=20
 *   Non-selected: text=#6A6D76 16px medium, gap=16
 *   Apply button: xsmall primary violet
 *   Timezone: 10px #8D8F97
 *
 * Figma node: 1879:78499
 */

import { useState, useRef, useCallback, useEffect, type FC } from 'react';
import { cn } from '../../lib/cn';
import { AmPmToggle, type AmPmValue } from '../AmPmToggle';

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export type TimeFormat = '12h' | '24h';

export interface TimePickerUIProps {
  /** Time format mode */
  format?: TimeFormat;
  /** Initial hour (0-23 for 24h, 1-12 for 12h) */
  hour?: number;
  /** Initial minute (0-59) */
  minute?: number;
  /** Initial AM/PM (only used in 12h mode) */
  amPm?: AmPmValue;
  /** Called when Apply is clicked */
  onApply?: (hour: number, minute: number, amPm?: AmPmValue) => void;
  /** Called when Cancel/close is clicked */
  onCancel?: () => void;
  /** Timezone display text */
  timezone?: string;
  /** Outer className */
  className?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Scroll Picker sub-component                                  */
/* ────────────────────────────────────────────────────────────── */
interface ScrollPickerProps {
  values: number[];
  selected: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
}

const ScrollPicker: FC<ScrollPickerProps> = ({
  values,
  selected,
  onChange,
  formatValue = (v) => String(v).padStart(2, '0'),
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to selected item
    if (listRef.current) {
      const idx = values.indexOf(selected);
      if (idx >= 0) {
        const itemH = 36; // 20px item + 16px gap
        listRef.current.scrollTop = idx * itemH - 48; // Center roughly
      }
    }
  }, [selected, values]);

  return (
    <div
      ref={listRef}
      className={cn(
        'flex flex-col items-center',
        'bg-[#FBFBFC] border-2 border-[#EFF0F3] rounded-[12px]',
        'w-[145px] max-h-[180px] overflow-y-auto',
        'px-[18px] py-[12px] gap-[16px]',
        // Custom scrollbar
        '[&::-webkit-scrollbar]:w-[6px]',
        '[&::-webkit-scrollbar-track]:bg-[#EFF0F3] [&::-webkit-scrollbar-track]:rounded-[12px]',
        '[&::-webkit-scrollbar-thumb]:bg-[#B2B4BA] [&::-webkit-scrollbar-thumb]:rounded-[12px]',
      )}
    >
      {values.map((v) => {
        const isSelected = v === selected;
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className={cn(
              'flex items-center justify-center w-full shrink-0',
              'h-[20px] rounded-[4px]',
              'font-body font-medium text-[16px] leading-[20px]',
              'transition-colors duration-150 cursor-pointer',
              isSelected
                ? 'bg-[#7A5FFF] text-[#FDFDFE]'
                : 'bg-transparent text-[#6A6D76] hover:bg-[#EFF0F3]',
            )}
          >
            {formatValue(v)}
          </button>
        );
      })}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const TimePickerUI: FC<TimePickerUIProps> = ({
  format = '12h',
  hour: initialHour,
  minute: initialMinute,
  amPm: initialAmPm = 'AM',
  onApply,
  onCancel,
  timezone,
  className,
}) => {
  const is12h = format === '12h';

  const [hour, setHour] = useState(initialHour ?? (is12h ? 8 : 8));
  const [minute, setMinute] = useState(initialMinute ?? 30);
  const [amPm, setAmPm] = useState<AmPmValue>(initialAmPm);
  const [activeField, setActiveField] = useState<'hour' | 'minute'>('hour');

  const hours = is12h
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : Array.from({ length: 24 }, (_, i) => i);

  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const handleApply = useCallback(() => {
    onApply?.(hour, minute, is12h ? amPm : undefined);
  }, [hour, minute, amPm, is12h, onApply]);

  return (
    <div
      className={cn(
        'inline-flex flex-col',
        'bg-[#FDFDFE] border border-[#EFF0F3]',
        'rounded-[28px]',
        'p-[24px] gap-[16px]',
        'shadow-[0px_2px_4px_rgba(18,20,22,0.06),0px_4px_8px_rgba(18,20,22,0.1)]',
        'min-w-[240px] w-[263px]',
        className,
      )}
    >
      {/* ── Time display row ── */}
      <div className="flex items-end gap-[8px] justify-center">
        {/* Hour */}
        <div className="flex flex-col items-center gap-[4px]">
          <span className="font-body font-medium text-[10px] leading-[12px] text-[#30343F]">
            Hour
          </span>
          <button
            type="button"
            onClick={() => setActiveField('hour')}
            className={cn(
              'flex items-center justify-center',
              'h-[52px] w-[61px] rounded-[8px]',
              'font-body font-bold text-[36px] leading-[44px] text-[#30343F]',
              'transition-colors duration-150 cursor-pointer',
              activeField === 'hour'
                ? 'bg-[#EFF0F3]'
                : 'bg-[#FBFBFC] border-2 border-[#6A6D76]',
            )}
          >
            {String(hour).padStart(2, '0')}
          </button>
        </div>

        {/* Colon */}
        <span className="font-body font-bold text-[36px] leading-[44px] text-[#30343F] pb-[4px]">
          :
        </span>

        {/* Minute */}
        <div className="flex flex-col items-center gap-[4px]">
          <span className="font-body font-medium text-[10px] leading-[12px] text-[#30343F]">
            Minute
          </span>
          <button
            type="button"
            onClick={() => setActiveField('minute')}
            className={cn(
              'flex items-center justify-center',
              'h-[52px] w-[59px] rounded-[8px]',
              'font-body font-bold text-[36px] leading-[44px] text-[#30343F]',
              'transition-colors duration-150 cursor-pointer',
              activeField === 'minute'
                ? 'bg-[#EFF0F3]'
                : 'bg-[#FBFBFC] border-2 border-[#6A6D76]',
            )}
          >
            {String(minute).padStart(2, '0')}
          </button>
        </div>

        {/* AM/PM toggle (12h mode only) */}
        {is12h && (
          <AmPmToggle
            value={amPm}
            onChange={setAmPm}
            className="ml-[4px]"
          />
        )}
      </div>

      {/* ── Scroll picker ── */}
      <div className="flex justify-center">
        <ScrollPicker
          values={activeField === 'hour' ? hours : minutes}
          selected={activeField === 'hour' ? hour : minute}
          onChange={activeField === 'hour' ? setHour : setMinute}
        />
      </div>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between">
        {/* Timezone */}
        <span className="font-body font-normal text-[10px] leading-[12px] text-[#8D8F97]">
          {timezone ?? 'UTC+0'}
        </span>

        {/* Buttons */}
        <div className="flex items-center gap-[8px]">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className={cn(
                'inline-flex items-center justify-center',
                'h-[24px] px-[8px] rounded-[8px]',
                'font-body font-medium text-[12px] leading-[16px]',
                'text-[#30343F] bg-transparent',
                'hover:bg-[#EFF0F3] active:bg-[#B2B4BA]',
                'transition-colors cursor-pointer',
              )}
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            onClick={handleApply}
            className={cn(
              'inline-flex items-center justify-center',
              'h-[24px] px-[8px] rounded-[8px]',
              'font-body font-medium text-[12px] leading-[16px]',
              'bg-[#6F54EB] text-[#FDFDFE]',
              'hover:bg-[#5A41D6] active:bg-[#4A34B8]',
              'transition-colors cursor-pointer',
            )}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

TimePickerUI.displayName = 'TimePickerUI';
