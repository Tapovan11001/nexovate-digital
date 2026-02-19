"use client";

import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  variant?: "hero" | "subtle";
}

export function GradientBlob({ className, variant = "hero" }: GradientBlobProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute rounded-full blur-[120px]",
          variant === "hero"
            ? "top-1/4 left-1/3 h-96 w-96 bg-royal-blue/15"
            : "top-1/4 left-1/3 h-72 w-72 bg-royal-blue/10"
        )}
        style={{ animation: "drift-1 10s ease-in-out infinite" }}
      />
      <div
        className={cn(
          "absolute rounded-full blur-[100px]",
          variant === "hero"
            ? "right-1/4 bottom-1/3 h-80 w-80 bg-cyan/10"
            : "right-1/4 bottom-1/3 h-64 w-64 bg-cyan/8"
        )}
        style={{ animation: "drift-2 12s ease-in-out infinite" }}
      />
      {variant === "hero" && (
        <div
          className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-blue/8 blur-[140px]"
          style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
        />
      )}
    </div>
  );
}
