import { useState, useRef } from 'react';
import {
  TopNavbar,
  Sidebar,
  SearchBar,
  Button,
  IconButton,
  Text,
  Input,
  Chip,
  Checkbox,
  Textarea,
  Notification,
  Icon,
  SingleSelectDropdown,
} from '@/design-system';
import type { SidebarSection } from '@/design-system';

/* ─── Olamee gradient logo ──────────────────────────────────── */

function OlameeLogo() {
  return (
    <svg width="117" height="50" viewBox="0 0 117 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5758 40.0782C37.2717 41.0522 36.8676 41.9834 36.3636 42.8715C35.0926 45.0838 33.3318 46.8318 31.0811 48.1155C28.8304 49.3718 26.3149 50 23.5346 50C20.7279 50 18.1992 49.3718 15.9485 48.1155C14.3566 47.2075 13.0032 46.0605 11.8882 44.6744L15.0219 42.3771C15.8358 43.4002 16.8199 44.2479 17.9741 44.92C19.6423 45.8759 21.4958 46.3538 23.5346 46.3538C25.5735 46.3538 27.4006 45.8759 29.0158 44.92C30.6574 43.964 31.9416 42.653 32.8684 40.987C33.2232 40.3566 33.5119 39.6998 33.7347 39.0166L37.5758 40.0782Z" fill="url(#jd_g0)"/>
      <path d="M25.2901 31.0081C25.2901 31.7027 25.4585 32.2441 25.7952 32.6323C26.1517 33 26.6469 33.1839 27.2807 33.1839C27.5184 33.1839 27.756 33.1532 27.9937 33.0919C28.2512 33.0306 28.4493 32.9591 28.588 32.8774L28.7959 36.5855C28.0234 36.851 27.2213 36.9838 26.3894 36.9838C24.587 36.9838 23.1807 36.4935 22.1706 35.5129C21.1604 34.5118 20.6554 33.1021 20.6554 31.2839V14H25.2901V31.0081Z" fill="url(#jd_g1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.79414 16.8639C10.4777 16.8639 11.983 17.2316 13.31 17.9671C14.6371 18.6822 15.6769 19.6832 16.4296 20.9703C17.1822 22.2574 17.5586 23.7182 17.5586 25.3526C17.5586 26.987 17.1822 28.4478 16.4296 29.7348C15.6769 31.0219 14.6371 32.0332 13.31 32.7687C11.983 33.4837 10.4777 33.8413 8.79414 33.8413C7.11058 33.8413 5.59535 33.4837 4.24851 32.7687C2.92147 32.0332 1.8816 31.0219 1.12895 29.7348C0.376307 28.4478 6.1839e-06 26.987 0 25.3526C0 23.7182 0.3763 22.2574 1.12895 20.9703C1.8816 19.6832 2.92147 18.6822 4.24851 17.9671C5.59535 17.2316 7.11058 16.8639 8.79414 16.8639ZM8.79414 20.7865C7.60575 20.7865 6.62533 21.2053 5.85288 22.0429C5.08042 22.8601 4.69419 23.9634 4.69419 25.3526C4.6942 26.7418 5.08042 27.8553 5.85288 28.6929C6.62533 29.5101 7.60576 29.9187 8.79414 29.9187C9.98253 29.9187 10.9531 29.5101 11.7058 28.6929C12.4782 27.8553 12.8644 26.7418 12.8644 25.3526C12.8644 23.9634 12.4782 22.8601 11.7058 22.0429C10.9531 21.2052 9.98253 20.7865 8.79414 20.7865Z" fill="url(#jd_g2)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5865 16.8639C39.6266 16.8639 41.221 17.5278 42.3698 18.8558V17.109H47.0045V33.5961H42.5778V31.6961C41.429 33.1262 39.7652 33.8413 37.5865 33.8413C36.0812 33.8413 34.7145 33.494 33.4865 32.7993C32.2783 32.1047 31.3276 31.1138 30.6343 29.8267C29.9411 28.5397 29.5946 27.0483 29.5946 25.3526C29.5946 23.6569 29.9411 22.1655 30.6343 20.8784C31.3276 19.5913 32.2783 18.6004 33.4865 17.9058C34.7145 17.2112 36.0812 16.8639 37.5865 16.8639ZM38.3887 20.7865C37.2003 20.7865 36.2198 21.2052 35.4474 22.0429C34.6749 22.8601 34.2887 23.9634 34.2887 25.3526C34.2887 26.7418 34.6749 27.8553 35.4474 28.6929C36.2198 29.5101 37.2003 29.9187 38.3887 29.9187C39.5573 29.9186 40.5278 29.5101 41.3002 28.6929C42.0727 27.8553 42.4589 26.7418 42.4589 25.3526C42.4589 23.9634 42.0727 22.8601 41.3002 22.0429C40.5278 21.2053 39.5573 20.7865 38.3887 20.7865Z" fill="url(#jd_g3)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M89.9994 16.8608C91.5245 16.8608 92.911 17.1979 94.1588 17.872C95.4066 18.5258 96.3969 19.4861 97.1298 20.7527C97.8824 21.999 98.2587 23.4802 98.2587 25.1963L86.4342 27.5559C86.771 28.3731 87.2958 28.986 88.0088 29.3946C88.7416 29.8032 89.633 30.0076 90.6827 30.0076C91.5146 30.0076 92.2475 29.8849 92.8813 29.6398C93.5349 29.3742 94.139 28.9656 94.6936 28.414L97.1595 31.1721C95.6542 32.9495 93.4557 33.8382 90.5639 33.8382C88.7615 33.8382 87.1671 33.4807 85.7806 32.7656C84.3942 32.0301 83.3245 31.0189 82.5719 29.7318C81.8192 28.4447 81.4429 26.9839 81.4429 25.3495C81.4429 23.7356 81.8094 22.285 82.5422 20.9979C83.2949 19.6904 84.3149 18.6791 85.6023 17.964C86.9096 17.2286 88.3753 16.8608 89.9994 16.8608ZM89.9994 20.4769C88.8308 20.4769 87.8801 20.8651 87.1472 21.6414C86.4144 22.4177 86.0282 23.4903 85.9886 24.8592L93.7726 23.2963C93.5547 22.4382 93.109 21.7538 92.4356 21.243C91.7622 20.7323 90.9501 20.4769 89.9994 20.4769Z" fill="url(#jd_g4)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M108.741 16.8608C110.266 16.8608 111.652 17.1979 112.9 17.872C114.148 18.5258 115.138 19.4861 115.871 20.7527C116.624 21.999 117 23.4802 117 25.1963L105.175 27.5559C105.512 28.3731 106.037 28.986 106.75 29.3946C107.483 29.8032 108.374 30.0076 109.424 30.0076C110.256 30.0076 110.989 29.8849 111.623 29.6398C112.276 29.3742 112.88 28.9656 113.435 28.414L115.901 31.1721C114.395 32.9495 112.197 33.8382 109.305 33.8382C107.503 33.8382 105.908 33.4807 104.522 32.7656C103.135 32.0301 102.066 31.0189 101.313 29.7318C100.56 28.4447 100.184 26.9839 100.184 25.3495C100.184 23.7356 100.551 22.285 101.283 20.9979C102.036 19.6904 103.056 18.6791 104.344 17.964C105.651 17.2286 107.117 16.8608 108.741 16.8608ZM108.741 20.4769C107.572 20.4769 106.621 20.8651 105.888 21.6414C105.156 22.4177 104.769 23.4903 104.73 24.8592L112.514 23.2963C112.296 22.4382 111.85 21.7538 111.177 21.243C110.503 20.7323 109.691 20.4769 108.741 20.4769Z" fill="url(#jd_g5)"/>
      <path d="M71.7652 16.8608C73.7657 16.8608 75.3503 17.4737 76.5189 18.6995C77.7073 19.9048 78.3014 21.7231 78.3015 24.1543V33.593H73.6667V24.8898C73.6667 23.5823 73.3993 22.6119 72.8645 21.9786C72.3496 21.3248 71.6068 20.9979 70.6363 20.9979C69.5469 20.9979 68.6853 21.3656 68.0515 22.1011C67.4177 22.8162 67.1008 23.8888 67.1008 25.3189V33.593H62.466V24.8898C62.466 22.2952 61.4559 20.9979 59.4356 20.9979C58.366 20.9979 57.5144 21.3656 56.8805 22.1011C56.2467 22.8162 55.9298 23.8888 55.9298 25.3189V33.593H51.2951V17.1059H55.7219V19.006C56.3161 18.3113 57.039 17.7802 57.8907 17.4124C58.7622 17.0447 59.7129 16.8608 60.7428 16.8608C61.8718 16.8608 62.8919 17.0958 63.803 17.5657C64.7141 18.0151 65.447 18.6791 66.0015 19.5576C66.6552 18.6995 67.4771 18.0355 68.4675 17.5657C69.4776 17.0958 70.5768 16.8608 71.7652 16.8608Z" fill="url(#jd_g6)"/>
      <defs>
        {[0,1,2,3,4,5,6].map(i => (
          <linearGradient key={i} id={`jd_g${i}`} x1="-3.71523" y1="51.5829" x2="109.146" y2="-12.1177" gradientUnits="userSpaceOnUse">
            <stop offset="0.159" stopColor="#7A5FFF"/>
            <stop offset="0.774" stopColor="#5ED4B2"/>
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}

/* ─── Sidebar sections (canonical, never modify) ────────────── */

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

/* ─── Types ──────────────────────────────────────────────────── */

type EngagementType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Volunteer';
type WorkplaceType = 'Remote' | 'Onsite' | 'Hybrid';
type ActiveSection = 'job-details' | 'job-description';

/* ─── Collapsible Section Card ──────────────────────────────── */

interface SectionCardProps {
  icon: string;
  title: string;
  titleSuffix?: string;
  completionText?: string;
  expanded: boolean;
  onToggle: () => void;
  dashed?: boolean;
  dimmed?: boolean;
  children?: React.ReactNode;
}

function SectionCard({
  icon,
  title,
  titleSuffix,
  completionText,
  expanded,
  onToggle,
  dashed = false,
  dimmed = false,
  children,
}: SectionCardProps) {
  return (
    <div
      className={`relative overflow-clip rounded-[12px] min-w-[256px] ${
        dashed
          ? 'border border-dashed border-[#8D8F97]'
          : 'border border-solid border-[#D7D8DC] bg-[#FDFDFE]'
      }`}
    >
      {dimmed && (
        <div className="absolute inset-0 bg-[rgba(253,253,254,0.42)] z-10" />
      )}
      <div className="p-[16px]">
        <div className="flex flex-col gap-[16px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex gap-[8px] items-center">
              <Icon faClass={icon} size="sm" />
              <div className="flex gap-[4px] items-center">
                <Text
                  variant="h6"
                  weight="bold"
                  className={dashed ? 'text-[#6A6D76]' : 'text-[#30343F]'}
                >
                  {title}
                </Text>
                {titleSuffix && (
                  <Text variant="h6" className="text-[#8D8F97]">
                    {titleSuffix}
                  </Text>
                )}
              </div>
            </div>
            <div className="flex gap-[16px] items-center">
              {completionText && (
                <Text variant="body-base" weight="medium" className="text-[#8D8F97]">
                  {completionText}
                </Text>
              )}
              <button onClick={onToggle} className="p-[2px] cursor-pointer bg-transparent border-none">
                <i
                  className={`fa-solid ${
                    expanded ? 'fa-chevron-up' : 'fa-chevron-down'
                  } text-[10px] text-[#30343F]`}
                />
              </button>
            </div>
          </div>

          {/* Content */}
          {expanded && children && (
            <div className="flex flex-col gap-[24px]">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Rich Text Toolbar (static representation) ─────────────── */

function RichTextToolbar() {
  const buttons = [
    { group: 'history', items: ['fa-rotate-left', 'fa-rotate-right'] },
    { group: 'format', items: ['fa-bold', 'fa-italic', 'fa-underline', 'fa-font', 'fa-strikethrough', 'fa-subscript', 'fa-superscript', 'fa-text-slash'] },
    { group: 'align', items: ['fa-align-left', 'fa-align-right'] },
    { group: 'insert', items: ['fa-arrows-maximize', 'fa-code'] },
    { group: 'search', items: ['fa-magnifying-glass', 'fa-clone'] },
    { group: 'list', items: ['fa-link', 'fa-list-ul', 'fa-list-ol'] },
  ];

  return (
    <div className="flex items-center gap-[10px] border border-solid border-[#B2B4BA] bg-[#FDFDFE] rounded-t-[12px] px-[12px] py-[8px]">
      {buttons.map((group, gi) => (
        <div key={gi} className="flex items-center gap-[8px]">
          {group.items.map((icon, ii) => (
            <button
              key={ii}
              className="flex items-center justify-center size-[20px] rounded-[4px] bg-transparent border-none cursor-pointer hover:bg-[#EFF0F3]"
            >
              <i className={`fa-regular ${icon} text-[12px] text-[#30343F]`} />
            </button>
          ))}
          {gi < buttons.length - 1 && (
            <div className="w-0 h-[20px] border-l border-[#EFF0F3]" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Job Step Sidebar (inner, left nav) ─────────────────────── */

function JobStepSidebar({
  activeSection,
  onSectionChange,
}: {
  activeSection: ActiveSection;
  onSectionChange: (s: ActiveSection) => void;
}) {
  return (
    <div className="w-[151px] shrink-0 border border-solid border-[#D7D8DC] bg-[#FDFDFE] rounded-[16px] overflow-clip p-[16px] flex flex-col gap-[16px] items-center self-start">
      <button
        onClick={() => onSectionChange('job-details')}
        className={`flex gap-[4px] items-center h-[24px] w-[119px] px-[8px] rounded-[8px] border-none cursor-pointer ${
          activeSection === 'job-details' ? 'bg-[#C2B7FF]' : 'bg-transparent'
        }`}
      >
        <Icon faClass="fa-regular fa-id-badge" size="xs" />
        <Text
          variant="btn-xs"
          weight="medium"
          className={activeSection === 'job-details' ? 'text-[#3E2DA3]' : 'text-[#30343F]'}
        >
          Job Details
        </Text>
      </button>
      <button
        onClick={() => onSectionChange('job-description')}
        className={`flex gap-[4px] items-center h-[24px] w-[119px] px-[8px] rounded-[8px] border-none cursor-pointer ${
          activeSection === 'job-description' ? 'bg-[#C2B7FF]' : 'bg-transparent'
        }`}
      >
        <Icon faClass="fa-regular fa-file-lines" size="xs" />
        <Text
          variant="btn-xs"
          weight="medium"
          className={activeSection === 'job-description' ? 'text-[#3E2DA3]' : 'text-[#30343F]'}
        >
          Job Description
        </Text>
      </button>
    </div>
  );
}

/* ─── Write with AI Panel ────────────────────────────────────── */

function WriteWithAIPanel({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  if (!visible) return null;

  return (
    <div className="w-[376px] shrink-0 pt-[64px]">
      <div className="border border-solid border-[#D7D8DC] bg-[#FDFDFE] rounded-[12px] overflow-clip p-[16px]">
        <div className="flex flex-col gap-[16px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex gap-[8px] items-center">
              <Icon faClass="fa-regular fa-sparkles" size="xs" />
              <Text variant="body-lg" weight="bold" className="text-[#30343F]">
                Write with AI
              </Text>
            </div>
            <IconButton
              hierarchy="tertiary"
              colorScheme="dark"
              size="sm"
              aria-label="Close AI panel"
              icon={<i className="fa-regular fa-xmark" />}
              onClick={onClose}
            />
          </div>

          {/* Info notification */}
          <Notification
            type="info"
            description={
              <span>
                <strong>Write with AI</strong> uses your job details, compensation
                information, and any manually written description to generate the
                final job description.
              </span>
            }
          />

          {/* Additional details textarea */}
          <Textarea
            label="Additional details"
            placeholder="'Make it more casual','Make the requirements more objective'"
            textareaSize="extraSmall"
          />

          {/* Generate button */}
          <Button
            hierarchy="primary"
            colorScheme="ai"
            size="small"
            className="w-full"
            leadIcon={<i className="fa-regular fa-sparkles" />}
          >
            Write Job Description
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── Optional Fields Section ────────────────────────────────── */

function OptionalFieldsSection({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-dashed border-[#B2B4BA] rounded-[12px] min-w-[256px] overflow-clip p-[16px]">
      <div className="flex items-center justify-between">
        <div>
          <Text variant="body-lg" weight="bold" as="span" className="text-[#6A6D76]">
            Optional Fields
          </Text>{' '}
          <Text variant="body-lg" as="span" className="text-[#8D8F97]">
            (Years of Experience, Industry, Deadline, Tags)
          </Text>
        </div>
        <button onClick={onToggle} className="p-[2px] cursor-pointer bg-transparent border-none">
          <i
            className={`fa-regular ${expanded ? 'fa-minus' : 'fa-plus'} text-[14px] text-[#30343F]`}
          />
        </button>
      </div>
    </div>
  );
}

/* ─── Compensation Row ───────────────────────────────────────── */

function CurrencyPayRow({
  label,
  disabled = false,
}: {
  label: string;
  disabled?: boolean;
}) {
  const currencyOptions = [
    { value: 'usd', label: 'USD' },
    { value: 'eur', label: 'EUR' },
    { value: 'gbp', label: 'GBP' },
  ];

  return (
    <div className="flex flex-col gap-[8px]">
      <Text variant="body-base" weight="medium" className="text-[#30343F]">
        {label}
      </Text>
      <div className="flex gap-[8px] items-center">
        <div className="w-[200px] shrink-0">
          <SingleSelectDropdown
            options={currencyOptions}
            value="usd"
            size="small"
            placeholder="USD"
            disabled={disabled}
          />
        </div>
        <div className="flex-1 flex gap-[4px] items-center">
          <Input placeholder="0" inputSize="extraSmall" disabled={disabled} />
          <i className={`fa-regular fa-arrow-right text-[10px] shrink-0 ${disabled ? 'text-[#8D8F97]' : 'text-[#30343F]'}`} />
          <Input placeholder="0" inputSize="extraSmall" disabled={disabled} />
        </div>
      </div>
    </div>
  );
}

function CompensationRow() {
  return (
    <div className="flex flex-col gap-[16px]">
      <Text variant="body-lg" weight="bold" className="text-[#30343F]">
        Compensation
      </Text>
      <CurrencyPayRow label="Source Currency" />
      <CurrencyPayRow label="Target Currency" disabled />
    </div>
  );
}

/* ─── Main Page Component ────────────────────────────────────── */

export default function CreateNewJobListing() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('job-details');
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [jobDetailsExpanded, setJobDetailsExpanded] = useState(true);
  const [jobDescExpanded, setJobDescExpanded] = useState(true);
  const [assessmentsExpanded, setAssessmentsExpanded] = useState(false);
  const [questionsExpanded, setQuestionsExpanded] = useState(false);
  const [optionalExpanded, setOptionalExpanded] = useState(false);
  const [requirePortfolio, setRequirePortfolio] = useState(true);
  const [selectedEngagement, setSelectedEngagement] = useState<EngagementType[]>(['Full-time']);
  const [selectedWorkplace, setSelectedWorkplace] = useState<WorkplaceType[]>(['Remote']);
  const scrollRef = useRef<HTMLDivElement>(null);

  const engagementTypes: EngagementType[] = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Volunteer'];
  const workplaceTypes: WorkplaceType[] = ['Remote', 'Onsite', 'Hybrid'];

  const toggleEngagement = (type: EngagementType) => {
    setSelectedEngagement((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleWorkplace = (type: WorkplaceType) => {
    setSelectedWorkplace((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
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
            <IconButton
              hierarchy="secondary"
              colorScheme="dark"
              size="md"
              aria-label="Notifications"
              icon={<i className="fa-regular fa-bell" />}
            />
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#7A5FFF]">
                <Text as="span" variant="body-xs" weight="medium" className="text-[#FDFDFE]">
                  E
                </Text>
              </div>
              <span className="font-body text-[14px] text-[#30343F]">Ola, Evan!</span>
            </div>
          </div>
        }
      />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (collapsed) */}
        <Sidebar sections={SIDEBAR_SECTIONS} activeTab="Jobs" theme="purple" collapsed />

        {/* Page content */}
        <div className="flex-1 overflow-auto px-[32px] py-[32px]">
          <div className="flex gap-[48px]">
            {/* Left: Job Details Form */}
            <div className="flex flex-col gap-[16px] items-end flex-1 max-w-[1168px]">
              {/* Page title */}
              <div className="w-[852px] self-end">
                <Text variant="h4" weight="bold" className="text-[#30343F]">
                  Create New Job Listing
                </Text>
              </div>

              {/* Body area */}
              <div className="flex flex-1 gap-[24px] items-start w-full">
                {/* Inner sidebar nav */}
                <JobStepSidebar
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                />

                {/* Main form + scrollable area */}
                <div className="flex flex-col gap-[24px] w-[852px]">
                  {/* Scrollable card area */}
                  <div ref={scrollRef} className="flex flex-col gap-[12px]">
                    {/* Job Details Card (Expanded) */}
                    <SectionCard
                      icon="fa-regular fa-id-badge"
                      title="Job Details"
                      completionText="7/7 required completed"
                      expanded={jobDetailsExpanded}
                      onToggle={() => setJobDetailsExpanded(!jobDetailsExpanded)}
                    >
                      {/* Job Title */}
                      <Input
                        label="Job Title"
                        placeholder="Enter the Job Title"
                        inputSize="extraSmall"
                      />

                      {/* Experience Level / Location / Compensation */}
                      <div className="flex gap-[16px] items-start">
                        <div className="flex-1">
                          <SingleSelectDropdown
                            label="Experience Level"
                            options={[
                              { value: 'entry', label: 'Entry Level' },
                              { value: 'mid', label: 'Mid Level' },
                              { value: 'senior', label: 'Senior Level' },
                              { value: 'lead', label: 'Lead' },
                            ]}
                            value="entry"
                            size="small"
                            placeholder="Select level"
                          />
                        </div>
                        <div className="flex-1">
                          <SingleSelectDropdown
                            label="Location"
                            options={[
                              { value: 'worldwide', label: 'Worldwide' },
                              { value: 'us', label: 'United States' },
                              { value: 'eu', label: 'Europe' },
                            ]}
                            value="worldwide"
                            size="small"
                            placeholder="Select location"
                          />
                        </div>
                        <div className="flex-1">
                          <SingleSelectDropdown
                            label="Compensation"
                            options={[
                              { value: 'hourly', label: 'Hourly' },
                              { value: 'monthly', label: 'Monthly' },
                              { value: 'yearly', label: 'Yearly' },
                            ]}
                            value="hourly"
                            size="small"
                            placeholder="Select type"
                          />
                        </div>
                      </div>

                      {/* Engagement Type & Workplace */}
                      <div className="flex gap-[32px] items-start">
                        {/* Engagement Type */}
                        <div className="flex-1">
                          <div className="flex flex-col gap-[8px]">
                            <div className="flex items-center justify-between">
                              <Text variant="body-base" weight="medium" className="text-[#30343F]">
                                Engagement Type
                              </Text>
                              <div className="flex gap-[8px]">
                                <button className="flex items-center justify-center size-[16px] p-[2px] bg-transparent border-none cursor-pointer">
                                  <i className="fa-solid fa-chevron-left text-[8px] text-[#30343F]" />
                                </button>
                                <button className="flex items-center justify-center size-[16px] p-[2px] bg-transparent border-none cursor-pointer">
                                  <i className="fa-solid fa-chevron-right text-[8px] text-[#30343F]" />
                                </button>
                              </div>
                            </div>
                            <div className="flex gap-[8px] overflow-clip">
                              {engagementTypes.map((type) => (
                                <Chip
                                  key={type}
                                  selected={selectedEngagement.includes(type)}
                                  onClick={() => toggleEngagement(type)}
                                >
                                  {type}
                                </Chip>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Workplace */}
                        <div className="flex-1">
                          <div className="flex flex-col gap-[8px]">
                            <Text variant="body-base" weight="medium" className="text-[#30343F]">
                              Workplace
                            </Text>
                            <div className="flex flex-wrap gap-[8px]">
                              {workplaceTypes.map((type) => (
                                <Chip
                                  key={type}
                                  selected={selectedWorkplace.includes(type)}
                                  onClick={() => toggleWorkplace(type)}
                                >
                                  {type}
                                </Chip>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Require Portfolio */}
                      <Checkbox
                        label="Require Portfolio for this Job"
                        checked={requirePortfolio}
                        onChange={() => setRequirePortfolio(!requirePortfolio)}
                      />

                      {/* Compensation */}
                      <CompensationRow />

                      {/* Optional Fields */}
                      <OptionalFieldsSection
                        expanded={optionalExpanded}
                        onToggle={() => setOptionalExpanded(!optionalExpanded)}
                      />
                    </SectionCard>

                    {/* Job Description Card (Expanded) */}
                    <SectionCard
                      icon="fa-regular fa-file-lines"
                      title="Job Description"
                      completionText="0/1 required completed"
                      expanded={jobDescExpanded}
                      onToggle={() => setJobDescExpanded(!jobDescExpanded)}
                    >
                      <div className="flex flex-col flex-1">
                        <RichTextToolbar />
                        <div className="border border-solid border-[#B2B4BA] border-t-0 rounded-b-[12px] bg-[#FDFDFE] p-[12px] min-h-[400px] flex flex-col">
                          <div className="flex-1">
                            <Text variant="body-base" className="text-[#8D8F97]">
                              'Make it more casual','Make the requirements more objective'
                            </Text>
                          </div>
                          <div className="flex items-center justify-start">
                            <Button
                              hierarchy="primary"
                              colorScheme="ai"
                              size="small"
                              leadIcon={<i className="fa-regular fa-sparkles" />}
                              onClick={() => setShowAIPanel(true)}
                            >
                              Generate with AI
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SectionCard>

                    {/* Assessments Card (Collapsed) */}
                    <SectionCard
                      icon="fa-regular fa-books"
                      title="Assessments"
                      titleSuffix="(Optional)"
                      expanded={assessmentsExpanded}
                      onToggle={() => setAssessmentsExpanded(!assessmentsExpanded)}
                      dashed
                    />


                    {/* Job Questions Card (Collapsed, dimmed) */}
                    <SectionCard
                      icon="fa-regular fa-books"
                      title="Job Questions"
                      expanded={questionsExpanded}
                      onToggle={() => setQuestionsExpanded(!questionsExpanded)}
                      dashed
                      dimmed
                    />
                  </div>

                  {/* Bottom Buttons */}
                  <div className="flex items-center justify-between">
                    <Button
                      hierarchy="secondary"
                      colorScheme="destructive"
                      size="medium"
                      leadIcon={<i className="fa-regular fa-xmark" />}
                    >
                      Discard and Exit
                    </Button>
                    <Button hierarchy="primary" colorScheme="violet" size="medium" disabled>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Write with AI Panel */}
            <WriteWithAIPanel visible={showAIPanel} onClose={() => setShowAIPanel(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}
