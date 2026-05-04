import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function ContactBand() {
  return (
    <section className="relative bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 py-20 md:py-28">
          {/* Direct routes — moved to the left */}
          <div className="lg:col-span-5 lg:order-1">
            <p className="kicker">Direct routes</p>
            <ul className="mt-5 border-t border-[var(--color-line)]">
              {segments.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 50} className="border-b border-[var(--color-line)]">
                  <a
                    href={`/${s.slug}`}
                    className="group grid grid-cols-12 items-baseline gap-3 py-5"
                  >
                    <span className="col-span-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                      {s.index}
                    </span>
                    <div className="col-span-8">
                      <span className="under-slide font-display text-[17px] md:text-[18px] font-semibold tracking-[-0.018em] text-[var(--color-fg)]">
                        {s.name}
                      </span>
                      <p className="mt-1 text-[13px] leading-[1.55] text-[var(--color-fg-3)] line-clamp-1">
                        {s.outcome}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="col-span-2 ml-auto h-4 w-4 text-[var(--color-fg-5)] transition-all group-hover:text-[var(--color-brand-700)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Headline + body + CTAs — moved to the right */}
          <div className="lg:col-span-7 lg:order-2">
            <p className="kicker">Start a conversation</p>
            <h2 className="mt-5 font-display text-[36px] md:text-[48px] lg:text-[60px] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
              Tell us what you need.<br />
              <span className="text-[var(--color-brand-700)]">We will route the right team.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
              College director, school principal, founder, or hiring lead — describe the outcome you need
              and we will respond with a named owner and a scoped plan.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" size="lg" variant="brand" trailingArrow>
                Talk to us
              </ButtonLink>
              <ButtonLink href="/services" size="lg" variant="outline">
                See the directory
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
