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
    index: 'A',
    heading: 'One practice, five audiences.',
    body: 'Training, infrastructure, software, and hiring sit inside the same operating practice. Students we train can be placed with businesses we already serve.',
  },
  {
    index: 'B',
    heading: 'Engagements close on outcomes.',
    body: 'Every contract closes against a measurable outcome — a placement, an accreditation cycle, a shipped product, or a hire confirmed in seat.',
  },
  {
    index: 'C',
    heading: 'Designed against published standards.',
    body: 'Programs and infrastructure follow the published guidelines of NEP 2020, NAAC, NBA, AICTE, and ATL — credible at audit, accreditation, and policy conversations.',
  },
  {
    index: 'D',
    heading: 'A single named owner.',
    body: 'Every engagement runs under one accountable owner. No vendor handoffs, no losing the relationship between scope and delivery.',
  },
  {
    index: 'E',
    heading: 'Documentation built for institutions.',
    body: 'Reports, evidence, and dashboards are produced for stakeholders that have to answer to boards, regulators, and parents — not just for project files.',
  },
  {
    index: 'F',
    heading: 'Continuity beyond the first project.',
    body: 'The first engagement is the start of a relationship. We stay through the refresh cycle, the next batch, the next quarter — across years.',
  },
];

export function SignatureBlocks() {
  return (
    <section className="bg-[var(--color-paper-warm)] py-24 md:py-32">
      <Container>
        {/* Lead statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow">Why Alphinix</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5.4vw, 4.25rem)', lineHeight: 1 }}
            >
              We are not <br className="hidden sm:block" />
              a vendor list.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
              The reason Alphinix exists as one company instead of five is structural. The economics, the
              relationships, and the documentation are easier to run when the same team owns every part.
            </p>
            <div className="mt-7">
              <ButtonLink href="/about" variant="ink" size="md" trailingArrow>
                Read our approach
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Differentiator grid — 3x2 on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-ink)]/12">
          {differentiators.map((d, i) => (
            <Reveal
              key={d.index}
              delay={(i % 3) * 80}
              className="border-r border-b border-[var(--color-ink)]/12 p-7 md:p-8 lg:p-10 bg-[var(--color-paper-warm)] hover:bg-[var(--color-paper)] transition-colors"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <span className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-700)]">
                  {d.index}
                </span>
                <div>
                  <h3
                    className="font-display font-bold tracking-[-0.015em] text-[var(--color-ink)] text-balance"
                    style={{ fontSize: 'clamp(1.25rem, 1.6vw, 1.5rem)', lineHeight: 1.18 }}
                  >
                    {d.heading}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink)]/70 text-pretty">
                    {d.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
