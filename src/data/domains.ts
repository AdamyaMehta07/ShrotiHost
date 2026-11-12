import { hasBigRenewalJump, renewalMultiple } from "@/lib/domain-utils";
import type { DomainExtension, DomainPrice } from "@/types/domains";

// Data source: https://shrotihost.in/domains (poori table, "Show all 69 extensions" kholke)

export const domainPricesCheckedOn = "12 Nov 2026";

export const allDomains: DomainPrice[] = [
  { ext: ".us.cc", firstYear: 64, renewal: 1169, transfer: 1169, label: "Sale" },
  { ext: ".eu.cc", firstYear: 116, renewal: 519, transfer: 519 },
  { ext: ".shop", firstYear: 129, renewal: 5199, transfer: 3639 },
  { ext: ".fun", firstYear: 129, renewal: 3899, transfer: 3899 },
  { ext: ".site", firstYear: 129, renewal: 4549, transfer: 4549 },
  { ext: ".space", firstYear: 129, renewal: 5199, transfer: 5199 },
  { ext: ".gu.cc", firstYear: 129, renewal: 519, transfer: 519 },
  { ext: ".xyz", firstYear: 259, renewal: 2079, transfer: 2079, label: "Sale" },
  { ext: ".online", firstYear: 259, renewal: 4549, transfer: 4549 },
  { ext: ".in.net", firstYear: 259, renewal: 909, transfer: 779, label: "New" },
  { ext: ".beer", firstYear: 259, renewal: 4484, transfer: 4484 },
  { ext: ".pw", firstYear: 324, renewal: 3249, transfer: 1949, label: "Sale" },
  { ext: ".baby", firstYear: 324, renewal: 9294, transfer: 9294 },
  { ext: ".beauty", firstYear: 324, renewal: 2274, transfer: 2274 },
  { ext: ".bond", firstYear: 324, renewal: 2274, transfer: 2274 },
  { ext: ".icu", firstYear: 389, renewal: 2079, transfer: 2079 },
  { ext: ".store", firstYear: 389, renewal: 7474, transfer: 7474 },
  { ext: ".top", firstYear: 389, renewal: 909, transfer: 909 },
  { ext: ".best", firstYear: 389, renewal: 2794, transfer: 2794 },
  { ext: ".wiki", firstYear: 389, renewal: 3769, transfer: 3769 },
  { ext: ".buzz", firstYear: 454, renewal: 4679, transfer: 4679 },
  { ext: ".live", firstYear: 454, renewal: 4679, transfer: 4679 },
  { ext: ".business", firstYear: 454, renewal: 2794, transfer: 2794 },
  { ext: ".ec.cc", firstYear: 454, renewal: 779, transfer: 779 },
  { ext: ".club", firstYear: 519, renewal: 2079, transfer: 2079 },
  { ext: ".info", firstYear: 519, renewal: 2989, transfer: 2989 },
  { ext: ".pro", firstYear: 519, renewal: 3899, transfer: 3899 },
  { ext: ".it.com", firstYear: 519, renewal: 3119, transfer: 3119 },
  { ext: ".cv", firstYear: 519, renewal: 11699, transfer: 11699 },
  { ext: ".co.in", firstYear: 649, renewal: 779, transfer: 779 },
  { ext: ".cc", firstYear: 649, renewal: 1299, transfer: 1299 },
  { ext: ".cfd", firstYear: 649, renewal: 1429, transfer: 1429 },
  { ext: ".com.in", firstYear: 649, renewal: 779, transfer: 779 },
  { ext: ".org.in", firstYear: 649, renewal: 779, transfer: 779 },
  { ext: ".us", firstYear: 649, renewal: 1039, transfer: 974 },
  { ext: ".net.in", firstYear: 649, renewal: 779, transfer: 779 },
  { ext: ".asia", firstYear: 649, renewal: 2079, transfer: 2079 },
  { ext: ".click", firstYear: 649, renewal: 2079, transfer: 2079 },
  { ext: ".eu", firstYear: 649, renewal: 1169, transfer: 1169 },
  { ext: ".travel.in", firstYear: 649, renewal: 779, transfer: 779 },
  { ext: ".uk.cc", firstYear: 649, renewal: 1169, transfer: 1169 },
  { ext: ".vu", firstYear: 649, renewal: 11699, transfer: 11699 },
  { ext: ".in", firstYear: 714, renewal: 779, transfer: 779, label: "Hot" },
  { ext: ".team", firstYear: 779, renewal: 5199, transfer: 5199 },
  { ext: ".art", firstYear: 779, renewal: 3249, transfer: 3249 },
  { ext: ".cafe", firstYear: 779, renewal: 7409, transfer: 7409 },
  { ext: ".win", firstYear: 779, renewal: 974, transfer: 779 },
  { ext: ".sbs", firstYear: 909, renewal: 1429, transfer: 1429 },
  { ext: ".org", firstYear: 1039, renewal: 1559, transfer: 1559 },
  { ext: ".biz", firstYear: 1039, renewal: 2469, transfer: 2469 },
  { ext: ".uk", firstYear: 1039, renewal: 1039, transfer: 1039 },
  { ext: ".co.uk", firstYear: 1039, renewal: 1039, transfer: 1039 },
  { ext: ".tech", firstYear: 1104, renewal: 8384, transfer: 8384 },
  { ext: ".com", firstYear: 1169, renewal: 1429, transfer: 1429, label: "Hot" },
  { ext: ".blog", firstYear: 1169, renewal: 3249, transfer: 3249 },
  { ext: ".one", firstYear: 1169, renewal: 3564, transfer: 3564 },
  { ext: ".website", firstYear: 1169, renewal: 2599, transfer: 2599 },
  { ext: ".app", firstYear: 1169, renewal: 2534, transfer: 2469 },
  { ext: ".me", firstYear: 1429, renewal: 2729, transfer: 2729 },
  { ext: ".net", firstYear: 1689, renewal: 1689, transfer: 1689 },
  { ext: ".at", firstYear: 1754, renewal: 1819, transfer: 1819 },
  { ext: ".review", firstYear: 1884, renewal: 1884, transfer: 1884 },
  { ext: ".nl", firstYear: 1949, renewal: 1949, transfer: 1949 },
  { ext: ".co", firstYear: 2469, renewal: 4289, transfer: 4289 },
  { ext: ".com.au", firstYear: 2599, renewal: 2599, transfer: 2599 },
  { ext: ".io", firstYear: 4289, renewal: 7994, transfer: 7994 },
  // OWNER REVIEW: .ai ka price 2 saal ke term ka hai, baaki sab 1 saal ke
  { ext: ".ai", firstYear: 22099, renewal: 22099, transfer: 22099, termYears: 2 },
  { ext: ".com.np", firstYear: 39000, renewal: 39000, transfer: 39000 },
  { ext: ".edu.np", firstYear: 39000, renewal: 39000, transfer: 39000 },
];

