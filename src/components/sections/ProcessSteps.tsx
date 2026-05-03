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

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.index} delay={i * 80}>
              <div className="card glow-card h-full p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                    Phase
                  </span>
                  <span className="font-display text-[26px] font-medium tracking-[-0.025em] text-[var(--color-brand-700)] print-in">
                    {s.index}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[22px] md:text-[24px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
