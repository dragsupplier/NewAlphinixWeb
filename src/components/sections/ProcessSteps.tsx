import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ChevronDown } from 'lucide-react';

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
    <section className="bg-[var(--color-canvas)] py-14 md:py-16 lg:py-20 overflow-hidden">
      <Container>
        {/* Compact header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-x-12 mb-10 md:mb-14">
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

        {/* Desktop workflow diagram */}
        <Reveal className="hidden md:block">
          <div className="relative">
            <div className="grid grid-cols-4 gap-x-10 lg:gap-x-12">
              {phases.map((p, i) => (
                <div key={p.title} className="relative">
                  <PhaseNode phase={p} />
                  {/* Arrow connector to the next node — sits in the gap to the right */}
                  {i < phases.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-[40px] -right-10 lg:-right-12 flex items-center w-10 lg:w-12 z-10"
                    >
                      <span className="h-px flex-1 bg-[var(--color-brand-700)]" />
                      <span className="h-1.5 w-1.5 -ml-[3px] border-t-[1.5px] border-r-[1.5px] border-[var(--color-brand-700)] rotate-45" />
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Refresh-cycle loop arc beneath the row */}
            <FeedbackLoop />
          </div>
        </Reveal>

        {/* Mobile: vertical workflow */}
        <Reveal className="md:hidden">
          <ol className="space-y-3">
            {phases.map((p, i) => (
              <li key={p.title} className="relative">
                <PhaseNode phase={p} />
                {i < phases.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="flex justify-center py-2"
                  >
                    <ChevronDown
                      className="h-4 w-4 text-[var(--color-brand-700)]"
                      strokeWidth={2}
                    />
                  </span>
                )}
              </li>
            ))}
            <li className="flex items-center justify-center gap-2 pt-3 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
              <span aria-hidden="true">↻</span>
              Refresh cycle
            </li>
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───── Phase node — the technical-diagram box ─────────────── */

function PhaseNode({ phase }: { phase: Phase }) {
  return (
    <div className="group relative h-full bg-[var(--color-bg)] border-[1.5px] border-[var(--color-brand-700)] rounded-[4px] p-5 lg:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(29,58,165,0.4)]">
      {/* Top row: phase number + PHASE label */}
      <div className="flex items-baseline justify-between">
        <span className="font-display text-[36px] md:text-[40px] lg:text-[44px] font-semibold leading-[0.9] tracking-[-0.04em] text-[var(--color-brand-700)]">
          {phase.index}
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
          Phase
        </span>
      </div>

      {/* Hairline divider */}
      <span
        aria-hidden="true"
        className="block mt-3.5 h-px w-full bg-[var(--color-line-2)]"
      />

      {/* Title */}
      <h3 className="mt-3.5 font-display text-[18px] lg:text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
        {phase.title}
      </h3>

      {/* Items list — bullet rows */}
      <ul className="mt-3 space-y-1.5">
        {phase.items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-fg-3)]"
          >
            <span
              aria-hidden="true"
              className="block h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-700)] -translate-y-[1px]"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───── Feedback loop arc beneath the desktop diagram ─────── */

function FeedbackLoop() {
  // Box centers in a 4-col grid: ~12.5% and ~87.5% from edges (gaps shift this slightly).
  // Positioning the loop endpoints with calc() so they line up with the bullet boxes regardless of gap.
  return (
    <div aria-hidden="true" className="relative mt-3 lg:mt-4 h-14 lg:h-16 select-none">
      {/* Vertical drop down from box 4's bottom-right area */}
      <span
        className="absolute top-0 w-px bg-[var(--color-brand-700)]/45"
        style={{ left: 'calc(87.5% - 0px)', height: '50%' }}
      />
      {/* Horizontal sweep */}
      <span
        className="absolute h-px bg-[var(--color-brand-700)]/45"
        style={{ left: 'calc(12.5% - 0px)', right: 'calc(12.5% - 0px)', top: '50%' }}
      />
      {/* Vertical up to box 1's bottom-left area */}
      <span
        className="absolute w-px bg-[var(--color-brand-700)]/45"
        style={{ left: 'calc(12.5% - 0px)', top: 0, height: '50%' }}
      />
      {/* Up-arrow tip on the box-1 side */}
      <span
        className="absolute h-2 w-2 border-t-[1.5px] border-l-[1.5px] border-[var(--color-brand-700)] rotate-45"
        style={{
          left: 'calc(12.5% - 0px)',
          top: '-4px',
          transform: 'translateX(-50%) rotate(45deg)',
        }}
      />
      {/* Centered label, sits on top of the horizontal rule */}
      <span
        className="absolute left-1/2 -translate-x-1/2 bg-[var(--color-canvas)] px-3 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]"
        style={{ top: 'calc(50% - 9px)' }}
      >
        Refresh cycle
      </span>
    </div>
  );
}
