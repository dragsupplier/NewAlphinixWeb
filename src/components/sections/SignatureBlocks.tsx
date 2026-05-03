import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/Reveal';

type Differentiator = {
  index: string;
  heading: string;
  body: string;
};

const differentiators: Differentiator[] = [
  {
    index: '01',
    heading: 'One practice, five audiences',
    body: 'Training, infrastructure, software, and hiring sit inside the same operating practice. Students we train can be placed with businesses we already serve.',
  },
  {
    index: '02',
    heading: 'Engagements close on outcomes',
    body: 'Every contract closes against a measurable outcome — a placement, an accreditation cycle, a shipped product, or a hire confirmed in seat.',
  },
  {
    index: '03',
    heading: 'Designed against published standards',
    body: 'Programs and infrastructure follow the published guidelines of NEP 2020, NAAC, NBA, AICTE, and ATL — credible at audit, accreditation, and policy conversations.',
  },
  {
    index: '04',
    heading: 'A single named owner',
    body: 'Every engagement runs under one accountable owner. No vendor handoffs, no losing the relationship between scope and delivery.',
  },
  {
    index: '05',
    heading: 'Documentation built for institutions',
    body: 'Reports, evidence, and dashboards produced for stakeholders that have to answer to boards, regulators, and parents — not just for project files.',
  },
  {
    index: '06',
    heading: 'Continuity beyond the first project',
    body: 'The first engagement is the start of a relationship. We stay through refresh cycles, new batches, and quarters across years.',
  },
];

export function SignatureBlocks() {
  return (
    <section className="bg-[var(--color-paper-blue)] py-24 md:py-32">
      <Container>
        {/* Lead statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <p className="kicker">Why Alphinix</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1 }}
            >
              Six reasons institutions choose to work with us.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink-muted)] text-pretty">
              The reason Alphinix exists as one company instead of five is structural. The economics, the
              relationships, and the documentation are easier to run when the same team owns every part.
            </p>
            <div className="mt-7">
              <ButtonLink
                href="/about"
                size="md"
                trailingArrow
                className="!bg-[var(--color-navy-900)] !text-white hover:!bg-[var(--color-navy-800)]"
              >
                Read our approach
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Differentiator list — plain numbered, hairline-divided */}
        <div className="border-t border-[var(--color-line-strong)]">
          {differentiators.map((d, i) => (
            <Reveal
              key={d.index}
              delay={(i % 3) * 60}
              className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-[var(--color-line-strong)] py-7 md:py-9"
            >
              <div className="col-span-12 sm:col-span-2 lg:col-span-1">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-navy-700)]">
                  {d.index}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-10 lg:col-span-5">
                <h3
                  className="font-display font-bold tracking-[-0.015em] text-[var(--color-ink)] text-balance"
                  style={{ fontSize: 'clamp(1.25rem, 1.8vw, 1.625rem)', lineHeight: 1.18 }}
                >
                  {d.heading}
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <p className="text-[0.9375rem] md:text-[1rem] leading-relaxed text-[var(--color-ink-muted)] text-pretty">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
