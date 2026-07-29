import type { Metadata } from "next";
import Link from "next/link";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Privacy Notice | NAT Technologies",
  description: "NAT Technologies Privacy Notice — how we collect, use, and protect your personal data.",
};

const sections = [
  { key: "intro",          title: "Introduction" },
  { key: "data_collected", title: "Data We Collect" },
  { key: "data_usage",     title: "How We Use Your Data" },
  { key: "data_retention", title: "Data Retention" },
  { key: "third_parties",  title: "Third Parties" },
  { key: "your_rights",    title: "Your Rights" },
  { key: "contact",        title: "Contact" },
];

export default async function PrivacyPage() {
  const c = await getPageContent("privacy");

  return (
    <div className="bg-ivory min-h-screen">
      <div className="bg-ivory-deep" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 font-sans"
            style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.15)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">Legal</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-ink tracking-tight mb-4">
            Privacy Notice
          </h1>
          <p className="font-sans text-ink-muted">
            Last updated: {field(c, "last_updated", "July 2026")} &nbsp;·&nbsp; NAT Technologies Ltd.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-5">
        {sections.map((s) => (
          <div key={s.key} className="glass-card rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-ink mb-3">{s.title}</h2>
            <p className="font-sans text-ink-soft text-sm leading-relaxed whitespace-pre-line">
              {field(c, s.key, "")}
            </p>
          </div>
        ))}

        <div className="rounded-xl p-6 font-sans text-sm text-ink-muted" style={{ border: "1px solid #E5E7EB" }}>
          For privacy-related enquiries, please{" "}
          <Link href="/contact" className="text-accent hover:underline font-medium">
            contact us
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
