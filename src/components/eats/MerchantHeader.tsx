import { MapPin, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OpeningHoursDisplay } from "./OpeningHoursDisplay"

import type { Merchant } from "@/data/merchants/types"

interface MerchantHeaderProps {
  merchant: Merchant
  activeTab: "menu" | "reels"
  onTabChange: (tab: "menu" | "reels") => void
}

/**
 * Merchant profile header with hero image, info, and tab navigation.
 * Displays merchant name, rating, address, opening hours, and tab selection.
 */
export function MerchantHeader({
  merchant,
  activeTab,
  onTabChange,
}: MerchantHeaderProps) {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="aspect-[16/9] md:aspect-[21/9] relative bg-muted">
        {merchant.imageUrl && (
          <img
            src={merchant.imageUrl}
            alt={merchant.name}
            className="object-cover w-full h-full"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Name and Rating */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{merchant.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{merchant.rating.toFixed(1)}</span>
            </div>
            <Badge variant="secondary">{merchant.category}</Badge>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{merchant.address}</span>
        </div>

        {/* Opening Hours */}
        <OpeningHoursDisplay hours={merchant.openinghours} />

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={(val) => onTabChange(val as "menu" | "reels")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="menu">Order Online</TabsTrigger>
            <TabsTrigger value="reels">Reels (TODO)</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
