import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

type Step = {
  index: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    index: '01',
    title: 'Discover',
    body: 'A structured conversation about the audience you serve, the outcome you need, and the constraints you work within. One named owner from day one.',
  },
  {
    index: '02',
    title: 'Design',
    body: 'A scoped plan covering programs, infrastructure, software, or hiring routes — with a delivery cadence and a documentation set agreed up front.',
  },
  {
    index: '03',
    title: 'Deliver',
    body: 'The work runs against a quarterly review cycle. Documentation is produced for audit, accreditation, and stakeholder reporting as it is built.',
  },
  {
    index: '04',
    title: 'Sustain',
    body: 'Engagements continue beyond the first project — refresh cycles, capacity additions, and outcomes tracked across years.',
  },
];

export function ProcessSteps() {
  return (
    <section className="section-y bg-[var(--color-bg)]">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="kicker">How we engage</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Four phases. The same shape, every engagement.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
              The engagement model is the same whether you are a college director, a school principal, a founder,
              or an HR head — only the deliverables change.
            </p>
          </div>
        </div>

        {/* Process schematic */}
        <Reveal>
          <ProcessDiagram />
        </Reveal>

        {/* Phase bodies — 4-col reading grid below the diagram */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-x-8 lg:gap-x-10">
          {steps.map((s, i) => (
            <Reveal as="div" key={s.index} delay={i * 60}>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                Phase {s.index} · {s.title}
              </span>
              <p className="mt-4 text-[14.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   Diagram — desktop horizontal flow + mobile vertical equivalent
   ────────────────────────────────────────────────────────────── */

function ProcessDiagram() {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopFlow />
      </div>
      <div className="md:hidden">
        <MobileFlow />
      </div>
    </div>
  );
}

function DesktopFlow() {
  // Layout
  const VB_W = 1200;
  const VB_H = 320;
  const BLOCK_W = 200;
  const BLOCK_H = 110;
  const BLOCK_Y = 90;
  const ARROW_GAP = 22;
  const PORT_R = 7;

  // Distribute 4 blocks evenly with gaps for arrows
  const blockCount = 4;
  const totalBlocksWidth = blockCount * BLOCK_W + (blockCount - 1) * ARROW_GAP;
  const startX = (VB_W - totalBlocksWidth) / 2 + 80; // shift right to leave room for INPUT
  const positions = Array.from({ length: blockCount }, (_, i) => startX + i * (BLOCK_W + ARROW_GAP));

  const inputCx = 60;
  const inputCy = BLOCK_Y + BLOCK_H / 2;
  const outputCx = positions[positions.length - 1]! + BLOCK_W + (VB_W - (positions[positions.length - 1]! + BLOCK_W)) / 2 + 20;
  const outputCy = inputCy;

  // Loop path goes from after the last block, down, all the way back to before the first block
  const loopY = BLOCK_Y + BLOCK_H + 80;

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Engagement process schematic: input feeds Discover, Design, Deliver, Sustain phases, producing an outcome and refreshing back to Discover."
    >
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-brand-700)" />
        </marker>
        <marker
          id="arrowhead-muted"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-line-2)" />
        </marker>
      </defs>

      {/* INPUT marker */}
      <g>
        <circle cx={inputCx} cy={inputCy} r={PORT_R} fill="var(--color-brand-700)" />
        <text
          x={inputCx}
          y={inputCy - 18}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="1.6"
          fontWeight="600"
          fill="var(--color-fg-5)"
        >
          INPUT
        </text>
      </g>

      {/* INPUT → first block arrow */}
      <line
        x1={inputCx + PORT_R + 2}
        y1={inputCy}
        x2={positions[0]! - 6}
        y2={inputCy}
        stroke="var(--color-brand-700)"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* Block-to-block arrows */}
      {positions.slice(0, -1).map((x, i) => {
        const x1 = x + BLOCK_W + 2;
        const x2 = positions[i + 1]! - 6;
        return (
          <line
            key={`arrow-${i}`}
            x1={x1}
            y1={inputCy}
            x2={x2}
            y2={inputCy}
            stroke="var(--color-brand-700)"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />
        );
      })}

      {/* Last block → OUTPUT */}
      <line
        x1={positions[positions.length - 1]! + BLOCK_W + 2}
        y1={inputCy}
        x2={outputCx - PORT_R - 2}
        y2={outputCy}
        stroke="var(--color-brand-700)"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* OUTPUT marker */}
      <g>
        <circle cx={outputCx} cy={outputCy} r={PORT_R} fill="var(--color-brand-700)" />
        <text
          x={outputCx}
          y={outputCy - 18}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="1.6"
          fontWeight="600"
          fill="var(--color-fg-5)"
        >
          OUTCOME
        </text>
      </g>

      {/* Refresh loop — from output down, across, and back up to before input */}
      <g stroke="var(--color-line-2)" strokeWidth="1.25" fill="none" strokeDasharray="3 4">
        <path d={`M ${outputCx} ${outputCy + PORT_R + 2} V ${loopY}`} />
        <path d={`M ${outputCx} ${loopY} H ${inputCx}`} />
        <path
          d={`M ${inputCx} ${loopY} V ${inputCy + PORT_R + 2}`}
          markerEnd="url(#arrowhead-muted)"
        />
      </g>

      {/* Refresh-loop label */}
      <text
        x={(inputCx + outputCx) / 2}
        y={loopY - 8}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9.5"
        letterSpacing="1.6"
        fontWeight="600"
        fill="var(--color-fg-5)"
      >
        REFRESH CYCLE
      </text>

      {/* Phase blocks */}
      {steps.map((s, i) => {
        const x = positions[i]!;
        return (
          <g key={s.index} transform={`translate(${x}, ${BLOCK_Y})`}>
            <rect
              width={BLOCK_W}
              height={BLOCK_H}
              fill="var(--color-bg)"
              stroke="var(--color-fg)"
              strokeWidth="1.5"
            />
            {/* Top serial */}
            <text
              x="14"
              y="22"
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="1.6"
              fontWeight="600"
              fill="var(--color-fg-5)"
            >
              PHASE
            </text>
            <text
              x={BLOCK_W - 14}
              y="22"
              textAnchor="end"
              fontFamily="var(--font-mono)"
              fontSize="11"
              letterSpacing="1.6"
              fontWeight="600"
              fill="var(--color-brand-700)"
            >
              {s.index}
            </text>
            {/* Inner top hairline */}
            <line
              x1="14"
              y1="32"
              x2={BLOCK_W - 14}
              y2="32"
              stroke="var(--color-line)"
              strokeWidth="1"
            />
            {/* Title */}
            <text
              x={BLOCK_W / 2}
              y="76"
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontSize="28"
              fontWeight="600"
              letterSpacing="-0.022em"
              fill="var(--color-fg)"
            >
              {s.title}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function MobileFlow() {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-3 bottom-3 w-px bg-[var(--color-brand-700)] opacity-60"
      />
      <ol className="space-y-5">
        {steps.map((s) => (
          <li key={s.index} className="relative pl-8">
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 block h-3.5 w-3.5 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
            />
            <div className="border border-[var(--color-fg)] px-4 py-3">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Phase
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                  {s.index}
                </span>
              </div>
              <div className="mt-2 h-px w-full bg-[var(--color-line)]" />
              <p className="mt-2 font-display text-[22px] font-semibold tracking-[-0.022em] text-[var(--color-fg)]">
                {s.title}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-3 ml-8 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
        ↻ Refresh cycle continues across years
      </div>
    </div>
  );
}
