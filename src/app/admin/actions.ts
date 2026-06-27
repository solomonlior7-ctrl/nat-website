"use server";

import { createClient } from "@/lib/supabase/server";
import { getSiteId } from "@/lib/get-content";
import { revalidatePath } from "next/cache";

export async function savePageContent(
  page: string,
  values: Record<string, string>
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const siteId = await getSiteId();
  if (!siteId) throw new Error("Site not found");

  const rows = Object.entries(values).map(([key, value]) => ({
    site_id: siteId,
    page,
    key,
    value,
    updated_at: new Date().toISOString(),
  }));

  await supabase
    .from("page_content")
    .upsert(rows, { onConflict: "site_id,page,key" });

  revalidatePath("/");
  revalidatePath(`/${page}`);
}
