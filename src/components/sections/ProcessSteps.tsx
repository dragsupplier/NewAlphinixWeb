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
    body: 'We start with a structured conversation about the audience you serve, the outcome you need, and the constraints you work within.',
  },
  {
    index: '02',
    title: 'Design',
    body: 'A scoped plan is produced — programs, infrastructure, software, or hiring routes — with a named owner and a delivery cadence.',
  },
  {
    index: '03',
    title: 'Deliver',
    body: 'Work runs against a quarterly review cycle. Documentation is produced for audit, accreditation, and stakeholder reporting.',
  },
  {
    index: '04',
    title: 'Sustain',
    body: 'Engagements continue beyond the first project — refresh cycles, capacity additions, and outcomes tracked across the year.',
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        {/* Section masthead */}
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">How we engage</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2rem, 4.6vw, 3.5rem)', lineHeight: 1.02 }}
            >
              Four phases. <br />
              The same shape, every time.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
              The engagement model is the same whether you are a college director, a school principal, a founder,
              or an HR head — only the deliverables change.
            </p>
          </div>
        </div>

        {/* Steps — 4 columns desktop, list rows on mobile */}
        <div className="relative">
          {/* Connecting hairline behind the numbers (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[var(--color-line)]"
          />

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.index} delay={i * 80} className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper)] ring-1 ring-[var(--color-line)] font-display text-[1.25rem] font-bold tracking-[-0.02em] text-[var(--color-brand-700)]">
                    {s.index}
                  </span>
                  <h3 className="font-display text-[1.5rem] md:text-[1.625rem] font-bold tracking-[-0.02em] text-[var(--color-ink)] lg:mt-6">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 lg:mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink)]/70 max-w-xs">
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
