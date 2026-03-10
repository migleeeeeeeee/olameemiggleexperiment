---
name: figma-console
description: Reference for the figma-console MCP server tools (mcp__figma-console__*). Provides 56+ tools for direct Figma manipulation including design creation, variable management, component search/instantiation, node editing, design parity checks, screenshots, and documentation generation. Use when creating or editing designs in Figma, managing design tokens/variables, searching for components, validating code against Figma specs, or performing any direct Figma file manipulation.
argument-hint: [tool-name or workflow, e.g. "search components", "create variable", "check parity"]
allowed-tools: Read, Grep, Glob, Bash
---

# Figma Console MCP Server (`mcp__figma-console__*`)

The user asked about: $ARGUMENTS

Find the relevant tool category or workflow below.

---

## Figma File URL

Always pass `fileUrl` when calling tools that accept it (CDP connections can timeout):
```
https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System
```

---

## 1. Navigation & Status

| Tool | What It Does |
|------|-------------|
| `figma_navigate` | Open a Figma URL and start console monitoring. Use first when starting a debug session. |
| `figma_get_status` | Check connection status (CDP or WebSocket transport). |
| `figma_reconnect` | Force reconnection to Figma Desktop. Use when connection seems stale. |
| `figma_list_open_files` | List all files connected via Desktop Bridge plugin. |

---

## 2. Console & Debugging

| Tool | What It Does |
|------|-------------|
| `figma_get_console_logs` | Retrieve console logs (default: last 100). Filter by level. |
| `figma_watch_console` | Stream logs in real-time for up to 5 minutes. Best for monitoring plugin execution. |
| `figma_clear_console` | Clear the console log buffer. |
| `figma_reload_plugin` | Reload current page/plugin to test code changes. |

---

## 3. Screenshots & Selection

| Tool | What It Does |
|------|-------------|
| `figma_take_screenshot` | Export image via REST API (valid 30 days). Good for visual validation. |
| `figma_capture_screenshot` | Capture via plugin's `exportAsync` API — shows CURRENT state immediately after changes. **Preferred for validation.** |
| `figma_get_selection` | Get currently selected nodes (IDs, names, types, dimensions). WebSocket-only. |
| `figma_get_design_changes` | Get recent document changes. Useful for polling workflows. |

**Tip:** Use `figma_capture_screenshot` (not `figma_take_screenshot`) after making changes — it captures the live plugin state, not the cloud-cached version.

---

## 4. Design System Extraction

| Tool | What It Does |
|------|-------------|
| `figma_get_variables` | Extract design tokens/variables with optional code exports (CSS, Tailwind, TypeScript, Sass). Supports multi-mode (Light/Dark). |
| `figma_get_styles` | Get all styles (color, text, effects, grids) with optional code exports. |
| `figma_get_token_values` | Get actual values for design tokens (colors, spacing). Quick lookup. |
| `figma_get_design_system_summary` | Compact overview: categories, component counts, token collection names. Use first. |
| `figma_get_file_data` | Full file structure and document tree. Start with `depth=1, verbosity='summary'`. |
| `figma_get_file_for_plugin` | File data optimized for plugin development (IDs, structure, plugin data). Supports depth up to 5. |

**Workflow — Explore design system:**
1. `figma_get_design_system_summary` — overview
2. `figma_get_token_values` — specific token values
3. `figma_get_variables` — full variable data with exports

---

## 5. Component Operations

| Tool | What It Does |
|------|-------------|
| `figma_search_components` | Search by name, category, or description. Returns component keys for instantiation. |
| `figma_get_component_details` | Full details for a specific component (all variants, properties, keys). |
| `figma_get_component` | Component metadata or reconstruction spec. Pass `nodeId`. |
| `figma_get_component_for_development` | Implementation specs + rendered image. Best for UI development. |
| `figma_get_component_image` | Render component as image (PNG, JPG, SVG, PDF). URL valid 30 days. |
| `figma_instantiate_component` | Create an instance of a component. **Always pass BOTH `componentKey` AND `nodeId`.** |
| `figma_set_instance_properties` | Update text/props on an instance. **Use this instead of `figma_set_text` on instances.** |
| `figma_arrange_component_set` | Organize variant grid with Figma's native purple dashed visualization. |

**Critical Rules:**
- Always re-search components at session start (nodeIds are session-specific)
- Always pass BOTH `componentKey` AND `nodeId` to `figma_instantiate_component`
- Never use `figma_set_text` on instances — use `figma_set_instance_properties`

