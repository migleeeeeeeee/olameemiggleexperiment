/**
 * Olamee Design System — Tooltip
 *
 * 100% Figma-faithful implementation of "Tooltip" (node 687:7483).
 * Built on Radix UI Tooltip primitive.
 *
 * Two visual styles:
 *  1. Tooltip (Plain) — dark bg, single or multi-line text
 *  2. RichTooltip — light bg with title, body, optional icon, action buttons
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Plain Tooltip Specs                                                 │
 * │  Single-line: bg #30343F, rounded-4, px-8 py-4, max-w-560          │
 * │  Multi-line:  bg #30343F, rounded-4, p-8, max-w-400, min-w-200     │
 * │  Font: Karla Medium 12/14, text #FDFDFE                            │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Rich Tooltip Specs                                                  │
 * │  bg #F6F4FF (primary-50), rounded-12, pt-12 pb-8                   │
 * │  shadow: 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)│
 * │  w-312                                                             │
 * │  Title: Karla Bold 14/18, text #30343F                             │
 * │  Body:  Karla Medium 14/18, text #6A6D76, tracking -0.175          │
 * │  Actions: tertiary/violet xsmall buttons, right-aligned            │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../lib/cn';

/* ─── Plain Tooltip ────────────────────────────────────────────── */

export interface TooltipProps {
  /** Tooltip text or content */
  content: ReactNode;
  /** Trigger element */
  children: ReactNode;
  /** Placement side */
  side?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>['side'];
  /** Alignment along the side */
  align?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>['align'];
  /** Hover delay in ms */
  delayDuration?: number;
  /** Allow multi-line wrapping (wider container) */
  multiline?: boolean;
}

export function Tooltip({
  content,
  children,
  side = 'top',
  align = 'start',
  delayDuration = 200,
  multiline = false,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={4}
            className={cn(
              'z-50 overflow-hidden rounded-[4px]',
              'bg-gunmetal text-lavender-50',
              'font-body font-medium',
              'text-[length:12px] leading-[14px]',
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              multiline
                ? 'p-[8px] max-w-[400px] min-w-[200px]'
                : 'px-[8px] py-[4px] max-w-[560px]',
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-gunmetal" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

/* ─── Rich Tooltip ─────────────────────────────────────────────── */

export interface RichTooltipProps {
  /** Trigger element */
  children: ReactNode;
  /** Optional title (bold, dark) */
  title?: string;
  /** Body / supporting text */
  body: string;
  /** Optional icon element (placed before body text) */
  icon?: ReactNode;
  /** Action buttons (rendered bottom-right) */
  actions?: ReactNode;
  /** Placement side */
  side?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>['side'];
  /** Alignment along the side */
  align?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>['align'];
  /** Hover delay in ms */
  delayDuration?: number;
}

export function RichTooltip({
  children,
  title,
  body,
  icon,
  actions,
  side = 'bottom',
  align = 'start',
  delayDuration = 200,
}: RichTooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={4}
            className={cn(
              'z-50 overflow-hidden rounded-[12px]',
              'bg-primary-50 w-[312px]',
              'flex flex-col gap-[8px]',
              'pt-[12px] pb-[8px]',
              'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]',
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            )}
          >
            {/* Text content area */}
            <div className="flex flex-col gap-[4px] px-[16px] pb-[4px]">
              {title && (
                <p className="font-body font-bold text-[length:14px] leading-[18px] text-gunmetal">
                  {title}
                </p>
              )}
              <div className="flex items-start gap-[8px]">
                {icon && (
                  <span className="flex shrink-0 items-center justify-center size-[16px] mt-[1px]">
                    {icon}
                  </span>
                )}
                <p className="font-body font-medium text-[length:14px] leading-[18px] tracking-[-0.175px] text-gunmetal-500">
                  {body}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            {actions && (
              <div className="flex items-center justify-end gap-[8px] px-[8px]">
                {actions}
              </div>
            )}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
