import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export function Stub({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-40 md:pt-44 pb-32">
        <Container>
          {kicker && (
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {kicker}
            </p>
          )}
          <h1
            className="mt-4 font-display font-bold tracking-[-0.025em] text-[var(--color-ink)]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.98 }}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--color-ink)]/70">
            This page is part of the planned site structure. The home page is the first delivered surface — the
            rest of the directory is built next, using the same design language.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <ButtonLink href="/" variant="ink" size="lg">Back to home</ButtonLink>
            <a href="/contact" className="link-draw text-[0.9375rem] font-medium">
              Or contact us →
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
