import type { InfraLayer } from "@/types/home";

// Request ka raasta, upar se neeche, numbered steps mein
export function InfrastructureFlow({ layers }: { layers: InfraLayer[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {layers.map((layer, index) => (
        <li key={layer.title} className="rounded-(--radius-card) border border-line bg-white p-5">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800"
          >
            {index + 1}
          </span>
          <h3 className="mt-3 font-semibold text-ink">{layer.title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{layer.text}</p>
        </li>
      ))}
    </ol>
  );
}