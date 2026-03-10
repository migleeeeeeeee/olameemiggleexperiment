import { useState, useCallback } from 'react'
import {
  Button,
  Icon,
  iconCategories,
  getIconsByCategory,
  IconButton,
  Input,
  InputWithDropdown,
  SearchBar,
  Textarea,
  DatePickerInput,
  DateRangePickerInput,
  CalendarDatePicker,
  TimePickerInput,
  TimeRangePickerInput,
  AmPmToggle,
  TimePickerUI,
  TimeRangePickerUI,
  Counter,
  FileUpload,
  Text,
  Checkbox,
  RadioGroup,
  RadioItem,
  Toggle,
  Chip,
  FilterChip,
  Tag,
  Tooltip,
  RichTooltip,
  ProgressBar,
  StepProgress,
  CircularChart,
  BarProgress,
  Slider,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardHeader,
  CardFooter,
  ClickableCard,
  ProfileCard,
  SingleSelectDropdown,
  MultiSelectDropdown,
  MultiSelectorSearchBar,
  PhoneNumberField,
  CountrySelection,
  Sidebar,
  TopNavbar,
  Tabs,
  Tab,
  Toast,
  Snackbar,
  Notification,
  ModalForm,
  CardForm,
  FormTitleBar,
  FormFieldRow,
  FormFooter,
  FormBody,
  tokens,
} from '@/design-system'
import type { IconName, AmPmValue, UploadedFile, PhoneNumberValue, SelectionOption, SidebarSection } from '@/design-system'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <Text variant="h4" weight="bold">{title}</Text>
      <div className="border border-gunmetal-200 rounded-[var(--radius-lg)] p-6 space-y-4 bg-white">
        {children}
      </div>
    </section>
  )
}

