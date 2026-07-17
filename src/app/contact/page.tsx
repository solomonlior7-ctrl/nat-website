import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Contact Us | NAT Technologies",
  description: "Get in touch with NAT Technologies. Submit an enquiry about IT infrastructure, security, smart home, low-voltage, or fuel management solutions.",
};

export default async function ContactPage() {
  const c = await getPageContent("contact");
  return (
    <>
      <Hero
        title="Get in Touch"
        headline={field(c, "hero_headline", "Contact Us")}
        copy={field(c, "hero_subtext", "To contact us, please complete the form below and one of our representatives will get back to you as soon as possible.")}
      />

      {/* Form Section */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-ink mb-2">Send an Enquiry</h2>
                <p className="font-sans text-ink-muted text-sm mb-8">
                  The information you provide will be handled responsibly and used in accordance with
                  the Company&apos;s Privacy Policy.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-7">
                <h3 className="font-semibold text-lg mb-4 text-ink">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-sans text-sm text-ink-soft">{field(c, "contact_address", "Israel")}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-sans text-sm text-ink-soft">{field(c, "contact_email", "info@nat-tech.global")}</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-7">
                <h3 className="text-ink font-semibold text-lg mb-4">Service Enquiries</h3>
                <ul className="space-y-3">
                  {[
                    "IT & IP Infrastructure",
                    "Low Voltage & PoE",
                    "Security Solutions",
                    "Smart Home Automation",
                    "Fuel Management Systems",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2 font-sans text-sm text-ink-soft">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-7" style={{ background: "rgba(37,132,244,0.05)", border: "1px solid rgba(37,132,244,0.12)" }}>
                <p className="font-sans text-ink-soft text-sm leading-relaxed">
                  <strong className="text-ink">Response time:</strong>{" "}
                  {field(c, "response_text", "Our team typically responds within 1 business day. For urgent matters, please indicate this in your message.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
