import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

type Step = {
  index: string;
  title: string;
  body: string;
  accent: string;
};

const steps: Step[] = [
  {
    index: '01',
    title: 'Discover',
    body: 'A structured conversation about the audience you serve, the outcome you need, and the constraints you work within. One named owner from day one.',
    accent: 'var(--color-seg-students)',
  },
  {
    index: '02',
    title: 'Design',
    body: 'A scoped plan covering programs, infrastructure, software, or hiring routes — with a delivery cadence and a documentation set agreed up front.',
    accent: 'var(--color-seg-colleges)',
  },
  {
    index: '03',
    title: 'Deliver',
    body: 'The work runs against a quarterly review cycle. Documentation is produced for audit, accreditation, and stakeholder reporting as it is built.',
    accent: 'var(--color-seg-schools)',
  },
  {
    index: '04',
    title: 'Sustain',
    body: 'Engagements continue beyond the first project — refresh cycles, capacity additions, and outcomes tracked across years, not just quarters.',
    accent: 'var(--color-seg-businesses)',
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-paper)]">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow">How we engage</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.5rem)', lineHeight: 1 }}
            >
              Four phases. <br />
              The same shape, every engagement.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
              The engagement model is the same whether you are a college director, a school principal, a founder,
              or an HR head — only the deliverables change.
            </p>
          </div>
        </div>

        <ol className="grid-room grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.index}
              delay={i * 80}
              className="relative p-7 md:p-8 lg:p-10 bg-[var(--color-paper)] transition-colors hover:bg-[var(--color-paper-blue)]"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: s.accent }}
              />
              <div className="mt-2 flex items-baseline gap-3">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Phase
                </span>
                <span
                  className="font-display text-[2rem] md:text-[2.25rem] font-black tracking-[-0.02em]"
                  style={{ color: s.accent }}
                >
                  {s.index}
                </span>
              </div>
              <h3 className="mt-2 font-display text-[1.625rem] md:text-[1.75rem] font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink)]/70 text-pretty">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
