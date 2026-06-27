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
    <nav className="bg-navy text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <Link href="/admin" className="flex items-center gap-2">
        <span className="font-bold text-accent text-lg">NAT</span>
        <span className="text-slate-300 text-sm">Content Manager</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          target="_blank"
          className="text-slate-400 hover:text-white text-sm transition-colors"
        >
          View Site ↗
        </Link>
        <span className="text-slate-600">|</span>
        <span className="text-slate-400 text-sm hidden sm:block">{userEmail}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
