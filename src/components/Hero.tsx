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
    <section className="relative py-20 lg:py-28 overflow-hidden bg-ivory-deep">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(rgba(15,30,51,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
      />
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory opacity-60" />

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
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-ivory font-semibold rounded-lg transition-all hover:-translate-y-0.5 shadow-sm font-sans"
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
                  className="inline-flex items-center px-6 py-3 border border-line-deep hover:border-accent text-ink-soft hover:text-ink font-semibold rounded-lg transition-colors font-sans"
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
