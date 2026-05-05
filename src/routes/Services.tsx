import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { segments } from '@/data/segments';
import {
  collegeServices,
  schoolServices,
  businessServices,
  hiringServices,
  type SegmentService,
} from '@/data/segmentServices';
import { studentServices } from '@/data/studentServices';

type SegmentSlug = 'students' | 'colleges' | 'schools' | 'businesses' | 'hiring';

const SEGMENT_SERVICES: Record<SegmentSlug, SegmentService[]> = {
  students: studentServices.map((s) => ({
    slug: s.slug,
    name: s.name,
    kicker: s.kicker,
    tagline: s.tagline,
    summary: s.summary,
    icon: s.icon,
  })),
  colleges: collegeServices,
  schools: schoolServices,
  businesses: businessServices,
  hiring: hiringServices,
};

const TOTAL_SERVICES =
  studentServices.length +
  collegeServices.length +
  schoolServices.length +
  businessServices.length +
  hiringServices.length;

const PATTERNS = [
  {
    code: 'A · B',
    title: 'Campus training feeds intern supply.',
    body:
      'Students who pass through college cohorts move into the intern bench we offer hiring partners. The same screening and review history travels with them.',
    pair: 'Colleges → Hiring',
  },
  {
    code: 'B · C',
    title: 'Schools build the upstream.',
    body:
      'Lab and curriculum work with K-12 schools is upstream of every other segment — the students who use NEP-aligned ATL labs at fourteen are the candidates colleges receive at eighteen.',
    pair: 'Schools → Students',
  },
  {
    code: 'C · D',
    title: 'Businesses host the work.',
    body:
      'Internships, project sprints, and hire-build-buy decisions for businesses are staffed from the same pool we train. The host site becomes the next reference engagement.',
    pair: 'Students → Businesses',
  },
  {
    code: 'D · E',
    title: 'Hiring closes the loop.',
    body:
      'Permanent and contract roles run by the recruitment desk pull from the same bench, with assessment reports already on file. The pipeline shortens, the time-to-fill shrinks.',
    pair: 'Businesses → Hiring',
  },
];

