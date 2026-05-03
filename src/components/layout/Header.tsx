import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Building2,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Hexagon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Wordmark } from '@/components/ui/Wordmark';
import { cn } from '@/lib/utils';

type BadgeKind = 'Live' | 'New' | 'Free';

type MenuItem = {
  label: string;
  desc?: string;
  href: string;
  badge?: BadgeKind;
};

type MenuGroup = {
  title: string;
  href: string;
  accent?: boolean;
  items: MenuItem[];
};

type PortalItem = { label: string; desc?: string; href: string; icon?: LucideIcon };

/* ───── Data ─────────────────────────────────────────────────── */

const SOLUTIONS_GROUPS: MenuGroup[] = [
  {
    title: 'For Students',
    href: '/students',
    items: [
      {
        label: 'Industrial Training',
        desc: 'Live cohorts for engineering students.',
        badge: 'Live',
        href: '/students#training',
      },
      {
        label: 'Placement Prep',
        desc: 'Aptitude, technicals, and mock interviews.',
        href: '/students#placement-prep',
      },
    ],
  },
  {
    title: 'For Colleges',
    href: '/colleges',
    items: [
      {
        label: 'Campus Drives',
        desc: 'On-campus and pooled placement drives.',
        href: '/colleges#placements',
      },
      {
        label: 'NAAC + NBA',
        desc: 'Documentation across accreditation cycles.',
        href: '/colleges#accreditation',
      },
    ],
  },
  {
    title: 'For Schools',
    href: '/schools',
    items: [
      {
        label: 'ATL Labs',
        desc: 'Atal Tinkering Labs setup and curriculum.',
        href: '/schools#atl',
      },
      {
        label: 'AI & Robotics',
        desc: 'Hands-on programs aligned to NEP 2020.',
        badge: 'New',
        href: '/schools#ai-robotics',
      },
    ],
  },
  {
    title: 'For Businesses',
    href: '/businesses',
    items: [
      {
        label: 'Software & AI',
        desc: 'Web, mobile, and applied AI delivery.',
        href: '/businesses#software',
      },
      {
        label: 'Cloud & DevOps',
        desc: 'Infrastructure, security, and reliability.',
        href: '/businesses#cloud',
      },
    ],
  },
  {
    title: 'For Hiring Teams',
    href: '/hiring',
    accent: true,
    items: [
      {
        label: 'Pre-trained Interns',
        desc: 'Bench of screened candidates ready to start.',
        badge: 'New',
        href: '/hiring#interns',
      },
      {
        label: 'Bulk Drives',
        desc: 'Permanent, contract, and RPO at scale.',
        href: '/hiring#bulk',
      },
    ],
  },
];

const RESOURCES_GROUPS: MenuGroup[] = [
  {
    title: 'Read',
    href: '/blog',
    items: [
      {
        label: 'Field Notes',
        desc: 'Quarterly notes from the practice.',
        href: '/blog',
      },
      {
        label: 'Case Studies',
        desc: 'Selected engagements.',
        href: '/case-studies',
      },
    ],
  },
  {
    title: 'Watch',
    href: '/webinars',
    items: [
      {
        label: 'Webinars',
        desc: 'Upcoming live sessions.',
        badge: 'Live',
        href: '/webinars',
      },
      {
        label: 'Workshops',
        desc: 'Hands-on intensives.',
        href: '/workshops',
      },
    ],
  },
  {
    title: 'Download',
    href: '/resources',
    items: [
      {
        label: 'Guides & Roadmaps',
        desc: 'Free resources by segment.',
        badge: 'Free',
        href: '/resources',
      },
      {
        label: 'Glossary',
        desc: 'Industry terminology.',
        href: '/glossary',
      },
    ],
  },
  {
    title: 'Subscribe',
    href: '/newsletter',
    accent: true,
    items: [
      {
        label: 'Monthly Brief',
        desc: 'One email a month, no fluff.',
        href: '/newsletter',
      },
      {
        label: 'RSS Feed',
        desc: 'Latest field notes via RSS.',
        href: '/rss.xml',
      },
    ],
  },
];

const PORTAL: PortalItem[] = [
  { label: 'Student LMS',   desc: 'Courses, assessments, certificates.', href: '#', icon: GraduationCap },
  { label: 'College ERP',   desc: 'Academic and placement operations.',   href: '#', icon: Building2 },
  { label: 'Admin Console', desc: 'Internal pipeline and analytics.',     href: '#', icon: ShieldCheck },
];

const SIMPLE_LINKS = [
  { label: 'Industries', href: '#audiences' },
  { label: 'Approach',   href: '#approach' },
  { label: 'About',      href: '/about' },
  { label: 'Careers',    href: '/careers' },
];

