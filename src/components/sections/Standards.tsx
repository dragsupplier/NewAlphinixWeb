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
    <section className="relative overflow-hidden bg-[var(--color-ink-deep)] text-white py-24 md:py-32">
      {/* Brand-blue glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--color-brand-500)]/25 blur-[140px]"
      />
      {/* Faint blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 35%, transparent 100%)',
        }}
      />

      <Container className="relative">
        {/* Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 font-mono text-[0.75rem] font-medium uppercase tracking-[0.06em] text-[var(--color-brand-300)]">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-brand-300)]" />
              Built around standards
            </p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.025em] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5.4vw, 4.25rem)', lineHeight: 0.98 }}
            >
              Aligned with the frameworks <br className="hidden sm:block" />
              that institutions answer to.
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

        {/* Framework plates — bold typographic display */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10">
          {frameworks.map((f) => (
            <li
              key={f.code}
              className="border-r border-b border-white/10 p-6 md:p-7 lg:p-8 transition-colors hover:bg-white/[0.04]"
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