export function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 01 — Editorial hero */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-14 md:pb-20 border-b border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  Services / Index
                </p>
                <h1 className="mt-6 font-display text-[40px] md:text-[60px] lg:text-[76px] font-semibold leading-[0.98] tracking-[-0.028em] text-[var(--color-fg)] text-balance">
                  {TOTAL_SERVICES} services across{' '}
                  <span className="text-[var(--color-brand-700)]">five audience segments.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                  One practice, organised around the audience it serves. Each segment runs against the
                  same operating model — written plans, named owners, quarterly cadence — and pulls from
                  the same talent pool.
                </p>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
                  How to read this page
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  Start with the segment index below. Each row is a hub. Below that, every service for
                  every segment is listed with a link through to its sub-page.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 02 — Segment index — 5-row table */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-10 md:mb-14">
              <div className="lg:col-span-7">
                <p className="kicker">Segment index</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Five segments, equally weighted.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  No segment runs as the headline; no segment runs as the side hustle. Each one is a fully
                  resourced practice with its own desk, cadence, and review cycle.
                </p>
              </div>
            </div>

            <ol className="border-t-2 border-[var(--color-fg)]">
              {segments.map((s, i) => {
                const services = SEGMENT_SERVICES[s.slug as SegmentSlug] ?? [];
                const keyServices = services
                  .slice(0, 3)
                  .map((sv) => sv.name)
                  .join(' · ');
                return (
                  <Reveal as="li" key={s.slug} delay={i * 50}>
                    <a
                      href={`/${s.slug}`}
                      className="row-hover group/seg grid grid-cols-12 items-baseline gap-x-3 lg:gap-x-8 gap-y-3 border-b border-[var(--color-line)] py-7 md:py-9"
                    >
                      <span className="col-span-2 sm:col-span-1 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[0.9] tracking-[-0.025em] text-[var(--color-brand-700)] tabular-nums">
                        {s.index}
                      </span>
                      <h3 className="col-span-10 sm:col-span-3 font-display text-[20px] md:text-[24px] lg:text-[28px] font-semibold tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                        <span className="under-slide">{s.name}</span>
                      </h3>
                      <p className="col-span-12 sm:col-span-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-4)] tabular-nums">
                        {String(services.length).padStart(2, '0')} services
                      </p>
                      <p className="col-span-12 sm:col-span-5 text-[13.5px] md:text-[14.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                        {keyServices}
                      </p>
                      <ArrowUpRight
                        className="col-span-12 sm:col-span-1 ml-auto h-5 w-5 text-[var(--color-fg-5)] transition-all group-hover/seg:text-[var(--color-brand-700)] group-hover/seg:translate-x-0.5 group-hover/seg:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </a>
                  </Reveal>
                );
              })}
            </ol>
          </Container>
        </section>

        {/* 03 — Per-segment detail blocks: alternating list (odd) and grid (even) */}
        {segments.map((seg, idx) => {
          const services = SEGMENT_SERVICES[seg.slug as SegmentSlug] ?? [];
          const layoutMode = idx % 2 === 0 ? 'list' : 'grid';
          const surface = idx % 2 === 0 ? 'bg-[var(--color-canvas)]' : 'bg-[var(--color-bg)]';
          const isLast = idx === segments.length - 1;
          return (
            <section
              key={seg.slug}
              id={seg.slug}
              className={`${surface} ${idx === 0 ? 'border-t border-[var(--color-line)]' : ''} ${
                !isLast ? 'border-b border-[var(--color-line)]' : ''
              } py-16 md:py-20 lg:py-24`}
            >
              <Container>
                {/* Segment header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-10 md:mb-14 items-end">
                  <div className="lg:col-span-7">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      Segment {seg.index} / {seg.name}
                    </p>
                    <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[52px] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                      {seg.outcome}
                    </h2>
                    <p className="mt-5 max-w-2xl text-[14.5px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                      {seg.intent}
                    </p>
                  </div>
                  <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                    <a
                      href={`/${seg.slug}`}
                      className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-fg)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-700)] self-start lg:self-end"
                    >
                      Visit the {seg.name.toLowerCase()} hub
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </a>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] self-start lg:self-end">
                      {String(services.length).padStart(2, '0')} services · {seg.audience}
                    </p>
                  </div>
                </div>

                {/* Service body — alternates list/grid */}
                {layoutMode === 'list' ? (
                  <ol className="border-t border-[var(--color-fg)]">
                    {services.map((sv, i) => (
                      <Reveal as="li" key={sv.slug} delay={i * 40}>
                        <a
                          href={`/${seg.slug}/${sv.slug}`}
                          className="row-hover group/r grid grid-cols-12 items-baseline gap-x-4 lg:gap-x-8 gap-y-2 border-b border-[var(--color-line)] py-6 md:py-7"
                        >
                          <span className="col-span-2 sm:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="col-span-10 sm:col-span-4 font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                            <span className="under-slide">{sv.name}</span>
                          </h3>
                          <p className="col-span-12 sm:col-span-6 text-[13.5px] md:text-[14px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                            {sv.summary}
                          </p>
                          <ArrowUpRight
                            className="col-span-12 sm:col-span-1 ml-auto h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover/r:text-[var(--color-brand-700)] group-hover/r:translate-x-0.5 group-hover/r:-translate-y-0.5"
                            strokeWidth={2}
                          />
                        </a>
                      </Reveal>
                    ))}
                  </ol>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {services.map((sv, i) => (
                      <Reveal key={sv.slug} delay={i * 50}>
                        <a
                          href={`/${seg.slug}/${sv.slug}`}
                          className="group/c relative h-full flex flex-col bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[12px] p-6 md:p-7 transition-all duration-300 hover:border-[var(--color-brand-700)]/35 hover:shadow-[0_18px_40px_-20px_rgba(11,18,32,0.18)]"
                        >
                          <div className="flex items-start justify-between">
                            <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-[var(--color-brand-50)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-100)] transition-colors group-hover/c:bg-[var(--color-brand-700)] group-hover/c:text-white group-hover/c:ring-[var(--color-brand-700)]">
                              <sv.icon className="h-5 w-5" strokeWidth={1.75} />
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)] tabular-nums">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <h3 className="mt-7 font-display text-[19px] md:text-[20px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                            {sv.name}
                          </h3>
                          <p className="mt-2 text-[13.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty flex-1">
                            {sv.summary}
                          </p>
                          <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]">
                            <span className="under-slide">Read service</span>
                            <ArrowUpRight
                              className="h-3.5 w-3.5 transition-all group-hover/c:translate-x-0.5 group-hover/c:-translate-y-0.5"
                              strokeWidth={2.25}
                            />
                          </div>
                        </a>
                      </Reveal>
                    ))}
                  </div>
                )}
              </Container>
            </section>
          );
        })}

        {/* 04 — Cross-segment patterns — dark band */}
        <section className="bg-[var(--color-fg)] text-white py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-12 md:mb-14">
              <div className="lg:col-span-6">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-300)]">
                  Cross-segment patterns
                </p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[52px] font-semibold leading-[1.04] tracking-[-0.024em] text-white text-balance">
                  How the five segments connect.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:pt-2">
                <p className="max-w-xl text-[14.5px] md:text-[15px] leading-[1.7] text-white/65">
                  The segments aren&apos;t five separate businesses sharing a brand. They share the same
                  candidate pool, the same engagement model, and the same review cadence. Four ways the
                  practice routes work between them.
                </p>
              </div>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 lg:gap-x-16">
              {PATTERNS.map((p, i) => (
                <Reveal as="li" key={p.code} delay={i * 70}>
                  <article className="border-l border-white/15 pl-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-display text-[28px] md:text-[32px] font-semibold leading-[1] tracking-[-0.025em] text-[var(--color-brand-300)] tabular-nums">
                        {p.code}
                      </p>
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/50">
                        {p.pair}
                      </p>
                    </div>
                    <h3 className="mt-4 font-display text-[20px] md:text-[24px] font-semibold tracking-[-0.02em] text-white text-balance">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-prose text-[14px] leading-[1.7] text-white/70 text-pretty">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* 05 — Closing CTA */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Brief us</p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Tell us the segment, the brief, and the timeline. We&apos;ll respond with a plan.
                </h2>
                <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  One email or a short call is enough to start. We come back on a single named thread with
                  the right desk in copy, within one working day.
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
                    href="/about"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] ring-1 ring-inset ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    About the practice
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
