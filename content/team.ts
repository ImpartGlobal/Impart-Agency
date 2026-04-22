export type TeamMember = {
  id: string;
  name: string;
  role: string;
  /** One sentence — what this person brings to an AI engagement */
  positioning: string;
  /** Path relative to /public e.g. "/media/team/liam-pitcher.jpg" */
  photo: string;
  linkedIn?: string;
  /** 2–3 AI projects or specialisms to surface on the profile card */
  highlights: string[];
};

/**
 * Set to true when team profiles + photos are ready to go public.
 * When false, /team shows a "coming soon" page and the homepage Team
 * section is not rendered — even if team[] has entries.
 * (Decision 4 in CLAUDE.md: do not ship /team publicly until real
 * photography and bios exist.)
 */
export const teamEnabled = false;

/**
 * Team members are intentionally empty until Liam supplies profiles + photos.
 * Do NOT add placeholder or fictional team members.
 */
export const team: TeamMember[] = [];
