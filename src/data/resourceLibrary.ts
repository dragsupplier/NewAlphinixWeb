export type ResourceSegment = 'Students' | 'Colleges' | 'Schools' | 'Businesses' | 'Hiring';
export type ResourceType = 'PDF guide' | 'Template' | 'Framework' | 'Checklist' | 'Workbook';

export type ResourceItem = {
  slug: string;
  segment: ResourceSegment;
  type: ResourceType;
  title: string;
  dek: string;
  pageCount: number;
  downloadUrl: string;
  featured?: boolean;
};

/**
 * Lead-magnet inventory grouped by segment. Each item carries enough
 * metadata for a list row (kicker, type, page count) plus a download CTA.
 */
export const resourceLibrary: ResourceItem[] = [
  // Students
  {
    slug: 'fresher-placement-prep-roadmap',
    segment: 'Students',
    type: 'PDF guide',
    title: 'Fresher placement prep roadmap.',
    dek: 'A twelve-week schedule for engineering finalists — aptitude, technicals, mock interviews, and the documents to keep ready.',
    pageCount: 28,
    downloadUrl: '/contact?topic=resource-placement-roadmap',
    featured: true,
  },
  {
    slug: 'first-internship-application-pack',
    segment: 'Students',
    type: 'Template',
    title: 'First-internship application pack.',
    dek: 'Resume template, cover-note template, and a short interview prep checklist for second- and third-year students.',
    pageCount: 14,
    downloadUrl: '/contact?topic=resource-internship-pack',
  },

  // Colleges
  {
    slug: 'placement-calendar-template',
    segment: 'Colleges',
    type: 'Template',
    title: 'Placement calendar template.',
    dek: 'A one-page calendar template for TPOs — drive windows, preparation phases, and a reporting line into the principal’s office.',
    pageCount: 6,
    downloadUrl: '/contact?topic=resource-placement-calendar',
  },
  {
    slug: 'naac-evidence-checklist',
    segment: 'Colleges',
    type: 'Checklist',
    title: 'NAAC evidence pack checklist.',
    dek: 'A walk-through of the documentation we keep ready ahead of an accreditation cycle — what auditors ask first, what we keep loose, what we keep filed.',
    pageCount: 18,
    downloadUrl: '/contact?topic=resource-naac-checklist',
  },
  {
    slug: 'fdp-planning-framework',
    segment: 'Colleges',
    type: 'Framework',
    title: 'FDP planning framework.',
    dek: 'A four-quadrant framework for designing faculty development across departments without burning out the academic calendar.',
    pageCount: 22,
    downloadUrl: '/contact?topic=resource-fdp-framework',
  },

  // Schools
  {
    slug: 'atl-lab-procurement-spec',
    segment: 'Schools',
    type: 'PDF guide',
    title: 'ATL lab procurement spec.',
    dek: 'A working procurement spec for an Atal Tinkering Lab, mapped to NEP 2020 and the ATL guidelines. Items we never compromise on, items we leave off.',
    pageCount: 32,
    downloadUrl: '/contact?topic=resource-atl-spec',
  },
  {
    slug: 'k12-stem-quarterly-review',
    segment: 'Schools',
    type: 'Workbook',
    title: 'K-12 STEM quarterly review workbook.',
    dek: 'A working document for the academic head — weekly utilisation, term-end review, and a parent-communication note template.',
    pageCount: 16,
    downloadUrl: '/contact?topic=resource-stem-review',
  },

  // Businesses
  {
    slug: 'replatform-decision-framework',
    segment: 'Businesses',
    type: 'Framework',
    title: 'Replatform decision framework.',
    dek: 'Five questions we work through before recommending a replatform — and the answers that should make you wait another quarter.',
    pageCount: 20,
    downloadUrl: '/contact?topic=resource-replatform',
  },
  {
    slug: 'rag-evaluation-harness',
    segment: 'Businesses',
    type: 'PDF guide',
    title: 'RAG evaluation harness, version 1.',
    dek: 'The eval harness we run before shipping retrieval-augmented features. Test sets, golden answers, and the failure modes we look for first.',
    pageCount: 26,
    downloadUrl: '/contact?topic=resource-rag-harness',
  },

  // Hiring
  {
    slug: 'fresher-screening-rubric',
    segment: 'Hiring',
    type: 'Framework',
    title: 'Fresher screening rubric.',
    dek: 'The published rubric we screen fresher engineers against. Two short live exercises, a written report, and a confidence note per candidate.',
    pageCount: 12,
    downloadUrl: '/contact?topic=resource-screening-rubric',
  },
  {
    slug: 'jd-template-fresher-roles',
    segment: 'Hiring',
    type: 'Template',
    title: 'Job-description template for fresher roles.',
    dek: 'A JD template that holds up across panels — must-have vs. nice-to-have, signal questions, and the red lines we refuse to compromise on.',
    pageCount: 8,
    downloadUrl: '/contact?topic=resource-jd-template',
  },
  {
    slug: 'time-to-fill-tracker',
    segment: 'Hiring',
    type: 'Template',
    title: 'Time-to-fill reporting tracker.',
    dek: 'A spreadsheet template for honest TTF reporting. Every drive, every role, every screen — without the metric games.',
    pageCount: 4,
    downloadUrl: '/contact?topic=resource-ttf-tracker',
  },
];

export const resourceSegments: ResourceSegment[] = [
  'Students',
  'Colleges',
  'Schools',
  'Businesses',
  'Hiring',
];
