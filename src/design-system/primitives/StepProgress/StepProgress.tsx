/**
 * Olamee Design System — StepProgress
 * Horizontal step indicator from Figma "Progress bar- Steps Horizontal".
 *
 * Each step displays a circle indicator + label. The active step additionally
 * shows a description. Completed steps show a check icon with a solid circle,
 * the active step shows an outlined circle with bold label, and future steps
 * are lighter.
 */

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface StepItem {
  /** Label displayed below the circle */
  label: string;
  /** Optional description shown only for the active step */
  description?: string;
}

export interface StepProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Array of step definitions */
  steps: StepItem[];
  /** Zero-based index of the currently active step (steps before this are completed) */
  activeStep?: number;
  /** Whether to show the description on the active step */
  showDescription?: boolean;
}

export const StepProgress = forwardRef<HTMLDivElement, StepProgressProps>(
  ({ className, steps, activeStep = 0, showDescription = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-start', className)}
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;
          const isFuture = index > activeStep;

          return (
            <div key={index} className="flex items-start flex-1 last:flex-none">
              {/* Step circle + label + description */}
              <div className="flex flex-col items-center gap-1 shrink-0">
                {/* Circle indicator */}
                <div className="w-6 h-6 flex items-center justify-center">
                  {isCompleted ? (
                    /* Completed: solid circle with check */
                    <div className="w-6 h-6 rounded-full bg-[#7A5FFF] flex items-center justify-center">
                      <i className="fa-solid fa-check text-white text-[10px]" />
                    </div>
                  ) : isActive ? (
                    /* Active: outlined circle */
                    <div className="w-5 h-5 rounded-full border-[1.5px] border-[#7A5FFF]" />
                  ) : (
                    /* Future: lighter outlined circle */
                    <div className="w-5 h-5 rounded-full border-[1.5px] border-[#A394FF]" />
                  )}
                </div>

                {/* Label */}
                <span
                  className={cn(
                    'text-[12px] leading-[14px] font-body text-center whitespace-nowrap',
                    isCompleted && 'text-[#6249D4] font-normal',
                    isActive && 'text-[#6249D4] font-bold',
                    isFuture && 'text-[#7A5FFF] font-normal',
                  )}
                >
                  {step.label}
                </span>

                {/* Description (only on active step) */}
                {isActive && showDescription && step.description && (
                  <span className="text-[10px] leading-[12px] font-body text-[#30343F] text-center max-w-[81px]">
                    {step.description}
                  </span>
                )}
              </div>

              {/* Connector line (not after the last step) */}
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center px-1 pt-[10px]">
                  <div
                    className={cn(
                      'h-[4px] w-full rounded-full',
                      index < activeStep ? 'bg-[#6F54EB]' : 'bg-[#C2B7FF]',
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  },
);

StepProgress.displayName = 'StepProgress';
