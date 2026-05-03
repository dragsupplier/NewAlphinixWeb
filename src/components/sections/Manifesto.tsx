import { Container } from '@/components/ui/Container';

const observations = [
  {
    index: 'I',
    label: 'On colleges',
    line: 'There is a measurable gap between what curricula teach and what employers hire for.',
  },
  {
    index: 'II',
    label: 'On schools',
    line: 'Most K-12 institutions still treat AI, IoT, and applied technology as electives, not as foundations.',
  },
  {
    index: 'III',
    label: 'On hiring',
    line: 'Hiring teams cannot find enough industry-ready candidates without absorbing the cost of training them.',
  },
];

export function Manifesto() {
  return (
    <section className="border-t border-[var(--color-ink)]/10 py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Section 04 — Why we exist
            </p>
            <h2
              className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}
            >
              Three observations <br />
              about the same problem.
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-[var(--color-ink)]/10">
            <ol className="space-y-12 md:space-y-14">
              {observations.map((o) => (
                <li key={o.index} className="grid grid-cols-12 gap-x-6">
                  <div className="col-span-12 sm:col-span-2 lg:col-span-1">
                    <span className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-accent-500)]">
                      {o.index}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-10 lg:col-span-11">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {o.label}
                    </p>
                    <p
                      className="mt-3 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
                      style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.125rem)', lineHeight: 1.1 }}
                    >
                      {o.line}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-16 border-t border-[var(--color-ink)]/15 pt-8">
              <p
                className="font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
                style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.125rem)', lineHeight: 1.1 }}
              >
                Alphinix exists to address all three from one practice — so a problem in any segment can be solved
                without changing partners.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
