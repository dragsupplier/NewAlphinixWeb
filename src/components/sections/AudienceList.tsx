import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { segments } from '@/data/segments';

export function AudienceList() {
  return (
    <section
      id="audiences"
      className="border-t border-[var(--color-ink)]/10 bg-[var(--color-paper)] py-20 md:py-28"
    >
      <Container>
        {/* Section masthead */}
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Section 02 — Where you sit
            </p>
            <h2
              className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.25rem)', lineHeight: 1 }}
            >
              Five audiences. <br />
              One operating practice.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
              The platform is organised by who you are, not by what we sell. Pick the row that fits — every other
              page on this site is built around it.
            </p>
          </div>
        </div>

        {/* The five rows */}
        <div className="mt-14 md:mt-20">
          <div className="border-t border-[var(--color-ink)]/15" />
          {segments.map((s) => (
            <a
              key={s.slug}
              href={`/${s.slug}`}
              className="group block border-b border-[var(--color-ink)]/15 transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
            >
              <div className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 py-7 md:py-9">
                {/* Number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-mono text-[0.75rem] text-[var(--color-muted)] group-hover:text-[var(--color-paper)]/55">
                    {s.index}
                  </span>
                </div>

                {/* Name + audience */}
                <div className="col-span-10 sm:col-span-4">
                  <h3
                    className="font-display font-bold tracking-[-0.02em]"
                    style={{ fontSize: 'clamp(1.875rem, 4vw, 2.875rem)', lineHeight: 1 }}
                  >
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] uppercase tracking-[0.12em] text-[var(--color-muted)] group-hover:text-[var(--color-paper)]/55">
                    {s.audience}
                  </p>
                </div>

                {/* Outcome */}
                <div className="col-span-12 sm:col-span-6 sm:col-start-6 lg:col-start-7">
                  <p className="text-[1rem] leading-snug text-[var(--color-ink)]/80 group-hover:text-[var(--color-paper)]/85 md:text-[1.125rem]">
                    {s.outcome}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex col-span-1 col-start-12 justify-end">
                  <ArrowRight
                    className="h-5 w-5 text-[var(--color-ink)]/40 transition-all duration-300 group-hover:text-[var(--color-paper)] group-hover:translate-x-1"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
