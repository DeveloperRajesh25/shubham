"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CHECKOUT_URL } from "@/lib/config";

interface Sheet {
  num: string;
  category: string;
  age: string;
  title: string;
  src: string;
}

const sheets: Sheet[] = [
  { num: "01", category: "Alphabet", age: "Age 4–5", title: "Letter Aa tracing", src: "/images/book-content-pages/page-01.jpeg" },
  { num: "02", category: "Hindi", age: "Age 4–5", title: "Varnamala — अ", src: "/images/book-content-pages/page-02.jpeg" },
  { num: "03", category: "Tracing", age: "Age 3–4", title: "Uppercase letter tracing", src: "/images/book-content-pages/page-03.jpeg" },
  { num: "04", category: "Science", age: "Age 4–6", title: "My body parts", src: "/images/book-content-pages/page-04.jpeg" },
  { num: "05", category: "Coloring", age: "Age 2–4", title: "Apple — color me", src: "/images/book-content-pages/page-05.jpeg" },
  { num: "06", category: "Math", age: "Age 5–7", title: "Symmetry — watermelon", src: "/images/book-content-pages/page-06.jpeg" },
  { num: "07", category: "Logic", age: "Age 3–5", title: "Puzzle game", src: "/images/book-content-pages/page-07.jpeg" },
  { num: "08", category: "Cut & Paste", age: "Age 4–6", title: "Pattern sheets", src: "/images/book-content-pages/page-08.jpeg" },
  { num: "09", category: "Coloring", age: "Age 2–3", title: "Color flashcards", src: "/images/book-content-pages/page-09.jpeg" },
  { num: "10", category: "Planners", age: "Age 5–7", title: "Today is… calendar", src: "/images/book-content-pages/page-10.jpeg" },
  { num: "11", category: "Life Skills", age: "Age 4–6", title: "All about my dad", src: "/images/book-content-pages/page-11.jpeg" },
  { num: "12", category: "Life Skills", age: "Age 4–6", title: "Emotion flashcards", src: "/images/book-content-pages/page-12.jpeg" },
  { num: "13", category: "Coloring", age: "Age 5–8", title: "Alphabet coloring — A", src: "/images/book-content-pages/page-13.jpeg" },
  { num: "14", category: "Planners", age: "Age 4–7", title: "Daily responsibilities", src: "/images/book-content-pages/page-14.jpeg" },
  { num: "15", category: "Planners", age: "Age 5–8", title: "Weekly chore chart", src: "/images/book-content-pages/page-15.jpeg" },
  { num: "16", category: "Math", age: "Age 7–8", title: "Division practice", src: "/images/book-content-pages/page-16.jpeg" },
  { num: "17", category: "Art & Craft", age: "Age 5–7", title: "Paper folding — i", src: "/images/book-content-pages/page-17.jpeg" },
  { num: "18", category: "Math", age: "Age 6–8", title: "Addition practice", src: "/images/book-content-pages/page-18.jpeg" },
  { num: "19", category: "Science", age: "Age 4–6", title: "Solar system", src: "/images/book-content-pages/page-19.jpeg" },
  { num: "20", category: "Science", age: "Age 5–7", title: "Weather conditions", src: "/images/book-content-pages/page-20.jpeg" },
  { num: "21", category: "Tracing", age: "Age 3–5", title: "Trace the shapes", src: "/images/book-content-pages/page-21.jpeg" },
  { num: "22", category: "Logic", age: "Age 4–6", title: "Maze game — letter A", src: "/images/book-content-pages/page-22.jpeg" },
];

function SheetCard({ sheet }: { sheet: Sheet }) {
  return (
    <article
      className="flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/40 hover:-translate-y-0.5 sm:w-72"
      aria-label={`${sheet.title} preview`}
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-background">
        <Image
          src={sheet.src}
          alt={`${sheet.title} — printable worksheet sample`}
          fill
          sizes="(max-width: 768px) 70vw, 288px"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {sheet.category} · {sheet.age}
          </span>
          <span className="text-[10px] text-muted-foreground/60">{sheet.num}</span>
        </div>
        <h3 className="font-display text-lg text-foreground">{sheet.title}</h3>
        <div
          className="mt-2 h-1 w-10 rounded-full"
          style={{ background: "var(--accent)" }}
          aria-hidden
        />
      </div>
    </article>
  );
}

export function WorksheetPreview() {
  const reduce = useReducedMotion();
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          22 actual pages from the bundle, pulled at random. Hover the row to
          pause the scroll.
        </motion.p>
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
            animation: reduce ? "none" : "marquee 80s linear infinite",
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
          target="_blank"
          rel="noopener noreferrer"
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
