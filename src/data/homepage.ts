import type { FaqItem } from "@/types/hosting";
import type { ComparisonRow, InfraLayer, JourneyStep, ProductTile } from "@/types/home";

// Data source: https://shrotihost.in/ (homepage)


export const heroFacts = [
  "NVMe storage",
  "CloudLinux isolation",
  "Free SSL",
  "Daily Backups",
  "Free Migration",
  "Support on WhatsApp + tickets",
];

// OWNER REVIEW: ye live site ka claim hai, hum verify nahi kar sakte
export const servingSince = "Serving customers since 2023";

// OWNER REVIEW: rating badal sakti hai. Sirf rating aur link rakhe hain, review quotes nahi
export const trustpilot = {
  rating: "4.1/5",
  reviews: 12,
  url: "https://www.trustpilot.com/review/shrotihost.in",
};

export const journeySteps: JourneyStep[] = [
  {
    step: "Step 1",
    label: "HOST",
    title: "Your address and your ground.",
    text: "Domains, LiteSpeed hosting, and the infrastructure your project stands on, live in minutes.",
    tags: ["Hosting", "Domains", "VPS"],
    cta: { label: "See hosting plans", href: "/hosting" },
  },
  {
    step: "Step 2",
    label: "BUILD",
    title: "The thing itself, built for you.",
    text: "Websites, web apps, stores, mobile apps, and SaaS, designed and engineered by the team that runs the platform.",
    tags: ["Websites", "Mobile apps", "E-commerce", "SaaS"],
    cta: { label: "Start a project", href: "/web-development#enquire" },
  },
  {
    step: "Step 3",
    label: "SCALE",
    title: "Growth without re-platforming.",
    text: "Deployment, optimization, maintenance, and the move to bigger infrastructure, with the same team, not a new vendor.",
    tags: ["Custom software", "VPS", "Free Migration"],
    // TODO: live site pe "Plan the next step" ka asli link check karna hai
    cta: { label: "Plan the next step", href: "/contact" },
  },
];

export const products: ProductTile[] = [
  {
    name: "Shared Hosting",
    text: "Launch, Grow, Turbo, and Infinity plans on LiteSpeed and NVMe storage: the foundation everything else builds on.",
    href: "/hosting",
    flagship: true,
  },
  { name: "WordPress Hosting", text: "Tuned for WordPress & WooCommerce.", href: "/wordpress-hosting" },
  { name: "Domains", text: "Search, register, and manage domains.", href: "/domains" },
  { name: "Reseller Hosting", text: "Start your own hosting business on our stack.", href: "/reseller-hosting" },
  // Live homepage pe "as many sites as you run" likha hai, lekin sirf Infinity tier unlimited sites deta hai.
  // Isliye Unlimited page ki wording use ki hai.
  {
    name: "Unlimited Hosting",
    text: "Unmetered storage and bandwidth, sized by website count.",
    href: "/unlimited-hosting",
  },
];

export const infraLayers: InfraLayer[] = [
  { title: "Internet", text: "Your visitor's request begins here." },
  {
    title: "Optional: Cloudflare CDN",
    text: "Free, and you connect it to your own domain for edge caching and DNS. Our servers are Cloudflare protected either way.",
  },
  {
    title: "LiteSpeed Web Server",
    text: "Event-driven request handling, far faster than Apache.",
  },
  {
    title: "CloudLinux isolation",
    text: "Your account runs isolated, so one site's spike never slows another.",
  },
  {
    title: "Your website",
    text: "Served from NVMe storage with daily backups and Imunify360 security.",
  },
];

// OWNER REVIEW: live site ka "Compared against public plan pages, Aug 2026" wala comparison.
// "Typical shared plans" wali baatein doosre hosts ke baare mein claims hain.
// SSH aur Python/Node.js rows live homepage se alag likhe hain, taaki /hosting ke spec table se match karein.
export const comparisonNote =
  "Compared against public plan pages, Aug 2026. Inclusions on other hosts change by plan and over time, so check the host's own page before you decide.";

export const comparisonRows: ComparisonRow[] = [
  { feature: "NVMe SSD Storage", shroti: "Included", typical: "Varies by host" },
  { feature: "LiteSpeed Web Server", shroti: "Included", typical: "Usually Apache/Nginx" },
  { feature: "Free SSL on all plans", shroti: "Included", typical: "Varies by host" },
  { feature: "DDoS + Imunify360", shroti: "Included", typical: "Varies by host" },
  { feature: "SSH Terminal Access", shroti: "Turbo and Infinity plans", typical: "Varies by host" },
  {
    feature: "Python / Node.js / PHP",
    shroti: "PHP on every plan; Node.js & Python from Grow",
    typical: "Varies by host",
  },
  { feature: "Free daily backups", shroti: "Included", typical: "Often a paid add-on" },
  { feature: "Free Website Migration", shroti: "Included", typical: "Varies by host" },
  { feature: "Same Renewal Price", shroti: "Included", typical: "Often increases" },
];

// FAQ: live site ke exact answers
export const homeFaqs: FaqItem[] = [
  {
    question: "Is migration really free?",
    answer:
      "Yes. Our team migrates your website, files, and databases from your current host at no extra cost, on every hosting plan.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can move up a tier at any time without migrating your website to a new server; you are billed the difference for the rest of the term.",
  },
  {
    question: "What billing cycles do you offer?",
    answer:
      "Monthly, 6 months or yearly: pick whichever fits, with the same renewal price shown upfront on every cycle.",
  },
  {
    question: "What happens after my plan renews?",
    answer:
      "Renewal pricing is always shown clearly before you purchase, so there are no surprises at renewal time.",
  },
  {
    question: "Do you support WordPress?",
    answer:
      "Yes. Every plan includes LiteSpeed Cache and one-click WordPress installation via Softaculous. Our dedicated WordPress Hosting plan adds further performance optimizations.",
  },
];