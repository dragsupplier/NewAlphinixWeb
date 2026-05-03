import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';

type Framework = {
  code: string;
  short: string;
  name: string;
  note: string;
};

const frameworks: Framework[] = [
  {
    code: 'NEP 2020',
    short: 'Policy',
    name: 'National Education Policy',
    note: 'School and college programs designed against the published policy framework.',
  },
  {
    code: 'NAAC',
    short: 'Accreditation',
    name: 'Accreditation council',
    note: 'Documentation, processes, and evidence support across accreditation cycles.',
  },
  {
    code: 'NBA',
    short: 'Outcomes',
    name: 'Board of accreditation',
    note: 'Outcome-based education and program-level documentation support.',
  },
  {
    code: 'AICTE',
    short: 'Curriculum',
    name: 'Technical education',
    note: 'Curriculum and faculty development referenced against the model curricula.',
  },
  {
    code: 'ATL',
    short: 'Labs',
    name: 'Atal Tinkering Labs',
    note: 'School lab setups and kits aligned with the official guidelines.',
  },
];

export function Standards() {
  return (
    <section className="section-y bg-[var(--color-canvas)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="kicker">Built around standards</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Aligned with the frameworks institutions answer to.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:self-end">
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
              Every program and every infrastructure setup is designed against the published guidelines of
              India&apos;s education and technical-education bodies. Credible at audit, accreditation, and
              policy-level conversations.
            </p>
          </div>
        </div>

        {/* Architecture diagram — 5 framework marks → busbar → Alphinix node */}
        <Reveal>
          <StandardsDiagram />
        </Reveal>
      </Container>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   Diagram
   ────────────────────────────────────────────────────────────── */

function StandardsDiagram() {
  return (
    <div className="relative">
      {/* Desktop schematic */}
      <div className="hidden md:block">
        <DesktopSchematic />
      </div>

      {/* Mobile schematic (vertical) */}
      <div className="md:hidden">
        <MobileSchematic />
      </div>
    </div>
  );
}

function DesktopSchematic() {
  // Layout constants for the SVG viewBox
  const VB_W = 1200;
  const VB_H = 520;
  const BOX_W = 200;
  const BOX_H = 200;
  const TOP_Y = 20;
  const GAP = 50;
  const BUSBAR_Y = 300;
  const ALPHINIX_W = 320;
  const ALPHINIX_H = 130;
  const ALPHINIX_Y = 360;
  const ALPHINIX_X = (VB_W - ALPHINIX_W) / 2;

  // 5 box positions evenly spaced
  const positions = frameworks.map((_, i) => i * (BOX_W + GAP));
  const boxCenters = positions.map((x) => x + BOX_W / 2);
  const busbarStart = boxCenters[0]!;
  const busbarEnd = boxCenters[boxCenters.length - 1]!;
  const dropX = VB_W / 2;

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Five Indian education frameworks Alphinix is aligned with: NEP 2020, NAAC, NBA, AICTE, and ATL."
    >
      {/* Connector strokes — drawn first so boxes overlay */}
      <g stroke="var(--color-line-2)" strokeWidth="1.25" fill="none" strokeLinecap="square">
        {/* vertical drops from each framework box bottom to the busbar */}
        {boxCenters.map((cx) => (
          <line key={`drop-${cx}`} x1={cx} y1={TOP_Y + BOX_H} x2={cx} y2={BUSBAR_Y} />
        ))}
        {/* horizontal busbar */}
        <line x1={busbarStart} y1={BUSBAR_Y} x2={busbarEnd} y2={BUSBAR_Y} />
        {/* center drop into Alphinix node */}
        <line x1={dropX} y1={BUSBAR_Y} x2={dropX} y2={ALPHINIX_Y} />
        {/* small junction dot at the central tap */}
      </g>

      {/* Junction dot at busbar/center crossing */}
      <circle cx={dropX} cy={BUSBAR_Y} r="3" fill="var(--color-brand-700)" />

      {/* Framework boxes */}
      {frameworks.map((f, i) => (
        <g key={f.code} transform={`translate(${positions[i]}, ${TOP_Y})`}>
          {/* Box outline */}
          <rect
            x="0"
            y="0"
            width={BOX_W}
            height={BOX_H}
            fill="var(--color-bg)"
            stroke="var(--color-fg)"
            strokeWidth="1.5"
          />
          {/* Top-left serial */}
          <text
            x="14"
            y="22"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="1.6"
            fill="var(--color-fg-5)"
          >
            {String(i + 1).padStart(2, '0')}
          </text>
          {/* Top-right short tag */}
          <text
            x={BOX_W - 14}
            y="22"
            textAnchor="end"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.6"
            fill="var(--color-fg-5)"
          >
            {f.short.toUpperCase()}
          </text>
          {/* Inner top hairline */}
          <line
            x1="14"
            y1="32"
            x2={BOX_W - 14}
            y2="32"
            stroke="var(--color-line)"
            strokeWidth="1"
          />
          {/* Framework code (the institutional logo treatment) */}
          <text
            x={BOX_W / 2}
            y="86"
            textAnchor="middle"
            fontFamily="var(--font-display)"
            fontSize="34"
            fontWeight="600"
            letterSpacing="-0.025em"
            fill="var(--color-brand-700)"
          >
            {f.code}
          </text>
          {/* Authority name */}
          <text
            x={BOX_W / 2}
            y="112"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fontWeight="600"
            letterSpacing="1.4"
            fill="var(--color-fg)"
          >
            {f.name.toUpperCase()}
          </text>
          {/* Note — wrapped via foreignObject for proper text flow */}
          <foreignObject x="14" y="128" width={BOX_W - 28} height={BOX_H - 144}>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11.5px',
                lineHeight: 1.45,
                color: 'var(--color-fg-3)',
              }}
            >
              {f.note}
            </div>
          </foreignObject>
        </g>
      ))}

      {/* Alphinix node */}
      <g transform={`translate(${ALPHINIX_X}, ${ALPHINIX_Y})`}>
        <rect
          x="0"
          y="0"
          width={ALPHINIX_W}
          height={ALPHINIX_H}
          fill="var(--color-fg)"
          stroke="var(--color-fg)"
          strokeWidth="1.5"
        />
        <text
          x="14"
          y="22"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="1.8"
          fill="rgba(255,255,255,0.55)"
        >
          NODE
        </text>
        <text
          x={ALPHINIX_W - 14}
          y="22"
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="1.8"
          fill="rgba(255,255,255,0.55)"
        >
          PUNE · IN
        </text>
        <line
          x1="14"
          y1="32"
          x2={ALPHINIX_W - 14}
          y2="32"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
        <text
          x={ALPHINIX_W / 2}
          y="78"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="40"
          fontWeight="600"
          letterSpacing="-0.022em"
          fill="white"
        >
          ALPHINIX
        </text>
        <text
          x={ALPHINIX_W / 2}
          y="106"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="1.6"
          fill="rgba(255,255,255,0.6)"
        >
          BUILT ON FIVE FOUNDATIONS
        </text>
      </g>
    </svg>
  );
}

