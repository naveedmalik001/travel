import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";
import BrandLogo from "@/components/BrandLogo";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Award,
  ChevronRight,
  ShieldCheck,
  Compass,
  FileText,
  Lock,
  CalendarX
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08150f] text-slate-300 border-t border-[#38804b]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#38804b]/20">
          
          {/* Col 1: Brand & About (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="Shop A Trip Home">
              <BrandLogo variant="white" showTagline={true} className="h-10 w-44 sm:w-48" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-1">
              Registered mountain tour operator headquartered in Tangmarg at the base of Gulmarg, Baramulla. We specialize in authentic Kashmir holidays, frontier valley expeditions (Gurez, Keran, Tulail), Leh-Ladakh road trips, and Katra pilgrimages with verified local drivers.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="text-[#38804b] font-semibold flex items-center">
                <Award className="w-3.5 h-3.5 mr-1 text-[#38804b]" />
                {companyInfo.experienceYears}+ Years Experience
              </span>
              <span className="text-slate-700">•</span>
              <span className="text-[#38804b] font-semibold flex items-center">
                <Compass className="w-3.5 h-3.5 mr-1 text-[#38804b]" />
                Kashmir HQ
              </span>
              <span className="text-slate-700">•</span>
              <span className="text-[#38804b] font-semibold flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#38804b]" />
                Verified Fleet
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#38804b] hover:bg-[#2b693f] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Instagram @shopatrip"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#38804b] hover:bg-[#2b693f] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#38804b] hover:bg-[#2b693f] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Google Maps Office Location"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Tour Packages (Span 2) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase text-[#38804b]">
              Tour Packages
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/packages" className="hover:text-[#38804b] transition-colors flex items-center font-semibold text-[#38804b]">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  All Kashmir Packages →
                </Link>
              </li>
              <li>
                <Link href="/packages/3n-4d-kashmir-glimpse" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  3N/4D Kashmir Glimpse
                </Link>
              </li>
              <li>
                <Link href="/packages/5n-6d-honeymoon-special" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  5N/6D Honeymoon Special
                </Link>
              </li>
              <li>
                <Link href="/packages/gurez-valley-7d-4star" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  6N/7D Gurez Frontier
                </Link>
              </li>
              <li>
                <Link href="/packages/keran-valley-escape-6n7d" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  6N/7D Keran Border Valley
                </Link>
              </li>
              <li>
                <Link href="/packages/ladakh-grand-tour-11n12d" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  11N/12D Ladakh Grand Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Destinations (Span 2) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase text-[#38804b]">
              Destinations
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/destinations" className="hover:text-[#38804b] transition-colors flex items-center font-semibold text-[#38804b]">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  All Destinations →
                </Link>
              </li>
              <li>
                <Link href="/destinations/gulmarg" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Gulmarg & Gondola
                </Link>
              </li>
              <li>
                <Link href="/destinations/srinagar" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Srinagar & Dal Lake
                </Link>
              </li>
              <li>
                <Link href="/destinations/pahalgam" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Pahalgam & Betaab Valley
                </Link>
              </li>
              <li>
                <Link href="/destinations/gurez-valley" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Gurez Valley
                </Link>
              </li>
              <li>
                <Link href="/destinations/leh-ladakh" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Leh Ladakh & Pangong
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Legal Policies (Span 2) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase text-[#38804b]">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/team" className="hover:text-white transition-colors flex items-center text-[#38804b] font-semibold">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Our Local Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors flex items-center font-medium">
                  <FileText className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-white transition-colors flex items-center font-medium">
                  <CalendarX className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors flex items-center font-medium">
                  <Lock className="w-3 h-3 mr-1 text-[#38804b] flex-shrink-0" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Inquiries (Span 2) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase text-[#38804b]">
              Contact & Help
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <p className="flex items-start">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#38804b] flex-shrink-0 mt-0.5" />
                <span>Tangmarg, Baramulla, Kashmir 193404</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#38804b] flex-shrink-0" />
                <a href={`tel:${companyInfo.phones[0]}`} className="hover:text-white">
                  {companyInfo.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-[#38804b] flex-shrink-0" />
                <a href="mailto:contact@shopatrip.in" className="hover:text-white truncate font-medium text-slate-300">
                  contact@shopatrip.in
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I want to inquire about custom Kashmir & Ladakh tour packages.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 rounded-xl bg-[#38804b] text-white text-xs font-bold hover:bg-[#2b693f] transition-all w-full justify-center shadow-sm gap-1.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="pt-6 pb-2 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4 border-b border-[#38804b]/20">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-1 gap-x-3 text-slate-400">
            <span>© {currentYear} {companyInfo.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="font-serif italic text-[#38804b] text-xs">
              {companyInfo.tagline}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/cancellation-policy" className="hover:text-white transition-colors">
              Cancellation & Refund Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Developer & Strategist Credit Line */}
        <div className="pt-4 text-center text-xs text-slate-500">
          <p className="leading-relaxed">
            Designed & Developed by{" "}
            <a
              href="https://instagram.com/immnaveed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 font-semibold hover:text-[#38804b] transition-colors underline decoration-[#38804b]/40 underline-offset-2 tracking-wide"
            >
              IMMNAVEED
            </a>
            {" | "}
            <a
              href="https://www.immnaveed.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 font-semibold hover:text-[#38804b] transition-colors underline decoration-[#38804b]/40 underline-offset-2"
            >
              Brand Strategist & Growth Consultant
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
