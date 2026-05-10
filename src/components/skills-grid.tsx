"use client";

import { motion } from "motion/react";
import {
  Hand,
  Activity,
  Type,
  AudioLines,
  Eye,
  BookOpen,
  BookMarked,
  PenLine,
  PenTool,
  Hash,
  Calculator,
  Plus,
  Minus,
  X as XIcon,
  Square,
  Ruler,
  Clock,
  Coins,
  Repeat,
  ListOrdered,
  Layers,
  Brain,
  Compass,
  Lightbulb,
  Target,
  ListChecks,
  ArrowRight as ArrowRightIcon,
  Puzzle,
  Sparkles,
  MessageCircle,
  Palette,
  ScanEye,
  Smile,
  HeartHandshake,
  Anchor,
  Sun,
  Handshake,
  Droplets,
  Flag,
  Search,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Skill {
  name: string;
  icon: LucideIcon;
}

const skills: Skill[] = [
  { name: "Fine motor", icon: Hand },
  { name: "Gross motor", icon: Activity },
  { name: "Letter recognition", icon: Type },
  { name: "Phonemic awareness", icon: AudioLines },
  { name: "Sight words", icon: Eye },
  { name: "Vocabulary", icon: BookOpen },
  { name: "Reading comprehension", icon: BookMarked },
  { name: "Spelling", icon: PenLine },
  { name: "Handwriting", icon: PenTool },
  { name: "Number sense", icon: Hash },
  { name: "Counting", icon: Calculator },
  { name: "Addition", icon: Plus },
  { name: "Subtraction", icon: Minus },
  { name: "Multiplication basics", icon: XIcon },
  { name: "Shapes", icon: Square },
  { name: "Measurement", icon: Ruler },
  { name: "Time", icon: Clock },
  { name: "Money", icon: Coins },
  { name: "Patterns", icon: Repeat },
  { name: "Sorting", icon: ListOrdered },
  { name: "Classification", icon: Layers },
  { name: "Logical reasoning", icon: Brain },
  { name: "Spatial reasoning", icon: Compass },
  { name: "Memory", icon: Lightbulb },
  { name: "Attention span", icon: Target },
  { name: "Following instructions", icon: ListChecks },
  { name: "Sequencing", icon: ArrowRightIcon },
  { name: "Problem-solving", icon: Puzzle },
  { name: "Creativity", icon: Sparkles },
  { name: "Self-expression", icon: MessageCircle },
  { name: "Color recognition", icon: Palette },
  { name: "Visual discrimination", icon: ScanEye },
  { name: "Emotion identification", icon: Smile },
  { name: "Empathy", icon: HeartHandshake },
  { name: "Self-regulation", icon: Anchor },
  { name: "Daily routines", icon: Sun },
  { name: "Manners", icon: Handshake },
  { name: "Hygiene awareness", icon: Droplets },
  { name: "Cultural awareness", icon: Flag },
  { name: "Curiosity", icon: Search },
];

export function SkillsGrid() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-3xl">
        <Eyebrow>Skill development</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          40+ developmental skills, all in one bundle.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Every skill mapped to early childhood development frameworks (NCERT
          FLN + CBSE Foundational Stage).
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4">
        {skills.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: (i % 4) * 0.06,
                ease: "easeOut",
              }}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-foreground/40 hover:-translate-y-0.5"
            >
              <Icon
                className="h-4 w-4 shrink-0 text-foreground transition-colors duration-200 group-hover:text-[var(--accent)]"
                aria-hidden
              />
              <span className="text-sm font-medium text-foreground">
                {s.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
