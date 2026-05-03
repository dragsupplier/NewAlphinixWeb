import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { signatureImageA, signatureImageB } from '@/data/images';
import { Reveal } from '@/components/Reveal';

type Block = {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  cta: { label: string; href: string };
  image: string;
  alt: string;
  align: 'left' | 'right';
};

const blocks: Block[] = [
  {
    eyebrow: 'How we work',
    heading: 'One team. Five connected service tracks.',
    body: 'Training, infrastructure, software, and hiring sit inside the same operating practice. That is the reason we can move a student from a classroom session to a placed engineer without handing the relationship across vendors.',
    bullets: [
      'Single point of accountability across audiences',
      'Engineering, education, and recruitment teams in-house',
      'Programs designed against published Indian frameworks',
      'Documentation built for audit and accreditation cycles',
    ],
    cta: { label: 'Read about our practice', href: '/about' },
    image: signatureImageA,
    alt: 'Collaborative training session',
    align: 'right',
  },
  {
    eyebrow: 'What we deliver',
    heading: 'Outcomes, not deliverables.',
    body: 'Every engagement closes against a measurable outcome — a placement, an accreditation cycle, a shipped product, a hire confirmed in seat. The work is structured so the outcome is the contract, not the activity.',
    bullets: [
      'Outcome-led engagement contracts',
      'Quarterly review cadence with named owners',
      'Shared dashboards for institutional partners',
      'Continuity beyond the first project',
    ],
    cta: { label: 'See the service directory', href: '/services' },
    image: signatureImageB,
    alt: 'Hands-on technology workspace',
    align: 'left',
  },
];

export function SignatureBlocks() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-paper-soft)] border-y border-[var(--color-line)]">
      <Container>
        <div className="space-y-20 md:space-y-28">
          {blocks.map((b, i) => (
            <BlockRow key={i} block={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function BlockRow({ block }: { block: Block }) {
  const imageOnRight = block.align === 'right';
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-center">
      {/* Image */}
      <Reveal
        className={`lg:col-span-6 ${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="image-plate aspect-[4/3] lg:aspect-[5/4] rounded-[var(--radius-xl)] overflow-hidden">
          <img
            src={block.image}
            alt={block.alt}
            loading="lazy"
            width={1400}
            height={1120}
          />
        </div>
      </Reveal>

      {/* Text */}
      <Reveal
        delay={120}
        className={`lg:col-span-6 ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <p className="eyebrow">{block.eyebrow}</p>
        <h2
          className="mt-5 font-display font-bold tracking-[-0.02em] text-[var(--color-ink)] text-balance"
          style={{ fontSize: 'clamp(1.875rem, 3.6vw, 2.875rem)', lineHeight: 1.04 }}
        >
          {block.heading}
        </h2>
        <p className="mt-6 max-w-xl text-[1rem] md:text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/75 text-pretty">
          {block.body}
        </p>
        <ul className="mt-7 space-y-3">
          {block.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-[0.9375rem] md:text-[1rem] text-[var(--color-ink)]/85">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand-600)]"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href={block.cta.href} variant="ink" size="md" trailingArrow>
            {block.cta.label}
          </ButtonLink>
        </div>
      </Reveal>
    </div>
  );
}
