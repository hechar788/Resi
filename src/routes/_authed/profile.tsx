import { createFileRoute } from '@tanstack/react-router'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase/firebase'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_authed/profile')({
  component: ProfilePage,
})

/**
 * Authenticated profile page that surfaces user info and allows logout.
 */
function ProfilePage() {
  const { user } = Route.useRouteContext({ from: '/_authed' })
  const navigate = Route.useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    await navigate({ to: '/', replace: true })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 pb-20">
      <div className="w-full max-w-md space-y-4">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            {user?.picture && (
              <img
                src={user.picture}
                alt="Profile"
                className="h-16 w-16 rounded-full border-2 border-gray-200"
              />
            )}
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
              {user?.name && (
                <p className="text-sm text-gray-600">{user.name}</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</p>
              <p className="text-sm mt-1">{user?.email || "N/A"}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">User ID</p>
              <p className="text-xs mt-1 font-mono text-gray-700 break-all">{user?.uid}</p>
            </div>

            {user?.email_verified !== undefined && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Verified</p>
                <p className="text-sm mt-1">
                  {user.email_verified ? (
                    <span className="text-green-600">✓ Verified</span>
                  ) : (
                    <span className="text-amber-600">⚠ Not verified</span>
                  )}
                </p>
              </div>
            )}

            {user?.phone_number && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone Number</p>
                <p className="text-sm mt-1">{user.phone_number}</p>
              </div>
            )}

            {user?.auth_time && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Sign In</p>
                <p className="text-sm mt-1">{new Date(user.auth_time * 1000).toLocaleString()}</p>
              </div>
            )}

            {user?.firebase?.sign_in_provider && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Sign-In Provider</p>
                <p className="text-sm mt-1 capitalize">{user.firebase.sign_in_provider}</p>
              </div>
            )}
          </div>
        </div>

        <Button onClick={handleLogout} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  )
}
