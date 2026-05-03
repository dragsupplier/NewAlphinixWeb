import {
  ArrowRight,
  Phone,
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  ArrowUpRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { TextReveal } from '@/components/ui/TextReveal';

type AudienceCell = { label: string; sub: string; icon: LucideIcon; href: string };

const AUDIENCE: AudienceCell[] = [
  { label: 'Students',     sub: 'Training and placement',    icon: GraduationCap, href: '/students' },
  { label: 'Colleges',     sub: 'Academic operations',       icon: Building2,     href: '/colleges' },
  { label: 'Schools',      sub: 'STEM, ATL, and AI labs',    icon: School,        href: '/schools' },
  { label: 'Businesses',   sub: 'Engineering and AI',        icon: Rocket,        href: '/businesses' },
  { label: 'Hiring Teams', sub: 'Recruitment services',      icon: Users,         href: '/hiring' },
];

export function Hero() {
  return (
    <section id="hero" className="relative bg-[var(--color-bg)]">
      <Container className="!max-w-5xl !px-5 md:!px-8 pt-20 pb-12 md:pt-32 md:pb-16 text-center">
        {/* Headline — two-line color split, word-by-word reveal */}
        <h1 className="mx-auto max-w-[20ch] font-display text-[44px] font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--color-fg)] sm:text-[56px] md:text-[68px] lg:text-[76px]">
          <TextReveal text="One partner." stagger={70} delay={0.05} />{' '}
          <span className="text-[var(--color-brand-700)]">
            <TextReveal text="One platform." stagger={70} delay={0.35} />
          </span>
        </h1>

        <p
          className="mx-auto mt-7 max-w-[58ch] text-[16px] leading-[1.65] text-[var(--color-fg-3)] md:text-[17.5px] mount-up"
          style={{ animationDelay: '700ms' }}
        >
          Alphinix combines campus training, in-house engineering, and recruitment services under a single
          accountable team — replacing the four or five vendors institutions and businesses were juggling.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3 mount-up"
          style={{ animationDelay: '850ms' }}
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-[var(--color-brand-800)]"
          >
            Request a proposal
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </a>
          <a
            href="tel:+910000000000"
            className="inline-flex items-center gap-2 rounded-[6px] bg-[var(--color-bg)] px-5 py-3 text-[14.5px] font-semibold text-[var(--color-fg)] ring-1 ring-[var(--color-line-2)] transition-colors hover:bg-[var(--color-canvas)]"
          >
            <Phone className="h-3.5 w-3.5 text-[var(--color-brand-700)]" strokeWidth={2.5} />
            Speak to a consultant
          </a>
        </div>
      </Container>

      {/* Audience strip — 5 columns with icon-rounded-squares */}
      <Container className="!max-w-7xl !px-5 md:!px-8 pb-16 md:pb-20">
        <div className="border-t border-[var(--color-line)]">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {AUDIENCE.map((m, i) => (
              <a
                key={m.label}
                href={m.href}
                className={`group block px-4 py-6 md:px-6 md:py-7 transition-colors hover:bg-[var(--color-canvas)] ${
                  i !== 0 ? 'border-t border-[var(--color-line)] lg:border-l lg:border-t-0' : ''
                } ${i === 1 ? 'sm:border-t-0' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-[6px] bg-[var(--color-brand-50)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-100)] transition-colors group-hover:bg-[var(--color-brand-700)] group-hover:text-white">
                    <m.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="under-slide mt-5 inline-block font-display text-[18px] font-semibold leading-tight tracking-tight text-[var(--color-fg)] group-hover:text-[var(--color-brand-700)] md:text-[19px]">
                  {m.label}
                </p>
                <p className="mt-1 text-[12.5px] text-[var(--color-fg-4)]">{m.sub}</p>
                <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-3">
                  <span className="text-[11.5px] font-medium text-[var(--color-fg-3)] group-hover:text-[var(--color-brand-700)]">
                    Explore
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-[var(--color-fg-4)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:rotate-12 group-hover:text-[var(--color-brand-700)]"
                    strokeWidth={2.25}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
