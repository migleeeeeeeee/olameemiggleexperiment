import {
  TopNavbar,
  Sidebar,
  SearchBar,
  Button,
  IconButton,
  Text,
  Icon,
  Tag,
  type SidebarSection,
} from '@/design-system';

/* ─── Olamee gradient logo ──────────────────────────────────── */

function OlameeLogo() {
  return (
    <svg width="117" height="50" viewBox="0 0 117 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5758 40.0782C37.2717 41.0522 36.8676 41.9834 36.3636 42.8715C35.0926 45.0838 33.3318 46.8318 31.0811 48.1155C28.8304 49.3718 26.3149 50 23.5346 50C20.7279 50 18.1992 49.3718 15.9485 48.1155C14.3566 47.2075 13.0032 46.0605 11.8882 44.6744L15.0219 42.3771C15.8358 43.4002 16.8199 44.2479 17.9741 44.92C19.6423 45.8759 21.4958 46.3538 23.5346 46.3538C25.5735 46.3538 27.4006 45.8759 29.0158 44.92C30.6574 43.964 31.9416 42.653 32.8684 40.987C33.2232 40.3566 33.5119 39.6998 33.7347 39.0166L37.5758 40.0782Z" fill="url(#atp_g0)"/>
      <path d="M25.2901 31.0081C25.2901 31.7027 25.4585 32.2441 25.7952 32.6323C26.1517 33 26.6469 33.1839 27.2807 33.1839C27.5184 33.1839 27.756 33.1532 27.9937 33.0919C28.2512 33.0306 28.4493 32.9591 28.588 32.8774L28.7959 36.5855C28.0234 36.851 27.2213 36.9838 26.3894 36.9838C24.587 36.9838 23.1807 36.4935 22.1706 35.5129C21.1604 34.5118 20.6554 33.1021 20.6554 31.2839V14H25.2901V31.0081Z" fill="url(#atp_g1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.79414 16.8639C10.4777 16.8639 11.983 17.2316 13.31 17.9671C14.6371 18.6822 15.6769 19.6832 16.4296 20.9703C17.1822 22.2574 17.5586 23.7182 17.5586 25.3526C17.5586 26.987 17.1822 28.4478 16.4296 29.7348C15.6769 31.0219 14.6371 32.0332 13.31 32.7687C11.983 33.4837 10.4777 33.8413 8.79414 33.8413C7.11058 33.8413 5.59535 33.4837 4.24851 32.7687C2.92147 32.0332 1.8816 31.0219 1.12895 29.7348C0.376307 28.4478 6.1839e-06 26.987 0 25.3526C0 23.7182 0.3763 22.2574 1.12895 20.9703C1.8816 19.6832 2.92147 18.6822 4.24851 17.9671C5.59535 17.2316 7.11058 16.8639 8.79414 16.8639ZM8.79414 20.7865C7.60575 20.7865 6.62533 21.2053 5.85288 22.0429C5.08042 22.8601 4.69419 23.9634 4.69419 25.3526C4.6942 26.7418 5.08042 27.8553 5.85288 28.6929C6.62533 29.5101 7.60576 29.9187 8.79414 29.9187C9.98253 29.9187 10.9531 29.5101 11.7058 28.6929C12.4782 27.8553 12.8644 26.7418 12.8644 25.3526C12.8644 23.9634 12.4782 22.8601 11.7058 22.0429C10.9531 21.2052 9.98253 20.7865 8.79414 20.7865Z" fill="url(#atp_g2)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5865 16.8639C39.6266 16.8639 41.221 17.5278 42.3698 18.8558V17.109H47.0045V33.5961H42.5778V31.6961C41.429 33.1262 39.7652 33.8413 37.5865 33.8413C36.0812 33.8413 34.7145 33.494 33.4865 32.7993C32.2783 32.1047 31.3276 31.1138 30.6343 29.8267C29.9411 28.5397 29.5946 27.0483 29.5946 25.3526C29.5946 23.6569 29.9411 22.1655 30.6343 20.8784C31.3276 19.5913 32.2783 18.6004 33.4865 17.9058C34.7145 17.2112 36.0812 16.8639 37.5865 16.8639ZM38.3887 20.7865C37.2003 20.7865 36.2198 21.2052 35.4474 22.0429C34.6749 22.8601 34.2887 23.9634 34.2887 25.3526C34.2887 26.7418 34.6749 27.8553 35.4474 28.6929C36.2198 29.5101 37.2003 29.9187 38.3887 29.9187C39.5573 29.9186 40.5278 29.5101 41.3002 28.6929C42.0727 27.8553 42.4589 26.7418 42.4589 25.3526C42.4589 23.9634 42.0727 22.8601 41.3002 22.0429C40.5278 21.2053 39.5573 20.7865 38.3887 20.7865Z" fill="url(#atp_g3)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M89.9994 16.8608C91.5245 16.8608 92.911 17.1979 94.1588 17.872C95.4066 18.5258 96.3969 19.4861 97.1298 20.7527C97.8824 21.999 98.2587 23.4802 98.2587 25.1963L86.4342 27.5559C86.771 28.3731 87.2958 28.986 88.0088 29.3946C88.7416 29.8032 89.633 30.0076 90.6827 30.0076C91.5146 30.0076 92.2475 29.8849 92.8813 29.6398C93.5349 29.3742 94.139 28.9656 94.6936 28.414L97.1595 31.1721C95.6542 32.9495 93.4557 33.8382 90.5639 33.8382C88.7615 33.8382 87.1671 33.4807 85.7806 32.7656C84.3942 32.0301 83.3245 31.0189 82.5719 29.7318C81.8192 28.4447 81.4429 26.9839 81.4429 25.3495C81.4429 23.7356 81.8094 22.285 82.5422 20.9979C83.2949 19.6904 84.3149 18.6791 85.6023 17.964C86.9096 17.2286 88.3753 16.8608 89.9994 16.8608ZM89.9994 20.4769C88.8308 20.4769 87.8801 20.8651 87.1472 21.6414C86.4144 22.4177 86.0282 23.4903 85.9886 24.8592L93.7726 23.2963C93.5547 22.4382 93.109 21.7538 92.4356 21.243C91.7622 20.7323 90.9501 20.4769 89.9994 20.4769Z" fill="url(#atp_g4)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M108.741 16.8608C110.266 16.8608 111.652 17.1979 112.9 17.872C114.148 18.5258 115.138 19.4861 115.871 20.7527C116.624 21.999 117 23.4802 117 25.1963L105.175 27.5559C105.512 28.3731 106.037 28.986 106.75 29.3946C107.483 29.8032 108.374 30.0076 109.424 30.0076C110.256 30.0076 110.989 29.8849 111.623 29.6398C112.276 29.3742 112.88 28.9656 113.435 28.414L115.901 31.1721C114.395 32.9495 112.197 33.8382 109.305 33.8382C107.503 33.8382 105.908 33.4807 104.522 32.7656C103.135 32.0301 102.066 31.0189 101.313 29.7318C100.56 28.4447 100.184 26.9839 100.184 25.3495C100.184 23.7356 100.551 22.285 101.283 20.9979C102.036 19.6904 103.056 18.6791 104.344 17.964C105.651 17.2286 107.117 16.8608 108.741 16.8608ZM108.741 20.4769C107.572 20.4769 106.621 20.8651 105.888 21.6414C105.156 22.4177 104.769 23.4903 104.73 24.8592L112.514 23.2963C112.296 22.4382 111.85 21.7538 111.177 21.243C110.503 20.7323 109.691 20.4769 108.741 20.4769Z" fill="url(#atp_g5)"/>
      <path d="M71.7652 16.8608C73.7657 16.8608 75.3503 17.4737 76.5189 18.6995C77.7073 19.9048 78.3014 21.7231 78.3015 24.1543V33.593H73.6667V24.8898C73.6667 23.5823 73.3993 22.6119 72.8645 21.9786C72.3496 21.3248 71.6068 20.9979 70.6363 20.9979C69.5469 20.9979 68.6853 21.3656 68.0515 22.1011C67.4177 22.8162 67.1008 23.8888 67.1008 25.3189V33.593H62.466V24.8898C62.466 22.2952 61.4559 20.9979 59.4356 20.9979C58.366 20.9979 57.5144 21.3656 56.8805 22.1011C56.2467 22.8162 55.9298 23.8888 55.9298 25.3189V33.593H51.2951V17.1059H55.7219V19.006C56.3161 18.3113 57.039 17.7802 57.8907 17.4124C58.7622 17.0447 59.7129 16.8608 60.7428 16.8608C61.8718 16.8608 62.8919 17.0958 63.803 17.5657C64.7141 18.0151 65.447 18.6791 66.0015 19.5576C66.6552 18.6995 67.4771 18.0355 68.4675 17.5657C69.4776 17.0958 70.5768 16.8608 71.7652 16.8608Z" fill="url(#atp_g6)"/>
      <defs>
        {[0,1,2,3,4,5,6].map(i => (
          <linearGradient key={i} id={`atp_g${i}`} x1="-3.71523" y1="51.5829" x2="109.146" y2="-12.1177" gradientUnits="userSpaceOnUse">
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

/* ─── Applicant Status Steps ─────────────────────────────────── */

const statusSteps = [
  { icon: 'fa-solid fa-folder-user', color: '#5ED4B2', bgColor: '#E6FBF4', completed: true },
  { icon: 'fa-regular fa-file-lines', color: '#C8CAD0', bgColor: '#F4F4F6', completed: false },
  { icon: 'fa-regular fa-clipboard-list', color: '#C8CAD0', bgColor: '#F4F4F6', completed: false },
  { icon: 'fa-regular fa-handshake', color: '#C8CAD0', bgColor: '#F4F4F6', completed: false },
];

/* ─── Sub-components ─────────────────────────────────────────── */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[4px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`${
            star <= Math.floor(rating)
              ? 'fa-solid fa-star text-[#7A5FFF]'
              : star - 0.5 <= rating
                ? 'fa-solid fa-star-half-stroke text-[#7A5FFF]'
                : 'fa-regular fa-star text-[#C8CAD0]'
          } text-[14px]`}
        />
      ))}
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text as="p" variant="body-lg" weight="bold" className="font-heading text-[#30343F]">
      {children}
    </Text>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <Text as="span" variant="body-xs" className="px-[8px] py-[3px] rounded-[6px] bg-[#F4F4F6] text-[#30343F]">
      {label}
    </Text>
  );
}

