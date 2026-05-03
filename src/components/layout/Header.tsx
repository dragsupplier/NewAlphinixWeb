import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { Wordmark } from '@/components/ui/Wordmark';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { portalLinks } from '@/data/nav';
import { cn } from '@/lib/utils';

type Panel = 'services' | 'portal' | null;

/* ─────────────────────────────────────────────────────────────
   Mega menu data — 4 service columns + 1 utility column.
   Modelled on the standard 5-column dark mega-menu pattern used
   by enterprise / edtech sites; original Alphinix content.
   ───────────────────────────────────────────────────────────── */
type ServiceItem = {
  title: string;
  blurb: string;
  href: string;
  badge?: 'live' | 'new' | 'free';
  icon?: 'spark';
};

type ServiceColumn = {
  heading: string;
  items: ServiceItem[];
};

const serviceColumns: ServiceColumn[] = [
  {
    heading: 'Students',
    items: [
      {
        title: 'Industrial Training',
        blurb: 'Live cohorts across Maharashtra',
        href: '/students/industrial-training',
        badge: 'live',
      },
      {
        title: 'Placement Preparation',
        blurb: 'Structured job-ready tracks',
        href: '/students/placement-prep',
        icon: 'spark',
      },
    ],
  },
  {
    heading: 'Colleges',
    items: [
      {
        title: 'Campus Programs',
        blurb: 'Training and placement drives',
        href: '/colleges/campus-training',
      },
      {
        title: 'Accreditation Support',
        blurb: 'NAAC and NBA documentation',
        href: '/colleges/naac-nba-support',
      },
    ],
  },
  {
    heading: 'Schools',
    items: [
      {
        title: 'AI and Robotics',
        blurb: 'Curriculum and teacher training',
        href: '/schools/ai-robotics-education',
      },
      {
        title: 'ATL Labs',
        blurb: 'STEM lab setup and kits',
        href: '/schools/stem-atl-labs',
        badge: 'new',
      },
    ],
  },
  {
    heading: 'Businesses',
    items: [
      {
        title: 'Software Build',
        blurb: 'Web, mobile, and cloud',
        href: '/businesses/website-development',
      },
      {
        title: 'AI and Automation',
        blurb: 'Solutions for growing SMBs',
        href: '/businesses/ai-solutions',
      },
    ],
  },
];

