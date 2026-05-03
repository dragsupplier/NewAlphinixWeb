import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { segments } from '@/data/segments';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-navy-900)] text-white">
      {/* Subtle abstract design — single low-opacity outlined geometric shape, no blueprint grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[640px] w-[640px] opacity-[0.06]"
        viewBox="0 0 640 640"
        fill="none"
      >
        <circle cx="320" cy="320" r="280" stroke="white" strokeWidth="1" />
        <circle cx="320" cy="320" r="200" stroke="white" strokeWidth="1" />
        <circle cx="320" cy="320" r="120" stroke="white" strokeWidth="1" />
      </svg>

      {/* Subtle right-edge corner mark */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-[480px] w-[480px] opacity-[0.04]"
        viewBox="0 0 480 480"
        fill="none"
      >
        <rect x="40" y="40" width="400" height="400" stroke="white" strokeWidth="1" />
        <rect x="80" y="80" width="320" height="320" stroke="white" strokeWidth="1" />
        <rect x="120" y="120" width="240" height="240" stroke="white" strokeWidth="1" />
      </svg>

      <Container className="relative">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 items-end"
          style={{ minHeight: 'min(720px, 86vh)', paddingTop: '8.5rem', paddingBottom: '5rem' }}
        >
          <div className="lg:col-span-10 mount-up">
            <p className="kicker kicker-on-dark">
              Pune · Maharashtra · India · Technology platform
            </p>

            <h1
              className="mt-7 font-display font-bold tracking-[-0.025em] text-white text-balance"
              style={{ fontSize: 'clamp(2.5rem, 7.6vw, 6.75rem)', lineHeight: 0.96 }}
            >
              Technology services across <br className="hidden md:block" />
              education, training, and hiring.
            </h1>

            <p
              className="mt-7 max-w-2xl text-[1.0625rem] md:text-[1.1875rem] leading-relaxed text-white/75 text-pretty mount-up"
              style={{ animationDelay: '120ms' }}
            >
              Alphinix delivers programs, infrastructure, software, and recruitment services to colleges,
              schools, businesses, and hiring teams across India — from a single Pune-based practice.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 mount-up"
              style={{ animationDelay: '220ms' }}
            >
              <ButtonLink
                href="/contact"
                size="lg"
                trailingArrow
                className="!bg-white !text-[var(--color-navy-900)] hover:!bg-white/90"
              >
                Talk to us
              </ButtonLink>
              <ButtonLink
                href="/services"
                size="lg"
                className="!bg-transparent !text-white !ring-1 !ring-inset !ring-white/35 hover:!ring-white/65"
              >
                View services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom audience strip — slim horizontal */}
      <div className="relative border-t border-white/10">
        <Container>
          <ul className="flex items-stretch divide-x divide-white/10">
            {segments.map((s) => (
              <li key={s.slug} className="flex-1">
                <a
                  href={`#audiences-${s.slug}`}
                  className="group flex h-full flex-col gap-1 px-3 py-4 sm:px-5 md:px-6 md:py-5 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/55">
                    Segment {s.index}
                  </span>
                  <span className="font-display text-[0.9375rem] sm:text-[1.0625rem] md:text-[1.125rem] font-bold tracking-[-0.01em] text-white">
                    {s.name}
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
