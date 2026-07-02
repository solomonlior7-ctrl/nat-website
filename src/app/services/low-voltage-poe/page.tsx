import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Low Voltage & Power over Ethernet | NAT Technologies",
  description: "Low-voltage and PoE infrastructure solutions — simplifying deployment, reducing cabling complexity, and powering connected buildings.",
};

const benefits = [
  { title: "Simplified Installation", desc: "One cable carries both power and data, reducing the time and cost of installation across any site." },
  { title: "Deployment Flexibility", desc: "Install connected devices anywhere an Ethernet cable can reach — no separate power outlet required." },
  { title: "Centralised Management", desc: "Manage power delivery and device connections from a central PoE switch — enabling remote monitoring and control." },
  { title: "Standards-Based Reliability", desc: "Built on IEEE 802.3 standards, ensuring interoperability, reliability, and compatibility with a wide range of devices." },
  { title: "Future Readiness", desc: "Scale your infrastructure as your needs grow — adding new devices without rewiring your building." },
  { title: "Cost Efficiency", desc: "Reduce hardware, cabling, and installation costs while simplifying your infrastructure for easier management." },
];

const applications = [
  "Commercial Buildings", "Office Environments", "Education Facilities",
  "Residential Developments", "Industrial Facilities", "Healthcare Environments",
];

const technologies = [
  { title: "AV Systems", desc: "IP-based audio/visual distribution and control over structured cabling." },
  { title: "Wireless Networking", desc: "PoE-powered wireless access points for seamless, building-wide Wi-Fi coverage." },
  { title: "Smart Buildings", desc: "Connected building management systems powered and managed over Ethernet." },
  { title: "Access Control", desc: "IP-based access control panels, readers, and door hardware powered by PoE." },
  { title: "Unified Communications", desc: "VoIP phones, intercoms, and collaboration devices powered via PoE switches." },
];

const processSteps = [
  "Discovery & Site Survey", "Requirements Analysis", "Solution Design", "Hardware Specification",
  "Cable Infrastructure", "Switch & Device Installation", "System Configuration", "Testing & Commissioning", "Handover & Support",
];

export default async function LowVoltagePage() {
  const c = await getPageContent("low-voltage-poe");
  return (
    <>
      <Hero
        title="Low Voltage & PoE"
        headline={field(c, "hero_headline", "Smarter Infrastructure. Simpler Connectivity.")}
        copy={field(c, "hero_copy", "Power over Ethernet transmits both power and data through a single Ethernet cable — reducing cabling complexity, simplifying deployment, and supporting connected buildings.")}
        primaryCta={{ label: "Modernise Your Infrastructure", href: "/contact" }}
        breadcrumb={[{ label: "Our Services", href: "/services" }, { label: "Low Voltage & PoE", href: "/services/low-voltage-poe" }]}
      />

      {/* What Is PoE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">What Is PoE?</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{field(c, "poe_title", "One Cable. Two Functions.")}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {field(c, "poe_p1", "Power over Ethernet (PoE) is a technology that transmits electrical power and data simultaneously through standard Ethernet cabling. This eliminates the need for separate power supplies for connected devices such as IP cameras, access points, VoIP phones, and access control systems.")}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {field(c, "poe_p2", "NAT Technologies designs, supplies, and installs complete PoE infrastructure — from PoE switches and structured cabling to connected device deployment and ongoing management.")}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900 to-navy rounded-2xl p-10 flex flex-col gap-4">
              {["Ethernet Cable", "PoE Switch", "Connected Device", "Power + Data"].map((item, i) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent text-sm font-bold shrink-0">{i + 1}</span>
                  <span className="text-white font-medium">{item}</span>
                  {i < 3 && <div className="flex-1 h-px bg-accent/30" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefits of PoE</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Applications</h2>
            <p className="text-slate-600">PoE solutions are suitable for a wide range of environments and industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {applications.map((app) => (
              <div key={app} className="bg-gradient-to-br from-slate-800 to-navy rounded-xl p-6 text-center">
                <span className="text-white font-semibold text-sm">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Technologies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Supporting Technologies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((t) => (
              <div key={t.title} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Deployment Process</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {processSteps.map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-accent text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-slate-400 text-xs leading-tight">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Ready to Modernise Your Infrastructure?")}
        primaryCta={{ label: "Modernise Your Infrastructure", href: "/contact" }}
      />
    </>
  );
}
