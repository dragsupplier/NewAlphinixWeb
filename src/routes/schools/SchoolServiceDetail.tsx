/**
 * @file SchoolServiceDetail.tsx
 * @purpose Shared detail-page template for every school programme.
 *          Magazine-style hero, sticky-spine timeline, signature, deliverables, FAQ, rail, CTA.
 */

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { Stub } from '@/routes/Stub';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { findSchoolDetail } from '@/data/schoolDetails';
import { schoolServices } from '@/data/segmentServices';
import { SchoolSignature } from '@/components/sections/schools/SchoolSignatures';

export function SchoolServiceDetail({ slug }: { slug: string }) {
  const service = schoolServices.find((s) => s.slug === slug);
  const detail = findSchoolDetail(slug);

  if (!service || !detail) {
    return <Stub kicker="404" title="Programme not found" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. Magazine-style hero */}
        <SchoolHero service={service} detail={detail} />

        {/* 2. Two-column body + ages / curriculum fit */}
        <SchoolOverview detail={detail} />

        {/* 3. Phases / rollout — sticky-spine timeline */}
        <SchoolPhases phases={detail.phases} />

        {/* 4. Signature section per slug */}
        <SchoolSignature slug={detail.slug} />

        {/* 5. Deliverables — mixed list/grid */}
        <SchoolDeliverables deliverables={detail.deliverables} />

        {/* 6. FAQs — accordion */}
        <SchoolFaq faqs={detail.faqs} />

        {/* 7. Other school programmes rail */}
        <OtherSchoolProgrammesRail excludeSlug={detail.slug} />

        {/* 8. Closing CTA on brand-950 */}
        <SchoolCtaBand serviceName={service.name} />
      </main>
      <Footer />
    </div>
  );
}

/* ───── 1. Hero ─────────────────────────────────────────── */

