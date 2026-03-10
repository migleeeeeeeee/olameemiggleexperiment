/**
 * Sidebar — Collapsible navigation sidebar layout component
 *
 * Figma: "Side Bar" component set (node 2585:20496)
 * Link: https://www.figma.com/design/QL8Ydz4G4HMYNYpXESpA9u/OLAMEE-Design-System?node-id=2585-20496
 * Variants: Tab × Theme × Collapse × Sub
 *
 * LAYOUT SPECIFICATION (EXACT FROM FIGMA):
 * ─────────────────────────────────────────
 * Collapsed state:
 *   - Width: 88px
 *   - Icons only with tooltips
 *   - Padding: px-3 pt-8 pb-8 gap-3
 *   - Item size: 44px × 44px
 *   - Border radius: rounded-[10px]
 *
 * Expanded state:
 *   - Width: 288px
 *   - Icons + labels + sub-navigation
 *   - Content padding: px-4 pt-8 pb-8 gap-5
 *   - Section header: Karla Bold 14/18, text-gunmetal, px-4
 *   - Active item: bg-primary/secondary/space-cadet, text-primary-50/gunmetal/lavender-50
 *     * Height: 44px, padding: px-4 py-3 (16px 12px), rounded-[12px]
 *   - Inactive items: height: 44px, padding: px-4 py-2 (16px 8px), gap-4, hover:bg-gunmetal-100
 *   - Expandable items: chevron-down icon on right
 *   - Sub-items: pl-10 (40px left margin), py-1.5, rounded-[8px], text-[13px] leading-[18px]
 *   - Background: bg-gunmetal-50 (#F5F6F8)
 *
 * THEME COLORS:
 * ─────────────
 * Purple:      bg-primary (#7A5FFF), text-primary-50 (white)
 * Secondary:   bg-secondary (#5ED4B2), text-gunmetal (#30343F)
 * Space Cadet: bg-space-cadet (#283044), text-lavender-50 (light)
 *
 * SECTIONS (from Figma):
 * ──────────────────────
 * Find:    Dashboard, Applicants, Jobs, Interviews, Assessments
 * Manage:  Team Members, Attendance, Time-Off, Payments
 * Admin:   Reports, Settings, Workflow Automation
 */

