import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

type Phase = {
  index: string;
  title: string;
  body: string;
  items: string[];
};

const phases: Phase[] = [
  {
    index: '01',
    title: 'Discover',
    body: 'A structured conversation about the audience you serve, the outcome you need, and the constraints you work within. One named owner from day one.',
    items: ['Audience research', 'Desired outcome', 'Project constraints', 'Named owner'],
  },
  {
    index: '02',
    title: 'Design',
    body: 'A scoped plan covering programs, infrastructure, software, or hiring routes — with a delivery cadence and a documentation set agreed up front.',
    items: ['Scoped plan', 'Delivery cadence', 'Documentation set', 'Defined routes'],
  },
  {
    index: '03',
    title: 'Deliver',
    body: 'The work runs against a quarterly review cycle. Documentation is produced for audit, accreditation, and stakeholder reporting as it is built.',
    items: ['Quarterly reviews', 'Audit-ready docs', 'Stakeholder reports', 'As-built records'],
  },
  {
    index: '04',
    title: 'Sustain',
    body: 'Engagements continue beyond the first project — refresh cycles, capacity additions, and outcomes tracked across years.',
    items: ['Refresh cycles', 'Capacity additions', 'Outcome tracking', 'Multi-year continuity'],
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-[var(--color-brand-50)] border-y border-[var(--color-brand-100)] py-20 md:py-28 lg:py-32">
      <Container>
        {/* Centered header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-brand-200)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
            <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-[var(--color-brand-700)]" />
            How we engage
          </span>
          <h2 className="mt-6 font-display text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
            Four phases.{' '}
            <span className="text-[var(--color-brand-700)]">The same shape, every engagement.</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
            The engagement model holds whether you are a college director, a school principal, a founder, or
            an HR head — only the deliverables change.
          </p>
        </div>

        {/* Phase grid — 4 columns desktop, 2x2 tablet, stacked mobile */}
        <Reveal>
          <div className="relative">
            {/* Top connecting line — spans across all 4 dot centers on desktop */}
            <span
              aria-hidden="true"
              className="hidden lg:block draw-x absolute top-[5px] left-[12.5%] right-[12.5%] h-px bg-[var(--color-brand-700)]"
              style={{ ['--anim-delay' as string]: '120ms' }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
              {phases.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal-item group/phase relative"
                  style={{ ['--anim-delay' as string]: `${300 + i * 80}ms` }}
                >
                  {/* Top anchor dot (visible on lg only — caps the connecting line) */}
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute top-0 left-0 h-2.5 w-2.5 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-brand-50)]"
                  />

                  {/* Mobile/tablet rule above each phase */}
                  <span
                    aria-hidden="true"
                    className="lg:hidden block h-px w-12 bg-[var(--color-brand-700)] mb-6"
                  />

                  {/* Big phase number */}
                  <p className="font-display text-[60px] md:text-[68px] lg:text-[76px] font-semibold leading-[0.88] tracking-[-0.04em] text-[var(--color-brand-700)] lg:pt-7">
                    {p.index}
                  </p>

                  {/* Phase title */}
                  <h3 className="mt-5 font-display text-[22px] md:text-[24px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)]">
                    {p.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-3 text-[13.5px] md:text-[14px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                    {p.body}
                  </p>

                  {/* Items list with brand-700 left rule */}
                  <ul className="mt-6 space-y-1.5 border-l-2 border-[var(--color-brand-700)] pl-4 transition-colors group-hover/phase:border-[var(--color-brand-800)]">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] leading-[1.55] text-[var(--color-fg-3)] transition-colors group-hover/phase:text-[var(--color-fg-2)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
