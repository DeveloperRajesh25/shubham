"use client";

import { motion } from "motion/react";
import { Users, Star, Download, Infinity as InfinityIcon } from "lucide-react";

const stats = [
  { icon: Users, value: "32,000+", label: "Happy parents" },
  { icon: Star, value: "4.9 / 5", label: "Average rating" },
  { icon: Download, value: "14,000+", label: "Worksheets included" },
  { icon: InfinityIcon, value: "Lifetime", label: "Unlimited downloads" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust indicators"
      className="border-y-2 border-accent-soft bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-lg font-extrabold text-foreground leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-foreground/60">
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
