import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="glass-card gradient-border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-accent/15 group-hover:bg-accent/25 transition-colors">
        <span className="text-accent-light">{icon}</span>
      </div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-semibold text-accent-light hover:text-white transition-colors group/link"
      >
        Learn More
        <svg className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
