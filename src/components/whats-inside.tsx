"use client";

import { motion } from "motion/react";
import {
  BookA,
  Hash,
  Calculator,
  PenLine,
  Scissors,
  Palette,
  Languages,
  Sparkles,
  Puzzle,
  Heart,
  Brush,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Category {
  icon: LucideIcon;
  title: string;
  pages: string;
  description: string;
  color: string;
  bg: string;
}

const categories: Category[] = [
  { icon: BookA, title: "Alphabet & Phonics", pages: "1,200+", description: "A–Z tracing, beginning sounds, sight words.", color: "#DC2626", bg: "#FEE2E2" },
  { icon: Hash, title: "Numbers & Counting", pages: "950+", description: "1–100, counting, place value, tracing.", color: "#EA580C", bg: "#FFEDD5" },
  { icon: Calculator, title: "Math Basics", pages: "1,400+", description: "Addition, subtraction, shapes, time, money.", color: "#0891B2", bg: "#CFFAFE" },
  { icon: PenLine, title: "Tracing & Handwriting", pages: "800+", description: "Lines, curves, mazes, pre-writing patterns.", color: "#7C3AED", bg: "#EDE9FE" },
  { icon: Scissors, title: "Cut & Paste", pages: "600+", description: "Scissor skills, sequencing, sorting.", color: "#DB2777", bg: "#FCE7F3" },
  { icon: Palette, title: "Coloring Pages", pages: "1,500+", description: "Animals, vehicles, festivals, mandalas.", color: "#CA8A04", bg: "#FEF9C3" },
  { icon: Languages, title: "Hindi & Regional", pages: "700+", description: "Varnamala, matras, simple words.", color: "#16A34A", bg: "#DCFCE7" },
  { icon: Sparkles, title: "Science for Kids", pages: "500+", description: "Body, plants, weather, space, animals.", color: "#0EA5E9", bg: "#E0F2FE" },
  { icon: Puzzle, title: "Logic & Puzzles", pages: "650+", description: "Mazes, sudoku-junior, pattern matching.", color: "#9333EA", bg: "#F3E8FF" },
  { icon: Heart, title: "Life Skills & Emotions", pages: "400+", description: "Manners, feelings, routines, hygiene.", color: "#E11D48", bg: "#FFE4E6" },
  { icon: Brush, title: "Art & Craft Templates", pages: "800+", description: "Origami guides, paper crafts, masks.", color: "#F59E0B", bg: "#FEF3C7" },
  { icon: ClipboardList, title: "Bonus: Planners & Charts", pages: "500+", description: "Reward charts, behavior trackers, routines.", color: "#10B981", bg: "#D1FAE5" },
];

export function WhatsInside() {
  return (
    <section
      id="whats-inside"
      className="mx-auto max-w-6xl px-6 py-8 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow color="success">What&apos;s inside</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Here Is What You Are Going To{" "}
          <span className="text-accent">Give Your Child</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-base text-foreground/70 md:text-lg"
        >
          14,000+ worksheets across 12 categories — a complete early-learning
          library schools charge ₹15,000/year for. You pay once.
        </motion.p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: "easeOut",
              }}
              className="group flex items-start gap-4 rounded-2xl border-2 border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: c.bg, color: c.color }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-foreground">
                    {c.title}
                  </h3>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{ background: c.bg, color: c.color }}
                  >
                    {c.pages}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm font-semibold text-foreground/70">
        And Many More!... Discover the joy of Learning Through Playful Kids Worksheets!
      </p>
    </section>
  );
}
