import { Button } from '@/components/ui/button'
import { type Merchant } from '@/lib/merchants'
import { MapPin, Star } from 'lucide-react'

interface MerchantGridProps {
  merchants: Merchant[]
}

/**
 * Grid of merchant cards for the Food landing page.
 */
export default function MerchantGrid({ merchants }: MerchantGridProps) {
  if (!merchants.length) {
    return (
      <div className="rounded-2xl border border-dashed bg-white/60 px-6 py-10 text-center text-slate-600">
        No merchants match your filters yet.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {merchants.map((merchant) => (
        <article
          key={merchant.id}
          className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-100 to-slate-200">
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-slate-500">
              {merchant.name.charAt(0)}
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-2 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold text-slate-900">
                  {merchant.name}
                </h3>
                <p className="text-sm text-slate-600">{merchant.category}</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-700">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                {merchant.rating.toFixed(1)}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span className="truncate">{merchant.address}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {merchant.menu.categories.slice(0, 3).map((category) => (
                <span
                  key={category.categoryName}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {category.categoryName}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-2 pt-1">
              <Button size="sm" className="shrink-0" disabled>
                Order (coming soon)
              </Button>
              <span className="text-xs text-slate-500">
                Menu and profiles coming soon.
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
