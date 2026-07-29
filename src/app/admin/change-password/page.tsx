"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function ChangePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      setDone(true);
    }
  };

  if (done) {
    return (
      <div className="max-w-md">
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
            <svg className="w-7 h-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-ink mb-2">Password Updated</h2>
          <p className="font-sans text-ink-muted text-sm mb-6">Your password has been changed successfully.</p>
          <Link href="/admin" className="btn-gradient px-6 py-2.5 text-white font-semibold font-sans text-sm">
            Back to Admin
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md">
      <div className="mb-8">
        <Link href="/admin" className="font-sans text-sm text-ink-muted hover:text-accent transition-colors">
          ← Back to Admin
        </Link>
        <h1 className="text-2xl font-semibold text-ink mt-4">Change Password</h1>
        <p className="font-sans text-ink-muted mt-1 text-sm">Update your admin account password.</p>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink-soft mb-1.5 font-sans">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field w-full px-4 py-3 rounded-lg font-sans text-sm"
              placeholder="At least 8 characters"
              required
              autoComplete="new-password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-soft mb-1.5 font-sans">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="input-field w-full px-4 py-3 rounded-lg font-sans text-sm"
              placeholder="Repeat your new password"
              required
              autoComplete="new-password"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg font-sans border border-red-100">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gradient w-full py-3 text-white font-semibold rounded-2xl transition-all disabled:opacity-60 font-sans"
          >
            {loading ? "Updating…" : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
