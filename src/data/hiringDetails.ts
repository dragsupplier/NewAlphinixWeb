/**
 * Hiring service detail data — extends the base hiringServices entries with
 * detail-page content: roleTypes, time-to-fill SLAs, phases, deliverables, FAQs.
 * Voice: efficient, operational, screening-report led.
 */

export type HiringDetail = {
  slug: string;
  body: string;
  roleTypes: string[];
  sla: { metric: string; value: string }[];
  phases: { title: string; body: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export const hiringDetails: Record<string, HiringDetail> = {
  /* ───── Permanent recruitment ─────────────────────────────── */
  'permanent-recruitment': {
    slug: 'permanent-recruitment',
    body:
      'Full-time hires sourced, screened, and routed against a written brief. Each candidate forwarded to your panel carries a screening report covering technical depth, role fit, and salary expectation. Engagements run on a fixed time-to-fill SLA agreed at the start.',
    roleTypes: [
      'Software engineering — frontend, backend, full-stack',
      'Product, design, and engineering management',
      'Data, ML, and analytics engineering',
      'Operations, finance, and people roles',
      'Senior individual contributors and lateral leads',
    ],
    sla: [
      { metric: 'Time to first shortlist',  value: 'XX days' },
      { metric: 'Screen-to-forward ratio',  value: 'XX %' },
      { metric: 'Forward-to-offer ratio',   value: 'XX %' },
      { metric: 'Average time-to-fill',     value: 'XX days' },
      { metric: 'Replacement window',       value: 'XX days' },
    ],
    phases: [
      { title: 'Brief',   body: 'JD review, must-have vs. nice-to-have split, target compensation band confirmed, and time-to-fill window agreed in writing.' },
      { title: 'Source',  body: 'Active sourcing across our pre-screened lateral pool, alumni network, and external channels — calibrated against the brief.' },
      { title: 'Screen',  body: 'A structured technical and fit screen with a written candidate report. We share the report; you call the shortlist.' },
      { title: 'Forward', body: 'Forwarded shortlist with a confidence note per candidate, your interview slots booked, your panel coordinated end to end.' },
      { title: 'Close',   body: 'Offer roll-out coordination, notice-period management, and a 90-day post-join check-in with a written replacement window.' },
    ],
    deliverables: [
      'Written candidate report per screened candidate',
      'Forwarded shortlist with a per-candidate confidence note',
      'Interview scheduling and panel coordination through close',
      'Compensation benchmarking note for the role and the band',
      'A weekly pipeline report against the agreed time-to-fill SLA',
      'A 90-day post-join check-in and a written replacement window',
    ],
    faqs: [
      {
        q: 'How is the time-to-fill SLA agreed?',
        a: 'Time-to-fill is agreed in writing during the Brief phase, calibrated against the role level, location, and current market response rate. The SLA window is recorded on the engagement letter.',
      },
      {
        q: 'Do you handle compensation negotiation?',
        a: 'Yes. We benchmark the role against current market data, share a written band, and run the offer conversation against the agreed band. Final compensation decisions stay with your team.',
      },
      {
        q: 'What happens if a hire does not work out?',
        a: 'Each engagement carries a written replacement window. If the hire exits within the window, we re-open the role under the original engagement and re-run the search at no additional fee.',
      },
      {
        q: 'Can we run only the screening, not the full search?',
        a: 'Yes. Screening-only engagements are supported — we screen your inbound pipeline, issue written reports, and forward a shortlist. Sourcing stays with your team.',
      },
      {
        q: 'How is candidate confidentiality handled?',
        a: 'Candidate details are shared only with the named panel. CVs and screening reports are issued under a written non-disclosure clause that forms part of the engagement letter.',
      },
    ],
  },

  /* ───── Contract staffing ─────────────────────────────────── */
  'contract-staffing': {
    slug: 'contract-staffing',
    body:
      'Project-scoped, time-boxed contract resources sourced against a defined engagement window. Common shapes are 3-month, 6-month, and 12-month contracts with a clean exit and a reference letter at the end. The contract resource sits inside your team and runs on your operating cadence.',
    roleTypes: [
      'Backend, frontend, and mobile engineers on project work',
      'Data engineers and analysts on time-boxed pipelines',
      'Designers on product surfaces with a defined release window',
      'Project and delivery managers on fixed-scope programmes',
      'QA and DevOps resources on infrastructure-led projects',
    ],
    sla: [
      { metric: 'Time to forward first profile', value: 'XX days' },
      { metric: 'Average time-to-onboard',        value: 'XX days' },
      { metric: 'Contract-completion rate',       value: 'XX %' },
      { metric: 'Mid-contract replacement rate',  value: 'XX %' },
      { metric: 'Reference-letter issuance',      value: '100 %' },
    ],
    phases: [
      { title: 'Brief',   body: 'Engagement window, scope of work, must-have skills, and weekly cadence agreed in writing on the engagement letter.' },
      { title: 'Source',  body: 'Sourcing from our active contract bench plus external channels — filtered for availability against the agreed start date.' },
      { title: 'Screen',  body: 'Technical screen calibrated to the project shape, a working-mode fit conversation, and a written candidate report per round.' },
      { title: 'Forward', body: 'Shortlist forwarded with a per-candidate availability and notice-period note. Your interview slots booked end to end.' },
      { title: 'Close',   body: 'Onboarding coordination, weekly status check during the contract, and a clean exit with a reference letter at the end.' },
    ],
    deliverables: [
      'Written engagement letter with scope, window, and rate',
      'Pre-screened candidate shortlist with availability notes',
      'Onboarding coordination through to the agreed start date',
      'Weekly status check-in through the contract window',
      'A clean exit checklist at contract close',
      'A reference letter co-signed by your team and ours',
    ],
    faqs: [
      {
        q: 'What contract lengths do you support?',
        a: 'Standard windows are 3, 6, and 12 months. Other lengths are supported on request — the engagement letter records the agreed window in writing.',
      },
      {
        q: 'Who employs the contract resource?',
        a: 'The contract resource is engaged through us. Payroll, statutory compliance, and contract administration sit with us; day-to-day work direction sits with your team.',
      },
      {
        q: 'Can a contract be extended or converted to permanent?',
        a: 'Yes. Extensions are recorded as an addendum to the original engagement letter. Conversion to permanent is supported with a one-time conversion fee documented up front.',
      },
      {
        q: 'What happens if the contract resource needs to be replaced mid-engagement?',
        a: 'A replacement profile is forwarded within the agreed mid-contract replacement window. The original engagement letter records the window and the conditions.',
      },
      {
        q: 'How is performance reviewed during a contract?',
        a: 'Each contract runs on a weekly status check-in plus a structured monthly review with both teams. Reviews are written, shared, and used to course-correct early.',
      },
    ],
  },

  /* ───── Pre-trained intern supply ─────────────────────────── */
  'intern-supply': {
    slug: 'intern-supply',
    body:
      'A bench of pre-trained interns drawn from our cohort programmes — every candidate carries a documented training history, a shipped project, and a written assessment. Hiring teams pull from the bench against a brief and run interviews on a compressed window.',
    roleTypes: [
      'Engineering interns — web, mobile, full-stack',
      'AI, data, and applied-ML interns with a shipped project',
      'Design and product interns with a portfolio review',
      'QA, automation, and DevOps interns on infrastructure briefs',
      'Operations and analytics interns on data-led work',
    ],
    sla: [
      { metric: 'Time to forward bench shortlist', value: 'XX days' },
      { metric: 'Bench-to-interview ratio',         value: 'XX %' },
      { metric: 'Interview-to-offer ratio',         value: 'XX %' },
      { metric: 'Average start-date window',        value: 'XX days' },
      { metric: 'Pre-internship attrition',         value: 'XX %' },
    ],
    phases: [
      { title: 'Brief',   body: 'Role brief captured against bench filters — stack, project shape, working mode, stipend band, and start-date window.' },
      { title: 'Source',  body: 'Bench pull against the brief — every candidate already carries a documented training history and an assessment.' },
      { title: 'Screen',  body: 'A short fit conversation on top of the existing assessment, with a refreshed written report shared before forward.' },
      { title: 'Forward', body: 'Shortlist forwarded with project links, training history, and a per-candidate confidence note from the cohort lead.' },
      { title: 'Close',   body: 'Offer roll-out, onboarding coordination, and a check-in at week four of the internship to confirm engagement health.' },
    ],
    deliverables: [
      'A shortlist drawn from the active bench with training history',
      'A shipped project link per candidate forwarded',
      'A written cohort-lead confidence note per candidate',
      'Offer letter coordination and start-date confirmation',
      'A week-four check-in covering engagement health',
      'A written closure report at the end of the internship',
    ],
    faqs: [
      {
        q: 'Are these interns paid?',
        a: 'Yes. Stipend ranges and structures are agreed during the Brief phase. The engagement letter records the stipend band and the working mode.',
      },
      {
        q: 'Can we hire from the bench for a full-time role?',
        a: 'Yes. Bench candidates often convert to full-time after the internship. The conversion is treated under our permanent-recruitment engagement with a documented conversion fee.',
      },
      {
        q: 'How is the bench kept current?',
        a: 'New cohorts onboard onto the bench every month. Candidates who do not engage on briefs within a defined window are rotated off to keep the bench current.',
      },
      {
        q: 'What does the documented training history include?',
        a: 'A training transcript covering modules, assessments, and shipped projects, plus a written cohort-lead note on working style. Every artefact carries a verifiable URL.',
      },
      {
        q: 'Can we request a custom training shape before the bench is forwarded?',
        a: 'Yes — for high-volume needs, a custom-trained bench cohort is run against your brief. The window for a custom cohort is recorded on the engagement letter.',
      },
    ],
  },

  /* ───── Technical assessments ─────────────────────────────── */
  'technical-assessments': {
    slug: 'technical-assessments',
    body:
      'Custom-built coding screens, take-home projects, and assessment rubrics issued with a written candidate report per round. Assessment design is calibrated against the JD and the role level, with a documented rubric agreed before the first round runs.',
    roleTypes: [
      'Software engineering screens for individual contributors',
      'Senior and staff-level system-design assessments',
      'Data and applied-ML take-home assessments',
      'Frontend and design-engineering live coding rounds',
      'Aptitude and reasoning screens for high-volume drives',
    ],
    sla: [
      { metric: 'Time to deliver assessment design', value: 'XX days' },
      { metric: 'Per-candidate report turnaround',    value: 'XX hrs' },
      { metric: 'Assessment-to-interview ratio',      value: 'XX %' },
      { metric: 'Rubric inter-rater agreement',       value: 'XX %' },
      { metric: 'Re-take request rate',                value: 'XX %' },
    ],
    phases: [
      { title: 'Brief',    body: 'JD review, role level locked, must-have skills mapped against an assessment shape — coding, take-home, system, or live.' },
      { title: 'Design',   body: 'Custom assessment built against the brief, a written rubric drafted, a calibration round with your panel before launch.' },
      { title: 'Run',      body: 'Assessment issued under invigilation or take-home windows. Time, environment, and tooling are documented per attempt.' },
      { title: 'Report',   body: 'Per-candidate written report covering rubric scores, code samples, and a forward / hold / reject recommendation.' },
      { title: 'Close',    body: 'Aggregated batch report covering rubric calibration, drift, and recommendations for the next role-level iteration.' },
    ],
    deliverables: [
      'A custom assessment instrument with a written rubric',
      'A calibration session with your panel before launch',
      'Per-candidate written report with rubric scores and code',
      'A forward / hold / reject recommendation per candidate',
      'A batch-level rubric calibration report',
      'A re-usable assessment template for future drives',
    ],
    faqs: [
      {
        q: 'What kinds of assessments can you build?',
        a: 'Aptitude, coding screens, system-design rounds, take-home projects, and live coding rounds. The assessment shape is selected against the role level during the Brief phase.',
      },
      {
        q: 'Who issues the assessment to candidates?',
        a: 'Either side. Most engagements run with us issuing the assessment under invigilation or take-home windows; a few teams prefer to issue under their own platform with our rubric and report.',
      },
      {
        q: 'How is rubric quality controlled?',
        a: 'Every rubric runs through a calibration round with your panel before launch. Inter-rater agreement is measured on a calibration sample and reported alongside the rubric.',
      },
      {
        q: 'Can existing assessments be reused across drives?',
        a: 'Yes. Rubrics and instruments are versioned and reusable. New role levels or stack shifts trigger a written rubric refresh.',
      },
      {
        q: 'How are take-home assessments protected against AI assistance?',
        a: 'Take-home assessments include a follow-up live walkthrough where the candidate explains the work. The walkthrough is part of the per-candidate report.',
      },
    ],
  },

  /* ───── Recruitment outsourcing (RPO) ─────────────────────── */
  'recruitment-outsourcing': {
    slug: 'recruitment-outsourcing',
    body:
      'End-to-end RPO — embedded recruiter capacity, scheduling, candidate communication, and pipeline reporting on a monthly retainer. The RPO team operates as an extension of your talent function under your employer brand and your interview process.',
    roleTypes: [
      'Embedded recruiter capacity for engineering and product hiring',
      'Sourcing-only RPO for sustained pipeline coverage',
      'Scheduling and coordination capacity for high-volume hiring',
      'Pipeline reporting and analytics across requisitions',
      'Project-RPO for one-off hiring surges and new business units',
    ],
    sla: [
      { metric: 'Embedded recruiter ramp time', value: 'XX days' },
      { metric: 'Open-requisition coverage',     value: 'XX %' },
      { metric: 'Average time-to-fill',          value: 'XX days' },
      { metric: 'Candidate-experience NPS',      value: 'XX' },
      { metric: 'Pipeline-report cadence',       value: 'Weekly' },
    ],
    phases: [
      { title: 'Brief',     body: 'RPO scope captured — requisition coverage, working mode, employer-brand boundaries, tooling, and reporting cadence.' },
      { title: 'Embed',     body: 'Embedded recruiter capacity onboarded into your ATS, your panels, and your interview rubric on an agreed ramp window.' },
      { title: 'Source',    body: 'Active sourcing across requisitions plus screening, scheduling, and candidate communication under your employer brand.' },
      { title: 'Forward',   body: 'Forwarded shortlists, interview coordination, and offer-roll-out support — all running under your interview rubric.' },
      { title: 'Report',    body: 'Weekly pipeline report covering requisition coverage, time-to-fill, and source-of-hire — read alongside your hiring panel.' },
    ],
    deliverables: [
      'Embedded recruiter capacity sized to the requisition load',
      'A weekly pipeline report covering coverage and time-to-fill',
      'A monthly source-of-hire and channel-effectiveness report',
      'Candidate communication run under your employer brand',
      'A documented hiring playbook co-owned with your panel',
      'An exit handover note at the end of the retainer window',
    ],
    faqs: [
      {
        q: 'How is RPO different from agency hiring?',
        a: 'RPO is retainer-based and embedded inside your function. The recruiter sits inside your ATS, runs your interview rubric, and reports against your pipeline. Agency hiring is per-role, fee-on-success.',
      },
      {
        q: 'Whose employer brand do candidates see?',
        a: 'Candidates see your employer brand throughout. The RPO team operates under your domain, your career site, and your interview process. We stay invisible to candidates.',
      },
      {
        q: 'How is RPO priced?',
        a: 'RPO runs on a monthly retainer sized against the requisition load and the working mode. The retainer is agreed in writing during the Brief phase.',
      },
      {
        q: 'What is the minimum engagement length?',
        a: 'Standard RPO retainers run on a 6-month minimum. Project-RPO for one-off surges can run shorter — recorded on the engagement letter.',
      },
      {
        q: 'How is the handover at the end of the retainer managed?',
        a: 'A written handover note covers the active pipeline, the playbook, the source-of-hire data, and any in-flight offers. The handover is part of every retainer close.',
      },
    ],
  },

  /* ───── Bulk hiring drives ────────────────────────────────── */
  'bulk-hiring-drives': {
    slug: 'bulk-hiring-drives',
    body:
      'High-volume hiring drives executed against a fixed time-to-fill — sourcing, screening, and offer roll-out coordinated end to end. Drives are run on-site, hybrid, or virtual, with hour-by-hour operations, written candidate reports, and an aggregated outcome report.',
    roleTypes: [
      'Engineering drives — entry, junior, and lateral, in batches',
      'Operations and BPO drives at high volumes',
      'Sales, support, and customer-success batch drives',
      'Campus drives — pooled or single-college',
      'Tier-2 and tier-3 city drives with on-site logistics',
    ],
    sla: [
      { metric: 'Drive-day candidate throughput', value: 'XX / day' },
      { metric: 'Walk-in to interview ratio',      value: 'XX %' },
      { metric: 'Interview-to-offer ratio',        value: 'XX %' },
      { metric: 'Offer-acceptance ratio',          value: 'XX %' },
      { metric: 'Drive-to-onboard window',         value: 'XX days' },
    ],
    phases: [
      { title: 'Brief',    body: 'Drive size, role mix, location, date, and time-to-fill window agreed in writing on the engagement letter.' },
      { title: 'Source',   body: 'Sourcing across our intern bench, lateral pool, and external channels — calibrated to the drive size and the role mix.' },
      { title: 'Screen',   body: 'Pre-drive online screen filters the walk-in list. Each candidate carries a written pre-drive screening report.' },
      { title: 'Forward',  body: 'Drive-day operations — registration, interview slot allocation, panel coordination, and offer roll-out on the same day.' },
      { title: 'Close',    body: 'Aggregated drive report covering throughput, conversion, source-of-hire, and a written replacement window per offer.' },
    ],
    deliverables: [
      'A pre-drive sourcing plan calibrated to drive size',
      'A pre-drive online screening report per registered candidate',
      'On-site or virtual drive operations with hour-by-hour cadence',
      'Same-day offer roll-out for cleared candidates',
      'An aggregated drive outcome report against the SLA',
      'Onboarding coordination through to the agreed start window',
    ],
    faqs: [
      {
        q: 'What drive sizes can you run?',
        a: 'Drives have run from 50-candidate single-day shapes through to multi-day, multi-city programmes covering thousands of candidates. The size is locked on the engagement letter.',
      },
      {
        q: 'Where can drives be hosted?',
        a: 'On your campus or office, on a college campus, at a third-party venue, or fully virtual. Logistics — venue, travel, and on-site staffing — are handled end to end.',
      },
      {
        q: 'How is the offer-acceptance ratio protected?',
        a: 'A pre-drive expectations conversation covers compensation, working mode, and start window. Same-day offer roll-out is paired with a written 48-hour acceptance window.',
      },
      {
        q: 'Can the drive be run alongside an existing campus team?',
        a: 'Yes. Drives are co-run with college placement cells routinely — the engagement letter records the split of operations between both sides.',
      },
      {
        q: 'How is post-drive attrition handled?',
        a: 'Each offer carries a written replacement window. Replacement candidates are pulled from the same drive cohort wherever possible to compress the re-fill cycle.',
      },
    ],
  },
};

export function findHiringDetail(slug: string): HiringDetail | undefined {
  return hiringDetails[slug];
}
