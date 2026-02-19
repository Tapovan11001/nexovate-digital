import { SERVICES } from "@/lib/constants";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { IconBox } from "@/components/ui/icon-box";

export function Services() {
  return (
    <SectionWrapper id="services" background="white">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            What We Do
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mt-4">
            We craft digital experiences that elevate brands and drive
            measurable business growth.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
        {SERVICES.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.08}>
            <div
              className="bg-white border border-slate-100 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <IconBox icon={service.icon} />
              <h3 className="font-heading font-bold text-lg mt-5 text-navy">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
