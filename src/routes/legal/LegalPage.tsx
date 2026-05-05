import { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight, Mail, FileText, Calendar } from 'lucide-react';
import type { LegalPage as LegalPageData } from '@/data/legalContent';
import { legalPages } from '@/data/legalContent';

const ORDER = [
  { slug: 'privacy-policy', label: 'Privacy' },
  { slug: 'terms-of-service', label: 'Terms' },
  { slug: 'cookie-policy', label: 'Cookies' },
  { slug: 'refund-policy', label: 'Refund' },
  { slug: 'disclaimer', label: 'Disclaimer' },
  { slug: 'grievance', label: 'Grievance' },
];

function slugifyHeading(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function LegalPage({ page }: { page: LegalPageData }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );

    page.sections.forEach((s) => {
      const el = document.getElementById(slugifyHeading(s.heading));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [page.sections]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — document header with effective date and family rail */}
        <section className="relative bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-14 border-b border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  {page.kicker}
                </p>
                <h1 className="mt-5 font-display text-[36px] md:text-[52px] lg:text-[64px] font-semibold leading-[1.0] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                  {page.title}.
                </h1>
                <p className="mt-6 max-w-2xl text-[15px] md:text-[16.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                  {page.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-[var(--color-brand-700)]" strokeWidth={2.25} />
                    Effective {page.effectiveDate}
                  </span>
                  <span aria-hidden="true" className="block h-3 w-px bg-[var(--color-line-2)]" />
                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5 text-[var(--color-brand-700)]" strokeWidth={2.25} />
                    Document · {page.sections.length} sections
                  </span>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="lg:border-l lg:border-[var(--color-line)] lg:pl-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
                    Document family
                  </p>
                  <ul className="mt-4 space-y-1">
                    {ORDER.map((d) => {
                      const isCurrent = d.slug === page.slug;
                      return (
                        <li key={d.slug}>
                          <a
                            href={`/${d.slug}`}
                            aria-current={isCurrent ? 'page' : undefined}
                            className={
                              'group flex items-center justify-between rounded-[6px] px-2.5 py-2 transition-colors ' +
                              (isCurrent
                                ? 'bg-[var(--color-canvas)] text-[var(--color-brand-700)]'
                                : 'text-[var(--color-fg-2)] hover:bg-[var(--color-canvas)] hover:text-[var(--color-fg)]')
                            }
                          >
                            <span className="font-mono text-[11px] tabular-nums">
                              {String(ORDER.findIndex((o) => o.slug === d.slug) + 1).padStart(2, '0')}
                              <span className="ml-3 font-sans text-[13.5px] font-medium normal-case tracking-normal">
                                {d.label}
                              </span>
                            </span>
                            <ArrowUpRight
                              className={
                                'h-3.5 w-3.5 transition-all ' +
                                (isCurrent
                                  ? 'opacity-100 text-[var(--color-brand-700)]'
                                  : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5')
                              }
                              strokeWidth={2.25}
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Body — sticky table of contents + long-form sections */}
        <section className="bg-[var(--color-bg)] py-14 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
              {/* Sticky TOC */}
              <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <p className="kicker">On this page</p>
                <ol className="mt-5 border-l border-[var(--color-line)]">
                  {page.sections.map((s, i) => {
                    const id = slugifyHeading(s.heading);
                    const isActive = activeId === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={
                            'group/toc flex items-baseline gap-3 -ml-px border-l-2 py-2 pl-5 transition-colors ' +
                            (isActive
                              ? 'border-[var(--color-brand-700)] text-[var(--color-fg)]'
                              : 'border-transparent text-[var(--color-fg-3)] hover:text-[var(--color-fg)] hover:border-[var(--color-line-2)]')
                          }
                        >
                          <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] tabular-nums text-[var(--color-fg-5)]">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[13.5px] font-medium leading-[1.4]">{s.heading}</span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </aside>

              {/* Long-form sections */}
              <article className="lg:col-span-8">
                <ol className="space-y-12 md:space-y-14">
                  {page.sections.map((s, i) => {
                    const id = slugifyHeading(s.heading);
                    return (
                      <Reveal as="li" key={id} delay={i * 30}>
                        <section id={id} className="scroll-mt-24">
                          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                            §{String(i + 1).padStart(2, '0')}
                          </p>
                          <h2 className="mt-3 font-display text-[24px] md:text-[28px] lg:text-[30px] font-semibold leading-[1.18] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                            {s.heading}
                          </h2>
                          <span aria-hidden="true" className="mt-4 block h-px w-12 bg-[var(--color-brand-700)]" />
                          <p className="mt-5 max-w-[68ch] text-[14.5px] md:text-[15.5px] leading-[1.75] text-[var(--color-fg-2)] text-pretty">
                            {s.body}
                          </p>
                          {s.bullets && (
                            <ul className="mt-5 max-w-[68ch] space-y-3 border-l-2 border-[var(--color-line-2)] pl-5">
                              {s.bullets.map((b, bi) => (
                                <li
                                  key={bi}
                                  className="text-[14px] md:text-[14.5px] leading-[1.7] text-[var(--color-fg-2)]"
                                >
                                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums mr-3">
                                    {String(bi + 1).padStart(2, '0')}
                                  </span>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </section>
                      </Reveal>
                    );
                  })}
                </ol>
              </article>
            </div>
          </Container>
        </section>

        {/* Closing band — questions / contact */}
        <section className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] py-14 md:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Questions about this document</p>
                <h2 className="mt-3 font-display text-[24px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                  Reach a real person, not a ticket queue.
                </h2>
                <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  We answer policy questions in writing, on a single thread, with a person whose name is on the
                  reply. Most queries are resolved in under three working days.
                </p>
              </div>
              <div className="lg:col-span-5">
                <a
                  href="mailto:legal@alphinix.in"
                  className="group flex items-center justify-between rounded-[8px] border border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-4 transition-colors hover:border-[var(--color-brand-700)]/35"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)] transition-colors group-hover:bg-[var(--color-brand-700)] group-hover:text-white group-hover:ring-[var(--color-brand-700)]">
                      <Mail className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                        Write to
                      </span>
                      <span className="block font-display text-[15.5px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                        legal@alphinix.in
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover:text-[var(--color-brand-700)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function makeLegalRoute(slug: keyof typeof legalPages) {
  return () => <LegalPage page={legalPages[slug]} />;
}
