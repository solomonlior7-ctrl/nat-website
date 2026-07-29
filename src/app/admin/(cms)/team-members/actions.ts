"use server";

import { createClient } from "@/lib/supabase/server";
import { getSiteId } from "@/lib/get-content";
import { revalidatePath } from "next/cache";

export async function addTeamMember(data: {
  name: string;
  role: string;
  bio: string;
  expertise: string;
  photoUrl: string;
  photoStoragePath: string;
  sortOrder: number;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const siteId = await getSiteId();
  if (!siteId) return { error: "Site not found" };

  const { error } = await supabase.from("team_members").insert({
    site_id: siteId,
    name: data.name.trim(),
    role: data.role.trim(),
    bio: data.bio.trim(),
    expertise: data.expertise.trim(),
    photo_url: data.photoUrl,
    photo_storage_path: data.photoStoragePath || null,
    sort_order: data.sortOrder,
  });

  if (error) return { error: error.message };
  revalidatePath("/team");
  return { error: null };
}

export async function updateTeamMember(
  id: string,
  updates: {
    name?: string;
    role?: string;
    bio?: string;
    expertise?: string;
    photo_url?: string;
    photo_storage_path?: string | null;
    sort_order?: number;
  }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const { error } = await supabase
    .from("team_members")
    .update(updates)
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/team");
  return { error: null };
}

export async function deleteTeamMember(id: string, storagePath: string | null) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (storagePath) {
    await supabase.storage.from("site-media").remove([storagePath]);
  }

  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/team");
  return { error: null };
}
