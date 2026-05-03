import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

const frameworks = [
  {
    code: 'NEP 2020',
    name: 'National Education Policy',
    note: 'School and college programs designed against the published policy framework.',
  },
  {
    code: 'NAAC',
    name: 'Accreditation council',
    note: 'Documentation, processes, and evidence support across accreditation cycles.',
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
    note: 'School lab setups and kits aligned with the official guidelines.',
  },
];

export function Standards() {
  const total = String(frameworks.length).padStart(2, '0');

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

        {/* Registry table — heavy fg rules bracket the table; hairlines as cell dividers */}
        <div className="border-y-2 border-[var(--color-fg)]">
          {/* Column header bar (desktop only) */}
          <div className="hidden md:grid grid-cols-12 border-b border-[var(--color-line)] py-3">
            <span className="col-span-1 px-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
              No.
            </span>
            <span className="col-span-3 px-6 border-l border-[var(--color-line)] font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
              Framework
            </span>
            <span className="col-span-3 px-6 border-l border-[var(--color-line)] font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
              Authority
            </span>
            <span className="col-span-5 px-6 border-l border-[var(--color-line)] font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
              How we apply it
            </span>
          </div>

          {/* Rows */}
          {frameworks.map((f, i) => (
            <Reveal
              as="article"
              key={f.code}
              delay={i * 60}
              className="row-hover group grid grid-cols-1 md:grid-cols-12 border-b border-[var(--color-line)] last:border-b-0 md:items-stretch"
            >
              <div className="md:col-span-1 px-0 md:px-6 py-5 md:py-7 lg:py-8 md:flex md:items-center">
                <span className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-[var(--color-fg-5)] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                  <span className="text-[var(--color-line-2)]"> / </span>
                  <span className="text-[var(--color-fg-5)]">{total}</span>
                </span>
              </div>

              <div className="md:col-span-3 px-0 md:px-6 py-3 md:py-7 lg:py-8 border-t md:border-t-0 md:border-l border-[var(--color-line)] md:flex md:items-center">
                <p className="font-display text-[28px] md:text-[34px] lg:text-[40px] font-semibold leading-[0.98] tracking-[-0.025em] text-[var(--color-brand-700)] transition-transform duration-500 group-hover:-translate-y-0.5">
                  {f.code}
                </p>
              </div>

              <div className="md:col-span-3 px-0 md:px-6 py-3 md:py-7 lg:py-8 border-t md:border-t-0 md:border-l border-[var(--color-line)] md:flex md:items-center">
                <p className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.14em] font-semibold text-[var(--color-fg)]">
                  {f.name}
                </p>
              </div>

              <div className="md:col-span-5 px-0 md:px-6 py-3 md:py-7 lg:py-8 border-t md:border-t-0 md:border-l border-[var(--color-line)] md:flex md:items-center">
                <p className="text-[14px] md:text-[15px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                  {f.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Registry footer — small caption */}
        <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
          <span>Five published frameworks</span>
          <span>Government of India</span>
        </div>
      </Container>
    </section>
  );
}
