import type { ReactNode } from "react";

type Tone = "brand" | "neutral" | "success" | "warning";

const tones: Record<Tone, string> = {
  brand: "bg-brand-100 text-brand-800",
  neutral: "bg-surface-alt text-ink-soft",
  success: "bg-green-100 text-success",
  warning: "bg-amber-100 text-warning",
};

export function Badge({ children, tone = "brand" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}