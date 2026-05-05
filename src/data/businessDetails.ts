/**
 * Business detail data — extends each business service with rich detail used
 * by the per-capability detail page. Voice: corporate direct, ROI-led,
 * methodology-led. No invented client names — only role-shaped placeholders.
 */

export type BusinessDetail = {
  slug: string;
  body: string;
  idealClients: string[];
  techStack: string[];
  phases: { title: string; body: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export const businessDetails: Record<string, BusinessDetail> = {
  'website-development': {
    slug: 'website-development',
    body:
      'Marketing sites, product surfaces, and customer-facing applications built on a modern, mainstream stack. Engagements run against a written specification with a fixed scope, a named technical owner, and an observability layer from the first deployment.',
    idealClients: [
      'Mid-market e-commerce relaunching against a measurable conversion target',
      'B2B SaaS at series A scaling a marketing surface and self-serve flow',
      'Regulated businesses (fintech, health) requiring audited build practice',
      'Funded startups consolidating off a no-code stack onto owned infrastructure',
    ],
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Node',
      'PostgreSQL',
      'Vercel',
      'Cloudflare',
    ],
    phases: [
      {
        title: 'Discover',
        body: 'A scoping engagement that surfaces the business outcome, the conversion or operational metric, and the constraints around stack, brand, and timeline.',
      },
      {
        title: 'Define',
        body: 'A written technical specification — pages, content model, integrations, performance budget, accessibility target — agreed before commercial commitment.',
      },
      {
        title: 'Design',
        body: 'High-fidelity design against the spec, reviewed against the performance and accessibility budgets, with content templates handed to your editorial team.',
      },
      {
        title: 'Build',
        body: 'Two-week delivery cadence, code review on every change, a working preview environment per pull request, and Lighthouse + axe on every build.',
      },
      {
        title: 'Ship',
        body: 'Production cutover with DNS, security headers, schema, sitemaps, and analytics wired up. Post-launch observation window for 30 days.',
      },
      {
        title: 'Run',
        body: 'Optional managed window covering dependency upgrades, incident response, and a quarterly performance and SEO review.',
      },
    ],
    deliverables: [
      'Production website on owned infrastructure, with documented build and deploy pipeline',
      'Component library and content model documented for the editorial team',
      'Lighthouse, accessibility, and SEO baseline reports at launch',
      'Schema, sitemaps, and analytics instrumentation against an agreed event taxonomy',
      'Runbook covering incident response, key contacts, and recovery procedures',
    ],
    faqs: [
      {
        q: 'Do you work with our existing brand and design team?',
        a: 'Yes. The engineering scope works against design output your team owns. Where design is part of scope, it is run as a parallel track with weekly review milestones.',
      },
      {
        q: 'How is performance held to a target?',
        a: 'A performance budget is set in the specification — Lighthouse, INP, and bundle size — and enforced in CI on every pull request. Regression blocks merge.',
      },
      {
        q: 'What does the post-launch managed window cover?',
        a: 'Dependency upgrades, security patches, incident response, and a quarterly review against the original performance and SEO targets. Scope is fixed; pricing is on retainer.',
      },
      {
        q: 'Do you migrate existing content?',
        a: 'Migration is scoped per engagement. Where the volume is significant, a content-modelling phase is added before the build phase begins.',
      },
      {
        q: 'Where does hosting run?',
        a: 'Hosting is owned by the client on a first-class platform — Vercel, Cloudflare, or AWS — with a documented operational handover at the close of the engagement.',
      },
    ],
  },

  'mobile-app-development': {
    slug: 'mobile-app-development',
    body:
      'iOS, Android, and cross-platform mobile applications delivered from technical specification through to public store release. Engagements include the release pipeline, observability, and the operational rhythm a shipped product needs to keep running.',
    idealClients: [
      'Consumer marketplaces with both rider and customer applications',
      'B2B SaaS extending an existing web product to a field workforce',
      'Mid-market retail rolling out a loyalty or self-service application',
      'Logistics and operations teams replacing paper or WhatsApp workflows',
    ],
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Swift',
      'Kotlin',
      'Firebase',
      'Sentry',
    ],
    phases: [
      {
        title: 'Discover',
        body: 'Native versus cross-platform decision, store and compliance scope, and a written user journey for each role the application supports.',
      },
      {
        title: 'Specify',
        body: 'Technical specification covering screens, services, offline behaviour, push, store metadata, and a release pipeline before code is written.',
      },
      {
        title: 'Build',
        body: 'Two-week sprints with internal builds shared on every milestone, beta cohort testing through TestFlight or Play Console, and crash reporting wired in.',
      },
      {
        title: 'Release',
        body: 'Submission to the App Store and Play Store, signing and provisioning, store listing copy, and a phased rollout with a monitoring window.',
      },
      {
        title: 'Run',
        body: 'Monthly release cadence, dependency and SDK upgrades, and a documented escalation path for production incidents.',
      },
    ],
    deliverables: [
      'Production builds on the App Store and Google Play under client-owned developer accounts',
      'CI pipeline that signs, builds, and submits to internal and external test cohorts',
      'Crash reporting and analytics dashboards against an agreed event taxonomy',
      'Store listing assets, screenshots, and copy aligned to the brand system',
      'Operational runbook for releases, hotfixes, and store review escalations',
    ],
    faqs: [
      {
        q: 'When do you recommend native over cross-platform?',
        a: 'Where the application leans heavily on platform-specific hardware, deep system integrations, or strict offline requirements, a native build is recommended. Otherwise, a cross-platform stack is the default.',
      },
      {
        q: 'Do you publish under our developer accounts?',
        a: 'Yes. The client owns the App Store and Play Console accounts. Provisioning, signing certificates, and review responses sit with the client at all times.',
      },
      {
        q: 'How are app store rejections handled?',
        a: 'A rejection response is part of scope until the first successful release. After that, store correspondence is handled under the operate retainer.',
      },
      {
        q: 'What is a typical timeline to first release?',
        a: 'A first store release is typically twelve to sixteen weeks from the close of the specification phase, depending on scope and store review cycles.',
      },
    ],
  },

  'ai-solutions': {
    slug: 'ai-solutions',
    body:
      'Applied AI engagements that integrate foundation models inside an existing product or operations workflow. Every build ships with an evaluation rubric, a cost ceiling, and a runtime observability layer — not just a prompt and a deployment.',
    idealClients: [
      'B2B SaaS embedding generative features inside an existing surface',
      'Operations-heavy businesses with high-volume document or ticket handling',
      'Customer-support functions automating tier-one and tier-two routing',
      'Internal teams running classification or extraction at scale',
    ],
    techStack: [
      'OpenAI',
      'Anthropic',
      'LangChain',
      'Python',
      'TypeScript',
      'Vector DBs',
      'Postgres',
    ],
    phases: [
      {
        title: 'Discover',
        body: 'Use case framing, a written success rubric with measurable outputs, and a cost-per-call ceiling agreed before any model selection.',
      },
      {
        title: 'Prototype',
        body: 'A small, gated prototype against a sample of real production data, evaluated against the rubric. Output is a go-or-no-go memo, not a demo.',
      },
      {
        title: 'Build',
        body: 'Production engineering — retrieval, evaluation pipeline, fallbacks, rate limits, and human-in-the-loop where the rubric requires it.',
      },
      {
        title: 'Evaluate',
        body: 'Continuous evaluation in CI on a held-out set, with regression gates on quality, latency, and cost before any prompt or model change ships.',
      },
      {
        title: 'Operate',
        body: 'Runtime observability — token spend per route, evaluation drift, and human-review queues — with a monthly report against the rubric.',
      },
    ],
    deliverables: [
      'Production AI feature integrated into the client surface, behind a feature flag',
      'Evaluation harness and a curated golden set, run on every change',
      'Cost dashboard with per-route, per-model, and per-customer attribution',
      'Documented prompt catalogue and a versioned change log',
      'Runbook covering incident response, rollback, and model deprecation',
    ],
    faqs: [
      {
        q: 'Which model providers do you work with?',
        a: 'OpenAI, Anthropic, and open-weight models on a managed endpoint. Provider selection follows the rubric — quality, latency, cost, and compliance — agreed during discovery.',
      },
      {
        q: 'How is data privacy handled?',
        a: 'A data-handling memo is written at the start of every engagement covering retention, training opt-outs, and regional residency. Production calls run with logging redaction by default.',
      },
      {
        q: 'Do you fine-tune models?',
        a: 'Fine-tuning is scoped only when retrieval and prompt engineering measurably underperform the rubric. The default is RAG plus a curated evaluation set.',
      },
      {
        q: 'How do you control runaway cost?',
        a: 'Per-route token budgets, rate limits, and a monthly ceiling are wired up at build time. Spend is reported daily and alerts trip before the ceiling is reached.',
      },
    ],
  },

  'automation-systems': {
    slug: 'automation-systems',
    body:
      'Internal-tool builds and process-automation systems that remove manual handling between systems your business already runs. Scope is set against named operational steps that disappear from a person\'s working week.',
    idealClients: [
      'Operations teams stitching CRM, billing, and support manually each week',
      'Finance functions consolidating spreadsheets across business units',
      'Mid-market businesses replacing paid SaaS with internal tooling',
      'Sales operations teams automating handover and territory routing',
    ],
    techStack: [
      'TypeScript',
      'Node',
      'Python',
      'Postgres',
      'Temporal',
      'n8n',
      'Retool',
    ],
    phases: [
      {
        title: 'Map',
        body: 'A workshop that maps the existing process step by step — owners, systems, manual handoffs, and the time each step costs in the operating week.',
      },
      {
        title: 'Specify',
        body: 'A target-state process map with the automated steps named, the systems of record fixed, and the audit trail and rollback paths agreed.',
      },
      {
        title: 'Build',
        body: 'Engineering build with idempotent steps, replayable runs, alerting on failure, and a dashboard that names the operator who owns each route.',
      },
      {
        title: 'Adopt',
        body: 'Roll-out to operators with documentation, training sessions, and a parallel-run window where the manual process continues alongside.',
      },
      {
        title: 'Operate',
        body: 'Operate window covering reliability, cost monitoring, and quarterly audits of where the process drifts from the original specification.',
      },
    ],
    deliverables: [
      'Production automation deployed against the named operational steps',
      'Operator dashboard showing run status, failures, and named ownership per route',
      'Audit log of every run with a replay path for reconciliation',
      'Process documentation handed to the operations owner',
      'Quarterly time-saved report against a baseline measured at the start',
    ],
    faqs: [
      {
        q: 'Do you build on top of existing tools or replace them?',
        a: 'Where the existing tool is the system of record, we build automation around it. Where the tool is a workaround for missing capability, replacement is in scope.',
      },
      {
        q: 'How do you handle failed runs?',
        a: 'Every step is idempotent and replayable. Failures alert the named operator, the audit log preserves the state, and a manual replay path is documented.',
      },
      {
        q: 'What does adoption look like for operators?',
        a: 'A parallel-run window where the manual process continues alongside the automation, documented training, and a named contact for the first thirty days post launch.',
      },
      {
        q: 'How is success measured?',
        a: 'A baseline of operator hours and error rate is captured during the map phase. The quarterly report measures the same dimensions against the baseline.',
      },
    ],
  },

  'cloud-infrastructure': {
    slug: 'cloud-infrastructure',
    body:
      'Cloud foundation work and migrations onto AWS, GCP, or Azure — networking, identity, deployment pipelines, and observability — set up against a written reference architecture and a documented operational handover.',
    idealClients: [
      'Mid-market businesses migrating off a single-server hosting account',
      'B2B SaaS preparing for a SOC 2 or ISO 27001 review window',
      'Funded startups consolidating from multiple personal cloud accounts',
      'Operations teams introducing infrastructure-as-code for the first time',
    ],
    techStack: [
      'AWS',
      'GCP',
      'Azure',
      'Terraform',
      'Kubernetes',
      'Datadog',
      'GitHub Actions',
    ],
    phases: [
      {
        title: 'Assess',
        body: 'Inventory of existing workloads, dependencies, and compliance posture. Output is a written assessment with risk and effort scored per workload.',
      },
      {
        title: 'Design',
        body: 'A reference architecture covering VPC, IAM, secrets, deployment pipeline, and observability — reviewed against the cost ceiling and the compliance scope.',
      },
      {
        title: 'Build',
        body: 'Foundation built in code — Terraform modules, deployment pipelines, and a worked example workload deployed against the reference.',
      },
      {
        title: 'Migrate',
        body: 'Workloads cut over in waves with a rollback plan per wave, and a parallel-run window to validate parity before traffic moves.',
      },
      {
        title: 'Handover',
        body: 'Documentation, runbooks, and a training window for the operating team. Optional managed window covering the first ninety days.',
      },
    ],
    deliverables: [
      'Reference architecture document covering networking, identity, and deployment',
      'Infrastructure-as-code repository with documented modules and review history',
      'Cost monitoring and alerting against a written ceiling',
      'Observability stack — metrics, logs, traces — with named owners per service',
      'Runbooks for common operational events: deploy, rollback, incident, audit',
    ],
    faqs: [
      {
        q: 'Which cloud provider do you recommend?',
        a: 'Provider selection follows the assessment — existing skills on the team, regulatory scope, cost profile, and managed-service fit. The default for new builds is AWS or GCP; Azure is added where the existing estate already runs there.',
      },
      {
        q: 'Do you keep our existing team in the loop?',
        a: 'Yes. Build phase runs as a paired engagement with the client engineering team. Handover is structured around the team operating the platform without the engagement continuing.',
      },
      {
        q: 'How is migration risk managed?',
        a: 'Workloads are cut over in waves with a parallel-run window and a documented rollback plan per wave. Traffic moves only after parity is validated.',
      },
      {
        q: 'Do you support compliance reviews?',
        a: 'Yes. Where the engagement runs ahead of a SOC 2 or ISO 27001 review, the reference architecture and runbooks are aligned to the control catalogue under review.',
      },
    ],
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    body:
      'Search-optimised content, performance campaigns, and marketing infrastructure delivered against an agreed funnel. Engagements report against acquisition and retention metrics, not vanity dashboards.',
    idealClients: [
      'B2B SaaS acquiring on long-tail search and content',
      'Mid-market e-commerce running paid acquisition against a target ROAS',
      'Service businesses building a category-search position from scratch',
      'Funded startups setting up the marketing measurement stack for the first time',
    ],
    techStack: [
      'GA4',
      'Search Console',
      'PostHog',
      'Segment',
      'Brevo',
      'Ahrefs',
      'Looker Studio',
    ],
    phases: [
      {
        title: 'Audit',
        body: 'A baseline audit of the existing funnel — acquisition channels, conversion path, and the measurement instrumentation underneath.',
      },
      {
        title: 'Plan',
        body: 'A written marketing plan against the funnel — channel mix, content calendar, paid spend allocation, and the KPI per channel.',
      },
      {
        title: 'Instrument',
        body: 'Analytics, attribution, and experimentation infrastructure wired up against an agreed event taxonomy before any campaign goes live.',
      },
      {
        title: 'Run',
        body: 'Campaign and content delivery on a fortnightly cadence, with a written review against the KPIs at every cycle.',
      },
      {
        title: 'Report',
        body: 'A monthly report against the funnel, with a quarterly strategic review of channel performance and budget reallocation.',
      },
    ],
    deliverables: [
      'Funnel measurement framework with documented event taxonomy',
      'Quarterly content calendar with topical clusters and assigned owners',
      'Paid acquisition account structure aligned to the funnel and the KPIs',
      'Looker Studio dashboard covering acquisition, conversion, and retention',
      'Monthly performance memo and a quarterly strategy review',
    ],
    faqs: [
      {
        q: 'Do you write the content yourselves?',
        a: 'Where content is part of scope, our team writes against an editorial brief reviewed by the client. Subject-matter interviews are scheduled with named team members on the client side.',
      },
      {
        q: 'How is paid spend reported?',
        a: 'Spend, attributed conversions, and contribution to the funnel are reported weekly inside Looker Studio. The monthly memo names the campaigns scaled, paused, and tested.',
      },
      {
        q: 'How do you handle attribution?',
        a: 'A first-party event taxonomy is wired in during the instrument phase. Attribution defaults to last-non-direct with a multi-touch report run quarterly against the same data.',
      },
      {
        q: 'Do you run brand campaigns?',
        a: 'Brand work runs as a parallel track on request. The default scope sits inside performance and search, where outcomes are measurable inside the funnel.',
      },
    ],
  },

  'technology-consulting': {
    slug: 'technology-consulting',
    body:
      'Time-boxed consulting engagements covering stack reviews, architecture decisions, and the hire-build-buy framing for new product bets. Output is always a written memo that travels — not a slide deck that gets lost in chat.',
    idealClients: [
      'Founders making the second engineering hire and locking architecture',
      'B2B SaaS deciding hire-build-buy on a new product surface',
      'Boards reviewing technical debt and platform risk before a fundraise',
      'Operations leaders facing a vendor-versus-build choice on a critical workflow',
    ],
    techStack: [
      'Stack-agnostic',
      'Architecture-Decision-Records',
      'C4 Model',
      'Threat-modelling',
      'Cost benchmarks',
    ],
    phases: [
      {
        title: 'Frame',
        body: 'A scoping conversation that names the decision being made, the constraints around it, and the date by which a written answer is needed.',
      },
      {
        title: 'Investigate',
        body: 'Code and architecture review, stakeholder interviews, vendor evaluation, and benchmark research against the named decision.',
      },
      {
        title: 'Memo',
        body: 'A written memo covering the recommendation, the alternatives considered, and the cost, risk, and timeline trade-offs of each.',
      },
      {
        title: 'Review',
        body: 'A working session with the client team to walk through the memo, capture objections, and revise to a final document.',
      },
    ],
    deliverables: [
      'A written memo of recommendation with the alternatives and trade-offs',
      'Architecture Decision Records covering each major call inside the memo',
      'A cost and timeline benchmark for each option',
      'A risk register with named owners for each ongoing risk',
      'A follow-up review session ninety days after delivery',
    ],
    faqs: [
      {
        q: 'How long is a typical engagement?',
        a: 'Engagements run between two and six weeks against a written deliverable. Longer advisory windows are available on a fractional retainer.',
      },
      {
        q: 'Do you implement what you recommend?',
        a: 'Implementation can be scoped as a follow-on engagement under the relevant capability — website, mobile, AI, automation, or cloud. Consulting itself sits separately for independence.',
      },
      {
        q: 'Who reads the memo?',
        a: 'The memo is written for the named decision maker — typically a founder, CTO, or operations leader — and is structured to travel to a board or an investor without further rewriting.',
      },
      {
        q: 'Do you sign an NDA?',
        a: 'Yes. A mutual NDA is signed before the framing conversation begins. Code and stakeholder access is scoped to the minimum needed for the memo.',
      },
    ],
  },
};

export function findBusinessDetail(slug: string): BusinessDetail | undefined {
  return businessDetails[slug];
}
