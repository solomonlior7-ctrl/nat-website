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
    <section className="py-24 relative overflow-hidden bg-ivory-deep">
      {/* Gradient blobs */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(37,132,244,0.10) 0%, rgba(0,196,224,0.06) 50%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-[350px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 60%, rgba(1,255,164,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-10 h-px mx-auto mb-8 rounded-full" style={{ background: "#2584F4" }} />
        <h2 className="text-3xl lg:text-5xl font-semibold text-ink mb-5 leading-tight tracking-tight">
          {headline}
        </h2>
        {subtext && (
          <p className="font-sans text-lg mb-10 leading-relaxed text-ink-soft">
            <Linkified text={subtext} />
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="btn-gradient inline-flex items-center px-8 py-4 font-bold text-sm font-sans shadow-sm"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center px-8 py-4 bg-white border border-line text-ink font-semibold rounded-2xl transition-all hover:-translate-y-0.5 hover:border-accent text-sm font-sans"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
