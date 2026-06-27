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
  home: {
    title: "Home Page",
    icon: "🏠",
    fields: {
      hero_eyebrow: {
        label: "Hero — Top Label",
        type: "text",
        defaultValue: "Israel's Leading Technology Solutions Provider",
      },
      hero_title: {
        label: "Hero — Main Title",
        type: "text",
        defaultValue: "Analyze. Automate. Transform.",
      },
      hero_description: {
        label: "Hero — Description",
        type: "textarea",
        defaultValue:
          "From IT infrastructure to fuel management systems, NAT Technologies delivers smart, safe, and scalable solutions that power modern businesses.",
      },
      why_title: {
        label: "Why Choose Us — Title",
        type: "text",
        defaultValue: "Why Choose NAT Technologies?",
      },
      why_description: {
        label: "Why Choose Us — Description",
        type: "textarea",
        defaultValue:
          "We combine deep technical expertise with a client-first approach to deliver solutions that actually work — on time, on budget, and built to last.",
      },
      cta_title: {
        label: "Bottom CTA — Title",
        type: "text",
        defaultValue: "Ready to Transform Your Technology?",
      },
      cta_description: {
        label: "Bottom CTA — Description",
        type: "textarea",
        defaultValue:
          "Join the growing number of businesses that trust NAT Technologies to design, deploy, and support their critical systems.",
      },
    },
  },
  about: {
    title: "About Page",
    icon: "ℹ️",
    fields: {
      about_headline: {
        label: "Main Headline",
        type: "text",
        defaultValue: "Building the Future of Connected Technology",
      },
      about_description: {
        label: "Introduction Paragraph",
        type: "textarea",
        defaultValue:
          "Founded with a mission to bridge the gap between complex technology and real-world business needs, NAT Technologies has grown into Israel's trusted partner for integrated technology solutions.",
      },
      mission_text: {
        label: "Mission Statement",
        type: "textarea",
        defaultValue:
          "To empower businesses through cutting-edge technology solutions that are secure, reliable, and built to last.",
      },
      vision_text: {
        label: "Vision Statement",
        type: "textarea",
        defaultValue:
          "A future where every business, regardless of size, has access to enterprise-grade technology that drives growth and protects assets.",
      },
      philosophy_text: {
        label: "Philosophy Text",
        type: "textarea",
        defaultValue:
          "We believe technology should work for you, not against you. Every solution we design is built around your specific needs, constraints, and goals.",
      },
    },
  },
  services: {
    title: "Services Page",
    icon: "⚙️",
    fields: {
      services_headline: {
        label: "Page Headline",
        type: "text",
        defaultValue: "Comprehensive Technology Solutions",
      },
      services_description: {
        label: "Page Description",
        type: "textarea",
        defaultValue:
          "From network infrastructure to smart automation systems, we deliver end-to-end solutions tailored to your business needs.",
      },
    },
  },
  contact: {
    title: "Contact Page",
    icon: "📞",
    fields: {
      contact_address: {
        label: "Address",
        type: "text",
        defaultValue: "Tel Aviv, Israel",
      },
      contact_phone: {
        label: "Phone Number",
        type: "text",
        defaultValue: "+972-XX-XXX-XXXX",
      },
      contact_email: {
        label: "Email Address",
        type: "text",
        defaultValue: "info@nat-tech.global",
      },
      contact_hours: {
        label: "Business Hours",
        type: "text",
        defaultValue: "Sun–Thu: 9:00 AM – 6:00 PM",
      },
      contact_response: {
        label: "Response Time Text",
        type: "text",
        defaultValue: "We respond within 24 hours",
      },
    },
  },
  gallery: {
    title: "Gallery Page",
    icon: "🖼️",
    fields: {
      gallery_title: {
        label: "Page Title",
        type: "text",
        defaultValue: "Our Work in Action",
      },
      gallery_description: {
        label: "Page Description",
        type: "textarea",
        defaultValue:
          "Browse our project gallery to see the quality, range, and capability of NAT Technologies across all service areas.",
      },
    },
  },
};
