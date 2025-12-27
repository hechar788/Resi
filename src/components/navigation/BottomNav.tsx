import { Link, useMatchRoute } from "@tanstack/react-router"
import { Home, UtensilsCrossed, User } from "lucide-react"

import { cn } from "@/lib/utils"

import type { LucideIcon } from "lucide-react"

interface NavLinkProps {
  to: string
  icon: LucideIcon
  label: string
  isActive: boolean
}

/**
 * Individual navigation link component
 */
function NavLink({ to, icon: Icon, label, isActive }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center justify-center gap-1 py-1 px-2 md:px-3 transition-all rounded-lg w-20",
        "hover:bg-accent hover:scale-105",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xs font-medium">{label}</span>
    </Link>
  )
}

interface BottomNavProps {
  className?: string
}

/**
 * Fixed bottom navigation bar with Home, Eats, and Profile links.
 * Mobile-first design with active state indication.
 */
export function BottomNav({ className }: BottomNavProps) {
  const matchRoute = useMatchRoute()

  const isHomeActive = matchRoute({ to: "/" })
  const isEatsActive =
    matchRoute({ to: "/eats" }) !== false ||
    matchRoute({ to: "/eats/$merchantId", fuzzy: true }) !== false
  const isProfileActive = matchRoute({ to: "/profile" })

  return (
    <nav
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-background border rounded-full shadow-lg px-6",
        className
      )}
    >
      <div className="flex items-center h-[72px] gap-3 md:gap-4">
        <NavLink to="/" icon={Home} label="Home" isActive={!!isHomeActive} />
        <NavLink
          to="/eats"
          icon={UtensilsCrossed}
          label="Eats"
          isActive={!!isEatsActive}
        />
        <NavLink
          to="/profile"
          icon={User}
          label="Profile"
          isActive={!!isProfileActive}
        />
      </div>
    </nav>
  )
}
