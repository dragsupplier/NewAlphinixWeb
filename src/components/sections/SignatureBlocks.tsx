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
  const [feature, ...rest] = differentiators;

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

        {/* Bento grid: 1 feature tile + 5 supporting tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          {/* Featured tile — spans 3 cols × 2 rows on desktop */}
          <Reveal className="md:col-span-2 lg:col-span-3 lg:row-span-2 bento-feature color-card-edge rounded-[12px] p-7 md:p-9 text-white">
            <div className="flex h-full flex-col justify-between gap-10 min-h-[340px]">
              <div className="flex items-start justify-between">
                <p className="kicker kicker-on-dark">Signature reason</p>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                  01 / 06
                </span>
              </div>

              <div>
                <p className="index-display text-[120px] md:text-[148px] lg:text-[168px] text-[var(--color-brand-200)]/80 count-in">
                  {feature.index}
                </p>
                <h3 className="mt-4 font-display text-[26px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-white text-balance">
                  {feature.heading}
                </h3>
                <p className="mt-5 max-w-[44ch] text-[14.5px] md:text-[15.5px] leading-[1.65] text-white/75 text-pretty">
                  {feature.body}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/15 pt-5">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55">
                  Why this matters
                </span>
                <a
                  href="/about#one-practice"
                  className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white"
                >
                  <span className="under-slide">Read more</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.25}
                  />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Five supporting tiles — first two span 3 cols (top row half), next three span 2 cols (bottom row thirds) */}
          {rest.map((d, i) => (
            <Reveal
              key={d.index}
              delay={(i + 1) * 60}
              className={`card glow-card p-6 md:p-7 ${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-baseline justify-between">
                  <span className="index-display text-[44px] md:text-[52px] text-[var(--color-brand-700)]">
                    {d.index}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                    Reason
                  </span>
                </div>
                <div className="mt-4 h-px w-10 bg-[var(--color-brand-700)]" />
                <h3 className="mt-5 font-display text-[18px] md:text-[20px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                  {d.heading}
                </h3>
                <p className="mt-3 text-[13.5px] md:text-[14.5px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
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
