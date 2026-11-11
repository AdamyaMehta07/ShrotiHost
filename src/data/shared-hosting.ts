import type { FaqItem, HostingPlan, SpecGroup } from "@/types/hosting";

// Data source: https://shrotihost.in/hosting


const PORTAL_STORE = "https://portal.shrotihost.in/index.php/store/shared-hosting";

export const sharedPlans: HostingPlan[] = [
  {
    id: "launch",
    name: "Launch",
    tagline: "Start something great.",
    
    prices: { monthly: 49, sixMonths: 279, yearly: 499 },
    savings: { sixMonths: 5, yearly: 15 },
    highlights: {
      cpu: "1 Core",
      ram: "1.5 GB",
      storage: "10 GB NVMe",
      websites: "1 Website",
      email: "5 Accounts",
      bandwidth: "Unmetered",
    },
    features: [
      "Free SSL Certificate",
      "Free Website Migration",
      "Daily Backups",
      "cPanel + Softaculous",
      "Managed WordPress + LiteSpeed Cache",
      "MySQL, phpMyAdmin & Cron Jobs",
      "DDoS & Imunify360 Protection",
      "Instant Activation + 24/7 Support",
    ],
    purchaseUrl: `${PORTAL_STORE}/launch`,
  },
  {
    id: "grow",
    name: "Grow",
    tagline: "Everything your growing website needs.",
    prices: { monthly: 79, sixMonths: 449, yearly: 799 },
    savings: { sixMonths: 5, yearly: 16 },
    popular: true,
    highlights: {
      cpu: "1.5 Cores",
      ram: "2 GB",
      storage: "50 GB NVMe",
      websites: "5 Websites",
      email: "25 Accounts",
      bandwidth: "Unmetered",
    },
    includesFrom: "Launch",
    features: [
      "Git Version Control",
      "Node.js & Python Apps",
      "JetBackup Self-Restore",
      "WordPress Management & AccelerateWP",
      "Website Builders",
      "Advanced PHP Configuration",
    ],
    purchaseUrl: `${PORTAL_STORE}/grow`,
  },
  {
    id: "turbo",
    name: "Turbo",
    tagline: "More power for growing websites.",
    prices: { monthly: 149, sixMonths: 849, yearly: 1499 },
    savings: { sixMonths: 5, yearly: 16 },
    freeDomain: ".in domain",
    
    highlights: {
      cpu: "2 Cores",
      ram: "3 GB",
      storage: "100 GB NVMe",
      websites: "10 Websites",
      email: "50 Accounts",
      bandwidth: "Unmetered",
    },
    includesFrom: "Grow",
    features: [
      "SSH & Terminal Access",
      "Redis Object Cache",
      "Team & User Management",
      "RubyGems, Perl & PEAR Modules",
      "Dynamic DNS",
      "DNSSEC & ModSecurity Control",
    ],
    purchaseUrl: `${PORTAL_STORE}/turbo`,
  },
  {
    id: "infinity",
    name: "Infinity",
    tagline: "Maximum shared-hosting power.",
    prices: { monthly: 249, sixMonths: 1399, yearly: 2499 },
    savings: { sixMonths: 6, yearly: 16 },
    freeDomain: ".com or .in domain",
    highlights: {
      cpu: "3 Cores",
      ram: "4 GB",
      storage: "250 GB NVMe",
      websites: "25 Websites",
      email: "Unlimited",
      bandwidth: "Unmetered",
    },
    includesFrom: "Turbo",
    features: [
      "PGP Email Encryption",
      "Manual SSL Installation",
      "Unlimited Mailboxes",
      "Full cPanel Feature Access",
    ],
    purchaseUrl: `${PORTAL_STORE}/infinity`,
  },
];

// Free domain ki shartein, live site ke exact words se 
export const freeDomainTerms =
  "Free domain terms: applies to eligible extensions on annual plans, for the first year only. Premium domains are excluded. Renewals are charged at the prevailing renewal price. One free domain per eligible hosting account.";

