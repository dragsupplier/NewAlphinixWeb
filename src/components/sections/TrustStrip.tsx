import { Container } from '@/components/ui/Container';
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
    <section className="section-y bg-[var(--color-bg)]">
      <Container>
        <div className="relative bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] rounded-[20px] p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Decorative hexagon mark in the corner */}
          <Hexagon
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-40 w-40 text-[var(--color-brand-200)] opacity-50"
            strokeWidth={1}
          />
          <Hexagon
            aria-hidden="true"
            className="absolute -right-2 top-12 h-20 w-20 text-[var(--color-brand-300)] opacity-30"
            strokeWidth={1}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-center">
            <div className="lg:col-span-5">
              <p className="kicker">Working with</p>
              <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                Institutions and teams across India.
              </h2>
              <p className="mt-5 max-w-md text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                From engineering colleges to K-12 schools, SMBs and corporate hiring desks — every audience runs
                against the same operating practice.
              </p>

              <div className="mt-7 inline-flex items-baseline gap-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                <span className="text-[var(--color-brand-700)] font-semibold">5</span>
                <span>audience types</span>
                <span className="text-[var(--color-line-2)]">·</span>
                <span className="text-[var(--color-brand-700)] font-semibold">1</span>
                <span>platform</span>
              </div>
            </div>

            <ul className="lg:col-span-7 space-y-1">
              {categories.map((c, i) => (
                <li key={c} className="group flex items-center gap-4 py-3">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums shrink-0 w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.014em] text-[var(--color-fg)] shrink-0">
                    {c}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-1 h-px bg-[var(--color-brand-200)] origin-left transition-transform duration-300 group-hover:scale-x-95"
                  />
                  <Hexagon
                    aria-hidden="true"
                    className="h-3 w-3 shrink-0 text-[var(--color-brand-700)] transition-opacity duration-300 opacity-30 group-hover:opacity-100"
                    strokeWidth={1.5}
                    fill="currentColor"
                    fillOpacity={0.3}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
