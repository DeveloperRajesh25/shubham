import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  color = "accent",
}: {
  children: React.ReactNode;
  className?: string;
  color?: "accent" | "success" | "highlight";
}) {
  const palette: Record<string, { bg: string; fg: string }> = {
    accent: { bg: "var(--accent-soft)", fg: "var(--accent)" },
    success: { bg: "var(--success-soft)", fg: "var(--success)" },
    highlight: { bg: "var(--highlight-soft)", fg: "#854D0E" },
  };
  const c = palette[color];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
        className,
      )}
      style={{ background: c.bg, color: c.fg }}
    >
      {children}
    </span>
  );
}
