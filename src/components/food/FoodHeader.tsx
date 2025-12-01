import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import CuisineTypeCarousel from '@/components/food/CuisineTypeCarousel'
import { type CuisineType } from '@/lib/merchants'
import { MapPin, Search } from 'lucide-react'

interface FoodHeaderProps {
  locationLabel: string
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCuisine: CuisineType | null
  onCuisineChange: (cuisine: CuisineType | null) => void
}

/**
 * Food landing header with location, search, and cuisine filters.
 */
export default function FoodHeader({
  locationLabel,
  searchTerm,
  onSearchChange,
  selectedCuisine,
  onCuisineChange,
}: FoodHeaderProps) {
  return (
    <header className="space-y-4">
      <div className="flex items-center justify-between gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
            <MapPin className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Deliver to
            </p>
            <p className="truncate text-sm font-semibold text-slate-900">
              {locationLabel}
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" disabled>
          Change
        </Button>
      </div>

      <div className="rounded-2xl border bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2 rounded-lg border bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <Input
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search for merchants or dishes"
            className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="pt-3">
          <CuisineTypeCarousel
            selectedCuisine={selectedCuisine}
            onSelect={onCuisineChange}
          />
        </div>
      </div>
    </header>
  )
}
