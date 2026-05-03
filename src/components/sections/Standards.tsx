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
    <section className="section-y bg-[var(--color-canvas)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="kicker">Built around standards</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Aligned with the frameworks institutions answer to.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
              Every program and every infrastructure setup is designed against the published guidelines of
              India&apos;s education and technical-education bodies. Credible at audit, accreditation, and
              policy-level conversations.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {frameworks.map((f) => (
            <li key={f.code} className="card glow-card p-6 md:p-7">
              <p className="font-display text-[28px] md:text-[32px] font-semibold leading-[0.98] tracking-[-0.025em] text-[var(--color-brand-700)]">
                {f.code}
              </p>
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                {f.name}
              </p>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                {f.note}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
