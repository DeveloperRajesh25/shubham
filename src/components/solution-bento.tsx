"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

interface BentoCard {
  category: string;
  title: string;
  description: string;
  className: string;
  showVisual?: boolean;
}

const cards: BentoCard[] = [
  {
    category: "Built by educators",
    title: "Designed by real educators",
    description:
      "Two ex-Montessori teachers and a child psychologist sit on the curriculum team. Every worksheet is reviewed before it ships.",
    className: "md:col-span-1 md:row-span-2",
    showVisual: true,
  },
  {
    category: "Age-graded",
    title: "Age-graded, not age-guessed",
    description:
      "Every sheet labelled 2–3, 4–5, or 6–8 — no more wondering whether it's too easy or too hard.",
    className: "md:col-span-1",
  },
  {
    category: "Print-friendly",
    title: "Print-friendly by design",
    description:
      "Black-and-white friendly. Low-ink option included. Works on any home or stationery-shop printer.",
    className: "md:col-span-1",
  },
  {
    category: "Skill-mapped",
    title: "Skill-mapped",
    description:
      "Each sheet is tagged to a specific developmental skill — fine motor, phonics, number sense — so you know what your kid is actually building.",
    className: "md:col-span-1",
  },
  {
    category: "Updates included",
    title: "Updates included",
    description:
      "We ship 200+ new worksheets every quarter. Free for life — no upgrade fees.",
    className: "md:col-span-1",
  },
];

function PenEditedSheet() {
  return (
    <div className="mt-6 rounded-xl border border-border bg-background p-5">
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Phonics · Age 4–5
      </div>
      <div className="font-display text-xl text-foreground mt-1">
        Beginning sounds
      </div>
      <div className="mt-3 space-y-2 text-sm text-foreground">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg">B</span>
          <span className="text-muted-foreground">— ball, bat, bee</span>
          <span
            className="ml-auto text-xs italic"
            style={{ color: "var(--accent)" }}
          >
            +bird?
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-display text-lg">C</span>
          <span className="relative text-muted-foreground">
            cat, can, cup
            <span
              className="absolute left-0 top-1/2 h-[1.5px] w-[34%]"
              style={{ background: "var(--accent)" }}
            />
          </span>
          <span
            className="ml-auto text-xs italic"
            style={{ color: "var(--accent)" }}
          >
            simpler
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-display text-lg">D</span>
          <span className="text-muted-foreground">— dog, drum, door</span>
        </div>
      </div>
      <div
        className="mt-4 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px]"
        style={{
          color: "var(--accent)",
          borderColor: "var(--accent)",
        }}
      >
        Reviewed · 2 edits
      </div>
    </div>
  );
}

export function SolutionBento() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-3xl">
        <Eyebrow>Why parents switch</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          Every worksheet is built like a tiny, well-made book.
        </motion.h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 md:auto-rows-fr">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            className={cn(
              "group flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-200 hover:border-foreground/40 hover:-translate-y-0.5",
              c.className,
            )}
          >
            <p
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              {c.category}
            </p>
            <h3 className="mt-3 text-xl md:text-2xl font-medium text-foreground">
              {c.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              {c.description}
            </p>
            {c.showVisual && <PenEditedSheet />}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
