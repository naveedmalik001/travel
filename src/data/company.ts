export interface CompanyInfo {
  name: string;
  tagline: string;
  experienceYears: number;
  address: string;
  fullAddress: string;
  location: string;
  phones: string[];
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  secondaryEmail?: string;
  mapsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  foundedYear: string;
}

export const companyInfo: CompanyInfo = {
  name: "Shop A Trip Tour & Travels",
  tagline: "Peace & You",
  experienceYears: 6,
  address: "Gokhama Kunzer, Tangmarg, Baramulla, Jammu and Kashmir 193404",
  fullAddress: "Gokhama Kunzer, Tangmarg, Baramulla, Jammu and Kashmir - 193404, India",
  location: "Tangmarg, Baramulla, Kashmir",
  phones: ["+918082495885", "+917780871705"],
  phoneDisplay: "+91 8082495885 / +91 7780871705",
  whatsapp: "918082495885",
  email: "contact@shopatrip.in",
  secondaryEmail: "contactshopatrip@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/x1P1uZTkX5PF2Jih6?g_st=ac",
  instagramUrl: "https://www.instagram.com/shopatrip",
  facebookUrl: "https://www.facebook.com/share/1K9vcCrdpW/",
  foundedYear: "2018",
};

export const trustHighlights = [
  {
    title: "Tangmarg & Gulmarg Local Base",
    desc: "Headquartered directly at the gateway of Gulmarg with deep on-ground local roots, driver networks, and real-time mountain updates.",
    icon: "Mountain",
  },
  {
    title: "6+ Years of Field Excellence",
    desc: "Over six years curating seamless journeys for thousands of families, honeymoon couples, solo explorers, and group departures.",
    icon: "ShieldCheck",
  },
  {
    title: "Curated 3-Star & 4-Star Stays",
    desc: "Inspected boutique mountain resorts, heritage Dal Lake houseboats, and warm Dardic wooden lodges in offbeat valleys.",
    icon: "Hotel",
  },
  {
    title: "24/7 On-Ground Concierge",
    desc: "Dedicated trip coordinator available round the clock for snow chain assistance, permit clearances, union cab transfers, and cable car tips.",
    icon: "PhoneCall",
  },
];
