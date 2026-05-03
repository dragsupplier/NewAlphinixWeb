import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { Wordmark } from '@/components/ui/Wordmark';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { portalLinks } from '@/data/nav';
import { cn } from '@/lib/utils';

type Panel = 'services' | 'portal' | null;

export function Header() {
  const [panel, setPanel] = useState<Panel>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const open = (p: Panel) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPanel(p);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(null), 140);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPanel(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // When over the dark hero (not scrolled), header is transparent with white text.
  // When scrolled past the hero, header becomes solid white with ink text.
  const isLight = scrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isLight
          ? 'border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-md text-[var(--color-ink)]'
          : 'border-b border-white/0 bg-transparent text-white',
      )}
      onMouseLeave={scheduleClose}
    >
      {/* Main bar */}
      <Container className="flex h-16 md:h-[72px] items-center justify-between gap-6">
        <Wordmark tone={isLight ? 'ink' : 'paper'} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-[0.9375rem]">
          <NavTrigger
            label="Services"
            isOpen={panel === 'services'}
            isLight={isLight}
            onMouseEnter={() => open('services')}
            onClick={() => setPanel(panel === 'services' ? null : 'services')}
          />
          <NavLink href="/about" isLight={isLight} onMouseEnter={() => open(null)}>About</NavLink>
          <NavLink href="/blog" isLight={isLight} onMouseEnter={() => open(null)}>Insights</NavLink>
          <NavLink href="/case-studies" isLight={isLight} onMouseEnter={() => open(null)}>Work</NavLink>
          <NavLink href="/webinars" isLight={isLight} onMouseEnter={() => open(null)}>Webinars</NavLink>
          <NavLink href="/careers" isLight={isLight} onMouseEnter={() => open(null)}>Careers</NavLink>
        </nav>

        {/* Right cluster */}
        <div className="hidden lg:flex items-center gap-1">
          <button
            aria-label="Search"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-[8px] transition-colors',
              isLight ? 'hover:bg-[var(--color-paper-soft)]' : 'hover:bg-white/10',
            )}
          >
            <Search className="h-4 w-4" strokeWidth={1.75} />
          </button>
          <NavTrigger
            label="Portal"
            isOpen={panel === 'portal'}
            isLight={isLight}
            compact
            onMouseEnter={() => open('portal')}
            onClick={() => setPanel(panel === 'portal' ? null : 'portal')}
          />
          <ButtonLink
            href="/contact"
            size="md"
            className={cn(
              'ml-1.5',
              isLight
                ? '!bg-[var(--color-ink)] !text-[var(--color-paper)] hover:!bg-[var(--color-ink-soft)]'
                : '!bg-white !text-[var(--color-ink)] hover:!bg-white/90',
            )}
          >
            Talk to us
          </ButtonLink>
        </div>

        {/* Mobile trigger */}
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </Container>

      <ServicesPanel open={panel === 'services'} onMouseEnter={() => open('services')} />
      <PortalPanel open={panel === 'portal'} onMouseEnter={() => open('portal')} />

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

/* ─────────────────────────────────────────── */

function NavLink({
  href,
  children,
  onMouseEnter,
  isLight,
}: {
  href: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  isLight: boolean;
}) {
  return (
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      className={cn(
        'rounded-[8px] px-3 py-2 transition-colors',
        isLight ? 'text-[var(--color-ink)]/75 hover:text-[var(--color-ink)]' : 'text-white/80 hover:text-white',
      )}
    >
      {children}
    </a>
  );
}

function NavTrigger({
  label,
  isOpen,
  onMouseEnter,
  onClick,
  compact,
  isLight,
}: {
  label: string;
  isOpen: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
  compact?: boolean;
  isLight: boolean;
}) {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      aria-expanded={isOpen}
      className={cn(
        'inline-flex items-center gap-1 rounded-[8px] px-3 py-2 transition-colors',
        isLight ? 'text-[var(--color-ink)]/75 hover:text-[var(--color-ink)]' : 'text-white/80 hover:text-white',
        compact && 'text-[0.9375rem]',
      )}
    >
      {label}
      <ChevronDown
        className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')}
        strokeWidth={2}
      />
    </button>
  );
}

/* ─────────────────────────────────────────── */

