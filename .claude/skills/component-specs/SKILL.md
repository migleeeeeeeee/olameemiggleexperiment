---
name: component-specs
description: Look up detailed Figma specs for any Olamee design system component. Covers 34 primitives, 2 layout components, and 2 composites — Button, IconButton, Input, InputWithDropdown, SearchBar, Icon, Typography, Checkbox, Radio, Toggle, Chip/FilterChip, Tag, Tooltip/RichTooltip, ProgressBar, StepProgress, CircularChart, BarProgress, Slider, Textarea, DatePickerInput, DateRangePickerInput, CalendarDatePicker, TimePickerInput, TimeRangePickerInput, AmPmToggle, TimePickerUI, TimeRangePickerUI, Counter, FileUpload, Card/ClickableCard/ProfileCard/ContentCard, Tabs, Toast, Snackbar, Notification, Sidebar, TopNavbar, SelectionField, Form. Use when building, modifying, or debugging a component.
allowed-tools: Read, Grep, Glob
argument-hint: [ComponentName, e.g. "Button", "Card", "Input"]
---

# Olamee Component Specs

The user asked about: $ARGUMENTS

Find the matching component spec below and focus on that section. If no argument was given, provide an overview of all available components.

---

## Button (Figma: "Buttons V.2", node `400:1683`)

**Variant Axes:** hierarchy x size x colorScheme
- **hierarchy:** primary, secondary, tertiary, tonal
- **size:** xsmall, small, medium, large
- **colorScheme:** violet, mint, dark, destructive, ai

**Size Specs:**
| Size | Height | Padding-X | Gap | Radius | Min-Width | Icon | Font/LH | Letter Spacing |
|------|--------|-----------|-----|--------|-----------|------|---------|----------------|
| xsmall | 24px | 8px | 4px | 8px | 43px | 16px | 12/16 | -0.29px |
| small | 36px | 12px | 6px | 10px | 60px | 20px | 16/20 | -0.38px |
| medium | 48px | 16px | 6px | 12px | 68px | 24px | 16/20 | -0.38px |
| large | 56px | 24px | 6px | 16px | 93px | 32px | 20/28 | -0.48px |

**Font:** Karla Medium (500), letter-spacing: -2.4% (tracking-tight)

**Valid Hierarchy x ColorScheme Combinations:**
| ColorScheme | Primary | Secondary | Tertiary | Tonal |
|-------------|---------|-----------|----------|-------|
| violet | Y | Y | Y | Y |
| mint | Y | — | — | Y |
| dark | Y | — | — | Y |
| destructive | — | Y | Y | — |
| ai | Y | Y | Y | — |

**Color Specs (default / hover / active):**

