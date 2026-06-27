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
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`py-16 lg:py-20 ${
        dark ? "bg-navy" : "bg-slate-50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl lg:text-4xl font-bold mb-4 ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          {headline}
        </h2>
        {subtext && (
          <p
            className={`text-lg mb-8 ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {subtext}
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center px-8 py-3.5 font-semibold rounded-lg transition-colors border ${
                dark
                  ? "border-slate-600 text-slate-300 hover:text-white hover:border-slate-400"
                  : "border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
