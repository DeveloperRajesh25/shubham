"use client";

import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/config";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, #EA580C 0%, #DC2626 100%)",
      }}
    >
      <div className="mx-auto max-w-3xl text-center text-white">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider backdrop-blur">
          🔥 Limited Time Offer
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
        >
          Unlock Your Child&apos;s{" "}
          <span className="text-highlight">Bright Future</span> Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-xl text-base text-white/90 md:text-lg"
        >
          Join 32,000+ parents who replaced screen time with real learning.
          Lifetime access and instant delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="flex items-baseline justify-center gap-3 text-white">
            <span className="text-xl line-through opacity-60">₹999</span>
            <span className="text-5xl font-extrabold md:text-6xl">₹149</span>
            <span className="rounded-full bg-highlight px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-foreground">
              85% OFF
            </span>
          </div>

          <ButtonLink
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            className="group bg-white text-accent-strong hover:bg-white/90"
          >
            GET KIDS WORKSHEETS NOW
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </ButtonLink>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/90">
            <span className="inline-flex items-center gap-1">
              <Zap className="h-3.5 w-3.5" /> Instant delivery
            </span>
            <span className="inline-flex items-center gap-1">
              <Download className="h-3.5 w-3.5" /> Lifetime access
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Secure checkout
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
