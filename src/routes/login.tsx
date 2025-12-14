import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuthState } from "@/components/auth/useAuthState";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

export const Route = createFileRoute('/login')({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
  component: LoginPage,
});

/**
 * Login page with authentication form and user state display
 */
function LoginPage() {
  const { user } = useAuthState();
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const redirectTo = search.redirect || "/";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      return;
    }

    void navigate({
      to: redirectTo,
      replace: true,
    });
  }, [navigate, redirectTo, user]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      {user ? (
        <div className="w-full max-w-md space-y-4">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Welcome!</h2>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>UID:</strong> {user.uid}
              </p>
              <p>
                <strong>Display Name:</strong> {user.displayName || "N/A"}
              </p>
              {user.photoURL && (
                <div className="mt-4">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="h-20 w-20 rounded-full"
                  />
                </div>
              )}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Check the browser console for full user details
            </p>
          </div>
          <Button onClick={handleLogout} className="w-full">
            Logout
          </Button>
        </div>
      ) : (
        <AuthForm
          onAuthenticated={() =>
            navigate({
              to: redirectTo,
              replace: true,
            })
          }
        />
      )}
    </div>
  );
}
