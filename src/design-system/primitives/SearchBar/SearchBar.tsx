/**
 * Olamee Design System — Search Bar
 *
 * Mirrors Figma "Search Bar" component set (node 2390:40348).
 * A pill-shaped search input with magnifying glass icon and optional clear button.
 *
 * States: Default, Selected (focused), Filled
 *
 * Specs from Figma:
 *   h=36px, rounded-24 (full pill), px=16, py=8, min-w=300
 *   Search icon: 16×16px
 *   X/clear icon: 12×12px
 *   Border default: #B2B4BA, border selected: #30343F
 *   Placeholder: "Search" in #8D8F97
 *   Filled text: #30343F, font Karla Medium
 *
 * Figma node: 2390:40348
 */

import { forwardRef, type InputHTMLAttributes, useState } from 'react';
import { cn } from '../../lib/cn';

/* ────────────────────────────────────────────────────────────── */
/*  FontAwesome icon components                                  */
/* ────────────────────────────────────────────────────────────── */
const SearchIcon = () => (
  <i className="fa-regular fa-magnifying-glass text-[12px] text-[#8D8F97]" />
);

const ClearIcon = () => (
  <i className="fa-regular fa-xmark text-[10px] text-[#8D8F97]" />
);

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */
export interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Show clear (X) button when there's a value */
  showClear?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      showClear = true,
      onClear,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const hasValue = !!(value || defaultValue);

    const borderColor = focused
      ? 'border-[#30343F]'     // Gunmetal/gunmetal-base — Selected state
      : 'border-[#B2B4BA]';   // Gunmetal/gunmetal-300 — Default/Filled

    return (
      <div
        className={cn(
          'flex items-center',
          'bg-[#FDFDFE] border border-solid',
          'h-[36px] min-w-[300px] w-[300px]',
          'rounded-[24px]',
          'px-[16px] py-[8px]',
          'overflow-clip',
          borderColor,
          className,
        )}
      >
        {/* ── Search content ── */}
        <div className="flex items-center gap-[10px] flex-1 min-w-0">
          {/* Search icon */}
          <span className="inline-flex items-center justify-center p-[2px] shrink-0 size-[16px]">
            <SearchIcon />
          </span>

          {/* Input */}
          <input
            ref={ref}
            type="search"
            value={value}
            defaultValue={defaultValue}
            placeholder="Search"
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            className={cn(
              'flex-1 min-w-0 bg-transparent outline-none',
              'font-body text-[14px] leading-[18px]',
              'text-[#30343F] font-medium tracking-[-0.175px]',
              'placeholder:text-[#8D8F97] placeholder:font-normal placeholder:tracking-normal',
              // Remove default search input styling
              '[&::-webkit-search-cancel-button]:hidden',
              '[&::-webkit-search-decoration]:hidden',
            )}
            {...props}
          />

          {/* Clear icon */}
          {showClear && (hasValue || focused) && (
            <button
              type="button"
              onClick={onClear}
              tabIndex={-1}
              className="inline-flex items-center justify-center p-[2px] shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Clear search"
            >
              <span className="inline-flex items-center justify-center p-[2px] size-[12px]">
                <ClearIcon />
              </span>
            </button>
          )}
        </div>
      </div>
    );
  },
);

SearchBar.displayName = 'SearchBar';
