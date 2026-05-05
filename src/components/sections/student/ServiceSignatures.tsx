import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import {
  Clock,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Users,
  PenTool,
  Send,
  RefreshCw,
} from 'lucide-react';

/* Signature section router — one component per service slug */
export function ServiceSignature({ slug }: { slug: string }) {
  switch (slug) {
    case 'industrial-training': return <SampleBriefs />;
    case 'placement-prep':      return <InterviewAnatomy />;
    case 'internships':         return <MatchingFlow />;
    case 'certifications':      return <CredentialPortfolio />;
    case 'career-guidance':     return <MentorFramework />;
    case 'coding-programs':     return <TrackComparison />;
    case 'skill-development':   return <WorkshopSchedule />;
    default:                    return null;
  }
}

/* ───── 1. Sample briefs (Industrial training) ─────────── */

const briefs = [
  { domain: 'Logistics',     stack: 'React · Node · Postgres', body: 'Track shipments end-to-end with role-based dashboards for ops, drivers, and customers.' },
  { domain: 'Education',     stack: 'Next.js · Prisma',         body: 'Cohort-management tool that handles attendance, assessments, and parent-teacher communication.' },
  { domain: 'Retail',        stack: 'React Native · Firebase',  body: 'Inventory companion for small-store owners with offline-first sync and price alerts.' },
  { domain: 'Healthcare',    stack: 'Vue · Django · S3',         body: 'Appointment system with secure document upload, reminders, and follow-up scheduling.' },
];

