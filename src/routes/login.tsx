import { createFileRoute, useNavigate } from "@tanstack/react-router";
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
 * Login page with authentication form and user state display.
 * Automatically redirects authenticated users to their intended destination.
 */
function LoginPage() {
  const { user, loading } = useAuthState();
  const search = Route.useSearch();
  const navigate = useNavigate();
  const redirectTo = search.redirect || "/";

  useEffect(() => {
    // Only redirect after loading is complete and user is authenticated
    if (loading || !user) {
      return;
    }

    // User is authenticated, navigate to redirect path
    // Using TanStack Router's navigate preserves auth state, unlike window.location
    navigate({ to: redirectTo as any });
  }, [user, loading, redirectTo, navigate]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <div className="animate-pulse text-muted-foreground">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  // Show redirecting state if user is authenticated
  if (user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <div className="animate-pulse text-muted-foreground">
            Redirecting...
          </div>
        </div>
      </div>
    );
  }

  // Show auth form if not authenticated
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <AuthForm />
    </div>
  );
}
