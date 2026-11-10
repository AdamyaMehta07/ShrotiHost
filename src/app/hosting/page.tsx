import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/components/hosting/PricingSection";
import { SpecTable } from "@/components/hosting/SpecTable";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  freeDomainTerms,
  sharedFaqs,
  sharedIncludedOnAll,
  sharedPlans,
  sharedSpecs,
  sharedTrustPoints,
} from "@/data/shared-hosting";

export const metadata: Metadata = {
  title: "Shared Hosting",
  description:
    "Shared hosting from ₹49/mo with allocated CPU and RAM, LiteSpeed, NVMe storage, free SSL and free migration.",
};

// Neeche "related products" ke cards
const relatedProducts = [
  { name: "WordPress Hosting", href: "/wordpress-hosting" },
  { name: "Unlimited Hosting", href: "/unlimited-hosting" },
  { name: "Reseller Hosting", href: "/reseller-hosting" },
  { name: "VPS Hosting", href: "/vps" },
];

export default function SharedHostingPage() {
  return (
    <>
      <PageHero
        eyebrow="Shared Hosting"
        title="Fast shared hosting, priced honestly."
        description="Allocated CPU and RAM on every tier, LiteSpeed and NVMe, free SSL and migration. Renewals cost the listed price."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hosting", href: "/hosting" },
          { label: "Shared Hosting" },
        ]}
      >
        <Button href="#plans">See hosting plans</Button>
        <Button href="#compare" variant="secondary">
          Compare every spec
        </Button>
      </PageHero>

      <Section
        id="plans"
        title="Simple, honest pricing"
        intro="Every plan renews at the price listed here, on every billing cycle. No increase later."
      >
        <PricingSection plans={sharedPlans} />

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          {sharedTrustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <Check size={16} aria-hidden="true" className="text-brand-600" />
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl text-xs text-ink-faint">{freeDomainTerms}</p>
        <p className="mt-2 text-xs text-ink-faint">
          Exclusions apply to the money-back guarantee. Read the{" "}
          <Link href="/legal/refund-policy" className="underline hover:text-brand-700">
            refund policy
          </Link>
          . Uptime is a 99.9% target, not a contractual SLA. Prices exclude applicable taxes.
        </p>
      </Section>

      <Section
        title="Every plan gets all of this."
        intro="The baseline, not the upsell. Nothing here is gated behind a higher tier."
        tinted
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sharedIncludedOnAll.map((item) => (
            <li key={item} className="flex items-center gap-2 text-ink">
              <Check size={18} aria-hidden="true" className="shrink-0 text-brand-600" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="compare"
        title="Every spec, in the open."
        intro="The full resource and feature matrix."
      >
        <SpecTable plans={sharedPlans} groups={sharedSpecs} />
      </Section>

      <Section title="Frequently asked questions" tinted>
        <Accordion items={sharedFaqs} />
      </Section>

      <Section title="Looking at something else?">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <li key={product.href}>
              <Link
                href={product.href}
                className="block rounded-(--radius-card) border border-line p-5 font-semibold text-ink hover:border-brand-600 hover:text-brand-700"
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="rounded-(--radius-card) bg-brand-900 p-8 text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Pick a plan. We&apos;ll handle the move.</h2>
          <p className="mt-2 max-w-xl text-white/80">
            Every shared plan includes free migration, free SSL and daily backups, and renews at
            the listed price.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#plans" className="bg-white !text-brand-800 hover:!bg-brand-50">
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