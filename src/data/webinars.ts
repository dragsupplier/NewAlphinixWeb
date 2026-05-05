export type WebinarStatus = 'upcoming' | 'past';

export type Webinar = {
  slug: string;
  title: string;
  dek: string;
  host: string;
  hostRole: string;
  /** ISO date for the session (DD MMM YYYY parsed for display) */
  date: string;
  /** Local time string, IST */
  timeIST: string;
  durationMinutes: number;
  status: WebinarStatus;
  topic: string;
  audience: string;
  registerUrl?: string;
  recordingUrl?: string;
};

/**
 * A mix of upcoming and past sessions. Dates are placeholders.
 */
export const webinars: Webinar[] = [
  // Upcoming
  {
    slug: 'screening-fresher-engineers',
    title: 'Screening fresher engineers without trick questions.',
    dek: 'A working session for hiring managers and TPOs. Live walk-through of the rubric, the two exercises, and the candidate report we share back.',
    host: 'Practice lead, Hiring',
    hostRole: 'Hiring desk',
    date: '2026-05-22',
    timeIST: '5:00 PM IST',
    durationMinutes: 60,
    status: 'upcoming',
    topic: 'Hiring',
    audience: 'Hiring managers · TPOs',
    registerUrl: '/contact?topic=webinar-fresher-screening',
  },
  {
    slug: 'building-a-placement-calendar',
    title: 'Building a placement calendar your faculty can defend.',
    dek: 'For TPOs and placement officers. How to publish a drive calendar early, manage company expectations, and report outcomes to the management.',
    host: 'Engagement lead, Colleges',
    hostRole: 'Colleges desk',
    date: '2026-06-04',
    timeIST: '4:30 PM IST',
    durationMinutes: 75,
    status: 'upcoming',
    topic: 'Education',
    audience: 'TPOs · Principals',
    registerUrl: '/contact?topic=webinar-placement-calendar',
  },
  {
    slug: 'evaluating-rag-applications',
    title: 'Evaluating RAG applications before they ship.',
    dek: 'A practical session for engineering teams shipping retrieval-augmented features. The eval harness we run, the failure modes we look for first.',
    host: 'Engineering lead',
    hostRole: 'Engineering desk',
    date: '2026-06-18',
    timeIST: '6:00 PM IST',
    durationMinutes: 60,
    status: 'upcoming',
    topic: 'Engineering',
    audience: 'Engineering teams',
    registerUrl: '/contact?topic=webinar-rag-evals',
  },
  {
    slug: 'atl-lab-quarterly-review',
    title: 'Running a quarterly review on your ATL lab.',
    dek: 'For school principals and academic heads. A simple cadence that keeps the lab alive past the inauguration photo.',
    host: 'Programme director, Schools',
    hostRole: 'Schools desk',
    date: '2026-07-09',
    timeIST: '4:00 PM IST',
    durationMinutes: 45,
    status: 'upcoming',
    topic: 'Education',
    audience: 'Principals · Academic heads',
    registerUrl: '/contact?topic=webinar-atl-review',
  },

  // Past
  {
    slug: 'industrial-training-design',
    title: 'Designing a six-week industrial training cohort.',
    dek: 'How we structure cohorts, what we cut after the first three batches, and the assignment students remember a year later.',
    host: 'Programme director, Students',
    hostRole: 'Students desk',
    date: '2026-03-20',
    timeIST: '5:00 PM IST',
    durationMinutes: 60,
    status: 'past',
    topic: 'Education',
    audience: 'Faculty · Programme leads',
    recordingUrl: '/contact?topic=recording-industrial-training',
  },
  {
    slug: 'time-to-fill-honest-numbers',
    title: 'Time-to-fill: reading the number honestly.',
    dek: 'Speed signals are easy to game. The reporting we hand back to hiring partners and the floor below which we refuse to drop the screen.',
    host: 'Practice lead, Hiring',
    hostRole: 'Hiring desk',
    date: '2026-02-26',
    timeIST: '5:30 PM IST',
    durationMinutes: 50,
    status: 'past',
    topic: 'Hiring',
    audience: 'Hiring managers',
    recordingUrl: '/contact?topic=recording-ttf',
  },
  {
    slug: 'lab-procurement-spec',
    title: 'Lab procurement specs that survive an audit.',
    dek: 'Field notes from setting up four engineering-college labs this year. What we never compromise on, and what we leave off the BOM.',
    host: 'Infrastructure lead',
    hostRole: 'Operations desk',
    date: '2026-01-22',
    timeIST: '4:30 PM IST',
    durationMinutes: 55,
    status: 'past',
    topic: 'Operations',
    audience: 'Principals · Procurement leads',
    recordingUrl: '/contact?topic=recording-procurement',
  },
];

export const webinarTopics = ['Hiring', 'Education', 'Engineering', 'Operations'] as const;
