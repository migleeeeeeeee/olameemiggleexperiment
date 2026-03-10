# FontAwesome Pro 6.5.1 — Icon Rules

> All icons in this project use FontAwesome Pro 6.5.1 (webfont CSS approach, NOT JS/SVG).

## Setup

- **CSS:** `public/fontawesome/css/olamee-icons.min.css` (loaded via `<link>` in `index.html`)
- **Fonts:** `public/fontawesome/webfonts/` (ttf + woff2)
- **Source files from:** `fontawesome-pro-6.5.1-web` on Desktop

## Available Styles (Olamee uses ONLY these 4)

| Style | Class Prefix | Weight |
|-------|-------------|--------|
| Thin | `fa-thin` | 100 |
| Light | `fa-light` | 300 |
| Regular | `fa-regular` | 400 |
| Solid | `fa-solid` | 900 |

**Default weight is `fa-regular` (400)** — matches Figma design system specs.

## Icon Component Usage

```tsx
// Named icon from registry (default: fa-solid)
<Icon name="heart" size="md" />

// Override FA style
<Icon name="bell" faStyle="regular" size="sm" />

// Any FontAwesome icon directly via class
<Icon faClass="fa-light fa-wand-magic-sparkles" size="lg" />

// Custom child (escape hatch)
<Icon size="md"><i className="fa-thin fa-robot" /></Icon>
```

## Icon Registry

**Location:** `src/design-system/primitives/Icon/icons.tsx`

- Maps `IconName` -> `{ faClass: string, category: IconCategory }`
- Categories: general, payment, olamee, social
- All registry icons default to `fa-solid` style
- Use `faStyle` prop to switch to regular/light/thin

## Adding New Icons

1. Find the icon name at [fontawesome.com/icons](https://fontawesome.com/icons)
2. Add entry to `iconRegistry` in `icons.tsx`:
   ```tsx
   'icon-name': { faClass: 'fa-solid fa-icon-name', category: 'general' }
   ```
3. The `IconName` type auto-updates via `keyof typeof iconRegistry`

## Inline Icons in Components

When a component needs a small inline icon (not via the Icon wrapper), use **fa-regular** as default:

```tsx
<i className="fa-regular fa-check text-[12px]" />
<i className="fa-regular fa-xmark text-[10px] text-[#8D8F97]" />
<i className="fa-regular fa-calendar text-[#8D8F97]" style={{ fontSize: size }} />
```

## Rules

- NO inline SVG icons anywhere — all replaced with FontAwesome `<i>` tags
- Button loading spinner is the ONE exception (custom animated SVG, not an icon)
- NO duotone, sharp, or brands styles — only thin/light/regular/solid
