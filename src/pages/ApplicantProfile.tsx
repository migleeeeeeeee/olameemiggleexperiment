import { useState } from 'react';
import {
  TopNavbar,
  Sidebar,
  SearchBar,
  Button,
  IconButton,
  Text,
  Icon,
  Tag,
  Chip,
  Tabs,
  Tab,
  Input,
  Textarea,
  Notification,
  SingleSelectDropdown,
  InputWithDropdown,
  type SidebarSection,
  type SelectionOption,
} from '@/design-system';

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

/* ─── Sidebar configuration (canonical) ─────────────────────── */

const sidebarSections: SidebarSection[] = [
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

/* ─── Hiring Process Steps ──────────────────────────────────── */

const hiringSteps = [
  { label: 'Application', completed: true },
  { label: 'Phone Interview', completed: true },
  { label: 'Assessment', completed: true },
  { label: '1-on-1 Interview', active: true },
  { label: 'Final Interview', completed: false },
  { label: 'Offer', completed: false },
];

/* ─── Data ──────────────────────────────────────────────────── */

const applicantDropdownOptions: SelectionOption[] = [
  { value: 'graphic-designer', label: 'Graphic Designer' },
  { value: 'ui-designer', label: 'UI Designer' },
  { value: 'senior-developer', label: 'Senior Developer' },
];

const interviewTypeChips = [
  'Phone Interview  (Online)',
  '1-on-1 Interview (In-Person)',
  '1-on-1 Interview (Online)',
  'Pre-Recorded Interview (Online)',
  'Phone Interview with HR Manager',
  'Panel Interview (Online)',
];

const activityLogs = [
  { icon: 'fa-regular fa-file-lines', color: '#7A5FFF', title: 'Added a Late Note', date: 'Oct 10, 2024', time: '2:30 PM', items: ['Leave Log', 'Infraction'] },
  { icon: 'fa-regular fa-video', color: '#5ED4B2', title: 'Uploaded Interview Recording', date: 'Jul 2, 2024', time: '2:30 PM', items: ['View Recording'] },
  { icon: 'fa-regular fa-calendar-check', color: '#EAD94C', title: 'Sent Initial Interview Invite', date: 'Jun 15, 2024', time: '2:30 PM', items: ['View Invitation'] },
  { icon: 'fa-regular fa-chart-bar', color: '#D62839', title: 'Provided AtD, Logic, & Verbal Reasoning', date: 'Jun 10, 2024', time: '2:30 PM', items: ['View Score(s)'] },
];

const recruiterTags = ['Adobe Creative Cloud', 'Canva', 'Graphic Design', 'Photoshop', 'Figma'];

/* ─── Sub-components ────────────────────────────────────────── */

function SectionCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-[16px] border border-[#E8E9EC] ${className}`}>
      {children}
    </div>
  );
}

function SectionHeader({ title, onAdd, editButton }: { title: string; onAdd?: () => void; editButton?: boolean }) {
  return (
    <div className="flex items-center justify-between px-[32px] pt-[32px] pb-0">
      <Text variant="h4" weight="bold">{title}</Text>
      {onAdd && (
        <IconButton hierarchy="secondary" size="sm" colorScheme="dark" icon={<i className="fa-regular fa-plus text-[14px]" />} aria-label={`Add ${title}`} />
      )}
      {editButton && (
        <IconButton hierarchy="tertiary" size="sm" colorScheme="dark" icon={<i className="fa-regular fa-pen text-[14px]" />} aria-label={`Edit ${title}`} />
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <Text as="span" variant="body-base" className="text-[#6B6F7B]">{label}</Text>
      <Text as="span" variant="body-base" className="text-[#30343F]">{value}</Text>
    </div>
  );
}

function SubCard({ title, editButton, children }: { title: string; editButton?: boolean; children: React.ReactNode }) {
  return (
    <div className="rounded-[12px] border border-[#E8E9EC] p-[16px] flex flex-col gap-[16px]">
      <div className="flex items-center justify-between">
        <Text variant="body-base" weight="semibold">{title}</Text>
        {editButton && (
          <IconButton hierarchy="tertiary" size="xs" colorScheme="dark" icon={<i className="fa-regular fa-pen text-[12px]" />} aria-label="Edit" />
        )}
      </div>
      {children}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[4px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`${star <= Math.floor(rating) ? 'fa-solid' : star - 0.5 <= rating ? 'fa-solid fa-star-half-stroke' : 'fa-regular'} fa-star text-[14px] ${star <= rating ? 'text-[#7A5FFF]' : 'text-[#C8CAD0]'}`}
        />
      ))}
    </div>
  );
}

function HiringProcessBar() {
  return (
    <div className="flex items-center gap-[4px]">
      {hiringSteps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-[4px]">
          <div className={`flex items-center gap-[6px] px-[8px] py-[4px] rounded-[8px] text-[12px] leading-[16px] font-body whitespace-nowrap ${
            step.completed ? 'bg-[#F0EDFF] text-[#6F54EB]' :
            step.active ? 'bg-[#6F54EB] text-white' :
            'bg-[#F4F4F6] text-[#8D8F97]'
          }`}>
            {step.completed && <i className="fa-solid fa-check text-[10px]" />}
            {step.label}
          </div>
          {idx < hiringSteps.length - 1 && (
            <i className="fa-regular fa-chevron-right text-[10px] text-[#C8CAD0]" />
          )}
        </div>
      ))}
    </div>
  );
}

