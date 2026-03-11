import { useState, useRef, useCallback } from 'react';
import {
  TopNavbar,
  Sidebar,
  SearchBar,
  Button,
  IconButton,
  Text,
  Checkbox,
  Tag,
  Input,
} from '@/design-system';
import type { SidebarSection } from '@/design-system';

/* ─── Olamee gradient logo ──────────────────────────────────── */

function OlameeLogo() {
  return (
    <svg width="117" height="50" viewBox="0 0 117 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5758 40.0782C37.2717 41.0522 36.8676 41.9834 36.3636 42.8715C35.0926 45.0838 33.3318 46.8318 31.0811 48.1155C28.8304 49.3718 26.3149 50 23.5346 50C20.7279 50 18.1992 49.3718 15.9485 48.1155C14.3566 47.2075 13.0032 46.0605 11.8882 44.6744L15.0219 42.3771C15.8358 43.4002 16.8199 44.2479 17.9741 44.92C19.6423 45.8759 21.4958 46.3538 23.5346 46.3538C25.5735 46.3538 27.4006 45.8759 29.0158 44.92C30.6574 43.964 31.9416 42.653 32.8684 40.987C33.2232 40.3566 33.5119 39.6998 33.7347 39.0166L37.5758 40.0782Z" fill="url(#pd_g0)"/>
      <path d="M25.2901 31.0081C25.2901 31.7027 25.4585 32.2441 25.7952 32.6323C26.1517 33 26.6469 33.1839 27.2807 33.1839C27.5184 33.1839 27.756 33.1532 27.9937 33.0919C28.2512 33.0306 28.4493 32.9591 28.588 32.8774L28.7959 36.5855C28.0234 36.851 27.2213 36.9838 26.3894 36.9838C24.587 36.9838 23.1807 36.4935 22.1706 35.5129C21.1604 34.5118 20.6554 33.1021 20.6554 31.2839V14H25.2901V31.0081Z" fill="url(#pd_g1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.79414 16.8639C10.4777 16.8639 11.983 17.2316 13.31 17.9671C14.6371 18.6822 15.6769 19.6832 16.4296 20.9703C17.1822 22.2574 17.5586 23.7182 17.5586 25.3526C17.5586 26.987 17.1822 28.4478 16.4296 29.7348C15.6769 31.0219 14.6371 32.0332 13.31 32.7687C11.983 33.4837 10.4777 33.8413 8.79414 33.8413C7.11058 33.8413 5.59535 33.4837 4.24851 32.7687C2.92147 32.0332 1.8816 31.0219 1.12895 29.7348C0.376307 28.4478 6.1839e-06 26.987 0 25.3526C0 23.7182 0.3763 22.2574 1.12895 20.9703C1.8816 19.6832 2.92147 18.6822 4.24851 17.9671C5.59535 17.2316 7.11058 16.8639 8.79414 16.8639ZM8.79414 20.7865C7.60575 20.7865 6.62533 21.2053 5.85288 22.0429C5.08042 22.8601 4.69419 23.9634 4.69419 25.3526C4.6942 26.7418 5.08042 27.8553 5.85288 28.6929C6.62533 29.5101 7.60576 29.9187 8.79414 29.9187C9.98253 29.9187 10.9531 29.5101 11.7058 28.6929C12.4782 27.8553 12.8644 26.7418 12.8644 25.3526C12.8644 23.9634 12.4782 22.8601 11.7058 22.0429C10.9531 21.2052 9.98253 20.7865 8.79414 20.7865Z" fill="url(#pd_g2)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5865 16.8639C39.6266 16.8639 41.221 17.5278 42.3698 18.8558V17.109H47.0045V33.5961H42.5778V31.6961C41.429 33.1262 39.7652 33.8413 37.5865 33.8413C36.0812 33.8413 34.7145 33.494 33.4865 32.7993C32.2783 32.1047 31.3276 31.1138 30.6343 29.8267C29.9411 28.5397 29.5946 27.0483 29.5946 25.3526C29.5946 23.6569 29.9411 22.1655 30.6343 20.8784C31.3276 19.5913 32.2783 18.6004 33.4865 17.9058C34.7145 17.2112 36.0812 16.8639 37.5865 16.8639ZM38.3887 20.7865C37.2003 20.7865 36.2198 21.2052 35.4474 22.0429C34.6749 22.8601 34.2887 23.9634 34.2887 25.3526C34.2887 26.7418 34.6749 27.8553 35.4474 28.6929C36.2198 29.5101 37.2003 29.9187 38.3887 29.9187C39.5573 29.9186 40.5278 29.5101 41.3002 28.6929C42.0727 27.8553 42.4589 26.7418 42.4589 25.3526C42.4589 23.9634 42.0727 22.8601 41.3002 22.0429C40.5278 21.2053 39.5573 20.7865 38.3887 20.7865Z" fill="url(#pd_g3)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M89.9994 16.8608C91.5245 16.8608 92.911 17.1979 94.1588 17.872C95.4066 18.5258 96.3969 19.4861 97.1298 20.7527C97.8824 21.999 98.2587 23.4802 98.2587 25.1963L86.4342 27.5559C86.771 28.3731 87.2958 28.986 88.0088 29.3946C88.7416 29.8032 89.633 30.0076 90.6827 30.0076C91.5146 30.0076 92.2475 29.8849 92.8813 29.6398C93.5349 29.3742 94.139 28.9656 94.6936 28.414L97.1595 31.1721C95.6542 32.9495 93.4557 33.8382 90.5639 33.8382C88.7615 33.8382 87.1671 33.4807 85.7806 32.7656C84.3942 32.0301 83.3245 31.0189 82.5719 29.7318C81.8192 28.4447 81.4429 26.9839 81.4429 25.3495C81.4429 23.7356 81.8094 22.285 82.5422 20.9979C83.2949 19.6904 84.3149 18.6791 85.6023 17.964C86.9096 17.2286 88.3753 16.8608 89.9994 16.8608ZM89.9994 20.4769C88.8308 20.4769 87.8801 20.8651 87.1472 21.6414C86.4144 22.4177 86.0282 23.4903 85.9886 24.8592L93.7726 23.2963C93.5547 22.4382 93.109 21.7538 92.4356 21.243C91.7622 20.7323 90.9501 20.4769 89.9994 20.4769Z" fill="url(#pd_g4)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M108.741 16.8608C110.266 16.8608 111.652 17.1979 112.9 17.872C114.148 18.5258 115.138 19.4861 115.871 20.7527C116.624 21.999 117 23.4802 117 25.1963L105.175 27.5559C105.512 28.3731 106.037 28.986 106.75 29.3946C107.483 29.8032 108.374 30.0076 109.424 30.0076C110.256 30.0076 110.989 29.8849 111.623 29.6398C112.276 29.3742 112.88 28.9656 113.435 28.414L115.901 31.1721C114.395 32.9495 112.197 33.8382 109.305 33.8382C107.503 33.8382 105.908 33.4807 104.522 32.7656C103.135 32.0301 102.066 31.0189 101.313 29.7318C100.56 28.4447 100.184 26.9839 100.184 25.3495C100.184 23.7356 100.551 22.285 101.283 20.9979C102.036 19.6904 103.056 18.6791 104.344 17.964C105.651 17.2286 107.117 16.8608 108.741 16.8608ZM108.741 20.4769C107.572 20.4769 106.621 20.8651 105.888 21.6414C105.156 22.4177 104.769 23.4903 104.73 24.8592L112.514 23.2963C112.296 22.4382 111.85 21.7538 111.177 21.243C110.503 20.7323 109.691 20.4769 108.741 20.4769Z" fill="url(#pd_g5)"/>
      <path d="M71.7652 16.8608C73.7657 16.8608 75.3503 17.4737 76.5189 18.6995C77.7073 19.9048 78.3014 21.7231 78.3015 24.1543V33.593H73.6667V24.8898C73.6667 23.5823 73.3993 22.6119 72.8645 21.9786C72.3496 21.3248 71.6068 20.9979 70.6363 20.9979C69.5469 20.9979 68.6853 21.3656 68.0515 22.1011C67.4177 22.8162 67.1008 23.8888 67.1008 25.3189V33.593H62.466V24.8898C62.466 22.2952 61.4559 20.9979 59.4356 20.9979C58.366 20.9979 57.5144 21.3656 56.8805 22.1011C56.2467 22.8162 55.9298 23.8888 55.9298 25.3189V33.593H51.2951V17.1059H55.7219V19.006C56.3161 18.3113 57.039 17.7802 57.8907 17.4124C58.7622 17.0447 59.7129 16.8608 60.7428 16.8608C61.8718 16.8608 62.8919 17.0958 63.803 17.5657C64.7141 18.0151 65.447 18.6791 66.0015 19.5576C66.6552 18.6995 67.4771 18.0355 68.4675 17.5657C69.4776 17.0958 70.5768 16.8608 71.7652 16.8608Z" fill="url(#pd_g6)"/>
      <defs>
        {[0,1,2,3,4,5,6].map(i => (
          <linearGradient key={i} id={`pd_g${i}`} x1="-3.71523" y1="51.5829" x2="109.146" y2="-12.1177" gradientUnits="userSpaceOnUse">
            <stop offset="0.159" stopColor="#7A5FFF"/>
            <stop offset="0.774" stopColor="#5ED4B2"/>
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}

/* ─── Types ──────────────────────────────────────────────────── */

type PayrollStatus = 'Pending Review' | 'For Approval' | 'Scheduled' | 'Processing' | 'Paid';
type PayrollTab = 'All' | 'Pending Review' | 'For Approval' | 'Scheduled' | 'Processing' | 'Paid' | 'Failed';
type EmployeeType = 'EOR' | 'COR';

interface PayrollEmployee {
  id: string;
  name: string;
  avatarColor: string;
  initials: string;
  hasFlag: boolean;
  hasEdit: boolean;
  type: EmployeeType;
  payrollSchedule: string;
  payRate: number;
  billRate: number;
  status: PayrollStatus;
  trackedActivity: string;
  trackedAmount: number;
  timeOff: number;
  timeEdits: string;
  timeEditsColor: 'green' | 'red';
  adjustments: number;
  adjustmentsSign: '+' | '-';
}

interface AdjustmentChip {
  label: string;
  amount: string;
}

/* ─── Status → Tag color mapping ─────────────────────────────── */

const STATUS_TAG_COLOR: Record<PayrollStatus, 'warning' | 'info' | 'error' | 'success'> = {
  'Pending Review': 'warning',
  'For Approval':   'warning',
  'Scheduled':      'info',
  'Processing':     'error',
  'Paid':           'success',
};

/* ─── Table columns ──────────────────────────────────────────── */

const payrollColumns = [
  { key: 'name',            label: 'Team Members',    width: 'w-[220px]' },
  { key: 'type',            label: 'Type',            width: 'w-[80px]' },
  { key: 'payrollSchedule', label: 'Payroll Se...',   width: 'w-[120px]' },
  { key: 'payRate',         label: 'Pay Rate',        width: 'w-[100px]' },
  { key: 'billRate',        label: 'Bill Rate',       width: 'w-[100px]' },
  { key: 'status',          label: 'Status',          width: 'w-[140px]' },
  { key: 'trackedActivity', label: 'Tracked Activ...', width: 'w-[130px]' },
  { key: 'trackedAmount',   label: 'Tracked Ac...',  width: 'w-[120px]' },
  { key: 'timeOff',         label: 'Time Off',       width: 'w-[100px]' },
  { key: 'timeEdits',       label: 'Time Edits',     width: 'w-[120px]' },
  { key: 'adjustments',     label: 'Adjustments',    width: 'w-[120px]' },
  { key: 'totalHours',      label: 'Total H...',     width: 'w-[100px]' },
] as const;

/* ─── Mock Data ──────────────────────────────────────────────── */

const ADJUSTMENTS: AdjustmentChip[] = [
  { label: 'Referral', amount: '$ 412.30' },
  { label: 'Loan', amount: '$ 1,000.00' },
  { label: 'Healthcare', amount: '$ 10,034.00' },
  { label: 'Bonuses', amount: '$ 2,000.00' },
  { label: 'Other', amount: '$ 100.00' },
  { label: 'Other', amount: '$ 1,000.00' },
  { label: 'Other', amount: '$ 1,000.00' },
  { label: 'Other', amount: '$ 1,000.00' },
  { label: 'Other', amount: '$ 1,000.00' },
];

const EMPLOYEES: PayrollEmployee[] = [
  { id: '1',  name: 'Julie Noted',        avatarColor: '#7A5FFF', initials: 'JN', hasFlag: false, hasEdit: true,  type: 'EOR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'Pending Review', trackedActivity: '12:34:56', trackedAmount: 743.12, timeOff: 45.00,  timeEdits: '+02:34:12', timeEditsColor: 'green', adjustments: 234.12,  adjustmentsSign: '+' },
  { id: '2',  name: 'Justin Credible',    avatarColor: '#5ED4B2', initials: 'JC', hasFlag: false, hasEdit: true,  type: 'EOR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'Pending Review', trackedActivity: '03:21:45', trackedAmount: 582.19, timeOff: 120.00, timeEdits: '-01:15:45', timeEditsColor: 'red',   adjustments: 115.45,  adjustmentsSign: '-' },
  { id: '3',  name: 'Vamptyr Rite',       avatarColor: '#FF9F1C', initials: 'VR', hasFlag: false, hasEdit: true,  type: 'EOR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'For Approval',  trackedActivity: '04:56:23', trackedAmount: 399.88, timeOff: 75.00,  timeEdits: '+00:45:30', timeEditsColor: 'green', adjustments: 45.30,   adjustmentsSign: '+' },
  { id: '4',  name: 'Shirfan Zink...',    avatarColor: '#EAD94C', initials: 'SZ', hasFlag: true,  hasEdit: true,  type: 'EOR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'For Approval',  trackedActivity: '09:15:30', trackedAmount: 823.45, timeOff: 300.00, timeEdits: '-03:22:10', timeEditsColor: 'red',   adjustments: 322.10,  adjustmentsSign: '-' },
  { id: '5',  name: 'Karl Drone',         avatarColor: '#5FB54E', initials: 'KD', hasFlag: false, hasEdit: true,  type: 'EOR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'For Approval',  trackedActivity: '01:45:12', trackedAmount: 267.54, timeOff: 250.00, timeEdits: '+01:05:55', timeEditsColor: 'green', adjustments: 105.55,  adjustmentsSign: '+' },
  { id: '6',  name: 'Pollou Shawn',       avatarColor: '#D62839', initials: 'PS', hasFlag: false, hasEdit: false, type: 'EOR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'For Approval',  trackedActivity: '07:22:11', trackedAmount: 912.76, timeOff: 90.00,  timeEdits: '+00:12:40', timeEditsColor: 'green', adjustments: 12.40,   adjustmentsSign: '+' },
  { id: '7',  name: 'Pao Sigua Rivers',   avatarColor: '#18E8FF', initials: 'PR', hasFlag: false, hasEdit: true,  type: 'EOR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'Scheduled',     trackedActivity: '02:33:44', trackedAmount: 134.89, timeOff: 15.00,  timeEdits: '-02:50:25', timeEditsColor: 'red',   adjustments: 250.25,  adjustmentsSign: '-' },
  { id: '8',  name: 'Justin Case',        avatarColor: '#A30B37', initials: 'JC', hasFlag: false, hasEdit: false, type: 'EOR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'Scheduled',     trackedActivity: '05:55:27', trackedAmount: 378.60, timeOff: 200.00, timeEdits: '+03:15:05', timeEditsColor: 'green', adjustments: 315.05,  adjustmentsSign: '+' },
  { id: '9',  name: 'Lennon Nate Stan',   avatarColor: '#646F58', initials: 'LS', hasFlag: false, hasEdit: true,  type: 'COR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'Processing',    trackedActivity: '08:12:34', trackedAmount: 456.73, timeOff: 60.00,  timeEdits: '+00:30:15', timeEditsColor: 'green', adjustments: 30.15,   adjustmentsSign: '+' },
  { id: '10', name: 'Pails Buck',         avatarColor: '#7A5FFF', initials: 'PB', hasFlag: false, hasEdit: true,  type: 'COR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'Processing',    trackedActivity: '06:45:59', trackedAmount: 299.99, timeOff: 35.00,  timeEdits: '-01:40:50', timeEditsColor: 'red',   adjustments: 140.50,  adjustmentsSign: '-' },
  { id: '11', name: 'Carly Fryze',        avatarColor: '#5ED4B2', initials: 'CF', hasFlag: false, hasEdit: false, type: 'COR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'Paid',          trackedActivity: '11:11:11', trackedAmount: 845.12, timeOff: 400.00, timeEdits: '+02:05:35', timeEditsColor: 'green', adjustments: 205.35,  adjustmentsSign: '+' },
  { id: '12', name: 'Teung Seo-hur',      avatarColor: '#FF9F1C', initials: 'TS', hasFlag: false, hasEdit: true,  type: 'COR', payrollSchedule: 'Hourly held', payRate: 5.00, billRate: 3.00, status: 'Paid',          trackedActivity: '10:10:10', trackedAmount: 712.88, timeOff: 180.00, timeEdits: '-00:25:20', timeEditsColor: 'red',   adjustments: 25.20,   adjustmentsSign: '-' },
];

const TABS: PayrollTab[] = ['All', 'Pending Review', 'For Approval', 'Scheduled', 'Processing', 'Paid', 'Failed'];

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

/* ─── (StatusBadge removed — now uses Tag component inline) ── */

/* ─── Main Page Component ────────────────────────────────────── */

export default function PayrollDashboard() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(['1', '2']));
  const [activeTab, setActiveTab] = useState<PayrollTab>('All');
  const adjustmentsScrollRef = useRef<HTMLDivElement>(null);

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectAll = useCallback(() => {
    if (selectedIds.size === EMPLOYEES.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(EMPLOYEES.map((e) => e.id)));
    }
  }, [selectedIds.size]);

  const filteredEmployees = activeTab === 'All'
    ? EMPLOYEES
    : EMPLOYEES.filter((e) => e.status === activeTab);

  const scrollAdjustments = (direction: 'left' | 'right') => {
    if (adjustmentsScrollRef.current) {
      const scrollAmount = 200;
      adjustmentsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#FDFDFE]">
      {/* Top Navbar */}
      <TopNavbar
        state="default"
        leftContent={
          <div className="flex items-center gap-[16px]">
            <OlameeLogo />
            <SearchBar placeholder="Search" className="w-[300px]" />
          </div>
        }
        rightContent={
          <div className="flex items-center gap-[8px]">
            <Button hierarchy="primary" colorScheme="violet" size="small">
              <i className="fa-regular fa-plus text-[12px]" /> Create
            </Button>
            <IconButton hierarchy="secondary" colorScheme="dark" size="md" aria-label="Notifications" icon={<i className="fa-regular fa-bell" />} />
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#7A5FFF]">
                <Text as="span" variant="body-xs" weight="medium" className="text-[#FDFDFE]">E</Text>
              </div>
              <span className="font-body text-[14px] text-[#30343F]">Ola, Evan!</span>
            </div>
          </div>
        }
      />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar sections={SIDEBAR_SECTIONS} activeTab="Payments" theme="purple" collapsed />

        {/* Page content */}
        <div className="flex-1 overflow-auto p-[32px]">
          {/* ─── Title Row ─────────────────────────────────────── */}
          <div className="flex items-center justify-between mb-[32px]">
            <Text variant="h3" weight="bold" className="text-[#30343F]">
              Payroll Dashboard
            </Text>
            <div className="flex items-center gap-[16px]">
              {/* Pay Period */}
              <div className="flex items-center gap-[8px]">
                <Text as="span" variant="body-base" className="text-[#8D8F97]">Pay Period</Text>
                <div className="flex items-center gap-[8px] h-[36px] px-[12px] border border-[#D7D8DC] rounded-[10px] bg-[#FDFDFE]">
                  <i className="fa-regular fa-calendar text-[14px] text-[#30343F]" />
                  <Text as="span" variant="body-base" className="text-[#30343F]">Jan. 1 - Jan. 15, 2026</Text>
                </div>
              </div>
              {/* Nav arrows */}
              <div className="flex items-center gap-[8px]">
                <IconButton hierarchy="secondary" colorScheme="dark" size="sm" aria-label="Previous period" icon={<i className="fa-regular fa-chevron-left" />} />
                <IconButton hierarchy="secondary" colorScheme="dark" size="sm" aria-label="Next period" icon={<i className="fa-regular fa-chevron-right" />} />
              </div>
              {/* Divider + Settings */}
              <div className="w-[1px] h-[24px] bg-[#D7D8DC]" />
              <IconButton hierarchy="secondary" colorScheme="dark" size="sm" aria-label="Settings" icon={<i className="fa-regular fa-gear" />} />
            </div>
          </div>

          {/* ─── Summary Cards Row ─────────────────────────────── */}
          <div className="flex gap-[24px] mb-[32px] border border-[#D7D8DC] rounded-[12px] p-[16px] bg-[#FDFDFE]">
            {/* Total Payroll Card */}
            <div
              className="flex flex-col gap-[16px] p-[16px] rounded-[12px] shrink-0"
              style={{ backgroundImage: 'linear-gradient(56deg, #7A5FFF 30%, #6FE3C1 98%)' }}
            >
              <div className="flex flex-col gap-[12px]">
                <Text as="span" variant="body-base" weight="medium" className="text-[#FDFDFE] tracking-[-0.175px]">
                  Total Payroll
                </Text>
                <Text as="span" variant="h4" weight="bold" className="font-heading text-[#FDFDFE]">
                  <Text as="span" weight="semibold">$</Text> 39,293.02
                </Text>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex items-center gap-[10px] h-[36px] px-[12px] py-[8px] rounded-[8px] bg-[rgba(225,219,255,0.3)]">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#FDFDFE]">Salaried</Text>
                  <Text as="span" variant="body-base" weight="bold" className="text-[#FDFDFE]">$ 19,032.30</Text>
                </div>
                <div className="flex items-center gap-[10px] h-[36px] px-[12px] py-[8px] rounded-[8px] bg-[rgba(225,219,255,0.3)]">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#FDFDFE]">Hourly</Text>
                  <Text as="span" variant="body-base" weight="bold" className="text-[#FDFDFE]">$ 18,492.30</Text>
                </div>
              </div>
            </div>

            {/* Total Adjustments Card */}
            <div className="flex-1 flex flex-col gap-[16px] p-[16px] rounded-[12px] bg-[#F5F6F8] min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[12px]">
                  <Text as="span" variant="body-base" className="text-[#30343F]">
                    Total Adjustments
                  </Text>
                  <Text as="span" variant="h4" weight="semibold" className="font-heading text-[#30343F]">
                    $ 9,293.02
                  </Text>
                </div>
                <div className="flex gap-[8px]">
                  <IconButton
                    hierarchy="tertiary"
                    size="xs"
                    colorScheme="dark"
                    onClick={() => scrollAdjustments('left')}
                    icon={<i className="fa-solid fa-chevron-left text-[10px]" />}
                    aria-label="Scroll left"
                  />
                  <IconButton
                    hierarchy="tertiary"
                    size="xs"
                    colorScheme="dark"
                    onClick={() => scrollAdjustments('right')}
                    icon={<i className="fa-solid fa-chevron-right text-[10px]" />}
                    aria-label="Scroll right"
                  />
                </div>
              </div>
              <div
                ref={adjustmentsScrollRef}
                className="flex gap-[16px] overflow-x-auto scrollbar-hide"
              >
                {ADJUSTMENTS.map((adj, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-[10px] h-[36px] px-[12px] py-[8px] rounded-[8px] border border-[#B2B4BA] bg-[#FDFDFE] shrink-0"
                  >
                    <Text as="span" variant="body-xs" className="text-[#30343F]">{adj.label}</Text>
                    <Text as="span" variant="body-base" weight="bold" className="text-[#30343F]">{adj.amount}</Text>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Action Buttons Row ─────────────────────────────── */}
          <div className="flex items-center justify-between mb-[32px]">
            <div className="flex items-center gap-[12px]">
              <Button hierarchy="secondary" colorScheme="dark" size="small">
                <i className="fa-regular fa-sliders text-[12px]" /> Adjustments
              </Button>
              <Button hierarchy="secondary" colorScheme="dark" size="small">
                <i className="fa-regular fa-arrows-rotate text-[12px]" /> Sync Time
              </Button>
            </div>
            <div className="flex items-center gap-[12px]">
              <Button hierarchy="primary" colorScheme="violet" size="small">
                <i className="fa-regular fa-paper-plane text-[12px]" /> Submit Payroll
              </Button>
              <Button hierarchy="secondary" colorScheme="dark" size="small">
                <i className="fa-regular fa-circle-check text-[12px]" /> Mark as Paid
              </Button>
            </div>
          </div>

          {/* ─── Table Section (matches ComponentShowcase table pattern) ── */}
          <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[28px] p-[24px] flex flex-col gap-[16px] shadow-[0_1px_3px_1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Table Tabs */}
            <div className="flex items-start overflow-x-auto">
              {TABS.map((tab) => (
                <Button
                  key={tab}
                  hierarchy="tertiary"
                  colorScheme="dark"
                  size="small"
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center justify-center h-[32px] px-[12px] min-w-[90px] max-w-[240px] shrink-0 whitespace-nowrap font-body tracking-[-0.384px] text-[16px] leading-[20px] transition-colors rounded-none ${
                    activeTab === tab
                      ? 'border-b-[3px] border-[#7A5FFF] font-bold text-[#6F54EB]'
                      : 'border-b border-[#D7D8DC] font-medium text-[#30343F] hover:text-[#6F54EB]'
                  }`}
                >
                  {tab}
                </Button>
              ))}
              <div className="flex-1 border-b border-[#D7D8DC] h-[32px]" />
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <IconButton
                  hierarchy="secondary"
                  size="sm"
                  colorScheme="dark"
                  icon={<i className="fa-regular fa-filter text-[14px]" />}
                  aria-label="Filter"
                />
                <div className="w-0 h-[24px] border-l border-[#D7D8DC]" />
                <SearchBar
                  placeholder="Search for team member"
                  className="w-[403px]"
                />
              </div>
              <IconButton
                hierarchy="secondary"
                size="sm"
                colorScheme="dark"
                icon={<i className="fa-regular fa-list text-[14px]" />}
                aria-label="List view"
              />
            </div>

            {/* Selection info */}
            <div className="font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
              {selectedIds.size} out of {filteredEmployees.length} selected
              {' · '}
              <Button
                hierarchy="tertiary"
                colorScheme="violet"
                size="xsmall"
                onClick={selectAll}
                className="inline p-0 h-auto hover:underline"
              >
                Select Everyone
              </Button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#EFF0F3]">
                    <th className="w-[40px] px-[8px] py-[11px] text-left">
                      <Checkbox
                        checked={selectedIds.size === filteredEmployees.length && filteredEmployees.length > 0}
                        onCheckedChange={selectAll}
                      />
                    </th>
                    {payrollColumns.map(col => (
                      <th
                        key={col.key}
                        className={`${col.width} px-[16px] py-[11px] text-left font-body font-medium text-[14px] leading-[18px] text-[#30343F]`}
                      >
                        <div className="flex items-center gap-[8px]">
                          {col.label}
                          <i className="fa-regular fa-ellipsis-vertical text-[12px] text-[#8D8F97]" />
                        </div>
                      </th>
                    ))}
                    <th className="w-[54px]" />
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((emp, idx) => (
                    <tr
                      key={emp.id}
                      className={`border-t border-[#EFF0F3] ${
                        selectedIds.has(emp.id) ? 'bg-[#F5F3FF]' : idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                      } hover:bg-[#F5F3FF] transition-colors`}
                    >
                      <td className="px-[8px] py-[8px]">
                        <Checkbox
                          checked={selectedIds.has(emp.id)}
                          onCheckedChange={() => toggleSelect(emp.id)}
                        />
                      </td>
                      {/* Team Members */}
                      <td className="px-[16px] py-[8px]">
                        <div className="flex items-center gap-[16px]">
                          <div
                            className="size-[14px] rounded-full shrink-0"
                            style={{ backgroundColor: emp.avatarColor }}
                          />
                          <Text as="span" variant="body-xs" className="text-[#30343F] truncate">
                            {emp.name}
                          </Text>
                          {emp.hasFlag && (
                            <i className="fa-solid fa-flag text-[10px] text-[#FF9F1C] shrink-0" />
                          )}
                          {emp.hasEdit && (
                            <i className="fa-regular fa-pen-to-square text-[10px] text-[#B2B4BA] shrink-0" />
                          )}
                        </div>
                      </td>
                      {/* Type */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                        {emp.type}
                      </td>
                      {/* Payroll Schedule */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F] whitespace-nowrap">
                        {emp.payrollSchedule}
                      </td>
                      {/* Pay Rate */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                        ${emp.payRate.toFixed(2)}
                      </td>
                      {/* Bill Rate */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                        ${emp.billRate.toFixed(2)}
                      </td>
                      {/* Status */}
                      <td className="px-[16px] py-[8px]">
                        <Tag color={STATUS_TAG_COLOR[emp.status]} size="small">
                          {emp.status}
                        </Tag>
                      </td>
                      {/* Tracked Activity */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F] whitespace-nowrap">
                        {emp.trackedActivity}
                      </td>
                      {/* Tracked Amount */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                        ${emp.trackedAmount.toFixed(2)}
                      </td>
                      {/* Time Off */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                        ${emp.timeOff.toFixed(2)}
                      </td>
                      {/* Time Edits */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] whitespace-nowrap"
                        style={{ color: emp.timeEditsColor === 'green' ? '#438137' : '#D62839' }}
                      >
                        {emp.timeEdits}
                      </td>
                      {/* Adjustments */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] whitespace-nowrap"
                        style={{ color: emp.adjustmentsSign === '+' ? '#438137' : '#D62839' }}
                      >
                        {emp.adjustmentsSign} ${emp.adjustments.toFixed(2)}
                      </td>
                      {/* Total Hours */}
                      <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                        —
                      </td>
                      {/* Action */}
                      <td className="px-[16px] py-[8px]">
                        <IconButton
                          hierarchy="tertiary"
                          size="xs"
                          colorScheme="dark"
                          icon={<i className="fa-regular fa-ellipsis-vertical text-[12px]" />}
                          aria-label="More actions"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <Text as="span" variant="body-base" className="text-[#30343F]">
                Showing {filteredEmployees.length} out of 200 results
              </Text>
              <div className="flex items-center gap-[12px]">
                <div className="flex items-center gap-[8px]">
                  <IconButton hierarchy="tertiary" size="xs" colorScheme="dark" icon={<i className="fa-regular fa-angles-left text-[10px]" />} aria-label="First page" className="opacity-75" />
                  <IconButton hierarchy="tertiary" size="xs" colorScheme="dark" icon={<i className="fa-solid fa-chevron-left text-[10px]" />} aria-label="Previous page" className="opacity-75" />
                </div>
                <Text as="span" variant="body-base" className="text-[#30343F] whitespace-nowrap">
                  Page 1 of 14
                </Text>
                <div className="flex items-center gap-[8px]">
                  <IconButton hierarchy="tertiary" size="xs" colorScheme="dark" icon={<i className="fa-solid fa-chevron-right text-[10px]" />} aria-label="Next page" />
                  <IconButton hierarchy="tertiary" size="xs" colorScheme="dark" icon={<i className="fa-regular fa-angles-right text-[10px]" />} aria-label="Last page" />
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <Text as="span" variant="body-base" className="text-[#30343F] whitespace-nowrap">
                  Go to Page:
                </Text>
                <Input
                  defaultValue="1"
                  className="w-[48px] h-[24px] rounded-[6px] text-center text-[12px]"
                />
                <Text as="span" variant="body-xs" weight="medium" className="text-[#30343F]">Show 15</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
