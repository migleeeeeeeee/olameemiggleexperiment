import { useState } from 'react';
import {
  TopNavbar,
  Sidebar,
  SearchBar,
  Button,
  IconButton,
  Text,
  Checkbox,
  Tag,
  Tabs,
  Tab,
  Input,
} from '@/design-system';
import type { SidebarSection } from '@/design-system';
import { getApplicantAvatar } from '@/design-system/assets/applicant-avatars';

/* ─── Olamee gradient logo ──────────────────────────────────── */

function OlameeLogo() {
  return (
    <svg width="117" height="50" viewBox="0 0 117 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5758 40.0782C37.2717 41.0522 36.8676 41.9834 36.3636 42.8715C35.0926 45.0838 33.3318 46.8318 31.0811 48.1155C28.8304 49.3718 26.3149 50 23.5346 50C20.7279 50 18.1992 49.3718 15.9485 48.1155C14.3566 47.2075 13.0032 46.0605 11.8882 44.6744L15.0219 42.3771C15.8358 43.4002 16.8199 44.2479 17.9741 44.92C19.6423 45.8759 21.4958 46.3538 23.5346 46.3538C25.5735 46.3538 27.4006 45.8759 29.0158 44.92C30.6574 43.964 31.9416 42.653 32.8684 40.987C33.2232 40.3566 33.5119 39.6998 33.7347 39.0166L37.5758 40.0782Z" fill="url(#ap_g0)"/>
      <path d="M25.2901 31.0081C25.2901 31.7027 25.4585 32.2441 25.7952 32.6323C26.1517 33 26.6469 33.1839 27.2807 33.1839C27.5184 33.1839 27.756 33.1532 27.9937 33.0919C28.2512 33.0306 28.4493 32.9591 28.588 32.8774L28.7959 36.5855C28.0234 36.851 27.2213 36.9838 26.3894 36.9838C24.587 36.9838 23.1807 36.4935 22.1706 35.5129C21.1604 34.5118 20.6554 33.1021 20.6554 31.2839V14H25.2901V31.0081Z" fill="url(#ap_g1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.79414 16.8639C10.4777 16.8639 11.983 17.2316 13.31 17.9671C14.6371 18.6822 15.6769 19.6832 16.4296 20.9703C17.1822 22.2574 17.5586 23.7182 17.5586 25.3526C17.5586 26.987 17.1822 28.4478 16.4296 29.7348C15.6769 31.0219 14.6371 32.0332 13.31 32.7687C11.983 33.4837 10.4777 33.8413 8.79414 33.8413C7.11058 33.8413 5.59535 33.4837 4.24851 32.7687C2.92147 32.0332 1.8816 31.0219 1.12895 29.7348C0.376307 28.4478 6.1839e-06 26.987 0 25.3526C0 23.7182 0.3763 22.2574 1.12895 20.9703C1.8816 19.6832 2.92147 18.6822 4.24851 17.9671C5.59535 17.2316 7.11058 16.8639 8.79414 16.8639ZM8.79414 20.7865C7.60575 20.7865 6.62533 21.2053 5.85288 22.0429C5.08042 22.8601 4.69419 23.9634 4.69419 25.3526C4.6942 26.7418 5.08042 27.8553 5.85288 28.6929C6.62533 29.5101 7.60576 29.9187 8.79414 29.9187C9.98253 29.9187 10.9531 29.5101 11.7058 28.6929C12.4782 27.8553 12.8644 26.7418 12.8644 25.3526C12.8644 23.9634 12.4782 22.8601 11.7058 22.0429C10.9531 21.2052 9.98253 20.7865 8.79414 20.7865Z" fill="url(#ap_g2)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5865 16.8639C39.6266 16.8639 41.221 17.5278 42.3698 18.8558V17.109H47.0045V33.5961H42.5778V31.6961C41.429 33.1262 39.7652 33.8413 37.5865 33.8413C36.0812 33.8413 34.7145 33.494 33.4865 32.7993C32.2783 32.1047 31.3276 31.1138 30.6343 29.8267C29.9411 28.5397 29.5946 27.0483 29.5946 25.3526C29.5946 23.6569 29.9411 22.1655 30.6343 20.8784C31.3276 19.5913 32.2783 18.6004 33.4865 17.9058C34.7145 17.2112 36.0812 16.8639 37.5865 16.8639ZM38.3887 20.7865C37.2003 20.7865 36.2198 21.2052 35.4474 22.0429C34.6749 22.8601 34.2887 23.9634 34.2887 25.3526C34.2887 26.7418 34.6749 27.8553 35.4474 28.6929C36.2198 29.5101 37.2003 29.9187 38.3887 29.9187C39.5573 29.9186 40.5278 29.5101 41.3002 28.6929C42.0727 27.8553 42.4589 26.7418 42.4589 25.3526C42.4589 23.9634 42.0727 22.8601 41.3002 22.0429C40.5278 21.2053 39.5573 20.7865 38.3887 20.7865Z" fill="url(#ap_g3)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M89.9994 16.8608C91.5245 16.8608 92.911 17.1979 94.1588 17.872C95.4066 18.5258 96.3969 19.4861 97.1298 20.7527C97.8824 21.999 98.2587 23.4802 98.2587 25.1963L86.4342 27.5559C86.771 28.3731 87.2958 28.986 88.0088 29.3946C88.7416 29.8032 89.633 30.0076 90.6827 30.0076C91.5146 30.0076 92.2475 29.8849 92.8813 29.6398C93.5349 29.3742 94.139 28.9656 94.6936 28.414L97.1595 31.1721C95.6542 32.9495 93.4557 33.8382 90.5639 33.8382C88.7615 33.8382 87.1671 33.4807 85.7806 32.7656C84.3942 32.0301 83.3245 31.0189 82.5719 29.7318C81.8192 28.4447 81.4429 26.9839 81.4429 25.3495C81.4429 23.7356 81.8094 22.285 82.5422 20.9979C83.2949 19.6904 84.3149 18.6791 85.6023 17.964C86.9096 17.2286 88.3753 16.8608 89.9994 16.8608ZM89.9994 20.4769C88.8308 20.4769 87.8801 20.8651 87.1472 21.6414C86.4144 22.4177 86.0282 23.4903 85.9886 24.8592L93.7726 23.2963C93.5547 22.4382 93.109 21.7538 92.4356 21.243C91.7622 20.7323 90.9501 20.4769 89.9994 20.4769Z" fill="url(#ap_g4)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M108.741 16.8608C110.266 16.8608 111.652 17.1979 112.9 17.872C114.148 18.5258 115.138 19.4861 115.871 20.7527C116.624 21.999 117 23.4802 117 25.1963L105.175 27.5559C105.512 28.3731 106.037 28.986 106.75 29.3946C107.483 29.8032 108.374 30.0076 109.424 30.0076C110.256 30.0076 110.989 29.8849 111.623 29.6398C112.276 29.3742 112.88 28.9656 113.435 28.414L115.901 31.1721C114.395 32.9495 112.197 33.8382 109.305 33.8382C107.503 33.8382 105.908 33.4807 104.522 32.7656C103.135 32.0301 102.066 31.0189 101.313 29.7318C100.56 28.4447 100.184 26.9839 100.184 25.3495C100.184 23.7356 100.551 22.285 101.283 20.9979C102.036 19.6904 103.056 18.6791 104.344 17.964C105.651 17.2286 107.117 16.8608 108.741 16.8608ZM108.741 20.4769C107.572 20.4769 106.621 20.8651 105.888 21.6414C105.156 22.4177 104.769 23.4903 104.73 24.8592L112.514 23.2963C112.296 22.4382 111.85 21.7538 111.177 21.243C110.503 20.7323 109.691 20.4769 108.741 20.4769Z" fill="url(#ap_g5)"/>
      <path d="M71.7652 16.8608C73.7657 16.8608 75.3503 17.4737 76.5189 18.6995C77.7073 19.9048 78.3014 21.7231 78.3015 24.1543V33.593H73.6667V24.8898C73.6667 23.5823 73.3993 22.6119 72.8645 21.9786C72.3496 21.3248 71.6068 20.9979 70.6363 20.9979C69.5469 20.9979 68.6853 21.3656 68.0515 22.1011C67.4177 22.8162 67.1008 23.8888 67.1008 25.3189V33.593H62.466V24.8898C62.466 22.2952 61.4559 20.9979 59.4356 20.9979C58.366 20.9979 57.5144 21.3656 56.8805 22.1011C56.2467 22.8162 55.9298 23.8888 55.9298 25.3189V33.593H51.2951V17.1059H55.7219V19.006C56.3161 18.3113 57.039 17.7802 57.8907 17.4124C58.7622 17.0447 59.7129 16.8608 60.7428 16.8608C61.8718 16.8608 62.8919 17.0958 63.803 17.5657C64.7141 18.0151 65.447 18.6791 66.0015 19.5576C66.6552 18.6995 67.4771 18.0355 68.4675 17.5657C69.4776 17.0958 70.5768 16.8608 71.7652 16.8608Z" fill="url(#ap_g6)"/>
      <defs>
        {[0,1,2,3,4,5,6].map(i => (
          <linearGradient key={i} id={`ap_g${i}`} x1="-3.71523" y1="51.5829" x2="109.146" y2="-12.1177" gradientUnits="userSpaceOnUse">
            <stop offset="0.159" stopColor="#7A5FFF"/>
            <stop offset="0.774" stopColor="#5ED4B2"/>
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}

/* ─── Types ──────────────────────────────────────────────────── */

type ApplicantStatus = 'Invited' | 'Pending' | 'Slot Selected' | 'Scheduled' | 'Interviewed' | 'Recommended' | 'Approved' | 'Hired' | 'Incomplete' | 'Rejected';

interface Assessment {
  name: string;
  version: string;
  color: string;
}

interface Applicant {
  id: string;
  name: string;
  avatarColor: string;
  initials: string;
  hasPortfolio: boolean;
  hasEmail: boolean;
  hasVideo: boolean;
  hasPhone: boolean;
  jobListing: string;
  tags: string[];
  extraTags: number;
  country: string;
  status: ApplicantStatus;
  dateApplied: string;
  assessments: Assessment[];
}

/* ─── Status config (icon + color) ─────────────────────────── */

const STATUS_CONFIG: Record<ApplicantStatus, { icon: string; color: string; flip?: boolean }> = {
  Invited:        { icon: 'fa-light fa-business-time', color: '#CC8017' },
  Pending:        { icon: 'fa-light fa-business-time', color: '#CC8017' },
  'Slot Selected':{ icon: 'fa-light fa-video',         color: '#7A5FFF', flip: true },
  Scheduled:      { icon: 'fa-light fa-video',         color: '#7A5FFF', flip: true },
  Interviewed:    { icon: 'fa-light fa-video',         color: '#7A5FFF', flip: true },
  Recommended:    { icon: 'fa-light fa-handshake',     color: '#438137' },
  Approved:       { icon: 'fa-light fa-handshake',     color: '#438137' },
  Hired:          { icon: 'fa-light fa-handshake',     color: '#438137' },
  Incomplete:     { icon: 'fa-light fa-circle-xmark',  color: '#D62839' },
  Rejected:       { icon: 'fa-light fa-circle-xmark',  color: '#D62839' },
};

/* ─── Mock Data ──────────────────────────────────────────────── */

const APPLICANTS: Applicant[] = [
  { id: '1', name: 'Leo Andrade', avatarColor: '#7A5FFF', initials: 'LA', hasPortfolio: true, hasEmail: true, hasVideo: true, hasPhone: false, jobListing: 'Xactimate Estimator', tags: ['SQL', 'HTML'], extraTags: 3, country: 'Philippines', status: 'Invited', dateApplied: 'March 28, 2024', assessments: [{ name: 'B', version: '2.0', color: '#7A5FFF' }, { name: 'B', version: '2.0', color: '#7A5FFF' }] },
  { id: '2', name: 'Felbie Marie Manigos', avatarColor: '#5ED4B2', initials: 'FM', hasPortfolio: false, hasEmail: true, hasVideo: true, hasPhone: false, jobListing: 'Full-Time Home-based Job', tags: ['Tableau', 'Jira'], extraTags: 3, country: 'Philippines', status: 'Pending', dateApplied: 'February 15, 2024', assessments: [{ name: 'A', version: '2.0', color: '#5FB54E' }, { name: 'E', version: '1.0', color: '#D62839' }] },
  { id: '3', name: 'Justin Saris', avatarColor: '#FF9F1C', initials: 'JS', hasPortfolio: false, hasEmail: true, hasVideo: false, hasPhone: true, jobListing: 'Software Engineer', tags: ['SQL', 'Graph...'], extraTags: 3, country: 'Philippines', status: 'Slot Selected', dateApplied: 'January 10, 2024', assessments: [{ name: 'B', version: '1.0', color: '#18E8FF' }, { name: 'B', version: '1.0', color: '#18E8FF' }] },
  { id: '4', name: 'Mira George', avatarColor: '#EAD94C', initials: 'MG', hasPortfolio: false, hasEmail: false, hasVideo: true, hasPhone: false, jobListing: 'Data Scientist', tags: ['Graph...', 'Jira'], extraTags: 3, country: 'Mexico', status: 'Scheduled', dateApplied: 'December 29, 2023', assessments: [{ name: 'C', version: '2.0', color: '#EAD94C' }, { name: 'C', version: '2.0', color: '#EAD94C' }] },
  { id: '5', name: 'Maren Stanton', avatarColor: '#5FB54E', initials: 'MS', hasPortfolio: false, hasEmail: true, hasVideo: true, hasPhone: false, jobListing: 'Graphic Designer', tags: ['Photoshop', 'Tableau'], extraTags: 3, country: 'Philippines', status: 'Interviewed', dateApplied: 'November 3, 2023', assessments: [{ name: 'D', version: '2.0', color: '#FF9F1C' }, { name: 'D', version: '2.0', color: '#FF9F1C' }] },
  { id: '6', name: 'Desirae George', avatarColor: '#D62839', initials: 'DG', hasPortfolio: false, hasEmail: false, hasVideo: false, hasPhone: false, jobListing: 'Project Manager', tags: [], extraTags: 0, country: 'Philippines', status: 'Recommended', dateApplied: 'October 11, 2023', assessments: [{ name: 'A', version: '2.0', color: '#5FB54E' }, { name: 'A', version: '2.0', color: '#5FB54E' }] },
  { id: '7', name: 'Abram Philips', avatarColor: '#18E8FF', initials: 'AP', hasPortfolio: false, hasEmail: true, hasVideo: false, hasPhone: false, jobListing: 'Marketing Specialist', tags: ['SQL', 'Jira'], extraTags: 3, country: 'Philippines', status: 'Approved', dateApplied: 'September 25, 2023', assessments: [{ name: 'B', version: '1.0', color: '#18E8FF' }, { name: 'B', version: '1.0', color: '#18E8FF' }] },
  { id: '8', name: 'Ahmad Schleifer', avatarColor: '#A30B37', initials: 'AS', hasPortfolio: false, hasEmail: true, hasVideo: false, hasPhone: false, jobListing: 'Sales Executive', tags: ['Analytics', 'SQL'], extraTags: 3, country: 'Philippines', status: 'Hired', dateApplied: 'August 9, 2023', assessments: [{ name: 'A', version: '2.0', color: '#5FB54E' }, { name: 'A', version: '2.0', color: '#5FB54E' }] },
  { id: '9', name: 'Phillip Mango', avatarColor: '#646F58', initials: 'PM', hasPortfolio: true, hasEmail: true, hasVideo: false, hasPhone: false, jobListing: 'Content Writer', tags: ['Figma', 'Graph...'], extraTags: 3, country: 'Mexico', status: 'Incomplete', dateApplied: 'July 14, 2023', assessments: [{ name: 'D', version: '2.0', color: '#FF9F1C' }, { name: 'D', version: '2.0', color: '#FF9F1C' }] },
  { id: '10', name: 'Leo Septimus', avatarColor: '#7A5FFF', initials: 'LS', hasPortfolio: false, hasEmail: true, hasVideo: true, hasPhone: false, jobListing: 'Web Developer', tags: ['SQL', 'Jira'], extraTags: 3, country: 'Mexico', status: 'Slot Selected', dateApplied: 'June 30, 2023', assessments: [{ name: 'A', version: '2.0', color: '#5FB54E' }, { name: 'A', version: '2.0', color: '#5FB54E' }] },
  { id: '11', name: 'Nolan Botosh', avatarColor: '#5ED4B2', initials: 'NB', hasPortfolio: false, hasEmail: false, hasVideo: false, hasPhone: false, jobListing: 'UX Researcher', tags: [], extraTags: 0, country: 'Mexico', status: 'Rejected', dateApplied: 'May 22, 2023', assessments: [{ name: 'E', version: '1.0', color: '#D62839' }, { name: 'E', version: '1.0', color: '#D62839' }] },
  { id: '12', name: 'Kadin Rhiel Madsen', avatarColor: '#FF9F1C', initials: 'KM', hasPortfolio: false, hasEmail: true, hasVideo: false, hasPhone: false, jobListing: 'Business Analyst', tags: ['AWS', 'HTML'], extraTags: 3, country: 'Mexico', status: 'Approved', dateApplied: 'April 18, 2023', assessments: [{ name: 'C', version: '2.0', color: '#EAD94C' }, { name: 'C', version: '2.0', color: '#EAD94C' }] },
  { id: '13', name: 'Kadin Kenter', avatarColor: '#EAD94C', initials: 'KK', hasPortfolio: false, hasEmail: true, hasVideo: true, hasPhone: false, jobListing: 'Network Administrator', tags: ['Graph...', 'AWS'], extraTags: 3, country: 'Philippines', status: 'Rejected', dateApplied: 'February 20, 2023', assessments: [{ name: 'A', version: '1.0', color: '#5FB54E' }, { name: 'A', version: '1.0', color: '#5FB54E' }] },
  { id: '14', name: 'Giana Press', avatarColor: '#5FB54E', initials: 'GP', hasPortfolio: false, hasEmail: true, hasVideo: false, hasPhone: true, jobListing: 'Systems Analyst', tags: ['Analytics', 'SQL'], extraTags: 3, country: 'Philippines', status: 'Approved', dateApplied: 'January 15, 2023', assessments: [{ name: 'D', version: '2.0', color: '#FF9F1C' }, { name: 'D', version: '2.0', color: '#FF9F1C' }] },
  { id: '15', name: 'Lydia Calzoni', avatarColor: '#D62839', initials: 'LC', hasPortfolio: false, hasEmail: true, hasVideo: false, hasPhone: false, jobListing: 'QA Engineer', tags: ['SQL', 'Jira'], extraTags: 3, country: 'Philippines', status: 'Invited', dateApplied: 'December 5, 2022', assessments: [{ name: 'B', version: '2.0', color: '#7A5FFF' }, { name: 'B', version: '2.0', color: '#7A5FFF' }] },
];

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

/* ─── Sub-components ────────────────────────────────────────── */

function Avatar({ name }: { name: string }) {
  const avatarPath = getApplicantAvatar(name);
  return (
    <img
      src={avatarPath}
      alt={name}
      className="w-[18px] h-[18px] rounded-full shrink-0 object-cover"
    />
  );
}

function StatusBadge({ status }: { status: ApplicantStatus }) {
  const { icon, color, flip } = STATUS_CONFIG[status];
  return (
    <div className="flex items-center gap-[6px]">
      <i
        className={`${icon} text-[14px] shrink-0${flip ? ' -scale-x-100' : ''}`}
        style={{ color }}
      />
      <Text
        as="span"
        variant="body-base"
        className="whitespace-nowrap"
        style={{ color }}
      >
        {status}
      </Text>
    </div>
  );
}

function AssessmentCell({ assessment }: { assessment: Assessment }) {
  return (
    <div className="flex items-center gap-[8px]">
      <div
        className="w-[16px] h-[16px] rounded-full shrink-0"
        style={{ backgroundColor: assessment.color }}
      />
      <Text as="span" variant="body-base" className="text-[#30343F] whitespace-nowrap">
        {assessment.name} (V {assessment.version})
      </Text>
    </div>
  );
}


/* ─── Main Page Component ────────────────────────────────────── */

export default function Applicants() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(['1', '2']));
  const [activeTab, setActiveTab] = useState<'applicants' | 'talent-pool'>('applicants');
  const [listView, setListView] = useState<'grid' | 'list'>('list');

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (selectedIds.size === APPLICANTS.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(APPLICANTS.map((a) => a.id)));
    }
  };

  const deselectAll = () => setSelectedIds(new Set());

  return (
    <div className="flex flex-col h-screen bg-[#FDFDFE]">
      {/* Fixed Top Navbar (above everything) */}
      <TopNavbar
        state="on-going-call"
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

      {/* Main layout with sidebar + content (below navbar) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar sections={SIDEBAR_SECTIONS} activeTab="Applicants" theme="purple" collapsed />

        {/* Page content scrollable area */}
        <div className="flex-1 overflow-auto px-[32px] py-[32px]">
          {/* Title row */}
          <div className="flex items-center justify-between mb-[24px]">
            <Text variant="h3" weight="bold" className="text-[#30343F]">
              Applicants
            </Text>
            <div className="flex items-center gap-[6px] bg-[#E1DBFF] p-[4px] rounded-[12px]">
              <IconButton
                hierarchy="tertiary"
                colorScheme="violet"
                size="sm"
                onClick={() => setListView('grid')}
                className={listView === 'grid' ? 'bg-[#FDFDFE]' : 'bg-transparent'}
                icon={<i className="fa-regular fa-grid-2 text-[16px] text-[#7A5FFF]" />}
                aria-label="Grid view"
              />
              <IconButton
                hierarchy="tertiary"
                colorScheme="violet"
                size="sm"
                onClick={() => setListView('list')}
                className={listView === 'list' ? 'bg-[#FDFDFE]' : 'bg-transparent'}
                icon={<i className="fa-regular fa-list text-[16px] text-[#7A5FFF]" />}
                aria-label="List view"
              />
            </div>
          </div>

          {/* Tabs + actions row */}
          <div className="flex items-center justify-between mb-[16px]">
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'applicants' | 'talent-pool')}>
              <Tab value="applicants">Applicants</Tab>
              <Tab value="talent-pool">AW Talent Pool</Tab>
            </Tabs>

            {/* Action buttons */}
            <div className="flex items-center gap-[8px]">
              <Button hierarchy="primary" colorScheme="violet" size="small">
                <i className="fa-regular fa-plus text-[12px]" /> Add Applicant
              </Button>
              <Button hierarchy="secondary" colorScheme="dark" size="small">
                Pending Offers <i className="fa-regular fa-arrow-right text-[12px]" />
              </Button>
              <IconButton hierarchy="secondary" colorScheme="dark" size="sm" aria-label="Settings" icon={<i className="fa-regular fa-gear" />} />
            </div>
          </div>

          {/* Table card */}
          <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[16px] shadow-elevation-1 overflow-hidden">
            {/* Table header bar */}
            <div className="px-[32px] pt-[32px] pb-[16px]">
              {/* Title + search row */}
              <div className="flex items-center justify-between mb-[16px]">
                <Text variant="h5" weight="bold" className="text-[#30343F]">
                  Applicants' List
                </Text>
                <div className="flex items-center gap-[8px]">
                  <SearchBar placeholder="Search" className="w-[300px]" />
                  <IconButton hierarchy="secondary" colorScheme="dark" size="sm" aria-label="List view" icon={<i className="fa-regular fa-list" />} />
                  <IconButton hierarchy="secondary" colorScheme="dark" size="sm" aria-label="Filter" icon={<i className="fa-regular fa-filter" />} />
                </div>
              </div>

              {/* Selection toolbar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center pr-[8px] border-r border-[#D7D8DC]">
                    <Text as="span" variant="body-xs" className="text-[#6A6D76]">
                      {selectedIds.size} out of {APPLICANTS.length} selected
                    </Text>
                  </div>
                  <Button hierarchy="tertiary" colorScheme="dark" size="xsmall" leadIcon={<i className="fa-regular fa-paperclip text-[12px]" />}>
                    See Attachments
                  </Button>
                  <Button hierarchy="tertiary" colorScheme="dark" size="xsmall" leadIcon={<i className="fa-regular fa-envelope text-[12px]" />}>
                    Send Email
                  </Button>
                  <Button hierarchy="tertiary" colorScheme="dark" size="xsmall" leadIcon={<i className="fa-regular fa-user text-[12px]" />}>
                    Set Status
                  </Button>
                </div>
                <Button
                  hierarchy="tertiary"
                  colorScheme="destructive"
                  size="xsmall"
                  onClick={deselectAll}
                >
                  Deselect All
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              {/* Header row */}
              <div className="flex border-b border-[#EFF0F3] bg-[#FDFDFE] sticky top-0 z-10 min-w-[1400px]">
                <div className="flex items-center justify-center w-[50px] h-[40px] shrink-0">
                  <Checkbox
                    checked={selectedIds.size === APPLICANTS.length}
                    onChange={selectAll}
                  />
                </div>
                <div className="flex items-center gap-[4px] flex-[2] min-w-[200px] px-[16px] h-[40px]">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#6A6D76]">Applicant</Text>
                  <i className="fa-regular fa-sort text-[10px] text-[#8D8F97]" />
                </div>
                <div className="flex items-center gap-[4px] flex-[1.5] min-w-[150px] px-[16px] h-[40px]">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#6A6D76]">Job Listing</Text>
                  <i className="fa-regular fa-sort text-[10px] text-[#8D8F97]" />
                </div>
                <div className="flex items-center gap-[4px] flex-[1.5] min-w-[150px] px-[16px] h-[40px]">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#6A6D76]">Tags</Text>
                  <i className="fa-regular fa-sort text-[10px] text-[#8D8F97]" />
                </div>
                <div className="flex items-center gap-[4px] flex-1 min-w-[100px] px-[16px] h-[40px]">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#6A6D76]">Country</Text>
                  <i className="fa-regular fa-sort text-[10px] text-[#8D8F97]" />
                </div>
                <div className="flex items-center gap-[4px] flex-1 min-w-[120px] px-[16px] h-[40px]">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#6A6D76]">Status</Text>
                  <i className="fa-regular fa-sort text-[10px] text-[#8D8F97]" />
                </div>
                <div className="flex items-center gap-[4px] flex-1 min-w-[130px] px-[16px] h-[40px]">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#6A6D76]">Date Applied</Text>
                  <i className="fa-regular fa-sort text-[10px] text-[#8D8F97]" />
                </div>
                <div className="flex items-center gap-[4px] w-[146px] px-[16px] h-[40px] shrink-0">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#6A6D76] truncate">Assessment...</Text>
                  <i className="fa-regular fa-sort text-[10px] text-[#8D8F97]" />
                </div>
                <div className="flex items-center gap-[4px] w-[146px] px-[16px] h-[40px] shrink-0">
                  <Text as="span" variant="body-xs" weight="medium" className="text-[#6A6D76] truncate">Assessment...</Text>
                  <i className="fa-regular fa-sort text-[10px] text-[#8D8F97]" />
                </div>
              </div>

              {/* Data rows */}
              {APPLICANTS.map((applicant) => {
                const isSelected = selectedIds.has(applicant.id);
                return (
                  <div
                    key={applicant.id}
                    className={`flex border-b border-[#EFF0F3] min-w-[1400px] transition-colors ${
                      isSelected ? 'bg-[#F6F4FF]' : 'hover:bg-[#F9F9FB]'
                    }`}
                  >
                    {/* Checkbox */}
                    <div className="flex items-center justify-center w-[50px] h-[40px] shrink-0">
                      <Checkbox
                        checked={isSelected}
                        onChange={() => toggleSelect(applicant.id)}
                      />
                    </div>

                    {/* Applicant */}
                    <div className="flex items-center gap-[12px] flex-[2] min-w-[200px] px-[16px] h-[40px]">
                      <Avatar name={applicant.name} />
                      <Text as="span" variant="body-base" className="text-[#30343F] truncate">
                        {applicant.name}
                      </Text>
                      <div className="flex items-center gap-[4px] shrink-0">
                        {applicant.hasPortfolio && (
                          <i className="fa-regular fa-folder text-[12px] text-[#8D8F97]" />
                        )}
                        {applicant.hasEmail && (
                          <i className="fa-regular fa-envelope text-[12px] text-[#8D8F97]" />
                        )}
                        {applicant.hasVideo && (
                          <i className="fa-regular fa-video text-[12px] text-[#8D8F97]" />
                        )}
                        {applicant.hasPhone && (
                          <i className="fa-regular fa-phone text-[12px] text-[#8D8F97]" />
                        )}
                      </div>
                    </div>

                    {/* Job Listing */}
                    <div className="flex items-center flex-[1.5] min-w-[150px] px-[16px] h-[40px]">
                      <Text as="span" variant="body-base" className="text-[#30343F] truncate">
                        {applicant.jobListing}
                      </Text>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-[4px] flex-[1.5] min-w-[150px] px-[16px] h-[40px]">
                      {applicant.tags.length > 0 ? (
                        <>
                          {applicant.tags.map((tag) => (
                            <Tag key={tag} size="small">{tag}</Tag>
                          ))}
                          {applicant.extraTags > 0 && (
                            <Tag size="small" color="numbered">+{applicant.extraTags}</Tag>
                          )}
                        </>
                      ) : (
                        <Text as="span" variant="body-base" className="text-[#8D8F97]">-</Text>
                      )}
                    </div>

                    {/* Country */}
                    <div className="flex items-center flex-1 min-w-[100px] px-[16px] h-[40px]">
                      <Text as="span" variant="body-base" className="text-[#30343F]">
                        {applicant.country}
                      </Text>
                    </div>

                    {/* Status */}
                    <div className="flex items-center flex-1 min-w-[120px] px-[16px] h-[40px]">
                      <StatusBadge status={applicant.status} />
                    </div>

                    {/* Date Applied */}
                    <div className="flex items-center flex-1 min-w-[130px] px-[16px] h-[40px]">
                      <Text as="span" variant="body-base" className="text-[#30343F] whitespace-nowrap">
                        {applicant.dateApplied}
                      </Text>
                    </div>

                    {/* Assessment 1 */}
                    <div className="flex items-center w-[146px] px-[16px] h-[40px] shrink-0">
                      <AssessmentCell assessment={applicant.assessments[0]} />
                    </div>

                    {/* Assessment 2 */}
                    <div className="flex items-center w-[146px] px-[16px] h-[40px] shrink-0">
                      <AssessmentCell assessment={applicant.assessments[1]} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-[32px] py-[16px] border-t border-[#EFF0F3]">
              <Text as="span" variant="body-base" className="text-[#30343F]">
                Showing 15 out of 200 results
              </Text>

              <div className="flex items-center gap-[16px]">
                <IconButton hierarchy="tertiary" colorScheme="dark" size="sm" aria-label="First page" icon={<i className="fa-regular fa-angles-left text-[12px]" />} className="text-[#8D8F97]" />
                <IconButton hierarchy="tertiary" colorScheme="dark" size="sm" aria-label="Previous page" icon={<i className="fa-solid fa-chevron-left text-[12px]" />} className="text-[#8D8F97]" />
                <Text as="span" variant="body-base" className="text-[#30343F]">
                  Page 1 of 2
                </Text>
                <IconButton hierarchy="tertiary" colorScheme="dark" size="sm" aria-label="Next page" icon={<i className="fa-solid fa-chevron-right text-[12px]" />} />
                <IconButton hierarchy="tertiary" colorScheme="dark" size="sm" aria-label="Last page" icon={<i className="fa-regular fa-angles-right text-[12px]" />} />
              </div>

              <div className="flex items-center gap-[16px]">
                <div className="flex items-center gap-[8px]">
                  <Text as="span" variant="body-base" className="text-[#30343F]">Go to Page:</Text>
                  <Input
                    type="text"
                    defaultValue="1"
                    inputSize="extraSmall"
                    className="w-[64px]"
                  />
                </div>
                <div className="flex items-center justify-between w-[128px] h-[36px] px-[12px] bg-[#FDFDFE] border border-[#D7D8DC] rounded-[8px] cursor-pointer">
                  <Text as="span" variant="body-base" weight="medium" className="text-[#30343F]">Show 15</Text>
                  <i className="fa-solid fa-chevron-down text-[10px] text-[#8D8F97]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
