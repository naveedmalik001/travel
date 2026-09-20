export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  experience: string;
  image: string;
  specialty?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "rayees",
    name: "Rayees Ahmad",
    role: "Founder & CEO",
    category: "Leadership",
    experience: "Founder & CEO",
    image: "/team/rayees.jpeg",
    specialty: "Himalayan Travel Vision & Operations Leadership",
  },
  {
    id: "aarif",
    name: "Mr. Aarif",
    role: "Creative Director",
    category: "Experience Design",
    experience: "Creative Director",
    image: "/team/aarif.jpeg",
    specialty: "Bespoke Itineraries & Luxury Travel Design",
  },
  {
    id: "imdad-bashir",
    name: "Imdad Bashir",
    role: "Travel Consultant",
    category: "Travel Consultation",
    experience: "07+ Years Experience",
    image: "/team/imdad.jpeg",
    specialty: "Custom Kashmir Packages & Hotel Stays",
  },
  {
    id: "sabzar-ahmad",
    name: "Sabzar Ahmad",
    role: "Trip Advisor",
    category: "Guest Advisory",
    experience: "5 Years Experience",
    image: "/team/sabzar.jpeg",
    specialty: "Guest Consultation & Instant Quotes",
  },
  {
    id: "aaqib-firdous",
    name: "Aaqib Firdous",
    role: "Trip Coordinator",
    category: "Trip Operations",
    experience: "4 Years Experience",
    image: "/team/aaqib.jpeg",
    specialty: "On-Ground Coordination & Gondola Slots",
  },
  {
    id: "mohd-aamir",
    name: "Mohd Aamir",
    role: "Trip Coordinator",
    category: "Field Operations",
    experience: "5 Years Experience",
    image: "/team/aamir.jpeg",
    specialty: "Airport Welcomes & Sightseeing Logistics",
  },
  {
    id: "rizwan-shabir",
    name: "Rizwan Shabir",
    role: "Social Media Manager",
    category: "Media & Updates",
    experience: "6 Years Experience",
    image: "/team/rizwan.jpeg",
    specialty: "Live Snowfall Updates & Digital Stories",
  },
  {
    id: "javid",
    name: "Javid Ahmad",
    role: "Senior Driver",
    category: "Operations Fleet",
    experience: "10 Years Experience",
    image: "/team/javid.jpeg",
    specialty: "Mountain Routes & Winter Snow Chains",
  },
  {
    id: "momin",
    name: "Momin",
    role: "Driver",
    category: "Operations Fleet",
    experience: "8 Years Experience",
    image: "/team/momin.jpeg",
    specialty: "4x4 Offbeat Routes & Frontier Terrain",
  },
  {
    id: "manzoor",
    name: "Manzoor Ahmad",
    role: "Driver",
    category: "Operations Fleet",
    experience: "5+ Years Experience",
    image: "/team/manzoor.jpeg",
    specialty: "Valley Transit & Safe Family Driving",
  },
];
