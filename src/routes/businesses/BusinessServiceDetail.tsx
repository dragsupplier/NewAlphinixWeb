import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { Stub } from '@/routes/Stub';
import { cn } from '@/lib/utils';
import { businessServices } from '@/data/segmentServices';
import { findBusinessDetail } from '@/data/businessDetails';
import { BusinessSignature } from '@/components/sections/businesses/BusinessSignatures';

/**
 * Per-capability detail page for the Businesses segment.
 * Sections: bento hero · overview + stack · phases · signature · deliverables
 *           · faqs · other capabilities · closing CTA.
 */
export function BusinessServiceDetail({ slug }: { slug: string }) {
  const detail = findBusinessDetail(slug);
  const service = businessServices.find((s) => s.slug === slug);

  if (!detail || !service) {
    return <Stub kicker="404" title="Service not found" />;
  }

  const Icon = service.icon;
  const others = businessServices.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* ── 1 · Bento hero ──────────────────────────────────── */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:auto-rows-[minmax(220px,auto)]">
              {/* Left tile — positioning */}
              <div className="lg:col-span-8 lg:row-span-2 rounded-[12px] bg-[var(--color-fg)] text-white p-7 md:p-10 lg:p-12 flex flex-col">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)]">
                    <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-[var(--color-brand-300)]" />
                    Businesses · {service.kicker}
                  </span>
                  <span className="grid h-11 w-11 lg:h-12 lg:w-12 place-items-center rounded-[8px] bg-white/[0.06] text-[var(--color-brand-300)] ring-1 ring-white/10">
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.75} />
                  </span>
                </div>

                <h1 className="mt-auto pt-10 md:pt-12 font-display text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[0.98] tracking-[-0.03em] text-white text-balance">
                  {service.name}.
                </h1>
                <p className="mt-5 max-w-2xl text-[15.5px] md:text-[17px] leading-[1.55] text-white/80 text-pretty">
                  {service.tagline}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-800)]"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="/businesses"
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-white/[0.06] px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/[0.1]"
                  >
                    All capabilities
                  </a>
                </div>
              </div>

              {/* Right top tile — engagement scope */}
              <div className="lg:col-span-4 rounded-[12px] bg-[var(--color-canvas)] border border-[var(--color-line)] p-6 md:p-7 flex flex-col">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                  Engagement
                </p>
                <h2 className="mt-3 font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
                  Scope, cadence, ownership
                </h2>
                <ul className="mt-5 space-y-3.5">
                  <FactRow label="Cadence" value="Two-week delivery" />
                  <FactRow label="Owner" value="Named, single point of contact" />
                  <FactRow label="Pricing" value="Fixed scope · written spec" />
                  <FactRow label="Hand-over" value="Documented runbook" />
                </ul>
              </div>

              {/* Right bottom tile — quick facts */}
              <div className="lg:col-span-4 rounded-[12px] bg-[var(--color-bg)] border border-[var(--color-line)] p-6 md:p-7 flex flex-col">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
                  At a glance
                </p>
                <h2 className="mt-3 font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
                  {detail.phases.length}-phase delivery, {detail.deliverables.length} deliverables.
                </h2>
                <p className="mt-3 text-[13px] leading-[1.6] text-[var(--color-fg-3)]">
                  {service.summary}
                </p>
                <a
                  href="#phases"
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]"
                >
                  <span className="under-slide">Read delivery phases</span>
                  <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 2 · Two-column overview + stack ─────────────────── */}
        <section className="bg-[var(--color-canvas)] section-y border-y border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
              <div className="lg:col-span-7">
                <p className="kicker">About this capability</p>
                <p className="mt-5 font-display text-[22px] md:text-[26px] lg:text-[30px] font-semibold leading-[1.22] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                  {detail.body}
                </p>

                <div className="mt-10">
                  <p className="kicker">Who this is for</p>
                  <ul className="mt-5 space-y-3">
                    {detail.idealClients.map((c, i) => (
                      <Reveal as="li" key={c} delay={i * 50}>
                        <div className="flex items-baseline gap-3 border-t border-[var(--color-line)] py-3.5">
                          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <p className="text-[14px] md:text-[14.5px] leading-[1.6] text-[var(--color-fg)]">
                            {c}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[10px] bg-[var(--color-bg)] border border-[var(--color-line)] p-6 md:p-7">
                  <p className="kicker">Stack</p>
                  <h3 className="mt-3 font-display text-[18px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
                    Mainstream choices, named in the spec.
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.65] text-[var(--color-fg-3)]">
                    The capability defaults to the technologies below. The discovery phase commits to a specific
                    selection, with cost and operational owner agreed before build.
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {detail.techStack.map((t) => (
                      <li
                        key={t}
                        className="font-mono text-[11px] uppercase tracking-[0.12em] font-semibold text-[var(--color-fg-2)] bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-full px-3 py-1.5"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 3 · Delivery phases ─────────────────────────────── */}
        <section id="phases" className="bg-[var(--color-bg)] section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end mb-10 md:mb-14">
              <div className="lg:col-span-7">
                <p className="kicker">Delivery</p>
                <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  {detail.phases.length} phases. The shape every engagement follows.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  Discovery is paid as a separate phase so the specification is written before commercial
                  commitments. Subsequent phases run on a fixed cadence with code review and observability
                  from day one.
                </p>
              </div>
            </div>

            {/* Horizontal phase strip on lg, vertical on mobile */}
            <ol
              className="hidden lg:grid lg:gap-0 lg:auto-rows-fr"
              style={{ gridTemplateColumns: `repeat(${detail.phases.length}, minmax(0, 1fr))` }}
            >
              {detail.phases.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 60}
                  className={cn(
                    'relative flex flex-col p-6 border-t-2',
                    i === 0
                      ? 'border-t-[var(--color-brand-700)]'
                      : 'border-t-[var(--color-line-2)]',
                    i > 0 && 'border-l border-[var(--color-line)]',
                  )}
                >
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    Phase {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </ol>

            {/* Vertical (mobile + tablet) */}
            <ol className="lg:hidden border-t border-[var(--color-fg)]">
              {detail.phases.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 50}>
                  <article className="grid grid-cols-12 gap-x-4 gap-y-2 py-6 border-b border-[var(--color-line)]">
                    <span className="col-span-12 sm:col-span-2 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      P{String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="col-span-12 sm:col-span-4 font-display text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                      {p.title}
                    </h3>
                    <p className="col-span-12 sm:col-span-6 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* ── 4 · Signature (per slug) ────────────────────────── */}
        <BusinessSignature slug={service.slug} />

        {/* ── 5 · Deliverables — dark fg surface ──────────────── */}
        <section className="bg-[var(--color-fg)] text-white section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-12 md:mb-14">
              <div className="lg:col-span-5">
                <p className="kicker kicker-on-dark">Deliverables</p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.024em] text-white text-balance">
                  What ships at the close of the engagement.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/65">
                  Every deliverable is named in the specification before build begins. The hand-over session
                  walks through each one with the operating team, with documentation and credentials transferred
                  to the client.
                </p>
              </div>
            </div>

            <ol className="border-t border-white/15">
              {detail.deliverables.map((d, i) => (
                <Reveal as="li" key={d} delay={i * 60}>
                  <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-2 py-7 md:py-8 border-b border-white/15">
                    <span className="col-span-12 sm:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)] tabular-nums">
                      D{String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="col-span-12 sm:col-span-11 font-display text-[18px] md:text-[22px] lg:text-[26px] font-semibold leading-[1.2] tracking-[-0.018em] text-white text-balance">
                      {d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* ── 6 · FAQ accordion ────────────────────────────── */}
        <BusinessFaq faqs={detail.faqs} />

        {/* ── 7 · Other capabilities rail ────────────────── */}
        <section className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] section-y">
          <Container>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
              <div>
                <p className="kicker">Other capabilities</p>
                <h2 className="mt-2 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  Continue exploring the practice.
                </h2>
              </div>
              <a
                href="/businesses"
                className="group inline-flex items-center gap-1.5 self-start text-[12.5px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]"
              >
                <span className="under-slide">All capabilities</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/businesses/${o.slug}`}
                  className="group/c flex flex-col bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[8px] p-6 transition-all hover:border-[var(--color-brand-700)]/35 hover:-translate-y-0.5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)] transition-colors group-hover/c:bg-[var(--color-brand-700)] group-hover/c:text-white group-hover/c:ring-[var(--color-brand-700)]">
                    <o.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                    {o.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-fg-3)] line-clamp-2">
                    {o.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--color-fg)] group-hover/c:text-[var(--color-brand-700)]">
                    Read capability
                    <ArrowUpRight
                      className="h-3 w-3 transition-all group-hover/c:translate-x-0.5 group-hover/c:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 8 · Closing CTA ─────────────────────────────── */}
        <section className="bg-[var(--color-fg)] text-white">
          <Container>
            <div className="py-16 md:py-20 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
                <div className="lg:col-span-7">
                  <p className="kicker kicker-on-dark">Start an engagement</p>
                  <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
                    A written specification within a week.
                  </h2>
                  <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/70 text-pretty">
                    Tell us the outcome you need and the constraint you are working against. We respond with a
                    scoped proposal, a named owner, and a written specification before any commercial
                    commitment is made.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                    <a
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] transition-colors hover:bg-white/90"
                    >
                      Start a project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </a>
                    <a
                      href="/case-studies"
                      className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/30 transition-colors hover:ring-white/60"
                    >
                      Read case studies
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

/* ── Internals ─────────────────────────────────────────────── */

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-t border-[var(--color-line)] pt-3.5 first:border-t-0 first:pt-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
        {label}
      </span>
      <span className="text-[13px] font-medium text-[var(--color-fg)] text-right">{value}</span>
    </li>
  );
}

function BusinessFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-5">
            <p className="kicker">Engagement questions</p>
            <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              The questions buyers ask before commercial commitment.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
              The discovery phase covers most of these. Anything left over is closed in the written
              specification before the build phase begins.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-[var(--color-line)]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-[var(--color-line)]">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group/q flex w-full items-baseline justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                        {f.q}
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
                        <p className="pb-5 max-w-[60ch] text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
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
