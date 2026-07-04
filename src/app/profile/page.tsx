import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Company Profile | NAT Technologies",
  description: "NAT Technologies company profile — capabilities, credentials, experience, and project strengths across integrated technology solutions.",
};

const capabilities = [
  { title: "IT Infrastructure", desc: "Enterprise network design, structured cabling, cloud migration, and server environments." },
  { title: "Low Voltage & PoE", desc: "Power over Ethernet infrastructure, PoE switch deployment, and connected building systems." },
  { title: "Security Systems", desc: "CCTV, access control, cybersecurity, identity management, and network monitoring." },
  { title: "Smart Home & Building", desc: "Residential and commercial automation covering lighting, HVAC, shading, and integrated control." },
  { title: "Fuel Management", desc: "Intelligent fuel dispensing, RFID authentication, tank monitoring, and fleet reporting." },
  { title: "Installation & Support", desc: "Professional installation by qualified engineers with ongoing maintenance and support services." },
];

const strengths = [
  { label: "Planning & Design", desc: "We approach every project with thorough planning — ensuring the right solution is designed before a single cable is run." },
  { label: "Professional Deployment", desc: "Our installation teams work to the highest standards, with minimal disruption to your operations." },
  { label: "System Integration", desc: "We specialise in connecting different technology systems so they work as a single, unified environment." },
  { label: "Ongoing Maintenance", desc: "Structured maintenance programmes that keep your systems performing reliably over the long term." },
  { label: "Responsive Support", desc: "A support team that understands your environment and responds quickly when you need help." },
];

export default function ProfilePage() {
  return (
    <>
      <Hero
        title="Company Profile"
        headline="NAT Technologies"
        copy="A trusted technology solutions provider with deep expertise across infrastructure, security, automation, and operational systems."
      />

      {/* Overview */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-ink mb-6 tracking-tight">About Our Capabilities</h2>
              <p className="font-sans text-ink-soft leading-relaxed mb-4">
                NAT Technologies is an integrated technology solutions provider with expertise
                spanning IT and IP infrastructure, low-voltage systems, physical and cyber security,
                smart home automation, and fuel management systems.
              </p>
              <p className="font-sans text-ink-soft leading-relaxed mb-4">
                We work with businesses, homes, and communities to deliver technology environments
                that are reliable, secure, scalable, and future-ready. Our integrated approach means
                clients benefit from a single trusted partner who manages every layer of their
                technology stack.
              </p>
              <p className="font-sans text-ink-soft leading-relaxed">
                From initial consultation and system design through to installation, configuration,
                and ongoing support — NAT Technologies is with you at every stage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "5+", label: "Technology Domains" },
                { stat: "100%", label: "Commitment to Quality" },
                { stat: "End-to-End", label: "Delivery Model" },
                { stat: "24/7", label: "Support Available" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-6 text-center">
                  <p className="font-sans text-3xl font-bold text-accent mb-1">{item.stat}</p>
                  <p className="font-sans text-ink-muted text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">Our Capability Areas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(30,58,95,0.07)", border: "1px solid rgba(30,58,95,0.12)" }}>
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-ink mb-2">{c.title}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Strengths — dark navy contrast */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-px mx-auto mb-6" style={{ background: "#b08d57" }} />
            <h2 className="text-3xl font-semibold text-ivory mb-4 tracking-tight">Project Strengths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((s) => (
              <div key={s.label} className="rounded-xl p-7" style={{ background: "rgba(247,244,236,0.04)", border: "1px solid rgba(247,244,236,0.1)" }}>
                <h3 className="font-semibold text-ivory mb-2">{s.label}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(247,244,236,0.6)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Links */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-ink mb-1">Client Account Access</h3>
              <p className="font-sans text-ink-muted text-sm">Access your enquiry history, saved details, and account information.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/login"
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-ivory font-semibold rounded-xl font-sans text-sm transition-all hover:-translate-y-0.5"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 border border-line-deep hover:border-accent text-ink-soft hover:text-ink font-semibold rounded-xl font-sans text-sm transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Work With NAT Technologies?"
        primaryCta={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
