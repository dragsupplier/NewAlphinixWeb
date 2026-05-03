import { Container } from '@/components/ui/Container';
import { Wordmark } from '@/components/ui/Wordmark';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { portalLinks } from '@/data/nav';
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Youtube, Send } from 'lucide-react';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Our practice', href: '/about#practice' },
  { label: 'Careers', href: '/careers' },
  { label: 'Press kit', href: '/press' },
  { label: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { label: 'Insights', href: '/blog' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Webinars', href: '/webinars' },
  { label: 'Resources', href: '/resources' },
];

const legalLinks = [
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms of service', href: '/terms-of-service' },
  { label: 'Cookie policy', href: '/cookie-policy' },
  { label: 'Refund policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Grievance redressal', href: '/grievance' },
];

const supportLinks = [
  { label: 'Help centre', href: '/help' },
  { label: 'Status', href: '/status' },
  { label: 'Security', href: '/security' },
  { label: 'Accessibility', href: '/accessibility' },
];

const socials = [
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'X (Twitter)', href: '#', Icon: Twitter },
  { label: 'YouTube', href: '#', Icon: Youtube },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative grain-ink bg-[var(--color-ink-deep)] text-[var(--color-paper)] overflow-hidden">
      {/* Brand-glow accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-500)]/40 to-transparent" />

      {/* Row 1 — Featured CTA + Quick contact form */}
      <Container>
        <div className="border-b border-white/10 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
            {/* Lead statement */}
            <div className="lg:col-span-6">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[var(--color-brand-300)]">
                Let&apos;s build something
              </p>
              <h3
                className="mt-5 font-display font-bold tracking-[-0.025em] text-balance"
                style={{ fontSize: 'clamp(2rem, 4.6vw, 3.5rem)', lineHeight: 1 }}
              >
                One conversation. <br />
                One named owner. <br />
                A scoped plan within a week.
              </h3>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  trailingArrow
                  className="!bg-white !text-[var(--color-ink)] hover:!bg-white/90"
                >
                  Schedule a call
                </ButtonLink>
                <ButtonLink
                  href="/services"
                  size="lg"
                  className="!bg-transparent !text-white !ring-1 !ring-inset !ring-white/30 hover:!ring-white/60"
                >
                  See services
                </ButtonLink>
              </div>
            </div>

            {/* Quick contact form */}
            <div className="lg:col-span-6">
              <div className="rounded-[var(--radius-lg)] border border-white/15 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
                  Drop a quick note
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/75">
                  Two lines is enough. We&apos;ll reply within one working day with a named owner.
                </p>

                <form
                  className="mt-5 grid grid-cols-1 sm:grid-cols-6 gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = '/contact';
                  }}
                >
                  <label className="sr-only" htmlFor="footer-name">Your name</label>
                  <input
                    id="footer-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    className="sm:col-span-3 h-11 rounded-[8px] border border-white/15 bg-white/5 px-3 text-[0.9375rem] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
                  />
                  <label className="sr-only" htmlFor="footer-email">Your email</label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    className="sm:col-span-3 h-11 rounded-[8px] border border-white/15 bg-white/5 px-3 text-[0.9375rem] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
                  />
                  <label className="sr-only" htmlFor="footer-message">Message</label>
                  <textarea
                    id="footer-message"
                    name="message"
                    rows={3}
                    placeholder="What outcome do you need?"
                    className="sm:col-span-6 rounded-[8px] border border-white/15 bg-white/5 px-3 py-2.5 text-[0.9375rem] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 resize-none"
                  />
                  <button
                    type="submit"
                    className="sm:col-span-6 inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-white text-[var(--color-ink)] px-5 text-[0.9375rem] font-medium hover:bg-white/90 transition-colors"
                  >
                    Send <Send className="h-3.5 w-3.5" strokeWidth={2} />
                  </button>
                </form>
                <p className="mt-3 text-[0.75rem] text-white/45">
                  By sending you agree to our <a href="/privacy-policy" className="link-draw text-white/65">privacy policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Row 2 — Service directory (5 segments × all sub-services) */}
      <Container>
        <div className="border-b border-white/10 py-14 md:py-16">
          <div className="mb-10 flex items-end justify-between">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/55">
              Service directory
            </p>
            <a
              href="/services"
              className="link-draw inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-white/85"
            >
              See all <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {segments.map((s) => (
              <div key={s.slug}>
                <a href={`/${s.slug}`} className="group inline-flex items-baseline gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: `var(${s.colorVar})` }}
                  />
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
                    {s.index}
                  </span>
                  <span className="font-display text-[1.0625rem] font-bold tracking-[-0.01em] text-white group-hover:text-[var(--color-brand-300)] transition-colors">
                    {s.name}
                  </span>
                </a>
                <ul className="mt-4 space-y-2">
                  {s.services.map((srv) => (
                    <li key={srv}>
                      <a
                        href={`/${s.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="text-[0.8125rem] leading-snug text-white/65 hover:text-white transition-colors"
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
      </Container>

      {/* Row 3 — Brand block + secondary columns */}
      <Container>
        <div className="py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            {/* Brand block */}
            <div className="lg:col-span-5">
              <Wordmark tone="paper" />
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-white/70">
                A Pune-based technology platform serving students, colleges, schools, businesses, and hiring
                teams across India.
              </p>

              <ul className="mt-8 space-y-3 text-[0.875rem] text-white/75">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/45" strokeWidth={1.75} />
                  <span>
                    Alphinix HQ <br />
                    Pune, Maharashtra · India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-white/45" strokeWidth={1.75} />
                  <a href="mailto:hello@alphinix.com" className="link-draw">hello@alphinix.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-white/45" strokeWidth={1.75} />
                  <a href="tel:+910000000000" className="link-draw">+91 00 0000 0000</a>
                </li>
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
                    Office hours
                  </p>
                  <p className="mt-1 text-[0.875rem] text-white/85">Mon — Sat · 10:00–19:00 IST</p>
                </div>
                <div>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
                    Response within
                  </p>
                  <p className="mt-1 text-[0.875rem] text-white/85">1 working day</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
                  Follow us
                </p>
                <ul className="mt-3 flex items-center gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/15 text-white/75 transition-colors hover:border-white/40 hover:text-white"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Secondary link columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
              <FooterCol heading="Company" links={companyLinks} />
              <FooterCol heading="Resources" links={resourceLinks} />
              <FooterCol heading="Portals" links={portalLinks} external />
              <FooterCol heading="Support" links={supportLinks} />
            </div>
          </div>

          {/* Legal row — separate row so it doesn't get lost */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
              Legal
            </p>
            <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.8125rem] text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom utility row */}
      <Container>
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[0.75rem] text-white/55">
            <p>© {year} Alphinix Technologies Private Limited. All rights reserved.</p>
            <div className="flex items-center gap-5 font-mono uppercase tracking-[0.14em] text-[0.6875rem]">
              <a href="/sitemap.html" className="hover:text-white transition-colors">Sitemap</a>
              <span>EN · IN</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                Back to top <ArrowUpRight className="h-3 w-3 -rotate-45" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Massive cropped wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p
          className="text-center font-display font-black leading-[0.85] tracking-[-0.05em] text-white/[0.04] -mb-[3vw]"
          style={{ fontSize: 'clamp(8rem, 22vw, 22rem)' }}
        >
          ALPHINIX
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
  external,
}: {
  heading: string;
  links: { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
        {heading}
      </p>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="group inline-flex items-center gap-1.5 text-[0.875rem] text-white/75 hover:text-white transition-colors"
            >
              {l.label}
              {external && <ArrowUpRight className="h-3 w-3 text-white/40 group-hover:text-white" strokeWidth={2} />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
