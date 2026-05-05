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
import { StudentCohorts } from '@/routes/students/StudentCohorts';
import { StudentMentors } from '@/routes/students/StudentMentors';
import { StudentOutcomes } from '@/routes/students/StudentOutcomes';
import { StudentFees } from '@/routes/students/StudentFees';
import { CollegesHub } from '@/routes/colleges/CollegesHub';
import { SchoolsHub } from '@/routes/schools/SchoolsHub';
import { BusinessesHub } from '@/routes/businesses/BusinessesHub';
import { HiringHub } from '@/routes/hiring/HiringHub';
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

const studentsApplyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students/apply',
  component: StudentApply,
});

const studentsCohortsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students/cohorts',
  component: StudentCohorts,
});

const studentsMentorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students/mentors',
  component: StudentMentors,
});

const studentsOutcomesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students/outcomes',
  component: StudentOutcomes,
});

const studentsFeesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students/fees',
  component: StudentFees,
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
  studentsCohortsRoute,
  studentsMentorsRoute,
  studentsOutcomesRoute,
  studentsFeesRoute,
  ...studentServiceRoutes,
  collegesHubRoute,
  schoolsHubRoute,
  businessesHubRoute,
  hiringHubRoute,
  ...collegeServiceStubs,
  ...schoolServiceStubs,
  ...businessServiceStubs,
  ...hiringServiceStubs,
  ...stubRoutes,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
