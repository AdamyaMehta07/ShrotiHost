import type { DomainPrice } from "@/types/domains";

type Prices = Pick<DomainPrice, "firstYear" | "renewal">;

// Renewal pehle saal se kitna zyada hai, rounded (live site pe "40x" jaisa)
export function renewalMultiple(domain: Prices): number {
  return Math.round(domain.renewal / domain.firstYear);
}

// Live site actual ratio 3 ya usse zyada pe flag lagati hai
// (.blog 2.8x pe nahi, .one 3.05x pe lagati hai). Ye cut-off humne live site se match karke nikala hai
export const BIG_JUMP_RATIO = 3;

export function hasBigRenewalJump(domain: Prices): boolean {
  return domain.renewal / domain.firstYear >= BIG_JUMP_RATIO;
}

export function formatRupees(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export type DomainQueryResult =
  | { ok: true; domain: string }
  | { ok: false; error: string };

// User ne jo type kiya use check karta hai. Sirf English letters, numbers, hyphen aur dots chalte hain
// (international characters abhi support nahi)
export function parseDomainQuery(raw: string, defaultExt: string): DomainQueryResult {
  let value = raw.trim().toLowerCase();

  // http://, www. aur aakhri slash hata do
  value = value.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/+$/, "");

  if (!value) {
    return { ok: false, error: "Type the name you want first, for example yourbrand." };
  }
  if (!/^[a-z0-9.-]+$/.test(value)) {
    return {
      ok: false,
      error: "Use only letters, numbers, hyphens and dots. Spaces and symbols are not allowed.",
    };
  }

  // Dot nahi hai to chuna hua extension laga do
  const full = value.includes(".") ? value : `${value}${defaultExt}`;
  const labels = full.split(".");

  if (labels.some((label) => label === "")) {
    return {
      ok: false,
      error: "Check the dots: a name cannot start or end with one, or have two in a row.",
    };
  }
  const validLabel = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
  if (labels.some((label) => label.length > 63 || !validLabel.test(label))) {
    return {
      ok: false,
      error: "Each part must start and end with a letter or number, and be at most 63 characters.",
    };
  }
  if (full.length > 253) {
    return { ok: false, error: "That name is too long." };
  }

  return { ok: true, domain: full };
}