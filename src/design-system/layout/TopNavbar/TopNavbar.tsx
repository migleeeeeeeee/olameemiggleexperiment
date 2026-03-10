/**
 * TopNavbar — Top navigation bar layout component
 *
 * Figma: "Top navbar" component set (node 2958:31674)
 * Variants: State = Default | Create Clicked | On-going Call
 *
 * Structure: 88px nav bar + 4px bottom gradient accent bar = 92px total
 * Layout: Horizontal, px-32, pt-14px pb-18px, gap-24, items center-aligned
 * BG: gunmetal-50 (#F5F6F8)
 *
 * Contents (Default state):
 *   Left: Logo (AbroadWorks/Olamee) + SearchBar
 *   Right: Create button + Bell icon button + User avatar + name
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

export type TopNavbarState = 'default' | 'create-clicked' | 'on-going-call';

export interface TopNavbarProps extends HTMLAttributes<HTMLElement> {
  /** Left slot — typically logo, breadcrumbs, or back button */
  leftContent?: ReactNode;
  /** Center slot — typically search bar (placed after left content) */
  centerContent?: ReactNode;
  /** Right slot — typically action buttons, user avatar */
  rightContent?: ReactNode;
  /** Navbar state variant (default: 'default') */
  state?: TopNavbarState;
  /** Dropdown content shown below the navbar (e.g. Create menu) */
  dropdownContent?: ReactNode;
  /** Hide the 4px bottom gradient accent bar (default: false — bar is shown) */
  hideAccentBar?: boolean;
  /** Custom accent bar class (default: brand gradient) */
  accentBarClassName?: string;
}

export const TopNavbar = forwardRef<HTMLElement, TopNavbarProps>(
  (
    {
      leftContent,
      centerContent,
      rightContent,
      state = 'default',
      dropdownContent,
      hideAccentBar = false,
      accentBarClassName,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={cn('relative flex flex-col shrink-0 bg-gunmetal-50', className)}
        {...props}
      >
        {/* Main nav bar — 88px */}
        <div className="flex items-center px-8 pt-[14px] pb-[18px] h-[88px] gap-6">
          {children ?? (
            <>
              {/* Left — logo area */}
              <div className="flex flex-col items-start gap-[10px] w-[117px] h-[50px]">
                {leftContent}
              </div>

              {/* Center — search bar */}
              {centerContent && (
                <div className="flex items-center shrink-0">
                  {centerContent}
                </div>
              )}

              {/* Spacer */}
              <div className="flex-1" />

              {/* Right — actions, notifications, user */}
              <div className="flex items-center gap-2 shrink-0">
                {rightContent}
              </div>
            </>
          )}
        </div>

        {/* 4px gradient accent bar (always present in Figma) */}
        {!hideAccentBar && (
          <div
            className={cn(
              'h-1 w-full rounded-[12px]',
              accentBarClassName ??
                'bg-gradient-to-r from-[#7A5FFF] to-[#5ED4B2]',
            )}
          />
        )}

        {/* Dropdown overlay (Create Clicked state) */}
        {state === 'create-clicked' && dropdownContent && (
          <div className="absolute top-[88px] right-8 z-50">
            {dropdownContent}
          </div>
        )}
      </header>
    );
  },
);

TopNavbar.displayName = 'TopNavbar';