function InterviewCard({ title, status, statusColor, timeInfo, interviewerName, interviewerRole, scheduledBy, scheduledDate, scheduledTime, attendees, showRecording, showMeetingDetails }: {
  title: string;
  status: string;
  statusColor: 'green' | 'orange';
  timeInfo?: string;
  interviewerName: string;
  interviewerRole: string;
  scheduledBy: string;
  scheduledDate: string;
  scheduledTime: string;
  attendees: string;
  showRecording?: boolean;
  showMeetingDetails?: boolean;
}) {
  return (
    <div className="rounded-[12px] border border-[#E8E9EC] p-[16px] flex flex-col gap-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <i className="fa-regular fa-video text-[16px] text-[#30343F]" />
          <Text variant="body-base" weight="bold">{title}</Text>
          <Tag
            color={statusColor === 'green' ? 'success' : 'warning'}
            size="small"
                     >
            {status}
          </Tag>
        </div>
        <div className="flex items-center gap-[8px]">
          {timeInfo && <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{timeInfo}</Text>}
          <i className="fa-regular fa-comment text-[14px] text-[#8D8F97]" />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#E8E9EC]" />

      {/* Interviewer */}
      <div className="flex items-center gap-[16px]">
        <div className="size-[40px] rounded-full bg-[#E8E9EC] flex items-center justify-center overflow-hidden">
          <i className="fa-solid fa-user text-[16px] text-[#8D8F97]" />
        </div>
        <div className="flex flex-col">
          <Text as="span" variant="body-base" weight="bold" className="text-[#30343F]">{interviewerName}</Text>
          <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{interviewerRole}</Text>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#E8E9EC]" />

      {/* Schedule info */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[4px]">
          <Text as="span" variant="body-xs" className="text-[#6B6F7B]">
            <span className="font-bold text-[#30343F]">{scheduledBy}</span> (Interviewer)
          </Text>
          <div className="flex items-center gap-[8px]">
            <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{scheduledDate} - {scheduledTime}</Text>
          </div>
          <div className="flex items-center gap-[8px]">
            <i className="fa-regular fa-users text-[12px] text-[#5ED4B2]" />
            <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{attendees}</Text>
            <i className="fa-regular fa-circle-info text-[12px] text-[#8D8F97]" />
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          {showRecording && (
            <Button hierarchy="secondary" size="xsmall" colorScheme="dark">
              View Recording <i className="fa-solid fa-play text-[10px] ml-[4px]" />
            </Button>
          )}
          {showMeetingDetails && (
            <Button hierarchy="secondary" size="xsmall" colorScheme="dark">
              View Meeting Details <i className="fa-regular fa-arrow-right text-[10px] ml-[4px]" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function AssessmentItem({ label, grade, gradeColor, timeAgo, showAction }: {
  label: string;
  grade?: string;
  gradeColor: string;
  timeAgo: string;
  showAction?: boolean;
}) {
  return (
    <div className="rounded-[12px] border border-[#E8E9EC] p-[16px] flex items-center gap-[12px]">
      <div className={`size-[40px] rounded-full flex items-center justify-center text-white font-bold text-[16px] font-body`} style={{ backgroundColor: gradeColor }}>
        {grade || '!'}
      </div>
      <div className="flex-1 flex flex-col gap-[2px]">
        <Text as="span" variant="body-base" weight="bold" className="text-[#30343F]">{label}</Text>
        <Text as="span" variant="body-xs" className="text-[#8D8F97]">{timeAgo}</Text>
      </div>
      {showAction && (
        <Button hierarchy="secondary" size="xsmall" colorScheme="dark">
          Enter Score <i className="fa-regular fa-chevron-right text-[10px] ml-[4px]" />
        </Button>
      )}
      <IconButton hierarchy="tertiary" size="xs" colorScheme="dark" icon={<i className="fa-solid fa-ellipsis-vertical text-[14px]" />} aria-label="More options" />
    </div>
  );
}

function NoteEntry({ name, date, paragraphs, locked }: { name: string; date: string; paragraphs: string[]; locked?: boolean }) {
  return (
    <div className="rounded-[12px] border border-[#E8E9EC] p-[16px] flex flex-col gap-[16px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[16px]">
          <div className="size-[36px] rounded-full bg-[#E8E9EC] flex items-center justify-center overflow-hidden">
            <i className="fa-solid fa-user text-[14px] text-[#8D8F97]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-[4px]">
              <Text as="span" variant="body-base" weight="bold" className="text-[#30343F]">{name}</Text>
              {locked && <i className="fa-regular fa-lock text-[12px] text-[#8D8F97]" />}
            </div>
            <Text as="span" variant="body-xs" className="text-[#8D8F97]">{date}</Text>
          </div>
        </div>
        <IconButton hierarchy="tertiary" size="sm" colorScheme="dark" icon={<i className="fa-solid fa-ellipsis-vertical text-[14px]" />} aria-label="More options" />
      </div>
      {paragraphs.map((p, idx) => (
        <Text as="p" key={idx} variant="body-base" className="text-[#30343F]">{p}</Text>
      ))}
    </div>
  );
}

function ActivityLogItem({ icon, color, title, date, time, items }: {
  icon: string;
  color: string;
  title: string;
  date: string;
  time: string;
  items: string[];
}) {
  return (
    <div className="flex gap-[16px] relative">
      {/* Timeline dot & line */}
      <div className="flex flex-col items-center">
        <div className="size-[32px] rounded-full flex items-center justify-center" style={{ backgroundColor: color + '1A' }}>
          <i className={`${icon} text-[14px]`} style={{ color }} />
        </div>
        <div className="w-px flex-1 bg-[#E8E9EC] mt-[8px]" />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-[4px] pb-[24px]">
        <Text as="span" variant="body-base" weight="bold" className="text-[#30343F]">{title}</Text>
        <Text as="span" variant="body-xs" className="text-[#8D8F97]">{date}</Text>
        <Text as="span" variant="body-xs" className="text-[#8D8F97]">{time}</Text>
        {items.length > 0 && (
          <div className="flex items-center gap-[8px] mt-[4px]">
            {items.map((item, idx) => (
              <span key={idx} className="text-[12px] leading-[16px] font-body text-[#6F54EB] cursor-pointer hover:underline">
                <i className="fa-regular fa-circle-dot text-[10px] mr-[4px]" />{item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PositionCard({ title, company, status, statusColor: _statusColor, applicantName, timeAgo, bio, rejectionReason, rejectedBy, rejectedAgo }: {
  title: string;
  company?: string;
  status: string;
  statusColor: string;
  applicantName: string;
  timeAgo: string;
  bio: string;
  rejectionReason?: string;
  rejectedBy?: string;
  rejectedAgo?: string;
}) {
  return (
    <div className="rounded-[12px] border border-[#E8E9EC] p-[16px] flex flex-col gap-[16px]">
      {/* Header */}
      <div className="flex items-center gap-[16px]">
        <div className="size-[39px] rounded-full bg-[#E8E9EC] flex items-center justify-center overflow-hidden">
          <i className="fa-solid fa-building text-[16px] text-[#8D8F97]" />
        </div>
        <div className="flex-1 flex flex-col gap-[4px]">
          <div className="flex items-center gap-[12px]">
            <Text as="span" variant="body-base" weight="bold" className="text-[#30343F]">{title}</Text>
            <Tag color="info" size="small">{status}</Tag>
          </div>
          {company && <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{company}</Text>}
        </div>
        <div className="flex flex-col items-end gap-[2px]">
          <div className="flex items-center gap-[8px]">
            <div className="size-[16px] rounded-full bg-[#E8E9EC]" />
            <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{applicantName}</Text>
          </div>
          <Text as="span" variant="body-xs" className="text-[#8D8F97]">{timeAgo}</Text>
        </div>
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-[8px]">
        <Text as="span" variant="body-base" weight="semibold" className="text-[#30343F]">Recommendation Bio</Text>
        <Text as="p" variant="body-base" className="text-[#6B6F7B]">{bio}</Text>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-[8px]">
        <Button hierarchy="primary" size="xsmall" colorScheme="destructive">Reject</Button>
        <Button hierarchy="secondary" size="xsmall" colorScheme="violet">Approve</Button>
      </div>

      {/* Rejection section */}
      {rejectionReason && (
        <>
          <div className="h-px bg-[#E8E9EC]" />
          <div className="flex flex-col gap-[8px]">
            <Text as="span" variant="body-base" weight="semibold" className="text-[#30343F]">Rejection Reason</Text>
            <Text as="p" variant="body-base" className="text-[#6B6F7B]">{rejectionReason}</Text>
            {rejectedBy && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <i className="fa-regular fa-circle-xmark text-[14px] text-[#D62839]" />
                  <Text as="span" variant="body-xs" className="text-[#6B6F7B]">Rejected By</Text>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="size-[16px] rounded-full bg-[#E8E9EC]" />
                  <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{rejectedBy}</Text>
                  <Text as="span" variant="body-xs" className="text-[#8D8F97]">{rejectedAgo}</Text>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

/* ─── QuestionCard — small cards in Interview Questions ──────── */

function QuestionCard({ label, tag, children }: { label: string; tag?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[12px] border border-[#E8E9EC] p-[16px] flex flex-col gap-[16px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <Text as="span" variant="body-base" weight="semibold" className="text-[#30343F]">{label}</Text>
          {tag && <Tag color="default" size="small">{tag}</Tag>}
        </div>
        {label === 'Salary History' || label === 'Preferred Role' ? (
          <IconButton hierarchy="tertiary" size="xs" colorScheme="dark" icon={<i className="fa-regular fa-eye text-[12px]" />} aria-label="View" />
        ) : null}
      </div>
      {children}
    </div>
  );
}

function ChipGroup({ options, selected }: { options: string[]; selected?: string }) {
  return (
    <div className="flex flex-wrap gap-[8px]">
      {options.map((opt) => (
        <Chip key={opt} selected={opt === selected} size="small">
          {opt}
        </Chip>
      ))}
    </div>
  );
}

/* ─── Page Component ────────────────────────────────────────── */

export default function ApplicantProfile() {
  const [activeInterviewType, setActiveInterviewType] = useState(0);
  const [activityTab, setActivityTab] = useState('activity');
  const [resumeTab, setResumeTab] = useState('resume');
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [assessmentTab, setAssessmentTab] = useState(0);
  const [attemptTab, setAttemptTab] = useState(0);

  const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.';

  return (
    <div className="flex flex-col h-screen bg-[#F7F7F8]">
      {/* ── Top Navbar ─────────────────────────────────────── */}
      <TopNavbar
        leftContent={<OlameeLogo />}
        centerContent={<SearchBar placeholder="Search" />}
        rightContent={
          <div className="flex items-center gap-2">
            <Button hierarchy="secondary" size="small" colorScheme="violet" leadIcon={<Icon name="plus" size="xs" />}>
              Create
            </Button>
            <IconButton hierarchy="tertiary" size="lg" colorScheme="dark" icon={<Icon name="bell" size="lg" faStyle="light" style={{ color: '#30343F' }} />} aria-label="Notifications" />
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-[36px] rounded-full bg-[#F6F4FF] border border-[#7C81A0]">
                <Text variant="body-sm" weight="bold" className="text-primary-500">E</Text>
              </div>
              <span className="text-[14px] font-bold leading-[18px] text-[#30343F]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Ola, Evan!
              </span>
            </div>
          </div>
        }
      />

      {/* ── Body: Sidebar + Main ──────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar sections={sidebarSections} activeTab="Applicants" defaultCollapsed theme="purple" iconStyle="light" />

        <main className="flex-1 overflow-y-auto p-[32px] flex flex-col gap-[32px]">
          {/* ── Title Bar ─────────────────────────────────── */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <IconButton hierarchy="secondary" size="sm" colorScheme="dark" icon={<i className="fa-regular fa-chevron-left text-[14px]" />} aria-label="Go back" />
              <SingleSelectDropdown
                options={applicantDropdownOptions}
                value="graphic-designer"
                onChange={() => {}}
                size="small"
                placeholder="Graphic Designer"
              />
            </div>

            <HiringProcessBar />

            <div className="flex items-center gap-[8px]">
              <Button hierarchy="primary" size="small" colorScheme="violet">
                Manage Applicant <i className="fa-regular fa-chevron-down text-[10px] ml-[4px]" />
              </Button>
              <div className="relative">
                <IconButton
                  hierarchy="secondary"
                  size="sm"
                  colorScheme="dark"
                  icon={<i className="fa-solid fa-ellipsis-vertical text-[14px]" />}
                  aria-label="More actions"
                  onClick={() => setShowActionMenu(!showActionMenu)}
                />
                {showActionMenu && (
                  <div className="absolute right-0 top-[40px] w-[262px] bg-white rounded-[12px] border border-[#E8E9EC] shadow-elevation-2 z-50 py-[8px]">
                    <div className="px-[16px] py-[9px]"><Text as="span" variant="body-base" className="text-[#6B6F7B]">Select an action</Text></div>
                    <div className="px-[16px] py-[9px] hover:bg-[#F4F4F6] cursor-pointer"><Text as="span" variant="body-base" className="text-[#30343F]">Send an Email</Text></div>
                    <div className="mx-[16px] h-px bg-[#E8E9EC]" />
                    <div className="px-[16px] py-[9px] hover:bg-[#F4F4F6] cursor-pointer"><Text as="span" variant="body-base" className="text-[#30343F]">Send offer letter</Text></div>
                    <div className="px-[16px] py-[9px] hover:bg-[#F4F4F6] cursor-pointer"><Text as="span" variant="body-base" className="text-[#30343F]">Onboard</Text></div>
                    <div className="mx-[16px] h-px bg-[#E8E9EC]" />
                    <div className="px-[16px] py-[9px] hover:bg-[#F4F4F6] cursor-pointer"><Text as="span" variant="body-base" className="text-[#30343F]">Refer to Another Job</Text></div>
                    <div className="mx-[16px] h-px bg-[#E8E9EC]" />
                    <div className="px-[16px] py-[9px] hover:bg-[#F4F4F6] cursor-pointer"><span className="text-[14px] leading-[18px] font-body text-[#D62839]">Reject Applicant</span></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Notification Banner ──────────────────────── */}
          <div className="flex items-center justify-between gap-[12px]">
            <Notification
              type="info"
              title="Info"
              description="This candidate has been sent an offer for the job of 'Senior Developer'."
              className="max-w-full flex-1"
            />
            <Button hierarchy="secondary" size="xsmall" colorScheme="violet">View</Button>
          </div>

          {/* ── Two Column Layout ────────────────────────── */}
          <div className="flex gap-[32px]">
            {/* ── LEFT COLUMN ────────────────────────────── */}
            <div className="flex-1 flex flex-col gap-[32px] min-w-0">

              {/* ─ Profile Card ────────────────────────────── */}
              <SectionCard>
                {/* Header: Avatar + Name + Actions */}
                <div className="flex items-center justify-between px-[32px] pt-[32px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="size-[54px] rounded-full bg-gradient-to-br from-[#7A5FFF] to-[#5ED4B2] flex items-center justify-center text-white font-bold text-[20px] font-body">
                      CJ
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex items-center gap-[12px]">
                        <Text variant="h5" weight="bold">Christopher Jose Lorenzo (Chris)</Text>
                        <span className="text-[18px]">🇿🇦</span>
                        <StarRating rating={4.5} />
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <Text as="span" variant="body-xs" className="text-[#8D8F97]">Last logged in 1 month ago</Text>
                        <i className="fa-regular fa-circle-info text-[10px] text-[#8D8F97]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <IconButton hierarchy="secondary" size="sm" colorScheme="dark" icon={<i className="fa-regular fa-envelope text-[14px]" />} aria-label="Send message" />
                    <IconButton hierarchy="secondary" size="sm" colorScheme="dark" icon={<i className="fa-regular fa-comment text-[14px]" />} aria-label="Chat" />
                  </div>
                </div>

                {/* Info Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-[16px] px-[32px] py-[16px]">
                  {/* Applicant Info */}
                  <SubCard title="Applicant Info" editButton>
                    <div className="flex flex-col gap-[18px]">
                      <InfoRow label="Gender" value="Male" />
                      <InfoRow label="Language" value={
                        <div className="flex items-center gap-[6px]">
                          <span>English, Filipino, Spanish</span>
                          <Tag color="default" size="small">+3</Tag>
                        </div>
                      } />
                      <InfoRow label="Nationality" value="Filipino" />
                    </div>
                    <InfoRow label="Birthday" value="09/12/1994" />
                    <InfoRow label="Referred By" value="LinkedIn" />
                  </SubCard>

                  {/* Contact Info */}
                  <SubCard title="Contact Info" editButton>
                    <div className="flex flex-col gap-[18px]">
                      <div className="flex items-center gap-[18px]">
                        <i className="fa-regular fa-envelope text-[14px] text-[#8D8F97]" />
                        <Text as="span" variant="body-base" className="text-[#30343F]">christoper.fuentabella3@gmail.com</Text>
                        <i className="fa-solid fa-circle-check text-[12px] text-[#5ED4B2]" />
                      </div>
                      <div className="flex items-center gap-[18px]">
                        <i className="fa-regular fa-phone text-[14px] text-[#8D8F97]" />
                        <Text as="span" variant="body-base" className="text-[#30343F]">+63 918155275</Text>
                        <i className="fa-solid fa-circle-check text-[12px] text-[#5ED4B2]" />
                      </div>
                      <div className="flex items-center gap-[18px]">
                        <i className="fa-regular fa-mobile text-[14px] text-[#8D8F97]" />
                        <Text as="span" variant="body-base" className="text-[#30343F]">christopher@gmail.com</Text>
                      </div>
                    </div>
                  </SubCard>

                  {/* Short Bio */}
                  <SubCard title="Short Bio" editButton>
                    <Text as="p" variant="body-base" className="text-[#6B6F7B]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condi ut interdum tellus elit sed risus. Maecenas eget condi
                    </Text>
                  </SubCard>

                  {/* Social Profile */}
                  <SubCard title="Social Profile" editButton>
                    <div className="flex flex-wrap gap-[8px]">
                      <Button hierarchy="secondary" size="xsmall" colorScheme="dark" leadIcon={<i className="fa-brands fa-linkedin-in text-[12px] text-[#0A66C2]" />}>LinkedIn</Button>
                      <Button hierarchy="secondary" size="xsmall" colorScheme="dark" leadIcon={<i className="fa-brands fa-x-twitter text-[12px]" />}>X (Twitter)</Button>
                      <Button hierarchy="secondary" size="xsmall" colorScheme="dark" leadIcon={<i className="fa-brands fa-facebook text-[12px] text-[#1877F2]" />}>Facebook</Button>
                      <Button hierarchy="secondary" size="xsmall" colorScheme="dark" leadIcon={<i className="fa-brands fa-instagram text-[12px] text-[#E4405F]" />}>Instagram</Button>
                    </div>
                  </SubCard>
                </div>
              </SectionCard>

              {/* ─ Interview Section ────────────────────────── */}
              <SectionCard>
                <SectionHeader title="Interview" onAdd={() => {}} />
                <div className="flex flex-col gap-[16px] px-[32px] py-[16px] pb-[32px]">
                  <InterviewCard
                    title="Final Interview"
                    status="Upcoming"
                    statusColor="green"
                    timeInfo="will start in 10 mins"
                    interviewerName="Noe Vah"
                    interviewerRole="Online English Teacher"
                    scheduledBy="Chris Crauss"
                    scheduledDate="Tue, Jul. 2, 2024"
                    scheduledTime="8:30 - 9:30 AM"
                    attendees="3/3 confirmed"
                    showMeetingDetails
                  />
                  <InterviewCard
                    title="Final Interview"
                    status="Completed"
                    statusColor="green"
                    interviewerName="Noe Vah"
                    interviewerRole="Online English Teacher"
                    scheduledBy="Chris Crauss"
                    scheduledDate="Tue, Jul. 2, 2024"
                    scheduledTime="8:30 - 9:30 AM"
                    attendees="3/3 confirmed"
                    showRecording
                    showMeetingDetails
                  />
                </div>
              </SectionCard>

              {/* ─ Interview Questions ──────────────────────── */}
              <SectionCard>
                <div className="flex items-center justify-between px-[32px] pt-[32px]">
                  <Text variant="h4" weight="bold">Interview Questions</Text>
                  <div className="flex items-center gap-[8px]">
                    <Button hierarchy="tertiary" size="xsmall" colorScheme="dark" leadIcon={<i className="fa-regular fa-eye text-[12px]" />}>
                      Show sensitive info
                    </Button>
                    <IconButton hierarchy="secondary" size="sm" colorScheme="dark" icon={<i className="fa-regular fa-plus text-[14px]" />} aria-label="Add question" />
                  </div>
                </div>

                <div className="px-[32px] py-[16px]">
                  {/* Interview type chips */}
                  <div className="flex flex-wrap gap-[8px] mb-[16px]">
                    {interviewTypeChips.map((chip, idx) => (
                      <Chip
                        key={chip}
                        selected={idx === activeInterviewType}
                        size="small"
                        onClick={() => setActiveInterviewType(idx)}
                      >
                        {chip}
                      </Chip>
                    ))}
                  </div>

                  {/* Question cards - 2 column grid */}
                  <div className="grid grid-cols-2 gap-[16px]">
                    <QuestionCard label="Asking Salary">
                      <InputWithDropdown
                        inputSize="small"
                        firstField={{ placeholder: 'Currency' }}
                        secondField={{ placeholder: 'Enter amount' }}
                      />
                    </QuestionCard>

                    <QuestionCard label="Phone Time">
                      <ChipGroup options={['Yes', 'No', 'Maybe']} selected="Yes" />
                    </QuestionCard>

                    <QuestionCard label="Relevant Experience">
                      <Input placeholder="Type experience" inputSize="small" />
                      <Textarea placeholder="Relevant experience notes" />
                    </QuestionCard>

                    <QuestionCard label="Can Join After">
                      <ChipGroup options={['Immediately', 'Date', 'Notice']} />
                    </QuestionCard>

                    <div className="col-span-2 grid grid-cols-2 gap-[16px]">
                      <QuestionCard label="Salary History">
                        <Input placeholder="Enter salary history" inputSize="small" />
                      </QuestionCard>

                      <QuestionCard label="Hire Type">
                        <div className="flex flex-col gap-[4px]">
                          <span className="text-[12px] leading-[16px] font-body text-[#8D8F97] text-right">(Allowed multiple answers)</span>
                          <ChipGroup options={['Full Time', 'Part Time', 'Freelancing', 'Projectwise']} />
                        </div>
                      </QuestionCard>
                    </div>

                    <QuestionCard label="Preferred Role">
                      <SingleSelectDropdown
                        options={[{ value: 'role1', label: 'Select preferred role' }]}
                        value=""
                        onChange={() => {}}
                        size="small"
                        placeholder="Select preferred role"
                      />
                    </QuestionCard>

                    <QuestionCard label="GY Amenable">
                      <ChipGroup options={['Yes', 'No', 'Maybe']} />
                    </QuestionCard>

                    <QuestionCard label="Familiarity with Canva" tag="Job-Specific">
                      <ChipGroup options={['Yes', 'No', 'Maybe']} />
                    </QuestionCard>

                    <QuestionCard label="GY Shift Experience">
                      <ChipGroup options={['Yes', 'No', 'Maybe']} />
                    </QuestionCard>

                    <QuestionCard label="Tools and Software Used" tag="Job-Specific">
                      <Input placeholder="Enter tools and software" inputSize="small" />
                    </QuestionCard>
                  </div>
                </div>
              </SectionCard>

              {/* ─ Activity Logs ────────────────────────────── */}
              <SectionCard>
                <div className="px-[32px] pt-[32px]">
                  <div className="flex items-center gap-[8px] mb-[24px]">
                    <button
                      className={`px-[16px] py-[8px] rounded-[20px] text-[14px] leading-[18px] font-body font-bold transition-colors ${
                        activityTab === 'activity' ? 'bg-[#6F54EB] text-white' : 'bg-[#F4F4F6] text-[#6B6F7B] hover:bg-[#E8E9EC]'
                      }`}
                      onClick={() => setActivityTab('activity')}
                    >
                      Activity Logs
                    </button>
                    <button
                      className={`px-[16px] py-[8px] rounded-[20px] text-[14px] leading-[18px] font-body font-bold transition-colors ${
                        activityTab === 'smart' ? 'bg-[#6F54EB] text-white' : 'bg-[#F4F4F6] text-[#6B6F7B] hover:bg-[#E8E9EC]'
                      }`}
                      onClick={() => setActivityTab('smart')}
                    >
                      Smart Logs
                    </button>
                  </div>
                  <Text variant="h4" weight="bold" className="mb-[24px]">Activity Logs</Text>
                </div>
                <div className="px-[32px] pb-[32px]">
                  {activityLogs.map((log, idx) => (
                    <ActivityLogItem key={idx} {...log} />
                  ))}
                </div>
              </SectionCard>

              {/* ─ Positions ────────────────────────────────── */}
              <SectionCard>
                <SectionHeader title="Positions" onAdd={() => {}} />
                <div className="flex flex-col gap-[16px] px-[32px] py-[16px] pb-[32px]">
                  <PositionCard
                    title="Accountant"
                    company="BlueWaves Security Inc."
                    status="POOL 25 Days"
                    statusColor="#7A5FFF"
                    applicantName="Tuyet Nguyen"
                    timeAgo="1 day ago"
                    bio={loremText}
                  />
                  <PositionCard
                    title="Accountant"
                    company="BlueWaves Security Inc."
                    status="POOL 50 Days"
                    statusColor="#7A5FFF"
                    applicantName="Tuyet Nguyen"
                    timeAgo="1 day ago"
                    bio={loremText}
                    rejectionReason="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
                    rejectedBy="Karla Assumption"
                    rejectedAgo="1 day ago"
                  />
                </div>
              </SectionCard>
            </div>

            {/* ── RIGHT COLUMN ───────────────────────────── */}
            <div className="flex-1 flex flex-col gap-[32px] min-w-0">

              {/* ─ Assessment Results ──────────────────────── */}
              <SectionCard>
                <div className="px-[32px] pt-[32px]">
                  <Text variant="h4" weight="bold" className="mb-[16px]">Assessment Results</Text>
                  {/* Assessment tabs */}
                  <div className="flex items-center gap-[8px] mb-[16px]">
                    <Tabs value={String(assessmentTab)} onValueChange={(v) => setAssessmentTab(Number(v))}>
                      <Tab value="0">AtD & L&V (2)</Tab>
                      <Tab value="1">Accounting Assessments</Tab>
                    </Tabs>
                    <div className="flex-1" />
                    <div className="flex items-center gap-[8px]">
                      <div className="size-[36px] rounded-full border-[3px] border-[#18E8FF] flex items-center justify-center">
                        <span className="text-[14px] font-bold font-body text-[#18E8FF]">B</span>
                      </div>
                      <Text as="span" variant="body-base" className="text-[#30343F]">Sequence Score</Text>
                    </div>
                  </div>

                  {/* Attempt sub-tabs */}
                  <div className="flex items-center gap-[8px] mb-[16px]">
                    <Chip selected={attemptTab === 0} size="small" onClick={() => setAttemptTab(0)}>1st Attempt</Chip>
                    <Chip selected={attemptTab === 1} size="small" onClick={() => setAttemptTab(1)}>2nd Attempt</Chip>
                  </div>
                </div>

                {/* Assessment grid */}
                <div className="grid grid-cols-2 gap-[16px] px-[32px] pb-[32px]">
                  <AssessmentItem label="Administrative Test" grade="B" gradeColor="#18E8FF" timeAgo="1 day ago" />
                  <AssessmentItem label="Bookkeeping & Accounting" grade="A" gradeColor="#5ED4B2" timeAgo="1 day ago" />
                  <AssessmentItem label="Attention to Detail" grade="" gradeColor="#FF9F1C" timeAgo="1 day ago" showAction />
                  <AssessmentItem label="L&V-ERC" grade="A" gradeColor="#5ED4B2" timeAgo="1 day ago" />
                </div>
              </SectionCard>

              {/* ─ Recruiter's Note ────────────────────────── */}
              <SectionCard>
                <SectionHeader title="Recruiter's Note" onAdd={() => {}} />
                <div className="flex flex-col gap-[16px] px-[32px] py-[16px] pb-[32px]">
                  {/* Tags sub-card */}
                  <SubCard title="Tags" editButton>
                    <div className="flex flex-wrap gap-[8px]">
                      {recruiterTags.map(tag => (
                        <Tag key={tag} color="default" size="default">{tag}</Tag>
                      ))}
                    </div>
                  </SubCard>

                  {/* Note entries */}
                  <NoteEntry
                    name="Jella Johnson"
                    date="On Sep. 18, 2024, 10:20 AM"
                    paragraphs={[loremText, loremText]}
                    locked
                  />
                  <NoteEntry
                    name="Jella Johnson"
                    date="On Sep. 8, 2024, 10:20 AM"
                    paragraphs={[loremText]}
                  />
                </div>
              </SectionCard>

              {/* ─ Resume ──────────────────────────────────── */}
              <SectionCard>
                <div className="px-[32px] pt-[32px]">
                  {/* Resume/Portfolio tabs */}
                  <div className="flex items-center gap-[4px] mb-[16px]">
                    <button
                      className={`px-[16px] py-[8px] rounded-[20px] text-[14px] leading-[18px] font-body font-bold transition-colors ${
                        resumeTab === 'resume' ? 'bg-[#6F54EB] text-white' : 'bg-[#F4F4F6] text-[#6B6F7B] hover:bg-[#E8E9EC]'
                      }`}
                      onClick={() => setResumeTab('resume')}
                    >
                      Resume
                    </button>
                    <button
                      className={`px-[16px] py-[8px] rounded-[20px] text-[14px] leading-[18px] font-body font-bold transition-colors ${
                        resumeTab === 'portfolio' ? 'bg-[#6F54EB] text-white' : 'bg-[#F4F4F6] text-[#6B6F7B] hover:bg-[#E8E9EC]'
                      }`}
                      onClick={() => setResumeTab('portfolio')}
                    >
                      Portfolio
                    </button>
                  </div>

                  {/* Resume header */}
                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="flex items-center gap-[16px]">
                      <Text variant="h5" weight="bold">Resume</Text>
                      <SingleSelectDropdown
                        options={[{ value: 'default', label: 'VA - Chris F Resume.pdf (Default)' }]}
                        value="default"
                        onChange={() => {}}
                        size="small"
                        placeholder="VA - Chris F Resume.pdf (Default)"
                      />
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <IconButton hierarchy="secondary" size="sm" colorScheme="dark" icon={<i className="fa-regular fa-expand text-[14px]" />} aria-label="Fullscreen" />
                      <IconButton hierarchy="secondary" size="sm" colorScheme="dark" icon={<i className="fa-solid fa-ellipsis-vertical text-[14px]" />} aria-label="More options" />
                    </div>
                  </div>
                </div>

                {/* Resume preview placeholder */}
                <div className="mx-[32px] mb-[32px] rounded-[12px] border border-[#E8E9EC] bg-[#FAFAFA] p-[16px] min-h-[800px]">
                  <div className="bg-white rounded-[8px] p-[32px] shadow-sm max-w-[768px] mx-auto">
                    <Text as="h2" variant="h3" weight="bold" className="text-[#283044] mb-[4px]">John Smith</Text>
                    <Text as="p" variant="body-lg" className="text-[#18E8FF] mb-[16px]">IT Project Manager</Text>

                    <div className="flex flex-col gap-[4px] mb-[16px] text-[12px] leading-[16px] font-body text-[#6B6F7B]">
                      <p><span className="font-bold text-[#30343F]">Address</span>  Portland, ME</p>
                      <p><span className="font-bold text-[#30343F]">Phone</span>  774-987-4009</p>
                      <p><span className="font-bold text-[#30343F]">E-mail</span>  j.smith@uptowork.com</p>
                    </div>

                    <p className="text-[12px] leading-[18px] font-body text-[#30343F] mb-[24px]">
                      IT Professional with over <span className="font-bold">10 years</span> of experience specializing in <span className="font-bold">IT department management</span> for international logistics companies. I can implement effective <span className="font-bold">IT strategies</span> at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications. Looking to leverage my IT Management skills at SanCorp Inc.
                    </p>

                    <Text as="h3" variant="body-lg" weight="bold" className="text-[#18E8FF] mb-[12px]">Experience</Text>
                    <div className="flex gap-[24px] mb-[16px]">
                      <span className="text-[11px] leading-[14px] font-body text-[#8D8F97] whitespace-nowrap">2006-12 - present</span>
                      <div className="flex flex-col gap-[4px]">
                        <span className="text-[13px] leading-[16px] font-bold font-body text-[#30343F]">Senior Project Manager</span>
                        <span className="text-[11px] leading-[14px] font-body italic text-[#8D8F97]">Seton Hospital, ME</span>
                        <ul className="list-disc list-inside text-[11px] leading-[16px] font-body text-[#6B6F7B] mt-[4px]">
                          <li>Oversaw all major hospital IT projects for 10+ years, focus on cost reduction.</li>
                          <li>Responsible for creating, improving, and developing IT project strategies.</li>
                          <li>Implemented the highly successful Lean Training and Six Sigma projects for all employees.</li>
                          <li>Reduced the costs of IT infrastructure maintenance by 5% in 2015 by successfully rebuilding the infrastructure.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-[24px] mb-[16px]">
                      <span className="text-[11px] leading-[14px] font-body text-[#8D8F97] whitespace-nowrap">2004-09 - 2006-12</span>
                      <div className="flex flex-col gap-[4px]">
                        <span className="text-[13px] leading-[16px] font-bold font-body text-[#30343F]">Junior Project Manager</span>
                        <span className="text-[11px] leading-[14px] font-body italic text-[#8D8F97]">Seton Hospital, ME</span>
                        <ul className="list-disc list-inside text-[11px] leading-[16px] font-body text-[#6B6F7B] mt-[4px]">
                          <li>Streamlined IT logistics and administration operation cutting costs by 25%</li>
                          <li>Diagnosed problems with hardware and operating systems and implemented solutions to increase efficiency.</li>
                          <li>Maintained the user database of over 30000 patients, implemented new solutions inside the dashboard.</li>
                          <li>Managed project for lean training for all IT Support Officers.</li>
                        </ul>
                      </div>
                    </div>

                    <Text as="h3" variant="body-lg" weight="bold" className="text-[#18E8FF] mb-[12px]">Education</Text>
                    <div className="flex gap-[24px] mb-[8px]">
                      <span className="text-[11px] leading-[14px] font-body text-[#8D8F97] whitespace-nowrap">1999-09 - 2001-05</span>
                      <div className="flex flex-col gap-[4px]">
                        <span className="text-[13px] leading-[16px] font-bold font-body text-[#30343F]">Master of Computer Science, University of Maryland</span>
                        <ul className="list-disc list-inside text-[11px] leading-[16px] font-body text-[#6B6F7B] mt-[2px]">
                          <li>Graduated Summa Cum Laude.</li>
                          <li>Member of Student Association of Project Management</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-[24px] mb-[16px]">
                      <span className="text-[11px] leading-[14px] font-body text-[#8D8F97] whitespace-nowrap">1996-09 - 1999-07</span>
                      <div className="flex flex-col gap-[4px]">
                        <span className="text-[13px] leading-[16px] font-bold font-body text-[#30343F]">Bachelor of Computer Science, University of Maryland</span>
                        <ul className="list-disc list-inside text-[11px] leading-[16px] font-body text-[#6B6F7B] mt-[2px]">
                          <li>Member of Student Association of Computer Science.</li>
                          <li>Managed a student project to organize a conference for 50+ professionals.</li>
                        </ul>
                      </div>
                    </div>

                    <Text as="h3" variant="body-lg" weight="bold" className="text-[#18E8FF] mb-[12px]">Skills</Text>
                    <div className="flex flex-col gap-[4px] mb-[16px]">
                      <Text as="p" variant="body-xs" className="text-[#6B6F7B]"><span className="font-bold text-[#30343F]">Business Process Improvement</span> - history of successful innovations leading to cost savings</Text>
                      <Text as="p" variant="body-xs" className="text-[#6B6F7B]"><span className="font-bold text-[#30343F]">Vendor Management</span> - proven track record of managing vendors in projects with budgets of over $1&apos;000&apos;000</Text>
                      <Text as="p" variant="body-xs" className="text-[#6B6F7B]"><span className="font-bold text-[#30343F]">Project Scheduling</span> - over 90% of projects led were finished in due time</Text>
                      <Text as="p" variant="body-xs" className="text-[#6B6F7B]"><span className="font-bold text-[#30343F]">Sales Analysis</span> - background in IT Sales with deep understanding of negotiating contracts</Text>
                    </div>

                    <Text as="h3" variant="body-lg" weight="bold" className="text-[#18E8FF] mb-[12px]">Software</Text>
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex items-center gap-[16px]">
                        <span className="text-[12px] leading-[16px] font-body text-[#30343F] w-[160px]">Microsoft Project</span>
                        <div className="flex-1 h-[8px] bg-[#E8E9EC] rounded-full overflow-hidden">
                          <div className="h-full bg-[#283044] rounded-full" style={{ width: '90%' }} />
                        </div>
                        <span className="text-[11px] leading-[14px] font-body text-[#6B6F7B]">Excellent</span>
                      </div>
                      <div className="flex items-center gap-[16px]">
                        <span className="text-[12px] leading-[16px] font-body text-[#30343F] w-[160px]">Microsoft Windows Server</span>
                        <div className="flex-1 h-[8px] bg-[#E8E9EC] rounded-full overflow-hidden">
                          <div className="h-full bg-[#283044] rounded-full" style={{ width: '75%' }} />
                        </div>
                        <span className="text-[11px] leading-[14px] font-body text-[#6B6F7B]">Very Good</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
