import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-brand-800)] text-white">
      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 py-20 md:py-28">
          <div className="lg:col-span-7">
            <p className="kicker kicker-on-dark">Start a conversation</p>
            <h2 className="mt-5 font-display text-[36px] md:text-[48px] lg:text-[60px] font-semibold leading-[1.02] tracking-[-0.025em] text-white text-balance">
              Tell us what you need.<br />
              <span className="text-[var(--color-brand-200)]">We will route the right team.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] md:text-[16px] leading-[1.65] text-white/75 text-pretty">
              College director, school principal, founder, or hiring lead — describe the outcome you need
              and we will respond with a named owner and a scoped plan.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink
                href="/contact"
                size="lg"
                trailingArrow
                className="!bg-white !text-[var(--color-brand-900)] hover:!bg-white/90"
              >
                Talk to us
              </ButtonLink>
              <ButtonLink
                href="/services"
                size="lg"
                className="!bg-transparent !text-white !ring-1 !ring-inset !ring-white/30 hover:!ring-white/60"
              >
                See the directory
              </ButtonLink>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 max-w-xl">
              <div>
                <p className="kicker kicker-on-dark">Response within</p>
                <p className="mt-2 font-display text-[18px] font-semibold tracking-[-0.018em] text-white">
                  1 working day
                </p>
              </div>
              <div>
                <p className="kicker kicker-on-dark">Operating from</p>
                <p className="mt-2 font-display text-[18px] font-semibold tracking-[-0.018em] text-white">
                  Pune, India
                </p>
              </div>
              <div>
                <p className="kicker kicker-on-dark">Engagements</p>
                <p className="mt-2 font-display text-[18px] font-semibold tracking-[-0.018em] text-white">
                  Long-form
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="kicker kicker-on-dark">Direct routes</p>
            <ul className="mt-5 border-t border-white/15">
              {segments.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 50} className="border-b border-white/15">
                  <a
                    href={`/${s.slug}`}
                    className="group grid grid-cols-12 items-baseline gap-3 py-5"
                  >
                    <span className="col-span-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                      {s.index}
                    </span>
                    <div className="col-span-8">
                      <span className="under-slide font-display text-[17px] md:text-[18px] font-semibold tracking-[-0.018em] text-white">
                        {s.name}
                      </span>
                      <p className="mt-1 text-[13px] leading-[1.55] text-white/60 line-clamp-1">
                        {s.outcome}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="col-span-2 ml-auto h-4 w-4 text-white/45 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
