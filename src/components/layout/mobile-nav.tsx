"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { WHATSAPP_LINK } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-lg"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex h-full flex-col px-6 py-6">
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center text-white"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="mt-16 flex flex-1 flex-col items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="font-heading text-2xl font-bold text-white transition-colors hover:text-cyan"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="pb-8">
              <Button
                variant="primary"
                size="lg"
                href={WHATSAPP_LINK}
                className="w-full"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
