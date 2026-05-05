import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { collegeServices } from '@/data/segmentServices';

const FRAMEWORKS = [
  { code: 'NEP 2020', body: 'Programmes designed against the published policy framework.' },
  { code: 'NAAC',     body: 'Documentation, processes, and evidence support across cycles.' },
  { code: 'NBA',      body: 'Outcome-based education and program-level documentation.' },
  { code: 'AICTE',    body: 'Curriculum and faculty development against model curricula.' },
];

const ENGAGEMENT = [
  { title: 'Discovery',  body: 'A formal scoping conversation with the principal, training officer, or HOD. One named owner from day one.' },
  { title: 'Plan',        body: 'A written engagement plan covering programmes, infrastructure, software, and accreditation work — with a documented review cadence.' },
  { title: 'Delivery',    body: 'Quarterly review cycles, evidence pack production as work is delivered, and a single point of accountability across all workstreams.' },
  { title: 'Continuity',  body: 'Engagements continue across years — refresh cycles, capacity additions, and outcomes tracked across cohorts.' },
];

export function CollegesHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — executive brief style */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-14 border-b border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  Audience 02 / Colleges & Polytechnics
                </p>
                <h1 className="mt-5 font-display text-[36px] md:text-[52px] lg:text-[64px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                  Better placements. Stronger accreditation.
                  <br />
                  <span className="text-[var(--color-brand-700)]">Modern infrastructure.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-[15.5px] md:text-[16.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  An eight-service practice for engineering colleges and polytechnic institutes — placement
                  drives, faculty development, accreditation support, lab infrastructure, and academic-operations
                  software, run under one accountable team.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
                  >
                    Brief us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="#engagement"
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    See the engagement model
                  </a>
                </div>
              </div>

              {/* Right rail — formal index */}
              <aside className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-10 space-y-7">
                <RailItem label="Audience" value="Engineering · Polytechnic · Govt · Pvt" />
                <RailItem label="Engagement length" value="Multi-year, refresh cycles" />
                <RailItem label="Decision-makers we work with" value="Principal · TPO · HOD · Trustee" />
                <RailItem label="Operating from" value="Pune, India" />
              </aside>
            </div>
          </Container>
        </section>

        {/* Numbered services list (NOT cards) — editorial document style */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-10 md:mb-12">
              <div className="lg:col-span-7">
                <p className="kicker">Services</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Eight services. One accountable team.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Each service runs against an agreed cadence and a documentation set. Where two or more
                  services run in parallel, they sit under a single named owner so reporting lines stay short.
                </p>
              </div>
            </div>

            <ol className="border-t-2 border-[var(--color-fg)]">
              {collegeServices.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 50}>
                  <a
                    href={`/colleges/${s.slug}`}
                    className="row-hover group/row grid grid-cols-12 items-baseline gap-x-4 lg:gap-x-8 gap-y-3 border-b border-[var(--color-line)] py-7 md:py-9"
                  >
                    <span className="col-span-2 sm:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="col-span-10 sm:col-span-4 font-display text-[18px] md:text-[20px] lg:text-[22px] font-semibold tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                      <span className="under-slide">{s.name}</span>
                    </h3>
                    <p className="col-span-12 sm:col-span-6 text-[13.5px] md:text-[14.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                      {s.summary}
                    </p>
                    <ArrowUpRight
                      className="col-span-12 sm:col-span-1 ml-auto h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover/row:text-[var(--color-brand-700)] group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* Frameworks manifest — formal compliance band */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-5">
                <p className="kicker">Built around standards</p>
                <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Aligned with the frameworks institutions answer to.
                </h2>
                <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  Programmes and infrastructure are designed against the published guidelines of India's
                  education and technical-education bodies. Credible at audit, accreditation, and policy-level
                  conversations.
                </p>
              </div>

              <ol className="lg:col-span-7 border-t border-[var(--color-fg)]">
                {FRAMEWORKS.map((f, i) => (
                  <li key={f.code} className="border-b border-[var(--color-line)] py-5 md:py-6">
                    <div className="grid grid-cols-12 gap-x-4">
                      <p className="col-span-3 md:col-span-2 font-display text-[22px] md:text-[26px] font-semibold leading-[1] tracking-[-0.025em] text-[var(--color-brand-700)]">
                        {f.code}
                      </p>
                      <p className="col-span-9 md:col-span-9 text-[13.5px] md:text-[14.5px] leading-[1.6] text-[var(--color-fg-3)]">
                        {f.body}
                      </p>
                      <span className="col-span-12 md:col-span-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums md:text-right">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* Engagement model — quarterly cadence statement */}
        <section id="engagement" className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="max-w-4xl">
              <p className="kicker">Engagement model</p>
              <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                Multi-year cadence. Quarterly review cycles. One named owner.
              </h2>
            </div>

            <ol className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10">
              {ENGAGEMENT.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 70}>
                  <article className="border-l-2 border-[var(--color-brand-700)] pl-5">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      Phase {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 font-display text-[20px] md:text-[24px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                      {e.title}
                    </h3>
                    <p className="mt-3 max-w-prose text-[14px] md:text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                      {e.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* Closing CTA */}
        <section className="bg-[var(--color-brand-950)] text-white">
          <Container>
            <div className="py-16 md:py-20 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
                <div className="lg:col-span-7">
                  <p className="kicker kicker-on-dark">Brief us</p>
                  <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
                    Tell us your placement targets, accreditation cycle, or the lab you need.
                  </h2>
                  <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/70">
                    A short email or call is enough to start. We respond with a named owner and a draft
                    engagement plan within one working week.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                    <a
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[14px] font-semibold text-[var(--color-brand-950)] transition-colors hover:bg-white/90"
                    >
                      Brief us
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/30 transition-colors hover:ring-white/60"
                    >
                      All segments
                    </a>
                  </div>
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

function RailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
        {label}
      </p>
      <p className="mt-2 text-[14px] md:text-[15px] font-semibold text-[var(--color-fg)] leading-[1.4]">
        {value}
      </p>
    </div>
  );
}
