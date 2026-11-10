"use client";

import { useState } from "react";
import { PlanCard } from "./PlanCard";
import type { BillingCycle, HostingPlan } from "@/types/hosting";

const cycleLabels: Record<BillingCycle, string> = {
  monthly: "Monthly",
  sixMonths: "6 Months",
  yearly: "Yearly",
};

const allCycles: BillingCycle[] = ["monthly", "sixMonths", "yearly"];

export function PricingSection({ plans }: { plans: HostingPlan[] }) {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  // Sirf wahi cycles jinka price har plan ke liye pata hai
  const availableCycles = allCycles.filter((c) => plans.every((p) => p.prices[c] !== null));

  return (
    <div>
      {availableCycles.length > 1 && (
        <div role="group" aria-label="Billing cycle" className="mb-8 inline-flex rounded-full border border-line bg-white p-1">
          {availableCycles.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cycle === c}
              onClick={() => setCycle(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                cycle === c ? "bg-brand-600 text-white" : "text-ink-soft hover:text-brand-700"
              }`}
            >
              {cycleLabels[c]}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} cycle={cycle} />
        ))}
      </div>
    </div>
  );
}