| Combo | BG | Hover BG | Active BG | Text |
|-------|----|----------|-----------|------|
| Primary+Violet | `#6F54EB` | `#6249D4` | `#513CCB` | `#FDFDFE` |
| Primary+Mint | `#5ED4B2` | `#4AC3A1` | `#3BA98B` | `#30343F` |
| Primary+Dark | `#283044` | `#232B3D` | `#1F2635` | `#FDFDFE` |
| Primary+AI | gradient(65deg, #7A5FFF 14%, #6FE3C1 94%) | brightness-95 | brightness-90 | `#FDFDFE` |
| Secondary+Violet | transparent | `#EFF0F3` | `#B2B4BA` | `#30343F` (border `#B2B4BA`) |
| Secondary+Destructive | transparent | `#FCF0F1` | `#D62839` (text->white) | `#D62839` (border `#D62839`) |
| Secondary+AI | transparent | `#EFF0F3` | `#B2B4BA` | `#30343F` (border `#B2B4BA`) |
| Tertiary+Violet | transparent | `#EFF0F3` | `#B2B4BA` | `#30343F` |
| Tertiary+Destructive | transparent | `#FCF0F1` | `#F6D0D4` | `#D62839` |
| Tertiary+AI | gradient(65deg, #7A5FFF 14%, #6FE3C1 94%) | brightness-95 | brightness-90 | `#FDFDFE` |
| Tonal+Violet | `#F6F4FF` | `#E1DBFF` | `#C2B7FF` | `#3E2DA3` |
| Tonal+Mint | `#F5FDFA` | `#C7F2E4` | `#A1E7D3` | `#30343F` |
| Tonal+Dark | `#EDEFF4` | `#D5D8E1` | `#BCC0CD` | `#30343F` |

**Disabled (all combos):** bg `#EFF0F3`, text `#8D8F97`, opacity 75%, border-transparent

**Props:** `hierarchy`, `size`, `colorScheme`, `loading` (shows spinner), `leadIcon`, `trailIcon`, `asChild`, `disabled`, `className`

---

## IconButton (Figma: "Icon Buttons V.2", node `402:947`)

**Variant Axes:** hierarchy x size x colorScheme
- **hierarchy:** primary, secondary, tertiary, tonal
- **size:** xs, sm, md, lg
- **colorScheme:** violet, mint, dark, destructive

**Size Specs:**
| Size | Dimensions | Radius |
|------|-----------|--------|
| xs | 24x24px | 8px (radius-md) |
| sm | 36x36px | 10px (radius-md-lg) |
| md | 48x48px | 12px (radius-lg) |
| lg | 56x56px | 12px (radius-lg) |

**Colors:** Same hierarchy pattern as Button (primary fills, secondary outlined, tertiary text-only, tonal light-fill). Uses Tailwind token classes (`bg-primary-500`, `text-primary-500`, etc.)

**Disabled:** bg `gunmetal-100`, text `gunmetal-400`, opacity 75%

**Props:** `icon` (required ReactNode), `aria-label` (required string), `hierarchy`, `size`, `colorScheme`, `disabled`, `className`

---

## Input (Figma: "Single Line Text Fields", node `666:38806`)

**Variant Axes:** inputSize
- **inputSize:** extraSmall, small, medium

**Size Specs:**
| Size | Height | Min-Width | Radius | Padding |
|------|--------|-----------|--------|---------|
| extraSmall | 36px | 180px | 8px | px-12 py-4 |
| small | 48px | 280px | 10px | px-12 py-4 |
| medium | 56px | 280px | 12px | px-12 py-4 |

**Border Colors by State:**
| State | Color |
|-------|-------|
| Default | `#B2B4BA` (gunmetal-300) |
| Focused | `#6A6D76` (gunmetal-500) |
| Invalid | `#D62839` (red-base) |
| Disabled | opacity-50 |

**Background:** `#FDFDFE` (lavender-50)
**Text:** `#30343F` (gunmetal), placeholder `#8D8F97` (gunmetal-400)

**Slots:** label, labelIcon, supportingText, errorMessage, leadIcon, trailIcon, leadText, trailText

---

## Typography (Text Component)

**Variant Axes:** variant x weight x color

**variant values:**
- Headlines: `h1`, `h2`, `h3`, `h4`, `h5`, `h6` (Montserrat, auto-mapped to `<h1>`-`<h6>`)
- Body: `body-lg`, `body-base`, `body-sm`, `body-xs` (Karla, mapped to `<p>`)
- Button: `btn-lg`, `btn-base`, `btn-sm`, `btn-xs` (Karla Bold, mapped to `<span>`)

**weight values:** regular, medium, semibold, bold

**color values:** default (gunmetal), muted (gunmetal-500), muted-light (gunmetal-400), primary, secondary, destructive, success, warning, info, white, inherit

**Props:** `variant`, `weight`, `color`, `as` (custom element override), `className`

---

## Checkbox (Figma: node `591:3834`)

- Box: 18x18px, rounded-4px, border-1.5px
- Hitbox: 30x30px (rounded-full hover area)
- Unchecked: border `gunmetal-500`
- Checked: bg `primary` (#7A5FFF), white check icon 12x12
- Indeterminate: bg `primary`, white minus icon 12x12
- Hover: bg `gunmetal-100` (30px circle)
- Disabled: bg/border `gunmetal-300`
- Focus: ring-2 primary, offset-1

**Props:** `label`, `checked`, `onCheckedChange`, `disabled`

---

## Radio (Figma: node `591:3859`)

- Circle: 18x18px, rounded-full, border-1.5px
- Hitbox: 30x30px (rounded-full hover area)
- Unselected: border `gunmetal-500`
- Selected: border `primary`, inner dot 8px `primary`
- Hover: bg `gunmetal-100` (30px circle)
- Disabled: border/dot `gunmetal-300`
- Focus: ring-2 primary, offset-1

**Components:** `RadioGroup` (flex col gap-3), `RadioItem` (label, value, disabled)

---

## Toggle / Switch (Figma: node `1803:18349`)

- Track: 32x18px, rounded-12px (pill)
- Off: bg `gunmetal-100`, border-2 `gunmetal-400`, thumb 10px `gunmetal-400`
- On: bg `primary` (#7A5FFF), thumb 13px white with shadow
- Thumb translate: 2px (off) -> 13px (on)
- Disabled: opacity-50

**Props:** `label`, `checked`, `onCheckedChange`, `disabled`

---

## Chip (Figma: node `687:6476`)

- Size: h-36px, px-12, py-8, gap-10, rounded-8
- Unselected: bg `lavender-50`, border-1 `gunmetal-300`, hover bg `gunmetal-100`
- Selected: bg `primary-100`, no border, hover bg `primary-200`
- Typography: Karla Medium 14/18, tracking -0.175px
- Focus ring: 1.5px gunmetal-500, offset-2
- Slots: checkbox (18x18), radio (20x20), avatar (18x18), lead icon (16x16), dismiss (16x16)

**Props:** `selected`, `showCheckbox`, `showRadio`, `avatar`, `leadIcon`, `onDismiss`, `className`

### FilterChip (variant of Chip)
- Size: px-8, py-5, gap-10, rounded-8
- Error: border-red, bg lavender-50, hover bg red-50
- Count badge: 13x13px, bg primary-600, text lavender-50, text-10px, rounded-full

---

## Tag (Figma: node `581:8524`)

**Variant Axes:** color x size

**Color Specs:**
| Color | BG | Text | Border |
|-------|-----|------|--------|
| default | `gunmetal-lightest` | `gunmetal` | 1px `gunmetal-300` |
| success | `mantis-100` | `mantis-500` | none |
| error | `red-50` | `red` | none |
| warning | `accent-100` | `accent-800` | none |
| info | `electric-100` | `electric-700` | none |
| numbered | same as default | same as default | same as default |

**Size Specs:**
| Size | Padding | Font/LH | Icon |
|------|---------|---------|------|
| default | px-12 py-5 | 14/18, tracking -0.175px | 16px |
| small | px-10 py-3.5 | 12/14 | 12px |

**Shape:** rounded-full (pill). **Slots:** leadIcon, avatar, onDismiss (x button)

---

## Tooltip (Figma: node `687:7483`)

**Plain Tooltip:**
- BG: `gunmetal` (#30343F), rounded-4px
- Text: `lavender-50` (#FDFDFE), Karla Medium 12/14
- Single-line: px-8 py-4, max-w-560px
- Multi-line: p-8, max-w-400px, min-w-200px

**Rich Tooltip:**
- BG: `primary-50` (#F6F4FF), rounded-12px, w-312px, pt-12 pb-8
- Shadow: `0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)`
- Title: Karla Bold 14/18, text `gunmetal`
- Body: Karla Medium 14/18, tracking -0.175px, text `gunmetal-500`
- Actions: Tertiary/violet xsmall buttons, right-aligned in px-8 gap-8

---

## ProgressBar

**Variant Axes:** size x color
- **size:** sm (h-1.5/6px), md (h-2.5/10px), lg (h-4/16px)
- **color:** primary, secondary, success, warning, danger

Track: bg `gunmetal-100`, rounded-full. Indicator: colored bar, 300ms transition.

---

## Textarea (Figma: node `666:38904`)

- Min-height: 132px, min-width: 280px, rounded-12px, padding-12px
- Border colors same as Input (#B2B4BA default, #6A6D76 focused, #D62839 invalid)
- Resize: vertical enabled
- Placeholder: "Write here" in `#8D8F97`

---

## Card (Figma: node `396:739`)

**Variant Axes:** padding x elevation x width

| Padding | Value | Elevation | Shadow | Width | Value |
|---------|-------|-----------|--------|-------|-------|
| compact | 16px | none | — | auto | — |
| spacious | 24px | low | elevation-1 | fixed | 360px |
| — | — | medium | elevation-2 | full | 100% |

- BG: `lavender-50`, border-1 `gunmetal-200`, rounded-12px, min-w-256px, gap-16px
- Sub-components: `CardTitle` (h5 semibold), `CardSubtitle` (body-base muted), `CardBody`, `CardHeader`, `CardFooter`

**ClickableCard:** w-560px, min-w-256px, p-16, rounded-12. Transition: all 200ms ease-out.
- Default: bg lavender-50, border gunmetal-200
- Hover: bg `gunmetal-100`, border `gunmetal-300`, shadow elevation-1
- Active/Pressed: bg `gunmetal-100`, border `gunmetal-500`
- Focus: ring-2 `gunmetal-500`, ring-offset-3px, rounded-14px

**ProfileCard:** Uses `cardVariants` (padding/elevation/width). Avatar 46x46 rounded-full, border 1px gunmetal-300, bg lavender-50.
- Name: Karla Medium, body-lg, text-gunmetal
- Role: Karla Regular, body-lg, text-gunmetal-500
- Layout: header row (avatar + name/tag + role + action), body below
- Gaps: avatar-to-name 16px, name+tag 8px inline, name+role 4px vertical

**ContentCard:** Large container variant. Radius 24px (vs 12px standard), padding 32px (vs 16/24px).
- Uses `contentCardVariants`: elevation (none/low/medium), width (auto/full)
- Same bg/border as Card. Min-w-256px.

---

## Counter (Figma: node `666:40961`)

| Size | Height | Button-W | Center Min-W | Icon | Font |
|------|--------|----------|-------------|------|------|
| extraSmall | 36px | 36px | 48px | 12px | Montserrat Bold 16/20 |
| small | 48px | 48px | 56px | 16px | Montserrat Bold 20/24 |
| medium | 56px | 56px | 64px | 20px | Montserrat Bold 24/28 |

- Border: 1px `#B2B4BA`. Active bg: `#FDFDFE`. Disabled bg: `#FBFBFC`.
- Hover: `#EFF0F3`. Active press: `#D8DAE0`.

---

## SearchBar (Figma: node `2390:40348`)

- h-36px, min-w-300px, rounded-24px (pill), px-16 py-8, gap-10px
- Border: default `#B2B4BA`, focused `#30343F`
- Search icon: 12x12px. Clear icon: 10x10px.
- Typography: Karla Medium 14px. Placeholder: "Search" in `#8D8F97`.

---

## FileUpload (Figma: node `6453:24202`)

- Drop zone: h-167px (empty), rounded-10px, p-24px, dashed border `#B2B4BA`
- Drag over: bg `#EFF0F3`, border `#7A5FFF` (2px dashed)
- Upload icon: 20x20px in 40x40px circle bg `#EFF0F3`
- Browse text: `#7A5FFF` (primary)
- File row: bg `#F5F6F8`, rounded-10px, px-16 py-12
- Preview: 40x24px rounded-4px. File icon: 20x20px. Close: 20x20px.

---

## DatePickerInput (Figma: nodes `666:39026`, `666:41465`)

Same size specs as Input (extraSmall/small/medium). Label position: top or side.
- Calendar icon: 16px (xs), 20px (sm/md)
- Format hint: "MM/DD/YYYY". Placeholder: "mm/dd/yyyy"

### DateRangePickerInput
Two input fields side-by-side in one container. Same sizes. States: default, leftSelected, rightSelected, invalid, disabled.

---

## TimePickerInput (Figma: nodes `666:39145`, `1128:24232`)

Same size specs as Input. Clock icon: 20px (xs), 24px (sm/md).
- Format hint: "HH:MM". Placeholder: "hh:mm"

### TimeRangePickerInput
Two input fields side-by-side. Same sizes.

---

## CalendarDatePicker (Figma: node `666:39849`)

**Modes:** single, range, range-no-year, dual

- Container: bg `#FDFDFE`, border `#EFF0F3`, rounded-28px, p-24, gap-24
- Shadow: `0px 2px 4px rgba(18,20,22,0.06), 0px 4px 8px rgba(18,20,22,0.1)`
- Min-width: 399px (single/range)
- Grid: 7 columns, gap-x-10 gap-y-10
- Day cells: ~43.5px tall, Montserrat Regular 16/20
- Selected day: bg `#30343F`, text `#FDFDFE`, rounded-full, SemiBold
- Today: border `#30343F`, bg `#FDFDFE` (or `#EFF0F3` in range), Bold
- Range band: bg `#EFF0F3`
- Preset chips: h-32, px-12, rounded-10. Active: bg `#7A5FFF`, text `#F1F5FF`. Inactive: border `#D7D8DC`.
- Apply button: bg `#7A5FFF`, text `#F1F5FF`, h-40, px-16, min-w-64, rounded-12
- Cancel button: tertiary, h-40, min-w-64, rounded-12

---

## TimePickerUI / TimeRangePickerUI

**TimePickerUI:**
- Container: w-263px, min-w-240px, rounded-28
- Hour/Minute boxes: h-52, w-61/59, rounded-8
- Scroll picker: w-145px, max-h-180px
- Selected: bg `#7A5FFF`, text `#FDFDFE`, rounded-4
- Apply: bg `#6F54EB`, hover `#5A41D6`, active `#4A34B8`

**TimeRangePickerUI:**
- Container: min-w-320px, h-200, rounded-28
- Hour/Minute boxes: h-38, w-42, rounded-8

---

## AmPmToggle

- Container: w-31px, rounded-8, p-4, border `#B2B4BA`, bg `#FDFDFE`
- Button: h-15, px-4, rounded-4
- Selected: bg `#7A5FFF`, text `#FDFDFE`
- Unselected: text `#30343F`, hover bg `#EFF0F3`

---

## StepProgress

Horizontal step indicator with circles, labels, and connectors.

- Circle: 6x6px (completed), 5x5px (active/future), border 1.5px
- Labels: Karla 12/14px
- Description: 10/12px (shown for active step only)
- Connector: 4px height, 2px radius

**Colors:**
| State | Circle | Text | Connector |
|-------|--------|------|-----------|
| Completed | bg `#7A5FFF`, white check | `#6249D4` (bold) | `#6F54EB` |
| Active | border `#7A5FFF`, outline | `#6249D4` (bold) | `#C2B7FF` |
| Future | border `#A394FF`, outline | `#7A5FFF` | `#C2B7FF` |

**Props:** `steps` (StepItem[]: { label, description? }), `activeStep` (0-based), `showDescription`

---

## CircularChart

Donut-style circular progress chart (SVG).

**CVA Variants:** size
| Size | Dimensions | Font | Stroke |
|------|-----------|------|--------|
| xs | 36x36px | 10px | 4.5px |
| sm | 48x48px | 12px | 6px |
| md | 56x56px (default) | 14px | 7px |
| lg | 64x64px | 16px | 8px |

**Default Colors:** track `#EFF0F3`, fill `#7A5FFF`, text `#6249D4`

**Props:** `size`, `value` (0-100), `trackColor`, `fillColor`, `textColor`, `showLabel`

---

## BarProgress

Horizontal bar with floating badge tooltip showing "value/max".

- Track: h-8px, rounded-full, bg `#EFF0F3`
- Fill: rounded-full, 300ms ease-out transition
- Badge: 10px/12px bold, 4px radius, white text on fill color

**Default Colors:** track `#EFF0F3`, fill `#7A5FFF`, badge text `#FDFDFE`

**Props:** `value`, `max` (default 100), `trackColor`, `fillColor`

---

## Slider

Interactive range slider with keyboard + touch support.

- Track: h-6px, rounded-8px, bg `#EFF0F3`
- Fill: `#7A5FFF` (customizable)
- Thumb: 20x20px circle, white, shadow, border 2px fill color
- Labels: 10px/12px, tracking -0.24px, `#6249D4`
- Focus ring: 2px `#7A5FFF/40`
- Container: p-10px, gap-4px
- Disabled: opacity-50, pointer-events-none

**Props:** `value`, `min` (0), `max` (100), `step` (1), `showLabels`, `disabled`, `fillColor`, `trackColor`, `onChange`

---

## Tabs

**CVA Variants:** colorScheme
- **colorScheme:** violet, mint, dark

**Container:** bg `#FDFDFE`, border 1px `#B2B4BA`, rounded-12, p-4, gap-8, overflow-clip

**Tab Item:** h-32px, px-12, rounded-10. Font: Karla Medium 16/20, tracking -0.384px. Transition: colors 150ms.

**Active Tab Colors:**
| Color | BG | Text |
|-------|-----|------|
| violet | `#7A5FFF` | `#FDFDFE` |
| mint | `#5ED4B2` | `#30343F` |
| dark | `#283044` | `#FDFDFE` |

**Inactive:** no bg, text `#30343F`
**Disabled:** bg `#EFF0F3`, text `#8D8F97`, opacity-75

**Components:** `Tabs` (container), `Tab` (item)
**Props (Tabs):** `value`, `onValueChange`, `colorScheme`
**Props (Tab):** `value`, `disabled`, `children`

---

## Toast

**CVA Variants:** type
- **type:** success, error, warning

**Container:** max-w-434px, bg `#FDFDFE`, border 1px `#EFF0F3`, rounded-12, p-16, gap-16
**Shadow:** `0 4px 8px -2px rgba(18,20,22,0.10), 0 2px 4px -2px rgba(18,20,22,0.06)`

**Type Config:**
| Type | Icon | Color |
|------|------|-------|
| success | fa-circle-check | `#5FB54E` |
| error | fa-circle-xmark | `#D62839` |
| warning | fa-triangle-exclamation | `#EAD94C` |

- Title: Karla Bold 14/14, icon 16x16 + gap-8
- Description: Karla Regular 12/14, `#30343F`
- Close button: 20x20, absolute top-right
- Progress bar: 3px height, bottom-left, rounded-bl-20px

**Props:** `type`, `title`, `description`, `onDismiss`, `duration` (ms, default 5000), `showProgress`

---

## Snackbar

Inline notification bar with dismiss action.

- Container: bg `#FDFDFE`, rounded-8, px-24 py-14, gap-48, inline-flex items-center
- Shadow: `0 12px 16px -4px rgba(18,20,22,0.08), 0 4px 6px -2px rgba(18,20,22,0.03)`
- Text: Karla Regular 14/18, `#30343F`
- Action button: h-26px, px-8, rounded-8. Karla SemiBold 12/18, tracking -0.12px
  - Default text: `#6F54EB`, hover: `#6249D4` + bg `#6F54EB/8`, active: `#513CCB` + bg `#6F54EB/12`

**Props:** `message`, `actionLabel` ("Dismiss"), `onAction`, `onDismiss`

---

## Notification

**CVA Variants:** type
- **type:** success, warning, error, info

**Container:** max-w-360px, rounded-8, px-12 py-8, gap-4, overflow-clip

**Type Config:**
| Type | BG | Icon/Header Color | Icon |
|------|-----|------------------|------|
| success | `#E8F4E6` | `#366F2C` | fa-circle-check |
| warning | `#FBF7D9` | `#8B7F20` | fa-triangle-exclamation |
| error | `#FCF0F1` | `#D62839` | fa-circle-xmark |
| info | `#DEFCFF` | `#0DA5BF` | fa-circle-info |

- With header: icon 16x16 + header (Karla Bold 12/14) row, then description row
- Without header: single row with icon + description
- Description: Karla Regular 10/12, `#30343F`

**Props:** `type`, `title` (optional, omit for no-header variant), `description`

---

## Icon

**Sizes:** 2xs (12px), xs (16px), sm (20px, default), md (24px), lg (32px)

Icon registry in `primitives/Icon/icons.tsx` provides all FontAwesome + 33 custom Olamee PNG icons. Use `<Icon name="..." size="..." />`.

---

## InputWithDropdown

Same size specs as Input (extraSmall/small/medium). Contains up to 3 field segments within one border container.
- extraSmall: field widths 77/180/77px
- small/medium: field widths 96/280/96px

---

## SelectionField Composites

**Shared types:** `SelectionOption` { value, label, disabled?, icon?, description?, group? }, `SelectionFieldSize` = extraSmall | small | medium | large

**SingleSelectDropdown:** searchable, allowAddNew options. Same size scale as other inputs.

**MultiSelectDropdown:** Multi-value, chips shown. Same size scale.

**PhoneNumberField:** Country code selector + number input.

**CountrySelection:** Searchable country dropdown.

**Dropdown panel:** bg `#FDFDFE`, shadow elevation-1, rounded matching input size (8/10/12/12px).

---

## File Map

```
src/
├── design-system/
│   ├── index.ts                          # Public API — all exports
│   ├── lib/cn.ts                         # clsx + twMerge utility
│   ├── tokens/
│   │   ├── index.ts                      # Re-exports all tokens
│   │   ├── colors.ts                     # 12 color families + gradients
│   │   ├── typography.ts                 # Font families, scales, weights
│   │   ├── spacing.ts                    # 8pt grid (0-128px)
│   │   ├── elevation.ts                  # 3 shadow levels
│   │   └── radii.ts                      # Border radius scale
│   ├── types/
│   │   ├── components.types.ts           # Shared component types
│   │   └── tokens.types.ts               # Token type definitions
│   ├── themes/
│   │   ├── contract.ts                   # Builds CSS vars from tokens
│   │   └── ThemeProvider.tsx              # Injects CSS vars into DOM
│   ├── primitives/
│   │   ├── Button/                       # 4 hierarchies x 5 colorSchemes x 4 sizes
│   │   ├── IconButton/                   # 4 hierarchies x 4 colorSchemes x 4 sizes
│   │   ├── Icon/                         # Icon registry + size variants
│   │   ├── Input/                        # 3 sizes, label/icon/supporting slots
│   │   ├── InputWithDropdown/            # Multi-segment input
│   │   ├── SearchBar/                    # Pill-shaped search
│   │   ├── Typography/                   # Text component (h1-h6, body, btn)
│   │   ├── Checkbox/                     # Radix-based checkbox
│   │   ├── Radio/                        # RadioGroup + RadioItem
│   │   ├── Toggle/                       # Switch toggle
│   │   ├── Chip/                         # Chip + FilterChip
│   │   ├── Tag/                          # 6 colors x 2 sizes
│   │   ├── Tooltip/                      # Plain + Rich Tooltip
│   │   ├── ProgressBar/                  # 3 sizes x 5 colors
│   │   ├── Textarea/                     # Multi-line input
│   │   ├── Card/                         # Card, ClickableCard, ProfileCard, ContentCard
│   │   ├── Counter/                      # Stepper counter (3 sizes)
│   │   ├── FileUpload/                   # Drag & drop file upload
│   │   ├── DatePickerInput/              # Date input (3 sizes, 2 label positions)
│   │   ├── DateRangePickerInput/         # Date range input
│   │   ├── CalendarDatePicker/           # Full calendar (4 modes)
│   │   ├── TimePickerInput/              # Time input
│   │   ├── TimeRangePickerInput/         # Time range input
│   │   ├── TimePickerUI/                 # Time selection panel
│   │   ├── TimeRangePickerUI/            # Time range selection panel
│   │   ├── AmPmToggle/                   # AM/PM toggle
│   │   ├── StepProgress/                 # Horizontal step indicator
│   │   ├── CircularChart/                # Donut-style circular progress
│   │   ├── BarProgress/                  # Bar with floating badge
│   │   ├── Slider/                       # Interactive range slider
│   │   ├── Tabs/                         # Tab bar (3 color schemes)
│   │   ├── Toast/                        # Toast notification (3 types)
│   │   ├── Snackbar/                     # Inline snackbar with dismiss
│   │   └── Notification/                 # Colored notification bar (4 types)
│   ├── composites/
│   │   ├── SelectionField/               # SingleSelect, MultiSelect, PhoneNumber, Country
│   │   └── Form/                         # ModalForm, CardForm, FormTitleBar, FormFieldRow, FormFooter, FormBody
│   └── layout/
│       ├── Sidebar/                      # 3 themes, collapsible, sections with sub-items
│       └── TopNavbar/                    # 3 slots, 3 states, gradient accent bar
├── App.tsx                               # Showcase/home page
├── main.tsx                              # Entry point
└── index.css                             # Tailwind v4 @theme config
```

### Composites Not Yet Built
These directories exist but are empty scaffolds:
- Modal, Table, Filter
