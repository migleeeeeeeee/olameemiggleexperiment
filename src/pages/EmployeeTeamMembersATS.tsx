import { useState } from 'react';
import {
  TopNavbar,
  Button,
  Text,
  Icon,
  IconButton,
  SearchBar,
  Input,
  SingleSelectDropdown,
  DatePickerInput,
  Tag,
  type SelectionOption,
} from '@/design-system';

/* ─── Olamee Logo ──────────────────────────────────────────────── */

function OlameeLogo() {
  return (
    <svg width="117" height="50" viewBox="0 0 117 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5758 40.0782C37.2717 41.0522 36.8676 41.9834 36.3636 42.8715C35.0926 45.0838 33.3318 46.8318 31.0811 48.1155C28.8304 49.3718 26.3149 50 23.5346 50C20.7279 50 18.1992 49.3718 15.9485 48.1155C14.3566 47.2075 13.0032 46.0605 11.8882 44.6744L15.0219 42.3771C15.8358 43.4002 16.8199 44.2479 17.9741 44.92C19.6423 45.8759 21.4958 46.3538 23.5346 46.3538C25.5735 46.3538 27.4006 45.8759 29.0158 44.92C30.6574 43.964 31.9416 42.653 32.8684 40.987C33.2232 40.3566 33.5119 39.6998 33.7347 39.0166L37.5758 40.0782Z" fill="url(#ats_g0)"/>
      <path d="M25.2901 31.0081C25.2901 31.7027 25.4585 32.2441 25.7952 32.6323C26.1517 33 26.6469 33.1839 27.2807 33.1839C27.5184 33.1839 27.756 33.1532 27.9937 33.0919C28.2512 33.0306 28.4493 32.9591 28.588 32.8774L28.7959 36.5855C28.0234 36.851 27.2213 36.9838 26.3894 36.9838C24.587 36.9838 23.1807 36.4935 22.1706 35.5129C21.1604 34.5118 20.6554 33.1021 20.6554 31.2839V14H25.2901V31.0081Z" fill="url(#ats_g1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.79414 16.8639C10.4777 16.8639 11.983 17.2316 13.31 17.9671C14.6371 18.6822 15.6769 19.6832 16.4296 20.9703C17.1822 22.2574 17.5586 23.7182 17.5586 25.3526C17.5586 26.987 17.1822 28.4478 16.4296 29.7348C15.6769 31.0219 14.6371 32.0332 13.31 32.7687C11.983 33.4837 10.4777 33.8413 8.79414 33.8413C7.11058 33.8413 5.59535 33.4837 4.24851 32.7687C2.92147 32.0332 1.8816 31.0219 1.12895 29.7348C0.376307 28.4478 0 26.987 0 25.3526C0 23.7182 0.3763 22.2574 1.12895 20.9703C1.8816 19.6832 2.92147 18.6822 4.24851 17.9671C5.59535 17.2316 7.11058 16.8639 8.79414 16.8639ZM8.79414 20.7865C7.60575 20.7865 6.62533 21.2053 5.85288 22.0429C5.08042 22.8601 4.69419 23.9634 4.69419 25.3526C4.6942 26.7418 5.08042 27.8553 5.85288 28.6929C6.62533 29.5101 7.60576 29.9187 8.79414 29.9187C9.98253 29.9187 10.9531 29.5101 11.7058 28.6929C12.4782 27.8553 12.8644 26.7418 12.8644 25.3526C12.8644 23.9634 12.4782 22.8601 11.7058 22.0429C10.9531 21.2052 9.98253 20.7865 8.79414 20.7865Z" fill="url(#ats_g2)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5865 16.8639C39.6266 16.8639 41.221 17.5278 42.3698 18.8558V17.109H47.0045V33.5961H42.5778V31.6961C41.429 33.1262 39.7652 33.8413 37.5865 33.8413C36.0812 33.8413 34.7145 33.494 33.4865 32.7993C32.2783 32.1047 31.3276 31.1138 30.6343 29.8267C29.9411 28.5397 29.5946 27.0483 29.5946 25.3526C29.5946 23.6569 29.9411 22.1655 30.6343 20.8784C31.3276 19.5913 32.2783 18.6004 33.4865 17.9058C34.7145 17.2112 36.0812 16.8639 37.5865 16.8639ZM38.3887 20.7865C37.2003 20.7865 36.2198 21.2052 35.4474 22.0429C34.6749 22.8601 34.2887 23.9634 34.2887 25.3526C34.2887 26.7418 34.6749 27.8553 35.4474 28.6929C36.2198 29.5101 37.2003 29.9187 38.3887 29.9187C39.5573 29.9186 40.5278 29.5101 41.3002 28.6929C42.0727 27.8553 42.4589 26.7418 42.4589 25.3526C42.4589 23.9634 42.0727 22.8601 41.3002 22.0429C40.5278 21.2053 39.5573 20.7865 38.3887 20.7865Z" fill="url(#ats_g3)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M89.9994 16.8608C91.5245 16.8608 92.911 17.1979 94.1588 17.872C95.4066 18.5258 96.3969 19.4861 97.1298 20.7527C97.8824 21.999 98.2587 23.4802 98.2587 25.1963L86.4342 27.5559C86.771 28.3731 87.2958 28.986 88.0088 29.3946C88.7416 29.8032 89.633 30.0076 90.6827 30.0076C91.5146 30.0076 92.2475 29.8849 92.8813 29.6398C93.5349 29.3742 94.139 28.9656 94.6936 28.414L97.1595 31.1721C95.6542 32.9495 93.4557 33.8382 90.5639 33.8382C88.7615 33.8382 87.1671 33.4807 85.7806 32.7656C84.3942 32.0301 83.3245 31.0189 82.5719 29.7318C81.8192 28.4447 81.4429 26.9839 81.4429 25.3495C81.4429 23.7356 81.8094 22.285 82.5422 20.9979C83.2949 19.6904 84.3149 18.6791 85.6023 17.964C86.9096 17.2286 88.3753 16.8608 89.9994 16.8608ZM89.9994 20.4769C88.8308 20.4769 87.8801 20.8651 87.1472 21.6414C86.4144 22.4177 86.0282 23.4903 85.9886 24.8592L93.7726 23.2963C93.5547 22.4382 93.109 21.7538 92.4356 21.243C91.7622 20.7323 90.9501 20.4769 89.9994 20.4769Z" fill="url(#ats_g4)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M108.741 16.8608C110.266 16.8608 111.652 17.1979 112.9 17.872C114.148 18.5258 115.138 19.4861 115.871 20.7527C116.624 21.999 117 23.4802 117 25.1963L105.175 27.5559C105.512 28.3731 106.037 28.986 106.75 29.3946C107.483 29.8032 108.374 30.0076 109.424 30.0076C110.256 30.0076 110.989 29.8849 111.623 29.6398C112.276 29.3742 112.88 28.9656 113.435 28.414L115.901 31.1721C114.395 32.9495 112.197 33.8382 109.305 33.8382C107.503 33.8382 105.908 33.4807 104.522 32.7656C103.135 32.0301 102.066 31.0189 101.313 29.7318C100.56 28.4447 100.184 26.9839 100.184 25.3495C100.184 23.7356 100.551 22.285 101.283 20.9979C102.036 19.6904 103.056 18.6791 104.344 17.964C105.651 17.2286 107.117 16.8608 108.741 16.8608ZM108.741 20.4769C107.572 20.4769 106.621 20.8651 105.888 21.6414C105.156 22.4177 104.769 23.4903 104.73 24.8592L112.514 23.2963C112.296 22.4382 111.85 21.7538 111.177 21.243C110.503 20.7323 109.691 20.4769 108.741 20.4769Z" fill="url(#ats_g5)"/>
      <path d="M71.7652 16.8608C73.7657 16.8608 75.3503 17.4737 76.5189 18.6995C77.7073 19.9048 78.3014 21.7231 78.3015 24.1543V33.593H73.6667V24.8898C73.6667 23.5823 73.3993 22.6119 72.8645 21.9786C72.3496 21.3248 71.6068 20.9979 70.6363 20.9979C69.5469 20.9979 68.6853 21.3656 68.0515 22.1011C67.4177 22.8162 67.1008 23.8888 67.1008 25.3189V33.593H62.466V24.8898C62.466 22.2952 61.4559 20.9979 59.4356 20.9979C58.366 20.9979 57.5144 21.3656 56.8805 22.1011C56.2467 22.8162 55.9298 23.8888 55.9298 25.3189V33.593H51.2951V17.1059H55.7219V19.006C56.3161 18.3113 57.039 17.7802 57.8907 17.4124C58.7622 17.0447 59.7129 16.8608 60.7428 16.8608C61.8718 16.8608 62.8919 17.0958 63.803 17.5657C64.7141 18.0151 65.447 18.6791 66.0015 19.5576C66.6552 18.6995 67.4771 18.0355 68.4675 17.5657C69.4776 17.0958 70.5768 16.8608 71.7652 16.8608Z" fill="url(#ats_g6)"/>
      <defs>
        {[0,1,2,3,4,5,6].map(i => (
          <linearGradient key={i} id={`ats_g${i}`} x1="-3.71523" y1="51.5829" x2="109.146" y2="-12.1177" gradientUnits="userSpaceOnUse">
            <stop offset="0.159" stopColor="#7A5FFF"/>
            <stop offset="0.774" stopColor="#5ED4B2"/>
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
}

/* ─── Sidebar Promotional Card ──────────────────────────────────── */

function PromotionalCard() {
  return (
    <div
      className="flex flex-col gap-10 items-center justify-center overflow-hidden p-[30px] relative rounded-[20px] w-[386px] shrink-0"
      style={{
        backgroundImage:
          'linear-gradient(82.4deg, rgb(122, 95, 255) 32.94%, rgb(111, 227, 193) 116.54%)',
      }}
    >

      {/* Top section: heading + image + browse button */}
      <div className="flex flex-col gap-8 items-center relative shrink-0">
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-[321px]">
          <Text as="h3" variant="h4" weight="bold" className="text-[28px] leading-[32px] text-[#FDFDFE] w-full">
            Looking to Hire First?{'\n'}Discover Top-Tier Talent
          </Text>
          <Text as="p" variant="body-sm" className="leading-[1.4] text-[#FDFDFE] w-full">
            Browse our expertly curated selection of top-tier candidates,
            carefully vetted to match your EOR hiring needs.
          </Text>
        </div>

        <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
          {/* Candidate image */}
          <div className="flex flex-col h-[231px] items-center justify-end relative shrink-0 w-[326px]">
            <img
              src="/images/candidate-profile.png"
              alt="Candidate profile"
              className="h-[285px] w-[298px] object-contain"
            />
          </div>

          {/* Browse Candidates button — white bg, border */}
          <Button
            hierarchy="secondary"
            colorScheme="dark"
            size="medium"
            trailIcon={<i className="fa-regular fa-arrow-up-right-from-square text-[12px]" />}
            className="w-full bg-white border-[#B2B4BA]"
          >
            Browse Candidates
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0 w-full border-t border-white/20" />

      {/* EOR section */}
      <div className="flex flex-col gap-[45px] items-center relative shrink-0 w-full">
        {/* World map background overlay */}
        <img
          src="/images/world-map-bg.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        />
        <div className="flex flex-col gap-5 items-start relative shrink-0 w-[326px]">
          <Text as="h3" variant="h4" weight="bold" className="text-[28px] leading-[32px] text-[#FDFDFE]">
            Employer of Record
          </Text>

          <div className="flex flex-col gap-3 items-start relative shrink-0 w-[326px]">
            {[
              { num: '01', title: 'Hire Globally' },
              { num: '02', title: 'Stay Compliant' },
              { num: '03', title: 'Get HR & Legal Help' },
            ].map(item => (
              <div key={item.num} className="flex gap-5 items-center relative shrink-0 w-full">
                <div className="size-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Text as="span" weight="semibold" className="text-[16px] leading-[35.6px] text-[#7A5FFF] text-center">
                    {item.num}
                  </Text>
                </div>
                <Text as="span" weight="semibold" className="text-[18px] leading-[38px] text-[#FDFDFE]">
                  {item.title}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* How EOR Works button — accent yellow */}
        <Button
          hierarchy="primary"
          colorScheme="dark"
          size="medium"
          className="w-full bg-[#EAD94C] hover:bg-[#d8c83f] text-[#30343F]"
        >
          How EOR Works
        </Button>
      </div>
    </div>
  );
}

/* ─── Step Indicator ──────────────────────────────────────────────– */

interface StepIndicatorProps {
  steps: Array<{ num: string; label: string; active?: boolean; completed?: boolean }>;
}

function StepIndicator({ steps }: StepIndicatorProps) {
  return (
    <div className="flex h-24 items-start justify-center relative shrink-0 w-full">
      <div className="flex items-start justify-center relative shrink-0 w-full gap-0">
        {steps.map((step, idx) => (
          <div key={step.num} className="flex items-start justify-center relative">
            {/* Circle with number */}
            <div className="flex flex-col items-center justify-center relative shrink-0 w-14">
              <div
                className={`size-14 rounded-full flex items-center justify-center text-2xl font-semibold ${
                  step.completed || step.active
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-gunmetal-100 text-gunmetal-400'
                }`}
              >
                {step.num}
              </div>
              <div className="flex flex-col items-center justify-center relative shrink-0 w-full mt-2">
                <Text
                  variant="body-sm"
                  weight={step.active ? 'semibold' : 'medium'}
                  className={step.active ? 'text-gunmetal-900' : 'text-gunmetal-500'}
                >
                  {step.label}
                </Text>
              </div>
            </div>

            {/* Connector line */}
            {idx < steps.length - 1 && (
              <div className="flex flex-col h-full items-center justify-center relative shrink-0 w-20">
                <div className="h-0 relative shrink-0 w-20 border-t-2 border-gunmetal-200" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Form Content ─────────────────────────────────────────────────– */

interface FormField {
  label: string;
  options?: SelectionOption[];
  type?: 'select' | 'date';
  defaultValue?: string;
}

const formFields: Record<string, FormField> = {
  jobTitle: {
    label: 'Job Title',
    options: [
      { value: 'senior-accountant', label: 'Senior Accountant' },
      { value: 'project-manager', label: 'Project Manager' },
      { value: 'customer-service', label: 'Customer Service Representative' },
    ],
  },
  employeeType: {
    label: 'Employee Type',
    options: [
      { value: 'full-time', label: 'Full-Time' },
      { value: 'part-time', label: 'Part-Time' },
      { value: 'contract', label: 'Contract' },
    ],
  },
  directSupervisor: {
    label: 'Direct Supervisor',
    options: [
      { value: 'john-doe', label: 'John Doe' },
      { value: 'jane-smith', label: 'Jane Smith' },
    ],
  },
  department: {
    label: 'Department',
    options: [
      { value: 'engineering', label: 'Engineering' },
      { value: 'sales', label: 'Sales' },
      { value: 'hr', label: 'Human Resources' },
    ],
  },
};

const payrollOptions: SelectionOption[] = [
  { value: 'hourly-held', label: 'Hourly - Held' },
  { value: 'salary', label: 'Salary' },
];

const timeOffPolicyOptions: SelectionOption[] = [
  {
    value: 'cor-policy',
    label: 'Contractor of Record Policy, Policy for Tenures',
  },
];

function EmployeeTeamMembersATS() {
  const [selectedPayroll, setSelectedPayroll] = useState('hourly-held');
  const [selectedTimeOffPolicy, setSelectedTimeOffPolicy] = useState('cor-policy');
  const [payRate, setPayRate] = useState('0.00');

  const steps = [
    { num: '01', label: 'Basic Info', completed: true },
    { num: '02', label: 'Job Info', active: true },
    { num: '03', label: 'Contract' },
    { num: '04', label: 'Billing Info' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gunmetal-50">
      {/* TopNavbar — full width at the very top (matches showcase) */}
      <TopNavbar
        leftContent={<OlameeLogo />}
        centerContent={<SearchBar />}
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

      {/* Page Content — single shared scroll */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-start p-8 gap-8">
          {/* Promo Card — own div */}
          <div className="shrink-0">
            <PromotionalCard />
          </div>

          {/* Form Content — own div, fills remaining, centers content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[600px] space-y-8">
            {/* Step Indicator */}
            <StepIndicator steps={steps} />

            {/* Form Title */}
            <div className="space-y-2">
              <Text variant="h2" weight="bold" className="text-gunmetal-900">
                Contractor of Record:&nbsp;
                <span className="font-semibold">Add Existing Applicant</span>
              </Text>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Job Title Dropdown */}
              <SingleSelectDropdown
                label="Job Title"
                options={formFields.jobTitle.options || []}
                placeholder="Please select an option"
                showLabel
              />

              {/* Employee Type Dropdown */}
              <SingleSelectDropdown
                label="Employee Type"
                options={formFields.employeeType.options || []}
                placeholder="Please select an option"
                showLabel
              />

              {/* Direct Supervisor Dropdown */}
              <SingleSelectDropdown
                label="Direct Supervisor"
                options={formFields.directSupervisor.options || []}
                placeholder="Please select an option"
                showLabel
              />

              {/* Department Dropdown */}
              <SingleSelectDropdown
                label="Department"
                options={formFields.department.options || []}
                placeholder="Please select an option"
                showLabel
              />

              {/* Payroll Section */}
              <div className="space-y-4">
                <SingleSelectDropdown
                  label="Payroll"
                  options={payrollOptions}
                  value={selectedPayroll}
                  onChange={setSelectedPayroll}
                  placeholder="Please select an option"
                  showLabel
                />

                {/* Selected Payroll Preview */}
                <div className="space-y-2">
                  <Text variant="body-xs" weight="medium" className="text-gunmetal-900">
                    Selected Payroll Preview
                  </Text>
                  <div className="bg-white border border-gunmetal-200 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Text variant="body-sm" weight="bold" className="text-gunmetal-900">
                          Hourly - Held
                        </Text>
                        <Tag color="default" size="small" className="w-fit">
                          230 Members
                        </Tag>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <Text weight="medium" className="text-gunmetal-900">
                            Pay Frequency
                          </Text>
                          <Text className="text-gunmetal-500">Bi-Weekly</Text>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <Text weight="medium" className="text-gunmetal-900">
                            Compensation Type
                          </Text>
                          <Text className="text-gunmetal-500">Hourly</Text>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <Text weight="medium" className="text-gunmetal-900">
                            Hold Payments
                          </Text>
                          <Text className="text-gunmetal-500">1</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pay Rate */}
              <div className="space-y-2">
                <Text variant="body-sm" weight="medium" className="text-gunmetal-900">
                  Pay Rate
                </Text>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-3 bg-white border border-gunmetal-300 rounded-[10px] w-24">
                    <Text as="span" variant="body-sm" weight="medium" className="text-gunmetal-900">USD</Text>
                    <Icon name="chevron-down" size="sm" />
                  </div>
                  <Input
                    type="text"
                    value={payRate}
                    onChange={e => setPayRate(e.target.value)}
                    placeholder="0.00"
                    inputSize="medium"
                    className="flex-1"
                  />
                  <Text as="span" variant="body-sm" weight="medium" className="px-3 py-3 bg-white border border-gunmetal-300 rounded-[10px] text-gunmetal-500">
                    Hourly
                  </Text>
                </div>
              </div>

              {/* Start Date */}
              <DatePickerInput label="Start Date" labelPosition="top" placeholder="mm/dd/yyyy" />

              {/* Time Off Policy */}
              <div className="space-y-4">
                <SingleSelectDropdown
                  label="Time Off Policy"
                  options={timeOffPolicyOptions}
                  value={selectedTimeOffPolicy}
                  onChange={setSelectedTimeOffPolicy}
                  placeholder="Please select an option"
                  showLabel
                />

                {/* Time Off Policy Preview */}
                <div className="space-y-2">
                  <Text variant="body-xs" weight="medium" className="text-gunmetal-900">
                    Selected Time Off Policy Preview
                  </Text>
                  <div className="space-y-3">
                    {/* Contractor of Record Policy */}
                    <div className="bg-white border border-gunmetal-200 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Text variant="body-sm" weight="bold" className="text-gunmetal-900">
                              Contractor of Record Policy
                            </Text>
                            <Tag color="info" size="small" className="w-fit">
                              Default
                            </Tag>
                          </div>
                          <Tag color="default" size="small" className="w-fit">
                            230 Members
                          </Tag>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Time Off Applicability
                            </Text>
                            <Text className="text-gunmetal-500">Accrued Monthly</Text>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Paid Leave
                            </Text>
                            <Text className="text-gunmetal-500">12 days</Text>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Unpaid Leave
                            </Text>
                            <Text className="text-gunmetal-500">12 days</Text>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Holidays
                            </Text>
                            <Text className="text-gunmetal-500">12 days</Text>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Balance Rollover
                            </Text>
                            <Text className="text-gunmetal-500">Rollover Annually</Text>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Policy for Tenures */}
                    <div className="bg-white border border-gunmetal-200 rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Text variant="body-sm" weight="bold" className="text-gunmetal-900">
                            Policy for Tenures
                          </Text>
                          <Tag color="default" size="small" className="w-fit">
                            123 Members
                          </Tag>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Time Off Applicability
                            </Text>
                            <Text className="text-gunmetal-500">Accrued Monthly</Text>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Paid Leave
                            </Text>
                            <Text className="text-gunmetal-500">12 days</Text>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Unpaid Leave
                            </Text>
                            <Text className="text-gunmetal-500">12 days</Text>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Holidays
                            </Text>
                            <Text className="text-gunmetal-500">12 days</Text>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <Text weight="medium" className="text-gunmetal-900">
                              Balance Rollover
                            </Text>
                            <Text className="text-gunmetal-500">Rollover Annually</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gunmetal-200">
              <Button hierarchy="secondary" size="medium" colorScheme="violet">
                Back
              </Button>
              <Button hierarchy="primary" size="medium" colorScheme="violet" trailIcon={<Icon name="arrow-right" size="sm" />}>
                Next
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTeamMembersATS;