function WorkExperienceEntry({
  title,
  company,
  jobSetup,
  duration,
  skills,
  summary,
}: {
  title: string;
  company: string;
  jobSetup: string;
  duration: string;
  skills: string[];
  summary: string;
}) {
  return (
    <div className="flex flex-col gap-[12px]">
      <Text as="p" variant="body-base" weight="bold" className="text-[#30343F]">{title}</Text>

      {/* Company / Job Setup / Duration row */}
      <div className="flex items-center gap-[24px]">
        <div className="flex flex-col gap-[4px]">
          <Text as="span" variant="body-xs" weight="semibold" className="text-[#30343F]">Company</Text>
          <div className="flex items-center gap-[8px]">
            <div className="size-[20px] rounded-full bg-[#E8E9EC]" />
            <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{company}</Text>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <Text as="span" variant="body-xs" weight="semibold" className="text-[#30343F]">Job Setup</Text>
          <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{jobSetup}</Text>
        </div>
        <div className="flex flex-col gap-[4px]">
          <Text as="span" variant="body-xs" weight="semibold" className="text-[#30343F]">Duration</Text>
          <Text as="span" variant="body-xs" className="text-[#6B6F7B]">{duration}</Text>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-[4px]">
        <Text as="span" variant="body-xs" weight="semibold" className="text-[#30343F]">Skills</Text>
        <div className="flex flex-wrap gap-[6px]">
          {skills.map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </div>
      </div>

      {/* Role Summary */}
      <div className="flex flex-col gap-[4px]">
        <Text as="span" variant="body-xs" weight="semibold" className="text-[#30343F]">Role Summary</Text>
        <Text as="p" variant="body-xs" className="text-[#6B6F7B]">{summary}</Text>
      </div>
    </div>
  );
}

function AssessmentBadge({ grade, color, bgColor }: { grade: string; color: string; bgColor: string }) {
  return (
    <div
      className="size-[27px] rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: bgColor, border: `1.5px solid ${color}` }}
    >
      <Text
        as="span"
        className="font-heading font-semibold text-[10px] tracking-[-0.2px]"
        style={{ color }}
      >
        {grade}
      </Text>
    </div>
  );
}

function AssessmentCard({ name, timeAgo, grade, gradeColor, gradeBg }: {
  name: string;
  timeAgo: string;
  grade: string;
  gradeColor: string;
  gradeBg: string;
}) {
  return (
    <div className="flex-1 bg-[#FDFDFE] border border-[#DBDDE0] rounded-[12px] p-[12px] flex items-center gap-[12px]">
      <AssessmentBadge grade={grade} color={gradeColor} bgColor={gradeBg} />
      <div className="flex-1 min-w-0 flex flex-col gap-[3px]">
        <Text as="p" variant="body-base" weight="bold" className="text-[#30343F] truncate">{name}</Text>
        <Text as="p" variant="body-xs" className="text-[#646A79]">{timeAgo}</Text>
      </div>
    </div>
  );
}

function InterviewScoreCard({ score, textColor, bgColor, label, note }: {
  score: string;
  textColor: string;
  bgColor: string;
  label: string;
  note: string;
}) {
  return (
    <div className="bg-[#FDFDFE] border border-[#D7D8DC] rounded-[12px] p-[16px] flex flex-col gap-[8px]">
      <div className="flex items-center gap-[8px]">
        <Text
          as="span"
          className="font-heading font-bold text-[16px] leading-[20px] px-[6px] rounded-[50px]"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {score}
        </Text>
        <Text as="span" variant="body-lg" weight="bold" className="text-[#30343F]">{label}</Text>
      </div>
      <div className="flex gap-[4px] text-[10px] leading-[12px] font-body font-medium">
        <Text as="span" className="text-[#8D8F97] shrink-0">Note:</Text>
        <Text as="span" className="text-[#30343F]">{note}</Text>
      </div>
    </div>
  );
}

/* ─── Page Component ─────────────────────────────────────────── */

export default function ApplicantProfileTalentPool() {
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
              <Text as="span" variant="body-base" weight="bold" className="text-[#30343F]">
                Ola, Evan!
              </Text>
            </div>
          </div>
        }
      />

      {/* ── Body: Sidebar + Main ──────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar sections={sidebarSections} activeTab="Applicants" defaultCollapsed theme="purple" iconStyle="light" />

        <main className="flex-1 overflow-y-auto p-[32px] flex flex-col gap-[32px]">
          {/* ── Title Bar ─────────────────────────────────── */}
          <div className="flex items-center gap-[4px]">
            <IconButton
              hierarchy="secondary"
              size="sm"
              colorScheme="dark"
              icon={<i className="fa-regular fa-arrow-left text-[14px]" />}
              aria-label="Go back"
            />
            <Text variant="h3" weight="bold" className="flex-1">Applicants</Text>
            <div className="flex items-center gap-[12px]">
              <Button hierarchy="tonal" size="small" colorScheme="violet" leadIcon={<i className="fa-solid fa-bookmark text-[14px]" />}>
                Saved
              </Button>
              <Button hierarchy="primary" size="small" colorScheme="violet" leadIcon={<i className="fa-regular fa-folder-user text-[14px]" />}>
                I want this Applicant
              </Button>
            </div>
          </div>

          {/* ── Three Column Layout ──────────────────────── */}
          <div className="flex gap-[12px] flex-1 min-h-0">
            {/* ── COLUMN 1: Profile + Description + Work Experience ── */}
            <div className="flex-1 flex flex-col gap-[12px] min-w-0">
              {/* Profile Card */}
              <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[24px] p-[28px] flex flex-col gap-[16px]">
                {/* Avatar + Name row */}
                <div className="flex items-center gap-[16px]">
                  <div className="size-[60px] rounded-full bg-[#F1F5FF] border border-[#EFF0F3] flex items-center justify-center shrink-0">
                    <Text as="span" variant="h3" weight="bold" className="font-heading text-[#6F54EB]">P</Text>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-center gap-[4px]">
                      <Text as="span" variant="h5" weight="semibold" className="font-heading text-[#30343F]">Pearl</Text>
                      <Text as="span" variant="h5" weight="semibold" className="font-heading text-[#30343F] blur-[5px]">LasNGSilangan</Text>
                      <Tag color="info" size="small">Top Scorer</Tag>
                    </div>
                    <StarRating rating={4.5} />
                  </div>
                </div>

                {/* Two sub-columns: left cards + right cards */}
                <div className="flex gap-[16px] flex-1">
                  {/* Left sub-column */}
                  <div className="flex-1 flex flex-col gap-[16px]">
                    {/* Description Card */}
                    <div className="border border-[#D7D8DC] rounded-[12px] p-[16px] flex flex-col gap-[8px]">
                      <SectionTitle>Description</SectionTitle>
                      <Text as="p" variant="body-base" className="text-[#30343F]">
                        Creative Content Writer with extensive experience in developing captivating stories for various mediums such as blogs, websites, and social media. Skilled in working closely with marketing teams to maintain brand consistency and enhance audience engagement. Proficient in SEO strategies to boost online visibility and drive traffic. Passionate about producing high-quality content that resonates with target audiences. Committed to continuous learning and adapting to the ever-evolving digital landscape.
                      </Text>
                    </div>

                    {/* Work Experience Card */}
                    <div className="border border-[#D7D8DC] rounded-[12px] p-[16px] flex flex-col gap-[20px]">
                      <SectionTitle>Work Experience</SectionTitle>

                      <WorkExperienceEntry
                        title="Senior Content Writer"
                        company="████████"
                        jobSetup="Full Time"
                        duration="Aug 2018 - January 2022 (18 mos)"
                        skills={['Drawing', 'Swimming', 'Teaching', 'Art', 'Painting']}
                        summary="Develop captivating stories for various mediums such as blogs, websites, and social media, working closely with marketing teams to maintain brand consistency and enhance audience engagement."
                      />

                      <div className="h-px bg-[#E8E9EC]" />

                      <WorkExperienceEntry
                        title="Junior UI/UX Designer"
                        company="████████"
                        jobSetup="Full Time"
                        duration="Aug 2018 - January 2022 (18 mos)"
                        skills={['Drawing', 'Swimming', 'Teaching', 'Art', 'Painting']}
                        summary="Develop captivating stories for various mediums such as blogs, websites, and social media, working closely with marketing teams to maintain brand consistency and enhance audience engagement."
                      />
                    </div>
                  </div>

                  {/* Right sub-column */}
                  <div className="flex-1 flex flex-col gap-[16px]">
                    {/* Personal Info Card */}
                    <div className="border border-[#D7D8DC] rounded-[12px] p-[16px] flex flex-col gap-[8px]">
                      <SectionTitle>Personal Info</SectionTitle>
                      <div className="flex flex-col gap-[16px]">
                        <InfoRow label="Gender" value="Male" />
                        <InfoRow
                          label="Language(s)"
                          value={
                            <div className="flex items-center gap-[6px]">
                              <Text as="span">English, Filipino, Spanish</Text>
                              <Tag color="default" size="small">+3</Tag>
                            </div>
                          }
                        />
                        <InfoRow label="Nationality" value="Filipino" />
                        <InfoRow label="Date of Birth" value="August 18" />
                        <InfoRow
                          label="Location"
                          value={
                            <div className="flex items-center gap-[6px]">
                              <Text as="span" className="text-[16px]">🇵🇭</Text>
                              <Text as="span">Philippines</Text>
                            </div>
                          }
                        />
                      </div>
                    </div>

                    {/* Contact Info Card */}
                    <div className="border border-[#D7D8DC] rounded-[12px] p-[16px] flex flex-col gap-[8px]">
                      <SectionTitle>Contact Info</SectionTitle>
                      <div className="flex flex-col gap-[14px]">
                        <div className="flex items-center gap-[12px]">
                          <i className="fa-regular fa-envelope text-[14px] text-[#8D8F97] w-[16px] text-center" />
                          <Text as="span" variant="body-base" className="text-[#30343F] blur-[5px]">pearl.silangan@email.com</Text>
                          <i className="fa-solid fa-circle-check text-[12px] text-[#5ED4B2]" />
                        </div>
                        <div className="flex items-center gap-[12px]">
                          <i className="fa-regular fa-phone text-[14px] text-[#8D8F97] w-[16px] text-center" />
                          <Text as="span" variant="body-base" className="text-[#30343F] blur-[5px]">+63 9181234567</Text>
                          <i className="fa-solid fa-circle-check text-[12px] text-[#5ED4B2]" />
                        </div>
                      </div>
                    </div>

                    {/* Candidate Info Card */}
                    <div className="border border-[#D7D8DC] rounded-[12px] p-[16px] flex flex-col gap-[8px]">
                      <SectionTitle>Candidate Info</SectionTitle>
                      <div className="flex flex-col gap-[16px]">
                        <InfoRow label="Experience Level" value="Entry Level" />
                        <InfoRow label="Salary Range" value="$4.00 - 8.00/hr" />
                        <InfoRow label="Availability to start" value="2 weeks notice" />
                        <InfoRow label="Educational Attainment" value="Bachelor's Degree" />
                        <InfoRow label="Degree" value="Bachelor of Science in Multimedia Arts" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── COLUMN 3: Right Sidebar ─────────────────── */}
            <div className="w-[32%] shrink-0 flex flex-col gap-[12px]">
              {/* Applicant Status */}
              <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[24px] p-[28px] flex flex-col gap-[16px]">
                <SectionTitle>Applicant Status</SectionTitle>

                {/* Status stepper icons */}
                <div className="flex items-center justify-between">
                  {statusSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center">
                      <div
                        className="size-[36px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        <i className={`${step.icon} text-[16px]`} style={{ color: step.color }} />
                      </div>
                      {idx < statusSteps.length - 1 && (
                        <div className="w-[20px] h-px bg-[#E8E9EC] mx-[4px]" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Status text */}
                <div className="flex flex-col gap-[4px]">
                  <Text as="p" variant="body-base" weight="bold" className="font-heading text-[#5ED4B2]">REQUEST SENT</Text>
                  <Text as="p" variant="body-xs" className="text-[#6B6F7B]">
                    Your candidate request has been sent to the recruitment team.
                  </Text>
                </div>
              </div>

              {/* Assessment Results */}
              <div className="bg-[#FDFDFE] border border-[#F1F1F3] rounded-[24px] p-[28px] flex flex-col gap-[20px]">
                <SectionTitle>Assessment Results</SectionTitle>

                <div className="flex flex-col gap-[12px]">
                  {/* Row 1 */}
                  <div className="flex gap-[12px]">
                    <AssessmentCard
                      name="Administrative Test"
                      timeAgo="1 day ago"
                      grade="B"
                      gradeColor="#7A5FFF"
                      gradeBg="#F0EDFF"
                    />
                    <AssessmentCard
                      name="Bookkeeping & Acco..."
                      timeAgo="1 day ago"
                      grade="A"
                      gradeColor="#3BA98B"
                      gradeBg="#E6FBF4"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="flex gap-[16px]">
                    <div className="flex-1 flex">
                      <AssessmentCard
                        name="L&V-ERC"
                        timeAgo="1 day ago"
                        grade="C"
                        gradeColor="#BFAE34"
                        gradeBg="#FFF9E0"
                      />
                    </div>
                    {/* Invisible placeholder to maintain 2-col grid */}
                    <div className="flex-1 opacity-0 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Interview Questions */}
              <div className="bg-[#FDFDFE] border border-[#EFF0F3] rounded-[24px] pl-[28px] pr-[16px] py-[20px] flex flex-col gap-[16px]">
                <SectionTitle>Interview Questions</SectionTitle>

                <div className="flex flex-col gap-[8px]">
                  <InterviewScoreCard
                    score="9.0"
                    textColor="#3BA98B"
                    bgColor="#C7F2E4"
                    label="Communication Skill"
                    note="Good potential with some training"
                  />
                  <InterviewScoreCard
                    score="8.4"
                    textColor="#6F54EB"
                    bgColor="#E1DBFF"
                    label="Communication Skill"
                    note="Good potential with some training"
                  />
                  <InterviewScoreCard
                    score="7.2"
                    textColor="#BFA634"
                    bgColor="#FBF7D9"
                    label="Communication Skill"
                    note="Good potential with some training"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
