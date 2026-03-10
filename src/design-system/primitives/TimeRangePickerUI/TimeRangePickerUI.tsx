/**
 * Olamee Design System — Time Range Picker UI (Popup)
 *
 * Mirrors Figma "Time Range Picker UI" (1879:78296).
 *
 * Specs from Figma:
 *   Container: bg=#FDFDFE, border=#EFF0F3, rounded-28, p=24, gap=16
 *   Shadow: 0px 2px 4px rgba(18,20,22,0.06), 0px 4px 8px rgba(18,20,22,0.1)
 *   h=200, min-w=320
 *   From/To labels: Karla Bold 12px #6A6D76
 *   Time boxes: h=38, w=42, rounded-8, Karla Bold 24px
 *   Colon separator between hour:minute
 *   12h mode: AM/PM toggle per side (h=38)
 *   Vertical divider between From and To
 *   Scrollable dropdown overlay (w=115, rounded-12)
 *   Apply button: xsmall primary violet
 *
 * Figma node: 1879:78296
 */

import { useState, useRef, useEffect, useCallback, type FC } from 'react';
import { cn } from '../../lib/cn';
import { AmPmToggle, type AmPmValue } from '../AmPmToggle';

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export type TimeRangeFormat = '12h' | '24h';

export interface TimeRangePickerUIProps {
  /** Time format mode */
  format?: TimeRangeFormat;
  /** From hour */
  fromHour?: number;
  /** From minute */
  fromMinute?: number;
  /** From AM/PM */
  fromAmPm?: AmPmValue;
  /** To hour */
  toHour?: number;
  /** To minute */
  toMinute?: number;
  /** To AM/PM */
  toAmPm?: AmPmValue;
  /** Called when Apply is clicked */
  onApply?: (
    fromHour: number,
    fromMinute: number,
    toHour: number,
    toMinute: number,
    fromAmPm?: AmPmValue,
    toAmPm?: AmPmValue,
  ) => void;
  /** Called when Cancel/close is clicked */
  onCancel?: () => void;
  /** Timezone display text */
  timezone?: string;
  /** Outer className */
  className?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Compact Scroll Picker                                        */
/* ────────────────────────────────────────────────────────────── */
interface CompactScrollPickerProps {
  values: number[];
  selected: number;
  onChange: (value: number) => void;
}

const CompactScrollPicker: FC<CompactScrollPickerProps> = ({
  values,
  selected,
  onChange,
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const idx = values.indexOf(selected);
      if (idx >= 0) {
        const itemH = 36;
        listRef.current.scrollTop = idx * itemH - 36;
      }
    }
  }, [selected, values]);

  return (
    <div
      ref={listRef}
      className={cn(
        'flex flex-col items-center',
        'bg-[#FBFBFC] border-2 border-[#EFF0F3] rounded-[12px]',
        'w-[115px] max-h-[150px] overflow-y-auto',
        'px-[12px] py-[8px] gap-[12px]',
        '[&::-webkit-scrollbar]:w-[4px]',
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
              'font-body font-medium text-[14px] leading-[18px]',
              'transition-colors duration-150 cursor-pointer',
              isSelected
                ? 'bg-[#7A5FFF] text-[#FDFDFE]'
                : 'bg-transparent text-[#6A6D76] hover:bg-[#EFF0F3]',
            )}
          >
            {String(v).padStart(2, '0')}
          </button>
        );
      })}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────── */
/*  Time Side (From / To)                                        */
/* ────────────────────────────────────────────────────────────── */
interface TimeSideProps {
  label: string;
  hour: number;
  minute: number;
  amPm?: AmPmValue;
  is12h: boolean;
  activeField: 'hour' | 'minute' | null;
  onFieldClick: (field: 'hour' | 'minute') => void;
  onHourChange: (v: number) => void;
  onMinuteChange: (v: number) => void;
  onAmPmChange?: (v: AmPmValue) => void;
}

