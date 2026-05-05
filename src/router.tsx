import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router';
import { Home } from '@/routes/Home';
import { Stub } from '@/routes/Stub';
import { StudentsHub } from '@/routes/students/StudentsHub';
import { StudentServiceDetail } from '@/routes/students/StudentServiceDetail';
import { CollegesHub } from '@/routes/colleges/CollegesHub';
import { SchoolsHub } from '@/routes/schools/SchoolsHub';
import { BusinessesHub } from '@/routes/businesses/BusinessesHub';
import { HiringHub } from '@/routes/hiring/HiringHub';
import { LegalPage } from '@/routes/legal/LegalPage';
import { ThankYou } from '@/routes/ThankYou';
import { legalPages } from '@/data/legalContent';
import { studentServices } from '@/data/studentServices';
import { collegeServices, schoolServices, businessServices, hiringServices } from '@/data/segmentServices';

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

// One static route per service so the URL is friendly: /students/<slug>
const studentServiceRoutes = studentServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/students/${s.slug}`,
    component: () => <StudentServiceDetail slug={s.slug} />,
  }),
);

/* ───── Colleges / Schools / Businesses / Hiring hubs ─────── */

const collegesHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/colleges',
  component: CollegesHub,
});

const schoolsHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/schools',
  component: SchoolsHub,
});

const businessesHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/businesses',
  component: BusinessesHub,
});

const hiringHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hiring',
  component: HiringHub,
});

/* Sub-service stubs (keep nav functional until detail pages ship) */
const collegeServiceStubs = collegeServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/colleges/${s.slug}`,
    component: () => <Stub kicker={`Colleges · ${s.kicker}`} title={s.name} />,
  }),
);
const schoolServiceStubs = schoolServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/schools/${s.slug}`,
    component: () => <Stub kicker={`Schools · ${s.kicker}`} title={s.name} />,
  }),
);
const businessServiceStubs = businessServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/businesses/${s.slug}`,
    component: () => <Stub kicker={`Businesses · ${s.kicker}`} title={s.name} />,
  }),
);
const hiringServiceStubs = hiringServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/hiring/${s.slug}`,
    component: () => <Stub kicker={`Hiring · ${s.kicker}`} title={s.name} />,
  }),
);

/* ───── Legal pages (shared LegalPage component) ─────────── */

const legalRoutes = Object.values(legalPages).map((p) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/${p.slug}`,
    component: () => <LegalPage page={p} />,
  }),
);

/* ───── Utility — thank-you ──────────────────────────────── */

const thankYouRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/thank-you',
  component: ThankYou,
});

/* ───── Stubs (kept until those sections are built) ──────── */

const stubRoute = (path: string, kicker: string, title: string) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: () => <Stub kicker={kicker} title={title} />,
  });

const stubRoutes = [
  stubRoute('/about', 'About', 'About Alphinix'),
  stubRoute('/services', 'Services', 'Services directory'),
  stubRoute('/blog', 'Blog', 'Blog'),
  stubRoute('/case-studies', 'Case studies', 'Case studies'),
  stubRoute('/webinars', 'Webinars', 'Webinars'),
  stubRoute('/resources', 'Resources', 'Resources'),
  stubRoute('/careers', 'Careers', 'Careers'),
  stubRoute('/contact', 'Contact', 'Contact Alphinix'),
];

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <Stub kicker="404" title="Page not found" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  studentsHubRoute,
  ...studentServiceRoutes,
  collegesHubRoute,
  schoolsHubRoute,
  businessesHubRoute,
  hiringHubRoute,
  ...collegeServiceStubs,
  ...schoolServiceStubs,
  ...businessServiceStubs,
  ...hiringServiceStubs,
  ...legalRoutes,
  thankYouRoute,
  ...stubRoutes,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
