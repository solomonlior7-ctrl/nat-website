import { createClient } from "@/lib/supabase/server";

export default async function ContactSubmissionsPage() {
  const supabase = await createClient();

  const { data: submissions, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("submitted_at", { ascending: false });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Contact Submissions</h1>
          <p className="font-sans text-ink-muted mt-1 text-sm">
            {submissions?.length ?? 0} message{submissions?.length !== 1 ? "s" : ""} received
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-xl p-4 font-sans text-sm" style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#B91C1C" }}>
          <strong>Database error:</strong> {error.message}
        </div>
      )}

      {!submissions || submissions.length === 0 ? (
        <div className="glass-card rounded-2xl p-16 text-center">
          <div className="text-5xl mb-4">📭</div>
          <p className="font-semibold text-ink mb-1">No submissions yet</p>
          <p className="font-sans text-ink-muted text-sm">Messages from the contact form will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((s) => (
            <div key={s.id} className="glass-card rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  {!s.read && (
                    <span
                      className="shrink-0 text-xs font-bold px-2 py-0.5 rounded-full font-sans"
                      style={{ background: "rgba(37,132,244,0.10)", color: "#2584F4", border: "1px solid rgba(37,132,244,0.20)" }}
                    >
                      New
                    </span>
                  )}
                  <div>
                    <p className="font-semibold text-ink text-base">{s.name}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                      <a
                        href={`mailto:${s.email}`}
                        className="font-sans text-sm text-accent hover:underline"
                      >
                        {s.email}
                      </a>
                      {s.phone && (
                        <a
                          href={`tel:${s.phone}`}
                          className="font-sans text-sm text-ink-muted hover:text-ink"
                        >
                          {s.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <span className="font-sans text-xs text-ink-muted shrink-0">
                  {new Date(s.submitted_at).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              {s.subject && (
                <p className="font-sans text-sm font-semibold text-ink-soft mb-2">
                  Subject: {s.subject}
                </p>
              )}

              <p className="font-sans text-sm text-ink-soft leading-relaxed whitespace-pre-line">
                {s.message}
              </p>

              <div className="mt-4 pt-4 flex gap-3" style={{ borderTop: "1px solid #E5E7EB" }}>
                <a
                  href={`mailto:${s.email}?subject=Re: ${encodeURIComponent(s.subject || "Your enquiry")}`}
                  className="btn-gradient px-4 py-2 text-white text-xs font-bold font-sans"
                >
                  Reply by Email
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
