import { Check, Minus } from "lucide-react";
import type { HostingPlan, SpecGroup, SpecValue } from "@/types/hosting";

// Haan/naa ko icon dikhao, text ko text. Screen reader ke liye text bhi rakha hai
function Cell({ value }: { value: SpecValue }) {
  if (value === true) {
    return (
      <>
        <Check size={18} aria-hidden="true" className="mx-auto text-success" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Minus size={18} aria-hidden="true" className="mx-auto text-ink-faint" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <>{value}</>;
}

export function SpecTable({ plans, groups }: { plans: HostingPlan[]; groups: SpecGroup[] }) {
  return (
    <div className="overflow-x-auto rounded-(--radius-card) border border-line bg-white">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <caption className="sr-only">Shared hosting plan comparison</caption>
        <thead>
          <tr className="bg-surface-alt">
            <th scope="col" className="sticky left-0 bg-surface-alt px-4 py-3 text-left font-semibold">
              Specification
            </th>
            {plans.map((plan) => (
              <th key={plan.id} scope="col" className="px-4 py-3 text-center font-semibold">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        {groups.map((group) => (
          <tbody key={group.title}>
            <tr>
              <th
                colSpan={plans.length + 1}
                scope="colgroup"
                className="bg-brand-50 px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-brand-800"
              >
                {group.title}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label} className="border-t border-line">
                <th
                  scope="row"
                  className="sticky left-0 bg-white px-4 py-2.5 text-left font-medium text-ink"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={plans[i].id} className="px-4 py-2.5 text-center text-ink-soft">
                    <Cell value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}