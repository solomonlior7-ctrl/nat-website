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
  dark = true,
}: HeroProps) {
  return (
    <section
      className={`relative py-20 lg:py-28 overflow-hidden ${
        dark
          ? "bg-navy"
          : "bg-gradient-to-br from-slate-900 to-charcoal"
      }`}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-slate-400">{crumb.label}</span>
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
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              {title}
            </p>
          )}
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {headline}
          </h1>
          {copy && (
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {copy}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg"
                >
                  {primaryCta.label}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center px-6 py-3 border border-slate-600 hover:border-accent text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
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
