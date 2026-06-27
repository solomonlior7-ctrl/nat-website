"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const services = [
  { name: "IT & IP Infrastructure", href: "/services/it-infrastructure" },
  { name: "Low Voltage & PoE", href: "/services/low-voltage-poe" },
  { name: "Security Solutions", href: "/services/security-solutions" },
  { name: "Smart Home Automation", href: "/services/smart-home" },
  { name: "Fuel Management Systems", href: "/services/fuel-management" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Profile", href: "/profile" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="shrink-0">
            <Logo variant="light" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive(link.href)
                    ? "text-accent-light bg-accent/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-all ${
                  pathname.startsWith("/services")
                    ? "text-accent-light bg-accent/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Our Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 z-50">
                  <div className="glass-card rounded-xl shadow-2xl shadow-black/40 py-2 overflow-hidden">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-accent/20"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
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
        <div className="lg:hidden bg-charcoal/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg ${
                  isActive(link.href) ? "text-accent-light bg-accent/10" : "text-slate-300"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-slate-300 rounded-lg"
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
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-slate-400 hover:text-accent-light"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center px-4 py-3 bg-accent text-white text-sm font-semibold rounded-lg"
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
