"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy">
      <GradientBlob variant="hero" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Headline */}
        <motion.h1
          className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeSmooth, delay: 0 }}
        >
          We Build Websites That{" "}
          <span className="text-cyan">Convert</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-silver md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeSmooth, delay: 0.15 }}
        >
          Premium web design &amp; development for ambitious businesses. We turn
          visitors into customers with stunning, high-performance websites.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeSmooth, delay: 0.3 }}
        >
          <Button variant="primary" size="lg" href={WHATSAPP_LINK}>
            Book Free Strategy Call
          </Button>
          <Button variant="secondary" size="lg" href="#portfolio">
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
