"use client";

import React, { useState } from "react";
import { companyInfo } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { 
  Calendar, 
  Users, 
  MapPin, 
  Hotel, 
  Phone, 
  Compass, 
  ShieldCheck, 
  CheckCircle2,
  Clock,
  User,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Car,
  Check,
  Star,
  Sparkles
} from "lucide-react";

// Duration options
const DURATION_OPTIONS = [
  "3 Days / 2 Nights",
  "4 Days / 3 Nights",
  "5 Days / 4 Nights",
  "6 Days / 5 Nights",
  "7 Days / 6 Nights",
  "8 Days / 7 Nights",
  "9 Days / 8 Nights",
  "10 Days / 9 Nights",
  "10+ Days / 9+ Nights"
];

// Pickup & Drop options
const LOCATION_OPTIONS = [
  "Srinagar Airport",
  "Jammu Railway Station",
  "Srinagar Railway Station",
  "Katra Railway Station",
  "Jammu Airport"
];

// Places grouped by region
const PLACES_DATA = [
  {
    region: "KASHMIR",
    places: [
      "Srinagar (Dal Lake & Mughal Gardens)",
      "Gulmarg",
      "Pahalgam",
      "Sonamarg",
      "Doodhpathri",
      "Gurez Valley",
      "Keran Valley",
      "Sinthan Top",
      "Daksum",
      "Margan Top",
      "Warwan Valley",
      "Astan Marg",
      "Yusmarg",
      "Lolab Valley",
      "Bahu Fort"
    ]
  },
  {
    region: "JAMMU",
    places: [
      "Katra (Vaishno Devi)",
      "Patnitop",
      "Mansar Lake",
      "Raghunath Temple",
      "Jammu City",
      "Sanasar"
    ]
  },
  {
    region: "LEH-LADAKH",
    places: [
      "Leh City",
      "Pangong Tso Lake",
      "Nubra Valley",
      "Tso Moriri Lake",
      "Hemis Monastery",
      "Thiksey Monastery",
      "Magnetic Hill",
      "Khardung La",
      "Shanti Stupa"
    ]
  }
];

// Night Stay options grouped by region
const NIGHT_STAYS_DATA = [
  {
    region: "KASHMIR",
    places: [
      "Srinagar",
      "Gulmarg",
      "Pahalgam",
      "Sonamarg",
      "Gurez",
      "Keran Valley",
      "Doodhpathri",
      "Tosa Maidan",
      "Astan Marg"
    ]
  },
  {
    region: "JAMMU",
    places: [
      "Jammu City",
      "Katra",
      "Patnitop",
      "Mansar Lake",
      "Daksum"
    ]
  },
  {
    region: "LADAKH",
    places: [
      "Leh City",
      "Nubra Valley",
      "Pangong Lake"
    ]
  }
];

// Hotel categories
const HOTEL_CATEGORIES = [
  { id: "Standard / Budget", label: "Standard / Budget", desc: "Clean & Comfortable Heated Stays" },
  { id: "3-Star Deluxe", label: "3-Star Deluxe", desc: "Premium Rooms with Heating & Breakfast" },
  { id: "4-Star & Luxury Resorts", label: "4-Star & Luxury", desc: "Luxury Resorts & Scenic Cottages" },
  { id: "5-Star & Heritage Houseboat", label: "5-Star / Houseboat", desc: "Ultra Luxury / Traditional Cedar Houseboats" }
];

// Vehicle options
const VEHICLE_OPTIONS = [
  { id: "Sedan (Etios / Dzire)", label: "Sedan (Etios / Dzire)", capacity: "1-4 Travellers" },
  { id: "SUV (Innova / Ertiga / Crysta)", label: "SUV (Innova / Crysta)", capacity: "4-6 Travellers" },
  { id: "Tempo Traveller (Group)", label: "Tempo Traveller", capacity: "7-12 Travellers" }
];

// Travellers count
const TRAVELLER_OPTIONS = [
  "Solo Explorer (1 Person)",
  "Couple (2 Persons)",
  "Family (3-5 Persons)",
  "Group (6-10 Persons)",
  "Large Group (10+ Persons)"
];

