import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AudienceTabs() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // Recompute the underline position whenever the active tab changes,
  // and once on mount so the underline starts in the right place.
  useEffect(() => {
    const tabs = tabsRef.current?.querySelectorAll<HTMLButtonElement>('[data-tab]');
    if (!tabs || !tabs[active]) return;
    const el = tabs[active];
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  useEffect(() => {
    const onResize = () => {
      const tabs = tabsRef.current?.querySelectorAll<HTMLButtonElement>('[data-tab]');
      if (!tabs || !tabs[active]) return;
      const el = tabs[active];
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  const seg = segments[active]!;

  return (
    <section
      id="audiences"
      className="relative py-20 md:py-28"
    >
      <Container>
        {/* Section masthead */}
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Where you sit</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.75rem)', lineHeight: 1 }}
            >
              Five audiences. <br />
              One operating practice.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
              Pick the audience you belong to. The work, the team, and the deliverables shift accordingly —
              the practice does not.
            </p>
          </div>
        </div>

        {/* Tab nav */}
        <div className="relative">
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Audience segments"
            className="relative flex overflow-x-auto snap-strip border-b border-[var(--color-line)]"
          >
            {segments.map((s, i) => (
              <button
                key={s.slug}
                data-tab
                role="tab"
                aria-selected={i === active}
                aria-controls={`audience-panel-${s.slug}`}
                onClick={() => setActive(i)}
                className={cn(
                  'group relative flex shrink-0 items-baseline gap-2 px-4 py-4 md:px-6 md:py-5 transition-colors',
                  i === active ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted-strong)] hover:text-[var(--color-ink)]',
                )}
              >
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.16em] opacity-70">
                  {s.index}
                </span>
                <span className="font-display text-[1rem] md:text-[1.125rem] font-bold tracking-[-0.01em]">
                  {s.name}
                </span>
              </button>
            ))}
            <span
              aria-hidden="true"
              className="tab-indicator"
              style={{ left: indicator.left, width: indicator.width }}
            />
          </div>
        </div>

        {/* Active panel */}
        <div
          key={seg.slug}
          id={`audience-panel-${seg.slug}`}
          role="tabpanel"
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 mt-12 md:mt-14 mount-up"
        >
          {/* Left — massive number + segment label */}
          <div className="lg:col-span-4">
            <div className="relative">
              <span
                aria-hidden="true"
                className="block font-display font-black tracking-[-0.04em] leading-[0.8] text-[var(--color-brand-50)]"
                style={{ fontSize: 'clamp(8rem, 16vw, 14rem)' }}
              >
                {seg.index}
              </span>
              <div className="mt-2">
                <p className="eyebrow">{seg.audience}</p>
                <h3
                  className="mt-3 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}
                >
                  {seg.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Right — outcome + service list + CTA */}
          <div className="lg:col-span-8">
            <p
              className="font-display font-medium tracking-[-0.015em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(1.375rem, 2.6vw, 1.875rem)', lineHeight: 1.18 }}
            >
              {seg.outcome}
            </p>
            <p className="mt-5 max-w-2xl text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
              {seg.intent}
            </p>

            {/* Services in a 2-col list with hairline rows */}
            <div className="mt-8 border-t border-[var(--color-line)]">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {seg.services.map((srv) => (
                  <li
                    key={srv}
                    className="flex items-baseline justify-between border-b border-[var(--color-line)] py-3"
                  >
                    <a
                      href={`/${seg.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="group flex items-baseline gap-3 text-[0.9375rem] md:text-[1rem] text-[var(--color-ink)]"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-1 w-1 rounded-full"
                        style={{ backgroundColor: `var(${seg.colorVar})` }}
                      />
                      <span className="link-draw">{srv}</span>
                    </a>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100"
                      strokeWidth={2}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href={`/${seg.slug}`} variant="ink" size="md" trailingArrow>
                Go to the {seg.name.toLowerCase()} hub
              </ButtonLink>
              <a
                href="/contact"
                className="link-draw text-[0.9375rem] font-medium text-[var(--color-ink)]"
              >
                Or talk to us about {seg.name.toLowerCase()}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
