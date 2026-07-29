import type { Metadata } from "next";
import Link from "next/link";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Cookie Policy | NAT Technologies",
  description: "NAT Technologies Cookie Policy — how we use cookies on our website.",
};

const sections = [
  { key: "intro",               title: "Introduction" },
  { key: "what_are_cookies",    title: "What Are Cookies?" },
  { key: "cookies_we_use",      title: "Cookies We Use" },
  { key: "third_party_cookies", title: "Third-Party Cookies" },
  { key: "managing_cookies",    title: "Managing Cookies" },
];

export default async function CookiesPage() {
  const c = await getPageContent("cookies");

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
            Cookie Policy
          </h1>
          <p className="font-sans text-ink-muted">
            Last updated: {field(c, "last_updated", "July 2026")} &nbsp;·&nbsp; nat-tech.global
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-5">
        {sections.map((s) => (
          <div key={s.key} className="glass-card rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-ink mb-3">{s.title}</h2>
            <p className="font-sans text-ink-soft text-sm leading-relaxed">
              {field(c, s.key, "")}
            </p>
          </div>
        ))}

        <div className="rounded-xl p-6 font-sans text-sm text-ink-muted" style={{ border: "1px solid #E5E7EB" }}>
          For questions about our use of cookies, please{" "}
          <Link href="/contact" className="text-accent hover:underline font-medium">
            contact us
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
