/**
 * Olamee Design System — Toast
 *
 * Figma-faithful implementation from "Snackbars, Toast and Notification" page.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Variant Axes (Figma)                                                │
 * │  type:   success · error · warning                                  │
 * │  slots:  title (icon + text), description, close button             │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Specs (from Figma)                                                  │
 * │  Container: bg #FDFDFE, border 1px #EFF0F3, rounded-12, p-16       │
 * │  Shadow: 0 4px 8px -2px rgba(18,20,22,0.10),                       │
 * │          0 2px 4px -2px rgba(18,20,22,0.06)                        │
 * │  Title: Karla Bold 14/14, icon 16x16 + gap-8                       │
 * │  Description: Karla Regular 12/14, color #30343F                   │
 * │  Close (X) button: 20x20, positioned absolute top-right            │
 * │  Progress bar: 3px height, bottom-left, rounded-bl-[20px]          │
 * │    success: #5FB54E, error: #D62839, warning: #EAD94C              │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Type Icon + Title Colors                                            │
 * │  success: fa-circle-check (#5FB54E), title "Added Successfully..."  │
 * │  error:   fa-circle-xmark (#D62839), title "Discount Not Available" │
 * │  warning: fa-triangle-exclamation (#EAD94C), title "Warning"        │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, useState, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

/* ── Type config ──────────────────────────────────────────────── */
const typeConfig = {
  success: {
    icon: 'fa-regular fa-circle-check',
    iconColor: 'text-[#5FB54E]',
    titleColor: 'text-[#5FB54E]',
    barColor: 'bg-[#5FB54E]',
  },
  error: {
    icon: 'fa-regular fa-circle-xmark',
    iconColor: 'text-[#D62839]',
    titleColor: 'text-[#D62839]',
    barColor: 'bg-[#D62839]',
  },
  warning: {
    icon: 'fa-regular fa-triangle-exclamation',
    iconColor: 'text-[#EAD94C]',
    titleColor: 'text-[#EAD94C]',
    barColor: 'bg-[#EAD94C]',
  },
} as const;

/* ── CVA variants ─────────────────────────────────────────────── */
const toastVariants = cva(
  [
    'relative w-full max-w-[434px]',
    'flex flex-col gap-[16px]',
    'p-[16px]',
    'bg-[#FDFDFE] border border-[#EFF0F3] rounded-[12px]',
    'shadow-[0_4px_8px_-2px_rgba(18,20,22,0.10),0_2px_4px_-2px_rgba(18,20,22,0.06)]',
    'overflow-hidden',
    'font-body',
  ],
  {
    variants: {
      type: {
        success: '',
        error: '',
        warning: '',
      },
    },
    defaultVariants: {
      type: 'success',
    },
  },
);

/* ── Types ────────────────────────────────────────────────────── */
export interface ToastProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof toastVariants> {
  /** Toast title text */
  title: ReactNode;
  /** Toast description / body text */
  description?: ReactNode;
  /** Called when dismiss button is clicked */
  onDismiss?: () => void;
  /** Duration in ms before auto-dismiss (0 = no auto-dismiss). Default 5000. */
  duration?: number;
  /** Whether to show the animated progress bar. Default true. */
  showProgress?: boolean;
}

/* ── Component ────────────────────────────────────────────────── */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      type = 'success',
      title,
      description,
      onDismiss,
      duration = 5000,
      showProgress = true,
      ...props
    },
    ref,
  ) => {
    const config = typeConfig[type ?? 'success'];
    const [progress, setProgress] = useState(100);

    useEffect(() => {
      if (duration <= 0) return;

      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
        setProgress(remaining);
        if (remaining <= 0) {
          clearInterval(interval);
          onDismiss?.();
        }
      }, 50);

      return () => clearInterval(interval);
    }, [duration, onDismiss]);

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(toastVariants({ type }), className)}
        {...props}
      >
        {/* Header row: icon + title */}
        <div className="flex items-center gap-[8px] pr-[28px]">
          <i className={cn(config.icon, config.iconColor, 'text-[16px] shrink-0')} />
          <span className={cn('text-[length:14px] leading-[14px] font-bold font-body', config.titleColor)}>
            {title}
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-[length:12px] leading-[14px] font-normal font-body text-[#30343F] pr-[28px]">
            {description}
          </p>
        )}

        {/* Dismiss button — absolute top-right */}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="absolute top-[16px] right-[16px] flex items-center justify-center size-[20px] rounded-[4px] text-[#8D8F97] hover:text-[#30343F] hover:bg-[#F5F5F7] transition-colors"
            aria-label="Dismiss toast"
          >
            <i className="fa-regular fa-xmark text-[12px]" />
          </button>
        )}

        {/* Progress bar — bottom-left, absolute */}
        {showProgress && duration > 0 && (
          <div
            className={cn(
              'absolute bottom-0 left-[4px] h-[3px] rounded-bl-[20px] transition-all duration-100 ease-linear',
              config.barColor,
            )}
            style={{ width: `${progress}%` }}
          />
        )}
      </div>
    );
  },
);

Toast.displayName = 'Toast';
export { toastVariants };
