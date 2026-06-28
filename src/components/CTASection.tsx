import Link from "next/link";

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTASection({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0b0f19 0%, #0f1d3a 40%, #0b1f0f 100%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "15%",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(29,78,216,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", right: "15%",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="w-12 h-1 rounded-full mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, #1d4ed8, #22c55e)" }}
        />
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
          {headline}
        </h2>
        {subtext && (
          <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">{subtext}</p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center px-8 py-4 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 text-sm"
            style={{
              background: "linear-gradient(135deg, #1d4ed8, #22c55e)",
              boxShadow: "0 0 40px rgba(29,78,216,0.4)",
            }}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-slate-300 hover:text-white text-sm"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
