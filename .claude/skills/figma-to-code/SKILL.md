---
name: figma-to-code
description: Workflow for translating a Figma screen or page design into React code. Guides through reading Figma page structure, identifying which existing design system components to use, composing them with proper layout and spacing, and matching colors exactly. Use when asked to implement a page, screen, or layout from Figma, or to convert a Figma design to code.
argument-hint: [PageName or Figma frame URL/nodeId]
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Grep, Glob, Bash, WebFetch
---

# Figma Screen to Code Workflow

Convert this Figma screen to React: **$ARGUMENTS**

---

## Step 1: Understand the Figma Page Structure

1. **Get page structure** — `figma_get_file_data` with the frame/page nodeId (depth=2, verbosity='standard')
   - Always pass `fileUrl`: `https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System`
2. **Get selection** — if user selected something in Figma, use `figma_get_selection` to see what they're pointing at
3. **Get screenshot** — `figma_capture_screenshot` or `figma_get_component_image` for visual reference of the full page
4. **Get frame dev specs** — For each major section/frame in the page, call `figma_get_component_for_development` with its nodeId to get exact layout values:
   - `layoutMode` (VERTICAL/HORIZONTAL) → `flex-col` / `flex-row`
   - `paddingLeft/Right/Top/Bottom` → exact Tailwind padding
   - `itemSpacing` → exact `gap-[Npx]`
   - `cornerRadius`, `fills`, `strokes` → background, border, radius values

   Call this on **3-5 key frames** per page. This replaces guessing layout values from screenshots.

---

## Step 2: Map Figma Elements to Design System Components

### Pre-Flight: Component Inventory Check

Before mapping ANY elements, review the forbidden-pattern table in `.claude/rules/design-system-reuse.md`. For every UI element in the Figma frame:

1. Check if it matches a row in the lookup table (button → Button, input → Input, dropdown → SingleSelectDropdown, etc.)
2. If yes, you MUST use that design system component — no exceptions
3. If no match exists, it is a structural container (`<div>`, `<section>`) — use raw HTML with token-based Tailwind classes
4. For colors, check `/design-tokens` before using any `bg-[#hex]` — if the hex matches a token shade, use the token class instead

**Composites checklist:** If the page contains a form, use `ModalForm`/`CardForm` + `FormFieldRow` + `FormFooter`. If it contains dropdowns, use `SingleSelectDropdown`/`MultiSelectDropdown`. If it contains phone inputs, use `PhoneNumberField`.

### Element Mapping

For each element in the Figma page:
- Identify which existing design system component it maps to (Button, Input, Card, Typography, etc.)
- Note the exact variant props (e.g., `hierarchy="primary"`, `colorScheme="violet"`, `size="medium"`)
- Note layout relationships (flex direction, gaps, padding)

**Rule: NEVER recreate a primitive.** Always import from `@/design-system`:
```tsx
import { Button, Input, Card, ContentCard, Text, Tag, Icon, Tabs, Tab, Toast,
         Snackbar, Notification, Slider, ProgressBar, StepProgress,
         SingleSelectDropdown, ModalForm, CardForm } from '@/design-system';
```

Use `/component-specs ComponentName` to look up exact props and variants for any component.

**For non-component frames** (containers, sections, custom layouts), use `figma_get_component_for_development` on the frame nodeId to extract:
- Background color: `fills[0].color` → `bg-[#hex]` or map to a token class if it matches a known token (check via `/design-tokens`)
- Border: `strokes[0].color` + `strokeWeight` → `border border-[#hex]`
- Radius: `cornerRadius` → `rounded-[Npx]`
- Shadow: match to `shadow-elevation-1/2/3` tokens
- Text nodes: `fontSize`/`lineHeight`/`fontFamily` → map to `<Text variant="...">` or explicit Tailwind classes

### Handling Images

When Figma frames contain images (photos, illustrations, decorative backgrounds, non-icon rasters), they must be exported and saved locally:

