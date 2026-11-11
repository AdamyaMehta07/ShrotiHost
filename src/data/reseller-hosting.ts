import type { FaqItem, HostingPlan, SpecGroup } from "@/types/hosting";

// Data source: https://shrotihost.in/reseller-hosting



const PORTAL_STORE = "https://portal.shrotihost.in/index.php/store/reseller-hosting";

// Chaaron plans mein ye features same hain (live site ke words)
const commonFeatures = [
  "Unlimited NVMe Storage",
  "Unmetered Bandwidth",
  "Free SSL Certificate",
  "Daily Backups with JetBackup",
  "LiteSpeed Server",
  "cPanel + Softaculous",
  "Managed WordPress",
  "DDoS & Imunify360 Protection",
  "Python & Node.js Supported",
  "Terminal Access",
  "Free WHMCS Billing on Annual Plans",
  "Instant Activation",
  "Priority support (WhatsApp + tickets)",
];

export const resellerPlans: HostingPlan[] = [
  {
    id: "reseller-starter",
    name: "Reseller Starter",
    tagline: "Start your hosting business.",
    prices: { monthly: 299, sixMonths: 1599, yearly: 2999 },
    savings: { sixMonths: 11, yearly: 16 },
    highlights: { accounts: "25 accounts", storage: "Unlimited NVMe", bandwidth: "Unmetered" },
    features: commonFeatures,
    purchaseUrl: `${PORTAL_STORE}/reseller-starter`,
  },
  {
    id: "reseller-growth",
    name: "Reseller Growth",
    tagline: "Room to grow your client base.",
    prices: { monthly: 499, sixMonths: 2699, yearly: 4999 },
    savings: { sixMonths: 10, yearly: 17 },
    popular: true,
    highlights: { accounts: "50 accounts", storage: "Unlimited NVMe", bandwidth: "Unmetered" },
    features: commonFeatures,
    purchaseUrl: `${PORTAL_STORE}/reseller-growth`,
  },
  {
    id: "reseller-pro",
    name: "Reseller Pro",
    tagline: "For an established book of clients.",
    prices: { monthly: 799, sixMonths: 4299, yearly: 7999 },
    savings: { sixMonths: 10, yearly: 17 },
    highlights: { accounts: "100 accounts", storage: "Unlimited NVMe", bandwidth: "Unmetered" },
    features: commonFeatures,
    purchaseUrl: `${PORTAL_STORE}/reseller-pro`,
  },
  {
    id: "reseller-infinity",
    name: "Reseller Infinity",
    tagline: "No cap on the accounts you create.",
    prices: { monthly: 1299, sixMonths: 6999, yearly: 12999 },
    savings: { sixMonths: 10, yearly: 17 },
    highlights: { accounts: "Unlimited accounts", storage: "Unlimited NVMe", bandwidth: "Unmetered" },
    features: commonFeatures,
    purchaseUrl: `${PORTAL_STORE}/reseller-infinity`,
  },
];

// Plans ke neeche wali trust line. Shared wali list se alag hai (isme "free migration" nahi hai)
export const resellerTrustPoints: string[] = [
  "7-day money-back guarantee",
  "Same renewal price, every cycle",
  "99.9% uptime target",
  "Instant activation",
  "24/7 Support",
];

// OWNER REVIEW: ye ₹499 Master Reseller page se verify karna hai (jab wo page banega)
export const masterResellerTeaser =
  "Want to sell hosting to other resellers too? Master Reseller Hosting adds WHM reseller accounts from ₹499/month.";

// OWNER REVIEW: ye line live reseller page pe nahi hai, unlimited page ki wording se li hai
export const resellerAupNote =
  "Unmetered and unlimited services remain subject to our Acceptable Use Policy.";

// "Full WHM access" wagairah ke 4 blocks
export const resellerHighlights = [
  {
    title: "Full WHM access",
    text: "Create, manage, and suspend cPanel accounts from your own WHM.",
  },
  {
    title: "White-label branding",
    text: "Your customers see your brand. Shroti Host stays behind the scenes.",
  },
  {
    title: "Free WHMCS billing",
    text: "Included on annual plans: automate signups, invoices, and renewals from day one.",
  },
  {
    title: "DDoS & Imunify360",
    text: "The same DDoS filtering and Imunify360 protection on every account you host.",
  },
];

