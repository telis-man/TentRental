import AdminAvailabilityCalendar from '@/layouts/components/adminPage/adminCalendar'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex justify-center mt-40'>

      <AdminAvailabilityCalendar />
    </div>

  )
}
