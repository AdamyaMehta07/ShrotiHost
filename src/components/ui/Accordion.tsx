import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/hosting";

export function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line rounded-(--radius-card) border border-line bg-white">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-ink hover:bg-brand-50 [&::-webkit-details-marker]:hidden">
            {item.question}
            {/* Khulne pe arrow ulta ho jata hai */}
            <ChevronDown
              size={20}
              aria-hidden="true"
              className="shrink-0 text-ink-faint transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="px-5 pb-5 text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}