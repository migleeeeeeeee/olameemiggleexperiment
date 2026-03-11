import { useState } from 'react';
import {
  TopNavbar,
  Sidebar,
  SearchBar,
  Button,
  IconButton,
  Icon,
  Text,
  Tag,
  SingleSelectDropdown,
} from '@/design-system';
import type { SidebarSection } from '@/design-system';

/* ─── Olamee gradient logo ──────────────────────────────────── */

function OlameeLogo() {
  return (
    <svg width="117" height="50" viewBox="0 0 117 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5758 40.0782C37.2717 41.0522 36.8676 41.9834 36.3636 42.8715C35.0926 45.0838 33.3318 46.8318 31.0811 48.1155C28.8304 49.3718 26.3149 50 23.5346 50C20.7279 50 18.1992 49.3718 15.9485 48.1155C14.3566 47.2075 13.0032 46.0605 11.8882 44.6744L15.0219 42.3771C15.8358 43.4002 16.8199 44.2479 17.9741 44.92C19.6423 45.8759 21.4958 46.3538 23.5346 46.3538C25.5735 46.3538 27.4006 45.8759 29.0158 44.92C30.6574 43.964 31.9416 42.653 32.8684 40.987C33.2232 40.3566 33.5119 39.6998 33.7347 39.0166L37.5758 40.0782Z" fill="url(#si_g0)"/>
      <path d="M25.2901 31.0081C25.2901 31.7027 25.4585 32.2441 25.7952 32.6323C26.1517 33 26.6469 33.1839 27.2807 33.1839C27.5184 33.1839 27.756 33.1532 27.9937 33.0919C28.2512 33.0306 28.4493 32.9591 28.588 32.8774L28.7959 36.5855C28.0234 36.851 27.2213 36.9838 26.3894 36.9838C24.587 36.9838 23.1807 36.4935 22.1706 35.5129C21.1604 34.5118 20.6554 33.1021 20.6554 31.2839V14H25.2901V31.0081Z" fill="url(#si_g1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.79414 16.8639C10.4777 16.8639 11.983 17.2316 13.31 17.9671C14.6371 18.6822 15.6769 19.6832 16.4296 20.9703C17.1822 22.2574 17.5586 23.7182 17.5586 25.3526C17.5586 26.987 17.1822 28.4478 16.4296 29.7348C15.6769 31.0219 14.6371 32.0332 13.31 32.7687C11.983 33.4837 10.4777 33.8413 8.79414 33.8413C7.11058 33.8413 5.59535 33.4837 4.24851 32.7687C2.92147 32.0332 1.8816 31.0219 1.12895 29.7348C0.376307 28.4478 6.1839e-06 26.987 0 25.3526C0 23.7182 0.3763 22.2574 1.12895 20.9703C1.8816 19.6832 2.92147 18.6822 4.24851 17.9671C5.59535 17.2316 7.11058 16.8639 8.79414 16.8639ZM8.79414 20.7865C7.60575 20.7865 6.62533 21.2053 5.85288 22.0429C5.08042 22.8601 4.69419 23.9634 4.69419 25.3526C4.6942 26.7418 5.08042 27.8553 5.85288 28.6929C6.62533 29.5101 7.60576 29.9187 8.79414 29.9187C9.98253 29.9187 10.9531 29.5101 11.7058 28.6929C12.4782 27.8553 12.8644 26.7418 12.8644 25.3526C12.8644 23.9634 12.4782 22.8601 11.7058 22.0429C10.9531 21.2052 9.98253 20.7865 8.79414 20.7865Z" fill="url(#si_g2)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5865 16.8639C39.6266 16.8639 41.221 17.5278 42.3698 18.8558V17.109H47.0045V33.5961H42.5778V31.6961C41.429 33.1262 39.7652 33.8413 37.5865 33.8413C36.0812 33.8413 34.7145 33.494 33.4865 32.7993C32.2783 32.1047 31.3276 31.1138 30.6343 29.8267C29.9411 28.5397 29.5946 27.0483 29.5946 25.3526C29.5946 23.6569 29.9411 22.1655 30.6343 20.8784C31.3276 19.5913 32.2783 18.6004 33.4865 17.9058C34.7145 17.2112 36.0812 16.8639 37.5865 16.8639ZM38.3887 20.7865C37.2003 20.7865 36.2198 21.2052 35.4474 22.0429C34.6749 22.8601 34.2887 23.9634 34.2887 25.3526C34.2887 26.7418 34.6749 27.8553 35.4474 28.6929C36.2198 29.5101 37.2003 29.9187 38.3887 29.9187C39.5573 29.9186 40.5278 29.5101 41.3002 28.6929C42.0727 27.8553 42.4589 26.7418 42.4589 25.3526C42.4589 23.9634 42.0727 22.8601 41.3002 22.0429C40.5278 21.2053 39.5573 20.7865 38.3887 20.7865Z" fill="url(#si_g3)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M89.9994 16.8608C91.5245 16.8608 92.911 17.1979 94.1588 17.872C95.4066 18.5258 96.3969 19.4861 97.1298 20.7527C97.8824 21.999 98.2587 23.4802 98.2587 25.1963L86.4342 27.5559C86.771 28.3731 87.2958 28.986 88.0088 29.3946C88.7416 29.8032 89.633 30.0076 90.6827 30.0076C91.5146 30.0076 92.2475 29.8849 92.8813 29.6398C93.5349 29.3742 94.139 28.9656 94.6936 28.414L97.1595 31.1721C95.6542 32.9495 93.4557 33.8382 90.5639 33.8382C88.7615 33.8382 87.1671 33.4807 85.7806 32.7656C84.3942 32.0301 83.3245 31.0189 82.5719 29.7318C81.8192 28.4447 81.4429 26.9839 81.4429 25.3495C81.4429 23.7356 81.8094 22.285 82.5422 20.9979C83.2949 19.6904 84.3149 18.6791 85.6023 17.964C86.9096 17.2286 88.3753 16.8608 89.9994 16.8608ZM89.9994 20.4769C88.8308 20.4769 87.8801 20.8651 87.1472 21.6414C86.4144 22.4177 86.0282 23.4903 85.9886 24.8592L93.7726 23.2963C93.5547 22.4382 93.109 21.7538 92.4356 21.243C91.7622 20.7323 90.9501 20.4769 89.9994 20.4769Z" fill="url(#si_g4)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M108.741 16.8608C110.266 16.8608 111.652 17.1979 112.9 17.872C114.148 18.5258 115.138 19.4861 115.871 20.7527C116.624 21.999 117 23.4802 117 25.1963L105.175 27.5559C105.512 28.3731 106.037 28.986 106.75 29.3946C107.483 29.8032 108.374 30.0076 109.424 30.0076C110.256 30.0076 110.989 29.8849 111.623 29.6398C112.276 29.3742 112.88 28.9656 113.435 28.414L115.901 31.1721C114.395 32.9495 112.197 33.8382 109.305 33.8382C107.503 33.8382 105.908 33.4807 104.522 32.7656C103.135 32.0301 102.066 31.0189 101.313 29.7318C100.56 28.4447 100.184 26.9839 100.184 25.3495C100.184 23.7356 100.551 22.285 101.283 20.9979C102.036 19.6904 103.056 18.6791 104.344 17.964C105.651 17.2286 107.117 16.8608 108.741 16.8608ZM108.741 20.4769C107.572 20.4769 106.621 20.8651 105.888 21.6414C105.156 22.4177 104.769 23.4903 104.73 24.8592L112.514 23.2963C112.296 22.4382 111.85 21.7538 111.177 21.243C110.503 20.7323 109.691 20.4769 108.741 20.4769Z" fill="url(#si_g5)"/>
      <path d="M71.7652 16.8608C73.7657 16.8608 75.3503 17.4737 76.5189 18.6995C77.7073 19.9048 78.3014 21.7231 78.3015 24.1543V33.593H73.6667V24.8898C73.6667 23.5823 73.3993 22.6119 72.8645 21.9786C72.3496 21.3248 71.6068 20.9979 70.6363 20.9979C69.5469 20.9979 68.6853 21.3656 68.0515 22.1011C67.4177 22.8162 67.1008 23.8888 67.1008 25.3189V33.593H62.466V24.8898C62.466 22.2952 61.4559 20.9979 59.4356 20.9979C58.366 20.9979 57.5144 21.3656 56.8805 22.1011C56.2467 22.8162 55.9298 23.8888 55.9298 25.3189V33.593H51.2951V17.1059H55.7219V19.006C56.3161 18.3113 57.039 17.7802 57.8907 17.4124C58.7622 17.0447 59.7129 16.8608 60.7428 16.8608C61.8718 16.8608 62.8919 17.0958 63.803 17.5657C64.7141 18.0151 65.447 18.6791 66.0015 19.5576C66.6552 18.6995 67.4771 18.0355 68.4675 17.5657C69.4776 17.0958 70.5768 16.8608 71.7652 16.8608Z" fill="url(#si_g6)"/>
      <defs>
        {[0,1,2,3,4,5,6].map(i => (
          <linearGradient key={i} id={`si_g${i}`} x1="-3.71523" y1="51.5829" x2="109.146" y2="-12.1177" gradientUnits="userSpaceOnUse">
            <stop offset="0.159" stopColor="#7A5FFF"/>
            <stop offset="0.774" stopColor="#5ED4B2"/>
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}

/* ─── Sidebar configuration ──────────────────────────────────── */

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

/* ─── Settings Menu Configuration ────────────────────────────── */

interface SettingsMenuItem {
  icon: string;
  label: string;
  expandable?: boolean;
}

interface SettingsMenuSection {
  title: string;
  items: SettingsMenuItem[];
}

const SETTINGS_MENU_SECTIONS: SettingsMenuSection[] = [
  {
    title: 'Account & Access',
    items: [
      { icon: 'fa-regular fa-sliders', label: 'General' },
      { icon: 'fa-regular fa-user', label: 'User Access' },
      { icon: 'fa-regular fa-credit-card', label: 'Plans & Pricing' },
    ],
  },
  {
    title: 'Hiring Setup',
    items: [
      { icon: 'fa-regular fa-id-badge', label: 'Custom Statuses' },
      { icon: 'fa-regular fa-video', label: 'Interview' },
      { icon: 'fa-regular fa-clipboard-check', label: 'Assessments', expandable: true },
      { icon: 'fa-regular fa-envelope', label: 'Email Templates' },
      { icon: 'fa-regular fa-file', label: 'Documents', expandable: true },
    ],
  },
  {
    title: 'Communications & Integrations',
    items: [
      { icon: 'fa-regular fa-phone', label: 'Phone' },
      { icon: 'fa-regular fa-gear', label: 'Integrations' },
    ],
  },
  {
    title: 'Administration',
    items: [
      { icon: 'fa-regular fa-chart-mixed', label: 'Performance & Feedback', expandable: true },
      { icon: 'fa-regular fa-briefcase', label: 'Admin Settings' },
      { icon: 'fa-regular fa-arrow-up-from-bracket', label: 'Export Data' },
    ],
  },
];

/* ─── Integration Data ───────────────────────────────────────── */

interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  enabled: boolean;
}

const INTEGRATIONS: Integration[] = [
  {
    id: 'hubstaff',
    name: 'Hubstaff',
    category: 'Time Tracking',
    description: 'Effortlessly track time and manage remote teams with Hubstaff.',
    icon: '/images/integrations/hubstaff.png',
    enabled: true,
  },
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'Communication',
    description: "Connect, collaborate, and communicate seamlessly with Zoom's video conferencing and webinar platform.",
    icon: '/images/integrations/zoom.png',
    enabled: true,
  },
  {
    id: 'wise',
    name: 'Wise',
    category: 'Payments',
    description: "Easily transfer money internationally with TransferWise's fast and transparent currency exchange platform.",
    icon: '/images/integrations/wise.png',
    enabled: true,
  },
  {
    id: 'paypal',
    name: 'Paypal',
    category: 'Payments',
    description: "Safely send and receive money, pay bills, and shop online with PayPal's secure digital payment platform.",
    icon: '/images/integrations/paypal.png',
    enabled: true,
  },
  {
    id: 'quickbooks',
    name: 'Quickbooks',
    category: 'Accounting',
    description: "Simplify your accounting tasks and manage finances effortlessly with QuickBooks' powerful small business accounting software.",
    icon: '/images/integrations/quickbooks.png',
    enabled: true,
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    category: 'Scheduling',
    description: "Organize your schedule and stay on top of events with Google Calendar's intuitive and customizable calendar app.",
    icon: '/images/integrations/google-calendar.png',
    enabled: true,
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    category: 'Team Collaboration',
    description: "Collaborate seamlessly with colleagues through chat, video calls, and file sharing using Microsoft Teams' unified communication platform.",
    icon: '/images/integrations/microsoft-teams.png',
    enabled: true,
  },
  {
    id: 'trello',
    name: 'Trello',
    category: 'Project Management',
    description: "Organize tasks, projects, and collaborations visually with Trello's flexible project management platform.",
    icon: '/images/integrations/trello.png',
    enabled: true,
  },
];

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'time-tracking', label: 'Time Tracking' },
  { value: 'communication', label: 'Communication' },
  { value: 'payments', label: 'Payments' },
  { value: 'accounting', label: 'Accounting' },
  { value: 'scheduling', label: 'Scheduling' },
  { value: 'team-collaboration', label: 'Team Collaboration' },
  { value: 'project-management', label: 'Project Management' },
];

