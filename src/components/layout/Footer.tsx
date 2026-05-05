import { Container } from '@/components/ui/Container';
import { Wordmark } from '@/components/ui/Wordmark';
import { segments } from '@/data/segments';
import { portalLinks } from '@/data/nav';
import {
  ArrowUp,
  ArrowUpRight,
  ArrowRight,
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
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-of-service' },
  { label: 'Cookies', href: '/cookie-policy' },
  { label: 'Refund', href: '/refund-policy' },
  { label: 'Grievance', href: '/grievance' },
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
    <footer className="bg-[var(--color-brand-950)] text-white">
      {/* Band 1 — Brand block (left) + Service directory (right) */}
      <Container>
        <div className="border-b border-white/10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16">
            {/* Brand + contact stack */}
            <div className="lg:col-span-4">
              <Wordmark tone="paper" />
              <p className="mt-5 max-w-sm text-[14.5px] leading-[1.7] text-white/70">
                A Pune-based technology platform serving students, colleges, schools, businesses,
                and hiring teams across India.
              </p>

              <ul className="mt-7 space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <div className="text-[13.5px]">
                    <p className="text-white">Alphinix Headquarters</p>
                    <p className="text-white/55">Pune, Maharashtra · India</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <a href="mailto:hello@alphinix.com" className="under-slide text-[13.5px] text-white/85 hover:text-white">
                    hello@alphinix.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-white/55" strokeWidth={1.75} />
                  <a href="tel:+910000000000" className="under-slide text-[13.5px] text-white/85 hover:text-white">
                    +91 00 0000 0000
                  </a>
                </li>
              </ul>

              {/* Social */}
              <div className="mt-8">
                <p className="kicker kicker-on-dark">Follow</p>
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

            {/* Service directory */}
            <div className="lg:col-span-8 lg:pl-10 lg:border-l lg:border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">
                {segments.map((s) => (
                  <div key={s.slug}>
                    <a href={`/${s.slug}`} className="group inline-flex items-baseline gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                        {s.index}
                      </span>
                      <span className="font-display text-[15px] font-semibold tracking-[-0.015em] text-white group-hover:text-[var(--color-brand-200)] transition-colors">
                        {s.name}
                      </span>
                    </a>
                    <ul className="mt-3.5 space-y-2">
                      {s.services.slice(0, 4).map((srv) => (
                        <li key={srv}>
                          <a
                            href={`/${s.slug}#${srv.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="text-[12px] leading-snug text-white/60 hover:text-white transition-colors"
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
          </div>
        </div>
      </Container>

      {/* Band 3 — Nav columns */}
      <Container>
        <div className="border-b border-white/10 py-12 md:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            <FooterCol heading="Company" links={companyLinks} />
            <FooterCol heading="Resources" links={resourceLinks} />
            <FooterCol heading="Portals" links={portalLinks} external />
            <FooterCol heading="Support" links={supportLinks} />
          </div>
        </div>
      </Container>

      {/* Band 4 — Newsletter signup as a hero band */}
      <div className="border-b border-white/10 bg-[var(--color-brand-900)]">
        <Container>
          <div className="py-12 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 items-center">
              <div className="md:col-span-6">
                <p className="kicker kicker-on-dark">Field notes</p>
                <p className="mt-3 font-display text-[22px] md:text-[26px] lg:text-[28px] font-semibold leading-[1.15] tracking-[-0.018em] text-balance">
                  Quarterly notes on hiring trends, academic operations, and applied AI.
                </p>
              </div>
              <form
                className="md:col-span-6 flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">Work email</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@institution.in"
                  className="flex-1 min-w-0 rounded-[6px] bg-white/[0.06] border border-white/15 px-4 py-3 text-[14px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/40 focus:bg-white/[0.08]"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-white px-5 py-3 text-[13.5px] font-semibold text-[var(--color-brand-950)] transition-colors hover:bg-white/90"
                >
                  Subscribe
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      {/* Band 5 — Bottom utility */}
      <Container>
        <div className="py-7 md:py-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-[12px] text-white/55">
              © {year} Alphinix Technologies Private Limited.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px]">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/65 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/sitemap.html"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Sitemap
                </a>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.03] py-1.5 pl-2 pr-3.5 transition-colors hover:border-white/40 hover:bg-white/[0.06] md:self-auto"
              aria-label="Back to top"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-[var(--color-brand-300)] group-hover:text-[var(--color-brand-950)]">
                <ArrowUp className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/65 group-hover:text-white">
                Back to top
              </span>
            </button>
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
      <ul className="mt-4 space-y-2.5">
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
