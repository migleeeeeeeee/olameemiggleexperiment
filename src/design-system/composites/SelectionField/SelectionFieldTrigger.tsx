import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { Chip } from '../../primitives/Chip';
import { Icon, type IconSize } from '../../primitives/Icon';
import type { SelectionFieldSize } from './selectionField.types';

/* ─── Chevron icon — uses Icon component wrapper ─── */
/* XS→sm (20px), SM→md (24px), MD→lg (32px), LG→lg (32px) */
const chevronIconSizeMap: Record<SelectionFieldSize, IconSize> = {
  extraSmall: 'sm',
  small: 'md',
  medium: 'lg',
  large: 'lg',
};

const ChevronDown = ({ open, size }: { open?: boolean; size?: SelectionFieldSize }) => (
  <Icon
    faClass={cn(
      'fa-solid fa-chevron-down transition-transform duration-150',
      open && 'rotate-180',
    )}
    size={chevronIconSizeMap[size ?? 'small']}
  />
);

/* Small chevron for overflow chip */
const ChevronSmall = () => (
  <i className="fa-regular fa-chevron-down text-[12px] shrink-0" />
);

/* ─── CVA — trigger container ──────────────────────────────── */
/* Figma "Input Field Main" for Selection Field variant:
   All sizes: px=12, py=4, gap=10, fill=#FDFDFE, stroke=#B2B4BA, strokeWeight=1, clipsContent
   XS: h=36 r=8 | SM: h=48 r=10 | MD: h=56 r=12 | LG: h=64 r=12 */