/* ─── Settings Menu Component ────────────────────────────────── */

function SettingsMenu({ activeItem }: { activeItem: string }) {
  return (
    <div className="bg-[#FDFDFE] border border-[#D7D8DC] rounded-[12px] p-[16px] flex flex-col gap-[12px] min-w-[256px] w-[360px] shrink-0 overflow-clip">
      {SETTINGS_MENU_SECTIONS.map((section, sectionIdx) => (
        <div key={section.title} className="flex flex-col gap-[12px]">
          {sectionIdx > 0 && (
            <div className="w-full h-0 border-t border-[#EFF0F3]" />
          )}
          <Text
            variant="body-base"
            weight="medium"
            className="text-[#6A6D76] tracking-[-0.175px]"
          >
            {section.title}
          </Text>
          {section.items.map((item) => {
            const isActive = item.label === activeItem;
            return (
              <button
                key={item.label}
                className={`flex items-center gap-[8px] h-[36px] px-[12px] rounded-[10px] w-full min-w-[60px] transition-colors ${
                  isActive
                    ? 'bg-[#F0EDFD]'
                    : 'hover:bg-[#F5F5F7]'
                }`}
              >
                <span className="flex items-center justify-center p-[2px] shrink-0 size-[20px]">
                  <i
                    className={`${item.icon} text-[16px] ${
                      isActive ? 'text-[#6F54EB]' : 'text-[#30343F]'
                    }`}
                  />
                </span>
                <Text
                  variant="body-lg"
                  weight="medium"
                  className={`flex-1 text-left tracking-[-0.384px] ${
                    isActive ? 'text-[#6F54EB]' : 'text-[#30343F]'
                  }`}
                >
                  {item.label}
                </Text>
                {item.expandable && (
                  <span className="flex items-center justify-center p-[2px] shrink-0 size-[20px]">
                    <i className="fa-solid fa-chevron-down text-[10px] text-[#8D8F97]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ─── Integration Card Component ─────────────────────────────── */

function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <div className="bg-[#FDFDFE] border border-[#D7D8DC] rounded-[12px] p-[16px] flex flex-col gap-[16px] flex-1 min-w-0">
      {/* Header: Icon + Name/Category + Enabled Tag */}
      <div className="flex items-start justify-between w-full">
        <div className="flex gap-[13px] items-start">
          <img
            src={integration.icon}
            alt={integration.name}
            className="w-[40px] h-[40px] rounded-[8px] shrink-0 object-contain"
          />
          <div className="flex flex-col gap-[2px]">
            <Text variant="h5" weight="bold" className="text-[#30343F]">
              {integration.name}
            </Text>
            <Text variant="body-xs" weight="bold" className="text-[#8D8F97]">
              {integration.category}
            </Text>
          </div>
        </div>
        {integration.enabled && (
          <Tag color="success">
            Enabled
          </Tag>
        )}
      </div>

      {/* Description */}
      <Text variant="body-xs" className="text-[#30343F] leading-[14px]">
        {integration.description}
      </Text>

      {/* Settings Button */}
      <div className="flex justify-end">
        <Button
          hierarchy="primary"
          colorScheme="violet"
          size="xsmall"
        >
          Settings
        </Button>
      </div>
    </div>
  );
}

/* ─── Create Dropdown Icons (from Figma "pull down buttons menu") ────── */

const DropdownBriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M28 7.6H24V4.6C24 2.946 22.656 1.6 21 1.6H11C9.344 1.6 8 2.946 8 4.6V7.6H4C1.791 7.6 0 9.394 0 11.6V27.6C0 29.809 1.791 31.6 4 31.6H28C30.209 31.6 32 29.809 32 27.6V11.6C32 9.394 30.206 7.6 28 7.6ZM10 4.6C10 4.048 10.45 3.6 11 3.6H21C21.55 3.6 22 4.048 22 4.6V7.6H10V4.6ZM30 27.6C30 28.703 29.103 29.6 28 29.6H4C2.898 29.6 2 28.703 2 27.6V19.6H11V23.6C11 24.153 11.447 24.6 12 24.6H20C20.553 24.6 21 24.153 21 23.6V19.6H30V27.6ZM13 22.6V19.6H19V22.6H13ZM30 17.6H2V11.6C2 10.498 2.898 9.6 4 9.6H28C29.103 9.6 30 10.498 30 11.6V17.6Z" fill="#30343F"/>
  </svg>
)
const DropdownTeamIcon = () => (
  <svg width="16" height="16" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M21.714 9.016V8.014C21.714 7.3 21.543 6.624 21.236 6.011H21.143C19.679 6.011 18.379 5.41 17.543 4.477C16.564 5.992 14.7 7.012 12.571 7.012H10.4C10.329 7.338 10.286 7.67 10.286 8.014V9.016C10.286 11.783 12.843 14.025 16 14.025C19.157 14.025 21.714 11.783 21.714 9.016ZM16 0C21.05 0 25.143 3.588 25.143 8.014V9.016C25.143 13.442 21.05 17.03 16 17.03C10.95 17.03 6.857 13.442 6.857 9.016V8.014C6.857 3.588 10.95 0 16 0ZM18.2 26.196L21.329 20.711C21.543 20.336 22 20.117 22.464 20.186C27.886 21.012 32 25.151 32 30.134C32 31.199 31.014 32.056 29.807 32.056H2.193C0.986 32.056 0 31.192 0 30.134C0 25.151 4.114 21.012 9.536 20.186C10.007 20.117 10.457 20.336 10.671 20.711L13.8 26.196L14.936 22.49L13.607 20.549C13.15 19.879 13.7 19.034 14.586 19.034H16H17.407C18.293 19.034 18.843 19.885 18.386 20.549L17.057 22.49L18.193 26.196H18.2ZM8.464 23.56C5.879 24.487 3.957 26.559 3.521 29.051H11.593L8.464 23.56ZM20.407 29.051H28.479C28.043 26.559 26.121 24.487 23.536 23.56L20.407 29.051Z" fill="#30343F"/>
  </svg>
)
const DropdownHandshakeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M25.305 9.576C24.407 8.568 22.232 6.494 19.17 6.021C18.045 5.853 16.901 6.201 16 6.932C15.1 6.245 13.955 5.892 12.825 6.064C8.84 6.68 6.335 10.031 6.23 10.176C5.838 10.711 5.953 11.462 6.486 11.855C6.7 12.013 6.95 12.088 7.196 12.088C7.566 12.088 7.93 11.919 8.165 11.598C8.185 11.57 10.174 8.903 13.19 8.437C13.563 8.389 13.939 8.47 14.268 8.661L11.36 11.631C10.74 12.246 10.355 13.026 10.355 13.946C10.355 14.821 10.696 15.643 11.313 16.261C11.975 16.881 12.795 17.176 13.67 17.176C14.545 17.176 15.367 16.836 15.986 16.217L16.553 15.649L22.763 20.694C22.879 20.788 22.896 20.957 22.788 21.093L21.404 22.88C21.311 22.993 21.141 23.01 21.046 22.933L19.935 21.999L18.625 23.386C18.508 23.53 18.358 23.565 18.28 23.572C18.197 23.58 18.052 23.579 17.939 23.486L16.319 22.103L15.535 22.836L15.394 22.983C15.102 23.341 14.69 23.566 14.23 23.613C13.757 23.654 13.318 23.526 13.005 23.274L8.515 19.211H4.8V9.636H0V22.416L3.2 22.418C3.787 22.418 4.279 22.083 4.557 21.611H7.589L11.442 25.094C12.185 25.701 13.095 26.021 14.04 26.021C14.184 26.021 14.329 26.015 14.473 25.999C15.154 25.929 15.793 25.696 16.346 25.324L16.392 25.365C16.993 25.859 17.756 26.085 18.526 26.004C19.186 25.935 19.79 25.652 20.222 25.236C21.276 25.646 22.526 25.354 23.284 24.413L24.669 22.625C25.592 21.484 25.417 19.801 24.276 18.875L18.261 13.987L18.681 13.568C19.149 13.099 19.149 12.339 18.681 11.871C18.212 11.402 17.453 11.402 16.984 11.871L14.29 14.561C13.96 14.896 13.385 14.896 13.055 14.561C12.889 14.397 12.799 14.178 12.799 13.946C12.799 13.711 12.889 13.493 13.063 13.319L17.358 8.937C17.749 8.545 18.285 8.35 18.805 8.436C21.793 8.897 23.815 11.572 23.835 11.6C23.99 11.808 24.199 11.948 24.427 12.019H27.2V20.774C27.2 21.658 27.917 22.377 28.755 22.377L32 22.421V9.626L25.305 9.576ZM2.4 20.821C1.963 20.821 1.6 20.459 1.6 20.022C1.6 19.578 1.963 19.222 2.4 19.222C2.838 19.222 3.2 19.581 3.2 20.026C3.2 20.461 2.838 20.821 2.4 20.821ZM29.6 20.821C29.163 20.821 28.8 20.459 28.8 20.022C28.8 19.578 29.163 19.222 29.6 19.222C30.038 19.222 30.4 19.578 30.4 20.022C30.4 20.461 30.04 20.821 29.6 20.821Z" fill="#30343F"/>
  </svg>
)
const DropdownPositionIcon = () => (
  <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M24 3C24.55 3 25 3.45 25 4V28C25 28.55 24.55 29 24 29H6C5.45 29 5 28.55 5 28V4C5 3.45 5.45 3 6 3H24ZM6 0C3.794 0 2 1.794 2 4V28C2 30.206 3.794 32 6 32H24C26.206 32 28 30.206 28 28V4C28 1.794 26.206 0 24 0H6ZM15 16C16.061 16 17.078 15.579 17.828 14.828C18.579 14.078 19 13.061 19 12C19 10.939 18.579 9.922 17.828 9.172C17.078 8.421 16.061 8 15 8C13.939 8 12.922 8.421 12.172 9.172C11.421 9.922 11 10.939 11 12C11 13.061 11.421 14.078 12.172 14.828C12.922 15.579 13.939 16 15 16ZM13 18C10.238 18 8 20.238 8 23C8 23.55 8.45 24 9 24H21C21.55 24 22 23.55 22 23C22 20.238 19.763 18 17 18H13ZM32 5C32 4.45 31.55 4 31 4C30.45 4 30 4.45 30 5V9C30 9.55 30.45 10 31 10C31.55 10 32 9.55 32 9V5ZM31 12C30.45 12 30 12.45 30 13V17C30 17.55 30.45 18 31 18C31.55 18 32 17.55 32 17V13C32 12.45 31.55 12 31 12ZM32 21C32 20.45 31.55 20 31 20C30.45 20 30 20.45 30 21V25C30 25.55 30.45 26 31 26C31.55 26 32 25.55 32 25V21Z" fill="#30343F"/>
  </svg>
)

const createMenuItems = [
  { icon: DropdownBriefcaseIcon, label: 'Create new Job' },
  { icon: DropdownTeamIcon, label: 'Create new Team Member' },
  { icon: DropdownHandshakeIcon, label: 'Create new Client' },
  { icon: DropdownPositionIcon, label: 'Create new Position' },
];

/* ─── Main Page Component ────────────────────────────────────── */

export default function SettingsIntegrations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [createOpen, setCreateOpen] = useState(false);

  const filteredIntegrations = INTEGRATIONS.filter((integration) => {
    const matchesSearch =
      !searchQuery ||
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === 'all' ||
      integration.category.toLowerCase().replace(/\s+/g, '-') === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Group integrations into rows of 2
  const integrationRows: Integration[][] = [];
  for (let i = 0; i < filteredIntegrations.length; i += 2) {
    integrationRows.push(filteredIntegrations.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col h-screen bg-[#FDFDFE]">
      {/* Top Navbar */}
      <TopNavbar
        leftContent={<OlameeLogo />}
        centerContent={<SearchBar placeholder="Search" />}
        rightContent={
          <div className="flex items-center gap-2">
            <div className="relative">
              <Button
                hierarchy="secondary"
                size="small"
                colorScheme="violet"
                leadIcon={<Icon name="plus" size="xs" />}
                onClick={() => setCreateOpen(prev => !prev)}
              >
                Create
              </Button>
              {createOpen && (
                <div
                  className="absolute top-[calc(100%+8px)] right-0 z-50 bg-[#FDFDFE] rounded-[12px] shadow-elevation-2 py-2 px-4 w-[266px]"
                  style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
                >
                  {createMenuItems.map((item, i) => (
                    <button
                      key={item.label}
                      className={`flex items-center gap-2 w-full h-[36px] px-3 rounded-[10px] text-left transition-colors ${
                        i === 0 ? 'bg-[#EFF0F3]' : 'hover:bg-[#EFF0F3]'
                      }`}
                    >
                      <item.icon />
                      <span className="text-[16px] font-body font-medium text-[#30343F]">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <IconButton
              hierarchy="tertiary"
              size="lg"
              colorScheme="violet"
              aria-label="Notifications"
              icon={<Icon name="bell" size="lg" faStyle="light" style={{ color: '#30343F' }} />}
            />
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-[36px] rounded-full bg-[#F6F4FF] border border-[#7C81A0]">
                <Text as="span" variant="body-sm" weight="bold" className="text-primary-500">E</Text>
              </div>
              <span className="text-[14px] font-bold leading-[18px] text-[#30343F]" style={{ fontFamily: 'Inter, sans-serif' }}>Ola, Evan!</span>
            </div>
          </div>
        }
      />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar sections={SIDEBAR_SECTIONS} activeTab="Settings" theme="purple" collapsed />

        {/* Page content */}
        <div className="flex-1 overflow-auto p-[32px] bg-gunmetal-50">
          <div className="flex flex-col gap-[32px]">
            {/* Page Header */}
            <div className="border-b border-[#EFF0F3] pb-[15px]">
              <Text variant="h3" weight="bold" className="text-[#30343F]">
                Settings
              </Text>
            </div>

            {/* Content: Settings Menu + Integrations */}
            <div className="flex gap-[25px] items-start">
              {/* Settings Menu */}
              <SettingsMenu activeItem="Integrations" />

              {/* Integrations List */}
              <div className="flex-1 flex flex-col gap-[12px] min-w-0">
                {/* Integrations Header */}
                <Text variant="h4" weight="semibold" className="text-[#30343F]">
                  Integrations
                </Text>

                {/* Integrations Container */}
                <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[28px] p-[24px] flex flex-col gap-[16px] shadow-elevation-1">
                  {/* Search/Filter Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                      <SearchBar
                        placeholder="Search"
                        className="w-[381px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClear={() => setSearchQuery('')}
                      />
                      <SingleSelectDropdown
                        options={CATEGORY_OPTIONS}
                        value={categoryFilter}
                        onChange={(val) => setCategoryFilter(val)}
                        size="extraSmall"
                        placeholder="All"
                        className="w-[216px]"
                      />
                    </div>
                    <Button
                      hierarchy="primary"
                      colorScheme="violet"
                      size="small"
                    >
                      <i className="fa-regular fa-plus text-[12px]" /> Add Integration
                    </Button>
                  </div>

                  {/* Integration Cards Grid */}
                  {integrationRows.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex gap-[16px] items-start">
                      {row.map((integration) => (
                        <IntegrationCard
                          key={integration.id}
                          integration={integration}
                        />
                      ))}
                      {/* Fill empty space if row has only 1 item */}
                      {row.length === 1 && <div className="flex-1" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