// Spec table. Values ka order: Starter, Growth, Pro, Infinity
// true = Included
export const resellerSpecs: SpecGroup[] = [
  {
    title: "Accounts & Resources",
    rows: [
      {
        label: "cPanel Accounts",
        values: ["25 cPanel Accounts", "50 cPanel Accounts", "100 cPanel Accounts", "Unlimited cPanel Accounts"],
      },
      { label: "NVMe SSD Storage", values: ["Unlimited NVMe", "Unlimited NVMe", "Unlimited NVMe", "Unlimited NVMe"] },
      { label: "Bandwidth", values: ["Unmetered", "Unmetered", "Unmetered", "Unmetered"] },
      { label: "Hosted Websites", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Parked & Addon Domains", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Mailboxes", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    ],
  },
  {
    title: "Reseller Business Tools",
    rows: [
      { label: "Free WHMCS Billing (annual plans)", values: [true, true, true, true] },
      { label: "Full White-Label Branding", values: [true, true, true, true] },
      { label: "Private Nameservers", values: [true, true, true, true] },
      { label: "WHM Control Panel", values: [true, true, true, true] },
      { label: "Custom Hosting Packages", values: [true, true, true, true] },
      { label: "Overselling Support", values: [true, true, true, true] },
    ],
  },
  {
    title: "Platform, Security & Backups",
    rows: [
      { label: "LiteSpeed Web Server", values: [true, true, true, true] },
      { label: "CloudLinux Isolation", values: [true, true, true, true] },
      { label: "cPanel + Softaculous", values: [true, true, true, true] },
      { label: "Node.js & Python Apps", values: [true, true, true, true] },
      { label: "Unlimited NVMe Storage", values: [true, true, true, true] },
      { label: "Free SSL Certificates", values: [true, true, true, true] },
      { label: "Imunify360 + DDoS Protection", values: [true, true, true, true] },
      { label: "Daily Backups (JetBackup)", values: [true, true, true, true] },
      { label: "Instant Activation", values: [true, true, true, true] },
      // Ye target hai, contractual SLA nahi. Wording badalna mat
      { label: "Uptime Target", values: ["99.9%", "99.9%", "99.9%", "99.9%"] },
    ],
  },
];

// FAQ:
// FAQ: live site ke exact answers
export const resellerFaqs: FaqItem[] = [
  {
    question: "How much does reseller hosting cost?",
    answer:
      "Reseller Starter starts at ₹299/month for 25 cpanel accounts and Unlimited NVMe storage. Reseller Growth (₹499/mo) allows 50 cpanel accounts on Unlimited NVMe, Reseller Pro (₹799/mo) 100 cpanel accounts on Unlimited NVMe, and Reseller Infinity (₹1299/mo) unlimited cpanel accounts on unlimited nvme storage. Bandwidth is unmetered and renewals cost the same as the first term.",
  },
  {
    question: "Is WHMCS billing software included?",
    answer:
      "Yes, on annual billing. A free WHMCS licence comes with every reseller plan paid yearly, alongside a WHM control panel, custom hosting packages and overselling support, so orders, invoices and account provisioning run without manual work. Monthly and 6-month plans include WHM but not WHMCS; you can install your own WHMCS licence on them.",
  },
  {
    question: "Can my customers tell that Shroti Host is behind my hosting?",
    answer:
      "No. Every plan is fully white-label: private nameservers on your own domain and your branding on every cPanel account you create. Your customers see your company, not ours.",
  },
  {
    question: "What limits apply to each cPanel account I create?",
    answer:
      "You set the package sizes yourself in WHM (disk, bandwidth, mailboxes, databases and the rest), and every account you create is isolated by CloudLinux, so one busy client site cannot slow the others down. Per-account ceilings come out of your plan's overall allocation.",
  },
  {
    question: "What is WHM, and how is it different from cPanel?",
    answer:
      "WHM (Web Host Manager) is the reseller's control panel: you use it to create hosting packages, open and suspend cPanel accounts, set per-account limits and manage your own nameservers. cPanel is what each of your customers logs into to manage their single site: files, email, databases, SSL. One WHM sits above many cPanel accounts, and a reseller plan gives you the WHM.",
  },
  {
    question: "What is WHMCS and do I have to pay for it?",
    answer:
      "WHMCS is billing and automation software: it takes the order, raises the invoice, collects payment and then tells WHM to create the cPanel account automatically. A licence is included free with every reseller plan billed annually here, which matters because bought separately it is a recurring monthly cost. Monthly and 6-month plans do not include one.",
  },
  {
    question: "Can I use my own nameservers?",
    answer:
      "Yes. You set private nameservers on your own domain (typically ns1.yourbrand.com and ns2.yourbrand.com) and point your clients at those. Your customers never see a Shroti Host hostname",
  },
  {
    question: "How should I price my plans, and what margin can I expect?",
    answer:
      "Your cost is fixed and known: the monthly plan price divided across the number of accounts you actually sell. What you charge is your decision, and your real margin depends on how many accounts you fill, how much support you provide and what you spend acquiring customers. We will not quote a profit figure; anyone who promises you one is guessing. Start from your own cost per account and price from there.",
  },
  {
    question: "Are backups and SSL covered for my clients' sites?",
    answer:
      "Yes. Daily JetBackup backups, free SSL certificates and Imunify360 + DDoS protection apply to every account on your reseller plan.",
  },
];