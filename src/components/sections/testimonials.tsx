"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionWrapper } from "@/components/layout/section-wrapper";

const avatarGradients = [
  "bg-gradient-to-br from-royal-blue to-cyan",
  "bg-gradient-to-br from-cyan to-royal-blue",
  "bg-gradient-to-br from-navy to-royal-blue",
];

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" background="white">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
            What Clients Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mt-4">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </div>
      </ScrollReveal>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
        {TESTIMONIALS.map((testimonial, index) => (
          <ScrollReveal key={testimonial.name} delay={index * 0.1}>
            <div className="bg-white border border-slate-100 rounded-lg p-8 transition-all duration-300 hover:shadow-lg shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]">
              {/* Star Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-sm leading-relaxed mt-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-white ${avatarGradients[index % avatarGradients.length]}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
