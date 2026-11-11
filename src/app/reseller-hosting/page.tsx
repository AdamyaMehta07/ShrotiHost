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
  masterResellerTeaser,
  resellerAupNote,
  resellerFaqs,
  resellerHighlights,
  resellerPlans,
  resellerSpecs,
  resellerTrustPoints,
} from "@/data/reseller-hosting";

export const metadata: Metadata = {
  title: "Reseller Hosting",
  description:
    "Reseller hosting from ₹299/mo with full WHM access, white-label branding, and free WHMCS billing on annual plans.",
};

const relatedProducts = [
  { name: "Master Reseller Hosting", href: "/master-reseller-hosting" },
  { name: "Shared Hosting", href: "/hosting" },
  { name: "WordPress Hosting", href: "/wordpress-hosting" },
  { name: "VPS Hosting", href: "/vps" },
];

export default function ResellerHostingPage() {
  return (
    <>
      <PageHero
        eyebrow="Reseller Hosting"
        title="Start your own hosting business."
        description="Full WHM access, white-label branding, and free WHMCS billing on annual plans. Sell hosting under your own name."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hosting", href: "/hosting" },
          { label: "Reseller Hosting" },
        ]}
      >
        <Button href="#plans">See reseller plans</Button>
      </PageHero>

      <Section
        id="plans"
        title="Simple, honest pricing"
        intro="Every plan renews at the price listed here, on every billing cycle. No increase later."
      >
        <PricingSection plans={resellerPlans} />

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          {resellerTrustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <Check size={16} aria-hidden="true" className="text-brand-600" />
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ink-faint">
          {resellerAupNote} Exclusions apply to the money-back guarantee. Read the{" "}
          <Link href="/legal/refund-policy" className="underline hover:text-brand-700">
            refund policy
          </Link>
          . Uptime is a 99.9% target, not a contractual SLA. Prices exclude applicable taxes.
        </p>

        <p className="mt-6 rounded-(--radius-card) bg-brand-50 p-4 text-sm text-brand-900">
          {masterResellerTeaser}{" "}
          <Link href="/master-reseller-hosting" className="font-semibold underline">
            See Master Reseller Hosting
          </Link>
        </p>
      </Section>

      <Section title="Everything a reseller needs" tinted>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resellerHighlights.map((item) => (
            <li key={item.title} className="rounded-(--radius-card) border border-line bg-white p-6">
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="compare"
        title="Every spec, in the open."
        intro="The full resource and feature matrix."
      >
        <SpecTable
          plans={resellerPlans}
          groups={resellerSpecs}
          caption="Reseller hosting plan comparison"
        />
      </Section>

      <Section title="Frequently asked questions" tinted>
        <Accordion items={resellerFaqs} />
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
          <h2 className="text-2xl font-bold sm:text-3xl">Start your hosting business.</h2>
          <p className="mt-2 max-w-xl text-white/80">
            WHM, white-label branding and free WHMCS billing on annual reseller plans. You set the
            packages and the prices.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#plans" className="bg-white !text-brand-800 hover:!bg-brand-50">
              See reseller plans
            </Button>
            <Button href="/master-reseller-hosting" variant="ghost" className="!text-white hover:!bg-white/10">
              Master Reseller hosting
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