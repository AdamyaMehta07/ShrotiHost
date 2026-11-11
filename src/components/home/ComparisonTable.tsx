import { Check } from "lucide-react";
import type { ComparisonRow } from "@/types/home";

export function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-(--radius-card) border border-line bg-white">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <caption className="sr-only">Shroti Host compared with typical shared hosting plans</caption>
        <thead>
          <tr className="bg-surface-alt text-left">
            <th scope="col" className="px-4 py-3 font-semibold">Feature</th>
            <th scope="col" className="px-4 py-3 font-semibold text-brand-700">Shroti Host</th>
            <th scope="col" className="px-4 py-3 font-semibold">Typical shared plans</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-t border-line">
              <th scope="row" className="px-4 py-3 text-left font-medium text-ink">
                {row.feature}
              </th>
              <td className="px-4 py-3 text-ink">
                <span className="flex items-start gap-2">
                  <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-success" />
                  {row.shroti}
                </span>
              </td>
              <td className="px-4 py-3 text-ink-soft">{row.typical}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}