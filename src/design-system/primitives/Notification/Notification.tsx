/**
 * Olamee Design System — Notification
 *
 * Figma-faithful implementation from "Snackbars, Toast and Notification" page.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Variant Axes (Figma)                                                │
 * │  type:       success · warning · error · info                       │
 * │  withHeader: true · false                                           │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Specs (from Figma)                                                  │
 * │  Container: w-360, rounded-8, px-12 py-8, gap-4                    │
 * │  With Header:                                                       │
 * │    Row 1: icon 16x16 + header text (Karla Bold 12/14)              │
 * │    Row 2: description (Karla Regular 10/12)                         │
 * │  Without Header:                                                    │
 * │    Single row: icon 16x16 + description (Karla Regular 10/12)       │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Type Colors                                                         │
 * │  success: bg #E8F4E6, icon/header #366F2C, icon: circle-check      │
 * │  warning: bg #FBF7D9, icon/header #8B7F20, icon: triangle-excl.    │
 * │  error:   bg #FCF0F1, icon/header #D62839, icon: circle-xmark      │
 * │  info:    bg #DEFCFF, icon/header #0DA5BF, icon: circle-info       │
 * │  Description text: #30343F for all types                            │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

/* ── Type config ──────────────────────────────────────────────── */
const typeConfig = {
  success: {
    icon: 'fa-regular fa-circle-check',
    iconColor: 'text-[#366F2C]',
    headerColor: 'text-[#366F2C]',
    bg: 'bg-[#E8F4E6]',
  },
  warning: {
    icon: 'fa-regular fa-triangle-exclamation',
    iconColor: 'text-[#8B7F20]',
    headerColor: 'text-[#8B7F20]',
    bg: 'bg-[#FBF7D9]',
  },
  error: {
    icon: 'fa-regular fa-circle-xmark',
    iconColor: 'text-[#D62839]',
    headerColor: 'text-[#D62839]',
    bg: 'bg-[#FCF0F1]',
  },
  info: {
    icon: 'fa-regular fa-circle-info',
    iconColor: 'text-[#0DA5BF]',
    headerColor: 'text-[#0DA5BF]',
    bg: 'bg-[#DEFCFF]',
  },
} as const;

/* ── CVA variants ─────────────────────────────────────────────── */
const notificationVariants = cva(
  [
    'w-full max-w-[360px]',
    'flex flex-col gap-[4px]',
    'px-[12px] py-[8px]',
    'rounded-[8px]',
    'overflow-hidden',
    'font-body',
  ],
  {
    variants: {
      type: {
        success: 'bg-[#E8F4E6]',
        warning: 'bg-[#FBF7D9]',
        error: 'bg-[#FCF0F1]',
        info: 'bg-[#DEFCFF]',
      },
    },
    defaultVariants: {
      type: 'success',
    },
  },
);

/* ── Types ────────────────────────────────────────────────────── */
export interface NotificationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof notificationVariants> {
  /** Header title. If omitted, renders the "no header" variant. */
  title?: ReactNode;
  /** Description / body text */
  description: ReactNode;
}

/* ── Component ────────────────────────────────────────────────── */
export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ className, type = 'success', title, description, ...props }, ref) => {
    const config = typeConfig[type ?? 'success'];

    // With header variant
    if (title) {
      return (
        <div
          ref={ref}
          role="alert"
          className={cn(notificationVariants({ type }), className)}
          {...props}
        >
          {/* Header row: icon + title */}
          <div className="flex items-center gap-[4px]">
            <span className="flex shrink-0 items-center justify-center size-[16px]">
              <i className={cn(config.icon, config.iconColor, 'text-[12px]')} />
            </span>
            <span className={cn('text-[length:12px] leading-[14px] font-bold font-body', config.headerColor)}>
              {title}
            </span>
          </div>

          {/* Description */}
          <p className="text-[length:10px] leading-[12px] font-normal font-body text-[#30343F]">
            {description}
          </p>
        </div>
      );
    }

    // Without header variant — icon inline with description
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(notificationVariants({ type }), className)}
        {...props}
      >
        <div className="flex gap-[4px]">
          <span className="flex shrink-0 items-center justify-center size-[16px]">
            <i className={cn(config.icon, config.iconColor, 'text-[12px]')} />
          </span>
          <p className="text-[length:10px] leading-[12px] font-normal font-body text-[#30343F] flex-1">
            {description}
          </p>
        </div>
      </div>
    );
  },
);

Notification.displayName = 'Notification';
export { notificationVariants };