function SchoolHero({
  service,
  detail,
}: {
  service: { name: string; kicker: string; tagline: string };
  detail: { ages: string[] };
}) {
  return (
    <section className="relative bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 overflow-hidden">
      {/* Soft brand band on the top edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-200)] to-transparent"
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
          <div className="lg:col-span-8">
            {/* Breadcrumb */}
            <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold">
              <a href="/schools" className="text-[var(--color-fg-5)] hover:text-[var(--color-brand-700)] transition-colors">
                Schools
              </a>
              <ChevronRight className="h-3 w-3 text-[var(--color-fg-5)]" strokeWidth={2.25} />
              <span className="text-[var(--color-brand-700)]">{service.kicker}</span>
            </p>

            <h1 className="mt-5 font-display text-[40px] md:text-[60px] lg:text-[76px] font-semibold leading-[0.98] tracking-[-0.028em] text-[var(--color-fg)] text-balance">
              {service.name}.
              <br />
              <span className="text-[var(--color-brand-700)]">{service.tagline}</span>
            </h1>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
              >
                Plan a school visit
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </a>
              <a
                href="/schools#programmes"
                className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
              >
                Back to all programmes
              </a>
            </div>
          </div>

          {/* Meta column — ages / format / NEP */}
          <div className="lg:col-span-4">
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5 lg:border-l lg:border-[var(--color-line)] lg:pl-8">
              <li>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Age groups
                </p>
                <p className="mt-1.5 font-display text-[15px] md:text-[16px] font-semibold tracking-[-0.018em] text-[var(--color-fg)] leading-[1.3]">
                  {detail.ages.slice(0, 3).join(' · ')}
                </p>
              </li>
              <li>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Format
                </p>
                <p className="mt-1.5 font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  Lab + curriculum + teacher onboarding
                </p>
              </li>
              <li>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Aligned with
                </p>
                <p className="mt-1.5 inline-flex items-center gap-2">
                  <span className="inline-flex items-center font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] rounded-full px-2.5 py-1">
                    NEP 2020
                  </span>
                  <span className="inline-flex items-center font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] rounded-full px-2.5 py-1">
                    K-12
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───── 2. Overview — body + ages / curriculum fit ─────── */

function SchoolOverview({
  detail,
}: {
  detail: { body: string; ages: string[]; curriculumFit: string[] };
}) {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
          {/* Left — body + ages */}
          <div className="lg:col-span-7">
            <p className="kicker">About the programme</p>
            <p className="mt-5 font-display text-[22px] md:text-[26px] lg:text-[30px] font-semibold leading-[1.2] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
              {detail.body}
            </p>

            <div className="mt-10">
              <p className="kicker">Who it serves</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {detail.ages.map((a) => (
                  <li
                    key={a}
                    className="flex items-baseline gap-3 text-[14px] leading-[1.55] text-[var(--color-fg-2)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-700)]"
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — curriculum fit panel */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[12px] p-6 md:p-7">
              <div className="flex items-baseline justify-between">
                <p className="kicker">Curriculum fit</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                  Boards & frameworks
                </span>
              </div>
              <ul className="mt-5 divide-y divide-[var(--color-line)]">
                {detail.curriculumFit.map((c) => (
                  <li key={c} className="flex items-start gap-3 py-3 first:pt-0">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-700)]"
                      strokeWidth={2}
                    />
                    <span className="text-[13.5px] leading-[1.55] text-[var(--color-fg-2)]">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

/* ───── 3. Phases — sticky-spine vertical timeline ─────── */

function SchoolPhases({ phases }: { phases: { title: string; body: string }[] }) {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="kicker">From visit to working lab</p>
              <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                The same shape, every school.
              </h2>
              <p className="mt-5 max-w-md text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                A documented rollout that academic heads, parents, and trustees can follow — phase by phase,
                with a clear handover at the end.
              </p>
            </div>
          </div>

          <ol className="lg:col-span-8 relative pl-7 md:pl-10">
            <span
              aria-hidden="true"
              className="absolute left-1.5 md:left-[14px] top-2 bottom-3 w-px bg-[var(--color-brand-700)]"
            />
            <div className="space-y-8 md:space-y-10">
              {phases.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 70} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[26px] md:-left-[34px] top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
                  />
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    Phase {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-display text-[20px] md:text-[24px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[14px] md:text-[14.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ───── 5. Deliverables — warm mixed list/grid ──────────── */

function SchoolDeliverables({ deliverables }: { deliverables: string[] }) {
  if (!deliverables.length) return null;
  // Pull the headline deliverable into a feature card and lay the rest as a list.
  const [first, ...rest] = deliverables;

  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end mb-10 md:mb-12">
          <div className="lg:col-span-7">
            <p className="kicker">What the school receives</p>
            <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Everything you walk into on day one.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
              The list below is what is in the room when teachers and students arrive. Nothing is sketched on a
              proposal slide and then abandoned at handover.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {/* Feature card — first deliverable */}
          <Reveal className="lg:col-span-5">
            <article className="h-full bg-[var(--color-brand-700)] text-white rounded-[14px] p-7 md:p-9 flex flex-col">
              <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-white/10 text-[var(--color-brand-200)] ring-1 ring-white/15">
                <Sparkles className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-7 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-200)]">
                Deliverable 01
              </p>
              <h3 className="mt-3 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold leading-[1.18] tracking-[-0.018em] text-balance">
                {first}
              </h3>
              <p className="mt-auto pt-8 text-[12.5px] leading-[1.55] text-white/70">
                Listed in the project register and signed off at the inauguration walkthrough.
              </p>
            </article>
          </Reveal>

          {/* The rest — mixed list grid */}
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {rest.map((d, i) => (
              <Reveal as="li" key={d} delay={i * 50}>
                <article className="h-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-5 md:p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    Deliverable {String(i + 2).padStart(2, '0')}
                  </span>
                  <p className="mt-3 text-[14px] leading-[1.5] font-medium text-[var(--color-fg)] text-pretty">
                    {d}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ───── 6. FAQ — accordion ──────────────────────────────── */

function SchoolFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="lg:col-span-5">
            <p className="kicker">Programme questions</p>
            <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              The questions schools usually ask first.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
              Cannot find the answer here? A short email or call gets you a written reply within one working
              day, with a draft plan attached if useful.
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

/* ───── 7. Other school programmes rail ─────────────────── */

function OtherSchoolProgrammesRail({ excludeSlug }: { excludeSlug: string }) {
  const others = schoolServices.filter((s) => s.slug !== excludeSlug).slice(0, 3);
  return (
    <section className="bg-[var(--color-canvas)] border-t border-[var(--color-line)] section-y">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
          <div>
            <p className="kicker">Other programmes</p>
            <h2 className="mt-2 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
              Continue exploring.
            </h2>
          </div>
          <a
            href="/schools#programmes"
            className="group inline-flex items-center gap-1.5 self-start text-[12.5px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]"
          >
            <span className="under-slide">All programmes</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {others.map((o) => (
            <a
              key={o.slug}
              href={`/schools/${o.slug}`}
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
                Read programme
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

/* ───── 8. Closing CTA on brand-950 ─────────────────────── */

function SchoolCtaBand({ serviceName }: { serviceName: string }) {
  return (
    <section className="bg-[var(--color-brand-950)] text-white">
      <Container>
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
            <div className="lg:col-span-7">
              <p className="kicker kicker-on-dark">Plan a visit</p>
              <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
                Tell us your grade band and the room you have. We'll bring the {serviceName.toLowerCase()} plan.
              </h2>
              <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/70 text-pretty">
                A short call or email is enough to start. We respond within one working day with a draft plan,
                kit list, and curriculum integration map for your school.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[14px] font-semibold text-[var(--color-brand-950)] transition-colors hover:bg-white/90"
                >
                  Plan a school visit
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </a>
                <a
                  href="/schools#programmes"
                  className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/30 transition-colors hover:ring-white/60"
                >
                  All programmes
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
