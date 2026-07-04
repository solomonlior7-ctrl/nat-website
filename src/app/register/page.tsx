import type { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Create Account | NAT Technologies",
  description: "Register for a NAT Technologies account to track your enquiries and access your profile.",
};

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-ivory flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-lg">
        <nav className="flex items-center gap-2 font-sans text-xs text-ink-muted mb-8">
          <a href="/" className="hover:text-accent transition-colors">Home</a>
          <span>/</span>
          <span>New User</span>
          <span>/</span>
          <span className="text-ink-soft">Register</span>
        </nav>

        <div className="glass-card rounded-2xl p-8">
          <div className="text-center mb-8">
            <a href="/" className="inline-block mb-4">
              <span className="font-semibold text-ink text-xl">NAT Technologies</span>
            </a>
            <h1 className="text-2xl font-semibold text-ink mb-2">Create Your Account</h1>
            <p className="font-sans text-ink-muted text-sm">
              Complete the form below to register. All fields marked with{" "}
              <span className="text-red-500">*</span> are required.
            </p>
          </div>

          <RegisterForm />

          <p className="mt-6 text-center font-sans text-sm text-ink-muted">
            Already have an account?{" "}
            <a href="/login" className="text-accent hover:text-accent-dark font-semibold transition-colors">
              Login here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
