import { Container } from '@/components/ui/Container';

const categories = [
  'Engineering colleges',
  'Polytechnic institutes',
  'K-12 schools',
  'Indian SMBs',
  'Hiring teams',
];

export function TrustStrip() {
  return (
    <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)]">
      <Container className="py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
          <div className="lg:col-span-4">
            <p className="kicker">Working with</p>
            <p className="mt-3 font-display text-[20px] md:text-[24px] lg:text-[26px] font-semibold tracking-[-0.018em] leading-[1.18] text-[var(--color-fg)] text-balance">
              Institutions and teams across India.
            </p>
          </div>

          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-5">
            {categories.map((c, i) => (
              <li key={c} className="group flex items-baseline gap-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1">
                  <span className="block text-[15px] md:text-[15.5px] font-semibold tracking-[-0.012em] text-[var(--color-fg)] leading-[1.25]">
                    {c}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-px w-8 origin-left bg-[var(--color-line-2)] transition-all duration-300 group-hover:w-full group-hover:bg-[var(--color-brand-700)]"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
