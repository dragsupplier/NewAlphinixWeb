/**
 * @file CollegeServiceDetail.tsx
 * @purpose Shared detail-page template for college sub-services.
 * @notes  Formal academic register matching CollegesHub editorial document feel.
 *         Composes hero · overview · phases · signature · deliverables · faq · rail · cta.
 */

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { Stub } from '@/routes/Stub';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { collegeServices } from '@/data/segmentServices';
import { findCollegeDetail } from '@/data/collegeDetails';
import { CollegeSignature } from '@/components/sections/colleges/CollegeSignatures';

export function CollegeServiceDetail({ slug }: { slug: string }) {
  const service = collegeServices.find((s) => s.slug === slug);
  const detail = findCollegeDetail(slug);

  if (!service || !detail) {
    return <Stub kicker="404" title="Service not found" />;
  }

  const indexNumber = collegeServices.findIndex((s) => s.slug === slug) + 1;
  const others = collegeServices.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* ───── 1. Document hero ─────────────────────────────── */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-14 border-b border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  Audience 02 / Colleges · Service {String(indexNumber).padStart(2, '0')}
                </p>
                <h1 className="mt-5 font-display text-[34px] md:text-[48px] lg:text-[60px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                  {service.name}.
                </h1>
                <p className="mt-5 max-w-2xl font-display text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.25] tracking-[-0.018em] text-[var(--color-brand-700)] text-balance">
                  {service.tagline}
                </p>
                <p className="mt-6 max-w-2xl text-[15px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)]">
                  {service.summary}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
                  >
                    Brief us
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2.5}
                    />
                  </a>
                  <a
                    href="/colleges"
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    Back to all services
                  </a>
                </div>
              </div>

              {/* Right rail — formal index */}
              <aside className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-7">
                  <RailItem
                    label="Engagement model"
                    value="Multi-year · refresh cycles"
                  />
                  <RailItem
                    label="Phases"
                    value={`${detail.phases.length} documented`}
                  />
                  <RailItem
                    label="Deliverables"
                    value={`${detail.deliverables.length} written outputs`}
                  />
                  <RailItem
                    label="Owner"
                    value="Named · on day one"
                  />
                </ul>
              </aside>
            </div>
          </Container>
        </section>

        {/* ───── 2. Programme overview — body + audience + prerequisites ───── */}
        <section className="bg-[var(--color-bg)] section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-7">
                <p className="kicker">About the engagement</p>
                <p className="mt-5 font-display text-[22px] md:text-[26px] lg:text-[30px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                  {detail.body}
                </p>
                <div className="mt-10">
                  <p className="kicker">Who it is for</p>
                  <ul className="mt-4 space-y-2.5">
                    {detail.audience.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-baseline gap-3 text-[14px] md:text-[14.5px] leading-[1.6] text-[var(--color-fg-3)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-700)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-[8px] p-7 md:p-8">
                  <p className="kicker">Prerequisites</p>
                  <ul className="mt-5 space-y-4">
                    {detail.prerequisites.map((item, i) => (
                      <li key={i} className="flex items-baseline gap-3">
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[13.5px] md:text-[14px] leading-[1.6] text-[var(--color-fg)]">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ───── 3. Phases — numbered phase manifest ──────────── */}
        <section className="bg-[var(--color-canvas)] section-y border-y border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end mb-10 md:mb-14">
              <div className="lg:col-span-7">
                <p className="kicker">Phases</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  How the engagement runs.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  Each phase has a written output, a review checkpoint, and a named owner. The cadence is
                  documented in the engagement plan and revisited at the close of every phase.
                </p>
              </div>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] border border-[var(--color-line)] rounded-[6px] overflow-hidden">
              {detail.phases.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 60}>
                  <article className="h-full bg-[var(--color-bg)] p-6 md:p-7 lg:p-8 flex flex-col">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        Phase {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] tabular-nums">
                        / {String(detail.phases.length).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[19px] md:text-[20px] font-semibold leading-[1.25] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] md:text-[14px] leading-[1.65] text-[var(--color-fg-3)]">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* ───── 4. Signature section — unique per slug ──────── */}
        <CollegeSignature slug={service.slug} />

        {/* ───── 5. Deliverables — contract-schedule list ────── */}
        <section className="bg-[var(--color-bg)] section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
                <p className="kicker">Deliverables</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Written outputs at the close of every engagement.
                </h2>
                <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  Deliverables are listed in the engagement plan and signed off as each one is produced. They
                  serve as the audit trail across academic and accreditation cycles.
                </p>
              </div>

              <ol className="lg:col-span-8 border-t-2 border-[var(--color-fg)]">
                {detail.deliverables.map((item, i) => (
                  <Reveal as="li" key={i} delay={i * 60}>
                    <div className="grid grid-cols-12 items-baseline gap-x-4 lg:gap-x-8 gap-y-2 border-b border-[var(--color-line)] py-7 md:py-9">
                      <span className="col-span-12 md:col-span-2 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        Sec {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="col-span-12 md:col-span-9 font-display text-[20px] md:text-[24px] lg:text-[26px] font-semibold leading-[1.22] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                        {item}
                      </p>
                      <span
                        aria-hidden="true"
                        className="col-span-12 md:col-span-1 md:text-right font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]"
                      >
                        Filed
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* ───── 6. FAQs — accordion ─────────────────────────── */}
        <CollegeFaq faqs={detail.faqs} />

        {/* ───── 7. Other college services rail ──────────────── */}
        <section className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] section-y">
          <Container>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
              <div>
                <p className="kicker">Other services</p>
                <h2 className="mt-2 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  Continue across the practice.
                </h2>
              </div>
              <a
                href="/colleges"
                className="group inline-flex items-center gap-1.5 self-start text-[12.5px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]"
              >
                <span className="under-slide">All services</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
              </a>
            </div>

            <ol className="border-t border-[var(--color-fg)]">
              {others.map((o) => (
                <li key={o.slug}>
                  <a
                    href={`/colleges/${o.slug}`}
                    className="row-hover group/row grid grid-cols-12 items-baseline gap-x-4 lg:gap-x-8 gap-y-2 border-b border-[var(--color-line)] py-6 md:py-7"
                  >
                    <span className="col-span-2 sm:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      {o.kicker.replace('Service ', '')}
                    </span>
                    <h3 className="col-span-10 sm:col-span-4 font-display text-[17px] md:text-[19px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                      <span className="under-slide">{o.name}</span>
                    </h3>
                    <p className="col-span-12 sm:col-span-6 text-[13px] md:text-[14px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                      {o.summary}
                    </p>
                    <ArrowUpRight
                      className="col-span-12 sm:col-span-1 ml-auto h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover/row:text-[var(--color-brand-700)] group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ───── 8. Closing CTA band on dark ─────────────────── */}
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
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={2.5}
                      />
                    </a>
                    <a
                      href="/colleges"
                      className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/30 transition-colors hover:ring-white/60"
                    >
                      All college services
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

/* ───── Sub-components ──────────────────────────────────────── */

function RailItem({ label, value }: { label: string; value: string }) {
  return (
    <li>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
        {label}
      </p>
      <p className="mt-2 text-[14px] md:text-[15px] font-semibold text-[var(--color-fg)] leading-[1.4]">
        {value}
      </p>
    </li>
  );
}

function CollegeFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-5">
            <p className="kicker">Engagement questions</p>
            <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Questions decision-makers ask before signing the brief.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
              For specific institutional context — programmes, intake, accreditation cycle, or infrastructure —
              the fastest route to an answer is a short scoping conversation.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-[var(--color-fg)]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-[var(--color-line)]">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group/q flex w-full items-baseline justify-between gap-4 py-5 md:py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                          {f.q}
                        </span>
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 shrink-0 text-[var(--color-fg-5)] transition-transform duration-300',
                          isOpen && 'rotate-180 text-[var(--color-brand-700)]',
                        )}
                        strokeWidth={2}
                      />
                    </button>
                    <div
                      className={cn(
                        'grid transition-[grid-template-rows] duration-300 ease-out',
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pl-8 max-w-[60ch] text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
