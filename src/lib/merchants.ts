/**
 * Merchant domain types and helpers shared across food routes/components.
 */
export type CuisineType =
  | 'Bakery'
  | 'Sandwich'
  | 'Sushi'
  | 'Burger'
  | 'Chinese'
  | 'Japanese'
  | 'Pizza'
  | 'Korean'
  | 'Mexican'
  | 'Vietnamese'
  | 'Italian'
  | 'Indian'
  | 'Thai'
  | 'Deserts'
  | 'Bubble Tea'
  | 'Offers'

export type Weekday =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

export interface OpeningHoursEntry {
  isOpen: boolean
  open: string
  close: string
}

export type OpeningHours = Record<Weekday, OpeningHoursEntry>

export interface MerchantMenuOffer {
  offerType: string
  quantity: number
  item: string
}

export type MerchantOffers = Record<string, MerchantMenuOffer>

export interface MenuItem {
  item: string
  price: string
  isAvailable: boolean
}

export interface MenuCategory {
  categoryName: string
  items: MenuItem[]
}

export interface MerchantMenu {
  offers: MerchantOffers
  categories: MenuCategory[]
}

export interface MerchantReel {
  fileName: string
  id: number
}

export interface Merchant {
  id: string
  name: string
  category: CuisineType
  rating: number
  address: string
  filename: string
  openingHours: OpeningHours
  menu: MerchantMenu
  reels: MerchantReel[]
}

/**
 * Cuisine filters shown in the food landing header.
 */
export const cuisineTypes: CuisineType[] = [
  'Offers',
  'Bakery',
  'Sandwich',
  'Sushi',
  'Burger',
  'Chinese',
  'Japanese',
  'Pizza',
  'Korean',
  'Mexican',
  'Vietnamese',
  'Italian',
  'Indian',
  'Thai',
  'Deserts',
  'Bubble Tea',
]
