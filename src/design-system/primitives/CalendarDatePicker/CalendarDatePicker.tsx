/**
 * Olamee Design System — Calendar Date Picker
 *
 * Mirrors Figma "Date Picker / Calendar" component set (node 666:39849).
 *
 * 5 variants:
 *   1. Single — single date, with year selector
 *   2. Date picker - no year — single date, no year
 *   3. Date range - no year — range, month only header
 *   4. Date range — range with year + quick-select presets
 *   5. Variant3 — dual side-by-side calendars with presets
 *
 * Specs from Figma (6801:463009):
 *   Container: bg=#FDFDFE, border=#EFF0F3, rounded-28, min-w=399
 *   Shadow: 0px 2px 4px rgba(18,20,22,0.06), 0px 4px 8px rgba(18,20,22,0.1)
 *   Padding: p=24, gap=24
 *   Header: Month + Year dropdowns centered (Karla Bold 16px #30343F)
 *     — Clicking month header shows 4x3 month grid
 *     — Clicking year header shows 4x3 year grid with decade nav
 *     — Selected month/year: bg=#30343F, text=#FDFDFE, rounded-12
 *   Grid: 7 columns, gap-x=10, gap-y=10, grid h=321 for 7 rows
 *     — Day headers: Karla Regular 14px #30343F, h=18
 *     — Day cells: ~43.5px tall, Montserrat Regular 16px #30343F
 *   Other-month days: text=#8D8F97
 *   Selected day: bg=#30343F, text=#FDFDFE, rounded-full, Montserrat SemiBold
 *   Today: border=#30343F, bg=#FDFDFE (or bg=#EFF0F3 in range), rounded-full, Bold
 *   Range band: bg=#EFF0F3 spanning across row
 *   Presets: rounded-10, h=32, px=12, Karla Medium 16px, tracking -0.384
 *     — Active: bg=#7A5FFF, text=#F1F5FF (no border)
 *     — Inactive: border=#D7D8DC, text=#30343F
 *   Apply (active): bg=#7A5FFF, text=#F1F5FF, no border
 *   Apply (disabled): bg=#EFF0F3, border=#D7D8DC, text=#B2B4BA, opacity-75
 *   Cancel: tertiary, h=40, min-w=64, rounded-12, Karla Medium 16px
 *
 * Figma node: 666:39849
 */

import { useState, useMemo, useCallback, type FC, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  Inline SVG icons                                             */
/* ────────────────────────────────────────────────────────────── */
const ChevronDownIcon = () => (
  <i className="fa-regular fa-chevron-down text-[12px]" />
);

const ChevronLeftIcon = () => (
  <i className="fa-regular fa-chevron-left text-[12px] text-[#30343F]" />
);

const ChevronRightIcon = () => (
  <i className="fa-regular fa-chevron-right text-[12px] text-[#30343F]" />
);

/* ────────────────────────────────────────────────────────────── */
/*  Helpers                                                      */
/* ────────────────────────────────────────────────────────────── */
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DAY_HEADERS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DEFAULT_PRESETS = [
  'Last 7 Days',
  'Last 14 Days',
  'Last 30 Days',
  'Last 90 Days',
  'Last 6 Months',
  'Last 12 Months',
  'Year to Date',
];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isInRange(day: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  const t = day.getTime();
  return t > start.getTime() && t < end.getTime();
}

function buildCalendarDays(year: number, month: number) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days: Array<{ date: Date; isCurrentMonth: boolean }> = [];

  // Previous month fill
  if (firstDay > 0) {
    const prevMonthDays = getDaysInMonth(
      month === 0 ? year - 1 : year,
      month === 0 ? 11 : month - 1,
    );
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(
          month === 0 ? year - 1 : year,
          month === 0 ? 11 : month - 1,
          prevMonthDays - i,
        ),
        isCurrentMonth: false,
      });
    }
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({ date: new Date(year, month, d), isCurrentMonth: true });
  }

  // Next month fill (always show 6 rows = 42 cells)
  const remaining = 42 - days.length;
  for (let d = 1; d <= remaining; d++) {
    days.push({
      date: new Date(
        month === 11 ? year + 1 : year,
        month === 11 ? 0 : month + 1,
        d,
      ),
      isCurrentMonth: false,
    });
  }

  return days;
}

