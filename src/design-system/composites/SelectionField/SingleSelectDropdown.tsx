import { type ReactNode } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../../lib/cn';
import type { SelectionOption, SelectionFieldSize } from './selectionField.types';
import { dropdownPanelSizeMap } from './selectionField.types';
import { useSelectionField } from './useSelectionField';
import { SelectionFieldTrigger } from './SelectionFieldTrigger';
import { DropdownMenuItem } from './DropdownMenuItem';

export interface SingleSelectDropdownProps {
  options: SelectionOption[];
  value?: string;
  onChange?: (value: string) => void;
  size?: SelectionFieldSize;
  label?: string;
  labelIcon?: ReactNode;
  showLabel?: boolean;
  supportingText?: string;
  showSupportingText?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  placeholder?: string;
  searchable?: boolean;
  allowAddNew?: boolean;
  onAddNew?: (label: string) => void;
  className?: string;
}

export function SingleSelectDropdown({
  options,
  value,
  onChange,
  size = 'small',
  label,
  labelIcon,
  showLabel,
  supportingText,
  showSupportingText,
  errorMessage,
  disabled = false,
  placeholder,
  searchable = false,
  allowAddNew = false,
  onAddNew,
  className,
}: SingleSelectDropdownProps) {
  const {
    open,
    setOpen,
    searchQuery,
    setSearchQuery,
    filteredOptions,
    selectedValues,
    highlightedIndex,
    setHighlightedIndex,
    select,
    handleKeyDown,
    getLabel,
    addNewText,
    setAddNewText,
    handleAddNew,
  } = useSelectionField({
    options,
    multiple: false,
    value,
    onChange: onChange as (value: string | string[]) => void,
    searchable,
    onAddNew,
  });

  const displayValue = value ? getLabel(value) : undefined;

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild disabled={disabled}>
        <SelectionFieldTrigger
          size={size}
          label={label}
          labelIcon={labelIcon}
          showLabel={showLabel}
          supportingText={supportingText}
          showSupportingText={showSupportingText}
          errorMessage={errorMessage}
          disabled={disabled}
          placeholder={placeholder}
          displayValue={displayValue}
          open={open}
          searchable={searchable}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onKeyDown={handleKeyDown}
          className={className}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={0}
          align="start"
          onOpenAutoFocus={(e) => {
            if (searchable) e.preventDefault();
          }}
          className={cn(
            'z-50 w-[var(--radix-popover-trigger-width)]',
            'bg-[#FDFDFE]',
            'border border-gunmetal',
            'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]',
            'max-h-[300px] overflow-y-auto',
            dropdownPanelSizeMap[size],
            'animate-in fade-in-0 zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          )}
        >
          <div role="listbox">
            {filteredOptions.map((option, index) => (
              <DropdownMenuItem
                key={option.value}
                label={option.label}
                icon={option.icon}
                selected={selectedValues.has(option.value)}
                highlighted={index === highlightedIndex}
                disabled={option.disabled}
                size={size}
                onClick={() => select(option.value)}
                onMouseEnter={() => setHighlightedIndex(index)}
              />
            ))}

            {filteredOptions.length === 0 && (
              <div className="px-[12px] py-[8px] font-body text-[length:14px] text-gunmetal-400">
                No options found
              </div>
            )}

            {allowAddNew && (
              <div className="border-t border-gunmetal-100 mt-[4px] pt-[4px]">
                <div className="flex items-center gap-[8px] px-[12px] py-[6px]">
                  <input
                    type="text"
                    value={addNewText}
                    onChange={(e) => setAddNewText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddNew();
                      }
                    }}
                    placeholder="Add new..."
                    className="flex-1 bg-transparent outline-none font-body font-medium text-[length:14px] text-gunmetal placeholder:text-gunmetal-400"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddNew();
                    }}
                    className="font-body font-bold text-[length:12px] text-primary hover:text-primary-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
