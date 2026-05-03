import { Container } from '@/components/ui/Container';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Resource = {
  serial: string;
  tag: string;
  title: string;
  excerpt: string;
  meta: string;
  href: string;
  featured?: boolean;
};

const resources: Resource[] = [
  {
    serial: '01',
    tag: 'Field note',
    title: 'What an industry-ready engineer actually looks like in 2026',
    excerpt: 'A breakdown of the gap between graduate skills and what hiring managers screen for — and the seven shifts in how we run our training programs because of it.',
    meta: '8 min read · Field note',
    href: '/blog',
    featured: true,
  },
  {
    serial: '02',
    tag: 'Practice paper',
    title: 'Setting up an ATL lab that survives audit and gets used daily',
    excerpt: 'Most school labs are inspected once and then collect dust. A working playbook for usage cadence, teacher ownership, and the procurement choices that pay back.',
    meta: '11 min read · Practice paper',
    href: '/blog',
  },
  {
    serial: '03',
    tag: 'Hiring brief',
    title: 'Why pre-trained intern supply changes the unit economics of hiring',
    excerpt: 'Three months of pre-training compresses the time-to-productivity by half. The arithmetic on cost per confirmed hire when the candidate pool is already screened.',
    meta: '6 min read · Hiring brief',
    href: '/blog',
  },
  {
    serial: '04',
    tag: 'Accreditation',
    title: 'NAAC documentation gaps that cost colleges their grade',
    excerpt: 'A pattern audit across recent cycles. The five evidence gaps that get flagged most often, and how to close them without adding to faculty workload.',
    meta: '14 min read · Accreditation',
    href: '/blog',
  },
  {
    serial: '05',
    tag: 'Curriculum',
    title: 'AI in the classroom — what NEP 2020 actually expects you to do',
    excerpt: 'A short read for school principals and curriculum heads on the difference between an AI elective and AI as a foundational layer of the curriculum.',
    meta: '7 min read · Curriculum',
    href: '/blog',
  },
];

export function Resources() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-paper-blue)]">
      <Container>
        {/* Section masthead */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Notes from the practice</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.5rem)', lineHeight: 1.02 }}
            >
              Field notes, briefs, and accreditation reads.
            </h2>
          </div>
          <a
            href="/blog"
            className="link-draw inline-flex items-center gap-2 text-[0.9375rem] font-medium text-[var(--color-ink)]"
          >
            Read all entries
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        {/* Editorial list — hairline-divided rows, no images */}
        <div className="border-t border-[var(--color-line)]">
          {resources.map((r, i) => (
            <Reveal key={r.serial} delay={i * 60}>
              <a
                href={r.href}
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-b border-[var(--color-line)] py-7 md:py-10 hover:bg-[var(--color-paper)] transition-colors px-2"
              >
                {/* Serial */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {r.serial}
                  </span>
                </div>

                {/* Tag */}
                <div className="col-span-10 sm:col-span-2">
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--color-brand-700)]">
                    {r.tag}
                  </span>
                </div>

                {/* Title + excerpt */}
                <div className="col-span-12 sm:col-span-7 lg:col-span-7">
                  <h3
                    className={`font-display font-bold tracking-[-0.015em] text-[var(--color-ink)] text-balance ${
                      r.featured
                        ? 'text-[1.5rem] md:text-[1.875rem] leading-[1.08]'
                        : 'text-[1.25rem] md:text-[1.375rem] leading-[1.15]'
                    }`}
                  >
                    <span className="link-draw">{r.title}</span>
                  </h3>
                  {r.featured && (
                    <p className="mt-3 max-w-2xl text-[0.9375rem] md:text-[1rem] leading-relaxed text-[var(--color-ink)]/70 text-pretty">
                      {r.excerpt}
                    </p>
                  )}
                </div>

                {/* Meta + arrow */}
                <div className="hidden sm:flex col-span-2 items-baseline justify-end gap-3 text-[var(--color-muted)]">
                  <span className="font-mono text-[0.75rem] uppercase tracking-[0.12em]">
                    {r.meta.split(' · ')[0]}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--color-muted)]"
                    strokeWidth={2}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
