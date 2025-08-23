import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tents')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tents"!</div>
}
