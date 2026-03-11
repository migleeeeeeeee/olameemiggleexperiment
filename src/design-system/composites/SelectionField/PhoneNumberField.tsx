import { useState, useMemo, useCallback, type ReactNode } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { cn } from '../../lib/cn';
import { dropdownPanelSizeMap } from './selectionField.types';
import { DropdownMenuItem } from './DropdownMenuItem';
import { COUNTRIES, type CountryData } from './countries';

/* ─── Phone number sizes (Figma: XS / S / M only) ─────────── */
export type PhoneNumberSize = 'extraSmall' | 'small' | 'medium';

/* Compound field container — matches SelectionFieldTrigger sizes */
const fieldSizeMap: Record<PhoneNumberSize, string> = {
  extraSmall: 'h-[36px] rounded-[8px] text-[length:14px] leading-[18px] tracking-[-0.175px]',
  small: 'h-[48px] rounded-[10px] text-[length:14px] leading-[18px] tracking-[-0.175px]',
  medium: 'h-[56px] rounded-[12px] text-[length:16px] leading-[20px]',
};

/* Label text — Figma: Karla Medium 500 */
const labelSizeMap: Record<PhoneNumberSize, string> = {
  extraSmall: 'text-[length:14px] leading-[18px] tracking-[-0.175px]',
  small: 'text-[length:16px] leading-[20px]',
  medium: 'text-[length:16px] leading-[20px]',
};

/* Label row gap — Figma: XS=4, SM+=8 */
const labelRowGapMap: Record<PhoneNumberSize, string> = {
  extraSmall: 'gap-[4px]',
  small: 'gap-[8px]',
  medium: 'gap-[8px]',
};

/* Label icon wrapper — Figma: XS=16, SM+=20 */
const labelIconSizeMap: Record<PhoneNumberSize, string> = {
  extraSmall: 'size-[16px]',
  small: 'size-[20px]',
  medium: 'size-[20px]',
};

/* ─── Chevron icon (FontAwesome) ─────────────────────────── */
const ChevronDown = ({ open }: { open?: boolean }) => (
  <i
    className={cn('fa-regular fa-chevron-down text-[12px] shrink-0 transition-transform duration-150', open && 'rotate-180')}
  />
);

/* ─── Types ────────────────────────────────────────────────── */
export interface PhoneNumberValue {
  countryCode: string;
  number: string;
}

export interface PhoneNumberFieldProps {
  value?: PhoneNumberValue;
  onChange?: (value: PhoneNumberValue) => void;
  size?: PhoneNumberSize;
  label?: string;
  labelIcon?: ReactNode;
  showLabel?: boolean;
  supportingText?: string;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
}

/* ─── Component ────────────────────────────────────────────── */
export function PhoneNumberField({
  value,
  onChange,
  size = 'small',
  label,
  labelIcon,
  showLabel = true,
  supportingText,
  errorMessage,
  disabled = false,
  className,
}: PhoneNumberFieldProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedCountry = useMemo(
    () => COUNTRIES.find((c) => c.code === value?.countryCode) ?? COUNTRIES[0],
    [value?.countryCode],
  );

  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return COUNTRIES;
    const q = searchQuery.toLowerCase();
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const handleCountrySelect = useCallback(
    (country: CountryData) => {
      onChange?.({ countryCode: country.code, number: value?.number ?? '' });
      setOpen(false);
      setSearchQuery('');
    },
    [onChange, value?.number],
  );

  const handleNumberChange = useCallback(
    (num: string) => {
      onChange?.({ countryCode: value?.countryCode ?? selectedCountry.code, number: num });
    },
    [onChange, value?.countryCode, selectedCountry.code],
  );

  const hasError = !!errorMessage;
  const borderColor = hasError ? 'border-red' : 'border-[#B2B4BA]';

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

      {/* Compound field: [Country Code | Phone Number] */}
      <div
        className={cn(
          'flex w-full items-stretch',
          'bg-[#FDFDFE] border border-solid',
          'overflow-clip',
          fieldSizeMap[size],
          borderColor,
          disabled && 'opacity-50 cursor-not-allowed bg-gunmetal-50',
        )}
      >
        {/* Country selector */}
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger asChild disabled={disabled}>
            <button
              type="button"
              className={cn(
                'flex items-center gap-[6px] px-[12px]',
                'border-r border-[#B2B4BA]',
                'font-body font-normal text-gunmetal',
                'hover:bg-gunmetal-50 transition-colors',
                'outline-none shrink-0',
              )}
            >
              <span className="text-[16px]">{selectedCountry.flag}</span>
              <span className="text-[length:14px]">{selectedCountry.dialCode}</span>
              <ChevronDown open={open} />
            </button>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              sideOffset={0}
              align="start"
              className={cn(
                'z-50 w-[280px]',
                'bg-[#FDFDFE]',
                'border border-gunmetal',
                'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]',
                'max-h-[300px] overflow-y-auto',
                dropdownPanelSizeMap[size],
                'animate-in fade-in-0 zoom-in-95',
                'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              )}
            >
              {/* Search */}
              <div className="px-[8px] py-[4px] border-b border-gunmetal-100">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search country..."
                  className="w-full bg-transparent outline-none font-body font-normal text-[length:14px] text-gunmetal placeholder:text-gunmetal-400 px-[4px] py-[4px]"
                  autoFocus
                />
              </div>

              <div role="listbox">
                {filteredCountries.map((country) => (
                  <DropdownMenuItem
                    key={country.code}
                    label={`${country.flag} ${country.name} (${country.dialCode})`}
                    selected={country.code === selectedCountry.code}
                    size="extraSmall"
                    onClick={() => handleCountrySelect(country)}
                  />
                ))}
                {filteredCountries.length === 0 && (
                  <div className="px-[12px] py-[8px] font-body text-[length:14px] text-gunmetal-400">
                    No countries found
                  </div>
                )}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        {/* Phone number input — Figma: Karla Regular 400 */}
        <input
          type="tel"
          value={value?.number ?? ''}
          onChange={(e) => handleNumberChange(e.target.value)}
          placeholder="Phone number"
          disabled={disabled}
          className={cn(
            'flex-1 min-w-0 bg-transparent outline-none px-[12px]',
            'font-body font-normal text-gunmetal',
            'placeholder:text-gunmetal-400',
          )}
        />
      </div>

      {/* Supporting / error text — Figma: 12/14 Karla Regular 400 */}
      {supportingText && !hasError && (
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
}
