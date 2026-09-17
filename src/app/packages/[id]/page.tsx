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
import { tourPackages } from "@/data/packages";
import { companyInfo } from "@/data/company";
import { buildPackageWhatsAppUrl } from "@/data/whatsapp";
import PackageDetailInquiry from "./PackageDetailInquiry";
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  Hotel, 
  Utensils, 
  Car, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  ArrowLeft, 
  Share2, 
  Calendar,
  Compass,
  BadgeCheck,
  ArrowRight
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tourPackages.map((pkg) => ({
    id: pkg.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const pkg = tourPackages.find((p) => p.id === id);

  if (!pkg) {
    return {
      title: "Package Not Found | Shop A Trip Tour & Travels",
      description: "Tour package not found.",
    };
  }

  return {
    title: `${pkg.title} (${pkg.duration}) | Shop A Trip Kashmir`,
    description: `${pkg.subtitle}. ${pkg.overview.slice(0, 150)}... Book directly with local Tangmarg operators.`,
    keywords: [
      pkg.title,
      `${pkg.title} package`,
      "Kashmir Tour Package",
      `${pkg.duration} Kashmir itinerary`,
      "Shop A Trip Kashmir",
      pkg.category,
      pkg.startingPoint,
      pkg.endingPoint,
    ],
    openGraph: {
      title: `${pkg.title} - ${pkg.duration} | Shop A Trip`,
      description: pkg.subtitle,
      url: `https://shopatrip.in/packages/${pkg.id}`,
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 800,
          alt: pkg.title,
        },
      ],
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { id } = await params;
  const pkg = tourPackages.find((p) => p.id === id);

  if (!pkg) {
    notFound();
  }

  // Schema.org TouristTrip structured data
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.overview,
    touristType: pkg.category,
    offers: {
      "@type": "Offer",
      price: pkg.priceFrom.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      url: `https://shopatrip.in/packages/${pkg.id}`,
    },
    provider: {
      "@type": "TravelAgency",
      name: companyInfo.name,
      telephone: companyInfo.phones[0],
      url: "https://shopatrip.in",
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: pkg.itinerary.length,
      itemListElement: pkg.itinerary.map((day, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristAttraction",
          name: `Day ${day.day}: ${day.title}`,
          description: day.description,
        },
      })),
    },
  };

  const whatsappUrl = buildPackageWhatsAppUrl(pkg);

  const relatedPackages = tourPackages
    .filter((p) => p.id !== pkg.id && (p.category === pkg.category || p.division === pkg.division))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      <JsonLd data={touristTripSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs
          items={[
            { name: "Tour Packages", href: "/packages" },
            { name: pkg.title, href: `/packages/${pkg.id}` },
          ]}
        />

        {/* Hero Banner Section */}
        <section className="relative bg-[#061811] text-white overflow-hidden py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-950">
          <div className="absolute inset-0 z-0">
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              priority
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061811] via-[#061811]/85 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#38804e] text-white shadow-sm">
                {pkg.tag}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                {pkg.category}
              </span>
              {pkg.featured && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <BadgeCheck className="w-3 h-3" />
                  Recommended Departure
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
              {pkg.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-emerald-100/90 max-w-3xl leading-relaxed">
              {pkg.subtitle}
            </p>

            {/* Key Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-xs">Duration:</span>
                <span className="font-bold text-white flex items-center mt-0.5">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                  {pkg.duration}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Route:</span>
                <span className="font-bold text-white flex items-center mt-0.5 truncate">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-emerald-400 flex-shrink-0" />
                  {pkg.startingPoint} → {pkg.endingPoint}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Stay Category:</span>
                <span className="font-bold text-white flex items-center mt-0.5 truncate">
                  <Hotel className="w-3.5 h-3.5 mr-1.5 text-emerald-400 flex-shrink-0" />
                  {pkg.hotelCategory}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Pricing Plan:</span>
                <span className="font-bold text-white flex items-center mt-0.5 text-sm sm:text-base text-emerald-300">
                  Custom Quote on WhatsApp
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Details & Content Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left 2 Columns: Overview, Itinerary Timeline, Inclusions, Hotels */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Tour Overview */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-emerald-600" />
                  Package Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {pkg.overview}
                </p>

                {/* Photo Gallery Grid */}
                {pkg.gallery && pkg.gallery.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Tour Photo Highlights
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {pkg.gallery.map((imgUrl, idx) => (
                        <div key={idx} className="relative h-28 sm:h-36 rounded-xl overflow-hidden shadow-sm">
                          <Image
                            src={imgUrl}
                            alt={`${pkg.title} photo ${idx + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Day-Wise Timeline Itinerary */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-2">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
                      Day-Wise Detailed Itinerary
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Customizable according to your arrival flight and flight departure times.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                    {pkg.days} Days / {pkg.nights} Nights
                  </span>
                </div>

                <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-emerald-100">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-10">
                      {/* Day number bullet */}
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-[#38804e] text-white font-bold text-xs flex items-center justify-center border-2 border-white shadow-sm ring-2 ring-emerald-600/30">
                        {day.day}
                      </div>

                      <div className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-emerald-200 transition-colors">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900">
                            Day {day.day}: {day.title}
                          </h3>
                        </div>

                        {/* Route Tag */}
                        <div className="flex items-center text-xs font-semibold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-md mb-3 w-fit">
                          <MapPin className="w-3 h-3 mr-1 text-emerald-600" />
                          <span>{day.route}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {day.description}
                        </p>

                        {/* Highlights pills */}
                        {day.highlights && day.highlights.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                            {day.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="text-[11px] font-medium bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 shadow-2xs"
                              >
                                ✓ {h}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Stay & Meal footer */}
                        <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                          <span className="flex items-center font-medium text-slate-700">
                            <Hotel className="w-3.5 h-3.5 mr-1 text-pine-700" />
                            Stay: {day.stayLocation}
                          </span>
                          <span className="flex items-center font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                            <Utensils className="w-3.5 h-3.5 mr-1" />
                            {day.meals}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200/80">
                  <h3 className="text-base font-bold text-emerald-950 mb-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" />
                    What's Included
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2 flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                  <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
                    <XCircle className="w-5 h-5 mr-2 text-rose-500" />
                    What's Excluded
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 mr-2 flex-shrink-0" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hotel Category & Accommodation details */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                  <Hotel className="w-5 h-5 mr-2 text-emerald-600" />
                  Accommodation & Verified Hotel Standards
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  We handpick and inspect every property to ensure clean linen, 24/7 hot water, central heating / electric blankets during winters, and hygienic multi-cuisine dining.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700">
                        <th className="p-3 font-semibold rounded-l-xl">Destination</th>
                        <th className="p-3 font-semibold rounded-r-xl">Hotel / Stay Partner Category</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {pkg.hotelDetails.map((item, i) => (
                        <tr key={i} className="hover:bg-slate-50/80">
                          <td className="p-3 font-semibold text-slate-900">{item.location}</td>
                          <td className="p-3 text-slate-600">{item.hotel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Booking & Direct Inquiry Box */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-28 space-y-6">
                
                {/* Price & Instant WhatsApp Box */}
                <div className="bg-white rounded-2xl p-6 border-2 border-emerald-600/30 shadow-card">
                  <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">
                    Package Pricing
                  </span>
                  <div className="mt-1 mb-3">
                    <span className="text-2xl font-extrabold text-slate-900">Custom Quote for Trip</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Best direct rates based on your dates & group size</span>
                  </div>

                  <p className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 mb-5">
                    Includes 3-Star/4-Star stay, MAP meal plan (Breakfast &amp; Dinner), private cab for all days, airport transfers &amp; taxes.
                  </p>

                  <div className="space-y-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-sm transition-all text-center flex items-center justify-center space-x-2 shadow-md transform hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Get Quote for Trip on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${companyInfo.phones[0]}`}
                      className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors text-center flex items-center justify-center space-x-2 border border-slate-200"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#38804e]" />
                      <span>Call {companyInfo.phones[0]}</span>
                    </a>
                  </div>

                  {/* Local base badge */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center space-x-3 text-xs text-slate-600">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Tangmarg Headquarters: On-ground coordination for snow chains, cable car, & union taxis.</span>
                  </div>
                </div>

                {/* Direct Lead Inquiry Form */}
                <PackageDetailInquiry packageTitle={pkg.title} packageDuration={pkg.duration} />

              </div>
            </div>

          </div>

          {/* Related Packages Carousel / Grid */}
          {relatedPackages.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    You Might Also Like
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Similar handpicked departures and offbeat expeditions.
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPackages.map((rel) => (
                  <div key={rel.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between">
                    <div className="relative h-44 w-full">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#38804e] text-white">
                        {rel.duration}
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{rel.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1">{rel.subtitle}</p>
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#38804e]">Custom Quote</span>
                        <Link
                          href={`/packages/${rel.id}`}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                        >
                          View Plan →
                        </Link>
                      </div>
                    </div>
                  </div>
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
