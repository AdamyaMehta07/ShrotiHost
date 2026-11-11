import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/components/hosting/PricingSection";
import { SpecTable } from "@/components/hosting/SpecTable";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { sharedTrustPoints } from "@/data/shared-hosting";
import {
  unlimitedFaqs,
  unlimitedPlans,
  unlimitedSpecs,
  whatsUnlimited,
} from "@/data/unlimited-hosting";

export const metadata: Metadata = {
  title: "Unlimited Hosting",
  description:
    "Unlimited hosting from ₹199/mo with unmetered NVMe storage and bandwidth under our Acceptable Use Policy, and clearly published CloudLinux CPU and RAM allocations.",
};

// CloudLinux wali alag table ke liye, spec table ki hi rows chhaanke
const allocationLabels = ["Websites", "CPU", "RAM", "I/O Speed", "IOPS", "Entry Processes", "Processes (NPROC)"];
const allocationGroups = [
  {
    title: "CloudLinux resource allocation",
    rows: unlimitedSpecs[0].rows.filter((row) => allocationLabels.includes(row.label)),
  },
];

const relatedProducts = [
  { name: "Shared Hosting", href: "/hosting" },
  { name: "WordPress Hosting", href: "/wordpress-hosting" },
  { name: "Reseller Hosting", href: "/reseller-hosting" },
  { name: "VPS Hosting", href: "/vps" },
];

export default function UnlimitedHostingPage() {
  return (
    <>
      <PageHero
        eyebrow="Unlimited Hosting"
        title="Unlimited hosting. More freedom."
        description="Unmetered NVMe storage and bandwidth, unlimited mailboxes and databases, and our largest CloudLinux allocations. Plans are sized by website count."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hosting", href: "/hosting" },
          { label: "Unlimited Hosting" },
        ]}
      >
        <Button href="#plans">See Unlimited plans</Button>
        <Button href="#compare" variant="secondary">
          Compare every spec
        </Button>
      </PageHero>

      <Section
        id="plans"
        title="Simple, honest pricing"
        intro="Every plan renews at the price listed here, on every billing cycle. No increase later."
      >
        <PricingSection plans={unlimitedPlans} />

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          {sharedTrustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <Check size={16} aria-hidden="true" className="text-brand-600" />
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ink-faint">
          Six-month and annual terms are not open on this line yet. Exclusions apply to the
          money-back guarantee. Read the{" "}
          <Link href="/legal/refund-policy" className="underline hover:text-brand-700">
            refund policy
          </Link>
          . Uptime is a 99.9% target, not a contractual SLA. Prices exclude applicable taxes.
        </p>
      </Section>

      <Section title="What's unlimited" intro={whatsUnlimited.intro} tinted>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-(--radius-card) border border-line bg-white p-6">
            <h3 className="font-semibold text-ink">No account-level cap</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {whatsUnlimited.noCap.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-(--radius-card) border border-line bg-white p-6">
            <h3 className="font-semibold text-ink">Allocated, and printed on the plan</h3>
            <dl className="mt-3 space-y-3 text-sm">
              {whatsUnlimited.allocated.map((item) => (
                <div key={item.label}>
                  <dt className="text-ink-faint">{item.label}</dt>
                  <dd className="font-semibold text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-(--radius-card) border border-line bg-white p-6">
            <h3 className="font-semibold text-ink">Only on the Unlimited line</h3>
            <dl className="mt-3 space-y-3 text-sm">
              {whatsUnlimited.onlyOnLine.map((item) => (
                <div key={item.label}>
                  <dt className="font-semibold text-ink">{item.label}</dt>
                  <dd className="text-ink-soft">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm text-ink-soft">{whatsUnlimited.aupNote}</p>
      </Section>

      <Section
        title="The actual allocation, per tier"
        intro="These are the CloudLinux limits applied to your account. They are ceilings, not reservations. A site rarely touches them, but when it does, this is where it stops. We publish them because “unlimited” means nothing without them."
      >
        <SpecTable
          plans={unlimitedPlans}
          groups={allocationGroups}
          caption="CloudLinux resource allocation for each Unlimited Hosting tier"
        />
        <p className="mt-4 max-w-3xl text-sm text-ink-soft">{whatsUnlimited.allocationNote}</p>
      </Section>

      <Section
        id="compare"
        title="Every spec, in the open."
        intro="The full resource and feature matrix."
        tinted
      >
        <SpecTable
          plans={unlimitedPlans}
          groups={unlimitedSpecs}
          caption="Unlimited hosting plan comparison"
        />
      </Section>

      <Section title="Frequently asked questions">
        <Accordion items={unlimitedFaqs} />
      </Section>

      <Section title="Looking at something else?" tinted>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <li key={product.href}>
              <Link
                href={product.href}
                className="block rounded-(--radius-card) border border-line bg-white p-5 font-semibold text-ink hover:border-brand-600 hover:text-brand-700"
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="rounded-(--radius-card) bg-brand-900 p-8 text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Room for every site you run.</h2>
          <p className="mt-2 max-w-xl text-white/80">
            Unmetered storage and bandwidth, the largest CloudLinux allocations we give, and free
            migration from your current host.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#plans" className="bg-white !text-brand-800 hover:!bg-brand-50">
              See Unlimited plans
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