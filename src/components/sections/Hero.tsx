import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { heroImage } from '@/data/images';
import { segments } from '@/data/segments';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 -z-10 hero-overlay" />

      {/* Top utility row — operating ticker */}
      <div className="relative border-b border-white/10">
        <Container>
          <div className="flex h-9 items-center justify-between text-[0.6875rem] uppercase tracking-[0.16em] text-white/65 font-mono">
            <span className="hidden sm:inline">Pune · Maharashtra · India</span>
            <span className="text-white/85">Technology platform · Education · Hiring</span>
            <span className="hidden sm:inline">Established 2024</span>
          </div>
        </Container>
      </div>

      {/* Hero content */}
      <Container className="relative">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 items-end pb-16 md:pb-24 lg:pb-32"
          style={{ minHeight: 'min(720px, 80vh)', paddingTop: '7rem' }}
        >
          <div className="lg:col-span-9 mount-up">
            <p className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-white/80">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent-500)]" />
              A Pune-based technology platform
            </p>

            <h1
              className="mt-7 font-display font-bold tracking-[-0.025em] text-white text-balance"
              style={{ fontSize: 'clamp(2.5rem, 7.4vw, 6.5rem)', lineHeight: 0.96 }}
            >
              Where India moves <br className="hidden sm:block" />
              from learning <br className="hidden sm:block" />
              <span className="italic font-medium">to earning.</span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-[1rem] md:text-[1.125rem] leading-relaxed text-white/85 text-pretty mount-up"
              style={{ animationDelay: '120ms' }}
            >
              We serve five connected audiences from a single engineering and consulting practice — students,
              colleges, schools, businesses, and the hiring teams that absorb the talent we train.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4 mount-up"
              style={{ animationDelay: '220ms' }}
            >
              <ButtonLink href="/contact" variant="ink" size="lg" trailingArrow className="!bg-white !text-[var(--color-ink)] hover:!bg-white/90">
                Talk to us
              </ButtonLink>
              <ButtonLink
                href="/services"
                size="lg"
                className="!bg-white/[0.06] !text-white !ring-1 !ring-inset !ring-white/30 hover:!bg-white/[0.12] hover:!ring-white/55"
              >
                See services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom audience-strip — sits inside the hero, anchored at bottom */}
      <div className="relative border-t border-white/15 bg-[rgba(10,14,39,0.55)] backdrop-blur-sm">
        <Container>
          <ul className="flex items-stretch divide-x divide-white/10">
            {segments.map((s) => (
              <li key={s.slug} className="flex-1">
                <a
                  href={`/${s.slug}`}
                  className="group flex h-full flex-col gap-1 px-3 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/55">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: `var(${s.colorVar})` }}
                    />
                    {s.index}
                  </span>
                  <span className="font-display text-[0.9375rem] sm:text-[1.0625rem] md:text-[1.125rem] font-bold tracking-[-0.01em] text-white">
                    {s.name}
                  </span>
                  <span className="hidden md:block text-[0.75rem] leading-snug text-white/55">
                    {s.audience}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
