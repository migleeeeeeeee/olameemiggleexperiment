import { useState, useMemo, useCallback, type ReactNode } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../../lib/cn';
import { Chip } from '../../primitives/Chip';
import type { SelectionOption, SelectionFieldSize } from './selectionField.types';
import { dropdownPanelSizeMap } from './selectionField.types';
import { DropdownMenuItem } from './DropdownMenuItem';

/* ─── Size maps (Figma: XS / S / M only) ──────────────────── */
export type MultiSelectorSize = 'extraSmall' | 'small' | 'medium';

/* Trigger/input field — Figma specs: same as SelectionFieldTrigger */
const inputSizeMap: Record<MultiSelectorSize, string> = {
  extraSmall: 'h-[36px] rounded-[8px] text-[length:14px] leading-[18px] tracking-[-0.175px]',
  small: 'h-[48px] rounded-[10px] text-[length:14px] leading-[18px] tracking-[-0.175px]',
  medium: 'h-[56px] rounded-[12px] text-[length:16px] leading-[20px]',
};

/* Label text — Figma: Karla Medium 500 */
const labelSizeMap: Record<MultiSelectorSize, string> = {
  extraSmall: 'text-[length:14px] leading-[18px] tracking-[-0.175px]',
  small: 'text-[length:16px] leading-[20px]',
  medium: 'text-[length:16px] leading-[20px]',
};

/* Label row gap — Figma: XS=4, SM+=8 */
const labelRowGapMap: Record<MultiSelectorSize, string> = {
  extraSmall: 'gap-[4px]',
  small: 'gap-[8px]',
  medium: 'gap-[8px]',
};

/* Label icon wrapper — Figma: XS=16, SM+=20 */
const labelIconSizeMap: Record<MultiSelectorSize, string> = {
  extraSmall: 'size-[16px]',
  small: 'size-[20px]',
  medium: 'size-[20px]',
};

/* ─── Types ────────────────────────────────────────────────── */
export interface MultiSelectorSearchBarProps {
  options: SelectionOption[];
  value?: string[];
  onChange?: (values: string[]) => void;
  size?: MultiSelectorSize;
  label?: string;
  labelIcon?: ReactNode;
  showLabel?: boolean;
  supportingText?: string;
  showSupportingText?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

/* ─── Component ────────────────────────────────────────────── */
export function MultiSelectorSearchBar({
  options,
  value = [],
  onChange,
  size = 'small',
  label,
  labelIcon,
  showLabel = true,
  supportingText,
  showSupportingText = true,
  disabled = false,
  placeholder = 'Search...',
  className,
}: MultiSelectorSearchBarProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedSet = useMemo(() => new Set(value), [value]);

  const filteredOptions = useMemo(() => {
    const remaining = options.filter((o) => !selectedSet.has(o.value));
    if (!searchQuery.trim()) return remaining;
    const q = searchQuery.toLowerCase();
    return remaining.filter(
      (o) => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q),
    );
  }, [options, selectedSet, searchQuery]);

  const getLabel = useCallback(
    (val: string) => options.find((o) => o.value === val)?.label ?? val,
    [options],
  );

  const toggleSelect = useCallback(
    (optionValue: string) => {
      const next = new Set(selectedSet);
      if (next.has(optionValue)) {
        next.delete(optionValue);
      } else {
        next.add(optionValue);
      }
      onChange?.(Array.from(next));
    },
    [selectedSet, onChange],
  );

  const removeItem = useCallback(
    (optionValue: string) => {
      const next = new Set(selectedSet);
      next.delete(optionValue);
      onChange?.(Array.from(next));
    },
    [selectedSet, onChange],
  );

  return (
    <div className={cn('flex flex-col gap-[8px]', className)}>
      {/* Label — Figma: Karla Medium 500, per-size gap & icon */}
      {showLabel && label && (
        <div className={cn('flex items-center', labelRowGapMap[size])}>
          <label className={cn('font-body font-medium text-gunmetal', labelSizeMap[size])}>
            {label}
          </label>
          {labelIcon && (
            <span
              className={cn(
                'flex shrink-0 items-center justify-center',
                labelIconSizeMap[size],
              )}
            >
              {labelIcon}
            </span>
          )}
        </div>
      )}

      {/* Selected chips row */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-[6px]">
          {value.map((v) => (
            <Chip
              key={v}
              onDismiss={disabled ? undefined : () => removeItem(v)}
            >
              {getLabel(v)}
            </Chip>
          ))}
        </div>
      )}

      {/* Search input with dropdown */}
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild disabled={disabled}>
          <div
            className={cn(
              'flex w-full items-center',
              'bg-[#FDFDFE] border border-solid',
              'transition-colors duration-150',
              'gap-[10px] px-[12px] py-[4px]',
              inputSizeMap[size],
              open ? 'border-gunmetal-500' : 'border-[#B2B4BA]',
              disabled && 'opacity-50 cursor-not-allowed bg-gunmetal-50',
            )}
          >
            {/* Search icon */}
            <i className="fa-regular fa-magnifying-glass text-[16px] shrink-0 text-gunmetal-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (!open) setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                'flex-1 min-w-0 bg-transparent outline-none',
                'font-body font-normal text-gunmetal',
                'placeholder:text-gunmetal-400',
              )}
            />
          </div>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={0}
            align="start"
            onOpenAutoFocus={(e) => e.preventDefault()}
            className={cn(
              'z-50 w-[var(--radix-popover-trigger-width)]',
              'bg-[#FDFDFE]',
              'border border-gunmetal',
              'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]',
              'max-h-[300px] overflow-y-auto',
              dropdownPanelSizeMap[size as SelectionFieldSize],
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            )}
          >
            <div role="listbox" aria-multiselectable="true">
              {filteredOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  label={option.label}
                  icon={option.icon}
                  selected={false}
                  disabled={option.disabled}
                  size={size as SelectionFieldSize}
                  onClick={() => {
                    toggleSelect(option.value);
                    setSearchQuery('');
                  }}
                />
              ))}
              {filteredOptions.length === 0 && (
                <div className="px-[12px] py-[8px] font-body text-[length:14px] text-gunmetal-400">
                  No options found
                </div>
              )}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      {/* Supporting text — Figma: 12/14 Karla Regular 400 */}
      {showSupportingText && supportingText && (
        <p className="font-body font-normal text-[length:12px] leading-[14px] text-gunmetal-400 px-[12px]">
          {supportingText}
        </p>
      )}
    </div>
  );
}
