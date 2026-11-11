import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/components/hosting/PricingSection";
import { SpecTable } from "@/components/hosting/SpecTable";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { freeDomainTerms, sharedTrustPoints } from "@/data/shared-hosting";
import {
  wordpressFaqs,
  wordpressHighlights,
  wordpressPlans,
  wordpressSpecs,
} from "@/data/wordpress-hosting";

export const metadata: Metadata = {
  title: "WordPress Hosting",
  description:
    "WordPress hosting from ₹69/mo with WordPress Manager, LiteSpeed Cache, AccelerateWP, free SSL and free migration.",
};

// Neeche "related products" ke cards
const relatedProducts = [
  { name: "Shared Hosting", href: "/hosting" },
  { name: "Unlimited Hosting", href: "/unlimited-hosting" },
  { name: "Reseller Hosting", href: "/reseller-hosting" },
  { name: "VPS Hosting", href: "/vps" },
];

export default function WordPressHostingPage() {
  return (
    <>
      <PageHero
        eyebrow="WordPress Hosting"
        title="WordPress, tuned to run fast."
        description="One-click install, LiteSpeed Cache, and AccelerateWP, built specifically for WordPress, not bolted onto generic hosting."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hosting", href: "/hosting" },
          { label: "WordPress Hosting" },
        ]}
      >
        <Button href="#plans">See WordPress plans</Button>
        {/* TODO: live site pe is button ka asli link check karna hai */}
        <Button href="/contact" variant="secondary">
          Migrate my site free
        </Button>
      </PageHero>

      <Section
        id="plans"
        title="Simple, honest pricing"
        intro="Every plan renews at the price listed here, on every billing cycle. No increase later."
      >
        <PricingSection plans={wordpressPlans} />

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
        title="Built for fast WordPress performance"
        intro="Not just hosting for WordPress. Hosting built around WordPress."
        tinted
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {wordpressHighlights.map((item) => (
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
          plans={wordpressPlans}
          groups={wordpressSpecs}
          caption="WordPress hosting plan comparison"
        />
      </Section>

      <Section title="Frequently asked questions" tinted>
        <Accordion items={wordpressFaqs} />
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
          <h2 className="text-2xl font-bold sm:text-3xl">Move your WordPress site this week.</h2>
          <p className="mt-2 max-w-xl text-white/80">
            Free migration on every plan. We move the files, database and email, then tune
            LiteSpeed Cache before handing it back.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#plans" className="bg-white !text-brand-800 hover:!bg-brand-50">
              See WordPress plans
            </Button>
            <Button href="/hosting" variant="ghost" className="!text-white hover:!bg-white/10">
              Compare shared hosting
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