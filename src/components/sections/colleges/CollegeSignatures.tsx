/**
 * @file CollegeSignatures.tsx
 * @purpose One unique full-width signature section per college service slug.
 * @notes  Formal academic register. Each section uses a distinct surface,
 *         layout primitive, and visual treatment — no card grids.
 */

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import {
  ClipboardCheck,
  FileText,
  CircleDot,
  Cpu,
  Cloud,
  Layers,
} from 'lucide-react';

export function CollegeSignature({ slug }: { slug: string }) {
  switch (slug) {
    case 'campus-training':         return <CohortCalendar />;
    case 'placement-drives':        return <DriveFunnel />;
    case 'pre-placement-training':  return <ReadinessAxis />;
    case 'faculty-development':     return <WorkshopCatalogue />;
    case 'naac-nba-support':        return <AccreditationChecklist />;
    case 'lms-erp-systems':         return <ModuleMap />;
    case 'ai-iot-cloud-labs':       return <LabKitTable />;
    case 'curriculum-consulting':   return <CurriculumDiff />;
    default:                        return null;
  }
}

/* ───── 01 ─ Cohort calendar (Campus training) ─────────────────
   Twelve-month strip with shaded cohort blocks. Light surface,
   editorial gantt-style band. */

const MONTHS = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const COHORT_BLOCKS = [
  { label: 'Pre-final · Aptitude', start: 0,  end: 2,  density: 'fill'    },
  { label: 'Final · Drive prep',   start: 2,  end: 6,  density: 'strong'  },
  { label: 'Final · Mock drives',  start: 5,  end: 7,  density: 'fill'    },
  { label: 'Pre-final · Technical',start: 7,  end: 10, density: 'strong'  },
  { label: 'Faculty observation',  start: 1,  end: 11, density: 'soft'    },
];

function CohortCalendar() {
  return (
    <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Cohort calendar</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Twelve-month engagement, mapped to the academic and placement calendars.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              Cohort blocks are scheduled against the institution’s academic timetable, drive windows, and
              examination periods. The strip below is illustrative; final timing is documented in the engagement plan.
            </p>
          </div>
        </div>

        {/* Calendar strip */}
        <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-5 md:p-7">
          {/* Month axis */}
          <div className="grid grid-cols-12 gap-x-2 mb-3">
            {MONTHS.map((m, i) => (
              <div key={m} className="text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">{m}</p>
                <p className="mt-0.5 font-mono text-[9px] tabular-nums text-[var(--color-fg-5)]/70">
                  M{String(i + 1).padStart(2, '0')}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-x-2 border-t border-[var(--color-line)] pt-2 mb-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} aria-hidden="true" className="block h-2 border-l border-[var(--color-line)]" />
            ))}
          </div>

          {/* Cohort rows */}
          <ol className="space-y-3">
            {COHORT_BLOCKS.map((c, i) => {
              const span = c.end - c.start + 1;
              const fill =
                c.density === 'fill'
                  ? 'bg-[var(--color-brand-700)] text-white'
                  : c.density === 'strong'
                    ? 'bg-[var(--color-brand-100)] text-[var(--color-brand-800)] ring-1 ring-inset ring-[var(--color-brand-200)]'
                    : 'bg-[var(--color-canvas-2)] text-[var(--color-fg-3)] ring-1 ring-inset ring-[var(--color-line)]';
              return (
                <Reveal as="li" key={c.label} delay={i * 60}>
                  <div className="grid grid-cols-12 gap-x-2 items-center">
                    {Array.from({ length: 12 }).map((_, idx) => {
                      if (idx === c.start) {
                        return (
                          <div
                            key={idx}
                            className={`${fill} rounded-[4px] px-3 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] font-semibold`}
                            style={{ gridColumn: `span ${span} / span ${span}` }}
                          >
                            <span className="block truncate">{c.label}</span>
                          </div>
                        );
                      }
                      if (idx > c.start && idx <= c.end) return null;
                      return <div key={idx} aria-hidden="true" className="h-9" />;
                    })}
                  </div>
                </Reveal>
              );
            })}
          </ol>

          {/* Legend */}
          <div className="mt-7 pt-5 border-t border-[var(--color-line)] flex flex-wrap items-center gap-x-6 gap-y-2">
            <LegendDot tone="fill"   label="Active delivery" />
            <LegendDot tone="strong" label="Scheduled cohort" />
            <LegendDot tone="soft"   label="Observation window" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function LegendDot({ tone, label }: { tone: 'fill' | 'strong' | 'soft'; label: string }) {
  const cls =
    tone === 'fill'
      ? 'bg-[var(--color-brand-700)]'
      : tone === 'strong'
        ? 'bg-[var(--color-brand-100)] ring-1 ring-[var(--color-brand-200)]'
        : 'bg-[var(--color-canvas-2)] ring-1 ring-[var(--color-line)]';
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-3)]">
      <span aria-hidden="true" className={`block h-3 w-5 rounded-[2px] ${cls}`} />
      {label}
    </span>
  );
}

