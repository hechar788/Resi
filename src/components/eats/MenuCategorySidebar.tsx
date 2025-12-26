import { cn } from "@/lib/utils"

import type { MenuCategory } from "@/data/merchants/types"

interface MenuCategorySidebarProps {
  categories: MenuCategory[]
  activeCategory?: string
}

/**
 * Desktop-only sidebar for navigating between menu categories.
 * Hidden on mobile, uses anchor links for smooth scrolling.
 */
export function MenuCategorySidebar({
  categories,
  activeCategory,
}: MenuCategorySidebarProps) {
  return (
    <nav className="hidden md:block sticky top-4 space-y-1">
      {categories.map((category) => (
        <a
          key={category.categoryName}
          href={`#${category.categoryName}`}
          className={cn(
            "block px-3 py-2 text-sm rounded-md transition-colors",
            activeCategory === category.categoryName
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          )}
        >
          {category.categoryName}
        </a>
      ))}
    </nav>
  )
}
