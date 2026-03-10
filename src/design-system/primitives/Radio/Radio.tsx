/**
 * Olamee Design System — Radio Group
 *
 * 100% Figma-faithful implementation of "Radio Buttons" (node 591:3859).
 *
 * Built on Radix UI RadioGroup primitive.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Radio Buttons Component                                               │
 * │                                                                      │
 * │ Variants (from Figma):                                               │
 * │   Selected:  true | false                                            │
 * │   State:     Default | Hovered | Disabled                            │
 * │                                                                      │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Specs (from Figma)                                                    │
 * │   circle:      18×18px, rounded-full                                 │
 * │   hitbox:      30×30px (6px padding)                                 │
 * │   selected:    border 1.5px primary, inner dot 8px primary           │
 * │   unselected:  border 1.5px gunmetal-500                             │
 * │   hovered:     circular gunmetal-100 bg behind radio (30px)         │
 * │   disabled:    border gunmetal-300, dot gunmetal-300                 │
 * │   label:       Karla Medium 14/18, text gunmetal                    │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, useContext, createContext, type ComponentPropsWithoutRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '../../lib/cn';

/* ─── Disabled context to propagate group-level disabled to items ─── */
const RadioDisabledContext = createContext(false);

export const RadioGroup = forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, disabled, ...props }, ref) => (
  <RadioDisabledContext.Provider value={disabled ?? false}>
    <RadioGroupPrimitive.Root
      ref={ref}
      disabled={disabled}
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  </RadioDisabledContext.Provider>
));
RadioGroup.displayName = 'RadioGroup';

export interface RadioItemProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  /** Label text rendered next to the radio button */
  label?: string;
}

export const RadioItem = forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ className, label, id, disabled: itemDisabled, ...props }, ref) => {
  const radioId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const groupDisabled = useContext(RadioDisabledContext);
  const isDisabled = itemDisabled || groupDisabled;

  return (
    <div className="flex items-center gap-[8px]">
      {/* Hover target wrapper — creates the circular hover bg (30×30px) */}
      <div
        className={cn(
          'relative flex items-center justify-center',
          'size-[30px] rounded-full',
          'transition-colors duration-150',
          !isDisabled && 'hover:bg-gunmetal-100',
        )}
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          id={radioId}
          disabled={itemDisabled}
          className={cn(
            'relative flex items-center justify-center',
            'size-[18px] rounded-full',
            'transition-colors duration-150',
            /* Border */
            'border-[1.5px] border-solid',
            isDisabled ? 'border-gunmetal-300' : 'border-gunmetal-500',
            /* Selected: border changes to primary */
            isDisabled
              ? 'data-[state=checked]:border-gunmetal-300'
              : 'data-[state=checked]:border-primary',
            /* Disabled cursor */
            isDisabled && 'cursor-not-allowed',
            /* Focus ring */
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
            className,
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            {/* Inner dot — 8px */}
            <div
              className={cn(
                'size-[8px] rounded-full',
                isDisabled ? 'bg-gunmetal-300' : 'bg-primary',
              )}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
      </div>
      {label && (
        <label
          htmlFor={radioId}
          className={cn(
            'font-body font-medium',
            'text-[length:var(--font-size-body-base)] leading-[var(--line-height-body-base)]',
            'tracking-[-0.175px]',
            'text-gunmetal cursor-pointer',
            isDisabled && 'cursor-not-allowed opacity-50',
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
});
RadioItem.displayName = 'RadioItem';
