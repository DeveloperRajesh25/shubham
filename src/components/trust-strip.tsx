"use client";

import { motion } from "motion/react";

const outlets = [
  "Times of India",
  "YourStory",
  "The Better India",
  "Indian Express",
];

export function TrustStrip() {
  return (
    <section
      aria-label="As featured in"
      className="border-y border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 text-muted-foreground sm:flex-row sm:flex-wrap"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            Featured in
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {outlets.map((o, i) => (
              <span key={o} className="flex items-center gap-8">
                <span
                  className="font-display text-lg tracking-tight text-foreground/30 transition-opacity duration-300 hover:text-foreground/80"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {o}
                </span>
                {i < outlets.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:inline-block"
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
