"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowDown, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/config";

function HeroPagesMockup() {
  const reduce = useReducedMotion();
  const tilt = reduce ? 0 : -3;
  return (
    <div
      className="relative mx-auto aspect-[5/6] w-full max-w-md rounded-3xl p-6 md:p-10"
      style={{ background: "var(--accent-soft)" }}
    >
      {/* back page */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: 6 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 h-[78%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card shadow-sm"
        aria-hidden
      >
        <PageContent variant="numbers" />
      </motion.div>
      {/* middle page */}
      <motion.div
        initial={{ opacity: 0, y: 18, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card shadow-sm"
        aria-hidden
      >
        <PageContent variant="alphabet" />
      </motion.div>
      {/* top page (interactive tilt) */}
      <motion.div
        initial={{ opacity: 0, y: 12, rotate: tilt }}
        animate={{ opacity: 1, y: 0, rotate: tilt }}
        whileHover={reduce ? undefined : { rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 h-[82%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card shadow-md"
        aria-label="Worksheet preview"
      >
        <PageContent variant="tracing" />
      </motion.div>
    </div>
  );
}

function PageContent({
  variant,
}: {
  variant: "tracing" | "alphabet" | "numbers";
}) {
  if (variant === "tracing") {
    return (
      <div className="flex h-full flex-col px-5 py-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Tracing · Age 4–5
          </span>
          <span className="font-display text-base text-foreground">a</span>
        </div>
        <div className="font-display text-3xl leading-none text-foreground">
          Trace the letter
        </div>
        <div className="mt-4 grid flex-1 grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded border border-dashed border-border text-3xl text-muted-foreground/40"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              a
            </div>
          ))}
        </div>
        <div className="mt-3 h-1 w-12 rounded-full" style={{ background: "var(--accent)" }} />
      </div>
    );
  }
  if (variant === "alphabet") {
    return (
      <div className="flex h-full flex-col px-5 py-6">
        <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          Alphabet · Age 2–3
        </span>
        <div className="mt-2 font-display text-2xl">A is for…</div>
        <div className="mt-4 grid flex-1 grid-cols-2 gap-2">
          {["Apple", "Ant", "Axe", "Arc"].map((w) => (
            <div
              key={w}
              className="flex items-center justify-center rounded border border-border bg-background/40 text-xs text-muted-foreground"
            >
              {w}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col px-5 py-6">
      <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
        Counting · Age 4–5
      </span>
      <div className="mt-2 font-display text-2xl">Count to ten</div>
      <div className="mt-4 grid flex-1 grid-cols-5 gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded border border-border text-sm text-muted-foreground"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[90vh] max-w-6xl items-center px-6 py-16 md:py-24"
    >
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            For parents of kids 2–8
          </p>

          <h1 className="font-display mt-5 text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
            The screen-free way your kid{" "}
            <span className="relative inline-block italic">
              actually
              <motion.svg
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 5 Q 50 1, 100 4 T 198 4"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                />
              </motion.svg>
            </span>{" "}
            wants to learn.
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg leading-relaxed">
            10,000+ printable worksheets — alphabet, math, phonics, art, life
            skills — designed by educators, loved by kids. Download once, print
            forever.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={CHECKOUT_URL} size="lg" className="group">
              Get instant access — ₹499
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </ButtonLink>
            <a
              href="#whats-inside"
              className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors"
            >
              See what&apos;s inside
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5"
                    fill="var(--accent)"
                    stroke="var(--accent)"
                  />
                ))}
              </div>
              <span className="text-foreground font-medium">4.9</span>
            </div>
            <span className="text-muted-foreground/50">·</span>
            <span>32,000+ parents</span>
            <span className="text-muted-foreground/50">·</span>
            <span>Instant PDF download</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="order-1 md:order-2"
        >
          <HeroPagesMockup />
        </motion.div>
      </div>
    </section>
  );
}
