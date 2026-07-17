"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const megaMenuColumns = [
  {
    title: "IT & IP Infrastructure",
    href: "/services/it-infrastructure",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    items: [
      { name: "Enterprise Connectivity", href: "/services/it-infrastructure" },
      { name: "Cloud Solutions", href: "/services/it-infrastructure" },
      { name: "Structured Cabling", href: "/services/it-infrastructure" },
      { name: "Managed Services", href: "/services/it-infrastructure" },
    ],
  },
  {
    title: "Security & Automation",
    href: "/services/security-solutions",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      { name: "CCTV Surveillance", href: "/services/security-solutions" },
      { name: "Access Control", href: "/services/security-solutions" },
      { name: "Smart Home Automation", href: "/services/smart-home" },
      { name: "Low Voltage & PoE", href: "/services/low-voltage-poe" },
    ],
  },
  {
    title: "Fuel Management",
    href: "/services/fuel-management",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    items: [
      { name: "Real-time Monitoring", href: "/services/fuel-management" },
      { name: "RFID Authentication", href: "/services/fuel-management" },
      { name: "Fleet Reporting", href: "/services/fuel-management" },
    ],
  },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Meet Our Team", href: "/team" },
  { name: "Our Clients", href: "/clients" },
  { name: "Affiliate Companies", href: "/affiliates" },
];

const navLinks = [
  { name: "Gallery", href: "/gallery" },
  { name: "Profile", href: "/profile" },
  { name: "Contact Us", href: "/contact" },
];

const mobileServiceLinks = megaMenuColumns.flatMap((col) => [
  { name: col.title, href: col.href },
  ...col.items,
]);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="shrink-0">
            <Logo variant="dark" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                isActive("/") ? "text-accent" : "text-ink-soft hover:text-ink"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent" />
              )}
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  ["/about", "/team", "/clients", "/affiliates"].some((p) => pathname.startsWith(p))
                    ? "text-accent"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                Company
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {["/about", "/team", "/clients", "/affiliates"].some((p) => pathname.startsWith(p)) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent" />
                )}
              </button>
              {companyOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 z-50">
                  <div className="rounded-xl shadow-lg py-2 overflow-hidden bg-white border border-line">
                    {companyLinks.map((s) => (
                      <Link key={s.href} href={s.href} className="flex items-center gap-3 px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-ivory-deep transition-colors">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  pathname.startsWith("/services")
                    ? "text-accent"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                Our Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {pathname.startsWith("/services") && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent" />
                )}
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50" style={{ width: "800px" }}>
                  <div className="rounded-2xl shadow-xl bg-white border border-line overflow-hidden">
                    <div className="grid grid-cols-3 gap-0">
                      {megaMenuColumns.map((col, ci) => (
                        <div
                          key={col.href}
                          className="p-6"
                          style={ci < megaMenuColumns.length - 1 ? { borderRight: "1px solid #E5E7EB" } : {}}
                        >
                          <Link
                            href={col.href}
                            className="flex items-center gap-2.5 mb-4 group"
                          >
                            <span className="w-9 h-9 rounded-xl bg-ivory-deep flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                              {col.icon}
                            </span>
                            <span className="text-sm font-bold text-ink group-hover:text-accent transition-colors leading-tight">
                              {col.title}
                            </span>
                          </Link>
                          <ul className="space-y-1">
                            {col.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="flex items-center gap-2 px-2 py-1.5 text-sm text-ink-muted hover:text-accent hover:bg-ivory-deep rounded-lg transition-colors"
                                >
                                  <svg className="w-3 h-3 shrink-0 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 py-4 bg-ivory-deep flex items-center justify-between" style={{ borderTop: "1px solid #E5E7EB" }}>
                      <p className="text-xs text-ink-muted font-sans">
                        End-to-end technology solutions for your business
                      </p>
                      <Link href="/services" className="text-xs font-bold text-accent hover:underline">
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            ))}

            <Link
              href="/contact"
              className="btn-gradient ml-3 px-5 py-2.5 text-white text-sm font-bold"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-ink p-2 rounded-lg hover:bg-ivory-deep"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className={`block px-4 py-2.5 text-sm font-semibold rounded-lg ${isActive("/") ? "text-accent bg-ivory-deep" : "text-ink-soft"}`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Company mobile accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-ink-soft rounded-lg"
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              >
                Company
                <svg className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileCompanyOpen && (
                <div className="pl-4 space-y-1 py-2">
                  {companyLinks.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-ink-soft hover:text-accent" onClick={() => setMobileOpen(false)}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services mobile accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-ink-soft rounded-lg"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Our Services
                <svg
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-1 py-2">
                  {megaMenuColumns.map((col) => (
                    <div key={col.href}>
                      <Link
                        href={col.href}
                        className="block px-4 py-2 text-xs font-bold text-ink uppercase tracking-wide"
                        onClick={() => setMobileOpen(false)}
                      >
                        {col.title}
                      </Link>
                      {col.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-1.5 text-sm text-ink-muted hover:text-accent"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 text-sm font-semibold rounded-lg ${
                  isActive(link.href) ? "text-accent bg-ivory-deep" : "text-ink-soft"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-gradient block text-center px-4 py-3 text-white text-sm font-bold"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
