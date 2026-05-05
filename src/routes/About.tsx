import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Compass,
  PenLine,
  ShieldCheck,
  Layers3,
  HandshakeIcon,
} from 'lucide-react';
import { segments } from '@/data/segments';

const PRINCIPLES = [
  {
    eyebrow: 'Principle 01',
    title: 'One named owner per engagement.',
    body:
      'Every engagement runs against a single accountable owner — not a shared inbox. Reporting lines stay short. Escalations land in one place.',
  },
  {
    eyebrow: 'Principle 02',
    title: 'Written before spoken.',
    body:
      'Plans, scopes, candidate reports, and review notes are written down before they are discussed. Documents make decisions; meetings confirm them.',
  },
  {
    eyebrow: 'Principle 03',
    title: 'Cadence over heroics.',
    body:
      'Quarterly reviews, weekly check-ins, and a published calendar — work runs on cadence, not on a last-minute push before audit week.',
  },
  {
    eyebrow: 'Principle 04',
    title: 'Numbers we can defend.',
    body:
      'We share figures we can show the workings for. Every metric on this site is paired with the method behind it — placeholder or final.',
  },
  {
    eyebrow: 'Principle 05',
    title: 'Same pool, two sides.',
    body:
      'Students we train become candidates we forward. Hiring partners we serve become host businesses for interns. The two sides feed each other on purpose.',
  },
];

const LEADERSHIP = [
  {
    role: 'Founder & CEO',
    name: 'Founder',
    focus: 'Strategy · partnerships · engineering practice',
    body:
      'Owns the practice across segments — sets the engagement model, signs off on multi-year college partnerships, and stays close to the engineering team on every shipping product.',
  },
  {
    role: 'Head of Programmes',
    name: 'Head of Programmes',
    focus: 'Curriculum · cohort delivery · mentor network',
    body:
      'Leads the academic side — curriculum design across student programmes, cohort scheduling, mentor onboarding, and the assessment rubrics that go with each track.',
  },
  {
    role: 'Head of Hiring Partnerships',
    name: 'Head of Hiring Partnerships',
    focus: 'Recruitment desk · intern bench · client SLAs',
    body:
      'Runs the recruitment desk — JD intake, screening pipelines, time-to-fill commitments, and the bench of pre-trained interns matched to partner businesses.',
  },
  {
    role: 'Head of Institutional Practice',
    name: 'Head of Institutional Practice',
    focus: 'Colleges · schools · accreditation work',
    body:
      'Leads the work with colleges and schools — placement drives, faculty development, NAAC and NBA documentation, and lab infrastructure rollouts.',
  },
];

const NUMBERS = [
  { value: 'XX +',  label: 'Students through programmes', sub: 'Across cohorts since founding' },
  { value: 'XX',    label: 'Partner colleges',             sub: 'Engineering and polytechnic' },
  { value: 'XX',    label: 'Schools served',               sub: 'K-12 lab and curriculum rollouts' },
  { value: 'XX',    label: 'Hiring partners',              sub: 'Active across roles' },
  { value: '5 / 5', label: 'Audience segments',            sub: 'Equal-weight practice' },
];

