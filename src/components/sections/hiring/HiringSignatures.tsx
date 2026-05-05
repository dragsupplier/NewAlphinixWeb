import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import {
  Sunrise,
  Coffee,
  Sandwich,
  Sun,
  Moon,
  ArrowRight,
} from 'lucide-react';

/**
 * HiringSignature — one signature visual per hiring service slug.
 * Each section is intentionally distinct (table / timeline / funnel /
 * schedule / schematic) and operational in voice.
 */
export function HiringSignature({ slug }: { slug: string }) {
  switch (slug) {
    case 'permanent-recruitment':    return <SalaryBandGuide />;
    case 'contract-staffing':        return <EngagementTimeline />;
    case 'intern-supply':            return <BenchFunnel />;
    case 'technical-assessments':    return <AssessmentToolkit />;
    case 'recruitment-outsourcing':  return <RpoOperatingModel />;
    case 'bulk-hiring-drives':       return <DriveDaySchedule />;
    default:                         return null;
  }
}

/* ───── 1. Salary band guide (permanent-recruitment) ──────────
   Role-level × salary band matrix, presented as a table. */

const SALARY_ROWS = [
  { level: 'Entry · L1',      eng: 'INR XX–XX LPA', product: 'INR XX–XX LPA', design: 'INR XX–XX LPA' },
  { level: 'Junior · L2',     eng: 'INR XX–XX LPA', product: 'INR XX–XX LPA', design: 'INR XX–XX LPA' },
  { level: 'Mid · L3',        eng: 'INR XX–XX LPA', product: 'INR XX–XX LPA', design: 'INR XX–XX LPA' },
  { level: 'Senior · L4',     eng: 'INR XX–XX LPA', product: 'INR XX–XX LPA', design: 'INR XX–XX LPA' },
  { level: 'Staff · L5',      eng: 'INR XX–XX LPA', product: 'INR XX–XX LPA', design: 'INR XX–XX LPA' },
  { level: 'Principal · L6',  eng: 'INR XX–XX LPA', product: 'INR XX–XX LPA', design: 'INR XX–XX LPA' },
];