const demoSidebarSections: SidebarSection[] = [
  {
    title: 'Find',
    items: [
      { icon: 'om-dashboard', label: 'Dashboard' },
      {
        icon: 'om-applicants',
        label: 'Applicants',
        expandable: true,
        subItems: [
          { label: 'All Applicants', active: true },
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
]

/** Olamee gradient logo — extracted from Figma node 2531:14517 */
function OlameeLogo({ className }: { className?: string }) {
  return (
    <svg width="117" height="50" viewBox="0 0 117 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M37.5758 40.0782C37.2717 41.0522 36.8676 41.9834 36.3636 42.8715C35.0926 45.0838 33.3318 46.8318 31.0811 48.1155C28.8304 49.3718 26.3149 50 23.5346 50C20.7279 50 18.1992 49.3718 15.9485 48.1155C14.3566 47.2075 13.0032 46.0605 11.8882 44.6744L15.0219 42.3771C15.8358 43.4002 16.8199 44.2479 17.9741 44.92C19.6423 45.8759 21.4958 46.3538 23.5346 46.3538C25.5735 46.3538 27.4006 45.8759 29.0158 44.92C30.6574 43.964 31.9416 42.653 32.8684 40.987C33.2232 40.3566 33.5119 39.6998 33.7347 39.0166L37.5758 40.0782Z" fill="url(#olamee_g0)"/>
      <path d="M25.2901 31.0081C25.2901 31.7027 25.4585 32.2441 25.7952 32.6323C26.1517 33 26.6469 33.1839 27.2807 33.1839C27.5184 33.1839 27.756 33.1532 27.9937 33.0919C28.2512 33.0306 28.4493 32.9591 28.588 32.8774L28.7959 36.5855C28.0234 36.851 27.2213 36.9838 26.3894 36.9838C24.587 36.9838 23.1807 36.4935 22.1706 35.5129C21.1604 34.5118 20.6554 33.1021 20.6554 31.2839V14H25.2901V31.0081Z" fill="url(#olamee_g1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.79414 16.8639C10.4777 16.8639 11.983 17.2316 13.31 17.9671C14.6371 18.6822 15.6769 19.6832 16.4296 20.9703C17.1822 22.2574 17.5586 23.7182 17.5586 25.3526C17.5586 26.987 17.1822 28.4478 16.4296 29.7348C15.6769 31.0219 14.6371 32.0332 13.31 32.7687C11.983 33.4837 10.4777 33.8413 8.79414 33.8413C7.11058 33.8413 5.59535 33.4837 4.24851 32.7687C2.92147 32.0332 1.8816 31.0219 1.12895 29.7348C0.376307 28.4478 6.1839e-06 26.987 0 25.3526C0 23.7182 0.3763 22.2574 1.12895 20.9703C1.8816 19.6832 2.92147 18.6822 4.24851 17.9671C5.59535 17.2316 7.11058 16.8639 8.79414 16.8639ZM8.79414 20.7865C7.60575 20.7865 6.62533 21.2053 5.85288 22.0429C5.08042 22.8601 4.69419 23.9634 4.69419 25.3526C4.6942 26.7418 5.08042 27.8553 5.85288 28.6929C6.62533 29.5101 7.60576 29.9187 8.79414 29.9187C9.98253 29.9187 10.9531 29.5101 11.7058 28.6929C12.4782 27.8553 12.8644 26.7418 12.8644 25.3526C12.8644 23.9634 12.4782 22.8601 11.7058 22.0429C10.9531 21.2052 9.98253 20.7865 8.79414 20.7865Z" fill="url(#olamee_g2)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5865 16.8639C39.6266 16.8639 41.221 17.5278 42.3698 18.8558V17.109H47.0045V33.5961H42.5778V31.6961C41.429 33.1262 39.7652 33.8413 37.5865 33.8413C36.0812 33.8413 34.7145 33.494 33.4865 32.7993C32.2783 32.1047 31.3276 31.1138 30.6343 29.8267C29.9411 28.5397 29.5946 27.0483 29.5946 25.3526C29.5946 23.6569 29.9411 22.1655 30.6343 20.8784C31.3276 19.5913 32.2783 18.6004 33.4865 17.9058C34.7145 17.2112 36.0812 16.8639 37.5865 16.8639ZM38.3887 20.7865C37.2003 20.7865 36.2198 21.2052 35.4474 22.0429C34.6749 22.8601 34.2887 23.9634 34.2887 25.3526C34.2887 26.7418 34.6749 27.8553 35.4474 28.6929C36.2198 29.5101 37.2003 29.9187 38.3887 29.9187C39.5573 29.9186 40.5278 29.5101 41.3002 28.6929C42.0727 27.8553 42.4589 26.7418 42.4589 25.3526C42.4589 23.9634 42.0727 22.8601 41.3002 22.0429C40.5278 21.2053 39.5573 20.7865 38.3887 20.7865Z" fill="url(#olamee_g3)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M89.9994 16.8608C91.5245 16.8608 92.911 17.1979 94.1588 17.872C95.4066 18.5258 96.3969 19.4861 97.1298 20.7527C97.8824 21.999 98.2587 23.4802 98.2587 25.1963L86.4342 27.5559C86.771 28.3731 87.2958 28.986 88.0088 29.3946C88.7416 29.8032 89.633 30.0076 90.6827 30.0076C91.5146 30.0076 92.2475 29.8849 92.8813 29.6398C93.5349 29.3742 94.139 28.9656 94.6936 28.414L97.1595 31.1721C95.6542 32.9495 93.4557 33.8382 90.5639 33.8382C88.7615 33.8382 87.1671 33.4807 85.7806 32.7656C84.3942 32.0301 83.3245 31.0189 82.5719 29.7318C81.8192 28.4447 81.4429 26.9839 81.4429 25.3495C81.4429 23.7356 81.8094 22.285 82.5422 20.9979C83.2949 19.6904 84.3149 18.6791 85.6023 17.964C86.9096 17.2286 88.3753 16.8608 89.9994 16.8608ZM89.9994 20.4769C88.8308 20.4769 87.8801 20.8651 87.1472 21.6414C86.4144 22.4177 86.0282 23.4903 85.9886 24.8592L93.7726 23.2963C93.5547 22.4382 93.109 21.7538 92.4356 21.243C91.7622 20.7323 90.9501 20.4769 89.9994 20.4769Z" fill="url(#olamee_g4)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M108.741 16.8608C110.266 16.8608 111.652 17.1979 112.9 17.872C114.148 18.5258 115.138 19.4861 115.871 20.7527C116.624 21.999 117 23.4802 117 25.1963L105.175 27.5559C105.512 28.3731 106.037 28.986 106.75 29.3946C107.483 29.8032 108.374 30.0076 109.424 30.0076C110.256 30.0076 110.989 29.8849 111.623 29.6398C112.276 29.3742 112.88 28.9656 113.435 28.414L115.901 31.1721C114.395 32.9495 112.197 33.8382 109.305 33.8382C107.503 33.8382 105.908 33.4807 104.522 32.7656C103.135 32.0301 102.066 31.0189 101.313 29.7318C100.56 28.4447 100.184 26.9839 100.184 25.3495C100.184 23.7356 100.551 22.285 101.283 20.9979C102.036 19.6904 103.056 18.6791 104.344 17.964C105.651 17.2286 107.117 16.8608 108.741 16.8608ZM108.741 20.4769C107.572 20.4769 106.621 20.8651 105.888 21.6414C105.156 22.4177 104.769 23.4903 104.73 24.8592L112.514 23.2963C112.296 22.4382 111.85 21.7538 111.177 21.243C110.503 20.7323 109.691 20.4769 108.741 20.4769Z" fill="url(#olamee_g5)"/>
      <path d="M71.7652 16.8608C73.7657 16.8608 75.3503 17.4737 76.5189 18.6995C77.7073 19.9048 78.3014 21.7231 78.3015 24.1543V33.593H73.6667V24.8898C73.6667 23.5823 73.3993 22.6119 72.8645 21.9786C72.3496 21.3248 71.6068 20.9979 70.6363 20.9979C69.5469 20.9979 68.6853 21.3656 68.0515 22.1011C67.4177 22.8162 67.1008 23.8888 67.1008 25.3189V33.593H62.466V24.8898C62.466 22.2952 61.4559 20.9979 59.4356 20.9979C58.366 20.9979 57.5144 21.3656 56.8805 22.1011C56.2467 22.8162 55.9298 23.8888 55.9298 25.3189V33.593H51.2951V17.1059H55.7219V19.006C56.3161 18.3113 57.039 17.7802 57.8907 17.4124C58.7622 17.0447 59.7129 16.8608 60.7428 16.8608C61.8718 16.8608 62.8919 17.0958 63.803 17.5657C64.7141 18.0151 65.447 18.6791 66.0015 19.5576C66.6552 18.6995 67.4771 18.0355 68.4675 17.5657C69.4776 17.0958 70.5768 16.8608 71.7652 16.8608Z" fill="url(#olamee_g6)"/>
      <defs>
        {[0,1,2,3,4,5,6].map(i => (
          <linearGradient key={i} id={`olamee_g${i}`} x1="-3.71523" y1="51.5829" x2="109.146" y2="-12.1177" gradientUnits="userSpaceOnUse">
            <stop offset="0.159" stopColor="#7A5FFF"/>
            <stop offset="0.774" stopColor="#5ED4B2"/>
          </linearGradient>
        ))}
      </defs>
    </svg>
  )
}

/* ── Inline SVG icons for Create dropdown (from Figma, fill #30343F) ── */
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

/** Outline phone icon — extracted from Figma "Call minimized" (stroke only, #7A5FFF) */
const PhoneOutlineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M10.483 9.48L9.486 10.477C9.335 10.627 9.019 10.669 8.837 10.563C8.782 10.534 8.735 10.51 8.665 10.47C8.542 10.4 8.402 10.313 8.248 10.209C7.803 9.909 7.34 9.533 6.886 9.079C6.432 8.625 6.057 8.163 5.757 7.718C5.653 7.565 5.4 7.124 5.4 7.124C5.293 6.946 5.335 6.632 5.488 6.479L6.485 5.482C7.018 4.949 7.075 4.06 6.612 3.466L4.737 1.391C4.242 0.754 3.458 0.513 2.886 1.085L1.389 2.582C-0.336 4.307 1.754 8.655 4.573 11.475C7.392 14.294 11.658 16.301 13.383 14.576L14.88 13.079C15.452 12.507 15.308 11.77 14.67 11.274L12.499 9.353C11.906 8.891 11.016 8.947 10.483 9.48Z" stroke="#7A5FFF" strokeWidth="1.25" fill="none"/>
  </svg>
)

/** Create dropdown menu — matches Figma "pull down buttons menu" */
const createMenuItems = [
  { icon: DropdownBriefcaseIcon, label: 'Create new Job' },
  { icon: DropdownTeamIcon, label: 'Create new Team Member' },
  { icon: DropdownHandshakeIcon, label: 'Create new Client' },
  { icon: DropdownPositionIcon, label: 'Create new Position' },
]

// ── Table View Demo Data ──────────────────────────────────────
const tableColumns = [
  { key: 'name', label: 'Team Members', width: 'w-[220px]' },
  { key: 'dateRequested', label: 'Date Requested', width: 'w-[140px]' },
  { key: 'timeRange', label: 'Time Range', width: 'w-[150px]' },
  { key: 'duration', label: 'Duration', width: 'w-[110px]' },
  { key: 'amount', label: 'Amount', width: 'w-[120px]' },
  { key: 'reason', label: 'Reason', width: 'min-w-[200px] flex-1' },
  { key: 'status', label: 'Status', width: 'w-[130px]' },
] as const

type TableRow = {
  name: string
  avatar: string
  dateRequested: string
  timeRange: string
  duration: string
  amount: string
  reason: string
  status: 'Approved' | 'Pending' | 'Denied'
}

const tableData: TableRow[] = [
  { name: 'Julie Noted', avatar: '#7A5FFF', dateRequested: 'Sept. 15, 2024', timeRange: '10:00 AM – 12:00 PM', duration: '+02:00:00', amount: '$ 10,000.00', reason: 'I got caught up in a convo and lost track of the time and...', status: 'Approved' },
  { name: 'Justin Credible', avatar: '#5ED4B2', dateRequested: 'Sept. 15, 2024', timeRange: '10:00 AM – 12:00 PM', duration: '+02:00:00', amount: '$ 10,000.00', reason: 'I requested a time adjustment because of the event I attended...', status: 'Approved' },
  { name: 'Vamphyr Rite', avatar: '#EAD94C', dateRequested: 'Sept. 15, 2024', timeRange: '10:00 AM – 12:00 PM', duration: '+02:00:00', amount: '$ 10,000.00', reason: 'Forgot to clock in.', status: 'Approved' },
  { name: 'Shinfan Ziné', avatar: '#FF9F1C', dateRequested: 'Sept. 15, 2024', timeRange: '10:00 AM – 12:00 PM', duration: '+02:00:00', amount: '$ 10,000.00', reason: 'I got caught up in a convo and lost track of the time and...', status: 'Pending' },
  { name: 'Karl Drone', avatar: '#D62839', dateRequested: 'Sept. 15, 2024', timeRange: '1:00 PM – 1:30 PM', duration: '-00:30:00', amount: '$ 10,000.00', reason: 'I requested a time adjustment because of the event I attended...', status: 'Approved' },
  { name: 'Pollou Shawn', avatar: '#5FB54E', dateRequested: 'Sept. 15, 2024', timeRange: '12:12 PM – 2:12 PM', duration: '+02:00:00', amount: '$ 10,000.00', reason: 'Forgot to clock in.', status: 'Approved' },
  { name: 'Pao Sigue Rivers', avatar: '#18E8FF', dateRequested: 'Sept. 21, 2024', timeRange: '2:16 PM – 4:16 PM', duration: '+02:00:00', amount: '$ 10,000.00', reason: 'I thought I had already tracked my time.', status: 'Approved' },
  { name: 'Justin Case', avatar: '#A30B37', dateRequested: 'Sept. 28, 2024', timeRange: '10:00 AM – 12:00 PM', duration: '+02:00:00', amount: '$ 10,000.00', reason: "I didn't know the tracker was still running.", status: 'Approved' },
  { name: 'Lennon Nate Stan', avatar: '#283044', dateRequested: 'Sept. 20, 2024', timeRange: '10:00 AM – 12:00 PM', duration: '+02:00:00', amount: '$ 10,000.00', reason: "I didn't know the tracker was still running.", status: 'Approved' },
  { name: 'Palla Buck', avatar: '#646F58', dateRequested: 'Sept. 18, 2024', timeRange: '1:00 PM – 1:30 PM', duration: '-00:30:00', amount: '$ 10,000.00', reason: 'I lost track of time over coffee.', status: 'Denied' },
]

const statusColorMap: Record<TableRow['status'], 'success' | 'warning' | 'error'> = {
  Approved: 'success',
  Pending: 'warning',
  Denied: 'error',
}

const tableTabs = ['Choice One', 'Choice Two', 'Choice Three', 'Choice Four', 'Choice Five', 'Choice Six']

function TableViewShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [checkedRows, setCheckedRows] = useState<Set<number>>(new Set())
  const [allChecked, setAllChecked] = useState(false)

  const toggleAll = useCallback(() => {
    if (allChecked) {
      setCheckedRows(new Set())
      setAllChecked(false)
    } else {
      setCheckedRows(new Set(tableData.map((_, i) => i)))
      setAllChecked(true)
    }
  }, [allChecked])

  const toggleRow = useCallback((idx: number) => {
    setCheckedRows(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }, [])

  return (
    <Section title="Table Views">
      {/* ── Default Table View ── */}
      <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[28px] p-[24px] flex flex-col gap-[16px] shadow-[0_1px_3px_1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Table Tabs */}
        <div className="flex items-start overflow-x-auto">
          {tableTabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`flex items-center justify-center h-[32px] px-[12px] min-w-[90px] max-w-[240px] shrink-0 whitespace-nowrap font-body tracking-[-0.384px] text-[16px] leading-[20px] transition-colors ${
                i === activeTab
                  ? 'border-b-[3px] border-[#7A5FFF] font-bold text-[#6F54EB]'
                  : 'border-b border-[#D7D8DC] font-medium text-[#30343F] hover:text-[#6F54EB]'
              }`}
            >
              {tab}
            </button>
          ))}
          {/* Fill remaining space with border */}
          <div className="flex-1 border-b border-[#D7D8DC] h-[32px]" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-[8px]">
          <div className="flex items-center gap-[8px]">
            {/* Filter button */}
            <button className="flex items-center justify-center size-[36px] rounded-[10px] border border-[#B2B4BA] text-[#30343F] hover:bg-[#F4F4F6] transition-colors">
              <i className="fa-regular fa-filter text-[14px]" />
            </button>
            {/* Divider */}
            <div className="w-0 h-[24px] border-l border-[#D7D8DC]" />
            {/* Search bar */}
            <div className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[24px] flex items-center h-[36px] px-[16px] py-[8px] w-[403px] gap-[10px] overflow-hidden">
              <i className="fa-regular fa-magnifying-glass text-[12px] text-[#8D8F97] shrink-0" />
              <span className="font-body font-normal text-[14px] leading-[18px] text-[#8D8F97] truncate">
                Search for [Placeholder 1], [Placeholder 2]
              </span>
            </div>
          </div>
          <button className="flex items-center justify-center size-[36px] rounded-[10px] border border-[#B2B4BA] text-[#30343F] hover:bg-[#F4F4F6] transition-colors">
            <i className="fa-regular fa-list text-[14px]" />
          </button>
        </div>

        {/* Results count */}
        <div className="font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
          Showing 15 out of 200 results
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EFF0F3]">
                <th className="w-[40px] px-[8px] py-[11px] text-left">
                  <Checkbox
                    checked={allChecked}
                    onCheckedChange={toggleAll}
                  />
                </th>
                {tableColumns.map(col => (
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
              {tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-[#EFF0F3] ${checkedRows.has(idx) ? 'bg-[#F5F3FF]' : idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'} hover:bg-[#F5F3FF] transition-colors`}
                >
                  <td className="px-[8px] py-[8px]">
                    <Checkbox
                      checked={checkedRows.has(idx)}
                      onCheckedChange={() => toggleRow(idx)}
                    />
                  </td>
                  {/* Team Members */}
                  <td className="px-[16px] py-[8px]">
                    <div className="flex items-center gap-[16px]">
                      <div
                        className="size-[14px] rounded-full shrink-0"
                        style={{ backgroundColor: row.avatar }}
                      />
                      <span className="font-body font-normal text-[12px] leading-[14px] text-[#30343F] truncate">
                        {row.name}
                      </span>
                    </div>
                  </td>
                  {/* Date Requested */}
                  <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                    {row.dateRequested}
                  </td>
                  {/* Time Range */}
                  <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                    {row.timeRange}
                  </td>
                  {/* Duration */}
                  <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                    {row.duration}
                  </td>
                  {/* Amount */}
                  <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
                    {row.amount}
                  </td>
                  {/* Reason */}
                  <td className="px-[16px] py-[8px] font-body font-normal text-[12px] leading-[14px] text-[#30343F] truncate max-w-[300px]">
                    {row.reason}
                  </td>
                  {/* Status */}
                  <td className="px-[16px] py-[8px]">
                    <Tag color={statusColorMap[row.status]} size="small">
                      {row.status}
                    </Tag>
                  </td>
                  {/* Action */}
                  <td className="px-[16px] py-[8px]">
                    <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] hover:bg-[#F4F4F6] transition-colors">
                      <i className="fa-regular fa-ellipsis-vertical text-[12px]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F]">
            Showing 15 out of 200 results
          </span>
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center gap-[8px]">
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75">
                <i className="fa-regular fa-angles-left text-[10px]" />
              </button>
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75">
                <i className="fa-solid fa-chevron-left text-[10px]" />
              </button>
            </div>
            <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F] whitespace-nowrap">
              Page 1 of 14
            </span>
            <div className="flex items-center gap-[8px]">
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#30343F] hover:bg-[#F4F4F6]">
                <i className="fa-solid fa-chevron-right text-[10px]" />
              </button>
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#30343F] hover:bg-[#F4F4F6]">
                <i className="fa-regular fa-angles-right text-[10px]" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F] whitespace-nowrap">
              Go to Page:
            </span>
            <input
              type="text"
              defaultValue="1"
              className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[6px] px-[12px] py-[4px] h-[24px] w-[48px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]"
            />
            <div className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[6px] px-[12px] py-[4px] h-[24px] font-body font-medium text-[12px] leading-[14px] text-[#30343F] flex items-center">
              Show 15
            </div>
          </div>
        </div>
      </div>

      {/* ── No Results State ── */}
      <Text variant="body-base" weight="semibold" className="mt-4">No Results Found State</Text>
      <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[28px] p-[24px] flex flex-col gap-[16px] shadow-[0_1px_3px_1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Same tabs */}
        <div className="flex items-start overflow-x-auto">
          {tableTabs.map((tab, i) => (
            <button
              key={tab}
              className={`flex items-center justify-center h-[32px] px-[12px] min-w-[90px] max-w-[240px] shrink-0 whitespace-nowrap font-body tracking-[-0.384px] text-[16px] leading-[20px] ${
                i === 0
                  ? 'border-b-[3px] border-[#7A5FFF] font-bold text-[#6F54EB]'
                  : 'border-b border-[#D7D8DC] font-medium text-[#30343F]'
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="flex-1 border-b border-[#D7D8DC] h-[32px]" />
        </div>

        {/* Toolbar (same as above) */}
        <div className="flex items-center justify-between gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <button className="flex items-center justify-center size-[36px] rounded-[10px] border border-[#B2B4BA] text-[#30343F]">
              <i className="fa-regular fa-filter text-[14px]" />
            </button>
            <div className="w-0 h-[24px] border-l border-[#D7D8DC]" />
            <div className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[24px] flex items-center h-[36px] px-[16px] py-[8px] w-[403px] gap-[10px]">
              <i className="fa-regular fa-magnifying-glass text-[12px] text-[#8D8F97]" />
              <span className="font-body font-normal text-[14px] leading-[18px] text-[#8D8F97]">
                Search for [Placeholder 1], [Placeholder 2]
              </span>
            </div>
          </div>
          <button className="flex items-center justify-center size-[36px] rounded-[10px] border border-[#B2B4BA] text-[#30343F]">
            <i className="fa-regular fa-list text-[14px]" />
          </button>
        </div>

        {/* Summary row */}
        <div className="font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
          Showing 0 results
        </div>

        {/* Empty table headers */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EFF0F3]">
                <th className="w-[40px] px-[8px] py-[11px] text-left">
                  <Checkbox checked={false} disabled />
                </th>
                {tableColumns.map(col => (
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
          </table>
        </div>

        {/* No results illustration */}
        <div className="flex flex-col items-center justify-center py-[48px] gap-[16px]">
          <div className="size-[120px] rounded-full bg-[#F4F4F6] flex items-center justify-center">
            <i className="fa-regular fa-magnifying-glass text-[48px] text-[#B2B4BA]" />
          </div>
          <Text variant="h5" weight="bold" className="text-[#30343F]">No Results Found</Text>
          <Text variant="body-sm" className="text-[#8D8F97] text-center max-w-[320px]">
            Try adjusting your search or filter to find what you're looking for.
          </Text>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F]">
            Showing 0 results
          </span>
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center gap-[8px]">
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75" disabled>
                <i className="fa-regular fa-angles-left text-[10px]" />
              </button>
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75" disabled>
                <i className="fa-solid fa-chevron-left text-[10px]" />
              </button>
            </div>
            <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F] whitespace-nowrap">
              Page 1 of 1
            </span>
            <div className="flex items-center gap-[8px]">
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75" disabled>
                <i className="fa-solid fa-chevron-right text-[10px]" />
              </button>
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75" disabled>
                <i className="fa-regular fa-angles-right text-[10px]" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F] whitespace-nowrap">
              Go to Page:
            </span>
            <input
              type="text"
              defaultValue="1"
              className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[6px] px-[12px] py-[4px] h-[24px] w-[48px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]"
              disabled
            />
            <div className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[6px] px-[12px] py-[4px] h-[24px] font-body font-medium text-[12px] leading-[14px] text-[#30343F] flex items-center">
              Show 15
            </div>
          </div>
        </div>
      </div>

      {/* ── No Info Available State ── */}
      <Text variant="body-base" weight="semibold" className="mt-4">No Information Available State</Text>
      <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[28px] p-[24px] flex flex-col gap-[16px] shadow-[0_1px_3px_1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Tabs */}
        <div className="flex items-start overflow-x-auto">
          {tableTabs.map((tab, i) => (
            <button
              key={tab}
              className={`flex items-center justify-center h-[32px] px-[12px] min-w-[90px] max-w-[240px] shrink-0 whitespace-nowrap font-body tracking-[-0.384px] text-[16px] leading-[20px] ${
                i === 0
                  ? 'border-b-[3px] border-[#7A5FFF] font-bold text-[#6F54EB]'
                  : 'border-b border-[#D7D8DC] font-medium text-[#30343F]'
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="flex-1 border-b border-[#D7D8DC] h-[32px]" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <button className="flex items-center justify-center size-[36px] rounded-[10px] border border-[#B2B4BA] text-[#30343F]">
              <i className="fa-regular fa-filter text-[14px]" />
            </button>
            <div className="w-0 h-[24px] border-l border-[#D7D8DC]" />
            <div className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[24px] flex items-center h-[36px] px-[16px] py-[8px] w-[403px] gap-[10px]">
              <i className="fa-regular fa-magnifying-glass text-[12px] text-[#8D8F97]" />
              <span className="font-body font-normal text-[14px] leading-[18px] text-[#8D8F97]">
                Search for [Placeholder 1], [Placeholder 2]
              </span>
            </div>
          </div>
          <button className="flex items-center justify-center size-[36px] rounded-[10px] border border-[#B2B4BA] text-[#30343F]">
            <i className="fa-regular fa-list text-[14px]" />
          </button>
        </div>

        {/* Summary */}
        <div className="font-body font-normal text-[12px] leading-[14px] text-[#30343F]">
          Showing 0 results
        </div>

        {/* Headers */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EFF0F3]">
                <th className="w-[40px] px-[8px] py-[11px] text-left">
                  <Checkbox checked={false} disabled />
                </th>
                {tableColumns.map(col => (
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
          </table>
        </div>

        {/* No info illustration */}
        <div className="flex flex-col items-center justify-center py-[48px] gap-[16px]">
          <div className="size-[120px] rounded-full bg-[#F4F4F6] flex items-center justify-center">
            <i className="fa-regular fa-circle-info text-[48px] text-[#B2B4BA]" />
          </div>
          <Text variant="h5" weight="bold" className="text-[#30343F]">Currently, there is no information available.</Text>
          <Text variant="body-sm" className="text-[#8D8F97] text-center max-w-[400px]">
            Results will be displayed here, once data is being loaded/available.
          </Text>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F]">
            Showing 0 results
          </span>
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center gap-[8px]">
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75" disabled>
                <i className="fa-regular fa-angles-left text-[10px]" />
              </button>
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75" disabled>
                <i className="fa-solid fa-chevron-left text-[10px]" />
              </button>
            </div>
            <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F] whitespace-nowrap">
              Page 1 of 1
            </span>
            <div className="flex items-center gap-[8px]">
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75" disabled>
                <i className="fa-solid fa-chevron-right text-[10px]" />
              </button>
              <button className="flex items-center justify-center size-[24px] rounded-[8px] text-[#8D8F97] opacity-75" disabled>
                <i className="fa-regular fa-angles-right text-[10px]" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="font-body font-normal text-[14px] leading-[18px] text-[#30343F] whitespace-nowrap">
              Go to Page:
            </span>
            <input
              type="text"
              defaultValue="1"
              className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[6px] px-[12px] py-[4px] h-[24px] w-[48px] font-body font-normal text-[12px] leading-[14px] text-[#30343F]"
              disabled
            />
            <div className="bg-[#FDFDFE] border border-[#B2B4BA] rounded-[6px] px-[12px] py-[4px] h-[24px] font-body font-medium text-[12px] leading-[14px] text-[#30343F] flex items-center">
              Show 15
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function LayoutShowcase() {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState<'purple' | 'secondary' | 'space-cadet'>('purple')
  const [createOpen, setCreateOpen] = useState(false)

  /** Right-side content with interactive Create button */
  const navbarRight = (
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
        {/* Dropdown — Figma "pull down buttons menu" (node 2515:43904) */}
        {createOpen && (
          <div className="absolute top-[calc(100%+8px)] right-0 z-50 bg-[#FDFDFE] rounded-[12px] shadow-elevation-2 py-2 px-4 w-[266px]"
               style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
      <IconButton hierarchy="tertiary" size="lg" colorScheme="violet" icon={<Icon name="bell" size="lg" faStyle="light" style={{ color: '#30343F' }} />} aria-label="Notifications" />
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center size-[36px] rounded-full bg-[#F6F4FF] border border-[#7C81A0]">
          <Text variant="body-sm" weight="bold" className="text-primary-500">E</Text>
        </div>
        <span className="text-[14px] font-bold leading-[18px] text-[#30343F]" style={{ fontFamily: 'Inter, sans-serif' }}>Ola, Evan!</span>
      </div>
    </div>
  )

  return (
    <>
      <Section title="Layout: Sidebar">
        <Text variant="body-sm" color="muted" className="mb-4">
          Collapsible sidebar with icon navigation, sub-items, badges, and 3 theme variants.
          Collapsed = 88px (icons + tooltips), Expanded = 288px (icons + labels + sub-nav).
        </Text>

        {/* Theme picker */}
        <div className="flex items-center gap-2 mb-4">
          <Text variant="body-sm" weight="medium">Theme:</Text>
          {(['purple', 'secondary', 'space-cadet'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-3 py-1 rounded-[8px] text-[13px] font-body font-medium transition-colors ${
                theme === t
                  ? 'bg-primary-500 text-white'
                  : 'bg-gunmetal-100 text-gunmetal-500 hover:bg-gunmetal-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Sidebar demo */}
        <div className="flex border border-gunmetal-200 rounded-[12px] overflow-hidden h-[500px]">
          <Sidebar
            sections={demoSidebarSections}
            activeTab="Dashboard"
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
            theme={theme}
          />
          <div className="flex-1 flex items-center justify-center bg-gunmetal-50">
            <div className="text-center">
              <Text variant="h5" color="muted">Main Content Area</Text>
              <Text variant="body-sm" color="muted-light" className="mt-1">
                Sidebar is {collapsed ? 'collapsed (88px)' : 'expanded (288px)'}
              </Text>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Layout: TopNavbar">
        <Text variant="body-sm" color="muted" className="mb-4">
          Top navigation bar matching Figma "Top navbar" component (node 2958:31674).
          Click the "+ Create" button to toggle the dropdown menu.
        </Text>

        {/* Default state (with interactive Create dropdown) */}
        <Text variant="body-sm" weight="medium" className="mb-2">State: Default</Text>
        <div className="border border-gunmetal-200 rounded-[12px] overflow-visible">
          <TopNavbar
            leftContent={<OlameeLogo />}
            centerContent={<SearchBar />}
            rightContent={navbarRight}
            className="rounded-[12px]"
          />
        </div>

        {/* On-going Call state — matches Figma State=On-going Call (6310:6018) */}
        <Text variant="body-sm" weight="medium" className="mt-4 mb-2">State: On-going Call</Text>
        <div className="border border-gunmetal-200 rounded-[12px] overflow-hidden">
          <TopNavbar
            state="on-going-call"
            leftContent={<OlameeLogo />}
            centerContent={<SearchBar />}
            rightContent={
              <div className="flex items-center gap-2">
                {/* Call indicator — Figma: bg #F6F4FF, rounded-8, px-12, gap-8, no border */}
                <div className="flex items-center gap-2 px-3 h-[36px] rounded-[8px] bg-[#F6F4FF]">
                  <PhoneOutlineIcon />
                  <span className="flex items-center gap-1">
                    <span className="size-[6px] rounded-full bg-[#D62839]" />
                    <span className="text-[14px] font-body font-medium text-primary-500 tabular-nums">00:29:35</span>
                  </span>
                </div>
                <Button hierarchy="secondary" size="small" colorScheme="violet" leadIcon={<Icon name="plus" size="xs" />}>
                  Create
                </Button>
                <IconButton hierarchy="tertiary" size="lg" colorScheme="violet" icon={<Icon name="bell" size="lg" faStyle="light" style={{ color: '#30343F' }} />} aria-label="Notifications" />
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center size-[36px] rounded-full bg-[#F6F4FF] border border-[#7C81A0]">
                    <Text variant="body-sm" weight="bold" className="text-primary-500">E</Text>
                  </div>
                  <span className="text-[14px] font-bold leading-[18px] text-[#30343F]" style={{ fontFamily: 'Inter, sans-serif' }}>Ola, Evan!</span>
                </div>
              </div>
            }
          />
        </div>
      </Section>
    </>
  )
}


export default function ComponentShowcase() {
  const [progress, setProgress] = useState(65)
  const [amPmValue, setAmPmValue] = useState<AmPmValue>('AM')
  const [counterXs, setCounterXs] = useState(5)
  const [counterSm, setCounterSm] = useState(19)
  const [counterMd, setCounterMd] = useState(42)
  const [counterDisabled, setCounterDisabled] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])

  // Selection Fields state
  const demoOptions: SelectionOption[] = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'finance', label: 'Finance' },
    { value: 'operations', label: 'Operations' },
    { value: 'legal', label: 'Legal', disabled: true },
  ]
  const [singleValue, setSingleValue] = useState<string>('')
  const [singleFilledValue, setSingleFilledValue] = useState<string>('engineering')
  const [multiValue, setMultiValue] = useState<string[]>([])
  const [multiFilledValue, setMultiFilledValue] = useState<string[]>(['engineering', 'design', 'marketing'])
  const [searchBarValue, setSearchBarValue] = useState<string[]>(['engineering', 'design'])
  const [phoneValue, setPhoneValue] = useState<PhoneNumberValue>({ countryCode: 'US', number: '' })
  const [countryValue, setCountryValue] = useState<string>('')
  const [addNewOptions, setAddNewOptions] = useState<SelectionOption[]>([...demoOptions])
  const [tabViolet, setTabViolet] = useState('one')
  const [tabMint, setTabMint] = useState('one')
  const [tabDark, setTabDark] = useState('one')

  const handleFilesAdd = useCallback((newFiles: File[]) => {
    const mapped: UploadedFile[] = newFiles.map((file) => ({
      file,
      id: `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
    }))
    setUploadedFiles((prev) => [...prev, ...mapped])
  }, [])

  const handleFileRemove = useCallback((id: string) => {
    setUploadedFiles((prev) => {
      const file = prev.find((f) => f.id === id)
      if (file?.previewUrl) URL.revokeObjectURL(file.previewUrl)
      return prev.filter((f) => f.id !== id)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gunmetal-50 p-8 max-w-[1400px] mx-auto space-y-10">
      {/* ── Header ──────────────────────────────────── */}
      <div className="space-y-2">
        <Text variant="h1" weight="bold" color="primary">Olamee Design System</Text>
        <Text variant="body-lg" color="muted">
          Code-based source of truth — synced with Figma
        </Text>
      </div>

      {/* ── Color Palette ───────────────────────────── */}
      <Section title="Color Palette">
        {Object.entries(tokens.colors).map(([family, shades]) => {
          if (typeof shades === 'string') return null
          return (
            <div key={family}>
              <Text variant="body-sm" weight="semibold" className="mb-2 capitalize">{family}</Text>
              <div className="flex gap-1">
                {Object.entries(shades).map(([shade, hex]) => (
                  <div key={shade} className="flex flex-col items-center gap-1">
                    <div
                      className="w-10 h-10 rounded-[var(--radius-md)] border border-gunmetal-200"
                      style={{ backgroundColor: hex }}
                      title={`${family}/${shade}: ${hex}`}
                    />
                    <Text variant="body-xs" color="muted">{shade}</Text>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
        <div>
          <Text variant="body-sm" weight="semibold" className="mb-2">Gradient</Text>
          <div
            className="h-10 w-64 rounded-[var(--radius-md)]"
            style={{ background: tokens.gradients.brand }}
          />
        </div>
      </Section>

      {/* ── Typography ──────────────────────────────── */}
      <Section title="Typography Scale">
        <Text variant="body-sm" weight="semibold" color="muted">Headlines — Montserrat</Text>
        <Text variant="h1" weight="bold">H1 Bold — 36/40</Text>
        <Text variant="h2" weight="semibold">H2 Semibold — 32/36</Text>
        <Text variant="h3" weight="bold">H3 Bold — 28/32</Text>
        <Text variant="h4" weight="regular">H4 Regular — 24/28</Text>
        <Text variant="h5" weight="semibold">H5 Semibold — 20/24</Text>
        <Text variant="h6" weight="bold">H6 Bold — 16/20</Text>

        <hr className="border-gunmetal-100" />
        <Text variant="body-sm" weight="semibold" color="muted">Body Text — Karla Regular</Text>
        <Text variant="body-lg">Body Large — 16/20</Text>
        <Text variant="body-base">Body Base — 14/18 (default)</Text>
        <Text variant="body-sm" color="muted">Body Small — 12/14</Text>
        <Text variant="body-xs" color="muted">Body X-Small — 10/12</Text>

        <hr className="border-gunmetal-100" />
        <Text variant="body-sm" weight="semibold" color="muted">Button Text — Karla Medium (-2.4% tracking)</Text>
        <Text variant="btn-lg" as="p">Button Large — 20/28</Text>
        <Text variant="btn-base" as="p">Button Medium — 16/20</Text>
        <Text variant="btn-sm" as="p">Button Small — 16/20</Text>
        <Text variant="btn-xs" as="p">Button XSmall — 12/16</Text>
      </Section>

      {/* ── Icon Library ─────────────────────────────── */}
      <Section title="Icon Library">
        {/* Icon Wrapper — Size Variants */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Icon Wrapper Sizes</Text>
          <Text variant="body-xs" color="muted">
            The Icon wrapper controls sizing: 2xs (12px), xs (16px), sm (20px), md (24px), lg (32px)
          </Text>
          <div className="flex items-end gap-6 pt-2">
            {(['2xs', 'xs', 'sm', 'md', 'lg'] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] border border-gunmetal-200">
                  <Icon name="star" size={size} />
                </div>
                <Text variant="body-xs" weight="semibold" color="muted">{size}</Text>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Icons by Category */}
        {iconCategories.map(({ key, label }) => (
          <div key={key} className="space-y-3">
            <Text variant="body-sm" weight="semibold">{label}</Text>
            <div className="flex flex-wrap gap-3">
              {getIconsByCategory(key).map(([iconName]) => (
                <Tooltip key={iconName} content={iconName}>
                  <div className="flex flex-col items-center gap-1.5 w-14">
                    <div className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] border border-gunmetal-200 hover:bg-gunmetal-50 hover:border-primary transition-colors cursor-default">
                      <Icon name={iconName as IconName} size="md" />
                    </div>
                    <Text variant="body-xs" color="muted" className="truncate w-full text-center text-[10px]">
                      {iconName}
                    </Text>
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* ── Buttons — Violet ─────────────────────── */}
      <Section title="Buttons — Violet">
        <Text variant="body-xs" color="muted">
          Figma "Buttons V.2" — hierarchy × size grid. Hover and Active states applied via CSS pseudo-classes.
        </Text>

        {/* Primary row — all 4 sizes + disabled + loading */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Primary</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="violet" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="violet" size="xsmall" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="small" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="medium" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="large" disabled>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="violet" size="xsmall" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="small" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="medium" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="violet" size="large" loading>Button</Button>
          </div>
        </div>

        {/* Secondary row */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Secondary</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="secondary" colorScheme="violet" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="violet" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="violet" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="violet" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="secondary" colorScheme="violet" size="xsmall" disabled>Button</Button>
            <Button hierarchy="secondary" colorScheme="violet" size="small" disabled>Button</Button>
            <Button hierarchy="secondary" colorScheme="violet" size="medium" disabled>Button</Button>
            <Button hierarchy="secondary" colorScheme="violet" size="large" disabled>Button</Button>
          </div>
        </div>

        {/* Tertiary row */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Tertiary</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tertiary" colorScheme="violet" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="violet" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="violet" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="violet" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tertiary" colorScheme="violet" size="xsmall" disabled>Button</Button>
            <Button hierarchy="tertiary" colorScheme="violet" size="small" disabled>Button</Button>
            <Button hierarchy="tertiary" colorScheme="violet" size="medium" disabled>Button</Button>
            <Button hierarchy="tertiary" colorScheme="violet" size="large" disabled>Button</Button>
          </div>
        </div>

        {/* Tonal row */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Tonal</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tonal" colorScheme="violet" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="violet" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="violet" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="violet" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tonal" colorScheme="violet" size="xsmall" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="violet" size="small" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="violet" size="medium" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="violet" size="large" disabled>Button</Button>
          </div>
        </div>
      </Section>

      {/* ── Buttons — Mint + Dark ──────────────────── */}
      <Section title="Buttons — Mint & Dark">
        {/* Mint: Primary + Tonal */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Mint — Primary</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="mint" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="mint" size="xsmall" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="small" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="medium" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="large" disabled>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="mint" size="xsmall" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="small" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="medium" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="mint" size="large" loading>Button</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Mint — Tonal</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tonal" colorScheme="mint" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="mint" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="mint" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="mint" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tonal" colorScheme="mint" size="xsmall" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="mint" size="small" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="mint" size="medium" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="mint" size="large" disabled>Button</Button>
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Dark: Primary + Tonal */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Dark — Primary</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="dark" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="dark" size="xsmall" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="small" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="medium" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="large" disabled>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="dark" size="xsmall" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="small" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="medium" loading>Button</Button>
            <Button hierarchy="primary" colorScheme="dark" size="large" loading>Button</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Dark — Tonal</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tonal" colorScheme="dark" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="dark" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="dark" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="tonal" colorScheme="dark" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tonal" colorScheme="dark" size="xsmall" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="dark" size="small" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="dark" size="medium" disabled>Button</Button>
            <Button hierarchy="tonal" colorScheme="dark" size="large" disabled>Button</Button>
          </div>
        </div>
      </Section>

      {/* ── Buttons — Destructive ──────────────────── */}
      <Section title="Buttons — Destructive">
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Secondary</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="secondary" colorScheme="destructive" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="destructive" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="destructive" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="destructive" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="secondary" colorScheme="destructive" size="xsmall" disabled>Button</Button>
            <Button hierarchy="secondary" colorScheme="destructive" size="small" disabled>Button</Button>
            <Button hierarchy="secondary" colorScheme="destructive" size="medium" disabled>Button</Button>
            <Button hierarchy="secondary" colorScheme="destructive" size="large" disabled>Button</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Tertiary</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tertiary" colorScheme="destructive" size="xsmall" leadIcon={<Icon name="star" size="xs" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="destructive" size="small" leadIcon={<Icon name="star" size="sm" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="destructive" size="medium" leadIcon={<Icon name="star" size="md" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="destructive" size="large" leadIcon={<Icon name="star" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tertiary" colorScheme="destructive" size="xsmall" disabled>Button</Button>
            <Button hierarchy="tertiary" colorScheme="destructive" size="small" disabled>Button</Button>
            <Button hierarchy="tertiary" colorScheme="destructive" size="medium" disabled>Button</Button>
            <Button hierarchy="tertiary" colorScheme="destructive" size="large" disabled>Button</Button>
          </div>
        </div>
      </Section>

      {/* ── Buttons — AI ───────────────────────────── */}
      <Section title="Buttons — AI">
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Tertiary (gradient fill)</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="tertiary" colorScheme="ai" size="xsmall" leadIcon={<Icon name="sparkle" size="xs" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="ai" size="small" leadIcon={<Icon name="sparkle" size="sm" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="ai" size="medium" leadIcon={<Icon name="sparkle" size="md" />}>Button</Button>
            <Button hierarchy="tertiary" colorScheme="ai" size="large" leadIcon={<Icon name="sparkle" size="lg" />}>Button</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Secondary</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="secondary" colorScheme="ai" size="xsmall" leadIcon={<Icon name="sparkle" size="xs" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="ai" size="small" leadIcon={<Icon name="sparkle" size="sm" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="ai" size="medium" leadIcon={<Icon name="sparkle" size="md" />}>Button</Button>
            <Button hierarchy="secondary" colorScheme="ai" size="large" leadIcon={<Icon name="sparkle" size="lg" />}>Button</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Primary (gradient fill)</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="ai" size="xsmall" leadIcon={<Icon name="sparkle" size="xs" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="ai" size="small" leadIcon={<Icon name="sparkle" size="sm" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="ai" size="medium" leadIcon={<Icon name="sparkle" size="md" />}>Button</Button>
            <Button hierarchy="primary" colorScheme="ai" size="large" leadIcon={<Icon name="sparkle" size="lg" />}>Button</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="ai" size="xsmall" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="ai" size="small" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="ai" size="medium" disabled>Button</Button>
            <Button hierarchy="primary" colorScheme="ai" size="large" disabled>Button</Button>
          </div>
        </div>
      </Section>

      {/* ── Buttons with Icons ─────────────────────── */}
      <Section title="Buttons with Icons">
        {/* Lead + Trailing — all sizes
         * Figma icon wrapper sizes per button size:
         *   xsmall: 16×16 (xs) — large: 32×32 (lg)
         */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Lead + Trailing Icons (all sizes)</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="violet" size="large" leadIcon={<Icon name="star" size="lg" />} trailIcon={<Icon name="arrow-right" size="lg" />}>
              Button
            </Button>
            <Button hierarchy="primary" colorScheme="violet" size="medium" leadIcon={<Icon name="star" size="md" />} trailIcon={<Icon name="arrow-right" size="md" />}>
              Button
            </Button>
            <Button hierarchy="primary" colorScheme="violet" size="small" leadIcon={<Icon name="star" size="sm" />} trailIcon={<Icon name="arrow-right" size="sm" />}>
              Button
            </Button>
            <Button hierarchy="primary" colorScheme="violet" size="xsmall" leadIcon={<Icon name="star" size="xs" />} trailIcon={<Icon name="arrow-right" size="xs" />}>
              Button
            </Button>
          </div>
        </div>

        {/* Icons across hierarchies */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Icons × Hierarchies (Medium)</Text>
          <div className="flex flex-wrap items-center gap-3">
            <Button hierarchy="primary" colorScheme="violet" size="medium" leadIcon={<Icon name="plus" size="md" />}>Create</Button>
            <Button hierarchy="secondary" colorScheme="violet" size="medium" leadIcon={<Icon name="settings" size="md" />}>Settings</Button>
            <Button hierarchy="tertiary" colorScheme="violet" size="medium" trailIcon={<Icon name="arrow-right" size="md" />}>Learn More</Button>
            <Button hierarchy="tonal" colorScheme="violet" size="medium" leadIcon={<Icon name="star" size="md" />}>Favorites</Button>
          </div>
        </div>

        {/* Icons across color schemes */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Icons × Color Schemes</Text>
          <div className="flex flex-wrap items-center gap-3">
            <Button hierarchy="primary" colorScheme="mint" size="medium" leadIcon={<Icon name="plus" size="md" />}>Add Item</Button>
            <Button hierarchy="primary" colorScheme="dark" size="medium" leadIcon={<Icon name="bookmark" size="md" />}>Bookmark</Button>
            <Button hierarchy="secondary" colorScheme="destructive" size="medium" leadIcon={<Icon name="trash" size="md" />}>Remove</Button>
            <Button hierarchy="primary" colorScheme="ai" size="medium" leadIcon={<Icon name="sparkle" size="md" />}>Generate</Button>
          </div>
        </div>

        {/* Loading replaces lead icon */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Loading (replaces lead icon)</Text>
          <div className="flex flex-wrap items-end gap-3">
            <Button hierarchy="primary" colorScheme="violet" size="large" leadIcon={<Icon name="plus" size="lg" />}>Normal</Button>
            <Button hierarchy="primary" colorScheme="violet" size="large" leadIcon={<Icon name="plus" size="lg" />} loading>Saving...</Button>
            <Button hierarchy="primary" colorScheme="violet" size="small" leadIcon={<Icon name="plus" size="sm" />}>Normal</Button>
            <Button hierarchy="primary" colorScheme="violet" size="small" leadIcon={<Icon name="plus" size="sm" />} loading>Saving...</Button>
          </div>
        </div>
      </Section>

      {/* ── Icon Buttons ────────────────────────────── */}
      <Section title="Icon Buttons">
        {/* All sizes — Primary Violet
         * Figma icon wrapper per IconButton size:
         *   xs (24px): Icon xs (16px)
         *   sm (36px): Icon sm (20px)
         *   md (48px): Icon md (24px)
         *   lg (56px): Icon lg (32px)
         */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Primary — All Sizes</Text>
          <div className="flex items-end gap-3">
            <IconButton hierarchy="primary" colorScheme="violet" size="lg" icon={<Icon name="plus" size="lg" />} aria-label="Add item" />
            <IconButton hierarchy="primary" colorScheme="violet" size="md" icon={<Icon name="plus" size="md" />} aria-label="Add item" />
            <IconButton hierarchy="primary" colorScheme="violet" size="sm" icon={<Icon name="plus" size="sm" />} aria-label="Add item" />
            <IconButton hierarchy="primary" colorScheme="violet" size="xs" icon={<Icon name="plus" size="xs" />} aria-label="Add item" />
          </div>
        </div>

        {/* Hierarchies — Violet Medium */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Hierarchies (Violet, Medium)</Text>
          <div className="flex items-center gap-3">
            <IconButton hierarchy="primary" colorScheme="violet" size="md" icon={<Icon name="settings" size="md" />} aria-label="Settings" />
            <IconButton hierarchy="secondary" colorScheme="violet" size="md" icon={<Icon name="settings" size="md" />} aria-label="Settings" />
            <IconButton hierarchy="tertiary" colorScheme="violet" size="md" icon={<Icon name="settings" size="md" />} aria-label="Settings" />
            <IconButton hierarchy="tonal" colorScheme="violet" size="md" icon={<Icon name="settings" size="md" />} aria-label="Settings" />
          </div>
        </div>

        {/* Color Schemes — Primary Medium */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Color Schemes (Primary, Medium)</Text>
          <div className="flex items-center gap-3">
            <IconButton hierarchy="primary" colorScheme="violet" size="md" icon={<Icon name="heart" size="md" />} aria-label="Like" />
            <IconButton hierarchy="primary" colorScheme="mint" size="md" icon={<Icon name="check" size="md" />} aria-label="Confirm" />
            <IconButton hierarchy="primary" colorScheme="dark" size="md" icon={<Icon name="bookmark" size="md" />} aria-label="Bookmark" />
            <IconButton hierarchy="primary" colorScheme="destructive" size="md" icon={<Icon name="trash" size="md" />} aria-label="Delete" />
          </div>
        </div>

        {/* Disabled */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Disabled</Text>
          <div className="flex items-center gap-3">
            <IconButton hierarchy="primary" colorScheme="violet" size="md" icon={<Icon name="plus" size="md" />} aria-label="Add" disabled />
            <IconButton hierarchy="secondary" colorScheme="violet" size="md" icon={<Icon name="plus" size="md" />} aria-label="Add" disabled />
            <IconButton hierarchy="tertiary" colorScheme="violet" size="md" icon={<Icon name="plus" size="md" />} aria-label="Add" disabled />
            <IconButton hierarchy="tonal" colorScheme="violet" size="md" icon={<Icon name="plus" size="md" />} aria-label="Add" disabled />
          </div>
        </div>
      </Section>

      {/* ── Single Line Text Fields ──────────────────── */}
      <Section title="Single Line Text Fields">
        <Text variant="body-xs" color="muted">
          Figma "Single Line Text Fields" (666:38806) — Size × State grid. Border color changes on focus (selected) and error (invalid).
        </Text>

        {/* Extra Small size — all states */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Extra Small (h=36px)</Text>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <Input
              inputSize="extraSmall"
              label="Default"
              placeholder="Placeholder"
              supportingText="Text input must not have spaces"
            />
            <Input
              inputSize="extraSmall"
              label="Selected (Focus)"
              placeholder="Type here..."
              supportingText="Click to see focused border"
            />
            <Input
              inputSize="extraSmall"
              label="Filled"
              defaultValue="Ramean Yami"
              supportingText="Text input must not have spaces"
            />
            <Input
              inputSize="extraSmall"
              label="Invalid"
              defaultValue="Ramean Yami"
              errorMessage="Text input must not have spaces"
            />
            <Input
              inputSize="extraSmall"
              label="Disabled"
              placeholder="Placeholder"
              disabled
            />
            <Input
              inputSize="extraSmall"
              label="With Lead Icon"
              placeholder="Search..."
              leadIcon={<Icon name="search" size="sm" />}
            />
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Small size */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Small (h=48px)</Text>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <Input
              inputSize="small"
              label="Default"
              placeholder="Placeholder"
              supportingText="Text input must not have spaces"
            />
            <Input
              inputSize="small"
              label="Filled"
              defaultValue="Ramean Yami"
              supportingText="Text input must not have spaces"
            />
            <Input
              inputSize="small"
              label="Invalid"
              defaultValue="Ramean Yami"
              errorMessage="Text input must not have spaces"
            />
            <Input
              inputSize="small"
              label="Disabled"
              placeholder="Placeholder"
              disabled
            />
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Medium size */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Medium (h=56px)</Text>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <Input
              inputSize="medium"
              label="Default"
              placeholder="Placeholder"
              supportingText="Text input must not have spaces"
            />
            <Input
              inputSize="medium"
              label="Filled"
              defaultValue="Ramean Yami"
              supportingText="Text input must not have spaces"
            />
            <Input
              inputSize="medium"
              label="Invalid"
              defaultValue="Ramean Yami"
              errorMessage="Text input must not have spaces"
            />
            <Input
              inputSize="medium"
              label="Disabled"
              placeholder="Placeholder"
              disabled
            />
          </div>
        </div>
      </Section>

      {/* ── Input with Dropdown Selector ──────────────── */}
      <Section title="Input with Dropdown Selector">
        <Text variant="body-xs" color="muted">
          Figma "Input with Dropdown Selector" (666:40336) — Three side-by-side fields: First (fixed), Second (flex), Third (fixed).
        </Text>

        <div className="space-y-6">
          <InputWithDropdown
            inputSize="extraSmall"
            label="Extra Small — Default"
            firstField={{ placeholder: 'Country' }}
            secondField={{ placeholder: 'Phone number' }}
            thirdField={{ placeholder: 'Ext' }}
            supportingText="Enter your full phone number"
          />
          <InputWithDropdown
            inputSize="small"
            label="Small — Default"
            firstField={{ placeholder: 'DD' }}
            secondField={{ placeholder: 'MM' }}
            thirdField={{ placeholder: 'YYYY' }}
          />
          <InputWithDropdown
            inputSize="medium"
            label="Medium — Default"
            firstField={{ placeholder: 'Country' }}
            secondField={{ placeholder: 'Phone number' }}
            thirdField={{ placeholder: 'Ext' }}
          />
          <InputWithDropdown
            inputSize="extraSmall"
            label="Invalid State"
            firstField={{ placeholder: 'DD' }}
            secondField={{ placeholder: 'MM' }}
            thirdField={{ placeholder: 'YYYY' }}
            errorMessage="Please enter a valid date"
          />
          <InputWithDropdown
            inputSize="extraSmall"
            label="Disabled"
            firstField={{ placeholder: 'DD' }}
            secondField={{ placeholder: 'MM' }}
            thirdField={{ placeholder: 'YYYY' }}
            disabled
          />
        </div>
      </Section>

      {/* ── Search Bar ─────────────────────────────────── */}
      <Section title="Search Bar">
        <Text variant="body-xs" color="muted">
          Figma "Search Bar" (2390:40348) — Pill-shaped search input with magnifying glass icon. Border darkens on focus.
        </Text>

        <div className="space-y-4">
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Default</Text>
            <SearchBar />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">With Value (Filled)</Text>
            <SearchBar defaultValue="Ramean Yami" />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Custom Width</Text>
            <SearchBar className="w-[400px] min-w-[400px]" placeholder="Search users..." />
          </div>
        </div>
      </Section>

      {/* ── Multi-Line Text Fields (Textarea) ────────── */}
      <Section title="Multi-Line Text Fields (Textarea)">
        <Text variant="body-xs" color="muted">
          Figma "Multi-Line Text Fields" (666:38904) — Textarea with label, supporting text, and error states. min-h=132px, rounded-12.
        </Text>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
          <Textarea
            textareaSize="extraSmall"
            label="Default (Extra Small)"
            supportingText="Write your message here"
          />
          <Textarea
            textareaSize="extraSmall"
            label="Filled"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            supportingText="Character limit: 500"
          />
          <Textarea
            textareaSize="extraSmall"
            label="Invalid"
            defaultValue="Short"
            errorMessage="Message must be at least 20 characters"
          />
          <Textarea
            textareaSize="extraSmall"
            label="Disabled"
            placeholder="Write here"
            disabled
          />
          <Textarea
            textareaSize="small"
            label="Small Size — Default"
            supportingText="This is a larger label size variant"
          />
          <Textarea
            textareaSize="small"
            label="Small Size — Filled"
            defaultValue="This textarea uses the small size variant with a 16px label."
            supportingText="Optional helper text"
          />
        </div>
      </Section>

      {/* ── Date Picker Input — Top Label ─────────────── */}
      <Section title="Date Picker Input — Top Label">
        <Text variant="body-xs" color="muted">
          Figma "Top Label - Date Picker" (666:39026) — Date input with calendar icon, format hint, and all 3 sizes.
        </Text>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
          <DatePickerInput
            inputSize="extraSmall"
            label="Extra Small — Default"
          />
          <DatePickerInput
            inputSize="extraSmall"
            label="Filled"
            defaultValue="08/18/2025"
          />
          <DatePickerInput
            inputSize="extraSmall"
            label="Invalid"
            defaultValue="13/32/2025"
            errorMessage="Please enter a valid date"
          />
          <DatePickerInput
            inputSize="extraSmall"
            label="Disabled"
            disabled
          />
          <DatePickerInput
            inputSize="small"
            label="Small — Default"
          />
          <DatePickerInput
            inputSize="medium"
            label="Medium — Default"
          />
        </div>
      </Section>

      {/* ── Date Picker Input — Side Label ─────────────── */}
      <Section title="Date Picker Input — Side Label">
        <Text variant="body-xs" color="muted">
          Figma "Side Label - Date Picker" (666:41465) — Horizontal label placement with same sizes and states.
        </Text>

        <div className="space-y-6">
          <DatePickerInput
            inputSize="extraSmall"
            label="Date of Birth"
            labelPosition="side"
          />
          <DatePickerInput
            inputSize="extraSmall"
            label="Start Date"
            labelPosition="side"
            defaultValue="08/18/2025"
          />
          <DatePickerInput
            inputSize="extraSmall"
            label="Due Date"
            labelPosition="side"
            errorMessage="Date is in the past"
            defaultValue="01/01/2020"
          />
          <DatePickerInput
            inputSize="small"
            label="Event Date"
            labelPosition="side"
          />
          <DatePickerInput
            inputSize="medium"
            label="Published"
            labelPosition="side"
            disabled
          />
        </div>
      </Section>

      {/* ── Date Range Picker Input ─────────────────────── */}
      <Section title="Date Range Picker Input">
        <Text variant="body-xs" color="muted">
          Figma "Top/Side Label - Date Range Picker" (666:39287, 666:39549) — Two joined date fields for start/end date.
        </Text>

        {/* Top Label */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Top Label</Text>
          <div className="space-y-6">
            <DateRangePickerInput
              inputSize="extraSmall"
              label="Extra Small — Default"
            />
            <DateRangePickerInput
              inputSize="extraSmall"
              label="Filled"
              startValue="08/18/2025"
              endValue="09/15/2025"
            />
            <DateRangePickerInput
              inputSize="extraSmall"
              label="Invalid"
              startValue="09/15/2025"
              endValue="08/18/2025"
              errorMessage="End date must be after start date"
            />
            <DateRangePickerInput
              inputSize="small"
              label="Small — Default"
            />
            <DateRangePickerInput
              inputSize="medium"
              label="Medium — Default"
            />
            <DateRangePickerInput
              inputSize="extraSmall"
              label="Disabled"
              disabled
            />
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Side Label */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Side Label</Text>
          <div className="space-y-6">
            <DateRangePickerInput
              inputSize="extraSmall"
              label="Trip Dates"
              labelPosition="side"
            />
            <DateRangePickerInput
              inputSize="small"
              label="Period"
              labelPosition="side"
              startValue="01/01/2025"
              endValue="12/31/2025"
            />
          </div>
        </div>
      </Section>

      {/* ── Calendar Date Picker ────────────────────────── */}
      <Section title="Calendar Date Picker">
        <Text variant="body-xs" color="muted">
          Figma "Date Picker / Calendar" (666:39849) — 5 variants: Single, Single no year, Range no year, Range with year + presets, Dual (Variant3).
        </Text>

        {/* Row 1: Single (with year) + Single (no year) */}
        <div className="flex flex-wrap gap-8 items-start">
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">Single — With Year</Text>
            <CalendarDatePicker
              mode="single"
              selectedDate={new Date()}
              onDateSelect={(d) => console.log('Selected:', d)}
              onCancel={() => console.log('Cancel')}
              onApply={() => console.log('Apply')}
              timezone="America/New_York (EDT, UTC-4)"
            />
          </div>

          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">Single — No Year</Text>
            <CalendarDatePicker
              mode="single"
              showYear={false}
              onDateSelect={(d) => console.log('Selected:', d)}
              onCancel={() => console.log('Cancel')}
              onApply={() => console.log('Apply')}
              timezone="America/New_York (EDT, UTC-4)"
            />
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Row 2: Date Range (no year) + Date Range (with year + presets) */}
        <div className="flex flex-wrap gap-8 items-start">
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">Date Range — No Year</Text>
            <CalendarDatePicker
              mode="range-no-year"
              startDate={new Date(2025, 7, 10)}
              endDate={new Date(2025, 7, 20)}
              onRangeSelect={(s, e) => console.log('Range:', s, e)}
              onCancel={() => console.log('Cancel')}
              onApply={() => console.log('Apply')}
              timezone="America/New_York (EDT, UTC-4)"
            />
          </div>

          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">Date Range — With Year + Presets</Text>
            <CalendarDatePicker
              mode="range"
              startDate={new Date(2025, 7, 10)}
              endDate={new Date(2025, 7, 20)}
              onRangeSelect={(s, e) => console.log('Range:', s, e)}
              onCancel={() => console.log('Cancel')}
              onApply={() => console.log('Apply')}
              onPresetSelect={(p) => console.log('Preset:', p)}
              activePreset="Last 7 Days"
              timezone="America/New_York (EDT, UTC-4)"
            />
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Row 3: Dual / Variant3 — full width */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Dual Calendar (Variant3) — Side-by-Side with Presets</Text>
          <CalendarDatePicker
            mode="dual"
            startDate={new Date(2025, 7, 10)}
            endDate={new Date(2025, 8, 5)}
            onRangeSelect={(s, e) => console.log('Dual range:', s, e)}
            onCancel={() => console.log('Cancel')}
            onApply={() => console.log('Apply')}
            onPresetSelect={(p) => console.log('Preset:', p)}
            timezone="America/New_York (EDT, UTC-4)"
          />
        </div>
      </Section>

      {/* ── Time Picker Input — Top Label ─────────────── */}
      <Section title="Time Picker Input — Top Label">
        <Text variant="body-xs" color="muted">
          Figma "Top Label - Time Picker" (666:39145) — Time input with clock icon, format hint, and all 3 sizes.
        </Text>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
          <TimePickerInput
            inputSize="extraSmall"
            label="Extra Small — Default"
          />
          <TimePickerInput
            inputSize="extraSmall"
            label="Filled"
            defaultValue="08:30 AM"
          />
          <TimePickerInput
            inputSize="extraSmall"
            label="Invalid"
            defaultValue="25:99"
            errorMessage="Please enter a valid time"
          />
          <TimePickerInput
            inputSize="extraSmall"
            label="Disabled"
            disabled
          />
          <TimePickerInput
            inputSize="small"
            label="Small — Default"
          />
          <TimePickerInput
            inputSize="medium"
            label="Medium — Default"
          />
        </div>
      </Section>

      {/* ── Time Picker Input — Side Label ─────────────── */}
      <Section title="Time Picker Input — Side Label">
        <Text variant="body-xs" color="muted">
          Figma "Side Label - Time Picker" (1128:24232) — Horizontal label placement with same sizes and states.
        </Text>

        <div className="space-y-6">
          <TimePickerInput
            inputSize="extraSmall"
            label="Start Time"
            labelPosition="side"
          />
          <TimePickerInput
            inputSize="extraSmall"
            label="End Time"
            labelPosition="side"
            defaultValue="05:00 PM"
          />
          <TimePickerInput
            inputSize="extraSmall"
            label="Alarm"
            labelPosition="side"
            errorMessage="Time is in the past"
            defaultValue="06:00 AM"
          />
          <TimePickerInput
            inputSize="small"
            label="Departure"
            labelPosition="side"
          />
          <TimePickerInput
            inputSize="medium"
            label="Arrival"
            labelPosition="side"
            disabled
          />
        </div>
      </Section>

      {/* ── Time Range Picker Input ─────────────────────── */}
      <Section title="Time Range Picker Input">
        <Text variant="body-xs" color="muted">
          Figma "Top/Side Label - Time Range Picker" (666:40662, 1128:24742) — Two joined time fields for start/end time.
        </Text>

        {/* Top Label */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Top Label</Text>
          <div className="space-y-6">
            <TimeRangePickerInput
              inputSize="extraSmall"
              label="Extra Small — Default"
            />
            <TimeRangePickerInput
              inputSize="extraSmall"
              label="Filled"
              startValue="09:00 AM"
              endValue="05:00 PM"
            />
            <TimeRangePickerInput
              inputSize="extraSmall"
              label="Invalid"
              startValue="05:00 PM"
              endValue="09:00 AM"
              errorMessage="End time must be after start time"
            />
            <TimeRangePickerInput
              inputSize="small"
              label="Small — Default"
            />
            <TimeRangePickerInput
              inputSize="medium"
              label="Medium — Default"
            />
            <TimeRangePickerInput
              inputSize="extraSmall"
              label="Disabled"
              disabled
            />
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Side Label */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Side Label</Text>
          <div className="space-y-6">
            <TimeRangePickerInput
              inputSize="extraSmall"
              label="Meeting"
              labelPosition="side"
            />
            <TimeRangePickerInput
              inputSize="small"
              label="Shift"
              labelPosition="side"
              startValue="08:00 AM"
              endValue="04:00 PM"
            />
          </div>
        </div>
      </Section>

      {/* ── AM/PM Toggle ─────────────────────────────────── */}
      <Section title="AM/PM Toggle">
        <Text variant="body-xs" color="muted">
          Figma "AM/PM Toggle" (1939:46543) — Small pill toggle for 12-hour time format selection.
        </Text>

        <div className="flex items-center gap-8">
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">Interactive</Text>
            <div className="flex items-center gap-4">
              <AmPmToggle value={amPmValue} onChange={setAmPmValue} />
              <Text variant="body-sm" color="muted">Selected: {amPmValue}</Text>
            </div>
          </div>
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">AM Selected</Text>
            <AmPmToggle value="AM" />
          </div>
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">PM Selected</Text>
            <AmPmToggle value="PM" />
          </div>
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">Compact (Range)</Text>
            <AmPmToggle value="AM" compact />
          </div>
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">Disabled</Text>
            <AmPmToggle value="AM" disabled />
          </div>
        </div>
      </Section>

      {/* ── Time Picker UI ────────────────────────────────── */}
      <Section title="Time Picker UI (Popup)">
        <Text variant="body-xs" color="muted">
          Figma "Time Picker UI" (1879:78499) — Popup with hour/minute scroll wheels. Supports 12h and 24h formats.
        </Text>

        <div className="flex flex-wrap gap-8">
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">12-Hour Format</Text>
            <TimePickerUI
              format="12h"
              hour={8}
              minute={30}
              amPm="AM"
              onApply={(h, m, ap) => console.log('Apply:', h, m, ap)}
              onCancel={() => console.log('Cancel')}
              timezone="UTC-5 (EST)"
            />
          </div>

          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">24-Hour Format</Text>
            <TimePickerUI
              format="24h"
              hour={14}
              minute={45}
              onApply={(h, m) => console.log('Apply:', h, m)}
              onCancel={() => console.log('Cancel')}
              timezone="UTC+0 (GMT)"
            />
          </div>
        </div>
      </Section>

      {/* ── Time Range Picker UI ──────────────────────────── */}
      <Section title="Time Range Picker UI (Popup)">
        <Text variant="body-xs" color="muted">
          Figma "Time Range Picker UI" (1879:78296) — Popup with From/To time sections, vertical divider, scroll wheels.
        </Text>

        <div className="flex flex-wrap gap-8">
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">12-Hour Format</Text>
            <TimeRangePickerUI
              format="12h"
              fromHour={9}
              fromMinute={0}
              fromAmPm="AM"
              toHour={5}
              toMinute={0}
              toAmPm="PM"
              onApply={(fh, fm, th, tm, fap, tap) => console.log('Apply:', fh, fm, fap, '→', th, tm, tap)}
              onCancel={() => console.log('Cancel')}
              timezone="UTC-5 (EST)"
            />
          </div>

          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">24-Hour Format</Text>
            <TimeRangePickerUI
              format="24h"
              fromHour={9}
              fromMinute={0}
              toHour={17}
              toMinute={30}
              onApply={(fh, fm, th, tm) => console.log('Apply:', fh, fm, '→', th, tm)}
              onCancel={() => console.log('Cancel')}
              timezone="UTC+0 (GMT)"
            />
          </div>
        </div>
      </Section>

      {/* ── Counter ───────────────────────────────────────── */}
      <Section title="Counter">
        <Text variant="body-xs" color="muted">
          Figma "Counter" (666:40961) — Plus/minus stepper with 3 sizes and disabled states.
        </Text>

        <div className="space-y-4">
          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">All Sizes</Text>
            <div className="flex items-end gap-6">
              <div className="flex flex-col items-center gap-2">
                <Counter size="extraSmall" value={counterXs} onChange={setCounterXs} />
                <Text variant="body-xs" color="muted">Extra Small</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Counter size="small" value={counterSm} onChange={setCounterSm} />
                <Text variant="body-xs" color="muted">Small</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Counter size="medium" value={counterMd} onChange={setCounterMd} />
                <Text variant="body-xs" color="muted">Medium</Text>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Text variant="body-sm" weight="semibold">Disabled States</Text>
            <div className="flex items-end gap-6">
              <div className="flex flex-col items-center gap-2">
                <Counter size="small" value={counterDisabled} onChange={setCounterDisabled} disabled />
                <Text variant="body-xs" color="muted">Fully Disabled</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Counter size="small" value={0} onChange={() => {}} min={0} />
                <Text variant="body-xs" color="muted">Min Reached</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Counter size="small" value={99} onChange={() => {}} max={99} />
                <Text variant="body-xs" color="muted">Max Reached</Text>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── File Upload ──────────────────────────────────── */}
      <Section title="File Upload">
        <Text variant="body-xs" color="muted">
          Figma "File Upload" (6453:24202) — Drag & drop zone with file list, image previews, and removal.
        </Text>

        <div className="space-y-6 max-w-lg">
          <FileUpload
            label="Upload Documents"
            optional
            accept=".pdf,.doc,.docx,.txt,.rtf,.png,.jpg,.jpeg"
            fileTypeDescription="pdf, doc, docx, txt, rtf, png, jpg"
            maxSizeLabel="20 MB"
            files={uploadedFiles}
            onFilesAdd={handleFilesAdd}
            onFileRemove={handleFileRemove}
          />

          <FileUpload
            label="Profile Photo"
            accept=".png,.jpg,.jpeg"
            fileTypeDescription="png, jpg, jpeg"
            maxSizeLabel="5 MB"
            multiple={false}
          />

          <FileUpload
            label="Disabled Upload"
            disabled
          />
        </div>
      </Section>

      {/* ── Form Controls ───────────────────────────────── */}
      <Section title="Checkbox, Radio & Toggle">
        <div className="flex gap-16">
          {/* Checkboxes */}
          <div className="space-y-4">
            <Text variant="body-sm" weight="semibold">Checkboxes</Text>
            <Checkbox label="Selected" defaultChecked />
            <Checkbox label="Unselected" />
            <Checkbox label="Indeterminate" checked="indeterminate" />
            <Checkbox label="Disabled (checked)" defaultChecked disabled />
            <Checkbox label="Disabled (unchecked)" disabled />
          </div>

          {/* Radio Buttons */}
          <div className="space-y-4">
            <Text variant="body-sm" weight="semibold">Radio Buttons</Text>
            <RadioGroup defaultValue="opt1">
              <RadioItem value="opt1" label="Selected" />
              <RadioItem value="opt2" label="Unselected" />
              <RadioItem value="opt3" label="Another option" />
            </RadioGroup>
            <Text variant="body-xs" color="muted" className="mt-2">Disabled:</Text>
            <RadioGroup defaultValue="d1" disabled>
              <RadioItem value="d1" label="Disabled (selected)" />
              <RadioItem value="d2" label="Disabled (unselected)" />
            </RadioGroup>
          </div>

          {/* Toggles */}
          <div className="space-y-4">
            <Text variant="body-sm" weight="semibold">Toggles</Text>
            <Toggle label="Enabled (on)" defaultChecked />
            <Toggle label="Enabled (off)" />
            <Toggle label="Disabled (on)" defaultChecked disabled />
            <Toggle label="Disabled (off)" disabled />
          </div>
        </div>
      </Section>

      {/* ── Chips & Tags ────────────────────────────── */}
      <Section title="Chips & Tags">
        {/* ── Chips: Basic ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Chips — Basic</Text>
          <div className="flex flex-wrap gap-2">
            <Chip>Unselected</Chip>
            <Chip selected>Selected</Chip>
            <Chip onDismiss={() => {}}>Removable</Chip>
          </div>
        </div>

        {/* ── Chips: Checkbox ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Chips — Checkbox</Text>
          <div className="flex flex-wrap gap-2">
            <Chip showCheckbox>Checkbox</Chip>
            <Chip showCheckbox selected>Checked</Chip>
            <Chip showCheckbox onDismiss={() => {}}>With Dismiss</Chip>
          </div>
        </div>

        {/* ── Chips: Radio ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Chips — Radio</Text>
          <div className="flex flex-wrap gap-2">
            <Chip showRadio>Radio</Chip>
            <Chip showRadio selected>Radio On</Chip>
          </div>
        </div>

        {/* ── Chips: Profile Picture (Avatar) ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Chips — Profile Picture</Text>
          <div className="flex flex-wrap gap-2">
            <Chip avatar={<img src="https://i.pravatar.cc/36?img=1" alt="" className="size-full object-cover" />}>With Avatar</Chip>
            <Chip avatar={<img src="https://i.pravatar.cc/36?img=2" alt="" className="size-full object-cover" />} selected>Avatar Selected</Chip>
            <Chip avatar={<img src="https://i.pravatar.cc/36?img=3" alt="" className="size-full object-cover" />} onDismiss={() => {}}>Avatar Dismiss</Chip>
            <Chip avatar={<img src="https://i.pravatar.cc/36?img=4" alt="" className="size-full object-cover" />} selected onDismiss={() => {}}>Selected Dismiss</Chip>
          </div>
        </div>

        {/* ── Chips: Lead Icon ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Chips — Lead Icon</Text>
          <div className="flex flex-wrap gap-2">
            <Chip leadIcon={<Icon name="star" size="xs" />}>With Icon</Chip>
            <Chip leadIcon={<Icon name="star" size="xs" />} selected>Icon Selected</Chip>
            <Chip leadIcon={<Icon name="star" size="xs" />} onDismiss={() => {}}>Icon Dismiss</Chip>
          </div>
        </div>

        {/* ── Filter Chips ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Filter Chips</Text>
          <div className="flex flex-wrap gap-2">
            <FilterChip leadIcon={<Icon name="chevron-down" size="xs" />}>Category</FilterChip>
            <FilterChip leadIcon={<Icon name="chevron-down" size="xs" />} selected>Selected</FilterChip>
            <FilterChip leadIcon={<Icon name="chevron-down" size="xs" />} selected count={3}>With Count</FilterChip>
            <FilterChip leadIcon={<Icon name="chevron-down" size="xs" />} error>Error</FilterChip>
            <FilterChip leadIcon={<Icon name="chevron-down" size="xs" />} onDismiss={() => {}}>Dismissable</FilterChip>
            <FilterChip leadIcon={<Icon name="chevron-down" size="xs" />} selected onDismiss={() => {}}>Selected Dismiss</FilterChip>
            <FilterChip leadIcon={<Icon name="chevron-down" size="xs" />} selected count={5} onDismiss={() => {}}>Count + Dismiss</FilterChip>
          </div>
        </div>

        {/* ── Tags: Default Size ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Tags — Default Size</Text>
          <div className="flex flex-wrap items-center gap-2">
            <Tag>Default</Tag>
            <Tag color="success">Success</Tag>
            <Tag color="error">Error</Tag>
            <Tag color="warning">Warning</Tag>
            <Tag color="info">Info</Tag>
            <Tag color="numbered">+3</Tag>
            <Tag onDismiss={() => {}}>Dismissable</Tag>
          </div>
        </div>

        {/* ── Tags: Default + Slots ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Tags — With Lead Icon & Avatar</Text>
          <div className="flex flex-wrap items-center gap-2">
            <Tag leadIcon={<Icon name="star" size="xs" />}>Lead Icon</Tag>
            <Tag avatar={<img src="https://i.pravatar.cc/36?img=5" alt="" className="size-full object-cover" />}>With Avatar</Tag>
            <Tag leadIcon={<Icon name="star" size="xs" />} onDismiss={() => {}}>Icon + Dismiss</Tag>
            <Tag avatar={<img src="https://i.pravatar.cc/36?img=6" alt="" className="size-full object-cover" />} onDismiss={() => {}}>Avatar + Dismiss</Tag>
          </div>
        </div>

        {/* ── Tags: Small Size ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Tags — Small Size</Text>
          <div className="flex flex-wrap items-center gap-2">
            <Tag size="small">Default</Tag>
            <Tag size="small" color="success">Success</Tag>
            <Tag size="small" color="error">Error</Tag>
            <Tag size="small" color="warning">Warning</Tag>
            <Tag size="small" color="info">Info</Tag>
            <Tag size="small" color="numbered">+3</Tag>
            <Tag size="small" leadIcon={<Icon name="star" size="2xs" />}>With Icon</Tag>
            <Tag size="small" onDismiss={() => {}}>Dismissable</Tag>
          </div>
        </div>
      </Section>

      {/* ── Tabs V2 ────────────────────────────────── */}
      <Section title="Tabs">
        {/* ── Violet ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Tabs — Violet</Text>
          <Tabs value={tabViolet} onValueChange={setTabViolet} colorScheme="violet">
            <Tab value="one">Choice One</Tab>
            <Tab value="two">Choice Two</Tab>
            <Tab value="three">Choice Three</Tab>
            <Tab value="four">Choice Four</Tab>
            <Tab value="five">Choice Five</Tab>
            <Tab value="six">Choice Six</Tab>
          </Tabs>
        </div>

        {/* ── Mint ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Tabs — Mint</Text>
          <Tabs value={tabMint} onValueChange={setTabMint} colorScheme="mint">
            <Tab value="one">Choice One</Tab>
            <Tab value="two">Choice Two</Tab>
            <Tab value="three">Choice Three</Tab>
            <Tab value="four">Choice Four</Tab>
            <Tab value="five">Choice Five</Tab>
            <Tab value="six">Choice Six</Tab>
          </Tabs>
        </div>

        {/* ── Dark ── */}
        <div className="space-y-3">
          <Text variant="body-sm" weight="semibold">Tabs — Dark</Text>
          <Tabs value={tabDark} onValueChange={setTabDark} colorScheme="dark">
            <Tab value="one">Choice One</Tab>
            <Tab value="two">Choice Two</Tab>
            <Tab value="three">Choice Three</Tab>
            <Tab value="four">Choice Four</Tab>
            <Tab value="five">Choice Five</Tab>
            <Tab value="six">Choice Six</Tab>
          </Tabs>
        </div>
      </Section>

      {/* ── Tooltips (Plain) ────────────────────────── */}
      <Section title="Tooltips (Plain)">
        <Text variant="body-xs" color="muted">
          Figma "Plain Tooltip" (581:8748) — Dark bg gunmetal, text lavender-50. Single-line and multi-line variants.
        </Text>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Single-line — All Sides</Text>
          <div className="flex flex-wrap gap-6 py-8 justify-center">
            <Tooltip content="Tooltip on top" side="top">
              <Button hierarchy="secondary" colorScheme="violet" size="small">Top</Button>
            </Tooltip>
            <Tooltip content="Tooltip on right" side="right">
              <Button hierarchy="secondary" colorScheme="violet" size="small">Right</Button>
            </Tooltip>
            <Tooltip content="Tooltip on bottom" side="bottom">
              <Button hierarchy="secondary" colorScheme="violet" size="small">Bottom</Button>
            </Tooltip>
            <Tooltip content="Tooltip on left" side="left">
              <Button hierarchy="secondary" colorScheme="violet" size="small">Left</Button>
            </Tooltip>
          </div>
        </div>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Multi-line</Text>
          <div className="flex gap-6 py-4">
            <Tooltip
              content="This is a multi-line tooltip with a longer description that wraps across multiple lines for additional context."
              side="bottom"
              multiline
            >
              <Button hierarchy="secondary" colorScheme="violet" size="small">Multi-line Tooltip</Button>
            </Tooltip>
          </div>
        </div>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Alignment — Start / Center / End</Text>
          <div className="flex gap-6 py-4">
            <Tooltip content="Aligned start" side="bottom" align="start">
              <Button hierarchy="tertiary" colorScheme="violet" size="small">Start</Button>
            </Tooltip>
            <Tooltip content="Aligned center" side="bottom" align="center">
              <Button hierarchy="tertiary" colorScheme="violet" size="small">Center</Button>
            </Tooltip>
            <Tooltip content="Aligned end" side="bottom" align="end">
              <Button hierarchy="tertiary" colorScheme="violet" size="small">End</Button>
            </Tooltip>
          </div>
        </div>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">On Icon Buttons</Text>
          <div className="flex gap-4 py-4">
            <Tooltip content="Settings" side="bottom">
              <IconButton hierarchy="secondary" colorScheme="violet" size="md" icon={<Icon name="settings" size="md" />} aria-label="Settings" />
            </Tooltip>
            <Tooltip content="Delete item" side="bottom">
              <IconButton hierarchy="secondary" colorScheme="destructive" size="md" icon={<Icon name="trash" size="md" />} aria-label="Delete" />
            </Tooltip>
            <Tooltip content="Bookmark" side="bottom">
              <IconButton hierarchy="secondary" colorScheme="dark" size="md" icon={<Icon name="bookmark" size="md" />} aria-label="Bookmark" />
            </Tooltip>
          </div>
        </div>
      </Section>

      {/* ── Rich Tooltips ────────────────────────────── */}
      <Section title="Rich Tooltips">
        <Text variant="body-xs" color="muted">
          Figma "Rich Tooltip" (581:8756) — Light bg primary-50, rounded-12, shadow. Title, body, icon, and action buttons.
        </Text>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Title and Context</Text>
          <div className="flex gap-6 py-4">
            <RichTooltip
              title="Rich tooltip title"
              body="Supporting text providing additional context about the feature or action."
              side="bottom"
            >
              <Button hierarchy="secondary" colorScheme="violet" size="small">Title + Body</Button>
            </RichTooltip>
          </div>
        </div>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">With Icon</Text>
          <div className="flex gap-6 py-4">
            <RichTooltip
              body="This tooltip includes an icon next to the body text for visual emphasis."
              icon={<Icon name="star" size="xs" />}
              side="bottom"
            >
              <Button hierarchy="secondary" colorScheme="violet" size="small">With Icon</Button>
            </RichTooltip>
          </div>
        </div>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Title + Body (No Actions)</Text>
          <div className="flex gap-6 py-4">
            <RichTooltip
              title="Feature Info"
              body="This variant shows title and body without action buttons, useful for informational tooltips."
              side="right"
            >
              <Button hierarchy="secondary" colorScheme="violet" size="small">Info Only</Button>
            </RichTooltip>
          </div>
        </div>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">With Action Buttons</Text>
          <div className="flex gap-6 py-4">
            <RichTooltip
              title="Confirm action"
              body="Are you sure you want to proceed? This will update your preferences."
              actions={
                <>
                  <Button hierarchy="tertiary" colorScheme="violet" size="xsmall">Dismiss</Button>
                  <Button hierarchy="tertiary" colorScheme="violet" size="xsmall">Confirm</Button>
                </>
              }
              side="bottom"
            >
              <Button hierarchy="secondary" colorScheme="violet" size="small">With Actions</Button>
            </RichTooltip>
          </div>
        </div>

        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Placement Sides</Text>
          <div className="flex flex-wrap gap-6 py-8 justify-center">
            <RichTooltip title="Top" body="Rich tooltip placed on top." side="top">
              <Button hierarchy="tertiary" colorScheme="violet" size="small">Top</Button>
            </RichTooltip>
            <RichTooltip title="Right" body="Rich tooltip placed on right." side="right">
              <Button hierarchy="tertiary" colorScheme="violet" size="small">Right</Button>
            </RichTooltip>
            <RichTooltip title="Bottom" body="Rich tooltip placed on bottom." side="bottom">
              <Button hierarchy="tertiary" colorScheme="violet" size="small">Bottom</Button>
            </RichTooltip>
            <RichTooltip title="Left" body="Rich tooltip placed on left." side="left">
              <Button hierarchy="tertiary" colorScheme="violet" size="small">Left</Button>
            </RichTooltip>
          </div>
        </div>
      </Section>

      {/* ── Progress Bar ────────────────────────────── */}
      <Section title="Progress Bars">
        <div className="space-y-4 max-w-md">
          <ProgressBar value={progress} color="primary" size="md" showLabel />
          <ProgressBar value={85} color="success" size="lg" showLabel />
          <ProgressBar value={40} color="warning" size="sm" />
          <ProgressBar value={15} color="danger" size="md" showLabel />
          <div className="flex gap-3">
            <Button size="xsmall" hierarchy="secondary" colorScheme="violet" onClick={() => setProgress((p) => Math.max(0, p - 10))}>
              -10%
            </Button>
            <Button size="xsmall" hierarchy="secondary" colorScheme="violet" onClick={() => setProgress((p) => Math.min(100, p + 10))}>
              +10%
            </Button>
          </div>
        </div>
      </Section>

      {/* ── Step Progress ─────────────────────────── */}
      <Section title="Step Progress">
        <Text variant="body-xs" color="muted">
          Figma "Progress bar- Steps Horizontal" (2342:22063) — Horizontal step indicator with completed, active, and future states.
        </Text>
        <div className="space-y-8 max-w-lg">
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Default (no active step)</Text>
            <StepProgress
              steps={[
                { label: 'Account' },
                { label: 'Profile' },
                { label: 'Review' },
                { label: 'Payment' },
                { label: 'Complete' },
              ]}
              activeStep={0}
              showDescription={false}
            />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Step 1 active</Text>
            <StepProgress
              steps={[
                { label: 'Account', description: 'Enter your email and password' },
                { label: 'Profile' },
                { label: 'Review' },
                { label: 'Payment' },
                { label: 'Complete' },
              ]}
              activeStep={0}
            />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Step 3 active</Text>
            <StepProgress
              steps={[
                { label: 'Account' },
                { label: 'Profile' },
                { label: 'Review', description: 'Lorem Ipsum with the purpose of expectation' },
                { label: 'Payment' },
                { label: 'Complete' },
              ]}
              activeStep={2}
            />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Step 5 active (last step)</Text>
            <StepProgress
              steps={[
                { label: 'Account' },
                { label: 'Profile' },
                { label: 'Review' },
                { label: 'Payment' },
                { label: 'Complete', description: 'All steps done!' },
              ]}
              activeStep={4}
            />
          </div>
        </div>
      </Section>

      {/* ── Circular Chart ───────────────────────── */}
      <Section title="Circular Chart">
        <Text variant="body-xs" color="muted">
          Figma "Circular Chart" (2342:37580) — Donut-style progress indicator with 4 sizes.
        </Text>
        <div className="space-y-4">
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">All Sizes</Text>
            <div className="flex items-end gap-6">
              <div className="flex flex-col items-center gap-1">
                <CircularChart size="xs" value={25} />
                <Text variant="body-xs" color="muted">Extra Small</Text>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CircularChart size="sm" value={50} />
                <Text variant="body-xs" color="muted">Small</Text>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CircularChart size="md" value={75} />
                <Text variant="body-xs" color="muted">Medium</Text>
              </div>
              <div className="flex flex-col items-center gap-1">
                <CircularChart size="lg" value={100} />
                <Text variant="body-xs" color="muted">Large</Text>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Various Values (Large)</Text>
            <div className="flex items-center gap-6">
              <CircularChart size="lg" value={0} />
              <CircularChart size="lg" value={25} />
              <CircularChart size="lg" value={50} />
              <CircularChart size="lg" value={75} />
              <CircularChart size="lg" value={100} />
            </div>
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Interactive</Text>
            <div className="flex items-center gap-4">
              <CircularChart size="lg" value={progress} />
              <div className="flex gap-3">
                <Button size="xsmall" hierarchy="secondary" colorScheme="violet" onClick={() => setProgress((p) => Math.max(0, p - 10))}>
                  -10%
                </Button>
                <Button size="xsmall" hierarchy="secondary" colorScheme="violet" onClick={() => setProgress((p) => Math.min(100, p + 10))}>
                  +10%
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Bar Progress ─────────────────────────── */}
      <Section title="Bar Progress">
        <Text variant="body-xs" color="muted">
          Figma "Bar Progress" (2342:37780) — Horizontal bar with floating badge showing value/max.
        </Text>
        <div className="space-y-6 max-w-md">
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Default (25/100)</Text>
            <BarProgress value={25} max={100} />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">50/100</Text>
            <BarProgress value={50} max={100} />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">75/100</Text>
            <BarProgress value={75} max={100} />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">100/100</Text>
            <BarProgress value={100} max={100} />
          </div>
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Interactive</Text>
            <BarProgress value={progress} max={100} />
            <div className="flex gap-3 pt-2">
              <Button size="xsmall" hierarchy="secondary" colorScheme="violet" onClick={() => setProgress((p) => Math.max(0, p - 10))}>
                -10%
              </Button>
              <Button size="xsmall" hierarchy="secondary" colorScheme="violet" onClick={() => setProgress((p) => Math.min(100, p + 10))}>
                +10%
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Slider ────────────────────────────────── */}
      <Section title="Slider">
        <Text variant="body-xs" color="muted">
          Figma "Slider" (7766:56199) — Draggable range input with track fill and thumb.
        </Text>

        <div className="space-y-6 max-w-[600px]">
          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Default (50%)</Text>
            <Slider value={50} />
          </div>

          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">At 0%</Text>
            <Slider value={0} />
          </div>

          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">At 100%</Text>
            <Slider value={100} />
          </div>

          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Without Labels</Text>
            <Slider value={65} showLabels={false} />
          </div>

          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Disabled</Text>
            <Slider value={40} disabled />
          </div>

          <div className="space-y-1">
            <Text variant="body-sm" weight="semibold">Interactive</Text>
            <Slider value={progress} onChange={(v) => setProgress(v)} />
            <div className="flex gap-3 pt-2">
              <Button size="xsmall" hierarchy="secondary" colorScheme="violet" onClick={() => setProgress((p) => Math.max(0, p - 10))}>
                -10%
              </Button>
              <Button size="xsmall" hierarchy="secondary" colorScheme="violet" onClick={() => setProgress((p) => Math.min(100, p + 10))}>
                +10%
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Cards ─────────────────────────────────── */}
      <Section title="Cards">
        <Text variant="body-xs" color="muted">
          Figma "Cards" (396:739) — Versatile containers for content, profiles, and interactive list items.
        </Text>

        {/* Default Card Layouts */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Default Card Layouts</Text>
          <div className="flex flex-wrap gap-4">
            {/* Without subtitle */}
            <Card width="fixed">
              <CardHeader>
                <CardTitle>Employer of Record Policy</CardTitle>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </CardBody>
            </Card>

            {/* With subtitle */}
            <Card width="fixed">
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardSubtitle>Subhead</CardSubtitle>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </CardBody>
            </Card>

            {/* Larger body text */}
            <Card width="fixed">
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardSubtitle>Subhead</CardSubtitle>
              </CardHeader>
              <CardBody size="large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </CardBody>
            </Card>
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Elevation Variants */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Elevation Variants</Text>
          <div className="flex flex-wrap gap-4">
            <Card width="fixed" elevation="none">
              <CardHeader>
                <CardTitle>No Elevation</CardTitle>
              </CardHeader>
              <CardBody>Flat card with border only</CardBody>
            </Card>
            <Card width="fixed" elevation="low">
              <CardHeader>
                <CardTitle>Low Elevation</CardTitle>
              </CardHeader>
              <CardBody>Subtle shadow for slight depth</CardBody>
            </Card>
            <Card width="fixed" elevation="medium">
              <CardHeader>
                <CardTitle>Medium Elevation</CardTitle>
              </CardHeader>
              <CardBody>Standard elevation for prominent cards</CardBody>
            </Card>
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Profile Card */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Profile Card</Text>
          <ProfileCard
            width="full"
            avatar={
              <span className="font-heading font-bold text-[20px] text-[#E46B78]">P</span>
            }
            name="Philip"
            tag={<Tag color="success">Open</Tag>}
            role="Content Writer"
            action={
              <IconButton
                hierarchy="tertiary"
                colorScheme="violet"
                size="xs"
                icon={<Icon name="ellipsis-vertical" size="xs" />}
                aria-label="More actions"
              />
            }
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus.
          </ProfileCard>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Clickable Cards */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Clickable Cards (hover/focus/press)</Text>
          <div className="space-y-3 max-w-[600px]">
            <ClickableCard>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Text variant="body-base" weight="bold">Home-Based Full-Time Accountant (120)</Text>
                  <Tag color="success">Open</Tag>
                </div>
                <Icon name="chevron-right" size="xs" />
              </div>
            </ClickableCard>
            <ClickableCard>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Text variant="body-base" weight="bold">Home-Based Full-Time Accountant (120)</Text>
                  <Tag color="success">Open</Tag>
                </div>
                <Icon name="chevron-right" size="xs" />
              </div>
            </ClickableCard>
            <ClickableCard pressed>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Text variant="body-base" weight="bold">Home-Based Full-Time Accountant (120)</Text>
                  <Tag color="success">Open</Tag>
                </div>
                <Icon name="chevron-right" size="xs" />
              </div>
            </ClickableCard>
          </div>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Card with Footer Actions */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Card with Footer Actions</Text>
          <Card width="fixed">
            <CardHeader>
              <CardTitle>Delete Account?</CardTitle>
            </CardHeader>
            <CardBody>
              This action is permanent and cannot be undone. All your data will be removed.
            </CardBody>
            <CardFooter className="justify-end gap-3 pt-2">
              <Button hierarchy="secondary" colorScheme="violet" size="small">Cancel</Button>
              <Button hierarchy="secondary" colorScheme="destructive" size="small">Delete</Button>
            </CardFooter>
          </Card>
        </div>

        <hr className="border-gunmetal-100" />

        {/* Spacious Padding */}
        <div className="space-y-2">
          <Text variant="body-sm" weight="semibold">Spacious Padding (24px — for big profile cards)</Text>
          <Card padding="spacious" width="full" elevation="low">
            <CardHeader>
              <CardTitle>Account Profile</CardTitle>
              <CardSubtitle>Manage your personal information and preferences</CardSubtitle>
            </CardHeader>
            <CardBody size="large">
              This is a larger card container using spacious 24px padding, suitable for profile sections
              and dashboard panels. It can contain nested cards, tables, and other complex layouts.
            </CardBody>
            <CardFooter className="justify-end gap-3 pt-2">
              <Button hierarchy="secondary" colorScheme="violet" size="small">Edit Profile</Button>
              <Button hierarchy="primary" colorScheme="violet" size="small">Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* ── Elevation ───────────────────────────────── */}
      <Section title="Elevation / Shadows">
        <div className="flex gap-6">
          {([1, 2, 3] as const).map((level) => (
            <div
              key={level}
              className="w-32 h-32 rounded-[var(--radius-lg)] bg-white flex items-center justify-center"
              style={{ boxShadow: tokens.elevation[level] }}
            >
              <Text variant="body-sm" weight="semibold">Level {level}</Text>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Selection Fields ─────────────────────────── */}
      <Section title="Single Select Dropdown — Sizes">
        <div className="grid grid-cols-2 gap-6">
          <SingleSelectDropdown
            options={demoOptions}
            value={singleValue}
            onChange={setSingleValue}
            size="extraSmall"
            label="Department"
            placeholder="Extra Small"
          />
          <SingleSelectDropdown
            options={demoOptions}
            value={singleValue}
            onChange={setSingleValue}
            size="small"
            label="Department"
            placeholder="Small"
          />
          <SingleSelectDropdown
            options={demoOptions}
            value={singleValue}
            onChange={setSingleValue}
            size="medium"
            label="Department"
            placeholder="Medium"
          />
          <SingleSelectDropdown
            options={demoOptions}
            value={singleValue}
            onChange={setSingleValue}
            size="large"
            label="Department"
            placeholder="Large"
          />
        </div>
      </Section>

      <Section title="Single Select Dropdown — States">
        <div className="grid grid-cols-2 gap-6">
          <SingleSelectDropdown
            options={demoOptions}
            value=""
            onChange={() => {}}
            label="Default (Empty)"
            placeholder="Select department"
          />
          <SingleSelectDropdown
            options={demoOptions}
            value={singleFilledValue}
            onChange={setSingleFilledValue}
            label="Filled"
            placeholder="Select department"
          />
          <SingleSelectDropdown
            options={demoOptions}
            value=""
            onChange={() => {}}
            label="Disabled"
            placeholder="Select department"
            disabled
          />
          <SingleSelectDropdown
            options={demoOptions}
            value=""
            onChange={() => {}}
            label="With Error"
            placeholder="Select department"
            errorMessage="This field is required"
          />
          <SingleSelectDropdown
            options={demoOptions}
            value={singleValue}
            onChange={setSingleValue}
            label="With Supporting Text"
            placeholder="Select department"
            supportingText="Choose the team you belong to"
          />
          <SingleSelectDropdown
            options={demoOptions}
            value={singleValue}
            onChange={setSingleValue}
            label="Searchable"
            placeholder="Type to search..."
            searchable
          />
        </div>
      </Section>

      <Section title="Single Select — Add New Option">
        <div className="max-w-sm">
          <SingleSelectDropdown
            options={addNewOptions}
            value={singleValue}
            onChange={setSingleValue}
            label="Department"
            placeholder="Select or add new..."
            searchable
            allowAddNew
            onAddNew={(label) => {
              const newOption: SelectionOption = {
                value: label.toLowerCase().replace(/\s+/g, '-'),
                label,
              }
              setAddNewOptions((prev) => [...prev, newOption])
              setSingleValue(newOption.value)
            }}
          />
        </div>
      </Section>

      <Section title="Multi Select Dropdown">
        <div className="grid grid-cols-2 gap-6">
          <MultiSelectDropdown
            options={demoOptions}
            value={multiValue}
            onChange={setMultiValue}
            label="Departments"
            placeholder="Select departments"
          />
          <MultiSelectDropdown
            options={demoOptions}
            value={multiFilledValue}
            onChange={setMultiFilledValue}
            label="Selected Collapsed (Chips)"
            placeholder="Please select from options"
            collapsed
          />
          <MultiSelectDropdown
            options={demoOptions}
            value={multiValue}
            onChange={setMultiValue}
            label="Searchable Multi"
            placeholder="Type to filter..."
            searchable
          />
          <MultiSelectDropdown
            options={demoOptions}
            value={[]}
            onChange={() => {}}
            label="Disabled"
            placeholder="Select departments"
            disabled
          />
          <MultiSelectDropdown
            options={demoOptions}
            value={[]}
            onChange={() => {}}
            label="With Error"
            placeholder="Select departments"
            errorMessage="Please select at least one department"
          />
          <MultiSelectDropdown
            options={demoOptions}
            value={multiFilledValue}
            onChange={setMultiFilledValue}
            label="With Supporting Text"
            placeholder="Please select from options"
            collapsed
            supportingText="You can select multiple options"
          />
        </div>
      </Section>

      <Section title="Multi-Selector Search Bar">
        <div className="grid grid-cols-2 gap-6">
          <MultiSelectorSearchBar
            options={demoOptions}
            value={searchBarValue}
            onChange={setSearchBarValue}
            size="small"
            label="Team Members"
            placeholder="Search and add..."
          />
          <MultiSelectorSearchBar
            options={demoOptions}
            value={searchBarValue}
            onChange={setSearchBarValue}
            size="medium"
            label="Medium Size"
            placeholder="Search and add..."
          />
          <MultiSelectorSearchBar
            options={demoOptions}
            value={[]}
            onChange={() => {}}
            size="small"
            label="Empty State"
            placeholder="Search to add items..."
          />
          <MultiSelectorSearchBar
            options={demoOptions}
            value={searchBarValue}
            onChange={setSearchBarValue}
            size="extraSmall"
            label="Extra Small"
            placeholder="Search..."
          />
        </div>
      </Section>

      <Section title="Phone Number Field">
        <div className="grid grid-cols-2 gap-6">
          <PhoneNumberField
            value={phoneValue}
            onChange={setPhoneValue}
            size="small"
            label="Phone Number"
          />
          <PhoneNumberField
            value={phoneValue}
            onChange={setPhoneValue}
            size="medium"
            label="Medium Size"
          />
          <PhoneNumberField
            value={{ countryCode: 'US', number: '' }}
            onChange={() => {}}
            size="small"
            label="Disabled"
            disabled
          />
          <PhoneNumberField
            value={{ countryCode: 'US', number: '' }}
            onChange={() => {}}
            size="small"
            label="With Error"
            errorMessage="Please enter a valid phone number"
          />
          <PhoneNumberField
            value={phoneValue}
            onChange={setPhoneValue}
            size="medium"
            label="Medium with Supporting Text"
            supportingText="Include your country code"
          />
          <PhoneNumberField
            value={phoneValue}
            onChange={setPhoneValue}
            size="extraSmall"
            label="Extra Small"
          />
        </div>
      </Section>

      <Section title="Country Selection">
        <div className="grid grid-cols-2 gap-6">
          <CountrySelection
            value={countryValue}
            onChange={setCountryValue}
            size="small"
            label="Country"
          />
          <CountrySelection
            value="NG"
            onChange={() => {}}
            size="medium"
            label="Pre-selected (Nigeria)"
          />
          <CountrySelection
            value=""
            onChange={() => {}}
            size="small"
            label="Disabled"
            disabled
          />
          <CountrySelection
            value={countryValue}
            onChange={setCountryValue}
            size="large"
            label="Large Size"
          />
        </div>
      </Section>

      {/* ── Toast ────────────────────────────────────── */}
      <Section title="Toast">
        <div className="flex flex-wrap gap-6 items-start">
          <Toast
            type="success"
            title="Added Successfully to Client"
            description="Successfully added {{}} team member to {{clientName}}'s team."
            onDismiss={() => {}}
            duration={0}
          />
          <Toast
            type="error"
            title="Discount Not Available"
            description="This discount is not available for your account or cannot be applied to your current plan."
            onDismiss={() => {}}
            duration={0}
          />
          <Toast
            type="warning"
            title="Warning"
            description="This discount is not available for your account or cannot be applied to your current plan."
            onDismiss={() => {}}
            duration={0}
          />
        </div>
      </Section>

      {/* ── Snackbar ──────────────────────────────────── */}
      <Section title="Snackbar">
        <div className="flex flex-col gap-4 items-start">
          <Snackbar
            message="Successfully added {{}} team member to {{clientName}}'s team. Successfully added {{}} team member to {{clientName}}'s team."
            actionLabel="Dismiss"
            onDismiss={() => {}}
          />
        </div>
      </Section>

      {/* ── Notification ──────────────────────────────── */}
      <Section title="Notification">
        <div className="grid grid-cols-2 gap-6">
          {/* With Header */}
          <div className="flex flex-col gap-4">
            <Text variant="body-sm" weight="semibold" color="muted">With Header</Text>
            <Notification
              type="success"
              title="Success"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod"
            />
            <Notification
              type="warning"
              title="Warning"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod"
            />
            <Notification
              type="error"
              title="Error"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod"
            />
            <Notification
              type="info"
              title="Info"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod"
            />
          </div>

          {/* Without Header */}
          <div className="flex flex-col gap-4">
            <Text variant="body-sm" weight="semibold" color="muted">Without Header</Text>
            <Notification
              type="success"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod"
            />
            <Notification
              type="warning"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod"
            />
            <Notification
              type="error"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod"
            />
            <Notification
              type="info"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod"
            />
          </div>
        </div>
      </Section>

      {/* ── Forms (Modal & Card) ─────────────────────── */}
      <Section title="Forms — Modal (Small)">
        <div className="overflow-x-auto">
          <ModalForm size="small">
            <FormTitleBar
              title="Form Title"
              icon={<i className="fa-regular fa-hexagon-image text-[16px] text-[#30343F]" />}
            />
            <FormBody size="small">
              <FormFieldRow>
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" disabled className="flex-1" />
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" disabled className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
            </FormBody>
            <FormFooter leftAction={<Button hierarchy="tertiary" size="small" colorScheme="dark">Button</Button>}>
              <Button hierarchy="secondary" size="small" colorScheme="violet">Cancel</Button>
              <Button hierarchy="primary" size="small" colorScheme="violet">Accept</Button>
            </FormFooter>
          </ModalForm>
        </div>
      </Section>

      <Section title="Forms — Modal (Medium)">
        <div className="overflow-x-auto">
          <ModalForm size="medium">
            <FormTitleBar
              title="Form Title"
              icon={<i className="fa-regular fa-hexagon-image text-[16px] text-[#30343F]" />}
              closeAction={<i className="fa-regular fa-xmark text-[16px] text-[#30343F] cursor-pointer" />}
            />
            <FormBody size="medium">
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
            </FormBody>
            <FormFooter leftAction={<Button hierarchy="tertiary" size="small" colorScheme="dark">Button</Button>}>
              <Button hierarchy="secondary" size="small" colorScheme="violet">Cancel</Button>
              <Button hierarchy="primary" size="small" colorScheme="violet">Accept</Button>
            </FormFooter>
          </ModalForm>
        </div>
      </Section>

      <Section title="Forms — Modal (Large)">
        <div className="overflow-x-auto">
          <ModalForm size="large">
            <FormTitleBar
              title="Form Title"
              icon={<i className="fa-regular fa-hexagon-image text-[16px] text-[#30343F]" />}
              closeAction={<i className="fa-regular fa-xmark text-[16px] text-[#30343F] cursor-pointer" />}
            />
            <FormBody size="large">
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
            </FormBody>
            <FormFooter leftAction={<Button hierarchy="tertiary" size="medium" colorScheme="dark">Button</Button>}>
              <Button hierarchy="secondary" size="medium" colorScheme="violet">Cancel</Button>
              <Button hierarchy="primary" size="medium" colorScheme="violet">Accept</Button>
            </FormFooter>
          </ModalForm>
        </div>
      </Section>

      <Section title="Forms — Card (Small)">
        <div className="overflow-x-auto">
          <CardForm size="small">
            <FormTitleBar
              title="Form Title"
              icon={<i className="fa-regular fa-hexagon-image text-[16px] text-[#30343F]" />}
              closeAction={<i className="fa-regular fa-xmark text-[16px] text-[#30343F] cursor-pointer" />}
            />
            <FormBody size="small">
              <FormFieldRow>
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="extraSmall" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
            </FormBody>
            <FormFooter leftAction={<Button hierarchy="tertiary" size="small" colorScheme="dark">Button</Button>}>
              <Button hierarchy="secondary" size="small" colorScheme="violet">Cancel</Button>
              <Button hierarchy="primary" size="small" colorScheme="violet">Accept</Button>
            </FormFooter>
          </CardForm>
        </div>
      </Section>

      <Section title="Forms — Card (Medium)">
        <div className="overflow-x-auto">
          <CardForm size="medium">
            <FormTitleBar
              title="Form Title"
              icon={<i className="fa-regular fa-hexagon-image text-[16px] text-[#30343F]" />}
              closeAction={<i className="fa-regular fa-xmark text-[16px] text-[#30343F] cursor-pointer" />}
            />
            <FormBody size="medium">
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="small" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
            </FormBody>
            <FormFooter leftAction={<Button hierarchy="tertiary" size="small" colorScheme="dark">Button</Button>}>
              <Button hierarchy="secondary" size="small" colorScheme="violet">Cancel</Button>
              <Button hierarchy="primary" size="small" colorScheme="violet">Accept</Button>
            </FormFooter>
          </CardForm>
        </div>
      </Section>

      <Section title="Forms — Card (Large)">
        <div className="overflow-x-auto">
          <CardForm size="large">
            <FormTitleBar
              title="Form Title"
              icon={<i className="fa-regular fa-hexagon-image text-[16px] text-[#30343F]" />}
              closeAction={<i className="fa-regular fa-xmark text-[16px] text-[#30343F] cursor-pointer" />}
            />
            <FormBody size="large">
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
              <FormFieldRow>
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
                <Input inputSize="medium" label="Label" placeholder="Placeholder" supportingText="Text input must not have spaces" className="flex-1" />
              </FormFieldRow>
            </FormBody>
            <FormFooter leftAction={<Button hierarchy="tertiary" size="medium" colorScheme="dark">Button</Button>}>
              <Button hierarchy="secondary" size="medium" colorScheme="violet">Cancel</Button>
              <Button hierarchy="primary" size="medium" colorScheme="violet">Accept</Button>
            </FormFooter>
          </CardForm>
        </div>
      </Section>

      {/* ── Table Views ───────────────────────────────── */}
      <TableViewShowcase />

      {/* ── Layout: Sidebar & TopNavbar ─────────────── */}
      <LayoutShowcase />

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="text-center py-8 border-t border-gunmetal-200">
        <Text variant="body-sm" color="muted">
          Olamee Design System v1.0 — Tokens synced from Figma
        </Text>
      </footer>
    </div>
  )
}

export { ComponentShowcase }
