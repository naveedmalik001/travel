"use client";

import React, { useState } from "react";
import { companyInfo } from "@/data/company";
import { Send, CheckCircle2, User, Phone, Mail, Calendar, Users, AlertCircle } from "lucide-react";

interface PackageDetailInquiryProps {
  packageTitle: string;
  packageDuration: string;
}

export default function PackageDetailInquiry({ packageTitle, packageDuration }: PackageDetailInquiryProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    travelers: "2",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Input sanitization & validation
    const cleanName = formData.name.trim();
    const cleanPhone = formData.phone.trim();
    const cleanEmail = formData.email.trim();

    if (!cleanName || cleanName.length < 2) {
      setErrorMessage("Please provide a valid full name.");
      return;
    }

    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("submitting");

    // Construct WhatsApp message URL
    const message = `*New Package Inquiry - Shop A Trip*
*Package:* ${packageTitle} (${packageDuration})
*Name:* ${cleanName}
*Phone:* ${cleanPhone}
*Email:* ${cleanEmail || "Not provided"}
*Travel Date:* ${formData.travelDate || "Flexible"}
*Travelers:* ${formData.travelers} Guests
*Special Requests:* ${formData.notes.trim() || "Standard package"}`;

    setTimeout(() => {
      setStatus("success");
      // Open WhatsApp chat directly in new tab
      const waUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft">
      <div className="flex items-center space-x-2 mb-3">
        <Send className="w-4 h-4 text-emerald-600" />
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Request Custom Itinerary
        </h3>
      </div>
      <p className="text-xs text-slate-500 mb-4">
        Our Tangmarg travel specialists respond within 15 minutes with customized quotes & hotel options.
      </p>

      {status === "success" ? (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
          <div className="flex items-center space-x-2 font-bold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Inquiry Sent Successfully!</span>
          </div>
          <p className="text-[11px] text-emerald-700">
            We have opened your WhatsApp to connect directly with our reservation team. If WhatsApp didn't open automatically, please call us directly at <strong>{companyInfo.phones[0]}</strong>.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs font-semibold text-emerald-800 underline block"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {errorMessage && (
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Your Full Name *
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Rajesh Sharma"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Phone / WhatsApp Number *
            </label>
            <div className="relative">
              <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Tentative Date
              </label>
              <div className="relative">
                <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full pl-8 pr-2 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-[11px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Travelers
              </label>
              <div className="relative">
                <Users className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full pl-8 pr-2 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-[11px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none"
                >
                  <option value="2">2 Adults (Couple)</option>
                  <option value="3-4">3–4 Persons (Family)</option>
                  <option value="5-8">5–8 Persons (Group)</option>
                  <option value="9+">9+ Persons (Large Group)</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Email (Optional)
            </label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Custom Requests / Questions
            </label>
            <textarea
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g. need candlelight dinner on houseboat, 4-star hotel upgrade, or Gondola Phase 2 guide..."
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 px-4 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-xs transition-all flex items-center justify-center space-x-2 shadow-sm disabled:opacity-50 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{status === "submitting" ? "Processing..." : "Get Free Custom Quote"}</span>
          </button>
        </form>
      )}
    </div>
  );
}
