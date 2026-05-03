import { Container } from '@/components/ui/Container';

const frameworks = [
  {
    code: 'NEP 2020',
    name: 'National Education Policy',
    note: 'School and college programs are designed to align with the policy framework.',
  },
  {
    code: 'NAAC',
    name: 'Accreditation council',
    note: 'Documentation, processes, and evidence support for accreditation cycles.',
  },
  {
    code: 'NBA',
    name: 'Board of accreditation',
    note: 'Outcome-based education and program-level documentation support.',
  },
  {
    code: 'AICTE',
    name: 'Technical education',
    note: 'Curriculum and faculty development referenced against the model curricula.',
  },
  {
    code: 'ATL',
    name: 'Atal Tinkering Labs',
    note: 'School lab setups and kits in line with the official guidelines.',
  },
];

export function Standards() {
  return (
    <section className="border-t border-[var(--color-ink)]/10 bg-[var(--color-paper-warm)] py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Section 05 — Built around standards
            </p>
            <h2
              className="mt-4 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)]"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.625rem)', lineHeight: 1.02 }}
            >
              Aligned to the frameworks <br />
              that schools, colleges, and <br />
              regulators already use.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-[1rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
              Programs and infrastructure are designed against the published guidelines of India&apos;s education
              and technical-education bodies. This keeps the work credible at audit, accreditation, and
              policy-level conversations.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="border-t border-[var(--color-ink)]/15" />
          {frameworks.map((f) => (
            <div
              key={f.code}
              className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-[var(--color-ink)]/15 py-5 md:py-6"
            >
              <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                <p className="font-display text-[1.5rem] font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                  {f.code}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3 lg:col-span-3">
                <p className="text-[0.8125rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  {f.name}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-7">
                <p className="text-[0.9375rem] leading-snug text-[var(--color-ink)]/80">
                  {f.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
