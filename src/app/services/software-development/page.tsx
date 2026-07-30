import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Software Development | NAT Technologies",
  description:
    "Custom software, enterprise applications, web platforms, workflow automation, portals, APIs, integrations, and dashboards designed around your organisation.",
};

const deliverables = [
  {
    title: "Custom-Built Solutions",
    desc: "Software shaped around your processes, users, rules, and goals — not a one-size-fits-all package.",
  },
  {
    title: "Connected Enterprise Systems",
    desc: "Applications that integrate across HR, payroll, finance, documents, customer service, and operational workflows.",
  },
  {
    title: "Workflow Automation",
    desc: "Digital processes that route information, approvals, forms, and decisions to the right people at the right time.",
  },
  {
    title: "Secure Role-Based Access",
    desc: "Authorised users see and act on only the information required for their responsibilities.",
  },
  {
    title: "Insightful Reporting",
    desc: "Dashboards and reports that turn operational data into clear, timely information for management.",
  },
  {
    title: "Scalable Support",
    desc: "Solutions designed to evolve with your organisation, supported by training, maintenance, and responsive technical assistance.",
  },
];

const offerings = [
  {
    title: "Enterprise Business Applications",
    desc: "Integrated systems for human resources, payroll, accounting, finance, budgeting, assets, loans, inventory, employee development, performance, and productivity management.",
  },
  {
    title: "Web Applications & Portals",
    desc: "Responsive intranet, employee self-service, customer-facing portals, websites, landing pages, and web applications accessible across devices.",
  },
  {
    title: "Document & Workflow Management",
    desc: "Paperless document management, digital archiving, forms, approvals, business process automation, permissions, and complete process visibility.",
  },
  {
    title: "Customer Service & Employee Experience",
    desc: "Knowledge bases, help desks, ticket tracking, FAQs, troubleshooting resources, employee records, requests, payslips, loans, and pension information.",
  },
  {
    title: "Integration, Data & Digital Commerce",
    desc: "APIs and integrations connecting databases, CRM and ERP platforms, along with e-commerce, B2C and B2B storefronts, SEO tools, and management dashboards.",
  },
];

const capabilities = [
  {
    title: "Human Resources & Payroll",
    category: "Enterprise Applications",
    desc: "Manage the employee lifecycle from recruitment and development to attendance, payroll, performance, and productivity.",
    features: ["Employee records", "Recruitment", "Training & development", "Attendance & leave", "Payroll", "Performance reporting", "Biometric identity options"],
    value: "Improves workforce visibility, payroll accuracy, compliance, and productivity management.",
  },
  {
    title: "Accounting & Finance",
    category: "Enterprise Applications",
    desc: "Integrated financial management configured around applicable accounting practices and organisational requirements.",
    features: ["General ledger", "Bank reconciliation", "Budgeting", "Cash office", "Fixed assets", "Loans & inventory", "Management reporting"],
    value: "Creates a reliable financial view and reduces disconnected manual processes.",
  },
  {
    title: "Document Management",
    category: "Digital Workplace",
    desc: "Convert paper-heavy operations into a searchable, controlled digital archive.",
    features: ["Document import & classification", "Tagging & linking", "Central archive", "Permission-based access", "Digitisation services"],
    value: "Reduces physical storage, prevents lost files, preserves history, and speeds access.",
  },
  {
    title: "Business Process Management",
    category: "Digital Workplace",
    desc: "Automate multi-stakeholder processes involving forms, documents, approvals, comments, and decisions.",
    features: ["Configurable workflows", "Approval & rejection steps", "Escalation & notifications", "Audit history", "Process-owner visibility"],
    value: "Improves accountability, turnaround time, transparency, and control.",
  },
  {
    title: "Enterprise Intranet & Employee Self-Service",
    category: "Portals",
    desc: "A secure digital workplace where employees access authorised services and information.",
    features: ["Leave & loan requests", "Request tracking", "Payslips", "Pension information", "Content management"],
    value: "Gives employees convenient self-service while reducing administrative workload.",
  },
  {
    title: "Customer Portal & Help Desk",
    category: "Portals",
    desc: "A scalable service portal combining knowledge content, self-service, and structured support.",
    features: ["Knowledge base", "Ticket creation by portal or email", "FAQs & troubleshooting", "Tracking & escalation", "Role-based access"],
    value: "Strengthens customer service, improves response consistency, and provides ticket visibility.",
  },
  {
    title: "Websites, Web Apps & Portals",
    category: "Web Development",
    desc: "Responsive web experiences designed after detailed analysis and specification.",
    features: ["Intranets & customer portals", "Custom web applications", "Websites & landing pages", "Responsive design", "Configurable content platform"],
    value: "Delivers accessible digital experiences aligned to business and user needs.",
  },
  {
    title: "APIs & Systems Integration",
    category: "Integration",
    desc: "Connect software with the systems and data sources your organisation already relies on.",
    features: ["Custom APIs", "Database interfaces", "CRM & ERP integration", "Shared data flows", "Modular interoperability"],
    value: "Reduces duplicate data entry and creates more connected operations.",
  },
  {
    title: "E-commerce Solutions",
    category: "Digital Commerce",
    desc: "Custom online storefronts for consumer and business transactions.",
    features: ["B2C & B2B storefronts", "Platform customisation", "Database & system interfaces", "SEO tools"],
    value: "Supports digital sales and creates a connected commerce experience.",
  },
  {
    title: "Corporate Dashboards & Reporting",
    category: "Analytics",
    desc: "Role-based dashboards that present authorised management information clearly and securely.",
    features: ["Real-time or scheduled data", "Drill-down views", "KPI & performance analysis", "Filtering by permissions"],
    value: "Helps leaders monitor performance and make informed decisions.",
  },
];

