import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { companyInfo } from "@/data/company";
import { 
  Award, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Users, 
  Car, 
  Hotel, 
  CheckCircle2, 
  ArrowRight,
  BadgeCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Shop A Trip Tour & Travels (Peace & You) - Tangmarg Kashmir",
  description: "Learn about Shop A Trip Tour & Travels. Headquartered in Tangmarg at the base of Gulmarg, Baramulla with 6+ years of excellence in curating authentic Kashmir, Gurez, Keran, and Ladakh tours.",
  keywords: [
    "About Shop A Trip",
    "Peace & You Kashmir",
    "Tangmarg Travel Agency",
    "Gulmarg Tour Operator",
    "Kashmir Local Travel Company",
    "Baramulla Travel Agency"
  ],
  openGraph: {
    title: "About Shop A Trip Tour & Travels | Peace & You",
    description: "6+ Years of field excellence based in Tangmarg, Baramulla, Jammu & Kashmir.",
    url: "https://shopatrip.in/about",
    images: ["/logo.jpg"],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Shop A Trip Tour & Travels",
    description: "Company profile, origins, local Tangmarg base, and tourism philosophy of Shop A Trip Tour & Travels.",
    url: "https://shopatrip.in/about",
    mainEntity: {
      "@type": "TravelAgency",
      name: companyInfo.name,
      alternateName: "Peace & You",
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

  const values = [
    {
      title: "Direct Local Ground Operations",
      desc: "Unlike aggregators in distant metro cities, our operations center is situated directly in Tangmarg (Kunzer), the gateway to Gulmarg. We handle every vehicle, driver, and hotel stay ourselves.",
      icon: Compass,
    },
    {
      title: "100% Inspected Accommodations",
      desc: "We personally inspect every hotel room, central heating setup, electric blanket, and houseboat bathroom before recommending it to couples and families.",
      icon: Hotel,
    },
    {
      title: "Dedicated Mountain Drivers",
      desc: "Our drivers are seasoned mountain navigators with clean commercial licenses, gentle temperaments, and extensive experience navigating snowy roads, Zoji La pass, and Razdan pass.",
      icon: Car,
    },
    {
      title: "Transparent & Honest Pricing",
      desc: "Clear upfront quotes with no hidden fuel charges, driver fees, or unexpected costs. What we promise in the itinerary is precisely what you receive.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      <JsonLd data={aboutSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />

        {/* Hero Banner */}
        <section className="relative bg-[#081f16] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent pointer-events-none" />
          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#fbfdfb] rounded-tl-[2rem] rounded-tr-[2rem] hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 mb-5">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
              Peace &amp; You · Local Kashmiri Hospitality
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Rooted in the Valleys,{" "}
              <span className="text-amber-400">Trusted by Thousands</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              With 6+ years of dedicated service in Jammu, Kashmir, and Ladakh, Shop A Trip Tour &amp; Travels was founded to provide authentic, safe, and transparent Himalayan travel experiences.
            </p>

            {/* Stat row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              {[
                { value: "6+", label: "Years of Excellence" },
                { value: "200+", label: "Happy Travelers" },
                { value: "4.9", label: "Google Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400">{stat.value}</span>
                  <span className="block text-xs text-emerald-300/80 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                <Award className="w-3.5 h-3.5 mr-1.5 text-emerald-700" />
                Our Story &amp; Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                Why &ldquo;Peace &amp; You&rdquo; is More Than Just a Tagline
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Shop A Trip Tour &amp; Travels was established with a singular mission: to let travelers experience Kashmir's breathtaking serenity (&ldquo;Peace&rdquo;) tailored intimately to each guest (&ldquo;You&rdquo;).
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating directly from Gokhama Kunzer, Tangmarg—right at the gateway of Gulmarg—our founders realized that mainstream travel portals often sell cookie-cutter tours without understanding real mountain conditions, winter snow chain requirements, or authentic local connections. We bridge that gap with genuine local warmth, private vehicle networks, and 24/7 on-ground supervision.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 shadow-sm">
                  <span className="text-3xl font-extrabold text-emerald-800 block">6+</span>
                  <span className="text-xs text-slate-500 font-medium mt-1 block">Years Field Excellence</span>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 shadow-sm">
                  <span className="text-3xl font-extrabold text-amber-700 block">200+</span>
                  <span className="text-xs text-slate-500 font-medium mt-1 block">Happy Travelers Hosted</span>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div className="relative rounded-3xl overflow-hidden border border-emerald-900/20 shadow-2xl bg-slate-900 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
                alt="Tangmarg Gulmarg Kashmir"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Tangmarg Operations Base</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Direct coordination at the base of Gulmarg for cable car tickets, snow equipment, and local union taxi transfers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="bg-slate-50 border-y border-slate-200/80 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
                <Compass className="w-4 h-4" />
                The Tangmarg Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What Sets Shop A Trip Apart
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
                Every trip is backed by our direct local infrastructure and hands-on hospitality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => {
                const IconComponent = v.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-100">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{v.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Credentials Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: ShieldCheck, label: "Govt. Registered", sub: "Tour Operator, J&K" },
              { icon: Users, label: "200+ Guests", sub: "Hosted Successfully" },
              { icon: Award, label: "6+ Years", sub: "Kashmir Specialists" },
              { icon: CheckCircle2, label: "Zero Hidden Fees", sub: "Transparent Pricing" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm text-center flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{item.label}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Direct Contact / Headquarters strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
          <div className="rounded-3xl bg-[#061e15] text-white p-8 sm:p-12 border border-emerald-900 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5" />
                  Ready to plan your journey?
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Speak Directly with Our Tangmarg Concierge Team
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                  Whether you need a custom honeymoon itinerary, an offbeat Gurez-Keran exploration, or a high-pass Ladakh road trip, we are just a call or message away.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I would like to plan a trip to Kashmir/Ladakh.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition-all min-h-[48px]"
                >
                  <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href={`tel:${companyInfo.phones[0]}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all min-h-[48px]"
                >
                  <Phone className="w-4 h-4 mr-2 text-amber-400" />
                  <span>Call {companyInfo.phones[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
