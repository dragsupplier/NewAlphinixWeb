import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from 'lucide-react';
import type { FormEvent } from 'react';

const ANSWERS = [
  {
    eyebrow: 'Sales',
    name: 'Partnerships desk',
    body:
      'For colleges and businesses scoping a new engagement — campus training, lab setup, or a software build. Routes the brief to the right desk and books a discovery call.',
  },
  {
    eyebrow: 'Programmes',
    name: 'Programmes desk',
    body:
      'For students enrolling, schools planning a lab, or trainers asking about cohort schedules. Owns the academic calendar and the curriculum standards across segments.',
  },
  {
    eyebrow: 'Hiring partnerships',
    name: 'Recruitment desk',
    body:
      'For hiring teams opening a role or scoping a bulk drive. Handles JD intake, screening pipelines, time-to-fill commitments, and the intern bench.',
  },
];

export function Contact() {
  // Placeholder Apps Script endpoint — wired in later. Submit redirects to /thank-you.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = '/thank-you';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 01 — Hero */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 border-b border-[var(--color-line)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
              <div className="lg:col-span-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
                  Contact / Talk to us
                </p>
                <h1 className="mt-6 font-display text-[40px] md:text-[60px] lg:text-[72px] font-semibold leading-[1.0] tracking-[-0.028em] text-[var(--color-fg)] text-balance">
                  Tell us what you&apos;re solving.
                  <br />
                  <span className="text-[var(--color-brand-700)]">We respond on a single email thread, named.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-[15.5px] md:text-[17px] leading-[1.6] text-[var(--color-fg-3)] text-pretty">
                  No routing forms, no auto-reply chains. The right desk reads your message and responds
                  on the same thread within one working day.
                </p>
              </div>
              <div className="lg:col-span-4 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
                  Best for
                </p>
                <ul className="mt-4 space-y-2.5 text-[13.5px] leading-[1.6] text-[var(--color-fg-3)]">
                  <li>· Scoping a new engagement</li>
                  <li>· Booking a discovery call</li>
                  <li>· Asking about a programme or cohort</li>
                  <li>· Opening a role with the recruitment desk</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 02 — Two-column: form (left) + direct contact methods (right) */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">
              {/* Form */}
              <div className="lg:col-span-7">
                <p className="kicker">Send a message</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Brief us in a few lines.
                </h2>
                <p className="mt-4 max-w-xl text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  Five fields, one paragraph. The named desk replies on the same thread.
                </p>

                <form
                  action="#"
                  onSubmit={handleSubmit}
                  className="mt-9 space-y-5"
                  noValidate={false}
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field id="name" label="Your name" required>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Full name"
                        className="form-input"
                      />
                    </Field>

                    <Field id="orgType" label="I am a" required>
                      <select
                        id="orgType"
                        name="orgType"
                        required
                        defaultValue=""
                        className="form-input"
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="student">Student</option>
                        <option value="college">College / Polytechnic</option>
                        <option value="school">School (K-12)</option>
                        <option value="business">Business / Startup</option>
                        <option value="hiring">Hiring team</option>
                      </select>
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field id="email" label="Work email" required>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@institution.in"
                        className="form-input"
                      />
                    </Field>

                    <Field id="phone" label="Phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[0-9+\-\s()]{7,}"
                        placeholder="+91 00000 00000"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <Field id="message" label="What you're solving" required>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="A few lines on the brief, the audience, and the timeline."
                      className="form-input resize-y min-h-[140px]"
                    />
                  </Field>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between pt-2">
                    <p className="text-[12px] text-[var(--color-fg-4)] max-w-md">
                      By sending this you agree to our handling of the message under our published
                      privacy policy. No marketing; the thread closes when the conversation does.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
                    >
                      Send the brief
                      <Send
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={2.25}
                      />
                    </button>
                  </div>
                </form>
              </div>

              {/* Direct contact */}
              <aside className="lg:col-span-5 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                <p className="kicker">Direct lines</p>
                <h2 className="mt-3 font-display text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                  Reach us another way.
                </h2>

                <ul className="mt-8 space-y-6">
                  <DirectRow
                    icon={Mail}
                    label="Email"
                    primary={
                      <a href="mailto:hello@alphinix.com" className="under-slide">
                        hello@alphinix.com
                      </a>
                    }
                    sub="Replied to during business hours; same thread, single owner."
                  />
                  <DirectRow
                    icon={Phone}
                    label="Phone"
                    primary={
                      <a href="tel:+910000000000" className="under-slide">
                        +91 00000 00000
                      </a>
                    }
                    sub="Mon to Fri · 10:00 to 18:00 IST."
                  />
                  <DirectRow
                    icon={MapPin}
                    label="Address"
                    primary={<>Alphinix · Pune, Maharashtra · India</>}
                    sub="Detailed address shared with confirmed visits."
                  />
                </ul>

                {/* Office hours band */}
                <div className="mt-10 border border-[var(--color-line)] rounded-[12px] bg-[var(--color-canvas)] p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-[var(--color-bg)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
                      <Clock className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                        Office hours
                      </p>
                      <p className="mt-2 font-display text-[18px] md:text-[20px] font-semibold tracking-[-0.014em] text-[var(--color-fg)]">
                        Monday — Friday · 10:00 — 18:00 IST
                      </p>
                      <p className="mt-2 text-[13px] leading-[1.65] text-[var(--color-fg-3)]">
                        Saturdays for scheduled sessions only. Closed on national holidays and the second
                        Saturday of each month.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* 03 — Who answers — 3 named desks */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 mb-10 md:mb-14">
              <div className="lg:col-span-7">
                <p className="kicker">Who answers</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Three desks. One thread per conversation.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Your message lands at one of the three desks below based on what you ticked. The desk
                  owner replies on the same thread; escalations stay in the same place.
                </p>
              </div>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8 lg:gap-x-12">
              {ANSWERS.map((a, i) => (
                <Reveal as="li" key={a.eyebrow} delay={i * 70}>
                  <article className="border-l-2 border-[var(--color-brand-700)] pl-5">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      Desk {String(i + 1).padStart(2, '0')} · {a.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-[22px] md:text-[24px] font-semibold tracking-[-0.02em] text-[var(--color-fg)]">
                      {a.name}
                    </h3>
                    <span aria-hidden="true" className="mt-3 block h-px w-12 bg-[var(--color-brand-700)]" />
                    <p className="mt-4 max-w-prose text-[13.5px] md:text-[14px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                      {a.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* 04 — Office locations — Pune HQ styled card (no map iframe) */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-start">
              <div className="lg:col-span-5">
                <p className="kicker">Office</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Operations run from one Pune office.
                </h2>
                <p className="mt-5 max-w-md text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  All five desks share a single floor, by design — short reporting lines, faster reviews,
                  and a calendar that lines up across segments. Visitors are welcome by appointment.
                </p>
                <a
                  href="mailto:hello@alphinix.com?subject=Visit%20request"
                  className="mt-7 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
                >
                  <span className="under-slide">Request a visit</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </a>
              </div>

              <article className="lg:col-span-7 relative overflow-hidden rounded-[16px] bg-[var(--color-brand-950)] text-white p-8 md:p-12 lg:p-14 brand-mesh color-card-edge">
                <div className="relative">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-200)]">
                    Headquarters
                  </p>
                  <h3 className="mt-5 font-display text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[0.98] tracking-[-0.028em] text-white text-balance">
                    Alphinix · Pune
                  </h3>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-10">
                    <AddressBlock
                      label="Address"
                      lines={[
                        'Pune, Maharashtra',
                        'India',
                        'Detailed address on confirmed visit',
                      ]}
                    />
                    <AddressBlock
                      label="Hours"
                      lines={[
                        'Monday — Friday',
                        '10:00 — 18:00 IST',
                        'Saturday by appointment',
                      ]}
                    />
                    <AddressBlock
                      label="Email"
                      lines={['hello@alphinix.com']}
                    />
                    <AddressBlock
                      label="Phone"
                      lines={['+91 00000 00000']}
                    />
                  </div>
                </div>
              </article>
            </div>
          </Container>
        </section>

        {/* 05 — Response-time commitment band — dark */}
        <section className="bg-[var(--color-fg)] text-white py-14 md:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
              <div className="lg:col-span-7">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-300)]">
                  Response-time commitment
                </p>
                <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-white text-balance">
                  One working day. Same thread. Named owner.
                </h2>
                <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15px] leading-[1.7] text-white/70">
                  Every message gets a response within one working day. The desk owner is named in the
                  reply, and the thread stays continuous from first message through to engagement close.
                </p>
              </div>
              <div className="lg:col-span-5">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-6">
                  <li>
                    <p className="font-display text-[44px] md:text-[56px] font-semibold leading-[0.9] tracking-[-0.035em] text-white">
                      1 day
                    </p>
                    <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                      First reply
                    </p>
                  </li>
                  <li>
                    <p className="font-display text-[44px] md:text-[56px] font-semibold leading-[0.9] tracking-[-0.035em] text-white">
                      1 thread
                    </p>
                    <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                      End-to-end
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 06 — Closing CTA */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Or jump straight in</p>
                <h2 className="mt-4 font-display text-[26px] md:text-[36px] lg:text-[42px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Already know which segment you&apos;re looking at?
                </h2>
                <p className="mt-5 max-w-xl text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  Skip the form and head straight to the segment hub. Each one has its own briefing
                  shortcut.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                  <a
                    href="/services"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-fg)] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-700)]"
                  >
                    All segments
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] ring-1 ring-inset ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    About the practice
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />

      {/* Scoped form-input styling — keeps the inputs on-system without arbitrary colors */}
      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-bg);
          border: 1px solid var(--color-line);
          border-radius: 6px;
          padding: 12px 14px;
          font-size: 14.5px;
          line-height: 1.5;
          color: var(--color-fg);
          font-family: inherit;
          transition: border-color 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
        }
        .form-input::placeholder { color: var(--color-fg-5); }
        .form-input:hover { border-color: var(--color-line-2); }
        .form-input:focus {
          outline: none;
          border-color: var(--color-brand-500);
          box-shadow: 0 0 0 3px rgba(58, 100, 220, 0.15);
          background: var(--color-bg);
        }
        select.form-input {
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, var(--color-fg-4) 50%),
                            linear-gradient(135deg, var(--color-fg-4) 50%, transparent 50%);
          background-position: calc(100% - 18px) 52%, calc(100% - 13px) 52%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
          padding-right: 36px;
        }
      `}</style>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-4)]"
      >
        {label}
        {required && <span className="text-[var(--color-brand-700)] ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}

function DirectRow({
  icon: Icon,
  label,
  primary,
  sub,
}: {
  icon: typeof Mail;
  label: string;
  primary: React.ReactNode;
  sub: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-fg-5)]">
          {label}
        </p>
        <p className="mt-2 font-display text-[16px] md:text-[17px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
          {primary}
        </p>
        <p className="mt-1 text-[12.5px] leading-[1.6] text-[var(--color-fg-4)]">{sub}</p>
      </div>
    </li>
  );
}

function AddressBlock({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-200)]">
        {label}
      </p>
      <div className="mt-3 space-y-1 text-[14px] leading-[1.55] text-white/85">
        {lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  );
}
