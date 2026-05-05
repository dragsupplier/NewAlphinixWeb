import { useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { Code2, PenTool, RefreshCw, Users, ArrowUpRight, Filter as FilterIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { StudentCtaBand, StudentPageShell } from '@/components/sections/student/StudentSections';
import { cn } from '@/lib/utils';

type Area = 'Engineering' | 'Product' | 'Data' | 'People & ops';

type Mentor = {
  id: string;
  initials: string;
  area: Area;
  role: string;
  context: string;
  experience: string;
  focus: string[];
};

/* No real names. Each mentor is described by role + organisation type + focus. */
const MENTORS: Mentor[] = [
  { id: 'm1',  initials: 'AE', area: 'Engineering',   role: 'Senior software engineer', context: 'Product company · Bengaluru',     experience: '8+ years', focus: ['System design', 'Distributed systems', 'Career pivots'] },
  { id: 'm2',  initials: 'BE', area: 'Engineering',   role: 'Staff engineer',           context: 'Indian SaaS · remote',           experience: '12+ years', focus: ['Backend architecture', 'Hiring loops', 'Tech-lead transition'] },
  { id: 'm3',  initials: 'CE', area: 'Engineering',   role: 'Frontend engineer',        context: 'Series-B startup · Pune',         experience: '5+ years',  focus: ['React internals', 'Design system work', 'Internship-to-FT'] },
  { id: 'm4',  initials: 'DE', area: 'Engineering',   role: 'Mobile engineer',          context: 'Consumer app · Bengaluru',        experience: '6+ years',  focus: ['React Native', 'iOS / Android trade-offs', 'App-store work'] },
  { id: 'm5',  initials: 'EE', area: 'Engineering',   role: 'Engineering manager',      context: 'IT services · Pune',              experience: '15+ years', focus: ['Team leadership', 'Tech-leadership rounds', 'Compensation conversations'] },

  { id: 'm6',  initials: 'AP', area: 'Product',       role: 'Senior product manager',   context: 'Fintech · Mumbai',                experience: '7+ years',  focus: ['PM case prep', 'Switching from engineering', 'B2B vs B2C'] },
  { id: 'm7',  initials: 'BP', area: 'Product',       role: 'Product designer',         context: 'Design studio · remote',          experience: '6+ years',  focus: ['Portfolio reviews', 'Designer-engineer collaboration', 'Junior to mid'] },
  { id: 'm8',  initials: 'CP', area: 'Product',       role: 'Founding designer',        context: 'Early-stage startup · Bengaluru', experience: '8+ years',  focus: ['Working at zero-to-one stage', 'Design hiring', 'Brand vs product'] },

  { id: 'm9',  initials: 'AD', area: 'Data',          role: 'Analytics engineer',       context: 'Fintech · Bengaluru',             experience: '5+ years',  focus: ['SQL interviews', 'dbt and modelling', 'Junior data roles'] },
  { id: 'm10', initials: 'BD', area: 'Data',          role: 'ML engineer',              context: 'Consumer-tech · remote',          experience: '7+ years',  focus: ['Foundation models', 'RAG and eval', 'Junior ML hiring'] },
  { id: 'm11', initials: 'CD', area: 'Data',          role: 'Data scientist',           context: 'E-commerce · Bengaluru',          experience: '6+ years',  focus: ['Statistics rounds', 'Career switch from research', 'Industry data work'] },

  { id: 'm12', initials: 'AO', area: 'People & ops',  role: 'Talent partner',           context: 'IT services · Pune',              experience: '10+ years', focus: ['CV reviews', 'Salary negotiation', 'Notice-period and offer handling'] },
  { id: 'm13', initials: 'BO', area: 'People & ops',  role: 'Operations leader',        context: 'Mid-stage startup · remote',      experience: '12+ years', focus: ['Non-engineering routes', 'Programme management', 'BD and partnerships'] },
];

const AREA_META: Record<'all' | Area, { label: string; icon: LucideIcon | null; description: string }> = {
  'all':            { label: 'All areas',      icon: null,      description: 'Engineering, product, data, and people-leadership mentors across thirteen profiles.' },
  'Engineering':    { label: 'Engineering',    icon: Code2,     description: 'Hands-on engineers from product companies, startups, and services firms.' },
  'Product':        { label: 'Product',        icon: PenTool,   description: 'Product managers and designers from companies that build at scale.' },
  'Data':           { label: 'Data',           icon: RefreshCw, description: 'Analytics engineers, data scientists, and ML engineers across industries.' },
  'People & ops':   { label: 'People & ops',   icon: Users,     description: 'Operations and people-leaders for students considering non-engineering routes.' },
};

const ALL_AREAS: ('all' | Area)[] = ['all', 'Engineering', 'Product', 'Data', 'People & ops'];

export function StudentMentors() {
  const [area, setArea] = useState<'all' | Area>('all');

  const filtered = useMemo(() => {
    if (area === 'all') return MENTORS;
    return MENTORS.filter((m) => m.area === area);
  }, [area]);

  const meta = AREA_META[area];

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
                  <Users className="h-3 w-3" strokeWidth={2.25} />
                  Mentors
                </span>
                <h1 className="mt-5 font-display text-[36px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                  Mentor network.{' '}
                  <span className="text-[var(--color-brand-700)]">Matched to the question, not by tier.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-[15.5px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)]">
                  Every student session is paired with a mentor whose own background fits the goal in the
                  conversation. Mentors below show the kinds of people we match with — names are shared
                  privately once a session is scheduled.
                </p>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-8 grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5">
                <MetaItem label="Areas" value="Eng · PM · Data · Ops" />
                <MetaItem label="Format" value="One-on-one online" />
                <MetaItem label="Match" value="By question, not tier" />
              </div>
            </div>
          </Container>
        </section>

        {/* Filter row */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-5">
          <Container>
            <div className="flex items-center gap-3 overflow-x-auto snap-strip">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] shrink-0">
                <FilterIcon className="h-3 w-3" strokeWidth={2.25} />
                Filter
              </span>
              {ALL_AREAS.map((a) => {
                const m = AREA_META[a];
                const active = area === a;
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setArea(a)}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors whitespace-nowrap shrink-0',
                      active
                        ? 'bg-[var(--color-brand-700)] text-white border-[var(--color-brand-700)]'
                        : 'bg-[var(--color-bg)] text-[var(--color-fg-2)] border-[var(--color-line)] hover:border-[var(--color-line-2)] hover:text-[var(--color-fg)]',
                    )}
                  >
                    {m.icon && <m.icon className="h-3.5 w-3.5" strokeWidth={1.75} />}
                    {m.label}
                  </button>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Area description */}
        <section className="bg-[var(--color-bg)] pt-10 md:pt-14">
          <Container>
            <div className="max-w-2xl">
              <p className="kicker">{meta.label}</p>
              <p className="mt-3 font-display text-[20px] md:text-[24px] font-semibold leading-[1.3] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                {meta.description}
              </p>
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)] tabular-nums">
                {String(filtered.length).padStart(2, '0')} mentor profiles
              </p>
            </div>
          </Container>
        </section>

        {/* Mentor grid */}
        <section className="bg-[var(--color-bg)] pb-16 md:pb-20 pt-10 md:pt-12">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filtered.map((m, i) => (
                <Reveal key={m.id} delay={i * 50}>
                  <MentorCard mentor={m} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <StudentCtaBand
          title="Ready to book a mentor session?"
          body="Career-guidance sessions are matched per student. Tell us the question on your mind and we will pair you with a mentor whose own background fits the goal."
          primary={{ label: 'Book a session', href: '/students/career-guidance' }}
          secondary={{ label: 'Talk to us', href: '/contact' }}
        />
      </StudentPageShell>
      <Footer />
    </div>
  );
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  const Icon = AREA_META[mentor.area].icon!;
  return (
    <article className="group/m h-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-6 transition-all hover:border-[var(--color-brand-700)]/35 hover:-translate-y-0.5">
      {/* Top row: avatar + area chip */}
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] font-display text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-brand-700)]">
          {mentor.initials}
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-[9.5px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] rounded-[3px] px-2 py-1">
          <Icon className="h-3 w-3" strokeWidth={1.75} />
          {mentor.area}
        </span>
      </div>

      {/* Role + context */}
      <div className="mt-5">
        <h3 className="font-display text-[17px] md:text-[18px] font-semibold leading-[1.25] tracking-[-0.012em] text-[var(--color-fg)]">
          {mentor.role}
        </h3>
        <p className="mt-1 text-[13px] text-[var(--color-fg-3)]">{mentor.context}</p>
      </div>

      {/* Experience */}
      <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
        {mentor.experience}
      </p>

      {/* Focus areas */}
      <div className="mt-5 pt-5 border-t border-[var(--color-line)]">
        <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] font-semibold text-[var(--color-fg-5)] mb-2.5">
          Focus areas
        </p>
        <ul className="space-y-1">
          {mentor.focus.map((f) => (
            <li key={f} className="flex items-baseline gap-2 text-[12.5px] leading-[1.5] text-[var(--color-fg-3)]">
              <span aria-hidden="true" className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-700)]" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="/students/career-guidance"
        className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
      >
        <span className="under-slide">Book a session</span>
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform group-hover/m:translate-x-0.5 group-hover/m:-translate-y-0.5"
          strokeWidth={2.25}
        />
      </a>
    </article>
  );
}

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
