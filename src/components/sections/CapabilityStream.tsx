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
            className="flex shrink-0 items-baseline gap-4 font-display text-[1.875rem] font-bold leading-none tracking-[-0.02em] md:text-[2.5rem]"
          >
            <span aria-hidden="true" className="text-[var(--color-paper)]/30">/</span>
            <span>{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CapabilityStream() {
  return (
    <section className="grain-ink bg-[var(--color-ink)] py-20 md:py-28 text-[var(--color-paper)] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-paper)]/55">
              Section 03 — Capability stream
            </p>
            <h2
              className="mt-4 font-display font-bold tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.25rem)', lineHeight: 1 }}
            >
              The full surface area, in one place.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[1rem] leading-relaxed text-[var(--color-paper)]/70 text-pretty">
              Training, infrastructure, software, and hiring sit inside the same operating practice. That is the
              reason we can move a student from a classroom session to a placed engineer without handing the
              relationship across vendors.
            </p>
          </div>
        </div>
      </Container>

      <div className="mt-14 md:mt-20 space-y-6">
        <Row items={capabilitiesRowOne} duration={50} />
        <Row items={capabilitiesRowTwo} duration={60} reverse />
      </div>
    </section>
  );
}
