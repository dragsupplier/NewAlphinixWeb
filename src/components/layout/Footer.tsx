import { Container } from '@/components/ui/Container';
import { Wordmark } from '@/components/ui/Wordmark';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { portalLinks } from '@/data/nav';
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

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
  { label: 'Newsletter', href: '/newsletter' },
];

const legalLinks = [
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms of service', href: '/terms-of-service' },
  { label: 'Cookie policy', href: '/cookie-policy' },
  { label: 'Refund policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Grievance redressal', href: '/grievance' },
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
    <footer className="relative grain-ink bg-[var(--color-ink-deep)] text-[var(--color-paper)]">
      {/* Brand-glow accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-500)]/40 to-transparent" />

      {/* Featured CTA band — sits above the link grid */}
      <Container>
        <div className="border-b border-white/10 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-brand-300)]">
                Schedule a 30-minute call
              </p>
              <h3
                className="mt-4 font-display font-bold tracking-[-0.025em] text-balance"
                style={{ fontSize: 'clamp(1.875rem, 4.4vw, 3.25rem)', lineHeight: 1.02 }}
              >
                One conversation. <br />
                One named owner. A scoped plan within a week.
              </h3>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  className="!bg-white !text-[var(--color-ink)] hover:!bg-white/90"
                  trailingArrow
                >
                  Talk to us
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
          </div>
        </div>
      </Container>

      {/* Service directory — 5 columns, one per segment */}
      <Container>
        <div className="border-b border-white/10 py-14 md:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {segments.map((s) => (
              <div key={s.slug}>
                <a href={`/${s.slug}`} className="group inline-block">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
                    {s.index}
                  </p>
                  <p className="mt-1 font-display text-[1.125rem] font-bold tracking-[-0.01em] text-white group-hover:text-[var(--color-brand-300)] transition-colors">
                    {s.name}
                  </p>
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

      {/* Brand block + secondary link columns */}
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

              {/* Contact details */}
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

              {/* Socials */}
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
              <FooterCol heading="Legal" links={legalLinks} />
            </div>
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
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms</a>
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

      {/* Massive cropped wordmark — composition device at the very bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        <p
          className="text-center font-display font-black leading-[0.85] tracking-[-0.05em] text-white/[0.04] -mb-[3vw]"
          style={{ fontSize: 'clamp(8rem, 22vw, 20rem)' }}
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
