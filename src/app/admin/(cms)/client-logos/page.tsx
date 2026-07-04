import { createClient } from "@/lib/supabase/server";
import { getSiteId } from "@/lib/get-content";
import ClientLogosManager from "./client-logos-manager";
import Link from "next/link";

export default async function ClientLogosPage() {
  const supabase = await createClient();
  const siteId = await getSiteId();

  const { data: items } = siteId
    ? await supabase
        .from("client_logos")
        .select("*")
        .eq("site_id", siteId)
        .order("sort_order", { ascending: true })
    : { data: [] };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Client Logos</h1>
          <p className="text-slate-500 mt-1">
            Upload and manage logos displayed on the Our Clients page
          </p>
        </div>
        <Link
          href="/admin"
          className="text-slate-400 hover:text-slate-600 text-sm transition-colors"
        >
          ← Dashboard
        </Link>
      </div>

      {!siteId ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-700 text-sm">
          Site not configured. Please check your Supabase setup.
        </div>
      ) : (
        <ClientLogosManager siteId={siteId} initialItems={items ?? []} />
      )}
    </div>
  );
}
