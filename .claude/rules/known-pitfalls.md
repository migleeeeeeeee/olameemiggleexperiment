# Known Pitfalls & Workarounds

> Project-specific gotchas discovered during development.

## ThemeProvider CSS Variable Namespace

Font families use the `--font-*` prefix in `@theme` (Tailwind namespace). The ThemeProvider builds font-weight vars as `--font-weight-*`. Don't confuse them:

- `--font-heading` = font-family (in @theme, hardcoded in `index.css`)
- `--font-weight-bold` = font-weight (injected by ThemeProvider)
- Font family values are hardcoded in `index.css` @theme, NOT injected by ThemeProvider

## PowerShell in Bash Tool

Dollar signs in PowerShell commands get consumed by the bash shell. Workarounds:
- Use script files instead of inline PowerShell
- Avoid inline `$variable` references in PowerShell commands passed through Bash tool

## Vite Scaffolding in Non-Empty Directories

Vite scaffolding fails in non-empty dirs (even with just `.claude/`). Workaround:
- Scaffold in a temp directory and copy files over

## CVA `color` Prop Conflict

CVA's `color` variant conflicts with the native HTML `color` attribute. Always use:
```tsx
export interface Props extends Omit<HTMLAttributes<HTMLElement>, 'color'>, VariantProps<typeof variants> {}
```

## Tailwind v4 Font Ambiguity

See `tailwind-v4.md` rule for full details. Summary:
- `font-[var(...)]` is BROKEN (parsed as font-weight)
- `text-[var(...)]` is BROKEN (ambiguous)
- Fix: Use `font-heading`/`font-body` and `text-[length:var(...)]`
