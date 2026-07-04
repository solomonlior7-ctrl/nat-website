import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Meet Our Team | NAT Technologies",
  description: "Meet the team behind NAT Technologies — technical experts in IT infrastructure, security systems, smart home automation, and fuel management solutions.",
};

const team = [
  {
    initials: "NA",
    role: "Founder & CEO",
    desc: "Leads NAT Technologies with a vision for integrated technology delivery. Brings deep experience across IT infrastructure, security systems, and operational technology deployments.",
    expertise: ["Business Strategy", "IT Infrastructure", "Solution Architecture"],
    color: "#1d4ed8",
  },
  {
    initials: "TO",
    role: "Technical Operations Lead",
    desc: "Oversees all technical delivery, project coordination, and quality assurance across NAT's service areas. Ensures every project meets the highest standards of performance and reliability.",
    expertise: ["Project Management", "Technical Delivery", "Quality Assurance"],
    color: "#22c55e",
  },
  {
    initials: "IS",
    role: "Infrastructure Specialist",
    desc: "Designs and deploys enterprise IT and IP infrastructure — from structured cabling and network architecture to cloud solutions, managed services, and PoE systems.",
    expertise: ["Network Design", "Cloud Architecture", "Structured Cabling"],
    color: "#3b82f6",
  },
  {
    initials: "SS",
    role: "Security Systems Specialist",
    desc: "Delivers comprehensive security solutions including CCTV, access control, network security, and intrusion detection. Specialises in multi-layer security architecture for complex environments.",
    expertise: ["CCTV & Surveillance", "Access Control", "Network Security"],
    color: "#8b5cf6",
  },
  {
    initials: "AS",
    role: "Automation Specialist",
    desc: "Designs and programs intelligent smart home and building automation systems — covering lighting, climate, security, shading, and integrated IoT environments.",
    expertise: ["Smart Home Automation", "IoT Integration", "Building Control"],
    color: "#06b6d4",
  },
  {
    initials: "SM",
    role: "Support & Maintenance Coordinator",
    desc: "Manages ongoing client support, maintenance schedules, and system monitoring — ensuring all deployed systems continue to perform at their best throughout their lifecycle.",
    expertise: ["Client Support", "System Monitoring", "Preventive Maintenance"],
    color: "#f97316",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Understand the Client Environment",
    desc: "We start by listening. Our team conducts a thorough assessment of your environment, infrastructure, challenges, and goals — before recommending any solution.",
    color: "#1d4ed8",
  },
  {
    step: "02",
    title: "Design the Right Solution",
    desc: "Our specialists design a tailored solution architecture — selecting the right technologies, vendors, and approaches to meet your specific requirements, timeline, and budget.",
    color: "#3b82f6",
  },
  {
    step: "03",
    title: "Deliver and Integrate",
    desc: "Our engineers install, configure, and integrate every component with precision — ensuring systems work together seamlessly from day one.",
    color: "#22c55e",
  },
  {
    step: "04",
    title: "Support, Monitor, and Improve",
    desc: "We remain your technology partner after deployment — providing ongoing monitoring, proactive maintenance, responsive support, and continuous optimisation.",
    color: "#4ade80",
  },
];

export default async function TeamPage() {
  const c = await getPageContent("team");

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#0b0f19" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(29,78,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute pointer-events-none" style={{ top: "-10%", right: "-5%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-5%", left: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)", filter: "blur(70px)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-4">Our People</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight max-w-3xl">
            {field(c, "hero_headline", "Meet the people behind NAT Technologies")}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
            {field(c, "hero_copy", "Our team combines deep technical expertise with a client-first mindset. Every project — from design to delivery to ongoing support — is handled by specialists who take ownership of outcomes, not just tasks.")}
          </p>
        </div>
      </section>

      {/* Values strip */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-6 lg:gap-12">
            {["Technical Excellence", "Client-First Approach", "Accountable Delivery", "Continuous Support"].map((v) => (
              <div key={v} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green" />
                <span className="text-slate-300 text-sm font-semibold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team grid */}
      <section className="py-24 lg:py-32" style={{ background: "#0b0f19" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-3">The Team</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {field(c, "team_section_title", "Specialists Across Every Domain")}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">
              {field(c, "team_section_subtitle", "Each team member brings focused expertise to their technology domain — ensuring every client project receives specialist-level attention.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.role}
                className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1 group"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Photo placeholder */}
                <div
                  className="h-52 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${member.color}20, ${member.color}08)` }}
                >
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center font-black text-3xl relative z-10"
                    style={{ background: `${member.color}25`, color: member.color, border: `2px solid ${member.color}40` }}
                  >
                    {member.initials}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "linear-gradient(transparent, rgba(255,255,255,0.025))" }} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-1">
                    <p className="text-white font-bold text-lg tracking-tight">Team Member</p>
                    <p className="text-xs font-bold uppercase tracking-wider mt-0.5" style={{ color: member.color }}>
                      {member.role}
                    </p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-4">{member.desc}</p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((e) => (
                      <span
                        key={e}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg"
                        style={{ background: `${member.color}15`, color: member.color, border: `1px solid ${member.color}25` }}
                      >
                        {e}
                      </span>
                    ))}
                  </div>

                  {/* LinkedIn placeholder */}
                  <div className="mt-5 pt-4 flex items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors"
                      aria-label="LinkedIn profile (to be added)"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn (to be added)
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 lg:py-32" style={{ background: "#0f1624" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green text-xs font-bold uppercase tracking-[0.18em] mb-3">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {field(c, "how_we_work_title", "How We Work")}
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto font-medium">
              {field(c, "how_we_work_subtitle", "A structured, client-focused process that delivers the right technology solution — every time.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {howWeWork.map((s, i) => (
              <div key={s.step} className="relative rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {i < howWeWork.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <div className="text-5xl font-black mb-4 opacity-20 tracking-tighter" style={{ color: s.color }}>
                  {s.step}
                </div>
                <h3 className="text-white font-bold mb-3 leading-snug">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Work With a Team That Takes Ownership")}
        subtext={field(c, "cta_subtext", "Our engineers don't just install technology — they design solutions, manage delivery, and support your systems for the long term.")}
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />
    </>
  );
}
