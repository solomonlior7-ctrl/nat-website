export type FieldType = "text" | "textarea";

export interface ContentField {
  label: string;
  type: FieldType;
  defaultValue: string;
}

export interface PageSchema {
  title: string;
  icon: string;
  fields: Record<string, ContentField>;
}

export const CONTENT_SCHEMA: Record<string, PageSchema> = {
  // ─────────────────────────────────────────────────────────
  home: {
    title: "Home Page",
    icon: "🏠",
    fields: {
      hero_badge: {
        label: "Hero — Badge Text",
        type: "text",
        defaultValue: "Israel's Leading Technology Solutions Provider",
      },
      hero_line1: {
        label: "Hero — Headline Line 1 (white)",
        type: "text",
        defaultValue: "Smarter, Safer",
      },
      hero_gradient: {
        label: "Hero — Headline Line 2 (gradient)",
        type: "text",
        defaultValue: "Technology",
      },
      hero_line3: {
        label: "Hero — Headline Line 3 (white)",
        type: "text",
        defaultValue: "Environments",
      },
      hero_subtext: {
        label: "Hero — Sub-text",
        type: "textarea",
        defaultValue:
          "From advanced IT infrastructure to smart home automation, security systems, and fuel management — we help businesses operate at their best.",
      },
      stat1_value: { label: "Stat 1 — Value", type: "text", defaultValue: "200+" },
      stat1_label: { label: "Stat 1 — Label", type: "text", defaultValue: "Projects Delivered" },
      stat2_value: { label: "Stat 2 — Value", type: "text", defaultValue: "5" },
      stat2_label: { label: "Stat 2 — Label", type: "text", defaultValue: "Service Domains" },
      stat3_value: { label: "Stat 3 — Value", type: "text", defaultValue: "10+" },
      stat3_label: { label: "Stat 3 — Label", type: "text", defaultValue: "Years Experience" },
      stat4_value: { label: "Stat 4 — Value", type: "text", defaultValue: "24/7" },
      stat4_label: { label: "Stat 4 — Label", type: "text", defaultValue: "Support Available" },
      services_title: {
        label: "Services Section — Title",
        type: "text",
        defaultValue: "Five Integrated Service Areas",
      },
      services_subtitle: {
        label: "Services Section — Subtitle",
        type: "textarea",
        defaultValue:
          "Each designed to work together as a seamless, connected technology ecosystem.",
      },
      why_title: {
        label: "Why NAT — Title",
        type: "text",
        defaultValue: "The partner you can count on — every time",
      },
      why_subtitle: {
        label: "Why NAT — Subtitle",
        type: "textarea",
        defaultValue:
          "We combine deep technical expertise with a client-first approach to deliver solutions that genuinely make a difference — on time, on budget, and built to last.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Ready to Transform Your Technology Environment?",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue:
          "Speak to our team today and discover how NAT Technologies can help you operate smarter, safer, and more efficiently.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  about: {
    title: "About Page",
    icon: "ℹ️",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Technology That Works for You — Now and in the Future",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "We combine technical expertise, innovation, and best-practice delivery to create dependable solutions for businesses, homes, and communities.",
      },
      whoweare_title: {
        label: "Who We Are — Title",
        type: "text",
        defaultValue: "A Trusted Technology Solutions Provider",
      },
      whoweare_p1: {
        label: "Who We Are — Paragraph 1",
        type: "textarea",
        defaultValue:
          "NAT Technologies is a technology solutions provider specialising in IT and IP infrastructure, low-voltage systems, security solutions, smart home automation, and fuel management systems.",
      },
      whoweare_p2: {
        label: "Who We Are — Paragraph 2",
        type: "textarea",
        defaultValue:
          "We combine technical expertise, innovation, and best-practice delivery to create dependable solutions for businesses, homes, and communities.",
      },
      whoweare_p3: {
        label: "Who We Are — Paragraph 3",
        type: "textarea",
        defaultValue:
          "Our integrated approach means our clients benefit from a single, trusted partner who understands how each technology layer connects — from physical infrastructure and network connectivity to security, automation, and operational systems.",
      },
      mission_text: {
        label: "Mission Statement",
        type: "textarea",
        defaultValue:
          "To deliver innovative, reliable, and integrated technology solutions that improve connectivity, security, automation, and operational efficiency for every client we serve.",
      },
      vision_text: {
        label: "Vision Statement",
        type: "textarea",
        defaultValue:
          "To become a trusted leader in integrated technology solutions that empower communities and organisations through innovation, excellence, and sustainable growth.",
      },
      philosophy_headline: {
        label: "Philosophy — Headline",
        type: "text",
        defaultValue:
          "Technology Should Be Practical, Secure, Scalable, and Transformative",
      },
      philosophy_text: {
        label: "Philosophy — Text",
        type: "textarea",
        defaultValue:
          "We believe the best technology solutions are those that work invisibly in the background — enabling people and organisations to focus on what they do best, supported by systems that are reliable, secure, and built to last.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Work With a Technology Partner You Can Trust",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "text",
        defaultValue: "Explore our services or get in touch to discuss your technology needs.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  services: {
    title: "Services Overview Page",
    icon: "⚙️",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Integrated Technology Services Built Around Your Needs",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "Five specialised service areas — each designed to connect seamlessly across infrastructure, security, automation, and operations.",
      },
      it_summary: {
        label: "IT & IP — Card Summary",
        type: "textarea",
        defaultValue:
          "Enterprise connectivity, cloud solutions, structured cabling, network architecture, managed services, and security resilience.",
      },
      poe_summary: {
        label: "Low Voltage & PoE — Card Summary",
        type: "textarea",
        defaultValue:
          "Power over Ethernet systems that deliver data and power through a single cable — simplifying deployment and reducing infrastructure costs.",
      },
      security_summary: {
        label: "Security Solutions — Card Summary",
        type: "textarea",
        defaultValue:
          "Complete visibility, protection, and control across networks, cloud, identity, IoT, access control, and physical surveillance.",
      },
      smarthome_summary: {
        label: "Smart Home — Card Summary",
        type: "textarea",
        defaultValue:
          "Intelligent automation for lighting, climate, security, shading, and connected devices — delivering comfort, efficiency, and control.",
      },
      fuel_summary: {
        label: "Fuel Management — Card Summary",
        type: "textarea",
        defaultValue:
          "Intelligent fuel dispensing, real-time monitoring, RFID authentication, tank-level visibility, and automated reporting for fleets and facilities.",
      },
      integrated_headline: {
        label: "Integrated Delivery — Headline",
        type: "text",
        defaultValue: "One Partner. Every Layer.",
      },
      integrated_text: {
        label: "Integrated Delivery — Text",
        type: "textarea",
        defaultValue:
          "Our services are designed to work as a connected ecosystem. Whether you need a single service or a complete technology environment, NAT Technologies delivers integrated solutions that communicate, complement, and evolve together.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Let's Discuss Your Project",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "text",
        defaultValue: "Tell us what you need and we'll design a solution that fits.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  "it-infrastructure": {
    title: "IT & IP Infrastructure",
    icon: "🖥️",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Building the Foundation for Digital Excellence",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "NAT Technologies delivers intelligent IT and IP infrastructure solutions that power connectivity, security, automation, and business growth.",
      },
      value_prop: {
        label: "Value Proposition",
        type: "textarea",
        defaultValue:
          "From structured cabling and network architecture to cloud migration, managed services, and security resilience — we design and deliver infrastructure that is secure, scalable, and future-ready.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Looking for High-Performance IT Infrastructure Solutions?",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue:
          "Our infrastructure specialists are ready to assess your environment and design a solution that meets your needs.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  "low-voltage-poe": {
    title: "Low Voltage & PoE",
    icon: "⚡",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Smarter Infrastructure. Simpler Connectivity.",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "Power over Ethernet transmits both power and data through a single Ethernet cable — reducing cabling complexity, simplifying deployment, and supporting connected buildings.",
      },
      poe_title: {
        label: "What Is PoE — Title",
        type: "text",
        defaultValue: "One Cable. Two Functions.",
      },
      poe_p1: {
        label: "What Is PoE — Paragraph 1",
        type: "textarea",
        defaultValue:
          "Power over Ethernet (PoE) is a technology that transmits electrical power and data simultaneously through standard Ethernet cabling. This eliminates the need for separate power supplies for connected devices such as IP cameras, access points, VoIP phones, and access control systems.",
      },
      poe_p2: {
        label: "What Is PoE — Paragraph 2",
        type: "textarea",
        defaultValue:
          "NAT Technologies designs, supplies, and installs complete PoE infrastructure — from PoE switches and structured cabling to connected device deployment and ongoing management.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Ready to Modernise Your Infrastructure?",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  "security-solutions": {
    title: "Security Solutions",
    icon: "🔒",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Visibility. Protection. Control.",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "NAT Technologies delivers comprehensive security services across networks, cloud platforms, identity systems, IoT devices, access control, and surveillance systems.",
      },
      challenge_title: {
        label: "Challenge — Opening Question",
        type: "text",
        defaultValue: "Do you know who is accessing your systems right now?",
      },
      challenge_text: {
        label: "Challenge — Body Text",
        type: "textarea",
        defaultValue:
          "Which devices are connected to your network? What is running in your cloud? Who has access to your operational technology? Without complete visibility, you cannot effectively protect, detect, or respond. NAT Technologies helps you see everything — and secure it.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Strengthen Your Security Posture",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue:
          "Let our security specialists assess your environment and design a protection strategy tailored to your needs.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  "smart-home": {
    title: "Smart Home Automation",
    icon: "🏡",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Smart Living, Reimagined.",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "NAT Technologies designs and delivers intelligent home automation solutions that improve comfort, security, convenience, and energy efficiency — tailored to the way you live.",
      },
      overview_title: {
        label: "Overview — Title",
        type: "text",
        defaultValue: "Your Home. Your Control.",
      },
      overview_p1: {
        label: "Overview — Paragraph 1",
        type: "textarea",
        defaultValue:
          "Imagine arriving home to perfect lighting, the ideal temperature, and your favourite music playing — all triggered automatically. Smart home automation makes this possible through intelligent, connected systems that learn your preferences and respond to your routine.",
      },
      overview_p2: {
        label: "Overview — Paragraph 2",
        type: "textarea",
        defaultValue:
          "NAT Technologies provides end-to-end smart home solutions — from initial consultation and system design to professional installation, configuration, and ongoing support.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Plan Your Smart Home Today",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue:
          "Our smart home specialists will design a system tailored to your home and lifestyle.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  "fuel-management": {
    title: "Fuel Management Systems",
    icon: "⛽",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Intelligent Fuel Control. Enhanced Operational Efficiency.",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "NAT Technologies helps organisations control, monitor, and optimise fuel operations through intelligent dispensing, vehicle identification, real-time monitoring, and automated reporting.",
      },
      overview_title: {
        label: "Overview — Title",
        type: "text",
        defaultValue: "Total Control Over Your Fuel Operations",
      },
      overview_p1: {
        label: "Overview — Paragraph 1",
        type: "textarea",
        defaultValue:
          "Fuel is a significant operational cost for any organisation managing a fleet, construction site, agricultural operation, or fuel storage facility. Without accurate visibility and control, waste, theft, and inefficiency can go undetected.",
      },
      overview_p2: {
        label: "Overview — Paragraph 2",
        type: "textarea",
        defaultValue:
          "NAT Technologies delivers complete fuel management ecosystems — from intelligent dispensing systems and RFID authentication to tank monitoring, inventory management, and advanced reporting dashboards.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Ready to Gain Control of Your Fuel Operations?",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue: "Request a consultation with our fuel management specialists.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  affiliates: {
    title: "Affiliate Companies Page",
    icon: "🤝",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Technology Partners We Trust",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "NAT Technologies works with best-in-class technology manufacturers and solution providers. Our affiliate partnerships allow us to offer integrated, end-to-end solutions that our clients can rely on.",
      },
      looptag_description: {
        label: "LoopTag — Description",
        type: "textarea",
        defaultValue:
          "LoopTag is an advanced RFID-based refueling and fleet fuel-control system that gives organisations complete control over their fuel operations. It eliminates fuel theft, prevents unauthorised refueling and misfuelling, and provides fleet managers with accurate reporting and real-time visibility.",
      },
      looptag_relation: {
        label: "LoopTag — How NAT Uses LoopTag",
        type: "textarea",
        defaultValue:
          "NAT Technologies deploys LoopTag systems as part of our integrated fuel management service offering — combining intelligent dispensing hardware, RFID infrastructure, and centralised monitoring for comprehensive fuel control.",
      },
      switchbee_description: {
        label: "SwitchBee — Description",
        type: "textarea",
        defaultValue:
          "SwitchBee is a leading smart home and building automation platform that delivers full control over lighting, shutters, air conditioning, VRF systems, sensors, irrigation, sockets, and more — all through an intuitive mobile app. Designed for fast installation without major rewiring, SwitchBee fits new builds and retrofits alike.",
      },
      switchbee_relation: {
        label: "SwitchBee — How NAT Uses SwitchBee",
        type: "textarea",
        defaultValue:
          "NAT Technologies is an authorised SwitchBee integrator, delivering complete smart home and building automation projects — from system design and hardware supply to professional installation, configuration, and ongoing support.",
      },
      partner_cta_headline: {
        label: "Partnership Enquiry — Headline",
        type: "text",
        defaultValue: "Interested in a Technology Partnership?",
      },
      partner_cta_text: {
        label: "Partnership Enquiry — Text",
        type: "textarea",
        defaultValue:
          "NAT Technologies is open to strategic partnerships with technology manufacturers and solution providers whose products complement our service areas.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Need a Fuel Control or Smart Home Solution?",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue:
          "Speak to our team about deploying LoopTag or SwitchBee technology for your business or property.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  clients: {
    title: "Our Clients Page",
    icon: "🏢",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Trusted by businesses that need reliable technology",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "From enterprise IT infrastructure and advanced security to smart home automation, PoE networks, and fuel management — NAT Technologies serves organisations that cannot afford to compromise on technology quality, reliability, or security.",
      },
      stat1_value: { label: "Stat 1 — Value", type: "text", defaultValue: "200+" },
      stat1_label: { label: "Stat 1 — Label", type: "text", defaultValue: "Projects Delivered" },
      stat2_value: { label: "Stat 2 — Value", type: "text", defaultValue: "6" },
      stat2_label: { label: "Stat 2 — Label", type: "text", defaultValue: "Industry Sectors" },
      stat3_value: { label: "Stat 3 — Value", type: "text", defaultValue: "100%" },
      stat3_label: { label: "Stat 3 — Label", type: "text", defaultValue: "Commitment to Quality" },
      stat4_value: { label: "Stat 4 — Value", type: "text", defaultValue: "24/7" },
      stat4_label: { label: "Stat 4 — Label", type: "text", defaultValue: "Support Available" },
      logo_grid_title: {
        label: "Logo Grid — Title",
        type: "text",
        defaultValue: "Organisations That Trust NAT Technologies",
      },
      logo_grid_note: {
        label: "Logo Grid — Note Text",
        type: "text",
        defaultValue: "Client logos to be added. Reach out to find out how we can support your organisation.",
      },
      sectors_title: {
        label: "Sectors Section — Title",
        type: "text",
        defaultValue: "Industries We Work With",
      },
      sectors_subtitle: {
        label: "Sectors Section — Subtitle",
        type: "textarea",
        defaultValue:
          "We bring integrated technology solutions to organisations across six primary industry sectors.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Want to become our next success story?",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue:
          "Tell us about your technology challenges and let us design a solution that delivers real results.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  team: {
    title: "Meet Our Team Page",
    icon: "👥",
    fields: {
      hero_headline: {
        label: "Hero — Headline",
        type: "text",
        defaultValue: "Meet the people behind NAT Technologies",
      },
      hero_copy: {
        label: "Hero — Copy",
        type: "textarea",
        defaultValue:
          "Our team combines deep technical expertise with a client-first mindset. Every project — from design to delivery to ongoing support — is handled by specialists who take ownership of outcomes, not just tasks.",
      },
      team_section_title: {
        label: "Team Grid — Title",
        type: "text",
        defaultValue: "Specialists Across Every Domain",
      },
      team_section_subtitle: {
        label: "Team Grid — Subtitle",
        type: "textarea",
        defaultValue:
          "Each team member brings focused expertise to their technology domain — ensuring every client project receives specialist-level attention.",
      },
      how_we_work_title: {
        label: "How We Work — Title",
        type: "text",
        defaultValue: "How We Work",
      },
      how_we_work_subtitle: {
        label: "How We Work — Subtitle",
        type: "textarea",
        defaultValue:
          "A structured, client-focused process that delivers the right technology solution — every time.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Work With a Team That Takes Ownership",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue:
          "Our engineers don't just install technology — they design solutions, manage delivery, and support your systems for the long term.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  contact: {
    title: "Contact Page",
    icon: "📞",
    fields: {
      hero_headline: {
        label: "Page Headline",
        type: "text",
        defaultValue: "Contact Us",
      },
      hero_subtext: {
        label: "Page Sub-text",
        type: "textarea",
        defaultValue:
          "To contact us, please complete the form below and one of our representatives will get back to you as soon as possible.",
      },
      contact_address: {
        label: "Address",
        type: "text",
        defaultValue: "Israel",
      },
      contact_email: {
        label: "Email Address",
        type: "text",
        defaultValue: "info@nat-tech.global",
      },
      contact_phone: {
        label: "Phone Number",
        type: "text",
        defaultValue: "+972-XX-XXX-XXXX",
      },
      contact_hours: {
        label: "Business Hours",
        type: "text",
        defaultValue: "Sun–Thu: 9:00 AM – 6:00 PM",
      },
      response_text: {
        label: "Response Time Text",
        type: "text",
        defaultValue:
          "Our team typically responds within 1 business day. For urgent matters, please indicate this in your message.",
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  gallery: {
    title: "Gallery Page",
    icon: "🖼️",
    fields: {
      page_title: {
        label: "Page Title",
        type: "text",
        defaultValue: "Our Work in Action",
      },
      page_description: {
        label: "Page Description",
        type: "textarea",
        defaultValue:
          "Browse our project gallery to see the quality, range, and capability of NAT Technologies across all service areas.",
      },
      cta_headline: {
        label: "CTA — Headline",
        type: "text",
        defaultValue: "Start Your Project",
      },
      cta_subtext: {
        label: "CTA — Sub-text",
        type: "textarea",
        defaultValue:
          "Ready to bring your technology environment up to the standard you see here? Our team is ready to help.",
      },
    },
  },
};
