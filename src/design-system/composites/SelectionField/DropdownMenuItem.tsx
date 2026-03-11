import { forwardRef, type HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import type { SelectionFieldSize } from './selectionField.types';

/* ─── Check icon (FontAwesome) ──────────────────────────────── */
const CheckIcon = () => (
  <i className="fa-regular fa-check text-[12px]" />
);

/* ─── Checkbox indicator (mini, inline) ────────────────────── */
const CheckboxIndicator = ({ checked }: { checked: boolean }) => (
  <span
    className={cn(
      'flex shrink-0 items-center justify-center',
      'size-[18px] rounded-[4px] border-[1.5px] transition-colors',
      checked
        ? 'bg-primary border-primary text-white'
        : 'border-gunmetal-500 bg-transparent',
    )}
  >
    {checked && <CheckIcon />}
  </span>
);

/* ─── CVA ──────────────────────────────────────────────────── */
const menuItemVariants = cva(
  [
    'flex items-center gap-[12px]',
    'px-[16px]',
    'font-body font-normal',
    'text-gunmetal cursor-pointer select-none',
    'transition-colors duration-100',
    'outline-none',
  ],
  {
    variants: {
      size: {
        extraSmall: 'py-[12px] text-[length:14px] leading-[18px] tracking-[-0.175px]',
        small: 'py-[12px] text-[length:14px] leading-[18px] tracking-[-0.175px]',
        medium: 'py-[16px] text-[length:16px] leading-[20px]',
        large: 'py-[16px] text-[length:16px] leading-[20px]',
      },
      withCheckbox: {
        true: 'px-[8px] py-[1px] gap-[2px] h-[32px]',
        false: '',
      },
    },
    defaultVariants: {
      size: 'small',
      withCheckbox: false,
    },
  },
);

/* ─── Types ────────────────────────────────────────────────── */
export interface DropdownMenuItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  label: string;
  selected?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  showCheckbox?: boolean;
  size?: SelectionFieldSize;
  icon?: React.ReactNode;
  onClick?: () => void;
}

/* ─── Component ────────────────────────────────────────────── */
export const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  (
    {
      label,
      selected = false,
      highlighted = false,
      disabled = false,
      showCheckbox = false,
      size = 'small',
      icon,
      onClick,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled}
        data-highlighted={highlighted || undefined}
        data-selected={selected || undefined}
        data-disabled={disabled || undefined}
        className={cn(
          menuItemVariants({ size, withCheckbox: showCheckbox }),
          selected && !showCheckbox && 'bg-primary-50',
          highlighted && 'bg-gunmetal-50',
          disabled && 'opacity-50 cursor-not-allowed',
          !disabled && !highlighted && !selected && 'hover:bg-gunmetal-50',
          className,
        )}
        onClick={disabled ? undefined : onClick}
        {...props}
      >
        {showCheckbox && <CheckboxIndicator checked={selected} />}
        {icon && (
          <span className={cn(
            'flex shrink-0 items-center justify-center',
            size === 'extraSmall' && 'size-[20px]',
            size === 'small' && 'size-[24px]',
            (size === 'medium' || size === 'large') && 'size-[32px]',
          )}>
            {icon}
          </span>
        )}
        <span className="truncate">{label}</span>
        {selected && !showCheckbox && (
          <span className="ml-auto text-primary shrink-0">
            <CheckIcon />
          </span>
        )}
      </div>
    );
  },
);

DropdownMenuItem.displayName = 'DropdownMenuItem';

export { menuItemVariants };
