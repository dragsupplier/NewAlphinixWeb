import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { studentServices } from '@/data/studentServices';
import { ContactStrip, StudentPageShell } from '@/components/sections/student/StudentSections';
import { ArrowRight, Check, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const STEPS = [
  {
    icon: Sparkles,
    title: 'Submit the form',
    body: 'Two-three minutes. Tell us your year of study, current programme, and what you are preparing for.',
  },
  {
    icon: Clock,
    title: 'We respond in one working day',
    body: 'A short conversation to confirm the right programme and the next cohort that fits your schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'Confirm your slot',
    body: 'Programme fee, schedule, and the artefacts you will walk away with — all written down before you commit.',
  },
];

export function StudentApply() {
  const [submitted, setSubmitted] = useState(false);
  const [pickedProgramme, setPickedProgramme] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StudentPageShell>
        {/* Hero */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-14">
          <Container>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-canvas)] border border-[var(--color-line)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-brand-700)] font-semibold">
                <span aria-hidden="true" className="block h-1 w-1 rounded-full bg-[var(--color-brand-700)]" />
                Apply
              </span>
              <h1 className="mt-5 font-display text-[36px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                One application.{' '}
                <span className="text-[var(--color-brand-700)]">All seven programmes.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-[15.5px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                Tell us a little about where you are and what you are preparing for — we will respond with the
                right programme, the next cohort dates, and the fee structure within one working day.
              </p>
            </div>
          </Container>
        </section>

        {/* Two-column: form on left, "what happens next" on right */}
        <section className="bg-[var(--color-bg)] pb-16 md:pb-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              {/* Form */}
              <div className="lg:col-span-7">
                <div className="border border-[var(--color-line)] rounded-[10px] bg-[var(--color-bg)] p-6 md:p-8 lg:p-10">
                  {submitted ? (
                    <SubmittedState />
                  ) : (
                    <ApplicationForm
                      pickedProgramme={pickedProgramme}
                      setPickedProgramme={setPickedProgramme}
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                    />
                  )}
                </div>
              </div>

              {/* What happens next */}
              <div className="lg:col-span-5">
                <p className="kicker">What happens next</p>
                <h2 className="mt-3 font-display text-[24px] md:text-[28px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                  A short, predictable path from application to confirmed slot.
                </h2>

                <ol className="mt-8 space-y-5">
                  {STEPS.map((s, i) => (
                    <Reveal as="li" key={s.title} delay={i * 70}>
                      <NextStepRow step={i + 1} icon={s.icon} title={s.title} body={s.body} />
                    </Reveal>
                  ))}
                </ol>

                <div className="mt-8 border-t border-[var(--color-line)] pt-6">
                  <p className="kicker">Considering more than one programme?</p>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[var(--color-fg-3)]">
                    Pick the one closest to your goal in the form. We will discuss the others on the call and
                    align them with your schedule.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <ContactStrip />
      </StudentPageShell>
      <Footer />
    </div>
  );
}

/* ───── Application form ─────────────────────────────────── */

