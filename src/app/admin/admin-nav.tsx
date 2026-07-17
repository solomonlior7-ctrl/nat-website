"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminNav({ userEmail }: { userEmail: string }) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid #E5E7EB", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
      <Link href="/admin" className="flex items-center gap-2">
        <span className="font-bold text-lg text-accent">NAT</span>
        <span className="text-sm text-ink-muted font-sans">Content Manager</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          target="_blank"
          className="text-sm font-sans text-ink-muted hover:text-ink transition-colors"
        >
          View Site ↗
        </Link>
        <span className="text-line-deep">|</span>
        <span className="text-sm hidden sm:block text-ink-muted font-sans">{userEmail}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg text-sm transition-colors font-sans text-ink-soft hover:text-ink border border-line hover:border-line-deep bg-ivory-deep hover:bg-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
