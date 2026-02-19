import { PRICING_TIERS } from "@/lib/constants";
import { WHATSAPP_LINK } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <SectionWrapper id="pricing" background="light">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mt-4">
            Choose the plan that fits your business goals. Every package
            delivers exceptional value and results.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 items-stretch">
        {PRICING_TIERS.map((tier, index) => (
          <ScrollReveal key={tier.name} delay={index * 0.1}>
            <div
              className={
                tier.highlighted
                  ? "rounded-lg p-8 flex flex-col h-full transition-all duration-300 bg-navy text-white border-2 border-cyan relative md:scale-105 shadow-xl"
                  : "rounded-lg p-8 flex flex-col h-full transition-all duration-300 bg-white border border-slate-200 hover:shadow-lg hover:-translate-y-1"
              }
            >
              {/* Most Popular badge */}
              {tier.highlighted && (
                <Badge
                  variant="cyan"
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  Most Popular
                </Badge>
              )}

              {/* Plan name */}
              <h3
                className={
                  tier.highlighted
                    ? "font-heading font-bold text-lg text-white"
                    : "font-heading font-bold text-lg text-navy"
                }
              >
                {tier.name}
              </h3>

              {/* Price */}
              <p
                className={
                  tier.highlighted
                    ? "font-heading font-extrabold text-4xl mt-2 text-white"
                    : "font-heading font-extrabold text-4xl mt-2 text-navy"
                }
              >
                {tier.price}
              </p>

              {/* Description */}
              <p
                className={
                  tier.highlighted
                    ? "text-sm mt-2 text-slate-300"
                    : "text-sm mt-2 text-slate-500"
                }
              >
                {tier.description}
              </p>

              {/* Divider */}
              <div
                className={
                  tier.highlighted
                    ? "h-px bg-slate-700 my-6"
                    : "h-px bg-slate-200 my-6"
                }
              />

              {/* Features list */}
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-cyan flex-shrink-0 mt-0.5"
                    />
                    <span
                      className={
                        tier.highlighted
                          ? "text-sm text-slate-300"
                          : "text-sm text-slate-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <div className="mt-auto pt-8">
                <Button
                  variant={tier.highlighted ? "primary" : "ghost"}
                  className="w-full"
                  href={WHATSAPP_LINK}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
