import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import {
  resourceLibrary,
  resourceSegments,
  type ResourceItem,
  type ResourceSegment,
} from '@/data/resourceLibrary';

const SEGMENT_NOTES: Record<ResourceSegment, string> = {
  Students:
    'Roadmaps and templates we hand to students before placement season. Built around what employers actually screen for.',
  Colleges:
    'Templates and frameworks for the principal’s office, the TPO desk, and the academic head — drawn from live engagements.',
  Schools:
    'Procurement specs, review workbooks, and curriculum planning aids for K-12 STEM and ATL programmes.',
  Businesses:
    'Decision frameworks for engineering and product teams shipping software, replatforms, and applied-AI features.',
  Hiring:
    'The screening rubric, the JD template, and the reporting tracker we use across hiring engagements.',
};

const COMING_SOON = [
  { code: 'Q3 2026', label: 'A field guide to building a placement calendar from scratch.' },
  { code: 'Q3 2026', label: 'Eval harness v2 — agent workflows and tool-use traces.' },
  { code: 'Q4 2026', label: 'A NAAC self-study report annotated by an actual peer reviewer.' },
];

export function Resources() {
  const featured = resourceLibrary.find((r) => r.featured) ?? resourceLibrary[0];
  const grouped: Array<{ segment: ResourceSegment; items: ResourceItem[] }> = resourceSegments.map(
    (segment) => ({
      segment,
      items: resourceLibrary.filter((r) => r.segment === segment),
    }),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — library statement, simple type-led */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  Resources / The library
                </p>
                <h1 className="mt-6 font-display text-[40px] md:text-[60px] lg:text-[80px] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--color-fg)] text-balance">
                  Free guides, frameworks,
                  <br />
                  <span className="text-[var(--color-brand-700)]">and templates.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                  The working artefacts we use in live engagements — packaged, dated, and downloadable.
                  Drawn from real cohorts, real audits, real hiring panels.
                </p>
              </div>

              {/* Counter rail */}
              <aside className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                  In the library
                </p>
                <p className="mt-3 font-display text-[64px] md:text-[80px] font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--color-fg)] tabular-nums">
                  {String(resourceLibrary.length).padStart(2, '0')}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-4)]">
                  Items across {resourceSegments.length} segments
                </p>
              </aside>
            </div>
          </Container>
        </section>

        {/* Featured — full-bleed brand band, single resource pulled out */}
        <section className="bg-[var(--color-brand-950)] text-white">
          <Container>
            <div className="py-14 md:py-20 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-start">
                <div className="lg:col-span-2">
                  <p className="kicker kicker-on-dark">Featured</p>
                  <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 tabular-nums">
                    {featured.segment} · {featured.type}
                  </p>
                  <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 tabular-nums">
                    {featured.pageCount} pages
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <h2 className="font-display text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.02] tracking-[-0.026em] text-white text-balance">
                    {featured.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-[15px] md:text-[16.5px] leading-[1.6] text-white/75 text-pretty">
                    {featured.dek}
                  </p>
                </div>

                <div className="lg:col-span-3 lg:border-l lg:border-white/15 lg:pl-10">
                  <a
                    href={featured.downloadUrl}
                    className="group inline-flex w-full items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[14px] font-semibold text-[var(--color-brand-950)] transition-colors hover:bg-white/90"
                  >
                    <Download className="h-4 w-4" strokeWidth={2.25} />
                    Download
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                    Email-gated · Single PDF
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Library — grouped by segment, numbered list rows per group */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 mb-12 md:mb-16 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">The library</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Sorted by who you are.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Each segment carries the working artefacts that segment actually uses. If something
                  you need is not here, ask — we publish on request.
                </p>
              </div>
            </div>

            <div className="space-y-16 md:space-y-20">
              {grouped.map((g, gi) => (
                <Reveal key={g.segment} delay={gi * 80}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16">
                    <div className="lg:col-span-4">
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        Segment {String(gi + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--color-fg)]">
                        {g.segment}
                      </h3>
                      <p className="mt-4 max-w-sm text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                        {SEGMENT_NOTES[g.segment]}
                      </p>
                    </div>

                    <ol className="lg:col-span-8 border-t-2 border-[var(--color-fg)]">
                      {g.items.map((it, i) => (
                        <li key={it.slug}>
                          <a
                            href={it.downloadUrl}
                            className="row-hover group/row block border-b border-[var(--color-line)] py-6 md:py-7"
                          >
                            <div className="grid grid-cols-12 gap-x-4 gap-y-2 items-baseline">
                              <span className="hidden md:block col-span-1 font-mono text-[11px] tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                                {String(i + 1).padStart(2, '0')}
                              </span>

                              <div className="col-span-12 md:col-span-7">
                                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-4)]">
                                  {it.type} · {it.pageCount} pages
                                </p>
                                <h4 className="mt-2 font-display text-[18px] md:text-[20px] lg:text-[22px] font-semibold tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                                  <span className="under-slide">{it.title}</span>
                                </h4>
                                <p className="mt-2 max-w-prose text-[13.5px] md:text-[14.5px] leading-[1.6] text-[var(--color-fg-3)]">
                                  {it.dek}
                                </p>
                              </div>

                              <div className="col-span-12 md:col-span-4 md:text-right">
                                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] transition-transform group-hover/row:translate-x-0.5">
                                  <Download className="h-3.5 w-3.5" strokeWidth={2.25} />
                                  Download
                                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* What's coming next — strip on canvas */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16">
              <div className="lg:col-span-5">
                <p className="kicker">Coming next</p>
                <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  On the editorial calendar.
                </h2>
                <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  We publish working artefacts as we finish using them in live engagements. Drop your
                  email in the band below and we send a heads-up the day each one ships.
                </p>
              </div>
              <ol className="lg:col-span-7 border-t border-[var(--color-fg)]">
                {COMING_SOON.map((c, i) => (
                  <li key={c.label} className="border-b border-[var(--color-line)] py-5 md:py-6">
                    <div className="grid grid-cols-12 gap-x-4 items-baseline">
                      <p className="col-span-3 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        {c.code}
                      </p>
                      <p className="col-span-8 md:col-span-9 text-[14px] md:text-[15.5px] leading-[1.55] text-[var(--color-fg-2)] text-balance">
                        {c.label}
                      </p>
                      <span className="col-span-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums text-right">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* Closing — newsletter signup band */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
              <div className="lg:col-span-6">
                <p className="kicker">Get the next drop</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  One email when something new ships. Nothing in between.
                </h2>
              </div>
              <form
                className="lg:col-span-6 flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="resources-email" className="sr-only">Work email</label>
                <input
                  id="resources-email"
                  type="email"
                  required
                  placeholder="you@institution.in"
                  className="flex-1 min-w-0 rounded-[6px] bg-[var(--color-bg)] border border-[var(--color-line-2)] px-4 py-3 text-[14px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-5)] outline-none transition-colors focus:border-[var(--color-brand-700)]"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-fg)] px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-700)]"
                >
                  Notify me
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
