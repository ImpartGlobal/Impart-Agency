import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "orange" | "subtle" | "outline" | "copper" | "prism";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-brand-elevated text-brand-muted border border-brand-border",
  orange: "bg-brand-orange/10 text-brand-orange border border-brand-orange/20",
  subtle: "bg-white/5 text-brand-muted border border-white/10",
  outline: "bg-transparent text-brand-orange border border-brand-orange",
  copper: "bg-brand-copper-muted text-brand-copper-light border border-brand-copper/30",
  prism: "bg-brand-prism-muted text-brand-prism-light border border-brand-prism/30",
};

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
