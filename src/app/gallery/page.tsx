import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import { createClient } from "@/lib/supabase/server";
import { getSiteId, getPageContent, field } from "@/lib/get-content";

export const metadata: Metadata = {
  title: "Gallery | NAT Technologies",
  description:
    "Browse the NAT Technologies project gallery — IT infrastructure, security systems, smart home automation, low-voltage installations, and fuel management.",
};

export default async function GalleryPage() {
  const supabase = await createClient();
  const [siteId, c] = await Promise.all([getSiteId(), getPageContent("gallery")]);

  const { data: items } = siteId
    ? await supabase
        .from("gallery_items")
        .select("id, title, category, image_url, sort_order")
        .eq("site_id", siteId)
        .order("sort_order", { ascending: true })
    : { data: [] };

  return (
    <>
      <Hero
        title="Gallery"
        headline={field(c, "page_title", "Our Work in Action")}
        copy={field(c, "page_description", "Browse our project gallery to see the quality, range, and capability of NAT Technologies across all service areas.")}
      />

      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={items ?? []} />
        </div>
      </section>

      <section className="py-16 bg-ivory-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-ink mb-4 tracking-tight">
            {field(c, "cta_headline", "Start Your Project")}
          </h2>
          <p className="font-sans text-ink-soft mb-8">
            {field(c, "cta_subtext", "Ready to bring your technology environment up to the standard you see here? Our team is ready to help.")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-dark text-ivory font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-sm font-sans"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
