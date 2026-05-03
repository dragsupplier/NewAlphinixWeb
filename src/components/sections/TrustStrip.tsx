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
    <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-soft)] py-10 md:py-12">
      <Container>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[var(--color-muted-strong)]">
            Working with
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-9">
            {categories.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                <span className="font-display text-[0.9375rem] md:text-[1.0625rem] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
                  {c}
                </span>
                {i < categories.length - 1 && (
                  <span className="hidden md:inline-block h-1 w-1 rounded-full bg-[var(--color-line-strong)]" />
                )}
              </li>
            ))}
          </ul>
          <p className="font-mono text-[0.75rem] text-[var(--color-muted)]">
            Across <span className="text-[var(--color-ink)]">India</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
