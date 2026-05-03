import { Container } from '@/components/ui/Container';

const frameworks = [
  { code: 'NEP 2020', name: 'National Education Policy', note: 'School and college programs designed against the published policy framework.' },
  { code: 'NAAC',     name: 'Accreditation council',     note: 'Documentation, processes, and evidence support across accreditation cycles.' },
  { code: 'NBA',      name: 'Board of accreditation',    note: 'Outcome-based education and program-level documentation support.' },
  { code: 'AICTE',    name: 'Technical education',       note: 'Curriculum and faculty development referenced against the model curricula.' },
  { code: 'ATL',      name: 'Atal Tinkering Labs',       note: 'School lab setups and kits aligned with the official ATL guidelines.' },
];

export function Standards() {
  return (
    <section className="relative overflow-hidden mesh-deep grain-ink text-white py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 blueprint-grid" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-light">Built around standards</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.025em] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5.4vw, 4.25rem)', lineHeight: 0.98 }}
            >
              Aligned with the frameworks <br className="hidden sm:block" />
              <span className="text-[var(--color-brand-300)]">institutions answer to.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-white/75 text-pretty">
              Every program and every infrastructure setup is designed against the published guidelines of
              India&apos;s education and technical-education bodies. Credible at audit, accreditation, and
              policy-level conversations.
            </p>
          </div>
        </div>

        <ul className="grid-room-dark grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {frameworks.map((f) => (
            <li
              key={f.code}
              className="p-7 md:p-8 lg:p-9 transition-colors hover:bg-white/[0.04]"
            >
              <p
                className="font-display font-black tracking-[-0.03em] text-white"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', lineHeight: 0.95 }}
              >
                {f.code}
              </p>
              <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-brand-300)]">
                {f.name}
              </p>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-white/65">
                {f.note}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
