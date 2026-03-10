import type { ReactNode } from 'react';

export interface SelectionOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
  description?: string;
  group?: string;
}

export type SelectionFieldSize = 'extraSmall' | 'small' | 'medium' | 'large';

/**
 * Dropdown panel border-radius (bottom-only, matching trigger size) and py per size.
 * Figma: bg=#FDFDFE, border=gunmetal, corner-radii=[0,0,R,R]
 */
export const dropdownPanelSizeMap: Record<SelectionFieldSize, string> = {
  extraSmall: 'rounded-t-none rounded-b-[8px] py-[4px]',
  small: 'rounded-t-none rounded-b-[10px] py-[8px]',
  medium: 'rounded-t-none rounded-b-[12px] py-[8px]',
  large: 'rounded-t-none rounded-b-[12px] py-[8px]',
};
