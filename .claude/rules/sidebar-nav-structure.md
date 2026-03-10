# Sidebar Navigation Structure

> The sidebar section structure is canonical and must never be modified when building pages.

## Canonical Structure (source: `src/pages/ComponentShowcase.tsx` → `demoSidebarSections`)

| Section | Items |
|---------|-------|
| **Find** | Dashboard, Applicants (expandable), Jobs (expandable), Interviews, Assessments |
| **Manage** | Team Members (expandable), Attendance, Time-Off, Payments (expandable) |
| **Admin** | Reports, Settings, Workflow Automation |

## Rules

1. **Never change item positions** — copy the sections array exactly from `demoSidebarSections`; do not reorder, rename, add, or remove items
2. **Never add a page-specific item** to make it "active" (e.g. adding a Payroll item to Manage) — only mark what already exists
3. **Only allowed per-page change:** set `activeTab="Label"` on the `<Sidebar>` prop matching the current page's section
4. **The active item renders at the top** of the sidebar (before sections) — this is the component's designed behavior; do not fight it or work around it

## Usage Pattern

```tsx
// Copy demoSidebarSections exactly — only the activeTab prop changes per page
const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    title: 'Find',
    items: [
      { icon: 'om-dashboard', label: 'Dashboard' },
      {
        icon: 'om-applicants',
        label: 'Applicants',
        expandable: true,
        subItems: [
          { label: 'All Applicants' },
          { label: 'Talent Pool' },
          { label: 'Source Hub' },
        ],
      },
      { icon: 'briefcase', label: 'Jobs', expandable: true },
      { icon: 'om-interviews', label: 'Interviews' },
      { icon: 'om-assessments', label: 'Assessments' },
    ],
  },
  {
    title: 'Manage',
    items: [
      { icon: 'om-team', label: 'Team Members', expandable: true },
      { icon: 'om-attendance', label: 'Attendance' },
      { icon: 'calendar', label: 'Time-Off' },
      { icon: 'om-payments', label: 'Payments', expandable: true },
    ],
  },
  {
    title: 'Admin',
    items: [
      { icon: 'om-reports', label: 'Reports' },
      { icon: 'om-settings', label: 'Settings' },
      { icon: 'om-workflows', label: 'Workflow Automation' },
    ],
  },
];

// Only activeTab changes — everything else is identical across all pages
<Sidebar sections={SIDEBAR_SECTIONS} activeTab="Attendance" theme="purple" />
```
