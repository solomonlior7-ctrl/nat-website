import Link from "next/link";

function Linkified({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {part}
          </a>
        ) : (
          part
        )
      )}
    </span>
  );
}

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
    <section className="py-24 relative overflow-hidden bg-navy">
      {/* Subtle radial accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "10%",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,58,95,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translateY(-50%)",
        }}
      />
      {/* Very faint dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(247,244,236,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold rule */}
        <div
          className="w-10 h-px mx-auto mb-8"
          style={{ background: "#b08d57" }}
        />
        <h2 className="text-3xl lg:text-5xl font-semibold text-ivory mb-5 leading-tight tracking-tight">
          {headline}
        </h2>
        {subtext && (
          <p className="font-sans text-lg mb-10 leading-relaxed" style={{ color: "rgba(247,244,236,0.55)" }}>
            <Linkified text={subtext} />
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center px-8 py-4 bg-ivory hover:bg-ivory-deep text-accent font-bold rounded-xl transition-all hover:-translate-y-0.5 text-sm font-sans shadow-sm"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm font-sans"
              style={{ border: "1px solid rgba(247,244,236,0.18)", color: "rgba(247,244,236,0.7)" }}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
