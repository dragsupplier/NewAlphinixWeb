import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, ArrowUpRight, Calendar, Clock, Users } from 'lucide-react';
import { webinars } from '@/data/webinars';

const THEMES = [
  {
    code: 'Hiring',
    body: 'How we screen, how we report, and the rubric we hand to clients. Working sessions for hiring managers and TPOs.',
  },
  {
    code: 'Education',
    body: 'Placement calendars, faculty development, ATL reviews, K-12 STEM operations. For principals, TPOs, and academic heads.',
  },
  {
    code: 'Engineering',
    body: 'Production retrieval, eval harnesses, agent workflows. For engineering leads shipping LLM-backed features.',
  },
  {
    code: 'Operations',
    body: 'The unglamorous middle of an engagement — calendars, evidence packs, written reviews.',
  },
];

function dayMonth(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: d.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase(),
    year: d.toLocaleDateString('en-IN', { year: 'numeric' }),
    weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }).toUpperCase(),
  };
}

export function Webinars() {
  const upcoming = webinars.filter((w) => w.status === 'upcoming');
  const past = webinars.filter((w) => w.status === 'past');
  const next = upcoming[0];
  const queue = upcoming.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — next webinar takeover with prominent date block */}
        <section className="bg-[var(--color-bg)] pt-12 md:pt-16 lg:pt-20 pb-14 md:pb-20">
          <Container>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[var(--color-brand-700)]">
              Webinars / Live sessions
            </p>
            <h1 className="mt-6 font-display text-[36px] md:text-[52px] lg:text-[64px] font-semibold leading-[1.0] tracking-[-0.028em] text-[var(--color-fg)] text-balance max-w-4xl">
              Working sessions, run live. Calendar published a quarter ahead.
            </h1>

            {next ? (
              <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 border-y-2 border-[var(--color-fg)] py-10 md:py-12">
                {/* Massive date block */}
                <div className="lg:col-span-4">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                    Up next
                  </p>
                  <div className="mt-5 flex items-baseline gap-4">
                    <p className="font-display text-[88px] md:text-[120px] lg:text-[160px] font-semibold leading-[0.82] tracking-[-0.04em] text-[var(--color-fg)] tabular-nums">
                      {dayMonth(next.date).day}
                    </p>
                    <div>
                      <p className="font-display text-[28px] md:text-[36px] font-semibold tracking-[-0.02em] text-[var(--color-brand-700)]">
                        {dayMonth(next.date).month}
                      </p>
                      <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-4)] tabular-nums">
                        {dayMonth(next.date).weekday} · {dayMonth(next.date).year}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-fg-3)] tabular-nums">
                    {next.timeIST} · {next.durationMinutes} min
                  </p>
                </div>

                {/* Title + meta + register */}
                <div className="lg:col-span-8 lg:border-l lg:border-[var(--color-line)] lg:pl-10">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-4)]">
                    {next.topic} desk · For {next.audience}
                  </p>
                  <h2 className="mt-3 font-display text-[26px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                    {next.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[14.5px] md:text-[16px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                    {next.dek}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[var(--color-fg-4)]">
                    <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.14em]">
                      <Users className="h-3.5 w-3.5" strokeWidth={2} />
                      Hosted by {next.host}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={next.registerUrl ?? '/contact'}
                      className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
                    >
                      Reserve a seat
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </a>
                    <a
                      href="#calendar"
                      className="inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
                    >
                      See the calendar
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-10 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-fg-4)]">
                No live sessions scheduled. Watch this page or subscribe for the next quarter’s drop.
              </p>
            )}
          </Container>
        </section>

        {/* Calendar — date block left, content right, list rhythm */}
        <section id="calendar" className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 mb-10 md:mb-12 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">In the calendar</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  Sessions confirmed for the coming quarter.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14.5px] md:text-[15px] leading-[1.7] text-[var(--color-fg-3)]">
                  Each session is capped, hosted live, and shipped with the working artefacts in the
                  follow-up email. No replays for confirmed seats — that is the point of showing up.
                </p>
              </div>
            </div>

            <ol className="border-t-2 border-[var(--color-fg)]">
              {queue.length === 0 ? (
                <li className="py-12">
                  <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-fg-4)]">
                    Nothing else queued — next drop publishes on the first of the month.
                  </p>
                </li>
              ) : (
                queue.map((w, i) => {
                  const dm = dayMonth(w.date);
                  return (
                    <Reveal as="li" key={w.slug} delay={i * 60}>
                      <a
                        href={w.registerUrl ?? '/contact'}
                        className="row-hover group/row block border-b border-[var(--color-line)] py-7 md:py-9"
                      >
                        <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-3 items-baseline">
                          {/* Date block */}
                          <div className="col-span-3 sm:col-span-2">
                            <p className="font-display text-[36px] md:text-[48px] font-semibold leading-[0.9] tracking-[-0.03em] text-[var(--color-fg)] tabular-nums">
                              {dm.day}
                            </p>
                            <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-brand-700)]">
                              {dm.month}
                            </p>
                          </div>

                          {/* Title + dek */}
                          <div className="col-span-9 sm:col-span-7">
                            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-4)]">
                              {w.topic} · {w.audience}
                            </p>
                            <h3 className="mt-2 font-display text-[18px] md:text-[22px] lg:text-[24px] font-semibold tracking-[-0.02em] text-[var(--color-fg)] text-balance">
                              <span className="under-slide">{w.title}</span>
                            </h3>
                            <p className="mt-2 max-w-prose text-[13.5px] md:text-[14.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                              {w.dek}
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-4)] tabular-nums">
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-3 w-3" strokeWidth={2.25} />
                                {w.timeIST}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span>{w.durationMinutes} min</span>
                              <span aria-hidden="true">·</span>
                              <span>Hosted by {w.host}</span>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="col-span-12 sm:col-span-3 sm:text-right">
                            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-brand-700)] transition-transform group-hover/row:translate-x-0.5">
                              Reserve a seat
                              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                            </span>
                          </div>
                        </div>
                      </a>
                    </Reveal>
                  );
                })
              )}
            </ol>
          </Container>
        </section>

        {/* Themes — what we cover, two-column ribbon */}
        <section className="bg-[var(--color-bg)] py-16 md:py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16">
              <div className="lg:col-span-5">
                <p className="kicker">What we cover</p>
                <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Four desks. One calendar.
                </h2>
                <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  Sessions are run by the lead actually doing the work — not a dedicated speakers
                  bureau. The artefacts you take home are the ones we use internally.
                </p>
              </div>

              <ol className="lg:col-span-7 border-t border-[var(--color-fg)]">
                {THEMES.map((t, i) => (
                  <li key={t.code} className="border-b border-[var(--color-line)] py-5 md:py-6">
                    <div className="grid grid-cols-12 gap-x-4">
                      <p className="col-span-4 md:col-span-3 font-display text-[20px] md:text-[26px] font-semibold leading-[1] tracking-[-0.025em] text-[var(--color-brand-700)]">
                        {t.code}
                      </p>
                      <p className="col-span-7 md:col-span-8 text-[13.5px] md:text-[14.5px] leading-[1.6] text-[var(--color-fg-3)]">
                        {t.body}
                      </p>
                      <span className="col-span-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)] tabular-nums text-right">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* Past sessions — archive list */}
        <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 mb-10 items-end">
              <div className="lg:col-span-7">
                <p className="kicker">Archive</p>
                <h2 className="mt-3 font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.06] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
                  Past sessions, with recordings on request.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14px] leading-[1.7] text-[var(--color-fg-3)]">
                  Recordings are shared on request to people in the relevant audience. Write to us
                  with your role and we route the link.
                </p>
              </div>
            </div>

            <ol className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {past.map((w) => {
                const dm = dayMonth(w.date);
                return (
                  <li key={w.slug}>
                    <a
                      href={w.recordingUrl ?? '/contact'}
                      className="row-hover group/row grid grid-cols-12 items-baseline gap-x-4 py-5 md:py-6"
                    >
                      <span className="col-span-3 sm:col-span-2 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--color-fg-2)] tabular-nums">
                        {dm.day} {dm.month} · {dm.year}
                      </span>
                      <span className="col-span-9 sm:col-span-7 font-display text-[16px] md:text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)] text-balance">
                        <span className="under-slide">{w.title}</span>
                      </span>
                      <span className="col-span-12 sm:col-span-3 sm:text-right inline-flex items-center sm:justify-end gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-brand-700)]">
                        Watch recording
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </Container>
        </section>

        {/* CTA — host a private session, dark slab */}
        <section className="bg-[var(--color-fg)] text-white">
          <Container>
            <div className="py-16 md:py-20 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 items-end">
                <div className="lg:col-span-7">
                  <p className="kicker kicker-on-dark">Private sessions</p>
                  <h2 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-white text-balance">
                    Host a working session for your campus, your team, or your hiring panel.
                  </h2>
                  <p className="mt-5 max-w-2xl text-[14.5px] md:text-[15.5px] leading-[1.7] text-white/70">
                    Tell us the audience, the room, and the outcome you want at the end of ninety
                    minutes. We tailor the working artefacts and run the session live, on-site or remote.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                    <a
                      href="/contact?topic=private-session"
                      className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[14px] font-semibold text-[var(--color-fg)] transition-colors hover:bg-white/90"
                    >
                      Brief us
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </a>
                    <a
                      href="#calendar"
                      className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-transparent px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-inset ring-white/30 transition-colors hover:ring-white/60"
                    >
                      <Calendar className="h-4 w-4" strokeWidth={2} />
                      See public calendar
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
