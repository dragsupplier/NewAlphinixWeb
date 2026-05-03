import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { HeroDiagram } from '@/components/visuals/HeroDiagram';
import { segments } from '@/data/segments';

export function Hero() {
  return (
    <section className="relative pt-10 md:pt-16 pb-20 md:pb-28 overflow-hidden">
      <Container>
        {/* Architectural masthead — measurement rule + serial labels */}
        <div className="relative">
          <div className="flex items-baseline justify-between font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            <span className="dot-accent">Pune · Maharashtra · India</span>
            <span className="hidden sm:inline">Section 01 / The platform</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">A</span>
            <div className="measure-rule flex-1 text-[var(--color-ink)]" />
            <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">B</span>
          </div>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 items-center">
          {/* Headline column */}
          <div className="lg:col-span-7">
            <h1
              className="mount-up font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.5rem, 6.6vw, 5.75rem)', lineHeight: 0.96 }}
            >
              Education, technology, <br className="hidden sm:block" />
              and hiring — built as <br className="hidden sm:block" />
              <span className="italic font-medium tracking-[-0.03em]">one practice.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/70 text-pretty mount-up"
              style={{ animationDelay: '120ms' }}
            >
              Alphinix serves five connected audiences from a single Pune-based team — students moving into work,
              institutions building capability, and the businesses that hire them.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 mount-up"
              style={{ animationDelay: '220ms' }}
            >
              <ButtonLink href="#audiences" variant="ink" size="lg" trailingArrow>
                Choose where you sit
              </ButtonLink>
              <a
                href="/about"
                className="link-draw text-[0.9375rem] font-medium text-[var(--color-ink)]"
              >
                Read about Alphinix
              </a>
            </div>

            {/* Inline meta strip */}
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: 'Audiences', v: '05' },
                { k: 'Service categories', v: '05' },
                { k: 'Operating from', v: 'Pune' },
              ].map((m) => (
                <div key={m.k} className="border-t border-[var(--color-ink)]/15 pt-3">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {m.k}
                  </dt>
                  <dd className="mt-1 font-display text-[1.5rem] font-bold text-[var(--color-ink)] tracking-[-0.02em]">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Diagram column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[520px]">
              <span className="bracket-tl text-[var(--color-ink)]" />
              <span className="bracket-tr text-[var(--color-ink)]" />
              <span className="bracket-bl text-[var(--color-ink)]" />
              <span className="bracket-br text-[var(--color-ink)]" />
              <div className="p-3 md:p-4">
                <HeroDiagram />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom segment strip — narrow, subtle, anchors the hero to the page */}
      <div className="mt-20 md:mt-24 border-y border-[var(--color-ink)]/10 bg-[var(--color-paper-warm)]">
        <Container>
          <div className="flex items-center gap-6 overflow-x-auto py-4 text-[0.75rem] uppercase tracking-[0.16em] text-[var(--color-muted)] font-mono whitespace-nowrap">
            <span className="text-[var(--color-ink)]">In service of —</span>
            {segments.map((s, i) => (
              <span key={s.slug} className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: `var(${s.colorVar})` }}
                />
                {s.name}
                {i < segments.length - 1 && <span className="ml-6 opacity-30">·</span>}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
