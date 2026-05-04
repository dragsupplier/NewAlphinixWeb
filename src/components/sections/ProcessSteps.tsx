import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

type Phase = {
  index: string;
  title: string;
  body: string;
  items: string[];
};

const phases: Phase[] = [
  {
    index: '01',
    title: 'Discover',
    body: 'A structured conversation about the audience you serve, the outcome you need, and the constraints you work within. One named owner from day one.',
    items: ['Audience research', 'Desired outcome', 'Project constraints', 'Named owner'],
  },
  {
    index: '02',
    title: 'Design',
    body: 'A scoped plan covering programs, infrastructure, software, or hiring routes — with a delivery cadence and a documentation set agreed up front.',
    items: ['Scoped plan', 'Delivery cadence', 'Documentation set', 'Defined routes'],
  },
  {
    index: '03',
    title: 'Deliver',
    body: 'The work runs against a quarterly review cycle. Documentation is produced for audit, accreditation, and stakeholder reporting as it is built.',
    items: ['Quarterly reviews', 'Audit-ready docs', 'Stakeholder reports', 'As-built records'],
  },
  {
    index: '04',
    title: 'Sustain',
    body: 'Engagements continue beyond the first project — refresh cycles, capacity additions, and outcomes tracked across years.',
    items: ['Refresh cycles', 'Capacity additions', 'Outcome tracking', 'Multi-year continuity'],
  },
];

export function ProcessSteps() {
  return (
    <section className="section-y bg-[var(--color-canvas)] overflow-hidden">
      <Container>
        {/* Section header — restrained, centered */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-line)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
            <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-[var(--color-brand-700)]" />
            How we engage
          </span>
          <h2 className="mt-6 font-display text-[32px] md:text-[42px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
            Four phases.{' '}
            <span className="text-[var(--color-brand-700)]">The same shape, every engagement.</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
            The engagement model holds whether you are a college director, a school principal, a founder, or
            an HR head — only the deliverables change.
          </p>
        </div>

        {/* Diagram — desktop. Framed area with corner brackets + dot grid background */}
        <div className="hidden md:block mt-14 lg:mt-16">
          <div className="relative">
            {/* Dot-grid backdrop */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(11, 18, 32, 0.07) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '10px 10px',
              }}
            />

            {/* Corner brackets — technical drawing aesthetic */}
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-4 w-4 border-t-[1.5px] border-l-[1.5px] border-[var(--color-fg-4)]"
            />
            <span
              aria-hidden="true"
              className="absolute top-0 right-0 h-4 w-4 border-t-[1.5px] border-r-[1.5px] border-[var(--color-fg-4)]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-4 w-4 border-b-[1.5px] border-l-[1.5px] border-[var(--color-fg-4)]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-4 w-4 border-b-[1.5px] border-r-[1.5px] border-[var(--color-fg-4)]"
            />

            {/* Diagram content — wrapped in Reveal so connector lines draw on scroll */}
            <Reveal className="relative px-8 py-12 lg:px-14 lg:py-16">
              {/* Center mark with depth */}
              <div className="flex justify-center">
                <CenterMark />
              </div>

              {/* Vertical drop — draws first */}
              <div className="flex justify-center h-10 lg:h-12">
                <span
                  aria-hidden="true"
                  className="draw-y block w-px h-full bg-[var(--color-brand-700)]"
                  style={{ ['--anim-delay' as string]: '60ms' }}
                />
              </div>

              {/* Bus + 4 nodes */}
              <div className="relative grid grid-cols-4 h-2.5">
                <span
                  aria-hidden="true"
                  className="draw-x absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-px bg-[var(--color-brand-700)]"
                  style={{ ['--anim-delay' as string]: '520ms' }}
                />
                {phases.map((p, i) => (
                  <div key={p.title} className="relative flex items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="dot-pop relative z-10 block h-2.5 w-2.5 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-canvas)]"
                      style={{ ['--anim-delay' as string]: `${1100 + i * 80}ms` }}
                    />
                  </div>
                ))}
              </div>

              {/* Vertical drops to phase labels */}
              <div className="grid grid-cols-4 h-7 lg:h-9">
                {phases.map((p, i) => (
                  <div key={p.title} className="flex justify-center">
                    <span
                      aria-hidden="true"
                      className="draw-y block w-px h-full bg-[var(--color-brand-700)]"
                      style={{ ['--anim-delay' as string]: `${1400 + i * 80}ms` }}
                    />
                  </div>
                ))}
              </div>

              {/* Phase headers — typographic */}
              <div className="grid grid-cols-4 gap-x-4 lg:gap-x-6 text-center">
                {phases.map((p, i) => (
                  <div
                    key={p.title}
                    className="reveal-item group/phase cursor-default"
                    style={{ ['--anim-delay' as string]: `${1700 + i * 80}ms` }}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] transition-colors group-hover/phase:text-[var(--color-brand-800)]">
                      Phase {p.index}
                    </p>
                    <h3 className="mt-2 font-display text-[20px] lg:text-[22px] font-semibold tracking-[-0.018em] text-[var(--color-fg)] transition-colors group-hover/phase:text-[var(--color-brand-700)]">
                      {p.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Item lists with brand-700 left rule */}
              <div className="mt-8 lg:mt-10 grid grid-cols-4 gap-x-4 lg:gap-x-6">
                {phases.map((p, i) => (
                  <ul
                    key={p.title}
                    className="reveal-item group/list border-l-2 border-[var(--color-brand-700)] pl-4 lg:pl-5 space-y-1.5 transition-colors hover:border-[var(--color-brand-800)]"
                    style={{ ['--anim-delay' as string]: `${2000 + i * 80}ms` }}
                  >
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] lg:text-[13.5px] leading-[1.55] text-[var(--color-fg-3)] transition-colors group-hover/list:text-[var(--color-fg-2)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Diagram — mobile vertical spine */}
        <div className="md:hidden mt-12">
          <div className="flex justify-center mb-3">
            <CenterMark small />
          </div>
          <div className="relative pl-7">
            <span
              aria-hidden="true"
              className="absolute left-1.5 top-2 bottom-2 w-px bg-[var(--color-brand-700)]"
            />
            <ol className="space-y-7">
              {phases.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 60} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[26px] top-1 block h-2.5 w-2.5 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-canvas)]"
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                    Phase {p.index}
                  </p>
                  <h3 className="mt-1 font-display text-[20px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                    {p.title}
                  </h3>
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

function CenterMark({ small }: { small?: boolean }) {
  // Larger, with depth — drop shadow + inner highlight
  const outer = small ? 'h-14 w-14' : 'h-20 w-20 lg:h-[88px] lg:w-[88px]';
  const inner = small ? 'h-9 w-9' : 'h-12 w-12 lg:h-14 lg:w-14';
  const iconSize = small ? 'h-4 w-4' : 'h-6 w-6 lg:h-7 lg:w-7';
  return (
    <div
      className={`relative ${outer} rounded-full border border-[var(--color-brand-700)]/25 grid place-items-center bg-[var(--color-canvas)] shadow-[0_18px_48px_-18px_rgba(29,58,165,0.4)]`}
    >
      <div
        className={`badge-pulse ${inner} rounded-full bg-[var(--color-brand-700)] grid place-items-center text-white shadow-[0_6px_18px_-4px_rgba(29,58,165,0.55),inset_0_1px_0_rgba(255,255,255,0.18)]`}
      >
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
  );
}