const utilityLinks = [
  { label: 'Hiring services', href: '/hiring', highlight: true },
  { label: 'Insights', href: '/blog' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Webinars', href: '/webinars' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/* ─────────────────────────────────────────── */

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

  // Header is dark over the dark hero (transparent), light when scrolled
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
              'inline-flex h-10 w-10 items-center justify-center rounded-[6px] transition-colors',
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
                ? '!bg-[var(--color-navy-900)] !text-white hover:!bg-[var(--color-navy-800)]'
                : '!bg-white !text-[var(--color-navy-900)] hover:!bg-white/90',
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
      <PortalPanel open={panel === 'portal'} onMouseEnter={() => open('portal')} isLight={isLight} />

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
        'rounded-[6px] px-3 py-2 transition-colors',
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
        'inline-flex items-center gap-1 rounded-[6px] px-3 py-2 transition-colors',
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
/* Services mega menu — 5-column dark surface                                */
/* Cols 1–4: service categories (heading + 1–2 link items + blurb + badge)   */
/* Col 5:    utility / company links list                                    */
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
        'absolute left-0 right-0 top-full overflow-hidden bg-[var(--color-navy-950)] text-white border-b border-white/10 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.5)] transition-[grid-template-rows,opacity] duration-300 grid',
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none',
      )}
    >
      <div className="min-h-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-white/10 py-10">
            {serviceColumns.map((col) => (
              <div key={col.heading} className="lg:px-7 first:lg:pl-0 py-5 md:py-0">
                <p className="text-[0.875rem] font-medium text-[var(--color-navy-300)]">
                  {col.heading}
                </p>
                <ul className="mt-5 space-y-6">
                  {col.items.map((item) => (
                    <li key={item.title}>
                      <a href={item.href} className="group block">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-[1.0625rem] font-bold tracking-[-0.01em] text-white group-hover:text-[var(--color-navy-200)] transition-colors">
                            {item.title}
                          </span>
                          {item.badge === 'live' && <span className="badge badge-live">Live</span>}
                          {item.badge === 'new' && <span className="badge badge-new">New</span>}
                          {item.badge === 'free' && <span className="badge badge-free">Free</span>}
                          {item.icon === 'spark' && (
                            <Sparkles className="h-3 w-3 text-[var(--color-navy-300)]" strokeWidth={2} />
                          )}
                        </div>
                        <p className="mt-1 text-[0.8125rem] text-white/55 leading-snug">
                          {item.blurb}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Col 5 — utility links */}
            <div className="lg:px-7 py-5 md:py-0">
              <ul className="space-y-3">
                {utilityLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={cn(
                        'block text-[0.9375rem] transition-colors',
                        l.highlight
                          ? 'text-[var(--color-navy-300)] font-medium hover:text-white'
                          : 'text-white/80 hover:text-white',
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
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
  isLight,
}: {
  open: boolean;
  onMouseEnter: () => void;
  isLight: boolean;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={cn(
        'absolute right-0 top-full mr-6 w-72 origin-top-right overflow-hidden rounded-[var(--radius-md)] shadow-[0_20px_60px_-20px_rgba(10,14,39,0.32)] transition-[opacity,transform] duration-200',
        isLight
          ? 'border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)]'
          : 'border border-white/10 bg-[var(--color-navy-950)] text-white',
        open ? 'opacity-100 translate-y-2' : 'opacity-0 -translate-y-1 pointer-events-none',
      )}
    >
      <div className="px-5 pt-5 pb-2">
        <p className={cn('kicker', !isLight && 'kicker-on-dark')}>Sign in</p>
      </div>
      <div className="px-2 pb-3">
        {portalLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={cn(
              'flex items-center justify-between px-3 py-2.5 text-[0.9375rem] rounded-[4px] transition-colors',
              isLight ? 'hover:bg-[var(--color-paper-blue)]' : 'hover:bg-white/[0.06]',
            )}
          >
            <span>{l.label}</span>
            <ArrowUpRight
              className={cn('h-3.5 w-3.5', isLight ? 'text-[var(--color-muted)]' : 'text-white/55')}
              strokeWidth={2}
            />
          </a>
        ))}
      </div>
      <div
        className={cn(
          'border-t px-5 py-3 text-[0.75rem]',
          isLight
            ? 'border-[var(--color-line)] text-[var(--color-muted)]'
            : 'border-white/10 text-white/55',
        )}
      >
        Portals open in a new tab.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────── */

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const toggle = (slug: string) => setOpenSlug(openSlug === slug ? null : slug);

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
          <p className="kicker">Services</p>
          <ul className="mt-5 divide-y divide-[var(--color-line)]">
            {segments.map((s) => {
              const expanded = openSlug === s.slug;
              return (
                <li key={s.slug}>
                  <button
                    type="button"
                    className="flex w-full items-baseline justify-between py-4 text-left"
                    onClick={() => toggle(s.slug)}
                    aria-expanded={expanded}
                  >
                    <span className="flex items-baseline gap-3">
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
                          className="link-draw mt-1 inline-flex items-center gap-1.5 py-1 text-[0.875rem] font-medium text-[var(--color-navy-700)]"
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
          <p className="kicker">Company</p>
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
          <p className="kicker">Sign in</p>
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
        <ButtonLink
          href="/contact"
          size="lg"
          className="w-full !bg-[var(--color-navy-900)] !text-white hover:!bg-[var(--color-navy-800)]"
        >
          Talk to us
        </ButtonLink>
      </div>
    </div>
  );
}
