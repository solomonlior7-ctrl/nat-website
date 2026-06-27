import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

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

export default function SecuritySolutionsPage() {
  return (
    <>
      <Hero
        title="Security Solutions"
        headline="Visibility. Protection. Control."
        copy="NAT Technologies delivers comprehensive security services across networks, cloud platforms, identity systems, IoT devices, access control, and surveillance systems."
        primaryCta={{ label: "Strengthen Your Security Posture", href: "/contact" }}
        breadcrumb={[{ label: "Our Services", href: "/services" }, { label: "Security Solutions", href: "/services/security-solutions" }]}
      />

      {/* Challenge */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border-l-4 border-accent rounded-r-xl p-8">
            <p className="text-slate-700 text-lg leading-relaxed font-medium mb-4">
              Do you know who is accessing your systems right now?
            </p>
            <p className="text-slate-600 leading-relaxed">
              Which devices are connected to your network? What is running in your cloud? Who has
              access to your operational technology? Without complete visibility, you cannot
              effectively protect, detect, or respond. NAT Technologies helps you see everything —
              and secure it.
            </p>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Security Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={step.label} className="bg-navy rounded-xl p-6 relative">
                <span className="absolute top-4 right-4 text-accent/30 text-4xl font-black">{i + 1}</span>
                <h3 className="text-white font-semibold mb-2 relative z-10">{step.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Security Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((e) => (
              <div key={e.title} className="bg-charcoal border border-slate-700 rounded-xl p-7">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{e.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Business Outcomes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o) => (
              <div key={o.label} className="text-center bg-slate-50 border border-slate-100 rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{o.label}</h3>
                <p className="text-slate-600 text-sm">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Strengthen Your Security Posture"
        subtext="Let our security specialists assess your environment and design a protection strategy tailored to your needs."
        primaryCta={{ label: "Strengthen Your Security Posture", href: "/contact" }}
      />
    </>
  );
}