function MobileSchematic() {
  return (
    <div className="relative">
      {/* Frameworks stacked, each connected by a vertical stroke */}
      <ol className="space-y-4">
        {frameworks.map((f, i) => (
          <li
            key={f.code}
            className="relative bg-white border-[1.5px] border-[var(--color-fg)] p-4"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                {f.short}
              </span>
            </div>
            <div className="mt-3 h-px w-full bg-[var(--color-line)]" />
            <p className="mt-3 font-display text-[26px] font-semibold tracking-[-0.022em] text-[var(--color-brand-700)]">
              {f.code}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-fg)]">
              {f.name}
            </p>
            <p className="mt-3 text-[12.5px] leading-[1.55] text-[var(--color-fg-3)]">
              {f.note}
            </p>
          </li>
        ))}
      </ol>

      {/* Vertical connector to Alphinix node */}
      <div className="flex justify-center">
        <span aria-hidden="true" className="block h-10 w-px bg-[var(--color-line-2)]" />
      </div>
      <span aria-hidden="true" className="block mx-auto h-1.5 w-1.5 -mt-[3px] rounded-full bg-[var(--color-brand-700)]" />

      {/* Alphinix node */}
      <div className="mt-2 bg-[var(--color-fg)] text-white p-5">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
            Node
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
            Pune · IN
          </span>
        </div>
        <div className="mt-3 h-px w-full bg-white/15" />
        <p className="mt-3 font-display text-[28px] font-semibold tracking-[-0.022em]">
          ALPHINIX
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
          Built on five foundations
        </p>
      </div>
    </div>
  );
}
