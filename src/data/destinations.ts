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
  // ==========================================
  // KASHMIR VALLEY
  // ==========================================
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
    id: "doodhpathri",
    name: "Doodhpathri",
    tagline: "Valley of Milk & Untouched Rolling Meadows",
    region: "Kashmir Valley",
    altitude: "8,957 ft (2,730 m)",
    bestTimeToVisit: "May to October (Lush Greenery & Wildflowers)",
    distanceFromSrinagar: "42 km (1.5 hrs via Budgam)",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Shaliganga & Doodh Ganga River", "Palmaidan Vast Pastures", "Rolling Pine Glades", "Peaceful Non-Commercial Meadows"],
    description: "Known as the 'Valley of Milk' due to its frothing white mountain river and rich pastoral grazing lands, Doodhpathri is one of Kashmir's most serene bowl-shaped alpine meadows, surrounded by thick pine and deodar forests.",
    topAttractions: [
      { name: "Doodh Ganga River", desc: "A rushing crystalline torrent flowing over smooth pebbles where visitors dip their feet in pure glacial melt." },
      { name: "Palmaidan (Big Ground)", desc: "Expansive green plateau surrounded by giant pine trees where nomadic Gujjar shepherds camp." },
      { name: "Tangnar Valley", desc: "A picturesque gorge on the road up with beautiful terraced hills and apple orchards." }
    ],
    idealFor: ["Day Picnickers", "Families", "Nature Lovers", "Peace Seekers"]
  },
  {
    id: "yusmarg",
    name: "Yusmarg",
    tagline: "The Meadow of Jesus & Pristine Pine Sanctuaries",
    region: "Kashmir Valley",
    altitude: "7,860 ft (2,396 m)",
    bestTimeToVisit: "April to November (Spring Blooms & Mountain Treks)",
    distanceFromSrinagar: "47 km (1.5 hrs via Charar-i-Sharief)",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Nilnag Alpine Lake", "Sang-e-Safed White Rock Valley", "Charar-i-Sharief Shrine Enroute", "Doodhganga Gorge"],
    description: "Yusmarg is a tranquil alpine meadow enveloped by dense pine and spruce woods with snow-capped peaks of the Pir Panjal in the backdrop. It is revered for its pristine beauty and untouched walking trails.",
    topAttractions: [
      { name: "Nilnag Lake", desc: "A pine-encircled emerald-blue freshwater lake reached by an easy 4 km pine forest hike." },
      { name: "Sang-e-Safed", desc: "An oval meadow with white rocks and snow patches even in summer, surrounded by jagged peaks." },
      { name: "Doodhganga Riverbed", desc: "A dramatic rocky riverbed where water crashes down from the mountain heights." }
    ],
    idealFor: ["Hikers", "Solo Travelers", "Families", "Serenity Seekers"]
  },
  {
    id: "aharbal",
    name: "Aharbal Waterfall",
    tagline: "The Niagara of Kashmir & Roaring Veshaw Gorge",
    region: "Kashmir Valley",
    altitude: "7,430 ft (2,266 m)",
    bestTimeToVisit: "May to October (Vibrant Water Flow & Autumn Pine Colors)",
    distanceFromSrinagar: "70 km (2.5 hrs via Shopian)",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    highlights: ["25-Meter Roaring Cascade", "Veshaw River Gorge", "Kungwattan Meadow Trek", "Kousar Nag Lake Basecamp"],
    description: "Aharbal is famed for its monumental 25-meter waterfall where the Veshaw River crashes into a narrow granite gorge with thunderous spray. It is also the gateway to the sacred alpine lake of Kousar Nag.",
    topAttractions: [
      { name: "Aharbal Waterfall Viewpoint", desc: "Fenced viewing deck overlooking the dramatic drop and misty canyon." },
      { name: "Kungwattan Meadow", desc: "A tranquil 8 km upstream hike through pristine pine woodlands to open alpine grazing grounds." },
      { name: "Shopian Apple Belt", desc: "Scenic drive through Asia's largest apple orchards and walnut plantations." }
    ],
    idealFor: ["Adventure Seekers", "Photographers", "Trekkers", "Nature Lovers"]
  },
  {
    id: "kokernag-verinag",
    name: "Kokernag & Verinag",
    tagline: "Land of Healing Springs, Trout & Royal Mughal Gardens",
    region: "Kashmir Valley",
    altitude: "6,560 ft (2,000 m)",
    bestTimeToVisit: "April to November (Gardens in Full Bloom)",
    distanceFromSrinagar: "80 km (2.5 hrs via Anantnag)",
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Verinag Octagonal Spring (Source of Jhelum)", "Kokernag Botanical Garden", "Asia's Largest Trout Hatchery", "Achabal Mughal Cascades"],
    description: "South Kashmir's garden belt features the historical spring of Verinag—the official source of River Jhelum constructed by Emperor Jahangir—and Kokernag's sprawling rose gardens and freshwater trout streams.",
    topAttractions: [
      { name: "Verinag Mughal Spring", desc: "An octagonal blue-water stone basin enclosed by arched colonnades built in 1620 AD." },
      { name: "Kokernag Rose & Botanical Garden", desc: "Kashmir's largest botanical sanctuary with medicinal springs and gushing streams." },
      { name: "Achabal Garden", desc: "A royal pleasure retreat designed by Empress Nur Jahan with cascading stepped fountains." }
    ],
    idealFor: ["History Buffs", "Botanists", "Families", "Couples"]
  },
  {
    id: "manasbal-wular",
    name: "Manasbal & Wular Lake",
    tagline: "Lotus Sanctuaries & Asia's Ancient Freshwater Giants",
    region: "Kashmir Valley",
    altitude: "5,190 ft (1,582 m)",
    bestTimeToVisit: "April to October (Lotus blooms in July–August)",
    distanceFromSrinagar: "30 km (1 hr north of Srinagar)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Supreme Gem of Kashmir Lakes", "Vast Summer Lotus Blooms", "Watlab Hilltop Viewpoint", "Birdwatcher's Paradise"],
    description: "Manasbal is celebrated as the deepest and clearest freshwater lake in Kashmir, famous for stunning lotus plantations. Nearby Wular Lake is one of Asia's largest freshwater wetlands, framed by the mountains of Bandipora.",
    topAttractions: [
      { name: "Manasbal Lake & Garoka Garden", desc: "A placid lake with submerged 8th-century stone ruins and royal Mughal terrace garden." },
      { name: "Watlab & Baba Shukur-ud-Din Shrine", desc: "Hilltop vantage point offering panoramic bird's-eye views over the entire Wular expanse." },
      { name: "Bird Watching Sanctuary", desc: "Winter home to thousands of migratory birds from Siberia and Central Asia." }
    ],
    idealFor: ["Bird Watchers", "Boaters", "Photographers", "Quiet Explorers"]
  },
  {
    id: "tangmarg",
    name: "Tangmarg",
    tagline: "The Alpine Gateway & Gateway to Gulmarg Snows",
    region: "Kashmir Valley",
    altitude: "7,000 ft (2,133 m)",
    bestTimeToVisit: "Year-Round (Winter snow chains base & Summer apple groves)",
    distanceFromSrinagar: "39 km (1 hr on Gulmarg Highway)",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Shop A Trip Operating Headquarters", "Ferozpora Trout Stream", "Drung Frozen Waterfall", "Gokhama Apple Orchards"],
    description: "Tangmarg is the charming forested basecamp where the Gulmarg mountain ascent begins. Headquarter to Shop A Trip Tour & Travels, it is surrounded by apple orchards, trout streams, and the world-famous Drung frozen waterfall.",
    topAttractions: [
      { name: "Drung Frozen Waterfall", desc: "A monumental cascade that freezes into spectacular giant icicles during winter months." },
      { name: "Ferozpora Nallah", desc: "A crystal clear mountain stream popular for angling, picnics, and pine glade walks." },
      { name: "Kunzer & Gokhama Craft Markets", desc: "Authentic local artisans creating handwoven Kashmiri carpets, walnut woodwork, and shawls." }
    ],
    idealFor: ["Winter Travelers", "Local Culture Lovers", "Trout Anglers", "Families"]
  },

  // ==========================================
  // OFFBEAT FRONTIERS
  // ==========================================
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
    bestTimeToVisit: "April to November (Via Pharkian Gali Pass)",
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
    id: "bangus-valley",
    name: "Bangus Valley",
    tagline: "The Hidden Meadow of Million Wildflowers",
    region: "Offbeat Frontiers",
    altitude: "10,000 ft (3,050 m)",
    bestTimeToVisit: "May to October (Blooming Meadows & Crisp Air)",
    distanceFromSrinagar: "128 km (4.5 hrs via Kupwara / Handwara)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Bod Bangus & Lokut Bangus", "Mawer & Tilwan Streams", "Chowkibal Mountain Rims", "Pristine Untouched Wilderness"],
    description: "Bangus Valley is an enormous ecological bowl comprising Bod Bangus (Greater Bangus) and Lokut Bangus (Lesser Bangus), carpeted with wildflowers, fed by glistening freshwater streams, and shielded by towering mountain ridges.",
    topAttractions: [
      { name: "Bod Bangus Meadows", desc: "Sprawling grass plateau of over 300 sq km surrounded by dense deodar and pine forests." },
      { name: "Kala Roos Caves", desc: "Ancient mysterious rock caves and petroglyphs en route in Kupwara." },
      { name: "Tilwan & Mawer Nallahs", desc: "Scenic glacial tributaries teeming with cold water and lush banks." }
    ],
    idealFor: ["Trekker Enthusiasts", "Eco-Tourists", "Off-Roaders", "Campers"]
  },
  {
    id: "lolab-valley",
    name: "Lolab Valley",
    tagline: "The Land of Love, Emerald Orchards & Fruit Groves",
    region: "Offbeat Frontiers",
    altitude: "5,800 ft (1,770 m)",
    bestTimeToVisit: "April to November (Spring Blossoms to Golden Harvest)",
    distanceFromSrinagar: "110 km (3.5 hrs via Kupwara)",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Chandigam & Sogam Meadows", "Kalaroos Stone Caves", "Lalpur Village Life", "Walnut & Apple Orchards"],
    description: "Celebrated by poet Allama Iqbal for its untouched pastoral splendor, Lolab is an oval-shaped green valley renowned for fruit orchards, pine-clad mountain ridges, and serene village culture.",
    topAttractions: [
      { name: "Chandigam Pine Glade", desc: "A fairytale camping and picnic ground surrounded by towering Himalayan pine forests." },
      { name: "Kalaroos Caves & Stone Carvings", desc: "Historic caves believed to have ancient trade routes connecting to Central Asia." },
      { name: "Lalpur & Sogam Fruit Valleys", desc: "Lush belts of cherry, apple, and walnut orchards with traditional wooden Kashmiri houses." }
    ],
    idealFor: ["Slow Travelers", "Writers & Artists", "Nature Photographers", "Families"]
  },
  {
    id: "sinthan-margan-top",
    name: "Sinthan Top & Margan Top",
    tagline: "High Mountain Passes Linking Kashmir to Kishtwar & Warwan",
    region: "Offbeat Frontiers",
    altitude: "12,300 ft to 14,000 ft",
    bestTimeToVisit: "May to October (Snow viewpoint & Pass Open)",
    distanceFromSrinagar: "135 km via Kokernag / Anantnag",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["360-Degree Mountain Panoramic Ridge", "Summer Snow Points", "Gateway to Warwan & Kishtwar", "Thrilling Mountain Passes"],
    description: "Sinthan Top and Margan Top are dramatic high-altitude mountain passes cutting across the Pir Panjal and Great Himalayan ranges, offering snow even in high summer and linking Kashmir to the remote valleys of Kishtwar and Warwan.",
    topAttractions: [
      { name: "Sinthan 360 Ridge", desc: "Stand on the border ridge where you see the green Kashmir Valley on one side and rugged Kishtwar on the other." },
      { name: "Margan Top (Pass of Death)", desc: "High adventurous pass leading to the isolated valleys of Warwan and Marwah." },
      { name: "Daksum & Chingam Gorges", desc: "Pristine pine gorges along the Bringhi River en route with trout fishing lodges." }
    ],
    idealFor: ["Road Trippers", "Bikers", "Adventure Enthusiasts", "Snow Seekers"]
  },
  {
    id: "peer-ki-gali-mughal-road",
    name: "Peer Ki Gali & Mughal Road",
    tagline: "The Historic Imperial Pass of the Mughal Emperors",
    region: "Offbeat Frontiers",
    altitude: "11,450 ft (3,490 m)",
    bestTimeToVisit: "May to October (Mughal Road Open)",
    distanceFromSrinagar: "90 km via Shopian / Hirpora",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Historic Shrine of Sheikh Ahmed Karim", "Hirpora Wildlife Sanctuary", "Aliabad Ancient Mughal Sarai", "High Alpine Meadow Ridges"],
    description: "Peer Ki Gali is the highest point on the historic Mughal Road used by Emperor Akbar and Jahangir to enter Kashmir from Delhi. Today, it offers spectacular alpine views, historic roadside inns (Sarais), and wild mountain meadows.",
    topAttractions: [
      { name: "Peer Ki Gali Pass & Shrine", desc: "A sacred mountain pass shrine surrounded by alpine meadows and prayer flags." },
      { name: "Aliabad Sarai", desc: "An authentic stone caravan inn built in the 16th century by Mughal royalty." },
      { name: "Hirpora Wildlife Sanctuary", desc: "Protected home of the endangered Pir Panjal Markhor (wild mountain goat)." }
    ],
    idealFor: ["Heritage Buffs", "Road Trippers", "Bikers", "Wildlife Enthusiasts"]
  },

  // ==========================================
  // LADAKH & KARGIL
  // ==========================================
  {
    id: "leh-ladakh",
    name: "Leh Ladakh & Sham Valley",
    tagline: "The Land of High Passes, Ancient Monasteries & Lunar Desert",
    region: "Ladakh & Kargil",
    altitude: "11,500 ft (3,500 m) to 18,380 ft",
    bestTimeToVisit: "May to October",
    distanceFromSrinagar: "420 km (overland via Kargil) / Daily flights to Leh",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Shanti Stupa & Leh Palace", "Magnetic Hill & Sangam Confluence", "Ancient Alchi & Thiksey Gompas", "Hall of Fame"],
    description: "Leh is the capital of Ladakh, set in a stark high-altitude desert surrounded by the Karakoram and Himalayan ranges. It is home to centuries-old Tibetan Buddhist monasteries, stupas, and lively Tibetan markets.",
    topAttractions: [
      { name: "Shanti Stupa & Leh Palace", desc: "White-domed Buddhist stupa offering spectacular sunset views over the Indus Valley and 17th-century royal palace." },
      { name: "Magnetic Hill & Indus-Zanskar Sangam", desc: "Defying gravity hill experience and the dramatic confluence of green Indus and muddy Zanskar rivers." },
      { name: "Thiksey & Hemis Monasteries", desc: "Spectacular multi-story monasteries resembling Lhasa's Potala Palace." }
    ],
    idealFor: ["Culture Seekers", "First-time Ladakh Travelers", "Photographers", "Spiritual Explorers"]
  },
  {
    id: "nubra-valley",
    name: "Nubra Valley & Turtuk",
    tagline: "Cold Desert Sand Dunes, Bactrian Camels & Balti Villages",
    region: "Ladakh & Kargil",
    altitude: "10,000 ft (3,048 m) via Khardung La at 17,982 ft",
    bestTimeToVisit: "May to October",
    distanceFromSrinagar: "120 km north of Leh over Khardung La Pass",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Hunder Sand Dunes & Bactrian Camels", "Diskit 106ft Maitreya Buddha", "Turtuk Border Balti Hamlet", "Khardung La Pass Crossing"],
    description: "Nubra is a jaw-dropping high-altitude valley where snow mountains overlook cold desert sand dunes. Visitors ride double-humped camels at Hunder and explore Turtuk—one of India's northernmost villages with rich Balti Muslim culture.",
    topAttractions: [
      { name: "Hunder Sand Dunes", desc: "White sand dunes flanked by snowy peaks with double-humped silk-route Bactrian camels." },
      { name: "Diskit Monastery & Giant Buddha", desc: "The oldest and largest monastery in Nubra with a 32-meter towering Buddha statue overlooking the valley." },
      { name: "Turtuk Village", desc: "A lush apricot-orchard oasis on the Shyok River near the Line of Control with distinct Balti culture." }
    ],
    idealFor: ["Adventure Travelers", "Cultural Explorers", "Families", "Photographers"]
  },
  {
    id: "pangong-tso",
    name: "Pangong Tso Lake",
    tagline: "The World-Famous 134 km Color-Changing Himalayan Salt Lake",
    region: "Ladakh & Kargil",
    altitude: "14,270 ft (4,350 m)",
    bestTimeToVisit: "May to October (Crystal Clear Blue Waters)",
    distanceFromSrinagar: "150 km from Leh via Chang La Pass (17,688 ft)",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Endorheic High-Altitude Salt Lake", "Color-Changing Waters (Blue to Emerald)", "Spangmik & Man-Merak Villages", "Chang La Pass Journey"],
    description: "Pangong Tso is an iconic 134-kilometer-long lake extending from India into Tibet. The water dramatically shifts shades from cobalt blue to teal and turquoise against stark barren mountains.",
    topAttractions: [
      { name: "Spangmik Lakeside & 3 Idiots Point", desc: "Famous lakeside camp zone with mirror reflections of snow mountains." },
      { name: "Chang La Pass (17,688 ft)", desc: "The world's 3rd highest motorable mountain pass with army temple and breathtaking views." },
      { name: "Stargazing at Pangong", desc: "Zero light pollution night skies with crystal clear views of the Milky Way galaxy." }
    ],
    idealFor: ["Stargazers", "Romantic Couples", "Photographers", "Road Trippers"]
  },
  {
    id: "tso-moriri-tso-kar",
    name: "Tso Moriri & Tso Kar",
    tagline: "Sacred High-Altitude Azure Lakes & Nomadic Changpa Lands",
    region: "Ladakh & Kargil",
    altitude: "14,836 ft (4,522 m)",
    bestTimeToVisit: "June to September",
    distanceFromSrinagar: "220 km southeast of Leh in Changthang",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Ramsar Wetland Sanctuary", "Korzok 300-Yr-Old Monastery", "Black-Necked Cranes & Wildlife", "Tso Kar White Salt Lake"],
    description: "Tso Moriri is a pristine, tranquil high-altitude lake in the Changthang Plateau, far less commercialized than Pangong. It is surrounded by snow-draped peaks, grazing Pashmina goats, and the nomadic Changpa tribe.",
    topAttractions: [
      { name: "Korzok Village & Monastery", desc: "One of the highest permanent human settlements on earth with ancient Buddhist Gompa." },
      { name: "Tso Kar White Lake", desc: "A fluctuating salt lake with dramatic white crust deposits and abundant Tibetan wild asses (Kiang)." },
      { name: "Chumathang Hot Springs", desc: "Natural boiling sulfur springs along the Indus River believed to have therapeutic properties." }
    ],
    idealFor: ["Wildlife Enthusiasts", "Bird Watchers", "Off-the-Grid Travelers", "Photographers"]
  },
  {
    id: "hanle-umling-la",
    name: "Hanle & Umling La",
    tagline: "World's Highest Motorable Pass (19,024 ft) & Dark Sky Sanctuary",
    region: "Ladakh & Kargil",
    altitude: "14,760 ft (Hanle) / 19,024 ft (Umling La Pass)",
    bestTimeToVisit: "May to October (Clear Nights & Open Pass)",
    distanceFromSrinagar: "250 km from Leh via Nyoma & Loma",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Umling La Pass (19,024 ft Highest Road)", "Indian Astronomical Observatory", "India's 1st Certified Dark Sky Reserve", "Remote Changthang Wilderness"],
    description: "Hanle is India's ultimate frontier for astrophotography and high-altitude adventure. Home to the Indian Astronomical Observatory and the gateway to Umling La (the highest motorable road in the world at 19,024 ft).",
    topAttractions: [
      { name: "Umling La Pass Summit", desc: "Stand atop the highest drivable road on planet Earth, higher than Everest Base Camp." },
      { name: "Hanle Dark Sky Sanctuary", desc: "Experience pristine unpolluted night skies with unearthly views of nebulae and stars." },
      { name: "Hanle Gompa", desc: "Historic 17th-century Drukpa monastery perched on a dramatic desert crag." }
    ],
    idealFor: ["Extreme Adventurers", "Astrophotographers", "Bikers", "Space Enthusiasts"]
  },
  {
    id: "zanskar-valley",
    name: "Zanskar Valley",
    tagline: "Untamed Himalayan Fortress, Glaciers & Cliff Monasteries",
    region: "Ladakh & Kargil",
    altitude: "11,500 ft to 14,500 ft",
    bestTimeToVisit: "June to October (Overland route via Pensi La & Shinkula)",
    distanceFromSrinagar: "235 km from Kargil via Suru Valley & Padum",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Phuktal Monastery (Built into Cave)", "Drang-Drung Monster Glacier", "Pensi La Pass (14,400 ft)", "Padum & Karsha Gompas"],
    description: "Zanskar is one of the most secluded and raw valleys in the Trans-Himalayas. Bounded by colossal glaciated peaks, roaring rivers, and cliff-hanging monasteries like Phuktal that are carved directly into sheer mountain caves.",
    topAttractions: [
      { name: "Phuktal Cave Monastery", desc: "A mythical monastery built around a sacred cave on a sheer cliff face in southeastern Zanskar." },
      { name: "Drang-Drung Glacier", desc: "Ladakh's largest accessible glacier flowing like a frozen river of ice beside Pensi La." },
      { name: "Karsha Monastery", desc: "Zanskar's largest white-walled monastery complex cascading down a dramatic hillside." }
    ],
    idealFor: ["Hardcore Trekkers", "Adventure Overlanders", "Spiritual Seekers", "Pioneering Travelers"]
  },
  {
    id: "kargil-suru-valley",
    name: "Kargil & Suru Valley",
    tagline: "The Crossroads of History, Nun-Kun Peaks & Drass Heroes",
    region: "Ladakh & Kargil",
    altitude: "8,780 ft (2,676 m) / Suru up to 12,000 ft",
    bestTimeToVisit: "May to October (Srinagar–Leh Highway Open)",
    distanceFromSrinagar: "204 km (6 hrs via Sonmarg & Zoji La)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Drass Kargil War Memorial", "Twin Peaks of Mt. Nun (7,135 m) & Kun", "Suru Valley Green Meadow Basins", "Hundarman Heritage Border Village"],
    description: "Kargil connects Kashmir with Ladakh along the historic Silk Route. Famed for its wartime heritage in Drass, the majestic Suru Valley cradles the twin 7,000m peaks of Nun and Kun amidst willow groves and wild rose bushes.",
    topAttractions: [
      { name: "Kargil War Memorial at Drass", desc: "Solemn memorial beneath Tololing and Tiger Hill commemorating the Indian armed forces." },
      { name: "Suru Valley & Parkachik Glacier", desc: "One of the greenest valleys in Ladakh with direct face-to-face views of Mount Nun." },
      { name: "Hundarman Border Village & Museum", desc: "A historic ghost village frozen in time with relics from ancient Silk Route trade." }
    ],
    idealFor: ["History Enthusiasts", "Mountaineers", "Road Trippers", "Families"]
  },
  {
    id: "dah-hanu-aryan-valley",
    name: "Dah–Hanu & Aryan Valley",
    tagline: "The Land of the Brokpa Tribe & Ancient Indus Gorges",
    region: "Ladakh & Kargil",
    altitude: "9,000 ft (2,740 m)",
    bestTimeToVisit: "April to October (Apricot Blossom & Harvest)",
    distanceFromSrinagar: "160 km from Leh along the Indus River toward Batalik",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Brokpa Aryan Culture & Headdresses", "Apricot & Walnut Valley", "Indus River Canyon", "Batalik Frontier Route"],
    description: "Dah, Hanu, Darchiks, and Garkhon are home to the unique Brokpa community, who have preserved distinct cultural customs, language, floral headgear, and traditions along the warm lower Indus gorge.",
    topAttractions: [
      { name: "Brokpa Villages (Dah & Hanu)", desc: "Witness traditional floral attire, songs, and organic apple/apricot agro-gardening." },
      { name: "Indus River Canyon Drive", desc: "Spectacular rocky canyon where the climate is significantly milder than high Ladakh." },
      { name: "Batalik Frontier Region", desc: "Historic frontier region with dramatic mountain vistas and ancient trading roots." }
    ],
    idealFor: ["Anthropology Enthusiasts", "Culture Explorers", "Photographers", "Offbeat Travelers"]
  },

  // ==========================================
  // JAMMU & KISHTWAR
  // ==========================================
  {
    id: "kishtwar",
    name: "Kishtwar & National Park",
    tagline: "The Land of Saffron, High Valleys & Dense Alpine Forests",
    region: "Jammu & Kishtwar",
    altitude: "5,374 ft (1,638 m) to 14,000 ft",
    bestTimeToVisit: "April to November (Sinthan Top Open)",
    distanceFromSrinagar: "180 km via Sinthan Top / 215 km from Jammu",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Pochhal Saffron Fields", "Kishtwar High-Altitude National Park", "Chowgan Massive Green Meadow", "Chenab River Gorges"],
    description: "Kishtwar is a dramatic mountain district famed for world-class saffron cultivation, dense pine forests, alpine rivers, and as the gateway to the remote trans-Himalayan valleys of Paddar, Warwan, and Dachhan.",
    topAttractions: [
      { name: "Chowgan Ground & Saffron Plateau", desc: "A gigantic natural green meadow in the heart of Kishtwar and the purple saffron blooms of Pochhal." },
      { name: "Kishtwar High Altitude National Park", desc: "Wild protected sanctuary home to Himalayan snow leopards, musk deer, and brown bears." },
      { name: "Sinthan Top Gateway", desc: "High-altitude snow pass providing seamless connection directly into South Kashmir." }
    ],
    idealFor: ["Off-the-Beaten-Path Explorers", "Trekkers", "Nature Lovers", "Road Trippers"]
  },
  {
    id: "paddar-machail",
    name: "Paddar Valley & Machail Mata",
    tagline: "The Sapphire Valley & Revered Himalayan Pilgrimage",
    region: "Jammu & Kishtwar",
    altitude: "6,000 ft to 12,500 ft",
    bestTimeToVisit: "May to October (Annual Machail Yatra in August)",
    distanceFromSrinagar: "240 km from Srinagar via Sinthan / 65 km from Kishtwar town",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["World-Famous Blue Sapphire Mines", "Shri Machail Mata Holy Shrine", "Gulabgarh & Atholi Basins", "Bhotia & Thakur Culture"],
    description: "Paddar Valley is globally renowned for its legendary blue sapphires and the sacred Himalayan pilgrimage of Machail Mata. Surrounded by cedar forests and glacial rivers, it offers pristine mountain culture.",
    topAttractions: [
      { name: "Machail Mata Shrine", desc: "Sacred Himalayan temple shrine of Goddess Durga nestled in an alpine valley beneath snow peaks." },
      { name: "Paddar Sapphire Belt", desc: "Historic high-altitude gemstone mining region famous for the world's most prized cornflower-blue sapphires." },
      { name: "Gulabgarh Riverfront", desc: "The bustling cultural basecamp on the Chenab tributary with wooden bridge crossings." }
    ],
    idealFor: ["Pilgrims", "Trekkers", "Mineral Enthusiasts", "Adventure Travelers"]
  },
  {
    id: "warwan-marwah-valley",
    name: "Warwan & Marwah Valleys",
    tagline: "Untamed Trans-Himalayan Canyons & Pristine Wooden Villages",
    region: "Jammu & Kishtwar",
    altitude: "7,000 ft to 11,500 ft",
    bestTimeToVisit: "June to October (Via Margan Top Pass)",
    distanceFromSrinagar: "150 km via Kokernag & Margan Top Pass",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Warwan River Valley & Waterfalls", "Traditional Handcrafted Wooden Hamlets", "Margan Pass Crossing", "Zero Mobile Network True Silence"],
    description: "Warwan and Marwah are among the most isolated, pristine Himalayan valleys in India. Enclosed by massive glaciers and reached only over high passes, these valleys feature roaring rivers, wildflowers, and authentic log-cabin villages.",
    topAttractions: [
      { name: "Inshan & Sukhnai Villages", desc: "Timeless log-cabin villages where traditional Himalayan architecture remains completely preserved." },
      { name: "Warwan River Basin", desc: "Emerald glacial river flowing through wide open grasslands full of horses and wildflowers." },
      { name: "Kanital & Humpet Glacial Treks", desc: "World-class trekking routes linking Warwan directly to Pahalgam and Suru Valley." }
    ],
    idealFor: ["True Explorers", "Backpackers", "Campers", "Trekking Expeditions"]
  },
  {
    id: "bhaderwah-jai-valley",
    name: "Bhaderwah & Jai Valley",
    tagline: "The Mini Switzerland of Jammu, Pine Glades & Padri Pass",
    region: "Jammu & Kishtwar",
    altitude: "5,300 ft to 10,500 ft (Padri Pass)",
    bestTimeToVisit: "April to November (Spring to Golden Autumn) & Jan-Feb (Snow)",
    distanceFromSrinagar: "200 km via Sinthan Top / 185 km from Jammu",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Jai Valley Meadows & Trout Stream", "Padri Pass High Plateau", "Chinta & Guldanda Snow Point", "Vasuki Nag Ancient Temples"],
    description: "Bhaderwah is widely celebrated as the 'Mini Switzerland of Jammu' for its rolling green meadows, dense cedar and deodar forests, sparkling streams, and the majestic high pass of Padri connecting Jammu to Himachal Pradesh.",
    topAttractions: [
      { name: "Jai Valley (Jai Meadow)", desc: "A 32 km long picturesque valley with green carpet grasslands, igloo huts, and Jai Nallah stream." },
      { name: "Padri Pass (10,500 ft)", desc: "A sweeping highland meadow pass offering snow sports, paragliding, and cool mountain breezes." },
      { name: "Guldanda & Chinta Valley", desc: "A lush highland clearing amidst dense conifers with horse riding and peaceful cafes." }
    ],
    idealFor: ["Families", "Honeymooners", "Eco-Tourists", "Nature Lovers"]
  },
  {
    id: "patnitop-sanasar",
    name: "Patnitop, Sanasar & Nathatop",
    tagline: "Panoramic Pine Hill Resorts & Paragliding Havens",
    region: "Jammu & Kishtwar",
    altitude: "6,640 ft (Patnitop) / 7,000 ft (Sanasar) / 8,900 ft (Nathatop)",
    bestTimeToVisit: "Year-Round (Summer breezes & Winter snow holidays)",
    distanceFromSrinagar: "185 km on Jammu-Srinagar Expressway (4 hrs)",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Skyview Patnitop Cable Car Gondola", "Sanasar Cup-Shaped Lake & Golf Meadow", "Nathatop 360-Degree Snow Views", "Dense Deodar Forest Trails"],
    description: "Patnitop is Jammu's premier hill resort perched on a scenic plateau atop the Shivalik and Pir Panjal ranges. Nearby Sanasar offers lake adventures and paragliding, while Nathatop offers sweeping snow-capped views.",
    topAttractions: [
      { name: "Skyview Gondola Patnitop", desc: "India's highest ropeway connecting Sanget to Patnitop over lush valleys in just 10 minutes." },
      { name: "Sanasar Lake & Paragliding", desc: "A cup-shaped green meadow lake surrounded by giant conifers, ideal for paragliding and camping." },
      { name: "Nathatop Ridge", desc: "High vantage point famous for winter snow sledging, ski lessons, and roadside food shacks." }
    ],
    idealFor: ["Weekend Getaways", "Families", "Adventure Sports Lovers", "Couples"]
  },
  {
    id: "katra-vaishno-devi",
    name: "Katra & Shri Mata Vaishno Devi",
    tagline: "The Sacred Holy Pilgrimage in the Trikuta Mountains",
    region: "Jammu & Kishtwar",
    altitude: "2,474 ft (Katra) / 5,200 ft (Holy Bhawan)",
    bestTimeToVisit: "Year-Round (Navratri Festivals & Spring/Autumn)",
    distanceFromSrinagar: "230 km (via Banihal Tunnel) / 45 km from Jammu",
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Holy Cave Bhawan Darshan", "Trikuta Mountain Yatra", "Ardhkuwari & Bhairon Ghati Ropeway", "Shiv Khori Cave Excursion"],
    description: "Katra is the holy base town for millions of pilgrims visiting the sacred cave shrine of Shri Mata Vaishno Devi in the Trikuta hills. Seamlessly combined with Kashmir and Patnitop holiday packages.",
    topAttractions: [
      { name: "Shri Mata Vaishno Devi Shrine", desc: "The sacred cave temple of Goddess Vaishno Devi located at 5,200 ft amidst the Trikuta mountains." },
      { name: "Bhairon Ghati & Cable Car", desc: "Scenic mountain top overlooking the shrine reached by modern passenger ropeway." },
      { name: "Shiv Khori Holy Cave", desc: "A 4-ft high, 150-meter long natural limestone cave shrine dedicated to Lord Shiva in Reasi." }
    ],
    idealFor: ["Pilgrims", "Spiritual Seekers", "Families", "Elderly Friendly Tours"]
  },
  {
    id: "jammu-city-mansar",
    name: "Jammu City & Mansar Lake",
    tagline: "The City of Historic Temples, Palaces & Sacred Lakes",
    region: "Jammu & Kishtwar",
    altitude: "1,073 ft (327 m)",
    bestTimeToVisit: "October to April (Pleasant Winter & Heritage Exploration)",
    distanceFromSrinagar: "260 km via NH44 Expressway",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Raghunath Historic Temple", "Bahu Fort & Bagh-e-Bahu Gardens", "Mubarak Mandi Royal Palace", "Mansar & Surinsar Lakes"],
    description: "Jammu is the winter capital of J&K, celebrated as the 'City of Temples'. Enriched with royal Dogra heritage, ancient fortresses overlooking the Tawi River, and sacred forested lakes like Mansar and Surinsar.",
    topAttractions: [
      { name: "Raghunath Temple & Bazaar", desc: "One of North India's largest temple complexes with intricate gold-plated sanctums." },
      { name: "Bahu Fort & Maha Kali Temple", desc: "3,000-year-old historic fort perched over the River Tawi with terraced Mughal gardens." },
      { name: "Mansar & Surinsar Lakes", desc: "Scenic freshwater lakes ringed by wooded hills, boating facilities, and ancient shrines." }
    ],
    idealFor: ["Heritage Buffs", "Families", "Temple Pilgrims", "Short Escapes"]
  },
  {
    id: "poonch-rajouri",
    name: "Poonch & Rajouri",
    tagline: "Pir Panjal Borderlands, Historic Forts & Loran Valley",
    region: "Jammu & Kishtwar",
    altitude: "3,200 ft to 11,000 ft",
    bestTimeToVisit: "April to November (Pleasant Mountain Climate)",
    distanceFromSrinagar: "Via Mughal Road / 220 km from Jammu",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Poonch Fort & Moti Mahal Palace", "Loran Valley & Loran Waterfall", "Mandi Shrine of Baba Budha Amarnath", "Dehra Ki Gali Views"],
    description: "Set in the western foothills of the Pir Panjal range, Poonch and Rajouri boast dramatic mountain gorges, rich heritage palaces, apple orchards, and the tranquil alpine glades of Loran and Behramgala.",
    topAttractions: [
      { name: "Poonch Fort & Moti Mahal", desc: "Grand historical citadel showcasing Dogra and Mughal architecture." },
      { name: "Loran Valley & Nandishool Fall", desc: "Lush green valley surrounded by cedar forests with a 150-ft tumbling waterfall." },
      { name: "Baba Budha Amarnath Shrine (Mandi)", desc: "Ancient white stone temple dedicated to Lord Shiva situated along the Pulatsya River." }
    ],
    idealFor: ["Offbeat Explorers", "History Lovers", "Spiritual Pilgrims"]
  },
  {
    id: "basohli-ranjit-sagar",
    name: "Basohli & Ranjit Sagar Dam",
    tagline: "The Water Sports Haven, Miniature Art & Cable-Stayed Bridge",
    region: "Jammu & Kishtwar",
    altitude: "1,870 ft (570 m)",
    bestTimeToVisit: "October to April (Water sports & Lake cruises)",
    distanceFromSrinagar: "320 km / 140 km from Jammu City",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Atal Setu Cable-Stayed Bridge", "Ranjit Sagar Blue Water Reservoir", "Basohli Miniature Art Heritage", "Water Sports & Speed Boating"],
    description: "Known as the cultural jewel of Kathua district, Basohli overlooks the vast turquoise waters of Ranjit Sagar Dam on the Ravi River. Famed for its globally celebrated Basohli school of miniature paintings and speed boating.",
    topAttractions: [
      { name: "Ranjit Sagar Dam & Boating", desc: "A gigantic inland blue lake offering speed boat rides, kayaking, and floating cruises." },
      { name: "Atal Setu Cable Bridge", desc: "North India's iconic 592-meter cable-stayed architectural bridge linking J&K with Punjab." },
      { name: "Basohli Art Gallery & Fort", desc: "Ancient ruins and artisan centers keeping alive 17th-century Himalayan miniature paintings." }
    ],
    idealFor: ["Water Sports Lovers", "Art Enthusiasts", "Weekend Explorers", "Road Trippers"]
  }
];
