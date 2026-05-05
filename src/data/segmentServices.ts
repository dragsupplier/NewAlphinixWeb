import {
  Building2,
  GraduationCap,
  ShieldCheck,
  Users,
  FlaskConical,
  Server,
  Layers,
  School,
  Bot,
  Cpu,
  Code2,
  Wrench,
  Globe,
  Smartphone,
  Cloud,
  Sparkles,
  Megaphone,
  Briefcase,
  UserCheck,
  ClipboardList,
  Network,
  Send,
  type LucideIcon,
} from 'lucide-react';

export type SegmentService = {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;
};

/* ───── Colleges ─────────────────────────────────────────── */

export const collegeServices: SegmentService[] = [
  {
    slug: 'campus-training',
    name: 'Campus training programmes',
    kicker: 'Service 01',
    tagline: 'Industry-aligned training delivered on your campus.',
    summary: 'Multi-week skilling cohorts run on-campus or hybrid, mapped to your placement cycles and curriculum priorities.',
    icon: GraduationCap,
  },
  {
    slug: 'placement-drives',
    name: 'Placement drives',
    kicker: 'Service 02',
    tagline: 'Pooled and on-campus drives at scale.',
    summary: 'Run on-campus drives or join pooled drives across institutions, with our hiring partner network screening candidates ahead of time.',
    icon: Briefcase,
  },
  {
    slug: 'pre-placement-training',
    name: 'Pre-placement training',
    kicker: 'Service 03',
    tagline: 'Aptitude, technical, and behavioural readiness.',
    summary: 'Eight-week intensive that prepares the eligible student pool through aptitude, DSA, system fundamentals, and behavioural rounds.',
    icon: ClipboardList,
  },
  {
    slug: 'faculty-development',
    name: 'Faculty development (FDP)',
    kicker: 'Service 04',
    tagline: 'Updated curricula, new tooling, modern pedagogy.',
    summary: 'Short workshops and longer FDPs covering applied AI, cloud, modern web, and assessment design — delivered to faculty cohorts.',
    icon: Users,
  },
  {
    slug: 'naac-nba-support',
    name: 'NAAC + NBA support',
    kicker: 'Service 05',
    tagline: 'Documentation, evidence, and accreditation cycles.',
    summary: 'Documentation, processes, and evidence support across NAAC and NBA accreditation cycles — designed against the published frameworks.',
    icon: ShieldCheck,
  },
  {
    slug: 'lms-erp-systems',
    name: 'LMS & ERP systems',
    kicker: 'Service 06',
    tagline: 'Academic and placement operations, software-led.',
    summary: 'Configurable learning-management and enterprise-resource systems to run the academic calendar and the placement cycle in one place.',
    icon: Server,
  },
  {
    slug: 'ai-iot-cloud-labs',
    name: 'AI, IoT & Cloud labs',
    kicker: 'Service 07',
    tagline: 'Specialised labs, set up against current curricula.',
    summary: 'AI, IoT, and Cloud lab infrastructure — physical setup, hardware kits, software tooling, and curriculum integration.',
    icon: Layers,
  },
  {
    slug: 'curriculum-consulting',
    name: 'Curriculum consulting',
    kicker: 'Service 08',
    tagline: 'Curricula referenced against AICTE and industry need.',
    summary: 'Curriculum consulting, model paper sets, and faculty workshops referenced against AICTE model curricula and current industry requirements.',
    icon: FlaskConical,
  },
];

/* ───── Schools ──────────────────────────────────────────── */

export const schoolServices: SegmentService[] = [
  {
    slug: 'ai-robotics-education',
    name: 'AI & Robotics education',
    kicker: 'Programme 01',
    tagline: 'Hands-on AI and robotics, aligned to NEP 2020.',
    summary: 'Multi-grade AI and robotics programme delivered with classroom-friendly hardware kits, lesson plans, and teacher support.',
    icon: Bot,
  },
  {
    slug: 'iot-lab-setup',
    name: 'IoT lab setup',
    kicker: 'Programme 02',
    tagline: 'Sensors, microcontrollers, and project-led learning.',
    summary: 'Full IoT lab setup with sensor and microcontroller kits, project-led curriculum, and teacher onboarding.',
    icon: Cpu,
  },
  {
    slug: 'coding-education',
    name: 'Coding education',
    kicker: 'Programme 03',
    tagline: 'Block-based to text-based progression.',
    summary: 'Age-appropriate coding curriculum that progresses from block-based programming to Python and JavaScript across grades.',
    icon: Code2,
  },
  {
    slug: 'stem-atl-labs',
    name: 'STEM & ATL labs',
    kicker: 'Programme 04',
    tagline: 'Atal Tinkering Labs aligned to official guidelines.',
    summary: 'STEM and Atal Tinkering Lab setups designed against the published ATL guidelines, with kits and a usage cadence.',
    icon: FlaskConical,
  },
  {
    slug: 'hardware-kits',
    name: 'Hardware kits',
    kicker: 'Programme 05',
    tagline: 'Arduino, Raspberry Pi, drones, sensor kits.',
    summary: 'Curated hardware kits — Arduino, Raspberry Pi, drone, sensor, and robotics kits — paired with classroom-tested project briefs.',
    icon: Wrench,
  },
  {
    slug: 'teacher-training',
    name: 'Teacher training',
    kicker: 'Programme 06',
    tagline: 'Teachers run the lab confidently from week one.',
    summary: 'Cohort-based teacher training that hands the lab to teaching staff confidently — including project ownership and assessment design.',
    icon: School,
  },
];

