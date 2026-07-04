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
    <nav className="bg-navy text-white px-6 py-4 flex items-center justify-between shadow-lg" style={{ borderBottom: "1px solid rgba(176,141,87,0.25)" }}>
      <Link href="/admin" className="flex items-center gap-2">
        <span className="font-bold text-lg" style={{ color: "#b08d57" }}>NAT</span>
        <span className="text-sm" style={{ color: "rgba(247,244,236,0.6)" }}>Content Manager</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          target="_blank"
          className="text-sm transition-colors hover:text-ivory"
          style={{ color: "rgba(247,244,236,0.5)" }}
        >
          View Site ↗
        </Link>
        <span style={{ color: "rgba(247,244,236,0.15)" }}>|</span>
        <span className="text-sm hidden sm:block" style={{ color: "rgba(247,244,236,0.5)" }}>{userEmail}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg text-sm transition-colors font-sans"
          style={{ background: "rgba(247,244,236,0.08)", color: "rgba(247,244,236,0.8)", border: "1px solid rgba(247,244,236,0.12)" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
