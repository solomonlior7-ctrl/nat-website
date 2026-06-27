"use client";

import { useState, FormEvent } from "react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function getStrength(pw: string): { score: number; label: string; color: string } {
  if (!pw) return { score: 0, label: "", color: "" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 2) return { score, label: "Weak", color: "bg-red-400" };
  if (score === 3) return { score, label: "Fair", color: "bg-yellow-400" };
  if (score === 4) return { score, label: "Good", color: "bg-blue-400" };
  return { score, label: "Strong", color: "bg-emerald-500" };
}

export default function RegisterForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const strength = getStrength(form.password);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.password) {
      e.password = "Password is required.";
    } else if (strength.score < 3) {
      e.password = "Password is too weak. Include uppercase, lowercase, numbers, and special characters.";
    }
    if (form.password !== form.confirmPassword) {
      e.confirmPassword = "Passwords do not match.";
    }
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const isValid = !Object.values(validate()).length;

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Account Created!</h3>
        <p className="text-slate-600 mb-6">Welcome to NAT Technologies. Your account has been created successfully.</p>
        <a href="/login" className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-sm transition-colors">
          Login to Your Account
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={set("firstName")}
            className={`w-full px-3 py-3 rounded-lg border text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent text-sm transition ${errors.firstName ? "border-red-400 focus:ring-red-400" : "border-slate-300"}`}
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={set("lastName")}
            className={`w-full px-3 py-3 rounded-lg border text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent text-sm transition ${errors.lastName ? "border-red-400 focus:ring-red-400" : "border-slate-300"}`}
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            className={`w-full px-3 py-3 rounded-lg border text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent text-sm transition ${errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-300"}`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className="w-full px-3 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent text-sm transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          value={form.password}
          onChange={set("password")}
          className={`w-full px-3 py-3 rounded-lg border text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent text-sm transition ${errors.password ? "border-red-400 focus:ring-red-400" : "border-slate-300"}`}
        />
        {form.password && (
          <div className="mt-2">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${i <= strength.score ? strength.color : "bg-slate-200"}`}
                />
              ))}
            </div>
            <p className={`text-xs font-medium ${strength.score <= 2 ? "text-red-500" : strength.score === 3 ? "text-yellow-500" : "text-emerald-600"}`}>
              {strength.label}
            </p>
          </div>
        )}
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
        <p className="mt-1.5 text-xs text-slate-400">
          Must include uppercase, lowercase, numbers, and a special character. Minimum 8 characters.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          value={form.confirmPassword}
          onChange={set("confirmPassword")}
          className={`w-full px-3 py-3 rounded-lg border text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent text-sm transition ${errors.confirmPassword ? "border-red-400 focus:ring-red-400" : "border-slate-300"}`}
        />
        {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors text-sm"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}
