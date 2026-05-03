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

  // Allow deep-linking from the hero pivot strip
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
            <p className="eyebrow">Where you sit</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1 }}
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
                  'group relative flex shrink-0 items-baseline gap-2.5 px-4 py-4 md:px-6 md:py-5 transition-colors',
                  i === active
                    ? 'text-[var(--color-ink)]'
                    : 'text-[var(--color-muted-strong)] hover:text-[var(--color-ink)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full transition-transform"
                  style={{
                    backgroundColor: `var(${s.colorVar})`,
                    transform: i === active ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
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
          {/* Left — colour block + headline */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-[var(--radius-lg)] p-8 md:p-10 lg:p-12 overflow-hidden text-white"
              style={{
                background: `linear-gradient(155deg, var(${seg.colorVar}) 0%, var(--color-brand-900) 80%)`,
              }}
            >
              {/* Faint grid texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 35%, transparent 100%)',
                }}
              />

              <span className="relative font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/70">
                Segment {seg.index} · {seg.audience}
              </span>
              <h3
                className="relative mt-4 font-display font-bold tracking-[-0.025em]"
                style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.75rem)', lineHeight: 0.98 }}
              >
                {seg.name}
              </h3>
              <p
                className="relative mt-5 font-display font-medium tracking-[-0.015em] text-white/90 text-balance"
                style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)', lineHeight: 1.25 }}
              >
                {seg.outcome}
              </p>
              <div className="relative mt-8">
                <ButtonLink
                  href={`/${seg.slug}`}
                  size="md"
                  trailingArrow
                  className="!bg-white !text-[var(--color-ink)] hover:!bg-white/90"
                >
                  Visit the {seg.name.toLowerCase()} hub
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Right — intent + service grid */}
          <div className="lg:col-span-7">
            <p className="text-[1rem] md:text-[1.125rem] leading-relaxed text-[var(--color-ink)]/80 text-pretty">
              {seg.intent}
            </p>

            <p className="mt-9 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Services for {seg.name.toLowerCase()}
            </p>
            <div className="mt-3 grid-room grid grid-cols-1 sm:grid-cols-2">
              {seg.services.map((srv) => (
                <a
                  key={srv}
                  href={`/${seg.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="group flex items-baseline justify-between gap-3 px-5 py-4 transition-colors hover:bg-[var(--color-paper-blue)]"
                >
                  <span className="text-[0.9375rem] md:text-[1rem] text-[var(--color-ink)]">
                    {srv}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[var(--color-muted)] transition-all group-hover:text-[var(--color-brand-700)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`/contact?segment=${seg.slug}`}
                className="link-draw text-[0.9375rem] font-medium text-[var(--color-ink)]"
              >
                Talk to us about {seg.name.toLowerCase()}
              </a>
              <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-[var(--color-line-strong)]" />
              <a
                href={`/${seg.slug}`}
                className="link-draw text-[0.9375rem] font-medium text-[var(--color-muted-strong)]"
              >
                Or read the full hub →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
