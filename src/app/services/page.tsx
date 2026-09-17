import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { companyInfo } from "@/data/company";
import { 
  Car, 
  Hotel, 
  Compass, 
  Heart, 
  Users, 
  ShieldCheck, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Ticket,
  BadgeCheck,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Cab Rentals Kashmir | Shop A Trip Tour & Travels",
  description: "Explore our travel services in Kashmir & Ladakh: Private cab rentals (Innova, Sedan, Tempo), 3-Star & 4-Star hotel bookings, Dal Lake houseboats, Gulmarg Gondola guides, and frontier permits.",
  keywords: [
    "Kashmir Cab Booking",
    "Srinagar Taxi Service",
    "Gulmarg Gondola Booking",
    "Dal Lake Houseboat Booking",
    "Kashmir Tour Services",
    "Shop A Trip Services"
  ],
  openGraph: {
    title: "Travel Services & Cab Rentals | Shop A Trip Kashmir",
    description: "Reliable private taxi rentals, inspected hotels, houseboat stays, and mountain activity assistance.",
    url: "https://shopatrip.in/services",
    images: ["/logo.jpg"],
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Himalayan Travel & Transportation Services",
    provider: {
      "@type": "TravelAgency",
      name: companyInfo.name,
      url: "https://shopatrip.in",
      telephone: companyInfo.phones[0],
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Jammu and Kashmir, Ladakh",
    },
  };

  const servicesList = [
    {
      title: "Private Cabs & Airport Transfers",
      desc: "Sanitized, commercially registered vehicles (Toyota Etios, Swift Dzire, Innova Crysta, Tempo Traveller, 4x4 Snow Cabs) with courteous mountain drivers for airport transfers, local sightseeing, and inter-city circuits.",
      icon: Car,
      accent: "emerald",
      features: [
        "Airport pick-and-drop at Srinagar & Jammu",
        "Pahalgam, Gulmarg & Sonmarg day excursions",
        "Snow-chain fitted 4x4 cabs for Tangmarg to Gulmarg winter ascent",
        "All toll, parking, driver allowance included"
      ],
      ctaText: "Inquire About Cab Rental"
    },
    {
      title: "Handpicked 3-Star & 4-Star Hotel Bookings",
      desc: "Guaranteed comfort in verified properties with 24/7 hot water, central heating / electric blankets, multi-cuisine dining, and mountain-facing balcony views in Srinagar, Gulmarg, Pahalgam, and Sonmarg.",
      icon: Hotel,
      accent: "blue",
      features: [
        "Strictly inspected hygiene and heating standards",
        "MAP Plan (Buffet Breakfast + Dinner included)",
        "Boutique resorts in pine valleys",
        "Pre-negotiated competitive rates"
      ],
      ctaText: "Book Verified Hotels"
    },
    {
      title: "Heritage Houseboat & Shikara Rides",
      desc: "Experience timeless Kashmiri romance aboard handcrafted cedarwood houseboats moored on peaceful Dal Lake and Nigeen Lake, complete with authentic Kashmiri Kahwa and twilight Shikara rides.",
      icon: MapPin,
      accent: "emerald",
      features: [
        "Carved walnut furniture & antique chandeliers",
        "Private sun deck overlooking the Zabarwan hills",
        "Complimentary 1-hour sunset Shikara ride",
        "Traditional home-cooked Kashmiri Wazwan meals"
      ],
      ctaText: "Reserve Houseboat Stay"
    },
    {
      title: "Honeymoon & Romantic Packages",
      desc: "Tailor-made itineraries for couples and newlyweds featuring floral bed decorations, surprise anniversary/honeymoon cakes, private candlelit dinners on Dal Lake, and intimate snow sessions in Gulmarg.",
      icon: Heart,
      accent: "rose",
      features: [
        "Bed flower decoration upon arrival",
        "Romantic candlelight dinner on houseboat",
        "Honeymoon celebration cake included",
        "Exclusive private cab without co-passengers"
      ],
      ctaText: "Plan Honeymoon Trip"
    },
    {
      title: "Gulmarg Gondola & Winter Sports Coordination",
      desc: "Based in Tangmarg at the doorstep of Gulmarg, we assist travelers with Gondola Phase 1 & Phase 2 cable car slot planning, ski equipment rental, and certified ski coaching.",
      icon: Ticket,
      accent: "violet",
      features: [
        "Phase 1 (Kongdoori) & Phase 2 (Apharwat) guidance",
        "Ski boots, jackets, and snowboard rentals",
        "Certified instructors for beginner & intermediate skiers",
        "Real-time snow and weather updates"
      ],
      ctaText: "Get Gulmarg Assistance"
    },
    {
      title: "Offbeat Frontier & Ladakh Permits",
      desc: "End-to-end permit clearance and 4x4 vehicle logistics for restricted border areas including Gurez Valley, Razdan Pass, Tulail, Keran Valley Line of Control, and high-pass Leh Ladakh routes.",
      icon: Compass,
      accent: "teal",
      features: [
        "Border area permit clearances",
        "Local union cab transfers at critical junctions",
        "Pangong Tso & Nubra Valley Inner Line Permits",
        "24/7 emergency mountain support"
      ],
      ctaText: "Inquire Offbeat Permits"
    },
  ];

  const accentClasses: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
    teal: "bg-teal-50 text-teal-700 border-teal-100",
  };

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      <JsonLd data={serviceSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

        {/* Hero Banner */}
        <section className="relative bg-[#081f16] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#fbfdfb] rounded-tl-[2rem] rounded-tr-[2rem] hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 mb-5">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
              Comprehensive Travel &amp; Transport Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Premium Services by{" "}
              <span className="text-emerald-300">Local Kashmir Specialists</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              From dedicated taxi rentals and inspected mountain stays to Gulmarg Gondola guidance and frontier border permits, our Tangmarg headquarters has you covered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Everything You Need for a Perfect Trip
            </h2>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              Six specialized services — all handled in-house from our Tangmarg base.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((srv, idx) => {
              const IconComponent = srv.icon;
              const accentClass = accentClasses[srv.accent] || accentClasses.emerald;
              const waUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                `Hello Shop A Trip Team! I want to inquire about your "${srv.title}" service. Please share details & pricing.`
              )}`;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${accentClass} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {srv.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {srv.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-[#081f16] hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 shadow-sm min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{srv.ctaText}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Fleet Section */}
        <section className="bg-slate-50 border-y border-slate-200/80 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
                <Car className="w-4 h-4" />
                Our Commercial Fleet
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Comfortable Vehicles for Every Group Size
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
                All vehicles are commercially licensed, insured, sanitized, and driven by background-verified local drivers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  label: "Couples & Small Families",
                  title: "Toyota Etios / Swift Dzire",
                  capacity: "Up to 4 Guests + Luggage",
                  badge: "Ideal for classic valley tours",
                },
                {
                  label: "Premium Comfort & Mountains",
                  title: "Toyota Innova Crysta",
                  capacity: "6–7 Guests + Luggage",
                  badge: "Best for passes & long drives",
                },
                {
                  label: "Winter Snow Ascents",
                  title: "4x4 Snow Chain Vehicles",
                  capacity: "4–6 Guests",
                  badge: "Mandatory for Tangmarg–Gulmarg snow",
                },
                {
                  label: "Groups & Corporate Tours",
                  title: "12–17 Seater Tempo Traveller",
                  capacity: "12 to 17 Guests + Luggage",
                  badge: "Spacious push-back seats & AC",
                },
              ].map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Car className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">{v.label}</span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{v.title}</h3>
                  <p className="text-xs text-slate-500">{v.capacity}</p>
                  <span className="text-xs font-semibold text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 w-full text-center">
                    {v.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="rounded-3xl bg-[#061e15] text-white p-8 sm:p-12 border border-emerald-900 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                  Not sure which service you need?
                </h3>
                <p className="text-sm text-emerald-100/80 leading-relaxed">
                  Call or WhatsApp our Tangmarg team. We'll craft the perfect package matching your budget, group size, and dates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I need help choosing the right service for my Kashmir trip.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#38804e] hover:bg-[#2b693f] text-white font-bold text-sm shadow-md transition-all min-h-[48px]"
                >
                  <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href={`tel:${companyInfo.phones[0]}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all min-h-[48px]"
                >
                  <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>Call Now</span>
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
