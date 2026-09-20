"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/data/company";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";
import BrandLogo from "@/components/BrandLogo";
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Compass, 
  ChevronRight,
  Calculator,
  Award,
  PhoneCall
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
    { name: "Our Team", href: "/team" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isLightNav = !isHome || isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#38804b] text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#2e6d3f] overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto flex justify-between items-center gap-3">
          {/* Left Contact & Address */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {/* Primary Phone */}
            <a 
              href={`tel:${companyInfo.phones[0]}`} 
              className="flex items-center text-white hover:text-emerald-100 transition-colors font-medium tracking-tight sm:tracking-wide group whitespace-nowrap"
              title="Call Primary Support Line"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">{companyInfo.phones[0]}</span>
            </a>

            {/* Secondary Phone (hidden on small mobile to prevent header overflow) */}
            <a 
              href={`tel:${companyInfo.phones[1]}`} 
              className="hidden sm:flex items-center text-white hover:text-emerald-100 transition-colors font-medium tracking-tight sm:tracking-wide group whitespace-nowrap"
              title="Call Helpline 2"
            >
              <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">{companyInfo.phones[1]}</span>
            </a>
            
            <a 
              href={companyInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="hidden xl:flex items-center hover:text-emerald-100 transition-colors whitespace-nowrap text-emerald-100"
            >
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-white flex-shrink-0" />
              <span className="truncate max-w-xs 2xl:max-w-none">{companyInfo.address}</span>
            </a>
          </div>

          {/* Right Socials & Experience Tag */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="hidden md:flex items-center text-white whitespace-nowrap">
              <Compass className="w-3.5 h-3.5 mr-1.5 text-white flex-shrink-0" />
              <span>{companyInfo.experienceYears}+ Yrs Local Team</span>
            </div>

            <span className="hidden md:inline text-white/40">•</span>

            <div className="flex items-center space-x-2 sm:space-x-2.5">
              <a 
                href={companyInfo.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-emerald-100 transition-colors p-1 rounded hover:bg-white/10"
                title="Instagram @shopatrip"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={companyInfo.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-emerald-100 transition-colors p-1 rounded hover:bg-white/10"
                title="Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={`https://wa.me/${companyInfo.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-emerald-100 transition-colors p-1 rounded hover:bg-white/10"
                title="Direct WhatsApp"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isLightNav
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 text-slate-800 border-b border-slate-100" 
            : "bg-gradient-to-b from-black/85 via-black/55 to-transparent py-3.5 sm:py-4 text-white"
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <BrandLogo
              variant={isLightNav ? "green" : "white"}
              showTagline={true}
              className="h-9 w-36 sm:h-10 sm:w-44 transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2.5 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap py-1.5 px-2.5 xl:px-3 rounded-lg text-[13px] xl:text-sm font-medium transition-all duration-200 ${
                    isLightNav
                      ? isActive
                        ? "text-[#38804b] font-bold bg-[#38804b]/10 shadow-xs"
                        : "text-slate-700 hover:text-[#38804b] hover:bg-slate-100/70"
                      : isActive
                        ? "text-white font-bold bg-white/15 backdrop-blur-xs border border-white/20"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi Shop A Trip, I am planning a trip to Kashmir. Please help me with itinerary and quotes.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold bg-[#38804b] hover:bg-[#2b693f] active:scale-95 text-white shadow-sm transition-all whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 xl:w-4.5 xl:h-4.5 flex-shrink-0" />
              <span className="whitespace-nowrap">WhatsApp Us</span>
            </a>
            
            <Link
              href="/custom-planner"
              onClick={onOpenCustomPlanner}
              className={`inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 active:scale-95 ${
                isLightNav
                  ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 shadow-xs"
                  : "bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-sm"
              }`}
            >
              <Calculator className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#38804b] flex-shrink-0" />
              <span className="whitespace-nowrap">Custom Planner</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2 flex-shrink-0">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi ShopATrip, I am planning a trip to Kashmir. Please help me with itinerary.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#38804b] text-white flex-shrink-0"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md flex-shrink-0 ${isLightNav ? "text-slate-800" : "text-white"}`}
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
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#38804b]" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Explore Kashmir</span>
                </div>
                <span className="text-xs bg-[#38804b]/10 text-[#38804b] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#38804b]/20">
                  <Award className="w-3 h-3 text-[#38804b]" />
                  3+ Yrs Trusted
                </span>
              </div>

              {/* Mobile links including Custom Planner */}
              {[...navLinks, { name: "Custom Trip Planner", href: "/custom-planner" }].map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-sm font-medium rounded-lg px-2 transition-colors ${
                      isActive
                        ? "bg-[#38804b]/10 text-[#38804b] font-semibold"
                        : "text-slate-700 hover:text-[#38804b] hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#38804b]" : "text-slate-400"}`} />
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${companyInfo.phones[0]}`}
                    className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#38804b] text-white text-xs font-bold text-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {companyInfo.phones[0]}</span>
                  </a>
                  <a
                    href={`tel:${companyInfo.phones[1]}`}
                    className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center gap-1.5 border border-slate-200"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>Call {companyInfo.phones[1]}</span>
                  </a>
                </div>
                
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi ShopATrip, I am planning a trip to Kashmir. Please help me with itinerary.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#38804b] text-white text-xs font-bold text-center shadow-sm gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
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
