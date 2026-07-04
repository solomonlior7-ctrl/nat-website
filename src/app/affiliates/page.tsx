import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Affiliate Companies | NAT Technologies",
  description: "NAT Technologies strategic technology partners — LoopTag RFID fuel control systems and SwitchBee smart home automation solutions.",
};

const affiliates = [
  {
    id: "looptag",
    initials: "LT",
    name: "LoopTag",
    tagline: "Secured RFID Fuel Control & Fleet Management",
    website: "https://loop-tag.com/",
    accentColor: "#b85c1a",
    accentBg: "rgba(184,92,26,0.07)",
    accentBorder: "rgba(184,92,26,0.18)",
    description:
      "LoopTag is an advanced RFID-based refueling and fleet fuel-control system that gives organisations complete control over their fuel operations. It eliminates fuel theft, prevents unauthorised refueling and misfuelling, and provides fleet managers with accurate reporting and real-time visibility.",
    relation:
      "NAT Technologies deploys LoopTag systems as part of our integrated fuel management service offering — combining intelligent dispensing hardware, RFID infrastructure, and centralised monitoring for comprehensive fuel control.",
    features: [
      "Secure RFID vehicle and driver identification",
      "Fuel theft prevention and misfuelling protection",
      "Real-time dispensing monitoring and alerts",
      "Fleet fuel-control reporting and analytics",
      "Automated inventory management",
      "Remote system monitoring and management",
    ],
    suitedFor: ["Fuel stations", "Commercial fleets", "Oil & gas companies", "Logistics operators", "Construction sites", "Agricultural operations"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: "switchbee",
    initials: "SB",
    name: "SwitchBee",
    tagline: "Advanced Smart Home & Building Automation",
    website: "https://www.switchbee.com/",
    accentColor: "#1e3a5f",
    accentBg: "rgba(30,58,95,0.07)",
    accentBorder: "rgba(30,58,95,0.18)",
    description:
      "SwitchBee is a leading smart home and building automation platform that delivers full control over lighting, shutters, air conditioning, VRF systems, sensors, irrigation, sockets, and more — all through an intuitive mobile app. Designed for fast installation without major rewiring, SwitchBee fits new builds and retrofits alike.",
    relation:
      "NAT Technologies is an authorised SwitchBee integrator, delivering complete smart home and building automation projects — from system design and hardware supply to professional installation, configuration, and ongoing support.",
    features: [
      "Lighting, shutter, and socket control",
      "HVAC, A/C, and VRF system integration",
      "Sensor-based and schedule-based automation",
      "Irrigation and energy management",
      "App-based control from anywhere",
      "Fast installation without full rewiring",
    ],
    suitedFor: ["Private residences", "Luxury apartments", "Commercial offices", "Hotels and hospitality", "Retail environments", "New developments and retrofits"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default async function AffiliatesPage() {
  const c = await getPageContent("affiliates");

  const affiliatesWithContent = [
    { ...affiliates[0], description: field(c, "looptag_description", affiliates[0].description), relation: field(c, "looptag_relation", affiliates[0].relation) },
    { ...affiliates[1], description: field(c, "switchbee_description", affiliates[1].description), relation: field(c, "switchbee_relation", affiliates[1].relation) },
  ];

  return (
    <>
      <Hero
        title="Strategic Partners"
        headline={field(c, "hero_headline", "Technology Partners We Trust")}
        copy={field(c, "hero_copy", "NAT Technologies works with best-in-class technology manufacturers and solution providers. Our affiliate partnerships allow us to offer integrated, end-to-end solutions that our clients can rely on.")}
      />

      {/* Partnership stats strip */}
      <div className="bg-ivory-deep" style={{ borderTop: "1px solid #e0d8c7", borderBottom: "1px solid #e0d8c7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center gap-8 lg:gap-16">
            {[
              { label: "Authorised Integrators", value: "2+" },
              { label: "Technology Domains", value: "5" },
              { label: "Integrated Deployments", value: "100+" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="font-sans text-2xl font-bold text-accent">{s.value}</span>
                <span className="font-sans text-ink-muted text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Affiliate Cards */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {affiliatesWithContent.map((a) => (
            <div key={a.id} className="glass-card rounded-2xl overflow-hidden">
              {/* Card header */}
              <div className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-ivory-deep" style={{ borderBottom: "1px solid #e0d8c7" }}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-bold text-xl font-sans tracking-tight"
                  style={{ background: a.accentBg, border: `1px solid ${a.accentBorder}`, color: a.accentColor }}
                >
                  {a.initials}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h2 className="text-2xl font-semibold text-ink tracking-tight">{a.name}</h2>
                    <span
                      className="font-sans text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: a.accentBg, color: a.accentColor, border: `1px solid ${a.accentBorder}` }}
                    >
                      Authorised Partner
                    </span>
                  </div>
                  <p className="font-sans text-ink-muted text-sm font-medium">{a.tagline}</p>
                </div>
                <a
                  href={a.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans text-sm font-bold text-ivory transition-all hover:-translate-y-0.5 shrink-0 bg-accent hover:bg-accent-dark"
                >
                  Visit {a.name} Website
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Card body */}
              <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Description + relation */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="font-semibold text-ink mb-3 flex items-center gap-2">
                      <span style={{ color: a.accentColor }}>{a.icon}</span>
                      About {a.name}
                    </h3>
                    <p className="font-sans text-ink-soft leading-relaxed text-sm">{a.description}</p>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: a.accentBg, border: `1px solid ${a.accentBorder}` }}>
                    <p className="font-sans text-xs font-bold uppercase tracking-widest mb-2" style={{ color: a.accentColor }}>
                      How NAT Technologies Uses {a.name}
                    </p>
                    <p className="font-sans text-ink-soft text-sm leading-relaxed">{a.relation}</p>
                  </div>
                </div>

                {/* Features + suited for */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-sans text-ink text-sm font-bold mb-4 uppercase tracking-wider">Key Capabilities</h4>
                    <ul className="space-y-2.5">
                      {a.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-ink-soft">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: a.accentColor }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans text-ink text-sm font-bold mb-4 uppercase tracking-wider">Suited For</h4>
                    <div className="flex flex-wrap gap-2">
                      {a.suitedFor.map((s) => (
                        <span key={s} className="font-sans text-xs font-medium px-3 py-1 rounded-lg bg-ivory-deep text-ink-soft" style={{ border: "1px solid #e0d8c7" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-20 bg-ivory-deep" style={{ borderTop: "1px solid #e0d8c7" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-4">Work With Us</p>
          <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">
            {field(c, "partner_cta_headline", "Interested in a Technology Partnership?")}
          </h2>
          <p className="font-sans text-ink-soft leading-relaxed mb-8">
            {field(c, "partner_cta_text", "NAT Technologies is open to strategic partnerships with technology manufacturers and solution providers whose products complement our service areas.")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-ivory font-bold rounded-xl font-sans text-sm transition-all hover:-translate-y-0.5 bg-accent hover:bg-accent-dark shadow-sm"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Need a Fuel Control or Smart Home Solution?")}
        subtext={field(c, "cta_subtext", "Speak to our team about deploying LoopTag or SwitchBee technology for your business or property.")}
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
