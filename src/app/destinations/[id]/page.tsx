import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PackageCard from "@/components/PackageCard";
import { destinations } from "@/data/destinations";
import { tourPackages } from "@/data/packages";
import { companyInfo } from "@/data/company";
import { 
  Mountain, 
  Calendar, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({
    id: d.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    return {
      title: "Destination Not Found | Shop A Trip Tour & Travels",
      description: "Himalayan destination guide not found.",
    };
  }

  return {
    title: `${dest.name} Travel Guide 2026 | Top Attractions, Altitude & Best Time | Shop A Trip`,
    description: `${dest.tagline}. ${dest.description.slice(0, 150)}... Local Tangmarg base insights and custom packages.`,
    keywords: [
      `${dest.name} Travel Guide`,
      `Visit ${dest.name} Kashmir`,
      `${dest.name} Best Time`,
      `${dest.name} Tour Packages`,
      dest.region,
      "Shop A Trip Kashmir"
    ],
    openGraph: {
      title: `${dest.name} Travel Guide | Shop A Trip Kashmir`,
      description: dest.tagline,
      url: `https://shopatrip.in/destinations/${dest.id}`,
      images: [
        {
          url: dest.image,
          width: 1200,
          height: 800,
          alt: dest.name,
        },
      ],
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    notFound();
  }

  // Schema.org TouristDestination
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: dest.name,
    description: dest.description,
    touristType: dest.idealFor,
    image: dest.image,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: dest.region,
    },
    includesAttraction: dest.topAttractions.map((att) => ({
      "@type": "TouristAttraction",
      name: att.name,
      description: att.desc,
    })),
  };

  // Find packages visiting this destination
  const destLower = dest.name.toLowerCase();
  const relatedPackages = tourPackages.filter((pkg) => {
    return (
      pkg.title.toLowerCase().includes(destLower) ||
      pkg.subtitle.toLowerCase().includes(destLower) ||
      pkg.overview.toLowerCase().includes(destLower) ||
      pkg.itinerary.some(
        (day) =>
          day.title.toLowerCase().includes(destLower) ||
          day.route.toLowerCase().includes(destLower) ||
          day.description.toLowerCase().includes(destLower)
      )
    );
  });

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    `Hello Shop A Trip Team! I want to plan a trip to ${dest.name}. Please share customized package options & cab rates.`
  )}`;

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      <JsonLd data={destinationSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs
          items={[
            { name: "Destinations", href: "/destinations" },
            { name: dest.name, href: `/destinations/${dest.id}` },
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-[#061811] text-white overflow-hidden py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-950">
          <div className="absolute inset-0 z-0">
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              priority
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061811] via-[#061811]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/40">
                {dest.region}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-pine-950 flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                Himalayan Destination
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
              {dest.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-emerald-200/90 font-medium max-w-3xl">
              {dest.tagline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-xs">Altitude:</span>
                <span className="font-bold text-white flex items-center mt-1">
                  <Mountain className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                  {dest.altitude}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Distance:</span>
                <span className="font-bold text-white flex items-center mt-1 truncate">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-400 flex-shrink-0" />
                  {dest.distanceFromSrinagar}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Best Season:</span>
                <span className="font-bold text-white flex items-center mt-1 truncate">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-emerald-400 flex-shrink-0" />
                  {dest.bestTimeToVisit}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* About Destination */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-emerald-600" />
                  About {dest.name}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {dest.description}
                </p>

                {/* Highlights List */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Must-Experience Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {dest.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                        <span className="font-medium">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Attractions in Detail */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-emerald-600" />
                  Top Attractions & Sightseeing Spots
                </h2>

                <div className="space-y-4">
                  {dest.topAttractions.map((att, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 transition-colors"
                    >
                      <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center mr-2.5 flex-shrink-0">
                          {idx + 1}
                        </span>
                        {att.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                        {att.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Tangmarg Base Insider Tips */}
              <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 border border-emerald-900 shadow-soft relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 text-amber-400 text-xs uppercase font-bold tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Tangmarg Base Expert Insider Tips</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    How We Make Your {dest.name} Journey Hassle-Free
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/90">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-2 flex-shrink-0" />
                      <span><strong>Direct Cab Coordination:</strong> Private sanitized vehicles with experienced mountain drivers familiar with passes, snow chain checkpoints, and scenic halts.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-2 flex-shrink-0" />
                      <span><strong>Permit & Pass Clearance:</strong> Full on-ground support for frontier border permits (Keran & Gurez) and Gondola Phase 1 & 2 slot reservations in Gulmarg.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-2 flex-shrink-0" />
                      <span><strong>Inspected Stays:</strong> Guaranteed central heating / heated blankets, round-the-clock warm running water, and hot Kashmiri Wazwan / multi-cuisine food.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Column: CTA & Quick Contact */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-28 space-y-6">
                
                {/* Book Custom Trip Box */}
                <div className="bg-white rounded-2xl p-6 border-2 border-emerald-600/30 shadow-card">
                  <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">
                    Plan Your Visit
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">
                    Want to visit {dest.name}?
                  </h3>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    Let our local Tangmarg team craft a customized day excursion or multi-day itinerary with verified hotel stays and dedicated cabs.
                  </p>

                  <div className="space-y-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm transition-all text-center flex items-center justify-center space-x-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>WhatsApp {dest.name} Inquiry</span>
                    </a>

                    <Link
                      href="/custom-planner"
                      className="w-full py-3 px-4 rounded-xl bg-pine-900 hover:bg-pine-800 text-amber-300 font-semibold text-xs transition-colors text-center flex items-center justify-center space-x-2"
                    >
                      <span>Calculate Estimated Trip Cost</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`tel:${companyInfo.phones[0]}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors text-center flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Call {companyInfo.phoneDisplay}</span>
                    </a>
                  </div>
                </div>

                {/* Quick Info Box */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Ideal Traveler Types
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.idealFor.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Related Tour Packages */}
          {relatedPackages.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Tour Packages Featuring {dest.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Book these ready-made itineraries with verified hotels, meals, and dedicated cabs.
                  </p>
                </div>
                <Link
                  href="/packages"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center"
                >
                  <span>View All Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPackages.slice(0, 3).map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
