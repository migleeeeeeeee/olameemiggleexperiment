/**
 * Applicant Avatar Images
 *
 * Maps applicant names to their profile avatar image paths.
 * Images are stored locally in /public/avatars/
 */

export const applicantAvatars = {
  'Leo Andrade': '/avatars/leo-andrade.png',
  'Felbie Marie Manigos': '/avatars/felbie-marie-manigos.png',
  'Justin Saris': '/avatars/justin-saris.png',
  'Mira George': '/avatars/mira-george.png',
  'Maren Stanton': '/avatars/maren-stanton.png',
  'Desirae George': '/avatars/desirae-george.png',
  'Abram Philips': '/avatars/abram-philips.png',
  'Ahmad Schleifer': '/avatars/ahmad-schleifer.png',
  'Phillip Mango': '/avatars/phillip-mango.png',
  'Leo Septimus': '/avatars/leo-septimus.png',
  'Nolan Botosh': '/avatars/nolan-botosh.png',
  'Kadin Rhiel Madsen': '/avatars/kadin-rhiel-madsen.png',
  'Kadin Kenter': '/avatars/kadin-kenter.png',
  'Giana Press': '/avatars/giana-press.png',
  'Lydia Calzoni': '/avatars/lydia-calzoni.png',
} as const;

export type ApplicantName = keyof typeof applicantAvatars;

/**
 * Get avatar path for an applicant
 * @param name - Applicant name
 * @returns Path to avatar image
 */
export function getApplicantAvatar(name: string): string {
  return applicantAvatars[name as ApplicantName] || '/avatars/leo-andrade.png';
}
