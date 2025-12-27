import { useMemo, useState } from "react"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { UtensilsCrossed } from "lucide-react"

import { BottomNav } from "@/components/navigation/BottomNav"
import { CuisineCarousel } from "@/components/eats/CuisineCarousel"
import { LocationPicker } from "@/components/eats/LocationPicker"
import { MerchantCard } from "@/components/eats/MerchantCard"
import { SearchBar } from "@/components/eats/SearchBar"
import { MOCK_MERCHANTS } from "@/data/merchants/mockMerchants"

import type { CuisineType } from "@/data/merchants/types"

interface EatsSearchParams {
  q?: string
  category?: CuisineType
  minRating?: number
}

export const Route = createFileRoute("/eats/")({
  component: EatsPage,
  validateSearch: (search: Record<string, unknown>): EatsSearchParams => ({
    q: search.q as string | undefined,
    category: search.category as CuisineType | undefined,
    minRating: search.minRating ? Number(search.minRating) : undefined,
  }),
})

/**
 * Main merchant discovery page with filtering and search.
 * Displays a grid of merchant cards with cuisine filtering, text search, and rating filters.
 */
function EatsPage() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  // Local state for UI
  const [searchQuery, setSearchQuery] = useState(search.q || "")
  const [selectedCuisine, setSelectedCuisine] = useState<CuisineType | null>(
    search.category || null
  )

  // Filter merchants based on search criteria
  const filteredMerchants = useMemo(() => {
    return MOCK_MERCHANTS.filter((merchant) => {
      // Text search
      if (search.q && !merchant.name.toLowerCase().includes(search.q.toLowerCase())) {
        return false
      }

      // Category filter
      if (selectedCuisine && merchant.category !== selectedCuisine) {
        return false
      }

      // Rating filter
      if (search.minRating && merchant.rating < search.minRating) {
        return false
      }

      return true
    })
  }, [search.q, selectedCuisine, search.minRating])

  // Debounced search handler
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    // Simple debounce by using setTimeout
    const timeoutId = setTimeout(() => {
      navigate({
        search: (prev) => ({ ...prev, q: value || undefined }),
      })
    }, 300)
    return () => clearTimeout(timeoutId)
  }

  // Cuisine filter handler
  const handleCuisineChange = (cuisine: CuisineType | null) => {
    setSelectedCuisine(cuisine)
    navigate({
      search: (prev) => ({ ...prev, category: cuisine || undefined }),
    })
  }

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="w-full md:max-w-[80%] md:mx-auto">
        {/* Location Picker (disabled, TODO) */}
        <LocationPicker location="Current Location" onLocationChange={() => {}} disabled />

        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-40 bg-background border-b p-4">
          <SearchBar
            value={searchQuery}
            onValueChange={handleSearchChange}
            onRatingFilterChange={(rating) => {
              navigate({
                search: (prev) => ({ ...prev, minRating: rating || undefined }),
              })
            }}
            onCategoryFilterChange={(category) => {
              setSelectedCuisine(category)
              navigate({
                search: (prev) => ({ ...prev, category: category || undefined }),
              })
            }}
          />
        </div>

        {/* Cuisine Carousel */}
        <CuisineCarousel
          selectedCuisine={selectedCuisine}
          onSelectCuisine={handleCuisineChange}
        />

        {/* Merchant Grid or Empty State */}
        <div className="flex-1 p-4">
          {filteredMerchants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMerchants.map((merchant) => (
                <MerchantCard key={merchant.id} merchant={merchant} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <UtensilsCrossed className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">No merchants found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
