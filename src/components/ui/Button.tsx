import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  // href diya to link banega, nahi diya to button
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

// Teeno styles ke classes ek jagah
const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "border border-brand-600 text-brand-700 hover:bg-brand-50",
  ghost: "text-ink-soft hover:bg-brand-50 hover:text-brand-700",
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-(--radius-control) px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

  if (href) {
    // http se shuru hone wala link bahar ki site ka hai, naye tab mein kholenge
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
   <button type={type} disabled={disabled} onClick={onClick} className={classes}>Submit
    </button>
  );
}