import { Container } from '@/components/ui/Container';

const frameworks = [
  { code: 'NEP 2020', name: 'National Education Policy', note: 'School and college programs designed against the published policy framework.' },
  { code: 'NAAC',     name: 'Accreditation council',     note: 'Documentation, processes, and evidence support across accreditation cycles.' },
  { code: 'NBA',      name: 'Board of accreditation',    note: 'Outcome-based education and program-level documentation support.' },
  { code: 'AICTE',    name: 'Technical education',       note: 'Curriculum and faculty development referenced against the model curricula.' },
  { code: 'ATL',      name: 'Atal Tinkering Labs',       note: 'School lab setups and kits aligned with the official guidelines.' },
];

export function Standards() {
  return (
    <section className="bg-[var(--color-paper-blue)] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <p className="kicker">Built around standards</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1 }}
            >
              Aligned with the frameworks institutions answer to.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)] text-pretty">
              Every program and every infrastructure setup is designed against the published guidelines of
              India&apos;s education and technical-education bodies. Credible at audit, accreditation, and
              policy-level conversations.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-[var(--color-line-strong)]">
          {frameworks.map((f) => (
            <li
              key={f.code}
              className="border-b border-[var(--color-line-strong)] lg:border-r lg:last:border-r-0 sm:[&:nth-child(odd)]:border-r p-6 md:p-7 lg:p-8 lg:first:pl-0"
            >
              <p
                className="font-display font-bold tracking-[-0.025em] text-[var(--color-navy-900)]"
                style={{ fontSize: 'clamp(1.875rem, 2.6vw, 2.5rem)', lineHeight: 0.98 }}
              >
                {f.code}
              </p>
              <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                {f.name}
              </p>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--color-ink-muted)]">
                {f.note}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
