import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router';
import { Home } from '@/routes/Home';
import { Stub } from '@/routes/Stub';
import { About } from '@/routes/About';
import { Services } from '@/routes/Services';
import { Contact } from '@/routes/Contact';
import { Blog } from '@/routes/Blog';
import { Careers } from '@/routes/Careers';
import { Webinars } from '@/routes/Webinars';
import { Resources } from '@/routes/Resources';
import { CaseStudies } from '@/routes/CaseStudies';
import { StudentsHub } from '@/routes/students/StudentsHub';
import { StudentServiceDetail } from '@/routes/students/StudentServiceDetail';
import { CollegesHub } from '@/routes/colleges/CollegesHub';
import { CollegeServiceDetail } from '@/routes/colleges/CollegeServiceDetail';
import { SchoolsHub } from '@/routes/schools/SchoolsHub';
import { SchoolServiceDetail } from '@/routes/schools/SchoolServiceDetail';
import { BusinessesHub } from '@/routes/businesses/BusinessesHub';
import { BusinessServiceDetail } from '@/routes/businesses/BusinessServiceDetail';
import { HiringHub } from '@/routes/hiring/HiringHub';
import { HiringServiceDetail } from '@/routes/hiring/HiringServiceDetail';
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

/* ───── Core pages ───────────────────────────────────────── */

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

/* ───── Content pages ────────────────────────────────────── */

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: Blog,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/careers',
  component: Careers,
});

const webinarsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/webinars',
  component: Webinars,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: Resources,
});

const caseStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/case-studies',
  component: CaseStudies,
});

/* ───── Students section ─────────────────────────────────── */

const studentsHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students',
  component: StudentsHub,
});

const studentServiceRoutes = studentServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/students/${s.slug}`,
    component: () => <StudentServiceDetail slug={s.slug} />,
  }),
);

/* ───── Segment hubs ─────────────────────────────────────── */

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

/* ───── Segment sub-service detail pages ────────────────── */

const collegeServiceRoutes = collegeServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/colleges/${s.slug}`,
    component: () => <CollegeServiceDetail slug={s.slug} />,
  }),
);
const schoolServiceRoutes = schoolServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/schools/${s.slug}`,
    component: () => <SchoolServiceDetail slug={s.slug} />,
  }),
);
const businessServiceRoutes = businessServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/businesses/${s.slug}`,
    component: () => <BusinessServiceDetail slug={s.slug} />,
  }),
);
const hiringServiceRoutes = hiringServices.map((s) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/hiring/${s.slug}`,
    component: () => <HiringServiceDetail slug={s.slug} />,
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

/* ───── Utility ──────────────────────────────────────────── */

const thankYouRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/thank-you',
  component: ThankYou,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <Stub kicker="404" title="Page not found" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,

  aboutRoute,
  servicesRoute,
  contactRoute,

  blogRoute,
  careersRoute,
  webinarsRoute,
  resourcesRoute,
  caseStudiesRoute,

  studentsHubRoute,
  ...studentServiceRoutes,

  collegesHubRoute,
  schoolsHubRoute,
  businessesHubRoute,
  hiringHubRoute,

  ...collegeServiceRoutes,
  ...schoolServiceRoutes,
  ...businessServiceRoutes,
  ...hiringServiceRoutes,

  ...legalRoutes,
  thankYouRoute,

  notFoundRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
