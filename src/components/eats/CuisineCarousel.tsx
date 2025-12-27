import {
  Beef,
  Coffee,
  Cookie,
  Fish,
  Flame,
  Sandwich,
  Soup,
  UtensilsCrossed,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { CUISINE_TYPES } from "@/data/merchants/constants"

import type { CuisineType } from "@/data/merchants/types"
import type { LucideIcon } from "lucide-react"

interface CuisineCarouselProps {
  selectedCuisine: CuisineType | null
  onSelectCuisine: (cuisine: CuisineType | null) => void
}

/**
 * Icon mapping for cuisine types.
 * Uses closest Lucide matches for each cuisine.
 */
const CUISINE_ICONS: Record<CuisineType, LucideIcon> = {
  Offers: Flame,
  Mexican: Soup,
  Japanese: Fish,
  Pizza: UtensilsCrossed,
  Sushi: Fish,
  Italian: UtensilsCrossed,
  Burger: Beef,
  Indian: Soup,
  "Bubble Tea": Coffee,
  Chinese: Soup,
  Sandwich: Sandwich,
  Bakery: Cookie,
  Korean: Soup,
  Vietnamese: Soup,
  Thai: Soup,
  Desserts: Cookie,
}

interface CuisineButtonProps {
  cuisine: CuisineType
  icon: LucideIcon
  isActive: boolean
  onClick: () => void
}

/**
 * Individual cuisine filter button
 */
function CuisineButton({
  cuisine,
  icon: Icon,
  isActive,
  onClick,
}: CuisineButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 min-w-[80px] p-2 rounded-lg transition-colors shrink-0 cursor-pointer",
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      <Icon className="h-8 w-8" />
      <span className="text-xs font-medium whitespace-nowrap">{cuisine}</span>
    </button>
  )
}

/**
 * Horizontal scrolling carousel of cuisine type filters.
 * Allows users to filter merchants by cuisine category.
 */
export function CuisineCarousel({
  selectedCuisine,
  onSelectCuisine,
}: CuisineCarouselProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 py-3">
        {CUISINE_TYPES.map((cuisine) => (
          <CuisineButton
            key={cuisine}
            cuisine={cuisine}
            icon={CUISINE_ICONS[cuisine]}
            isActive={selectedCuisine === cuisine}
            onClick={() =>
              onSelectCuisine(selectedCuisine === cuisine ? null : cuisine)
            }
          />
        ))}
      </div>
    </div>
  )
}
