# Design System Reuse Rules

> NEVER use raw HTML elements or hardcoded styles when an Olamee design system component or token exists. Always import from `@/design-system`.

## Mandatory Import Rule

Every page, feature, or composite MUST import components from `@/design-system`.
NEVER write a raw HTML element when a design system component covers that use case.

## Forbidden Patterns → Required Replacements

| NEVER do this | ALWAYS do this instead |
|---|---|
| `<button>` or `<button className="...">` | `<Button>` from `@/design-system` |
| `<input>` or `<input type="text">` | `<Input>` from `@/design-system` |
| `<textarea>` | `<Textarea>` from `@/design-system` |
| `<select>` or custom dropdown div | `<SingleSelectDropdown>` or `<MultiSelectDropdown>` |
| `<input type="checkbox">` | `<Checkbox>` from `@/design-system` |
| `<input type="radio">` | `<RadioGroup>` + `<RadioItem>` |
| Custom toggle/switch div | `<Toggle>` |
| `<input type="range">` | `<Slider>` |
| `<input type="file">` | `<FileUpload>` |
| `<input type="date">` | `<DatePickerInput>` or `<CalendarDatePicker>` |
| `<input type="time">` | `<TimePickerInput>` |
| `<input type="tel">` with custom formatting | `<PhoneNumberField>` |
| `<input type="search">` or custom search | `<SearchBar>` |
| `<input>` with attached dropdown | `<InputWithDropdown>` |
| Custom icon SVG or `<img>` for icons | `<Icon>` (FontAwesome or custom om-* icons) |
| `<p>`, `<h1>`–`<h6>`, `<span>` for styled text | `<Text variant="...">` from Typography |
| Custom pill/badge/label div | `<Tag>` or `<Chip>` / `<FilterChip>` |
| Custom tooltip div or `title` attribute | `<Tooltip>` or `<RichTooltip>` |
| Custom card/panel div | `<Card>`, `<ContentCard>`, `<ClickableCard>`, or `<ProfileCard>` |
| Custom tab bar | `<Tabs>` + `<Tab>` |
| Custom toast/alert banner | `<Toast>`, `<Snackbar>`, or `<Notification>` |
| Custom progress bar div | `<ProgressBar>`, `<StepProgress>`, `<CircularChart>`, or `<BarProgress>` |
| Custom counter +/- buttons | `<Counter>` |
| Custom modal form layout | `<ModalForm>` + `<FormTitleBar>` + `<FormBody>` + `<FormFieldRow>` + `<FormFooter>` |
| Custom inline form layout | `<CardForm>` + Form sub-components |
| Custom country picker | `<CountrySelection>` |
| Custom multi-select with search | `<MultiSelectorSearchBar>` |
| Custom sidebar navigation | `<Sidebar>` (see layout-reuse.md) |
| Custom top navigation bar | `<TopNavbar>` (see layout-reuse.md) |

## Token Enforcement

| NEVER do this | ALWAYS do this instead |
|---|---|
| `bg-[#7A5FFF]` or any hardcoded brand hex | Use token class: `bg-primary`, `text-gunmetal-500`, etc. |
| `text-[#hex]` for brand/system colors | Map to token: check `/design-tokens` for the matching shade |
| `p-4` guessed spacing | Use exact Figma value: `p-[16px]` or matching token |
| `shadow-lg` or custom box-shadow | `shadow-elevation-1`, `shadow-elevation-2`, `shadow-elevation-3` |
| `rounded-lg` guessed radius | Use Figma-exact: `rounded-[8px]` or token `rounded-md` |
| `font-sans` or inline font-family | `font-heading`, `font-body`, or `font-code` |

**Exception:** One-off colors that do NOT exist in the 12 color families (e.g., a third-party brand color) may use `bg-[#hex]` with a comment explaining why.

## When Building New Pages

Before writing ANY JSX:
1. List every UI element visible in the design
2. For each element, check the lookup table above for the matching component
3. Import ALL matched components from `@/design-system`
4. Only use raw HTML (`<div>`, `<section>`, `<main>`) for structural containers that have no design system equivalent

## When Building New Components

Before creating a new component:
1. Check if an existing component already covers the use case (search the lookup table above)
2. If building a composite, import and compose existing primitives — NEVER recreate primitive behavior
3. If extending an existing component, modify it in place rather than creating a parallel version
