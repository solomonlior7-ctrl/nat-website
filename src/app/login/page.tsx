import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login | NAT Technologies",
  description: "Sign in to your NAT Technologies account.",
};

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <a href="/" className="hover:text-accent">Home</a>
          <span>/</span>
          <span>My Account</span>
          <span>/</span>
          <span className="text-slate-700">Login</span>
        </nav>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8">
          <div className="text-center mb-8">
            <a href="/" className="inline-block mb-4">
              <span className="text-navy text-xl font-bold">NAT Technologies</span>
            </a>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500 text-sm">Sign in to access your account.</p>
          </div>

          <LoginForm />

          <p className="mt-6 text-center text-sm text-slate-500">
            New user?{" "}
            <a href="/register" className="text-accent hover:text-accent-dark font-medium">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
