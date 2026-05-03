import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { segments } from '@/data/segments';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-ink-deep)] text-white">
      {/* Brand-blue radial glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[680px] w-[680px] rounded-full bg-[var(--color-brand-500)]/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full bg-[var(--color-accent-500)]/12 blur-[120px]"
      />

      {/* Faint blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 50%, #000 35%, transparent 100%)',
        }}
      />

      <Container className="relative">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-12"
          style={{ minHeight: 'min(720px, 86vh)', paddingTop: '8.5rem', paddingBottom: '6rem' }}
        >
          <div className="lg:col-span-10 mount-up">
            <h1
              className="font-display font-bold tracking-[-0.025em] text-white text-balance"
              style={{ fontSize: 'clamp(2.75rem, 8vw, 7.5rem)', lineHeight: 0.94 }}
            >
              Where India moves <br className="hidden sm:block" />
              from learning <br className="hidden sm:block" />
              <span className="text-[var(--color-brand-300)]">to earning.</span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-relaxed text-white/75 text-pretty mount-up"
              style={{ animationDelay: '120ms' }}
            >
              A Pune-based technology platform that serves five connected audiences from one engineering and
              consulting practice — students, colleges, schools, businesses, and the hiring teams that absorb
              the talent we train.
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
                className="!bg-transparent !text-white !ring-1 !ring-inset !ring-white/30 hover:!bg-white/[0.06] hover:!ring-white/55"
              >
                See services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom audience strip */}
      <div className="relative border-t border-white/10">
        <Container>
          <ul className="flex items-stretch divide-x divide-white/10">
            {segments.map((s) => (
              <li key={s.slug} className="flex-1">
                <a
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col gap-1 px-3 py-5 sm:px-5 md:px-6 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/50">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: `var(${s.colorVar})` }}
                    />
                    {s.index}
                  </span>
                  <span className="font-display text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] font-bold tracking-[-0.01em] text-white">
                    {s.name}
                  </span>
                  <span className="hidden md:block text-[0.75rem] leading-snug text-white/55">
                    {s.audience}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
