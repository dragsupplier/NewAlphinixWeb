import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router';
import { Home } from '@/routes/Home';
import { Stub } from '@/routes/Stub';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const stubRoute = (path: string, kicker: string, title: string) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: () => <Stub kicker={kicker} title={title} />,
  });

const stubRoutes = [
  stubRoute('/about', 'About', 'About Alphinix'),
  stubRoute('/services', 'Services', 'Services directory'),
  stubRoute('/students', 'Students', 'Students'),
  stubRoute('/colleges', 'Colleges', 'Colleges'),
  stubRoute('/schools', 'Schools', 'Schools'),
  stubRoute('/businesses', 'Businesses', 'Businesses'),
  stubRoute('/hiring', 'Hiring', 'Hiring'),
  stubRoute('/blog', 'Blog', 'Blog'),
  stubRoute('/case-studies', 'Case studies', 'Case studies'),
  stubRoute('/webinars', 'Webinars', 'Webinars'),
  stubRoute('/resources', 'Resources', 'Resources'),
  stubRoute('/careers', 'Careers', 'Careers'),
  stubRoute('/contact', 'Contact', 'Contact Alphinix'),
  stubRoute('/privacy-policy', 'Legal', 'Privacy policy'),
  stubRoute('/terms-of-service', 'Legal', 'Terms of service'),
  stubRoute('/cookie-policy', 'Legal', 'Cookie policy'),
  stubRoute('/grievance', 'Legal', 'Grievance redressal'),
];

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <Stub kicker="404" title="Page not found" />,
});

const routeTree = rootRoute.addChildren([indexRoute, ...stubRoutes, notFoundRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
