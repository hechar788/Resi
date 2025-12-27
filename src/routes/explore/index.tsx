import { createFileRoute } from "@tanstack/react-router"
import { Binoculars } from "lucide-react"

import { BottomNav } from "@/components/navigation/BottomNav"

export const Route = createFileRoute("/explore/")({
  component: ExplorePage,
})

/**
 * Placeholder forage page.
 * TODO: Implement forage page content
 */
function ExplorePage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="flex flex-col items-center justify-center flex-1 p-4 text-center">
        <Binoculars className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Forage</h1>
        <p className="text-muted-foreground max-w-md">
          Forage for new discoveries. Find trending merchants and experiences.
        </p>
        {/* TODO: Implement forage page
            - Trending merchants
            - New arrivals
            - Nearby locations
            - Categories to explore
            - Featured collections
        */}
      </div>
      <BottomNav />
    </div>
  )
}
