import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { ctaImage } from '@/data/images';
import { ArrowUpRight } from 'lucide-react';

export function ContactBand() {
  return (
    <section className="relative grain-ink bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden">
      {/* Soft brand glow at top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-[var(--color-brand-500)]/20 blur-3xl"
      />

      <Container className="relative py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-stretch">
          {/* Left — text + CTA */}
          <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-[0.75rem] font-medium uppercase tracking-[0.06em] text-[var(--color-brand-300)]">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-brand-300)]" />
                Start a conversation
              </p>
              <h2
                className="mt-6 font-display font-bold tracking-[-0.025em] text-[var(--color-paper)] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 5.4vw, 4.75rem)', lineHeight: 0.98 }}
              >
                Tell us what you need. <br />
                We will route the right team.
              </h2>
              <p className="mt-6 max-w-lg text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-paper)]/75 text-pretty">
                Whether you are a college director, a school principal, a founder, or a hiring lead — describe the
                outcome you need and we will respond with a named owner and a scoped plan.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" variant="accent" size="lg" trailingArrow>
                Contact Alphinix
              </ButtonLink>
              <ButtonLink
                href="/services"
                size="lg"
                className="!bg-transparent !text-[var(--color-paper)] !ring-1 !ring-inset !ring-[var(--color-paper)]/25 hover:!ring-[var(--color-paper)]/60"
              >
                See the directory
              </ButtonLink>
            </div>

            {/* Direct routes — inline strip */}
            <div className="mt-12 border-t border-[var(--color-paper)]/15 pt-6">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-paper)]/55">
                Direct routes
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                {segments.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`/${s.slug}`}
                      className="group flex items-center justify-between py-1 text-[0.9375rem]"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: `var(${s.colorVar})` }}
                        />
                        <span className="link-draw text-[var(--color-paper)]">{s.name}</span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-[var(--color-paper)]/45 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — image */}
          <div className="lg:col-span-5">
            <div className="image-plate aspect-[4/5] lg:aspect-[5/6] rounded-[var(--radius-xl)] overflow-hidden">
              <img
                src={ctaImage}
                alt="Team collaborating in a working session"
                loading="lazy"
                width={1200}
                height={1500}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
