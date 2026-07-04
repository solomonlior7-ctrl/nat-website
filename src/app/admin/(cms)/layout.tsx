import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminNav from "../admin-nav";

export default async function AdminCmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-ivory-deep flex flex-col">
      <AdminNav userEmail={user.email ?? ""} />
      <div className="flex-1 max-w-5xl mx-auto w-full p-6">{children}</div>
    </div>
  );
}
