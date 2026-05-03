import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { heroImage } from '@/data/images';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-7">
            <p className="eyebrow mount-up">Pune · India · Technology platform</p>

            <h1
              className="mt-6 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance mount-up"
              style={{ fontSize: 'clamp(2.5rem, 6.4vw, 5.5rem)', lineHeight: 1 }}
            >
              Where India moves <br className="hidden sm:block" />
              from learning <br className="hidden sm:block" />
              <span className="text-[var(--color-brand-600)]">to earning.</span>
            </h1>

            <p
              className="mt-7 max-w-xl text-[1.0625rem] md:text-[1.125rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty mount-up"
              style={{ animationDelay: '120ms' }}
            >
              Alphinix is a Pune-based technology platform serving five connected audiences — students,
              colleges, schools, businesses, and hiring teams — from a single engineering and consulting
              practice.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4 mount-up"
              style={{ animationDelay: '220ms' }}
            >
              <ButtonLink href="/contact" variant="ink" size="lg" trailingArrow>
                Talk to us
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg">
                See services
              </ButtonLink>
            </div>

            {/* Inline mini-card link — optional, sits beneath CTAs */}
            <a
              href="#audiences"
              className="group mt-10 inline-flex items-center gap-3 mount-up"
              style={{ animationDelay: '320ms' }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-700)] transition-colors group-hover:bg-[var(--color-brand-100)]">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-[0.9375rem] text-[var(--color-ink)]/80">
                <span className="link-draw font-medium text-[var(--color-ink)]">Find your path</span>
                <span className="text-[var(--color-muted)]"> — five audiences, one practice</span>
              </span>
            </a>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Subtle blue accent shape behind image */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-[var(--color-brand-100)] blur-2xl opacity-70"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[var(--radius-xl)] bg-[var(--color-brand-50)] -z-10"
              />

              {/* Main image plate */}
              <div className="image-plate relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)]">
                <img
                  src={heroImage}
                  alt="Students collaborating around a shared workspace"
                  loading="eager"
                  fetchPriority="high"
                  width={1200}
                  height={1500}
                />
                {/* Floating badge — bottom-left */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="rounded-[var(--radius-md)] bg-[var(--color-paper)]/95 px-4 py-3 backdrop-blur-sm">
                    <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      Operating from
                    </p>
                    <p className="mt-0.5 font-display text-[1.125rem] font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                      Pune, Maharashtra
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[var(--color-paper)]/95 px-3 py-1.5 text-[0.6875rem] font-medium text-[var(--color-ink)] backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-seg-students)]" />
                    Active engagements
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
