import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/components/hosting/PricingSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { DomainPriceGrid } from "@/components/home/DomainPriceGrid";
import { InfrastructureFlow } from "@/components/home/InfrastructureFlow";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { featuredDomains, domainTransferUrl } from "@/data/domains";
import {
  comparisonNote,
  comparisonRows,
  heroFacts,
  homeFaqs,
  infraLayers,
  journeySteps,
  products,
  servingSince,
  trustpilot,
} from "@/data/homepage";
import { portalLinks } from "@/data/navigation";
import { freeDomainTerms, sharedPlans } from "@/data/shared-hosting";

export const metadata: Metadata = {
  title: { absolute: "Shroti Host: Web Hosting & Domains in India" },
  description:
    "Shroti Host is an Indian web hosting and development company: NVMe hosting from ₹49/mo, same price on renewal.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="border-b border-line bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-16 sm:py-24">
          <h1 className="max-w-3xl text-4xl font-bold text-ink sm:text-6xl">
            Launch a website. <span className="text-brand-600">Same price on renewal.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Shroti Host is an Indian web hosting and development company: NVMe hosting from
            ₹49/mo, same price on renewal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/hosting">See hosting plans</Button>
            <Button href="/web-development#enquire" variant="secondary">
              Start a project
            </Button>
          </div>
        </div>
      </div>

      {/* Trust facts */}
      <div className="border-b border-line bg-white">
        <div className="container-page py-6">
          <p className="text-sm font-semibold text-ink">{servingSince}</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            {heroFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <Check size={16} aria-hidden="true" className="text-brand-600" />
                {fact}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink-soft">
            Rated {trustpilot.rating} from {trustpilot.reviews} reviews on Trustpilot.{" "}
            <a
              href={trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-700 underline"
            >
              Read them on Trustpilot
            </a>
          </p>
        </div>
      </div>

      {/* Host, Build, Scale */}
      <Section
        title="One partner, from first domain to production"
        intro="Buy a domain today, launch a site tomorrow, hire us to build the product, and scale it on the same infrastructure without ever switching vendors."
      >
        <ol className="grid gap-6 lg:grid-cols-3">
          {journeySteps.map((step) => (
            <li
              key={step.label}
              className="flex flex-col rounded-(--radius-card) border border-line bg-white p-6"
            >
              <p className="text-sm font-semibold text-brand-700">
                {step.step}: {step.label}
              </p>
              <h3 className="mt-2 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 flex-1 text-ink-soft">{step.text}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <li key={tag}>
                    <Badge tone="neutral">{tag}</Badge>
                  </li>
                ))}
              </ul>
              <Button href={step.cta.href} variant="secondary" className="mt-6">
                {step.cta.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </li>
          ))}
        </ol>
      </Section>

      {/* Pricing (shared hosting wala hi data) */}
      <Section
        id="plans"
        title="Simple, honest pricing"
        intro="Every plan renews at the price listed here, on every billing cycle. No increase later."
        tinted
      >
        <PricingSection plans={sharedPlans} />
        <p className="mt-6 max-w-3xl text-xs text-ink-faint">{freeDomainTerms}</p>
        <p className="mt-2 text-xs text-ink-faint">
          Prices exclude applicable taxes, calculated at checkout.{" "}
          <Link href="/hosting#compare" className="underline hover:text-brand-700">
            Compare every spec
          </Link>
        </p>
      </Section>

      {/* Infrastructure */}
      <Section
        title="What's actually running under your website."
        intro="No vague marketing terms. Here's the real path a request takes, layer by layer."
      >
        <InfrastructureFlow layers={infraLayers} />
        <p className="mt-4 text-sm text-ink-soft">
          All storage runs on NVMe SSDs with automatic daily backups.
        </p>
      </Section>

      {/* Products */}
      <Section
        title="One platform, everything you need to launch"
        intro="Designed to work together, not bolted on as afterthoughts."
        tinted
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.href} className={product.flagship ? "lg:col-span-2" : ""}>
              <Link
                href={product.href}
                className="block h-full rounded-(--radius-card) border border-line bg-white p-6 hover:border-brand-600"
              >
                {product.flagship && <Badge>Flagship</Badge>}
                <h3 className="mt-2 text-lg font-bold text-ink">{product.name}</h3>
                <p className="mt-1 text-ink-soft">{product.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Domains */}
      <Section
        title="Your name. Your domain."
        intro="First-year and renewal prices, side by side."
      >
        <DomainPriceGrid items={featuredDomains} />
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/domains">Search domains</Button>
          <Button href={portalLinks.domainPricing} variant="secondary">
            View full domain pricing
          </Button>
          <Button href={domainTransferUrl} variant="ghost">
            Transfer your domain
          </Button>
        </div>
      </Section>

      {/* Comparison */}
      <Section
        title="Shroti Host vs. typical shared hosting"
        intro="What you actually get on every plan, compared with what entry-level shared hosting usually includes."
        tinted
      >
        <ComparisonTable rows={comparisonRows} />
        <p className="mt-4 max-w-3xl text-xs text-ink-faint">{comparisonNote}</p>
      </Section>

      {/* FAQ */}
      <Section title="Frequently asked questions">
        <Accordion items={homeFaqs} />
      </Section>

      {/* Last CTA */}
      <Section>
        <div className="rounded-(--radius-card) bg-brand-900 p-8 text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Start with a domain. Stay for the infrastructure.
          </h2>
          <p className="mt-2 max-w-xl text-white/80">
            From your first domain to production infrastructure: hosting, development, and one
            team that carries the whole thing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/hosting" className="bg-white !text-brand-800 hover:!bg-brand-50">
              See hosting plans
            </Button>
            <Button
              href="/web-development#enquire"
              variant="ghost"
              className="!text-white hover:!bg-white/10"
            >
              Start a project
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