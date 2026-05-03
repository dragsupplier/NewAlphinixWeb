import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-14 md:mb-20">
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

        {/* Editorial rows — heavy rule on top, hairlines between, no enclosures */}
        <div className="border-t-2 border-[var(--color-fg)]">
          {differentiators.map((d, i) => (
            <Reveal
              as="article"
              key={d.index}
              delay={i * 50}
              className="editorial-row group relative grid grid-cols-12 gap-x-6 gap-y-6 py-10 md:py-14 border-b border-[var(--color-line)]"
            >
              {/* Drop-cap outlined numeral */}
              <div className="col-span-12 md:col-span-3 lg:col-span-3 flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="outline-numeral index-display block text-[96px] md:text-[120px] lg:text-[148px] -mt-2 md:-mt-3"
                >
                  {d.index}
                </span>
                <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)] mt-3">
                  Reason
                </span>
              </div>

              {/* Headline */}
              <h3 className="col-span-12 md:col-span-9 lg:col-span-5 self-center font-display text-[24px] md:text-[28px] lg:text-[34px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                {d.heading}
              </h3>

              {/* Body + footer rail */}
              <div className="col-span-12 md:col-span-9 md:col-start-4 lg:col-span-4 lg:col-start-9 self-center">
                <p className="text-[14.5px] md:text-[15.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                  {d.body}
                </p>
                <div className="mt-5 flex items-center justify-between text-[var(--color-fg-5)]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                    {String(i + 1).padStart(2, '0')} / 06
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-all duration-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--color-brand-700)]"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
