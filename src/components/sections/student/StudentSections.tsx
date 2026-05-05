import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Phone,
  Mail,
  CalendarClock,
  MonitorPlay,
  ClipboardList,
  CalendarDays,
  Users,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';
import { studentServices } from '@/data/studentServices';

/* ───── Hero — used on hub + service pages ─────────────────── */

export function StudentHero({
  kicker,
  title,
  highlight,
  body,
  primaryCta,
  secondaryCta,
  meta,
}: {
  kicker: string;
  title: string;
  highlight?: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="relative bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-canvas)] border border-[var(--color-line)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
              <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-[var(--color-brand-700)]" />
              {kicker}
            </span>
            <h1 className="mt-5 font-display text-[36px] md:text-[52px] lg:text-[64px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
              {title}{' '}
              {highlight && <span className="text-[var(--color-brand-700)]">{highlight}</span>}
            </h1>
            <p className="mt-6 max-w-2xl text-[15.5px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
              {body}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={primaryCta.href}
                className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
              >
                {primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>

          {meta && (
            <div className="lg:col-span-4">
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5 lg:border-l lg:border-[var(--color-line)] lg:pl-8">
                {meta.map((m) => (
                  <li key={m.label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                      {m.label}
                    </p>
                    <p className="mt-1.5 font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                      {m.value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/* ───── Services grid (used on hub page) ───────────────────── */

export function StudentServicesGrid() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">All programmes</p>
            <h2 className="mt-4 font-display text-[30px] md:text-[40px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Seven programmes, built around the moments students need them.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
              Pick a programme by where you are in your degree and what you are preparing for. Every programme
              ends with a tangible artefact — a project, a credential, or a completed engagement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {studentServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <a
                href={`/students/${s.slug}`}
                className="group/card flex h-full flex-col bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[8px] p-6 md:p-7 transition-all duration-300 hover:border-[var(--color-brand-700)]/35 hover:shadow-[0_18px_40px_-20px_rgba(11,18,32,0.18)] hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)] transition-colors group-hover/card:bg-[var(--color-brand-700)] group-hover/card:text-white group-hover/card:ring-[var(--color-brand-700)]">
                    <s.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                    {s.kicker}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[19px] md:text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-[var(--color-fg)]">
                  {s.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                  {s.tagline}
                </p>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-[var(--color-line)] mt-6">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                    {s.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[var(--color-fg)] group-hover/card:text-[var(--color-brand-700)] transition-colors">
                    Read programme
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-all group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───── Journey — student lifecycle timeline ─────────────── */

export function StudentJourney() {
  const steps = [
    {
      num: '01',
      title: 'Apply',
      body: 'A short application with your year of study, current programme, and what you are preparing for.',
      icon: ClipboardList,
    },
    {
      num: '02',
      title: 'Match',
      body: 'A conversation to confirm the right programme. Selection rounds where the programme requires them.',
      icon: CalendarClock,
    },
    {
      num: '03',
      title: 'Learn',
      body: 'Live cohort sessions, daily practice, mentor reviews, and a project at the centre of every programme.',
      icon: MonitorPlay,
    },
    {
      num: '04',
      title: 'Place',
      body: 'Placement preparation, internship match, or direct hiring routes — depending on the programme you finish.',
      icon: ArrowRight,
    },
  ];

  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="kicker">How a programme runs</p>
          <h2 className="mt-4 font-display text-[30px] md:text-[40px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
            The same shape, every programme.
          </h2>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-[var(--color-brand-700)]"
            />
            <div className="grid grid-cols-4 gap-x-6">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 80} className="relative">
                  <span
                    aria-hidden="true"
                    className="relative z-10 block h-2.5 w-2.5 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)] mb-7 ml-[calc(50%-5px)]"
                  />
                  <div className="text-center">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                      Step {s.num}
                    </p>
                    <h3 className="mt-3 font-display text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[28ch] mx-auto text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <ol className="relative pl-7 space-y-7">
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--color-brand-700)]"
            />
            {steps.map((s) => (
              <li key={s.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[26px] top-1 block h-2.5 w-2.5 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
                />
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                  Step {s.num}
                </p>
                <h3 className="mt-1 font-display text-[19px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--color-fg-3)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ───── Resources rail — links to the four sub-pages ─────── */

const RESOURCE_LINKS = [
  {
    href: '/students/cohorts',
    label: 'Upcoming cohorts',
    body: 'Year-round schedule across all seven programmes — pick the one that fits your calendar.',
    icon: CalendarDays,
  },
  {
    href: '/students/mentors',
    label: 'Mentor network',
    body: 'Engineering, product, data, and people-leadership mentors matched to the question, not by tier.',
    icon: Users,
  },
  {
    href: '/students/outcomes',
    label: 'Career routes',
    body: 'Where students go after the programme — role types, industries, cities, and qualitative stories.',
    icon: TrendingUp,
  },
  {
    href: '/students/fees',
    label: 'Fees & scholarships',
    body: 'Per-programme fee structure, EMI options, and the need-based scholarship process.',
    icon: Wallet,
  },
];

export function StudentResourcesRail() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Find the rest</p>
            <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Four pages that explain what running a programme actually looks like.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.65] text-[var(--color-fg-3)]">
              Cohort calendar, mentor profiles, career routes, and fees — all in one place. Open whichever
              one answers the question you arrived with.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {RESOURCE_LINKS.map((r, i) => (
            <Reveal key={r.href} delay={i * 60}>
              <a
                href={r.href}
                className="group/r flex h-full flex-col bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-[10px] p-6 md:p-7 transition-all hover:border-[var(--color-brand-700)]/35 hover:bg-[var(--color-bg)] hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-[6px] bg-[var(--color-bg)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)] transition-colors group-hover/r:bg-[var(--color-brand-700)] group-hover/r:text-white group-hover/r:ring-[var(--color-brand-700)]">
                    <r.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[18px] md:text-[19px] font-semibold tracking-[-0.018em] text-[var(--color-fg)] leading-[1.25]">
                  {r.label}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-fg-3)]">{r.body}</p>
                <span className="mt-auto pt-5 inline-flex items-center gap-1 text-[12.5px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] border-t border-[var(--color-line)] mt-5 pt-4">
                  <span className="under-slide">Open</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-all group-hover/r:translate-x-0.5 group-hover/r:-translate-y-0.5"
                    strokeWidth={2.25}
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───── Outcomes / "What you get" ─────────────────────────── */

export function StudentOutcomes() {
  const items = [
    'A shipped project on a public repository, reviewed by mentors',
    'A placement-ready CV, written cover letter, and interview practice',
    'A cohort of peers who keep working alongside you after the programme',
    'Direct route to internship and full-time match where the programme supports it',
    'A verifiable credential at the end with a public URL',
    'Continued support through the season you are placing in',
  ];

  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-5">
            <p className="kicker">Outcomes</p>
            <h2 className="mt-4 font-display text-[30px] md:text-[40px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              What every student walks away with.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
              Outcomes are written into every programme up front — what you ship, what you can show, and where
              the work routes when you finish.
            </p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 50}>
                <div className="border-t border-[var(--color-line)] py-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[14px] md:text-[14.5px] leading-[1.55] text-[var(--color-fg)]">
                      {item}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ───── FAQ accordion ─────────────────────────────────────── */

export function StudentFaq({
  faqs,
  kicker = 'Frequently asked',
  title = 'Questions students ask before joining.',
}: {
  faqs: { q: string; a: string }[];
  kicker?: string;
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-5">
            <p className="kicker">{kicker}</p>
            <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
              Cannot find your question here? The fastest route to an answer is the Talk-to-us link at the
              bottom of every page.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-[var(--color-line)]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-[var(--color-line)]">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group/q flex w-full items-baseline justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 shrink-0 text-[var(--color-fg-5)] transition-transform duration-300',
                          isOpen && 'rotate-180 text-[var(--color-brand-700)]',
                        )}
                        strokeWidth={2}
                      />
                    </button>
                    <div
                      className={cn(
                        'grid transition-[grid-template-rows] duration-300 ease-out',
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 max-w-[60ch] text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── CTA band — closing call to action ────────────────── */

export function StudentCtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-[var(--color-brand-950)] text-white">
      <Container>
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
            <div className="lg:col-span-7">
              <p className="kicker kicker-on-dark">Next step</p>
              <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
                {title}
              </h2>
              <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/70 text-pretty">
                {body}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                <a
                  href={primary.href}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[14px] font-semibold text-[var(--color-brand-950)] transition-colors hover:bg-white/90"
                >
                  {primary.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </a>
                {secondary && (
                  <a
                    href={secondary.href}
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/30 transition-colors hover:ring-white/60"
                  >
                    {secondary.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── Two-column "About this programme" ─────────────────── */

export function ProgrammeOverview({
  body,
  audience,
  prerequisites,
}: {
  body: string;
  audience: string[];
  prerequisites: string[];
}) {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-7">
            <p className="kicker">About the programme</p>
            <p className="mt-5 font-display text-[22px] md:text-[26px] lg:text-[30px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
              {body}
            </p>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <SidePanel title="Who it is for" items={audience} />
            <SidePanel title="What you need" items={prerequisites} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SidePanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="kicker">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-baseline gap-3 text-[14px] leading-[1.55] text-[var(--color-fg-3)]">
            <span
              aria-hidden="true"
              className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-700)]"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───── Curriculum / module list ──────────────────────────── */

export function CurriculumList({
  modules,
  kicker = 'Curriculum',
  title = 'How the programme is structured.',
}: {
  modules: { title: string; body: string }[];
  kicker?: string;
  title?: string;
}) {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <p className="kicker">{kicker}</p>
            <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              {title}
            </h2>
          </div>
        </div>

        <ol className="border-t border-[var(--color-fg)]">
          {modules.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 50}>
              <div className="border-b border-[var(--color-line)] py-7 md:py-9">
                <div className="grid grid-cols-12 gap-x-6 gap-y-3">
                  <span className="col-span-12 md:col-span-2 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    {String(i + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
                  </span>
                  <h3 className="col-span-12 md:col-span-5 font-display text-[18px] md:text-[20px] font-semibold leading-[1.22] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                    {m.title}
                  </h3>
                  <p className="col-span-12 md:col-span-5 text-[14px] md:text-[14.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                    {m.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ───── Programme-level outcomes ───────────────────────────── */

export function ProgrammeOutcomes({
  outcomes,
  kicker = 'Outcomes',
  title = 'What you walk away with.',
}: {
  outcomes: string[];
  kicker?: string;
  title?: string;
}) {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="kicker">{kicker}</p>
          <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
            {title}
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {outcomes.map((o, i) => (
            <Reveal as="li" key={i} delay={i * 60}>
              <div className="h-full bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-[8px] p-6 md:p-7">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  Outcome {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-4 font-display text-[16px] md:text-[17px] font-semibold leading-[1.35] tracking-[-0.012em] text-[var(--color-fg)] text-balance">
                  {o}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───── Other services rail (cross-link) ──────────────────── */

export function OtherProgrammesRail({ excludeSlug }: { excludeSlug: string }) {
  const others = studentServices.filter((s) => s.slug !== excludeSlug).slice(0, 3);
  return (
    <section className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] section-y">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
          <div>
            <p className="kicker">Other programmes</p>
            <h2 className="mt-2 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
              Continue exploring.
            </h2>
          </div>
          <a
            href="/students"
            className="group inline-flex items-center gap-1.5 self-start text-[12.5px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]"
          >
            <span className="under-slide">All programmes</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {others.map((o) => (
            <a
              key={o.slug}
              href={`/students/${o.slug}`}
              className="group/c flex flex-col bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[8px] p-6 transition-all hover:border-[var(--color-brand-700)]/35 hover:-translate-y-0.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)] transition-colors group-hover/c:bg-[var(--color-brand-700)] group-hover/c:text-white group-hover/c:ring-[var(--color-brand-700)]">
                <o.icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                {o.name}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-fg-3)] line-clamp-2">{o.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--color-fg)] group-hover/c:text-[var(--color-brand-700)]">
                Read programme
                <ArrowUpRight
                  className="h-3 w-3 transition-all group-hover/c:translate-x-0.5 group-hover/c:-translate-y-0.5"
                  strokeWidth={2.25}
                />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───── Page wrapper that includes Header + Footer ────────── */

export function StudentPageShell({ children }: { children: ReactNode }) {
  return <main className="flex-1">{children}</main>;
}

/* ───── Tiny helper — info chip used in service pages ─────── */

export function InfoChip({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 border border-[var(--color-line)] rounded-[8px] px-4 py-3 bg-[var(--color-bg)]">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[5px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
          {label}
        </p>
        <p className="mt-0.5 text-[13px] font-medium text-[var(--color-fg)]">{value}</p>
      </div>
    </div>
  );
}

/* ───── Contact strip — used on apply page ──────────────── */

export function ContactStrip() {
  return (
    <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-10 md:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8">
          <ContactItem icon={Mail} label="Email" value="students@alphinix.in" href="mailto:students@alphinix.in" />
          <ContactItem icon={Phone} label="Phone" value="+91 00000 00000" href="tel:+910000000000" />
          <ContactItem
            icon={CalendarClock}
            label="Office hours"
            value="Mon — Sat · 10:00–19:00 IST"
          />
        </div>
      </Container>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-[var(--color-bg)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
          {label}
        </p>
        <p className="mt-1 text-[14.5px] font-medium text-[var(--color-fg)]">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="group flex items-start gap-3 hover:text-[var(--color-brand-700)] transition-colors">
      {inner}
    </a>
  ) : (
    <div className="flex items-start gap-3">{inner}</div>
  );
}
