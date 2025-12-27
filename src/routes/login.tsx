import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { useAuthState } from "@/components/auth/useAuthState";

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
  const redirectTo = search.redirect || "/";

  useEffect(() => {
    if (!user) {
      return;
    }

    // Use window.location for dynamic redirects to avoid TypeScript errors
    window.location.href = redirectTo;
  }, [redirectTo, user]);

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
          onAuthenticated={() => {
            // Use window.location for dynamic redirects to avoid TypeScript errors
            window.location.href = redirectTo;
          }}
        />
      )}
    </div>
  );
}
