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
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse text-muted-foreground">
              Redirecting...
            </div>
          </div>
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
