import { createFileRoute } from '@tanstack/react-router'

import BottomMenu from '@/components/navigation/BottomMenu'

export const Route = createFileRoute('/profile')({
  component: ProfileRoute,
})

/**
 * Placeholder profile screen until Clerk-backed profile surfaces are ready.
 */
function ProfileRoute() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-6">
        <h1 className="text-2xl font-semibold text-slate-900">Profile</h1>
        <p className="mt-2 text-slate-600">
          Profile details will appear here. Sign-in and account management are
          still in progress.
        </p>
      </div>
      <BottomMenu />
    </main>
  )
}
