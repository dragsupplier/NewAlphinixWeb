import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight, Quote, MapPin, Building2, Code2 } from 'lucide-react';
import { StudentCtaBand, StudentPageShell } from '@/components/sections/student/StudentSections';

const ROLE_TYPES = [
  { name: 'Software engineer',     desc: 'Web, mobile, full-stack, and platform roles at product companies and services firms.' },
  { name: 'Data analyst',          desc: 'Analytics, SQL, dashboarding, and reporting roles across industries.' },
  { name: 'ML / AI engineer',      desc: 'Foundation-model integration, RAG, evaluation pipelines, and applied ML.' },
  { name: 'Product analyst',       desc: 'Adjacent-to-product roles for engineers who want a path toward product management.' },
  { name: 'DevOps / SRE',          desc: 'Infrastructure, observability, and reliability roles at product and services firms.' },
  { name: 'Frontend engineer',     desc: 'Specialist frontend, design-system, and accessibility-focused engineering roles.' },
  { name: 'Mobile developer',      desc: 'iOS, Android, and cross-platform roles at consumer and enterprise app teams.' },
  { name: 'QA / Test engineer',    desc: 'Manual and automation testing, performance, and security-leaning QA roles.' },
];

const INDUSTRIES = [
  { name: 'Product companies',  desc: 'Mid- to late-stage SaaS, consumer apps, marketplaces, and platform companies.' },
  { name: 'IT services',        desc: 'Indian and global services firms — both large and mid-sized.' },
  { name: 'Startups',           desc: 'Early-stage to Series-B teams, often through internship-to-full-time pathways.' },
  { name: 'Fintech',            desc: 'Banks, payment platforms, lending and capital-markets startups.' },
  { name: 'EdTech',             desc: 'Programme-management, content tools, and learning-platform engineering.' },
  { name: 'Healthcare',         desc: 'Telemedicine platforms, hospital tooling, and diagnostics-adjacent products.' },
];

