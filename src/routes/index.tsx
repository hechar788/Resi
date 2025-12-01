import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: () => {
    throw redirect({ to: '/food' })
  },
  component: RedirectToFood,
})

function RedirectToFood() {
  return null
}
