import { Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CUISINE_TYPES } from "@/data/merchants/constants"

import type { CuisineType } from "@/data/merchants/types"

interface SearchBarProps {
  value: string
  onValueChange: (value: string) => void
  onRatingFilterChange: (minRating: number | null) => void
  onCategoryFilterChange: (category: CuisineType | null) => void
}

/**
 * Search bar with text search input and advanced filters (rating, category).
 * Uses a popover for filter options.
 */
export function SearchBar({
  value,
  onValueChange,
  onRatingFilterChange,
  onCategoryFilterChange,
}: SearchBarProps) {
  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search merchants..."
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className="pl-10"
        />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Minimum Rating</Label>
              <Select
                onValueChange={(val) =>
                  onRatingFilterChange(val === "all" ? null : Number(val))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any rating</SelectItem>
                  <SelectItem value="4">4+ stars</SelectItem>
                  <SelectItem value="3">3+ stars</SelectItem>
                  <SelectItem value="2">2+ stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select
                onValueChange={(val) =>
                  onCategoryFilterChange(val === "all" ? null : (val as CuisineType))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  {CUISINE_TYPES.map((cuisine) => (
                    <SelectItem key={cuisine} value={cuisine}>
                      {cuisine}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
