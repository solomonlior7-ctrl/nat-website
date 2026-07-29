import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement | NAT Technologies",
  description: "NAT Technologies is committed to making its website accessible to all users, in accordance with Israeli accessibility regulations and WCAG 2.0 AA standards.",
};

const sections = [
  {
    title: "Our Commitment",
    content:
      "NAT Technologies is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.",
  },
  {
    title: "Conformance Status",
    content:
      "This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.0, Level AA, as required by Israeli Standard IS 5568 and the Equal Rights for Persons with Disabilities Law (1998) and its Accessibility of Service Regulations (2013).",
  },
  {
    title: "Measures Taken",
    content: null,
    list: [
      "All images include descriptive alternative text",
      "The site can be navigated using a keyboard alone",
      "Text can be resized up to 200% without loss of content or functionality",
      "Colour contrast meets WCAG 2.0 AA minimum ratios",
      "Form fields are labelled clearly",
      "Navigation is consistent and predictable across pages",
      "Headings are structured hierarchically to aid screen reader navigation",
    ],
  },
  {
    title: "Known Limitations",
    content:
      "While we strive for full accessibility, some areas of the site may not yet fully conform. We are actively working to resolve these issues. If you encounter a barrier, please contact us directly so we can assist you and address the issue.",
  },
  {
    title: "Assistive Technologies Supported",
    content: null,
    list: [
      "Screen readers (NVDA, JAWS, VoiceOver)",
      "Keyboard-only navigation",
      "Browser zoom and text resize",
      "High contrast display modes",
    ],
  },
  {
    title: "Feedback & Contact",
    content:
      "We welcome feedback on the accessibility of this website. If you experience any difficulty accessing content or functionality, or if you would like to request content in an accessible format, please contact our accessibility coordinator:",
    contact: true,
  },
  {
    title: "Formal Complaints",
    content:
      "If you are not satisfied with our response, you may contact the relevant Israeli regulatory authority. We are committed to resolving accessibility barriers as quickly as possible.",
  },
];

export default function AccessibilityPage() {
  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-ivory-deep" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 font-sans"
            style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.15)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">Accessibility</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-ink tracking-tight mb-4">
            Accessibility Statement
          </h1>
          <p className="font-sans text-ink-muted">
            Last updated: July 2026 &nbsp;·&nbsp; Applies to: nat-tech.global
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {sections.map((s) => (
          <div key={s.title} className="glass-card rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-ink mb-4">{s.title}</h2>

            {s.content && (
              <p className="font-sans text-ink-soft text-sm leading-relaxed">{s.content}</p>
            )}

            {s.list && (
              <ul className="space-y-2 mt-2">
                {s.list.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-ink-soft">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {s.contact && (
              <div
                className="mt-5 rounded-xl p-5 font-sans text-sm space-y-1.5"
                style={{ background: "rgba(37,132,244,0.05)", border: "1px solid rgba(37,132,244,0.12)" }}
              >
                <p className="font-semibold text-ink">Accessibility Coordinator</p>
                <p className="text-ink-muted">Lior Solomon — NAT Technologies Ltd.</p>
                <p className="text-ink-muted">
                  Email:{" "}
                  <a href="mailto:lior@nat-tech.global" className="text-accent hover:underline">
                    lior@nat-tech.global
                  </a>
                </p>
                <p className="text-ink-muted">Phone: 077-752-4492</p>
                <p className="text-ink-muted text-xs mt-2">
                  We aim to respond to accessibility enquiries within 2 business days.
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Standards reference */}
        <div className="rounded-xl p-6 font-sans text-sm text-ink-muted" style={{ border: "1px solid #E5E7EB" }}>
          <p>
            This statement is made in accordance with the{" "}
            <strong className="text-ink-soft">Equal Rights for Persons with Disabilities Law (1998)</strong>,
            the Accessibility of Service Regulations (2013), and Israeli Standard{" "}
            <strong className="text-ink-soft">IS 5568</strong> (equivalent to WCAG 2.0 AA).
          </p>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="btn-gradient inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-bold font-sans"
          >
            Contact Us About Accessibility
          </Link>
        </div>
      </div>
    </div>
  );
}