1. **Detect image nodes** — Look for fill types of `IMAGE` or raster/vector image nodes in `figma_get_component_for_development` or `figma_get_file_data` results. These are NOT design system icons (those use FontAwesome).

2. **Export images** — Call `figma_get_component_image` on each image node ID:
   - Use `format: "svg"` for illustrations and vector graphics (smaller, scalable)
   - Use `format: "png"` for photos and raster content
   - Use `scale: 2` for high-quality exports

3. **Download & save** — Download the exported image URLs (via `WebFetch` or `curl`) and save them:
   - **Bundled assets** → `src/assets/` (processed by Vite, use for component-specific images)
   - **Static assets** → `public/images/` (served as-is, use for large/shared images)
   - Use descriptive filenames based on the Figma layer name (e.g., `hero-banner.png`, `empty-state-illustration.svg`)

4. **Reference in code:**
   ```tsx
   // From src/assets/ (Vite-bundled, hashed in production)
   import heroImg from '@/assets/hero-banner.png';
   <img src={heroImg} alt="Welcome banner" />

   // From public/ (static, no processing)
   <img src="/images/hero-banner.png" alt="Welcome banner" />
   ```

5. **Always add meaningful `alt` text** to all `<img>` tags for accessibility.

---

## Step 3: Build the Page

Create the page file (e.g. `src/PageName.tsx`):

1. **Import** all needed components from `@/design-system`
2. **Match layout from dev specs** — translate `figma_get_component_for_development` data directly:
   - `layoutMode: VERTICAL` + `itemSpacing: 16` → `flex flex-col gap-[16px]`
   - `layoutMode: HORIZONTAL` + `itemSpacing: 8` → `flex flex-row gap-[8px]`
   - `paddingTop: 24, paddingBottom: 24, paddingLeft: 32, paddingRight: 32` → `px-[32px] py-[24px]`
   - `primaryAxisAlignItems: CENTER` → `justify-center`
   - `counterAxisAlignItems: CENTER` → `items-center`
   - `layoutSizingHorizontal: FILL` → `w-full`
   - `layoutSizingVertical: HUG` → (no height constraint, fits content)

   **Do NOT estimate** padding or gap from screenshots. Always pull exact values from frame dev specs.
3. **Match typography** — use `<Text>` component matching Figma text styles:
   - Figma "Montserrat Bold 24/28" → `<Text variant="h4" weight="bold">`
   - Figma "Karla Regular 14/18" → `<Text variant="body-base">`
4. **Match colors** — use `/design-tokens` to look up exact hex values, then use Tailwind token classes
5. **Match spacing** — use exact px values from Figma auto-layout (gap, padding, margin)

---

## Step 4: Verify

1. **Screenshot & compare** — take a screenshot of your React output and compare with the Figma screenshot
2. **Check responsiveness** — verify the layout works at different viewport sizes if applicable
3. **Build check** — Run `npm run build` to verify no TypeScript errors

---

## Cross-References

- Use `/design-tokens` for exact hex values, typography scales, spacing values
- Use `/component-specs ComponentName` for component props, variants, and sizes

---

## Quick Reference: Figma Layout → Tailwind

| Figma Property | Tailwind Class |
|---|---|
| Auto layout: Vertical | `flex flex-col` |
| Auto layout: Horizontal | `flex flex-row` |
| Gap: N | `gap-[Npx]` |
| Padding: T R B L | `pt-[T] pr-[R] pb-[B] pl-[L]` (or `px-`/`py-` if symmetric) |
| Align items: Center | `items-center` |
| Justify: Center | `justify-center` |
| Justify: Space between | `justify-between` |
| Fill container (horizontal) | `w-full` |
| Fill container (vertical) | `h-full` or `flex-1` |
| Hug contents | (omit width/height) |
| Fixed width: N | `w-[Npx]` |
| Corner radius: N | `rounded-[Npx]` |
| Fill: solid #hex | `bg-[#hex]` or token class |
| Stroke: #hex, Npx | `border-[Npx] border-[#hex]` |
