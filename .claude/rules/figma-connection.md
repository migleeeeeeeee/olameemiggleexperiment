# Figma MCP Connection Rules

> Critical rules for both Figma MCP servers used in this project.

## Two MCP Servers

This project uses **two** Figma MCP servers simultaneously:

1. **Official Figma MCP** (`mcp__Figma__*`) — Figma's own server
2. **Figma Console MCP** (`mcp__figma-console__*`) — Third-party Desktop Bridge plugin

## Default Figma File

```
URL:  https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System
Key:  QL8Ydz4G4HMYNYpXESpA9u
Node: ?node-id=0-1&m=dev
```

## Connection Rules

### Always pass `fileUrl` explicitly
CDP connections can timeout. Always pass `fileUrl` as a fallback parameter to figma-console MCP tools:
```
fileUrl: "https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System"
```

### Re-search components at the start of each session
Node IDs are session-specific and go stale between sessions. Always call `figma_search_components` fresh at the start of a new session before using nodeIds.

### Never edit text on component instances directly
For Figma component instances, NEVER use `figma_set_text` — use `figma_set_instance_properties` instead. Direct text editing on instances **fails silently**.

### Always pass BOTH `componentKey` AND `nodeId` when instantiating
Most local/unpublished components require `nodeId`. The tool falls back to `nodeId` if `componentKey` doesn't resolve.

### Official Figma MCP — Selection-based prompting
Selection-based prompting (e.g., `get_design_context` on current selection) requires the **desktop server** — it does not work with the remote server.

### Official Figma MCP — `clientLanguages` and `clientFrameworks`
When calling official Figma tools, pass:
```
clientLanguages: "typescript,html,css"
clientFrameworks: "react"
```
This helps the server generate correctly-targeted output.
