export interface ItineraryDay {
  day: number;
  title: string;
  route: string;
  description: string;
  highlights: string[];
  stayLocation: string;
  meals: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  division: "Kashmir" | "Jammu" | "Ladakh";
  category: "Classic Kashmir" | "Hot Deals" | "Offbeat Frontiers" | "Ladakh & Kargil" | "Honeymoon & Romantic" | "Pilgrimage & Heritage";
  startingPoint: string;
  endingPoint: string;
  tag: string;
  priceFrom: string;
  originalPrice?: string;
  hotelCategory: string;
  image: string;
  gallery: string[];
  overview: string;
  inclusions: string[];
  exclusions: string[];
  hotelDetails: { location: string; hotel: string }[];
  itinerary: ItineraryDay[];
  featured?: boolean;
}

export const tourPackages: TourPackage[] = [
  {
    id: "3n-4d-kashmir-glimpse",
    title: "3N/4D Kashmir Glimpse",
    subtitle: "Srinagar, Gulmarg Meadows & Pahalgam Pine Valleys",
    duration: "3 Nights / 4 Days",
    days: 4,
    nights: 3,
    division: "Kashmir",
    category: "Classic Kashmir",
    startingPoint: "Srinagar Airport",
    endingPoint: "Srinagar Airport",
    tag: "Popular Weekend Getaway",
    priceFrom: "₹12,499",
    originalPrice: "₹15,999",
    hotelCategory: "3-Star Deluxe Hotels + Houseboat",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "This four-day escape to Kashmir blends iconic landscapes with gentle adventure and comfort. You drift across Dal Lake on a sunset shikara, stand beneath towering pine forests along the Lidder River in Pahalgam, ride the world's highest cable car in Gulmarg, and explore the timeless Mughal-era gardens of Srinagar.",
    inclusions: [
      "3 Nights stay in verified 3-Star Hotels / Premium Houseboat",
      "Breakfast and Dinner (MAP Meal Plan)",
      "Private dedicated cab for all transfers and 4 days of sightseeing",
      "Airport pick-up and drop-off at Srinagar Airport",
      "1-Hour complimentary Shikara ride on Dal Lake",
      "All toll taxes, parking fees, driver allowance and fuel charges",
      "24/7 on-ground assistance from our Tangmarg operations office"
    ],
    exclusions: [
      "Airfare or train tickets",
      "Gulmarg Gondola cable car tickets (Phase 1 & Phase 2)",
      "Local union vehicles in Pahalgam (Aru, Betaab, Chandanwari)",
      "Pony rides, sledge, ATV rides or winter snow sports",
      "Monument garden entry tickets and personal expenses"
    ],
    hotelDetails: [
      { location: "Srinagar", hotel: "Hotel Star of Kashmir / Hotel Snowbliss / Similar 3-Star" },
      { location: "Pahalgam / Gulmarg", hotel: "Hotel Brooklyn Resort / Hotel Countryside / Similar" },
      { location: "Dal Lake", hotel: "Deluxe Heritage Wooden Houseboat" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Dal Lake Shikara Ride",
        route: "Srinagar Airport → Srinagar Hotel / Houseboat",
        description: "Arrive at Srinagar Airport where our warm local driver greets you. Transfer to your stay and freshen up. Later in the afternoon, embark on a dreamy 1-hour Shikara ride on Dal Lake, passing through floating flower markets, lotus gardens, and wooden houseboats. Enjoy dinner and a peaceful night.",
        highlights: ["Warm airport welcome", "1-Hour Dal Lake Shikara ride", "Floating markets", "Mughal waterfront view"],
        stayLocation: "Srinagar / Dal Lake Houseboat",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg Alpine Day Excursion",
        route: "Srinagar → Tangmarg → Gulmarg → Srinagar (52 km / 1.5 hrs)",
        description: "Drive through scenic apple orchards and pine-clad hills of Tangmarg towards Gulmarg (Meadow of Flowers). Board the world-famous Gulmarg Gondola up to Kongdoori (Phase 1) and Apharwat Peak (Phase 2). Walk through the golf course, visit the historic St. Mary Church, and head back to Srinagar by evening.",
        highlights: ["Tangmarg pine slopes", "Gulmarg Gondola Ride", "Apharwat Snow Point", "Strawberry Valley"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Srinagar to Pahalgam (Valley of Shepherds) Excursion",
        route: "Srinagar → Pampore → Awantipora → Pahalgam → Srinagar (95 km / 2.5 hrs)",
        description: "Travel through the saffron fields of Pampore and historic Awantipora ruins towards Pahalgam. Listen to the roaring Lidder River. Visit scenic spots or hire a local union taxi to Betaab Valley and Aru Valley. Return to Srinagar in the evening for dinner.",
        highlights: ["Pampore saffron fields", "Awantipora temple ruins", "Lidder riverbank walk", "Betaab Valley"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Mughal Gardens Tour & Srinagar Departure",
        route: "Srinagar City Tour → Srinagar Airport Drop",
        description: "After breakfast, check out and visit the terraced Mughal wonders: Nishat Bagh (Garden of Bliss) and Shalimar Bagh (Abode of Love). If time permits, visit the Shankaracharya Temple atop the hill. Transfer to Srinagar Airport with unforgettable Kashmir memories.",
        highlights: ["Nishat Bagh", "Shalimar Bagh", "Dal Lake boulevard", "Seamless airport drop"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ],
    featured: true
  },
  {
    id: "5n-6d-honeymoon-special",
    title: "5N/6D Romantic Kashmir Honeymoon Special",
    subtitle: "Candlelight Dinner, Houseboat Romance, Gulmarg, Pahalgam & Sonmarg",
    duration: "5 Nights / 6 Days",
    days: 6,
    nights: 5,
    division: "Kashmir",
    category: "Honeymoon & Romantic",
    startingPoint: "Srinagar Airport",
    endingPoint: "Srinagar Airport",
    tag: "Couple's Favorite",
    priceFrom: "₹24,999",
    originalPrice: "₹31,500",
    hotelCategory: "3-Star Deluxe & Luxury Houseboat",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "Crafted exclusively for newlyweds and couples seeking intimacy in the Himalayas. Drift on Dal Lake during twilight, experience a romantic candlelight dinner on a traditional cedarwood houseboat with flower bed decoration, play in the powdery snows of Gulmarg Apharwat, and take intimate riverside walks along the Lidder River in Pahalgam.",
    inclusions: [
      "4 Nights in handpicked 3-Star Deluxe Hotels + 1 Night in Luxury Heritage Houseboat",
      "Daily gourmet Breakfast and Dinner (MAP)",
      "Special Honeymoon Inclusions: Bed flower decoration, Honeymoon cake & Candlelight dinner",
      "Private sanitized cab (Etios/Dzire/Innova) for all 6 days",
      "1-Hour romantic Shikara ride with Kashmiri Kahwa",
      "Driver allowances, airport transfers, parking, toll and fuel",
      "Tangmarg 24/7 dedicated concierge assistance"
    ],
    exclusions: [
      "Flight tickets",
      "Gondola cable car tickets",
      "Union cab at Pahalgam / Sonmarg",
      "Pony rides and personal expenses",
      "Tips and entry fees to monuments"
    ],
    hotelDetails: [
      { location: "Srinagar", hotel: "Hotel Star of Kashmir / Grand Comforts / Similar 3-Star" },
      { location: "Dal Lake / Nigeen", hotel: "Luxury Royal Heritage Houseboat (Carved Walnut Wood)" },
      { location: "Pahalgam", hotel: "Hotel Brooklyn Resort / Hotel Poet's Inn / Similar" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Romantic Houseboat Stay",
        route: "Srinagar Airport → Dal Lake Houseboat",
        description: "Arrive at Srinagar Airport. Check in to your luxury wooden houseboat on Dal Lake. Enjoy a serene Shikara ride as the sun sets over the Zabarwan hills. In the evening, enjoy a specially arranged candlelight dinner and floral bed decor.",
        highlights: ["Warm welcome with Kahwa", "Sunset Shikara ride", "Floral bed decor", "Candlelight dinner on Houseboat"],
        stayLocation: "Luxury Houseboat, Dal Lake",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg Snowy Paradise",
        route: "Srinagar → Tangmarg → Gulmarg (52 km)",
        description: "Drive to Gulmarg, passing through lush willow and pine valleys. Experience the Gondola ride up to Apharwat Peak with pristine snow. Sip hot tea amidst panoramic Himalayan peaks and capture romantic photographs.",
        highlights: ["Gondola Phase 1 & 2", "Snow activities", "Golf course walk", "Scenic photo spots"],
        stayLocation: "Srinagar Deluxe Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Srinagar to Sonmarg (Meadow of Gold)",
        route: "Srinagar → Ganderbal → Kangan → Sonmarg (85 km)",
        description: "Journey along the roaring Sindh River to Sonmarg. Marvel at towering glaciated mountains and visit Thajiwas Glacier on pony or local union taxi. Enjoy the pristine alpine air before returning to Srinagar.",
        highlights: ["Sindh river drive", "Thajiwas Glacier views", "Alpine meadows", "Kashmiri trout lunch stop"],
        stayLocation: "Srinagar Deluxe Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam (Valley of Shepherds)",
        route: "Srinagar → Pampore → Pahalgam (95 km)",
        description: "Drive towards Pahalgam through saffron fields. Check in to your riverside resort in Pahalgam. Walk hand-in-hand along the Lidder River, soak in the quiet forest atmosphere, and visit Betaab Valley or Aru Valley.",
        highlights: ["Pampore saffron stores", "Lidder riverside resort", "Betaab valley meadows", "Quiet pine forests"],
        stayLocation: "Pahalgam Deluxe Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Pahalgam Leisure & Return to Srinagar",
        route: "Pahalgam → Srinagar Mughal Gardens",
        description: "Enjoy a relaxed breakfast in Pahalgam. Stroll through the local walnut woodcraft markets. In the afternoon, return to Srinagar to visit Pari Mahal (Palace of Fairies) overlooking the lake, and Chashme Shahi spring garden.",
        highlights: ["Pari Mahal sunset view", "Chashme Shahi spring", "Handicraft shopping in Lal Chowk"],
        stayLocation: "Srinagar Deluxe Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Farewell Kashmir & Airport Departure",
        route: "Hotel → Srinagar Airport Drop",
        description: "Savor a leisurely breakfast. Pack your authentic memories of the valley of love. Transfer to Srinagar airport on time for your return flight.",
        highlights: ["Souvenir shopping", "Smooth airport transfer", "Cherished romantic memories"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ],
    featured: true
  },
  {
    id: "6n-7d-classic-kashmir",
    title: "6N/7D Classic Kashmir Grand Explorer",
    subtitle: "Complete Valley Discovery: Srinagar, Gulmarg, Pahalgam & Sonmarg",
    duration: "6 Nights / 7 Days",
    days: 7,
    nights: 6,
    division: "Kashmir",
    category: "Classic Kashmir",
    startingPoint: "Srinagar Airport",
    endingPoint: "Srinagar Airport",
    tag: "Best Value Family Tour",
    priceFrom: "₹18,999",
    originalPrice: "₹24,000",
    hotelCategory: "3-Star Deluxe Stays + 1 Night Houseboat",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "The quintessential Kashmiri expedition. Experience the complete harmony of culture, alpine thrills, and quiet lakes. Stay in Pahalgam by the rushing Lidder, ride Asia's highest gondola at Gulmarg, witness glacial wonders in Sonmarg, and spend an enchanting night on a heritage Dal Lake houseboat.",
    inclusions: [
      "5 Nights in handpicked 3-Star Hotels + 1 Night in Deluxe Houseboat",
      "Breakfast and Dinner daily on MAP plan",
      "Dedicated private vehicle (Sedan/SUV/Innova) for all 7 days",
      "Srinagar Airport pickup and drop-off",
      "1-Hour Shikara ride on world-famous Dal Lake",
      "All driver allowances, fuel, toll taxes, and state permits",
      "Local Tangmarg support team on standby 24/7"
    ],
    exclusions: [
      "Flight tickets",
      "Gondola ticket bookings",
      "Local union cab for Pahalgam (Aru/Betaab/Chandanwari) & Sonmarg (Zero Point)",
      "Pony charges and water sports",
      "Garden entrance fees"
    ],
    hotelDetails: [
      { location: "Srinagar (3 Nights)", hotel: "Hotel Star of Kashmir / Hotel Snowbliss" },
      { location: "Pahalgam (1 Night)", hotel: "Hotel Brooklyn Resort / Hotel Poet's Inn" },
      { location: "Gulmarg (1 Night)", hotel: "Hotel Countryside / Gulmarg House Tangmarg" },
      { location: "Dal Lake (1 Night)", hotel: "Deluxe Heritage Houseboat" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Dal Lake Shikara",
        route: "Srinagar Airport → Srinagar Hotel",
        description: "Welcome at Srinagar Airport. Transfer to your hotel and unwind. Afternoon Shikara ride on Dal Lake taking in the floating vegetable gardens and picturesque houseboats. Overnight in Srinagar.",
        highlights: ["Airport meet & greet", "Dal Lake Shikara ride", "Boulevard road evening stroll"],
        stayLocation: "Srinagar Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Srinagar Mughal Heritage & Sacred Sites",
        route: "Srinagar Local Sightseeing",
        description: "Explore the legendary Mughal gardens — Nishat Bagh, Shalimar Bagh, and Cheshmashahi. Visit Hazratbal Shrine and the Shankaracharya Temple with panoramic city and lake views. Night in Srinagar.",
        highlights: ["Nishat Bagh", "Shalimar Bagh", "Hazratbal Shrine", "Shankaracharya Temple"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Srinagar to Sonmarg Glacial Wonder",
        route: "Srinagar → Sonmarg → Srinagar (85 km each way)",
        description: "Full day excursion to Sonmarg, driving along the scenic Sindh river. Explore Thajiwas Glacier on pony or sledges. Return to Srinagar for dinner and overnight stay.",
        highlights: ["Sindh river valley", "Thajiwas glacier", "Zero Point excursion option"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam (Overnight by the Lidder)",
        route: "Srinagar → Pampore → Pahalgam (95 km)",
        description: "Drive through saffron fields and Apple Valley to Pahalgam. Check into your hotel. Explore the meadows, visit Betaab Valley or Baisaran ('Mini Switzerland') by pony. Overnight in Pahalgam.",
        highlights: ["Pampore saffron farms", "Apple Valley", "Betaab Valley", "Lidder River resort stay"],
        stayLocation: "Pahalgam Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Pahalgam to Gulmarg (The Alpine Meadow)",
        route: "Pahalgam → Tangmarg → Gulmarg (140 km / 4 hrs)",
        description: "Drive through scenic country roads to Gulmarg. Check into hotel. Board the Gulmarg Gondola up to Phase 1 & Phase 2. Enjoy skiing, snow sledging, and breathtaking Himalayan views. Overnight in Gulmarg/Tangmarg.",
        highlights: ["Scenic countryside drive", "Gulmarg Gondola", "Snow activities", "Tangmarg pine forest"],
        stayLocation: "Gulmarg / Tangmarg Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Gulmarg to Srinagar Houseboat Experience",
        route: "Gulmarg → Srinagar Dal Lake (52 km)",
        description: "After breakfast, drive back to Srinagar and check into a traditional wooden Houseboat. Spend the afternoon exploring local handicraft bazaars, Pashmina stores, and carpet weaving centres. Overnight on the houseboat.",
        highlights: ["Traditional houseboat stay", "Pashmina & walnut woodcraft shopping", "Serene lake night"],
        stayLocation: "Dal Lake Houseboat",
        meals: "Breakfast & Dinner"
      },
      {
        day: 7,
        title: "Departure from Srinagar",
        route: "Houseboat → Srinagar Airport",
        description: "Enjoy breakfast on the lake deck. Check out and transfer to Srinagar Airport for your onward flight with golden memories of Kashmir.",
        highlights: ["Lake breakfast", "Airport transfer"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ],
    featured: true
  },
  {
    id: "6n-7d-gurez-4star",
    title: "6N/7D Gurez Frontier Experience (4-Star)",
    subtitle: "Cross Razdan Pass to Kashmir's Mystical Northern Frontier",
    duration: "6 Nights / 7 Days",
    days: 7,
    nights: 6,
    division: "Kashmir",
    category: "Offbeat Frontiers",
    startingPoint: "Srinagar Airport",
    endingPoint: "Srinagar Airport",
    tag: "Untouched Himalayas",
    priceFrom: "₹28,500",
    originalPrice: "₹36,000",
    hotelCategory: "4-Star Srinagar Hotels + Boutique Lodges in Gurez",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "A rare Himalayan expedition into Kashmir's northern frontier — the mystical Gurez Valley. Cross the dramatic Razdan Pass at 11,672 ft, trace the turquoise Kishanganga River, gaze at the legendary pyramid of Habba Khatoon Peak, and meet the Dard Shin tribe in ancient wooden villages. Designed for discerning explorers and photographers.",
    inclusions: [
      "2 Nights 4-Star Hotel in Srinagar + 4 Nights Boutique Lodges / Riverside Stays in Gurez (Dawar)",
      "Daily MAP Meals (Lavish Breakfast and Dinner)",
      "Dedicated Private 4x4 / Scorpio / Innova suited for mountain passes",
      "All necessary border permits and check-post clearances",
      "Airport pick-up and drop-off in Srinagar",
      "Bonfire night in Gurez under starlit skies (weather permitting)",
      "Experienced local mountain driver with deep frontier knowledge"
    ],
    exclusions: [
      "Airfare",
      "Personal trekking gear or pony hires",
      "Union vehicles if required for extreme inner line tracks",
      "Laundry, phone charges, personal tips"
    ],
    hotelDetails: [
      { location: "Srinagar (2 Nights)", hotel: "4-Star Luxury Resort (Hotel Four Points by Sheraton / Regenta Central or similar)" },
      { location: "Gurez Dawar (4 Nights)", hotel: "Kaka Palace Gurez / Gurez Knights / River Crescent Boutique Lodge" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Acclimatization",
        route: "Srinagar Airport → 4-Star Hotel Srinagar",
        description: "Arrive at Srinagar airport. Transfer to your 4-star luxury hotel. Spend the day unwinding, enjoying a peaceful shikara cruise, and preparing for the high-mountain journey to Gurez tomorrow.",
        highlights: ["4-Star luxury welcome", "Dal Lake Shikara ride", "Briefing on Gurez permits"],
        stayLocation: "Srinagar 4-Star Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Srinagar across Razdan Pass to Gurez Valley (Dawar)",
        route: "Srinagar → Bandipora → Razdan Pass (11,672 ft) → Dawar (130 km / 5.5 hrs)",
        description: "Early morning start. Ascend towards Razdan Pass offering mind-boggling vistas of Mount Harmukh. Descend into the breathtaking Gurez Valley, carved by the turquoise Kishanganga River. Arrive at Dawar and check in.",
        highlights: ["Manasbal & Wular Lake views", "Razdan Pass summit", "First sight of Habba Khatoon peak", "Kishanganga riverbank"],
        stayLocation: "Boutique Lodge, Dawar Gurez",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Habba Khatoon Spring & Dawar Heritage Walk",
        route: "Dawar → Habba Khatoon Spring → Achura Village",
        description: "Visit the crystal-clear natural spring of Habba Khatoon, named after Kashmir's legendary poetess-queen. Walk through the traditional log-wood hamlets of Achura and Markoot. Meet local Dardic elders and learn about their unique Shin language.",
        highlights: ["Habba Khatoon spring", "Log-wood architecture", "Dard Shin cultural interaction", "Sunset over the pyramid peak"],
        stayLocation: "Boutique Lodge, Dawar Gurez",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Tulail Valley Deep Exploration (Sheikhpora & Chakwali)",
        route: "Dawar → Barnoi → Badugam → Tulail → Chakwali (Last Indian Village)",
        description: "Drive deeper along the Kishanganga into Tulail Valley. Witness raw, untouched landscapes, wildflower meadows, and traditional wooden homes. Reach Chakwali, the last border outpost on the Line of Control.",
        highlights: ["Tulail Valley untamed wilderness", "Chakwali border outpost", "Pristine alpine streams", "Unmatched tranquility"],
        stayLocation: "Boutique Lodge, Dawar Gurez",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Chorwan Border Viewpoint & Gurez Riverside Leisure",
        route: "Dawar → Chorwan → Kishanganga riverside trail",
        description: "Visit Chorwan viewpoint for panoramic sights of the frontier ridges. Afternoon at leisure for angling (trout fishing), photography, or relaxing by the Kishanganga with an evening bonfire under millions of stars.",
        highlights: ["Chorwan border viewpoint", "Trout fishing spot", "Stargazing under zero light pollution", "Frontier bonfire"],
        stayLocation: "Boutique Lodge, Dawar Gurez",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Gurez Valley to Srinagar via Razdan Pass",
        route: "Dawar → Razdan Pass → Bandipora → Srinagar (130 km)",
        description: "Bid farewell to mystical Gurez. Retrace the scenic mountain pass with changing afternoon light. Arrive back in Srinagar, check into your 4-star hotel and enjoy a lavish farewell dinner.",
        highlights: ["Razdan Pass return panorama", "Local walnut shopping in Bandipora", "Relaxing evening in Srinagar"],
        stayLocation: "Srinagar 4-Star Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 7,
        title: "Srinagar Departure",
        route: "Hotel → Srinagar Airport",
        description: "Enjoy breakfast and transfer to Srinagar Airport for your return flight.",
        highlights: ["Airport drop", "Memories of Kashmir's hidden frontier"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ],
    featured: true
  },
  {
    id: "6n-7d-keran-valley",
    title: "6N/7D Keran Valley Riverside Escape",
    subtitle: "Lush Border Paradise on the Kishanganga with Apple Orchards",
    duration: "6 Nights / 7 Days",
    days: 7,
    nights: 6,
    division: "Kashmir",
    category: "Offbeat Frontiers",
    startingPoint: "Srinagar Airport",
    endingPoint: "Srinagar Airport",
    tag: "Exclusive Hidden Gem",
    priceFrom: "₹22,999",
    originalPrice: "₹29,000",
    hotelCategory: "3-Star Srinagar + Riverside Wooden Stays in Keran",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "A scenic Himalayan journey into the newly opened Keran Valley — a lush riverside wonderland tucked along the Kishanganga River directly facing Pakistan-administered Kashmir across a few meters of water. Expect pure mountain air, wooden hillside villages, walnut and apple orchards, and pristine frontier silence.",
    inclusions: [
      "2 Nights 3-Star Hotel in Srinagar + 4 Nights Riverside Stay in Keran Valley",
      "MAP Meal Plan (Breakfast & Dinner daily)",
      "Private rugged vehicle (Scorpio/Bolero/Innova) for the entire journey",
      "Border entry permits and document assistance",
      "Srinagar Airport transfers",
      "Experienced driver with frontier route expertise",
      "Dedicated 24/7 on-ground assistance"
    ],
    exclusions: [
      "Airfare",
      "Personal snacks, porter or guide tips",
      "Any extra union transport if required"
    ],
    hotelDetails: [
      { location: "Srinagar (2 Nights)", hotel: "Hotel Star of Kashmir / Hotel Snowbliss" },
      { location: "Keran Valley (4 Nights)", hotel: "Keran Riverside Resort / Pine Shade Cottages Keran" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Leisure",
        route: "Srinagar Airport → Srinagar Hotel",
        description: "Arrive in Srinagar, transfer to hotel. Relax and enjoy a peaceful evening by Dal Lake.",
        highlights: ["Airport pickup", "Dal Lake promenade", "Permit verification"],
        stayLocation: "Srinagar Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Srinagar to Keran Valley via Pharkian Gali",
        route: "Srinagar → Kupwara → Pharkian Gali (9,600 ft) → Keran (145 km / 5 hrs)",
        description: "Drive through Kupwara's scenic pine belts and ascend Pharkian Gali. Descend into the dramatic green gorge of Keran Valley right along the Kishanganga River. Check into your riverside resort.",
        highlights: ["Pharkian Gali mountain pass", "Kishanganga riverbank", "Direct view of opposite border villages"],
        stayLocation: "Keran Riverside Resort",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Keran Border Exploration & Village Walk",
        route: "Keran Village → Kundian → Border viewpoint",
        description: "Walk through the rustic wooden lanes of Keran. Marvel at the unique sight where houses across the river are in Neelum Valley (POK). Enjoy the pristine river breeze and local Kashmiri tea.",
        highlights: ["Riverfront border view", "Ancient wooden architecture", "Apple and walnut orchards"],
        stayLocation: "Keran Riverside Resort",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Mundian & Pathran Forest Excursion",
        route: "Keran → Mundian → Forest trails",
        description: "Day trip to neighboring Mundian hamlet and forested trails. Enjoy quiet picnics by crystal waterfalls flowing into the Kishanganga.",
        highlights: ["Dense deodar forests", "Hidden waterfalls", "Pristine nature photography"],
        stayLocation: "Keran Riverside Resort",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Riverside Leisure & Stargazing in Keran",
        route: "Keran Valley local",
        description: "Spend a tranquil day by the river. Try angling, birdwatching, or reading. Enjoy an evening campfire by the roaring river under the starry night sky.",
        highlights: ["Campfire by the river", "Unpolluted night sky", "Tranquil mountain relaxation"],
        stayLocation: "Keran Riverside Resort",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Keran Valley back to Srinagar",
        route: "Keran → Pharkian Gali → Kupwara → Srinagar (145 km)",
        description: "Ascend back across Pharkian Gali. Drive back to Srinagar city. Spend your last evening shopping for saffron, dry fruits, and pashmina shawls.",
        highlights: ["Return mountain pass views", "Srinagar shopping in Lal Chowk & Polo View"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 7,
        title: "Srinagar Airport Drop",
        route: "Hotel → Srinagar Airport",
        description: "Transfer to Srinagar Airport after breakfast.",
        highlights: ["Safe airport drop", "Lifelong memories of untouched Kashmir"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ]
  },
  {
    id: "9n-10d-jammu-kashmir-vaishno-devi",
    title: "9N/10D Jammu, Katra Vaishno Devi & Kashmir Odyssey",
    subtitle: "Sacred Darshan, Patnitop Hills, Pahalgam, Gulmarg, Srinagar & Sonmarg",
    duration: "9 Nights / 10 Days",
    days: 10,
    nights: 9,
    division: "Jammu",
    category: "Pilgrimage & Heritage",
    startingPoint: "Jammu Tawi / Jammu Airport",
    endingPoint: "Srinagar Airport (or Jammu Airport)",
    tag: "Complete Sacred & Scenic Circuit",
    priceFrom: "₹26,999",
    originalPrice: "₹34,000",
    hotelCategory: "3-Star Deluxe Hotels throughout",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "A deeply fulfilling 10-day grand journey uniting sacred pilgrimage with Kashmir's peerless natural splendor. Seek divine blessings at the holy shrine of Shri Mata Vaishno Devi in Katra, marvel at the pine-carpeted meadows of Patnitop, walk along the Lidder in Pahalgam, ride the Gulmarg Gondola, and cruise the waters of Dal Lake in Srinagar.",
    inclusions: [
      "9 Nights stay in premium 3-Star Hotels (Jammu, Katra, Patnitop, Pahalgam, Gulmarg, Srinagar)",
      "MAP Plan (Breakfast and Dinner daily at all hotels)",
      "Dedicated Private Cab for the entire 10-day journey from Jammu to Srinagar/Jammu",
      "Jammu Railway Station / Airport pickup and Srinagar Airport drop",
      "1-Hour Shikara ride on Dal Lake in Srinagar",
      "Complimentary mineral water bottles in cab",
      "Driver allowance, fuel, toll, parking and all road taxes",
      "24/7 dedicated travel coordinator"
    ],
    exclusions: [
      "Train or Flight tickets",
      "Vaishno Devi helicopter, battery car, or pony charges",
      "Gulmarg Gondola cable car passes",
      "Union taxis in Pahalgam (Aru/Betaab) or Sonmarg (Zero Point)",
      "Entry fees to forts, temples and Mughal gardens"
    ],
    hotelDetails: [
      { location: "Jammu (1 Night)", hotel: "Hotel Rajdhani / Hotel Asia Jammu / Similar" },
      { location: "Katra (2 Nights)", hotel: "The Black Pearl / Hotel Moon Light International / Similar" },
      { location: "Patnitop (1 Night)", hotel: "Hotel Hilltop / Hotel Pine Spring / Similar" },
      { location: "Pahalgam (2 Nights)", hotel: "Hotel Brooklyn Resort / Hotel Poet's Inn / Similar" },
      { location: "Gulmarg (1 Night)", hotel: "Hotel Countryside / Gulmarg House Tangmarg / Similar" },
      { location: "Srinagar (2 Nights)", hotel: "Hotel Star of Kashmir / Hotel Snowbliss / Deluxe Houseboat" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jammu & Sightseeing",
        route: "Jammu Station/Airport → Hotel Jammu",
        description: "Welcome to the City of Temples. Check in to hotel. Visit historic Raghunath Temple, Bahu Fort, and the Bahu Garden overlooking the Tawi river. Dinner and overnight stay.",
        highlights: ["Raghunath Temple", "Bahu Fort & Garden", "Tawi river views"],
        stayLocation: "Jammu Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Jammu to Katra (Holy Basecamp)",
        route: "Jammu → Katra (50 km / 1.5 hrs)",
        description: "After breakfast, scenic drive to Katra, the holy basecamp for Vaishno Devi. Check into hotel. Evening at leisure to prepare for yatra and explore the Katra bazaars.",
        highlights: ["Scenic Shivalik foothills drive", "Katra dry fruit & pooja market"],
        stayLocation: "Katra Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Holy Shri Mata Vaishno Devi Darshan",
        route: "Katra → Banganga → Ardhkuwari → Holy Bhawan → Katra",
        description: "Early morning trek or battery car/helicopter ride to the sacred Holy Cave of Shri Mata Vaishno Devi. Seek divine darshan of the natural Pindies. Return to Katra hotel in the evening.",
        highlights: ["Holy Bhawan Darshan", "Bhairon Ghati option", "Spiritual fulfillment"],
        stayLocation: "Katra Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Katra to Patnitop via Mansar Lake",
        route: "Katra → Mansar Lake → Patnitop (105 km / 3.5 hrs)",
        description: "Drive towards the misty hill retreat of Patnitop, visiting the sacred Mansar Lake en route. Walk through dense cedar and pine forests at Sanasar and enjoy the cool mountain air.",
        highlights: ["Mansar Lake", "Patnitop pine plateau", "Naag Temple visit"],
        stayLocation: "Patnitop Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Patnitop across Qazigund Tunnel to Pahalgam",
        route: "Patnitop → Navyug Tunnel → Pahalgam (140 km / 4 hrs)",
        description: "Cross the magnificent 8.5 km Navyug Tunnel entering the Kashmir Valley. Arrive at Pahalgam, check in and enjoy an afternoon walk along the rushing Lidder River.",
        highlights: ["Navyug Tunnel crossing", "First sight of Kashmir valley", "Lidder riverbank stroll"],
        stayLocation: "Pahalgam Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Pahalgam Sightseeing (Betaab, Aru, Chandanwari)",
        route: "Pahalgam Local",
        description: "Full day in Pahalgam. Take a local union cab to visit Betaab Valley, Aru Valley, and Chandanwari (start of Amarnath Yatra). Evening free for shopping Kashmiri shawls and cricket bats.",
        highlights: ["Betaab Valley", "Aru Valley", "Chandanwari", "Baisaran meadow pony ride"],
        stayLocation: "Pahalgam Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 7,
        title: "Pahalgam to Gulmarg Alpine Wonderland",
        route: "Pahalgam → Tangmarg → Gulmarg (140 km / 4 hrs)",
        description: "Drive across Apple Valley to Gulmarg. Check in. Ride the Gulmarg Gondola to Phase 1 & 2 for world-class snow views and mountain peaks. Overnight in Gulmarg / Tangmarg.",
        highlights: ["Gulmarg Gondola Ride", "Apharwat Peak snow", "St. Mary's Church"],
        stayLocation: "Gulmarg / Tangmarg Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 8,
        title: "Gulmarg to Srinagar & Dal Lake Shikara",
        route: "Gulmarg → Srinagar (52 km / 1.5 hrs)",
        description: "Drive to Srinagar. Check in to your hotel or deluxe houseboat. Visit the terraced Mughal Gardens (Nishat & Shalimar). Enjoy a sunset Shikara cruise on Dal Lake.",
        highlights: ["Mughal Gardens", "1-Hour Dal Lake Shikara ride", "Boulevard walk"],
        stayLocation: "Srinagar Hotel / Houseboat",
        meals: "Breakfast & Dinner"
      },
      {
        day: 9,
        title: "Srinagar to Sonmarg (Meadow of Gold) Excursion",
        route: "Srinagar → Sonmarg → Srinagar (85 km each way)",
        description: "Day trip to Sonmarg following the roaring Sindh River. Visit the majestic Thajiwas Glacier. Return to Srinagar for your final farewell dinner in Kashmir.",
        highlights: ["Sonmarg golden meadows", "Thajiwas Glacier", "Sindh river trout valley"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 10,
        title: "Srinagar Departure",
        route: "Hotel → Srinagar Airport (or Jammu Airport / Station drop)",
        description: "After breakfast, transfer to Srinagar Airport or return drive to Jammu with memories of a lifetime.",
        highlights: ["Seamless airport transfer", "Completed grand odyssey"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ],
    featured: true
  },
  {
    id: "5n-6d-hot-deal-family-jammu",
    title: "5N/6D Hot Deal: Family Special (Jammu to Jammu)",
    subtitle: "Jammu, Katra, Patnitop, Srinagar & Gulmarg Family Holiday",
    duration: "5 Nights / 6 Days",
    days: 6,
    nights: 5,
    division: "Jammu",
    category: "Hot Deals",
    startingPoint: "Jammu Tawi / Jammu Airport",
    endingPoint: "Jammu Tawi / Jammu Airport",
    tag: "Hot Deal - Family Saver",
    priceFrom: "₹14,999",
    originalPrice: "₹19,500",
    hotelCategory: "3-Star Family Friendly Stays",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "An unbeatable value family package starting and ending in Jammu. Includes private cab, comfortable 3-star family stays, MAP meal plan, Shikara ride on Dal Lake, Gulmarg meadow excursion, and Patnitop pine forests.",
    inclusions: [
      "5 Nights accommodation in comfortable 3-Star family hotels",
      "MAP Plan (Breakfast and Lunch or Dinner daily)",
      "Private Cab for all 6 days from Jammu to Kashmir and return to Jammu",
      "1-Hour Shikara ride on Dal Lake",
      "Complimentary mineral water in vehicle",
      "Tolls, fuel, driver allowance and parking fees included",
      "Local Tangmarg support team assistance"
    ],
    exclusions: [
      "Train or air tickets",
      "Pony rides and adventure sports",
      "Gondola cable car tickets",
      "Union cab for local spots"
    ],
    hotelDetails: [
      { location: "Jammu / Katra", hotel: "3-Star Deluxe Hotel" },
      { location: "Srinagar (3 Nights)", hotel: "3-Star Family Hotel & Houseboat" },
      { location: "Patnitop / Pahalgam", hotel: "3-Star Resort" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Jammu Arrival & Drive to Patnitop",
        route: "Jammu → Patnitop",
        description: "Pickup from Jammu railway station/airport. Drive through pine-lined hills to Patnitop. Check in and relax.",
        highlights: ["Scenic Shivalik climb", "Patnitop pine meadows"],
        stayLocation: "Patnitop Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Patnitop to Srinagar & Dal Lake Shikara",
        route: "Patnitop → Srinagar",
        description: "Drive across Navyug tunnel to Srinagar. Check in to hotel. Evening 1-hour relaxing Shikara ride.",
        highlights: ["Tunnel crossing", "Dal Lake Shikara ride"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg Day Trip",
        route: "Srinagar → Tangmarg → Gulmarg → Srinagar",
        description: "Full day excursion to Gulmarg. Experience snow at Apharwat Peak via Gondola cable car. Return to Srinagar.",
        highlights: ["Gulmarg Gondola", "Snow activities", "Tangmarg pine road"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam (Valley of Shepherds)",
        route: "Srinagar → Pahalgam → Srinagar",
        description: "Day excursion to Pahalgam. Visit saffron fields of Pampore and walk along the Lidder River.",
        highlights: ["Saffron fields", "Lidder River", "Betaab Valley"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Srinagar Mughal Gardens & Houseboat Stay",
        route: "Srinagar Local",
        description: "Visit Nishat Bagh and Shalimar Bagh. Check into a traditional Dal Lake Houseboat for an unforgettable night.",
        highlights: ["Mughal Gardens", "Dal Lake Houseboat experience"],
        stayLocation: "Dal Lake Houseboat",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Srinagar to Jammu Departure",
        route: "Srinagar → Jammu Station/Airport Drop",
        description: "Scenic return drive to Jammu with drop-off at railway station or airport.",
        highlights: ["Scenic return drive", "Jammu drop"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ]
  },
  {
    id: "5n-6d-kishtwar-bhaderwah",
    title: "5N/6D Kishtwar & Bhaderwah Valley of Jewels",
    subtitle: "Saffron Fields, Paddar Sapphire Trail, Jai Valley & Sinthan Top",
    duration: "5 Nights / 6 Days",
    days: 6,
    nights: 5,
    division: "Jammu",
    category: "Offbeat Frontiers",
    startingPoint: "Jammu / Srinagar",
    endingPoint: "Jammu / Srinagar",
    tag: "Jewel of Jammu Division",
    priceFrom: "₹19,500",
    originalPrice: "₹25,000",
    hotelCategory: "Deluxe Mountain Resorts & Cottages",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "Explore the dramatic Chenab canyon landscapes of Kishtwar and the lush pine plateaus of Bhaderwah (frequently called the Mini Switzerland of Jammu). Walk across the saffron fields of Kishtwar, visit the ancient Machail Mata base in Paddar Valley, cross the breath-stopping Sinthan Pass, and relax in the rolling meadows of Jai Valley.",
    inclusions: [
      "5 Nights Deluxe accommodation in Bhaderwah, Kishtwar and Patnitop",
      "MAP Plan (Breakfast and Dinner daily)",
      "Private dedicated mountain cab (Scorpio/Innova) with seasoned hill driver",
      "Sightseeing in Bhaderwah, Kishtwar, Sinthan Top, and Sanasar",
      "All toll taxes, parking fees, and driver allowances included",
      "24/7 local operations assistance"
    ],
    exclusions: [
      "Airfare or train tickets",
      "Pony rides and personal adventure activities",
      "Tips and personal expenses"
    ],
    hotelDetails: [
      { location: "Bhaderwah (2 Nights)", hotel: "Pine Ridge Resort / Hotel Tourist Complex" },
      { location: "Kishtwar (2 Nights)", hotel: "Kishtwar Heights / Hotel Chenab Breeze" },
      { location: "Patnitop (1 Night)", hotel: "Hotel Hilltop / Hotel Pine Spring" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Jammu to Bhaderwah (Mini Switzerland)",
        route: "Jammu → Batote → Doda → Bhaderwah (190 km / 6 hrs)",
        description: "Drive through the picturesque Chenab Valley to the scenic mountain town of Bhaderwah. Check in to resort. Evening stroll through the pine-scented town and local temple square.",
        highlights: ["Chenab river views", "Pine clad hills", "Bhaderwah sunset"],
        stayLocation: "Bhaderwah Resort",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Jai Valley, Chinta Valley & Guldanda Exploration",
        route: "Bhaderwah → Jai Valley → Chinta Valley → Guldanda",
        description: "Full day tour of Bhaderwah's crowning jewels: the rolling green expanse of Jai Valley, clear mountain streams, and the high-altitude pine meadows of Guldanda.",
        highlights: ["Jai Valley stream", "Chinta apple orchards", "Guldanda meadow"],
        stayLocation: "Bhaderwah Resort",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Bhaderwah to Kishtwar (The Land of Saffron)",
        route: "Bhaderwah → Doda → Kishtwar (80 km / 2.5 hrs)",
        description: "Drive to Kishtwar, framed by the majestic snow peaks of the Brahma and Sickle Moon massifs. Visit the Chowgan ground, the historic Kishtwar saffron plateau, and local shrines.",
        highlights: ["Kishtwar saffron fields", "Chowgan historic ground", "Chenab gorge viewpoints"],
        stayLocation: "Kishtwar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Paddar Valley & Sapphire Country Excursion",
        route: "Kishtwar → Gulabgarh → Paddar Valley → Kishtwar",
        description: "Excursion into the ruggedly beautiful Paddar Valley, world-famous for its rare Kashmir Blue Sapphires and the Machail Mata pilgrimage trail along the Chenab tributaries.",
        highlights: ["Paddar rugged mountains", "Machail Yatra base", "Alpine stream trails"],
        stayLocation: "Kishtwar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Kishtwar across Sinthan Top to Srinagar / Patnitop",
        route: "Kishtwar → Sinthan Top (12,300 ft) → Patnitop / Srinagar",
        description: "Ascend the exhilarating Sinthan Pass with 360-degree vistas of Himalayan peaks and snow fields. Proceed to your comfortable stay for your final mountain evening.",
        highlights: ["Sinthan Top Pass summit", "Panoramic views", "Crisp alpine breeze"],
        stayLocation: "Patnitop / Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Departure Transfer",
        route: "Hotel → Jammu Railway Station / Airport",
        description: "Enjoy breakfast and transfer to Jammu or Srinagar airport/station for departure.",
        highlights: ["Airport / Station drop", "Precious memories of Jammu's hidden valleys"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ]
  },
  {
    id: "5n-6d-hot-deal-group-srinagar",
    title: "5N/6D Hot Deal: Group Special (Srinagar to Srinagar)",
    subtitle: "Srinagar, Houseboat, Gulmarg Gondola, Pahalgam & Doodhpathri",
    duration: "5 Nights / 6 Days",
    days: 6,
    nights: 5,
    division: "Kashmir",
    category: "Hot Deals",
    startingPoint: "Srinagar Airport",
    endingPoint: "Srinagar Airport",
    tag: "Group Saver - Best Price",
    priceFrom: "₹13,999",
    originalPrice: "₹18,000",
    hotelCategory: "3-Star Deluxe Hotels + Houseboat",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "Specially tailored for friend groups, corporate teams, and college reunions. Circles out from Srinagar with seamless transfers, comfortable stays, group dining, and visits to Gulmarg, Pahalgam, and the untouched lush meadows of Doodhpathri.",
    inclusions: [
      "5 Nights accommodation (4 Nights Hotel + 1 Night Deluxe Houseboat)",
      "MAP Plan (Daily Breakfast + Dinner)",
      "Dedicated Tempo Traveller / Innova fleet for group convenience",
      "1-Hour Shikara ride on Dal Lake",
      "Airport pick-up and drop-off",
      "All toll, parking, driver charges included",
      "24/7 dedicated support"
    ],
    exclusions: [
      "Airfare",
      "Gondola tickets",
      "Pahalgam union cab & pony rides",
      "Personal shopping and tips"
    ],
    hotelDetails: [
      { location: "Srinagar (4 Nights)", hotel: "3-Star Deluxe Hotel (Twin/Triple sharing)" },
      { location: "Dal Lake (1 Night)", hotel: "Deluxe Group Wooden Houseboat" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Srinagar Airport Arrival & Dal Lake Shikara",
        route: "Srinagar Airport → Srinagar Hotel",
        description: "Group meet & greet at Srinagar airport. Hotel check-in. Evening Shikara ride on Dal Lake.",
        highlights: ["Group airport pickup", "Shikara ride on Dal Lake"],
        stayLocation: "Srinagar Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Gulmarg Day Trip & Gondola Experience",
        route: "Srinagar → Tangmarg → Gulmarg → Srinagar",
        description: "Group excursion to Gulmarg. Snow battles at Phase 1 & 2, snowmobiling, and cafe hopping.",
        highlights: ["Gulmarg Gondola", "Snow activities", "Alpine cafes"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Pahalgam Valley & Lidder Riverside Fun",
        route: "Srinagar → Pahalgam → Srinagar",
        description: "Visit Betaab Valley, Aru Valley and enjoy white water rafting in the Lidder River (seasonal).",
        highlights: ["Lidder river rafting", "Betaab valley group photos", "Saffron market stop"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Doodhpathri (Valley of Milk) Pristine Excursion",
        route: "Srinagar → Budgam → Doodhpathri → Srinagar",
        description: "Offbeat day trip to Doodhpathri's lush rolling green meadows and the gushing Shaliganga stream.",
        highlights: ["Doodhpathri rolling meadows", "Shaliganga riverbank picnic"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Mughal Gardens & Houseboat Party Night",
        route: "Srinagar City → Dal Lake Houseboat",
        description: "Visit Nishat & Shalimar gardens. Check in to Houseboat for a celebratory evening with Kashmiri Wazwan & music.",
        highlights: ["Mughal heritage", "Houseboat group dinner", "Lakeside evening"],
        stayLocation: "Dal Lake Houseboat",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Srinagar Airport Departure",
        route: "Houseboat → Srinagar Airport",
        description: "Check out and group transfer to Srinagar Airport.",
        highlights: ["Airport drop"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ]
  },
  {
    id: "11n-12d-ladakh-grand-tour",
    title: "11N/12D Ladakh Grand Overland Circuit",
    subtitle: "Srinagar to Leh via Kargil, Zanskar Vista, Nubra Valley & Pangong Tso",
    duration: "11 Nights / 12 Days",
    days: 12,
    nights: 11,
    division: "Ladakh",
    category: "Ladakh & Kargil",
    startingPoint: "Srinagar",
    endingPoint: "Srinagar (or Leh Drop)",
    tag: "Epic Himalayan Expedition",
    priceFrom: "₹42,500",
    originalPrice: "₹52,000",
    hotelCategory: "Deluxe Hotels & Luxury Swiss Camps",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "The ultimate Himalayan road odyssey connecting the lush green gardens of Kashmir to the stark high-altitude deserts of Ladakh. Cross the treacherous Zoji La Pass, pay tribute at the Kargil War Memorial in Drass, cross Khardung La (17,982 ft) into the Nubra Valley, ride double-humped Bactrian camels on cold sand dunes, and gaze upon the changing blues of Pangong Tso.",
    inclusions: [
      "11 Nights accommodation in handpicked Deluxe Hotels & Swiss Luxury Tents",
      "MAP Plan (Breakfast and Dinner daily)",
      "High-clearance SUV (Innova / Scorpio / Tempo Traveller) with experienced Ladakh driver",
      "Inner Line Permits (ILP) for Nubra Valley, Pangong Tso, and Khardung La",
      "Oxygen cylinder in vehicle for high-altitude emergency safety",
      "All toll taxes, environmental fees, fuel, and parking",
      "24/7 mountain support"
    ],
    exclusions: [
      "Airfare",
      "Camel rides in Hunder sand dunes",
      "Monastery entry fees and personal camera permits",
      "Personal medical expenses and travel insurance"
    ],
    hotelDetails: [
      { location: "Srinagar (2 Nights)", hotel: "Hotel Star of Kashmir / Deluxe Houseboat" },
      { location: "Kargil (2 Nights)", hotel: "Hotel PC Palace / Hotel Kargil Heights" },
      { location: "Leh (4 Nights)", hotel: "Hotel Grand Dragon / The Zen Ladakh / Similar Deluxe" },
      { location: "Nubra Valley - Hunder (2 Nights)", hotel: "Deluxe Swiss Tents / Hunder Resort" },
      { location: "Pangong Lake - Spangmik (1 Night)", hotel: "Luxury Lake View Swiss Camp" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Dal Lake Shikara",
        route: "Srinagar Airport → Srinagar Hotel",
        description: "Arrive in Srinagar. Check in, relax, and take a gentle sunset Shikara ride on Dal Lake.",
        highlights: ["Dal Lake Shikara", "Tour briefing"],
        stayLocation: "Srinagar Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Srinagar across Zoji La Pass & Drass to Kargil",
        route: "Srinagar → Sonmarg → Zoji La (11,575 ft) → Drass → Kargil (204 km / 7 hrs)",
        description: "Early departure across Sonmarg and the legendary Zoji La pass. Stop at Drass (second coldest inhabited place on earth) and pay tribute at the Kargil War Memorial. Arrive in Kargil by evening.",
        highlights: ["Zoji La mountain crossing", "Kargil War Memorial tribute", "Drass valley"],
        stayLocation: "Kargil Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Kargil to Leh via Mulbekh, Namika La & Lamayuru",
        route: "Kargil → Mulbekh Giant Buddha → Namika La → Fotu La (13,478 ft) → Lamayuru → Leh (215 km)",
        description: "Drive through moonland landscapes of Lamayuru monastery, cross Fotu La, visit Magnetic Hill, Gurudwara Pathar Sahib, and confluence of Indus & Zanskar rivers (Sangam).",
        highlights: ["Mulbekh rock Buddha", "Lamayuru Moonland", "Sangam confluence", "Magnetic Hill"],
        stayLocation: "Leh Deluxe Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Leh Acclimatization & Monasteries",
        route: "Leh Local Sightseeing",
        description: "Rest morning for acclimatization. Afternoon visit to Leh Palace, Shanti Stupa, and the vibrant Leh Main Bazaar.",
        highlights: ["Shanti Stupa sunset", "Leh Palace", "Leh market shopping"],
        stayLocation: "Leh Deluxe Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Leh to Nubra Valley via Khardung La (17,982 ft)",
        route: "Leh → Khardung La → Diskit → Hunder (125 km / 5 hrs)",
        description: "Ascend the legendary Khardung La Pass, one of the highest motorable roads in the world. Descend into the dramatic Nubra Valley. Visit the giant Maitreya Buddha statue at Diskit Monastery.",
        highlights: ["Khardung La Pass summit", "Diskit 100 ft Buddha", "Nubra river valley"],
        stayLocation: "Hunder Luxury Swiss Camp",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Nubra Valley: Hunder Dunes & Turtuk Border Village",
        route: "Hunder → Turtuk (Balti Village) → Hunder (160 km round trip)",
        description: "Excursion to Turtuk, a unique Balti culture village opened to tourists in 2010. Walk through apricot groves. Evening camel ride on the cold white sand dunes of Hunder.",
        highlights: ["Turtuk Baltistan culture", "Apricot orchards", "Bactrian double-humped camel ride"],
        stayLocation: "Hunder Luxury Swiss Camp",
        meals: "Breakfast & Dinner"
      },
      {
        day: 7,
        title: "Nubra Valley to Pangong Tso via Shyok River Route",
        route: "Hunder → Shyok Valley → Durbuk → Tangtse → Pangong Tso (160 km / 5 hrs)",
        description: "Drive along the wild Shyok River route to the world-famous Pangong Lake (14,270 ft). Witness the magical changing shades of blue. Overnight in lakefront swiss camp.",
        highlights: ["Shyok river canyon drive", "First glimpse of Pangong Tso", "Sunset over the azure lake"],
        stayLocation: "Pangong Lake Luxury Camp",
        meals: "Breakfast & Dinner"
      },
      {
        day: 8,
        title: "Pangong Tso Sunrise & Return to Leh via Chang La",
        route: "Pangong Tso → Chang La Pass (17,590 ft) → Thiksey → Leh (150 km / 5 hrs)",
        description: "Catch the surreal sunrise over Pangong Lake. Drive back to Leh crossing Chang La Pass. Visit the magnificent 12-storey Thiksey Monastery and Shey Palace.",
        highlights: ["Pangong sunrise", "Chang La Pass crossing", "Thiksey Monastery"],
        stayLocation: "Leh Deluxe Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 9,
        title: "Leh to Kargil Return via Alchi Monastery",
        route: "Leh → Alchi → Kargil (215 km)",
        description: "Begin the return journey towards Kashmir. Visit the 1,000-year-old Alchi Monastery renowned for ancient Kashmiri-style Buddhist murals. Overnight in Kargil.",
        highlights: ["Alchi ancient murals", "Scenic Indus river drive"],
        stayLocation: "Kargil Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 10,
        title: "Kargil to Srinagar via Sonmarg",
        route: "Kargil → Drass → Zoji La → Srinagar (204 km)",
        description: "Cross back through Drass and Zoji La Pass into the verdant Kashmir Valley. Arrive in Srinagar and check into a luxury Dal Lake Houseboat.",
        highlights: ["Return across Zoji La", "Kashmir valley welcome", "Houseboat stay"],
        stayLocation: "Dal Lake Houseboat",
        meals: "Breakfast & Dinner"
      },
      {
        day: 11,
        title: "Srinagar Leisure & Gulmarg Excursion",
        route: "Srinagar → Gulmarg → Srinagar",
        description: "Day excursion to Gulmarg pine meadows or shopping in Srinagar's old craft bazaars.",
        highlights: ["Gulmarg meadow visit", "Pashmina & walnut wood shopping"],
        stayLocation: "Srinagar Deluxe Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 12,
        title: "Srinagar Departure",
        route: "Hotel → Srinagar Airport",
        description: "Check out and transfer to Srinagar Airport for your return flight.",
        highlights: ["Airport drop", "Epic grand circuit completion"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ],
    featured: true
  },
  {
    id: "5n-6d-leh-ladakh-highlights",
    title: "5N/6D Leh Ladakh Highlights",
    subtitle: "Leh, Khardung La, Nubra Valley & Pangong Tso",
    duration: "5 Nights / 6 Days",
    days: 6,
    nights: 5,
    division: "Ladakh",
    category: "Ladakh & Kargil",
    startingPoint: "Leh Kushok Bakula Airport",
    endingPoint: "Leh Kushok Bakula Airport",
    tag: "High Altitude Classic",
    priceFrom: "₹21,999",
    originalPrice: "₹28,000",
    hotelCategory: "3-Star Deluxe Hotels & Swiss Tents",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "The ideal compact Ladakh itinerary for travelers arriving directly at Leh Airport. Experience Khardung La, Diskit Monastery, camel rides in Hunder sand dunes, the spellbinding colors of Pangong Lake, and Chang La Pass.",
    inclusions: [
      "5 Nights accommodation (3 Nights Leh Hotel + 1 Night Nubra Camp + 1 Night Pangong Camp)",
      "MAP Plan (Breakfast & Dinner daily)",
      "Private sanitized Innova / Xylo / Tempo vehicle",
      "Inner Line Permits & Ladakh wildlife fees",
      "Emergency medical oxygen cylinder in vehicle",
      "Airport pickup and drop at Leh Airport"
    ],
    exclusions: [
      "Airfare to Leh",
      "Camel rides, monastery fees, monument tickets",
      "Personal gear and tips"
    ],
    hotelDetails: [
      { location: "Leh (3 Nights)", hotel: "Hotel Grand Ladakh / Hotel Singge Palace / Similar" },
      { location: "Nubra Valley (1 Night)", hotel: "Deluxe Swiss Camp Hunder" },
      { location: "Pangong Lake (1 Night)", hotel: "Lakefront Camp Spangmik" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Complete Acclimatization",
        route: "Leh Airport → Leh Hotel",
        description: "Fly into Leh (11,500 ft). Transfer to hotel. Mandatory full day rest to acclimatize to high altitude. Evening walk to Leh Market.",
        highlights: ["Mountain flight views", "Acclimatization rest", "Leh Main Bazaar"],
        stayLocation: "Leh Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Leh Local Sightseeing & Monasteries",
        route: "Leh → Hall of Fame → Magnetic Hill → Sangam → Shanti Stupa",
        description: "Visit the Hall of Fame war museum, Magnetic Hill gravity phenomenon, Sangam confluence, and sunset at Shanti Stupa.",
        highlights: ["Magnetic Hill", "Sangam confluence", "Shanti Stupa sunset"],
        stayLocation: "Leh Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Leh to Nubra Valley across Khardung La",
        route: "Leh → Khardung La (17,982 ft) → Diskit → Hunder (125 km)",
        description: "Drive over Khardung La Pass. Visit Diskit Monastery and Maitreya Buddha. Enjoy double-humped camel safari on Hunder dunes.",
        highlights: ["Khardung La Pass", "Diskit Monastery", "Hunder sand dunes camel ride"],
        stayLocation: "Nubra Swiss Camp",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Nubra to Pangong Tso via Shyok River",
        route: "Hunder → Shyok → Pangong Lake (160 km)",
        description: "Scenic drive along Shyok River to Pangong Lake. Witness breathtaking colors as the sun sets over the world's highest saltwater lake.",
        highlights: ["Shyok valley route", "Pangong Lake sunset", "Star-filled night sky"],
        stayLocation: "Pangong Camp",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Pangong Tso Sunrise & Return to Leh via Chang La",
        route: "Pangong → Chang La (17,590 ft) → Thiksey → Leh (150 km)",
        description: "Marvel at morning reflections on Pangong Lake. Return across Chang La Pass with stops at Thiksey Monastery and 3 Idiots School.",
        highlights: ["Pangong sunrise", "Chang La Pass", "Thiksey Monastery"],
        stayLocation: "Leh Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Leh Airport Departure",
        route: "Hotel → Leh Airport",
        description: "Transfer to Leh Airport for your return flight.",
        highlights: ["Airport drop", "Himalayan memories"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ]
  },
  {
    id: "7n-8d-gurez-tulail-3star",
    title: "7N/8D Gurez Valley & Tulail Untouched Explorer",
    subtitle: "Dawar, Tulail, Sheikhpora, Habba Khatoon Peak & Kishanganga River",
    duration: "7 Nights / 8 Days",
    days: 8,
    nights: 7,
    division: "Kashmir",
    category: "Offbeat Frontiers",
    startingPoint: "Srinagar Airport",
    endingPoint: "Srinagar Airport",
    tag: "Untamed Nature",
    priceFrom: "₹24,500",
    originalPrice: "₹31,000",
    hotelCategory: "3-Star Srinagar Hotels + Riverfront Lodges in Gurez",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "A slow-paced, scenic Himalayan escape into Kashmir's most untouched frontier — Gurez Valley. Cross dramatic Razdan Pass, stay beside the Kishanganga River, walk to ancient wooden hamlets like Tulail and Dawar, and meet the warm Dard Shina community. Perfect for nature lovers seeking starry skies and tranquility.",
    inclusions: [
      "3 Nights in 3-Star Srinagar Hotel + 4 Nights in Boutique/Riverside Lodges in Gurez",
      "Daily MAP Meals (Breakfast & Dinner)",
      "Private dedicated vehicle for all 8 days",
      "All border permits and check-post paperwork",
      "1-Hour Shikara ride in Srinagar",
      "All tolls, driver allowance and fuel"
    ],
    exclusions: [
      "Airfare",
      "Personal expenses and tips",
      "Pony or local extreme track transport if required"
    ],
    hotelDetails: [
      { location: "Srinagar (3 Nights)", hotel: "Hotel Star of Kashmir / Hotel Snowbliss" },
      { location: "Gurez Valley (4 Nights)", hotel: "Kaka Palace Dawar / River Crescent Lodge" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Dal Lake Shikara",
        route: "Srinagar Airport → Srinagar Hotel",
        description: "Arrive in Srinagar. Hotel check in. Evening Shikara ride on Dal Lake.",
        highlights: ["Dal Lake Shikara", "Permit prep"],
        stayLocation: "Srinagar Hotel",
        meals: "Dinner Included"
      },
      {
        day: 2,
        title: "Srinagar to Gurez Valley via Razdan Pass",
        route: "Srinagar → Bandipora → Razdan Pass (11,672 ft) → Dawar (130 km)",
        description: "Drive past Wular Lake and climb Razdan Pass with views of Mount Harmukh. Descend into Dawar Gurez.",
        highlights: ["Razdan Pass", "Harmukh peak view", "First view of Habba Khatoon"],
        stayLocation: "Gurez Lodge",
        meals: "Breakfast & Dinner"
      },
      {
        day: 3,
        title: "Dawar Village Heritage & Habba Khatoon Spring",
        route: "Dawar → Habba Khatoon Spring → Markoot",
        description: "Visit the legendary Habba Khatoon Spring and ancient Dardic wooden hamlets.",
        highlights: ["Habba Khatoon spring", "Wooden architecture", "Dard culture"],
        stayLocation: "Gurez Lodge",
        meals: "Breakfast & Dinner"
      },
      {
        day: 4,
        title: "Tulail Valley Exploration (Sheikhpora & Badugam)",
        route: "Dawar → Sheikhpora → Badugam → Tulail",
        description: "Deep exploration of Tulail Valley's untouched wilderness and alpine streams.",
        highlights: ["Tulail untouched valley", "Riverbed walks", "Wildflowers"],
        stayLocation: "Gurez Lodge",
        meals: "Breakfast & Dinner"
      },
      {
        day: 5,
        title: "Chorwan Border Outpost & Kishanganga Angling",
        route: "Dawar → Chorwan → River trail",
        description: "Visit Chorwan viewpoint near the border. Afternoon by the river enjoying trout angling and photography.",
        highlights: ["Chorwan viewpoint", "Trout fishing", "Evening campfire"],
        stayLocation: "Gurez Lodge",
        meals: "Breakfast & Dinner"
      },
      {
        day: 6,
        title: "Gurez Valley to Srinagar Return",
        route: "Dawar → Razdan Pass → Srinagar (130 km)",
        description: "Drive back across Razdan Pass to Srinagar. Check in to hotel.",
        highlights: ["Razdan Pass descent", "Srinagar arrival"],
        stayLocation: "Srinagar Hotel",
        meals: "Breakfast & Dinner"
      },
      {
        day: 7,
        title: "Srinagar Mughal Gardens & Houseboat Stay",
        route: "Srinagar Local",
        description: "Explore Nishat and Shalimar gardens. Check into a Dal Lake Houseboat for your last night.",
        highlights: ["Mughal Gardens", "Dal Lake Houseboat"],
        stayLocation: "Dal Lake Houseboat",
        meals: "Breakfast & Dinner"
      },
      {
        day: 8,
        title: "Srinagar Airport Departure",
        route: "Houseboat → Srinagar Airport",
        description: "Check out and transfer to Srinagar Airport.",
        highlights: ["Airport drop"],
        stayLocation: "Departure",
        meals: "Breakfast Included"
      }
    ]
  },
  {
    id: "11n-12d-offbeat-kashmir-unveiled",
    title: "11N/12D Offbeat Kashmir Unveiled",
    subtitle: "Gurez, Keran, Bangus, Doodhpathri, Sinthan Top & Secret Valleys",
    duration: "11 Nights / 12 Days",
    days: 12,
    nights: 11,
    division: "Kashmir",
    category: "Offbeat Frontiers",
    startingPoint: "Srinagar Airport",
    endingPoint: "Srinagar Airport",
    tag: "Beyond Regular Tourist Tracks",
    priceFrom: "₹38,000",
    originalPrice: "₹48,000",
    hotelCategory: "Boutique Stays & Heritage Houseboats",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],
    overview: "For the true explorer who wants to leave crowded tourist spots behind. Unveils Kashmir's most pristine frontiers: the mystical Gurez Valley, the riverside beauty of Keran on the border, the untouched rolling plateaus of Doodhpathri and Yusmarg, and the dramatic high mountain pass of Sinthan Top.",
    inclusions: [
      "11 Nights accommodation in boutique retreats, wooden lodges & houseboats",
      "MAP Plan (Breakfast & Dinner daily)",
      "Dedicated high-ground clearance SUV with expert local driver",
      "All frontier border permits & check-post clearances",
      "1-Hour Dal Lake Shikara cruise",
      "All toll, fuel, parking and driver allowances",
      "24/7 Tangmarg operations backstop"
    ],
    exclusions: [
      "Flight tickets",
      "Personal trekking or pony charges",
      "Tips and personal expenses"
    ],
    hotelDetails: [
      { location: "Srinagar (3 Nights)", hotel: "Boutique Hotel & Dal Lake Houseboat" },
      { location: "Gurez Valley (3 Nights)", hotel: "Boutique River Lodge Dawar" },
      { location: "Keran Valley (2 Nights)", hotel: "Keran Riverside Resort" },
      { location: "Pahalgam / Sinthan (3 Nights)", hotel: "Pine Woods Resort" }
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar & Dal Lake Sunset", route: "Srinagar Airport → Srinagar", description: "Arrive in Srinagar, check in, and enjoy sunset Shikara ride.", highlights: ["Dal Lake Shikara"], stayLocation: "Srinagar", meals: "Dinner" },
      { day: 2, title: "Srinagar to Gurez Valley via Razdan Pass", route: "Srinagar → Razdan Pass → Dawar", description: "Cross Razdan Pass to mystical Gurez Valley.", highlights: ["Razdan Pass", "Habba Khatoon Peak"], stayLocation: "Gurez", meals: "Breakfast & Dinner" },
      { day: 3, title: "Gurez: Habba Khatoon Spring & Dard Culture", route: "Dawar → Achura → Markoot", description: "Explore traditional wooden hamlets and crystal springs.", highlights: ["Habba Khatoon Spring", "Log villages"], stayLocation: "Gurez", meals: "Breakfast & Dinner" },
      { day: 4, title: "Tulail Valley & Chakwali Border Outpost", route: "Dawar → Tulail → Chakwali", description: "Deep exploration of Tulail Valley along the Kishanganga.", highlights: ["Tulail Valley", "Chakwali outpost"], stayLocation: "Gurez", meals: "Breakfast & Dinner" },
      { day: 5, title: "Gurez to Kupwara / Keran Gateway", route: "Gurez → Bandipora → Kupwara", description: "Scenic transition towards the western frontier valleys.", highlights: ["Wular Lake views", "Pine mountain tracks"], stayLocation: "Kupwara", meals: "Breakfast & Dinner" },
      { day: 6, title: "Kupwara across Pharkian Gali to Keran Valley", route: "Kupwara → Pharkian Gali → Keran", description: "Descend into the lush riverside paradise of Keran Valley.", highlights: ["Pharkian Gali", "Kishanganga riverbank"], stayLocation: "Keran", meals: "Breakfast & Dinner" },
      { day: 7, title: "Keran Border Villages & Riverside Leisure", route: "Keran → Kundian → Mundian", description: "Explore border hamlets, apple orchards, and river trails.", highlights: ["River border views", "Apple orchards"], stayLocation: "Keran", meals: "Breakfast & Dinner" },
      { day: 8, title: "Keran Valley to Doodhpathri (Valley of Milk)", route: "Keran → Srinagar → Doodhpathri", description: "Journey to Doodhpathri's rolling alpine pastures.", highlights: ["Doodhpathri meadows", "Shaliganga river"], stayLocation: "Srinagar / Doodhpathri", meals: "Breakfast & Dinner" },
      { day: 9, title: "Doodhpathri to Daksum & Sinthan Top", route: "Srinagar → Anantnag → Daksum → Sinthan Top (12,300 ft)", description: "Drive up the exhilarating Sinthan Pass connecting Kashmir to Kishtwar.", highlights: ["Sinthan Top 360° snow view", "Daksum pine forests"], stayLocation: "Daksum / Pahalgam", meals: "Breakfast & Dinner" },
      { day: 10, title: "Pahalgam Hidden Trails & Aru Valley", route: "Pahalgam → Aru → Betaab", description: "Explore tranquil forest walks in Pahalgam.", highlights: ["Aru Valley", "Betaab Valley"], stayLocation: "Pahalgam", meals: "Breakfast & Dinner" },
      { day: 11, title: "Pahalgam to Srinagar Deluxe Houseboat", route: "Pahalgam → Srinagar", description: "Check into a luxury Dal Lake Houseboat for an unforgettable farewell night.", highlights: ["Houseboat stay", "Kashmiri culinary feast"], stayLocation: "Dal Lake Houseboat", meals: "Breakfast & Dinner" },
      { day: 12, title: "Srinagar Airport Departure", route: "Houseboat → Srinagar Airport", description: "Transfer to Srinagar Airport for your return flight.", highlights: ["Airport drop"], stayLocation: "Departure", meals: "Breakfast" }
    ]
  }
];
