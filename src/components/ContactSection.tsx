"use client";

import React, { useState } from "react";
import { companyInfo } from "@/data/company";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  CheckCircle2
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelMonth: "Upcoming Season",
    guests: "2 Adults",
    destination: "Kashmir Highlights",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitize = (str: string) => str.trim().slice(0, 500);
    const cleanName = sanitize(formData.name);
    const cleanPhone = sanitize(formData.phone);
    const cleanEmail = sanitize(formData.email);
    const cleanNotes = sanitize(formData.notes);

    const msg = `*New Travel Inquiry via Website*
Name: ${cleanName}
Phone: ${cleanPhone}
Email: ${cleanEmail || "N/A"}
Travel Month: ${formData.travelMonth}
Guests: ${formData.guests}
Preferred Destination: ${formData.destination}
Notes: ${cleanNotes || "None"}`;

    const waUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Get in touch
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-500">
            Gondola queries, road conditions, custom quotes — our local team picks up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Office Information & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0B1E15] via-[#112a1f] to-[#081710] text-white p-7 sm:p-8 rounded-3xl shadow-2xl border border-[#38804b]/30 space-y-6">
              {/* Subtle ambient light effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#38804b]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#38804b]/20 text-[#38804b] border border-[#38804b]/40 uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38804b] animate-pulse" />
                  Curated by Local Team
                </div>
                <h3 className="text-2xl font-extrabold text-white mt-1">{companyInfo.name}</h3>
                <p className="text-xs text-slate-300 font-serif italic mt-0.5">{companyInfo.tagline}</p>
              </div>

              <div className="relative z-10 space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#38804b]/20 text-[#38804b] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#38804b]/40 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Official Physical Address:</span>
                    <p className="text-slate-300 text-xs leading-relaxed mt-0.5">{companyInfo.fullAddress}</p>
                    <a
                      href={companyInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-[#38804b] hover:text-white mt-1.5 transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#38804b]/20 text-[#38804b] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#38804b]/40 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Direct Desk &amp; WhatsApp:</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                      <a href={`tel:${companyInfo.phones[0]}`} className="text-[#38804b] hover:text-white font-semibold text-xs transition-colors">
                        +91 8082495885
                      </a>
                      <span className="text-slate-500">•</span>
                      <a href={`tel:${companyInfo.phones[1]}`} className="text-[#38804b] hover:text-white font-semibold text-xs transition-colors">
                        +91 7780871705
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#38804b]/20 text-[#38804b] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#38804b]/40 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Official Email:</span>
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-white text-xs text-slate-300 transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#38804b]/20 text-[#38804b] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#38804b]/40 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Experience &amp; Office Hours:</span>
                    <p className="text-xs text-slate-300">3+ Years Field Experience • 24/7 On-Ground Support</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="relative z-10 pt-4 border-t border-[#38804b]/20 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Follow Our Journeys:</span>
                <div className="flex items-center space-x-2">
                  <a
                    href={companyInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-[#38804b] hover:bg-[#2b693f] text-white flex items-center justify-center transition-colors shadow-xs"
                    title="Instagram @shopatrip"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={companyInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-[#38804b] hover:bg-[#2b693f] text-white flex items-center justify-center transition-colors shadow-xs"
                    title="Facebook"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-[#38804b] hover:bg-[#2b693f] text-white flex items-center justify-center transition-colors shadow-xs"
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Map Link Widget */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#38804b]/10 text-[#38804b] flex items-center justify-center font-bold flex-shrink-0 border border-[#38804b]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Locate Gokhama Kunzer Office</h4>
                  <p className="text-[11px] text-slate-500">Tangmarg, Baramulla, Kashmir 193404</p>
                </div>
              </div>
              <a
                href={companyInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#38804b] hover:bg-[#2b693f] text-white text-xs font-semibold rounded-xl transition-colors flex-shrink-0 min-h-[40px] flex items-center shadow-xs"
              >
                Maps
              </a>
            </div>
          </div>

          {/* Right: Instant Trip Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h3 className="text-xl font-bold text-slate-900">Send an Instant Trip Inquiry</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill this quick form to receive customized package quotes and availability via WhatsApp & Email.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#38804b]/10 border border-[#38804b]/30 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#38804b] mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Thank You! Inquiry Forwarded</h4>
                <p className="text-xs text-slate-700 max-w-md mx-auto">
                  Your details have been pre-filled for WhatsApp. Our local team will share the complete itinerary and quote shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-[#38804b] font-semibold underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sameer Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. you@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Travel Season</label>
                    <select
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#38804b]"
                    >
                      <option>Next 30 Days</option>
                      <option>Spring (Mar - Apr)</option>
                      <option>Summer (May - Jun)</option>
                      <option>Autumn (Sep - Nov)</option>
                      <option>Winter Snow (Dec - Feb)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Travelers Count</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#38804b]"
                    >
                      <option>2 Adults (Couple)</option>
                      <option>Family (2 Adults + Kids)</option>
                      <option>Group (4-8 Persons)</option>
                      <option>Large Group (9+ Persons)</option>
                      <option>Solo Traveler</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Destinations of Interest</label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#38804b]"
                  >
                    <option>Kashmir Classic (Srinagar, Gulmarg, Pahalgam, Sonmarg)</option>
                    <option>Romantic Kashmir Honeymoon Special</option>
                    <option>Gurez Valley Frontier Expedition</option>
                    <option>Keran Valley Riverside Escape</option>
                    <option>Ladakh Grand Overland Circuit</option>
                    <option>Jammu, Katra Vaishno Devi & Kashmir Tour</option>
                    <option>Custom Multi-Valley Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Any Specific Requirements or Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about preferred dates, hotel choices (3-star / 4-star / Houseboat), or special celebrations..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#38804b] hover:bg-[#2b693f] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Submit & Request Quote via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
