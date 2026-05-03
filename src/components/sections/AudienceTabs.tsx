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

  useEffect(() => {
    const recompute = () => {
      const tabs = tabsRef.current?.querySelectorAll<HTMLButtonElement>('[data-tab]');
      if (!tabs || !tabs[active]) return;
      const el = tabs[active];
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    recompute();
    window.addEventListener('resize', recompute);
    return () => window.removeEventListener('resize', recompute);
  }, [active]);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith('#audiences-')) return;
      const slug = hash.replace('#audiences-', '');
      const idx = segments.findIndex((s) => s.slug === slug);
      if (idx >= 0) setActive(idx);
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const seg = segments[active]!;

  return (
    <section id="audiences" className="relative py-24 md:py-32 bg-[var(--color-paper)]">
      <Container>
        {/* Section masthead */}
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="kicker">Where you sit</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1 }}
            >
              Five audiences. One operating practice.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)] text-pretty">
              Alphinix is organised by who you are, not by what we sell. Pick the audience you belong to.
              Every other page on this site is built around it.
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
                  'group relative flex shrink-0 items-baseline gap-3 px-5 py-4 md:px-6 md:py-5 transition-colors',
                  i === active
                    ? 'text-[var(--color-ink)]'
                    : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
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
          className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 mount-up"
        >
          {/* Left — heading + intent */}
          <div className="lg:col-span-5">
            <p className="kicker">Segment {seg.index} — {seg.audience}</p>
            <h3
              className="mt-4 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)]"
              style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)', lineHeight: 1 }}
            >
              {seg.name}
            </h3>
            <p
              className="mt-6 max-w-xl font-display font-medium tracking-[-0.015em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.5rem)', lineHeight: 1.22 }}
            >
              {seg.outcome}
            </p>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[var(--color-ink-muted)] text-pretty">
              {seg.intent}
            </p>
            <div className="mt-8">
              <ButtonLink
                href={`/${seg.slug}`}
                size="md"
                trailingArrow
                className="!bg-[var(--color-navy-900)] !text-white hover:!bg-[var(--color-navy-800)]"
              >
                Visit the {seg.name.toLowerCase()} hub
              </ButtonLink>
            </div>
          </div>

          {/* Right — service list with hairline rows */}
          <div className="lg:col-span-7">
            <p className="kicker">Services for {seg.name.toLowerCase()}</p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-[var(--color-line)]">
              {seg.services.map((srv) => (
                <li key={srv} className="border-b border-[var(--color-line)]">
                  <a
                    href={`/${seg.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="group flex items-baseline justify-between gap-3 py-4 transition-colors"
                  >
                    <span className="text-[0.9375rem] md:text-[1rem] text-[var(--color-ink)] group-hover:text-[var(--color-navy-700)]">
                      {srv}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-[var(--color-muted)] transition-all group-hover:text-[var(--color-navy-700)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
