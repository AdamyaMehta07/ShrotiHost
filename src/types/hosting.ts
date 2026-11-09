// Billing cycles jo live site pe hai
export type BillingCycle = "monthly" | "sixMonths" | "yearly";


export interface PlanHighlights {
  cpu: string;
  ram: string;
  storage: string;
  websites: string;
  email: string;
  bandwidth: string;
}

export interface HostingPlan {
  id: string;
  name: string;
  tagline: string;
  // Price rupees mein, taxes ke bina. 
  prices: Record<BillingCycle, number | null>;
  popular?: boolean;
  // Jaise "Free .in domain on yearly billing"
  freeDomainNote?: string;
  highlights: PlanHighlights;
  // Card mein "Everything in Launch, plus:" wali line
  includesFrom?: string;
  features: string[];
  purchaseUrl: string;
}

// Spec table ki ek cell: text ("10 GB NVMe") ya haan/naa (true/false)
export type SpecValue = string | boolean;

export interface SpecRow {
  label: string;
  // Order hamesha: Launch, Grow, Turbo, Infinity
  values: SpecValue[];
}

export interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

export interface FaqItem {
  question: string;
  answer: string;
}