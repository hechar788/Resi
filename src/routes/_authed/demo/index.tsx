import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Code,
  Database,
  FileText,
  Layers,
  Server,
  Table,
  User,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const Route = createFileRoute("/_authed/demo/")({
  component: DemoIndexPage,
})

interface DemoLink {
  title: string
  description: string
  href: string
  icon: typeof Code
}

interface DemoCategory {
  name: string
  links: DemoLink[]
}

const demoCategories: DemoCategory[] = [
  {
    name: "Forms",
    links: [
      {
        title: "Simple Form",
        description: "Basic form with title and description fields",
        href: "/demo/form/simple",
        icon: FileText,
      },
      {
        title: "Address Form",
        description: "Complex form with nested address fields and validation",
        href: "/demo/form/address",
        icon: FileText,
      },
    ],
  },
  {
    name: "Data Management",
    links: [
      {
        title: "TanStack Query",
        description: "Server state management with TanStack Query",
        href: "/demo/tanstack-query",
        icon: Server,
      },
      {
        title: "TanStack Table",
        description: "Advanced table with sorting, filtering, and pagination",
        href: "/demo/table",
        icon: Table,
      },
      {
        title: "TanStack Store",
        description: "Client state management with TanStack Store",
        href: "/demo/store",
        icon: Layers,
      },
      {
        title: "Neon Database",
        description: "Direct database queries with Neon PostgreSQL",
        href: "/demo/neon",
        icon: Database,
      },
    ],
  },
  {
    name: "Server-Side Rendering",
    links: [
      {
        title: "SSR Overview",
        description: "Overview of different SSR modes",
        href: "/demo/start/ssr",
        icon: Server,
      },
      {
        title: "SPA Mode",
        description: "Single Page Application mode (ssr: false)",
        href: "/demo/start/ssr/spa-mode",
        icon: Code,
      },
      {
        title: "Full SSR",
        description: "Full server-side rendering mode",
        href: "/demo/start/ssr/full-ssr",
        icon: Server,
      },
      {
        title: "Data Only SSR",
        description: "Server-side data fetching only",
        href: "/demo/start/ssr/data-only",
        icon: Database,
      },
    ],
  },
  {
    name: "Miscellaneous",
    links: [
      {
        title: "Auth Example",
        description: "Protected route showing authenticated user info",
        href: "/demo/example",
        icon: User,
      },
      {
        title: "API Request",
        description: "Client-side API requests with useQuery",
        href: "/demo/start/api-request",
        icon: Server,
      },
      {
        title: "Server Functions",
        description: "File-based todos with server functions",
        href: "/demo/start/server-funcs",
        icon: Code,
      },
    ],
  },
]

/**
 * Demo index page showing all available demo routes organized by category
 */
function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Demo Pages</h1>
          <p className="text-muted-foreground text-lg">
            Explore examples of TanStack libraries, forms, SSR modes, and more
          </p>
        </div>

        {/* Categories */}
        {demoCategories.map((category) => (
          <div key={category.name} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group transition-transform hover:scale-[1.02]"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-2 group-hover:border-primary">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <link.icon className="h-5 w-5 text-primary" />
                        {link.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            These are example pages demonstrating various features and patterns.
            <br />
            Navigate back to the main app using the navigation menu.
          </p>
        </div>
      </div>
    </div>
  )
}
