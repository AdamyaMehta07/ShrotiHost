import type { FaqItem, HostingPlan, SpecGroup } from "@/types/hosting";

// Data source: https://shrotihost.in/unlimited-hosting

const PORTAL_STORE = "https://portal.shrotihost.in/index.php/store/unlimited-hosting";

// Chaaron plans mein ye 10 features same hain

const commonFeatures = [
  "Unlimited NVMe Storage",
  "Unlimited Email, MySQL, FTP & Subdomains",
  "Site Quality Monitoring",
  "Social Media Management",
  "cPGuard + Imunify360 Security",
  "Backuply + JetBackup Self-Restore",
  "AccelerateWP + Redis Object Cache",
  "Sitejet & SitePad Site Builders",
  "Legacy PHP 5.6 - 8.x Support",
  "24/7 Priority Support",
];

export const unlimitedPlans: HostingPlan[] = [
  {
    id: "unlimited-solo",
    name: "Unlimited Solo",
    tagline: "Unlimited hosting resources for your single website.",
    prices: { monthly: 199, sixMonths: null, yearly: null },
    highlights: {
      cpu: "3 Cores",
      ram: "4 GB",
      storage: "Unmetered NVMe",
      websites: "1 Website",
      email: "Unlimited",
      bandwidth: "Unmetered",
    },
    features: commonFeatures,
    purchaseUrl: `${PORTAL_STORE}/unlimited-solo`,
  },
  {
    id: "unlimited-trio",
    name: "Unlimited Trio",
    tagline: "Host up to 3 websites with more power and flexibility.",
    prices: { monthly: 299, sixMonths: null, yearly: null },
    popular: true,
    highlights: {
      cpu: "4 Cores",
      ram: "5 GB",
      storage: "Unmetered NVMe",
      websites: "3 Websites",
      email: "Unlimited",
      bandwidth: "Unmetered",
    },
    features: commonFeatures,
    purchaseUrl: `${PORTAL_STORE}/unlimited-trio`,
  },
  {
    id: "unlimited-pro",
    name: "Unlimited Pro",
    tagline: "More resources for growing businesses, portfolios, and web projects.",
    prices: { monthly: 399, sixMonths: null, yearly: null },
    highlights: {
      cpu: "5 Cores",
      ram: "6 GB",
      storage: "Unmetered NVMe",
      websites: "5 Websites",
      email: "Unlimited",
      bandwidth: "Unmetered",
    },
    features: commonFeatures,
    purchaseUrl: `${PORTAL_STORE}/unlimited-pro`,
  },
  {
    id: "unlimited-infinity",
    name: "Unlimited Infinity",
    tagline: "Maximum allocated resources with no website-count limit.",
    prices: { monthly: 499, sixMonths: null, yearly: null },
    highlights: {
      cpu: "6 Cores",
      ram: "8 GB",
      storage: "Unmetered NVMe",
      websites: "Unlimited",
      email: "Unlimited",
      bandwidth: "Unmetered",
    },
    features: commonFeatures,
    purchaseUrl: `${PORTAL_STORE}/unlimited-infinity`,
  },
];

// "What's unlimited" section, live site ke words. Ye wording badalna mat:
// "unlimited" ko "infinite" jaisa nahi dikhana hai
export const whatsUnlimited = {
  intro:
    "These plans remove the common account-level limits: storage, bandwidth, email accounts, databases, subdomains. Your plan still has a clearly defined CloudLinux CPU and RAM allocation (the largest we give on any hosting line), so you always know what your websites can draw on.",
  noCap: [
    "NVMe storage",
    "Bandwidth",
    "Email accounts",
    "MySQL databases",
    "Subdomains & domain aliases",
    "FTP accounts",
    "DNS records & forwarders",
    "Cron jobs",
  ],
  allocated: [
    { label: "CPU", value: "3 Cores to 6 Cores" },
    { label: "RAM", value: "4 GB to 8 GB" },
    { label: "Websites", value: "1, 3, 5 or unlimited" },
  ],
  onlyOnLine: [
    { label: "cPGuard", text: "Account security and malware scanning, alongside Imunify360." },
    { label: "Backuply", text: "Extra backups you manage yourself, next to JetBackup self-restore." },
    { label: "Legacy PHP 5.6 to 7.4", text: "For older applications that are not ready for PHP 8 yet." },
  ],
  aupNote:
    "Unmetered and unlimited services remain subject to our Acceptable Use Policy and normal resource, email and anti-abuse policies. These plans are for websites and web applications, not general file storage, backup dumps or download mirrors.",
  allocationNote:
    "Storage, bandwidth, email accounts and databases carry no account-level cap on these plans. CPU, RAM, I/O, IOPS and process counts are allocated per tier and are listed above in full. We do not offer unlimited CPU, RAM, inodes or entry processes on any plan, and no hosting provider on shared infrastructure can.",
};

