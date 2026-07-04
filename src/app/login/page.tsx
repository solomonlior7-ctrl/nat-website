import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login | NAT Technologies",
  description: "Sign in to your NAT Technologies account.",
};

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-ivory flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <nav className="flex items-center gap-2 font-sans text-xs text-ink-muted mb-8">
          <a href="/" className="hover:text-accent transition-colors">Home</a>
          <span>/</span>
          <span>My Account</span>
          <span>/</span>
          <span className="text-ink-soft">Login</span>
        </nav>

        <div className="glass-card rounded-2xl p-8">
          <div className="text-center mb-8">
            <a href="/" className="inline-block mb-4">
              <span className="font-semibold text-ink text-xl">NAT Technologies</span>
            </a>
            <h1 className="text-2xl font-semibold text-ink mb-2">Welcome Back</h1>
            <p className="font-sans text-ink-muted text-sm">Sign in to access your account.</p>
          </div>

          <LoginForm />

          <p className="mt-6 text-center font-sans text-sm text-ink-muted">
            New user?{" "}
            <a href="/register" className="text-accent hover:text-accent-dark font-semibold transition-colors">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
