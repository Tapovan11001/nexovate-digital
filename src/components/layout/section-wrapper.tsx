import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "light" | "dark" | "darkest";
}

const bgStyles: Record<string, string> = {
  white: "bg-white",
  light: "bg-slate-50",
  dark: "bg-navy",
  darkest: "bg-navy-deep",
};

const textStyles: Record<string, string> = {
  white: "text-navy",
  light: "text-navy",
  dark: "text-white",
  darkest: "text-white",
};

export function SectionWrapper({
  children,
  id,
  className,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        bgStyles[background],
        textStyles[background],
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
