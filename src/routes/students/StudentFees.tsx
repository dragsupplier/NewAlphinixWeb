import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { Wallet, CheckCircle2, ArrowUpRight, Banknote, Award, ShieldCheck } from 'lucide-react';
import { StudentCtaBand, StudentFaq, StudentPageShell } from '@/components/sections/student/StudentSections';

type FeeRow = {
  slug: string;
  name: string;
  duration: string;
  fee: string;
  emi: string;
  note?: string;
};

const FEE_ROWS: FeeRow[] = [
  { slug: 'industrial-training', name: 'Industrial training',     duration: '6 weeks',                 fee: '₹XX,XXX',          emi: '3-month EMI available' },
  { slug: 'placement-prep',      name: 'Placement preparation',  duration: '8 weeks',                 fee: '₹XX,XXX',          emi: '3-month EMI available' },
  { slug: 'internships',         name: 'Internship programs',     duration: '12-24 weeks',             fee: 'No fee · stipend-paid', emi: 'N/A',           note: 'Internship roles are paid by host businesses; Alphinix does not charge a programme fee.' },
  { slug: 'certifications',      name: 'Certifications',          duration: '2-6 weeks per cert',      fee: '₹X,XXX per cert',  emi: 'Single payment' },
  { slug: 'career-guidance',     name: 'Career guidance',         duration: '3 sessions / 6 weeks',    fee: '₹X,XXX',           emi: 'Single payment',   note: 'Per-session pricing also available on request.' },
  { slug: 'coding-programs',     name: 'Coding programs',         duration: '8-12 weeks per track',    fee: '₹XX,XXX per track', emi: '3-month EMI available' },
  { slug: 'skill-development',   name: 'Skill development',       duration: '2-3 days per workshop',   fee: '₹X,XXX per workshop', emi: 'Single payment' },
];

const INCLUDED = [
  'Live cohort sessions with named mentors',
  'Daily problem sets and weekly reviews',
  'Final project sign-off and portfolio piece',
  'Verifiable digital credential and transcript',
  'Cohort community access during and after the programme',
  'One re-attempt for assessments where applicable',
];

const PAYMENT_OPTIONS = [
  { icon: Banknote,    title: 'Single payment',   body: 'Pay the full fee at the start of the programme. Eligible for an early-bird discount where listed.' },
  { icon: Wallet,      title: '3-month EMI',      body: 'Available on every multi-week programme through participating partners. No additional cost over the listed fee.' },
  { icon: Award,       title: 'Need-based scholarship', body: 'Up to fifty per cent off the listed fee for students who clear the scholarship review. Application is part of the standard form.' },
];

const FAQS = [
  {
    q: 'Are the listed fees inclusive of GST?',
    a: 'Fees shown are the indicative programme fees. Final invoices include applicable GST and are shared on confirmation of the cohort slot.',
  },
  {
    q: 'How does the scholarship process work?',
    a: 'Tick the scholarship checkbox on the application form. We respond with a short scholarship review form. Decisions are issued within five working days; outcomes are issued in writing.',
  },
  {
    q: 'What is the refund policy?',
    a: 'A full refund is available within seven calendar days of the programme start date if no live sessions have been attended. Pro-rata refunds apply after that window. The full policy is linked at the bottom of every page.',
  },
  {
    q: 'Are corporate or college-sponsored fees handled differently?',
    a: 'Yes. Where a college, employer, or sponsoring organisation pays the fee, students do not pay separately. Invoices are issued to the sponsor with the standard tax structure.',
  },
];

