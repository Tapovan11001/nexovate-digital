import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface IconBoxProps {
  icon: string;
  className?: string;
  iconClassName?: string;
  size?: number;
}

export function IconBox({
  icon,
  className,
  iconClassName,
  size = 24,
}: IconBoxProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[icon];

  if (!Icon) return null;

  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-md bg-royal-blue/10",
        className
      )}
    >
      <Icon size={size} className={cn("text-royal-blue", iconClassName)} />
    </div>
  );
}
