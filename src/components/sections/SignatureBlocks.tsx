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
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16">
          {/* Sticky left rail — context that stays in view */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start mb-12 lg:mb-0">
            <p className="kicker">Why Alphinix</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Six reasons institutions choose to work with us.
            </h2>
            <p className="mt-6 max-w-md text-[15px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
              The reason Alphinix exists as one company instead of five is structural. The economics, the
              relationships, and the documentation are easier to run when the same team owns every part.
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="brand" size="md" trailingArrow>
                Read our approach
              </ButtonLink>
            </div>
          </aside>

          {/* Scrolling right column — full-width statement rows */}
          <div className="lg:col-span-7">
            <div className="border-t border-[var(--color-fg)]">
              {differentiators.map((d, i) => (
                <Reveal
                  as="article"
                  key={d.index}
                  delay={i * 50}
                  className="border-b border-[var(--color-line)] py-10 md:py-12 lg:py-14"
                >
                  <span className="item-index">{d.index}</span>
                  <h3 className="mt-4 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                    {d.heading}
                  </h3>
                  <p className="mt-4 max-w-[58ch] text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                    {d.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
