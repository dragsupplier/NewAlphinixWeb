import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { ArrowUpRight } from 'lucide-react';

export function ContactBand() {
  return (
    <section className="bg-[var(--color-navy-900)] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 py-24 md:py-32">
          <div className="lg:col-span-7">
            <p className="kicker kicker-on-dark">Start a conversation</p>
            <h2
              className="mt-6 font-display font-bold tracking-[-0.025em] text-white text-balance"
              style={{ fontSize: 'clamp(2.5rem, 5.6vw, 4.75rem)', lineHeight: 0.98 }}
            >
              Tell us what you need. We will route the right team.
            </h2>
            <p className="mt-7 max-w-xl text-[1rem] md:text-[1.0625rem] leading-relaxed text-white/75 text-pretty">
              College director, school principal, founder, or hiring lead — describe the outcome you need and
              we will respond with a named owner and a scoped plan.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="/contact"
                size="lg"
                trailingArrow
                className="!bg-white !text-[var(--color-navy-900)] hover:!bg-white/90"
              >
                Talk to us
              </ButtonLink>
              <ButtonLink
                href="/services"
                size="lg"
                className="!bg-transparent !text-white !ring-1 !ring-inset !ring-white/35 hover:!ring-white/65"
              >
                See the directory
              </ButtonLink>
            </div>
          </div>

          {/* Direct routes panel — plain hairline list, no gradient */}
          <div className="lg:col-span-5">
            <p className="kicker kicker-on-dark">Direct routes</p>
            <ul className="mt-5 border-t border-white/15">
              {segments.map((s) => (
                <li key={s.slug} className="border-b border-white/15">
                  <a
                    href={`/${s.slug}`}
                    className="group flex items-center justify-between py-4 text-[0.9375rem]"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/55">
                        {s.index}
                      </span>
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

            <div className="mt-7 grid grid-cols-2 gap-6">
              <div>
                <p className="kicker kicker-on-dark">Response within</p>
                <p className="mt-2 font-display text-[1.125rem] font-bold text-white">1 working day</p>
              </div>
              <div>
                <p className="kicker kicker-on-dark">Operating from</p>
                <p className="mt-2 font-display text-[1.125rem] font-bold text-white">Pune, India</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
