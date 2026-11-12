import type { Metadata } from "next";
import Link from "next/link";
import { DomainSearch } from "@/components/domains/DomainSearch";
import { DomainTable } from "@/components/domains/DomainTable";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  allDomains,
  domainFeatures,
  domainPricesCheckedOn,
  domainTransferUrl,
} from "@/data/domains";
import { portalLinks } from "@/data/navigation";
import { freeDomainTerms } from "@/data/shared-hosting";

export const metadata: Metadata = {
  title: "Domains",
  description: `Search domains and compare first-year, renewal and transfer prices for ${allDomains.length} extensions, with every renewal price shown upfront.`,
};

export default function DomainsPage() {
  return (
    <>
      <PageHero
        eyebrow="Domains"
        title="Domain registration, without the renewal surprise."
        description="Search, compare extensions and register. Every renewal price is shown before you buy."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Domains" }]}
      >
        <Button href="#search">Search a domain</Button>
        <Button href="#extensions" variant="secondary">
          See all extensions
        </Button>
      </PageHero>

      <Section id="search" title="Find your name" intro="Type the name you want and pick an extension.">
        <DomainSearch />
      </Section>

      <Section
        id="extensions"
        title={`All ${allDomains.length} extensions`}
        intro="Every extension we sell, priced upfront. First year, renewal and transfer for every extension. Sort any column; big renewal jumps are flagged."
        tinted
      >
        <DomainTable domains={allDomains} />
        <p className="mt-2 text-xs text-ink-faint">
          Prices were checked against shrotihost.in on {domainPricesCheckedOn} and may have changed
          since. .ai is priced per 2-year term; all other extensions are per year.
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          <a
            href={portalLinks.domainPricing}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-700 underline"
          >
            View full domain pricing
          </a>
          {" · "}
          <a
            href={domainTransferUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-700 underline"
          >
            Transfer your domain
          </a>
        </p>
      </Section>

      <Section title="Included with every domain">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {domainFeatures.map((feature) => (
            <li key={feature.title} className="rounded-(--radius-card) border border-line bg-white p-6">
              <h3 className="font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{feature.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="rounded-(--radius-card) bg-brand-900 p-8 text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Found the name? Put a site on it.</h2>
          <p className="mt-2 max-w-xl text-white/80">
            Register the domain, then add hosting with free SSL and daily backups. Turbo and
            Infinity include a domain for the first year on annual billing.
          </p>
          <p className="mt-2 max-w-2xl text-xs text-white/70">{freeDomainTerms}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#search" className="bg-white !text-brand-800 hover:!bg-brand-50">
              Search domains
            </Button>
            <Button href="/hosting" variant="ghost" className="!text-white hover:!bg-white/10">
              See hosting plans
            </Button>
            <Button href="/contact" variant="ghost" className="!text-white hover:!bg-white/10">
              Talk to us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}