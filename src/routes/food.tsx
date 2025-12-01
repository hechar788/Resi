import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import BottomMenu from '@/components/navigation/BottomMenu'
import FoodHeader from '@/components/food/FoodHeader'
import MerchantGrid from '@/components/food/MerchantGrid'
import { fakeMerchantData } from '@/data/fakeMerchantData'
import { type CuisineType, type Merchant } from '@/lib/merchants'

export const Route = createFileRoute('/food')({
  component: FoodRoute,
})

/**
 * Food landing route that lists nearby merchants with filters.
 */
function FoodRoute() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState<CuisineType | null>(
    null,
  )

  const merchants = useMemo<Merchant[]>(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    return fakeMerchantData.filter((merchant) => {
      const matchesCuisine =
        selectedCuisine === null || merchant.category === selectedCuisine
      const matchesSearch =
        normalizedSearch.length === 0 ||
        merchant.name.toLowerCase().includes(normalizedSearch)

      return matchesCuisine && matchesSearch
    })
  }, [searchTerm, selectedCuisine])

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="mx-auto flex max-w-full flex-col gap-6 px-4 pb-8 pt-6 md:max-w-[80%]">
        <FoodHeader
          locationLabel="Christchurch, NZ"
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCuisine={selectedCuisine}
          onCuisineChange={setSelectedCuisine}
        />

        <MerchantGrid merchants={merchants} />
      </div>
      <BottomMenu />
    </main>
  )
}
