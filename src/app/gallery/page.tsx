import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | NAT Technologies",
  description: "Browse the NAT Technologies project gallery — IT infrastructure, security systems, smart home automation, low-voltage installations, and fuel management.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Gallery</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Work in Action</h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Browse our project gallery to see the quality, range, and capability of NAT Technologies
            across all service areas.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Your Project</h2>
          <p className="text-slate-600 mb-8">
            Ready to bring your technology environment up to the standard you see here? Our team is
            ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
