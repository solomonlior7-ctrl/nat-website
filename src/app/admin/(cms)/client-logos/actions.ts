"use server";

import { createClient } from "@/lib/supabase/server";
import { getSiteId } from "@/lib/get-content";
import { revalidatePath } from "next/cache";

const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif", "avif", "svg"];

export async function addClientLogo({
  name,
  websiteUrl,
  sector,
  logoUrl,
  storagePath,
  sortOrder,
}: {
  name: string;
  websiteUrl: string;
  sector: string;
  logoUrl: string;
  storagePath: string;
  sortOrder: number;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const ext = storagePath.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    await supabase.storage.from("site-media").remove([storagePath]);
    return { error: "Invalid file type." };
  }

  const siteId = await getSiteId();
  if (!siteId) return { error: "Site not found" };

  const { error } = await supabase.from("client_logos").insert({
    site_id: siteId,
    name: name.trim(),
    website_url: websiteUrl.trim() || null,
    sector: sector.trim() || null,
    logo_url: logoUrl,
    storage_path: storagePath,
    sort_order: sortOrder,
  });

  if (error) return { error: error.message };
  revalidatePath("/clients");
  return { error: null };
}

export async function deleteClientLogo(id: string, storagePath: string | null) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (storagePath) {
    await supabase.storage.from("site-media").remove([storagePath]);
  }

  const { error } = await supabase.from("client_logos").delete().eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/clients");
  return { error: null };
}

export async function updateClientLogo(
  id: string,
  updates: { name?: string; website_url?: string; sector?: string; sort_order?: number }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const { error } = await supabase
    .from("client_logos")
    .update(updates)
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/clients");
  return { error: null };
}
