import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { segments } from '@/data/segments';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden mesh-deep grain-ink text-white">
      {/* Faint blueprint grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 blueprint-grid" />

      <Container className="relative">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-12"
          style={{ minHeight: 'min(760px, 88vh)', paddingTop: '8.5rem', paddingBottom: '4rem' }}
        >
          <div className="lg:col-span-10 mount-up">
            <h1
              className="font-display font-bold tracking-[-0.025em] text-white text-balance"
              style={{ fontSize: 'clamp(2.75rem, 8.4vw, 8rem)', lineHeight: 0.92 }}
            >
              The platform for India&apos;s <br className="hidden sm:block" />
              talent and the teams <br className="hidden sm:block" />
              <span
                className="bg-gradient-to-r from-[var(--color-brand-300)] via-[var(--color-accent-500)] to-[var(--color-brand-300)] bg-clip-text text-transparent"
              >
                that hire them.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-relaxed text-white/75 text-pretty mount-up"
              style={{ animationDelay: '120ms' }}
            >
              Training, infrastructure, software, and hiring — under one engineering and consulting practice
              based in Pune. Built for students, colleges, schools, businesses, and the hiring teams that
              absorb the talent we train.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4 mount-up"
              style={{ animationDelay: '220ms' }}
            >
              <ButtonLink
                href="/contact"
                size="lg"
                trailingArrow
                className="!bg-white !text-[var(--color-ink)] hover:!bg-white/90"
              >
                Talk to us
              </ButtonLink>
              <ButtonLink
                href="/services"
                size="lg"
                className="!bg-white/[0.06] !text-white !ring-1 !ring-inset !ring-white/30 hover:!bg-white/[0.12] hover:!ring-white/55"
              >
                See services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      {/* Audience pivot strip */}
      <div className="relative border-t border-white/10 bg-[rgba(6,9,32,0.55)] backdrop-blur-sm">
        <Container>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0 lg:divide-x lg:divide-white/10 py-3 lg:py-0">
            <div className="flex shrink-0 items-center px-1 lg:px-6 py-2 lg:py-5">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
                Choose your audience
              </p>
            </div>
            <ul className="flex-1 flex items-stretch overflow-x-auto snap-strip lg:divide-x lg:divide-white/10">
              {segments.map((s) => (
                <li key={s.slug} className="flex-1 min-w-[160px]">
                  <a
                    href={`#audiences-${s.slug}`}
                    className="group flex h-full items-center gap-3 rounded-[8px] lg:rounded-none px-4 py-3 lg:px-6 lg:py-5 transition-colors hover:bg-white/[0.05]"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-2 w-2 rounded-full ring-2 ring-white/0 transition-shadow group-hover:ring-white/15"
                      style={{ backgroundColor: `var(${s.colorVar})` }}
                    />
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/55">
                      {s.index}
                    </span>
                    <span className="font-display text-[0.9375rem] md:text-[1.0625rem] font-bold tracking-[-0.01em] text-white">
                      {s.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
