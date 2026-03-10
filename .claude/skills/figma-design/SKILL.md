---
name: figma-design
description: Workflow for creating or modifying designs directly in Figma using MCP tools. Guides through searching and instantiating components, setting properties, creating custom elements, and validating with screenshots. Use when asked to create mockups, add components to Figma, modify the Figma file, or generate designs in Figma.
argument-hint: [Description of what to create in Figma]
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash
---

# Generate Design in Figma Workflow

Create in Figma: **$ARGUMENTS**

---

## Critical Reminders

- **Always re-search components** at the start of each session — nodeIds are session-specific and go stale
- **Always pass BOTH `componentKey` AND `nodeId`** when instantiating — most local/unpublished components need nodeId
- **Always pass `fileUrl`** explicitly as fallback: `https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System`
- **Never edit text on instances directly** — use `figma_set_instance_properties` instead (direct editing fails silently)

---

## Step 1: Find Components

1. **Search** — `figma_search_components` with query for the component you need
2. **Get details** — `figma_get_component_details` with the componentKey for variant options
3. Note down both `componentKey` and `nodeId` from search results — you need BOTH

---

## Step 2: Instantiate Components

1. **Create instance** — `figma_instantiate_component` with:
   - `componentKey` AND `nodeId` (both required)
   - `variant` object for variant properties (e.g., `{ Type: 'Primary', Size: 'Medium' }`)
   - `position` for placement on canvas (`{ x: 0, y: 0 }`)
   - `parentId` if placing inside a frame

2. **Set text/props** — `figma_set_instance_properties` for:
   - Text labels (e.g., `{ 'Button Label': 'Click Me' }`)
   - Boolean toggles (e.g., `{ 'Show Icon': true }`)
   - The tool handles `#nodeId` suffix automatically

---

## Step 3: Create Custom Elements (if needed)

For elements that aren't existing components:

- **Shapes/frames** — `figma_create_child` (RECTANGLE, ELLIPSE, FRAME, TEXT, LINE)
- **Set text** — `figma_set_text` for text content
- **Set colors** — `figma_set_fills` with hex colors (e.g., `[{ type: 'SOLID', color: '#7A5FFF' }]`)
- **Set borders** — `figma_set_strokes`

---

## Step 4: Fine-Tune Layout

- **Move** — `figma_move_node` to reposition elements
- **Resize** — `figma_resize_node` to adjust dimensions
- **Clone** — `figma_clone_node` to duplicate elements
- **Delete** — `figma_delete_node` to remove unwanted elements
- **Rename** — `figma_rename_node` for layer organization
- **Run JS** — `figma_execute` for complex operations not covered by other tools

---

## Step 5: Validate (Iterate up to 3 rounds)

1. **Screenshot** — `figma_capture_screenshot` to see current state
2. **Review** — Check alignment, spacing, proportions, colors
3. **Adjust** — Fix any issues found
4. **Repeat** — Screenshot again to verify fixes

Do up to 3 rounds of screenshot → adjust → screenshot to achieve the desired result.

---

## Cross-References

- Use `/design-tokens` for exact color hex values
- Use `/component-specs ComponentName` for component variant options and dimensions
