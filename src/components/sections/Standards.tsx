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

        {/* Masthead — heavy rule top + bottom, vertical hairlines between columns on desktop */}
        <div className="border-y-2 border-[var(--color-fg)]">
          <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-line)]">
            {frameworks.map((f, i) => (
              <Reveal
                key={f.code}
                delay={i * 80}
                className="editorial-row group relative flex flex-col py-9 md:py-12 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                    {String(i + 1).padStart(2, '0')} / {String(frameworks.length).padStart(2, '0')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                    <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-brand-700)]" />
                    Active
                  </span>
                </div>

                {/* Framework code as the logo/masthead */}
                <div className="mt-10 md:mt-14">
                  <p className="index-display font-display text-[40px] md:text-[44px] lg:text-[44px] font-semibold leading-[0.92] tracking-[-0.03em] text-[var(--color-brand-700)] transition-transform duration-500 group-hover:-translate-y-1">
                    {f.code}
                  </p>
                  {/* Stamp rule — the "seal" line under the code */}
                  <div className="mt-3 h-px w-12 bg-[var(--color-fg)] origin-left transition-transform duration-500 group-hover:scale-x-[2.2]" />
                  <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-3)]">
                    {f.name}
                  </p>
                </div>

                <p className="mt-8 text-[13px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                  {f.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Underline caption — small footer note for the masthead */}
        <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
          <span>Five frameworks · India</span>
          <span>Reviewed annually</span>
        </div>
      </Container>
    </section>
  );
}
