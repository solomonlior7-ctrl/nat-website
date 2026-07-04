import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "About Us | NAT Technologies",
  description: "Learn about NAT Technologies — our mission, vision, values, and the philosophy behind the integrated technology solutions we deliver.",
};

const values = [
  { label: "Integrity", desc: "We act with honesty, transparency, and accountability in everything we do." },
  { label: "Innovation", desc: "We embrace new ideas, emerging technologies, and smarter ways to solve problems." },
  { label: "Excellence", desc: "We hold ourselves to the highest standards of quality, delivery, and professional conduct." },
  { label: "Accountability", desc: "We take ownership of outcomes and stand behind the solutions we deliver." },
  { label: "Customer Success", desc: "Our success is defined by the success of the clients and communities we serve." },
];

const steps = [
  { label: "Analyze", desc: "We listen, assess, and understand your environment, challenges, and goals before proposing any solution." },
  { label: "Automate", desc: "We design and implement intelligent systems tailored to your needs — reducing complexity and improving efficiency." },
  { label: "Transform", desc: "We deliver lasting change through reliable, scalable technology that supports long-term performance and growth." },
];

export default async function AboutPage() {
  const c = await getPageContent("about");
  return (
    <>
      <Hero
        title="About NAT Technologies"
        headline={field(c, "hero_headline", "Technology That Works for You — Now and in the Future")}
        copy={field(c, "hero_copy", "We combine technical expertise, innovation, and best-practice delivery to create dependable solutions for businesses, homes, and communities.")}
        primaryCta={{ label: "Explore Our Services", href: "/services" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      {/* Who We Are */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-ink mb-6 tracking-tight">
                {field(c, "whoweare_title", "A Trusted Technology Solutions Provider")}
              </h2>
              <p className="font-sans text-ink-soft leading-relaxed mb-4">
                {field(c, "whoweare_p1", "NAT Technologies is a technology solutions provider specialising in IT and IP infrastructure, low-voltage systems, security solutions, smart home automation, and fuel management systems.")}
              </p>
              <p className="font-sans text-ink-soft leading-relaxed mb-4">
                {field(c, "whoweare_p2", "We combine technical expertise, innovation, and best-practice delivery to create dependable solutions for businesses, homes, and communities.")}
              </p>
              <p className="font-sans text-ink-soft leading-relaxed">
                {field(c, "whoweare_p3", "Our integrated approach means our clients benefit from a single, trusted partner who understands how each technology layer connects — from physical infrastructure and network connectivity to security, automation, and operational systems.")}
              </p>
            </div>
            <div className="bg-navy rounded-2xl p-10 flex flex-col gap-6">
              {[
                { stat: "5+", label: "Service Areas" },
                { stat: "100%", label: "Commitment to Quality" },
                { stat: "24/7", label: "Support Availability" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-5 pb-6 last:pb-0" style={{ borderBottom: "1px solid rgba(247,244,236,0.1)" }}>
                  <span className="text-4xl font-bold font-sans" style={{ color: "#b08d57" }}>{item.stat}</span>
                  <span className="font-sans font-medium" style={{ color: "rgba(247,244,236,0.7)" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(30,58,95,0.07)", border: "1px solid rgba(30,58,95,0.12)" }}>
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Our Mission</h3>
              <p className="font-sans text-ink-soft leading-relaxed">
                {field(c, "mission_text", "To deliver innovative, reliable, and integrated technology solutions that improve connectivity, security, automation, and operational efficiency for every client we serve.")}
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(30,58,95,0.07)", border: "1px solid rgba(30,58,95,0.12)" }}>
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Our Vision</h3>
              <p className="font-sans text-ink-soft leading-relaxed">
                {field(c, "vision_text", "To become a trusted leader in integrated technology solutions that empower communities and organisations through innovation, excellence, and sustainable growth.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — dark navy contrast section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-10 h-px mx-auto mb-8" style={{ background: "#b08d57" }} />
          <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#b08d57" }}>
            Our Philosophy
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-ivory mb-6 tracking-tight">
            {field(c, "philosophy_headline", "Technology Should Be Practical, Secure, Scalable, and Transformative")}
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: "rgba(247,244,236,0.65)" }}>
            {field(c, "philosophy_text", "We believe the best technology solutions are those that work invisibly in the background — enabling people and organisations to focus on what they do best, supported by systems that are reliable, secure, and built to last.")}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-gold text-xs font-bold uppercase tracking-[0.18em] mb-3">
              Our Values
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-ink tracking-tight">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.label} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(30,58,95,0.07)", border: "1px solid rgba(30,58,95,0.12)" }}>
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-sans text-base font-bold text-ink mb-2">{v.label}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-ink mb-4 tracking-tight">How We Work</h2>
            <p className="font-sans text-ink-soft max-w-xl mx-auto">
              Our proven three-stage approach ensures every project delivers lasting value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.label} className="relative glass-card rounded-2xl p-8">
                <span className="absolute -top-4 left-8 w-8 h-8 bg-accent text-ivory text-sm font-bold rounded-full flex items-center justify-center font-sans">
                  {i + 1}
                </span>
                <h3 className="text-xl font-semibold text-ink mt-2 mb-3">{step.label}</h3>
                <p className="font-sans text-ink-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Work With a Technology Partner You Can Trust")}
        subtext={field(c, "cta_subtext", "Explore our services or get in touch to discuss your technology needs.")}
        primaryCta={{ label: "Explore Our Services", href: "/services" }}
        secondaryCta={{ label: "Contact NAT Technologies", href: "/contact" }}
      />
    </>
  );
}