function SalaryBandGuide() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Salary band guide</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Indicative bands by role level. Calibrated against current market data.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              Bands are placeholders. The final band for a role is benchmarked against the JD, the
              location, and the response rate — and recorded on the engagement letter.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] overflow-hidden">
          {/* Table head */}
          <div className="hidden md:grid grid-cols-12 gap-x-4 px-6 py-3.5 border-b border-[var(--color-line)] bg-[var(--color-canvas)] font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
            <span className="col-span-3">Role level</span>
            <span className="col-span-3">Engineering</span>
            <span className="col-span-3">Product / PM</span>
            <span className="col-span-3">Design</span>
          </div>
          <ul>
            {SALARY_ROWS.map((r, i) => (
              <Reveal as="li" key={r.level} delay={i * 40} className="border-b border-[var(--color-line)] last:border-b-0 row-hover">
                <div className="grid grid-cols-12 gap-x-4 gap-y-2 px-6 py-5 items-baseline">
                  <span className="col-span-12 md:col-span-3 font-display text-[15.5px] md:text-[16px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                    {r.level}
                  </span>
                  <span className="col-span-4 md:col-span-3 font-mono text-[12px] tabular-nums text-[var(--color-fg-3)]">
                    {r.eng}
                  </span>
                  <span className="col-span-4 md:col-span-3 font-mono text-[12px] tabular-nums text-[var(--color-fg-3)]">
                    {r.product}
                  </span>
                  <span className="col-span-4 md:col-span-3 font-mono text-[12px] tabular-nums text-[var(--color-fg-3)]">
                    {r.design}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
          Benchmarks refreshed every quarter — final bands shared in writing on the engagement letter.
        </p>
      </Container>
    </section>
  );
}

/* ───── 2. Engagement timeline (contract-staffing) ────────────
   Gantt-like horizontal bars showing 3 / 6 / 12-month shapes. */

const ENGAGEMENTS = [
  { label: '3-month sprint',   span: 3,  width: 25,  startCol: 0,  body: 'Tight scope. One milestone. Clean exit + reference letter at week 12.' },
  { label: '6-month delivery', span: 6,  width: 50,  startCol: 0,  body: 'Quarterly checkpoint, mid-engagement review, and a written outcome report.' },
  { label: '12-month embed',   span: 12, width: 100, startCol: 0,  body: 'Long-window engagement with extension option. Reviewed against KPIs every quarter.' },
];

const MONTHS = ['M01', 'M02', 'M03', 'M04', 'M05', 'M06', 'M07', 'M08', 'M09', 'M10', 'M11', 'M12'];

function EngagementTimeline() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Engagement shapes</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Three contract windows. Each one ends with a reference letter.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              The window is locked on the engagement letter. Extensions are recorded as an addendum
              when the project shape changes mid-flight.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-[10px] p-5 md:p-7 lg:p-9">
          {/* Month axis */}
          <div className="hidden md:grid grid-cols-12 gap-x-1 mb-4 pl-[200px]">
            {MONTHS.map((m) => (
              <span
                key={m}
                className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] tabular-nums text-center"
              >
                {m}
              </span>
            ))}
          </div>

          <ol className="space-y-6 md:space-y-7">
            {ENGAGEMENTS.map((e, i) => (
              <Reveal as="li" key={e.label} delay={i * 80}>
                <div className="md:flex md:items-center md:gap-5">
                  <div className="md:w-[180px] shrink-0 mb-2 md:mb-0">
                    <p className="font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
                      {e.label}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-brand-700)] mt-1 tabular-nums">
                      {e.span} months
                    </p>
                  </div>

                  <div className="flex-1 relative h-10 bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[6px] overflow-hidden">
                    {/* Month grid lines */}
                    <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
                      {MONTHS.map((_, mi) => (
                        <span
                          key={mi}
                          className="border-r border-[var(--color-line)] last:border-r-0"
                        />
                      ))}
                    </div>
                    {/* The engagement bar */}
                    <div
                      className="absolute top-0 bottom-0 left-0 bg-[var(--color-brand-700)] flex items-center px-3"
                      style={{ width: `${e.width}%` }}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/85 tabular-nums">
                        Start → close · M{String(e.span).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-2.5 md:ml-[200px] text-[13px] leading-[1.6] text-[var(--color-fg-3)] md:max-w-[60ch]">
                  {e.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ───── 3. Bench funnel (intern-supply) ───────────────────────
   Stage-by-stage funnel: applicants → screened → ready. */

const FUNNEL_STAGES = [
  { stage: 'Applicants',    width: 100, count: 'XX,XXX',  body: 'Inbound candidates across colleges, referrals, and our own programmes.' },
  { stage: 'Cohort intake', width: 70,  count: 'X,XXX',   body: 'Candidates who clear the entry assessment and join an active cohort.' },
  { stage: 'In training',   width: 48,  count: 'XXX',     body: 'Candidates currently inside the cohort with a documented training history.' },
  { stage: 'Screened',      width: 30,  count: 'XXX',     body: 'Candidates with a shipped project and a refreshed assessment on file.' },
  { stage: 'Ready bench',   width: 16,  count: 'XX',      body: 'Forwardable interns — with project links and a cohort-lead confidence note.' },
];

function BenchFunnel() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">The bench, by stage</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              From applicant to ready bench in five stages.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              The bench rotates every month. Counts are placeholders — current bench depth is shared
              in writing during the Brief phase.
            </p>
          </div>
        </div>

        <ol className="space-y-3">
          {FUNNEL_STAGES.map((s, i) => (
            <Reveal key={s.stage} as="li" delay={i * 70}>
              <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 items-center">
                <span className="col-span-2 md:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  S{String(i + 1).padStart(2, '0')}
                </span>

                <div className="col-span-10 md:col-span-3">
                  <p className="font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
                    {s.stage}
                  </p>
                  <p className="font-mono text-[12px] tabular-nums text-[var(--color-fg-3)] mt-0.5">
                    {s.count}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <div
                    className="h-9 md:h-10 bg-[var(--color-brand-700)] flex items-center px-3 rounded-[4px] transition-all"
                    style={{ width: `${s.width}%` }}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/85 tabular-nums">
                      {s.width}% of inbound
                    </span>
                  </div>
                </div>

                <span className="col-span-12 md:col-span-2 text-[12.5px] leading-[1.5] text-[var(--color-fg-3)]">
                  {s.body}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
          Drop-off between stages is reviewed weekly. Cohort leads sign off the ready bench.
        </p>
      </Container>
    </section>
  );
}

/* ───── 4. Assessment toolkit (technical-assessments) ─────────
   List of assessment types with format and duration columns. */

const ASSESSMENTS = [
  { type: 'Aptitude',         format: 'Online · proctored',    duration: '60 min',  used: 'Volume drives, entry-level filtering' },
  { type: 'Coding screen',    format: 'Online · timed',        duration: '90 min',  used: 'IC engineering, junior to mid' },
  { type: 'System design',    format: 'On-call · whiteboard',  duration: '60 min',  used: 'Senior IC and staff-level rounds' },
  { type: 'Take-home',        format: 'Async · 7-day window',  duration: '6–10 hrs',used: 'Senior IC, design engineering' },
  { type: 'Live coding',      format: 'On-call · paired',      duration: '75 min',  used: 'Lateral hires and product engineering' },
  { type: 'Portfolio review', format: 'On-call · structured',  duration: '45 min',  used: 'Design and design-engineering rounds' },
];

function AssessmentToolkit() {
  return (
    <section className="bg-[var(--color-fg)] text-white section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker kicker-on-dark">Assessment toolkit</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-white text-balance">
              Six instruments. Picked against the role level and the volume.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-white/65">
              Each instrument carries a written rubric calibrated with your panel before launch.
              Per-candidate reports are returned within the SLA.
            </p>
          </div>
        </div>

        <ol className="border-y border-white/10">
          {ASSESSMENTS.map((a, i) => (
            <Reveal as="li" key={a.type} delay={i * 50} className="border-t border-white/10 first:border-t-0">
              <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-2 py-6 md:py-7">
                <span className="col-span-12 sm:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)] tabular-nums">
                  T{String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-12 sm:col-span-3 font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.018em] text-white">
                  {a.type}
                </h3>
                <span className="col-span-6 sm:col-span-3 text-[12.5px] text-white/65">
                  {a.format}
                </span>
                <span className="col-span-6 sm:col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 tabular-nums">
                  {a.duration}
                </span>
                <span className="col-span-12 sm:col-span-3 text-[12.5px] text-white/85 font-medium">
                  {a.used}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/45">
          Custom instruments built on request — designed against the JD and reviewed with your panel.
        </p>
      </Container>
    </section>
  );
}

/* ───── 5. RPO operating model (recruitment-outsourcing) ──────
   Schematic: client team / Alphinix RPO team / candidates flow. */

function RpoOperatingModel() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Operating model</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              How an embedded RPO sits between your team and the candidate pool.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              The RPO team operates under your employer brand. Candidates see your domain. Your panel
              owns interview decisions; we own pipeline operations.
            </p>
          </div>
        </div>

        {/* Schematic — three columns connected with arrows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-6 items-stretch">
          {/* Column 1 — Client */}
          <Reveal>
            <article className="h-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-6 md:p-7">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                01 / Client team
              </span>
              <h3 className="mt-3 font-display text-[19px] md:text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                Hiring panel · talent lead
              </h3>
              <ul className="mt-5 space-y-2 text-[13px] leading-[1.6] text-[var(--color-fg-3)]">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-700)] shrink-0" />
                  Owns the JD, interview rubric, and offer decisions.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-700)] shrink-0" />
                  Reads weekly pipeline reports alongside the RPO team.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-700)] shrink-0" />
                  Approves the playbook and signs every offer.
                </li>
              </ul>
            </article>
          </Reveal>

          {/* Column 2 — RPO team (highlighted) */}
          <Reveal delay={100}>
            <article className="h-full bg-[var(--color-fg)] text-white rounded-[10px] p-6 md:p-7 relative">
              {/* Connector arrows — absolute on lg */}
              <span
                aria-hidden
                className="hidden lg:flex absolute top-1/2 -left-3 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full bg-[var(--color-bg)] border border-[var(--color-line)] text-[var(--color-fg)]"
              >
                <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span
                aria-hidden
                className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full bg-[var(--color-bg)] border border-[var(--color-line)] text-[var(--color-fg)]"
              >
                <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
              </span>

              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-300)] tabular-nums">
                02 / Alphinix RPO
              </span>
              <h3 className="mt-3 font-display text-[19px] md:text-[20px] font-semibold tracking-[-0.018em] text-white">
                Embedded recruiters · coordinators
              </h3>
              <ul className="mt-5 space-y-2 text-[13px] leading-[1.6] text-white/70">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-300)] shrink-0" />
                  Sourcing, screening, scheduling — under your employer brand.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-300)] shrink-0" />
                  Sits inside your ATS and runs your interview rubric.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-300)] shrink-0" />
                  Owns weekly pipeline reports and source-of-hire data.
                </li>
              </ul>
            </article>
          </Reveal>

          {/* Column 3 — Candidates */}
          <Reveal delay={200}>
            <article className="h-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-6 md:p-7">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                03 / Candidate pool
              </span>
              <h3 className="mt-3 font-display text-[19px] md:text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                Sourced · screened · scheduled
              </h3>
              <ul className="mt-5 space-y-2 text-[13px] leading-[1.6] text-[var(--color-fg-3)]">
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-700)] shrink-0" />
                  See your domain, your career site, your interview process.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-700)] shrink-0" />
                  Receive structured communication on a defined cadence.
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[var(--color-brand-700)] shrink-0" />
                  Carry a written report through every internal handoff.
                </li>
              </ul>
            </article>
          </Reveal>
        </div>

        {/* Handoff legend */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[8px] px-5 py-4">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
              Handoff 01 — brief & rubric
            </p>
            <p className="mt-1 text-[13px] text-[var(--color-fg)]">
              Client → RPO. JD, interview rubric, calibration session.
            </p>
          </div>
          <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[8px] px-5 py-4">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
              Handoff 02 — shortlist & report
            </p>
            <p className="mt-1 text-[13px] text-[var(--color-fg)]">
              RPO → Client. Forwarded shortlist, weekly pipeline report.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── 6. Drive-day schedule (bulk-hiring-drives) ────────────
   Hour-by-hour day-in-the-life of a drive day. */

const DRIVE_DAY = [
  { time: '08:00', icon: Sunrise,  block: 'Setup',           body: 'Venue setup, registration desks, panel briefing, network and AV check.' },
  { time: '09:00', icon: Coffee,   block: 'Walk-in opens',   body: 'Registration desks open. Pre-screened candidates check in against the call sheet.' },
  { time: '10:00', icon: ArrowRight, block: 'Round 01',      body: 'Aptitude screen and short coding round in batched slots. Reports written within the hour.' },
  { time: '12:30', icon: Sandwich, block: 'Mid-day cleanup', body: 'Cleared candidates routed to interview slots. Walk-in list re-balanced against panel availability.' },
  { time: '14:00', icon: Sun,      block: 'Round 02',        body: 'Technical interviews and fit conversations. Panel reads pre-drive screening reports before each slot.' },
  { time: '16:00', icon: ArrowRight, block: 'Offer roll-out', body: 'Same-day offer roll-out for cleared candidates. Written offer letter issued on the spot.' },
  { time: '18:00', icon: Moon,     block: 'Wrap',            body: 'End-of-day report compiled. Throughput, conversion, and offer-acceptance metrics shared with your panel.' },
];

function DriveDaySchedule() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Drive-day operations</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              An hour-by-hour view of how a drive day actually runs.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              Drive days are tightly choreographed against an SLA. The schedule below is the standard
              shape — adjusted for drive size, role mix, and venue constraints.
            </p>
          </div>
        </div>

        <ol className="relative pl-9 md:pl-0">
          {/* Vertical timeline rule (mobile) */}
          <span
            aria-hidden
            className="md:hidden absolute left-[15px] top-2 bottom-2 w-px bg-[var(--color-brand-700)]"
          />

          {DRIVE_DAY.map((d, i) => (
            <Reveal as="li" key={d.time} delay={i * 60} className="relative">
              <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline border-b border-[var(--color-line)] py-6 md:py-7 last:border-b-0">
                {/* Time slot — desktop col, mobile dot */}
                <div className="col-span-12 md:col-span-2">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="md:hidden absolute -left-[5px] block h-2.5 w-2.5 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
                    />
                    <span className="font-display text-[22px] md:text-[26px] font-semibold leading-[1] tracking-[-0.02em] text-[var(--color-brand-700)] tabular-nums">
                      {d.time}
                    </span>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-1 mt-2 md:mt-0">
                  <span className="grid h-9 w-9 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
                    <d.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </div>

                <h3 className="col-span-12 md:col-span-3 mt-2 md:mt-0 font-display text-[18px] md:text-[19px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  {d.block}
                </h3>

                <p className="col-span-12 md:col-span-6 mt-2 md:mt-0 text-[13.5px] md:text-[14px] leading-[1.6] text-[var(--color-fg-3)]">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
          End-of-day report shared the same evening. SLA metrics reconciled the next working day.
        </p>
      </Container>
    </section>
  );
}
