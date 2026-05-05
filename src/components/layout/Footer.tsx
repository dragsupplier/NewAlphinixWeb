import { Container } from '@/components/ui/Container';
import { Wordmark } from '@/components/ui/Wordmark';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { portalLinks } from '@/data/nav';
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';

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
  const totalServices = segments.reduce((n, s) => n + s.services.length, 0);

  return (
    <footer className="relative overflow-hidden bg-[var(--color-fg)] text-white">
      {/* Pre-footer CTA strip */}
      <Container>
        <div className="border-b border-white/10 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-end">
            <div className="lg:col-span-7">
              <p className="kicker kicker-on-dark">Let&apos;s build something</p>
              <h3 className="mt-4 font-display text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.06] tracking-[-0.022em] text-balance">
                One conversation. One named owner.{' '}
                <span className="text-[var(--color-brand-200)]">A scoped plan within a week.</span>
              </h3>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:justify-end">
                <ButtonLink
                  href="/contact"
                  size="lg"
                  trailingArrow
                  className="!bg-white !text-[var(--color-fg)] hover:!bg-white/90"
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
          </div>
        </div>
      </Container>

      {/* Service directory */}
      <Container>
        <div className="border-b border-white/10 py-14">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker kicker-on-dark">Service directory</p>
              <p className="mt-2 font-display text-[22px] md:text-[26px] font-semibold tracking-[-0.018em]">
                Five segments.{' '}
                <span className="text-white/55">{totalServices} services.</span>
              </p>
            </div>
            <a
              href="/services"
              className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-[0.14em] text-white/85"
            >
              <span className="under-slide">Full directory</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {segments.map((s) => (
              <div key={s.slug}>
                <a href={`/${s.slug}`} className="group inline-flex items-baseline gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    {s.index}
                  </span>
                  <span className="font-display text-[16px] font-semibold tracking-[-0.015em] text-white group-hover:text-[var(--color-brand-200)] transition-colors">
                    {s.name}
                  </span>
                </a>
                <ul className="mt-4 space-y-2">
                  {s.services.map((srv) => (
                    <li key={srv}>
                      <a
                        href={`/${s.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="text-[12.5px] leading-snug text-white/65 hover:text-white transition-colors"
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

      {/* Brand block + secondary columns */}
      <Container>
        <div className="py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <Wordmark tone="paper" />
              <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-white/75">
                A Pune-based technology platform serving students, colleges, schools, businesses, and
                hiring teams across India.
              </p>

              <ul className="mt-8 space-y-3.5 text-[14px] text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <span>
                    Alphinix Headquarters
                    <br />
                    <span className="text-white/55">Pune, Maharashtra · India</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <a href="mailto:hello@alphinix.com" className="under-slide">
                    hello@alphinix.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <a href="tel:+910000000000" className="under-slide">
                    +91 00 0000 0000
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <p className="kicker kicker-on-dark">Follow us</p>
                <ul className="mt-3 flex items-center gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className="social-icon relative inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-white/15 text-white/75 transition-colors hover:border-white/40 hover:text-white"
                      >
                        <span className="ic-base inline-flex">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span className="ic-hover">
                          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                        </span>
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

      {/* Legal */}
      <Container>
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="kicker kicker-on-dark">Legal</p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[12.5px] text-white/65 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom utility row — copyright · sitemap · back-to-top */}
      <Container>
        <div className="border-t border-white/10 py-6 md:py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-[11.5px] text-white/55">
              © {year} Alphinix Technologies Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="/sitemap.html"
                className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55 hover:text-white transition-colors"
              >
                Sitemap
              </a>
              {/* Professional back-to-top: pill button with circular arrow chip */}
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] py-1.5 pl-2 pr-3.5 transition-colors hover:border-white/35 hover:bg-white/[0.06]"
                aria-label="Back to top"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-[var(--color-brand-300)] group-hover:text-[var(--color-fg)]">
                  <ArrowUp className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/65 group-hover:text-white">
                  Back to top
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Giant outlined wordmark — sits behind everything, drifts slowly */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none flex justify-center px-4 pb-3 md:pb-6"
      >
        <span className="footer-wordmark wordmark-drift text-[clamp(80px,18vw,260px)] leading-none">
          ALPHINIX
        </span>
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
      <p className="kicker kicker-on-dark">{heading}</p>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="group inline-flex items-center gap-1.5 text-[13px] text-white/75 hover:text-white transition-colors"
            >
              {l.label}
              {external && (
                <ArrowUpRight
                  className="h-3 w-3 text-white/40 group-hover:text-white"
                  strokeWidth={2}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
