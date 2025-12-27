import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

interface LocationPickerProps {
  location: string
  onLocationChange: (location: string) => void
  disabled?: boolean
}

/**
 * Location picker component (placeholder for Google Maps integration).
 * Displays current location with a disabled "Change" button.
 *
 * TODO: Integrate Google Maps API for location autocomplete
 * - Add Google Maps Places API script
 * - Implement location picker modal
 * - Store selected location in state/localStorage
 * - Filter merchants by distance
 */
export function LocationPicker({
  location,
  onLocationChange,
  disabled = true,
}: LocationPickerProps) {
  return (
    <div className="px-4">
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium flex-1">{location}</span>
        <Button
          variant="link"
          size="sm"
          disabled={disabled}
          onClick={() => onLocationChange("")}
          className="text-xs"
        >
          Change (TODO)
        </Button>
      </div>
    </div>
  )
}