// Register button live site pe is link pe jata hai. Extension isme preselect nahi hota,
// user portal pe naam khud daalta hai. Tracking (utm, _gl) hata di hai
export const domainRegisterUrl = "https://portal.shrotihost.in/cart.php?a=add&domain=register";
export const domainTransferUrl = "https://portal.shrotihost.in/cart.php?a=add&domain=transfer";

// Homepage ke grid mein dikhne wale 8 extensions. Price ab allDomains se hi aate hain
const featuredExts = [".com", ".in", ".org", ".net", ".co", ".xyz", ".online", ".shop"];

export const featuredDomains: DomainExtension[] = featuredExts.map((ext) => {
  const domain = allDomains.find((item) => item.ext === ext);
  if (!domain) throw new Error(`Featured extension ${ext} is missing from allDomains`);
  return {
    ext: domain.ext,
    firstYear: domain.firstYear,
    renewal: domain.renewal,
    note: hasBigRenewalJump(domain) ? `${renewalMultiple(domain)}x first year` : undefined,
  };
});

// Page ke 4 chhote feature blocks, live site ke words
export const domainFeatures = [
  { title: "Free WHOIS privacy", text: "Your contact details stay off public records." },
  { title: "Free DNS management", text: "Point your domain anywhere, no extra fee." },
  { title: "One-click connect", text: "Wire it straight to a Shroti Host plan." },
  {
    title: "Upfront renewal pricing",
    text: "The renewal price is printed next to the first-year price. No surprise later.",
  },
];