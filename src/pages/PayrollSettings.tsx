import { useState } from 'react';
import {
  TopNavbar,
  Sidebar,
  Button,
  Text,
  Icon,
  IconButton,
  SearchBar,
  Checkbox,
  Tag,
  ContentCard,
  Input,
} from '@/design-system';
import type { SidebarSection } from '@/design-system';

/* ─── Types ──────────────────────────────────────────────────── */

interface PayrollSetting {
  id: string;
  name: string;
  count: number;
  frequency: string;
  status: 'active' | 'inactive';
  teamMembers: number;
  createdOn: string;
  createdBy: string;
  startOfWeek: string;
  weekendBehavior: string;
  payFrequency: string;
  payPeriods: PayPeriod[];
}

interface PayPeriod {
  periodStartDay: string;
  periodEndDay: string;
  payDay: string;
  payMonthOffset: string;
}

interface TeamMember {
  id: string;
  name: string;
  type: 'EOR' | 'COR';
  payrollSetting: string;
  payRate: string;
  billRate: string;
  trackedActivity: string;
  nextPay: string;
  avatarColor: string;
}

/* ─── Mock Data ──────────────────────────────────────────────── */

const PAYROLL_SETTINGS: PayrollSetting[] = [
  {
    id: 'hourly-not-held',
    name: 'Hourly not Held',
    count: 192,
    frequency: 'Custom',
    status: 'active',
    teamMembers: 325,
    createdOn: 'Jun. 29, 2025',
    createdBy: 'June Abrigo',
    startOfWeek: 'Sunday',
    weekendBehavior: 'Upcoming',
    payFrequency: 'Custom',
    payPeriods: [
      { periodStartDay: '1', periodEndDay: '15', payDay: '16', payMonthOffset: 'Next Month (1)' },
      { periodStartDay: '16', periodEndDay: 'Last Day', payDay: '1', payMonthOffset: 'Next Month (1)' },
    ],
  },
  {
    id: 'hourly-held',
    name: 'Hourly Held',
    count: 234,
    frequency: 'Bi-weekly',
    status: 'active',
    teamMembers: 180,
    createdOn: 'Jun. 15, 2025',
    createdBy: 'June Abrigo',
    startOfWeek: 'Monday',
    weekendBehavior: 'Upcoming',
    payFrequency: 'Bi-weekly',
    payPeriods: [
      { periodStartDay: '1', periodEndDay: '15', payDay: '20', payMonthOffset: 'Same Month' },
    ],
  },
  {
    id: 'salary-not-held',
    name: 'Salary not Held',
    count: 234,
    frequency: 'Bi-weekly',
    status: 'active',
    teamMembers: 150,
    createdOn: 'May. 10, 2025',
    createdBy: 'June Abrigo',
    startOfWeek: 'Monday',
    weekendBehavior: 'Upcoming',
    payFrequency: 'Bi-weekly',
    payPeriods: [
      { periodStartDay: '1', periodEndDay: '15', payDay: '20', payMonthOffset: 'Same Month' },
    ],
  },
  {
    id: 'salary-held',
    name: 'Salary Held',
    count: 234,
    frequency: 'Bi-weekly',
    status: 'active',
    teamMembers: 200,
    createdOn: 'Apr. 01, 2025',
    createdBy: 'June Abrigo',
    startOfWeek: 'Monday',
    weekendBehavior: 'Upcoming',
    payFrequency: 'Bi-weekly',
    payPeriods: [
      { periodStartDay: '1', periodEndDay: 'Last Day', payDay: '5', payMonthOffset: 'Next Month (1)' },
    ],
  },
];

