import type { Metadata } from "next";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password | NAT Technologies",
  description: "Request a secure password reset link for your NAT Technologies account.",
};

export default function ForgotPasswordPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <a href="/" className="hover:text-accent">Home</a>
          <span>/</span>
          <a href="/login" className="hover:text-accent">My Account</a>
          <span>/</span>
          <span className="text-slate-700">Forgot Password</span>
        </nav>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8">
          <div className="text-center mb-8">
            <a href="/" className="inline-block mb-4">
              <span className="text-navy text-xl font-bold">NAT Technologies</span>
            </a>
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Reset Your Password</h1>
            <p className="text-slate-500 text-sm">
              Enter your registered email address and we will send you a secure reset link.
            </p>
          </div>

          <ForgotPasswordForm />

          <p className="mt-6 text-center text-sm text-slate-500">
            Remember your password?{" "}
            <a href="/login" className="text-accent hover:text-accent-dark font-medium">
              Back to Login
            </a>
          </p>

          <p className="mt-3 text-center text-sm text-slate-400">
            Need additional help?{" "}
            <a href="/contact" className="text-accent hover:text-accent-dark">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