// Spec table. Values ka order: Launch, Grow, Turbo, Infinity
// true = Included, false = Not included
export const sharedSpecs: SpecGroup[] = [
  {
    title: "Allocated Resources",
    rows: [
      { label: "Websites", values: ["1 Website", "5 Websites", "10 Websites", "25 Websites"] },
      { label: "NVMe SSD Storage", values: ["10 GB NVMe", "50 GB NVMe", "100 GB NVMe", "250 GB NVMe"] },
      { label: "Bandwidth", values: ["Unmetered", "Unmetered", "Unmetered", "Unmetered"] },
      { label: "Inodes", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "CPU", values: ["1 Core", "1.5 Cores", "2 Cores", "3 Cores"] },
      { label: "RAM", values: ["1.5 GB", "2 GB", "3 GB", "4 GB"] },
      { label: "I/O Speed", values: ["5 MB/s", "10 MB/s", "15 MB/s", "20 MB/s"] },
      { label: "IOPS", values: ["1,024", "1,536", "2,048", "3,072"] },
      { label: "Entry Processes", values: ["20", "30", "40", "60"] },
      { label: "Processes (NPROC)", values: ["40", "60", "100", "150"] },
      { label: "Mailboxes", values: ["5 Mailboxes", "25 Mailboxes", "50 Mailboxes", "Unlimited Mailboxes"] },
      { label: "Email Sending", values: ["100/hour", "250/hour", "500/hour", "1,000/hour"] },
      { label: "Subdomains", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "MySQL Databases", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "FTP Accounts", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    ],
  },
  {
    title: "Performance & Software",
    rows: [
      { label: "LiteSpeed Web Server", values: [true, true, true, true] },
      { label: "LiteSpeed Cache", values: [true, true, true, true] },
      { label: "CloudLinux Isolation", values: [true, true, true, true] },
      { label: "Cloudflare CDN Ready", values: [true, true, true, true] },
      { label: "cPanel + Softaculous", values: [true, true, true, true] },
      { label: "Managed WordPress", values: [true, true, true, true] },
      { label: "PHP 8.x, MySQL & phpMyAdmin", values: [true, true, true, true] },
      { label: "Cron Jobs", values: [true, true, true, true] },
      { label: "AccelerateWP", values: [false, true, true, true] },
      { label: "Git Version Control", values: [false, true, true, true] },
      { label: "Node.js & Python Apps", values: [false, true, true, true] },
      { label: "JetBackup Self-Restore", values: [false, true, true, true] },
      { label: "SSH & Terminal Access", values: [false, false, true, true] },
      { label: "Redis Object Cache", values: [false, false, true, true] },
      { label: "RubyGems & Perl Modules", values: [false, false, true, true] },
      { label: "Sitejet Website Builder", values: [false, true, true, true] },
      { label: "SitePad Website Builder", values: [false, true, true, true] },
      { label: "Team & User Management", values: [false, false, true, true] },
    ],
  },
  {
    title: "Security & Backups",
    rows: [
      { label: "Free SSL Certificates", values: [true, true, true, true] },
      { label: "Imunify360 + Malware Scanner", values: [true, true, true, true] },
      { label: "ProActive Defense", values: [true, true, true, true] },
      { label: "DDoS Protection", values: [true, true, true, true] },
      { label: "Daily Backups (JetBackup)", values: [true, true, true, true] },
      { label: "Free Migration", values: [true, true, true, true] },
      { label: "Instant Activation", values: [true, true, true, true] },
      
      { label: "Uptime Target", values: ["99.9%", "99.9%", "99.9%", "99.9%"] },
    ],
  },
];

// FAQ: abhi sirf wahi jiska answer page pe dikha tha
// TODO: baaki sawalon ke answers page pe accordion kholke lene hain
export const sharedFaqs: FaqItem[] = [
  {
    question: "What is shared hosting?",
    answer:
      "Many hosting accounts run on the same server, which is what keeps the price low. CloudLinux isolates each account so one busy site cannot eat another's CPU, RAM or I/O. The allocation printed on your plan is yours to use.",
  },
];

// "Every plan gets all of this" wali list, live site se
export const sharedIncludedOnAll: string[] = [
  "NVMe SSD Storage",
  "Unmetered Bandwidth",
  "Free SSL Certificates",
  "Daily JetBackup Backups",
  "cPanel + Softaculous",
  "Managed WordPress",
  "LiteSpeed + LSCache",
  "CloudLinux Isolation",
  "Imunify360 + DDoS Shield",
  "Malware Scanner",
  "PHP 8.x + Cron Jobs",
  "Password & Security Manager",
  "Email on Your Domain",
  "Unlimited MySQL Databases",
  "Free Website Migration",
  "24/7 Support",
];

// Plans ke neeche wali chhoti trust line (live site ke words)
export const sharedTrustPoints: string[] = [
  "7-day money-back guarantee",
  "Same renewal price, every cycle",
  "99.9% uptime target",
  "Free migration, handled for you",
  "Instant activation",
  "24/7 Support",
];