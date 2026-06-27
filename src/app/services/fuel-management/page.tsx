import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Fuel Management Systems | NAT Technologies",
  description: "Intelligent fuel management systems — real-time monitoring, RFID authentication, fleet visibility, inventory management, and automated reporting.",
};

const advantages = [
  { title: "Enhanced Security", desc: "RFID vehicle and driver authentication ensures only authorised personnel access fuel dispensers." },
  { title: "Real-Time Monitoring", desc: "Live visibility of fuel levels, dispensing activity, and consumption across all sites." },
  { title: "Operational Efficiency", desc: "Automate fuel recording, eliminate manual processes, and reduce administrative overhead." },
  { title: "Cost Control", desc: "Identify wastage, theft, and inefficiency through detailed consumption analytics and reporting." },
  { title: "Fleet Visibility", desc: "Track fuel usage per vehicle, driver, and department with granular reporting and alerts." },
  { title: "Scalability", desc: "Deploy across a single site or multiple locations with centralised management and reporting." },
];

const applications = [
  "Commercial Fleets", "Logistics Companies", "Construction Operations",
  "Agriculture", "Government & Municipal Fleets", "Fuel Storage Facilities", "Industrial Operations",
];

const ecosystemItems = [
  "Dispensing Systems", "RFID Tags", "Driver Authentication", "Tank Monitoring",
  "Inventory Management", "Reporting & Analytics", "Remote Management",
];

const features = [
  "Automated fuel dispensing records for every transaction",
  "RFID-based vehicle and driver authentication",
  "Real-time tank level monitoring and alerts",
  "Automated inventory management and reorder triggers",
  "Detailed consumption reports by vehicle, driver, and site",
  "Remote system monitoring and management",
  "Integration with fleet management and ERP systems",
  "Multi-site centralised control and reporting",
];

export default function FuelManagementPage() {
  return (
    <>
      <Hero
        title="Fuel Management Systems"
        headline="Intelligent Fuel Control. Enhanced Operational Efficiency."
        copy="NAT Technologies helps organisations control, monitor, and optimise fuel operations through intelligent dispensing, vehicle identification, real-time monitoring, and automated reporting."
        primaryCta={{ label: "Request Fuel Consultation", href: "/contact" }}
        breadcrumb={[{ label: "Our Services", href: "/services" }, { label: "Fuel Management Systems", href: "/services/fuel-management" }]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                Smart Fuel Management
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Total Control Over Your Fuel Operations
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Fuel is a significant operational cost for any organisation managing a fleet,
                construction site, agricultural operation, or fuel storage facility. Without
                accurate visibility and control, waste, theft, and inefficiency can go undetected.
              </p>
              <p className="text-slate-600 leading-relaxed">
                NAT Technologies delivers complete fuel management ecosystems — from intelligent
                dispensing systems and RFID authentication to tank monitoring, inventory
                management, and advanced reporting dashboards.
              </p>
            </div>
            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Advantages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Target Applications</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {applications.map((a) => (
              <div key={a} className="bg-charcoal border border-slate-700 rounded-xl p-5 text-center">
                <span className="text-slate-300 text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Integrated Fuel Ecosystem</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Every component of our fuel management system connects and communicates — giving you
              complete control and visibility from one centralised platform.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {ecosystemItems.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-gradient-to-r from-navy to-charcoal border border-slate-700 rounded-full px-5 py-2.5"
              >
                <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-white text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Gain Control of Your Fuel Operations?"
        subtext="Request a consultation with our fuel management specialists."
        primaryCta={{ label: "Request Fuel Consultation", href: "/contact" }}
      />
    </>
  );
}
