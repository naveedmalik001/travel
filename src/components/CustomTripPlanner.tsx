"use client";

import React, { useState, useMemo } from "react";
import { companyInfo } from "@/data/company";
import { 
  Calculator, 
  MapPin, 
  Calendar, 
  Users, 
  Hotel, 
  Car, 
  Utensils, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  Compass,
  PhoneCall
} from "lucide-react";

export default function CustomTripPlanner() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    "Srinagar & Dal Lake",
    "Gulmarg (Tangmarg)",
    "Pahalgam",
  ]);
  const [days, setDays] = useState<number>(6);
  const [travelers, setTravelers] = useState<number>(2);
  const [hotelTier, setHotelTier] = useState<"3star" | "4star" | "luxury">("3star");
  const [vehicle, setVehicle] = useState<"sedan" | "innova" | "suv4x4" | "tempo">("sedan");
  const [travelMonth, setTravelMonth] = useState<string>("Upcoming Month");
  const [userName, setUserName] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");

  const destinationGroups = [
    {
      division: "Kashmir Valley & Meadows",
      options: [
        { id: "Srinagar & Dal Lake", name: "Srinagar & Dal Lake Houseboat" },
        { id: "Gulmarg (Tangmarg)", name: "Gulmarg Meadows & Gondola" },
        { id: "Pahalgam", name: "Pahalgam & Betaab Valley" },
        { id: "Sonmarg", name: "Sonmarg & Thajiwas Glacier" },
        { id: "Doodhpathri", name: "Doodhpathri Valley of Milk" },
        { id: "Yusmarg", name: "Yusmarg & Nilnag Lake" },
        { id: "Aharbal Waterfall", name: "Aharbal Waterfall & Gorge" },
        { id: "Kokernag & Verinag", name: "Kokernag & Verinag Springs" },
      ]
    },
    {
      division: "Offbeat Frontiers",
      options: [
        { id: "Gurez Valley", name: "Gurez Valley & Habba Khatoon" },
        { id: "Keran Valley", name: "Keran Valley (Border Riverside)" },
        { id: "Bangus Valley", name: "Bangus Valley Alpine Meadows" },
        { id: "Lolab Valley", name: "Lolab Valley Fruit Belt" },
        { id: "Sinthan & Margan Top", name: "Sinthan & Margan High Passes" },
        { id: "Peer Ki Gali", name: "Peer Ki Gali & Mughal Road" },
      ]
    },
    {
      division: "Ladakh & Kargil Division",
      options: [
        { id: "Leh & Sham Valley", name: "Leh Town & Ancient Monasteries" },
        { id: "Nubra Valley & Turtuk", name: "Nubra Valley Sand Dunes & Turtuk" },
        { id: "Pangong Tso Lake", name: "Pangong Tso High-Altitude Lake" },
        { id: "Tso Moriri & Tso Kar", name: "Tso Moriri & Changthang Lakes" },
        { id: "Hanle & Umling La", name: "Hanle & Umling La (19,024 ft Pass)" },
        { id: "Zanskar Valley", name: "Zanskar Valley & Phuktal Gompa" },
        { id: "Kargil & Suru Valley", name: "Kargil, Drass & Suru Valley" },
        { id: "Dah-Hanu Aryan Valley", name: "Dah-Hanu Aryan Culture" },
      ]
    },
    {
      division: "Jammu & Kishtwar Division",
      options: [
        { id: "Katra & Vaishno Devi", name: "Katra & Shri Mata Vaishno Devi" },
        { id: "Patnitop & Sanasar", name: "Patnitop Pine Ridge & Sanasar" },
        { id: "Kishtwar & Saffron Plateau", name: "Kishtwar & National Park" },
        { id: "Paddar & Machail Mata", name: "Paddar Sapphire Valley & Machail" },
        { id: "Warwan & Marwah", name: "Warwan & Marwah Isolated Valleys" },
        { id: "Bhaderwah & Jai Valley", name: "Bhaderwah (Mini Switzerland)" },
        { id: "Jammu City & Mansar", name: "Jammu City & Mansar Lake" },
        { id: "Poonch & Rajouri", name: "Poonch Fort & Loran Valley" },
        { id: "Basohli & Ranjit Sagar", name: "Basohli & Ranjit Sagar Lake" },
      ]
    }
  ];

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== dest));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  // Dynamic cost estimate calculation
  const estimatedTotal = useMemo(() => {
    let basePerDayPerPerson = 2800; // 3-star MAP
    if (hotelTier === "4star") basePerDayPerPerson = 4200;
    if (hotelTier === "luxury") basePerDayPerPerson = 6500;

    // Offbeat pass surcharge (Gurez, Ladakh, Keran, Kishtwar)
    const isOffbeat = selectedDestinations.some(d => 
      d.includes("Gurez") || d.includes("Keran") || d.includes("Ladakh") || d.includes("Pangong") || d.includes("Nubra") || d.includes("Kishtwar")
    );
    if (isOffbeat) {
      basePerDayPerPerson += 500;
    }

    // Vehicle factor
    let vehicleCostPerDay = 3000;
    if (vehicle === "innova") vehicleCostPerDay = 4500;
    if (vehicle === "suv4x4") vehicleCostPerDay = 5500;
    if (vehicle === "tempo") vehicleCostPerDay = 6500;

    const totalHotelMeals = basePerDayPerPerson * days * travelers;
    const totalCab = vehicleCostPerDay * days;
    const grandTotal = totalHotelMeals + totalCab;
    const perPerson = Math.round(grandTotal / travelers);

    return {
      total: grandTotal,
      perPerson: perPerson,
      low: Math.round(perPerson * 0.95),
      high: Math.round(perPerson * 1.08),
    };
  }, [selectedDestinations, days, travelers, hotelTier, vehicle]);

  const generateWhatsAppMessage = () => {
    const cleanName = userName.trim().slice(0, 100);
    const cleanPhone = userPhone.trim().slice(0, 30);
    const text = `*Custom Tour Request - Shop A Trip Tour & Travels*
Name: ${cleanName || "Traveler"}
Phone: ${cleanPhone || "Not provided"}
Travel Season: ${travelMonth}
Duration: ${days} Days / ${days - 1} Nights
Travelers: ${travelers} Persons
Stay Tier: ${hotelTier === "3star" ? "3-Star Deluxe (MAP)" : hotelTier === "4star" ? "4-Star Luxury (MAP)" : "Heritage Luxury Houseboat & 4-Star"}
Vehicle: ${vehicle.toUpperCase()}
Selected Destinations across Jammu, Kashmir & Ladakh:
${selectedDestinations.map((d) => `• ${d}`).join("\n")}

Estimated Range: ₹${estimatedTotal.low.toLocaleString()} - ₹${estimatedTotal.high.toLocaleString()} per person.
Please provide the customized day-by-day itinerary and final quote.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="custom-planner" className="py-20 bg-[#F4F8F5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-pine-900 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-800" />
            <span>Interactive Custom Trip Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Tailor Your Bespoke Jammu, Kashmir & Ladakh Holiday
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Select your preferred valleys across Jammu, Kashmir, and Ladakh. Our local on-ground team in Tangmarg will draft your personalized schedule with transparent pricing.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
            
            {/* 1. Choose Destinations Grouped by Division */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-pine-950 uppercase tracking-wider">
                  1. Choose Valleys & Destinations ({selectedDestinations.length} Selected)
                </label>
                <span className="text-[11px] text-slate-500">Tap to toggle</span>
              </div>

              <div className="space-y-4">
                {destinationGroups.map((group) => (
                  <div key={group.division} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                    <span className="text-xs font-bold text-pine-900 uppercase tracking-wider block mb-2">
                      {group.division}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {group.options.map((opt) => {
                        const isChecked = selectedDestinations.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleDestination(opt.id)}
                            className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between ${
                              isChecked
                                ? "bg-pine-900 border-pine-900 text-amber-300 shadow-sm"
                                : "bg-white border-slate-200 text-slate-700 hover:border-slate-400"
                            }`}
                          >
                            <span className="line-clamp-1">{opt.name}</span>
                            <CheckCircle2 className={`w-3.5 h-3.5 ml-1 flex-shrink-0 ${isChecked ? "text-amber-400" : "text-slate-300"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Duration and Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-pine-950 uppercase tracking-wider">
                    2. Trip Duration
                  </label>
                  <span className="text-xs font-bold text-pine-900 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {days} Days / {days - 1} Nights
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={14}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-pine-800 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>3 Days</span>
                  <span>7 Days (Classic)</span>
                  <span>14 Days (Grand)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-pine-950 uppercase tracking-wider">
                    3. Number of Travelers
                  </label>
                  <span className="text-xs font-bold text-pine-900 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {travelers} {travelers === 1 ? "Person" : "Persons"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  {[1, 2, 4, 6, 8, 12].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setTravelers(num)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        travelers === num
                          ? "bg-pine-900 text-amber-300 shadow-sm"
                          : "text-slate-700 hover:bg-white"
                      }`}
                    >
                      {num}{num === 12 ? "+" : ""}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Hotel Category & Vehicle Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-pine-950 uppercase tracking-wider mb-2.5">
                  4. Stay Preference (MAP Meal Plan)
                </label>
                <div className="space-y-2">
                  {[
                    { id: "3star", title: "3-Star Deluxe Hotels & Houseboat", desc: "Warm cozy stays, central heating, mountain views" },
                    { id: "4star", title: "4-Star Premium Resorts", desc: "Luxury resorts & premier heritage houseboats" },
                    { id: "luxury", title: "5-Star & Luxury Chalets", desc: "Top-tier properties like Khyber / Radisson / Swiss camps" },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setHotelTier(tier.id as any)}
                      className={`w-full p-3 rounded-xl text-left border transition-all ${
                        hotelTier === tier.id
                          ? "bg-emerald-50 border-pine-800 text-pine-950 shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      <div className="text-xs font-bold text-pine-900">{tier.title}</div>
                      <div className="text-[11px] text-slate-500">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-pine-950 uppercase tracking-wider mb-2.5">
                  5. Dedicated Private Vehicle
                </label>
                <div className="space-y-2">
                  {[
                    { id: "sedan", title: "Sedan (Etios / Dzire)", desc: "Ideal for couples & small families (up to 3 persons)" },
                    { id: "innova", title: "Innova / Innova Crysta", desc: "Spacious comfort for families & mountain roads" },
                    { id: "suv4x4", title: "4x4 Mountain SUV (Scorpio)", desc: "Recommended for Gurez, Keran & offbeat passes" },
                    { id: "tempo", title: "Tempo Traveller (12-17 Seater)", desc: "Best for friend groups & corporate tours" },
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVehicle(v.id as any)}
                      className={`w-full p-3 rounded-xl text-left border transition-all ${
                        vehicle === v.id
                          ? "bg-emerald-50 border-pine-800 text-pine-950 shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      <div className="text-xs font-bold text-pine-900">{v.title}</div>
                      <div className="text-[11px] text-slate-500">{v.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Traveler Contact inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sameer Khan"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pine-800"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone</label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pine-800"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Travel Season</label>
                <select
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-pine-800"
                >
                  <option>Upcoming Month</option>
                  <option>Spring (Mar - Apr)</option>
                  <option>Summer (May - Jun)</option>
                  <option>Autumn (Sep - Nov)</option>
                  <option>Winter Snow (Dec - Feb)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right: Instant Estimate Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-[#0B1E15] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-emerald-900/60 space-y-5">
              
              <div className="border-b border-emerald-900/80 pb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  Custom Quote Breakdown
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">
                    ₹{estimatedTotal.low.toLocaleString()} - ₹{estimatedTotal.high.toLocaleString()}
                  </span>
                  <span className="text-xs text-emerald-200 block mt-0.5">estimated per person</span>
                </div>
                <div className="mt-1.5 text-[11px] text-slate-300">
                  Total for {travelers} traveler{travelers > 1 ? "s" : ""}: approx ₹{(estimatedTotal.low * travelers).toLocaleString()} - ₹{(estimatedTotal.high * travelers).toLocaleString()}
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="space-y-2 text-xs text-slate-200">
                <div className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-semibold">{days} Days / {days - 1} Nights</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                  <span className="text-slate-400">Selected Valleys:</span>
                  <span className="font-semibold">{selectedDestinations.length} Places</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                  <span className="text-slate-400">Meals:</span>
                  <span className="font-semibold text-amber-300">MAP (Breakfast & Dinner)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-emerald-900/40">
                  <span className="text-slate-400">Cab:</span>
                  <span className="font-semibold">Private dedicated vehicle</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Support:</span>
                  <span className="font-semibold text-emerald-400">Tangmarg 24/7 Office</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Custom Plan to WhatsApp</span>
                </a>

                <a
                  href={`tel:${companyInfo.phones[0]}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center space-x-2 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Tangmarg Office: {companyInfo.phones[0]}</span>
                </a>
              </div>

              <div className="pt-1 text-[11px] text-slate-400 text-center flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free Custom Itinerary • Local Direct Booking</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
