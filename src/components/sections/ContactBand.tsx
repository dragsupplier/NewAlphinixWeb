import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { ArrowUpRight } from 'lucide-react';

export function ContactBand() {
  return (
    <section className="relative overflow-hidden">
      {/* Brand-blue gradient surface */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-900) 60%, var(--color-ink-deep) 100%)',
        }}
      />
      {/* Soft glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[10%] h-[420px] w-[420px] rounded-full bg-white/8 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[var(--color-accent-500)]/15 blur-[120px]"
      />
      {/* Faint blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 35%, transparent 100%)',
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 py-24 md:py-32">
          {/* Headline + CTAs */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 font-mono text-[0.75rem] font-medium uppercase tracking-[0.06em] text-white/80">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
              Start a conversation
            </p>
            <h2
              className="mt-6 font-display font-bold tracking-[-0.025em] text-white text-balance"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.25rem)', lineHeight: 0.98 }}
            >
              Tell us what you need. <br />
              <span className="italic font-medium text-white/85">We will route the right team.</span>
            </h2>
            <p className="mt-7 max-w-lg text-[1rem] md:text-[1.0625rem] leading-relaxed text-white/80 text-pretty">
              College director, school principal, founder, or hiring lead — describe the outcome you need and
              we will respond with a named owner and a scoped plan.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="/contact"
                size="lg"
                trailingArrow
                className="!bg-white !text-[var(--color-ink)] hover:!bg-white/90"
              >
                Talk to us
              </ButtonLink>
              <ButtonLink
                href="/services"
                size="lg"
                className="!bg-transparent !text-white !ring-1 !ring-inset !ring-white/30 hover:!bg-white/[0.06] hover:!ring-white/55"
              >
                See the directory
              </ButtonLink>
            </div>
          </div>

          {/* Direct routes panel */}
          <div className="lg:col-span-5">
            <div className="rounded-[var(--radius-lg)] border border-white/15 bg-white/[0.04] p-7 md:p-8 backdrop-blur-sm">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
                Direct routes
              </p>
              <ul className="mt-5 divide-y divide-white/10">
                {segments.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/${s.slug}`}
                      className="group flex items-center justify-between py-3.5 text-[0.9375rem]"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: `var(${s.colorVar})` }}
                        />
                        <span className="font-mono text-[0.6875rem] text-white/55">{s.index}</span>
                        <span className="link-draw text-white">{s.name}</span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/55">
                    Response within
                  </p>
                  <p className="mt-1 font-display text-[1.125rem] font-bold tracking-[-0.01em] text-white">
                    1 working day
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/55">
                    Operating from
                  </p>
                  <p className="mt-1 font-display text-[1.125rem] font-bold tracking-[-0.01em] text-white">
                    Pune, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
