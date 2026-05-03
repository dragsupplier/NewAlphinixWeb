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
    <section className="bg-[var(--color-paper-soft)] py-12 md:py-14 border-b border-[var(--color-line)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-center">
          <div className="lg:col-span-3">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Working with
            </p>
            <p className="mt-2 font-display text-[1.375rem] md:text-[1.5rem] font-bold tracking-[-0.015em] text-[var(--color-ink)]">
              Institutions and teams across India.
            </p>
          </div>
          <ul className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
            {categories.map((c) => (
              <li
                key={c}
                className="border-l-2 border-[var(--color-brand-300)] pl-3 font-display text-[0.9375rem] md:text-[1rem] font-medium tracking-[-0.005em] text-[var(--color-ink)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