**Workflow — Find and instantiate a component:**
1. `figma_search_components` — find it
2. `figma_get_component_details` — get variants and properties
3. `figma_instantiate_component` — create instance (pass componentKey + nodeId + variant + position)
4. `figma_set_instance_properties` — set text labels and boolean toggles
5. `figma_capture_screenshot` — validate result

---

## 6. Component Properties

| Tool | What It Does |
|------|-------------|
| `figma_add_component_property` | Add BOOLEAN, TEXT, INSTANCE_SWAP, or VARIANT property to a component. |
| `figma_edit_component_property` | Edit property name, default value, or preferred values. |
| `figma_delete_component_property` | Delete a property (BOOLEAN, TEXT, INSTANCE_SWAP only). |
| `figma_set_description` | Set description text on a component or style (shown in Dev Mode). |

---

## 7. Node Manipulation

| Tool | What It Does |
|------|-------------|
| `figma_create_child` | Create RECTANGLE, ELLIPSE, FRAME, TEXT, or LINE inside a parent. |
| `figma_set_text` | Set text content and optional font size on a text node. |
| `figma_set_fills` | Set fill colors with hex strings (e.g., `[{type: "SOLID", color: "#7A5FFF"}]`). |
| `figma_set_strokes` | Set strokes/borders with hex colors and optional weight. |
| `figma_move_node` | Move a node to new X/Y position within its parent. |
| `figma_resize_node` | Resize a node to specific width/height. |
| `figma_clone_node` | Duplicate a node (placed at slight offset). |
| `figma_delete_node` | Delete a node. Destructive — can undo in Figma. |
| `figma_rename_node` | Rename a node in the layer panel. |

**Tip:** Always create components inside a Section or Frame, never on blank canvas. Use `parent.insertChild(0, bg)` via `figma_execute` for z-ordering backgrounds behind content.

---

## 8. Variable Management

| Tool | What It Does |
|------|-------------|
| `figma_create_variable_collection` | Create empty collection with optional modes. |
| `figma_create_variable` | Create a single variable (COLOR, FLOAT, STRING, BOOLEAN). |
| `figma_update_variable` | Update a variable's value in a specific mode. |
| `figma_rename_variable` | Rename while preserving values and settings. |
| `figma_delete_variable` | Delete a variable. Destructive. |
| `figma_delete_variable_collection` | Delete a collection and ALL its variables. Destructive. |
| `figma_add_mode` | Add a new mode to a collection (e.g., "Dark", "Mobile"). |
| `figma_rename_mode` | Rename an existing mode. |
| `figma_batch_create_variables` | Create up to 100 variables in one call. 10-50x faster than individual calls. |
| `figma_batch_update_variables` | Update up to 100 values in one call. 10-50x faster. |
| `figma_setup_design_tokens` | Create complete token structure atomically: collection + modes + variables. |

**Workflow — Set up design tokens:**
1. `figma_setup_design_tokens` — create collection, modes, and all tokens in one call
2. Or use `figma_create_variable_collection` + `figma_batch_create_variables` for more control

**COLOR values:** hex strings like `"#FF0000"` or `"#FF000080"` (with alpha)

---

## 9. Design <-> Code Parity

| Tool | What It Does |
|------|-------------|
| `figma_check_design_parity` | Compare Figma component specs against code-side data. Returns parity score, discrepancies, and fix items. |
| `figma_generate_component_doc` | Generate platform-agnostic markdown documentation for a component. |

**Workflow — Check design parity:**
1. Read the component source code
2. Structure the code data into the `codeSpec` parameter (spacing, visual, typography, tokens, etc.)
3. Call `figma_check_design_parity` with `nodeId` and `codeSpec`
4. Review the parity score and fix items

---

## 10. Comments

| Tool | What It Does |
|------|-------------|
| `figma_get_comments` | Get comment threads (author, message, timestamps, pinned nodes). |
| `figma_post_comment` | Post a comment, optionally pinned to a node. Supports replies. |
| `figma_delete_comment` | Delete a comment by ID. |

---

## 11. Execute (Escape Hatch)

| Tool | What It Does |
|------|-------------|
| `figma_execute` | Run arbitrary JavaScript in Figma's plugin context with full `figma` API access. Timeout: 5s default, 30s max. |

**Use for:** Complex operations not covered by other tools. Can modify the document.

**Example:**
```js
const rect = figma.createRectangle();
rect.resize(100, 100);
return { id: rect.id };
```

**Warning:** Check `resultAnalysis.warning` for silent failures. For instances, always use `figma_set_instance_properties` instead.
