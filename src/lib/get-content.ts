import { createClient } from "./supabase/server";

const SITE_SLUG = "nat-tech";

export async function getSiteId(): Promise<string | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("sites")
    .select("id")
    .eq("slug", SITE_SLUG)
    .single();
  return data?.id ?? null;
}

export async function getPageContent(
  page: string
): Promise<Record<string, string>> {
  const supabase = await createClient();
  const siteId = await getSiteId();
  if (!siteId) return {};

  const { data } = await supabase
    .from("page_content")
    .select("key, value")
    .eq("site_id", siteId)
    .eq("page", page);

  const content: Record<string, string> = {};
  data?.forEach((row) => {
    if (row.value !== null) content[row.key] = row.value;
  });
  return content;
}

export function field(
  content: Record<string, string>,
  key: string,
  defaultValue: string
): string {
  return content[key] ?? defaultValue;
}
