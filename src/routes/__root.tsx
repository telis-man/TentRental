import { NavBar } from '@/layouts/components/navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { LoaderCircle } from 'lucide-react';

export const Route = createRootRoute({
  pendingComponent: () => <LoaderCircle className="animate-spin" />,

  component: () => (
    <>
      <NavBar />

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
