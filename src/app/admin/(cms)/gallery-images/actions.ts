"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

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
  await supabase.from("gallery_items").insert({
    site_id: siteId,
    title,
    category,
    image_url: imageUrl,
    storage_path: storagePath,
    sort_order: sortOrder,
  });
  revalidatePath("/gallery");
}

export async function deleteGalleryItem(id: string) {
  const supabase = await createClient();
  await supabase.from("gallery_items").delete().eq("id", id);
  revalidatePath("/gallery");
}
