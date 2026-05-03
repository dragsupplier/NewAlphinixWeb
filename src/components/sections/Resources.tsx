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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-7">
          {/* Featured editorial card */}
          <Reveal className="lg:col-span-7">
            <a
              href={featured.href}
              className="feature-card group relative block h-full overflow-hidden p-7 md:p-10 min-h-[360px] md:min-h-[440px]"
            >
              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55">
                      {featured.serial}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-200)]">
                      {featured.tag}
                    </span>
                  </div>
                  <span className="rounded-full border border-white/20 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/65">
                    Featured
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.05] tracking-[-0.022em] text-white text-balance">
                    <span className="under-slide">{featured.title}</span>
                  </h3>
                  <p className="mt-5 max-w-[58ch] text-[14.5px] md:text-[15.5px] leading-[1.65] text-white/75 text-pretty">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/15 pt-5">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55">
                    {featured.meta}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white">
                    Read in full
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>

          {/* 4 supporting articles in a 2x2 mini-grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 content-stretch">
            {rest.map((r, i) => (
              <Reveal key={r.serial} delay={i * 70}>
                <a
                  href={r.href}
                  className="tile-rule group flex h-full flex-col p-5 md:p-6"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                      {r.serial}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-brand-700)]">
                      {r.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[16px] md:text-[17px] font-semibold leading-[1.22] tracking-[-0.015em] text-[var(--color-fg)] text-balance">
                    <span className="under-slide">{r.title}</span>
                  </h3>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
                      {r.meta}
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-[var(--color-fg-5)] transition-all group-hover:text-[var(--color-brand-700)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
