import { Outlet, createFileRoute } from '@tanstack/react-router'

import Header from '@/components/Header'

export const Route = createFileRoute('/_clientAuthed/demo/_header')({
  component: HeaderLayout,
})

function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
