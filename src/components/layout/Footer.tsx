import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Wordmark } from '@/components/ui/Wordmark';
import { ButtonLink } from '@/components/ui/Button';
import { segments } from '@/data/segments';
import { portalLinks } from '@/data/nav';
import {
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

function useIstClock() {
  const [time, setTime] = useState(() => formatIst(new Date()));
  useEffect(() => {
    const id = window.setInterval(() => setTime(formatIst(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

function formatIst(date: Date) {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
    .format(date)
    .replace(/ /g, ' ');
}

export function Footer() {
  const year = new Date().getFullYear();
  const totalServices = segments.reduce((n, s) => n + s.services.length, 0);
  const ist = useIstClock();

  return (
    <footer className="relative overflow-hidden bg-[var(--color-fg)] text-white">
      {/* Pre-footer CTA strip */}
      <Container>
        <div className="border-b border-white/10 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
            <div className="lg:col-span-8">
              <p className="kicker kicker-on-dark">Let&apos;s build something</p>
              <h3 className="mt-4 font-display text-[30px] md:text-[42px] lg:text-[52px] font-semibold leading-[1.04] tracking-[-0.022em] text-balance">
                One conversation. One named owner.
                <br />
                <span className="text-[var(--color-brand-200)]">A scoped plan within a week.</span>
              </h3>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <div className="flex flex-wrap items-center gap-3">
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

              {/* Live status row — IST clock + response window */}
              <div className="mt-8 grid grid-cols-2 gap-6 max-w-md border-t border-white/10 pt-6">
                <div>
                  <p className="kicker kicker-on-dark inline-flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-300)] opacity-75 pulse-dot" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-brand-300)]" />
                    </span>
                    Pune time
                  </p>
                  <p className="mt-2 font-mono text-[18px] font-semibold tabular-nums text-white">
                    {ist}
                  </p>
                  <p className="text-[12px] text-white/55">IST · UTC+5:30</p>
                </div>
                <div>
                  <p className="kicker kicker-on-dark">Response within</p>
                  <p className="mt-2 font-display text-[15px] font-semibold tracking-[-0.018em] text-white">
                    1 working day
                  </p>
                  <p className="text-[12.5px] text-white/65">After form submission</p>
                </div>
              </div>

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

      {/* Bottom utility row */}
      <Container>
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[11.5px] text-white/55">
            <p>© {year} Alphinix Technologies Private Limited. All rights reserved.</p>
            <div className="flex items-center gap-5 font-mono uppercase tracking-[0.14em] text-[10.5px]">
              <a href="/sitemap.html" className="hover:text-white transition-colors">
                Sitemap
              </a>
              <span aria-label="Locale">EN · IN</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                Back to top
                <ArrowUpRight
                  className="h-3 w-3 -rotate-45 transition-transform group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee credit strip */}
      <div className="border-t border-white/10 overflow-hidden">
        <div className="marquee-slow py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/30">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-4 whitespace-nowrap">
              Alphinix Technologies Private Limited
              <span className="h-1 w-1 rounded-full bg-white/20" />
              Pune · India
              <span className="h-1 w-1 rounded-full bg-white/20" />
              Est. {year}
              <span className="h-1 w-1 rounded-full bg-white/20" />
            </span>
          ))}
        </div>
      </div>

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
