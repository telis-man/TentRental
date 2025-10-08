import { Dimensions } from '@/layouts/components/dimensions';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/tents')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Dimensions />;
}
