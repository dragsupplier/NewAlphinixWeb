/**
 * @file collegeDetails.ts
 * @purpose Rich, formal-tone detail content for each of the eight college services.
 * @notes Voice is academic / decision-maker register. No real college names or
 *        verifiable numbers — only ranges and placeholders.
 */

export type CollegeDetail = {
  slug: string;
  body: string;
  audience: string[];
  prerequisites: string[];
  phases: { title: string; body: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export const collegeDetails: Record<string, CollegeDetail> = {
  /* ───── 01 ─ Campus training programmes ────────────────────── */
  'campus-training': {
    slug: 'campus-training',
    body:
      'A multi-week skilling engagement delivered on the institution’s campus, mapped to the placement calendar and the published syllabi for the relevant programmes. Cohorts are designed against a written training plan, with documented attendance, evaluations, and a closing report submitted to the training and placement office.',
    audience: [
      'Engineering colleges running placement preparation in pre-final and final year',
      'Polytechnic institutes preparing diploma students for campus drives',
      'Departments coordinating semester-aligned skilling for a defined cohort',
      'Training and placement officers consolidating multiple skilling vendors under one engagement',
    ],
    prerequisites: [
      'A nominated faculty coordinator from the institution',
      'Cohort list with year, branch, and prior aptitude baseline where available',
      'Classroom or lab access for the agreed weekly contact hours',
      'A written letter of intent confirming the engagement window',
    ],
    phases: [
      {
        title: 'Discovery and scoping',
        body:
          'A scoping conversation with the principal, HOD, and training and placement officer. Outputs include a written scope note, a draft cohort list, and the agreed contact hours per week.',
      },
      {
        title: 'Curriculum mapping',
        body:
          'The training curriculum is mapped against the institution’s syllabi and the upcoming campus drive calendar. The mapping is signed off by the academic owner before delivery begins.',
      },
      {
        title: 'Cohort onboarding',
        body:
          'Students are grouped into cohorts of 8–12 participants per facilitator, with a baseline assessment captured on day one and a documented orientation covering attendance, assessment, and grievance routes.',
      },
      {
        title: 'Delivery and review',
        body:
          'Sessions run for the agreed XX-week window with weekly facilitator reports, mid-engagement review, and end-of-module written assessments. Faculty observers are invited to all sessions.',
      },
      {
        title: 'Closing report',
        body:
          'A closing engagement report covers attendance, score progression, drive readiness, and recommendations for the next cycle. The report is submitted to the training and placement office.',
      },
    ],
    deliverables: [
      'Written training plan signed off by the academic owner',
      'Weekly facilitator reports with attendance and assessment summaries',
      'Mid-engagement and end-of-engagement evaluation papers',
      'Closing engagement report submitted to the training and placement office',
      'Completion certificate per student with a verifiable URL',
    ],
    faqs: [
      {
        q: 'How are cohort sizes determined?',
        a: 'Cohorts are typically capped at 8–12 participants per facilitator to maintain a working review-and-feedback loop. Larger batches are split across parallel facilitators, with all groups working against the same training plan and assessment rubric.',
      },
      {
        q: 'When is the right time in the academic calendar to start?',
        a: 'For final-year students, the engagement is best timed to begin XX weeks before the campus drive window so assessments and cohort readiness reports are ready ahead of recruiter visits. For pre-final year students, an off-cycle window aligned to lab hours is preferred.',
      },
      {
        q: 'Are sessions run on campus or hybrid?',
        a: 'Sessions are delivered on campus by default, with selected modules — typically aptitude practice and pre-recorded reference material — delivered through the institution’s LMS or a programme portal. The split is documented in the scoping note.',
      },
      {
        q: 'How is the engagement governed?',
        a: 'A named owner from our team and a faculty coordinator from the institution co-own the engagement. A written governance note covers escalation routes, attendance thresholds, and the review cadence between the two offices.',
      },
      {
        q: 'Can the engagement be renewed for the next academic year?',
        a: 'Yes. Engagements typically run on multi-year refresh cycles. The closing report includes recommendations for the following year, and the renewal scope is agreed before the next academic calendar is finalised.',
      },
    ],
  },

  /* ───── 02 ─ Placement drives ──────────────────────────────── */
  'placement-drives': {
    slug: 'placement-drives',
    body:
      'A coordinated placement-drive engagement that runs on-campus, off-campus pooled, or virtual drives against an agreed recruiter calendar. The engagement covers eligibility verification, candidate pre-screening, drive-day operations, and a documented post-drive report covering offers, conversions, and recruiter feedback.',
    audience: [
      'Training and placement offices preparing for recruiter visits in the upcoming season',
      'Departments running specialised drives for particular branches or roles',
      'Polytechnic institutes participating in pooled drives with peer institutions',
      'Institutions consolidating drive operations under a single coordination contract',
    ],
    prerequisites: [
      'Eligible-student pool with academic and CGPA records verified',
      'A recruiter brief or job description signed off by the placement office',
      'Drive-day infrastructure — assessment hall, interview rooms, network capacity',
      'A nominated drive coordinator from the institution',
    ],
    phases: [
      {
        title: 'Drive scoping',
        body:
          'A written drive brief is prepared with the placement office covering eligibility, target offers, role description, and the drive window. The brief is signed off before recruiter outreach begins.',
      },
      {
        title: 'Recruiter mapping',
        body:
          'Recruiters are mapped to the brief from our hiring partner network. A draft recruiter calendar is shared with the institution and confirmed against academic schedules.',
      },
      {
        title: 'Pre-screening',
        body:
          'Eligible candidates are pre-screened through an aptitude paper, a coding screen, and a short fit conversation, with written reports per candidate. Shortlisted profiles are circulated to recruiters in advance.',
      },
      {
        title: 'Drive-day operations',
        body:
          'On the day of the drive, the operations team coordinates the assessment, interviews, candidate communication, and offer logistics. A documented run-of-show is shared with the placement office.',
      },
      {
        title: 'Post-drive review',
        body:
          'A post-drive report covers offers extended, conversions, recruiter feedback, and the candidate-experience review. The report informs the next drive in the season.',
      },
    ],
    deliverables: [
      'Drive brief and signed-off recruiter calendar',
      'Pre-screening assessment papers and per-candidate reports',
      'Drive-day run-of-show and operations playbook',
      'Post-drive report with offer-rate, conversion, and feedback summary',
      'Verified offer letters logged for the placement office records',
    ],
    faqs: [
      {
        q: 'What is the typical lead time to set up a drive?',
        a: 'A standard on-campus drive is typically arranged with a XX-week lead time once the brief is signed off. Pooled and bulk drives may take longer where multiple institutions and roles are coordinated under one window.',
      },
      {
        q: 'How are candidates pre-screened?',
        a: 'Pre-screening uses a written aptitude paper, a timed coding screen, and a short fit conversation. Each candidate receives a written report; shortlists are issued to recruiters before the drive day.',
      },
      {
        q: 'Are pooled drives an option for smaller institutions?',
        a: 'Yes. Pooled drives are organised across two or more partner institutions where individual eligible-pool sizes are below the recruiter’s minimum batch threshold. The pooled brief is governed by a written agreement between participants.',
      },
      {
        q: 'How is the drive reported to senior management?',
        a: 'The post-drive report covers offer-rate, conversion-rate, branch-wise distribution, and recruiter feedback. It is structured for the placement office to share with the principal and the trustee body.',
      },
    ],
  },

  /* ───── 03 ─ Pre-placement training ────────────────────────── */
  'pre-placement-training': {
    slug: 'pre-placement-training',
    body:
      'An eight-week intensive that prepares the eligible student pool through aptitude, technical fundamentals, and behavioural rounds. The engagement runs against a documented assessment rubric with weekly progression reports issued to the placement office.',
    audience: [
      'Pre-final and final-year engineering and diploma students',
      'Departments preparing students for upcoming campus drives',
      'Placement offices running annual drive-readiness programmes',
      'Institutions consolidating aptitude, DSA, and HR preparation under a single engagement',
    ],
    prerequisites: [
      'Eligible-student list with branch, year, and CGPA verified',
      'A baseline aptitude assessment to anchor the progression report',
      'Working laptops and stable network for the practice modules',
      'A nominated faculty observer per cohort',
    ],
    phases: [
      {
        title: 'Baseline assessment',
        body:
          'A baseline aptitude paper, a short coding screen, and a written communication assessment are administered in the first week. Results anchor the cohort’s progression report through the engagement.',
      },
      {
        title: 'Aptitude and reasoning',
        body:
          'Two weeks of structured practice across quantitative, logical, and verbal reasoning, with timed mock papers and written reviews issued at the end of each week.',
      },
      {
        title: 'Technical fundamentals',
        body:
          'Three weeks covering data structures, algorithms, operating systems, databases, and networks — the topics screened in technical rounds. Practice runs daily against a written rubric.',
      },
      {
        title: 'Behavioural and HR rounds',
        body:
          'Two weeks covering structured-answer techniques, story-building from authentic student experience, compensation conversations, and panel-interview practice.',
      },
      {
        title: 'Mock-drive week',
        body:
          'A week of paired mock interviews and a final mentor-led panel. Each student receives a written mock-drive report shared with the placement office.',
      },
    ],
    deliverables: [
      'Baseline and end-of-engagement assessment papers',
      'Weekly cohort progression reports issued to the placement office',
      'Per-student mock-drive reports with written feedback',
      'Cohort drive-readiness summary covering eligibility, scores, and recommended drive routing',
      'Reusable question bank shared with the academic owner at engagement close',
    ],
    faqs: [
      {
        q: 'How is drive-readiness evaluated?',
        a: 'Drive-readiness is evaluated against a written rubric covering aptitude, technical, behavioural, and communication scores. The cohort summary recommends which students are ready for upcoming drives and which need additional preparation cycles.',
      },
      {
        q: 'Can the engagement run alongside ongoing semester classes?',
        a: 'Yes. The eight-week intensive is typically scheduled in the early evening and weekend windows so it does not conflict with the academic timetable. Specific timings are confirmed in the engagement plan.',
      },
      {
        q: 'How are weak performers supported?',
        a: 'Students flagged in the mid-engagement review receive an additional documentation pack with focused practice and a one-on-one mentor session. Their progression is tracked separately in the cohort report.',
      },
      {
        q: 'Are session recordings shared with the institution?',
        a: 'Yes. Recordings of all live sessions are deposited in the institution’s LMS or a programme portal, alongside the question bank and reference material, for use in subsequent academic cycles.',
      },
    ],
  },

  /* ───── 04 ─ Faculty development (FDP) ─────────────────────── */
  'faculty-development': {
    slug: 'faculty-development',
    body:
      'A faculty-development engagement covering applied AI, modern web, cloud foundations, and assessment-design practice — delivered as short workshops or longer FDPs against AICTE-recognised formats. Outputs include faculty-authored teaching artefacts and assessment-ready question banks.',
    audience: [
      'Engineering faculty refreshing curricula in computing, electronics, and applied sciences',
      'Polytechnic faculty updating practical and project-based modules',
      'Department heads commissioning sponsored FDP programmes',
      'Faculty professional-development committees planning the annual training calendar',
    ],
    prerequisites: [
      'A faculty cohort list with department, designation, and prior FDP attendance',
      'A written training need assessment from the academic owner',
      'Lab and workshop infrastructure for the practice modules',
      'An AICTE FDP-portal listing where the engagement is run as a sponsored programme',
    ],
    phases: [
      {
        title: 'Training-need analysis',
        body:
          'A written training-need analysis is prepared with the academic owner covering target topics, faculty profile, and the workshop or FDP format. The analysis governs the engagement plan.',
      },
      {
        title: 'Workshop catalogue mapping',
        body:
          'Workshops are mapped from a published catalogue covering applied AI, modern web, cloud foundations, IoT, and assessment design. The selected catalogue is signed off before scheduling.',
      },
      {
        title: 'Delivery',
        body:
          'Workshops are delivered by domain practitioners in two-day, five-day, or two-week formats — depending on the published syllabus. Each session opens with a framework and is anchored in a hands-on practice block.',
      },
      {
        title: 'Faculty artefacts',
        body:
          'Each faculty cohort produces a teaching artefact — a sample question bank, a lab manual, or a project brief — under facilitator review. The artefact becomes a reusable departmental asset.',
      },
      {
        title: 'Closing review',
        body:
          'A closing review covers participation, artefact quality, and recommendations for the next FDP cycle. A written certificate is issued to each participant with a verifiable URL.',
      },
    ],
    deliverables: [
      'Written training-need analysis and engagement plan',
      'Faculty-authored teaching artefact per cohort (lab manual, question bank, or project brief)',
      'Workshop attendance and assessment records',
      'AICTE-style FDP completion certificates with verifiable URLs',
      'Engagement-close review with recommendations for the next FDP cycle',
    ],
    faqs: [
      {
        q: 'Are workshops eligible to be listed on the AICTE FDP portal?',
        a: 'Yes. Workshops are designed against AICTE FDP-portal formats — typically two-day, five-day, or two-week structures — and the engagement plan documents the listing route. Final listing is co-managed with the academic owner.',
      },
      {
        q: 'What workshop formats are available?',
        a: 'Common formats are a two-day intensive, a five-day FDP, and a two-week online-plus-on-campus programme. The selected format is governed by the training-need analysis and the available faculty calendar.',
      },
      {
        q: 'Who facilitates the workshops?',
        a: 'Workshops are facilitated by domain practitioners with current industry experience in the topic. Each facilitator is matched against the workshop catalogue and the cohort’s training-need profile.',
      },
      {
        q: 'How is the engagement reported to senior management?',
        a: 'A closing review document covers participation, faculty artefacts produced, and recommended next-cycle topics. It is structured for the academic owner to share with the principal and the IQAC.',
      },
    ],
  },

  /* ───── 05 ─ NAAC + NBA support ────────────────────────────── */
  'naac-nba-support': {
    slug: 'naac-nba-support',
    body:
      'Documentation, evidence, and process support across NAAC and NBA accreditation cycles — designed against the published frameworks and the institution’s programme inventory. The engagement is structured to surface gaps early, produce audit-ready files, and stand up the IQAC and accreditation committees with documented routines.',
    audience: [
      'IQAC coordinators preparing for an upcoming NAAC cycle',
      'Programme coordinators preparing for an NBA visit at the programme level',
      'Principals and trustees seeking a documented baseline against the published criteria',
      'Institutions consolidating accreditation documentation across multiple departments',
    ],
    prerequisites: [
      'An accreditation cycle window confirmed against the NAAC or NBA portal',
      'Programme inventory with curriculum, faculty, and student-strength data',
      'IQAC or programme-level coordinator nominated as the institutional point of contact',
      'Access to historical evidence — minutes, reports, and committee documentation',
    ],
    phases: [
      {
        title: 'Gap analysis',
        body:
          'A written gap analysis is prepared against the published criteria — seven NAAC criteria for the institutional cycle, or the criterion structure for the relevant NBA programme. Findings are reviewed with the IQAC.',
      },
      {
        title: 'Documentation framework',
        body:
          'A documentation framework is set up covering criterion-wise files, evidence templates, and a master index. The framework defines naming, version control, and the review cadence.',
      },
      {
        title: 'Evidence collection',
        body:
          'Evidence is collected criterion-by-criterion through scheduled departmental sessions. Each evidence item is checked against the framework and signed off by the criterion owner before filing.',
      },
      {
        title: 'SSR and SAR drafting',
        body:
          'The Self Study Report (NAAC) or the Self Assessment Report (NBA) is drafted against the published template, with iterative reviews against the framework, the criterion files, and the evidence pack.',
      },
      {
        title: 'Mock visit and submission',
        body:
          'A mock visit rehearses the on-site verification, with a written observation report. Final corrections are applied and the submission is filed with the IQAC and the relevant accreditation portal.',
      },
    ],
    deliverables: [
      'Written gap analysis against the published criteria',
      'Criterion-wise evidence files indexed in a master register',
      'Drafted Self Study Report (NAAC) or Self Assessment Report (NBA)',
      'Mock-visit observation report with corrective actions',
      'Submission-ready file pack archived in the institution’s document repository',
    ],
    faqs: [
      {
        q: 'When in the cycle should the engagement begin?',
        a: 'For NAAC, the engagement is best initiated XX months before the SSR submission window so the documentation framework, evidence collection, and mock visit can run on a sustainable cadence. For NBA, programme-level engagements typically begin XX months before the SAR window.',
      },
      {
        q: 'Are SSR and SAR templates customised per institution?',
        a: 'The published NAAC and NBA templates are followed without modification; the institution-specific layer is the evidence and narrative inserted against each criterion. The documentation framework defines how that layer is produced and signed off.',
      },
      {
        q: 'How is the IQAC stood up where one does not yet operate routinely?',
        a: 'A documented IQAC routine is set up as part of the engagement — meeting cadence, agenda template, minutes template, and an annual report format — so the IQAC continues to function across cycles.',
      },
      {
        q: 'Is the engagement specific to one programme or the whole institution?',
        a: 'Both formats are supported. NAAC engagements operate at the institutional level; NBA engagements are scoped per programme. The engagement plan documents the scope, the criterion owners, and the review cadence for each format.',
      },
      {
        q: 'How is evidence kept current after the cycle closes?',
        a: 'A continuity plan documents how the criterion files are kept current between cycles — typically through an annual IQAC review, scheduled departmental sessions, and an evidence-update register maintained by the coordinator.',
      },
    ],
  },

  /* ───── 06 ─ LMS & ERP systems ─────────────────────────────── */
  'lms-erp-systems': {
    slug: 'lms-erp-systems',
    body:
      'Configurable learning-management and enterprise-resource systems that run the academic calendar and the placement cycle in one place. The engagement covers requirement scoping, configuration, data migration, training, and a documented support window after go-live.',
    audience: [
      'Institutions running the academic calendar across multiple disconnected systems',
      'Placement offices consolidating drive operations under a single platform',
      'Polytechnic institutes moving from spreadsheet-based operations to a system of record',
      'Trusts overseeing multiple campuses on shared software infrastructure',
    ],
    prerequisites: [
      'An institutional sponsor — typically the principal or the registrar',
      'Existing data sources for students, faculty, fees, and placements',
      'A network and device estimate covering staff and student access',
      'A nominated implementation owner from the institution',
    ],
    phases: [
      {
        title: 'Requirement scoping',
        body:
          'A written requirement document is prepared covering academic, examination, fees, HR, and placement modules. The document anchors the implementation plan and the configuration register.',
      },
      {
        title: 'Configuration',
        body:
          'Modules are configured against the requirement document. Roles, workflows, fee structures, and assessment formats are set up alongside the institution’s document templates and identity.',
      },
      {
        title: 'Data migration',
        body:
          'Existing data is migrated under a written migration plan with reconciliation reports. Master data — students, faculty, programmes — is signed off before transactional records are loaded.',
      },
      {
        title: 'User training',
        body:
          'Training is delivered to administrative staff, faculty, and student representatives in module-specific cohorts. Each cohort works through a written training pack and a short certification.',
      },
      {
        title: 'Go-live and support',
        body:
          'Go-live is run under a defined support window covering issue triage, configuration adjustments, and a closing review. After the support window, the system moves into a documented annual cadence.',
      },
    ],
    deliverables: [
      'Written requirement document with module-by-module sign-off',
      'Configuration register covering roles, workflows, and document templates',
      'Migration plan with reconciliation reports',
      'Training pack and per-cohort training-completion records',
      'Go-live and post-go-live support report',
    ],
    faqs: [
      {
        q: 'Which modules are typically rolled out first?',
        a: 'A common rollout starts with the academic and examination modules so the institution can run admissions and the academic calendar end-to-end in the system. Fees, HR, and placement modules are sequenced after the first stable academic cycle.',
      },
      {
        q: 'How is data from existing spreadsheets and tools migrated?',
        a: 'Migration is run under a written plan with reconciliation reports per dataset. Master data is migrated and signed off first; transactional records are migrated after the master data is verified.',
      },
      {
        q: 'Can the system be hosted on the institution’s own infrastructure?',
        a: 'Yes. Both managed-hosted and self-hosted deployments are supported. The hosting decision is documented in the requirement document and governs the support model after go-live.',
      },
      {
        q: 'How is the system maintained after the engagement closes?',
        a: 'A documented annual cadence covers configuration reviews, version updates, and an evidence pack for IQAC and accreditation cycles. The support model is agreed in writing before the engagement closes.',
      },
    ],
  },

  /* ───── 07 ─ AI, IoT & Cloud labs ──────────────────────────── */
  'ai-iot-cloud-labs': {
    slug: 'ai-iot-cloud-labs',
    body:
      'AI, IoT, and Cloud lab infrastructure delivered as a written specification, hardware procurement, software tooling, and a curriculum integration pack. The engagement is governed by an installation timeline and a documented hand-over to the department.',
    audience: [
      'Engineering departments setting up specialised labs against current curricula',
      'Polytechnic institutes adding application-led labs to existing electronics or computing infrastructure',
      'Institutions consolidating disparate hardware kits under a single lab specification',
      'Departments preparing infrastructure for upcoming NBA programme-level visits',
    ],
    prerequisites: [
      'Civil and electrical readiness of the proposed lab room',
      'A faculty owner nominated as the lab-in-charge',
      'A written department-level need statement and student-batch plan',
      'A purchase-order route confirmed by the institution',
    ],
    phases: [
      {
        title: 'Lab specification',
        body:
          'A written lab specification covers hardware, software, network, and curriculum integration. The specification is signed off by the lab-in-charge and the academic owner before procurement begins.',
      },
      {
        title: 'Procurement',
        body:
          'Hardware and software are procured against the specification under a documented purchase plan. Asset registers are prepared per item and reconciled on delivery.',
      },
      {
        title: 'Installation',
        body:
          'Installation is delivered against an agreed timeline, with electrical, network, and seating layouts verified at each stage. Acceptance tests are conducted before the lab is handed over.',
      },
      {
        title: 'Curriculum integration',
        body:
          'A curriculum integration pack maps the lab to the relevant subjects in the published syllabi, with sample lab manuals, assessment rubrics, and a project bank.',
      },
      {
        title: 'Hand-over and review',
        body:
          'A documented hand-over to the lab-in-charge covers the asset register, the curriculum pack, and the support cadence. An end-of-cycle review tracks usage and recommends additions for the next year.',
      },
    ],
    deliverables: [
      'Written lab specification signed off by the academic owner',
      'Asset register reconciled against the purchase order',
      'Lab manual set with experiments mapped to the syllabus',
      'Project bank with branch-wise project briefs',
      'Hand-over note and end-of-cycle usage review',
    ],
    faqs: [
      {
        q: 'Is the lab specification customised per department?',
        a: 'Yes. The specification is built against the department’s syllabus, the available room, and the student-batch plan. Generic specifications are used only as a starting catalogue and are revised before sign-off.',
      },
      {
        q: 'How are software licences handled?',
        a: 'Licences are procured per the lab specification and tracked in the asset register. The renewal cadence and the responsible owner are documented at hand-over so renewals do not fall through.',
      },
      {
        q: 'Can existing hardware be reused?',
        a: 'Yes, where it meets the specification. Reusable items are catalogued during the specification phase and integrated into the installation layout. Items that do not meet the specification are flagged in writing.',
      },
      {
        q: 'How is the lab evaluated for an upcoming NBA visit?',
        a: 'The curriculum integration pack and the asset register are structured against the criterion expectations of the relevant NBA programme. The hand-over note can be used directly as evidence in the SAR.',
      },
    ],
  },

  /* ───── 08 ─ Curriculum consulting ─────────────────────────── */
  'curriculum-consulting': {
    slug: 'curriculum-consulting',
    body:
      'Curriculum consulting against AICTE model curricula and current industry requirements, delivered as a course-level diff, faculty workshops, and a model paper set. The engagement is run with the academic council and produces audit-ready documentation for the next syllabus revision cycle.',
    audience: [
      'Boards of studies preparing for the next syllabus revision',
      'Departments aligning electives to current industry hiring requirements',
      'Autonomous institutions structuring their own curricula',
      'Polytechnic institutes mapping diploma curricula to current entry-level role requirements',
    ],
    prerequisites: [
      'Current curriculum document for the relevant programme',
      'AICTE model curricula or affiliating-university syllabi as the base reference',
      'A nominated academic owner — typically the head of department or board of studies chair',
      'Access to recent placement and recruiter feedback for the programme',
    ],
    phases: [
      {
        title: 'Curriculum baseline',
        body:
          'A written baseline of the existing curriculum is prepared, with course-level mapping against the AICTE model and the affiliating-university syllabus. The baseline is signed off before revision work begins.',
      },
      {
        title: 'Industry mapping',
        body:
          'Each course is mapped against current industry requirements drawn from job descriptions, recruiter feedback, and the technical-assessment formats currently used by hiring teams.',
      },
      {
        title: 'Course-level revisions',
        body:
          'Course revisions are proposed in a written diff covering syllabus, lab components, and assessment design. Each revision is reviewed with the course owner before consolidation.',
      },
      {
        title: 'Model paper and rubrics',
        body:
          'A model paper set and assessment rubrics are produced for the revised curriculum. The set serves as a reference for faculty during the first delivery cycle.',
      },
      {
        title: 'Council review',
        body:
          'The proposed curriculum is presented to the academic council or board of studies, with a written review note covering the rationale, the diff, and the implementation plan.',
      },
    ],
    deliverables: [
      'Written curriculum baseline with AICTE and affiliating-university mapping',
      'Industry-requirement mapping report per course',
      'Course-level diff with syllabus, lab, and assessment revisions',
      'Model paper set and assessment rubrics for the revised curriculum',
      'Academic-council review note for board-level approval',
    ],
    faqs: [
      {
        q: 'Is the engagement applicable to affiliated institutions?',
        a: 'Yes. For affiliated institutions, the engagement focuses on lab components, electives, and assessment formats — the surfaces the institution controls — while the core syllabus stays anchored to the affiliating university. The diff is structured to make this distinction clear.',
      },
      {
        q: 'How are electives selected?',
        a: 'Electives are selected against current industry hiring requirements, the AICTE model, and the institution’s faculty profile. The selection rationale is documented per elective so the academic council has a written basis for approval.',
      },
      {
        q: 'How long does the engagement typically run?',
        a: 'A standard engagement runs against the institution’s syllabus revision cycle — typically XX–XX months from baseline to council approval. Shorter engagements are scoped where only specific courses or electives are being revised.',
      },
      {
        q: 'Are model papers reused across cycles?',
        a: 'The model paper set is structured to be reused across cycles, with a documented annual review. Revisions are applied where a course component, rubric, or industry requirement changes materially.',
      },
    ],
  },
};

export function findCollegeDetail(slug: string): CollegeDetail | undefined {
  return collegeDetails[slug];
}
