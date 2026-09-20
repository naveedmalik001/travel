import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyInfo } from "@/data/company";
import { 
  FileText, 
  Clock, 
  AlertCircle, 
  Mail, 
  CheckCircle2, 
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shop A Trip Tour & Travels",
  description:
    "Read the official booking terms, payment guidelines, cancellation conditions, and travel policies of Shop A Trip Tour & Travels.",
  alternates: {
    canonical: "https://shopatrip.in/terms",
  },
};

export default function TermsPage() {
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
            <span className="text-[#38804b] font-semibold">Terms & Conditions</span>
          </div>

          <div className="bg-[#38804b] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-[#2e6d3f]">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>Official Agreement</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif">
                Terms &amp; Conditions
              </h1>
              <p className="mt-3 text-emerald-100 text-sm sm:text-base leading-relaxed">
                Clear, transparent, and fair booking terms designed to protect your holiday in Kashmir &amp; Ladakh while establishing mutual clarity.
              </p>
              <p className="mt-4 text-xs text-emerald-100/90 font-medium">
                Last Updated: {lastUpdated} • Applicable to all bookings with {companyInfo.name}
              </p>
            </div>

            {/* Decorative background accent */}
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
                  Document Sections
                </h2>
                <nav className="space-y-2 text-xs font-medium text-slate-600">
                  <a href="#introduction" className="block hover:text-[#38804b] py-1 transition-colors">1. Introduction & Agreement</a>
                  <a href="#booking-payment" className="block hover:text-[#38804b] py-1 transition-colors">2. Booking & Advance Payments</a>
                  <a href="#cancellation" className="block text-[#38804b] font-bold py-1 transition-colors">3. Cancellation & Refund Policy</a>
                  <a href="#itinerary-changes" className="block hover:text-[#38804b] py-1 transition-colors">4. Weather & Itinerary Adjustments</a>
                  <a href="#permits-guidelines" className="block hover:text-[#38804b] py-1 transition-colors">5. Permits, Gondola & Local Rules</a>
                  <a href="#liability" className="block hover:text-[#38804b] py-1 transition-colors">6. Limitation of Liability</a>
                  <a href="#disputes" className="block hover:text-[#38804b] py-1 transition-colors">7. Disputes & Legal Contact</a>
                </nav>

                <div className="pt-4 border-t border-slate-100">
                  <div className="bg-[#38804b]/10 rounded-xl p-3.5 border border-[#38804b]/20 text-xs space-y-2">
                    <p className="font-bold text-[#38804b] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" /> Direct Support
                    </p>
                    <p className="text-slate-600 text-[11px] leading-snug">
                      For booking inquiries or dispute notices:
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
              <section id="introduction" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">1</span>
                  Introduction & Acceptance of Terms
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Welcome to <strong>{companyInfo.name}</strong> (&quot;Shop A Trip&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), headquartered at {companyInfo.address}. By confirming an itinerary, paying a booking deposit, or utilizing any of our tour packages, cab rentals, or travel services, you (&quot;Guest&quot;, &quot;Client&quot;, or &quot;You&quot;) agree to be legally bound by these Terms & Conditions.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Please review these terms thoroughly prior to making any financial advance. If you do not agree with any part of these terms, please consult our travel advisory team prior to confirmation.
                </p>
              </section>

              {/* Section 2 */}
              <section id="booking-payment" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">2</span>
                  Booking Confirmation & Advance Payments
                </h2>
                <div className="space-y-2.5 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38804b] flex-shrink-0 mt-0.5" />
                    <span><strong>Advance Token:</strong> A confirmation advance payment (typically 25% to 50% depending on the season and hotel tiers) is required to lock in hotel reservations, houseboat berths, dedicated fleet vehicles, and on-ground logistics.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38804b] flex-shrink-0 mt-0.5" />
                    <span><strong>Balance Clearance:</strong> The remaining trip balance must be settled upon arrival in Srinagar/Tangmarg or prior to hotel check-in as agreed in your written voucher.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38804b] flex-shrink-0 mt-0.5" />
                    <span><strong>Vouchers & Invoices:</strong> Official booking confirmation vouchers and driver contact cards are issued digitally via WhatsApp/Email upon receipt of the advance token.</span>
                  </div>
                </div>
              </section>

              {/* Section 3: CANCELLATION AND REFUND POLICY */}
              <section id="cancellation" className="space-y-4 pt-2">
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                    <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
                    <span>3. Official Cancellation & Refund Policy</span>
                  </div>
                  <p className="text-sm text-amber-950 font-medium leading-relaxed">
                    All trip bookings and reservations are subject to our strict cancellation timeframe:
                  </p>
                  
                  <div className="bg-white rounded-xl p-4 border border-amber-200/80 space-y-2 text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#38804b] flex-shrink-0 mt-0.5" />
                      <span><strong>Cancellation Window:</strong> A trip reservation is eligible for cancellation consideration strictly within <strong>24 to 48 hours</strong> of initial booking and payment confirmation.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Post-Window Non-Refundable Clause:</strong> After the initial <strong>24 to 48 hour window</strong>, there will be <strong>NO REFUND of any advance payment or token deposit</strong> under any circumstances, as non-refundable commitments are immediately disbursed to hotels, houseboats, and fleet rosters.</span>
                    </div>
                  </div>

                  <p className="text-xs text-amber-900/90 leading-relaxed">
                    * In the event of catastrophic natural emergencies (e.g. major highway closure certified by local authorities), dates may be rescheduled at our discretion, subject to hotel availability and seasonal tariff differences.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="itinerary-changes" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">4</span>
                  Mountain Weather, Road Closures & Itinerary Adjustments
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  High-altitude Himalayan routes (Gulmarg Tangmarg road in winter, Zojila Pass to Ladakh, Razdan Pass to Gurez, Sadhna Pass to Keran) are subject to sudden snowfall, avalanches, or administrative traffic regulations.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  While our drivers are experienced in snow driving and chained vehicles, safety is paramount. If a specific pass or sector is officially closed by the Border Roads Organisation (BRO) or Traffic Police, our team will provide alternate sightseeing or reroute your itinerary safely without liability for unvisited sectors.
                </p>
              </section>

              {/* Section 5 */}
              <section id="permits-guidelines" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">5</span>
                  Inner Line Permits, Gondola Tickets & Local Regulations
                </h2>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    • <strong>Border Permits:</strong> Frontier destinations including Gurez Valley and Keran Valley require valid Indian Government photo IDs (Aadhaar/Passport) for army checkpost registration. Foreign nationals must obtain prior regulatory clearance where mandatory.
                  </p>
                  <p>
                    • <strong>Gulmarg Gondola:</strong> Phase 1 and Phase 2 Gondola cable car tickets must be pre-booked through the official JK Cable Car portal. Our coordinators assist with scheduling and slots, but ticket inventory is controlled strictly by the J&K Government.
                  </p>
                  <p>
                    • <strong>Local Taxi Unions:</strong> In Pahalgam (Aru/Betaab/Chandanwari) and Sonamarg (Thajiwas Glacier), local union regulations mandate hiring designated local union cabs or ponies. These union charges are payable directly unless specified in your package voucher.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="liability" className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">6</span>
                  Limitation of Liability
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {companyInfo.name} acts as a professional tour coordinator, vehicle provider, and booking facilitator. We exercise the highest standards of safety, vehicle maintenance, and driver verification. However, we cannot be held liable for personal injury, illness, loss of luggage, flight delays, missed connections, or unforeseen force majeure events beyond human control.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Guests are strongly advised to procure comprehensive personal travel and medical insurance prior to departure.
                </p>
              </section>

              {/* Section 7: DISPUTES & CONTACT */}
              <section id="disputes" className="space-y-4 pt-2">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold">7</span>
                  Disputes, Inquiries & Legal Contact
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We believe in amicable and friendly resolution of every concern. If you experience any grievance, service discrepancy, or have questions regarding these terms, please contact our management team directly in writing:
                </p>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Official Legal & Dispute Email:</span>
                      <a 
                        href="mailto:contact@shopatrip.in" 
                        className="text-sm font-bold text-[#38804b] hover:underline flex items-center gap-1.5"
                      >
                        <Mail className="w-4 h-4" /> contact@shopatrip.in
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Official Website:</span>
                      <a 
                        href="https://shopatrip.in" 
                        className="text-sm font-bold text-slate-800 hover:underline"
                      >
                        shopatrip.in
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Phone / WhatsApp Assistance:</span>
                      <span className="font-semibold text-slate-800">{companyInfo.phoneDisplay}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Registered Jurisdiction:</span>
                      <span className="font-semibold text-slate-800">Baramulla / Srinagar (J&K, India)</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Any legal dispute or claim arising out of or related to our travel services shall be subject to the exclusive jurisdiction of the competent courts in Baramulla / Srinagar, Jammu and Kashmir, India.
                </p>
              </section>

              {/* Related Policies */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-4">
                  <Link href="/privacy" className="text-[#38804b] font-bold hover:underline">
                    View Privacy Policy →
                  </Link>
                  <Link href="/cancellation-policy" className="text-[#38804b] font-bold hover:underline">
                    View Cancellation & Refund Policy →
                  </Link>
                </div>
                <Link href="/contact" className="hover:text-slate-900 transition-colors">
                  Need Help? Contact Our Office
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
