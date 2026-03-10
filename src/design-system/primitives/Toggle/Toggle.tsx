/**
 * Olamee Design System — Toggle / Switch
 *
 * 100% Figma-faithful implementation of "Toggle" (node 1803:18349).
 *
 * Built on Radix UI Switch primitive.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Toggle Component                                                      │
 * │                                                                      │
 * │ Variants (from Figma):                                               │
 * │   On:     Yes | No                                                   │
 * │   State:  Enabled | Hovered | Focused | Pressed | Disabled           │
 * │                                                                      │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Specs (from Figma)                                                    │
 * │   track:       32×18px, rounded-[12px] (pill)                        │
 * │   on:          bg primary (#7A5FFF), px-[2.5px], py-[2px]           │
 * │   off:         bg gunmetal-100 (#EFF0F3), border 2px gunmetal-400   │
 * │   thumb (on):  13px white circle, shadow-xs, aligned right          │
 * │   thumb (off): 10px gunmetal-400 circle, aligned left               │
 * │   disabled:    lighter/grayed out colors                             │
 * │   transition:  smooth 150ms transform                                │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../lib/cn';

export interface ToggleProps extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /** Label text rendered next to the toggle */
  label?: string;
}

export const Toggle = forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  ToggleProps
>(({ className, label, id, ...props }, ref) => {
  const toggleId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex items-center gap-[8px]">
      <SwitchPrimitive.Root
        ref={ref}
        id={toggleId}
        className={cn(
          /* Track — 32×18px pill */
          'peer inline-flex items-center shrink-0 cursor-pointer',
          'h-[18px] w-[32px] rounded-[12px]',
          'transition-colors duration-150',
          /* Off state: gunmetal-100 bg + 2px gunmetal-400 border */
          'bg-gunmetal-100 border-2 border-solid border-gunmetal-400',
          /* On state: primary bg, no visible border */
          'data-[state=checked]:bg-primary data-[state=checked]:border-primary',
          /* Focus ring */
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          /* Disabled */
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            'pointer-events-none block rounded-full',
            'transition-all duration-150',
            /* Off thumb: 10px, gunmetal-400 colored */
            'size-[10px] bg-gunmetal-400',
            'translate-x-[2px]',
            /* On thumb: 13px, white with shadow */
            'data-[state=checked]:size-[13px] data-[state=checked]:bg-white',
            'data-[state=checked]:shadow-[0px_1px_2px_0px_rgba(18,20,22,0.05)]',
            /* Slide to right on checked — track inner width = 32 - 4(border) = 28, minus thumb 13px = 15px offset, minus 2px start = translate ~13px */
            'data-[state=checked]:translate-x-[13px]',
          )}
        />
      </SwitchPrimitive.Root>
      {label && (
        <label
          htmlFor={toggleId}
          className={cn(
            'font-body font-medium',
            'text-[length:var(--font-size-body-base)] leading-[var(--line-height-body-base)]',
            'tracking-[-0.175px]',
            'text-gunmetal cursor-pointer',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
});

Toggle.displayName = 'Toggle';
