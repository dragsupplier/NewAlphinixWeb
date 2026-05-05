import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { openRoles } from '@/data/openRoles';

const PRINCIPLES = [
  {
    title: 'Async by default.',
    body: 'Meetings are the exception, not the routine. Decisions live in writing so anyone can join the thread late and catch up in twenty minutes.',
  },
  {
    title: 'Writing-first collaboration.',
    body: 'A short doc beats a long meeting. Specs, briefs, post-mortems — written, dated, and kept where the next person on the team can find them.',
  },
  {
    title: 'One named owner.',
    body: 'Every engagement, every workstream, has a single accountable name on it. We staff for that, and we protect that.',
  },
  {
    title: 'Specific over impressive.',
    body: 'We say what we did, in numbers, on dates. We do not say "world-class" or "end-to-end" because nobody knows what those mean.',
  },
  {
    title: 'Ship the boring middle.',
    body: 'Most work is unglamorous. We pay attention to the middle of the project — the part everyone else stops watching after the kickoff slide.',
  },
  {
    title: 'Long horizons.',
    body: 'The strongest engagements run for years. We hire for people who want to stay on something long enough to see the second cohort, the second cycle, the second audit.',
  },
];

const HIRING_PHASES = [
  { phase: 'Apply',     body: 'Send a CV and a one-paragraph note on why this role. No cover letter required.' },
  { phase: 'Read',      body: 'A team member reads every application. Reply within ten working days, hire or not.' },
  { phase: 'Talk',      body: 'A 45-minute conversation with the hiring lead. Real work, real questions, no whiteboard riddles.' },
  { phase: 'Make',      body: 'A short, paid take-home or a working session against a real workstream. Scoped to two days, not two weeks.' },
  { phase: 'Decide',    body: 'A written offer or a written no, with reasoning. Either way, you hear back in writing.' },
];

const BENEFITS: Array<{ term: string; body: string }> = [
  {
    term: 'Compensation',
    body: 'Above-market base for the segment we hire in. Annual revision linked to a written performance review.',
  },
  {
    term: 'Time off',
    body: 'Twenty-four working days of leave, plus public holidays. We notice when you do not take it.',
  },
  {
    term: 'Health',
    body: 'Group medical for you and immediate family. Out-patient cover included.',
  },
  {
    term: 'Equipment',
    body: 'A working laptop, a real monitor, a chair you can sit in for nine hours. Refresh on a documented cycle.',
  },
  {
    term: 'Learning',
    body: 'A quarterly budget for books, courses, and conferences. No approval theatre — submit the receipt.',
  },
  {
    term: 'Office',
    body: 'A desk in Pune for everyone, even the remote team, for the days you want to be in.',
  },
];

