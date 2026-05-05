export type RoleTeam = 'Engineering' | 'Education' | 'Hiring' | 'Operations' | 'Design';
export type RoleLocation = 'Pune' | 'Remote' | 'Pune / Remote';
export type RoleType = 'Full-time' | 'Contract' | 'Internship';

export type OpenRole = {
  slug: string;
  title: string;
  team: RoleTeam;
  location: RoleLocation;
  type: RoleType;
  experience: string; // e.g. "3-5 years"
  summary: string;
  applyEmail: string; // mailto target
};

/**
 * Placeholder open roles. The careers page links each row to a mailto.
 */
export const openRoles: OpenRole[] = [
  {
    slug: 'senior-applied-engineer',
    title: 'Senior applied engineer (LLM applications)',
    team: 'Engineering',
    location: 'Pune / Remote',
    type: 'Full-time',
    experience: '4-7 years',
    summary:
      'Lead two-engineer teams shipping retrieval, eval, and agent workflows for clients. Writing-first collaboration, written design docs before code.',
    applyEmail: 'mailto:careers@alphinix.in?subject=Senior%20applied%20engineer',
  },
  {
    slug: 'placement-engagement-lead',
    title: 'Placement engagement lead',
    team: 'Education',
    location: 'Pune',
    type: 'Full-time',
    experience: '5-8 years',
    summary:
      'Own multi-year college engagements end-to-end. Single point of accountability across training, drives, and reporting into the principal’s office.',
    applyEmail: 'mailto:careers@alphinix.in?subject=Placement%20engagement%20lead',
  },
  {
    slug: 'technical-recruiter',
    title: 'Technical recruiter',
    team: 'Hiring',
    location: 'Pune / Remote',
    type: 'Full-time',
    experience: '2-4 years',
    summary:
      'Run end-to-end hiring for partner companies. Sourcing, screening, candidate reports, and a single time-to-fill SLA per role.',
    applyEmail: 'mailto:careers@alphinix.in?subject=Technical%20recruiter',
  },
  {
    slug: 'curriculum-designer',
    title: 'Curriculum designer (engineering programmes)',
    team: 'Education',
    location: 'Pune',
    type: 'Full-time',
    experience: '3-6 years',
    summary:
      'Design and maintain training cohorts for engineering students. Work with the placement desk on what employers actually screen for.',
    applyEmail: 'mailto:careers@alphinix.in?subject=Curriculum%20designer',
  },
  {
    slug: 'product-designer',
    title: 'Product designer',
    team: 'Design',
    location: 'Pune / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    summary:
      'Design across our marketing surface and the internal tools we ship to clients. Comfortable holding a writing-first studio standard.',
    applyEmail: 'mailto:careers@alphinix.in?subject=Product%20designer',
  },
  {
    slug: 'engagement-operations-associate',
    title: 'Engagement operations associate',
    team: 'Operations',
    location: 'Pune',
    type: 'Full-time',
    experience: '1-3 years',
    summary:
      'Coordinate the operational backbone of our engagements — calendars, reviews, documentation, evidence packs.',
    applyEmail: 'mailto:careers@alphinix.in?subject=Engagement%20operations%20associate',
  },
  {
    slug: 'applied-research-intern',
    title: 'Applied research intern',
    team: 'Engineering',
    location: 'Pune',
    type: 'Internship',
    experience: '0-1 years',
    summary:
      'Six-month structured internship for final-year engineering students. Pair with a senior engineer on a shipped client workstream.',
    applyEmail: 'mailto:careers@alphinix.in?subject=Applied%20research%20intern',
  },
];
