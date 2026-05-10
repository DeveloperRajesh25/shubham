"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Step {
  num: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Order in 60s",
    description: "Apple Pay, UPI, card. No account needed.",
  },
  {
    num: "02",
    title: "Instant access",
    description: "Download link emailed + on-screen.",
  },
  {
    num: "03",
    title: "Print what you need",
    description: "Full bundle, or one category at a time.",
  },
  {
    num: "04",
    title: "Hand it to your kid",
    description: "And reclaim your evening.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-3xl">
        <Eyebrow>How it works</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          From order to first worksheet in 90 seconds.
        </motion.h2>
      </div>

      <div className="relative mt-16">
        {/* Horizontal connector line — desktop only */}
        <div
          className="absolute left-0 right-0 top-[26px] hidden h-px bg-border md:block"
          aria-hidden
        />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                <div
                  className="font-display text-3xl leading-none text-foreground md:text-4xl bg-background pr-3 md:pr-0 relative z-10"
                  style={{ width: "fit-content" }}
                >
                  {s.num}
                </div>
                <div className="md:mt-6 flex-1">
                  <h3 className="text-xl font-medium text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