export default async function SoftwareDevelopmentPage() {
  const c = await getPageContent("software-development");

  return (
    <>
      <Hero
        title="Software Development"
        headline={field(c, "hero_headline", "Purpose-Built Software for Smarter Operations")}
        copy={field(c, "hero_copy", "NAT Technologies designs and delivers secure, scalable software that simplifies operations, connects people and systems, and supports long-term business growth.")}
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        breadcrumb={[
          { label: "Our Services", href: "/services" },
          { label: "Software Development", href: "/services/software-development" },
        ]}
      />

      {/* Overview */}
      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-ink-soft text-lg leading-relaxed">
            {field(
              c,
              "value_prop",
              "From enterprise applications and web portals to workflow automation, document management, APIs, e-commerce, and reporting dashboards, we build solutions around the way your organisation works."
            )}
          </p>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d) => (
              <div key={d.title} className="glass-card rounded-xl p-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(37,132,244,0.07)", border: "1px solid rgba(37,132,244,0.12)" }}
                >
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

      {/* Service Offerings */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-ink mb-12 text-center tracking-tight">Our Service Offerings</h2>
          <div className="space-y-10">
            {offerings.map((s, i) => {
              const imgUrl = field(c, `service_img_${i}`, "");
              return (
                <div
                  key={s.title}
                  className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
                >
                  <div
                    className="flex-1 bg-ivory-deep rounded-2xl aspect-video overflow-hidden flex items-center justify-center"
                    style={{ border: "1px solid #E5E7EB" }}
                  >
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={s.title}
                        width={640}
                        height={360}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <svg
                        className="w-20 h-20"
                        style={{ color: "rgba(37,132,244,0.25)" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

      {/* Capability Library */}
      <section className="py-20 bg-ivory-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-accent text-xs font-bold uppercase tracking-[0.18em] mb-3">Capability Library</p>
            <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">
              {field(c, "capability_title", "Full Scope of Software Solutions")}
            </h2>
            <p className="font-sans text-ink-muted max-w-2xl mx-auto">
              {field(c, "capability_subtitle", "A comprehensive reference of our software offerings — from enterprise systems to digital commerce.")}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass-card rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold text-ink text-base leading-snug">{cap.title}</h3>
                  <span
                    className="shrink-0 text-xs font-bold px-3 py-1 rounded-full font-sans"
                    style={{ background: "rgba(37,132,244,0.08)", color: "#2584F4", border: "1px solid rgba(37,132,244,0.15)" }}
                  >
                    {cap.category}
                  </span>
                </div>
                <p className="font-sans text-ink-muted text-sm leading-relaxed mb-4">{cap.desc}</p>
                <ul className="space-y-1 mb-4">
                  {cap.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-sans text-xs text-ink-soft">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-lg px-4 py-2.5 font-sans text-xs text-ink-soft"
                  style={{ background: "rgba(37,132,244,0.04)", border: "1px solid rgba(37,132,244,0.10)" }}
                >
                  <span className="font-semibold text-accent">Customer value: </span>
                  {cap.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={field(c, "cta_headline", "Ready to Build Software Around Your Business?")}
        subtext={field(
          c,
          "cta_subtext",
          "Our software specialists are ready to understand your processes and design a secure, scalable solution that fits your organisation."
        )}
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
      />
    </>
  );
}
