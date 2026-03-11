# Olamee Design System — CLAUDE.md

> Lean project reference. Detailed specs in skills (`/skill-name`), rules auto-loaded from `.claude/rules/`.

---

## 1. Project Overview

| Key | Value |
|-----|-------|
| Stack | React 19, TypeScript 5.9, Vite 7, Tailwind CSS v4, Radix UI, CVA, FontAwesome Pro 6.5.1 |
| Path Alias | `@/` → `src/` |
| Figma File | [OLAMEE Design System](https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System) |
| Figma Key | `QL8Ydz4G4HMYNYpXESpA9u` |
| Figma URL | `https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System?node-id=0-1&m=dev` |

### Data Flow

```
Token files (src/design-system/tokens/*.ts)
  → contract.ts builds CSS custom properties
    → ThemeProvider injects vars into DOM
      → index.css @theme maps vars to Tailwind utilities
        → Components consume Tailwind classes

FontAwesome Pro 6.5.1 (webfont-based)
  → public/fontawesome/css/olamee-icons.min.css (loaded via <link> in index.html)
  → public/fontawesome/webfonts/ (font files)
  → Icon component renders <i className="fa-regular fa-icon-name" />
```

---

## 2. Figma MCP Servers

This project uses **TWO** Figma MCP servers simultaneously:

### Official Figma MCP (`mcp__Figma__*`)

Figma's own server via desktop app at `http://127.0.0.1:3845/mcp`.

**Tools:** `get_design_context`, `get_variable_defs`, `get_screenshot`, `create_design_system_rules`, `get_metadata`, `get_figjam`, `generate_diagram`

**Best for:** Getting structured React+Tailwind code from Figma frames, extracting design tokens, generating design system rules, FigJam diagrams.

Use `/figma-official` for the complete tool reference and workflows.

### Figma Console MCP (`mcp__figma-console__*`)

Third-party server via Desktop Bridge plugin. Provides 56+ tools.

**Tools:** Component search/instantiation, node creation/editing, variable management, design parity checks, screenshots, documentation generation, comments, and more.

**Best for:** Creating/editing designs IN Figma, managing variables, searching for components, validating code against Figma, direct file manipulation.

Use `/figma-console` for the complete tool reference and workflows.

### When to Use Which

| Task | Server |
|------|--------|
| Generate code from a Figma frame | Official (`get_design_context`) |
| Extract design tokens as code exports | Official (`get_variable_defs`) |
| Generate design system rules file | Official (`create_design_system_rules`) |
| Get sparse page structure (XML) | Official (`get_metadata`) |
| Search & instantiate components in Figma | Console (`figma_search_components`, `figma_instantiate_component`) |
| Create/edit nodes in Figma | Console (`figma_create_child`, `figma_set_text`, `figma_set_fills`, etc.) |
| Check code vs Figma parity | Console (`figma_check_design_parity`) |
| Manage variables/tokens in Figma | Console (`figma_*_variable*` tools) |
| Generate component documentation | Console (`figma_generate_component_doc`) |
| Take screenshot for validation | Either (both have screenshot tools) |

### Connection Rules

- **Always pass `fileUrl` explicitly** as fallback — CDP connections can timeout
- Default fileUrl: `https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System`
- **Re-search components** at the start of each session (nodeIds are session-specific)
- **Never edit text on instances directly** — use `figma_set_instance_properties` instead
- Pass `clientLanguages: "typescript,html,css"` and `clientFrameworks: "react"` to official tools

---

## 3. Available Skills

### Reference Skills (auto-loaded by Claude when relevant)

| Skill | Command | Use When |
|-------|---------|----------|
| Official Figma MCP | `/figma-official` | Using Figma's official MCP for code gen, tokens, rules |
| Figma Console MCP | `/figma-console` | Using figma-console for direct Figma manipulation |
| Design Tokens | `/design-tokens` | Looking up color hex values, typography scales, spacing, shadows, radii |
| Component Specs | `/component-specs [Name]` | Need specs for any of the 34 primitives, 2 layout, or 2 composite components |

