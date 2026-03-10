---
name: build-component
description: Step-by-step workflow for building a new design system component from Figma specs. Covers both new primitives (from scratch) and composites (from existing primitives). Guides through searching Figma, extracting specs, creating the CVA component file, exporting, and validating. Use when asked to build, implement, or create a new component for the design system.
argument-hint: [ComponentName, e.g. "Modal", "Table", "Tabs"]
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Grep, Glob, Bash
---

# Build Component Workflow

Build the following component: **$ARGUMENTS**

Follow the steps below.

---

## Step 0: Verify This Component Doesn't Already Exist

Before building ANYTHING, check if an existing component already covers this use case:

1. **Search the design system exports** — `grep` for the component name in `src/design-system/index.ts`
2. **Check the lookup table** in `.claude/rules/design-system-reuse.md` — does an existing component map to this UI need?
3. **Check `/component-specs`** — run `/component-specs $ARGUMENTS` to see if specs already exist in the knowledge base

**If a match exists:** Do NOT build a new component. Use the existing one. If it needs modification, extend it in place.
**If no match exists:** Proceed to Step 1.

---

## Step 1: Get Figma Specs

### For a New Primitive (component doesn't exist yet)

1. **Search Figma** — `figma_search_components` with query "$ARGUMENTS"
   - Always pass `fileUrl`: `https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System`
2. **Get metadata** — `figma_get_component` with the nodeId from search results
3. **Get dev specs** — `figma_get_component_for_development` for layout/sizing/color data + rendered image
4. **Get screenshot** — `figma_get_component_image` for visual reference
5. **Interpret dev specs** — Map the `figma_get_component_for_development` response to Tailwind:

   | Dev Spec Property | Maps To |
   |---|---|
   | `layoutMode: VERTICAL/HORIZONTAL` | `flex flex-col` / `flex flex-row` in CVA base |
   | `paddingLeft/Right/Top/Bottom` | `px-[Npx]` / `py-[Npx]` in size variants |
   | `itemSpacing` (gap) | `gap-[Npx]` in size variants |
   | `cornerRadius` | `rounded-[Npx]` in size variants |
   | `width / height` (fixed) | `w-[Npx]` / `h-[Npx]` in size variants |
   | `fills[0].color` (hex) | `bg-[#hex]` in compoundVariants (per hierarchy+colorScheme) |
   | `strokes[0].color` + `strokeWeight` | `border border-[#hex]` in compoundVariants |
   | `fontSize / lineHeight` | `text-[length:Npx] leading-[Npx]` in size variants |
   | `fontWeight` | `font-medium`, `font-bold`, etc. |
   | `primaryAxisAlignItems` | `justify-center` / `justify-between` / `justify-start` |
   | `counterAxisAlignItems` | `items-center` / `items-start` / `items-stretch` |

   **Key rule:** Call `figma_get_component_for_development` on **multiple variant nodes** — each size, each hierarchy+colorScheme combo, each state (Hover/Active/Disabled). One call = one variant's data. You need several calls to fill out the full CVA definition.

6. **Extract specs** — Use the dev spec data from steps 3-5 to build these tables:
   - **Variant axes** (e.g., hierarchy x size x colorScheme) — from component property names in metadata
   - **Size specs** (height, padding, gap, radius, min-width, icon size, font) — one `figma_get_component_for_development` call per size variant
   - **Color specs** (default/hover/active BG and text for each combo) — one call per hierarchy+colorScheme combo; for hover/active, find sibling variants with State=Hovered/Active in `figma_get_component_details`, then call dev specs on those nodeIds

### For a Composite (assembles existing primitives)

1. **Read Figma spec** for the composite
2. **Identify nested components** — which existing primitives does it use?
3. **Import from `@/design-system`** — NEVER recreate a primitive
4. **Use exact Figma props** — if Figma shows a Primary/Violet/Medium button, use `<Button hierarchy="primary" colorScheme="violet" size="medium">`
5. **Match layout** — use Tailwind flex/gap/padding to match Figma auto-layout exactly
6. **Match typography** — use `<Text variant="body-base" weight="medium">` matching Figma text styles
7. **Get frame layout specs** — Use `figma_get_component_for_development` on the composite's top-level frame to extract exact padding, gap, and layout direction. Do NOT eyeball these from screenshots.

