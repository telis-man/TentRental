import Gallery from '@/layouts/components/gallery/Gallery';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/gallery')({
  component: RouteComponent,
});

function RouteComponent() {
  return (<Gallery />);
}
