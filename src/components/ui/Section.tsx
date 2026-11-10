import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  intro?: string;
  // anchor link ke liye, jaise /hosting#compare
  id?: string;
  // true = halka grey background
  tinted?: boolean;
  children: ReactNode;
}

export function Section({ title, intro, id, tinted, children }: SectionProps) {
  return (
    <section id={id} className={`py-14 ${tinted ? "bg-surface-alt" : ""}`}>
      <div className="container-page">
        {title && (
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
            {intro && <p className="mt-2 text-ink-soft">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}