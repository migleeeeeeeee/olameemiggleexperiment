/**
 * Olamee Design System — ProgressBar
 * Built on Radix UI Progress. Mirrors Figma "Progress Bar / Indicator" page.
 */

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const progressVariants = cva('relative w-full overflow-hidden rounded-full bg-gunmetal-100', {
  variants: {
    size: {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4',
    },
    color: {
      primary: '[&>div]:bg-primary',
      secondary: '[&>div]:bg-secondary',
      success: '[&>div]:bg-mantis',
      warning: '[&>div]:bg-orange',
      danger: '[&>div]:bg-red',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export interface ProgressBarProps
  extends Omit<ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, 'color'>,
    VariantProps<typeof progressVariants> {
  /** 0–100 */
  value?: number;
  /** Show percentage label */
  showLabel?: boolean;
}

export const ProgressBar = forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressBarProps
>(({ className, size, color, value = 0, showLabel, ...props }, ref) => (
  <div className="flex items-center gap-3 w-full">
    <ProgressPrimitive.Root
      ref={ref}
      value={value}
      className={cn(progressVariants({ size, color }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full rounded-full transition-[width] duration-300 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </ProgressPrimitive.Root>
    {showLabel && (
      <span className="text-[length:var(--font-size-body-xs)] font-semibold text-gunmetal-500 tabular-nums min-w-[3ch]">
        {Math.round(value)}%
      </span>
    )}
  </div>
));

ProgressBar.displayName = 'ProgressBar';
