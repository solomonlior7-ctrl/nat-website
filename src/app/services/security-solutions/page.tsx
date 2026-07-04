import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Security Solutions | NAT Technologies",
  description: "Complete security solutions from NAT Technologies — network visibility, cybersecurity, identity management, IoT protection, access control, and surveillance.",
};

const process = [
  { label: "Discovery", desc: "Assess your current environment, identify assets, and understand existing security posture." },
  { label: "Asset Visibility", desc: "Map all connected devices, users, and systems across your infrastructure." },
  { label: "Risk Analysis", desc: "Identify vulnerabilities, exposures, and risk priorities across all attack surfaces." },
  { label: "Control Design", desc: "Design a security architecture tailored to your risk profile and operational requirements." },
  { label: "Implementation", desc: "Deploy controls, policies, monitoring tools, and access management solutions." },
  { label: "Monitoring", desc: "Establish continuous monitoring, alerting, and log management across your environment." },
  { label: "Incident Response", desc: "Define and exercise response plans to contain, eradicate, and recover from security events." },
  { label: "Optimisation", desc: "Review, measure, and continuously improve your security posture over time." },
];

const expertise = [
  {
    title: "Infrastructure Visibility",
    desc: "Complete visibility across your physical and virtual infrastructure — including switches, routers, servers, endpoints, and cloud resources.",
  },
  {
    title: "Cybersecurity",
    desc: "Firewall management, intrusion detection, vulnerability scanning, and endpoint protection tailored to your risk exposure.",
  },
  {
    title: "Identity & Access Management",
    desc: "Control who can access what — with multi-factor authentication, role-based access, and privileged access management.",
  },
  {
    title: "IoT & OT Security",
    desc: "Protect connected devices, industrial systems, and operational technology that traditional security tools often miss.",
  },
];

const outcomes = [
  { label: "Reduce Risk", desc: "Identify and address vulnerabilities before they become incidents." },
  { label: "Improve Visibility", desc: "See everything on your network — users, devices, cloud, and IoT." },
  { label: "Enhance Efficiency", desc: "Streamline security operations with automation and centralised monitoring." },
  { label: "Strengthen Governance", desc: "Build a security programme aligned with standards, policies, and compliance requirements." },
];

export default async function SecuritySolutionsPage() {
  const c = await getPageContent("security-solutions");
  return (
    <>
      <Hero
        title="Security Solutions"
        headline={field(c, "hero_headline", "Visibility. Protection. Control.")}
        copy={field(c, "hero_copy", "NAT Technologies delivers comprehensive security services across networks, cloud platforms, identity systems, IoT devices, access control, and surveillance systems.")}
        primaryCta={{ label: "Strengthen Your Security Posture", href: "/contact" }}
        breadcrumb={[{ label: "Our Services", href: "/services" }, { label: "Security Solutions", href: "/services/security-solutions" }]}
      />

      {/* Challenge */}
      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-r-xl p-8" style={{ borderLeft: "4px solid #1e3a5f", background: "rgba(30,58,95,0.05)" }}>
            <p className="font-semibold text-ink text-lg leading-relaxed mb-4">
              {field(c, "challenge_title", "Do you know who is accessing your systems right now?")}
            </p>
            <p className="font-sans text-ink-soft leading-relaxed">
              {field(c, "challenge_text", "Which devices are connected to your network? What is running in your cloud? Who has access to your operational technology? Without complete visibility, you cannot effectively protect, detect, or respond. NAT Technologies helps you see everything — and secure it.")}
            </p>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">Our Security Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={step.label} className="glass-card rounded-xl p-6 relative">
                <span className="absolute top-4 right-4 font-sans text-4xl font-black" style={{ color: "rgba(30,58,95,0.08)" }}>{i + 1}</span>
                <h3 className="font-semibold text-ink mb-2 relative z-10">{step.label}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise — dark navy contrast */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-px mx-auto mb-6" style={{ background: "#b08d57" }} />
            <h2 className="text-3xl font-semibold text-ivory mb-4 tracking-tight">Our Security Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((e) => (
              <div key={e.title} className="rounded-xl p-7" style={{ background: "rgba(247,244,236,0.04)", border: "1px solid rgba(247,244,236,0.1)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(176,141,87,0.15)", border: "1px solid rgba(176,141,87,0.25)" }}>
                  <svg className="w-5 h-5" style={{ color: "#b08d57" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-ivory text-lg mb-2">{e.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(247,244,236,0.6)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">Business Outcomes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o) => (
              <div key={o.label} className="text-center glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(30,58,95,0.07)", border: "1px solid rgba(30,58,95,0.12)" }}>
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-ink mb-2">{o.label}</h3>
                <p className="font-sans text-ink-muted text-sm">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Strengthen Your Security Posture")}
        subtext={field(c, "cta_subtext", "Let our security specialists assess your environment and design a protection strategy tailored to your needs.")}
        primaryCta={{ label: "Strengthen Your Security Posture", href: "/contact" }}
      />
    </>
  );
}
