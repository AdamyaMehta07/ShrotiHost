"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav, portalLinks } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  // Konsa dropdown khula hai (naam se), ya null
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Koi bhi link click ho to saare menu band
  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // Bahar click ya Escape dabane pe dropdown band
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Current page ka link highlight karne ke liye
  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  }

  const linkBase = "rounded-md px-3 py-2 text-sm font-medium transition-colors";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" onClick={closeAll} aria-label="Shroti Host home">
          <Image
            src="/logo-on-light.svg"
            alt="Shroti Host"
            width={160}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <nav ref={navRef} aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.links ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className={`${linkBase} inline-flex items-center gap-1 text-ink-soft hover:bg-brand-50 hover:text-brand-700`}
                >
                  {item.label}
                  <ChevronDown size={16} aria-hidden="true" />
                </button>
                {openMenu === item.label && (
                  <ul className="absolute left-0 top-full mt-2 w-64 rounded-(--radius-card) border border-line bg-white p-2 shadow-lg">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeAll}
                          aria-current={isActive(link.href) ? "page" : undefined}
                          className={`block rounded-md px-3 py-2 text-sm hover:bg-brand-50 ${
                            isActive(link.href) ? "font-semibold text-brand-700" : "text-ink-soft"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={closeAll}
                aria-current={isActive(item.href!) ? "page" : undefined}
                className={`${linkBase} hover:bg-brand-50 hover:text-brand-700 ${
                  isActive(item.href!) ? "text-brand-700" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <a
            href={portalLinks.login}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-ink-soft hover:text-brand-700 sm:inline-block"
          >
            Log in
          </a>
          <Link
            href="/hosting"
            onClick={closeAll}
            className="hidden rounded-(--radius-control) bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 sm:inline-block"
          >
            See hosting plans
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-ink hover:bg-brand-50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <div className="container-page space-y-4 py-4">
            {mainNav.map((item) =>
              item.links ? (
                <div key={item.label}>
                  <p className="px-3 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    {item.label}
                  </p>
                  <ul className="mt-1">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeAll}
                          aria-current={isActive(link.href) ? "page" : undefined}
                          className={`block rounded-md px-3 py-2.5 text-base hover:bg-brand-50 ${
                            isActive(link.href) ? "font-semibold text-brand-700" : "text-ink"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={closeAll}
                  aria-current={isActive(item.href!) ? "page" : undefined}
                  className={`block rounded-md px-3 py-2.5 text-base hover:bg-brand-50 ${
                    isActive(item.href!) ? "font-semibold text-brand-700" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-2 border-t border-line pt-4">
              <Link
                href="/hosting"
                onClick={closeAll}
                className="rounded-(--radius-control) bg-brand-600 px-4 py-3 text-center font-semibold text-white hover:bg-brand-700"
              >
                See hosting plans
              </Link>
              <a
                href={portalLinks.login}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-(--radius-control) border border-line px-4 py-3 text-center font-semibold text-ink hover:bg-brand-50"
              >
                Log in
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}