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
    excerpt: 'A breakdown of the gap between graduate skills and what hiring managers screen for — and the seven shifts in how we run our training programs because of it.',
    meta: '8 min read',
    href: '/blog',
    featured: true,
  },
  {
    serial: '02',
    tag: 'Practice paper',
    title: 'Setting up an ATL lab that survives audit and gets used daily',
    excerpt: 'A working playbook for usage cadence, teacher ownership, and the procurement choices that pay back over time.',
    meta: '11 min read',
    href: '/blog',
  },
  {
    serial: '03',
    tag: 'Hiring brief',
    title: 'Why pre-trained intern supply changes the unit economics of hiring',
    excerpt: 'Three months of pre-training compresses time-to-productivity by half. The arithmetic on cost per confirmed hire when the candidate pool is already screened.',
    meta: '6 min read',
    href: '/blog',
  },
  {
    serial: '04',
    tag: 'Accreditation',
    title: 'NAAC documentation gaps that cost colleges their grade',
    excerpt: 'A pattern audit across recent cycles. The five evidence gaps that get flagged most often, and how to close them without adding to faculty workload.',
    meta: '14 min read',
    href: '/blog',
  },
  {
    serial: '05',
    tag: 'Curriculum',
    title: 'AI in the classroom under NEP 2020 — what is actually expected',
    excerpt: 'For school principals and curriculum heads — the difference between an AI elective and AI as a foundational layer of the curriculum.',
    meta: '7 min read',
    href: '/blog',
  },
];

export function Resources() {
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
          <a href="/blog" className="link-rule text-[14px]">
            Read all entries
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </a>
        </div>

        <div>
          {resources.map((r, i) => (
            <Reveal key={r.serial} delay={i * 50}>
              <a
                href={r.href}
                className={`group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 py-6 md:py-8 px-2 transition-colors hover:bg-[var(--color-canvas)] ${i === 0 ? 'cap-row' : 'cap-row'}`}
              >
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-5)]">
                    {r.serial}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-2">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-brand-700)] font-semibold">
                    {r.tag}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-7 lg:col-span-7">
                  <h3
                    className={`font-display font-semibold tracking-[-0.018em] text-[var(--color-fg)] text-balance ${
                      r.featured
                        ? 'text-[24px] md:text-[28px] leading-[1.1]'
                        : 'text-[18px] md:text-[20px] leading-[1.2]'
                    }`}
                  >
                    <span className="under-slide">{r.title}</span>
                  </h3>
                  {r.featured && (
                    <p className="mt-3 max-w-[60ch] text-[14.5px] md:text-[15.5px] leading-[1.65] text-[var(--color-fg-3)] text-pretty">
                      {r.excerpt}
                    </p>
                  )}
                </div>
                <div className="hidden sm:flex col-span-2 items-baseline justify-end gap-3 text-[var(--color-fg-5)]">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.12em]">
                    {r.meta}
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-brand-700)]"
                    strokeWidth={2.25}
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
