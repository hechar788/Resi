import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { cuisineTypes, type CuisineType } from '@/lib/merchants'
import { cn } from '@/lib/utils'

interface CuisineTypeCarouselProps {
  selectedCuisine: CuisineType | null
  onSelect: (cuisine: CuisineType | null) => void
}

/**
 * Horizontal carousel of cuisine filter chips using shadcn Buttons.
 */
export default function CuisineTypeCarousel({
  selectedCuisine,
  onSelect,
}: CuisineTypeCarouselProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap pb-1 pt-2">
      <div className="flex w-max gap-2">
        <Button
          type="button"
          size="sm"
          variant={selectedCuisine === null ? 'default' : 'outline'}
          onClick={() => onSelect(null)}
          className={cn(
            'rounded-full',
            selectedCuisine === null
              ? 'shadow-md shadow-primary/20'
              : 'bg-background',
          )}
        >
          All
        </Button>
        {cuisineTypes.map((cuisine) => (
          <Badge
            key={cuisine}
            variant={selectedCuisine === cuisine ? 'default' : 'outline'}
            className={cn(
              'cursor-pointer rounded-full px-4 py-2 text-sm',
              selectedCuisine === cuisine
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-background',
            )}
            onClick={() =>
              onSelect(selectedCuisine === cuisine ? null : cuisine)
            }
          >
            {cuisine}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  )
}