function SampleBriefs() {
  return (
    <section className="bg-[var(--color-brand-50)] border-y border-[var(--color-brand-100)] section-y">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-10 md:mb-12">
          <div>
            <p className="kicker">Sample briefs</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[38px] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
              The kind of problem each cohort builds against.
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-[1.65] text-[var(--color-fg-3)]">
            Briefs change every cohort. These are representative of the scope, technical depth, and stakeholder
            cadence students work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {briefs.map((b, i) => (
            <Reveal key={b.domain} delay={i * 60}>
              <article className="group/b relative bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-6 md:p-7 transition-all hover:border-[var(--color-brand-700)]/35 hover:-translate-y-0.5">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                    Brief {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                    {b.domain}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[18px] md:text-[19px] font-semibold leading-[1.3] tracking-[-0.018em] text-[var(--color-fg)]">
                  {b.body}
                </h3>
                <div className="mt-6 inline-flex flex-wrap items-center gap-2">
                  {b.stack.split(' · ').map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10.5px] text-[var(--color-fg-3)] bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-[4px] px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───── 2. Interview anatomy (Placement prep) ──────────── */

const rounds = [
  { name: 'Aptitude',     duration: '60 min',  format: 'Online · proctored', tests: 'Quant · logical · verbal'        },
  { name: 'Technical screen', duration: '45 min', format: 'Live coding round', tests: 'Two coding problems · pattern-led' },
  { name: 'DSA deep-dive',duration: '60 min',  format: 'On-call interview',  tests: 'Trees · graphs · DP · system'    },
  { name: 'System round', duration: '45 min',  format: 'Whiteboard / live',  tests: 'Database · API · scaling trade-offs' },
  { name: 'Behavioural',  duration: '30 min',  format: 'On-site / video',    tests: 'STAR stories · culture · ask salary' },
];

function InterviewAnatomy() {
  return (
    <section className="bg-[var(--color-fg)] text-white section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker kicker-on-dark">Interview anatomy</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-white text-balance">
              Five rounds. We rehearse each one until the format stops being the obstacle.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-white/65">
              The format varies by company; the structure does not. Students see the same five-round shape across
              campus drives, lateral interviews, and product-company hiring loops.
            </p>
          </div>
        </div>

        <ol className="border-y border-white/10">
          {rounds.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 60} className="border-t border-white/10 first:border-t-0">
              <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-2 py-6 md:py-7">
                <span className="col-span-12 sm:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)] tabular-nums">
                  R{String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-12 sm:col-span-3 font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.018em] text-white">
                  {r.name}
                </h3>
                <span className="col-span-6 sm:col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" strokeWidth={2} />
                  {r.duration}
                </span>
                <span className="col-span-6 sm:col-span-3 text-[12.5px] text-white/65">{r.format}</span>
                <span className="col-span-12 sm:col-span-3 text-[12.5px] text-white/85 font-medium">{r.tests}</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ───── 3. Matching flow (Internships) ─────────────────── */

const matchingSteps = [
  { num: '01', label: 'Apply',    body: 'Three-minute application form, plus a CV and short statement.', icon: PenTool },
  { num: '02', label: 'Screen',   body: 'Timed coding screen and a thirty-minute fit conversation.',     icon: ShieldCheck },
  { num: '03', label: 'Match',    body: 'Shortlisted candidates presented to partner businesses.',       icon: Send },
  { num: '04', label: 'Confirm',  body: 'Mutual interviews, scope agreed, start date confirmed.',         icon: CheckCircle2 },
];

function MatchingFlow() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="kicker">How matching works</p>
          <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
            From application to start date in roughly six weeks.
          </h2>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="hidden md:block absolute top-[34px] left-[12.5%] right-[12.5%] h-px bg-[var(--color-brand-700)]"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-x-6">
            {matchingSteps.map((s, i) => (
              <Reveal key={s.num} delay={i * 80} className="relative text-center">
                <span className="relative z-10 mx-auto grid h-[68px] w-[68px] place-items-center rounded-full bg-[var(--color-bg)] border-[1.5px] border-[var(--color-brand-700)] text-[var(--color-brand-700)]">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                  Step {s.num}
                </p>
                <h3 className="mt-2 font-display text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  {s.label}
                </h3>
                <p className="mt-3 max-w-[28ch] mx-auto text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── 4. Credential portfolio (Certifications) ──────── */

const credentials = [
  { name: 'Cloud foundations',     duration: '4 weeks', assessment: 'Lab + written',  level: 'Beginner' },
  { name: 'Applied data structures', duration: '6 weeks', assessment: 'Coding round',  level: 'Intermediate' },
  { name: 'Web fundamentals',      duration: '4 weeks', assessment: 'Project',         level: 'Beginner' },
  { name: 'Applied AI',            duration: '6 weeks', assessment: 'Project + viva',  level: 'Intermediate' },
  { name: 'Database design',       duration: '3 weeks', assessment: 'SQL exam',        level: 'Intermediate' },
  { name: 'System design',         duration: '5 weeks', assessment: 'Whiteboard',      level: 'Advanced' },
];

function CredentialPortfolio() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Credential portfolio</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Six standalone credentials. Stack the ones that fit your trajectory.
            </h2>
          </div>
        </div>

        <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] overflow-hidden">
          {/* Table head */}
          <div className="hidden md:grid grid-cols-12 gap-x-4 px-6 py-3.5 border-b border-[var(--color-line)] bg-[var(--color-canvas)] font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
            <span className="col-span-1">No.</span>
            <span className="col-span-5">Credential</span>
            <span className="col-span-2">Duration</span>
            <span className="col-span-2">Level</span>
            <span className="col-span-2">Assessment</span>
          </div>
          {/* Rows */}
          <ul>
            {credentials.map((c, i) => (
              <Reveal as="li" key={c.name} delay={i * 40} className="border-b border-[var(--color-line)] last:border-b-0 row-hover">
                <div className="grid grid-cols-12 gap-x-4 gap-y-2 px-6 py-5 items-baseline">
                  <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="col-span-10 md:col-span-5 font-display text-[15.5px] md:text-[16px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                    {c.name}
                  </span>
                  <span className="col-span-6 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-fg-3)]">
                    {c.duration}
                  </span>
                  <span className="col-span-6 md:col-span-2 inline-flex">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] rounded-[3px] px-1.5 py-0.5">
                      {c.level}
                    </span>
                  </span>
                  <span className="col-span-12 md:col-span-2 text-[12.5px] text-[var(--color-fg-3)]">{c.assessment}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-[12.5px] text-[var(--color-fg-5)]">
          Every credential issues a verifiable URL plus a transcript. Re-attempts allowed within thirty days of the first try.
        </p>
      </Container>
    </section>
  );
}

/* ───── 5. Mentor framework (Career guidance) ──────────── */

const mentorAreas = [
  { area: 'Engineering',   icon: Code2,     desc: 'Hands-on engineers from product companies, startups, and services firms.' },
  { area: 'Product',       icon: PenTool,   desc: 'Product managers and designers from companies that build at scale.' },
  { area: 'Data',          icon: RefreshCw, desc: 'Analytics engineers, data scientists, and ML engineers across industries.' },
  { area: 'People & ops',  icon: Users,     desc: 'Operations and people-leaders for students considering non-engineering routes.' },
];

function MentorFramework() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <p className="kicker">Mentor matching</p>
            <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Mentors are matched by the question, not by tier.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
              When a student books a session, we match them with someone whose own background fits the goal in
              the conversation — not a generic mentor pool.
            </p>
          </div>
          <ol className="lg:col-span-7 space-y-2">
            {mentorAreas.map((m, i) => (
              <Reveal as="li" key={m.area} delay={i * 70}>
                <article className="flex items-start gap-5 border-t border-[var(--color-line)] py-6 first:border-t-0">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
                    <m.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                        {m.area}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                        Area {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[var(--color-fg-3)]">
                      {m.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ───── 6. Track comparison (Coding programs) ─────────── */

const tracks = [
  { name: 'Web development',  stack: 'JS · React · Node · Postgres',     level: 'Beginner-friendly',     project: 'Multi-page application with auth' },
  { name: 'Mobile development', stack: 'React Native · Firebase · Stores', level: 'Intermediate',          project: 'Cross-platform app shipped to stores' },
  { name: 'Full-stack',       stack: 'TypeScript · Next.js · Prisma',     level: 'Intermediate',          project: 'Production-grade end-to-end product' },
  { name: 'Applied AI',       stack: 'Python · Foundation models · RAG',  level: 'Intermediate',          project: 'AI-backed application with eval loop' },
  { name: 'Data engineering', stack: 'SQL · dbt · Python · Airflow',      level: 'Intermediate',          project: 'Pipeline + dashboard shipped to public URL' },
];

function TrackComparison() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="kicker">Available tracks</p>
          <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
            Pick the track that maps to the role you want.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <article className="h-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-6 flex flex-col">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                    Track {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                    {t.level}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[19px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  {t.name}
                </h3>
                <p className="mt-2 font-mono text-[11px] text-[var(--color-fg-3)]">{t.stack}</p>
                <div className="mt-auto pt-5 border-t border-[var(--color-line)]">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] font-semibold text-[var(--color-fg-5)]">
                    Final project
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--color-fg)]">{t.project}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───── 7. Workshop schedule (Skill development) ──────── */

const workshops = [
  { topic: 'Technical writing',      duration: '2 days', format: 'Online live',     output: 'A polished CV and a one-page report' },
  { topic: 'Communication',          duration: '3 days', format: 'Online live',     output: 'Three recorded answers to common questions' },
  { topic: 'Presentation',           duration: '2 days', format: 'Online live',     output: 'A recorded technical presentation with feedback' },
  { topic: 'Interview readiness',    duration: '3 days', format: 'Online + on-call', output: 'Five paired mock interviews with written reviews' },
];

function WorkshopSchedule() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-8">
            <p className="kicker">Workshop topics</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Compact, two-to-three-day intensives. Each one ends with an artefact you can reuse.
            </h2>
          </div>
        </div>

        <ol className="border-t border-[var(--color-fg)]">
          {workshops.map((w, i) => (
            <Reveal as="li" key={w.topic} delay={i * 60}>
              <article className="grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-3 py-7 md:py-9 border-b border-[var(--color-line)] row-hover">
                <span className="col-span-12 md:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  W{String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-12 md:col-span-4 font-display text-[19px] md:text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  {w.topic}
                </h3>
                <div className="col-span-6 md:col-span-2 inline-flex flex-col gap-1">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">Duration</span>
                  <span className="text-[13.5px] font-medium text-[var(--color-fg)]">{w.duration}</span>
                </div>
                <div className="col-span-6 md:col-span-2 inline-flex flex-col gap-1">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">Format</span>
                  <span className="text-[13.5px] font-medium text-[var(--color-fg)]">{w.format}</span>
                </div>
                <div className="col-span-12 md:col-span-3 inline-flex flex-col gap-1">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">You walk away with</span>
                  <span className="text-[13.5px] text-[var(--color-fg-3)]">{w.output}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
