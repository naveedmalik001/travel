import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import BrandLogo from "@/components/BrandLogo";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Award,
  ChevronRight,
  ShieldCheck,
  Compass
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08150f] text-slate-300 border-t border-emerald-950 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-950/80">
          
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <BrandLogo variant="white" showTagline={true} className="h-10 w-44 sm:w-48" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Premier mountain travel specialist headquartered in Tangmarg at the base of Gulmarg, Baramulla. Specializing in authentic Kashmir tours, offbeat frontier valleys (Gurez, Keran, Tulail), Leh-Ladakh expeditions, and Katra Vaishno Devi pilgrimages.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="text-emerald-400 font-semibold flex items-center">
                <Award className="w-3.5 h-3.5 mr-1 text-amber-400" />
                {companyInfo.experienceYears}+ Years Field Experience
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold flex items-center">
                <Compass className="w-3.5 h-3.5 mr-1 text-amber-400" />
                Tangmarg Local Base
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-amber-400" />
                Verified Fleet
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-950/80 hover:bg-amber-500 hover:text-pine-950 text-slate-300 flex items-center justify-center transition-colors"
                title="Instagram @shopatrip"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-950/80 hover:bg-amber-500 hover:text-pine-950 text-slate-300 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-950/80 hover:bg-amber-500 hover:text-pine-950 text-slate-300 flex items-center justify-center transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Popular Packages */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase text-amber-400">
              Tour Packages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/packages" className="hover:text-amber-300 transition-colors flex items-center font-medium text-emerald-300">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-500" />
                  View All Packages →
                </Link>
              </li>
              <li>
                <Link href="/packages/3n-4d-kashmir-glimpse" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  3N/4D Kashmir Glimpse
                </Link>
              </li>
              <li>
                <Link href="/packages/5n-6d-honeymoon-special" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  5N/6D Romantic Honeymoon
                </Link>
              </li>
              <li>
                <Link href="/packages/gurez-valley-7d-4star" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  6N/7D Gurez Frontier (4-Star)
                </Link>
              </li>
              <li>
                <Link href="/packages/keran-valley-escape-6n7d" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  6N/7D Keran Valley Escape
                </Link>
              </li>
              <li>
                <Link href="/packages/ladakh-grand-tour-11n12d" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  11N/12D Ladakh Grand Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Himalayan Destinations */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase text-amber-400">
              Destinations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations" className="hover:text-amber-300 transition-colors flex items-center font-medium text-emerald-300">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-500" />
                  Explore All Destinations →
                </Link>
              </li>
              <li>
                <Link href="/destinations/gulmarg" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Gulmarg & Apharwat Peak
                </Link>
              </li>
              <li>
                <Link href="/destinations/srinagar" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Srinagar & Dal Lake
                </Link>
              </li>
              <li>
                <Link href="/destinations/pahalgam" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Pahalgam & Betaab Valley
                </Link>
              </li>
              <li>
                <Link href="/destinations/gurez-valley" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Gurez Valley & Habba Khatoon
                </Link>
              </li>
              <li>
                <Link href="/destinations/keran-valley" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Keran Border Valley
                </Link>
              </li>
              <li>
                <Link href="/destinations/leh-ladakh" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Leh Ladakh & Pangong Tso
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Quick Links & Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase text-amber-400">
              Quick Links
            </h4>
            <div className="space-y-2">
              <div>
                <Link href="/about" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  About Our Company
                </Link>
              </div>
              <div>
                <Link href="/services" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Services & Cab Rentals
                </Link>
              </div>
              <div>
                <Link href="/custom-planner" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Custom Trip Estimator
                </Link>
              </div>
              <div>
                <Link href="/contact" className="hover:text-amber-300 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-emerald-600" />
                  Contact Us & Map
                </Link>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-950/60 space-y-2 text-slate-400">
              <p className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-amber-400 flex-shrink-0" />
                <a href={`tel:${companyInfo.phones[0]}`} className="hover:text-white">
                  {companyInfo.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white truncate">
                  {companyInfo.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I want to inquire about custom Kashmir & Ladakh tour packages.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all w-full justify-center shadow-sm"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <p className="font-serif italic text-amber-400/90 text-sm">
            Tagline: {companyInfo.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/packages" className="hover:text-slate-300">Packages</Link>
            <span>•</span>
            <Link href="/destinations" className="hover:text-slate-300">Destinations</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-300">About Us</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
