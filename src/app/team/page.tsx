import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Meet Our Team | NAT Technologies",
  description: "Meet the team behind NAT Technologies — technical experts in IT infrastructure, security systems, smart home automation, and fuel management solutions.",
};

const memberAccents = ["#1e3a5f", "#b08d57", "#1e3a5f", "#b08d57", "#1e3a5f", "#1e3a5f"];

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default async function TeamPage() {
  const c = await getPageContent("team");

  const members = [1, 2, 3, 4, 5, 6].map((n, i) => ({
    photo: field(c, `member${n}_photo`, ""),
    name: field(c, `member${n}_name`, "Team Member"),
    role: field(c, `member${n}_role`, ["Founder & CEO", "Technical Operations Lead", "Infrastructure Specialist", "Security Systems Specialist", "Automation Specialist", "Support & Maintenance Coordinator"][i]),
    desc: field(c, `member${n}_desc`, [
      "Leads NAT Technologies with a vision for integrated technology delivery. Brings deep experience across IT infrastructure, security systems, and operational technology deployments.",
      "Oversees all technical delivery, project coordination, and quality assurance across NAT's service areas. Ensures every project meets the highest standards of performance and reliability.",
      "Designs and deploys enterprise IT and IP infrastructure — from structured cabling and network architecture to cloud solutions, managed services, and PoE systems.",
      "Delivers comprehensive security solutions including CCTV, access control, network security, and intrusion detection. Specialises in multi-layer security architecture for complex environments.",
      "Designs and programs intelligent smart home and building automation systems — covering lighting, climate, security, shading, and integrated IoT environments.",
      "Manages ongoing client support, maintenance schedules, and system monitoring — ensuring all deployed systems continue to perform at their best throughout their lifecycle.",
    ][i]),
    expertise: field(c, `member${n}_expertise`, [
      "Business Strategy, IT Infrastructure, Solution Architecture",
      "Project Management, Technical Delivery, Quality Assurance",
      "Network Design, Cloud Architecture, Structured Cabling",
      "CCTV & Surveillance, Access Control, Network Security",
      "Smart Home Automation, IoT Integration, Building Control",
      "Client Support, System Monitoring, Preventive Maintenance",
    ][i]).split(",").map((s: string) => s.trim()).filter(Boolean),
    accent: memberAccents[i],
  }));

  const steps = [1, 2, 3, 4].map((n, i) => ({
    step: `0${n}`,
    title: field(c, `step${n}_title`, ["Understand the Client Environment", "Design the Right Solution", "Deliver and Integrate", "Support, Monitor, and Improve"][i]),
    desc: field(c, `step${n}_desc`, [
      "We start by listening. Our team conducts a thorough assessment of your environment, infrastructure, challenges, and goals — before recommending any solution.",
      "Our specialists design a tailored solution architecture — selecting the right technologies, vendors, and approaches to meet your specific requirements, timeline, and budget.",
      "Our engineers install, configure, and integrate every component with precision — ensuring systems work together seamlessly from day one.",
      "We remain your technology partner after deployment — providing ongoing monitoring, proactive maintenance, responsive support, and continuous optimisation.",
    ][i]),
  }));

  return (
    <>
      <Hero
        title="Our People"
        headline={field(c, "hero_headline", "Meet the people behind NAT Technologies")}
        copy={field(c, "hero_copy", "Our team combines deep technical expertise with a client-first mindset. Every project — from design to delivery to ongoing support — is handled by specialists who take ownership of outcomes, not just tasks.")}
      />

      {/* Values strip */}
      <div className="bg-ivory-deep" style={{ borderTop: "1px solid #e0d8c7", borderBottom: "1px solid #e0d8c7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap gap-6 lg:gap-12">
            {["Technical Excellence", "Client-First Approach", "Accountable Delivery", "Continuous Support"].map((v) => (
              <div key={v} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-sans text-ink-soft text-sm font-semibold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team grid */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">The Team</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-ink mb-4 tracking-tight">
              {field(c, "team_section_title", "Specialists Across Every Domain")}
            </h2>
            <p className="font-sans text-ink-soft max-w-xl mx-auto">
              {field(c, "team_section_subtitle", "Each team member brings focused expertise to their technology domain — ensuring every client project receives specialist-level attention.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div key={member.role} className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-200">
                {/* Photo / placeholder */}
                <div
                  className="h-52 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${member.accent}10, ${member.accent}05)`, borderBottom: "1px solid #e0d8c7" }}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-30"
                        style={{ backgroundImage: "radial-gradient(rgba(15,30,51,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-3xl relative z-10 font-sans"
                        style={{ background: `${member.accent}12`, color: member.accent, border: `2px solid ${member.accent}30` }}
                      >
                        {initials(member.name)}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <p className="font-semibold text-lg tracking-tight text-ink">{member.name}</p>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider mt-0.5" style={{ color: member.accent }}>
                      {member.role}
                    </p>
                  </div>
                  <p className="font-sans text-ink-muted text-sm leading-relaxed mb-4">{member.desc}</p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((e) => (
                      <span
                        key={e}
                        className="font-sans text-xs font-medium px-2.5 py-1 rounded-lg bg-ivory-deep text-ink-soft"
                        style={{ border: "1px solid #e0d8c7" }}
                      >
                        {e}
                      </span>
                    ))}
                  </div>

                  {/* LinkedIn */}
                  <div className="mt-5 pt-4 flex items-center gap-3" style={{ borderTop: "1px solid #e0d8c7" }}>
                    <a
                      href="#"
                      className="flex items-center gap-2 font-sans text-xs font-semibold text-ink-muted hover:text-ink-soft transition-colors"
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
      <section className="py-24 lg:py-32 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-ink mb-4 tracking-tight">
              {field(c, "how_we_work_title", "How We Work")}
            </h2>
            <p className="font-sans text-ink-soft max-w-lg mx-auto">
              {field(c, "how_we_work_subtitle", "A structured, client-focused process that delivers the right technology solution — every time.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={s.step} className="relative glass-card rounded-2xl p-7">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <svg className="w-6 h-6 text-line-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <div className="font-sans text-5xl font-black mb-4 tracking-tighter" style={{ color: "rgba(30,58,95,0.12)" }}>
                  {s.step}
                </div>
                <h3 className="font-semibold text-ink mb-3 leading-snug">{s.title}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed">{s.desc}</p>
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
