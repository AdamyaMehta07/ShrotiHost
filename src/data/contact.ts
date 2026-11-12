import { contactInfo, portalLinks } from "@/data/navigation";
import type { ContactChannel } from "@/types/contact";

// Data source: https://shrotihost.in/contact
// Verified on: 12 Nov 2026
// Tracking wala hissa (_gl) hata diya hai, wo browser ka personal ID hota hai

const PORTAL = "https://portal.shrotihost.in";

// TODO: description sirf Billing ka live site se mila hai. Baaki 6 ke text live page ke tab kholke bharne hain
export const contactChannels: ContactChannel[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    actionLabel: "Chat on WhatsApp",
    href: contactInfo.whatsapp,
  },
  {
    id: "sales",
    name: "Sales",
    actionLabel: "Message sales on WhatsApp",
    // Live site yahi pehle se likha message bhejti hai
    href: `${contactInfo.whatsapp}?text=${encodeURIComponent("Hi Shroti Host, I'd like to talk about hosting")}`,
  },
  { id: "support", name: "Support", actionLabel: "Submit a ticket", href: portalLinks.ticket },
  { id: "migration", name: "Migration", actionLabel: "Submit a ticket", href: portalLinks.ticket },
  { id: "technical", name: "Technical", actionLabel: "Submit a ticket", href: portalLinks.ticket },
  { id: "partnership", name: "Partnership", actionLabel: "Submit a ticket", href: portalLinks.ticket },
  {
    id: "billing",
    name: "Billing",
    description: "Invoices, payment methods, or renewal questions on your account.",
    actionLabel: "Go to billing",
    href: `${PORTAL}/clientarea.php?action=invoices`,
  },
];