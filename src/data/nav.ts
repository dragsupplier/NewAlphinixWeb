export type NavLink = { label: string; href: string };

export const portalLinks: NavLink[] = [
  { label: 'Student LMS', href: '#' },
  { label: 'College ERP', href: '#' },
  { label: 'Admin Panel', href: '#' },
];

export const companyLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const resourceLinks: NavLink[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Webinars', href: '/webinars' },
  { label: 'Resources', href: '/resources' },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Students', href: '/students' },
      { label: 'Colleges', href: '/colleges' },
      { label: 'Schools', href: '/schools' },
      { label: 'Businesses', href: '/businesses' },
      { label: 'Hiring', href: '/hiring' },
    ],
  },
  {
    heading: 'Company',
    links: companyLinks,
  },
  {
    heading: 'Resources',
    links: resourceLinks,
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms-of-service' },
      { label: 'Cookies', href: '/cookie-policy' },
      { label: 'Grievance', href: '/grievance' },
    ],
  },
];
