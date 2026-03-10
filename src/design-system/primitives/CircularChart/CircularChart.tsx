/**
 * Olamee Design System — CircularChart
 * Donut-style circular progress indicator from Figma "Circular Chart".
 *
 * Sizes: xs (36px), sm (48px), md (56px), lg (64px).
 * Uses SVG for the arc. Inner radius is 75% (ring thickness = 25% of radius).
 */

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const circularChartVariants = cva('relative inline-flex items-center justify-center', {
  variants: {
    size: {
      xs: 'w-[36px] h-[36px]',
      sm: 'w-[48px] h-[48px]',
      md: 'w-[56px] h-[56px]',
      lg: 'w-[64px] h-[64px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const sizeMap = {
  xs: { px: 36, fontSize: 10, strokeWidth: 4.5 },
  sm: { px: 48, fontSize: 12, strokeWidth: 6 },
  md: { px: 56, fontSize: 14, strokeWidth: 7 },
  lg: { px: 64, fontSize: 16, strokeWidth: 8 },
} as const;

export interface CircularChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof circularChartVariants> {
  /** 0–100 */
  value?: number;
  /** Track color (default: #EFF0F3) */
  trackColor?: string;
  /** Fill color (default: #7A5FFF — primary) */
  fillColor?: string;
  /** Text color (default: #6249D4) */
  textColor?: string;
  /** Whether to show the percentage label inside */
  showLabel?: boolean;
}

export const CircularChart = forwardRef<HTMLDivElement, CircularChartProps>(
  (
    {
      className,
      size = 'md',
      value = 0,
      trackColor = '#EFF0F3',
      fillColor = '#7A5FFF',
      textColor = '#6249D4',
      showLabel = true,
      ...props
    },
    ref,
  ) => {
    const sizeKey = size ?? 'md';
    const { px, fontSize, strokeWidth } = sizeMap[sizeKey];
    const radius = (px - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const clamped = Math.min(100, Math.max(0, value));
    const offset = circumference - (clamped / 100) * circumference;

    return (
      <div
        ref={ref}
        className={cn(circularChartVariants({ size }), className)}
        {...props}
      >
        <svg
          width={px}
          height={px}
          viewBox={`0 0 ${px} ${px}`}
          className="-rotate-90"
        >
          {/* Track */}
          <circle
            cx={px / 2}
            cy={px / 2}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Fill */}
          <circle
            cx={px / 2}
            cy={px / 2}
            r={radius}
            fill="none"
            stroke={fillColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-[stroke-dashoffset] duration-500 ease-out"
          />
        </svg>

        {/* Percentage label */}
        {showLabel && (
          <span
            className="absolute inset-0 flex items-center justify-center font-body font-bold tabular-nums"
            style={{ fontSize, color: textColor }}
          >
            {Math.round(clamped)}%
          </span>
        )}
      </div>
    );
  },
);

CircularChart.displayName = 'CircularChart';
export { circularChartVariants };
