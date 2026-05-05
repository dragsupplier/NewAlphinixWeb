import { useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight, Filter as FilterIcon, CalendarDays } from 'lucide-react';
import { studentServices } from '@/data/studentServices';
import { StudentCtaBand, StudentPageShell } from '@/components/sections/student/StudentSections';
import { cn } from '@/lib/utils';

type Status = 'Open' | 'Filling fast' | 'Waitlist' | 'Closed';

type Cohort = {
  programmeSlug: string;
  programmeName: string;
  month: string;
  startDate: string;
  duration: string;
  format: string;
  status: Status;
};

const COHORTS: Cohort[] = [
  { programmeSlug: 'industrial-training',  programmeName: 'Industrial training',     month: 'February 2026', startDate: '04 Feb', duration: '6 weeks',  format: 'Hybrid · Pune',    status: 'Filling fast' },
  { programmeSlug: 'placement-prep',       programmeName: 'Placement preparation',  month: 'February 2026', startDate: '11 Feb', duration: '8 weeks',  format: 'Online · weekends',status: 'Open' },
  { programmeSlug: 'coding-programs',      programmeName: 'Coding · Web track',     month: 'February 2026', startDate: '18 Feb', duration: '10 weeks', format: 'Hybrid · weekday eve', status: 'Open' },
  { programmeSlug: 'skill-development',    programmeName: 'Workshop · Communication', month: 'February 2026', startDate: '24 Feb', duration: '3 days',   format: 'Online live',     status: 'Open' },

  { programmeSlug: 'industrial-training',  programmeName: 'Industrial training',     month: 'March 2026',    startDate: '04 Mar', duration: '6 weeks',  format: 'Hybrid · Pune',    status: 'Open' },
  { programmeSlug: 'certifications',       programmeName: 'Cert · Applied AI',      month: 'March 2026',    startDate: '11 Mar', duration: '6 weeks',  format: 'Self-paced + live', status: 'Open' },
  { programmeSlug: 'coding-programs',      programmeName: 'Coding · Mobile track',  month: 'March 2026',    startDate: '18 Mar', duration: '10 weeks', format: 'Hybrid',          status: 'Open' },
  { programmeSlug: 'career-guidance',      programmeName: 'Career guidance',         month: 'March 2026',    startDate: 'Rolling', duration: 'Three sessions / 6 weeks', format: 'Online · 1:1',    status: 'Open' },

  { programmeSlug: 'placement-prep',       programmeName: 'Placement preparation',  month: 'April 2026',    startDate: '08 Apr', duration: '8 weeks',  format: 'Online · weekends',status: 'Open' },
  { programmeSlug: 'internships',          programmeName: 'Internship match cycle',  month: 'April 2026',    startDate: '15 Apr', duration: '12-24 weeks', format: 'Remote / on-site', status: 'Open' },
  { programmeSlug: 'industrial-training',  programmeName: 'Industrial training',     month: 'April 2026',    startDate: '22 Apr', duration: '6 weeks',  format: 'Hybrid · Pune',    status: 'Open' },
  { programmeSlug: 'skill-development',    programmeName: 'Workshop · Interview readiness', month: 'April 2026',    startDate: '28 Apr', duration: '3 days',   format: 'Online + on-call',status: 'Open' },

  { programmeSlug: 'coding-programs',      programmeName: 'Coding · Full-stack track', month: 'May 2026', startDate: '06 May', duration: '12 weeks', format: 'Hybrid', status: 'Waitlist' },
  { programmeSlug: 'certifications',       programmeName: 'Cert · System design',   month: 'May 2026',      startDate: '13 May', duration: '5 weeks',  format: 'Self-paced + live', status: 'Open' },
  { programmeSlug: 'placement-prep',       programmeName: 'Placement preparation',  month: 'May 2026',      startDate: '20 May', duration: '8 weeks',  format: 'Online · weekends',status: 'Open' },
];

const ALL_FILTER = 'All programmes';

