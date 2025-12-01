import { createFileRoute } from '@tanstack/react-router'

import BottomMenu from '@/components/navigation/BottomMenu'

export const Route = createFileRoute('/feed')({
  component: FeedRoute,
})

/**
 * Placeholder feed screen until social content is wired.
 */
function FeedRoute() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-6">
        <h1 className="text-2xl font-semibold text-slate-900">My Feed</h1>
        <p className="mt-2 text-slate-600">
          Your personalized feed will live here. For now, explore Food to find
          merchants nearby.
        </p>
      </div>
      <BottomMenu />
    </main>
  )
}