function ServicesPanel({
  open,
  onMouseEnter,
}: {
  open: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={cn(
        'absolute left-0 right-0 top-full overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)] shadow-[0_24px_60px_-32px_rgba(10,14,39,0.18)] transition-[grid-template-rows,opacity] duration-300 grid',
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none',
      )}
    >
      <div className="min-h-0">
        <Container>
          <div className="grid grid-cols-12 gap-x-8">
            {/* Left — 5-column directory of segments */}
            <div className="col-span-12 lg:col-span-9 py-10">
              <div className="mb-7 flex items-end justify-between">
                <p className="eyebrow">Services directory</p>
                <a
                  href="/services"
                  className="link-draw inline-flex items-center gap-1.5 text-[0.875rem] font-medium"
                >
                  See full directory <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
                {segments.map((s) => (
                  <div key={s.slug}>
                    <a
                      href={`/${s.slug}`}
                      className="group block"
                    >
                      <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                        {s.index}
                      </p>
                      <p className="mt-1 font-display text-[1.125rem] font-bold tracking-[-0.01em] text-[var(--color-ink)] group-hover:text-[var(--color-brand-700)] transition-colors">
                        {s.name}
                      </p>
                    </a>
                    <ul className="mt-4 space-y-1.5">
                      {s.services.map((srv) => (
                        <li key={srv}>
                          <a
                            href={`/${s.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="block text-[0.875rem] leading-snug text-[var(--color-ink)]/70 hover:text-[var(--color-brand-700)]"
                          >
                            {srv}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — featured CTA panel */}
            <div className="hidden lg:flex lg:col-span-3 py-10 pl-8 border-l border-[var(--color-line)] flex-col justify-between">
              <div>
                <p className="eyebrow">Not sure where to start?</p>
                <p className="mt-4 font-display text-[1.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]">
                  Tell us the outcome you need. We will route the right team.
                </p>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--color-ink)]/70">
                  One conversation, one named owner, scoped plan within a week.
                </p>
              </div>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="ink" size="md" trailingArrow>
                  Schedule a call
                </ButtonLink>
                <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Pune · Maharashtra · India
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

function PortalPanel({
  open,
  onMouseEnter,
}: {
  open: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={cn(
        'absolute right-0 top-full mr-6 w-72 origin-top-right overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)] shadow-[0_20px_60px_-20px_rgba(10,14,39,0.22)] transition-[opacity,transform] duration-200',
        open ? 'opacity-100 translate-y-2' : 'opacity-0 -translate-y-1 pointer-events-none',
      )}
    >
      <div className="px-5 pt-5 pb-2">
        <p className="eyebrow">Sign in</p>
      </div>
      <div className="px-2 pb-3">
        {portalLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="flex items-center justify-between px-3 py-2.5 text-[0.9375rem] rounded-[6px] transition-colors hover:bg-[var(--color-paper-soft)]"
          >
            <span>{l.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-muted)]" strokeWidth={2} />
          </a>
        ))}
      </div>
      <div className="border-t border-[var(--color-line)] px-5 py-3 text-[0.75rem] text-[var(--color-muted)]">
        Portals are separate products and open in a new tab.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────── */

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)] lg:hidden">
      <div className="flex h-16 items-center justify-between px-6 border-b border-[var(--color-line)]">
        <Wordmark />
        <button aria-label="Close menu" className="inline-flex h-10 w-10 items-center justify-center" onClick={onClose}>
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-7">
          <p className="eyebrow">Services</p>
          <ul className="mt-5 divide-y divide-[var(--color-line)]">
            {segments.map((s) => (
              <li key={s.slug}>
                <a
                  href={`/${s.slug}`}
                  className="flex items-baseline justify-between py-4"
                  onClick={onClose}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">{s.index}</span>
                    <span className="font-display text-[1.375rem] font-bold tracking-[-0.01em]">{s.name}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 py-6 border-t border-[var(--color-line)]">
          <p className="eyebrow">Company</p>
          <ul className="mt-3 space-y-1 text-[1.0625rem]">
            <li><a href="/about" className="block py-2">About</a></li>
            <li><a href="/blog" className="block py-2">Insights</a></li>
            <li><a href="/case-studies" className="block py-2">Work</a></li>
            <li><a href="/webinars" className="block py-2">Webinars</a></li>
            <li><a href="/careers" className="block py-2">Careers</a></li>
            <li><a href="/contact" className="block py-2">Contact</a></li>
          </ul>
        </div>

        <div className="px-6 py-6 border-t border-[var(--color-line)]">
          <p className="eyebrow">Sign in</p>
          <ul className="mt-3 space-y-1 text-[1.0625rem]">
            {portalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="flex items-center justify-between py-2">
                  <span>{l.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] px-6 py-4">
        <ButtonLink href="/contact" variant="ink" size="lg" className="w-full">
          Talk to us
        </ButtonLink>
      </div>
    </div>
  );
}
