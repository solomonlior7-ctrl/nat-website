import type { Metadata } from "next";
import Link from "next/link";
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
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Company Profile</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">NAT Technologies</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            A trusted technology solutions provider with deep expertise across infrastructure,
            security, automation, and operational systems.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About Our Capabilities</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                NAT Technologies is an integrated technology solutions provider with expertise
                spanning IT and IP infrastructure, low-voltage systems, physical and cyber security,
                smart home automation, and fuel management systems.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We work with businesses, homes, and communities to deliver technology environments
                that are reliable, secure, scalable, and future-ready. Our integrated approach means
                clients benefit from a single trusted partner who manages every layer of their
                technology stack.
              </p>
              <p className="text-slate-600 leading-relaxed">
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
                <div key={item.label} className="bg-gradient-to-br from-navy to-charcoal rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-accent mb-1">{item.stat}</p>
                  <p className="text-slate-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Capability Areas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Strengths */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Project Strengths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((s) => (
              <div key={s.label} className="bg-charcoal border border-slate-700 rounded-xl p-7">
                <h3 className="text-white font-semibold mb-2">{s.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Client Account Access</h3>
              <p className="text-slate-600 text-sm">Access your enquiry history, saved details, and account information.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/login"
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 border border-slate-300 hover:border-accent text-slate-700 hover:text-slate-900 font-semibold rounded-lg text-sm transition-colors"
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
