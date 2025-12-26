import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

import type { Merchant } from "@/data/merchants/types"

interface MerchantMenuProps {
  menu: Merchant["menu"]
}

/**
 * Displays merchant menu with categories and items.
 * Shows item name, description, price, and availability status.
 */
export function MerchantMenu({ menu }: MerchantMenuProps) {
  return (
    <div className="space-y-8 pb-20">
      {menu.categories.map((category) => (
        <div key={category.categoryName} id={category.categoryName}>
          <h2 className="text-xl font-bold mb-4 sticky top-0 bg-background py-2 border-b">
            {category.categoryName}
          </h2>
          <div className="space-y-4">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex justify-between items-start gap-4 p-3 rounded-lg",
                  !item.isAvailable && "opacity-50"
                )}
              >
                <div className="flex-1">
                  <h3 className="font-medium">{item.item}</h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  )}
                  {!item.isAvailable && (
                    <Badge variant="destructive" className="mt-2">
                      Unavailable
                    </Badge>
                  )}
                </div>
                <span className="font-semibold text-primary whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
