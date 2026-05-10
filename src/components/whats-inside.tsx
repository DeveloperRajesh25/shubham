"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Category {
  num: string;
  title: string;
  pages: string;
  description: string;
}

const categories: Category[] = [
  {
    num: "01",
    title: "Alphabet & Phonics",
    pages: "1,200+",
    description:
      "A–Z tracing, phonics, beginning sounds, sight words.",
  },
  {
    num: "02",
    title: "Numbers & Counting",
    pages: "950+",
    description: "1–100, counting objects, number tracing, place value.",
  },
  {
    num: "03",
    title: "Math Basics",
    pages: "1,400+",
    description:
      "Addition, subtraction, shapes, patterns, time, money.",
  },
  {
    num: "04",
    title: "Tracing & Pencil Control",
    pages: "800+",
    description: "Lines, curves, mazes, pre-writing patterns.",
  },
  {
    num: "05",
    title: "Cut & Paste",
    pages: "600+",
    description: "Scissor skills, sequencing, sorting activities.",
  },
  {
    num: "06",
    title: "Coloring Pages",
    pages: "1,500+",
    description: "Animals, vehicles, festivals, mandalas.",
  },
  {
    num: "07",
    title: "Hindi & Regional",
    pages: "700+",
    description: "Varnamala, matras, simple words.",
  },
  {
    num: "08",
    title: "Science for Kids",
    pages: "500+",
    description: "Body, plants, weather, space, animals.",
  },
  {
    num: "09",
    title: "Logic & Puzzles",
    pages: "650+",
    description: "Mazes, sudoku-junior, pattern matching.",
  },
  {
    num: "10",
    title: "Life Skills & Emotions",
    pages: "400+",
    description: "Manners, feelings, daily routines, hygiene.",
  },
  {
    num: "11",
    title: "Art & Craft Templates",
    pages: "800+",
    description: "Origami guides, paper crafts, masks.",
  },
  {
    num: "12",
    title: "Bonus: Planners & Charts",
    pages: "500+",
    description: "Reward charts, behavior trackers, daily routines.",
  },
];

export function WhatsInside() {
  return (
    <section
      id="whats-inside"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="max-w-3xl">
        <Eyebrow>What&apos;s inside the bundle</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          10,000+ worksheets. 12 categories. One download.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          A complete early-learning library — the kind of thing schools charge
          ₹15,000/year for. You pay once.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
        {categories.map((c, i) => (
          <motion.article
            key={c.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.08,
              ease: "easeOut",
            }}
            className="group rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-200 hover:border-foreground/40 hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {c.num}
              </span>
              <span
                className="rounded-full border px-2.5 py-1 text-[11px]"
                style={{
                  color: "var(--accent)",
                  borderColor: "var(--accent)",
                  background: "var(--accent-soft)",
                }}
              >
                {c.pages} pages
              </span>
            </div>
            <h3 className="mt-4 text-xl font-medium text-foreground">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {c.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