/** Get the decade start for a given year (e.g. 2025 → 2021) */
function getDecadeStart(year: number): number {
  return Math.floor(year / 12) * 12 + 1;
}

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export type CalendarMode = 'single' | 'range' | 'range-no-year' | 'dual';

export interface CalendarDatePickerProps {
  /** Selection mode / variant */
  mode?: CalendarMode;
  /** Currently selected date (single mode) */
  selectedDate?: Date | null;
  /** Currently selected start date (range mode) */
  startDate?: Date | null;
  /** Currently selected end date (range mode) */
  endDate?: Date | null;
  /** Called when a date is selected (single mode) */
  onDateSelect?: (date: Date) => void;
  /** Called when a date range is selected (range mode) */
  onRangeSelect?: (start: Date, end: Date) => void;
  /** Called when Apply is clicked */
  onApply?: () => void;
  /** Called when Cancel is clicked */
  onCancel?: () => void;
  /** Whether to show the year selector */
  showYear?: boolean;
  /** Whether to show quick-select presets (range modes) */
  showPresets?: boolean;
  /** Preset labels */
  presets?: string[];
  /** Called when a preset is clicked */
  onPresetSelect?: (preset: string) => void;
  /** Active preset label */
  activePreset?: string;
  /** Timezone display text */
  timezone?: string;
  /** Outer className */
  className?: string;
  /** Optional footer content (replaces default buttons) */
  footer?: ReactNode;
}

/* ────────────────────────────────────────────────────────────── */
/*  Month picker overlay                                         */
/* ────────────────────────────────────────────────────────────── */
interface MonthPickerProps {
  currentMonth: number;
  onSelect: (month: number) => void;
}

const MonthPicker: FC<MonthPickerProps> = ({ currentMonth, onSelect }) => (
  <div
    className="grid grid-cols-4 gap-x-[10px] gap-y-[10px] w-full"
    style={{ height: '164px' }}
  >
    {MONTH_NAMES.map((name, i) => {
      const isSelected = i === currentMonth;
      return (
        <button
          key={name}
          type="button"
          onClick={() => onSelect(i)}
          className={cn(
            'flex items-center justify-center',
            'font-body font-normal text-[14px] leading-[18px] text-center',
            'transition-colors duration-150 cursor-pointer',
            'rounded-[12px]',
            isSelected
              ? 'bg-[#30343F] text-[#FDFDFE]'
              : 'text-[#30343F] hover:bg-[#EFF0F3]',
          )}
        >
          {name}
        </button>
      );
    })}
  </div>
);

/* ────────────────────────────────────────────────────────────── */
/*  Year picker overlay                                          */
/* ────────────────────────────────────────────────────────────── */
interface YearPickerProps {
  currentYear: number;
  decadeStart: number;
  onSelect: (year: number) => void;
  onDecadeChange: (start: number) => void;
}

