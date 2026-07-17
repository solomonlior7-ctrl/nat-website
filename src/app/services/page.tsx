import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Our Services | NAT Technologies",
  description: "Explore NAT Technologies' integrated service areas: IT & IP infrastructure, low-voltage & PoE, security solutions, smart home automation, and fuel management systems.",
};

const process = [
  { label: "Consult", desc: "We listen, understand your needs, and assess your environment." },
  { label: "Design", desc: "We architect a tailored solution aligned with your goals and budget." },
  { label: "Deploy", desc: "Our team installs and integrates every element with precision." },
  { label: "Support", desc: "We provide ongoing monitoring, maintenance, and responsive support." },
];

export default async function ServicesPage() {
  const c = await getPageContent("services");

  const services = [
    {
      title: "IT & IP Infrastructure",
      href: "/services/it-infrastructure",
      summary: field(c, "it_summary", "Enterprise connectivity, cloud solutions, structured cabling, network architecture, managed services, and security resilience."),
      accent: "#2584F4",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
    },
    {
      title: "Low Voltage & PoE",
      href: "/services/low-voltage-poe",
      summary: field(c, "poe_summary", "Power over Ethernet systems that deliver data and power through a single cable — simplifying deployment and reducing infrastructure costs."),
      accent: "#2584F4",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Security Solutions",
      href: "/services/security-solutions",
      summary: field(c, "security_summary", "Complete visibility, protection, and control across networks, cloud, identity, IoT, access control, and physical surveillance."),
      accent: "#2584F4",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Smart Home Automation",
      href: "/services/smart-home",
      summary: field(c, "smarthome_summary", "Intelligent automation for lighting, climate, security, shading, and connected devices — delivering comfort, efficiency, and control."),
      accent: "#2584F4",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Fuel Management Systems",
      href: "/services/fuel-management",
      summary: field(c, "fuel_summary", "Intelligent fuel dispensing, real-time monitoring, RFID authentication, tank-level visibility, and automated reporting for fleets and facilities."),
      accent: "#2584F4",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Hero
        title="Our Services"
        headline={field(c, "hero_headline", "Integrated Technology Services Built Around Your Needs")}
        copy={field(c, "hero_copy", "Five specialised service areas — each designed to connect seamlessly across infrastructure, security, automation, and operations.")}
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
      />

      {/* Service Cards */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-transform duration-200">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${s.accent}12`, border: `1px solid ${s.accent}22` }}
                >
                  <span style={{ color: s.accent }}>{s.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">{s.title}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed mb-6">{s.summary}</p>
                <Link
                  href={s.href}
                  className="inline-flex items-center text-sm font-bold transition-colors font-sans"
                  style={{ color: s.accent }}
                >
                  Learn More
                  <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Delivery */}
      <section className="py-20 bg-ivory-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">
            Integrated Delivery
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-ink mb-6 tracking-tight">
            {field(c, "integrated_headline", "One Partner. Every Layer.")}
          </h2>
          <p className="font-sans text-ink-soft text-lg leading-relaxed">
            {field(c, "integrated_text", "Our services are designed to work as a connected ecosystem. Whether you need a single service or a complete technology environment, NAT Technologies delivers integrated solutions that communicate, complement, and evolve together.")}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-ivory text-xl font-bold font-sans">{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{step.label}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Let's Discuss Your Project")}
        subtext={field(c, "cta_subtext", "Tell us what you need and we'll design a solution that fits.")}
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
      />
    </>
  );
}
