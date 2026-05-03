import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

const sidebarRows = [
  'Industrial training and placements',
  'College infrastructure and accreditation',
  'Schools, STEM, and ATL programs',
  'Business software, AI, and cloud',
  'Recruitment and staffing',
];

export function Hero() {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-24">
      <Container>
        {/* Masthead row — editorial label / serial */}
        <div className="flex items-baseline justify-between font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span>Est. Pune · Maharashtra · India</span>
          <span className="hidden sm:inline">Section 01 — The platform</span>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          {/* Headline column */}
          <div className="lg:col-span-8">
            <h1
              className="font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.625rem, 7vw, 6.25rem)', lineHeight: 0.96 }}
            >
              Education, technology, <br className="hidden sm:block" />
              and hiring — built as <br className="hidden sm:block" />
              <span className="italic font-medium tracking-[-0.03em]">one practice.</span>
            </h1>

            <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/70 text-pretty">
              Alphinix serves five connected audiences from a single Pune-based team — students moving into work,
              institutions building capability, and the businesses that hire them.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ButtonLink href="#audiences" variant="ink" size="lg" trailingArrow>
                Choose where you sit
              </ButtonLink>
              <a
                href="/about"
                className="link-draw text-[0.9375rem] font-medium text-[var(--color-ink)]"
              >
                Read about Alphinix
              </a>
            </div>
          </div>

          {/* Sidebar — five-row directory (NOT cards) */}
          <aside
            className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-[var(--color-ink)]/10"
            aria-label="What Alphinix does"
          >
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              What we do
            </p>
            <ul className="mt-4 divide-y divide-[var(--color-ink)]/10">
              {sidebarRows.map((row, i) => (
                <li
                  key={row}
                  className="flex items-baseline gap-3 py-3.5"
                >
                  <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.9375rem] leading-snug text-[var(--color-ink)]">
                    {row}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
