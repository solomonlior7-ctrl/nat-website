import { createClient } from "@/lib/supabase/server";
import { getSiteId } from "@/lib/get-content";
import GalleryManager from "./gallery-manager";
import Link from "next/link";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  const siteId = await getSiteId();

  const { data: items } = siteId
    ? await supabase
        .from("gallery_items")
        .select("*")
        .eq("site_id", siteId)
        .order("sort_order", { ascending: true })
    : { data: [] };

  return (
    <div>
      <div className="mb-6">
        <p className="text-slate-400 text-sm mb-1">
          <Link href="/admin" className="hover:text-accent">
            Dashboard
          </Link>{" "}
          / Gallery Images
        </p>
        <h1 className="text-2xl font-bold text-slate-800">Gallery Images</h1>
        <p className="text-slate-500 mt-1">
          Upload project photos — they appear live on the Gallery page.
        </p>
      </div>
      <GalleryManager siteId={siteId ?? ""} initialItems={items ?? []} />
    </div>
  );
}
