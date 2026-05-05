import {
  Globe,
  Server,
  Database,
  Search,
  BarChart3,
  Cloud,
  ArrowRight,
  Inbox,
  FileSpreadsheet,
  Send,
  Bot,
  CheckCircle2,
  Clock,
  Users,
  Shield,
  Lock,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

/**
 * Per-capability signature section. Each slug renders a layout that is
 * deliberately distinct from the others — schematic, matrix, taxonomy,
 * process map, zone diagram, channel matrix, engagement menu.
 */
export function BusinessSignature({ slug }: { slug: string }) {
  switch (slug) {
    case 'website-development':
      return <WebReferenceArchitecture />;
    case 'mobile-app-development':
      return <MobileDecisionMatrix />;
    case 'ai-solutions':
      return <AiUseCaseTaxonomy />;
    case 'automation-systems':
      return <AutomationProcessMap />;
    case 'cloud-infrastructure':
      return <CloudZoneDiagram />;
    case 'digital-marketing':
      return <ChannelMixMatrix />;
    case 'technology-consulting':
      return <ConsultingEngagementMenu />;
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────────────────────
   1 · Website development — Reference architecture schematic
   ───────────────────────────────────────────────────────────── */

type ArchNode = {
  label: string;
  detail: string;
  icon: LucideIcon;
  emphasis?: boolean;
};

const archNodes: ArchNode[] = [
  { label: 'CDN', detail: 'Cloudflare · global edge', icon: Globe },
  { label: 'Frontend', detail: 'React · Next.js', icon: Layers, emphasis: true },
  { label: 'API', detail: 'Node · TypeScript', icon: Server, emphasis: true },
  { label: 'Database', detail: 'PostgreSQL · Redis', icon: Database },
  { label: 'Search', detail: 'Typesense · Algolia', icon: Search },
  { label: 'Analytics', detail: 'GA4 · PostHog', icon: BarChart3 },
];

function WebReferenceArchitecture() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Reference architecture</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
              The shape of every web engagement. Drawn before code is written.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              Six layers, mainstream choices at each. The specification commits to a named technology per layer
              with the cost, vendor, and operational owner agreed before the build phase begins.
            </p>
          </div>
        </div>

        <Reveal>
          <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[12px] p-6 md:p-10">
            {/* Schematic — horizontal pipeline on lg, stacked on mobile */}
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-0 lg:items-stretch">
              {archNodes.map((n, i) => (
                <li
                  key={n.label}
                  className={cn(
                    'relative flex flex-col rounded-[10px] border p-4 md:p-5 transition-colors',
                    n.emphasis
                      ? 'border-[var(--color-brand-700)] bg-[var(--color-brand-50)]'
                      : 'border-[var(--color-line)] bg-[var(--color-canvas)]',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'grid h-9 w-9 place-items-center rounded-[6px]',
                        n.emphasis
                          ? 'bg-[var(--color-brand-700)] text-white'
                          : 'bg-[var(--color-bg)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]',
                      )}
                    >
                      <n.icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] tabular-nums text-[var(--color-fg-5)]">
                      L{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
                    {n.label}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-fg-3)]">
                    {n.detail}
                  </p>

                  {/* Connector arrow — only on lg, between tiles */}
                  {i < archNodes.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:flex absolute top-1/2 -right-2 z-10 h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-bg)] ring-1 ring-[var(--color-line)]"
                    >
                      <ArrowRight className="h-3 w-3 text-[var(--color-brand-700)]" strokeWidth={2.25} />
                    </span>
                  )}
                </li>
              ))}
            </ol>

            {/* Footnote bar */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-6 border-t border-[var(--color-line)] pt-5">
              <FootCell label="Performance budget" value="LCP < 1.5s · INP < 200ms" />
              <FootCell label="Accessibility target" value="WCAG 2.2 AA · axe in CI" />
              <FootCell label="SEO baseline" value="Schema · sitemap · llms.txt" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FootCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
        {label}
      </p>
      <p className="mt-1 text-[13px] font-medium text-[var(--color-fg)]">{value}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2 · Mobile — Native vs cross-platform decision matrix
   ───────────────────────────────────────────────────────────── */

type Rating = 1 | 2 | 3 | 4 | 5;
type MobileRow = {
  axis: string;
  detail: string;
  ios: Rating;
  android: Rating;
  cross: Rating;
};

const mobileRows: MobileRow[] = [
  { axis: 'Time to first release', detail: 'From spec to public store',          ios: 3, android: 3, cross: 5 },
  { axis: 'Engineering cost',      detail: 'Build through first release',         ios: 2, android: 2, cross: 4 },
  { axis: 'Runtime performance',   detail: 'Launch and scroll responsiveness',    ios: 5, android: 5, cross: 4 },
  { axis: 'Hardware integration',  detail: 'BLE, sensors, background tasks',      ios: 5, android: 5, cross: 3 },
  { axis: 'Developer experience',  detail: 'Hot reload, debugging, tooling',      ios: 3, android: 3, cross: 5 },
  { axis: 'Long-term maintenance', detail: 'Upgrades over a multi-year window',   ios: 4, android: 4, cross: 4 },
];

function Bar({ value }: { value: Rating }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          aria-hidden="true"
          className={cn(
            'block h-3 w-1.5 rounded-[1px]',
            n <= value ? 'bg-[var(--color-brand-700)]' : 'bg-[var(--color-line-2)]',
          )}
        />
      ))}
    </span>
  );
}

