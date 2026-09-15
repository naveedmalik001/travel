import { TourPackage } from "@/data/packages";
import { companyInfo } from "@/data/company";

/**
 * Builds an exhaustive, formatted WhatsApp booking inquiry message for any tour package.
 */
export function buildPackageWhatsAppUrl(pkg: TourPackage, customNote?: string): string {
  const inclusionsList = pkg.inclusions && pkg.inclusions.length > 0 
    ? pkg.inclusions.slice(0, 4).map((i) => `  ✓ ${i}`).join("\n")
    : "  ✓ Deluxe Stays + MAP Meals + Private Cab";
    
  const exclusionsList = pkg.exclusions && pkg.exclusions.length > 0 
    ? pkg.exclusions.slice(0, 3).map((e) => `  ✗ ${e}`).join("\n")
    : "  ✗ Personal expenses & Airfare";

  const message = `*Trip Booking Inquiry — Shop A Trip Tour & Travels*

🏔️ *Package:* ${pkg.title}
🏷️ *Theme:* ${pkg.category} (${pkg.tag})
⏳ *Duration:* ${pkg.duration} (${pkg.days} Days / ${pkg.nights} Nights)
🗺️ *Route:* ${pkg.startingPoint} → ${pkg.endingPoint}
🏨 *Stay Tier:* ${pkg.hotelCategory}
🍽️ *Meal Plan:* MAP (Daily Breakfast & Dinner Included)
🚗 *Transport:* Private Dedicated Cab with experienced mountain driver
💰 *Starting Price:* ${pkg.priceFrom}/person ${pkg.originalPrice ? `(Regular: ${pkg.originalPrice})` : ""}

📋 *Key Inclusions:*
${inclusionsList}

❌ *Exclusions:*
${exclusionsList}

🔗 *Package Details:* https://shopatrip.in/packages/${pkg.id}
${customNote ? `\n💬 *Guest Note:* ${customNote.trim()}` : ""}

Hello Shop A Trip Team! I want to book / get a customized quote for this package. Please share available travel dates, hotel names, and final pricing for my group.`;

  return `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}
