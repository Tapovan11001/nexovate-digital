import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "navy" | "outline";
  className?: string;
}

export function Badge({ children, variant = "cyan", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider",
        {
          "bg-cyan text-navy-deep": variant === "cyan",
          "bg-navy text-white": variant === "navy",
          "border border-silver text-silver": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
