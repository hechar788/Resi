import { useState } from "react"
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { ArrowLeft, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/navigation/BottomNav"
import { MerchantHeader } from "@/components/eats/MerchantHeader"
import { MerchantMenu } from "@/components/eats/MerchantMenu"
import { MenuCategorySidebar } from "@/components/eats/MenuCategorySidebar"
import { getMerchantById } from "@/data/merchants/mockMerchants"

export const Route = createFileRoute("/eats/$merchantId")({
  component: MerchantProfilePage,
  loader: ({ params }) => {
    const merchant = getMerchantById(params.merchantId)
    if (!merchant) {
      throw notFound()
    }
    return { merchant }
  },
  notFoundComponent: MerchantNotFound,
})

/**
 * 404 component when merchant is not found
 */
function MerchantNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-2">Merchant Not Found</h1>
      <p className="text-muted-foreground mb-4 text-center max-w-md">
        The merchant you're looking for doesn't exist or may have been removed.
      </p>
      <Link to="/eats">
        <Button>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Merchants
        </Button>
      </Link>
    </div>
  )
}

/**
 * Merchant public profile page with header, menu, and reels tab.
 * Displays merchant information, menu categories, and items.
 */
function MerchantProfilePage() {
  const { merchant } = Route.useLoaderData()
  const [activeTab, setActiveTab] = useState<"menu" | "reels">("menu")

  return (
    <div className="min-h-screen pb-20">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-background border-b">
        <Link
          to="/eats"
          className="flex items-center gap-2 px-4 py-3 hover:bg-muted transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Merchants</span>
        </Link>
      </div>

      {/* Header */}
      <MerchantHeader
        merchant={merchant}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {activeTab === "menu" && (
          <div className="grid md:grid-cols-[200px_1fr] gap-6">
            <MenuCategorySidebar categories={merchant.menu.categories} />
            <MerchantMenu menu={merchant.menu} />
          </div>
        )}

        {activeTab === "reels" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Video className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold">Reels Coming Soon</h3>
            <p className="text-sm text-muted-foreground max-w-md mt-2">
              Video reels feature will be implemented in a future update.
            </p>
            {/* TODO: Implement video reels feature
                - Add reels data to merchant mock data
                - Create ReelSlider component (vertical scroll like TikTok)
                - Create ReelCard component with video player
                - Add like/comment functionality (optional)
            */}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  )
}
