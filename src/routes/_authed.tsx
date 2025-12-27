import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import type { DecodedIdToken } from 'firebase-admin/auth'
import type { User } from 'firebase/auth'

import { BottomNav } from '@/components/navigation/BottomNav'

interface AuthContext {
  user?: DecodedIdToken
}

const getRedirectPath = (location: {
  href: string
  pathname: string
  searchStr?: string
}) => {
  const searchStr =
    typeof location.searchStr === 'string' && location.searchStr.length > 0
      ? `?${location.searchStr}`
      : ''
  return location.href || `${location.pathname}${searchStr}`
}

const redirectToLogin = (redirectPath: string) =>
  redirect({
    to: '/login',
    search: {
      redirect: redirectPath,
    },
  })

const getTokenFromRequest = (request?: Request | null) => {
  if (!request) {
    return null
  }

  const authHeader = request.headers.get('Authorization')
  const headerToken = authHeader?.startsWith('Bearer ')
    ? authHeader.substring(7)
    : null
  if (headerToken) {
    return headerToken
  }

  const cookies = request.headers.get('cookie')
  const cookieToken = cookies
    ?.split(';')
    .find((cookie) => cookie.trim().startsWith('firebase_token='))
    ?.split('=')[1]

  return cookieToken ? decodeURIComponent(cookieToken) : null
}

const getClientToken = async (): Promise<string | null> => {
  if (typeof window === 'undefined') {
    return null
  }

  const [{ auth }, { onAuthStateChanged }] = await Promise.all([
    import('@/lib/firebase/firebase'),
    import('firebase/auth'),
  ])

  const user =
    auth.currentUser ??
    (await new Promise<User | null>((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
        unsubscribe()
        resolve(nextUser)
      })
    }))

  if (!user) {
    return null
  }

  return await user.getIdToken()
}

/**
 * Server function to verify Firebase auth token
 */
const verifyToken = createServerFn({ method: 'GET' })
  .inputValidator((input: string) => input)
  .handler(async ({ data }: { data: string }) => {
    const { verifyAuthToken } = await import('@/lib/firebase/firebase-admin')
    return await verifyAuthToken(data)
  })

export const Route = createFileRoute('/_authed')({
  beforeLoad: async ({ context, location }): Promise<AuthContext> => {
    const redirectPath = getRedirectPath(location)
    const request = (context as { request?: Request }).request

    const tokenFromRequest = getTokenFromRequest(request)
    const token = tokenFromRequest ?? (await getClientToken())

    if (!token) {
      throw redirectToLogin(redirectPath)
    }

    const result = await verifyToken({ data: token })

    if (!result.success || !result.user) {
      throw redirectToLogin(redirectPath)
    }

    return {
      user: result.user,
    }
  },
  component: AuthedLayout,
})

function AuthedLayout() {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  )
}
