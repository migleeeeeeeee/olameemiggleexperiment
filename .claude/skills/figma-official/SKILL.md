---
name: figma-official
description: Reference for the official Figma MCP server tools (mcp__Figma__*). Covers get_design_context, get_variable_defs, get_screenshot, create_design_system_rules, get_metadata, get_figjam, and generate_diagram. Use when working with Figma's official MCP for code generation from designs, design token extraction, design system rules generation, or FigJam diagram creation.
argument-hint: [tool-name or workflow, e.g. "design context", "create rules", "tokens"]
allowed-tools: Read, Grep, Glob
---

# Official Figma MCP Server (`mcp__Figma__*`)

The user asked about: $ARGUMENTS

Find the relevant tool or workflow below.

---

## Figma File URL

Always pass when calling tools that accept it:
```
https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System
```

Always pass these parameters for best output:
```
clientLanguages: "typescript,html,css"
clientFrameworks: "react"
```

---

## Complete Tool Reference

### 1. `get_design_context` — Generate Code from Figma

**What:** Retrieves design context for a layer or selection, outputs structured code (default: React + Tailwind).

**Parameters:**
- `nodeId` — Node ID from Figma (e.g., `"123:456"`). If omitted, uses current selection (desktop only).
- `clientLanguages` — `"typescript,html,css"`
- `clientFrameworks` — `"react"`
- `artifactType` — `WEB_PAGE_OR_APP_SCREEN`, `COMPONENT_WITHIN_A_WEB_PAGE_OR_APP_SCREEN`, `REUSABLE_COMPONENT`, or `DESIGN_SYSTEM`
- `taskType` — `CREATE_ARTIFACT`, `CHANGE_ARTIFACT`, or `DELETE_ARTIFACT`
- `forceCode` — Set `true` to force code output even for large nodes

**Best for:** Translating a Figma frame into React + Tailwind code.

**Tips:**
- Selection-based prompting requires the desktop server
- Can customize output to Vue, HTML+CSS, iOS, etc. via prompt context
- Combine with `get_screenshot` for visual + code reference

---

### 2. `get_variable_defs` — Extract Design Tokens

**What:** Returns variables and styles (colors, spacing, typography) used in a selection.

**Parameters:**
- `nodeId` — Node ID to extract variables from. If omitted, uses current selection.
- `clientLanguages` — `"typescript,html,css"`
- `clientFrameworks` — `"react"`

**Best for:** Getting exact design token values (color hex codes, spacing values, typography specs) from a specific Figma element.

**Tips:**
- Returns resolved values — actual hex colors, not just variable names
- Use on component frames to get all tokens that component uses

---

### 3. `get_screenshot` — Capture Visual Reference

**What:** Takes a screenshot of a Figma selection or node.

**Parameters:**
- `nodeId` — Node to screenshot. If omitted, uses current selection.
- `clientLanguages` — `"typescript,html,css"`
- `clientFrameworks` — `"react"`

**Best for:** Getting a visual reference image alongside code output.

**Tips:**
- Keep enabled unless token limits are a concern
- Combine with `get_design_context` for complete visual + code reference

---

### 4. `create_design_system_rules` — Generate Rules File

**What:** Creates a rules file that provides Claude with the right context to translate designs into frontend code aligned with your design system and tech stack.

**Parameters:**
- `clientLanguages` — `"typescript,html,css"`
- `clientFrameworks` — `"react"`

**Best for:** One-time setup to generate a design system rules file. Requires NO Figma file context.

**Workflow:**
1. Call `create_design_system_rules`
2. Save the output to `.claude/rules/figma-design-system.md`
3. Claude will auto-load these rules when doing design-to-code work

**Tips:**
- Run this once at project setup, re-run when design system changes significantly
- The generated rules help align code output with your specific tech stack

---

### 5. `get_metadata` — Sparse Layer Structure (XML)

**What:** Returns a sparse XML representation of a node/page with basic properties: layer IDs, names, types, positions, sizes.

**Parameters:**
- `nodeId` — Node to inspect. Can be a page ID (e.g., `"0:1"`). If omitted, uses current selection.
- `clientLanguages` — `"typescript,html,css"`
- `clientFrameworks` — `"react"`

**Best for:** Understanding the structure of a complex page without consuming too many tokens. Use before `get_design_context` on specific child nodes.

**Tips:**
- Much lighter than `get_design_context` — good for initial exploration
- Use the returned node IDs to then call `get_design_context` on specific elements
- Can handle multiple selections

---

### 6. `get_figjam` — Convert FigJam to XML

**What:** Converts FigJam diagrams (architecture workflows, user flows) to XML representation including node screenshots.

**Parameters:**
- `nodeId` — FigJam node to convert
- `includeImagesOfNodes` — Default `true`, includes images of nodes
- `clientLanguages` — `"typescript,html,css"`
- `clientFrameworks` — `"react"`

**Best for:** Converting FigJam architecture diagrams or workflows into structured data.

**Note:** Only works for FigJam files, not regular Figma design files.

---

### 7. `generate_diagram` — Create FigJam from Mermaid

**What:** Generates a FigJam diagram from Mermaid syntax.

**Supported diagram types:** Flowchart, Gantt chart, State diagram, Sequence diagram

**Best for:** Creating visual diagrams in FigJam programmatically.

**Tip:** Must explicitly say "Use the Figma MCP generate_diagram tool" in prompt to trigger it.

---

### 8. `whoami` — Check User Identity (Remote Only)

**What:** Returns the authenticated user's email, plan memberships, and seat type.

**Availability:** Remote server only (`https://mcp.figma.com/mcp`)

---

## Availability Matrix

| Tool | Desktop | Remote |
|------|---------|--------|
| `get_design_context` | Yes (+ selection) | Yes (nodeId only) |
| `get_variable_defs` | Yes | Yes |
| `get_screenshot` | Yes | Yes |
| `create_design_system_rules` | Yes | Yes |
| `get_metadata` | Yes | Yes |
| `get_figjam` | Yes | Yes |
| `generate_diagram` | Yes | Yes |
| `generate_figma_design` | No | Yes (Claude Code only) |
| `whoami` | No | Yes |

---

## Common Workflows

### Get code from a Figma frame
1. `get_metadata` (nodeId of page) — understand structure
2. `get_screenshot` (nodeId of target frame) — visual reference
3. `get_design_context` (nodeId of target frame) — get code

### Extract design tokens from a component
1. `get_variable_defs` (nodeId) — get all tokens used

### Set up design system rules (one-time)
1. `create_design_system_rules` — generate rules
2. Save output to `.claude/rules/figma-design-system.md`

### Explore a complex page
1. `get_metadata` (page nodeId, depth limited) — get layer tree
2. Pick specific nodeIds from the tree
3. `get_design_context` on each target node
