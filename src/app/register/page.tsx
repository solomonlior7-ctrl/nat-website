import type { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Create Account | NAT Technologies",
  description: "Register for a NAT Technologies account to track your enquiries and access your profile.",
};

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-lg">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <a href="/" className="hover:text-accent">Home</a>
          <span>/</span>
          <span>New User</span>
          <span>/</span>
          <span className="text-slate-700">Register</span>
        </nav>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <a href="/" className="inline-block mb-4">
              <span className="text-navy text-xl font-bold">NAT Technologies</span>
            </a>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Create Your Account</h1>
            <p className="text-slate-500 text-sm">
              Complete the form below to register. All fields marked with{" "}
              <span className="text-red-500">*</span> are required.
            </p>
          </div>

          <RegisterForm />

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <a href="/login" className="text-accent hover:text-accent-dark font-medium">
              Login here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