const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Julie Noted', type: 'EOR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '12:34:56', nextPay: '$745.32', avatarColor: '#E8E1EF' },
  { id: '2', name: 'Justin Credible', type: 'EOR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '03:21:45', nextPay: '$582.19', avatarColor: '#D7D8DC' },
  { id: '3', name: 'Vamphyr Rite', type: 'EOR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '04:56:23', nextPay: '$399.88', avatarColor: '#F6F4FF' },
  { id: '4', name: 'Vamphyr Rite', type: 'EOR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '09:15:30', nextPay: '$823.45', avatarColor: '#E8F4E6' },
  { id: '5', name: 'Karl Drone', type: 'EOR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '01:45:12', nextPay: '$267.54', avatarColor: '#D7D8DC' },
  { id: '6', name: 'Pollou Shawn', type: 'EOR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '07:22:11', nextPay: '$912.76', avatarColor: '#F6F4FF' },
  { id: '7', name: 'Pao Sigue Rivers', type: 'EOR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '02:33:44', nextPay: '$134.99', avatarColor: '#E8E1EF' },
  { id: '8', name: 'Justin Case', type: 'EOR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '05:50:27', nextPay: '$578.60', avatarColor: '#D7D8DC' },
  { id: '9', name: 'Lennon Nate Stan', type: 'COR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '08:12:34', nextPay: '$456.73', avatarColor: '#F6F4FF' },
  { id: '10', name: 'Palla Buck', type: 'COR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '06:45:59', nextPay: '$299.99', avatarColor: '#E8F4E6' },
  { id: '11', name: 'Carly Fryze', type: 'COR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '11:11:11', nextPay: '$845.12', avatarColor: '#D7D8DC' },
  { id: '12', name: 'Teung Seo-hur', type: 'COR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '10:10:10', nextPay: '$712.88', avatarColor: '#F6F4FF' },
  { id: '13', name: 'Mig Oreng', type: 'COR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '00:00:01', nextPay: '$389.45', avatarColor: '#E8E1EF' },
  { id: '14', name: 'Varshall As...', type: 'COR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '04:44:44', nextPay: '$654.20', avatarColor: '#D7D8DC' },
  { id: '15', name: 'Missy Teik', type: 'COR', payrollSetting: 'Hourly held', payRate: '$5.00', billRate: '$5.00', trackedActivity: '23:59:59', nextPay: '$999.00', avatarColor: '#F6F4FF' },
];

/* ─── Olamee Logo ──────────────────────────────────────────────── */

function OlameeLogo() {
  return (
    <svg width="117" height="50" viewBox="0 0 117 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5758 40.0782C37.2717 41.0522 36.8676 41.9834 36.3636 42.8715C35.0926 45.0838 33.3318 46.8318 31.0811 48.1155C28.8304 49.3718 26.3149 50 23.5346 50C20.7279 50 18.1992 49.3718 15.9485 48.1155C14.3566 47.2075 13.0032 46.0605 11.8882 44.6744L15.0219 42.3771C15.8358 43.4002 16.8199 44.2479 17.9741 44.92C19.6423 45.8759 21.4958 46.3538 23.5346 46.3538C25.5735 46.3538 27.4006 45.8759 29.0158 44.92C30.6574 43.964 31.9416 42.653 32.8684 40.987C33.2232 40.3566 33.5119 39.6998 33.7347 39.0166L37.5758 40.0782Z" fill="url(#ps_g0)"/>
      <path d="M25.2901 31.0081C25.2901 31.7027 25.4585 32.2441 25.7952 32.6323C26.1517 33 26.6469 33.1839 27.2807 33.1839C27.5184 33.1839 27.756 33.1532 27.9937 33.0919C28.2512 33.0306 28.4493 32.9591 28.588 32.8774L28.7959 36.5855C28.0234 36.851 27.2213 36.9838 26.3894 36.9838C24.587 36.9838 23.1807 36.4935 22.1706 35.5129C21.1604 34.5118 20.6554 33.1021 20.6554 31.2839V14H25.2901V31.0081Z" fill="url(#ps_g1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.79414 16.8639C10.4777 16.8639 11.983 17.2316 13.31 17.9671C14.6371 18.6822 15.6769 19.6832 16.4296 20.9703C17.1822 22.2574 17.5586 23.7182 17.5586 25.3526C17.5586 26.987 17.1822 28.4478 16.4296 29.7348C15.6769 31.0219 14.6371 32.0332 13.31 32.7687C11.983 33.4837 10.4777 33.8413 8.79414 33.8413C7.11058 33.8413 5.59535 33.4837 4.24851 32.7687C2.92147 32.0332 1.8816 31.0219 1.12895 29.7348C0.376307 28.4478 0 26.987 0 25.3526C0 23.7182 0.3763 22.2574 1.12895 20.9703C1.8816 19.6832 2.92147 18.6822 4.24851 17.9671C5.59535 17.2316 7.11058 16.8639 8.79414 16.8639ZM8.79414 20.7865C7.60575 20.7865 6.62533 21.2053 5.85288 22.0429C5.08042 22.8601 4.69419 23.9634 4.69419 25.3526C4.6942 26.7418 5.08042 27.8553 5.85288 28.6929C6.62533 29.5101 7.60576 29.9187 8.79414 29.9187C9.98253 29.9187 10.9531 29.5101 11.7058 28.6929C12.4782 27.8553 12.8644 26.7418 12.8644 25.3526C12.8644 23.9634 12.4782 22.8601 11.7058 22.0429C10.9531 21.2052 9.98253 20.7865 8.79414 20.7865Z" fill="url(#ps_g2)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5865 16.8639C39.6266 16.8639 41.221 17.5278 42.3698 18.8558V17.109H47.0045V33.5961H42.5778V31.6961C41.429 33.1262 39.7652 33.8413 37.5865 33.8413C36.0812 33.8413 34.7145 33.494 33.4865 32.7993C32.2783 32.1047 31.3276 31.1138 30.6343 29.8267C29.9411 28.5397 29.5946 27.0483 29.5946 25.3526C29.5946 23.6569 29.9411 22.1655 30.6343 20.8784C31.3276 19.5913 32.2783 18.6004 33.4865 17.9058C34.7145 17.2112 36.0812 16.8639 37.5865 16.8639ZM38.3887 20.7865C37.2003 20.7865 36.2198 21.2052 35.4474 22.0429C34.6749 22.8601 34.2887 23.9634 34.2887 25.3526C34.2887 26.7418 34.6749 27.8553 35.4474 28.6929C36.2198 29.5101 37.2003 29.9187 38.3887 29.9187C39.5573 29.9186 40.5278 29.5101 41.3002 28.6929C42.0727 27.8553 42.4589 26.7418 42.4589 25.3526C42.4589 23.9634 42.0727 22.8601 41.3002 22.0429C40.5278 21.2053 39.5573 20.7865 38.3887 20.7865Z" fill="url(#ps_g3)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M89.9994 16.8608C91.5245 16.8608 92.911 17.1979 94.1588 17.872C95.4066 18.5258 96.3969 19.4861 97.1298 20.7527C97.8824 21.999 98.2587 23.4802 98.2587 25.1963L86.4342 27.5559C86.771 28.3731 87.2958 28.986 88.0088 29.3946C88.7416 29.8032 89.633 30.0076 90.6827 30.0076C91.5146 30.0076 92.2475 29.8849 92.8813 29.6398C93.5349 29.3742 94.139 28.9656 94.6936 28.414L97.1595 31.1721C95.6542 32.9495 93.4557 33.8382 90.5639 33.8382C88.7615 33.8382 87.1671 33.4807 85.7806 32.7656C84.3942 32.0301 83.3245 31.0189 82.5719 29.7318C81.8192 28.4447 81.4429 26.9839 81.4429 25.3495C81.4429 23.7356 81.8094 22.285 82.5422 20.9979C83.2949 19.6904 84.3149 18.6791 85.6023 17.964C86.9096 17.2286 88.3753 16.8608 89.9994 16.8608ZM89.9994 20.4769C88.8308 20.4769 87.8801 20.8651 87.1472 21.6414C86.4144 22.4177 86.0282 23.4903 85.9886 24.8592L93.7726 23.2963C93.5547 22.4382 93.109 21.7538 92.4356 21.243C91.7622 20.7323 90.9501 20.4769 89.9994 20.4769Z" fill="url(#ps_g4)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M108.741 16.8608C110.266 16.8608 111.652 17.1979 112.9 17.872C114.148 18.5258 115.138 19.4861 115.871 20.7527C116.624 21.999 117 23.4802 117 25.1963L105.175 27.5559C105.512 28.3731 106.037 28.986 106.75 29.3946C107.483 29.8032 108.374 30.0076 109.424 30.0076C110.256 30.0076 110.989 29.8849 111.623 29.6398C112.276 29.3742 112.88 28.9656 113.435 28.414L115.901 31.1721C114.395 32.9495 112.197 33.8382 109.305 33.8382C107.503 33.8382 105.908 33.4807 104.522 32.7656C103.135 32.0301 102.066 31.0189 101.313 29.7318C100.56 28.4447 100.184 26.9839 100.184 25.3495C100.184 23.7356 100.551 22.285 101.283 20.9979C102.036 19.6904 103.056 18.6791 104.344 17.964C105.651 17.2286 107.117 16.8608 108.741 16.8608ZM108.741 20.4769C107.572 20.4769 106.621 20.8651 105.888 21.6414C105.156 22.4177 104.769 23.4903 104.73 24.8592L112.514 23.2963C112.296 22.4382 111.85 21.7538 111.177 21.243C110.503 20.7323 109.691 20.4769 108.741 20.4769Z" fill="url(#ps_g5)"/>
      <path d="M71.7652 16.8608C73.7657 16.8608 75.3503 17.4737 76.5189 18.6995C77.7073 19.9048 78.3014 21.7231 78.3015 24.1543V33.593H73.6667V24.8898C73.6667 23.5823 73.3993 22.6119 72.8645 21.9786C72.3496 21.3248 71.6068 20.9979 70.6363 20.9979C69.5469 20.9979 68.6853 21.3656 68.0515 22.1011C67.4177 22.8162 67.1008 23.8888 67.1008 25.3189V33.593H62.466V24.8898C62.466 22.2952 61.4559 20.9979 59.4356 20.9979C58.366 20.9979 57.5144 21.3656 56.8805 22.1011C56.2467 22.8162 55.9298 23.8888 55.9298 25.3189V33.593H51.2951V17.1059H55.7219V19.006C56.3161 18.3113 57.039 17.7802 57.8907 17.4124C58.7622 17.0447 59.7129 16.8608 60.7428 16.8608C61.8718 16.8608 62.8919 17.0958 63.803 17.5657C64.7141 18.0151 65.447 18.6791 66.0015 19.5576C66.6552 18.6995 67.4771 18.0355 68.4675 17.5657C69.4776 17.0958 70.5768 16.8608 71.7652 16.8608Z" fill="url(#ps_g6)"/>
      <defs>
        {[0,1,2,3,4,5,6].map(i => (
          <linearGradient key={i} id={`ps_g${i}`} x1="-3.71523" y1="51.5829" x2="109.146" y2="-12.1177" gradientUnits="userSpaceOnUse">
            <stop offset="0.159" stopColor="#7A5FFF"/>
            <stop offset="0.774" stopColor="#5ED4B2"/>
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}

/* ─── Sidebar Sections ────────────────────────────────────────── */

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
      { icon: 'om-payrolls', label: 'Payroll', active: true },
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

/* ─── Settings List Panel (Left) ─────────────────────────────── */

interface SettingsListProps {
  settings: PayrollSetting[];
  selectedId: string;
  onSelect: (id: string) => void;
  currentPage: number;
  totalPages: number;
}

function SettingsList({ settings, selectedId, onSelect, currentPage, totalPages }: SettingsListProps) {
  return (
    <div className="flex flex-col justify-between border border-[#D7D8DC] rounded-[8px] p-[12px] w-[258px] shrink-0 h-full">
      {/* Items */}
      <div className="flex flex-col">
        {settings.map((setting) => {
          const isSelected = setting.id === selectedId;
          return (
            <button
              key={setting.id}
              onClick={() => onSelect(setting.id)}
              className={`flex flex-col gap-[4px] items-start justify-center w-full px-[16px] py-[8px] rounded-[12px] text-left cursor-pointer transition-colors ${
                isSelected
                  ? 'bg-[#6F54EB] text-[#FDFDFE]'
                  : 'text-[#30343F] hover:bg-[#EFF0F3]'
              }`}
            >
              <Text as="p" variant="body-lg" weight="bold" className="tracking-[-0.384px] truncate w-full">
                <Text as="span">{setting.name} </Text>
                <Text as="span" weight="medium">({setting.count})</Text>
              </Text>
              <Text as="p" variant="body-xs" className={`truncate w-full ${
                isSelected ? 'text-[#FDFDFE]/80' : 'text-[#8D8F97]'
              }`}>
                {setting.frequency}
              </Text>
            </button>
          );
        })}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between">
        <IconButton
          hierarchy="tertiary"
          size="sm"
          colorScheme="dark"
          icon={<i className="fa-regular fa-chevron-left text-[12px] text-[#8D8F97]" />}
          aria-label="Previous page"
          className="opacity-75"
        />
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center justify-center h-[36px] w-[46px] rounded-[8px] border border-[#B2B4BA] bg-white">
            <Text as="span" variant="body-base" weight="medium" className="tracking-[-0.175px] text-[#30343F]">{currentPage}</Text>
          </div>
          <Text as="span" variant="body-base" className="text-[#30343F]">of  {totalPages}</Text>
        </div>
        <IconButton
          hierarchy="tertiary"
          size="sm"
          colorScheme="dark"
          icon={<i className="fa-regular fa-chevron-right text-[12px] text-[#8D8F97]" />}
          aria-label="Next page"
          className="opacity-75"
        />
      </div>
    </div>
  );
}

/* ─── Metadata Row ───────────────────────────────────────────── */

interface MetadataRowProps {
  setting: PayrollSetting;
}

function MetadataRow({ setting }: MetadataRowProps) {
  const items = [
    { label: 'Team Members', value: String(setting.teamMembers) },
    { label: 'Created on', value: setting.createdOn },
    { label: 'Created by', value: setting.createdBy },
    { label: 'Start of Week', value: setting.startOfWeek },
    { label: 'Weekend Behavior', value: setting.weekendBehavior },
    { label: 'Pay Frequency', value: setting.payFrequency },
  ];

  return (
    <div className="flex gap-[32px] items-start w-full">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-[8px] items-start justify-center flex-1 min-w-0">
          <Text as="p" variant="body-xs" className="text-[#30343F]">{item.label}</Text>
          <Text as="p" variant="body-base" weight="bold" className="text-[#30343F]">{item.value}</Text>
        </div>
      ))}
    </div>
  );
}

/* ─── Custom Pay Periods ─────────────────────────────────────── */

interface PayPeriodsProps {
  periods: PayPeriod[];
}

function CustomPayPeriods({ periods }: PayPeriodsProps) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full">
      <Text as="p" variant="body-base" weight="bold" className="text-[#30343F]">Custom Pay Period(s)</Text>
      <div className="flex gap-[16px] items-start w-full">
        {periods.map((period, idx) => (
          <div key={idx} className="flex-1 bg-[#FDFDFE] border border-[#D7D8DC] rounded-[12px] p-[16px]">
            <div className="flex gap-[32px] items-start w-full">
              {[
                { label: 'Period Start Day', value: period.periodStartDay },
                { label: 'Period End Day', value: period.periodEndDay },
                { label: 'Pay Day', value: period.payDay },
                { label: 'Pay Month Offset', value: period.payMonthOffset },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-[8px] items-start justify-center flex-1 min-w-0">
                  <Text as="p" variant="body-xs" className="text-[#30343F]">{item.label}</Text>
                  <Text as="p" variant="body-base" weight="bold" className="text-[#30343F]">{item.value}</Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Table Header Column ────────────────────────────────────── */

function TableHeaderCell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-[8px] px-[16px] py-[11px] h-[40px] ${className}`}>
      <Text as="span" variant="body-base" weight="bold" className="text-[#30343F]">{children}</Text>
      <i className="fa-regular fa-sort text-[12px] text-[#8D8F97]" />
    </div>
  );
}

function TableCell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center px-[16px] py-[8px] h-[30px] ${className}`}>
      <Text as="span" variant="body-xs" className="text-[#30343F] truncate">{children}</Text>
    </div>
  );
}

/* ─── Team Members Table ─────────────────────────────────────── */

interface TeamMembersTableProps {
  members: TeamMember[];
  selectedIds: Set<string>;
  onToggleSelect: (id: string) => void;
  onToggleSelectAll: () => void;
}

function TeamMembersTable({ members, selectedIds, onToggleSelect, onToggleSelectAll }: TeamMembersTableProps) {
  const allSelected = members.length > 0 && members.every(m => selectedIds.has(m.id));

  return (
    <div className="flex-1 overflow-auto">
      <div className="min-w-[1200px]">
        {/* Header Row */}
        <div className="flex border-b border-[#EFF0F3] bg-white sticky top-0 z-10">
          <div className="flex items-center justify-center w-[50px] h-[40px]">
            <Checkbox checked={allSelected} onCheckedChange={onToggleSelectAll} />
          </div>
          <TableHeaderCell className="flex-[2]">Team Members</TableHeaderCell>
          <TableHeaderCell className="flex-[1.5]">Type</TableHeaderCell>
          <TableHeaderCell className="flex-1">Payroll Se...</TableHeaderCell>
          <TableHeaderCell className="flex-[1.5]">Pay Rate</TableHeaderCell>
          <TableHeaderCell className="flex-[1.5]">Bill Rate</TableHeaderCell>
          <TableHeaderCell className="flex-[1.5]">Tracked Activity</TableHeaderCell>
          <TableHeaderCell className="flex-[1.5]">Next Pay</TableHeaderCell>
        </div>

        {/* Data Rows */}
        {members.map((member) => (
          <div
            key={member.id}
            className="flex border-b border-[#EFF0F3] hover:bg-[#F9F9FB] transition-colors"
          >
            <div className="flex items-center justify-center w-[50px] h-[30px]">
              <Checkbox
                checked={selectedIds.has(member.id)}
                onCheckedChange={() => onToggleSelect(member.id)}
              />
            </div>
            <div className="flex items-center gap-[16px] px-[16px] py-[6px] h-[30px] flex-[2]">
              {/* Avatar */}
              <div
                className="size-[18px] rounded-full shrink-0"
                style={{ backgroundColor: member.avatarColor }}
              />
              <Text as="span" variant="body-xs" className="text-[#30343F] truncate">{member.name}</Text>
              <IconButton
                hierarchy="tertiary"
                size="xs"
                colorScheme="dark"
                icon={<i className="fa-regular fa-pen-to-square text-[12px]" />}
                aria-label="Edit member"
                className="shrink-0"
              />
            </div>
            <TableCell className="flex-[1.5]">{member.type}</TableCell>
            <TableCell className="flex-1">{member.payrollSetting}</TableCell>
            <TableCell className="flex-[1.5]">{member.payRate}</TableCell>
            <TableCell className="flex-[1.5]">{member.billRate}</TableCell>
            <TableCell className="flex-[1.5]">{member.trackedActivity}</TableCell>
            <TableCell className="flex-[1.5]">{member.nextPay}</TableCell>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Pagination ─────────────────────────────────────────────── */

interface PaginationProps {
  totalResults: number;
  showingCount: number;
  currentPage: number;
  totalPages: number;
}

function Pagination({ totalResults, showingCount, currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <Text as="p" variant="body-base" className="text-[#30343F]">
        Showing {showingCount} out of {totalResults} results
      </Text>

      {/* Center: page controls */}
      <div className="flex items-center gap-[12px]">
        <div className="flex gap-[8px]">
          <IconButton
            hierarchy="tertiary"
            size="xs"
            colorScheme="dark"
            icon={<i className="fa-regular fa-chevrons-left text-[10px]" />}
            aria-label="First page"
          />
          <IconButton
            hierarchy="tertiary"
            size="xs"
            colorScheme="dark"
            icon={<i className="fa-regular fa-chevron-left text-[10px]" />}
            aria-label="Previous page"
          />
        </div>
        <Text as="span" variant="body-base" className="text-[#30343F]">
          Page {currentPage} of {totalPages}
        </Text>
        <div className="flex gap-[8px]">
          <IconButton
            hierarchy="tertiary"
            size="xs"
            colorScheme="dark"
            icon={<i className="fa-regular fa-chevron-right text-[10px]" />}
            aria-label="Next page"
          />
          <IconButton
            hierarchy="tertiary"
            size="xs"
            colorScheme="dark"
            icon={<i className="fa-regular fa-chevrons-right text-[10px]" />}
            aria-label="Last page"
          />
        </div>
      </div>

      {/* Right: go to page + show rows */}
      <div className="flex items-center gap-[8px]">
        <Text as="span" variant="body-base" className="text-[#30343F]">Go to Page:</Text>
        <Input
          defaultValue="1"
          className="w-[48px] h-[24px] rounded-[6px] text-center text-[12px]"
        />
        <Text as="span" variant="body-xs" weight="medium" className="text-[#30343F]">Show 15</Text>
      </div>
    </div>
  );
}

/* ─── Detail Panel (Right) ───────────────────────────────────── */

interface DetailPanelProps {
  setting: PayrollSetting;
  members: TeamMember[];
  searchQuery: string;
  onSearchChange: (val: string) => void;
}

function DetailPanel({ setting, members, searchQuery, onSearchChange }: DetailPanelProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (members.every(m => selectedIds.has(m.id))) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(members.map(m => m.id)));
    }
  };

  return (
    <div className="flex flex-col gap-[32px] flex-1 min-w-0">
      {/* Header: Name + Active badge + Edit button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <Text as="h2" variant="h5" weight="bold" className="text-[#30343F]">{setting.name}</Text>
          <Tag color="success" size="small">Active</Tag>
        </div>
        <IconButton
          hierarchy="secondary"
          size="sm"
          colorScheme="dark"
          icon={<i className="fa-regular fa-pen text-[14px]" />}
          aria-label="Edit setting"
        />
      </div>

      {/* Metadata Row */}
      <MetadataRow setting={setting} />

      {/* Custom Pay Periods */}
      <CustomPayPeriods periods={setting.payPeriods} />

      {/* Table Section */}
      <div className="flex flex-col bg-white rounded-[12px] border border-[#D7D8DC] flex-1 min-h-0 p-[24px] gap-[16px]">
        {/* Toolbar */}
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <IconButton
                hierarchy="secondary"
                size="sm"
                colorScheme="dark"
                icon={<i className="fa-regular fa-filter text-[14px]" />}
                aria-label="Filter"
              />
              <div className="w-px h-[24.5px] bg-[#D7D8DC]" />
              <SearchBar
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for team member"
                className="w-[403px]"
              />
            </div>
            <div className="flex items-center gap-[8px]">
              <Button hierarchy="secondary" size="small" colorScheme="dark">
                <i className="fa-regular fa-pen-to-square text-[12px] mr-[6px]" />
                Edit Members
              </Button>
              <IconButton
                hierarchy="secondary"
                size="sm"
                colorScheme="dark"
                icon={<i className="fa-regular fa-bars text-[14px]" />}
                aria-label="Table view"
              />
            </div>
          </div>
          <Text as="p" variant="body-base" className="text-[#30343F]">
            Showing {members.length} out of 200 results
          </Text>
        </div>

        {/* Table */}
        <TeamMembersTable
          members={members}
          selectedIds={selectedIds}
          onToggleSelect={toggleSelect}
          onToggleSelectAll={toggleSelectAll}
        />

        {/* Pagination */}
        <Pagination
          totalResults={200}
          showingCount={15}
          currentPage={1}
          totalPages={14}
        />
      </div>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────── */

export default function PayrollSettings() {
  const [selectedSettingId, setSelectedSettingId] = useState('hourly-not-held');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedSetting = PAYROLL_SETTINGS.find(s => s.id === selectedSettingId) ?? PAYROLL_SETTINGS[0];

  return (
    <div className="flex flex-col h-screen bg-gunmetal-50">
      {/* Top Navbar */}
      <TopNavbar
        leftContent={<OlameeLogo />}
        centerContent={<SearchBar placeholder="Search" />}
        rightContent={
          <div className="flex items-center gap-2">
            <Button
              hierarchy="secondary"
              size="small"
              colorScheme="violet"
              leadIcon={<Icon name="plus" size="xs" />}
            >
              Create
            </Button>
            <IconButton
              hierarchy="tertiary"
              size="lg"
              colorScheme="violet"
              icon={<Icon name="bell" size="lg" faStyle="light" style={{ color: '#30343F' }} />}
              aria-label="Notifications"
            />
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-[36px] rounded-full bg-[#F6F4FF] border border-[#7C81A0]">
                <Text variant="body-sm" weight="bold" className="text-primary-500">E</Text>
              </div>
              <span className="font-body font-bold text-[14px] leading-[18px] text-[#30343F]">Ola, Evan!</span>
            </div>
          </div>
        }
      />

      {/* Body: Sidebar + Content */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar — collapsed (icon-only) mode */}
        <Sidebar
          sections={SIDEBAR_SECTIONS}
          activeTab="Payroll"
          theme="purple"
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-auto p-[32px]">
          <div className="flex flex-col gap-[32px] h-full">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <Text as="h1" variant="h3" weight="bold" className="text-[#4A4A4A]">Payroll Settings</Text>
              <Button
                hierarchy="secondary"
                size="small"
                colorScheme="dark"
                leadIcon={<i className="fa-regular fa-plus text-[12px]" />}
              >
                Add New Payroll Setting
              </Button>
            </div>

            {/* Content: Card wrapping Left List + Right Detail */}
            <ContentCard className="flex-1 min-h-0">
              <div className="flex gap-[32px] h-full">
                <SettingsList
                  settings={PAYROLL_SETTINGS}
                  selectedId={selectedSettingId}
                  onSelect={setSelectedSettingId}
                  currentPage={1}
                  totalPages={1}
                />
                <DetailPanel
                  setting={selectedSetting}
                  members={TEAM_MEMBERS}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </div>
            </ContentCard>
          </div>
        </main>
      </div>
    </div>
  );
}