// Spec table. Values ka order: Solo, Trio, Pro, Infinity
// true = Included
export const unlimitedSpecs: SpecGroup[] = [
  {
    title: "Allocated Resources",
    rows: [
      { label: "Websites", values: ["1 Website", "3 Websites", "5 Websites", "Unlimited Websites"] },
      { label: "NVMe SSD Storage", values: ["Unmetered NVMe", "Unmetered NVMe", "Unmetered NVMe", "Unmetered NVMe"] },
      { label: "Bandwidth", values: ["Unmetered", "Unmetered", "Unmetered", "Unmetered"] },
      { label: "Inodes", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "CPU", values: ["3 Cores", "4 Cores", "5 Cores", "6 Cores"] },
      { label: "RAM", values: ["4 GB", "5 GB", "6 GB", "8 GB"] },
      { label: "I/O Speed", values: ["25 MB/s", "30 MB/s", "35 MB/s", "40 MB/s"] },
      { label: "IOPS", values: ["4,096", "5,120", "6,144", "8,000"] },
      { label: "Entry Processes", values: ["75", "100", "125", "150"] },
      { label: "Processes (NPROC)", values: ["150", "200", "250", "300"] },
      {
        label: "Mailboxes",
        values: ["Unlimited Mailboxes", "Unlimited Mailboxes", "Unlimited Mailboxes", "Unlimited Mailboxes"],
      },
      { label: "Email Sending", values: ["100/hour", "250/hour", "500/hour", "1,000/hour"] },
      { label: "Subdomains", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "MySQL Databases", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "FTP Accounts", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    ],
  },
  {
    title: "What's Unlimited",
    rows: [
      { label: "NVMe SSD Storage", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Domain Aliases", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "DNS Records", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Email Forwarders", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Autoresponders", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Cron Jobs", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
    ],
  },
  {
    title: "Premium Tools",
    rows: [
      { label: "Site Quality Monitoring", values: [true, true, true, true] },
      { label: "Social Media Management", values: [true, true, true, true] },
      { label: "cPGuard", values: [true, true, true, true] },
      { label: "Backuply", values: [true, true, true, true] },
      { label: "Sitejet Website Builder", values: [true, true, true, true] },
      { label: "SitePad Website Builder", values: [true, true, true, true] },
      { label: "Team & User Management", values: [true, true, true, true] },
      { label: "Manual SSL Installation", values: [true, true, true, true] },
      { label: "PGP Email Encryption", values: [true, true, true, true] },
    ],
  },
  {
    title: "Platform & Developer",
    rows: [
      { label: "LiteSpeed Web Server", values: [true, true, true, true] },
      { label: "CloudLinux Isolation", values: [true, true, true, true] },
      { label: "cPanel + Softaculous", values: [true, true, true, true] },
      { label: "Free SSL & AutoSSL", values: [true, true, true, true] },
      { label: "PHP 8.x & MySQL", values: [true, true, true, true] },
      { label: "Legacy PHP 5.6 - 7.4", values: [true, true, true, true] },
      { label: "AccelerateWP", values: [true, true, true, true] },
      { label: "Redis Object Cache", values: [true, true, true, true] },
      { label: "Git Version Control", values: [true, true, true, true] },
      { label: "SSH / Terminal", values: [true, true, true, true] },
      { label: "Node.js & Python Apps", values: [true, true, true, true] },
      { label: "RubyGems & Perl Modules", values: [true, true, true, true] },
      { label: "ModSecurity", values: [true, true, true, true] },
      { label: "JetBackup Self-Restore", values: [true, true, true, true] },
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
      // Ye target hai, contractual SLA nahi. Wording badalna mat
      { label: "Uptime Target", values: ["99.9%", "99.9%", "99.9%", "99.9%"] },
    ],
  },
];

// FAQ: live site ke exact answers
export const unlimitedFaqs: FaqItem[] = [
  {
    question: "What exactly is unlimited on these plans?",
    answer:
      "Storage, bandwidth, email accounts, databases, subdomains, domain aliases, FTP accounts and cron jobs carry no account-level cap on any tier. What changes between tiers is the number of websites (1 website on Unlimited Solo, 3 websites on Unlimited Trio, 5 websites on Unlimited Pro, and no limit on Unlimited Infinity) and the CloudLinux allocation.",
  },
  {
    question: "How much does unlimited hosting cost?",
    answer:
      "Unlimited Solo is ₹199/month, Unlimited Trio ₹299/month, Unlimited Pro ₹399/month and Unlimited Infinity ₹499/month, billed monthly. Renewal is the same price you signed up at. Six-month and annual terms are not open on this line yet.",
  },
  {
    question: "Are CPU and RAM unlimited too?",
    answer:
      "No, and we would rather say so plainly. Every plan has a CloudLinux allocation: 3 cores and 4 GB RAM on Unlimited Solo, rising to 6 cores and 8 GB on Unlimited Infinity, with I/O, IOPS, entry processes and NPROC listed per tier in the table above. That isolation is what stops one busy site slowing the others down.",
  },
  {
    question: "Does unlimited email mean unlimited sending?",
    answer:
      "No. You can create as many mailboxes as you need, but mailbox storage comes out of your account and outbound sending is rate-limited per hour under our anti-abuse policy. Any host claiming unlimited outbound mail is not describing a real mail server.",
  },
  {
    question: "How is this different from Shared Hosting?",
    answer:
      "Shared plans meter disk (10 GB to 250 GB) and cap both mailboxes and websites. Every Unlimited plan is unmetered on storage and bandwidth with unlimited mailboxes and databases from the entry tier, and allocates more CPU and RAM than the shared line at every tier: 3 cores and 4 GB even on Unlimited Solo. If you want unlimited websites specifically, compare the top tier of each line on price before deciding.",
  },
  {
    question: "Can I really use it for anything?",
    answer:
      "It is built for websites, blogs, stores and web applications, and comes with free migration, free SSL, daily backups and Imunify360 on every site. It is not general-purpose file storage, backup space, a download mirror or a media dump. Those workloads are not appropriate on shared infrastructure and our Acceptable Use Policy excludes them.",
  },
  {
    question: "Can I move client sites here for free?",
    answer:
      "Yes. Free migration applies to every site on the account, and you can move up a tier at any time without changing servers.",
  },
];