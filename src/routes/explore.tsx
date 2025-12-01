import { createFileRoute } from '@tanstack/react-router'

import BottomMenu from '@/components/navigation/BottomMenu'

export const Route = createFileRoute('/explore')({
  component: ExploreRoute,
})

/**
 * Placeholder explore screen for map or discovery experiences.
 */
function ExploreRoute() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-6">
        <h1 className="text-2xl font-semibold text-slate-900">Explore</h1>
        <p className="mt-2 text-slate-600">
          Discovery tooling is coming soon. Try browsing Food while we build the
          rest.
        </p>
      </div>
      <BottomMenu />
    </main>
  )
}
