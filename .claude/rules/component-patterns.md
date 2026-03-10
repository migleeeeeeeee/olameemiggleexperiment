# Component Implementation Patterns

> Standard patterns for all Olamee design system components.

## File Structure

```
src/design-system/primitives/ComponentName/
  ├── ComponentName.tsx    # Component + CVA variants
  └── index.ts             # Re-export
```

## CVA Component Template

```tsx
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/cn';

const componentVariants = cva(
  // Base classes shared by all variants
  ['inline-flex items-center justify-center', 'transition-all duration-200'],
  {
    variants: {
      size: {
        small: 'h-[36px] px-[12px] rounded-[10px]',
        medium: 'h-[48px] px-[16px] rounded-[12px]',
      },
      // ...more variant axes from Figma
    },
    compoundVariants: [
      // Figma-exact color combinations
    ],
    defaultVariants: {
      size: 'medium',
    },
  },
);

// IMPORTANT: Omit 'color' if using a 'color' variant to avoid HTML attribute conflict
export interface ComponentProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof componentVariants> {
  asChild?: boolean;
  // ...additional props from Figma spec
}

export const Component = forwardRef<HTMLButtonElement, ComponentProps>(
  ({ className, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(componentVariants({ size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Component.displayName = 'Component';
export { componentVariants };
```

## CVA `color` Prop Conflict

CVA's `color` variant conflicts with the native HTML `color` attribute. Always use:

```tsx
export interface Props extends Omit<HTMLAttributes<HTMLElement>, 'color'>, VariantProps<typeof variants> {}
```

## Disabled State Pattern

All interactive components share this disabled style:

```
disabled:bg-[#EFF0F3] disabled:text-[#8D8F97] disabled:opacity-75
disabled:border-transparent disabled:pointer-events-none disabled:cursor-not-allowed
```

Apply via `cn()` as a separate constant — NOT inside CVA variants.

## Export Checklist

After creating a component, add exports to `src/design-system/index.ts`:

```tsx
export { ComponentName, componentVariants } from './primitives/ComponentName';
export type { ComponentNameProps } from './primitives/ComponentName';
```

## CVA Structure Pattern (from Button.tsx)

```tsx
// hierarchy variant holds structure only
hierarchy: {
  primary: '',                         // solid fill — colors in compoundVariants
  secondary: 'border border-solid',    // outlined — colors in compoundVariants
},

// compoundVariants hold the actual colors
compoundVariants: [
  { hierarchy: 'primary', colorScheme: 'violet',
    className: 'bg-[#6F54EB] text-[#FDFDFE] hover:bg-[#6249D4] active:bg-[#513CCB]' },
]
```

Organize CVA slots as:
1. **Base classes** = properties shared by ALL variants (layout, font-family, transition, focus ring, cursor)
2. **`variants.size`** = per-size dimensions (height, padding, gap, radius, font-size, line-height)
3. **`variants.hierarchy`** = structural differences only (e.g., border for secondary)
4. **`variants.colorScheme`** = leave empty strings — actual colors go in compoundVariants
5. **`compoundVariants`** = each valid hierarchy+colorScheme combo with `bg-[#hex] text-[#hex] hover:bg-[#hex] active:bg-[#hex]`

## Composite File Structure

```
src/design-system/composites/CompositeName/
  ├── CompositeName.tsx    # All sub-components in one file
  └── index.ts             # Re-export all sub-components + types
```

## Composite Export Pattern

Composites export multiple related sub-components and CVA variants from a single file:

```tsx
// In src/design-system/index.ts under Composites section
export { ModalForm, CardForm, FormTitleBar, FormFieldRow, FormFooter, FormBody,
         modalFormVariants, cardFormVariants, formBodyVariants } from './composites/Form';
export type { ModalFormProps, CardFormProps, FormTitleBarProps, FormFieldRowProps,
              FormFooterProps, FormBodyProps } from './composites/Form';
```

Composites import and compose existing primitives from `@/design-system` — they NEVER recreate primitive behavior.

## Composition Rules (applies to ALL components and pages)

### Never Recreate a Primitive

When a composite or page needs a button, input, dropdown, card, or any other primitive, it MUST import from `@/design-system`. It must NEVER contain:
- A raw `<button>` styled to look like a Button
- A raw `<input>` styled to look like an Input
- A custom dropdown built from `<div>` + `<ul>` when SingleSelectDropdown exists
- A custom modal frame when ModalForm exists
- Any raw HTML element that duplicates an existing design system component

See `.claude/rules/design-system-reuse.md` for the full forbidden-pattern lookup table.

### Token-First Styling

Inside component files (CVA definitions and inline classes):
- Use design token hex values from `src/design-system/tokens/colors.ts` — not arbitrary hex codes
- Reference `/design-tokens` to verify exact shades before using `bg-[#hex]` or `text-[#hex]`
- Use spacing values from the 8pt grid (0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128 px)
