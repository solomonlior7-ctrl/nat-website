import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "IT & IP Infrastructure | NAT Technologies",
  description: "Enterprise-grade IT and IP infrastructure solutions — cloud, structured cabling, network architecture, managed services, and security resilience.",
};

const deliverables = [
  { title: "Enterprise Connectivity", desc: "High-performance networks designed for reliability, speed, and scalability across your organisation." },
  { title: "Integrated Security", desc: "Security embedded into every layer of infrastructure — from endpoints to the cloud." },
  { title: "Automation Ready", desc: "Infrastructure designed to support automation, IoT, and intelligent building systems." },
  { title: "Endpoint Management", desc: "Device management, monitoring, and protection across all connected endpoints." },
  { title: "24/7 Monitoring", desc: "Continuous infrastructure monitoring with rapid response to performance and security events." },
  { title: "Technical Support", desc: "Responsive, knowledgeable support from engineers who understand your environment." },
];

const services = [
  {
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud infrastructure design and migration — including hybrid, private, and public cloud environments tailored to your business needs.",
  },
  {
    title: "Infrastructure Services",
    desc: "Structured cabling, server environments, data centre build-out, and core network hardware supply, installation, and configuration.",
  },
  {
    title: "Connectivity Solutions",
    desc: "LAN, WAN, SD-WAN, and fibre connectivity solutions that deliver reliable, high-speed access across sites and remote locations.",
  },
  {
    title: "Managed Services",
    desc: "Ongoing management, monitoring, patching, and optimisation of your IT infrastructure through a flexible managed service model.",
  },
  {
    title: "Security Resilience",
    desc: "Firewall management, intrusion detection, endpoint protection, and network security reviews that keep your environment protected.",
  },
];

export default async function ITInfrastructurePage() {
  const c = await getPageContent("it-infrastructure");
  return (
    <>
      <Hero
        title="IT & IP Infrastructure"
        headline={field(c, "hero_headline", "Building the Foundation for Digital Excellence")}
        copy={field(c, "hero_copy", "NAT Technologies delivers intelligent IT and IP infrastructure solutions that power connectivity, security, automation, and business growth.")}
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        breadcrumb={[{ label: "Our Services", href: "/services" }, { label: "IT & IP Infrastructure", href: "/services/it-infrastructure" }]}
      />

      {/* Value Proposition */}
      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-ink-soft text-lg leading-relaxed">
            {field(c, "value_prop", "From structured cabling and network architecture to cloud migration, managed services, and security resilience — we design and deliver infrastructure that is secure, scalable, and future-ready.")}
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d) => (
              <div key={d.title} className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(30,58,95,0.07)", border: "1px solid rgba(30,58,95,0.12)" }}>
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-ink mb-2">{d.title}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink mb-12 text-center tracking-tight">Our Service Offerings</h2>
          <div className="space-y-10">
            {services.map((s, i) => {
              const imgUrl = field(c, `service_img_${i}`, "");
              return (
                <div
                  key={s.title}
                  className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
                >
                  <div className="flex-1 bg-navy rounded-2xl aspect-video overflow-hidden flex items-center justify-center">
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={s.title}
                        width={640}
                        height={360}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-20 h-20" style={{ color: "rgba(176,141,87,0.25)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-ink mb-4 tracking-tight">{s.title}</h3>
                    <p className="font-sans text-ink-soft leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Looking for High-Performance IT Infrastructure Solutions?")}
        subtext={field(c, "cta_subtext", "Our infrastructure specialists are ready to assess your environment and design a solution that meets your needs.")}
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
      />
    </>
  );
}
