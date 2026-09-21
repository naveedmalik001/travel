import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyInfo } from "@/data/company";
import { 
  Lock, 
  ShieldCheck, 
  Eye, 
  Database, 
  Mail, 
  CheckCircle2, 
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Shop A Trip Tour & Travels",
  description:
    "Learn how Shop A Trip protects guest personal information, booking data, identity documents for border permits, and communication privacy.",
  alternates: {
    canonical: "https://shopatrip.in/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#38804b]/20 selection:text-[#38804b]">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* Header Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#38804b] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#38804b] font-semibold">Privacy Policy</span>
          </div>

          <div className="bg-[#38804b] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-[#2e6d3f]">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 mb-4">
                <Lock className="w-3.5 h-3.5" />
                <span>Guest Data Privacy</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif">
                Privacy Policy
              </h1>
              <p className="mt-3 text-emerald-100 text-sm sm:text-base leading-relaxed">
                We respect your personal privacy. Discover how we protect your personal details, travel preferences, and border identification records.
              </p>
              <p className="mt-4 text-xs text-emerald-100/90 font-medium">
                Last Updated: {lastUpdated} • {companyInfo.name} (shopatrip.in)
              </p>
            </div>

            {/* Decorative accent */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            
            {/* Table of Contents - Sticky Desktop */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                  Policy Summary
                </h2>
                <nav className="space-y-2 text-xs font-medium text-slate-600">
                  <a href="#collection" className="block hover:text-[#38804b] py-1 transition-colors">1. Data We Collect</a>
                  <a href="#usage" className="block hover:text-[#38804b] py-1 transition-colors">2. How We Use Your Data</a>
                  <a href="#permits-hotels" className="block hover:text-[#38804b] py-1 transition-colors">3. Hotel & Permit Sharing</a>
                  <a href="#security" className="block hover:text-[#38804b] py-1 transition-colors">4. Data Security Standards</a>
                  <a href="#cookies" className="block hover:text-[#38804b] py-1 transition-colors">5. Cookies & Analytics</a>
                  <a href="#rights-contact" className="block hover:text-[#38804b] py-1 transition-colors">6. Your Rights & Disputes</a>
                </nav>

                <div className="pt-4 border-t border-slate-100">
                  <div className="bg-[#38804b]/10 rounded-xl p-3.5 border border-[#38804b]/20 text-xs space-y-2">
                    <p className="font-bold text-[#38804b] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" /> Privacy Officer
                    </p>
                    <p className="text-slate-600 text-[11px] leading-snug">
                      For data inquiries or record deletion:
                    </p>
                    <a 
                      href={`mailto:${companyInfo.email}`} 
                      className="font-bold text-[#38804b] hover:underline block text-[11px]"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Policy Body */}
            <div className="lg:col-span-8 space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xs">
              
              {/* Section 1 */}
              <section id="collection" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">1</span>
                  Information We Collect
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  When you inquire about a Kashmir holiday package, request a custom quotation, or confirm a travel itinerary with <strong>{companyInfo.name}</strong> (&quot;shopatrip.in&quot;), we collect only necessary traveler details, including:
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38804b] flex-shrink-0 mt-0.5" />
                    <span><strong>Contact Information:</strong> Full name, phone/WhatsApp number, email address, and city of origin.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38804b] flex-shrink-0 mt-0.5" />
                    <span><strong>Trip Preferences:</strong> Travel dates, passenger count, preferred hotel tier, vehicle class (Sedan, Innova Crysta, Tempo Traveller), and special dietary or room needs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38804b] flex-shrink-0 mt-0.5" />
                    <span><strong>Regulatory Documents:</strong> Government photo ID cards (Aadhaar / Passport / Voter ID) strictly when required for frontier zone permits (e.g. Gurez Valley, Keran Valley, Bangus) or hotel check-in compliance.</span>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="usage" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">2</span>
                  How We Use Your Information
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your details are utilized exclusively to execute high-quality, dependable travel experiences:
                </p>
                <div className="space-y-1.5 text-sm text-slate-600">
                  <p>• Generating personalized custom itineraries and accurate cost quotations.</p>
                  <p>• Confirming hotel rooms, luxury houseboat reservations, and shikara rides in Srinagar.</p>
                  <p>• Assigning verified local drivers and dispatching driver contact cards prior to your arrival.</p>
                  <p>• Communicating live mountain updates (weather, snow status, pass clearances) via WhatsApp.</p>
                  <p>• We <strong>never sell, rent, or monetize</strong> your personal data with third-party telemarketers.</p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="permits-hotels" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">3</span>
                  Necessary Information Sharing with Partners
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To provide seamless ground operations across Jammu & Kashmir and Ladakh, relevant details are shared solely with authorized stakeholders:
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    • <strong>Partner Hotels & Houseboats:</strong> Guest name and room requirements for check-in registration.
                  </p>
                  <p>
                    • <strong>Assigned Fleet Drivers:</strong> Guest name and pickup flight/location details for seamless airport welcomes.
                  </p>
                  <p>
                    • <strong>District Administration & Army Checkposts:</strong> Required identification copies for issuing Inner Line Permits (ILP) or military checkpost clearance in border areas.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="security" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">4</span>
                  Data Security & Retention
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We employ industry-standard encryption protocols (SSL/TLS across our website shopatrip.in) and secure internal handling protocols. Identification files collected for border checkposts are securely retained solely for the duration of the tour lifecycle and regulatory retention standards, after which they are safely archived or purged.
                </p>
              </section>

              {/* Section 5 */}
              <section id="cookies" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">5</span>
                  Cookies & Website Performance
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our website uses lightweight functional cookies to remember user preferences (such as selected packages or search filters) and standard privacy-friendly analytics to monitor page performance and loading speed. You can configure your browser to reject cookies without affecting basic browsing.
                </p>
              </section>

              {/* Section 6: CONTACT & DISPUTES */}
              <section id="rights-contact" className="space-y-4 pt-2">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">6</span>
                  Your Privacy Rights & Grievance Contact
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  You have the right to request access to the personal data we hold about you, request corrections, or ask for deletion of your records upon trip completion.
                </p>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 text-xs space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Official Privacy Email:</span>
                      <a 
                        href={`mailto:${companyInfo.email}`} 
                        className="text-sm font-bold text-[#38804b] hover:underline flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5" /> {companyInfo.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Official Domain:</span>
                      <a 
                        href="https://shopatrip.in" 
                        className="text-sm font-bold text-slate-800 hover:underline"
                      >
                        shopatrip.in
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Phone Inquiries:</span>
                      <span className="font-semibold text-slate-800">{companyInfo.phoneDisplay}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Registered Address:</span>
                      <span className="font-semibold text-slate-800">{companyInfo.location}</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Policies */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-4">
                  <Link href="/terms" className="text-[#38804b] font-bold hover:underline">
                    Terms & Conditions →
                  </Link>
                  <Link href="/cancellation-policy" className="text-[#38804b] font-bold hover:underline">
                    Cancellation Policy →
                  </Link>
                </div>
                <Link href="/contact" className="hover:text-slate-900 transition-colors">
                  Contact Support
                </Link>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