### Task Skills (invoke manually with `/command`)

| Skill | Command | Use When |
|-------|---------|----------|
| Build Component | `/build-component [Name]` | Building a new design system component from Figma |
| Figma to Code | `/figma-to-code` | Translating a Figma screen/page into a React page |
| Figma Design | `/figma-design` | Creating or modifying designs directly in Figma |

### Rules (auto-loaded from `.claude/rules/`)

| Rule File | Content |
|-----------|---------|
| `tailwind-v4.md` | CSS variable syntax, font ambiguity pitfalls, @theme registration |
| `component-patterns.md` | CVA template, file structure, disabled state, export checklist |
| `fontawesome.md` | FA Pro 6.5.1 setup, styles, Icon component usage, registry |
| `figma-connection.md` | Both MCP servers, connection rules, fileUrl constant |
| `known-pitfalls.md` | ThemeProvider namespace, PowerShell, Vite scaffolding |
| `design-system-reuse.md` | Forbidden raw HTML patterns, mandatory DS component usage, token enforcement |
| `layout-reuse.md` | Always reuse Sidebar/TopNavbar, never recreate them |
| `sidebar-nav-structure.md` | Canonical sidebar sections (Find/Manage/Admin), never modify |

---

## 4. Quick References

### MANDATORY: Use Design System Components

**Every UI element MUST use an existing design system component when one exists.** See `.claude/rules/design-system-reuse.md` for the full forbidden-pattern lookup table. Key rules:

- NEVER use raw `<button>`, `<input>`, `<select>`, `<textarea>` — use Button, Input, SingleSelectDropdown, Textarea
- NEVER use `<p>`/`<h1>`-`<h6>`/`<span>` for styled text — use `<Text variant="...">`
- NEVER hardcode brand colors as `bg-[#hex]` — use design token classes
- NEVER create custom card/modal/toast/tab layouts — use the existing composites
- Only raw `<div>`, `<section>`, `<main>` for structural wrappers with no DS equivalent

### Token Families (use `/design-tokens` for full hex tables)

- **12 color families:** Primary (violet #7A5FFF), Secondary (mint #5ED4B2), Accent (yellow #EAD94C), Gunmetal (#30343F), Space Cadet (#283044), Red (#D62839), Orange (#FF9F1C), Mantis (#5FB54E), Lavender (#E8E1EF), Amaranth Purple (#A30B37), Reseda Green (#646F58), Electric Blue (#18E8FF)
- **Typography:** Montserrat (headings), Karla (body/buttons), JetBrains Mono (code)
- **Spacing:** 8pt grid (0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128 px)
- **Elevation:** 3 shadow levels (cards → menus → dialogs)
- **Radii:** none/sm/md/md-lg/lg/xl/2xl/full (0px–9999px)

### Component Index — You MUST use these (use `/component-specs Name` for full specs)

**Primitives (34):** Button, IconButton, Input, InputWithDropdown, SearchBar, Icon, Typography (Text), Checkbox, Radio, Toggle, Chip (+ FilterChip), Tag, Tooltip (+ RichTooltip), ProgressBar, StepProgress, CircularChart, BarProgress, Slider, Textarea, DatePickerInput, DateRangePickerInput, CalendarDatePicker, TimePickerInput, TimeRangePickerInput, AmPmToggle, TimePickerUI, TimeRangePickerUI, Counter, FileUpload, Card (+ ClickableCard, ProfileCard, ContentCard), Tabs, Toast, Snackbar, Notification

**Layout (2):** Sidebar, TopNavbar

**Composites (2):** SelectionField (SingleSelectDropdown, MultiSelectDropdown, MultiSelectorSearchBar, PhoneNumberField, CountrySelection), Form (ModalForm, CardForm, FormTitleBar, FormFieldRow, FormFooter, FormBody)


