import rawMerchants from "./fakeMerchantData.json"
import bohemianBakeryImage from "./bohemianbakery.jpg"

import type { Merchant } from "./types"

/**
 * Process raw JSON merchants to add image URLs.
 * All merchants will use the Bohemian Bakery image.
 * Filters out placeholder merchants with empty IDs.
 */
export const MOCK_MERCHANTS: Merchant[] = rawMerchants
  .filter((merchant) => merchant.id && merchant.id.trim() !== "")
  .map((merchant) => ({
    ...merchant,
    imageUrl: bohemianBakeryImage,
  })) as Merchant[]

/**
 * Get a merchant by ID
 *
 * @param id - The merchant ID to search for
 * @returns The merchant if found, undefined otherwise
 */
export function getMerchantById(id: string): Merchant | undefined {
  return MOCK_MERCHANTS.find((m) => m.id === id)
}

/**
 * Get all merchants for a specific cuisine type
 *
 * @param category - The cuisine category to filter by
 * @returns Array of merchants matching the category
 */
export function getMerchantsByCategory(category: string): Merchant[] {
  return MOCK_MERCHANTS.filter((m) => m.category === category)
}
