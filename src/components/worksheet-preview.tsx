"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CHECKOUT_URL } from "@/lib/config";

interface Sheet {
  num: string;
  category: string;
  age: string;
  title: string;
  body: React.ReactNode;
}

const sheets: Sheet[] = [
  {
    num: "01",
    category: "Phonics",
    age: "Age 4–5",
    title: "Beginning sounds",
    body: (
      <div className="grid grid-cols-3 gap-2 mt-3">
        {["B", "C", "D", "F", "G", "H"].map((l) => (
          <div
            key={l}
            className="flex h-12 items-center justify-center rounded border border-border font-display text-xl text-foreground"
          >
            {l}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    category: "Numbers",
    age: "Age 2–3",
    title: "Count to 5",
    body: (
      <div className="grid grid-cols-5 gap-1.5 mt-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="flex h-10 items-center justify-center rounded border border-dashed border-muted-foreground/40 font-display text-lg text-muted-foreground/40"
          >
            {n}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "03",
    category: "Tracing",
    age: "Age 3–4",
    title: "Curves & lines",
    body: (
      <svg
        viewBox="0 0 120 60"
        className="mt-3 h-20 w-full text-muted-foreground/40"
      >
        <path
          d="M5 30 Q 30 5, 60 30 T 115 30"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M5 50 L 115 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
    ),
  },
  {
    num: "04",
    category: "Math",
    age: "Age 6–8",
    title: "Add & match",
    body: (
      <div className="mt-3 space-y-1.5 text-sm text-foreground">
        <div>3 + 2 = ___</div>
        <div>5 + 4 = ___</div>
        <div>7 + 1 = ___</div>
        <div>2 + 6 = ___</div>
      </div>
    ),
  },
  {
    num: "05",
    category: "Hindi",
    age: "Age 4–5",
    title: "Varnamala",
    body: (
      <div className="grid grid-cols-3 gap-2 mt-3">
        {["क", "ख", "ग", "घ", "च", "छ"].map((l) => (
          <div
            key={l}
            className="flex h-12 items-center justify-center rounded border border-border font-display text-2xl"
          >
            {l}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "06",
    category: "Coloring",
    age: "Age 2–3",
    title: "Animal friends",
    body: (
      <svg
        viewBox="0 0 120 80"
        className="mt-3 h-20 w-full text-muted-foreground/40"
      >
        <circle cx="40" cy="50" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="32" cy="42" r="3" fill="currentColor" />
        <circle cx="48" cy="42" r="3" fill="currentColor" />
        <path d="M32 56 Q 40 62, 48 56" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M85 35 Q 95 25, 100 40 Q 105 25, 115 35 Q 105 50, 100 50 Q 95 50, 85 35 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    num: "07",
    category: "Logic",
    age: "Age 6–8",
    title: "Pattern match",
    body: (
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {["▲", "●", "▲", "?", "■", "●", "■", "?"].map((s, i) => (
          <div
            key={i}
            className="flex h-10 items-center justify-center rounded border border-border text-base text-foreground"
          >
            {s}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "08",
    category: "Life Skills",
    age: "Age 4–5",
    title: "How I feel",
    body: (
      <div className="mt-3 space-y-2 text-sm text-foreground">
        <div className="flex justify-between border-b border-border pb-1.5">
          <span className="text-muted-foreground">Today I felt…</span>
          <span>__</span>
        </div>
        <div className="flex justify-between border-b border-border pb-1.5">
          <span className="text-muted-foreground">Because…</span>
          <span>__</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Next time I&apos;ll…</span>
          <span>__</span>
        </div>
      </div>
    ),
  },
];

function SheetCard({ sheet }: { sheet: Sheet }) {
  return (
    <article
      className="flex w-72 shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/40 sm:w-80"
      aria-label={`${sheet.title} preview`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {sheet.category} · {sheet.age}
        </span>
        <span className="text-[10px] text-muted-foreground/60">{sheet.num}</span>
      </div>
      <h3 className="mt-3 font-display text-2xl text-foreground">
        {sheet.title}
      </h3>
      <div className="flex-1">{sheet.body}</div>
      <div
        className="mt-4 h-1 w-10 rounded-full"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />
    </article>
  );
}

export function WorksheetPreview() {
  const reduce = useReducedMotion();
  // Duplicate for seamless marquee on desktop
  const marqueeSheets = [...sheets, ...sheets];

  return (
    <section
      id="preview"
      className="mx-auto max-w-6xl px-0 md:px-6 py-24 md:py-32"
    >
      <div className="max-w-3xl px-6 md:px-0">
        <Eyebrow>A peek inside</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
        >
          Real worksheets. No stock-photo nonsense.
        </motion.h2>
      </div>

      {/* Mobile: scroll-snap */}
      <div
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:hidden"
        aria-label="Worksheet samples — swipe horizontally"
      >
        {sheets.map((s) => (
          <SheetCard key={s.num} sheet={s} />
        ))}
      </div>

      {/* Desktop: marquee */}
      <div
        className="relative mt-12 hidden overflow-hidden md:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
        onMouseEnter={(e) => {
          const inner = e.currentTarget.querySelector(
            "[data-marquee]",
          ) as HTMLElement | null;
          if (inner) inner.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          const inner = e.currentTarget.querySelector(
            "[data-marquee]",
          ) as HTMLElement | null;
          if (inner) inner.style.animationPlayState = "running";
        }}
      >
        <div
          data-marquee
          className="flex gap-4"
          style={{
            width: "max-content",
            animation: reduce ? "none" : "marquee 40s linear infinite",
          }}
        >
          {marqueeSheets.map((s, i) => (
            <SheetCard key={`${s.num}-${i}`} sheet={s} />
          ))}
        </div>
      </div>

      <div className="mt-10 px-6 md:px-0">
        <a
          href={CHECKOUT_URL}
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
        >
          View the full bundle
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-marquee] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
