import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { schoolServices } from '@/data/segmentServices';

const STEPS = [
  { title: 'Survey',         body: 'A school visit and a short conversation with the leadership team to understand the space, the grades involved, and the timetable.' },
  { title: 'Plan',           body: 'A written lab plan covering the room layout, the kit list, the curriculum integration, and the cadence for the academic year.' },
  { title: 'Setup',          body: 'Full physical setup of the lab — fixtures, kits, software, and the first set of classroom materials.' },
  { title: 'Teacher onboard', body: 'Cohort-based teacher onboarding so the staff can run the lab confidently from week one.' },
  { title: 'Steady state',   body: 'Quarterly check-ins, kit refreshes, and curriculum updates — the lab stays alive across academic years.' },
];

export function SchoolsHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — story-led, warmer voice */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-14 md:pb-20">
          <Container>
            <div className="max-w-4xl">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                Audience 03 / K-12 Schools
              </p>
              <h1 className="mt-5 font-display text-[40px] md:text-[60px] lg:text-[76px] font-semibold leading-[0.98] tracking-[-0.028em] text-[var(--color-fg)] text-balance">
                Future-tech learning,
                <br />
                <span className="text-[var(--color-brand-700)]">set up the right way.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                AI, robotics, coding, IoT, and STEM/ATL labs delivered with hardware, lesson plans, and teacher
                onboarding — designed against NEP 2020 and the published ATL guidelines.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
                >
                  Plan a school visit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </a>
                <a
                  href="#programmes"
                  className="inline-flex items-center gap-1.5 text-[14px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
                >
                  <span className="under-slide">See programmes</span>
                  <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* NEP 2020 / ATL alignment band — feature strip */}
        <section className="bg-[var(--color-brand-50)] border-y border-[var(--color-brand-100)] py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 items-center">
              <div className="lg:col-span-3">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  Aligned with
                </p>
                <p className="mt-2 font-display text-[32px] md:text-[40px] font-semibold leading-[0.98] tracking-[-0.025em] text-[var(--color-brand-700)]">
                  NEP 2020
                </p>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[15px] md:text-[17px] leading-[1.6] text-[var(--color-fg-2)] text-pretty">
                  Programmes follow the foundational, preparatory, middle, and secondary stage requirements
                  laid out in the National Education Policy. ATL-tagged labs are set up against the published
                  ATL guidelines — so accreditation conversations stay simple.
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
                <span className="inline-flex items-center font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] bg-[var(--color-bg)] border border-[var(--color-brand-100)] rounded-full px-3 py-1.5">
                  ATL
                </span>
                <span className="inline-flex items-center font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] bg-[var(--color-bg)] border border-[var(--color-brand-100)] rounded-full px-3 py-1.5">
                  NEP 2020
                </span>
                <span className="inline-flex items-center font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] bg-[var(--color-bg)] border border-[var(--color-brand-100)] rounded-full px-3 py-1.5">
                  K-12
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Programmes — horizontal scroll showcase */}
        <section id="programmes" className="bg-[var(--color-bg)] pt-16 md:pt-20 pb-2">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 items-end mb-10 md:mb-12">
              <div className="lg:col-span-7">
                <p className="kicker">Programmes</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Six programmes, mapped to the grades.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Programmes can run independently or as a connected stack across grades. Hardware and
                  curriculum are picked once the grade band and the lab space are confirmed.
                </p>
              </div>
            </div>
          </Container>

          {/* Horizontal scroll-snap rail */}
          <div className="relative">
            <div
              className="flex snap-strip overflow-x-auto pb-12 md:pb-16 px-5 md:px-8 lg:px-[max(2rem,calc((100vw-1280px)/2+2rem))] gap-4 md:gap-5"
              style={{ scrollPaddingLeft: '2rem' }}
            >
              {schoolServices.map((s, i) => (
                <Reveal key={s.slug} delay={i * 60} className="snap-start shrink-0 w-[280px] md:w-[320px] lg:w-[360px]">
                  <a
                    href={`/schools/${s.slug}`}
                    className="group/p relative h-full flex flex-col bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[12px] p-6 md:p-7 transition-all duration-300 hover:border-[var(--color-brand-700)]/35 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_rgba(11,18,32,0.18)] min-h-[340px]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-[var(--color-brand-50)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-100)] transition-colors group-hover/p:bg-[var(--color-brand-700)] group-hover/p:text-white group-hover/p:ring-[var(--color-brand-700)]">
                        <s.icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                        {s.kicker}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-[20px] md:text-[22px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                      {s.summary}
                    </p>
                    <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[12.5px] font-mono uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]">
                      <span className="under-slide">Read programme</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-all group-hover/p:translate-x-0.5 group-hover/p:-translate-y-0.5"
                        strokeWidth={2.25}
                      />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-12 w-12 md:w-20 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none" />
          </div>
        </section>

        {/* Lab-setup journey — vertical sticky spine */}
        <section className="bg-[var(--color-canvas)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <p className="kicker">From visit to working lab</p>
                  <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                    The same shape, every school.
                  </h2>
                  <p className="mt-5 max-w-md text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                    A documented setup journey that schools, parents, and trustees can follow — from the first
                    visit through to a working lab handed back to the teaching staff.
                  </p>
                </div>
              </div>

              <ol className="lg:col-span-8 relative pl-7 md:pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-1.5 md:left-[14px] top-2 bottom-3 w-px bg-[var(--color-brand-700)]"
                />
                <div className="space-y-8 md:space-y-10">
                  {STEPS.map((s, i) => (
                    <Reveal as="li" key={s.title} delay={i * 70} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[26px] md:-left-[34px] top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-canvas)]"
                      />
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        Step {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-2 font-display text-[20px] md:text-[24px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[14px] md:text-[14.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                        {s.body}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </ol>
            </div>
          </Container>
        </section>

        {/* Closing CTA */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20">
          <Container>
            <div className="border border-[var(--color-line)] bg-[var(--color-canvas)] rounded-[16px] p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
                <div className="lg:col-span-7">
                  <p className="kicker">Plan a school visit</p>
                  <h2 className="mt-4 font-display text-[26px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                    Tell us your grade band and the room you have. We'll bring the lab plan.
                  </h2>
                  <p className="mt-5 max-w-2xl text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                    A short call or email is enough to start. We respond within one working day with a draft
                    plan, kit list, and curriculum integration map for your school.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                    <a
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-800)]"
                    >
                      Plan a visit
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] ring-1 ring-inset ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-bg)]"
                    >
                      All segments
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