const YearPicker: FC<YearPickerProps> = ({
  currentYear,
  decadeStart,
  onSelect,
  onDecadeChange,
}) => {
  const years = Array.from({ length: 12 }, (_, i) => decadeStart + i);
  const rangeLabel = `${years[0]} - ${years[years.length - 1]}`;

  return (
    <div className="flex flex-col gap-[16px] items-end justify-center w-full">
      {/* Year grid — 4 cols × 3 rows, h=116 */}
      <div
        className="grid grid-cols-4 gap-x-[10px] gap-y-[10px] w-full"
        style={{ height: '116px' }}
      >
        {years.map((y) => {
          const isSelected = y === currentYear;
          return (
            <button
              key={y}
              type="button"
              onClick={() => onSelect(y)}
              className={cn(
                'flex items-center justify-center',
                'font-body font-normal text-[14px] leading-[18px] text-center',
                'transition-colors duration-150 cursor-pointer',
                'rounded-[12px]',
                isSelected
                  ? 'bg-[#30343F] text-[#FDFDFE]'
                  : 'text-[#30343F] hover:bg-[#EFF0F3]',
              )}
            >
              {y}
            </button>
          );
        })}
      </div>

      {/* Decade navigation */}
      <div className="flex items-center justify-center gap-[4px] w-full">
        <button
          type="button"
          onClick={() => onDecadeChange(decadeStart - 12)}
          className="inline-flex items-center justify-center size-[24px] rounded-[7px] cursor-pointer hover:bg-[#EFF0F3] transition-colors"
          aria-label="Previous decade"
        >
          <ChevronLeftIcon />
        </button>
        <span className="font-body font-bold text-[14px] leading-[18px] text-[#30343F] text-center w-[80px]">
          {rangeLabel}
        </span>
        <button
          type="button"
          onClick={() => onDecadeChange(decadeStart + 12)}
          className="inline-flex items-center justify-center size-[24px] rounded-[7px] cursor-pointer hover:bg-[#EFF0F3] transition-colors"
          aria-label="Next decade"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────── */
/*  CalendarGrid sub-component                                   */
/* ────────────────────────────────────────────────────────────── */
type HeaderView = 'days' | 'months' | 'years';

interface CalendarGridProps {
  year: number;
  month: number;
  showYear: boolean;
  today: Date;
  selectedDate: Date | null;
  rangeStart: Date | null;
  rangeEnd: Date | null;
  isRange: boolean;
  onDayClick: (date: Date) => void;
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
}

const CalendarGrid: FC<CalendarGridProps> = ({
  year,
  month,
  showYear,
  today,
  selectedDate,
  rangeStart,
  rangeEnd,
  isRange,
  onDayClick,
  onMonthChange,
  onYearChange,
}) => {
  const calendarDays = useMemo(() => buildCalendarDays(year, month), [year, month]);
  const [headerView, setHeaderView] = useState<HeaderView>('days');
  const [decadeStart, setDecadeStart] = useState(() => getDecadeStart(year));

  // Check functions
  const isSelectedDay = (date: Date): boolean => {
    if (!isRange) {
      return selectedDate ? isSameDay(date, selectedDate) : false;
    }
    return (
      (rangeStart ? isSameDay(date, rangeStart) : false) ||
      (rangeEnd ? isSameDay(date, rangeEnd) : false)
    );
  };

  const isRangeStart = (date: Date): boolean =>
    isRange && rangeStart ? isSameDay(date, rangeStart) : false;

  const isRangeEnd = (date: Date): boolean =>
    isRange && rangeEnd ? isSameDay(date, rangeEnd) : false;

  const isDayInRange = (date: Date): boolean => {
    if (!isRange) return false;
    return isInRange(date, rangeStart, rangeEnd);
  };

  const handleMonthHeaderClick = useCallback(() => {
    setHeaderView((v) => (v === 'months' ? 'days' : 'months'));
  }, []);

  const handleYearHeaderClick = useCallback(() => {
    setDecadeStart(getDecadeStart(year));
    setHeaderView((v) => (v === 'years' ? 'days' : 'years'));
  }, [year]);

  const handleMonthSelect = useCallback(
    (m: number) => {
      onMonthChange(m);
      setHeaderView('days');
    },
    [onMonthChange],
  );

  const handleYearSelect = useCallback(
    (y: number) => {
      onYearChange(y);
      setHeaderView('days');
    },
    [onYearChange],
  );

  return (
    <div className="flex flex-col gap-[24px] items-end justify-center w-full">
      {/* ── Header: Month / Year ── */}
      <div className="flex items-center justify-between w-full">
        {/* Month dropdown — flex-1, centered */}
        <div className={cn('flex gap-[4px] items-center justify-center', showYear ? 'flex-1' : 'w-full')}>
          <button
            type="button"
            onClick={handleMonthHeaderClick}
            className={cn(
              'font-body font-bold text-[16px] leading-[20px] cursor-pointer',
              'hover:opacity-70 transition-opacity inline-flex items-center gap-[4px]',
              headerView === 'months' ? 'text-[#7A5FFF]' : 'text-[#30343F]',
            )}
          >
            {MONTH_NAMES[month]}
            <ChevronDownIcon />
          </button>
        </div>

        {/* Year dropdown — flex-1, centered */}
        {showYear && (
          <div className="flex flex-1 gap-[4px] items-center justify-center">
            <button
              type="button"
              onClick={handleYearHeaderClick}
              className={cn(
                'font-body font-bold text-[16px] leading-[20px] cursor-pointer',
                'hover:opacity-70 transition-opacity inline-flex items-center gap-[4px]',
                headerView === 'years' ? 'text-[#7A5FFF]' : 'text-[#30343F]',
              )}
            >
              {year}
              <ChevronDownIcon />
            </button>
          </div>
        )}
      </div>

      {/* ── Grid area — relative container so overlays sit on top ── */}
      <div className="relative w-full" style={{ height: '321px' }}>
        {/* Calendar day grid — always rendered to hold the space */}
        <div
          className={cn(
            'grid grid-cols-7 gap-x-[10px] gap-y-[10px] w-full h-full',
            headerView !== 'days' && 'invisible',
          )}
          style={{ gridTemplateRows: '18px repeat(6, 1fr)' }}
        >
          {/* Day headers */}
          {DAY_HEADERS.map((day) => (
            <p
              key={day}
              className="font-body font-normal text-[14px] leading-[18px] text-[#30343F] text-center self-center"
            >
              {day}
            </p>
          ))}

          {/* Day cells */}
          {calendarDays.map(({ date, isCurrentMonth }, i) => {
            const selected = isSelectedDay(date);
            const isToday = isSameDay(date, today);
            const inRange = isDayInRange(date);
            const isStart = isRangeStart(date);
            const isEnd = isRangeEnd(date);
            const dayOfWeek = i % 7; // 0=Sun, 6=Sat within grid

            // Determine if this day's row position for range band styling
            const hasRangeBand = inRange || isStart || isEnd;

            // Range band background container class
            let rangeBandClass = '';
            if (isRange && hasRangeBand) {
              if (isStart && isEnd) {
                // Same day start+end, no band
                rangeBandClass = '';
              } else if (isStart) {
                rangeBandClass = 'bg-[#EFF0F3] rounded-l-[24px]';
              } else if (isEnd) {
                rangeBandClass = 'bg-[#EFF0F3] rounded-r-[24px]';
              } else if (inRange && !selected) {
                rangeBandClass = 'bg-[#EFF0F3]';
                // Round left edge if Sunday, right edge if Saturday
                if (dayOfWeek === 0) rangeBandClass += ' rounded-l-[24px]';
                if (dayOfWeek === 6) rangeBandClass += ' rounded-r-[24px]';
              }
            }

            return (
              <div
                key={i}
                className={cn(
                  'flex items-center justify-center self-stretch',
                  rangeBandClass,
                )}
              >
                <button
                  type="button"
                  onClick={() => onDayClick(date)}
                  className={cn(
                    'inline-flex items-center justify-center',
                    'w-full h-full rounded-full p-[10px]',
                    'font-heading text-[16px] leading-[20px] text-center',
                    'transition-colors duration-150 cursor-pointer',
                    // Default state
                    !selected && !isToday && !inRange && isCurrentMonth && 'text-[#30343F] font-normal hover:bg-[#EFF0F3]',
                    // Other month days
                    !isCurrentMonth && !selected && !inRange && 'text-[#8D8F97] font-normal hover:bg-[#EFF0F3]',
                    // Today (not selected)
                    isToday && !selected && !inRange && 'border border-[#30343F] text-[#30343F] font-bold bg-[#FDFDFE]',
                    // Today in range
                    isToday && !selected && inRange && 'border border-[#30343F] text-[#30343F] font-bold bg-[#EFF0F3]',
                    // Selected (single mode)
                    selected && !isStart && !isEnd && 'bg-[#30343F] text-[#FDFDFE] font-semibold',
                    // Range start
                    isStart && 'bg-[#30343F] text-[#FDFDFE] font-semibold',
                    // Range end
                    isEnd && !isStart && 'bg-[#30343F] text-[#FDFDFE] font-semibold',
                    // In range (between start and end)
                    inRange && !selected && !isToday && 'text-[#30343F] font-semibold',
                  )}
                  aria-label={date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  aria-pressed={selected}
                  aria-current={isToday ? 'date' : undefined}
                >
                  {date.getDate()}
                </button>
              </div>
            );
          })}
        </div>

        {/* ── Month picker overlay — absolute, sits on top of the grid ── */}
        {headerView === 'months' && (
          <div className="absolute inset-0 bg-[#FDFDFE] flex flex-col items-end justify-center z-10">
            <MonthPicker
              currentMonth={month}
              onSelect={handleMonthSelect}
            />
          </div>
        )}

        {/* ── Year picker overlay — absolute, sits on top of the grid ── */}
        {headerView === 'years' && (
          <div className="absolute inset-0 bg-[#FDFDFE] flex flex-col items-end justify-center z-10">
            <YearPicker
              currentYear={year}
              decadeStart={decadeStart}
              onSelect={handleYearSelect}
              onDecadeChange={setDecadeStart}
            />
          </div>
        )}
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────── */
/*  Preset chips                                                 */
/* ────────────────────────────────────────────────────────────── */
interface PresetChipsProps {
  presets: string[];
  activePreset?: string;
  onSelect?: (preset: string) => void;
}

const PresetChips: FC<PresetChipsProps> = ({ presets, activePreset, onSelect }) => (
  <div className="flex flex-col gap-[8px] shrink-0">
    {presets.map((preset) => {
      const isActive = activePreset === preset;
      return (
        <button
          key={preset}
          type="button"
          onClick={() => onSelect?.(preset)}
          className={cn(
            'inline-flex items-center justify-center',
            'h-[32px] px-[12px] rounded-[10px]',
            'font-body font-medium text-[16px] leading-[20px] tracking-[-0.384px]',
            'transition-colors cursor-pointer whitespace-nowrap',
            isActive
              ? 'bg-[#7A5FFF] text-[#F1F5FF] border-0'
              : 'border border-solid border-[#D7D8DC] text-[#30343F] bg-transparent hover:bg-[#EFF0F3]',
          )}
        >
          {preset}
        </button>
      );
    })}
  </div>
);

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const CalendarDatePicker: FC<CalendarDatePickerProps> = ({
  mode = 'single',
  selectedDate = null,
  startDate = null,
  endDate = null,
  onDateSelect,
  onRangeSelect,
  onApply,
  onCancel,
  showYear = true,
  showPresets = false,
  presets = DEFAULT_PRESETS,
  onPresetSelect,
  activePreset,
  timezone,
  className,
  footer,
}) => {
  const today = useMemo(() => new Date(), []);
  const isRange = mode === 'range' || mode === 'range-no-year' || mode === 'dual';
  const effectiveShowYear = mode === 'range-no-year' ? false : showYear;
  const effectiveShowPresets = showPresets || mode === 'range' || mode === 'dual';

  // ── Calendar navigation state ──
  const [viewMonth, setViewMonth] = useState(
    selectedDate?.getMonth() ?? startDate?.getMonth() ?? today.getMonth(),
  );
  const [viewYear, setViewYear] = useState(
    selectedDate?.getFullYear() ?? startDate?.getFullYear() ?? today.getFullYear(),
  );

  // For dual mode — second calendar
  const [viewMonth2, setViewMonth2] = useState(() => {
    const m = viewMonth + 1;
    return m > 11 ? 0 : m;
  });
  const [viewYear2, setViewYear2] = useState(() => {
    return viewMonth === 11 ? viewYear + 1 : viewYear;
  });

  // ── Internal selection state ──
  const [rangeStart, setRangeStart] = useState<Date | null>(startDate);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(endDate);
  const [internalSelected, setInternalSelected] = useState<Date | null>(selectedDate);

  // ── Day click handler ──
  const handleDayClick = useCallback(
    (date: Date) => {
      if (!isRange) {
        setInternalSelected(date);
        onDateSelect?.(date);
      } else {
        // Range mode
        if (!rangeStart || (rangeStart && rangeEnd)) {
          setRangeStart(date);
          setRangeEnd(null);
        } else {
          if (date.getTime() < rangeStart.getTime()) {
            setRangeEnd(rangeStart);
            setRangeStart(date);
            onRangeSelect?.(date, rangeStart);
          } else {
            setRangeEnd(date);
            onRangeSelect?.(rangeStart, date);
          }
        }
      }
    },
    [isRange, rangeStart, rangeEnd, onDateSelect, onRangeSelect],
  );

  // ── Whether Apply should be enabled ──
  const canApply = !isRange ? !!internalSelected : !!(rangeStart && rangeEnd);

  // ── Timezone element ──
  const timezoneElement = (
    <div className="flex items-center px-[8px] w-full">
      <span className="font-body font-normal text-[10px] leading-[12px] text-[#8D8F97]">
        {timezone ? (
          <>
            Time Zone:{' '}
            <span className="font-bold tracking-[-0.24px]">{timezone}</span>
          </>
        ) : (
          'UTC+0'
        )}
      </span>
    </div>
  );

  // ── Footer buttons ──
  const footerButtons = footer !== undefined ? (
    footer
  ) : (
    <div className="flex items-start gap-[8px]">
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className={cn(
            'inline-flex items-center justify-center',
            'h-[40px] px-[16px] min-w-[64px] rounded-[12px]',
            'font-body font-medium text-[16px] leading-[20px] tracking-[-0.384px]',
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
        onClick={onApply}
        disabled={!canApply}
        className={cn(
          'inline-flex items-center justify-center',
          'h-[40px] px-[16px] min-w-[64px] rounded-[12px]',
          'font-body font-medium text-[16px] leading-[20px] tracking-[-0.384px]',
          'transition-colors',
          canApply
            ? 'bg-[#7A5FFF] text-[#F1F5FF] hover:bg-[#6F54EB] active:bg-[#5A41D6] cursor-pointer'
            : 'bg-[#EFF0F3] border border-solid border-[#D7D8DC] text-[#B2B4BA] opacity-75 cursor-not-allowed',
        )}
      >
        Apply
      </button>
    </div>
  );

  // ── Dual mode (Variant3) ──
  if (mode === 'dual') {
    return (
      <div className={cn('flex flex-col gap-[18px] items-start', className)}>
        {/* Dialog container */}
        <div
          className={cn(
            'inline-flex',
            'bg-[#FDFDFE] border border-[#EFF0F3]',
            'rounded-[28px]',
            'p-[24px] gap-[24px]',
            'shadow-[0px_2px_4px_rgba(18,20,22,0.06),0px_4px_8px_rgba(18,20,22,0.1)]',
          )}
        >
          {/* Presets */}
          {effectiveShowPresets && (
            <PresetChips
              presets={presets}
              activePreset={activePreset}
              onSelect={onPresetSelect}
            />
          )}

          {/* Calendar 1 */}
          <div className="flex flex-col gap-[24px] min-w-[351px]">
            <CalendarGrid
              year={viewYear}
              month={viewMonth}
              showYear={effectiveShowYear}
              today={today}
              selectedDate={internalSelected}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              isRange
              onDayClick={handleDayClick}
              onMonthChange={setViewMonth}
              onYearChange={setViewYear}
            />
          </div>

          {/* Calendar 2 */}
          <div className="flex flex-col gap-[24px] min-w-[351px]">
            <CalendarGrid
              year={viewYear2}
              month={viewMonth2}
              showYear={effectiveShowYear}
              today={today}
              selectedDate={internalSelected}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              isRange
              onDayClick={handleDayClick}
              onMonthChange={setViewMonth2}
              onYearChange={setViewYear2}
            />
          </div>
        </div>

        {/* Footer outside dialog for dual */}
        <div className="flex items-center justify-between w-full">
          {timezoneElement}
          {footerButtons}
        </div>
      </div>
    );
  }

  // ── Single / Range modes ──
  return (
    <div
      className={cn(
        'inline-flex flex-col',
        'bg-[#FDFDFE] border border-[#EFF0F3]',
        'rounded-[28px]',
        'p-[24px] gap-[24px]',
        'shadow-[0px_2px_4px_rgba(18,20,22,0.06),0px_4px_8px_rgba(18,20,22,0.1)]',
        'min-w-[399px]',
        className,
      )}
    >
      <div className="flex gap-[24px]">
        {/* Presets (range mode with year) */}
        {effectiveShowPresets && (
          <PresetChips
            presets={presets}
            activePreset={activePreset}
            onSelect={onPresetSelect}
          />
        )}

        {/* Calendar */}
        <div className="flex flex-col gap-[8px] w-full">
          <CalendarGrid
            year={viewYear}
            month={viewMonth}
            showYear={effectiveShowYear}
            today={today}
            selectedDate={internalSelected}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            isRange={isRange}
            onDayClick={handleDayClick}
            onMonthChange={setViewMonth}
            onYearChange={setViewYear}
          />

          {/* Timezone + Buttons */}
          {timezoneElement}
          <div className="flex items-center justify-end w-full">
            {footerButtons}
          </div>
        </div>
      </div>
    </div>
  );
};

CalendarDatePicker.displayName = 'CalendarDatePicker';
