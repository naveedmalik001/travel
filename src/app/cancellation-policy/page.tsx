import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyInfo } from "@/data/company";
import { 
  ShieldAlert, 
  Clock, 
  AlertCircle, 
  Mail, 
  Phone, 
  CheckCircle2, 
  HelpCircle,
  CalendarX,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Shop A Trip Tour & Travels",
  description:
    "Review our 24-48 hour cancellation window, advance deposit guidelines, and refund terms for Kashmir and Ladakh holiday bookings.",
  alternates: {
    canonical: "https://shopatrip.in/cancellation-policy",
  },
};

export default function CancellationPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        {/* Header Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#38804e] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/terms" className="hover:text-[#38804e] transition-colors">Terms</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#38804e] font-semibold">Cancellation & Refund Policy</span>
          </div>

          <div className="bg-[#08150f] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-emerald-950">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#38804e]/20 text-emerald-400 border border-[#38804e]/30 mb-4">
                <CalendarX className="w-3.5 h-3.5" />
                <span>Transparent Policy</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif">
                Cancellation & Refund Policy
              </h1>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Clear rules and timelines regarding advance deposits, cancellation requests, and refund eligibility for all Kashmir and Ladakh travel itineraries.
              </p>
              <p className="mt-4 text-xs text-emerald-400 font-medium">
                Last Updated: {lastUpdated} • Enforced by {companyInfo.name}
              </p>
            </div>

            {/* Decorative accent */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#38804e]/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            
            {/* Sidebar info */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                
                {/* Summary Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                    Quick Key Highlights
                  </h2>
                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#38804e] flex-shrink-0 mt-0.5" />
                      <span><strong>Eligible Window:</strong> 24 to 48 hours post booking confirmation.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Post 48 Hours:</strong> Non-refundable advance payment.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-[#38804e] flex-shrink-0 mt-0.5" />
                      <span><strong>Request Channel:</strong> contact@shopatrip.in</span>
                    </div>
                  </div>
                </div>

                {/* Need Assistance card */}
                <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-900/60 shadow-lg space-y-3">
                  <h3 className="text-sm font-bold text-emerald-300">
                    Have an Urgent Reschedule?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    If your flights are delayed or mountain roads are blocked, contact our 24/7 team immediately for rescheduling support.
                  </p>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I have a query regarding my booking and itinerary status.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 rounded-xl bg-[#38804e] text-white text-xs font-bold hover:bg-[#2b693f] transition-colors"
                  >
                    Chat With Coordinator
                  </a>
                </div>

              </div>
            </aside>

            {/* Main Policy Content */}
            <div className="lg:col-span-8 space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xs">
              
              {/* Highlight Core Rule */}
              <div className="bg-amber-50/90 border-2 border-amber-300/80 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-950 font-extrabold text-lg">
                  <ShieldAlert className="w-6 h-6 text-amber-700 flex-shrink-0" />
                  <span>The 24–48 Hour Cancellation Policy</span>
                </div>
                <div className="space-y-3 text-sm text-slate-800 leading-relaxed">
                  <p>
                    All travel packages, private cab bookings, and customized itineraries booked through <strong>{companyInfo.name}</strong> (shopatrip.in) are subject to our standard cancellation window:
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-amber-200 space-y-2">
                    <p className="font-bold text-[#38804e] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> 1. Within 24 to 48 Hours:
                    </p>
                    <p className="text-xs text-slate-600 pl-6">
                      A booking may be cancelled within <strong>24 to 48 hours</strong> of initial payment confirmation. Any refund processed within this window is subject only to unavoidable third-party transactional or non-recoverable processing charges.
                    </p>
                    
                    <p className="font-bold text-red-700 flex items-center gap-2 pt-2">
                      <AlertCircle className="w-4 h-4" /> 2. After 48 Hours:
                    </p>
                    <p className="text-xs text-slate-600 pl-6">
                      After the lapse of 48 hours from the confirmation time, <strong>there will be NO REFUND of any advance payment or deposit</strong>. All advances are immediately locked with local hoteliers, Dal Lake houseboat owners, and designated vehicle drivers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Cancellation Process */}
              <section className="space-y-4">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  How to Submit a Cancellation Request
                </h2>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    To ensure transparent verification and timestamp accuracy, all cancellation notices must be officially communicated in writing via email:
                  </p>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 text-xs">
                    <p>• <strong>Official Email:</strong> <a href="mailto:contact@shopatrip.in" className="font-bold text-[#38804e] hover:underline">contact@shopatrip.in</a></p>
                    <p>• <strong>Subject Line:</strong> <code>Cancellation Request - [Booking ID / Guest Name]</code></p>
                    <p>• <strong>Required Details:</strong> Booking Date, Lead Traveler Name, Contact Number, and Reason for Cancellation.</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    * The cancellation timestamp is calculated strictly from the time the written email is received at contact@shopatrip.in.
                  </p>
                </div>
              </section>

              {/* Force Majeure & Weather Situations */}
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Weather Disruptions, Road Closures & Rescheduling
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kashmir is an alpine Himalayan environment where mountain passes (such as Gurez Razdan Pass, Keran Sadhna Pass, or Gulmarg Tangmarg roads during heavy blizzards) can experience unpredictable snow blockages.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    • <strong>Road Blockages:</strong> In the event a destination is unreachable due to official BRO snow-clearing operations, our team arranges alternative accessible valley sightseeing (e.g. Srinagar Mughal Gardens, Doodhpathri, Yusmarg, or Manasbal Lake) so your trip continues smoothly.
                  </p>
                  <p>
                    • <strong>Flight Cancellations:</strong> If your inbound flight to Srinagar (SXR) is cancelled by the airline due to low visibility or snowfall, inform us immediately. We will assist in shifting hotel dates without additional agency fees, subject to hotel inventory policies.
                  </p>
                </div>
              </section>

              {/* Third Party Services */}
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Gondola Tickets, Pony Rides & Local Union Services
                </h2>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    • <strong>Gulmarg Gondola:</strong> Cable car tickets are issued by the J&K Cable Car Corporation. Their refund policies are regulated independently by the official government portal.
                  </p>
                  <p>
                    • <strong>Local Activities:</strong> Pony rides, snow bikes, ATV rides, and sledge hire are third-party vendor services. Advance amounts paid for these local services are subject to on-site vendor terms.
                  </p>
                </div>
              </section>

              {/* Disputes and Inquiries */}
              <section className="space-y-4 pt-2">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Dispute Resolution & Grievance Contact
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you have an unresolved query or dispute regarding your cancellation assessment, please contact our administrative desk:
                </p>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 text-xs space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Email for Dispute Notices:</span>
                      <a 
                        href="mailto:contact@shopatrip.in" 
                        className="text-sm font-bold text-[#38804e] hover:underline flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5" /> contact@shopatrip.in
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
                      <span className="text-slate-500 font-semibold block mb-1">Customer Care Helpline:</span>
                      <span className="font-semibold text-slate-800">{companyInfo.phoneDisplay}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block mb-1">Office Address:</span>
                      <span className="font-semibold text-slate-800">{companyInfo.location}</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Quick Navigation Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-4">
                  <Link href="/terms" className="text-[#38804e] font-bold hover:underline">
                    ← Full Terms & Conditions
                  </Link>
                  <Link href="/privacy" className="text-[#38804e] font-bold hover:underline">
                    Privacy Policy →
                  </Link>
                </div>
                <Link href="/contact" className="hover:text-slate-900 transition-colors">
                  Contact Office Desk
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
