import { Container } from '@/components/ui/Container';
import { resourceImages } from '@/data/images';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Resource = {
  tag: string;
  title: string;
  meta: string;
  href: string;
  image: string;
};

const resources: Resource[] = [
  {
    tag: 'Field note',
    title: 'What an industry-ready engineer actually looks like in 2026',
    meta: 'Field note · 8 min read',
    href: '/blog',
    image: resourceImages[0]!,
  },
  {
    tag: 'Practice paper',
    title: 'Setting up an ATL lab that survives audit and gets used daily',
    meta: 'Practice paper · 11 min read',
    href: '/blog',
    image: resourceImages[1]!,
  },
  {
    tag: 'Hiring brief',
    title: 'Why pre-trained intern supply changes the unit economics of hiring',
    meta: 'Hiring brief · 6 min read',
    href: '/blog',
    image: resourceImages[2]!,
  },
];

export function Resources() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        {/* Section masthead */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow">From the practice</p>
            <h2
              className="mt-5 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.25rem)', lineHeight: 1.02 }}
            >
              Notes, briefs, and field studies.
            </h2>
          </div>
          <a
            href="/blog"
            className="link-draw inline-flex items-center gap-2 text-[0.9375rem] font-medium text-[var(--color-ink)]"
          >
            Read all
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        {/* DESKTOP & TABLET: 3-column grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <Card resource={r} />
            </Reveal>
          ))}
        </div>

        {/* MOBILE: horizontal scroll-snap strip */}
        <div className="sm:hidden snap-strip pl-1 -mx-6 pr-6">
          <div className="w-1 shrink-0" />
          {resources.map((r) => (
            <div key={r.title} className="w-[80%]">
              <Card resource={r} />
            </div>
          ))}
          <div className="w-1 shrink-0" />
        </div>
      </Container>
    </section>
  );
}

function Card({ resource }: { resource: Resource }) {
  return (
    <a href={resource.href} className="group block">
      <div className="image-plate aspect-[3/2] rounded-[var(--radius-lg)] overflow-hidden">
        <img src={resource.image} alt="" loading="lazy" width={1200} height={800} />
      </div>
      <div className="mt-5">
        <span className="inline-flex items-center rounded-full bg-[var(--color-brand-50)] px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-brand-700)]">
          {resource.tag}
        </span>
        <h3 className="mt-4 font-display text-[1.25rem] md:text-[1.375rem] font-bold leading-[1.15] tracking-[-0.015em] text-[var(--color-ink)]">
          <span className="link-draw">{resource.title}</span>
        </h3>
        <p className="mt-3 text-[0.8125rem] uppercase tracking-[0.08em] text-[var(--color-muted)]">
          {resource.meta}
        </p>
      </div>
    </a>
  );
}
