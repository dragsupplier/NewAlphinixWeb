import { Container } from '@/components/ui/Container';
import { capabilitiesRowOne, capabilitiesRowTwo } from '@/data/capabilities';

function Row({
  items,
  reverse,
  duration,
}: {
  items: string[];
  reverse?: boolean;
  duration: number;
}) {
  // Duplicate the list so the marquee loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden"
      style={{ ['--marquee-duration' as string]: `${duration}s` }}
    >
      <div className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`}>
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-4 font-display text-[1.875rem] font-bold leading-none tracking-[-0.02em] md:text-[2.5rem]"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: 'var(--color-accent-500)' }}
            />
            <span>{label}</span>
            <span aria-hidden="true" className="ml-2 text-[var(--color-paper)]/25 text-[1.25rem]">
              ✕
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CapabilityStream() {
  return (
    <section className="relative mesh-blue grain-ink py-20 md:py-28 text-[var(--color-paper)] overflow-hidden">
      <div className="grid-overlay" />

      {/* Top hairline accent strip */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-500)]/60 to-transparent" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-paper)]/55 dot-accent">
              Section 03 / Capability stream
            </p>
            <h2
              className="mt-4 font-display font-bold tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.25rem)', lineHeight: 1 }}
            >
              The full surface area, <br />
              in one place.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[1rem] leading-relaxed text-[var(--color-paper)]/70 text-pretty">
              Training, infrastructure, software, and hiring sit inside the same operating practice. That is the
              reason we can move a student from a classroom session to a placed engineer without handing the
              relationship across vendors.
            </p>

            {/* Three category counters — meta strip */}
            <dl className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: 'Training', v: '08+' },
                { k: 'Infrastructure', v: '06+' },
                { k: 'Hiring routes', v: '06+' },
              ].map((m) => (
                <div key={m.k} className="border-t border-[var(--color-paper)]/15 pt-3">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--color-paper)]/55">
                    {m.k}
                  </dt>
                  <dd className="mt-1 font-display text-[1.5rem] font-bold tracking-[-0.02em]">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      {/* Marquee rows with edge fade */}
      <div className="relative mt-14 md:mt-20 space-y-6">
        <Row items={capabilitiesRowOne} duration={50} />
        <Row items={capabilitiesRowTwo} duration={60} reverse />
        {/* Left + right fade masks for premium edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-ink)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-ink)] to-transparent" />
      </div>
    </section>
  );
}
