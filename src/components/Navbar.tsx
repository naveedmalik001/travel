"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/data/company";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import BrandLogo from "@/components/BrandLogo";
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  MessageSquare, 
  Compass, 
  ChevronRight,
  Calculator,
  Sparkles
} from "lucide-react";

export default function Navbar({ onOpenCustomPlanner }: { onOpenCustomPlanner?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tour Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Custom Planner", href: "/custom-planner" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isLightNav = !isHome || isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#0B1E15] text-emerald-100/90 text-xs py-2 px-4 border-b border-emerald-900/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={companyInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              <span>{companyInfo.address}</span>
            </a>
            <span className="text-emerald-800">•</span>
            <div className="flex items-center">
              <Compass className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              <span>{companyInfo.experienceYears}+ Years Field Excellence in Kashmir & Ladakh</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${companyInfo.phones[0]}`} 
              className="flex items-center hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <span className="text-emerald-800">•</span>
            <div className="flex items-center space-x-3">
              <a 
                href={companyInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
                title="Instagram @shopatrip"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={companyInfo.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isLightNav
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-slate-100" 
            : "bg-gradient-to-b from-black/85 via-black/55 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <BrandLogo
              variant={isLightNav ? "green" : "white"}
              showTagline={true}
              className="h-9 w-40 sm:h-10 sm:w-44 transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-all py-1.5 px-2 rounded-md ${
                    isLightNav
                      ? isActive
                        ? "text-emerald-700 font-semibold bg-emerald-50 border-b-2 border-emerald-600"
                        : "text-slate-700 hover:text-emerald-700 hover:bg-slate-50"
                      : isActive
                        ? "text-amber-300 font-semibold border-b-2 border-amber-300"
                        : "text-white/90 hover:text-amber-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I would like to plan a trip to Kashmir/Ladakh. Please share details.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
            
            <Link
              href="/custom-planner"
              onClick={onOpenCustomPlanner}
              className="inline-flex items-center px-4 py-2.5 rounded-full text-xs font-semibold bg-pine-900 hover:bg-pine-800 text-amber-300 border border-amber-400/40 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Calculator className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              <span>Custom Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isLightNav ? "text-slate-800" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-slate-900 border-b border-slate-200 px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <BrandLogo variant="green" showTagline={true} className="h-8 w-36" />
                <span className="text-xs bg-emerald-100 text-emerald-800 font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  6+ Yrs Exp
                </span>
              </div>

              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-sm font-medium rounded-lg px-2 transition-colors ${
                      isActive
                        ? "bg-emerald-50 text-emerald-800 font-semibold"
                        : "text-slate-700 hover:text-emerald-800 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${companyInfo.phones[0]}`}
                  className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-pine-900 text-amber-300 text-sm font-semibold text-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Call {companyInfo.phones[0]}</span>
                </a>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I want to inquire about tour packages.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#25D366] text-white text-sm font-semibold text-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
