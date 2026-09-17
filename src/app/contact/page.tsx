import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactSection from "@/components/ContactSection";
import { companyInfo } from "@/data/company";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  BadgeCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Shop A Trip Tour & Travels - Tangmarg Gulmarg Kashmir",
  description: "Get in touch with Shop A Trip Tour & Travels office in Gokhama Kunzer, Tangmarg, Baramulla. Direct phone numbers (+91 8082495885 / +91 7780871705), WhatsApp, email & Google Maps directions.",
  keywords: [
    "Contact Shop A Trip",
    "Tangmarg Travel Agency Contact",
    "Gulmarg Tour Operator Phone Number",
    "Kashmir Tour Inquiry",
    "Shop A Trip Office Address"
  ],
  openGraph: {
    title: "Contact Shop A Trip Tour & Travels | Tangmarg Kashmir",
    description: "Connect with our local travel team for custom Kashmir & Ladakh tour bookings.",
    url: "https://shopatrip.in/contact",
    images: ["/logo.jpg"],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Shop A Trip Tour & Travels",
    description: "Contact information and office details for Shop A Trip Tour & Travels in Tangmarg, Baramulla.",
    url: "https://shopatrip.in/contact",
    mainEntity: {
      "@type": "TravelAgency",
      name: companyInfo.name,
      telephone: companyInfo.phones[0],
      email: companyInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.address,
        addressLocality: "Tangmarg, Baramulla",
        addressRegion: "Jammu and Kashmir",
        postalCode: "193404",
        addressCountry: "IN",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      <JsonLd data={contactSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs items={[{ name: "Contact Us", href: "/contact" }]} />

        {/* Hero Banner */}
        <section className="relative bg-[#081f16] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#fbfdfb] rounded-tl-[2rem] rounded-tr-[2rem] hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 mb-5">
              <BadgeCheck className="w-3.5 h-3.5 text-[#38804e]" />
              Direct Tangmarg Operations Office
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Get in Touch with Our{" "}
              <span className="text-[#38804e]">Local Travel Team</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              Have questions about snow conditions, cab permits, hotels, or want a custom quotation? We are here to help you 7 days a week.
            </p>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg flex flex-col gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Direct Calling</h3>
                  <span className="text-xs text-slate-500">Available 8:00 AM – 10:00 PM</span>
                </div>
              </div>
              <div className="space-y-2 text-sm font-bold text-slate-900">
                <a href={`tel:${companyInfo.phones[0]}`} className="hover:text-emerald-700 transition-colors flex items-center gap-2 min-h-[44px] bg-slate-50 rounded-xl px-3 py-2 border border-slate-100">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  {companyInfo.phones[0]}
                </a>
                <a href={`tel:${companyInfo.phones[1]}`} className="hover:text-emerald-700 transition-colors flex items-center gap-2 min-h-[44px] bg-slate-50 rounded-xl px-3 py-2 border border-slate-100">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  {companyInfo.phones[1]}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg flex flex-col gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-[#38804e]/10 text-[#38804e] flex items-center justify-center flex-shrink-0 border border-[#38804e]/20">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Instant WhatsApp Chat</h3>
                  <span className="text-xs text-slate-500">Quick 15-min response</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-emerald-50 rounded-xl px-3 py-2.5 border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-[#38804e] animate-pulse flex-shrink-0" />
                <span className="font-medium text-emerald-800">Team is online — typically replies in minutes</span>
              </div>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I want to inquire about tour packages.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#38804e] hover:bg-[#2b693f] text-white text-sm font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>

            {/* Office Location Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg flex flex-col gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Headquarters Office</h3>
                  <span className="text-xs text-slate-500">Tangmarg, Baramulla</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-emerald-50/60 rounded-xl px-3 py-2.5 border border-emerald-100/80">
                {companyInfo.fullAddress}
              </p>
              <a
                href={companyInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#0B1E15] hover:bg-emerald-900 text-emerald-300 text-sm font-bold text-center transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>
        </section>

        {/* Hours & Trust */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, label: "Office Hours", value: "8:00 AM – 10:00 PM", sub: "7 days a week" },
              { icon: ShieldCheck, label: "Govt. Registered", value: "Tour Operator", sub: "J&K Tourism Board" },
              { icon: Mail, label: "Email Us", value: companyInfo.email, sub: "We respond within 2–4 hrs" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">{item.label}</p>
                    <p className="font-bold text-slate-900 text-sm">{item.value}</p>
                    <p className="text-[11px] text-slate-400">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailed Contact Section with Map & Form */}
        <ContactSection />
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
