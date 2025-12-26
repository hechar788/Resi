import { createFileRoute } from "@tanstack/react-router"
import { Home as HomeIcon } from "lucide-react"

import { BottomNav } from "@/components/navigation/BottomNav"

export const Route = createFileRoute("/")({
  component: HomePage,
})

/**
 * Placeholder home page.
 * TODO: Implement home page content
 */
function HomePage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="flex flex-col items-center justify-center flex-1 p-4 text-center">
        <HomeIcon className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Welcome to Resi</h1>
        <p className="text-muted-foreground max-w-md">
          Home page coming soon. Explore merchants by clicking the Eats tab below.
        </p>
        {/* TODO: Implement home page
            - Hero section with app introduction
            - Featured merchants carousel
            - Popular categories
            - Recent activity/orders (if authenticated)
            - Call-to-action buttons
        */}
      </div>
      <BottomNav />
    </div>
  )
}
