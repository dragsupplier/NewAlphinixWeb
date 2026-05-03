import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Search, ArrowRight } from 'lucide-react';
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

  // Light header when scrolled (over light content); transparent when over the dark hero.
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
              isLight ? 'hover:bg-[var(--color-paper-blue)]' : 'hover:bg-white/10',
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
/* Services mega menu — 4 cols, hover-driven content swap                    */
/* Col 1: hover-able audience list                                           */
/* Cols 2–3: services for the hovered audience                               */
/* Col 4: featured CTA card                                                  */
/* ─────────────────────────────────────────── */

function ServicesPanel({
  open,
  onMouseEnter,
}: {
  open: boolean;
  onMouseEnter: () => void;
}) {
  const [active, setActive] = useState(0);
  const seg = segments[active]!;

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
          <div className="grid grid-cols-12 gap-x-8 py-10">
            {/* Col 1 — audience list */}
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <p className="eyebrow">Audiences</p>
              <ul className="mt-5 -ml-2">
                {segments.map((s, i) => (
                  <li key={s.slug}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => { window.location.href = `/${s.slug}`; }}
                      className={cn(
                        'group flex w-full items-center justify-between gap-3 rounded-[8px] px-3 py-3 text-left transition-colors',
                        i === active
                          ? 'bg-[var(--color-paper-blue)]'
                          : 'hover:bg-[var(--color-paper-blue)]',
                      )}
                    >
                      <span className="flex items-baseline gap-3">
                        <span
                          aria-hidden="true"
                          className="inline-block h-1.5 w-1.5 rounded-full mt-2"
                          style={{ backgroundColor: `var(${s.colorVar})` }}
                        />
                        <span>
                          <span className="block font-display text-[1.0625rem] font-bold tracking-[-0.01em]">
                            {s.name}
                          </span>
                          <span className="block text-[0.8125rem] text-[var(--color-muted)] mt-0.5">
                            {s.audience}
                          </span>
                        </span>
                      </span>
                      <ArrowRight
                        className={cn(
                          'h-4 w-4 transition-all',
                          i === active
                            ? 'text-[var(--color-brand-700)] translate-x-0.5'
                            : 'text-[var(--color-muted)] opacity-0 group-hover:opacity-100',
                        )}
                        strokeWidth={1.75}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cols 2–3 — services for active audience */}
            <div className="col-span-12 md:col-span-8 lg:col-span-6 md:border-l md:border-[var(--color-line)] md:pl-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="eyebrow">Services</p>
                  <p className="mt-2 font-display text-[1.5rem] md:text-[1.75rem] font-bold tracking-[-0.015em] text-[var(--color-ink)]">
                    {seg.name} <span className="text-[var(--color-muted)]">— {seg.outcome.replace(/\.$/, '')}</span>
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {seg.services.map((srv) => (
                  <li key={srv}>
                    <a
                      href={`/${seg.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="group flex items-baseline justify-between rounded-[6px] px-3 py-2.5 text-[0.9375rem] hover:bg-[var(--color-paper-blue)] transition-colors"
                    >
                      <span className="text-[var(--color-ink)]">{srv}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-muted)] opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={2} />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={`/${seg.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-[var(--color-brand-700)] link-draw"
              >
                Visit the {seg.name.toLowerCase()} hub
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>

            {/* Col 4 — featured CTA card */}
            <div className="hidden lg:block lg:col-span-3">
              <div
                className="relative overflow-hidden rounded-[var(--radius-lg)] p-6 text-white"
                style={{
                  background:
                    'linear-gradient(155deg, var(--color-brand-700) 0%, var(--color-brand-900) 70%, var(--color-ink-deep) 100%)',
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                />
                <p className="relative font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-brand-300)]">
                  Not sure where to start?
                </p>
                <p
                  className="relative mt-4 font-display font-bold tracking-[-0.015em] text-balance"
                  style={{ fontSize: 'clamp(1.25rem, 1.4vw, 1.5rem)', lineHeight: 1.18 }}
                >
                  Tell us the outcome you need. We will route the right team within a working day.
                </p>
                <div className="relative mt-6">
                  <ButtonLink
                    href="/contact"
                    size="md"
                    trailingArrow
                    className="!bg-white !text-[var(--color-ink)] hover:!bg-white/90"
                  >
                    Schedule a call
                  </ButtonLink>
                </div>
                <p className="relative mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
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
            className="flex items-center justify-between px-3 py-2.5 text-[0.9375rem] rounded-[6px] transition-colors hover:bg-[var(--color-paper-blue)]"
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
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (slug: string) => setOpen(open === slug ? null : slug);

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
            {segments.map((s) => {
              const expanded = open === s.slug;
              return (
                <li key={s.slug}>
                  <button
                    type="button"
                    className="flex w-full items-baseline justify-between py-4 text-left"
                    onClick={() => toggle(s.slug)}
                    aria-expanded={expanded}
                  >
                    <span className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: `var(${s.colorVar})` }}
                      />
                      <span className="font-mono text-[0.6875rem] text-[var(--color-muted)]">{s.index}</span>
                      <span className="font-display text-[1.375rem] font-bold tracking-[-0.01em]">{s.name}</span>
                    </span>
                    <ChevronDown
                      className={cn('h-4 w-4 text-[var(--color-muted)] transition-transform', expanded && 'rotate-180')}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-[grid-template-rows] duration-300 grid',
                      expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <ul className="min-h-0 pb-3 space-y-1">
                      {s.services.map((srv) => (
                        <li key={srv}>
                          <a
                            href={`/${s.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="block py-1.5 text-[0.9375rem] text-[var(--color-ink)]/80"
                            onClick={onClose}
                          >
                            {srv}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href={`/${s.slug}`}
                          className="link-draw mt-1 inline-flex items-center gap-1.5 py-1 text-[0.875rem] font-medium text-[var(--color-brand-700)]"
                          onClick={onClose}
                        >
                          Visit hub <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
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
