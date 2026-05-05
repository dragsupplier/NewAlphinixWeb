import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { segments } from '@/data/segments';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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

  const seg = segments[active]!;

  return (
    <section id="audiences" className="section-y bg-[var(--color-bg)]">
      <Container>
        {/* Section opener */}
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-16 items-end mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <p className="kicker">Audiences</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
              Five doors to the same platform.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="max-w-[44ch] text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
              Alphinix is organised by who you are, not by what we sell. Pick the audience you belong
              to — the platform, the team, and the deliverables shift accordingly.
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
                onClick={() => setActive(i)}
                className={cn(
                  'group relative flex shrink-0 items-baseline gap-2.5 px-4 py-3.5 md:px-5 md:py-4 transition-colors',
                  i === active
                    ? 'text-[var(--color-fg)]'
                    : 'text-[var(--color-fg-3)] hover:text-[var(--color-fg)]',
                )}
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[15px] md:text-[16.5px] font-semibold tracking-tight">
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
          role="tabpanel"
          className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 wipe-in"
        >
          <div className="lg:col-span-5">
            <p className="kicker">Segment {seg.index} · {seg.audience}</p>
            <h3 className="mt-4 font-display text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)]">
              {seg.name}
            </h3>
            <p className="mt-5 max-w-[40ch] text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-tight text-[var(--color-fg-2)]">
              {seg.outcome}
            </p>
            <p className="mt-5 max-w-[52ch] text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
              {seg.intent}
            </p>
            <a
              href={`/${seg.slug}`}
              className="link-rule mt-7 text-[14px]"
            >
              Visit the {seg.name.toLowerCase()} hub
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </div>

          <div className="lg:col-span-7">
            <p className="kicker">Services for {seg.name.toLowerCase()}</p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              {seg.services.map((srv, i) => (
                <li key={srv} className={cn('cap-row', i === 0 && 'sm:[&]:cap-row')}>
                  <a
                    href={`/${seg.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="group flex items-center justify-between py-3.5"
                  >
                    <span className="under-slide text-[14.5px] font-medium text-[var(--color-fg)] group-hover:text-[var(--color-brand-700)]">
                      {srv}
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-[var(--color-fg-5)] transition-all group-hover:text-[var(--color-brand-700)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
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
