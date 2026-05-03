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
];

const supportLinks = [
  { label: 'Help centre', href: '/help' },
  { label: 'Status', href: '/status' },
  { label: 'Security', href: '/security' },
  { label: 'Accessibility', href: '/accessibility' },
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
    <footer className="bg-[var(--color-navy-950)] text-white">
      {/* Row 1 — Pre-footer CTA strip */}
      <Container>
        <div className="border-b border-white/10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
            <div className="lg:col-span-8">
              <p className="kicker kicker-on-dark">Let&apos;s build something</p>
              <h3
                className="mt-5 font-display font-bold tracking-[-0.025em] text-balance"
                style={{ fontSize: 'clamp(2rem, 4.6vw, 3.75rem)', lineHeight: 1 }}
              >
                One conversation. One named owner. A scoped plan within a week.
              </h3>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  trailingArrow
                  className="!bg-white !text-[var(--color-navy-900)] hover:!bg-white/90"
                >
                  Schedule a call
                </ButtonLink>
                <ButtonLink
                  href="/services"
                  size="lg"
                  className="!bg-transparent !text-white !ring-1 !ring-inset !ring-white/35 hover:!ring-white/65"
                >
                  See services
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Row 2 — Service directory */}
      <Container>
        <div className="border-b border-white/10 py-14">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="kicker kicker-on-dark">Service directory</p>
              <p className="mt-2 font-display text-[1.5rem] md:text-[1.75rem] font-bold tracking-[-0.015em]">
                Five segments. <span className="text-white/55">{segments.reduce((n, s) => n + s.services.length, 0)} services.</span>
              </p>
            </div>
            <a
              href="/services"
              className="link-draw inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-white/85"
            >
              Full directory <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
            {segments.map((s) => (
              <div key={s.slug}>
                <a href={`/${s.slug}`} className="group inline-flex items-baseline gap-2">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/50">
                    {s.index}
                  </span>
                  <span className="font-display text-[1.0625rem] font-bold tracking-[-0.01em] text-white group-hover:text-[var(--color-navy-300)] transition-colors">
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
        <div className="py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <Wordmark tone="paper" />
              <p className="mt-7 max-w-md text-[1rem] leading-relaxed text-white/75">
                A Pune-based technology platform serving students, colleges, schools, businesses, and hiring
                teams across India.
              </p>

              <ul className="mt-9 space-y-4 text-[0.9375rem] text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <span>
                    Alphinix Headquarters <br />
                    <span className="text-white/55">Pune, Maharashtra · India</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <a href="mailto:hello@alphinix.com" className="link-draw">hello@alphinix.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <a href="tel:+910000000000" className="link-draw">+91 00 0000 0000</a>
                </li>
              </ul>

              <div className="mt-9 grid grid-cols-2 gap-6 max-w-md border-t border-white/10 pt-6">
                <div>
                  <p className="kicker kicker-on-dark">Office hours</p>
                  <p className="mt-2 font-display text-[1rem] font-bold text-white">Mon — Sat</p>
                  <p className="text-[0.875rem] text-white/65">10:00 — 19:00 IST</p>
                </div>
                <div>
                  <p className="kicker kicker-on-dark">Response within</p>
                  <p className="mt-2 font-display text-[1rem] font-bold text-white">1 working day</p>
                  <p className="text-[0.875rem] text-white/65">After form submission</p>
                </div>
              </div>

              <div className="mt-9">
                <p className="kicker kicker-on-dark">Follow us</p>
                <ul className="mt-3 flex items-center gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-white/15 text-white/75 transition-colors hover:border-white/40 hover:text-white"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 lg:pl-6 lg:border-l lg:border-white/10">
              <FooterCol heading="Company" links={companyLinks} />
              <FooterCol heading="Resources" links={resourceLinks} />
              <FooterCol heading="Portals" links={portalLinks} external />
              <FooterCol heading="Support" links={supportLinks} />
            </div>
          </div>
        </div>
      </Container>

      {/* Row 4 — Legal */}
      <Container>
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="kicker kicker-on-dark">Legal</p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.8125rem] text-white/65 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Row 5 — Bottom utility */}
      <Container>
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[0.75rem] text-white/55">
            <p>© {year} Alphinix Technologies Private Limited. All rights reserved.</p>
            <div className="flex items-center gap-5 font-mono uppercase tracking-[0.14em] text-[0.6875rem]">
              <a href="/sitemap.html" className="hover:text-white transition-colors">Sitemap</a>
              <span aria-label="Locale">EN · IN</span>
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
      <p className="kicker kicker-on-dark">{heading}</p>
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
