import { Container } from '@/components/ui/Container';

const categories = [
  'Engineering colleges',
  'Polytechnic institutes',
  'K-12 schools',
  'Indian SMBs',
  'Hiring teams',
];

export function TrustStrip() {
  return (
    <section className="bg-[var(--color-canvas)] border-y border-[var(--color-line)]">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-center">
          <div className="lg:col-span-3">
            <p className="kicker">Working with</p>
            <p className="mt-3 font-display text-[20px] md:text-[22px] font-semibold tracking-[-0.018em] leading-[1.18] text-[var(--color-fg)]">
              Institutions and teams across India
            </p>
          </div>
          <ul className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
            {categories.map((c) => (
              <li
                key={c}
                className="text-[14.5px] md:text-[15px] font-semibold tracking-tight text-[var(--color-fg-2)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