/* ───── Header ───────────────────────────────────────────────── */

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [utilityHidden, setUtilityHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 4);
        setUtilityHidden(y > 80);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobile]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div
        className={cn(
          'utility-bar hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:block',
          utilityHidden ? 'max-h-0 opacity-0' : 'max-h-9 opacity-100',
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-white/80">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-[var(--color-brand-300)] opacity-75 pulse-dot" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-brand-300)]" />
              </span>
              <span className="text-white/90 font-medium">Open</span>
              <span className="text-white/45">·</span>
              <span className="inline-flex items-center gap-1.5 text-white/65">
                <MapPin className="h-3 w-3" strokeWidth={2.25} />
                Pune, IN
              </span>
            </span>
            <a href="tel:+910000000000" className="inline-flex items-center gap-1.5 text-white/65 hover:text-white transition-colors">
              <Phone className="h-3 w-3" strokeWidth={2.25} />
              +91 00000 00000
            </a>
            <a href="mailto:hello@alphinix.in" className="inline-flex items-center gap-1.5 text-white/65 hover:text-white transition-colors">
              <Mail className="h-3 w-3" strokeWidth={2.25} />
              hello@alphinix.in
            </a>
          </div>
          <div className="flex items-center gap-5 text-white/65">
            <a href="/about" className="hover:text-white transition-colors">Investors</a>
            <a href="/about" className="hover:text-white transition-colors">Partners</a>
            <a href="/blog" className="hover:text-white transition-colors">Newsroom</a>
            <a href="/contact" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          'border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300',
          scrolled
            ? 'border-[var(--color-line)] bg-white/85 shadow-[0_1px_0_0_rgba(11,18,32,0.04),0_8px_24px_-12px_rgba(11,18,32,0.08)] backdrop-blur-md'
            : 'border-transparent bg-[var(--color-bg)]',
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:px-8">
          <Wordmark />

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            onMouseLeave={() => setOpen(null)}
          >
            <DropdownTrigger
              label="Solutions"
              isOpen={open === 'solutions'}
              onEnter={() => setOpen('solutions')}
            />
            <DropdownTrigger
              label="Resources"
              isOpen={open === 'resources'}
              onEnter={() => setOpen('resources')}
            />
            {SIMPLE_LINKS.map((l) => (
              <SimpleLink key={l.label} label={l.label} href={l.href} onEnter={() => setOpen(null)} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <PortalDropdown items={PORTAL} />
            <a
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-4 py-2 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(29,58,165,0.55)] transition-colors hover:bg-[var(--color-brand-800)]"
            >
              Request a proposal
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </a>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-[6px] text-[var(--color-fg)] ring-1 ring-[var(--color-line)] lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mega menus — full-width dark panels */}
        <MegaMenu visible={open === 'solutions'} onClose={() => setOpen(null)}>
          <MegaPanel
            groups={SOLUTIONS_GROUPS}
            footer={{
              body: 'Not sure which one fits? Tell us your audience and we will recommend.',
              cta: 'Talk to a consultant',
              href: '/contact',
            }}
          />
        </MegaMenu>

        <MegaMenu visible={open === 'resources'} onClose={() => setOpen(null)}>
          <MegaPanel
            groups={RESOURCES_GROUPS}
            footer={{
              body: 'Quarterly notes on hiring trends, academic operations, and applied AI.',
              cta: 'Visit the blog',
              href: '/blog',
            }}
          />
        </MegaMenu>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'border-b border-[var(--color-line)] bg-[var(--color-bg)] lg:hidden',
          mobile ? 'max-h-[calc(100vh-60px)] overflow-y-auto' : 'max-h-0 overflow-hidden',
          'transition-[max-height] duration-300',
        )}
      >
        <div className="space-y-6 px-5 py-6">
          <MobileGroupSection title="Solutions" groups={SOLUTIONS_GROUPS} onItemClick={() => setMobile(false)} />
          <MobileGroupSection title="Resources" groups={RESOURCES_GROUPS} onItemClick={() => setMobile(false)} />

          <div className="space-y-1.5">
            <p className="px-1 pb-1.5 text-[10.5px] font-mono font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-700)]">
              Portal
            </p>
            {PORTAL.map((p) => (
              <a
                key={p.label}
                href={p.href}
                onClick={() => setMobile(false)}
                className="flex items-start gap-3 rounded-[6px] px-2 py-2.5 hover:bg-[var(--color-canvas)]"
              >
                {p.icon ? (
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[6px] bg-[var(--color-brand-50)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-100)]">
                    <p.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                ) : null}
                <span className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[var(--color-fg)]">{p.label}</span>
                  {p.desc ? <span className="text-[12px] text-[var(--color-fg-3)]">{p.desc}</span> : null}
                </span>
              </a>
            ))}
          </div>

          <div className="space-y-1">
            <p className="px-1 pb-1.5 text-[10.5px] font-mono font-semibold uppercase tracking-[0.16em] text-[var(--color-fg-4)]">
              More
            </p>
            {SIMPLE_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobile(false)}
                className="block rounded-[6px] px-2 py-2.5 text-[14.5px] font-medium text-[var(--color-fg-2)] hover:bg-[var(--color-canvas)]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-4 py-3 text-[14px] font-semibold text-white"
          >
            Request a proposal
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ───── Triggers ─────────────────────────────────────────────── */

