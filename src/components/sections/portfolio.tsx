"use client";

import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { DeviceMockup } from "@/components/ui/device-mockup";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionWrapper } from "@/components/layout/section-wrapper";

const screenshotGradients: Record<string, { gradient: string; label: string }> =
  {
    "savory-bistro": {
      gradient: "from-amber-900/80 to-amber-700/60",
      label: "Savory Bistro",
    },
    "jetrocket-saas": {
      gradient: "from-indigo-900/80 to-purple-700/60",
      label: "JetRocket",
    },
    "urbankicks-store": {
      gradient: "from-gray-900/80 to-orange-800/60",
      label: "UrbanKicks",
    },
  };

export function Portfolio() {
  return (
    <SectionWrapper id="portfolio" background="dark">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Selected Work
          </h2>
          <div className="w-16 h-1 bg-cyan mx-auto mt-4 rounded-full" />
          <p className="text-silver text-lg max-w-xl mx-auto mt-4">
            Real projects we&apos;ve built. Browse our showcase and see the
            quality for yourself.
          </p>
        </div>
      </ScrollReveal>

      {/* Portfolio Items */}
      <div className="space-y-20 md:space-y-28 mt-16">
        {PORTFOLIO_ITEMS.map((item, index) => {
          const screenshot = screenshotGradients[item.id];
          const isEven = index % 2 === 0;

          return (
            <ScrollReveal key={item.id}>
              <div
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left side — Device Mockup */}
                <div className="lg:w-1/2">
                  <DeviceMockup type="laptop">
                    <div
                      className={`aspect-video bg-gradient-to-br ${screenshot.gradient} rounded-sm flex items-center justify-center`}
                    >
                      <span className="font-heading text-white text-2xl">
                        {screenshot.label}
                      </span>
                    </div>
                  </DeviceMockup>
                </div>

                {/* Right side — Details */}
                <div className="lg:w-1/2">
                  <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>

                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mt-2">
                    {item.title}
                  </h3>

                  <p className="text-silver text-base leading-relaxed mt-4">
                    {item.description}
                  </p>

                  {/* Stats Row */}
                  <div className="flex gap-8 mt-6">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          prefix={stat.prefix}
                          className="font-heading font-extrabold text-2xl text-white"
                        />
                        <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap mt-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-slate-600 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="primary"
                    size="default"
                    href={item.showcaseUrl}
                    className="mt-6"
                  >
                    View Live Project
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
