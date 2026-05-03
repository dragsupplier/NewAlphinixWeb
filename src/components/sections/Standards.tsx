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

        {/* Vertical statement rows — code | name | description across 12 cols */}
        <div className="border-t border-[var(--color-fg)]">
          {frameworks.map((f, i) => (
            <Reveal
              as="article"
              key={f.code}
              delay={i * 60}
              className="row-hover grid grid-cols-12 gap-x-6 gap-y-3 py-9 md:py-11 lg:py-12 border-b border-[var(--color-line)] items-baseline"
            >
              <p className="col-span-12 md:col-span-3 font-display text-[28px] md:text-[34px] lg:text-[38px] font-semibold leading-[1] tracking-[-0.025em] text-[var(--color-brand-700)]">
                {f.code}
              </p>
              <p className="col-span-12 md:col-span-3 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg)] md:self-center">
                {f.name}
              </p>
              <p className="col-span-12 md:col-span-6 text-[14.5px] md:text-[15px] leading-[1.65] text-[var(--color-fg-3)] text-pretty md:self-center">
                {f.note}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
