/**
 * Olamee Design System — Form Composites
 *
 * 100% Figma-faithful implementation of "Forms" (node 396:734).
 *
 * Two form container types:
 *   ModalForm — Elevated card with shadow, used as modal container
 *   CardForm  — Flat card with border, used as inline card container
 *
 * Each supports 3 sizes (small / medium / large) controlling:
 *   - Container dimensions, padding, border radius
 *   - Input field sizes (Extra Small / Small / Medium)
 *   - Button sizes (small / small / medium)
 *   - Number of visible field rows
 *   - Scrollable overflow for large variant
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ Size Specs (from Figma)                                                  │
 * │                                                                          │
 * │ Small:   720×528    p-24   gap-24  rounded-28  inputs: XS  btns: small  │
 * │ Medium:  1160×702   px-32 pt-32 pb-24  gap-24  rounded-28  inputs: S   │
 * │ Large:   1400×840   px-40 pt-40 pb-32  gap-24  rounded-28  inputs: M   │
 * │                                                                          │
 * │ CardForm (same sizes but different container style):                      │
 * │ Small:   720×544    p-24   gap-24  rounded-12  inputs: XS  btns: small  │
 * │ Medium:  1160×702   px-32 pt-32 pb-24  gap-16  rounded-12  inputs: S   │
 * │ Large:   1416×852   px-40 pt-40 pb-32  gap-16  rounded-12  inputs: M   │
 * └──────────────────────────────────────────────────────────────────────────┘
 */

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

/* ─── Form Title Header ──────────────────────────────────────────────── */

export interface FormTitleBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Form title text */
  title: string;
  /** Optional icon element rendered before the title (28px bg pill) */
  icon?: ReactNode;
  /** Optional close button / action on the right */
  closeAction?: ReactNode;
}

export const FormTitleBar = forwardRef<HTMLDivElement, FormTitleBarProps>(
  ({ className, title, icon, closeAction, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex gap-[12px] items-start justify-end shrink-0 w-full',
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="bg-[#EFF0F3] flex items-center justify-center p-[4px] rounded-[6px] shrink-0 size-[28px]">
          {icon}
        </div>
      )}
      <h3 className="flex-1 font-heading font-bold leading-[28px] text-[#30343F] text-[24px] min-w-0">
        {title}
      </h3>
      {closeAction && (
        <div className="flex items-center justify-center shrink-0">
          {closeAction}
        </div>
      )}
    </div>
  ),
);
FormTitleBar.displayName = 'FormTitleBar';

/* ─── Form Field Row ─────────────────────────────────────────────────── */

export interface FormFieldRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const FormFieldRow = forwardRef<HTMLDivElement, FormFieldRowProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex gap-[24px] items-start w-full shrink-0', className)}
      {...props}
    >
      {children}
    </div>
  ),
);
FormFieldRow.displayName = 'FormFieldRow';

/* ─── Form Footer ────────────────────────────────────────────────────── */

export interface FormFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional left-side action (e.g. tertiary "Reset" button) */
  leftAction?: ReactNode;
  /** Right-side buttons (cancel + submit) */
  children: ReactNode;
}

export const FormFooter = forwardRef<HTMLDivElement, FormFooterProps>(
  ({ className, leftAction, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col items-start shrink-0 w-full', className)}
      {...props}
    >
      <div className="flex items-center justify-between w-full">
        <div className="shrink-0">{leftAction}</div>
        <div className="flex gap-[8px] items-center shrink-0">{children}</div>
      </div>
    </div>
  ),
);
FormFooter.displayName = 'FormFooter';

/* ─── ModalForm Container ────────────────────────────────────────────── */

const modalFormVariants = cva(
  [
    'bg-[#FDFDFE] border border-solid border-[#EFF0F3]',
    'flex flex-col items-start',
    'rounded-[28px]',
    'shadow-[0px_2px_4px_-2px_rgba(18,20,22,0.06),0px_4px_8px_-2px_rgba(18,20,22,0.1)]',
  ],
  {
    variants: {
      size: {
        small: [
          'w-[720px] min-w-[600px] max-w-[720px]',
          'min-h-[300px] max-h-[600px]',
          'p-[24px] gap-[24px]',
        ],
        medium: [
          'w-[1160px] min-w-[800px] max-w-[1160px]',
          'min-h-[400px] max-h-[720px]',
          'px-[32px] pt-[32px] pb-[24px] gap-[24px]',
        ],
        large: [
          'w-[1400px] min-w-[1240px] max-w-[1400px]',
          'min-h-[600px] max-h-[840px]',
          'px-[40px] pt-[40px] pb-[32px] gap-[24px]',
        ],
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
);

export interface ModalFormProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof modalFormVariants> {
  children: ReactNode;
}

export const ModalForm = forwardRef<HTMLDivElement, ModalFormProps>(
  ({ className, size, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(modalFormVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  ),
);
ModalForm.displayName = 'ModalForm';

/* ─── CardForm Container ─────────────────────────────────────────────── */

const cardFormVariants = cva(
  [
    'bg-[#FDFDFE] border border-solid border-[#EFF0F3]',
    'flex flex-col items-start',
    'rounded-[12px]',
    'min-w-[256px] overflow-clip',
  ],
  {
    variants: {
      size: {
        small: [
          'w-[720px]',
          'p-[24px] gap-[24px]',
        ],
        medium: [
          'w-[1160px]',
          'px-[32px] pt-[32px] pb-[24px] gap-[24px]',
        ],
        large: [
          'w-[1416px]',
          'px-[40px] pt-[40px] pb-[32px] gap-[24px]',
        ],
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
);

export interface CardFormProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof cardFormVariants> {
  children: ReactNode;
}

export const CardForm = forwardRef<HTMLDivElement, CardFormProps>(
  ({ className, size, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFormVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  ),
);
CardForm.displayName = 'CardForm';

/* ─── Form Body (scrollable area for fields) ─────────────────────────── */

const formBodyVariants = cva(
  ['flex flex-1 flex-col items-start w-full min-h-0'],
  {
    variants: {
      size: {
        small: 'gap-[24px]',
        medium: 'gap-[16px]',
        large: 'gap-[16px] overflow-y-auto',
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
);

export interface FormBodyProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formBodyVariants> {
  children: ReactNode;
}

export const FormBody = forwardRef<HTMLDivElement, FormBodyProps>(
  ({ className, size, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(formBodyVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  ),
);
FormBody.displayName = 'FormBody';

/* ─── Exports ─────────────────────────────────────────────────────────── */

export { modalFormVariants, cardFormVariants, formBodyVariants };
