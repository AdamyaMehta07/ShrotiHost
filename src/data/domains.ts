import type { DomainExtension } from "@/types/domains";

// Data source: https://shrotihost.in/ (domains section)

export const featuredDomains: DomainExtension[] = [
  { ext: ".com", firstYear: 1169, renewal: 1429 },
  { ext: ".in", firstYear: 714, renewal: 779 },
  { ext: ".org", firstYear: 1039, renewal: 1559 },
  { ext: ".net", firstYear: 1689, renewal: 1689 },
  { ext: ".co", firstYear: 2469, renewal: 4289 },
  { ext: ".xyz", firstYear: 259, renewal: 2079, note: "8x first year" },
  { ext: ".online", firstYear: 259, renewal: 4549, note: "18x first year" },
  { ext: ".shop", firstYear: 129, renewal: 5199, note: "40x first year" },
];

// Transfer ka link portal pe jata hai. Tracking (utm, _gl) hata di hai
export const domainTransferUrl = "https://portal.shrotihost.in/cart.php?a=add&domain=transfer";