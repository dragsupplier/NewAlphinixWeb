import { Container } from '@/components/ui/Container';
import { segments } from '@/data/segments';
import { segmentImages } from '@/data/images';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function AudienceTiles() {
  return (
    <section
      id="audiences"
      className="py-20 md:py-28"
    >
      <Container>
        {/* Section masthead */}
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Where you sit</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2rem, 4.6vw, 3.5rem)', lineHeight: 1.02 }}
            >
              Five audiences. <br />
              One operating practice.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
              The platform is organised by who you are, not by what we sell. Pick the row that fits — every other
              page on this site is built around it.
            </p>
          </div>
        </div>

        {/* DESKTOP & TABLET: bento grid (3 + 2 layout) */}
        <div className="hidden md:grid md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Top row — 3 equal tiles */}
          {segments.slice(0, 3).map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 80}
              className="md:col-span-2 lg:col-span-4"
            >
              <Tile segment={s} ratio="aspect-[4/5]" />
            </Reveal>
          ))}
          {/* Bottom row — 2 wider tiles */}
          {segments.slice(3).map((s, i) => (
            <Reveal
              key={s.slug}
              delay={(i + 3) * 80}
              className="md:col-span-3 lg:col-span-6"
            >
              <Tile segment={s} ratio="aspect-[16/10]" wide />
            </Reveal>
          ))}
        </div>

        {/* MOBILE: full-width image-with-overlay rows (NOT cards) */}
        <ul className="md:hidden space-y-3">
          {segments.map((s) => (
            <li key={s.slug}>
              <a href={`/${s.slug}`} className="group block">
                <div className="image-plate relative aspect-[5/4] overflow-hidden rounded-[var(--radius-lg)]">
                  <img
                    src={segmentImages[s.slug]}
                    alt={`${s.name} — ${s.audience}`}
                    loading="lazy"
                    width={1200}
                    height={960}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
                    <div className="text-[var(--color-paper)]">
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] opacity-75">
                        Segment {s.index}
                      </p>
                      <h3 className="mt-1 font-display text-[1.75rem] font-bold tracking-[-0.02em] leading-none">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-[0.875rem] leading-snug opacity-90">
                        {s.outcome}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper)] text-[var(--color-ink)]">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────── */

function Tile({
  segment,
  ratio,
  wide,
}: {
  segment: (typeof import('@/data/segments').segments)[number];
  ratio: string;
  wide?: boolean;
}) {
  return (
    <a href={`/${segment.slug}`} className="group block h-full">
      <div className={`image-plate relative ${ratio} overflow-hidden rounded-[var(--radius-lg)]`}>
        <img
          src={segmentImages[segment.slug]}
          alt={`${segment.name} — ${segment.audience}`}
          loading="lazy"
          width={1200}
          height={ratio.includes('16/10') ? 750 : 1500}
        />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 lg:p-7">
          <div className="flex items-end justify-between gap-4 text-[var(--color-paper)]">
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] opacity-75">
                Segment {segment.index}
              </p>
              <h3
                className="mt-2 font-display font-bold tracking-[-0.02em] leading-none"
                style={{
                  fontSize: wide ? 'clamp(1.75rem, 2.4vw, 2.25rem)' : 'clamp(1.5rem, 2vw, 1.875rem)',
                }}
              >
                {segment.name}
              </h3>
              <p className="mt-2 max-w-md text-[0.9375rem] leading-snug opacity-95">
                {segment.outcome}
              </p>
            </div>
            <span className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper)] text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
