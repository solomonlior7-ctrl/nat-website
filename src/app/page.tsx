import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import CTASection from "@/components/CTASection";
import TechCarousel from "@/components/TechCarousel";
import { getPageContent, field } from "@/lib/get-content";

const reasons = [
  { label: "Technical Expertise", desc: "Deep domain knowledge across infrastructure, security, automation, and fuel management." },
  { label: "Integrated Delivery", desc: "A single partner managing all your technology needs from consultation to ongoing support." },
  { label: "Security-First Design", desc: "Every solution is designed with security, reliability, and resilience at its core." },
  { label: "Scalability", desc: "Solutions that grow with your organisation — from single sites to multi-location deployments." },
  { label: "Ongoing Support", desc: "Continuous monitoring, maintenance, and support to keep your systems performing at their best." },
  { label: "Proven Track Record", desc: "Trusted by businesses, homes, and communities across multiple sectors and geographies." },
];

export default async function HomePage() {
  const c = await getPageContent("home");

  const stats = [
    { value: field(c, "stat1_value", "200+"), label: field(c, "stat1_label", "Projects Delivered") },
    { value: field(c, "stat2_value", "5"),    label: field(c, "stat2_label", "Service Domains") },
    { value: field(c, "stat3_value", "10+"),  label: field(c, "stat3_label", "Years Experience") },
    { value: field(c, "stat4_value", "24/7"), label: field(c, "stat4_label", "Support Available") },
  ];

  return (
    <>
      <ParticleBackground />

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ivory">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "radial-gradient(rgba(15,30,51,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          }}
        />
        {/* Warm left glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%", left: "-5%",
            width: "600px", height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,132,244,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 font-sans"
            style={{
              background: "rgba(37,132,244,0.07)",
              border: "1px solid rgba(37,132,244,0.15)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.15em]">
              {field(c, "hero_badge", "Israel's Leading Technology Solutions Provider")}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-semibold leading-[1.06] tracking-tight mb-8 max-w-4xl text-ink">
            <span>{field(c, "hero_line1", "Smarter, Safer")}</span>
            <br />
            <span className="text-accent">{field(c, "hero_gradient", "Technology")}</span>
            <br />
            <span>{field(c, "hero_line3", "Environments")}</span>
          </h1>

          <p className="font-sans text-lg lg:text-xl text-ink-soft leading-relaxed mb-12 max-w-xl">
            {field(c, "hero_subtext", "From advanced IT infrastructure to smart home automation, security systems, and fuel management — we help businesses operate at their best.")}
          </p>

          <div className="flex flex-wrap gap-4 mb-24">
            <Link
              href="/services"
              className="btn-gradient inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-sm font-sans"
            >
              Explore Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-ink font-semibold rounded-2xl text-sm transition-all hover:-translate-y-0.5 border border-line hover:border-accent font-sans"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl lg:max-w-none">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
                <div className="font-sans text-3xl lg:text-4xl font-bold text-accent mb-1">{s.value}</div>
                <div className="font-sans text-ink-muted text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH CAROUSEL ─────────────────────────────── */}
      <TechCarousel />

      {/* ─── SERVICES — BENTO GRID ─────────────────────── */}
      <section className="py-28 lg:py-36 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-ink mb-4 tracking-tight">
              {field(c, "services_title", "Five Integrated Service Areas")}
            </h2>
            <p className="font-sans text-ink-soft max-w-xl mx-auto">
              {field(c, "services_subtitle", "Each designed to work together as a seamless, connected technology ecosystem.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

            {/* Card 1: IT & IP Infrastructure — 2 cols wide */}
            <Link
              href="/services/it-infrastructure"
              className="md:col-span-2 glass-card gradient-border bento-card rounded-2xl p-8 group flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.12)" }}>
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3 tracking-tight">IT & IP Infrastructure</h3>
                <p className="font-sans text-ink-soft text-sm leading-relaxed max-w-md">
                  Enterprise-grade connectivity, cloud solutions, network architecture, structured cabling, and managed services that power your digital operations.
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-bold mt-6 group-hover:gap-3 transition-all font-sans">
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
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.12)" }}>
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3 tracking-tight">Security Solutions</h3>
                <p className="font-sans text-ink-soft text-sm leading-relaxed mb-8">
                  Comprehensive visibility, protection, and control across networks, cloud platforms, IoT devices, access control, and surveillance systems.
                </p>
                <ul className="space-y-3">
                  {["Network Security", "Access Control", "CCTV Surveillance", "IoT Protection", "Threat Monitoring"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-sans text-sm text-ink-soft">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-bold mt-6 group-hover:gap-3 transition-all font-sans">
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
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.12)" }}>
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3 tracking-tight">Low Voltage & PoE</h3>
                <p className="font-sans text-ink-soft text-sm leading-relaxed">
                  Power over Ethernet solutions that deliver both power and data through a single cable — reducing complexity and simplifying deployment.
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-bold mt-6 group-hover:gap-3 transition-all font-sans">
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
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.12)" }}>
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3 tracking-tight">Smart Home Automation</h3>
                <p className="font-sans text-ink-soft text-sm leading-relaxed">
                  Intelligent home automation covering lighting, climate, security, shading, sensors, and voice-controlled scenes for modern living.
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-bold mt-6 group-hover:gap-3 transition-all font-sans">
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
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.12)" }}>
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3 tracking-tight">Fuel Management Systems</h3>
                <p className="font-sans text-ink-soft text-sm leading-relaxed max-w-md">
                  Intelligent fuel control with real-time monitoring, RFID authentication, inventory management, and automated reporting for fleets and facilities.
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-bold mt-6 group-hover:gap-3 transition-all font-sans">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* CTA Card */}
            <div
              className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[220px] relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(37,132,244,0.06) 0%, rgba(0,196,224,0.04) 100%)",
              }}
            >
              <p className="font-sans text-sm mb-2 text-ink-muted">Not sure where to start?</p>
              <p className="font-semibold mb-6 leading-snug text-ink">
                Let&apos;s find the right solution together.
              </p>
              <Link
                href="/contact"
                className="btn-gradient px-6 py-3 text-white text-sm font-bold font-sans"
              >
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-4">Why NAT</p>
              <h2 className="text-3xl lg:text-5xl font-semibold text-ink mb-6 leading-tight tracking-tight">
                {field(c, "why_title", "The partner you can count on — every time")}
              </h2>
              <p className="font-sans text-ink-soft leading-relaxed mb-8 max-w-sm">
                {field(c, "why_subtitle", "We combine deep technical expertise with a client-first approach to deliver solutions that genuinely make a difference — on time, on budget, and built to last.")}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-bold text-sm transition-colors group font-sans"
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
                    style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.12)" }}>
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-sans text-sm font-bold text-ink mb-1.5">{r.label}</h3>
                  <p className="font-sans text-ink-muted text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────── */}
      <CTASection
        headline={field(c, "cta_headline", "Ready to Transform Your Technology Environment?")}
        subtext={field(c, "cta_subtext", "Speak to our team today and discover how NAT Technologies can help you operate smarter, safer, and more efficiently.")}
        primaryCta={{ label: "Speak to Our Team", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
