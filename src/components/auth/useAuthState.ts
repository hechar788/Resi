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
 * Hook to monitor Firebase authentication state
 * Logs user details whenever auth state changes
 *
 * @returns Current user object or null if not authenticated
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const user = useAuthState();
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

      if (currentUser) {
        console.log("=== Auth State Changed: User Logged In ===");
        console.log("UID:", currentUser.uid);
        console.log("Email:", currentUser.email);
        console.log("Email Verified:", currentUser.emailVerified);
        console.log("Display Name:", currentUser.displayName);
        console.log("Photo URL:", currentUser.photoURL);
        console.log("Phone Number:", currentUser.phoneNumber);
        console.log("Provider Data:", currentUser.providerData);
        console.log("Creation Time:", currentUser.metadata.creationTime);
        console.log("Last Sign In Time:", currentUser.metadata.lastSignInTime);
        console.log("Tenant ID:", currentUser.tenantId);
        console.log("Full User Object:", currentUser);
        console.log("==========================================");
      } else {
        console.log("=== Auth State Changed: User Logged Out ===");
      }
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
