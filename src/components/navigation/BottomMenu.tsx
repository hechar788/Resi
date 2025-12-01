import type { ComponentType } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Link, useRouterState } from '@tanstack/react-router'
import { Compass, List, UtensilsCrossed, UserRound } from 'lucide-react'

interface NavItem {
  label: string
  to: string
  icon: ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { label: 'My Feed', to: '/feed', icon: List },
  { label: 'Food', to: '/food', icon: UtensilsCrossed },
  { label: 'Explore', to: '/explore', icon: Compass },
  { label: 'Profile', to: '/profile', icon: UserRound },
]

/**
 * Persistent bottom navigation using shadcn NavigationMenu.
 */
export default function BottomMenu() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  return (
    <NavigationMenu
      viewport={false}
      className="fixed inset-x-0 bottom-0 z-40 w-full max-w-full border-t bg-white/95 px-2 py-2 backdrop-blur sm:py-2 md:py-2"
    >
      <NavigationMenuList className="!grid w-full grid-cols-4 gap-1 [@media(min-width:400px)]:gap-1.5 sm:!gap-4 md:!gap-5">
        {navItems.map((item) => {
          const isActive =
            pathname === item.to ||
            (pathname.startsWith(item.to) && item.to !== '/')
          const Icon = item.icon
          return (
            <NavigationMenuItem key={item.to} className="flex-1 min-w-0">
              <NavigationMenuLink asChild active={isActive}>
                <Link
                  to={item.to}
                  className={cn(
                    'flex h-full w-full flex-col items-center gap-1 rounded-xl px-5 py-2 text-xs font-medium transition-all sm:px-8 sm:py-2 sm:text-sm',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'text-slate-700 hover:bg-accent',
                  )}
                >
                  <Icon
                    className={cn(
                      'h-5 w-5',
                      isActive ? 'text-primary-foreground' : 'text-slate-600',
                    )}
                  />
                  <span>{item.label}</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
