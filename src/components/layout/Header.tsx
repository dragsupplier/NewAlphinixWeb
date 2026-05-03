import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Newspaper,
  BookOpen,
  Calendar,
  Download,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Wordmark } from '@/components/ui/Wordmark';
import { cn } from '@/lib/utils';

type Item = { label: string; desc?: string; href: string; icon?: LucideIcon };

const SOLUTIONS: Item[] = [
  { label: 'For Students',     desc: 'Industrial training, internships, certifications.', href: '/students',   icon: GraduationCap },
  { label: 'For Colleges',     desc: 'Placements, NAAC and NBA support, AI/IoT labs.',     href: '/colleges',   icon: Building2 },
  { label: 'For Schools',      desc: 'AI, robotics, and STEM/ATL labs.',                   href: '/schools',    icon: School },
  { label: 'For Businesses',   desc: 'Web, mobile, AI, automation, cloud.',                href: '/businesses', icon: Rocket },
  { label: 'For Hiring Teams', desc: 'Permanent, contract, and bulk drives.',              href: '/hiring',     icon: Users },
];

const RESOURCES: Item[] = [
  { label: 'Insights',          desc: 'Field notes from the practice.', href: '/blog',         icon: Newspaper },
  { label: 'Webinars',          desc: 'Upcoming live sessions.',        href: '/webinars',     icon: Calendar },
  { label: 'Guides & Roadmaps', desc: 'Free downloads by segment.',     href: '/resources',    icon: Download },
  { label: 'Case Studies',      desc: 'Selected engagements.',          href: '/case-studies', icon: BookOpen },
];

const PORTAL: Item[] = [
  { label: 'Student LMS',   desc: 'Courses, assessments, certificates.',   href: '#', icon: GraduationCap },
  { label: 'College ERP',   desc: 'Academic and placement operations.',     href: '#', icon: Building2 },
  { label: 'Admin Console', desc: 'Internal pipeline and analytics.',       href: '#', icon: ShieldCheck },
];

const SIMPLE_LINKS = [
  { label: 'Industries', href: '#audiences' },
  { label: 'Approach',   href: '#approach' },
  { label: 'About',      href: '/about' },
  { label: 'Careers',    href: '/careers' },
];

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
      {/* Utility bar — collapses on scroll past 80px */}
      <div
        className={cn(
          'utility-bar hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:block',
          utilityHidden ? 'max-h-0 opacity-0' : 'max-h-9 opacity-100',
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-white/80">
              <MapPin className="h-3 w-3" strokeWidth={2.25} />
              Pune, Maharashtra · India
            </span>
            <a href="tel:+910000000000" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white">
              <Phone className="h-3 w-3" strokeWidth={2.25} />
              +91 00000 00000
            </a>
            <a href="mailto:hello@alphinix.in" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white">
              <Mail className="h-3 w-3" strokeWidth={2.25} />
              hello@alphinix.in
            </a>
          </div>
          <div className="flex items-center gap-5 text-white/80">
            <a href="/about" className="hover:text-white">Investors</a>
            <a href="/about" className="hover:text-white">Partners</a>
            <a href="/blog" className="hover:text-white">Newsroom</a>
            <a href="/contact" className="hover:text-white">Support</a>
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpen(null)}>
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
              <a
                key={l.label}
                href={l.href}
                onMouseEnter={() => setOpen(null)}
                className="px-3.5 py-2 text-[14px] font-medium text-[var(--color-fg-2)] transition-colors hover:text-[var(--color-fg)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden items-center gap-2 lg:flex">
            <PortalDropdown items={PORTAL} />
            <a
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-[6px] bg-[var(--color-brand-700)] px-4 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-800)]"
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

        {/* Mega menus */}
        <MegaMenu visible={open === 'solutions'} onClose={() => setOpen(null)}>
          <MegaPanel
            title="Solutions"
            tagline="Five doors. One platform."
            body="Tell us about your institution or company — we will recommend the right entry point."
            cta="Talk to a consultant"
            ctaHref="/contact"
            items={SOLUTIONS}
          />
        </MegaMenu>

        <MegaMenu visible={open === 'resources'} onClose={() => setOpen(null)}>
          <MegaPanel
            title="Resources"
            tagline="Insights, sessions, and free tools."
            body="Quarterly notes on hiring trends, academic operations, and applied AI."
            cta="Visit the blog"
            ctaHref="/blog"
            items={RESOURCES}
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
        <div className="space-y-5 px-5 py-5">
          <MobileGroup title="Solutions" items={SOLUTIONS} onItemClick={() => setMobile(false)} />
          <MobileGroup title="Resources" items={RESOURCES} onItemClick={() => setMobile(false)} />
          <MobileGroup title="Portal" items={PORTAL} onItemClick={() => setMobile(false)} />
          <div className="space-y-1">
            <p className="px-1 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-4)]">More</p>
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

