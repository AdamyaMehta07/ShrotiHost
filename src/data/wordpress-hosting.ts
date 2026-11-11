import type { FaqItem, HostingPlan, SpecGroup } from "@/types/hosting";

// Data source: https://shrotihost.in/wordpress-hosting


const PORTAL_STORE = "https://portal.shrotihost.in/index.php/store/wordpress-hosting";

export const wordpressPlans: HostingPlan[] = [
  {
    id: "wp-starter",
    name: "WP Starter",
    tagline: "Start your WordPress journey.",
    prices: { monthly: 69, sixMonths: 399, yearly: 699 },
    savings: { sixMonths: 4, yearly: 16 },
    highlights: {
      cpu: "1 Core",
      ram: "1.5 GB",
      storage: "10 GB NVMe",
      websites: "1 Website",
      email: "5 Accounts",
      bandwidth: "Unmetered",
    },
    features: [
      "WordPress Manager by Softaculous",
      "Softaculous 1-Click Installs",
      "AccelerateWP Optimization",
      "LiteSpeed + LiteSpeed Cache",
      "Free SSL Certificate",
      "Daily Backups",
      "Free WordPress Migration",
      "Imunify360 Security",
      "WooCommerce Ready",
    ],
    purchaseUrl: `${PORTAL_STORE}/wp-starter`,
  },
  {
    id: "wp-business",
    name: "WP Business",
    tagline: "Everything your WordPress business needs.",
    prices: { monthly: 119, sixMonths: 679, yearly: 1199 },
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
    includesFrom: "WP Starter",
    features: [
      "Redis Object Cache",
      "Git Version Control",
      "Node.js & Python",
      "Advanced WordPress Management",
    ],
    purchaseUrl: `${PORTAL_STORE}/wp-business`,
  },
  {
    id: "wp-performance",
    name: "WP Performance",
    tagline: "More power for demanding WordPress sites.",
    prices: { monthly: 229, sixMonths: 1299, yearly: 2299 },
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
    includesFrom: "WP Business",
    features: [
      "SSH & Terminal Access",
      "Team & User Management",
      "RubyGems & Perl Modules",
      "Advanced Developer Tools",
    ],
    purchaseUrl: `${PORTAL_STORE}/wp-performance`,
  },
  {
    id: "wp-ultimate",
    name: "WP Ultimate",
    tagline: "Maximum WordPress power.",
    prices: { monthly: 379, sixMonths: 2159, yearly: 3799 },
    savings: { sixMonths: 5, yearly: 16 },
    freeDomain: ".com or .in domain",
    highlights: {
      cpu: "3 Cores",
      ram: "4 GB",
      storage: "250 GB NVMe",
      websites: "25 Websites",
      email: "Unlimited",
      bandwidth: "Unmetered",
    },
    includesFrom: "WP Performance",
    features: [
      "Full available WordPress feature set",
      "Highest CloudLinux allocation on the WordPress line",
    ],
    purchaseUrl: `${PORTAL_STORE}/wp-ultimate`,
  },
];

