import { useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { blogPosts, blogCategories, type BlogCategory } from '@/data/blogPosts';

type Filter = 'All' | BlogCategory;

const FILTERS: Filter[] = ['All', ...blogCategories];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function Blog() {
  const [filter, setFilter] = useState<Filter>('All');

  const featured = useMemo(() => blogPosts.find((p) => p.featured) ?? blogPosts[0], []);

  const indexPosts = useMemo(
    () =>
      blogPosts
        .filter((p) => p.slug !== featured.slug)
        .filter((p) => (filter === 'All' ? true : p.category === filter)),
    [featured.slug, filter],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — featured post takeover (no card; type is the visual) */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 border-b border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  Field notes / Issue 04
                </p>
                <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-4)]">
                  {featured.category} · {formatDate(featured.publishedOn)} · {featured.readMinutes} min read
                </p>

                <h1 className="mt-7 font-display text-[40px] md:text-[64px] lg:text-[84px] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--color-fg)] text-balance">
                  {featured.title}
                </h1>

                <p className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                  {featured.dek}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={`/blog/${featured.slug}`}
                    className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
                  >
                    Read the issue
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="#index"
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    Jump to index
                  </a>
                </div>
              </div>

              <aside className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <div className="space-y-7">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                      Bylined
                    </p>
                    <p className="mt-2 text-[14px] md:text-[15px] font-semibold text-[var(--color-fg)]">
                      {featured.author}
                    </p>
                    <p className="mt-1 text-[12.5px] text-[var(--color-fg-4)]">{featured.authorRole}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                      Tags
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {featured.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-[4px] bg-[var(--color-canvas)] px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-3)] ring-1 ring-[var(--color-line)]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Subscribe band — dark slab, single row */}
        <section className="bg-[var(--color-fg)] text-white">
          <Container>
            <div className="py-10 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-center">
                <div className="lg:col-span-6">
                  <p className="kicker kicker-on-dark">Subscribe</p>
                  <p className="mt-3 font-display text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-white text-balance">
                    Field notes by email. Quarterly. No filler.
                  </p>
                </div>
                <form
                  className="lg:col-span-6 flex flex-col sm:flex-row gap-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="blog-email" className="sr-only">Work email</label>
                  <input
                    id="blog-email"
                    type="email"
                    required
                    placeholder="you@institution.in"
                    className="flex-1 min-w-0 rounded-[6px] bg-white/[0.06] border border-white/15 px-4 py-3 text-[14px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/40 focus:bg-white/[0.08]"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[13.5px] font-semibold text-[var(--color-fg)] transition-colors hover:bg-white/90"
                  >
                    Subscribe
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* Filter chips */}
        <section id="index" className="bg-[var(--color-bg)] pt-14 md:pt-20 pb-6 md:pb-8">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">The index</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Long-form notes from each desk.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <ul className="flex flex-wrap items-center gap-2">
                  {FILTERS.map((f) => {
                    const active = f === filter;
                    return (
                      <li key={f}>
                        <button
                          type="button"
                          onClick={() => setFilter(f)}
                          className={
                            'rounded-full px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold transition-colors ring-1 ' +
                            (active
                              ? 'bg-[var(--color-fg)] text-white ring-[var(--color-fg)]'
                              : 'bg-[var(--color-bg)] text-[var(--color-fg-3)] ring-[var(--color-line-2)] hover:text-[var(--color-fg)]')
                          }
                          aria-pressed={active}
                        >
                          {f}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Long index — alternating left/right offset entries (NOT a 3-col grid) */}
        <section className="bg-[var(--color-bg)] pb-16 md:pb-20 lg:pb-24">
          <Container>
            <ol className="border-t-2 border-[var(--color-fg)]">
              {indexPosts.length === 0 ? (
                <li className="py-12 md:py-16">
                  <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-fg-4)]">
                    No notes filed under {filter}. Try another desk.
                  </p>
                </li>
              ) : (
                indexPosts.map((p, i) => {
                  const offsetRight = i % 2 === 1;
                  return (
                    <Reveal as="li" key={p.slug} delay={i * 60}>
                      <a
                        href={`/blog/${p.slug}`}
                        className="row-hover group/row block border-b border-[var(--color-line)] py-9 md:py-11"
                      >
                        <div
                          className={
                            'grid grid-cols-12 gap-x-4 lg:gap-x-10 gap-y-4 ' +
                            (offsetRight ? 'lg:pl-[8%]' : '')
                          }
                        >
                          <div className="col-span-12 lg:col-span-2 flex lg:flex-col items-start gap-3 lg:gap-2 order-1">
                            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-4)]">
                              {p.category}
                            </span>
                          </div>

                          <div className="col-span-12 lg:col-span-8 order-3 lg:order-2">
                            <h3 className="font-display text-[22px] md:text-[30px] lg:text-[36px] font-semibold leading-[1.05] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                              <span className="under-slide">{p.title}</span>
                            </h3>
                            <p className="mt-3 max-w-[60ch] text-[14px] md:text-[15.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                              {p.dek}
                            </p>
                            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[var(--color-fg-4)]">
                              <span className="font-mono uppercase tracking-[0.14em]">
                                {p.author}
                              </span>
                              <span aria-hidden="true" className="text-[var(--color-fg-5)]">·</span>
                              <span className="font-mono uppercase tracking-[0.14em]">
                                {formatDate(p.publishedOn)}
                              </span>
                              <span aria-hidden="true" className="text-[var(--color-fg-5)]">·</span>
                              <span className="font-mono uppercase tracking-[0.14em] tabular-nums">
                                {p.readMinutes} min
                              </span>
                            </div>
                          </div>

                          <div className="col-span-12 lg:col-span-2 order-2 lg:order-3 flex lg:justify-end items-start">
                            <ArrowUpRight
                              className="h-5 w-5 text-[var(--color-fg-5)] transition-all group-hover/row:text-[var(--color-brand-700)] group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5"
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      </a>
                    </Reveal>
                  );
                })
              )}
            </ol>
          </Container>
        </section>

        {/* Editorial closing — credits style strip on canvas */}
        <section className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16">
              <div className="lg:col-span-6">
                <p className="kicker">Pitch a guest note</p>
                <h2 className="mt-3 font-display text-[26px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Writing about hiring, academic operations, or applied AI? Send a 200-word pitch.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <dl className="space-y-5">
                  <div>
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                      Editorial cadence
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] text-[var(--color-fg-2)]">
                      One issue every quarter. No filler newsletters between.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                      Pitch to
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] text-[var(--color-fg-2)]">
                      <a className="under-slide text-[var(--color-brand-700)]" href="mailto:editorial@alphinix.in">
                        editorial@alphinix.in
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                      What we publish
                    </dt>
                    <dd className="mt-1.5 text-[14.5px] text-[var(--color-fg-2)]">
                      Specific. First-person. With numbers. We do not run vendor explainers.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
