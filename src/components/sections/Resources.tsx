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
    title: 'What an industry-ready engineer looks like in 2026',
    excerpt:
      'A breakdown of the gap between graduate skills and what hiring managers screen for — and the seven shifts in how we run our training programs because of it.',
    meta: '8 min read',
    href: '/blog',
    featured: true,
  },
  {
    serial: '02',
    tag: 'Practice paper',
    title: 'Setting up an ATL lab that survives audit and gets used daily',
    excerpt:
      'A working playbook for usage cadence, teacher ownership, and the procurement choices that pay back over time.',
    meta: '11 min read',
    href: '/blog',
  },
  {
    serial: '03',
    tag: 'Hiring brief',
    title: 'Why pre-trained intern supply changes the unit economics of hiring',
    excerpt:
      'Three months of pre-training compresses time-to-productivity by half. The arithmetic on cost per confirmed hire when the candidate pool is already screened.',
    meta: '6 min read',
    href: '/blog',
  },
  {
    serial: '04',
    tag: 'Accreditation',
    title: 'NAAC documentation gaps that cost colleges their grade',
    excerpt:
      'A pattern audit across recent cycles. The five evidence gaps that get flagged most often, and how to close them without adding to faculty workload.',
    meta: '14 min read',
    href: '/blog',
  },
  {
    serial: '05',
    tag: 'Curriculum',
    title: 'AI in the classroom under NEP 2020 — what is actually expected',
    excerpt:
      'For school principals and curriculum heads — the difference between an AI elective and AI as a foundational layer of the curriculum.',
    meta: '7 min read',
    href: '/blog',
  },
];

export function Resources() {
  const featured = resources.find((r) => r.featured) ?? resources[0]!;
  const rest = resources.filter((r) => r !== featured);

  return (
    <section className="section-y bg-[var(--color-bg)]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="kicker">Notes from the practice</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Field notes, briefs, and accreditation reads.
            </h2>
          </div>
          <a
            href="/blog"
            className="group inline-flex items-center gap-1.5 self-start text-[13px] font-semibold text-[var(--color-brand-700)]"
          >
            <span className="under-slide">All entries</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.25}
            />
          </a>
        </div>

        {/* Magazine cover (left, 7-col) + index list (right, 5-col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-[var(--color-fg)]">
          {/* Featured cover */}
          <Reveal className="lg:col-span-7 lg:border-r lg:border-[var(--color-line)] py-10 md:py-12 lg:pr-12 xl:pr-16">
            <a href={featured.href} className="group block">
              <span className="item-index">{featured.tag}</span>
              <h3 className="mt-6 font-display text-[30px] md:text-[40px] lg:text-[52px] font-semibold leading-[1.02] tracking-[-0.025em] text-[var(--color-fg)] text-balance">
                <span className="under-slide">{featured.title}</span>
              </h3>
              <p className="mt-6 max-w-[60ch] text-[15px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                {featured.excerpt}
              </p>
              <div className="mt-10 flex items-baseline justify-between border-t border-[var(--color-line)] pt-5 text-[var(--color-fg-5)]">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em]">
                  {featured.meta}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--color-fg)]">
                  Read in full
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-brand-700)]"
                    strokeWidth={2.25}
                  />
                </span>
              </div>
            </a>
          </Reveal>

          {/* Index list of remaining articles */}
          <ol className="lg:col-span-5 lg:pl-12 xl:pl-16">
            {rest.map((r, i) => (
              <Reveal
                as="li"
                key={r.serial}
                delay={i * 60}
                className="border-t border-[var(--color-line)] first:border-t-0 lg:first:border-t-0"
              >
                <a href={r.href} className="row-hover group block py-6 md:py-7">
                  <span className="item-index">{r.tag}</span>
                  <h3 className="mt-2.5 font-display text-[16px] md:text-[18px] font-semibold leading-[1.28] tracking-[-0.015em] text-[var(--color-fg)] text-balance">
                    <span className="under-slide">{r.title}</span>
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-[var(--color-fg-5)]">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] tabular-nums">
                      {r.meta}
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-all group-hover:text-[var(--color-brand-700)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
                  </div>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