export function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — culture statement, single column, oversized */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-24 pb-14 md:pb-20">
          <Container>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
              Careers / Now hiring
            </p>
            <h1 className="mt-6 font-display text-[44px] md:text-[68px] lg:text-[88px] font-semibold leading-[0.96] tracking-[-0.03em] text-[var(--color-fg)] text-balance max-w-5xl">
              Join Alphinix.
              <br />
              <span className="text-[var(--color-brand-700)]">Build the unglamorous middle.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
              We hire for the kind of work that is documented, dated, and accountable. Long engagements,
              written reviews, and the discipline to be specific where everyone else is loud. If that
              sounds like the studio you want to spend a few years in, read on.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#open-roles"
                className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
              >
                Open roles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </a>
              <a
                href="#how-we-hire"
                className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
              >
                How we hire
              </a>
            </div>
          </Container>
        </section>

        {/* Working at Alphinix — numbered manifest, two columns */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-12 md:mb-14">
              <div className="lg:col-span-7">
                <p className="kicker">Working at Alphinix</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Six principles. Practised, not posted.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  These are the operating rules of the studio. They are not aspirational. We use them
                  to write specs, decide hires, and hold reviews accountable.
                </p>
              </div>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 md:gap-y-12 border-t-2 border-[var(--color-fg)] pt-12">
              {PRINCIPLES.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 60}>
                  <article className="grid grid-cols-12 gap-x-4">
                    <span className="col-span-2 font-display text-[40px] md:text-[52px] font-semibold leading-[0.9] tracking-[-0.03em] text-[var(--color-brand-700)] tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="col-span-10">
                      <h3 className="font-display text-[20px] md:text-[24px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[14px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)] max-w-prose">
                        {p.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* Open roles — formal table-style list */}
        <section id="open-roles" className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 mb-10 md:mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Open roles</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  {openRoles.length} roles open across the practice.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Click a role to write to the team. We read every application and reply within ten
                  working days, hire or not.
                </p>
              </div>
            </div>

            {/* Table header — only md+ */}
            <div className="hidden md:grid grid-cols-12 gap-x-4 border-y-2 border-[var(--color-fg)] py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-4)]">
              <span className="col-span-1">Idx</span>
              <span className="col-span-5">Role</span>
              <span className="col-span-2">Team</span>
              <span className="col-span-2">Location</span>
              <span className="col-span-2 text-right">Type</span>
            </div>

            <ol className="md:border-t md:border-[var(--color-line)]">
              {openRoles.map((r, i) => (
                <Reveal as="li" key={r.slug} delay={i * 50}>
                  <a
                    href={r.applyEmail}
                    className="row-hover group/row block border-b border-[var(--color-line)] py-5 md:py-6"
                  >
                    <div className="grid grid-cols-12 gap-x-4 gap-y-2 items-baseline">
                      <span className="hidden md:block col-span-1 font-mono text-[11px] tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <div className="col-span-12 md:col-span-5">
                        <h3 className="font-display text-[18px] md:text-[20px] lg:text-[22px] font-semibold tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                          <span className="under-slide">{r.title}</span>
                        </h3>
                        <p className="mt-2 text-[13px] md:text-[13.5px] leading-[1.6] text-[var(--color-fg-3)] max-w-prose">
                          {r.summary}
                        </p>
                        <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                          {r.experience} experience
                        </p>
                      </div>

                      <span className="col-span-6 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-3)]">
                        {r.team}
                      </span>
                      <span className="col-span-6 md:col-span-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-3)]">
                        <MapPin className="h-3 w-3" strokeWidth={2.25} />
                        {r.location}
                      </span>
                      <span className="col-span-12 md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-2)] inline-flex md:justify-end items-center gap-1.5">
                        {r.type}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-[var(--color-fg-5)] transition-all group-hover/row:text-[var(--color-brand-700)] group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5"
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* How we hire — phase strip on dark */}
        <section id="how-we-hire" className="bg-[var(--color-fg)] text-white py-16 md:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mb-12 md:mb-16">
              <p className="kicker kicker-on-dark">How we hire</p>
              <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-white text-balance">
                Five phases. No riddles. Written outcomes.
              </h2>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-x-6 lg:gap-x-8">
              {HIRING_PHASES.map((p, i) => (
                <Reveal as="li" key={p.phase} delay={i * 70}>
                  <article>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)] tabular-nums">
                      Phase {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-display text-[22px] md:text-[24px] font-semibold tracking-[-0.02em] text-white">
                      {p.phase}
                    </h3>
                    <span aria-hidden="true" className="mt-3 block h-px w-12 bg-[var(--color-brand-300)]" />
                    <p className="mt-4 text-[13.5px] md:text-[14px] leading-[1.7] text-white/70 text-pretty">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* Benefits — definition list (no card grid) */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-4">
                <p className="kicker">What you get</p>
                <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  The package, in plain language.
                </h2>
                <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  No glossy benefits page. We list what is in the contract, in the words of the contract.
                </p>
              </div>

              <dl className="lg:col-span-8 lg:border-l lg:border-[var(--color-line)] lg:pl-10 divide-y divide-[var(--color-line)]">
                {BENEFITS.map((b) => (
                  <div key={b.term} className="grid grid-cols-12 gap-x-4 py-5 md:py-6">
                    <dt className="col-span-12 md:col-span-3 font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                      {b.term}
                    </dt>
                    <dd className="col-span-12 md:col-span-9 text-[14px] md:text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
                      {b.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        {/* Closing CTA — open application */}
        <section className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Open application</p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Don’t see your role? Write to us anyway.
                </h2>
                <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  A short note on what you do, where you do it best, and which workstream at Alphinix
                  catches your eye is enough. We file open applications and revisit when the team grows.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                  <a
                    href="mailto:careers@alphinix.in?subject=Open%20application"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-fg)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-700)]"
                  >
                    careers@alphinix.in
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] ring-1 ring-inset ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-bg)]"
                  >
                    About the studio
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
