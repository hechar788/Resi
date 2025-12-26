import { useState, useEffect } from "react";
import { onAuthStateChanged, onIdTokenChanged, type User } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

const TOKEN_COOKIE = "firebase_token";

const setAuthCookie = async (user: User | null) => {
  if (!user) {
    document.cookie = `${TOKEN_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
    return;
  }

  const token = await user.getIdToken();
  const encodedToken = encodeURIComponent(token);
  document.cookie = `${TOKEN_COOKIE}=${encodedToken}; path=/; max-age=3600; SameSite=Lax`;
};

/**
 * Hook to monitor Firebase authentication state and manage auth cookies
 *
 * @returns Current user object or null if not authenticated
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { user } = useAuthState();
 *   return <div>{user ? `Hello ${user.email}` : 'Not logged in'}</div>;
 * }
 * ```
 */
export function useAuthState() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      void setAuthCookie(currentUser);
    });

    const unsubscribeToken = onIdTokenChanged(auth, (currentUser) => {
      void setAuthCookie(currentUser);
    });

    return () => {
      unsubscribe();
      unsubscribeToken();
    };
  }, []);

  return { user, loading };
}
