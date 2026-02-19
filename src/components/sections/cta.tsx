"use client";

import { WHATSAPP_LINK } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTA() {
  return (
    <SectionWrapper background="dark">
      <GradientBlob variant="subtle" />

      <ScrollReveal>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready To Scale Your Business?
          </h2>

          <p className="mt-4 text-lg text-silver">
            Book a free strategy call and let&apos;s discuss how we can transform
            your online presence into a revenue-generating machine.
          </p>

          <div className="mt-8">
            <Button variant="primary" size="lg" href={WHATSAPP_LINK}>
              Book Free Strategy Call
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
