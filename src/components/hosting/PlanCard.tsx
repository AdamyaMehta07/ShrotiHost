import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { BillingCycle, HostingPlan, PlanHighlights } from "@/types/hosting";

// Card ke upar ke 6 numbers ke labels
const highlightLabels: [keyof PlanHighlights, string][] = [
  ["cpu", "CPU"],
  ["ram", "RAM"],
  ["storage", "Storage"],
  ["websites", "Websites"],
  ["email", "Email"],
  ["bandwidth", "Bandwidth"],
];

// TODO: 6 months aur yearly ki wording live site se match karni hai
const cycleNote: Record<BillingCycle, string> = {
  monthly: "Billed monthly · excl. taxes",
  sixMonths: "Billed every 6 months · excl. taxes",
  yearly: "Billed yearly · excl. taxes",
};

export function PlanCard({ plan, cycle }: { plan: HostingPlan; cycle: BillingCycle }) {
  const price = plan.prices[cycle];

  return (
    <article
      className={`flex flex-col rounded-(--radius-card) border bg-white p-6 ${
        plan.popular ? "border-brand-600 shadow-lg" : "border-line"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
        {plan.popular && <Badge>Most popular</Badge>}
      </div>
      <p className="mt-1 text-sm text-ink-soft">{plan.tagline}</p>

      <p className="mt-5 text-4xl font-bold text-ink">
        {price !== null ? `₹${price}` : "—"}
        <span className="text-base font-medium text-ink-faint">/mo</span>
      </p>
      <p className="text-xs text-ink-faint">{cycleNote[cycle]}</p>

      {plan.freeDomainNote && (
        <p className="mt-3 rounded-md bg-brand-50 px-3 py-2 text-sm font-medium text-brand-800">
          {plan.freeDomainNote}
        </p>
      )}

      {/* Upar ke 6 numbers */}
      <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-line py-4 text-sm">
        {highlightLabels.map(([key, label]) => (
          <div key={key}>
            <dt className="text-ink-faint">{label}</dt>
            <dd className="font-semibold text-ink">{plan.highlights[key]}</dd>
          </div>
        ))}
      </dl>

      {plan.includesFrom && (
        <p className="mt-4 text-sm font-semibold text-ink">
          Everything in {plan.includesFrom}, plus:
        </p>
      )}
      <ul className="mt-3 flex-1 space-y-2 text-sm text-ink-soft">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-600" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={plan.purchaseUrl}
        variant={plan.popular ? "primary" : "secondary"}
        className="mt-6"
      >
        Choose {plan.name}
      </Button>
    </article>
  );
}