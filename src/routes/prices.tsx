import Prices from '@/layouts/components/prices/Prices'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Prices />
}
