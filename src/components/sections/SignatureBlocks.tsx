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
    heading: 'One practice, five audiences.',
    body: 'Training, infrastructure, software, and hiring sit inside the same operating practice. Students we train can be placed with businesses we already serve.',
  },
  {
    index: '02',
    heading: 'Engagements close on outcomes.',
    body: 'Every contract closes against a measurable outcome — a placement, an accreditation cycle, a shipped product, or a hire confirmed in seat.',
  },
  {
    index: '03',
    heading: 'Designed against published standards.',
    body: 'Programs and infrastructure follow the published guidelines of NEP 2020, NAAC, NBA, AICTE, and ATL — credible at audit, accreditation, and policy conversations.',
  },
  {
    index: '04',
    heading: 'A single named owner.',
    body: 'Every engagement runs under one accountable owner. No vendor handoffs, no losing the relationship between scope and delivery.',
  },
  {
    index: '05',
    heading: 'Documentation built for institutions.',
    body: 'Reports, evidence, and dashboards produced for stakeholders that have to answer to boards, regulators, and parents — not just for project files.',
  },
  {
    index: '06',
    heading: 'Continuity beyond the first project.',
    body: 'The first engagement is the start of a relationship. We stay through refresh cycles, new batches, and quarters across years.',
  },
];

export function SignatureBlocks() {
  return (
    <section id="approach" className="section-y bg-[var(--color-canvas)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="kicker">Why Alphinix</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Six reasons institutions choose to work with us.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
              The reason Alphinix exists as one company instead of five is structural. The economics, the
              relationships, and the documentation are easier to run when the same team owns every part.
            </p>
            <div className="mt-6">
              <ButtonLink href="/about" variant="brand" size="md" trailingArrow>
                Read our approach
              </ButtonLink>
            </div>
          </div>
        </div>

        <div>
          {differentiators.map((d, i) => (
            <Reveal
              key={d.index}
              delay={(i % 3) * 60}
              className={`grid grid-cols-12 gap-x-6 gap-y-3 py-7 md:py-9 ${i === 0 ? 'cap-row' : 'cap-row'}`}
            >
              <div className="col-span-12 sm:col-span-2 lg:col-span-1">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
                  {d.index}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-10 lg:col-span-5">
                <h3 className="font-display text-[20px] md:text-[24px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                  {d.heading}
                </h3>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <p className="text-[14.5px] md:text-[15.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
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
