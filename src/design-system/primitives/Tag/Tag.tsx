/**
 * Olamee Design System — Tag
 *
 * 100% Figma-faithful implementation of "Tags" (node 581:8524).
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Variant Axes (Figma)                                                │
 * │  type:   default · success · error · warning · info · numbered      │
 * │  size:   default (28px) · small (21px)                              │
 * │  state:  enabled · hovered · focus (CSS pseudo-classes)             │
 * │  slots:  leadIcon, profilePic, xButton                             │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Default Size Specs                                                  │
 * │  px-12  py-5  gap-6  r-36 (rounded-full)                           │
 * │  Font: Karla Medium 14/18, tracking -0.175px                        │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Small Size Specs                                                    │
 * │  px-10  py-3.5  gap-6  r-36                                         │
 * │  Font: Karla Medium 12/14, tracking 0                               │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ Type Colors (from Figma)                                            │
 * │  default:  bg #FBFBFC (gunmetal-lightest), border 1px gunmetal-300, │
 * │            text gunmetal #30343F                                    │
 * │  success:  bg #E8F4E6 (mantis-100), NO border, text mantis-500     │
 * │  error:    bg #FCF0F1 (red-50), NO border, text red                │
 * │  warning:  bg #FBF7D9 (accent-100), NO border, text accent-800     │
 * │  info:     bg #DEFCFF (electric-100), NO border, text electric-700  │
 * │  numbered: bg gunmetal-lightest, border 1px gunmetal-300,           │
 * │            text gunmetal (same as default)                          │
 * ├──────────────────────────────────────────────────────────────────────┤
 * │ State Behavior                                                      │
 * │  hover (default/numbered): bg gunmetal-100, border stays            │
 * │  focus: ring 1.5px gunmetal-500, offset 2px                        │
 * └──────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const tagVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-full overflow-hidden',
    'font-body font-medium',
    'transition-colors duration-150',
    'whitespace-nowrap',
    'focus-visible:outline-none',
    'focus-visible:ring-[1.5px] focus-visible:ring-gunmetal-500 focus-visible:ring-offset-[2px]',
  ],
  {
    variants: {
      color: {
        default: [
          'bg-gunmetal-lightest border border-solid border-gunmetal-300 text-gunmetal',
          'hover:bg-gunmetal-100',
          'focus-visible:bg-gunmetal-100',
        ],
        success: 'bg-mantis-100 text-mantis-500',
        error: 'bg-red-50 text-red',
        warning: 'bg-accent-100 text-accent-800',
        info: 'bg-electric-100 text-electric-700',
        numbered: [
          'bg-gunmetal-lightest border border-solid border-gunmetal-300 text-gunmetal',
          'hover:bg-gunmetal-100',
          'focus-visible:bg-gunmetal-100',
        ],
      },
      size: {
        default: [
          'px-[12px] py-[5px] gap-[6px]',
          'text-[length:14px] leading-[18px] tracking-[-0.175px]',
        ],
        small: [
          'px-[10px] py-[3.5px] gap-[6px]',
          'text-[length:12px] leading-[14px] tracking-[0px]',
        ],
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'default',
    },
  },
);

export interface TagProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof tagVariants> {
  /** Icon before the label */
  leadIcon?: ReactNode;
  /** Avatar / profile picture element */
  avatar?: ReactNode;
  /** Show dismiss (x) button */
  onDismiss?: () => void;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, color, size, leadIcon, avatar, onDismiss, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(tagVariants({ color, size }), className)}
      {...props}
    >
      {/* Lead icon */}
      {leadIcon && (
        <span className={cn(
          'flex shrink-0 items-center justify-center',
          size === 'small' ? 'size-[12px]' : 'size-[16px]',
        )}>
          {leadIcon}
        </span>
      )}

      {/* Avatar */}
      {avatar && (
        <span className={cn(
          'flex shrink-0 items-center overflow-hidden rounded-full',
          size === 'small' ? 'size-[14px]' : 'size-[18px]',
        )}>
          {avatar}
        </span>
      )}

      {/* Label */}
      <span>{children}</span>

      {/* Dismiss (x) button */}
      {onDismiss && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          className={cn(
            'flex shrink-0 items-center justify-center rounded-full hover:bg-black/10',
            size === 'small' ? 'size-[12px]' : 'size-[16px]',
          )}
          aria-label="Remove"
        >
          <i className={`fa-regular fa-xmark ${size === 'small' ? 'text-[8px]' : 'text-[10px]'}`} />
        </button>
      )}
    </span>
  ),
);

Tag.displayName = 'Tag';

export { tagVariants };