function ApplicationForm({
  pickedProgramme,
  setPickedProgramme,
  onSubmit,
}: {
  pickedProgramme: string;
  setPickedProgramme: (s: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div>
        <p className="kicker">Application</p>
        <h2 className="mt-2 font-display text-[22px] md:text-[24px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
          Apply for a programme
        </h2>
        <p className="mt-1 text-[13.5px] text-[var(--color-fg-3)]">
          Required fields marked with an asterisk.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full name *" name="name" placeholder="Your full name" required />
        <Field label="Email *" name="email" type="email" placeholder="you@example.in" required />
        <Field label="Phone *" name="phone" type="tel" placeholder="+91 00000 00000" required />
        <Field label="College / Institute *" name="college" placeholder="Your college or institute" required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Select
          label="Programme of study *"
          name="programmeOfStudy"
          required
          options={[
            'Engineering — 1st year',
            'Engineering — 2nd year',
            'Engineering — 3rd year',
            'Engineering — Final year',
            'Diploma',
            'BCA',
            'MCA',
            'BSc / BSc CS',
            'Other',
          ]}
        />
        <Select
          label="City"
          name="city"
          options={['Pune', 'Mumbai', 'Bangalore', 'Hyderabad', 'Delhi NCR', 'Chennai', 'Other']}
        />
      </div>

      <div>
        <p className="block text-[12px] font-medium text-[var(--color-fg-2)] mb-3">Programme of interest *</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {studentServices.map((s) => {
            const isPicked = pickedProgramme === s.slug;
            return (
              <label
                key={s.slug}
                className={`flex items-start gap-2.5 cursor-pointer rounded-[6px] border p-3 transition-all ${
                  isPicked
                    ? 'border-[var(--color-brand-700)] bg-[var(--color-brand-50)]'
                    : 'border-[var(--color-line)] hover:border-[var(--color-line-2)] hover:bg-[var(--color-canvas)]'
                }`}
              >
                <input
                  type="radio"
                  name="programme"
                  value={s.slug}
                  checked={isPicked}
                  onChange={() => setPickedProgramme(s.slug)}
                  required
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border-[1.5px] ${
                    isPicked
                      ? 'border-[var(--color-brand-700)] bg-[var(--color-brand-700)]'
                      : 'border-[var(--color-line-2)] bg-[var(--color-bg)]'
                  }`}
                >
                  {isPicked && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[13px] font-semibold text-[var(--color-fg)]">{s.name}</span>
                  <span className="block mt-0.5 text-[11.5px] leading-[1.45] text-[var(--color-fg-3)] line-clamp-1">
                    {s.tagline}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <Textarea
        label="What are you preparing for?"
        name="goal"
        placeholder="A few lines on the role, company, or skill you are working towards."
      />

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-[var(--color-line-2)] text-[var(--color-brand-700)] focus:ring-[var(--color-brand-500)]"
        />
        <label htmlFor="consent" className="text-[12.5px] leading-[1.5] text-[var(--color-fg-3)]">
          I agree to be contacted about programmes, cohort dates, and fees. I have read the{' '}
          <a href="/privacy-policy" className="under-slide text-[var(--color-brand-700)] font-medium">
            privacy policy
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-6 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
      >
        Submit application
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
      </button>
    </form>
  );
}

/* ───── Submitted success state ──────────────────────────── */

function SubmittedState() {
  return (
    <div className="text-center py-8 md:py-10">
      <span className="inline-grid h-14 w-14 place-items-center rounded-full bg-[var(--color-brand-50)] ring-1 ring-[var(--color-brand-100)]">
        <Check className="h-6 w-6 text-[var(--color-brand-700)]" strokeWidth={2.5} />
      </span>
      <h3 className="mt-6 font-display text-[26px] md:text-[28px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
        Application received.
      </h3>
      <p className="mt-3 max-w-md mx-auto text-[14.5px] leading-[1.65] text-[var(--color-fg-3)]">
        We will respond within one working day with the next cohort dates, the programme fee, and the
        confirmation form. Check your email for a copy of what you submitted.
      </p>
      <a
        href="/students"
        className="mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
      >
        Back to all programmes →
      </a>
    </div>
  );
}

/* ───── Form primitives ──────────────────────────────────── */

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium text-[var(--color-fg-2)] mb-1.5">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-[6px] bg-[var(--color-bg)] border border-[var(--color-line)] px-3.5 py-2.5 text-[14px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-5)] outline-none transition-colors focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium text-[var(--color-fg-2)] mb-1.5">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-[6px] bg-[var(--color-bg)] border border-[var(--color-line)] px-3.5 py-2.5 text-[14px] text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium text-[var(--color-fg-2)] mb-1.5">{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-[6px] bg-[var(--color-bg)] border border-[var(--color-line)] px-3.5 py-2.5 text-[14px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-5)] outline-none transition-colors focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 resize-y"
      />
    </label>
  );
}

/* ───── Step row in "What happens next" ──────────────────── */

function NextStepRow({
  step,
  icon: Icon,
  title,
  body,
}: {
  step: number;
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-[var(--color-canvas)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
          Step {String(step).padStart(2, '0')}
        </p>
        <p className="mt-1 font-display text-[15.5px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
          {title}
        </p>
        <p className="mt-1.5 text-[13px] leading-[1.6] text-[var(--color-fg-3)]">{body}</p>
      </div>
    </li>
  );
}
