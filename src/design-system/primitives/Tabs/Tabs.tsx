/**
 * Olamee Design System — Tabs V2
 *
 * Figma-faithful implementation of "tabs v2" (node 815:44492).
 *
 * Variant Axes (Figma):
 *  color:  Violet / Mint / Dark
 *
 * Container Specs:
 *  bg lavender-50 (#FDFDFE), border 1px gunmetal-300 (#B2B4BA)
 *  rounded-12, p-4, gap-8, flex, overflow-clip
 *
 * Tab Item Specs:
 *  h-32, px-12, rounded-10
 *  Font: Karla Medium 16/20, tracking -0.384px
 *
 * Active Tab Colors:
 *  Violet: bg primary (#7A5FFF), text lavender-50 (#FDFDFE)
 *  Mint:   bg secondary (#5ED4B2), text gunmetal (#30343F)
 *  Dark:   bg space-cadet (#283044), text lavender-50 (#FDFDFE)
 *
 * Inactive Tab: no bg, text gunmetal (#30343F)
 */

import {
  forwardRef,
  createContext,
  useContext,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

/* ─── Active-tab color variants (applied to individual tab items) ─ */

const tabItemVariants = cva(
  [
    'inline-flex items-center justify-center shrink-0',
    'h-[32px] px-[12px]',
    'rounded-[10px]',
    'font-body font-medium',
    'text-[length:16px] leading-[20px] tracking-[-0.384px]',
    'whitespace-nowrap select-none cursor-pointer',
    'transition-colors duration-150',
    'focus-visible:outline-none',
    'focus-visible:ring-[1.5px] focus-visible:ring-gunmetal-500 focus-visible:ring-offset-[2px]',
  ],
  {
    variants: {
      colorScheme: {
        violet: '',
        mint: '',
        dark: '',
      },
      active: {
        true: '',
        false: 'text-[#30343F]',
      },
    },
    compoundVariants: [
      {
        colorScheme: 'violet',
        active: true,
        className: 'bg-[#7A5FFF] text-[#FDFDFE]',
      },
      {
        colorScheme: 'mint',
        active: true,
        className: 'bg-[#5ED4B2] text-[#30343F]',
      },
      {
        colorScheme: 'dark',
        active: true,
        className: 'bg-[#283044] text-[#FDFDFE]',
      },
    ],
    defaultVariants: {
      colorScheme: 'violet',
      active: false,
    },
  },
);

/* ─── Context ─────────────────────────────────────────────────── */

type TabsColor = NonNullable<VariantProps<typeof tabItemVariants>['colorScheme']>;

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  colorScheme: TabsColor;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab.Item must be used inside <Tabs>');
  return ctx;
}

/* ─── Tabs (container) ────────────────────────────────────────── */

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /** Currently active tab value */
  value: string;
  /** Callback when active tab changes */
  onValueChange: (value: string) => void;
  /** Color scheme for the active tab indicator */
  colorScheme?: TabsColor;
  children: ReactNode;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    { className, value, onValueChange, colorScheme = 'violet', children, ...props },
    ref,
  ) => (
    <TabsContext.Provider value={{ value, onValueChange, colorScheme }}>
      <div
        ref={ref}
        role="tablist"
        className={cn(
          'inline-flex items-center gap-[8px]',
          'bg-[#FDFDFE] border border-solid border-[#B2B4BA]',
          'rounded-[12px] p-[4px] overflow-clip',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  ),
);

Tabs.displayName = 'Tabs';

/* ─── Tab (individual tab item) ───────────────────────────────── */

export interface TabProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {
  /** Unique value for this tab — matched against Tabs `value` prop */
  value: string;
  /** Disable this tab */
  disabled?: boolean;
  children: ReactNode;
}

const disabledStyles = [
  'disabled:bg-[#EFF0F3] disabled:text-[#8D8F97] disabled:opacity-75',
  'disabled:pointer-events-none disabled:cursor-not-allowed',
].join(' ');

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ className, value, disabled = false, children, ...props }, ref) => {
    const { value: activeValue, onValueChange, colorScheme } = useTabsContext();
    const isActive = value === activeValue;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        onClick={() => onValueChange(value)}
        className={cn(
          tabItemVariants({ colorScheme, active: isActive }),
          disabled && disabledStyles,
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Tab.displayName = 'Tab';

export { tabItemVariants };
