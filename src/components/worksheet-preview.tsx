"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/config";

interface Sheet {
  category: string;
  title: string;
  src: string;
}

const sheets: Sheet[] = [
  { category: "Alphabet", title: "Letter Aa tracing", src: "/images/book-content-pages/page-01.jpeg" },
  { category: "Hindi", title: "Varnamala — अ", src: "/images/book-content-pages/page-02.jpeg" },
  { category: "Tracing", title: "Uppercase tracing", src: "/images/book-content-pages/page-03.jpeg" },
  { category: "Science", title: "My body parts", src: "/images/book-content-pages/page-04.jpeg" },
  { category: "Coloring", title: "Apple — color me", src: "/images/book-content-pages/page-05.jpeg" },
  { category: "Math", title: "Symmetry", src: "/images/book-content-pages/page-06.jpeg" },
  { category: "Logic", title: "Puzzle game", src: "/images/book-content-pages/page-07.jpeg" },
  { category: "Cut & Paste", title: "Pattern sheets", src: "/images/book-content-pages/page-08.jpeg" },
  { category: "Coloring", title: "Color flashcards", src: "/images/book-content-pages/page-09.jpeg" },
  { category: "Planners", title: "Calendar", src: "/images/book-content-pages/page-10.jpeg" },
  { category: "Life Skills", title: "Emotion cards", src: "/images/book-content-pages/page-12.jpeg" },
  { category: "Math", title: "Addition", src: "/images/book-content-pages/page-18.jpeg" },
];

function SheetCard({ sheet }: { sheet: Sheet }) {
  return (
    <article
      className="flex w-56 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border-2 border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
      aria-label={`${sheet.title} preview`}
    >
      <div className="relative aspect-3/4 w-full overflow-hidden bg-background">
        <Image
          src={sheet.src}
          alt={`${sheet.title} — printable worksheet sample`}
          fill
          sizes="(max-width: 768px) 70vw, 224px"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-0.5 p-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
          {sheet.category}
        </span>
        <h3 className="text-sm font-bold text-foreground">{sheet.title}</h3>
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
      className="mx-auto max-w-6xl px-0 md:px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-6 text-center md:px-0">
        <Eyebrow color="highlight">Real samples</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Here Are <span className="text-accent">The Samples</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-3 max-w-2xl text-base text-foreground/70 md:text-lg"
        >
          A peek inside — actual pages from the bundle.
        </motion.p>
      </div>

      {/* Mobile: scroll-snap */}
      <div
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 md:hidden"
        aria-label="Worksheet samples — swipe horizontally"
      >
        {sheets.map((s) => (
          <SheetCard key={s.title} sheet={s} />
        ))}
      </div>

      {/* Desktop: marquee */}
      <div
        className="relative mt-10 hidden overflow-hidden md:block"
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
          className="flex gap-3"
          style={{
            width: "max-content",
            animation: reduce ? "none" : "marquee 60s linear infinite",
          }}
        >
          {marqueeSheets.map((s, i) => (
            <SheetCard key={`${s.title}-${i}`} sheet={s} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center px-6 md:px-0">
        <ButtonLink
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="group"
        >
          Get the Full Bundle — ₹149
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </ButtonLink>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-marquee] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
