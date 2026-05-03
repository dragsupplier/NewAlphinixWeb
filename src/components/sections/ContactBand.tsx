import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';

export function ContactBand() {
  return (
    <section className="border-t border-[var(--color-ink)]/10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Section 06 — Start a conversation
            </p>
            <h2
              className="mt-6 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 5.4vw, 4.75rem)', lineHeight: 0.98 }}
            >
              Tell us what you need <br />
              <span className="italic font-medium">— we will route the right team.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ButtonLink href="/contact" variant="ink" size="lg" trailingArrow>
                Contact Alphinix
              </ButtonLink>
              <a
                href="/services"
                className="link-draw text-[0.9375rem] font-medium text-[var(--color-ink)]"
              >
                Or read the full directory
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Direct routes
            </p>
            <ul className="mt-4 divide-y divide-[var(--color-ink)]/10">
              {segments.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/${s.slug}`}
                    className="group flex items-center justify-between py-3 text-[0.9375rem]"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">
                        {s.index}
                      </span>
                      <span className="link-draw text-[var(--color-ink)]">{s.name}</span>
                    </span>
                    <span className="text-[var(--color-muted)] transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
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
