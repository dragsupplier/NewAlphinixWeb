import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { businessServices } from '@/data/segmentServices';
import { cn } from '@/lib/utils';

const METHODOLOGY = [
  { num: '01', title: 'Discover', body: 'A scoping engagement that surfaces the actual problem, the constraints, and the metric that will define success.' },
  { num: '02', title: 'Specify',  body: 'A written technical specification — architecture, stack, milestones, owners — agreed before any code is written.' },
  { num: '03', title: 'Ship',     body: 'Two-week delivery cadence with a working build at every milestone, code review, and observability from day one.' },
  { num: '04', title: 'Operate',  body: 'Hand-over with documentation, training for your team, and an optional managed-service window for the first quarter.' },
];

const TECH_TAGS = [
  'TypeScript', 'React', 'Next.js', 'Node', 'Python', 'PostgreSQL',
  'AWS', 'GCP', 'Azure', 'Vercel', 'Cloudflare',
  'OpenAI', 'Anthropic', 'LangChain', 'Vector DBs',
  'Stripe', 'Twilio', 'Segment', 'Mixpanel',
];

/* Bento sizing — first three are large, then two medium, then two compact */
const TILE_LAYOUT = [
  'lg:col-span-7 lg:row-span-2',  // 01 website
  'lg:col-span-5',                // 02 mobile
  'lg:col-span-5',                // 03 ai
  'lg:col-span-4',                // 04 automation
  'lg:col-span-4',                // 05 cloud
  'lg:col-span-4',                // 06 marketing
  'lg:col-span-12',               // 07 consulting (full-width row)
];

export function BusinessesHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — type-led, sharp */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16">
          <Container>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
              Audience 04 / Businesses & Startups
            </p>
            <h1 className="mt-6 font-display text-[44px] md:text-[72px] lg:text-[96px] font-semibold leading-[0.95] tracking-[-0.035em] text-[var(--color-fg)] text-balance max-w-5xl">
              Software, AI, and infrastructure
              <br className="hidden md:block" />
              <span className="text-[var(--color-brand-700)]"> that actually ships.</span>
            </h1>
            <div className="mt-9 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <p className="lg:col-span-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                Seven engineering capabilities — websites, apps, applied AI, automation, cloud, marketing, and
                consulting — delivered against a written specification, a working cadence, and a measurable
                outcome.
              </p>
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-fg)] px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-700)]"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="#methodology"
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    Read methodology
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Bento — capabilities */}
        <section className="bg-[var(--color-canvas)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 mb-10 md:mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Capabilities</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Seven capabilities. One delivery practice.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Each capability is staffed and delivered on the same cadence. Engagements that span more than
                  one capability run under a single named owner.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 lg:auto-rows-[minmax(220px,auto)] gap-4 md:gap-5">
              {businessServices.map((s, i) => {
                const tileClass = TILE_LAYOUT[i] ?? '';
                const isFeatured = i === 0;
                return (
                  <Reveal key={s.slug} delay={i * 50} className={tileClass}>
                    <a
                      href={`/businesses/${s.slug}`}
                      className={cn(
                        'group/b relative h-full flex flex-col rounded-[12px] p-6 md:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-0.5',
                        isFeatured
                          ? 'bg-[var(--color-fg)] text-white border border-[var(--color-fg)] hover:border-[var(--color-brand-700)]'
                          : 'bg-[var(--color-bg)] border border-[var(--color-line)] hover:border-[var(--color-brand-700)]/35 hover:shadow-[0_18px_40px_-20px_rgba(11,18,32,0.18)]',
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className={cn(
                            'grid h-10 w-10 lg:h-12 lg:w-12 place-items-center rounded-[8px] transition-colors',
                            isFeatured
                              ? 'bg-white/[0.06] text-[var(--color-brand-300)] ring-1 ring-white/10 group-hover/b:bg-[var(--color-brand-700)] group-hover/b:text-white group-hover/b:ring-[var(--color-brand-700)]'
                              : 'bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)] group-hover/b:bg-[var(--color-brand-700)] group-hover/b:text-white group-hover/b:ring-[var(--color-brand-700)]',
                          )}
                        >
                          <s.icon className={isFeatured ? 'h-5 w-5 lg:h-6 lg:w-6' : 'h-5 w-5'} strokeWidth={1.75} />
                        </span>
                        <span
                          className={cn(
                            'font-mono text-[10px] uppercase tracking-[0.18em] tabular-nums',
                            isFeatured ? 'text-white/45' : 'text-[var(--color-fg-5)]',
                          )}
                        >
                          {s.kicker}
                        </span>
                      </div>

                      <h3
                        className={cn(
                          'mt-auto pt-7 font-display font-semibold tracking-[-0.018em] text-balance',
                          isFeatured
                            ? 'text-[26px] md:text-[36px] lg:text-[44px] leading-[1] text-white'
                            : 'text-[19px] md:text-[20px] leading-[1.18] text-[var(--color-fg)]',
                        )}
                      >
                        {s.name}
                      </h3>

                      <p
                        className={cn(
                          'mt-3 leading-[1.6]',
                          isFeatured
                            ? 'text-[14.5px] text-white/75 max-w-md'
                            : 'text-[13px] md:text-[13.5px] text-[var(--color-fg-3)] text-pretty',
                        )}
                      >
                        {s.summary}
                      </p>

                      <div
                        className={cn(
                          'mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold',
                          isFeatured ? 'text-white' : 'text-[var(--color-brand-700)]',
                        )}
                      >
                        <span className="under-slide">Read capability</span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-all group-hover/b:translate-x-0.5 group-hover/b:-translate-y-0.5"
                          strokeWidth={2.25}
                        />
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Tech stack — marquee-ish horizontal scroll */}
        <section className="bg-[var(--color-bg)] py-14 md:py-16 border-y border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 items-end">
              <div className="lg:col-span-4">
                <p className="kicker">Stack</p>
                <h2 className="mt-3 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  Modern, mainstream, mission-aligned.
                </h2>
              </div>
              <div className="lg:col-span-8 flex flex-wrap gap-2">
                {TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[var(--color-fg-2)] bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-full px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Methodology — numbered phases on dark surface */}
        <section id="methodology" className="bg-[var(--color-fg)] text-white py-16 md:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="kicker kicker-on-dark">Methodology</p>
              <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
                A four-phase practice that ships.
              </h2>
              <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/65">
                The same shape, every engagement. Discovery is paid as a separate phase so the specification
                is written down before commercial commitments are made.
              </p>
            </div>

            <ol className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-10">
              {METHODOLOGY.map((m, i) => (
                <Reveal as="li" key={m.num} delay={i * 70}>
                  <article>
                    <p className="font-display text-[64px] md:text-[80px] font-semibold leading-[0.85] tracking-[-0.04em] text-[var(--color-brand-300)]">
                      {m.num}
                    </p>
                    <h3 className="mt-5 font-display text-[20px] md:text-[24px] font-semibold tracking-[-0.018em] text-white">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] md:text-[14px] leading-[1.65] text-white/70 text-pretty">
                      {m.body}
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
                <p className="kicker">Start a project</p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  A written spec within a week.
                </h2>
                <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  Tell us the outcome you need and the constraint you're working against. We respond with a
                  scoped proposal, a named owner, and a written specification before any commercial
                  commitments are made.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-800)]"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] ring-1 ring-inset ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    Read case studies
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
