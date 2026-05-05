import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight, Clock, Layers3 } from 'lucide-react';
import { hiringServices } from '@/data/segmentServices';

const METRICS = [
  { value: 'XX d',  label: 'Average time-to-shortlist',     sub: 'Across roles, last 12 months' },
  { value: 'XX %',  label: 'Average screen-to-offer rate',  sub: 'Through our screening pipeline' },
  { value: '5 / 5', label: 'Audience routes',                sub: 'Cross-segment intern + lateral supply' },
];

const PROCESS = [
  { phase: 'Brief',     body: 'A scoping conversation. JD review, must-have vs. nice-to-have split, time-to-fill window agreed.' },
  { phase: 'Source',    body: 'Active sourcing across our pre-screened cohort, internship bench, and external network.' },
  { phase: 'Screen',    body: 'A first-round technical and fit screen with a written candidate report. We share the report; you call the shots.' },
  { phase: 'Forward',   body: 'Forwarded shortlist with a confidence note per candidate, your interview slots booked, your panel coordinated.' },
  { phase: 'Close',     body: 'Offer roll-out coordination, notice-period management, and a 90-day post-join check-in.' },
];

export function HiringHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — split: speed statement on left, metrics on right */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16">
          <Container>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
              Audience 05 / Hiring teams
            </p>
            <h1 className="mt-6 font-display text-[40px] md:text-[60px] lg:text-[72px] font-semibold leading-[1.0] tracking-[-0.028em] text-[var(--color-fg)] text-balance max-w-5xl">
              Trained candidates,
              <br />
              <span className="text-[var(--color-brand-700)]">ready to start work.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-[15.5px] md:text-[17px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
              Permanent, contract, RPO, and high-volume drives — supplied from the same talent pool we
              train. Every candidate carries a screening report. Every engagement runs against a fixed
              time-to-fill.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
              >
                Open a role
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
              >
                See the process
              </a>
            </div>
          </Container>
        </section>

        {/* Metrics band — dark surface, big numbers as design */}
        <section className="bg-[var(--color-fg)] text-white py-12 md:py-16">
          <Container>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-4 w-4 text-[var(--color-brand-300)]" strokeWidth={2.25} />
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)]">
                Operational metrics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 lg:gap-x-20 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {METRICS.map((m, i) => (
                <Reveal key={m.label} delay={i * 80}>
                  <div className={i === 0 ? 'md:pr-12' : 'md:px-12 first:md:pl-0 last:md:pr-0 pt-8 md:pt-0'}>
                    <p className="font-display text-[64px] md:text-[88px] lg:text-[112px] font-semibold leading-[0.88] tracking-[-0.04em] text-white">
                      {m.value}
                    </p>
                    <p className="mt-4 font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.012em] text-white">
                      {m.label}
                    </p>
                    <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/50">
                      {m.sub}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 max-w-md">
              Numbers above are placeholders — final figures shared in writing as part of the engagement
              proposal.
            </p>
          </Container>
        </section>

        {/* Services — manifest list (left index + right expanded copy on hover/active) */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-10 md:mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Services</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Six routes to ready-to-start hires.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Pick the route that fits the role and the urgency. All six run on a single time-to-fill SLA
                  with a written candidate report at every screen.
                </p>
              </div>
            </div>

            {/* Manifest grid — each item has number, name, brief, arrow */}
            <ol className="border-t-2 border-[var(--color-fg)]">
              {hiringServices.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 50}>
                  <a
                    href={`/hiring/${s.slug}`}
                    className="row-hover group/h grid grid-cols-12 items-baseline gap-x-3 lg:gap-x-8 gap-y-3 border-b border-[var(--color-line)] py-7 md:py-9"
                  >
                    <span className="col-span-2 sm:col-span-1 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[0.9] tracking-[-0.025em] text-[var(--color-brand-700)] tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="col-span-10 sm:col-span-4 font-display text-[20px] md:text-[24px] lg:text-[28px] font-semibold tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                      <span className="under-slide">{s.name}</span>
                    </h3>
                    <p className="col-span-12 sm:col-span-6 text-[13.5px] md:text-[14.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                      {s.summary}
                    </p>
                    <ArrowUpRight
                      className="col-span-12 sm:col-span-1 ml-auto h-5 w-5 text-[var(--color-fg-5)] transition-all group-hover/h:text-[var(--color-brand-700)] group-hover/h:translate-x-0.5 group-hover/h:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* Process — horizontal numbered phase strip on canvas */}
        <section id="process" className="bg-[var(--color-canvas)] py-16 md:py-20 lg:py-24 border-y border-[var(--color-line)]">
          <Container>
            <div className="max-w-3xl mb-12 md:mb-16">
              <div className="flex items-center gap-2 mb-3">
                <Layers3 className="h-4 w-4 text-[var(--color-brand-700)]" strokeWidth={2.25} />
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                  How we source
                </p>
              </div>
              <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                Five-phase process. One time-to-fill SLA.
              </h2>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-x-6 lg:gap-x-8">
              {PROCESS.map((p, i) => (
                <Reveal as="li" key={p.phase} delay={i * 60}>
                  <article>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-display text-[22px] md:text-[24px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                      {p.phase}
                    </h3>
                    <span aria-hidden="true" className="mt-3 block h-px w-12 bg-[var(--color-brand-700)]" />
                    <p className="mt-4 text-[13.5px] md:text-[14px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* Closing CTA */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Open a role</p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Send the JD. We respond with a shortlist and a time-to-fill commitment.
                </h2>
                <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  One email or a short call is enough to start. Permanent, contract, intern, or RPO — we route
                  the brief to the right pipeline within the first conversation.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-fg)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-700)]"
                  >
                    Open a role
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] ring-1 ring-inset ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    All segments
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
