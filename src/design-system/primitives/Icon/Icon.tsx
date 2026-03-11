/**
 * Olamee Design System — Icon (FontAwesome Pro 6.5.1 + Custom SVG Icons)
 *
 * Mirrors Figma "Icon Wrapper" component set (node 518:2908).
 * Supports:
 *   - FontAwesome icons (class-based via <i> elements)
 *   - Olamee custom SVG icons (from Figma node 1535:52733)
 *
 * Sizes (from Figma — Icon Wrapper with 2px padding):
 *   2xs: 12×12px wrapper → 8px icon
 *   xs:  16×16px wrapper → 12px icon
 *   sm:  20×20px wrapper → 16px icon (default)
 *   md:  24×24px wrapper → 20px icon
 *   lg:  32×32px wrapper → 28px icon
 *
 * Usage:
 *   FontAwesome Icons:
 *     <Icon name="heart" size="md" />                  — named FA icon from registry
 *     <Icon faClass="fa-light fa-bell" />              — any FA class directly
 *     <Icon name="star" faStyle="regular" />           — override style (solid→regular)
 *
 *   Custom SVG Icons (Olamee):
 *     <Icon name="om-dashboard" size="md" />           — custom SVG icon
 *     <Icon name="om-applicants" />                    — custom SVG (default size)
 *
 *   Custom Child:
 *     <Icon><i className="fa-thin fa-wand" /></Icon>   — custom child element
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { iconRegistry, type IconName } from './icons';
import { isCustomIcon, getCustomIconUrl, type CustomIconName } from './custom-icons';

const iconVariants = cva(
  [
    'inline-flex items-center justify-center',
    'shrink-0',
  ],
  {
    variants: {
      size: {
        '2xs': 'size-3 p-[2px] text-[8px]',    // 12px wrapper → 8px icon (Figma 2px padding)
        xs:    'size-4 p-[2px] text-[12px]',   // 16px wrapper → 12px icon
        sm:    'size-5 p-[2px] text-[16px]',   // 20px wrapper → 16px icon
        md:    'size-6 p-[2px] text-[20px]',   // 24px wrapper → 20px icon
        lg:    'size-8 p-[2px] text-[28px]',   // 32px wrapper → 28px icon
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

/** FontAwesome style prefixes (Olamee uses: thin, light, regular, solid) */
export type FaStyle = 'thin' | 'light' | 'regular' | 'solid';

const faStyleMap: Record<FaStyle, string> = {
  thin: 'fa-thin',
  light: 'fa-light',
  regular: 'fa-regular',
  solid: 'fa-solid',
};

export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg';

export interface IconProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'>,
    VariantProps<typeof iconVariants> {
  /** Named icon from the registry (FontAwesome or Olamee custom SVG icons) */
  name?: IconName | CustomIconName;
  /** Direct FontAwesome class string (overrides name) e.g. "fa-solid fa-heart" */
  faClass?: string;
  /** Override the FA style (default: uses whatever the registry specifies, typically 'solid') */
  faStyle?: FaStyle;
  /** Custom child element (takes precedence over name and faClass) */
  children?: ReactNode;
  /** Accessible label — if absent, aria-hidden="true" is set */
  label?: string;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ className, size, name, faClass, faStyle, children, label, ...props }, ref) => {
    let content: ReactNode;

    if (children) {
      // Custom child takes precedence
      content = children;
    } else if (faClass) {
      // Direct FA class string
      content = <i className={faClass} />;
    } else if (name) {
      // Priority: Custom Olamee PNG icons > FontAwesome icons
      // Always prefer custom PNG if available (om-* icons should render as custom, not FA fallbacks)
      if (isCustomIcon(name as CustomIconName)) {
        // Custom Olamee PNG icon — highest priority
        const svgUrl = getCustomIconUrl(name);
        if (svgUrl) {
          content = (
            <img
              src={svgUrl}
              alt={label || ''}
              className="w-full h-full object-contain"
            />
          );
        }
      } else {
        // FontAwesome icon from registry
        const registryEntry = iconRegistry[name as IconName];
        if (faStyle && registryEntry) {
          // Override FA style if specified
          const iconPart = registryEntry.faClass
            .split(' ')
            .filter(c => !c.startsWith('fa-thin') && !c.startsWith('fa-light') && !c.startsWith('fa-regular') && !c.startsWith('fa-solid'))
            .join(' ');
          content = <i className={`${faStyleMap[faStyle]} ${iconPart}`} />;
        } else if (registryEntry) {
          // FontAwesome icon with default style from registry
          content = <i className={registryEntry.faClass} />;
        }
      }
    }

    return (
      <span
        ref={ref}
        role={label ? 'img' : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={cn(iconVariants({ size }), className)}
        {...props}
      >
        {content}
      </span>
    );
  },
);

Icon.displayName = 'Icon';

export { iconVariants };
