import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Our Clients | NAT Technologies",
  description: "NAT Technologies serves businesses across construction, real estate, fuel & fleet, retail, corporate, and security-sensitive sectors with integrated technology solutions.",
};

const categories = [
  {
    title: "Construction & Engineering",
    desc: "Site connectivity, surveillance, access control, and fuel management for construction operations and engineering facilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "#f97316",
  },
  {
    title: "Real Estate & Smart Homes",
    desc: "Smart home automation, access control, structured cabling, and integrated technology for residential developments and luxury properties.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "#22c55e",
  },
  {
    title: "Fuel & Fleet Operators",
    desc: "Complete fuel management ecosystems with RFID authentication, real-time monitoring, inventory control, and fleet reporting.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "#f59e0b",
  },
  {
    title: "Retail & Commercial Facilities",
    desc: "Network infrastructure, POS connectivity, CCTV, access control, and smart building technology for retail and commercial environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: "#3b82f6",
  },
  {
    title: "Corporate Offices",
    desc: "Enterprise IT infrastructure, cloud connectivity, managed networks, video conferencing, and unified communications for modern workplaces.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#8b5cf6",
  },
  {
    title: "Security-Sensitive Environments",
    desc: "Multi-layer security architectures, biometric access control, intrusion detection, 24/7 monitoring, and hardened network design.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "#22c55e",
  },
];

const logoPlaceholders = [
  { initials: "GC", name: "Global Construction", color: "#f97316" },
  { initials: "RE", name: "Real Estate Group", color: "#22c55e" },
  { initials: "FL", name: "Fleet Logistics", color: "#f59e0b" },
  { initials: "CP", name: "Commercial Properties", color: "#3b82f6" },
  { initials: "SM", name: "Smart Manufacture", color: "#8b5cf6" },
  { initials: "OF", name: "Oil & Fuel Corp", color: "#f97316" },
  { initials: "TG", name: "Tech Group", color: "#06b6d4" },
  { initials: "HL", name: "Homeland Security", color: "#22c55e" },
  { initials: "BC", name: "BuildCo Ltd", color: "#3b82f6" },
  { initials: "RP", name: "Retail Partners", color: "#f59e0b" },
  { initials: "AG", name: "Agri Solutions", color: "#22c55e" },
  { initials: "LX", name: "Luxury Homes", color: "#8b5cf6" },
];

const testimonials = [
  {
    quote: "Client testimonial to be added.",
    author: "Director of Operations",
    company: "Construction & Engineering Client",
    category: "IT Infrastructure",
  },
  {
    quote: "Client testimonial to be added.",
    author: "Fleet Manager",
    company: "Logistics & Fleet Client",
    category: "Fuel Management",
  },
  {
    quote: "Client testimonial to be added.",
    author: "Property Developer",
    company: "Real Estate Client",
    category: "Smart Home Automation",
  },
];

export default async function ClientsPage() {
  const c = await getPageContent("clients");

  const stats = [
    { value: field(c, "stat1_value", "200+"), label: field(c, "stat1_label", "Projects Delivered") },
    { value: field(c, "stat2_value", "6"),    label: field(c, "stat2_label", "Industry Sectors") },
    { value: field(c, "stat3_value", "100%"), label: field(c, "stat3_label", "Commitment to Quality") },
    { value: field(c, "stat4_value", "24/7"), label: field(c, "stat4_label", "Support Available") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#0b0f19" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(29,78,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute pointer-events-none" style={{ top: "-10%", right: "-5%", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(29,78,216,0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-10%", left: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 70%)", filter: "blur(70px)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-4">Our Clients</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight max-w-3xl">
            {field(c, "hero_headline", "Trusted by businesses that need reliable technology")}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
            {field(c, "hero_copy", "From enterprise IT infrastructure and advanced security to smart home automation, PoE networks, and fuel management — NAT Technologies serves organisations that cannot afford to compromise on technology quality, reliability, or security.")}
          </p>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client logo grid */}
      <section className="py-24 lg:py-32" style={{ background: "#0b0f19" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-3">Our Clients</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {field(c, "logo_grid_title", "Organisations That Trust NAT Technologies")}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">
              {field(c, "logo_grid_note", "Client logos to be added. Reach out to find out how we can support your organisation.")}
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {logoPlaceholders.map((logo) => (
              <div
                key={logo.initials}
                className="aspect-[3/2] rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                title={logo.name}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: `${logo.color}18`, color: logo.color, border: `1px solid ${logo.color}30` }}
                >
                  {logo.initials}
                </div>
                <span className="text-slate-500 text-[10px] font-medium text-center px-2 leading-tight">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client categories */}
      <section className="py-24 lg:py-32" style={{ background: "#0f1624" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-3">Sectors We Serve</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {field(c, "sectors_title", "Industries We Work With")}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">
              {field(c, "sectors_subtitle", "We bring integrated technology solutions to organisations across six primary industry sectors.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-xl p-6 transition-all hover:-translate-y-1 group"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{ background: `${cat.color}18`, color: cat.color, border: `1px solid ${cat.color}30` }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold mb-2 tracking-tight">{cat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32" style={{ background: "#0b0f19" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-3">What Clients Say</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(29,78,216,0.2)", color: "#3b82f6", border: "1px solid rgba(29,78,216,0.3)" }}>
                    {t.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.author}</p>
                    <p className="text-slate-500 text-xs">{t.company}</p>
                  </div>
                  <span className="ml-auto text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>
                    {t.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Want to become our next success story?")}
        subtext={field(c, "cta_subtext", "Tell us about your technology challenges and let us design a solution that delivers real results.")}
        primaryCta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
