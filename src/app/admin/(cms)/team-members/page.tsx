import { createClient } from "@/lib/supabase/server";
import { getSiteId } from "@/lib/get-content";
import TeamManager from "./team-manager";

export default async function TeamMembersAdminPage() {
  const [supabase, siteId] = await Promise.all([createClient(), getSiteId()]);

  if (!siteId) return <p className="text-red-500">Site not configured.</p>;

  const { data: members } = await supabase
    .from("team_members")
    .select("*")
    .eq("site_id", siteId)
    .order("sort_order", { ascending: true });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-ink">Team Members</h1>
        <p className="font-sans text-ink-muted mt-1">Add, edit, reorder, or remove team members shown on the Team page</p>
      </div>
      <TeamManager siteId={siteId} initialMembers={members ?? []} />
    </div>
  );
}
