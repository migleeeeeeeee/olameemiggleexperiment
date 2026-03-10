# Tailwind CSS v4 — Syntax Rules

> These rules apply to ALL component and page code in this project.

## CSS Variable Syntax

| What | Syntax | Example |
|------|--------|---------|
| Font size | `text-[length:var(--font-size-*)]` | `text-[length:var(--font-size-body-base)]` |
| Line height | `leading-[var(--line-height-*)]` | `leading-[var(--line-height-body-base)]` |
| Font family | `font-heading` or `font-body` | Registered in @theme, NOT `font-[var(...)]` |
| Font weight | `font-bold`, `font-semibold`, etc. | Standard Tailwind weight classes |
| Letter spacing | `tracking-[var(--letter-spacing-tight)]` | For button text |
| Colors | `bg-primary`, `text-gunmetal-500` | Registered in @theme |
| Shadows | `shadow-elevation-1` | Registered in @theme |
| Border radius | `rounded-[8px]` or `rounded-md` | Pixel values for Figma-exact, tokens for general |

## CRITICAL: Ambiguous Syntax Pitfalls

### Font Size — NEVER use `text-[var(...)]`
```
BAD:  text-[var(--font-size-body-base)]     // ambiguous — Tailwind can't tell if this is font-size or color
GOOD: text-[length:var(--font-size-body-base)]  // the `length:` hint resolves ambiguity
```

### Font Family — NEVER use `font-[var(...)]`
```
BAD:  font-[var(--font-family-heading)]  // parsed as font-weight, NOT font-family
GOOD: font-heading                       // use the registered @theme utility
GOOD: font-body                          // use the registered @theme utility
```

### Font Weight — Use standard Tailwind classes
```
BAD:  font-[var(--font-weight-bold)]
GOOD: font-bold, font-semibold, font-medium, font-normal
```

## @theme Registration

Font families are registered in `src/index.css` under `@theme`:
- `--font-heading: 'Montserrat', sans-serif`
- `--font-body: 'Karla', sans-serif`
- `--font-code: 'JetBrains Mono', monospace`

These produce utility classes `font-heading`, `font-body`, `font-code`. The ThemeProvider does NOT inject font families — they are hardcoded in `@theme`.

## ThemeProvider vs @theme Namespace

- `@theme` uses `--font-*` prefix for Tailwind's font-family namespace
- ThemeProvider builds font-weight vars as `--font-weight-*`
- Don't confuse them — they serve different purposes
