"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif", "avif"];

export async function addGalleryItem({
  siteId,
  title,
  category,
  imageUrl,
  storagePath,
  sortOrder,
}: {
  siteId: string;
  title: string;
  category: string;
  imageUrl: string;
  storagePath: string;
  sortOrder: number;
}) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const ext = storagePath.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    await supabase.storage.from("site-media").remove([storagePath]);
    return { error: "Invalid file type. Only jpg, png, webp, gif, avif are allowed." };
  }

  const { error } = await supabase.from("gallery_items").insert({
    site_id: siteId,
    title,
    category,
    image_url: imageUrl,
    storage_path: storagePath,
    sort_order: sortOrder,
  });

  if (error) return { error: error.message };

  revalidatePath("/gallery");
  return { error: null };
}

export async function deleteGalleryItem(id: string) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("gallery_items").delete().eq("id", id);
  revalidatePath("/gallery");
}
