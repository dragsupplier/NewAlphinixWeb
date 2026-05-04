import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { Search, PenTool, Send, RefreshCw } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Phase = {
  index: string;
  title: string;
  body: string;
  icon: LucideIcon;
  items: string[];
};

const phases: Phase[] = [
  {
    index: '01',
    title: 'Discover',
    icon: Search,
    body: 'A structured conversation about the audience you serve, the outcome you need, and the constraints you work within. One named owner from day one.',
    items: ['Audience research', 'Desired outcome', 'Project constraints', 'Named owner'],
  },
  {
    index: '02',
    title: 'Design',
    icon: PenTool,
    body: 'A scoped plan covering programs, infrastructure, software, or hiring routes — with a delivery cadence and a documentation set agreed up front.',
    items: ['Scoped plan', 'Delivery cadence', 'Documentation set', 'Programs · infra · software'],
  },
  {
    index: '03',
    title: 'Deliver',
    icon: Send,
    body: 'The work runs against a quarterly review cycle. Documentation is produced for audit, accreditation, and stakeholder reporting as it is built.',
    items: ['Quarterly reviews', 'Audit-ready docs', 'Stakeholder reports', 'As-built records'],
  },
  {
    index: '04',
    title: 'Sustain',
    icon: RefreshCw,
    body: 'Engagements continue beyond the first project — refresh cycles, capacity additions, and outcomes tracked across years.',
    items: ['Refresh cycles', 'Capacity additions', 'Outcome tracking', 'Multi-year continuity'],
  },
];

export function ProcessSteps() {
  return (
    <section className="section-y bg-[var(--color-canvas)] overflow-hidden">
      <Container>
        {/* Centered header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-line)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
            <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-[var(--color-brand-700)]" />
            How we engage
          </span>
          <h2 className="mt-6 font-display text-[34px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
            Four phases.
            <br />
            <span className="text-[var(--color-brand-700)]">The same shape, every engagement.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-[15px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
            The engagement model is the same whether you are a college director, a school principal, a founder, or
            an HR head — only the deliverables change.
          </p>
        </div>

        {/* Desktop: branching diagram */}
        <div className="hidden md:block mt-16 lg:mt-20">
          {/* Central badge */}
          <div className="flex justify-center">
            <CenterBadge />
          </div>

          {/* Vertical drop from badge to bus */}
          <div className="flex justify-center h-12 lg:h-16">
            <span aria-hidden="true" className="block w-px h-full bg-[var(--color-brand-700)]" />
          </div>

          {/* Bus + 4 nodes */}
          <div className="relative grid grid-cols-4 h-3">
            <div
              aria-hidden="true"
              className="absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-px bg-[var(--color-brand-700)]"
            />
            {phases.map((p) => (
              <div key={p.title} className="relative flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className="relative z-10 block h-3 w-3 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-canvas)]"
                />
              </div>
            ))}
          </div>

          {/* Vertical drops from bus to pills */}
          <div className="grid grid-cols-4 h-10 lg:h-12">
            {phases.map((p) => (
              <div key={p.title} className="flex justify-center">
                <span aria-hidden="true" className="block w-px h-full bg-[var(--color-brand-700)]" />
              </div>
            ))}
          </div>

          {/* Pill labels */}
          <div className="grid grid-cols-4 gap-x-4">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg)] border border-[var(--color-line-2)] px-4 py-2 shadow-[0_4px_12px_-4px_rgba(11,18,32,0.06)]">
                  <p.icon className="h-4 w-4 text-[var(--color-brand-700)]" strokeWidth={2} />
                  <span className="font-display text-[14.5px] lg:text-[15px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                    {p.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Item lists with brand-700 left rule */}
          <div className="mt-8 lg:mt-10 grid grid-cols-4 gap-x-4 lg:gap-x-6">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={i * 70 + 120} as="ul" className="border-l-2 border-[var(--color-brand-700)] pl-4 lg:pl-5 space-y-1.5">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] lg:text-[13.5px] leading-[1.55] text-[var(--color-fg-3)]"
                  >
                    {item}
                  </li>
                ))}
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical spine */}
        <div className="md:hidden mt-12">
          <div className="flex justify-center mb-4">
            <CenterBadge small />
          </div>
          <div className="relative pl-7">
            <span
              aria-hidden="true"
              className="absolute left-1.5 top-2 bottom-2 w-px bg-[var(--color-brand-700)]"
            />
            <ol className="space-y-8">
              {phases.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 60} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[26px] top-1 block h-3 w-3 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-canvas)]"
                  />
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg)] border border-[var(--color-line-2)] px-3.5 py-1.5">
                    <p.icon className="h-3.5 w-3.5 text-[var(--color-brand-700)]" strokeWidth={2} />
                    <span className="font-display text-[14px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                      {p.title}
                    </span>
                  </div>
                  <ul className="mt-3 border-l-2 border-[var(--color-brand-700)] pl-3.5 space-y-1.5">
                    {p.items.map((item) => (
                      <li key={item} className="text-[13px] leading-[1.5] text-[var(--color-fg-3)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CenterBadge({ small }: { small?: boolean }) {
  const outer = small ? 'h-16 w-16' : 'h-20 w-20 lg:h-24 lg:w-24';
  const inner = small ? 'h-11 w-11' : 'h-14 w-14 lg:h-16 lg:w-16';
  const iconSize = small ? 'h-5 w-5' : 'h-6 w-6 lg:h-7 lg:w-7';
  return (
    <div className="relative">
      {/* Aura */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[var(--color-brand-700)] opacity-20 blur-2xl scale-150"
      />
      {/* Outer thin ring */}
      <div
        className={`relative ${outer} rounded-full border-2 border-[var(--color-brand-700)]/25 grid place-items-center bg-[var(--color-canvas)]`}
      >
        {/* Inner filled brand circle */}
        <div
          className={`${inner} rounded-full bg-[var(--color-brand-700)] grid place-items-center text-white shadow-[0_8px_24px_-6px_rgba(29,58,165,0.55)]`}
        >
          {/* Alphinix A-mark */}
          <svg
            viewBox="0 0 32 32"
            className={iconSize}
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 26 L16 5 L27 26 M10 19 H22"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