const TimeSide: FC<TimeSideProps> = ({
  label,
  hour,
  minute,
  amPm,
  is12h,
  activeField,
  onFieldClick,
  onHourChange,
  onMinuteChange,
  onAmPmChange,
}) => {
  const hours = is12h
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center gap-[8px] flex-1">
      {/* Label */}
      <span className="font-body font-bold text-[12px] leading-[14px] text-[#6A6D76]">
        {label}
      </span>

      {/* Time boxes + AM/PM */}
      <div className="flex items-center gap-[4px]">
        {/* Hour box */}
        <button
          type="button"
          onClick={() => onFieldClick('hour')}
          className={cn(
            'flex items-center justify-center',
            'h-[38px] w-[42px] rounded-[8px]',
            'font-body font-bold text-[24px] leading-[28px] text-[#30343F]',
            'transition-colors duration-150 cursor-pointer',
            activeField === 'hour'
              ? 'bg-[#EFF0F3]'
              : 'bg-[#FBFBFC] border border-[#B2B4BA]',
          )}
        >
          {String(hour).padStart(2, '0')}
        </button>

        {/* Colon */}
        <span className="font-body font-bold text-[24px] leading-[28px] text-[#30343F]">
          :
        </span>

        {/* Minute box */}
        <button
          type="button"
          onClick={() => onFieldClick('minute')}
          className={cn(
            'flex items-center justify-center',
            'h-[38px] w-[42px] rounded-[8px]',
            'font-body font-bold text-[24px] leading-[28px] text-[#30343F]',
            'transition-colors duration-150 cursor-pointer',
            activeField === 'minute'
              ? 'bg-[#EFF0F3]'
              : 'bg-[#FBFBFC] border border-[#B2B4BA]',
          )}
        >
          {String(minute).padStart(2, '0')}
        </button>

        {/* AM/PM toggle (12h mode) */}
        {is12h && amPm && onAmPmChange && (
          <AmPmToggle
            value={amPm}
            onChange={onAmPmChange}
            compact
          />
        )}
      </div>

      {/* Scroll picker (shown when a field is active) */}
      {activeField && (
        <CompactScrollPicker
          values={activeField === 'hour' ? hours : minutes}
          selected={activeField === 'hour' ? hour : minute}
          onChange={activeField === 'hour' ? onHourChange : onMinuteChange}
        />
      )}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const TimeRangePickerUI: FC<TimeRangePickerUIProps> = ({
  format = '12h',
  fromHour: initFromHour,
  fromMinute: initFromMinute,
  fromAmPm: initFromAmPm = 'AM',
  toHour: initToHour,
  toMinute: initToMinute,
  toAmPm: initToAmPm = 'PM',
  onApply,
  onCancel,
  timezone,
  className,
}) => {
  const is12h = format === '12h';

  const [fromHour, setFromHour] = useState(initFromHour ?? (is12h ? 9 : 9));
  const [fromMinute, setFromMinute] = useState(initFromMinute ?? 0);
  const [fromAmPm, setFromAmPm] = useState<AmPmValue>(initFromAmPm);
  const [toHour, setToHour] = useState(initToHour ?? (is12h ? 5 : 17));
  const [toMinute, setToMinute] = useState(initToMinute ?? 0);
  const [toAmPm, setToAmPm] = useState<AmPmValue>(initToAmPm);

  const [activeSide, setActiveSide] = useState<'from' | 'to'>('from');
  const [activeField, setActiveField] = useState<'hour' | 'minute' | null>('hour');

  const handleApply = useCallback(() => {
    onApply?.(
      fromHour,
      fromMinute,
      toHour,
      toMinute,
      is12h ? fromAmPm : undefined,
      is12h ? toAmPm : undefined,
    );
  }, [fromHour, fromMinute, toHour, toMinute, fromAmPm, toAmPm, is12h, onApply]);

  return (
    <div
      className={cn(
        'inline-flex flex-col',
        'bg-[#FDFDFE] border border-[#EFF0F3]',
        'rounded-[28px]',
        'p-[24px] gap-[16px]',
        'shadow-[0px_2px_4px_rgba(18,20,22,0.06),0px_4px_8px_rgba(18,20,22,0.1)]',
        'min-w-[320px]',
        className,
      )}
    >
      {/* ── From / To row ── */}
      <div className="flex items-start gap-[16px]">
        {/* From side */}
        <TimeSide
          label="From"
          hour={fromHour}
          minute={fromMinute}
          amPm={is12h ? fromAmPm : undefined}
          is12h={is12h}
          activeField={activeSide === 'from' ? activeField : null}
          onFieldClick={(f) => {
            setActiveSide('from');
            setActiveField(f);
          }}
          onHourChange={setFromHour}
          onMinuteChange={setFromMinute}
          onAmPmChange={setFromAmPm}
        />

        {/* Vertical divider */}
        <div className="w-[1px] bg-[#EFF0F3] self-stretch min-h-[60px]" />

        {/* To side */}
        <TimeSide
          label="To"
          hour={toHour}
          minute={toMinute}
          amPm={is12h ? toAmPm : undefined}
          is12h={is12h}
          activeField={activeSide === 'to' ? activeField : null}
          onFieldClick={(f) => {
            setActiveSide('to');
            setActiveField(f);
          }}
          onHourChange={setToHour}
          onMinuteChange={setToMinute}
          onAmPmChange={setToAmPm}
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

TimeRangePickerUI.displayName = 'TimeRangePickerUI';