const STEP_TITLES = [
  "Duration",
  "Pickup & Drop",
  "Places",
  "Night Stays",
  "Stays & Cab",
  "Dates & Group",
  "Contact Details"
];

export default function CustomTripPlanner() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  // Form State
  const [duration, setDuration] = useState("5 Days / 4 Nights");
  const [pickupLocation, setPickupLocation] = useState("Srinagar Airport");
  const [dropLocation, setDropLocation] = useState("Srinagar Airport");
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([
    "Srinagar (Dal Lake & Mughal Gardens)",
    "Gulmarg",
    "Pahalgam"
  ]);
  const [selectedStays, setSelectedStays] = useState<string[]>([
    "Srinagar",
    "Gulmarg",
    "Pahalgam"
  ]);
  const [hotelCategory, setHotelCategory] = useState("3-Star Deluxe");
  const [vehicleType, setVehicleType] = useState("SUV (Innova / Ertiga / Crysta)");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("Couple (2 Persons)");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userNote, setUserNote] = useState("");

  const togglePlace = (place: string) => {
    setSelectedPlaces((prev) =>
      prev.includes(place) ? prev.filter((p) => p !== place) : [...prev, place]
    );
  };

  const toggleStay = (stay: string) => {
    setSelectedStays((prev) =>
      prev.includes(stay) ? prev.filter((s) => s !== stay) : [...prev, stay]
    );
  };

  const handleReset = () => {
    setCurrentStep(1);
    setDuration("5 Days / 4 Nights");
    setPickupLocation("Srinagar Airport");
    setDropLocation("Srinagar Airport");
    setSelectedPlaces(["Srinagar (Dal Lake & Mughal Gardens)", "Gulmarg", "Pahalgam"]);
    setSelectedStays(["Srinagar", "Gulmarg", "Pahalgam"]);
    setHotelCategory("3-Star Deluxe");
    setVehicleType("SUV (Innova / Ertiga / Crysta)");
    setTravelDate("");
    setTravellers("Couple (2 Persons)");
    setUserName("");
    setUserPhone("");
    setUserNote("");
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      alert("Please enter your name and WhatsApp number.");
      return;
    }

    const message = `*🌟 CUSTOM TRIP PLANNER INQUIRY 🌟*
----------------------------------------
*Name:* ${userName.trim()}
*WhatsApp:* ${userPhone.trim()}
*Travel Date / Month:* ${travelDate.trim() || "Flexible"}
*Travellers:* ${travellers}

*⏱️ Duration:* ${duration}
*📍 Pickup:* ${pickupLocation}
*📍 Drop:* ${dropLocation}

*🏔️ Places to Visit:*
${selectedPlaces.length > 0 ? selectedPlaces.map((p) => `• ${p}`).join("\n") : "Flexible / Need Recommendations"}

*🏨 Night Stay Locations:*
${selectedStays.length > 0 ? selectedStays.map((s) => `• ${s}`).join("\n") : "Flexible"}

*🛌 Hotel Preference:* ${hotelCategory}
*🚗 Cab Preference:* ${vehicleType}
${userNote.trim() ? `\n*📝 Notes / Preferences:* ${userNote.trim()}` : ""}
----------------------------------------
Please share a detailed day-by-day itinerary and transparent custom quotation.`;

    const url = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="custom-planner" className="py-12 sm:py-16 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38804b]/10 text-[#38804b] text-xs font-semibold mb-2 border border-[#38804b]/20">
            <Compass className="w-3.5 h-3.5 text-[#38804b]" />
            <span>Tailor Your Package</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Build Your Dream Trip
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Create your personalized itinerary in easy steps with direct local rates and instant WhatsApp quote.
          </p>
        </div>

        {/* Desktop 2-Column Grid: Form + Host Side Pillar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Interactive Form Builder Card (8 Cols on Desktop) */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden flex flex-col">
            
            {/* Top Teal/Emerald Header Bar */}
            <div className="bg-[#38804b] px-5 py-4 sm:px-7 sm:py-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white leading-tight">
                    Build Your Dream Trip
                  </h3>
                  <p className="text-xs text-emerald-100 mt-0.5">
                    Create a personalized itinerary
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-lg transition-colors"
                  title="Reset form"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>

              {/* Step indicator and progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-100 mb-1.5">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] text-white">
                    {STEP_TITLES[currentStep - 1]}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-white/25 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-white h-full transition-all duration-300 rounded-full"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Step Body */}
            <div className="p-5 sm:p-7 min-h-[380px] flex flex-col justify-between">
              
              {/* STEP 1: Duration */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Select Duration</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Choose your number of days and nights.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {DURATION_OPTIONS.map((opt) => {
                      const isSelected = duration === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setDuration(opt)}
                          className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "border-[#38804b] bg-[#38804b]/10 text-[#255f35] ring-1 ring-[#38804b]"
                              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                          }`}
                        >
                          <span>{opt}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#38804b]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Pickup & Drop Location */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Pickup &amp; Drop Location</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Select your preferred arrival and departure points.
                    </p>
                  </div>

                  {/* Pickup Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#38804b]" />
                      <span>Pickup Location</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {LOCATION_OPTIONS.map((loc) => {
                        const isSelected = pickupLocation === loc;
                        return (
                          <button
                            key={`pickup-${loc}`}
                            type="button"
                            onClick={() => setPickupLocation(loc)}
                            className={`p-2.5 sm:p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? "border-[#38804b] bg-[#38804b]/10 text-[#255f35] ring-1 ring-[#38804b]"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span>{loc}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#38804b]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Drop Section */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>Drop Location</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {LOCATION_OPTIONS.map((loc) => {
                        const isSelected = dropLocation === loc;
                        return (
                          <button
                            key={`drop-${loc}`}
                            type="button"
                            onClick={() => setDropLocation(loc)}
                            className={`p-2.5 sm:p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? "border-[#38804b] bg-[#38804b]/10 text-[#255f35] ring-1 ring-[#38804b]"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span>{loc}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#38804b]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Places to Visit */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">Places to Visit</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Select the destinations you want to explore.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#38804b] bg-[#38804b]/10 px-2.5 py-1 rounded-full">
                      {selectedPlaces.length} Selected
                    </span>
                  </div>

                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                    {PLACES_DATA.map((group) => (
                      <div key={group.region} className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          {group.region}
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {group.places.map((place) => {
                            const isSelected = selectedPlaces.includes(place);
                            return (
                              <button
                                key={place}
                                type="button"
                                onClick={() => togglePlace(place)}
                                className={`p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                                  isSelected
                                    ? "border-[#38804b] bg-[#38804b]/10 text-[#255f35] ring-1 ring-[#38804b]"
                                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                <span className="truncate pr-1">{place}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-[#38804b] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Night Stay Locations */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">Night Stay Locations</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Select where you want to stay overnight.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#38804b] bg-[#38804b]/10 px-2.5 py-1 rounded-full">
                      {selectedStays.length} Selected
                    </span>
                  </div>

                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                    {NIGHT_STAYS_DATA.map((group) => (
                      <div key={group.region} className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          {group.region}
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {group.places.map((place) => {
                            const isSelected = selectedStays.includes(place);
                            return (
                              <button
                                key={place}
                                type="button"
                                onClick={() => toggleStay(place)}
                                className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                                  isSelected
                                    ? "border-[#38804b] bg-[#38804b]/10 text-[#255f35] ring-1 ring-[#38804b]"
                                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                <span>{place}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-[#38804b] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Stay & Cab Preferences */}
              {currentStep === 5 && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Hotel &amp; Cab Preference</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Choose your preferred comfort level and private vehicle.
                    </p>
                  </div>

                  {/* Hotel Category */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
                      <Hotel className="w-3.5 h-3.5 text-[#38804b]" />
                      <span>Hotel Category</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {HOTEL_CATEGORIES.map((cat) => {
                        const isSelected = hotelCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setHotelCategory(cat.id)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#38804b] bg-[#38804b]/10 ring-1 ring-[#38804b]"
                                : "border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`text-xs font-bold ${isSelected ? "text-[#255f35]" : "text-slate-900"}`}>
                                {cat.label}
                              </span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#38804b]" />}
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5">{cat.desc}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Vehicle Type */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
                      <Car className="w-3.5 h-3.5 text-[#38804b]" />
                      <span>Private Cab / Fleet Type</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {VEHICLE_OPTIONS.map((veh) => {
                        const isSelected = vehicleType === veh.id;
                        return (
                          <button
                            key={veh.id}
                            type="button"
                            onClick={() => setVehicleType(veh.id)}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#38804b] bg-[#38804b]/10 ring-1 ring-[#38804b]"
                                : "border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`text-xs font-bold ${isSelected ? "text-[#255f35]" : "text-slate-900"}`}>
                                {veh.label}
                              </span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#38804b]" />}
                            </div>
                            <span className="text-[10px] text-slate-500 block mt-0.5">{veh.capacity}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Travel Date & Travellers */}
              {currentStep === 6 && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Travel Date &amp; Travellers</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      When are you planning to travel and with how many people?
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Travel Date */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#38804b]" />
                        <span>Travel Date / Month</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15th Oct, Next Month, or Winter Season"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Travellers Group */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#38804b]" />
                        <span>Number of Travellers</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {TRAVELLER_OPTIONS.map((opt) => {
                          const isSelected = travellers === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setTravellers(opt)}
                              className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? "border-[#38804b] bg-[#38804b]/10 text-[#255f35] ring-1 ring-[#38804b]"
                                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <span>{opt}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#38804b]" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: Contact Details & Submit */}
              {currentStep === 7 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">Your Contact Details</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Where should we send your personalized itinerary and pricing quote?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#38804b]" />
                        <span>Your Full Name *</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#38804b]" />
                        <span>WhatsApp Number *</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Special Notes */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Special Requests / Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Gondola Phase 2 needed, Honeymoon cake, Senior citizens travelling, pure veg meals..."
                        value={userNote}
                        onChange={(e) => setUserNote(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-1 text-slate-600">
                    <div className="flex justify-between font-medium">
                      <span>Trip: <strong className="text-slate-900">{duration}</strong></span>
                      <span>Route: <strong className="text-slate-900">{pickupLocation.split(" ")[0]} → {dropLocation.split(" ")[0]}</strong></span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>Places: {selectedPlaces.length} chosen</span>
                      <span>Category: {hotelCategory}</span>
                    </div>
                  </div>
                </form>
              )}

              {/* Navigation Buttons Footer */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer ml-auto"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-3 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer ml-auto"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Get Custom Itinerary</span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Desktop Host Companion Pillar (4 Cols on Desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
            
            {/* Host Visual Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-lg flex flex-col items-center text-center relative overflow-hidden">
              {/* Background ambient badge */}
              <div className="w-full flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#38804b] bg-[#38804b]/10 px-2 py-0.5 rounded">
                  Your Travel Host
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">Shop A Trip</span>
              </div>

              {/* Host Mascot Image */}
              <div className="w-52 h-64 relative my-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mascot.png"
                  alt="Shop A Trip Travel Host"
                  className="w-full h-full object-contain object-bottom drop-shadow-md transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Speech Note */}
              <div className="mt-2 w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                <p className="text-xs font-bold text-slate-900 leading-snug">
                  From planning to departure, we are with you.
                </p>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Tell us what you want, and we will curate it for you with verified stays and dedicated mountain cab.
                </p>
              </div>
            </div>

            {/* Core Trust Promises */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0" />
                <span className="font-semibold">200+ Happy Travelers</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0" />
                <span className="font-semibold">20+ Destinations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0" />
                <span className="font-semibold">4.9 Star Rating</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0" />
                <span className="font-semibold">24/7 Assistance</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