function MobileDecisionMatrix() {
  return (
    <section className="bg-[var(--color-bg)] section-y border-y border-[var(--color-line)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Decision matrix</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
              Native or cross-platform. The decision is in the matrix, not the slogan.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              Six axes, scored against the engagement profile. Cross-platform is the default for most consumer
              and B2B applications; native is reached for where the matrix demands it.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-[10px] border border-[var(--color-line)]">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="bg-[var(--color-canvas)] text-left">
                <th className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Axis
                </th>
                <th className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  iOS native
                </th>
                <th className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Android native
                </th>
                <th className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)]">
                  Cross-platform
                </th>
              </tr>
            </thead>
            <tbody>
              {mobileRows.map((r) => (
                <tr
                  key={r.axis}
                  className="border-t border-[var(--color-line)] row-hover"
                >
                  <td className="px-5 py-5 align-top">
                    <p className="font-display text-[15.5px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                      {r.axis}
                    </p>
                    <p className="mt-1 text-[12.5px] text-[var(--color-fg-3)]">{r.detail}</p>
                  </td>
                  <td className="px-5 py-5 align-top">
                    <Bar value={r.ios} />
                  </td>
                  <td className="px-5 py-5 align-top">
                    <Bar value={r.android} />
                  </td>
                  <td className="px-5 py-5 align-top">
                    <Bar value={r.cross} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-[12.5px] text-[var(--color-fg-5)]">
          Scores are engagement defaults. The discovery phase produces a project-specific matrix scored against
          the actual brief.
        </p>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   3 · AI solutions — Use-case taxonomy
   ───────────────────────────────────────────────────────────── */

const aiTaxonomy: { family: string; intent: string; examples: string[] }[] = [
  {
    family: 'Generate',
    intent: 'Produce text, summaries, drafts, or structured output',
    examples: [
      'Sales-call summary written into the CRM',
      'Drafted reply for tier-one support',
      'Long-form report from structured data',
    ],
  },
  {
    family: 'Classify',
    intent: 'Route, label, or score an incoming item',
    examples: [
      'Inbound ticket routing across teams',
      'Lead scoring against a fit model',
      'Compliance flagging on document upload',
    ],
  },
  {
    family: 'Extract',
    intent: 'Pull structured fields out of unstructured input',
    examples: [
      'Invoice line items into the ledger',
      'Contract clauses into a redlining tool',
      'Customer intent from a call transcript',
    ],
  },
  {
    family: 'Predict',
    intent: 'Forecast a future value or state from history',
    examples: [
      'Churn risk against a customer cohort',
      'Demand forecast at SKU level',
      'Time-to-close estimate on a deal',
    ],
  },
  {
    family: 'Recommend',
    intent: 'Surface the next-best item, action, or response',
    examples: [
      'Next product on a marketplace surface',
      'Suggested reply inside a support inbox',
      'Cross-sell prompts inside a SaaS dashboard',
    ],
  },
];

function AiUseCaseTaxonomy() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Use-case taxonomy</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
              Five families. Every applied-AI engagement maps to one of them.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              The taxonomy fixes the scope. The discovery phase identifies the family and writes the rubric;
              the engineering phase ships against the rubric.
            </p>
          </div>
        </div>

        <ol className="space-y-3 md:space-y-4">
          {aiTaxonomy.map((t, i) => (
            <Reveal as="li" key={t.family} delay={i * 60}>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-8 bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-6 md:p-7">
                <div className="lg:col-span-3 flex items-baseline gap-3">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                    F{String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-[24px] md:text-[28px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                    {t.family}
                  </h3>
                </div>
                <p className="lg:col-span-3 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                  {t.intent}
                </p>
                <ul className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                  {t.examples.map((ex) => (
                    <li
                      key={ex}
                      className="text-[12.5px] leading-[1.5] bg-[var(--color-canvas)] border border-[var(--color-line)] rounded-[6px] px-3 py-2 text-[var(--color-fg)]"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   4 · Automation — Before / after process map
   ───────────────────────────────────────────────────────────── */

const beforeSteps = [
  { label: 'Inbox triage',     icon: Inbox,           note: 'Manual sort by an operator' },
  { label: 'Spreadsheet copy', icon: FileSpreadsheet, note: 'Paste between two tools' },
  { label: 'Approval ping',    icon: Send,            note: 'Chase manager on chat' },
  { label: 'CRM update',       icon: FileSpreadsheet, note: 'Re-key the same record' },
  { label: 'Outbound reply',   icon: Send,            note: 'Draft and send by hand' },
];

const afterSteps = [
  { label: 'Trigger',  icon: Inbox,        note: 'Webhook on inbound event' },
  { label: 'Automate', icon: Bot,          note: 'Idempotent step, replay-safe' },
  { label: 'Confirm',  icon: CheckCircle2, note: 'Operator review on exception only' },
];

function AutomationProcessMap() {
  return (
    <section className="bg-[var(--color-bg)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Before / after</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
              Five manual hops collapsed into one supervised path.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              The map is captured in the workshop and re-run at quarterly review. The operator sees the same
              dashboard before and after; the operating week looks different.
            </p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {/* Before row */}
          <Reveal>
            <div className="rounded-[12px] border border-[var(--color-line)] bg-[var(--color-canvas)] p-6 md:p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-3)]">
                  <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-fg-4)]" />
                  Before · manual
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                  ~ 90 min / day
                </span>
              </div>
              <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {beforeSteps.map((s, i) => (
                  <li
                    key={s.label}
                    className="relative flex flex-col gap-2 rounded-[8px] border border-dashed border-[var(--color-line-2)] bg-[var(--color-bg)] p-3.5"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-fg-3)] ring-1 ring-[var(--color-line)]">
                      <s.icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <p className="font-display text-[13.5px] font-semibold text-[var(--color-fg)]">
                      {s.label}
                    </p>
                    <p className="text-[11.5px] leading-[1.4] text-[var(--color-fg-3)]">{s.note}</p>
                    {i < beforeSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden lg:flex absolute top-1/2 -right-3 z-10 h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-canvas)] ring-1 ring-[var(--color-line)]"
                      >
                        <ArrowRight className="h-2.5 w-2.5 text-[var(--color-fg-4)]" strokeWidth={2.25} />
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Pivot rule */}
          <div className="flex items-center gap-3">
            <span className="block h-px flex-1 bg-[var(--color-line-2)]" aria-hidden="true" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
              Map · specify · build
            </span>
            <span className="block h-px flex-1 bg-[var(--color-line-2)]" aria-hidden="true" />
          </div>

          {/* After row */}
          <Reveal delay={120}>
            <div className="rounded-[12px] border border-[var(--color-brand-700)] bg-[var(--color-brand-50)] p-6 md:p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                  <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-brand-700)]" />
                  After · automated
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-brand-700)]">
                  ~ 6 min / day
                </span>
              </div>
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {afterSteps.map((s, i) => (
                  <li
                    key={s.label}
                    className="relative flex flex-col gap-2 rounded-[8px] border border-[var(--color-brand-700)]/30 bg-[var(--color-bg)] p-4"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-[6px] bg-[var(--color-brand-700)] text-white">
                      <s.icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <p className="font-display text-[15px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                      {s.label}
                    </p>
                    <p className="text-[12px] leading-[1.5] text-[var(--color-fg-3)]">{s.note}</p>
                    {i < afterSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden md:flex absolute top-1/2 -right-3 z-10 h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-brand-50)] ring-1 ring-[var(--color-brand-700)]/40"
                      >
                        <ArrowRight className="h-3 w-3 text-[var(--color-brand-700)]" strokeWidth={2.25} />
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   5 · Cloud — VPC zone diagram
   ───────────────────────────────────────────────────────────── */

function CloudZoneDiagram() {
  return (
    <section className="bg-[var(--color-fg)] text-white section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker kicker-on-dark">Reference VPC</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-white text-balance">
              Three subnets, two boundaries. The shape every audit asks to see.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-white/65">
              The reference architecture is checked into Terraform. Every account stamped from it inherits the
              same network shape, IAM boundaries, and observability hooks.
            </p>
          </div>
        </div>

        <Reveal>
          <div className="rounded-[12px] border border-white/12 bg-white/[0.03] p-6 md:p-10">
            {/* Outer VPC */}
            <div className="rounded-[10px] border border-dashed border-white/20 p-4 md:p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)]">
                  <Cloud className="h-3.5 w-3.5" strokeWidth={2} />
                  VPC · 10.0.0.0/16
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                  Region · ap-south-1
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
                {/* Public subnet */}
                <Subnet
                  tone="public"
                  label="Public subnet"
                  cidr="10.0.1.0/24"
                  items={[
                    { name: 'Application LB', detail: 'TLS termination · WAF' },
                    { name: 'NAT gateway',    detail: 'Egress for private subnet' },
                  ]}
                  sg="0.0.0.0/0 → 443"
                />
                {/* Private subnet */}
                <Subnet
                  tone="private"
                  label="Private subnet"
                  cidr="10.0.10.0/24"
                  items={[
                    { name: 'Application',  detail: 'ECS / EKS · autoscaled' },
                    { name: 'Worker pool',  detail: 'Async jobs · queues' },
                    { name: 'Internal API', detail: 'Service-to-service' },
                  ]}
                  sg="LB → 8080"
                />
                {/* Data subnet */}
                <Subnet
                  tone="data"
                  label="Data subnet"
                  cidr="10.0.20.0/24"
                  items={[
                    { name: 'PostgreSQL', detail: 'Primary + replica' },
                    { name: 'Redis',      detail: 'Cache · sessions' },
                    { name: 'Object store', detail: 'Encrypted at rest' },
                  ]}
                  sg="Private → 5432"
                />
              </div>
            </div>

            {/* Cross-cutting bar */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
              <CrossCut icon={Lock}   title="IAM"           value="Least-privilege · scoped roles" />
              <CrossCut icon={Shield} title="Security"      value="GuardDuty · CloudTrail · KMS" />
              <CrossCut icon={BarChart3} title="Observability" value="Metrics · logs · traces" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Subnet({
  tone,
  label,
  cidr,
  items,
  sg,
}: {
  tone: 'public' | 'private' | 'data';
  label: string;
  cidr: string;
  items: { name: string; detail: string }[];
  sg: string;
}) {
  const toneStyles = {
    public:  'border-[var(--color-brand-300)]/40 bg-[var(--color-brand-300)]/[0.06]',
    private: 'border-[var(--color-brand-400)]/40 bg-[var(--color-brand-400)]/[0.06]',
    data:    'border-[var(--color-brand-200)]/30 bg-[var(--color-brand-200)]/[0.04]',
  }[tone];
  const labelTone = {
    public:  'text-[var(--color-brand-300)]',
    private: 'text-[var(--color-brand-300)]',
    data:    'text-[var(--color-brand-200)]',
  }[tone];

  return (
    <div className={cn('rounded-[10px] border p-4 md:p-5', toneStyles)}>
      <div className="flex items-baseline justify-between mb-4">
        <p className={cn('font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold', labelTone)}>
          {label}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">{cidr}</p>
      </div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li
            key={it.name}
            className="rounded-[6px] border border-white/10 bg-[var(--color-fg)] px-3 py-2.5"
          >
            <p className="font-display text-[13.5px] font-semibold tracking-[-0.012em] text-white">
              {it.name}
            </p>
            <p className="mt-0.5 text-[11.5px] leading-[1.4] text-white/60">{it.detail}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
        <Shield className="h-3 w-3" strokeWidth={2} />
        SG · {sg}
      </div>
    </div>
  );
}

function CrossCut({ icon: Icon, title, value }: { icon: LucideIcon; title: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[8px] border border-white/12 bg-white/[0.03] px-4 py-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-[var(--color-brand-700)] text-white">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--color-brand-300)]">
          {title}
        </p>
        <p className="text-[13px] font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6 · Digital marketing — Channel × goal matrix
   ───────────────────────────────────────────────────────────── */

type Intensity = 0 | 1 | 2 | 3;
type ChannelRow = {
  channel: string;
  detail: string;
  awareness: Intensity;
  acquisition: Intensity;
  retention: Intensity;
};

const channelRows: ChannelRow[] = [
  { channel: 'Search',  detail: 'SEO · paid search', awareness: 2, acquisition: 3, retention: 1 },
  { channel: 'Social',  detail: 'Organic · paid',    awareness: 3, acquisition: 2, retention: 1 },
  { channel: 'Email',   detail: 'Lifecycle · CRM',   awareness: 0, acquisition: 1, retention: 3 },
  { channel: 'Content', detail: 'Long-form · video', awareness: 3, acquisition: 2, retention: 2 },
  { channel: 'Display', detail: 'Programmatic',      awareness: 2, acquisition: 1, retention: 1 },
];

function Dot({ value }: { value: Intensity }) {
  if (value === 0) {
    return (
      <span aria-label="Not applicable" className="inline-flex">
        <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-line-2)]" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Intensity ${value} of 3`}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          aria-hidden="true"
          className={cn(
            'block h-2.5 w-2.5 rounded-full',
            n <= value ? 'bg-[var(--color-brand-700)]' : 'bg-[var(--color-line-2)]',
          )}
        />
      ))}
    </span>
  );
}

function ChannelMixMatrix() {
  return (
    <section className="bg-[var(--color-canvas)] section-y">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Channel mix</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
              Five channels, three goals. Spend is allocated against the matrix.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              Engagement-specific intensities are scored at the plan phase. Quarterly review reallocates spend
              against the same matrix as performance data accumulates.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bg)]">
          <table className="w-full min-w-[680px] border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-line)] bg-[var(--color-canvas)]">
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Channel
                </th>
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Awareness
                </th>
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Acquisition
                </th>
                <th className="px-5 py-4 text-left font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
                  Retention
                </th>
              </tr>
            </thead>
            <tbody>
              {channelRows.map((r) => (
                <tr key={r.channel} className="border-t border-[var(--color-line)] row-hover">
                  <td className="px-5 py-5 align-top">
                    <p className="font-display text-[16px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                      {r.channel}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-[var(--color-fg-3)]">{r.detail}</p>
                  </td>
                  <td className="px-5 py-5 align-middle">
                    <Dot value={r.awareness} />
                  </td>
                  <td className="px-5 py-5 align-middle">
                    <Dot value={r.acquisition} />
                  </td>
                  <td className="px-5 py-5 align-middle">
                    <Dot value={r.retention} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Legend value={3} label="Primary" />
          <Legend value={2} label="Supporting" />
          <Legend value={1} label="Tactical" />
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-[var(--color-line-2)]" />
            Not run
          </span>
        </div>
      </Container>
    </section>
  );
}

function Legend({ value, label }: { value: Intensity; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-3)]">
      <Dot value={value} />
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   7 · Consulting — Engagement model menu
   ───────────────────────────────────────────────────────────── */

type Engagement = {
  shape: string;
  name: string;
  duration: string;
  output: string;
  body: string;
  icon: LucideIcon;
};

const engagements: Engagement[] = [
  {
    shape: 'Sprint',
    name: 'Discovery sprint',
    duration: '2 weeks',
    output: 'Written specification + budget envelope',
    body: 'A scoping sprint that ends with a written specification — outcome, scope, stack, and a budget envelope agreed before commercial commitment.',
    icon: Clock,
  },
  {
    shape: 'Review',
    name: 'Architecture review',
    duration: '3 to 4 weeks',
    output: 'Memo + Architecture Decision Records',
    body: 'Code, infrastructure, and architecture review against a named decision. Output is a memo plus ADRs that travel to a board or an investor.',
    icon: Layers,
  },
  {
    shape: 'Retainer',
    name: 'CTO advisory',
    duration: '6 to 12 months',
    output: 'Fortnightly working sessions + memo trail',
    body: 'Fractional CTO time on a retainer — hiring panels, architecture calls, and vendor reviews — alongside a written memo trail the team can refer back to.',
    icon: Users,
  },
  {
    shape: 'Build',
    name: 'Build-and-handover',
    duration: '8 to 24 weeks',
    output: 'Production system + operating runbook',
    body: 'Time-boxed build of a named capability with a documented handover to the client engineering team. Optional managed window covers the first ninety days post handover.',
    icon: ArrowRight,
  },
];

function ConsultingEngagementMenu() {
  return (
    <section className="bg-[var(--color-bg)] section-y border-y border-[var(--color-line)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="kicker">Engagement models</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
              Four shapes. Pick by the decision you are making.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
              Every engagement carries a written deliverable — a specification, a memo, a decision record, or
              a production system — not a slide deck and a verbal recommendation.
            </p>
          </div>
        </div>

        <ul className="border-t border-[var(--color-fg)]">
          {engagements.map((e, i) => (
            <Reveal as="li" key={e.name} delay={i * 60}>
              <article className="grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-3 py-7 md:py-9 border-b border-[var(--color-line)] row-hover">
                <span className="col-span-12 md:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                  E{String(i + 1).padStart(2, '0')}
                </span>

                <div className="col-span-12 md:col-span-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-canvas)] border border-[var(--color-line)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-fg-3)]">
                    <e.icon className="h-3 w-3" strokeWidth={2} />
                    {e.shape}
                  </span>
                  <h3 className="mt-3 font-display text-[20px] md:text-[22px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                    {e.name}
                  </h3>
                </div>

                <div className="col-span-6 md:col-span-2">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                    Duration
                  </p>
                  <p className="mt-1 text-[13.5px] font-semibold text-[var(--color-fg)]">{e.duration}</p>
                </div>

                <div className="col-span-6 md:col-span-2">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                    Output
                  </p>
                  <p className="mt-1 text-[13px] text-[var(--color-fg-3)]">{e.output}</p>
                </div>

                <p className="col-span-12 md:col-span-3 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                  {e.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
