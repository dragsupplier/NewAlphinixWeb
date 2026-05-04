import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

type Step = {
  index: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    index: '01',
    title: 'Discover',
    body: 'A structured conversation about the audience you serve, the outcome you need, and the constraints you work within. One named owner from day one.',
  },
  {
    index: '02',
    title: 'Design',
    body: 'A scoped plan covering programs, infrastructure, software, or hiring routes — with a delivery cadence and a documentation set agreed up front.',
  },
  {
    index: '03',
    title: 'Deliver',
    body: 'The work runs against a quarterly review cycle. Documentation is produced for audit, accreditation, and stakeholder reporting as it is built.',
  },
  {
    index: '04',
    title: 'Sustain',
    body: 'Engagements continue beyond the first project — refresh cycles, capacity additions, and outcomes tracked across years.',
  },
];

export function ProcessSteps() {
  return (
    <section className="section-y bg-[var(--color-bg)]">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="kicker">How we engage</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Four phases. The same shape, every engagement.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
              The engagement model is the same whether you are a college director, a school principal, a founder,
              or an HR head — only the deliverables change.
            </p>
          </div>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          <ol className="grid grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.index} delay={i * 80} className="relative">
                {/* Connector line to the next bullet */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[5.5px] left-1.5 right-0 h-px bg-[var(--color-line-2)]"
                  />
                )}
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="relative z-10 block h-3 w-3 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
                />
                {/* Content */}
                <div className="mt-7 pr-8">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                    Phase {s.index}
                  </span>
                  <h3 className="mt-3 font-display text-[22px] lg:text-[24px] font-semibold leading-[1.15] tracking-[-0.018em] text-[var(--color-fg)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[14px] lg:text-[14.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Mobile timeline (vertical) */}
        <div className="md:hidden relative">
          <span
            aria-hidden="true"
            className="absolute left-1.5 top-2 bottom-3 w-px bg-[var(--color-line-2)]"
          />
          <ol className="space-y-8 pl-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.index} delay={i * 60} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[26px] top-1 block h-3 w-3 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
                />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                  Phase {s.index}
                </span>
                <h3 className="mt-2 font-display text-[20px] font-semibold leading-[1.15] tracking-[-0.018em] text-[var(--color-fg)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
