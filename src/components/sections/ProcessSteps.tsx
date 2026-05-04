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
    <section className="bg-[var(--color-canvas)] py-14 md:py-16">
      <Container>
        {/* Compact header row — two columns, no stacking on lg, keeps vertical space tight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-x-12 mb-10 md:mb-12">
          <div className="lg:col-span-7">
            <p className="kicker">How we engage</p>
            <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Four phases.{' '}
              <span className="text-[var(--color-brand-700)]">The same shape, every engagement.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[14px] md:text-[14.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
              The engagement model holds whether you are a college director, a school principal, a founder,
              or an HR head — only the deliverables change.
            </p>
          </div>
        </div>

        {/* 2×2 quadrant matrix — single hairline cross, no enclosures, no diagram */}
        <Reveal>
          <div className="relative border-t border-l border-r border-b border-[var(--color-line)] bg-[var(--color-bg)]">
            {/* Vertical center divider (hidden on mobile) */}
            <span
              aria-hidden="true"
              className="hidden md:block absolute top-6 bottom-6 left-1/2 w-px bg-[var(--color-line)]"
            />
            {/* Horizontal center divider */}
            <span
              aria-hidden="true"
              className="absolute left-6 right-6 top-1/2 h-px bg-[var(--color-line)]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2">
              {phases.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal-item group/cell relative px-6 md:px-8 lg:px-10 py-6 md:py-7 lg:py-8 transition-colors hover:bg-[var(--color-canvas)]"
                  style={{ ['--anim-delay' as string]: `${i * 80}ms` }}
                >
                  {/* Top row: number + phase label */}
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-[42px] md:text-[48px] lg:text-[56px] font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--color-brand-700)] transition-transform duration-300 group-hover/cell:-translate-y-0.5">
                      {p.index}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
                      Phase
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.15] tracking-[-0.018em] text-[var(--color-fg)]">
                    {p.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-2 text-[13px] md:text-[13.5px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                    {p.body}
                  </p>

                  {/* Items — inline tags, single row, scrolls horizontally only if needed */}
                  <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    {p.items.map((item, j) => (
                      <li
                        key={item}
                        className="font-mono text-[10px] uppercase tracking-[0.12em] font-semibold text-[var(--color-fg-4)] transition-colors group-hover/cell:text-[var(--color-brand-700)]"
                      >
                        {item}
                        {j < p.items.length - 1 && (
                          <span aria-hidden="true" className="ml-2 text-[var(--color-line-2)]">·</span>
                        )}
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
