export type BlogCategory = 'Engineering' | 'Education' | 'Hiring' | 'Operations';

export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  readMinutes: number;
  publishedOn: string; // ISO date
  tags: string[];
  featured?: boolean;
};

/**
 * Placeholder editorial set — six posts spread across our four desks.
 * Titles are deliberately specific (no generic "AI in 2024" headlines).
 * One post is flagged `featured` for the hero takeover.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'how-we-screen-fresher-engineers',
    title: 'How we screen fresher engineers without trick questions.',
    dek: 'A written rubric, two short live exercises, and a confidence note. The interview report we hand back to hiring teams, line by line.',
    category: 'Hiring',
    author: 'Practice lead, Hiring',
    authorRole: 'Hiring desk',
    readMinutes: 9,
    publishedOn: '2026-04-22',
    tags: ['interviews', 'fresher hiring', 'rubric'],
    featured: true,
  },
  {
    slug: 'placement-cells-that-actually-place',
    title: 'Placement cells that actually place.',
    dek: 'What the strongest TPO offices in Pune do differently — measured against the ones that send the same student database to twenty companies and call it outreach.',
    category: 'Education',
    author: 'Engagement lead, Colleges',
    authorRole: 'Colleges desk',
    readMinutes: 12,
    publishedOn: '2026-04-08',
    tags: ['placements', 'TPO', 'colleges'],
  },
  {
    slug: 'rag-pipelines-cost-of-being-wrong',
    title: 'RAG pipelines and the cost of being confidently wrong.',
    dek: 'A small audit of three production retrieval setups we shipped this year. Where they hold up, where they hallucinate, and the eval harness we keep coming back to.',
    category: 'Engineering',
    author: 'Engineering lead',
    authorRole: 'Engineering desk',
    readMinutes: 14,
    publishedOn: '2026-03-26',
    tags: ['RAG', 'evals', 'LLM apps'],
  },
  {
    slug: 'one-named-owner-engagement',
    title: 'One named owner. The single operational rule that holds the practice together.',
    dek: 'Why every Alphinix engagement, from a six-week training cohort to a multi-year college contract, has exactly one accountable name on it — and how we staff for that.',
    category: 'Operations',
    author: 'Operations lead',
    authorRole: 'Operations desk',
    readMinutes: 7,
    publishedOn: '2026-03-12',
    tags: ['accountability', 'engagement model', 'staffing'],
  },
  {
    slug: 'industrial-training-six-week-curriculum',
    title: 'A six-week industrial training curriculum that survives contact with real students.',
    dek: 'The version we run today, what we cut after the first three batches, and the one assignment students remember a year later.',
    category: 'Education',
    author: 'Programme director, Students',
    authorRole: 'Students desk',
    readMinutes: 11,
    publishedOn: '2026-02-28',
    tags: ['industrial training', 'curriculum', 'students'],
  },
  {
    slug: 'time-to-fill-without-cutting-corners',
    title: 'Reading time-to-fill without cutting corners.',
    dek: 'Speed signals are easy to game. Here is how we report TTF to hiring partners, and the floor below which we refuse to drop the screen.',
    category: 'Hiring',
    author: 'Practice lead, Hiring',
    authorRole: 'Hiring desk',
    readMinutes: 8,
    publishedOn: '2026-02-14',
    tags: ['time-to-fill', 'metrics', 'hiring'],
  },
  {
    slug: 'lab-procurement-buying-the-right-thing',
    title: 'Lab procurement: buying the right thing, not the longest list.',
    dek: 'A field note from setting up AI / IoT labs at four engineering colleges this year — the items we never compromise on, and the ones we leave off the spec.',
    category: 'Operations',
    author: 'Infrastructure lead',
    authorRole: 'Operations desk',
    readMinutes: 10,
    publishedOn: '2026-01-30',
    tags: ['labs', 'procurement', 'colleges'],
  },
];

export const blogCategories: BlogCategory[] = ['Engineering', 'Education', 'Hiring', 'Operations'];
