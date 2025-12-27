import { createFileRoute } from "@tanstack/react-router"
import { ChefHat } from "lucide-react"

import { BottomNav } from "@/components/navigation/BottomNav"

export const Route = createFileRoute("/")({
  component: HomePage,
})

/**
 * Placeholder home/feed page.
 * TODO: Implement feed page content
 */
function HomePage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="flex flex-col items-center justify-center flex-1 p-4 text-center">
        <ChefHat className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">My Feed</h1>
        <p className="text-muted-foreground max-w-md">
          Your personalized feed coming soon. See updates, recommendations, and more.
        </p>
        {/* TODO: Implement feed page
            - Personalized merchant recommendations
            - Recent activity feed
            - Featured merchants carousel
            - Popular categories
            - Recent orders (if authenticated)
            - Updates from followed merchants
        */}
      </div>
      <BottomNav />
    </div>
  )
}