import {
  forwardRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import { Icon } from '../../primitives/Icon';
import type { FaStyle } from '../../primitives/Icon';
import { Tooltip } from '../../primitives/Tooltip';
import type { IconName } from '../../primitives/Icon/icons';

/* ─── Types ──────────────────────────────────────────────────────── */

export interface SidebarSubItem {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export interface SidebarItem {
  icon: IconName;
  label: string;
  href?: string;
  active?: boolean;
  badge?: number;
  expandable?: boolean;
  expanded?: boolean;
  subItems?: SidebarSubItem[];
  onClick?: () => void;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export type SidebarTheme = 'purple' | 'secondary' | 'space-cadet';

export interface SidebarProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** Navigation sections with titled groups */
  sections: SidebarSection[];
  /** Currently active tab label (matches item.label for active highlight) */
  activeTab?: string;
  /** Controlled collapsed state */
  collapsed?: boolean;
  /** Callback when collapsed state changes */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Uncontrolled default collapsed state */
  defaultCollapsed?: boolean;
  /** Active item color theme (default: 'purple') */
  theme?: SidebarTheme;
  /** Company name (shown in logo area) */
  companyName?: string;
  /** Company avatar URL or ReactNode */
  companyAvatar?: ReactNode;
  /** Callback when company logo area is clicked */
  onCompanyClick?: () => void;
  /** Callback when a nav item is clicked */
  onItemClick?: (item: SidebarItem) => void;
  /** Content rendered at the very bottom (e.g. support link) */
  bottomContent?: ReactNode;
  /** FontAwesome style for all sidebar icons (default: 'light') */
  iconStyle?: FaStyle;
  /** Icon to show when sidebar is collapsed (suggesting expand) */
  collapseIcon?: IconName;
  /** Icon to show when sidebar is expanded (suggesting collapse) */
  expandIcon?: IconName;
}

/* ─── Theme color maps ───────────────────────────────────────────── */

const activeItemBg: Record<SidebarTheme, string> = {
  purple: 'bg-primary',
  secondary: 'bg-secondary',
  'space-cadet': 'bg-space-cadet',
};

const activeItemText: Record<SidebarTheme, string> = {
  purple: 'text-primary-50',
  secondary: 'text-gunmetal',
  'space-cadet': 'text-lavender-50',
};

/* ─── Component ──────────────────────────────────────────────────── */

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      sections,
      activeTab,
      collapsed: controlledCollapsed,
      onCollapsedChange,
      defaultCollapsed = false,
      theme = 'purple',
      companyName = 'AbroadWorks',
      companyAvatar,
      onCompanyClick,
      onItemClick,
      bottomContent,
      iconStyle = 'light',
      collapseIcon = 'om-collapse',
      expandIcon = 'om-collapse',
      className,
      ...props
    },
    ref,
  ) => {
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const collapsed = controlledCollapsed ?? internalCollapsed;

    const toggleCollapse = () => {
      const next = !collapsed;
      setInternalCollapsed(next);
      onCollapsedChange?.(next);
    };

    const allItems = sections.flatMap((s) => s.items);

    return (
      <aside
        ref={ref}
        className={cn(
          'flex flex-col h-full bg-gunmetal-50 transition-all duration-300 shrink-0 overflow-hidden',
          collapsed ? 'w-[88px]' : 'w-[288px]',
          className,
        )}
        {...props}
      >
        {/* ── Scrollable content area ── */}
        <div
          className={cn(
            'flex-1 flex flex-col overflow-y-auto',
            collapsed ? 'px-3 pt-8 pb-8 gap-3' : 'px-4 pt-8 pb-8 gap-5',
          )}
        >
          {/* ── Company logo row ── */}
          <button
            onClick={onCompanyClick}
            className={cn(
              'flex items-center shrink-0 transition-colors',
              collapsed
                ? 'justify-center'
                : 'gap-3 px-2 pr-4 justify-between',
            )}
          >
            <div className="flex items-center gap-3">
              {companyAvatar ?? (
                <div className="flex items-center justify-center size-[36px] rounded-full bg-lavender-50 border border-space-cadet-100 shrink-0">
                  <svg
                    viewBox="0 0 26 10"
                    className="w-[26px] h-[10px]"
                    fill="currentColor"
                  >
                    <text
                      x="13"
                      y="9"
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="Karla"
                      fontWeight="700"
                      fill="#30343F"
                    >
                      AW
                    </text>
                  </svg>
                </div>
              )}
              {!collapsed && (
                <span className="font-body font-bold text-[length:14px] leading-[18px] text-gunmetal truncate">
                  {companyName}
                </span>
              )}
            </div>
            {!collapsed && (
              <Icon
                name="chevron-down"
                size="xs"
                className="text-gunmetal shrink-0"
              />
            )}
          </button>

          {/* ── Active tab highlight (always first, full-width) ── */}
          {(() => {
            const activeItem = allItems.find(
              (item) => item.label === activeTab || item.active,
            );
            if (!activeItem) return null;

            const activeButton = (
              <button
                onClick={() => {
                  activeItem.onClick?.();
                  onItemClick?.(activeItem);
                }}
                style={collapsed ? { width: '46px' } : undefined}
                className={cn(
                  'flex items-center rounded-[12px] transition-colors',
                  activeItemBg[theme],
                  activeItemText[theme],
                  collapsed
                    ? 'justify-center size-[44px] shrink-0 mx-auto'
                    : 'w-full h-[44px] px-4 py-3 gap-4',
                )}
              >
                <Icon
                  name={activeItem.icon}
                  size="md"
                  faStyle={collapsed ? 'solid' : iconStyle}
                  className={cn('shrink-0', collapsed ? 'text-gunmetal-50' : 'text-lavender-50')}
                />
                {!collapsed && (
                  <span className="font-body font-bold text-[length:14px] leading-[18px] truncate">
                    {activeItem.label}
                  </span>
                )}
              </button>
            );

            return collapsed ? (
              <Tooltip content={activeItem.label} side="right">
                {activeButton}
              </Tooltip>
            ) : (
              activeButton
            );
          })()}

          {/* ── Sections ── */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              {/* Section header */}
              <div className={cn('px-4', collapsed && 'text-center px-0')}>
                <span className="font-body font-bold text-[length:14px] leading-[18px] text-gunmetal">
                  {section.title}
                </span>
              </div>

              {/* Section items */}
              <div className="flex flex-col gap-0">
                {section.items.map((item) => {
                  const isActive =
                    item.label === activeTab || item.active;

                  // Skip active item in section list — it's rendered above
                  if (isActive) return null;

                  const itemButton = (
                    <button
                      key={item.label}
                      onClick={() => {
                        item.onClick?.();
                        onItemClick?.(item);
                      }}
                      className={cn(
                        'flex items-center w-full transition-colors',
                        'text-gunmetal hover:bg-gunmetal-100',
                        collapsed
                          ? 'justify-center size-[44px] rounded-[10px]'
                          : 'h-[44px] px-4 py-3 gap-4 justify-between',
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <Icon
                          name={item.icon}
                          size="md"
                          faStyle={iconStyle}
                          className="shrink-0"
                        />
                        {!collapsed && (
                          <span className="font-body font-medium text-[length:14px] leading-[18px] truncate">
                            {item.label}
                          </span>
                        )}
                      </div>
                      {!collapsed && item.expandable && (
                        <Icon
                          name="chevron-down"
                          size="xs"
                          className="shrink-0 text-gunmetal"
                        />
                      )}
                    </button>
                  );

                  return (
                    <div key={item.label}>
                      {collapsed ? (
                        <Tooltip content={item.label} side="right">
                          {itemButton}
                        </Tooltip>
                      ) : (
                        itemButton
                      )}

                      {/* Sub-items (expanded only, when item is expanded) */}
                      {!collapsed &&
                        item.expanded &&
                        item.subItems &&
                        item.subItems.length > 0 && (
                          <div className="flex flex-col ml-10 mt-1 mb-1">
                            {item.subItems.map((sub) => (
                              <button
                                key={sub.label}
                                onClick={sub.onClick}
                                className={cn(
                                  'text-left px-3 py-1.5 rounded-[8px] font-body text-[length:13px] leading-[18px] transition-colors',
                                  sub.active
                                    ? 'text-primary-700 font-semibold'
                                    : 'text-gunmetal-400 hover:text-gunmetal-500 hover:bg-gunmetal-100',
                                )}
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom area ── */}
        <div
          className={cn(
            'shrink-0 flex flex-col gap-2',
            collapsed ? 'px-3 pb-4' : 'px-4 pb-8',
          )}
        >
          {/* Divider */}
          <div className="w-full h-px bg-gunmetal-300" />

          {/* Bottom content (e.g. support link) */}
          {bottomContent && (
            <div className={cn(collapsed ? 'hidden' : 'block')}>
              {bottomContent}
            </div>
          )}

          {/* Collapse toggle — icon aligned to the right */}
          <Tooltip
            content={collapsed ? 'Expand' : 'Collapse'}
            side="right"
          >
            <button
              onClick={toggleCollapse}
              className={cn(
                'flex items-center py-1 text-gunmetal-400 hover:text-gunmetal transition-colors',
                collapsed ? 'justify-center w-full' : 'justify-end w-full',
              )}
            >
              <Icon
                name={collapsed ? collapseIcon : expandIcon}
                size="sm"
              />
            </button>
          </Tooltip>
        </div>
      </aside>
    );
  },
);

Sidebar.displayName = 'Sidebar';
