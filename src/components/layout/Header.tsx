import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { Wordmark } from '@/components/ui/Wordmark';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { segmentImages } from '@/data/images';
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-200',
        scrolled
          ? 'border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur'
          : 'border-b border-transparent bg-[var(--color-paper)]',
      )}
      onMouseLeave={scheduleClose}
    >
      <Container className="flex h-16 items-center justify-between">
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-[0.9375rem]">
          <NavTrigger
            label="Services"
            isOpen={panel === 'services'}
            onMouseEnter={() => open('services')}
            onClick={() => setPanel(panel === 'services' ? null : 'services')}
          />
          <NavLink href="/about" onMouseEnter={() => open(null)}>About</NavLink>
          <NavLink href="/blog" onMouseEnter={() => open(null)}>Insights</NavLink>
          <NavLink href="/webinars" onMouseEnter={() => open(null)}>Webinars</NavLink>
          <NavLink href="/careers" onMouseEnter={() => open(null)}>Careers</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <NavTrigger
            label="Portal"
            isOpen={panel === 'portal'}
            compact
            onMouseEnter={() => open('portal')}
            onClick={() => setPanel(panel === 'portal' ? null : 'portal')}
          />
          <ButtonLink href="/contact" size="md" variant="ink" className="ml-1">
            Contact
          </ButtonLink>
        </div>

        {/* Mobile trigger */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center"
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
}: {
  href: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
}) {
  return (
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      className="rounded-[4px] px-3 py-2 text-[var(--color-ink)]/80 transition-colors hover:text-[var(--color-ink)]"
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
}: {
  label: string;
  isOpen: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      aria-expanded={isOpen}
      className={cn(
        'inline-flex items-center gap-1 rounded-[4px] px-3 py-2 text-[var(--color-ink)]/80 transition-colors hover:text-[var(--color-ink)]',
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
        'absolute left-0 right-0 top-full overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-paper)] transition-[grid-template-rows,opacity] duration-300 grid',
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none',
      )}
    >
      <div className="min-h-0">
        <Container className="py-10">
          <div className="mb-8 flex items-end justify-between">
            <p className="eyebrow">Five segments — one practice</p>
            <a
              href="/services"
              className="link-draw inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[var(--color-ink)]"
            >
              See the full directory <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {segments.map((s) => (
              <a
                key={s.slug}
                href={`/${s.slug}`}
                className="group block"
              >
                <div className="image-plate aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
                  <img
                    src={segmentImages[s.slug]}
                    alt={s.name}
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="mt-3">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    Segment {s.index}
                  </p>
                  <p className="mt-1 font-display text-[1.0625rem] font-bold tracking-[-0.01em] text-[var(--color-ink)] group-hover:text-[var(--color-brand-700)] transition-colors">
                    {s.name}
                  </p>
                  <p className="mt-1 text-[0.8125rem] leading-snug text-[var(--color-muted)]">
                    {s.audience}
                  </p>
                </div>
              </a>
            ))}
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
        'absolute right-0 top-full mr-6 w-72 origin-top-right overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-paper)] shadow-[0_20px_60px_-20px_rgba(10,14,39,0.18)] transition-[opacity,transform] duration-200',
        open ? 'opacity-100 translate-y-2' : 'opacity-0 -translate-y-1 pointer-events-none',
      )}
    >
      <div className="px-5 pt-5 pb-2">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
          Sign in
        </p>
      </div>
      <div className="px-2 pb-3">
        {portalLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="flex items-center justify-between px-3 py-2.5 text-[0.9375rem] text-[var(--color-ink)] rounded-[4px] transition-colors hover:bg-[var(--color-paper-soft)]"
          >
            <span>{l.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-muted)]" strokeWidth={2} />
          </a>
        ))}
      </div>
      <div className="border-t border-[var(--color-line)] px-5 py-3 text-[0.75rem] text-[var(--color-muted)]">
        Portals are independent products and open in a new tab.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────── */

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-paper)] md:hidden">
      <div className="flex h-16 items-center justify-between px-6 border-b border-[var(--color-line)]">
        <Wordmark />
        <button
          aria-label="Close menu"
          className="inline-flex h-10 w-10 items-center justify-center"
          onClick={onClose}
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-7">
          <p className="eyebrow">Services</p>
          <ul className="mt-5 space-y-3">
            {segments.map((s) => (
              <li key={s.slug}>
                <a
                  href={`/${s.slug}`}
                  className="flex items-center gap-4 py-1"
                  onClick={onClose}
                >
                  <span className="image-plate h-14 w-20 shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
                    <img src={segmentImages[s.slug]} alt="" loading="lazy" width={160} height={120} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[1.125rem] font-bold tracking-[-0.01em] text-[var(--color-ink)]">
                      {s.name}
                    </span>
                    <span className="block text-[0.8125rem] text-[var(--color-muted)]">
                      {s.audience}
                    </span>
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