function DropdownTrigger({
  label,
  isOpen,
  onEnter,
}: {
  label: string;
  isOpen: boolean;
  onEnter: () => void;
}) {
  return (
    <button
      onMouseEnter={onEnter}
      className={cn(
        'group relative inline-flex items-center gap-1 rounded-[6px] px-3.5 py-2 text-[14px] font-medium transition-colors',
        isOpen ? 'text-[var(--color-fg)]' : 'text-[var(--color-fg-2)] hover:text-[var(--color-fg)]',
      )}
      aria-expanded={isOpen}
    >
      {label}
      <ChevronDown
        className={cn(
          'h-3.5 w-3.5 transition-transform duration-200',
          isOpen && 'rotate-180 text-[var(--color-brand-700)]',
        )}
        strokeWidth={2.25}
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-3.5 -bottom-px h-0.5 origin-left bg-[var(--color-brand-700)] transition-transform duration-200',
          isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
        )}
      />
    </button>
  );
}

function SimpleLink({
  label,
  href,
  onEnter,
}: {
  label: string;
  href: string;
  onEnter: () => void;
}) {
  return (
    <a
      href={href}
      onMouseEnter={onEnter}
      className="group relative px-3.5 py-2 text-[14px] font-medium text-[var(--color-fg-2)] transition-colors hover:text-[var(--color-fg)]"
    >
      {label}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3.5 -bottom-px h-0.5 origin-left scale-x-0 bg-[var(--color-brand-700)] transition-transform duration-200 group-hover:scale-x-100"
      />
    </a>
  );
}

/* ───── Mega menu ────────────────────────────────────────────── */

