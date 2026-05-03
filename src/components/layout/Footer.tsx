import { Container } from '@/components/ui/Container';
import { Wordmark } from '@/components/ui/Wordmark';
import { footerColumns } from '@/data/nav';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative grain-ink bg-[var(--color-ink-deep)] text-[var(--color-paper)]">
      {/* Hairline accent separating the contact band from the footer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-paper)]/10" />
      <Container className="py-20">
        {/* Top row — large editorial statement */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Wordmark tone="paper" />
            <h3 className="mt-8 font-display text-[2.25rem] font-bold leading-[1.02] tracking-[-0.02em] md:text-[3rem] text-balance">
              Tell us where you sit —<br />
              we will route the right team to you.
            </h3>
            <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-[var(--color-paper)]/70">
              Pune-based. Working with students, institutions, and businesses across India. Talk to us about a
              program, an engagement, or a hire.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a
                href="/contact"
                className="link-draw text-[0.9375rem] font-medium"
              >
                Start a conversation →
              </a>
              <a
                href="/services"
                className="link-draw text-[0.9375rem] text-[var(--color-paper)]/70"
              >
                See all services
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="font-display text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-paper)]/55">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[0.9375rem] text-[var(--color-paper)]/85 transition-colors hover:text-[var(--color-paper)]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row — meta */}
        <div className="mt-20 rule-light" />
        <div className="mt-6 flex flex-col gap-4 text-[0.8125rem] text-[var(--color-paper)]/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} Alphinix. Pune, Maharashtra, India.</p>
          <p className="font-mono uppercase tracking-[0.16em] text-[0.6875rem]">
            Education · Technology · Hiring
          </p>
        </div>
      </Container>
    </footer>
  );
}
