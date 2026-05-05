export type CaseStudySegment = 'Colleges' | 'Schools' | 'Businesses' | 'Hiring';

export type CaseStudy = {
  slug: string;
  segment: CaseStudySegment;
  client: string; // Generic placeholder org descriptor — never a real name
  kicker: string; // short label, e.g. "Engagement 01"
  title: string;
  problem: string;
  outcome: string;
  outcomeMetric: string; // big numeric placeholder e.g. "XX %"
  outcomeMetricLabel: string;
  timeline: string;
  scope: string[];
  featured?: boolean;
};

/**
 * Placeholder case study set. Client names are intentionally descriptors,
 * never fabricated brands.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'engineering-college-placement-uplift',
    segment: 'Colleges',
    client: 'Engineering college, Pune',
    kicker: 'Engagement 01',
    title: 'Rebuilding a placement cell around a written rubric.',
    problem:
      'Year-on-year placement numbers had stalled. The TPO office was running the same outreach loop, and student preparation drifted depending on which faculty led each batch.',
    outcome:
      'A rewritten preparation curriculum, a documented company-engagement playbook, and a single reporting line into the principal’s office. Drives now run against a published calendar.',
    outcomeMetric: 'XX %',
    outcomeMetricLabel: 'placement uplift, year-on-year',
    timeline: '14 months · two academic cycles',
    scope: ['Pre-placement training', 'Drive operations', 'Placement reporting'],
    featured: true,
  },
  {
    slug: 'polytechnic-faculty-development',
    segment: 'Colleges',
    client: 'Polytechnic institute, Maharashtra',
    kicker: 'Engagement 02',
    title: 'Faculty development across four departments, one term.',
    problem:
      'Curriculum updates from the technical board had landed without a faculty upskilling track. Departments were translating new syllabi into old slide decks.',
    outcome:
      'Subject-specific FDP cohorts, a documentation pack per department, and a teaching observation cycle that the principal owns directly.',
    outcomeMetric: 'XX',
    outcomeMetricLabel: 'faculty members through structured FDP',
    timeline: '6 months · single semester',
    scope: ['FDP cohorts', 'Documentation pack', 'Observation cycle'],
  },
  {
    slug: 'k12-stem-lab-rollout',
    segment: 'Schools',
    client: 'K-12 school, suburban Pune',
    kicker: 'Engagement 03',
    title: 'A STEM lab the teachers actually use.',
    problem:
      'A previous vendor had delivered hardware kits without teacher training. Equipment sat unused for two terms and became a parent-meeting talking point.',
    outcome:
      'A rebuilt curriculum mapped to NEP 2020, in-person teacher training, and a quarterly check-in with the academic head. Lab utilisation tracked weekly.',
    outcomeMetric: 'XX %',
    outcomeMetricLabel: 'weekly lab-utilisation rate',
    timeline: '8 months',
    scope: ['Curriculum design', 'Teacher training', 'Equipment refresh'],
  },
  {
    slug: 'mid-market-ecommerce-platform',
    segment: 'Businesses',
    client: 'Mid-market e-commerce brand',
    kicker: 'Engagement 04',
    title: 'Replatforming a storefront without breaking peak season.',
    problem:
      'The existing storefront had grown unmaintainable. Every release risked checkout. The team needed a path off the legacy stack without losing the festive window.',
    outcome:
      'A staged migration plan, a parallel build on a modern stack, and a cut-over scheduled around the calendar. No revenue lost during transition.',
    outcomeMetric: 'XX %',
    outcomeMetricLabel: 'reduction in p95 checkout latency',
    timeline: '5 months · pre-festive cut-over',
    scope: ['Architecture review', 'Replatform', 'Cut-over plan'],
  },
  {
    slug: 'bulk-hiring-drive-it-services',
    segment: 'Hiring',
    client: 'IT services firm, India',
    kicker: 'Engagement 05',
    title: 'A bulk drive that respected the candidate experience.',
    problem:
      'A short-notice headcount target. Internal recruiting had the volume but not the screening bandwidth, and was hesitant to lean on an external partner.',
    outcome:
      'A pre-screened pool drawn from our cohort bench, a written candidate report per shortlist, and a daily standup with the in-house TA team.',
    outcomeMetric: 'XX d',
    outcomeMetricLabel: 'average time-to-shortlist across the drive',
    timeline: '11 weeks',
    scope: ['Sourcing', 'Technical screen', 'Reporting cadence'],
  },
];

export const caseStudySegments: CaseStudySegment[] = ['Colleges', 'Schools', 'Businesses', 'Hiring'];
