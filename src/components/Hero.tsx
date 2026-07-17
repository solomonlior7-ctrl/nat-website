import Link from "next/link";

interface HeroProps {
  title: string;
  headline: string;
  copy?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  breadcrumb?: { label: string; href: string }[];
  dark?: boolean;
}

export default function Hero({
  title,
  headline,
  copy,
  primaryCta,
  secondaryCta,
  breadcrumb,
}: HeroProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Top-right gradient blob */}
      <div
        className="absolute -top-24 -right-24 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(37,132,244,0.13) 0%, rgba(0,196,224,0.07) 45%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      {/* Bottom-left secondary blob */}
      <div
        className="absolute -bottom-16 -left-16 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 60%, rgba(1,255,164,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6 font-sans">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-ink-soft">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-accent transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {title && (
            <p className="font-sans text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
              {title}
            </p>
          )}
          <h1 className="text-4xl lg:text-6xl font-semibold text-ink leading-tight mb-6 tracking-tight text-balance">
            {headline}
          </h1>
          {copy && (
            <p className="font-sans text-lg text-ink-soft leading-relaxed mb-8 max-w-2xl">
              {copy}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="btn-gradient inline-flex items-center px-6 py-3 font-semibold font-sans text-white shadow-sm"
                >
                  {primaryCta.label}
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center px-6 py-3 bg-white border border-line text-ink font-semibold rounded-2xl transition-all hover:-translate-y-0.5 hover:border-accent font-sans"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
