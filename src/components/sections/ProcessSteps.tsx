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
    <section className="py-24 md:py-32 bg-[var(--color-paper)]">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <p className="kicker">How we engage</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.5rem)', lineHeight: 1 }}
            >
              Four phases. The same shape, every engagement.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)] text-pretty">
              The engagement model is the same whether you are a college director, a school principal, a founder,
              or an HR head — only the deliverables change.
            </p>
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-line-strong)]">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.index}
              delay={i * 80}
              className="border-b border-[var(--color-line-strong)] lg:border-r lg:last:border-r-0 lg:[&:nth-child(2)]:border-r md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:lg:border-r py-8 md:py-10 lg:px-8 first:lg:pl-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Phase
                </span>
                <span className="font-display text-[2rem] md:text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--color-navy-700)]">
                  {s.index}
                </span>
              </div>
              <h3 className="mt-3 font-display text-[1.625rem] md:text-[1.75rem] font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)] text-pretty">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