---

## Step 1.5: Map Specs to CVA Structure

Before writing code, organize the extracted specs into CVA slots:

1. **Base classes** = properties shared by ALL variants (layout direction, font-family, transition, focus ring, cursor)
2. **`variants.size`** = per-size dimensions from the size specs table (height, padding, gap, radius, font-size, line-height, min-width)
3. **`variants.hierarchy`** = structural differences only (e.g., secondary adds `border border-solid`, tertiary sets `bg-transparent`)
4. **`variants.colorScheme`** = leave empty strings — actual colors go in `compoundVariants`
5. **`compoundVariants`** = each valid hierarchy+colorScheme combo gets its own entry with `bg-[#hex] text-[#hex] hover:bg-[#hex] active:bg-[#hex]`
6. **Disabled overlay** = separate constant string applied via `cn()` — NOT inside CVA

**Pattern from Button.tsx:**
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

---

## Step 2: Create the Component File

**Path (primitive):** `src/design-system/primitives/$ARGUMENTS/$ARGUMENTS.tsx`
**Path (composite):** `src/design-system/composites/$ARGUMENTS/$ARGUMENTS.tsx`

### Template

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

### Tailwind v4 Syntax Rules (CRITICAL)

| What | Syntax | Example |
|------|--------|---------|
| Font size | `text-[length:var(--font-size-*)]` | `text-[length:var(--font-size-body-base)]` |
| Line height | `leading-[var(--line-height-*)]` | `leading-[var(--line-height-body-base)]` |
| Font family | `font-heading` or `font-body` | Registered in @theme, NOT `font-[var(...)]` |
| Font weight | `font-bold`, `font-semibold`, etc. | Standard Tailwind weight classes |
| Letter spacing | `tracking-[var(--letter-spacing-tight)]` | For button text |
| Colors | `bg-primary`, `text-gunmetal-500` | Registered in @theme |
| Shadows | `shadow-elevation-1` | Registered in @theme |
| Border radius | `rounded-[8px]` or `rounded-md` | Pixel values for Figma-exact |

**NEVER use `text-[var(...)]`** — always use `text-[length:var(...)]` for font sizes.
**NEVER use `font-[var(...)]`** — use `font-heading` or `font-body` utilities.

### Disabled State Pattern (shared by all interactive components)
```
disabled:bg-[#EFF0F3] disabled:text-[#8D8F97] disabled:opacity-75
disabled:border-transparent disabled:pointer-events-none disabled:cursor-not-allowed
```

---

## Step 3: Create the Index File

**Path (primitive):** `src/design-system/primitives/$ARGUMENTS/index.ts`
**Path (composite):** `src/design-system/composites/$ARGUMENTS/index.ts`

```tsx
// Primitive — single component
export { ComponentName, componentVariants } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';

// Composite — multiple sub-components
export { SubComp1, SubComp2, subComp1Variants } from './CompositeName';
export type { SubComp1Props, SubComp2Props } from './CompositeName';
```

---

## Step 4: Export from Design System

Add to `src/design-system/index.ts`:

```tsx
// Primitive — under the Primitives section
export { ComponentName, componentVariants } from './primitives/ComponentName';
export type { ComponentNameProps } from './primitives/ComponentName';

// Composite — under the Composites section
export { SubComp1, SubComp2 } from './composites/CompositeName';
export type { SubComp1Props, SubComp2Props } from './composites/CompositeName';
```

---

## Step 5: Validate

1. **Design parity** — `figma_check_design_parity` to compare code vs Figma specs
2. **Visual check** — `figma_capture_screenshot` for visual verification
3. **Build check** — Run `npm run build` to verify no TypeScript errors

---

## Cross-References

- Use `/design-tokens` to look up exact hex values, typography scales, spacing
- Use `/component-specs $ARGUMENTS` if this component's spec is already documented