/* ─────────────────────────────────────────── */

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
        isOpen ? 'bg-[var(--color-canvas)] text-[var(--color-fg)]' : 'text-[var(--color-fg-2)] hover:text-[var(--color-fg)]',
      )}
      aria-expanded={isOpen}
    >
      {label}
      <ChevronDown
        className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180 text-[var(--color-brand-700)]')}
        strokeWidth={2.25}
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-3.5 -bottom-px h-0.5 origin-left bg-[var(--color-brand-700)] transition-transform duration-200',
          isOpen ? 'scale-x-100' : 'scale-x-0',
        )}
      />
    </button>
  );
}

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
        <div className="mx-auto max-w-7xl px-5 pt-2 md:px-8">
          <div className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-bg)] shadow-2xl ring-1 ring-[var(--color-fg)]/[0.04]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

function MegaPanel({
  title,
  tagline,
  body,
  cta,
  ctaHref,
  items,
}: {
  title: string;
  tagline: string;
  body: string;
  cta: string;
  ctaHref: string;
  items: Item[];
}) {
  return (
    <div className="grid grid-cols-12">
      {/* Left feature card — brand-mesh */}
      <aside className="col-span-12 border-b border-[var(--color-line)] lg:col-span-4 lg:border-b-0 lg:border-r">
        <div className="brand-mesh relative h-full overflow-hidden p-7 text-white md:p-8">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-200)]">
              {title}
            </p>
            <span className="rounded-[4px] bg-white/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 ring-1 ring-white/15">
              {String(items.length).padStart(2, '0')} options
            </span>
          </div>
          <h3 className="mt-5 font-display text-[26px] font-semibold leading-[1.1] tracking-tight text-white md:text-[28px]">
            {tagline}
          </h3>
          <p className="mt-4 max-w-[34ch] text-[13.5px] leading-[1.6] text-white/75">
            {body}
          </p>
          <div className="mt-7 border-t border-white/15 pt-5">
            <a
              href={ctaHref}
              className="group inline-flex items-center gap-1.5 rounded-[6px] bg-white px-4 py-2.5 text-[13px] font-semibold text-[var(--color-brand-950)] transition-colors hover:bg-[var(--color-brand-50)]"
            >
              {cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </aside>

      {/* Items grid */}
      <ul className="col-span-12 grid grid-cols-1 gap-0 p-3 sm:grid-cols-2 lg:col-span-8">
        {items.map((it, i) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="group relative flex items-start gap-3 rounded-[6px] p-3.5 transition-colors hover:bg-[var(--color-canvas)]"
            >
              {it.icon ? (
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[6px] bg-[var(--color-canvas-2)] text-[var(--color-brand-700)] transition-colors group-hover:bg-[var(--color-brand-700)] group-hover:text-white">
                  <it.icon className="h-[17px] w-[17px]" strokeWidth={2} />
                </span>
              ) : null}
              <span className="flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[14px] font-semibold text-[var(--color-fg)]">{it.label}</span>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-fg-5)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="mt-0.5 text-[12.5px] leading-snug text-[var(--color-fg-3)]">{it.desc}</span>
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-3.5 left-2 w-0.5 origin-top scale-y-0 rounded-full bg-[var(--color-brand-700)] transition-transform duration-200 group-hover:scale-y-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PortalDropdown({ items }: { items: Item[] }) {
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

function MobileGroup({
  title,
  items,
  onItemClick,
}: {
  title: string;
  items: Item[];
  onItemClick?: () => void;
}) {
  return (
    <div className="space-y-1">
      <p className="px-1 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-4)]">
        {title}
      </p>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          onClick={onItemClick}
          className="flex items-start gap-3 rounded-[6px] px-2 py-2.5 hover:bg-[var(--color-canvas)]"
        >
          {it.icon ? (
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[6px] bg-[var(--color-brand-50)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-100)]">
              <it.icon className="h-4 w-4" strokeWidth={2} />
            </span>
          ) : null}
          <span className="flex flex-col">
            <span className="text-[14px] font-medium text-[var(--color-fg)]">{it.label}</span>
            {it.desc ? <span className="text-[12px] text-[var(--color-fg-3)]">{it.desc}</span> : null}
          </span>
        </a>
      ))}
    </div>
  );
}
