/**
 * Olamee Design System — Snackbar
 *
 * Figma-faithful implementation from "Snackbars, Toast and Notification" page.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Specs (from Figma)                                                  │
 * │  Container: bg #FDFDFE, rounded-8                                   │
 * │  Shadow: 0 12px 16px -4px rgba(18,20,22,0.08),                     │
 * │          0 4px 6px -2px rgba(18,20,22,0.03)                        │
 * │  Layout: horizontal, center-aligned, px-24 py-14, gap-48           │
 * │  Text: Karla Regular 14/18, color #30343F                          │
 * │  Action: Tertiary Button xsmall Violet ("Dismiss")                  │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  /** Message text to display */
  message: ReactNode;
  /** Action button label. Default "Dismiss". */
  actionLabel?: string;
  /** Called when action button is clicked */
  onAction?: () => void;
  /** Called when snackbar should be dismissed */
  onDismiss?: () => void;
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ className, message, actionLabel = 'Dismiss', onAction, onDismiss, ...props }, ref) => {
    const handleAction = () => {
      onAction?.();
      onDismiss?.();
    };

    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          'inline-flex items-center gap-[48px]',
          'px-[24px] py-[14px]',
          'bg-[#FDFDFE] rounded-[8px]',
          'shadow-[0_12px_16px_-4px_rgba(18,20,22,0.08),0_4px_6px_-2px_rgba(18,20,22,0.03)]',
          'font-body',
          className,
        )}
        {...props}
      >
        {/* Message */}
        <p className="text-[length:14px] leading-[18px] font-normal text-[#30343F] flex-1">
          {message}
        </p>

        {/* Action button — styled as Tertiary xsmall Violet from Figma */}
        <button
          type="button"
          onClick={handleAction}
          className={cn(
            'shrink-0 inline-flex items-center justify-center',
            'px-[8px] h-[26px] rounded-[8px]',
            'text-[length:12px] leading-[18px] font-semibold font-body tracking-[-0.12px]',
            'text-[#6F54EB] hover:text-[#6249D4] active:text-[#513CCB]',
            'hover:bg-[#6F54EB]/8 active:bg-[#6F54EB]/12',
            'transition-colors duration-150',
          )}
        >
          {actionLabel}
        </button>
      </div>
    );
  },
);

Snackbar.displayName = 'Snackbar';