export function StudentCohorts() {
  const [filter, setFilter] = useState<string>(ALL_FILTER);

  const filtered = useMemo(() => {
    if (filter === ALL_FILTER) return COHORTS;
    return COHORTS.filter((c) => c.programmeSlug === filter);
  }, [filter]);

  // Group by month, preserving order of appearance
  const grouped = useMemo(() => {
    const map = new Map<string, Cohort[]>();
    filtered.forEach((c) => {
      if (!map.has(c.month)) map.set(c.month, []);
      map.get(c.month)!.push(c);
    });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StudentPageShell>
        {/* Hero */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-canvas)] border border-[var(--color-line)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
                  <CalendarDays className="h-3 w-3" strokeWidth={2.25} />
                  Cohorts
                </span>
                <h1 className="mt-5 font-display text-[36px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                  Upcoming cohorts.{' '}
                  <span className="text-[var(--color-brand-700)]">Pick the one that fits your calendar.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-[15.5px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)]">
                  Cohorts run year-round across all seven programmes. Filter by programme to see the schedule;
                  every cohort below is taking applications unless marked otherwise.
                </p>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-8 grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5">
                <MetaItem label="Cycle" value="Year-round" />
                <MetaItem label="Cohort size" value="Small group" />
                <MetaItem label="Apply" value="Rolling basis" />
              </div>
            </div>
          </Container>
        </section>

        {/* Filter row */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-5">
          <Container>
            <div className="flex items-center gap-4 overflow-x-auto snap-strip">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] shrink-0">
                <FilterIcon className="h-3 w-3" strokeWidth={2.25} />
                Filter
              </span>
              <FilterChip active={filter === ALL_FILTER} onClick={() => setFilter(ALL_FILTER)}>
                {ALL_FILTER}
              </FilterChip>
              {studentServices.map((s) => (
                <FilterChip
                  key={s.slug}
                  active={filter === s.slug}
                  onClick={() => setFilter(s.slug)}
                >
                  {s.name}
                </FilterChip>
              ))}
            </div>
          </Container>
        </section>

        {/* Schedule grouped by month */}
        <section className="bg-[var(--color-bg)] py-14 md:py-20">
          <Container>
            {grouped.length === 0 ? (
              <p className="text-[15px] text-[var(--color-fg-3)]">No cohorts match this filter — try another.</p>
            ) : (
              <div className="space-y-12 md:space-y-16">
                {grouped.map(([month, cohorts]) => (
                  <Reveal key={month}>
                    <article>
                      <div className="flex items-baseline justify-between border-b-2 border-[var(--color-fg)] pb-3 mb-2">
                        <h2 className="font-display text-[24px] md:text-[28px] lg:text-[32px] font-semibold tracking-[-0.022em] text-[var(--color-fg)]">
                          {month}
                        </h2>
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)] tabular-nums">
                          {String(cohorts.length).padStart(2, '0')} cohorts
                        </span>
                      </div>

                      <ol>
                        {cohorts.map((c, i) => (
                          <li key={`${c.programmeName}-${i}`} className="border-b border-[var(--color-line)] row-hover">
                            <a
                              href={`/students/${c.programmeSlug}`}
                              className="group/c grid grid-cols-12 items-center gap-x-3 lg:gap-x-6 gap-y-2 py-5 md:py-6"
                            >
                              <span className="col-span-3 sm:col-span-2 font-mono text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                                {c.startDate}
                              </span>
                              <h3 className="col-span-9 sm:col-span-4 font-display text-[15.5px] md:text-[17px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                                <span className="under-slide">{c.programmeName}</span>
                              </h3>
                              <span className="col-span-6 sm:col-span-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-fg-3)]">
                                {c.duration}
                              </span>
                              <span className="col-span-6 sm:col-span-2 text-[12.5px] text-[var(--color-fg-3)]">
                                {c.format}
                              </span>
                              <span className="col-span-9 sm:col-span-1 inline-flex">
                                <StatusPill status={c.status} />
                              </span>
                              <ArrowUpRight
                                className="col-span-3 sm:col-span-1 ml-auto h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover/c:text-[var(--color-brand-700)] group-hover/c:translate-x-0.5 group-hover/c:-translate-y-0.5"
                                strokeWidth={2}
                              />
                            </a>
                          </li>
                        ))}
                      </ol>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </Container>
        </section>

        <StudentCtaBand
          title="Cannot see a cohort that fits?"
          body="Drop us a line with the programme you want and the window you can join in. Where there is enough demand, we open an additional cohort."
          primary={{ label: 'Apply now', href: '/students/apply' }}
          secondary={{ label: 'Talk to us', href: '/contact' }}
        />
      </StudentPageShell>
      <Footer />
    </div>
  );
}

/* ───── helpers ──────────────────────────────────────────── */

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
        {label}
      </p>
      <p className="mt-1.5 font-display text-[15px] md:text-[16px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
        {value}
      </p>
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors whitespace-nowrap shrink-0',
        active
          ? 'bg-[var(--color-brand-700)] text-white border-[var(--color-brand-700)]'
          : 'bg-[var(--color-bg)] text-[var(--color-fg-2)] border-[var(--color-line)] hover:border-[var(--color-line-2)] hover:text-[var(--color-fg)]',
      )}
    >
      {children}
    </button>
  );
}

function StatusPill({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    'Open':         'bg-[var(--color-brand-100)] text-[var(--color-brand-800)]',
    'Filling fast': 'bg-[var(--color-brand-700)] text-white',
    'Waitlist':     'bg-[var(--color-canvas-2)] text-[var(--color-fg-2)]',
    'Closed':       'bg-[var(--color-canvas)] text-[var(--color-fg-5)]',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[9.5px] uppercase tracking-[0.14em] font-semibold rounded-[3px] px-1.5 py-0.5',
        styles[status],
      )}
    >
      {status === 'Filling fast' && (
        <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-white pulse-dot mr-1" />
      )}
      {status}
    </span>
  );
}
