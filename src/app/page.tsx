import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

const services = [
  {
    title: "IT & IP Infrastructure",
    href: "/services/it-infrastructure",
    description:
      "Enterprise-grade connectivity, cloud solutions, network architecture, structured cabling, and managed services that power your digital operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    title: "Low Voltage & PoE",
    href: "/services/low-voltage-poe",
    description:
      "Power over Ethernet solutions that deliver both power and data through a single cable — reducing complexity and simplifying deployment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Security Solutions",
    href: "/services/security-solutions",
    description:
      "Comprehensive visibility, protection, and control across networks, cloud platforms, IoT devices, access control, and surveillance systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Smart Home Automation",
    href: "/services/smart-home",
    description:
      "Intelligent home automation covering lighting, climate, security, shading, sensors, and voice-controlled scenes for modern living.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Fuel Management Systems",
    href: "/services/fuel-management",
    description:
      "Intelligent fuel control with real-time monitoring, RFID authentication, inventory management, and automated reporting for fleets and facilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const brandPromise = [
  {
    label: "Analyze",
    desc: "We assess each client's environment, identify challenges, and define the right technology approach for their specific needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Automate",
    desc: "We design and implement intelligent systems that streamline operations, reduce manual effort, and improve long-term efficiency.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: "Transform",
    desc: "We deliver reliable, scalable solutions that drive measurable results — transforming how your environment operates and performs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-24 lg:py-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Welcome to NAT Technologies
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Integrated Technology{" "}
              <span className="text-accent">Solutions</span> for Smarter, Safer Environments
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              From advanced IT infrastructure to smart home automation, security systems, low-voltage
              solutions, and fuel management — we help homes, businesses, and communities operate
              smarter, safer, and more efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-accent/20"
              >
                Explore Services
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-slate-600 hover:border-accent text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Analyze. Automate. Transform.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our three-part approach ensures every solution is precisely tailored, intelligently
              implemented, and built for lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPromise.map((item) => (
              <div
                key={item.label}
                className="relative bg-gradient-to-br from-navy to-charcoal rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Integrated Technology Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Five specialised service areas — each designed to work together as a seamless,
              connected technology ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
            <div className="hidden lg:flex bg-gradient-to-br from-navy to-charcoal rounded-2xl p-6 items-center justify-center">
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-4">Ready to get started?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  Speak to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose NAT Technologies
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine technical expertise, integrated delivery, and a security-first approach to
              deliver solutions that genuinely make a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.label} className="flex gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{r.label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Gallery</p>
              <h2 className="text-3xl font-bold text-slate-900">Our Work in Action</h2>
            </div>
            <Link
              href="/gallery"
              className="hidden md:inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
            >
              View All
              <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "IT Infrastructure", color: "from-slate-700 to-slate-900" },
              { label: "Security Systems", color: "from-blue-900 to-slate-900" },
              { label: "Smart Home", color: "from-cyan-800 to-slate-900" },
              { label: "Fuel Management", color: "from-indigo-900 to-slate-900" },
            ].map((item) => (
              <div
                key={item.label}
                className={`relative aspect-square rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden group`}
              >
                <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{item.label}</span>
                </div>
              </div>
            ))}
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
