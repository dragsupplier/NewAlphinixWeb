import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { Stub } from '@/routes/Stub';
import { hiringServices } from '@/data/segmentServices';
import { findHiringDetail } from '@/data/hiringDetails';
import { HiringSignature } from '@/components/sections/hiring/HiringSignatures';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Clock,
  Layers3,
  ClipboardCheck,
} from 'lucide-react';

export function HiringServiceDetail({ slug }: { slug: string }) {
  const service = hiringServices.find((s) => s.slug === slug);
  const detail = findHiringDetail(slug);

  if (!service || !detail) {
    return <Stub kicker="404" title="Service not found" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. Operational hero — split: statement + SLA tile */}
        <HiringHero
          kicker={`${service.kicker} / Hiring`}
          name={service.name}
          tagline={service.tagline}
          sla={detail.sla}
        />

        {/* 2. Two-column: body + roleTypes left, sla stat strip right */}
        <OverviewSplit
          body={detail.body}
          roleTypes={detail.roleTypes}
          sla={detail.sla}
        />

        {/* 3. Phases — horizontal numbered phase strip */}
        <PhaseStrip phases={detail.phases} />

        {/* 4. Service-specific signature section */}
        <HiringSignature slug={service.slug} />

        {/* 5. Deliverables on dark band — big numbers, tabular emphasis */}
        <DeliverablesBand deliverables={detail.deliverables} />

        {/* 6. FAQs — accordion */}
        <HiringFaq faqs={detail.faqs} />

        {/* 7. Other-hiring-services rail */}
        <OtherHiringRail excludeSlug={service.slug} />

        {/* 8. Closing CTA */}
        <ClosingCta serviceName={service.name} />
      </main>
      <Footer />
    </div>
  );
}

/* ───── 1. Hero ───────────────────────────────────────────── */

