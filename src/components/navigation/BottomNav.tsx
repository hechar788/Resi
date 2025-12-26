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
        "flex flex-col items-center justify-center gap-1 py-2 px-4 transition-colors",
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
        "fixed bottom-0 left-0 right-0 z-50 bg-background border-t",
        className
      )}
    >
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto px-4">
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
