import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { ArrowRight } from 'lucide-react';

export function ContactBand() {
  return (
    <section className="relative mesh-blue grain-ink text-[var(--color-paper)] overflow-hidden">
      <div className="grid-overlay" />

      {/* Top accent rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-500)]/60 to-transparent" />

      {/* Giant cut-off wordmark sitting at the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[14%] left-0 right-0 select-none text-center font-display font-black leading-none tracking-[-0.05em] text-[var(--color-paper)]/[0.05]"
        style={{ fontSize: 'clamp(8rem, 22vw, 22rem)' }}
      >
        ALPHINIX
      </div>

      <Container className="relative pt-24 md:pt-32 pb-32 md:pb-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-paper)]/55 dot-accent">
              Section 06 / Start a conversation
            </p>
            <h2
              className="mt-6 font-display font-bold tracking-[-0.025em] text-[var(--color-paper)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5.4vw, 4.75rem)', lineHeight: 0.98 }}
            >
              Tell us what you need <br />
              <span className="italic font-medium text-[var(--color-accent-300)]">— we will route the right team.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ButtonLink href="/contact" variant="accent" size="lg" trailingArrow>
                Contact Alphinix
              </ButtonLink>
              <a
                href="/services"
                className="link-draw text-[0.9375rem] font-medium text-[var(--color-paper)]/85 hover:text-[var(--color-paper)]"
              >
                Or read the full directory
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-paper)]/55">
              Direct routes
            </p>
            <ul className="mt-4 divide-y divide-[var(--color-paper)]/15">
              {segments.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/${s.slug}`}
                    className="group flex items-center justify-between py-3 text-[0.9375rem]"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: `var(${s.colorVar})` }}
                      />
                      <span className="font-mono text-[0.6875rem] text-[var(--color-paper)]/55">
                        {s.index}
                      </span>
                      <span className="link-draw text-[var(--color-paper)]">{s.name}</span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-[var(--color-paper)]/45 transition-all group-hover:text-[var(--color-paper)] group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