// Spec table. Values ka order: WP Starter, WP Business, WP Performance, WP Ultimate
// true = Included, false = Not included
export const wordpressSpecs: SpecGroup[] = [
  {
    title: "Allocated Resources",
    rows: [
      {
        label: "Websites",
        values: ["1 WordPress Website", "5 WordPress Websites", "10 WordPress Websites", "25 WordPress Websites"],
      },
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
    title: "WordPress",
    rows: [
      { label: "WordPress Manager by Softaculous", values: [true, true, true, true] },
      { label: "Softaculous 1-Click Installs", values: [true, true, true, true] },
      { label: "1-Click WordPress Install", values: [true, true, true, true] },
      { label: "AccelerateWP", values: [true, true, true, true] },
      { label: "LiteSpeed Cache", values: [true, true, true, true] },
      { label: "WordPress Security Tools", values: [true, true, true, true] },
      { label: "WooCommerce Support", values: [true, true, true, true] },
      { label: "Redis Object Cache", values: [false, true, true, true] },
      { label: "Advanced WordPress Management", values: [false, true, true, true] },
      { label: "Sitejet Website Builder", values: [false, true, true, true] },
      { label: "SitePad Website Builder", values: [false, true, true, true] },
      { label: "Full WordPress Feature Set", values: [false, false, false, true] },
    ],
  },
  {
    title: "Platform & Developer",
    rows: [
      { label: "LiteSpeed Web Server", values: [true, true, true, true] },
      { label: "CloudLinux Isolation", values: [true, true, true, true] },
      { label: "cPanel", values: [true, true, true, true] },
      { label: "PHP 8.x & MySQL", values: [true, true, true, true] },
      { label: "Git Version Control", values: [false, true, true, true] },
      { label: "Node.js & Python", values: [false, true, true, true] },
      { label: "SSH / Terminal", values: [false, false, true, true] },
      { label: "RubyGems & Perl Modules", values: [false, false, true, true] },
      { label: "Team & User Management", values: [false, false, true, true] },
      { label: "Advanced Developer Tools", values: [false, false, true, true] },
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

// "Built for fast WordPress performance" wale 4 blocks
export const wordpressHighlights = [
  {
    title: "WordPress Manager on every plan",
    text: "Manage WordPress sites, plugins, themes and supported updates from one interface.",
  },
  {
    title: "LiteSpeed Cache + AccelerateWP",
    text: "Fast web serving with LiteSpeed caching and WordPress-focused optimization.",
  },
  {
    title: "Redis Object Cache",
    text: "Persistent object caching for WordPress sites that benefit from it, from WP Business up.",
  },
  {
    title: "Layered security",
    text: "Imunify360, free SSL, CloudLinux isolation and daily backups help protect your WordPress environment from common threats.",
  },
];

// FAQ: live site ke exact answers
export const wordpressFaqs: FaqItem[] = [
  {
    question: "What is WordPress hosting?",
    answer:
      "The same NVMe and LiteSpeed platform as our shared hosting, but set up around WordPress: WordPress Manager for installs, updates and plugins from one screen, LiteSpeed Cache and AccelerateWP already wired in, and migration handled for you.",
  },
  {
    question: "How much does WordPress hosting cost?",
    answer:
      "WP Starter starts at ₹69/month for 1 wordpress website with 10 GB NVMe storage. WP Business (₹119/mo) hosts 5 wordpress websites, WP Performance (₹229/mo) 10 wordpress websites, and WP Ultimate (₹379/mo) 25 wordpress websites on 250 gb nvme storage. The renewal price matches the signup price on every cycle.",
  },
  {
    question: "Do I save by paying for 6 months or a year?",
    answer:
      "Yes, and against the real number rather than an inflated list price. WP Business is ₹119/month, so twelve months bought one at a time costs ₹1428; the annual plan is ₹1199, about 16% less. It renews at that same price.",
  },
  {
    question: "How much CPU and RAM do I get?",
    answer:
      "WP Starter is allocated 1 core and 1.5 GB RAM, WP Business 1.5 cores and 2 GB, WP Performance 2 cores and 3 GB, and WP Ultimate 3 cores and 4 GB. These are CloudLinux allocations: the ceiling your account can burst to, not reserved hardware.",
  },
  {
    question: "Is WordPress pre-installed?",
    answer:
      "WordPress installs in one click through Softaculous, and WordPress Manager is on every plan for installs, plugins, themes, supported updates and security settings from one interface. WP Business adds advanced WordPress management, Redis object caching and the Sitejet and SitePad builders.",
  },
  {
    question: "Can I run a WooCommerce store?",
    answer:
      "Yes. WooCommerce is supported on every tier. WP Starter suits small, simple stores and WP Business small business stores, with Redis object caching from WP Business up. WP Performance is the one to pick for a growing store, with 2 cores; WP Ultimate is for higher-resource WooCommerce workloads within shared-hosting limits. We don't quote product or order counts; those depend on your theme, plugins and traffic.",
  },
  {
    question: "How many email accounts do I get?",
    answer:
      "WP Starter includes 5 mailboxes, WP Business 25 mailboxes, WP Performance 50 mailboxes, and WP Ultimate unlimited mailboxes. Unlimited means the number of mailboxes. Their storage comes out of your plan's disk allocation, and outbound sending is rate-limited per tier.",
  },
  {
    question: "Is a domain free?",
    answer:
      "WP Performance and WP Ultimate include a free domain for the first year on annual billing: a .in on WP Performance, with .com eligible on WP Ultimate. Premium domains are excluded and renewals are charged at the normal price. WP Starter and WP Business do not include one.",
  },
  {
    question: "What is the difference between WordPress hosting and shared hosting?",
    answer:
      "Both run the same platform with the same CPU, RAM and storage allocations tier for tier. WordPress costs more because of what is set up on top: AccelerateWP from the entry tier, WordPress Manager for centralised updates, Redis object caching from WP Business up, and LiteSpeed caching tuned for WordPress. If you want the same resources without that layer, or you also run Node.js, Python or custom PHP, Shared Hosting starts at ₹49/month and is the better buy.",
  },
  {
    question: "Will you migrate my existing WordPress site?",
    answer:
      "Yes, free on every plan. Our team moves the files, database and email from your current host, and we tune the LiteSpeed cache before handing the site back to you.",
  },
];