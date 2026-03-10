# Layout Component Reuse Rules

> Always reuse the existing Sidebar and TopNavbar components when building pages or layouts. Never recreate them from scratch.

## Layout Components

| Component | Path | Import |
|-----------|------|--------|
| Sidebar | `src/design-system/layout/Sidebar/Sidebar.tsx` | `import { Sidebar } from '@/design-system'` |
| TopNavbar | `src/design-system/layout/TopNavbar/TopNavbar.tsx` | `import { TopNavbar } from '@/design-system'` |

## Rules

1. **Always import from the design system** — never build a custom sidebar or top navbar
2. **Reference `src/pages/ComponentShowcase.tsx`** for working configuration examples (sidebar sections, topnavbar slots)
3. **Sidebar** supports sections with items/sub-items, 3 themes (`purple`, `secondary`, `space-cadet`), collapsible state, and custom bottom content
4. **TopNavbar** has 3 content slots (`leftContent`, `centerContent`, `rightContent`), 3 states (`default`, `create-clicked`, `on-going-call`), and a gradient accent bar

## Quick Usage

```tsx
import { Sidebar, TopNavbar } from '@/design-system';
import type { SidebarSection } from '@/design-system';

// Sidebar with sections
const sections: SidebarSection[] = [
  {
    title: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'om-dashboard' },
      { id: 'team', label: 'Team', icon: 'om-team-members' },
    ],
  },
];

<Sidebar sections={sections} activeTab="dashboard" theme="purple" />

// TopNavbar with slots
<TopNavbar
  leftContent={<Logo />}
  centerContent={<SearchBar />}
  rightContent={<ActionButtons />}
/>
```
