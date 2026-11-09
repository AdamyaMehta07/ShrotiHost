// Menu aur footer ke saare links yahin se aate hain.


export interface NavLink {
  label: string;
  href: string;
  // true matlab live site pe "Soon" likha hai
  soon?: boolean;
}

// href wala item seedha link hai, links wala item dropdown hai
export interface NavItem {
  label: string;
  href?: string;
  links?: NavLink[];
}

export const mainNav: NavItem[] = [
  {
    label: "Hosting",
    links: [
      { label: "Shared Hosting", href: "/hosting" },
      { label: "WordPress Hosting", href: "/wordpress-hosting" },
      { label: "Unlimited Hosting", href: "/unlimited-hosting" },
      { label: "Reseller Hosting", href: "/reseller-hosting" },
      { label: "Master Reseller Hosting", href: "/master-reseller-hosting" },
      { label: "VPS Hosting", href: "/vps" },
      { label: "Offers", href: "/offers" },
    ],
  },
  { label: "Domains", href: "/domains" },
  {
    label: "Build",
    links: [
      { label: "Web Development", href: "/web-development" },
      { label: "App Development", href: "/app-development" },
      { label: "E-commerce Development", href: "/ecommerce-development" },
      { label: "SaaS Development", href: "/saas-development" },
      { label: "Custom Software", href: "/custom-software" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Ye links doosri site (portal) pe jate hain, naye tab mein khulenge
export const portalLinks = {
  login: "https://portal.shrotihost.in/clientarea.php",
  ticket: "https://portal.shrotihost.in/submitticket.php",
  domainPricing: "https://portal.shrotihost.in/index.php/domain/pricing",
};

export const contactInfo = {
  email: "support@shrotihost.in",
  whatsapp: "https://wa.me/919582129099",
};

// Footer ke columns
export const footerGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Hosting",
    links: [
      { label: "Shared Hosting", href: "/hosting" },
      { label: "WordPress Hosting", href: "/wordpress-hosting" },
      { label: "Unlimited Hosting", href: "/unlimited-hosting" },
      { label: "Domains", href: "/domains" },
      { label: "VPS Hosting", href: "/vps" },
      { label: "Offers", href: "/offers" },
    ],
  },
  {
    title: "Reseller & modules",
    links: [
      { label: "Reseller Hosting", href: "/reseller-hosting" },
      { label: "Master Reseller Hosting", href: "/master-reseller-hosting" },
      { label: "Alpha Reseller Hosting", href: "/alpha-reseller-hosting", soon: true },
      { label: "WHMCS Gateway Fees Module", href: "/whmcs-gateway-fees-allocator" },
      { label: "WHMCS WhatsApp Module", href: "/whmcs-whatsapp-notification-module" },
    ],
  },
  {
    title: "Development",
    links: [
      { label: "Web Development", href: "/web-development" },
      { label: "App Development", href: "/app-development" },
      { label: "E-commerce Development", href: "/ecommerce-development" },
      { label: "SaaS Development", href: "/saas-development" },
      { label: "Custom Software", href: "/custom-software" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Refund Policy", href: "/legal/refund-policy" },
      { label: "Acceptable Use Policy", href: "/legal/aup" },
    ],
  },
];