/* ───── Businesses ───────────────────────────────────────── */

export const businessServices: SegmentService[] = [
  {
    slug: 'website-development',
    name: 'Website development',
    kicker: 'Capability 01',
    tagline: 'Marketing sites and product surfaces shipped to brief.',
    summary: 'Marketing websites, product surfaces, and applications built on a modern stack — designed for performance, SEO, and a long maintenance window.',
    icon: Globe,
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile app development',
    kicker: 'Capability 02',
    tagline: 'Cross-platform apps shipped to stores.',
    summary: 'iOS, Android, and cross-platform apps — from technical specification through to store release and observability.',
    icon: Smartphone,
  },
  {
    slug: 'ai-solutions',
    name: 'AI solutions',
    kicker: 'Capability 03',
    tagline: 'Applied AI deployed inside your business.',
    summary: 'Foundation-model integration, RAG, evaluation pipelines, and AI-backed product features — with a clear evaluation rubric.',
    icon: Sparkles,
  },
  {
    slug: 'automation-systems',
    name: 'Automation systems',
    kicker: 'Capability 04',
    tagline: 'Internal tools and workflow automation.',
    summary: 'Internal-tool builds and process-automation systems that cut manual work and shorten time to operational decisions.',
    icon: Network,
  },
  {
    slug: 'cloud-infrastructure',
    name: 'Cloud infrastructure',
    kicker: 'Capability 05',
    tagline: 'AWS, GCP, and Azure foundations and migrations.',
    summary: 'Cloud foundation work — VPC, IAM, observability, CI/CD — and migrations from legacy hosting onto first-class cloud platforms.',
    icon: Cloud,
  },
  {
    slug: 'digital-marketing',
    name: 'Digital marketing',
    kicker: 'Capability 06',
    tagline: 'SEO, content, and performance, measured.',
    summary: 'Search-optimised content, performance campaigns, and marketing infrastructure — reported against an agreed funnel.',
    icon: Megaphone,
  },
  {
    slug: 'technology-consulting',
    name: 'Technology consulting',
    kicker: 'Capability 07',
    tagline: 'Stack reviews, architecture, hire-build-buy decisions.',
    summary: 'Time-boxed engagements covering stack reviews, architecture decisions, and the hire-build-buy framing for new product bets.',
    icon: Building2,
  },
];

/* ───── Hiring ───────────────────────────────────────────── */

export const hiringServices: SegmentService[] = [
  {
    slug: 'permanent-recruitment',
    name: 'Permanent recruitment',
    kicker: 'Service 01',
    tagline: 'Full-time hires, screened and routed.',
    summary: 'Sourcing, screening, and shortlisting for full-time engineering, product, design, and operations roles.',
    icon: UserCheck,
  },
  {
    slug: 'contract-staffing',
    name: 'Contract staffing',
    kicker: 'Service 02',
    tagline: 'Project-scoped, time-boxed engagements.',
    summary: 'Contract resources for time-boxed engagements — project-scoped, with a clean exit and reference letter at the end.',
    icon: Briefcase,
  },
  {
    slug: 'intern-supply',
    name: 'Pre-trained intern supply',
    kicker: 'Service 03',
    tagline: 'Bench of screened, ready-to-start interns.',
    summary: 'Bench of pre-trained interns drawn from our cohort programmes — ready-to-start with a documented training history.',
    icon: GraduationCap,
  },
  {
    slug: 'technical-assessments',
    name: 'Technical assessments',
    kicker: 'Service 04',
    tagline: 'Custom assessments with written reports.',
    summary: 'Custom-built coding screens, take-home projects, and assessment rubrics — issued with a written candidate report per round.',
    icon: ClipboardList,
  },
  {
    slug: 'recruitment-outsourcing',
    name: 'Recruitment outsourcing (RPO)',
    kicker: 'Service 05',
    tagline: 'Embedded talent function on a retainer.',
    summary: 'End-to-end RPO — embedded recruiter capacity, scheduling, candidate communication, and pipeline reporting on retainer.',
    icon: Network,
  },
  {
    slug: 'bulk-hiring-drives',
    name: 'Bulk hiring drives',
    kicker: 'Service 06',
    tagline: 'High-volume drives at fixed time-to-fill.',
    summary: 'High-volume hiring drives executed against a fixed time-to-fill — with sourcing, screening, and offer-roll-out coordinated end to end.',
    icon: Send,
  },
];

/* ───── helpers ──────────────────────────────────────────── */

export const segmentMeta = {
  colleges: {
    title: 'Colleges',
    services: collegeServices,
    accent: 'Formal · accreditation-led',
  },
  schools: {
    title: 'Schools',
    services: schoolServices,
    accent: 'NEP 2020 · ATL · NEP-aligned',
  },
  businesses: {
    title: 'Businesses',
    services: businessServices,
    accent: 'Corporate · outcomes-led',
  },
  hiring: {
    title: 'Hiring teams',
    services: hiringServices,
    accent: 'Operational · time-to-fill',
  },
} as const;
