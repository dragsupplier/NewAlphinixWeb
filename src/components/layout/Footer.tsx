import { Container } from '@/components/ui/Container';
import { Wordmark } from '@/components/ui/Wordmark';
import {
  ArrowUp,
  ArrowUpRight,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';

const solutionsLinks = [
  { label: 'Students',   href: '/students' },
  { label: 'Colleges',   href: '/colleges' },
  { label: 'Schools',    href: '/schools' },
  { label: 'Businesses', href: '/businesses' },
  { label: 'Hiring',     href: '/hiring' },
];

const companyLinks = [
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers',  href: '/careers' },
  { label: 'Contact',  href: '/contact' },
];

const resourceLinks = [
  { label: 'Insights',     href: '/blog' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Webinars',     href: '/webinars' },
  { label: 'Resources',    href: '/resources' },
];

const portalLinks = [
  { label: 'Student LMS',  href: '#' },
  { label: 'College ERP',  href: '#' },
  { label: 'Admin Panel',  href: '#' },
];

const legalLinks = [
  { label: 'Privacy',    href: '/privacy-policy' },
  { label: 'Terms',      href: '/terms-of-service' },
  { label: 'Cookies',    href: '/cookie-policy' },
  { label: 'Refund',     href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Grievance',  href: '/grievance' },
];

const socials = [
  { label: 'LinkedIn',    href: '#', Icon: Linkedin },
  { label: 'Instagram',   href: '#', Icon: Instagram },
  { label: 'X (Twitter)', href: '#', Icon: Twitter },
  { label: 'YouTube',     href: '#', Icon: Youtube },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070a14] text-white">
      {/* ───── Main band ───────────────────────────────────── */}
      <Container>
        <div className="py-12 md:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-x-12">
            {/* Brand block (col 1-5) */}
            <div className="col-span-2 lg:col-span-5">
              <Wordmark tone="paper" />
              <p className="mt-4 max-w-sm text-[13.5px] leading-[1.65] text-white/55">
                A Pune-based technology platform serving students, colleges, schools,
                businesses, and hiring teams across India.
              </p>

              <div className="mt-6 flex flex-col gap-1.5 text-[13px]">
                <a
                  href="mailto:hello@alphinix.in"
                  className="under-slide w-fit text-white/80 hover:text-white"
                >
                  hello@alphinix.in
                </a>
                <a
                  href="tel:+910000000000"
                  className="under-slide w-fit text-white/80 hover:text-white"
                >
                  +91 00000 00000
                </a>
                <p className="text-white/45">Pune, Maharashtra · India</p>
              </div>

              <ul className="mt-6 flex items-center gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="grid h-8 w-8 place-items-center rounded-[6px] border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav columns (col 6-12) */}
            <FooterCol heading="Solutions" links={solutionsLinks} className="col-span-1 lg:col-span-2" />
            <FooterCol heading="Company"   links={companyLinks}   className="col-span-1 lg:col-span-2" />
            <FooterCol heading="Resources" links={resourceLinks}  className="col-span-1 lg:col-span-2" />
            <FooterCol heading="Portals"   links={portalLinks}    className="col-span-1 lg:col-span-1" external />
          </div>
        </div>
      </Container>

      {/* ───── Inline newsletter row ──────────────────────── */}
      <div className="border-y border-white/[0.06]">
        <Container>
          <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:gap-6">
            <p className="font-display text-[14.5px] tracking-[-0.012em] text-white/85">
              <span className="text-white/45 font-mono text-[10.5px] uppercase tracking-[0.16em] mr-3">
                Field notes
              </span>
              Quarterly notes on hiring, academic ops, and applied AI.
            </p>
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-newsletter" className="sr-only">Work email</label>
              <input
                id="footer-newsletter"
                type="email"
                required
                placeholder="you@institution.in"
                className="flex-1 min-w-0 rounded-[5px] bg-white/[0.04] border border-white/10 px-3.5 py-2 text-[13px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/30"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-1 rounded-[5px] bg-white px-3.5 py-2 text-[12.5px] font-semibold text-[#070a14] transition-colors hover:bg-white/90"
                aria-label="Subscribe"
              >
                Subscribe
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* ───── Bottom utility ────────────────────────────── */}
      <Container>
        <div className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[11.5px] text-white/40 order-2 md:order-1">
            © {year} Alphinix Technologies Private Limited. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11.5px] order-1 md:order-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-white/55 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-1.5 self-start text-[11px] font-mono uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white order-3"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" strokeWidth={2.25} />
            Top
          </button>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
  className,
  external,
}: {
  heading: string;
  links: { label: string; href: string }[];
  className?: string;
  external?: boolean;
}) {
  return (
    <div className={className}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold text-white/40">
        {heading}
      </p>
      <ul className="mt-3.5 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="group inline-flex items-center gap-1 text-[13px] text-white/70 hover:text-white transition-colors"
            >
              {l.label}
              {external && (
                <ArrowUpRight
                  className="h-3 w-3 text-white/30 group-hover:text-white/70"
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
