import { Badge } from "@/components/ui/Badge";
import type { DomainExtension } from "@/types/domains";

const rupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export function DomainPriceGrid({ items }: { items: DomainExtension[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((domain) => (
        <li key={domain.ext} className="rounded-(--radius-card) border border-line bg-white p-5">
          <p className="text-2xl font-bold text-ink">{domain.ext}</p>
          <p className="mt-2 text-lg font-semibold text-brand-700">
            {rupees(domain.firstYear)}
            <span className="text-sm font-medium text-ink-faint">/yr first year</span>
          </p>
          <p className="text-sm text-ink-soft">Renews {rupees(domain.renewal)}/yr</p>
          {domain.note && (
            <p className="mt-2">
              <Badge tone="warning">Renewal is {domain.note}</Badge>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}