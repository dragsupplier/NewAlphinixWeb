import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { segments } from '@/data/segments';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-navy-950)] text-white">
      {/* Vertical light beam — single soft column running behind the text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-[42%] max-w-[640px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(58, 88, 150, 0.18) 0%, rgba(58, 88, 150, 0.34) 35%, rgba(58, 88, 150, 0.34) 65%, rgba(58, 88, 150, 0.18) 100%)',
          filter: 'blur(48px)',
        }}
      />

      {/* Sharper inner column — gives the beam a defined edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-[18%] max-w-[260px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(91, 120, 179, 0.0) 0%, rgba(91, 120, 179, 0.20) 30%, rgba(91, 120, 179, 0.20) 70%, rgba(91, 120, 179, 0.0) 100%)',
          filter: 'blur(20px)',
        }}
      />

      <Container className="relative">
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{ minHeight: 'min(760px, 88vh)', paddingTop: '8.5rem', paddingBottom: '6rem' }}
        >
          {/* Announcement pill */}
          <a
            href="/students/industrial-training"
            className="mount-up group inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1.5 text-[0.8125rem] backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
          >
            <span className="rounded-full bg-[var(--color-navy-500)] px-3 py-1 text-[0.75rem] font-semibold text-white">
              New cohort
            </span>
            <span className="text-white/80 hidden sm:inline">
              Industrial training — July 2026 batch open
            </span>
            <span className="text-white/80 sm:hidden">July 2026 batch open</span>
            <span className="inline-flex items-center gap-1 pr-2 text-white">
              Learn more
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </span>
          </a>

          {/* Headline */}
          <h1
            className="mt-10 md:mt-12 mount-up font-display font-bold tracking-[-0.03em] text-white text-balance"
            style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', lineHeight: 0.96, animationDelay: '80ms' }}
          >
            Education, technology, <br className="hidden sm:block" />
            and hiring. Done right.
          </h1>

          {/* Subhead */}
          <p
            className="mt-7 max-w-2xl mount-up text-[1rem] md:text-[1.1875rem] leading-relaxed text-white/70 text-pretty"
            style={{ animationDelay: '180ms' }}
          >
            Alphinix delivers programs, infrastructure, software, and recruitment services to colleges,
            schools, businesses, and hiring teams across India — from a single Pune-based practice.
          </p>

          {/* Single CTA */}
          <div
            className="mt-10 mount-up"
            style={{ animationDelay: '280ms' }}
          >
            <ButtonLink
              href="/services"
              size="lg"
              trailingArrow
              className="!bg-[var(--color-navy-800)] !text-white !ring-1 !ring-inset !ring-white/15 hover:!bg-[var(--color-navy-700)] hover:!ring-white/30"
            >
              Explore the platform
            </ButtonLink>
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
