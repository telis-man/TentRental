import { NavBar } from '@/components/layouts/navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
