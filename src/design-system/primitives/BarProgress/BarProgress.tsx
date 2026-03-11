/**
 * Olamee Design System — BarProgress
 * Horizontal progress bar with a floating badge tooltip showing "value/max".
 * From Figma "Bar Progress" component.
 *
 * The track is a rounded line with a primary-colored fill portion.
 * A small badge sits at the fill edge showing the numeric progress.
 */

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface BarProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Current value (default 0) */
  value?: number;
  /** Maximum value (default 100) */
  max?: number;
  /** Track color (default #EFF0F3) */
  trackColor?: string;
  /** Fill color (default #7A5FFF — primary) */
  fillColor?: string;
}

export const BarProgress = forwardRef<HTMLDivElement, BarProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      trackColor = '#EFF0F3',
      fillColor = '#7A5FFF',
      ...props
    },
    ref,
  ) => {
    const clamped = Math.min(max, Math.max(0, value));
    const pct = max > 0 ? (clamped / max) * 100 : 0;

    return (
      <div
        ref={ref}
        className={cn('relative w-full', className)}
        {...props}
      >
        {/* Track + Fill bar */}
        <div className="relative h-[8px] w-full">
          {/* Track */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: trackColor }}
          />
          {/* Fill */}
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-300 ease-out"
            style={{ width: `${pct}%`, backgroundColor: fillColor }}
          />
        </div>

        {/* Floating badge */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-[left] duration-300 ease-out"
          style={{ left: `${pct}%` }}
        >
          <div
            className="px-1 py-1 rounded-[4px] text-[10px] font-body font-bold leading-[12px] text-[#FDFDFE] whitespace-nowrap tabular-nums"
            style={{ backgroundColor: fillColor }}
          >
            {clamped}/{max}
          </div>
        </div>
      </div>
    );
  },
);

BarProgress.displayName = 'BarProgress';
