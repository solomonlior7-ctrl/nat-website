"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitContactForm(data: {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ error: string | null }> {
  const supabase = await createClient();
  const { error } = await supabase.from("contact_submissions").insert({
    name: data.name.trim(),
    phone: data.phone.trim() || null,
    email: data.email.trim().toLowerCase(),
    subject: data.subject,
    message: data.message.trim(),
  });

  if (error) return { error: error.message };
  return { error: null };
}
