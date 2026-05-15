import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";
type Size = "md" | "lg" | "xl";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap cursor-pointer shadow-md";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] active:scale-[0.98] focus-visible:ring-[var(--accent)] shadow-orange-500/30",
  secondary:
    "bg-white border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-soft)] focus-visible:ring-[var(--accent)]",
  whatsapp:
    "bg-[var(--whatsapp)] text-white hover:brightness-105 active:scale-[0.98] focus-visible:ring-[var(--whatsapp)] shadow-green-500/30",
  ghost:
    "bg-transparent text-foreground hover:bg-foreground/5 shadow-none",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
  xl: "px-8 py-4 text-lg",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    CommonProps {}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonProps {}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
