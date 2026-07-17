import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field, getSiteId } from "@/lib/get-content";
import { createClient } from "@/lib/supabase/server";

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
    accent: "#2584F4",
  },
  {
    title: "Real Estate & Smart Homes",
    desc: "Smart home automation, access control, structured cabling, and integrated technology for residential developments and luxury properties.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    accent: "#2584F4",
  },
  {
    title: "Fuel & Fleet Operators",
    desc: "Complete fuel management ecosystems with RFID authentication, real-time monitoring, inventory control, and fleet reporting.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: "#2584F4",
  },
  {
    title: "Retail & Commercial Facilities",
    desc: "Network infrastructure, POS connectivity, CCTV, access control, and smart building technology for retail and commercial environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    accent: "#2584F4",
  },
  {
    title: "Corporate Offices",
    desc: "Enterprise IT infrastructure, cloud connectivity, managed networks, video conferencing, and unified communications for modern workplaces.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#2584F4",
  },
  {
    title: "Security-Sensitive Environments",
    desc: "Multi-layer security architectures, biometric access control, intrusion detection, 24/7 monitoring, and hardened network design.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accent: "#2584F4",
  },
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
  const [c, siteId] = await Promise.all([getPageContent("clients"), getSiteId()]);

  const supabase = await createClient();
  const { data: clientLogos } = siteId
    ? await supabase
        .from("client_logos")
        .select("id, name, website_url, sector, logo_url")
        .eq("site_id", siteId)
        .order("sort_order", { ascending: true })
    : { data: [] };

  const logos = clientLogos ?? [];

  const stats = [
    { value: field(c, "stat1_value", "200+"), label: field(c, "stat1_label", "Projects Delivered") },
    { value: field(c, "stat2_value", "6"),    label: field(c, "stat2_label", "Industry Sectors") },
    { value: field(c, "stat3_value", "100%"), label: field(c, "stat3_label", "Commitment to Quality") },
    { value: field(c, "stat4_value", "24/7"), label: field(c, "stat4_label", "Support Available") },
  ];

  return (
    <>
      <Hero
        title="Our Clients"
        headline={field(c, "hero_headline", "Trusted by businesses that need reliable technology")}
        copy={field(c, "hero_copy", "From enterprise IT infrastructure and advanced security to smart home automation, PoE networks, and fuel management — NAT Technologies serves organisations that cannot afford to compromise on technology quality, reliability, or security.")}
      />

      {/* Stats strip */}
      <div className="bg-ivory-deep" style={{ borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-sans text-3xl font-bold text-accent mb-1">{s.value}</div>
                <div className="font-sans text-ink-muted text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client logo grid */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">Our Clients</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-ink mb-4 tracking-tight">
              {field(c, "logo_grid_title", "Organisations That Trust NAT Technologies")}
            </h2>
            <p className="font-sans text-ink-soft max-w-xl mx-auto">
              {field(c, "logo_grid_note", "Client logos to be added. Reach out to find out how we can support your organisation.")}
            </p>
          </div>

          {logos.length === 0 ? (
            <div className="glass-card rounded-2xl p-10 text-center">
              <p className="font-sans text-ink-muted text-sm font-medium">
                {field(c, "logo_grid_note", "Client logos to be added. Reach out to find out how we can support your organisation.")}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {logos.map((logo) => {
                const card = (
                  <div
                    className="aspect-[3/2] rounded-xl flex flex-col items-center justify-center gap-2 p-4 glass-card hover:-translate-y-1 transition-all group"
                    title={logo.name}
                  >
                    <div className="flex-1 flex items-center justify-center w-full">
                      <Image
                        src={logo.logo_url}
                        alt={logo.name}
                        width={120}
                        height={60}
                        className="max-h-12 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="font-sans text-ink-muted text-[10px] font-medium text-center leading-tight group-hover:text-ink-soft transition-colors">
                      {logo.name}
                    </span>
                  </div>
                );

                const safeUrl = logo.website_url
                  ? logo.website_url.match(/^https?:\/\//) ? logo.website_url : `https://${logo.website_url}`
                  : null;

                return safeUrl ? (
                  <a key={logo.id} href={safeUrl} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                ) : (
                  <div key={logo.id}>{card}</div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Client categories */}
      <section className="py-24 lg:py-32 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">Sectors We Serve</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-ink mb-4 tracking-tight">
              {field(c, "sectors_title", "Industries We Work With")}
            </h2>
            <p className="font-sans text-ink-soft max-w-xl mx-auto">
              {field(c, "sectors_subtitle", "We bring integrated technology solutions to organisations across six primary industry sectors.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div key={cat.title} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{ background: `${cat.accent}10`, color: cat.accent, border: `1px solid ${cat.accent}20` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-ink mb-2 tracking-tight">{cat.title}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">What Clients Say</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-ink mb-4 tracking-tight">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-7">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans text-ink-soft text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #E5E7EB" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-sans text-xs font-bold bg-ivory-deep text-accent" style={{ border: "1px solid #E5E7EB" }}>
                    {t.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-sans text-ink text-sm font-semibold">{t.author}</p>
                    <p className="font-sans text-ink-muted text-xs">{t.company}</p>
                  </div>
                  <span className="ml-auto font-sans text-xs font-medium px-2.5 py-1 rounded-full bg-ivory-deep text-ink-soft" style={{ border: "1px solid #E5E7EB" }}>
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
