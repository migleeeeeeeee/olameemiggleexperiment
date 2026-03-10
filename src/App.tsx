import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ExamplesIndex from '@/pages/ExamplesIndex';
import ComponentShowcase from '@/pages/ComponentShowcase';
import SourceHub from '@/pages/SourceHub';
import EmployeeTeamMembersATS from '@/pages/EmployeeTeamMembersATS';
import PayrollSettings from '@/pages/PayrollSettings';
import ApplicantProfile from '@/pages/ApplicantProfile';
import Applicants from '@/pages/Applicants';
import ApplicantProfileTalentPool from '@/pages/ApplicantProfileTalentPool';
import PayrollDashboard from '@/pages/PayrollDashboard';
import SettingsIntegrations from '@/pages/SettingsIntegrations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/examples" replace />} />
        <Route path="/examples" element={<ExamplesIndex />} />
        <Route path="/examples/component-showcase" element={<ComponentShowcase />} />
        <Route path="/examples/source-hub" element={<SourceHub />} />
        <Route path="/team-members" element={<EmployeeTeamMembersATS />} />
        <Route path="/payroll-settings" element={<PayrollSettings />} />
        <Route path="/applicant-profile" element={<ApplicantProfile />} />
        <Route path="/applicant-profile-talent-pool" element={<ApplicantProfileTalentPool />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/payroll-dashboard" element={<PayrollDashboard />} />
        <Route path="/settings/integrations" element={<SettingsIntegrations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
