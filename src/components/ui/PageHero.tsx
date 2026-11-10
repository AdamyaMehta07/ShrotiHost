import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string; // title ke upar chhota label
  breadcrumbs?: Crumb[];
  children?: ReactNode; // buttons yahan aayenge
}

export function PageHero({ title, description, eyebrow, breadcrumbs, children }: PageHeroProps) {
  return (
    <div className="border-b border-line bg-gradient-to-b from-brand-50 to-white">
      <div className="container-page py-12 sm:py-16">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-700">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-bold text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">{description}</p>
        {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}