function MegaMenu({
  visible,
  onClose,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          'fixed inset-0 top-[68px] -z-10 transition-opacity duration-200 md:top-[105px]',
          visible
            ? 'pointer-events-auto bg-[var(--color-fg)]/15 backdrop-blur-[2px] opacity-100'
            : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
      />
      <div
        onMouseLeave={onClose}
        className={cn(
          'absolute inset-x-0 top-full origin-top transition-[opacity,transform] duration-200',
          visible
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        <div className="border-y border-white/5 bg-[var(--color-fg)] shadow-[0_24px_60px_-24px_rgba(11,18,32,0.5)]">
          {children}
        </div>
      </div>
    </>
  );
}

function MegaPanel({
  groups,
  footer,
}: {
  groups: MenuGroup[];
  footer?: { body: string; cta: string; href: string };
}) {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div
        className={cn(
          'grid divide-x divide-white/10',
          groups.length === 5
            ? 'grid-cols-5'
            : groups.length === 4
              ? 'grid-cols-4'
              : 'grid-cols-3',
        )}
      >
        {groups.map((g, gi) => (
          <div
            key={g.title}
            className={cn(
              'py-9',
              gi === 0
                ? 'pr-7'
                : gi === groups.length - 1
                  ? 'pl-7'
                  : 'px-7',
            )}
            style={{ animationDelay: `${gi * 70}ms` }}
          >
            <a href={g.href} className="group/header inline-flex items-center gap-2">
              <span
                className={cn(
                  'font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] transition-colors',
                  g.accent ? 'text-[var(--color-brand-300)]' : 'text-[var(--color-brand-200)]',
                  'group-hover/header:text-white',
                )}
              >
                {g.title}
              </span>
              {g.accent && (
                <Hexagon
                  className="h-3 w-3 text-[var(--color-brand-300)]"
                  strokeWidth={1.75}
                  fill="currentColor"
                  fillOpacity={0.3}
                />
              )}
            </a>

            <ul className="mt-6 space-y-5">
              {g.items.map((it) => (
                <li key={it.label}>
                  <a href={it.href} className="group/item block">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[14.5px] font-semibold text-white transition-colors group-hover/item:text-[var(--color-brand-200)]">
                        {it.label}
                      </span>
                      {it.badge && <Badge type={it.badge} tone="dark" />}
                    </div>
                    {it.desc && (
                      <p className="mt-1 text-[12.5px] leading-[1.45] text-white/55">
                        {it.desc}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {footer && (
        <div className="flex items-center justify-between border-t border-white/10 py-4">
          <p className="text-[12.5px] text-white/55 max-w-[44ch]">{footer.body}</p>
          <a
            href={footer.href}
            className="group inline-flex items-center gap-1.5 text-[12.5px] font-mono font-semibold uppercase tracking-[0.14em] text-white"
          >
            <span className="under-slide">{footer.cta}</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.25}
            />
          </a>
        </div>
      )}
    </div>
  );
}

/* ───── Badge ────────────────────────────────────────────────── */

function Badge({ type, tone = 'dark' }: { type: BadgeKind; tone?: 'dark' | 'light' }) {
  const cls =
    tone === 'dark'
      ? {
          Live: 'bg-white/10 text-white',
          New: 'bg-[var(--color-brand-200)] text-[var(--color-brand-900)]',
          Free: 'bg-white/10 text-white',
        }
      : {
          Live: 'bg-[var(--color-brand-700)] text-white',
          New: 'bg-[var(--color-brand-100)] text-[var(--color-brand-700)]',
          Free: 'bg-[var(--color-canvas-2)] text-[var(--color-fg-2)]',
        };
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-[3px] px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]',
        cls[type],
      )}
    >
      {type === 'Live' && (
        <span
          aria-hidden="true"
          className={cn(
            'block h-1 w-1 rounded-full pulse-dot',
            tone === 'dark' ? 'bg-[var(--color-brand-300)]' : 'bg-white',
          )}
        />
      )}
      {type}
    </span>
  );
}

/* ───── Portal dropdown ──────────────────────────────────────── */

function PortalDropdown({ items }: { items: PortalItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          'inline-flex items-center gap-1.5 rounded-[6px] px-3.5 py-2 text-[13.5px] font-medium ring-1 transition-colors',
          open
            ? 'text-[var(--color-fg)] ring-[var(--color-line-2)] bg-[var(--color-canvas)]'
            : 'text-[var(--color-fg-2)] ring-[var(--color-line)] hover:text-[var(--color-fg)] hover:ring-[var(--color-line-2)]',
        )}
        aria-expanded={open}
      >
        Portal Login
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          strokeWidth={2.25}
        />
      </button>
      <div
        className={cn(
          'absolute right-0 top-full w-[320px] origin-top-right pt-2 transition-[opacity,transform] duration-200',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        <div className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-bg)] shadow-xl">
          <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-canvas)] px-4 py-3">
            <p className="kicker">Portal Login</p>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-5)]">
              {String(items.length).padStart(2, '0')} surfaces
            </span>
          </div>
          <ul className="p-1.5">
            {items.map((p, i) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  className="group relative flex items-center gap-3 rounded-[4px] p-3 transition-colors hover:bg-[var(--color-canvas)]"
                >
                  {p.icon ? (
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-[var(--color-canvas-2)] text-[var(--color-brand-700)] transition-colors group-hover:bg-[var(--color-brand-700)] group-hover:text-white">
                      <p.icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                  ) : null}
                  <span className="flex flex-1 flex-col">
                    <span className="text-[13px] font-semibold text-[var(--color-fg)]">{p.label}</span>
                    <span className="mt-0.5 text-[12px] leading-snug text-[var(--color-fg-3)]">{p.desc}</span>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-fg-5)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-3 left-1.5 w-0.5 origin-top scale-y-0 rounded-full bg-[var(--color-brand-700)] transition-transform duration-200 group-hover:scale-y-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ───── Mobile groups ────────────────────────────────────────── */

function MobileGroupSection({
  title,
  groups,
  onItemClick,
}: {
  title: string;
  groups: MenuGroup[];
  onItemClick?: () => void;
}) {
  return (
    <div className="space-y-4">
      <p className="px-1 text-[10.5px] font-mono font-semibold uppercase tracking-[0.16em] text-[var(--color-fg-4)]">
        {title}
      </p>
      <div className="space-y-5">
        {groups.map((g) => (
          <div key={g.title} className="space-y-1.5">
            <a
              href={g.href}
              onClick={onItemClick}
              className={cn(
                'inline-flex items-center gap-1.5 px-1 text-[10.5px] font-mono font-semibold uppercase tracking-[0.16em]',
                g.accent ? 'text-[var(--color-brand-700)]' : 'text-[var(--color-brand-700)]',
              )}
            >
              {g.title}
              {g.accent && (
                <Hexagon
                  className="h-2.5 w-2.5 text-[var(--color-brand-700)]"
                  strokeWidth={1.75}
                  fill="currentColor"
                  fillOpacity={0.4}
                />
              )}
            </a>
            {g.items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                onClick={onItemClick}
                className="flex flex-col gap-1 rounded-[6px] px-2 py-2.5 hover:bg-[var(--color-canvas)]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-semibold text-[var(--color-fg)]">{it.label}</span>
                  {it.badge && <Badge type={it.badge} tone="light" />}
                </div>
                {it.desc && <span className="text-[12.5px] text-[var(--color-fg-3)]">{it.desc}</span>}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
