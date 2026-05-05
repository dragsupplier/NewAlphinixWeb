import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router';
import { Home } from '@/routes/Home';
import { Stub } from '@/routes/Stub';
import { StudentsHub } from '@/routes/students/StudentsHub';
import { StudentApply } from '@/routes/students/StudentApply';
import { StudentServiceDetail } from '@/routes/students/StudentServiceDetail';
import { studentServices } from '@/data/studentServices';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

/* ───── Students section ─────────────────────────────────── */

const studentsHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students',
  component: StudentsHub,
});

const studentsApplyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students/apply',
  component: StudentApply,
});

// One static route per service so the URL is friendly: /students/<slug>
const studentServiceRoutes = studentServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/students/${s.slug}`,
    component: () => <StudentServiceDetail slug={s.slug} />,
  }),
);

/* ───── Other stubs (kept until those sections are built) ─── */

const stubRoute = (path: string, kicker: string, title: string) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: () => <Stub kicker={kicker} title={title} />,
  });

const stubRoutes = [
  stubRoute('/about', 'About', 'About Alphinix'),
  stubRoute('/services', 'Services', 'Services directory'),
  stubRoute('/colleges', 'Colleges', 'Colleges'),
  stubRoute('/schools', 'Schools', 'Schools'),
  stubRoute('/businesses', 'Businesses', 'Businesses'),
  stubRoute('/hiring', 'Hiring', 'Hiring'),
  stubRoute('/blog', 'Blog', 'Blog'),
  stubRoute('/case-studies', 'Case studies', 'Case studies'),
  stubRoute('/webinars', 'Webinars', 'Webinars'),
  stubRoute('/workshops', 'Workshops', 'Workshops'),
  stubRoute('/resources', 'Resources', 'Resources'),
  stubRoute('/glossary', 'Glossary', 'Glossary'),
  stubRoute('/newsletter', 'Newsletter', 'Newsletter'),
  stubRoute('/careers', 'Careers', 'Careers'),
  stubRoute('/contact', 'Contact', 'Contact Alphinix'),
  stubRoute('/help', 'Support', 'Help centre'),
  stubRoute('/status', 'Support', 'System status'),
  stubRoute('/security', 'Support', 'Security'),
  stubRoute('/accessibility', 'Support', 'Accessibility'),
  stubRoute('/press', 'Press', 'Press kit'),
  stubRoute('/privacy-policy', 'Legal', 'Privacy policy'),
  stubRoute('/terms-of-service', 'Legal', 'Terms of service'),
  stubRoute('/cookie-policy', 'Legal', 'Cookie policy'),
  stubRoute('/refund-policy', 'Legal', 'Refund policy'),
  stubRoute('/disclaimer', 'Legal', 'Disclaimer'),
  stubRoute('/grievance', 'Legal', 'Grievance redressal'),
];

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <Stub kicker="404" title="Page not found" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  studentsHubRoute,
  studentsApplyRoute,
  ...studentServiceRoutes,
  ...stubRoutes,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
