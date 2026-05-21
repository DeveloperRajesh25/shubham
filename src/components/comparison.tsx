"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

const wasteful = [
  "A few restaurant meals",
  "One toy that breaks in days",
  "Temporary entertainment",
  "Gone in a day, forgotten tomorrow",
];

const valuable = [
  "14,000+ printable worksheets",
  "Skill-mapped, age-graded content",
  "Lifetime access + free updates",
  "Real learning your child carries forever",
];

export function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow color="accent">Smart spending</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Same ₹149.{" "}
          <span className="text-accent">Massively different return.</span>
        </motion.h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border-2 border-border bg-white p-7"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground/60">
              Regular Spending
            </h3>
            <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground/60">
              ₹149
            </span>
          </div>
          <ul className="mt-6 space-y-3">
            {wasteful.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground/50">
                  <X className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground/70 line-through decoration-foreground/30">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative rounded-3xl border-2 border-accent bg-accent-soft p-7 shadow-xl"
        >
          <span className="absolute -top-3 right-6 rounded-full bg-accent-strong px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-md">
            COMPLETE PACKAGE
          </span>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-accent">
              TinyMora Bundle
            </h3>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              ₹149
            </span>
          </div>
          <ul className="mt-6 space-y-3">
            {valuable.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
