import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  children: React.ReactNode;
  className?: string;
  type?: "laptop" | "phone";
}

export function DeviceMockup({
  children,
  className,
  type = "laptop",
}: DeviceMockupProps) {
  if (type === "phone") {
    return (
      <div className={cn("mx-auto max-w-[280px]", className)}>
        <div className="rounded-[2rem] border-4 border-slate-700 bg-slate-800 p-2">
          <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-slate-600" />
          <div className="overflow-hidden rounded-[1.5rem]">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("mx-auto max-w-[640px]", className)}>
      {/* Screen bezel */}
      <div className="rounded-t-xl bg-slate-800 p-2 pb-0">
        {/* Traffic lights */}
        <div className="mb-2 flex gap-1.5 px-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        </div>
        {/* Content */}
        <div className="overflow-hidden rounded-t-sm">{children}</div>
      </div>
      {/* Base */}
      <div className="h-3 rounded-b-xl bg-slate-700" />
      <div className="mx-16 h-1.5 rounded-b-lg bg-slate-600" />
    </div>
  );
}
