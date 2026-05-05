/**
 * @file schoolDetails.ts
 * @purpose Rich detail content for each school programme — extends segmentServices.ts
 * @notes Friendly + warm magazine voice. NEP 2020 alignment called out where relevant.
 */

export type SchoolDetail = {
  slug: string;
  body: string;
  ages: string[];
  curriculumFit: string[];
  phases: { title: string; body: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export const schoolDetails: Record<string, SchoolDetail> = {
  'ai-robotics-education': {
    slug: 'ai-robotics-education',
    body:
      'A multi-grade AI and robotics programme that meets students where they are — block-based first, sensor-driven later, and finally working with real foundation models. The curriculum is mapped to NEP 2020 stage outcomes, with classroom-friendly kits and lesson plans the teaching staff actually enjoys running. Used by K-12 schools across Maharashtra and tier-2 city campuses to give every student a steady ladder into AI.',
    ages: [
      'Class 6 — 8 (middle stage)',
      'Class 9 — 10 (secondary stage)',
      'Class 11 — 12 (senior secondary)',
      'Mixed-grade after-school clubs',
    ],
    curriculumFit: [
      'CBSE — slots into the AI elective and computer applications stream',
      'ICSE — pairs with the IT and applications curriculum',
      'State boards — runs as a co-curricular activity period',
      'IB / Cambridge — supports the design and innovation strand',
      'NEP 2020 — aligned with the experiential learning, coding, and AI emphasis from middle stage onwards',
    ],
    phases: [
      {
        title: 'Phase 01 — School visit and grade-band review',
        body: 'A short visit to walk the campus, meet the academic head, and review the grade bands the school wants the programme to cover.',
      },
      {
        title: 'Phase 02 — Curriculum mapping',
        body: 'A written plan that maps the AI and robotics modules into the school timetable — stage-wise, period-wise, and aligned with NEP 2020 outcomes.',
      },
      {
        title: 'Phase 03 — Hardware and lesson-plan kit-out',
        body: 'Robotics kits, classroom-friendly AI tools, and printed lesson plans delivered and labelled per grade band.',
      },
      {
        title: 'Phase 04 — Teacher onboarding',
        body: 'A two-week onboarding cadence so the science and computer teachers can run the first six weeks of the programme confidently.',
      },
      {
        title: 'Phase 05 — Class rollout',
        body: 'The programme starts running in regular periods. We sit in for the first few sessions and hand the room back to the teacher.',
      },
      {
        title: 'Phase 06 — Quarterly review',
        body: 'A check-in once a term to refresh kits, swap out modules that have been completed, and look at student work.',
      },
    ],
    deliverables: [
      'Grade-band lesson plans printed and bound for the staff room',
      'Robotics kits sized for the student count, with spares for breakage',
      'Software licences and starter accounts for the AI tools used in class',
      'Teacher facilitation guide with rubrics and expected student outputs',
      'A student showcase event at the end of every academic year',
      'Quarterly kit-refresh and curriculum-update visits',
    ],
    faqs: [
      {
        q: 'Do students need to know coding before they start?',
        a: 'No. The middle-stage modules begin with block-based programming and physical robotics. Text-based coding is introduced later, in line with NEP 2020 stage outcomes.',
      },
      {
        q: 'Is the programme safe for younger students?',
        a: 'Yes. Hardware kits for the middle stage use enclosed components, low-voltage power, and rounded form factors. A safety brief is included in the teacher facilitation guide.',
      },
      {
        q: 'Can the programme run as a club instead of a regular period?',
        a: 'It can. Many schools start it as an after-school club for one academic year before moving it into the regular timetable.',
      },
      {
        q: 'Do you handle parent communication?',
        a: 'A parent-facing one-pager is shared at the start of the year. Mid-year showcases give parents a direct look at student work.',
      },
      {
        q: 'How many students can one kit support?',
        a: 'Kits are sized for groups of three to four students. We size the order against the largest section in the grade band.',
      },
    ],
  },

  'iot-lab-setup': {
    slug: 'iot-lab-setup',
    body:
      'A turnkey IoT lab — sensors, microcontrollers, breadboards, and a project-led curriculum that takes students from blinking an LED to building a working environmental monitor. Set up against NEP 2020 experiential learning and the published ATL guidelines, so the lab earns its place on the campus tour. Designed to stay alive across academic years, not gather dust after the inauguration.',
    ages: [
      'Class 6 — 8 (introductory IoT)',
      'Class 9 — 10 (project-led IoT)',
      'Class 11 — 12 (capstone projects)',
      'Cross-grade ATL-style sessions',
    ],
    curriculumFit: [
      'CBSE — pairs with the AI, IT, and applied science electives',
      'ICSE — slots into the computer applications stream',
      'State boards — runs as a tinkering period or science-club activity',
      'NEP 2020 — covers the experiential, hands-on learning emphasis from middle stage onwards',
      'ATL guidelines — lab hardware mapped against the official ATL kit lists',
    ],
    phases: [
      {
        title: 'Phase 01 — Room survey',
        body: 'A site visit to measure the room, check the power layout, look at storage, and understand the daily timetable the lab will live inside.',
      },
      {
        title: 'Phase 02 — Lab plan',
        body: 'A written floor plan and kit list — sensor stations, microcontroller benches, demo area, and storage — sized for the student-per-period count.',
      },
      {
        title: 'Phase 03 — Furniture and electrical fit-out',
        body: 'Benches, storage, lighting, and safe low-voltage power layout. Done before the kits arrive, so installation is clean.',
      },
      {
        title: 'Phase 04 — Hardware kit-out',
        body: 'Sensors, microcontrollers, breadboards, jumpers, and a labelled storage system that survives a full academic year of use.',
      },
      {
        title: 'Phase 05 — Curriculum and project briefs',
        body: 'Forty project briefs across the three grade bands — printed, indexed, and stored in the lab itself.',
      },
      {
        title: 'Phase 06 — Teacher onboarding and handover',
        body: 'A two-week onboarding so the staff can run the lab confidently from week one. Handover happens on a working session, not a slide deck.',
      },
    ],
    deliverables: [
      'A working IoT lab with documented floor plan and kit register',
      'Forty project briefs printed and stored in the lab',
      'Teacher facilitation guide with safety brief and rubrics',
      'A consumables kit so small breakages do not stall a class',
      'Inauguration walk-through with school leadership and parents',
      'A return visit at the end of term one to refresh the consumables',
    ],
    faqs: [
      {
        q: 'How big a room do we need?',
        a: 'A standard classroom of around 500 to 700 square feet works well for thirty students. Smaller rooms are workable; the floor plan is sized to the space available.',
      },
      {
        q: 'Is the lab ATL-compatible?',
        a: 'The hardware list is mapped against the published ATL kit categories. Schools applying for ATL or already running one can use this lab as a primary or secondary space.',
      },
      {
        q: 'What about electrical safety?',
        a: 'All student-facing power is low-voltage. Mains power is restricted to teacher-only outlets. The safety brief is built into the teacher facilitation guide.',
      },
      {
        q: 'How often do consumables need replacing?',
        a: 'Sensor wear-and-tear is real but slow. The first refresh visit is at the end of term one and the cadence is set per school after that.',
      },
      {
        q: 'Do the students take projects home?',
        a: 'Capstone projects in Class 11–12 are often kept by students. Most middle-stage builds stay in the lab so the next batch can reuse the kits.',
      },
    ],
  },

  'coding-education': {
    slug: 'coding-education',
    body:
      'An age-appropriate coding curriculum that follows the NEP 2020 progression — block-based programming in the middle stage, then Python, then JavaScript. Each grade band ships a tangible piece of work: a small game, a working calculator, a personal webpage. The cadence is weekly periods with classroom-tested problem sets, and the teacher always has a printed lesson plan in front of them.',
    ages: [
      'Class 3 — 5 (early block-based)',
      'Class 6 — 8 (full block-based + early Python)',
      'Class 9 — 10 (Python and basic web)',
      'Class 11 — 12 (JavaScript and applied projects)',
    ],
    curriculumFit: [
      'CBSE — pairs with the computer applications and AI electives',
      'ICSE — slots into the computer applications stream and Class 9 onwards',
      'State boards — runs as a regular weekly period',
      'IB / Cambridge — supports the digital design and computing strand',
      'NEP 2020 — follows the coding-from-middle-stage emphasis with stage-wise progression',
    ],
    phases: [
      {
        title: 'Phase 01 — Stage-band review',
        body: 'A walk through the grades the school wants to cover and a quick read on what students have already been exposed to.',
      },
      {
        title: 'Phase 02 — Curriculum draft',
        body: 'A written curriculum across the four bands, with weekly outcomes and project deliverables called out per term.',
      },
      {
        title: 'Phase 03 — Lesson plan kit-out',
        body: 'Printed lesson plans and problem sets per grade band, plus the licences for any editor or platform the curriculum uses.',
      },
      {
        title: 'Phase 04 — Teacher onboarding',
        body: 'A short cohort onboarding for the computer teachers — tooling setup, lesson-plan walk-through, and assessment design.',
      },
      {
        title: 'Phase 05 — First-term rollout',
        body: 'Classes start. We sit in on a few sessions, watch the rhythm, and adjust the lesson plans where the cadence needs tuning.',
      },
    ],
    deliverables: [
      'Stage-wise lesson plans for all four grade bands',
      'Problem sets, projects, and assessment rubrics for each term',
      'Licensed access to the editors and platforms the curriculum uses',
      'Teacher facilitation guide with debugging and review tips',
      'A coding showcase at the end of each academic year',
      'A printed completion certificate per stage band',
    ],
    faqs: [
      {
        q: 'Why start with block-based coding?',
        a: 'Block-based programming lets younger students reason about logic without fighting syntax. NEP 2020 endorses this scaffolded approach, and the bridge to text-based languages becomes much shorter.',
      },
      {
        q: 'Do students need their own laptops?',
        a: 'No. School-provided computer labs are enough. Where laptops are scarce, the lesson plans support pair-programming rotations.',
      },
      {
        q: 'Are the projects evaluated?',
        a: 'Yes. Each term ends with a small project against a written rubric. Students get a printed feedback sheet they can keep.',
      },
      {
        q: 'Can the same teacher run the full ladder?',
        a: 'Most computer teachers can run Class 3 to Class 10 after the onboarding. Class 11–12 JavaScript modules sometimes call for a second onboarding session.',
      },
      {
        q: 'Is there a way for advanced students to go further?',
        a: 'A list of optional extension projects is bundled with each term. Students who finish the term project ahead of schedule pull from there.',
      },
    ],
  },

  'stem-atl-labs': {
    slug: 'stem-atl-labs',
    body:
      'STEM and Atal Tinkering Lab setups built against the published ATL guidelines — including the kit categories, the floor plan, and the usage cadence the guidelines actually expect. We treat the inauguration as the start, not the finish: a working schedule, a usage register, and a quarterly check-in keep the lab from becoming a photo opportunity.',
    ages: [
      'Class 6 — 8 (primary ATL audience)',
      'Class 9 — 10 (project-led STEM)',
      'Class 11 — 12 (capstone projects)',
      'Cross-grade tinkering club',
    ],
    curriculumFit: [
      'CBSE — directly slots into the ATL programme and the AI elective',
      'ICSE — pairs with the science and applications stream',
      'State boards — runs as a weekly tinkering period',
      'NEP 2020 — supports the experiential learning and design-thinking emphasis',
      'ATL guidelines — kit lists, room layout, and usage cadence mapped to the official handbook',
    ],
    phases: [
      {
        title: 'Phase 01 — ATL eligibility review',
        body: 'A quick check on whether the school qualifies under the current ATL framework, or if a parallel STEM lab is the cleaner route.',
      },
      {
        title: 'Phase 02 — Room plan and kit categories',
        body: 'A floor plan covering the six ATL kit categories — electronics, robotics, IoT, mechanical, 3D printing, and design tools.',
      },
      {
        title: 'Phase 03 — Procurement and inventory',
        body: 'Hardware sourced against the official ATL kit lists, labelled, and recorded in an inventory register the school keeps.',
      },
      {
        title: 'Phase 04 — Lab fit-out and inauguration',
        body: 'Furniture, lighting, storage, and safety signage installed. The inauguration is run with parents and trustees walked through the lab.',
      },
      {
        title: 'Phase 05 — Usage cadence and teacher onboarding',
        body: 'A weekly schedule is built, the staff is onboarded, and the first six weeks of sessions are run with us in the room.',
      },
      {
        title: 'Phase 06 — Quarterly audit',
        body: 'A return visit each term to look at usage logs, refresh consumables, and flag anything that is drifting from the guidelines.',
      },
    ],
    deliverables: [
      'A working ATL or STEM lab with a documented floor plan',
      'Inventory register listing every item by category and quantity',
      'Six-band project brief library across electronics, robotics, IoT, and 3D printing',
      'Teacher facilitation guide and safety brief',
      'Usage register and weekly schedule template',
      'Quarterly audit visits across the academic year',
    ],
    faqs: [
      {
        q: 'Is ATL eligibility separate from the lab build?',
        a: 'It is. ATL eligibility is granted by AIM under specific criteria. Many schools start with a parallel STEM lab built on the same blueprint and convert later.',
      },
      {
        q: 'Do you handle the ATL paperwork?',
        a: 'We support the documentation that schools need for the inspection visit — usage logs, project records, and the inventory register. The application itself stays with the school.',
      },
      {
        q: 'Can a single lab serve all the grades?',
        a: 'Yes, with a weekly schedule. The kit categories overlap enough that one well-stocked lab can serve Class 6 through Class 12 across a school week.',
      },
      {
        q: 'What about 3D printing — is it noisy and slow?',
        a: 'Modern desktop printers are quiet enough for a classroom. Print times are scheduled across the day so a single printer covers a normal usage pattern.',
      },
      {
        q: 'How do you keep the lab from becoming a museum?',
        a: 'The usage register is the simplest tool. Schools that fill it weekly always keep the lab alive; schools that skip it usually drift. The quarterly audit is built around it.',
      },
    ],
  },

  'hardware-kits': {
    slug: 'hardware-kits',
    body:
      'Curated hardware kits — Arduino, Raspberry Pi, drones, sensor sets, and robotics — paired with classroom-tested project briefs. Kits come in three tiers so a school can start small with a pilot batch and scale across grades only once the programme is working. Every kit ships with printed briefs, a teacher one-pager, and a consumables refresh window.',
    ages: [
      'Class 6 — 8 (starter kits)',
      'Class 9 — 10 (advanced kits)',
      'Class 11 — 12 (pro kits)',
      'Cross-grade club use',
    ],
    curriculumFit: [
      'CBSE — pairs with the AI elective and applied science strand',
      'ICSE — slots into the computer applications stream',
      'State boards — runs as a tinkering period or activity-based learning slot',
      'NEP 2020 — covers the hands-on, applied learning emphasis',
      'ATL guidelines — every kit is mapped to an ATL kit category',
    ],
    phases: [
      {
        title: 'Phase 01 — Tier selection',
        body: 'A short conversation on grade band, current lab setup, and budget — to land on the right tier (starter, advanced, or pro) for the school.',
      },
      {
        title: 'Phase 02 — Kit configuration',
        body: 'Each kit is sized for the student count and the grade band. Sensors, boards, and consumables are picked against the project briefs the kit ships with.',
      },
      {
        title: 'Phase 03 — Delivery and labelling',
        body: 'Kits arrive labelled, indexed, and with a printed inventory list. Storage recommendations come with the kit.',
      },
      {
        title: 'Phase 04 — Teacher walk-through',
        body: 'A short walk-through with the teaching staff covering the brief library, common student mistakes, and the consumables window.',
      },
      {
        title: 'Phase 05 — Consumables refresh',
        body: 'A scheduled top-up visit so small breakages and used consumables do not stall a class. Cadence is set per kit tier.',
      },
    ],
    deliverables: [
      'A delivered, labelled, and inventoried hardware kit per tier',
      'A printed brief library — fifteen briefs with a starter, twenty-five with advanced, forty with pro',
      'Teacher one-pager with safety brief and common-mistake guide',
      'A consumables top-up scheduled at the end of term one',
      'A brief library refresh once a year',
      'Replacement parts at parts-cost for a full academic year',
    ],
    faqs: [
      {
        q: 'Can we start with one kit and scale?',
        a: 'Yes. Many schools begin with a single starter kit running an after-school club, and scale into a full lab once the programme is working.',
      },
      {
        q: 'Are the kits open to take home?',
        a: 'Pro-tier kits include take-home modules for capstone projects in Class 11–12. Starter and advanced kits are designed to live in the lab and rotate across batches.',
      },
      {
        q: 'What about drone kits and safety?',
        a: 'Drone kits ship with mini-quad units that are safe for indoor flight. The teacher walk-through includes the flight-safety brief and a simple flight-zone setup.',
      },
      {
        q: 'How long does a starter kit last?',
        a: 'A starter kit, used in a weekly period across one section, runs for two academic years before a refresh becomes worth the spend.',
      },
      {
        q: 'Do you take older kits in part-exchange?',
        a: 'For schools moving from starter to advanced, we credit the working components of the older kit against the new order.',
      },
    ],
  },

  'teacher-training': {
    slug: 'teacher-training',
    body:
      'Cohort-based teacher training that hands the lab to teaching staff confidently — including project ownership, assessment design, and the soft skills of running a tinkering session. The cadence is short, weekly, and built around the staff timetable, so the school does not lose teaching periods. By the end, the same teachers run their own showcase event without us in the room.',
    ages: [
      'Primary computer teachers',
      'Middle-stage science and computer teachers',
      'Senior secondary teachers (Class 11 — 12)',
      'Lab coordinators and STEM heads',
    ],
    curriculumFit: [
      'CBSE schools running the AI elective and applied learning periods',
      'ICSE schools with computer applications and design strand',
      'State boards adopting NEP 2020 stage outcomes',
      'NEP 2020 — supports the teacher-development and pedagogy modernisation emphasis',
      'ATL schools needing trained mentors for the tinkering lab',
    ],
    phases: [
      {
        title: 'Week 01 — Foundations',
        body: 'A working session on the curriculum, the lab handbook, and the way modern coding and electronics classes are run.',
      },
      {
        title: 'Week 02 — Hands-on with kits',
        body: 'Teachers build the same projects students will build — with notes on common mistakes and how to walk a class through them.',
      },
      {
        title: 'Week 03 — Lesson plan and rubric design',
        body: 'A workshop on writing a lesson plan and an assessment rubric the school can reuse and adapt over the academic year.',
      },
      {
        title: 'Week 04 — Live classroom shadowing',
        body: 'We run a session, the teacher observes; the next week the teacher runs it and we observe. Written feedback follows.',
      },
      {
        title: 'Week 05 — Showcase facilitation',
        body: 'A session on how to run a parent-facing showcase — pacing, student stations, the talking points, and the parent one-pager.',
      },
      {
        title: 'Week 06 — Handover and certification',
        body: 'Final review, a written certificate of completion for each teacher, and the cadence for the on-call support window.',
      },
    ],
    deliverables: [
      'A six-week training schedule that fits inside the staff timetable',
      'Printed lesson plans, rubrics, and the lab handbook',
      'Live classroom shadowing with written feedback',
      'A parent-showcase facilitation playbook',
      'A teacher certificate of completion per participant',
      'On-call support for the first academic term after handover',
    ],
    faqs: [
      {
        q: 'How many teachers can we send?',
        a: 'A cohort sized between four and twelve teachers works best. Larger cohorts are split into two groups so the live shadowing stays meaningful.',
      },
      {
        q: 'Do teachers need a coding background?',
        a: 'A computer teacher background helps but is not required. Science teachers have run the programme well — the foundations week is built for that.',
      },
      {
        q: 'Is the certificate recognised?',
        a: 'It is an Alphinix-issued certificate of completion with a verifiable URL. Schools use it for internal CPD records and for ATL paperwork where applicable.',
      },
      {
        q: 'What happens after the six weeks?',
        a: 'On-call support runs for the first academic term so the staff can ask questions in real time. After that, quarterly check-ins are scheduled if the school wants them.',
      },
      {
        q: 'Can the training run in school holidays?',
        a: 'Yes. Many schools prefer the summer break or a winter window so the cadence does not collide with regular teaching.',
      },
    ],
  },
};

export function findSchoolDetail(slug: string): SchoolDetail | undefined {
  return schoolDetails[slug];
}
