import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { contactInfo, footerGroups, portalLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="mt-20 bg-night text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          {/* Company intro */}
          <div>
            <Link href="/" aria-label="Shroti Host home">
              <Image
                src="/logo-on-dark.svg"
                alt="Shroti Host"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Hosting, domains and software development for students, startups and growing
              businesses. One partner from first domain to production.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Mail size={16} aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-white">{group.title}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                    {link.soon && (
                      <span className="ml-2 rounded-full bg-brand-600 px-2 py-0.5 text-xs">
                        Soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Support links (portal pe jate hain) */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-sm">
          <span className="font-semibold">Support</span>
          <a href={portalLinks.login} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
            Client portal
          </a>
          <a href={portalLinks.ticket} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
            Submit a ticket
          </a>
          <a href={portalLinks.domainPricing} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
            Domain pricing
          </a>
        </div>

        <div className="mt-6 space-y-1 text-xs text-white/60">
          <p>Prices exclude applicable taxes, calculated at checkout.</p>
          <p>
            © 2026 Shroti Host, a brand of Shroti Enterprises · Udyam Reg. UDYAM-UP-36-0017127
          </p>
        </div>
      </div>
    </footer>
  );
}