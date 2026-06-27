import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Smart Home Automation | NAT Technologies",
  description: "Intelligent smart home automation solutions — lighting, climate, security, shading, voice control, and integrated smart living.",
};

const process = [
  { label: "Consultation", desc: "Understanding your lifestyle, preferences, and home environment." },
  { label: "System Design", desc: "Designing an automation architecture matched to your home and goals." },
  { label: "Product Selection", desc: "Selecting compatible, high-quality devices for each system area." },
  { label: "Installation", desc: "Professional installation by our qualified smart home engineers." },
  { label: "Configuration", desc: "Programming scenes, schedules, automations, and integrations." },
  { label: "Testing", desc: "Full testing and refinement before handover to ensure everything works perfectly." },
  { label: "Support", desc: "Ongoing support and maintenance to keep your system performing at its best." },
];

const products = [
  "Smart Modules", "Decorative Frames", "Smart Switches", "Blinds & Shutter Control",
  "Central Units", "HVAC Devices", "Sensors", "Voice Assistants", "Third-Party Interfaces", "Additional Accessories",
];

const advantages = [
  { title: "Comfort", desc: "Create the perfect environment at the touch of a button or automatically through intelligent scenes." },
  { title: "Secure Access", desc: "Smart locks, cameras, and access control integrated into your home automation system." },
  { title: "Automation Scenes", desc: "Trigger complex sequences of actions — lighting, climate, blinds, and music — with a single command." },
  { title: "Energy Management", desc: "Monitor and optimise energy usage across lighting, HVAC, and connected devices." },
  { title: "Remote Control", desc: "Control and monitor your home from anywhere in the world through a mobile app." },
  { title: "Scalability", desc: "Start with one room and expand your system over time as your needs evolve." },
];

export default function SmartHomePage() {
  return (
    <>
      <Hero
        title="Smart Home Automation"
        headline="Smart Living, Reimagined."
        copy="NAT Technologies designs and delivers intelligent home automation solutions that improve comfort, security, convenience, and energy efficiency — tailored to the way you live."
        primaryCta={{ label: "Plan Your Smart Home", href: "/contact" }}
        breadcrumb={[{ label: "Our Services", href: "/services" }, { label: "Smart Home Automation", href: "/services/smart-home" }]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                Intelligent Automation
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Your Home. Your Control.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Imagine arriving home to perfect lighting, the ideal temperature, and your favourite
                music playing — all triggered automatically. Smart home automation makes this
                possible through intelligent, connected systems that learn your preferences and
                respond to your routine.
              </p>
              <p className="text-slate-600 leading-relaxed">
                NAT Technologies provides end-to-end smart home solutions — from initial consultation
                and system design to professional installation, configuration, and ongoing support.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Lighting Control", "Climate & HVAC", "Smart Security", "Voice & App Control"].map((item) => (
                <div key={item} className="bg-gradient-to-br from-teal-900 to-navy rounded-xl p-6 text-center">
                  <span className="text-white text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Smart Home Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={step.label} className="relative bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <span className="absolute -top-3 left-5 w-7 h-7 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-slate-900 mt-2 mb-2">{step.label}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Product Categories</h2>
            <p className="text-slate-400">Professional-grade smart home products across every system area.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((p) => (
              <div key={p} className="bg-charcoal border border-slate-700 rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-300 text-xs font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Advantages of Smart Automation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{a.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Plan Your Smart Home Today"
        subtext="Our smart home specialists will design a system tailored to your home and lifestyle."
        primaryCta={{ label: "Plan Your Smart Home", href: "/contact" }}
      />
    </>
  );
}
