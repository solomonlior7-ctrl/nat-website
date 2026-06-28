import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import CTASection from "@/components/CTASection";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "5", label: "Service Domains" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
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
      <ParticleBackground />

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Ambient orbs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%", right: "-8%",
            width: "700px", height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29,78,216,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-5%", left: "-5%",
            width: "550px", height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10"
            style={{
              background: "rgba(29,78,216,0.1)",
              border: "1px solid rgba(29,78,216,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-glow" />
            <span className="text-accent-light text-xs font-bold uppercase tracking-[0.15em]">
              Israel&apos;s Leading Technology Solutions Provider
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[82px] font-extrabold leading-[1.04] tracking-tight mb-8 max-w-4xl">
            <span className="text-white">Smarter, Safer</span>
            <br />
            <span className="gradient-text">Technology</span>
            <br />
            <span className="text-white">Environments</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed mb-12 max-w-xl font-medium">
            From advanced IT infrastructure to smart home automation, security
            systems, and fuel management — we help businesses operate at their best.
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)",
                boxShadow: "0 0 40px rgba(29,78,216,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              Explore Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-slate-300 hover:text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl lg:max-w-none">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
                <div className="text-3xl lg:text-4xl font-extrabold gradient-text mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES — BENTO GRID ──────────────────────
          Desktop (3 cols):
          [IT & IP — 2 cols        ][Security — 1 col tall x2]
          [Low Voltage][Smart Home  ][Security — cont.        ]
          [Fuel Management — 2 cols][CTA — 1 col             ]
      ─────────────────────────────────────────────── */}
      <section
        className="py-28 lg:py-36 relative"
        style={{ background: "linear-gradient(180deg, #0b0f19 0%, #0f1624 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Five Integrated Service Areas
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">
              Each designed to work together as a seamless, connected technology ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

            {/* Card 1: IT & IP Infrastructure — 2 cols wide */}
            <Link
              href="/services/it-infrastructure"
              className="md:col-span-2 glass-card gradient-border bento-card rounded-2xl p-8 group flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-[0.08] group-hover:opacity-[0.16] transition-opacity pointer-events-none"
                style={{ background: "#1d4ed8", transform: "translate(25%,-25%)" }} />
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(29,78,216,0.12)", border: "1px solid rgba(29,78,216,0.25)" }}>
                  <svg className="w-7 h-7 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">IT & IP Infrastructure</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Enterprise-grade connectivity, cloud solutions, network architecture, structured cabling, and managed services that power your digital operations.
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent-light text-sm font-bold mt-6 group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Card 2: Security Solutions — tall (2 rows) */}
            <Link
              href="/services/security-solutions"
              className="md:row-span-2 glass-card gradient-border bento-card rounded-2xl p-8 group flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl opacity-[0.08] group-hover:opacity-[0.16] transition-opacity pointer-events-none"
                style={{ background: "#22c55e", transform: "translate(-25%,25%)" }} />
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.22)" }}>
                  <svg className="w-7 h-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Security Solutions</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Comprehensive visibility, protection, and control across networks, cloud platforms, IoT devices, access control, and surveillance systems.
                </p>
                <ul className="space-y-3">
                  {["Network Security", "Access Control", "CCTV Surveillance", "IoT Protection", "Threat Monitoring"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 text-green text-sm font-bold mt-6 group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Card 3: Low Voltage & PoE */}
            <Link
              href="/services/low-voltage-poe"
              className="glass-card gradient-border bento-card rounded-2xl p-8 group flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-[0.07] group-hover:opacity-[0.14] transition-opacity pointer-events-none"
                style={{ background: "#1d4ed8", transform: "translate(30%,-30%)" }} />
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(29,78,216,0.12)", border: "1px solid rgba(29,78,216,0.25)" }}>
                  <svg className="w-7 h-7 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Low Voltage & PoE</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Power over Ethernet solutions that deliver both power and data through a single cable — reducing complexity and simplifying deployment.
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent-light text-sm font-bold mt-6 group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Card 4: Smart Home Automation */}
            <Link
              href="/services/smart-home"
              className="glass-card gradient-border bento-card rounded-2xl p-8 group flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-[0.07] group-hover:opacity-[0.14] transition-opacity pointer-events-none"
                style={{ background: "#22c55e", transform: "translate(25%,25%)" }} />
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.22)" }}>
                  <svg className="w-7 h-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Smart Home Automation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Intelligent home automation covering lighting, climate, security, shading, sensors, and voice-controlled scenes for modern living.
                </p>
              </div>
              <div className="flex items-center gap-2 text-green text-sm font-bold mt-6 group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Card 5: Fuel Management — 2 cols wide */}
            <Link
              href="/services/fuel-management"
              className="md:col-span-2 glass-card gradient-border bento-card rounded-2xl p-8 group flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-[0.07] group-hover:opacity-[0.14] transition-opacity pointer-events-none"
                style={{ background: "#1d4ed8", transform: "translate(-25%,-25%)" }} />
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(29,78,216,0.12)", border: "1px solid rgba(29,78,216,0.25)" }}>
                  <svg className="w-7 h-7 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Fuel Management Systems</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Intelligent fuel control with real-time monitoring, RFID authentication, inventory management, and automated reporting for fleets and facilities.
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent-light text-sm font-bold mt-6 group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* CTA Card */}
            <div
              className="rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[220px] relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(29,78,216,0.18) 0%, rgba(34,197,94,0.12) 100%)",
                border: "1px solid rgba(29,78,216,0.28)",
              }}
            >
              <div className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />
              <p className="text-slate-400 text-sm mb-2 relative z-10">Not sure where to start?</p>
              <p className="text-white font-bold mb-6 relative z-10 leading-snug">
                Let&apos;s find the right solution together.
              </p>
              <Link
                href="/contact"
                className="px-6 py-3 text-white text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 relative z-10"
                style={{
                  background: "linear-gradient(135deg, #1d4ed8, #22c55e)",
                  boxShadow: "0 8px 24px rgba(29,78,216,0.3)",
                }}
              >
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────────────── */}
      <section className="py-28 lg:py-36" style={{ background: "#0f1624" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-4">Why NAT</p>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                The partner you can count on — every time
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8 font-medium max-w-sm">
                We combine deep technical expertise with a client-first approach to deliver solutions that genuinely make a difference — on time, on budget, and built to last.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent-light hover:text-white font-bold text-sm transition-colors group"
              >
                Learn About Us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.label} className="glass-card rounded-xl p-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
                    <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{r.label}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <CTASection
        headline="Ready to Transform Your Technology Environment?"
        subtext="Speak to our team today and discover how NAT Technologies can help you operate smarter, safer, and more efficiently."
        primaryCta={{ label: "Speak to Our Team", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