function HiringHero({
  kicker,
  name,
  tagline,
  sla,
}: {
  kicker: string;
  name: string;
  tagline: string;
  sla: { metric: string; value: string }[];
}) {
  // pick first SLA as the headline tile, plus two more as supporting
  const [primary, ...rest] = sla;
  const support = rest.slice(0, 2);

  return (
    <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
              {kicker}
            </p>
            <h1 className="mt-6 font-display text-[36px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.02] tracking-[-0.026em] text-[var(--color-fg)] text-balance">
              {name}.
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] md:text-[18px] leading-[1.55] text-[var(--color-brand-700)] font-display font-medium tracking-[-0.012em] text-pretty">
              {tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
              >
                Open this role
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </a>
              <a
                href="/hiring"
                className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
              >
                Back to hiring services
              </a>
            </div>
          </div>

          {/* SLA tile on the right */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-[10px] p-6 md:p-7">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--color-brand-700)]" strokeWidth={2.25} />
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                  Headline SLA
                </p>
              </div>
              <p className="mt-5 font-display text-[56px] md:text-[64px] lg:text-[72px] font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--color-fg)] tabular-nums">
                {primary.value}
              </p>
              <p className="mt-3 font-display text-[15.5px] md:text-[16px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                {primary.metric}
              </p>

              {support.length > 0 && (
                <ul className="mt-6 grid grid-cols-2 gap-x-5 border-t border-[var(--color-line)] pt-5">
                  {support.map((s) => (
                    <li key={s.metric}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                        {s.metric}
                      </p>
                      <p className="mt-1.5 font-display text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)] tabular-nums">
                        {s.value}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── 2. Overview split ─────────────────────────────────── */

function OverviewSplit({
  body,
  roleTypes,
  sla,
}: {
  body: string;
  roleTypes: string[];
  sla: { metric: string; value: string }[];
}) {
  return (
    <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="lg:col-span-7">
            <p className="kicker">About this service</p>
            <p className="mt-5 font-display text-[20px] md:text-[24px] lg:text-[26px] font-medium leading-[1.32] tracking-[-0.014em] text-[var(--color-fg)] text-balance">
              {body}
            </p>

            <div className="mt-10">
              <p className="kicker">Role types we cover</p>
              <ul className="mt-5 space-y-3">
                {roleTypes.map((r, i) => (
                  <Reveal as="li" key={r} delay={i * 50}>
                    <div className="flex items-baseline gap-3 border-t border-[var(--color-line)] pt-3.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums shrink-0">
                        R{String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[14.5px] leading-[1.55] text-[var(--color-fg)]">
                        {r}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="kicker">Service-level agreements</p>
            <ul className="mt-5">
              {sla.map((s, i) => (
                <Reveal as="li" key={s.metric} delay={i * 60}>
                  <div className="grid grid-cols-12 gap-x-4 items-baseline border-t border-[var(--color-fg)] py-5 first:border-t-2 last:border-b-2 last:border-b-[var(--color-fg)]">
                    <span className="col-span-7 text-[13.5px] md:text-[14px] leading-[1.5] text-[var(--color-fg-3)]">
                      {s.metric}
                    </span>
                    <span className="col-span-5 font-display text-[20px] md:text-[22px] font-semibold tracking-[-0.018em] text-[var(--color-fg)] text-right tabular-nums">
                      {s.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
              Final SLA values agreed in writing on the engagement letter.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── 3. Phase strip ───────────────────────────────────── */

function PhaseStrip({ phases }: { phases: { title: string; body: string }[] }) {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Layers3 className="h-4 w-4 text-[var(--color-brand-700)]" strokeWidth={2.25} />
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
              How this service runs
            </p>
          </div>
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
            {phases.length}-phase process. One time-to-fill SLA.
          </h2>
        </div>

        <ol
          className={cn(
            'grid grid-cols-1 gap-y-10 md:gap-x-6 lg:gap-x-8',
            phases.length === 4 && 'md:grid-cols-4',
            phases.length === 5 && 'md:grid-cols-5',
            phases.length === 6 && 'md:grid-cols-3 lg:grid-cols-6',
          )}
        >
          {phases.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 60}>
              <article>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-[22px] md:text-[24px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                  {p.title}
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
  );
}

/* ───── 5. Deliverables band — dark, big numbers ──────────── */

function DeliverablesBand({ deliverables }: { deliverables: string[] }) {
  return (
    <section className="bg-[var(--color-fg)] text-white section-y">
      <Container>
        <div className="flex items-center gap-2 mb-6">
          <ClipboardCheck className="h-4 w-4 text-[var(--color-brand-300)]" strokeWidth={2.25} />
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)]">
            What you receive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-white text-balance">
              Every engagement leaves a written trail.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[14px] leading-[1.7] text-white/65">
              Deliverables below are recorded on the engagement letter. Each one has a defined cadence
              and a named owner.
            </p>
          </div>
        </div>

        <ol className="border-t border-white/15">
          {deliverables.map((d, i) => (
            <Reveal as="li" key={d} delay={i * 50}>
              <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-3 items-baseline py-7 md:py-9 border-b border-white/10">
                <span className="col-span-2 md:col-span-1 font-display text-[36px] md:text-[44px] font-semibold leading-[0.9] tracking-[-0.025em] text-[var(--color-brand-300)] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="col-span-10 md:col-span-11 font-display text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.25] tracking-[-0.018em] text-white text-balance">
                  {d}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40 max-w-md">
          Cadence and ownership locked at the start. Reports shared on the agreed schedule.
        </p>
      </Container>
    </section>
  );
}

/* ───── 6. FAQ accordion ─────────────────────────────────── */

function HiringFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-5">
            <p className="kicker">Hiring questions</p>
            <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Things hiring teams ask before opening a role.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
              Cannot find your question here? Send the JD and we will respond with an SLA window in
              the first reply.
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

/* ───── 7. Other hiring rail ─────────────────────────────── */

function OtherHiringRail({ excludeSlug }: { excludeSlug: string }) {
  const others = hiringServices.filter((s) => s.slug !== excludeSlug).slice(0, 3);
  return (
    <section className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] section-y">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
          <div>
            <p className="kicker">Other hiring services</p>
            <h2 className="mt-2 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
              Continue exploring.
            </h2>
          </div>
          <a
            href="/hiring"
            className="group inline-flex items-center gap-1.5 self-start text-[12.5px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]"
          >
            <span className="under-slide">All hiring services</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {others.map((o) => (
            <a
              key={o.slug}
              href={`/hiring/${o.slug}`}
              className="group/c flex flex-col bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[8px] p-6 transition-all hover:border-[var(--color-brand-700)]/35 hover:-translate-y-0.5"
            >
              <span className="grid h-9 w-9 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)] transition-colors group-hover/c:bg-[var(--color-brand-700)] group-hover/c:text-white group-hover/c:ring-[var(--color-brand-700)]">
                <o.icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-[17px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                {o.name}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-fg-3)] line-clamp-2">{o.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--color-fg)] group-hover/c:text-[var(--color-brand-700)]">
                Read service
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
  );
}

/* ───── 8. Closing CTA ───────────────────────────────────── */

function ClosingCta({ serviceName }: { serviceName: string }) {
  return (
    <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Open a role</p>
            <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Send the JD. We respond with a shortlist and a time-to-fill commitment.
            </h2>
            <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)]">
              One email or a short call is enough to start a {serviceName.toLowerCase()} engagement.
              The first reply carries an SLA window. The first shortlist follows the screening report.
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
                href="/hiring"
                className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] ring-1 ring-inset ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
              >
                All hiring services
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
