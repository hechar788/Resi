import { Link } from "@tanstack/react-router"
import { MapPin, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import type { Merchant } from "@/data/merchants/types"

interface MerchantCardProps {
  merchant: Merchant
  className?: string
}

/**
 * Displays a merchant card with image, name, rating, and address.
 * Links to the merchant's profile page.
 */
export function MerchantCard({ merchant, className }: MerchantCardProps) {
  return (
    <Link to="/eats/$merchantId" params={{ merchantId: merchant.id }}>
      <Card
        className={cn(
          "overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
          className
        )}
      >
        <div className="aspect-video relative bg-muted">
          {merchant.imageUrl && (
            <img
              src={merchant.imageUrl}
              alt={merchant.name}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg truncate">{merchant.name}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{merchant.rating.toFixed(1)}</span>
            </div>
            <span>•</span>
            <span>{merchant.category}</span>
          </div>
          <div className="flex items-start gap-1 mt-2 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-1">{merchant.address}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
