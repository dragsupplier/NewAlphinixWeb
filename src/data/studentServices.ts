import {
  GraduationCap,
  Target,
  Briefcase,
  ShieldCheck,
  Compass,
  Code2,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type StudentService = {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  summary: string;
  body: string;
  icon: LucideIcon;
  duration: string;
  mode: string;
  format: string;
  audience: string[];
  prerequisites: string[];
  modules: { title: string; body: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
};

export const studentServices: StudentService[] = [
  {
    slug: 'industrial-training',
    name: 'Industrial training',
    kicker: 'Service 01',
    tagline: 'Live, project-led training that mirrors the workplace.',
    summary:
      'Live cohort training where students work on the same kinds of problems engineering teams ship every quarter — version control, code review, deployment, and stakeholder updates included.',
    body:
      'A six-week programme that takes engineering and diploma students from classroom theory into the rhythm of an actual product team. Students join a remote stand-up cadence, pull tickets from a shared backlog, and ship to a hosted environment under mentor review.',
    icon: GraduationCap,
    duration: 'Six weeks',
    mode: 'Hybrid · weekday evenings',
    format: 'Live cohorts capped at small group size',
    audience: [
      'Engineering students in 3rd or final year',
      'Diploma students in pre-final year',
      'BCA / MCA / BSc CS students',
    ],
    prerequisites: [
      'Working knowledge of one programming language',
      'A laptop with stable internet',
      'Two-three hours of daily commitment for the full duration',
    ],
    modules: [
      {
        title: 'Week 01 — Setup and orientation',
        body: 'Tooling, version control, code review etiquette, and a working development environment.',
      },
      {
        title: 'Week 02 — System design fundamentals',
        body: 'Reading existing systems, drawing data flow diagrams, and writing technical specs the way engineering teams do.',
      },
      {
        title: 'Week 03–04 — Build sprint',
        body: 'Two-week build cycle on a real-world brief, with daily check-ins, peer reviews, and mentor feedback loops.',
      },
      {
        title: 'Week 05 — Hardening and deployment',
        body: 'Testing, observability, security review, and deploying the build to a public environment.',
      },
      {
        title: 'Week 06 — Demo and review',
        body: 'Final demo to a panel, written project report, and one-on-one feedback for placement readiness.',
      },
    ],
    outcomes: [
      'A shipped, reviewable project on a public repository',
      'A written technical report and a demo recording',
      'A mentor-signed certificate of completion',
      'A placement-ready CV draft built around the work',
    ],
    faqs: [
      {
        q: 'Is this an internship or a training programme?',
        a: 'It is structured as training. The brief, cadence, and review process mirror an internship; the certificate calls it out as industrial training.',
      },
      {
        q: 'Are sessions recorded?',
        a: 'Live sessions are recorded and shared with the cohort within the same day so a missed session can be caught up on.',
      },
      {
        q: 'How is the project graded?',
        a: 'A rubric covering code quality, system thinking, deployment, and demo. Mentors review and sign off; the rubric is shared at the start of the programme.',
      },
    ],
  },
  {
    slug: 'placement-prep',
    name: 'Placement preparation',
    kicker: 'Service 02',
    tagline: 'Structured prep from aptitude to final round.',
    summary:
      'A focused programme that takes students through aptitude, technical interviews, and behavioural rounds with cohort mock interviews and written feedback at every stage.',
    body:
      'Students cover the four pillars hiring teams screen for — aptitude, data structures and algorithms, system fundamentals, and communication — then practice them in mock interview pairs with written feedback after each session.',
    icon: Target,
    duration: 'Eight weeks',
    mode: 'Hybrid · weekend live + weekday self-paced',
    format: 'Cohort with paired practice partners',
    audience: [
      'Pre-final and final year engineering students',
      'Students preparing for campus or off-campus drives',
      'Diploma students writing their first technical interview',
    ],
    prerequisites: [
      'Comfort with one programming language',
      'Willingness to sit through mock interviews',
    ],
    modules: [
      {
        title: 'Module 01 — Aptitude and reasoning',
        body: 'Quant, logical reasoning, and verbal aptitude with timed mock papers and written reviews.',
      },
      {
        title: 'Module 02 — Data structures and algorithms',
        body: 'Pattern-led practice through arrays, strings, trees, graphs, and dynamic programming.',
      },
      {
        title: 'Module 03 — System fundamentals',
        body: 'Operating systems, databases, networks, and the concepts hiring teams probe in the technical round.',
      },
      {
        title: 'Module 04 — Behavioural and HR rounds',
        body: 'Story building from real student experience, the STAR method, and answering compensation and notice-period questions cleanly.',
      },
      {
        title: 'Module 05 — Mock interview week',
        body: 'Five paired mock interviews with rotating partners and a final mentor-led panel interview with written feedback.',
      },
    ],
    outcomes: [
      'A measurable improvement on a baseline aptitude paper',
      'Five recorded mock interviews to review',
      'Written feedback at each round',
      'Interview-ready CV and cover letter templates',
    ],
    faqs: [
      {
        q: 'Do I need to have done the industrial training to join this?',
        a: 'No. The placement preparation programme is independent and accepts students directly.',
      },
      {
        q: 'Are mock interviews with industry interviewers?',
        a: 'The first set is paired peer practice for volume. The final-week panel is conducted by mentors with industry interview experience.',
      },
      {
        q: 'Is the programme campus-specific?',
        a: 'The fundamentals are the same. Where colleges have a specific campus drive coming up, additional company-specific rounds are added in the final week.',
      },
    ],
  },
  {
    slug: 'internships',
    name: 'Internship programs',
    kicker: 'Service 03',
    tagline: 'Real-work placements at partner organisations.',
    summary:
      'A placement-track programme that matches selected students into internship roles at partner businesses for project-based work, with documented outputs.',
    body:
      'Students who clear the entry bar are matched into internship roles at partner businesses across web, mobile, AI, automation, and data. Each role is project-scoped: a defined brief, a host mentor, and a written deliverable at the end.',
    icon: Briefcase,
    duration: 'Three to six months',
    mode: 'Remote, hybrid, or on-site depending on role',
    format: 'Selection round → role match → live engagement',
    audience: [
      'Pre-final and final year engineering students',
      'Students with at least one shipped personal or college project',
      'Students looking to bridge classroom learning with paid work',
    ],
    prerequisites: [
      'Working portfolio of at least one project',
      'A clean CV and short statement of interest',
      'Availability to commit a minimum of twelve weeks',
    ],
    modules: [
      {
        title: 'Step 01 — Selection round',
        body: 'A timed coding screen, short technical interview, and motivation conversation. Outcome: shortlisted, deferred, or routed to placement preparation.',
      },
      {
        title: 'Step 02 — Role matching',
        body: 'Shortlisted candidates are presented to partner businesses against open project briefs. Both sides interview before a match is confirmed.',
      },
      {
        title: 'Step 03 — Onboarding',
        body: 'A short orientation covering working norms, communication cadence, version control, and the deliverables expected at the close.',
      },
      {
        title: 'Step 04 — Live engagement',
        body: 'Twelve to twenty-four weeks of paid project work under a host mentor with a quarterly review checkpoint.',
      },
      {
        title: 'Step 05 — Closure and reference',
        body: 'A written deliverable at the end of the engagement, a manager review, and a reference letter where outcomes warrant it.',
      },
    ],
    outcomes: [
      'A real internship listed under work experience',
      'A documented project deliverable with a host mentor sign-off',
      'A reference letter where performance warrants',
      'Frequent conversion to a full-time offer at the host business',
    ],
    faqs: [
      {
        q: 'Are these paid internships?',
        a: 'Yes. Stipend ranges and structures are set by the host business and discussed before the match is confirmed.',
      },
      {
        q: 'Is conversion to a full-time role guaranteed?',
        a: 'No conversion is guaranteed. Where performance is strong and the host has open headcount, full-time offers are routinely extended.',
      },
      {
        q: 'Can I balance the internship with college?',
        a: 'Most roles are flexible to college schedules. The minimum commitment per week is set during onboarding.',
      },
    ],
  },
  {
    slug: 'certifications',
    name: 'Certifications',
    kicker: 'Service 04',
    tagline: 'Recognised credentials in the technologies hiring teams ask for.',
    summary:
      'A portfolio of credentialled programmes covering the technologies most often tested in interviews — from cloud foundations to applied AI.',
    body:
      'Each certification is delivered as a short, focused programme with a final written and practical assessment. Successful students receive a credential with a verifiable URL and a transcript covering the topics they were assessed on.',
    icon: ShieldCheck,
    duration: 'Two to six weeks per certification',
    mode: 'Self-paced online with live assessment day',
    format: 'Topic videos · written exam · practical project',
    audience: [
      'Students looking to add demonstrable skills to a CV',
      'Final-year students preparing for hiring season',
      'Professional learners refreshing a specific stack',
    ],
    prerequisites: [
      'Eligibility varies per certification — listed on each programme page',
    ],
    modules: [
      {
        title: 'Cloud foundations',
        body: 'Compute, storage, networking, and security fundamentals with hands-on labs.',
      },
      {
        title: 'Applied data structures',
        body: 'Implementation-focused practice across the data structures most tested in interviews.',
      },
      {
        title: 'Web fundamentals',
        body: 'HTML, CSS, JavaScript, accessibility, and a small shipped project.',
      },
      {
        title: 'Applied AI',
        body: 'Working with foundation models, retrieval, evaluation, and the trade-offs that matter at deployment.',
      },
      {
        title: 'Database design',
        body: 'Relational modelling, indexing, and the SQL questions screened for in interviews.',
      },
    ],
    outcomes: [
      'A verifiable digital credential with a public URL',
      'A transcript of the topics covered and assessment scores',
      'A small shipped project that can be linked from a CV',
    ],
    faqs: [
      {
        q: 'Are these certifications recognised by hiring teams?',
        a: 'The credentials carry a verifiable URL and a transcript. Hiring teams that work with the platform recognise them; for others, the linked project is what carries weight in interviews.',
      },
      {
        q: 'Can I retake an assessment?',
        a: 'Yes. Each certification allows one re-attempt at the assessment within thirty days of the first try.',
      },
    ],
  },
  {
    slug: 'career-guidance',
    name: 'Career guidance',
    kicker: 'Service 05',
    tagline: 'One-on-one conversations to plan the next move.',
    summary:
      'A one-on-one mentorship arrangement where students bring a goal — a role, a company, a switch — and walk out with a written plan for the next ninety days.',
    body:
      'Career guidance is delivered as a paired arrangement: each student is matched with a mentor whose own background fits the goal in the conversation. The first session sets the goal and the constraints. Subsequent sessions track progress against an agreed plan.',
    icon: Compass,
    duration: 'Three sessions over six weeks',
    mode: 'Online · one-on-one',
    format: 'Goal setting · plan · checkpoint reviews',
    audience: [
      'Final-year students unsure between roles or companies',
      'Diploma students considering a switch to engineering',
      'Recent graduates re-evaluating their first year of work',
    ],
    prerequisites: [
      'A short statement on what is being decided and why',
    ],
    modules: [
      {
        title: 'Session 01 — Discovery',
        body: 'Forty-five minutes to surface the actual question, the constraints around it, and what a good outcome looks like.',
      },
      {
        title: 'Session 02 — Plan',
        body: 'A written ninety-day plan covering what to learn, who to talk to, and how to measure progress.',
      },
      {
        title: 'Session 03 — Checkpoint',
        body: 'A six-week check-in to review progress against the plan and adjust the next steps.',
      },
    ],
    outcomes: [
      'A written ninety-day plan with named milestones',
      'A short list of role and company targets',
      'A revised CV pointed at the named targets',
    ],
    faqs: [
      {
        q: 'Can I keep the same mentor across sessions?',
        a: 'Yes. The same mentor stays through all three sessions unless either side requests a change.',
      },
      {
        q: 'What if I want more than three sessions?',
        a: 'Additional sessions are arranged on a per-need basis after the initial three.',
      },
    ],
  },
  {
    slug: 'coding-programs',
    name: 'Coding programs',
    kicker: 'Service 06',
    tagline: 'Project-led tracks across the stacks hiring teams screen for.',
    summary:
      'Multi-week programmes across web, mobile, full-stack, AI, and data — each ending with a shipped project that becomes the centrepiece of the CV.',
    body:
      'Coding programmes are delivered as cohort tracks with a single final-project brief that runs through the curriculum. Modules are scaffolds; the project is the deliverable. The cadence is weekly live sessions, daily problem sets, and a weekly check-in with a mentor.',
    icon: Code2,
    duration: 'Eight to twelve weeks per track',
    mode: 'Hybrid · weekly live + daily self-paced',
    format: 'Live cohort · weekly mentor checkpoints',
    audience: [
      'Engineering students from 2nd year onwards',
      'Working professionals upskilling on a new stack',
      'Diploma students looking to specialise',
    ],
    prerequisites: [
      'Working knowledge of one programming language',
      'A laptop with a development environment',
    ],
    modules: [
      {
        title: 'Track — Web development',
        body: 'HTML, CSS, JavaScript, a frontend framework, and a backend with a database. Final project: a shipped multi-page application.',
      },
      {
        title: 'Track — Mobile development',
        body: 'A cross-platform stack from layout to release, including signing, distribution, and crash reporting.',
      },
      {
        title: 'Track — Full-stack',
        body: 'Both web and mobile in one combined track for students who want to build end-to-end products.',
      },
      {
        title: 'Track — Applied AI',
        body: 'Working with foundation models, retrieval, evaluation, and shipping a small AI-backed application.',
      },
      {
        title: 'Track — Data engineering',
        body: 'SQL, modelling, transformation pipelines, and a small data application that ships to a public dashboard.',
      },
    ],
    outcomes: [
      'A shipped final project on a public repository',
      'A weekly review log signed off by a mentor',
      'A track-completion certificate with a verifiable URL',
    ],
    faqs: [
      {
        q: 'Can I switch tracks midway?',
        a: 'Switching is supported within the first two weeks of a track. After that, the curriculum and project diverge enough that a switch is treated as a fresh enrolment.',
      },
      {
        q: 'Is the work pair-programmed?',
        a: 'Most modules are individual. Two of the modules in each track are run as paired exercises so students get review practice both ways.',
      },
    ],
  },
  {
    slug: 'skill-development',
    name: 'Skill development',
    kicker: 'Service 07',
    tagline: 'Short workshops that close specific gaps.',
    summary:
      'Two- to three-day intensives focused on a single skill — communication, technical writing, presentation, or interview readiness — for students preparing for a specific outcome.',
    body:
      'Skill development is delivered as compact two- to three-day intensives. Each session opens with a short framework and spends most of its time on practice. Students walk away with a written artefact — a polished CV, a recorded presentation, a written technical report — that can be reused.',
    icon: Sparkles,
    duration: 'Two to three days per workshop',
    mode: 'Online live sessions',
    format: 'Short framework · long practice · written artefact',
    audience: [
      'Students preparing for an upcoming interview, drive, or presentation',
      'Engineering students working on final-year projects and reports',
      'Diploma students who want to strengthen a specific soft skill',
    ],
    prerequisites: [
      'A clear sense of which skill is being closed',
    ],
    modules: [
      {
        title: 'Workshop — Technical writing',
        body: 'Writing a clean technical report, a one-page project summary, and a CV that survives an applicant-tracking system.',
      },
      {
        title: 'Workshop — Communication',
        body: 'Speaking clearly under interview pressure, structuring an answer, and finishing within the time given.',
      },
      {
        title: 'Workshop — Presentation',
        body: 'Building, delivering, and recording a short technical presentation with feedback on slides and delivery.',
      },
      {
        title: 'Workshop — Interview readiness',
        body: 'Behavioural rounds, salary conversations, notice-period and offer-handling, all practiced live.',
      },
    ],
    outcomes: [
      'A polished written artefact tied to the workshop',
      'Recorded practice that can be reviewed later',
      'Written feedback from the facilitator',
    ],
    faqs: [
      {
        q: 'Can I attend more than one workshop?',
        a: 'Yes. The workshops are independent and can be combined in any order.',
      },
      {
        q: 'Is there a workshop on a specific skill not listed?',
        a: 'Custom workshops are run on request when a college or company commissions one. Open enrolment is for the four standard topics above.',
      },
    ],
  },
];

export function findStudentService(slug: string) {
  return studentServices.find((s) => s.slug === slug);
}
