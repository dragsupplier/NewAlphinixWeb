/**
 * HeroDiagram — a precision-engineered hub-and-spoke + ring graphic.
 * Five segment nodes orbit the Alphinix hub. Lines stroke-draw on mount;
 * annotation marks and a coral pulse dot travel along one spoke.
 *
 * Composition is deliberate (not a generic "abstract network"):
 *   - Pentagon node positions = the 5 audiences
 *   - Hub-spoke lines = direct service relationship
 *   - Ring lines     = the loop that connects all audiences to each other
 */
import { segments } from '@/data/segments';

const cx = 240;
const cy = 240;
const r = 165;

// 5 angles starting at -90° (top), 72° apart, clockwise.
const angles = [-90, -18, 54, 126, 198].map((d) => (d * Math.PI) / 180);

const nodes = segments.map((s, i) => {
  const a = angles[i]!;
  return {
    ...s,
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a),
    angleDeg: -90 + i * 72,
  };
});

export function HeroDiagram() {
  return (
    <svg
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Alphinix as a hub connected to five audience segments — Students, Colleges, Schools, Businesses, and Hiring."
      className="block w-full h-auto"
    >
      <defs>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0a0e27" stopOpacity="0.06" />
          <stop offset="60%" stopColor="#0a0e27" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#0a0e27" stopOpacity="0" />
        </radialGradient>
        <pattern id="micro-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#0a0e27" strokeOpacity="0.04" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Background substrate */}
      <rect width="480" height="480" fill="url(#micro-grid)" />
      <circle cx={cx} cy={cy} r="220" fill="url(#halo)" />

      {/* Concentric reference circles — architectural */}
      <circle cx={cx} cy={cy} r="80"  fill="none" stroke="#0a0e27" strokeOpacity="0.08" strokeDasharray="2 4" />
      <circle cx={cx} cy={cy} r="165" fill="none" stroke="#0a0e27" strokeOpacity="0.10" />
      <circle cx={cx} cy={cy} r="200" fill="none" stroke="#0a0e27" strokeOpacity="0.06" strokeDasharray="2 4" />

      {/* Ring lines — connect each segment to its two neighbours (forms the pentagon) */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length]!;
        return (
          <line
            key={`ring-${i}`}
            x1={n.x}
            y1={n.y}
            x2={next.x}
            y2={next.y}
            stroke="#0a0e27"
            strokeOpacity="0.22"
            strokeWidth="1"
            className="draw-line"
            style={{ animationDelay: `${300 + i * 80}ms` }}
          />
        );
      })}

      {/* Hub-spoke lines */}
      {nodes.map((n, i) => (
        <line
          key={`spoke-${i}`}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          stroke="#0a0e27"
          strokeOpacity="0.45"
          strokeWidth="1"
          className="draw-line"
          style={{ animationDelay: `${i * 80}ms` }}
        />
      ))}

      {/* Pulse dot travelling along the top spoke (Students) — single, subtle */}
      <circle r="3.5" fill="#ff6b3d">
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          path={`M ${cx} ${cy} L ${nodes[0]!.x} ${nodes[0]!.y}`}
        />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3.6s" repeatCount="indefinite" />
      </circle>

      {/* Satellite nodes */}
      {nodes.map((n, i) => (
        <g key={n.slug} style={{ animation: `mountUp 600ms ${500 + i * 90}ms cubic-bezier(0.22,1,0.36,1) both` }}>
          {/* Outer halo */}
          <circle cx={n.x} cy={n.y} r="36" fill="#fafaf7" stroke="#0a0e27" strokeOpacity="0.08" />
          {/* Body */}
          <circle cx={n.x} cy={n.y} r="26" fill="#fafaf7" stroke="#0a0e27" strokeWidth="1.2" />
          {/* Segment color dot */}
          <circle cx={n.x} cy={n.y - 8} r="3" fill={`var(${n.colorVar})`} />
          {/* Index */}
          <text
            x={n.x}
            y={n.y + 2}
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="9"
            fill="#6b6f80"
            letterSpacing="0.12em"
          >
            {n.index}
          </text>
          {/* Name */}
          <text
            x={n.x}
            y={n.y + 14}
            textAnchor="middle"
            fontFamily="Cabinet Grotesk, system-ui, sans-serif"
            fontSize="10"
            fontWeight="700"
            fill="#0a0e27"
            letterSpacing="-0.01em"
          >
            {n.name}
          </text>
        </g>
      ))}

      {/* Central hub */}
      <g style={{ animation: 'mountUp 700ms 200ms cubic-bezier(0.22,1,0.36,1) both' }}>
        <circle cx={cx} cy={cy} r="56" fill="none" stroke="#0a0e27" strokeOpacity="0.10" />
        <circle cx={cx} cy={cy} r="44" fill="#0a0e27" />
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          fontFamily="Cabinet Grotesk, system-ui, sans-serif"
          fontSize="13"
          fontWeight="800"
          fill="#fafaf7"
          letterSpacing="-0.02em"
        >
          ALPHINIX
        </text>
        <text
          x={cx}
          y={cy + 11}
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="7.5"
          fill="#fafaf7"
          opacity="0.6"
          letterSpacing="0.18em"
        >
          PUNE · IN
        </text>
      </g>

      {/* Architectural ticks at the four cardinal edges */}
      {[
        { x1: 240, y1: 4, x2: 240, y2: 12 },
        { x1: 4, y1: 240, x2: 12, y2: 240 },
        { x1: 240, y1: 468, x2: 240, y2: 476 },
        { x1: 468, y1: 240, x2: 476, y2: 240 },
      ].map((t, i) => (
        <line key={i} {...t} stroke="#0a0e27" strokeOpacity="0.35" strokeWidth="1" />
      ))}

      {/* Corner serial label */}
      <text x="12" y="18" fontFamily="ui-monospace, monospace" fontSize="9" fill="#6b6f80" letterSpacing="0.18em">
        FIG. 01
      </text>
      <text x="468" y="472" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" fill="#6b6f80" letterSpacing="0.18em">
        ALPHINIX / SEGMENTS
      </text>
    </svg>
  );
}
