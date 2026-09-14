export interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: "Kashmir Valley" | "Offbeat Frontiers" | "Ladakh & Kargil" | "Jammu & Kishtwar";
  altitude: string;
  bestTimeToVisit: string;
  distanceFromSrinagar: string;
  image: string;
  highlights: string[];
  description: string;
  topAttractions: { name: string; desc: string }[];
  idealFor: string[];
}

export const destinations: Destination[] = [
  {
    id: "gulmarg",
    name: "Gulmarg",
    tagline: "Meadow of Flowers & Asia's Premier Ski Wonderland",
    region: "Kashmir Valley",
    altitude: "8,690 ft (2,650 m) / Apharwat at 14,400 ft",
    bestTimeToVisit: "December–March (Snow/Ski) | April–October (Green Meadows)",
    distanceFromSrinagar: "52 km (1.5 hrs via Tangmarg)",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["World's 2nd Highest Gondola", "Apharwat Snow Peak", "Historic Golf Course", "St. Mary's Stone Church"],
    description: "Gulmarg is a world-renowned alpine resort cradled by the snow-clad peaks of the Pir Panjal range. As our local home base (Tangmarg/Gulmarg), we provide insider access to gondola passes, ski guides, and cozy mountain chalets.",
    topAttractions: [
      { name: "Gulmarg Gondola (Phase 1 & 2)", desc: "Takes you from 8,690 ft to Kongdoori and Apharwat Peak at 14,400 ft for perennial snow." },
      { name: "Alpathar Lake", desc: "A triangular high-altitude alpine lake situated at the foot of the Apharwat peaks, frozen until mid-summer." },
      { name: "Tangmarg Pine Slopes", desc: "The scenic gateway to Gulmarg, famous for trout streams, apple orchards, and handloom handicrafts." }
    ],
    idealFor: ["Skiers", "Snow Seekers", "Honeymooners", "Adventure Enthusiasts"]
  },
  {
    id: "srinagar",
    name: "Srinagar",
    tagline: "The Venice of the East & Heart of Kashmir",
    region: "Kashmir Valley",
    altitude: "5,200 ft (1,585 m)",
    bestTimeToVisit: "Year-round (Chinar Autumn in Oct-Nov, Blooms in Spring, Snow in Winter)",
    distanceFromSrinagar: "0 km (Valley Hub)",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Dal Lake & Nigeen Lake", "Royal Mughal Gardens", "Heritage Wooden Houseboats", "Pari Mahal Sunset"],
    description: "Srinagar is the summer capital of Jammu & Kashmir, famous for serene waterways, intricately carved cedar houseboats, floating vegetable markets, and centuries-old Mughal terraced gardens overlooking the Zabarwan range.",
    topAttractions: [
      { name: "Dal Lake & Shikara Rides", desc: "Glide along mirrored waters past char chinar islands, lotus beds, and floating artisan shops." },
      { name: "Nishat & Shalimar Bagh", desc: "Magnificent terraced gardens designed by Mughal emperors with cascading water fountains." },
      { name: "Old Srinagar (Downtown)", desc: "Historic wooden architecture, Jamia Masjid with 378 deodar pillars, and traditional spice bazaars." }
    ],
    idealFor: ["Families", "Couples", "Culture Seekers", "Photographers"]
  },
  {
    id: "pahalgam",
    name: "Pahalgam",
    tagline: "Valley of Shepherds & Lidder River Paradise",
    region: "Kashmir Valley",
    altitude: "7,200 ft (2,130 m)",
    bestTimeToVisit: "March to November (Spring blossoms, lush green summers, golden autumn)",
    distanceFromSrinagar: "95 km (2.5 hrs)",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Betaab Valley", "Aru Valley", "Baisaran (Mini Switzerland)", "Lidder River White Water Rafting"],
    description: "Nestled along the rushing, glacial-fed Lidder River, Pahalgam is an idyll of dense coniferous forests, sprawling meadows, and trekking gateways into high-altitude alpine lakes like Kolahoi Glacier and Tarsar Marsar.",
    topAttractions: [
      { name: "Betaab Valley", desc: "Framed by willow groves and snow-capped peaks, named after the Bollywood hit filmed here." },
      { name: "Aru Valley", desc: "A quiet village meadow serving as the basecamp for pristine alpine treks." },
      { name: "Baisaran Meadow", desc: "A hilltop pine glade with sweeping views of the entire Lidder valley, accessible on horseback." }
    ],
    idealFor: ["Nature Lovers", "Trekkers", "Families", "River Anglers"]
  },
  {
    id: "sonmarg",
    name: "Sonmarg",
    tagline: "The Meadow of Gold & Gateway to Ladakh",
    region: "Kashmir Valley",
    altitude: "8,950 ft (2,730 m)",
    bestTimeToVisit: "April to October (Glaciers & Flower Valleys)",
    distanceFromSrinagar: "85 km (2.5 hrs along Sindh river)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Thajiwas Glacier", "Sindh River Trout Fishing", "Zoji La Pass Access", "Zero Point Snow"],
    description: "Sonmarg is surrounded by glaciated Himalayan peaks and flowering alpine meadows. It serves as the historic gateway to Ladakh over the Zoji La pass and the starting point for the holy Amarnath Yatra via Baltal.",
    topAttractions: [
      { name: "Thajiwas Glacier", desc: "A majestic hanging glacier reached by a short pony trek or scenic foot trail." },
      { name: "Zero Point (Zoji La)", desc: "High mountain pass point with snow walls and thrilling all-terrain vehicle rides." },
      { name: "Sindh River Valley", desc: "Crystal cold mountain river ideal for trout fishing and riverside picnics." }
    ],
    idealFor: ["Adventure Seekers", "Photographers", "Snow Lovers"]
  },
  {
    id: "gurez-valley",
    name: "Gurez Valley",
    tagline: "The Mystical Northern Frontier & Habba Khatoon's Homeland",
    region: "Offbeat Frontiers",
    altitude: "8,000 ft (2,400 m)",
    bestTimeToVisit: "May to October (Pass opens via Razdan Pass)",
    distanceFromSrinagar: "130 km (5.5 hrs across Razdan Pass)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Habba Khatoon Pyramid Peak", "Kishanganga River", "Dard Shina Culture", "Tulail Valley"],
    description: "Gurez is Kashmir's most guarded secret. Guarded by the monumental pyramid of Habba Khatoon and bisected by the emerald Kishanganga river, Gurez offers pure Dardic culture, log-cabin villages, and complete Himalayan tranquility.",
    topAttractions: [
      { name: "Habba Khatoon Peak & Spring", desc: "The legendary pyramid mountain and holy cold-water spring steeped in Kashmiri folklore." },
      { name: "Dawar & Achura Villages", desc: "Ancient log-cabin hamlets built without single nails with intricate Dardic woodwork." },
      { name: "Tulail & Chakwali", desc: "The untamed inner valley stretching right to the Line of Control." }
    ],
    idealFor: ["Offbeat Explorers", "Photographers", "Cultural Enthusiasts", "Campers"]
  },
  {
    id: "keran-valley",
    name: "Keran Valley",
    tagline: "Riverside Border Paradise on the Kishanganga",
    region: "Offbeat Frontiers",
    altitude: "5,500 ft (1,675 m)",
    bestTimeToVisit: "April to November ( عبر Pharkian Gali )",
    distanceFromSrinagar: "145 km (5 hrs via Kupwara)",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Kishanganga Riverfront", "Direct View of Neelum Valley (POK)", "Apple & Walnut Orchards", "Pure Mountain Silence"],
    description: "Recently opened to travellers, Keran Valley lies in Kupwara district along the banks of the Kishanganga River. Here, the river serves as the Line of Control, with villages on both banks visible across a stone's throw.",
    topAttractions: [
      { name: "Keran Riverside Point", desc: "Stand right on the riverbank witnessing life in the opposite village across the river." },
      { name: "Pharkian Gali Pass", desc: "Breathtaking high pass at 9,600 ft offering panoramic views of Kupwara and Keran ridges." },
      { name: "Pathran & Mundian Hamlets", desc: "Verdant countryside surrounded by thick pine and walnut groves." }
    ],
    idealFor: ["Border Tourism Enthusiasts", "Peace Seekers", "Families looking for hidden spots"]
  },
  {
    id: "leh-ladakh",
    name: "Leh Ladakh & Nubra",
    tagline: "The Land of High Passes, Monasteries & Azure Lakes",
    region: "Ladakh & Kargil",
    altitude: "11,500 ft (3,500 m) to 18,380 ft",
    bestTimeToVisit: "May to October",
    distanceFromSrinagar: "420 km (overland via Kargil) / Daily flights to Leh",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Pangong Tso Lake", "Nubra Valley Sand Dunes", "Khardung La Pass", "Ancient Tibetan Monasteries"],
    description: "Ladakh is a high-altitude desert kingdom of stark lunar mountains, ancient Tibetan gompas, high mountain passes, and spellbinding saltwater lakes like Pangong and Tso Moriri.",
    topAttractions: [
      { name: "Pangong Tso Lake", desc: "134 km long lake changing colors from turquoise to deep indigo under clear Himalayan skies." },
      { name: "Nubra Valley & Hunder", desc: "Cold desert dunes where double-humped Bactrian camels wander beneath glaciated peaks." },
      { name: "Khardung La (17,982 ft)", desc: "One of the highest motorable roads on earth with sweeping Karakoram views." }
    ],
    idealFor: ["Bikers", "Road Trippers", "Spiritual Seekers", "Stargazers"]
  },
  {
    id: "kishtwar-bhaderwah",
    name: "Kishtwar & Bhaderwah",
    tagline: "Land of Saffron, Blue Sapphires & Mini Switzerland of Jammu",
    region: "Jammu & Kishtwar",
    altitude: "5,300 ft to 12,000 ft",
    bestTimeToVisit: "April to November (Sinthan Pass open)",
    distanceFromSrinagar: "180 km via Sinthan Top / 215 km from Jammu",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Sinthan Top Pass", "Paddar Sapphire Valley", "Machail Mata Shrine", "Bhaderwah Pine Meadows"],
    description: "Kishtwar and Bhaderwah in the Jammu division offer a captivating mix of dramatic Chenab gorges, world-renowned saffron fields, precious blue sapphire mines in Paddar, and the pristine meadows of Jai Valley and Guldanda.",
    topAttractions: [
      { name: "Sinthan Top Pass (12,300 ft)", desc: "Spectacular snow-covered ridge connecting Kashmir to Kishtwar with 360-degree mountain views." },
      { name: "Paddar Valley & Machail Mata", desc: "Famed sapphire valley and sacred Himalayan pilgrimage destination." },
      { name: "Bhaderwah (Chinta & Jai Valley)", desc: "Lush green rolling meadows, pine woods, and refreshing waterfalls." }
    ],
    idealFor: ["Off-the-beaten-track travelers", "Pilgrims", "Trekker Enthusiasts"]
  }
];
