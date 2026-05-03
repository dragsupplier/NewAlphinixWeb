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
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <div className="max-w-2xl">
            <p className="kicker">Notes from the practice</p>
            <h2 className="mt-4 font-display text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.05] tracking-[-0.022em] text-[var(--color-fg)] text-balance">
              Field notes, briefs, and accreditation reads.
            </h2>
          </div>
          <a
            href="/blog"
            className="group inline-flex items-center gap-1.5 self-start font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg)]"
          >
            <span className="under-slide">All entries · {resources.length}</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.25}
            />
          </a>
        </div>

        {/* Featured article — banner row, no card */}
        <Reveal>
          <a
            href={featured.href}
            className="group block border-y-2 border-[var(--color-fg)] py-10 md:py-14"
          >
            <div className="grid grid-cols-12 gap-x-6 gap-y-6">
              <div className="col-span-12 md:col-span-3 lg:col-span-2 flex md:block items-baseline gap-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                  Issue {featured.serial}
                </span>
                <span className="md:mt-2 block font-mono text-[10.5px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]">
                  {featured.tag}
                </span>
                <span className="hidden md:inline-flex md:mt-3 items-center gap-1.5 rounded-full border border-[var(--color-line-2)] px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--color-fg-4)]">
                  Featured
                </span>
              </div>

              <div className="col-span-12 md:col-span-9 lg:col-span-7">
                <h3 className="font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.04] tracking-[-0.024em] text-[var(--color-fg)] text-balance">
                  <span className="under-slide">{featured.title}</span>
                </h3>
                <p className="mt-5 max-w-[60ch] text-[14.5px] md:text-[16px] leading-[1.7] text-[var(--color-fg-3)] text-pretty">
                  {featured.excerpt}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-3 lg:text-right flex lg:flex-col lg:items-end items-baseline gap-3 lg:gap-2">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                  {featured.meta}
                </span>
                <span className="ml-auto lg:ml-0 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--color-fg)]">
                  Read in full
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-brand-700)]"
                    strokeWidth={2.25}
                  />
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        {/* TOC entries — index / tag / title ........ meta / arrow */}
        <ol className="mt-2">
          {rest.map((r, i) => (
            <Reveal as="li" key={r.serial} delay={i * 60}>
              <a
                href={r.href}
                className="editorial-row group flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-[var(--color-line)] py-6 md:py-7"
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-fg-5)] w-8 shrink-0">
                  {r.serial}
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)] w-[140px] shrink-0">
                  {r.tag}
                </span>

                <div className="flex flex-1 items-baseline gap-3 min-w-[60%]">
                  <h3 className="font-display text-[18px] md:text-[20px] lg:text-[22px] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-fg)]">
                    <span className="under-slide">{r.title}</span>
                  </h3>
                  <span aria-hidden="true" className="toc-leader hidden md:block" />
                </div>

                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-5)] tabular-nums shrink-0">
                  {r.meta}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-[var(--color-fg-5)] shrink-0 transition-all duration-300 group-hover:text-[var(--color-brand-700)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.25}
                />
              </a>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
