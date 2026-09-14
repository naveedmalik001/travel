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
  Compass, 
  ShieldCheck, 
  CheckCircle2 
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
        <section className="relative bg-[#081f16] text-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 mb-4">
              ★ Direct Tangmarg Operations Office
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Get in Touch with Our <span className="text-amber-400">Local Travel Team</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              Have questions about snow conditions, cab permits, hotels, or want a custom quotation? We are here to help you 7 days a week.
            </p>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Direct Calling</h3>
                  <span className="text-xs text-slate-500">Available 8:00 AM – 10:00 PM</span>
                </div>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm font-bold text-pine-900">
                <div>
                  <a href={`tel:${companyInfo.phones[0]}`} className="hover:text-amber-600 transition-colors block">
                    {companyInfo.phones[0]}
                  </a>
                </div>
                <div>
                  <a href={`tel:${companyInfo.phones[1]}`} className="hover:text-amber-600 transition-colors block">
                    {companyInfo.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Instant WhatsApp Chat</h3>
                  <span className="text-xs text-slate-500">Quick 15-min response</span>
                </div>
              </div>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I want to inquire about tour packages.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold text-center transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>

            {/* Office Location Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Headquarters Office</h3>
                  <span className="text-xs text-slate-500">Tangmarg, Baramulla</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {companyInfo.fullAddress}
              </p>
            </div>

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