export const triggerVariants = cva(
  [
    'flex w-full items-center',
    'bg-[#FDFDFE] border border-solid',
    'overflow-clip cursor-pointer',
    'transition-colors duration-150',
    'gap-[10px]',
    'px-[12px] py-[4px]',
    'outline-none',
  ],
  {
    variants: {
      size: {
        extraSmall: 'h-[36px] rounded-[8px]',
        small: 'h-[48px] rounded-[10px]',
        medium: 'h-[56px] rounded-[12px]',
        large: 'h-[64px] rounded-[12px]',
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
);

/* ─── Label text size (Figma: Karla Medium 500) ────────────── */
/* XS: 14/18 ls=-0.175 | SM/MD/LG: 16/20 ls=0 */
const labelSizeMap: Record<SelectionFieldSize, string> = {
  extraSmall: 'text-[length:14px] leading-[18px] tracking-[-0.175px]',
  small: 'text-[length:16px] leading-[20px]',
  medium: 'text-[length:16px] leading-[20px]',
  large: 'text-[length:16px] leading-[20px]',
};

/* ─── Label icon wrapper size ──────────────────────────────── */
/* XS→sm (20px), SM→md (24px), MD/LG→lg (32px) */
const labelIconSizeMap: Record<SelectionFieldSize, string> = {
  extraSmall: 'size-[20px]',
  small: 'size-[24px]',
  medium: 'size-[32px]',
  large: 'size-[32px]',
};

/* ─── Label row gap ────────────────────────────────────────── */
/* XS: gap=4 | SM/MD/LG: gap=8 */
const labelRowGapMap: Record<SelectionFieldSize, string> = {
  extraSmall: 'gap-[4px]',
  small: 'gap-[8px]',
  medium: 'gap-[8px]',
  large: 'gap-[8px]',
};

/* ─── Placeholder / display value text size (Figma: Karla Regular 400) ─── */
/* XS: 14/18 ls=-0.175 | SM/MD/LG: 16/20 ls=0 */
const placeholderSizeMap: Record<SelectionFieldSize, string> = {
  extraSmall: 'text-[length:14px] leading-[18px] tracking-[-0.175px]',
  small: 'text-[length:16px] leading-[20px]',
  medium: 'text-[length:16px] leading-[20px]',
  large: 'text-[length:16px] leading-[20px]',
};

/* ─── Types ────────────────────────────────────────────────── */
export interface SelectionFieldTriggerProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'>,
    VariantProps<typeof triggerVariants> {
  label?: string;
  labelIcon?: ReactNode;
  showLabel?: boolean;
  supportingText?: string;
  showSupportingText?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  placeholder?: string;
  /** Display text for single-select filled state */
  displayValue?: string;
  /** Chips for multi-select collapsed state — shown ABOVE the trigger in a wrapping grid */
  selectedItems?: Array<{ value: string; label: string; avatar?: ReactNode }>;
  onItemRemove?: (value: string) => void;
  /** Max visible chips before showing "+N others" overflow chip */
  maxVisibleChips?: number;
  /** Handler for "Deselect all" link in the label row */
  onDeselectAll?: () => void;
  /** Searchable mode */
  searchable?: boolean;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  /** Open state (for chevron rotation) */
  open?: boolean;
}

/* ─── Component ────────────────────────────────────────────── */
export const SelectionFieldTrigger = forwardRef<
  HTMLButtonElement,
  SelectionFieldTriggerProps
>(
  (
    {
      size = 'small',
      label,
      labelIcon,
      showLabel = true,
      supportingText,
      showSupportingText = true,
      errorMessage,
      disabled = false,
      placeholder = 'Please select from options',
      displayValue,
      selectedItems,
      onItemRemove,
      maxVisibleChips = 14,
      onDeselectAll,
      searchable = false,
      searchQuery = '',
      onSearchChange,
      open = false,
      className,
      ...props
    },
    ref,
  ) => {
    const s = size ?? 'small';
    const hasError = !!errorMessage;
    const hasChips = selectedItems && selectedItems.length > 0;
    const visibleChips = hasChips
      ? selectedItems.slice(0, maxVisibleChips)
      : [];
    const overflowCount = hasChips
      ? Math.max(0, selectedItems.length - maxVisibleChips)
      : 0;

    const borderColor = hasError
      ? 'border-red'
      : open
        ? 'border-gunmetal-500'
        : 'border-[#B2B4BA]';

    return (
      <div className={cn('flex flex-col gap-[8px]', className)}>
        {/* Label row — Figma: horizontal, space-between when chips exist, otherwise start-aligned */}
        {showLabel && label && (
          <div className={cn('flex items-center justify-between', labelRowGapMap[s])}>
            <div className={cn('flex items-center', labelRowGapMap[s])}>
              <label
                className={cn(
                  'font-body font-medium text-gunmetal',
                  labelSizeMap[s],
                )}
              >
                {label}
              </label>
              {labelIcon && (
                <span
                  className={cn(
                    'flex shrink-0 items-center justify-center',
                    labelIconSizeMap[s],
                  )}
                >
                  {labelIcon}
                </span>
              )}
            </div>
            {/* "Deselect all" button — Figma: Tertiary button, primary color, right-aligned */}
            {hasChips && onDeselectAll && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeselectAll();
                }}
                disabled={disabled}
                className="font-body font-medium text-[length:14px] leading-[18px] text-red hover:text-red-700 transition-colors disabled:opacity-50"
              >
                Deselect all
              </button>
            )}
          </div>
        )}

        {/* Selected chips — Figma: wrapping flex container ABOVE the trigger, gap=8, chip height=34 */}
        {hasChips && (
          <div className="flex flex-wrap gap-[8px]">
            {visibleChips.map((item) => (
              <Chip
                key={item.value}
                selected
                avatar={item.avatar}
                onDismiss={
                  onItemRemove && !disabled
                    ? () => onItemRemove(item.value)
                    : undefined
                }
              >
                {item.label}
              </Chip>
            ))}
            {overflowCount > 0 && (
              <Chip selected={false}>
                {overflowCount}+ others
                <ChevronSmall />
              </Chip>
            )}
          </div>
        )}

        {/* Trigger button */}
        <button
          ref={ref}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          disabled={disabled}
          className={cn(
            triggerVariants({ size }),
            borderColor,
            disabled && 'opacity-50 cursor-not-allowed bg-gunmetal-50',
          )}
          {...props}
        >
          <div className="flex flex-1 items-center gap-[8px] min-w-0">
            {/* Search input (for searchable mode) */}
            {searchable && open ? (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder={placeholder}
                className={cn(
                  'flex-1 min-w-[80px] bg-transparent outline-none',
                  'font-body font-normal text-gunmetal',
                  'placeholder:text-gunmetal-400',
                  placeholderSizeMap[s],
                )}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
            ) : (
              /* Display value or placeholder — Figma: Karla Regular 400 */
              <span
                className={cn(
                  'truncate font-body font-normal',
                  placeholderSizeMap[s],
                  displayValue
                    ? 'text-gunmetal'
                    : 'text-gunmetal-400',
                )}
              >
                {displayValue || placeholder}
              </span>
            )}
          </div>

          {/* Chevron — Figma: trailing icon wrapper */}
          <span className="flex shrink-0 items-center text-gunmetal-500">
            <ChevronDown open={open} size={s} />
          </span>
        </button>

        {/* Supporting text — Figma: 12/14 Karla Regular 400 */}
        {(showSupportingText && supportingText && !hasError) && (
          <p className="font-body font-normal text-[length:12px] leading-[14px] text-gunmetal-400 px-[12px]">
            {supportingText}
          </p>
        )}
        {hasError && (
          <p className="font-body font-normal text-[length:12px] leading-[14px] text-red px-[12px]">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

SelectionFieldTrigger.displayName = 'SelectionFieldTrigger';
