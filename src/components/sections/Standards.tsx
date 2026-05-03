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

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {frameworks.map((f, i) => (
            <Reveal as="li" key={f.code} delay={i * 80}>
              <a
                href="#"
                className="plaque group flex h-full min-h-[260px] flex-col justify-between p-6 md:p-7"
              >
                {/* Top: rotated index + status */}
                <div className="flex items-start justify-between">
                  <span className="plaque-fg plaque-fg-meta font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                    Framework / {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="plaque-fg plaque-fg-meta inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                    <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-brand-700)] group-hover:bg-[var(--color-brand-200)]" />
                    Active
                  </span>
                </div>

                {/* Middle: framework code (hero typography) */}
                <div className="mt-8 md:mt-10">
                  <p className="plaque-fg plaque-fg-code font-display text-[30px] md:text-[34px] lg:text-[36px] font-semibold leading-[0.96] tracking-[-0.028em] text-[var(--color-brand-700)]">
                    {f.code}
                  </p>
                  <div className="plaque-fg plaque-fg-rule mt-4 h-px w-12 bg-[var(--color-line-2)]" />
                  <p className="plaque-fg plaque-fg-name mt-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-brand-700)]">
                    {f.name}
                  </p>
                </div>

                {/* Bottom: body note */}
                <p className="plaque-fg plaque-fg-body mt-6 text-[13px] leading-[1.6] text-[var(--color-fg-3)]">
                  {f.note}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