const CITIES = ['Pune', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Chennai', 'Delhi NCR', 'Remote (India)'];

const STORIES = [
  {
    role: 'Senior pre-final year · diploma',
    headline: 'From a campus drive that did not convert to a startup match in the next cycle.',
    body: 'After completing the placement-preparation programme, the student joined the next internship-match cycle and was placed with an early-stage startup as a frontend intern, converting to a full-time offer at the end of the engagement.',
  },
  {
    role: 'Final year · BCA',
    headline: 'Industrial training to a junior data role at an IT services firm.',
    body: 'A six-week industrial-training cohort produced a shipped data-pipeline project. The project featured on the CV during placements, and the student was selected through a campus drive into a junior data role.',
  },
  {
    role: 'Final year · engineering',
    headline: 'Coding-programme final project ported into a real internship deliverable.',
    body: 'The full-stack track ended with a shipped product. The student was matched into an internship role at a partner business, where the same project shape became the engagement scope. Conversion to full-time is in discussion.',
  },
  {
    role: 'Recent graduate · MCA',
    headline: 'Career-guidance pivot from a generic services role into product engineering.',
    body: 'Three career-guidance sessions produced a written ninety-day plan. The student followed the plan, picked up additional system-design preparation, and landed an offer at a product company through a referral.',
  },
];

export function StudentOutcomes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StudentPageShell>
        {/* Hero */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16">
          <Container>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-canvas)] border border-[var(--color-line)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
                <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-[var(--color-brand-700)]" />
                Career routes
              </span>
              <h1 className="mt-5 font-display text-[36px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                Where students go after the programme.{' '}
                <span className="text-[var(--color-brand-700)]">Roles, industries, cities.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-[15.5px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)]">
                We do not publish percentage placement claims. What we share below is the shape of the work
                students walk into — the kinds of roles, the kinds of companies, and the kinds of cities — so
                you can read your trajectory against it.
              </p>
            </div>
          </Container>
        </section>

        {/* Role types — 8 cards in a 4-col grid */}
        <section className="bg-[var(--color-canvas)] section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-10 md:mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Role types</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Eight role types most students go into.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  Roles below are the most common routes after the programmes. Adjacent specialisations exist —
                  the eight here cover the bulk of where students land.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {ROLE_TYPES.map((r, i) => (
                <Reveal key={r.name} delay={i * 50}>
                  <article className="h-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-5 md:p-6">
                    <div className="flex items-start justify-between">
                      <span className="grid h-9 w-9 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
                        <Code2 className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)] tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[16px] font-semibold leading-[1.25] tracking-[-0.012em] text-[var(--color-fg)]">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-[1.6] text-[var(--color-fg-3)]">{r.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Industries + Cities — split row */}
        <section className="bg-[var(--color-bg)] section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16">
              {/* Industries — 7 cols, hairline-row list */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4 text-[var(--color-brand-700)]" strokeWidth={2} />
                  <p className="kicker">Industries</p>
                </div>
                <h2 className="mt-2 font-display text-[26px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Six industries students join out of the programmes.
                </h2>

                <ol className="mt-8 border-t border-[var(--color-fg)]">
                  {INDUSTRIES.map((it, i) => (
                    <Reveal as="li" key={it.name} delay={i * 40} className="border-b border-[var(--color-line)]">
                      <article className="grid grid-cols-12 gap-x-4 gap-y-2 py-5 md:py-6 row-hover">
                        <span className="col-span-2 sm:col-span-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="col-span-10 sm:col-span-4 font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                          {it.name}
                        </h3>
                        <p className="col-span-12 sm:col-span-7 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                          {it.desc}
                        </p>
                      </article>
                    </Reveal>
                  ))}
                </ol>
              </div>

              {/* Cities — 5 cols, sticky chip list */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[var(--color-brand-700)]" strokeWidth={2} />
                    <p className="kicker">Cities</p>
                  </div>
                  <h2 className="mt-2 font-display text-[24px] md:text-[28px] font-semibold leading-[1.16] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                    Pune at the centre. Roles routed across India.
                  </h2>
                  <p className="mt-4 text-[14px] leading-[1.7] text-[var(--color-fg-3)] max-w-md">
                    Most students start in the city they study in or the next major hub. Remote roles are
                    common, especially through the internship-match track.
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-2">
                    {CITIES.map((c, i) => (
                      <li key={c}>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold ${
                            i === 0
                              ? 'bg-[var(--color-brand-700)] text-white'
                              : 'bg-[var(--color-canvas)] text-[var(--color-fg-2)] border border-[var(--color-line)]'
                          }`}
                        >
                          {i === 0 && (
                            <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-white pulse-dot" />
                          )}
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Stories — anonymised qualitative stories */}
        <section className="bg-[var(--color-canvas)] section-y">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p className="kicker">From the cohorts</p>
              <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                Four routes, four different starting points.
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                Stories below are described by role-type and academic background only — names and companies
                stay private until students choose to share them themselves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {STORIES.map((s, i) => (
                <Reveal key={i} delay={i * 70}>
                  <article className="h-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] p-6 md:p-7 lg:p-8 relative">
                    <Quote
                      className="absolute top-6 right-6 h-5 w-5 text-[var(--color-brand-200)]"
                      strokeWidth={1.5}
                    />
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      Story {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-4 font-display text-[18px] md:text-[20px] font-semibold leading-[1.3] tracking-[-0.018em] text-[var(--color-fg)] text-balance pr-8">
                      {s.headline}
                    </h3>
                    <p className="mt-4 text-[13.5px] md:text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                      {s.body}
                    </p>
                    <div className="mt-6 pt-5 border-t border-[var(--color-line)]">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                        {s.role}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* What we measure — small editorial closer */}
        <section className="bg-[var(--color-bg)] section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16">
              <div className="lg:col-span-5">
                <p className="kicker">What we measure</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[34px] lg:text-[38px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Outcomes are written into the programme up front.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[var(--color-line)]">
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)] text-pretty max-w-2xl">
                  We measure cohorts on three axes — what students ship, what they can show afterwards, and
                  where the work routes when they finish. Hard percentages and cohort sizes change every
                  cycle; the structure stays the same.
                </p>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Ship',  body: 'A reviewable artefact at the end of every programme.' },
                    { label: 'Show',  body: 'A CV update, transcript, or portfolio piece tied to it.' },
                    { label: 'Route', body: 'A path into placements, internships, or direct hiring.' },
                  ].map((m, i) => (
                    <li
                      key={m.label}
                      className="border-t-2 border-[var(--color-brand-700)] pt-4"
                    >
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        Axis {String(i + 1).padStart(2, '0')} · {m.label}
                      </p>
                      <p className="mt-3 text-[13.5px] leading-[1.55] text-[var(--color-fg-3)]">
                        {m.body}
                      </p>
                    </li>
                  ))}
                </ul>

                <a
                  href="/students"
                  className="group mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
                >
                  <span className="under-slide">Read all programmes</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.25}
                  />
                </a>
              </div>
            </div>
          </Container>
        </section>

        <StudentCtaBand
          title="Find a programme that fits the route you want."
          body="Tell us the role-type or industry you are aiming at and we will route you to the right programme — with the next cohort dates and the application form."
          primary={{ label: 'Apply now', href: '/students/apply' }}
          secondary={{ label: 'Read all programmes', href: '/students' }}
        />
      </StudentPageShell>
      <Footer />
    </div>
  );
}
