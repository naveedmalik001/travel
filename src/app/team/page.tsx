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
  BadgeCheck, 
  MapPin, 
  Compass, 
  Car, 
  Award, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";

import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team | Leadership & Local Specialists | Shop A Trip Tour & Travels",
  description: "Meet the authentic local team behind Shop A Trip: Creative Director Mr. Aarif, Travel Consultant Imdad Bashir, Trip Advisors, Coordinators, and experienced Mountain Drivers.",
  openGraph: {
    title: "Meet Our Local Team | Shop A Trip Kashmir",
    description: "Authentic local team based in Tangmarg at the base of Gulmarg, Baramulla.",
    url: "https://shopatrip.in/team",
    images: ["/logo.jpg"],
  },
};

export default function TeamPage() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Team - Shop A Trip Tour & Travels",
    description: "Meet the local operations team and leadership at Shop A Trip Tour & Travels.",
    publisher: {
      "@type": "TravelAgency",
      name: companyInfo.name,
      url: "https://shopatrip.in",
    },
  };

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-emerald-100 selection:text-emerald-950 flex flex-col justify-between">
      <JsonLd data={teamSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs items={[{ name: "About Us", href: "/about" }, { name: "Our Team", href: "/team" }]} />

        {/* Hero Section */}
        <section className="relative bg-[#081f16] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#fbfdfb] rounded-tl-[2rem] rounded-tr-[2rem] hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 mb-5">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
              Direct On-Ground Specialists
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Meet Our <span className="text-emerald-300">Local Team</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              From our Creative Director and Senior Travel Consultants to dedicated Trip Coordinators, Social Media team, and experienced Mountain Drivers — meet the real people crafting your Himalayan journey.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#38804e] uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              People Behind the Journeys
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Passionate Local Mountain Specialists
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
              Headquartered at Gokhama Kunzer, Tangmarg at the base of Gulmarg, our operations team lives and breathes Kashmir travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Why Our Team Matters */}
        <section className="bg-slate-50 border-y border-slate-200/80 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#38804e] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  Local Accountability
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Why Booking with a Dedicated Local Team Makes All the Difference
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Unlike online booking portals that outsource your holiday to arbitrary third-party subcontractors, every driver, guide, and hotel coordinator on your trip is part of our direct local operations family.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#38804e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Zero Middlemen or Markups</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Direct transparent quotations straight from our Tangmarg base.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#38804e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Real-Time Pass & Weather Updates</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Live monitoring of Zoji La, Razdan Pass, Gulmarg Gondola, and snowfall alerts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#38804e] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">24/7 On-Ground Support</h4>
                      <p className="text-xs text-slate-500 mt-0.5">If you ever need medical help, vehicle swap, or permit assistance, we are already there.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Box */}
              <div className="relative rounded-3xl overflow-hidden border border-emerald-900/20 shadow-2xl bg-slate-900 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
                  alt="Tangmarg Gulmarg Base Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-xs uppercase font-bold text-emerald-300 tracking-wider">
                    Physical Headquarters
                  </span>
                  <h3 className="text-xl font-bold text-white">Gokhama Kunzer, Tangmarg Base</h3>
                  <p className="text-xs text-slate-300">
                    Located right at the doorstep of Gulmarg on the main Baramulla highway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="rounded-3xl bg-[#061e15] text-white p-8 sm:p-12 border border-emerald-900 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <span className="inline-flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5" />
                  Direct Access to Our Specialists
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Speak Directly with Our Local Travel Team
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                  Call or WhatsApp our team today for custom quotes, winter tips, and verified hotel stays across Jammu, Kashmir, and Ladakh.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team, I would like to consult your local team for trip planning.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#38804e] hover:bg-[#2b693f] text-white font-bold text-sm shadow-md transition-all min-h-[48px]"
                >
                  <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                  <span>WhatsApp Our Team</span>
                </a>
                <a
                  href={`tel:${companyInfo.phones[0]}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all min-h-[48px]"
                >
                  <Phone className="w-4 h-4 mr-2 text-emerald-400" />
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
