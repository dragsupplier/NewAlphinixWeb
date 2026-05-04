import { Hexagon } from 'lucide-react';

const categories = [
  'Engineering colleges',
  'Polytechnic institutes',
  'K-12 schools',
  'Indian SMBs',
  'Hiring teams',
];

export function TrustStrip() {
  return (
    <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] overflow-hidden">
      {/* Top label bar */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-8 md:pt-10">
        <div className="flex items-baseline justify-between gap-4">
          <p className="kicker">Working with</p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums">
            05 / 05
          </p>
        </div>
      </div>

      {/* Giant scrolling marquee */}
      <div
        className="relative py-8 md:py-10"
        style={{
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)',
          maskImage:
            'linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)',
        }}
      >
        <div className="marquee-track marquee-medium flex items-center gap-10 md:gap-14">
          {Array.from({ length: 4 }).map((_, k) => (
            <span key={k} className="flex items-center gap-10 md:gap-14 shrink-0">
              {categories.map((c) => (
                <span key={`${k}-${c}`} className="flex items-center gap-10 md:gap-14 shrink-0">
                  <span className="font-display text-[36px] md:text-[56px] lg:text-[68px] font-semibold leading-[0.95] tracking-[-0.028em] text-[var(--color-fg)] whitespace-nowrap">
                    {c}
                  </span>
                  <Hexagon
                    aria-hidden="true"
                    className="h-3 w-3 md:h-3.5 md:w-3.5 shrink-0 text-[var(--color-brand-700)]"
                    strokeWidth={1.5}
                    fill="currentColor"
                    fillOpacity={0.25}
                  />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom descriptor */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-8 md:pb-10">
        <div className="flex items-baseline justify-between gap-4 border-t border-[var(--color-line)] pt-5">
          <p className="text-[14px] md:text-[15px] text-[var(--color-fg-3)] max-w-[60ch] text-pretty">
            Institutions and teams across India — engineering, polytechnic, K-12, SMBs, and corporate hiring desks.
          </p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums shrink-0">
            Pune, IN
          </p>
        </div>
      </div>
    </section>
  );
}