export function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 01 — Hero: editorial split, statement on left, vital signs on right */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-14 md:pb-20 border-b border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  About / Alphinix
                </p>
                <h1 className="mt-6 font-display text-[40px] md:text-[60px] lg:text-[76px] font-semibold leading-[0.98] tracking-[-0.028em] text-[var(--color-fg)] text-balance">
                  A Pune-based technology platform serving{' '}
                  <span className="text-[var(--color-brand-700)]">five audience segments.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                  Students, colleges, schools, businesses, and hiring teams — one practice, one operating
                  model, and one accountable team. Built to run quietly across years, not to chase a quarter.
                </p>
              </div>

              {/* Right rail — vital signs */}
              <aside className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-10 space-y-7">
                <RailItem label="Founded" value="Pune · India" />
                <RailItem label="Practice" value="Five-segment technology platform" />
                <RailItem label="Operating model" value="One owner · written cadence" />
                <RailItem label="Engagement length" value="Multi-year, refresh cycles" />
              </aside>
            </div>
          </Container>
        </section>

        {/* 02 — Origin / what we do — magazine-style two-column narrative */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-4">
                <p className="kicker">Origin</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  We started where the supply meets the demand.
                </h2>
              </div>
              <div className="lg:col-span-8 lg:border-l lg:border-[var(--color-line)] lg:pl-12">
                <div className="space-y-6 text-[15px] md:text-[16px] leading-[1.75] text-[var(--color-fg-2)] max-w-2xl">
                  <p>
                    Alphinix exists because two sides of the same problem rarely talk to each other.
                    Colleges train students against curricula written years ago. Hiring teams interview
                    candidates and write them off as untrained. The candidates are the same people.
                  </p>
                  <p>
                    We sit between the two. We work with colleges on placement-ready training, set up the
                    labs and software they need, and document the work for accreditation. We work with
                    hiring teams on screened pipelines and a bench of interns who already know how a real
                    engineering team operates. Schools and businesses sit on the same axis — schools on the
                    early side, businesses on the deployment side.
                  </p>
                  <p>
                    The practice is operated as one team from Pune. The five segments share the same talent
                    pool, the same curriculum standards, and the same engagement model — that&apos;s the
                    quiet leverage.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 03 — Operating principles — numbered manifest list */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-10 md:mb-14">
              <div className="lg:col-span-7">
                <p className="kicker">Operating principles</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Five rules the practice runs on.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  These aren&apos;t aspirations on a wall — they&apos;re how engagements are written, how
                  reviews are scheduled, and how decisions get made when something goes wrong.
                </p>
              </div>
            </div>

            <ol className="border-t-2 border-[var(--color-fg)]">
              {PRINCIPLES.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 60}>
                  <article className="grid grid-cols-12 items-baseline gap-x-4 lg:gap-x-8 gap-y-3 border-b border-[var(--color-line)] py-7 md:py-9">
                    <p className="col-span-12 sm:col-span-2 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      {p.eyebrow}
                    </p>
                    <h3 className="col-span-12 sm:col-span-5 font-display text-[20px] md:text-[24px] lg:text-[26px] font-semibold tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                      {p.title}
                    </h3>
                    <p className="col-span-12 sm:col-span-5 text-[14px] md:text-[14.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* 04 — Leadership — staggered profile rail (NOT a generic 4-card grid) */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-10 md:mb-14">
              <div className="lg:col-span-5">
                <p className="kicker">Leadership</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Four desks. One operating model.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-xl text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  The team is organised around four desks — strategy, programmes, hiring, and
                  institutional practice. Each desk owns a slice of the calendar and signs off on the work
                  inside it.
                </p>
              </div>
            </div>

            {/* Asymmetric layout — staggered cards with alternating offset and side rail */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-6 lg:gap-x-8">
              {LEADERSHIP.map((m, i) => {
                // Alternating columns + visual offset for layered look
                const cols = i % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5';
                const offset = i === 1 ? 'md:mt-12' : i === 3 ? 'md:mt-12' : '';
                return (
                  <Reveal key={m.role} delay={i * 80} className={`${cols} ${offset}`}>
                    <article className="group/m relative h-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[12px] p-7 md:p-9 transition-all duration-300 hover:border-[var(--color-brand-700)]/35 hover:shadow-[0_18px_40px_-20px_rgba(11,18,32,0.18)]">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                            Desk {String(i + 1).padStart(2, '0')}
                          </p>
                          <h3 className="mt-3 font-display text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                            {m.role}
                          </h3>
                          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                            {m.focus}
                          </p>
                        </div>
                        {/* Initials block instead of photo */}
                        <span
                          aria-hidden="true"
                          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-100)] font-display text-[16px] font-semibold tracking-[-0.01em]"
                        >
                          {m.role
                            .split(' ')
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join('')}
                        </span>
                      </div>
                      <span aria-hidden="true" className="mt-6 block h-px w-12 bg-[var(--color-brand-700)]" />
                      <p className="mt-5 max-w-prose text-[14px] md:text-[14.5px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                        {m.body}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 05 — Locations — Pune HQ block with operational footprint */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24 border-t border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
              {/* HQ card — left, larger */}
              <div className="lg:col-span-7">
                <p className="kicker">Where we work</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Pune headquarters. India-wide footprint.
                </h2>
                <p className="mt-5 max-w-xl text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Operations are run from a single Pune office. Field engagements — campus drives, school
                  visits, lab installations — are dispatched from Pune to partner sites across India.
                </p>

                <article className="mt-9 border border-[var(--color-line)] rounded-[12px] p-7 md:p-9 bg-[var(--color-canvas)]">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-[var(--color-bg)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
                      <MapPin className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                        Headquarters
                      </p>
                      <h3 className="mt-2 font-display text-[22px] md:text-[26px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                        Alphinix · Pune
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                        Pune, Maharashtra · India
                        <br />
                        <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                          Detailed address shared on request
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Footprint list — right */}
              <aside className="lg:col-span-5 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
                  Field operations
                </p>
                <ul className="mt-5 space-y-5">
                  <FootprintRow icon={Compass} title="Campus drives" body="On-campus and pooled placement drives across engineering and polytechnic institutes." />
                  <FootprintRow icon={Layers3} title="Lab installations" body="AI, IoT, robotics, and STEM labs delivered on-site at colleges and K-12 schools." />
                  <FootprintRow icon={HandshakeIcon} title="Hiring engagements" body="Embedded recruiter capacity for hiring partners — remote and on-site as needed." />
                  <FootprintRow icon={PenLine} title="Faculty workshops" body="FDP and curriculum workshops at host campuses — single sessions through multi-week residencies." />
                </ul>
              </aside>
            </div>
          </Container>
        </section>

        {/* 06 — Numbers band — dark surface, asymmetric (NOT a 3-up grid) */}
        <section className="bg-[var(--color-fg)] text-white py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 mb-12 md:mb-16">
              <div className="lg:col-span-6">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-300)]">
                  Scale · placeholders
                </p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[52px] font-semibold leading-[1.04] tracking-[-0.024em] text-white text-balance">
                  Numbers we can show the workings for.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:pt-2">
                <p className="max-w-xl text-[14.5px] md:text-[15px] leading-[1.7] text-white/65">
                  All figures below are placeholders. Final figures are shared in writing with their method
                  attached — every metric paired with how it is counted, what window it covers, and which
                  cohort it draws from.
                </p>
              </div>
            </div>

            {/* Asymmetric metric layout — first one large, then a 4-up rail under it */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
              <Reveal className="lg:col-span-5 lg:border-r lg:border-white/10 lg:pr-12">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">
                  {NUMBERS[0].sub}
                </p>
                <p className="mt-4 font-display text-[88px] md:text-[120px] lg:text-[152px] font-semibold leading-[0.86] tracking-[-0.045em] text-white">
                  {NUMBERS[0].value}
                </p>
                <p className="mt-5 font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.014em] text-white">
                  {NUMBERS[0].label}
                </p>
              </Reveal>

              <div className="lg:col-span-7">
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-x-10 lg:gap-x-12">
                  {NUMBERS.slice(1).map((n, i) => (
                    <Reveal as="li" key={n.label} delay={i * 80}>
                      <p className="font-display text-[44px] md:text-[56px] lg:text-[64px] font-semibold leading-[0.9] tracking-[-0.035em] text-white">
                        {n.value}
                      </p>
                      <p className="mt-3 font-display text-[15px] md:text-[16px] font-semibold tracking-[-0.01em] text-white">
                        {n.label}
                      </p>
                      <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/45">
                        {n.sub}
                      </p>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </Container>
        </section>

        {/* 07 — Segments rail — quick links to the 5 hubs (visually distinct from above) */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20">
          <Container>
            <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
              <div>
                <p className="kicker">The five segments</p>
                <h2 className="mt-3 font-display text-[24px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                  One practice. Five places to enter it.
                </h2>
              </div>
              <a
                href="/services"
                className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
              >
                <span className="under-slide">Full service index</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
              </a>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-[var(--color-line)]">
              {segments.map((s, i) => (
                <li
                  key={s.slug}
                  className={`border-b lg:border-b-0 lg:border-r border-[var(--color-line)] last:border-r-0 ${
                    i === 0 ? 'border-l-0 lg:border-l-0' : ''
                  }`}
                >
                  <a
                    href={`/${s.slug}`}
                    className="row-hover group/seg flex flex-col h-full px-5 lg:px-6 py-7 md:py-9"
                  >
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      {s.index}
                    </p>
                    <h3 className="mt-3 font-display text-[20px] md:text-[22px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                      <span className="under-slide">{s.name}</span>
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-[1.55] text-[var(--color-fg-4)]">
                      {s.audience}
                    </p>
                    <ArrowUpRight
                      className="mt-auto pt-6 h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover/seg:text-[var(--color-brand-700)] group-hover/seg:translate-x-0.5 group-hover/seg:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 08 — Closing CTA */}
        <section className="bg-[var(--color-brand-950)] text-white">
          <Container>
            <div className="py-16 md:py-20 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
                <div className="lg:col-span-7">
                  <p className="kicker kicker-on-dark">Talk to us</p>
                  <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[52px] font-semibold leading-[1.04] tracking-[-0.024em] text-white text-balance">
                    Tell us which side of the practice you&apos;re on. We&apos;ll route the conversation.
                  </h2>
                  <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/70">
                    A short email or call is enough to start. We respond on a single named thread within one
                    working day, with the right desk in copy.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                    <a
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[14px] font-semibold text-[var(--color-brand-950)] transition-colors hover:bg-white/90"
                    >
                      Talk to us
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/30 transition-colors hover:ring-white/60"
                    >
                      All services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function RailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
        {label}
      </p>
      <p className="mt-2 text-[14px] md:text-[15px] font-semibold text-[var(--color-fg)] leading-[1.4]">
        {value}
      </p>
    </div>
  );
}

function FootprintRow({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-4 border-t border-[var(--color-line)] pt-5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-display text-[15px] md:text-[16px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
          {title}
        </p>
        <p className="mt-1 text-[13.5px] leading-[1.65] text-[var(--color-fg-3)]">{body}</p>
      </div>
    </li>
  );
}
