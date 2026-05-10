"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/config";

export function FinalCTA() {
  return (
    <section
      className="px-6 py-24 md:py-32"
      style={{ background: "var(--accent-soft)" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl"
        >
          Less screens. More serifs.{" "}
          <span className="italic">More sense of accomplishment.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed"
        >
          Join 32,000+ parents who replaced one daily tantrum with one daily
          worksheet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center"
        >
          <ButtonLink href={CHECKOUT_URL} size="lg" className="group">
            Get the bundle — ₹499
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
          <p className="mt-5 text-xs text-foreground/60">
            30-day refund · Lifetime access · Instant download
          </p>
        </motion.div>
      </div>
    </section>
  );
}
