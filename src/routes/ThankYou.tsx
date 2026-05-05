import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight, Check, Clock, Mail, MessageSquare } from 'lucide-react';

const TIMELINE = [
  {
    label: 'In your inbox',
    title: 'A confirmation, instantly.',
    body: 'A copy of your message lands in your inbox now. The reply-to is a real address — replying threads it back into the same conversation.',
  },
  {
    label: 'Within 1 working day',
    title: 'A human reads it, names themselves.',
    body: 'A consultant reviews the brief and replies from a named address with the next step — a call, a clarifying question, or a written response.',
  },
  {
    label: 'Within 3 working days',
    title: 'A scoped response.',
    body: 'A short proposal, an introduction to the right pipeline, or a date for a working session. We do not let messages go cold.',
  },
];

const WHILE_YOU_WAIT = [
  {
    href: '/case-studies',
    eyebrow: '01',
    title: 'Read a recent engagement',
    body: 'Two- and three-page write-ups of how recent programmes ran end to end.',
  },
  {
    href: '/blog',
    eyebrow: '02',
    title: 'Skim the field notes',
    body: 'Quarterly notes on hiring trends, academic operations, and applied AI.',
  },
  {
    href: '/services',
    eyebrow: '03',
    title: 'Browse the full service map',
    body: 'Twenty-seven services across five segments, indexed for easy scanning.',
  },
];

export function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — confirmation tile + timeline preview */}
        <section className="relative bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-50)] px-3 py-1.5 ring-1 ring-[var(--color-brand-100)]">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-[var(--color-brand-700)] text-white">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                    Message received
                  </span>
                </span>
                <h1 className="mt-6 font-display text-[40px] md:text-[60px] lg:text-[72px] font-semibold leading-[0.98] tracking-[-0.028em] text-[var(--color-fg)] text-balance max-w-4xl">
                  Thanks — your note
                  <br />
                  <span className="text-[var(--color-brand-700)]">is in the right inbox.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-[15.5px] md:text-[17px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                  We will be in touch on the email you submitted. Most replies go out within one working day, with a
                  scoped response inside three. If you wrote in for a programme, we route the brief to the right
                  cohort lead — no generic queue.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="/"
                    className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
                  >
                    Back to home
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                  >
                    Browse all services
                  </a>
                </div>
              </div>

              {/* Reference card — what happens next */}
              <aside className="lg:col-span-5">
                <div className="rounded-[10px] border border-[var(--color-line)] bg-[var(--color-canvas)] overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                      Reference
                    </p>
                    <span className="font-mono text-[11px] tabular-nums text-[var(--color-fg-5)]">
                      ALX-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 9000) + 1000)}
                    </span>
                  </div>
                  <dl className="divide-y divide-[var(--color-line)]">
                    <Row icon={Clock} label="Expected reply" value="Within 1 working day" />
                    <Row icon={Mail} label="Reply-to address" value="hello@alphinix.in" />
                    <Row icon={MessageSquare} label="Channel" value="Email thread (single)" />
                  </dl>
                  <div className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-4">
                    <p className="text-[12.5px] leading-[1.55] text-[var(--color-fg-3)]">
                      If you do not see our email in 24 hours, check the promotions / spam folder, then write to
                      <a href="mailto:hello@alphinix.in" className="font-medium text-[var(--color-brand-700)] ml-1">
                        hello@alphinix.in
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Timeline — three-step what-happens-next */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-16 md:py-20">
          <Container>
            <div className="max-w-3xl mb-12 md:mb-16">
              <p className="kicker">What happens next</p>
              <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                A clean handoff, on a clear timeline.
              </h2>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8">
              {TIMELINE.map((t, i) => (
                <Reveal as="li" key={t.title} delay={i * 80}>
                  <article className="relative">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                      Step {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                      {t.label}
                    </p>
                    <h3 className="mt-4 font-display text-[20px] md:text-[22px] font-semibold tracking-[-0.018em] text-[var(--color-fg)] leading-[1.2] text-balance">
                      {t.title}
                    </h3>
                    <span aria-hidden="true" className="mt-4 block h-px w-12 bg-[var(--color-brand-700)]" />
                    <p className="mt-4 text-[14px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                      {t.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* While you wait — three reading suggestions */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 mb-10 md:mb-14 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">While you wait</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.08] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Three reads worth your three minutes.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] leading-[1.7] text-[var(--color-fg-3)]">
                  Most people read one of these while waiting for our reply. They tell you more about how we work
                  than any pitch deck would.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {WHILE_YOU_WAIT.map((c, i) => (
                <Reveal key={c.href} delay={i * 60}>
                  <a
                    href={c.href}
                    className="group/c flex h-full flex-col rounded-[10px] border border-[var(--color-line)] bg-[var(--color-canvas)] p-6 md:p-7 transition-all hover:border-[var(--color-brand-700)]/35 hover:bg-[var(--color-bg)] hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] tabular-nums">
                        {c.eyebrow}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover/c:text-[var(--color-brand-700)] group-hover/c:translate-x-0.5 group-hover/c:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="mt-6 font-display text-[19px] md:text-[20px] font-semibold leading-[1.22] tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                      {c.body}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 px-5 py-4">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[6px] bg-[var(--color-bg)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-line)]">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
      </span>
      <div className="flex-1 min-w-0">
        <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
          {label}
        </dt>
        <dd className="mt-1 font-display text-[14.5px] font-semibold tracking-[-0.012em] text-[var(--color-fg)]">
          {value}
        </dd>
      </div>
    </div>
  );
}
