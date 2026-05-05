/**
 * @file SchoolSignatures.tsx
 * @purpose Per-programme signature sections for the schools detail pages.
 *          Each slug renders a visually distinct layout — no card grid as primary.
 */

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import {
  Cpu,
  Server,
  Bot,
  Wrench,
  Boxes,
  PlugZap,
  Wifi,
  Radio,
  Layers,
  CheckCircle2,
  Plane,
} from 'lucide-react';

/* Signature router — one component per school programme slug */
export function SchoolSignature({ slug }: { slug: string }) {
  switch (slug) {
    case 'ai-robotics-education': return <AgeGradeLadder />;
    case 'iot-lab-setup':         return <LabFloorPlan />;
    case 'coding-education':      return <LanguageProgression />;
    case 'stem-atl-labs':         return <AtlInventoryChecklist />;
    case 'hardware-kits':         return <KitUnboxing />;
    case 'teacher-training':      return <WorkshopSchedule />;
    default:                      return null;
  }
}

/* ───── 1. Age-grade ladder (AI & Robotics) ───────────────── */

const ladderTiers = [
  {
    band: 'Class 6 — 8',
    stage: 'Middle stage',
    focus: 'Block-based AI · enclosed robotics kits',
    projects: [
      'A robot that follows a coloured line on the classroom floor',
      'A small voice-trigger that turns a desk lamp on and off',
      'A simple image classifier that sorts pictures of fruit',
    ],
  },
  {
    band: 'Class 9 — 10',
    stage: 'Secondary stage',
    focus: 'Sensor-driven robotics · early text-based AI',
    projects: [
      'A robot arm that picks and stacks coloured blocks',
      'A weather-station that posts readings to a class dashboard',
      'A trained model that recognises hand-drawn digits',
    ],
  },
  {
    band: 'Class 11 — 12',
    stage: 'Senior secondary',
    focus: 'Foundation models · capstone robotics builds',
    projects: [
      'A small autonomous rover with sensor fusion',
      'A retrieval-augmented chatbot built around a school FAQ',
      'A vision-based attendance demo for a single classroom',
    ],
  },
];

