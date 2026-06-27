import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

const services = [
  {
    title: "IT & IP Infrastructure",
    href: "/services/it-infrastructure",
    description: "Enterprise-grade connectivity, cloud solutions, network architecture, structured cabling, and managed services that power your digital operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    title: "Low Voltage & PoE",
    href: "/services/low-voltage-poe",
    description: "Power over Ethernet solutions that deliver both power and data through a single cable — reducing complexity and simplifying deployment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Security Solutions",
    href: "/services/security-solutions",
    description: "Comprehensive visibility, protection, and control across networks, cloud platforms, IoT devices, access control, and surveillance systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Smart Home Automation",
    href: "/services/smart-home",
    description: "Intelligent home automation covering lighting, climate, security, shading, sensors, and voice-controlled scenes for modern living.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Fuel Management Systems",
    href: "/services/fuel-management",
    description: "Intelligent fuel control with real-time monitoring, RFID authentication, inventory management, and automated reporting for fleets and facilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const reasons = [
  { label: "Technical Expertise", desc: "Deep domain knowledge across infrastructure, security, automation, and fuel management." },
  { label: "Integrated Delivery", desc: "A single partner managing all your technology needs from consultation to ongoing support." },
  { label: "Security-First Design", desc: "Every solution is designed with security, reliability, and resilience at its core." },
  { label: "Scalability", desc: "Solutions that grow with your organisation — from single sites to multi-location deployments." },
  { label: "Ongoing Support", desc: "Continuous monitoring, maintenance, and support to keep your systems performing at their best." },
  { label: "Proven Track Record", desc: "Trusted by businesses, homes, and communities across multiple sectors and geographies." },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "5", label: "Service Domains" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 20%, rgba(99,102,241,0.18) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(6,182,212,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent-light text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
              Israel&apos;s Leading Technology Solutions Provider
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
              <span className="text-white">Smarter, Safer</span>
              <br />
              <span className="gradient-text">Technology</span>
              <br />
              <span className="text-white">Environments</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              From advanced IT infrastructure to smart home automation, security systems, and fuel management — we help businesses operate at their best.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                Explore Services
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white/15 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold rounded-xl transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl lg:max-w-none">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #070d1a 0%, #0b1526 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent-light text-xs font-semibold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Five Integrated Service Areas
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Each designed to work together as a seamless, connected technology ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
            <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(59,130,246,0.08) 100%)" }}>
              <p className="text-slate-400 text-sm mb-2">Not sure where to start?</p>
              <p className="text-white font-semibold mb-5">Let&apos;s find the right solution together.</p>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors text-sm shadow-lg shadow-accent/20"
              >
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-light text-xs font-semibold uppercase tracking-widest mb-3">Why NAT</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                The partner you can count on — every time
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                We combine deep technical expertise with a client-first approach to deliver solutions that genuinely make a difference — on time, on budget, and built to last.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent-light hover:text-white font-semibold text-sm transition-colors"
              >
                Learn About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.label} className="glass-card rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{r.label}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Transform Your Technology Environment?"
        subtext="Speak to our team today and discover how NAT Technologies can help you operate smarter, safer, and more efficiently."
        primaryCta={{ label: "Speak to Our Team", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
