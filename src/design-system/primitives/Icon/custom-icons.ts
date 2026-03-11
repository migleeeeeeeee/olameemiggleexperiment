/**
 * Olamee Custom PNG Icons
 *
 * Custom brand icons used throughout the Olamee design system.
 * Stored as PNG files in public/icons/olamee/
 *
 * Usage:
 *   <Icon name="om-dashboard" />
 *   <Icon name="om-applicants" size="lg" />
 *   <img src={CUSTOM_ICON_URLS['om-dashboard']} alt="Dashboard" />
 */

export const CUSTOM_ICON_URLS = {
  'om-add-new-team-member': '/icons/olamee/OM-add-new-team-member.png',
  'om-applicant-list': '/icons/olamee/OM-applicant-list.png',
  'om-applicants': '/icons/olamee/OM-applicants.png',
  'om-assessments': '/icons/olamee/OM-assessments.png',
  'om-attendance': '/icons/olamee/OM-attendance.png',
  'om-clients': '/icons/olamee/OM-clients.png',
  'om-collapse': '/icons/olamee/OM-collapse.png',
  'om-dashboard': '/icons/olamee/OM-dashboard.png',
  'om-eor-cost-calculator': '/icons/olamee/OM-eor-cost-calculator.png',
  'om-expand': '/icons/olamee/OM-expand.png',
  'om-generate-invoice': '/icons/olamee/OM-generate-invoice.png',
  'om-interview-calendars': '/icons/olamee/OM-interview-calendars.png',
  'om-interviews': '/icons/olamee/OM-interviews.png',
  'om-jobs': '/icons/olamee/OM-jobs.png',
  'om-jobs-listing': '/icons/olamee/OM-jobs-listing.png',
  'om-manage-clients': '/icons/olamee/OM-manage clients.png',
  'om-manage-payments': '/icons/olamee/OM-manage-payments.png',
  'om-member-activities': '/icons/olamee/OM-member activities.png',
  'om-payment-history': '/icons/olamee/OM-payment-history.png',
  'om-payments': '/icons/olamee/OM-payments.png',
  'om-payments-reports': '/icons/olamee/OM-payments-reports.png',
  'om-payrolls': '/icons/olamee/OM-payrolls.png',
  'om-position-request': '/icons/olamee/OM-position-request.png',
  'om-projects': '/icons/olamee/OM-projects.png',
  'om-reports': '/icons/olamee/OM-reports.png',
  'om-settings': '/icons/olamee/OM-settings.png',
  'om-submit-feedback': '/icons/olamee/OM-submit-feedback.png',
  'om-support': '/icons/olamee/OM-support.png',
  'om-talent-pool': '/icons/olamee/OM-talent-pool.png',
  'om-team': '/icons/olamee/OM-team.png',
  'om-team-members': '/icons/olamee/OM-team members.png',
  'om-timeoff': '/icons/olamee/OM-timeoff.png',
  'om-workflows': '/icons/olamee/OM-workflows.png',
} as const;

export type CustomIconName = keyof typeof CUSTOM_ICON_URLS;

/**
 * Get the SVG URL for a custom icon
 * @param name Icon name (e.g., 'om-dashboard')
 * @returns SVG URL or undefined if not found
 */
export function getCustomIconUrl(name: string): string | undefined {
  return CUSTOM_ICON_URLS[name as CustomIconName];
}

/**
 * Check if an icon is a custom Olamee icon
 */
export function isCustomIcon(name: string): name is CustomIconName {
  return name in CUSTOM_ICON_URLS;
}
