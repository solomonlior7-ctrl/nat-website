"use client";

import { useState, FormEvent } from "react";

const subjects = [
  "How can your IT and IP infrastructure solution benefit my business?",
  "Do you offer installation and maintenance services for security systems?",
  "Can you customize smart home solutions to fit my specific needs?",
  "Fuel Management Solutions",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  privacy?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim()) e.message = "Please tell us more about your enquiry.";
    if (!form.privacy) e.privacy = "You must agree to the Privacy Policy to proceed.";
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

  const field = (name: keyof FormState) => ({
    value: typeof form[name] === "boolean" ? undefined : (form[name] as string),
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setForm((f) => ({ ...f, [name]: e.target.value })),
  });

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h3>
        <p className="text-slate-600">
          Thank you for contacting NAT Technologies. Your message has been received and one of our
          representatives will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...field("name")}
            placeholder="Your full name"
            className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition ${
              errors.name ? "border-red-400 focus:ring-red-400" : "border-slate-300"
            }`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
          <input
            type="tel"
            {...field("phone")}
            placeholder="Your phone number"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...field("email")}
            placeholder="your@email.com"
            className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition ${
              errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-300"
            }`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            value={form.subject}
            onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
            className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition ${
              errors.subject ? "border-red-400 focus:ring-red-400" : "border-slate-300"
            }`}
          >
            <option value="">Select a subject</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Tell Us More <span className="text-red-500">*</span>
        </label>
        <textarea
          {...field("message")}
          rows={5}
          placeholder="Tell us about your project or enquiry..."
          className={`w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-accent transition resize-none ${
            errors.message ? "border-red-400 focus:ring-red-400" : "border-slate-300"
          }`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Privacy */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.privacy}
            onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
            className="mt-1 w-4 h-4 accent-accent shrink-0"
          />
          <span className="text-sm text-slate-600">
            I agree to the{" "}
            <a href="/privacy" className="text-accent underline hover:text-accent-dark">
              Privacy Policy
            </a>{" "}
            and consent to NAT Technologies processing my data to respond to this enquiry.{" "}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.privacy && <p className="mt-1.5 text-xs text-red-500 ml-7">{errors.privacy}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto px-8 py-3.5 bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors shadow-lg"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
