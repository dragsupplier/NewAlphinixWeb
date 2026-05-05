import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  caseStudies,
  caseStudySegments,
  type CaseStudy,
  type CaseStudySegment,
} from '@/data/caseStudies';

const SEGMENT_NOTES: Record<CaseStudySegment, string> = {
  Colleges:
    'Multi-year engagements with engineering colleges and polytechnic institutes. Placement, accreditation, faculty, and lab infrastructure.',
  Schools: 'K-12 engagements covering STEM, ATL, and the operational cadence around them.',
  Businesses: 'Software, replatforms, and applied AI delivered into mid-market and growth-stage teams.',
  Hiring: 'Permanent, contract, RPO, and bulk drives — supplied from the same pool we train.',
};

export function CaseStudies() {
  const featured = caseStudies.find((c) => c.featured) ?? caseStudies[0];
  const grouped: Array<{ segment: CaseStudySegment; items: CaseStudy[] }> = caseStudySegments.map(
    (segment) => ({
      segment,
      items: caseStudies.filter((c) => c.segment === segment && c.slug !== featured.slug),
    }),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — masthead style, single statement, large index */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-14 border-b border-[var(--color-line)]">
          <Container>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
              Case studies / Volume 01
            </p>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
              <h1 className="lg:col-span-9 font-display text-[44px] md:text-[68px] lg:text-[96px] font-semibold leading-[0.96] tracking-[-0.03em] text-[var(--color-fg)] text-balance">
                Selected
                <br />
                engagements.
              </h1>
              <div className="lg:col-span-3 lg:border-l lg:border-[var(--color-line)] lg:pl-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                  Across
                </p>
                <p className="mt-3 font-display text-[44px] md:text-[56px] font-semibold leading-[0.9] tracking-[-0.03em] text-[var(--color-fg)] tabular-nums">
                  {String(caseStudies.length).padStart(2, '0')}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-4)]">
                  client engagements · {caseStudySegments.length} segments
                </p>
              </div>
            </div>
            <p className="mt-9 max-w-2xl text-[16px] md:text-[17.5px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
              A short index of work shipped across colleges, schools, businesses, and hiring teams.
              Names are placeholders. Numbers are placeholders. The structure of the work is real.
            </p>
          </Container>
        </section>

        {/* Feature case study — full editorial layout */}
        <section className="bg-[var(--color-canvas)] border-b border-[var(--color-line)] py-16 md:py-20 lg:py-24">
          <Container>
            <p className="kicker">Feature</p>
            <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance max-w-3xl">
              {featured.title}
            </h2>

            <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
              {/* Left — narrative blocks */}
              <div className="lg:col-span-7 space-y-10">
                <Reveal>
                  <div className="border-l-2 border-[var(--color-brand-700)] pl-5">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                      Brief
                    </p>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-2)] max-w-prose">
                      {featured.client} · {featured.segment}. {featured.problem}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <div className="border-l-2 border-[var(--color-fg)] pl-5">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg)]">
                      Approach
                    </p>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-2)] max-w-prose">
                      {featured.outcome}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={160}>
                  <div className="border-l-2 border-[var(--color-fg-5)] pl-5">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-4)]">
                      Scope
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {featured.scope.map((s) => (
                        <li
                          key={s}
                          className="text-[14.5px] md:text-[15px] leading-[1.6] text-[var(--color-fg-2)]"
                        >
                          — {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              {/* Right — outcome metric tile + meta */}
              <aside className="lg:col-span-5 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                  Headline outcome
                </p>
                <p className="mt-5 font-display text-[88px] md:text-[120px] lg:text-[144px] font-semibold leading-[0.84] tracking-[-0.04em] text-[var(--color-fg)] tabular-nums">
                  {featured.outcomeMetric}
                </p>
                <p className="mt-4 max-w-xs font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  {featured.outcomeMetricLabel}
                </p>

                <dl className="mt-10 space-y-5">
                  <div>
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                      Client
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] font-semibold text-[var(--color-fg-2)]">
                      {featured.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                      Segment
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] font-semibold text-[var(--color-fg-2)]">
                      {featured.segment}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                      Timeline
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] font-semibold text-[var(--color-fg-2)]">
                      {featured.timeline}
                    </dd>
                  </div>
                </dl>

                <p className="mt-10 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                  Outcome figure is a placeholder · final figures shared in writing per engagement.
                </p>
              </aside>
            </div>
          </Container>
        </section>

        {/* Index by segment — column-per-segment grid (no Students column) */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 mb-12 md:mb-14 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">The index</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Engagements, by segment.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Each column is a segment we run a separate practice for. Open one to read the brief,
                  the approach, and the outcome metric we report against.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-8 lg:divide-x lg:divide-[var(--color-line)]">
              {grouped.map((g, gi) => (
                <div key={g.segment} className={gi === 0 ? 'lg:pr-6' : 'lg:px-6 last:lg:pr-0'}>
                  <div className="border-t-2 border-[var(--color-fg)] pt-5">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      Segment {String(gi + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 font-display text-[22px] md:text-[26px] font-semibold tracking-[-0.022em] text-[var(--color-fg)]">
                      {g.segment}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.6] text-[var(--color-fg-3)]">
                      {SEGMENT_NOTES[g.segment]}
                    </p>
                  </div>

                  <ol className="mt-6 space-y-6">
                    {g.items.length === 0 ? (
                      <li className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                        Featured engagement above is the only one currently published in this segment.
                      </li>
                    ) : (
                      g.items.map((c, i) => (
                        <Reveal as="li" key={c.slug} delay={i * 60}>
                          <a
                            href={`/case-studies/${c.slug}`}
                            className="group/c block border-t border-[var(--color-line)] pt-5"
                          >
                            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-4)]">
                              {c.kicker} · {c.client}
                            </p>
                            <h4 className="mt-2 font-display text-[18px] md:text-[20px] font-semibold leading-[1.15] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                              <span className="under-slide">{c.title}</span>
                            </h4>
                            <p className="mt-3 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                              {c.problem}
                            </p>
                            <div className="mt-4 flex items-baseline gap-3">
                              <p className="font-display text-[28px] md:text-[32px] font-semibold leading-[0.9] tracking-[-0.025em] text-[var(--color-brand-700)] tabular-nums">
                                {c.outcomeMetric}
                              </p>
                              <p className="text-[12px] uppercase tracking-[0.14em] font-mono text-[var(--color-fg-4)]">
                                {c.outcomeMetricLabel}
                              </p>
                            </div>
                            <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg)] transition-colors group-hover/c:text-[var(--color-brand-700)]">
                              Read engagement
                              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                            </span>
                          </a>
                        </Reveal>
                      ))
                    )}
                  </ol>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Operating discipline — short, two-column statement on dark */}
        <section className="bg-[var(--color-fg)] text-white py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-5">
                <p className="kicker kicker-on-dark">How these get reported</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
                  Numbers in writing. Reviews on the calendar. One named owner.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-10">
                <dl className="divide-y divide-white/10">
                  <div className="grid grid-cols-12 gap-x-4 py-5 md:py-6">
                    <dt className="col-span-12 md:col-span-4 font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.018em] text-white">
                      Reporting cadence
                    </dt>
                    <dd className="col-span-12 md:col-span-8 mt-1 md:mt-0 text-[14px] md:text-[14.5px] leading-[1.65] text-white/70">
                      A written review at the agreed cadence. Quarterly is the default; we run monthly
                      where the engagement demands it.
                    </dd>
                  </div>
                  <div className="grid grid-cols-12 gap-x-4 py-5 md:py-6">
                    <dt className="col-span-12 md:col-span-4 font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.018em] text-white">
                      Outcome metrics
                    </dt>
                    <dd className="col-span-12 md:col-span-8 mt-1 md:mt-0 text-[14px] md:text-[14.5px] leading-[1.65] text-white/70">
                      Agreed in the engagement plan, in writing, before work starts. Reported against,
                      in writing, when the cycle closes.
                    </dd>
                  </div>
                  <div className="grid grid-cols-12 gap-x-4 py-5 md:py-6">
                    <dt className="col-span-12 md:col-span-4 font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.018em] text-white">
                      Accountability
                    </dt>
                    <dd className="col-span-12 md:col-span-8 mt-1 md:mt-0 text-[14px] md:text-[14.5px] leading-[1.65] text-white/70">
                      One named owner from your side, one from ours. Reporting lines stay short.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Container>
        </section>

        {/* Closing — open a similar engagement */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Open a similar engagement</p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Tell us the segment, the outcome, and the cycle. We respond with a draft plan.
                </h2>
                <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  A short brief is enough to start. We come back within one working week with a named
                  owner and a written plan against the cadence we would propose.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
                  >
                    Brief us
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
