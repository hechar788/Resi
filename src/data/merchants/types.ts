/**
 * Represents a day's opening hours for a merchant
 */
export interface DayHours {
  isOpen: boolean
  open: string // Format: "HH:mm"
  close: string // Format: "HH:mm"
}

/**
 * Weekly schedule of merchant opening hours
 */
export interface OpeningHours {
  Monday: DayHours
  Tuesday: DayHours
  Wednesday: DayHours
  Thursday: DayHours
  Friday: DayHours
  Saturday: DayHours
  Sunday: DayHours
}

/**
 * Represents a menu item
 */
export interface MenuItem {
  item: string
  price: string
  isAvailable: boolean
  description?: string
}

/**
 * Represents a category of menu items
 */
export interface MenuCategory {
  categoryName: string
  items: MenuItem[]
}

/**
 * Cuisine type options for filtering merchants
 */
export type CuisineType =
  | "Offers"
  | "Mexican"
  | "Japanese"
  | "Pizza"
  | "Sushi"
  | "Italian"
  | "Burger"
  | "Indian"
  | "Bubble Tea"
  | "Chinese"
  | "Sandwich"
  | "Bakery"
  | "Korean"
  | "Vietnamese"
  | "Thai"
  | "Desserts"

/**
 * Represents a merchant/restaurant
 */
export interface Merchant {
  id: string
  name: string
  category: CuisineType
  rating: number
  address: string
  filename: string // Image filename (all will use "bohemianbakery.jpg")
  openinghours: OpeningHours // Note: lowercase 'h' to match EatUp JSON
  imageUrl?: string // Added by loader
  menu: {
    offers?: Record<string, unknown>
    categories: MenuCategory[]
  }
  // TODO: Add reels support later
}
