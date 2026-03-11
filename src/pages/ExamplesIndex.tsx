import { Link } from 'react-router-dom';
import { Text } from '@/design-system';

interface ExamplePageLink {
  title: string;
  description: string;
  path: string;
}

const examplePages: ExamplePageLink[] = [
  {
    title: 'Component Showcase',
    description: 'All design system components displayed with their variants and states.',
    path: '/examples/component-showcase',
  },
  {
    title: 'Source Hub',
    description: 'Applicants Source Hub page — search talent globally with filters.',
    path: '/examples/source-hub',
  },
  {
    title: 'Applicant Profile',
    description: 'Individual applicant profile with details, timeline, and application status.',
    path: '/applicant-profile',
  },
  {
    title: 'Applicant Profile — Talent Pool',
    description: 'Talent pool applicant profile with assessment results, interview questions, and applicant status.',
    path: '/applicant-profile-talent-pool',
  },
  {
    title: 'Payroll Settings',
    description: 'Payroll settings management — configure pay periods, view team members, and manage payroll rules.',
    path: '/payroll-settings',
  },
  {
    title: 'Payroll Dashboard',
    description: 'Payroll dashboard — view payroll totals, adjustments, team member pay details, and manage payroll submissions.',
    path: '/payroll-dashboard',
  },
  {
    title: 'Settings — Integrations',
    description: 'Integrations settings page — manage third-party integrations and API connections.',
    path: '/settings/integrations',
  },
];

export default function ExamplesIndex() {
  return (
    <div className="min-h-screen bg-[#F8F8FA] p-8">
      <div className="max-w-[960px] mx-auto space-y-8">
        <div className="space-y-2">
          <Text variant="h2" weight="bold">Example Pages</Text>
          <Text variant="body-base" className="text-gunmetal-400">
            Browse example pages showcasing the Olamee design system.
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examplePages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group block rounded-[var(--radius-lg)] border border-gunmetal-200 bg-white p-6 transition-all duration-200 hover:shadow-elevation-1 hover:border-primary-300"
            >
              <Text variant="body-lg" weight="semibold" className="group-hover:text-primary-500 transition-colors">
                {page.title}
              </Text>
              <Text variant="body-sm" className="text-gunmetal-400 mt-2">
                {page.description}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
