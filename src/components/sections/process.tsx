"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Phone, PenTool, Code2, Rocket, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Phone,
  PenTool,
  Code2,
  Rocket,
};

export function Process() {
  return (
    <SectionWrapper id="process" background="light">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            How We Deliver Results
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mt-4">
            A proven four-step process designed to take your vision from concept
            to a high-performing digital reality.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-0 mt-12 md:mt-16">
        {PROCESS_STEPS.map((step, index) => {
          const Icon = iconMap[step.icon];
          const isLast = index === PROCESS_STEPS.length - 1;

          return (
            <ScrollReveal key={step.number} delay={index * 0.15}>
              <div className="relative text-center">
                {/* Connecting line (desktop only, not on the last step) */}
                {!isLast && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-slate-200" />
                )}

                {/* Numbered circle */}
                <div className="w-14 h-14 rounded-full border-2 border-cyan flex items-center justify-center mx-auto">
                  <span className="font-heading font-bold text-cyan text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                {Icon && (
                  <div className="mt-4 flex justify-center">
                    <Icon size={28} className="text-navy" />
                  </div>
                )}

                {/* Title */}
                <h3 className="font-heading font-bold text-base mt-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm mt-2 max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