/* ───── 02 ─ Drive funnel (Placement drives) ───────────────────
   Vertical stacked-bar funnel. Dark band with brand accents. */

const FUNNEL_STAGES = [
  { stage: 'Eligible pool',   pct: 100, value: 'XXX students',    note: 'Verified against the eligibility brief'  },
  { stage: 'Applied',          pct: 78,  value: 'XX % of pool',    note: 'After the recruiter brief is published'  },
  { stage: 'Pre-screened',     pct: 52,  value: 'XX % of applied', note: 'Aptitude · coding · fit conversation'    },
  { stage: 'Interviewed',      pct: 30,  value: 'XX % screened',   note: 'On the recruiter drive day'              },
  { stage: 'Offered',          pct: 16,  value: 'XX % interviewed',note: 'Documented offer letters issued'         },
];

function DriveFunnel() {
  return (
    <section className="bg-[var(--color-fg)] text-white section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-12 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker kicker-on-dark">Drive funnel</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
              Five funnel stages. Each stage is a documented gate with a written report.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-white/65">
              Stage-by-stage attrition is reported per drive in the post-drive review. The funnel below is
              illustrative; institution-specific ratios are reported against the engagement’s baseline.
            </p>
          </div>
        </div>

        <ol className="space-y-4">
          {FUNNEL_STAGES.map((s, i) => (
            <Reveal as="li" key={s.stage} delay={i * 70}>
              <div className="grid grid-cols-12 items-center gap-x-4 lg:gap-x-6">
                <span className="col-span-12 sm:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)] tabular-nums">
                  G{String(i + 1).padStart(2, '0')}
                </span>
                <div className="col-span-12 sm:col-span-3">
                  <p className="font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.018em] text-white">
                    {s.stage}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
                    {s.value}
                  </p>
                </div>

                {/* Bar */}
                <div className="col-span-12 sm:col-span-6">
                  <div className="relative h-9 rounded-[4px] bg-white/5 overflow-hidden">
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 bg-[var(--color-brand-500)] flex items-center px-3"
                      style={{ width: `${s.pct}%` }}
                    />
                    <span className="relative z-10 grid h-full place-items-end pr-3">
                      <span className="font-mono text-[11px] tabular-nums text-white/85 font-semibold">
                        {s.pct}%
                      </span>
                    </span>
                  </div>
                </div>

                <p className="col-span-12 sm:col-span-2 text-[12.5px] leading-[1.5] text-white/60">
                  {s.note}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50 max-w-prose">
          Figures shown are illustrative ratios. Per-institution funnel reports are prepared from the
          eligibility brief, the pre-screening assessment, and the recruiter offer log.
        </p>
      </Container>
    </section>
  );
}

/* ───── 03 ─ Readiness axis (Pre-placement training) ───────────
   Four-quadrant grid showing readiness across four axes. */

const AXES = [
  {
    quadrant: 'Aptitude',
    descriptor: 'Quantitative · logical · verbal',
    baseline: 'Baseline paper, week 01',
    target: 'Target by week 08',
    weight: 'Weighting · 20%',
  },
  {
    quadrant: 'Technical',
    descriptor: 'Data structures · OS · DB · networks',
    baseline: 'Coding screen, week 01',
    target: 'Coding round, week 07',
    weight: 'Weighting · 35%',
  },
  {
    quadrant: 'Communication',
    descriptor: 'Spoken · written · presentation',
    baseline: 'Written assessment, week 01',
    target: 'Recorded mock, week 06',
    weight: 'Weighting · 20%',
  },
  {
    quadrant: 'Behavioural',
    descriptor: 'STAR · panel · HR rounds',
    baseline: 'Self-assessment, week 04',
    target: 'Mentor panel, week 08',
    weight: 'Weighting · 25%',
  },
];

function ReadinessAxis() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="kicker">Readiness axes</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Four readiness axes. One weighted rubric.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
              Drive-readiness is reported against the four axes below. Each axis is anchored by a baseline
              assessment and a target reading; the weighted rubric is documented at the start of the engagement.
            </p>
          </div>

          {/* 2x2 axis grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-t border-[var(--color-fg)]">
              {AXES.map((a, i) => (
                <Reveal key={a.quadrant} delay={i * 70}>
                  <article className="border-r border-b border-[var(--color-fg)] p-6 md:p-8 min-h-[200px] flex flex-col bg-[var(--color-bg)]">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        Axis {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                        {a.weight}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[24px] md:text-[28px] font-semibold tracking-[-0.022em] text-[var(--color-fg)]">
                      {a.quadrant}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--color-fg-3)]">
                      {a.descriptor}
                    </p>
                    <dl className="mt-auto pt-6 grid grid-cols-1 gap-y-2.5">
                      <div className="flex items-baseline gap-3">
                        <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] w-24 shrink-0">
                          Baseline
                        </dt>
                        <dd className="text-[12.5px] text-[var(--color-fg)] font-medium">{a.baseline}</dd>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] w-24 shrink-0">
                          Target
                        </dt>
                        <dd className="text-[12.5px] text-[var(--color-fg)] font-medium">{a.target}</dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── 04 ─ Workshop catalogue (Faculty development) ──────────
   Editorial list of workshop sessions with duration and format. */

const WORKSHOPS = [
  { code: 'FDP-AI',    title: 'Applied AI for the engineering classroom', duration: '5 days',  format: 'On-campus + lab',         seats: '25 faculty' },
  { code: 'FDP-WEB',   title: 'Modern web development pedagogy',          duration: '5 days',  format: 'Hybrid · weekday evenings',seats: '25 faculty' },
  { code: 'FDP-CLD',   title: 'Cloud foundations for academia',           duration: '2 weeks', format: 'Online + capstone',        seats: '40 faculty' },
  { code: 'FDP-IOT',   title: 'IoT and embedded systems for instructors', duration: '5 days',  format: 'On-campus · lab-led',      seats: '25 faculty' },
  { code: 'WS-ASMT',   title: 'Outcome-based assessment design',          duration: '2 days',  format: 'On-campus workshop',        seats: '30 faculty' },
  { code: 'WS-PRJ',    title: 'Project-based learning facilitation',      duration: '2 days',  format: 'On-campus workshop',        seats: '30 faculty' },
];

function WorkshopCatalogue() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-8">
            <p className="kicker">Workshop catalogue</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              A published catalogue. Each entry is delivered against a documented session plan.
            </h2>
          </div>
        </div>

        <ol className="border-t-2 border-[var(--color-fg)]">
          {WORKSHOPS.map((w, i) => (
            <Reveal as="li" key={w.code} delay={i * 50}>
              <article className="grid grid-cols-12 items-baseline gap-x-4 lg:gap-x-8 gap-y-2 border-b border-[var(--color-line)] py-7 md:py-9 row-hover">
                <span className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  {w.code}
                </span>
                <h3 className="col-span-12 md:col-span-5 font-display text-[18px] md:text-[20px] font-semibold leading-[1.25] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                  {w.title}
                </h3>
                <div className="col-span-6 md:col-span-2 flex flex-col gap-1">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                    Duration
                  </span>
                  <span className="text-[13.5px] font-medium text-[var(--color-fg)]">{w.duration}</span>
                </div>
                <div className="col-span-6 md:col-span-2 flex flex-col gap-1">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                    Format
                  </span>
                  <span className="text-[13.5px] font-medium text-[var(--color-fg)]">{w.format}</span>
                </div>
                <span className="col-span-12 md:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-3)] md:text-right tabular-nums">
                  {w.seats}
                </span>
              </article>
            </Reveal>
          ))}
        </ol>

        <p className="mt-6 text-[12.5px] text-[var(--color-fg-5)] max-w-prose">
          Each catalogue entry is delivered against a documented session plan, an attendance register, and a
          faculty-authored teaching artefact. Listings on the AICTE FDP portal are co-managed with the academic owner.
        </p>
      </Container>
    </section>
  );
}

/* ───── 05 ─ Accreditation checklist (NAAC + NBA) ─────────────
   Document-style criterion checklist with deliverables mapped per row. */

const CRITERIA = [
  { id: 'C1', name: 'Curricular aspects',                    deliverable: 'Curriculum mapping pack with course outcomes' },
  { id: 'C2', name: 'Teaching, learning, and evaluation',    deliverable: 'Lesson plans, assessment rubrics, attainment register' },
  { id: 'C3', name: 'Research, innovations, and extension',  deliverable: 'Publications register, project register, MoU file' },
  { id: 'C4', name: 'Infrastructure and learning resources', deliverable: 'Asset register, library audit, lab-utilisation log' },
  { id: 'C5', name: 'Student support and progression',       deliverable: 'Mentoring records, placement register, alumni log' },
  { id: 'C6', name: 'Governance, leadership, and management',deliverable: 'IQAC minutes, financial audit, strategic plan'      },
  { id: 'C7', name: 'Institutional values and best practices',deliverable: 'Best-practice notes, gender audit, sustainability log' },
];

function AccreditationChecklist() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Accreditation checklist</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Seven NAAC criteria. Each criterion mapped to a written deliverable.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              For NBA programme-level engagements, the criterion structure is replaced with the NBA programme
              criteria; the deliverable mapping below is illustrative of the NAAC institutional cycle.
            </p>
          </div>
        </div>

        {/* Document layout */}
        <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[6px] overflow-hidden">
          <div className="bg-[var(--color-canvas)] border-b border-[var(--color-line)] px-6 py-4 flex items-baseline justify-between">
            <p className="font-display text-[15px] md:text-[16px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
              Self Study Report — criterion register
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
              Doc · SSR-Ref-XX
            </p>
          </div>

          <ol>
            {CRITERIA.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 40} className="border-b border-[var(--color-line)] last:border-b-0">
                <div className="px-6 py-5 grid grid-cols-12 gap-x-4 gap-y-2 items-baseline row-hover">
                  <div className="col-span-12 md:col-span-1 inline-flex items-center gap-2">
                    <ClipboardCheck className="h-3.5 w-3.5 text-[var(--color-brand-700)]" strokeWidth={2.25} />
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      {c.id}
                    </span>
                  </div>
                  <h3 className="col-span-12 md:col-span-5 font-display text-[15.5px] md:text-[17px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
                    {c.name}
                  </h3>
                  <p className="col-span-12 md:col-span-5 text-[13px] md:text-[13.5px] leading-[1.55] text-[var(--color-fg-3)]">
                    {c.deliverable}
                  </p>
                  <span className="col-span-12 md:col-span-1 inline-flex md:justify-end font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] tabular-nums">
                    Sec {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] px-6 py-3 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
              Owner · IQAC coordinator
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
              Review · cycle window
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── 06 ─ Module map (LMS & ERP) ────────────────────────────
   Visual schematic of modules connected by lines to a central hub. */

const MODULES = [
  { id: 'admissions', name: 'Admissions',  body: 'Enquiry · application · offer · enrolment'           },
  { id: 'academics',  name: 'Academics',   body: 'Calendar · attendance · lesson plans · gradebook'    },
  { id: 'exams',      name: 'Examinations',body: 'Papers · evaluation · grade-card · re-evaluation'    },
  { id: 'fees',       name: 'Fees',         body: 'Structure · invoicing · receipts · scholarships'     },
  { id: 'hr',         name: 'HR',           body: 'Faculty roster · workload · payroll · appraisals'    },
  { id: 'placements', name: 'Placements',   body: 'Drive calendar · pre-screen · offers · alumni log'   },
];

function ModuleMap() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="kicker">Module map</p>
          <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
            Six modules. One system of record.
          </h2>
        </div>

        <div className="relative bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-6 md:p-10 lg:p-14">
          {/* Hub label */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="grid place-items-center h-28 w-28 lg:h-32 lg:w-32 rounded-full bg-[var(--color-brand-700)] text-white shadow-[0_24px_60px_-28px_rgba(15,31,77,0.55)]">
              <div className="text-center px-2">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/80">
                  System
                </p>
                <p className="mt-1 font-display text-[14px] lg:text-[15px] font-semibold leading-[1.1]">
                  Single<br/>record
                </p>
              </div>
            </div>
          </div>

          {/* SVG connectors (lg+ only) */}
          <svg
            aria-hidden="true"
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {[
              [16, 22], [50, 16], [84, 22],
              [16, 78], [50, 84], [84, 78],
            ].map(([x, y], i) => (
              <line
                key={i}
                x1={x}
                y1={y}
                x2={50}
                y2={50}
                stroke="var(--color-line-2)"
                strokeWidth={0.25}
                strokeDasharray="0.6 0.6"
              />
            ))}
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-y-24 md:gap-x-10 lg:gap-x-20 relative z-[5]">
            {MODULES.map((m, i) => {
              const onLeft = i % 3 === 0;
              const onRight = i % 3 === 2;
              return (
                <Reveal key={m.id} delay={i * 80}>
                  <article
                    className={`relative bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[8px] p-5 md:p-6 ${
                      onLeft ? 'md:text-right' : onRight ? 'md:text-left' : 'md:text-center'
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      Mod {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2.5 font-display text-[17px] md:text-[19px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                      {m.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] leading-[1.55] text-[var(--color-fg-3)]">
                      {m.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-[12.5px] text-[var(--color-fg-5)] max-w-prose mx-auto text-center">
          Modules share one master data set — students, faculty, programmes — across admissions, academics,
          examinations, fees, HR, and placements.
        </p>
      </Container>
    </section>
  );
}

/* ───── 07 ─ Lab kit table (AI · IoT · Cloud labs) ─────────────
   Three lab types in a comparison table with hardware/software/curriculum. */

const LAB_KITS = [
  {
    code: 'LAB-AI',
    icon: CircleDot,
    title: 'AI lab',
    hardware: 'Workstation cluster · GPU bench · 25 thin-clients',
    software: 'Python · PyTorch · scikit-learn · notebook server',
    curriculum: '12 experiments · 4 mini-projects · 1 capstone',
    seating: '25 students',
  },
  {
    code: 'LAB-IOT',
    icon: Cpu,
    title: 'IoT lab',
    hardware: 'Microcontroller bench · sensor library · printer station',
    software: 'Arduino IDE · MQTT broker · gateway tooling',
    curriculum: '15 experiments · 3 mini-projects · 1 field deploy',
    seating: '20 students',
  },
  {
    code: 'LAB-CLD',
    icon: Cloud,
    title: 'Cloud lab',
    hardware: 'Thin-clients · network rack · institute SSO bridge',
    software: 'Sandbox accounts · IaC tooling · observability stack',
    curriculum: '10 experiments · 2 mini-projects · 1 deploy review',
    seating: '30 students',
  },
];

function LabKitTable() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Lab kit</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Three lab specifications. Procured, installed, and integrated against the syllabus.
            </h2>
          </div>
        </div>

        <div className="border border-[var(--color-line)] rounded-[10px] overflow-hidden">
          {/* Head */}
          <div className="hidden md:grid grid-cols-12 gap-x-4 px-6 py-3.5 bg-[var(--color-canvas)] border-b border-[var(--color-line)] font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
            <span className="col-span-3">Lab</span>
            <span className="col-span-3">Hardware</span>
            <span className="col-span-3">Software</span>
            <span className="col-span-2">Curriculum</span>
            <span className="col-span-1 text-right">Seats</span>
          </div>

          <ul>
            {LAB_KITS.map((k, i) => (
              <Reveal as="li" key={k.code} delay={i * 80} className="border-b border-[var(--color-line)] last:border-b-0">
                <article className="grid grid-cols-12 gap-x-4 gap-y-3 px-6 py-7 items-start">
                  <div className="col-span-12 md:col-span-3 flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[6px] bg-[var(--color-brand-50)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-100)]">
                      <k.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        {k.code}
                      </span>
                      <h3 className="mt-1 font-display text-[18px] md:text-[19px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                        {k.title}
                      </h3>
                    </div>
                  </div>
                  <p className="col-span-12 md:col-span-3 text-[12.5px] leading-[1.55] text-[var(--color-fg-3)]">
                    <span className="md:hidden font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] block mb-1">
                      Hardware
                    </span>
                    {k.hardware}
                  </p>
                  <p className="col-span-12 md:col-span-3 text-[12.5px] leading-[1.55] text-[var(--color-fg-3)]">
                    <span className="md:hidden font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] block mb-1">
                      Software
                    </span>
                    {k.software}
                  </p>
                  <p className="col-span-12 md:col-span-2 text-[12.5px] leading-[1.55] text-[var(--color-fg-3)]">
                    <span className="md:hidden font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] block mb-1">
                      Curriculum
                    </span>
                    {k.curriculum}
                  </p>
                  <p className="col-span-12 md:col-span-1 md:text-right font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg)] font-semibold tabular-nums">
                    {k.seating}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-[12.5px] text-[var(--color-fg-5)] max-w-prose">
          Specifications are illustrative. Department-level specifications are customised against the syllabus,
          the available room, and the student-batch plan before procurement begins.
        </p>
      </Container>
    </section>
  );
}

/* ───── 08 ─ Curriculum diff (Curriculum consulting) ───────────
   Two-column "before / after" view showing course-level revisions. */

const COURSE_DIFFS = [
  {
    course: 'Programming fundamentals',
    before: 'C-only syllabus · paper-based assessment · single end-term',
    after:  'C + Python · lab-led assessment · weekly practice register',
  },
  {
    course: 'Database systems',
    before: 'Relational only · paper-based SQL · ER diagrams as theory',
    after:  'Relational + applied indexing · live SQL exam · normalised case study',
  },
  {
    course: 'Operating systems',
    before: 'Theory-led modules · paper assessment · no lab',
    after:  'Theory + simulation lab · scripted shell exercises · viva-led grading',
  },
  {
    course: 'Web technologies elective',
    before: 'HTML, CSS, jQuery · single end-term project',
    after:  'HTML, CSS, JavaScript, framework module · weekly demos · paired review',
  },
  {
    course: 'Capstone project',
    before: 'Group of six · single demo · 100-mark report',
    after:  'Group of three · sprint reviews · documented architecture + deploy',
  },
];

function CurriculumDiff() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Curriculum diff</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Course-level revisions presented as a written diff.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              Each revision is reviewed with the course owner and consolidated into a board-of-studies note.
              The diff below is illustrative of the kind of course-level revision proposed.
            </p>
          </div>
        </div>

        {/* Diff column headers */}
        <div className="hidden md:grid grid-cols-12 gap-x-4 px-6 mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
          <span className="col-span-1">Ref</span>
          <span className="col-span-3">Course</span>
          <span className="col-span-4">
            <span className="inline-flex items-center gap-1.5">
              <FileText className="h-3 w-3" strokeWidth={2.25} />
              Before
            </span>
          </span>
          <span className="col-span-4">
            <span className="inline-flex items-center gap-1.5">
              <Layers className="h-3 w-3" strokeWidth={2.25} />
              After
            </span>
          </span>
        </div>

        <ol className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] overflow-hidden">
          {COURSE_DIFFS.map((d, i) => (
            <Reveal as="li" key={d.course} delay={i * 60} className="border-b border-[var(--color-line)] last:border-b-0">
              <article className="grid grid-cols-12 gap-x-4 gap-y-3 px-6 py-6 md:py-7 row-hover">
                <span className="col-span-12 md:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  D{String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-12 md:col-span-3 font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.014em] text-[var(--color-fg)] text-balance">
                  {d.course}
                </h3>

                {/* Before */}
                <div className="col-span-12 md:col-span-4 relative">
                  <span className="md:hidden font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] block mb-1">
                    Before
                  </span>
                  <div className="relative pl-3 border-l-2 border-[var(--color-line-2)]">
                    <p className="text-[13px] leading-[1.6] text-[var(--color-fg-4)] line-through decoration-[var(--color-fg-5)]/40">
                      {d.before}
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="col-span-12 md:col-span-4 relative">
                  <span className="md:hidden font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] block mb-1">
                    After
                  </span>
                  <div className="relative pl-3 border-l-2 border-[var(--color-brand-700)]">
                    <p className="text-[13px] leading-[1.6] text-[var(--color-fg)] font-medium">
                      {d.after}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <p className="mt-5 text-[12.5px] text-[var(--color-fg-5)] max-w-prose">
          The full diff is consolidated into a board-of-studies note covering syllabus, lab components, and
          assessment formats — alongside a model paper set and rubrics for the first delivery cycle.
        </p>
      </Container>
    </section>
  );
}
