import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  type User,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Validation schemas for email/password authentication
 */
const emailSchema = z.string().email("Invalid email address");
const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters");

/**
 * Logs all available user details to console
 */
function logUserDetails(user: User) {
  console.log("=== User Authentication Details ===");
  console.log("UID:", user.uid);
  console.log("Email:", user.email);
  console.log("Email Verified:", user.emailVerified);
  console.log("Display Name:", user.displayName);
  console.log("Photo URL:", user.photoURL);
  console.log("Phone Number:", user.phoneNumber);
  console.log("Provider Data:", user.providerData);
  console.log("Creation Time:", user.metadata.creationTime);
  console.log("Last Sign In Time:", user.metadata.lastSignInTime);
  console.log("Tenant ID:", user.tenantId);
  console.log("Full User Object:", user);
  console.log("=====================================");
}

/**
 * Authentication form component with email/password and SSO login
 */
export function AuthForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setError(null);
      setLoading(true);

      try {
        let userCredential;

        if (mode === "login") {
          userCredential = await signInWithEmailAndPassword(
            auth,
            value.email,
            value.password,
          );
        } else {
          userCredential = await createUserWithEmailAndPassword(
            auth,
            value.email,
            value.password,
          );
        }

        logUserDetails(userCredential.user);
      } catch (err: any) {
        setError(err.message || "Authentication failed");
        console.error("Auth error:", err);
      } finally {
        setLoading(false);
      }
    },
  });

  /**
   * Handle Google SSO login
   */
  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      logUserDetails(userCredential.user);
    } catch (err: any) {
      setError(err.message || "Google login failed");
      console.error("Google login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{mode === "login" ? "Login" : "Sign Up"}</CardTitle>
        <CardDescription>
          {mode === "login"
            ? "Enter your credentials to access your account"
            : "Create a new account to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                const result = emailSchema.safeParse(value);
                return result.success ? undefined : result.error.issues[0].message;
              },
            }}
          >
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-sm text-red-600">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) => {
                const result = passwordSchema.safeParse(value);
                return result.success ? undefined : result.error.issues[0].message;
              },
            }}
          >
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-sm text-red-600">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading
              ? "Loading..."
              : mode === "login"
                ? "Login"
                : "Sign Up"}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="button"
          variant="link"
          className="w-full"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
        >
          {mode === "login"
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </Button>
      </CardFooter>
    </Card>
  );
}
