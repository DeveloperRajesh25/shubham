"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowDown, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/config";

function HeroBundleShowcase() {
  const reduce = useReducedMotion();
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl p-4 md:p-8"
      style={{ background: "var(--accent-soft)" }}
    >
      {/* Secondary box — behind, rotated */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20, rotate: 10 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="absolute right-2 top-1/2 h-[70%] w-[55%] -translate-y-1/2 overflow-hidden rounded-xl shadow-md"
        aria-hidden
      >
        <Image
          src="/images/book-poster-2.jpeg"
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, 300px"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Primary box — front and centre */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        whileHover={reduce ? undefined : { rotate: 0, scale: 1.02 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="absolute left-2 top-1/2 h-[88%] w-[72%] -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-xl"
        aria-label="Kids Worksheets Bundle — printable mega bundle"
      >
        <Image
          src="/images/book-poster-1.jpeg"
          alt="14,000+ Kids Worksheets — Ultimate Mega Learning Bundle"
          fill
          sizes="(max-width: 768px) 80vw, 400px"
          className="object-cover"
          priority
        />
      </motion.div>
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
            <ButtonLink
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="group"
            >
              Get instant access — ₹149
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
          <HeroBundleShowcase />
        </motion.div>
      </div>
    </section>
  );
}
