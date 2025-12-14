import { createFileRoute } from '@tanstack/react-router'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase/firebase'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_authed/profile')({
  component: ProfilePage,
})

/**
 * Authenticated profile page that surfaces basic user info and allows logout.
 */
function ProfilePage() {
  const { user } = Route.useRouteContext({ from: '/_authed' })
  const navigate = Route.useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    await navigate({ to: '/', replace: true })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-sm text-gray-600">
            Signed in as: <span className="font-medium">{user?.email}</span>
          </p>
          <p className="text-xs text-gray-500">
            UID: <span className="font-mono break-all">{user?.uid}</span>
          </p>
        </div>
        <Button onClick={handleLogout} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  )
}
