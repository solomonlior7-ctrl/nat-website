import Link from "next/link";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
}

export default function CTASection({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #0f1729 40%, #0c1a3a 70%, #042f4b 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(ellipse at 20% 50%, #6366f140 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #3b82f630 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          {headline}
        </h2>
        {subtext && (
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">{subtext}</p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center px-8 py-3.5 font-semibold rounded-xl transition-all border border-white/20 text-slate-200 hover:text-white hover:border-white/40 hover:bg-white/5"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
