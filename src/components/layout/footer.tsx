import { Instagram, MessageCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const services = [
  { label: "Website Development", href: "#services" },
  { label: "Landing Page Design", href: "#services" },
  { label: "E-commerce Websites", href: "#services" },
  { label: "Website Redesign", href: "#services" },
  { label: "SEO Optimization", href: "#services" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div>
            <a href="#" className="font-heading text-xl font-bold text-white">
              Nexovate<span className="text-cyan">Digital</span>
            </a>
            <p className="mt-4 text-sm text-slate-400">
              Premium web design and development agency. We create stunning,
              high-converting websites for ambitious businesses.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan"
                >
                  <Instagram className="h-4 w-4" />
                  {SITE_CONFIG.instagram}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan"
                >
                  <MessageCircle className="h-4 w-4" />
                  {SITE_CONFIG.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            &copy; 2026 Nexovate Digital. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
}
