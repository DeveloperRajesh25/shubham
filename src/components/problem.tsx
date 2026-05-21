"use client";

import { motion } from "motion/react";
import { Brain, Moon, Activity, GraduationCap } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

const problems = [
  {
    icon: Brain,
    title: "Mental Health Issues",
    description:
      "Excessive screen time leads to anxiety, irritability, and shorter attention spans in young children.",
    color: "#DC2626",
    bg: "#FEE2E2",
  },
  {
    icon: Activity,
    title: "Physical Health Problems",
    description:
      "Eye strain, poor posture, and obesity from prolonged device usage stack up fast.",
    color: "#EA580C",
    bg: "#FFEDD5",
  },
  {
    icon: Moon,
    title: "Disrupted Sleep Quality",
    description:
      "Blue light affects melatonin production, causing real sleep disorders in kids.",
    color: "#7C3AED",
    bg: "#EDE9FE",
  },
  {
    icon: GraduationCap,
    title: "Poor Academic Performance",
    description:
      "Children addicted to phones struggle with focus, leading to declining grades.",
    color: "#0891B2",
    bg: "#CFFAFE",
  },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 md:py-24">
      <div className="text-center">
        <Eyebrow color="accent">The parent problem</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Turn Screen Time Into{" "}
          <span className="text-accent">Your Child&apos;s Future</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-base text-foreground/70 md:text-lg"
        >
          The hidden dangers of mobile phone addiction in children — and what
          you can do about it today.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group rounded-2xl border-2 border-border bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: p.bg, color: p.color }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
