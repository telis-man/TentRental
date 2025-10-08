import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/reservation')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/reservation"!</div>;
}
