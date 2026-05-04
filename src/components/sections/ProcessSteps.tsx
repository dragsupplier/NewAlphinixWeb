import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight, Search, PenTool, Send, RefreshCw } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Phase = {
  index: string;
  title: string;
  icon: LucideIcon;
};

const phases: Phase[] = [
  { index: '01', title: 'Discover', icon: Search },
  { index: '02', title: 'Design',   icon: PenTool },
  { index: '03', title: 'Deliver',  icon: Send },
  { index: '04', title: 'Sustain',  icon: RefreshCw },
];

export function ProcessSteps() {
  return (
    <section className="bg-[var(--color-brand-950)] text-white py-20 md:py-24 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-16 items-center">
          {/* Left column — content */}
          <div className="lg:col-span-1">
            <p className="kicker kicker-on-dark">How we engage</p>

            <h2 className="mt-5 font-display text-[34px] md:text-[42px] lg:text-[52px] font-semibold leading-[1.04] tracking-[-0.025em] text-white text-balance">
              Engagement
              <br />
              Lifecycle
              <br />
              <span className="text-[var(--color-brand-200)]">Management</span>
            </h2>

            <p className="mt-6 max-w-md text-[14.5px] md:text-[15px] leading-[1.7] text-white/70 text-pretty">
              Four phases that hold across every engagement — discover the brief, design the plan,
              deliver the work, sustain the relationship across years. The deliverables change by
              audience, the shape never does.
            </p>

            <a
              href="/about#approach"
              className="group mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white transition-colors hover:text-[var(--color-brand-200)]"
            >
              <span className="under-slide">Learn more</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.25}
              />
            </a>

            <span aria-hidden="true" className="mt-10 block h-px w-full max-w-md bg-white/10" />

            {/* Phase pills */}
            <div className="mt-6 flex flex-wrap gap-2.5 max-w-md">
              {phases.map((p) => (
                <span
                  key={p.title}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
                >
                  <p.icon className="h-3.5 w-3.5 text-[var(--color-brand-300)]" strokeWidth={1.75} />
                  {p.title}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — orbital lifecycle diagram */}
          <Reveal className="lg:col-span-1 relative aspect-square w-full max-w-[560px] mx-auto">
            <LifecycleDiagram />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ───── Lifecycle diagram — pure SVG ──────────────────────── */

function LifecycleDiagram() {
  // Geometry
  const cx = 300;
  const cy = 300;
  const ringRadii = [275, 245, 215]; // outermost first
  const donutOuter = 180;
  const donutInner = 110;
  const coreRadius = 80;
  const midDonutRadius = (donutOuter + donutInner) / 2;

  // Floating icon positions on outer ring (315°, 45°, 135°, 225° in SVG coords)
  const iconPositions = [
    { angleDeg: -55, radius: ringRadii[0]!, icon: Search,    label: 'Discover' },
    { angleDeg: 35,  radius: ringRadii[0]!, icon: PenTool,   label: 'Design' },
    { angleDeg: 125, radius: ringRadii[0]!, icon: Send,      label: 'Deliver' },
    { angleDeg: 215, radius: ringRadii[0]!, icon: RefreshCw, label: 'Sustain' },
  ];

  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-auto"
      role="img"
      aria-label="Engagement lifecycle: Discover, Design, Deliver, Sustain"
    >
      <defs>
        {/* Donut gradient — brand-300 → brand-700 sweep */}
        <linearGradient id="lc-donut" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="var(--color-brand-300)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="var(--color-brand-700)" stopOpacity="0.95" />
        </linearGradient>
        {/* Soft outer halo */}
        <radialGradient id="lc-halo" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="var(--color-brand-700)" stopOpacity="0" />
          <stop offset="85%" stopColor="var(--color-brand-700)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--color-brand-700)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft halo behind everything */}
      <circle cx={cx} cy={cy} r="290" fill="url(#lc-halo)" />

      {/* Concentric outer rings */}
      {ringRadii.map((r, i) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="rgba(184,208,251,0.18)"
          strokeWidth={i === 0 ? '0.75' : '0.5'}
        />
      ))}

      {/* Donut ring with gradient */}
      <circle cx={cx} cy={cy} r={donutOuter} fill="url(#lc-donut)" />
      <circle cx={cx} cy={cy} r={donutInner} fill="var(--color-brand-950)" />

      {/* Segment dividers — 4 thin lines through the donut at 0°, 90°, 180°, 270° */}
      <g stroke="var(--color-brand-950)" strokeWidth="1.25">
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = cx + donutInner * Math.cos(rad);
          const y1 = cy + donutInner * Math.sin(rad);
          const x2 = cx + donutOuter * Math.cos(rad);
          const y2 = cy + donutOuter * Math.sin(rad);
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {/* Phase labels inside segments — straight horizontal text at 4 cardinal positions */}
      <g
        fill="white"
        fontFamily="Inter Tight, system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="2.6"
        textAnchor="middle"
        style={{ textTransform: 'uppercase' }}
      >
        <text x={cx}                       y={cy - midDonutRadius + 4}>DISCOVER</text>
        <text x={cx + midDonutRadius}      y={cy + 4}>DESIGN</text>
        <text x={cx}                       y={cy + midDonutRadius + 4}>DELIVER</text>
        <text x={cx - midDonutRadius}      y={cy + 4}>SUSTAIN</text>
      </g>

      {/* Inner core circle */}
      <circle
        cx={cx}
        cy={cy}
        r={coreRadius}
        fill="var(--color-brand-950)"
        stroke="var(--color-brand-700)"
        strokeWidth="1"
      />

      {/* Inner core — Alphinix A-mark */}
      <g transform={`translate(${cx - 24}, ${cy - 24})`}>
        <svg viewBox="0 0 32 32" width="48" height="48" fill="none">
          <path
            d="M5 26 L16 5 L27 26 M10 19 H22"
            stroke="var(--color-brand-200)"
            strokeWidth="2.4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </g>

      {/* Floating phase icon chips on the outer ring */}
      {iconPositions.map(({ angleDeg, radius, icon: Icon, label }) => {
        const rad = (angleDeg * Math.PI) / 180;
        const x = cx + radius * Math.cos(rad) - 22;
        const y = cy + radius * Math.sin(rad) - 22;
        return (
          <g key={label} transform={`translate(${x}, ${y})`}>
            {/* Backdrop chip */}
            <rect
              width="44"
              height="44"
              rx="8"
              fill="var(--color-brand-900)"
              stroke="var(--color-brand-700)"
              strokeWidth="1"
            />
            {/* Lucide icon embedded as nested svg */}
            <svg x="11" y="11" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <Icon
                width="22"
                height="22"
                stroke="var(--color-brand-200)"
                strokeWidth={1.75}
              />
            </svg>
          </g>
        );
      })}
    </svg>
  );
}