function AgeGradeLadder() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Age-grade ladder</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              The same lab grows up with the student — three rungs, three project sets.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              The curriculum is split into three rungs aligned with NEP 2020 stage outcomes. Each rung carries
              its own kit list, lesson cadence, and a sample project set teachers can pull from.
            </p>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {ladderTiers.map((t, i) => (
            <Reveal key={t.band} delay={i * 80}>
              <article className="grid grid-cols-12 gap-x-4 gap-y-4 md:gap-x-8 bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[12px] p-6 md:p-8 row-hover">
                {/* Tier number column */}
                <div className="col-span-12 md:col-span-2 flex md:flex-col items-baseline md:items-start gap-3 md:gap-1 md:border-r md:border-[var(--color-line)] md:pr-6">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    Tier {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[28px] md:text-[44px] font-semibold leading-[0.96] tracking-[-0.024em] text-[var(--color-brand-700)] tabular-nums">
                    {String(i + 1)}
                  </span>
                </div>

                {/* Band + stage */}
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-[20px] md:text-[24px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                    {t.band}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                    {t.stage}
                  </p>
                  <p className="mt-4 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                    {t.focus}
                  </p>
                </div>

                {/* Sample projects */}
                <div className="col-span-12 md:col-span-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
                    Sample projects
                  </p>
                  <ul className="mt-3 space-y-2">
                    {t.projects.map((p, idx) => (
                      <li
                        key={idx}
                        className="flex items-baseline gap-3 text-[13.5px] leading-[1.55] text-[var(--color-fg)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-700)]"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───── 2. Lab floor-plan (IoT lab setup) ────────────────── */

type Zone = {
  key: string;
  title: string;
  body: string;
  icon: typeof Cpu;
  area: string; // grid-area name
};

const zones: Zone[] = [
  { key: 'sensor',   title: 'Sensor corner',   body: 'Temperature, humidity, motion, light, gas — bench wired for low-voltage student use.', icon: Radio,   area: 'sensor' },
  { key: 'robotics', title: 'Robotics zone',   body: 'Open-floor robot test area with safe boundary tape and overhead power drops.',         icon: Bot,     area: 'robotics' },
  { key: 'micro',    title: 'Microcontroller benches', body: 'Six paired benches with Arduino + Raspberry Pi kits and breadboard storage.',     icon: Cpu,     area: 'micro' },
  { key: 'server',   title: 'Server rack',     body: 'A small rack for the lab gateway, the Wi-Fi access point, and the local MQTT broker.',  icon: Server,  area: 'server' },
  { key: 'demo',     title: 'Demo space',      body: 'Open standing area for class demos, parent walkthroughs, and the showcase station.',    icon: Wifi,    area: 'demo' },
  { key: 'storage',  title: 'Storage wall',    body: 'Labelled cubbies for kits, consumables, and project work that lives across sessions.',  icon: Boxes,   area: 'storage' },
];

function LabFloorPlan() {
  return (
    <section className="bg-[var(--color-fg)] text-white section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker kicker-on-dark">A typical IoT lab</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
              The room, drawn the way we hand it over.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-white/70">
              A single classroom of around 600 square feet, six zones, low-voltage power throughout. The floor
              plan adjusts to your room — the zones do not change.
            </p>
          </div>
        </div>

        {/* Schematic floor plan — CSS grid */}
        <div
          className="relative rounded-[14px] border border-white/15 bg-white/[0.03] p-3 md:p-5"
          style={{ backdropFilter: 'blur(0.5px)' }}
        >
          {/* Faux-blueprint header */}
          <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3 mb-4">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-200)]">
              Lab plan · scale 1:50
            </p>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55 tabular-nums">
              30 students · 6 zones
            </p>
          </div>

          <div
            className="grid gap-2 md:gap-3"
            style={{
              gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
              gridTemplateRows: 'repeat(3, minmax(120px, auto))',
              gridTemplateAreas: `
                "sensor sensor robotics robotics robotics demo"
                "micro  micro  micro    micro    demo     demo"
                "storage storage server  server   server   server"
              `,
            }}
          >
            {zones.map((z) => (
              <Zone key={z.key} zone={z} />
            ))}
          </div>

          {/* Legend strip */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-3 px-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55">Legend</p>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/70">
              <span aria-hidden="true" className="block h-2 w-2 rounded-[1px] bg-[var(--color-brand-300)]" />
              Student bench
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/70">
              <span aria-hidden="true" className="block h-2 w-2 rounded-[1px] bg-white/35" />
              Open floor
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/70">
              <PlugZap className="h-3 w-3 text-[var(--color-brand-200)]" strokeWidth={2} />
              Low-voltage power
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Zone({ zone }: { zone: Zone }) {
  const Icon = zone.icon;
  return (
    <div
      className="relative rounded-[10px] border border-white/15 bg-white/[0.04] p-4 md:p-5 transition-colors hover:border-[var(--color-brand-300)]/60 hover:bg-white/[0.06]"
      style={{ gridArea: zone.area }}
    >
      <div className="flex items-start justify-between">
        <span className="grid h-8 w-8 place-items-center rounded-[6px] bg-[var(--color-brand-700)] text-white ring-1 ring-white/15">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-200)]">
          Zone
        </span>
      </div>
      <h3 className="mt-4 font-display text-[15px] md:text-[16px] font-semibold tracking-[-0.012em] text-white">
        {zone.title}
      </h3>
      <p className="mt-1.5 text-[12px] leading-[1.55] text-white/70">{zone.body}</p>
    </div>
  );
}

/* ───── 3. Language progression (Coding education) ──────── */

const langStages = [
  {
    pct: 25,
    label: 'Scratch',
    band: 'Class 3 — 5',
    body: 'Block-based programming, pixel sprites, and a scrolling project gallery that gets pinned outside the lab.',
    builds: ['A simple two-player chase game', 'A short interactive story', 'A clicker that counts steps'],
  },
  {
    pct: 60,
    label: 'Python',
    band: 'Class 6 — 10',
    body: 'Text-based programming with a forgiving syntax. Loops, lists, and dictionaries become the new toys.',
    builds: ['A working calculator', 'A small text adventure', 'A turtle-graphics rangoli generator'],
  },
  {
    pct: 100,
    label: 'JavaScript',
    band: 'Class 11 — 12',
    body: 'The web platform — DOM, events, and a small framework. Everything ships to a public URL.',
    builds: ['A personal webpage that ships live', 'A school-club event microsite', 'A small browser game'],
  },
];

function LanguageProgression() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="kicker">Language progression</p>
          <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
            Scratch <span className="text-[var(--color-fg-5)]">→</span> Python{' '}
            <span className="text-[var(--color-fg-5)]">→</span> JavaScript.
          </h2>
          <p className="mt-5 max-w-2xl text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
            Three languages over nine grades, each one earning its slot when students are ready. The progression
            below is the visual we share with parents and academic heads.
          </p>
        </div>

        {/* Horizontal progression bar */}
        <div className="hidden md:block">
          <div className="relative h-[2px] bg-[var(--color-line)] mx-3">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full bg-[var(--color-brand-700)]"
              style={{ width: '100%' }}
            />
            {/* Marker dots */}
            {langStages.map((s) => (
              <span
                key={s.label}
                aria-hidden="true"
                className="absolute -top-[5px] grid h-3 w-3 place-items-center rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
                style={{ left: `calc(${s.pct}% - 6px)` }}
              />
            ))}
          </div>
          <div className="mt-2 grid grid-cols-3">
            {langStages.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div
                  className="pt-6 pr-6"
                  style={{ marginLeft: i === 0 ? 0 : i === 1 ? '15%' : '40%' }}
                >
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    Stage {String(i + 1).padStart(2, '0')} · {s.band}
                  </p>
                  <h3 className="mt-2 font-display text-[26px] lg:text-[32px] font-semibold leading-[1.04] tracking-[-0.022em] text-[var(--color-fg)]">
                    {s.label}
                  </h3>
                  <p className="mt-3 max-w-[28ch] text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                    {s.body}
                  </p>
                  <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
                    Students build
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {s.builds.map((b) => (
                      <li
                        key={b}
                        className="flex items-baseline gap-2 text-[12.5px] leading-[1.55] text-[var(--color-fg)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-700)]"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile — stacked timeline */}
        <ol className="md:hidden relative pl-7 space-y-8">
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--color-brand-700)]"
          />
          {langStages.map((s, i) => (
            <li key={s.label} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[26px] top-1 block h-2.5 w-2.5 rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
              />
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                Stage {String(i + 1).padStart(2, '0')} · {s.band}
              </p>
              <h3 className="mt-2 font-display text-[24px] font-semibold tracking-[-0.022em] text-[var(--color-fg)]">
                {s.label}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">{s.body}</p>
              <ul className="mt-3 space-y-1.5">
                {s.builds.map((b) => (
                  <li
                    key={b}
                    className="flex items-baseline gap-2 text-[12.5px] leading-[1.55] text-[var(--color-fg)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-700)]"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ───── 4. ATL inventory checklist (STEM & ATL labs) ──── */

const atlCategories = [
  {
    key: 'electronics',
    name: 'Electronics & circuits',
    items: [
      'Multimeters (per bench)',
      'Soldering stations with safety mats',
      'Resistor and capacitor consumables tray',
      'Logic gate trainer kits',
    ],
  },
  {
    key: 'robotics',
    name: 'Robotics & mechanical',
    items: [
      'Beginner robot chassis kits',
      'Servo and DC motor assortment',
      'Mechanical fastener tray',
      'Open-floor test mat (2m × 2m)',
    ],
  },
  {
    key: 'iot',
    name: 'IoT & sensors',
    items: [
      'Microcontroller boards (Arduino + ESP32)',
      'Sensor modules — temperature, humidity, motion, gas',
      'Breadboards and jumper wire packs',
      'Wi-Fi access point and local broker',
    ],
  },
  {
    key: 'compute',
    name: 'Compute & AI',
    items: [
      'Single-board computers (Raspberry Pi)',
      'Camera module and class-set headset mics',
      'Foundation-model platform access',
      'Local model storage on the lab gateway',
    ],
  },
  {
    key: 'fab',
    name: '3D printing & fabrication',
    items: [
      'Desktop 3D printer with spare nozzles',
      'PLA filament reels in two colours',
      'Slicing software licences',
      'Sandpaper, files, and finishing tray',
    ],
  },
  {
    key: 'design',
    name: 'Design & documentation',
    items: [
      'Project journals — one per student team',
      'Digital sketching tablets for design work',
      'Lab inventory register and usage log',
      'Showcase-day signage and project cards',
    ],
  },
];

function AtlInventoryChecklist() {
  return (
    <section className="bg-[var(--color-brand-50)] border-y border-[var(--color-brand-100)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">ATL inventory checklist</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Six categories, mapped against the official ATL kit list.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              The checklist below mirrors the published ATL handbook. Schools running parallel STEM labs can use
              the same structure — quantities are sized to your student count when we draft the order.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[12px] overflow-hidden">
          {/* Checklist header strip */}
          <div className="hidden md:flex items-center justify-between px-6 py-3.5 border-b border-[var(--color-line)] bg-[var(--color-canvas)]">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
              Category · indicative inventory
            </p>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
              ATL handbook reference
            </p>
          </div>

          <ul>
            {atlCategories.map((c, i) => (
              <Reveal as="li" key={c.key} delay={i * 50} className="border-b border-[var(--color-line)] last:border-b-0 row-hover">
                <article className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-4 px-6 py-6 md:py-7 items-baseline">
                  <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="col-span-10 md:col-span-3 font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                    {c.name}
                  </h3>
                  <ul className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2 text-[13px] leading-[1.55] text-[var(--color-fg-2)]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-brand-700)]"
                          strokeWidth={2}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-[12.5px] text-[var(--color-fg-5)]">
          Quantities are sized per school — the inventory register is delivered alongside the lab and stays with the school.
        </p>
      </Container>
    </section>
  );
}

/* ───── 5. Kit unboxing (Hardware kits) ──────────────────── */

const kitTiers = [
  {
    name: 'Starter kit',
    sub: 'Class 6 — 8',
    icon: Wrench,
    contents: [
      'Arduino Uno + USB cable',
      '1 × breadboard, jumper-wire pack',
      '8 × beginner sensors (light, sound, motion, temperature)',
      '2 × DC motors with wheels',
      '15 printed project briefs',
      'Storage box with cubby labels',
    ],
    sample: 'Smart desk-lamp · line-following car · weather sniffer',
    accent: 'bg-[var(--color-brand-50)] border-[var(--color-brand-100)]',
  },
  {
    name: 'Advanced kit',
    sub: 'Class 9 — 10',
    icon: Layers,
    contents: [
      'Arduino + ESP32 microcontroller pair',
      'Servos and stepper motors with driver board',
      'Camera module and OLED screen',
      'Sensor expansion pack (gas, current, ultrasonic)',
      '25 printed project briefs',
      'Project journal per student team',
    ],
    sample: 'Greenhouse monitor · pick-and-place robot arm · weather dashboard',
    accent: 'bg-[var(--color-bg)] border-[var(--color-line)]',
  },
  {
    name: 'Pro kit',
    sub: 'Class 11 — 12',
    icon: Plane,
    contents: [
      'Raspberry Pi 5 + camera module',
      'Mini-quad drone for indoor flight',
      'AI accelerator for on-device inference',
      'Foundation-model platform credits',
      '40 printed project briefs',
      'Take-home capstone module per student',
    ],
    sample: 'Vision-based attendance demo · indoor drone navigation · RAG chatbot',
    accent: 'bg-[var(--color-fg)] text-white border-transparent',
  },
];

function KitUnboxing() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="kicker">Kit unboxing</p>
          <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
            Three tiers. Three boxes. Pick the one that fits the grade.
          </h2>
          <p className="mt-5 max-w-2xl text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
            Each tier ships in a single labelled box. Below is what students find when they open it for the
            first time, plus the sample projects they end up building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {kitTiers.map((k, i) => {
            const Icon = k.icon;
            const isDark = k.name === 'Pro kit';
            return (
              <Reveal key={k.name} delay={i * 100}>
                <article
                  className={[
                    'group/k relative h-full rounded-[14px] border p-7 md:p-8 flex flex-col transition-colors',
                    k.accent,
                  ].join(' ')}
                >
                  {/* Tape strip */}
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute -top-2 left-7 h-3 w-20 rotate-[-3deg] rounded-[2px]',
                      isDark ? 'bg-[var(--color-brand-300)]/70' : 'bg-[var(--color-brand-700)]/85',
                    ].join(' ')}
                  />

                  <div className="flex items-start justify-between">
                    <span
                      className={[
                        'grid h-11 w-11 place-items-center rounded-[8px] ring-1',
                        isDark
                          ? 'bg-white/10 text-[var(--color-brand-200)] ring-white/15'
                          : 'bg-[var(--color-bg)] text-[var(--color-brand-700)] ring-[var(--color-line)]',
                      ].join(' ')}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span
                      className={[
                        'font-mono text-[10px] uppercase tracking-[0.18em] font-semibold',
                        isDark ? 'text-[var(--color-brand-200)]' : 'text-[var(--color-fg-5)]',
                      ].join(' ')}
                    >
                      Tier {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3
                    className={[
                      'mt-7 font-display text-[24px] md:text-[26px] font-semibold tracking-[-0.022em]',
                      isDark ? 'text-white' : 'text-[var(--color-fg)]',
                    ].join(' ')}
                  >
                    {k.name}
                  </h3>
                  <p
                    className={[
                      'mt-1 font-mono text-[11px] uppercase tracking-[0.16em]',
                      isDark ? 'text-white/55' : 'text-[var(--color-fg-5)]',
                    ].join(' ')}
                  >
                    {k.sub}
                  </p>

                  <p
                    className={[
                      'mt-6 font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold',
                      isDark ? 'text-[var(--color-brand-200)]' : 'text-[var(--color-fg-5)]',
                    ].join(' ')}
                  >
                    Inside the box
                  </p>
                  <ul
                    className={[
                      'mt-3 space-y-2',
                      isDark ? 'text-white/85' : 'text-[var(--color-fg-2)]',
                    ].join(' ')}
                  >
                    {k.contents.map((c) => (
                      <li key={c} className="flex items-baseline gap-2 text-[13px] leading-[1.55]">
                        <span
                          aria-hidden="true"
                          className={[
                            'mt-2 block h-1 w-1 shrink-0 rounded-full',
                            isDark ? 'bg-[var(--color-brand-300)]' : 'bg-[var(--color-brand-700)]',
                          ].join(' ')}
                        />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={[
                      'mt-auto pt-6 border-t',
                      isDark ? 'border-white/10' : 'border-[var(--color-line)]',
                    ].join(' ')}
                  >
                    <p
                      className={[
                        'font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold',
                        isDark ? 'text-[var(--color-brand-200)]' : 'text-[var(--color-fg-5)]',
                      ].join(' ')}
                    >
                      Students build
                    </p>
                    <p
                      className={[
                        'mt-2 text-[13px] leading-[1.5]',
                        isDark ? 'text-white' : 'text-[var(--color-fg)]',
                      ].join(' ')}
                    >
                      {k.sample}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ───── 6. Workshop schedule (Teacher training) ────────── */

const weeks = [
  { week: 'Week 01', topic: 'Foundations',           focus: 'Curriculum walk-through, lab handbook, the rhythm of a modern coding class.' },
  { week: 'Week 02', topic: 'Hands-on with kits',    focus: 'Teachers build the same projects students will — common mistakes flagged out.' },
  { week: 'Week 03', topic: 'Lesson plan & rubrics', focus: 'Workshop on writing a lesson plan and a reusable assessment rubric.' },
  { week: 'Week 04', topic: 'Classroom shadowing',   focus: 'We run a session, the teacher observes; the next week the roles flip.' },
  { week: 'Week 05', topic: 'Showcase facilitation', focus: 'Pacing, parent talking-points, and the parent one-pager for the showcase day.' },
  { week: 'Week 06', topic: 'Handover & certify',    focus: 'Final review, certificate of completion, and the on-call support cadence.' },
];

function WorkshopSchedule() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Six-week pacing</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              The training, week by week.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              The cadence is short and weekly so teachers do not lose teaching periods. The focus shifts each
              week — from foundations through to a working showcase the staff runs themselves.
            </p>
          </div>
        </div>

        {/* Pacing strip — desktop horizontal, mobile stacked */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-6 border-t border-[var(--color-fg)]">
            {/* Spine through the middle */}
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-[-1px] h-[2px] bg-[var(--color-brand-700)]"
            />
            {weeks.map((w, i) => (
              <Reveal
                key={w.week}
                delay={i * 60}
                className={[
                  'relative px-4 lg:px-5 py-7 lg:py-8 border-r border-[var(--color-line)] last:border-r-0',
                  'min-h-[230px] flex flex-col',
                ].join(' ')}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[6px] left-[18px] grid h-3 w-3 place-items-center rounded-full bg-[var(--color-brand-700)] ring-4 ring-[var(--color-bg)]"
                />
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  {w.week}
                </p>
                <h3 className="mt-3 font-display text-[17px] lg:text-[18px] font-semibold leading-[1.22] tracking-[-0.018em] text-[var(--color-fg)]">
                  {w.topic}
                </h3>
                <p className="mt-3 text-[12.5px] leading-[1.6] text-[var(--color-fg-3)]">
                  {w.focus}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile — stacked rows */}
        <ol className="md:hidden border-t border-[var(--color-fg)]">
          {weeks.map((w, i) => (
            <Reveal as="li" key={w.week} delay={i * 50} className="border-b border-[var(--color-line)]">
              <article className="grid grid-cols-12 gap-x-4 py-6">
                <span className="col-span-3 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  {w.week}
                </span>
                <div className="col-span-9">
                  <h3 className="font-display text-[17px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                    {w.topic}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--color-fg-3)]">
                    {w.focus}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
