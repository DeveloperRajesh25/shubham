"use client";

import { motion } from "motion/react";
import { Printer, BarChart3, Award } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

const steps = [
  {
    num: "01",
    icon: Printer,
    title: "Print Worksheets",
    description:
      "Select from our massive library and print what your child needs for the day.",
    color: "#EA580C",
    bg: "#FFEDD5",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Track Progress",
    description:
      "Monitor your child's daily progress and engagement as they complete activities.",
    color: "#0891B2",
    bg: "#CFFAFE",
  },
  {
    num: "03",
    icon: Award,
    title: "Reward Your Child",
    description:
      "Reward them with the included certificates to keep them excited and motivated!",
    color: "#16A34A",
    bg: "#DCFCE7",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow color="accent">Easy steps</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          3 Easy Steps to <span className="text-accent">Follow</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-base text-foreground/70 md:text-lg"
        >
          Get started with our 14,000+ worksheets in minutes.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="relative rounded-2xl border-2 border-border bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-extrabold text-white"
                style={{ background: s.color }}
              >
                STEP {s.num}
              </span>
              <div
                className="mx-auto mt-2 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: s.bg, color: s.color }}
              >
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
