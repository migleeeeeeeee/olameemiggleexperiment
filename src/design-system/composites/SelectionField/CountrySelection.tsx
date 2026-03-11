import { useMemo, type ReactNode } from 'react';
import type { SelectionFieldSize } from './selectionField.types';
import { SingleSelectDropdown } from './SingleSelectDropdown';
import { COUNTRIES } from './countries';

export interface CountrySelectionProps {
  value?: string;
  onChange?: (code: string) => void;
  size?: SelectionFieldSize;
  label?: string;
  labelIcon?: ReactNode;
  showLabel?: boolean;
  supportingText?: string;
  showSupportingText?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  searchable?: boolean;
  className?: string;
}

export function CountrySelection({
  value,
  onChange,
  size = 'small',
  label = 'Country',
  labelIcon,
  showLabel,
  supportingText,
  showSupportingText,
  errorMessage,
  disabled = false,
  searchable = true,
  className,
}: CountrySelectionProps) {
  const countryOptions = useMemo(
    () =>
      COUNTRIES.map((c) => ({
        value: c.code,
        label: `${c.flag} ${c.name}`,
        icon: undefined,
      })),
    [],
  );

  return (
    <SingleSelectDropdown
      options={countryOptions}
      value={value}
      onChange={onChange}
      size={size}
      label={label}
      labelIcon={labelIcon}
      showLabel={showLabel}
      supportingText={supportingText}
      showSupportingText={showSupportingText}
      errorMessage={errorMessage}
      disabled={disabled}
      searchable={searchable}
      placeholder="Select a country"
      className={className}
    />
  );
}