export function StudentFees() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StudentPageShell>
        {/* Hero */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-14">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-canvas)] border border-[var(--color-line)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
                  <Wallet className="h-3 w-3" strokeWidth={2.25} />
                  Fees & scholarships
                </span>
                <h1 className="mt-5 font-display text-[36px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                  Programme fees, written down up front.{' '}
                  <span className="text-[var(--color-brand-700)]">Scholarships available.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-[15.5px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)]">
                  Fees below are the indicative programme fees per cohort. EMI options are available on every
                  multi-week programme. Need-based scholarships apply across all programmes — flag the
                  scholarship checkbox on the application form.
                </p>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-8 grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5">
                <MetaItem label="Currency" value="INR (₹)" />
                <MetaItem label="GST" value="As applicable" />
                <MetaItem label="Refund window" value="7 days" />
              </div>
            </div>
          </Container>
        </section>

        {/* Fee table */}
        <section className="bg-[var(--color-canvas)] section-y">
          <Container>
            <div className="mb-8 md:mb-10">
              <p className="kicker">Programme fees</p>
              <h2 className="mt-3 font-display text-[24px] md:text-[28px] lg:text-[32px] font-semibold tracking-[-0.022em] text-[var(--color-fg)]">
                Per-programme fee structure.
              </h2>
            </div>

            <div className="bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[10px] overflow-hidden">
              {/* Table head */}
              <div className="hidden md:grid grid-cols-12 gap-x-4 px-6 py-3.5 border-b border-[var(--color-line)] bg-[var(--color-canvas)] font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-5)]">
                <span className="col-span-1">No.</span>
                <span className="col-span-4">Programme</span>
                <span className="col-span-2">Duration</span>
                <span className="col-span-2">Fee (indicative)</span>
                <span className="col-span-2">Payment</span>
                <span className="col-span-1 text-right">Apply</span>
              </div>
              {/* Rows */}
              <ul>
                {FEE_ROWS.map((r, i) => (
                  <Reveal as="li" key={r.slug} delay={i * 30} className="border-b border-[var(--color-line)] last:border-b-0 row-hover">
                    <a
                      href={`/students/${r.slug}`}
                      className="group/r grid grid-cols-12 gap-x-4 gap-y-2 px-6 py-5 items-baseline"
                    >
                      <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="col-span-10 md:col-span-4">
                        <h3 className="font-display text-[15.5px] md:text-[16.5px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
                          <span className="under-slide">{r.name}</span>
                        </h3>
                        {r.note && (
                          <p className="mt-1 text-[12px] text-[var(--color-fg-3)] line-clamp-1">{r.note}</p>
                        )}
                      </div>
                      <span className="col-span-6 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-fg-3)]">
                        {r.duration}
                      </span>
                      <span className="col-span-6 md:col-span-2 font-display text-[14.5px] font-semibold tracking-[-0.01em] text-[var(--color-fg)]">
                        {r.fee}
                      </span>
                      <span className="col-span-12 md:col-span-2 text-[12px] text-[var(--color-fg-3)]">
                        {r.emi}
                      </span>
                      <ArrowUpRight
                        className="hidden md:inline-block col-span-1 ml-auto h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover/r:text-[var(--color-brand-700)] group-hover/r:translate-x-0.5 group-hover/r:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-[12.5px] text-[var(--color-fg-5)] max-w-2xl">
              Fees marked ₹XX,XXX are placeholders shown as a structural example. Live cohort fees are issued
              against an application — apply once and the cohort confirmation includes the exact figure
              inclusive of GST.
            </p>
          </Container>
        </section>

        {/* What's included + Payment options — split row */}
        <section className="bg-[var(--color-bg)] section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16">
              {/* Included */}
              <div className="lg:col-span-6">
                <p className="kicker">What is included</p>
                <h2 className="mt-3 font-display text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.1] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                  The fee covers all of these.
                </h2>
                <ul className="mt-7 border-t border-[var(--color-line)]">
                  {INCLUDED.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-b border-[var(--color-line)] py-4"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-700)]"
                        strokeWidth={2}
                      />
                      <p className="text-[14px] leading-[1.55] text-[var(--color-fg-2)]">{item}</p>
                      <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment options — 3 stacked rows */}
              <div className="lg:col-span-6">
                <p className="kicker">Payment options</p>
                <h2 className="mt-3 font-display text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.1] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                  Three ways to pay.
                </h2>

                <div className="mt-7 space-y-4">
                  {PAYMENT_OPTIONS.map((p, i) => (
                    <Reveal key={p.title} delay={i * 60}>
                      <article className="flex items-start gap-5 border border-[var(--color-line)] rounded-[10px] bg-[var(--color-bg)] p-5 md:p-6">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] text-[var(--color-brand-700)]">
                          <p.icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                            Option {String(i + 1).padStart(2, '0')}
                          </p>
                          <h3 className="mt-1 font-display text-[17px] md:text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                            {p.title}
                          </h3>
                          <p className="mt-2 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">{p.body}</p>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Scholarships — featured strip */}
        <section className="bg-[var(--color-brand-50)] border-y border-[var(--color-brand-100)] section-y">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                  <Award className="h-3.5 w-3.5" strokeWidth={2} />
                  Scholarships
                </span>
                <h2 className="mt-4 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Up to <span className="text-[var(--color-brand-700)]">fifty per cent off</span> for students who clear the review.
                </h2>
                <p className="mt-5 max-w-xl text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  Need-based scholarships apply across every programme. Tick the scholarship checkbox on the
                  application form — we respond with a short review form, and decisions are shared in writing
                  within five working days.
                </p>
              </div>
              <div className="lg:col-span-5">
                <ul className="space-y-3">
                  {[
                    'Available across every programme',
                    'Decision within five working days',
                    'Issued in writing with the cohort confirmation',
                    'Stackable with EMI on the discounted balance',
                  ].map((item, i) => (
                    <li key={item} className="flex items-baseline gap-3 bg-[var(--color-bg)] border border-[var(--color-line)] rounded-[8px] px-4 py-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[13.5px] leading-[1.5] text-[var(--color-fg-2)]">{item}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href="/students/apply"
                  className="group mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
                >
                  <span className="under-slide">Apply with scholarship</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.25}
                  />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Refund — small dark band */}
        <section className="bg-[var(--color-fg)] text-white py-10 md:py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-5 md:gap-x-12 items-center">
              <div className="md:col-span-9">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-300)]">
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />
                  Refund policy
                </span>
                <p className="mt-3 font-display text-[18px] md:text-[20px] lg:text-[22px] font-semibold leading-[1.4] tracking-[-0.012em] text-white text-balance">
                  Full refund within seven days of the programme start, before live sessions are attended.
                  Pro-rata refunds apply after that window.
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <a
                  href="/refund-policy"
                  className="group inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-[0.14em] font-semibold text-white"
                >
                  <span className="under-slide">Read full policy</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.25}
                  />
                </a>
              </div>
            </div>
          </Container>
        </section>

        <StudentFaq
          faqs={FAQS}
          kicker="Fee questions"
          title="What students ask before they pay."
        />

        <StudentCtaBand
          title="Apply once, fees confirmed in writing."
          body="The application form takes under three minutes. Final fees inclusive of GST, EMI options, and scholarship outcomes are all shared on the cohort confirmation."
          primary={{ label: 'Apply now', href: '/students/apply' }}
          secondary={{ label: 'Read all programmes', href: '/students' }}
        />
      </StudentPageShell>
      <Footer />
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-5)]">
        {label}
      </p>
      <p className="mt-1.5 font-display text-[15px] md:text-[16px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
        {value}
      </p>
    </div>
  );
}

